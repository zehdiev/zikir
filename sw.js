/* Зикирь – service worker.
   В браузъра нищо не се тегли предварително. Пълното изтегляне за офлайн
   става само в инсталираното приложение (страницата праща съобщение 'download').
   Този файл се генерира автоматично. Версия: f3c47bdeef */
const VERSION = 'zikir-f3c47bdeef';
const FILES = [
 "./",
 "index.html",
 "abdest.html",
 "djevshen.html",
 "dua_kumail.html",
 "gradinite.html",
 "hizb.html",
 "hizb_new.html",
 "irshad.html",
 "istigfar.html",
 "lekarstva.html",
 "mechsreshtumagiite.html",
 "mevlid.html",
 "mevlid_tr.html",
 "ramazanskadua.html",
 "salatsalam.html",
 "salevati.html",
 "tainite.html",
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
const MARK = '__offline_ready__';   // marks a fully downloaded cache

let running = null;

async function isFull(cache) { return !!(await cache.match(MARK)); }

async function oldCaches() {
  return (await caches.keys()).filter(k => k.startsWith('zikir-') && k !== VERSION);
}

async function download(refresh) {
  const cache = await caches.open(VERSION);
  const old = await oldCaches();
  for (const f of FILES) {
    if (!refresh && await cache.match(f)) continue;
    let ok = false;
    for (let i = 0; i < 3 && !ok; i++) {
      try {
        const res = await fetch(new Request(f, { cache: 'no-cache' }));
        if (res.ok) { await cache.put(f, res); ok = true; }
      } catch (e) { /* retry */ }
    }
    if (!ok) {
      for (const k of old) {
        const hit = await (await caches.open(k)).match(f);
        if (hit) { await cache.put(f, hit); ok = true; break; }
      }
    }
  }
  let all = true;
  for (const f of FILES) if (!(await cache.match(f))) { all = false; break; }
  if (all) await cache.put(MARK, new Response('1'));
  return all;
}

function startDownload(refresh) {
  if (!running) running = download(refresh).finally(() => { running = null; });
  return running;
}

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    // an installed app that was already offline-ready gets the new version in full
    let wasFull = false;
    for (const k of await oldCaches()) if (await isFull(await caches.open(k))) { wasFull = true; break; }
    if (wasFull) await download(true);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await oldCaches()) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('message', e => {
  const d = e.data || {};
  if (d.type === 'download') {
    e.waitUntil(startDownload(false));
  } else if (d.type === 'status') {
    e.waitUntil((async () => {
      const cache = await caches.open(VERSION);
      let done = 0;
      for (const f of FILES) if (await cache.match(f)) done++;
      const full = await isFull(cache);
      e.ports[0] && e.ports[0].postMessage({ done, total: FILES.length, full, busy: !!running });
    })());
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
    if (!hit) {
      // browser mode (nothing downloaded): plain network
      try { return await fetch(req); }
      catch (err) {
        if (req.mode === 'navigate') { const home = await cache.match('index.html'); if (home) return home; }
        return new Response('Няма връзка с интернет.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
      }
    }
    // offline copy exists: answer from it, refresh it in the background
    e.waitUntil(fetch(req).then(res => {
      if (res.ok && res.type === 'basic') return cache.put(req, res);
    }).catch(() => {}));
    return hit;
  })());
});
