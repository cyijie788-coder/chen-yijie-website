import fs from 'node:fs';
import path from 'node:path';
import {spawn} from 'node:child_process';
import {once} from 'node:events';
import {fileURLToPath} from 'node:url';
import {DotLottie} from '@lottiefiles/dotlottie-web';
import {createCanvas} from '@napi-rs/canvas';

const work=path.dirname(fileURLToPath(import.meta.url));
const root=path.dirname(work);
const out=path.join(root,'4K60帧透明动效');
fs.mkdirSync(out,{recursive:true});
const ffmpeg='/Users/mima1234/Desktop/视频制作/.venv/lib/python3.9/site-packages/imageio_ffmpeg/binaries/ffmpeg-macos-aarch64-v7.1';
const wasm=fs.readFileSync(path.join(work,'node_modules/@lottiefiles/dotlottie-web/dist/dotlottie-player.wasm'));
DotLottie.setWasmUrl('data:application/wasm;base64,'+wasm.toString('base64'));
const chosen=JSON.parse(fs.readFileSync(path.join(work,'素材来源.json'),'utf8'));
const limit=Number(process.argv[2]||chosen.length);
const WIDTH=3840,HEIGHT=2160,FPS=60;
let results=[];
for(const item of chosen.slice(0,limit)){
  const file=path.join(out,item.name+'.mov');
  if(fs.existsSync(file)&&fs.existsSync(path.join(work,item.name+'-render.json'))){
    results.push(JSON.parse(fs.readFileSync(path.join(work,item.name+'-render.json'),'utf8')));
    console.log('已完成，跳过',item.name);continue;
  }
  const data=JSON.parse(fs.readFileSync(item.vector.path,'utf8'));
  const originalLayers=data.layers.length;
  data.layers=data.layers.filter(layer=>!(layer.ty===1&&/^#(?:fff|ffffff)$/i.test(layer.sc||'')&&layer.sw>=data.w&&layer.sh>=data.h));
  const removed=originalLayers-data.layers.length;
  const canvas=createCanvas(WIDTH,HEIGHT);
  const player=new DotLottie({canvas,data:JSON.stringify(data),autoplay:false,useFrameInterpolation:true,renderConfig:{devicePixelRatio:1,autoResize:false,freezeOnOffscreen:false},layout:{fit:'contain',align:[0.5,0.5]}});
  await new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>reject(new Error('Animation load timeout')),20000);
    player.addEventListener('load',()=>{clearTimeout(timer);resolve();});
    player.addEventListener('loadError',e=>{clearTimeout(timer);reject(new Error(JSON.stringify(e)));});
  });
  const duration=(data.op-data.ip)/data.fr;
  const frameCount=Math.max(2,Math.round(duration*FPS));
  const encoder=spawn(ffmpeg,['-hide_banner','-loglevel','error','-y','-f','rawvideo','-pixel_format','rgba','-video_size',WIDTH+'x'+HEIGHT,'-framerate',String(FPS),'-i','pipe:0','-an','-frames:v',String(frameCount),'-c:v','qtrle','-pix_fmt','argb','-threads','2','-r',String(FPS),'-movflags','+faststart',file],{stdio:['pipe','ignore','pipe']});
  let error='';encoder.stderr.on('data',d=>{error+=d.toString();});
  const completion=once(encoder,'exit');
  const start=Date.now();
  let sampledAlpha={min:255,max:0};
  console.log('开始矢量导出',item.name,{duration,frameCount,totalFrames:player.totalFrames,sourceFps:data.fr});
  for(let i=0;i<frameCount;i++){
    const f=Math.min(player.totalFrames-0.001,i/FPS*data.fr);
    player.setFrame(f);
    const rgba=player.buffer;
    if(rgba.length!==WIDTH*HEIGHT*4)throw new Error('Unexpected render buffer '+rgba.length);
    if(i===Math.floor(frameCount/3)){
      fs.writeFileSync(path.join(work,item.name+'-4K预览.png'),await canvas.encode('png'));
      for(let p=3;p<rgba.length;p+=4){sampledAlpha.min=Math.min(sampledAlpha.min,rgba[p]);sampledAlpha.max=Math.max(sampledAlpha.max,rgba[p]);}
    }
    if(!encoder.stdin.write(Buffer.from(rgba)))await once(encoder.stdin,'drain');
  }
  encoder.stdin.end();
  const [code]=await completion;
  player.destroy();
  if(code!==0)throw new Error(item.name+' '+error);
  const result={name:item.name,path:file,width:WIDTH,height:HEIGHT,fps:FPS,frames:frameCount,duration:frameCount/FPS,rendered_from:'original vector JSON, not resized GIF',removedWhiteBackgroundLayers:removed,alpha:sampledAlpha,bytes:fs.statSync(file).size,elapsedSeconds:(Date.now()-start)/1000};
  fs.writeFileSync(path.join(work,item.name+'-render.json'),JSON.stringify(result,null,2));results.push(result);
  fs.writeFileSync(path.join(work,'4K导出清单.json'),JSON.stringify(results,null,2));
  console.log('完成',JSON.stringify(result));
}
console.log('本次完成',results.length);
