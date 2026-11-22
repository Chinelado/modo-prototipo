/* MODO · protótipo da fase 1.
   Marca, navegação (Hoje, Aprender, Praticar, Explorar, Cartas, Perfil), Home, Praticar e boas-vindas
   sobre o motor do Deutsch-Trilha, que continua igual (lições, exercícios, cartas, áudio, progresso).
   Carregado depois de app.js: substitui home() e onboard() e acrescenta praticar(). */

/* ---------- ícones em linha (traço de 1,8 px, cantos arredondados) ---------- */
const ICON = {
  home: '<path d="m3 9.5 9-7 9 7V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  book: '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3z"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  play: '<circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4z"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  headphones: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
  mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  puzzle: '<path d="M19.4 14.9c-.3.3-.4.7-.4 1.1v3a2 2 0 0 1-2 2h-3c-.4 0-.8-.2-1.1-.4a2 2 0 1 0-3.8 0c-.3.3-.7.4-1.1.4H5a2 2 0 0 1-2-2v-3c0-.4.2-.8.4-1.1a2 2 0 1 0 0-3.8C3.2 10.8 3 10.4 3 10V7a2 2 0 0 1 2-2h3c.4 0 .8-.2 1.1-.4a2 2 0 1 1 3.8 0c.3.3.7.4 1.1.4h3a2 2 0 0 1 2 2v3c0 .4.2.8.4 1.1a2 2 0 1 1 0 3.8z"/>',
  library: '<path d="m16 6 4 14M12 6v14M8 8v12M4 4v16"/>',
  shuffle: '<path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/><path d="m18 2 4 4-4 4"/><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"/><path d="m18 14 4 4-4 4"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  bulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
};
const ic = (n, s = 20, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[n] || ''}</svg>`;
// Logo MODO (images/logo/SVG: Ativo 3 = símbolo, Ativo 2 = símbolo + nome). O nome usa currentColor:
// roxo-escuro da marca no tema claro e branco no escuro (.mo-logo em modo.css).
const LOGO_SYM = '<path fill="#fb548a" d="M324.1,391.54l-47.06-27.7c42.25-28.71,73.39-79.57,70.05-131.92-2.15-47.79-31.68-87.04-68.99-115.27L432.4,20.73l19.23-11.73c19.86-11.91,43.37-11.67,63.5-.09,22.65,13.03,37.45,37.13,37.45,63.9l.06,325.66c0,12.84-2.9,24.51-8.17,35.88-16.27,35.12-59.26,52.29-93.96,31.94l-45.07-26.44-81.34-48.31Z"/><path fill="#7646fa" d="M212.61,289.66c12.85,29.92,35.85,56.7,63.92,74.11l-175.73,100.53c-17.71,10.13-37.73,12.31-56.56,3.91C15.49,455.41-.04,426.79,0,395.57L.4,71.33C.44,40.18,22.25,12.64,51.05,3.37c16.97-5.46,35.25-4.53,50.34,4.7l162.17,99.23,14.14,9.42c-29.13,16.45-53.61,44.96-65.9,75.65-12.54,31.33-11.9,66.31.81,97.3Z"/>';
const LOGO_WORD = '<path d="M958.7,344.56l.22-34.54-.63-90.45-57.49,84.59c-5.84,8.6-14.47,12.37-24.68,10.12-4.9-1.08-9.46-3.05-12.5-7.45l-24.75-36.24c-11.67-17.08-22.04-34.31-35.05-50.99l-.44,133.35c-.04,13.22-10.32,22.55-22.88,24.06-6.15.74-11.82.12-18.06.39-16.37.69-30.07-8-30.05-26.6l.15-225.36c0-12.21,7.87-20.67,18.57-24.37,6.06-2.09,11.99-.97,18.4-1.5,11.48-.96,22.78,2.37,29.84,11.69l25,33.02,46.93,62.94,10.32,13.6c6.84-7.97,11.8-15.65,17.86-23.79l60.32-81.05c6.28-8.43,13.85-15.39,24.91-16.05,7.07-.42,14.05-.98,21.44.12,11.18,1.66,22.12,10.82,22.13,23.51l.11,229.21c0,12.63-9.28,22.24-21.29,23.75-8.84,1.11-17.67.98-26.62.07-7.76-.79-15.46-6.18-18.8-12.9-2.84-5.72-3-12.32-2.95-19.14Z"/><path d="M1337.88,236.22c0,80.8-65.56,146.31-146.44,146.31s-146.44-65.5-146.44-146.31,65.56-146.31,146.44-146.31,146.44,65.5,146.44,146.31ZM1266.17,235.27c0-41.53-33.7-75.19-75.26-75.19s-75.26,33.67-75.26,75.19,33.7,75.19,75.26,75.19,75.26-33.67,75.26-75.19Z"/><path d="M1922.86,237.5c0,82.15-66.66,148.74-148.88,148.74s-148.88-66.59-148.88-148.74,66.66-148.74,148.88-148.74,148.88,66.59,148.88,148.74ZM1848.81,236.8c0-42.24-34.27-76.48-76.55-76.48s-76.55,34.24-76.55,76.48,34.27,76.48,76.55,76.48,76.55-34.24,76.55-76.48Z"/><path d="M1603.22,280.25c-16.91,57.46-69.35,96.87-128.11,96.9l-91.25.05c-13.25,0-23.14-10.79-24.34-23.12-.67-6.85.06-12.29.05-19.27l-.26-208.36c-.02-17.36,11.25-29.7,29.1-29.67l85.85.15c28.15.05,55.57,8.8,78.66,24.61,25.73,17.62,43.5,43.63,51.28,73.53,7.42,28.53,7.32,57.01-.97,85.18ZM1536.35,249.43c7.81-44.34-23.56-84.83-68.64-87.63-12.16-.76-23.91-.11-36.67-.16l-.33,24.69.02,55.91.36,68.66,32.15.02c37.26.02,66.71-25.16,73.11-61.48Z"/>';
const modoLogo = (s = 30) => `<svg viewBox="0 0 552.64 475.01" width="${s}" height="${Math.round(s * 0.86)}" aria-hidden="true">${LOGO_SYM}</svg>`;
const modoLockup = (h = 26) => `<svg class="mo-logo" viewBox="0 0 1922.86 475.01" height="${h}" width="${Math.round(h * 4.048)}" role="img" aria-label="MODO">${LOGO_SYM}<g fill="currentColor">${LOGO_WORD}</g></svg>`;

// Miniatura da ilustração de cada pocket (images/pocket/thumb, 240×180), nos cartões do início e do Explorar.
const pkThumb = (p) => `<span class="mo-thumb"><img src="images/pocket/thumb/${p.id}.webp" alt="" loading="lazy" decoding="async" onerror="this.parentNode.textContent='${p.e || ''}'"></span>`;

/* ---------- navegação ---------- */
const MODO_NAV = [['home', 'home', 'Hoje'], ['trilha', 'book', 'Aprender'], ['praticar', 'target', 'Praticar'], ['extras', 'compass', 'Explorar'], ['cards', 'layers', 'Cartas'], ['perfil', 'user', 'Perfil']];
const NAV_OF = { intro: 'trilha', guide: 'trilha', nivel: 'trilha', modulo: 'trilha', curriculo: 'trilha', pocket: 'extras', texto: 'extras' };
function modoNav(v, due) {
  const on = NAV_OF[v] || v;
  return `<div class="brand">${modoLockup(26)}</div>` +
    MODO_NAV.map(([id, i, n], k) => `${k === 5 ? '<div class="mo-sep"></div>' : ''}<button data-v="${id}" class="${id === on ? 'on' : ''}">${ic(i, 20)}<span>${n}</span>${id === 'cards' && due ? `<em>${due}</em>` : ''}</button>`).join('') +
    `<button class="mo-lang" id="moLang" title="Trocar de idioma"><span class="mo-code">${LP.sigla}</span>${LP.nome}<small>${curLevel()}</small></button>
    <div class="mo-foot"><span>${ic('flame', 16)} ${shownStreak()} dias</span><span>${ic('star', 16)} ${S.xp} XP</span></div>`;
}

/* ---------- Praticar ---------- */
// Cada categoria escolhe formatos de exercício do motor atual. Só aparece o que o app realmente suporta.
const PRAT = [
  { id: 'cartas', i: 'layers', t: 'Revisão de cartas', d: 'Vocabulário na hora certa, antes de esquecer.', dur: '5 min', run: () => go('cards'), n: () => dueKeys().length },
  { id: 'misto', i: 'shuffle', t: 'Treino misto', d: 'Exercícios variados das lições que você já fez.', dur: '10 min' },
  { id: 'gram', i: 'puzzle', t: 'Gramática e frases', d: 'Complete, monte e reorganize frases.', dur: '8 min', kinds: ['log', 'lin'] },
  { id: 'vocab', i: 'library', t: 'Vocabulário', d: 'Memória visual, classificação e resposta rápida.', dur: '6 min', kinds: ['esp', 'nat', 'cor'] },
  { id: 'escuta', i: 'headphones', t: 'Compreensão auditiva', d: 'Ouça e escolha o que foi dito.', dur: '5 min', kinds: ['mus'], opt: { noFala: true } },
  { id: 'fala', i: 'mic', t: 'Fala e pronúncia', d: 'Diga frases em voz alta e veja o resultado palavra por palavra.', dur: '5 min', kinds: ['mus'], opt: { forceFala: true }, ok: () => !!FALA_SR && falaOn() },
  { id: 'conversa', i: 'chat', t: 'Conversa e escrita', d: 'Responda em diálogos e escreva frases sobre você.', dur: '8 min', kinds: ['int', 'intra'] },
];
function pratRun(p) {
  if (p.run) return p.run();
  if (!nDone()) { toast('Conclua a primeira lição para liberar a prática.'); return; }
  startSession('extra', null, Object.assign({ kinds: p.kinds }, p.opt || {}));
}
function praticar() {
  const has = nDone() > 0;
  app.innerHTML = `<div class="mo-hello"><h1>Praticar</h1><p>Fortaleça o que você aprendeu. Sessões curtas, uma tarefa por vez.</p></div>
  ${has ? '' : `<div class="card"><p>${ic('lock', 18)} A prática usa as lições que você já concluiu. Comece pela primeira lição da trilha.</p><button class="pri" id="goL1">Ir para a primeira lição</button></div>`}
  <div class="mo-prat">${PRAT.map((p) => { const off = (p.ok && !p.ok()) || (!has && !p.run); const n = p.n ? p.n() : 0;
    return `<button class="mo-pr" data-pr="${p.id}" ${off ? 'disabled' : ''}><span class="mo-tile ${p.id === 'fala' ? 's' : p.id === 'escuta' ? 'a' : p.id === 'cartas' ? 'g' : ''}">${ic(p.i, 22)}</span><span><b>${p.t}</b><small>${p.d}</small></span>
      <span class="mo-meta">${n ? `<span class="mo-badge">${n}</span>` : ''}${p.dur}${ic('chevron', 18)}</span></button>`; }).join('')}</div>
  <p class="mut" style="margin-top:14px">As categorias usam os mesmos exercícios das lições: aqui você escolhe o foco.</p>`;
  $$('[data-pr]').forEach((b) => (b.onclick = () => pratRun(PRAT.find((p) => p.id === b.dataset.pr))));
  if ($('#goL1')) $('#goL1').onclick = () => go('intro', 1);
}

/* ---------- Home ---------- */
// Sugestão a partir de dados reais: o formato com menor taxa de acerto (com amostra mínima) vira uma prática.
const SUG_OF = { mus: 'escuta', lin: 'gram', log: 'gram', esp: 'vocab', nat: 'vocab', cor: 'vocab', int: 'conversa', intra: 'conversa' };
function homeSuggestion(due) {
  if (due >= 10) return { t: 'Revise suas cartas', d: `${due} palavras estão no ponto certo de revisão. Cinco minutos agora fixam o que você estudou.`, p: PRAT[0] };
  const rates = IK.filter((k) => S.stats[k].n >= 8).map((k) => ({ k, r: S.stats[k].ok / S.stats[k].n })).sort((a, b) => a.r - b.r);
  if (!rates.length) return { t: 'Comece pelo básico', d: 'Depois das primeiras lições, eu mostro aqui onde vale a pena praticar mais.', p: null };
  const p = PRAT.find((x) => x.id === SUG_OF[rates[0].k]);
  return { t: p.t, d: `É o tipo de exercício em que você está acertando menos até agora (${Math.round(rates[0].r * 100)}%). Uma sessão curta ajuda.`, p };
}
home = function () {
  const cur = currentDay(), m = mission(), due = dueKeys().length, d = cur && dayInfo(cur);
  const L = d && !d.review ? LESSONS[d.li] : null, streak = shownStreak(), lv = level(), base = 60 * (lv - 1) ** 2, next = 60 * lv ** 2;
  const gNext = !nDone() && GUIDE.find((g) => !S.guide[g.id]);
  let H;
  if (gNext) { const k = GUIDE.indexOf(gNext); H = { e: `Comece aqui · aula ${k + 1} de ${GUIDE.length}`, t: gNext.t, meta: [['clock', '3–5 min'], ['book', guideCat(gNext).t]], cta: k ? 'Continuar a aula' : 'Começar a primeira aula', act: () => go('guide', gNext.id), alt: ['Pular para o dia 1', () => go('intro', 1)] }; }
  else if (d) H = { e: d.review ? `${d.level} · Módulo ${d.w + 1} · Avaliação` : `${d.level} · Módulo ${d.w + 1} · Lição ${d.r + 1} de ${d.n}`, t: d.review ? `Avaliação do módulo ${d.w + 1}` : L.de, meta: [['clock', d.review ? '25–35 min' : '30–45 min'], ['book', d.review ? 'Revisão das 6 lições do módulo' : L.pt + ' · ' + L.gt]], cta: m.lesson ? 'Adiantar a próxima lição' : d.review ? 'Fazer a avaliação' : 'Continuar a lição', act: () => go('intro', cur), alt: ['Ver o módulo', () => go('modulo', d.w)] };
  else H = { e: 'Trilha concluída', t: 'Todas as lições feitas', meta: [['layers', 'Mantenha as cartas em dia']], cta: 'Revisar cartas', act: () => go('cards') };
  const sug = homeSuggestion(due);
  const pk = POCKETS.filter((p) => !(S.pockets || {})[p.id]).slice(0, 3);
  const chk = (ok, t) => `<div class="mo-check ${ok ? 'ok' : ''}"><span class="mo-box">${ok ? ic('check', 14) : ''}</span><span>${t}</span></div>`;
  app.innerHTML = `<div class="mo-hello"><h1>Olá${S.name ? ', ' + esc(S.name) : ''}!</h1><p>${nDone() ? 'Que bom te ver de volta. Vamos continuar?' : 'Vamos dar o primeiro passo?'}</p></div>
  <section class="mo-hero"><svg class="mo-deco" viewBox="0 0 552.64 475.01" aria-hidden="true">${LOGO_SYM.replace(/fill="#[0-9a-f]+"/g, 'fill="#fff"')}</svg>
    <span class="eyebrow">${H.e}</span><h2>${esc(H.t)}</h2>
    <div class="meta">${H.meta.map(([i, t]) => `<span>${ic(i, 16)}${esc(t)}</span>`).join('')}</div>
    <div class="row"><button class="mo-cta" id="moGo">${ic('play', 18)}${H.cta}${ic('arrow', 18)}</button>${H.alt ? `<button class="mo-alt" id="moAlt">${H.alt[0]}</button>` : ''}</div></section>
  <div class="mo-stats">
    <div class="mo-stat"><span class="mo-tile s">${ic('flame', 22)}</span><span><b>${streak} ${streak === 1 ? 'dia' : 'dias'}</b><small class="mo-lbl">de sequência${S.freezes ? ` · ${S.freezes} proteção` : ''}</small></span></div>
    <div class="mo-stat"><span class="mo-tile a">${ic('star', 22)}</span><span style="flex:1;min-width:0"><b>Nível ${lv} · ${S.xp} XP</b><div class="bar"><i style="width:${Math.round(((S.xp - base) / (next - base)) * 100)}%"></i></div><small class="mo-lbl">faltam ${next - S.xp}</small></span></div>
    <div class="mo-stat"><span class="mo-tile g">${ic('layers', 22)}</span><span><b>${nWords()} palavras</b><small class="mo-lbl">no seu vocabulário</small></span></div>
  </div>
  <div class="mo-grid">
    <div class="card"><div class="mo-card-h">${ic('target', 22)}<h3>Missão do dia</h3></div>
      ${chk(m.lesson, 'Concluir a lição do dia')}${chk(m.cards, `Revisar as cartas${due ? ` (${due})` : ''}`)}${chk(m.time, `Estudar <span id="clock">${clockText()}</span>`)}${chk(m.extra, 'Fazer uma tarefa de casa ou ver um conteúdo extra')}
      <div class="mo-actions">${due ? `<button id="moC">${ic('layers', 18)}Revisar <span class="mo-badge">${due}</span></button>` : ''}${nDone() ? `<button id="moX">${ic('shuffle', 18)}Treino extra</button>` : ''}</div></div>
    <div class="card mo-sug"><div class="mo-card-h">${ic('bulb', 22)}<h3>Próximo passo sugerido</h3></div>
      <b class="mo-big">${sug.t}</b><p class="mut">${sug.d}</p>${sug.p ? `<button class="ghost" id="moS">Praticar agora ${ic('arrow', 16)}</button>` : ''}</div>
  </div>
  ${pk.length ? `<div class="mo-sec"><h2>Para explorar</h2><span class="grow"></span><button class="ghost" id="moE">Ver todos ${ic('arrow', 16)}</button></div>
  <div class="mo-explore">${pk.map((p) => `<button class="mo-ex" data-pk="${p.id}">${pkThumb(p)}<span><b>${esc(p.t)}</b><small>${esc(p.pt)} · ${p.lv}</small></span>${ic('chevron', 18, 'arr')}</button>`).join('')}</div>` : ''}
  ${pendingHw() !== undefined ? hwCard(pendingHw(), 'Tarefa de casa · ' + esc(LESSONS[pendingHw()].de)) : ''}`;
  $('#moGo').onclick = H.act; if ($('#moAlt')) $('#moAlt').onclick = H.alt[1];
  if ($('#moC')) $('#moC').onclick = () => go('cards');
  if ($('#moX')) $('#moX').onclick = () => startSession('extra');
  if ($('#moS')) $('#moS').onclick = () => pratRun(sug.p);
  if ($('#moE')) $('#moE').onclick = () => go('extras', 'pocket');
  $$('[data-pk]').forEach((b) => (b.onclick = () => go('pocket', b.dataset.pk)));
  wireHw(app, home);
};

/* ---------- Aprender: abas Trilha e Comece aqui ---------- */
const aprTabs = (on) => `<div class="mo-tabs">${[['trilha', 'Trilha'], ['curriculo', 'Currículo'], ...(GUIDE.length ? [['guide', 'Comece aqui']] : [])].map(([id, t]) => `<button data-apr="${id}" class="${on === id ? 'on' : ''}">${t}</button>`).join('')}</div>`;
const wireApr = () => $$('[data-apr]').forEach((b) => (b.onclick = () => go(b.dataset.apr)));
const _trilha = trilha;
trilha = function (lv) { _trilha(lv); const h = app.querySelector('h1'); if (h) { h.textContent = 'Aprender'; h.insertAdjacentHTML('afterend', aprTabs('trilha')); wireApr(); } };
const _guide = guide;
guide = function (id) { _guide(id); if (id) return; const h = app.querySelector('h1'); if (h) { h.textContent = 'Aprender'; h.insertAdjacentHTML('afterend', aprTabs('guide')); wireApr(); } };

/* ---------- Explorar ---------- */
const _extras = extras;
extras = function (arg) { _extras(arg); const h = app.querySelector('h1'); if (h) { h.textContent = 'Explorar'; if (!app.querySelector('.mo-sub')) h.insertAdjacentHTML('afterend', '<p class="mut mo-sub">Situações reais, leitura e conteúdos para usar o ' + LP.lingua + ' fora da trilha.</p>'); } };

/* ---------- boas-vindas: idioma → nível → começar ---------- */
const LANGS = [['DE', 'Alemão', 'A1 a C2 · 252 lições', true], ['EN', 'Inglês', 'A1 e A2 · 84 lições (em construção)', true], ['ES', 'Espanhol', 'em preparação', false], ['FR', 'Francês', 'em preparação', false], ['IT', 'Italiano', 'em preparação', false]];
onboard = function (step = 1) {
  const steps = `<div class="mo-steps">${[1, 2, 3].map((i) => `<i class="${i <= step ? 'on' : ''}"></i>`).join('')}</div>`;
  if (step === 1 && /[?&]ob=3/.test(location.search)) step = 3; // veio da troca de idioma nas boas-vindas
  if (step === 1) {
    app.innerHTML = `<div class="mo-ob"><section class="mo-hero"><span class="mo-brand">${modoLockup(26)}</span>
      <h1>Aprenda idiomas no seu ritmo.</h1><p>Um método completo, prático e conectado à vida real: aulas guiadas, prática variada, revisão na hora certa e situações do dia a dia.</p>
      <div class="row" style="margin-top:14px"><button class="mo-cta" id="ob1">Começar ${ic('arrow', 18)}</button></div></section></div>`;
    $('#ob1').onclick = () => onboard(2); return;
  }
  if (step === 2) {
    app.innerHTML = `<div class="mo-ob">${steps}<h1>Qual idioma você quer aprender?</h1>
      ${LANGS.map(([c, n, d, ok]) => `<button class="mo-opt ${c === LP.sigla ? 'on' : ''}" ${ok ? 'data-lang="' + c + '"' : 'disabled'}><span class="mo-code">${c}</span><span><b>${n}</b><small>${d}</small></span>${ok ? `<span class="mo-ok">${ic('check', 20)}</span>` : '<span class="mo-soon">em breve</span>'}</button>`).join('')}
      <button class="pri big" id="ob2">Continuar ${ic('arrow', 18)}</button></div>`;
    let langSel = LP.code;
    $$('[data-lang]').forEach((b) => (b.onclick = () => { langSel = b.dataset.lang.toLowerCase(); $$('[data-lang]').forEach((x) => { const on = x === b; x.classList.toggle('on', on); const ok = x.querySelector('.mo-ok'); if (ok) ok.innerHTML = on ? ic('check', 20) : ''; }); }));
    $('#ob2').onclick = () => { if (langSel !== LP.code) { try { localStorage.setItem('modo.lang', langSel); } catch (e) { /* só lembra */ } location.href = LANG_PACKS[langSel].page + '?ob=3'; return; } onboard(3); }; return;
  }
  app.innerHTML = `<div class="mo-ob">${steps}<h1>Qual é o seu nível de ${LP.nome.toLowerCase()}?</h1><p class="mut">Isso define por onde a sua trilha começa.</p>
    <button class="mo-opt on" data-lv="zero"><span class="mo-code">A1</span><span><b>Estou começando do zero</b><small>${GUIDE.length ? 'Começo pelas aulas curtas do Comece aqui.' : 'Começo pela primeira lição.'}</small></span><span class="mo-ok">${ic('check', 20)}</span></button>
    <button class="mo-opt" data-lv="teste"><span class="mo-code">?</span><span><b>Já sei um pouco</b><small>Faço o teste de nível para pular o que já sei.</small></span><span class="mo-ok"></span></button>
    <label class="mo-f" for="nm">Como posso te chamar?</label><input id="nm" placeholder="Seu nome" maxlength="30" value="${esc(S.name || '')}">
    <label class="mo-f" for="goal">Quanto tempo por dia?</label><select id="goal"><option value="15">15 min · leve</option><option value="30" selected>30 min · constante</option><option value="60">60 min · firme</option><option value="120">2 horas · intenso</option></select>
    <button class="pri big" id="ob3">Começar ${ic('arrow', 18)}</button></div>`;
  let lvSel = 'zero';
  $$('[data-lv]').forEach((b) => (b.onclick = () => { lvSel = b.dataset.lv; $$('[data-lv]').forEach((x) => { const on = x === b; x.classList.toggle('on', on); x.querySelector('.mo-ok').innerHTML = on ? ic('check', 20) : ''; }); }));
  $('#ob3').onclick = () => { S.name = $('#nm').value.trim(); S.goal = +$('#goal').value; S.start = today(); save(); go(lvSel === 'teste' ? 'nivel' : 'home'); };
};

/* ---------- Módulo (lições + avaliação) ---------- */
// Decisão de 20/11/2026: a Unidade fica só no modelo de dados. Os módulos vêm de data/curriculo.js; enquanto o A1–A2
// novo é escrito, alguns têm menos de 6 lições e mostram as que faltam como "em preparação".
// Os módulos ainda não têm objetivos "consigo…": a tela mostra isso como pendência em vez de inventar.
const modDays = (w) => { const f = firstDayOf(w); return Array.from({ length: MODS[w].li.length + 1 }, (_, r) => f + r); };
const modLessons = modLs;
function modState(w) {
  const cur = currentDay() || TOTAL + 1, ds = modDays(w), n = ds.filter((d) => S.done[d]).length;
  return { cur, ds, n, locked: ds[0] > cur, done: n === ds.length };
}
const modName = (w) => (MODS[w].n ? `Módulo ${w + 1} · ${MODS[w].n}` : `Módulo ${w + 1}`);
const faltam = (w) => MODS[w].plan.filter((x) => x.falta);
const prepRow = (t) => `<div class="mo-pr mo-lrow mo-prep"><span class="mo-tile mo-off">${ic('clock', 18)}</span><span><b>${esc(t)}</b><small>Lição nova em preparação</small></span></div>`;
const stars = (s) => `<span class="mo-stars" aria-label="${s} de 3 estrelas">${'★'.repeat(s)}<i>${'★'.repeat(3 - s)}</i></span>`;
function modRow(d, w) {
  const { cur } = modState(w), info = dayInfo(d), L = info.review ? null : LESSONS[info.li], dn = S.done[d], locked = d > cur && !dn; // o que já foi feito continua aberto, mesmo depois de lições novas entrarem antes
  const tile = dn ? `<span class="mo-tile g">${ic('check', 20)}</span>` : locked ? `<span class="mo-tile mo-off">${ic('lock', 18)}</span>` : `<span class="mo-tile">${L ? `<b class="mo-n">${info.r + 1}</b>` : ic('target', 20)}</span>`;
  const meta = dn ? stars(dn.s) : d === cur ? '<span class="mo-badge">agora</span>' : '';
  return `<button class="mo-pr mo-lrow ${d === cur ? 'mo-cur' : ''}" data-day="${d}" ${locked ? 'disabled' : ''}>${tile}
    <span><b>${L ? esc(L.de) : 'Avaliação do módulo'}</b><small>${L ? esc(L.pt) + ' · ' + esc(L.gt) : `18 exercícios com as ${info.n} lições do módulo`}</small></span>
    <span class="mo-meta">${meta}${locked ? '' : ic('chevron', 18)}</span></button>`;
}
// Objetivos do módulo (rascunho) e, por lição, o objetivo com a autoavaliação do aluno.
// Módulo ainda sem objetivos escritos mostra o que cada lição treina, marcado como pendente.
function modObjCard(w, ls) {
  const mo = typeof MOD_OBJ !== 'undefined' ? MOD_OBJ[w] : null, lo = ls.filter((l) => typeof OBJ !== 'undefined' && OBJ[l.sid]);
  if (!mo && !lo.length) return `<div class="card mo-obj"><div class="mo-card-h">${ic('target', 22)}<h3>Objetivos do módulo</h3><span class="mo-pend">pendente</span></div>
    <p class="mut">Os objetivos "consigo…" deste módulo ainda não foram escritos. Por enquanto, o que cada lição treina:</p>
    <ul class="mo-gt">${ls.map((l) => `<li>${esc(l.gt)}</li>`).join('')}</ul></div>`;
  const au = S.auto || {}, sim = lo.filter((l) => (au[l.sid] || {}).r === 'sim').length;
  return `<div class="card mo-obj"><div class="mo-card-h">${ic('target', 22)}<h3>Objetivos do módulo</h3><span class="mo-pend">rascunho</span></div>
    ${mo ? `<p class="mut">Ao fim deste módulo:</p><ul class="mo-gt">${mo.map((o) => `<li>${esc(o)}</li>`).join('')}</ul>` : ''}
    ${lo.length ? `<details class="mo-lobj"><summary>Objetivo de cada lição <span class="mut">· ${sim} de ${lo.length} marcados como "já consigo"</span></summary><ul class="mo-lobjs">${lo.map((l) => { const r = (au[l.sid] || {}).r;
      return `<li class="${r === 'sim' ? 'sim' : r === 'nao' ? 'nao' : ''}"><span class="mo-lob">${r === 'sim' ? ic('check', 14) : r === 'nao' ? '…' : '·'}</span><span><b lang="${LP.code}">${esc(l.de)}</b><small>${esc(OBJ[l.sid].o)}</small></span></li>`; }).join('')}</ul></details>` : ''}</div>`;
}
function modulo(w) {
  w = Math.max(0, Math.min(WEEKS - 1, Number.isFinite(+w) ? +w : 0));
  const p = phaseOf(w), { cur, ds, n } = modState(w), ls = modLessons(w);
  const nextD = ds.find((d) => !S.done[d]), canGo = nextD && nextD <= cur;
  const words = ls.flatMap((l) => l.v.filter((v) => !v.x)), inCards = words.filter((v) => S.cards[v.k]).length;
  const weak = ds.filter((d) => S.done[d] && S.done[d].s < 3);
  const tx = TEXTS.find((t) => t.w === w + 1);
  const pos = w - p.weeks[0] + 1, tot = p.weeks[1] - p.weeks[0];
  const cta = !nextD ? 'Módulo concluído' : !canGo ? `Conclua o dia ${cur} para liberar` : nextD === ds[0] && !n ? 'Começar o módulo' : dayInfo(nextD).review ? 'Fazer a avaliação' : 'Continuar o módulo';
  app.innerHTML = `<nav class="mo-crumbs" aria-label="Você está em"><button class="link" data-crumb="trilha">Aprender</button>${ic('chevron', 14)}<button class="link" data-crumb="lv">${p.id}</button>${ic('chevron', 14)}<span>Módulo ${w + 1}</span></nav>
  <section class="mo-modh card" style="--lc:${LVCOL[p.id]}">${levelBadge(p.id, 64)}
    <div class="mo-modt"><span class="eyebrow">${p.id} · módulo ${pos} de ${tot} do nível · ${w + 1} de ${WEEKS} na trilha</span><h1>Módulo ${w + 1}</h1>${MODS[w].n ? `<p class="mo-modn">${esc(MODS[w].n)}</p>` : ''}
      <p class="mut">${ls.length} lições + avaliação${faltam(w).length ? ` · ${faltam(w).length} em preparação` : ''} · ${words.length} palavras novas</p>
      <div class="row"><div class="bar"><i style="width:${Math.round((n / ds.length) * 100)}%"></i></div><small>${n}/${ds.length}</small></div></div>
    <button class="pri mo-modgo" id="mGo" ${canGo ? '' : 'disabled'}>${canGo ? ic('play', 18) : ''}${cta}</button></section>
  <div class="mo-modgrid">
    <div>
      <div class="mo-sec"><h2>Lições</h2></div>
      <div class="mo-lessons">${MODS[w].plan.map((x) => (x.falta ? prepRow(x.falta) : modRow(LDAY[x.i], w))).join('')}${modRow(ds[ds.length - 1], w)}</div>
      ${tx ? `<button class="mo-pr mo-lrow mo-tx" id="mTx"><span class="mo-tile a">${ic(tx.kind === 'escuta' ? 'headphones' : 'book', 20)}</span><span><b>${esc(tx.t)}</b><small>Texto ${tx.kind === 'escuta' ? 'de escuta' : 'de leitura'} do módulo · opcional</small></span><span class="mo-meta">${(S.reads || {})[tx.id] ? ic('check', 18) : ''}${ic('chevron', 18)}</span></button>` : ''}
    </div>
    <div>
      ${modObjCard(w, ls)}
      <div class="card"><div class="mo-card-h">${ic('layers', 22)}<h3>Vocabulário</h3></div>
        <p><b>${words.length} palavras</b> · <span class="mut">${inCards} já nas suas cartas</span></p>
        <div class="mo-words">${words.slice(0, 12).map((v) => `<span class="mo-w">${spk(v.de)}<span class="${gcls(v.de)}">${esc(v.de)}</span></span>`).join('')}</div>
        ${words.length > 12 ? `<details><summary>Ver as ${words.length}</summary><div class="mo-words">${words.slice(12).map((v) => `<span class="mo-w">${spk(v.de)}<span class="${gcls(v.de)}">${esc(v.de)}</span></span>`).join('')}</div></details>` : ''}</div>
      <div class="card"><div class="mo-card-h">${ic('bulb', 22)}<h3>O que revisar</h3></div>
        ${weak.length ? `<p class="mut">Lições com menos de 3 estrelas. Refazer conta de novo para as estrelas.</p>${weak.map((d) => { const i = dayInfo(d); return `<button class="mo-ex mo-rev" data-day="${d}"><span><b>${i.review ? 'Avaliação do módulo' : esc(LESSONS[i.li].de)}</b><small>${stars(S.done[d].s)}</small></span>${ic('chevron', 18, 'arr')}</button>`; }).join('')}`
          : `<p class="mut">${n ? 'Tudo o que você fez aqui está com 3 estrelas.' : 'Aparece aqui o que vale refazer depois que você concluir lições deste módulo.'}</p>`}</div>
    </div>
  </div>
  <div class="mo-modnav">${w > 0 ? `<button class="ghost" data-mod="${w - 1}">${ic('chevron', 16, 'flip')} Módulo ${w}</button>` : '<span></span>'}${w < WEEKS - 1 ? `<button class="ghost" data-mod="${w + 1}">Módulo ${w + 2} ${ic('chevron', 16)}</button>` : ''}</div>`;
  $$('[data-day]').forEach((b) => (b.onclick = () => go('intro', +b.dataset.day)));
  $$('[data-mod]').forEach((b) => (b.onclick = () => go('modulo', +b.dataset.mod)));
  $$('[data-crumb]').forEach((b) => (b.onclick = () => go('trilha', b.dataset.crumb === 'lv' ? p.id : undefined)));
  if (canGo) $('#mGo').onclick = () => go('intro', nextD);
  if ($('#mTx')) $('#mTx').onclick = () => go('texto', tx.id);
}

/* ---------- Currículo (aba de Aprender) ---------- */
// A árvore inteira da trilha: Nível → Módulo → Lição, com busca por título, tema ou gramática.
function curriculo() {
  app.innerHTML = `<h1>Aprender</h1>${aprTabs('curriculo')}
  <p class="mut">Tudo o que a trilha de ${LP.lingua} cobre, do A1 ao C2: ${PHASES.length} níveis, ${WEEKS} módulos, ${LESSONS.length} lições.</p>
  <input id="cq" class="mo-search" type="search" placeholder="Buscar tema, gramática ou título" aria-label="Buscar no currículo">
  <div id="ctree"></div>`;
  const draw = () => {
    const q = norm($('#cq').value.trim()), cur = currentDay() || TOTAL + 1, cl = curLevel();
    let hits = 0;
    const html = PHASES.map((p) => {
      const mods = [];
      for (let w = p.weeks[0]; w < p.weeks[1]; w++) {
        const items = MODS[w].plan.map((x) => (x.falta ? { falta: x.falta } : { d: LDAY[x.i] })).concat({ d: modDays(w).slice(-1)[0] });
        const rows = items.filter((it) => { if (!q) return true; if (it.falta) return norm(it.falta).includes(q); const i = dayInfo(it.d); return !i.review && norm([LESSONS[i.li].de, LESSONS[i.li].pt, LESSONS[i.li].gt].join(' ')).includes(q); });
        if (!rows.length) continue;
        hits += rows.filter((it) => it.falta || !dayInfo(it.d).review).length;
        const st = modState(w);
        mods.push(`<div class="mo-cmod"><button class="mo-cmh" data-mod="${w}"><b>${esc(modName(w))}</b><span class="mut">${st.n}/${st.ds.length}</span>${st.done ? ic('check', 16, 'okc') : st.locked ? ic('lock', 14, 'mutc') : ''}${ic('chevron', 16, 'arr')}</button>
          <ol>${rows.map((it) => { if (it.falta) return `<li><span class="mo-cl mo-prep"><span class="mo-cn">${ic('clock', 14)}</span><span><b lang="${LP.code}">${esc(it.falta)}</b> <small>em preparação</small></span></span></li>`; const d = it.d, i = dayInfo(d), L = i.review ? null : LESSONS[i.li], lock = d > cur && !S.done[d];
            return `<li><button class="mo-cl ${S.done[d] ? 'mo-done' : ''}" data-day="${d}" ${lock ? 'disabled' : ''}><span class="mo-cn">${S.done[d] ? ic('check', 14) : L ? i.r + 1 : ic('target', 14)}</span><span><b lang="${LP.code}">${L ? esc(L.de) : 'Avaliação do módulo'}</b> <small>${L ? esc(L.pt) + ' · ' + esc(L.gt) : '18 exercícios'}</small></span></button></li>`; }).join('')}</ol></div>`);
      }
      if (!mods.length) return '';
      const days = phaseDays(p), dn = days.filter((d) => S.done[d]).length;
      return `<details class="mo-clv" ${q || p.id === cl ? 'open' : ''} style="--lc:${LVCOL[p.id]}"><summary><span class="mo-lvd">${p.id}</span><span class="mo-lvt"><b>${esc(p.n)}</b><small>${esc(p.can)}</small></span><span class="mo-lvp"><span class="bar"><i style="width:${Math.round((dn / days.length) * 100)}%"></i></span><small>${dn}/${days.length}</small></span></summary>
        <div class="mo-cmods">${mods.join('')}</div></details>`;
    }).join('');
    $('#ctree').innerHTML = (q ? `<p class="mut">${hits} ${hits === 1 ? 'lição encontrada' : 'lições encontradas'}</p>` : '') + (html || '<p class="mut">Nada encontrado. Tente outra palavra.</p>');
    $$('#ctree [data-mod]').forEach((b) => (b.onclick = () => go('modulo', +b.dataset.mod)));
    $$('#ctree [data-day]').forEach((b) => (b.onclick = () => go('intro', +b.dataset.day)));
  };
  $('#cq').oninput = draw; draw();
  wireApr();
}

/* ---------- Trilha e lição apontam para o módulo ---------- */
const _trilha2 = trilha;
trilha = function (lv) {
  _trilha2(lv);
  const wl = app.querySelector('.wklist');
  if (wl) {
    const det = wl.closest('details'), p = PHASES.find((x) => x.id === trLevel);
    det.open = true; det.querySelector('summary').textContent = 'Módulos deste nível';
    wl.outerHTML = `<div class="mo-modlist">${Array.from({ length: p.weeks[1] - p.weeks[0] }, (_, k) => { const w = p.weeks[0] + k, st = modState(w);
      return `<button class="mo-ml" data-mod="${w}"><span><b>${esc(modName(w))}</b><small>${modLessons(w).map((l) => esc(l.gt)).join(' · ')}${faltam(w).length ? ` · +${faltam(w).length} em preparação` : ''}</small></span><span class="mo-meta">${st.done ? ic('check', 16, 'okc') : st.locked ? ic('lock', 14) : `${st.n}/${st.ds.length}`}${ic('chevron', 16)}</span></button>`; }).join('')}</div>`;
    $$('[data-mod]', app).forEach((b) => (b.onclick = () => go('modulo', +b.dataset.mod)));
  }
  const ceb = app.querySelector('.ccard .eyebrow'); if (ceb) ceb.textContent = ceb.textContent.replace(/Semanas? (\d+)/, (_, a) => (ceb.textContent.includes('–') ? 'Módulos ' : 'Módulo ') + a);
  $$('.ccard p', app).forEach((el) => { if (el.textContent.includes('checkpoints')) el.textContent = el.textContent.replace(/🏁 (\d+) checkpoints/, '🏁 $1 módulos com avaliação'); });
  // balão do bloco: "Semana" vira "Módulo" e ganha o atalho para a tela do módulo
  const patch = (d) => {
    const pop = $('#pop'); if (!pop || pop.hidden) return; const w = dayInfo(d).w;
    const i = dayInfo(d), eb = pop.querySelector('.eyebrow');
    if (eb) eb.textContent = `${i.level} · Módulo ${w + 1} · ${i.review ? 'Avaliação' : `Lição ${i.r + 1} de ${i.n}`}`;
    const h = pop.querySelector('h3'); if (h) h.textContent = h.textContent.replace(/🏁 Checkpoint da semana (\d+)/, 'Avaliação do módulo $1');
    pop.insertAdjacentHTML('beforeend', `<button class="ghost mo-popm" id="pmod">Ver o módulo ${w + 1} ${ic('arrow', 16)}</button>`);
    $('#pmod').onclick = () => go('modulo', w);
  };
  $$('.node', app).forEach((nd) => { nd.addEventListener('click', () => patch(+nd.dataset.d)); nd.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') patch(+nd.dataset.d); }); });
};
const _intro = intro;
intro = function (day) {
  _intro(day);
  const d = dayInfo(day), eb = app.querySelector('.lhead .eyebrow'), h = app.querySelector('.lhead h1'), bk = $('#bk');
  if (eb) eb.textContent = d.review ? `${d.level} · Módulo ${d.w + 1}` : `${d.level} · Módulo ${d.w + 1} · Lição ${d.r + 1} de ${d.n}`;
  if (h && d.review) h.textContent = `Avaliação do módulo ${d.w + 1}`;
  if (d.review) { const p = app.querySelector('.lhead + p'); if (p) p.textContent = '18 exercícios misturando tudo o que você viu neste módulo:'; const st = $('#st'); if (st) st.textContent = 'Começar a avaliação'; }
  if (bk) { bk.innerHTML = `← Módulo ${d.w + 1}`; bk.onclick = () => go('modulo', d.w); }
};

/* ---------- Perfil por competências ---------- */
// Decisões de 20/11/2026: inteligências só no motor; competência = acerto recente + volume, sem nível A1–C2;
// aparece com 20 respostas no total e a taxa usa as 30 últimas; Interação e Mediação ficam fora até haver atividades que as avaliem.
const ATT_MIN = 20, ATT_WIN = 30;
const COMP = [
  { id: 'L', g: 'c', n: 'Compreensão auditiva', i: 'headphones', fonte: 'ouça e escolha, textos de escuta', pr: 'escuta' },
  { id: 'R', g: 'c', n: 'Leitura', i: 'book', fonte: 'textos de leitura, diálogos', pr: 'textos' },
  { id: 'S', g: 'c', n: 'Fala', i: 'mic', fonte: 'fale a frase, repita em voz alta', pr: 'fala' },
  { id: 'W', g: 'c', n: 'Escrita', i: 'chat', fonte: 'frases sobre você', pr: 'conversa' },
  { id: 'voc', g: 'k', n: 'Vocabulário', i: 'library', fonte: 'pares, classificar, resposta rápida, cartas', pr: 'vocab' },
  { id: 'gra', g: 'k', n: 'Gramática', i: 'puzzle', fonte: 'lacunas, montar frases, regra', pr: 'gram' },
  { id: 'pro', g: 'k', n: 'Pronúncia', i: 'mic', fonte: 'exercícios de fala', pr: 'fala' },
];
// Qual competência cada formato de exercício evidencia (o mesmo formato pode alimentar uma comunicativa e uma de conhecimento).
function compsOf(k, keys = [], fala = false) {
  if (k === 'mus') return fala ? ['S', 'pro'] : ['L'];
  if (k === 'lin') return keys.length ? ['voc'] : ['gra'];
  if (k === 'log') return ['gra'];
  if (k === 'int' || k === 'leq') return ['R'];
  if (k === 'lew') return ['W'];
  if (k === 'intra') return ['W', 'gra'];
  return ['voc']; // esp, nat, cor
}
function logAtt(cs, ok) {
  S.att = S.att || {};
  cs.forEach((c) => { const a = (S.att[c] = S.att[c] || { n: 0, r: [] }); a.n++; a.r.push(ok ? 1 : 0); if (a.r.length > ATT_WIN) a.r.splice(0, a.r.length - ATT_WIN); });
}
// Antes do registro por resposta só existem totais por formato: viram uma estimativa marcada como tal.
function histOf(id) {
  const st = (ks) => ks.reduce((a, k) => [a[0] + S.stats[k].ok, a[1] + S.stats[k].n], [0, 0]);
  const rd = Object.entries(S.reads || {}).reduce((a, [tid, r]) => { const t = TEXTS.find((x) => x.id === tid); return t && (id === 'R') === (t.kind === 'leitura') ? [a[0] + r.ok, a[1] + r.n] : a; }, [0, 0]);
  const m = { L: st(['mus']).map((v, i) => v + rd[i]), R: st(['int']).map((v, i) => v + rd[i]), W: st(['intra']), voc: st(['esp', 'nat', 'cor']), gra: st(['log']) }[id];
  return m && m[1] >= ATT_MIN ? Math.round((m[0] / m[1]) * 100) : null;
}
function compRow(c) {
  const a = (S.att || {})[c.id] || { n: 0, r: [] }, has = a.n >= ATT_MIN, pct = has ? Math.round((a.r.reduce((x, y) => x + y, 0) / a.r.length) * 100) : 0, h = has ? null : histOf(c.id);
  return `<div class="mo-comp ${has ? '' : 'mo-nodata'}"><span class="mo-tile ${c.g === 'k' ? 'a' : ''}">${ic(c.i, 20)}</span>
    <div class="mo-ct"><div class="mo-cl1"><b>${c.n}</b>${has ? `<span class="mo-pct">${pct}%</span>` : ''}</div>
      ${has ? `<div class="bar"><i style="width:${pct}%"></i></div><small>acerto nas últimas ${a.r.length} · ${a.n} respostas no total</small>`
        : `<small>Ainda sem dados suficientes (${a.n} de ${ATT_MIN} respostas)${h !== null ? ` · estimativa do histórico antigo: ~${h}%` : ''}</small>`}
      <small class="mo-src">Vem de: ${c.fonte}</small></div></div>`;
}
function compWeakest() {
  const r = COMP.map((c) => { const a = (S.att || {})[c.id]; return a && a.n >= ATT_MIN ? { c, p: a.r.reduce((x, y) => x + y, 0) / a.r.length } : null; }).filter(Boolean).sort((x, y) => x.p - y.p);
  return r[0] || null;
}
const _perfil = perfil;
perfil = function () {
  _perfil();
  const h = app.querySelector('h1'); if (h) h.textContent = 'Perfil';
  // o radar e a explicação das inteligências saem do Perfil (continuam no motor)
  const cards = $$('.card', app).slice(0, 2); cards.forEach((el) => el.remove());
  const cur = currentDay(), d = cur && dayInfo(cur), wk = compWeakest(), done = nDone();
  const pos = d ? `${d.level} · Módulo ${d.w + 1} · ${d.review ? 'avaliação' : 'lição ' + (d.r + 1) + ' de ' + d.n}` : 'Trilha concluída';
  h.insertAdjacentHTML('afterend', `
  <div class="mo-pos card"><span class="mo-code">${LP.sigla}</span><div><b>${LP.nome} · Trilha ${d ? d.level : LAST_LV}</b><small>${pos} · ${done} de ${TOTAL} etapas</small></div>
    <p class="mut">A posição na trilha mostra o que você já estudou. Não é um nível de proficiência nem uma certificação.</p></div>
  <div class="mo-compgrid">
    <section class="card"><div class="mo-card-h">${ic('target', 22)}<h3>Competências</h3></div>
      <p class="mut mo-lead">O que você consegue fazer com o ${LP.lingua}.</p>${COMP.filter((c) => c.g === 'c').map(compRow).join('')}
      <p class="mut mo-foot2">Interação e mediação aparecem aqui quando houver atividades que as avaliem.</p></section>
    <section class="card"><div class="mo-card-h">${ic('puzzle', 22)}<h3>Conhecimento da língua</h3></div>
      <p class="mut mo-lead">A base que sustenta as competências.</p>${COMP.filter((c) => c.g === 'k').map(compRow).join('')}
      ${wk ? `<div class="mo-weak"><b>Ponto para reforçar: ${wk.c.n}</b><small>${Math.round(wk.p * 100)}% de acerto nas últimas respostas.</small><button class="pri" id="mWeak">Praticar ${wk.c.n.toLowerCase()} ${ic('arrow', 16)}</button></div>` : ''}
    </section>
  </div>
  <p class="mut mo-how">Como ler: a porcentagem é o acerto nas ${ATT_WIN} respostas mais recentes de cada competência e aparece a partir de ${ATT_MIN} respostas. XP e sequência medem dedicação, não domínio.</p>`);
  if ($('#mWeak')) $('#mWeak').onclick = () => (wk.c.pr === 'textos' ? go('extras', 'textos') : pratRun(PRAT.find((p) => p.id === wk.c.pr)));
};

/* ---------- Lição de "Ler e escrever" ---------- */
// Formato novo do A1–A2 redesenhado: um texto curto com perguntas (leq) e uma escrita guiada (lew).
// As perguntas contam como evidência de Leitura e a escrita como evidência de Escrita (ver compsOf).
// Com T.vozes, "Nome: fala" mostra o nome à parte e só a fala tem áudio (a voz de cada pessoa vem de data/vozes.js).
const leTextHTML = (T) => `<div class="mo-ltx">${T.paras.map((p) => {
  const { who, txt } = splitFala(p);
  if (who && T.vozes && T.vozes[who]) return `<p>${spk(txt)}<b class="twho">${esc(who)}:</b> <span lang="${LP.code}">${esc(txt)}</span></p>`;
  return `<p>${spk(p)}<span lang="${LP.code}">${esc(p)}</span></p>`;
}).join('')}</div>`;
GEN.leq = function (les, el, done, it) {
  const T = les.le.texto, q = T.qs[it.j], right = q.o[q.a];
  mcq(el, `<p class="q">${ic('book', 18)} Leia e responda <small class="mut">(${it.j + 1} de ${T.qs.length})</small></p>
    <div class="mo-lecard"><b>${esc(T.t)}</b>${leTextHTML(T)}</div><p class="q">${esc(q.q)}</p>`, shuffle(q.o.slice()), right,
    (ok) => done(ok, [], right, '', `<p>A resposta está no texto. Procure a linha que fala disso e compare: <b>${esc(right)}</b>.</p>`), 'col');
};
GEN.lew = function (les, el, done) {
  const E = les.le.escrita, rx = (s, f = 'iu') => new RegExp(s, f);
  el.innerHTML = `<p class="q">${ic('chat', 18)} ${esc(E.t)}</p><p class="hint">${esc(E.pede)}</p>
    <div class="mo-form">${E.campos.map((c, j) => `<label class="mo-fl"><span><b lang="${LP.code}">${esc(c.l)}</b><small>${esc(c.d)}</small></span><input data-f="${j}" autocomplete="off" spellcheck="false"><em class="mo-fe" data-e="${j}"></em></label>`).join('')}</div>
    ${UML}<button class="pri" id="lwChk">Conferir</button><div id="lwRes"></div>`;
  const ins = $$('[data-f]', el); let last = ins[0], tries = 0;
  ins.forEach((i) => (i.onfocus = () => { last = i; })); ins[0].focus(); wireUml(el, { get value() { return last.value; }, set value(v) { last.value = v; }, focus: () => last.focus() });
  $('#lwChk', el).onclick = () => {
    const errs = E.campos.map((c, j) => {
      const v = ins[j].value.trim();
      if (!v) return 'Preencha este campo.';
      const b = (c.bad || []).find(([re]) => rx(re, 'i').test(v)); if (b) return b[1];
      return rx(c.re, c.f || 'u').test(v) ? '' : c.err; // maiúsculas importam: só os campos com f: 'iu' ignoram
    });
    errs.forEach((e, j) => { $(`[data-e="${j}"]`, el).innerHTML = e ? '✗ ' + e : '✓'; ins[j].classList.toggle('bad', !!e); ins[j].classList.toggle('good', !e); });
    const bad = errs.filter(Boolean).length;
    if (bad && tries++ < 2) { $('#lwRes', el).innerHTML = `<p class="warn">Quase! Ajuste ${bad === 1 ? 'o campo marcado' : `os ${bad} campos marcados`} e confira de novo.</p>`; return; }
    ins.forEach((i) => (i.disabled = true)); $('#lwChk', el).disabled = true; $('#lwRes', el).innerHTML = '';
    done(!bad, [], bad ? 'Exemplo: ' + E.modelo : (E.ok || 'Ficha preenchida corretamente.'), '',
      `<p>O que faltou:</p><ul>${E.campos.map((c, j) => (errs[j] ? `<li><b>${esc(c.l)}</b>: ${errs[j]}</li>` : '')).join('')}</ul><p>Exemplo: ${esc(E.modelo)}</p>`);
  };
};
const _intro2 = intro;
intro = function (day) {
  _intro2(day);
  const d = dayInfo(day); if (d.review) return;
  const l = LESSONS[d.li];
  if (l.nova) $('.lhead h1', app)?.insertAdjacentHTML('afterend', '<span class="mo-new">Lição nova · protótipo</span>');
  if (!l.le) return;
  const T = l.le.texto, E = l.le.escrita;
  app.querySelector('.lhead').insertAdjacentHTML('afterend', `<div class="card mo-leplan"><div class="mo-card-h">${ic('book', 22)}<h3>Lição de ler e escrever</h3></div>
    <ol><li><b>Ler:</b> ${esc(T.t)}. ${esc(T.intro)} (${T.qs.length} perguntas)</li><li><b>Escrever:</b> ${esc(E.t)}.</li><li><b>Praticar</b> o vocabulário da lição.</li></ol></div>`);
  const st = $('#st'); if (st) st.textContent = 'Começar: ler, escrever e praticar';
};

/* ---------- Lição em etapas ---------- */
// A lição deixa de ser uma página única e vira 5 etapas: Ouvir → Entender → Palavras → Praticar → Ir além.
// A aula passo a passo é mostrada uma parte por vez (cada "# Passo" é uma tela). O conteúdo é o mesmo de antes:
// os blocos já desenhados pela lição são só redistribuídos. A etapa e a parte ficam salvas para retomar.
const LSTEP = [
  { t: 'Ouvir', i: 'headphones', min: '3 min' },
  { t: 'Entender', i: 'bulb', min: '10–15 min' },
  { t: 'Palavras', i: 'layers', min: '5 min' },
  { t: 'Praticar', i: 'target', min: '15 min' },
  { t: 'Ir além', i: 'compass', min: 'opcional' },
];
// ritmo do aluno, em minutos: média móvel por etapa (0, 2, 3) e por parte da aula ('p'); vale a partir de 2 medidas
const PACE_DEF = [3, 12, 5, 15, 0];
const paceOf = (k) => { const p = (S.pace || {})[k]; return p && p.n >= 2 ? p.m : null; };
const paceAdd = (k, min) => { if (!(min > 0.15 && min < 40)) return; S.pace = S.pace || {}; const p = (S.pace[k] = S.pace[k] || { n: 0, m: 0 }); p.m = p.n ? p.m * 0.7 + min * 0.3 : min; p.n++; };
// Palavras em grupos de 5, cada grupo com um jogo de pares; o vocabulário ampliado fica recolhido
function vocabGroupsEl(l, st) {
  const core = l.v.filter((v) => !v.x), ext = l.v.filter((v) => v.x), G = [];
  for (let i = 0; i < core.length; i += 5) G.push(core.slice(i, i + 5));
  if (G.length > 1 && G[G.length - 1].length < 3) G[G.length - 2].push(...G.pop());
  st.vg = st.vg || {}; let g = Math.min(st.vgI || 0, Math.max(0, G.length - 1));
  const el = elOf(`<div><div class="card mo-vgrp"></div>${ext.length ? `<details class="card mo-vext"><summary><b>Vocabulário ampliado</b> <span class="mut">${ext.length} palavras, opcional</span></summary><ul class="mo-vlist">${ext.map((v) => `<li>${spk(v.de)}<b class="${gcls(v.de)}" lang="${LP.code}">${esc(v.de)}</b><span>${esc(v.pt)}</span></li>`).join('')}</ul></details>` : ''}</div>`);
  const box = $('.mo-vgrp', el);
  if (!G.length) { box.remove(); return el; }
  const draw = () => {
    st.vgI = g; const ws = G[g];
    box.innerHTML = `<div class="mo-card-h">${ic('layers', 22)}<h3>Grupo ${g + 1} de ${G.length}</h3><span class="mo-dots">${G.map((_, k) => `<button data-vg="${k}" class="${k === g ? 'on' : st.vg[k] ? 'ok' : ''}" aria-label="Grupo ${k + 1}"></button>`).join('')}</span></div>
      <p class="mut">Ouça e repita cada palavra; depois teste o grupo num jogo rápido de pares. <small>Cores: <span class="g-m">der</span> · <span class="g-f">die</span> · <span class="g-n">das</span></small></p>
      <ul class="mo-vlist">${ws.map((v) => `<li>${spk(v.de)}<b class="${gcls(v.de)}" lang="${LP.code}">${esc(v.de)}</b><span>${v.em ? v.em + ' ' : ''}${esc(v.pt)}</span></li>`).join('')}</ul>
      <div class="mo-vgame"></div>
      <div class="row mo-vact"><button class="pri" type="button" data-vplay>${st.vg[g] ? 'Jogar de novo' : 'Testar este grupo'}</button>${g < G.length - 1 ? `<button class="ghost" type="button" data-vnext>Próximo grupo ${ic('arrow', 16)}</button>` : ''}</div>`;
    $$('[data-vg]', box).forEach((b) => (b.onclick = () => { g = +b.dataset.vg; draw(); }));
    if ($('[data-vnext]', box)) $('[data-vnext]', box).onclick = () => { g++; draw(); };
    $('[data-vplay]', box).onclick = () => game(ws);
  };
  const game = (ws) => {
    const area = $('.mo-vgame', box), L = shuffle(ws.slice()), R = shuffle(ws.slice()); let sel = null, left = ws.length, miss = 0;
    $('.mo-vlist', box).hidden = true; $('.mo-vact', box).hidden = true;
    area.innerHTML = `<p class="q">Ligue cada palavra à tradução</p><div class="mo-pairs"><div>${L.map((v) => `<button type="button" data-pl="${v.k}" lang="${LP.code}" class="${gcls(v.de)}">${esc(v.de)}</button>`).join('')}</div><div>${R.map((v) => `<button type="button" data-pr="${v.k}">${esc(v.pt)}</button>`).join('')}</div></div>`;
    $$('[data-pl]', area).forEach((b) => (b.onclick = () => { $$('[data-pl]', area).forEach((x) => x.classList.remove('sel')); sel = b; b.classList.add('sel'); say(ws.find((v) => v.k === b.dataset.pl).de); }));
    $$('[data-pr]', area).forEach((b) => (b.onclick = () => {
      if (!sel) return;
      if (sel.dataset.pl === b.dataset.pr) { [sel, b].forEach((x) => { x.classList.remove('sel'); x.classList.add('ok'); x.disabled = true; }); sel = null; if (!--left) fim(); }
      else { miss++; const a = sel; [a, b].forEach((x) => x.classList.add('no')); setTimeout(() => [a, b].forEach((x) => x.classList.remove('no')), 450); }
    }));
    const fim = () => { st.vg[g] = 1; save(); sfx('tarefa'); draw(); $('.mo-vgame', box).innerHTML = `<p class="mo-ok2">${ic('check', 16)} Grupo fixado${miss ? ` (${miss} ${miss === 1 ? 'troca' : 'trocas'} no caminho)` : ' de primeira'}!</p>`; };
  };
  draw();
  return el;
}
const lsGet = (day) => { S.lstep = S.lstep || {}; return (S.lstep[day] = S.lstep[day] || { s: 0, c: 0, seen: [0] }); };
const elOf = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };
const _intro3 = intro;
intro = function (day) {
  _intro3(day);
  const d = dayInfo(day); if (d.review) return;
  const l = LESSONS[d.li], kids = [...app.children], st = lsGet(day);
  const byH = (re) => kids.find((c) => c.matches('.card') && re.test((c.querySelector('h2,h3')?.textContent || '').trim()));
  const how = app.querySelector('details.how'), deep = app.querySelector('.card.deep'), resumo = byH(/^🧩/), bd = byH(/^🔎/), voc = byH(/^📚/), conv = byH(/^💬/);
  const plan = app.querySelector('.mo-leplan'), hw = app.querySelector('.card.hw'), stb = $('#st');
  const xh = kids.find((c) => c.tagName === 'H2' && /ir além/i.test(c.textContent)), xg = app.querySelector('.xgrid');
  const nw = voc && conv ? kids.slice(kids.indexOf(voc) + 1, kids.indexOf(conv)).filter((c) => c.matches('.card')) : [];
  // a aula em partes: cada passo, o esquema e o teste rápido viram uma tela
  const parts = []; let cur = null;
  [...(deep ? deep.children : [])].forEach((n) => {
    if (n.matches('h2.dh')) return;
    const head = n.matches('h3.step') ? n.textContent.trim() : n.matches('.quiz') ? (n.querySelector('h4')?.textContent || 'Teste rápido').trim() : null;
    if (head || !cur) { cur = { t: head || 'Introdução', nodes: [] }; parts.push(cur); }
    cur.nodes.push(n);
  });
  // parte sem texto (só as imagens, que carregam depois ou nem existem) junta com a seguinte
  for (let k = parts.length - 2; k >= 0; k--) if (parts[k].nodes.every((n) => n.matches('.limgs, figure'))) { parts[k + 1].nodes.unshift(...parts[k].nodes); parts.splice(k, 1); }
  // verificação rápida em cada passo: uma lacuna da lição que aparece naquele passo ou, se não houver,
  // montar uma das frases-exemplo do passo. Cada lacuna é usada uma vez só.
  const secs = {};
  (l.deep || '').split(/\n# /).slice(1).forEach((s) => { const [h, ...rest] = s.split('\n'); secs[norm(h.replace(/\*\*/g, ''))] = rest.join('\n'); });
  const usedCz = new Set(), escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  parts.forEach((p) => {
    const txt = secs[norm(p.t)]; if (txt == null) return;
    const low = norm(txt);
    const j = l.cz.findIndex((c, k) => !usedCz.has(k) && (low.includes(norm(fill(c))) || (norm(c.a).length >= 3 && new RegExp('(^| )' + escRe(norm(c.a)) + '( |$)').test(low))));
    if (j >= 0) { usedCz.add(j); p.chk = { cz: l.cz[j] }; return; }
    const ex = txt.split('\n').filter((x) => x.startsWith('~ ') && x.includes(' = ')).map((x) => { const k = x.indexOf(' = '); return { de: x.slice(2, k).replace(/\*\*/g, '').trim(), pt: x.slice(k + 3).replace(/\*\*/g, '').trim() }; })
      .filter((s) => { const n = s.de.split(' ').length; return n >= 3 && n <= 8 && !/[=·|]/.test(s.de); });
    if (ex.length) p.chk = { ord: ex[ex.length - 1] };
  });
  // celular: parte com mais de ~150 palavras vira duas ou mais telas, sem cortar um bloco no meio; a verificação fica na última
  if (innerWidth < 700) for (let k = parts.length - 1; k >= 0; k--) {
    const p = parts[k], wc = (n) => (n.textContent || '').split(/\s+/).filter(Boolean).length, isHead = (n) => n.matches('h3.step, .limgs');
    if (p.nodes.reduce((a, n) => a + wc(n), 0) <= 170) continue;
    const chunks = [[]]; let acc = 0;
    p.nodes.forEach((n) => { const w = wc(n), cur2 = chunks[chunks.length - 1]; if (acc + w > 150 && !isHead(n) && cur2.some((x) => !isHead(x))) { chunks.push([]); acc = 0; } chunks[chunks.length - 1].push(n); acc += w; });
    if (chunks.length > 1) parts.splice(k, 1, ...chunks.map((nodes, i) => ({ t: i ? p.t + ' (continuação)' : p.t, nodes, chk: i === chunks.length - 1 ? p.chk : null })));
  }
  // 1ª parte: visão geral da regra (o que é, quando usar, exemplos, por que aprender), antes de qualquer detalhe.
  // Texto em data/visao.js; sem ele, a regra resumida da lição (l.gx). Os exemplos são as frases de gramática (l.ge).
  {
    const vg = typeof VG !== 'undefined' ? VG[l.sid] : null;
    const vin = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, (m, w) => (isGerman(w) ? `<b class="sayw" data-say="${w}" title="Toque para ouvir">${w}</b>` : `<b>${w}</b>`));
    const sec = (k, v) => (v ? `<p class="mo-vgk">${k}</p><p>${vin(v)}</p>` : '');
    const exs = l.ge.length ? `<p class="mo-vgk">Exemplos</p><div class="exs mo-vgex">${l.ge.map((e) => `<p>${spk(e.de)}<span class="de" lang="${LP.code}">${esc(e.de)}</span><br><small>${esc(e.pt)}</small></p>`).join('')}</div>` : '';
    parts.unshift({ t: '🧭 Visão geral', nodes: [elOf(`<div class="mo-vg"><div class="mo-card-h">${ic('compass', 22)}<h3>Visão geral</h3><span class="mo-vgt">${esc(l.gt)}</span></div>
      ${vg ? sec('O que é', vg.o) + sec('Quando usar', vg.q) + exs + sec('Por que aprender', vg.p) : sec('A regra em poucas palavras', l.gx) + exs}
      <p class="mut mo-vgnext">Nas próximas partes, a regra passo a passo, com esquemas e exercícios rápidos.</p></div>`)] });
  }
  if (resumo || bd) parts.push({ t: '🧩 Resumo da lição', nodes: [resumo, bd].filter(Boolean), solta: true });
  if (!parts.length) parts.push({ t: 'Aula', nodes: [] });
  // estrutura nova
  const words = l.v.filter((v) => !v.x).length, ob = typeof OBJ !== 'undefined' ? OBJ[l.sid] : null;
  const box = elOf(`<div class="mo-ls"><nav class="mo-steps2" aria-label="Etapas da lição">${LSTEP.map((x, k) => `<button data-ls="${k}"><span class="mo-sn">${k + 1}</span><span><b>${x.t}</b><small>${x.min}</small></span></button>`).join('')}</nav>
    <div class="mo-ltools"><span class="mo-left"></span><span class="mo-speed" role="group" aria-label="Velocidade do áudio">${ic('headphones', 16)} Áudio <button type="button" data-sp="1">Normal</button><button type="button" data-sp="0">Devagar</button></span></div>
    <div class="mo-lp" data-lp="0"><div class="card mo-lsum">${ob ? `<div class="mo-obj1"><span class="mo-pend">objetivo · rascunho</span><b>${esc(ob.o)}</b></div>` : ''}<div class="mo-card-h">${ic('headphones', 22)}<h3>Comece ouvindo</h3></div>
      <p>Nesta lição: <b>${esc(l.pt)}</b> · ${esc(l.gt)} · ${words} palavras novas.</p>
      <p class="mut">Para cada fala da conversa: ouça (🔊), repita em voz alta (🎤) e só depois confira a tradução, que se abre quando você termina de falar. Sem microfone, toque na tradução para ver. A explicação vem na próxima etapa.</p></div></div>
    <div class="mo-lp" data-lp="1"><div class="mo-partnav"></div></div>
    <div class="mo-lp" data-lp="2"><p class="mut mo-lhint">Toque em 🔊, ouça e repita cada palavra em voz alta. Elas entram nas suas cartas de revisão quando você praticar.</p></div>
    <div class="mo-lp" data-lp="3"><div class="card mo-cola"><div class="mo-card-h">${ic('bulb', 22)}<h3>Antes de praticar, relembre</h3></div><p>${esc(l.gx)}</p>
      <p class="mut">${l.le ? 'Primeiro as perguntas do texto e a escrita, depois exercícios do vocabulário.' : '14 exercícios em formatos variados.'} Cerca de 15 minutos. Os erros voltam no fim para uma nova chance.</p></div></div>
    <div class="mo-lp" data-lp="4"></div>
    <div class="mo-lnav"><button class="ghost" id="lsPrev">${ic('chevron', 16, 'flip')} Voltar</button><button class="pri" id="lsNext"></button></div></div>`);
  const P = (k) => box.querySelector(`[data-lp="${k}"]`);
  if (plan) P(0).append(plan);
  if (conv) {
    // tradução escondida: o aluno tenta entender primeiro e toca na fala para conferir
    conv.classList.add('mo-hidept');
    const bs = $$('.bubble small', conv);
    bs.forEach((sm) => { sm.tabIndex = 0; sm.setAttribute('role', 'button'); sm.setAttribute('aria-label', 'Mostrar tradução'); });
    conv.querySelector('h3')?.insertAdjacentHTML('beforeend', '<button class="link mo-ptall" type="button">Mostrar todas as traduções</button>');
    const all = $('.mo-ptall', conv);
    const upd = () => { const n = bs.filter((x) => x.classList.contains('on')).length; all.textContent = n === bs.length ? 'Esconder as traduções' : 'Mostrar todas as traduções'; };
    const tog = (sm, on = !sm.classList.contains('on')) => { sm.classList.toggle('on', on); sm.setAttribute('aria-label', on ? 'Esconder tradução' : 'Mostrar tradução'); };
    bs.forEach((sm) => {
      sm.onclick = (e) => { e.stopPropagation(); tog(sm); upd(); };
      sm.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tog(sm); upd(); } };
    });
    all.onclick = () => { const open = bs.every((x) => x.classList.contains('on')); bs.forEach((x) => tog(x, !open)); upd(); };
    // fala guiada: cada fala ganha o microfone; ao terminar de falar (ou pular), a tradução daquela fala se abre
    $$('.bubble', conv).forEach((bb) => { const de = bb.querySelector('.de')?.textContent || '', pt = bb.querySelector('small')?.textContent || ''; bb.querySelector('.spk')?.insertAdjacentHTML('afterend', micBtn(sayText(de), pt)); });
    const reveal = (e) => { const bb = e.target.closest('.fala')?.previousElementSibling, sm = bb && bb.matches('.bubble') ? bb.querySelector('small') : null; if (sm) { tog(sm, true); upd(); } };
    conv.addEventListener('fala', reveal); conv.addEventListener('falaskip', reveal);
    P(0).append(conv);
  }
  if (how) { how.open = false; P(0).append(how); }
  parts.forEach((p, k) => {
    const el = elOf(`<div class="mo-part" data-part="${k}"></div>`);
    if (p.solta) el.append(...p.nodes);
    else { const c = elOf('<div class="card deep mo-partcard"></div>'); c.append(...p.nodes); el.append(c); }
    if (p.chk) {
      const box2 = elOf(`<div class="card mo-verif"><div class="mo-card-h">${ic('target', 20)}<h3>Verifique o que entendeu</h3><small class="mut">sem nota, só para fixar</small></div><div class="mo-chkq"></div><div class="mo-chkr"></div></div>`);
      const q = $('.mo-chkq', box2), r = $('.mo-chkr', box2);
      const res = (ok, right, why) => { r.innerHTML = ok ? `<p class="mo-ok2">${ic('check', 16)} Isso mesmo!</p>` : `<p class="mo-no2">Resposta: <b>${esc(right)}</b></p>${why ? `<p class="mut">${esc(why)}</p>` : ''}`; if (ok) sfx('tarefa'); };
      if (p.chk.cz) { const c = p.chk.cz; mcq(q, `<p class="q">Complete:<b>${esc(c.q)}</b></p>`, shuffle([c.a, ...c.w]), (o) => czOk(c, o), (ok) => res(ok, fill(c), c.why), ''); }
      else order(q, p.chk.ord, (ok) => res(ok, p.chk.ord.de, ''));
      el.append(box2);
    }
    P(1).append(el);
  });
  P(2).append(vocabGroupsEl(l, st)); nw.forEach((n) => P(2).append(n));
  if (stb) { stb.addEventListener('click', () => { st.pt0 = Date.now(); save(); }); P(3).append(stb); } // mede o tempo real da prática
  // Ir além enxuto: uma tarefa sugerida (a primeira ainda não feita); as outras e os conteúdos ficam recolhidos
  if (hw) {
    const ts = $$('.hwt', hw), fst = ts.find((t) => !t.classList.contains('ok')) || ts[0];
    ts.forEach((t) => { if (t !== fst) t.hidden = true; });
    const pm = hw.querySelector('p.mut'); if (pm) pm.textContent = 'Uma sugestão para levar o ' + LP.lingua + ' para o seu dia. Faça hoje ou amanhã e marque aqui.';
    if (ts.length > 1) { const more = elOf(`<button class="link mo-hwmore" type="button">Ver as outras ${ts.length - 1} opções</button>`); more.onclick = () => { ts.forEach((t) => (t.hidden = false)); more.remove(); }; hw.append(more); }
    P(4).append(hw);
  }
  if (xg && xg.children.length) { const det = elOf(`<details class="card mo-xmore"><summary><b>Conteúdos para ir além</b> <span class="mut">${xg.children.length} ${xg.children.length === 1 ? 'sugestão' : 'sugestões'}</span></summary></details>`); det.append(xg); P(4).append(det); }
  if (!P(4).children.length) P(4).append(elOf('<p class="mut">Nada extra nesta lição.</p>'));
  const lhead = app.querySelector('.lhead');
  [...app.children].forEach((c) => { if (c !== lhead && !c.matches('.back') && c !== box) c.remove(); });
  lhead.after(box);
  // navegação
  const last = parts.length - 1;
  const est = (k) => (k === 1 ? (paceOf('p') ? paceOf('p') * parts.length : PACE_DEF[1]) : paceOf(k) || PACE_DEF[k]);
  const mine = (k) => !!(k === 1 ? paceOf('p') : paceOf(k));
  const show = (s, c, scroll = true) => {
    // ritmo real: o tempo em cada etapa (e em cada parte da aula) alimenta as estimativas das próximas lições
    const now = Date.now();
    if (box._t != null) { const m = (now - box._t) / 60000; if (box._s === 1) paceAdd('p', m); else if (box._s !== 3) paceAdd(box._s, m); }
    box._t = now; box._s = s;
    st.s = s; st.c = Math.max(0, Math.min(last, c)); if (!st.seen.includes(s)) st.seen.push(s); save();
    $$('[data-ls] small', box).forEach((sm, k) => { sm.textContent = k === 4 ? 'opcional' : `~${Math.max(1, Math.round(est(k)))} min`; sm.classList.toggle('mo-real', mine(k)); sm.title = mine(k) ? 'Pelo seu ritmo nas lições anteriores' : 'Estimativa inicial'; });
    const left = S.done[day] ? 0 : [0, 1, 2, 3].reduce((a, k) => a + (k < s ? 0 : k === 1 && s === 1 ? est(1) * (parts.length - st.c) / parts.length : est(k)), 0);
    $('.mo-left', box).innerHTML = S.done[day] ? `${ic('check', 16)} Lição concluída` : `${ic('clock', 16)} Faltam cerca de ${Math.max(1, Math.round(left))} min${[0, 1, 2, 3].some(mine) ? ' <small>(pelo seu ritmo)</small>' : ''}`;
    $$('[data-sp]', box).forEach((b) => b.classList.toggle('on', (b.dataset.sp === '0') === !!S.slow));
    $$('[data-lp]', box).forEach((p) => (p.hidden = +p.dataset.lp !== s));
    $$('[data-part]', box).forEach((p) => (p.hidden = +p.dataset.part !== st.c));
    $$('[data-ls]', box).forEach((b) => { const k = +b.dataset.ls; b.classList.toggle('on', k === s); b.classList.toggle('ok', k !== s && (k === 3 ? !!S.done[day] : st.seen.includes(k) && k < Math.max(...st.seen))); b.setAttribute('aria-current', k === s ? 'step' : 'false'); });
    $('.mo-partnav', box).innerHTML = `<span>Parte ${st.c + 1} de ${parts.length}</span><span class="mo-dots">${parts.map((p, k) => `<button data-pd="${k}" class="${k === st.c ? 'on' : k < st.c ? 'ok' : ''}" aria-label="${esc(p.t)}" title="${esc(p.t)}"></button>`).join('')}</span>`;
    $$('[data-pd]', box).forEach((b) => (b.onclick = () => show(1, +b.dataset.pd)));
    const nx = $('#lsNext', box), pv = $('#lsPrev', box);
    pv.style.visibility = s === 0 ? 'hidden' : '';
    nx.hidden = s === 4;
    nx.innerHTML = s === 1 && st.c < last ? `Próxima parte ${ic('arrow', 16)}` : s === 3 ? `Pular para Ir além ${ic('arrow', 16)}` : s < 4 ? `Ir para ${LSTEP[s + 1].t} ${ic('arrow', 16)}` : '';
    nx.className = s === 3 ? 'ghost' : 'pri'; // na etapa Praticar, o botão principal é o de começar os exercícios
    if (scroll) box.scrollIntoView({ block: 'start', behavior: 'instant' });
  };
  $$('[data-sp]', box).forEach((b) => (b.onclick = () => { S.slow = b.dataset.sp === '0'; save(); $$('[data-sp]', box).forEach((x) => x.classList.toggle('on', x === b)); }));
  $$('[data-ls]', box).forEach((b) => (b.onclick = () => { const k = +b.dataset.ls; show(k, k === 1 && st.s === 1 ? st.c : 0); }));
  $('#lsNext', box).onclick = () => (st.s === 1 && st.c < last ? show(1, st.c + 1) : show(st.s + 1, 0));
  $('#lsPrev', box).onclick = () => (st.s === 1 && st.c > 0 ? show(1, st.c - 1) : show(st.s - 1, st.s - 1 === 1 ? last : 0));
  show(Math.min(st.s, 4), st.c, false);
};

/* ---------- Conclusão que ensina ---------- */
// Cada erro da sessão aponta para onde ele é explicado: o passo da aula (pelas palavras da resposta certa),
// as palavras da lição ou a conversa. As cartas das palavras erradas voltam já no dia seguinte.
const RV_STOP = new Set(['der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine', 'einen', 'einem', 'einer', 'und', 'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'nicht', 'mit', 'auf', 'ist', 'sind', 'bin', 'bist', 'hat', 'habe', 'hast', 'aus', 'von', 'fuer', 'auch', 'noch', 'sehr', 'gern', 'bitte', 'heute']);
const deepSecs = (l) => (l.deep || '').split(/\n# /).slice(1).map((s) => { const [h, ...r] = s.split('\n'); return { t: h.replace(/\*\*/g, '').trim(), txt: ' ' + norm(r.join(' ')) + ' ' }; });
function revTarget(e) {
  const l = LESSONS[e.li];
  if (e.k === 'leq' || e.k === 'lew') return null;
  if (['esp', 'nat', 'cor'].includes(e.k) || (e.k === 'lin' && (e.keys || []).length)) return { s: 2, label: 'Rever as palavras' };
  if (e.k === 'int' || e.k === 'mus') return { s: 0, label: 'Ouvir a conversa de novo' };
  const ansN = norm(String(e.ans || '').split(' = ')[0].replace(/<[^>]+>/g, ' '));
  // se o erro foi numa lacuna, o que importa é a palavra da lacuna; senão, as palavras da resposta certa
  const cz = l.cz.find((c) => ansN.startsWith(norm(fill(c))));
  const toks = cz ? norm(cz.a).split(' ').filter(Boolean) : [...new Set(ansN.split(' ').filter((w) => w.length >= 3 && !RV_STOP.has(w)))];
  // peso: palavra rara entre os passos vale mais (um passo de revisão que cita tudo não ganha sempre);
  // palavra do resumo da regra vale o dobro; no empate, vence o passo anterior
  const secs = deepSecs(l), gx = ' ' + norm(l.gx || '') + ' ';
  const wt = (w) => (gx.includes(' ' + w + ' ') ? 2 : 1) / Math.max(1, secs.filter((s) => s.txt.includes(' ' + w + ' ')).length);
  let best = null, bs = 0;
  secs.forEach((sec) => { const sc = toks.filter((w) => sec.txt.includes(' ' + w + ' ')).reduce((a, w) => a + wt(w), 0); if (sc > bs + 1e-9) { bs = sc; best = sec; } });
  return best ? { s: 1, go: best.t, label: 'Rever: ' + best.t } : { s: 1, go: 'resumo', label: 'Rever o resumo da regra' };
}
const errText = (e) => (['esp', 'nat', 'cor'].includes(e.k) && (e.keys || []).length ? e.keys.slice(0, 4).map((k) => vocab(k).de).join(' · ') : String(e.ans || '').replace(/<[^>]+>/g, '').slice(0, 110));
const _finish = finish;
finish = function () {
  const s = sess; _finish();
  if (!s) return;
  const errs = s.errs || [], tm = new Date(); tm.setHours(24, 0, 0, 0);
  const keys = [...new Set(errs.flatMap((e) => e.keys || []))].filter((k) => S.cards[k]);
  keys.forEach((k) => { S.cards[k].due = Math.min(S.cards[k].due, tm.getTime()); });
  if (keys.length) save();
  const seen = new Set(), rows = [];
  errs.forEach((e) => { const id = e.li + '|' + errText(e); if (seen.has(id)) return; seen.add(id); rows.push({ e, t: revTarget(e) }); });
  const html = rows.length
    ? `<div class="card mo-concl"><div class="mo-card-h">${ic('bulb', 22)}<h3>O que rever desta sessão</h3><small class="mut">${rows.length} ${rows.length === 1 ? 'ponto' : 'pontos'}</small></div>
      <p class="mut">A resposta certa de cada erro e onde ela é explicada.</p>
      ${rows.slice(0, 6).map((r, i) => `<div class="mo-crow"><span><b lang="${LP.code}">${esc(errText(r.e))}</b>${s.kind !== 'lesson' ? `<small>${esc(LESSONS[r.e.li].de)}</small>` : ''}</span>${r.t ? `<button class="ghost" data-rev="${i}">${esc(r.t.label)} ${ic('arrow', 14)}</button>` : ''}</div>`).join('')}
      ${keys.length ? `<p class="mut mo-cnext">${ic('layers', 16)} ${keys.length} ${keys.length === 1 ? 'palavra que você errou volta' : 'palavras que você errou voltam'} na revisão de cartas amanhã.</p>` : ''}</div>`
    : `<div class="card mo-concl"><div class="mo-card-h">${ic('check', 22)}<h3>Nada para rever</h3></div><p class="mut">Você não errou nenhum exercício nesta sessão.</p></div>`;
  app.querySelector('.stats')?.insertAdjacentHTML('afterend', html);
  // autoavaliação do objetivo "consigo…": fica guardada à parte e não entra no acerto das competências (decisão 10)
  const ob = s.kind === 'lesson' && typeof OBJ !== 'undefined' ? OBJ[s.ctxs[0].sid] : null;
  if (ob) {
    const sid = s.ctxs[0].sid, prev = (S.auto || {})[sid];
    app.querySelector('.stats').insertAdjacentHTML('afterend', `<div class="card mo-auto"><div class="mo-card-h">${ic('target', 22)}<h3>Autoavaliação</h3><small class="mut">não vale nota</small></div>
      <p class="mo-obj2">Objetivo: ${esc(ob.o)}</p><p><b>${esc(ob.a)}</b></p>
      <div class="row"><button class="pri" type="button" data-au="sim">Já consigo</button><button type="button" data-au="nao">Ainda não</button></div><div class="mo-aur">${prev ? `<p class="mut">Da última vez você marcou: ${prev.r === 'sim' ? 'já consigo' : 'ainda não'}.</p>` : ''}</div></div>`);
    $$('[data-au]', app).forEach((b) => (b.onclick = () => {
      const r = b.dataset.au; S.auto = S.auto || {}; S.auto[sid] = { r, d: today() }; save();
      $$('[data-au]', app).forEach((x) => { x.disabled = true; x.classList.toggle('sel', x === b); });
      $('.mo-aur', app).innerHTML = r === 'sim' ? `<p class="mo-ok2">${ic('check', 16)} Registrado. Esse objetivo aparece como alcançado na tela do módulo.</p>`
        : `<p>Sem problema: é para isso que serve. Reveja a aula e faça a prática de novo amanhã.</p><button class="ghost" type="button" id="auRev">Rever a aula ${ic('arrow', 14)}</button>`;
      if ($('#auRev', app)) $('#auRev', app).onclick = () => { const day = LDAY[s.ctxs[0].i], st = lsGet(day); st.goS = 1; st.go = null; go('intro', day); };
    }));
  }
  $$('[data-rev]', app).forEach((b) => (b.onclick = () => { const r = rows[+b.dataset.rev], day = LDAY[r.e.li], st = lsGet(day); st.goS = r.t.s; st.go = r.t.go || null; go('intro', day); }));
};

/* ---------- Aquecimento: revisão da lição anterior no começo ---------- */
// 3 perguntas rápidas (2 palavras e 1 lacuna) da lição anterior da trilha, uma vez por lição, antes da conversa nova.
const _intro4 = intro;
intro = function (day) {
  _intro4(day);
  const d = dayInfo(day); if (d.review) return;
  const st = lsGet(day);
  if (st.goS != null) { // veio da conclusão: abre direto no ponto a rever
    const s = st.goS, g = st.go; delete st.goS; delete st.go;
    $(`[data-ls="${s}"]`)?.click();
    if (s === 1 && g) { const ps = $$('[data-part]'), k = g === 'resumo' ? ps.length - 1 : ps.findIndex((p) => norm(p.querySelector('h3.step')?.textContent || '') === norm(g)); if (k >= 0) $(`[data-pd="${k}"]`)?.click(); }
    return;
  }
  const pi = d.li - 1, pl = LESSONS[pi];
  if (st.warm || S.done[day] || !pl || !S.done[LDAY[pi]] || st.s !== 0) return;
  const due = (v) => (S.cards[v.k] ? S.cards[v.k].due : Infinity);
  const vs = pl.v.filter((v) => !v.x).sort((a, b) => due(a) - due(b)).slice(0, 2);
  const qs = [...vs.map((v) => ({ v })), ...(pl.cz.length ? [{ c: pick(pl.cz) }] : [])];
  if (!qs.length) return;
  const card = elOf(`<div class="card mo-warm"><div class="mo-card-h">${ic('flame', 22)}<h3>Aquecimento · 1 min</h3><button class="link mo-wskip" type="button">Pular</button></div>
    <p class="mut">${qs.length} perguntas da lição anterior, <b lang="${LP.code}">${esc(pl.de)}</b>, para lembrar antes de começar.</p><div class="mo-wq"></div><div class="mo-wr"></div></div>`);
  $('[data-lp="0"]').prepend(card);
  let i = 0, hits = 0;
  const end = () => { st.warm = true; save(); $('.mo-wq', card).innerHTML = ''; $('.mo-wr', card).innerHTML = `<p><b>${hits} de ${qs.length}</b> certas. ${hits === qs.length ? 'A lição anterior está firme.' : 'O que você errou volta nas cartas.'}</p>`; $('.mo-wskip', card).remove(); };
  const next = () => {
    if (i >= qs.length) return end();
    const q = qs[i], el = $('.mo-wq', card); $('.mo-wr', card).innerHTML = '';
    const after = (ok, right, comp, k) => {
      if (ok) { hits++; sfx('tarefa'); } else if (k && S.cards[k]) { const tm = new Date(); tm.setHours(24, 0, 0, 0); S.cards[k].due = Math.min(S.cards[k].due, tm.getTime()); }
      logAtt([comp], ok);
      $('.mo-wr', card).innerHTML = ok ? `<p class="mo-ok2">${ic('check', 16)} Isso!</p>` : `<p class="mo-no2">Resposta: <b>${esc(right)}</b></p>`;
      i++; setTimeout(() => { if (card.isConnected) next(); }, ok ? 700 : 1600);
    };
    if (q.v) { const opts = shuffle([q.v.pt, ...sample(pl.v.filter((x) => x !== q.v && x.pt !== q.v.pt), 2).map((x) => x.pt)]); mcq(el, `<p class="q">${i + 1}/${qs.length} · O que significa esta palavra?<b lang="${LP.code}" class="${gcls(q.v.de)}">${esc(q.v.de)}</b></p>`, opts, q.v.pt, (ok) => after(ok, q.v.pt, 'voc', q.v.k)); }
    else mcq(el, `<p class="q">${i + 1}/${qs.length} · Complete: <b lang="${LP.code}">${esc(q.c.q)}</b></p>`, shuffle([q.c.a, ...q.c.w]), (o) => czOk(q.c, o), (ok) => after(ok, fill(q.c), 'gra'));
  };
  $('.mo-wskip', card).onclick = () => { st.warm = true; save(); card.remove(); };
  next();
};

/* ---------- Tamanho do texto (Perfil › Ajustes) ---------- */
const applyFs = () => { document.documentElement.dataset.fs = S.fs === 'g' ? 'g' : ''; };
applyFs();
const _perfil2 = perfil;
perfil = function () {
  _perfil2();
  const h = [...app.querySelectorAll('h2')].find((x) => /Ajustes/.test(x.textContent)), card = h && h.nextElementSibling;
  if (!card) return;
  card.insertAdjacentHTML('afterbegin', `<div class="mo-fsrow"><span><b>Tamanho do texto</b><small>Para ler as aulas com conforto no celular.</small></span><span class="mo-seg" role="group" aria-label="Tamanho do texto"><button type="button" data-fs="">Normal</button><button type="button" data-fs="g">Grande</button></span></div>`);
  const upd = () => $$('[data-fs]', card).forEach((b) => b.classList.toggle('on', b.dataset.fs === (S.fs === 'g' ? 'g' : '')));
  $$('[data-fs]', card).forEach((b) => (b.onclick = () => { S.fs = b.dataset.fs; save(); applyFs(); upd(); }));
  upd();
};

// app.js já desenhou a primeira tela com a versão antiga: redesenha com a camada MODO.
go(view === "run" ? "home" : view);
