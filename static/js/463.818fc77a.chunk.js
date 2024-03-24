"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[463],{463:(t,e,a)=>{a.d(e,{zS:()=>p,loadGifImage:()=>u});const o=[0,4,2,1],i=[8,8,4,2];class r{constructor(t){this.pos=0,this.data=new Uint8ClampedArray(t)}getString(t){const e=this.data.slice(this.pos,this.pos+t);return this.pos+=e.length,e.reduce(((t,e)=>t+String.fromCharCode(e)),"")}nextByte(){return this.data[this.pos++]}nextTwoBytes(){return this.pos+=2,this.data[this.pos-2]+(this.data[this.pos-1]<<8)}readSubBlocks(){let t="",e=0;do{e=this.data[this.pos++];for(let a=e;--a>=0;t+=String.fromCharCode(this.data[this.pos++]));}while(0!==e);return t}readSubBlocksBin(){let t=this.data[this.pos],e=0;for(let o=0;0!==t;o+=t+1,t=this.data[this.pos+o])e+=t;const a=new Uint8Array(e);t=this.data[this.pos++];for(let o=0;0!==t;t=this.data[this.pos++])for(let e=t;--e>=0;a[o++]=this.data[this.pos++]);return a}skipSubBlocks(){for(const t=1,e=0;this.data[this.pos]!==e;this.pos+=this.data[this.pos]+t);this.pos++}}const n={x:0,y:0},s=0,l=.5,h=0,c=0,g=0;function f(t,e){const a=[];for(let o=0;o<e;o++)a.push({r:t.data[t.pos],g:t.data[t.pos+1],b:t.data[t.pos+2]}),t.pos+=3;return a}async function d(t,e,a,r,n,s){switch(t.nextByte()){case 59:return!0;case 44:await async function(t,e,a,r,n,s){const l=e.frames[r(!0)];l.left=t.nextTwoBytes(),l.top=t.nextTwoBytes(),l.width=t.nextTwoBytes(),l.height=t.nextTwoBytes();const h=t.nextByte(),c=128===(128&h),g=64===(64&h);l.sortFlag=32===(32&h),l.reserved=(24&h)>>>3;const d=1<<1+(7&h);c&&(l.localColorTable=f(t,d));const p=t=>{const{r:o,g:i,b:r}=(c?l.localColorTable:e.globalColorTable)[t];return t!==n(null)?{r:o,g:i,b:r,a:255}:{r:o,g:i,b:r,a:a?~~((o+i+r)/3):0}},u=(()=>{try{return new ImageData(l.width,l.height,{colorSpace:"srgb"})}catch(t){if(t instanceof DOMException&&"IndexSizeError"===t.name)return null;throw t}})();if(null==u)throw new EvalError("GIF frame size is to large");const w=t.nextByte(),m=t.readSubBlocksBin(),y=1<<w,b=(t,e)=>{const a=t>>>3,o=7&t;return(m[a]+(m[a+1]<<8)+(m[a+2]<<16)&(1<<e)-1<<o)>>>o};if(g){for(let a=0,n=w+1,h=0,c=[[0]],g=0;g<4;g++){if(o[g]<l.height){let t=0,e=0,r=!1;for(;!r;){const s=a;if(a=b(h,n),h+=n+1,a===y){n=w+1,c.length=y+2;for(let t=0;t<c.length;t++)c[t]=t<y?[t]:[]}else{a>=c.length?c.push(c[s].concat(c[s][0])):s!==y&&c.push(c[s].concat(c[a][0]));for(const r of c[a]){const{r:a,g:n,b:s,a:h}=p(r);u.data.set([a,n,s,h],o[g]*l.width+i[g]*e+t%(4*l.width)),t+=4}c.length===1<<n&&n<12&&n++}t===4*l.width*(e+1)&&(e++,o[g]+i[g]*e>=l.height&&(r=!0))}}null===s||void 0===s||s(t.pos/(t.data.length-1),r(!1)+1,u,{x:l.left,y:l.top},{width:e.width,height:e.height})}l.image=u,l.bitmap=await createImageBitmap(u)}else{let a=0,o=w+1,i=0,n=-4,h=!1;const c=[[0]];for(;!h;){const t=a;if(a=b(i,o),i+=o,a===y){o=w+1,c.length=y+2;for(let t=0;t<c.length;t++)c[t]=t<y?[t]:[]}else{if(a===y+1){h=!0;break}a>=c.length?c.push(c[t].concat(c[t][0])):t!==y&&c.push(c[t].concat(c[a][0]));for(const t of c[a]){const{r:e,g:a,b:o,a:i}=p(t);u.data.set([e,a,o,i],n+=4)}c.length>=1<<o&&o<12&&o++}}l.image=u,l.bitmap=await createImageBitmap(u),null===s||void 0===s||s((t.pos+1)/t.data.length,r(!1)+1,l.image,{x:l.left,y:l.top},{width:e.width,height:e.height})}}(t,e,a,r,n,s);break;case 33:!function(t,e,a,o){switch(t.nextByte()){case 249:{const i=e.frames[a(!1)];t.pos++;const r=t.nextByte();i.GCreserved=(224&r)>>>5,i.disposalMethod=(28&r)>>>2,i.userInputDelayFlag=2===(2&r);const n=1===(1&r);i.delayTime=10*t.nextTwoBytes();const s=t.nextByte();n&&o(s),t.pos++;break}case 255:{t.pos++;const a={identifier:t.getString(8),authenticationCode:t.getString(3),data:t.readSubBlocksBin()};e.applicationExtensions.push(a);break}case 254:e.comments.push([a(!1),t.readSubBlocks()]);break;case 1:if(0===e.globalColorTable.length)throw new EvalError("plain text extension without global color table");t.pos++,e.frames[a(!1)].plainTextData={left:t.nextTwoBytes(),top:t.nextTwoBytes(),width:t.nextTwoBytes(),height:t.nextTwoBytes(),charSize:{width:t.nextTwoBytes(),height:t.nextTwoBytes()},foregroundColor:t.nextByte(),backgroundColor:t.nextByte(),text:t.readSubBlocks()};break;default:t.skipSubBlocks()}}(t,e,r,n);break;default:throw new EvalError("undefined block found")}return!1}function p(t){var e;const{context:a,radius:o,particle:i,delta:r}=t,f=i.image;if(null===f||void 0===f||!f.gifData||!f.gif)return;const d=new OffscreenCanvas(f.gifData.width,f.gifData.height),p=d.getContext("2d");if(!p)throw new Error("could not create offscreen canvas context");var u;(p.imageSmoothingQuality="low",p.imageSmoothingEnabled=!1,p.clearRect(n.x,n.y,d.width,d.height),void 0===i.gifLoopCount)&&(i.gifLoopCount=null!==(u=f.gifLoopCount)&&void 0!==u?u:g);let w=null!==(e=i.gifFrame)&&void 0!==e?e:s;const m={x:-f.gifData.width*l,y:-f.gifData.height*l},y=f.gifData.frames[w];if(void 0===i.gifTime&&(i.gifTime=h),y.bitmap){switch(a.scale(o/f.gifData.width,o/f.gifData.height),y.disposalMethod){case 4:case 5:case 6:case 7:case 0:p.drawImage(y.bitmap,y.left,y.top),a.drawImage(d,m.x,m.y),p.clearRect(n.x,n.y,d.width,d.height);break;case 1:p.drawImage(y.bitmap,y.left,y.top),a.drawImage(d,m.x,m.y);break;case 2:p.drawImage(y.bitmap,y.left,y.top),a.drawImage(d,m.x,m.y),p.clearRect(n.x,n.y,d.width,d.height),f.gifData.globalColorTable.length?p.putImageData(f.gifData.backgroundImage,m.x,m.y):p.putImageData(f.gifData.frames[c].image,m.x+y.left,m.y+y.top);break;case 3:{const t=p.getImageData(n.x,n.y,d.width,d.height);p.drawImage(y.bitmap,y.left,y.top),a.drawImage(d,m.x,m.y),p.clearRect(n.x,n.y,d.width,d.height),p.putImageData(t,n.x,n.y)}}if(i.gifTime+=r.value,i.gifTime>y.delayTime){if(i.gifTime-=y.delayTime,++w>=f.gifData.frames.length){if(--i.gifLoopCount<=g)return;w=c,p.clearRect(n.x,n.y,d.width,d.height)}i.gifFrame=w}a.scale(f.gifData.width/o,f.gifData.height/o)}}async function u(t){if("gif"===t.type){t.loading=!0;try{var e;t.gifData=await async function(t,e,a){a||(a=!1);const o=await fetch(t);if(!o.ok&&404===o.status)throw new EvalError("file not found");const i=await o.arrayBuffer(),n={width:0,height:0,totalTime:0,colorRes:0,pixelAspectRatio:0,frames:[],sortFlag:!1,globalColorTable:[],backgroundImage:new ImageData(1,1,{colorSpace:"srgb"}),comments:[],applicationExtensions:[]},s=new r(new Uint8ClampedArray(i));if("GIF89a"!==s.getString(6))throw new Error("not a supported GIF file");n.width=s.nextTwoBytes(),n.height=s.nextTwoBytes();const l=s.nextByte(),h=128===(128&l);n.colorRes=(112&l)>>>4,n.sortFlag=8===(8&l);const c=1<<1+(7&l),g=s.nextByte();n.pixelAspectRatio=s.nextByte(),0!==n.pixelAspectRatio&&(n.pixelAspectRatio=(n.pixelAspectRatio+15)/64),h&&(n.globalColorTable=f(s,c));const p=(()=>{try{return new ImageData(n.width,n.height,{colorSpace:"srgb"})}catch(t){if(t instanceof DOMException&&"IndexSizeError"===t.name)return null;throw t}})();if(null==p)throw new Error("GIF frame size is to large");const{r:u,g:w,b:m}=n.globalColorTable[g];p.data.set(h?[u,w,m,255]:[0,0,0,0]);for(let r=4;r<p.data.length;r*=2)p.data.copyWithin(r,0,r);n.backgroundImage=p;let y=-1,b=!0,x=-1;const B=t=>(t&&(b=!0),y),T=t=>(null!=t&&(x=t),x);try{do{b&&(n.frames.push({left:0,top:0,width:0,height:0,disposalMethod:0,image:new ImageData(1,1,{colorSpace:"srgb"}),plainTextData:null,userInputDelayFlag:!1,delayTime:0,sortFlag:!1,localColorTable:[],reserved:0,GCreserved:0}),y++,x=-1,b=!1)}while(!await d(s,n,a,B,T,e));n.frames.length--;for(const t of n.frames){if(t.userInputDelayFlag&&0===t.delayTime){n.totalTime=1/0;break}n.totalTime+=t.delayTime}return n}catch(C){if(C instanceof EvalError)throw new Error("error while parsing frame ".concat(y,' "').concat(C.message,'"'));throw C}}(t.source),t.gifLoopCount=null!==(e=function(t){for(const e of t.applicationExtensions)if(e.identifier+e.authenticationCode==="NETSCAPE2.0")return e.data[1]+(e.data[2]<<8);return NaN}(t.gifData))&&void 0!==e?e:g,t.gifLoopCount||(t.gifLoopCount=1/0)}catch{t.error=!0}t.loading=!1}else{const{loadImage:e}=await Promise.resolve().then(a.bind(a,1977));await e(t)}}}}]);
//# sourceMappingURL=463.818fc77a.chunk.js.map