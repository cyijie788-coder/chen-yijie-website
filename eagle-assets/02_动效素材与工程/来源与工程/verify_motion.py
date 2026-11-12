import concurrent.futures
import json
import os
import pathlib
import subprocess
from PIL import Image,ImageOps,ImageDraw,ImageFont

WORK=pathlib.Path(__file__).resolve().parent
ROOT=WORK.parent
PROBE=pathlib.Path('/Users/mima1234/Desktop/视频制作/node_modules/@remotion/compositor-darwin-arm64/ffprobe')
ENV=dict(os.environ,DYLD_LIBRARY_PATH=str(PROBE.parent))
FF='/Users/mima1234/Desktop/视频制作/.venv/lib/python3.9/site-packages/imageio_ffmpeg/binaries/ffmpeg-macos-aarch64-v7.1'
sources=json.loads((WORK/'素材来源.json').read_text())
assert len(list(ROOT.glob('*.gif')))==10
def verify(item):
    file=ROOT/'4K60帧透明动效'/(item['name']+'.mov')
    metadata=json.loads(subprocess.check_output([str(PROBE),'-v','error','-select_streams','v:0','-show_entries','stream=codec_name,pix_fmt,width,height,r_frame_rate,nb_frames:format=duration','-of','json',str(file)],env=ENV))
    stream=metadata['streams'][0]
    assert (stream['width'],stream['height'],stream['r_frame_rate'])==(3840,2160,'60/1'),stream
    cmd=[FF,'-v','info','-i',str(file),'-vf',"select='eq(n,0)+eq(n,30)+eq(n,60)',scale=384:216",'-frames:v','3','-fps_mode','passthrough','-f','framemd5','-']
    decoded=subprocess.run(cmd,text=True,capture_output=True,check=True)
    assert 'argb' in decoded.stderr
    metadata['decoded_pixel_format']='argb'
    output=decoded.stdout
    hashes=[line.rsplit(',',1)[-1].strip() for line in output.splitlines() if line and not line.startswith('#')]
    assert len(hashes)==3 and len(set(hashes))>1,(item['name'],hashes)
    print('已核验',item['name'],'3840×2160 / 60fps / Alpha / 动画帧有变化',flush=True)
    return dict(name=item['name'],metadata=metadata,distinct_sample_frames=len(set(hashes)))
with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:results=list(pool.map(verify,sources))
(WORK/'成品核验.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
sheet=Image.new('RGB',(1500,820),'#DDE2E7');draw=ImageDraw.Draw(sheet);font=ImageFont.truetype('/System/Library/Fonts/STHeiti Medium.ttc',22)
for i,x in enumerate(sources):
    im=Image.open(WORK/(x['name']+'-4K预览.png')).convert('RGBA');thumb=ImageOps.contain(im,(285,310),Image.Resampling.LANCZOS)
    px=(i%5)*300+(300-thumb.width)//2;py=(i//5)*410
    sheet.paste(thumb,(px,py+30),thumb);draw.text(((i%5)*300+12,py+350),x['name'],font=font,fill='#15202b')
sheet.save(ROOT/'动效总览.jpg',quality=92)
print('全部完成',len(results),flush=True)
