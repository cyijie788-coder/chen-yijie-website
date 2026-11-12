import concurrent.futures
import json
import os
import pathlib
import subprocess
import urllib.request

ROOT=pathlib.Path(__file__).resolve().parent.parent
WORK=ROOT/'来源与说明'
BASE='https://raw.githubusercontent.com/feitangyuan/onetake/main/'
REPO='https://github.com/feitangyuan/onetake'
PROBE=pathlib.Path('/Users/mima1234/Desktop/视频制作/node_modules/@remotion/compositor-darwin-arm64/ffprobe')
ENV=dict(os.environ,DYLD_LIBRARY_PATH=str(PROBE.parent))
CASES=[
 ('01_onetake_三段创意一镜到底','onetake-launch-30s','onetake-launch','提示框直接展开成下一段画面，多个创意在一条连续镜头里接续。'),
 ('02_one-dot_圆点连续变形','one-dot-15s','one-dot','同一个圆点从光标变为菜单、进度环、曲线和标志细节。'),
 ('03_knockon_碰撞连锁反应','knockon-15s','knockon','前一个元素的碰撞，直接触发下一个元素和场景的动作。'),
 ('04_clearing_时间轴连续缩放','clearing-15s','clearing','从年度日历推近到半小时空档，连续缩放带出信息层级。'),
 ('05_pith_像素展开为界面','pith-21s','pith','从单个发光像素连续拉远，逐渐展开完整产品界面。'),
 ('06_skill-demo_界面元素接力','skill-demo-15s','skill-demo','菜单选项飞入输入框成为标签，操作元素承接下一步。'),
 ('07_motion-web_字体与界面节奏','motion-web-15s','motion-web','文字、界面、停顿和爆发形成一条有韵律的动态演示。'),
 ('08_overlap_图形叠印变形','overlap-15s','overlap','两层印刷图形滑动对齐，显现藏在两层中的新形状。'),
 ('09_infra_热力场变为图像','infra-25s','infra','热力图逐块组织、冷却，过渡成最终照片。'),
 ('10_domino_三维阵列显影','domino-25s','domino','手机组成像素阵列，三维连续运镜与倒下动作显现画面。'),
]

def get(url,path):
    if path.exists() and path.stat().st_size>100:return
    last=None
    for attempt in range(3):
        temp=path.with_suffix(path.suffix+'.part')
        try:
            req=urllib.request.Request(url,headers={'User-Agent':'MotionReferenceCollector/1.0','Connection':'close'})
            with urllib.request.urlopen(req,timeout=20) as response,temp.open('wb') as out:
                while True:
                    block=response.read(1024*1024)
                    if not block:break
                    out.write(block)
            temp.rename(path);return
        except Exception as exc:last=exc
    raise last

def one(record):
    name,folder,stem,description=record
    rel=f'cases/{folder}/{stem}.mp4'
    file=ROOT/(name+'.mp4')
    item=dict(name=name,description=description,source=REPO+'/blob/main/'+rel,download_url=BASE+rel,file=str(file),license='PolyForm Noncommercial 1.0.0',license_url=REPO+'/blob/main/LICENSE',author='Patrick / feitangyuan',purpose='完整动效风格参考；不是可任意商用的通用素材授权')
    try:
        get(BASE+rel,file)
        info=json.loads(subprocess.check_output([str(PROBE),'-v','error','-select_streams','v:0','-show_entries','stream=width,height,r_frame_rate,nb_frames:format=duration','-of','json',str(file)],env=ENV))
        item['media']=info;item['bytes']=file.stat().st_size
        item['is_4k']=info['streams'][0]['width']>=3840 and info['streams'][0]['height']>=2160
        item['status']='ok'
        try:get(BASE+f'cases/{folder}/README.md',WORK/(name+'-原作拆解.txt'))
        except Exception as exc:item['breakdown_error']=str(exc)
    except Exception as exc:item.update(status='error',error=str(exc))
    print(json.dumps(item,ensure_ascii=False),flush=True)
    return item

if __name__=='__main__':
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:items=list(pool.map(one,CASES))
    (WORK/'参考案例清单.json').write_text(json.dumps(items,ensure_ascii=False,indent=2))
    get(BASE+'LICENSE',WORK/'原作者许可.txt')
    print('COMPLETE',sum(x['status']=='ok' for x in items),'/',len(items),flush=True)
