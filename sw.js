/* UK Tree Game — RETIRED service worker for the old /jans-tree-game/ URL.
   Self-destructs: clears caches, unregisters, reloads clients so the redirect index.html is served. */
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>{e.waitUntil((async()=>{
  try{const ks=await caches.keys();await Promise.all(ks.map(k=>caches.delete(k)));}catch(_){}
  try{await self.registration.unregister();}catch(_){}
  try{const cs=await self.clients.matchAll({type:"window"});cs.forEach(c=>c.navigate&&c.navigate(c.url));}catch(_){}
})());});
