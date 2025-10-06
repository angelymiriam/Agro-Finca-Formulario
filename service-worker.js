self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('agrofinca-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'style.css',
        'manifest.json',
        'logo-agrofinca.jpeg',
        'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
