import concurrent.futures
import html
import json
import pathlib
import re
import time
import urllib.request
from PIL import Image

WORK=pathlib.Path(__file__).resolve().parent
ROOT=WORK.parent
CHOSEN=[
 ('01_汽车行驶','driving-car-Ddw6lvOiyX','Umsatz GmbH','汽车话题开场、日常驾驶'),
 ('02_高速公路','driving-on-the-highway-l4Ngxesjep','Five dimension studio','长途自驾、高速行驶'),
 ('03_速度仪表','speedometer-3lQ5xtRfX7','Emre Altintas','性能、速度、加速话题'),
 ('04_充电加载','charging-vqISqBg5qY','TheJohn','充电等待、能量加载、进度提醒'),
 ('05_齿轮运转','gear-how-it-works-1nVhDg5eg5','Sergey Designer','机械结构、传动、技术解释'),
 ('06_维修扳手','tool-DLM0MHUQZT','Sanjib Paul','维修、保养、工具话题'),
 ('07_注意警示','warning-LArZv8rRiX','LottieFiles','知识提醒、用车注意事项'),
 ('08_方向箭头','arrows-dal9bTuokv','Matthias Müller','强调重点、指向细节'),
 ('09_地图定位','location-pin-QH4ubW3bMo','LottieFiles','路线、目的地、探店介绍'),
 ('10_闪光高亮','sparkles-DQkIIriBZO','Anne Tan','亮点、车漆、重点强调'),
]

def fetch(url):
 last=None
 for attempt in range(3):
  try:
   req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0','Connection':'close'})
   with urllib.request.urlopen(req,timeout=12) as r:return r.read()
  except Exception as exc:
   last=exc
 raise last

def one(record):
 name,slug,author,use=record
 page='https://lottiefiles.com/free-animation/'+slug
 result=dict(name=name,page=page,author=author,use=use,license='Lottie Simple License (FL 9.13.21)',license_url='https://lottiefiles.com/page/license')
 try:
  old_path=WORK/'素材来源.json'
  previous=json.loads(old_path.read_text()) if old_path.exists() else []
  cached=next((x for x in previous if x['page']==page and x.get('status')=='ok'),None)
  if cached:
   print(name,'cached',flush=True)
   return cached
  page_file=WORK/(name+'-page.html')
  s=page_file.read_text() if page_file.exists() else fetch(page).decode();page_file.write_text(s)
  assert 'Free to use under the Lottie Simple License' in s,'License statement not found'
  clean=html.unescape(s.replace('\\"','"').replace('\\/','/'))
  paths=list(dict.fromkeys(re.findall(r'a/[0-9a-fA-F-]+/[A-Za-z0-9_-]+\.(?:gif|json|lottie)',clean)))
  gif_paths=[p for p in paths if p.endswith('.gif')]
  json_paths=[p for p in paths if p.endswith('.json')]
  assert gif_paths and json_paths,paths
  gif_url='https://assets-v2.lottiefiles.com/'+gif_paths[0]
  gif_file=ROOT/(name+'.gif')
  if not gif_file.exists():gif_file.write_bytes(fetch(gif_url))
  with Image.open(gif_file) as im:
   assert im.n_frames>1
   durations=[]
   for n in range(im.n_frames):im.seek(n);durations.append(im.info.get('duration',0))
   result['gif']=dict(path=str(gif_file),url=gif_url,width=im.width,height=im.height,frames=im.n_frames,duration_ms=sum(durations))
  candidates=[]
  for jp in json_paths:
   try:
    raw=fetch('https://assets-v2.lottiefiles.com/'+jp)
    data=json.loads(raw)
    if 'layers' in data and 'fr' in data and not any(a.get('p') for a in data.get('assets',[])):
     candidates.append((len(raw),jp,raw,data))
     break
   except Exception:pass
  assert candidates,'No animation JSON'
  _,jp,raw,data=max(candidates,key=lambda x:x[0])
  vector_file=WORK/(name+'.json');vector_file.write_bytes(raw)
  raster_assets=[a for a in data.get('assets',[]) if a.get('p')]
  result['vector']=dict(path=str(vector_file),url='https://assets-v2.lottiefiles.com/'+jp,width=data['w'],height=data['h'],fps=data['fr'],ip=data['ip'],op=data['op'],raster_assets=len(raster_assets))
  assert not raster_assets,'Raster image embedded in source'
  result['status']='ok'
 except Exception as e:result.update(status='error',error=str(e))
 print(json.dumps(result,ensure_ascii=False),flush=True)
 return result

if __name__=='__main__':
 with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:results=list(pool.map(one,CHOSEN))
 (WORK/'素材来源.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
 print('DONE',sum(x['status']=='ok' for x in results),'/',len(results),flush=True)
