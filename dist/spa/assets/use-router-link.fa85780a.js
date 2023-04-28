import{b as w}from"./render.7e181e6f.js";import{N as I,M as K,O as T,P as M,K as j,Q as D,d as i,g as B}from"./index.a2f752a4.js";function N(e,r){const a=e.style;for(const t in r)a[t]=r[t]}function F(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const r=I(e);if(r)return r.$el||r}function V(e,r=250){let a=!1,t;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},r),t=e.apply(this,arguments)),t}}function L(e,r,a,t){a.modifiers.stop===!0&&j(e);const n=a.modifiers.color;let c=a.modifiers.center;c=c===!0||t===!0;const u=document.createElement("span"),s=document.createElement("span"),R=D(e),{left:f,top:p,width:y,height:k}=r.getBoundingClientRect(),d=Math.sqrt(y*y+k*k),$=d/2,h=`${(y-d)/2}px`,b=c?h:`${R.left-f-$}px`,C=`${(k-d)/2}px`,_=c?C:`${R.top-p-$}px`;s.className="q-ripple__inner",N(s,{height:`${d}px`,width:`${d}px`,transform:`translate3d(${b},${_},0) scale3d(.2,.2,1)`,opacity:0}),u.className=`q-ripple${n?" text-"+n:""}`,u.setAttribute("dir","ltr"),u.appendChild(s),r.appendChild(u);const x=()=>{u.remove(),clearTimeout(q)};a.abort.push(x);let q=setTimeout(()=>{s.classList.add("q-ripple__inner--enter"),s.style.transform=`translate3d(${h},${C},0) scale3d(1,1,1)`,s.style.opacity=.2,q=setTimeout(()=>{s.classList.remove("q-ripple__inner--enter"),s.classList.add("q-ripple__inner--leave"),s.style.opacity=0,q=setTimeout(()=>{u.remove(),a.abort.splice(a.abort.indexOf(x),1)},275)},250)},50)}function O(e,{modifiers:r,value:a,arg:t}){const n=Object.assign({},e.cfg.ripple,r,a);e.modifiers={early:n.early===!0,stop:n.stop===!0,center:n.center===!0,color:n.color||t,keyCodes:[].concat(n.keyCodes||13)}}var G=w({name:"ripple",beforeMount(e,r){const a=r.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const t={cfg:a,enabled:r.value!==!1,modifiers:{},abort:[],start(n){t.enabled===!0&&n.qSkipRipple!==!0&&n.type===(t.modifiers.early===!0?"pointerdown":"click")&&L(n,e,t,n.qKeyEvent===!0)},keystart:V(n=>{t.enabled===!0&&n.qSkipRipple!==!0&&K(n,t.modifiers.keyCodes)===!0&&n.type===`key${t.modifiers.early===!0?"down":"up"}`&&L(n,e,t,!0)},300)};O(t,r),e.__qripple=t,T(t,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,r){if(r.oldValue!==r.value){const a=e.__qripple;a!==void 0&&(a.enabled=r.value!==!1,a.enabled===!0&&Object(r.value)===r.value&&O(a,r))}},beforeUnmount(e){const r=e.__qripple;r!==void 0&&(r.abort.forEach(a=>{a()}),M(r,"main"),delete e._qripple)}});function H(e){return e.appContext.config.globalProperties.$router!==void 0}function J(e){return e.isUnmounted===!0||e.isDeactivated===!0}function P(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function S(e,r){return(e.aliasOf||e)===(r.aliasOf||r)}function U(e,r){for(const a in r){const t=r[a],n=e[a];if(typeof t=="string"){if(t!==n)return!1}else if(Array.isArray(n)===!1||n.length!==t.length||t.some((c,u)=>c!==n[u]))return!1}return!0}function E(e,r){return Array.isArray(r)===!0?e.length===r.length&&e.every((a,t)=>a===r[t]):e.length===1&&e[0]===r}function Q(e,r){return Array.isArray(e)===!0?E(e,r):Array.isArray(r)===!0?E(r,e):e===r}function X(e,r){if(Object.keys(e).length!==Object.keys(r).length)return!1;for(const a in e)if(Q(e[a],r[a])===!1)return!1;return!0}const W={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Z({fallbackTag:e,useDisableForRouterLinkProps:r=!0}={}){const a=B(),{props:t,proxy:n,emit:c}=a,u=H(a),s=i(()=>t.disable!==!0&&t.href!==void 0),R=r===!0?i(()=>u===!0&&t.disable!==!0&&s.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""):i(()=>u===!0&&s.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),f=i(()=>R.value===!0?_(t.to):null),p=i(()=>f.value!==null),y=i(()=>s.value===!0||p.value===!0),k=i(()=>t.type==="a"||y.value===!0?"a":t.tag||e||"div"),d=i(()=>s.value===!0?{href:t.href,target:t.target}:p.value===!0?{href:f.value.href,target:t.target}:{}),$=i(()=>{if(p.value===!1)return-1;const{matched:o}=f.value,{length:l}=o,v=o[l-1];if(v===void 0)return-1;const m=n.$route.matched;if(m.length===0)return-1;const g=m.findIndex(S.bind(null,v));if(g>-1)return g;const A=P(o[l-2]);return l>1&&P(v)===A&&m[m.length-1].path!==A?m.findIndex(S.bind(null,o[l-2])):g}),h=i(()=>p.value===!0&&$.value!==-1&&U(n.$route.params,f.value.params)),b=i(()=>h.value===!0&&$.value===n.$route.matched.length-1&&X(n.$route.params,f.value.params)),C=i(()=>p.value===!0?b.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":h.value===!0?` ${t.activeClass}`:"":"");function _(o){try{return n.$router.resolve(o)}catch{}return null}function x(o,{returnRouterError:l,to:v=t.to,replace:m=t.replace}={}){if(t.disable===!0)return o.preventDefault(),Promise.resolve(!1);if(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey||o.button!==void 0&&o.button!==0||t.target==="_blank")return Promise.resolve(!1);o.preventDefault();const g=n.$router[m===!0?"replace":"push"](v);return l===!0?g:g.then(()=>{}).catch(()=>{})}function q(o){if(p.value===!0){const l=v=>x(o,v);c("click",o,l),o.defaultPrevented!==!0&&l()}else c("click",o)}return{hasRouterLink:p,hasHrefLink:s,hasLink:y,linkTag:k,resolvedLink:f,linkIsActive:h,linkIsExactActive:b,linkClass:C,linkAttrs:d,getLink:_,navigateToRouterLink:x,navigateOnClick:q}}export{G as R,Z as a,H as b,N as c,F as g,W as u,J as v};