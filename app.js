/* Deutsch-Trilha — motor da plataforma. Tudo fica no localStorage deste dispositivo. */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const rnd = (n) => Math.floor(Math.random() * n);
const pick = (a) => a[rnd(a.length)];
const shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const sample = (a, n) => shuffle(a).slice(0, n);
const iso = (d) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const today = () => iso(new Date());
const dayDiff = (a, b) => Math.round((new Date(b + 'T12:00') - new Date(a + 'T12:00')) / 864e5);
const norm = (s) => s.toLowerCase().replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
  .replace(/[.,!?;:…"()–-]/g, ' ').replace(/\s+/g, ' ').trim();
// Só conta como substantivo "artigo + uma palavra": expressões como "die Daumen drücken" ficam de fora.
const gender = (de) => { const m = /^(der|die|das) \S+$/.exec(de); return m ? { der: 'm', die: 'f', das: 'n' }[m[1]] : ''; };
const gcls = (de) => (gender(de) ? 'g-' + gender(de) : '');
const app = $('#app'), nav = $('#nav');

/* ---------- estado ---------- */
const KEY = 'deutschTrilha.v1';
const WEEKS = MODS.length, TOTAL = DAYS.length; // módulos e dias vêm de data/curriculo.js
const fresh = () => ({
  name: '', goal: 60, audio: true, sfx: true, fala: true, start: null, xp: 0, streak: 0, best: 0, lastDay: null, freezes: 0,
  done: {}, cards: {}, stats: Object.fromEntries(IK.map((k) => [k, { n: 0, ok: 0, rn: 0, rok: 0, t: 0 }])),
  prior: {}, time: {}, daily: {}, badges: {}, diary: [], reviews: 0, maxCombo: 0, spoken: 0, perfect: 0, seen: {}, guide: {}, hw: {}, wq: {}, reads: {}, pockets: {},
});
let S = fresh();
try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(fresh(), JSON.parse(raw)); } catch (e) { console.error('Falha ao ler o progresso salvo:', e); }
migrateGuide(S);
migrateSeq(S);
function save() { S.updatedAt = Date.now(); if (typeof cloudQueue === 'function') cloudQueue(); try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { console.error('Falha ao salvar o progresso:', e); toast('⚠️ Não consegui salvar o progresso neste navegador'); } }
const daily = () => (S.daily[today()] = S.daily[today()] || { lesson: false, cards: 0, perfect: false });

/* ---------- áudio ---------- */
const hasTTS = 'speechSynthesis' in window;
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let deVoice = null;
if (hasTTS) {
  // Entre as vozes alemãs, prefere as neurais do Edge ("Natural") e a do Chrome ("Google Deutsch"), que soam melhor que as do Windows.
  const rank = (v) => (/natural/i.test(v.name) ? 0 : /google/i.test(v.name) ? 1 : /^de-DE/i.test(v.lang) ? 2 : 3);
  const lv = () => { deVoice = speechSynthesis.getVoices().filter((v) => /^de/i.test(v.lang)).sort((a, b) => rank(a) - rank(b))[0] || null; };
  lv(); speechSynthesis.onvoiceschanged = lv;
}
/* Áudios gravados (ElevenLabs): audio/index.json lista os que existem; cada um fica em audio/xx/<hash>.mp3.
   A chave é o texto limpo (e a voz, nos diálogos), com o mesmo hash usado por tools/audio-elevenlabs.mjs. */
const audioKey = (t, slot = 'a') => (slot === 'a' ? '' : slot + '|') + vozKey(t); // vozKey e vozDe: data/vozes.js
function cyrb53(str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0; i < str.length; i++) { const ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}
let AUD = null, clip = null;
fetch('audio/index.json').then((r) => (r.ok ? r.json() : null)).then((j) => { if (j && j.h) AUD = new Set(j.h); }).catch(() => {});
function stopClip() { if (clip) { clip.onended = clip.onerror = null; clip.pause(); clip = null; } }
// Toca o áudio gravado, se existir (na voz pedida ou, na falta dela, em outra). Devolve false para usar a voz do navegador.
// Se o arquivo não carregar (sem internet e ainda fora do cache), chama onfail para cair na voz do navegador.
function playClip(t, slot = 'a', rate = 1, onend, onfail) {
  if (!AUD) return false;
  const h = [slot, 'a', 'b', 'c', 'd'].map((s) => cyrb53(audioKey(t, s))).find((x) => AUD.has(x));
  if (!h) return false;
  stopClip(); if (hasTTS) speechSynthesis.cancel();
  const a = (clip = new Audio(`audio/${h.slice(0, 2)}/${h}.mp3`));
  a.playbackRate = rate; a.preservesPitch = true;
  a.onended = () => { if (clip === a) clip = null; if (onend) onend(); };
  a.onerror = () => { if (clip !== a) return; clip = null; console.warn('Áudio gravado indisponível, usando a voz do navegador:', t); (onfail || onend || (() => {}))(); };
  a.play().catch((e) => { if (e.name !== 'AbortError' && a.onerror) a.onerror(); });
  return true;
}
function ttsSay(t, rate) {
  if (!hasTTS) return;
  stopClip(); speechSynthesis.cancel();
  // a barra de alternativas ("bin / heiße") vira pausa, como nos áudios gravados
  const u = new SpeechSynthesisUtterance(falavel(t));
  u.lang = 'de-DE'; if (deVoice) u.voice = deVoice; u.rate = rate; speechSynthesis.speak(u);
}
function say(t, rate = 0.9, slot) {
  if (!S.audio) return;
  slot = slot || vozDe(t); // a voz de quem fala a frase (diálogos e textos têm personagem)
  // palavras soltas tocam um pouco mais devagar
  if (!playClip(t, slot, rate < 0.85 ? 0.9 : 1, null, () => ttsSay(t, rate))) ttsSay(t, rate);
}
const spk = (t, slot) => ((hasTTS || AUD) && S.audio ? `<button class="spk" data-say="${esc(t)}"${slot ? ` data-v="${slot}"` : ''} aria-label="Ouvir">🔊</button>` : '');
document.addEventListener('click', (e) => { const b = e.target.closest('[data-say]'); if (b) say(b.dataset.say, b.dataset.say.split(' ').length < 3 ? 0.8 : 0.9, b.dataset.v); });
// Toda vez que algo novo aparece na tela, as palavras alemãs ganham áudio.
let enhRaf = 0;
new MutationObserver(() => { cancelAnimationFrame(enhRaf); enhRaf = requestAnimationFrame(() => { enhanceAudio(app); guideImgs(app); }); }).observe(app, { childList: true, subtree: true });

/* ---------- trilha ---------- */
function dayInfo(d) {
  const x = DAYS[Math.min(Math.max(d, 1), DAYS.length) - 1];
  return { d, w: x.w, r: x.r, review: x.review, li: x.li, n: MODS[x.w].li.length, level: phaseOf(x.w).id };
}
const phaseOf = (w) => PHASES.find((p) => w >= p.weeks[0] && w < p.weeks[1]) || PHASES[PHASES.length - 1];
const phaseDays = (p) => DAYS.map((x, i) => (x.w >= p.weeks[0] && x.w < p.weeks[1] ? i + 1 : 0)).filter(Boolean);
function currentDay() { for (let d = 1; d <= TOTAL; d++) if (!S.done[d]) return d; return null; }
const doneLessons = () => Object.keys(S.done).map(Number).map(dayInfo).filter((i) => !i.review).map((i) => LESSONS[i.li]);
const vocab = (k) => {
  if (k.startsWith('p:')) { const [, id, j] = k.split(':'), p = POCKETS.find((x) => x.id === id), f = p ? pkPairs(p.frases)[j] : null; return { k, de: f ? f.de : '?', pt: f ? f.pt : '?', em: p ? p.e : '' }; }
  if (k.startsWith('s:')) { const [, i, j] = k.split(':'), l = LBYSID[i], sp = (l && SUP[l.de] || [])[j] || { de: '?', pt: '?' }; return { k, de: sp.de, pt: sp.pt, em: '' }; }
  const c = k.lastIndexOf(':'), l = LBYSID[k.slice(0, c)]; return (l && l.v[k.slice(c + 1)]) || { k, de: '?', pt: '?', em: '' };
};
const supOn = () => S.supCards !== false;
// Palavras de apoio da lição entram nas cartas (se a opção estiver ligada).
function addSupCards(i) { if (supOn()) (SUP[LESSONS[i].de] || []).forEach((_, j) => { const k = 's:' + LESSONS[i].sid + ':' + j; if (!S.cards[k]) S.cards[k] = newCard(); }); }
const dueKeys = () => { const now = Date.now(); return Object.keys(S.cards).filter((k) => S.cards[k].due <= now && (supOn() || !k.startsWith('s:'))); };

/* ---------- perfil de inteligências ---------- */
// Nota = 40% acerto nos exercícios + 60% retenção (lembrar a palavra dias depois nas cartas).
// A autoavaliação inicial entra só como ponto de partida e perde peso conforme os dados reais chegam.
function score(k) {
  const st = S.stats[k], p = (S.prior[k] || 3) / 5;
  const acc = (st.ok + 3 * p) / (st.n + 3), ret = (st.rok + 3 * p) / (st.rn + 3);
  return 0.4 * acc + 0.6 * ret;
}
const ranking = () => IK.map((k) => ({ k, s: score(k) })).sort((a, b) => b.s - a.s);
const activeInt = () => IK.filter((k) => k !== 'mus' || (hasTTS && S.audio));
function planInt(n) {
  const ks = activeInt();
  const out = shuffle(ks); // todas aparecem ao menos uma vez: é o que mantém a medição honesta
  const w = ks.map((k) => Math.pow(score(k), 3)), tot = w.reduce((a, b) => a + b, 0);
  while (out.length < n) { let r = Math.random() * tot, i = 0; while ((r -= w[i]) > 0 && i < ks.length - 1) i++; out.push(ks[i]); }
  return shuffle(out).slice(0, n).map((k) => ({ k, retry: false }));
}

/* ---------- gamificação ---------- */
const level = (xp = S.xp) => Math.floor(Math.sqrt(xp / 60)) + 1;
const TITLES = ['Anfängerin', 'Entdeckerin', 'Sprecherin', 'Erzählerin', 'Denkerin', 'Könnerin', 'Meisterin'];
const levelTitle = () => TITLES[Math.min(TITLES.length - 1, Math.floor((level() - 1) / 4))];
function toast(t) { const el = document.createElement('div'); el.className = 'toast'; el.textContent = t; $('#toasts').append(el); setTimeout(() => el.remove(), 3200); }
/* ---------- sons de conclusão ----------
   conclusao: fim de lição, checkpoint, treino, aula do guia, Pocket, texto longo e revisão de cartas.
   tarefa: uma tarefa específica feita (tarefa de casa, desafio interativo certo).
   conquista: nova conquista, novo nível ou dia perfeito.
   Uma fila evita que dois sons se atropelem (lição concluída + conquista nova, por exemplo). */
const SFX_VOL = { conclusao: 1, tarefa: 1, conquista: 1 }; // volume no máximo: os arquivos já vêm equilibrados entre si
const SFX = typeof Audio === 'undefined' ? {} : Object.fromEntries(Object.keys(SFX_VOL).map((k) => { const a = new Audio('sounds/' + k + '.mp3'); a.preload = 'auto'; return [k, a]; }));
let sfxAt = 0;
function sfx(name) {
  if (S.sfx === false || !SFX[name]) return;
  const now = Date.now(), wait = Math.max(0, sfxAt - now); sfxAt = now + wait + 650;
  setTimeout(() => { const a = SFX[name].cloneNode(); a.volume = SFX_VOL[name]; a.play().catch(() => {}); }, wait);
}
function addXP(n) { const l = level(); S.xp += n; if (level() > l) { toast('⬆️ Nível ' + level() + ' — ' + levelTitle()); sfx('conquista'); } }
function shownStreak() {
  if (!S.lastDay) return 0;
  const gap = dayDiff(S.lastDay, today());
  return gap <= 1 || (gap === 2 && S.freezes > 0) ? S.streak : 0;
}
function markActive() {
  const t = today(); if (S.lastDay === t) return;
  const gap = S.lastDay ? dayDiff(S.lastDay, t) : 99;
  if (gap === 1) S.streak++;
  else if (gap === 2 && S.freezes > 0) { S.freezes--; S.streak++; toast('🧊 Proteção usada: sua sequência continua'); }
  else S.streak = 1;
  S.lastDay = t; S.best = Math.max(S.best, S.streak);
  toast('🔥 ' + S.streak + (S.streak === 1 ? ' dia' : ' dias') + ' de sequência');
  if (S.streak % 7 === 0 && S.freezes < 2) { S.freezes++; toast('🧊 Ganhou uma proteção de sequência'); }
}
const secsToday = () => S.time[today()] || 0;
function mission() {
  const d = daily();
  const t = today(), extra = Object.values(S.hw).some((o) => Object.values(o).includes(t)) || Object.values(S.seen).includes(t);
  return { lesson: d.lesson, cards: dueKeys().length === 0, time: secsToday() >= S.goal * 60, extra };
}
function checkDaily() {
  const m = mission(), d = daily();
  if (m.lesson && m.cards && m.time && m.extra && !d.perfect) { d.perfect = true; S.perfect++; addXP(30); toast('🌟 Dia perfeito! +30 XP'); sfx('conquista'); checkBadges(); save(); }
}
const levelDone = (id) => phaseDays(PHASES.find((p) => p.id === id)).every((d) => S.done[d]);
const nDone = () => Object.keys(S.done).length;
const nWords = () => Object.keys(S.cards).length;
const BADGES = [
  ['guide', '🧭', 'Bereit!', 'Concluiu o módulo Comece aqui', () => GUIDE.every((g) => S.guide[g.id])],
  ['first', '🌱', 'Erster Schritt', 'Primeira lição concluída', () => nDone() >= 1],
  ['s3', '🔥', '3 dias', 'Sequência de 3 dias', () => S.best >= 3],
  ['s7', '🔥', '1 semana', 'Sequência de 7 dias', () => S.best >= 7],
  ['s14', '🔥', '2 semanas', 'Sequência de 14 dias', () => S.best >= 14],
  ['s30', '🏅', '30 dias', 'Sequência de 30 dias', () => S.best >= 30],
  ['s60', '🏅', '60 dias', 'Sequência de 60 dias', () => S.best >= 60],
  ['s90', '👑', '90 dias', 'Sequência de 90 dias', () => S.best >= 90],
  ['w50', '📚', '50 palavras', '50 palavras no baralho', () => nWords() >= 50],
  ['w200', '📚', '200 palavras', '200 palavras no baralho', () => nWords() >= 200],
  ['w500', '📚', '500 palavras', '500 palavras no baralho', () => nWords() >= 500],
  ['combo', '⚡', 'Combo 10', '10 acertos seguidos', () => S.maxCombo >= 10],
  ['star', '⭐', 'Perfeita', 'Uma lição com 3 estrelas', () => Object.values(S.done).some((x) => x.s === 3)],
  ['week', '🗓️', 'Semana cheia', 'Um checkpoint semanal concluído', () => Object.keys(S.done).some((d) => dayInfo(+d).review)],
  ['rev', '🃏', '100 revisões', '100 cartas revisadas', () => S.reviews >= 100],
  ['all8', '🧠', 'Oito caminhos', 'Praticou as 8 inteligências', () => activeInt().every((k) => S.stats[k].n > 0)],
  ['diary', '📔', 'Tagebuch', '10 frases no diário', () => S.diary.length >= 10],
  ['speak', '🎤', 'Laut!', '10 frases faladas em voz alta', () => S.spoken >= 10],
  ['perfect', '🌟', 'Dia perfeito', 'Cumpriu as 3 missões do dia', () => S.perfect >= 1],
  ['a1', '🥉', 'A1', 'Nível A1 concluído', () => levelDone('A1')],
  ['a2', '🥈', 'A2', 'Nível A2 concluído', () => levelDone('A2')],
  ['b1', '🥇', 'B1', 'Nível B1 concluído', () => levelDone('B1')],
  ['b2', '🏆', 'B2', 'Nível B2 concluído', () => levelDone('B2')],
  ['c1', '💎', 'C1', 'Nível C1 concluído', () => levelDone('C1')],
  ['c2', '👑', 'C2', 'Nível C2 concluído: trilha completa', () => levelDone('C2')],
  ['hw10', '🏠', 'Mão na massa', '10 tarefas de casa feitas', () => hwTotal() >= 10],
  ['hw50', '🏡', 'Rotina alemã', '50 tarefas de casa feitas', () => hwTotal() >= 50],
  ['wq1', '🎯', 'Semana completa', 'Cumpriu uma missão da semana', () => Object.keys(S.wq).length >= 1],
  ['wq4', '🏆', 'Mês de imersão', 'Cumpriu quatro missões da semana', () => Object.keys(S.wq).length >= 4],
  ['rd5', '📖', 'Leser', '5 textos longos lidos', () => Object.keys(S.reads).length >= 5],
  ['rd15', '📚', 'Bücherwurm', 'Todos os textos longos', () => Object.keys(S.reads).length >= TEXTS.length],
  ['pk3', '🧳', 'Mala pronta', '3 lições Pocket concluídas', () => Object.keys(S.pockets || {}).length >= 3],
  ['pkall', '🌍', 'Pronta para a Alemanha', 'Todas as lições Pocket', () => Object.keys(S.pockets || {}).length >= POCKETS.length],
  ['x5', '🎬', 'Explorador', '5 conteúdos extras vistos', () => Object.keys(S.seen).length >= 5],
  ['x20', '🌍', 'Imersão', '20 conteúdos extras vistos', () => Object.keys(S.seen).length >= 20],
];
function checkBadges() {
  BADGES.forEach(([id, e, n, , test]) => { if (!S.badges[id] && test()) { S.badges[id] = today(); addXP(20); toast(e + ' Conquista: ' + n); sfx('conquista'); } });
}

/* ---------- relógio de estudo ---------- */
let lastAct = Date.now();
['pointerdown', 'keydown'].forEach((ev) => addEventListener(ev, () => { lastAct = Date.now(); }));
setInterval(() => {
  if (!S.start || document.visibilityState !== 'visible' || Date.now() - lastAct > 90000) return;
  const t = today(); S.time[t] = (S.time[t] || 0) + 5;
  checkDaily(); if (S.time[t] % 30 === 0) save();
  const el = $('#clock'); if (el) el.textContent = clockText();
}, 5000);
const clockText = () => Math.floor(secsToday() / 60) + ' / ' + S.goal + ' min';

/* ---------- navegação ---------- */
let view = 'home';
function go(v, arg) {
  view = v; sess = null; stopClip(); if (hasTTS) speechSynthesis.cancel();
  const tabs = [['home', '🏠', 'Hoje'], ['trilha', '🗺️', 'Trilha'], ['cards', '🃏', 'Cartas'], ['guide', '📘', 'Guia'], ['extras', '🎬', 'Extras'], ['perfil', '🧠', 'Perfil']];
  const due = dueKeys().length;
  nav.hidden = !S.start;
  document.body.classList.toggle('has-nav', !!S.start);
  if (typeof modoNav === 'function') nav.innerHTML = modoNav(v, due); else nav.innerHTML = `<div class="brand"><svg viewBox="0 0 64 64" width="26" height="26" aria-hidden="true">${isoCube(32, 22, 26, 24, '#ff8a3d')}</svg>Deutsch-Trilha</div>` +
    tabs.map(([id, e, n]) => `<button data-v="${id}" class="${id === v || (v === 'intro' && id === 'trilha') ? 'on' : ''}"><b>${e}</b><span>${n}</span>${id === 'cards' && due ? `<em>${due}</em>` : ''}</button>`).join('') +
    `<div class="nav-foot">🔥 ${shownStreak()} · ⭐ ${S.xp} XP</div>`;
  $$('button', nav).forEach((b) => (b.onclick = () => go(b.dataset.v)));
  stopRead();
  ({ home, trilha, cards, perfil, intro, onboard, extras, guide, nivel, texto, pocket, praticar: (a) => praticar(a), modulo: (a) => modulo(a), curriculo: (a) => curriculo(a) })[v](arg);
  if (v !== 'trilha') scrollTo(0, 0);
  updateBadge();
}

/* ---------- boas-vindas ---------- */
function onboard() {
  app.innerHTML = `<section class="hero"><div class="hero-bg">${heroArt('A1')}</div><div class="hero-card"><div class="hero-txt">
  <span class="eyebrow">A1 → C2 · Goethe-Institut</span><h1>Willkommen! 🇩🇪</h1>
  <p>Uma trilha do zero à fluência: do A1 ao B1 em 13 semanas, o B2 em mais 12, o C1 em 6 e o C2 em 4: 35 semanas no total. Não precisa saber nada de alemão nem de gramática: antes do dia 1 há seis aulas curtas que ensinam como estudar e explicam o básico em português. A plataforma também mede quais tipos de exercício fazem você acertar e lembrar mais, e ajusta as lições a isso.</p></div></div></section>
  <div class="card"><h3>Como posso te chamar?</h3><input id="nm" placeholder="Seu nome" maxlength="30">
  <h3>Quanto tempo por dia?</h3>
  <select id="goal"><option value="30">30 min — ritmo leve</option><option value="60" selected>60 min — firme</option><option value="90">90 min — intenso</option><option value="120">120 min — ritmo de B1 em 3 meses</option><option value="180">180 min — imersão</option></select>
  <p class="mut">Sendo franca: o Goethe-Institut estima de 350 a 650 aulas de 45 min para chegar ao B1. Em 13 semanas isso pede cerca de 2 a 3 horas por dia, somando lição, cartas e alemão fora daqui (música, séries, conversa).</p></div>
  <div class="card"><h3>Ponto de partida do seu perfil</h3><p class="mut">De 1 (nada a ver) a 5 (muito eu). Serve só de palpite inicial: seus resultados reais passam a valer mais.</p>
  ${IK.map((k) => `<label>${INT[k].e} ${PRIOR_Q[k]}<input type="range" min="1" max="5" value="3" data-k="${k}"></label>`).join('')}</div>
  <button class="pri big" id="start">Começar a trilha</button>
  <button class="big" id="startP" style="margin-top:8px">🎯 Já sei um pouco de alemão: fazer o teste de nível</button>
  ${cloudOnboard()}`;
  $('#start').onclick = () => {
    S.name = $('#nm').value.trim(); S.goal = +$('#goal').value; S.start = today();
    $$('input[type=range]').forEach((r) => { S.prior[r.dataset.k] = +r.value; });
    save(); go('home');
  };
  $('#startP').onclick = () => {
    S.name = $('#nm').value.trim(); S.goal = +$('#goal').value; S.start = today();
    $$('input[type=range]').forEach((r) => { S.prior[r.dataset.k] = +r.value; });
    save(); go('nivel');
  };
  wireCloud();
}

/* ---------- conteúdos externos ---------- */
const curLevel = () => { const c = currentDay(); return c ? dayInfo(c).level : 'C2'; };
const fitsProfile = (x) => { const top = ranking().slice(0, 2).map((r) => r.k); return XT[x.t][2].some((k) => top.includes(k)); };
function pickExtras(lv, n) {
  const pool = EXTRAS.filter((x) => x.lvs.includes(lv) && !S.seen[x.id]);
  return [...pool.filter(fitsProfile), ...pool.filter((x) => !fitsProfile(x))].slice(0, n);
}
function extraCard(x) {
  const [e, tn] = XT[x.t], span = x.lvs[0] + (x.lvs.length > 1 ? '–' + x.lvs[x.lvs.length - 1] : '');
  return `<div class="xcard ${S.seen[x.id] ? 'seen' : ''}"><div class="row"><span class="tag">${e} ${tn}</span><span class="grow"></span><small class="mut">${span}</small></div>
  <h3>${esc(x.n)}</h3><p class="mut">${esc(x.d)}</p>
  <div class="row"><a class="btn" href="${x.link}" target="_blank" rel="noopener noreferrer">Abrir ↗</a>
  <button data-seen="${x.id}" ${S.seen[x.id] ? 'disabled' : ''}>${S.seen[x.id] ? '✓ Visto' : 'Já vi · +10 XP'}</button></div></div>`;
}
function wireSeen(root, rerender) {
  $$('[data-seen]', root).forEach((b) => (b.onclick = () => {
    const id = b.dataset.seen; if (S.seen[id]) return;
    const box = b.closest('.xcard') || b.parentElement, f = document.createElement('div');
    f.className = 'xnote';
    f.innerHTML = '<p class="mut">O que você aprendeu? Anote três palavras ou uma frase. Opcional, vale +10 XP extra e vai para o seu diário.</p><textarea rows="2" spellcheck="false"></textarea><div class="row"><button class="pri">Salvar</button></div>';
    b.disabled = true; box.append(f); f.querySelector('textarea').focus();
    f.querySelector('button').onclick = () => {
      const note = f.querySelector('textarea').value.trim(), x = EXTRAS.find((e) => e.id === id);
      let xp = 10; S.seen[id] = today();
      if (note.split(/\s+/).length >= 2) { xp += 10; S.diary.push({ d: today(), t: note, x: x.n }); }
      if (weekChallenge().id === id) { xp += 40; toast('🏆 Desafio da semana cumprido!'); }
      addXP(xp); toast('🎬 +' + xp + ' XP por estudar fora da plataforma');
      markActive(); weekCheck(); checkBadges(); checkDaily(); save(); rerender();
    };
  }));
}

/* ---------- tarefas de casa e missão da semana ---------- */
const lessonLevel = (i) => phaseOf(LMOD[i]).id;
function lessonExtra(i) { const pool = EXTRAS.filter((x) => x.lvs.includes(lessonLevel(i))); return pool[(i * 7) % pool.length]; }
const XVERB = { yt: 'Assista a um vídeo do canal', mus: 'Ouça a música', film: 'Assista a um trecho do filme', serie: 'Assista a um episódio de', pod: 'Ouça um episódio de', book: 'Leia algumas páginas de', site: 'Leia um texto em', ref: 'Explore', app: 'Converse 10 minutos usando', doc: 'Assista a um trecho de' };
function hwTasks(i) {
  const l = LESSONS[i], x = lessonExtra(i);
  return [
    { k: 'a', e: '🏠', h: 'Na vida real', t: HW[l.de] || 'Escreva três frases sobre a sua vida usando: ' + l.gt + '.' },
    { k: 'b', e: XT[x.t][0], h: 'Mergulho', t: XVERB[x.t] + ' ' + x.n + ' e anote três palavras novas no diário.', x },
    { k: 'c', e: '🎙️', h: 'Em voz alta', t: 'Leia o diálogo da lição em voz alta duas vezes, imitando o áudio (shadowing).' },
  ];
}
const hwDone = (i, t) => !!((S.hw[i] || {})[t.k] || (t.x && S.seen[t.x.id]));
const hwTotal = () => Object.values(S.hw).reduce((a, o) => a + Object.keys(o).length, 0);
function hwCard(i, title = '🏠 Tarefa de casa') {
  const ts = hwTasks(i), n = ts.filter((t) => hwDone(i, t)).length;
  return `<div class="card hw"><div class="row"><h3 class="grow">${title}</h3><small class="mut">${n}/3 · +15 XP cada</small></div>
  <p class="mut">Para levar o alemão para o seu dia. Faça hoje ou amanhã e marque aqui.</p>
  ${ts.map((t) => `<div class="hwt ${hwDone(i, t) ? 'ok' : ''}"><span class="hwe">${t.e}</span><div class="grow"><b>${t.h}</b><p>${esc(t.t)}</p>${t.x ? `<a href="${t.x.link}" target="_blank" rel="noopener noreferrer">Abrir ${esc(t.x.n)} ↗</a>` : ''}</div>
  <button data-hw="${i}:${t.k}" ${hwDone(i, t) ? 'disabled' : ''}>${hwDone(i, t) ? '✓ Feito' : 'Feito'}</button></div>`).join('')}</div>`;
}
function wireHw(root, rerender) {
  $$('[data-hw]', root).forEach((b) => (b.onclick = () => {
    const [i, k] = b.dataset.hw.split(':'), t = hwTasks(+i).find((x) => x.k === k);
    (S.hw[i] = S.hw[i] || {})[k] = today();
    if (t.x && !S.seen[t.x.id]) S.seen[t.x.id] = today();
    sfx('tarefa'); addXP(15); toast('🏠 Tarefa feita! +15 XP'); markActive(); weekCheck(); checkBadges(); checkDaily(); save();
    if (rerender) rerender(); else { b.disabled = true; b.textContent = '✓ Feito'; b.closest('.hwt').classList.add('ok'); }
  }));
}
const weekStart = () => { const d = new Date(); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return iso(d); };
const inWeek = (s) => !!s && s >= weekStart();
const WQ = { hw: 5, xs: 2 };
function weekStats() {
  return { hw: Object.values(S.hw).reduce((a, o) => a + Object.values(o).filter(inWeek).length, 0), xs: Object.values(S.seen).filter(inWeek).length };
}
function weekCheck() {
  const k = weekStart(), s = weekStats();
  if (!S.wq[k] && s.hw >= WQ.hw && s.xs >= WQ.xs) { S.wq[k] = today(); addXP(100); if (S.freezes < 2) S.freezes++; toast('🎯 Missão da semana cumprida! +100 XP e uma proteção 🧊'); }
}
function weekChallenge() {
  const k = weekStart(), lv = curLevel(), pool = EXTRAS.filter((x) => x.lvs.includes(lv));
  let h = 7; for (const c of k + lv) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return pool[h % pool.length];
}
function weekCard() {
  const s = weekStats(), done = !!S.wq[weekStart()], pc = (a, b) => Math.min(100, Math.round((a / b) * 100));
  return `<div class="card week"><div class="row"><h3 class="grow">🎯 Missão da semana</h3><small class="mut">${done ? '✓ cumprida' : 'vale +100 XP e uma proteção 🧊'}</small></div>
  <div class="wqrow"><span>🏠 Tarefas de casa</span><div class="bar"><i style="width:${pc(s.hw, WQ.hw)}%"></i></div><small>${Math.min(s.hw, WQ.hw)}/${WQ.hw}</small></div>
  <div class="wqrow"><span>🎬 Conteúdos extras</span><div class="bar"><i style="width:${pc(s.xs, WQ.xs)}%"></i></div><small>${Math.min(s.xs, WQ.xs)}/${WQ.xs}</small></div>
  <h4 class="wch">🏆 Desafio da semana <small class="mut">vale +50 XP</small></h4>${extraCard(weekChallenge())}</div>`;
}
function pendingHw() {
  const ls = Object.entries(S.done).map(([d, v]) => ({ d: +d, at: v.d || '' })).filter((o) => !dayInfo(o.d).review)
    .sort((a, b) => b.at.localeCompare(a.at) || b.d - a.d).map((o) => dayInfo(o.d).li);
  return ls.find((i) => hwTasks(i).some((t) => !hwDone(i, t)));
}

/* ---------- hoje ---------- */
function miniPath(days) {
  return days.map((d, i) => {
    const info = dayInfo(d), st = i === 0 ? '#ff8a3d' : '#3c445c';
    const t = info.review ? 'Checkpoint' : LESSONS[info.li].de;
    return `${i ? '<span class="mline"></span>' : ''}<button class="mnode" data-d="${d}" ${i ? 'disabled' : ''}><svg viewBox="0 0 64 56" width="58" height="50" aria-hidden="true">${isoCube(32, 18, 24, 16, st, info.review ? '★' : String(d), 14, i ? '#9da2b0' : '#0e1525')}</svg><small>${esc(t.length > 18 ? t.slice(0, 17) + '…' : t)}</small></button>`;
  }).join('');
}
function home() {
  const cur = currentDay(), m = mission(), due = dueKeys().length, top = ranking()[0];
  const lv = level(), base = 60 * (lv - 1) ** 2, next = 60 * lv ** 2, d = cur && dayInfo(cur);
  const L = d && !d.review ? LESSONS[d.li] : null, streak = shownStreak(), lvId = d ? d.level : 'C2';
  const left = Math.max(0, S.goal - Math.floor(secsToday() / 60));
  const hasData = IK.some((k) => S.stats[k].n >= 5);
  let thumb = L && L.bd
    ? `<div class="thumb" style="--lc:${LVCOL[lvId]}"><span class="eyebrow">Frase-chave da lição</span>${breakdownHTML(L.bd, true)}<div class="row"><small class="grow">${esc(L.bd.pt)}</small>${spk(L.bd.t.map((x) => x.w).join(' '))}</div></div>`
    : `<div class="thumb center" style="--lc:${LVCOL[lvId]}">${levelBadge(lvId, 130)}</div>`;
  let heroTxt = d
    ? `<span class="eyebrow">${d.level} · Semana ${d.w + 1} · Dia ${cur} de ${TOTAL}</span>
      <h1>${d.review ? '🏁 Checkpoint da semana ' + (d.w + 1) : esc(L.de)}</h1>
      <p class="meta">⏱ ${d.review ? '25–35' : '30–45'} min</p>
      <p class="lead">${d.review ? 'Revisão misturada das 6 lições da semana, em 18 exercícios.' : esc(L.pt) + ' · ' + esc(L.gt)}</p>
      <button class="pri" id="goL">${m.lesson ? 'Adiantar o dia' : 'Começar o dia'} ${cur} →</button>`
    : `<span class="eyebrow">Trilha concluída</span><h1>🏆 Todas as lições feitas!</h1><p class="lead">Mantenha as cartas em dia, faça treinos extras e mergulhe nos conteúdos de apoio.</p>`;
  // Antes do dia 1, o início conduz pelo módulo "Comece aqui".
  const gNext = !nDone() && GUIDE.find((g) => !S.guide[g.id]);
  if (gNext) {
    const k = GUIDE.indexOf(gNext);
    heroTxt = `<span class="eyebrow">Comece aqui · Aula ${k + 1} de ${GUIDE.length}</span><h1>${gNext.e} ${gNext.t}</h1>
      <p class="meta">⏱ 3–5 min · ${guideCat(gNext).e} ${guideCat(gNext).t}</p><p class="lead">${gNext.s}</p>
      <div class="row"><button class="pri" id="goG">${k ? 'Continuar' : 'Começar'} a aula →</button><button class="ghost" id="skipG">Pular para o dia 1</button></div>`;
    thumb = `<div class="thumb" style="--lc:${LVCOL.A1}"><span class="eyebrow">Antes do dia 1</span>${GUIDE_CATS.map((c) => { const gs = GUIDE.filter((g) => g.cat === c.id), n = gs.filter((g) => S.guide[g.id]).length; return `<div class="gmini ${n === gs.length ? 'ok' : c.id === gNext.cat ? 'cur' : ''}"><span>${n === gs.length ? '✓' : c.e}</span>${c.t} <small class="mut">${n}/${gs.length}</small></div>`; }).join('')}</div>`;
  }
  app.innerHTML = `<section class="hero"><div class="hero-bg">${heroArt(lvId)}</div>
  <div class="hero-card"><div class="hero-txt"><p class="hi">Hallo${S.name ? ', ' + esc(S.name) : ''}! 👋</p>${heroTxt}</div>${thumb}</div></section>
  <div class="strip">
    <div class="pill">Você está numa sequência de <span class="flame">${streak}</span> ${streak === 1 ? 'dia' : 'dias'}${S.freezes ? ` <span class="mut">· 🧊 ${S.freezes} proteção</span>` : ''}</div>
    <div class="pill grow"><span>⭐ ${S.xp} XP · Nível ${lv} <span class="mut">${levelTitle()}</span></span><div class="bar"><i style="width:${Math.round(((S.xp - base) / (next - base)) * 100)}%"></i></div><small class="mut">faltam ${next - S.xp}</small></div>
    <div class="pill">📚 ${nWords()} palavras</div>
  </div>
  <div class="grid2">
    <div class="card"><h3>Missão de hoje</h3>
    <div class="check"><span>${m.lesson ? '✅' : '⬜'}</span><span class="${m.lesson ? 'done' : ''}">Concluir a lição do dia</span></div>
    <div class="check"><span>${m.cards ? '✅' : '⬜'}</span><span class="${m.cards ? 'done' : ''}">Zerar as cartas de revisão${due ? ' (' + due + ')' : ''}</span></div>
    <div class="check"><span>${m.time ? '✅' : '⬜'}</span><span class="${m.time ? 'done' : ''}">Estudar <span id="clock">${clockText()}</span></span></div>
    <div class="check"><span>${m.extra ? '✅' : '⬜'}</span><span class="${m.extra ? 'done' : ''}">Fazer uma tarefa de casa ou ver um conteúdo extra</span></div>
    <small class="mut">${daily().perfect ? '🌟 Dia perfeito conquistado!' : m.lesson && left > 0 ? `Faltam ${left} min. ${due ? 'Que tal zerar as cartas?' : 'Um treino extra fecha a conta.'}` : 'As quatro juntas valem o bônus de Dia Perfeito (+30 XP).'}</small>
    <div class="row" style="margin-top:12px">${due ? `<button id="goC">🃏 Revisar ${due}</button>` : ''}${nDone() ? '<button id="goX">💪 Treino extra</button>' : ''}</div></div>
    <div class="card"><h3>${INT[top.k].e} Seu ponto forte ${hasData ? 'até agora' : '(palpite inicial)'}</h3><p><b>${INT[top.k].n}</b></p>
    <p class="mut">Estou colocando mais exercícios de ${INT[top.k].d}. As outras sete continuam aparecendo para eu seguir medindo.</p>
    <button class="ghost" id="goP">Ver meu perfil →</button></div>
  </div>
  ${!S.hideApp && nDone() >= 1 ? appCard(true) : ''}
  ${weekCard()}
  ${pendingHw() !== undefined ? hwCard(pendingHw(), '🏠 Tarefa de casa · ' + esc(LESSONS[pendingHw()].de)) : ''}
  ${cur ? `<div class="card"><div class="row"><h3 class="grow">Sua jornada</h3><button class="ghost" id="goT">Ver trilha completa →</button></div><div class="mini">${miniPath(Array.from({ length: Math.min(5, TOTAL - cur + 1) }, (_, i) => cur + i))}</div></div>` : ''}
  <div class="row"><h2 class="grow">🎬 Para estudar fora daqui</h2><button class="ghost" id="goE">Ver todos →</button></div>
  <div class="xgrid">${pickExtras(curLevel(), 3).map(extraCard).join('')}</div>`;
  if ($('#goL')) $('#goL').onclick = () => go('intro', cur);
  if ($('#goG')) $('#goG').onclick = () => go('guide', gNext.id);
  if ($('#skipG')) $('#skipG').onclick = () => go('intro', 1);
  if ($('#goC')) $('#goC').onclick = () => go('cards');
  if ($('#goX')) $('#goX').onclick = () => startSession('extra');
  if ($('#goT')) $('#goT').onclick = () => go('trilha');
  $('#goP').onclick = () => go('perfil'); $('#goE').onclick = () => go('extras');
  $$('.mnode:not([disabled])').forEach((b) => (b.onclick = () => go('intro', +b.dataset.d)));
  wireSeen(app, home); wireHw(app, home); wireAppCard();
}

/* ---------- trilha A1–C2 ---------- */
let trLevel = null;
function lvTabs(sel, attr) {
  return `<div class="lvtabs">${PHASES.map((x) => {
    const ds = phaseDays(x), pc = Math.round((ds.filter((d) => S.done[d]).length / ds.length) * 100);
    return `<button class="lvtab ${x.id === sel ? 'on' : ''}" ${attr}="${x.id}" style="--lc:${LVCOL[x.id]}"><i></i>${x.id}<small>${pc}%</small></button>`;
  }).join('')}</div>`;
}
function trilha(lvId) {
  const cur = currentDay() || TOTAL + 1;
  if (lvId) trLevel = lvId;
  if (!trLevel) trLevel = curLevel();
  const p = PHASES.find((x) => x.id === trLevel), days = phaseDays(p), nw = p.weeks[1] - p.weeks[0];
  const doneN = days.filter((d) => S.done[d]).length;
  const { svg, P } = pathSVG(days, cur);
  const weeks = Array.from({ length: nw }, (_, k) => { const w = p.weeks[0] + k; return `<li><b>Módulo ${w + 1}:</b> ${modLs(w).map((l) => esc(l.gt)).join(' · ')}</li>`; }).join('');
  app.innerHTML = `<h1>Sua jornada A1 → C2</h1><p class="mut">Níveis do Quadro Europeu, na estrutura do Goethe-Institut. Toque num bloco para abrir a lição. Já sabe alemão? <button class="link" id="toP">Faça o teste de nível</button>.</p>
  ${lvTabs(trLevel, 'data-lv')}
  <div class="course">
    <aside class="ccard" style="--lc:${LVCOL[p.id]}">${levelBadge(p.id, 76)}
      <span class="eyebrow">${p.when} · ${p.ue}</span><h2>${p.n}</h2><p class="mut">${p.can}</p>
      <p>🧩 ${days.length - nw} lições · 🏁 ${nw} checkpoints</p>
      <div class="row"><div class="bar"><i style="width:${Math.round((doneN / days.length) * 100)}%"></i></div><small>${doneN}/${days.length}</small></div>
      ${p.id === 'A1' ? `<div class="prep"><b>🧭 Antes do dia 1: Comece aqui</b>${GUIDE_CATS.map((c) => { const gs = GUIDE.filter((g) => g.cat === c.id), nx = gs.find((g) => !S.guide[g.id]) || gs[0], n = gs.filter((g) => S.guide[g.id]).length; return `<button class="gmini ${n === gs.length ? 'ok' : ''}" data-g="${nx.id}"><span>${n === gs.length ? '✓' : c.e}</span>${c.t} <small class="mut">${n}/${gs.length}</small></button>`; }).join('')}</div>` : ''}
      <details><summary>Gramática por semana</summary><ul class="wklist">${weeks}</ul></details>
      ${p.mods ? `<details><summary>Roteiro completo do nível</summary><ul>${p.mods.map((m) => `<li>${m}</li>`).join('')}</ul>
        <small class="mut">${p.part ? 'As semanas da trilha cobrem o início do nível. Para o restante do roteiro, use os conteúdos de apoio da aba Extras.' : 'Todos esses temas são cobertos pelas semanas da trilha.'}</small></details>` : ''}
      <small class="mut">UE = aula de 45 min, estimativa aproximada do Goethe-Institut.</small>
    </aside>
    <div class="pathwrap" id="pw">${svg}<div class="pop" id="pop" hidden></div></div>
  </div>`;
  $$('[data-lv]').forEach((b) => (b.onclick = () => { trilha(b.dataset.lv); scrollTo(0, 0); }));
  $$('[data-g]').forEach((b) => (b.onclick = () => go('guide', b.dataset.g)));
  $('#toP').onclick = () => go('nivel');
  const pop = $('#pop');
  const open = (d) => {
    const info = dayInfo(d), pp = P.find((x) => x.d === d), L = info.review ? null : LESSONS[info.li], locked = d > cur && !S.done[d];
    pop.innerHTML = `<button class="x" id="pclose" aria-label="Fechar">✕</button><span class="eyebrow">${info.level} · Semana ${info.w + 1} · Dia ${d}</span>
      <h3>${L ? esc(L.de) : '🏁 Checkpoint da semana ' + (info.w + 1)}</h3>
      <p class="mut">${L ? esc(L.pt) + ' · ' + esc(L.gt) : '18 exercícios misturando as 6 lições da semana.'}</p>
      ${S.done[d] ? `<p class="stars-s">${'★'.repeat(S.done[d].s)}${'☆'.repeat(3 - S.done[d].s)}</p>` : ''}
      ${locked ? `<p class="mut">🔒 Conclua o dia ${cur} para liberar.</p>` : `<button class="pri big" id="pgo">${S.done[d] ? 'Refazer' : 'Começar'} ${L ? 'lição' : 'checkpoint'}</button>`}`;
    pop.style.left = Math.max(0, Math.min(PATH_W - 280, pp.x - 140)) + 'px';
    pop.style.top = pp.y + 70 + 'px'; pop.hidden = false;
    $('#pclose').onclick = () => { pop.hidden = true; };
    if ($('#pgo')) { $('#pgo').onclick = () => go('intro', d); $('#pgo').focus(); }
  };
  $$('.node').forEach((n) => {
    n.onclick = () => open(+n.dataset.d);
    n.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(+n.dataset.d); } };
  });
  const c = $('.node.n-cur');
  if (c) c.scrollIntoView({ block: 'center' }); else scrollTo(0, 0);
}

/* ---------- guia de estudo ---------- */
const guideCat = (g) => GUIDE_CATS.find((c) => c.id === g.cat) || GUIDE_CATS[0];
function studyTips(lv) {
  const T = {
    A: ['Leia a aula passo a passo devagar. Se um termo for estranho, procure no Dicionário de termos da aba Guia.', 'Toque em 🔊 em cada exemplo e repita em voz alta duas vezes, imitando o som.', 'Faça o teste rápido de cabeça, sem olhar, antes de abrir as respostas.', 'Pratique os 14 exercícios. Quando errar, leia a explicação inteira: é ali que a regra fixa.', 'Revise as cartas do dia na aba Cartas, dizendo a resposta em voz alta antes de virar.', 'Feche o dia escrevendo uma frase sobre você com uma palavra nova, e ouça um conteúdo da aba Extras.'],
    B: ['Leia a regra e a frase desmontada, e diga em uma frase, com suas palavras, o que a regra faz.', 'Crie três frases suas com a estrutura nova, sobre a sua vida.', 'Pratique os exercícios e revise as explicações de erro antes de seguir.', 'Revise as cartas em voz alta.', 'Passe 15 minutos num conteúdo da aba Extras com legenda em alemão e anote três palavras novas.'],
    C: ['Leia a explicação e procure a estrutura num texto real: jornal, podcast ou livro da aba Extras.', 'Reescreva um parágrafo trocando o registro (do coloquial para o formal, ou o contrário).', 'Pratique os exercícios e as cartas.', 'Escreva um parágrafo de opinião usando dois recursos da lição e leia em voz alta.'],
  }[lv[0]];
  return `<ol class="pts">${T.map((t) => `<li>${t}</li>`).join('')}</ol>`;
}
const glossList = (f) => {
  const n = norm(f || '');
  const rows = GLOSS.filter(([t, d, e]) => !n || norm(t + ' ' + d + ' ' + e).includes(n));
  return rows.length ? `<dl class="gloss">${rows.map(([t, d, e]) => `<dt>${t}</dt><dd>${d}<br><span class="de">${esc(e)}</span></dd>`).join('')}</dl>` : '<p class="mut">Nenhum termo encontrado.</p>';
};
function guide(id) {
  if (id) {
    const k = GUIDE.findIndex((g) => g.id === id), g = GUIDE[k] || GUIDE[0], nx = GUIDE[k + 1], c = guideCat(g), gs = GUIDE.filter((x) => x.cat === g.cat);
    app.innerHTML = `<button class="ghost back" id="bk">← Guia</button>
    <div class="lhead"><div class="gbig">${g.e}</div><div><span class="eyebrow">Comece aqui · ${c.e} ${c.t} · ${gs.indexOf(g) + 1} de ${gs.length}</span><h1>${g.t}</h1><p class="mut">${g.s}</p></div></div>
    <div class="gdots" aria-label="Aulas do Comece aqui">${GUIDE.map((x) => `<button class="gdot ${x.id === g.id ? 'cur' : S.guide[x.id] ? 'ok' : ''}" data-g="${x.id}" title="${esc(x.t)}" aria-label="${esc(x.t)}"></button>`).join('')}</div>
    <div class="card deep">${deepHTML(g.body)}</div>
    <p class="mut gscore" id="gsc"></p>
    <button class="pri big" id="gdone">${S.guide[g.id] ? (nx ? 'Próxima aula →' : 'Ir para o dia 1 →') : 'Concluir aula · +20 XP'}</button>`;
    guideImgs(app);
    $('#bk').onclick = () => go('guide');
    $$('.gdot').forEach((b) => (b.onclick = () => go('guide', b.dataset.g)));
    $('#gdone').onclick = () => {
      if (!S.guide[g.id]) {
        const sc = quizScore(app), bonus = sc.ok * 2;
        sfx('conclusao'); S.guide[g.id] = today(); addXP(20 + bonus);
        toast(`📘 Aula concluída! +${20 + bonus} XP${sc.n ? ` · desafios: ${sc.ok} de ${sc.n} de primeira` : ''}`); markActive(); checkBadges(); save();
      }
      if (nx) go('guide', nx.id); else go('intro', 1);
    };
    // cada desafio certo de primeira vale +2 XP ao concluir a aula
    $('.card.deep', app).addEventListener('click', () => setTimeout(() => { const sc = quizScore(app), el = $('#gsc'); if (el && sc.done) el.textContent = `🎯 ${sc.ok} de ${sc.n} desafios de primeira${S.guide[g.id] || !sc.ok ? '' : ` · +${sc.ok * 2} XP de bônus ao concluir`}`; }, 0));
    scrollTo(0, 0);
    return;
  }
  const n = GUIDE.filter((g) => S.guide[g.id]).length;
  app.innerHTML = `<h1>📘 Guia de estudo</h1>
  <p class="mut">Se você nunca estudou outra língua, comece por aqui: são ${GUIDE.length} aulas de 3 a 5 minutos, em quatro blocos, com desafios para fixar. Você pode voltar a elas sempre que quiser.</p>
  <div class="card"><div class="row"><h3 class="grow">🧭 Comece aqui</h3><small>${n}/${GUIDE.length} concluídas</small></div>
  <div class="bar" style="margin:6px 0 12px"><i style="width:${Math.round((n / GUIDE.length) * 100)}%"></i></div>
  ${GUIDE_CATS.map((c) => { const gs = GUIDE.filter((g) => g.cat === c.id); return `<h4 class="gcat">${c.e} ${c.t} <small class="mut">${gs.filter((g) => S.guide[g.id]).length}/${gs.length}</small></h4><div class="glist">${gs.map((g) => `<button class="gitem ${S.guide[g.id] ? 'ok' : ''}" data-g="${g.id}"><span class="gnum">${S.guide[g.id] ? '✓' : GUIDE.indexOf(g) + 1}</span><span class="grow"><b>${g.e} ${g.t}</b><small>${g.s}</small></span><span>→</span></button>`).join('')}</div>`; }).join('')}</div>
  <div class="card"><h3>🗓️ Rotina de cada lição</h3><p class="mut">O roteiro muda um pouco conforme o nível. No começo (A1 e A2):</p>${studyTips('A1')}</div>
  <div class="card"><h3>📖 Dicionário de termos</h3><p class="mut">Os nomes de gramática que aparecem nas lições, explicados de forma simples.</p>
  <input id="gq" placeholder="Buscar termo (ex.: dativo, sujeito)…" autocomplete="off"><div id="gl">${glossList('')}</div></div>`;
  $$('[data-g]').forEach((b) => (b.onclick = () => go('guide', b.dataset.g)));
  $('#gq').oninput = (e) => { $('#gl').innerHTML = glossList(e.target.value); };
}

/* ---------- extras ---------- */
// Extras em três subpáginas, uma por vez na tela: lições Pocket, leitura e escuta, e conteúdos externos.
// A última aberta fica lembrada neste aparelho.
const XTABS = [['pocket', '🧳', 'Lições Pocket'], ['textos', '📖', 'Leitura e escuta'], ['conteudos', '🎬', 'Filmes, músicas e mais']];
let xTab = (() => { try { return localStorage.getItem('deutschTrilha.xtab') || 'pocket'; } catch (e) { return 'pocket'; } })();
let xLevel = null, xType = 'all', xMode = 'voce', tLevel = null;
function extras(arg) {
  if (XTABS.some(([id]) => id === arg)) xTab = arg;
  else if (PHASES.some((p) => p.id === arg)) { xTab = 'conteudos'; xMode = 'explorar'; xLevel = arg; }
  try { localStorage.setItem('deutschTrilha.xtab', xTab); } catch (e) { /* só lembra a aba */ }
  const nPk = Object.keys(S.pockets || {}).filter((id) => POCKETS.some((p) => p.id === id)).length;
  const sub = { pocket: `${nPk} de ${POCKETS.length} feitas`, textos: `${Object.keys(S.reads).length} de ${TEXTS.length} lidos`, conteudos: `${Object.keys(S.seen).length} vistos` };
  app.innerHTML = `<h1>🎬 Extras</h1>
  <div class="xtabs" role="tablist">${XTABS.map(([id, e, n]) => `<button class="xtab ${id === xTab ? 'on' : ''}" role="tab" aria-selected="${id === xTab}" data-xtab="${id}"><span>${e}</span><b>${n}</b><small>${sub[id]}</small></button>`).join('')}</div>
  <div class="xbody">${xTab === 'pocket' ? pocketList() : xTab === 'textos' ? textsPage() : contentPage()}</div>`;
  $$('[data-xtab]').forEach((b) => (b.onclick = () => extras(b.dataset.xtab)));
  $$('[data-pk]').forEach((b) => (b.onclick = () => go('pocket', b.dataset.pk)));
  $$('[data-pkg]').forEach((b) => (b.onclick = () => { pkGroup = b.dataset.pkg; extras('pocket'); }));
  $$('[data-tx]').forEach((b) => (b.onclick = () => go('texto', b.dataset.tx)));
  $$('[data-tl]').forEach((b) => (b.onclick = () => { tLevel = b.dataset.tl; extras('textos'); }));
  $$('[data-xm]').forEach((b) => (b.onclick = () => { xMode = b.dataset.xm; extras('conteudos'); }));
  $$('[data-xl]').forEach((b) => (b.onclick = () => { xLevel = b.dataset.xl; extras('conteudos'); }));
  $$('[data-xt]').forEach((b) => (b.onclick = () => { xType = b.dataset.xt; extras('conteudos'); }));
  wireSeen(app, () => extras('conteudos'));
}

// Leitura e escuta: um nível por vez (começa no nível atual da trilha).
function textsPage() {
  if (!tLevel) tLevel = curLevel();
  const lvs = PHASES.map((p) => p.id), list = tLevel === 'all' ? TEXTS : TEXTS.filter((t) => t.lv === tLevel);
  return `<p class="mut">Textos longos e cenas de áudio no formato das provas, um por semana da trilha. Cada texto libera na semana dele.</p>
  <div class="chips">${[...lvs, 'all'].map((l) => { const n = TEXTS.filter((t) => l === 'all' || t.lv === l).length;
    return `<button class="chipb ${l === tLevel ? 'on' : ''}" data-tl="${l}">${l === 'all' ? 'Todos' : l} <small>${n}</small></button>`; }).join('')}</div>
  ${textsList(list)}`;
}

// Conteúdos externos: "Para você" (nível atual + perfil) ou "Explorar" (todos os níveis e tipos).
function contentPage() {
  const top = ranking().slice(0, 2).map((r) => r.k), cl = curLevel();
  const modes = `<div class="chips seg"><button class="chipb ${xMode === 'voce' ? 'on' : ''}" data-xm="voce">⭐ Para você</button><button class="chipb ${xMode === 'explorar' ? 'on' : ''}" data-xm="explorar">🔎 Explorar</button></div>`;
  const tip = `<div class="card tip"><h3>💡 Como tirar mais proveito</h3><ul class="pts"><li>Use legenda em alemão, não em português. Se travar, volte 10 segundos e ouça de novo.</li><li>Anote três palavras novas de cada conteúdo e use cada uma numa frase no exercício de diário.</li><li>Repita em voz alta uma fala curta, imitando ritmo e entonação (shadowing).</li><li>Os links sem site oficial abrem uma busca, para você escolher a fonte que preferir.</li></ul></div>`;
  if (xMode === 'voce') {
    const lv = EXTRAS.filter((x) => x.lvs.includes(cl)), mine = lv.filter(fitsProfile), pick = (mine.length >= 4 ? mine : lv);
    const todo = pick.filter((x) => !S.seen[x.id]), seen = pick.filter((x) => S.seen[x.id]);
    return `${modes}<p class="mut">Escolhidos para o seu nível (<b>${cl}</b>)${mine.length >= 4 ? ` e para o seu perfil: ${top.map((k) => INT[k].e + ' ' + INT[k].n).join(' · ')}` : ''}. Cada item visto vale 10 XP.</p>
    ${todo.length ? `<div class="xgrid">${todo.map(extraCard).join('')}</div>` : '<p class="mut">Você já viu todas as sugestões deste nível. Abra "Explorar" para ver mais.</p>'}
    ${seen.length ? `<details class="card"><summary>✓ Já vistos (${seen.length})</summary><div class="xgrid">${seen.map(extraCard).join('')}</div></details>` : ''}${tip}`;
  }
  if (!xLevel) xLevel = cl;
  const list = EXTRAS.filter((x) => x.lvs.includes(xLevel) && (xType === 'all' || x.t === xType));
  return `${modes}${lvTabs(xLevel, 'data-xl')}
  <div class="chips">${['all', ...Object.keys(XT)].map((t) => `<button class="chipb ${t === xType ? 'on' : ''}" data-xt="${t}">${t === 'all' ? 'Tudo' : XT[t][0] + ' ' + XT[t][1]}</button>`).join('')}</div>
  ${list.length ? `<div class="xgrid">${list.map(extraCard).join('')}</div>` : '<p class="mut">Nada desse tipo para este nível. Experimente outro filtro.</p>'}${tip}`;
}

/* ---------- abertura da lição ---------- */
function intro(day) {
  const d = dayInfo(day);
  if (d.review) {
    const ls = modLs(d.w);
    app.innerHTML = `<button class="ghost back" id="bk">← Trilha</button><div class="lhead" style="--lc:${LVCOL[d.level]}">${levelBadge(d.level, 60)}<div><span class="eyebrow">${d.level} · Dia ${day}</span><h1>🏁 Checkpoint da semana ${d.w + 1}</h1></div></div>
    <p>18 exercícios misturando tudo o que você viu nesta semana:</p><ul>${ls.map((l) => `<li><b>${esc(l.de)}</b> — ${esc(l.gt)}</li>`).join('')}</ul>
    <button class="pri big" id="st">Começar o checkpoint</button>
    ${(() => { const tx = TEXTS.find((t) => t.w === d.w + 1); return tx ? `<div class="card txc"><h3>${tx.kind === 'escuta' ? '🎧' : '📖'} Texto da semana: ${esc(tx.t)}</h3><p class="mut">${esc(tx.intro)}</p><button id="tx">Abrir o texto · até +70 XP</button></div>` : ''; })()}`;
    $('#st').onclick = () => startSession('review', day);
    if ($('#tx')) $('#tx').onclick = () => go('texto', TEXTS.find((t) => t.w === d.w + 1).id);
    $('#bk').onclick = () => go('trilha');
    return;
  }
  const l = LESSONS[d.li];
  app.innerHTML = `<button class="ghost back" id="bk">← Trilha</button>
  <div class="lhead" style="--lc:${LVCOL[d.level]}">${levelBadge(d.level, 60)}<div><span class="eyebrow">${d.level} · Semana ${d.w + 1} · Dia ${day}</span><h1>${esc(l.de)}</h1><p class="mut">${esc(l.pt)}</p></div></div>
  <details class="card how" ${d.level === 'A1' ? 'open' : ''}><summary>🗓️ Como estudar esta lição</summary>${studyTips(d.level)}</details>
  <div class="card deep"><h2 class="dh">📖 Aula passo a passo</h2>${lessonImgs(l)}${l.deep ? (visFor(l) ? `<h3 class="step">🗺️ Veja no esquema</h3>${visFor(l)}` : '') + deepHTML(l.deep) : autoDeep(l)}</div>
  ${l.deep ? `<div class="card"><h3>🧩 Resumo da regra: ${esc(l.gt)}</h3><p>${esc(l.gx)}</p>
  ${l.pts.length ? `<h3 style="margin-top:14px">Como funciona</h3><ul class="pts">${l.pts.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>` : ''}
  <h3 style="margin-top:14px">Exemplos</h3>
  ${l.ge.map((e) => `<p>${spk(e.de)}<span class="de">${esc(e.de)}</span><br><small>${esc(e.pt)}</small></p>`).join('')}
  ${l.ex.length ? `<h3 style="margin-top:14px">No dia a dia</h3>${l.ex.map((e) => `<p>${spk(e.de)}<span class="de">${esc(e.de)}</span><br><small>${esc(e.pt)}</small></p>`).join('')}` : ''}</div>
  ${l.bd ? `<div class="card"><h3>🔎 Frase desmontada</h3><p class="mut">Cada peça da frase e o papel que ela cumpre. As cores são as mesmas em todas as lições.</p>${breakdownHTML(l.bd)}</div>` : ''}` : ''}
  <div class="card"><h3>📚 Vocabulário</h3><small>Cores: <span class="g-m">der</span> · <span class="g-f">die</span> · <span class="g-n">das</span></small>
  <table>${l.v.map((v, j) => `${v.x && !l.v[j - 1].x ? '<tr><td colspan="3"><small>Vocabulário ampliado</small></td></tr>' : ''}<tr><td>${spk(v.de)}</td><td class="de ${gcls(v.de)}">${esc(v.de)}</td><td>${v.em} ${esc(v.pt)}</td></tr>`).join('')}</table></div>
  ${newWordsCard(l)}
  <div class="card"><h3>💬 Conversa</h3>
  ${l.dlg.map((x, i) => `<div class="bubble ${i % 2 ? 'b' : ''}">${spk(x.de)}<span class="de">${esc(x.de)}</span><small>${esc(x.pt)}</small></div>`).join('')}</div>
  <button class="pri big" id="st">Praticar (14 exercícios)</button>
  ${hwCard(d.li)}
  <h2>🎬 Para ir além</h2><div class="xgrid">${pickExtras(d.level, 2).map(extraCard).join('')}</div>`;
  $('#st').onclick = () => startSession('lesson', day);
  $('#bk').onclick = () => go('trilha');
  wireSeen(app, () => intro(day)); wireHw(app, () => intro(day));
}

/* ---------- palavras novas da lição ---------- */
let KNOWN = null;
const knownFor = (i) => { if (!KNOWN) KNOWN = knownIndex(); return KNOWN[i].unknown; };
function newWordsCard(l) {
  const rest = knownFor(l.i), sup = SUP[l.de] || [];
  if (!sup.length && !rest.length) return '';
  const orig = (w) => { const m = new RegExp('(^|[^\\p{L}])(' + w + ')(?![\\p{L}])', 'iu').exec(l.usedText || ''); return m ? m[2] : w; };
  const tr = (w) => `https://translate.google.com/?sl=de&tl=pt&text=${encodeURIComponent(w)}&op=translate`;
  return `<div class="card"><h3>🆕 Palavras novas desta lição</h3>
  <p class="mut">Elas aparecem nos exemplos, no diálogo e nos exercícios de hoje, além do vocabulário principal. Ouça cada uma antes de praticar.</p>
  <table>${sup.map((s) => `<tr><td>${spk(s.de)}</td><td class="de ${gcls(s.de)}">${esc(s.de)}</td><td>${esc(s.pt)}</td></tr>`).join('')}
  ${rest.map((w) => { const o = orig(w); return `<tr><td>${spk(o)}</td><td class="de">${esc(o)}</td><td><a href="${tr(o)}" target="_blank" rel="noopener noreferrer">ver tradução ↗</a></td></tr>`; }).join('')}</table></div>`;
}

/* ---------- sessão de exercícios ---------- */
let sess = null;
const newCard = () => { const t = new Date(); t.setHours(24, 0, 0, 0); return { due: t.getTime(), int: 0, ease: 2.3, reps: 0, lapses: 0, mods: {} }; };
function startSession(kind, day, opt = {}) {
  let ctxs;
  if (kind === 'lesson') ctxs = [LESSONS[dayInfo(day).li]];
  else if (kind === 'review') ctxs = modLs(dayInfo(day).w);
  else ctxs = sample(doneLessons(), 6);
  if (kind === 'lesson') { ctxs[0].v.forEach((v) => { if (!S.cards[v.k]) S.cards[v.k] = newCard(); }); addSupCards(ctxs[0].i); }
  const n = kind === 'lesson' ? 14 : kind === 'review' ? 18 : 10;
  let queue = opt.kinds ? shuffle(Array.from({ length: n }, (_, i) => ({ k: opt.kinds[i % opt.kinds.length] }))) : planInt(n);
  // Lição de "Ler e escrever": primeiro as perguntas do texto, depois a escrita guiada, depois a prática de sempre.
  if (kind === 'lesson' && ctxs[0].le) { const le = ctxs[0].le; queue = [...le.texto.qs.map((_, j) => ({ k: 'leq', j })), { k: 'lew' }, ...planInt(n - le.texto.qs.length - 1)]; }
  sess = { kind, day, ctxs, queue, noFala: !!opt.noFala, forceFala: !!opt.forceFala, doneN: 0, first: 0, firstOk: 0, combo: 0, maxCombo: 0, xp: 0, re: 0, by: {}, onEnter: null };
  view = 'run'; nav.hidden = true; nextEx();
}
const PRAISE = ['Richtig!', 'Sehr gut!', 'Genau!', 'Super!', 'Prima!', 'Toll!'];
function nextEx() {
  if (!sess.queue.length) return finish();
  const it = sess.queue.shift(), les = pick(sess.ctxs), I = INT[it.k] || { leq: { e: '📖', n: 'Leitura' }, lew: { e: '✍️', n: 'Escrita guiada' } }[it.k], my = sess;
  const pct = Math.round((sess.doneN / (sess.doneN + sess.queue.length + 1)) * 100);
  app.innerHTML = `<div class="runtop"><button class="x" id="quit" aria-label="Sair">✕</button><div class="bar"><i style="width:${pct}%"></i></div><span class="combo">${sess.combo > 1 ? '🔥' + sess.combo : ''}</span></div>
  <div class="chip">${I.e} ${I.n}${it.retry ? ' · mais uma chance' : ''}</div><div id="ex"></div><div id="fb"></div>`;
  $('#quit').onclick = () => { if (confirm('Sair da sessão? O que você já respondeu fica registrado.')) go('home'); };
  const t0 = Date.now();
  GEN[it.k](it.k === 'leq' || it.k === 'lew' ? sess.ctxs[0] : les, $('#ex'), (ok, keys = [], ans = '', sayT = '', why = '', fala = false) => {
    it.fala = fala;
    if (sess !== my) return;
    const st = S.stats[it.k]; if (st) { st.n++; if (ok) st.ok++; st.t += (Date.now() - t0) / 1000; }
    if (typeof logAtt === 'function') logAtt(compsOf(it.k, keys, fala), ok);
    keys.forEach((k) => { const c = S.cards[k]; if (c) c.mods[it.k] = (c.mods[it.k] || 0) + 1; });
    if (!it.retry) { sess.first++; if (ok) sess.firstOk++; }
    const by = (sess.by[it.k] = sess.by[it.k] || [0, 0]); by[1]++; if (ok) by[0]++;
    if (!ok) (sess.errs = sess.errs || []).push({ k: it.k, li: (it.k === 'leq' || it.k === 'lew' ? sess.ctxs[0] : les).i, ans, keys, fala }); // a conclusão mostra o que rever
    let gain = 0;
    if (ok) { sess.combo++; sess.maxCombo = Math.max(sess.maxCombo, sess.combo); S.maxCombo = Math.max(S.maxCombo, sess.combo); gain = 10 + Math.min(sess.combo, 5) * 2; sess.xp += gain; addXP(gain); if (sess.combo === 5 || sess.combo === 10) toast('🔥 Combo de ' + sess.combo + '!'); }
    else { sess.combo = 0; if (sess.re < 6 && INT[it.k]) { sess.re++; sess.queue.push({ k: it.k, retry: true }); } }
    sess.doneN++; checkBadges(); save();
    $('#fb').innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}"><b>${ok ? pick(PRAISE) + ' +' + gain + ' XP' : 'Quase! Essa volta no fim da sessão.'}</b>
    ${ans ? `<p>${ok ? '' : '<b>Certo:</b> '}${esc(ans)}</p>` : ''}
    ${!ok && why ? `<div class="why"><b>Por que errou</b>${why}</div>` : ''}
    <div class="row">${sayT ? spk(sayT) : ''}${sayT && !it.fala && falaOn() ? '<button id="mic">🎤 Repita em voz alta</button>' : ''}<span class="grow"></span><button class="pri" id="next">Continuar</button></div><div id="micres"></div></div>`;
    $('#next').onclick = nextEx;
    setTimeout(() => { if (sess === my) sess.onEnter = nextEx; }, 250);
    if ($('#mic')) $('#mic').onclick = () => { $('#mic').remove(); $('#micres').innerHTML = falaPanel(sayT); if (FALA_SR) falaStart($('#micres .fala')); };
    $('#next').scrollIntoView({ block: 'nearest' });
  }, it);
}
addEventListener('keydown', (e) => { if (e.key === 'Enter' && sess && sess.onEnter) { const f = sess.onEnter; sess.onEnter = null; f(); } });
// Frase dita direito (80% ou mais) em qualquer painel de fala: +5 XP uma vez por painel e conta para a conquista "Laut!".
document.addEventListener('fala', (e) => {
  const el = e.target; if (e.detail.score < 0.8 || el.dataset.xp) return;
  el.dataset.xp = '1'; S.spoken++; addXP(5); toast('🎤 Frase dita! +5 XP'); checkBadges(); save();
});
// Fala fora dos exercícios ("Repita em voz alta"): a primeira tentativa de cada painel vira evidência de Fala e Pronúncia.
// O exercício "Fale a frase" já registra pelo done() da sessão, por isso fica de fora aqui.
document.addEventListener('fala', (e) => {
  const el = e.target; if (typeof logAtt !== 'function' || el.dataset.att || el.closest('#ex')) return;
  el.dataset.att = '1'; logAtt(['S', 'pro'], e.detail.score >= 0.8); save();
});
function finish() {
  const s = sess, acc = s.first ? s.firstOk / s.first : 1, stars = acc >= 0.9 ? 3 : acc >= 0.7 ? 2 : 1;
  let bonus = 20;
  if (s.kind !== 'extra') {
    bonus = (s.kind === 'review' ? 100 : 50) + stars * 10;
    S.done[s.day] = { s: Math.max(stars, (S.done[s.day] || {}).s || 0), d: today() };
    daily().lesson = true;
  }
  sfx('conclusao');
  addXP(bonus); markActive(); checkBadges(); checkDaily(); save();
  const due = dueKeys().length, cur = currentDay(), left = Math.max(0, S.goal - Math.floor(secsToday() / 60));
  sess = null; nav.hidden = false;
  app.innerHTML = `<div class="stars">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</div>
  <h1 style="text-align:center">${s.kind === 'extra' ? 'Treino concluído!' : s.kind === 'review' ? 'Checkpoint concluído!' : 'Lição concluída!'}</h1>
  <div class="stats"><div class="stat"><b>+${s.xp + bonus}</b><small>XP</small></div><div class="stat"><b>${Math.round(acc * 100)}%</b><small>de primeira</small></div><div class="stat"><b>🔥 ${s.maxCombo}</b><small>maior combo</small></div></div>
  <div class="card"><h3>Como você foi em cada caminho</h3>
  ${Object.entries(s.by).map(([k, [o, n]]) => { const I = INT[k] || { leq: { e: '📖', n: 'Leitura' }, lew: { e: '✍️', n: 'Escrita guiada' } }[k]; return `<div class="prow"><span>${I.e} ${I.n}</span><div class="bar"><i style="width:${Math.round((o / n) * 100)}%"></i></div><small>${o}/${n}</small></div>`; }).join('')}
  ${s.kind === 'lesson' ? '<small>As ' + s.ctxs[0].v.length + ' palavras da lição entram nas suas cartas a partir de amanhã. É nessa revisão que eu meço a retenção.</small>' : ''}</div>
  ${s.kind === 'lesson' ? hwCard(dayInfo(s.day).li, '🏠 Agora, a tarefa de casa') : ''}
  ${left > 0 ? `<p class="mut">Faltam ${left} min para a sua meta de hoje.</p>` : '<p class="mut">Meta de tempo de hoje cumprida. 👏</p>'}
  ${due ? `<button class="pri big" id="fC">🃏 Revisar ${due} cartas agora</button>` : ''}
  <button class="big" id="fX" style="margin-top:8px">💪 Treino extra</button>
  ${cur ? `<button class="big" id="fN" style="margin-top:8px">Adiantar: dia ${cur}</button>` : ''}
  <button class="big" id="fH" style="margin-top:8px">Voltar ao início</button>`;
  if ($('#fC')) $('#fC').onclick = () => go('cards');
  $('#fX').onclick = () => startSession('extra');
  if ($('#fN')) $('#fN').onclick = () => go('intro', cur);
  $('#fH').onclick = () => go('home');
  wireHw(app);
  scrollTo(0, 0);
}

/* ---------- geradores de exercício (um por inteligência) ---------- */
function mcq(el, html, opts, correct, cb, cls = '') {
  el.innerHTML = html + `<div class="opts ${cls}">${opts.map((o, i) => `<button data-i="${i}">${esc(o)}</button>`).join('')}</div>`;
  const bs = $$('.opts button', el);
  bs.forEach((b) => (b.onclick = () => {
    const right = (o) => (typeof correct === 'function' ? correct(o) : o === correct);
    const ok = right(opts[b.dataset.i]);
    bs.forEach((x) => { x.disabled = true; if (right(opts[x.dataset.i])) x.classList.add('ok'); });
    if (!ok) b.classList.add('no');
    cb(ok, opts[b.dataset.i]);
  }));
}
const UML = `<div class="uml">${['ä', 'ö', 'ü', 'ß'].map((c) => `<button type="button">${c}</button>`).join('')}</div>`;
function wireUml(el, inp) { $$('.uml button', el).forEach((b) => (b.onclick = () => { inp.value += b.textContent; inp.focus(); })); }
function typed(el, html, answer, cb) {
  el.innerHTML = html + `<input id="inp" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Digite em alemão">${UML}<button class="pri" id="chk">Verificar</button>`;
  const inp = $('#inp', el); inp.focus(); wireUml(el, inp);
  const goChk = () => { if (!inp.value.trim()) return; inp.disabled = true; $('#chk', el).disabled = true; cb(typeof answer === 'function' ? answer(inp.value) : norm(inp.value) === norm(answer), inp.value.trim()); };
  $('#chk', el).onclick = goChk;
  inp.onkeydown = (e) => { if (e.key === 'Enter') { e.stopPropagation(); goChk(); } };
}
const fill = (c) => c.q.replace('___', c.a);

/* ---------- respostas alternativas ----------
   Muitas lacunas têm mais de uma resposta certa ("Ich ___ Anna." aceita bin e heiße). czOk aceita a resposta da lição,
   as alternativas de data/alts.js e duas trocas gerais diante de substantivo: possessivos entre si e ein → kein. */
const POSS = /^(mein|dein|sein|ihr|unser|euer|eur)(e|en|em|er|es)?$/;
function czOk(c, g) {
  const n = norm(g), a = norm(c.a);
  if (n === a) return true;
  if (!n || c.w.some((w) => norm(w) === n)) return false; // um distrator nunca vale
  const next = (c.q.split('___')[1] || '').trim().split(/\s+/)[0] || '';
  if (/^[A-ZÄÖÜ]/.test(next)) { // lacuna antes de substantivo
    const pa = POSS.exec(a), pg = POSS.exec(n);
    if (pa && pg && (pa[2] || '') === (pg[2] || '')) return true;
    if (/^ein(e|en|em|er|es)?$/.test(a) && n === 'k' + a) return true;
  }
  const low = g.trim().toLowerCase();
  return ((typeof CZ_ALT !== 'undefined' && CZ_ALT[c.q]) || []).some((x) => (x[0] === '*' ? new RegExp('^[a-zäöüß]+' + x.slice(1) + '$').test(low) : norm(x) === n));
}
const czAlt = (c, g) => (norm(g) !== norm(c.a) ? ` · Sua resposta «${g}» também está certa.` : '');
// Monte a frase: além da ordem do modelo, aceita levar um advérbio de tempo/lugar (ou um complemento com preposição)
// para o início, com o verbo conjugado ainda em 2º lugar ("Ich lerne heute Deutsch." = "Heute lerne ich Deutsch.").
const TOPIC = /^(heute|morgen|gestern|jetzt|hier|dort|da|dann|oft|immer|manchmal|leider|zuerst|später|bald|abends|morgens|mittags|nachmittags|danach|vielleicht|natürlich|am|im|um|in|nach|vor|seit|mit|zu|bei|ab|von|auf|aus|jeden|jede|jedes|letzte|letzten|letztes|nächste|nächsten|nächstes)$/i;
const PREPW = /^(am|im|um|in|nach|vor|seit|mit|zu|bei|ab|von|auf|aus|jeden|jede|jedes|letzte|letzten|letztes|nächste|nächsten|nächstes)$/i;
function v2Swap(base, cand) {
  const clean = (t) => t.toLowerCase().replace(/[.,!?;:…"]/g, '');
  const o = base.split(' '), b = o.map(clean), u = cand.split(' ').map(clean).join(' ');
  for (let k = 1; k <= 3 && k < b.length - 1; k++) {
    const V = o[k];
    if (!/^[a-zäöüß]/.test(V) || TOPIC.test(clean(V)) || (k > 1 && !/^[A-ZÄÖÜ]/.test(o[k - 1]))) continue;
    const A = b.slice(0, k), R = b.slice(k + 1);
    for (let i = 0; i < R.length; i++) for (let m = 1; m <= 4 && i + m <= R.length; m++) {
      const X = R.slice(i, i + m), last = o[k + 1 + i + m - 1];
      if (!TOPIC.test(X[0])) continue;
      if (PREPW.test(X[0]) ? m < 2 || !/^[A-ZÄÖÜ0-9]/.test(last) : m > 1) continue;
      if ([...X, b[k], ...A, ...R.slice(0, i), ...R.slice(i + m)].join(' ') === u) return true;
    }
  }
  return false;
}
function orderOk(de, g) {
  if (g === de) return true;
  if (!/\.$/.test(de.trim()) || de.includes(',')) return false; // só frases afirmativas simples
  return v2Swap(de, g) || v2Swap(g, de);
}
/* ---------- frase livre (intrapessoal) ----------
   wordIn: a palavra pedida aparece no texto, em qualquer forma (sprechen ~ spricht, das Buch ~ Bücher, aufstehen ~ stehe … auf).
   checkOwn: palavra pedida, estrutura do dia (formas das lacunas da lição) e se o texto parece português. */
const deUml = (s) => s.replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ß/g, 'ss');
const skel = (s) => deUml(s).replace(/[aeiouy]/g, '');
const SEP = /^(ab|an|auf|aus|ein|mit|nach|vor|zu|zurück|weg|fern|her|hin|los|weiter|kennen|fest)(.{3,})$/;
// formas de verbos irregulares que o radical não alcança (er nimmt, ich war, sie hat)
const IRR = { sein: 'bin|bist|ist|sind|seid|war|gewesen', haben: 'hab|hast|hat|hätt', werden: 'wird|wirst|wurd|würd|geword', wissen: 'weiß|wusst|gewusst',
  nehmen: 'nimm|nahm|genomm', geben: 'gib|gab|gäb', essen: 'iss|aß|gegess', lesen: 'lies|las|gelesen', sehen: 'sieh|sah|geseh', helfen: 'hilf|half|geholf',
  treffen: 'triff|traf|getroff', gehen: 'ging|gegang', kommen: 'kam|käm|gekomm', tun: 'tu|tat|getan', mögen: 'mag|moch|möcht', können: 'kann|konn|könnt',
  müssen: 'muss|musst|müsst', dürfen: 'darf|durf|dürft', wollen: 'will|woll', sollen: 'soll', bringen: 'brach|gebrach', denken: 'dach|gedach',
  finden: 'fand|gefund', schreiben: 'schrieb|geschrieb', trinken: 'trank|getrunk', schlafen: 'schläf|schlief', fahren: 'fähr|fuhr', laufen: 'läuf|lief',
  sprechen: 'sprich|sprach|gesproch', stehen: 'stand|gestand', sitzen: 'saß|gesess', liegen: 'lag|geleg', heißen: 'hieß|geheiß', bleiben: 'blieb|geblieb' };
const toksOf = (t) => t.toLowerCase().split(/[^a-zäöüß]+/).filter(Boolean);
function wordIn(text, de) {
  const toks = toksOf(text);
  const raw = toksOf(de.replace(/\(.*?\)/g, ' ').replace(/\/.*$/, ''));
  const ws = raw.filter((w) => w.length >= 3 && !/^(der|die|das|den|dem|des|ein|eine|sich|etw|jdn|jdm)$/.test(w));
  if (!ws.length) return raw.some((w) => toks.includes(w));
  const w = ws.reduce((a, b) => (b.length > a.length ? b : a)); // a palavra mais longa decide
  const hit = (x) => {
    if (IRR[x] && toks.some((t) => new RegExp('^(' + IRR[x] + ')').test(t))) return true;
    const stem = x.length > 4 ? x.replace(/(en|em|er|es|e|n|s)$/, '') : x;
    const sk = skel(stem);
    return toks.some((t) => t.startsWith(stem) || deUml(t).startsWith(deUml(stem)) || (stem.length >= 4 && t.includes(stem))
      || (sk.length >= 3 && skel(t).startsWith(sk)) || (sk.length >= 3 && /^ge/.test(t) && skel(t.slice(2)).startsWith(sk)));
  };
  if (hit(w)) return true;
  const sp = SEP.exec(w); // verbo separável: o prefixo vai para o fim da frase
  return !!(sp && toks.includes(sp[1]) && hit(sp[2]));
}
const PTW = /^(eu|você|voce|não|nao|é|e|um|uma|meu|minha|que|com|para|muito|gosto|tenho|sou|estou|moro|de|do|da|no|na)$/;
function checkOwn(text, v, les) {
  const toks = toksOf(text);
  const pt = toks.filter((t) => PTW.test(t)).length >= Math.max(2, toks.length * 0.4);
  const forms = new Set(les.cz.flatMap((c) => [c.a, ...c.w]).flatMap(toksOf).filter((f) => f.length >= 2));
  // lição de vocabulário puro (as lacunas pedem substantivos): não dá para reconhecer a estrutura pela forma
  const nouny = les.cz.every((c) => /^[A-ZÄÖÜ]/.test(c.a) && !/^(Der|Die|Das|Ein|Eine|Mein|Meine|Dein|Deine)$/.test(c.a));
  return { word: wordIn(text, v.de), struct: nouny || !forms.size ? null : toks.some((t) => forms.has(t)), pt };
}

function order(el, s, cb) {
  const toks = s.de.split(' ');
  let pool = shuffle(toks.map((t, i) => ({ t, i }))), ans = [];
  if (pool.map((p) => p.t).join(' ') === s.de) pool.reverse();
  const draw = () => {
    const btn = (p) => `<button data-i="${p.i}">${esc(p.t)}</button>`;
    el.innerHTML = `<p class="q">Monte a frase na ordem certa:<b>${esc(s.pt)}</b></p><div class="line">${ans.map(btn).join('')}</div><div class="pool">${pool.map(btn).join('')}</div><button class="pri" id="chk" ${pool.length ? 'disabled' : ''}>Verificar</button>`;
    $$('.pool button', el).forEach((b) => (b.onclick = () => { ans.push(pool.splice(pool.findIndex((p) => p.i == b.dataset.i), 1)[0]); draw(); }));
    $$('.line button', el).forEach((b) => (b.onclick = () => { pool.push(ans.splice(ans.findIndex((p) => p.i == b.dataset.i), 1)[0]); draw(); }));
    $('#chk', el).onclick = () => { $$('button', el).forEach((b) => (b.disabled = true)); const g = ans.map((p) => p.t).join(' '); cb(orderOk(s.de, g), g); };
  };
  draw();
}

/* ---------- explicações de erro ---------- */
const q = (s) => `«${esc(s)}»`;
const ruleOf = (les) => `<p><b>Regra da lição</b> (${esc(les.gt)}): ${esc(les.gx)}</p>`;
function genderHint(de) {
  const art = de.split(' ')[0], n = de.replace(/^\S+ /, '');
  const R = [['die', /(ung|heit|keit|schaft|ion|tät|ik|ie|ei|ur|enz|anz)$/, 'é quase sempre feminina'], ['das', /(chen|lein|ment|um)$/, 'é neutra'], ['der', /(ismus|ling|ist|ant|ent|or|ig|ich)$/, 'é masculina']];
  for (const [a, re, txt] of R) { const m = re.exec(n); if (m && a === art) return ` Dica: a terminação -${m[1]} ${txt}.`; }
  if (art === 'die' && /e$/.test(n)) return ' Dica: a maioria das palavras terminadas em -e é feminina.';
  return ' Aqui o gênero não segue regra visível: decore a palavra sempre junto com o artigo e a cor.';
}
function lev(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}
const flat = (s) => s.toLowerCase().replace(/[äöü]/g, (c) => ({ ä: 'a', ö: 'o', ü: 'u' }[c])).replace(/ß/g, 'ss').trim();
function whyVocab(g, v, les) {
  const a = v.de, isNoun = gender(a), art = a.split(' ')[0], noun = a.replace(/^\S+ /, '');
  if (isNoun) {
    const m = /^(der|die|das|ein|eine|den|dem)\s+(.+)$/i.exec(g);
    if (m && norm(m[2]) === norm(noun)) return `<p>O substantivo está certo, mas o artigo é <b>${art}</b>, não <i>${esc(m[1])}</i>. Em alemão o gênero raramente coincide com o do português.${genderHint(a)}</p>`;
    if (norm(g) === norm(noun)) return `<p>Faltou o artigo. O gênero faz parte da palavra e você vai precisar dele para declinar: <b>${esc(a)}</b>.${genderHint(a)}</p>`;
  }
  if (flat(g) === flat(a)) return `<p>Quase: o problema está no trema ou no ß. Você escreveu ${q(g)} e o certo é <b>${esc(a)}</b>. O trema muda o som (ä soa como "é", ö e ü são feitos com os lábios arredondados) e pode mudar o sentido.</p>`;
  if (lev(norm(g), norm(a)) <= 2) return `<p>Erro de grafia: você escreveu ${q(g)} e o certo é <b>${esc(a)}</b>. Compare letra por letra e ouça a palavra de novo.</p>`;
  const other = les.v.find((x) => x !== v && norm(x.de) === norm(g));
  if (other) return `<p>${q(g)} existe, mas significa ${q(other.pt)}. Para ${q(v.pt)} a palavra é <b>${esc(a)}</b>.</p>`;
  return `<p>Você escreveu ${q(g)}. A palavra para ${q(v.pt)} é <b>${esc(a)}</b>. Ela volta nas cartas de revisão.</p>`;
}
function whyCloze(les, c, g) {
  return `<p>Você respondeu ${q(g)}. O certo é <b>${esc(c.a)}</b>${c.why ? ': ' + esc(c.why) : '.'}</p>${ruleOf(les)}`;
}
function whyOrder(les, s, g) {
  const a = s.de.split(' '), b = g.split(' '), i = a.findIndex((t, j) => t !== b[j]);
  return `<p>Sua frase: ${q(g)}. A partir da ${i + 1}ª palavra a ordem se perde: você pôs ${q(b[i] || '')}, mas ali vai <b>${esc(a[i])}</b>.</p>
  <p>Lembre: na oração principal o verbo conjugado é sempre o 2º elemento; infinitivos, particípios e prefixos separáveis vão para o fim; depois de weil, dass, wenn, ob e dos relativos, o verbo conjugado vai para o fim.</p>${ruleOf(les)}`;
}
function whyPairs(bad) {
  return `<p>Você hesitou nestas palavras. Releia e ouça cada uma:</p><ul>${[...bad].map(vocab).map((v) => `<li>${spk(v.de)}<b class="${gcls(v.de)}">${esc(v.de)}</b> → ${esc(v.pt)}</li>`).join('')}</ul>`;
}
function whyHear(pool, tgt, g) {
  const c = pool.find((p) => p.de === g) || { de: g, pt: '' };
  return `<p>Você marcou ${spk(c.de)}${q(c.de)} (${esc(c.pt)}), mas o áudio dizia ${spk(tgt.de)}<b>${esc(tgt.de)}</b> (${esc(tgt.pt)}). Toque nos dois alto-falantes e compare os sons: preste atenção nas vogais com trema, no ch, no z (soa "ts") e no w (soa "v").</p>`;
}
function whySpeed(missed) {
  return `<p>Estas escaparam (${missed.some((m) => m[1] === 'tempo') ? 'algumas por tempo, ' : ''}reveja antes da próxima rodada):</p><ul>${missed.map(([v, r]) => `<li>${spk(v.de)}<b class="${gcls(v.de)}">${esc(v.de)}</b> → ${esc(v.pt)} <small>(${r === 'tempo' ? 'tempo esgotado' : 'opção errada'})</small></li>`).join('')}</ul>`;
}
function whyReply(a, b, ds, g) {
  const c = ds.find((d) => d.de === g) || { de: g, pt: '' };
  return `<p>A fala era ${q(a.de)} (${esc(a.pt)}).</p><p>Você escolheu ${q(c.de)}, que significa ${q(c.pt)}: a frase está correta, mas não responde ao que foi dito.</p><p>A resposta que encaixa é <b>${esc(b.de)}</b> (${esc(b.pt)}). Em diálogo, olhe primeiro para o verbo e a palavra interrogativa da pergunta: é a eles que a resposta precisa reagir.</p>`;
}
const GEN = {
  // Linguística: produzir a palavra ou a forma certa por escrito.
  lin(les, el, done) {
    if (Math.random() < 0.55) {
      const v = pick(les.v);
      typed(el, `<p class="q">Como se diz em alemão?<b>${v.em} ${esc(v.pt)}</b></p>${gender(v.de) ? '<p class="hint">Substantivo: escreva com o artigo.</p>' : ''}`, v.de, (ok, g) => done(ok, [v.k], v.de + ' = ' + v.pt + (ok && gender(v.de) && g !== v.de && g.toLowerCase() === v.de.toLowerCase() ? ' · Lembre: substantivos levam inicial maiúscula.' : ''), v.de, whyVocab(g, v, les)));
    } else {
      const c = pick(les.cz);
      typed(el, `<p class="q">Complete a lacuna:<b>${esc(c.q)}</b></p><p class="hint">${esc(les.gt)}</p>`, (g) => czOk(c, g), (ok, g) => done(ok, [], fill(c) + (ok ? czAlt(c, g) : ''), fill(c), whyCloze(les, c, g)));
    }
  },
  // Lógico-matemática: aplicar a regra ou reconstruir a estrutura da frase.
  log(les, el, done) {
    const sents = [...les.ge, ...les.ex, ...les.dlg].filter((s) => { const n = s.de.split(' ').length; return n >= 3 && n <= 9; });
    const r = Math.random();
    if (les.bd && r < 0.34) {
      // Função da palavra: usa a frase desmontada da lição.
      const t = les.bd.t, idx = t.map((_, i) => i).filter((i) => t.filter((y) => y.w === t[i].w).length === 1);
      const i = pick(idx), tk = t[i], right = roleName(tk.c);
      const pool = [...new Set([...t.map((x) => x.c), 'S', 'V', 'OA', 'OD', 'PR', 'INF', 'PT', 'PX', 'C', 'NEG'].map(roleName))].filter((n) => n !== right);
      const sent = t.map((x, j) => (j === i ? `<mark>${esc(x.w)}</mark>` : esc(x.w))).join(' ');
      mcq(el, `<p class="q">Qual é a função da palavra destacada?<b class="bdq">${sent}</b></p><p class="hint">${esc(les.bd.pt)}</p>`, shuffle([right, ...sample(pool, 2)]), right,
        (ok, g) => done(ok, [], `«${tk.w}» = ${right}`, t.map((x) => x.w).join(' '),
          `<p>Você marcou ${q(g)}, mas «${esc(tk.w)}» é <b>${esc(right)}</b>: ${esc(RHELP[tk.c] || '')}.${tk.n ? ' Nesta frase: ' + esc(tk.n) + '.' : ''}</p>${breakdownHTML(les.bd, true)}`), 'col');
    } else if (sents.length && r < 0.67) { const s = pick(sents); order(el, s, (ok, g) => done(ok, [], s.de + ' = ' + s.pt + (ok && g !== s.de ? ` · A sua ordem («${g}») também está certa.` : ''), s.de, whyOrder(les, s, g))); }
    else { const c = pick(les.cz); mcq(el, `<p class="q">Qual forma segue a regra?<b>${esc(c.q)}</b></p><p class="hint">${esc(les.gt)}</p>`, shuffle([c.a, ...c.w]), (o) => czOk(c, o), (ok, g) => done(ok, [], fill(c) + (ok ? czAlt(c, g) : ''), fill(c), whyCloze(les, c, g))); }
  },
  // Espacial: memória visual de pares, com as cores de gênero.
  esp(les, el, done) {
    const vs = sample(les.v, 5);
    const tiles = shuffle(vs.flatMap((v) => [{ k: v.k, s: 'de', t: v.de }, { k: v.k, s: 'pt', t: (v.em ? v.em + ' ' : '') + v.pt }]));
    let sel = null, miss = 0, left = vs.length; const bad = new Set();
    el.innerHTML = `<p class="q">Encontre os pares</p><p class="hint">Cores: <span class="g-m">der</span> · <span class="g-f">die</span> · <span class="g-n">das</span></p><div class="grid">${tiles.map((t, i) => `<button data-i="${i}" class="tile ${t.s === 'de' ? gcls(t.t) : ''}">${esc(t.t)}</button>`).join('')}</div>`;
    $$('.tile', el).forEach((b) => (b.onclick = () => {
      if (!sel) { sel = b; b.classList.add('sel'); return; }
      if (sel === b) { b.classList.remove('sel'); sel = null; return; }
      const a = sel, o = tiles[a.dataset.i], t = tiles[b.dataset.i]; sel = null;
      if (o.k === t.k && o.s !== t.s) {
        [a, b].forEach((x) => { x.classList.remove('sel'); x.classList.add('ok'); x.disabled = true; });
        if (!--left) done(miss <= 1, vs.map((v) => v.k), miss ? miss + ' tentativa(s) errada(s)' : 'Todos os pares de primeira!', '', whyPairs(bad));
      } else { miss++; bad.add(o.k); bad.add(t.k); [a, b].forEach((x) => x.classList.add('no')); setTimeout(() => [a, b].forEach((x) => x.classList.remove('no', 'sel')), 400); }
    }));
  },
  // Musical: reconhecer pelo som.
  mus(les, el, done) {
    const sents = [...les.ge, ...les.ex, ...les.dlg].filter((s) => { const n = s.de.split(' ').length; return n >= 3 && n <= 9; });
    if (FALA_SR && falaOn() && sess && !sess.noFala && sents.length && (sess.forceFala || Math.random() < 0.35)) {
      // Fale a frase: até 3 tentativas; passa com 80% da frase entendida
      const s = pick(sents);
      el.innerHTML = `<p class="q">🎤 Fale a frase em voz alta<b>${esc(falaAlvo(s.de))}</b></p><p class="hint">${esc(s.pt)} · ouça o modelo antes, se quiser</p>${falaPanel(s.de, s.pt, 'exercicio')}`;
      const fl = $('.fala', el); let tries = 0, best = 0;
      fl.addEventListener('fala', (e) => {
        tries++; best = Math.max(best, e.detail.score);
        if (e.detail.score >= 0.8) return done(true, [], s.de + ' = ' + s.pt, s.de, '', true);
        if (tries >= 3) done(false, [], s.de + ' = ' + s.pt, s.de, `<p>Em 3 tentativas, o melhor foi ${Math.round(best * 100)}% da frase. Ouça o modelo devagar (🐢), repita em voz baixa duas vezes e tente de novo no fim da sessão. As palavras em laranja e vermelho acima mostram onde o som se perdeu.</p>`, true);
        else fl.querySelector('.fl-live').insertAdjacentHTML('beforeend', ` Tentativa ${tries} de 3.`);
      });
      fl.addEventListener('falaskip', () => { sess.noFala = true; GEN.mus(les, el, done); }); // sem microfone agora: troca por "ouça e escolha"
      return;
    }
    const pool = Math.random() < 0.4 ? les.dlg : sample(les.v, 4), tgt = pick(pool);
    mcq(el, `<p class="q">Ouça e escolha o que foi dito</p><div class="row"><button class="play" id="play" aria-label="Ouvir">🔊</button><button id="slow">🐢 Devagar</button></div>`,
      shuffle(pool.map((p) => p.de)), tgt.de, (ok, g) => done(ok, tgt.k ? [tgt.k] : [], tgt.de + ' = ' + tgt.pt, tgt.de, whyHear(pool, tgt, g)), pool === les.dlg ? 'col' : '');
    $('#play', el).onclick = () => say(tgt.de); $('#slow', el).onclick = () => say(tgt.de, 0.6);
    setTimeout(() => { if (el.isConnected) say(tgt.de); }, 350);
  },
  // Corporal-cinestésica: resposta rápida contra o relógio.
  cor(les, el, done) {
    const vs = sample(les.v, 6), missed = []; let i = 0, hit = 0, tm;
    const step = () => {
      if (!el.isConnected) return;
      if (i >= vs.length) { el.innerHTML = `<div class="word">${hit}/6</div>`; return done(hit >= 5, vs.map((v) => v.k), hit + ' de 6 no tempo' + (hit >= 5 ? '' : ' (precisa de 5)'), '', whySpeed(missed)); }
      const v = vs[i], opts = shuffle([v.pt, ...sample(les.v.filter((x) => x !== v), 2).map((x) => x.pt)]);
      el.innerHTML = `<p class="q">⚡ Rodada relâmpago ${i + 1}/6 — 5 segundos por palavra</p><div class="timer"><i></i></div><div class="word ${gcls(v.de)}">${esc(v.de)}</div><div class="opts col">${opts.map((o, j) => `<button data-j="${j}">${esc(o)}</button>`).join('')}</div>`;
      const bs = $$('.opts button', el);
      const end = (ok, b) => { clearTimeout(tm); bs.forEach((x) => { x.disabled = true; if (opts[x.dataset.j] === v.pt) x.classList.add('ok'); }); if (b && !ok) b.classList.add('no'); if (ok) hit++; else missed.push([v, b ? 'opcao' : 'tempo']); i++; setTimeout(step, 550); };
      tm = setTimeout(() => end(false), 5000);
      bs.forEach((b) => (b.onclick = () => end(opts[b.dataset.j] === v.pt, b)));
    };
    step();
  },
  // Interpessoal: reagir dentro de uma conversa.
  int(les, el, done) {
    const p = rnd(2) * 2, a = les.dlg[p], b = les.dlg[p + 1];
    // Respostas erradas vêm desta lição ou de lições anteriores: só palavras que a pessoa já viu.
    const pool = [...les.dlg.filter((x, j) => j % 2 === 1 && x !== b), ...les.ge, ...les.ex,
      ...LESSONS.filter((l) => l.i < les.i && les.i - l.i < 12).map((l) => l.dlg[1 + rnd(2) * 2])].filter((x) => x.de !== b.de);
    const ds = sample([...new Map(pool.map((x) => [x.de, x])).values()], 2);
    mcq(el, `<p class="q">Qual é a melhor resposta nesta conversa?</p><div class="bubble">${spk(a.de)}<span class="de">${esc(a.de)}</span><small>${esc(a.pt)}</small></div>`,
      shuffle([b.de, ...ds.map((d) => d.de)]), b.de, (ok, g) => done(ok, [], b.de + ' = ' + b.pt, b.de, whyReply(a, b, ds, g)), 'col');
    setTimeout(() => { if (el.isConnected) say(a.de); }, 350);
  },
  // Intrapessoal: ligar a língua à própria vida. Não há gabarito: o app confere a ESTRUTURA da lição (frase.js), com qualquer
  // verbo, e a concordância do verbo com o sujeito no presente. A palavra da lição é só uma sugestão (vale um bônus nas cartas).
  intra(les, el, done) {
    const v = pick(les.v), rule = ruleOfLesson(les), m = modelOf(les);
    el.innerHTML = `<p class="q">✍️ Escreva uma frase verdadeira sobre você</p>
      <div class="ownreq">
        <p><b>Precisa ter:</b> ${rule ? rule.d : 'uma frase completa em alemão (pelo menos 3 palavras) sobre a sua vida. Qualquer verbo serve.'}</p>
        <p><b>Molde</b> <small class="mut">(não precisa copiar; troque pelas suas palavras)</small><br>${spk(m.de)}<span class="de">${esc(m.de)}</span> <small>${esc(m.pt)}</small></p>
        <p class="mut"><b>Palavra sugerida</b> (opcional): <span class="${gcls(v.de)}">${esc(v.de)}</span> · ${esc(v.pt)}</p>
      </div>
      <textarea id="ta" rows="3" spellcheck="false" placeholder="Escreva em alemão"></textarea>${UML}<button class="pri" id="chk">Conferir</button><div id="self"></div>`;
    const ta = $('#ta', el); ta.focus(); wireUml(el, ta);
    let tries = 0;
    $('#chk', el).onclick = () => {
      const text = ta.value.trim(), box = $('#self', el);
      if (text.split(/\s+/).length < 3) { box.innerHTML = '<p class="warn">Escreva uma frase completa, com pelo menos 3 palavras.</p>'; return; }
      const r = checkFrase(text, les, v), fails = [];
      if (r.pt) fails.push('Parece que a frase está em português. Escreva em alemão.');
      if (r.struct === false) fails.push(r.msg);
      if (r.conc && !r.conc.ok) fails.push(r.conc.msg);
      if (fails.length && tries++ < 2) { // duas chances de ajustar antes de fechar
        box.innerHTML = `<p class="warn">Quase! Ajuste e confira de novo:</p><ul class="ownchk">${fails.map((f) => `<li class="no">✗ ${f}</li>`).join('')}</ul>`;
        ta.focus(); return;
      }
      ta.disabled = true; $('#chk', el).disabled = true;
      const ok = !fails.length;
      const items = [
        rule ? (r.struct ? '<li class="ok">✓ segue a estrutura pedida</li>' : `<li class="no">✗ ${r.msg}</li>`) : (r.pt ? '' : '<li class="ok">✓ frase em alemão</li>'),
        r.conc ? (r.conc.ok ? '<li class="ok">✓ o verbo combina com o sujeito</li>' : `<li class="no">✗ ${r.conc.msg}</li>`) : '',
        r.pt ? '<li class="no">✗ a frase parece estar em português</li>' : '',
        r.word ? `<li class="ok">★ usou a palavra sugerida (${esc(v.de)})</li>` : '',
      ].join('');
      box.innerHTML = `<ul class="ownchk">${items}</ul>`;
      S.diary.push({ d: today(), t: text, l: les.i });
      done(ok, r.word ? [v.k] : [], ok ? 'Sua frase foi para o diário.' : 'Molde: ' + m.de + ' = ' + m.pt, m.de,
        `<p>O que faltou:</p><ul>${fails.map((f) => `<li>${f}</li>`).join('')}</ul><p>Use o molde e troque só as palavras pelo seu caso: <b>${esc(m.de)}</b> (${esc(m.pt)}).</p>${ruleOf(les)}`);
    };
  },
  // Naturalista: classificar por gênero ou achar o intruso do tema.
  nat(les, el, done) {
    const nouns = les.v.filter((v) => gender(v.de) && !/^die (Eltern|Leute|Schmerzen|Nachrichten|Nebenkosten|Kenntnisse|Zähne|Geschwister)/.test(v.de));
    const far = LESSONS.filter((l) => l.i <= les.i - 3); // o intruso vem de uma lição já estudada
    if (nouns.length && (Math.random() < 0.5 || !far.length)) {
      const v = pick(nouns), art = v.de.split(' ')[0];
      mcq(el, `<p class="q">Em qual família esta palavra entra?<b>${v.em} ${esc(v.de.replace(/^\w+ /, ''))}</b></p><p class="hint">${esc(v.pt)}</p>`, ['der', 'die', 'das'], art, (ok, g) => done(ok, [v.k], v.de + ' = ' + v.pt, v.de, `<p>Você escolheu <i>${esc(g)}</i>, mas é <b class="${gcls(v.de)}">${esc(v.de)}</b>. O gênero em alemão não acompanha o do português (${esc(v.pt)}).${genderHint(v.de)}</p>`));
    } else {
      const from = pick(far), odd = pick(from.v), vs = sample(les.v, 3);
      mcq(el, `<p class="q">Qual palavra <u>não</u> pertence ao grupo?<b>${esc(les.pt)}</b></p>`, shuffle([...vs.map((v) => v.de), odd.de]), odd.de,
        (ok, g) => { const c = vs.find((v) => v.de === g) || odd; done(ok, vs.map((v) => v.k), [...vs, odd].map((v) => v.de + ' = ' + v.pt).join(' · '), '',
          `<p>Você marcou ${q(c.de)}, que significa ${q(c.pt)} e faz parte do vocabulário desta lição (${esc(les.pt)}).</p><p>O intruso era <b>${esc(odd.de)}</b> (${esc(odd.pt)}), que vem de outra lição: ${q(from.pt)}.</p>`); });
    }
  },
};

/* ---------- cartas de memorização (repetição espaçada) ---------- */
function cards() {
  let queue = shuffle(dueKeys()).slice(0, 30), n = 0;
  const top = ranking()[0].k;
  const show = () => {
    if (!queue.length) {
      if (n) sfx('conclusao'); if (n >= 5) markActive(); checkBadges(); checkDaily(); save();
      const next = Object.values(S.cards).map((c) => c.due).sort((a, b) => a - b)[0];
      app.innerHTML = `<h1>🃏 Cartas</h1><div class="card"><h3>${n ? 'Revisão concluída: ' + n + ' cartas' : 'Nada para revisar agora'}</h3>
      <p class="mut">${nWords() ? nWords() + ' palavras no baralho. ' + (dueKeys().length ? 'Ainda há ' + dueKeys().length + ' pendentes.' : next ? 'Próxima revisão: ' + new Date(next).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'short' }) + '.' : '') : 'As palavras entram aqui um dia depois de cada lição.'}</p>
      <p class="mut">Cada carta volta num intervalo maior quando você lembra e mais cedo quando esquece. O acerto aqui, dias depois, é o que alimenta a medida de retenção do seu perfil.</p></div>
      ${dueKeys().length ? '<button class="pri big" id="more">Continuar revisando</button>' : ''}<button class="big" id="bk" style="margin-top:8px">Voltar ao início</button>`;
      if ($('#more')) $('#more').onclick = () => go('cards');
      $('#bk').onclick = () => go('home');
      return;
    }
    const k = queue[0], v = vocab(k), c = S.cards[k];
    const audioFirst = top === 'mus' && hasTTS && S.audio, rev = !audioFirst && Math.random() < 0.3;
    const front = audioFirst ? `<button class="play" data-say="${esc(v.de)}">🔊</button><p class="mut">Ouça e lembre o significado</p>`
      : rev ? `<div class="word ${gcls(v.de)}">${esc(v.de)}</div><p class="mut">O que significa?</p>`
        : `<div class="word">${v.em} ${esc(v.pt)}</div><p class="mut">Como se diz em alemão?</p>`;
    app.innerHTML = `<div class="row"><h1 class="grow">🃏 Cartas</h1><small>${queue.length} restantes</small></div>
    <div class="card" style="text-align:center;min-height:220px">${front}<div id="back"></div></div><button class="pri big" id="flip">Mostrar resposta</button>`;
    if (audioFirst) setTimeout(() => say(sayText(v.de)), 300);
    $('#flip').onclick = () => {
      $('#back').innerHTML = `<hr><div class="word ${gcls(v.de)}">${esc(v.de)} ${spk(v.de)}</div><p>${v.em} ${esc(v.pt)}</p>`;
      say(sayText(v.de));
      $('#flip').outerHTML = `<div class="opts"><button data-q="0" class="no">Errei</button><button data-q="1">Difícil</button><button data-q="2" class="ok">Lembrei</button><button data-q="3">Fácil</button></div>`;
      $$('[data-q]').forEach((b) => (b.onclick = () => { rate(k, c, +b.dataset.q); queue.shift(); if (+b.dataset.q === 0) queue.push(k); else n++; save(); show(); }));
    };
  };
  show();
}
function rate(k, c, q) {
  const ok = q > 0;
  if (c.reps === 0 || c.int >= 1) { // só conta como retenção o que ficou pelo menos um dia sem ser visto
    const tot = Object.values(c.mods).reduce((a, b) => a + b, 0);
    Object.entries(c.mods).forEach(([i, m]) => { const w = m / tot; S.stats[i].rn += w; if (ok) S.stats[i].rok += w; });
  }
  if (!ok) { c.int = 0; c.ease = Math.max(1.3, c.ease - 0.2); c.lapses++; c.due = Date.now() + 10 * 60e3; }
  else {
    c.int = c.int < 1 ? (q === 3 ? 4 : q === 2 ? 2 : 1) : c.int * (q === 1 ? 1.2 : q === 2 ? c.ease : c.ease * 1.3);
    if (q === 1) c.ease = Math.max(1.3, c.ease - 0.15); if (q === 3) c.ease += 0.1;
    const t = new Date(); t.setHours(0, 0, 0, 0); c.due = t.getTime() + Math.round(c.int) * 864e5;
  }
  c.reps++; S.reviews++; daily().cards++; addXP(ok ? 5 : 2);
  if (typeof logAtt === 'function') logAtt(['voc'], ok);
}

/* ---------- perfil ---------- */
function radar() {
  const C = 130, R = 92, n = IK.length, pt = (i, r) => { const a = (Math.PI * 2 * i) / n - Math.PI / 2; return [C + Math.cos(a) * r, C + Math.sin(a) * r]; };
  const ring = (f) => IK.map((_, i) => pt(i, R * f).join(',')).join(' ');
  return `<svg viewBox="0 0 260 260" style="width:100%;max-width:340px;display:block;margin:auto" role="img" aria-label="Radar do perfil de inteligências">
  ${[0.25, 0.5, 0.75, 1].map((f) => `<polygon points="${ring(f)}" fill="none" stroke="var(--line)"/>`).join('')}
  <polygon points="${IK.map((k, i) => pt(i, R * score(k)).join(',')).join(' ')}" fill="var(--gold)" fill-opacity=".35" stroke="var(--gold)" stroke-width="2"/>
  ${IK.map((k, i) => { const [x, y] = pt(i, R + 20); return `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" font-size="18">${INT[k].e}</text>`; }).join('')}</svg>`;
}
function perfil() {
  const rk = ranking(), tot = Object.values(S.time).reduce((a, b) => a + b, 0);
  const pc = (a, b) => (b >= 1 ? Math.round((a / b) * 100) + '%' : '–');
  app.innerHTML = `<h1>🧠 Seu perfil</h1>
  <div class="card">${radar()}
  ${rk.map(({ k, s }) => { const st = S.stats[k]; return `<div class="prow"><span>${INT[k].e} ${INT[k].n}</span><div class="bar"><i style="width:${Math.round(s * 100)}%"></i></div><small>${pc(st.ok, st.n)} · ${pc(st.rok, st.rn)}</small></div>`; }).join('')}
  <small>À direita: acerto nos exercícios · retenção nas cartas dias depois. A barra combina os dois (retenção pesa 60%) e define quantos exercícios de cada tipo entram nas próximas lições.</small></div>
  <div class="card"><h3>Como ler isto</h3><p class="mut">As oito inteligências de Gardner organizam aqui oito formatos de exercício. A pesquisa não confirma que ensinar só no "estilo" de alguém melhora o aprendizado, então a plataforma não confia no rótulo: ela mede o que de fato funciona com você e continua testando todos os formatos. Com poucos dados, o gráfico ainda reflete a sua autoavaliação inicial.</p></div>
  <div class="stats"><div class="stat"><b>${nDone()}/${TOTAL}</b><small>dias</small></div><div class="stat"><b>${nWords()}</b><small>palavras</small></div><div class="stat"><b>${Math.round(tot / 360) / 10} h</b><small>estudadas</small></div><div class="stat"><b>🔥 ${S.best}</b><small>recorde</small></div></div>
  ${(() => { // conquistas recolhíveis: fechado mostra só a contagem e os ícones das conquistas já ganhas
    const won = BADGES.filter(([id]) => S.badges[id]);
    let open = false; try { open = localStorage.getItem('deutschTrilha.badgesOpen') === '1'; } catch (e) { /* fechado */ }
    return `<details class="card bdbox" id="bdBox" ${open ? 'open' : ''}><summary><b>🏅 Conquistas</b> <span class="mut">${won.length} de ${BADGES.length}</span><span class="bdmini">${won.slice(-6).map(([, e]) => e).join(' ')}</span></summary>
    <div class="badges">${[...won, ...BADGES.filter(([id]) => !S.badges[id])].map(([id, e, n, d]) => `<div class="badge ${S.badges[id] ? '' : 'off'}" title="${d}"><b>${e}</b>${n}<br><small>${d}</small></div>`).join('')}</div></details>`;
  })()}
  <h2>📔 Diário</h2>
  <div class="card">${S.diary.length ? S.diary.slice(-8).reverse().map((x) => `<p>${spk(x.t)}<span class="de">${esc(x.t)}</span><br><small>${x.d} · ${esc(x.x ? '🎬 ' + x.x : LESSONS[x.l].de)}</small></p>`).join('') : '<p class="mut">Suas frases dos exercícios intrapessoais aparecem aqui.</p>'}</div>
  ${lookCard()}
  ${cloudCard()}
  ${offlineCard()}
  ${appCard(false)}
  <div class="card"><h3>🎯 Teste de nivelamento</h3><p class="mut">Já sabia alemão antes da trilha? O teste indica o seu nível e pula os dias que você já domina.</p><button id="toP">Fazer o teste</button></div>
  <h2>Ajustes</h2>
  <div class="card"><label>Meta diária (min)<select id="goal">${[30, 60, 90, 120, 180].map((g) => `<option ${g === S.goal ? 'selected' : ''}>${g}</option>`).join('')}</select></label>
  <label class="row"><input type="checkbox" id="aud" ${S.audio ? 'checked' : ''}> Áudio em alemão (voz do navegador)</label>
  <label class="row"><input type="checkbox" id="sfxT" ${S.sfx !== false ? 'checked' : ''}> Sons de conclusão (lição, tarefa e conquista)</label>
  <label class="row"><input type="checkbox" id="falaT" ${S.fala !== false ? 'checked' : ''}> Exercícios de fala com microfone (desligue se estiver em lugar público)</label>
  <label class="row"><input type="checkbox" id="supc" ${supOn() ? 'checked' : ''}> Incluir as palavras de apoio (🆕) nas cartas de revisão</label>
  ${AUD ? `<p class="mut">🎙️ ${AUD.size.toLocaleString('pt-BR')} áudios gravados com voz natural (ElevenLabs). O que ainda não foi gravado usa a voz do navegador.</p>` : ''}
  ${hasTTS && deVoice ? `<p class="mut">Voz do navegador: ${esc(deVoice.name)} ${spk('Guten Tag! Ich bin deine deutsche Stimme.')}</p>` : ''}
  ${hasTTS && !deVoice ? '<p class="mut">⚠️ Não encontrei uma voz alemã neste navegador; a pronúncia sai errada. Abra a plataforma no Chrome ou no Edge, que trazem voz alemã própria, ou instale a voz em Configurações do Windows → Hora e idioma → Fala → Adicionar vozes → Alemão.</p>' : ''}
  <div class="row" style="margin-top:10px"><button id="exp">⬇️ Exportar backup</button><button id="imp">⬆️ Importar backup</button><input type="file" id="file" accept=".json" hidden></div>
  <p class="mut">O progresso fica só neste navegador. Use o backup para levar a outro dispositivo.</p>
  <button class="link" id="reset">Apagar todo o progresso</button></div>`;
  wireAppCard(); wireCloud(); wireOffline(); wireLook();
  $('#bdBox').addEventListener('toggle', (e) => { try { localStorage.setItem('deutschTrilha.badgesOpen', e.target.open ? '1' : '0'); } catch (err) { /* só lembra o estado */ } });
  $('#toP').onclick = () => go('nivel');
  $('#goal').onchange = (e) => { S.goal = +e.target.value; save(); };
  $('#aud').onchange = (e) => { S.audio = e.target.checked; save(); };
  $('#sfxT').onchange = (e) => { S.sfx = e.target.checked; save(); if (S.sfx) sfx('tarefa'); };
  $('#falaT').onchange = (e) => { S.fala = e.target.checked; save(); };
  $('#supc').onchange = (e) => { S.supCards = e.target.checked; if (S.supCards) backfillSup(); save(); toast(S.supCards ? '🃏 Palavras de apoio incluídas nas cartas' : 'Palavras de apoio fora das cartas'); };
  $('#exp').onclick = () => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(S)], { type: 'application/json' })); a.download = 'deutsch-trilha-' + today() + '.json'; a.click(); };
  $('#imp').onclick = () => $('#file').click();
  $('#file').onchange = async (e) => {
    try { const d = JSON.parse(await e.target.files[0].text()); if (!d.stats || !d.cards) throw new Error('arquivo não é um backup da Deutsch-Trilha'); S = Object.assign(fresh(), d); save(); toast('Backup importado'); go('home'); }
    catch (err) { console.error('Erro ao importar backup:', err); toast('⚠️ Não consegui importar: ' + err.message); }
  };
  $('#reset').onclick = () => { if (confirm('Apagar todo o progresso deste dispositivo? Isso não pode ser desfeito.')) { localStorage.removeItem(KEY); S = fresh(); go('onboard'); } };
}

/* ---------- aparência (tema claro ou escuro) ---------- */
// Preferência deste aparelho: 'dark' (padrão), 'light' ou 'auto' (segue o sistema). O index.html aplica antes de desenhar a tela.
const THEME_KEY = 'deutschTrilha.theme';
const themePref = () => { try { return localStorage.getItem(THEME_KEY) || 'light'; } catch (e) { return 'light'; } }; // MODO: claro por padrão
const mqLight = window.matchMedia ? matchMedia('(prefers-color-scheme: light)') : null;
function applyTheme(pref = themePref()) {
  const t = pref === 'auto' ? (mqLight && mqLight.matches ? 'light' : 'dark') : pref;
  document.documentElement.dataset.theme = t;
  const m = document.querySelector('meta[name="theme-color"]'); if (m) m.content = t === 'light' ? '#f4f6fb' : '#0e1525';
  // "only light" impede que navegadores com modo escuro forçado (ex.: Samsung Internet) invertam as cores do tema claro
  const cs = document.querySelector('meta[name="color-scheme"]'); if (cs) cs.content = t === 'light' ? 'only light' : 'dark';
}
if (mqLight && mqLight.addEventListener) mqLight.addEventListener('change', () => { if (themePref() === 'auto') applyTheme(); });
applyTheme();
function setTheme(p) { try { localStorage.setItem(THEME_KEY, p); } catch (e) { /* vale só até fechar */ } applyTheme(p); }

/* ---------- versão do app ---------- */
const APP_CACHE = 'deutsch-trilha-v1';
async function appVersionText() {
  try {
    const r = ('caches' in window && await caches.match('index.html', { ignoreSearch: true })) || await fetch('index.html', { method: 'HEAD' });
    const lm = r && r.headers.get('last-modified');
    return lm ? 'Versão publicada em ' + new Date(lm).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + '.' : '';
  } catch (e) { return ''; }
}
// Baixa de novo os arquivos do app, compara com o que está guardado e recarrega se algo mudou.
async function updateApp() {
  const btn = $('#updBtn'), msg = (t) => { const m = $('#updMsg'); if (m) m.textContent = t; };
  if (btn) btn.disabled = true;
  msg('Procurando a versão mais recente…');
  try {
    if (!('caches' in window) || !('serviceWorker' in navigator)) { location.reload(); return; }
    const reg = await navigator.serviceWorker.getRegistration();
    if (reg) {
      await reg.update().catch(() => {});
      if (reg.installing || reg.waiting) await new Promise((ok) => { navigator.serviceWorker.addEventListener('controllerchange', ok, { once: true }); setTimeout(ok, 6000); });
    }
    const html = await (await fetch('index.html', { cache: 'no-store' })).text();
    const files = [...new Set(['index.html', 'manifest.webmanifest', ...[...html.matchAll(/(?:src|href)="([^"#:]+)"/g)].map((m) => m[1]), 'audio/index.json', 'audio/levels.json', 'images/pocket/index.json'])];
    const c = await caches.open(APP_CACHE);
    let changed = 0;
    await Promise.all(files.map(async (f) => {
      const old = await c.match(f, { ignoreSearch: true }), ot = old ? await old.text() : null;
      const res = await fetch(f, { cache: 'no-store' }); if (!res.ok) return;
      const nt = await res.clone().text();
      if (nt !== ot) { changed++; await c.put(f, res); if (f === 'index.html') await c.put('./', new Response(nt, { headers: res.headers })); }
    }));
    if (changed) { msg(`✓ ${changed} arquivo${changed > 1 ? 's' : ''} atualizado${changed > 1 ? 's' : ''}. Reiniciando o app…`); setTimeout(() => location.reload(), 900); }
    else { msg('✓ Você já está na versão mais recente.'); if (btn) btn.disabled = false; }
  } catch (e) {
    console.error('Erro ao atualizar o app:', e);
    msg('⚠️ Não consegui verificar agora. Confira a internet e tente de novo.'); if (btn) btn.disabled = false;
  }
}
function lookCard() {
  const p = themePref();
  return `<div class="card" id="lookCard"><h3>🎨 Aparência</h3>
  <div class="chips seg">${[['dark', '🌙 Escuro'], ['light', '☀️ Claro'], ['auto', '🖥️ Automático']].map(([id, n]) => `<button class="chipb ${id === p ? 'on' : ''}" data-theme-set="${id}">${n}</button>`).join('')}</div>
  <p class="mut">O tema vale para este aparelho. "Automático" segue o modo claro ou escuro do celular ou do computador.</p></div>
  <div class="card" id="updCard"><h3>🔄 Versão do app</h3><p class="mut" id="updInfo"></p>
  <button id="updBtn">Atualizar para a versão mais recente</button><p class="mut" id="updMsg"></p></div>`;
}
function wireLook() {
  $$('[data-theme-set]').forEach((b) => (b.onclick = () => { setTheme(b.dataset.themeSet); $$('[data-theme-set]').forEach((x) => x.classList.toggle('on', x === b)); }));
  if ($('#updBtn')) $('#updBtn').onclick = updateApp;
  appVersionText().then((t) => { const el = $('#updInfo'); if (el) el.textContent = t || 'Toque para buscar a versão mais recente do app.'; });
}

/* ---------- áudios para usar sem internet ---------- */
// audio/levels.json traz, para cada nível (e para as lições Pocket), a lista de áudios e o tamanho do pacote.
// Os arquivos vão para o cache "deutsch-trilha-audio", o mesmo que o service worker consulta antes da internet.
const AUDIO_CACHE = 'deutsch-trilha-audio';
let packs = null, dl = null; // dl = download em andamento { id, done, total, stop }
const offOK = () => 'caches' in window && !!AUD;
async function loadPacks() {
  if (!packs) { const r = await fetch('audio/levels.json'); if (!r.ok) throw new Error('lista de áudios indisponível (' + r.status + ')'); packs = await r.json(); }
  return packs;
}
const audioUrl = (h) => `audio/${h.slice(0, 2)}/${h}.mp3`;
async function savedSet() {
  const c = await caches.open(AUDIO_CACHE);
  return new Set((await c.keys()).map((r) => r.url.split('/').pop().replace('.mp3', '')));
}
const PACK_NAME = { Pocket: '🧳 Pocket' };
function offlineCard() {
  if (!offOK()) return '';
  return `<div class="card" id="offCard"><h3>📥 Áudios sem internet</h3>
  <p class="mut">Baixe os áudios de um nível para estudar no metrô, no avião ou sem dados móveis. O que você já ouviu fica guardado sozinho.</p>
  <div id="offList"><p class="mut">Verificando o que já está salvo…</p></div></div>`;
}
async function renderOffline() {
  const box = document.getElementById('offList'); if (!box) return;
  try {
    const [p, have] = await Promise.all([loadPacks(), savedSet()]);
    const ids = Object.keys(p).sort((a, b) => (a === 'Pocket') - (b === 'Pocket') || a.localeCompare(b));
    const row = (id) => {
      const g = p[id], n = g.h.filter((h) => have.has(h)).length, full = n >= g.n, run = dl && dl.id === id;
      const label = run ? `⏳ ${Math.round((dl.done / dl.total) * 100)}% · Parar` : full ? '✓ Salvo' : n ? `Completar (${Math.round((1 - n / g.n) * g.mb)} MB)` : `Baixar ${g.mb} MB`;
      return `<div class="offrow"><span><b>${PACK_NAME[id] || id}</b><small>${n.toLocaleString('pt-BR')} de ${g.n.toLocaleString('pt-BR')} áudios</small></span>
        <div class="bar"><i style="width:${Math.round((run ? (n + dl.done) / g.n : n / g.n) * 100)}%"></i></div>
        <button data-off="${id}" ${full && !run ? 'disabled' : ''} class="${run ? 'ghost' : ''}">${label}</button></div>`;
    };
    const totalMb = Math.round(ids.reduce((s, id) => s + p[id].mb, 0));
    let est = '';
    if (navigator.storage && navigator.storage.estimate) { const e = await navigator.storage.estimate(); est = `Espaço usado pelo app: ${Math.round((e.usage || 0) / 1e6)} MB.`; }
    box.innerHTML = ids.map(row).join('') + `<div class="row" style="margin-top:10px">
      <button id="offAll" ${dl ? 'disabled' : ''}>Baixar tudo (${totalMb} MB)</button>
      <button class="ghost" id="offDel" ${dl || !have.size ? 'disabled' : ''}>Apagar áudios salvos</button></div>
      <p class="mut">${est} Use Wi-Fi para os pacotes grandes.</p>`;
    $$('[data-off]', box).forEach((b) => (b.onclick = () => (dl && dl.id === b.dataset.off ? (dl.stop = true) : downloadPack([b.dataset.off]))));
    $('#offAll').onclick = () => downloadPack(ids);
    $('#offDel').onclick = async () => {
      if (!confirm('Apagar os áudios salvos neste aparelho? Eles voltam a ser baixados quando você tocar neles.')) return;
      await caches.delete(AUDIO_CACHE); toast('Áudios salvos apagados'); renderOffline();
    };
  } catch (e) { console.error('Erro ao listar os áudios offline:', e); box.innerHTML = `<p class="mut">⚠️ Não consegui ver os pacotes de áudio: ${esc(e.message)}. Confira a internet e abra o Perfil de novo.</p>`; }
}
async function downloadPack(ids) {
  if (dl) return;
  dl = { id: ids[0], done: 0, total: 1, stop: false, fail: 0 }; // marca já no clique: evita dois downloads ao mesmo tempo
  try {
    const p = await loadPacks(), have = await savedSet(), c = await caches.open(AUDIO_CACHE);
    if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {}); // pede para o navegador não apagar o cache
    for (const id of ids) {
      const todo = p[id].h.filter((h) => !have.has(h));
      if (!todo.length) continue;
      dl = { id, done: 0, total: todo.length, stop: false, fail: 0 };
      renderOffline();
      let i = 0, last = 0;
      const worker = async () => {
        while (!dl.stop && i < todo.length) {
          const h = todo[i++];
          try { const r = await fetch(audioUrl(h), { cache: 'no-store' }); if (!r.ok) throw new Error('HTTP ' + r.status); await c.put(audioUrl(h), r); }
          catch (e) { dl.fail++; if (dl.fail > 20) { dl.stop = true; throw new Error('muitas falhas seguidas (' + e.message + ')'); } }
          dl.done++;
          if (Date.now() - last > 700) { last = Date.now(); renderOffline(); }
        }
      };
      await Promise.all(Array.from({ length: 6 }, worker));
      const stopped = dl.stop, fail = dl.fail;
      if (stopped) { dl = null; toast('Download pausado. Toque de novo para continuar de onde parou.'); break; }
      toast(fail ? `📥 ${PACK_NAME[id] || id}: salvo, com ${fail} áudios a tentar de novo` : `📥 ${PACK_NAME[id] || id} salvo para usar sem internet`);
    }
  } catch (e) { console.error('Erro ao baixar os áudios:', e); toast('⚠️ Download interrompido: ' + e.message); }
  dl = null; renderOffline();
}
function wireOffline() { if (offOK()) renderOffline(); }

/* ---------- textos longos: leitura e escuta ---------- */
const textOpen = (t) => { const c = currentDay() || TOTAL + 1; return firstDayOf(t.w - 1) <= c || !!S.reads[t.id]; };
function textsList(list = TEXTS) {
  return `<div class="txlist">${list.map((t) => { const o = textOpen(t), r = S.reads[t.id];
    return `<button class="txi ${o ? '' : 'lock'}" ${o ? `data-tx="${t.id}"` : 'disabled'}><span class="tag">${t.lv}</span><span class="grow"><b>${t.kind === 'escuta' ? '🎧' : '📖'} ${esc(t.t)}</b><small>${o ? (r ? `✓ ${r.ok}/${r.n} acertos` : 'Semana ' + t.w) : '🔒 libera na semana ' + t.w}</small></span></button>`; }).join('')}</div>`;
}
let readTok = 0, RATE = 0.9;
function stopRead() { readTok++; stopClip(); if (hasTTS) speechSynthesis.cancel(); $$('.tpara.on').forEach((x) => x.classList.remove('on')); }
const splitWho = splitFala; // data/vozes.js (reconhece também "Dr. Wagner:")
function readFrom(paras, from) {
  if (!hasTTS && !AUD) return toast('Este navegador não tem voz para leitura.');
  stopRead(); const tok = ++readTok;
  const voices = hasTTS ? speechSynthesis.getVoices().filter((v) => /^de/i.test(v.lang)) : [], who = {};
  const voiceFor = (w) => { if (!w || voices.length < 2) return deVoice; if (!(w in who)) who[w] = voices[Object.keys(who).length % voices.length]; return who[w]; };
  // Cada personagem tem uma voz gravada fixa (a, b, c, d), na ordem em que aparece no texto, igual ao gerador de áudios.
  let i = from;
  const next = () => {
    if (tok !== readTok) return;
    $$('.tpara.on').forEach((x) => x.classList.remove('on'));
    if (i >= paras.length) return;
    const el = document.querySelector(`.tpara[data-i="${i}"]`); if (el) { el.classList.add('on'); el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
    const { who: w, txt } = splitWho(paras[i]), adv = () => { if (tok === readTok) { i++; next(); } };
    const tts = () => {
      if (!hasTTS || tok !== readTok) return adv();
      const u = new SpeechSynthesisUtterance(falavel(txt));
      u.lang = 'de-DE'; const v = voiceFor(w); if (v) u.voice = v; u.rate = RATE;
      u.onend = () => { i++; next(); }; u.onerror = adv;
      speechSynthesis.speak(u);
    };
    if (!playClip(txt, vozDe(txt), RATE / 0.9, adv, tts)) tts(); // gravação em velocidade normal = opção "calma"
  };
  next();
}
function texto(id) {
  const t = TEXTS.find((x) => x.id === id), r = S.reads[id], hide = t.kind === 'escuta' && !r;
  const gl = t.gl.split('|').map((x) => x.split('='));
  app.innerHTML = `<button class="ghost back" id="bk">← Voltar</button>
  <div class="lhead" style="--lc:${LVCOL[t.lv]}">${levelBadge(t.lv, 56)}<div><span class="eyebrow">${t.lv} · ${t.kind === 'escuta' ? 'Escuta' : 'Leitura'} · Semana ${t.w}</span><h1>${esc(t.t)}</h1><p class="mut">${esc(t.intro)}</p></div></div>
  <div class="card tplayer"><div class="row"><button class="pri" id="tPlay">▶ Ouvir tudo</button><button id="tStop">⏹ Parar</button>
  <label class="row tspeed">Velocidade <select id="tRate">${[[0.7, 'devagar'], [0.85, 'calma'], [1, 'normal']].map(([v, n]) => `<option value="${v}" ${v === RATE ? 'selected' : ''}>${n}</option>`).join('')}</select></label></div>
  ${t.kind === 'escuta' ? `<p class="mut">${hide ? '🎧 Primeiro só ouça, como na prova. O texto aparece depois que você responder, ou se tocar em "Mostrar o texto".' : 'Ouça de novo acompanhando o texto.'}</p>` : '<p class="mut">Leia uma vez inteira sem parar. Depois ouça acompanhando e responda.</p>'}</div>
  <div class="card ttext ${hide ? 'hid' : ''}" id="tText">${hide ? '<button class="big" id="tShow">👀 Mostrar o texto</button>' : ''}
  ${t.paras.map((p, i) => { const { who, txt } = splitWho(p); return `<div class="tpara" data-i="${i}">${spk(txt)}${who ? `<b class="twho">${esc(who)}:</b> ` : ''}<span class="de">${esc(txt).replace(/\n/g, '<br>')}</span>
    <a class="ttr" href="https://translate.google.com/?sl=de&tl=pt&text=${encodeURIComponent(txt)}&op=translate" target="_blank" rel="noopener noreferrer">traduzir ↗</a></div>`; }).join('')}</div>
  <div class="card"><h3>📎 Glossário</h3><table>${gl.map(([d, p]) => `<tr><td>${spk(d)}</td><td class="de ${gcls(d)}">${esc(d)}</td><td>${esc(p)}</td></tr>`).join('')}</table></div>
  <div class="card"><h3>✍️ Compreensão</h3>${r ? `<p class="mut">Você já fez: ${r.ok}/${r.n} acertos. Pode refazer para treinar.</p>` : ''}
  ${t.qs.map((q, i) => `<div class="tq" data-q="${i}"><p>${i + 1}. ${esc(q.q)}</p><div class="opts ${q.o ? 'col' : ''}">${(q.o || ['richtig', 'falsch']).map((o, j) => `<button data-a="${j}">${esc(o)}</button>`).join('')}</div></div>`).join('')}
  <button class="pri big" id="tCheck">Conferir respostas</button><div id="tRes"></div></div>`;
  const ans = {};
  $('#bk').onclick = () => go('extras', 'textos');
  $('#tPlay').onclick = () => readFrom(t.paras, 0);
  $('#tStop').onclick = stopRead;
  $('#tRate').onchange = (e) => { RATE = +e.target.value; };
  if ($('#tShow')) $('#tShow').onclick = () => { $('#tText').classList.remove('hid'); $('#tShow').remove(); };
  $$('.tpara').forEach((el) => (el.ondblclick = () => readFrom(t.paras, +el.dataset.i)));
  $$('.tq').forEach((qe) => $$('button', qe).forEach((b) => (b.onclick = () => { $$('button', qe).forEach((x) => x.classList.remove('sel')); b.classList.add('sel'); ans[qe.dataset.q] = +b.dataset.a; })));
  $('#tCheck').onclick = () => {
    if (Object.keys(ans).length < t.qs.length) return toast('Responda todas as perguntas antes de conferir.');
    let ok = 0;
    t.qs.forEach((q, i) => {
      const right = q.o ? q.a : q.a ? 0 : 1, qe = document.querySelector(`.tq[data-q="${i}"]`);
      $$('button', qe).forEach((b) => { b.disabled = true; if (+b.dataset.a === right) b.classList.add('ok'); else if (+b.dataset.a === ans[i]) b.classList.add('no'); });
      if (ans[i] === right) ok++;
      if (typeof logAtt === 'function') logAtt([t.kind === 'escuta' ? 'L' : 'R'], ans[i] === right);
    });
    const first = !S.reads[id], xp = first ? ok * 10 + (ok === t.qs.length ? 20 : 0) : 0;
    sfx('conclusao'); S.reads[id] = { ok, n: t.qs.length, d: today() };
    if (xp) addXP(xp); markActive(); checkBadges(); save();
    $('#tText').classList.remove('hid'); if ($('#tShow')) $('#tShow').remove();
    $('#tRes').innerHTML = `<div class="fb ${ok >= t.qs.length - 1 ? 'ok' : 'no'}"><b>${ok}/${t.qs.length} acertos${xp ? ' · +' + xp + ' XP' : ''}</b><p>${ok === t.qs.length ? 'Perfeito! Entendeu tudo.' : 'Releia os trechos das respostas marcadas em vermelho, agora com o texto aberto, e ouça de novo.'}</p></div>`;
    $('#tCheck').disabled = true;
  };
}

/* ---------- teste de nivelamento ---------- */
// Adaptativo: 6 perguntas por nível, do A1 ao C2. Passa no nível com 5 acertos; para no primeiro nível em que não passar.
const PQ = 6, PASS = 5;
let PT = null;
function levelQuestions(lv) {
  const p = PHASES.find((x) => x.id === lv), ls = phaseDays(p).map(dayInfo).filter((x) => !x.review).map((x) => LESSONS[x.li]);
  const cz = sample(ls.flatMap((l) => l.cz.map((c) => ({ q: c.q, a: c.a, w: c.w, why: c.why, l }))), PQ - 2);
  const vs = sample(ls.flatMap((l) => l.v.filter((v) => !/\(/.test(v.de)).map((v) => ({ v, l }))), 2).map(({ v, l }) => {
    const others = sample(ls.flatMap((x) => x.v).filter((x) => x.pt !== v.pt), 2).map((x) => x.pt);
    return { q: v.de, a: v.pt, w: others, vocab: true, l };
  });
  return shuffle([...cz, ...vs]);
}
function nivel() {
  if (!PT) {
    app.innerHTML = `<button class="ghost back" id="bk">← Voltar</button><h1>🎯 Teste de nivelamento</h1>
    <p>Para quem já sabe um pouco de alemão. São ${PQ} perguntas por nível, começando no A1. Quando você acertar menos de ${PASS} num nível, o teste para e indica onde começar.</p>
    <div class="card"><ul class="pts"><li>Responda sem consultar nada: o objetivo é achar o seu ponto de partida, não acertar tudo.</li><li>Se não souber, escolha "Não sei": chutar só atrasa o seu aprendizado.</li><li>Leva de 3 a 15 minutos, conforme o seu nível.</li></ul></div>
    <button class="pri big" id="pgo">Começar o teste</button>`;
    $('#bk').onclick = () => go(S.start ? 'perfil' : 'onboard');
    $('#pgo').onclick = () => { PT = { lv: 0, qs: levelQuestions(PHASES[0].id), i: 0, ok: 0, res: [] }; nivel(); };
    return;
  }
  if (PT.done) return nivelResult();
  const L = PHASES[PT.lv], it = PT.qs[PT.i], opts = shuffle([it.a, ...it.w]).concat('Não sei');
  app.innerHTML = `<div class="runtop"><button class="x" id="quit" aria-label="Sair">✕</button><div class="bar"><i style="width:${Math.round((PT.i / PQ) * 100)}%"></i></div><span class="combo">${L.id}</span></div>
  <div class="chip">Nível ${L.id} · pergunta ${PT.i + 1} de ${PQ}</div><div id="ex"></div>`;
  $('#quit').onclick = () => { PT = null; go(S.start ? 'perfil' : 'onboard'); };
  mcq($('#ex'), it.vocab ? `<p class="q">O que significa?<b>${esc(it.q)}</b></p>` : `<p class="q">Complete:<b>${esc(it.q)}</b></p>`, opts, it.vocab ? it.a : (o) => czOk(it, o), (ok) => {
    if (ok) PT.ok++;
    setTimeout(() => {
      PT.i++;
      if (PT.i < PQ) return nivel();
      PT.res.push({ lv: L.id, ok: PT.ok });
      if (PT.ok >= PASS && PT.lv < PHASES.length - 1) { PT.lv++; PT.qs = levelQuestions(PHASES[PT.lv].id); PT.i = 0; PT.ok = 0; toast('✅ ' + L.id + ' comprovado! Agora o ' + PHASES[PT.lv].id); }
      else PT.done = true;
      nivel();
    }, ok ? 450 : 900);
  }, 'col');
}
function nivelResult() {
  const passed = PT.res.filter((r) => r.ok >= PASS).map((r) => r.lv), top = passed[passed.length - 1];
  const next = PHASES.find((p) => !passed.includes(p.id)), startDay = next ? firstDayOf(next.weeks[0]) : TOTAL;
  app.innerHTML = `<h1>🎯 Resultado</h1>
  <div class="card">${PT.res.map((r) => `<div class="prow"><span>${r.lv} ${r.ok >= PASS ? '✅' : '—'}</span><div class="bar"><i style="width:${Math.round((r.ok / PQ) * 100)}%"></i></div><small>${r.ok}/${PQ}</small></div>`).join('')}</div>
  <div class="card"><h2 style="margin-top:0">${top ? 'Você domina o ' + top : 'Comece do início'}</h2>
  <p>${next ? `Recomendação: começar no <b>${next.id}</b>, dia ${startDay}.` : 'Você passou em todos os níveis. Use a trilha para revisar e manter o alemão.'}</p>
  ${top ? `<p class="mut">Os dias anteriores serão marcados como concluídos, sem estrelas extras. Você continua podendo abrir qualquer lição antiga para revisar.</p>
  <label class="row"><input type="checkbox" id="pvoc"> Colocar nas cartas também o vocabulário dos níveis que pulei (recomendado se quiser revisar)</label>` : ''}</div>
  ${top ? `<button class="pri big" id="papply">Começar no dia ${startDay}</button>` : ''}
  <button class="big" id="pstart" style="margin-top:8px">${top ? 'Prefiro começar do dia 1' : 'Começar do dia 1'}</button>`;
  if ($('#papply')) $('#papply').onclick = () => {
    if (!S.start) S.start = today();
    for (let d = 1; d < startDay; d++) if (!S.done[d]) S.done[d] = { s: 0, d: today(), skip: 1 };
    if ($('#pvoc').checked) for (let d = 1; d < startDay; d++) { const di = dayInfo(d); if (!di.review) { LESSONS[di.li].v.forEach((v) => { if (!S.cards[v.k]) S.cards[v.k] = newCard(); }); addSupCards(di.li); } }
    GUIDE.forEach((g) => { if (!S.guide[g.id]) S.guide[g.id] = today(); });
    S.placed = { lv: top, d: today() }; PT = null; checkBadges(); save(); toast('🎯 Trilha ajustada: você começa no dia ' + startDay); go('home');
  };
  $('#pstart').onclick = () => { if (!S.start) S.start = today(); PT = null; save(); go('home'); };
}

/* ---------- app instalável, offline e lembrete ---------- */
const standalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
let installEvt = null;
addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); installEvt = e; if (view === 'perfil' || view === 'home') go(view); });
addEventListener('appinstalled', () => { installEvt = null; toast('📲 App instalado! Abra pelo ícone na tela inicial.'); });
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  navigator.serviceWorker.register('sw.js').catch((e) => console.error('Falha ao ativar o modo offline:', e));
}
addEventListener('offline', () => toast('📴 Sem internet: tudo continua funcionando, menos os links externos.'));
addEventListener('online', () => toast('🌐 Conectado de novo.'));
function updateBadge() { // número de cartas pendentes no ícone do app (onde o sistema permite)
  try { const n = dueKeys().length; if ('setAppBadge' in navigator) (n ? navigator.setAppBadge(n) : navigator.clearAppBadge()).catch(() => {}); } catch (e) { /* recurso opcional */ }
}
function reminderLinks(time) {
  const [h, m] = (time || '19:00').split(':').map(Number), t = new Date();
  t.setDate(t.getDate() + (t.getHours() * 60 + t.getMinutes() >= h * 60 + m ? 1 : 0)); t.setHours(h, m, 0, 0);
  const end = new Date(t.getTime() + S.goal * 60000), pad = (n) => String(n).padStart(2, '0');
  const fmt = (d) => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
  const url = location.origin + location.pathname, title = '🇩🇪 Alemão: lição do dia';
  const desc = `Lição, cartas e missão do dia na Deutsch-Trilha: ${url}`;
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Deutsch-Trilha//PT-BR', 'BEGIN:VEVENT', `UID:lembrete-${Date.now()}@deutsch-trilha`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '')}`, `DTSTART:${fmt(t)}`, `DTEND:${fmt(end)}`, 'RRULE:FREQ=DAILY',
    `SUMMARY:${title}`, `DESCRIPTION:${desc}`, `URL:${url}`, 'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:Hora do alemão!', 'TRIGGER:PT0M', 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const g = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent(title) + '&details=' + encodeURIComponent(desc) +
    '&dates=' + fmt(t) + '/' + fmt(end) + '&recur=' + encodeURIComponent('RRULE:FREQ=DAILY') + '&ctz=' + encodeURIComponent(tz);
  return { ics, g };
}
function appCard(compact) {
  const inst = standalone() ? '<p>✅ Você está usando o app instalado. Ele funciona sem internet.</p>'
    : installEvt ? '<button class="pri" id="instBtn">📲 Instalar o app</button>'
      : isIOS() ? '<p>No iPhone ou iPad, abra no <b>Safari</b>, toque em <b>Compartilhar</b> (o quadrado com a seta) e depois em <b>Adicionar à Tela de Início</b>.</p>'
        : '<p>No <b>Chrome ou Edge do celular</b>: menu <b>⋮</b> → <b>Instalar app</b> (ou "Adicionar à tela inicial"). No <b>computador</b>: ícone de instalar na barra de endereço.</p>';
  if (compact) return standalone() ? '' : `<div class="card appc"><div class="row"><h3 class="grow">📲 Leve a trilha no bolso</h3><button class="ghost" id="hideApp">Agora não</button></div><p class="mut">Instale como app: abre pelo ícone, em tela cheia, e funciona sem internet.</p>${inst}</div>`;
  return `<div class="card appc"><h3>📲 App e lembrete diário</h3>${inst}
  <p class="mut">Depois da primeira abertura, lições, cartas, áudio da voz do aparelho e progresso funcionam sem internet. Só os links da aba Extras precisam de conexão.</p>
  <h3 style="margin-top:16px">⏰ Lembrete todo dia</h3>
  <p class="mut">Escolha o horário e crie um evento diário na sua agenda: o celular avisa na hora certa, mesmo com o app fechado.</p>
  <div class="row"><input type="time" id="remT" value="${S.remind || '19:00'}" style="width:auto"><a class="btn" id="remG" target="_blank" rel="noopener noreferrer">📅 Google Agenda</a><button id="remI">⬇️ Outra agenda (.ics)</button></div></div>`;
}
function wireAppCard() {
  if ($('#instBtn')) $('#instBtn').onclick = async () => { installEvt.prompt(); const r = await installEvt.userChoice; if (r.outcome === 'accepted') installEvt = null; };
  if ($('#hideApp')) $('#hideApp').onclick = () => { S.hideApp = today(); save(); $('#hideApp').closest('.card').remove(); };
  const t = $('#remT'); if (!t) return;
  const upd = () => { S.remind = t.value; save(); $('#remG').href = reminderLinks(t.value).g; };
  t.onchange = upd; upd();
  $('#remI').onclick = () => {
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([reminderLinks(t.value).ics], { type: 'text/calendar' }));
    a.download = 'lembrete-alemao.ics'; a.click(); toast('📅 Abra o arquivo baixado para adicionar o lembrete à sua agenda.');
  };
}

function backfillSup() { Object.keys(S.done).map(Number).map(dayInfo).filter((d) => !d.review).forEach((d) => addSupCards(d.li)); }
if (S.start && !S.supInit) { backfillSup(); S.supInit = 1; save(); }

// Atalhos do ícone do app (?abrir=cards) e primeira tela.
const abrir = new URLSearchParams(location.search).get('abrir');
go(!S.start ? 'onboard' : ['home', 'cards', 'trilha', 'extras', 'guide', 'perfil'].includes(abrir) ? abrir : 'home');
cloudBoot();
