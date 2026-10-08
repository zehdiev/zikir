/* Зикирь – service worker за работа без интернет.
   Този файл се генерира автоматично. Версия: 4125811bc8 */
const VERSION = 'zikir-4125811bc8';
const FILES = [
 "./",
 "index.html",
 "dua_kumail.html",
 "gradinite.html",
 "hizb.html",
 "hizb_new.html",
 "istigfar.html",
 "mevlid.html",
 "mevlid_tr.html",
 "ramazanskadua.html",
 "salatsalam.html",
 "fonts/files/alegreya-cyrillic-400-italic.woff2",
 "fonts/files/alegreya-cyrillic-400-normal.woff2",
 "fonts/files/alegreya-cyrillic-500-normal.woff2",
 "fonts/files/alegreya-cyrillic-700-normal.woff2",
 "fonts/files/alegreya-cyrillic-ext-400-italic.woff2",
 "fonts/files/alegreya-cyrillic-ext-400-normal.woff2",
 "fonts/files/alegreya-cyrillic-ext-500-normal.woff2",
 "fonts/files/alegreya-cyrillic-ext-700-normal.woff2",
 "fonts/files/alegreya-latin-400-italic.woff2",
 "fonts/files/alegreya-latin-400-normal.woff2",
 "fonts/files/alegreya-latin-500-normal.woff2",
 "fonts/files/alegreya-latin-700-normal.woff2",
 "fonts/files/alegreya-latin-ext-400-italic.woff2",
 "fonts/files/alegreya-latin-ext-400-normal.woff2",
 "fonts/files/alegreya-latin-ext-500-normal.woff2",
 "fonts/files/alegreya-latin-ext-700-normal.woff2",
 "fonts/files/alegreya-sans-cyrillic-400-normal.woff2",
 "fonts/files/alegreya-sans-cyrillic-500-normal.woff2",
 "fonts/files/alegreya-sans-cyrillic-700-normal.woff2",
 "fonts/files/alegreya-sans-cyrillic-ext-400-normal.woff2",
 "fonts/files/alegreya-sans-cyrillic-ext-500-normal.woff2",
 "fonts/files/alegreya-sans-cyrillic-ext-700-normal.woff2",
 "fonts/files/alegreya-sans-latin-400-normal.woff2",
 "fonts/files/alegreya-sans-latin-500-normal.woff2",
 "fonts/files/alegreya-sans-latin-700-normal.woff2",
 "fonts/files/alegreya-sans-latin-ext-400-normal.woff2",
 "fonts/files/alegreya-sans-latin-ext-500-normal.woff2",
 "fonts/files/alegreya-sans-latin-ext-700-normal.woff2",
 "fonts/files/alegreya-sans-vietnamese-400-normal.woff2",
 "fonts/files/alegreya-sans-vietnamese-500-normal.woff2",
 "fonts/files/alegreya-sans-vietnamese-700-normal.woff2",
 "fonts/files/alegreya-vietnamese-400-italic.woff2",
 "fonts/files/alegreya-vietnamese-400-normal.woff2",
 "fonts/files/alegreya-vietnamese-500-normal.woff2",
 "fonts/files/alegreya-vietnamese-700-normal.woff2",
 "fonts/files/amiri-arabic-400-normal.woff2",
 "fonts/files/amiri-arabic-700-normal.woff2",
 "fonts/files/amiri-latin-400-normal.woff2",
 "fonts/files/amiri-latin-700-normal.woff2",
 "fonts/files/amiri-latin-ext-400-normal.woff2",
 "fonts/files/amiri-latin-ext-700-normal.woff2",
 "fonts/files/golos-text-cyrillic-400-normal.woff2",
 "fonts/files/golos-text-cyrillic-500-normal.woff2",
 "fonts/files/golos-text-cyrillic-600-normal.woff2",
 "fonts/files/golos-text-cyrillic-ext-400-normal.woff2",
 "fonts/files/golos-text-cyrillic-ext-500-normal.woff2",
 "fonts/files/golos-text-cyrillic-ext-600-normal.woff2",
 "fonts/files/golos-text-latin-400-normal.woff2",
 "fonts/files/golos-text-latin-500-normal.woff2",
 "fonts/files/golos-text-latin-600-normal.woff2",
 "fonts/files/golos-text-latin-ext-400-normal.woff2",
 "fonts/files/golos-text-latin-ext-500-normal.woff2",
 "fonts/files/golos-text-latin-ext-600-normal.woff2",
 "fonts/files/literata-cyrillic-ext-opsz-italic.woff2",
 "fonts/files/literata-cyrillic-ext-opsz-normal.woff2",
 "fonts/files/literata-cyrillic-opsz-italic.woff2",
 "fonts/files/literata-cyrillic-opsz-normal.woff2",
 "fonts/files/literata-latin-ext-opsz-italic.woff2",
 "fonts/files/literata-latin-ext-opsz-normal.woff2",
 "fonts/files/literata-latin-opsz-italic.woff2",
 "fonts/files/literata-latin-opsz-normal.woff2",
 "fonts/files/literata-vietnamese-opsz-italic.woff2",
 "fonts/files/literata-vietnamese-opsz-normal.woff2",
 "fonts/files/noto-serif-cyrillic-400-italic.woff2",
 "fonts/files/noto-serif-cyrillic-400-normal.woff2",
 "fonts/files/noto-serif-cyrillic-ext-400-italic.woff2",
 "fonts/files/noto-serif-cyrillic-ext-400-normal.woff2",
 "fonts/files/noto-serif-latin-400-italic.woff2",
 "fonts/files/noto-serif-latin-400-normal.woff2",
 "fonts/files/noto-serif-latin-ext-400-italic.woff2",
 "fonts/files/noto-serif-latin-ext-400-normal.woff2",
 "fonts/files/noto-serif-vietnamese-400-italic.woff2",
 "fonts/files/noto-serif-vietnamese-400-normal.woff2",
 "fonts/fonts.css",
 "icons/apple-touch-icon.png",
 "icons/icon-192.png",
 "icons/icon-512.png",
 "manifest.webmanifest"
];

let progress = { done: 0, total: FILES.length };

async function cacheAll() {
  const cache = await caches.open(VERSION);
  const old = (await caches.keys()).filter(k => k.startsWith('zikir-') && k !== VERSION);
  progress = { done: 0, total: FILES.length };
  for (const f of FILES) {
    const req = new Request(f, { cache: 'no-cache' });
    let ok = false;
    for (let i = 0; i < 3 && !ok; i++) {
      try {
        const res = await fetch(req);
        if (res.ok) { await cache.put(f, res); ok = true; }
      } catch (e) { /* retry */ }
    }
    if (!ok) {
      // fall back to a copy from the previous version, if there is one
      for (const k of old) {
        const hit = await (await caches.open(k)).match(f);
        if (hit) { await cache.put(f, hit); ok = true; break; }
      }
    }
    if (ok) progress.done++;
  }
}

self.addEventListener('install', e => {
  e.waitUntil(cacheAll().then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('zikir-') && k !== VERSION) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('message', async e => {
  if (e.data && e.data.type === 'status') {
    let done = progress.done;
    if (done < FILES.length) {
      const cache = await caches.open(VERSION);
      done = 0;
      for (const f of FILES) if (await cache.match(f)) done++;
    }
    e.ports[0] && e.ports[0].postMessage({ done, total: FILES.length });
  }
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  e.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const hit = await cache.match(req, { ignoreSearch: true });
    const net = fetch(req).then(res => {
      if (res.ok && res.type === 'basic') cache.put(req, res.clone());
      return res;
    }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    const res = await net;
    if (res) return res;
    if (req.mode === 'navigate') {
      const home = await cache.match('index.html');
      if (home) return home;
    }
    return new Response('Няма връзка с интернет.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  })());
});
