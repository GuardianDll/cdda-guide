if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let t={};const c=e=>s(e,o),l={module:{uri:o},exports:t,require:c};n[o]=Promise.all(i.map((e=>l[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-690ac063"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"b0d5d951a6e5167e9bcae84ed41cf1f8"},{url:"assets/dont_panic-c90f0625.png",revision:null},{url:"assets/index-31d0f806.css",revision:null},{url:"assets/index-9d34df65.js",revision:null},{url:"assets/workbox-window.prod.es5-dc90f814.js",revision:null},{url:"favicon.png",revision:"a9f33639a8462cb7299f08c5cb1f3628"},{url:"global.css",revision:"48a242ee920598989a1733b2356cbd31"},{url:"icon-192.png",revision:"5160a2c7b69e85b6621e3e01af05ffc9"},{url:"icon-512.png",revision:"3c525e66297027aa1168dcf24730023d"},{url:"index.html",revision:"9faf93b5b840058a50ad940732a8d211"},{url:"favicon.png",revision:"a9f33639a8462cb7299f08c5cb1f3628"},{url:"icon-192.png",revision:"5160a2c7b69e85b6621e3e01af05ffc9"},{url:"icon-512.png",revision:"3c525e66297027aa1168dcf24730023d"},{url:"manifest.webmanifest",revision:"e6f3d0d4146527811b4210773ee575f2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/.*\/latest\/all\.json$/,new e.NetworkFirst,"GET"),e.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/.*\/all\.json$/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cds.svc.transifex.net\//,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=sw.js.map
