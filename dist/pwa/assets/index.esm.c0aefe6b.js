import{r as k,d as h,u as _,a as L,o as v,c as I,e as u,f as q,g as T,n as E,h as y,w as O}from"./index.4fdf042b.js";Object.freeze({__proto__:null});var g={library:"https://accounts.google.com/gsi/client",defaultButtonConfig:{theme:"outline",size:"large"},scopes:"email profile openid"};const l=k({clientId:null,popupType:"CODE",prompt:!1,autoLogin:!1,idConfiguration:null,buttonConfig:g.defaultButtonConfig,callback:()=>{},error:null}),s=k({apiLoaded:!1,apiLoadIntitited:!1}),C=new Promise(e=>{const i=typeof window!="undefined";if(!s.apiLoadIntitited&&i){const t=document.createElement("script");s.apiLoadIntitited=!0,t.addEventListener("load",()=>{s.apiLoaded=!0,e(window.google)}),t.src=g.library,t.async=!0,t.defer=!0,document.head.appendChild(t)}}),f=e=>{s.apiLoadIntitited?s.apiLoaded?e(window.google):O(()=>s.apiLoaded,i=>{i&&e(window.google)}):C.then(i=>{e(i)})},x=(e,i,t,o)=>{if(!e.client_id)throw new Error("Prop client id required since plugin is not initialized with a client id");f(()=>{((n,p,r,a,c)=>{if(c){const w=n.callback;n.callback=m=>{m.credential?w&&w(m):c(m)}}window.google.accounts.id.initialize(n);const d=p.value;d&&!a&&window.google.accounts.id.renderButton(d,r)})(e,i,t.buttonConfig,o,t.error),t.prompt&&N({clientId:t.clientId,callback:t.callback,error:t.error,autoLogin:t.autoLogin})})},z=e=>new Promise((i,t)=>{f(o=>{if(!(e&&e.clientId||l.clientId))throw new Error("clientId is required since the plugin is not initialized with a Client Id");o.accounts.oauth2.initCodeClient({client_id:e&&e.clientId||l.clientId||"",scope:g.scopes,ux_mode:"popup",callback:n=>{n.code?i(n):t(n)}}).requestCode()})}),B=e=>new Promise((i,t)=>{f(o=>{if(!(e&&e.clientId||l.clientId))throw new Error("clientId is required since the plugin is not initialized with a Client Id");o.accounts.oauth2.initTokenClient({client_id:e&&e.clientId||l.clientId||"",scope:g.scopes,callback:n=>{n.access_token?i(n):t(n)}}).requestAccessToken()})}),N=e=>{if(!e&&(e={}),!e.clientId&&!l.clientId)throw new Error("clientId is required");const i={};return e.clientId&&(i.client_id=e.clientId),!e.clientId&&l.clientId&&(i.client_id=l.clientId),e.context&&(i.context=e.context),e.autoLogin!=null&&(i.auto_select=e.autoLogin),e.cancelOnTapOutside!=null&&(i.cancel_on_tap_outside=e.cancelOnTapOutside),new Promise((t,o)=>{i.callback=n=>{e&&e.callback&&e.callback(n),n.credential?t(n):o(n)},f(n=>{n.accounts.id.initialize(i),n.accounts.id.prompt(p=>{e&&e.onNotification&&e.onNotification(p),(r=>{const a=r.notification;let c="";a.isNotDisplayed()&&(c=a.getNotDisplayedReason()==="suppressed_by_user"?"Prompt was suppressed by user'. Refer https://developers.google.com/identity/gsi/web/guides/features#exponential_cooldown for more info":`Prompt was not displayed, reason for not displaying: ${a.getNotDisplayedReason()}`),a.isSkippedMoment()&&(c=`Prompt was skipped, reason for skipping: ${a.getSkippedReason()}`),c.length&&(r.error?r.error(c):r.reject(c))})({notification:p,reject:o,error:e&&e.error})})})})};var b=h({__name:"GoogleLogin",props:{clientId:{type:String,required:!1},prompt:{type:Boolean,required:!1,default:!1},autoLogin:{type:Boolean,required:!1,default:!1},popupType:{type:String,required:!1,default:"CODE"},idConfiguration:{type:Object,required:!1},buttonConfig:{type:Object,required:!1},callback:{type:Function,required:!1},error:{type:Function,required:!1}},setup(e){const i=e,t=!!_().default,o=((r,a)=>{const c={...r};for(const d in a)a[d]!==void 0&&a[d]!==null&&(c[d]=a[d]);return c})(l,i),n={client_id:o.clientId||null,auto_select:o.autoLogin||!1,callback:o.callback,...o.idConfiguration},p=L();return v(()=>{x(n,p,o,t)}),(r,a)=>(y(),I("div",{class:E(["g-btn-wrapper",[!u(s).apiLoaded&&"api-loading"]]),onClick:a[0]||(a[0]=c=>u(t)&&void(u(o).popupType==="TOKEN"?B({clientId:o.clientId}).then(d=>{o.callback&&o.callback(d)}):z({clientId:o.clientId}).then(d=>{o.callback&&o.callback(d)})))},[u(t)?q("v-if",!0):(y(),I("span",{key:0,ref_key:"buttonRef",ref:p,class:"g-btn"},null,512)),T(r.$slots,"default")],2))}});(function(e,i){i===void 0&&(i={});var t=i.insertAt;if(e&&typeof document!="undefined"){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t==="top"&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}})(`
.g-btn-wrapper[data-v-5e610566] {
  display: inline-block;
}
.g-btn-wrapper.api-loading[data-v-5e610566] {
  opacity: 0.5;
  pointer-events: none;
}
`),b.__scopeId="data-v-5e610566",b.__file="src/plugin/GoogleLogin.vue";var S={install:(e,i)=>{i&&(t=>{t.clientId&&(l.clientId=t.clientId),t.popupType&&(l.popupType=t.popupType),t.prompt!=null&&(l.prompt=t.prompt),t.autoLogin!=null&&(l.autoLogin=t.autoLogin),t.idConfiguration&&(l.idConfiguration=t.idConfiguration),t.buttonConfig&&(l.buttonConfig=t.buttonConfig),t.callback&&(l.callback=t.callback)})(i),C.then(()=>{if(i.clientId){const t={client_id:i.clientId,auto_select:i.autoLogin===!0,callback:i.callback,...i.idConfiguration};window.google.accounts.id.initialize(t),i.prompt&&window.google.accounts.id.prompt()}}),e.component("GoogleLogin",b)}};export{S as v};
