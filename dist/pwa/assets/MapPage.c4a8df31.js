import{u as p,a as v,Q as u,e as _}from"./QIcon.b1b3bd66.js";import{m as f,l as m,q as i,o as g,h,c as S,H as d,i as s,k as c,e as x}from"./index.856d33eb.js";import{Q as y}from"./QInput.a6f20e48.js";import{L as r}from"./leaflet-src.1e8beabd.js";import{u as w}from"./user-store.ac898c93.js";import"./QSpinner.e4dc0084.js";import"./use-dark.89ced53c.js";import"./_commonjsHelpers.4e997714.js";var z=f({name:"QAvatar",props:{...p,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:l}){const a=v(e),o=m(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),t=m(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const n=e.icon!==void 0?[i(u,{name:e.icon})]:void 0;return i("div",{class:o.value,style:a.value},[i("div",{class:"q-avatar__content row flex-center overflow-hidden",style:t.value},_(l.default,n))])}}});const q={id:"mapPage","data-aos":"zoom-out",class:"scrollbar-hide"},C={class:"form q-px-lg q-mt-lg"},b=["src"],k=d("div",{id:"map"},null,-1),A={__name:"MapPage",setup(e){const l=w();return g(()=>{function a(t){var n=t.accuracy;r.marker(t.latlng).addTo(o).bindPopup("You are within "+n+" meters from this point").openPopup(),r.circle(t.latlng,n).addTo(o)}let o=r.map("map").setView([51.505,-.09],13);r.Browser.mobile&&o.removeControl(o.zoomControl),r.tileLayer("https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(o),o.locate({setView:!0,maxZoom:16}),o.on("locationfound",a)}),(a,o)=>(h(),S("div",q,[d("div",C,[s(y,{"bg-color":"white",color:"white",dense:"",outlined:"",standout:"",rounded:"",placeholder:"Cari lokasi bangunan..."},{prepend:c(()=>[s(u,{name:"place"})]),append:c(()=>[s(u,{name:"close",onClick:o[0]||(o[0]=t=>a.text=""),class:"cursor-pointer"}),s(z,null,{default:c(()=>[d("img",{src:x(l).avatar},null,8,b)]),_:1})]),_:1})]),k]))}};export{A as default};
