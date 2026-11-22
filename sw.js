/* Deutsch-Trilha · service worker: guarda o app no aparelho para funcionar sem internet.
   Estratégia do app: responde com o que está guardado e atualiza em segundo plano. Quando este arquivo muda (CACHE), o app avisa ou recarrega sozinho (app.js · updReady).
   Por isso: a cada publicação, mude CACHE.
   Áudios (audio/xx/*.mp3): ficam num cache separado, que não é apagado quando o app atualiza. Entram ali quando você
   toca um áudio pela primeira vez ou quando baixa um nível inteiro no Perfil. */
const CACHE = 'deutsch-trilha-v15'; // v15: atualização automática, imagens nas cartas e B1 do espanhol (M15–21) · v14: A2 do espanhol · v13: A1 do espanhol · v12: página do espanhol · v11: troca de idioma no Perfil e verificação em todos os passos · v10: inglês A1 a C2 completo · v9: C1 do inglês completo · v8: B2 do inglês completo · v7: B1 do inglês completo · v6: A2 do inglês · v5: A1 do inglês · v4: Comece aqui do inglês · v3 (21/11/2026): página do inglês (piloto); v2: logo e ícones novos do MODO
const AUDIO = 'deutsch-trilha-audio';
const BASE = ['./', './index.html', './ingles.html', './espanhol.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    // A lista de arquivos vem das próprias páginas (alemão, inglês e espanhol): todo script e estilo local entra no cache.
    let html = '';
    for (const p of ['./index.html', './ingles.html', './espanhol.html']) html += await (await fetch(p, { cache: 'no-cache' })).text();
    const local = [...html.matchAll(/(?:src|href)="([^"#:?]+)(?:\?[^"]*)?"/g)].map((m) => './' + m[1].replace(/^\.\//, ''));
    // cache: 'reload' passa por cima do cache do navegador (o GitHub Pages guarda cópias por 10 minutos): a versão nova vem inteira
    await c.addAll([...new Set([...BASE, ...local])].map((u) => new Request(u, { cache: 'reload' })));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE && k !== AUDIO) await caches.delete(k);
    await self.clients.claim();
  })());
});

// Áudio: primeiro o que já está guardado (em qualquer cache); senão baixa o arquivo inteiro e guarda.
async function audio(url) {
  const hit = await caches.match(url, { ignoreSearch: true });
  if (hit) return hit;
  const res = await fetch(url);
  if (res.ok && res.status === 200) { const c = await caches.open(AUDIO); await c.put(url, res.clone()); }
  return res;
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const font = /^fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (url.origin !== self.location.origin && !font) return; // links externos (extras) seguem direto para a internet
  if (/\/audio(-en)?\/[^/]+\/[^/]+\.mp3$/.test(url.pathname)) { e.respondWith(audio(url.origin + url.pathname).catch(() => Response.error())); return; }
  // Pedido explícito de versão nova (botão "Atualizar" no Perfil): internet primeiro, e guarda a resposta.
  if (req.cache === 'no-store' || req.cache === 'reload') {
    e.respondWith((async () => {
      try {
        const res = await fetch(req);
        if (res.ok && res.status === 200) await (await caches.open(CACHE)).put(url.origin + url.pathname, res.clone());
        return res;
      } catch (err) { return (await caches.match(req, { ignoreSearch: true })) || Response.error(); }
    })());
    return;
  }
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    const hit = await c.match(req, { ignoreSearch: !font });
    const net = fetch(req).then((res) => { if (res && (res.ok || res.type === 'opaque') && res.status !== 206) c.put(req, res.clone()); return res; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    const res = await net;
    if (res) return res;
    if (req.mode === 'navigate') return (await c.match(/ingles\.html$/.test(url.pathname) ? './ingles.html' : /espanhol\.html$/.test(url.pathname) ? './espanhol.html' : './index.html')) || Response.error();
    return Response.error();
  })());
});
