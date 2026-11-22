/* Exercício de fala (fase 1).
   O reconhecimento de voz do navegador transcreve o que o aluno disse; o app alinha a transcrição com a frase esperada,
   palavra por palavra, e mostra o que ficou certo, quase certo, trocado ou faltando. Mede se a frase foi entendida
   (inteligibilidade), não a qualidade fina da pronúncia. Sem reconhecimento (Firefox, por exemplo), vira
   "grave, ouça e compare" com o áudio modelo.
   Uso: falaPanel(frase, pt) devolve o HTML; o painel dispara o evento "fala" com { score, perfect } ao terminar. */

const FALA_SR = typeof window !== 'undefined' ? window.SpeechRecognition || window.webkitSpeechRecognition : null;
const FALA_REC = typeof MediaRecorder !== 'undefined' && typeof navigator !== 'undefined' && !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
// No celular, gravar e reconhecer ao mesmo tempo disputa o microfone; lá a gravação só existe no modo sem reconhecimento.
const FALA_MOBILE = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const falaOn = () => S.fala !== false && (!!FALA_SR || FALA_REC);

/* ---------- normalização e alinhamento ---------- */
const FNUM = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn'];
const FTENS = { 2: 'zwanzig', 3: 'dreißig', 4: 'vierzig', 5: 'fünfzig', 6: 'sechzig', 7: 'siebzig', 8: 'achtzig', 9: 'neunzig' };
const numDe = (n) => (n < 20 ? FNUM[n] : n < 100 ? (n % 10 ? (n % 10 === 1 ? 'ein' : FNUM[n % 10]) + 'und' : '') + FTENS[Math.floor(n / 10)] : n === 100 ? 'hundert' : String(n));
// minúsculas, sem pontuação, ß = ss, números por extenso (o reconhecedor às vezes escreve "2", às vezes "zwei")
const fNorm = (t) => String(t).toLowerCase().replace(/ß/g, 'ss').replace(/€/g, ' euro ').replace(/\d+/g, (d) => ' ' + numDe(+d) + ' ')
  .replace(/[^\p{L}\s]/gu, ' ').replace(/\s+/g, ' ').trim();
const fWords = (t) => fNorm(t).split(' ').filter(Boolean);
const fLev = (a, b) => {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
};
const fNoUml = (w) => w.replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u');
// "quase": diferença de uma letra (duas em palavras longas) ou só no trema (schon × schön)
const fNear = (a, b) => fNoUml(a) === fNoUml(b) || fLev(a, b) <= (Math.max(a.length, b.length) >= 6 ? 2 : 1);
// Alinha as palavras da frase com o que foi ouvido. Devolve uma lista de { tipo, e (esperada), g (ouvida) }.
function falaAlign(target, heard) {
  const disp = String(target).split(/\s+/).filter((w) => fWords(w).length), E = disp.map((w) => fWords(w).join(''));
  // G: palavras ouvidas normalizadas (para comparar); Gd: como o reconhecedor escreveu (para mostrar ao aluno)
  const G = [], Gd = [];
  String(heard).split(/\s+/).forEach((w) => { const ts = fWords(w); ts.forEach((t) => { G.push(t); Gd.push(ts.length === 1 ? w.replace(/[.,!?;:…]+$/, '') : t); }); });
  const n = E.length, m = G.length, D = Array.from({ length: n + 1 }, (_, i) => Array(m + 1).fill(0).map((_, j) => (i ? (j ? 0 : i) : j)));
  const cost = (i, j) => (E[i] === G[j] ? 0 : fNear(E[i], G[j]) ? 0.6 : 1.2);
  for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++) D[i][j] = Math.min(D[i - 1][j] + 1, D[i][j - 1] + 1, D[i - 1][j - 1] + cost(i - 1, j - 1));
  const ops = []; let i = n, j = m;
  while (i || j) {
    if (i && j && D[i][j] === D[i - 1][j - 1] + cost(i - 1, j - 1)) { const c = cost(i - 1, j - 1); ops.unshift({ tipo: c === 0 ? 'ok' : c < 1 ? 'quase' : 'troca', e: disp[i - 1], g: Gd[j - 1] }); i--; j--; }
    else if (i && D[i][j] === D[i - 1][j] + 1) { ops.unshift({ tipo: 'falta', e: disp[i - 1] }); i--; }
    else { ops.unshift({ tipo: 'extra', g: Gd[j - 1] }); j--; }
  }
  const ok = ops.filter((o) => o.tipo === 'ok').length, quase = ops.filter((o) => o.tipo === 'quase').length;
  return { ops, score: n ? (ok + quase * 0.5) / n : 0, perfect: ok === n && !ops.some((o) => o.tipo === 'extra') };
}

/* ---------- painel ---------- */
// A frase cobrada é só o alemão: sai o que é ajuda, como "(ela)", "(a mim)" e lacunas "___".
const falaAlvo = (t) => String(t).replace(/\*\*/g, '').replace(/\([^)]*\)/g, ' ').replace(/___/g, ' ').replace(/\s+([,.!?;:])/g, '$1').replace(/\s+/g, ' ').trim();
function falaPanel(target, pt = '', mode = 'livre') {
  target = falaAlvo(target);
  const sr = !!FALA_SR;
  return `<div class="fala" data-t="${esc(target)}" data-mode="${mode}">
    ${mode === 'exercicio' ? '' : `<p class="fl-alvo"><span class="de">${esc(target)}</span>${pt ? `<br><small>${esc(pt)}</small>` : ''}</p>`}
    <div class="fl-row">
      <button type="button" class="pri fl-go">${sr ? '🎤 Falar' : '⏺️ Gravar'}</button>
      <button type="button" class="fl-model">🔊 Modelo</button><button type="button" class="fl-slow">🐢 Devagar</button>
      ${mode === 'exercicio' ? '<button type="button" class="ghost fl-skip">Agora não posso falar</button>' : ''}
    </div>
    <p class="fl-live mut">${sr ? 'Toque em Falar e diga a frase inteira em ' + LP.lingua + '.' : 'Seu navegador não entende fala (o Chrome, o Edge e o Safari entendem). Grave, ouça e compare com o modelo.'}</p>
    <div class="fl-res"></div>
  </div>`;
}
const fStatus = (el, t) => { el.querySelector('.fl-live').innerHTML = t; };
function falaShow(el, heard, alts) {
  const target = el.dataset.t;
  // escolhe, entre as alternativas do reconhecedor, a mais próxima da frase esperada
  const best = (alts.length ? alts : [heard]).map((h) => ({ h, r: falaAlign(target, h) })).sort((a, b) => b.r.score - a.r.score)[0];
  const { ops, score, perfect } = best.r;
  const words = ops.filter((o) => o.tipo !== 'extra').map((o) => {
    const tip = o.tipo === 'ok' ? '' : o.tipo === 'falta' ? 'não ouvi esta palavra' : `você disse: ${o.g}`;
    return `<span class="fl-w ${o.tipo}" title="${esc(tip)}">${esc(o.e)}${o.tipo === 'troca' || o.tipo === 'quase' ? `<small>${esc(o.g)}</small>` : ''}</span>`;
  }).join(' ');
  const extras = ops.filter((o) => o.tipo === 'extra').map((o) => o.g);
  const bare = (w) => String(w).replace(/[.,!?;:…]+$/, ''); // palavra sem a pontuação da frase
  const dicas = ops.filter((o) => o.tipo !== 'ok' && o.tipo !== 'extra').map((o) => ({ ...o, e: bare(o.e) })).map((o) => (o.tipo === 'falta' ? `Faltou <b>${esc(o.e)}</b>.` : o.tipo === 'quase' ? `<b>${esc(o.e)}</b> saiu quase certo (ouvi <i>${esc(o.g)}</i>): capriche nessa palavra.` : `No lugar de <b>${esc(o.e)}</b> ouvi <i>${esc(o.g)}</i>.`));
  if (extras.length) dicas.push(`Ouvi palavras a mais: <i>${esc(extras.join(' '))}</i>.`);
  const pct = Math.round(score * 100);
  el.querySelector('.fl-res').innerHTML = `<p class="fl-frase">${words}</p>
    <p class="${perfect ? 'okmsg' : score >= 0.8 ? 'okmsg' : 'nomsg'}">${perfect ? '✅ Perfeito! Entendi a frase inteira.' : score >= 0.8 ? `👍 Quase lá: ${pct}% da frase.` : `🔁 ${pct}% da frase. Ouça o modelo e tente de novo.`}</p>
    ${dicas.length ? `<ul class="fl-dicas">${dicas.map((d) => `<li>${d}</li>`).join('')}</ul>` : ''}
    <p class="mut fl-heard">O que eu entendi: <i>${esc(best.h || '(nada)')}</i></p>`;
  fStatus(el, perfect ? '' : 'Pode tentar quantas vezes quiser.');
  el.querySelector('.fl-go').textContent = '🎤 Falar de novo';
  if (perfect) sfx('tarefa');
  el.dispatchEvent(new CustomEvent('fala', { bubbles: true, detail: { score, perfect } }));
}

/* ---------- gravação (para ouvir a própria voz) ---------- */
async function falaRecStart(el) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true }), rec = new MediaRecorder(stream), parts = [];
    rec.ondataavailable = (e) => parts.push(e.data);
    rec.onstop = () => {
      stream.getTracks().forEach((t) => t.stop());
      if (el._url) URL.revokeObjectURL(el._url);
      el._url = URL.createObjectURL(new Blob(parts, { type: rec.mimeType || 'audio/webm' }));
      const row = el.querySelector('.fl-row');
      if (!row.querySelector('.fl-mine')) row.insertAdjacentHTML('beforeend', '<button type="button" class="fl-mine">▶️ Minha voz</button>');
    };
    rec.start(); el._rec = rec; return true;
  } catch (err) { console.warn('Gravação indisponível:', err); return false; }
}
const falaRecStop = (el) => { if (el._rec && el._rec.state !== 'inactive') el._rec.stop(); el._rec = null; };

/* ---------- reconhecimento ---------- */
async function falaStart(el) {
  const go = el.querySelector('.fl-go');
  if (el._busy) { // segundo toque: parar
    if (el._sr) el._sr.stop(); else { falaRecStop(el); el._busy = false; go.textContent = '⏺️ Gravar de novo'; fStatus(el, 'Ouça a sua voz e o modelo, e compare o som.'); }
    return;
  }
  stopClip(); if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
  if (!FALA_SR) { // modo sem reconhecimento: só grava
    if (!(await falaRecStart(el))) return fStatus(el, 'Não consegui usar o microfone. Confira a permissão do navegador.');
    el._busy = true; go.textContent = '⏹️ Parar'; fStatus(el, '🔴 Gravando… diga a frase e toque em Parar.'); return;
  }
  const r = new FALA_SR(); r.lang = LP.tts; r.interimResults = true; r.maxAlternatives = 5; r.continuous = false;
  let finalAlts = [], heard = '';
  r.onresult = (e) => {
    heard = [...e.results].map((x) => x[0].transcript).join(' ');
    fStatus(el, `🎙️ <i>${esc(heard)}</i>`);
    const last = e.results[e.results.length - 1];
    if (last.isFinal) finalAlts = [...last].map((a) => [...e.results].slice(0, -1).map((x) => x[0].transcript).concat(a.transcript).join(' '));
  };
  r.onerror = (e) => {
    const msg = { 'no-speech': 'Não ouvi nada. Toque em Falar e diga a frase.', 'not-allowed': 'O microfone está bloqueado. Libere o microfone para este site nas configurações do navegador.', 'service-not-allowed': 'O microfone está bloqueado. Libere o microfone para este site nas configurações do navegador.', network: 'O reconhecimento de voz precisa de internet.', 'audio-capture': 'Não encontrei um microfone.' }[e.error];
    el._err = msg || 'Não consegui ouvir. Tente de novo.';
  };
  r.onend = () => {
    el._busy = false; el._sr = null; falaRecStop(el);
    go.textContent = '🎤 Falar';
    if (heard || finalAlts.length) falaShow(el, heard, finalAlts); else fStatus(el, el._err || 'Não ouvi nada. Toque em Falar e diga a frase.');
    el._err = null;
  };
  el._busy = true; el._sr = r; go.textContent = '⏹️ Parar'; fStatus(el, '🎙️ Ouvindo… fale agora.'); el.querySelector('.fl-res').innerHTML = '';
  if (FALA_REC && !FALA_MOBILE) await falaRecStart(el);
  try { r.start(); } catch (err) { console.error('Erro no reconhecimento de voz:', err); el._busy = false; fStatus(el, 'Reconhecimento de voz indisponível agora.'); }
}

/* ---------- botão 🎤 "Repita" nos exemplos das aulas e nas frases dos Pockets ---------- */
const micBtn = (de, pt = '') => (falaOn() ? `<button type="button" class="mic" data-fala="${esc(de)}" data-pt="${esc(pt)}" aria-label="Repita em voz alta" title="Repita em voz alta">🎤</button>` : '');

if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    const m = e.target.closest('.mic[data-fala]');
    if (m) { // abre (ou fecha) o painel logo abaixo da frase
      const host = m.closest('p, li, .tpara, div'), next = host.nextElementSibling;
      if (next && next.classList.contains('fala')) { next.remove(); return; }
      host.insertAdjacentHTML('afterend', falaPanel(m.dataset.fala, m.dataset.pt));
      if (FALA_SR) falaStart(host.nextElementSibling);
      return;
    }
    const b = e.target.closest('.fala button'); if (!b) return;
    const el = b.closest('.fala'), t = el.dataset.t;
    if (b.classList.contains('fl-go')) falaStart(el);
    else if (b.classList.contains('fl-model')) say(t);
    else if (b.classList.contains('fl-slow')) say(t, 0.6);
    else if (b.classList.contains('fl-mine') && el._url) { stopClip(); new Audio(el._url).play().catch(() => {}); }
    else if (b.classList.contains('fl-skip')) el.dispatchEvent(new CustomEvent('falaskip', { bubbles: true }));
  });
}
