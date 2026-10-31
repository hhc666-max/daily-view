/**
 * 最小的 Service Worker：网络优先，断网时用缓存兜底。
 *
 * 为什么只做这么点：站点每天换一期，缓存太久会看到旧内容。
 * 所以策略是「能联网就拿最新的，拿不到才给上次那份」，不做预缓存清单。
 */
const CACHE = 'mrs-station-v1';
const SHELL = ['./index.html', './manifest.webmanifest', './assets/icon-192.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    fetch(req)
      .then((res) => {
        // 只缓存同源的 200 响应，避免把别的东西塞进来
        if (res.ok && new URL(req.url).origin === location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req).then((hit) => hit || caches.match('./index.html')))
  );
});
