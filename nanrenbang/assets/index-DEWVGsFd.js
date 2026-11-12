(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function tt(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const te={},an=[],De=()=>{},Cn=()=>!1,mn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Vs=e=>e.startsWith("onUpdate:"),Q=Object.assign,ro=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xf=Object.prototype.hasOwnProperty,re=(e,t)=>xf.call(e,t),H=Array.isArray,Yt=e=>jn(e)==="[object Map]",_t=e=>jn(e)==="[object Set]",ca=e=>jn(e)==="[object Date]",bf=e=>jn(e)==="[object RegExp]",Y=e=>typeof e=="function",J=e=>typeof e=="string",Ve=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",oo=e=>(ae(e)||Y(e))&&Y(e.then)&&Y(e.catch),gl=Object.prototype.toString,jn=e=>gl.call(e),wf=e=>jn(e).slice(8,-1),$s=e=>jn(e)==="[object Object]",Hs=e=>J(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Lt=tt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yf=tt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Bs=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},vf=/-\w/g,ce=Bs(e=>e.replace(vf,t=>t.slice(1).toUpperCase())),_f=/\B([A-Z])/g,Ge=Bs(e=>e.replace(_f,"-$1").toLowerCase()),xn=Bs(e=>e.charAt(0).toUpperCase()+e.slice(1)),Pn=Bs(e=>e?`on${xn(e)}`:""),Pe=(e,t)=>!Object.is(e,t),Rn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ml=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},Pi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},cs=e=>{const t=J(e)?Number(e):NaN;return isNaN(t)?e:t};let da;const js=()=>da||(da=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Sf(e,t){return e+JSON.stringify(t,(n,i)=>typeof i=="function"?i.toString():i)}const Tf="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",kf=tt(Tf);function Ri(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=J(i)?xl(i):Ri(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(J(e)||ae(e))return e}const Ef=/;(?![^(]*\))/g,Cf=/:([^]+)/,Af=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function xl(e){const t={};return e.replace(Af,n=>n.startsWith("/*")?"":n).split(Ef).forEach(n=>{if(n){const i=n.split(Cf);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Ni(e){let t="";if(J(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const i=Ni(e[n]);i&&(t+=i+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Pf(e){if(!e)return null;let{class:t,style:n}=e;return t&&!J(t)&&(e.class=Ni(t)),n&&(e.style=Ri(n)),e}const Rf="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Nf="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",If="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",Df="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",Of=tt(Rf),Mf=tt(Nf),Lf=tt(If),Ff=tt(Df),zf="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Vf=tt(zf);function bl(e){return!!e||e===""}function $f(e,t,n){if(e.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<e.length;s++)i=ct(e[s],t[s],n);return i}function fa(e,t,n){if(e.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of e){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&ct(r,i[a],n)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function Hf(e,t,n){let i=Yt(e),s=Yt(t);if(i||s||(i=_t(e),s=_t(t),i||s))return i&&s?fa(e,t,n):!1;const r=Object.keys(e).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in e){const l=e.hasOwnProperty(a),d=t.hasOwnProperty(a);if(l&&!d||!l&&d||!ct(e[a],t[a],n))return!1}return String(e)===String(t)}function pa(e,t,n,i){n||(n=[new Map,new Map]);const[s,r]=n;if(s.has(e)||r.has(t))return s.get(e)===t&&r.get(t)===e;s.set(e,t),r.set(t,e);const o=i(e,t,n);return s.delete(e),r.delete(t),o}function ct(e,t,n){if(e===t)return!0;let i=ca(e),s=ca(t);return i||s?i&&s?e.getTime()===t.getTime():!1:(i=Ve(e),s=Ve(t),i||s?e===t:(i=H(e),s=H(t),i||s?i&&s?pa(e,t,n,$f):!1:(i=ae(e),s=ae(t),i||s?!i||!s?!1:pa(e,t,n,Hf):String(e)===String(t))))}function Ws(e,t){return e.findIndex(n=>ct(n,t))}const wl=e=>!!(e&&e.__v_isRef===!0),yl=e=>J(e)?e:e==null?"":H(e)||ae(e)&&(e.toString===gl||!Y(e.toString))?wl(e)?yl(e.value):JSON.stringify(e,vl,2):String(e),vl=(e,t)=>wl(t)?vl(e,t.value):Yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s],r)=>(n[ur(i,r)+" =>"]=s,n),{})}:_t(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ur(n))}:Ve(t)?ur(t):ae(t)&&!H(t)&&!$s(t)?String(t):t,ur=(e,t="")=>{var n;return Ve(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};function Bf(e){return e==null?"initial":typeof e=="string"?e===""?" ":e:String(e)}let Se;class ao{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Se&&(Se.active?(this.parent=Se,this.index=(Se.scopes||(Se.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const i=this.scopes.slice();for(t=0,n=i.length;t<n;t++)i[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const i=this.effects.slice();for(t=0,n=i.length;t<n;t++)i[t].resume()}}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){++this._on===1&&(this.prevScope=Se,Se=this)}off(){if(this._on>0&&--this._on===0){if(Se===this)Se=this.prevScope;else{let t=Se;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,i=s.length;n<i;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function jf(e){return new ao(e)}function _l(){return Se}function Sl(e,t=!1){Se&&(Se.active?Se.cleanups.push(e):e())}let pe;const hr=new WeakSet;class fi{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&(Se.active?Se.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,hr.has(this)&&(hr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||kl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ua(this),El(this);const t=pe,n=pt;pe=this,pt=!0;try{return this.fn()}finally{Cl(this),pe=t,pt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)fo(t);this.deps=this.depsTail=void 0,ua(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?hr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ar(this)&&this.run()}get dirty(){return Ar(this)}}let Tl=0,ii,si;function kl(e,t=!1){if(e.flags|=8,t){e.next=si,si=e;return}e.next=ii,ii=e}function lo(){Tl++}function co(){if(--Tl>0)return;if(si){let t=si;for(si=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;ii;){let t=ii;for(ii=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function El(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Cl(e){let t,n=e.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),fo(i),Wf(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=t,e.depsTail=n}function Ar(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Al(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Al(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===pi)||(e.globalVersion=pi,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ar(e))))return;e.flags|=2;const t=e.dep,n=pe,i=pt;pe=e,pt=!0;try{El(e);const s=e.fn(e._value);(t.version===0||Pe(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{pe=n,pt=i,Cl(e),e.flags&=-3}}function fo(e,t=!1){const{dep:n,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)fo(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Wf(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}function Uf(e,t){e.effect instanceof fi&&(e=e.effect.fn);const n=new fi(e);t&&Q(n,t);try{n.run()}catch(s){throw n.stop(),s}const i=n.run.bind(n);return i.effect=n,i}function Kf(e){e.effect.stop()}let pt=!0;const Pl=[];function St(){Pl.push(pt),pt=!1}function Tt(){const e=Pl.pop();pt=e===void 0?!0:e}function ua(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=pe;pe=void 0;try{t()}finally{pe=n}}}let pi=0;class Gf{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Us{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!pe||!pt||pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pe)n=this.activeLink=new Gf(pe,this),pe.deps?(n.prevDep=pe.depsTail,pe.depsTail.nextDep=n,pe.depsTail=n):pe.deps=pe.depsTail=n,Rl(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=pe.depsTail,n.nextDep=void 0,pe.depsTail.nextDep=n,pe.depsTail=n,pe.deps===n&&(pe.deps=i)}return n}trigger(t){this.version++,pi++,this.notify(t)}notify(t){lo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{co()}}}function Rl(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Rl(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ds=new WeakMap,cn=Symbol(""),Pr=Symbol(""),ui=Symbol("");function Le(e,t,n){if(pt&&pe){let i=ds.get(e);i||ds.set(e,i=new Map);let s=i.get(n);s||(i.set(n,s=new Us),s.map=i,s.key=n),s.track()}}function It(e,t,n,i,s,r){const o=ds.get(e);if(!o){pi++;return}const a=l=>{l&&l.trigger()};if(lo(),t==="clear")o.forEach(a);else{const l=H(e),d=l&&Hs(n);if(l&&n==="length"){const c=Number(i);o.forEach((f,u)=>{(u==="length"||u===ui||!Ve(u)&&u>=c)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),d&&a(o.get(ui)),t){case"add":l?d&&a(o.get("length")):(a(o.get(cn)),Yt(e)&&a(o.get(Pr)));break;case"delete":l||(a(o.get(cn)),Yt(e)&&a(o.get(Pr)));break;case"set":Yt(e)&&a(o.get(cn));break}}co()}function qf(e,t){const n=ds.get(e);return n&&n.get(t)}function _n(e){const t=ie(e);return t===e||(Le(t,"iterate",ui),qe(e))?t:gt(e)?vt(e)?t.map(n=>en(dt(n))):t.map(en):t.map(dt)}function Ks(e){return Le(e=ie(e),"iterate",ui),e}function wt(e,t){return gt(e)?en(vt(e)?dt(t):t):dt(t)}const Yf={__proto__:null,[Symbol.iterator](){return gr(this,Symbol.iterator,e=>wt(this,e))},concat(...e){return _n(this).concat(...e.map(t=>H(t)?_n(t):t))},entries(){return gr(this,"entries",e=>(e[1]=wt(this,e[1]),e))},every(e,t){return Ct(this,"every",e,t,void 0,arguments)},filter(e,t){return Ct(this,"filter",e,t,n=>n.map(i=>wt(this,i)),arguments)},find(e,t){return Ct(this,"find",e,t,n=>wt(this,n),arguments)},findIndex(e,t){return Ct(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ct(this,"findLast",e,t,n=>wt(this,n),arguments)},findLastIndex(e,t){return Ct(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ct(this,"forEach",e,t,void 0,arguments)},includes(...e){return mr(this,"includes",e)},indexOf(...e){return mr(this,"indexOf",e)},join(e){return _n(this).join(e)},lastIndexOf(...e){return mr(this,"lastIndexOf",e)},map(e,t){return Ct(this,"map",e,t,void 0,arguments)},pop(){return Gn(this,"pop")},push(...e){return Gn(this,"push",e)},reduce(e,...t){return ga(this,"reduce",e,t)},reduceRight(e,...t){return ga(this,"reduceRight",e,t)},shift(){return Gn(this,"shift")},some(e,t){return Ct(this,"some",e,t,void 0,arguments)},splice(...e){return Gn(this,"splice",e)},toReversed(){return _n(this).toReversed()},toSorted(e){return _n(this).toSorted(e)},toSpliced(...e){return _n(this).toSpliced(...e)},unshift(...e){return Gn(this,"unshift",e)},values(){return gr(this,"values",e=>wt(this,e))}};function gr(e,t,n){const i=Ks(e),s=i[t],r=s.call(i);if(i!==e&&!qe(e)){if(r[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(r));return o.next=()=>ha(r.next(),n),s!==Nl[t]&&Object.defineProperties(o,{return:{get(){const a=r.return;return typeof a=="function"?a.bind(r):a}},throw:{get(){const a=r.throw;return typeof a=="function"?a.bind(r):a}}}),o}r._next=r.next,r.next=()=>ha(r._next(),n)}return r}function ha(e,t){return e.done||(e.value=t(e.value)),e}const Nl=Array.prototype;function Ct(e,t,n,i,s,r){const o=Ks(e),a=o!==e&&!qe(e),l=o[t];if(l!==Nl[t]){const f=l.apply(e,r);return a?dt(f):f}let d=n;o!==e&&(a?d=function(f,u){return n.call(this,wt(e,f),u,e)}:n.length>2&&(d=function(f,u){return n.call(this,f,u,e)}));const c=l.call(o,d,i);return a&&s?s(c):c}function ga(e,t,n,i){const s=Ks(e),r=s!==e&&!qe(e);let o=n,a=!1;s!==e&&(r?(a=i.length===0,o=function(d,c,f){return a&&(a=!1,d=wt(e,d)),n.call(this,d,wt(e,c),f,e)}):n.length>3&&(o=function(d,c,f){return n.call(this,d,c,f,e)}));const l=s[t](o,...i);return a?wt(e,l):l}function mr(e,t,n){const i=ie(e);Le(i,"iterate",ui);const s=i[t](...n);return(s===-1||s===!1)&&Ii(n[0])?(n[0]=ie(n[0]),i[t](...n)):s}function Gn(e,t,n=[]){St(),lo();const i=ie(e)[t].apply(e,n);return co(),Tt(),i}const Jf=tt("__proto__,__v_isRef,__isVue"),Il=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ve));function Xf(e){Ve(e)||(e=String(e));const t=ie(this);return Le(t,"has",e),t.hasOwnProperty(e)}class Dl{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?Vl:zl:r?Fl:Ll).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=H(t);if(!s){let l;if(o&&(l=Yf[n]))return l;if(n==="hasOwnProperty")return Xf}const a=Reflect.get(t,n,ke(t)?t:i);if((Ve(n)?Il.has(n):Jf(n))||(s||Le(t,"get",n),r))return a;if(ke(a)){const l=o&&Hs(n)?a:a.value;return s&&ae(l)?fs(l):l}return ae(a)?s?fs(a):qs(a):a}}class Ol extends Dl{constructor(t=!1){super(!1,t)}set(t,n,i,s){let r=t[n];const o=H(t)&&Hs(n);if(!this._isShallow){const d=gt(r);if(!qe(i)&&!gt(i)&&(r=ie(r),i=ie(i)),!o&&ke(r)&&!ke(i))return d||(r.value=i),!0}const a=o?Number(n)<t.length:re(t,n),l=Reflect.set(t,n,i,ke(t)?t:s);return t===ie(s)&&l&&(a?Pe(i,r)&&It(t,"set",n,i):It(t,"add",n,i)),l}deleteProperty(t,n){const i=re(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&i&&It(t,"delete",n,void 0),s}has(t,n){const i=Reflect.has(t,n);return(!Ve(n)||!Il.has(n))&&Le(t,"has",n),i}ownKeys(t){return Le(t,"iterate",H(t)?"length":cn),Reflect.ownKeys(t)}}class Ml extends Dl{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Qf=new Ol,Zf=new Ml,ep=new Ol(!0),tp=new Ml(!0),Rr=e=>e,Bi=e=>Reflect.getPrototypeOf(e);function np(e,t,n){return function(...i){const s=this.__v_raw,r=ie(s),o=Yt(r),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,d=s[e](...i),c=n?Rr:t?en:dt;return!t&&Le(r,"iterate",l?Pr:cn),Q(Object.create(d),{next(){const{value:f,done:u}=d.next();return u?{value:f,done:u}:{value:a?[c(f[0]),c(f[1])]:c(f),done:u}}})}}function ji(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ip(e,t){const n={get(s){const r=this.__v_raw,o=ie(r),a=ie(s);e||(Pe(s,a)&&Le(o,"get",s),Le(o,"get",a));const{has:l}=Bi(o),d=t?Rr:e?en:dt;if(l.call(o,s))return d(r.get(s));if(l.call(o,a))return d(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!e&&Le(ie(s),"iterate",cn),s.size},has(s){const r=this.__v_raw,o=ie(r),a=ie(s);return e||(Pe(s,a)&&Le(o,"has",s),Le(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ie(a),d=t?Rr:e?en:dt;return!e&&Le(l,"iterate",cn),a.forEach((c,f)=>s.call(r,d(c),d(f),o))}};return Q(n,e?{add:ji("add"),set:ji("set"),delete:ji("delete"),clear:ji("clear")}:{add(s){const r=ie(this),o=Bi(r),a=ie(s),l=!t&&!qe(s)&&!gt(s)?a:s;return o.has.call(r,l)||Pe(s,l)&&o.has.call(r,s)||Pe(a,l)&&o.has.call(r,a)||(r.add(l),It(r,"add",l,l)),this},set(s,r){!t&&!qe(r)&&!gt(r)&&(r=ie(r));const o=ie(this),{has:a,get:l}=Bi(o);let d=a.call(o,s);d||(s=ie(s),d=a.call(o,s));const c=l.call(o,s);return o.set(s,r),d?Pe(r,c)&&It(o,"set",s,r):It(o,"add",s,r),this},delete(s){const r=ie(this),{has:o,get:a}=Bi(r);let l=o.call(r,s);l||(s=ie(s),l=o.call(r,s)),a&&a.call(r,s);const d=r.delete(s);return l&&It(r,"delete",s,void 0),d},clear(){const s=ie(this),r=s.size!==0,o=s.clear();return r&&It(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=np(s,e,t)}),n}function Gs(e,t){const n=ip(e,t);return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_isShallow"?t:s==="__v_raw"?i:Reflect.get(re(n,s)&&s in i?n:i,s,r)}const sp={get:Gs(!1,!1)},rp={get:Gs(!1,!0)},op={get:Gs(!0,!1)},ap={get:Gs(!0,!0)},Ll=new WeakMap,Fl=new WeakMap,zl=new WeakMap,Vl=new WeakMap;function lp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qs(e){return gt(e)?e:Ys(e,!1,Qf,sp,Ll)}function $l(e){return Ys(e,!1,ep,rp,Fl)}function fs(e){return Ys(e,!0,Zf,op,zl)}function cp(e){return Ys(e,!0,tp,ap,Vl)}function Ys(e,t,n,i,s){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const r=s.get(e);if(r)return r;const o=lp(wf(e));if(o===0)return e;const a=new Proxy(e,o===2?i:n);return s.set(e,a),a}function vt(e){return gt(e)?vt(e.__v_raw):!!(e&&e.__v_isReactive)}function gt(e){return!!(e&&e.__v_isReadonly)}function qe(e){return!!(e&&e.__v_isShallow)}function Ii(e){return e?!!e.__v_raw:!1}function ie(e){const t=e&&e.__v_raw;return t?ie(t):e}function Hl(e){return!re(e,"__v_skip")&&Object.isExtensible(e)&&ml(e,"__v_skip",!0),e}const dt=e=>ae(e)?qs(e):e,en=e=>ae(e)?fs(e):e;function ke(e){return e?e.__v_isRef===!0:!1}function ri(e){return jl(e,!1)}function Bl(e){return jl(e,!0)}function jl(e,t){return ke(e)?e:new dp(e,t)}class dp{constructor(t,n){this.dep=new Us,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ie(t),this._value=n?t:dt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||qe(t)||gt(t);t=i?t:ie(t),Pe(t,n)&&(this._rawValue=t,this._value=i?t:dt(t),this.dep.trigger())}}function fp(e){e.dep&&e.dep.trigger()}function Di(e){return ke(e)?e.value:e}function pp(e){return Y(e)?e():Di(e)}const up={get:(e,t,n)=>t==="__v_raw"?e:Di(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return ke(s)&&!ke(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function po(e){return vt(e)?e:new Proxy(e,up)}class hp{constructor(t){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Us,{get:i,set:s}=t(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=s}get value(){return this._value=this._get()}set value(t){this._set(t)}}function Wl(e){return new hp(e)}function gp(e){const t=H(e)?new Array(e.length):{};for(const n in e)t[n]=Ul(e,n);return t}class mp{constructor(t,n,i){this._object=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=Ve(n)?n:String(n),this._raw=ie(t);let s=!0,r=t;if(!H(t)||Ve(this._key)||!Hs(this._key))do s=!Ii(r)||qe(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=Di(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&ke(this._raw[this._key])){const n=this._object[this._key];if(ke(n)){n.value=t;return}}this._object[this._key]=t}get dep(){return qf(this._raw,this._key)}}class xp{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function bp(e,t,n){return ke(e)?e:Y(e)?new xp(e):ae(e)&&arguments.length>1?Ul(e,t,n):ri(e)}function Ul(e,t,n){return new mp(e,t,n)}class wp{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Us(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=pi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&pe!==this)return kl(this,!0),!0}get value(){const t=this.dep.track();return Al(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function yp(e,t,n=!1){let i,s;return Y(e)?i=e:(i=e.get,s=e.set),new wp(i,s,n)}const vp={GET:"get",HAS:"has",ITERATE:"iterate"},_p={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"},Wi={},ps=new WeakMap;let Kt;function Sp(){return Kt}function Kl(e,t=!1,n=Kt){if(n){let i=ps.get(n);i||ps.set(n,i=[]),i.push(e)}}function Tp(e,t,n=te){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,d=m=>s?m:qe(m)||s===!1||s===0?Dt(m,1):Dt(m);let c,f,u,g,y=!1,b=!1;if(ke(e)?(f=()=>e.value,y=qe(e)):vt(e)?(f=()=>d(e),y=!0):H(e)?(b=!0,y=e.some(m=>vt(m)||qe(m)),f=()=>e.map(m=>{if(ke(m))return m.value;if(vt(m))return d(m);if(Y(m))return l?l(m,2):m()})):Y(e)?t?f=l?()=>l(e,2):e:f=()=>{if(u){St();try{u()}finally{Tt()}}const m=Kt;Kt=c;try{return l?l(e,3,[g]):e(g)}finally{Kt=m}}:f=De,t&&s){const m=f,w=s===!0?1/0:s;f=()=>Dt(m(),w)}const N=_l(),I=()=>{c.stop(),N&&N.active&&ro(N.effects,c)};if(r&&t){const m=t;t=(...w)=>{try{return m(...w)}finally{I()}}}let v=b?new Array(e.length).fill(Wi):Wi;const h=m=>{if(!(!(c.flags&1)||!c.dirty&&!m))if(t){const w=c.run();if(m||s||y||(b?w.some((O,P)=>Pe(O,v[P])):Pe(w,v))){const O=Kt;St();try{u&&u(),Kt=c;const P=[w,v===Wi?void 0:b&&v[0]===Wi?[]:v,g];v=w,l?l(t,3,P):t(...P)}finally{Kt=O,Tt()}}}else c.run()};return a&&a(h),c=new fi(f),c.scheduler=o?()=>o(h,!1):h,g=m=>Kl(m,!1,c),u=c.onStop=()=>{const m=ps.get(c);if(m){if(l)l(m,4);else for(const w of m)w();ps.delete(c)}},t?i?h(!0):v=c.run():o?o(h.bind(null,!0),!0):c.run(),I.pause=c.pause.bind(c),I.resume=c.resume.bind(c),I.stop=I,I}function Dt(e,t=1/0,n){if(t<=0||!ae(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ke(e))Dt(e.value,t,n);else if(H(e))for(let i=0;i<e.length;i++)Dt(e[i],t,n);else if(_t(e)||Yt(e))e.forEach(i=>{Dt(i,t,n)});else if($s(e)){for(const i in e)Dt(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Dt(e[i],t,n)}return e}const Gl=[];function kp(e){Gl.push(e)}function Ep(){Gl.pop()}function Cp(e,t){}const Ap={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER",COMPONENT_UPDATE:15,15:"COMPONENT_UPDATE",APP_UNMOUNT_CLEANUP:16,16:"APP_UNMOUNT_CLEANUP"},Pp={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function Wn(e,t,n,i){try{return i?e(...i):e()}catch(s){bn(s,t,n)}}function et(e,t,n,i){if(Y(e)){const s=Wn(e,t,n,i);return s&&oo(s)&&s.catch(r=>{bn(r,t,n,void 0,!0)}),s}if(H(e)){const s=[];for(let r=0;r<e.length;r++)s.push(et(e[r],t,n,i));return s}}function bn(e,t,n,i=!0,s=!1){const r=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||te;if(t){let l=t.parent;const d=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f&&!l.isUnmounted&&(!s||l.scope.active)){for(let u=0;u<f.length;u++)if(f[u](e,d,c)===!1)return}l=l.parent}if(o){St(),Wn(o,null,10,[e,d,c]),Tt();return}}Rp(e,n,r,i,a)}function Rp(e,t,n,i=!0,s=!1){if(s)throw e;console.error(e)}const He=[];let ft=-1;const yt=[];let Gt=null,kn=0;const ql=Promise.resolve();let us=null;function wn(e){const t=us||ql;return e?t.then(this?e.bind(this):e):t}function Np(e){let t=ft+1,n=He.length;for(;t<n;){const i=t+n>>>1,s=He[i],r=hi(s);r<e||r===e&&s.flags&2?t=i+1:n=i}return t}function Js(e){if(!(e.flags&1)){const t=hi(e),n=He[He.length-1];!n||!(e.flags&2)&&t>=hi(n)?He.push(e):He.splice(Np(t),0,e),e.flags|=1,Yl()}}function Yl(){us||(us=ql.then(Xl))}function Mt(e){if(!H(e))Gt&&e.id===-1?Gt.splice(kn+1,0,e):e.flags&1||(yt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)yt.push(e[t]);Yl()}function Jl(e,t,n,i=ft+1){for(;i<He.length;i++){const s=He[i];if(s&&s.flags&2){if(e&&s.id!==e.uid||t!==void 0&&!(s.id>=t))continue;He.splice(i,1),i=e?i-1:ft,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function hs(e,t,n=0){if(yt.length){let i=yt,s=0;if(t){i=[];for(let o=0;o<yt.length;o++){const a=yt[o];(a.i!==void 0?!a.i||a.i.uid<n:t.has(a))?yt[s++]=a:i.push(a)}}const r=[...new Set(i)].sort((o,a)=>hi(o)-hi(a));if(yt.length=s,Gt){for(let o=0;o<r.length;o++)Gt.push(r[o]);return}for(Gt=r,kn=0;kn<Gt.length;kn++){const o=Gt[kn];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Gt=null,kn=0}}let xr=!1;function Ip(e,t){if(xr){e();return}const n=t===void 0?void 0:new Set(yt);e(),xr=!0;try{Jl(void 0,t),hs(void 0,n,t)}finally{xr=!1}}const hi=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Xl(e){try{for(ft=0;ft<He.length;ft++){const t=He[ft];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Wn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ft<He.length;ft++){const t=He[ft];t&&(t.flags&=-2)}ft=-1,He.length=0,hs(),us=null,(He.length||yt.length)&&Xl()}}let En,Ui=[];function Ql(e,t){var n,i;En=e,En?(En.enabled=!0,Ui.forEach(({event:s,args:r})=>En.emit(s,...r)),Ui=[]):typeof window<"u"&&window.HTMLElement&&!((i=(n=window.navigator)==null?void 0:n.userAgent)!=null&&i.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{Ql(r,t)}),setTimeout(()=>{En||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ui=[])},3e3)):Ui=[]}let Ie=null,Xs=null;function gi(e){const t=Ie;return Ie=e,Xs=e&&e.type.__scopeId||null,t}function Dp(e){Xs=e}function Op(){Xs=null}const Mp=e=>uo;function uo(e,t=Ie,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&vi(-1);const r=gi(t),o=zt.length;let a;try{a=e(...s)}finally{for(let l=zt.length;l>o;l--)sr();gi(r),i._d&&vi(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Lp(e,t){if(Ie===null)return e;const n=Fi(Ie),i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=te]=t[s];r&&(Y(r)&&(r={mounted:r,updated:r}),r.deep&&Dt(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function bt(e,t,n,i){let s=e;if(i==="beforeMount")e._mount=e;else if(i==="beforeUpdate"){const a=t&&t._mount;a&&(a._latest=e,e._mount=a)}else if(i==="mounted"){const a=e._latest;e._mount=e._latest=void 0,a&&(s=a,a._mount=void 0)}const r=s.dirs,o=t&&t.dirs;for(let a=0;a<r.length;a++){let l=r[a];o?l.oldValue=o[a].value:i==="mounted"&&l.oldValue!==void 0&&(l=Q({},l,{oldValue:void 0}));let d=l.dir[i];d&&(St(),et(d,n,8,[e.el,l,s,t]),Tt())}}function Zl(e,t){if(Ne){let n=Ne.provides;const i=Ne.parent&&Ne.parent.provides;i===n&&(n=Ne.provides=Object.create(i)),n[e]=t}}function oi(e,t,n=!1){const i=je();if(i||dn){let s=dn?dn._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Y(t)?t.call(i&&i.proxy):t}}function Fp(){return!!(je()||dn)}const ec=Symbol.for("v-scx"),tc=()=>oi(ec);function zp(e,t){return Oi(e,null,t)}function Vp(e,t){return Oi(e,null,{flush:"post"})}function nc(e,t){return Oi(e,null,{flush:"sync"})}function Nn(e,t,n){return Oi(e,t,n)}function Oi(e,t,n=te){const{immediate:i,deep:s,flush:r,once:o}=n,a=Q({},n),l=t&&i||!t&&r!=="post";let d;if(hn){if(r==="sync"){const g=tc();d=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=De,g.resume=De,g.pause=De,g}}const c=Ne;a.call=(g,y,b)=>et(g,c,y,b);let f=!1;r==="post"?a.scheduler=g=>{g.i=c,ye(g,c&&c.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(g,y)=>{y?g():Js(g)}),a.augmentJob=g=>{t&&(g.flags|=4),f&&(g.flags|=2,c&&(g.id=c.uid,g.i=c))};const u=Tp(e,t,a);return hn&&(d?d.push(u):l&&u()),u}function $p(e,t,n){const i=this.proxy,s=J(e)?e.includes(".")?ic(i,e):()=>i[e]:e.bind(i,i);let r;Y(t)?r=t:(r=t.handler,n=t);const o=Un(this),a=Oi(s,r.bind(i),n);return o(),a}function ic(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const Wt=new WeakMap,sc=Symbol("_vte"),Qs=e=>e.__isTeleport,on=e=>e&&(e.disabled||e.disabled===""),Hp=e=>e&&(e.defer||e.defer===""),ma=e=>typeof SVGElement<"u"&&e instanceof SVGElement,xa=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Nr=(e,t)=>{const n=e&&e.to;return J(n)?t?t(n):null:n},Bp={name:"Teleport",__isTeleport:!0,process(e,t,n,i,s,r,o,a,l,d){const{mc:c,pc:f,pbc:u,o:{insert:g,querySelector:y,createText:b,createComment:N,parentNode:I}}=d,v=on(t.props);let{dynamicChildren:h}=t;const m=(P,_,T)=>{P.shapeFlag&16&&c(P.children,_,T,s,r,o,a,l)},w=(P=t)=>{const _=on(P.props),T=P.target=Nr(P.props,y),C=Ir(T,P,b,g);T&&(o!=="svg"&&ma(T)?o="svg":o!=="mathml"&&xa(T)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(T),_||(m(P,T,C),Zn(P,!1)))},O=P=>{const _=()=>{if(Wt.get(P)===_){if(Wt.delete(P),on(P.props)){const T=I(P.el)||n;m(P,T,P.anchor),Zn(P,!0)}w(P)}};Wt.set(P,_),ye(_,r)};if(e==null){const P=t.el=b(""),_=t.anchor=b("");if(g(P,n,i),g(_,n,i),Hp(t.props)||r&&r.pendingBranch){O(t);return}v&&(m(t,n,_),Zn(t,!0)),w()}else{t.el=e.el;const P=t.anchor=e.anchor,_=Wt.get(e);if(_){_.flags|=8,Wt.delete(e),O(t);return}t.targetStart=e.targetStart;const T=t.target=e.target,C=t.targetAnchor=e.targetAnchor,M=on(e.props),k=M?n:T,z=M?P:C;if(o==="svg"||ma(T)?o="svg":(o==="mathml"||xa(T))&&(o="mathml"),h?(u(e.dynamicChildren,h,k,s,r,o,a),Ao(e,t,!0)):l||f(e,t,k,z,s,r,o,a,!1),v)M?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Ki(t,n,P,d,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const L=Nr(t.props,y);L&&(t.target=L,Ki(t,L,null,d,0))}else M&&Ki(t,T,C,d,1);Zn(t,v)}},remove(e,t,n,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:d,targetAnchor:c,target:f,props:u}=e,g=on(u),y=r||!g,b=Wt.get(e);if(b&&(b.flags|=8,Wt.delete(e)),f&&(s(d),s(c)),r&&s(l),!b&&(g||f)&&o&16)for(let N=0;N<a.length;N++){const I=a[N];i(I,t,n,y,!!I.dynamicChildren)}},move:Ki,hydrate:jp};function Ki(e,t,n,{o:{insert:i},m:s},r=2){r===0&&(e.targetStart&&i(e.targetStart,t,n),i(e.targetAnchor,t,n),n=e.targetAnchor);const{el:o,anchor:a,shapeFlag:l,children:d,props:c}=e,f=r===2;if(f&&i(o,t,n),!Wt.has(e)&&(!f||on(c))&&l&16)for(let u=0;u<d.length;u++)s(d[u],t,n,2);f&&i(a,t,n)}function jp(e,t,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:d,createText:c}},f){function u(N,I){let v=I;for(;v;){if(v&&v.nodeType===8){if(v.data==="teleport start anchor")t.targetStart=v;else if(v.data==="teleport anchor"){t.targetAnchor=v,N._lpa=t.targetAnchor&&o(t.targetAnchor);break}}v=o(v)}}function g(N,I){I.anchor=f(o(N),I,a(N),n,i,s,r)}const y=t.target=Nr(t.props,l),b=on(t.props);if(y){const N=y._lpa||y.firstChild;t.shapeFlag&16&&(b?(g(e,t),u(y,N),t.targetAnchor||Ir(y,t,c,d,a(e)===y?e:null)):(t.anchor=o(e),u(y,N),t.targetAnchor||Ir(y,t,c,d),f(N&&o(N),t,y,n,i,s,r))),Zn(t,b)}else b&&t.shapeFlag&16&&(g(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}const Wp=Bp;function Zn(e,t){const n=e.ctx;if(n&&n.ut){let i,s;for(t?(i=e.el,s=e.anchor):(i=e.targetStart,s=e.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function Ir(e,t,n,i,s=null){const r=t.targetStart=n(""),o=t.targetAnchor=n("");return r[sc]=o,e&&(i(r,e,s),i(o,e,s)),o}const rt=Symbol("_leaveCb"),qn=Symbol("_enterCb");function ho(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Li(()=>{e.isMounted=!0}),tr(()=>{e.isUnmounting=!0}),e}const st=[Function,Array],go={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:st,onEnter:st,onAfterEnter:st,onEnterCancelled:st,onBeforeLeave:st,onLeave:st,onAfterLeave:st,onLeaveCancelled:st,onBeforeAppear:st,onAppear:st,onAfterAppear:st,onAppearCancelled:st},Up={name:"BaseTransition",props:go,setup(e,{slots:t}){const n=je(),i=ho();return()=>{const s=t.default&&Zs(t.default(),!0),r=s&&s.length?rc(s):n.subTree?Hc():void 0;if(!r)return;const o=ie(e),{mode:a}=o;if(i.isLeaving)return br(r);const l=gs(r);if(!l)return br(r);const d=Ln(l,o,i,n);l.type!==we&&ut(l,d);let c=n.subTree&&gs(n.subTree);if(c&&c.type!==we&&!at(c,l)&&mi(n.subTree)){let f=Ln(c,o,i,n);if(ut(c,f),a==="out-in"&&l.type!==we)return i.isLeaving=!0,f.afterLeave=()=>{if(i.isLeaving=!1,!(n.job.flags&8))if(n.effect.flags&2){const u=()=>{n.job.flags&8||n.update()};u.i=n,Js(u)}else n.update();delete f.afterLeave,c=void 0},br(r);a==="in-out"&&l.type!==we?f.delayLeave=(u,g,y)=>{const b=ac(i,c);b[String(c.key)]=c,u[rt]=()=>{g(),u[rt]=void 0,delete d.delayedLeave,c=void 0},d.delayedLeave=()=>{y(),delete d.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return r}}};function rc(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==we){t=n;break}}return t}const oc=Up;function ac(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function Ln(e,t,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:d,onEnterCancelled:c,onBeforeLeave:f,onLeave:u,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:b,onAppear:N,onAfterAppear:I,onAppearCancelled:v}=t,h=String(e.key),m=ac(n,e),w=(_,T)=>{_&&et(_,i,9,T)},O=(_,T)=>{const C=T[1];w(_,T),H(_)?_.every(M=>M.length<=1)&&C():_.length<=1&&C()},P={mode:r,persisted:o,beforeEnter(_){let T=a;if(!n.isMounted)if(s)T=b||a;else return;_[rt]&&_[rt](!0);const C=m[h];if(C&&at(e,C)){let M=C.el[rt];if(!M){const k=mi(C);M=k&&k.el[rt]}M&&M()}w(T,[_])},enter(_){if(m[h]===e)return;let T=l,C=d,M=c;if(!n.isMounted)if(s)T=N||l,C=I||d,M=v||c;else return;let k=!1;_[qn]=L=>{k||(k=!0,L?w(M,[_]):w(C,[_]),P.delayedLeave&&P.delayedLeave(),_[qn]=void 0)};const z=_[qn].bind(null,!1);T?O(T,[_,z]):z()},leave(_,T){const C=String(e.key);if(_[qn]&&_[qn](!0),n.isUnmounting)return T();w(f,[_]);let M=!1;_[rt]=z=>{M||(M=!0,T(),z?w(y,[_]):w(g,[_]),_[rt]=void 0,m[C]===e&&delete m[C])};const k=_[rt].bind(null,!1);m[C]=e,u?O(u,[_,k]):k()},clone(_){const T=Ln(_,t,n,i);return T.afterLeave=()=>{P.afterLeave&&P.afterLeave()},T.delayLeave=(C,M,k)=>{P.delayLeave?P.delayLeave(C,M,k):k()},T.delayedLeave=()=>{P.delayedLeave&&P.delayedLeave()},T}};return P}function br(e){if(Mi(e))return e=kt(e),e.children=null,e}function gs(e){if(!Mi(e))return Qs(e.type)&&e.children?rc(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Y(n.default))return n.default()}}function ut(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;ut(Qs(n.type)&&gs(n)||n,t)}else if(e.shapeFlag&128){const n=e.suspense;if(n){const i=n.isHydrating?n.pendingBranch:n.activeBranch;i&&ut(i,t.clone(i))}else e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)}else if(e.transition=t,e.type===Ce&&H(e.children)){const n=ko(e.children,!1);n&&ut(n,t)}}function Zs(e,t=!1,n){let i=[],s=0;for(let r=0;r<e.length;r++){let o=e[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ce?(o.patchFlag&128&&s++,i=i.concat(Zs(o.children,t,a))):(t||o.type!==we)&&i.push(a!=null?kt(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function mi(e){if(e.component)return mi(e.component.subTree);if(e.type===Ce){const t=H(e.children)&&ko(e.children,!1);return t?mi(t):void 0}if(e.type!==we)return e}function mo(e,t){return Y(e)?Q({name:e.name},t,{setup:e}):e}function Kp(){const e=je();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function xo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Gp(e){const t=je(),n=Bl(null);if(t){const s=t.refs===te?t.refs={}:t.refs;Object.defineProperty(s,e,{enumerable:!0,get:()=>n.value,set:r=>n.value=r})}return n}function ba(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const ms=new WeakMap;function In(e,t,n,i,s=!1){if(H(e)){e.forEach((b,N)=>In(b,t&&(H(t)?t[N]:t),n,i,s));return}if(Ft(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&In(e,t,n,i.component.subTree);return}const r=i.shapeFlag&4?Fi(i.component):i.el,o=s?null:r,{i:a,r:l}=e,d=t&&t.r,c=a.refs===te?a.refs={}:a.refs,f=a.setupState,u=ie(f),g=f===te?Cn:b=>ba(c,b)?!1:re(u,b),y=(b,N)=>!(N&&ba(c,N));if(d!=null&&d!==l){if(wa(t),J(d))c[d]=null,g(d)&&(f[d]=null);else if(ke(d)){const b=t;y(d,b.k)&&(d.value=null),b.k&&(c[b.k]=null)}}if(Y(l))Wn(l,a,12,[o,c]);else{const b=J(l),N=ke(l);if(b||N){const I=()=>{if(e.f){const v=b?g(l)?f[l]:c[l]:y()||!e.k?l.value:c[e.k];if(s)H(v)&&ro(v,r);else if(H(v))v.includes(r)||v.push(r);else if(b)c[l]=[r],g(l)&&(f[l]=c[l]);else{const h=[r];y(l,e.k)&&(l.value=h),e.k&&(c[e.k]=h)}}else b?(c[l]=o,g(l)&&(f[l]=o)):N&&(y(l,e.k)&&(l.value=o),e.k&&(c[e.k]=o))};if(o){const v=()=>{I(),ms.delete(e)};v.id=-1,ms.set(e,v),ye(v,n)}else wa(e),I()}}}function wa(e){const t=ms.get(e);t&&(t.flags|=8,ms.delete(e))}let ya=!1;const Sn=()=>{ya||(console.error("Hydration completed but contains mismatches."),ya=!0)},qp=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",Yp=e=>e.namespaceURI.includes("MathML"),Gi=e=>{if(e.nodeType===1){if(qp(e))return"svg";if(Yp(e))return"mathml"}},An=e=>e.nodeType===8;function Jp(e){const{mt:t,p:n,o:{patchProp:i,createText:s,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:d}}=e,c=(h,m)=>{if(!m.hasChildNodes()){n(null,h,m),hs(),m._vnode=h;return}f(m.firstChild,h,null,null,null),hs(),m._vnode=h},f=(h,m,w,O,P,_=!1)=>{_=_||!!m.dynamicChildren;const T=An(h)&&h.data==="[",C=()=>b(h,m,w,O,P,T),{type:M,ref:k,shapeFlag:z,patchFlag:L}=m;let W=h.nodeType;m.el=h,L===-2&&(_=!1,m.dynamicChildren=null);let j=null;switch(M){case Jt:W!==3?m.children===""?(l(m.el=s(""),o(h),h),j=h):j=C():(h.data!==m.children&&(Sn(),h.data=m.children),j=r(h));break;case we:v(h)?(j=r(h),I(m.el=h.content.firstChild,h,w)):W!==8||T?j=C():j=r(h);break;case Xt:if(T&&(h=r(h),W=h.nodeType),W===1||W===3){j=h;const q=!m.children.length;for(let G=0;G<m.staticCount;G++)q&&(m.children+=j.nodeType===1?j.outerHTML:j.data),G===m.staticCount-1&&(m.anchor=j),j=r(j);return T?r(j):j}else C();break;case Ce:T?j=y(h,m,w,O,P,_):j=C();break;default:if(z&1)(W!==1||m.type.toLowerCase()!==h.tagName.toLowerCase())&&!v(h)?j=C():j=u(h,m,w,O,P,_);else if(z&6){m.slotScopeIds=P;const q=o(h);if(T?j=N(h):An(h)&&h.data==="teleport start"?j=N(h,h.data,"teleport end"):j=r(h),t(m,q,null,w,O,Gi(q),_),(Ft(m)||m.component.asyncDep)&&!m.component.subTree){let G;T?(G=xe(Xt),G.anchor=j?j.previousSibling:q.lastChild):G=h.nodeType===3?Ro(""):xe(h.nodeType===8?we:"div"),G.el=h,m.component.subTree=G}}else z&64?W!==8?j=C():j=m.type.hydrate(h,m,w,O,P,_,e,g):z&128&&(j=m.type.hydrate(h,m,w,O,Gi(o(h)),P,_,e,f))}return k!=null&&In(k,null,O,m),j},u=(h,m,w,O,P,_)=>{_=_||!!m.dynamicChildren;const{type:T,dynamicProps:C,props:M,patchFlag:k,shapeFlag:z,dirs:L,transition:W}=m,j=T==="input"||T==="option",q=!!C;if(j||q||k!==-1){L&&bt(m,null,w,"created");let G=!1;if(v(h)){G=Oc(null,W)&&w&&w.vnode.props&&w.vnode.props.appear;const Z=h.content.firstChild;if(G){const me=Z.getAttribute("class");me&&(Z.$cls=me),W.beforeEnter(Z)}I(Z,h,w),m.el=h=Z}if(z&16&&!(M&&(M.innerHTML||M.textContent))){let Z=g(h.firstChild,m,h,w,O,P,_);for(Z&&!ns(h,1)&&Sn();Z;){const me=Z;Z=Z.nextSibling,a(me)}}else if(z&8){let Z=m.children;Z[0]===`
`&&(h.tagName==="PRE"||h.tagName==="TEXTAREA")&&(Z=Z.slice(1));const{textContent:me}=h;me!==Z&&me!==Z.replace(/\r\n|\r/g,`
`)&&(ns(h,0)||Sn(),h.textContent=m.children)}if(M){if(j||q||!_||k&48){const Z=h.tagName.includes("-"),me=h.namespaceURI.includes("svg")?"svg":h.namespaceURI.includes("MathML")?"mathml":void 0;for(const le in M)if(j&&(le.endsWith("value")||le==="indeterminate")||mn(le)&&!Lt(le)||le[0]==="."||Z&&!Lt(le)||C&&C.includes(le)){if(Qp(h,le,M[le]))continue;i(h,le,null,M[le],me,w)}}else if(M.onClick)i(h,"onClick",null,M.onClick,void 0,w);else if(k&4&&vt(M.style))for(const Z in M.style)M.style[Z]}let ge;(ge=M&&M.onVnodeBeforeMount)&&Ue(ge,w,m),L&&bt(m,null,w,"beforeMount"),((ge=M&&M.onVnodeMounted)||L||G)&&vs(()=>{ge&&Ue(ge,w,m),G&&W.enter(h),L&&bt(m,null,w,"mounted")},O)}return h.nextSibling},g=(h,m,w,O,P,_,T)=>{T=T||!!m.dynamicChildren;const C=m.children,M=C.length;let k=!1;for(let z=0;z<M;z++){const L=T?C[z]:C[z]=Ke(C[z]),W=L.type===Jt;h?(W&&!T&&z+1<M&&Ke(C[z+1]).type===Jt&&(l(s(h.data.slice(L.children.length)),w,r(h)),h.data=L.children),h=f(h,L,O,P,_,T)):W&&!L.children?l(L.el=s(""),w):(k||(k=!0,ns(w,1)||Sn()),n(null,L,w,null,O,P,Gi(w),_))}return h},y=(h,m,w,O,P,_)=>{const{slotScopeIds:T}=m;T&&(P=P?P.concat(T):T);const C=o(h),M=g(r(h),m,C,w,O,P,_);return M&&An(M)&&M.data==="]"?r(m.anchor=M):(Sn(),l(m.anchor=d("]"),C,M),M)},b=(h,m,w,O,P,_)=>{if(eu(h,m)||Sn(),m.el=null,_){const M=N(h);for(;;){const k=r(h);if(k&&k!==M)a(k);else break}}const T=r(h),C=o(h);return a(h),n(null,m,C,T,w,O,Gi(C),P),w&&w.vnode.el===h&&(w.vnode.el=m.el,ir(w,m.el)),T},N=(h,m="[",w="]")=>{let O=0;for(;h;)if(h=r(h),h&&An(h)&&(h.data===m&&O++,h.data===w)){if(O===0)return r(h);O--}return h},I=(h,m,w)=>{const O=m.parentNode;O&&O.replaceChild(h,m);let P=w;for(;P;)P.vnode.el===m&&(P.vnode.el=P.subTree.el=h),P=P.parent},v=h=>h.nodeType===1&&h.tagName==="TEMPLATE";return[c,f]}const Xp=new Set(["src","srcset","href","poster"]);function Qp(e,t,n){return Xp.has(t)?e.getAttribute(t)===(n==null?null:`${n}`):!1}const xs="data-allow-mismatch",Zp={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function ns(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(xs);)e=e.parentElement;return bo(e&&e.getAttribute(xs),t)}function bo(e,t){if(e==null)return!1;if(e==="")return!0;{const n=e.split(",");return t===0&&n.includes("children")?!0:n.includes(Zp[t])}}function eu(e,t){return ns(e.parentElement,1)||tu(e)||nu(t)}function tu(e){return e.nodeType===1&&bo(e.getAttribute(xs),1)}function nu({props:e}){const t=e&&e[xs];return typeof t=="string"&&bo(t,1)}const iu=js().requestIdleCallback||(e=>setTimeout(e,1)),su=js().cancelIdleCallback||(e=>clearTimeout(e)),ru=(e=1e4)=>t=>{const n=iu(t,{timeout:e});return()=>su(n)};function ou(e){const{top:t,left:n,bottom:i,right:s}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:o}=window;return(t>0&&t<r||i>0&&i<r)&&(n>0&&n<o||s>0&&s<o)}const au=e=>(t,n)=>{const i=new IntersectionObserver(r=>{for(const o of r)if(o.isIntersecting){i.disconnect(),t();break}},e),s=r=>{if(ou(r))return t(),i.disconnect(),!1;if(getComputedStyle(r).display==="contents"){for(let o=0;o<r.children.length;o++)if(s(r.children[o])===!1)return!1}i.observe(r)};return n(r=>{if(r instanceof Element)return s(r)}),()=>i.disconnect()},lu=e=>t=>{if(e){const n=matchMedia(e);if(n.matches)t();else return n.addEventListener("change",t,{once:!0}),()=>n.removeEventListener("change",t)}},cu=(e=[])=>(t,n)=>{J(e)&&(e=[e]);let i=!1;const s=o=>{i||(i=!0,r(),t(),o.target.dispatchEvent(new o.constructor(o.type,o)))},r=()=>{n(o=>{for(const a of e)o.removeEventListener(a,s)})};return n(o=>{for(const a of e)o.addEventListener(a,s,{once:!0})}),r};function du(e,t){if(An(e)&&e.data==="["){let n=1,i=e.nextSibling;for(;i;){if(i.nodeType===1){if(t(i)===!1)break}else if(An(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else t(e)}const Ft=e=>!!e.type.__asyncLoader;function fu(e){Y(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:i,delay:s=200,hydrate:r,timeout:o,suspensible:a=!0,onError:l}=e;let d=null,c,f=0;const u=()=>(f++,d=null,g()),g=()=>{let y;return d||(y=d=t().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),l)return new Promise((N,I)=>{l(b,()=>N(u()),()=>I(b),f+1)});throw b}).then(b=>y!==d&&d?d:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),c=b,b)))};return mo({name:"AsyncComponentWrapper",__asyncLoader:g,__asyncHydrate(y,b,N){const I=y.isConnected;let v=!1;(b.bu||(b.bu=[])).push(()=>v=!0);const h=()=>{v||!y.parentNode||I&&!y.isConnected||N()},m=r?()=>{const w=r(h,O=>du(y,O));w&&(b.bum||(b.bum=[])).push(w)}:h;c?m():g().then(()=>!b.isUnmounted&&m())},get __asyncResolved(){return c},setup(){const y=Ne;if(xo(y),c)return()=>qi(c,y);const b=w=>{d=null,bn(w,y,13,!i,!0)};if(a&&y.suspense||hn)return g().then(w=>()=>qi(w,y)).catch(w=>(b(w),()=>i?xe(i,{error:w}):null));const N=ri(!1),I=ri(),v=ri(!!s);let h,m;return Sl(()=>{h!=null&&clearTimeout(h),m!=null&&clearTimeout(m)}),s&&(m=setTimeout(()=>{y.isUnmounted||(v.value=!1)},s)),o!=null&&(h=setTimeout(()=>{if(!y.isUnmounted&&!N.value&&!I.value){const w=new Error(`Async component timed out after ${o}ms.`);b(w),I.value=w}},o)),g().then(()=>{y.isUnmounted||(N.value=!0,y.parent&&Mi(y.parent.vnode)&&y.parent.update())}).catch(w=>{if(y.isUnmounted){d=null;return}b(w),I.value=w}),()=>{if(N.value&&c)return qi(c,y);if(I.value&&i)return xe(i,{error:I.value});if(n&&!v.value)return qi(n,y)}}})}function qi(e,t){const{ref:n,props:i,children:s,ce:r}=t.vnode,o=xe(e,i,s);return o.ref=n,o.ce=r,delete t.vnode.ce,o}const Mi=e=>e.type.__isKeepAlive,pu={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=je(),i=n.ctx;if(!i.renderer)return()=>{const v=t.default&&t.default();return v&&v.length===1?v[0]:v};const s=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:d,um:c,o:{createElement:f}}}=i,u=f("div");i.activate=(v,h,m,w,O)=>{const P=v.component;d(v,h,m,0,a),l(P.vnode,v,h,m,P,a,w,v.slotScopeIds,O),ye(()=>{P.isDeactivated=!1,P.a&&Rn(P.a);const _=v.props&&v.props.onVnodeMounted;_&&Ue(_,P.parent,v)},a)},i.deactivate=v=>{const h=s.get(v.key==null?v.type:v.key);if(!h||h.component!==v.component)return!1;const m=v.component;return ws(m.m),ws(m.a),d(v,u,null,1,a),ye(()=>{m.da&&Rn(m.da);const w=v.props&&v.props.onVnodeUnmounted;w&&Ue(w,m.parent,v),m.isDeactivated=!0},a),!0};function g(v){Yi(v),c(v,n,a,!0)}function y(v){s.forEach((h,m)=>{const w=jr(Ft(h)?h.type.__asyncResolved||{}:h.type);w&&!v(w)&&b(m)})}function b(v){const h=s.get(v);h&&(!o||!at(h,o))?g(h):o&&(Yi(o),h&&Yi(h)),s.delete(v),r.delete(v)}Nn(()=>[e.include,e.exclude],([v,h])=>{v&&y(m=>ei(v,m)),h&&y(m=>!ei(h,m))},{flush:"post",deep:!0});let N=null;const I=()=>{if(N!=null)if(ys(n.subTree.type)){const v=()=>{const h=Ji(n.subTree);h.component&&s.set(N,h)};n.subTree.suspense.pendingBranch?ye(v,n.subTree.suspense):v()}else s.set(N,Ji(n.subTree))};return Li(I),er(I),tr(()=>{s.forEach(v=>{const{subTree:h,suspense:m}=n,w=Ji(h);if(v.type===w.type&&v.key===w.key){Yi(w);const O=w.component.da;O&&ye(O,m);return}g(v)})}),()=>{if(N=null,!t.default)return o=null;const v=t.default(),h=v[0];if(v.length>1)return o=null,v;if(!$t(h)||!(h.shapeFlag&4)&&!(h.shapeFlag&128))return o=null,h;let m=Ji(h);if(m.type===we)return o=null,m;const w=m.type,O=jr(Ft(m)?m.type.__asyncResolved||{}:w),{include:P,exclude:_,max:T}=e;if(P&&(!O||!ei(P,O))||_&&O&&ei(_,O))return m.shapeFlag&=-257,o=m,h;const C=m.key==null?w:m.key,M=s.get(C);return m.el&&(m=kt(m),h.shapeFlag&128&&(h.ssContent=m)),N=C,M?(m.el=M.el,m.component=M.component,m.transition&&ut(m,m.transition),m.shapeFlag|=512,r.delete(C),r.add(C)):(r.add(C),T&&r.size>parseInt(T,10)&&b(r.values().next().value)),m.shapeFlag|=256,o=m,ys(h.type)?h:m}}},uu=pu;function ei(e,t){return H(e)?e.some(n=>ei(n,t)):J(e)?e.split(",").includes(t):bf(e)?(e.lastIndex=0,e.test(t)):!1}function lc(e,t){dc(e,"a",t)}function cc(e,t){dc(e,"da",t)}function dc(e,t,n=Ne){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(xi(t,i,n),n){let s=n.parent;for(;s&&s.parent;)Mi(s.parent.vnode)&&hu(i,t,n,s),s=s.parent}}function hu(e,t,n,i){const s=xi(t,e,i,!0),r=xi("um",()=>ro(i[t],s),n);r.flags=16}function Yi(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ji(e){return e.shapeFlag&128?e.ssContent:e}function xi(e,t,n=Ne,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{St();const a=Un(n),l=et(t,n,e,o);return a(),Tt(),l});return i?s.unshift(r):s.push(r),r}}const Ht=e=>(t,n=Ne)=>{(!hn||e==="sp")&&xi(e,(...i)=>t(...i),n)},fc=Ht("bm"),Li=Ht("m"),wo=Ht("bu"),er=Ht("u"),tr=Ht("bum"),yo=Ht("um"),pc=Ht("sp"),uc=Ht("rtg"),hc=Ht("rtc");function gc(e,t=Ne){xi("ec",e,t)}const vo="components",gu="directives";function mu(e,t){return _o(vo,e,!0,t)||e}const mc=Symbol.for("v-ndc");function xu(e){return J(e)?_o(vo,e,!1)||e:e||mc}function bu(e){return _o(gu,e)}function _o(e,t,n=!0,i=!1){const s=Ie||Ne;if(s){const r=s.type;if(e===vo){const a=jr(r,!1);if(a&&(a===t||a===ce(t)||a===xn(ce(t))))return r}const o=va(s[e]||r[e],t)||va(s.appContext[e],t);return!o&&i?r:o}}function va(e,t){return e&&(e[t]||e[ce(t)]||e[xn(ce(t))])}function wu(e,t,n,i){let s;const r=n&&n[i],o=H(e);if(o||J(e)){const a=o&&vt(e);let l=!1,d=!1;a&&(l=!qe(e),d=gt(e),e=Ks(e)),s=new Array(e.length);for(let c=0,f=e.length;c<f;c++)s[c]=t(l?d?en(dt(e[c])):dt(e[c]):e[c],c,void 0,r&&r[c])}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)s=[];else{s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,r&&r[a])}else if(ae(e))if(e[Symbol.iterator])s=Array.from(e,(a,l)=>t(a,l,void 0,r&&r[l]));else{const a=Object.keys(e);s=new Array(a.length);for(let l=0,d=a.length;l<d;l++){const c=a[l];s[l]=t(e[c],c,l,r&&r[l])}}else s=[];return n&&(n[i]=s),s}function yu(e,t){for(let n=0;n<t.length;n++){const i=t[n];if(H(i))for(let s=0;s<i.length;s++)e[i[s].name]=i[s].fn;else i&&(e[i.name]=i.key?(...s)=>{const r=i.fn(...s);return r&&(r.key=i.key),r}:i.fn)}return e}function vu(e,t,n,i,s,r){if(n==null&&(n={}),Ie.ce||Ie.parent&&Ft(Ie.parent)&&Ie.parent.ce){const d=r!=null&&n.key==null?Q({},n,{key:r}):n,c=Object.keys(d).length>0;return t!=="default"&&(d.name=t),yi(),_s(Ce,null,[xe("slot",d,i&&i())],c?-2:64)}let o=e[t];o&&o._c&&(o._d=!1);const a=zt.length;yi();let l;try{const d=o&&So(o(n)),c=n.key||r||d&&d.key;l=_s(Ce,{key:(c&&!Ve(c)?c:`_${t}`)+(!d&&i?"_fb":"")},d||(i?i():[]),d&&e._===1?64:-2)}catch(d){for(let c=zt.length;c>a;c--)sr();throw d}finally{o&&o._c&&(o._d=!0)}return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function So(e){return e.some(t=>$t(t)?!(t.type===we||t.type===Ce&&!So(t.children)):!0)?e:null}function _u(e,t){const n={};for(const i in e)n[t&&/[A-Z]/.test(i)?`on:${i}`:Pn(i)]=e[i];return n}const Dr=e=>e?Uc(e)?Fi(e):Dr(e.parent):null,ai=Q(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Dr(e.parent),$root:e=>Dr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>To(e),$forceUpdate:e=>e.f||(e.f=()=>{Js(e.update)}),$nextTick:e=>e.n||(e.n=wn.bind(e.proxy)),$watch:e=>$p.bind(e)}),wr=(e,t)=>e!==te&&!e.__isScriptSetup&&re(e,t),Or={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=e;if(t[0]!=="$"){const u=o[t];if(u!==void 0)switch(u){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(wr(i,t))return o[t]=1,i[t];if(s!==te&&re(s,t))return o[t]=2,s[t];if(re(r,t))return o[t]=3,r[t];if(n!==te&&re(n,t))return o[t]=4,n[t];Mr&&(o[t]=0)}}const d=ai[t];let c,f;if(d)return t==="$attrs"&&Le(e.attrs,"get",""),d(e);if((c=a.__cssModules)&&(c=c[t]))return c;if(n!==te&&re(n,t))return o[t]=4,n[t];if(f=l.config.globalProperties,re(f,t))return f[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:r}=e;return wr(s,t)?(s[t]=n,!0):i!==te&&re(i,t)?(i[t]=n,!0):re(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||e!==te&&a[0]!=="$"&&re(e,a)||wr(t,a)||re(r,a)||re(i,a)||re(ai,a)||re(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:re(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Su=Q({},Or,{get(e,t){if(t!==Symbol.unscopables)return Or.get(e,t,e)},has(e,t){return t[0]!=="_"&&!kf(t)}});function Tu(){return null}function ku(){return null}function Eu(e){}function Cu(e){}function Au(){return null}function Pu(){}function Ru(e,t){return null}function Nu(){return xc().slots}function Iu(){return xc().attrs}function xc(e){const t=je();return t.setupContext||(t.setupContext=Jc(t))}function bi(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function Du(e,t){const n=bi(e);for(const i in t){if(i.startsWith("__skip"))continue;let s=n[i];s?H(s)||Y(s)?s=n[i]={type:s,default:t[i]}:s.default=t[i]:s===null&&(s=n[i]={default:t[i]}),s&&t[`__skip_${i}`]&&(s.skipFactory=!0)}return n}function Ou(e,t){return!e||!t?e||t:H(e)&&H(t)?e.concat(t):Q({},bi(e),bi(t))}function Mu(e,t){const n={};for(const i in e)t.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>e[i]});return n}function Lu(e){const t=je(),n=hn;let i=e();_i(),n&&Qt(!1);const s=()=>{Un(t),n&&Qt(!0)},r=()=>{je()!==t&&t.scope.off(),_i(),n&&Qt(!1)};return oo(i)&&(i=i.catch(o=>{throw s(),Promise.resolve().then(()=>Promise.resolve().then(r)),o})),[i,()=>{s(),Promise.resolve().then(r)}]}let Mr=!0;function Fu(e){const t=To(e),n=e.proxy,i=e.ctx;Mr=!1,t.beforeCreate&&_a(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:d,created:c,beforeMount:f,mounted:u,beforeUpdate:g,updated:y,activated:b,deactivated:N,beforeDestroy:I,beforeUnmount:v,destroyed:h,unmounted:m,render:w,renderTracked:O,renderTriggered:P,errorCaptured:_,serverPrefetch:T,expose:C,inheritAttrs:M,components:k,directives:z,filters:L}=t;if(d&&zu(d,i,null),o)for(const q in o){const G=o[q];Y(G)&&(i[q]=G.bind(n))}if(s){const q=s.call(n,n);ae(q)&&(e.data=qs(q))}if(Mr=!0,r)for(const q in r){const G=r[q],ge=Y(G)?G.bind(n,n):Y(G.get)?G.get.bind(n,n):De,Z=!Y(G)&&Y(G.set)?G.set.bind(n):De,me=Xc({get:ge,set:Z});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>me.value,set:le=>me.value=le})}if(a)for(const q in a)bc(a[q],i,n,q);if(l){const q=Y(l)?l.call(n):l;Reflect.ownKeys(q).forEach(G=>{Zl(G,q[G])})}c&&_a(c,e,"c");function j(q,G){H(G)?G.forEach(ge=>q(ge.bind(n))):G&&q(G.bind(n))}if(j(fc,f),j(Li,u),j(wo,g),j(er,y),j(lc,b),j(cc,N),j(gc,_),j(hc,O),j(uc,P),j(tr,v),j(yo,m),j(pc,T),H(C))if(C.length){const q=e.exposed||(e.exposed={});C.forEach(G=>{Object.defineProperty(q,G,{get:()=>n[G],set:ge=>n[G]=ge,enumerable:!0})})}else e.exposed||(e.exposed={});w&&e.render===De&&(e.render=w),M!=null&&(e.inheritAttrs=M),k&&(e.components=k),z&&(e.directives=z),T&&xo(e)}function zu(e,t,n=De){H(e)&&(e=Lr(e));for(const i in e){const s=e[i];let r;ae(s)?"default"in s?r=oi(s.from||i,s.default,!0):r=oi(s.from||i):r=oi(s),ke(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function _a(e,t,n){et(H(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function bc(e,t,n,i){let s=i.includes(".")?ic(n,i):()=>n[i];if(J(e)){const r=t[e];Y(r)&&Nn(s,r)}else if(Y(e))Nn(s,e.bind(n));else if(ae(e))if(H(e))e.forEach(r=>bc(r,t,n,i));else{const r=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(r)&&Nn(s,r,e)}}function To(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!n&&!i?l=t:(l={},s.length&&s.forEach(d=>bs(l,d,o,!0)),bs(l,t,o)),ae(t)&&r.set(t,l),l}function bs(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&bs(e,r,n,!0),s&&s.forEach(o=>bs(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=Vu[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Vu={data:Sa,props:Ta,emits:Ta,methods:ti,computed:ti,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:ti,directives:ti,watch:Hu,provide:Sa,inject:$u};function Sa(e,t){return t?e?function(){return Q(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function $u(e,t){return ti(Lr(e),Lr(t))}function Lr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function $e(e,t){return e?[...new Set([].concat(e,t))]:t}function ti(e,t){return e?Q(Object.create(null),e,t):t}function Ta(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:Q(Object.create(null),bi(e),bi(t??{})):t}function Hu(e,t){if(!e)return t;if(!t)return e;const n=Q(Object.create(null),e);for(const i in t)n[i]=$e(e[i],t[i]);return n}function wc(){return{app:null,config:{isNativeTag:Cn,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bu=0;function ju(e,t){return function(i,s=null){Y(i)||(i=Q({},i)),s!=null&&!ae(s)&&(s=null);const r=wc(),o=new WeakSet,a=[];let l=!1;const d=r.app={_uid:Bu++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:ed,get config(){return r.config},set config(c){},use(c,...f){return o.has(c)||(c&&Y(c.install)?(o.add(c),c.install(d,...f)):Y(c)&&(o.add(c),c(d,...f))),d},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),d},component(c,f){return f?(r.components[c]=f,d):r.components[c]},directive(c,f){return f?(r.directives[c]=f,d):r.directives[c]},mount(c,f,u){if(!l){const g=d._ceVNode||xe(i,s);return g.appContext=r,u===!0?u="svg":u===!1&&(u=void 0),f&&t?t(g,c):e(g,c,u),l=!0,d._container=c,c.__vue_app__=d,Fi(g.component)}},onUnmount(c){a.push(c)},unmount(){l&&(et(a,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(c,f){return r.provides[c]=f,d},runWithContext(c){const f=dn;dn=d;try{return c()}finally{dn=f}}};return d}}let dn=null;function Wu(e,t,n=te){const i=je(),s=ce(t),r=Ge(t),o=yc(e,s),a=Wl((l,d)=>{let c,f=te,u;return nc(()=>{const g=e[s];Pe(c,g)&&(c=g,d())}),{get(){return l(),n.get?n.get(c):c},set(g){const y=n.set?n.set(g):g;if(!Pe(y,c)&&!(f!==te&&Pe(g,f)))return;const b=i.vnode.props,N=!!(b&&(t in b||s in b||r in b)&&(`onUpdate:${t}`in b||`onUpdate:${s}`in b||`onUpdate:${r}`in b));N||(c=g,d()),i.emit(`update:${t}`,y),Pe(g,f)&&(Pe(g,y)&&!Pe(y,u)||N&&f!==te&&!Pe(y,c))&&d(),f=g,u=y}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||te:a,done:!1}:{done:!0}}}},a}const yc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ce(t)}Modifiers`]||e[`${Ge(t)}Modifiers`];function Uu(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||te;let s=n;const r=t.startsWith("update:"),o=r&&yc(i,t.slice(7));o&&(o.trim&&(s=n.map(c=>J(c)?c.trim():c)),o.number&&(s=s.map(Pi)));let a,l=i[a=Pn(t)]||i[a=Pn(ce(t))];!l&&r&&(l=i[a=Pn(Ge(t))]),l&&et(l,e,6,s);const d=i[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,et(d,e,6,s)}}const Ku=new WeakMap;function vc(e,t,n=!1){const i=n?Ku:t.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let o={},a=!1;if(!Y(e)){const l=d=>{const c=vc(d,t,!0);c&&(a=!0,Q(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(ae(e)&&i.set(e,null),null):(H(r)?r.forEach(l=>o[l]=null):Q(o,r),ae(e)&&i.set(e,o),o)}function nr(e,t){return!e||!mn(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),re(e,t[0].toLowerCase()+t.slice(1))||re(e,Ge(t))||re(e,t))}function is(e){const{type:t,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:d,renderCache:c,props:f,data:u,setupState:g,ctx:y,inheritAttrs:b}=e,N=gi(e);let I,v;try{if(n.shapeFlag&4){const m=s||i,w=m;I=Ke(d.call(w,m,c,f,g,u,y)),v=a}else{const m=t;I=Ke(m.length>1?m(f,{attrs:a,slots:o,emit:l}):m(f,null)),v=t.props?a:Gu(a)}}catch(m){zt.length=0,bn(m,e,1),I=xe(we)}let h=I;if(v&&b!==!1){const m=Object.keys(v),{shapeFlag:w}=h;m.length&&w&7&&(r&&m.some(Vs)&&(v=qu(v,r)),h=kt(h,v,!1,!0))}if(n.dirs&&(h=kt(h,null,!1,!0),h.dirs=h.dirs?h.dirs.concat(n.dirs):n.dirs),n.transition){const m=Qs(h.type)&&gs(h)||h;ut(m,n.transition)}return I=h,gi(N),I}function ko(e,t=!0){let n;for(let i=0;i<e.length;i++){const s=e[i];if($t(s)){if(s.type!==we||s.children==="v-if"){if(n)return;n=s}}else return}return n}const Gu=e=>{let t;for(const n in e)(n==="class"||n==="style"||mn(n))&&((t||(t={}))[n]=e[n]);return t},qu=(e,t)=>{const n={};for(const i in e)(!Vs(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function Yu(e,t,n){const{props:i,children:s,component:r}=e,{props:o,children:a,patchFlag:l}=t,d=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?ka(i,o,d):!!o;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const u=c[f];if(_c(o,i,u)&&!nr(d,u))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ka(i,o,d):!0:!!o;return!1}function ka(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!re(e,r)||_c(t,e,r)&&!nr(n,r))return!0}return!1}function _c(e,t,n){const i=e[n],s=t[n];return n==="style"&&ae(i)&&ae(s)?!ct(i,s):i!==s}function ir({vnode:e,parent:t,suspense:n},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=i,e=s),s===e)(e=t.vnode).el=i,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=i)}const Sc={},Tc=()=>Object.create(Sc),kc=e=>Object.getPrototypeOf(e)===Sc;function Ju(e,t,n,i=!1){const s={},r=Tc();e.propsDefaults=Object.create(null),Ec(e,t,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=i?s:$l(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Xu(e,t,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,a=ie(s),[l]=e.propsOptions;let d=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let u=c[f];if(nr(e.emitsOptions,u))continue;const g=t[u];if(l)if(re(r,u))g!==r[u]&&(r[u]=g,d=!0);else{const y=ce(u);s[y]=Fr(l,a,y,g,e,!1)}else g!==r[u]&&(r[u]=g,d=!0)}}}else{Ec(e,t,s,r)&&(d=!0);let c;for(const f in a)(!t||!re(t,f)&&((c=Ge(f))===f||!re(t,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(s[f]=Fr(l,a,f,void 0,e,!0)):delete s[f]);if(r!==a)for(const f in r)(!t||!re(t,f))&&(delete r[f],d=!0)}d&&It(e.attrs,"set","")}function Ec(e,t,n,i){const[s,r]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Lt(l))continue;const d=t[l];let c;s&&re(s,c=ce(l))?!r||!r.includes(c)?n[c]=d:(a||(a={}))[c]=d:nr(e.emitsOptions,l)||(!(l in i)||d!==i[l])&&(i[l]=d,o=!0)}if(r){const l=ie(n),d=a||te;for(let c=0;c<r.length;c++){const f=r[c];n[f]=Fr(s,l,f,d[f],e,!re(d,f))}}return o}function Fr(e,t,n,i,s,r){const o=e[n];if(o!=null){const a=re(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Y(l)){const{propsDefaults:d}=s;if(n in d)i=d[n];else{const c=Un(s);i=d[n]=l.call(null,t),c()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ge(n))&&(i=!0))}return i}const Qu=new WeakMap;function Cc(e,t,n=!1){const i=n?Qu:t.propsCache,s=i.get(e);if(s)return s;const r=e.props,o={},a=[];let l=!1;if(!Y(e)){const c=f=>{l=!0;const[u,g]=Cc(f,t,!0);Q(o,u),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!r&&!l)return ae(e)&&i.set(e,an),an;if(H(r))for(let c=0;c<r.length;c++){const f=ce(r[c]);Ea(f)&&(o[f]=te)}else if(r)for(const c in r){const f=ce(c);if(Ea(f)){const u=r[c],g=o[f]=H(u)||Y(u)?{type:u}:Q({},u),y=g.type;let b=!1,N=!0;if(H(y))for(let I=0;I<y.length;++I){const v=y[I],h=Y(v)&&v.name;if(h==="Boolean"){b=!0;break}else h==="String"&&(N=!1)}else b=Y(y)&&y.name==="Boolean";g[0]=b,g[1]=N,(b||re(g,"default"))&&a.push(f)}}const d=[o,a];return ae(e)&&i.set(e,d),d}function Ea(e){return e[0]!=="$"&&!Lt(e)}const Eo=e=>e==="_"||e==="_ctx"||e==="$stable",Co=e=>H(e)?e.map(Ke):[Ke(e)],Zu=(e,t,n)=>{if(t._n)return t;const i=uo((...s)=>Co(t(...s)),n);return i._c=!1,i},Ac=(e,t,n)=>{const i=e._ctx;for(const s in e){if(Eo(s))continue;const r=e[s];if(Y(r))t[s]=Zu(s,r,i);else if(r!=null){const o=Co(r);t[s]=()=>o}}},Pc=(e,t)=>{const n=Co(t);e.slots.default=()=>n},Rc=(e,t,n)=>{for(const i in t)(n||!Eo(i))&&(e[i]=t[i])},eh=(e,t,n)=>{const i=e.slots=Tc();if(e.vnode.shapeFlag&32){const s=t._;s?(Rc(i,t,n),n&&ml(i,"_",s,!0)):Ac(t,i)}else t&&Pc(e,t)},th=(e,t,n)=>{const{vnode:i,slots:s}=e;let r=!0,o=te;if(i.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:Rc(s,t,n):(r=!t.$stable,Ac(t,s)),o=t}else t&&(Pc(e,t),o={default:1});if(r)for(const a in s)!Eo(a)&&o[a]==null&&delete s[a]},ye=vs;function Nc(e){return Dc(e)}function Ic(e){return Dc(e,Jp)}function Dc(e,t){const n=js();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:d,setElementText:c,parentNode:f,nextSibling:u,setScopeId:g=De,insertStaticContent:y}=e,b=(p,x,S,D=null,E=null,R=null,$=void 0,V=null,F=!!x.dynamicChildren)=>{if(p===x)return;p&&!at(p,x)&&(D=Hi(p),le(p,E,R,!0),p=null),x.patchFlag===-2&&(F=!1,x.dynamicChildren=null),x.dynamicChildren&&p&&p.dynamicChildren&&p.dynamicChildren.hasOnce&&(x.dynamicChildren===an&&(x.dynamicChildren=[]),x.dynamicChildren.hasOnce=!0);const{type:A,ref:K,shapeFlag:B}=x;switch(A){case Jt:N(p,x,S,D);break;case we:I(p,x,S,D);break;case Xt:p==null&&v(x,S,D,$);break;case Ce:k(p,x,S,D,E,R,$,V,F);break;default:B&1?w(p,x,S,D,E,R,$,V,F):B&6?z(p,x,S,D,E,R,$,V,F):(B&64||B&128)&&A.process(p,x,S,D,E,R,$,V,F,vn)}K!=null&&E?In(K,p&&p.ref,R,x||p,!x):K==null&&p&&p.ref!=null&&In(p.ref,null,R,p,!0)},N=(p,x,S,D)=>{if(p==null)i(x.el=a(x.children),S,D);else{const E=x.el=p.el;x.children!==p.children&&d(E,x.children)}},I=(p,x,S,D)=>{p==null?i(x.el=l(x.children||""),S,D):x.el=p.el},v=(p,x,S,D)=>{[p.el,p.anchor]=y(p.children,x,S,D,p.el,p.anchor)},h=({el:p,anchor:x},S,D)=>{let E;for(;p&&p!==x;)E=u(p),i(p,S,D),p=E;i(x,S,D)},m=({el:p,anchor:x})=>{let S;for(;p&&p!==x;)S=u(p),s(p),p=S;s(x)},w=(p,x,S,D,E,R,$,V,F)=>{if(x.type==="svg"?$="svg":x.type==="math"&&($="mathml"),p==null)O(x,S,D,E,R,$,V,F);else{const A=p.el&&p.el._isVueCE?p.el:null;try{A&&A._beginPatch(),T(p,x,E,R,$,V,F)}finally{A&&A._endPatch()}}},O=(p,x,S,D,E,R,$,V)=>{let F,A;const{props:K,shapeFlag:B,transition:U,dirs:X}=p;if(F=p.el=o(p.type,R,K&&K.is,K),B&8?c(F,p.children):B&16&&_(p.children,F,null,D,E,yr(p,R),$,V),X&&bt(p,null,D,"created"),P(F,p,p.scopeId,$,D),K){for(const fe in K)fe!=="value"&&!Lt(fe)&&r(F,fe,null,K[fe],R,D);"value"in K&&r(F,"value",null,K.value,R),(A=K.onVnodeBeforeMount)&&Ue(A,D,p)}X&&bt(p,null,D,"beforeMount");const se=Oc(E,U);se?U.beforeEnter(F):U&&!U.persisted&&(F[Vr]=!0),i(F,x,S),((A=K&&K.onVnodeMounted)||se||X)&&ye(()=>{A&&Ue(A,D,p),se&&U.enter(F),X&&bt(p,null,D,"mounted")},E)},P=(p,x,S,D,E)=>{if(S&&g(p,S),D)for(let R=0;R<D.length;R++)g(p,D[R]);if(E){let R=E.subTree;if(x===R||ys(R.type)&&(R.ssContent===x||R.ssFallback===x)){const $=E.vnode;P(p,$,$.scopeId,$.slotScopeIds,E.parent)}}},_=(p,x,S,D,E,R,$,V,F=0)=>{for(let A=F;A<p.length;A++){const K=p[A]=V?Nt(p[A]):Ke(p[A]);b(null,K,x,S,D,E,R,$,V)}},T=(p,x,S,D,E,R,$)=>{const V=x.el=p.el;let{patchFlag:F,dynamicChildren:A,dirs:K}=x;F|=p.patchFlag&16;const B=p.props||te,U=x.props||te;let X;if(S&&nn(S,!1),(X=U.onVnodeBeforeUpdate)&&Ue(X,S,x,p),K&&bt(x,p,S,"beforeUpdate"),S&&nn(S,!0),A&&(!p.dynamicChildren||p.dynamicChildren.length!==A.length)&&(F=0,$=!1,A=null),(B.innerHTML&&U.innerHTML==null||B.textContent&&U.textContent==null)&&c(V,""),A?C(p.dynamicChildren,A,V,S,D,yr(x,E),R):$||G(p,x,V,null,S,D,yr(x,E),R,!1),F>0){if(F&16)M(V,B,U,S,E);else if(F&2&&B.class!==U.class&&r(V,"class",null,U.class,E),F&4&&r(V,"style",B.style,U.style,E),F&8){const se=x.dynamicProps;for(let fe=0;fe<se.length;fe++){const de=se[fe],ve=B[de],Ee=U[de];(Ee!==ve||de==="value")&&r(V,de,ve,Ee,E,S)}}F&1&&p.children!==x.children&&c(V,x.children)}else!$&&A==null&&M(V,B,U,S,E);((X=U.onVnodeUpdated)||K)&&ye(()=>{X&&Ue(X,S,x,p),K&&bt(x,p,S,"updated")},D)},C=(p,x,S,D,E,R,$)=>{for(let V=0;V<x.length;V++){const F=p[V],A=x[V],K=F.el||Dn(F),B=K&&(F.type===Ce||!at(F,A)||F.shapeFlag&198)?f(K):S;b(F,A,B,null,D,E,R,$,!0)}},M=(p,x,S,D,E)=>{if(x!==S){if(x!==te)for(const R in x)!Lt(R)&&!(R in S)&&r(p,R,x[R],null,E,D);for(const R in S){if(Lt(R))continue;const $=S[R],V=x[R];$!==V&&R!=="value"&&r(p,R,V,$,E,D)}"value"in S&&r(p,"value",x.value,S.value,E)}},k=(p,x,S,D,E,R,$,V,F)=>{const A=x.el=p?p.el:a(""),K=x.anchor=p?p.anchor:a("");let{patchFlag:B,dynamicChildren:U,slotScopeIds:X}=x;X&&(V=V?V.concat(X):X),p==null?(i(A,S,D),i(K,S,D),_(x.children||[],S,K,E,R,$,V,F)):B>0&&B&64&&U&&p.dynamicChildren&&p.dynamicChildren.length===U.length?(C(p.dynamicChildren,U,S,E,R,$,V),(x.key!=null||E&&x===E.subTree)&&Ao(p,x,!0)):G(p,x,S,K,E,R,$,V,F)},z=(p,x,S,D,E,R,$,V,F)=>{x.slotScopeIds=V,p==null?x.shapeFlag&512?E.ctx.activate(x,S,D,$,F):L(x,S,D,E,R,$,F):W(p,x,F)},L=(p,x,S,D,E,R,$)=>{const V=p.component=Wc(p,D,E);if(Mi(p)&&(V.ctx.renderer=vn),Kc(V,!1,$),V.asyncDep){if(E&&E.registerDep(V,j,$,R),!p.el){const F=V.subTree=xe(we);I(null,F,x,S),p.placeholder=F.el}}else j(V,p,x,S,E,R,$)},W=(p,x,S)=>{const D=x.component=p.component;if(Yu(p,x,S))if(D.asyncDep&&!D.asyncResolved){x.el=p.el,x.placeholder=p.placeholder,q(D,x,S);return}else D.next=x,D.update();else x.el=p.el,x.placeholder=p.placeholder,D.vnode=x},j=(p,x,S,D,E,R,$)=>{const V=()=>{if(p.isMounted){let{next:B,bu:U,u:X,parent:se,vnode:fe}=p;{const Ye=Mc(p);if(Ye){B&&(B.el=fe.el,q(p,B,$)),Ye.asyncDep.then(()=>{const Et=()=>{p.job.flags&8||(E&&E.pendingBranch?ye(Et,E):A())};Et.flags=48,ye(Et,E)});return}}let de=B,ve;nn(p,!1),B?(B.el=fe.el,q(p,B,$)):B=fe,U&&Rn(U),(ve=B.props&&B.props.onVnodeBeforeUpdate)&&Ue(ve,se,B,fe),nn(p,!0);const Ee=is(p),it=p.subTree;p.subTree=Ee,b(it,Ee,f(it.el||Dn(it)),Hi(it),p,E,R),B.el=Ee.el,de===null&&ir(p,Ee.el),X&&ye(X,E),(ve=B.props&&B.props.onVnodeUpdated)&&ye(()=>Ue(ve,se,B,fe),E)}else{let B;const{el:U,props:X}=x,{bm:se,m:fe,parent:de,root:ve,type:Ee}=p,it=Ft(x);if(nn(p,!1),se&&Rn(se),!it&&(B=X&&X.onVnodeBeforeMount)&&Ue(B,de,x),nn(p,!0),U&&pr){const Ye=()=>{p.subTree=is(p),pr(U,p.subTree,p,E,null)};it&&Ee.__asyncHydrate?Ee.__asyncHydrate(U,p,Ye):Ye()}else{ve.ce&&ve.ce._hasShadowRoot()&&ve.ce._injectChildStyle(Ee,p.parent?p.parent.type:void 0);const Ye=p.subTree=is(p);b(null,Ye,S,D,p,E,R),x.el=Ye.el}if(fe&&ye(fe,E),!it&&(B=X&&X.onVnodeMounted)){const Ye=x;ye(()=>Ue(B,de,Ye),E)}(x.shapeFlag&256||de&&Ft(de.vnode)&&de.vnode.shapeFlag&256)&&p.a&&ye(p.a,E),p.isMounted=!0,x=S=D=null}};p.scope.on();const F=p.effect=new fi(V);p.scope.off();const A=p.update=F.run.bind(F),K=p.job=F.runIfDirty.bind(F);K.i=p,K.id=p.uid,F.scheduler=()=>Js(K),nn(p,!0),A()},q=(p,x,S)=>{x.component=p;const D=p.vnode.props;p.vnode=x,p.next=null,Xu(p,x.props,D,S),th(p,x.children,S),St(),Jl(p),Tt()},G=(p,x,S,D,E,R,$,V,F=!1)=>{const A=p&&p.children,K=p?p.shapeFlag:0,B=x.children,{patchFlag:U,shapeFlag:X}=x;if(U>0){if(U&128){Z(A,B,S,D,E,R,$,V,F);return}else if(U&256){ge(A,B,S,D,E,R,$,V,F);return}}X&8?(K&16&&Kn(A,E,R),B!==A&&c(S,B)):K&16?X&16?Z(A,B,S,D,E,R,$,V,F):Kn(A,E,R,!0):(K&8&&c(S,""),X&16&&_(B,S,D,E,R,$,V,F))},ge=(p,x,S,D,E,R,$,V,F)=>{p=p||an,x=x||an;const A=p.length,K=x.length,B=Math.min(A,K);let U;for(U=0;U<B;U++){const X=x[U]=F?Nt(x[U]):Ke(x[U]);b(p[U],X,S,null,E,R,$,V,F)}A>K?Kn(p,E,R,!0,!1,B):_(x,S,D,E,R,$,V,F,B)},Z=(p,x,S,D,E,R,$,V,F)=>{let A=0;const K=x.length;let B=p.length-1,U=K-1;for(;A<=B&&A<=U;){const X=p[A],se=x[A]=F?Nt(x[A]):Ke(x[A]);if(at(X,se))b(X,se,S,null,E,R,$,V,F);else break;A++}for(;A<=B&&A<=U;){const X=p[B],se=x[U]=F?Nt(x[U]):Ke(x[U]);if(at(X,se))b(X,se,S,null,E,R,$,V,F);else break;B--,U--}if(A>B){if(A<=U){const X=U+1,se=X<K?x[X].el:D;for(;A<=U;)b(null,x[A]=F?Nt(x[A]):Ke(x[A]),S,se,E,R,$,V,F),A++}}else if(A>U)for(;A<=B;)le(p[A],E,R,!0),A++;else{const X=A,se=A,fe=new Map;for(A=se;A<=U;A++){const Je=x[A]=F?Nt(x[A]):Ke(x[A]);Je.key!=null&&fe.set(Je.key,A)}let de,ve=0;const Ee=U-se+1;let it=!1,Ye=0;const Et=new Array(Ee);for(A=0;A<Ee;A++)Et[A]=0;for(A=X;A<=B;A++){const Je=p[A];if(ve>=Ee){le(Je,E,R,!0);continue}let mt;if(Je.key!=null)mt=fe.get(Je.key);else for(de=se;de<=U;de++)if(Et[de-se]===0&&at(Je,x[de])){mt=de;break}mt===void 0?le(Je,E,R,!0):(Et[mt-se]=A+1,mt>=Ye?Ye=mt:it=!0,b(Je,x[mt],S,null,E,R,$,V,F),ve++)}const oa=it?nh(Et):an;for(de=oa.length-1,A=Ee-1;A>=0;A--){const Je=se+A,mt=x[Je],aa=x[Je+1],la=Je+1<K?aa.el||Dn(aa):D;Et[A]===0?b(null,mt,S,la,E,R,$,V,F):it&&(de<0||A!==oa[de]?me(mt,S,la,2):de--)}}},me=(p,x,S,D,E=null)=>{const{el:R,type:$,transition:V,children:F,shapeFlag:A}=p;if(A&6){me(p.component.subTree,x,S,D);return}if(A&128){p.suspense.move(x,S,D);return}if(A&64){$.move(p,x,S,vn);return}if($===Ce){i(R,x,S);for(let B=0;B<F.length;B++)me(F[B],x,S,D);i(p.anchor,x,S);return}if($===Xt){h(p,x,S);return}if(D!==2&&A&1&&V)if(D===0)V.persisted&&!R[rt]?i(R,x,S):(V.beforeEnter(R),i(R,x,S),ye(()=>V.enter(R),E));else{const{leave:B,delayLeave:U,afterLeave:X}=V,se=()=>{p.ctx.isUnmounted?s(R):i(R,x,S)},fe=()=>{const de=R._isLeaving||!!R[rt];R._isLeaving&&R[rt](!0),V.persisted&&!de?se():B(R,()=>{se(),X&&X()})};U?U(R,se,fe):fe()}else i(R,x,S)},le=(p,x,S,D=!1,E=!1)=>{const{type:R,props:$,ref:V,children:F,dynamicChildren:A,shapeFlag:K,patchFlag:B,dirs:U,cacheIndex:X,memo:se}=p;if((B===-2||A&&A.hasOnce)&&(E=!1),V!=null&&(St(),In(V,null,S,p,!0),Tt()),X!=null&&(!p.ctx||p.ctx===x)&&(x.renderCache[X]=void 0),K&256&&x.ctx.deactivate(p))return;const fe=K&1&&U,de=!Ft(p);let ve;if(de&&(ve=$&&$.onVnodeBeforeUnmount)&&Ue(ve,x,p),K&6)mf(p.component,S,D);else{if(K&128){p.suspense.unmount(S,D);return}fe&&bt(p,null,x,"beforeUnmount"),K&64?p.type.remove(p,x,S,vn,D):A&&!A.hasOnce&&(R!==Ce||B>0&&B&64)?Kn(A,x,S,!1,!0):(R===Ce&&B&384||!E&&K&16)&&Kn(F,x,S),D&&yn(p)}const Ee=se!=null&&X==null;(de&&(ve=$&&$.onVnodeUnmounted)||fe||Ee)&&ye(()=>{ve&&Ue(ve,x,p),fe&&bt(p,null,x,"unmounted"),Ee&&(p.el=null)},S)},yn=p=>{const{type:x,el:S,anchor:D,transition:E}=p,R=x===Ce;if(R&&!E){sa(S,D);return}if(x===Xt){m(p),E&&!E.persisted&&E.afterLeave&&E.afterLeave();return}const $=R?mi(p):p,V=()=>{R?f(S)&&sa(S,D):s(S),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if($&&$.shapeFlag&1&&E&&!E.persisted){const{leave:F,delayLeave:A}=E,K=$.el,B=()=>F(K,V);A?A(K,V,B):B()}else V()},sa=(p,x)=>{let S;for(;p!==x;)S=u(p),s(p),p=S;s(x)},mf=(p,x,S)=>{const{bum:D,scope:E,job:R,subTree:$,um:V,m:F,a:A}=p;ws(F),ws(A),D&&Rn(D),E.stop(),R?(R.flags|=8,le($,p,x,S)):$&&($.transition=p.vnode.transition,le($,p,x,S)),V&&ye(V,x);const K=()=>{p.isUnmounted=!0};K.flags=16,ye(K,x)},Kn=(p,x,S,D=!1,E=!1,R=0)=>{for(let $=R;$<p.length;$++)le(p[$],x,S,D,E)},Hi=p=>{if(p.shapeFlag&6)return Hi(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const x=u(p.anchor||p.el),S=x&&x[sc];return S?u(S):x},ra=(p,x,S)=>{const D=p&&x._vnode?void 0:p&&p.component?p.component.uid:gh();Ip(()=>{p==null?x._vnode&&le(x._vnode,null,null,!0):b(x._vnode||null,p,x,null,null,null,S),x._vnode=p},D)},vn={p:b,um:le,m:me,r:yn,mt:L,mc:_,pc:G,pbc:C,n:Hi,o:e};let fr,pr;return t&&([fr,pr]=t(vn)),{render:ra,hydrate:fr,createApp:ju(ra,fr)}}function yr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function nn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Oc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ao(e,t,n=!1){const i=e.children,s=t.children;if(H(i)&&H(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Nt(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Ao(o,a)),a.type===Jt&&(a.patchFlag===-1&&(a=s[r]=Nt(a)),a.el=o.el),a.type===we&&!a.el&&(a.el=o.el)}}function nh(e){const t=e.slice(),n=[0];let i,s,r,o,a;const l=e.length;for(i=0;i<l;i++){const d=e[i];if(d!==0){if(s=n[n.length-1],e[s]<d){t[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<d?r=a+1:o=a;d<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}function Mc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Mc(t)}function ws(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Dn(e){if(e.placeholder)return e.placeholder;const t=e.component;if(t)return Dn(t.subTree);const n=e.suspense;return n&&n.activeBranch?Dn(n.activeBranch):null}const ys=e=>e.__isSuspense;let zr=0;const Vr=Symbol("_deferredEnter"),ih={name:"Suspense",__isSuspense:!0,process(e,t,n,i,s,r,o,a,l,d){if(e==null)rh(t,n,i,s,r,o,a,l,d);else{const c=e.suspense;if(r&&r.deps>0&&!r.isHydrating){const f=c.parentComponent;if(!!f&&f.suspense===r&&f.suspenseId!==r.pendingId?r.pendingBranch&&!at(t.ssContent,c.pendingBranch||c.activeBranch):!c.isInFallback){t.suspense=c,c.vnode=t,t.el=e.el;return}}oh(e,t,n,i,s,o,a,l,d)}},hydrate:ah,normalize:lh},sh=ih;function wi(e,t){const n=e.props&&e.props[t];Y(n)&&n()}function Ca(e){const t=[];$r(e,t,!0),t.length&&Mt(t)}function $r(e,t,n){const{el:i,transition:s,children:r,shapeFlag:o}=e;if(o&6){$r(e.component.subTree,t,n);return}if(!(o&192)&&(o&1&&(!n&&i&&i[Vr]&&(i[Vr]=void 0,s&&!s.persisted&&(s.beforeEnter(i),t.push(()=>s.enter(i)))),n=!1),o&16))for(let a=0;a<r.length;a++)$r(r[a],t,n)}function rh(e,t,n,i,s,r,o,a,l){const{p:d,o:{createElement:c}}=l,f=c("div"),u=e.suspense=Lc(e,s,i,t,f,n,r,o,a,l);d(null,u.pendingBranch=e.ssContent,f,null,i,u,r,o),u.deps>0?(wi(e,"onPending"),wi(e,"onFallback"),d(null,e.ssFallback,t,n,i,null,r,o),On(u,e.ssFallback)):u.resolve(!1,!0)}function oh(e,t,n,i,s,r,o,a,{p:l,um:d,o:{createElement:c}}){const f=t.suspense=e.suspense;f.vnode=t,t.el=e.el;const u=t.ssContent,g=t.ssFallback,{activeBranch:y,pendingBranch:b,isInFallback:N,isHydrating:I}=f;if(b)f.pendingBranch=u,at(b,u)?(f.deps++,l(b,u,I?n:f.hiddenContainer,null,s,f,r,o,a),f.deps--,f.deps<=0?f.resolve():N&&!I&&!f.isFallbackMountPending&&(l(y,g,n,i,s,null,r,o,a),On(f,g))):(f.pendingId=zr++,I?(f.isHydrating=!1,f.activeBranch=b):d(b,s,f),f.deps=0,Fc(f),f.hiddenContainer=c("div"),N?(l(null,u,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0?f.resolve():f.isFallbackMountPending||(l(y,g,n,i,s,null,r,o,a),On(f,g))):y&&at(y,u)?(l(y,u,n,i,s,f,r,o,a),f.resolve(!0)):(l(null,u,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0&&f.resolve()));else if(y&&at(y,u))l(y,u,n,i,s,f,r,o,a),On(f,u);else if(wi(t,"onPending"),f.pendingBranch=u,f.pendingId=zr++,l(null,u,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0)f.resolve();else{const{timeout:v}=f;v>0?f.timeoutTimer=setTimeout(()=>{f.timeoutTimer=void 0,f.fallback(f.vnode.ssFallback)},v):v===0&&f.fallback(g)}}function Lc(e,t,n,i,s,r,o,a,l,d,c=!1){const{p:f,m:u,um:g,n:y,o:{parentNode:b,remove:N}}=d;let I;const v=ch(e);v&&t&&t.pendingBranch&&(I=t.pendingId,t.deps++);const h=e.props?cs(e.props.timeout):void 0,m=r,w={vnode:e,parent:t,parentComponent:n,namespace:o,container:i,hiddenContainer:s,deps:0,pendingId:zr++,timeout:typeof h=="number"?h:-1,timeoutTimer:void 0,activeBranch:null,isFallbackMountPending:!1,pendingBranch:null,isInFallback:!c,isHydrating:c,isUnmounted:!1,effects:[],resolve(O=!1,P=!1){const{vnode:_,activeBranch:T,pendingBranch:C,pendingId:M,effects:k,parentComponent:z,container:L,isInFallback:W}=w;let j=!1;if(w.isHydrating)w.isHydrating=!1;else if(!O){j=T&&C.transition&&C.transition.mode==="out-in";let Z=!1;j&&(T.transition.afterLeave=()=>{M===w.pendingId&&!w.isUnmounted&&(Ca(C),u(C,L,r===m&&!Z?y(T):r,0),Mt(k),W&&_.ssFallback&&(_.ssFallback.el=null))}),T&&!w.isFallbackMountPending&&(b(T.el||Dn(T))===L&&(r=y(T),Z=!0),g(T,z,w,!0),!j&&W&&_.ssFallback&&ye(()=>_.ssFallback.el=null,w)),j||(Ca(C),u(C,L,r,0))}clearTimeout(w.timeoutTimer),w.timeoutTimer=void 0,w.isFallbackMountPending=!1,On(w,C),w.pendingBranch=null,w.isInFallback=!1;let q=0;for(let Z=0;Z<k.length;Z++){const me=k[Z];me.flags&32?Mt(me):k[q++]=me}k.length=q;let G=w.parent,ge=!1;for(;G;){if(G.pendingBranch){for(let Z=0;Z<k.length;Z++)G.effects.push(k[Z]);ge=!0;break}G=G.parent}!ge&&!j&&Mt(k),w.effects=[],v&&t&&t.pendingBranch&&I===t.pendingId&&(I=void 0,t.deps--,t.deps===0&&!P&&t.resolve()),wi(_,"onResolve")},fallback(O){if(w.isUnmounted||!w.pendingBranch)return;const{vnode:P,activeBranch:_,parentComponent:T,container:C,namespace:M}=w;wi(P,"onFallback");const k=y(_),z=()=>{if(w.isFallbackMountPending=!1,w.isUnmounted||!w.isInFallback)return;const W=w.vnode.ssFallback;f(null,W,C,k,T,null,M,a,l),On(w,W)},L=O.transition&&O.transition.mode==="out-in";L&&(w.isFallbackMountPending=!0,_.transition.afterLeave=z),w.isInFallback=!0,g(_,T,null,!0),L||z()},move(O,P,_){w.activeBranch&&u(w.activeBranch,O,P,_),w.container=O},next(){return w.activeBranch&&y(w.activeBranch)},registerDep(O,P,_,T){const C=!!w.pendingBranch;C&&w.deps++;const M=O.vnode.el,k=z=>{O.asyncResolved=!0;const{vnode:L}=O;Hr(O,z,!1),M&&(L.el=M);const W=!M&&O.subTree.el;P(O,L,b(M||O.subTree.el),M?null:y(O.subTree),w,T,_),W&&(L.placeholder=null,N(W)),ir(O,L.el)};O.asyncDep.catch(z=>(bn(z,O,0,!1,!0),()=>null)).then(z=>{if(O.isUnmounted||w.isUnmounted)return;const L=C&&w.pendingId===O.suspenseId;if(_i(),!O.scope.active){L&&--w.deps===0&&w.resolve();return}if(!L&&w.pendingBranch){const W=()=>{O.isUnmounted||w.isUnmounted||!O.scope.active||(w.pendingBranch?vs(W,w):k(z))};W.flags=48,vs(W,w);return}k(z),L&&--w.deps===0&&w.resolve()})},unmount(O,P){if(w.isUnmounted=!0,clearTimeout(w.timeoutTimer),w.timeoutTimer=void 0,I!==void 0){const _=w.parent,T=I;I=void 0,Mt(()=>{_.pendingId===T&&!_.isUnmounted&&--_.deps===0&&_.resolve()})}w.activeBranch&&g(w.activeBranch,n,O,P),w.pendingBranch&&(g(w.pendingBranch,n,w,P),Fc(w))}};return w}function ah(e,t,n,i,s,r,o,a,l){const d=t.suspense=Lc(t,i,n,e.parentNode,document.createElement("div"),null,s,r,o,a,!0),c=l(e,d.pendingBranch=t.ssContent,n,d,r,o);return d.deps===0&&d.resolve(!1,!0),c}function lh(e){const{shapeFlag:t,children:n}=e,i=t&32;e.ssContent=Aa(i?n.default:n),e.ssFallback=i?Aa(n.fallback):xe(we)}function Aa(e){let t;if(Y(e)){const n=un&&e._c;n&&(e._d=!1,yi()),e=e(),n&&(e._d=!0,t=Fe,sr())}return H(e)&&(e=ko(e)),e=Ke(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function Fc(e){const{effects:t}=e;for(let n=0;n<t.length;n++){const i=t[n];i.flags&16&&Mt(i)}t.length=0}function vs(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Mt(e)}function On(e,t){e.activeBranch=t;const{vnode:n,parentComponent:i}=e;let s=t.el;for(;!s&&t.component;)t=t.component.subTree,s=t.el;n.el=s,i&&i.subTree===n&&(i.vnode.el=s,ir(i,s))}function ch(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const Ce=Symbol.for("v-fgt"),Jt=Symbol.for("v-txt"),we=Symbol.for("v-cmt"),Xt=Symbol.for("v-stc"),zt=[];let Fe=null;function yi(e=!1){zt.push(Fe=e?null:[])}function sr(){zt.pop(),Fe=zt[zt.length-1]||null}let un=1;function vi(e,t=!1){un+=e,e<0&&Fe&&t&&(Fe.hasOnce=!0)}function zc(e){return e.dynamicChildren=un>0?Fe||an:null,sr(),un>0&&Fe&&Fe.push(e),e}function dh(e,t,n,i,s,r){return zc(Po(e,t,n,i,s,r,!0))}function _s(e,t,n,i,s){return zc(xe(e,t,n,i,s,!0))}function $t(e){return e?e.__v_isVNode===!0:!1}function at(e,t){return e.type===t.type&&e.key===t.key}function fh(e){}const Vc=({key:e})=>e??null,ss=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?J(e)||ke(e)||Y(e)?{i:Ie,r:e,k:t,f:!!n}:e:null);function Po(e,t=null,n=null,i=0,s=null,r=e===Ce?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Vc(t),ref:t&&ss(t),scopeId:Xs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ie};return a?(Ss(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=J(n)?8:16),un>0&&!o&&Fe&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Fe.push(l),l}const xe=ph;function ph(e,t=null,n=null,i=0,s=null,r=!1){if((!e||e===mc)&&(e=we),$t(e)){const a=kt(e,t,!0);return n&&Ss(a,n),un>0&&!r&&Fe&&(a.shapeFlag&6?Fe[Fe.indexOf(e)]=a:Fe.push(a)),a.patchFlag=-2,a}if(wh(e)&&(e=e.__vccOpts),t){t=$c(t);let{class:a,style:l}=t;a&&!J(a)&&(t.class=Ni(a)),ae(l)&&(Ii(l)&&!H(l)&&(l=Q({},l)),t.style=Ri(l))}const o=J(e)?1:ys(e)?128:Qs(e)?64:ae(e)?4:Y(e)?2:0;return Po(e,t,n,i,s,o,r,!0)}function $c(e){return e?Ii(e)?Q({},e):kc(e)?Q({},e[Yc]||e):e:null}function kt(e,t,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=e,d=t?Bc(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Vc(d),ref:t&&t.ref?n&&r?H(r)?r.concat(ss(t)):[r,ss(t)]:ss(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&kt(e.ssContent),ssFallback:e.ssFallback&&kt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return l&&i&&ut(c,l.clone(c)),c}function Ro(e=" ",t=0){return xe(Jt,null,e,t)}function uh(e,t){const n=xe(Xt,null,e);return n.staticCount=t,n}function Hc(e="",t=!1){return t?(yi(),_s(we,null,e)):xe(we,null,e)}function Ke(e){return e==null||typeof e=="boolean"?xe(we):H(e)?xe(Ce,null,e.slice()):$t(e)?Nt(e):xe(Jt,null,String(e))}function Nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:kt(e)}function Ss(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Ss(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!kc(t)?t._ctx=Ie:s===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(Y(t)){if(i&65){Ss(e,{default:t});return}t={default:t,_ctx:Ie},n=32}else t=String(t),i&64?(n=16,t=[Ro(t)]):n=8;e.children=t,e.shapeFlag|=n}function Bc(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Ni([t.class,i.class]));else if(s==="style")t.style=Ri([t.style,i.style]);else if(mn(s)){const r=t[s],o=i[s];o&&r!==o&&!(H(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!Vs(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Ue(e,t,n,i=null){et(e,t,7,[n,i])}const hh=wc();let jc=0;function gh(){return jc}function Wc(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||hh,r={uid:jc++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ao(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cc(i,s),emitsOptions:vc(i,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:i.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Uu.bind(null,r),e.ce&&e.ce(r),r}let Ne=null;const je=()=>Ne||Ie;let Ts,Qt;{const e=js(),t=(n,i)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ts=t("__VUE_INSTANCE_SETTERS__",n=>Ne=n),Qt=t("__VUE_SSR_SETTERS__",n=>hn=n)}const Un=e=>{const t=Ne;return Ts(e),e.scope.on(),()=>{e.scope.off(),Ts(t)}},_i=()=>{Ne&&Ne.scope.off(),Ts(null)};function Uc(e){return e.vnode.shapeFlag&4}let hn=!1;function Kc(e,t=!1,n=!1){t&&Qt(t);const{props:i,children:s}=e.vnode,r=Uc(e);Ju(e,i,r,t),eh(e,s,n||t);const o=r?mh(e,t):void 0;return t&&Qt(!1),o}function mh(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Or);const{setup:i}=n;if(i){St();const s=e.setupContext=i.length>1?Jc(e):null,r=Un(e),o=Wn(i,e,0,[e.props,s]),a=oo(o);if(Tt(),r(),(a||e.sp)&&!Ft(e)&&xo(e),a){if(o.then(_i,_i),t)return o.then(l=>{Qt(!0);try{Hr(e,l,t)}finally{Qt(!1)}}).catch(l=>{bn(l,e,0,void 0,!0),e.ssrRender=(d,c)=>c("<!---->")});e.asyncDep=o}else Hr(e,o,t)}else qc(e,t)}function Hr(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=po(t)),qc(e,n)}let ks,Br;function Gc(e){ks=e,Br=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,Su))}}const xh=()=>!ks;function qc(e,t,n){const i=e.type;if(!e.render){if(!t&&ks&&!i.render){const s=i.template||To(e).template;if(s){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=i,d=Q(Q({isCustomElement:r,delimiters:a},o),l);i.render=ks(s,d)}}e.render=i.render||De,Br&&Br(e)}{const s=Un(e);St();try{Fu(e)}finally{Tt(),s()}}}const Yc=Symbol(),bh={get(e,t){return Le(e,"get",""),t===Yc?e:e[t]}};function Jc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,bh),slots:e.slots,emit:e.emit,expose:t}}function Fi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(po(Hl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ai)return ai[n](e)},has(t,n){return n in t||n in ai}})):e.proxy}function jr(e,t=!0){return Y(e)?e.displayName||e.name:e.name||t&&e.__name}function wh(e){return Y(e)&&"__vccOpts"in e}const Xc=(e,t)=>yp(e,t,hn);function Qc(e,t,n){try{vi(-1);const i=arguments.length;return i===2?ae(t)&&!H(t)?$t(t)?xe(e,null,[t]):xe(e,t):xe(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&$t(n)&&(n=[n]),xe(e,t,n))}finally{vi(1)}}function yh(){}function vh(e,t,n,i){const s=n[i];if(s&&Zc(s,e))return s;const r=t();return r.memo=e.slice(),r.cacheIndex=i,n[i]=r}function Zc(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let i=0;i<n.length;i++)if(Pe(n[i],t[i]))return!1;return un>0&&Fe&&Fe.push(e),!0}const ed="3.5.45",_h=De,Sh=Pp,Th=En,kh=Ql,Eh={createComponentInstance:Wc,setupComponent:Kc,renderComponentRoot:is,setCurrentRenderingInstance:gi,isVNode:$t,normalizeVNode:Ke,getComponentPublicInstance:Fi,ensureValidVNode:So,pushWarningContext:kp,popWarningContext:Ep},Ch=Eh,Ah=null,Ph=null,Rh=null;let Wr;const Pa=typeof window<"u"&&window.trustedTypes;if(Pa)try{Wr=Pa.createPolicy("vue",{createHTML:e=>e})}catch{}const td=Wr?e=>Wr.createHTML(e):e=>e,Nh="http://www.w3.org/2000/svg",Ih="http://www.w3.org/1998/Math/MathML",Rt=typeof document<"u"?document:null,Ra=Rt&&Rt.createElement("template"),nd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t==="svg"?Rt.createElementNS(Nh,e):t==="mathml"?Rt.createElementNS(Ih,e):n?Rt.createElement(e,{is:n}):Rt.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>Rt.createTextNode(e),createComment:e=>Rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const o=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Ra.innerHTML=td(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const a=Ra.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Bt="transition",Yn="animation",Fn=Symbol("_vtc"),id={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sd=Q({},go,id),Dh=e=>(e.displayName="Transition",e.props=sd,e),Oh=Dh((e,{slots:t})=>Qc(oc,rd(e),t)),sn=(e,t=[])=>{H(e)?e.forEach(n=>n(...t)):e&&e(...t)},Na=e=>e?H(e)?e.some(t=>t.length>1):e.length>1:!1;function rd(e){const t={};for(const k in e)k in id||(t[k]=e[k]);if(e.css===!1)return t;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:d=o,appearToClass:c=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:u=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,y=Mh(s),b=y&&y[0],N=y&&y[1],{onBeforeEnter:I,onEnter:v,onEnterCancelled:h,onLeave:m,onLeaveCancelled:w,onBeforeAppear:O=I,onAppear:P=v,onAppearCancelled:_=h}=t,T=(k,z,L,W)=>{k._enterCancelled=W,Ut(k,z?c:a),Ut(k,z?d:o),L&&L()},C=(k,z)=>{k._isLeaving=!1,Ut(k,f),Ut(k,g),Ut(k,u),z&&z()},M=k=>(z,L)=>{const W=k?P:v,j=()=>T(z,k,L);sn(W,[z,j]),Ia(()=>{Ut(z,k?l:r),xt(z,k?c:a),Na(W)||Da(z,i,b,j)})};return Q(t,{onBeforeEnter(k){sn(I,[k]),xt(k,r),xt(k,o)},onBeforeAppear(k){sn(O,[k]),xt(k,l),xt(k,d)},onEnter:M(!1),onAppear:M(!0),onLeave(k,z){k._isLeaving=!0;const L=()=>C(k,z);xt(k,f),k._enterCancelled?(xt(k,u),Ur(k)):(Ur(k),xt(k,u)),Ia(()=>{k._isLeaving&&(Ut(k,f),xt(k,g),Na(m)||Da(k,i,N,L))}),sn(m,[k,L])},onEnterCancelled(k){T(k,!1,void 0,!0),sn(h,[k])},onAppearCancelled(k){T(k,!0,void 0,!0),sn(_,[k])},onLeaveCancelled(k){C(k),sn(w,[k])}})}function Mh(e){if(e==null)return null;if(ae(e))return[vr(e.enter),vr(e.leave)];{const t=vr(e);return[t,t]}}function vr(e){return cs(e)}function xt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Fn]||(e[Fn]=new Set)).add(t)}function Ut(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const n=e[Fn];n&&(n.delete(t),n.size||(e[Fn]=void 0))}function Ia(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Lh=0;function Da(e,t,n,i){const s=e._endId=++Lh,r=()=>{s===e._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=od(e,t);if(!o)return i();const d=o+"end";let c=0;const f=()=>{e.removeEventListener(d,u),r()},u=g=>{g.target===e&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),e.addEventListener(d,u)}function od(e,t){const n=window.getComputedStyle(e),i=y=>(n[y]||"").split(", "),s=i(`${Bt}Delay`),r=i(`${Bt}Duration`),o=Oa(s,r),a=i(`${Yn}Delay`),l=i(`${Yn}Duration`),d=Oa(a,l);let c=null,f=0,u=0;t===Bt?o>0&&(c=Bt,f=o,u=r.length):t===Yn?d>0&&(c=Yn,f=d,u=l.length):(f=Math.max(o,d),c=f>0?o>d?Bt:Yn:null,u=c?c===Bt?r.length:l.length:0);const g=c===Bt&&/\b(?:transform|all)(?:,|$)/.test(i(`${Bt}Property`).toString());return{type:c,timeout:f,propCount:u,hasTransform:g}}function Oa(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>Ma(n)+Ma(e[i])))}function Ma(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ur(e){return(e?e.ownerDocument:document).body.offsetHeight}function Fh(e,t,n){const i=e[Fn];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Es=Symbol("_vod"),No=Symbol("_vsh"),ad={name:"show",beforeMount(e,{value:t},{transition:n}){e[Es]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Jn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!=!n&&(i?t?(i.beforeEnter(e),Jn(e,!0),i.enter(e)):i.leave(e,()=>{Jn(e,!1)}):Jn(e,t))},beforeUnmount(e,{value:t}){Jn(e,t)}};function Jn(e,t){e.style.display=t?e[Es]:"none",e[No]=!t}function zh(){ad.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const ld=Symbol("");function Vh(e){const t=je();if(!t)return;const n=t.ut=(s=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(r=>Cs(r,s))},i=()=>{const s=e(t.proxy);t.ce?Cs(t.ce,s):Kr(t.subTree,s),n(s)};wo(()=>{Mt(i)}),Li(()=>{Nn(i,De,{flush:"post"});const s=new MutationObserver(i);s.observe(t.subTree.el.parentNode,{childList:!0}),yo(()=>s.disconnect())})}function Kr(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Kr(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)Cs(e.el,t);else if(e.type===Ce)e.children.forEach(n=>Kr(n,t));else if(e.type===Xt){let{el:n,anchor:i}=e;for(;n&&(Cs(n,t),n!==i);)n=n.nextSibling}}function Cs(e,t){if(e.nodeType===1){const n=e.style;let i="";for(const s in t){const r=Bf(t[s]);n.setProperty(`--${s}`,r),i+=`--${s}: ${r};`}n[ld]=i}}const $h=/(?:^|;)\s*display\s*:/;function Hh(e,t,n){const i=e.style,s=J(n);let r=!1;if(n&&!s){if(t)if(J(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ni(i,a,"")}else for(const o in t)n[o]==null&&ni(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?jh(e,o,!J(t)&&t?t[o]:void 0,a)||ni(i,o,a):ni(i,o,"")}}else if(s){if(t!==n){const o=i[ld];o&&(n+=";"+o),i.cssText=n,r=$h.test(n)}}else t&&e.removeAttribute("style");Es in e&&((!s||t!==n)&&(e[Es]=r?i.display:""),e[No]&&(i.display="none"))}const Xi=/\s*!important$/;function ni(e,t,n){if(H(n))n.forEach(i=>ni(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))Xi.test(n)?e.setProperty(t,n.replace(Xi,""),"important"):e.setProperty(t,n);else{const i=Bh(e,t);Xi.test(n)?e.setProperty(Ge(i),n.replace(Xi,""),"important"):e[i]=n}}const La=["Webkit","Moz","ms"],_r={};function Bh(e,t){const n=_r[t];if(n)return n;let i=ce(t);if(i!=="filter"&&i in e)return _r[t]=i;i=xn(i);for(let s=0;s<La.length;s++){const r=La[s]+i;if(r in e)return _r[t]=r}return t}function jh(e,t,n,i){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&J(i)&&n===i}const Fa="http://www.w3.org/1999/xlink";function za(e,t,n,i,s,r=Vf(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Fa,t.slice(6,t.length)):e.setAttributeNS(Fa,t,n):n==null||r&&!bl(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Ve(n)?String(n):n)}function Va(e,t,n,i,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?td(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=bl(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Ot(e,t,n,i){e.addEventListener(t,n,i)}function Wh(e,t,n,i){e.removeEventListener(t,n,i)}const $a=Symbol("_vei");function Uh(e,t,n,i,s=null){const r=e[$a]||(e[$a]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=qh(t);if(i){const d=r[t]=Xh(i,s);Ot(e,a,d,l)}else o&&(Wh(e,a,o,l),r[t]=void 0)}}const Kh=/(Once|Passive|Capture)$/,Gh=/^on:?(?:Once|Passive|Capture)$/;function qh(e){let t,n;for(;(n=e.match(Kh))&&!Gh.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Ge(e.slice(2)),t]}let Sr=0;const Yh=Promise.resolve(),Jh=()=>Sr||(Yh.then(()=>Sr=0),Sr=Date.now());function Xh(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const s=n.value;if(H(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const d=o[l];d&&et(d,t,5,a)}}else et(s,t,5,[i])};return n.value=e,n.attached=Jh(),n}const Ha=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,cd=(e,t,n,i,s,r)=>{const o=s==="svg";t==="class"?Fh(e,i,o):t==="style"?Hh(e,n,i):mn(t)?Vs(t)||Uh(e,t,n,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Qh(e,t,i,o))?(Va(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&za(e,t,i,o,r,t!=="value")):e._isVueCE&&(Zh(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!J(i)))?Va(e,ce(t),i,r,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),za(e,t,i,o))};function Qh(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ha(t)&&Y(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ha(t)&&J(n)?!1:t in e}function Zh(e,t){const n=e._def.props;if(!n)return!1;const i=ce(t);return Array.isArray(n)?n.some(s=>ce(s)===i):Object.keys(n).some(s=>ce(s)===i)}const Ba={};function dd(e,t,n){let i=mo(e,t);$s(i)&&(i=Q({},i,t));class s extends rr{constructor(o){super(i,o,n)}}return s.def=i,s}const eg=((e,t)=>dd(e,t,_d)),tg=typeof HTMLElement<"u"?HTMLElement:class{};class rr extends tg{constructor(t,n={},i=Rs){super(),this._def=t,this._props=n,this._createApp=i,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._patching=!1,this._dirty=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._styleAnchors=new WeakMap,this._ob=null,this.shadowRoot&&i!==Rs?this._root=this.shadowRoot:t.shadowRoot!==!1?(this.attachShadow(Q({},t.shadowRootOptions,{mode:"open"})),this._root=this.shadowRoot):this._root=this}connectedCallback(){if(!this.isConnected)return;!this.shadowRoot&&!this._resolved&&this._parseSlots(),this._connected=!0;let t=this;for(;t=t&&(t.assignedSlot||t.parentNode||t.host);)if(t instanceof rr){this._parent=t;break}this._instance||(this._resolved?this._mount(this._def):t&&t._pendingResolve?this._pendingResolve=t._pendingResolve.then(()=>{if(this._pendingResolve=void 0,this.isConnected)return this._resolveDef()}):this._resolveDef())}_setParent(t=this._parent){t&&(this._instance.parent=t._instance,this._inheritParentContext(t))}_inheritParentContext(t=this._parent){t&&this._app&&Object.setPrototypeOf(this._app._context.provides,t._instance.provides)}disconnectedCallback(){this._connected=!1,wn(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null,this._teleportTargets&&(this._teleportTargets.clear(),this._teleportTargets=void 0))})}_processMutations(t){for(const n of t)this._setAttr(n.attributeName)}_resolveDef(){if(this._pendingResolve)return this._pendingResolve;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);this._ob=new MutationObserver(this._processMutations.bind(this)),this._ob.observe(this,{attributes:!0});const t=(i,s=!1)=>{this._resolved=!0,this._pendingResolve=void 0;const{props:r,styles:o}=i;let a;if(r&&!H(r))for(const l in r){const d=r[l];(d===Number||d&&d.type===Number)&&(l in this._props&&(this._props[l]=cs(this._props[l])),(a||(a=Object.create(null)))[ce(l)]=!0)}this._numberProps=a,this._resolveProps(i),this.shadowRoot&&this._applyStyles(o),this._connected&&this._mount(i)},n=this._def.__asyncLoader;if(n)return this._pendingResolve=n().then(i=>{i.configureApp=this._def.configureApp,t(this._def=i,!0)}),this._pendingResolve;t(this._def)}_mount(t){this._app=this._createApp(t),this._inheritParentContext(),t.configureApp&&t.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);const n=this._instance&&this._instance.exposed;if(n)for(const i in n)re(this,i)||Object.defineProperty(this,i,{get:()=>Di(n[i])})}_resolveProps(t){const{props:n}=t,i=H(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&i.includes(s)&&this._setProp(s,this[s]);for(const s of i.map(ce))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(r){this._setProp(s,r,!0,!this._patching)}})}_setAttr(t){if(t.startsWith("data-v-"))return;const n=this.hasAttribute(t);let i=n?this.getAttribute(t):Ba;const s=ce(t);n&&this._numberProps&&this._numberProps[s]&&(i=cs(i)),this._setProp(s,i,!1,!0)}_getProp(t){return this._props[t]}_setProp(t,n,i=!0,s=!1){if(n!==this._props[t]&&(this._dirty=!0,n===Ba?delete this._props[t]:(this._props[t]=n,t==="key"&&this._app&&(this._app._ceVNode.key=n)),s&&this._instance&&this._update(),i)){const r=this._ob;r&&(this._processMutations(r.takeRecords()),r.disconnect()),n===!0?this.setAttribute(Ge(t),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Ge(t),n+""):n||this.removeAttribute(Ge(t)),r&&r.observe(this,{attributes:!0})}}_update(){const t=this._createVNode();this._app&&(t.appContext=this._app._context),vd(t,this._root)}_createVNode(){const t={};this.shadowRoot||(t.onVnodeMounted=t.onVnodeUpdated=this._renderSlots.bind(this));const n=xe(this._def,Q(t,this._props));return this._instance||(n.ce=i=>{this._instance=i,i.ce=this,i.isCE=!0;const s=(r,o)=>{this.dispatchEvent(new CustomEvent(r,$s(o[0])?Q({detail:o},o[0]):{detail:o}))};i.emit=(r,...o)=>{s(r,o),Ge(r)!==r&&s(Ge(r),o)},this._setParent()}),n}_applyStyles(t,n,i){if(!t)return;if(n){if(n===this._def||this._styleChildren.has(n))return;this._styleChildren.add(n)}const s=this._nonce,r=this.shadowRoot,o=i?this._getStyleAnchor(i)||this._getStyleAnchor(this._def):this._getRootStyleInsertionAnchor(r);let a=null;for(let l=t.length-1;l>=0;l--){const d=document.createElement("style");s&&d.setAttribute("nonce",s),d.textContent=t[l],r.insertBefore(d,a||o),a=d,l===0&&(i||this._styleAnchors.set(this._def,d),n&&this._styleAnchors.set(n,d))}}_getStyleAnchor(t){if(!t)return null;const n=this._styleAnchors.get(t);return n&&n.parentNode===this.shadowRoot?n:(n&&this._styleAnchors.delete(t),null)}_getRootStyleInsertionAnchor(t){for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];if(!(i instanceof HTMLStyleElement))return i}return null}_parseSlots(){const t=this._slots={};let n;for(;n=this.firstChild;){const i=n.nodeType===1&&n.getAttribute("slot")||"default";(t[i]||(t[i]=[])).push(n),this.removeChild(n)}}_renderSlots(){const t=this._getSlots(),n=this._instance.type.__scopeId;for(let i=0;i<t.length;i++){const s=t[i],r=s.getAttribute("name")||"default",o=this._slots[r],a=s.parentNode;if(o)for(const l of o){if(n&&l.nodeType===1){const d=n+"-s",c=document.createTreeWalker(l,1);l.setAttribute(d,"");let f;for(;f=c.nextNode();)f.setAttribute(d,"")}a.insertBefore(l,s)}else for(;s.firstChild;)a.insertBefore(s.firstChild,s);a.removeChild(s)}}_getSlots(){const t=[this];this._teleportTargets&&t.push(...this._teleportTargets);const n=new Set;for(const i of t){const s=i.querySelectorAll("slot");for(let r=0;r<s.length;r++)n.add(s[r])}return Array.from(n)}_injectChildStyle(t,n){this._applyStyles(t.styles,t,n)}_beginPatch(){this._patching=!0,this._dirty=!1}_endPatch(){this._patching=!1,this._dirty&&this._instance&&this._update()}_hasShadowRoot(){return this._def.shadowRoot!==!1}_removeChildStyle(t){}}function fd(e){const t=je(),n=t&&t.ce;return n||null}function ng(){const e=fd();return e&&e.shadowRoot}function ig(e="$style"){{const t=je();if(!t)return te;const n=t.type.__cssModules;if(!n)return te;const i=n[e];return i||te}}const pd=new WeakMap,ud=new WeakMap,As=Symbol("_moveCb"),ja=Symbol("_enterCb"),Gr=new WeakMap,sg=e=>(delete e.props.mode,e),rg=sg({name:"TransitionGroup",props:Q({},sd,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=je(),i=ho();let s,r,o,a;const l=()=>(a===void 0&&(a=s.length>0&&ug(s[0].el,n.vnode.el,Wa(e))),a);return er(()=>{if(Gr.delete(n),!l()){s=[],o=void 0;return}const d=Wa(e);s.forEach(ag);const c=o&&pg(o,n.vnode.el);o=void 0,s.forEach(u=>lg(u,c));const f=s.filter(cg);Ur(n.vnode.el),f.forEach(u=>{const g=u.el,y=g.style;xt(g,d),y.transform=y.webkitTransform=y.transitionDuration="";const b=g[As]=N=>{N&&N.target!==g||(!N||N.propertyName.endsWith("transform"))&&(g.removeEventListener("transitionend",b),g[As]=null,Ut(g,d))};g.addEventListener("transitionend",b)}),s=[]}),()=>{const d=ie(e),c=rd(d);let f=d.tag||Ce;if(s=[],a=void 0,r)for(let u=0;u<r.length;u++){const g=r[u];g.el&&g.el instanceof Element&&!g.el[No]&&(s.push(g),ut(g,Ln(g,c,i,n)),pd.set(g,or(g.el)))}r=t.default?Zs(t.default()):[];for(let u=0;u<r.length;u++){const g=r[u];g.key!=null&&ut(g,Ln(g,c,i,n))}return s.length&&(o=dg(n),Gr.set(n,l)),xe(f,null,r)}}}),og=rg;function ag(e){const t=e.el;t[As]&&t[As](),t[ja]&&t[ja]()}function Wa(e){return e.moveClass||`${e.name||"v"}-move`}function lg(e,t){ud.set(e,or(e.el,t))}function cg(e){const t=pd.get(e),n=ud.get(e),i=t.left-n.left,s=t.top-n.top;if(i||s){const r=e.el,o=r.style,a=r.getBoundingClientRect();let l=1,d=1;return r.offsetWidth&&(l=a.width/r.offsetWidth),r.offsetHeight&&(d=a.height/r.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(d)||d===0)&&(d=1),Math.abs(l-1)<.01&&(l=1),Math.abs(d-1)<.01&&(d=1),o.transform=o.webkitTransform=`translate(${i/l}px,${s/d}px)`,o.transitionDuration="0s",e}}function or(e,t){const n=e.getBoundingClientRect();return{left:n.left-(t?t.left:0),top:n.top-(t?t.top:0)}}function dg(e){let t;for(let n=e.parent;n;n=n.parent){const i=Gr.get(n);if(i){const s=fg(n.vnode.el,e.vnode.el);s&&(t||(t=[])).push(Q(or(s),{item:s,willMove:i}))}}return t}function fg(e,t){const n=e.nodeType===1?e:e.parentNode;for(;t&&t.parentNode!==n;)t=t.parentNode;if(t&&t.nodeType===1)return t}function pg(e,t){const n=e.find(i=>i.willMove()&&i.item.contains(t));return n&&or(n.item,n)}function ug(e,t,n){const i=e.cloneNode(),s=e[Fn];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(i);const{hasTransform:o}=od(i);return r.removeChild(i),o}const tn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return H(t)?n=>Rn(t,n):t};function hg(e){e.target.composing=!0}function Ua(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Qe=Symbol("_assign"),Qi=Symbol("_initialValue");function Tr(e,t,n){return t&&(e=e.trim()),n&&(e=Pi(e)),e}const Ps={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e.parentNode&&(e.type==="text"?e[Qi]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Qi]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Qe]=tn(s);const r=i||s.props&&s.props.type==="number";Ot(e,t?"change":"input",o=>{o.target.composing||e[Qe](Tr(e.value,n,r))}),(n||r)&&Ot(e,"change",()=>{e.value=Tr(e.value,n,r)}),t||(Ot(e,"compositionstart",hg),Ot(e,"compositionend",Ua),Ot(e,"change",Ua))},mounted(e,{value:t,modifiers:{trim:n,number:i}}){const s=t??"",r=e[Qi];delete e[Qi],r!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==r?e[Qe](Tr(e.value,n,i)):e.value=s},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(e[Qe]=tn(o),e.composing)return;const a=(r||e.type==="number")&&!/^0\d/.test(e.value)?Pi(e.value):e.value,l=t??"";if(a===l)return;const d=e.getRootNode();(d instanceof Document||d instanceof ShadowRoot)&&d.activeElement===e&&e.type!=="range"&&(i&&t===n||s&&e.value.trim()===l)||(e.value=l)}},Io={deep:!0,created(e,t,n){e[Qe]=tn(n),Ot(e,"change",()=>{const i=e._modelValue,s=zn(e),r=e.checked,o=e[Qe];if(H(i)){const a=Ws(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const d=[...i];d.splice(a,1),o(d)}}else if(_t(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(gd(e,r))})},mounted:Ka,beforeUpdate(e,t,n){e[Qe]=tn(n),Ka(e,t,n)}};function Ka(e,{value:t,oldValue:n},i){e._modelValue=t;let s;if(H(t))s=Ws(t,i.props.value)>-1;else if(_t(t))s=t.has(i.props.value);else{if(t===n)return;s=ct(t,gd(e,!0))}e.checked!==s&&(e.checked=s)}const Do={created(e,{value:t},n){e.checked=ct(t,n.props.value),e[Qe]=tn(n),Ot(e,"change",()=>{e[Qe](zn(e))})},beforeUpdate(e,{value:t,oldValue:n},i){e[Qe]=tn(i),t!==n&&(e.checked=ct(t,i.props.value))}},hd={deep:!0,created(e,{value:t,modifiers:{number:n}},i){e._modelValue=t,Ot(e,"change",()=>{const s=Array.prototype.filter.call(e.options,l=>l.selected).map(l=>n?Pi(zn(l)):zn(l)),r=e.multiple,o=r?_t(e._modelValue)?new Set(s):s:s[0],a=e._pendingValue=[r,r?H(o)?s.slice():s:o];try{e[Qe](o)}finally{wn(()=>{e._pendingValue===a&&(e._pendingValue=void 0)})}}),e[Qe]=tn(i)},mounted(e,{value:t,modifiers:{number:n}}){Ga(e,t,n)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[Qe]=tn(n)},updated(e,{value:t,modifiers:{number:n}}){const i=e._pendingValue;e._pendingValue=void 0,(!i||i[0]!==e.multiple||!gg(t,i[1],i[0]))&&Ga(e,t,n)}};function gg(e,t,n){if(!n||H(e))return ct(e,t);if(_t(e)){if(e.size!==t.length)return!1;for(const i of t)if(!e.has(i))return!1;return!0}return!1}function Ga(e,t,n=!1){const i=e.multiple,s=H(t);if(!(i&&!s&&!_t(t))){for(let r=0,o=e.options.length;r<o;r++){const a=e.options[r],l=zn(a);if(i)if(s){const d=typeof l;d==="string"||d==="number"?a.selected=t.some(c=>String(c)===String(l)):a.selected=Ws(t,l)>-1}else a.selected=t.has(l)||n&&typeof l=="string"&&t.has(Pi(l));else if(ct(zn(a),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!i&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function zn(e){return"_value"in e?e._value:e.value}function gd(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const md={created(e,t,n){Zi(e,t,n,null,"created")},mounted(e,t,n){Zi(e,t,n,null,"mounted")},beforeUpdate(e,t,n,i){Zi(e,t,n,i,"beforeUpdate")},updated(e,t,n,i){Zi(e,t,n,i,"updated")}};function xd(e,t){switch(e){case"SELECT":return hd;case"TEXTAREA":return Ps;default:switch(t){case"checkbox":return Io;case"radio":return Do;default:return Ps}}}function Zi(e,t,n,i,s){const o=xd(e.tagName,n.props&&n.props.type)[s];o&&o(e,t,n,i)}function mg(){Ps.getSSRProps=({value:e})=>({value:e}),Do.getSSRProps=({value:e},t)=>{if(t.props&&ct(t.props.value,e))return{checked:!0}},Io.getSSRProps=({value:e},t)=>{if(H(e)){if(t.props&&Ws(e,t.props.value)>-1)return{checked:!0}}else if(_t(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},md.getSSRProps=(e,t)=>{if(typeof t.type!="string")return;const n=xd(t.type.toUpperCase(),t.props&&t.props.type);if(n.getSSRProps)return n.getSSRProps(e,t)}}const xg=["ctrl","shift","alt","meta"],bg={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>xg.some(n=>e[`${n}Key`]&&!t.includes(n))},wg=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=((s,...r)=>{for(let o=0;o<t.length;o++){const a=bg[t[o]];if(a&&a(s,t))return}return e(s,...r)}))},yg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vg=(e,t)=>{const n=e._withKeys||(e._withKeys={}),i=t.join(".");return n[i]||(n[i]=(s=>{if(!("key"in s))return;const r=Ge(s.key);if(t.some(o=>o===r||yg[o]===r))return e(s)}))},bd=Q({patchProp:cd},nd);let li,qa=!1;function wd(){return li||(li=Nc(bd))}function yd(){return li=qa?li:Ic(bd),qa=!0,li}const vd=((...e)=>{wd().render(...e)}),_g=((...e)=>{yd().hydrate(...e)}),Rs=((...e)=>{const t=wd().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=Td(i);if(!s)return;const r=t._component;!Y(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Sd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t}),_d=((...e)=>{const t=yd().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=Td(i);if(s)return n(s,!0,Sd(s))},t});function Sd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Td(e){return J(e)?document.querySelector(e):e}let Ya=!1;const Sg=()=>{Ya||(Ya=!0,mg(),zh())},Tg=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:oc,BaseTransitionPropsValidators:go,Comment:we,DeprecationTypes:Rh,EffectScope:ao,ErrorCodes:Ap,ErrorTypeStrings:Sh,Fragment:Ce,KeepAlive:uu,ReactiveEffect:fi,Static:Xt,Suspense:sh,Teleport:Wp,Text:Jt,TrackOpTypes:vp,Transition:Oh,TransitionGroup:og,TriggerOpTypes:_p,VueElement:rr,assertNumber:Cp,callWithAsyncErrorHandling:et,callWithErrorHandling:Wn,camelize:ce,capitalize:xn,cloneVNode:kt,compatUtils:Ph,computed:Xc,createApp:Rs,createBlock:_s,createCommentVNode:Hc,createElementBlock:dh,createElementVNode:Po,createHydrationRenderer:Ic,createPropsRestProxy:Mu,createRenderer:Nc,createSSRApp:_d,createSlots:yu,createStaticVNode:uh,createTextVNode:Ro,createVNode:xe,customRef:Wl,defineAsyncComponent:fu,defineComponent:mo,defineCustomElement:dd,defineEmits:ku,defineExpose:Eu,defineModel:Pu,defineOptions:Cu,defineProps:Tu,defineSSRCustomElement:eg,defineSlots:Au,devtools:Th,effect:Uf,effectScope:jf,getCurrentInstance:je,getCurrentScope:_l,getCurrentWatcher:Sp,getTransitionRawChildren:Zs,guardReactiveProps:$c,h:Qc,handleError:bn,hasInjectionContext:Fp,hydrate:_g,hydrateOnIdle:ru,hydrateOnInteraction:cu,hydrateOnMediaQuery:lu,hydrateOnVisible:au,initCustomFormatter:yh,initDirectivesForSSR:Sg,inject:oi,isMemoSame:Zc,isProxy:Ii,isReactive:vt,isReadonly:gt,isRef:ke,isRuntimeOnly:xh,isShallow:qe,isVNode:$t,markRaw:Hl,mergeDefaults:Du,mergeModels:Ou,mergeProps:Bc,nextTick:wn,nodeOps:nd,normalizeClass:Ni,normalizeProps:Pf,normalizeStyle:Ri,onActivated:lc,onBeforeMount:fc,onBeforeUnmount:tr,onBeforeUpdate:wo,onDeactivated:cc,onErrorCaptured:gc,onMounted:Li,onRenderTracked:hc,onRenderTriggered:uc,onScopeDispose:Sl,onServerPrefetch:pc,onUnmounted:yo,onUpdated:er,onWatcherCleanup:Kl,openBlock:yi,patchProp:cd,popScopeId:Op,provide:Zl,proxyRefs:po,pushScopeId:Dp,queuePostFlushCb:Mt,reactive:qs,readonly:fs,ref:ri,registerRuntimeCompiler:Gc,render:vd,renderList:wu,renderSlot:vu,resolveComponent:mu,resolveDirective:bu,resolveDynamicComponent:xu,resolveFilter:Ah,resolveTransitionHooks:Ln,setBlockTracking:vi,setDevtoolsHook:kh,setTransitionHooks:ut,shallowReactive:$l,shallowReadonly:cp,shallowRef:Bl,ssrContextKey:ec,ssrUtils:Ch,stop:Kf,toDisplayString:yl,toHandlerKey:Pn,toHandlers:_u,toRaw:ie,toRef:bp,toRefs:gp,toValue:pp,transformVNodeArgs:fh,triggerRef:fp,unref:Di,useAttrs:Iu,useCssModule:ig,useCssVars:Vh,useHost:fd,useId:Kp,useModel:Wu,useSSRContext:tc,useShadowRoot:ng,useSlots:Nu,useTemplateRef:Gp,useTransitionState:ho,vModelCheckbox:Io,vModelDynamic:md,vModelRadio:Do,vModelSelect:hd,vModelText:Ps,vShow:ad,version:ed,warn:_h,watch:Nn,watchEffect:zp,watchPostEffect:Vp,watchSyncEffect:nc,withAsyncContext:Lu,withCtx:uo,withDefaults:Ru,withDirectives:Lp,withKeys:vg,withMemo:vh,withModifiers:wg,withScopeId:Mp},Symbol.toStringTag,{value:"Module"}));const Si=Symbol(""),ci=Symbol(""),Oo=Symbol(""),Ns=Symbol(""),kd=Symbol(""),gn=Symbol(""),Ed=Symbol(""),Cd=Symbol(""),Mo=Symbol(""),Lo=Symbol(""),zi=Symbol(""),Fo=Symbol(""),Ad=Symbol(""),zo=Symbol(""),Vo=Symbol(""),$o=Symbol(""),Ho=Symbol(""),Bo=Symbol(""),jo=Symbol(""),Pd=Symbol(""),Rd=Symbol(""),ar=Symbol(""),Is=Symbol(""),Wo=Symbol(""),Uo=Symbol(""),Ti=Symbol(""),Vi=Symbol(""),Ko=Symbol(""),qr=Symbol(""),kg=Symbol(""),Yr=Symbol(""),Ds=Symbol(""),Eg=Symbol(""),Cg=Symbol(""),Go=Symbol(""),Ag=Symbol(""),Pg=Symbol(""),qo=Symbol(""),Nd=Symbol(""),Vn={[Si]:"Fragment",[ci]:"Teleport",[Oo]:"Suspense",[Ns]:"KeepAlive",[kd]:"BaseTransition",[gn]:"openBlock",[Ed]:"createBlock",[Cd]:"createElementBlock",[Mo]:"createVNode",[Lo]:"createElementVNode",[zi]:"createCommentVNode",[Fo]:"createTextVNode",[Ad]:"createStaticVNode",[zo]:"resolveComponent",[Vo]:"resolveDynamicComponent",[$o]:"resolveDirective",[Ho]:"resolveFilter",[Bo]:"withDirectives",[jo]:"renderList",[Pd]:"renderSlot",[Rd]:"createSlots",[ar]:"toDisplayString",[Is]:"mergeProps",[Wo]:"normalizeClass",[Uo]:"normalizeStyle",[Ti]:"normalizeProps",[Vi]:"guardReactiveProps",[Ko]:"toHandlers",[qr]:"camelize",[kg]:"capitalize",[Yr]:"toHandlerKey",[Ds]:"setBlockTracking",[Eg]:"pushScopeId",[Cg]:"popScopeId",[Go]:"withCtx",[Ag]:"unref",[Pg]:"isRef",[qo]:"withMemo",[Nd]:"isMemoSame"};function Rg(e){Object.getOwnPropertySymbols(e).forEach(t=>{Vn[t]=e[t]})}const nt={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function Ng(e,t=""){return{type:0,source:t,children:e,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:[],temps:0,codegenNode:void 0,loc:nt}}function ki(e,t,n,i,s,r,o,a=!1,l=!1,d=!1,c=nt){return e&&(a?(e.helper(gn),e.helper(Bn(e.inSSR,d))):e.helper(Hn(e.inSSR,d)),o&&e.helper(Bo)),{type:13,tag:t,props:n,children:i,patchFlag:s,dynamicProps:r,directives:o,isBlock:a,disableTracking:l,isComponent:d,loc:c}}function fn(e,t=nt){return{type:17,loc:t,elements:e}}function lt(e,t=nt){return{type:15,loc:t,properties:e}}function Te(e,t){return{type:16,loc:nt,key:J(e)?ee(e,!0):e,value:t}}function ee(e,t=!1,n=nt,i=0){return{type:4,loc:n,content:e,isStatic:t,constType:t?3:i}}function ht(e,t=nt){return{type:8,loc:t,children:e}}function Ae(e,t=[],n=nt){return{type:14,loc:n,callee:e,arguments:t}}function $n(e,t=void 0,n=!1,i=!1,s=nt){return{type:18,params:e,returns:t,newline:n,isSlot:i,loc:s}}function Jr(e,t,n,i=!0){return{type:19,test:e,consequent:t,alternate:n,newline:i,loc:nt}}function Ig(e,t,n=!1,i=!1){return{type:20,index:e,value:t,needPauseTracking:n,inVOnce:i,needArraySpread:!1,loc:nt}}function Dg(e){return{type:21,body:e,loc:nt}}function Hn(e,t){return e||t?Mo:Lo}function Bn(e,t){return e||t?Ed:Cd}function Yo(e,{helper:t,removeHelper:n,inSSR:i}){e.isBlock||(e.isBlock=!0,n(Hn(i,e.isComponent)),t(gn),t(Bn(i,e.isComponent)))}const Ja=new Uint8Array([123,123]),Xa=new Uint8Array([125,125]);function Qa(e){return e>=97&&e<=122||e>=65&&e<=90}function Xe(e){return e===32||e===10||e===9||e===12||e===13}function jt(e){return e===47||e===62||Xe(e)}function Os(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}const Oe={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])};class Og{constructor(t,n){this.stack=t,this.cbs=n,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=Ja,this.delimiterClose=Xa,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return this.mode===2&&this.stack.length===0}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=Ja,this.delimiterClose=Xa}getPos(t){let n=1,i=t+1;const s=this.newlines.length;let r=-1;if(s>100){let o=-1,a=s;for(;o+1<a;){const l=o+a>>>1;this.newlines[l]<t?o=l:a=l}r=o}else for(let o=s-1;o>=0;o--)if(t>this.newlines[o]){r=o;break}return r>=0&&(n=r+2,i=t-this.newlines[r]),{column:i,line:n,offset:t}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(t){t===60?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):!this.inVPre&&t===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(t))}stateInterpolationOpen(t){if(t===this.delimiterOpen[this.delimiterIndex])if(this.delimiterIndex===this.delimiterOpen.length-1){const n=this.index+1-this.delimiterOpen.length;n>this.sectionStart&&this.cbs.ontext(this.sectionStart,n),this.state=3,this.sectionStart=n}else this.delimiterIndex++;else this.inRCDATA?(this.state=32,this.stateInRCDATA(t)):(this.state=1,this.stateText(t))}stateInterpolation(t){t===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(t))}stateInterpolationClose(t){t===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(t))}stateSpecialStartSequence(t){const n=this.sequenceIndex===this.currentSequence.length;if(!(n?jt(t):(t|32)===this.currentSequence[this.sequenceIndex]))this.inRCDATA=!1;else if(!n){this.sequenceIndex++;return}this.sequenceIndex=0,this.state=6,this.stateInTagName(t)}stateInRCDATA(t){if(this.sequenceIndex===this.currentSequence.length){if(t===62||Xe(t)){const n=this.index-this.currentSequence.length;if(this.sectionStart<n){const i=this.index;this.index=n,this.cbs.ontext(this.sectionStart,n),this.index=i}this.sectionStart=n+2,this.stateInClosingTagName(t),this.inRCDATA=!1;return}this.sequenceIndex=0}(t|32)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===Oe.TitleEnd||this.currentSequence===Oe.TextareaEnd&&!this.inSFCRoot?!this.inVPre&&t===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(t)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=+(t===60)}stateCDATASequence(t){t===Oe.Cdata[this.sequenceIndex]?++this.sequenceIndex===Oe.Cdata.length&&(this.state=28,this.currentSequence=Oe.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(t))}fastForwardTo(t){for(;++this.index<this.buffer.length;){const n=this.buffer.charCodeAt(this.index);if(n===10&&this.newlines.push(this.index),n===t)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(t){t===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===Oe.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):t!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(t,n){this.enterRCDATA(t,n),this.state=31}enterRCDATA(t,n){this.inRCDATA=!0,this.currentSequence=t,this.sequenceIndex=n}stateBeforeTagName(t){t===33?(this.state=22,this.sectionStart=this.index+1):t===63?(this.state=24,this.sectionStart=this.index+1):Qa(t)?(this.sectionStart=this.index,this.mode===0?this.state=6:this.inSFCRoot?this.state=34:this.inXML?this.state=6:t===116?this.state=30:this.state=t===115?29:6):t===47?this.state=8:(this.state=1,this.stateText(t))}stateInTagName(t){jt(t)&&this.handleTagName(t)}stateInSFCRootTagName(t){if(jt(t)){const n=this.buffer.slice(this.sectionStart,this.index);n!=="template"&&this.enterRCDATA(Os("</"+n),0),this.handleTagName(t)}}handleTagName(t){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(t)}stateBeforeClosingTagName(t){Xe(t)||(t===62?(this.state=1,this.sectionStart=this.index+1):(this.state=Qa(t)?9:27,this.sectionStart=this.index))}stateInClosingTagName(t){(t===62||Xe(t))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(t))}stateAfterClosingTagName(t){t===62&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(t){t===62?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):t===47?this.state=7:t===60&&this.peek()===47?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):Xe(t)||this.handleAttrStart(t)}handleAttrStart(t){t===118&&this.peek()===45?(this.state=13,this.sectionStart=this.index):t===46||t===58||t===64||t===35?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(t){t===62?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):Xe(t)||(this.state=11,this.stateBeforeAttrName(t))}stateInAttrName(t){(t===61||jt(t))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(t))}stateInDirName(t){t===61||jt(t)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===58?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):t===46&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(t){t===61||jt(t)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===91?this.state=15:t===46&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(t){t===93?this.state=14:(t===61||jt(t))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(t))}stateInDirModifier(t){t===61||jt(t)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===46&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(t){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(t)}stateAfterAttrName(t){t===61?this.state=18:t===47||t===62?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(t)):Xe(t)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(t))}stateBeforeAttrValue(t){t===34?(this.state=19,this.sectionStart=this.index+1):t===39?(this.state=20,this.sectionStart=this.index+1):Xe(t)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(t))}handleInAttrValue(t,n){(t===n||this.fastForwardTo(n))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(n===34?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(t){this.handleInAttrValue(t,34)}stateInAttrValueSingleQuotes(t){this.handleInAttrValue(t,39)}stateInAttrValueNoQuotes(t){Xe(t)||t===62?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(t)):(t===39||t===60||t===61||t===96)&&this.cbs.onerr(18,this.index)}stateBeforeDeclaration(t){t===91?(this.state=26,this.sequenceIndex=0):this.state=t===45?25:23}stateInDeclaration(t){(t===62||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(t){(t===62||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(t){t===45?(this.state=28,this.currentSequence=Oe.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(t){(t===62||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(t){t===Oe.ScriptEnd[3]?this.startSpecial(Oe.ScriptEnd,4):t===Oe.StyleEnd[3]?this.startSpecial(Oe.StyleEnd,4):(this.state=6,this.stateInTagName(t))}stateBeforeSpecialT(t){t===Oe.TitleEnd[3]?this.startSpecial(Oe.TitleEnd,4):t===Oe.TextareaEnd[3]?this.startSpecial(Oe.TextareaEnd,4):(this.state=6,this.stateInTagName(t))}startEntity(){}stateInEntity(){}parse(t){for(this.buffer=t;this.index<this.buffer.length;){const n=this.buffer.charCodeAt(this.index);switch(n===10&&this.state!==33&&this.newlines.push(this.index),this.state){case 1:{this.stateText(n);break}case 2:{this.stateInterpolationOpen(n);break}case 3:{this.stateInterpolation(n);break}case 4:{this.stateInterpolationClose(n);break}case 31:{this.stateSpecialStartSequence(n);break}case 32:{this.stateInRCDATA(n);break}case 26:{this.stateCDATASequence(n);break}case 19:{this.stateInAttrValueDoubleQuotes(n);break}case 12:{this.stateInAttrName(n);break}case 13:{this.stateInDirName(n);break}case 14:{this.stateInDirArg(n);break}case 15:{this.stateInDynamicDirArg(n);break}case 16:{this.stateInDirModifier(n);break}case 28:{this.stateInCommentLike(n);break}case 27:{this.stateInSpecialComment(n);break}case 11:{this.stateBeforeAttrName(n);break}case 6:{this.stateInTagName(n);break}case 34:{this.stateInSFCRootTagName(n);break}case 9:{this.stateInClosingTagName(n);break}case 5:{this.stateBeforeTagName(n);break}case 17:{this.stateAfterAttrName(n);break}case 20:{this.stateInAttrValueSingleQuotes(n);break}case 18:{this.stateBeforeAttrValue(n);break}case 8:{this.stateBeforeClosingTagName(n);break}case 10:{this.stateAfterClosingTagName(n);break}case 29:{this.stateBeforeSpecialS(n);break}case 30:{this.stateBeforeSpecialT(n);break}case 21:{this.stateInAttrValueNoQuotes(n);break}case 7:{this.stateInSelfClosingTag(n);break}case 23:{this.stateInDeclaration(n);break}case 22:{this.stateBeforeDeclaration(n);break}case 25:{this.stateBeforeComment(n);break}case 24:{this.stateInProcessingInstruction(n);break}case 33:{this.stateInEntity();break}}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(this.state===1||this.state===32&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===19||this.state===20||this.state===21)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){const t=this.buffer.length;this.sectionStart>=t||(this.state===28?this.currentSequence===Oe.CdataEnd?this.cbs.oncdata(this.sectionStart,t):this.cbs.oncomment(this.sectionStart,t):this.state===6||this.state===11||this.state===18||this.state===17||this.state===12||this.state===13||this.state===14||this.state===15||this.state===16||this.state===20||this.state===19||this.state===21||this.state===9||this.cbs.ontext(this.sectionStart,t))}emitCodePoint(t,n){}}function Za(e,{compatConfig:t}){const n=t&&t[e];return e==="MODE"?n||3:n}function pn(e,t){const n=Za("MODE",t),i=Za(e,t);return n===3?i===!0:i!==!1}function Ei(e,t,n,...i){return pn(e,t)}function Jo(e){throw e}function Id(e){}function he(e,t,n,i){const s=`https://vuejs.org/error-reference/#compiler-${e}`,r=new SyntaxError(String(s));return r.code=e,r.loc=t,r}const Be=e=>e.type===4&&e.isStatic;function Dd(e){switch(e){case"Teleport":case"teleport":return ci;case"Suspense":case"suspense":return Oo;case"KeepAlive":case"keep-alive":return Ns;case"BaseTransition":case"base-transition":return kd}}const Mg=/^$|^\d|[^\$\w\xA0-\uFFFF]/,Xo=e=>!Mg.test(e),Od=/[A-Za-z_$\xA0-\uFFFF]/,Lg=/[\.\?\w$\xA0-\uFFFF]/,Fg=/\s+[.[]\s*|\s*[.[]\s+/g,Md=e=>e.type===4?e.content:e.loc.source,zg=e=>{const t=Md(e).trim().replace(Fg,a=>a.trim());let n=0,i=[],s=0,r=0,o=null;for(let a=0;a<t.length;a++){const l=t.charAt(a);switch(n){case 0:if(l==="[")i.push(n),n=1,s++;else if(l==="(")i.push(n),n=2,r++;else if(!(a===0?Od:Lg).test(l))return!1;break;case 1:l==="'"||l==='"'||l==="`"?(i.push(n),n=3,o=l):l==="["?s++:l==="]"&&(--s||(n=i.pop()));break;case 2:if(l==="'"||l==='"'||l==="`")i.push(n),n=3,o=l;else if(l==="(")r++;else if(l===")"){if(a===t.length-1)return!1;--r||(n=i.pop())}break;case 3:l===o&&(n=i.pop(),o=null);break}}return!s&&!r},Ld=zg,Vg=/^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/,$g=e=>Vg.test(Md(e)),Hg=$g;function ot(e,t,n=!1){for(let i=0;i<e.props.length;i++){const s=e.props[i];if(s.type===7&&(n||s.exp)&&(J(t)?s.name===t:t.test(s.name)))return s}}function lr(e,t,n=!1,i=!1){for(let s=0;s<e.props.length;s++){const r=e.props[s];if(r.type===6){if(n)continue;if(r.name===t&&(r.value||i))return r}else if(r.name==="bind"&&(r.exp||i)&&Mn(r.arg,t))return r}}function Mn(e,t){return!!(e&&Be(e)&&e.content===t)}function Bg(e){return e.props.some(t=>t.type===7&&t.name==="bind"&&(!t.arg||t.arg.type!==4||!t.arg.isStatic))}function kr(e){return e.type===5||e.type===2}function el(e){return e.type===7&&e.name==="pre"}function jg(e){return e.type===7&&e.name==="slot"}function Ms(e){return e.type===1&&e.tagType===3}function Ls(e){return e.type===1&&e.tagType===2}const Wg=new Set([Ti,Vi]);function Qo(e,t=[]){if(e&&!J(e)&&e.type===14){const n=e.callee;if(!J(n)&&Wg.has(n))return Qo(e.arguments[0],t.concat(e))}return[e,t]}function Fs(e,t,n){if(e.type!==13&&Ug(e,t))return;let i,s=e.type===13?e.props:e.arguments[2],r=[],o;if(s&&!J(s)&&s.type===14){const a=Qo(s);s=a[0],r=a[1],o=r[r.length-1]}if(s==null||J(s))i=lt([t]);else if(s.type===14){const a=s.arguments[0];!J(a)&&a.type===15?Xr(t,a)||a.properties.unshift(t):s.callee===Ko?i=Ae(n.helper(Is),[lt([t]),s]):s.arguments.unshift(lt([t])),!i&&(i=s)}else s.type===15?(Xr(t,s)||s.properties.unshift(t),i=s):(i=Ae(n.helper(Is),[lt([t]),s]),o&&o.callee===Vi&&(o=r[r.length-2]));e.type===13?o?o.arguments[0]=i:e.props=i:o?o.arguments[0]=i:e.arguments[2]=i}function Ug(e,t){var n,i,s;if(t.key.type!==4||t.key.content!=="key")return!1;const r=e.arguments[2];if(r&&!J(r)){const[o]=Qo(r);if(o&&!J(o)&&o.type===15&&Xr(t,o))return!0}return(n=e.arguments)[2]||(n[2]="{}"),(i=e.arguments)[3]||(i[3]="undefined"),(s=e.arguments)[4]||(s[4]="undefined"),e.arguments[5]=t.value,!0}function Xr(e,t){let n=!1;if(e.key.type===4){const i=e.key.content;n=t.properties.some(s=>s.key.type===4&&s.key.content===i)}return n}function Ci(e,t){return`_${t}_${e.replace(/[^\w]/g,(n,i)=>n==="-"?"_":e.charCodeAt(i).toString())}`}function Kg(e){return e.type===14&&e.callee===qo?e.arguments[1].returns:e}const Gg=/([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;function Fd(e){for(let t=0;t<e.length;t++)if(!Xe(e.charCodeAt(t)))return!1;return!0}function Zo(e){return e.type===2&&Fd(e.content)||e.type===12&&Zo(e.content)}function ea(e){return e.type===3||Zo(e)}const zd={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:Cn,isPreTag:Cn,isIgnoreNewlineTag:Cn,isCustomElement:Cn,onError:Jo,onWarn:Id,comments:!1,prefixIdentifiers:!1};let oe=zd,Ai=null,Vt="",Me=null,ne=null,We="",Pt=-1,rn=-1,ta=0,qt=!1,Qr=null;const ue=[],be=new Og(ue,{onerr:At,ontext(e,t){es(Re(e,t),e,t)},ontextentity(e,t,n){es(e,t,n)},oninterpolation(e,t){if(qt)return es(Re(e,t),e,t);let n=e+be.delimiterOpen.length,i=t-be.delimiterClose.length;for(;Xe(Vt.charCodeAt(n));)n++;for(;Xe(Vt.charCodeAt(i-1));)i--;let s=Re(n,i);s.includes("&")&&(s=oe.decodeEntities(s,!1)),Zr({type:5,content:os(s,!1,_e(n,i)),loc:_e(e,t)})},onopentagname(e,t){const n=Re(e,t);Me={type:1,tag:n,ns:oe.getNamespace(n,ue[0],oe.ns),tagType:0,props:[],children:[],loc:_e(e-1,t),codegenNode:void 0}},onopentagend(e){nl(e)},onclosetag(e,t){const n=Re(e,t);if(!oe.isVoidTag(n)){let i=!1;for(let s=0;s<ue.length;s++)if(ue[s].tag.toLowerCase()===n.toLowerCase()){i=!0,s>0&&At(24,ue[0].loc.start.offset);for(let o=0;o<=s;o++){const a=ue.shift();rs(a,t,o<s)}break}i||At(23,Vd(e,60))}},onselfclosingtag(e){const t=Me.tag;Me.isSelfClosing=!0,nl(e),ue[0]&&ue[0].tag===t&&rs(ue.shift(),e)},onattribname(e,t){ne={type:6,name:Re(e,t),nameLoc:_e(e,t),value:void 0,loc:_e(e)}},ondirname(e,t){const n=Re(e,t),i=n==="."||n===":"?"bind":n==="@"?"on":n==="#"?"slot":n.slice(2);if(!qt&&i===""&&At(26,e),qt||i==="")ne={type:6,name:n,nameLoc:_e(e,t),value:void 0,loc:_e(e)};else if(ne={type:7,name:i,rawName:n,exp:void 0,arg:void 0,modifiers:n==="."?[ee("prop")]:[],loc:_e(e)},i==="pre"){qt=be.inVPre=!0,Qr=Me;const s=Me.props;for(let r=0;r<s.length;r++)s[r].type===7&&(s[r]=im(s[r]))}},ondirarg(e,t){if(e===t)return;const n=Re(e,t);if(qt&&!el(ne))ne.name+=n,ln(ne.nameLoc,t);else{const i=n[0]!=="[";ne.arg=os(i?n:n.slice(1,-1),i,_e(e,t),i?3:0)}},ondirmodifier(e,t){const n=Re(e,t);if(qt&&!el(ne))ne.name+="."+n,ln(ne.nameLoc,t);else if(ne.name==="slot"){const i=ne.arg;i&&(i.content+="."+n,ln(i.loc,t))}else{const i=ee(n,!0,_e(e,t));ne.modifiers.push(i)}},onattribdata(e,t){We+=Re(e,t),Pt<0&&(Pt=e),rn=t},onattribentity(e,t,n){We+=e,Pt<0&&(Pt=t),rn=n},onattribnameend(e){const t=ne.loc.start.offset,n=Re(t,e);ne.type===7&&(ne.rawName=n),Me.props.some(i=>(i.type===7?i.rawName:i.name)===n)&&At(2,t)},onattribend(e,t){if(Me&&ne){if(ln(ne.loc,t),e!==0)if(We.includes("&")&&(We=oe.decodeEntities(We,!0)),ne.type===6)ne.name==="class"&&(We=Hd(We).trim()),e===1&&!We&&At(13,t),ne.value={type:2,content:We,loc:e===1?_e(Pt,rn):_e(Pt-1,rn+1)},be.inSFCRoot&&Me.tag==="template"&&ne.name==="lang"&&We&&We!=="html"&&be.enterRCDATA(Os("</template"),0);else{let n=0;ne.exp=os(We,!1,_e(Pt,rn),0,n),ne.name==="for"&&(ne.forParseResult=Yg(ne.exp));let i=-1;ne.name==="bind"&&(i=ne.modifiers.findIndex(s=>s.content==="sync"))>-1&&Ei("COMPILER_V_BIND_SYNC",oe,ne.loc,ne.arg.loc.source)&&(ne.name="model",ne.modifiers.splice(i,1))}(ne.type!==7||ne.name!=="pre")&&Me.props.push(ne)}We="",Pt=rn=-1},oncomment(e,t){oe.comments&&Zr({type:3,content:Re(e,t),loc:_e(e-4,t+3)})},onend(){const e=Vt.length;for(let t=0;t<ue.length;t++)rs(ue[t],e-1),At(24,ue[t].loc.start.offset)},oncdata(e,t){(ue[0]?ue[0].ns:oe.ns)!==0?es(Re(e,t),e,t):At(1,e-9)},onprocessinginstruction(e){(ue[0]?ue[0].ns:oe.ns)===0&&At(21,e-1)}}),tl=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,qg=/^\(|\)$/g;function Yg(e){const t=e.loc,n=e.content,i=n.match(Gg);if(!i)return;const[,s,r]=i,o=(f,u,g=!1)=>{const y=t.start.offset+u,b=y+f.length;return os(f,!1,_e(y,b),0,g?1:0)},a={source:o(r.trim(),n.indexOf(r,s.length)),value:void 0,key:void 0,index:void 0,finalized:!1};let l=s.trim().replace(qg,"").trim();const d=s.indexOf(l),c=l.match(tl);if(c){l=l.replace(tl,"").trim();const f=c[1].trim();let u;if(f&&(u=n.indexOf(f,d+l.length),a.key=o(f,u,!0)),c[2]){const g=c[2].trim();g&&(a.index=o(g,n.indexOf(g,a.key?u+f.length:d+l.length),!0))}}return l&&(a.value=o(l,d,!0)),a}function Re(e,t){return Vt.slice(e,t)}function nl(e){be.inSFCRoot&&(Me.innerLoc=_e(e+1,e+1)),Zr(Me);const{tag:t,ns:n}=Me;n===0&&oe.isPreTag(t)&&ta++,oe.isVoidTag(t)?rs(Me,e):(ue.unshift(Me),(n===1||n===2)&&(be.inXML=!0)),Me=null}function es(e,t,n){{const r=ue[0]&&ue[0].tag;r!=="script"&&r!=="style"&&e.includes("&")&&(e=oe.decodeEntities(e,!1))}const i=ue[0]||Ai,s=i.children[i.children.length-1];s&&s.type===2?(s.content+=e,ln(s.loc,n)):i.children.push({type:2,content:e,loc:_e(t,n)})}function rs(e,t,n=!1){n?ln(e.loc,Vd(t,60)):ln(e.loc,Jg(t,62)+1),be.inSFCRoot&&(e.children.length?e.innerLoc.end=Q({},e.children[e.children.length-1].loc.end):e.innerLoc.end=Q({},e.innerLoc.start),e.innerLoc.source=Re(e.innerLoc.start.offset,e.innerLoc.end.offset));const{tag:i,ns:s,children:r}=e;if(qt||(i==="slot"?e.tagType=2:il(e)?e.tagType=3:Qg(e)&&(e.tagType=1)),be.inRCDATA||(e.children=$d(r)),s===0&&oe.isIgnoreNewlineTag(i)){const o=r[0];o&&o.type===2&&(o.content=o.content.replace(/^\r?\n/,""))}s===0&&oe.isPreTag(i)&&ta--,Qr===e&&(qt=be.inVPre=!1,Qr=null),be.inXML&&(ue[0]?ue[0].ns:oe.ns)===0&&(be.inXML=!1);{const o=e.props;if(!be.inSFCRoot&&pn("COMPILER_NATIVE_TEMPLATE",oe)&&e.tag==="template"&&!il(e)){const l=ue[0]||Ai,d=l.children.indexOf(e);l.children.splice(d,1,...e.children)}const a=o.find(l=>l.type===6&&l.name==="inline-template");a&&Ei("COMPILER_INLINE_TEMPLATE",oe,a.loc)&&e.children.length&&(a.value={type:2,content:Re(e.children[0].loc.start.offset,e.children[e.children.length-1].loc.end.offset),loc:a.loc})}}function Jg(e,t){let n=e;for(;Vt.charCodeAt(n)!==t&&n<Vt.length-1;)n++;return n}function Vd(e,t){let n=e;for(;Vt.charCodeAt(n)!==t&&n>=0;)n--;return n}const Xg=new Set(["if","else","else-if","for","slot"]);function il({tag:e,props:t}){if(e==="template"){for(let n=0;n<t.length;n++)if(t[n].type===7&&Xg.has(t[n].name))return!0}return!1}function Qg({tag:e,props:t}){if(oe.isCustomElement(e))return!1;if(e==="component"||Zg(e.charCodeAt(0))||Dd(e)||oe.isBuiltInComponent&&oe.isBuiltInComponent(e)||oe.isNativeTag&&!oe.isNativeTag(e))return!0;for(let n=0;n<t.length;n++){const i=t[n];if(i.type===6){if(i.name==="is"&&i.value){if(i.value.content.startsWith("vue:"))return!0;if(Ei("COMPILER_IS_ON_ELEMENT",oe,i.loc))return!0}}else if(i.name==="bind"&&Mn(i.arg,"is")&&Ei("COMPILER_IS_ON_ELEMENT",oe,i.loc))return!0}return!1}function Zg(e){return e>64&&e<91}const em=/\r\n/g;function $d(e){const t=oe.whitespace!=="preserve";let n=!1;for(let i=0;i<e.length;i++){const s=e[i];if(s.type===2)if(ta)s.content=s.content.replace(em,`
`);else if(Fd(s.content)){const r=e[i-1]&&e[i-1].type,o=e[i+1]&&e[i+1].type;!r||!o||t&&(r===3&&(o===3||o===1)||r===1&&(o===3||o===1&&tm(s.content)))?(n=!0,e[i]=null):s.content=" "}else t&&(s.content=Hd(s.content))}return n?e.filter(Boolean):e}function tm(e){for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(n===10||n===13)return!0}return!1}function Hd(e){let t="",n=!1;for(let i=0;i<e.length;i++)Xe(e.charCodeAt(i))?n||(t+=" ",n=!0):(t+=e[i],n=!1);return t}function Zr(e){(ue[0]||Ai).children.push(e)}function _e(e,t){return{start:be.getPos(e),end:t==null?t:be.getPos(t),source:t==null?t:Re(e,t)}}function nm(e){return{start:Q({},e.start),end:Q({},e.end),source:e.source}}function ln(e,t){e.end=be.getPos(t),e.source=Re(e.start.offset,t)}function im(e){const t={type:6,name:e.rawName,nameLoc:_e(e.loc.start.offset,e.loc.start.offset+e.rawName.length),value:void 0,loc:e.loc};if(e.exp){const n=e.exp.loc;n.end.offset<e.loc.end.offset&&(n.start.offset--,n.start.column--,n.end.offset++,n.end.column++),t.value={type:2,content:e.exp.content,loc:n}}return t}function os(e,t=!1,n,i=0,s=0){return ee(e,t,n,i)}function At(e,t,n){oe.onError(he(e,_e(t,t)))}function sm(){be.reset(),Me=null,ne=null,We="",Pt=-1,rn=-1,ue.length=0}function rm(e,t){if(sm(),Vt=e,oe=Q({},zd),t){let s;for(s in t)t[s]!=null&&(oe[s]=t[s])}be.mode=oe.parseMode==="html"?1:oe.parseMode==="sfc"?2:0,be.inXML=oe.ns===1||oe.ns===2;const n=t&&t.delimiters;n&&(be.delimiterOpen=Os(n[0]),be.delimiterClose=Os(n[1]));const i=Ai=Ng([],e);return be.parse(Vt),i.loc=_e(0,e.length),i.children=$d(i.children),Ai=null,i}function om(e,t){as(e,void 0,t,!!Bd(e))}function Bd(e){const t=e.children.filter(n=>n.type!==3);return t.length===1&&t[0].type===1&&!Ls(t[0])?t[0]:null}function as(e,t,n,i=!1,s=!1){const{children:r}=e,o=[];for(let c=0;c<r.length;c++){const f=r[c];if(f.type===1&&f.tagType===0){const u=i?0:Ze(f,n);if(u>0){if(u>=2){f.codegenNode.patchFlag=-1,o.push(f);continue}}else{const g=f.codegenNode;if(g.type===13){const y=g.patchFlag;if((y===void 0||y===512||y===1)&&Wd(f,n)>=2){const b=Ud(f);b&&(g.props=n.hoist(b))}g.dynamicProps&&(g.dynamicProps=n.hoist(g.dynamicProps))}}}else if(f.type===12&&(i?0:Ze(f,n))>=2){f.codegenNode.type===14&&f.codegenNode.arguments.length>0&&f.codegenNode.arguments.push("-1"),o.push(f);continue}if(f.type===1){const u=f.tagType===1;u&&n.scopes.vSlot++,as(f,e,n,!1,s),u&&n.scopes.vSlot--}else if(f.type===11)as(f,e,n,f.children.length===1,!0);else if(f.type===9)for(let u=0;u<f.branches.length;u++)as(f.branches[u],e,n,f.branches[u].children.length===1,s)}let a=!1;if(o.length===r.length&&e.type===1){if(e.tagType===0&&e.codegenNode&&e.codegenNode.type===13&&H(e.codegenNode.children))e.codegenNode.children=l(fn(e.codegenNode.children)),a=!0;else if(e.tagType===1&&e.codegenNode&&e.codegenNode.type===13&&e.codegenNode.children&&!H(e.codegenNode.children)&&e.codegenNode.children.type===15){const c=d(e.codegenNode,"default");c&&(c.returns=l(fn(c.returns)),a=!0)}else if(e.tagType===3&&t&&t.type===1&&t.tagType===1&&t.codegenNode&&t.codegenNode.type===13&&t.codegenNode.children&&!H(t.codegenNode.children)&&t.codegenNode.children.type===15){const c=ot(e,"slot",!0),f=c&&c.arg&&d(t.codegenNode,c.arg);f&&(f.returns=l(fn(f.returns)),a=!0)}}if(!a)for(const c of o)c.codegenNode=n.cache(c.codegenNode);function l(c){const f=n.cache(c);return f.needArraySpread=!0,f}function d(c,f){if(c.children&&!H(c.children)&&c.children.type===15){const u=c.children.properties.find(g=>g.key===f||g.key.content===f);return u&&u.value}}o.length&&n.transformHoist&&n.transformHoist(r,n,e)}function Ze(e,t){const{constantCache:n}=t;switch(e.type){case 1:if(e.tagType!==0)return 0;const i=n.get(e);if(i!==void 0)return i;const s=e.codegenNode;if(s.type!==13||s.isBlock&&e.tag!=="svg"&&e.tag!=="foreignObject"&&e.tag!=="math")return 0;if(s.patchFlag===void 0){let o=3;const a=Wd(e,t);if(a===0)return n.set(e,0),0;a<o&&(o=a);for(let l=0;l<e.children.length;l++){const d=Ze(e.children[l],t);if(d===0)return n.set(e,0),0;d<o&&(o=d)}if(o>1)for(let l=0;l<e.props.length;l++){const d=e.props[l];if(d.type===7&&d.name==="bind"&&d.exp){const c=Ze(d.exp,t);if(c===0)return n.set(e,0),0;c<o&&(o=c)}}if(s.isBlock){for(let l=0;l<e.props.length;l++)if(e.props[l].type===7)return n.set(e,0),0;t.removeHelper(gn),t.removeHelper(Bn(t.inSSR,s.isComponent)),s.isBlock=!1,t.helper(Hn(t.inSSR,s.isComponent))}return n.set(e,o),o}else return n.set(e,0),0;case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return Ze(e.content,t);case 4:return e.constType;case 8:let r=3;for(let o=0;o<e.children.length;o++){const a=e.children[o];if(J(a)||Ve(a))continue;const l=Ze(a,t);if(l===0)return 0;l<r&&(r=l)}return r;case 20:return 2;default:return 0}}const am=new Set([Wo,Uo,Ti,Vi]);function jd(e,t){if(e.type===14&&!J(e.callee)&&am.has(e.callee)){const n=e.arguments[0];if(n.type===4)return Ze(n,t);if(n.type===14)return jd(n,t)}return 0}function Wd(e,t){let n=3;const i=Ud(e);if(i&&i.type===15){const{properties:s}=i;for(let r=0;r<s.length;r++){const{key:o,value:a}=s[r],l=Ze(o,t);if(l===0)return l;l<n&&(n=l);let d;if(a.type===4?d=Ze(a,t):a.type===14?d=jd(a,t):d=0,d===0)return d;d<n&&(n=d)}}return n}function Ud(e){const t=e.codegenNode;if(t.type===13)return t.props}function lm(e,{filename:t="",prefixIdentifiers:n=!1,hoistStatic:i=!1,hmr:s=!1,cacheHandlers:r=!1,nodeTransforms:o=[],directiveTransforms:a={},transformHoist:l=null,isBuiltInComponent:d=De,isCustomElement:c=De,expressionPlugins:f=[],scopeId:u=null,slotted:g=!0,ssr:y=!1,inSSR:b=!1,ssrCssVars:N="",bindingMetadata:I=te,inline:v=!1,isTS:h=!1,onError:m=Jo,onWarn:w=Id,compatConfig:O}){const P=t.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),_={filename:t,selfName:P&&xn(ce(P[1])),prefixIdentifiers:n,hoistStatic:i,hmr:s,cacheHandlers:r,nodeTransforms:o,directiveTransforms:a,transformHoist:l,isBuiltInComponent:d,isCustomElement:c,expressionPlugins:f,scopeId:u,slotted:g,ssr:y,inSSR:b,ssrCssVars:N,bindingMetadata:I,inline:v,isTS:h,onError:m,onWarn:w,compatConfig:O,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],cached:[],constantCache:new WeakMap,vForMemoKeyedNodes:new WeakSet,temps:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,grandParent:null,currentNode:e,childIndex:0,inVOnce:!1,helper(T){const C=_.helpers.get(T)||0;return _.helpers.set(T,C+1),T},removeHelper(T){const C=_.helpers.get(T);if(C){const M=C-1;M?_.helpers.set(T,M):_.helpers.delete(T)}},helperString(T){return`_${Vn[_.helper(T)]}`},replaceNode(T){_.parent.children[_.childIndex]=_.currentNode=T},removeNode(T){const C=_.parent.children,M=T?C.indexOf(T):_.currentNode?_.childIndex:-1;!T||T===_.currentNode?(_.currentNode=null,_.onNodeRemoved()):_.childIndex>M&&(_.childIndex--,_.onNodeRemoved()),_.parent.children.splice(M,1)},onNodeRemoved:De,addIdentifiers(T){},removeIdentifiers(T){},hoist(T){J(T)&&(T=ee(T)),_.hoists.push(T);const C=ee(`_hoisted_${_.hoists.length}`,!1,T.loc,2);return C.hoisted=T,C},cache(T,C=!1,M=!1){const k=Ig(_.cached.length,T,C,M);return _.cached.push(k),k}};return _.filters=new Set,_}function cm(e,t){const n=lm(e,t);cr(e,n),t.hoistStatic&&om(e,n),t.ssr||dm(e,n),e.helpers=new Set([...n.helpers.keys()]),e.components=[...n.components],e.directives=[...n.directives],e.imports=n.imports,e.hoists=n.hoists,e.temps=n.temps,e.cached=n.cached,e.transformed=!0,e.filters=[...n.filters]}function dm(e,t){const{helper:n}=t,{children:i}=e;if(i.length===1){const s=Bd(e);if(s&&s.codegenNode){const r=s.codegenNode;r.type===13&&Yo(r,t),e.codegenNode=r}else e.codegenNode=i[0]}else if(i.length>1){let s=64;e.codegenNode=ki(t,n(Si),void 0,e.children,s,void 0,void 0,!0,void 0,!1)}}function fm(e,t){let n=0;const i=()=>{n--};for(;n<e.children.length;n++){const s=e.children[n];J(s)||(t.grandParent=t.parent,t.parent=e,t.childIndex=n,t.onNodeRemoved=i,cr(s,t))}}function cr(e,t){t.currentNode=e;const{nodeTransforms:n}=t,i=[];for(let r=0;r<n.length;r++){const o=n[r](e,t);if(o&&(H(o)?i.push(...o):i.push(o)),t.currentNode)e=t.currentNode;else return}switch(e.type){case 3:t.ssr||t.helper(zi);break;case 5:t.ssr||t.helper(ar);break;case 9:for(let r=0;r<e.branches.length;r++)cr(e.branches[r],t);break;case 10:case 11:case 1:case 0:fm(e,t);break}t.currentNode=e;let s=i.length;for(;s--;)i[s]()}function Kd(e,t){const n=J(e)?i=>i===e:i=>e.test(i);return(i,s)=>{if(i.type===1){const{props:r}=i;if(i.tagType===3&&r.some(jg))return;const o=[];for(let a=0;a<r.length;a++){const l=r[a];if(l.type===7&&n(l.name)){r.splice(a,1),a--;const d=t(i,l,s);d&&o.push(d)}}return o}}}const dr="/*@__PURE__*/",Gd=e=>`${Vn[e]}: _${Vn[e]}`;function pm(e,{mode:t="function",prefixIdentifiers:n=t==="module",sourceMap:i=!1,filename:s="template.vue.html",scopeId:r=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:l="vue",ssrRuntimeModuleName:d="vue/server-renderer",ssr:c=!1,isTS:f=!1,inSSR:u=!1}){const g={mode:t,prefixIdentifiers:n,sourceMap:i,filename:s,scopeId:r,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:l,ssrRuntimeModuleName:d,ssr:c,isTS:f,inSSR:u,source:e.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(b){return`_${Vn[b]}`},push(b,N=-2,I){g.code+=b},indent(){y(++g.indentLevel)},deindent(b=!1){b?--g.indentLevel:y(--g.indentLevel)},newline(){y(g.indentLevel)}};function y(b){g.push(`
`+"  ".repeat(b),0)}return g}function um(e,t={}){const n=pm(e,t);t.onContextCreated&&t.onContextCreated(n);const{mode:i,push:s,prefixIdentifiers:r,indent:o,deindent:a,newline:l,scopeId:d,ssr:c}=n,f=Array.from(e.helpers),u=f.length>0,g=!r&&i!=="module";hm(e,n);const b=c?"ssrRender":"render",I=(c?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(s(`function ${b}(${I}) {`),o(),g&&(s("with (_ctx) {"),o(),u&&(s(`const { ${f.map(Gd).join(", ")} } = _Vue
`,-1),l())),e.components.length&&(Er(e.components,"component",n),(e.directives.length||e.temps>0)&&l()),e.directives.length&&(Er(e.directives,"directive",n),e.temps>0&&l()),e.filters&&e.filters.length&&(l(),Er(e.filters,"filter",n),l()),e.temps>0){s("let ");for(let v=0;v<e.temps;v++)s(`${v>0?", ":""}_temp${v}`)}return(e.components.length||e.directives.length||e.temps)&&(s(`
`,0),l()),c||s("return "),e.codegenNode?ze(e.codegenNode,n):s("null"),g&&(a(),s("}")),a(),s("}"),{ast:e,code:n.code,preamble:"",map:n.map?n.map.toJSON():void 0}}function hm(e,t){const{ssr:n,prefixIdentifiers:i,push:s,newline:r,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:l}=t,d=a,c=Array.from(e.helpers);if(c.length>0&&(s(`const _Vue = ${d}
`,-1),e.hoists.length)){const f=[Mo,Lo,zi,Fo,Ad].filter(u=>c.includes(u)).map(Gd).join(", ");s(`const { ${f} } = _Vue
`,-1)}gm(e.hoists,t),r(),s("return ")}function Er(e,t,{helper:n,push:i,newline:s,isTS:r}){const o=n(t==="filter"?Ho:t==="component"?zo:$o);for(let a=0;a<e.length;a++){let l=e[a];const d=l.endsWith("__self");d&&(l=l.slice(0,-6)),i(`const ${Ci(l,t)} = ${o}(${JSON.stringify(l)}${d?", true":""})${r?"!":""}`),a<e.length-1&&s()}}function gm(e,t){if(!e.length)return;t.pure=!0;const{push:n,newline:i}=t;i();for(let s=0;s<e.length;s++){const r=e[s];r&&(n(`const _hoisted_${s+1} = `),ze(r,t),i())}t.pure=!1}function na(e,t){const n=e.length>3||!1;t.push("["),n&&t.indent(),$i(e,t,n),n&&t.deindent(),t.push("]")}function $i(e,t,n=!1,i=!0){const{push:s,newline:r}=t;for(let o=0;o<e.length;o++){const a=e[o];J(a)?s(a,-3):H(a)?na(a,t):ze(a,t),o<e.length-1&&(n?(i&&s(","),r()):i&&s(", "))}}function ze(e,t){if(J(e)){t.push(e,-3);return}if(Ve(e)){t.push(t.helper(e));return}switch(e.type){case 1:case 9:case 11:ze(e.codegenNode,t);break;case 2:mm(e,t);break;case 4:qd(e,t);break;case 5:xm(e,t);break;case 12:ze(e.codegenNode,t);break;case 8:Yd(e,t);break;case 3:wm(e,t);break;case 13:ym(e,t);break;case 14:_m(e,t);break;case 15:Sm(e,t);break;case 17:Tm(e,t);break;case 18:km(e,t);break;case 19:Em(e,t);break;case 20:Cm(e,t);break;case 21:$i(e.body,t,!0,!1);break}}function mm(e,t){t.push(JSON.stringify(e.content),-3,e)}function qd(e,t){const{content:n,isStatic:i}=e;t.push(i?JSON.stringify(n):n,-3,e)}function xm(e,t){const{push:n,helper:i,pure:s}=t;s&&n(dr),n(`${i(ar)}(`),ze(e.content,t),n(")")}function Yd(e,t){for(let n=0;n<e.children.length;n++){const i=e.children[n];J(i)?t.push(i,-3):ze(i,t)}}function bm(e,t){const{push:n}=t;if(e.type===8)n("["),Yd(e,t),n("]");else if(e.isStatic){const i=Xo(e.content)?e.content:JSON.stringify(e.content);n(i,-2,e)}else n(`[${e.content}]`,-3,e)}function wm(e,t){const{push:n,helper:i,pure:s}=t;s&&n(dr),n(`${i(zi)}(${JSON.stringify(e.content)})`,-3,e)}function ym(e,t){const{push:n,helper:i,pure:s}=t,{tag:r,props:o,children:a,patchFlag:l,dynamicProps:d,directives:c,isBlock:f,disableTracking:u,isComponent:g}=e;let y;l&&(y=String(l)),c&&n(i(Bo)+"("),f&&n(`(${i(gn)}(${u?"true":""}), `),s&&n(dr);const b=f?Bn(t.inSSR,g):Hn(t.inSSR,g);n(i(b)+"(",-2,e),$i(vm([r,o,a,y,d]),t),n(")"),f&&n(")"),c&&(n(", "),ze(c,t),n(")"))}function vm(e){let t=e.length;for(;t--&&e[t]==null;);return e.slice(0,t+1).map(n=>n||"null")}function _m(e,t){const{push:n,helper:i,pure:s}=t,r=J(e.callee)?e.callee:i(e.callee);s&&n(dr),n(r+"(",-2,e),$i(e.arguments,t),n(")")}function Sm(e,t){const{push:n,indent:i,deindent:s,newline:r}=t,{properties:o}=e;if(!o.length){n("{}",-2,e);return}const a=o.length>1||!1;n(a?"{":"{ "),a&&i();for(let l=0;l<o.length;l++){const{key:d,value:c}=o[l];bm(d,t),n(": "),ze(c,t),l<o.length-1&&(n(","),r())}a&&s(),n(a?"}":" }")}function Tm(e,t){na(e.elements,t)}function km(e,t){const{push:n,indent:i,deindent:s}=t,{params:r,returns:o,body:a,newline:l,isSlot:d}=e;d&&n(`_${Vn[Go]}(`),n("(",-2,e),H(r)?$i(r,t):r&&ze(r,t),n(") => "),(l||a)&&(n("{"),i()),o?(l&&n("return "),H(o)?na(o,t):ze(o,t)):a&&ze(a,t),(l||a)&&(s(),n("}")),d&&(e.isNonScopedSlot&&n(", undefined, true"),n(")"))}function Em(e,t){const{test:n,consequent:i,alternate:s,newline:r}=e,{push:o,indent:a,deindent:l,newline:d}=t;if(n.type===4){const f=!Xo(n.content);f&&o("("),qd(n,t),f&&o(")")}else o("("),ze(n,t),o(")");r&&a(),t.indentLevel++,r||o(" "),o("? "),ze(i,t),t.indentLevel--,r&&d(),r||o(" "),o(": ");const c=s.type===19;c||t.indentLevel++,ze(s,t),c||t.indentLevel--,r&&l(!0)}function Cm(e,t){const{push:n,helper:i,indent:s,deindent:r,newline:o}=t,{needPauseTracking:a,needArraySpread:l}=e;l&&n("[...("),n(`_cache[${e.index}] || (`),a&&(s(),n(`${i(Ds)}(-1`),e.inVOnce&&n(", true"),n("),"),o(),n("(")),n(`_cache[${e.index}] = `),ze(e.value,t),a&&(n(`).cacheIndex = ${e.index},`),o(),n(`${i(Ds)}(1),`),o(),n(`_cache[${e.index}]`),r()),n(")"),l&&n(")]")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const Am=Kd(/^(?:if|else|else-if)$/,(e,t,n)=>Pm(e,t,n,(i,s,r)=>{const o=n.parent.children;let a=o.indexOf(i),l=0;for(;a-->=0;){const d=o[a];d&&d.type===9&&(l+=d.branches.length)}return()=>{if(r)i.codegenNode=rl(s,l,n);else{const d=Rm(i.codegenNode);d.alternate=rl(s,l+i.branches.length-1,n)}}}));function Pm(e,t,n,i){if(t.name!=="else"&&(!t.exp||!t.exp.content.trim())){const s=t.exp?t.exp.loc:e.loc;n.onError(he(28,t.loc)),t.exp=ee("true",!1,s)}if(t.name==="if"){const s=sl(e,t),r={type:9,loc:nm(e.loc),branches:[s]};if(n.replaceNode(r),i)return i(r,s,!0)}else{const s=n.parent.children;let r=s.indexOf(e);for(;r-->=-1;){const o=s[r];if(o&&ea(o)){n.removeNode(o);continue}if(o&&o.type===9){(t.name==="else-if"||t.name==="else")&&o.branches[o.branches.length-1].condition===void 0&&n.onError(he(30,e.loc)),n.removeNode();const a=sl(e,t);o.branches.push(a);const l=i&&i(o,a,!1);cr(a,n),l&&l(),n.currentNode=null}else n.onError(he(30,e.loc));break}}}function sl(e,t){const n=e.tagType===3;return{type:10,loc:e.loc,condition:t.name==="else"?void 0:t.exp,children:n&&!ot(e,"for")?e.children:[e],userKey:lr(e,"key"),isTemplateIf:n}}function rl(e,t,n){return e.condition?Jr(e.condition,ol(e,t,n),Ae(n.helper(zi),['""',"true"])):ol(e,t,n)}function ol(e,t,n){const{helper:i}=n,s=Te("key",ee(`${t}`,!1,nt,2)),{children:r}=e,o=r[0];if(r.length!==1||o.type!==1)if(r.length===1&&o.type===11){const l=o.codegenNode;return Fs(l,s,n),l}else return ki(n,i(Si),lt([s]),r,64,void 0,void 0,!0,!1,!1,e.loc);else{const l=o.codegenNode,d=Kg(l);return d.type===13&&Yo(d,n),Fs(d,s,n),l}}function Rm(e){for(;;)if(e.type===19)if(e.alternate.type===19)e=e.alternate;else return e;else e.type===20&&(e=e.value)}const Nm=Kd("for",(e,t,n)=>{const{helper:i,removeHelper:s}=n;return Im(e,t,n,r=>{const o=Ae(i(jo),[r.source]),a=Ms(e),l=ot(e,"memo"),d=lr(e,"key",!1,!0);d&&d.type;let c=d&&(d.type===6?d.value?ee(d.value.content,!0):void 0:d.exp);const f=c?Te("key",c):null,u=r.source.type===4&&r.source.constType>0,g=u?64:d?128:256;return r.codegenNode=ki(n,i(Si),void 0,o,g,void 0,void 0,!0,!u,!1,e.loc),()=>{var y;let b;const{children:N}=r,I=N.length!==1||N[0].type!==1,v=Ls(e)?e:a&&e.children.length===1&&Ls(e.children[0])?e.children[0]:null;if(v)b=v.codegenNode,a&&f&&Fs(b,f,n);else if(I)b=ki(n,i(Si),f?lt([f]):void 0,e.children,64,void 0,void 0,!0,void 0,!1);else{b=N[0].codegenNode,a&&f&&Fs(b,f,n);const h=!u||b.isBlockRequired===!0;b.isBlock!==h&&(b.isBlock?(s(gn),s(Bn(n.inSSR,b.isComponent))):s(Hn(n.inSSR,b.isComponent))),b.isBlock=h,b.isBlock?(i(gn),i(Bn(n.inSSR,b.isComponent))):(i(Hn(n.inSSR,b.isComponent)),b.needsPatch&&(b.patchFlag=((y=b.patchFlag)!=null?y:0)|512))}if(l){const h=$n(eo(r.parseResult,[ee("_cached")]));h.body=Dg([ht(["const _memo = (",l.exp,")"]),ht(["if (_cached && _cached.el",...c?[" && _cached.key === (",c,")"]:[],` && ${n.helperString(Nd)}(_cached, _memo)) return _cached`]),ht(["const _item = ",b]),ee("_item.memo = _memo"),ee("return _item")]),o.arguments.push(h,ee("_cache"),ee(String(n.cached.length))),n.cached.push(null)}else o.arguments.push($n(eo(r.parseResult),b,!0))}})});function Im(e,t,n,i){if(!t.exp){n.onError(he(31,t.loc));return}const s=t.forParseResult;if(!s){n.onError(he(32,t.loc));return}Jd(s);const{addIdentifiers:r,removeIdentifiers:o,scopes:a}=n,{source:l,value:d,key:c,index:f}=s,u={type:11,loc:t.loc,source:l,valueAlias:d,keyAlias:c,objectIndexAlias:f,parseResult:s,children:Ms(e)?e.children:[e]};n.replaceNode(u),a.vFor++;const g=i&&i(u);return()=>{a.vFor--,g&&g()}}function Jd(e,t){e.finalized||(e.finalized=!0)}function eo({value:e,key:t,index:n},i=[]){return Dm([e,t,n,...i])}function Dm(e){let t=e.length;for(;t--&&!e[t];);return e.slice(0,t+1).map((n,i)=>n||ee("_".repeat(i+1),!1))}const al=ee("undefined",!1),Om=(e,t)=>{if(e.type===1&&(e.tagType===1||e.tagType===3)){const n=ot(e,"slot");if(n)return n.exp,t.scopes.vSlot++,()=>{t.scopes.vSlot--}}},Mm=(e,t,n,i)=>$n(e,n,!1,!0,n.length?n[0].loc:i);function Lm(e,t,n=Mm){t.helper(Go);const{children:i,loc:s}=e,r=[],o=[];let a=t.scopes.vSlot>0||t.scopes.vFor>0;const l=ot(e,"slot",!0);if(l){const{arg:N,exp:I}=l;N&&!Be(N)&&(a=!0),r.push(Te(N||ee("default",!0),n(I,void 0,i,s)))}let d=!1,c=!1;const f=[],u=new Set;let g=0;for(let N=0;N<i.length;N++){const I=i[N];let v;if(!Ms(I)||!(v=ot(I,"slot",!0))){I.type!==3&&f.push(I);continue}if(l){t.onError(he(37,v.loc));break}d=!0;const{children:h,loc:m}=I,{arg:w=ee("default",!0),exp:O,loc:P}=v;let _;Be(w)?_=w?w.content:"default":a=!0;const T=ot(I,"for"),C=n(O,T,h,m);let M,k;if(M=ot(I,"if"))a=!0,o.push(Jr(M.exp,ts(w,C,g++),al));else if(k=ot(I,/^else(?:-if)?$/,!0)){let z=N,L;for(;z--&&(L=i[z],!!ea(L)););if(L&&Ms(L)&&ot(L,/^(?:else-)?if$/)){let W=o[o.length-1];for(;W.alternate.type===19;)W=W.alternate;W.alternate=k.exp?Jr(k.exp,ts(w,C,g++),al):ts(w,C,g++)}else t.onError(he(30,k.loc))}else if(T){a=!0;const z=T.forParseResult;z?(Jd(z),o.push(Ae(t.helper(jo),[z.source,$n(eo(z),ts(w,C),!0)]))):t.onError(he(32,T.loc))}else{if(_){if(u.has(_)){t.onError(he(38,P));continue}u.add(_),_==="default"&&(c=!0)}r.push(Te(w,C))}}if(!l){const N=(I,v)=>{const h=n(I,void 0,v,s);return t.compatConfig&&(h.isNonScopedSlot=!0),Te("default",h)};d?f.length&&!f.every(Zo)&&(c?t.onError(he(39,f[0].loc)):r.push(N(void 0,f))):r.push(N(void 0,i))}const y=a?2:ls(e.children)?3:1;let b=lt(r.concat(Te("_",ee(y+"",!1))),s);return o.length&&(b=Ae(t.helper(Rd),[b,fn(o)])),{slots:b,hasDynamicSlots:a}}function ts(e,t,n){const i=[Te("name",e),Te("fn",t)];return n!=null&&i.push(Te("key",ee(String(n),!0))),lt(i)}function ls(e){for(let t=0;t<e.length;t++){const n=e[t];switch(n.type){case 1:if(n.tagType===2||ls(n.children))return!0;break;case 9:if(ls(n.branches))return!0;break;case 10:case 11:if(ls(n.children))return!0;break}}return!1}const Xd=new WeakMap,Fm=(e,t)=>function(){if(e=t.currentNode,!(e.type===1&&(e.tagType===0||e.tagType===1)))return;const{tag:i,props:s}=e,r=e.tagType===1;let o=r?zm(e,t):`"${i}"`;const a=ae(o)&&o.callee===Vo;let l,d,c=0,f,u,g,y=!1,b=!1,N=a||o===ci||o===Oo||!r&&(i==="svg"||i==="foreignObject"||i==="math");if(s.length>0){const v=Qd(e,t,void 0,r,a);l=v.props,c=v.patchFlag,u=v.dynamicPropNames,y=v.needsPatch,b=v.isBlockRequired;const h=v.directives;g=h&&h.length?fn(h.map(m=>$m(m,t))):void 0,v.shouldUseBlock&&(N=!0)}if(e.children.length>0)if(o===Ns&&(N=!0,c|=1024),r&&o!==ci&&o!==Ns){const{slots:h,hasDynamicSlots:m}=Lm(e,t);d=h,m&&(c|=1024)}else if(e.children.length===1&&o!==ci){const h=e.children[0],m=h.type,w=m===5||m===8;w&&Ze(h,t)===0&&(c|=1),w||m===2?d=h:d=e.children}else d=e.children;u&&u.length&&(f=Hm(u));const I=e.codegenNode=ki(t,o,l,d,c===0?void 0:c,f,g,!!N,!1,r,e.loc);y=y&&(c===0||c===32),y&&(I.needsPatch=!0),b&&(I.isBlockRequired=!0)};function zm(e,t,n=!1){let{tag:i}=e;const s=to(i),r=lr(e,"is",!1,!0);if(r)if(s||pn("COMPILER_IS_ON_ELEMENT",t)){let a;if(r.type===6?a=r.value&&ee(r.value.content,!0):(a=r.exp,a||(a=ee("is",!1,r.arg.loc))),a)return Ae(t.helper(Vo),[a])}else r.type===6&&r.value.content.startsWith("vue:")&&(i=r.value.content.slice(4));const o=Dd(i)||t.isBuiltInComponent(i);return o?(n||t.helper(o),o):(t.helper(zo),t.components.add(i),Ci(i,"component"))}function Qd(e,t,n=e.props,i,s,r=!1){const{tag:o,loc:a,children:l}=e;let d=[];const c=[],f=[],u=l.length>0;let g=!1,y=!1,b=0,N=!1,I=!1,v=!1,h=!1,m=!1,w=!1;const O=[],P=k=>{d.length&&(c.push(lt(ll(d),a)),d=[]),k&&c.push(k)},_=()=>{t.scopes.vFor>0&&d.push(Te(ee("ref_for",!0),ee("true")))},T=({key:k,value:z})=>{if(Be(k)){const L=k.content,W=mn(L);if(W&&(!i||s)&&L.toLowerCase()!=="onclick"&&L!=="onUpdate:modelValue"&&!Lt(L)&&(h=!0),W&&Lt(L)&&(w=!0),L==="ref"&&(N=!0),W&&z.type===14&&(z=z.arguments[0]),z.type===20||(z.type===4||z.type===8)&&Ze(z,t)>0)return;L==="class"?I=!0:L==="style"?v=!0:L!=="ref"&&L!=="key"&&!O.includes(L)&&O.push(L),i&&(L==="class"||L==="style")&&!O.includes(L)&&O.push(L)}else m=!0};for(let k=0;k<n.length;k++){const z=n[k];if(z.type===6){const{loc:L,name:W,nameLoc:j,value:q}=z;let G=!0;if(W==="ref"&&(N=!0,_()),W==="is"&&(to(o)||q&&q.content.startsWith("vue:")||pn("COMPILER_IS_ON_ELEMENT",t)))continue;d.push(Te(ee(W,!0,j),ee(q?q.content:"",G,q?q.loc:L)))}else{const{name:L,arg:W,exp:j,loc:q,modifiers:G}=z,ge=L==="bind",Z=L==="on";if(L==="slot"){i||t.onError(he(40,q));continue}if(L==="once"||L==="memo"||L==="is"||ge&&Mn(W,"is")&&(to(o)||pn("COMPILER_IS_ON_ELEMENT",t))||Z&&r)continue;if(ge&&Mn(W,"key")&&(g=!0),Z&&u&&W&&Be(W)&&ce(W.content)==="vue:beforeUpdate"&&(g=!0,y=!0),ge&&Mn(W,"ref")&&_(),!W&&(ge||Z)){if(m=!0,j)if(ge){if(P(),pn("COMPILER_V_BIND_OBJECT_ORDER",t)){c.unshift(j);continue}_(),P(),c.push(j)}else P({type:14,loc:q,callee:t.helper(Ko),arguments:i?[j]:[j,"true"]});else t.onError(he(ge?34:35,q));continue}ge&&G.some(le=>le.content==="prop")&&(b|=32);const me=t.directiveTransforms[L];if(me){const{props:le,needRuntime:yn}=me(z,e,t);!r&&le.forEach(T),Z&&W&&!Be(W)?P(lt(le,a)):d.push(...le),yn&&(f.push(z),Ve(yn)&&Xd.set(z,yn))}else yf(L)||(f.push(z),u&&(g=!0,y=!0))}}let C;c.length?(P(),c.length>1?C=Ae(t.helper(Is),c,a):C=c[0]):d.length&&(C=lt(ll(d),a)),m?b|=16:(I&&!i&&(b|=2),v&&!i&&(b|=4),O.length&&(b|=8),h&&(b|=32));const M=(b===0||b===32)&&(N||w||f.length>0);if(!g&&M&&(b|=512),!t.inSSR&&C)switch(C.type){case 15:let k=-1,z=-1,L=!1;for(let q=0;q<C.properties.length;q++){const G=C.properties[q].key;Be(G)?G.content==="class"?k=q:G.content==="style"&&(z=q):G.isHandlerKey||(L=!0)}const W=C.properties[k],j=C.properties[z];L?C=Ae(t.helper(Ti),[C]):(W&&!Be(W.value)&&(W.value=Ae(t.helper(Wo),[W.value])),j&&(v||j.value.type===4&&j.value.content.trim()[0]==="["||j.value.type===17)&&(j.value=Ae(t.helper(Uo),[j.value])));break;case 14:break;default:C=Ae(t.helper(Ti),[Ae(t.helper(Vi),[C])]);break}return{props:C,directives:f,patchFlag:b,dynamicPropNames:O,shouldUseBlock:g,needsPatch:M,isBlockRequired:y}}function ll(e){const t=new Map,n=[];for(let i=0;i<e.length;i++){const s=e[i];if(s.key.type===8||!s.key.isStatic){n.push(s);continue}const r=s.key.content,o=t.get(r);o?(r==="style"||r==="class"||mn(r))&&Vm(o,s):(t.set(r,s),n.push(s))}return n}function Vm(e,t){e.value.type===17?e.value.elements.push(t.value):e.value=fn([e.value,t.value],e.loc)}function $m(e,t){const n=[],i=Xd.get(e);i?n.push(t.helperString(i)):(t.helper($o),t.directives.add(e.name),n.push(Ci(e.name,"directive")));const{loc:s}=e;if(e.exp&&n.push(e.exp),e.arg&&(e.exp||n.push("void 0"),n.push(e.arg)),Object.keys(e.modifiers).length){e.arg||(e.exp||n.push("void 0"),n.push("void 0"));const r=ee("true",!1,s);n.push(lt(e.modifiers.map(o=>Te(o,r)),s))}return fn(n,e.loc)}function Hm(e){let t="[";for(let n=0,i=e.length;n<i;n++)t+=JSON.stringify(e[n]),n<i-1&&(t+=", ");return t+"]"}function to(e){return e==="component"||e==="Component"}const Bm=(e,t)=>{if(Ls(e)){const{children:n,loc:i}=e,{slotName:s,slotProps:r}=jm(e,t),o=[t.prefixIdentifiers?"_ctx.$slots":"$slots",s,"{}","undefined","true"];let a=2;r&&(o[2]=r,a=3),n.length&&(o[3]=$n([],n,!1,!1,i),a=4),t.scopeId&&!t.slotted&&(a=5),o.splice(a),e.codegenNode=Ae(t.helper(Pd),o,i)}};function jm(e,t){let n='"default"',i;const s=[];for(let r=0;r<e.props.length;r++){const o=e.props[r];if(o.type===6)o.value&&(o.name==="name"?n=JSON.stringify(o.value.content):(o.name=ce(o.name),s.push(o)));else if(o.name==="bind"&&Mn(o.arg,"name")){if(o.exp)n=o.exp;else if(o.arg&&o.arg.type===4){const a=ce(o.arg.content);n=o.exp=ee(a,!1,o.arg.loc)}}else o.name==="bind"&&o.arg&&Be(o.arg)&&(o.arg.content=ce(o.arg.content)),s.push(o)}if(s.length>0){const{props:r,directives:o}=Qd(e,t,s,!1,!1);i=r,o.length&&t.onError(he(36,o[0].loc))}return{slotName:n,slotProps:i}}const Zd=(e,t,n,i)=>{const{loc:s,modifiers:r,arg:o}=e;!e.exp&&!r.length&&n.onError(he(35,s));let a;if(o.type===4)if(o.isStatic){let f=o.content;f.startsWith("vue:")&&(f=`vnode-${f.slice(4)}`);const u=t.tagType!==0||f.startsWith("vnode")||!/[A-Z]/.test(f)?Pn(ce(f)):`on:${f}`;a=ee(u,!0,o.loc)}else a=ht([`${n.helperString(Yr)}(`,o,")"]);else a=o,a.children.unshift(`${n.helperString(Yr)}(`),a.children.push(")");let l=e.exp;l&&!l.content.trim()&&(l=void 0);let d=n.cacheHandlers&&!l&&!n.inVOnce;if(l){const f=Ld(l),u=!(f||Hg(l)),g=l.content.includes(";");(u||d&&f)&&(l=ht([`${u?"$event":"(...args)"} => ${g?"{":"("}`,l,g?"}":")"]))}let c={props:[Te(a,l||ee("() => {}",!1,s))]};return i&&(c=i(c)),d&&(c.props[0].value=n.cache(c.props[0].value)),c.props.forEach(f=>f.key.isHandlerKey=!0),c},Wm=(e,t,n)=>{const{modifiers:i,loc:s}=e,r=e.arg;let{exp:o}=e;return o&&o.type===4&&!o.content.trim()&&(o=void 0),r.type!==4?(r.children.unshift("("),r.children.push(') || ""')):r.isStatic||(r.content=r.content?`${r.content} || ""`:'""'),i.some(a=>a.content==="camel")&&(r.type===4?r.isStatic?r.content=ce(r.content):r.content=`${n.helperString(qr)}(${r.content})`:(r.children.unshift(`${n.helperString(qr)}(`),r.children.push(")"))),n.inSSR||(i.some(a=>a.content==="prop")&&cl(r,"."),i.some(a=>a.content==="attr")&&cl(r,"^")),{props:[Te(r,o)]}},cl=(e,t)=>{e.type===4?e.isStatic?e.content=t+e.content:e.content=`\`${t}\${${e.content}}\``:(e.children.unshift(`'${t}' + (`),e.children.push(")"))},Um=(e,t)=>{if(e.type===0||e.type===1||e.type===11||e.type===10)return()=>{const n=e.children;let i,s=!1;for(let r=0;r<n.length;r++){const o=n[r];if(kr(o)){s=!0;for(let a=r+1;a<n.length;a++){const l=n[a];if(kr(l))i||(i=n[r]=ht([o],o.loc)),i.children.push(" + ",l),n.splice(a,1),a--;else{i=void 0;break}}}}if(!(!s||n.length===1&&(e.type===0||e.type===1&&e.tagType===0&&!e.props.find(r=>r.type===7&&!t.directiveTransforms[r.name])&&e.tag!=="template")))for(let r=0;r<n.length;r++){const o=n[r];if(kr(o)||o.type===8){const a=[];(o.type!==2||o.content!==" ")&&a.push(o),!t.ssr&&Ze(o,t)===0&&a.push("1"),n[r]={type:12,content:o,loc:o.loc,codegenNode:Ae(t.helper(Fo),a)}}}}},dl=new WeakSet,Km=(e,t)=>{if(e.type===1&&ot(e,"once",!0))return dl.has(e)||t.inVOnce||t.inSSR?void 0:(dl.add(e),t.inVOnce=!0,t.helper(Ds),()=>{t.inVOnce=!1;const n=t.currentNode;n.codegenNode&&(n.codegenNode=t.cache(n.codegenNode,!0,!0))})},ef=(e,t,n)=>{const{exp:i,arg:s}=e;if(!i)return n.onError(he(41,e.loc)),Xn();const r=i.loc.source.trim(),o=i.type===4?i.content:r,a=n.bindingMetadata[r];if(a==="props"||a==="props-aliased")return n.onError(he(44,i.loc)),Xn();if(a==="literal-const"||a==="setup-const")return n.onError(he(45,i.loc)),Xn();if(!o.trim()||!Ld(i))return n.onError(he(42,i.loc)),Xn();const l=s||ee("modelValue",!0),d=s?Be(s)?`onUpdate:${ce(s.content)}`:ht(['"onUpdate:" + ',s]):"onUpdate:modelValue";let c;const f=n.isTS?"($event: any)":"$event";c=ht([`${f} => ((`,i,") = $event)"]);const u=[Te(l,e.exp),Te(d,c)];if(e.modifiers.length&&t.tagType===1){const g=e.modifiers.map(b=>b.content).map(b=>(Xo(b)?b:JSON.stringify(b))+": true").join(", "),y=s?Be(s)?`${s.content}Modifiers`:ht([s,' + "Modifiers"']):"modelModifiers";u.push(Te(y,ee(`{ ${g} }`,!1,e.loc,2)))}return Xn(u)};function Xn(e=[]){return{props:e}}const Gm=/[\w).+\-_$\]]/,qm=(e,t)=>{pn("COMPILER_FILTERS",t)&&(e.type===5?zs(e.content,t):e.type===1&&e.props.forEach(n=>{n.type===7&&n.name!=="for"&&n.exp&&zs(n.exp,t)}))};function zs(e,t){if(e.type===4)fl(e,t);else for(let n=0;n<e.children.length;n++){const i=e.children[n];typeof i=="object"&&(i.type===4?fl(i,t):i.type===8?zs(i,t):i.type===5&&zs(i.content,t))}}function fl(e,t){const n=e.content;let i=!1,s=!1,r=!1,o=!1,a=0,l=0,d=0,c=0,f,u,g,y,b=[];for(g=0;g<n.length;g++)if(u=f,f=n.charCodeAt(g),i)f===39&&u!==92&&(i=!1);else if(s)f===34&&u!==92&&(s=!1);else if(r)f===96&&u!==92&&(r=!1);else if(o)f===47&&u!==92&&(o=!1);else if(f===124&&n.charCodeAt(g+1)!==124&&n.charCodeAt(g-1)!==124&&!a&&!l&&!d)y===void 0?(c=g+1,y=n.slice(0,g).trim()):N();else{switch(f){case 34:s=!0;break;case 39:i=!0;break;case 96:r=!0;break;case 40:d++;break;case 41:d--;break;case 91:l++;break;case 93:l--;break;case 123:a++;break;case 125:a--;break}if(f===47){let I=g-1,v;for(;I>=0&&(v=n.charAt(I),v===" ");I--);(!v||!Gm.test(v))&&(o=!0)}}y===void 0?y=n.slice(0,g).trim():c!==0&&N();function N(){b.push(n.slice(c,g).trim()),c=g+1}if(b.length){for(g=0;g<b.length;g++)y=Ym(y,b[g],t);e.content=y,e.ast=void 0}}function Ym(e,t,n){n.helper(Ho);const i=t.indexOf("(");if(i<0)return n.filters.add(t),`${Ci(t,"filter")}(${e})`;{const s=t.slice(0,i),r=t.slice(i+1);return n.filters.add(s),`${Ci(s,"filter")}(${e}${r!==")"?","+r:r}`}}const pl=new WeakSet,Jm=(e,t)=>{if(e.type===1){const n=ot(e,"memo");return!n||pl.has(e)||t.inSSR?void 0:(pl.add(e),()=>{const i=e.codegenNode||t.currentNode.codegenNode;i&&i.type===13&&(e.tagType!==1&&Yo(i,t),e.codegenNode=Ae(t.helper(qo),[n.exp,$n(void 0,i),"_cache",String(t.cached.length)]),t.cached.push(null))})}},Xm=(e,t)=>{if(e.type===1){for(const n of e.props)if(n.type===7&&n.name==="bind"&&(!n.exp||n.exp.type===4&&!n.exp.content.trim())&&n.arg){const i=n.arg;if(i.type!==4||!i.isStatic)t.onError(he(53,i.loc)),n.exp=ee("",!0,i.loc);else{const s=ce(i.content);(Od.test(s[0])||s[0]==="-")&&(n.exp=ee(s,!1,i.loc))}}}};function Qm(e){return[[Xm,Km,Am,Jm,Nm,qm,Bm,Fm,Om,Um],{on:Zd,bind:Wm,model:ef}]}function Zm(e,t={}){const n=t.onError||Jo,i=t.mode==="module";t.prefixIdentifiers===!0?n(he(48)):i&&n(he(49));const s=!1;t.cacheHandlers&&n(he(50)),t.scopeId&&!i&&n(he(51));const r=Q({},t,{prefixIdentifiers:s}),o=J(e)?rm(e,r):e,[a,l]=Qm();return cm(o,Q({},r,{nodeTransforms:[...a,...t.nodeTransforms||[]],directiveTransforms:Q({},l,t.directiveTransforms||{})})),um(o,r)}const ex=()=>({props:[]});const tf=Symbol(""),nf=Symbol(""),sf=Symbol(""),rf=Symbol(""),no=Symbol(""),of=Symbol(""),af=Symbol(""),lf=Symbol(""),ia=Symbol(""),cf=Symbol("");Rg({[tf]:"vModelRadio",[nf]:"vModelCheckbox",[sf]:"vModelText",[rf]:"vModelSelect",[no]:"vModelDynamic",[of]:"withModifiers",[af]:"withKeys",[lf]:"vShow",[ia]:"Transition",[cf]:"TransitionGroup"});let Tn;function tx(e,t=!1){return Tn||(Tn=document.createElement("div")),t?(Tn.innerHTML=`<div foo="${e.replace(/"/g,"&quot;")}">`,Tn.children[0].getAttribute("foo")):(Tn.innerHTML=e,Tn.textContent)}const nx={parseMode:"html",isVoidTag:Ff,isNativeTag:e=>Of(e)||Mf(e)||Lf(e),isPreTag:e=>e==="pre",isIgnoreNewlineTag:e=>e==="pre"||e==="textarea",decodeEntities:tx,isBuiltInComponent:e=>{if(e==="Transition"||e==="transition")return ia;if(e==="TransitionGroup"||e==="transition-group")return cf},getNamespace(e,t,n){let i=t?t.ns:n;if(t&&i===2)if(t.tag==="annotation-xml"){if(e==="svg")return 1;t.props.some(s=>s.type===6&&s.name==="encoding"&&s.value!=null&&(s.value.content==="text/html"||s.value.content==="application/xhtml+xml"))&&(i=0)}else/^m(?:[ions]|text)$/.test(t.tag)&&e!=="mglyph"&&e!=="malignmark"&&(i=0);else t&&i===1&&(t.tag==="foreignObject"||t.tag==="desc"||t.tag==="title")&&(i=0);if(i===0){if(e==="svg")return 1;if(e==="math")return 2}return i}},ix=e=>{e.type===1&&e.props.forEach((t,n)=>{t.type===6&&t.name==="style"&&t.value&&(e.props[n]={type:7,name:"bind",arg:ee("style",!0,t.loc),exp:sx(t.value.content,t.loc),modifiers:[],loc:t.loc})})},sx=(e,t)=>{const n=xl(e);return ee(JSON.stringify(n),!1,t,3)};function Zt(e,t){return he(e,t)}const rx=(e,t,n)=>{const{exp:i,loc:s}=e;return i||n.onError(Zt(54,s)),t.children.length&&(n.onError(Zt(55,s)),t.children.length=0),{props:[Te(ee("innerHTML",!0,s),i||ee("",!0))]}},ox=(e,t,n)=>{const{exp:i,loc:s}=e;return i||n.onError(Zt(56,s)),t.children.length&&(n.onError(Zt(57,s)),t.children.length=0),{props:[Te(ee("textContent",!0),i?Ze(i,n)>0?i:Ae(n.helperString(ar),[i],s):ee("",!0))]}},ax=(e,t,n)=>{const i=ef(e,t,n);if(!i.props.length||t.tagType===1)return i;e.arg&&n.onError(Zt(59,e.arg.loc));const{tag:s}=t,r=n.isCustomElement(s);if(s==="input"||s==="textarea"||s==="select"||r){let o=sf,a=!1;if(s==="input"||r){const l=lr(t,"type");if(l){if(l.type===7)o=no;else if(l.value)switch(l.value.content){case"radio":o=tf;break;case"checkbox":o=nf;break;case"file":a=!0,n.onError(Zt(60,e.loc));break}}else Bg(t)&&(o=no)}else s==="select"&&(o=rf);a||(i.needRuntime=n.helper(o))}else n.onError(Zt(58,e.loc));return i.props=i.props.filter(o=>!(o.key.type===4&&o.key.content==="modelValue")),i},lx=tt("passive,once,capture"),cx=tt("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),dx=tt("left,right"),df=tt("onkeyup,onkeydown,onkeypress"),fx=(e,t,n,i)=>{const s=[],r=[],o=[];for(let a=0;a<t.length;a++){const l=t[a].content;l==="native"&&Ei("COMPILER_V_ON_NATIVE",n)||lx(l)?o.push(l):dx(l)?Be(e)?df(e.content.toLowerCase())?s.push(l):r.push(l):(s.push(l),r.push(l)):cx(l)?r.push(l):s.push(l)}return{keyModifiers:s,nonKeyModifiers:r,eventOptionModifiers:o}},ul=(e,t)=>Be(e)&&e.content.toLowerCase()==="onclick"?ee(t,!0):e.type!==4?ht(["(",e,`) === "onClick" ? "${t}" : (`,e,")"]):e,px=(e,t,n)=>Zd(e,t,n,i=>{const{modifiers:s}=e;if(!s.length)return i;let{key:r,value:o}=i.props[0];const{keyModifiers:a,nonKeyModifiers:l,eventOptionModifiers:d}=fx(r,s,n,e.loc);if(l.includes("right")&&(r=ul(r,"onContextmenu")),l.includes("middle")&&(r=ul(r,"onMouseup")),l.length&&(o=Ae(n.helper(of),[o,JSON.stringify(l)])),a.length&&(!Be(r)||df(r.content.toLowerCase()))&&(o=Ae(n.helper(af),[o,JSON.stringify(a)])),d.length){const c=d.map(xn).join("");r=Be(r)?ee(`${r.content}${c}`,!0):ht(["(",r,`) + "${c}"`])}return{props:[Te(r,o)]}}),ux=(e,t,n)=>{const{exp:i,loc:s}=e;return i||n.onError(Zt(62,s)),{props:[],needRuntime:n.helper(lf)}},hx=(e,t)=>{if(e.type===1&&e.tagType===1&&t.isBuiltInComponent(e.tag)===ia)return()=>{if(!e.children.length)return;ff(e);const i=e.children[0];if(i.type===1)for(const s of i.props)s.type===7&&s.name==="show"&&e.props.push({type:6,name:"persisted",nameLoc:e.loc,value:void 0,loc:e.loc})}};function ff(e){const t=e.children=e.children.filter(i=>!ea(i)),n=t[0];return t.length!==1||n.type===11||n.type===9&&n.branches.some(ff)}const gx=(e,t)=>{e.type===1&&e.tagType===0&&(e.tag==="script"||e.tag==="style")&&t.removeNode()},mx=[ix,hx],xx={cloak:ex,html:rx,text:ox,model:ax,on:px,show:ux};function bx(e,t={}){return Zm(e,Q({},nx,t,{nodeTransforms:[gx,...mx,...t.nodeTransforms||[]],directiveTransforms:Q({},xx,t.directiveTransforms||{}),transformHoist:null}))}const hl=Object.create(null);function wx(e,t){if(!J(e))if(e.nodeType)e=e.innerHTML;else return De;const n=Sf(e,t),i=hl[n];if(i)return i;if(e[0]==="#"){const a=document.querySelector(e);e=a?a.innerHTML:""}const s=Q({hoistStatic:!0,onError:void 0,onWarn:De},t);!s.isCustomElement&&typeof customElements<"u"&&(s.isCustomElement=a=>!!customElements.get(a));const{code:r}=bx(e,s),o=new Function("Vue",r)(Tg);return o._rc=!0,hl[n]=o}Gc(wx);const yx=`<view class="app-shell street-club {{screen === 'game' ? 'game-screen' : ''}}" style="padding-top:{{topInset}}px;">
  <view class="site-header">
    <button class="brand" bindtap="home" aria-label="返回游戏大厅">
      <view class="brand-symbol"><view></view><view></view><view></view><view></view></view>
      <view class="brand-copy"><text class="brand-name">男人帮<text class="orange">.</text></text><text class="brand-en">MEN’S CLUB</text></view>
    </button>
    <view class="desktop-nav">
      <button class="nav-link {{screen === 'home' ? 'active' : ''}}" data-screen="home" bindtap="navigate">游戏大厅</button>
      <button class="nav-link {{screen === 'favorites' ? 'active' : ''}}" data-screen="favorites" bindtap="navigate">我的收藏<text class="nav-count" wx:if="{{favorites.length}}">{{favorites.length}}</text></button>
      <button class="nav-link {{screen === 'guide' ? 'active' : ''}}" data-screen="guide" bindtap="navigate">玩法指南</button>
    </view>
    <view class="header-end"><text class="header-motto">GOOD FRIENDS. GOOD TIMES.</text><button class="settings-button" data-screen="settings" bindtap="navigate" aria-label="设置">☷</button></view>
  </view>

  <view wx:if="{{screen === 'home' || screen === 'favorites'}}" class="hall page-enter">
    <view wx:if="{{screen === 'home'}}" class="hero">
      <view class="hero-copy">
        <view class="eyebrow"><text class="live-dot"></text><text>让每一次相聚，都有点意思</text></view>
        <view class="hero-title">人齐了，<text class="hero-title-accent">快乐就开场<text class="period">.</text></text></view>
        <text class="hero-description"><text class="hero-description-intro">放下手机里的世界，玩进朋友的世界。</text><text class="description-break">{{games.length}} 款聚会游戏，一部手机就够。</text></text>
        <view class="hero-actions"><button class="primary-button" bindtap="randomGame">随机开一局 <text class="button-arrow">↗</text></button><button class="text-button" data-screen="guide" bindtap="navigate">先看看怎么玩 <text>→</text></button></view>
        <view class="hero-footnote"><view class="mini-avatars"><view>玩</view><view>在</view><view>一</view><view>起</view></view><text>不必很会玩，开心就好</text></view>
      </view>
      <view class="hero-photo-wall">
        <view class="photo-wall-heading"><text>OUR CREW. REAL MOMENTS.</text><text class="photo-wall-mark">✳</text></view>
        <view class="home-photo-pair">
          <button wx:for="{{homePhotos}}" wx:key="id" class="home-photo-card home-photo-{{item.style}}" data-index="{{index}}" bindtap="previewHomePhoto" aria-label="查看{{item.title}}合照">
            <view class="photo-tape"></view><view class="home-photo-window photo-window-{{item.style}}"><image class="home-photo-image photo-image-{{item.style}}" src="{{item.src}}" mode="scaleToFill" alt="{{item.title}}合照"></image></view>
            <view class="home-photo-caption"><text>{{item.label}}</text><view>{{item.title}}<text>↗</text></view></view>
          </button>
        </view>
        <view class="photo-wall-footer"><text>有兄弟，有朋友，有好时光。</text><text>点击合照放大 ↗</text></view>
      </view>
    </view>

    <view wx:if="{{screen === 'favorites'}}" class="section-intro"><text class="eyebrow orange">YOUR LITTLE COLLECTION</text><view class="page-title">喜欢的，留着下次玩<text class="orange">.</text></view><text class="muted">熟悉的游戏，和每次都不同的好朋友。</text></view>

    <view class="players-strip">
      <view class="players-strip-left"><view class="people-icon">☺</view><view><view class="strip-title">今晚几位？<text class="player-number">{{players.length}} 人已就位</text></view><text class="strip-caption">朋友都到齐了，快乐才算完整</text></view></view>
      <button class="outline-button" bindtap="openPlayers">管理玩家 <text>↗</text></button>
    </view>

    <view class="library-heading"><view><view class="section-kicker">THE GAME MENU</view><view class="section-title">选个游戏，即刻开玩<text class="small-orange-dot">.</text></view></view><text class="library-count">{{screen === 'favorites' ? favorites.length : games.length}} 款好玩 / 零距离</text></view>
    <view class="filter-bar"><view class="filter-tabs"><button wx:for="{{filters}}" wx:key="id" class="filter-tab {{filter === item.id ? 'selected' : ''}}" data-id="{{item.id}}" bindtap="changeFilter">{{item.name}}<text wx:if="{{item.id === 'all'}}" class="filter-count">{{screen === 'favorites' ? favorites.length : games.length}}</text></button></view><text class="filter-tip">一部手机 · 面对面玩</text></view>
    <view class="games-grid">
      <view wx:for="{{visibleGames}}" wx:key="id" class="game-card color-{{item.color}}">
        <button class="card-visual" data-id="{{item.id}}" bindtap="openGame" aria-label="打开{{item.name}}"><view class="card-art-grid"></view><view class="game-tag"><text class="tag-dot"></text>{{item.tag}}</view><text class="art-number">0{{index + 1}}</text><image class="card-art" src="/assets/{{item.art}}.png" mode="aspectFill"></image><view class="card-spark">✦</view></button>
        <view class="card-content"><view class="card-title-line"><button class="card-title" data-id="{{item.id}}" bindtap="openGame">{{item.name}}</button><button class="favorite-button {{item.favorite ? 'is-favorite' : ''}}" data-id="{{item.id}}" bindtap="toggleFavorite" aria-label="{{item.favorite ? '取消收藏' : '收藏'}}{{item.name}}">{{item.favorite ? '♥' : '♡'}}</button></view><text class="card-description">{{item.desc}}</text><view class="card-bottom"><view class="game-meta"><text>♧ {{item.people}}</text><text class="meta-divider">/</text><text>{{item.time}}</text></view><button class="card-play" data-id="{{item.id}}" bindtap="openGame" aria-label="开始{{item.name}}">↗</button></view></view>
      </view>
    </view>
    <view wx:if="{{visibleGames.length === 0}}" class="empty-state"><text class="empty-symbol">♡</text><view class="section-title">这里还空着呢</view><text class="muted">点一下游戏卡片上的爱心，把喜欢的游戏放进来。</text><button class="outline-button" bindtap="home">去游戏大厅逛逛 ↗</button></view>
    <view class="random-banner"><view class="banner-symbol">✳</view><view class="banner-copy"><view>选择困难？交给运气。</view><text>不纠结玩什么，下一秒就开场。</text></view><button class="outline-button" bindtap="randomGame">帮我选一个 <text>↗</text></button></view>
    <view class="hall-footer"><text class="footer-brand">MEN’S CLUB<text class="orange">✳</text></text><text>快乐不设门槛，尽兴也要量力而行。</text><text class="footer-note">MADE FOR REAL CONNECTIONS</text></view>
  </view>

  <view wx:if="{{screen === 'guide'}}" class="content-page page-enter"><view class="section-intro"><text class="eyebrow orange">A LITTLE HOW-TO</text><view class="page-title">快乐，很容易上手<text class="orange">.</text></view><text class="muted">一起坐下来，选个游戏，就这么简单。</text></view><view class="howto-steps"><view><text class="step-no">01</text><view>叫上朋友</view><text>设置 2–12 位玩家的昵称</text></view><view><text class="step-no">02</text><view>挑个游戏</view><text>破冰、手气、烧脑，总有一款</text></view><view><text class="step-no">03</text><view>面对面开玩</view><text>一部手机轮流用，不用注册</text></view></view><view class="guide-grid"><view wx:for="{{games}}" wx:key="id" class="guide-card"><view class="guide-card-top"><image src="/assets/{{item.art}}.png" mode="aspectFit"></image><view><view class="card-title">{{item.name}}</view><text class="muted">{{item.people}} · {{item.time}}</text></view></view><text class="guide-rule">{{item.rule}}</text><button class="text-button orange" data-id="{{item.id}}" bindtap="openGame">懂了，开一局 →</button></view></view><view class="gentle-note">每个人都可以说「跳过」。不用喝酒，也能玩得很开心。</view></view>

  <view wx:if="{{screen === 'settings'}}" class="content-page settings-page page-enter"><view class="section-intro"><text class="eyebrow orange">MAKE YOURSELF AT HOME</text><view class="page-title">你的聚会小角落<text class="orange">.</text></view><text class="muted">名单和收藏会保存在当前设备上。</text></view><view class="stats-grid"><view><text>{{sessions}}</text><view>累计开局</view></view><view><text>{{favorites.length}}</text><view>收藏游戏</view></view><view><text>{{players.length}}</text><view>在场好友</view></view></view><view class="settings-list"><button class="setting-row" bindtap="openPlayers"><view><view>玩家名单</view><text>改个昵称，让每一局更有代入感</text></view><text class="muted">{{players.length}} 人　↗</text></button><button class="setting-row" bindtap="toggleHaptics"><view><view>轻触反馈</view><text>设备支持时，操作会有轻微振动</text></view><view class="switch {{haptics ? 'on' : ''}}"><view></view></view></button><button class="setting-row" data-screen="guide" bindtap="navigate"><view><view>玩法指南</view><text>{{games.length}} 款游戏的规则，一次看明白</text></view><text>↗</text></button><button class="setting-row" bindtap="resetData"><view><view>清空本机数据</view><text>重置玩家、收藏和开局记录</text></view><text class="muted">↗</text></button></view><view class="about-club"><view class="brand-symbol"><view></view><view></view><view></view><view></view></view><view>男人帮 · 1.0</view><text>把时间，留给眼前的人。</text></view></view>

  <view wx:if="{{screen === 'game'}}" class="game-page page-enter color-{{selected.color}}">
    <view class="game-breadcrumb"><button class="text-button" bindtap="home">← 游戏大厅</button><view><button class="text-button" bindtap="rules">ⓘ 玩法规则</button><button wx:if="{{phase !== 'setup'}}" class="text-button" bindtap="restartGame">↻ 重开</button></view></view>
    <view class="game-page-heading"><text class="section-kicker">{{selected.english}}</text><view class="page-title">{{selected.name}}<text class="orange">.</text></view><text class="muted">{{selected.hint}}</text></view>

    <view wx:if="{{phase === 'setup'}}" class="setup-panel"><image class="setup-art" src="/assets/{{selected.art}}.png" mode="aspectFit"></image><view class="setup-information"><view class="setup-label">开场前，准备一下</view><text class="setup-rule">{{selected.rule}}</text><button class="setup-more-rules" bindtap="rules">查看完整玩法 →</button><button wx:if="{{selected.id !== 'finger'}}" class="setup-players" bindtap="openPlayers"><view><text class="muted">本局玩家</text><view>{{players.length}} 人 <text class="muted small-text">/ 最少 {{selected.min}} 人</text></view></view><text class="orange">修改 ↗</text></button><view wx:if="{{selected.id === 'dice'}}" class="dice-options"><text class="muted">每人几颗骰子？</text><view><button class="chip {{diceCount === 1 ? 'selected' : ''}}" data-count="1" bindtap="chooseDiceCount">1 颗</button><button class="chip {{diceCount === 3 ? 'selected' : ''}}" data-count="3" bindtap="chooseDiceCount">3 颗</button><button class="chip {{diceCount === 5 ? 'selected' : ''}}" data-count="5" bindtap="chooseDiceCount">5 颗 · 骰盅</button></view></view><view wx:if="{{selected.id === 'draw'}}" class="draw-setup-options"><text class="muted">每轮画多久？</text><view><button class="chip {{drawLimit === 60 ? 'selected' : ''}}" data-seconds="60" bindtap="chooseDrawLimit">60 秒</button><button class="chip {{drawLimit === 90 ? 'selected' : ''}}" data-seconds="90" bindtap="chooseDrawLimit">90 秒</button><button class="chip {{drawLimit === 120 ? 'selected' : ''}}" data-seconds="120" bindtap="chooseDrawLimit">120 秒</button></view></view><view wx:if="{{selected.id === 'finger'}}" class="finger-setup-note">两根或更多手指同屏按住，无需设置玩家昵称。</view><button class="primary-button full-button" bindtap="startGame">{{players.length >= selected.min ? '准备好了，开始' : '先添加玩家'}} <text>↗</text></button><text class="setup-note">面对面一起玩 · 无需联网</text></view></view>

    <view wx:if="{{phase !== 'setup'}}" class="play-panel">
      <view class="round-label" wx:if="{{selected.id !== 'king' && selected.id !== 'undercover'}}"><text>{{selected.id === 'promptwheel' ? 'SPIN & MATCH' : 'ROUND ' + round}}</text><text wx:if="{{selected.id === 'promptwheel'}}">本局已抽 {{promptDrawn}} / {{promptTotal}} 条</text><text wx:elif="{{selected.id === 'finger'}}">{{fingerPoints.length}} 指已就位</text><text wx:elif="{{selected.id !== 'wheel'}}">轮到 <text class="cream">{{currentPlayer}}</text></text><text wx:else>{{players.length}} 位幸运候选人</text></view>

      <view wx:if="{{selected.id === 'dice'}}" class="dice-game {{diceCount === 5 ? 'cup-mode' : ''}}">
        <view class="dice-total"><text>{{hasRolled ? diceTotal : '?'}}</text><view>{{diceCount === 5 ? (cupState === 'ready' ? '骰子已就位，开盅见分晓' : hasRolled ? '本次总点数' : '盖上骰盅，好运藏在里面') : hasRolled ? '本次总点数' : '今天的手气，摇了才知道'}}</view></view>
        <view wx:if="{{diceCount === 5}}" class="cup-stage cup-{{cupState}}">
          <view class="table-halo"></view><view class="dice-table"><view class="table-inner-ring"></view><text class="table-wordmark">MEN’S CLUB · FIVE DICE</text></view>
          <view wx:if="{{hasRolled}}" class="cup-dice-layout"><button wx:for="{{dice}}" wx:key="index" class="die table-die table-die-{{index}} {{item.held ? 'held' : ''}}" data-index="{{index}}" bindtap="holdDie" aria-label="骰子{{index + 1}}，点数{{item.value}}，{{item.held ? '已锁定' : '未锁定'}}"><view wx:for="{{item.pips}}" wx:for-item="pip" wx:key="*this" class="pip pip-{{pip}}"></view><text wx:if="{{item.held}}" class="held-label">已锁定</text></button></view>
          <button class="dice-cup" bindtap="tapDiceCup" disabled="{{rolling || cupState === 'opening' || cupState === 'covering' || cupState === 'open'}}" aria-label="{{cupState === 'ready' ? '打开骰盅' : '摇动骰盅'}}"><image src="/assets/dice-cup.png" mode="aspectFit"></image><view class="cup-touch-label">{{cupState === 'ready' ? 'TAP TO REVEAL' : 'SHAKE IT UP'}}</view></button>
          <view wx:if="{{cupState === 'ready'}}" class="cup-ready-label"><text class="live-dot"></text>轻点骰盅，开盅</view>
          <view wx:if="{{cupState === 'shaking'}}" class="cup-sound-lines"><text>///</text><text>///</text></view>
        </view>
        <view wx:else class="dice-tray {{rolling ? 'is-rolling' : ''}}"><button wx:for="{{dice}}" wx:key="index" class="die {{item.held ? 'held' : ''}}" data-index="{{index}}" bindtap="holdDie" aria-label="骰子{{index + 1}}，点数{{item.value}}，{{item.held ? '已锁定' : '未锁定'}}"><view wx:for="{{item.pips}}" wx:for-item="pip" wx:key="*this" class="pip pip-{{pip}}"></view><text wx:if="{{item.held}}" class="held-label">已锁定</text></button></view>
        <text class="muted play-hint">{{diceCount === 5 ? (cupState === 'shaking' ? '骰子碰撞中，手气正在酝酿…' : cupState === 'ready' ? '先别猜，亲手打开这一盅。' : hasRolled ? '可以随时盖上再看，点数不变；只有再摇才换点数。' : '盖盅 → 摇动 → 开盅，五颗骰子一起见分晓。') : hasRolled ? '轻点骰子可以锁定点数，再摇时保留' : '点击下方按钮，看看谁是今晚的骰王'}}</text>
        <view class="play-actions cup-play-actions {{cupHasResult ? 'has-cup-result' : ''}}">
          <button class="primary-button" bindtap="rollDice" disabled="{{rolling || cupState === 'opening' || cupState === 'covering'}}">{{diceCount === 5 ? (rolling ? '正在摇盅…' : cupState === 'opening' ? '开盅中…' : cupState === 'covering' ? '盖盅中…' : cupHasResult ? '再摇一盅 ↻' : '摇骰盅 ↻') : rolling ? '好运酝酿中…' : '摇一摇 ↻'}}</button>
          <button wx:if="{{diceCount === 5 && cupHasResult}}" class="outline-button cup-toggle-button" bindtap="toggleDiceCup" disabled="{{rolling || cupState === 'opening' || cupState === 'covering'}}">{{cupState === 'open' ? '盖上骰盅 ↓' : cupState === 'covering' ? '正在盖盅…' : '开盅看点数 ↑'}}</button>
          <button class="outline-button next-player-button" bindtap="nextDicePlayer" disabled="{{rolling || cupState === 'opening' || cupState === 'covering' || (diceCount === 5 && !cupHasResult)}}">下一位 →</button>
        </view>
      </view>

      <view wx:if="{{selected.id === 'truth'}}" class="truth-game"><view wx:if="{{phase === 'choose'}}"><view class="choice-title">{{currentPlayer}}，选一个吧<text class="orange">.</text></view><text class="muted">是分享一个小秘密，还是来一点小挑战？</text><view class="truth-choices"><button class="truth-choice" data-type="truth" bindtap="drawPrompt"><text>♡</text><view>真心话</view><text class="choice-en">A LITTLE HONESTY</text></button><button class="truth-choice dare-choice" data-type="dare" bindtap="drawPrompt"><text>ϟ</text><view>大冒险</view><text class="choice-en">A LITTLE COURAGE</text></button></view></view><view wx:else class="prompt-panel"><text class="prompt-tag">{{promptType === 'truth' ? '♡ 真心话' : 'ϟ 大冒险'}}</text><view class="prompt-text">{{prompt}}</view><view class="play-actions"><button class="primary-button" bindtap="nextTruth">完成，下一位 →</button><button class="text-button" bindtap="nextTruth">这题跳过</button></view><text class="muted small-text">自在参与，每一道题都可以跳过。</text></view></view>

      <view wx:if="{{selected.id === 'wheel'}}" class="wheel-game"><view class="wheel-wrap"><view class="wheel-pointer"></view><view class="wheel-disc" style="{{wheelStyle}}"><image src="/assets/wheel-{{players.length}}.png" mode="aspectFit"></image><view wx:for="{{wheelLabels}}" wx:key="id" class="wheel-name" style="{{item.position}}">{{item.name}}</view></view><view class="wheel-center">✳</view></view><view class="wheel-result">{{wheelWinner ? '就是你，' + wheelWinner + '！' : spinning ? '幸运正在转向你…' : '谁会是这一轮的主角？'}}</view><button class="primary-button" bindtap="spinWheel" disabled="{{spinning}}">{{spinning ? '转动中…' : wheelWinner ? '再转一次 ↻' : '转出好运 ↗'}}</button></view>

      <view wx:if="{{selected.id === 'promptwheel'}}" class="prompt-wheel-game">
        <view class="prompt-filter-tabs"><button wx:for="{{promptFilters}}" wx:key="id" class="prompt-filter {{promptFilter === item.id ? 'selected' : ''}}" data-id="{{item.id}}" bindtap="changePromptFilter" disabled="{{spinning}}">{{item.name}}</button></view>
        <view wx:if="{{wheelCount}}" class="wheel-wrap prompt-wheel-wrap"><view class="wheel-pointer"></view><view class="wheel-disc" style="{{wheelStyle}}"><image src="/assets/wheel-{{wheelCount}}.png" mode="aspectFit"></image><view wx:for="{{wheelLabels}}" wx:key="id" class="wheel-name prompt-wheel-name" style="{{item.position}}">{{item.name}}</view></view><view class="wheel-center">✳</view></view>
        <view wx:else class="prompt-pool-empty"><text>✳</text><view>这一类已经全部转过啦</view><text class="muted">换个分类继续，或者重新洗牌再玩一局。</text></view>
        <view wx:if="{{promptResult}}" class="condition-result"><view class="condition-result-top"><text>本次判定</text><text>NO. {{promptResult.id}}</text></view><view class="condition-text">{{promptResult.text}}</view><text class="condition-instruction">符合这一条的朋友，举个手。</text></view>
        <view wx:else class="condition-placeholder"><view>{{spinning ? '指针正在寻找同频的朋友…' : '转中一句话，看看谁和你一样。'}}</view><text>纯判定词条 · 本局抽中过的不再出现</text></view>
        <view class="prompt-wheel-actions"><button class="primary-button" bindtap="spinPromptWheel" disabled="{{spinning || !promptRemaining}}">{{spinning ? '转动中…' : !promptRemaining ? '本类词条已抽完' : promptResult ? '再转一条 ↻' : '开始转动 ↗'}}</button><button class="text-button" bindtap="restartGame" disabled="{{spinning}}">↻ 重新洗牌</button></view>
        <button wx:if="{{promptEntries.length}}" class="candidate-toggle" bindtap="toggleCandidates">{{showCandidates ? '收起本次盘面 −' : '展开本次盘面 ＋'}}<text>{{promptEntries.length}} 条随机候选</text></button>
        <view wx:if="{{showCandidates}}" class="candidate-list"><view wx:for="{{promptEntries}}" wx:key="id" class="{{promptResult && promptResult.id === item.id ? 'chosen' : ''}}"><text class="candidate-index">0{{index + 1}}</text><text>{{item.text}}</text></view></view>
        <view wx:if="{{promptHistory.length}}" class="prompt-history"><view class="history-title">刚刚转到过<text>最近 {{promptHistory.length}} 条</text></view><view wx:for="{{promptHistory}}" wx:key="id"><text class="history-id">#{{item.id}}</text><text>{{item.text}}</text></view></view>
      </view>

      <view wx:if="{{phase === 'reveal'}}" class="reveal-game"><view class="reveal-progress">私密查看 {{revealIndex + 1}} / {{players.length}}</view><view class="choice-title">请把手机交给<text class="orange"> {{currentPlayer}}</text></view><text class="muted">其他朋友先移开视线，秘密只给你一个人。</text><button wx:if="{{!secretVisible}}" class="secret-card" bindtap="revealSecret"><text class="secret-lock">✳</text><view>轻点查看{{selected.id === 'king' ? '身份' : '词语'}}</view><text>ONLY FOR YOUR EYES</text></button><view wx:else class="secret-card revealed"><text class="secret-overline">你的{{selected.id === 'king' ? '身份' : '词语'}}是</text><view class="secret-word">{{secretWord}}</view><text class="secret-caption">{{secretCaption}}</text></view><button wx:if="{{secretVisible}}" class="primary-button" bindtap="nextSecret">隐藏，{{revealIndex + 1 === players.length ? '开始游戏' : '传给下一位'}} →</button><text wx:else class="muted small-text play-hint">确认是本人后，再轻点卡片。</text></view>

      <view wx:if="{{phase === 'command'}}" class="king-game"><image class="in-game-art" src="/assets/king.png" mode="aspectFit"></image><view class="choice-title">国王，请亮明身份<text class="orange">.</text></view><text class="muted">其他玩家先保密号码，听国王发令。</text><view wx:if="{{kingCommand}}" class="command-card">{{kingCommand}}</view><view wx:else class="command-placeholder">想一个大家都愿意参加的小任务，<text>也可以让我们出个主意。</text></view><view class="play-actions"><button class="primary-button" bindtap="generateCommand">{{kingCommand ? '换个指令 ↻' : '给我一个指令 ↗'}}</button><button class="outline-button" bindtap="startGame">下一局，重新发牌 →</button></view></view>

      <view wx:if="{{phase === 'discussion'}}" class="discussion-game"><text class="section-kicker">第 {{round}} 轮 · 描述与投票</text><view class="choice-title">谁的话里有破绽<text class="orange">？</text></view><text class="muted">每人描述一次词语，再把手机交给主持人。<text class="description-break">大家讨论后，选择得票最多的玩家。</text></text><view class="vote-grid"><button wx:for="{{votePlayers}}" wx:key="id" class="vote-player {{voteId === item.id ? 'voted' : ''}}" data-id="{{item.id}}" bindtap="selectVote"><view class="player-avatar">{{index + 1}}</view><text>{{item.name}}</text><text class="vote-check">{{voteId === item.id ? '✓' : '+'}}</text></button></view><button class="primary-button" bindtap="confirmVote" disabled="{{!voteId}}">确认淘汰 →</button><text class="small-text muted play-hint">票数相同时，可继续讨论后再投票。</text></view>

      <view wx:if="{{phase === 'eliminated'}}" class="elimination-game"><text class="result-symbol">{{victory ? '✳' : '◎'}}</text><view class="choice-title">{{victory || eliminatedName + ' 出局了'}}</view><view class="elimination-role">{{eliminatedName}} 的身份是 <text class="orange">{{eliminatedRole}}</text></view><view wx:if="{{victory}}" class="final-role-list"><view wx:for="{{finalRoles}}" wx:key="id"><text>{{item.name}}</text><text>{{item.word}}</text><text class="orange">{{item.roleName}}</text></view></view><text wx:else class="muted">游戏继续，线索已经更清楚了一点。</text><button wx:if="{{victory}}" class="primary-button" bindtap="startGame">再来一局，重新发词 ↗</button><button wx:else class="primary-button" bindtap="continueDiscussion">继续下一轮 →</button></view>

      <view wx:if="{{selected.id === 'seven'}}" class="seven-game"><view class="seven-stats"><text>连续接住 <text class="orange">{{streak}}</text></text><text>本局最佳 {{bestStreak}}</text></view><view class="big-number">{{number}}</view><text class="muted">这个数字，该报数还是喊过？</text><view wx:if="{{!sevenFeedback}}" class="play-actions"><button class="outline-button" data-answer="number" bindtap="answerSeven">正常报数</button><button class="primary-button" data-answer="pass" bindtap="answerSeven">喊「过」！</button></view><view wx:else class="seven-feedback {{sevenCorrect ? 'correct' : 'incorrect'}}"><text>{{sevenFeedback}}</text><button class="primary-button" bindtap="nextSeven">下一位，继续 →</button></view></view>
      <view wx:if="{{selected.id === 'draw'}}" class="draw-game">
        <view wx:if="{{phase === 'draw-word'}}" class="reveal-game">
          <view class="choice-title">请把手机交给<text class="orange"> {{currentPlayer}}</text></view><text class="muted">画手先单独看题，其他朋友暂时移开视线。</text>
          <button wx:if="{{!drawWordVisible}}" class="secret-card" bindtap="peekDrawWord"><text class="secret-lock">✎</text><view>轻点查看我的题目</view><text>FOR THE ARTIST ONLY</text></button>
          <view wx:else class="secret-card revealed"><text class="secret-overline">{{drawHint}}</text><view class="secret-word">{{drawWordLabel}}</view><text class="secret-caption">记住它，画出来；不要写出原字。</text></view>
          <button wx:if="{{drawWordVisible}}" class="primary-button full-button" bindtap="beginDrawing">记住了，开始画 ↗</button><button class="text-button" bindtap="changeDrawWord">换一个题目 ↻</button>
        </view>
        <view wx:if="{{phase === 'drawing'}}" class="drawing-round">
          <view class="draw-status"><text>{{drawHint}}</text><text class="draw-clock {{drawTimeLeft > 10 ? '' : 'urgent'}}">{{drawTimeLeft}} 秒</text></view>
          <view class="drawing-board-wrap"><canvas id="drawingBoard" type="2d" class="drawing-board" disable-scroll="true" bindtouchstart="startDrawing" catchtouchmove="moveDrawing" bindtouchend="endDrawing" bindtouchcancel="endDrawing" aria-label="你画我猜画板"></canvas><text wx:if="{{!drawReady}}" class="canvas-loading">画板准备中…</text></view>
          <view class="draw-tools"><view class="draw-palette"><button wx:for="{{drawColors}}" wx:key="color" class="draw-color {{drawColor === item.color && drawTool === 'pen' ? 'selected' : ''}}" style="background:{{item.color}};" data-color="{{item.color}}" bindtap="chooseDrawColor" aria-label="{{item.name}}画笔"></button></view><view class="draw-widths"><button class="{{drawWidth === 3 ? 'selected' : ''}}" data-width="3" bindtap="chooseDrawWidth">细</button><button class="{{drawWidth === 5 ? 'selected' : ''}}" data-width="5" bindtap="chooseDrawWidth">中</button><button class="{{drawWidth === 10 ? 'selected' : ''}}" data-width="10" bindtap="chooseDrawWidth">粗</button></view></view>
          <view class="draw-utilities"><button class="{{drawTool === 'eraser' ? 'orange' : ''}}" bindtap="toggleEraser">▱ 橡皮</button><button bindtap="undoDrawing" disabled="{{!drawStrokeCount}}">↶ 撤销</button><button bindtap="clearDrawing" disabled="{{!drawStrokeCount}}">清空</button><button bindtap="peekDrawWord">查看题目</button></view>
          <view class="play-actions"><button class="primary-button" data-outcome="guessed" bindtap="finishDrawRound" disabled="{{!drawReady}}">有人猜对了 ✓</button><button class="outline-button" data-outcome="skip" bindtap="finishDrawRound" disabled="{{!drawReady}}">跳过这题 →</button></view>
          <text class="muted small-text">其他朋友面对面猜，由画手确认答案。</text>
        </view>
        <view wx:if="{{phase === 'draw-assign'}}" class="draw-result"><text class="section-kicker">NICE GUESS!</text><view class="choice-title">是谁猜对了<text class="orange">？</text></view><text class="muted">答案是「{{drawAnswer}}」。选出猜中的朋友，双方各得 1 分。</text><view class="vote-grid"><button wx:for="{{drawGuessers}}" wx:key="id" class="vote-player" data-id="{{item.id}}" bindtap="assignDrawGuesser"><view class="player-avatar">{{index + 1}}</view><text>{{item.name}}</text><text class="vote-check">＋1</text></button></view></view>
        <view wx:if="{{phase === 'draw-result'}}" class="draw-result"><text class="result-symbol">{{drawOutcome === 'guessed' ? '✳' : '✎'}}</text><view class="choice-title">{{drawOutcome === 'guessed' ? '画得妙，猜得也妙！' : drawOutcome === 'timeout' ? '时间到，答案揭晓' : '换个脑洞，下一题继续'}}</view><view class="draw-answer">{{drawAnswer}}</view><view class="score-list"><view wx:for="{{drawScores}}" wx:key="id"><text>{{item.name}}</text><text class="orange">{{item.score}} 分</text></view></view><button class="primary-button full-button" bindtap="nextDrawRound">交给下一位画手 →</button></view>
        <view wx:if="{{phase === 'drawing' && drawWordVisible}}" class="modal-overlay" bindtap="hideDrawWord"><view class="modal-sheet rules-sheet" catchtap="noop"><text class="section-kicker">FOR THE ARTIST ONLY</text><view class="choice-title">{{drawWordLabel}}</view><text class="muted">画手单独查看，倒计时继续。</text><button class="primary-button full-button" bindtap="hideDrawWord">记住了，隐藏题目 ↗</button></view></view>
      </view>

      <view wx:if="{{selected.id === 'shark'}}" class="shark-game"><view class="shark-remaining">还有 <text class="orange">{{sharkRemaining}}</text> 颗牙齿没按过</view><view class="shark-stage shark-{{sharkState}}"><view class="shark-mouth"><view class="shark-tongue"></view></view><image class="shark-head" src="/assets/shark-face.png" mode="aspectFit"></image><view class="shark-lower-jaw"></view><button wx:for="{{sharkTeeth}}" wx:key="id" class="shark-tooth {{item.pressed ? 'pressed' : ''}} {{item.hit ? 'hit' : ''}}" style="{{item.position}}" data-id="{{item.id}}" bindtap="pressSharkTooth" disabled="{{item.pressed || sharkState !== 'ready'}}" aria-label="{{index + 1}}号牙齿{{item.pressed ? '已按过' : ''}}"></button><view wx:if="{{sharkState !== 'ready'}}" class="shark-chomp">CHOMP!</view></view><view class="shark-feedback {{sharkState === 'bitten' ? 'orange' : ''}}">{{sharkFeedback}}</view><button wx:if="{{sharkState === 'bitten'}}" class="primary-button full-button" bindtap="nextSharkRound">再来一局，重新张嘴 ↗</button><text wx:else class="muted small-text">{{sharkState === 'biting' ? '鲨鱼正在合上嘴巴…' : '轮流选择牙齿，按过的不能再按。'}}</text></view>

      <view wx:if="{{selected.id === 'finger'}}" class="finger-game"><view class="finger-heading"><view>{{fingerState === 'chosen' ? '就是第 ' + fingerWinnerLabel + ' 根手指！' : fingerState === 'countdown' ? '保持按住，好运马上揭晓' : '至少两根手指，一起按住'}}</view><text>{{fingerDemoMode ? '三指演示模式' : '同时按住触控区，中途增减会重新计时'}}</text></view><view id="fingerBoard" class="finger-board state-{{fingerState}}" catchtouchstart="fingerTouch" catchtouchmove="fingerTouch" bindtouchend="fingerTouch" bindtouchcancel="fingerTouch"><view class="finger-board-grid"></view><view class="finger-center"><text>{{fingerState === 'countdown' ? fingerCountdown : fingerState === 'chosen' ? '✳' : '◎'}}</text><view>{{fingerState === 'chosen' ? '好运选中了你' : fingerPoints.length ? fingerPoints.length + ' 根手指已就位' : 'FINGERS DOWN'}}</view></view><view wx:for="{{fingerPoints}}" wx:key="id" class="finger-point {{fingerState === 'chosen' ? (item.id === fingerWinner ? 'chosen' : 'dimmed') : ''}}" style="{{item.position}}"><text>{{item.label}}</text><view></view></view></view><view class="finger-controls"><button wx:if="{{fingerState === 'waiting' && !fingerPoints.length}}" class="outline-button" bindtap="demoFingerRoulette">电脑三指演示 ↗</button><button wx:if="{{fingerState === 'chosen'}}" class="primary-button" bindtap="resetFingerRoulette">松手后，再来一轮 ↻</button></view><text class="muted small-text">实际同屏手指数取决于手机的多点触控能力。</text></view>

    </view>
    <view class="game-bottom-note">GOOD TIMES, AT YOUR OWN PACE. <text>快乐按自己的节奏来。</text></view>
  </view>

  <view wx:if="{{screen !== 'game'}}" class="mobile-nav"><button class="{{screen === 'home' ? 'active' : ''}}" data-screen="home" bindtap="navigate"><text>▦</text><view>游戏大厅</view></button><button class="{{screen === 'favorites' ? 'active' : ''}}" data-screen="favorites" bindtap="navigate"><text>♡</text><view>我的收藏</view></button><button class="{{screen === 'guide' ? 'active' : ''}}" data-screen="guide" bindtap="navigate"><text>☷</text><view>玩法指南</view></button><button class="{{screen === 'settings' ? 'active' : ''}}" data-screen="settings" bindtap="navigate"><text>☺</text><view>我的</view></button></view>

  <view wx:if="{{showHomePhoto}}" class="photo-viewer-overlay" bindtap="closeHomePhoto">
    <view class="photo-viewer-panel" catchtap="noop"><view class="photo-viewer-heading"><view><text class="section-kicker">{{activeHomePhoto.label}}</text><view>{{activeHomePhoto.title}}</view></view><button class="close-button" bindtap="closeHomePhoto" aria-label="关闭合照预览">×</button></view><view class="photo-viewer-paper"><view class="home-photo-window photo-window-{{activeHomePhoto.style}}"><image class="home-photo-image photo-image-{{activeHomePhoto.style}}" src="{{activeHomePhoto.src}}" mode="scaleToFill" alt="{{activeHomePhoto.title}}合照"></image></view></view><view class="photo-viewer-note">{{activeHomePhoto.note}}</view><view class="photo-viewer-controls"><button class="outline-button" data-step="-1" bindtap="nextHomePhoto">← 上一张</button><text>{{homePhotoIndex + 1}} / {{homePhotos.length}}</text><button class="outline-button" data-step="1" bindtap="nextHomePhoto">下一张 →</button></view></view>
  </view>
  <view wx:if="{{showPlayers}}" class="modal-overlay" bindtap="closePlayers"><view class="modal-sheet" catchtap="noop"><view class="modal-top"><view><text class="section-kicker">THE MORE, THE MERRIER</text><view class="modal-title">今晚一起玩的朋友<text class="orange">.</text></view></view><button class="close-button" bindtap="closePlayers" aria-label="关闭玩家设置">×</button></view><text class="muted">设置 2–12 位玩家，昵称最多 12 个字。</text><view class="player-editor"><view wx:for="{{editingPlayers}}" wx:key="id" class="player-edit-row"><view class="player-avatar">{{index + 1}}</view><input value="{{item.name}}" maxlength="12" data-index="{{index}}" bindinput="editPlayer" placeholder="输入玩家昵称" aria-label="玩家{{index + 1}}昵称"></input><button class="remove-player" data-id="{{item.id}}" bindtap="removePlayer" aria-label="移除玩家{{index + 1}}">−</button></view></view><button class="add-player" bindtap="addPlayer" disabled="{{editingPlayers.length >= 12}}">＋ 添加一位朋友 <text>{{editingPlayers.length}} / 12</text></button><button class="primary-button full-button" bindtap="savePlayers">都到齐了，保存 ↗</button></view></view>
  <view wx:if="{{showRules}}" class="modal-overlay" bindtap="closeRules"><view class="modal-sheet rules-sheet" catchtap="noop"><view class="modal-top"><view><text class="section-kicker">HOW TO PLAY</text><view class="modal-title">{{selected.name}}</view></view><button class="close-button" bindtap="closeRules" aria-label="关闭规则">×</button></view><image class="rules-art" src="/assets/{{selected.art}}.png" mode="aspectFit"></image><text class="guide-rule">{{selected.rule}}</text><view class="gentle-note">{{selected.hint}}</view><button class="primary-button full-button" bindtap="closeRules">明白了，继续玩 ↗</button></view></view>
</view>
`,vx=`page { background: #141612; color: #f4f3e9; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif; font-size: 28rpx; }
view, text, button, input, image { box-sizing: border-box; }
button { margin: 0; padding: 0; border-radius: 0; background: transparent; color: inherit; font-size: inherit; line-height: inherit; text-align: center; }
button::after { border: none; }
button[disabled] { opacity: .42; color: inherit; background: transparent; }
input { color: #f4f3e9; font-size: 28rpx; }
image { display: block; }
`,_x=`.app-shell { min-height: 100vh; padding-bottom: 150rpx; }
.site-header, .hall, .content-page, .game-page { width: 100%; max-width: 1680rpx; margin: 0 auto; padding-left: 36rpx; padding-right: 36rpx; }
.site-header { display: flex; align-items: center; justify-content: space-between; height: 138rpx; border-bottom: 1rpx solid #2b2e26; }
.brand { display: flex; align-items: center; gap: 16rpx; text-align: left; flex-shrink: 0; }
.brand-symbol { display: grid; grid-template-columns: repeat(2, 16rpx); gap: 4rpx; transform: rotate(-12deg); }
.brand-symbol view { width: 16rpx; height: 16rpx; border-radius: 5rpx; background: #f18a52; }
.brand-symbol view:nth-child(2) { background: #d6eb88; }
.brand-symbol view:nth-child(3) { background: #f6edd7; }
.brand-name { font-weight: 800; font-size: 31rpx; letter-spacing: 1rpx; display: block; }
.brand-en { display: block; color: #a5a89a; font-size: 13rpx; letter-spacing: 5rpx; margin-top: 6rpx; }
.orange { color: #f18a52; }
.cream { color: #f5f1e4; }
.muted { color: #969b8b; line-height: 1.8; }
.small-text { font-size: 22rpx; }
.desktop-nav, .header-motto { display: none; }
.header-end { display: flex; align-items: center; gap: 32rpx; }
.settings-button { width: 62rpx; height: 62rpx; border: 1rpx solid #383c32; border-radius: 50%; font-size: 34rpx; color: #b7bcab; }
.hero { position: relative; padding: 62rpx 0 44rpx; overflow: hidden; }
.hero-copy { position: relative; z-index: 2; }
.eyebrow { display: flex; align-items: center; gap: 12rpx; font-size: 21rpx; letter-spacing: 2rpx; color: #b2b9a5; }
.live-dot { width: 10rpx; height: 10rpx; border-radius: 50%; background: #d4e991; box-shadow: 0 0 18rpx #d4e94444; }
.hero-title { font-size: 76rpx; line-height: 1.23; letter-spacing: -2rpx; font-weight: 850; margin: 28rpx 0 24rpx; }
.hero-title-accent { color: #ef9a66; display: block; }
.period { color: #d9eb9e; }
.hero-description { font-size: 25rpx; color: #a6ad99; line-height: 1.9; display: block; max-width: 510rpx; }
.description-break { display: block; }
.hero-actions { display: flex; align-items: center; gap: 28rpx; margin-top: 32rpx; }
.primary-button { display: flex; align-items: center; justify-content: center; gap: 28rpx; border-radius: 14rpx; padding: 23rpx 32rpx; background: #ed8a53; color: #20221b; font-size: 25rpx; font-weight: 750; min-height: 82rpx; }
.primary-button[disabled] { background: #ed8a53; color: #20221b; }
.button-arrow { font-size: 34rpx; line-height: 1; }
.text-button { display: inline-flex; align-items: center; justify-content: center; gap: 12rpx; font-size: 23rpx; color: #b9bfae; padding: 12rpx 0; }
.hero-footnote { display: flex; align-items: center; gap: 18rpx; font-size: 19rpx; color: #858d79; margin-top: 30rpx; }
.mini-avatars { display: flex; padding-left: 6rpx; }
.mini-avatars view { width: 36rpx; height: 36rpx; display: flex; justify-content: center; align-items: center; border-radius: 50%; background: #c3d48d; font-size: 16rpx; color: #363c26; border: 3rpx solid #141612; margin-left: -6rpx; }
.mini-avatars view:nth-child(2) { background: #e5ac91; }.mini-avatars view:nth-child(3) { background: #afa1ca; }.mini-avatars view:nth-child(4) { background: #ece2bf; }
.hero-visual { position: relative; height: 340rpx; margin: 10rpx 0 -18rpx; }
.hero-art { width: 100%; height: 100%; position: relative; z-index: 1; }
.hero-orbit { position: absolute; width: 76%; height: 84%; border: 1rpx solid #454b334d; border-radius: 50%; left: 13%; top: 3%; transform: rotate(-23deg); }
.orbit-two { width: 87%; height: 72%; left: 4%; top: 15%; transform: rotate(19deg); }
.hero-sticker { position: absolute; z-index: 2; right: 2%; top: 11%; transform: rotate(9deg); background: #d4e78f; color: #303726; padding: 17rpx 22rpx; border-radius: 10rpx; font-size: 20rpx; line-height: 1.6; box-shadow: 0 8rpx 0 #a3b16c; }
.hero-sticker text { display: block; font-size: 28rpx; font-weight: 800; }
.floating-plus { position: absolute; color: #d8e69d; font-size: 47rpx; z-index: 2; }.plus-one { top: 13%; left: 13%; transform: rotate(12deg); }.plus-two { bottom: 18%; right: 13%; }
.hero-visual-label { position: absolute; bottom: 1%; left: 28%; font-size: 13rpx; letter-spacing: 3rpx; color: #747d65; }
.players-strip { display: flex; align-items: center; justify-content: space-between; gap: 14rpx; padding: 25rpx 27rpx; background: #20241a; border: 1rpx solid #373f29; border-radius: 18rpx; }
.players-strip-left { display: flex; align-items: center; gap: 18rpx; }.people-icon { font-size: 43rpx; color: #cfe58f; }.strip-title { font-size: 25rpx; font-weight: 650; }.player-number { font-size: 18rpx; font-weight: 400; color: #c9d79d; margin-left: 16rpx; }.strip-caption { display: block; font-size: 19rpx; color: #848f72; margin-top: 7rpx; }
.outline-button { border: 1rpx solid #525a42; padding: 18rpx 23rpx; border-radius: 11rpx; font-size: 21rpx; color: #d4dac9; display: inline-flex; justify-content: center; align-items: center; gap: 16rpx; flex-shrink: 0; }
.library-heading { display: flex; justify-content: space-between; align-items: flex-end; margin: 56rpx 0 27rpx; }.section-kicker { color: #858e77; font-size: 16rpx; letter-spacing: 3rpx; display: block; }.section-title { font-size: 34rpx; font-weight: 750; letter-spacing: 1rpx; margin-top: 12rpx; }.small-orange-dot { color: #f18a52; padding-left: 3rpx; }.library-count { display: none; color: #818978; font-size: 18rpx; }
.filter-bar { display: flex; justify-content: space-between; margin-bottom: 28rpx; }.filter-tabs { display: flex; gap: 9rpx; }.filter-tab { color: #969d89; padding: 14rpx 19rpx; border: 1rpx solid transparent; border-radius: 11rpx; font-size: 22rpx; display: flex; align-items: center; gap: 10rpx; }.filter-tab.selected { background: #e4eacb; color: #252b1d; font-weight: 650; }.filter-count { font-size: 16rpx; opacity: .65; }.filter-tip { display: none; }
.games-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22rpx; }
.game-card { background: #1e211b; border: 1rpx solid #35392d; border-radius: 21rpx; overflow: hidden; --art-color: #f1a676; --art-bg: #382b20; }.color-orange { --art-color: #f1a676; --art-bg: #382b20; }.color-pink { --art-color: #dca0ab; --art-bg: #36252c; }.color-lime { --art-color: #c9de8e; --art-bg: #2e3522; }.color-purple { --art-color: #bdabdb; --art-bg: #302b3b; }.color-blue { --art-color: #a1c4cd; --art-bg: #243338; }.color-yellow { --art-color: #dfce82; --art-bg: #353224; }
.card-visual { position: relative; width: 100%; height: 212rpx; display: block; background: var(--art-bg); overflow: hidden; text-align: left; }.card-art-grid { position: absolute; inset: 0; background-image: linear-gradient(#ffffff04 1px, transparent 1px), linear-gradient(90deg, #ffffff04 1px, transparent 1px); background-size: 33rpx 33rpx; mask-image: linear-gradient(110deg, #000, transparent); }.game-tag { display: inline-flex; align-items: center; gap: 6rpx; position: absolute; top: 20rpx; left: 20rpx; color: var(--art-color); font-size: 17rpx; padding: 6rpx 11rpx; background: #11130f4d; border: 1rpx solid #ffffff0a; border-radius: 6rpx; }.tag-dot { width: 5rpx; height: 5rpx; border-radius: 50%; background: var(--art-color); }.art-number { position: absolute; font-size: 82rpx; font-weight: 800; color: #ffffff07; left: 18rpx; bottom: 14rpx; }.card-art { width: 222rpx; height: 189rpx; position: absolute; top: 30rpx; right: -3rpx; }.card-spark { position: absolute; top: 78rpx; left: 35rpx; color: var(--art-color); font-size: 32rpx; opacity: .6; }
.card-content { padding: 19rpx 19rpx 14rpx; }.card-title-line { display: flex; align-items: center; justify-content: space-between; }.card-title { font-size: 29rpx; font-weight: 750; text-align: left; }.favorite-button { font-size: 38rpx; line-height: 1.2; color: #818a75; padding-left: 8rpx; }.favorite-button.is-favorite { color: #ec987d; }.card-description { color: #8e9782; font-size: 19rpx; display: block; line-height: 1.6; margin: 9rpx 0 16rpx; min-height: 60rpx; }.card-bottom { border-top: 1rpx solid #35392c; padding-top: 12rpx; display: flex; align-items: center; justify-content: space-between; gap: 4rpx; }.game-meta { display: flex; align-items: center; gap: 7rpx; font-size: 16rpx; color: #a6ad98; white-space: nowrap; }.meta-divider { color: #515c45; }.card-play { background: #31372a; color: #dce4cb; border-radius: 50%; width: 41rpx; height: 41rpx; display: flex; align-items: center; justify-content: center; font-size: 25rpx; flex-shrink: 0; }
.random-banner { display: flex; align-items: center; gap: 18rpx; margin-top: 32rpx; border: 1rpx dashed #464d36; border-radius: 17rpx; padding: 28rpx 22rpx; background: #1b1f15; }.banner-symbol { color: #d2e48e; font-size: 46rpx; }.banner-copy { flex: 1; }.banner-copy view { font-size: 24rpx; font-weight: 650; }.banner-copy text { font-size: 18rpx; color: #899578; display: block; margin-top: 9rpx; }.random-banner .outline-button { border: none; color: #cedd9b; padding: 10rpx 0; }
.hall-footer { display: flex; flex-direction: column; gap: 20rpx; align-items: center; padding: 48rpx 0 10rpx; color: #727c63; font-size: 18rpx; }.footer-brand { color: #9aab7b; font-size: 19rpx; font-weight: 800; letter-spacing: 4rpx; }.footer-brand .orange { font-size: 25rpx; margin-left: 13rpx; }.footer-note { font-size: 13rpx; letter-spacing: 2rpx; opacity: .6; }
.mobile-nav { position: fixed; bottom: 0; left: 0; right: 0; display: flex; padding: 16rpx 10rpx calc(16rpx + env(safe-area-inset-bottom)); background: #191c16f5; border-top: 1rpx solid #343a2b; z-index: 20; }.mobile-nav button { flex: 1; color: #7f8972; font-size: 18rpx; }.mobile-nav button>text { font-size: 36rpx; display: block; margin-bottom: 5rpx; }.mobile-nav button.active { color: #eaaa78; }
.section-intro { padding: 62rpx 0 40rpx; }.page-title { font-size: 49rpx; line-height: 1.4; font-weight: 800; letter-spacing: -1rpx; margin: 17rpx 0 15rpx; }.section-intro .muted { font-size: 25rpx; }.empty-state { padding: 64rpx 22rpx; text-align: center; grid-column: 1 / -1; }.empty-symbol { font-size: 100rpx; color: #c8da9a; display: block; }.empty-state .muted { display: block; margin: 20rpx auto 30rpx; max-width: 500rpx; font-size: 24rpx; }
.howto-steps { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16rpx; margin: 10rpx 0 35rpx; }.howto-steps>view { padding: 24rpx 18rpx; background: #20251a; border: 1rpx solid #38432a; border-radius: 15rpx; }.step-no { color: #cce18c; font-size: 33rpx; font-weight: 800; }.howto-steps>view>view { font-size: 25rpx; margin: 14rpx 0 10rpx; font-weight: 650; }.howto-steps>view>text:last-child { font-size: 20rpx; color: #909b80; line-height: 1.7; }.guide-grid { display: grid; grid-template-columns: 1fr; gap: 22rpx; }.guide-card { background: #20231c; padding: 28rpx; border: 1rpx solid #353e2a; border-radius: 20rpx; }.guide-card-top { display: flex; align-items: center; gap: 20rpx; margin-bottom: 20rpx; }.guide-card-top image { width: 100rpx; height: 100rpx; }.guide-card-top .muted { font-size: 21rpx; }.guide-rule { line-height: 1.95; font-size: 25rpx; color: #b8c1aa; display: block; }.guide-card .text-button { margin-top: 17rpx; }.gentle-note { font-size: 23rpx; color: #a7b88a; background: #252e1c; padding: 25rpx 27rpx; border-radius: 12rpx; line-height: 1.8; margin: 30rpx 0; }
.stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); margin-bottom: 35rpx; gap: 16rpx; }.stats-grid>view { border: 1rpx solid #3a422e; border-radius: 18rpx; background: #20251a; padding: 32rpx 16rpx; text-align: center; }.stats-grid>view>text { color: #d9e5b5; font-size: 62rpx; font-weight: 800; }.stats-grid>view>view { color: #939f83; font-size: 22rpx; margin-top: 9rpx; }.settings-list { background: #20241b; border: 1rpx solid #37412b; border-radius: 20rpx; overflow: hidden; }.setting-row { display: flex; width: 100%; justify-content: space-between; align-items: center; padding: 31rpx 27rpx; border-bottom: 1rpx solid #333c29; text-align: left; }.setting-row:last-child { border-bottom: none; }.setting-row>view>view { font-size: 27rpx; font-weight: 650; }.setting-row>view>text { font-size: 21rpx; color: #8b987a; display: block; margin-top: 9rpx; }.switch { height: 42rpx; width: 73rpx; background: #47503c; border-radius: 30rpx; padding: 5rpx; flex-shrink: 0; }.switch view { width: 32rpx; height: 32rpx; background: #e4e9d9; border-radius: 50%; transition: transform .2s; }.switch.on { background: #b8ce7d; }.switch.on view { transform: translateX(31rpx); background: #29321d; }.about-club { display: flex; align-items: center; flex-direction: column; gap: 22rpx; padding: 70rpx 0; font-size: 23rpx; color: #aab49a; }.about-club>text { font-size: 21rpx; color: #78886a; }
.game-breadcrumb { display: flex; justify-content: space-between; align-items: center; margin-top: 28rpx; }.game-breadcrumb>view { display: flex; gap: 24rpx; }.game-page-heading { text-align: center; margin: 37rpx 0 33rpx; }.game-page-heading .page-title { font-size: 55rpx; }.game-page-heading .muted { font-size: 24rpx; }.setup-panel, .play-panel { max-width: 1050rpx; margin: 0 auto; background: #20241b; border: 1rpx solid #3b442e; border-radius: 26rpx; padding: 35rpx; }.setup-art { width: 300rpx; height: 220rpx; margin: -3rpx auto 10rpx; }.setup-label { font-size: 30rpx; font-weight: 700; margin-bottom: 18rpx; }.setup-rule { display: block; color: #a4b092; line-height: 1.9; font-size: 24rpx; }.setup-players { display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 26rpx 0; margin: 12rpx 0 20rpx; text-align: left; border-bottom: 1rpx solid #3b442e; }.setup-players>view>text { font-size: 21rpx; }.setup-players>view>view { margin-top: 8rpx; font-size: 31rpx; }.setup-players>.orange { font-size: 23rpx; }.full-button { width: 100%; }.setup-note { display: block; text-align: center; margin-top: 21rpx; font-size: 20rpx; color: #7d8d6b; }.dice-options { display: flex; align-items: center; justify-content: space-between; margin: 16rpx 0 30rpx; font-size: 23rpx; }.dice-options>view { display: flex; gap: 12rpx; }.chip { border: 1rpx solid #4c583b; border-radius: 9rpx; padding: 12rpx 20rpx; color: #a2af8f; font-size: 22rpx; }.chip.selected { background: #d2e391; color: #303a1e; border-color: #d2e391; }.game-bottom-note { text-align: center; color: #606e50; font-size: 16rpx; letter-spacing: 2rpx; margin: 35rpx 0; }.game-bottom-note text { display: block; margin-top: 10rpx; font-size: 19rpx; letter-spacing: 1rpx; }
.play-panel { min-height: 560rpx; }.round-label { display: flex; align-items: center; justify-content: space-between; border-bottom: 1rpx solid #3b452d; padding-bottom: 24rpx; margin-bottom: 20rpx; color: #8c9b78; font-size: 22rpx; }.round-label>text:first-child { letter-spacing: 2rpx; font-size: 18rpx; }.dice-game, .truth-game, .wheel-game, .reveal-game, .king-game, .discussion-game, .elimination-game, .seven-game { text-align: center; }.dice-total { padding: 24rpx 0; }.dice-total>text { font-size: 105rpx; font-weight: 800; color: #f0bb86; line-height: 1.15; }.dice-total>view { font-size: 22rpx; color: #9fac8b; margin-top: 12rpx; }.dice-tray { display: flex; gap: 14rpx; justify-content: center; flex-wrap: wrap; padding: 33rpx 0; }.die { position: relative; width: 96rpx; height: 96rpx; background: #f2e9d3; border: 4rpx solid #d4c9ad; border-radius: 18rpx; display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 1fr); padding: 13rpx; gap: 4rpx; box-shadow: 0 8rpx 0 #afa58d, 0 12rpx 20rpx #0003; transition: border-color .2s; }.pip { background: #34392b; width: 13rpx; height: 13rpx; border-radius: 50%; align-self: center; justify-self: center; }.pip-1 { grid-area: 1 / 1; }.pip-3 { grid-area: 1 / 3; }.pip-4 { grid-area: 2 / 1; }.pip-5 { grid-area: 2 / 2; }.pip-6 { grid-area: 2 / 3; }.pip-7 { grid-area: 3 / 1; }.pip-9 { grid-area: 3 / 3; }.die.held { border-color: #d9e993; background: #d9e993; box-shadow: 0 8rpx 0 #88974f, 0 0 0 4rpx #d9e92a; }.held-label { position: absolute; font-size: 16rpx; white-space: nowrap; color: #d6e799; bottom: -43rpx; left: 0; width: 100%; }.play-hint { font-size: 21rpx; display: block; margin: 27rpx 0 0; }.play-actions { display: flex; align-items: center; justify-content: center; gap: 20rpx; margin: 33rpx 0 22rpx; flex-wrap: wrap; }.is-rolling .die:not(.held) { animation: dice-shake .15s infinite alternate; }.is-rolling .die:nth-child(2) { animation-delay: -.08s; }
@keyframes dice-shake { from { transform: translateY(-8rpx) rotate(-12deg); } to { transform: translateY(5rpx) rotate(14deg); } }
.choice-title { font-size: 36rpx; font-weight: 750; line-height: 1.6; margin: 32rpx 0 15rpx; }.truth-game .muted, .reveal-game>.muted, .king-game>.muted, .discussion-game>.muted { font-size: 24rpx; }.truth-choices { display: grid; grid-template-columns: 1fr 1fr; gap: 20rpx; padding: 36rpx 0 20rpx; }.truth-choice { padding: 36rpx 12rpx; border-radius: 20rpx; border: 1rpx solid #74545c; background: #3b2b30; color: #e3adb8; }.truth-choice>text:first-child { font-size: 87rpx; line-height: 1.2; display: block; }.truth-choice>view { font-weight: 750; font-size: 32rpx; margin: 20rpx 0 15rpx; }.truth-choice>.choice-en { display: block; font-size: 13rpx; letter-spacing: 2rpx; opacity: .7; }.dare-choice { border-color: #666d40; background: #343b25; color: #d3e695; }.prompt-panel { padding: 35rpx 5rpx 15rpx; }.prompt-tag { display: inline-block; padding: 10rpx 23rpx; color: #e1aab9; background: #42323a; border-radius: 40rpx; font-size: 24rpx; }.prompt-text { font-size: 39rpx; line-height: 1.8; font-weight: 650; margin: 47rpx 0; }
.wheel-wrap { position: relative; width: 470rpx; height: 470rpx; margin: 42rpx auto 27rpx; }.wheel-disc { width: 100%; height: 100%; position: relative; border: 9rpx solid #e3e5c9; border-radius: 50%; box-shadow: 0 13rpx 0 #75845a, 0 20rpx 35rpx #0004; }.wheel-disc>image { width: 100%; height: 100%; border-radius: 50%; }.wheel-name { position: absolute; width: 130rpx; transform: translate(-50%, -50%); text-align: center; font-size: 21rpx; color: #26351f; font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }.wheel-pointer { z-index: 5; position: absolute; top: -16rpx; left: calc(50% - 19rpx); width: 0; height: 0; border-left: 19rpx solid transparent; border-right: 19rpx solid transparent; border-top: 52rpx solid #ee915c; filter: drop-shadow(0 3rpx 1rpx #0004); }.wheel-center { position: absolute; width: 76rpx; height: 76rpx; background: #f3ebd2; border: 6rpx solid #cbd6a3; border-radius: 50%; display: flex; justify-content: center; align-items: center; left: calc(50% - 38rpx); top: calc(50% - 38rpx); color: #353e26; font-size: 46rpx; box-shadow: 0 5rpx 10rpx #0002; }.wheel-result { font-size: 31rpx; font-weight: 650; color: #dce7b7; padding: 25rpx 0; }.wheel-game>.primary-button { width: 75%; margin: 0 auto 15rpx; }
.reveal-progress { display: inline-block; margin-top: 20rpx; color: #b4c58e; font-size: 21rpx; letter-spacing: 2rpx; }.secret-card { width: 100%; min-height: 290rpx; display: flex; flex-direction: column; justify-content: center; align-items: center; border: 1rpx dashed #748653; border-radius: 22rpx; margin: 34rpx 0; background: repeating-linear-gradient(45deg, #2b3421, #2b3421 15rpx, #29321f 15rpx, #29321f 30rpx); }.secret-lock { font-size: 85rpx; color: #cadc91; }.secret-card>view { font-size: 31rpx; font-weight: 700; margin: 15rpx 0; }.secret-card>text:last-child { font-size: 15rpx; letter-spacing: 3rpx; color: #7f945d; }.secret-card.revealed { background: #e0e8bb; border-color: #e0e8bb; color: #29351a; }.secret-card>.secret-overline { font-size: 22rpx; color: #667747; }.secret-card>.secret-word { font-size: 57rpx; margin: 25rpx 0; }.secret-card>.secret-caption { font-size: 21rpx; color: #677b46; letter-spacing: 0; }.reveal-game>.primary-button { width: 100%; }.in-game-art { width: 245rpx; height: 210rpx; margin: 0 auto; }.command-card { background: #333c27; border: 1rpx solid #5b6b41; border-radius: 16rpx; padding: 30rpx; font-size: 32rpx; line-height: 1.8; color: #deebbf; margin: 30rpx 0; }.command-placeholder { color: #8f9e7c; font-size: 25rpx; line-height: 1.9; margin: 30rpx 0; }.command-placeholder text { display: block; }.vote-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16rpx; margin: 35rpx 0; }.vote-player { display: flex; align-items: center; gap: 12rpx; padding: 20rpx 14rpx; background: #2a3321; border: 1rpx solid #455436; border-radius: 13rpx; text-align: left; font-size: 24rpx; }.player-avatar { display: flex; align-items: center; justify-content: center; width: 43rpx; height: 43rpx; border-radius: 50%; color: #cedcaa; background: #445333; font-size: 20rpx; flex-shrink: 0; }.vote-player>text { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }.vote-check { margin-left: auto; color: #839b65; }.vote-player.voted { border-color: #d0e18d; background: #394529; }.vote-player.voted .vote-check { color: #d6e9a1; }.result-symbol { font-size: 110rpx; color: #d9e8a4; display: block; padding-top: 30rpx; }.elimination-role { color: #b5c39d; font-size: 28rpx; margin: 20rpx 0 30rpx; }.elimination-game>.primary-button { margin-top: 35rpx; }.final-role-list { padding: 10rpx 0; }.final-role-list>view { display: flex; justify-content: space-between; gap: 20rpx; padding: 17rpx 8rpx; border-bottom: 1rpx solid #3e4b2d; font-size: 24rpx; color: #b8c8a1; }.final-role-list>view>text:first-child { text-align: left; width: 40%; }.seven-stats { display: flex; justify-content: space-between; color: #92a47b; font-size: 21rpx; padding: 20rpx 0 0; }.big-number { font-size: 180rpx; font-weight: 800; color: #bed7e2; line-height: 1.4; }.seven-feedback { padding-top: 25rpx; font-size: 25rpx; line-height: 1.9; color: #c9dd9d; }.seven-feedback.incorrect { color: #e8ad90; }.seven-feedback>.primary-button { margin-top: 26rpx; }
.modal-overlay { position: fixed; inset: 0; background: #060904c9; z-index: 50; display: flex; justify-content: center; align-items: flex-end; padding-top: 40rpx; }.modal-sheet { width: 100%; max-width: 780rpx; background: #23291d; border: 1rpx solid #4a5639; border-radius: 28rpx 28rpx 0 0; padding: 35rpx 34rpx calc(35rpx + env(safe-area-inset-bottom)); max-height: 90vh; overflow-y: auto; }.modal-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16rpx; gap: 20rpx; }.modal-title { font-size: 35rpx; font-weight: 750; margin-top: 12rpx; }.close-button { width: 50rpx; height: 50rpx; border-radius: 50%; background: #343e2a; color: #b1c09d; font-size: 34rpx; line-height: 48rpx; flex-shrink: 0; }.modal-sheet>.muted { font-size: 22rpx; }.player-editor { margin: 28rpx 0 15rpx; }.player-edit-row { display: flex; align-items: center; gap: 18rpx; border-bottom: 1rpx solid #3b492e; padding: 17rpx 0; }.player-edit-row>input { height: 50rpx; flex: 1; min-width: 0; font-size: 26rpx; }.remove-player { color: #adbd99; background: #35432a; border-radius: 9rpx; width: 43rpx; height: 43rpx; font-size: 30rpx; }.add-player { color: #d1e7a0; border: 1rpx dashed #637d45; border-radius: 12rpx; width: 100%; margin: 20rpx 0 28rpx; padding: 21rpx 16rpx; font-size: 24rpx; }.add-player>text { color: #7f9764; font-size: 19rpx; margin-left: 22rpx; }.rules-art { width: 230rpx; height: 180rpx; margin: 10rpx auto; }.rules-sheet .gentle-note { margin: 25rpx 0; }
@media (prefers-reduced-motion: reduce) { .is-rolling .die { animation: none; } }
.prompt-wheel-game { text-align: center; }
.prompt-filter-tabs { display: flex; justify-content: center; flex-wrap: wrap; gap: 8rpx; padding: 5rpx 0 10rpx; }
.prompt-filter { padding: 12rpx 13rpx; font-size: 20rpx; color: #9aa98a; border: 1rpx solid #3f4c31; border-radius: 9rpx; }
.prompt-filter.selected { background: #d7e99f; color: #303d1e; border-color: #d7e99f; font-weight: 650; }
.prompt-filter[disabled] { opacity: .6; }
.prompt-wheel-wrap { margin-top: 32rpx; }
.prompt-wheel-name { width: 140rpx; font-size: 17rpx; }
.condition-result { margin: 36rpx 0 25rpx; padding: 24rpx 27rpx; background: #d9e6ae; color: #2e3c1e; border: 1rpx solid #edf4cf; border-radius: 18rpx; text-align: left; }
.condition-result-top { display: flex; align-items: center; justify-content: space-between; font-size: 18rpx; color: #697d46; letter-spacing: 2rpx; }
.condition-text { margin: 19rpx 0 13rpx; line-height: 1.6; font-size: 36rpx; font-weight: 800; }
.condition-instruction { display: block; font-size: 21rpx; color: #6a7e48; }
.condition-placeholder { padding: 25rpx 0; }
.condition-placeholder>view { font-size: 27rpx; font-weight: 600; color: #d8e4bc; line-height: 1.7; }
.condition-placeholder>text { font-size: 20rpx; color: #83966a; display: block; margin-top: 12rpx; }
.prompt-wheel-actions { display: flex; flex-direction: column; align-items: center; gap: 13rpx; }
.prompt-wheel-actions>.primary-button { min-width: 75%; }
.candidate-toggle { display: flex; justify-content: space-between; align-items: center; color: #c3d7a0; font-size: 21rpx; width: 100%; border-top: 1rpx solid #435033; margin-top: 18rpx; padding: 23rpx 0; text-align: left; }
.candidate-toggle>text { color: #7e9368; font-size: 18rpx; }
.candidate-list { text-align: left; display: grid; grid-template-columns: 1fr; gap: 9rpx; }
.candidate-list>view { display: flex; align-items: center; gap: 15rpx; border-radius: 9rpx; padding: 15rpx; background: #293420; color: #aabf90; font-size: 22rpx; line-height: 1.7; border: 1rpx solid transparent; }
.candidate-list>view.chosen { border-color: #a8bf79; color: #dcecbd; background: #3b4b2d; }
.candidate-index { color: #788d5e; font-size: 19rpx; }
.prompt-history { margin-top: 17rpx; text-align: left; border-top: 1rpx solid #3b4a2e; padding-top: 20rpx; }
.history-title { display: flex; justify-content: space-between; color: #8fa475; font-size: 20rpx; margin-bottom: 12rpx; }
.history-title>text { font-size: 17rpx; color: #62794a; }
.prompt-history>view:not(.history-title) { display: flex; align-items: baseline; gap: 17rpx; color: #b7c99e; font-size: 21rpx; line-height: 1.8; padding: 9rpx 0; }
.history-id { width: 65rpx; flex-shrink: 0; color: #6f8854; font-size: 18rpx; }
.prompt-pool-empty { padding: 60rpx 0; }
.prompt-pool-empty>text:first-child { font-size: 90rpx; color: #d1e29b; }
.prompt-pool-empty>view { font-size: 31rpx; margin: 20rpx 0; }
.prompt-pool-empty>.muted { font-size: 23rpx; }

/* Street poster covers: native and browser share this art direction. */
.street-club { background: #11120f; }
.street-club .brand-symbol { transform: rotate(-13deg); gap: 3rpx; }
.street-club .brand-symbol view { border-radius: 1rpx; background: #d7fa38; }
.street-club .brand-symbol view:nth-child(2) { background: #ff503c; }
.street-club .brand-symbol view:nth-child(3) { background: #eee9d8; }
.street-club .brand-name { font-weight: 900; font-style: italic; letter-spacing: 2rpx; }
.street-club .brand-en { letter-spacing: 4rpx; font-weight: 650; }
.street-club .orange, .street-club .small-orange-dot { color: #d7fa38; }
.street-club .hero-title { font-weight: 900; font-style: italic; letter-spacing: -3rpx; }
.street-club .hero-title-accent { color: #d7fa38; }
.street-club .period { color: #ff503c; }
.street-club .eyebrow { font-size: 20rpx; letter-spacing: 3rpx; }
.street-club .live-dot { background: #d7fa38; box-shadow: none; border-radius: 1rpx; transform: rotate(-15deg); }
.street-club .hero-visual { overflow: hidden; border-radius: 2rpx; border: 1rpx solid #45483a; transform: rotate(-2deg); box-shadow: 9rpx 9rpx 0 #d7fa38; margin-bottom: 30rpx; }
.street-club .hero-art { object-fit: cover; transform: none; }
.street-club .hero-orbit, .street-club .floating-plus, .street-club .hero-visual-label { display: none; }
.street-club .hero-sticker { color: #16190f; background: #d7fa38; border-radius: 0; font-size: 17rpx; padding: 9rpx 15rpx; top: auto; bottom: 17rpx; right: 14rpx; transform: rotate(5deg); box-shadow: 3rpx 4rpx 0 #11120f; }
.street-club .hero-sticker text { font-size: 23rpx; font-weight: 900; }
.street-club .primary-button { border-radius: 4rpx; background: #d7fa38; color: #181b10; font-weight: 850; border: 1rpx solid #e0ff69; box-shadow: 3rpx 4rpx 0 #020302; }
.street-club .primary-button[disabled] { background: #a9b96a; color: #202819; }
.street-club .outline-button { border-radius: 4rpx; border-color: #646d4f; }
.street-club .players-strip { background: #1a1d14; border: 1rpx solid #484f35; border-radius: 4rpx; box-shadow: inset 6rpx 0 0 #d7fa38; }
.street-club .people-icon { color: #d7fa38; }
.street-club .filter-tab { border-radius: 3rpx; font-weight: 650; }
.street-club .filter-tab.selected { background: #d7fa38; color: #202515; box-shadow: 3rpx 3rpx 0 #020302; }
.street-club .game-card { border-radius: 5rpx; border-color: #393d30; background: #1a1c16; }
.street-club .card-visual { height: 250rpx; background: #11120f; border-bottom: 1rpx solid #474d37; }
.street-club .card-art { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transform: none; }
.street-club .card-art-grid, .street-club .art-number, .street-club .card-spark { display: none; }
.street-club .game-tag { left: 15rpx; top: 14rpx; z-index: 2; font-size: 16rpx; background: #eee9d8; color: #171c11; border: 1rpx solid #11120f; border-radius: 0; padding: 5rpx 9rpx; transform: rotate(-3deg); font-weight: 800; box-shadow: 2rpx 3rpx 0 #0008; }
.street-club .tag-dot { background: #ff503c; border-radius: 0; }
.street-club .card-title { font-weight: 850; letter-spacing: -.5rpx; }
.street-club .card-play { color: #14180f; background: #d7fa38; border-radius: 3rpx; font-weight: 800; }
.street-club .card-bottom { border-color: #373e29; }
.street-club .random-banner { border-radius: 3rpx; border-color: #656f45; background: #1b2013; }
.street-club .banner-symbol { color: #d7fa38; }
.street-club .section-kicker { letter-spacing: 4rpx; font-weight: 650; }
.street-club .section-title { font-weight: 850; }
.street-club .play-panel, .street-club .setup-panel { border-radius: 9rpx; background: #1b2016; }
.street-club .setup-art { border: 1rpx solid #4a5139; transform: rotate(-3deg); background: #11120f; }
.street-club .chip, .street-club .prompt-filter { border-radius: 3rpx; }
.street-club .chip.selected, .street-club .prompt-filter.selected { background: #d7fa38; border-color: #d7fa38; }
.street-club .mobile-nav { background: #13170ff5; }
.street-club .mobile-nav button.active { color: #d7fa38; }

/* Original crew photos are framed in the UI; source JPEGs remain unchanged. */
.hero-photo-wall { position: relative; margin: 45rpx 0 25rpx; padding: 0 15rpx; }
.photo-wall-heading { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12rpx; color: #a8b38e; font-size: 14rpx; letter-spacing: 3rpx; font-weight: 700; }
.photo-wall-mark { color: #ff725f; font-size: 35rpx; }
.home-photo-pair { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: start; gap: 23rpx; padding: 18rpx 0 28rpx; }
.home-photo-card { position: relative; width: 100%; min-width: 0; padding: 10rpx 10rpx 14rpx; background: #e9e4d4; color: #252b1d; text-align: left; box-shadow: 5rpx 8rpx 0 #030403; border: 1rpx solid #f6f1de; transform: rotate(-5deg); }
.home-photo-night { transform: rotate(5deg); margin-top: 78rpx; }
.photo-tape { position: absolute; z-index: 2; left: calc(50% - 45rpx); top: -12rpx; width: 90rpx; height: 27rpx; background: #d7fa38c9; transform: rotate(7deg); border-left: 4rpx dotted #11120f55; border-right: 4rpx dotted #11120f55; }
.home-photo-night .photo-tape { background: #ff725fcc; transform: rotate(-9deg); }
.home-photo-window { position: relative; height: 0; width: 100%; overflow: hidden; background: #242c22; }
.photo-window-beach { padding-bottom: 75%; }
.photo-window-night { padding-bottom: 56.25%; }
.home-photo-image { position: absolute; left: 0; width: 100%; max-width: none; display: block; object-fit: fill; }
.photo-image-beach { height: 289.166667%; top: -161.111111%; }
.photo-image-night { height: 350.946502%; top: -143.209877%; }
.home-photo-caption { padding: 13rpx 3rpx 0; }
.home-photo-caption>text { color: #687355; letter-spacing: 3rpx; font-size: 13rpx; font-weight: 850; display: block; }
.home-photo-caption>view { display: flex; justify-content: space-between; align-items: center; font-size: 25rpx; font-weight: 850; margin-top: 6rpx; }
.home-photo-caption>view>text { color: #535f3b; font-size: 26rpx; }
.photo-wall-footer { display: flex; align-items: center; justify-content: space-between; gap: 12rpx; color: #879575; font-size: 17rpx; }
.photo-wall-footer>text:last-child { color: #b5cd88; font-size: 15rpx; white-space: nowrap; }
.photo-viewer-overlay { position: fixed; inset: 0; z-index: 65; background: #090d07ef; display: flex; align-items: center; justify-content: center; padding: 40rpx 30rpx; }
.photo-viewer-panel { width: 100%; max-width: 1050rpx; }
.photo-viewer-heading { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25rpx; }
.photo-viewer-heading>view>view { color: #e6edd6; font-size: 35rpx; font-weight: 750; margin-top: 12rpx; }
.photo-viewer-paper { background: #e9e4d4; padding: 12rpx; border: 1rpx solid #f5f0db; }
.photo-viewer-note { color: #adbfa0; text-align: center; font-size: 24rpx; margin: 24rpx 0; }
.photo-viewer-controls { display: flex; justify-content: space-between; align-items: center; gap: 20rpx; }
.photo-viewer-controls>text { color: #829671; font-size: 21rpx; }
.setup-more-rules { display: none; }

/* Five-dice cup: concealed shake, then a separate physical lift to reveal. */
.cup-mode .dice-total { padding: 9rpx 0 0; }
.cup-mode .dice-total>text { font-size: 70rpx; color: #d9f29a; }
.cup-mode .dice-total>view { font-size: 22rpx; margin-top: 6rpx; }
.cup-stage { width: 100%; max-width: 570rpx; height: 415rpx; margin: 0 auto; position: relative; }
.table-halo { position: absolute; width: 470rpx; height: 260rpx; border-radius: 50%; left: calc(50% - 235rpx); bottom: 20rpx; background: radial-gradient(ellipse, #a7c65014, transparent 70%); }
.dice-table { position: absolute; width: 510rpx; height: 220rpx; border-radius: 50%; left: calc(50% - 255rpx); bottom: 32rpx; background: radial-gradient(ellipse at 50% 38%, #34482a, #1f3019 68%, #151e11 70%); border: 7rpx solid #141b0f; box-shadow: 0 0 0 2rpx #6e7b52, 0 15rpx 0 #080d05, 0 25rpx 25rpx #0006; }
.table-inner-ring { position: absolute; inset: 11rpx; border: 1rpx dashed #81966360; border-radius: 50%; }
.table-wordmark { position: absolute; bottom: 20rpx; left: 0; right: 0; color: #8eac68; letter-spacing: 3rpx; font-size: 13rpx; font-weight: 650; }
.dice-cup { position: absolute; z-index: 4; width: 344rpx; height: 398rpx; left: calc(50% - 172rpx); bottom: 53rpx; padding: 0; transform-origin: 50% 85%; transition: opacity .2s; }
.dice-cup[disabled] { opacity: 1; }
.dice-cup>image { height: 100%; width: 100%; object-fit: contain; }
.cup-touch-label { position: absolute; bottom: 100rpx; left: 0; width: 100%; font-size: 12rpx; font-weight: 750; color: #bad18b; letter-spacing: 2rpx; transform: rotate(-6deg); }
.cup-ready-label { position: absolute; top: 2rpx; left: 0; right: 0; z-index: 6; display: flex; justify-content: center; align-items: center; gap: 10rpx; color: #d8efb3; font-size: 21rpx; }
.cup-ready-label>.live-dot { width: 7rpx; height: 7rpx; }
.cup-dice-layout { position: absolute; z-index: 2; width: 100%; height: 100%; left: 0; top: 0; }
.table-die { position: absolute; width: 77rpx; height: 77rpx; border-radius: 13rpx; padding: 9rpx; gap: 2rpx; border-width: 3rpx; }
.table-die .pip { width: 11rpx; height: 11rpx; }
.table-die-0 { left: calc(50% - 105rpx); top: 180rpx; transform: rotate(-12deg); }
.table-die-1 { left: calc(50% + 28rpx); top: 175rpx; transform: rotate(11deg); }
.table-die-2 { left: calc(50% - 40rpx); top: 235rpx; transform: rotate(-4deg); }
.table-die-3 { left: calc(50% - 130rpx); top: 287rpx; transform: rotate(14deg); }
.table-die-4 { left: calc(50% + 53rpx); top: 284rpx; transform: rotate(-17deg); }
.table-die .held-label { bottom: -28rpx; font-size: 13rpx; }
.cup-shaking .dice-cup { animation: cup-shake .13s linear infinite; }
.cup-shaking .dice-table { animation: table-rattle .13s ease-in-out infinite alternate; }
.cup-opening .dice-cup { animation: cup-lift .56s cubic-bezier(.18,.7,.23,1) forwards; pointer-events: none; }
.cup-covering .dice-cup { animation: cup-cover .46s cubic-bezier(.18,.7,.23,1) forwards; pointer-events: none; }
.cup-open .dice-cup { opacity: 0; pointer-events: none; transform: translate(80rpx, -200rpx) rotate(22deg); }
.cup-opening .cup-dice-layout { animation: dice-appear .32s ease-out; }
.cup-sound-lines { position: absolute; top: 135rpx; left: 0; width: 100%; display: flex; justify-content: space-between; padding: 0 54rpx; color: #d7fa38; font-size: 44rpx; font-weight: 800; opacity: .8; }
.cup-sound-lines>text:first-child { transform: rotate(-20deg); }
.cup-sound-lines>text:last-child { transform: rotate(22deg); }
.cup-mode .play-hint { margin-top: 10rpx; font-size: 20rpx; }
.cup-mode .play-actions { margin-top: 26rpx; }
.cup-toggle-button { color: #d7fa38; border-color: #90a744; }
@keyframes cup-shake { 0%, 100% { transform: translate(-12rpx, -15rpx) rotate(-10deg); } 25% { transform: translate(13rpx, -28rpx) rotate(9deg); } 50% { transform: translate(18rpx, -10rpx) rotate(13deg); } 75% { transform: translate(-14rpx, -26rpx) rotate(-8deg); } }
@keyframes table-rattle { from { transform: translateX(-1rpx); } to { transform: translateX(1rpx); } }
@keyframes cup-lift { 0% { transform: translate(0, 0) rotate(0); opacity: 1; } 55% { transform: translate(24rpx, -130rpx) rotate(10deg); opacity: 1; } 100% { transform: translate(80rpx, -230rpx) rotate(25deg); opacity: 0; } }
@keyframes cup-cover { 0% { transform: translate(80rpx, -230rpx) rotate(25deg); opacity: 0; } 40% { transform: translate(24rpx, -130rpx) rotate(10deg); opacity: 1; } 100% { transform: translate(0, 0) rotate(0); opacity: 1; } }
@keyframes dice-appear { from { opacity: 0; } to { opacity: 1; } }
@media (prefers-reduced-motion: reduce) { .cup-shaking .dice-cup, .cup-shaking .dice-table, .cup-opening .dice-cup, .cup-covering .dice-cup, .cup-opening .cup-dice-layout { animation: none; } .cup-opening .dice-cup { opacity: 0; } }

.draw-game, .shark-game, .finger-game { text-align: center; }
.draw-setup-options { display: flex; align-items: center; justify-content: space-between; margin: 24rpx 0; font-size: 22rpx; gap: 12rpx; }
.draw-setup-options>view { display: flex; gap: 8rpx; }
.draw-setup-options .chip { padding: 12rpx 15rpx; }
.finger-setup-note { font-size: 24rpx; color: #cadbab; line-height: 1.8; padding: 24rpx 0; }
.draw-status { display: flex; align-items: center; justify-content: space-between; font-size: 23rpx; color: #a6b893; padding: 12rpx 0 20rpx; }
.draw-clock { font-size: 29rpx; color: #d7fa38; font-weight: 800; }
.draw-clock.urgent { color: #ff725f; }
.drawing-board-wrap { position: relative; background: #f3f0e4; border: 3rpx solid #d0d8b8; border-radius: 3rpx; overflow: hidden; }
.drawing-board { display: block; width: 100%; height: 530rpx; touch-action: none; }
.canvas-loading { position: absolute; left: 0; right: 0; top: 48%; color: #788669; font-size: 24rpx; pointer-events: none; }
.draw-tools { display: flex; justify-content: space-between; align-items: center; margin: 23rpx 0 16rpx; gap: 12rpx; }
.draw-palette { display: flex; gap: 14rpx; }
.draw-color { width: 38rpx; height: 38rpx; border: 3rpx solid #778464; border-radius: 50%; }
.draw-color.selected { outline: 3rpx solid #d7fa38; outline-offset: 4rpx; }
.draw-widths { display: flex; gap: 2rpx; background: #2b3620; border: 1rpx solid #485938; }
.draw-widths>button { padding: 10rpx 16rpx; font-size: 21rpx; color: #a3b48e; }
.draw-widths>button.selected { background: #d7fa38; color: #222b15; }
.draw-utilities { display: flex; justify-content: space-between; gap: 8rpx; padding: 8rpx 0 15rpx; border-bottom: 1rpx solid #3c4a2d; }
.draw-utilities>button { padding: 9rpx; font-size: 21rpx; color: #aebf97; }
.draw-result .choice-title { font-size: 35rpx; }
.draw-answer { font-size: 50rpx; color: #dbedae; font-weight: 800; margin: 25rpx 0; }
.draw-result>.muted { font-size: 23rpx; }
.score-list { margin: 25rpx 0 35rpx; }
.score-list>view { display: flex; justify-content: space-between; padding: 16rpx; border-bottom: 1rpx solid #3a482d; font-size: 24rpx; color: #b5c69b; }
.draw-game .rules-sheet { text-align: center; }
.draw-game .rules-sheet>.full-button { margin-top: 25rpx; }

.shark-remaining { color: #91a77b; font-size: 22rpx; padding: 8rpx 0; }
.shark-stage { width: 100%; max-width: 590rpx; height: 450rpx; margin: 0 auto; position: relative; }
.shark-head { position: absolute; width: 100%; height: 325rpx; top: -10rpx; left: 0; z-index: 3; pointer-events: none; transform-origin: 50% 20%; }
.shark-mouth { position: absolute; background: radial-gradient(ellipse at 50% 80%, #853d52, #180f1a 65%); width: 88%; height: 245rpx; border-radius: 46% 46% 48% 48%; left: 6%; bottom: 30rpx; border: 13rpx solid #759eaa; box-shadow: 0 12rpx 0 #243e48, inset 0 -9rpx 0 #d28b99; }
.shark-tongue { position: absolute; width: 46%; height: 56rpx; background: #b26981; border-radius: 50%; bottom: 32rpx; left: 27%; }
.shark-lower-jaw { position: absolute; width: 83%; height: 76rpx; border-radius: 0 0 50% 50%; left: 8.5%; bottom: 3rpx; background: #94bdc6; border-bottom: 10rpx solid #4b798a; z-index: 1; box-shadow: 0 11rpx 18rpx #0004; }
.shark-tooth { position: absolute; z-index: 4; width: 35rpx; height: 48rpx; transform: translate(-50%, -50%); background: linear-gradient(#fff9e8, #ded8bd); border: 2rpx solid #b6b7a0; border-radius: 10rpx 10rpx 16rpx 16rpx; box-shadow: 0 5rpx 0 #8d7a75; }
.shark-tooth[disabled] { background: #f4ecd7; }
.shark-tooth.pressed { transform: translate(-50%, -35%) scale(.8); opacity: .25; box-shadow: none; }
.shark-tooth.hit { background: #ff725f; opacity: 1; }
.shark-feedback { font-size: 28rpx; font-weight: 700; line-height: 1.8; margin: 24rpx 0 20rpx; color: #d7e6be; }
.shark-game>.full-button { margin: 25rpx 0; }
.shark-chomp { position: absolute; z-index: 8; top: 48%; left: 50%; transform: translate(-50%, -50%) rotate(-9deg); font-size: 65rpx; font-weight: 900; font-style: italic; color: #ff503c; text-shadow: 3rpx 4rpx 0 #111; }
.shark-biting .shark-head { z-index: 6; animation: shark-bite .65s ease-in-out forwards; }
.shark-bitten .shark-head { z-index: 6; transform: translateY(108rpx) rotate(2deg); }
.shark-biting .shark-tooth, .shark-bitten .shark-tooth { pointer-events: none; }
.shark-biting .shark-lower-jaw { animation: lower-bite .65s ease-in-out forwards; }
.shark-bitten .shark-lower-jaw { transform: translateY(-38rpx); }
@keyframes shark-bite { 0% { transform: translateY(0); } 30% { transform: translateY(-20rpx) rotate(-3deg); } 55% { transform: translateY(108rpx) rotate(2deg); } 75% { transform: translateY(83rpx) rotate(-2deg); } 100% { transform: translateY(108rpx) rotate(2deg); } }
@keyframes lower-bite { 0%, 30% { transform: translateY(0); } 55%, 100% { transform: translateY(-38rpx); } }

.finger-heading { color: #dde9c8; font-size: 29rpx; font-weight: 700; line-height: 1.7; margin: 12rpx 0 25rpx; }
.finger-heading>text { color: #879c6e; font-size: 20rpx; font-weight: 400; display: block; margin-top: 9rpx; }
.finger-board { position: relative; touch-action: none; user-select: none; -webkit-user-select: none; height: 580rpx; width: 100%; background: #10170d; border: 2rpx dashed #5d7740; border-radius: 17rpx; overflow: hidden; }
.finger-board-grid { position: absolute; inset: 0; opacity: .35; background-image: linear-gradient(#d7fa3810 1px, transparent 1px), linear-gradient(90deg, #d7fa3810 1px, transparent 1px); background-size: 40rpx 40rpx; pointer-events: none; }
.finger-center { position: absolute; left: 0; right: 0; top: 33%; text-align: center; color: #6f8a4f; pointer-events: none; }
.finger-center>text { font-size: 115rpx; font-weight: 900; line-height: 1.2; }
.finger-center>view { font-size: 18rpx; letter-spacing: 3rpx; margin-top: 25rpx; }
.state-countdown .finger-center { color: #d7fa38; }
.state-chosen .finger-center { color: #d7fa3860; }
.finger-point { position: absolute; width: 107rpx; height: 107rpx; border: 4rpx solid; border-radius: 50%; transform: translate(-50%, -50%); pointer-events: none; display: flex; align-items: center; justify-content: center; transition: opacity .2s, transform .2s; }
.finger-point>text { font-size: 30rpx; color: #eef7df; font-weight: 800; }
.finger-point>view { position: absolute; inset: -12rpx; border: 1rpx dashed #d8edb450; border-radius: 50%; }
.finger-point.chosen { transform: translate(-50%, -50%) scale(1.25); box-shadow: 0 0 34rpx #d7fa3860; border-width: 7rpx; }
.finger-point.dimmed { opacity: .13; }
.finger-controls { display: flex; justify-content: center; margin: 25rpx 0; }
@media (prefers-reduced-motion: reduce) { .shark-biting .shark-head, .shark-biting .shark-lower-jaw { animation: none; } }

/* Phone layouts use compact content and generous tap targets. */
@media (max-width: 849px) {
  .app-shell { padding-bottom: calc(90px + env(safe-area-inset-bottom)); }
  .app-shell.game-screen { padding-bottom: calc(22px + env(safe-area-inset-bottom)); }
  .site-header, .hall, .content-page, .game-page { padding-left: max(28rpx, env(safe-area-inset-left)); padding-right: max(28rpx, env(safe-area-inset-right)); }
  .site-header { height: 110rpx; min-height: 58px; }
  .brand-name { font-size: 18px; }
  .brand-en { font-size: 12rpx; margin-top: 4rpx; }
  .settings-button { width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; }
  .hero { padding-top: 25rpx; padding-bottom: 22rpx; }
  .street-club .eyebrow { font-size: 18rpx; letter-spacing: 1rpx; }
  .hero-copy>.eyebrow { display: none; }
  .street-club .hero-title { font-size: 26px; line-height: 1.2; margin: 0 0 10rpx; letter-spacing: -1px; }
  .street-club .hero-title-accent { display: inline; }
  .hero-description-intro { display: none; }
  .hero-description { font-size: 12px; line-height: 1.7; }
  .hero-actions { gap: 24rpx; margin-top: 19rpx; }
  .hero-footnote { display: none; }
  .street-club .hero-photo-wall { margin: 25rpx 0 0; padding: 0 9rpx; }
  .photo-wall-heading { display: none; }
  .home-photo-pair { gap: 22rpx; padding: 17rpx 0 15rpx; }
  .home-photo-night { margin-top: 22rpx; }
  .home-photo-card { padding: 8rpx 8rpx 10rpx; }
  .home-photo-caption { padding-top: 10rpx; }
  .home-photo-caption>view { font-size: 12px; margin-top: 3rpx; }
  .home-photo-caption>text { font-size: 7px; }
  .photo-wall-footer { justify-content: flex-end; }
  .photo-wall-footer>text:first-child { display: none; }
  .photo-wall-footer>text:last-child { font-size: 10px; }
  .street-club .players-strip { padding: 8rpx 15rpx; gap: 10rpx; }
  .players-strip-left { gap: 12rpx; min-width: 0; }
  .people-icon { font-size: 36rpx; }
  .strip-title { font-size: 12px; white-space: nowrap; }
  .player-number { font-size: 10px; margin-left: 10rpx; }
  .strip-caption { display: none; }
  .primary-button, .outline-button { min-height: 44px; padding: 12rpx 22rpx; font-size: 13px; }
  .text-button { min-height: 40px; font-size: 12px; }
  .players-strip .outline-button { min-height: 40px; padding: 10rpx 17rpx; font-size: 12px; }
  .library-heading { margin-top: 25rpx; margin-bottom: 15rpx; }
  .library-heading .section-kicker { display: none; }
  .section-title { font-size: 17px; margin-top: 0; }
  .filter-bar { margin-bottom: 18rpx; }
  .filter-tabs { width: 100%; display: grid; grid-template-columns: 1.2fr 1fr 1fr 1fr; gap: 7rpx; }
  .filter-tab { min-height: 40px; justify-content: center; padding: 9rpx 7rpx; font-size: 11px; gap: 7rpx; white-space: nowrap; }
  .games-grid { gap: 18rpx; }
  .street-club .card-visual { height: 195rpx; }
  .street-club .card-content { padding: 12rpx 14rpx 10rpx; }
  .street-club .card-title { font-size: 15px; letter-spacing: -1rpx; }
  .card-title-line { min-height: 40px; }
  .favorite-button { width: 38px; height: 40px; display: flex; align-items: center; justify-content: center; padding: 0; font-size: 27px; flex-shrink: 0; }
  .card-description { font-size: 12px; line-height: 1.65; min-height: 40px; margin-top: 0; margin-bottom: 10rpx; }
  .card-bottom { padding-top: 8rpx; }
  .game-meta { font-size: 10px; gap: 5rpx; flex-wrap: wrap; line-height: 1.6; }
  .game-meta .meta-divider { display: none; }
  .game-meta>text:last-child { color: #7e8b6c; }
  .street-club .card-play { width: 40px; height: 40px; font-size: 25px; }
  .street-club .game-tag { font-size: 16rpx; left: 10rpx; top: 10rpx; }
  .random-banner { padding: 20rpx 18rpx; gap: 14rpx; margin-top: 22rpx; }
  .banner-copy>view { font-size: 23rpx; }
  .banner-copy>text { font-size: 18rpx; }
  .hall-footer { padding-top: 30rpx; gap: 14rpx; }
  .mobile-nav { min-height: 62px; padding: 6px 8px calc(6px + env(safe-area-inset-bottom)); background: #13170ff5; backdrop-filter: blur(14px); }
  .mobile-nav button { min-height: 48px; font-size: 11px; display: flex; flex-direction: column; justify-content: center; align-items: center; }
  .mobile-nav button>text { font-size: 23px; line-height: 1.1; margin-bottom: 4px; }
  .section-intro { padding-top: 32rpx; padding-bottom: 27rpx; }
  .page-title { font-size: 40rpx; margin-top: 12rpx; }
  .section-intro .muted { font-size: 23rpx; }
  .game-breadcrumb { margin-top: 8rpx; min-height: 44px; }
  .game-breadcrumb .text-button { min-height: 44px; font-size: 12px; }
  .game-breadcrumb>view { gap: 18rpx; }
  .game-page-heading { margin: 12rpx 0 23rpx; }
  .game-page-heading .page-title { font-size: 24px; margin: 9rpx 0 8rpx; }
  .game-page-heading .muted { font-size: 12px; }
  .street-club .setup-panel, .street-club .play-panel { padding: 23rpx; }
  .setup-art { width: 265rpx; height: 170rpx; margin-bottom: 20rpx; }
  .setup-label { font-size: 28rpx; margin-bottom: 12rpx; }
  .setup-rule { font-size: 13px; line-height: 1.75; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
  .setup-more-rules { display: inline-flex; align-items: center; min-height: 36px; color: #b5ce85; font-size: 12px; padding: 6rpx 0; }
  .setup-players { padding: 18rpx 0; margin: 5rpx 0 15rpx; min-height: 58px; }
  .setup-players>view>view { font-size: 28rpx; }
  .dice-options, .draw-setup-options { margin-top: 14rpx; margin-bottom: 21rpx; }
  .chip { min-height: 38px; padding: 10rpx 14rpx; display: flex; align-items: center; justify-content: center; }
  .round-label { margin-bottom: 14rpx; padding-bottom: 18rpx; font-size: 12px; }
  .play-actions { gap: 13rpx; margin-top: 24rpx; margin-bottom: 13rpx; }
  .cup-mode .cup-play-actions { display: grid; grid-template-columns: 1fr 1fr; }
  .cup-mode .cup-play-actions .next-player-button { grid-column: 1 / -1; }
  .cup-mode .cup-play-actions:not(.has-cup-result) .primary-button { grid-column: 1 / -1; }
  .cup-mode .play-hint { font-size: 21rpx; }
  .play-hint, .small-text { font-size: 12px; }
  .game-bottom-note { margin-top: 24rpx; margin-bottom: 0; font-size: 15rpx; }
  .game-bottom-note>text { font-size: 18rpx; }
  .choice-title { font-size: 18px; margin-top: 23rpx; }
  .truth-choices { gap: 16rpx; padding-top: 23rpx; }
  .truth-choice { min-height: 165px; padding: 25rpx 12rpx; }
  .prompt-text { font-size: 20px; margin: 30rpx 0; }
  .prompt-filter { min-height: 38px; padding: 8rpx 9rpx; font-size: 11px; }
  .wheel-wrap { margin-top: 32rpx; margin-bottom: 17rpx; }
  .condition-result { margin-top: 25rpx; padding: 20rpx; }
  .condition-text { font-size: 18px; }
  .drawing-board { height: 440rpx; }
  .draw-tools { flex-wrap: wrap; row-gap: 14rpx; }
  .draw-palette { gap: 10rpx; }
  .draw-color { width: 32px; height: 32px; }
  .draw-widths>button { min-width: 30px; min-height: 36px; padding: 8rpx; font-size: 12px; }
  .draw-utilities { gap: 3rpx; padding-bottom: 7rpx; }
  .draw-utilities>button { min-height: 40px; padding: 5rpx 8rpx; font-size: 12px; }
  .draw-status { padding-top: 4rpx; padding-bottom: 14rpx; }
  .finger-board { height: 500rpx; }
  .finger-heading { font-size: 17px; margin: 8rpx 0 18rpx; }
  .finger-controls { margin: 20rpx 0; }
  .shark-tooth { min-width: 22px; min-height: 32px; }
  .shark-feedback { margin: 17rpx 0; font-size: 26rpx; }
  .vote-player { min-height: 52px; padding: 13rpx; font-size: 24rpx; }
  .vote-grid { gap: 12rpx; margin: 23rpx 0; }
  .modal-sheet { max-height: 88vh; max-height: calc(100dvh - 24px - env(safe-area-inset-top)); padding: 27rpx 26rpx calc(26rpx + env(safe-area-inset-bottom)); }
  .modal-title { font-size: 18px; }
  .close-button { min-width: 40px; min-height: 40px; display: flex; align-items: center; justify-content: center; line-height: 1; }
  .player-edit-row { padding: 10rpx 0; }
  .player-edit-row>input { font-size: 16px; min-height: 44px; }
  .remove-player { width: 40px; height: 40px; }
  .add-player { min-height: 44px; }
  .guide-card { padding: 23rpx; }
  .guide-rule { font-size: 13px; line-height: 1.85; }
  .guide-card .text-button { min-height: 44px; }
  .setting-row { min-height: 70px; padding: 21rpx; }
  .setting-row>view>view { font-size: 15px; }
  .setting-row>view>text { font-size: 12px; }
  .stats-grid>view { padding: 20rpx 12rpx; }
  .stats-grid>view>text { font-size: 48rpx; }
  .howto-steps { gap: 11rpx; }
  .howto-steps>view { padding: 18rpx 12rpx; }
  .howto-steps>view>view { font-size: 23rpx; }
  .howto-steps>view>text:last-child { font-size: 19rpx; }
  .photo-viewer-overlay { padding: 24rpx; }
  .photo-viewer-heading { margin-bottom: 20rpx; }
}
`,Sx=`const E = require('../../utils/game-engine');
const extraGames = require('../../utils/party-extras')(E, wx);
const STORAGE_KEY = 'nanrenbang-v1';
const filters = [{ id: 'all', name: '全部游戏' }, { id: 'ice', name: '热场破冰' }, { id: 'luck', name: '手气对决' }, { id: 'brain', name: '脑力挑战' }];
const homePhotos = [
  { id: 0, src: '/assets/crew-beach.jpg', title: '海边的我们', label: 'DAY ONES', style: 'beach', note: '有些快乐，一起才完整。' },
  { id: 1, src: '/assets/crew-night.jpg', title: '今晚一起玩', label: 'NIGHT CREW', style: 'night', note: '把时间，留给眼前的人。' }
];

Page({
  ...extraGames.methods,
  data: {
    ...extraGames.data,
    screen: 'home', filter: 'all', filters, games: [], visibleGames: [], players: [], favorites: [], sessions: 0,
    haptics: true, topInset: 0, showPlayers: false, editingPlayers: [], showRules: false,
    homePhotos, showHomePhoto: false, activeHomePhoto: homePhotos[0], homePhotoIndex: 0,
    selected: E.games[0], phase: 'setup', round: 1, playerIndex: 0, currentPlayer: '', diceCount: 5,
    dice: [], diceTotal: 0, rolling: false, hasRolled: false, cupState: 'closed', cupHasResult: false, prompt: '', promptType: '',
    wheelLabels: [], wheelRotation: 0, wheelStyle: '', spinning: false, wheelWinner: '',
    promptFilter: 'all', promptFilters: E.promptFilters, promptEntries: [], promptRemaining: E.wheelPrompts.length,
    promptTotal: E.wheelPrompts.length, promptDrawn: 0, promptResult: null, promptHistory: [], wheelCount: 8, showCandidates: false,
    revealIndex: 0, secretVisible: false, secretWord: '', secretCaption: '', kingCommand: '',
    number: 1, streak: 0, bestStreak: 0, sevenFeedback: '', sevenCorrect: true,
    votePlayers: [], voteId: '', eliminatedName: '', eliminatedRole: '', victory: '', finalRoles: []
  },
  onLoad() {
    let raw;
    try { raw = wx.getStorageSync(STORAGE_KEY) || wx.getStorageSync('tipsy-club-v1'); } catch (_) {}
    const saved = E.cleanSaved(raw);
    const topInset = wx.getWindowInfo ? wx.getWindowInfo().statusBarHeight || 0 : 24;
    this.setData({ ...saved, topInset });
    this.refreshGames();
    this._bags = {};
    this._timers = [];
  },
  onUnload() { this.clearTimers(); this.stopExtraGames(); },
  onShareAppMessage() { return { title: '男人帮｜人齐了，快乐就开场。一起玩一局！', path: '/pages/index/index' }; },
  setTimer(fn, delay) { const id = setTimeout(fn, delay); this._timers.push(id); return id; },
  clearTimers() { (this._timers || []).forEach(clearTimeout); this._timers = []; },
  cancelTimer(id) { if (id) clearTimeout(id); },
  buzz() { if (this.data.haptics) wx.vibrateShort({ type: 'light' }); },
  toast(title) { wx.showToast({ title, icon: 'none' }); },
  persist() {
    const { players, favorites, sessions, haptics } = this.data;
    try { wx.setStorageSync(STORAGE_KEY, { players, favorites, sessions, haptics }); } catch (_) { this.toast('本机存储不可用，本次仍可继续玩'); }
  },
  refreshGames() {
    const games = E.games.map(g => ({ ...g, favorite: this.data.favorites.includes(g.id) }));
    const visibleGames = games.filter(g => (this.data.screen !== 'favorites' || g.favorite) && (this.data.filter === 'all' || g.category === this.data.filter));
    this.setData({ games, visibleGames });
  },
  navigate(event) {
    const screen = event.currentTarget.dataset.screen;
    if (!screen) return;
    this.clearTimers();
    this.stopExtraGames();
    this.setData({ screen, filter: 'all', showRules: false, rolling: false, spinning: false, secretWord: '', secretVisible: false, cupState: 'closed', cupHasResult: false, hasRolled: false });
    this._cupDice = null;
    this._roles = [];
    this.refreshGames();
    wx.pageScrollTo({ scrollTop: 0, duration: 0 });
  },
  home() { this.navigate({ currentTarget: { dataset: { screen: 'home' } } }); },
  previewHomePhoto(event) {
    const index = Number(event.currentTarget.dataset.index);
    if (!homePhotos[index]) return;
    this.setData({ showHomePhoto: true, homePhotoIndex: index, activeHomePhoto: homePhotos[index] });
  },
  closeHomePhoto() { this.setData({ showHomePhoto: false }); },
  nextHomePhoto(event) {
    const step = Number(event.currentTarget.dataset.step) || 1;
    const index = (this.data.homePhotoIndex + step + homePhotos.length) % homePhotos.length;
    this.setData({ homePhotoIndex: index, activeHomePhoto: homePhotos[index] });
  },
  changeFilter(event) { this.setData({ filter: event.currentTarget.dataset.id }); this.refreshGames(); },
  toggleFavorite(event) {
    const id = event.currentTarget.dataset.id;
    const favorites = this.data.favorites.includes(id) ? this.data.favorites.filter(v => v !== id) : [...this.data.favorites, id];
    this.setData({ favorites }); this.persist(); this.refreshGames(); this.buzz();
  },
  randomGame() { this.openGameById(E.pick(E.games).id); },
  openGame(event) { this.openGameById(event.currentTarget.dataset.id); },
  openGameById(id) {
    const selected = E.games.find(g => g.id === id);
    if (!selected) return;
    this.clearTimers();
    this.stopExtraGames();
    this._roles = [];
    this._cupDice = null;
    this.setData({ selected, screen: 'game', phase: 'setup', round: 1, playerIndex: 0, currentPlayer: this.data.players[0].name, rolling: false, spinning: false, secretVisible: false, secretWord: '', showRules: false, diceCount: 5, cupState: 'closed', cupHasResult: false, hasRolled: false });
    wx.pageScrollTo({ scrollTop: 0, duration: 0 });
  },
  openPlayers() { this.setData({ showPlayers: true, editingPlayers: this.data.players.map(p => ({ ...p })) }); },
  closePlayers() { this.setData({ showPlayers: false }); },
  editPlayer(event) {
    const index = Number(event.currentTarget.dataset.index);
    const editingPlayers = this.data.editingPlayers.map((p, i) => i === index ? { ...p, name: event.detail.value.slice(0, 12) } : p);
    this.setData({ editingPlayers });
  },
  addPlayer() {
    const list = this.data.editingPlayers;
    if (list.length >= 12) return this.toast('最多支持 12 位玩家');
    this.setData({ editingPlayers: [...list, { id: \`p\${Date.now()}-\${list.length}\`, name: \`玩家 \${list.length + 1}\` }] });
  },
  removePlayer(event) {
    if (this.data.editingPlayers.length <= 2) return this.toast('至少保留 2 位玩家');
    this.setData({ editingPlayers: this.data.editingPlayers.filter(p => p.id !== event.currentTarget.dataset.id) });
  },
  savePlayers() {
    const players = this.data.editingPlayers.map((p, i) => ({ ...p, name: p.name.trim() || \`玩家 \${i + 1}\` }));
    this.setData({ players, showPlayers: false, currentPlayer: players[0].name }); this.persist(); this.buzz();
  },
  toggleHaptics() { this.setData({ haptics: !this.data.haptics }); this.persist(); this.buzz(); },
  resetData() {
    wx.showModal({ title: '清空本机数据？', content: '玩家名单、收藏和开局记录会恢复初始状态。', confirmText: '确认清空', confirmColor: '#e87640', success: result => {
      if (!result.confirm) return;
      this.setData({ ...E.cleanSaved(null) }); this.persist(); this.refreshGames(); this.toast('已恢复初始设置');
    } });
  },
  rules() { this.setData({ showRules: true }); },
  closeRules() { this.setData({ showRules: false }); },
  noop() {},
  chooseDiceCount(event) { this.setData({ diceCount: Number(event.currentTarget.dataset.count) }); },
  startGame() {
    const { selected, players, diceCount } = this.data;
    if (players.length < selected.min) { this.toast(\`这个游戏至少需要 \${selected.min} 位玩家\`); return this.openPlayers(); }
    this.clearTimers();
    this.stopExtraGames();
    this.setData({ sessions: this.data.sessions + 1, round: 1, playerIndex: 0, currentPlayer: players[0].name, victory: '', voteId: '', secretVisible: false, secretWord: '' });
    this.persist(); this.buzz();
    if (selected.id === 'dice') {
      this._cupDice = null;
      this.setData({ phase: 'playing', dice: Array.from({ length: diceCount }, () => E.createDice(1)), diceTotal: diceCount, hasRolled: false, rolling: false, cupState: 'closed', cupHasResult: false });
    }
    if (selected.id === 'truth') this.setData({ phase: 'choose', prompt: '' });
    if (selected.id === 'wheel') this.setData({ phase: 'playing', wheelLabels: E.wheelLabels(players), wheelRotation: 0, wheelStyle: 'transform:rotate(0deg);', wheelWinner: '', spinning: false });
    if (selected.id === 'promptwheel') {
      this._promptSeen = [];
      this.setData({ phase: 'playing', promptFilter: 'all', promptHistory: [], spinning: false, wheelRotation: 0, wheelStyle: 'transform:rotate(0deg);' });
      this.preparePromptWheel();
    }
    if (selected.id === 'king' || selected.id === 'undercover') {
      this._roles = selected.id === 'king' ? E.dealKing(players) : E.dealUndercover(players);
      this.setData({ phase: 'reveal', revealIndex: 0, currentPlayer: players[0].name, secretVisible: false, secretWord: '', kingCommand: '' });
    }
    if (selected.id === 'seven') this.setData({ phase: 'playing', number: 1, streak: 0, bestStreak: 0, sevenFeedback: '' });
    if (['draw', 'shark', 'finger'].includes(selected.id)) this.startExtraGame(selected.id);
  },
  rollDice() {
    if (this.data.rolling || this.data.cupState === 'opening' || this.data.cupState === 'covering') return;
    if (this.data.dice.every(d => d.held)) return this.toast('先点一下骰子，解锁后再摇');
    if (this.data.diceCount === 5) {
      this._cupDice = E.rollDice(this.data.dice);
      this.setData({ rolling: true, hasRolled: false, cupHasResult: false, cupState: 'shaking' }); this.buzz();
      [180, 390, 620].forEach(delay => this.setTimer(() => this.buzz(), delay));
      this.setTimer(() => { this.setData({ rolling: false, cupHasResult: true, cupState: 'ready' }); this.buzz(); }, 950);
      return;
    }
    this.setData({ rolling: true }); this.buzz();
    this.setTimer(() => {
      const dice = E.rollDice(this.data.dice);
      this.setData({ dice, diceTotal: dice.reduce((s, d) => s + d.value, 0), rolling: false, hasRolled: true }); this.buzz();
    }, 600);
  },
  tapDiceCup() {
    if (this.data.cupState === 'ready') return this.revealDiceCup();
    if (this.data.cupState === 'closed') this.rollDice();
  },
  revealDiceCup() {
    if (this.data.diceCount !== 5 || this.data.cupState !== 'ready' || !this.data.cupHasResult || !this._cupDice) return;
    const dice = this._cupDice;
    this.setData({ cupState: 'opening' }); this.buzz();
    this.setTimer(() => this.setData({ dice, diceTotal: dice.reduce((s, d) => s + d.value, 0), hasRolled: true }), 120);
    this.setTimer(() => this.setData({ cupState: 'open' }), 560);
  },
  coverDiceCup() {
    if (this.data.diceCount !== 5 || this.data.cupState !== 'open' || this.data.rolling) return;
    this.setData({ cupState: 'covering' }); this.buzz();
    this.setTimer(() => this.setData({ hasRolled: false }), 230);
    this.setTimer(() => this.setData({ cupState: 'ready' }), 460);
  },
  toggleDiceCup() {
    if (this.data.cupState === 'open') return this.coverDiceCup();
    if (this.data.cupState === 'ready') this.revealDiceCup();
  },
  holdDie(event) {
    if (this.data.rolling || !this.data.hasRolled || (this.data.diceCount === 5 && this.data.cupState !== 'open')) return;
    const index = Number(event.currentTarget.dataset.index);
    const dice = this.data.dice.map((d, i) => i === index ? { ...d, held: !d.held } : d);
    this.setData({ dice });
    if (this.data.diceCount === 5) this._cupDice = dice;
    this.buzz();
  },
  nextDicePlayer() {
    if (this.data.rolling || this.data.cupState === 'opening' || this.data.cupState === 'covering' || (this.data.diceCount === 5 && !this.data.cupHasResult)) return;
    const index = (this.data.playerIndex + 1) % this.data.players.length;
    this._cupDice = null;
    this.setData({ playerIndex: index, currentPlayer: this.data.players[index].name, round: this.data.round + (index === 0 ? 1 : 0), dice: this.data.dice.map(() => E.createDice(1)), diceTotal: this.data.diceCount, hasRolled: false, cupState: 'closed', cupHasResult: false });
  },
  drawPrompt(event) {
    const type = event.currentTarget.dataset.type;
    if (!['truth', 'dare'].includes(type)) return;
    if (!this._bags[type] || !this._bags[type].length) this._bags[type] = E.shuffle(type === 'truth' ? E.truths : E.dares);
    const prompt = this._bags[type].pop();
    this.setData({ phase: 'prompt', promptType: type, prompt }); this.buzz();
  },
  nextTruth() {
    const index = (this.data.playerIndex + 1) % this.data.players.length;
    this.setData({ phase: 'choose', playerIndex: index, currentPlayer: this.data.players[index].name, round: this.data.round + 1, prompt: '' });
  },
  spinWheel() {
    if (this.data.spinning) return;
    const index = E.int(this.data.players.length);
    const wheelRotation = E.wheelLanding(this.data.players.length, index, this.data.wheelRotation);
    this.setData({ spinning: true, wheelWinner: '', wheelRotation, wheelStyle: \`transform:rotate(\${wheelRotation}deg);transition:transform 3.2s cubic-bezier(.15,.75,.12,1);\` }); this.buzz();
    this.setTimer(() => { this.setData({ spinning: false, wheelWinner: this.data.players[index].name, round: this.data.round + 1 }); this.buzz(); }, 3250);
  },
  preparePromptWheel() {
    const promptEntries = E.promptCandidates(this._promptSeen, this.data.promptFilter);
    const promptRemaining = E.promptPool(this._promptSeen, this.data.promptFilter).length;
    const promptTotal = E.promptPool([], this.data.promptFilter).length;
    const labels = promptEntries.map((p, index) => ({ id: p.id, name: \`\${index + 1}. \${p.text.length > 6 ? p.text.slice(0, 6) + '…' : p.text}\` }));
    this.setData({ promptEntries, promptRemaining, promptTotal, promptDrawn: promptTotal - promptRemaining, promptResult: null, wheelCount: promptEntries.length, wheelLabels: E.wheelLabels(labels), showCandidates: false });
  },
  changePromptFilter(event) {
    if (this.data.spinning) return;
    const id = event.currentTarget.dataset.id;
    if (!E.promptFilters.some(f => f.id === id)) return;
    this.setData({ promptFilter: id }); this.preparePromptWheel();
  },
  toggleCandidates() { this.setData({ showCandidates: !this.data.showCandidates }); },
  spinPromptWheel() {
    if (this.data.spinning || !this.data.promptRemaining) return;
    if (this.data.promptResult) this.preparePromptWheel();
    const entries = this.data.promptEntries;
    if (!entries.length) return;
    const index = E.int(entries.length);
    const result = entries[index];
    const wheelRotation = E.wheelLanding(entries.length, index, this.data.wheelRotation);
    this.setData({ spinning: true, promptResult: null, wheelRotation, wheelStyle: \`transform:rotate(\${wheelRotation}deg);transition:transform 3.2s cubic-bezier(.15,.75,.12,1);\` }); this.buzz();
    this.setTimer(() => {
      this._promptSeen.push(result.id);
      const promptRemaining = E.promptPool(this._promptSeen, this.data.promptFilter).length;
      this.setData({ spinning: false, promptResult: result, promptRemaining, promptDrawn: this.data.promptTotal - promptRemaining, promptHistory: [result, ...this.data.promptHistory].slice(0, 5), round: this.data.round + 1 }); this.buzz();
    }, 3250);
  },
  revealSecret() {
    const person = this._roles[this.data.revealIndex];
    if (!person) return;
    const isKing = this.data.selected.id === 'king';
    this.setData({ secretVisible: true, secretWord: isKing ? (person.role === 'KING' ? '你是国王' : \`\${person.role} 号\`) : person.word, secretCaption: isKing ? (person.role === 'KING' ? '记住身份，稍后由你发令' : '记住号码，稍后听国王发令') : '只描述，不要直接说出这个词' }); this.buzz();
  },
  nextSecret() {
    const next = this.data.revealIndex + 1;
    this.setData({ secretVisible: false, secretWord: '', secretCaption: '' });
    if (next < this._roles.length) { this.setData({ revealIndex: next, currentPlayer: this._roles[next].name }); return; }
    if (this.data.selected.id === 'king') this.setData({ phase: 'command', kingCommand: '' });
    else { this.setData({ phase: 'discussion', round: 1 }); this.refreshVotes(); }
  },
  generateCommand() { this.setData({ kingCommand: E.kingTask(this._roles.length) }); this.buzz(); },
  refreshVotes() { this.setData({ votePlayers: this._roles.filter(p => p.alive).map(p => ({ id: p.id, name: p.name })), voteId: '' }); },
  selectVote(event) { this.setData({ voteId: event.currentTarget.dataset.id }); },
  confirmVote() {
    const person = this._roles.find(p => p.id === this.data.voteId && p.alive);
    if (!person) return this.toast('请先选择大家投票最多的玩家');
    person.alive = false;
    const victory = E.winner(this._roles);
    this.setData({ phase: 'eliminated', eliminatedName: person.name, eliminatedRole: person.role === 'undercover' ? '卧底' : '平民', victory: victory ? (victory === 'civilian' ? '平民阵营获胜' : '卧底阵营获胜') : '', finalRoles: victory ? this._roles.map(p => ({ id: p.id, name: p.name, word: p.word, roleName: p.role === 'undercover' ? '卧底' : '平民' })) : [] }); this.buzz();
  },
  continueDiscussion() { this.setData({ phase: 'discussion', round: this.data.round + 1 }); this.refreshVotes(); },
  answerSeven(event) {
    if (this.data.sevenFeedback) return;
    const pass = event.currentTarget.dataset.answer === 'pass';
    const correct = pass === E.isSeven(this.data.number);
    const streak = correct ? this.data.streak + 1 : 0;
    this.setData({ sevenCorrect: correct, sevenFeedback: \`\${correct ? '接得漂亮！' : '哎呀，没接住。'}\${E.sevenReason(this.data.number)}\`, streak, bestStreak: Math.max(streak, this.data.bestStreak) }); this.buzz();
  },
  nextSeven() {
    const index = (this.data.playerIndex + 1) % this.data.players.length;
    this.setData({ number: this.data.number + 1, playerIndex: index, currentPlayer: this.data.players[index].name, sevenFeedback: '', round: this.data.round + (index === 0 ? 1 : 0) });
  },
  restartGame() {
    wx.showModal({ title: '重新开始这一局？', content: '当前进度会结束，并重新随机发牌或重置游戏。', confirmText: '重新开始', confirmColor: '#e87640', success: result => { if (result.confirm) this.startGame(); } });
  }
});
`,Tx=`const wheelPrompts = require('./wheel-prompts');
const promptFilters = [{ id: 'all', name: '全部词条' }, { id: 'today', name: '今日状态' }, { id: 'social', name: '微信社交' }, { id: 'life', name: '生活近况' }, { id: 'phone', name: '手机习惯' }];
const games = [
  { id: 'dice', name: '欢乐摇骰子', english: 'SHAKE IT UP', desc: '摇盅、开盅、拼手气，今晚谁是骰王？', category: 'luck', people: '2–12 人', time: '约 3 分钟', min: 2, tag: '人气 TOP 1', color: 'orange', art: 'dice', rule: '选择 1、3 或 5 颗骰子，轮流摇骰比总点数。五颗模式使用骰盅：盖盅摇动，停稳后点击开盅，点数在开盅后揭晓。同一盅可不限次数开盖查看，盖上再开保持点数不变，只有重新摇盅才更新点数。开盅后点一下骰子可以锁定，再摇时保留点数。也可以由大家约定自己的玩法。', hint: '手机放桌上，手气见分晓。' },
  { id: 'promptwheel', name: '幸运大转盘', english: 'SPIN & FIND YOUR PEOPLE', desc: '转中一句话，看看谁和你一样。', category: 'luck', people: '2–12 人', time: '约 5 分钟', min: 2, tag: \`\${wheelPrompts.length} 条生活判定\`, color: 'lime', art: 'promptwheel', rule: \`从 \${wheelPrompts.length} 条生活判定词条中随机选出最多 8 条放上转盘。转动后，指针指向的词条就是本次结果，符合条件的朋友举手。已抽中的词条在本局不再出现，切换分类也保留去重记录。可以按今日状态、微信社交、生活近况、手机习惯筛选，重新洗牌会开启新的一局。\`, hint: '纯生活判定，符合的朋友举个手。' },
  { id: 'truth', name: '真心话大冒险', english: 'TRUTH OR DARE', desc: '一点点勇气，拉近一点点距离。', category: 'ice', people: '2–12 人', time: '约 10 分钟', min: 2, tag: '破冰首选', color: 'pink', art: 'truth', rule: '按照玩家顺序，每人选择真心话或大冒险。回答问题或完成小挑战后交给下一位。不想回答或完成的题目，随时可以跳过。', hint: '放轻松，任何题目都可以跳过。' },
  { id: 'wheel', name: '幸运点名', english: 'WHO IS THE LUCKY ONE', desc: '下一个主角，让转盘来决定。', category: 'luck', people: '2–12 人', time: '约 1 分钟', min: 2, tag: '手气对决', color: 'orange', art: 'wheel', rule: '转盘上每个玩家的区域大小相同。按下开始后，指针停在哪个区域，谁就是这一轮的幸运主角。每轮独立随机。', hint: '讲个笑话，还是选首歌？你们决定。' },
  { id: 'king', name: '国王游戏', english: 'ALL HAIL THE KING', desc: '谁抽到国王，谁来安排这一局。', category: 'ice', people: '3–12 人', time: '约 8 分钟', min: 3, tag: '气氛担当', color: 'purple', art: 'king', rule: '把手机依次交给每位玩家，私下查看身份。每局有一位国王，其他玩家获得不同号码。国王亮明身份，给指定号码安排一个大家愿意参加的小任务。', hint: '国王也要尊重每位玩家的意愿。' },
  { id: 'seven', name: '逢 7 必过', english: 'MIND THE SEVEN', desc: '嘴要快，脑子更要快。别说出 7！', category: 'brain', people: '2–12 人', time: '约 5 分钟', min: 2, tag: '反应挑战', color: 'blue', art: 'seven', rule: '从 1 开始，大家依次报数。遇到 7 的倍数，或数字中含有 7 时，选择「喊过」；其余数字选择「报数」。答错会显示原因，之后继续下一位。', hint: '7、14、17、21……想好了再出手。' },
  { id: 'undercover', name: '谁是卧底', english: 'FIND THE IMPOSTER', desc: '同一句描述，藏着不一样的身份。', category: 'brain', people: '4–12 人', time: '约 15 分钟', min: 4, tag: '烧脑经典', color: 'yellow', art: 'undercover', rule: '依次私下查看自己的词语，不要说出原词。每轮每人描述一次，再讨论并投票选出一人。4–7 人有 1 位卧底，8–12 人有 2 位。找出全部卧底，平民获胜；卧底人数达到平民人数，卧底获胜。', hint: '看完身份先隐藏，再把手机传出去。' },
  { id: 'draw', name: '你画我猜', english: 'DRAW IT. GUESS IT.', desc: '画技不够，脑洞来凑。谁懂你的画？', category: 'brain', people: '2–12 人', time: '约 10 分钟', min: 2, tag: '灵魂画手', color: 'pink', art: 'draw', rule: '轮流由一位玩家私下看题，再在手机画板上画出来，其余人面对面猜。不能写出题目原字。支持画笔、橡皮、撤销、清空和 60 / 90 / 120 秒计时。有人猜中后，由画手选择猜中的玩家，双方各得 1 分，再交给下一位画手。题目在用完一副前不重复。', hint: '一位画，大家猜。猜中后由画手确认。' },
  { id: 'shark', name: '咬手鲨鱼', english: 'WATCH YOUR FINGERS', desc: '十二颗牙齿，谁会叫醒这条鲨鱼？', category: 'luck', people: '2–12 人', time: '约 3 分钟', min: 2, tag: '心跳挑战', color: 'blue', art: 'shark', rule: '玩家依次按下一颗尚未按过的牙齿。每局随机设置一颗机关牙，按到普通牙齿就安全换人；碰到机关牙，鲨鱼会咬合，这位玩家成为本轮主角。机关牙在开局时确定，不会因为按牙而改变。', hint: '一人一颗牙，看看谁的手气更稳。' },
  { id: 'finger', name: '指尖轮盘', english: 'FINGERS DOWN. LUCK UP.', desc: '手指一起按住，下一位主角马上揭晓。', category: 'luck', people: '2–10 指', time: '约 1 分钟', min: 2, tag: '多人同屏', color: 'purple', art: 'finger', rule: '两人或更多人把手指同时按在触控区，保持按住。倒计时三秒后，系统从仍按住的手指中随机选一根。增加或移开手指会重新倒计时。松开所有手指后可开始下一轮，支持人数以设备实际多点触控能力为准。电脑可使用三指演示查看效果。', hint: '请用手机触屏，至少两根手指同时按住。' }
];

const truths = [
  '如果明天可以免费飞去任何地方，你想去哪？', '最近一次让你笑到停不下来的事是什么？', '现场谁最适合一起去旅行？为什么？', '分享一件别人不知道的小爱好。', '如果能重来一天，你会选哪一天？', '手机相册里最近拍的一张照片是什么？可以描述，不用展示。', '你做过最临时起意的一件事是什么？', '你最想拥有哪种没什么用的超能力？', '你听过最离谱的夸奖是什么？', '用三个词形容你的周末。', '如果给自己开一家店，会卖什么？', '童年最想得到的一件东西是什么？', '你心中的快乐，可以用哪道菜代表？', '最近被哪首歌洗脑了？', '如果今晚是一部电影，你会给它起什么名字？', '说一件你一直想尝试、还没开始的事。', '你最拿手的一道菜是什么？', '现场谁给你的第一印象和现在最不一样？', '你最想和哪位虚构人物做朋友？', '你买过最值得的一件小东西是什么？', '你最独特的一个习惯是什么？', '什么小事可以立刻治愈你？', '用一句话安利一部你喜欢的电影。', '你做过最有成就感的一件事是什么？'
];
const dares = [
  '用新闻主播的语气，播报一下今晚的聚会。', '用三个动作，让大家猜出一种动物。', '即兴为你左边的朋友写一句广告词。', '用一句绕口令挑战自己，说三遍。', '模仿一个表情包，让大家猜。', '用夸张的口吻，介绍你手边的一件物品。', '哼一小段歌，让大家猜歌名。', '用方言或机器人语气做一次自我介绍。', '给现场每个人起一个友善的综艺艺名。', '用慢动作表演一次冲过终点线。', '给这次聚会设计一个专属手势。', '对着空气演一段 15 秒的美食探店。', '用歌名串成一句话。', '为今天的天气写一句诗。', '做一个最有自信的登场动作。', '用五个字夸一夸你右边的朋友。', '不用说话，表演“周一早上起床”。', '把一句普通的话，用三种情绪说出来。', '模仿导航语音，指引大家走向快乐。', '给今晚的聚会想一个响亮的口号。', '在十秒内说出五种水果。', '为桌上的一件东西配一段内心独白。', '用你的方式，演绎一次帅气转身。', '即兴表演一个没有实物的魔术。'
];
const wordPairs = [['豆浆', '牛奶'], ['火锅', '烧烤'], ['咖啡', '奶茶'], ['西瓜', '哈密瓜'], ['高铁', '地铁'], ['耳机', '音箱'], ['月亮', '太阳'], ['饺子', '馄饨'], ['外卖', '快递'], ['露营', '野餐'], ['篮球', '足球'], ['沙发', '躺椅'], ['围巾', '领带'], ['冰箱', '空调'], ['蛋糕', '面包'], ['海豚', '鲸鱼'], ['相机', '望远镜'], ['牙膏', '洗面奶'], ['春联', '福字'], ['吉他', '尤克里里']];
const kingTasks = ['请 {a} 号和 {b} 号一起给今晚的聚会想一个口号。', '请 {a} 号用三个词夸一夸 {b} 号。', '请 {a} 号和 {b} 号不说话，合作表演一种运动。', '请 {a} 号哼一首歌，{b} 号来猜歌名。', '请 {a} 号为 {b} 号设计一个综艺登场介绍。', '请 {a} 号和 {b} 号各讲一个冷笑话。', '请 {a} 号和 {b} 号一起摆一个有创意的合照姿势。', '请 {a} 号用播音腔说一句话，{b} 号用机器人语气接话。'];

function int(max, rng = Math.random) { return Math.min(max - 1, Math.floor(rng() * max)); }
function shuffle(items, rng = Math.random) {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i--) { const j = int(i + 1, rng); [copy[i], copy[j]] = [copy[j], copy[i]]; }
  return copy;
}
function pick(items, rng = Math.random) { return items[int(items.length, rng)]; }
function validatePlayers(players, minimum) {
  if (!Array.isArray(players) || players.length < minimum || players.length > 12) throw new Error(\`需要 \${minimum}–12 位玩家\`);
  const ids = new Set(players.map(p => p.id));
  if (ids.size !== players.length || players.some(p => !p.id || !p.name)) throw new Error('玩家资料无效');
}
function createDice(value, held = false) {
  const positions = { 1: [5], 2: [1, 9], 3: [1, 5, 9], 4: [1, 3, 7, 9], 5: [1, 3, 5, 7, 9], 6: [1, 3, 4, 6, 7, 9] };
  return { value, held, pips: positions[value] };
}
function rollDice(dice, rng = Math.random) { return dice.map(d => d.held ? d : createDice(int(6, rng) + 1)); }
function isSeven(number) { return number % 7 === 0 || String(number).includes('7'); }
function sevenReason(number) { return number % 7 === 0 ? \`\${number} 是 7 的倍数，要喊「过」\` : String(number).includes('7') ? \`\${number} 含有数字 7，要喊「过」\` : \`\${number} 不含 7，也不是 7 的倍数，应该报数\`; }
function dealKing(players, rng = Math.random) {
  validatePlayers(players, 3);
  const roles = shuffle(['KING', ...players.slice(1).map((_, i) => String(i + 1))], rng);
  return players.map((p, i) => ({ ...p, role: roles[i] }));
}
function dealUndercover(players, rng = Math.random) {
  validatePlayers(players, 4);
  const pair = pick(wordPairs, rng);
  const count = players.length >= 8 ? 2 : 1;
  const roles = shuffle(players.map((_, i) => i < count ? 'undercover' : 'civilian'), rng);
  return players.map((p, i) => ({ ...p, role: roles[i], word: roles[i] === 'undercover' ? pair[1] : pair[0], alive: true }));
}
function winner(roles) {
  const alive = roles.filter(p => p.alive);
  const spies = alive.filter(p => p.role === 'undercover').length;
  if (spies === 0) return 'civilian';
  if (spies >= alive.length - spies) return 'undercover';
  return null;
}
function kingTask(playerCount, rng = Math.random) {
  const numbers = shuffle(Array.from({ length: playerCount - 1 }, (_, i) => i + 1), rng);
  return pick(kingTasks, rng).replace('{a}', numbers[0]).replace('{b}', numbers[1]);
}
function wheelLanding(count, index, previous = 0) {
  const target = (360 - (index + 0.5) * 360 / count) % 360;
  const current = ((previous % 360) + 360) % 360;
  return previous + 360 * 5 + (target - current + 360) % 360;
}
function wheelLabels(players) {
  return players.map((p, index) => {
    const angle = ((index + 0.5) * 360 / players.length - 90) * Math.PI / 180;
    return { ...p, position: \`left:\${50 + Math.cos(angle) * 34}%;top:\${50 + Math.sin(angle) * 34}%;\` };
  });
}
function promptPool(seen = [], filter = 'all') {
  const used = new Set(seen);
  return wheelPrompts.filter(p => (filter === 'all' || p.category === filter) && !used.has(p.id));
}
function promptCandidates(seen = [], filter = 'all', rng = Math.random) { return shuffle(promptPool(seen, filter), rng).slice(0, 8); }
function cleanSaved(raw) {
  const fallback = Array.from({ length: 4 }, (_, i) => ({ id: \`p\${i + 1}\`, name: \`玩家 \${i + 1}\` }));
  const candidate = raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : {};
  let players = fallback;
  try { validatePlayers(candidate.players, 2); players = candidate.players.map(p => ({ id: String(p.id).slice(0, 64), name: String(p.name).trim().slice(0, 12) || '玩家' })); validatePlayers(players, 2); } catch (_) {}
  return {
    players,
    favorites: Array.isArray(candidate.favorites) ? [...new Set(candidate.favorites.filter(id => games.some(g => g.id === id)))] : [],
    sessions: Number.isSafeInteger(candidate.sessions) && candidate.sessions >= 0 ? candidate.sessions : 0,
    haptics: candidate.haptics !== false
  };
}
module.exports = { games, truths, dares, wordPairs, shuffle, pick, int, createDice, rollDice, isSeven, sevenReason, dealKing, dealUndercover, winner, kingTask, wheelLanding, wheelLabels, cleanSaved, wheelPrompts, promptFilters, promptPool, promptCandidates };
`,kx=`// 用户提供的原始判定词条，保留编号和原文。167–197 尚未提供。
const raw = \`
1|最近一周看过短剧
2|微信没有置顶聊天
3|今天走路过来赴局
4|手机常年静音模式
5|最近改过微信昵称
6|朋友圈三天可见
7|今天没吃早饭
8|最近一周熬夜超三次
9|微信头像是动漫图片
10|最近一周收过快递
11|从不主动发朋友圈
12|今天戴了眼镜
13|近期有过临时取消的计划
14|手机壁纸是真人自拍
15|最近一周没喝过奶茶
16|微信消息习惯一键清零
17|今天穿了新买的衣服
18|近期刷到过前任动态
19|聊天喜欢发表情包
20|最近一周完全没运动
21|微信有置顶异性好友
22|今天出门没带充电宝
23|朋友圈喜欢发风景内容
24|近期睡前会刷短视频
25|手机电量当前低于30%
26|最近一个月没发过朋友圈
27|聊天只发文字不发语音
28|今天骑车过来赴局
29|微信个性签名常年不换
30|近期有早睡早起的日子
31|朋友圈发动态喜欢分组
32|最近一周点外卖超五次
33|微信背景图是纯色
34|今天出门精心收拾过
35|近期删过微信好友
36|最近一周自拍过
37|习惯性拖延回消息
38|朋友圈半年可见
39|近期看过电影
40|手机铃声是系统默认
41|今天没戴眼镜
42|最近一周和朋友语音通话过
43|微信头像是风景图
44|近期有睡懒觉到中午
45|从不给别人朋友圈点赞
46|今天穿了深色衣服
47|近期网购过物品
48|微信置顶是工作群
49|最近一周没刷过朋友圈
50|聊天习惯秒回消息
51|朋友圈全部开放可见
52|近期有情绪内耗的时候
53|手机当前电量高于70%
54|今天出门没化妆没打扮
55|最近改过微信个性签名
56|微信没有个性签名
57|近期有坚持一个小习惯
58|朋友圈喜欢发美食动态
59|今天戴了手表
60|近期迟到过一次以上
61|微信收藏从不整理
62|最近一周喝过奶茶
63|今天穿了浅色衣服
64|近期被别人夸过颜值或性格
65|微信背景图是风景
66|近期和人发生过小争执
67|朋友圈喜欢发文案语录
68|今天吃了早饭
69|近期计划的事没有完成
70|微信经常清理缓存内存
71|最近一周发过三条以上朋友圈
72|今天戴了帽子
73|近期有健身锻炼
74|微信头像是网图
75|近期深夜刷过手机
76|朋友圈喜欢发搞笑内容
77|今天开车过来赴局
78|近期听过喜欢的新歌
79|微信置顶是闺蜜或兄弟
80|最近一周没人主动找你聊天
81|近期屏蔽过别人朋友圈
82|今天穿搭风格偏休闲
83|近期去过超市采购
84|微信从来不清理内存
85|最近一周主动找人闲聊过
86|今天穿搭风格偏帅气
87|近期存过很多好看的图片
88|微信有大量未读消息
89|近期没有熬夜通宵
90|今天穿搭风格偏温柔
91|近期戒掉过一个小坏习惯
92|微信收藏数量超过百条
93|近期发呆放空过很久
94|今天没戴帽子
95|近期有短暂的emo时刻
96|微信很少添加陌生人
97|近期吃到过超好吃的美食
98|今天没戴手表
99|近期羡慕过别人的生活状态
100|微信经常新加好友
101|近期有认真护肤
102|今天穿了运动鞋
103|近期追剧追完一整部
104|微信聊天很少发表情包
105|近期有出门散步散心
106|今天穿了板鞋/皮鞋
107|近期存过励志文案
108|微信习惯发语音聊天
109|近期拒绝过别人的邀约
110|今天身上带了香水
111|近期主动邀约过朋友
112|微信头像半年以上没更换
113|近期熬夜后后悔自责
114|今天没喷香水
115|近期有规划过未来小事
116|微信头像一个月内刚更换
117|近期忘记过重要小事
118|今天带了背包
119|近期有认真复盘生活
120|微信背景图是情侣图片
121|近期喜欢独处胜过热闹
122|今天没带背包
123|近期热闹场合很放得开
124|微信背景图很久没更换
125|近期帮别人解决过问题
126|今天头发精心打理过
127|近期被别人帮助过
128|微信头像是自己真人自拍
129|近期有省钱存钱的行为
130|今天头发随意打理
131|近期冲动消费过一次
132|微信头像是宠物图片
133|近期克制住了冲动消费
134|今天指甲有做装饰
135|近期刷抖音超过一小时
136|微信被别人屏蔽过朋友圈
137|近期几乎没刷短视频
138|今天指甲干净无装饰
139|近期点赞别人朋友圈超十次
140|微信发圈喜欢秒删重发
141|近期有早起成功的一天
142|今天出门带了耳机
143|近期赖床很久不起
144|微信发圈从不编辑修改
145|近期有多喝水养生
146|今天出门没带耳机
147|近期经常喝冰水
148|微信发圈会反复编辑文案
149|近期主动养生喝热水
150|今天穿了长裤
151|近期吃过夜宵
152|微信朋友圈完全关闭状态
153|近期坚持不吃夜宵
154|今天穿了短裤
155|近期有轻度运动拉伸
156|微信很少展示私人生活
157|近期久坐不动很久
158|今天身上有配饰装饰
159|近期有看书学习新知识
160|微信深夜喜欢发动态
161|近期完全没有学习提升
162|今天身上无任何配饰
163|近期有认真洗漱护肤
164|微信从不分组发朋友圈
165|近期熬夜长痘或疲惫
166|今天穿了宽松衣服
198|今天心情很放松
199|近期偶尔脾气急躁
200|微信从不删除聊天记录
201|近期做事很有耐心
202|今天心情有点紧绷
203|近期做事容易急躁敷衍
204|微信昵称简单无符号
205|近期有坚持早睡一晚
206|今天笑容很多很开心
207|近期通宵熬夜过
208|微信昵称有特殊符号
209|近期有规划消费支出
210|今天全程安静沉稳
211|近期花钱随心所欲
212|微信个性签名很文艺
213|近期有攒下小额存款
214|今天全程活跃话多
215|近期月光没有存款
216|微信个性签名很搞笑
217|近期主动断舍离物品
218|今天主动和别人搭话
219|近期囤积很多闲置物品
220|微信个性签名很励志
221|近期认真吃饭不挑食
222|今天全程沉默不主动说话
223|近期挑食不爱吃青菜
224|微信几乎不发朋友圈
225|近期有尝试新口味美食
226|今天主动夸过身边人
227|近期一直吃固定爱吃的饭
228|微信偶尔发生活日常
229|近期有认真洗头打理
230|今天全程玩手机很少抬头
231|近期偷懒不洗头
232|微信经常发日常动态
233|近期有打扫整理房间
234|今天全程专注聚会不玩手机
235|近期房间杂乱不整理
236|微信喜欢发工作相关动态
237|近期丢过小物件
238|今天坐姿端正规整
239|近期物品收纳很整齐
240|微信喜欢发娱乐搞笑动态
241|近期丢三落四频繁
242|今天坐姿放松随意
243|近期记忆力很好不健忘
244|微信点赞只给熟人
245|近期容易健忘忘事
246|今天站姿挺拔
247|近期主动帮助陌生人
248|微信谁的动态都会点赞
249|近期比较社恐不爱社交
250|今天站姿随意放松
251|近期社牛主动社交
252|微信从不评论朋友圈
253|近期害怕尴尬冷场
254|今天主动缓解过冷场
255|微信经常评论朋友动态
256|近期喜欢安静独处
257|今天主动带动氛围
258|近期享受热闹聚会
259|微信很少私聊别人
260|近期容易被外界影响情绪
261|今天全程配合聚会游戏
262|近期情绪稳定不易波动
263|微信经常主动私聊好友
264|近期容易胡思乱想内耗
265|今天很懂礼貌分寸感足
266|近期心态松弛很通透
267|微信很少群内发言
268|近期纠结选择困难
269|今天性格随和很好说话
270|近期做事果断不纠结
271|微信经常在群里活跃
272|近期有拖延症严重
273|今天有自己的小原则底线
274|近期执行力很强不拖延
275|微信几乎不刷视频号
276|近期有坚持运动打卡
277|今天愿意配合所有人
278|近期彻底摆烂放松
279|微信每天必刷视频号
280|近期有学习新技能
281|今天偶尔有点小倔强
282|近期完全摆烂不学习
283|微信视频号喜欢点赞收藏
284|近期有提升自己穿搭
285|今天待人温柔有礼貌
286|近期穿搭一直很随意
287|微信视频号从不互动
288|近期有精致生活仪式感
289|今天偶尔幽默搞笑
290|近期生活过得很敷衍
291|微信经常清理好友列表
292|近期期待下次聚会
293|今天全程低调不张扬
294|近期不太喜欢热闹局
295|微信从不清理好友列表
296|近期珍惜朋友陪伴
297|今天偶尔高调显眼
298|近期很少主动维系朋友
299|微信有很多闲置群聊
300|近期主动联系老朋友
301|今天观察别人很细致
302|近期很久没联系老朋友
303|微信会清理闲置群聊
304|近期认识新的朋友
305|今天共情能力很强
306|近期社交圈子很固定
307|微信置顶过前任
308|近期尝试拓展社交圈
309|今天很会照顾别人情绪
310|近期容易敏感想太多
311|微信从未置顶过前任
312|近期大大咧咧不敏感
313|今天不喜欢争抢输赢
314|近期在意别人的评价
315|微信朋友圈无任何动态
316|近期不在意别人眼光
317|今天心态佛系随缘
318|近期容易羡慕别人生活
319|微信朋友圈动态很多
320|近期专注自己的生活
321|今天不爱主动表现自己
322|近期有制定小目标
323|微信动态全是生活碎片
324|近期没有任何目标规划
325|今天偶尔主动展示自己
326|近期完成过一个小目标
327|微信动态全是文案语录
328|近期目标全部搁置未做
329|今天做事很认真细致
330|近期有短暂的迷茫期
331|微信动态全是美食风景
332|近期状态稳定很清醒
333|今天做事比较大大咧咧
334|近期有治愈自己的时刻
335|微信动态全是搞笑日常
336|近期有自我怀疑的时刻
337|今天说话语速适中温柔
338|近期很热爱当下生活
339|微信动态全是自拍照片
340|近期偶尔厌倦当下生活
341|今天说话语速偏快爽朗
342|近期期待未来的变化
343|微信从不发自拍动态
344|近期害怕生活一成不变
345|今天说话语速偏慢沉稳
346|近期喜欢稳定不改变
347|微信很少发自拍动态
348|近期尝试突破自己舒适圈
349|今天说话直来直去
350|近期一直待在舒适圈
351|微信发圈频率很稳定
352|近期勇敢拒绝不合理要求
353|今天说话委婉有分寸
354|近期习惯性委屈自己妥协
355|微信发圈忽多忽少不稳定
356|近期懂得自爱优先自己
357|今天很少说废话
358|近期习惯性讨好别人
359|微信点赞只点熟人动态
360|近期学会拒绝和释怀
361|今天偶尔话痨停不下来
362|近期容易念旧回忆过去
363|微信陌生人动态从不点赞
364|近期活在当下不怀旧
365|今天记性很好不容易忘
366|近期偶尔遗憾过去的事
367|微信偶尔评论陌生动态
368|近期对过往完全释怀
369|今天偶尔容易健忘走神
370|近期期待遇见新的人
371|微信从不评论陌生动态
372|近期习惯独处不想交友
373|今天专注力很强不走神
374|近期有真诚对待所有人
375|微信只和固定好友聊天
376|近期偶尔敷衍对待他人
377|今天容易走神分心
378|近期待人真诚不套路
379|微信会主动开启新聊天
380|近期偶尔有心机小想法
381|今天观察力很敏锐
382|近期做人坦荡简单纯粹
383|微信很少主动开启聊天
384|近期容易想复杂事情
385|今天很会倾听别人说话
386|近期遇事简单化处理
387|微信聊天喜欢长篇文字
388|近期容易焦虑未来
389|今天说话懂得换位思考
390|近期对未来充满期待
391|微信聊天喜欢简短回复
392|近期容易焦虑当下生活
393|今天性格沉稳不急躁
394|近期心态乐观积极
395|微信聊天喜欢互动调侃
396|近期心态消极emo
397|今天性格活泼开朗
398|近期有好好热爱自己
399|微信聊天很严肃正经
400|近期偶尔自我内耗
401|今天很少生气发脾气
402|近期接纳自己的不完美
403|今天偶尔会小emo
404|近期一直自我挑剔
405|今天情绪管理很好
406|近期学会放过自己
407|今天偶尔情绪外露
408|近期对生活充满热爱
409|今天情绪很少外露
410|近期偶尔厌倦生活
411|今天很会调节自己心态
412|近期有坚持的爱好
413|今天偶尔钻牛角尖
414|近期爱好广泛很多乐趣
415|今天心胸豁达不较真
416|近期生活枯燥无爱好
417|今天偶尔爱较真细节
418|近期培养了新爱好
419|今天待人宽容大度
420|近期重拾旧爱好
421|今天偶尔有点小固执
422|近期放弃过无用爱好
423|今天很懂人情世故
424|近期活得简单纯粹
425|今天偶尔有点单纯懵懂
426|近期变得成熟通透
427|今天不喜欢复杂套路
428|近期经历让自己成长
429|今天做事踏实稳重
430|近期心态越来越平和
431|今天做事偶尔冲动
432|近期越来越佛系
433|今天做事三思而后行
434|近期越来越通透清醒
435|今天做事偶尔鲁莽
436|近期偶尔浮躁不安
437|今天很会照顾全场氛围
438|近期内心很安稳平静
439|今天容易被氛围带动
440|近期很少浮躁焦虑
441|今天有自己的独立想法
442|近期偶尔胡思乱想
443|今天容易随大众想法
444|近期思绪清晰不混乱
445|今天自信大方不怯场
446|近期偶尔自卑敏感
447|今天偶尔有点小社恐
448|近期一直自信坦然
449|今天适应陌生场合很快
450|近期害怕陌生环境
451|今天慢热需要熟悉氛围
452|近期主动适应新环境
453|今天很会接梗抛梗
454|近期社交毫无压力
455|今天偶尔接不住梗
456|近期社交轻微紧张
457|今天幽默感很足
458|近期笑点很低容易笑
459|今天笑点偏高不容易笑
460|近期笑点偏高很淡定
461|今天很容易被逗笑
462|近期很少开怀大笑
463|今天全程轻松无压力
464|近期偶尔身心疲惫
465|今天享受当下聚会氛围
466|近期很珍惜每次相聚
467|今天偶尔游离氛围之外
468|近期期待真诚的关系
469|今天待人真诚不敷衍
470|近期远离虚假社交
471|今天不喜欢虚假客套
472|近期看透很多人情世故
473|今天简单直接不绕弯
474|近期学会低调沉稳
475|今天偶尔温柔心软
476|近期偶尔心软泛滥
477|今天有原则不随便妥协
478|近期轻易妥协退让
479|今天懂得适可而止
480|近期容易过度付出
481|今天懂得把握分寸
482|近期不懂拒绝他人
483|今天界限感很清晰
484|近期界限感很模糊
485|今天为人低调内敛
486|近期偶尔高调张扬
487|今天不喜欢争抢风头
488|近期喜欢展示自己
489|今天甘当绿叶衬托他人
490|近期喜欢成为焦点
491|今天团队感很强
492|近期喜欢独来独往
493|今天懂得配合他人
494|近期喜欢我行我素
495|今天心态松弛不紧绷
496|近期心态紧绷焦虑
497|今天活的很通透清醒
498|近期偶尔迷茫糊涂
499|今天享受简单的快乐
500|近期懂得知足常乐
\`;
function category(text) {
  if (text.startsWith('今天')) return 'today';
  if (/微信|朋友圈|聊天|回消息/.test(text)) return 'social';
  if (text.startsWith('手机')) return 'phone';
  return 'life';
}
module.exports = raw.trim().split('\\n').map(row => {
  const [id, text] = row.split('|');
  return { id: Number(id), text, category: category(text) };
});
`,Ex=`module.exports = function createExtraGames(E, wx) {
  const words = {
    动物: ['长颈鹿', '大熊猫', '企鹅', '袋鼠', '鲨鱼', '章鱼', '骆驼', '螃蟹', '刺猬', '蝴蝶', '孔雀', '猫头鹰', '海豚', '蜗牛', '金鱼'],
    日常: ['雨伞', '电风扇', '牙刷', '热气球', '自行车', '冰淇淋', '汉堡包', '闹钟', '洗衣机', '耳机', '仙人掌', '吉他', '照相机', '望远镜', '西瓜'],
    动作: ['刷牙', '钓鱼', '跳绳', '滑雪', '打篮球', '踢足球', '做饭', '举重', '游泳', '放风筝', '滑滑梯', '荡秋千', '打鼓', '跳街舞', '打喷嚏'],
    场景: ['过山车', '摩天轮', '电影院', '动物园', '游乐场', '火山', '瀑布', '沙漠', '海边', '长城', '红绿灯', '斑马线', '飞机场', '音乐会', '露营']
  };
  const wordDeck = Object.entries(words).flatMap(([category, list]) => list.map(text => ({ text, category })));
  const colors = ['#d7fa38', '#ff725f', '#9f92ff', '#62d3f0', '#ffb9da', '#f4cd65', '#d1e4bc', '#90aaff', '#ef9b65', '#8ce3c3'];
  return {
    data: {
      drawLimit: 90, drawTimeLeft: 90, drawReady: false, drawWordVisible: false, drawWordLabel: '', drawHint: '', drawAnswer: '', drawOutcome: '', drawScores: [], drawGuessers: [],
      drawColor: '#182016', drawTool: 'pen', drawWidth: 5, drawStrokeCount: 0,
      drawColors: [{ color: '#182016', name: '黑色' }, { color: '#f04e42', name: '红色' }, { color: '#3976c6', name: '蓝色' }, { color: '#388d48', name: '绿色' }, { color: '#a46bc0', name: '紫色' }],
      sharkState: 'ready', sharkTeeth: [], sharkFeedback: '', sharkLoser: '', sharkRemaining: 12,
      fingerState: 'waiting', fingerPoints: [], fingerCountdown: 3, fingerWinner: '', fingerWinnerLabel: '', fingerDemoMode: false
    },
    methods: {
      stopExtraGames() {
        this._drawingActive = false; this._drawContext = null; this._drawWord = null;
        this._fingerTouches = []; this._fingerTimer = null; this._drawTimer = null;
      },
      startExtraGame(id) {
        if (id === 'draw') {
          this._drawDeck = E.shuffle(wordDeck);
          this.setData({ drawScores: this.data.players.map(p => ({ ...p, score: 0 })) });
          this.prepareDrawWord();
        }
        if (id === 'shark') this.resetSharkRound();
        if (id === 'finger') this.resetFingerRoulette(true);
      },
      chooseDrawLimit(event) { const n = Number(event.currentTarget.dataset.seconds); if ([60, 90, 120].includes(n)) this.setData({ drawLimit: n }); },
      prepareDrawWord() {
        if (!this._drawDeck || !this._drawDeck.length) this._drawDeck = E.shuffle(wordDeck);
        this._drawWord = this._drawDeck.pop(); this._strokes = []; this._activeStroke = null; this._drawingActive = false;
        this.setData({ phase: 'draw-word', drawWordVisible: false, drawWordLabel: '', drawAnswer: '', drawOutcome: '', drawReady: false, drawStrokeCount: 0, drawHint: \`\${this._drawWord.category} · \${this._drawWord.text.length} 个字\` });
      },
      peekDrawWord() { if (this._drawWord && ['draw-word', 'drawing'].includes(this.data.phase)) this.setData({ drawWordVisible: true, drawWordLabel: this._drawWord.text }); },
      hideDrawWord() { this.setData({ drawWordVisible: false, drawWordLabel: '' }); },
      changeDrawWord() { if (this.data.phase === 'draw-word') this.prepareDrawWord(); },
      beginDrawing() {
        if (!this._drawWord || this.data.phase !== 'draw-word') return;
        this.setData({ phase: 'drawing', drawWordVisible: false, drawWordLabel: '', drawTimeLeft: this.data.drawLimit, drawReady: false, drawTool: 'pen', drawColor: '#182016' });
        wx.nextTick(() => this.initDrawingCanvas());
      },
      initDrawingCanvas() {
        wx.createSelectorQuery().select('#drawingBoard').fields({ node: true, size: true }).exec(results => {
          if (this.data.screen !== 'game' || this.data.phase !== 'drawing') return;
          const result = results && results[0];
          if (!result || !result.node || !result.width || !result.height) return this.toast('画板未准备好，请返回后重新开局');
          const ratio = wx.getWindowInfo ? wx.getWindowInfo().pixelRatio || 1 : 1;
          result.node.width = Math.round(result.width * ratio); result.node.height = Math.round(result.height * ratio);
          this._drawContext = result.node.getContext('2d'); this._drawContext.scale(ratio, ratio);
          this._drawSize = { width: result.width, height: result.height }; this._strokes = [];
          this.paintDrawBoard(); this.setData({ drawReady: true }); this.tickDrawTimer();
        });
      },
      tickDrawTimer() {
        this._drawTimer = this.setTimer(() => {
          if (this.data.phase !== 'drawing') return;
          const left = Math.max(0, this.data.drawTimeLeft - 1); this.setData({ drawTimeLeft: left });
          if (!left) this.finishDrawRound({ currentTarget: { dataset: { outcome: 'timeout' } } });
          else this.tickDrawTimer();
        }, 1000);
      },
      drawPoint(event) {
        const point = event.touches && event.touches[0];
        if (!point || !this._drawSize) return null;
        return { x: Math.max(0, Math.min(this._drawSize.width, point.x)), y: Math.max(0, Math.min(this._drawSize.height, point.y)) };
      },
      startDrawing(event) {
        if (!this.data.drawReady || this.data.phase !== 'drawing' || this.data.drawWordVisible) return;
        const point = this.drawPoint(event); if (!point) return;
        this._drawingActive = true;
        this._activeStroke = { color: this.data.drawTool === 'eraser' ? '#f3f0e4' : this.data.drawColor, width: this.data.drawTool === 'eraser' ? 22 : this.data.drawWidth, points: [point] };
        this.paintStroke(this._activeStroke);
      },
      moveDrawing(event) {
        if (!this._drawingActive || !this._activeStroke) return;
        const point = this.drawPoint(event); if (!point) return;
        const previous = this._activeStroke.points[this._activeStroke.points.length - 1];
        this._activeStroke.points.push(point);
        this.paintStroke({ ...this._activeStroke, points: [previous, point] });
      },
      endDrawing() {
        if (this._drawingActive && this._activeStroke) this._strokes.push(this._activeStroke);
        this._drawingActive = false; this._activeStroke = null;
        this.setData({ drawStrokeCount: (this._strokes || []).length });
      },
      paintStroke(stroke) {
        const ctx = this._drawContext; if (!ctx || !stroke.points.length) return;
        ctx.strokeStyle = stroke.color; ctx.fillStyle = stroke.color; ctx.lineWidth = stroke.width; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath();
        const first = stroke.points[0];
        if (stroke.points.length === 1) { ctx.arc(first.x, first.y, stroke.width / 2, 0, Math.PI * 2); ctx.fill(); return; }
        ctx.moveTo(first.x, first.y); stroke.points.slice(1).forEach(p => ctx.lineTo(p.x, p.y)); ctx.stroke();
      },
      paintDrawBoard() {
        if (!this._drawContext || !this._drawSize) return;
        this._drawContext.fillStyle = '#f3f0e4'; this._drawContext.fillRect(0, 0, this._drawSize.width, this._drawSize.height);
        (this._strokes || []).forEach(stroke => this.paintStroke(stroke));
      },
      chooseDrawColor(event) { const color = event.currentTarget.dataset.color; if (this.data.drawColors.some(c => c.color === color)) this.setData({ drawColor: color, drawTool: 'pen' }); },
      chooseDrawWidth(event) { const width = Number(event.currentTarget.dataset.width); if ([3, 5, 10].includes(width)) this.setData({ drawWidth: width, drawTool: 'pen' }); },
      toggleEraser() { this.setData({ drawTool: this.data.drawTool === 'eraser' ? 'pen' : 'eraser' }); },
      undoDrawing() { if (!this._drawingActive && this._strokes && this._strokes.length) { this._strokes.pop(); this.paintDrawBoard(); this.setData({ drawStrokeCount: this._strokes.length }); } },
      clearDrawing() {
        if (!this._strokes || !this._strokes.length) return;
        wx.showModal({ title: '清空这张画？', content: '题目和倒计时会继续，画面将清空。', confirmText: '清空画板', success: r => { if (r.confirm && this.data.phase === 'drawing') { this._strokes = []; this._drawingActive = false; this._activeStroke = null; this.paintDrawBoard(); this.setData({ drawStrokeCount: 0 }); } } });
      },
      finishDrawRound(event) {
        if (this.data.phase !== 'drawing') return;
        this.endDrawing(); this.cancelTimer(this._drawTimer); this._drawTimer = null;
        const outcome = event.currentTarget.dataset.outcome;
        this.setData({ phase: outcome === 'guessed' ? 'draw-assign' : 'draw-result', drawReady: false, drawWordVisible: false, drawWordLabel: '', drawAnswer: this._drawWord.text, drawOutcome: outcome, drawGuessers: this.data.players.filter(p => p.id !== this.data.players[this.data.playerIndex].id) }); this.buzz();
      },
      assignDrawGuesser(event) {
        if (this.data.phase !== 'draw-assign') return;
        const id = event.currentTarget.dataset.id;
        if (!this.data.drawGuessers.some(p => p.id === id)) return;
        const drawer = this.data.players[this.data.playerIndex].id;
        this.setData({ phase: 'draw-result', drawScores: this.data.drawScores.map(p => ({ ...p, score: p.score + (p.id === drawer || p.id === id ? 1 : 0) })) });
      },
      nextDrawRound() {
        if (this.data.phase !== 'draw-result') return;
        const index = (this.data.playerIndex + 1) % this.data.players.length;
        this.setData({ playerIndex: index, currentPlayer: this.data.players[index].name, round: this.data.round + 1 });
        this.prepareDrawWord();
      },
      resetSharkRound() {
        this._sharkTrap = E.int(12);
        const sharkTeeth = Array.from({ length: 12 }, (_, index) => {
          const a = (185 - index * 190 / 11) * Math.PI / 180;
          return { id: index, pressed: false, hit: false, position: \`left:\${50 + Math.cos(a) * 36}%;top:\${53 + Math.sin(a) * 29}%;\` };
        });
        this.setData({ phase: 'playing', sharkState: 'ready', sharkTeeth, sharkFeedback: '选一颗牙，轻轻按下去。', sharkLoser: '', sharkRemaining: 12 });
      },
      pressSharkTooth(event) {
        if (this.data.sharkState !== 'ready') return;
        const id = Number(event.currentTarget.dataset.id);
        const tooth = this.data.sharkTeeth.find(t => t.id === id); if (!tooth || tooth.pressed) return;
        const hit = id === this._sharkTrap;
        const sharkTeeth = this.data.sharkTeeth.map(t => t.id === id ? { ...t, pressed: true, hit } : t);
        this.setData({ sharkTeeth, sharkRemaining: this.data.sharkRemaining - 1 }); this.buzz();
        if (hit) {
          const sharkLoser = this.data.currentPlayer;
          this.setData({ sharkState: 'biting', sharkFeedback: '咔哒！鲨鱼醒了…', sharkLoser });
          this.setTimer(() => { this.setData({ sharkState: 'bitten', sharkFeedback: \`\${sharkLoser} 被鲨鱼逮住了！\` }); this.buzz(); }, 650);
        } else {
          const index = (this.data.playerIndex + 1) % this.data.players.length;
          this.setData({ playerIndex: index, currentPlayer: this.data.players[index].name, sharkFeedback: '安全过关！换下一位试试手气。' });
        }
      },
      nextSharkRound() {
        if (this.data.sharkState !== 'bitten') return;
        const index = (this.data.playerIndex + 1) % this.data.players.length;
        this.setData({ playerIndex: index, currentPlayer: this.data.players[index].name, round: this.data.round + 1 }); this.resetSharkRound();
      },
      resetFingerRoulette(force) {
        if (force !== true && !this.data.fingerDemoMode && (this._fingerTouches || []).length) return this.toast('先松开所有手指，再开始下一轮');
        if (this._fingerTimer) this.cancelTimer(this._fingerTimer);
        this._fingerTimer = null; this._fingerTouches = [];
        this.setData({ phase: 'playing', fingerState: 'waiting', fingerPoints: [], fingerCountdown: 3, fingerWinner: '', fingerDemoMode: false });
        wx.nextTick(() => wx.createSelectorQuery().select('#fingerBoard').fields({ size: true, rect: true }).exec(results => { if (results && results[0]) this._fingerRect = results[0]; }));
      },
      fingerTouch(event) {
        if (!this._fingerRect || this.data.fingerDemoMode) return;
        const r = this._fingerRect;
        const touches = (event.touches || []).map((p, i) => ({ id: String(p.identifier === undefined ? i : p.identifier), x: typeof p.x === 'number' ? p.x : p.clientX - r.left, y: typeof p.y === 'number' ? p.y : p.clientY - r.top })).filter(p => p.x >= 0 && p.y >= 0 && p.x <= r.width && p.y <= r.height).slice(0, 10);
        this._fingerTouches = touches;
        if (this.data.fingerState === 'chosen') return;
        this.applyFingerTouches(touches);
      },
      applyFingerTouches(touches) {
        const previousIds = this.data.fingerPoints.map(p => p.id).sort().join(',');
        const nextIds = touches.map(p => p.id).sort().join(',');
        const fingerPoints = touches.map((p, index) => ({ ...p, label: index + 1, color: colors[index], position: \`left:\${p.x}px;top:\${p.y}px;border-color:\${colors[index]};background:\${colors[index]}22;\` }));
        this.setData({ fingerPoints });
        if (touches.length < 2 || previousIds !== nextIds) {
          if (this._fingerTimer) this.cancelTimer(this._fingerTimer);
          this._fingerTimer = null; this.setData({ fingerState: touches.length >= 2 ? 'countdown' : 'waiting', fingerCountdown: 3 });
        }
        if (touches.length >= 2 && !this._fingerTimer) this.tickFingerTimer();
      },
      tickFingerTimer() {
        this._fingerTimer = this.setTimer(() => {
          this._fingerTimer = null;
          if (this.data.fingerState !== 'countdown' || (this._fingerTouches || []).length < 2) return;
          const left = this.data.fingerCountdown - 1;
          if (left > 0) { this.setData({ fingerCountdown: left }); this.buzz(); this.tickFingerTimer(); }
          else { const chosen = E.pick(this._fingerTouches); const selected = this.data.fingerPoints.find(p => p.id === chosen.id); this.setData({ fingerState: 'chosen', fingerCountdown: 0, fingerWinner: chosen.id, fingerWinnerLabel: selected ? selected.label : '' }); this.buzz(); }
        }, 1000);
      },
      demoFingerRoulette() {
        if ((this._fingerTouches || []).length || this.data.fingerState !== 'waiting' || !this._fingerRect) return;
        const { width, height } = this._fingerRect;
        const points = [{ id: 'demo-a', x: width * .25, y: height * .34 }, { id: 'demo-b', x: width * .7, y: height * .4 }, { id: 'demo-c', x: width * .48, y: height * .72 }];
        this._fingerTouches = points; this.setData({ fingerDemoMode: true }); this.applyFingerTouches(points);
      }
    },
    wordDeck
  };
};
`;function pf(e){return e.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"')}function Qn(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function io(e){return pf(e).replace(/^\{\{([\s\S]*)\}\}$/,"$1")}function Cx(e){return pf(e).split(/(\{\{[\s\S]*?\}\})/g).filter(Boolean).map(n=>n.startsWith("{{")?`(${io(n)})`:JSON.stringify(n)).join(" + ")}function Ax(e){const t={view:"div",text:"span",image:"img",block:"template"};return e.replace(/<([a-z][\w-]*)((?:"[^"]*"|'[^']*'|[^'">])*)>/g,(n,i,s)=>{const r=[...s.matchAll(/([\w:-]+)(?:="([^"]*)")?/g)].map(c=>[c[1],c[2]]),o=c=>r.find(f=>f[0]===c)?.[1],a=o("wx:for-item")||"item",l=o("wx:for-index")||"index",d=[];for(const[c,f]of r)if(!(c==="wx:for-item"||c==="wx:for-index"||c==="mode"))if(c==="wx:for")d.push(`v-for="${Qn(`(${a}, ${l}) in (${io(f)})`)}"`);else if(c==="wx:key")d.push(`:key="${Qn(f==="*this"?a:f==="index"?l:`${a}.${f}`)}"`);else if(c==="wx:if"||c==="wx:elif")d.push(`${c==="wx:if"?"v-if":"v-else-if"}="${Qn(io(f))}"`);else if(c==="wx:else")d.push("v-else");else if(c==="bindtap"||c==="catchtap")d.push(`@click${c==="catchtap"?".stop":""}="${f}"`);else if(c==="bindinput")d.push(`@input="${f}({ currentTarget: $event.currentTarget, detail: { value: $event.target.value } })"`);else if(/^(bind|catch)touch(start|move|end|cancel)$/.test(c)){const u={start:"pointerdown",move:"pointermove",end:"pointerup",cancel:"pointercancel"}[c.match(/touch(.*)$/)[1]];d.push(`@${u}${c.startsWith("catch")?".prevent":""}="pointerSurface($event, '${f}')"`)}else f&&f.includes("{{")?d.push(`:${c}="${Qn(Cx(f))}"`):d.push(f===void 0?c:`${c}="${Qn(f)}"`);return`<${t[i]||i} ${d.join(" ")}>`}).replace(/<\/([\w-]+)>/g,(n,i)=>["image","input"].includes(i)?"":`</${t[i]||i}>`)}function Px(e){const t={page:"body",view:"div",text:"span",image:"img"};return e.replace(/(^|[{}])([^{}]+)\{/g,(n,i,s)=>{for(const[r,o]of Object.entries(t))s=s.replace(new RegExp(`(?<![\\w-])${r}(?![\\w-])`,"g"),o);return`${i}${s}{`}).replace(/(-?\d*\.?\d+)rpx/g,"calc(var(--rpx) * $1)")}function so(e,t={}){const n={exports:{}};return new Function("module","exports","require",e)(n,n.exports,i=>{if(!(i in t))throw new Error(`Unmapped preview module: ${i}`);return t[i]}),n.exports}function uf(e,t="/"){const n=t.endsWith("/")?t:`${t}/`;return e.replace(/\/assets\//g,`${n}assets/`)}const hf=document.createElement("style");hf.textContent=Px(vx+`
`+_x);document.head.appendChild(hf);function gf(){document.documentElement.style.setProperty("--rpx",`${Math.min(window.innerWidth,540)/750}px`)}gf();window.addEventListener("resize",gf);for(const e of["gesturestart","gesturechange","gestureend"])document.addEventListener(e,t=>t.preventDefault(),{passive:!1});document.addEventListener("touchmove",e=>{e.touches.length>1&&e.preventDefault()},{passive:!1});const Rx={getStorageSync:e=>JSON.parse(localStorage.getItem(e)||"null"),setStorageSync:(e,t)=>localStorage.setItem(e,JSON.stringify(t)),getWindowInfo:()=>({statusBarHeight:0,pixelRatio:devicePixelRatio||1}),nextTick:e=>wn(e),createSelectorQuery:()=>{let e,t={};const n={select(i){return e=i,n},fields(i){return t=i,n},exec(i){const s=document.querySelector(e);if(!s){i([null]);return}const r=s.getBoundingClientRect();i([{width:r.width,height:r.height,left:r.left,top:r.top,...t.node?{node:s}:{}}])}};return n},vibrateShort:()=>{try{navigator.vibrate&&navigator.vibrate(12)}catch{}},pageScrollTo:({scrollTop:e})=>window.scrollTo({top:e,behavior:"instant"}),showToast:({title:e})=>{document.querySelector(".web-toast")?.remove();const t=document.createElement("div");t.className="web-toast",t.textContent=e,t.setAttribute("role","status"),document.body.appendChild(t),setTimeout(()=>t.remove(),2600)},showModal:({title:e,content:t,confirmText:n,success:i})=>{const s=document.createElement("dialog");s.className="web-confirm";const r=document.createElement("h2");r.textContent=e;const o=document.createElement("p");o.textContent=t;const a=document.createElement("div"),l=document.createElement("button");l.textContent="取消";const d=document.createElement("button");d.textContent=n||"确认",d.className="confirm-action";const c=f=>{s.close(),s.remove(),i?.({confirm:f,cancel:!f})};l.onclick=()=>c(!1),d.onclick=()=>c(!0),s.oncancel=f=>{f.preventDefault(),c(!1)},a.append(l,d),s.append(r,o,a),document.body.append(s),s.showModal(),l.focus()}};let di;const Nx=so(Tx,{"./wheel-prompts":so(kx)}),Ix=so(Ex),Dx=uf(Sx,"/chen-yijie-website/nanrenbang/");new Function("Page","wx","require",Dx)(e=>{di=e},Rx,e=>e.includes("party-extras")?Ix:Nx);const Ox=Object.fromEntries(Object.entries(di).filter(([e,t])=>typeof t=="function"&&!["onLoad","onUnload","onShareAppMessage"].includes(e))),Mx=Rs({data:()=>JSON.parse(JSON.stringify(di.data)),computed:{data(){return this.$data}},methods:{...Ox,setData(e){Object.assign(this.$data,e)},pointerSurface(e,t){const n=e.currentTarget;n._partyPointers||(n._partyPointers=new Map);const i=n.getBoundingClientRect(),s={identifier:e.pointerId,x:e.clientX-i.left,y:e.clientY-i.top};if(e.type==="pointerdown")n._partyPointers.set(e.pointerId,s),n.setPointerCapture?.(e.pointerId);else if(e.type==="pointermove"){if(!n._partyPointers.has(e.pointerId))return;n._partyPointers.set(e.pointerId,s)}else n._partyPointers.delete(e.pointerId);this[t]({touches:[...n._partyPointers.values()],changedTouches:[s],currentTarget:{dataset:n.dataset}})}},template:Ax(uf(yx,"/chen-yijie-website/nanrenbang/")),mounted(){di.onLoad.call(this)},beforeUnmount(){di.onUnload.call(this)},watch:{showPlayers(e){document.body.classList.toggle("modal-open",e||this.showRules),e&&wn(()=>document.querySelector(".player-editor input")?.focus())},showRules(e){document.body.classList.toggle("modal-open",e||this.showPlayers||this.showHomePhoto)},showHomePhoto(e){document.body.classList.toggle("modal-open",e||this.showPlayers||this.showRules)}}}),Cr=Mx.mount("#app");"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");wn(()=>window.scrollTo({top:0,behavior:"instant"}));window.addEventListener("keydown",e=>{e.key==="Escape"&&(Cr.closePlayers(),Cr.closeRules(),Cr.closeHomePhoto())});
