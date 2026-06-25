/* ═══════════════════════════════════════════════
   خدمة التخزين المؤقت — Quran Hifdh Plan Service Worker
   ═══════════════════════════════════════════════ */

const CACHE_NAME = 'quran-hifdh-plan-v1';

// Resources to pre-cache on install
const PRECACHE_URLS = [
  '.',
  'index.html',
  'manifest.json',
  'icons/icon-192.svg',
  'icons/icon-512.svg'
];

// ── Install ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_URLS);
    })
  );
  // Activate immediately — don't wait for old tabs to close
  self.skipWaiting();
});

// ── Activate ──
self.addEventListener('activate', event => {
  // Clean old caches
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// ── Fetch (Cache-First then Network) ──
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // For Google Fonts and other CDN resources, use a Stale-While-Revalidate strategy
  const url = new URL(event.request.url);

  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(event.request).then(cached => {
          const fetchPromise = fetch(event.request).then(network => {
            cache.put(event.request, network.clone());
            return network;
          });
          return cached || fetchPromise;
        });
      })
    );
    return;
  }

  // For our own resources, Cache-First
  event.respondWith(
    caches.match(event.request).then(cached => {
      // Return cached if available
      if (cached) return cached;

      // Otherwise fetch from network and cache the result
      return fetch(event.request).then(network => {
        // Only cache same-origin and CDN resources (not analytics, etc.)
        if (event.request.url.startsWith(self.location.origin) ||
            url.hostname.includes('googleapis') ||
            url.hostname.includes('gstatic')) {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, network.clone());
            return network;
          });
        }
        return network;
      }).catch(() => {
        // Offline fallback — return the index page for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('index.html');
        }
        return new Response('Offline', { status: 503 });
      });
    })
  );
});
