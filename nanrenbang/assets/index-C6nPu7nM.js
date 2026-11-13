(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function nt(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const te={},pn=[],De=()=>{},Pn=()=>!1,yn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ks=e=>e.startsWith("onUpdate:"),Z=Object.assign,go=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Fp=Object.prototype.hasOwnProperty,re=(e,t)=>Fp.call(e,t),H=Array.isArray,Xt=e=>Kn(e)==="[object Map]",St=e=>Kn(e)==="[object Set]",wa=e=>Kn(e)==="[object Date]",zp=e=>Kn(e)==="[object RegExp]",Y=e=>typeof e=="function",J=e=>typeof e=="string",$e=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",mo=e=>(ae(e)||Y(e))&&Y(e.then)&&Y(e.catch),Pl=Object.prototype.toString,Kn=e=>Pl.call(e),$p=e=>Kn(e).slice(8,-1),Gs=e=>Kn(e)==="[object Object]",qs=e=>J(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ft=nt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vp=nt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Ys=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Hp=/-\w/g,ce=Ys(e=>e.replace(Hp,t=>t.slice(1).toUpperCase())),jp=/\B([A-Z])/g,Ge=Ys(e=>e.replace(jp,"-$1").toLowerCase()),vn=Ys(e=>e.charAt(0).toUpperCase()+e.slice(1)),Nn=Ys(e=>e?`on${vn(e)}`:""),Ie=(e,t)=>!Object.is(e,t),Dn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Rl=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},Di=e=>{const t=parseFloat(e);return isNaN(t)?e:t},gs=e=>{const t=J(e)?Number(e):NaN;return isNaN(t)?e:t};let xa;const Js=()=>xa||(xa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bp(e,t){return e+JSON.stringify(t,(n,i)=>typeof i=="function"?i.toString():i)}const Wp="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",Up=nt(Wp);function Oi(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=J(i)?Nl(i):Oi(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(J(e)||ae(e))return e}const Kp=/;(?![^(]*\))/g,Gp=/:([^]+)/,qp=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Nl(e){const t={};return e.replace(qp,n=>n.startsWith("/*")?"":n).split(Kp).forEach(n=>{if(n){const i=n.split(Gp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Mi(e){let t="";if(J(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const i=Mi(e[n]);i&&(t+=i+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Yp(e){if(!e)return null;let{class:t,style:n}=e;return t&&!J(t)&&(e.class=Mi(t)),n&&(e.style=Oi(n)),e}const Jp="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Xp="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Zp="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",Qp="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",eu=nt(Jp),tu=nt(Xp),nu=nt(Zp),iu=nt(Qp),su="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",ru=nt(su);function Dl(e){return!!e||e===""}function ou(e,t,n){if(e.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<e.length;s++)i=dt(e[s],t[s],n);return i}function ya(e,t,n){if(e.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of e){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&dt(r,i[a],n)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function au(e,t,n){let i=Xt(e),s=Xt(t);if(i||s||(i=St(e),s=St(t),i||s))return i&&s?ya(e,t,n):!1;const r=Object.keys(e).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in e){const l=e.hasOwnProperty(a),d=t.hasOwnProperty(a);if(l&&!d||!l&&d||!dt(e[a],t[a],n))return!1}return String(e)===String(t)}function va(e,t,n,i){n||(n=[new Map,new Map]);const[s,r]=n;if(s.has(e)||r.has(t))return s.get(e)===t&&r.get(t)===e;s.set(e,t),r.set(t,e);const o=i(e,t,n);return s.delete(e),r.delete(t),o}function dt(e,t,n){if(e===t)return!0;let i=wa(e),s=wa(t);return i||s?i&&s?e.getTime()===t.getTime():!1:(i=$e(e),s=$e(t),i||s?e===t:(i=H(e),s=H(t),i||s?i&&s?va(e,t,n,ou):!1:(i=ae(e),s=ae(t),i||s?!i||!s?!1:va(e,t,n,au):String(e)===String(t))))}function Xs(e,t){return e.findIndex(n=>dt(n,t))}const Ol=e=>!!(e&&e.__v_isRef===!0),Ml=e=>J(e)?e:e==null?"":H(e)||ae(e)&&(e.toString===Pl||!Y(e.toString))?Ol(e)?Ml(e.value):JSON.stringify(e,Ll,2):String(e),Ll=(e,t)=>Ol(t)?Ll(e,t.value):Xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s],r)=>(n[yr(i,r)+" =>"]=s,n),{})}:St(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>yr(n))}:$e(t)?yr(t):ae(t)&&!H(t)&&!Gs(t)?String(t):t,yr=(e,t="")=>{var n;return $e(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};function lu(e){return e==null?"initial":typeof e=="string"?e===""?" ":e:String(e)}let Se;class bo{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Se&&(Se.active?(this.parent=Se,this.index=(Se.scopes||(Se.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const i=this.scopes.slice();for(t=0,n=i.length;t<n;t++)i[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const i=this.effects.slice();for(t=0,n=i.length;t<n;t++)i[t].resume()}}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){++this._on===1&&(this.prevScope=Se,Se=this)}off(){if(this._on>0&&--this._on===0){if(Se===this)Se=this.prevScope;else{let t=Se;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,i=s.length;n<i;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function cu(e){return new bo(e)}function Fl(){return Se}function zl(e,t=!1){Se&&(Se.active?Se.cleanups.push(e):e())}let ue;const vr=new WeakSet;class gi{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&(Se.active?Se.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vr.has(this)&&(vr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ka(this),Hl(this);const t=ue,n=ft;ue=this,ft=!0;try{return this.fn()}finally{jl(this),ue=t,ft=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)yo(t);this.deps=this.depsTail=void 0,ka(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Lr(this)&&this.run()}get dirty(){return Lr(this)}}let $l=0,ai,li;function Vl(e,t=!1){if(e.flags|=8,t){e.next=li,li=e;return}e.next=ai,ai=e}function wo(){$l++}function xo(){if(--$l>0)return;if(li){let t=li;for(li=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;ai;){let t=ai;for(ai=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function Hl(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function jl(e){let t,n=e.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),yo(i),du(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=t,e.depsTail=n}function Lr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Bl(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Bl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===mi)||(e.globalVersion=mi,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Lr(e))))return;e.flags|=2;const t=e.dep,n=ue,i=ft;ue=e,ft=!0;try{Hl(e);const s=e.fn(e._value);(t.version===0||Ie(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ue=n,ft=i,jl(e),e.flags&=-3}}function yo(e,t=!1){const{dep:n,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)yo(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function du(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}function pu(e,t){e.effect instanceof gi&&(e=e.effect.fn);const n=new gi(e);t&&Z(n,t);try{n.run()}catch(s){throw n.stop(),s}const i=n.run.bind(n);return i.effect=n,i}function uu(e){e.effect.stop()}let ft=!0;const Wl=[];function _t(){Wl.push(ft),ft=!1}function Tt(){const e=Wl.pop();ft=e===void 0?!0:e}function ka(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ue;ue=void 0;try{t()}finally{ue=n}}}let mi=0;class fu{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ue||!ft||ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ue)n=this.activeLink=new fu(ue,this),ue.deps?(n.prevDep=ue.depsTail,ue.depsTail.nextDep=n,ue.depsTail=n):ue.deps=ue.depsTail=n,Ul(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ue.depsTail,n.nextDep=void 0,ue.depsTail.nextDep=n,ue.depsTail=n,ue.deps===n&&(ue.deps=i)}return n}trigger(t){this.version++,mi++,this.notify(t)}notify(t){wo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{xo()}}}function Ul(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Ul(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ms=new WeakMap,fn=Symbol(""),Fr=Symbol(""),bi=Symbol("");function Le(e,t,n){if(ft&&ue){let i=ms.get(e);i||ms.set(e,i=new Map);let s=i.get(n);s||(i.set(n,s=new Zs),s.map=i,s.key=n),s.track()}}function Dt(e,t,n,i,s,r){const o=ms.get(e);if(!o){mi++;return}const a=l=>{l&&l.trigger()};if(wo(),t==="clear")o.forEach(a);else{const l=H(e),d=l&&qs(n);if(l&&n==="length"){const c=Number(i);o.forEach((p,m)=>{(m==="length"||m===bi||!$e(m)&&m>=c)&&a(p)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),d&&a(o.get(bi)),t){case"add":l?d&&a(o.get("length")):(a(o.get(fn)),Xt(e)&&a(o.get(Fr)));break;case"delete":l||(a(o.get(fn)),Xt(e)&&a(o.get(Fr)));break;case"set":Xt(e)&&a(o.get(fn));break}}xo()}function hu(e,t){const n=ms.get(e);return n&&n.get(t)}function Tn(e){const t=ie(e);return t===e||(Le(t,"iterate",bi),qe(e))?t:mt(e)?kt(e)?t.map(n=>nn(pt(n))):t.map(nn):t.map(pt)}function Qs(e){return Le(e=ie(e),"iterate",bi),e}function yt(e,t){return mt(e)?nn(kt(e)?pt(t):t):pt(t)}const gu={__proto__:null,[Symbol.iterator](){return kr(this,Symbol.iterator,e=>yt(this,e))},concat(...e){return Tn(this).concat(...e.map(t=>H(t)?Tn(t):t))},entries(){return kr(this,"entries",e=>(e[1]=yt(this,e[1]),e))},every(e,t){return At(this,"every",e,t,void 0,arguments)},filter(e,t){return At(this,"filter",e,t,n=>n.map(i=>yt(this,i)),arguments)},find(e,t){return At(this,"find",e,t,n=>yt(this,n),arguments)},findIndex(e,t){return At(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return At(this,"findLast",e,t,n=>yt(this,n),arguments)},findLastIndex(e,t){return At(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return At(this,"forEach",e,t,void 0,arguments)},includes(...e){return Sr(this,"includes",e)},indexOf(...e){return Sr(this,"indexOf",e)},join(e){return Tn(this).join(e)},lastIndexOf(...e){return Sr(this,"lastIndexOf",e)},map(e,t){return At(this,"map",e,t,void 0,arguments)},pop(){return Jn(this,"pop")},push(...e){return Jn(this,"push",e)},reduce(e,...t){return _a(this,"reduce",e,t)},reduceRight(e,...t){return _a(this,"reduceRight",e,t)},shift(){return Jn(this,"shift")},some(e,t){return At(this,"some",e,t,void 0,arguments)},splice(...e){return Jn(this,"splice",e)},toReversed(){return Tn(this).toReversed()},toSorted(e){return Tn(this).toSorted(e)},toSpliced(...e){return Tn(this).toSpliced(...e)},unshift(...e){return Jn(this,"unshift",e)},values(){return kr(this,"values",e=>yt(this,e))}};function kr(e,t,n){const i=Qs(e),s=i[t],r=s.call(i);if(i!==e&&!qe(e)){if(r[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(r));return o.next=()=>Sa(r.next(),n),s!==Kl[t]&&Object.defineProperties(o,{return:{get(){const a=r.return;return typeof a=="function"?a.bind(r):a}},throw:{get(){const a=r.throw;return typeof a=="function"?a.bind(r):a}}}),o}r._next=r.next,r.next=()=>Sa(r._next(),n)}return r}function Sa(e,t){return e.done||(e.value=t(e.value)),e}const Kl=Array.prototype;function At(e,t,n,i,s,r){const o=Qs(e),a=o!==e&&!qe(e),l=o[t];if(l!==Kl[t]){const p=l.apply(e,r);return a?pt(p):p}let d=n;o!==e&&(a?d=function(p,m){return n.call(this,yt(e,p),m,e)}:n.length>2&&(d=function(p,m){return n.call(this,p,m,e)}));const c=l.call(o,d,i);return a&&s?s(c):c}function _a(e,t,n,i){const s=Qs(e),r=s!==e&&!qe(e);let o=n,a=!1;s!==e&&(r?(a=i.length===0,o=function(d,c,p){return a&&(a=!1,d=yt(e,d)),n.call(this,d,yt(e,c),p,e)}):n.length>3&&(o=function(d,c,p){return n.call(this,d,c,p,e)}));const l=s[t](o,...i);return a?yt(e,l):l}function Sr(e,t,n){const i=ie(e);Le(i,"iterate",bi);const s=i[t](...n);return(s===-1||s===!1)&&Li(n[0])?(n[0]=ie(n[0]),i[t](...n)):s}function Jn(e,t,n=[]){_t(),wo();const i=ie(e)[t].apply(e,n);return xo(),Tt(),i}const mu=nt("__proto__,__v_isRef,__isVue"),Gl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($e));function bu(e){$e(e)||(e=String(e));const t=ie(this);return Le(t,"has",e),t.hasOwnProperty(e)}class ql{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?ec:Ql:r?Zl:Xl).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=H(t);if(!s){let l;if(o&&(l=gu[n]))return l;if(n==="hasOwnProperty")return bu}const a=Reflect.get(t,n,Te(t)?t:i);if(($e(n)?Gl.has(n):mu(n))||(s||Le(t,"get",n),r))return a;if(Te(a)){const l=o&&qs(n)?a:a.value;return s&&ae(l)?bs(l):l}return ae(a)?s?bs(a):tr(a):a}}class Yl extends ql{constructor(t=!1){super(!1,t)}set(t,n,i,s){let r=t[n];const o=H(t)&&qs(n);if(!this._isShallow){const d=mt(r);if(!qe(i)&&!mt(i)&&(r=ie(r),i=ie(i)),!o&&Te(r)&&!Te(i))return d||(r.value=i),!0}const a=o?Number(n)<t.length:re(t,n),l=Reflect.set(t,n,i,Te(t)?t:s);return t===ie(s)&&l&&(a?Ie(i,r)&&Dt(t,"set",n,i):Dt(t,"add",n,i)),l}deleteProperty(t,n){const i=re(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&i&&Dt(t,"delete",n,void 0),s}has(t,n){const i=Reflect.has(t,n);return(!$e(n)||!Gl.has(n))&&Le(t,"has",n),i}ownKeys(t){return Le(t,"iterate",H(t)?"length":fn),Reflect.ownKeys(t)}}class Jl extends ql{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const wu=new Yl,xu=new Jl,yu=new Yl(!0),vu=new Jl(!0),zr=e=>e,Ki=e=>Reflect.getPrototypeOf(e);function ku(e,t,n){return function(...i){const s=this.__v_raw,r=ie(s),o=Xt(r),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,d=s[e](...i),c=n?zr:t?nn:pt;return!t&&Le(r,"iterate",l?Fr:fn),Z(Object.create(d),{next(){const{value:p,done:m}=d.next();return m?{value:p,done:m}:{value:a?[c(p[0]),c(p[1])]:c(p),done:m}}})}}function Gi(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Su(e,t){const n={get(s){const r=this.__v_raw,o=ie(r),a=ie(s);e||(Ie(s,a)&&Le(o,"get",s),Le(o,"get",a));const{has:l}=Ki(o),d=t?zr:e?nn:pt;if(l.call(o,s))return d(r.get(s));if(l.call(o,a))return d(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!e&&Le(ie(s),"iterate",fn),s.size},has(s){const r=this.__v_raw,o=ie(r),a=ie(s);return e||(Ie(s,a)&&Le(o,"has",s),Le(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ie(a),d=t?zr:e?nn:pt;return!e&&Le(l,"iterate",fn),a.forEach((c,p)=>s.call(r,d(c),d(p),o))}};return Z(n,e?{add:Gi("add"),set:Gi("set"),delete:Gi("delete"),clear:Gi("clear")}:{add(s){const r=ie(this),o=Ki(r),a=ie(s),l=!t&&!qe(s)&&!mt(s)?a:s;return o.has.call(r,l)||Ie(s,l)&&o.has.call(r,s)||Ie(a,l)&&o.has.call(r,a)||(r.add(l),Dt(r,"add",l,l)),this},set(s,r){!t&&!qe(r)&&!mt(r)&&(r=ie(r));const o=ie(this),{has:a,get:l}=Ki(o);let d=a.call(o,s);d||(s=ie(s),d=a.call(o,s));const c=l.call(o,s);return o.set(s,r),d?Ie(r,c)&&Dt(o,"set",s,r):Dt(o,"add",s,r),this},delete(s){const r=ie(this),{has:o,get:a}=Ki(r);let l=o.call(r,s);l||(s=ie(s),l=o.call(r,s)),a&&a.call(r,s);const d=r.delete(s);return l&&Dt(r,"delete",s,void 0),d},clear(){const s=ie(this),r=s.size!==0,o=s.clear();return r&&Dt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ku(s,e,t)}),n}function er(e,t){const n=Su(e,t);return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_isShallow"?t:s==="__v_raw"?i:Reflect.get(re(n,s)&&s in i?n:i,s,r)}const _u={get:er(!1,!1)},Tu={get:er(!1,!0)},Eu={get:er(!0,!1)},Cu={get:er(!0,!0)},Xl=new WeakMap,Zl=new WeakMap,Ql=new WeakMap,ec=new WeakMap;function Au(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tr(e){return mt(e)?e:nr(e,!1,wu,_u,Xl)}function tc(e){return nr(e,!1,yu,Tu,Zl)}function bs(e){return nr(e,!0,xu,Eu,Ql)}function Iu(e){return nr(e,!0,vu,Cu,ec)}function nr(e,t,n,i,s){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const r=s.get(e);if(r)return r;const o=Au($p(e));if(o===0)return e;const a=new Proxy(e,o===2?i:n);return s.set(e,a),a}function kt(e){return mt(e)?kt(e.__v_raw):!!(e&&e.__v_isReactive)}function mt(e){return!!(e&&e.__v_isReadonly)}function qe(e){return!!(e&&e.__v_isShallow)}function Li(e){return e?!!e.__v_raw:!1}function ie(e){const t=e&&e.__v_raw;return t?ie(t):e}function nc(e){return!re(e,"__v_skip")&&Object.isExtensible(e)&&Rl(e,"__v_skip",!0),e}const pt=e=>ae(e)?tr(e):e,nn=e=>ae(e)?bs(e):e;function Te(e){return e?e.__v_isRef===!0:!1}function ci(e){return sc(e,!1)}function ic(e){return sc(e,!0)}function sc(e,t){return Te(e)?e:new Pu(e,t)}class Pu{constructor(t,n){this.dep=new Zs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ie(t),this._value=n?t:pt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||qe(t)||mt(t);t=i?t:ie(t),Ie(t,n)&&(this._rawValue=t,this._value=i?t:pt(t),this.dep.trigger())}}function Ru(e){e.dep&&e.dep.trigger()}function Fi(e){return Te(e)?e.value:e}function Nu(e){return Y(e)?e():Fi(e)}const Du={get:(e,t,n)=>t==="__v_raw"?e:Fi(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return Te(s)&&!Te(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function vo(e){return kt(e)?e:new Proxy(e,Du)}class Ou{constructor(t){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Zs,{get:i,set:s}=t(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=s}get value(){return this._value=this._get()}set value(t){this._set(t)}}function rc(e){return new Ou(e)}function Mu(e){const t=H(e)?new Array(e.length):{};for(const n in e)t[n]=oc(e,n);return t}class Lu{constructor(t,n,i){this._object=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=$e(n)?n:String(n),this._raw=ie(t);let s=!0,r=t;if(!H(t)||$e(this._key)||!qs(this._key))do s=!Li(r)||qe(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=Fi(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Te(this._raw[this._key])){const n=this._object[this._key];if(Te(n)){n.value=t;return}}this._object[this._key]=t}get dep(){return hu(this._raw,this._key)}}class Fu{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function zu(e,t,n){return Te(e)?e:Y(e)?new Fu(e):ae(e)&&arguments.length>1?oc(e,t,n):ci(e)}function oc(e,t,n){return new Lu(e,t,n)}class $u{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Zs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=mi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ue!==this)return Vl(this,!0),!0}get value(){const t=this.dep.track();return Bl(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Vu(e,t,n=!1){let i,s;return Y(e)?i=e:(i=e.get,s=e.set),new $u(i,s,n)}const Hu={GET:"get",HAS:"has",ITERATE:"iterate"},ju={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"},qi={},ws=new WeakMap;let qt;function Bu(){return qt}function ac(e,t=!1,n=qt){if(n){let i=ws.get(n);i||ws.set(n,i=[]),i.push(e)}}function Wu(e,t,n=te){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,d=g=>s?g:qe(g)||s===!1||s===0?Ot(g,1):Ot(g);let c,p,m,h,v=!1,x=!1;if(Te(e)?(p=()=>e.value,v=qe(e)):kt(e)?(p=()=>d(e),v=!0):H(e)?(x=!0,v=e.some(g=>kt(g)||qe(g)),p=()=>e.map(g=>{if(Te(g))return g.value;if(kt(g))return d(g);if(Y(g))return l?l(g,2):g()})):Y(e)?t?p=l?()=>l(e,2):e:p=()=>{if(m){_t();try{m()}finally{Tt()}}const g=qt;qt=c;try{return l?l(e,3,[h]):e(h)}finally{qt=g}}:p=De,t&&s){const g=p,b=s===!0?1/0:s;p=()=>Ot(g(),b)}const I=Fl(),C=()=>{c.stop(),I&&I.active&&go(I.effects,c)};if(r&&t){const g=t;t=(...b)=>{try{return g(...b)}finally{C()}}}let y=x?new Array(e.length).fill(qi):qi;const f=g=>{if(!(!(c.flags&1)||!c.dirty&&!g))if(t){const b=c.run();if(g||s||v||(x?b.some((O,T)=>Ie(O,y[T])):Ie(b,y))){const O=qt;_t();try{m&&m(),qt=c;const T=[b,y===qi?void 0:x&&y[0]===qi?[]:y,h];y=b,l?l(t,3,T):t(...T)}finally{qt=O,Tt()}}}else c.run()};return a&&a(f),c=new gi(p),c.scheduler=o?()=>o(f,!1):f,h=g=>ac(g,!1,c),m=c.onStop=()=>{const g=ws.get(c);if(g){if(l)l(g,4);else for(const b of g)b();ws.delete(c)}},t?i?f(!0):y=c.run():o?o(f.bind(null,!0),!0):c.run(),C.pause=c.pause.bind(c),C.resume=c.resume.bind(c),C.stop=C,C}function Ot(e,t=1/0,n){if(t<=0||!ae(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Te(e))Ot(e.value,t,n);else if(H(e))for(let i=0;i<e.length;i++)Ot(e[i],t,n);else if(St(e)||Xt(e))e.forEach(i=>{Ot(i,t,n)});else if(Gs(e)){for(const i in e)Ot(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Ot(e[i],t,n)}return e}const lc=[];function Uu(e){lc.push(e)}function Ku(){lc.pop()}function Gu(e,t){}const qu={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER",COMPONENT_UPDATE:15,15:"COMPONENT_UPDATE",APP_UNMOUNT_CLEANUP:16,16:"APP_UNMOUNT_CLEANUP"},Yu={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function Gn(e,t,n,i){try{return i?e(...i):e()}catch(s){kn(s,t,n)}}function tt(e,t,n,i){if(Y(e)){const s=Gn(e,t,n,i);return s&&mo(s)&&s.catch(r=>{kn(r,t,n,void 0,!0)}),s}if(H(e)){const s=[];for(let r=0;r<e.length;r++)s.push(tt(e[r],t,n,i));return s}}function kn(e,t,n,i=!0,s=!1){const r=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||te;if(t){let l=t.parent;const d=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const p=l.ec;if(p&&!l.isUnmounted&&(!s||l.scope.active)){for(let m=0;m<p.length;m++)if(p[m](e,d,c)===!1)return}l=l.parent}if(o){_t(),Gn(o,null,10,[e,d,c]),Tt();return}}Ju(e,n,r,i,a)}function Ju(e,t,n,i=!0,s=!1){if(s)throw e;console.error(e)}const He=[];let ut=-1;const vt=[];let Yt=null,An=0;const cc=Promise.resolve();let xs=null;function jt(e){const t=xs||cc;return e?t.then(this?e.bind(this):e):t}function Xu(e){let t=ut+1,n=He.length;for(;t<n;){const i=t+n>>>1,s=He[i],r=wi(s);r<e||r===e&&s.flags&2?t=i+1:n=i}return t}function ir(e){if(!(e.flags&1)){const t=wi(e),n=He[He.length-1];!n||!(e.flags&2)&&t>=wi(n)?He.push(e):He.splice(Xu(t),0,e),e.flags|=1,dc()}}function dc(){xs||(xs=cc.then(uc))}function Lt(e){if(!H(e))Yt&&e.id===-1?Yt.splice(An+1,0,e):e.flags&1||(vt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)vt.push(e[t]);dc()}function pc(e,t,n,i=ut+1){for(;i<He.length;i++){const s=He[i];if(s&&s.flags&2){if(e&&s.id!==e.uid||t!==void 0&&!(s.id>=t))continue;He.splice(i,1),i=e?i-1:ut,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ys(e,t,n=0){if(vt.length){let i=vt,s=0;if(t){i=[];for(let o=0;o<vt.length;o++){const a=vt[o];(a.i!==void 0?!a.i||a.i.uid<n:t.has(a))?vt[s++]=a:i.push(a)}}const r=[...new Set(i)].sort((o,a)=>wi(o)-wi(a));if(vt.length=s,Yt){for(let o=0;o<r.length;o++)Yt.push(r[o]);return}for(Yt=r,An=0;An<Yt.length;An++){const o=Yt[An];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Yt=null,An=0}}let _r=!1;function Zu(e,t){if(_r){e();return}const n=t===void 0?void 0:new Set(vt);e(),_r=!0;try{pc(void 0,t),ys(void 0,n,t)}finally{_r=!1}}const wi=e=>e.id==null?e.flags&2?-1:1/0:e.id;function uc(e){try{for(ut=0;ut<He.length;ut++){const t=He[ut];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Gn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ut<He.length;ut++){const t=He[ut];t&&(t.flags&=-2)}ut=-1,He.length=0,ys(),xs=null,(He.length||vt.length)&&uc()}}let In,Yi=[];function fc(e,t){var n,i;In=e,In?(In.enabled=!0,Yi.forEach(({event:s,args:r})=>In.emit(s,...r)),Yi=[]):typeof window<"u"&&window.HTMLElement&&!((i=(n=window.navigator)==null?void 0:n.userAgent)!=null&&i.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{fc(r,t)}),setTimeout(()=>{In||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Yi=[])},3e3)):Yi=[]}let Ne=null,sr=null;function xi(e){const t=Ne;return Ne=e,sr=e&&e.type.__scopeId||null,t}function Qu(e){sr=e}function ef(){sr=null}const tf=e=>ko;function ko(e,t=Ne,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&Ti(-1);const r=xi(t),o=$t.length;let a;try{a=e(...s)}finally{for(let l=$t.length;l>o;l--)pr();xi(r),i._d&&Ti(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function nf(e,t){if(Ne===null)return e;const n=Hi(Ne),i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=te]=t[s];r&&(Y(r)&&(r={mounted:r,updated:r}),r.deep&&Ot(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function xt(e,t,n,i){let s=e;if(i==="beforeMount")e._mount=e;else if(i==="beforeUpdate"){const a=t&&t._mount;a&&(a._latest=e,e._mount=a)}else if(i==="mounted"){const a=e._latest;e._mount=e._latest=void 0,a&&(s=a,a._mount=void 0)}const r=s.dirs,o=t&&t.dirs;for(let a=0;a<r.length;a++){let l=r[a];o?l.oldValue=o[a].value:i==="mounted"&&l.oldValue!==void 0&&(l=Z({},l,{oldValue:void 0}));let d=l.dir[i];d&&(_t(),tt(d,n,8,[e.el,l,s,t]),Tt())}}function hc(e,t){if(Re){let n=Re.provides;const i=Re.parent&&Re.parent.provides;i===n&&(n=Re.provides=Object.create(i)),n[e]=t}}function di(e,t,n=!1){const i=Be();if(i||hn){let s=hn?hn._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Y(t)?t.call(i&&i.proxy):t}}function sf(){return!!(Be()||hn)}const gc=Symbol.for("v-scx"),mc=()=>di(gc);function rf(e,t){return zi(e,null,t)}function of(e,t){return zi(e,null,{flush:"post"})}function bc(e,t){return zi(e,null,{flush:"sync"})}function On(e,t,n){return zi(e,t,n)}function zi(e,t,n=te){const{immediate:i,deep:s,flush:r,once:o}=n,a=Z({},n),l=t&&i||!t&&r!=="post";let d;if(wn){if(r==="sync"){const h=mc();d=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=De,h.resume=De,h.pause=De,h}}const c=Re;a.call=(h,v,x)=>tt(h,c,v,x);let p=!1;r==="post"?a.scheduler=h=>{h.i=c,ye(h,c&&c.suspense)}:r!=="sync"&&(p=!0,a.scheduler=(h,v)=>{v?h():ir(h)}),a.augmentJob=h=>{t&&(h.flags|=4),p&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const m=Wu(e,t,a);return wn&&(d?d.push(m):l&&m()),m}function af(e,t,n){const i=this.proxy,s=J(e)?e.includes(".")?wc(i,e):()=>i[e]:e.bind(i,i);let r;Y(t)?r=t:(r=t.handler,n=t);const o=qn(this),a=zi(s,r.bind(i),n);return o(),a}function wc(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const Kt=new WeakMap,xc=Symbol("_vte"),rr=e=>e.__isTeleport,dn=e=>e&&(e.disabled||e.disabled===""),lf=e=>e&&(e.defer||e.defer===""),Ta=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ea=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,$r=(e,t)=>{const n=e&&e.to;return J(n)?t?t(n):null:n},cf={name:"Teleport",__isTeleport:!0,process(e,t,n,i,s,r,o,a,l,d){const{mc:c,pc:p,pbc:m,o:{insert:h,querySelector:v,createText:x,createComment:I,parentNode:C}}=d,y=dn(t.props);let{dynamicChildren:f}=t;const g=(T,k,S)=>{T.shapeFlag&16&&c(T.children,k,S,s,r,o,a,l)},b=(T=t)=>{const k=dn(T.props),S=T.target=$r(T.props,v),A=Vr(S,T,x,h);S&&(o!=="svg"&&Ta(S)?o="svg":o!=="mathml"&&Ea(S)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(S),k||(g(T,S,A),ii(T,!1)))},O=T=>{const k=()=>{if(Kt.get(T)===k){if(Kt.delete(T),dn(T.props)){const S=C(T.el)||n;g(T,S,T.anchor),ii(T,!0)}b(T)}};Kt.set(T,k),ye(k,r)};if(e==null){const T=t.el=x(""),k=t.anchor=x("");if(h(T,n,i),h(k,n,i),lf(t.props)||r&&r.pendingBranch){O(t);return}y&&(g(t,n,k),ii(t,!0)),b()}else{t.el=e.el;const T=t.anchor=e.anchor,k=Kt.get(e);if(k){k.flags|=8,Kt.delete(e),O(t);return}t.targetStart=e.targetStart;const S=t.target=e.target,A=t.targetAnchor=e.targetAnchor,N=dn(e.props),_=N?n:S,F=N?T:A;if(o==="svg"||Ta(S)?o="svg":(o==="mathml"||Ea(S))&&(o="mathml"),f?(m(e.dynamicChildren,f,_,s,r,o,a),Fo(e,t,!0)):l||p(e,t,_,F,s,r,o,a,!1),y)N?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Ji(t,n,T,d,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const M=$r(t.props,v);M&&(t.target=M,Ji(t,M,null,d,0))}else N&&Ji(t,S,A,d,1);ii(t,y)}},remove(e,t,n,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:d,targetAnchor:c,target:p,props:m}=e,h=dn(m),v=r||!h,x=Kt.get(e);if(x&&(x.flags|=8,Kt.delete(e)),p&&(s(d),s(c)),r&&s(l),!x&&(h||p)&&o&16)for(let I=0;I<a.length;I++){const C=a[I];i(C,t,n,v,!!C.dynamicChildren)}},move:Ji,hydrate:df};function Ji(e,t,n,{o:{insert:i},m:s},r=2){r===0&&(e.targetStart&&i(e.targetStart,t,n),i(e.targetAnchor,t,n),n=e.targetAnchor);const{el:o,anchor:a,shapeFlag:l,children:d,props:c}=e,p=r===2;if(p&&i(o,t,n),!Kt.has(e)&&(!p||dn(c))&&l&16)for(let m=0;m<d.length;m++)s(d[m],t,n,2);p&&i(a,t,n)}function df(e,t,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:d,createText:c}},p){function m(I,C){let y=C;for(;y;){if(y&&y.nodeType===8){if(y.data==="teleport start anchor")t.targetStart=y;else if(y.data==="teleport anchor"){t.targetAnchor=y,I._lpa=t.targetAnchor&&o(t.targetAnchor);break}}y=o(y)}}function h(I,C){C.anchor=p(o(I),C,a(I),n,i,s,r)}const v=t.target=$r(t.props,l),x=dn(t.props);if(v){const I=v._lpa||v.firstChild;t.shapeFlag&16&&(x?(h(e,t),m(v,I),t.targetAnchor||Vr(v,t,c,d,a(e)===v?e:null)):(t.anchor=o(e),m(v,I),t.targetAnchor||Vr(v,t,c,d),p(I&&o(I),t,v,n,i,s,r))),ii(t,x)}else x&&t.shapeFlag&16&&(h(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}const pf=cf;function ii(e,t){const n=e.ctx;if(n&&n.ut){let i,s;for(t?(i=e.el,s=e.anchor):(i=e.targetStart,s=e.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function Vr(e,t,n,i,s=null){const r=t.targetStart=n(""),o=t.targetAnchor=n("");return r[xc]=o,e&&(i(r,e,s),i(o,e,s)),o}const ot=Symbol("_leaveCb"),Xn=Symbol("_enterCb");function So(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vi(()=>{e.isMounted=!0}),lr(()=>{e.isUnmounting=!0}),e}const rt=[Function,Array],_o={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rt,onEnter:rt,onAfterEnter:rt,onEnterCancelled:rt,onBeforeLeave:rt,onLeave:rt,onAfterLeave:rt,onLeaveCancelled:rt,onBeforeAppear:rt,onAppear:rt,onAfterAppear:rt,onAppearCancelled:rt},uf={name:"BaseTransition",props:_o,setup(e,{slots:t}){const n=Be(),i=So();return()=>{const s=t.default&&or(t.default(),!0),r=s&&s.length?yc(s):n.subTree?nd():void 0;if(!r)return;const o=ie(e),{mode:a}=o;if(i.isLeaving)return Tr(r);const l=vs(r);if(!l)return Tr(r);const d=$n(l,o,i,n);l.type!==xe&&ht(l,d);let c=n.subTree&&vs(n.subTree);if(c&&c.type!==xe&&!lt(c,l)&&yi(n.subTree)){let p=$n(c,o,i,n);if(ht(c,p),a==="out-in"&&l.type!==xe)return i.isLeaving=!0,p.afterLeave=()=>{if(i.isLeaving=!1,!(n.job.flags&8))if(n.effect.flags&2){const m=()=>{n.job.flags&8||n.update()};m.i=n,ir(m)}else n.update();delete p.afterLeave,c=void 0},Tr(r);a==="in-out"&&l.type!==xe?p.delayLeave=(m,h,v)=>{const x=kc(i,c);x[String(c.key)]=c,m[ot]=()=>{h(),m[ot]=void 0,delete d.delayedLeave,c=void 0},d.delayedLeave=()=>{v(),delete d.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return r}}};function yc(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==xe){t=n;break}}return t}const vc=uf;function kc(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function $n(e,t,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:d,onEnterCancelled:c,onBeforeLeave:p,onLeave:m,onAfterLeave:h,onLeaveCancelled:v,onBeforeAppear:x,onAppear:I,onAfterAppear:C,onAppearCancelled:y}=t,f=String(e.key),g=kc(n,e),b=(k,S)=>{k&&tt(k,i,9,S)},O=(k,S)=>{const A=S[1];b(k,S),H(k)?k.every(N=>N.length<=1)&&A():k.length<=1&&A()},T={mode:r,persisted:o,beforeEnter(k){let S=a;if(!n.isMounted)if(s)S=x||a;else return;k[ot]&&k[ot](!0);const A=g[f];if(A&&lt(e,A)){let N=A.el[ot];if(!N){const _=yi(A);N=_&&_.el[ot]}N&&N()}b(S,[k])},enter(k){if(g[f]===e)return;let S=l,A=d,N=c;if(!n.isMounted)if(s)S=I||l,A=C||d,N=y||c;else return;let _=!1;k[Xn]=M=>{_||(_=!0,M?b(N,[k]):b(A,[k]),T.delayedLeave&&T.delayedLeave(),k[Xn]=void 0)};const F=k[Xn].bind(null,!1);S?O(S,[k,F]):F()},leave(k,S){const A=String(e.key);if(k[Xn]&&k[Xn](!0),n.isUnmounting)return S();b(p,[k]);let N=!1;k[ot]=F=>{N||(N=!0,S(),F?b(v,[k]):b(h,[k]),k[ot]=void 0,g[A]===e&&delete g[A])};const _=k[ot].bind(null,!1);g[A]=e,m?O(m,[k,_]):_()},clone(k){const S=$n(k,t,n,i);return S.afterLeave=()=>{T.afterLeave&&T.afterLeave()},S.delayLeave=(A,N,_)=>{T.delayLeave?T.delayLeave(A,N,_):_()},S.delayedLeave=()=>{T.delayedLeave&&T.delayedLeave()},S}};return T}function Tr(e){if($i(e))return e=Et(e),e.children=null,e}function vs(e){if(!$i(e))return rr(e.type)&&e.children?yc(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Y(n.default))return n.default()}}function ht(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;ht(rr(n.type)&&vs(n)||n,t)}else if(e.shapeFlag&128){const n=e.suspense;if(n){const i=n.isHydrating?n.pendingBranch:n.activeBranch;i&&ht(i,t.clone(i))}else e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)}else if(e.transition=t,e.type===Ce&&H(e.children)){const n=Oo(e.children,!1);n&&ht(n,t)}}function or(e,t=!1,n){let i=[],s=0;for(let r=0;r<e.length;r++){let o=e[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ce?(o.patchFlag&128&&s++,i=i.concat(or(o.children,t,a))):(t||o.type!==xe)&&i.push(a!=null?Et(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function yi(e){if(e.component)return yi(e.component.subTree);if(e.type===Ce){const t=H(e.children)&&Oo(e.children,!1);return t?yi(t):void 0}if(e.type!==xe)return e}function To(e,t){return Y(e)?Z({name:e.name},t,{setup:e}):e}function ff(){const e=Be();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function Eo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function hf(e){const t=Be(),n=ic(null);if(t){const s=t.refs===te?t.refs={}:t.refs;Object.defineProperty(s,e,{enumerable:!0,get:()=>n.value,set:r=>n.value=r})}return n}function Ca(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const ks=new WeakMap;function Mn(e,t,n,i,s=!1){if(H(e)){e.forEach((x,I)=>Mn(x,t&&(H(t)?t[I]:t),n,i,s));return}if(zt(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Mn(e,t,n,i.component.subTree);return}const r=i.shapeFlag&4?Hi(i.component):i.el,o=s?null:r,{i:a,r:l}=e,d=t&&t.r,c=a.refs===te?a.refs={}:a.refs,p=a.setupState,m=ie(p),h=p===te?Pn:x=>Ca(c,x)?!1:re(m,x),v=(x,I)=>!(I&&Ca(c,I));if(d!=null&&d!==l){if(Aa(t),J(d))c[d]=null,h(d)&&(p[d]=null);else if(Te(d)){const x=t;v(d,x.k)&&(d.value=null),x.k&&(c[x.k]=null)}}if(Y(l))Gn(l,a,12,[o,c]);else{const x=J(l),I=Te(l);if(x||I){const C=()=>{if(e.f){const y=x?h(l)?p[l]:c[l]:v()||!e.k?l.value:c[e.k];if(s)H(y)&&go(y,r);else if(H(y))y.includes(r)||y.push(r);else if(x)c[l]=[r],h(l)&&(p[l]=c[l]);else{const f=[r];v(l,e.k)&&(l.value=f),e.k&&(c[e.k]=f)}}else x?(c[l]=o,h(l)&&(p[l]=o)):I&&(v(l,e.k)&&(l.value=o),e.k&&(c[e.k]=o))};if(o){const y=()=>{C(),ks.delete(e)};y.id=-1,ks.set(e,y),ye(y,n)}else Aa(e),C()}}}function Aa(e){const t=ks.get(e);t&&(t.flags|=8,ks.delete(e))}let Ia=!1;const En=()=>{Ia||(console.error("Hydration completed but contains mismatches."),Ia=!0)},gf=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",mf=e=>e.namespaceURI.includes("MathML"),Xi=e=>{if(e.nodeType===1){if(gf(e))return"svg";if(mf(e))return"mathml"}},Rn=e=>e.nodeType===8;function bf(e){const{mt:t,p:n,o:{patchProp:i,createText:s,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:d}}=e,c=(f,g)=>{if(!g.hasChildNodes()){n(null,f,g),ys(),g._vnode=f;return}p(g.firstChild,f,null,null,null),ys(),g._vnode=f},p=(f,g,b,O,T,k=!1)=>{k=k||!!g.dynamicChildren;const S=Rn(f)&&f.data==="[",A=()=>x(f,g,b,O,T,S),{type:N,ref:_,shapeFlag:F,patchFlag:M}=g;let W=f.nodeType;g.el=f,M===-2&&(k=!1,g.dynamicChildren=null);let B=null;switch(N){case Zt:W!==3?g.children===""?(l(g.el=s(""),o(f),f),B=f):B=A():(f.data!==g.children&&(En(),f.data=g.children),B=r(f));break;case xe:y(f)?(B=r(f),C(g.el=f.content.firstChild,f,b)):W!==8||S?B=A():B=r(f);break;case Qt:if(S&&(f=r(f),W=f.nodeType),W===1||W===3){B=f;const q=!g.children.length;for(let G=0;G<g.staticCount;G++)q&&(g.children+=B.nodeType===1?B.outerHTML:B.data),G===g.staticCount-1&&(g.anchor=B),B=r(B);return S?r(B):B}else A();break;case Ce:S?B=v(f,g,b,O,T,k):B=A();break;default:if(F&1)(W!==1||g.type.toLowerCase()!==f.tagName.toLowerCase())&&!y(f)?B=A():B=m(f,g,b,O,T,k);else if(F&6){g.slotScopeIds=T;const q=o(f);if(S?B=I(f):Rn(f)&&f.data==="teleport start"?B=I(f,f.data,"teleport end"):B=r(f),t(g,q,null,b,O,Xi(q),k),(zt(g)||g.component.asyncDep)&&!g.component.subTree){let G;S?(G=be(Qt),G.anchor=B?B.previousSibling:q.lastChild):G=f.nodeType===3?$o(""):be(f.nodeType===8?xe:"div"),G.el=f,g.component.subTree=G}}else F&64?W!==8?B=A():B=g.type.hydrate(f,g,b,O,T,k,e,h):F&128&&(B=g.type.hydrate(f,g,b,O,Xi(o(f)),T,k,e,p))}return _!=null&&Mn(_,null,O,g),B},m=(f,g,b,O,T,k)=>{k=k||!!g.dynamicChildren;const{type:S,dynamicProps:A,props:N,patchFlag:_,shapeFlag:F,dirs:M,transition:W}=g,B=S==="input"||S==="option",q=!!A;if(B||q||_!==-1){M&&xt(g,null,b,"created");let G=!1;if(y(f)){G=Yc(null,W)&&b&&b.vnode.props&&b.vnode.props.appear;const Q=f.content.firstChild;if(G){const me=Q.getAttribute("class");me&&(Q.$cls=me),W.beforeEnter(Q)}C(Q,f,b),g.el=f=Q}if(F&16&&!(N&&(N.innerHTML||N.textContent))){let Q=h(f.firstChild,g,f,b,O,T,k);for(Q&&!ls(f,1)&&En();Q;){const me=Q;Q=Q.nextSibling,a(me)}}else if(F&8){let Q=g.children;Q[0]===`
`&&(f.tagName==="PRE"||f.tagName==="TEXTAREA")&&(Q=Q.slice(1));const{textContent:me}=f;me!==Q&&me!==Q.replace(/\r\n|\r/g,`
`)&&(ls(f,0)||En(),f.textContent=g.children)}if(N){if(B||q||!k||_&48){const Q=f.tagName.includes("-"),me=f.namespaceURI.includes("svg")?"svg":f.namespaceURI.includes("MathML")?"mathml":void 0;for(const le in N)if(B&&(le.endsWith("value")||le==="indeterminate")||yn(le)&&!Ft(le)||le[0]==="."||Q&&!Ft(le)||A&&A.includes(le)){if(xf(f,le,N[le]))continue;i(f,le,null,N[le],me,b)}}else if(N.onClick)i(f,"onClick",null,N.onClick,void 0,b);else if(_&4&&kt(N.style))for(const Q in N.style)N.style[Q]}let ge;(ge=N&&N.onVnodeBeforeMount)&&Ue(ge,b,g),M&&xt(g,null,b,"beforeMount"),((ge=N&&N.onVnodeMounted)||M||G)&&Cs(()=>{ge&&Ue(ge,b,g),G&&W.enter(f),M&&xt(g,null,b,"mounted")},O)}return f.nextSibling},h=(f,g,b,O,T,k,S)=>{S=S||!!g.dynamicChildren;const A=g.children,N=A.length;let _=!1;for(let F=0;F<N;F++){const M=S?A[F]:A[F]=Ke(A[F]),W=M.type===Zt;f?(W&&!S&&F+1<N&&Ke(A[F+1]).type===Zt&&(l(s(f.data.slice(M.children.length)),b,r(f)),f.data=M.children),f=p(f,M,O,T,k,S)):W&&!M.children?l(M.el=s(""),b):(_||(_=!0,ls(b,1)||En()),n(null,M,b,null,O,T,Xi(b),k))}return f},v=(f,g,b,O,T,k)=>{const{slotScopeIds:S}=g;S&&(T=T?T.concat(S):S);const A=o(f),N=h(r(f),g,A,b,O,T,k);return N&&Rn(N)&&N.data==="]"?r(g.anchor=N):(En(),l(g.anchor=d("]"),A,N),N)},x=(f,g,b,O,T,k)=>{if(vf(f,g)||En(),g.el=null,k){const N=I(f);for(;;){const _=r(f);if(_&&_!==N)a(_);else break}}const S=r(f),A=o(f);return a(f),n(null,g,A,S,b,O,Xi(A),T),b&&b.vnode.el===f&&(b.vnode.el=g.el,dr(b,g.el)),S},I=(f,g="[",b="]")=>{let O=0;for(;f;)if(f=r(f),f&&Rn(f)&&(f.data===g&&O++,f.data===b)){if(O===0)return r(f);O--}return f},C=(f,g,b)=>{const O=g.parentNode;O&&O.replaceChild(f,g);let T=b;for(;T;)T.vnode.el===g&&(T.vnode.el=T.subTree.el=f),T=T.parent},y=f=>f.nodeType===1&&f.tagName==="TEMPLATE";return[c,p]}const wf=new Set(["src","srcset","href","poster"]);function xf(e,t,n){return wf.has(t)?e.getAttribute(t)===(n==null?null:`${n}`):!1}const Ss="data-allow-mismatch",yf={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function ls(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(Ss);)e=e.parentElement;return Co(e&&e.getAttribute(Ss),t)}function Co(e,t){if(e==null)return!1;if(e==="")return!0;{const n=e.split(",");return t===0&&n.includes("children")?!0:n.includes(yf[t])}}function vf(e,t){return ls(e.parentElement,1)||kf(e)||Sf(t)}function kf(e){return e.nodeType===1&&Co(e.getAttribute(Ss),1)}function Sf({props:e}){const t=e&&e[Ss];return typeof t=="string"&&Co(t,1)}const _f=Js().requestIdleCallback||(e=>setTimeout(e,1)),Tf=Js().cancelIdleCallback||(e=>clearTimeout(e)),Ef=(e=1e4)=>t=>{const n=_f(t,{timeout:e});return()=>Tf(n)};function Cf(e){const{top:t,left:n,bottom:i,right:s}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:o}=window;return(t>0&&t<r||i>0&&i<r)&&(n>0&&n<o||s>0&&s<o)}const Af=e=>(t,n)=>{const i=new IntersectionObserver(r=>{for(const o of r)if(o.isIntersecting){i.disconnect(),t();break}},e),s=r=>{if(Cf(r))return t(),i.disconnect(),!1;if(getComputedStyle(r).display==="contents"){for(let o=0;o<r.children.length;o++)if(s(r.children[o])===!1)return!1}i.observe(r)};return n(r=>{if(r instanceof Element)return s(r)}),()=>i.disconnect()},If=e=>t=>{if(e){const n=matchMedia(e);if(n.matches)t();else return n.addEventListener("change",t,{once:!0}),()=>n.removeEventListener("change",t)}},Pf=(e=[])=>(t,n)=>{J(e)&&(e=[e]);let i=!1;const s=o=>{i||(i=!0,r(),t(),o.target.dispatchEvent(new o.constructor(o.type,o)))},r=()=>{n(o=>{for(const a of e)o.removeEventListener(a,s)})};return n(o=>{for(const a of e)o.addEventListener(a,s,{once:!0})}),r};function Rf(e,t){if(Rn(e)&&e.data==="["){let n=1,i=e.nextSibling;for(;i;){if(i.nodeType===1){if(t(i)===!1)break}else if(Rn(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else t(e)}const zt=e=>!!e.type.__asyncLoader;function Nf(e){Y(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:i,delay:s=200,hydrate:r,timeout:o,suspensible:a=!0,onError:l}=e;let d=null,c,p=0;const m=()=>(p++,d=null,h()),h=()=>{let v;return d||(v=d=t().catch(x=>{if(x=x instanceof Error?x:new Error(String(x)),l)return new Promise((I,C)=>{l(x,()=>I(m()),()=>C(x),p+1)});throw x}).then(x=>v!==d&&d?d:(x&&(x.__esModule||x[Symbol.toStringTag]==="Module")&&(x=x.default),c=x,x)))};return To({name:"AsyncComponentWrapper",__asyncLoader:h,__asyncHydrate(v,x,I){const C=v.isConnected;let y=!1;(x.bu||(x.bu=[])).push(()=>y=!0);const f=()=>{y||!v.parentNode||C&&!v.isConnected||I()},g=r?()=>{const b=r(f,O=>Rf(v,O));b&&(x.bum||(x.bum=[])).push(b)}:f;c?g():h().then(()=>!x.isUnmounted&&g())},get __asyncResolved(){return c},setup(){const v=Re;if(Eo(v),c)return()=>Zi(c,v);const x=b=>{d=null,kn(b,v,13,!i,!0)};if(a&&v.suspense||wn)return h().then(b=>()=>Zi(b,v)).catch(b=>(x(b),()=>i?be(i,{error:b}):null));const I=ci(!1),C=ci(),y=ci(!!s);let f,g;return zl(()=>{f!=null&&clearTimeout(f),g!=null&&clearTimeout(g)}),s&&(g=setTimeout(()=>{v.isUnmounted||(y.value=!1)},s)),o!=null&&(f=setTimeout(()=>{if(!v.isUnmounted&&!I.value&&!C.value){const b=new Error(`Async component timed out after ${o}ms.`);x(b),C.value=b}},o)),h().then(()=>{v.isUnmounted||(I.value=!0,v.parent&&$i(v.parent.vnode)&&v.parent.update())}).catch(b=>{if(v.isUnmounted){d=null;return}x(b),C.value=b}),()=>{if(I.value&&c)return Zi(c,v);if(C.value&&i)return be(i,{error:C.value});if(n&&!y.value)return Zi(n,v)}}})}function Zi(e,t){const{ref:n,props:i,children:s,ce:r}=t.vnode,o=be(e,i,s);return o.ref=n,o.ce=r,delete t.vnode.ce,o}const $i=e=>e.type.__isKeepAlive,Df={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Be(),i=n.ctx;if(!i.renderer)return()=>{const y=t.default&&t.default();return y&&y.length===1?y[0]:y};const s=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:d,um:c,o:{createElement:p}}}=i,m=p("div");i.activate=(y,f,g,b,O)=>{const T=y.component;d(y,f,g,0,a),l(T.vnode,y,f,g,T,a,b,y.slotScopeIds,O),ye(()=>{T.isDeactivated=!1,T.a&&Dn(T.a);const k=y.props&&y.props.onVnodeMounted;k&&Ue(k,T.parent,y)},a)},i.deactivate=y=>{const f=s.get(y.key==null?y.type:y.key);if(!f||f.component!==y.component)return!1;const g=y.component;return Ts(g.m),Ts(g.a),d(y,m,null,1,a),ye(()=>{g.da&&Dn(g.da);const b=y.props&&y.props.onVnodeUnmounted;b&&Ue(b,g.parent,y),g.isDeactivated=!0},a),!0};function h(y){Qi(y),c(y,n,a,!0)}function v(y){s.forEach((f,g)=>{const b=Xr(zt(f)?f.type.__asyncResolved||{}:f.type);b&&!y(b)&&x(g)})}function x(y){const f=s.get(y);f&&(!o||!lt(f,o))?h(f):o&&(Qi(o),f&&Qi(f)),s.delete(y),r.delete(y)}On(()=>[e.include,e.exclude],([y,f])=>{y&&v(g=>si(y,g)),f&&v(g=>!si(f,g))},{flush:"post",deep:!0});let I=null;const C=()=>{if(I!=null)if(Es(n.subTree.type)){const y=()=>{const f=es(n.subTree);f.component&&s.set(I,f)};n.subTree.suspense.pendingBranch?ye(y,n.subTree.suspense):y()}else s.set(I,es(n.subTree))};return Vi(C),ar(C),lr(()=>{s.forEach(y=>{const{subTree:f,suspense:g}=n,b=es(f);if(y.type===b.type&&y.key===b.key){Qi(b);const O=b.component.da;O&&ye(O,g);return}h(y)})}),()=>{if(I=null,!t.default)return o=null;const y=t.default(),f=y[0];if(y.length>1)return o=null,y;if(!Ht(f)||!(f.shapeFlag&4)&&!(f.shapeFlag&128))return o=null,f;let g=es(f);if(g.type===xe)return o=null,g;const b=g.type,O=Xr(zt(g)?g.type.__asyncResolved||{}:b),{include:T,exclude:k,max:S}=e;if(T&&(!O||!si(T,O))||k&&O&&si(k,O))return g.shapeFlag&=-257,o=g,f;const A=g.key==null?b:g.key,N=s.get(A);return g.el&&(g=Et(g),f.shapeFlag&128&&(f.ssContent=g)),I=A,N?(g.el=N.el,g.component=N.component,g.transition&&ht(g,g.transition),g.shapeFlag|=512,r.delete(A),r.add(A)):(r.add(A),S&&r.size>parseInt(S,10)&&x(r.values().next().value)),g.shapeFlag|=256,o=g,Es(f.type)?f:g}}},Of=Df;function si(e,t){return H(e)?e.some(n=>si(n,t)):J(e)?e.split(",").includes(t):zp(e)?(e.lastIndex=0,e.test(t)):!1}function Sc(e,t){Tc(e,"a",t)}function _c(e,t){Tc(e,"da",t)}function Tc(e,t,n=Re){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(vi(t,i,n),n){let s=n.parent;for(;s&&s.parent;)$i(s.parent.vnode)&&Mf(i,t,n,s),s=s.parent}}function Mf(e,t,n,i){const s=vi(t,e,i,!0),r=vi("um",()=>go(i[t],s),n);r.flags=16}function Qi(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function es(e){return e.shapeFlag&128?e.ssContent:e}function vi(e,t,n=Re,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{_t();const a=qn(n),l=tt(t,n,e,o);return a(),Tt(),l});return i?s.unshift(r):s.push(r),r}}const Bt=e=>(t,n=Re)=>{(!wn||e==="sp")&&vi(e,(...i)=>t(...i),n)},Ec=Bt("bm"),Vi=Bt("m"),Ao=Bt("bu"),ar=Bt("u"),lr=Bt("bum"),Io=Bt("um"),Cc=Bt("sp"),Ac=Bt("rtg"),Ic=Bt("rtc");function Pc(e,t=Re){vi("ec",e,t)}const Po="components",Lf="directives";function Ff(e,t){return Ro(Po,e,!0,t)||e}const Rc=Symbol.for("v-ndc");function zf(e){return J(e)?Ro(Po,e,!1)||e:e||Rc}function $f(e){return Ro(Lf,e)}function Ro(e,t,n=!0,i=!1){const s=Ne||Re;if(s){const r=s.type;if(e===Po){const a=Xr(r,!1);if(a&&(a===t||a===ce(t)||a===vn(ce(t))))return r}const o=Pa(s[e]||r[e],t)||Pa(s.appContext[e],t);return!o&&i?r:o}}function Pa(e,t){return e&&(e[t]||e[ce(t)]||e[vn(ce(t))])}function Vf(e,t,n,i){let s;const r=n&&n[i],o=H(e);if(o||J(e)){const a=o&&kt(e);let l=!1,d=!1;a&&(l=!qe(e),d=mt(e),e=Qs(e)),s=new Array(e.length);for(let c=0,p=e.length;c<p;c++)s[c]=t(l?d?nn(pt(e[c])):pt(e[c]):e[c],c,void 0,r&&r[c])}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)s=[];else{s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,r&&r[a])}else if(ae(e))if(e[Symbol.iterator])s=Array.from(e,(a,l)=>t(a,l,void 0,r&&r[l]));else{const a=Object.keys(e);s=new Array(a.length);for(let l=0,d=a.length;l<d;l++){const c=a[l];s[l]=t(e[c],c,l,r&&r[l])}}else s=[];return n&&(n[i]=s),s}function Hf(e,t){for(let n=0;n<t.length;n++){const i=t[n];if(H(i))for(let s=0;s<i.length;s++)e[i[s].name]=i[s].fn;else i&&(e[i.name]=i.key?(...s)=>{const r=i.fn(...s);return r&&(r.key=i.key),r}:i.fn)}return e}function jf(e,t,n,i,s,r){if(n==null&&(n={}),Ne.ce||Ne.parent&&zt(Ne.parent)&&Ne.parent.ce){const d=r!=null&&n.key==null?Z({},n,{key:r}):n,c=Object.keys(d).length>0;return t!=="default"&&(d.name=t),_i(),As(Ce,null,[be("slot",d,i&&i())],c?-2:64)}let o=e[t];o&&o._c&&(o._d=!1);const a=$t.length;_i();let l;try{const d=o&&No(o(n)),c=n.key||r||d&&d.key;l=As(Ce,{key:(c&&!$e(c)?c:`_${t}`)+(!d&&i?"_fb":"")},d||(i?i():[]),d&&e._===1?64:-2)}catch(d){for(let c=$t.length;c>a;c--)pr();throw d}finally{o&&o._c&&(o._d=!0)}return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function No(e){return e.some(t=>Ht(t)?!(t.type===xe||t.type===Ce&&!No(t.children)):!0)?e:null}function Bf(e,t){const n={};for(const i in e)n[t&&/[A-Z]/.test(i)?`on:${i}`:Nn(i)]=e[i];return n}const Hr=e=>e?od(e)?Hi(e):Hr(e.parent):null,pi=Z(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Hr(e.parent),$root:e=>Hr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Do(e),$forceUpdate:e=>e.f||(e.f=()=>{ir(e.update)}),$nextTick:e=>e.n||(e.n=jt.bind(e.proxy)),$watch:e=>af.bind(e)}),Er=(e,t)=>e!==te&&!e.__isScriptSetup&&re(e,t),jr={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=e;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(Er(i,t))return o[t]=1,i[t];if(s!==te&&re(s,t))return o[t]=2,s[t];if(re(r,t))return o[t]=3,r[t];if(n!==te&&re(n,t))return o[t]=4,n[t];Br&&(o[t]=0)}}const d=pi[t];let c,p;if(d)return t==="$attrs"&&Le(e.attrs,"get",""),d(e);if((c=a.__cssModules)&&(c=c[t]))return c;if(n!==te&&re(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,re(p,t))return p[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:r}=e;return Er(s,t)?(s[t]=n,!0):i!==te&&re(i,t)?(i[t]=n,!0):re(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||e!==te&&a[0]!=="$"&&re(e,a)||Er(t,a)||re(r,a)||re(i,a)||re(pi,a)||re(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:re(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Wf=Z({},jr,{get(e,t){if(t!==Symbol.unscopables)return jr.get(e,t,e)},has(e,t){return t[0]!=="_"&&!Up(t)}});function Uf(){return null}function Kf(){return null}function Gf(e){}function qf(e){}function Yf(){return null}function Jf(){}function Xf(e,t){return null}function Zf(){return Nc().slots}function Qf(){return Nc().attrs}function Nc(e){const t=Be();return t.setupContext||(t.setupContext=pd(t))}function ki(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function eh(e,t){const n=ki(e);for(const i in t){if(i.startsWith("__skip"))continue;let s=n[i];s?H(s)||Y(s)?s=n[i]={type:s,default:t[i]}:s.default=t[i]:s===null&&(s=n[i]={default:t[i]}),s&&t[`__skip_${i}`]&&(s.skipFactory=!0)}return n}function th(e,t){return!e||!t?e||t:H(e)&&H(t)?e.concat(t):Z({},ki(e),ki(t))}function nh(e,t){const n={};for(const i in e)t.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>e[i]});return n}function ih(e){const t=Be(),n=wn;let i=e();Ei(),n&&en(!1);const s=()=>{qn(t),n&&en(!0)},r=()=>{Be()!==t&&t.scope.off(),Ei(),n&&en(!1)};return mo(i)&&(i=i.catch(o=>{throw s(),Promise.resolve().then(()=>Promise.resolve().then(r)),o})),[i,()=>{s(),Promise.resolve().then(r)}]}let Br=!0;function sh(e){const t=Do(e),n=e.proxy,i=e.ctx;Br=!1,t.beforeCreate&&Ra(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:d,created:c,beforeMount:p,mounted:m,beforeUpdate:h,updated:v,activated:x,deactivated:I,beforeDestroy:C,beforeUnmount:y,destroyed:f,unmounted:g,render:b,renderTracked:O,renderTriggered:T,errorCaptured:k,serverPrefetch:S,expose:A,inheritAttrs:N,components:_,directives:F,filters:M}=t;if(d&&rh(d,i,null),o)for(const q in o){const G=o[q];Y(G)&&(i[q]=G.bind(n))}if(s){const q=s.call(n,n);ae(q)&&(e.data=tr(q))}if(Br=!0,r)for(const q in r){const G=r[q],ge=Y(G)?G.bind(n,n):Y(G.get)?G.get.bind(n,n):De,Q=!Y(G)&&Y(G.set)?G.set.bind(n):De,me=ud({get:ge,set:Q});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>me.value,set:le=>me.value=le})}if(a)for(const q in a)Dc(a[q],i,n,q);if(l){const q=Y(l)?l.call(n):l;Reflect.ownKeys(q).forEach(G=>{hc(G,q[G])})}c&&Ra(c,e,"c");function B(q,G){H(G)?G.forEach(ge=>q(ge.bind(n))):G&&q(G.bind(n))}if(B(Ec,p),B(Vi,m),B(Ao,h),B(ar,v),B(Sc,x),B(_c,I),B(Pc,k),B(Ic,O),B(Ac,T),B(lr,y),B(Io,g),B(Cc,S),H(A))if(A.length){const q=e.exposed||(e.exposed={});A.forEach(G=>{Object.defineProperty(q,G,{get:()=>n[G],set:ge=>n[G]=ge,enumerable:!0})})}else e.exposed||(e.exposed={});b&&e.render===De&&(e.render=b),N!=null&&(e.inheritAttrs=N),_&&(e.components=_),F&&(e.directives=F),S&&Eo(e)}function rh(e,t,n=De){H(e)&&(e=Wr(e));for(const i in e){const s=e[i];let r;ae(s)?"default"in s?r=di(s.from||i,s.default,!0):r=di(s.from||i):r=di(s),Te(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Ra(e,t,n){tt(H(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function Dc(e,t,n,i){let s=i.includes(".")?wc(n,i):()=>n[i];if(J(e)){const r=t[e];Y(r)&&On(s,r)}else if(Y(e))On(s,e.bind(n));else if(ae(e))if(H(e))e.forEach(r=>Dc(r,t,n,i));else{const r=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(r)&&On(s,r,e)}}function Do(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!n&&!i?l=t:(l={},s.length&&s.forEach(d=>_s(l,d,o,!0)),_s(l,t,o)),ae(t)&&r.set(t,l),l}function _s(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&_s(e,r,n,!0),s&&s.forEach(o=>_s(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=oh[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const oh={data:Na,props:Da,emits:Da,methods:ri,computed:ri,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:ri,directives:ri,watch:lh,provide:Na,inject:ah};function Na(e,t){return t?e?function(){return Z(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function ah(e,t){return ri(Wr(e),Wr(t))}function Wr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ve(e,t){return e?[...new Set([].concat(e,t))]:t}function ri(e,t){return e?Z(Object.create(null),e,t):t}function Da(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:Z(Object.create(null),ki(e),ki(t??{})):t}function lh(e,t){if(!e)return t;if(!t)return e;const n=Z(Object.create(null),e);for(const i in t)n[i]=Ve(e[i],t[i]);return n}function Oc(){return{app:null,config:{isNativeTag:Pn,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ch=0;function dh(e,t){return function(i,s=null){Y(i)||(i=Z({},i)),s!=null&&!ae(s)&&(s=null);const r=Oc(),o=new WeakSet,a=[];let l=!1;const d=r.app={_uid:ch++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:gd,get config(){return r.config},set config(c){},use(c,...p){return o.has(c)||(c&&Y(c.install)?(o.add(c),c.install(d,...p)):Y(c)&&(o.add(c),c(d,...p))),d},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),d},component(c,p){return p?(r.components[c]=p,d):r.components[c]},directive(c,p){return p?(r.directives[c]=p,d):r.directives[c]},mount(c,p,m){if(!l){const h=d._ceVNode||be(i,s);return h.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),p&&t?t(h,c):e(h,c,m),l=!0,d._container=c,c.__vue_app__=d,Hi(h.component)}},onUnmount(c){a.push(c)},unmount(){l&&(tt(a,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(c,p){return r.provides[c]=p,d},runWithContext(c){const p=hn;hn=d;try{return c()}finally{hn=p}}};return d}}let hn=null;function ph(e,t,n=te){const i=Be(),s=ce(t),r=Ge(t),o=Mc(e,s),a=rc((l,d)=>{let c,p=te,m;return bc(()=>{const h=e[s];Ie(c,h)&&(c=h,d())}),{get(){return l(),n.get?n.get(c):c},set(h){const v=n.set?n.set(h):h;if(!Ie(v,c)&&!(p!==te&&Ie(h,p)))return;const x=i.vnode.props,I=!!(x&&(t in x||s in x||r in x)&&(`onUpdate:${t}`in x||`onUpdate:${s}`in x||`onUpdate:${r}`in x));I||(c=h,d()),i.emit(`update:${t}`,v),Ie(h,p)&&(Ie(h,v)&&!Ie(v,m)||I&&p!==te&&!Ie(v,c))&&d(),p=h,m=v}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||te:a,done:!1}:{done:!0}}}},a}const Mc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ce(t)}Modifiers`]||e[`${Ge(t)}Modifiers`];function uh(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||te;let s=n;const r=t.startsWith("update:"),o=r&&Mc(i,t.slice(7));o&&(o.trim&&(s=n.map(c=>J(c)?c.trim():c)),o.number&&(s=s.map(Di)));let a,l=i[a=Nn(t)]||i[a=Nn(ce(t))];!l&&r&&(l=i[a=Nn(Ge(t))]),l&&tt(l,e,6,s);const d=i[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,tt(d,e,6,s)}}const fh=new WeakMap;function Lc(e,t,n=!1){const i=n?fh:t.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let o={},a=!1;if(!Y(e)){const l=d=>{const c=Lc(d,t,!0);c&&(a=!0,Z(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(ae(e)&&i.set(e,null),null):(H(r)?r.forEach(l=>o[l]=null):Z(o,r),ae(e)&&i.set(e,o),o)}function cr(e,t){return!e||!yn(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),re(e,t[0].toLowerCase()+t.slice(1))||re(e,Ge(t))||re(e,t))}function cs(e){const{type:t,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:d,renderCache:c,props:p,data:m,setupState:h,ctx:v,inheritAttrs:x}=e,I=xi(e);let C,y;try{if(n.shapeFlag&4){const g=s||i,b=g;C=Ke(d.call(b,g,c,p,h,m,v)),y=a}else{const g=t;C=Ke(g.length>1?g(p,{attrs:a,slots:o,emit:l}):g(p,null)),y=t.props?a:hh(a)}}catch(g){$t.length=0,kn(g,e,1),C=be(xe)}let f=C;if(y&&x!==!1){const g=Object.keys(y),{shapeFlag:b}=f;g.length&&b&7&&(r&&g.some(Ks)&&(y=gh(y,r)),f=Et(f,y,!1,!0))}if(n.dirs&&(f=Et(f,null,!1,!0),f.dirs=f.dirs?f.dirs.concat(n.dirs):n.dirs),n.transition){const g=rr(f.type)&&vs(f)||f;ht(g,n.transition)}return C=f,xi(I),C}function Oo(e,t=!0){let n;for(let i=0;i<e.length;i++){const s=e[i];if(Ht(s)){if(s.type!==xe||s.children==="v-if"){if(n)return;n=s}}else return}return n}const hh=e=>{let t;for(const n in e)(n==="class"||n==="style"||yn(n))&&((t||(t={}))[n]=e[n]);return t},gh=(e,t)=>{const n={};for(const i in e)(!Ks(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function mh(e,t,n){const{props:i,children:s,component:r}=e,{props:o,children:a,patchFlag:l}=t,d=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Oa(i,o,d):!!o;if(l&8){const c=t.dynamicProps;for(let p=0;p<c.length;p++){const m=c[p];if(Fc(o,i,m)&&!cr(d,m))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Oa(i,o,d):!0:!!o;return!1}function Oa(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!re(e,r)||Fc(t,e,r)&&!cr(n,r))return!0}return!1}function Fc(e,t,n){const i=e[n],s=t[n];return n==="style"&&ae(i)&&ae(s)?!dt(i,s):i!==s}function dr({vnode:e,parent:t,suspense:n},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=i,e=s),s===e)(e=t.vnode).el=i,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=i)}const zc={},$c=()=>Object.create(zc),Vc=e=>Object.getPrototypeOf(e)===zc;function bh(e,t,n,i=!1){const s={},r=$c();e.propsDefaults=Object.create(null),Hc(e,t,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=i?s:tc(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function wh(e,t,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,a=ie(s),[l]=e.propsOptions;let d=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let p=0;p<c.length;p++){let m=c[p];if(cr(e.emitsOptions,m))continue;const h=t[m];if(l)if(re(r,m))h!==r[m]&&(r[m]=h,d=!0);else{const v=ce(m);s[v]=Ur(l,a,v,h,e,!1)}else h!==r[m]&&(r[m]=h,d=!0)}}}else{Hc(e,t,s,r)&&(d=!0);let c;for(const p in a)(!t||!re(t,p)&&((c=Ge(p))===p||!re(t,c)))&&(l?n&&(n[p]!==void 0||n[c]!==void 0)&&(s[p]=Ur(l,a,p,void 0,e,!0)):delete s[p]);if(r!==a)for(const p in r)(!t||!re(t,p))&&(delete r[p],d=!0)}d&&Dt(e.attrs,"set","")}function Hc(e,t,n,i){const[s,r]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Ft(l))continue;const d=t[l];let c;s&&re(s,c=ce(l))?!r||!r.includes(c)?n[c]=d:(a||(a={}))[c]=d:cr(e.emitsOptions,l)||(!(l in i)||d!==i[l])&&(i[l]=d,o=!0)}if(r){const l=ie(n),d=a||te;for(let c=0;c<r.length;c++){const p=r[c];n[p]=Ur(s,l,p,d[p],e,!re(d,p))}}return o}function Ur(e,t,n,i,s,r){const o=e[n];if(o!=null){const a=re(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Y(l)){const{propsDefaults:d}=s;if(n in d)i=d[n];else{const c=qn(s);i=d[n]=l.call(null,t),c()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ge(n))&&(i=!0))}return i}const xh=new WeakMap;function jc(e,t,n=!1){const i=n?xh:t.propsCache,s=i.get(e);if(s)return s;const r=e.props,o={},a=[];let l=!1;if(!Y(e)){const c=p=>{l=!0;const[m,h]=jc(p,t,!0);Z(o,m),h&&a.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!r&&!l)return ae(e)&&i.set(e,pn),pn;if(H(r))for(let c=0;c<r.length;c++){const p=ce(r[c]);Ma(p)&&(o[p]=te)}else if(r)for(const c in r){const p=ce(c);if(Ma(p)){const m=r[c],h=o[p]=H(m)||Y(m)?{type:m}:Z({},m),v=h.type;let x=!1,I=!0;if(H(v))for(let C=0;C<v.length;++C){const y=v[C],f=Y(y)&&y.name;if(f==="Boolean"){x=!0;break}else f==="String"&&(I=!1)}else x=Y(v)&&v.name==="Boolean";h[0]=x,h[1]=I,(x||re(h,"default"))&&a.push(p)}}const d=[o,a];return ae(e)&&i.set(e,d),d}function Ma(e){return e[0]!=="$"&&!Ft(e)}const Mo=e=>e==="_"||e==="_ctx"||e==="$stable",Lo=e=>H(e)?e.map(Ke):[Ke(e)],yh=(e,t,n)=>{if(t._n)return t;const i=ko((...s)=>Lo(t(...s)),n);return i._c=!1,i},Bc=(e,t,n)=>{const i=e._ctx;for(const s in e){if(Mo(s))continue;const r=e[s];if(Y(r))t[s]=yh(s,r,i);else if(r!=null){const o=Lo(r);t[s]=()=>o}}},Wc=(e,t)=>{const n=Lo(t);e.slots.default=()=>n},Uc=(e,t,n)=>{for(const i in t)(n||!Mo(i))&&(e[i]=t[i])},vh=(e,t,n)=>{const i=e.slots=$c();if(e.vnode.shapeFlag&32){const s=t._;s?(Uc(i,t,n),n&&Rl(i,"_",s,!0)):Bc(t,i)}else t&&Wc(e,t)},kh=(e,t,n)=>{const{vnode:i,slots:s}=e;let r=!0,o=te;if(i.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:Uc(s,t,n):(r=!t.$stable,Bc(t,s)),o=t}else t&&(Wc(e,t),o={default:1});if(r)for(const a in s)!Mo(a)&&o[a]==null&&delete s[a]},ye=Cs;function Kc(e){return qc(e)}function Gc(e){return qc(e,bf)}function qc(e,t){const n=Js();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:d,setElementText:c,parentNode:p,nextSibling:m,setScopeId:h=De,insertStaticContent:v}=e,x=(u,w,E,L=null,P=null,D=null,V=void 0,$=null,z=!!w.dynamicChildren)=>{if(u===w)return;u&&!lt(u,w)&&(L=Ui(u),le(u,P,D,!0),u=null),w.patchFlag===-2&&(z=!1,w.dynamicChildren=null),w.dynamicChildren&&u&&u.dynamicChildren&&u.dynamicChildren.hasOnce&&(w.dynamicChildren===pn&&(w.dynamicChildren=[]),w.dynamicChildren.hasOnce=!0);const{type:R,ref:K,shapeFlag:j}=w;switch(R){case Zt:I(u,w,E,L);break;case xe:C(u,w,E,L);break;case Qt:u==null&&y(w,E,L,V);break;case Ce:_(u,w,E,L,P,D,V,$,z);break;default:j&1?b(u,w,E,L,P,D,V,$,z):j&6?F(u,w,E,L,P,D,V,$,z):(j&64||j&128)&&R.process(u,w,E,L,P,D,V,$,z,_n)}K!=null&&P?Mn(K,u&&u.ref,D,w||u,!w):K==null&&u&&u.ref!=null&&Mn(u.ref,null,D,u,!0)},I=(u,w,E,L)=>{if(u==null)i(w.el=a(w.children),E,L);else{const P=w.el=u.el;w.children!==u.children&&d(P,w.children)}},C=(u,w,E,L)=>{u==null?i(w.el=l(w.children||""),E,L):w.el=u.el},y=(u,w,E,L)=>{[u.el,u.anchor]=v(u.children,w,E,L,u.el,u.anchor)},f=({el:u,anchor:w},E,L)=>{let P;for(;u&&u!==w;)P=m(u),i(u,E,L),u=P;i(w,E,L)},g=({el:u,anchor:w})=>{let E;for(;u&&u!==w;)E=m(u),s(u),u=E;s(w)},b=(u,w,E,L,P,D,V,$,z)=>{if(w.type==="svg"?V="svg":w.type==="math"&&(V="mathml"),u==null)O(w,E,L,P,D,V,$,z);else{const R=u.el&&u.el._isVueCE?u.el:null;try{R&&R._beginPatch(),S(u,w,P,D,V,$,z)}finally{R&&R._endPatch()}}},O=(u,w,E,L,P,D,V,$)=>{let z,R;const{props:K,shapeFlag:j,transition:U,dirs:X}=u;if(z=u.el=o(u.type,D,K&&K.is,K),j&8?c(z,u.children):j&16&&k(u.children,z,null,L,P,Cr(u,D),V,$),X&&xt(u,null,L,"created"),T(z,u,u.scopeId,V,L),K){for(const pe in K)pe!=="value"&&!Ft(pe)&&r(z,pe,null,K[pe],D,L);"value"in K&&r(z,"value",null,K.value,D),(R=K.onVnodeBeforeMount)&&Ue(R,L,u)}X&&xt(u,null,L,"beforeMount");const se=Yc(P,U);se?U.beforeEnter(z):U&&!U.persisted&&(z[Gr]=!0),i(z,w,E),((R=K&&K.onVnodeMounted)||se||X)&&ye(()=>{R&&Ue(R,L,u),se&&U.enter(z),X&&xt(u,null,L,"mounted")},P)},T=(u,w,E,L,P)=>{if(E&&h(u,E),L)for(let D=0;D<L.length;D++)h(u,L[D]);if(P){let D=P.subTree;if(w===D||Es(D.type)&&(D.ssContent===w||D.ssFallback===w)){const V=P.vnode;T(u,V,V.scopeId,V.slotScopeIds,P.parent)}}},k=(u,w,E,L,P,D,V,$,z=0)=>{for(let R=z;R<u.length;R++){const K=u[R]=$?Nt(u[R]):Ke(u[R]);x(null,K,w,E,L,P,D,V,$)}},S=(u,w,E,L,P,D,V)=>{const $=w.el=u.el;let{patchFlag:z,dynamicChildren:R,dirs:K}=w;z|=u.patchFlag&16;const j=u.props||te,U=w.props||te;let X;if(E&&on(E,!1),(X=U.onVnodeBeforeUpdate)&&Ue(X,E,w,u),K&&xt(w,u,E,"beforeUpdate"),E&&on(E,!0),R&&(!u.dynamicChildren||u.dynamicChildren.length!==R.length)&&(z=0,V=!1,R=null),(j.innerHTML&&U.innerHTML==null||j.textContent&&U.textContent==null)&&c($,""),R?A(u.dynamicChildren,R,$,E,L,Cr(w,P),D):V||G(u,w,$,null,E,L,Cr(w,P),D,!1),z>0){if(z&16)N($,j,U,E,P);else if(z&2&&j.class!==U.class&&r($,"class",null,U.class,P),z&4&&r($,"style",j.style,U.style,P),z&8){const se=w.dynamicProps;for(let pe=0;pe<se.length;pe++){const de=se[pe],ve=j[de],Ee=U[de];(Ee!==ve||de==="value")&&r($,de,ve,Ee,P,E)}}z&1&&u.children!==w.children&&c($,w.children)}else!V&&R==null&&N($,j,U,E,P);((X=U.onVnodeUpdated)||K)&&ye(()=>{X&&Ue(X,E,w,u),K&&xt(w,u,E,"updated")},L)},A=(u,w,E,L,P,D,V)=>{for(let $=0;$<w.length;$++){const z=u[$],R=w[$],K=z.el||Ln(z),j=K&&(z.type===Ce||!lt(z,R)||z.shapeFlag&198)?p(K):E;x(z,R,j,null,L,P,D,V,!0)}},N=(u,w,E,L,P)=>{if(w!==E){if(w!==te)for(const D in w)!Ft(D)&&!(D in E)&&r(u,D,w[D],null,P,L);for(const D in E){if(Ft(D))continue;const V=E[D],$=w[D];V!==$&&D!=="value"&&r(u,D,$,V,P,L)}"value"in E&&r(u,"value",w.value,E.value,P)}},_=(u,w,E,L,P,D,V,$,z)=>{const R=w.el=u?u.el:a(""),K=w.anchor=u?u.anchor:a("");let{patchFlag:j,dynamicChildren:U,slotScopeIds:X}=w;X&&($=$?$.concat(X):X),u==null?(i(R,E,L),i(K,E,L),k(w.children||[],E,K,P,D,V,$,z)):j>0&&j&64&&U&&u.dynamicChildren&&u.dynamicChildren.length===U.length?(A(u.dynamicChildren,U,E,P,D,V,$),(w.key!=null||P&&w===P.subTree)&&Fo(u,w,!0)):G(u,w,E,K,P,D,V,$,z)},F=(u,w,E,L,P,D,V,$,z)=>{w.slotScopeIds=$,u==null?w.shapeFlag&512?P.ctx.activate(w,E,L,V,z):M(w,E,L,P,D,V,z):W(u,w,z)},M=(u,w,E,L,P,D,V)=>{const $=u.component=rd(u,L,P);if($i(u)&&($.ctx.renderer=_n),ad($,!1,V),$.asyncDep){if(P&&P.registerDep($,B,V,D),!u.el){const z=$.subTree=be(xe);C(null,z,w,E),u.placeholder=z.el}}else B($,u,w,E,P,D,V)},W=(u,w,E)=>{const L=w.component=u.component;if(mh(u,w,E))if(L.asyncDep&&!L.asyncResolved){w.el=u.el,w.placeholder=u.placeholder,q(L,w,E);return}else L.next=w,L.update();else w.el=u.el,w.placeholder=u.placeholder,L.vnode=w},B=(u,w,E,L,P,D,V)=>{const $=()=>{if(u.isMounted){let{next:j,bu:U,u:X,parent:se,vnode:pe}=u;{const Ye=Jc(u);if(Ye){j&&(j.el=pe.el,q(u,j,V)),Ye.asyncDep.then(()=>{const Ct=()=>{u.job.flags&8||(P&&P.pendingBranch?ye(Ct,P):R())};Ct.flags=48,ye(Ct,P)});return}}let de=j,ve;on(u,!1),j?(j.el=pe.el,q(u,j,V)):j=pe,U&&Dn(U),(ve=j.props&&j.props.onVnodeBeforeUpdate)&&Ue(ve,se,j,pe),on(u,!0);const Ee=cs(u),st=u.subTree;u.subTree=Ee,x(st,Ee,p(st.el||Ln(st)),Ui(st),u,P,D),j.el=Ee.el,de===null&&dr(u,Ee.el),X&&ye(X,P),(ve=j.props&&j.props.onVnodeUpdated)&&ye(()=>Ue(ve,se,j,pe),P)}else{let j;const{el:U,props:X}=w,{bm:se,m:pe,parent:de,root:ve,type:Ee}=u,st=zt(w);if(on(u,!1),se&&Dn(se),!st&&(j=X&&X.onVnodeBeforeMount)&&Ue(j,de,w),on(u,!0),U&&xr){const Ye=()=>{u.subTree=cs(u),xr(U,u.subTree,u,P,null)};st&&Ee.__asyncHydrate?Ee.__asyncHydrate(U,u,Ye):Ye()}else{ve.ce&&ve.ce._hasShadowRoot()&&ve.ce._injectChildStyle(Ee,u.parent?u.parent.type:void 0);const Ye=u.subTree=cs(u);x(null,Ye,E,L,u,P,D),w.el=Ye.el}if(pe&&ye(pe,P),!st&&(j=X&&X.onVnodeMounted)){const Ye=w;ye(()=>Ue(j,de,Ye),P)}(w.shapeFlag&256||de&&zt(de.vnode)&&de.vnode.shapeFlag&256)&&u.a&&ye(u.a,P),u.isMounted=!0,w=E=L=null}};u.scope.on();const z=u.effect=new gi($);u.scope.off();const R=u.update=z.run.bind(z),K=u.job=z.runIfDirty.bind(z);K.i=u,K.id=u.uid,z.scheduler=()=>ir(K),on(u,!0),R()},q=(u,w,E)=>{w.component=u;const L=u.vnode.props;u.vnode=w,u.next=null,wh(u,w.props,L,E),kh(u,w.children,E),_t(),pc(u),Tt()},G=(u,w,E,L,P,D,V,$,z=!1)=>{const R=u&&u.children,K=u?u.shapeFlag:0,j=w.children,{patchFlag:U,shapeFlag:X}=w;if(U>0){if(U&128){Q(R,j,E,L,P,D,V,$,z);return}else if(U&256){ge(R,j,E,L,P,D,V,$,z);return}}X&8?(K&16&&Yn(R,P,D),j!==R&&c(E,j)):K&16?X&16?Q(R,j,E,L,P,D,V,$,z):Yn(R,P,D,!0):(K&8&&c(E,""),X&16&&k(j,E,L,P,D,V,$,z))},ge=(u,w,E,L,P,D,V,$,z)=>{u=u||pn,w=w||pn;const R=u.length,K=w.length,j=Math.min(R,K);let U;for(U=0;U<j;U++){const X=w[U]=z?Nt(w[U]):Ke(w[U]);x(u[U],X,E,null,P,D,V,$,z)}R>K?Yn(u,P,D,!0,!1,j):k(w,E,L,P,D,V,$,z,j)},Q=(u,w,E,L,P,D,V,$,z)=>{let R=0;const K=w.length;let j=u.length-1,U=K-1;for(;R<=j&&R<=U;){const X=u[R],se=w[R]=z?Nt(w[R]):Ke(w[R]);if(lt(X,se))x(X,se,E,null,P,D,V,$,z);else break;R++}for(;R<=j&&R<=U;){const X=u[j],se=w[U]=z?Nt(w[U]):Ke(w[U]);if(lt(X,se))x(X,se,E,null,P,D,V,$,z);else break;j--,U--}if(R>j){if(R<=U){const X=U+1,se=X<K?w[X].el:L;for(;R<=U;)x(null,w[R]=z?Nt(w[R]):Ke(w[R]),E,se,P,D,V,$,z),R++}}else if(R>U)for(;R<=j;)le(u[R],P,D,!0),R++;else{const X=R,se=R,pe=new Map;for(R=se;R<=U;R++){const Je=w[R]=z?Nt(w[R]):Ke(w[R]);Je.key!=null&&pe.set(Je.key,R)}let de,ve=0;const Ee=U-se+1;let st=!1,Ye=0;const Ct=new Array(Ee);for(R=0;R<Ee;R++)Ct[R]=0;for(R=X;R<=j;R++){const Je=u[R];if(ve>=Ee){le(Je,P,D,!0);continue}let bt;if(Je.key!=null)bt=pe.get(Je.key);else for(de=se;de<=U;de++)if(Ct[de-se]===0&&lt(Je,w[de])){bt=de;break}bt===void 0?le(Je,P,D,!0):(Ct[bt-se]=R+1,bt>=Ye?Ye=bt:st=!0,x(Je,w[bt],E,null,P,D,V,$,z),ve++)}const ga=st?Sh(Ct):pn;for(de=ga.length-1,R=Ee-1;R>=0;R--){const Je=se+R,bt=w[Je],ma=w[Je+1],ba=Je+1<K?ma.el||Ln(ma):L;Ct[R]===0?x(null,bt,E,ba,P,D,V,$,z):st&&(de<0||R!==ga[de]?me(bt,E,ba,2):de--)}}},me=(u,w,E,L,P=null)=>{const{el:D,type:V,transition:$,children:z,shapeFlag:R}=u;if(R&6){me(u.component.subTree,w,E,L);return}if(R&128){u.suspense.move(w,E,L);return}if(R&64){V.move(u,w,E,_n);return}if(V===Ce){i(D,w,E);for(let j=0;j<z.length;j++)me(z[j],w,E,L);i(u.anchor,w,E);return}if(V===Qt){f(u,w,E);return}if(L!==2&&R&1&&$)if(L===0)$.persisted&&!D[ot]?i(D,w,E):($.beforeEnter(D),i(D,w,E),ye(()=>$.enter(D),P));else{const{leave:j,delayLeave:U,afterLeave:X}=$,se=()=>{u.ctx.isUnmounted?s(D):i(D,w,E)},pe=()=>{const de=D._isLeaving||!!D[ot];D._isLeaving&&D[ot](!0),$.persisted&&!de?se():j(D,()=>{se(),X&&X()})};U?U(D,se,pe):pe()}else i(D,w,E)},le=(u,w,E,L=!1,P=!1)=>{const{type:D,props:V,ref:$,children:z,dynamicChildren:R,shapeFlag:K,patchFlag:j,dirs:U,cacheIndex:X,memo:se}=u;if((j===-2||R&&R.hasOnce)&&(P=!1),$!=null&&(_t(),Mn($,null,E,u,!0),Tt()),X!=null&&(!u.ctx||u.ctx===w)&&(w.renderCache[X]=void 0),K&256&&w.ctx.deactivate(u))return;const pe=K&1&&U,de=!zt(u);let ve;if(de&&(ve=V&&V.onVnodeBeforeUnmount)&&Ue(ve,w,u),K&6)Lp(u.component,E,L);else{if(K&128){u.suspense.unmount(E,L);return}pe&&xt(u,null,w,"beforeUnmount"),K&64?u.type.remove(u,w,E,_n,L):R&&!R.hasOnce&&(D!==Ce||j>0&&j&64)?Yn(R,w,E,!1,!0):(D===Ce&&j&384||!P&&K&16)&&Yn(z,w,E),L&&Sn(u)}const Ee=se!=null&&X==null;(de&&(ve=V&&V.onVnodeUnmounted)||pe||Ee)&&ye(()=>{ve&&Ue(ve,w,u),pe&&xt(u,null,w,"unmounted"),Ee&&(u.el=null)},E)},Sn=u=>{const{type:w,el:E,anchor:L,transition:P}=u,D=w===Ce;if(D&&!P){fa(E,L);return}if(w===Qt){g(u),P&&!P.persisted&&P.afterLeave&&P.afterLeave();return}const V=D?yi(u):u,$=()=>{D?p(E)&&fa(E,L):s(E),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(V&&V.shapeFlag&1&&P&&!P.persisted){const{leave:z,delayLeave:R}=P,K=V.el,j=()=>z(K,$);R?R(K,$,j):j()}else $()},fa=(u,w)=>{let E;for(;u!==w;)E=m(u),s(u),u=E;s(w)},Lp=(u,w,E)=>{const{bum:L,scope:P,job:D,subTree:V,um:$,m:z,a:R}=u;Ts(z),Ts(R),L&&Dn(L),P.stop(),D?(D.flags|=8,le(V,u,w,E)):V&&(V.transition=u.vnode.transition,le(V,u,w,E)),$&&ye($,w);const K=()=>{u.isUnmounted=!0};K.flags=16,ye(K,w)},Yn=(u,w,E,L=!1,P=!1,D=0)=>{for(let V=D;V<u.length;V++)le(u[V],w,E,L,P)},Ui=u=>{if(u.shapeFlag&6)return Ui(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const w=m(u.anchor||u.el),E=w&&w[xc];return E?m(E):w},ha=(u,w,E)=>{const L=u&&w._vnode?void 0:u&&u.component?u.component.uid:Lh();Zu(()=>{u==null?w._vnode&&le(w._vnode,null,null,!0):x(w._vnode||null,u,w,null,null,null,E),w._vnode=u},L)},_n={p:x,um:le,m:me,r:Sn,mt:M,mc:k,pc:G,pbc:A,n:Ui,o:e};let wr,xr;return t&&([wr,xr]=t(_n)),{render:ha,hydrate:wr,createApp:dh(ha,wr)}}function Cr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function on({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Yc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Fo(e,t,n=!1){const i=e.children,s=t.children;if(H(i)&&H(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Nt(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Fo(o,a)),a.type===Zt&&(a.patchFlag===-1&&(a=s[r]=Nt(a)),a.el=o.el),a.type===xe&&!a.el&&(a.el=o.el)}}function Sh(e){const t=e.slice(),n=[0];let i,s,r,o,a;const l=e.length;for(i=0;i<l;i++){const d=e[i];if(d!==0){if(s=n[n.length-1],e[s]<d){t[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<d?r=a+1:o=a;d<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}function Jc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Jc(t)}function Ts(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ln(e){if(e.placeholder)return e.placeholder;const t=e.component;if(t)return Ln(t.subTree);const n=e.suspense;return n&&n.activeBranch?Ln(n.activeBranch):null}const Es=e=>e.__isSuspense;let Kr=0;const Gr=Symbol("_deferredEnter"),_h={name:"Suspense",__isSuspense:!0,process(e,t,n,i,s,r,o,a,l,d){if(e==null)Eh(t,n,i,s,r,o,a,l,d);else{const c=e.suspense;if(r&&r.deps>0&&!r.isHydrating){const p=c.parentComponent;if(!!p&&p.suspense===r&&p.suspenseId!==r.pendingId?r.pendingBranch&&!lt(t.ssContent,c.pendingBranch||c.activeBranch):!c.isInFallback){t.suspense=c,c.vnode=t,t.el=e.el;return}}Ch(e,t,n,i,s,o,a,l,d)}},hydrate:Ah,normalize:Ih},Th=_h;function Si(e,t){const n=e.props&&e.props[t];Y(n)&&n()}function La(e){const t=[];qr(e,t,!0),t.length&&Lt(t)}function qr(e,t,n){const{el:i,transition:s,children:r,shapeFlag:o}=e;if(o&6){qr(e.component.subTree,t,n);return}if(!(o&192)&&(o&1&&(!n&&i&&i[Gr]&&(i[Gr]=void 0,s&&!s.persisted&&(s.beforeEnter(i),t.push(()=>s.enter(i)))),n=!1),o&16))for(let a=0;a<r.length;a++)qr(r[a],t,n)}function Eh(e,t,n,i,s,r,o,a,l){const{p:d,o:{createElement:c}}=l,p=c("div"),m=e.suspense=Xc(e,s,i,t,p,n,r,o,a,l);d(null,m.pendingBranch=e.ssContent,p,null,i,m,r,o),m.deps>0?(Si(e,"onPending"),Si(e,"onFallback"),d(null,e.ssFallback,t,n,i,null,r,o),Fn(m,e.ssFallback)):m.resolve(!1,!0)}function Ch(e,t,n,i,s,r,o,a,{p:l,um:d,o:{createElement:c}}){const p=t.suspense=e.suspense;p.vnode=t,t.el=e.el;const m=t.ssContent,h=t.ssFallback,{activeBranch:v,pendingBranch:x,isInFallback:I,isHydrating:C}=p;if(x)p.pendingBranch=m,lt(x,m)?(p.deps++,l(x,m,C?n:p.hiddenContainer,null,s,p,r,o,a),p.deps--,p.deps<=0?p.resolve():I&&!C&&!p.isFallbackMountPending&&(l(v,h,n,i,s,null,r,o,a),Fn(p,h))):(p.pendingId=Kr++,C?(p.isHydrating=!1,p.activeBranch=x):d(x,s,p),p.deps=0,Zc(p),p.hiddenContainer=c("div"),I?(l(null,m,p.hiddenContainer,null,s,p,r,o,a),p.deps<=0?p.resolve():p.isFallbackMountPending||(l(v,h,n,i,s,null,r,o,a),Fn(p,h))):v&&lt(v,m)?(l(v,m,n,i,s,p,r,o,a),p.resolve(!0)):(l(null,m,p.hiddenContainer,null,s,p,r,o,a),p.deps<=0&&p.resolve()));else if(v&&lt(v,m))l(v,m,n,i,s,p,r,o,a),Fn(p,m);else if(Si(t,"onPending"),p.pendingBranch=m,p.pendingId=Kr++,l(null,m,p.hiddenContainer,null,s,p,r,o,a),p.deps<=0)p.resolve();else{const{timeout:y}=p;y>0?p.timeoutTimer=setTimeout(()=>{p.timeoutTimer=void 0,p.fallback(p.vnode.ssFallback)},y):y===0&&p.fallback(h)}}function Xc(e,t,n,i,s,r,o,a,l,d,c=!1){const{p,m,um:h,n:v,o:{parentNode:x,remove:I}}=d;let C;const y=Ph(e);y&&t&&t.pendingBranch&&(C=t.pendingId,t.deps++);const f=e.props?gs(e.props.timeout):void 0,g=r,b={vnode:e,parent:t,parentComponent:n,namespace:o,container:i,hiddenContainer:s,deps:0,pendingId:Kr++,timeout:typeof f=="number"?f:-1,timeoutTimer:void 0,activeBranch:null,isFallbackMountPending:!1,pendingBranch:null,isInFallback:!c,isHydrating:c,isUnmounted:!1,effects:[],resolve(O=!1,T=!1){const{vnode:k,activeBranch:S,pendingBranch:A,pendingId:N,effects:_,parentComponent:F,container:M,isInFallback:W}=b;let B=!1;if(b.isHydrating)b.isHydrating=!1;else if(!O){B=S&&A.transition&&A.transition.mode==="out-in";let Q=!1;B&&(S.transition.afterLeave=()=>{N===b.pendingId&&!b.isUnmounted&&(La(A),m(A,M,r===g&&!Q?v(S):r,0),Lt(_),W&&k.ssFallback&&(k.ssFallback.el=null))}),S&&!b.isFallbackMountPending&&(x(S.el||Ln(S))===M&&(r=v(S),Q=!0),h(S,F,b,!0),!B&&W&&k.ssFallback&&ye(()=>k.ssFallback.el=null,b)),B||(La(A),m(A,M,r,0))}clearTimeout(b.timeoutTimer),b.timeoutTimer=void 0,b.isFallbackMountPending=!1,Fn(b,A),b.pendingBranch=null,b.isInFallback=!1;let q=0;for(let Q=0;Q<_.length;Q++){const me=_[Q];me.flags&32?Lt(me):_[q++]=me}_.length=q;let G=b.parent,ge=!1;for(;G;){if(G.pendingBranch){for(let Q=0;Q<_.length;Q++)G.effects.push(_[Q]);ge=!0;break}G=G.parent}!ge&&!B&&Lt(_),b.effects=[],y&&t&&t.pendingBranch&&C===t.pendingId&&(C=void 0,t.deps--,t.deps===0&&!T&&t.resolve()),Si(k,"onResolve")},fallback(O){if(b.isUnmounted||!b.pendingBranch)return;const{vnode:T,activeBranch:k,parentComponent:S,container:A,namespace:N}=b;Si(T,"onFallback");const _=v(k),F=()=>{if(b.isFallbackMountPending=!1,b.isUnmounted||!b.isInFallback)return;const W=b.vnode.ssFallback;p(null,W,A,_,S,null,N,a,l),Fn(b,W)},M=O.transition&&O.transition.mode==="out-in";M&&(b.isFallbackMountPending=!0,k.transition.afterLeave=F),b.isInFallback=!0,h(k,S,null,!0),M||F()},move(O,T,k){b.activeBranch&&m(b.activeBranch,O,T,k),b.container=O},next(){return b.activeBranch&&v(b.activeBranch)},registerDep(O,T,k,S){const A=!!b.pendingBranch;A&&b.deps++;const N=O.vnode.el,_=F=>{O.asyncResolved=!0;const{vnode:M}=O;Yr(O,F,!1),N&&(M.el=N);const W=!N&&O.subTree.el;T(O,M,x(N||O.subTree.el),N?null:v(O.subTree),b,S,k),W&&(M.placeholder=null,I(W)),dr(O,M.el)};O.asyncDep.catch(F=>(kn(F,O,0,!1,!0),()=>null)).then(F=>{if(O.isUnmounted||b.isUnmounted)return;const M=A&&b.pendingId===O.suspenseId;if(Ei(),!O.scope.active){M&&--b.deps===0&&b.resolve();return}if(!M&&b.pendingBranch){const W=()=>{O.isUnmounted||b.isUnmounted||!O.scope.active||(b.pendingBranch?Cs(W,b):_(F))};W.flags=48,Cs(W,b);return}_(F),M&&--b.deps===0&&b.resolve()})},unmount(O,T){if(b.isUnmounted=!0,clearTimeout(b.timeoutTimer),b.timeoutTimer=void 0,C!==void 0){const k=b.parent,S=C;C=void 0,Lt(()=>{k.pendingId===S&&!k.isUnmounted&&--k.deps===0&&k.resolve()})}b.activeBranch&&h(b.activeBranch,n,O,T),b.pendingBranch&&(h(b.pendingBranch,n,b,T),Zc(b))}};return b}function Ah(e,t,n,i,s,r,o,a,l){const d=t.suspense=Xc(t,i,n,e.parentNode,document.createElement("div"),null,s,r,o,a,!0),c=l(e,d.pendingBranch=t.ssContent,n,d,r,o);return d.deps===0&&d.resolve(!1,!0),c}function Ih(e){const{shapeFlag:t,children:n}=e,i=t&32;e.ssContent=Fa(i?n.default:n),e.ssFallback=i?Fa(n.fallback):be(xe)}function Fa(e){let t;if(Y(e)){const n=bn&&e._c;n&&(e._d=!1,_i()),e=e(),n&&(e._d=!0,t=Fe,pr())}return H(e)&&(e=Oo(e)),e=Ke(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function Zc(e){const{effects:t}=e;for(let n=0;n<t.length;n++){const i=t[n];i.flags&16&&Lt(i)}t.length=0}function Cs(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Lt(e)}function Fn(e,t){e.activeBranch=t;const{vnode:n,parentComponent:i}=e;let s=t.el;for(;!s&&t.component;)t=t.component.subTree,s=t.el;n.el=s,i&&i.subTree===n&&(i.vnode.el=s,dr(i,s))}function Ph(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const Ce=Symbol.for("v-fgt"),Zt=Symbol.for("v-txt"),xe=Symbol.for("v-cmt"),Qt=Symbol.for("v-stc"),$t=[];let Fe=null;function _i(e=!1){$t.push(Fe=e?null:[])}function pr(){$t.pop(),Fe=$t[$t.length-1]||null}let bn=1;function Ti(e,t=!1){bn+=e,e<0&&Fe&&t&&(Fe.hasOnce=!0)}function Qc(e){return e.dynamicChildren=bn>0?Fe||pn:null,pr(),bn>0&&Fe&&Fe.push(e),e}function Rh(e,t,n,i,s,r){return Qc(zo(e,t,n,i,s,r,!0))}function As(e,t,n,i,s){return Qc(be(e,t,n,i,s,!0))}function Ht(e){return e?e.__v_isVNode===!0:!1}function lt(e,t){return e.type===t.type&&e.key===t.key}function Nh(e){}const ed=({key:e})=>e??null,ds=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?J(e)||Te(e)||Y(e)?{i:Ne,r:e,k:t,f:!!n}:e:null);function zo(e,t=null,n=null,i=0,s=null,r=e===Ce?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ed(t),ref:t&&ds(t),scopeId:sr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ne};return a?(Is(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=J(n)?8:16),bn>0&&!o&&Fe&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Fe.push(l),l}const be=Dh;function Dh(e,t=null,n=null,i=0,s=null,r=!1){if((!e||e===Rc)&&(e=xe),Ht(e)){const a=Et(e,t,!0);return n&&Is(a,n),bn>0&&!r&&Fe&&(a.shapeFlag&6?Fe[Fe.indexOf(e)]=a:Fe.push(a)),a.patchFlag=-2,a}if(Vh(e)&&(e=e.__vccOpts),t){t=td(t);let{class:a,style:l}=t;a&&!J(a)&&(t.class=Mi(a)),ae(l)&&(Li(l)&&!H(l)&&(l=Z({},l)),t.style=Oi(l))}const o=J(e)?1:Es(e)?128:rr(e)?64:ae(e)?4:Y(e)?2:0;return zo(e,t,n,i,s,o,r,!0)}function td(e){return e?Li(e)?Z({},e):Vc(e)?Z({},e[dd]||e):e:null}function Et(e,t,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=e,d=t?id(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&ed(d),ref:t&&t.ref?n&&r?H(r)?r.concat(ds(t)):[r,ds(t)]:ds(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Et(e.ssContent),ssFallback:e.ssFallback&&Et(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return l&&i&&ht(c,l.clone(c)),c}function $o(e=" ",t=0){return be(Zt,null,e,t)}function Oh(e,t){const n=be(Qt,null,e);return n.staticCount=t,n}function nd(e="",t=!1){return t?(_i(),As(xe,null,e)):be(xe,null,e)}function Ke(e){return e==null||typeof e=="boolean"?be(xe):H(e)?be(Ce,null,e.slice()):Ht(e)?Nt(e):be(Zt,null,String(e))}function Nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Et(e)}function Is(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Is(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Vc(t)?t._ctx=Ne:s===3&&Ne&&(Ne.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(Y(t)){if(i&65){Is(e,{default:t});return}t={default:t,_ctx:Ne},n=32}else t=String(t),i&64?(n=16,t=[$o(t)]):n=8;e.children=t,e.shapeFlag|=n}function id(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Mi([t.class,i.class]));else if(s==="style")t.style=Oi([t.style,i.style]);else if(yn(s)){const r=t[s],o=i[s];o&&r!==o&&!(H(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!Ks(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Ue(e,t,n,i=null){tt(e,t,7,[n,i])}const Mh=Oc();let sd=0;function Lh(){return sd}function rd(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||Mh,r={uid:sd++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jc(i,s),emitsOptions:Lc(i,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:i.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=uh.bind(null,r),e.ce&&e.ce(r),r}let Re=null;const Be=()=>Re||Ne;let Ps,en;{const e=Js(),t=(n,i)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ps=t("__VUE_INSTANCE_SETTERS__",n=>Re=n),en=t("__VUE_SSR_SETTERS__",n=>wn=n)}const qn=e=>{const t=Re;return Ps(e),e.scope.on(),()=>{e.scope.off(),Ps(t)}},Ei=()=>{Re&&Re.scope.off(),Ps(null)};function od(e){return e.vnode.shapeFlag&4}let wn=!1;function ad(e,t=!1,n=!1){t&&en(t);const{props:i,children:s}=e.vnode,r=od(e);bh(e,i,r,t),vh(e,s,n||t);const o=r?Fh(e,t):void 0;return t&&en(!1),o}function Fh(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,jr);const{setup:i}=n;if(i){_t();const s=e.setupContext=i.length>1?pd(e):null,r=qn(e),o=Gn(i,e,0,[e.props,s]),a=mo(o);if(Tt(),r(),(a||e.sp)&&!zt(e)&&Eo(e),a){if(o.then(Ei,Ei),t)return o.then(l=>{en(!0);try{Yr(e,l,t)}finally{en(!1)}}).catch(l=>{kn(l,e,0,void 0,!0),e.ssrRender=(d,c)=>c("<!---->")});e.asyncDep=o}else Yr(e,o,t)}else cd(e,t)}function Yr(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=vo(t)),cd(e,n)}let Rs,Jr;function ld(e){Rs=e,Jr=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,Wf))}}const zh=()=>!Rs;function cd(e,t,n){const i=e.type;if(!e.render){if(!t&&Rs&&!i.render){const s=i.template||Do(e).template;if(s){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=i,d=Z(Z({isCustomElement:r,delimiters:a},o),l);i.render=Rs(s,d)}}e.render=i.render||De,Jr&&Jr(e)}{const s=qn(e);_t();try{sh(e)}finally{Tt(),s()}}}const dd=Symbol(),$h={get(e,t){return Le(e,"get",""),t===dd?e:e[t]}};function pd(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,$h),slots:e.slots,emit:e.emit,expose:t}}function Hi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(vo(nc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in pi)return pi[n](e)},has(t,n){return n in t||n in pi}})):e.proxy}function Xr(e,t=!0){return Y(e)?e.displayName||e.name:e.name||t&&e.__name}function Vh(e){return Y(e)&&"__vccOpts"in e}const ud=(e,t)=>Vu(e,t,wn);function fd(e,t,n){try{Ti(-1);const i=arguments.length;return i===2?ae(t)&&!H(t)?Ht(t)?be(e,null,[t]):be(e,t):be(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ht(n)&&(n=[n]),be(e,t,n))}finally{Ti(1)}}function Hh(){}function jh(e,t,n,i){const s=n[i];if(s&&hd(s,e))return s;const r=t();return r.memo=e.slice(),r.cacheIndex=i,n[i]=r}function hd(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let i=0;i<n.length;i++)if(Ie(n[i],t[i]))return!1;return bn>0&&Fe&&Fe.push(e),!0}const gd="3.5.45",Bh=De,Wh=Yu,Uh=In,Kh=fc,Gh={createComponentInstance:rd,setupComponent:ad,renderComponentRoot:cs,setCurrentRenderingInstance:xi,isVNode:Ht,normalizeVNode:Ke,getComponentPublicInstance:Hi,ensureValidVNode:No,pushWarningContext:Uu,popWarningContext:Ku},qh=Gh,Yh=null,Jh=null,Xh=null;let Zr;const za=typeof window<"u"&&window.trustedTypes;if(za)try{Zr=za.createPolicy("vue",{createHTML:e=>e})}catch{}const md=Zr?e=>Zr.createHTML(e):e=>e,Zh="http://www.w3.org/2000/svg",Qh="http://www.w3.org/1998/Math/MathML",Rt=typeof document<"u"?document:null,$a=Rt&&Rt.createElement("template"),bd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t==="svg"?Rt.createElementNS(Zh,e):t==="mathml"?Rt.createElementNS(Qh,e):n?Rt.createElement(e,{is:n}):Rt.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>Rt.createTextNode(e),createComment:e=>Rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const o=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{$a.innerHTML=md(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const a=$a.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Wt="transition",Zn="animation",Vn=Symbol("_vtc"),wd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},xd=Z({},_o,wd),eg=e=>(e.displayName="Transition",e.props=xd,e),tg=eg((e,{slots:t})=>fd(vc,yd(e),t)),an=(e,t=[])=>{H(e)?e.forEach(n=>n(...t)):e&&e(...t)},Va=e=>e?H(e)?e.some(t=>t.length>1):e.length>1:!1;function yd(e){const t={};for(const _ in e)_ in wd||(t[_]=e[_]);if(e.css===!1)return t;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:d=o,appearToClass:c=a,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,v=ng(s),x=v&&v[0],I=v&&v[1],{onBeforeEnter:C,onEnter:y,onEnterCancelled:f,onLeave:g,onLeaveCancelled:b,onBeforeAppear:O=C,onAppear:T=y,onAppearCancelled:k=f}=t,S=(_,F,M,W)=>{_._enterCancelled=W,Gt(_,F?c:a),Gt(_,F?d:o),M&&M()},A=(_,F)=>{_._isLeaving=!1,Gt(_,p),Gt(_,h),Gt(_,m),F&&F()},N=_=>(F,M)=>{const W=_?T:y,B=()=>S(F,_,M);an(W,[F,B]),Ha(()=>{Gt(F,_?l:r),wt(F,_?c:a),Va(W)||ja(F,i,x,B)})};return Z(t,{onBeforeEnter(_){an(C,[_]),wt(_,r),wt(_,o)},onBeforeAppear(_){an(O,[_]),wt(_,l),wt(_,d)},onEnter:N(!1),onAppear:N(!0),onLeave(_,F){_._isLeaving=!0;const M=()=>A(_,F);wt(_,p),_._enterCancelled?(wt(_,m),Qr(_)):(Qr(_),wt(_,m)),Ha(()=>{_._isLeaving&&(Gt(_,p),wt(_,h),Va(g)||ja(_,i,I,M))}),an(g,[_,M])},onEnterCancelled(_){S(_,!1,void 0,!0),an(f,[_])},onAppearCancelled(_){S(_,!0,void 0,!0),an(k,[_])},onLeaveCancelled(_){A(_),an(b,[_])}})}function ng(e){if(e==null)return null;if(ae(e))return[Ar(e.enter),Ar(e.leave)];{const t=Ar(e);return[t,t]}}function Ar(e){return gs(e)}function wt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Vn]||(e[Vn]=new Set)).add(t)}function Gt(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const n=e[Vn];n&&(n.delete(t),n.size||(e[Vn]=void 0))}function Ha(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ig=0;function ja(e,t,n,i){const s=e._endId=++ig,r=()=>{s===e._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=vd(e,t);if(!o)return i();const d=o+"end";let c=0;const p=()=>{e.removeEventListener(d,m),r()},m=h=>{h.target===e&&++c>=l&&p()};setTimeout(()=>{c<l&&p()},a+1),e.addEventListener(d,m)}function vd(e,t){const n=window.getComputedStyle(e),i=v=>(n[v]||"").split(", "),s=i(`${Wt}Delay`),r=i(`${Wt}Duration`),o=Ba(s,r),a=i(`${Zn}Delay`),l=i(`${Zn}Duration`),d=Ba(a,l);let c=null,p=0,m=0;t===Wt?o>0&&(c=Wt,p=o,m=r.length):t===Zn?d>0&&(c=Zn,p=d,m=l.length):(p=Math.max(o,d),c=p>0?o>d?Wt:Zn:null,m=c?c===Wt?r.length:l.length:0);const h=c===Wt&&/\b(?:transform|all)(?:,|$)/.test(i(`${Wt}Property`).toString());return{type:c,timeout:p,propCount:m,hasTransform:h}}function Ba(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>Wa(n)+Wa(e[i])))}function Wa(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Qr(e){return(e?e.ownerDocument:document).body.offsetHeight}function sg(e,t,n){const i=e[Vn];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ns=Symbol("_vod"),Vo=Symbol("_vsh"),kd={name:"show",beforeMount(e,{value:t},{transition:n}){e[Ns]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Qn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!=!n&&(i?t?(i.beforeEnter(e),Qn(e,!0),i.enter(e)):i.leave(e,()=>{Qn(e,!1)}):Qn(e,t))},beforeUnmount(e,{value:t}){Qn(e,t)}};function Qn(e,t){e.style.display=t?e[Ns]:"none",e[Vo]=!t}function rg(){kd.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Sd=Symbol("");function og(e){const t=Be();if(!t)return;const n=t.ut=(s=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(r=>Ds(r,s))},i=()=>{const s=e(t.proxy);t.ce?Ds(t.ce,s):eo(t.subTree,s),n(s)};Ao(()=>{Lt(i)}),Vi(()=>{On(i,De,{flush:"post"});const s=new MutationObserver(i);s.observe(t.subTree.el.parentNode,{childList:!0}),Io(()=>s.disconnect())})}function eo(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{eo(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)Ds(e.el,t);else if(e.type===Ce)e.children.forEach(n=>eo(n,t));else if(e.type===Qt){let{el:n,anchor:i}=e;for(;n&&(Ds(n,t),n!==i);)n=n.nextSibling}}function Ds(e,t){if(e.nodeType===1){const n=e.style;let i="";for(const s in t){const r=lu(t[s]);n.setProperty(`--${s}`,r),i+=`--${s}: ${r};`}n[Sd]=i}}const ag=/(?:^|;)\s*display\s*:/;function lg(e,t,n){const i=e.style,s=J(n);let r=!1;if(n&&!s){if(t)if(J(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&oi(i,a,"")}else for(const o in t)n[o]==null&&oi(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?dg(e,o,!J(t)&&t?t[o]:void 0,a)||oi(i,o,a):oi(i,o,"")}}else if(s){if(t!==n){const o=i[Sd];o&&(n+=";"+o),i.cssText=n,r=ag.test(n)}}else t&&e.removeAttribute("style");Ns in e&&((!s||t!==n)&&(e[Ns]=r?i.display:""),e[Vo]&&(i.display="none"))}const ts=/\s*!important$/;function oi(e,t,n){if(H(n))n.forEach(i=>oi(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))ts.test(n)?e.setProperty(t,n.replace(ts,""),"important"):e.setProperty(t,n);else{const i=cg(e,t);ts.test(n)?e.setProperty(Ge(i),n.replace(ts,""),"important"):e[i]=n}}const Ua=["Webkit","Moz","ms"],Ir={};function cg(e,t){const n=Ir[t];if(n)return n;let i=ce(t);if(i!=="filter"&&i in e)return Ir[t]=i;i=vn(i);for(let s=0;s<Ua.length;s++){const r=Ua[s]+i;if(r in e)return Ir[t]=r}return t}function dg(e,t,n,i){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&J(i)&&n===i}const Ka="http://www.w3.org/1999/xlink";function Ga(e,t,n,i,s,r=ru(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ka,t.slice(6,t.length)):e.setAttributeNS(Ka,t,n):n==null||r&&!Dl(n)?e.removeAttribute(t):e.setAttribute(t,r?"":$e(n)?String(n):n)}function qa(e,t,n,i,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?md(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Dl(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Mt(e,t,n,i){e.addEventListener(t,n,i)}function pg(e,t,n,i){e.removeEventListener(t,n,i)}const Ya=Symbol("_vei");function ug(e,t,n,i,s=null){const r=e[Ya]||(e[Ya]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=gg(t);if(i){const d=r[t]=wg(i,s);Mt(e,a,d,l)}else o&&(pg(e,a,o,l),r[t]=void 0)}}const fg=/(Once|Passive|Capture)$/,hg=/^on:?(?:Once|Passive|Capture)$/;function gg(e){let t,n;for(;(n=e.match(fg))&&!hg.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Ge(e.slice(2)),t]}let Pr=0;const mg=Promise.resolve(),bg=()=>Pr||(mg.then(()=>Pr=0),Pr=Date.now());function wg(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const s=n.value;if(H(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const d=o[l];d&&tt(d,t,5,a)}}else tt(s,t,5,[i])};return n.value=e,n.attached=bg(),n}const Ja=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,_d=(e,t,n,i,s,r)=>{const o=s==="svg";t==="class"?sg(e,i,o):t==="style"?lg(e,n,i):yn(t)?Ks(t)||ug(e,t,n,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):xg(e,t,i,o))?(qa(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ga(e,t,i,o,r,t!=="value")):e._isVueCE&&(yg(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!J(i)))?qa(e,ce(t),i,r,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Ga(e,t,i,o))};function xg(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ja(t)&&Y(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ja(t)&&J(n)?!1:t in e}function yg(e,t){const n=e._def.props;if(!n)return!1;const i=ce(t);return Array.isArray(n)?n.some(s=>ce(s)===i):Object.keys(n).some(s=>ce(s)===i)}const Xa={};function Td(e,t,n){let i=To(e,t);Gs(i)&&(i=Z({},i,t));class s extends ur{constructor(o){super(i,o,n)}}return s.def=i,s}const vg=((e,t)=>Td(e,t,Fd)),kg=typeof HTMLElement<"u"?HTMLElement:class{};class ur extends kg{constructor(t,n={},i=Ls){super(),this._def=t,this._props=n,this._createApp=i,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._patching=!1,this._dirty=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._styleAnchors=new WeakMap,this._ob=null,this.shadowRoot&&i!==Ls?this._root=this.shadowRoot:t.shadowRoot!==!1?(this.attachShadow(Z({},t.shadowRootOptions,{mode:"open"})),this._root=this.shadowRoot):this._root=this}connectedCallback(){if(!this.isConnected)return;!this.shadowRoot&&!this._resolved&&this._parseSlots(),this._connected=!0;let t=this;for(;t=t&&(t.assignedSlot||t.parentNode||t.host);)if(t instanceof ur){this._parent=t;break}this._instance||(this._resolved?this._mount(this._def):t&&t._pendingResolve?this._pendingResolve=t._pendingResolve.then(()=>{if(this._pendingResolve=void 0,this.isConnected)return this._resolveDef()}):this._resolveDef())}_setParent(t=this._parent){t&&(this._instance.parent=t._instance,this._inheritParentContext(t))}_inheritParentContext(t=this._parent){t&&this._app&&Object.setPrototypeOf(this._app._context.provides,t._instance.provides)}disconnectedCallback(){this._connected=!1,jt(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null,this._teleportTargets&&(this._teleportTargets.clear(),this._teleportTargets=void 0))})}_processMutations(t){for(const n of t)this._setAttr(n.attributeName)}_resolveDef(){if(this._pendingResolve)return this._pendingResolve;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);this._ob=new MutationObserver(this._processMutations.bind(this)),this._ob.observe(this,{attributes:!0});const t=(i,s=!1)=>{this._resolved=!0,this._pendingResolve=void 0;const{props:r,styles:o}=i;let a;if(r&&!H(r))for(const l in r){const d=r[l];(d===Number||d&&d.type===Number)&&(l in this._props&&(this._props[l]=gs(this._props[l])),(a||(a=Object.create(null)))[ce(l)]=!0)}this._numberProps=a,this._resolveProps(i),this.shadowRoot&&this._applyStyles(o),this._connected&&this._mount(i)},n=this._def.__asyncLoader;if(n)return this._pendingResolve=n().then(i=>{i.configureApp=this._def.configureApp,t(this._def=i,!0)}),this._pendingResolve;t(this._def)}_mount(t){this._app=this._createApp(t),this._inheritParentContext(),t.configureApp&&t.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);const n=this._instance&&this._instance.exposed;if(n)for(const i in n)re(this,i)||Object.defineProperty(this,i,{get:()=>Fi(n[i])})}_resolveProps(t){const{props:n}=t,i=H(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&i.includes(s)&&this._setProp(s,this[s]);for(const s of i.map(ce))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(r){this._setProp(s,r,!0,!this._patching)}})}_setAttr(t){if(t.startsWith("data-v-"))return;const n=this.hasAttribute(t);let i=n?this.getAttribute(t):Xa;const s=ce(t);n&&this._numberProps&&this._numberProps[s]&&(i=gs(i)),this._setProp(s,i,!1,!0)}_getProp(t){return this._props[t]}_setProp(t,n,i=!0,s=!1){if(n!==this._props[t]&&(this._dirty=!0,n===Xa?delete this._props[t]:(this._props[t]=n,t==="key"&&this._app&&(this._app._ceVNode.key=n)),s&&this._instance&&this._update(),i)){const r=this._ob;r&&(this._processMutations(r.takeRecords()),r.disconnect()),n===!0?this.setAttribute(Ge(t),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Ge(t),n+""):n||this.removeAttribute(Ge(t)),r&&r.observe(this,{attributes:!0})}}_update(){const t=this._createVNode();this._app&&(t.appContext=this._app._context),Ld(t,this._root)}_createVNode(){const t={};this.shadowRoot||(t.onVnodeMounted=t.onVnodeUpdated=this._renderSlots.bind(this));const n=be(this._def,Z(t,this._props));return this._instance||(n.ce=i=>{this._instance=i,i.ce=this,i.isCE=!0;const s=(r,o)=>{this.dispatchEvent(new CustomEvent(r,Gs(o[0])?Z({detail:o},o[0]):{detail:o}))};i.emit=(r,...o)=>{s(r,o),Ge(r)!==r&&s(Ge(r),o)},this._setParent()}),n}_applyStyles(t,n,i){if(!t)return;if(n){if(n===this._def||this._styleChildren.has(n))return;this._styleChildren.add(n)}const s=this._nonce,r=this.shadowRoot,o=i?this._getStyleAnchor(i)||this._getStyleAnchor(this._def):this._getRootStyleInsertionAnchor(r);let a=null;for(let l=t.length-1;l>=0;l--){const d=document.createElement("style");s&&d.setAttribute("nonce",s),d.textContent=t[l],r.insertBefore(d,a||o),a=d,l===0&&(i||this._styleAnchors.set(this._def,d),n&&this._styleAnchors.set(n,d))}}_getStyleAnchor(t){if(!t)return null;const n=this._styleAnchors.get(t);return n&&n.parentNode===this.shadowRoot?n:(n&&this._styleAnchors.delete(t),null)}_getRootStyleInsertionAnchor(t){for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];if(!(i instanceof HTMLStyleElement))return i}return null}_parseSlots(){const t=this._slots={};let n;for(;n=this.firstChild;){const i=n.nodeType===1&&n.getAttribute("slot")||"default";(t[i]||(t[i]=[])).push(n),this.removeChild(n)}}_renderSlots(){const t=this._getSlots(),n=this._instance.type.__scopeId;for(let i=0;i<t.length;i++){const s=t[i],r=s.getAttribute("name")||"default",o=this._slots[r],a=s.parentNode;if(o)for(const l of o){if(n&&l.nodeType===1){const d=n+"-s",c=document.createTreeWalker(l,1);l.setAttribute(d,"");let p;for(;p=c.nextNode();)p.setAttribute(d,"")}a.insertBefore(l,s)}else for(;s.firstChild;)a.insertBefore(s.firstChild,s);a.removeChild(s)}}_getSlots(){const t=[this];this._teleportTargets&&t.push(...this._teleportTargets);const n=new Set;for(const i of t){const s=i.querySelectorAll("slot");for(let r=0;r<s.length;r++)n.add(s[r])}return Array.from(n)}_injectChildStyle(t,n){this._applyStyles(t.styles,t,n)}_beginPatch(){this._patching=!0,this._dirty=!1}_endPatch(){this._patching=!1,this._dirty&&this._instance&&this._update()}_hasShadowRoot(){return this._def.shadowRoot!==!1}_removeChildStyle(t){}}function Ed(e){const t=Be(),n=t&&t.ce;return n||null}function Sg(){const e=Ed();return e&&e.shadowRoot}function _g(e="$style"){{const t=Be();if(!t)return te;const n=t.type.__cssModules;if(!n)return te;const i=n[e];return i||te}}const Cd=new WeakMap,Ad=new WeakMap,Os=Symbol("_moveCb"),Za=Symbol("_enterCb"),to=new WeakMap,Tg=e=>(delete e.props.mode,e),Eg=Tg({name:"TransitionGroup",props:Z({},xd,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Be(),i=So();let s,r,o,a;const l=()=>(a===void 0&&(a=s.length>0&&Og(s[0].el,n.vnode.el,Qa(e))),a);return ar(()=>{if(to.delete(n),!l()){s=[],o=void 0;return}const d=Qa(e);s.forEach(Ag);const c=o&&Dg(o,n.vnode.el);o=void 0,s.forEach(m=>Ig(m,c));const p=s.filter(Pg);Qr(n.vnode.el),p.forEach(m=>{const h=m.el,v=h.style;wt(h,d),v.transform=v.webkitTransform=v.transitionDuration="";const x=h[Os]=I=>{I&&I.target!==h||(!I||I.propertyName.endsWith("transform"))&&(h.removeEventListener("transitionend",x),h[Os]=null,Gt(h,d))};h.addEventListener("transitionend",x)}),s=[]}),()=>{const d=ie(e),c=yd(d);let p=d.tag||Ce;if(s=[],a=void 0,r)for(let m=0;m<r.length;m++){const h=r[m];h.el&&h.el instanceof Element&&!h.el[Vo]&&(s.push(h),ht(h,$n(h,c,i,n)),Cd.set(h,fr(h.el)))}r=t.default?or(t.default()):[];for(let m=0;m<r.length;m++){const h=r[m];h.key!=null&&ht(h,$n(h,c,i,n))}return s.length&&(o=Rg(n),to.set(n,l)),be(p,null,r)}}}),Cg=Eg;function Ag(e){const t=e.el;t[Os]&&t[Os](),t[Za]&&t[Za]()}function Qa(e){return e.moveClass||`${e.name||"v"}-move`}function Ig(e,t){Ad.set(e,fr(e.el,t))}function Pg(e){const t=Cd.get(e),n=Ad.get(e),i=t.left-n.left,s=t.top-n.top;if(i||s){const r=e.el,o=r.style,a=r.getBoundingClientRect();let l=1,d=1;return r.offsetWidth&&(l=a.width/r.offsetWidth),r.offsetHeight&&(d=a.height/r.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(d)||d===0)&&(d=1),Math.abs(l-1)<.01&&(l=1),Math.abs(d-1)<.01&&(d=1),o.transform=o.webkitTransform=`translate(${i/l}px,${s/d}px)`,o.transitionDuration="0s",e}}function fr(e,t){const n=e.getBoundingClientRect();return{left:n.left-(t?t.left:0),top:n.top-(t?t.top:0)}}function Rg(e){let t;for(let n=e.parent;n;n=n.parent){const i=to.get(n);if(i){const s=Ng(n.vnode.el,e.vnode.el);s&&(t||(t=[])).push(Z(fr(s),{item:s,willMove:i}))}}return t}function Ng(e,t){const n=e.nodeType===1?e:e.parentNode;for(;t&&t.parentNode!==n;)t=t.parentNode;if(t&&t.nodeType===1)return t}function Dg(e,t){const n=e.find(i=>i.willMove()&&i.item.contains(t));return n&&fr(n.item,n)}function Og(e,t,n){const i=e.cloneNode(),s=e[Vn];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(i);const{hasTransform:o}=vd(i);return r.removeChild(i),o}const sn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return H(t)?n=>Dn(t,n):t};function Mg(e){e.target.composing=!0}function el(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Qe=Symbol("_assign"),ns=Symbol("_initialValue");function Rr(e,t,n){return t&&(e=e.trim()),n&&(e=Di(e)),e}const Ms={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e.parentNode&&(e.type==="text"?e[ns]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[ns]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Qe]=sn(s);const r=i||s.props&&s.props.type==="number";Mt(e,t?"change":"input",o=>{o.target.composing||e[Qe](Rr(e.value,n,r))}),(n||r)&&Mt(e,"change",()=>{e.value=Rr(e.value,n,r)}),t||(Mt(e,"compositionstart",Mg),Mt(e,"compositionend",el),Mt(e,"change",el))},mounted(e,{value:t,modifiers:{trim:n,number:i}}){const s=t??"",r=e[ns];delete e[ns],r!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==r?e[Qe](Rr(e.value,n,i)):e.value=s},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(e[Qe]=sn(o),e.composing)return;const a=(r||e.type==="number")&&!/^0\d/.test(e.value)?Di(e.value):e.value,l=t??"";if(a===l)return;const d=e.getRootNode();(d instanceof Document||d instanceof ShadowRoot)&&d.activeElement===e&&e.type!=="range"&&(i&&t===n||s&&e.value.trim()===l)||(e.value=l)}},Ho={deep:!0,created(e,t,n){e[Qe]=sn(n),Mt(e,"change",()=>{const i=e._modelValue,s=Hn(e),r=e.checked,o=e[Qe];if(H(i)){const a=Xs(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const d=[...i];d.splice(a,1),o(d)}}else if(St(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Pd(e,r))})},mounted:tl,beforeUpdate(e,t,n){e[Qe]=sn(n),tl(e,t,n)}};function tl(e,{value:t,oldValue:n},i){e._modelValue=t;let s;if(H(t))s=Xs(t,i.props.value)>-1;else if(St(t))s=t.has(i.props.value);else{if(t===n)return;s=dt(t,Pd(e,!0))}e.checked!==s&&(e.checked=s)}const jo={created(e,{value:t},n){e.checked=dt(t,n.props.value),e[Qe]=sn(n),Mt(e,"change",()=>{e[Qe](Hn(e))})},beforeUpdate(e,{value:t,oldValue:n},i){e[Qe]=sn(i),t!==n&&(e.checked=dt(t,i.props.value))}},Id={deep:!0,created(e,{value:t,modifiers:{number:n}},i){e._modelValue=t,Mt(e,"change",()=>{const s=Array.prototype.filter.call(e.options,l=>l.selected).map(l=>n?Di(Hn(l)):Hn(l)),r=e.multiple,o=r?St(e._modelValue)?new Set(s):s:s[0],a=e._pendingValue=[r,r?H(o)?s.slice():s:o];try{e[Qe](o)}finally{jt(()=>{e._pendingValue===a&&(e._pendingValue=void 0)})}}),e[Qe]=sn(i)},mounted(e,{value:t,modifiers:{number:n}}){nl(e,t,n)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[Qe]=sn(n)},updated(e,{value:t,modifiers:{number:n}}){const i=e._pendingValue;e._pendingValue=void 0,(!i||i[0]!==e.multiple||!Lg(t,i[1],i[0]))&&nl(e,t,n)}};function Lg(e,t,n){if(!n||H(e))return dt(e,t);if(St(e)){if(e.size!==t.length)return!1;for(const i of t)if(!e.has(i))return!1;return!0}return!1}function nl(e,t,n=!1){const i=e.multiple,s=H(t);if(!(i&&!s&&!St(t))){for(let r=0,o=e.options.length;r<o;r++){const a=e.options[r],l=Hn(a);if(i)if(s){const d=typeof l;d==="string"||d==="number"?a.selected=t.some(c=>String(c)===String(l)):a.selected=Xs(t,l)>-1}else a.selected=t.has(l)||n&&typeof l=="string"&&t.has(Di(l));else if(dt(Hn(a),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!i&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Hn(e){return"_value"in e?e._value:e.value}function Pd(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Rd={created(e,t,n){is(e,t,n,null,"created")},mounted(e,t,n){is(e,t,n,null,"mounted")},beforeUpdate(e,t,n,i){is(e,t,n,i,"beforeUpdate")},updated(e,t,n,i){is(e,t,n,i,"updated")}};function Nd(e,t){switch(e){case"SELECT":return Id;case"TEXTAREA":return Ms;default:switch(t){case"checkbox":return Ho;case"radio":return jo;default:return Ms}}}function is(e,t,n,i,s){const o=Nd(e.tagName,n.props&&n.props.type)[s];o&&o(e,t,n,i)}function Fg(){Ms.getSSRProps=({value:e})=>({value:e}),jo.getSSRProps=({value:e},t)=>{if(t.props&&dt(t.props.value,e))return{checked:!0}},Ho.getSSRProps=({value:e},t)=>{if(H(e)){if(t.props&&Xs(e,t.props.value)>-1)return{checked:!0}}else if(St(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},Rd.getSSRProps=(e,t)=>{if(typeof t.type!="string")return;const n=Nd(t.type.toUpperCase(),t.props&&t.props.type);if(n.getSSRProps)return n.getSSRProps(e,t)}}const zg=["ctrl","shift","alt","meta"],$g={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>zg.some(n=>e[`${n}Key`]&&!t.includes(n))},Vg=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=((s,...r)=>{for(let o=0;o<t.length;o++){const a=$g[t[o]];if(a&&a(s,t))return}return e(s,...r)}))},Hg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},jg=(e,t)=>{const n=e._withKeys||(e._withKeys={}),i=t.join(".");return n[i]||(n[i]=(s=>{if(!("key"in s))return;const r=Ge(s.key);if(t.some(o=>o===r||Hg[o]===r))return e(s)}))},Dd=Z({patchProp:_d},bd);let ui,il=!1;function Od(){return ui||(ui=Kc(Dd))}function Md(){return ui=il?ui:Gc(Dd),il=!0,ui}const Ld=((...e)=>{Od().render(...e)}),Bg=((...e)=>{Md().hydrate(...e)}),Ls=((...e)=>{const t=Od().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=$d(i);if(!s)return;const r=t._component;!Y(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,zd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t}),Fd=((...e)=>{const t=Md().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=$d(i);if(s)return n(s,!0,zd(s))},t});function zd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function $d(e){return J(e)?document.querySelector(e):e}let sl=!1;const Wg=()=>{sl||(sl=!0,Fg(),rg())},Ug=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:vc,BaseTransitionPropsValidators:_o,Comment:xe,DeprecationTypes:Xh,EffectScope:bo,ErrorCodes:qu,ErrorTypeStrings:Wh,Fragment:Ce,KeepAlive:Of,ReactiveEffect:gi,Static:Qt,Suspense:Th,Teleport:pf,Text:Zt,TrackOpTypes:Hu,Transition:tg,TransitionGroup:Cg,TriggerOpTypes:ju,VueElement:ur,assertNumber:Gu,callWithAsyncErrorHandling:tt,callWithErrorHandling:Gn,camelize:ce,capitalize:vn,cloneVNode:Et,compatUtils:Jh,computed:ud,createApp:Ls,createBlock:As,createCommentVNode:nd,createElementBlock:Rh,createElementVNode:zo,createHydrationRenderer:Gc,createPropsRestProxy:nh,createRenderer:Kc,createSSRApp:Fd,createSlots:Hf,createStaticVNode:Oh,createTextVNode:$o,createVNode:be,customRef:rc,defineAsyncComponent:Nf,defineComponent:To,defineCustomElement:Td,defineEmits:Kf,defineExpose:Gf,defineModel:Jf,defineOptions:qf,defineProps:Uf,defineSSRCustomElement:vg,defineSlots:Yf,devtools:Uh,effect:pu,effectScope:cu,getCurrentInstance:Be,getCurrentScope:Fl,getCurrentWatcher:Bu,getTransitionRawChildren:or,guardReactiveProps:td,h:fd,handleError:kn,hasInjectionContext:sf,hydrate:Bg,hydrateOnIdle:Ef,hydrateOnInteraction:Pf,hydrateOnMediaQuery:If,hydrateOnVisible:Af,initCustomFormatter:Hh,initDirectivesForSSR:Wg,inject:di,isMemoSame:hd,isProxy:Li,isReactive:kt,isReadonly:mt,isRef:Te,isRuntimeOnly:zh,isShallow:qe,isVNode:Ht,markRaw:nc,mergeDefaults:eh,mergeModels:th,mergeProps:id,nextTick:jt,nodeOps:bd,normalizeClass:Mi,normalizeProps:Yp,normalizeStyle:Oi,onActivated:Sc,onBeforeMount:Ec,onBeforeUnmount:lr,onBeforeUpdate:Ao,onDeactivated:_c,onErrorCaptured:Pc,onMounted:Vi,onRenderTracked:Ic,onRenderTriggered:Ac,onScopeDispose:zl,onServerPrefetch:Cc,onUnmounted:Io,onUpdated:ar,onWatcherCleanup:ac,openBlock:_i,patchProp:_d,popScopeId:ef,provide:hc,proxyRefs:vo,pushScopeId:Qu,queuePostFlushCb:Lt,reactive:tr,readonly:bs,ref:ci,registerRuntimeCompiler:ld,render:Ld,renderList:Vf,renderSlot:jf,resolveComponent:Ff,resolveDirective:$f,resolveDynamicComponent:zf,resolveFilter:Yh,resolveTransitionHooks:$n,setBlockTracking:Ti,setDevtoolsHook:Kh,setTransitionHooks:ht,shallowReactive:tc,shallowReadonly:Iu,shallowRef:ic,ssrContextKey:gc,ssrUtils:qh,stop:uu,toDisplayString:Ml,toHandlerKey:Nn,toHandlers:Bf,toRaw:ie,toRef:zu,toRefs:Mu,toValue:Nu,transformVNodeArgs:Nh,triggerRef:Ru,unref:Fi,useAttrs:Qf,useCssModule:_g,useCssVars:og,useHost:Ed,useId:ff,useModel:ph,useSSRContext:mc,useShadowRoot:Sg,useSlots:Zf,useTemplateRef:hf,useTransitionState:So,vModelCheckbox:Ho,vModelDynamic:Rd,vModelRadio:jo,vModelSelect:Id,vModelText:Ms,vShow:kd,version:gd,warn:Bh,watch:On,watchEffect:rf,watchPostEffect:of,watchSyncEffect:bc,withAsyncContext:ih,withCtx:ko,withDefaults:Xf,withDirectives:nf,withKeys:jg,withMemo:jh,withModifiers:Vg,withScopeId:tf},Symbol.toStringTag,{value:"Module"}));const Ci=Symbol(""),fi=Symbol(""),Bo=Symbol(""),Fs=Symbol(""),Vd=Symbol(""),xn=Symbol(""),Hd=Symbol(""),jd=Symbol(""),Wo=Symbol(""),Uo=Symbol(""),ji=Symbol(""),Ko=Symbol(""),Bd=Symbol(""),Go=Symbol(""),qo=Symbol(""),Yo=Symbol(""),Jo=Symbol(""),Xo=Symbol(""),Zo=Symbol(""),Wd=Symbol(""),Ud=Symbol(""),hr=Symbol(""),zs=Symbol(""),Qo=Symbol(""),ea=Symbol(""),Ai=Symbol(""),Bi=Symbol(""),ta=Symbol(""),no=Symbol(""),Kg=Symbol(""),io=Symbol(""),$s=Symbol(""),Gg=Symbol(""),qg=Symbol(""),na=Symbol(""),Yg=Symbol(""),Jg=Symbol(""),ia=Symbol(""),Kd=Symbol(""),jn={[Ci]:"Fragment",[fi]:"Teleport",[Bo]:"Suspense",[Fs]:"KeepAlive",[Vd]:"BaseTransition",[xn]:"openBlock",[Hd]:"createBlock",[jd]:"createElementBlock",[Wo]:"createVNode",[Uo]:"createElementVNode",[ji]:"createCommentVNode",[Ko]:"createTextVNode",[Bd]:"createStaticVNode",[Go]:"resolveComponent",[qo]:"resolveDynamicComponent",[Yo]:"resolveDirective",[Jo]:"resolveFilter",[Xo]:"withDirectives",[Zo]:"renderList",[Wd]:"renderSlot",[Ud]:"createSlots",[hr]:"toDisplayString",[zs]:"mergeProps",[Qo]:"normalizeClass",[ea]:"normalizeStyle",[Ai]:"normalizeProps",[Bi]:"guardReactiveProps",[ta]:"toHandlers",[no]:"camelize",[Kg]:"capitalize",[io]:"toHandlerKey",[$s]:"setBlockTracking",[Gg]:"pushScopeId",[qg]:"popScopeId",[na]:"withCtx",[Yg]:"unref",[Jg]:"isRef",[ia]:"withMemo",[Kd]:"isMemoSame"};function Xg(e){Object.getOwnPropertySymbols(e).forEach(t=>{jn[t]=e[t]})}const it={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function Zg(e,t=""){return{type:0,source:t,children:e,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:[],temps:0,codegenNode:void 0,loc:it}}function Ii(e,t,n,i,s,r,o,a=!1,l=!1,d=!1,c=it){return e&&(a?(e.helper(xn),e.helper(Un(e.inSSR,d))):e.helper(Wn(e.inSSR,d)),o&&e.helper(Xo)),{type:13,tag:t,props:n,children:i,patchFlag:s,dynamicProps:r,directives:o,isBlock:a,disableTracking:l,isComponent:d,loc:c}}function gn(e,t=it){return{type:17,loc:t,elements:e}}function ct(e,t=it){return{type:15,loc:t,properties:e}}function _e(e,t){return{type:16,loc:it,key:J(e)?ee(e,!0):e,value:t}}function ee(e,t=!1,n=it,i=0){return{type:4,loc:n,content:e,isStatic:t,constType:t?3:i}}function gt(e,t=it){return{type:8,loc:t,children:e}}function Ae(e,t=[],n=it){return{type:14,loc:n,callee:e,arguments:t}}function Bn(e,t=void 0,n=!1,i=!1,s=it){return{type:18,params:e,returns:t,newline:n,isSlot:i,loc:s}}function so(e,t,n,i=!0){return{type:19,test:e,consequent:t,alternate:n,newline:i,loc:it}}function Qg(e,t,n=!1,i=!1){return{type:20,index:e,value:t,needPauseTracking:n,inVOnce:i,needArraySpread:!1,loc:it}}function em(e){return{type:21,body:e,loc:it}}function Wn(e,t){return e||t?Wo:Uo}function Un(e,t){return e||t?Hd:jd}function sa(e,{helper:t,removeHelper:n,inSSR:i}){e.isBlock||(e.isBlock=!0,n(Wn(i,e.isComponent)),t(xn),t(Un(i,e.isComponent)))}const rl=new Uint8Array([123,123]),ol=new Uint8Array([125,125]);function al(e){return e>=97&&e<=122||e>=65&&e<=90}function Ze(e){return e===32||e===10||e===9||e===12||e===13}function Ut(e){return e===47||e===62||Ze(e)}function Vs(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}const Oe={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])};class tm{constructor(t,n){this.stack=t,this.cbs=n,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=rl,this.delimiterClose=ol,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return this.mode===2&&this.stack.length===0}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=rl,this.delimiterClose=ol}getPos(t){let n=1,i=t+1;const s=this.newlines.length;let r=-1;if(s>100){let o=-1,a=s;for(;o+1<a;){const l=o+a>>>1;this.newlines[l]<t?o=l:a=l}r=o}else for(let o=s-1;o>=0;o--)if(t>this.newlines[o]){r=o;break}return r>=0&&(n=r+2,i=t-this.newlines[r]),{column:i,line:n,offset:t}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(t){t===60?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):!this.inVPre&&t===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(t))}stateInterpolationOpen(t){if(t===this.delimiterOpen[this.delimiterIndex])if(this.delimiterIndex===this.delimiterOpen.length-1){const n=this.index+1-this.delimiterOpen.length;n>this.sectionStart&&this.cbs.ontext(this.sectionStart,n),this.state=3,this.sectionStart=n}else this.delimiterIndex++;else this.inRCDATA?(this.state=32,this.stateInRCDATA(t)):(this.state=1,this.stateText(t))}stateInterpolation(t){t===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(t))}stateInterpolationClose(t){t===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(t))}stateSpecialStartSequence(t){const n=this.sequenceIndex===this.currentSequence.length;if(!(n?Ut(t):(t|32)===this.currentSequence[this.sequenceIndex]))this.inRCDATA=!1;else if(!n){this.sequenceIndex++;return}this.sequenceIndex=0,this.state=6,this.stateInTagName(t)}stateInRCDATA(t){if(this.sequenceIndex===this.currentSequence.length){if(t===62||Ze(t)){const n=this.index-this.currentSequence.length;if(this.sectionStart<n){const i=this.index;this.index=n,this.cbs.ontext(this.sectionStart,n),this.index=i}this.sectionStart=n+2,this.stateInClosingTagName(t),this.inRCDATA=!1;return}this.sequenceIndex=0}(t|32)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===Oe.TitleEnd||this.currentSequence===Oe.TextareaEnd&&!this.inSFCRoot?!this.inVPre&&t===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(t)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=+(t===60)}stateCDATASequence(t){t===Oe.Cdata[this.sequenceIndex]?++this.sequenceIndex===Oe.Cdata.length&&(this.state=28,this.currentSequence=Oe.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(t))}fastForwardTo(t){for(;++this.index<this.buffer.length;){const n=this.buffer.charCodeAt(this.index);if(n===10&&this.newlines.push(this.index),n===t)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(t){t===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===Oe.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):t!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(t,n){this.enterRCDATA(t,n),this.state=31}enterRCDATA(t,n){this.inRCDATA=!0,this.currentSequence=t,this.sequenceIndex=n}stateBeforeTagName(t){t===33?(this.state=22,this.sectionStart=this.index+1):t===63?(this.state=24,this.sectionStart=this.index+1):al(t)?(this.sectionStart=this.index,this.mode===0?this.state=6:this.inSFCRoot?this.state=34:this.inXML?this.state=6:t===116?this.state=30:this.state=t===115?29:6):t===47?this.state=8:(this.state=1,this.stateText(t))}stateInTagName(t){Ut(t)&&this.handleTagName(t)}stateInSFCRootTagName(t){if(Ut(t)){const n=this.buffer.slice(this.sectionStart,this.index);n!=="template"&&this.enterRCDATA(Vs("</"+n),0),this.handleTagName(t)}}handleTagName(t){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(t)}stateBeforeClosingTagName(t){Ze(t)||(t===62?(this.state=1,this.sectionStart=this.index+1):(this.state=al(t)?9:27,this.sectionStart=this.index))}stateInClosingTagName(t){(t===62||Ze(t))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(t))}stateAfterClosingTagName(t){t===62&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(t){t===62?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):t===47?this.state=7:t===60&&this.peek()===47?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):Ze(t)||this.handleAttrStart(t)}handleAttrStart(t){t===118&&this.peek()===45?(this.state=13,this.sectionStart=this.index):t===46||t===58||t===64||t===35?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(t){t===62?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):Ze(t)||(this.state=11,this.stateBeforeAttrName(t))}stateInAttrName(t){(t===61||Ut(t))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(t))}stateInDirName(t){t===61||Ut(t)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===58?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):t===46&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(t){t===61||Ut(t)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===91?this.state=15:t===46&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(t){t===93?this.state=14:(t===61||Ut(t))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(t))}stateInDirModifier(t){t===61||Ut(t)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===46&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(t){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(t)}stateAfterAttrName(t){t===61?this.state=18:t===47||t===62?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(t)):Ze(t)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(t))}stateBeforeAttrValue(t){t===34?(this.state=19,this.sectionStart=this.index+1):t===39?(this.state=20,this.sectionStart=this.index+1):Ze(t)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(t))}handleInAttrValue(t,n){(t===n||this.fastForwardTo(n))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(n===34?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(t){this.handleInAttrValue(t,34)}stateInAttrValueSingleQuotes(t){this.handleInAttrValue(t,39)}stateInAttrValueNoQuotes(t){Ze(t)||t===62?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(t)):(t===39||t===60||t===61||t===96)&&this.cbs.onerr(18,this.index)}stateBeforeDeclaration(t){t===91?(this.state=26,this.sequenceIndex=0):this.state=t===45?25:23}stateInDeclaration(t){(t===62||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(t){(t===62||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(t){t===45?(this.state=28,this.currentSequence=Oe.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(t){(t===62||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(t){t===Oe.ScriptEnd[3]?this.startSpecial(Oe.ScriptEnd,4):t===Oe.StyleEnd[3]?this.startSpecial(Oe.StyleEnd,4):(this.state=6,this.stateInTagName(t))}stateBeforeSpecialT(t){t===Oe.TitleEnd[3]?this.startSpecial(Oe.TitleEnd,4):t===Oe.TextareaEnd[3]?this.startSpecial(Oe.TextareaEnd,4):(this.state=6,this.stateInTagName(t))}startEntity(){}stateInEntity(){}parse(t){for(this.buffer=t;this.index<this.buffer.length;){const n=this.buffer.charCodeAt(this.index);switch(n===10&&this.state!==33&&this.newlines.push(this.index),this.state){case 1:{this.stateText(n);break}case 2:{this.stateInterpolationOpen(n);break}case 3:{this.stateInterpolation(n);break}case 4:{this.stateInterpolationClose(n);break}case 31:{this.stateSpecialStartSequence(n);break}case 32:{this.stateInRCDATA(n);break}case 26:{this.stateCDATASequence(n);break}case 19:{this.stateInAttrValueDoubleQuotes(n);break}case 12:{this.stateInAttrName(n);break}case 13:{this.stateInDirName(n);break}case 14:{this.stateInDirArg(n);break}case 15:{this.stateInDynamicDirArg(n);break}case 16:{this.stateInDirModifier(n);break}case 28:{this.stateInCommentLike(n);break}case 27:{this.stateInSpecialComment(n);break}case 11:{this.stateBeforeAttrName(n);break}case 6:{this.stateInTagName(n);break}case 34:{this.stateInSFCRootTagName(n);break}case 9:{this.stateInClosingTagName(n);break}case 5:{this.stateBeforeTagName(n);break}case 17:{this.stateAfterAttrName(n);break}case 20:{this.stateInAttrValueSingleQuotes(n);break}case 18:{this.stateBeforeAttrValue(n);break}case 8:{this.stateBeforeClosingTagName(n);break}case 10:{this.stateAfterClosingTagName(n);break}case 29:{this.stateBeforeSpecialS(n);break}case 30:{this.stateBeforeSpecialT(n);break}case 21:{this.stateInAttrValueNoQuotes(n);break}case 7:{this.stateInSelfClosingTag(n);break}case 23:{this.stateInDeclaration(n);break}case 22:{this.stateBeforeDeclaration(n);break}case 25:{this.stateBeforeComment(n);break}case 24:{this.stateInProcessingInstruction(n);break}case 33:{this.stateInEntity();break}}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(this.state===1||this.state===32&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===19||this.state===20||this.state===21)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){const t=this.buffer.length;this.sectionStart>=t||(this.state===28?this.currentSequence===Oe.CdataEnd?this.cbs.oncdata(this.sectionStart,t):this.cbs.oncomment(this.sectionStart,t):this.state===6||this.state===11||this.state===18||this.state===17||this.state===12||this.state===13||this.state===14||this.state===15||this.state===16||this.state===20||this.state===19||this.state===21||this.state===9||this.cbs.ontext(this.sectionStart,t))}emitCodePoint(t,n){}}function ll(e,{compatConfig:t}){const n=t&&t[e];return e==="MODE"?n||3:n}function mn(e,t){const n=ll("MODE",t),i=ll(e,t);return n===3?i===!0:i!==!1}function Pi(e,t,n,...i){return mn(e,t)}function ra(e){throw e}function Gd(e){}function he(e,t,n,i){const s=`https://vuejs.org/error-reference/#compiler-${e}`,r=new SyntaxError(String(s));return r.code=e,r.loc=t,r}const je=e=>e.type===4&&e.isStatic;function qd(e){switch(e){case"Teleport":case"teleport":return fi;case"Suspense":case"suspense":return Bo;case"KeepAlive":case"keep-alive":return Fs;case"BaseTransition":case"base-transition":return Vd}}const nm=/^$|^\d|[^\$\w\xA0-\uFFFF]/,oa=e=>!nm.test(e),Yd=/[A-Za-z_$\xA0-\uFFFF]/,im=/[\.\?\w$\xA0-\uFFFF]/,sm=/\s+[.[]\s*|\s*[.[]\s+/g,Jd=e=>e.type===4?e.content:e.loc.source,rm=e=>{const t=Jd(e).trim().replace(sm,a=>a.trim());let n=0,i=[],s=0,r=0,o=null;for(let a=0;a<t.length;a++){const l=t.charAt(a);switch(n){case 0:if(l==="[")i.push(n),n=1,s++;else if(l==="(")i.push(n),n=2,r++;else if(!(a===0?Yd:im).test(l))return!1;break;case 1:l==="'"||l==='"'||l==="`"?(i.push(n),n=3,o=l):l==="["?s++:l==="]"&&(--s||(n=i.pop()));break;case 2:if(l==="'"||l==='"'||l==="`")i.push(n),n=3,o=l;else if(l==="(")r++;else if(l===")"){if(a===t.length-1)return!1;--r||(n=i.pop())}break;case 3:l===o&&(n=i.pop(),o=null);break}}return!s&&!r},Xd=rm,om=/^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/,am=e=>om.test(Jd(e)),lm=am;function at(e,t,n=!1){for(let i=0;i<e.props.length;i++){const s=e.props[i];if(s.type===7&&(n||s.exp)&&(J(t)?s.name===t:t.test(s.name)))return s}}function gr(e,t,n=!1,i=!1){for(let s=0;s<e.props.length;s++){const r=e.props[s];if(r.type===6){if(n)continue;if(r.name===t&&(r.value||i))return r}else if(r.name==="bind"&&(r.exp||i)&&zn(r.arg,t))return r}}function zn(e,t){return!!(e&&je(e)&&e.content===t)}function cm(e){return e.props.some(t=>t.type===7&&t.name==="bind"&&(!t.arg||t.arg.type!==4||!t.arg.isStatic))}function Nr(e){return e.type===5||e.type===2}function cl(e){return e.type===7&&e.name==="pre"}function dm(e){return e.type===7&&e.name==="slot"}function Hs(e){return e.type===1&&e.tagType===3}function js(e){return e.type===1&&e.tagType===2}const pm=new Set([Ai,Bi]);function aa(e,t=[]){if(e&&!J(e)&&e.type===14){const n=e.callee;if(!J(n)&&pm.has(n))return aa(e.arguments[0],t.concat(e))}return[e,t]}function Bs(e,t,n){if(e.type!==13&&um(e,t))return;let i,s=e.type===13?e.props:e.arguments[2],r=[],o;if(s&&!J(s)&&s.type===14){const a=aa(s);s=a[0],r=a[1],o=r[r.length-1]}if(s==null||J(s))i=ct([t]);else if(s.type===14){const a=s.arguments[0];!J(a)&&a.type===15?ro(t,a)||a.properties.unshift(t):s.callee===ta?i=Ae(n.helper(zs),[ct([t]),s]):s.arguments.unshift(ct([t])),!i&&(i=s)}else s.type===15?(ro(t,s)||s.properties.unshift(t),i=s):(i=Ae(n.helper(zs),[ct([t]),s]),o&&o.callee===Bi&&(o=r[r.length-2]));e.type===13?o?o.arguments[0]=i:e.props=i:o?o.arguments[0]=i:e.arguments[2]=i}function um(e,t){var n,i,s;if(t.key.type!==4||t.key.content!=="key")return!1;const r=e.arguments[2];if(r&&!J(r)){const[o]=aa(r);if(o&&!J(o)&&o.type===15&&ro(t,o))return!0}return(n=e.arguments)[2]||(n[2]="{}"),(i=e.arguments)[3]||(i[3]="undefined"),(s=e.arguments)[4]||(s[4]="undefined"),e.arguments[5]=t.value,!0}function ro(e,t){let n=!1;if(e.key.type===4){const i=e.key.content;n=t.properties.some(s=>s.key.type===4&&s.key.content===i)}return n}function Ri(e,t){return`_${t}_${e.replace(/[^\w]/g,(n,i)=>n==="-"?"_":e.charCodeAt(i).toString())}`}function fm(e){return e.type===14&&e.callee===ia?e.arguments[1].returns:e}const hm=/([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;function Zd(e){for(let t=0;t<e.length;t++)if(!Ze(e.charCodeAt(t)))return!1;return!0}function la(e){return e.type===2&&Zd(e.content)||e.type===12&&la(e.content)}function ca(e){return e.type===3||la(e)}const Qd={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:Pn,isPreTag:Pn,isIgnoreNewlineTag:Pn,isCustomElement:Pn,onError:ra,onWarn:Gd,comments:!1,prefixIdentifiers:!1};let oe=Qd,Ni=null,Vt="",Me=null,ne=null,We="",Pt=-1,cn=-1,da=0,Jt=!1,oo=null;const fe=[],we=new tm(fe,{onerr:It,ontext(e,t){ss(Pe(e,t),e,t)},ontextentity(e,t,n){ss(e,t,n)},oninterpolation(e,t){if(Jt)return ss(Pe(e,t),e,t);let n=e+we.delimiterOpen.length,i=t-we.delimiterClose.length;for(;Ze(Vt.charCodeAt(n));)n++;for(;Ze(Vt.charCodeAt(i-1));)i--;let s=Pe(n,i);s.includes("&")&&(s=oe.decodeEntities(s,!1)),ao({type:5,content:us(s,!1,ke(n,i)),loc:ke(e,t)})},onopentagname(e,t){const n=Pe(e,t);Me={type:1,tag:n,ns:oe.getNamespace(n,fe[0],oe.ns),tagType:0,props:[],children:[],loc:ke(e-1,t),codegenNode:void 0}},onopentagend(e){pl(e)},onclosetag(e,t){const n=Pe(e,t);if(!oe.isVoidTag(n)){let i=!1;for(let s=0;s<fe.length;s++)if(fe[s].tag.toLowerCase()===n.toLowerCase()){i=!0,s>0&&It(24,fe[0].loc.start.offset);for(let o=0;o<=s;o++){const a=fe.shift();ps(a,t,o<s)}break}i||It(23,ep(e,60))}},onselfclosingtag(e){const t=Me.tag;Me.isSelfClosing=!0,pl(e),fe[0]&&fe[0].tag===t&&ps(fe.shift(),e)},onattribname(e,t){ne={type:6,name:Pe(e,t),nameLoc:ke(e,t),value:void 0,loc:ke(e)}},ondirname(e,t){const n=Pe(e,t),i=n==="."||n===":"?"bind":n==="@"?"on":n==="#"?"slot":n.slice(2);if(!Jt&&i===""&&It(26,e),Jt||i==="")ne={type:6,name:n,nameLoc:ke(e,t),value:void 0,loc:ke(e)};else if(ne={type:7,name:i,rawName:n,exp:void 0,arg:void 0,modifiers:n==="."?[ee("prop")]:[],loc:ke(e)},i==="pre"){Jt=we.inVPre=!0,oo=Me;const s=Me.props;for(let r=0;r<s.length;r++)s[r].type===7&&(s[r]=_m(s[r]))}},ondirarg(e,t){if(e===t)return;const n=Pe(e,t);if(Jt&&!cl(ne))ne.name+=n,un(ne.nameLoc,t);else{const i=n[0]!=="[";ne.arg=us(i?n:n.slice(1,-1),i,ke(e,t),i?3:0)}},ondirmodifier(e,t){const n=Pe(e,t);if(Jt&&!cl(ne))ne.name+="."+n,un(ne.nameLoc,t);else if(ne.name==="slot"){const i=ne.arg;i&&(i.content+="."+n,un(i.loc,t))}else{const i=ee(n,!0,ke(e,t));ne.modifiers.push(i)}},onattribdata(e,t){We+=Pe(e,t),Pt<0&&(Pt=e),cn=t},onattribentity(e,t,n){We+=e,Pt<0&&(Pt=t),cn=n},onattribnameend(e){const t=ne.loc.start.offset,n=Pe(t,e);ne.type===7&&(ne.rawName=n),Me.props.some(i=>(i.type===7?i.rawName:i.name)===n)&&It(2,t)},onattribend(e,t){if(Me&&ne){if(un(ne.loc,t),e!==0)if(We.includes("&")&&(We=oe.decodeEntities(We,!0)),ne.type===6)ne.name==="class"&&(We=np(We).trim()),e===1&&!We&&It(13,t),ne.value={type:2,content:We,loc:e===1?ke(Pt,cn):ke(Pt-1,cn+1)},we.inSFCRoot&&Me.tag==="template"&&ne.name==="lang"&&We&&We!=="html"&&we.enterRCDATA(Vs("</template"),0);else{let n=0;ne.exp=us(We,!1,ke(Pt,cn),0,n),ne.name==="for"&&(ne.forParseResult=mm(ne.exp));let i=-1;ne.name==="bind"&&(i=ne.modifiers.findIndex(s=>s.content==="sync"))>-1&&Pi("COMPILER_V_BIND_SYNC",oe,ne.loc,ne.arg.loc.source)&&(ne.name="model",ne.modifiers.splice(i,1))}(ne.type!==7||ne.name!=="pre")&&Me.props.push(ne)}We="",Pt=cn=-1},oncomment(e,t){oe.comments&&ao({type:3,content:Pe(e,t),loc:ke(e-4,t+3)})},onend(){const e=Vt.length;for(let t=0;t<fe.length;t++)ps(fe[t],e-1),It(24,fe[t].loc.start.offset)},oncdata(e,t){(fe[0]?fe[0].ns:oe.ns)!==0?ss(Pe(e,t),e,t):It(1,e-9)},onprocessinginstruction(e){(fe[0]?fe[0].ns:oe.ns)===0&&It(21,e-1)}}),dl=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,gm=/^\(|\)$/g;function mm(e){const t=e.loc,n=e.content,i=n.match(hm);if(!i)return;const[,s,r]=i,o=(p,m,h=!1)=>{const v=t.start.offset+m,x=v+p.length;return us(p,!1,ke(v,x),0,h?1:0)},a={source:o(r.trim(),n.indexOf(r,s.length)),value:void 0,key:void 0,index:void 0,finalized:!1};let l=s.trim().replace(gm,"").trim();const d=s.indexOf(l),c=l.match(dl);if(c){l=l.replace(dl,"").trim();const p=c[1].trim();let m;if(p&&(m=n.indexOf(p,d+l.length),a.key=o(p,m,!0)),c[2]){const h=c[2].trim();h&&(a.index=o(h,n.indexOf(h,a.key?m+p.length:d+l.length),!0))}}return l&&(a.value=o(l,d,!0)),a}function Pe(e,t){return Vt.slice(e,t)}function pl(e){we.inSFCRoot&&(Me.innerLoc=ke(e+1,e+1)),ao(Me);const{tag:t,ns:n}=Me;n===0&&oe.isPreTag(t)&&da++,oe.isVoidTag(t)?ps(Me,e):(fe.unshift(Me),(n===1||n===2)&&(we.inXML=!0)),Me=null}function ss(e,t,n){{const r=fe[0]&&fe[0].tag;r!=="script"&&r!=="style"&&e.includes("&")&&(e=oe.decodeEntities(e,!1))}const i=fe[0]||Ni,s=i.children[i.children.length-1];s&&s.type===2?(s.content+=e,un(s.loc,n)):i.children.push({type:2,content:e,loc:ke(t,n)})}function ps(e,t,n=!1){n?un(e.loc,ep(t,60)):un(e.loc,bm(t,62)+1),we.inSFCRoot&&(e.children.length?e.innerLoc.end=Z({},e.children[e.children.length-1].loc.end):e.innerLoc.end=Z({},e.innerLoc.start),e.innerLoc.source=Pe(e.innerLoc.start.offset,e.innerLoc.end.offset));const{tag:i,ns:s,children:r}=e;if(Jt||(i==="slot"?e.tagType=2:ul(e)?e.tagType=3:xm(e)&&(e.tagType=1)),we.inRCDATA||(e.children=tp(r)),s===0&&oe.isIgnoreNewlineTag(i)){const o=r[0];o&&o.type===2&&(o.content=o.content.replace(/^\r?\n/,""))}s===0&&oe.isPreTag(i)&&da--,oo===e&&(Jt=we.inVPre=!1,oo=null),we.inXML&&(fe[0]?fe[0].ns:oe.ns)===0&&(we.inXML=!1);{const o=e.props;if(!we.inSFCRoot&&mn("COMPILER_NATIVE_TEMPLATE",oe)&&e.tag==="template"&&!ul(e)){const l=fe[0]||Ni,d=l.children.indexOf(e);l.children.splice(d,1,...e.children)}const a=o.find(l=>l.type===6&&l.name==="inline-template");a&&Pi("COMPILER_INLINE_TEMPLATE",oe,a.loc)&&e.children.length&&(a.value={type:2,content:Pe(e.children[0].loc.start.offset,e.children[e.children.length-1].loc.end.offset),loc:a.loc})}}function bm(e,t){let n=e;for(;Vt.charCodeAt(n)!==t&&n<Vt.length-1;)n++;return n}function ep(e,t){let n=e;for(;Vt.charCodeAt(n)!==t&&n>=0;)n--;return n}const wm=new Set(["if","else","else-if","for","slot"]);function ul({tag:e,props:t}){if(e==="template"){for(let n=0;n<t.length;n++)if(t[n].type===7&&wm.has(t[n].name))return!0}return!1}function xm({tag:e,props:t}){if(oe.isCustomElement(e))return!1;if(e==="component"||ym(e.charCodeAt(0))||qd(e)||oe.isBuiltInComponent&&oe.isBuiltInComponent(e)||oe.isNativeTag&&!oe.isNativeTag(e))return!0;for(let n=0;n<t.length;n++){const i=t[n];if(i.type===6){if(i.name==="is"&&i.value){if(i.value.content.startsWith("vue:"))return!0;if(Pi("COMPILER_IS_ON_ELEMENT",oe,i.loc))return!0}}else if(i.name==="bind"&&zn(i.arg,"is")&&Pi("COMPILER_IS_ON_ELEMENT",oe,i.loc))return!0}return!1}function ym(e){return e>64&&e<91}const vm=/\r\n/g;function tp(e){const t=oe.whitespace!=="preserve";let n=!1;for(let i=0;i<e.length;i++){const s=e[i];if(s.type===2)if(da)s.content=s.content.replace(vm,`
`);else if(Zd(s.content)){const r=e[i-1]&&e[i-1].type,o=e[i+1]&&e[i+1].type;!r||!o||t&&(r===3&&(o===3||o===1)||r===1&&(o===3||o===1&&km(s.content)))?(n=!0,e[i]=null):s.content=" "}else t&&(s.content=np(s.content))}return n?e.filter(Boolean):e}function km(e){for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(n===10||n===13)return!0}return!1}function np(e){let t="",n=!1;for(let i=0;i<e.length;i++)Ze(e.charCodeAt(i))?n||(t+=" ",n=!0):(t+=e[i],n=!1);return t}function ao(e){(fe[0]||Ni).children.push(e)}function ke(e,t){return{start:we.getPos(e),end:t==null?t:we.getPos(t),source:t==null?t:Pe(e,t)}}function Sm(e){return{start:Z({},e.start),end:Z({},e.end),source:e.source}}function un(e,t){e.end=we.getPos(t),e.source=Pe(e.start.offset,t)}function _m(e){const t={type:6,name:e.rawName,nameLoc:ke(e.loc.start.offset,e.loc.start.offset+e.rawName.length),value:void 0,loc:e.loc};if(e.exp){const n=e.exp.loc;n.end.offset<e.loc.end.offset&&(n.start.offset--,n.start.column--,n.end.offset++,n.end.column++),t.value={type:2,content:e.exp.content,loc:n}}return t}function us(e,t=!1,n,i=0,s=0){return ee(e,t,n,i)}function It(e,t,n){oe.onError(he(e,ke(t,t)))}function Tm(){we.reset(),Me=null,ne=null,We="",Pt=-1,cn=-1,fe.length=0}function Em(e,t){if(Tm(),Vt=e,oe=Z({},Qd),t){let s;for(s in t)t[s]!=null&&(oe[s]=t[s])}we.mode=oe.parseMode==="html"?1:oe.parseMode==="sfc"?2:0,we.inXML=oe.ns===1||oe.ns===2;const n=t&&t.delimiters;n&&(we.delimiterOpen=Vs(n[0]),we.delimiterClose=Vs(n[1]));const i=Ni=Zg([],e);return we.parse(Vt),i.loc=ke(0,e.length),i.children=tp(i.children),Ni=null,i}function Cm(e,t){fs(e,void 0,t,!!ip(e))}function ip(e){const t=e.children.filter(n=>n.type!==3);return t.length===1&&t[0].type===1&&!js(t[0])?t[0]:null}function fs(e,t,n,i=!1,s=!1){const{children:r}=e,o=[];for(let c=0;c<r.length;c++){const p=r[c];if(p.type===1&&p.tagType===0){const m=i?0:et(p,n);if(m>0){if(m>=2){p.codegenNode.patchFlag=-1,o.push(p);continue}}else{const h=p.codegenNode;if(h.type===13){const v=h.patchFlag;if((v===void 0||v===512||v===1)&&rp(p,n)>=2){const x=op(p);x&&(h.props=n.hoist(x))}h.dynamicProps&&(h.dynamicProps=n.hoist(h.dynamicProps))}}}else if(p.type===12&&(i?0:et(p,n))>=2){p.codegenNode.type===14&&p.codegenNode.arguments.length>0&&p.codegenNode.arguments.push("-1"),o.push(p);continue}if(p.type===1){const m=p.tagType===1;m&&n.scopes.vSlot++,fs(p,e,n,!1,s),m&&n.scopes.vSlot--}else if(p.type===11)fs(p,e,n,p.children.length===1,!0);else if(p.type===9)for(let m=0;m<p.branches.length;m++)fs(p.branches[m],e,n,p.branches[m].children.length===1,s)}let a=!1;if(o.length===r.length&&e.type===1){if(e.tagType===0&&e.codegenNode&&e.codegenNode.type===13&&H(e.codegenNode.children))e.codegenNode.children=l(gn(e.codegenNode.children)),a=!0;else if(e.tagType===1&&e.codegenNode&&e.codegenNode.type===13&&e.codegenNode.children&&!H(e.codegenNode.children)&&e.codegenNode.children.type===15){const c=d(e.codegenNode,"default");c&&(c.returns=l(gn(c.returns)),a=!0)}else if(e.tagType===3&&t&&t.type===1&&t.tagType===1&&t.codegenNode&&t.codegenNode.type===13&&t.codegenNode.children&&!H(t.codegenNode.children)&&t.codegenNode.children.type===15){const c=at(e,"slot",!0),p=c&&c.arg&&d(t.codegenNode,c.arg);p&&(p.returns=l(gn(p.returns)),a=!0)}}if(!a)for(const c of o)c.codegenNode=n.cache(c.codegenNode);function l(c){const p=n.cache(c);return p.needArraySpread=!0,p}function d(c,p){if(c.children&&!H(c.children)&&c.children.type===15){const m=c.children.properties.find(h=>h.key===p||h.key.content===p);return m&&m.value}}o.length&&n.transformHoist&&n.transformHoist(r,n,e)}function et(e,t){const{constantCache:n}=t;switch(e.type){case 1:if(e.tagType!==0)return 0;const i=n.get(e);if(i!==void 0)return i;const s=e.codegenNode;if(s.type!==13||s.isBlock&&e.tag!=="svg"&&e.tag!=="foreignObject"&&e.tag!=="math")return 0;if(s.patchFlag===void 0){let o=3;const a=rp(e,t);if(a===0)return n.set(e,0),0;a<o&&(o=a);for(let l=0;l<e.children.length;l++){const d=et(e.children[l],t);if(d===0)return n.set(e,0),0;d<o&&(o=d)}if(o>1)for(let l=0;l<e.props.length;l++){const d=e.props[l];if(d.type===7&&d.name==="bind"&&d.exp){const c=et(d.exp,t);if(c===0)return n.set(e,0),0;c<o&&(o=c)}}if(s.isBlock){for(let l=0;l<e.props.length;l++)if(e.props[l].type===7)return n.set(e,0),0;t.removeHelper(xn),t.removeHelper(Un(t.inSSR,s.isComponent)),s.isBlock=!1,t.helper(Wn(t.inSSR,s.isComponent))}return n.set(e,o),o}else return n.set(e,0),0;case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return et(e.content,t);case 4:return e.constType;case 8:let r=3;for(let o=0;o<e.children.length;o++){const a=e.children[o];if(J(a)||$e(a))continue;const l=et(a,t);if(l===0)return 0;l<r&&(r=l)}return r;case 20:return 2;default:return 0}}const Am=new Set([Qo,ea,Ai,Bi]);function sp(e,t){if(e.type===14&&!J(e.callee)&&Am.has(e.callee)){const n=e.arguments[0];if(n.type===4)return et(n,t);if(n.type===14)return sp(n,t)}return 0}function rp(e,t){let n=3;const i=op(e);if(i&&i.type===15){const{properties:s}=i;for(let r=0;r<s.length;r++){const{key:o,value:a}=s[r],l=et(o,t);if(l===0)return l;l<n&&(n=l);let d;if(a.type===4?d=et(a,t):a.type===14?d=sp(a,t):d=0,d===0)return d;d<n&&(n=d)}}return n}function op(e){const t=e.codegenNode;if(t.type===13)return t.props}function Im(e,{filename:t="",prefixIdentifiers:n=!1,hoistStatic:i=!1,hmr:s=!1,cacheHandlers:r=!1,nodeTransforms:o=[],directiveTransforms:a={},transformHoist:l=null,isBuiltInComponent:d=De,isCustomElement:c=De,expressionPlugins:p=[],scopeId:m=null,slotted:h=!0,ssr:v=!1,inSSR:x=!1,ssrCssVars:I="",bindingMetadata:C=te,inline:y=!1,isTS:f=!1,onError:g=ra,onWarn:b=Gd,compatConfig:O}){const T=t.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),k={filename:t,selfName:T&&vn(ce(T[1])),prefixIdentifiers:n,hoistStatic:i,hmr:s,cacheHandlers:r,nodeTransforms:o,directiveTransforms:a,transformHoist:l,isBuiltInComponent:d,isCustomElement:c,expressionPlugins:p,scopeId:m,slotted:h,ssr:v,inSSR:x,ssrCssVars:I,bindingMetadata:C,inline:y,isTS:f,onError:g,onWarn:b,compatConfig:O,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],cached:[],constantCache:new WeakMap,vForMemoKeyedNodes:new WeakSet,temps:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,grandParent:null,currentNode:e,childIndex:0,inVOnce:!1,helper(S){const A=k.helpers.get(S)||0;return k.helpers.set(S,A+1),S},removeHelper(S){const A=k.helpers.get(S);if(A){const N=A-1;N?k.helpers.set(S,N):k.helpers.delete(S)}},helperString(S){return`_${jn[k.helper(S)]}`},replaceNode(S){k.parent.children[k.childIndex]=k.currentNode=S},removeNode(S){const A=k.parent.children,N=S?A.indexOf(S):k.currentNode?k.childIndex:-1;!S||S===k.currentNode?(k.currentNode=null,k.onNodeRemoved()):k.childIndex>N&&(k.childIndex--,k.onNodeRemoved()),k.parent.children.splice(N,1)},onNodeRemoved:De,addIdentifiers(S){},removeIdentifiers(S){},hoist(S){J(S)&&(S=ee(S)),k.hoists.push(S);const A=ee(`_hoisted_${k.hoists.length}`,!1,S.loc,2);return A.hoisted=S,A},cache(S,A=!1,N=!1){const _=Qg(k.cached.length,S,A,N);return k.cached.push(_),_}};return k.filters=new Set,k}function Pm(e,t){const n=Im(e,t);mr(e,n),t.hoistStatic&&Cm(e,n),t.ssr||Rm(e,n),e.helpers=new Set([...n.helpers.keys()]),e.components=[...n.components],e.directives=[...n.directives],e.imports=n.imports,e.hoists=n.hoists,e.temps=n.temps,e.cached=n.cached,e.transformed=!0,e.filters=[...n.filters]}function Rm(e,t){const{helper:n}=t,{children:i}=e;if(i.length===1){const s=ip(e);if(s&&s.codegenNode){const r=s.codegenNode;r.type===13&&sa(r,t),e.codegenNode=r}else e.codegenNode=i[0]}else if(i.length>1){let s=64;e.codegenNode=Ii(t,n(Ci),void 0,e.children,s,void 0,void 0,!0,void 0,!1)}}function Nm(e,t){let n=0;const i=()=>{n--};for(;n<e.children.length;n++){const s=e.children[n];J(s)||(t.grandParent=t.parent,t.parent=e,t.childIndex=n,t.onNodeRemoved=i,mr(s,t))}}function mr(e,t){t.currentNode=e;const{nodeTransforms:n}=t,i=[];for(let r=0;r<n.length;r++){const o=n[r](e,t);if(o&&(H(o)?i.push(...o):i.push(o)),t.currentNode)e=t.currentNode;else return}switch(e.type){case 3:t.ssr||t.helper(ji);break;case 5:t.ssr||t.helper(hr);break;case 9:for(let r=0;r<e.branches.length;r++)mr(e.branches[r],t);break;case 10:case 11:case 1:case 0:Nm(e,t);break}t.currentNode=e;let s=i.length;for(;s--;)i[s]()}function ap(e,t){const n=J(e)?i=>i===e:i=>e.test(i);return(i,s)=>{if(i.type===1){const{props:r}=i;if(i.tagType===3&&r.some(dm))return;const o=[];for(let a=0;a<r.length;a++){const l=r[a];if(l.type===7&&n(l.name)){r.splice(a,1),a--;const d=t(i,l,s);d&&o.push(d)}}return o}}}const br="/*@__PURE__*/",lp=e=>`${jn[e]}: _${jn[e]}`;function Dm(e,{mode:t="function",prefixIdentifiers:n=t==="module",sourceMap:i=!1,filename:s="template.vue.html",scopeId:r=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:l="vue",ssrRuntimeModuleName:d="vue/server-renderer",ssr:c=!1,isTS:p=!1,inSSR:m=!1}){const h={mode:t,prefixIdentifiers:n,sourceMap:i,filename:s,scopeId:r,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:l,ssrRuntimeModuleName:d,ssr:c,isTS:p,inSSR:m,source:e.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(x){return`_${jn[x]}`},push(x,I=-2,C){h.code+=x},indent(){v(++h.indentLevel)},deindent(x=!1){x?--h.indentLevel:v(--h.indentLevel)},newline(){v(h.indentLevel)}};function v(x){h.push(`
`+"  ".repeat(x),0)}return h}function Om(e,t={}){const n=Dm(e,t);t.onContextCreated&&t.onContextCreated(n);const{mode:i,push:s,prefixIdentifiers:r,indent:o,deindent:a,newline:l,scopeId:d,ssr:c}=n,p=Array.from(e.helpers),m=p.length>0,h=!r&&i!=="module";Mm(e,n);const x=c?"ssrRender":"render",C=(c?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(s(`function ${x}(${C}) {`),o(),h&&(s("with (_ctx) {"),o(),m&&(s(`const { ${p.map(lp).join(", ")} } = _Vue
`,-1),l())),e.components.length&&(Dr(e.components,"component",n),(e.directives.length||e.temps>0)&&l()),e.directives.length&&(Dr(e.directives,"directive",n),e.temps>0&&l()),e.filters&&e.filters.length&&(l(),Dr(e.filters,"filter",n),l()),e.temps>0){s("let ");for(let y=0;y<e.temps;y++)s(`${y>0?", ":""}_temp${y}`)}return(e.components.length||e.directives.length||e.temps)&&(s(`
`,0),l()),c||s("return "),e.codegenNode?ze(e.codegenNode,n):s("null"),h&&(a(),s("}")),a(),s("}"),{ast:e,code:n.code,preamble:"",map:n.map?n.map.toJSON():void 0}}function Mm(e,t){const{ssr:n,prefixIdentifiers:i,push:s,newline:r,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:l}=t,d=a,c=Array.from(e.helpers);if(c.length>0&&(s(`const _Vue = ${d}
`,-1),e.hoists.length)){const p=[Wo,Uo,ji,Ko,Bd].filter(m=>c.includes(m)).map(lp).join(", ");s(`const { ${p} } = _Vue
`,-1)}Lm(e.hoists,t),r(),s("return ")}function Dr(e,t,{helper:n,push:i,newline:s,isTS:r}){const o=n(t==="filter"?Jo:t==="component"?Go:Yo);for(let a=0;a<e.length;a++){let l=e[a];const d=l.endsWith("__self");d&&(l=l.slice(0,-6)),i(`const ${Ri(l,t)} = ${o}(${JSON.stringify(l)}${d?", true":""})${r?"!":""}`),a<e.length-1&&s()}}function Lm(e,t){if(!e.length)return;t.pure=!0;const{push:n,newline:i}=t;i();for(let s=0;s<e.length;s++){const r=e[s];r&&(n(`const _hoisted_${s+1} = `),ze(r,t),i())}t.pure=!1}function pa(e,t){const n=e.length>3||!1;t.push("["),n&&t.indent(),Wi(e,t,n),n&&t.deindent(),t.push("]")}function Wi(e,t,n=!1,i=!0){const{push:s,newline:r}=t;for(let o=0;o<e.length;o++){const a=e[o];J(a)?s(a,-3):H(a)?pa(a,t):ze(a,t),o<e.length-1&&(n?(i&&s(","),r()):i&&s(", "))}}function ze(e,t){if(J(e)){t.push(e,-3);return}if($e(e)){t.push(t.helper(e));return}switch(e.type){case 1:case 9:case 11:ze(e.codegenNode,t);break;case 2:Fm(e,t);break;case 4:cp(e,t);break;case 5:zm(e,t);break;case 12:ze(e.codegenNode,t);break;case 8:dp(e,t);break;case 3:Vm(e,t);break;case 13:Hm(e,t);break;case 14:Bm(e,t);break;case 15:Wm(e,t);break;case 17:Um(e,t);break;case 18:Km(e,t);break;case 19:Gm(e,t);break;case 20:qm(e,t);break;case 21:Wi(e.body,t,!0,!1);break}}function Fm(e,t){t.push(JSON.stringify(e.content),-3,e)}function cp(e,t){const{content:n,isStatic:i}=e;t.push(i?JSON.stringify(n):n,-3,e)}function zm(e,t){const{push:n,helper:i,pure:s}=t;s&&n(br),n(`${i(hr)}(`),ze(e.content,t),n(")")}function dp(e,t){for(let n=0;n<e.children.length;n++){const i=e.children[n];J(i)?t.push(i,-3):ze(i,t)}}function $m(e,t){const{push:n}=t;if(e.type===8)n("["),dp(e,t),n("]");else if(e.isStatic){const i=oa(e.content)?e.content:JSON.stringify(e.content);n(i,-2,e)}else n(`[${e.content}]`,-3,e)}function Vm(e,t){const{push:n,helper:i,pure:s}=t;s&&n(br),n(`${i(ji)}(${JSON.stringify(e.content)})`,-3,e)}function Hm(e,t){const{push:n,helper:i,pure:s}=t,{tag:r,props:o,children:a,patchFlag:l,dynamicProps:d,directives:c,isBlock:p,disableTracking:m,isComponent:h}=e;let v;l&&(v=String(l)),c&&n(i(Xo)+"("),p&&n(`(${i(xn)}(${m?"true":""}), `),s&&n(br);const x=p?Un(t.inSSR,h):Wn(t.inSSR,h);n(i(x)+"(",-2,e),Wi(jm([r,o,a,v,d]),t),n(")"),p&&n(")"),c&&(n(", "),ze(c,t),n(")"))}function jm(e){let t=e.length;for(;t--&&e[t]==null;);return e.slice(0,t+1).map(n=>n||"null")}function Bm(e,t){const{push:n,helper:i,pure:s}=t,r=J(e.callee)?e.callee:i(e.callee);s&&n(br),n(r+"(",-2,e),Wi(e.arguments,t),n(")")}function Wm(e,t){const{push:n,indent:i,deindent:s,newline:r}=t,{properties:o}=e;if(!o.length){n("{}",-2,e);return}const a=o.length>1||!1;n(a?"{":"{ "),a&&i();for(let l=0;l<o.length;l++){const{key:d,value:c}=o[l];$m(d,t),n(": "),ze(c,t),l<o.length-1&&(n(","),r())}a&&s(),n(a?"}":" }")}function Um(e,t){pa(e.elements,t)}function Km(e,t){const{push:n,indent:i,deindent:s}=t,{params:r,returns:o,body:a,newline:l,isSlot:d}=e;d&&n(`_${jn[na]}(`),n("(",-2,e),H(r)?Wi(r,t):r&&ze(r,t),n(") => "),(l||a)&&(n("{"),i()),o?(l&&n("return "),H(o)?pa(o,t):ze(o,t)):a&&ze(a,t),(l||a)&&(s(),n("}")),d&&(e.isNonScopedSlot&&n(", undefined, true"),n(")"))}function Gm(e,t){const{test:n,consequent:i,alternate:s,newline:r}=e,{push:o,indent:a,deindent:l,newline:d}=t;if(n.type===4){const p=!oa(n.content);p&&o("("),cp(n,t),p&&o(")")}else o("("),ze(n,t),o(")");r&&a(),t.indentLevel++,r||o(" "),o("? "),ze(i,t),t.indentLevel--,r&&d(),r||o(" "),o(": ");const c=s.type===19;c||t.indentLevel++,ze(s,t),c||t.indentLevel--,r&&l(!0)}function qm(e,t){const{push:n,helper:i,indent:s,deindent:r,newline:o}=t,{needPauseTracking:a,needArraySpread:l}=e;l&&n("[...("),n(`_cache[${e.index}] || (`),a&&(s(),n(`${i($s)}(-1`),e.inVOnce&&n(", true"),n("),"),o(),n("(")),n(`_cache[${e.index}] = `),ze(e.value,t),a&&(n(`).cacheIndex = ${e.index},`),o(),n(`${i($s)}(1),`),o(),n(`_cache[${e.index}]`),r()),n(")"),l&&n(")]")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const Ym=ap(/^(?:if|else|else-if)$/,(e,t,n)=>Jm(e,t,n,(i,s,r)=>{const o=n.parent.children;let a=o.indexOf(i),l=0;for(;a-->=0;){const d=o[a];d&&d.type===9&&(l+=d.branches.length)}return()=>{if(r)i.codegenNode=hl(s,l,n);else{const d=Xm(i.codegenNode);d.alternate=hl(s,l+i.branches.length-1,n)}}}));function Jm(e,t,n,i){if(t.name!=="else"&&(!t.exp||!t.exp.content.trim())){const s=t.exp?t.exp.loc:e.loc;n.onError(he(28,t.loc)),t.exp=ee("true",!1,s)}if(t.name==="if"){const s=fl(e,t),r={type:9,loc:Sm(e.loc),branches:[s]};if(n.replaceNode(r),i)return i(r,s,!0)}else{const s=n.parent.children;let r=s.indexOf(e);for(;r-->=-1;){const o=s[r];if(o&&ca(o)){n.removeNode(o);continue}if(o&&o.type===9){(t.name==="else-if"||t.name==="else")&&o.branches[o.branches.length-1].condition===void 0&&n.onError(he(30,e.loc)),n.removeNode();const a=fl(e,t);o.branches.push(a);const l=i&&i(o,a,!1);mr(a,n),l&&l(),n.currentNode=null}else n.onError(he(30,e.loc));break}}}function fl(e,t){const n=e.tagType===3;return{type:10,loc:e.loc,condition:t.name==="else"?void 0:t.exp,children:n&&!at(e,"for")?e.children:[e],userKey:gr(e,"key"),isTemplateIf:n}}function hl(e,t,n){return e.condition?so(e.condition,gl(e,t,n),Ae(n.helper(ji),['""',"true"])):gl(e,t,n)}function gl(e,t,n){const{helper:i}=n,s=_e("key",ee(`${t}`,!1,it,2)),{children:r}=e,o=r[0];if(r.length!==1||o.type!==1)if(r.length===1&&o.type===11){const l=o.codegenNode;return Bs(l,s,n),l}else return Ii(n,i(Ci),ct([s]),r,64,void 0,void 0,!0,!1,!1,e.loc);else{const l=o.codegenNode,d=fm(l);return d.type===13&&sa(d,n),Bs(d,s,n),l}}function Xm(e){for(;;)if(e.type===19)if(e.alternate.type===19)e=e.alternate;else return e;else e.type===20&&(e=e.value)}const Zm=ap("for",(e,t,n)=>{const{helper:i,removeHelper:s}=n;return Qm(e,t,n,r=>{const o=Ae(i(Zo),[r.source]),a=Hs(e),l=at(e,"memo"),d=gr(e,"key",!1,!0);d&&d.type;let c=d&&(d.type===6?d.value?ee(d.value.content,!0):void 0:d.exp);const p=c?_e("key",c):null,m=r.source.type===4&&r.source.constType>0,h=m?64:d?128:256;return r.codegenNode=Ii(n,i(Ci),void 0,o,h,void 0,void 0,!0,!m,!1,e.loc),()=>{var v;let x;const{children:I}=r,C=I.length!==1||I[0].type!==1,y=js(e)?e:a&&e.children.length===1&&js(e.children[0])?e.children[0]:null;if(y)x=y.codegenNode,a&&p&&Bs(x,p,n);else if(C)x=Ii(n,i(Ci),p?ct([p]):void 0,e.children,64,void 0,void 0,!0,void 0,!1);else{x=I[0].codegenNode,a&&p&&Bs(x,p,n);const f=!m||x.isBlockRequired===!0;x.isBlock!==f&&(x.isBlock?(s(xn),s(Un(n.inSSR,x.isComponent))):s(Wn(n.inSSR,x.isComponent))),x.isBlock=f,x.isBlock?(i(xn),i(Un(n.inSSR,x.isComponent))):(i(Wn(n.inSSR,x.isComponent)),x.needsPatch&&(x.patchFlag=((v=x.patchFlag)!=null?v:0)|512))}if(l){const f=Bn(lo(r.parseResult,[ee("_cached")]));f.body=em([gt(["const _memo = (",l.exp,")"]),gt(["if (_cached && _cached.el",...c?[" && _cached.key === (",c,")"]:[],` && ${n.helperString(Kd)}(_cached, _memo)) return _cached`]),gt(["const _item = ",x]),ee("_item.memo = _memo"),ee("return _item")]),o.arguments.push(f,ee("_cache"),ee(String(n.cached.length))),n.cached.push(null)}else o.arguments.push(Bn(lo(r.parseResult),x,!0))}})});function Qm(e,t,n,i){if(!t.exp){n.onError(he(31,t.loc));return}const s=t.forParseResult;if(!s){n.onError(he(32,t.loc));return}pp(s);const{addIdentifiers:r,removeIdentifiers:o,scopes:a}=n,{source:l,value:d,key:c,index:p}=s,m={type:11,loc:t.loc,source:l,valueAlias:d,keyAlias:c,objectIndexAlias:p,parseResult:s,children:Hs(e)?e.children:[e]};n.replaceNode(m),a.vFor++;const h=i&&i(m);return()=>{a.vFor--,h&&h()}}function pp(e,t){e.finalized||(e.finalized=!0)}function lo({value:e,key:t,index:n},i=[]){return eb([e,t,n,...i])}function eb(e){let t=e.length;for(;t--&&!e[t];);return e.slice(0,t+1).map((n,i)=>n||ee("_".repeat(i+1),!1))}const ml=ee("undefined",!1),tb=(e,t)=>{if(e.type===1&&(e.tagType===1||e.tagType===3)){const n=at(e,"slot");if(n)return n.exp,t.scopes.vSlot++,()=>{t.scopes.vSlot--}}},nb=(e,t,n,i)=>Bn(e,n,!1,!0,n.length?n[0].loc:i);function ib(e,t,n=nb){t.helper(na);const{children:i,loc:s}=e,r=[],o=[];let a=t.scopes.vSlot>0||t.scopes.vFor>0;const l=at(e,"slot",!0);if(l){const{arg:I,exp:C}=l;I&&!je(I)&&(a=!0),r.push(_e(I||ee("default",!0),n(C,void 0,i,s)))}let d=!1,c=!1;const p=[],m=new Set;let h=0;for(let I=0;I<i.length;I++){const C=i[I];let y;if(!Hs(C)||!(y=at(C,"slot",!0))){C.type!==3&&p.push(C);continue}if(l){t.onError(he(37,y.loc));break}d=!0;const{children:f,loc:g}=C,{arg:b=ee("default",!0),exp:O,loc:T}=y;let k;je(b)?k=b?b.content:"default":a=!0;const S=at(C,"for"),A=n(O,S,f,g);let N,_;if(N=at(C,"if"))a=!0,o.push(so(N.exp,rs(b,A,h++),ml));else if(_=at(C,/^else(?:-if)?$/,!0)){let F=I,M;for(;F--&&(M=i[F],!!ca(M)););if(M&&Hs(M)&&at(M,/^(?:else-)?if$/)){let W=o[o.length-1];for(;W.alternate.type===19;)W=W.alternate;W.alternate=_.exp?so(_.exp,rs(b,A,h++),ml):rs(b,A,h++)}else t.onError(he(30,_.loc))}else if(S){a=!0;const F=S.forParseResult;F?(pp(F),o.push(Ae(t.helper(Zo),[F.source,Bn(lo(F),rs(b,A),!0)]))):t.onError(he(32,S.loc))}else{if(k){if(m.has(k)){t.onError(he(38,T));continue}m.add(k),k==="default"&&(c=!0)}r.push(_e(b,A))}}if(!l){const I=(C,y)=>{const f=n(C,void 0,y,s);return t.compatConfig&&(f.isNonScopedSlot=!0),_e("default",f)};d?p.length&&!p.every(la)&&(c?t.onError(he(39,p[0].loc)):r.push(I(void 0,p))):r.push(I(void 0,i))}const v=a?2:hs(e.children)?3:1;let x=ct(r.concat(_e("_",ee(v+"",!1))),s);return o.length&&(x=Ae(t.helper(Ud),[x,gn(o)])),{slots:x,hasDynamicSlots:a}}function rs(e,t,n){const i=[_e("name",e),_e("fn",t)];return n!=null&&i.push(_e("key",ee(String(n),!0))),ct(i)}function hs(e){for(let t=0;t<e.length;t++){const n=e[t];switch(n.type){case 1:if(n.tagType===2||hs(n.children))return!0;break;case 9:if(hs(n.branches))return!0;break;case 10:case 11:if(hs(n.children))return!0;break}}return!1}const up=new WeakMap,sb=(e,t)=>function(){if(e=t.currentNode,!(e.type===1&&(e.tagType===0||e.tagType===1)))return;const{tag:i,props:s}=e,r=e.tagType===1;let o=r?rb(e,t):`"${i}"`;const a=ae(o)&&o.callee===qo;let l,d,c=0,p,m,h,v=!1,x=!1,I=a||o===fi||o===Bo||!r&&(i==="svg"||i==="foreignObject"||i==="math");if(s.length>0){const y=fp(e,t,void 0,r,a);l=y.props,c=y.patchFlag,m=y.dynamicPropNames,v=y.needsPatch,x=y.isBlockRequired;const f=y.directives;h=f&&f.length?gn(f.map(g=>ab(g,t))):void 0,y.shouldUseBlock&&(I=!0)}if(e.children.length>0)if(o===Fs&&(I=!0,c|=1024),r&&o!==fi&&o!==Fs){const{slots:f,hasDynamicSlots:g}=ib(e,t);d=f,g&&(c|=1024)}else if(e.children.length===1&&o!==fi){const f=e.children[0],g=f.type,b=g===5||g===8;b&&et(f,t)===0&&(c|=1),b||g===2?d=f:d=e.children}else d=e.children;m&&m.length&&(p=lb(m));const C=e.codegenNode=Ii(t,o,l,d,c===0?void 0:c,p,h,!!I,!1,r,e.loc);v=v&&(c===0||c===32),v&&(C.needsPatch=!0),x&&(C.isBlockRequired=!0)};function rb(e,t,n=!1){let{tag:i}=e;const s=co(i),r=gr(e,"is",!1,!0);if(r)if(s||mn("COMPILER_IS_ON_ELEMENT",t)){let a;if(r.type===6?a=r.value&&ee(r.value.content,!0):(a=r.exp,a||(a=ee("is",!1,r.arg.loc))),a)return Ae(t.helper(qo),[a])}else r.type===6&&r.value.content.startsWith("vue:")&&(i=r.value.content.slice(4));const o=qd(i)||t.isBuiltInComponent(i);return o?(n||t.helper(o),o):(t.helper(Go),t.components.add(i),Ri(i,"component"))}function fp(e,t,n=e.props,i,s,r=!1){const{tag:o,loc:a,children:l}=e;let d=[];const c=[],p=[],m=l.length>0;let h=!1,v=!1,x=0,I=!1,C=!1,y=!1,f=!1,g=!1,b=!1;const O=[],T=_=>{d.length&&(c.push(ct(bl(d),a)),d=[]),_&&c.push(_)},k=()=>{t.scopes.vFor>0&&d.push(_e(ee("ref_for",!0),ee("true")))},S=({key:_,value:F})=>{if(je(_)){const M=_.content,W=yn(M);if(W&&(!i||s)&&M.toLowerCase()!=="onclick"&&M!=="onUpdate:modelValue"&&!Ft(M)&&(f=!0),W&&Ft(M)&&(b=!0),M==="ref"&&(I=!0),W&&F.type===14&&(F=F.arguments[0]),F.type===20||(F.type===4||F.type===8)&&et(F,t)>0)return;M==="class"?C=!0:M==="style"?y=!0:M!=="ref"&&M!=="key"&&!O.includes(M)&&O.push(M),i&&(M==="class"||M==="style")&&!O.includes(M)&&O.push(M)}else g=!0};for(let _=0;_<n.length;_++){const F=n[_];if(F.type===6){const{loc:M,name:W,nameLoc:B,value:q}=F;let G=!0;if(W==="ref"&&(I=!0,k()),W==="is"&&(co(o)||q&&q.content.startsWith("vue:")||mn("COMPILER_IS_ON_ELEMENT",t)))continue;d.push(_e(ee(W,!0,B),ee(q?q.content:"",G,q?q.loc:M)))}else{const{name:M,arg:W,exp:B,loc:q,modifiers:G}=F,ge=M==="bind",Q=M==="on";if(M==="slot"){i||t.onError(he(40,q));continue}if(M==="once"||M==="memo"||M==="is"||ge&&zn(W,"is")&&(co(o)||mn("COMPILER_IS_ON_ELEMENT",t))||Q&&r)continue;if(ge&&zn(W,"key")&&(h=!0),Q&&m&&W&&je(W)&&ce(W.content)==="vue:beforeUpdate"&&(h=!0,v=!0),ge&&zn(W,"ref")&&k(),!W&&(ge||Q)){if(g=!0,B)if(ge){if(T(),mn("COMPILER_V_BIND_OBJECT_ORDER",t)){c.unshift(B);continue}k(),T(),c.push(B)}else T({type:14,loc:q,callee:t.helper(ta),arguments:i?[B]:[B,"true"]});else t.onError(he(ge?34:35,q));continue}ge&&G.some(le=>le.content==="prop")&&(x|=32);const me=t.directiveTransforms[M];if(me){const{props:le,needRuntime:Sn}=me(F,e,t);!r&&le.forEach(S),Q&&W&&!je(W)?T(ct(le,a)):d.push(...le),Sn&&(p.push(F),$e(Sn)&&up.set(F,Sn))}else Vp(M)||(p.push(F),m&&(h=!0,v=!0))}}let A;c.length?(T(),c.length>1?A=Ae(t.helper(zs),c,a):A=c[0]):d.length&&(A=ct(bl(d),a)),g?x|=16:(C&&!i&&(x|=2),y&&!i&&(x|=4),O.length&&(x|=8),f&&(x|=32));const N=(x===0||x===32)&&(I||b||p.length>0);if(!h&&N&&(x|=512),!t.inSSR&&A)switch(A.type){case 15:let _=-1,F=-1,M=!1;for(let q=0;q<A.properties.length;q++){const G=A.properties[q].key;je(G)?G.content==="class"?_=q:G.content==="style"&&(F=q):G.isHandlerKey||(M=!0)}const W=A.properties[_],B=A.properties[F];M?A=Ae(t.helper(Ai),[A]):(W&&!je(W.value)&&(W.value=Ae(t.helper(Qo),[W.value])),B&&(y||B.value.type===4&&B.value.content.trim()[0]==="["||B.value.type===17)&&(B.value=Ae(t.helper(ea),[B.value])));break;case 14:break;default:A=Ae(t.helper(Ai),[Ae(t.helper(Bi),[A])]);break}return{props:A,directives:p,patchFlag:x,dynamicPropNames:O,shouldUseBlock:h,needsPatch:N,isBlockRequired:v}}function bl(e){const t=new Map,n=[];for(let i=0;i<e.length;i++){const s=e[i];if(s.key.type===8||!s.key.isStatic){n.push(s);continue}const r=s.key.content,o=t.get(r);o?(r==="style"||r==="class"||yn(r))&&ob(o,s):(t.set(r,s),n.push(s))}return n}function ob(e,t){e.value.type===17?e.value.elements.push(t.value):e.value=gn([e.value,t.value],e.loc)}function ab(e,t){const n=[],i=up.get(e);i?n.push(t.helperString(i)):(t.helper(Yo),t.directives.add(e.name),n.push(Ri(e.name,"directive")));const{loc:s}=e;if(e.exp&&n.push(e.exp),e.arg&&(e.exp||n.push("void 0"),n.push(e.arg)),Object.keys(e.modifiers).length){e.arg||(e.exp||n.push("void 0"),n.push("void 0"));const r=ee("true",!1,s);n.push(ct(e.modifiers.map(o=>_e(o,r)),s))}return gn(n,e.loc)}function lb(e){let t="[";for(let n=0,i=e.length;n<i;n++)t+=JSON.stringify(e[n]),n<i-1&&(t+=", ");return t+"]"}function co(e){return e==="component"||e==="Component"}const cb=(e,t)=>{if(js(e)){const{children:n,loc:i}=e,{slotName:s,slotProps:r}=db(e,t),o=[t.prefixIdentifiers?"_ctx.$slots":"$slots",s,"{}","undefined","true"];let a=2;r&&(o[2]=r,a=3),n.length&&(o[3]=Bn([],n,!1,!1,i),a=4),t.scopeId&&!t.slotted&&(a=5),o.splice(a),e.codegenNode=Ae(t.helper(Wd),o,i)}};function db(e,t){let n='"default"',i;const s=[];for(let r=0;r<e.props.length;r++){const o=e.props[r];if(o.type===6)o.value&&(o.name==="name"?n=JSON.stringify(o.value.content):(o.name=ce(o.name),s.push(o)));else if(o.name==="bind"&&zn(o.arg,"name")){if(o.exp)n=o.exp;else if(o.arg&&o.arg.type===4){const a=ce(o.arg.content);n=o.exp=ee(a,!1,o.arg.loc)}}else o.name==="bind"&&o.arg&&je(o.arg)&&(o.arg.content=ce(o.arg.content)),s.push(o)}if(s.length>0){const{props:r,directives:o}=fp(e,t,s,!1,!1);i=r,o.length&&t.onError(he(36,o[0].loc))}return{slotName:n,slotProps:i}}const hp=(e,t,n,i)=>{const{loc:s,modifiers:r,arg:o}=e;!e.exp&&!r.length&&n.onError(he(35,s));let a;if(o.type===4)if(o.isStatic){let p=o.content;p.startsWith("vue:")&&(p=`vnode-${p.slice(4)}`);const m=t.tagType!==0||p.startsWith("vnode")||!/[A-Z]/.test(p)?Nn(ce(p)):`on:${p}`;a=ee(m,!0,o.loc)}else a=gt([`${n.helperString(io)}(`,o,")"]);else a=o,a.children.unshift(`${n.helperString(io)}(`),a.children.push(")");let l=e.exp;l&&!l.content.trim()&&(l=void 0);let d=n.cacheHandlers&&!l&&!n.inVOnce;if(l){const p=Xd(l),m=!(p||lm(l)),h=l.content.includes(";");(m||d&&p)&&(l=gt([`${m?"$event":"(...args)"} => ${h?"{":"("}`,l,h?"}":")"]))}let c={props:[_e(a,l||ee("() => {}",!1,s))]};return i&&(c=i(c)),d&&(c.props[0].value=n.cache(c.props[0].value)),c.props.forEach(p=>p.key.isHandlerKey=!0),c},pb=(e,t,n)=>{const{modifiers:i,loc:s}=e,r=e.arg;let{exp:o}=e;return o&&o.type===4&&!o.content.trim()&&(o=void 0),r.type!==4?(r.children.unshift("("),r.children.push(') || ""')):r.isStatic||(r.content=r.content?`${r.content} || ""`:'""'),i.some(a=>a.content==="camel")&&(r.type===4?r.isStatic?r.content=ce(r.content):r.content=`${n.helperString(no)}(${r.content})`:(r.children.unshift(`${n.helperString(no)}(`),r.children.push(")"))),n.inSSR||(i.some(a=>a.content==="prop")&&wl(r,"."),i.some(a=>a.content==="attr")&&wl(r,"^")),{props:[_e(r,o)]}},wl=(e,t)=>{e.type===4?e.isStatic?e.content=t+e.content:e.content=`\`${t}\${${e.content}}\``:(e.children.unshift(`'${t}' + (`),e.children.push(")"))},ub=(e,t)=>{if(e.type===0||e.type===1||e.type===11||e.type===10)return()=>{const n=e.children;let i,s=!1;for(let r=0;r<n.length;r++){const o=n[r];if(Nr(o)){s=!0;for(let a=r+1;a<n.length;a++){const l=n[a];if(Nr(l))i||(i=n[r]=gt([o],o.loc)),i.children.push(" + ",l),n.splice(a,1),a--;else{i=void 0;break}}}}if(!(!s||n.length===1&&(e.type===0||e.type===1&&e.tagType===0&&!e.props.find(r=>r.type===7&&!t.directiveTransforms[r.name])&&e.tag!=="template")))for(let r=0;r<n.length;r++){const o=n[r];if(Nr(o)||o.type===8){const a=[];(o.type!==2||o.content!==" ")&&a.push(o),!t.ssr&&et(o,t)===0&&a.push("1"),n[r]={type:12,content:o,loc:o.loc,codegenNode:Ae(t.helper(Ko),a)}}}}},xl=new WeakSet,fb=(e,t)=>{if(e.type===1&&at(e,"once",!0))return xl.has(e)||t.inVOnce||t.inSSR?void 0:(xl.add(e),t.inVOnce=!0,t.helper($s),()=>{t.inVOnce=!1;const n=t.currentNode;n.codegenNode&&(n.codegenNode=t.cache(n.codegenNode,!0,!0))})},gp=(e,t,n)=>{const{exp:i,arg:s}=e;if(!i)return n.onError(he(41,e.loc)),ei();const r=i.loc.source.trim(),o=i.type===4?i.content:r,a=n.bindingMetadata[r];if(a==="props"||a==="props-aliased")return n.onError(he(44,i.loc)),ei();if(a==="literal-const"||a==="setup-const")return n.onError(he(45,i.loc)),ei();if(!o.trim()||!Xd(i))return n.onError(he(42,i.loc)),ei();const l=s||ee("modelValue",!0),d=s?je(s)?`onUpdate:${ce(s.content)}`:gt(['"onUpdate:" + ',s]):"onUpdate:modelValue";let c;const p=n.isTS?"($event: any)":"$event";c=gt([`${p} => ((`,i,") = $event)"]);const m=[_e(l,e.exp),_e(d,c)];if(e.modifiers.length&&t.tagType===1){const h=e.modifiers.map(x=>x.content).map(x=>(oa(x)?x:JSON.stringify(x))+": true").join(", "),v=s?je(s)?`${s.content}Modifiers`:gt([s,' + "Modifiers"']):"modelModifiers";m.push(_e(v,ee(`{ ${h} }`,!1,e.loc,2)))}return ei(m)};function ei(e=[]){return{props:e}}const hb=/[\w).+\-_$\]]/,gb=(e,t)=>{mn("COMPILER_FILTERS",t)&&(e.type===5?Ws(e.content,t):e.type===1&&e.props.forEach(n=>{n.type===7&&n.name!=="for"&&n.exp&&Ws(n.exp,t)}))};function Ws(e,t){if(e.type===4)yl(e,t);else for(let n=0;n<e.children.length;n++){const i=e.children[n];typeof i=="object"&&(i.type===4?yl(i,t):i.type===8?Ws(i,t):i.type===5&&Ws(i.content,t))}}function yl(e,t){const n=e.content;let i=!1,s=!1,r=!1,o=!1,a=0,l=0,d=0,c=0,p,m,h,v,x=[];for(h=0;h<n.length;h++)if(m=p,p=n.charCodeAt(h),i)p===39&&m!==92&&(i=!1);else if(s)p===34&&m!==92&&(s=!1);else if(r)p===96&&m!==92&&(r=!1);else if(o)p===47&&m!==92&&(o=!1);else if(p===124&&n.charCodeAt(h+1)!==124&&n.charCodeAt(h-1)!==124&&!a&&!l&&!d)v===void 0?(c=h+1,v=n.slice(0,h).trim()):I();else{switch(p){case 34:s=!0;break;case 39:i=!0;break;case 96:r=!0;break;case 40:d++;break;case 41:d--;break;case 91:l++;break;case 93:l--;break;case 123:a++;break;case 125:a--;break}if(p===47){let C=h-1,y;for(;C>=0&&(y=n.charAt(C),y===" ");C--);(!y||!hb.test(y))&&(o=!0)}}v===void 0?v=n.slice(0,h).trim():c!==0&&I();function I(){x.push(n.slice(c,h).trim()),c=h+1}if(x.length){for(h=0;h<x.length;h++)v=mb(v,x[h],t);e.content=v,e.ast=void 0}}function mb(e,t,n){n.helper(Jo);const i=t.indexOf("(");if(i<0)return n.filters.add(t),`${Ri(t,"filter")}(${e})`;{const s=t.slice(0,i),r=t.slice(i+1);return n.filters.add(s),`${Ri(s,"filter")}(${e}${r!==")"?","+r:r}`}}const vl=new WeakSet,bb=(e,t)=>{if(e.type===1){const n=at(e,"memo");return!n||vl.has(e)||t.inSSR?void 0:(vl.add(e),()=>{const i=e.codegenNode||t.currentNode.codegenNode;i&&i.type===13&&(e.tagType!==1&&sa(i,t),e.codegenNode=Ae(t.helper(ia),[n.exp,Bn(void 0,i),"_cache",String(t.cached.length)]),t.cached.push(null))})}},wb=(e,t)=>{if(e.type===1){for(const n of e.props)if(n.type===7&&n.name==="bind"&&(!n.exp||n.exp.type===4&&!n.exp.content.trim())&&n.arg){const i=n.arg;if(i.type!==4||!i.isStatic)t.onError(he(53,i.loc)),n.exp=ee("",!0,i.loc);else{const s=ce(i.content);(Yd.test(s[0])||s[0]==="-")&&(n.exp=ee(s,!1,i.loc))}}}};function xb(e){return[[wb,fb,Ym,bb,Zm,gb,cb,sb,tb,ub],{on:hp,bind:pb,model:gp}]}function yb(e,t={}){const n=t.onError||ra,i=t.mode==="module";t.prefixIdentifiers===!0?n(he(48)):i&&n(he(49));const s=!1;t.cacheHandlers&&n(he(50)),t.scopeId&&!i&&n(he(51));const r=Z({},t,{prefixIdentifiers:s}),o=J(e)?Em(e,r):e,[a,l]=xb();return Pm(o,Z({},r,{nodeTransforms:[...a,...t.nodeTransforms||[]],directiveTransforms:Z({},l,t.directiveTransforms||{})})),Om(o,r)}const vb=()=>({props:[]});const mp=Symbol(""),bp=Symbol(""),wp=Symbol(""),xp=Symbol(""),po=Symbol(""),yp=Symbol(""),vp=Symbol(""),kp=Symbol(""),ua=Symbol(""),Sp=Symbol("");Xg({[mp]:"vModelRadio",[bp]:"vModelCheckbox",[wp]:"vModelText",[xp]:"vModelSelect",[po]:"vModelDynamic",[yp]:"withModifiers",[vp]:"withKeys",[kp]:"vShow",[ua]:"Transition",[Sp]:"TransitionGroup"});let Cn;function kb(e,t=!1){return Cn||(Cn=document.createElement("div")),t?(Cn.innerHTML=`<div foo="${e.replace(/"/g,"&quot;")}">`,Cn.children[0].getAttribute("foo")):(Cn.innerHTML=e,Cn.textContent)}const Sb={parseMode:"html",isVoidTag:iu,isNativeTag:e=>eu(e)||tu(e)||nu(e),isPreTag:e=>e==="pre",isIgnoreNewlineTag:e=>e==="pre"||e==="textarea",decodeEntities:kb,isBuiltInComponent:e=>{if(e==="Transition"||e==="transition")return ua;if(e==="TransitionGroup"||e==="transition-group")return Sp},getNamespace(e,t,n){let i=t?t.ns:n;if(t&&i===2)if(t.tag==="annotation-xml"){if(e==="svg")return 1;t.props.some(s=>s.type===6&&s.name==="encoding"&&s.value!=null&&(s.value.content==="text/html"||s.value.content==="application/xhtml+xml"))&&(i=0)}else/^m(?:[ions]|text)$/.test(t.tag)&&e!=="mglyph"&&e!=="malignmark"&&(i=0);else t&&i===1&&(t.tag==="foreignObject"||t.tag==="desc"||t.tag==="title")&&(i=0);if(i===0){if(e==="svg")return 1;if(e==="math")return 2}return i}},_b=e=>{e.type===1&&e.props.forEach((t,n)=>{t.type===6&&t.name==="style"&&t.value&&(e.props[n]={type:7,name:"bind",arg:ee("style",!0,t.loc),exp:Tb(t.value.content,t.loc),modifiers:[],loc:t.loc})})},Tb=(e,t)=>{const n=Nl(e);return ee(JSON.stringify(n),!1,t,3)};function tn(e,t){return he(e,t)}const Eb=(e,t,n)=>{const{exp:i,loc:s}=e;return i||n.onError(tn(54,s)),t.children.length&&(n.onError(tn(55,s)),t.children.length=0),{props:[_e(ee("innerHTML",!0,s),i||ee("",!0))]}},Cb=(e,t,n)=>{const{exp:i,loc:s}=e;return i||n.onError(tn(56,s)),t.children.length&&(n.onError(tn(57,s)),t.children.length=0),{props:[_e(ee("textContent",!0),i?et(i,n)>0?i:Ae(n.helperString(hr),[i],s):ee("",!0))]}},Ab=(e,t,n)=>{const i=gp(e,t,n);if(!i.props.length||t.tagType===1)return i;e.arg&&n.onError(tn(59,e.arg.loc));const{tag:s}=t,r=n.isCustomElement(s);if(s==="input"||s==="textarea"||s==="select"||r){let o=wp,a=!1;if(s==="input"||r){const l=gr(t,"type");if(l){if(l.type===7)o=po;else if(l.value)switch(l.value.content){case"radio":o=mp;break;case"checkbox":o=bp;break;case"file":a=!0,n.onError(tn(60,e.loc));break}}else cm(t)&&(o=po)}else s==="select"&&(o=xp);a||(i.needRuntime=n.helper(o))}else n.onError(tn(58,e.loc));return i.props=i.props.filter(o=>!(o.key.type===4&&o.key.content==="modelValue")),i},Ib=nt("passive,once,capture"),Pb=nt("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),Rb=nt("left,right"),_p=nt("onkeyup,onkeydown,onkeypress"),Nb=(e,t,n,i)=>{const s=[],r=[],o=[];for(let a=0;a<t.length;a++){const l=t[a].content;l==="native"&&Pi("COMPILER_V_ON_NATIVE",n)||Ib(l)?o.push(l):Rb(l)?je(e)?_p(e.content.toLowerCase())?s.push(l):r.push(l):(s.push(l),r.push(l)):Pb(l)?r.push(l):s.push(l)}return{keyModifiers:s,nonKeyModifiers:r,eventOptionModifiers:o}},kl=(e,t)=>je(e)&&e.content.toLowerCase()==="onclick"?ee(t,!0):e.type!==4?gt(["(",e,`) === "onClick" ? "${t}" : (`,e,")"]):e,Db=(e,t,n)=>hp(e,t,n,i=>{const{modifiers:s}=e;if(!s.length)return i;let{key:r,value:o}=i.props[0];const{keyModifiers:a,nonKeyModifiers:l,eventOptionModifiers:d}=Nb(r,s,n,e.loc);if(l.includes("right")&&(r=kl(r,"onContextmenu")),l.includes("middle")&&(r=kl(r,"onMouseup")),l.length&&(o=Ae(n.helper(yp),[o,JSON.stringify(l)])),a.length&&(!je(r)||_p(r.content.toLowerCase()))&&(o=Ae(n.helper(vp),[o,JSON.stringify(a)])),d.length){const c=d.map(vn).join("");r=je(r)?ee(`${r.content}${c}`,!0):gt(["(",r,`) + "${c}"`])}return{props:[_e(r,o)]}}),Ob=(e,t,n)=>{const{exp:i,loc:s}=e;return i||n.onError(tn(62,s)),{props:[],needRuntime:n.helper(kp)}},Mb=(e,t)=>{if(e.type===1&&e.tagType===1&&t.isBuiltInComponent(e.tag)===ua)return()=>{if(!e.children.length)return;Tp(e);const i=e.children[0];if(i.type===1)for(const s of i.props)s.type===7&&s.name==="show"&&e.props.push({type:6,name:"persisted",nameLoc:e.loc,value:void 0,loc:e.loc})}};function Tp(e){const t=e.children=e.children.filter(i=>!ca(i)),n=t[0];return t.length!==1||n.type===11||n.type===9&&n.branches.some(Tp)}const Lb=(e,t)=>{e.type===1&&e.tagType===0&&(e.tag==="script"||e.tag==="style")&&t.removeNode()},Fb=[_b,Mb],zb={cloak:vb,html:Eb,text:Cb,model:Ab,on:Db,show:Ob};function $b(e,t={}){return yb(e,Z({},Sb,t,{nodeTransforms:[Lb,...Fb,...t.nodeTransforms||[]],directiveTransforms:Z({},zb,t.directiveTransforms||{}),transformHoist:null}))}const Sl=Object.create(null);function Vb(e,t){if(!J(e))if(e.nodeType)e=e.innerHTML;else return De;const n=Bp(e,t),i=Sl[n];if(i)return i;if(e[0]==="#"){const a=document.querySelector(e);e=a?a.innerHTML:""}const s=Z({hoistStatic:!0,onError:void 0,onWarn:De},t);!s.isCustomElement&&typeof customElements<"u"&&(s.isCustomElement=a=>!!customElements.get(a));const{code:r}=$b(e,s),o=new Function("Vue",r)(Ug);return o._rc=!0,Sl[n]=o}ld(Vb);const Hb=`<view class="app-shell street-club {{screen === 'game' ? 'game-screen' : ''}}" style="padding-top:{{topInset}}px;">
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
`,jb=`page { background: #141612; color: #f4f3e9; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif; font-size: 28rpx; }
view, text, button, input, image { box-sizing: border-box; }
button { margin: 0; padding: 0; border-radius: 0; background: transparent; color: inherit; font-size: inherit; line-height: inherit; text-align: center; }
button::after { border: none; }
button[disabled] { opacity: .42; color: inherit; background: transparent; }
input { color: #f4f3e9; font-size: 28rpx; }
image { display: block; }
`,Bb=`.app-shell { min-height: 100vh; padding-bottom: 150rpx; }
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
`,Wb=`const E = require('../../utils/game-engine');
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
`,Ep=`const wheelPrompts = require('./wheel-prompts');
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
`,Cp=`// 用户提供的原始判定词条，保留编号和原文。167–197 尚未提供。
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
`,Ub=`module.exports = function createExtraGames(E, wx) {
  const words = require('./drawing-words');
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
`,Ap=`module.exports = {
  动物: ['长颈鹿', '大熊猫', '企鹅', '袋鼠', '鲨鱼', '章鱼', '骆驼', '螃蟹', '刺猬', '蝴蝶', '孔雀', '猫头鹰', '海豚', '蜗牛', '金鱼'],
  日常: ['雨伞', '电风扇', '牙刷', '热气球', '自行车', '冰淇淋', '汉堡包', '闹钟', '洗衣机', '耳机', '仙人掌', '吉他', '照相机', '望远镜', '西瓜'],
  动作: ['刷牙', '钓鱼', '跳绳', '滑雪', '打篮球', '踢足球', '做饭', '举重', '游泳', '放风筝', '滑滑梯', '荡秋千', '打鼓', '跳街舞', '打喷嚏'],
  场景: ['过山车', '摩天轮', '电影院', '动物园', '游乐场', '火山', '瀑布', '沙漠', '海边', '长城', '红绿灯', '斑马线', '飞机场', '音乐会', '露营']
};
`;function Ip(e=globalThis.crypto){if(typeof e?.randomUUID=="function")return e.randomUUID();if(typeof e?.getRandomValues!="function")throw new Error("当前浏览器不支持联机，请换个浏览器打开");const t=e.getRandomValues(new Uint8Array(16));t[6]=t[6]&15|64,t[8]=t[8]&63|128;const n=Array.from(t,i=>i.toString(16).padStart(2,"0")).join("");return`${n.slice(0,8)}-${n.slice(8,12)}-${n.slice(12,16)}-${n.slice(16,20)}-${n.slice(20)}`}const Kb="".replace(/\/$/,""),Us="nanrenbang-online-session-v1";function uo(){try{return JSON.parse(sessionStorage.getItem(Us)||"null")}catch{return null}}function _l(){try{return JSON.parse(localStorage.getItem(Us)||"null")}catch{return null}}function ti(e){for(const t of["sessionStorage","localStorage"])try{const n=window[t];e?n.setItem(Us,JSON.stringify(e)):n.removeItem(Us)}catch{}}class Pp{constructor(t,n){this.onRoom=t,this.onConnection=n,this.session=null,this.running=!1,this.generation=0,this.version=0}async request(t,{method:n="GET",body:i,session:s=this.session}={}){const r=await fetch(`${Kb}/api${t}`,{method:n,headers:{...i?{"Content-Type":"application/json"}:{},...s?{Authorization:`Bearer ${s.token}`,"X-Player-Id":s.playerId}:{}},...i?{body:JSON.stringify(i)}:{},cache:"no-store",signal:AbortSignal.timeout(12e3)});let o;try{o=await r.json()}catch{throw new Error("联机服务暂未连接，请稍后重试")}if(!r.ok){const a=new Error(o.error||"连接暂时中断，正在尝试重连");throw a.status=r.status,a}return o}receive(t){t&&t.version>=this.version&&(this.version=t.version,this.onRoom(t),this.onConnection("connected"))}async enter(t,n,i){const s=await this.request(t==="create"?"/rooms":`/rooms/${encodeURIComponent(i.trim().toUpperCase())}/join`,{method:"POST",body:{name:n},session:null});return this.stop(),this.session=s.session,this.version=0,ti(this.session),this.receive(s.room),this.start(),s.room}async resume(t){this.stop(),this.session=t,this.version=0;const n=await this.request(`/rooms/${t.code}/state`);return ti(t),this.receive(n.room),this.start(),n.room}start(){this.running=!0;const t=++this.generation;let n=0;const i=async()=>{if(!(!this.running||t!==this.generation)){try{if(Date.now()-n>11e3)await this.action("ping"),n=Date.now();else{const s=await this.request(`/rooms/${this.session.code}/state`);t===this.generation&&this.receive(s.room)}}catch(s){if(t!==this.generation)return;if(this.onConnection(s.status===401||s.status===404?"expired":"reconnecting",s.message),s.status===401||s.status===404){this.stop(),ti(null);return}}t===this.generation&&this.running&&(this.timer=setTimeout(i,document.hidden?2500:650))}};this.timer=setTimeout(i,650)}async action(t,n={}){if(!this.session)throw new Error("请先加入房间");const i=this.session,s={type:t,data:n,requestId:Ip()};let r;try{r=await this.request(`/rooms/${i.code}/actions`,{method:"POST",body:s,session:i})}catch(o){if(o.status)throw o;r=await this.request(`/rooms/${i.code}/actions`,{method:"POST",body:s,session:i})}if(this.session===i)return r.left?(this.stop(),this.session=null,ti(null),this.onRoom(null)):this.receive(r.room),r}forget(){this.stop(),this.session=null,ti(null),this.onRoom(null)}stop(){this.running=!1,this.generation++,clearTimeout(this.timer)}}const Gb="modulepreload",qb=function(e){return"/chen-yijie-website/nanrenbang/"+e},Tl={},Yb=function(t,n,i){let s=Promise.resolve();if(n&&n.length>0){let d=function(c){return Promise.all(c.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var o=d;document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=d(n.map(c=>{if(c=qb(c),c in Tl)return;Tl[c]=!0;const p=c.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${m}`))return;const h=document.createElement("link");if(h.rel=p?"stylesheet":Gb,p||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),p)return new Promise((v,x)=>{h.addEventListener("load",v),h.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})},El="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Cl=()=>Array.from(crypto.getRandomValues(new Uint8Array(24)),e=>e.toString(16).padStart(2,"0")).join(""),os=async e=>Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e))),t=>t.toString(16).padStart(2,"0")).join(""),Jb=e=>String(e||"").trim().toUpperCase();function Al(e,t){const{check:n,GameError:i,GAMES:s,apply:r,settle:o,view:a,message:l,secureInt:d}=t;function c(I){const C=String(I||"").trim().slice(0,12);return n(C&&!/[\u0000-\u001f\u007f]/.test(C),"请输入 1–12 个字的昵称"),C}function p(I){return{error:I instanceof i?I.message:"联机服务暂时繁忙，请稍后重试"}}async function m(I){n(Number(I.headers.get("content-length")||0)<=32768,"提交内容太长",413);const C=I.body?.getReader();if(!C)return{};let y=0;const f=new TextDecoder;let g="";for(;;){const b=await C.read();if(b.done)break;if(y+=b.value.byteLength,y>32768)throw await C.cancel(),new i("提交内容太长",413);g+=f.decode(b.value,{stream:!0})}g+=f.decode();try{const b=JSON.parse(g||"{}");return n(b&&typeof b=="object"&&!Array.isArray(b),"请求格式不正确"),b}catch(b){throw b instanceof i?b:new i("请求格式不正确")}}async function h(I,C){const y=await e.get(I);return n(y&&y.expiresAt>C&&y.players.length,"房间不存在或已过期，请重新创建",404),y}async function v(I,C){const y=C.headers.get("x-player-id"),f=C.headers.get("authorization")||"";n(y&&/^Bearer [a-f0-9]{48}$/.test(f),"连接身份已失效，请重新加入房间",401);const g=I.players.find(b=>b.id===y);return n(g&&g.tokenHash===await os(f.slice(7)),"连接身份已失效，请重新加入房间",401),y}async function x(I,C,y){for(let f=0;f<10;f++){const g=await h(I,y),b=g.version,O=await C(g);if(O?.unchanged)return{room:g,...O};if(g.version=b+1,g.updatedAt=y,await e.save(g,b))return{room:g,...O}}throw new i("房间正在同步，请稍后重试",409)}return async function(C){const y=new URL(C.url),f=Date.now();try{if(y.pathname==="/api/health"&&C.method==="GET")return Response.json({ok:!0,protocol:1,games:s,now:f});if(y.pathname==="/api/rooms"&&C.method==="POST"){const T=await m(C),k=c(T.name),S=Cl(),A=crypto.randomUUID(),N=await os(C.headers.get("cf-connecting-ip")||"local-development");for(let _=0;_<8;_++){const F=Array.from({length:6},()=>El[d(El.length)]).join(""),M={code:F,version:1,createdAt:f,updatedAt:f,expiresAt:f+720*60*1e3,creatorHash:N,hostId:A,selected:"dice",status:"lobby",settings:{diceCount:5,drawSeconds:90},game:null,players:[{id:A,name:k,tokenHash:await os(S),lastSeen:f,ready:!0,score:0}],messages:[],recentActions:[]};l(M,`${k} 创建了房间，等朋友一起加入。`,f);const W=await e.create(M);if(W==="rate-limit")throw new i("创建房间较频繁，稍后再来吧",429);if(W)return Response.json({session:{code:F,playerId:A,token:S},room:a(M,A,f)},{status:201})}throw new i("暂时没有分配到房间号，请再试一次",503)}const g=y.pathname.match(/^\/api\/rooms\/([A-Za-z0-9]{6})\/(join|state|actions)$/);n(g,"接口不存在",404);const b=Jb(g[1]),O=g[2];if(O==="join"&&C.method==="POST"){const T=await m(C),k=c(T.name),S=Cl(),A=crypto.randomUUID(),N=await os(S),_=await x(b,F=>{n(F.status==="lobby","游戏进行中，等房主回到大厅后再加入"),n(F.players.length<12,"房间已满，最多 12 位朋友"),n(!F.players.some(M=>M.name===k),"这个昵称已有人使用，换一个昵称吧"),F.players.push({id:A,name:k,tokenHash:N,ready:!1,score:0,lastSeen:f}),l(F,`${k} 加入了房间。`,f)},f);return Response.json({session:{code:b,playerId:A,token:S},room:a(_.room,A,f)})}if(O==="state"&&C.method==="GET"){let T=await h(b,f);const k=await v(T,C);return o(T,f)&&(T=(await x(b,A=>{if(!o(A,f))return{unchanged:!0}},f)).room),Response.json({room:a(T,k,f)})}if(O==="actions"&&C.method==="POST"){const T=await m(C);n(typeof T.requestId=="string"&&/^[\w-]{10,72}$/.test(T.requestId),"操作编号无效"),n(typeof T.type=="string"&&T.type.length<=40,"操作类型无效"),n(!T.data||typeof T.data=="object"&&!Array.isArray(T.data),"操作内容无效");const k=await h(b,f),S=await v(k,C),A=await x(b,N=>{const _=N.players.find(M=>M.id===S);n(_,"你已离开房间",401);const F=`${S}:${T.requestId}`;if(N.recentActions.includes(F))return{unchanged:!0};if(T.type==="ping"&&f-_.lastSeen<8e3&&!o(N,f))return{unchanged:!0};if(["ping","finger.hold","draw.stroke"].includes(T.type)||(f-(_.actionWindow||0)>1e3&&(_.actionWindow=f,_.actionCount=0),n((_.actionCount||0)<12,"操作太快，请稍等一会儿",429),_.actionCount=(_.actionCount||0)+1),T.type==="draw.stroke"||T.type==="finger.hold"&&T.data?.holding){const M=T.type==="draw.stroke"?"strokeAt":"holdAt";n(f-(_[M]||0)>=(M==="strokeAt"?65:200),"正在同步，稍等一下再操作",429),_[M]=f}r(N,S,T.type,T.data||{},f),N.recentActions.push(F),N.recentActions=N.recentActions.slice(-160)},f);return Response.json({room:A.room.players.some(N=>N.id===S)?a(A.room,S,f):null,left:!A.room.players.some(N=>N.id===S)})}throw new i("请求方式不支持",405)}catch(g){return g instanceof i||console.error("Room service:",g.message),Response.json(p(g),{status:g.status||500})}}}const Or="nanrenbang-phone-v1-",fo="nanrenbang-phone-host-v1:",Xe=()=>new Error("暂时无法与房主直连。请房主保持页面在前台，双方切换 Wi-Fi 或移动网络后重试"),ln=(e,t)=>Object.assign(new Error(e),{status:t}),as=e=>e==null?e:JSON.parse(JSON.stringify(e)),Xb=e=>new Promise(t=>setTimeout(t,e));class Il{constructor(t,n=null){this.storage=t,this.room=as(n)}async get(t){return this.room?.code===t?as(this.room):null}persist(){try{this.room&&this.storage?.setItem(fo+this.room.code,JSON.stringify(this.room))}catch{}}async create(t){return this.room?!1:(this.room=as(t),this.persist(),!0)}async save(t,n){return this.room?.code!==t.code||this.room.version!==n?!1:(this.room=as(t),this.persist(),!0)}clear(){try{this.room&&this.storage?.removeItem(fo+this.room.code)}catch{}this.room=null}}async function Zb(e){const{Peer:t}=await Yb(async()=>{const{Peer:n}=await import("./bundler-NHXfA-2r.js");return{Peer:n}},[]);return new t(e,{debug:0,secure:!0,config:{iceServers:[{urls:"stun:stun.cloudflare.com:3478"},{urls:"stun:stun.l.google.com:19302"}]}})}class Qb{constructor({engine:t,createPeer:n=Zb,storage:i,onEnded:s=()=>{},timeoutMs:r=16e3}={}){this.engine=t,this.createPeer=n,this.onEnded=s,this.timeoutMs=r;try{this.storage=i||sessionStorage}catch{this.storage=i}this.pending=new Map,this.channels=new Set,this.epoch=0,this.serial=0}async openPeer(t){const n=this.epoch,i=await this.createPeer(t);if(n!==this.epoch)throw i.destroy(),Xe();return this.peer=i,await new Promise((s,r)=>{let o=!1;const a=setTimeout(()=>l(Xe()),this.timeoutMs),l=d=>{o||(o=!0,clearTimeout(a),d?r(d):s())};i.on("open",()=>l()),i.on("error",d=>{o?d.type==="peer-unavailable"&&this.failPending(Xe()):l(Object.assign(Xe(),{type:d.type}))}),i.on("disconnected",()=>{clearTimeout(this.signalTimer),this.signalTimer=setTimeout(()=>{if(n===this.epoch&&!i.destroyed&&i.disconnected)try{i.reconnect()}catch{}},1500)})}).catch(s=>{throw i.destroy(),this.peer===i&&(this.peer=null),s}),i}async hostRequest(t,{method:n="GET",body:i,session:s=null}={}){const r={...i?{"Content-Type":"application/json"}:{},...s?{Authorization:"Bearer "+s.token,"X-Player-ID":s.playerId}:{}},o=await this.handle(new Request("https://phone-room.invalid/api"+t,{method:n,headers:r,...i?{body:JSON.stringify(i)}:{}})),a=await o.json();if(!o.ok)throw ln(a.error,o.status);return a}serve(t){t.on("connection",n=>{if(this.channels.size>=18){n.close();return}this.channels.add(n);let i=0,s=0,r=0;n.on("close",()=>this.channels.delete(n)),n.on("error",()=>{this.channels.delete(n),n.close()}),n.on("data",async o=>{if(!o||o.kind!=="rpc"||typeof o.id!="string"||o.id.length>80)return;const a=c=>{n.open&&n.send({kind:"reply",id:o.id,...c})};if(r>=8){a({error:"房间正在同步，请稍后重试",status:429});return}const l=Date.now();if(l-i>1e3&&(i=l,s=0),++s>40){a({error:"操作较快，请稍后再试",status:429});return}if(!new RegExp("^/rooms/"+this.code+"/(join|state|actions)$").test(o.path)||!["GET","POST"].includes(o.options?.method||"GET")){a({error:"接口不存在",status:404});return}if(new TextEncoder().encode(JSON.stringify(o)).byteLength>35e3){a({error:"提交内容太长",status:413});return}r++;try{a({payload:await this.hostRequest(o.path,o.options)})}catch(c){a({error:c.message,status:c.status||500})}finally{r--}})})}async create(t){this.close();for(let n=0;n<3;n++){this.store=new Il(this.storage),this.handle=Al(this.store,this.engine);const i=await this.hostRequest("/rooms",{method:"POST",body:{name:t}});this.code=i.session.code;try{const s=await this.openPeer(Or+this.code);return this.serve(s),this.hostSession=i.session,i.session={...i.session,transport:"peer",role:"host"},i}catch(s){if(this.store.clear(),s.type!=="unavailable-id"||n===2)throw s}}}async restoreHost(t){let n;try{n=JSON.parse(this.storage?.getItem(fo+t.code)||"null")}catch{}if(!n||n.hostId!==t.playerId||n.expiresAt<=Date.now())throw ln("房主的房间记录已过期，请重新创建",404);this.code=t.code,this.store=new Il(this.storage,n),this.handle=Al(this.store,this.engine);const i=await this.hostRequest(`/rooms/${this.code}/state`,{session:t});for(let s=0;s<5;s++)try{const r=await this.openPeer(Or+this.code);return this.serve(r),this.hostSession=t,i}catch(r){if(r.type!=="unavailable-id"||s===4)throw r;await Xb(1200)}}async connect(t){if(this.connection?.open&&this.code===t)return;if(this.connecting)return this.connecting;this.code=t;const n=this.epoch,i=this.connecting=(async()=>{if((!this.peer||this.peer.destroyed||this.peer.disconnected)&&(this.peer?.destroy(),await this.openPeer(void 0)),n!==this.epoch)throw Xe();const s=this.peer.connect(Or+t,{reliable:!0,serialization:"binary"});this.connection=s,s.on("data",r=>{if(r?.kind==="ended"){this.ended=!0,this.failPending(ln("房主已结束房间，请重新创建或加入",404)),this.onEnded("房主已结束房间，请重新创建或加入");return}if(r?.kind!=="reply")return;const o=this.pending.get(r.id);o&&(clearTimeout(o.timer),this.pending.delete(r.id),r.error?o.reject(ln(r.error,r.status)):o.resolve(r.payload))}),s.on("close",()=>{this.connection===s&&(this.connection=null),this.failPending(Xe())}),s.on("error",()=>this.failPending(Xe())),await new Promise((r,o)=>{let a=!1;const l=setTimeout(()=>d(Xe()),this.timeoutMs),d=c=>{a||(a=!0,clearTimeout(l),c?o(c):r())};s.on("open",()=>d()),s.on("close",()=>d(Xe())),s.on("error",()=>d(Xe()))}).catch(r=>{throw s.close(),this.connection===s&&(this.connection=null),r})})();try{await i}finally{this.connecting===i&&(this.connecting=null)}}async request(t,n={}){if(t==="/rooms"&&n.method==="POST")return this.create(n.body?.name);const i=t.match(/^\/rooms\/([A-Z0-9]{6})\/(join|state|actions)$/)?.[1];if(!i)throw ln("房间号格式不正确",400);if(n.session?.transport&&n.session.transport!=="peer")throw ln("请重新创建手机直连房间",401);if(n.session?.role==="host"&&!this.hostSession)return this.restoreHost(n.session);if(this.hostSession){const o=await this.hostRequest(t,n);if(o.left){for(const l of this.channels)l.open&&l.send({kind:"ended"});this.store.clear();const a=this.epoch;setTimeout(()=>{a===this.epoch&&this.close()},100)}return o}if(this.ended)throw ln("房主已结束房间，请重新创建或加入",404);await this.connect(i);const s=`phone-rpc-${++this.serial}-${Date.now()}`,r=await new Promise((o,a)=>{const l=setTimeout(()=>{this.pending.delete(s),a(Xe())},this.timeoutMs);this.pending.set(s,{resolve:o,reject:a,timer:l});try{this.connection.send({kind:"rpc",id:s,path:t,options:n})}catch{clearTimeout(l),this.pending.delete(s),a(Xe())}});if(r.session&&(r.session={...r.session,transport:"peer",role:"guest"}),r.left){const o=this.epoch;setTimeout(()=>{o===this.epoch&&this.close()},100)}return r}failPending(t){for(const n of this.pending.values())clearTimeout(n.timer),n.reject(t);this.pending.clear()}close(){this.epoch++,clearTimeout(this.signalTimer),this.ended=!1,this.connecting=null,this.failPending(Xe()),this.connection?.close(),this.connection=null;for(const t of this.channels)t.close();this.channels.clear(),this.peer?.destroy(),this.peer=null,this.hostSession=null,this.handle=null,this.store=null}}const ew=`const E = require('../miniprogram/utils/game-engine');
const WORDS = require('../miniprogram/utils/drawing-words');

const GAMES = E.games.map(({ id, name, min, art, desc }) => ({ id, name, min, art, desc }));
const DRAW_WORDS = Object.entries(WORDS).flatMap(([category, words]) => words.map(word => ({ category, word })));
const COLORS = ['#182016', '#f04e42', '#3976c6', '#388d48', '#a46bc0', '#f3f0e4'];
class GameError extends Error { constructor(message, status = 400) { super(message); this.status = status; } }
function check(condition, message, status) { if (!condition) throw new GameError(message, status); }
function secureInt(max) {
  check(Number.isInteger(max) && max > 0 && max <= 4294967296, '随机范围无效');
  const ceiling = 4294967296 - (4294967296 % max); const value = new Uint32Array(1);
  do { crypto.getRandomValues(value); } while (value[0] >= ceiling);
  return value[0] % max;
}
const rng = () => secureInt(4294967296) / 4294967296;
const pick = items => items[secureInt(items.length)];
const shuffled = items => E.shuffle(items, rng);
const player = (r, id) => r.players.find(p => p.id === id);
const host = (r, id) => check(r.hostId === id, '只有房主可以进行这个操作', 403);
const name = (r, id) => player(r, id)?.name || '一位朋友';
const current = r => r.players[r.game.turn % r.players.length];
const turn = (r, id) => check(current(r)?.id === id, '还没轮到你，请等当前玩家操作', 403);
function message(r, text, now, from = '') {
  r.messages.push({ id: crypto.randomUUID(), text, from, at: now }); r.messages = r.messages.slice(-40);
}
function nextTurn(r) { r.game.turn = (r.game.turn + 1) % r.players.length; r.game.round++; }
function bagDraw(g, key, values) {
  if (!g.bags[key]?.length) g.bags[key] = shuffled(values);
  return g.bags[key].pop();
}
function startDrawingRound(r, now) {
  const g = r.game; const item = bagDraw(g, 'drawing', DRAW_WORDS);
  g.word = item.word; g.category = item.category; g.phase = 'word'; g.strokes = []; g.endAt = 0;
  g.guesser = null; g.outcome = ''; g.guessAt = {}; g.pointCount = 0; g.drawerId = current(r).id;
}
function startShark(g) { g.trap = secureInt(12); g.pressed = []; g.loserId = null; g.phase = 'playing'; }
function startGame(r, id, gameId, now) {
  host(r, id); check(r.status === 'lobby', '请先返回房间大厅');
  const info = GAMES.find(g => g.id === gameId); check(info, '请选择游戏');
  check(r.players.length >= info.min, \`这个游戏至少需要 \${info.min} 人\`);
  check(r.players.every(p => p.ready), '还有朋友没有准备好');
  check(r.players.every(p => now - p.lastSeen < 45000), '有朋友暂时掉线，请等待重连或移出房间');
  r.status = 'playing'; r.selected = gameId;
  r.players.forEach(p => { p.score = 0; });
  r.game = { id: gameId, instance: crypto.randomUUID(), phase: 'playing', round: 1, turn: 0, bags: {}, seen: [], rotation: 0 };
  const g = r.game;
  if (gameId === 'dice') { g.phase = 'rolling'; g.dice = {}; }
  if (gameId === 'truth') { g.phase = 'choose'; g.prompt = ''; }
  if (gameId === 'wheel' || gameId === 'promptwheel') { g.result = null; g.revealAt = 0; g.matches = {}; }
  if (gameId === 'promptwheel') { g.filter = 'all'; g.candidates = E.promptCandidates([], 'all', rng); }
  if (gameId === 'king') { g.phase = 'secret'; g.roles = E.dealKing(r.players, rng).map(p => ({ id: p.id, role: p.role })); g.ack = []; g.command = ''; }
  if (gameId === 'seven') { g.number = 1; g.streak = 0; g.feedback = ''; g.phase = 'answer'; }
  if (gameId === 'undercover') { g.phase = 'secret'; g.roles = E.dealUndercover(r.players, rng).map(({ id, role, word, alive }) => ({ id, role, word, alive })); g.ack = []; g.votes = {}; g.eliminated = null; g.victory = null; }
  if (gameId === 'draw') startDrawingRound(r, now);
  if (gameId === 'shark') startShark(g);
  if (gameId === 'finger') { g.holds = {}; g.holdIds = ''; g.until = 0; g.winnerId = null; }
  message(r, \`开场了：\${info.name}\`, now);
}
function settle(r, now) {
  const g = r.game; if (r.status !== 'playing' || !g) return false;
  let changed = false;
  if (g.id === 'draw' && g.phase === 'drawing' && now >= g.endAt) { g.phase = 'result'; g.outcome = 'timeout'; changed = true; }
  if (g.id === 'finger' && !g.winnerId) {
    for (const [id, at] of Object.entries(g.holds)) if (now - at > 2200 || !player(r, id)) { delete g.holds[id]; changed = true; }
    const ids = Object.keys(g.holds).sort().join(',');
    if (ids !== g.holdIds) { g.holdIds = ids; g.until = Object.keys(g.holds).length >= 2 ? now + 3000 : 0; changed = true; }
    if (g.until && now >= g.until) { g.winnerId = pick(Object.keys(g.holds)); g.until = 0; changed = true; }
  }
  return changed;
}
function apply(r, actor, type, data = {}, now = Date.now()) {
  const me = player(r, actor); check(me, '你已离开这个房间，请重新加入', 401);
  settle(r, now);
  if (type === 'ping') { me.lastSeen = now; return; }
  me.lastSeen = now;
  if (type === 'ready') { check(r.status === 'lobby', '游戏已开始'); me.ready = !!data.ready; return; }
  if (type === 'chat') {
    const text = String(data.text || '').trim().slice(0, 160); check(text, '先写一句话吧');
    check(now - (me.chatAt || 0) >= 500, '说慢一点，等一下再发'); me.chatAt = now; message(r, text, now, me.id); return;
  }
  if (type === 'select') {
    host(r, actor); check(r.status === 'lobby', '请先结束当前游戏'); check(GAMES.some(g => g.id === data.gameId), '游戏不存在');
    r.selected = data.gameId; r.players.forEach(p => { p.ready = p.id === r.hostId; }); return;
  }
  if (type === 'settings') {
    host(r, actor); check(r.status === 'lobby', '游戏中不能更改设置');
    if (data.diceCount !== undefined) { check([1, 3, 5].includes(data.diceCount), '骰子数量无效'); r.settings.diceCount = data.diceCount; }
    if (data.drawSeconds !== undefined) { check([60, 90, 120].includes(data.drawSeconds), '时长无效'); r.settings.drawSeconds = data.drawSeconds; }
    r.players.forEach(p => { p.ready = p.id === r.hostId; }); return;
  }
  if (type === 'start') { startGame(r, actor, r.selected, now); return; }
  if (type === 'lobby') { host(r, actor); r.status = 'lobby'; r.game = null; r.players.forEach(p => { p.ready = p.id === r.hostId; }); message(r, '回到房间大厅，可以换个游戏继续玩。', now); return; }
  if (type === 'kick' || type === 'leave') {
    if (type === 'kick') { host(r, actor); check(r.status === 'lobby', '游戏中请先返回房间大厅'); check(data.playerId !== actor, '不能移出自己'); }
    const target = type === 'leave' ? actor : data.playerId; check(player(r, target), '玩家已离开');
    const leavingName = name(r, target); r.players = r.players.filter(p => p.id !== target);
    if (r.hostId === target) r.hostId = r.players[0]?.id || '';
    if (r.status === 'playing') { r.status = 'lobby'; r.game = null; }
    r.players.forEach(p => { p.ready = p.id === r.hostId; }); message(r, \`\${leavingName} 离开了房间。\`, now); return;
  }
  check(r.status === 'playing' && r.game, '请先开始一局');
  const g = r.game;
  // Stale controls from a previous game or round must not affect the new one.
  check(data.gameId === g.id && data.instance === g.instance && data.round === g.round, '这一轮已经变化，页面已刷新，请重新操作', 409);
  if (type === 'again') {
    host(r, actor); const gameId = g.id;
    r.status = 'lobby'; r.players.forEach(p => { p.ready = true; }); startGame(r, actor, gameId, now); return;
  }
  if (g.id === 'dice') {
    check(g.phase === 'rolling', '这一轮已经统一开盅');
    const dice = g.dice[actor];
    if (type === 'dice.roll') {
      check(!dice?.ready, '已经准备开盅，等待其他朋友');
      const held = dice?.held || [];
      g.dice[actor] = { values: Array.from({ length: r.settings.diceCount }, (_, i) => held[i] ? dice.values[i] : secureInt(6) + 1), held, ready: false };
    } else if (type === 'dice.hold') {
      check(dice && !dice.ready && Number.isInteger(data.index) && data.index >= 0 && data.index < dice.values.length, '骰子不可锁定');
      dice.held[data.index] = !!data.held;
    } else if (type === 'dice.ready') {
      check(dice, '请先摇一盅'); dice.ready = true;
      if (r.players.every(p => g.dice[p.id]?.ready)) { g.phase = 'result'; const highest = Math.max(...Object.values(g.dice).map(d => d.values.reduce((a, b) => a + b, 0))); g.winners = r.players.filter(p => g.dice[p.id].values.reduce((a, b) => a + b, 0) === highest).map(p => p.id); }
    } else throw new GameError('当前操作不适用');
    return;
  }
  if (g.id === 'truth') {
    if (type === 'truth.draw') { turn(r, actor); check(g.phase === 'choose', '本轮已有题目'); check(['truth', 'dare'].includes(data.kind), '题目类型无效'); g.kind = data.kind; g.prompt = bagDraw(g, data.kind, data.kind === 'truth' ? E.truths : E.dares); g.phase = 'prompt'; }
    else if (type === 'truth.next') { check(current(r).id === actor || r.hostId === actor, '请等当前玩家完成', 403); nextTurn(r); g.phase = 'choose'; g.prompt = ''; }
    else throw new GameError('当前操作不适用'); return;
  }
  if (g.id === 'wheel' || g.id === 'promptwheel') {
    if (type === 'wheel.filter') {
      host(r, actor); check(g.id === 'promptwheel' && now >= g.revealAt, '请等转盘停下来'); check(E.promptFilters.some(f => f.id === data.filter), '分类不存在');
      g.filter = data.filter; g.candidates = E.promptCandidates(g.seen, data.filter, rng); g.result = null; g.matches = {}; g.revealAt = 0;
    } else if (type === 'wheel.spin') {
      host(r, actor); check(now >= g.revealAt, '转盘还在转动');
      if (g.id === 'promptwheel') {
        check(E.promptFilters.some(f => f.id === data.filter), '分类不存在');
        const candidates = !g.result && g.filter === data.filter && g.candidates?.length ? g.candidates : E.promptCandidates(g.seen, data.filter, rng); check(candidates.length, '这个分类已抽完，换个分类或重新开局');
        const index = secureInt(candidates.length); g.result = candidates[index]; g.candidates = candidates; g.seen.push(g.result.id); g.rotation = E.wheelLanding(candidates.length, index, g.rotation); g.filter = data.filter;
      } else { const index = secureInt(r.players.length); g.result = r.players[index].id; g.rotation = E.wheelLanding(r.players.length, index, g.rotation); }
      g.matches = {}; g.revealAt = now + 2000;
    } else if (type === 'wheel.match') {
      check(g.id === 'promptwheel' && g.result && now >= g.revealAt && data.promptId === g.result.id, '请等本次结果揭晓'); g.matches[actor] = !!data.matches;
    } else throw new GameError('当前操作不适用'); return;
  }
  if (g.id === 'king' || g.id === 'undercover') {
    const role = g.roles.find(p => p.id === actor);
    if (type === 'secret.ack') {
      check(g.phase === 'secret', '看牌阶段已经结束'); if (!g.ack.includes(actor)) g.ack.push(actor);
      if (g.ack.length === r.players.length) g.phase = g.id === 'king' ? 'command' : 'discussion';
    } else if (g.id === 'king' && type === 'king.command') {
      check(g.phase === 'command' && role.role === 'KING', '本轮由国王发令', 403); g.command = E.kingTask(r.players.length, rng);
    } else if (g.id === 'king' && type === 'king.next') {
      check(g.phase === 'command' && (role.role === 'KING' || r.hostId === actor), '请等国王操作', 403);
      g.round++; g.roles = E.dealKing(r.players, rng).map(p => ({ id: p.id, role: p.role })); g.ack = []; g.command = ''; g.phase = 'secret';
    } else if (g.id === 'undercover' && type === 'undercover.vote') {
      check(g.phase === 'discussion' && role.alive, '本轮不能投票'); check(g.roles.some(p => p.id === data.targetId && p.alive), '请选择仍在场的玩家'); check(!g.votes[actor], '投票已提交，不能重复投票');
      g.votes[actor] = data.targetId;
      const alive = g.roles.filter(p => p.alive);
      if (Object.keys(g.votes).length === alive.length) {
        const counts = {}; Object.values(g.votes).forEach(id => { counts[id] = (counts[id] || 0) + 1; });
        const max = Math.max(...Object.values(counts)); const top = Object.keys(counts).filter(id => counts[id] === max);
        g.eliminated = null;
        if (top.length === 1) { const out = g.roles.find(p => p.id === top[0]); out.alive = false; g.eliminated = { id: out.id, role: out.role }; }
        g.victory = E.winner(g.roles); g.phase = g.victory ? 'result' : 'vote-result';
      }
    } else if (g.id === 'undercover' && type === 'undercover.next') {
      host(r, actor); check(g.phase === 'vote-result', '请先完成投票'); g.round++; g.phase = 'discussion'; g.votes = {}; g.eliminated = null;
    } else throw new GameError('当前操作不适用'); return;
  }
  if (g.id === 'seven') {
    if (type === 'seven.answer') {
      turn(r, actor); check(g.phase === 'answer', '请先确认上一题'); check(typeof data.pass === 'boolean', '操作无效');
      const correct = E.isSeven(g.number) === data.pass; g.feedback = \`\${name(r, actor)}：\${correct ? '答对了' : '答错了'}。\${E.sevenReason(g.number)}\`;
      if (correct) { me.score++; g.streak++; g.number++; nextTurn(r); } else { g.phase = 'feedback'; g.streak = 0; }
    } else if (type === 'seven.next') { check(current(r).id === actor || r.hostId === actor, '请等当前玩家确认', 403); check(g.phase === 'feedback', '当前可直接答题'); g.phase = 'answer'; g.number++; nextTurn(r); }
    else throw new GameError('当前操作不适用'); return;
  }
  if (g.id === 'shark') {
    if (type === 'shark.press') {
      turn(r, actor); check(g.phase === 'playing', '这局已经结束'); check(Number.isInteger(data.tooth) && data.tooth >= 0 && data.tooth < 12 && !g.pressed.includes(data.tooth), '请选择尚未按过的牙齿');
      g.pressed.push(data.tooth);
      if (data.tooth === g.trap) { g.loserId = actor; g.phase = 'result'; } else nextTurn(r);
    } else if (type === 'shark.next') { host(r, actor); check(g.phase === 'result', '这一局还没结束'); nextTurn(r); startShark(g); }
    else throw new GameError('当前操作不适用'); return;
  }
  if (g.id === 'finger') {
    if (type === 'finger.hold') {
      check(typeof data.holding === 'boolean', '按住状态无效');
      // A final in-flight heartbeat can arrive just after the draw. It is harmless.
      if (g.winnerId) return;
      if (data.holding) g.holds[actor] = now; else delete g.holds[actor]; settle(r, now);
    } else if (type === 'finger.next') { host(r, actor); check(g.winnerId, '请先完成这一轮'); g.round++; g.holds = {}; g.holdIds = ''; g.until = 0; g.winnerId = null; }
    else throw new GameError('当前操作不适用'); return;
  }
  if (g.id === 'draw') {
    const drawer = actor === g.drawerId;
    if (type === 'draw.start') { check(drawer && g.phase === 'word', '请等本轮画手开始', 403); g.phase = 'drawing'; g.endAt = now + r.settings.drawSeconds * 1000; }
    else if (type === 'draw.change') { check(drawer && g.phase === 'word', '当前不能换题', 403); startDrawingRound(r, now); }
    else if (type === 'draw.stroke') {
      check(drawer && g.phase === 'drawing', '只有本轮画手可以画画', 403);
      check(typeof data.strokeId === 'string' && /^[a-zA-Z0-9-]{1,64}$/.test(data.strokeId), '笔画编号无效');
      check(COLORS.includes(data.color) && [3, 5, 10, 22].includes(data.width), '画笔无效');
      check(Array.isArray(data.points) && data.points.length > 0 && data.points.length <= 120, '笔画过长');
      check(data.points.every(p => Array.isArray(p) && p.length === 2 && p.every(v => typeof v === 'number' && Number.isFinite(v) && v >= 0 && v <= 1)), '笔画坐标无效');
      check(g.pointCount + data.points.length <= 10000, '画板内容较多，可以撤销或清空后继续');
      let stroke = g.strokes.find(s => s.id === data.strokeId);
      if (!stroke) { check(g.strokes.length < 500, '笔画过多，请清空后继续'); stroke = { id: data.strokeId, color: data.color, width: data.width, points: [] }; g.strokes.push(stroke); }
      check(stroke.color === data.color && stroke.width === data.width, '一笔中不能改变画笔'); stroke.points.push(...data.points); g.pointCount += data.points.length;
    } else if (type === 'draw.undo' || type === 'draw.clear') {
      check(drawer && g.phase === 'drawing', '只有画手可以修改画板', 403);
      if (type === 'draw.clear') { g.strokes = []; g.pointCount = 0; }
      else { const stroke = g.strokes.pop(); g.pointCount -= stroke?.points.length || 0; }
    } else if (type === 'draw.guess') {
      check(!drawer && g.phase === 'drawing', '现在不能提交答案'); const answer = String(data.answer || '').normalize('NFKC').trim().slice(0, 40); check(answer, '先输入答案');
      check(now - (g.guessAt[actor] || 0) > 500, '等一下再猜'); g.guessAt[actor] = now;
      if (answer.replace(/\\s/g, '').toLowerCase() === g.word.replace(/\\s/g, '').toLowerCase()) {
        g.guesser = actor; g.phase = 'result'; g.outcome = 'guessed'; me.score++; player(r, g.drawerId).score++; message(r, \`\${me.name} 猜中了！\`, now);
      } else message(r, \`猜：\${answer}\`, now, actor);
    } else if (type === 'draw.skip') { check(drawer && g.phase === 'drawing', '只有画手可以跳过', 403); g.phase = 'result'; g.outcome = 'skipped'; }
    else if (type === 'draw.next') { check(drawer || actor === r.hostId, '请等画手操作', 403); check(g.phase === 'result', '这一轮还没结束'); nextTurn(r); startDrawingRound(r, now); }
    else throw new GameError('当前操作不适用'); return;
  }
  throw new GameError('这个操作暂不可用');
}

// Deliberate projection: secrets and auth credentials never share a public object.
function view(r, actor, now = Date.now()) {
  const me = player(r, actor); check(me, '你已离开房间', 401);
  const result = {
    code: r.code, version: r.version, hostId: r.hostId, me: actor, status: r.status, selected: r.selected,
    settings: r.settings, serverNow: now, expiresAt: r.expiresAt,
    players: r.players.map(({ id, name, ready, lastSeen, score }) => ({ id, name, ready, online: now - lastSeen < 45000, score })),
    messages: r.messages, game: null
  };
  if (r.status !== 'playing') return result;
  const g = r.game; const out = { id: g.id, instance: g.instance, phase: g.phase, round: g.round, currentId: current(r).id };
  if (g.id === 'dice') {
    out.ownDice = g.dice[actor] || null;
    out.progress = r.players.map(p => ({ id: p.id, rolled: !!g.dice[p.id], ready: !!g.dice[p.id]?.ready }));
    if (g.phase === 'result') { out.results = r.players.map(p => ({ id: p.id, values: g.dice[p.id].values, total: g.dice[p.id].values.reduce((a, b) => a + b, 0) })); out.winners = g.winners; }
  }
  if (g.id === 'truth') Object.assign(out, { prompt: g.prompt, kind: g.kind });
  if (g.id === 'wheel' || g.id === 'promptwheel') Object.assign(out, { rotation: g.rotation, revealAt: g.revealAt, result: now >= g.revealAt ? g.result : null, candidates: g.candidates || [], matches: now >= g.revealAt ? g.matches : {}, remaining: E.promptPool(g.seen, g.filter || 'all').length, filter: g.filter || 'all' });
  if (g.id === 'king') {
    out.ownSecret = g.roles.find(p => p.id === actor)?.role; out.acknowledged = g.ack.includes(actor); out.ackCount = g.ack.length; out.command = g.command;
    if (g.phase === 'command') out.kingId = g.roles.find(p => p.role === 'KING').id;
  }
  if (g.id === 'undercover') {
    const own = g.roles.find(p => p.id === actor);
    Object.assign(out, { ownWord: own.word, acknowledged: g.ack.includes(actor), ackCount: g.ack.length, alive: g.roles.filter(p => p.alive).map(p => p.id), ownVote: g.votes[actor] || null, voteCount: Object.keys(g.votes).length, eliminated: g.eliminated, victory: g.victory });
    if (g.phase === 'result') out.revealed = g.roles;
  }
  if (g.id === 'seven') Object.assign(out, { number: g.number, streak: g.streak, feedback: g.feedback });
  if (g.id === 'shark') Object.assign(out, { pressed: g.pressed, loserId: g.loserId });
  if (g.id === 'finger') Object.assign(out, { held: Object.keys(g.holds).filter(id => now - g.holds[id] <= 2200), until: g.until, winnerId: g.winnerId });
  if (g.id === 'draw') {
    Object.assign(out, { drawerId: g.drawerId, category: g.category, wordLength: [...g.word].length, endAt: g.endAt, strokes: g.strokes, guesser: g.guesser, outcome: g.outcome });
    if (actor === g.drawerId || g.phase === 'result') out.word = g.word;
  }
  result.game = out; return result;
}
module.exports = { GAMES, COLORS, GameError, check, secureInt, apply, settle, view, message };
`;function Rp(e){return e.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"')}function ni(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function ho(e){return Rp(e).replace(/^\{\{([\s\S]*)\}\}$/,"$1")}function tw(e){return Rp(e).split(/(\{\{[\s\S]*?\}\})/g).filter(Boolean).map(n=>n.startsWith("{{")?`(${ho(n)})`:JSON.stringify(n)).join(" + ")}function nw(e){const t={view:"div",text:"span",image:"img",block:"template"};return e.replace(/<([a-z][\w-]*)((?:"[^"]*"|'[^']*'|[^'">])*)>/g,(n,i,s)=>{const r=[...s.matchAll(/([\w:-]+)(?:="([^"]*)")?/g)].map(c=>[c[1],c[2]]),o=c=>r.find(p=>p[0]===c)?.[1],a=o("wx:for-item")||"item",l=o("wx:for-index")||"index",d=[];for(const[c,p]of r)if(!(c==="wx:for-item"||c==="wx:for-index"||c==="mode"))if(c==="wx:for")d.push(`v-for="${ni(`(${a}, ${l}) in (${ho(p)})`)}"`);else if(c==="wx:key")d.push(`:key="${ni(p==="*this"?a:p==="index"?l:`${a}.${p}`)}"`);else if(c==="wx:if"||c==="wx:elif")d.push(`${c==="wx:if"?"v-if":"v-else-if"}="${ni(ho(p))}"`);else if(c==="wx:else")d.push("v-else");else if(c==="bindtap"||c==="catchtap")d.push(`@click${c==="catchtap"?".stop":""}="${p}"`);else if(c==="bindinput")d.push(`@input="${p}({ currentTarget: $event.currentTarget, detail: { value: $event.target.value } })"`);else if(/^(bind|catch)touch(start|move|end|cancel)$/.test(c)){const m={start:"pointerdown",move:"pointermove",end:"pointerup",cancel:"pointercancel"}[c.match(/touch(.*)$/)[1]];d.push(`@${m}${c.startsWith("catch")?".prevent":""}="pointerSurface($event, '${p}')"`)}else p&&p.includes("{{")?d.push(`:${c}="${ni(tw(p))}"`):d.push(p===void 0?c:`${c}="${ni(p)}"`);return`<${t[i]||i} ${d.join(" ")}>`}).replace(/<\/([\w-]+)>/g,(n,i)=>["image","input"].includes(i)?"":`</${t[i]||i}>`)}function iw(e){const t={page:"body",view:"div",text:"span",image:"img"};return e.replace(/(^|[{}])([^{}]+)\{/g,(n,i,s)=>{for(const[r,o]of Object.entries(t))s=s.replace(new RegExp(`(?<![\\w-])${r}(?![\\w-])`,"g"),o);return`${i}${s}{`}).replace(/(-?\d*\.?\d+)rpx/g,"calc(var(--rpx) * $1)")}function rn(e,t={}){const n={exports:{}};return new Function("module","exports","require",e)(n,n.exports,i=>{if(!(i in t))throw new Error(`Unmapped preview module: ${i}`);return t[i]}),n.exports}function Np(e,t="/"){const n=t.endsWith("/")?t:`${t}/`;return e.replace(/\/assets\//g,`${n}assets/`)}const sw=rn(Ep,{"./wheel-prompts":rn(Cp)}),rw=rn(ew,{"../miniprogram/utils/game-engine":sw,"../miniprogram/utils/drawing-words":rn(Ap)});class ow extends Pp{constructor(t,n){super(t,n),this.transport=new Qb({engine:rw,onEnded:i=>{this.stop(),this.onConnection("expired",i)}})}request(t,n={}){return this.transport.request(t,{...n,session:n.session===void 0?this.session:n.session})}async enter(t,n,i){return this.stop(),this.transport.close(),super.enter(t,n,i)}async resume(t){if(t.transport!=="peer")throw Object.assign(new Error("已升级为手机直连，请重新创建或加入房间"),{status:401});return super.resume(t)}forget(){super.forget(),this.transport.close()}dispose(){this.stop(),this.transport.close()}}const aw={props:{strokes:Array,canDraw:Boolean,roundKey:String,color:String,penWidth:Number,sendStroke:Function},data:()=>({active:null,queued:[],shadows:{},sending:!1,sentAt:0,disposed:!1}),mounted(){this.resizeObserver=new ResizeObserver(()=>this.paint()),this.resizeObserver.observe(this.$refs.board),this.paint()},beforeUnmount(){this.disposed=!0,clearTimeout(this.flushTimer),this.resizeObserver?.disconnect(),this.active=null,this.queued=[]},watch:{strokes:{deep:!0,handler(){this.paint()}},roundKey(){this.active=null,this.shadows={},this.queued=[],jt(()=>this.paint())},canDraw(e){e||(this.end(),this.queued=[])}},methods:{position(e){const t=this.$refs.board.getBoundingClientRect();return[Math.max(0,Math.min(1,(e.clientX-t.left)/t.width)),Math.max(0,Math.min(1,(e.clientY-t.top)/t.height))].map(n=>Math.round(n*1e4)/1e4)},start(e){!this.canDraw||this.active||(e.preventDefault(),this.$refs.board.setPointerCapture(e.pointerId),this.active={id:Ip(),color:this.color,width:this.penWidth,points:[this.position(e)],sent:0,pointer:e.pointerId},this.shadows[this.active.id]=this.active,this.paint(),this.flushTimer=setTimeout(()=>this.flush(),140))},move(e){if(!this.active||e.pointerId!==this.active.pointer)return;e.preventDefault();const t=this.position(e),n=this.active.points.at(-1);Math.hypot(t[0]-n[0],t[1]-n[1])<.0025||(this.active.points.push(t),this.paint(),this.active.points.length-this.active.sent>=45&&this.flush())},end(e){!this.active||e&&e.pointerId!==this.active.pointer||(this.flush(),this.active=null,clearTimeout(this.flushTimer))},flush(){clearTimeout(this.flushTimer);const e=this.active;if(e&&e.points.length>e.sent){const t=e.points.slice(e.sent,e.sent+100);e.sent+=t.length,this.queued.push({strokeId:e.id,color:e.color,width:e.width,points:t,roundKey:this.roundKey})}this.drain(),this.active&&(this.flushTimer=setTimeout(()=>this.flush(),140))},async drain(){if(!this.sending){for(this.sending=!0;this.queued.length;){const e=this.queued.shift();if(e.roundKey!==this.roundKey||!this.canDraw)continue;const t=Math.max(0,80-(Date.now()-this.sentAt));if(t&&await new Promise(n=>setTimeout(n,t)),!(this.disposed||e.roundKey!==this.roundKey||!this.canDraw)){this.sentAt=Date.now();try{await this.sendStroke(e)}catch{this.queued=[],this.active=null,this.shadows={},this.paint();break}}}this.sending=!1}},paint(){const e=this.$refs.board;if(!e)return;const t=e.getBoundingClientRect();if(!t.width)return;const n=window.devicePixelRatio||1;(e.width!==Math.round(t.width*n)||e.height!==Math.round(t.height*n))&&(e.width=Math.round(t.width*n),e.height=Math.round(t.height*n));const i=e.getContext("2d");i.setTransform(n,0,0,n,0,0),i.fillStyle="#f3f0e4",i.fillRect(0,0,t.width,t.height);const s=[...this.strokes||[]];for(const[r,o]of Object.entries(this.shadows)){const a=s.findIndex(l=>l.id===r);a>=0&&s[a].points.length>=o.points.length?this.active?.id!==r&&delete this.shadows[r]:a>=0?s[a]=o:s.push(o)}for(const r of s){if(!r.points.length)continue;i.strokeStyle=r.color,i.fillStyle=r.color,i.lineWidth=r.width*t.width/600,i.lineCap="round",i.lineJoin="round",i.beginPath();const[o,a]=r.points[0];if(r.points.length===1)i.arc(o*t.width,a*t.height,i.lineWidth/2,0,Math.PI*2),i.fill();else{i.moveTo(o*t.width,a*t.height);for(const[l,d]of r.points.slice(1))i.lineTo(l*t.width,d*t.height);i.stroke()}}}},template:`<canvas ref="board" class="online-drawing-board" :class="{ 'can-draw': canDraw }" :aria-label="canDraw ? '在线画板，在这里画画' : '实时同步的画板'" @pointerdown="start" @pointermove="move" @pointerup="end" @pointercancel="end" @lostpointercapture="end"></canvas>`},lw={components:{OnlineCanvas:aw},props:{games:Array,assetBase:String},data(){return{peerMode:!0,room:null,name:"",joinCode:new URL(location.href).searchParams.get("room")?.toUpperCase()||"",error:"",notice:"",busy:!1,connection:"idle",previous:_l(),now:Date.now(),offset:0,secretVisible:!1,diceVisible:!1,rolling:!1,filter:"all",chat:"",answer:"",shareLink:"",penColor:"#182016",penWidth:5,holding:!1,confirmLeave:!1,colors:[{value:"#182016",label:"黑色"},{value:"#f04e42",label:"红色"},{value:"#3976c6",label:"蓝色"},{value:"#388d48",label:"绿色"},{value:"#a46bc0",label:"紫色"}],filters:[{id:"all",name:"全部词条"},{id:"today",name:"今日状态"},{id:"social",name:"微信社交"},{id:"life",name:"生活近况"},{id:"phone",name:"手机习惯"}]}},computed:{game(){return this.room?.game},me(){return this.room?.players.find(e=>e.id===this.room.me)},isHost(){return this.room&&this.room.me===this.room.hostId},selected(){return this.games.find(e=>e.id===this.room?.selected)},isTurn(){return this.game?.currentId===this.room?.me},readyCount(){return this.room?.players.filter(e=>e.ready).length||0},canStart(){return this.isHost&&this.room.players.length>=(this.selected?.min||2)&&this.room.players.every(e=>e.ready&&e.online)},canAct(){return this.connection==="connected"&&!this.busy},ownDice(){return this.game?.ownDice},isDrawer(){return this.game?.drawerId===this.room?.me},clock(){return this.now-this.offset},drawSeconds(){return Math.min(this.room?.settings.drawSeconds||120,Math.max(0,Math.ceil(((this.game?.endAt||0)-this.clock)/1e3)))},fingerSeconds(){return this.game?.until?Math.min(3,Math.max(0,Math.ceil((this.game.until-this.clock)/1e3))):3},spinning(){return this.clock<(this.game?.revealAt||0)},roundKey(){return this.game?`${this.game.instance||this.game.id}:${this.game.round}`:""},wheelEntries(){return this.game?.id==="promptwheel"?(this.game.candidates||[]).map(e=>({id:e.id,text:e.text})):(this.room?.players||[]).map(e=>({id:e.id,text:e.name}))},matched(){return this.room?.players.filter(e=>this.game?.matches?.[e.id])||[]},alivePlayers(){return this.room?.players.filter(e=>this.game?.alive?.includes(e.id))||[]}},mounted(){const e=this.peerMode?ow:Pp;this.client=new e(n=>this.receive(n),(n,i)=>{this.connection=n,n==="expired"&&(this.error=i)}),this.clockTimer=setInterval(()=>{this.now=Date.now()},200),this.onVisibility=()=>{document.hidden&&this.releaseFinger()},document.addEventListener("visibilitychange",this.onVisibility),this.onPageHide=()=>this.client.dispose?.(),window.addEventListener("pagehide",this.onPageHide),this.onPageShow=n=>{if(n.persisted&&this.peerMode){const i=uo();i&&this.resume(i)}},window.addEventListener("pageshow",this.onPageShow);const t=uo();t&&(!this.joinCode||t.code===this.joinCode)&&this.resume(t)},beforeUnmount(){this.releaseFinger(),this.client.dispose?this.client.dispose():this.client.stop(),clearInterval(this.clockTimer),clearInterval(this.holdTimer),clearTimeout(this.rollTimer),document.removeEventListener("visibilitychange",this.onVisibility),window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow)},methods:{image(e){return`${this.assetBase}assets/${e}.png`},playerName(e){return this.room?.players.find(t=>t.id===e)?.name||"一位朋友"},receive(e){if(!e){this.room=null,this.connection="idle",this.previous=_l();return}const t=this.roundKey;this.offset=Date.now()-e.serverNow,this.room=e,e.game?.id==="promptwheel"&&(this.filter=e.game.filter),t!==this.roundKey&&(this.secretVisible=!1,this.diceVisible=!1,this.holding=!1,clearInterval(this.holdTimer),this.answer=""),e.game?.winnerId&&(this.holding=!1,clearInterval(this.holdTimer)),jt(()=>{const n=this.$refs.messages;n&&document.activeElement!==this.$refs.chatInput&&(n.scrollTop=n.scrollHeight)})},async enter(e){if(!this.busy){this.error="",this.busy=!0;try{await this.client.enter(e,this.name,this.joinCode),this.shareLink=""}catch(t){this.error=t.message}finally{this.busy=!1}}},async resume(e=this.previous){if(!(!e||this.busy)){this.error="",this.busy=!0;try{await this.client.resume(e)}catch(t){this.error=t.message,this.client.stop(),(t.status===401||t.status===404)&&(this.client.forget(),this.previous=null)}finally{this.busy=!1}}},async send(e,t={},n=!1){if(!(!n&&this.busy)){n||(this.busy=!0,this.error="");try{return await this.client.action(e,{...this.game?{gameId:this.game.id,instance:this.game.instance,round:this.game.round}:{},...t})}catch(i){if(this.error=i.message,n)throw i}finally{n||(this.busy=!1)}}},async rollDice(){this.canAct&&(this.diceVisible=!1,this.rolling=!0,await this.send("dice.roll"),this.rollTimer=setTimeout(()=>{this.rolling=!1},650))},async share(){const e=new URL(location.href),t=e.searchParams.get("v");e.search="",t&&e.searchParams.set("v",t),e.searchParams.set("room",this.room.code),e.hash="",this.shareLink=e.href;try{await navigator.clipboard.writeText(this.shareLink),this.notice="房间链接已复制，发给朋友就能加入"}catch{this.notice="长按下方链接复制，发给朋友"}},async leave(){await this.send("leave"),this.confirmLeave=!1,this.shareLink="";const e=new URL(location.href);e.searchParams.delete("room"),history.replaceState(null,"",e.href)},async postChat(){const e=this.chat.trim();e&&(this.chat="",await this.send("chat",{text:e}))},async guess(){const e=this.answer.trim();e&&(this.answer="",await this.send("draw.guess",{answer:e}))},async sendStroke(e){if(e.roundKey===this.roundKey)return this.send("draw.stroke",e,!0)},labelPosition(e){const t=((e+.5)*360/Math.max(1,this.wheelEntries.length)-90)*Math.PI/180;return{left:`${50+Math.cos(t)*34}%`,top:`${50+Math.sin(t)*34}%`}},toothPosition(e){const t=(185-e*190/11)*Math.PI/180;return{left:`${50+Math.cos(t)*36}%`,top:`${53+Math.sin(t)*29}%`}},startFinger(e){if(this.holding||!this.canAct||this.game?.winnerId)return;e.preventDefault(),e.currentTarget.setPointerCapture(e.pointerId),this.holding=!0;const t=()=>{this.holding&&this.send("finger.hold",{holding:!0},!0).catch(n=>{[409,429].includes(n.status)||this.releaseFinger()})};t(),this.holdTimer=setInterval(t,650)},releaseFinger(){this.holding&&(this.holding=!1,clearInterval(this.holdTimer),this.game?.id==="finger"&&!this.game.winnerId&&this.send("finger.hold",{holding:!1},!0).catch(()=>{}))},async acknowledge(){this.secretVisible=!1,await this.send("secret.ack")}},template:`
  <main class="online-party">
    <header class="online-header"><button class="online-brand" @click="$emit('single')">男人帮<span>.</span><small>MEN’S CLUB</small></button><span class="online-tag">联机模式</span></header>
    <div v-if="error" class="online-error" role="alert">{{error}}<button @click="error = ''" aria-label="关闭提示">×</button></div>
    <template v-if="!room">
      <section class="online-intro"><span class="online-eyebrow">TOGETHER, FROM ANYWHERE.</span><h1>各用手机，<br><em>一起开场。</em></h1><p>创建一个房间，把房间号或链接发给朋友。<br>同场聚会，或者隔着屏幕，都能一起玩。</p><p v-if="peerMode">无需注册。由房主手机同步，电脑可以关机。<br>房主请保持游戏页面在前台，锁屏会暂停连接。</p></section>
      <section class="online-entry" aria-label="创建或加入房间">
        <label for="online-name">你的昵称</label><input id="online-name" v-model="name" maxlength="12" placeholder="朋友们怎么称呼你？" autocomplete="nickname" @keyup.enter="enter(joinCode ? 'join' : 'create')">
        <button class="online-primary" :disabled="busy || !name.trim()" @click="enter('create')">{{busy ? '正在连接…' : '创建房间 ↗'}}</button>
        <div class="online-entry-divider">已经有房间号？</div>
        <label for="online-code">6 位房间号</label><input id="online-code" class="room-code-input" v-model="joinCode" maxlength="6" placeholder="例如 AB3D7K" autocapitalize="characters" autocomplete="off" spellcheck="false" @keyup.enter="enter('join')">
        <button class="online-outline" :disabled="busy || !name.trim() || joinCode.trim().length !== 6" @click="enter('join')">加入朋友的房间</button>
        <button v-if="previous" class="online-text" :disabled="busy" @click="resume(previous)">回到上次的房间 {{previous.code}} ↗</button>
      </section>
      <section class="online-available"><h2>十款游戏，都能联机</h2><div><span v-for="item in games" :key="item.id">{{item.name}}</span></div><p>进入房间后再选游戏。需要聊天时，也可以使用房间里的文字消息。</p></section>
    </template>
    <template v-else>
      <section class="online-room-heading"><div><span class="online-eyebrow">ROOM CODE</span><h1 class="online-room-code">{{room.code}}</h1><p>{{room.players.length}} / 12 人 <span class="connection-state" :class="connection">{{connection === 'connected' ? '已连接' : connection === 'expired' ? '房间连接已失效' : '连接中断，正在重连…'}}</span></p></div><button class="online-outline" @click="share">邀请朋友 ↗</button></section>
      <div v-if="shareLink" class="online-share"><p>{{notice}}</p><input readonly :value="shareLink" aria-label="房间分享链接" @focus="$event.target.select()"></div>
      <div v-if="connection === 'expired'" class="online-warning">{{error || '这个房间已过期或你已被移出。'}}<button class="online-text" @click="client.forget()">重新创建或加入</button></div>
      <ul class="online-members" aria-label="房间玩家"><li v-for="p in room.players" :key="p.id" :class="{'is-me':p.id === room.me, offline:!p.online}"><span class="member-avatar">{{p.name.slice(0,1)}}</span><div><strong>{{p.name}}<small v-if="p.id === room.me">你</small></strong><span>{{p.id === room.hostId ? '房主' : p.online ? '在线' : '暂时离线'}}<template v-if="room.status === 'lobby'"> / {{p.ready ? '已准备' : '未准备'}}</template><template v-if="p.score"> / {{p.score}} 分</template></span></div><button v-if="isHost && room.status === 'lobby' && p.id !== room.me" @click="send('kick',{playerId:p.id})" :disabled="!canAct" :aria-label="'移出'+p.name">×</button></li></ul>

      <section v-if="room.status === 'lobby'" class="online-lobby">
        <div class="online-section-heading"><h2>{{isHost ? '今晚玩什么？' : '等待房主选择游戏'}}</h2><span>{{readyCount}} / {{room.players.length}} 人已准备</span></div>
        <div class="online-game-grid"><button v-for="item in games" :key="item.id" :class="{selected:room.selected === item.id}" @click="send('select',{gameId:item.id})" :disabled="!isHost || !canAct" :aria-label="'选择'+item.name"><img :src="image(item.art)" alt=""><span>{{item.name}}<small>{{item.min}} 人起</small></span><b v-if="room.selected === item.id">已选择</b></button></div>
        <div class="online-settings" v-if="room.selected === 'dice'"><label for="online-dice-count">每人几颗骰子</label><select id="online-dice-count" :value="room.settings.diceCount" :disabled="!isHost || !canAct" @change="send('settings',{diceCount:Number($event.target.value)})"><option :value="1">1 颗</option><option :value="3">3 颗</option><option :value="5">5 颗，使用骰盅</option></select></div>
        <div class="online-settings" v-if="room.selected === 'draw'"><label for="online-draw-time">每轮画多久</label><select id="online-draw-time" :value="room.settings.drawSeconds" :disabled="!isHost || !canAct" @change="send('settings',{drawSeconds:Number($event.target.value)})"><option :value="60">60 秒</option><option :value="90">90 秒</option><option :value="120">120 秒</option></select></div>
        <p class="online-hint">{{selected?.desc}} 本游戏至少 {{selected?.min}} 人。</p>
        <div class="online-actions"><button class="online-outline" :disabled="!canAct" @click="send('ready',{ready:!me.ready})">{{me.ready ? '取消准备' : '我准备好了 ✓'}}</button><button v-if="isHost" class="online-primary" :disabled="!canAct || !canStart" @click="send('start')">{{room.players.length < selected?.min ? '再叫几位朋友' : readyCount < room.players.length ? '等所有人准备好' : '开始这一局 ↗'}}</button></div>
      </section>

      <section v-else-if="game" class="online-game" :key="game.id">
        <div class="online-section-heading"><h2>{{selected?.name}}</h2><span>第 {{game.round}} 轮</span></div>
        <template v-if="game.id === 'dice'">
          <p class="online-hint">每个人在自己的手机摇盅、查看。全部确认后，才统一展示结果。</p>
          <template v-if="game.phase === 'rolling'">
            <div class="online-dice-stage" :class="{shaking:rolling}">
              <button v-if="room.settings.diceCount === 5 && (!diceVisible || !ownDice)" class="online-cup" :disabled="rolling || !ownDice" @click="diceVisible=true" aria-label="打开自己的骰盅"><img :src="image('dice-cup')" alt="骰盅"><span>{{rolling ? '好运酝酿中…' : ownDice ? '点击开盅，只给自己看' : '先摇一盅，好运藏在里面'}}</span></button>
              <div v-else-if="ownDice" class="online-dice-list"><button v-for="(value,i) in ownDice.values" :key="i" class="online-die" :class="{held:ownDice.held[i]}" :disabled="!canAct || ownDice.ready" @click="send('dice.hold',{index:i,held:!ownDice.held[i]})" :aria-label="'骰子'+(i+1)+'，'+value+'点，'+(ownDice.held[i]?'已锁定':'未锁定')"><span>{{['','⚀','⚁','⚂','⚃','⚄','⚅'][value]}}</span><small>{{ownDice.held[i]?'已锁定':'点我锁定'}}</small></button><strong>{{ownDice.values.reduce((a,b)=>a+b,0)}} <small>总点数</small></strong></div>
              <div v-else class="online-placeholder">摇一下，看看今天的手气。</div>
            </div>
            <div class="online-actions"><button class="online-primary" :disabled="!canAct || rolling || ownDice?.ready" @click="rollDice">{{rolling ? '正在摇盅…' : ownDice ? '再摇一盅 ↻' : '摇骰盅 ↻'}}</button><button v-if="ownDice && room.settings.diceCount===5" class="online-outline" :disabled="rolling" @click="diceVisible=!diceVisible">{{diceVisible?'盖上骰盅 ↓':'开盅看点数 ↑'}}</button><button v-if="ownDice" class="online-outline" :disabled="!canAct || ownDice.ready || rolling" @click="send('dice.ready')">{{ownDice.ready?'已确认，等待朋友':'确认点数，准备统一开盅'}}</button></div>
            <ul class="online-progress"><li v-for="p in game.progress" :key="p.id">{{playerName(p.id)}}<span>{{p.ready?'已确认 ✓':p.rolled?'正在看自己的骰子':'还没摇盅'}}</span></li></ul>
          </template>
          <div v-else class="online-result"><h3>{{game.winners.map(playerName).join('、')}} 手气领先！</h3><ul class="online-progress"><li v-for="r in game.results" :key="r.id">{{playerName(r.id)}}<span>{{r.values.join(' + ')}} = <b>{{r.total}}</b></span></li></ul></div>
        </template>

        <template v-else-if="game.id === 'truth'">
          <p class="online-hint">现在轮到 {{playerName(game.currentId)}}。任何题目都可以跳过。</p>
          <div v-if="game.phase==='choose'" class="online-choice"><button class="online-primary" :disabled="!canAct || !isTurn" @click="send('truth.draw',{kind:'truth'})">♡ 真心话</button><button class="online-outline" :disabled="!canAct || !isTurn" @click="send('truth.draw',{kind:'dare'})">ϟ 大冒险</button></div>
          <div v-else class="online-prompt"><span>{{game.kind==='truth'?'真心话':'大冒险'}}</span><h3>{{game.prompt}}</h3><div class="online-actions" v-if="isTurn || isHost"><button class="online-primary" :disabled="!canAct" @click="send('truth.next')">完成，下一位</button><button class="online-text" :disabled="!canAct" @click="send('truth.next')">这题跳过</button></div></div>
        </template>

        <template v-else-if="game.id === 'wheel' || game.id === 'promptwheel'">
          <div v-if="game.id==='promptwheel'" class="online-filters"><button v-for="f in filters" :key="f.id" :class="{selected:filter===f.id}" :disabled="!isHost || !canAct || spinning" @click="send('wheel.filter',{filter:f.id})">{{f.name}}</button></div>
          <div class="online-wheel"><div class="online-wheel-pointer"></div><div class="online-wheel-disc" :style="{transform:'rotate('+game.rotation+'deg)'}"><img :src="image('wheel-'+(wheelEntries.length || 8))" alt="转盘盘面"><span v-for="(e,i) in wheelEntries" :key="e.id" :style="labelPosition(i)">{{e.text.length>8?e.text.slice(0,7)+'…':e.text}}</span></div><b class="online-wheel-center">✳</b></div>
          <div class="online-result" aria-live="polite"><template v-if="game.result && !spinning"><h3>{{game.id==='promptwheel'?game.result.text:playerName(game.result)+'，就是你！'}}</h3><template v-if="game.id==='promptwheel'"><p>符合这一条的朋友，点一下：</p><button class="online-outline" :disabled="!canAct" @click="send('wheel.match',{promptId:game.result.id,matches:!game.matches[room.me]})">{{game.matches[room.me]?'我符合 ✓（再点取消）':'这条说的就是我'}}</button><p>{{matched.length ? matched.map(p=>p.name).join('、')+' 符合这一条' : '等朋友举手中…'}}</p></template></template><h3 v-else>{{spinning?'好运正在转动…':'大家看同一个转盘，一起等结果。'}}</h3></div>
          <button v-if="isHost" class="online-primary" :disabled="!canAct || spinning || game.id==='promptwheel' && !game.remaining" @click="send('wheel.spin',{filter})">{{spinning?'转动中…':game.result?'再转一次 ↻':'开始转动 ↗'}}</button><p v-else class="online-hint">等待房主转动</p>
          <details v-if="game.id==='promptwheel' && wheelEntries.length" class="online-details"><summary>展开本次盘面 / {{game.remaining}} 条未抽中</summary><p v-for="p in game.candidates" :key="p.id">{{p.id}}. {{p.text}}</p></details>
        </template>

        <template v-else-if="game.id==='king' || game.id==='undercover'">
          <div class="online-secret"><p>{{game.id==='undercover'?'你的词语只有你自己能查看':'你的身份只有你自己能查看'}}</p><h3 v-if="secretVisible">{{game.id==='undercover'?game.ownWord:game.ownSecret==='KING'?'你是国王 👑':game.ownSecret+' 号'}}</h3><div v-else class="online-secret-back">?</div><button class="online-outline" @click="secretVisible=!secretVisible">{{secretVisible?'隐藏起来':'查看我的'+(game.id==='undercover'?'词语':'身份')}}</button></div>
          <template v-if="game.phase==='secret'"><p class="online-hint">{{game.ackCount}} / {{room.players.length}} 人看完牌，等所有人确认后开始。</p><button class="online-primary" :disabled="!canAct || game.acknowledged" @click="acknowledge">{{game.acknowledged?'已确认，等朋友看完':'看完了，准备开始'}}</button></template>
          <template v-else-if="game.id==='king'"><h3 class="online-big-result">{{playerName(game.kingId)}} 是本轮国王</h3><p class="online-hint">国王按号码安排大家愿意参加的小任务。</p><div v-if="game.command" class="online-prompt"><h3>{{game.command}}</h3></div><div class="online-actions"><button v-if="game.kingId===room.me" class="online-primary" :disabled="!canAct" @click="send('king.command')">{{game.command?'换个指令':'给我一个指令'}}</button><button v-if="isHost || game.kingId===room.me" class="online-outline" :disabled="!canAct" @click="send('king.next')">下一轮，重新发牌</button></div></template>
          <template v-else-if="game.phase==='discussion'"><p class="online-hint">每人描述一次，再讨论、投票。还在场的玩家：{{alivePlayers.map(p=>p.name).join('、')}}。</p><template v-if="game.alive.includes(room.me)"><h3>你认为谁是卧底？</h3><div class="online-votes"><button v-for="p in alivePlayers" :key="p.id" class="online-outline" :class="{selected:game.ownVote===p.id}" :disabled="!canAct || !!game.ownVote" @click="send('undercover.vote',{targetId:p.id})">{{p.name}}{{game.ownVote===p.id?' ✓':''}}</button></div><p class="online-hint">{{game.ownVote?'投票已提交，等待其他朋友。':'点击名字即提交，提交后不可更改。'}} {{game.voteCount}} / {{game.alive.length}} 票</p></template><p v-else class="online-hint">你已出局，继续围观朋友们的推理吧。</p></template>
          <template v-else><div class="online-result"><h3 v-if="game.victory">{{game.victory==='civilian'?'平民阵营获胜！':'卧底阵营获胜！'}}</h3><h3 v-else>{{game.eliminated ? playerName(game.eliminated.id)+' 被投出，身份是'+(game.eliminated.role==='undercover'?'卧底':'平民') : '平票，本轮没有人出局'}}</h3><ul v-if="game.revealed" class="online-progress"><li v-for="p in game.revealed" :key="p.id">{{playerName(p.id)}}<span>{{p.role==='undercover'?'卧底':'平民'}} / {{p.word}}</span></li></ul></div><button v-if="isHost && !game.victory" class="online-primary" :disabled="!canAct" @click="send('undercover.next')">下一轮讨论</button></template>
        </template>

        <template v-else-if="game.id==='seven'"><p class="online-hint">轮到 {{playerName(game.currentId)}}。7 的倍数，或者数字中含 7，记得喊过。</p><div class="online-seven-number">{{game.number}}</div><div class="online-actions" v-if="game.phase==='answer'"><button class="online-primary" :disabled="!canAct || !isTurn" @click="send('seven.answer',{pass:false})">报数 {{game.number}}</button><button class="online-outline" :disabled="!canAct || !isTurn" @click="send('seven.answer',{pass:true})">喊“过”！</button></div><button v-else-if="isTurn || isHost" class="online-primary" :disabled="!canAct" @click="send('seven.next')">知道了，继续下一位</button><p class="online-feedback" aria-live="polite">{{game.feedback}}</p><p class="online-hint">当前连续答对 {{game.streak}} 次</p></template>

        <template v-else-if="game.id==='shark'"><p class="online-hint">{{game.phase==='result'?'鲨鱼醒了！':'轮到 '+playerName(game.currentId)+'，选一颗牙齿。'}} 每局一颗机关牙，大家按同一条鲨鱼。</p><div class="online-shark" :class="{bitten:game.phase==='result'}"><div class="online-shark-mouth"></div><img :src="image('shark-face')" alt="咬手鲨鱼"><button v-for="i in 12" :key="i" :style="toothPosition(i-1)" :class="{pressed:game.pressed.includes(i-1)}" :disabled="!canAct || !isTurn || game.phase!=='playing' || game.pressed.includes(i-1)" :aria-label="i+'号牙齿'" @click="send('shark.press',{tooth:i-1})"></button><strong v-if="game.phase==='result'">CHOMP!</strong></div><h3 v-if="game.loserId" class="online-big-result">{{playerName(game.loserId)}} 被鲨鱼逮住了！</h3><button v-if="game.phase==='result' && isHost" class="online-primary" :disabled="!canAct" @click="send('shark.next')">再来一局，重新张嘴</button></template>

        <template v-else-if="game.id==='finger'"><p class="online-hint">每个人按住自己手机上的按钮，至少 2 人稳定按住 3 秒，随机选出一位朋友。</p><div class="online-finger-stage"><div v-for="p in room.players" :key="p.id" class="online-finger-person" :class="{held:game.held.includes(p.id),chosen:game.winnerId===p.id}"><span>{{p.name.slice(0,1)}}</span><strong>{{p.name}}</strong><small>{{game.winnerId===p.id?'就是你！':game.held.includes(p.id)?'正按住':'等你按住'}}</small></div></div><h3 class="online-big-result" aria-live="polite">{{game.winnerId?playerName(game.winnerId)+'，就是你！':game.until?'保持按住，'+fingerSeconds+' 秒':game.held.length+' 人已按住'}}</h3><button class="online-hold-button" :class="{holding}" :disabled="!canAct || !!game.winnerId" @pointerdown="startFinger" @pointerup="releaseFinger" @pointercancel="releaseFinger" @lostpointercapture="releaseFinger" @contextmenu.prevent>{{game.winnerId?'本轮已选出':holding?'继续按住，别松手':'按住这里，一起参与'}}</button><button v-if="isHost && game.winnerId" class="online-outline" :disabled="!canAct" @click="send('finger.next')">下一轮，重新选择</button></template>

        <template v-else-if="game.id==='draw'">
          <p class="online-hint">{{playerName(game.drawerId)}} 是本轮画手。{{game.category}}，{{game.wordLength}} 个字。<strong v-if="game.phase==='drawing'">还剩 {{drawSeconds}} 秒</strong></p>
          <template v-if="game.phase==='word'"><div v-if="isDrawer" class="online-secret"><p>先看题，再开始画。其他人看不到这道题。</p><h3>{{secretVisible?game.word:'?'}}</h3><button class="online-outline" @click="secretVisible=!secretVisible">{{secretVisible?'隐藏题目':'查看本轮题目'}}</button><div class="online-actions"><button class="online-primary" :disabled="!canAct" @click="secretVisible=false;send('draw.start')">准备好了，开始画</button><button class="online-text" :disabled="!canAct" @click="send('draw.change')">换个题目</button></div></div><div v-else class="online-placeholder">等画手看完题，画面会实时出现在这里。</div></template>
          <template v-else><online-canvas :strokes="game.strokes" :can-draw="isDrawer && game.phase==='drawing' && connection==='connected'" :round-key="roundKey" :color="penColor" :pen-width="penWidth" :send-stroke="sendStroke" />
            <div v-if="isDrawer && game.phase==='drawing'" class="online-draw-tools"><div><button v-for="c in colors" :key="c.value" :aria-label="c.label+'画笔'" :class="{selected:penColor===c.value}" :style="{background:c.value}" @click="penColor=c.value"></button><button class="online-text" @click="penColor='#f3f0e4';penWidth=22">橡皮</button></div><div><button v-for="n in [3,5,10]" :key="n" class="online-text" :class="{selected:penWidth===n}" @click="penWidth=n;penColor=== '#f3f0e4' && (penColor='#182016')">{{n===3?'细':n===5?'中':'粗'}}</button><button class="online-text" :disabled="!canAct" @click="send('draw.undo')">撤销</button><button class="online-text" :disabled="!canAct" @click="send('draw.clear')">清空</button></div><button class="online-text" @click="secretVisible=!secretVisible">{{secretVisible?game.word+'（点击隐藏）':'查看题目'}}</button><button class="online-text" :disabled="!canAct" @click="send('draw.skip')">这题跳过</button></div>
            <form v-else-if="!isDrawer && game.phase==='drawing'" class="online-guess" @submit.prevent="guess"><input v-model="answer" maxlength="40" placeholder="猜到了？输入你的答案" aria-label="你画我猜答案"><button class="online-primary" :disabled="!canAct || !answer.trim()">提交答案</button></form>
            <div v-if="game.phase==='result'" class="online-result"><h3>答案：{{game.word}}</h3><p>{{game.outcome==='guessed'?playerName(game.guesser)+' 猜中了，画手和猜中者各加 1 分':game.outcome==='timeout'?'时间到了，这轮没有加分':'本题已跳过，没有加分'}}</p><button v-if="isDrawer || isHost" class="online-primary" :disabled="!canAct" @click="send('draw.next')">下一轮，换位画手</button></div>
          </template>
        </template>
        <div class="online-round-actions"><button v-if="isHost && (game.phase==='result' && ['dice','undercover'].includes(game.id))" class="online-primary" :disabled="!canAct" @click="send('again')">再来一局</button><button v-if="isHost" class="online-text" :disabled="!canAct" @click="send('lobby')">结束本局，回房间换游戏</button></div>
      </section>

      <section class="online-chat"><h2>房间消息</h2><div ref="messages" class="online-messages" role="log" aria-label="房间消息记录"><p v-for="m in room.messages" :key="m.id" :class="{system:!m.from}"><strong v-if="m.from">{{playerName(m.from)}}：</strong>{{m.text}}</p></div><form @submit.prevent="postChat"><input ref="chatInput" v-model="chat" maxlength="160" placeholder="和房间里的朋友说句话" aria-label="房间消息"><button class="online-outline" :disabled="!canAct || !chat.trim()">发送</button></form></section>
      <footer class="online-room-footer"><template v-if="confirmLeave"><p>{{peerMode && isHost ? '你是房主，离开会结束整个房间。' : '离开后会结束当前一局，其他朋友留在房间大厅。'}}</p><button class="online-outline" :disabled="busy" @click="leave">确定离开</button><button class="online-text" @click="confirmLeave=false">继续玩</button></template><button v-else class="online-text" @click="confirmLeave=true">离开房间</button><span>{{peerMode ? '房主手机负责同步，请保持游戏在前台。房主刷新后可以恢复，主动离开会结束房间。' : '房间有效期 12 小时。刷新页面可以回到本房间。'}}</span></footer>
    </template>
  </main>`},Dp=document.createElement("style");Dp.textContent=iw(jb+`
`+Bb);document.head.appendChild(Dp);function Op(){document.documentElement.style.setProperty("--rpx",`${Math.min(window.innerWidth,540)/750}px`)}Op();window.addEventListener("resize",Op);for(const e of["gesturestart","gesturechange","gestureend"])document.addEventListener(e,t=>t.preventDefault(),{passive:!1});document.addEventListener("touchmove",e=>{e.touches.length>1&&e.preventDefault()},{passive:!1});const cw={getStorageSync:e=>JSON.parse(localStorage.getItem(e)||"null"),setStorageSync:(e,t)=>localStorage.setItem(e,JSON.stringify(t)),getWindowInfo:()=>({statusBarHeight:0,pixelRatio:devicePixelRatio||1}),nextTick:e=>jt(e),createSelectorQuery:()=>{let e,t={};const n={select(i){return e=i,n},fields(i){return t=i,n},exec(i){const s=document.querySelector(e);if(!s){i([null]);return}const r=s.getBoundingClientRect();i([{width:r.width,height:r.height,left:r.left,top:r.top,...t.node?{node:s}:{}}])}};return n},vibrateShort:()=>{try{navigator.vibrate&&navigator.vibrate(12)}catch{}},pageScrollTo:({scrollTop:e})=>window.scrollTo({top:e,behavior:"instant"}),showToast:({title:e})=>{document.querySelector(".web-toast")?.remove();const t=document.createElement("div");t.className="web-toast",t.textContent=e,t.setAttribute("role","status"),document.body.appendChild(t),setTimeout(()=>t.remove(),2600)},showModal:({title:e,content:t,confirmText:n,success:i})=>{const s=document.createElement("dialog");s.className="web-confirm";const r=document.createElement("h2");r.textContent=e;const o=document.createElement("p");o.textContent=t;const a=document.createElement("div"),l=document.createElement("button");l.textContent="取消";const d=document.createElement("button");d.textContent=n||"确认",d.className="confirm-action";const c=p=>{s.close(),s.remove(),i?.({confirm:p,cancel:!p})};l.onclick=()=>c(!1),d.onclick=()=>c(!0),s.oncancel=p=>{p.preventDefault(),c(!1)},a.append(l,d),s.append(r,o,a),document.body.append(s),s.showModal(),l.focus()}};let hi;const Mp=rn(Ep,{"./wheel-prompts":rn(Cp)}),dw=rn(Ub,{"./drawing-words":rn(Ap)}),pw=Np(Wb,"/chen-yijie-website/nanrenbang/");new Function("Page","wx","require",pw)(e=>{hi=e},cw,e=>e.includes("party-extras")?dw:Mp);const uw=Object.fromEntries(Object.entries(hi).filter(([e,t])=>typeof t=="function"&&!["onLoad","onUnload","onShareAppMessage"].includes(e))),fw={data:()=>JSON.parse(JSON.stringify(hi.data)),computed:{data(){return this.$data}},methods:{...uw,setData(e){Object.assign(this.$data,e)},pointerSurface(e,t){const n=e.currentTarget;n._partyPointers||(n._partyPointers=new Map);const i=n.getBoundingClientRect(),s={identifier:e.pointerId,x:e.clientX-i.left,y:e.clientY-i.top};if(e.type==="pointerdown")n._partyPointers.set(e.pointerId,s),n.setPointerCapture?.(e.pointerId);else if(e.type==="pointermove"){if(!n._partyPointers.has(e.pointerId))return;n._partyPointers.set(e.pointerId,s)}else n._partyPointers.delete(e.pointerId);this[t]({touches:[...n._partyPointers.values()],changedTouches:[s],currentTarget:{dataset:n.dataset}})}},template:nw(Np(Hb,"/chen-yijie-website/nanrenbang/")),mounted(){hi.onLoad.call(this)},beforeUnmount(){hi.onUnload.call(this)},watch:{showPlayers(e){document.body.classList.toggle("modal-open",e||this.showRules),e&&jt(()=>document.querySelector(".player-editor input")?.focus())},showRules(e){document.body.classList.toggle("modal-open",e||this.showPlayers||this.showHomePhoto)},showHomePhoto(e){document.body.classList.toggle("modal-open",e||this.showPlayers||this.showRules)}}},hw=Ls({components:{SinglePlayer:fw,OnlineParty:lw},data:()=>{let e=uo()?"online":"single";try{e=sessionStorage.getItem("nanrenbang-play-mode")||e}catch{}return new URL(location.href).searchParams.has("room")&&(e="online"),{mode:e,games:Mp.games,assetBase:"/chen-yijie-website/nanrenbang/"}},methods:{changeMode(e){this.mode=e;try{sessionStorage.setItem("nanrenbang-play-mode",e)}catch{}document.body.classList.remove("modal-open"),window.scrollTo({top:0,behavior:"instant"})}},template:`<div><nav class="play-mode-rail" aria-label="选择游玩模式"><button :class="{selected:mode==='single'}" :aria-pressed="mode==='single'" @click="changeMode('single')">单机模式<small>一部手机，面对面玩</small></button><button :class="{selected:mode==='online'}" :aria-pressed="mode==='online'" @click="changeMode('online')">联机模式<small>各用手机，加入同一房间</small></button></nav><single-player v-if="mode==='single'" ref="single"/><online-party v-else :games="games" :asset-base="assetBase" @single="changeMode('single')"/></div>`}),Mr=hw.mount("#app");"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");jt(()=>window.scrollTo({top:0,behavior:"instant"}));window.addEventListener("keydown",e=>{e.key==="Escape"&&(Mr.$refs.single?.closePlayers(),Mr.$refs.single?.closeRules(),Mr.$refs.single?.closeHomePhoto())});
