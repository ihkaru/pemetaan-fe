import{d,e as t,f as s,h as g,i as c,g as p,l as f,p as h,_ as y,o as x,j as m,w as v,k as _}from"./index.108efa36.js";import{h as C}from"./render.a21be495.js";var P=d({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:o}){const{proxy:{$q:r}}=p(),e=c(f,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(c(h,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const i=s(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const u=e.isContainer.value===!0?e.containerHeight.value:r.screen.height;return n.styleFn(a,u)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":r.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":r.screen.height-a+"px"}}),l=s(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>g("main",{class:l.value,style:i.value},C(o.default))}});const Q={};function $(n,o){return x(),m(P,{class:"flex flex-center"},{default:v(()=>[_(" Landing page ")]),_:1})}var B=y(Q,[["render",$]]);export{B as default};