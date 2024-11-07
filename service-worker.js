const CACHE_NAME = 'packdoestudante-cache-v1';
const URLsParaCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/images/logo.png',
  // Adicione outros arquivos que você deseja que sejam cacheados
];

// Instala o Service Worker e faz o cache dos arquivos definidos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLsParaCache);
    })
  );
});

// Ativa o Service Worker e limpa caches antigos
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercepta as requisições e serve os arquivos do cache quando offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
