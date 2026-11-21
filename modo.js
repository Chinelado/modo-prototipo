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
let mGid = 0;
const modoLogo = (s = 30) => { const id = 'mg' + ++mGid; return `<svg viewBox="0 0 48 40" width="${s}" height="${Math.round(s * 0.83)}" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7A5CFF"/><stop offset=".55" stop-color="#A55BEF"/><stop offset="1" stop-color="#FF6BA6"/></linearGradient></defs><path d="M7 33V9.5L24 25 41 9.5V33" fill="none" stroke="url(#${id})" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/></svg>`; };

/* ---------- navegação ---------- */
const MODO_NAV = [['home', 'home', 'Hoje'], ['trilha', 'book', 'Aprender'], ['praticar', 'target', 'Praticar'], ['extras', 'compass', 'Explorar'], ['cards', 'layers', 'Cartas'], ['perfil', 'user', 'Perfil']];
const NAV_OF = { intro: 'trilha', guide: 'trilha', nivel: 'trilha', pocket: 'extras', texto: 'extras' };
function modoNav(v, due) {
  const on = NAV_OF[v] || v;
  return `<div class="brand">${modoLogo(30)}MODO</div>` +
    MODO_NAV.map(([id, i, n], k) => `${k === 5 ? '<div class="mo-sep"></div>' : ''}<button data-v="${id}" class="${id === on ? 'on' : ''}">${ic(i, 20)}<span>${n}</span>${id === 'cards' && due ? `<em>${due}</em>` : ''}</button>`).join('') +
    `<div class="mo-lang"><span class="mo-code">DE</span>Alemão<small>${curLevel()}</small></div>
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
  else if (d) H = { e: `${d.level} · Semana ${d.w + 1} · Dia ${cur} de ${TOTAL}`, t: d.review ? `Checkpoint da semana ${d.w + 1}` : L.de, meta: [['clock', d.review ? '25–35 min' : '30–45 min'], ['book', d.review ? 'Revisão das 6 lições da semana' : L.pt + ' · ' + L.gt]], cta: m.lesson ? 'Adiantar o próximo dia' : 'Continuar a lição', act: () => go('intro', cur) };
  else H = { e: 'Trilha concluída', t: 'Todas as lições feitas', meta: [['layers', 'Mantenha as cartas em dia']], cta: 'Revisar cartas', act: () => go('cards') };
  const sug = homeSuggestion(due);
  const pk = POCKETS.filter((p) => !(S.pockets || {})[p.id]).slice(0, 3);
  const chk = (ok, t) => `<div class="mo-check ${ok ? 'ok' : ''}"><span class="mo-box">${ok ? ic('check', 14) : ''}</span><span>${t}</span></div>`;
  app.innerHTML = `<div class="mo-hello"><h1>Olá${S.name ? ', ' + esc(S.name) : ''}!</h1><p>${nDone() ? 'Que bom te ver de volta. Vamos continuar?' : 'Vamos dar o primeiro passo?'}</p></div>
  <section class="mo-hero"><svg class="mo-deco" viewBox="0 0 48 40" aria-hidden="true"><path d="M7 33V9.5L24 25 41 9.5V33" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>
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
  <div class="mo-explore">${pk.map((p) => `<button class="mo-ex" data-pk="${p.id}"><span class="mo-tile">${ic('compass', 22)}</span><span><b>${esc(p.t)}</b><small>${esc(p.pt)} · ${p.lv}</small></span>${ic('chevron', 18, 'arr')}</button>`).join('')}</div>` : ''}
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
const aprTabs = (on) => `<div class="mo-tabs"><button data-apr="trilha" class="${on === 'trilha' ? 'on' : ''}">Trilha A1–C2</button><button data-apr="guide" class="${on === 'guide' ? 'on' : ''}">Comece aqui e dicionário</button></div>`;
const wireApr = () => $$('[data-apr]').forEach((b) => (b.onclick = () => go(b.dataset.apr)));
const _trilha = trilha;
trilha = function (lv) { _trilha(lv); const h = app.querySelector('h1'); if (h) { h.textContent = 'Aprender'; h.insertAdjacentHTML('afterend', aprTabs('trilha')); wireApr(); } };
const _guide = guide;
guide = function (id) { _guide(id); if (id) return; const h = app.querySelector('h1'); if (h) { h.textContent = 'Aprender'; h.insertAdjacentHTML('afterend', aprTabs('guide')); wireApr(); } };

/* ---------- Explorar ---------- */
const _extras = extras;
extras = function (arg) { _extras(arg); const h = app.querySelector('h1'); if (h) { h.textContent = 'Explorar'; if (!app.querySelector('.mo-sub')) h.insertAdjacentHTML('afterend', '<p class="mut mo-sub">Situações reais, leitura e conteúdos para usar o alemão fora da trilha.</p>'); } };

/* ---------- boas-vindas: idioma → nível → começar ---------- */
const LANGS = [['DE', 'Alemão', 'A1 a C2 · 210 lições', true], ['EN', 'Inglês', 'em preparação', false], ['ES', 'Espanhol', 'em preparação', false], ['FR', 'Francês', 'em preparação', false], ['IT', 'Italiano', 'em preparação', false]];
onboard = function (step = 1) {
  const steps = `<div class="mo-steps">${[1, 2, 3].map((i) => `<i class="${i <= step ? 'on' : ''}"></i>`).join('')}</div>`;
  if (step === 1) {
    app.innerHTML = `<div class="mo-ob"><section class="mo-hero"><span class="mo-brand">${modoLogo(28)}MODO</span>
      <h1>Aprenda idiomas no seu ritmo.</h1><p>Um método completo, prático e conectado à vida real: aulas guiadas, prática variada, revisão na hora certa e situações do dia a dia.</p>
      <div class="row" style="margin-top:14px"><button class="mo-cta" id="ob1">Começar ${ic('arrow', 18)}</button></div></section></div>`;
    $('#ob1').onclick = () => onboard(2); return;
  }
  if (step === 2) {
    app.innerHTML = `<div class="mo-ob">${steps}<h1>Qual idioma você quer aprender?</h1>
      ${LANGS.map(([c, n, d, ok]) => `<button class="mo-opt ${ok ? 'on' : ''}" ${ok ? 'data-lang="' + c + '"' : 'disabled'}><span class="mo-code">${c}</span><span><b>${n}</b><small>${d}</small></span>${ok ? `<span class="mo-ok">${ic('check', 20)}</span>` : '<span class="mo-soon">em breve</span>'}</button>`).join('')}
      <button class="pri big" id="ob2">Continuar ${ic('arrow', 18)}</button></div>`;
    $('#ob2').onclick = () => onboard(3); return;
  }
  app.innerHTML = `<div class="mo-ob">${steps}<h1>Qual é o seu nível de alemão?</h1><p class="mut">Isso define por onde a sua trilha começa.</p>
    <button class="mo-opt on" data-lv="zero"><span class="mo-code">A1</span><span><b>Estou começando do zero</b><small>Começo pelas aulas curtas do Comece aqui.</small></span><span class="mo-ok">${ic('check', 20)}</span></button>
    <button class="mo-opt" data-lv="teste"><span class="mo-code">?</span><span><b>Já sei um pouco</b><small>Faço o teste de nível para pular o que já sei.</small></span><span class="mo-ok"></span></button>
    <label class="mo-f" for="nm">Como posso te chamar?</label><input id="nm" placeholder="Seu nome" maxlength="30" value="${esc(S.name || '')}">
    <label class="mo-f" for="goal">Quanto tempo por dia?</label><select id="goal"><option value="15">15 min · leve</option><option value="30" selected>30 min · constante</option><option value="60">60 min · firme</option><option value="120">2 horas · intenso</option></select>
    <button class="pri big" id="ob3">Começar ${ic('arrow', 18)}</button></div>`;
  let lvSel = 'zero';
  $$('[data-lv]').forEach((b) => (b.onclick = () => { lvSel = b.dataset.lv; $$('[data-lv]').forEach((x) => { const on = x === b; x.classList.toggle('on', on); x.querySelector('.mo-ok').innerHTML = on ? ic('check', 20) : ''; }); }));
  $('#ob3').onclick = () => { S.name = $('#nm').value.trim(); S.goal = +$('#goal').value; S.start = today(); save(); go(lvSel === 'teste' ? 'nivel' : 'home'); };
};

// app.js já desenhou a primeira tela com a versão antiga: redesenha com a camada MODO.
go(view === "run" ? "home" : view);
