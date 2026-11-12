// Service worker: saves the app files so the site works offline.
// If you change any file, bump the number below (v1 -> v2) to be safe.
const PREFIX = 'days-months-';            // CHANGED: only touch our own caches
const CACHE = PREFIX + 'v10';              // CHANGED: bumped from v8
const FILES = [
  './',
  'index.html',
  'css/style.css',
  'js/data.js',
  'js/app.js',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
];

// 1) Install: download and store all files
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); })
  );
});

// 2) Activate: delete old caches from earlier versions of THIS app only
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (k) { return k.indexOf(PREFIX) === 0 && k !== CACHE; }) // CHANGED
          .map(function (k) { return caches.delete(k); })
      );
    }).then(function () { return self.clients.claim(); })
  );
});

// 3) Fetch: serve cached files first, then try the network
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;

  // Only handle requests from this website
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    (async function () {
      const cache = await caches.open(CACHE);             // CHANGED: open our cache once
      const cached = await cache.match(e.request);        // CHANGED: was caches.match

      // Use saved copy if available
      if (cached) return cached;

      try {
        const response = await fetch(e.request);

        if (response && response.ok) {
          await cache.put(e.request, response.clone());   // CHANGED: reuse the open cache
        }

        return response;

      } catch (error) {
        // Try the homepage if an offline navigation fails
        if (e.request.mode === 'navigate') {
          const homepage = await cache.match('./index.html'); // CHANGED: was caches.match
          if (homepage) return homepage;
        }

        // Always return a valid Response
        return new Response('You are currently offline.', {
          status: 503,
          headers: {
            'Content-Type': 'text/plain; charset=utf-8'
          }
        });
      }
    })()
  );
});