const CACHE = 'smartnote-v1';
  const FILES = [
    '/smart-note/',
    '/smart-note/index.html',
    '/smart-note/manifest.json',
    '/smart-note/icon.png'
  ];

  self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));      
  });

  self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request))       
    );
  });
