(function(e){function t(t){for(var r,o,i=t[0],c=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&f.push(u[o][0]),u[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==u[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={1:0},u={1:0},a=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{2:"b5e65b9c",3:"2e897f7d",4:"6c63e028",5:"5594b8e4",6:"a54b1008"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={2:1,3:1,4:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{2:"c1bd7847",3:"b1ef065d",4:"846fb588",5:"31d6cfe0",6:"31d6cfe0"}[e]+".css",u=c.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===u))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===u)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],p.parentNode.removeChild(p),n(a)},p.href=u;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}u[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;a.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getUser",(function(){return S}));var o={};n.r(o),n.d(o,"setUser",(function(){return k})),n.d(o,"exitUser",(function(){return E}));var u={};n.r(u),n.d(u,"loginUser",(function(){return A})),n.d(u,"setUser",(function(){return M})),n.d(u,"exitUser",(function(){return T}));var a={};n.r(a),n.d(a,"someGetter",(function(){return N}));var i={};n.r(i),n.d(i,"someMutation",(function(){return B}));var c={};n.r(c),n.d(c,"getMovies",(function(){return z}));n("5319");var s=n("c973"),l=n.n(s),f=(n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("2b0e")),p=n("1f91"),d=n("42d2"),h=n("b05d"),m=n("18d6");f["a"].use(h["a"],{config:{},lang:p["a"],iconSet:d["a"],plugins:{LocalStorage:m["a"]}});var v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},y=[],g={name:"App"},b=g,w=n("2877"),P=Object(w["a"])(b,v,y,!1,null,null,null),x=P.exports,j=n("2f62"),O=function(){return{user:null}};function S(e){return e.user}function k(e,t){e.user=t}function E(e){e.user=null}var _=n("bc3a"),U=n.n(_);const $="https://my-json-server.typicode.com/alexanderkif/sibdev2";function A(e,t){return C.apply(this,arguments)}function C(){return C=l()((function*(e,{name:t,password:n}){return yield U.a.get(`${$}/users?name=${t}&password=${n}`).then((function(t){return t.data.length&&e.commit("setUser",t.data[0]),{user:t.data[0]}})).catch((function(e){return console.log(e),{error:e}}))})),C.apply(this,arguments)}function M(e,t){e.commit("setUser",t)}function T(e){e.commit("exitUser")}var q={namespaced:!0,getters:r,mutations:o,actions:u,state:O},L=function(){return{}};function N(){}function B(){}const G="AIzaSyAyz6E676Fjk4GGefPVkGyaQ7XcNuW4r9M",V="https://www.googleapis.com/youtube/v3";function z(e,t){return D.apply(this,arguments)}function D(){return D=l()((function*(e,{maxResults:t,q:n}){return yield U.a.get(`${V}/search?part=snippet&maxResults=${t}&q=${n}&key=${G}`).then((function(e){return console.log(e),{movies:e.data}})).catch((function(e){return console.log(e),{error:e}}))})),D.apply(this,arguments)}var F={namespaced:!0,getters:a,mutations:i,actions:c,state:L};f["a"].use(j["a"]);var I=function(){const e=new j["a"].Store({modules:{user:q,movie:F},strict:!1});return e},J=n("8c4f");n("e6cf");const Q=[{path:"/",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"5c65"))},{path:"favorites",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"3777"))},{path:"login",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"013f"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))}];var R=Q;f["a"].use(J["a"]);var H=function(){const e=new J["a"]({scrollBehavior:()=>({x:0,y:0}),routes:R,mode:"hash",base:""});return e},K=function(){return W.apply(this,arguments)};function W(){return W=l()((function*(){const e="function"===typeof I?yield I({Vue:f["a"]}):I,t="function"===typeof H?yield H({Vue:f["a"],store:e}):H;e.$router=t;const n={router:t,store:e,render:e=>e(x),el:"#q-app"};return{app:n,store:e,router:t}})),W.apply(this,arguments)}f["a"].prototype.$axios=U.a;const X="";function Y(){return Z.apply(this,arguments)}function Z(){return Z=l()((function*(){const{app:e,store:t,router:n}=yield K();let r=!1;const o=e=>{r=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},u=window.location.href.replace(window.location.origin,""),a=[void 0];for(let c=0;!1===r&&c<a.length;c++)if("function"===typeof a[c])try{yield a[c]({app:e,router:n,store:t,Vue:f["a"],ssrContext:null,redirect:o,urlPath:u,publicPath:X})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==r&&new f["a"](e)})),Z.apply(this,arguments)}Y()},"31cd":function(e,t,n){}});