/* Зикирь – service worker (v2).
   В браузъра нищо не се тегли предварително. Пълното изтегляне за офлайн става в инсталираното
   приложение (страницата праща 'download').
   При обновяване: тегли се само променените файлове; старото офлайн копие се пази и използва,
   докато новото не стане пълно. Файлът се генерира автоматично. Версия: 7a57ebd088 */
const VERSION = 'zikir-7a57ebd088';
const FILES = [
[
"./",
"42511f55d65a"
],
[
"index.html",
"42511f55d65a"
],
[
"abdest.html",
"cd6c015c5131"
],
[
"dalailalkhayrat.html",
"d187eea2db32"
],
[
"djevshen.html",
"e694cfb754e2"
],
[
"dua_kumail.html",
"080d8643deb1"
],
[
"duaibadet.html",
"c6b39ae9ad55"
],
[
"duazikr.html",
"16241af9a879"
],
[
"gradinite.html",
"e0a83e88c25b"
],
[
"hizb.html",
"a9f962eb30d2"
],
[
"hizb_new.html",
"66dc046d036d"
],
[
"irshad.html",
"45f10a4886b1"
],
[
"istigfar.html",
"9f2520b0cb90"
],
[
"istigfar_group.html",
"9f1deee3d06d"
],
[
"lekarstva.html",
"b15101ad7616"
],
[
"mechsreshtumagiite.html",
"a418b9597fae"
],
[
"mevlid.html",
"de88ea199c31"
],
[
"mevlid_osm.html",
"a0cec8dfa804"
],
[
"mevlid_tr.html",
"21fd47489772"
],
[
"ramazanskadua.html",
"1d2297b3ad86"
],
[
"sahifa.html",
"09514c66e5bc"
],
[
"salatsalam.html",
"dd5c0a70b7ff"
],
[
"salevati.html",
"618ece0933c3"
],
[
"tainite.html",
"07c9f0c851e8"
],
[
"fonts/files/alegreya-cyrillic-400-italic.woff2",
"f178c0c314c4"
],
[
"fonts/files/alegreya-cyrillic-400-normal.woff2",
"5bf014034414"
],
[
"fonts/files/alegreya-cyrillic-500-normal.woff2",
"84605e6123df"
],
[
"fonts/files/alegreya-cyrillic-700-normal.woff2",
"8c64bc27fede"
],
[
"fonts/files/alegreya-cyrillic-ext-400-italic.woff2",
"9027a3647042"
],
[
"fonts/files/alegreya-cyrillic-ext-400-normal.woff2",
"4b31aa121f12"
],
[
"fonts/files/alegreya-cyrillic-ext-500-normal.woff2",
"18e090a13d3b"
],
[
"fonts/files/alegreya-cyrillic-ext-700-normal.woff2",
"bf3c9aefc8aa"
],
[
"fonts/files/alegreya-latin-400-italic.woff2",
"0a668ce5fd47"
],
[
"fonts/files/alegreya-latin-400-normal.woff2",
"b6cf5bee7ec5"
],
[
"fonts/files/alegreya-latin-500-normal.woff2",
"9bbf45c59ce1"
],
[
"fonts/files/alegreya-latin-700-normal.woff2",
"e82409207504"
],
[
"fonts/files/alegreya-latin-ext-400-italic.woff2",
"10a4deeb0be7"
],
[
"fonts/files/alegreya-latin-ext-400-normal.woff2",
"f3d87ba82bd9"
],
[
"fonts/files/alegreya-latin-ext-500-normal.woff2",
"97a78b9694c6"
],
[
"fonts/files/alegreya-latin-ext-700-normal.woff2",
"0346ae0a1306"
],
[
"fonts/files/alegreya-sans-cyrillic-400-normal.woff2",
"5470920321ec"
],
[
"fonts/files/alegreya-sans-cyrillic-500-normal.woff2",
"9a5709aa9ddc"
],
[
"fonts/files/alegreya-sans-cyrillic-700-normal.woff2",
"e4babb0d302f"
],
[
"fonts/files/alegreya-sans-cyrillic-ext-400-normal.woff2",
"9624fc1c7e53"
],
[
"fonts/files/alegreya-sans-cyrillic-ext-500-normal.woff2",
"5335c5b27f68"
],
[
"fonts/files/alegreya-sans-cyrillic-ext-700-normal.woff2",
"a149c4fcdc6a"
],
[
"fonts/files/alegreya-sans-latin-400-normal.woff2",
"123cd4a1e139"
],
[
"fonts/files/alegreya-sans-latin-500-normal.woff2",
"005c64e2da1b"
],
[
"fonts/files/alegreya-sans-latin-700-normal.woff2",
"403b09118b4c"
],
[
"fonts/files/alegreya-sans-latin-ext-400-normal.woff2",
"0b02ba71b0c5"
],
[
"fonts/files/alegreya-sans-latin-ext-500-normal.woff2",
"bdb8ca23655c"
],
[
"fonts/files/alegreya-sans-latin-ext-700-normal.woff2",
"1d21b0dc841b"
],
[
"fonts/files/alegreya-sans-vietnamese-400-normal.woff2",
"786bdba4aabb"
],
[
"fonts/files/alegreya-sans-vietnamese-500-normal.woff2",
"116bf967ee16"
],
[
"fonts/files/alegreya-sans-vietnamese-700-normal.woff2",
"469f07b24f4b"
],
[
"fonts/files/alegreya-vietnamese-400-italic.woff2",
"db232ba9f052"
],
[
"fonts/files/alegreya-vietnamese-400-normal.woff2",
"38fa8c46fb0c"
],
[
"fonts/files/alegreya-vietnamese-500-normal.woff2",
"1dd7daf5a73b"
],
[
"fonts/files/alegreya-vietnamese-700-normal.woff2",
"6a2146579363"
],
[
"fonts/files/amiri-arabic-400-normal.woff2",
"2dfffa914688"
],
[
"fonts/files/amiri-arabic-700-normal.woff2",
"d4fcd1fe15ba"
],
[
"fonts/files/amiri-latin-400-normal.woff2",
"40bf01157d3e"
],
[
"fonts/files/amiri-latin-700-normal.woff2",
"a73a7c3b018c"
],
[
"fonts/files/amiri-latin-ext-400-normal.woff2",
"b53ce82485a1"
],
[
"fonts/files/amiri-latin-ext-700-normal.woff2",
"4fde6b58bbe5"
],
[
"fonts/files/aref-ruqaa-arabic-400-normal.woff2",
"3c5b344de7b9"
],
[
"fonts/files/golos-text-cyrillic-400-normal.woff2",
"9b9f7a46e4ee"
],
[
"fonts/files/golos-text-cyrillic-500-normal.woff2",
"094fc731c956"
],
[
"fonts/files/golos-text-cyrillic-600-normal.woff2",
"fe5bdb2a603d"
],
[
"fonts/files/golos-text-cyrillic-ext-400-normal.woff2",
"de267e441fa6"
],
[
"fonts/files/golos-text-cyrillic-ext-500-normal.woff2",
"832bb850bd12"
],
[
"fonts/files/golos-text-cyrillic-ext-600-normal.woff2",
"4f4a476735ed"
],
[
"fonts/files/golos-text-latin-400-normal.woff2",
"ed950a118b7c"
],
[
"fonts/files/golos-text-latin-500-normal.woff2",
"d259e6bfb345"
],
[
"fonts/files/golos-text-latin-600-normal.woff2",
"b94ff04d3f53"
],
[
"fonts/files/golos-text-latin-ext-400-normal.woff2",
"643360eef514"
],
[
"fonts/files/golos-text-latin-ext-500-normal.woff2",
"22006bf1131f"
],
[
"fonts/files/golos-text-latin-ext-600-normal.woff2",
"57bd4b348d62"
],
[
"fonts/files/literata-cyrillic-ext-opsz-italic.woff2",
"80d28ad07030"
],
[
"fonts/files/literata-cyrillic-ext-opsz-normal.woff2",
"3a5409635b55"
],
[
"fonts/files/literata-cyrillic-opsz-italic.woff2",
"bd814e05ced6"
],
[
"fonts/files/literata-cyrillic-opsz-normal.woff2",
"6fcebb598197"
],
[
"fonts/files/literata-latin-ext-opsz-italic.woff2",
"2cb7ee5aaf39"
],
[
"fonts/files/literata-latin-ext-opsz-normal.woff2",
"73bca12f92e5"
],
[
"fonts/files/literata-latin-opsz-italic.woff2",
"1f89072a63f1"
],
[
"fonts/files/literata-latin-opsz-normal.woff2",
"41df91de6947"
],
[
"fonts/files/literata-vietnamese-opsz-italic.woff2",
"13ab97ca2cb9"
],
[
"fonts/files/literata-vietnamese-opsz-normal.woff2",
"f77572849ef8"
],
[
"fonts/files/noto-serif-cyrillic-400-italic.woff2",
"bcd02199ddd4"
],
[
"fonts/files/noto-serif-cyrillic-400-normal.woff2",
"803624a42e2b"
],
[
"fonts/files/noto-serif-cyrillic-ext-400-italic.woff2",
"416c61709533"
],
[
"fonts/files/noto-serif-cyrillic-ext-400-normal.woff2",
"e4139c280be4"
],
[
"fonts/files/noto-serif-latin-400-italic.woff2",
"8684cd170b16"
],
[
"fonts/files/noto-serif-latin-400-normal.woff2",
"541afd780812"
],
[
"fonts/files/noto-serif-latin-ext-400-italic.woff2",
"4573d7f9e524"
],
[
"fonts/files/noto-serif-latin-ext-400-normal.woff2",
"320de1a017a4"
],
[
"fonts/files/noto-serif-vietnamese-400-italic.woff2",
"6957fee33450"
],
[
"fonts/files/noto-serif-vietnamese-400-normal.woff2",
"bcf1f0a80d6e"
],
[
"fonts/fonts.css",
"e3314f07a14c"
],
[
"icons/apple-touch-icon.png",
"54c3992cd0f2"
],
[
"icons/icon-192.png",
"91fb283c0954"
],
[
"icons/icon-512.png",
"35ad059a32fa"
],
[
"manifest.webmanifest",
"c4de94ca16fd"
],
[
"search.json",
"645d39fea19e"
]
];          // [path, content-hash]
const MANIFEST = '__manifest__'; // {path: hash} of what this cache holds
const MARK = '__offline_ready__';
const HASH = Object.fromEntries(FILES);
let running = null;

const allZikir = async () => (await caches.keys()).filter(k => k.startsWith('zikir-'));
const others = async () => (await allZikir()).filter(k => k !== VERSION);
async function readMan(cache) { const r = await cache.match(MANIFEST); try { return r ? await r.json() : {}; } catch (e) { return {}; } }
async function writeMan(cache, m) { await cache.put(MANIFEST, new Response(JSON.stringify(m), { headers: { 'Content-Type': 'application/json' } })); }

/* copy files whose content did not change from older caches (local, fast – no network) */
async function reuse() {
  const cache = await caches.open(VERSION); const man = await readMan(cache);
  for (const k of await others()) {
    const oc = await caches.open(k); const om = await readMan(oc);
    for (const [f, h] of FILES) {
      if (man[f] === h) continue;
      if (om[f] === h) { const r = await oc.match(f); if (r) { await cache.put(f, r); man[f] = h; } }
    }
  }
  await writeMan(cache, man);
  return { cache, man };
}

async function download() {
  const { cache, man } = await reuse();
  let changed = false;
  for (const [f, h] of FILES) {
    if (man[f] === h) continue;
    for (let i = 0; i < 3; i++) {
      try {
        const res = await fetch(new Request(f, { cache: 'no-cache' }));
        if (res.ok) { await cache.put(f, res); man[f] = h; changed = true; break; }
        if (res.status === 404) { man[f] = 'missing'; break; }   // not on the server: do not block the rest
      } catch (e) { /* offline or dropped: try again, then leave it for later */ }
    }
    if (changed && Math.random() < 0.2) await writeMan(cache, man);
  }
  await writeMan(cache, man);
  const done = FILES.every(([f, h]) => man[f] === h || man[f] === 'missing');
  if (done) {
    await cache.put(MARK, new Response('1'));
    for (const k of await others()) await caches.delete(k);   // only now the old copy can go
  }
  return done;
}
function start() { if (!running) running = download().finally(() => { running = null; }); return running; }

/* an unfinished update continues whenever a page is opened (only for apps that had an offline copy) */
async function resume() {
  if (running) return running;
  if (await (await caches.open(VERSION)).match(MARK)) return;
  for (const k of await allZikir()) if (await (await caches.open(k)).match(MARK)) return start();
}

self.addEventListener('install', e => {
  e.waitUntil((async () => { await reuse(); await self.skipWaiting(); })());
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    await self.clients.claim();
    // an app that already had an offline copy keeps itself up to date (only changed files)
    let had = false;
    for (const k of await others()) if (await (await caches.open(k)).match(MARK)) { had = true; break; }
    if (had) start();
  })());
});
self.addEventListener('message', e => {
  const d = e.data || {};
  if (d.type === 'download') e.waitUntil(start());
  else if (d.type === 'status') {
    e.waitUntil((async () => {
      const cache = await caches.open(VERSION); const man = await readMan(cache);
      const done = FILES.filter(([f, h]) => man[f] === h || man[f] === 'missing').length;
      let older = false;
      for (const k of await others()) if (await (await caches.open(k)).match(MARK)) { older = true; break; }
      const full = !!(await cache.match(MARK));
      e.ports[0] && e.ports[0].postMessage({ done, total: FILES.length, full, older, busy: !!running });
    })());
  }
});

async function fromCaches(req) {
  const cur = await caches.open(VERSION);
  let hit = await cur.match(req, { ignoreSearch: true });
  if (hit) return hit;
  for (const k of await others()) { hit = await (await caches.open(k)).match(req, { ignoreSearch: true }); if (hit) return hit; }
  return null;
}
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  if (req.mode === 'navigate') e.waitUntil(resume());
  e.respondWith((async () => {
    const hit = await fromCaches(req);
    if (hit) return hit;                       // offline copy (current or previous version) first
    try { return await fetch(req); }
    catch (err) {
      if (req.mode === 'navigate') {
        const home = (await fromCaches(new Request('index.html'))) || (await fromCaches(new Request('./')));
        if (home) return home;
      }
      return new Response('Няма връзка с интернет.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }
  })());
});
