// web/service-worker.js
const CACHE_NAME = 'omnia-v3';
const OFFLINE_URL = 'offline.html';
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './flutter.js',
  './flutter_service_worker.js',
  './main.dart.js',
  './icons/app_icon.png',
  './icons/Icon-192.png',
  './icons/Icon-512.png',
  './splash.css'
];

// 📦 INSTALL - Cache dos recursos essenciais
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => {
        console.log('[Service Worker] Skip waiting');
        return self.skipWaiting();
      })
  );
});

// 🎯 ACTIVATE - Limpar caches antigos
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[Service Worker] Claiming clients');
      return self.clients.claim();
    })
  );
});

// 🌐 FETCH - Estratégia Cache First, depois Network
self.addEventListener('fetch', event => {
  // Ignorar requisições não-GET e chrome-extension
  if (event.request.method !== 'GET' || 
      event.request.url.startsWith('chrome-extension://')) {
    return;
  }
  
  // Para Flutter, sempre tentar network primeiro, depois cache
  if (event.request.url.includes('main.dart.js') || 
      event.request.url.includes('flutter.js')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Clonar a resposta para cache
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, responseClone));
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }
  
  // Para outros recursos: Cache First
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          console.log('[Service Worker] Serving from cache:', event.request.url);
          return cachedResponse;
        }
        
        return fetch(event.request)
          .then(response => {
            // Verificar se a resposta é válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clonar para cache
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(error => {
            console.log('[Service Worker] Fetch failed:', error);
            
            // Se for uma página, mostrar offline.html
            if (event.request.mode === 'navigate') {
              return caches.match(OFFLINE_URL);
            }
            
            return new Response('Offline', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});

// 📱 PUSH NOTIFICATIONS
self.addEventListener('push', event => {
  console.log('[Service Worker] Push received');
  
  let data = { title: 'Nova notificação', body: 'Você tem uma nova mensagem' };
  
  if (event.data) {
    data = event.data.json();
  }
  
  const options = {
    body: data.body,
    icon: './icons/app_icon.png',
    badge: './icons/app_icon.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      {
        action: 'close',
        title: 'Fechar',
        icon: './icons/close.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// 🔔 NOTIFICATION CLICK
self.addEventListener('notificationclick', event => {
  console.log('[Service Worker] Notification click received');
  
  event.notification.close();
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(clientList => {
        // Se já tem uma janela aberta, foca nela
        for (const client of clientList) {
          if (client.url === '/' && 'focus' in client) {
            return client.focus();
          }
        }
        
        // Se não, abre nova janela
        if (clients.openWindow) {
          return clients.openWindow('/');
        }
      })
  );
});