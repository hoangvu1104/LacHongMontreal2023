"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1320:(M,f,u)=>{u.d(f,{c:()=>d});var t=u(1308),a=u(7864),m=u(1898);const d=(c,n)=>{let o,e;const i=(l,p,v)=>{if(typeof document>"u")return;const w=document.elementFromPoint(l,p);w&&n(w)?w!==o&&(g(),r(w,v)):g()},r=(l,p)=>{o=l,e||(e=o);const v=o;(0,t.c)(()=>v.classList.add("ion-activated")),p()},g=(l=!1)=>{if(!o)return;const p=o;(0,t.c)(()=>p.classList.remove("ion-activated")),l&&e!==o&&o.click(),o=void 0};return(0,m.createGesture)({el:c,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>i(l.currentX,l.currentY,a.a),onMove:l=>i(l.currentX,l.currentY,a.b),onEnd:()=>{g(!0),(0,a.h)(),e=void 0}})}},2225:(M,f,u)=>{u.d(f,{g:()=>t});const t=(n,o,e,i,r)=>m(n[1],o[1],e[1],i[1],r).map(g=>a(n[0],o[0],e[0],i[0],g)),a=(n,o,e,i,r)=>r*(3*o*Math.pow(r-1,2)+r*(-3*e*r+3*e+i*r))-n*Math.pow(r-1,3),m=(n,o,e,i,r)=>c((i-=r)-3*(e-=r)+3*(o-=r)-(n-=r),3*e-6*o+3*n,3*o-3*n,n).filter(l=>l>=0&&l<=1),c=(n,o,e,i)=>{if(0===n)return((n,o,e)=>{const i=o*o-4*n*e;return i<0?[]:[(-o+Math.sqrt(i))/(2*n),(-o-Math.sqrt(i))/(2*n)]})(o,e,i);const r=(3*(e/=n)-(o/=n)*o)/3,g=(2*o*o*o-9*o*e+27*(i/=n))/27;if(0===r)return[Math.pow(-g,1/3)];if(0===g)return[Math.sqrt(-r),-Math.sqrt(-r)];const l=Math.pow(g/2,2)+Math.pow(r/3,3);if(0===l)return[Math.pow(g/2,.5)-o/3];if(l>0)return[Math.pow(-g/2+Math.sqrt(l),1/3)-Math.pow(g/2+Math.sqrt(l),1/3)-o/3];const p=Math.sqrt(Math.pow(-r/3,3)),v=Math.acos(-g/(2*Math.sqrt(Math.pow(-r/3,3)))),w=2*Math.pow(p,1/3);return[w*Math.cos(v/3)-o/3,w*Math.cos((v+2*Math.PI)/3)-o/3,w*Math.cos((v+4*Math.PI)/3)-o/3]}},5062:(M,f,u)=>{u.d(f,{i:()=>t});const t=a=>a&&""!==a.dir?"rtl"===a.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},6602:(M,f,u)=>{u.r(f),u.d(f,{startFocusVisible:()=>d});const t="ion-focused",m=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],d=c=>{let n=[],o=!0;const e=c?c.shadowRoot:document,i=c||document.body,r=E=>{n.forEach(h=>h.classList.remove(t)),E.forEach(h=>h.classList.add(t)),n=E},g=()=>{o=!1,r([])},l=E=>{o=m.includes(E.key),o||r([])},p=E=>{if(o&&void 0!==E.composedPath){const h=E.composedPath().filter(_=>!!_.classList&&_.classList.contains("ion-focusable"));r(h)}},v=()=>{e.activeElement===i&&r([])};return e.addEventListener("keydown",l),e.addEventListener("focusin",p),e.addEventListener("focusout",v),e.addEventListener("touchstart",g),e.addEventListener("mousedown",g),{destroy:()=>{e.removeEventListener("keydown",l),e.removeEventListener("focusin",p),e.removeEventListener("focusout",v),e.removeEventListener("touchstart",g),e.removeEventListener("mousedown",g)},setFocus:r}}},7626:(M,f,u)=>{u.d(f,{C:()=>c,a:()=>m,d:()=>d});var t=u(5861),a=u(5730);const m=function(){var n=(0,t.Z)(function*(o,e,i,r,g,l){var p;if(o)return o.attachViewToDom(e,i,g,r);if(!(l||"string"==typeof i||i instanceof HTMLElement))throw new Error("framework delegate is missing");const v="string"==typeof i?null===(p=e.ownerDocument)||void 0===p?void 0:p.createElement(i):i;return r&&r.forEach(w=>v.classList.add(w)),g&&Object.assign(v,g),e.appendChild(v),yield new Promise(w=>(0,a.c)(v,w)),v});return function(e,i,r,g,l,p){return n.apply(this,arguments)}}(),d=(n,o)=>{if(o){if(n)return n.removeViewFromDom(o.parentElement,o);o.remove()}return Promise.resolve()},c=()=>{let n,o;return{attachViewToDom:function(){var r=(0,t.Z)(function*(g,l,p={},v=[]){var w,E;if(n=g,l){const _="string"==typeof l?null===(w=n.ownerDocument)||void 0===w?void 0:w.createElement(l):l;v.forEach(s=>_.classList.add(s)),Object.assign(_,p),n.appendChild(_),yield new Promise(s=>(0,a.c)(_,s))}else if(n.children.length>0&&!n.children[0].classList.contains("ion-delegate-host")){const s=null===(E=n.ownerDocument)||void 0===E?void 0:E.createElement("div");s.classList.add("ion-delegate-host"),v.forEach(C=>s.classList.add(C)),s.append(...n.children),n.appendChild(s)}const h=document.querySelector("ion-app")||document.body;return o=document.createComment("ionic teleport"),n.parentNode.insertBefore(o,n),h.appendChild(n),n});return function(l,p){return r.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&o&&(o.parentNode.insertBefore(n,o),o.remove()),Promise.resolve())}}},7864:(M,f,u)=>{u.d(f,{a:()=>d,b:()=>c,c:()=>m,d:()=>o,h:()=>n});const t={getEngine(){var e;const i=window;return i.TapticEngine||(null===(e=i.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&i.Capacitor.Plugins.Haptics},available(){var e;const i=window;return!!this.getEngine()&&("web"!==(null===(e=i.Capacitor)||void 0===e?void 0:e.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const i=this.getEngine();if(!i)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;i.impact({style:r})},notification(e){const i=this.getEngine();if(!i)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;i.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},a=()=>t.available(),m=()=>{a()&&t.selection()},d=()=>{a()&&t.selectionStart()},c=()=>{a()&&t.selectionChanged()},n=()=>{a()&&t.selectionEnd()},o=e=>{a()&&t.impact(e)}},109:(M,f,u)=>{u.d(f,{a:()=>t,b:()=>l,c:()=>o,d:()=>p,e:()=>O,f:()=>n,g:()=>v,h:()=>m,i:()=>a,j:()=>s,k:()=>C,l:()=>e,m:()=>r,n:()=>w,o:()=>i,p:()=>c,q:()=>d,r:()=>_,s:()=>y,t:()=>g,u:()=>E,v:()=>h});const t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8416:(M,f,u)=>{u.d(f,{I:()=>c,a:()=>r,b:()=>n,c:()=>p,d:()=>w,f:()=>g,g:()=>i,i:()=>e,p:()=>v,r:()=>E,s:()=>l});var t=u(5861),a=u(5730),m=u(4147);const c="ion-content",n=".ion-content-scroll-host",o=`${c}, ${n}`,e=h=>"ION-CONTENT"===h.tagName,i=function(){var h=(0,t.Z)(function*(_){return e(_)?(yield new Promise(s=>(0,a.c)(_,s)),_.getScrollElement()):_});return function(s){return h.apply(this,arguments)}}(),r=h=>h.querySelector(n)||h.querySelector(o),g=h=>h.closest(o),l=(h,_)=>e(h)?h.scrollToTop(_):Promise.resolve(h.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),p=(h,_,s,C)=>e(h)?h.scrollByPoint(_,s,C):Promise.resolve(h.scrollBy({top:s,left:_,behavior:C>0?"smooth":"auto"})),v=h=>(0,m.a)(h,c),w=h=>{if(e(h)){const s=h.scrollY;return h.scrollY=!1,s}return h.style.setProperty("overflow","hidden"),!0},E=(h,_)=>{e(h)?h.scrollY=_:h.style.removeProperty("overflow")}},5234:(M,f,u)=>{u.r(f),u.d(f,{KEYBOARD_DID_CLOSE:()=>a,KEYBOARD_DID_OPEN:()=>t,copyVisualViewport:()=>_,keyboardDidClose:()=>v,keyboardDidOpen:()=>l,keyboardDidResize:()=>p,resetKeyboardAssist:()=>o,setKeyboardClose:()=>g,setKeyboardOpen:()=>r,startKeyboardAssist:()=>e,trackViewportChanges:()=>h});const t="ionKeyboardDidShow",a="ionKeyboardDidHide";let d={},c={},n=!1;const o=()=>{d={},c={},n=!1},e=s=>{i(s),s.visualViewport&&(c=_(s.visualViewport),s.visualViewport.onresize=()=>{h(s),l()||p(s)?r(s):v(s)&&g(s)})},i=s=>{s.addEventListener("keyboardDidShow",C=>r(s,C)),s.addEventListener("keyboardDidHide",()=>g(s))},r=(s,C)=>{w(s,C),n=!0},g=s=>{E(s),n=!1},l=()=>!n&&d.width===c.width&&(d.height-c.height)*c.scale>150,p=s=>n&&!v(s),v=s=>n&&c.height===s.innerHeight,w=(s,C)=>{const O=new CustomEvent(t,{detail:{keyboardHeight:C?C.keyboardHeight:s.innerHeight-c.height}});s.dispatchEvent(O)},E=s=>{const C=new CustomEvent(a);s.dispatchEvent(C)},h=s=>{d=Object.assign({},c),c=_(s.visualViewport)},_=s=>({width:Math.round(s.width),height:Math.round(s.height),offsetTop:s.offsetTop,offsetLeft:s.offsetLeft,pageTop:s.pageTop,pageLeft:s.pageLeft,scale:s.scale})},9852:(M,f,u)=>{u.d(f,{c:()=>a});var t=u(3457);const a=m=>{let d,c,n;const o=()=>{d=()=>{n=!0,m&&m(!0)},c=()=>{n=!1,m&&m(!1)},null==t.w||t.w.addEventListener("keyboardWillShow",d),null==t.w||t.w.addEventListener("keyboardWillHide",c)};return o(),{init:o,destroy:()=>{null==t.w||t.w.removeEventListener("keyboardWillShow",d),null==t.w||t.w.removeEventListener("keyboardWillHide",c),d=c=void 0},isKeyboardVisible:()=>n}}},7741:(M,f,u)=>{u.d(f,{S:()=>a});const a={bubbles:{dur:1e3,circles:9,fn:(m,d,c)=>{const n=m*d/c-m+"ms",o=2*Math.PI*d/c;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(m,d,c)=>{const n=d/c,o=m*n-m+"ms",e=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(m,d)=>({r:6,style:{left:9-9*d+"px","animation-delay":-110*d+"ms"}})},lines:{dur:1e3,lines:8,fn:(m,d,c)=>({y1:14,y2:26,style:{transform:`rotate(${360/c*d+(d<c/2?180:-180)}deg)`,"animation-delay":m*d/c-m+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(m,d,c)=>({y1:12,y2:20,style:{transform:`rotate(${360/c*d+(d<c/2?180:-180)}deg)`,"animation-delay":m*d/c-m+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(m,d,c)=>({y1:17,y2:29,style:{transform:`rotate(${30*d+(d<6?180:-180)}deg)`,"animation-delay":m*d/c-m+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(m,d,c)=>({y1:12,y2:20,style:{transform:`rotate(${30*d+(d<6?180:-180)}deg)`,"animation-delay":m*d/c-m+"ms"}})}}},6659:(M,f,u)=>{u.r(f),u.d(f,{createSwipeBackGesture:()=>c});var t=u(5730),a=u(5062),m=u(1898);u(4349);const c=(n,o,e,i,r)=>{const g=n.ownerDocument.defaultView;let l=(0,a.i)(n);const v=s=>l?-s.deltaX:s.deltaX;return(0,m.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:s=>(l=(0,a.i)(n),(s=>{const{startX:y}=s;return l?y>=g.innerWidth-50:y<=50})(s)&&o()),onStart:e,onMove:s=>{const y=v(s)/g.innerWidth;i(y)},onEnd:s=>{const C=v(s),y=g.innerWidth,O=C/y,x=(s=>l?-s.velocityX:s.velocityX)(s),b=x>=0&&(x>.2||C>y/2),T=(b?1-O:O)*y;let L=0;if(T>5){const S=T/Math.abs(x);L=Math.min(S,540)}r(b,O<=0?.01:(0,t.l)(0,O,.9999),L)}})}},1083:(M,f,u)=>{u.d(f,{T:()=>i});var t=u(1571),a=u(5054),m=u(6895);function d(r,g){if(1&r&&(t.TgZ(0,"td",7),t._uU(1),t.qZA()),2&r){const l=t.oxw().$implicit;t.xp6(1),t.Oqu(l.time)}}function c(r,g){1&r&&(t.TgZ(0,"tr",8)(1,"td",9),t._uU(2,"Gi\u1ea3i lao 15 ph\xfat"),t.qZA()())}function n(r,g){1&r&&(t.TgZ(0,"tr",8)(1,"td",9),t._uU(2,"B\u1ed0C TH\u0102M V\xd2NG T\u1ee8 K\u1ebeT"),t.qZA()())}function o(r,g){1&r&&(t.TgZ(0,"tr",8)(1,"td",9),t._uU(2,"Ngh\u1ec9 tr\u01b0a 1 ti\u1ebfng"),t.qZA()())}function e(r,g){if(1&r&&(t.ynx(0),t.TgZ(1,"tr"),t.YNc(2,d,2,1,"td",1),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"div",2),t._UZ(7,"img",3),t.qZA()(),t.TgZ(8,"td",4),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11," vs "),t.qZA(),t.TgZ(12,"td",4),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"div",2),t._UZ(16,"img",5),t.qZA()()(),t.YNc(17,c,3,0,"tr",6),t.YNc(18,n,3,0,"tr",6),t.YNc(19,o,3,0,"tr",6),t.BQk()),2&r){const l=g.$implicit,p=g.index,v=t.oxw();t.xp6(1),t.ekj("border-bottom",(p+1)%4!=0),t.xp6(1),t.Q6J("ngIf",(p+1)%4==1),t.xp6(2),t.Oqu(l.field),t.xp6(3),t.Q6J("src",v.commonFunctions.getTeamImageStyle(l.teamA),t.LSH),t.xp6(2),t.Oqu(l.teamA),t.xp6(4),t.Oqu(l.teamB),t.xp6(3),t.Q6J("src",v.commonFunctions.getTeamImageStyle(l.teamB),t.LSH),t.xp6(1),t.Q6J("ngIf",(p+1)%4==0&&p+1!==v.divisions.length&&11!==p),t.xp6(1),t.Q6J("ngIf",p+1===v.divisions.length),t.xp6(1),t.Q6J("ngIf",11===p)}}let i=(()=>{class r{constructor(l){this.commonFunctions=l,this.divisions=[]}ngOnInit(){}}return r.\u0275fac=function(l){return new(l||r)(t.Y36(a.y))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-round-robin"]],inputs:{divisions:"divisions"},decls:16,vars:1,consts:[[4,"ngFor","ngForOf"],["rowspan","4",4,"ngIf"],[1,"team-info"],["alt","Team A",1,"team-image",3,"src"],[1,"team-name"],["alt","Team B",1,"team-image",3,"src"],["class","spacer-row",4,"ngIf"],["rowspan","4"],[1,"spacer-row"],["colspan","9"]],template:function(l,p){1&l&&(t.TgZ(0,"table")(1,"thead")(2,"tr")(3,"th"),t._uU(4,"Th\u1eddi gian"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"S\xe2n"),t.qZA(),t._UZ(7,"th"),t.TgZ(8,"th"),t._uU(9,"Home"),t.qZA(),t._UZ(10,"th"),t.TgZ(11,"th"),t._uU(12,"Away"),t.qZA(),t._UZ(13,"th"),t.qZA()(),t.TgZ(14,"tbody"),t.YNc(15,e,20,11,"ng-container",0),t.qZA()()),2&l&&(t.xp6(15),t.Q6J("ngForOf",p.divisions))},dependencies:[m.sg,m.O5],styles:["table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:5px;text-align:center;font-size:13px;border-bottom:1px solid #ccc}th[_ngcontent-%COMP%]{background-color:#f2f2f2}td[_ngcontent-%COMP%]{background-color:#fff}input[type=number][_ngcontent-%COMP%]{width:50px;text-align:center;border:none;background-color:#f2f2f2}input[type=number][_ngcontent-%COMP%]:focus{outline:none;background-color:#eaeaea}.spacer-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:none;background-color:#adff2f;height:20px;font-weight:700}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #ccc}.team-info[_ngcontent-%COMP%]{display:flex;align-items:center}.team-image[_ngcontent-%COMP%]{width:40px;height:40px;margin-right:5px}.team-name[_ngcontent-%COMP%]{font-weight:700;margin-left:5px}"]}),r})()},1085:(M,f,u)=>{u.d(f,{H:()=>m});var t=u(1571),a=u(8058);let m=(()=>{class d{constructor(){}ngOnInit(){}}return d.\u0275fac=function(n){return new(n||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-toolbar-header"]],decls:4,vars:0,consts:[[1,"title"]],template:function(n,o){1&n&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title",0),t._uU(3," L\u1ea1c H\u1ed3ng Montreal 2023 "),t.qZA()()())},dependencies:[a.Gu,a.wd,a.sr],styles:[".title[_ngcontent-%COMP%]{text-align:center;font-size:small;font-weight:700}.logo-avatar[_ngcontent-%COMP%]{width:80px;height:80px}"]}),d})()},5054:(M,f,u)=>{u.d(f,{y:()=>c});var t=u(4973),a=u(5880),m=u(1571),d=u(8058);let c=(()=>{class n{constructor(e){this.menuCtrl=e}getTeamImageStyle(e){let i=`${a.m.ImagesPath}`;switch(e){case t.p.CalgaryVFC:case t.p.CalgaryVFC_Star:i+=`${a.m.CalgaryVFCLogo}`;break;case t.p.CTC:case t.p.CTC_Star:i+=`${a.m.CTCLogo}`;break;case t.p.FCKingston:case t.p.FCKingston_Star:i+=`${a.m.FCKingstonLogo}`;break;case t.p.KWFC:case t.p.KWFC_Star:i+=`${a.m.KWFCLogo}`;break;case t.p.BFC:case t.p.BFC_Star:i+=`${a.m.BFCLogo}`;break;case t.p.YGOfVN:case t.p.YGOfVN_Star:i+=`${a.m.YGOfVNLogo}`;break;case t.p.FCAE:case t.p.FCAE_Star:i+=`${a.m.FCAELogo}`;break;case t.p.CICC:case t.p.CICC_Star:i+=`${a.m.CICCLogo}`;break;case t.p.LankFC:case t.p.LankFC_Star:i+=`${a.m.LankFCLogo}`;break;case t.p.SFC:case t.p.SFC_Star:i+=`${a.m.SFCLogo}`;break;case t.p.VMU:case t.p.VMU_Star:i+=`${a.m.VMULogo}`;break;case t.p.Stechco1:case t.p.Stechco1_Star:case t.p.Stechco2:case t.p.Stechco2_Star:i+=`${a.m.StechcoLogo}`;break;case t.p.FC3Mien:case t.p.FC3Mien_Star:i+=`${a.m.FC3MienLogo}`;break;case t.p.RBJunior:case t.p.RBJunior_Star:i+=`${a.m.RBJuniorLogo}`;break;case t.p.VietUnitedFC:case t.p.VietUnitedFC_Star:i+=`${a.m.VietUnitedFCLogo}`;break;default:i+=`${a.m.Logo}`}return i}generateTeamName(e,i){return i?`${e.name} (${e.province})`:e.name}enableMenuSwipe(){this.menuCtrl.swipeGesture(!0,"menu-content"),this.menuCtrl.enable(!0,"menu-content")}}return n.\u0275fac=function(e){return new(e||n)(m.LFG(d._q))},n.\u0275prov=m.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},6354:(M,f,u)=>{u.d(f,{I:()=>t});let t=(()=>{class a{}return a.Field1="S\xe2n 1",a.Field2="S\xe2n 2",a.Field3="S\xe2n 3",a.Field4="S\xe2n 4",a})()}}]);