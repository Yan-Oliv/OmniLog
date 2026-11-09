// flutter_service_worker.js - Este será usado automaticamente pelo Flutter
self.addEventListener('install', function(event) {
  console.log('🚀 Flutter Service Worker installing...');
  event.waitUntil(
    caches.open('omnia-flutter-v1').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './main.dart.js',
        './flutter.js',
        './icons/app_icon.png',
        './icons/Icon-192.png',
        './icons/Icon-512.png'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('🎯 Flutter Service Worker activating...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== 'omnia-flutter-v1') {
            console.log('🗑️  Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request).catch(function() {
        // Fallback para offline
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});