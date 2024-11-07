const CACHE_NAME = 'packdoestudante-cache-v1';
const URLsParaCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/apostilas.html',
  '/apostilas.css',
  '/bibliotecav.html',
  '/chat.html',
  '/curso.html',
  '/curso.css',
  '/curso.js',
  '/dicas.html',
  '/dicas.css',
  '/enemtest.html',
  '/formulas.html',
  '/formulas.css',
  '/formulas.js',
  '/grupos.html',
  '/index.html',
  '/jogo.html',
  '/jogo.css',
  '/jogo.js',
  '/media.html',
  '/media.css',
  '/nota.html',
  '/noticia.html',
  '/olimpiadas.html',
  '/sites.html',
  '/sites.css',
  '/teste.html',
  '/testee.html',
  '/teste.css',
  '/teste.js',
  '/videosaulas.html',
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
