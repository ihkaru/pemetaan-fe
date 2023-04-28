import{Q as p}from"./QIcon.452cf279.js";import{Q as m}from"./QInput.b1ab6f3d.js";import{L as e}from"./leaflet-src.1e8beabd.js";import{x as l,o as c,c as d,u as s,a as r,w as i}from"./index.a6ae9af0.js";import"./render.669f01c6.js";import"./QSpinner.f0c98493.js";import"./uid.4e8ba1d5.js";import"./_commonjsHelpers.4e997714.js";const u={id:"mapPage","data-aos":"zoom-out",class:"scrollbar-hide"},_={class:"form q-px-xl q-mt-lg"},g=s("div",{id:"map"},null,-1),M={__name:"MapPage",setup(h){return l(()=>{function a(t){var n=t.accuracy;e.marker(t.latlng).addTo(o).bindPopup("You are within "+n+" meters from this point").openPopup(),e.circle(t.latlng,n).addTo(o)}let o=e.map("map").setView([51.505,-.09],13);e.tileLayer("https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(o),o.locate({setView:!0,maxZoom:16}),o.on("locationfound",a)}),(a,o)=>(c(),d("div",u,[s("div",_,[r(m,{"bg-color":"white",color:"white",outlined:"",standout:"",rounded:"",placeholder:"Cari lokasi bangunan..."},{prepend:i(()=>[r(p,{name:"place"})]),append:i(()=>[r(p,{name:"close",onClick:o[0]||(o[0]=t=>a.text=""),class:"cursor-pointer"})]),_:1})]),g]))}};export{M as default};
