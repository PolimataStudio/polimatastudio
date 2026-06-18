const CACHE_NAME = 'polimata-v1';
const urlsToCache = [
  '/polimatastudio/',
  '/polimatastudio/index.html',
  '/polimatastudio/pages/solucoes.html',
  '/polimatastudio/pages/producoes.html',
  '/polimatastudio/pages/sobre.html',
  '/polimatastudio/pages/contato.html',
  '/polimatastudio/demos/',
  '/polimatastudio/demos/church/',
  '/polimatastudio/demos/school/',
  '/polimatastudio/demos/author/',
  '/polimatastudio/demos/portfolio/',
  '/polimatastudio/components/navbar.html',
  '/polimatastudio/components/footer.html',
  '/polimatastudio/css/tokens.css',
  '/polimatastudio/css/base.css',
  '/polimatastudio/css/layout.css',
  '/polimatastudio/css/components.css',
  '/polimatastudio/css/pages.css',
  '/polimatastudio/js/app.js',
  '/polimatastudio/js/components.js',
  '/polimatastudio/js/router.js',
  '/polimatastudio/js/forms.js',
  '/polimatastudio/js/pwa.js',
  '/polimatastudio/js/analytics.js',
  '/polimatastudio/manifest/manifest.json',
  '/polimatastudio/assets/icons/favicon.ico',
  '/polimatastudio/assets/icons/icon-192.png',
  '/polimatastudio/assets/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});