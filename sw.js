/* MDM Billing service worker */
const V='mdm-v37',CORE=['./','index.html','manifest.webmanifest','favicon.ico','404.html','icons/icon-192.png','icons/icon-512.png','icons/icon-180.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(CORE.map(u=>c.add(u).catch(()=>0)))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
const put=(r,q)=>{if(r&&(r.ok||r.type==='opaque')){const cp=r.clone();caches.open(V).then(c=>c.put(q,cp))}return r};
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET')return;const u=new URL(q.url);
 if(q.mode==='navigate'){e.respondWith(Promise.race([fetch(q).then(r=>put(r,'index.html')),new Promise((_,j)=>setTimeout(j,4000))]).catch(()=>caches.match('index.html',{ignoreSearch:true}).then(r=>r||caches.match('404.html'))));return}
 if(u.origin===location.origin){e.respondWith(caches.match(q,{ignoreSearch:true}).then(c=>{const n=fetch(q).then(r=>put(r,q)).catch(()=>c);return c||n}));return}
 e.respondWith(caches.match(q).then(c=>c||fetch(q).then(r=>put(r,q)).catch(()=>c)))});
