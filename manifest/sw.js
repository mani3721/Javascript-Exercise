self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(['./', "style.css", "logo.jpg"]).catch(error => {
                console.error('Failed to cache files:', error);
            });
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
caches.match(e.request).then(res =>{
    return res || fetch(e.request)
})
    )
});