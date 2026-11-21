/* Mais facilitações interativas (esquemas de data/visuals.js e do guia):
   Z  linha do tempo dos tempos verbais      "Z:título;foco;lição"  (foco = id em ZEITEN; lição = índice da lição atual)
   W  trem do vagão 2 (montar a frase)       "W:título;frase;frase…" com vagões separados por | e "= tradução"
                                             *verbo conjugado  @pronome sujeito  ^fecha a frase (particípio, infinitivo, prefixo)
   A  tabela de declinação que acende        "A:título;tipo;casos"  (tipo der|ein|zero; casos ex.: nad, nadg)
   B  carta oficial clicável                 "B:título"
   G  medidor de certeza                     "G:título;jetzt|past"
   Textos com áudio em data/interativos.js; sayBtn/setSay vêm de interativo.js. */

const dayOfLesson = (li) => LDAY[LBYSID[String(li)].i];
const pickOne = (a) => a[Math.floor(Math.random() * a.length)];

/* ---------- Z: linha do tempo ---------- */
function zeitHTML(title, focus, li) {
  const f = ZEITEN.find((z) => z.id === focus) || ZEITEN[0], cur = isNaN(+li) ? f.li : +li;
  const chip = (z) => `<button type="button" class="zt-chip ${z.row ? 'row-' + z.row : ''} ${z.li <= cur ? 'lit' : 'lock'}" style="left:${z.pos}%" data-zt="${z.id}" title="${esc(z.n)}">${z.li <= cur ? '' : '🔒 '}${esc(z.c)}</button>`;
  return `<div class="vbox ivis"><div class="vt">⏳ ${inl(title)}</div>
  <div class="zeit" data-cur="${cur}" data-sel="${f.id}">
    <div class="zt-track"><div class="zt-line"></div><div class="zt-now" style="left:53%"><span>agora</span></div>
      <span class="zt-end l">passado</span><span class="zt-end r">futuro</span>${ZEITEN.map(chip).join('')}</div>
    <div class="zt-detail"></div>
    <details class="zt-all"><summary>O mesmo verbo em todos os tempos que você já viu</summary><div class="zt-rows"></div></details>
  </div>
  <p class="mut ihint">Toque num tempo para ver a fórmula, quando usar e ouvir um exemplo. Os tempos com 🔒 chegam mais adiante na trilha.</p></div>`;
}
function zeitShow(el, id) {
  const z = ZEITEN.find((x) => x.id === id), cur = +el.dataset.cur, lit = z.li <= cur;
  el.dataset.sel = id; el.querySelectorAll('.zt-chip').forEach((c) => c.classList.toggle('on', c.dataset.zt === id));
  el.querySelector('.zt-detail').innerHTML = `<h4>${esc(z.n)}${lit ? '' : ` <small class="mut">· você estuda este tempo no dia ${dayOfLesson(z.li)}</small>`}</h4>
    <p class="zt-f"><span class="bw k-v"><b>${esc(z.f)}</b></span></p><p>${esc(z.q)}</p>
    <p>${sayBtn(z.ex)}<span class="de">${esc(z.ex)}</span><br><small>${esc(z.exPt)}</small></p>`;
  el.querySelector('.zt-rows').innerHTML = ZEITEN.filter((x) => x.li <= cur).map((x) => `<p>${sayBtn(x.lern)}<b class="zt-n">${esc(x.n)}</b> <span class="de">${esc(x.lern)}</span></p>`).join('');
}

/* ---------- W: trem do vagão 2 ---------- */
const ZUGS = {}; let zugN = 0;
const zugParse = (s) => { const [w, pt = ''] = s.split('='); return { pt: pt.trim(), w: w.split('|').map((t) => t.trim()).map((t) => ({ t: t.replace(/^[*@^]/, ''), verb: t[0] === '*', subj: t[0] === '@', last: t[0] === '^' })) }; };
const zugText = (ws) => { const s = ws.map((x) => x.t).join(' '); return s[0].toUpperCase() + s.slice(1) + '.'; };
function zugHTML(title, sents) {
  const id = 'z' + ++zugN; ZUGS[id] = sents.map(zugParse);
  return `<div class="vbox ivis"><div class="vt">🚂 ${inl(title)}</div><div class="zug" data-z="${id}" data-k="0"></div>
  <p class="mut ihint">Toque nos vagões para montar a frase. O <b>vagão 2</b> é sempre do verbo conjugado; o que fecha a frase (particípio, infinitivo, prefixo) vai no último vagão.</p></div>`;
}
function zugRender(el, keep) {
  const S0 = ZUGS[el.dataset.z], k = +el.dataset.k, s = S0[k];
  if (!keep) { el._pool = s.w.map((_, i) => i).sort(() => Math.random() - 0.5); el._line = []; if (el._pool.every((v, i) => v === i)) el._pool.reverse(); }
  const wag = (i, where) => `<button type="button" class="zg-w ${where}" data-zw="${i}">${esc(s.w[i].t)}</button>`;
  const slots = s.w.map((_, j) => { const i = el._line[j]; return `<div class="zg-slot ${j === 1 ? 'v2' : ''}">${i === undefined ? `<span>${j === 1 ? '2 · verbo' : j + 1}</span>` : wag(i, 'in')}</div>`; }).join('');
  el.innerHTML = `<p class="zg-pt">Monte em alemão: <b>${esc(s.pt)}</b> <small class="mut">(frase ${k + 1} de ${S0.length})</small></p>
    <div class="zg-train"><span class="zg-loco" aria-hidden="true">🚂</span>${slots}</div>
    <div class="zg-pool">${el._pool.map((i) => wag(i, 'out')).join('') || '<span class="mut">Todos os vagões no trem. Confira!</span>'}</div>
    <div class="zg-fb"></div>
    <div class="uhr-btns"><button type="button" class="pri" data-zg="check" ${el._pool.length ? 'disabled' : ''}>Conferir</button><button type="button" data-zg="clear">Desmontar</button><button type="button" data-zg="next">Próxima frase →</button></div>`;
}
function zugCheck(el) {
  const s = ZUGS[el.dataset.z][+el.dataset.k], line = el._line.map((i) => s.w[i]), fb = el.querySelector('.zg-fb');
  const errs = [];
  if (!line[1].verb) errs.push(`O vagão 2 é do verbo conjugado: <b>${esc(s.w.find((x) => x.verb).t)}</b>.`);
  const lastI = s.w.findIndex((x) => x.last);
  if (lastI >= 0 && !line[line.length - 1].last) errs.push(`<b>${esc(s.w[lastI].t)}</b> fecha a frase: vai no último vagão.`);
  const si = line.findIndex((x) => x.subj);
  if (si > 0 && si !== 2) errs.push(`Quando o vagão 1 não é o sujeito, <b>${esc(line[si].t)}</b> vem logo depois do verbo, no vagão 3.`);
  const txt = zugText(line);
  if (errs.length) { fb.innerHTML = `<p class="nomsg">❌ Quase!</p><ul>${errs.map((e) => `<li>${e}</li>`).join('')}</ul>`; el.querySelectorAll('.zg-slot').forEach((x) => x.classList.add('shake')); setTimeout(() => el.querySelectorAll('.zg-slot').forEach((x) => x.classList.remove('shake')), 400); return; }
  const model = zugText(s.w);
  sfx('tarefa');
  fb.innerHTML = `<p class="okmsg">✅ Isso! O trem andou.</p><p>${sayBtn(txt)}<span class="de">${esc(txt)}</span></p>${txt !== model ? `<p class="mut">Também vale: ${esc(model)}</p>` : ''}`;
  el.querySelector('.zg-train').classList.add('go'); el.querySelectorAll('.zg-w').forEach((b) => (b.disabled = true));
  say(txt);
}

/* ---------- A: tabela de declinação ---------- */
const deklCell = (s) => { const [a, b] = s.split('|'), m = /^(\S+)(.*)$/.exec(b); return `${esc(a)}<em>${esc(m[1])}</em>${esc(m[2])}`; };
const deklText = (s) => s.replace('|', '');
function deklHTML(title, typ, cases) {
  typ = DEKL[typ] ? typ : 'der'; cases = cases || 'nad';
  return `<div class="vbox ivis"><div class="vt">🎨 ${inl(title)}</div>
  <div class="dekl" data-typ="${typ}" data-cases="${cases}" data-sel="m0">
    <div class="dk-tabs">${Object.entries(DEKL).map(([k, v]) => `<button type="button" data-dk="t:${k}" class="${k === typ ? 'on' : ''}">${esc(v.t)}</button>`).join('')}</div>
    <div class="tw"><table class="dk-t"></table></div>
    <div class="dk-out"></div>
    <div class="uhr-btns"><button type="button" class="pri" data-dk="quiz">🎲 Desafio: qual é a terminação?</button></div>
  </div>
  <p class="mut ihint">Toque numa célula para ouvir e ver por que a terminação é essa.</p></div>`;
}
function deklRender(el) {
  const T = DEKL[el.dataset.typ], cs = DEKL_CASOS.filter(([c]) => el.dataset.cases.includes(c)), sel = el.dataset.sel, q = el.dataset.quiz;
  el.querySelector('.dk-t').innerHTML = `<tr><th></th><th>masculino</th><th>feminino</th><th>neutro</th><th>plural</th></tr>` + cs.map(([c, n, h]) => {
    const ci = 'nadg'.indexOf(c);
    return `<tr><th>${n}<small>${esc(h)}</small></th>${['m', 'f', 'n', 'p'].map((g) => { const key = g + ci, s = T[g][ci];
      return `<td><button type="button" class="dk-c g-${g === 'p' ? 'x' : g} ${key === sel ? 'on' : ''}" data-dk="c:${key}"><span>${q === key ? esc(s.split('|')[0]) + '<em>___</em>' + esc(s.split('|')[1].replace(/^\S+/, '')) : deklCell(s)}</span></button></td>`; }).join('')}</tr>`;
  }).join('');
  el.querySelectorAll('.dk-tabs button').forEach((b) => b.classList.toggle('on', b.dataset.dk === 't:' + el.dataset.typ));
  if (q) return;
  const g = sel[0], ci = +sel[1], s = T[g][ci], t = deklText(s);
  el.querySelector('.dk-out').innerHTML = `<p class="dk-big">${sayBtn(t)}<span class="de">${deklCell(s)}</span></p><p class="mut">${esc(T.dica)}</p>`;
}
function deklQuiz(el) {
  const T = DEKL[el.dataset.typ], cs = el.dataset.cases.split('').map((c) => 'nadg'.indexOf(c));
  const key = pickOne(['m', 'f', 'n', 'p']) + pickOne(cs); el.dataset.quiz = key; deklRender(el);
  const s = T[key[0]][+key[1]], right = s.split('|')[1].split(' ')[0];
  el.querySelector('.dk-out').innerHTML = `<p><b>Complete a célula marcada:</b> ${esc(s.split('|')[0])}<em>___</em>${esc(s.split('|')[1].replace(/^\S+/, ''))}</p>
    <div class="opts dk-opts">${['e', 'en', 'er', 'es', 'em'].map((x) => `<button type="button" data-dk="a:${x}">-${x}</button>`).join('')}</div>`;
  el.dataset.right = right;
}
function deklAnswer(el, x) {
  const key = el.dataset.quiz, ok = x === el.dataset.right, T = DEKL[el.dataset.typ], s = T[key[0]][+key[1]];
  delete el.dataset.quiz; el.dataset.sel = key; deklRender(el);
  if (ok) sfx('tarefa');
  el.dataset.score = (+el.dataset.score || 0) + (ok ? 1 : 0); el.dataset.tries = (+el.dataset.tries || 0) + 1;
  el.querySelector('.dk-out').insertAdjacentHTML('afterbegin', `<p class="${ok ? 'okmsg' : 'nomsg'}">${ok ? '✅ Isso!' : `❌ Quase! É <b>-${esc(el.dataset.right)}</b>, e não -${esc(x)}.`} <small class="mut">Acertos: ${el.dataset.score} de ${el.dataset.tries}</small></p>`);
  say(deklText(s));
}

/* ---------- B: carta oficial ---------- */
function briefHTML(title) {
  const z = (id, cls = '') => { const b = BRIEF.find((x) => x.id === id); return `<button type="button" class="br-z ${cls}" data-br="${id}">${esc(b.z).replace(/\n/g, '<br>')}</button>`; };
  return `<div class="vbox ivis"><div class="vt">✉️ ${inl(title)}</div>
  <div class="brief">
    <div class="br-paper">
      <div class="br-head">${z('abs', 'abs')}<div class="br-meta">${z('az')}${z('dat')}</div></div>
      ${z('bet', 'bet')}${z('anr')}${z('txt')}${z('frist')}${z('rbb', 'rbb')}${z('gr', 'gr')}
    </div>
    <div class="br-info"><p class="mut">Toque em qualquer parte da carta.</p></div>
    <div class="uhr-btns"><button type="button" class="pri" data-br="quiz">🎲 Desafio: encontre na carta</button></div>
  </div>
  <p class="mut ihint">Repartições alemãs seguem quase sempre este modelo. Saber onde fica cada parte já resolve metade da leitura.</p></div>`;
}
function briefShow(el, id) {
  const b = BRIEF.find((x) => x.id === id), txt = b.z.replace(/\n/g, ' ');
  el.querySelectorAll('.br-z').forEach((x) => x.classList.toggle('on', x.dataset.br === id));
  el.querySelector('.br-info').innerHTML = `<p><b class="de">${esc(b.de)}</b></p><p>${esc(b.pt)}</p><p>${sayBtn(txt)}<small class="mut">Ouvir este trecho</small></p>`;
}

/* ---------- G: medidor de certeza ---------- */
function gewissHTML(title, mode) {
  mode = mode === 'past' ? 'past' : 'jetzt';
  return `<div class="vbox ivis"><div class="vt">🎚️ ${inl(title)}</div>
  <div class="gew" data-mode="${mode}">
    <p class="gw-q"><b>${esc(GEWISS_PISTAS[mode].q)}</b> Arraste e veja como o alemão dosa a certeza.</p>
    <div class="gw-meter"><div class="gw-bar"></div>${GEWISS.map((g, i) => `<span class="gw-tick${i % 2 ? ' lo' : ''}" style="left:${g.v}%">${esc(g.de)}</span>`).join('')}
      <input type="range" min="0" max="100" step="1" value="60" class="gw-r" aria-label="Grau de certeza"></div>
    <div class="gw-out"></div>
    <div class="gw-quiz" hidden></div>
    <div class="uhr-btns"><button type="button" class="pri" data-gw="quiz">🎲 Desafio: qual a certeza?</button><button type="button" data-gw="check" hidden>Conferir</button></div>
  </div>
  <p class="mut ihint">O português usa "deve", "talvez", "com certeza". O alemão escolhe o verbo modal: quanto mais forte a pista, mais forte o verbo.</p></div>`;
}
const gewNear = (v) => GEWISS.reduce((a, b) => (Math.abs(b.v - v) < Math.abs(a.v - v) ? b : a));
function gewShow(el, speak) {
  const g = gewNear(+el.querySelector('.gw-r').value), s = g[el.dataset.mode];
  el.querySelector('.gw-bar').style.setProperty('--v', el.querySelector('.gw-r').value + '%');
  el.querySelectorAll('.gw-tick').forEach((t) => t.classList.toggle('on', t.textContent === g.de));
  if (el.dataset.quiz) return;
  el.querySelector('.gw-out').innerHTML = `<p class="gw-verb"><b>${esc(g.de)}</b> · ${esc(g.pt)}</p><p>${sayBtn(s)}<span class="de">${esc(s)}</span></p>`;
  if (speak && el.dataset.last !== g.de) say(s);
  el.dataset.last = g.de;
}

/* ---------- eventos e primeira pintura ---------- */
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    let b;
    if ((b = e.target.closest('.zeit [data-zt]'))) { zeitShow(b.closest('.zeit'), b.dataset.zt); return; }
    if ((b = e.target.closest('.zug [data-zw]'))) {
      const el = b.closest('.zug'), i = +b.dataset.zw;
      if (b.classList.contains('out')) { el._pool = el._pool.filter((x) => x !== i); el._line.push(i); } else { el._line = el._line.filter((x) => x !== i); el._pool.push(i); }
      zugRender(el, true); return;
    }
    if ((b = e.target.closest('.zug [data-zg]'))) {
      const el = b.closest('.zug'), v = b.dataset.zg;
      if (v === 'check') zugCheck(el); else if (v === 'clear') zugRender(el); else { el.dataset.k = (+el.dataset.k + 1) % ZUGS[el.dataset.z].length; zugRender(el); }
      return;
    }
    if ((b = e.target.closest('.dekl [data-dk]'))) {
      const el = b.closest('.dekl'), [k, v] = b.dataset.dk.split(':');
      if (k === 't') { el.dataset.typ = v; delete el.dataset.quiz; deklRender(el); }
      else if (k === 'c' && !el.dataset.quiz) { el.dataset.sel = v; deklRender(el); say(deklText(DEKL[el.dataset.typ][v[0]][+v[1]])); }
      else if (k === 'quiz') deklQuiz(el); else if (k === 'a' && el.dataset.quiz) deklAnswer(el, v);
      return;
    }
    if ((b = e.target.closest('.brief [data-br]'))) {
      const el = b.closest('.brief'), v = b.dataset.br, info = el.querySelector('.br-info');
      if (v === 'quiz') { const [q, id] = pickOne(BRIEF_QUIZ); el.dataset.quiz = id; el.querySelectorAll('.br-z').forEach((x) => x.classList.remove('on', 'ok', 'no')); info.innerHTML = `<p><b>Toque na parte da carta que diz:</b> ${esc(q)}.</p>`; return; }
      if (el.dataset.quiz) {
        const right = el.dataset.quiz, ok = v === right; delete el.dataset.quiz;
        el.querySelector(`[data-br="${right}"]`).classList.add('ok'); if (!ok) b.classList.add('no'); else sfx('tarefa');
        briefShow(el, right); info.insertAdjacentHTML('afterbegin', `<p class="${ok ? 'okmsg' : 'nomsg'}">${ok ? '✅ Isso!' : '❌ Não é essa parte. A certa está marcada em verde.'}</p>`);
        return;
      }
      briefShow(el, v); say(BRIEF.find((x) => x.id === v).z.replace(/\n/g, ' ')); return;
    }
    if ((b = e.target.closest('.gew [data-gw]'))) {
      const el = b.closest('.gew'), v = b.dataset.gw, qb = el.querySelector('.gw-quiz');
      if (v === 'quiz') {
        const [p, right] = pickOne(GEWISS_PISTAS[el.dataset.mode].p); el.dataset.quiz = right;
        qb.innerHTML = `<p><b>Pista:</b> ${esc(p)}</p><p class="mut">Ajuste o medidor e confira.</p>`; qb.hidden = false;
        el.querySelector('.gw-out').innerHTML = ''; b.hidden = true; el.querySelector('[data-gw="check"]').hidden = false; return;
      }
      const right = GEWISS.find((g) => g.de === el.dataset.quiz), mine = gewNear(+el.querySelector('.gw-r').value), ok = mine === right;
      delete el.dataset.quiz; el.querySelector('.gw-r').value = right.v; gewShow(el, false); if (ok) sfx('tarefa');
      qb.insertAdjacentHTML('beforeend', `<p class="${ok ? 'okmsg' : 'nomsg'}">${ok ? '✅ Isso!' : `❌ Você marcou <b>${esc(mine.de)}</b>; com essa pista o certo é <b>${esc(right.de)}</b>.`}</p>`);
      b.hidden = true; el.querySelector('[data-gw="quiz"]').hidden = false; say(right[el.dataset.mode]);
    }
  });
  document.addEventListener('input', (e) => { const r = e.target.closest('.gew .gw-r'); if (r) gewShow(r.closest('.gew'), false); });
  document.addEventListener('change', (e) => { const r = e.target.closest('.gew .gw-r'); if (r) gewShow(r.closest('.gew'), true); });
  new MutationObserver(() => {
    document.querySelectorAll('.zeit:not([data-ready])').forEach((el) => { el.dataset.ready = '1'; zeitShow(el, el.dataset.sel); });
    document.querySelectorAll('.zug:not([data-ready])').forEach((el) => { el.dataset.ready = '1'; zugRender(el); });
    document.querySelectorAll('.dekl:not([data-ready])').forEach((el) => { el.dataset.ready = '1'; deklRender(el); });
    document.querySelectorAll('.gew:not([data-ready])').forEach((el) => { el.dataset.ready = '1'; gewShow(el, false); });
  }).observe(document.documentElement, { childList: true, subtree: true });
}
