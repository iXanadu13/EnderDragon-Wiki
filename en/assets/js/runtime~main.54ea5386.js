(()=>{"use strict";var e,a,r,c,t,d={},f={};function o(e){var a=f[e];if(void 0!==a)return a.exports;var r=f[e]={id:e,loaded:!1,exports:{}};return d[e].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=d,o.c=f,e=[],o.O=(a,r,c,t)=>{if(!r){var d=1/0;for(i=0;i<e.length;i++){r=e[i][0],c=e[i][1],t=e[i][2];for(var f=!0,n=0;n<r.length;n++)(!1&t||d>=t)&&Object.keys(o.O).every((e=>o.O[e](r[n])))?r.splice(n--,1):(f=!1,t<d&&(d=t));if(f){e.splice(i--,1);var b=c();void 0!==b&&(a=b)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[r,c,t]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var t=Object.create(null);o.r(t);var d={};a=a||[null,r({}),r([]),r(r)];for(var f=2&c&&e;"object"==typeof f&&!~a.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,o.d(t,d),t},o.d=(e,a)=>{for(var r in a)o.o(a,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,r)=>(o.f[r](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",55:"3e7c57a7",84:"fe1e7c33",113:"68311306",135:"906612ed",327:"fcce39d1",967:"a4c7e517",1554:"7ce94ac8",2229:"3248b0dc",2256:"fccd0d86",2379:"0eb6201e",2581:"f721313f",2919:"5b2d1108",2932:"e3965141",3072:"004c767c",3085:"1f391b9e",3384:"c4c1323d",4062:"2389a161",4195:"c4f5d8e4",4219:"c58ed8dd",4245:"5b20a1f7",4293:"5e192984",4295:"c90f50ea",4311:"f003ca58",4682:"4241b5ba",4839:"433fbc6d",5837:"2a09496c",5919:"aec0576d",6556:"fb8c1d05",6676:"ec64508e",6931:"d55c78d3",6944:"fec849c4",7414:"393be207",7570:"d88bf9b5",7599:"6631ca75",7719:"e620e338",7916:"ee2a2f34",7918:"17896441",7920:"1a4e3797",8145:"52a5a9d8",8324:"1a50cc63",8652:"1bd065b9",8733:"4d03046d",9055:"967029af",9514:"1be78505",9644:"082c49ea",9671:"0e384e19",9793:"0ed9c412",9817:"14eb3368",9920:"839931dd"}[e]||e)+"."+{53:"31b8dc5d",55:"50dfe58f",84:"91f2a67b",113:"7ea7b64a",135:"bf0dccb5",327:"9c355bf9",967:"61fad09d",1554:"f270dd9b",1690:"e46013a0",2229:"e4565255",2256:"6c4500a7",2379:"cac1518b",2581:"29102e44",2919:"6d0009ae",2932:"a7ee8cd5",3072:"5bafe984",3085:"e9499685",3384:"03cda19b",4062:"8e56067e",4195:"6169ab63",4219:"44246619",4245:"383da652",4293:"f5fc4dcc",4295:"7d0d5d5b",4311:"bbcc4143",4682:"56971e3b",4839:"17d15b69",4972:"99c7b304",5525:"ec6b54ae",5837:"53897646",5919:"d7bee8ff",6556:"fffa59cd",6676:"ff12cc67",6931:"33d7a60c",6944:"131daef1",7414:"d885c013",7570:"be967dac",7599:"bc00bce4",7719:"e9d440a6",7916:"d4c50590",7918:"1e16a62d",7920:"82882e0e",8145:"332eaa87",8324:"7408fe14",8443:"b149fc15",8652:"240bf9a4",8733:"01e58486",9055:"40dd23ba",9514:"cbd66ccd",9644:"70f5a858",9671:"64114132",9793:"3c8eebf0",9817:"332c1fbb",9920:"4690aca4"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},t="enderdragon-wiki:",o.l=(e,a,r,d)=>{if(c[e])c[e].push(a);else{var f,n;if(void 0!==r)for(var b=document.getElementsByTagName("script"),i=0;i<b.length;i++){var u=b[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+r){f=u;break}}f||(n=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,o.nc&&f.setAttribute("nonce",o.nc),f.setAttribute("data-webpack",t+r),f.src=e),c[e]=[a];var l=(a,r)=>{f.onerror=f.onload=null,clearTimeout(s);var t=c[e];if(delete c[e],f.parentNode&&f.parentNode.removeChild(f),t&&t.forEach((e=>e(r))),a)return a(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),n&&document.head.appendChild(f)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/EnderDragon-Wiki/en/",o.gca=function(e){return e={17896441:"7918",68311306:"113","935f2afb":"53","3e7c57a7":"55",fe1e7c33:"84","906612ed":"135",fcce39d1:"327",a4c7e517:"967","7ce94ac8":"1554","3248b0dc":"2229",fccd0d86:"2256","0eb6201e":"2379",f721313f:"2581","5b2d1108":"2919",e3965141:"2932","004c767c":"3072","1f391b9e":"3085",c4c1323d:"3384","2389a161":"4062",c4f5d8e4:"4195",c58ed8dd:"4219","5b20a1f7":"4245","5e192984":"4293",c90f50ea:"4295",f003ca58:"4311","4241b5ba":"4682","433fbc6d":"4839","2a09496c":"5837",aec0576d:"5919",fb8c1d05:"6556",ec64508e:"6676",d55c78d3:"6931",fec849c4:"6944","393be207":"7414",d88bf9b5:"7570","6631ca75":"7599",e620e338:"7719",ee2a2f34:"7916","1a4e3797":"7920","52a5a9d8":"8145","1a50cc63":"8324","1bd065b9":"8652","4d03046d":"8733","967029af":"9055","1be78505":"9514","082c49ea":"9644","0e384e19":"9671","0ed9c412":"9793","14eb3368":"9817","839931dd":"9920"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,r)=>{var c=o.o(e,a)?e[a]:void 0;if(0!==c)if(c)r.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var t=new Promise(((r,t)=>c=e[a]=[r,t]));r.push(c[2]=t);var d=o.p+o.u(a),f=new Error;o.l(d,(r=>{if(o.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var t=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.src;f.message="Loading chunk "+a+" failed.\n("+t+": "+d+")",f.name="ChunkLoadError",f.type=t,f.request=d,c[1](f)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,r)=>{var c,t,d=r[0],f=r[1],n=r[2],b=0;if(d.some((a=>0!==e[a]))){for(c in f)o.o(f,c)&&(o.m[c]=f[c]);if(n)var i=n(o)}for(a&&a(r);b<d.length;b++)t=d[b],o.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return o.O(i)},r=self.webpackChunkenderdragon_wiki=self.webpackChunkenderdragon_wiki||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))})()})();