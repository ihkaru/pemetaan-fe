import{u as d,a as s}from"./use-dark.6ea60706.js";import{e as u,d as n,h as c,j as l}from"./index.9f48036b.js";import{b as q}from"./QIcon.ab923e3c.js";var b=u({name:"QCard",props:{...d,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:e}}=l(),t=s(a,e),o=n(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>c(a.tag,{class:o.value},q(r.default))}});export{b as Q};