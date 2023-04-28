import{d as u,q as $,y as F,h as o,n as U,g as V,s as f,T as X,L as G,M as O,H as J,K as Y}from"./index.c9203439.js";import{a as Z,u as p,Q as _}from"./QIcon.5d9cf61d.js";import{Q as ee}from"./QSpinner.0304dcc4.js";import{u as te,a as ne,R as ae}from"./use-router-link.b5c48ed0.js";import{c as le,a as ue}from"./render.c0c7a896.js";const A={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},ie=Object.keys(A),re={align:{type:String,validator:e=>ie.includes(e)}};function oe(e){return u(()=>{const r=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${A[r]}`})}const j={none:0,xs:4,sm:8,md:16,lg:24,xl:32},se={xs:8,sm:10,md:14,lg:20,xl:24},ce=["button","submit","reset"],de=/[^\s]\/[^\s]/,ve=["flat","outline","push","unelevated"],fe=(e,r)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":r,be={...Z,...te,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...ve.reduce((e,r)=>(e[r]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...re.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function ge(e){const r=p(e,se),v=oe(e),{hasRouterLink:E,hasLink:x,linkTag:L,linkAttrs:T,navigateOnClick:w}=ne({fallbackTag:"button"}),S=u(()=>{const a=e.fab===!1&&e.fabMini===!1?r.value:{};return e.padding!==void 0?Object.assign({},a,{padding:e.padding.split(/\s+/).map(d=>d in j?j[d]+"px":d).join(" "),minWidth:"0",minHeight:"0"}):a}),P=u(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),h=u(()=>e.disable!==!0&&e.loading!==!0),R=u(()=>h.value===!0?e.tabindex||0:-1),n=u(()=>fe(e,"standard")),B=u(()=>{const a={tabindex:R.value};return x.value===!0?Object.assign(a,T.value):ce.includes(e.type)===!0&&(a.type=e.type),L.value==="a"?(e.disable===!0?a["aria-disabled"]="true":a.href===void 0&&(a.role="button"),E.value!==!0&&de.test(e.type)===!0&&(a.type=e.type)):e.disable===!0&&(a.disabled="",a["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(a,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),a}),c=u(()=>{let a;e.color!==void 0?e.flat===!0||e.outline===!0?a=`text-${e.textColor||e.color}`:a=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(a=`text-${e.textColor}`);const d=e.round===!0?"round":`rectangle${P.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${n.value} q-btn--${d}`+(a!==void 0?" "+a:"")+(h.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),y=u(()=>v.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:c,style:S,innerClasses:y,attributes:B,hasLink:x,linkTag:L,navigateOnClick:w,isActionable:h}}const{passiveCapture:i}=G;let b=null,g=null,m=null;var Ee=le({name:"QBtn",props:{...be,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:r,emit:v}){const{proxy:E}=V(),{classes:x,style:L,innerClasses:T,attributes:w,hasLink:S,linkTag:P,navigateOnClick:h,isActionable:R}=ge(e),n=$(null),B=$(null);let c=null,y,a=null;const d=u(()=>e.label!==void 0&&e.label!==null&&e.label!==""),K=u(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:S.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),Q=u(()=>({center:e.round})),z=u(()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}}),D=u(()=>{if(e.loading===!0)return{onMousedown:q,onTouchstart:q,onClick:q,onKeydown:q,onKeyup:q};if(R.value===!0){const t={onClick:M,onKeydown:N,onMousedown:H};if(E.$q.platform.has.touch===!0){const l=e.onTouchstart!==void 0?"":"Passive";t[`onTouchstart${l}`]=W}return t}return{onClick:f}}),I=u(()=>({ref:n,class:"q-btn q-btn-item non-selectable no-outline "+x.value,style:L.value,...w.value,...D.value}));function M(t){if(n.value!==null){if(t!==void 0){if(t.defaultPrevented===!0)return;const l=document.activeElement;if(e.type==="submit"&&l!==document.body&&n.value.contains(l)===!1&&l.contains(n.value)===!1){n.value.focus();const C=()=>{document.removeEventListener("keydown",f,!0),document.removeEventListener("keyup",C,i),n.value!==null&&n.value.removeEventListener("blur",C,i)};document.addEventListener("keydown",f,!0),document.addEventListener("keyup",C,i),n.value.addEventListener("blur",C,i)}}h(t)}}function N(t){n.value!==null&&(v("keydown",t),O(t,[13,32])===!0&&g!==n.value&&(g!==null&&k(),t.defaultPrevented!==!0&&(n.value.focus(),g=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("keyup",s,!0),n.value.addEventListener("blur",s,i)),f(t)))}function W(t){n.value!==null&&(v("touchstart",t),t.defaultPrevented!==!0&&(b!==n.value&&(b!==null&&k(),b=n.value,c=t.target,c.addEventListener("touchcancel",s,i),c.addEventListener("touchend",s,i)),y=!0,a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,y=!1},200)))}function H(t){n.value!==null&&(t.qSkipRipple=y===!0,v("mousedown",t),t.defaultPrevented!==!0&&m!==n.value&&(m!==null&&k(),m=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("mouseup",s,i)))}function s(t){if(n.value!==null&&!(t!==void 0&&t.type==="blur"&&document.activeElement===n.value)){if(t!==void 0&&t.type==="keyup"){if(g===n.value&&O(t,[13,32])===!0){const l=new MouseEvent("click",t);l.qKeyEvent=!0,t.defaultPrevented===!0&&J(l),t.cancelBubble===!0&&Y(l),n.value.dispatchEvent(l),f(t),t.qKeyEvent=!0}v("keyup",t)}k()}}function k(t){const l=B.value;t!==!0&&(b===n.value||m===n.value)&&l!==null&&l!==document.activeElement&&(l.setAttribute("tabindex",-1),l.focus()),b===n.value&&(c!==null&&(c.removeEventListener("touchcancel",s,i),c.removeEventListener("touchend",s,i)),b=c=null),m===n.value&&(document.removeEventListener("mouseup",s,i),m=null),g===n.value&&(document.removeEventListener("keyup",s,!0),n.value!==null&&n.value.removeEventListener("blur",s,i),g=null),n.value!==null&&n.value.classList.remove("q-btn--active")}function q(t){f(t),t.qSkipRipple=!0}return F(()=>{k(!0)}),Object.assign(E,{click:M}),()=>{let t=[];e.icon!==void 0&&t.push(o(_,{name:e.icon,left:e.stack===!1&&d.value===!0,role:"img","aria-hidden":"true"})),d.value===!0&&t.push(o("span",{class:"block"},[e.label])),t=ue(r.default,t),e.iconRight!==void 0&&e.round===!1&&t.push(o(_,{name:e.iconRight,right:e.stack===!1&&d.value===!0,role:"img","aria-hidden":"true"}));const l=[o("span",{class:"q-focus-helper",ref:B})];return e.loading===!0&&e.percentage!==void 0&&l.push(o("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[o("span",{class:"q-btn__progress-indicator fit block",style:z.value})])),l.push(o("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+T.value},t)),e.loading!==null&&l.push(o(X,{name:"q-transition--fade"},()=>e.loading===!0?[o("span",{key:"loading",class:"absolute-full flex flex-center"},r.loading!==void 0?r.loading():[o(ee)])]:null)),U(o(P.value,I.value,l),[[ae,K.value,void 0,Q.value]])}}});export{Ee as Q};
