/* Ilustrações em SVG: cubos isométricos, banner, trilha em zigue-zague e frase desmontada. */
const LVCOL = { A1: '#4fd18b', A2: '#3fc1e0', B1: '#ffcf4a', B2: '#ff8a3d', C1: '#a77bff', C2: '#ff5fa2' };
const shade = (hex, f) => { const n = parseInt(hex.slice(1), 16), c = [n >> 16, (n >> 8) & 255, n & 255].map((v) => Math.max(0, Math.min(255, Math.round(v * f)))); return '#' + c.map((v) => v.toString(16).padStart(2, '0')).join(''); };

// Cubo isométrico: (cx, cy) é o centro da face de cima; w é meia largura; d é a altura das laterais.
function isoCube(cx, cy, w, d, col, label = '', fs = 0, ink = '#0e1525') {
  const h = w / 2;
  const top = `${cx},${cy - h} ${cx + w},${cy} ${cx},${cy + h} ${cx - w},${cy}`;
  const left = `${cx - w},${cy} ${cx},${cy + h} ${cx},${cy + h + d} ${cx - w},${cy + d}`;
  const right = `${cx},${cy + h} ${cx + w},${cy} ${cx + w},${cy + d} ${cx},${cy + h + d}`;
  return `<polygon points="${left}" fill="${shade(col, 0.78)}"/><polygon points="${right}" fill="${shade(col, 0.6)}"/><polygon points="${top}" fill="${col}"/>` +
    (label ? `<text transform="translate(${cx} ${cy}) scale(1 .5) rotate(45)" text-anchor="middle" dominant-baseline="central" font-size="${fs || w * 0.62}" font-weight="800" fill="${ink}" font-family="IBM Plex Sans, system-ui">${esc(label)}</text>` : '');
}

function heroArt(lv) {
  const col = LVCOL[lv] || '#ffcf4a';
  const cubes = [[90, 70, 46, 40, '#ff5fa2', lv], [250, 130, 30, 26, '#4fd18b', 'Ä'], [430, 40, 38, 32, '#3d7bff', 'DE'], [600, 120, 54, 44, col, lv],
    [770, 50, 34, 28, '#ff5fa2', 'ß'], [900, 140, 44, 36, '#3d7bff', 'Ü'], [-10, 170, 40, 34, '#ffcf4a', 'ö'], [1010, 60, 36, 30, '#4fd18b', 'ä']];
  return `<svg viewBox="0 0 1000 210" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${cubes.map(([x, y, w, d, c, t]) => isoCube(x, y, w, d, c, t)).join('')}</svg>`;
}

function levelBadge(lv, size = 64) {
  return `<svg viewBox="0 0 64 64" width="${size}" height="${size}" aria-hidden="true">${isoCube(32, 22, 26, 22, LVCOL[lv], lv, 15)}</svg>`;
}

/* ---------- trilha isométrica ---------- */
const PATH_W = 340;
function pathSVG(days, cur, step = 100) {
  const A = 72, cx = PATH_W / 2;
  const P = days.map((d, i) => ({ d, x: cx + [0, -1, 0, 1][i % 4] * A, y: 56 + i * step, info: dayInfo(d) }));
  const H = P.length * step + 40;
  let lines = '', marks = '', nodes = '';
  for (let i = 0; i < P.length - 1; i++) {
    const a = P[i], b = P[i + 1];
    lines += `<line x1="${a.x}" y1="${a.y + 10}" x2="${b.x}" y2="${b.y + 10}" class="pl ${S.done[a.d] ? 'pl-done' : ''}"/>`;
  }
  P.forEach((p, i) => {
    if (p.info.r === 0 && i > 0) marks += `<line x1="8" x2="${PATH_W - 8}" y1="${p.y - step / 2}" y2="${p.y - step / 2}" class="wk"/><text x="${PATH_W / 2}" y="${p.y - step / 2 - 6}" class="wkt" text-anchor="middle">MÓDULO ${p.info.w + 1}</text>`;
    const st = S.done[p.d] ? 'done' : p.d === cur ? 'cur' : p.d > cur ? 'lock' : 'open';
    const col = st === 'done' ? '#ffcf4a' : st === 'cur' ? '#ff8a3d' : st === 'open' ? '#57abff' : '#3c445c';
    const label = p.info.review ? '🏁 Checkpoint' : LESSONS[p.info.li].de;
    const short = label.length > 26 ? label.slice(0, 25) + '…' : label;
    nodes += `<g class="node n-${st}" data-d="${p.d}" tabindex="0" role="button" aria-label="Dia ${p.d}: ${esc(label)}">
      ${p.info.review ? isoCube(p.x, p.y, 22, 14, col, '★', 13) : isoCube(p.x, p.y, 30, 18, col, String(p.d), p.d > 99 ? 12 : 15, st === 'lock' ? '#9da2b0' : '#0e1525')}
      <text x="${p.x}" y="${p.y + 46}" text-anchor="middle" class="nl">${esc(short)}</text>
      ${S.done[p.d] ? `<text x="${p.x}" y="${p.y + 60}" text-anchor="middle" class="ns">${'★'.repeat(S.done[p.d].s)}${'☆'.repeat(3 - S.done[p.d].s)}</text>` : ''}
      ${st === 'cur' ? `<g class="go"><circle cx="${p.x + 46}" cy="${p.y - 30}" r="17"/><text x="${p.x + 46}" y="${p.y - 30}" text-anchor="middle" dominant-baseline="central">GO</text><text class="spark" x="${p.x + 64}" y="${p.y - 46}">✦</text><text class="spark s2" x="${p.x + 28}" y="${p.y - 10}">✦</text></g>` : ''}
    </g>`;
  });
  return { svg: `<svg viewBox="0 0 ${PATH_W} ${H}" width="${PATH_W}" height="${H}" class="path">${marks}${lines}${nodes}</svg>`, P };
}

/* ---------- áudio em qualquer palavra alemã ---------- */
// Reconhece se um trecho é alemão comparando com todas as palavras alemãs da trilha e com palavras comuns do português.
const PT_STOP = new Set(('a o e é de do da dos das em no na nos nas um uma uns umas que com para por não se os as ao aos à às eu ele ela eles elas você vocês nós sim mas ou como mais ' +
  'muito quando onde qual quem isso isto esse essa este esta seu sua meu minha tem ter ser estar foi são está pode cada sem sobre entre até depois antes também já ainda só então ' +
  'porque pois nem pelo pela pelos pelas lhe me te dele dela forma verbo artigo plural singular sujeito objeto caso feminino masculino neutro exemplo regra fim posição meio resto ' +
  'presente passado futuro agora pessoa tipo quando sentido uso dia dias hoje ontem amanhã casa vida').split(' '));
const DE_EXTRA = ('ich du er sie es wir ihr mich dich ihn uns euch mir dir ihm ihnen sich mein dein sein unser euer meine deine seine ihre unsere eure meinen meinem meiner deinen ihren ' +
  'der die das den dem des ein eine einen einem einer eines kein keine keinen keinem keiner bin bist ist sind seid war warst waren wart habe hast hat haben habt hatte hattest hatten hattet ' +
  'werde wirst wird werden werdet wurde wurden worden kann kannst können könnt konnte muss musst müssen müsst musste darf darfst dürfen dürft durfte will willst wollen wollt wollte ' +
  'soll sollst sollen sollt sollte möchte möchtest möchten möchtet könnte würde hätte wäre sei heiße heißt heißen komme kommst kommt kommen wohne wohnst wohnt wohnen spreche sprichst ' +
  'spricht sprechen lerne lernst lernt fahre fährst fährt lese liest esse isst nehme nimmst nimmt sehe siehst sieht schlafe schläfst schläft arbeite arbeitest arbeitet tanze tanzt ' +
  'spiele spielst spielt koche kochst kocht gemacht gekauft gelernt gespielt gearbeitet gegessen getrunken gesehen gelesen geschrieben geschlafen genommen gegangen gefahren geflogen ' +
  'gekommen geblieben gewesen aufgestanden studiert besucht verstanden eingekauft angerufen null eins zwei drei vier fünf sechs sieben acht neun zehn elf zwölf dreizehn sechzehn ' +
  'siebzehn zwanzig dreißig vierzig fünfzig sechzig siebzig achtzig neunzig hundert uhr halb viertel montag dienstag mittwoch donnerstag freitag samstag sonntag im am ins ans zum zur ' +
  'beim vom aus bei mit seit von zu auf an unter über neben hinter zwischen für ohne gegen durch weil denn dass wenn als ob obwohl und aber oder deshalb trotzdem sonst dann wer was wo ' +
  'woher wohin wann wie warum nicht doch ja nein gern lieber besser mehr').split(' ');
const words = (t) => (String(t).toLowerCase().replace(/\*\*/g, '').match(/\p{L}+/gu) || []);
let DE_SET = null;
function deSet() {
  if (DE_SET) return DE_SET;
  const s = new Set(LP.extra || DE_EXTRA), add = (t) => words(t).forEach((w) => s.add(w));
  LESSONS.forEach((l) => {
    l.v.forEach((v) => add(v.de)); [...l.ge, ...l.ex, ...l.dlg].forEach((e) => add(e.de));
    l.cz.forEach((c) => { add(c.q.replace('___', ' ')); add(c.a); c.w.forEach(add); });
    if (l.bd) l.bd.t.forEach((x) => add(x.w));
  });
  // exemplos do guia (das Mädchen, Wien, Quark…) também contam como alemão
  if (typeof GUIDE !== 'undefined') GUIDE.forEach((g) => g.body.split('\n').forEach((x) => { x = x.trim(); if (x.startsWith('~ ')) add(x.slice(2).split(' = ')[0]); }));
  PT_STOP.forEach((w) => s.delete(w));
  return (DE_SET = s);
}
function isGerman(t) {
  const ws = words(t.replace(/\(.*?\)/g, ' ')); if (!ws.length) return false;
  let de = 0, pt = 0;
  ws.forEach((w) => { if (deSet().has(w)) de++; else if (PT_STOP.has(w) || /[ãõçáéíóúâêôà]/.test(w)) pt++; });
  return de > 0 && de >= pt && de / ws.length >= 0.5;
}
// O que a voz lê de fato: setas, barras, pontos médios, sinais de igual e de mais, traços e marcadores viram pausa
// (vírgula); depois de ponto final a pausa já existe. Nenhum símbolo é pronunciado. A chave do áudio não muda (sayText).
const DIA_ABR = { Mo: 'Montag', Di: 'Dienstag', Mi: 'Mittwoch', Do: 'Donnerstag', Fr: 'Freitag', Sa: 'Samstag', So: 'Sonntag' };
const falavel = (t) => String(t).replace(/___/g, ' ').replace(/[\p{Extended_Pictographic}\u{FE0F}\u{200D}★☆]/gu, '')
  // placas e horários: "Mo–Fr 6–18 Uhr" se lê "Montag bis Freitag 6 bis 18 Uhr"
  .replace(/\b(Mo|Di|Mi|Do|Fr|Sa|So)\s*[–-]\s*(Mo|Di|Mi|Do|Fr|Sa|So)\b/g, (m, a, b) => DIA_ABR[a] + ' bis ' + DIA_ABR[b])
  .replace(/\b(Mo|Di|Mi|Do|Fr|Sa|So)(?=\s+\d)/g, (m) => DIA_ABR[m]).replace(/(\d)\s*–\s*(\d)/g, '$1 bis $2')
  .replace(/(\p{L})_(?=\p{L})/gu, '$1 ')
  .replace(/([.!?…:])\s*(?:→|->|⇒|←|·|•|×|\||\/|=|\+|–|—)\s*/g, '$1 ')
  .replace(/\s*(?:→|->|⇒|←|·|•|×|\||\/|=|\+|–|—)\s*/g, ', ')
  .replace(/\s+([,.!?;:])/g, '$1').replace(/,(\s*,)+/g, ',').replace(/^[\s,]+|[\s,]+$/g, '').replace(/\s+/g, ' ');
const sayText = (t) => t.replace(/\*\*/g, '').replace(/\(.*?\)/g, ' ').replace(/\s+/g, ' ').trim();
function enhanceAudio(root) {
  if (!hasTTS || !S.audio) return;
  root.querySelectorAll('.dt td, .dt th, .fc, .vcol span, .vcol b, .sitems b, .fstep b, .fstep .de, .tli b, .tli .de, .gloss .de').forEach((el) => {
    if (el.dataset.au || el.closest('#ex')) return; el.dataset.au = '1';
    const t = el.textContent.trim(); if (!t || t.length < 2 || t.startsWith('-') || !isGerman(t)) return;
    el.insertAdjacentHTML('afterbegin', `<button class="spk sm" data-say="${esc(sayText(t))}" aria-label="Ouvir">🔊</button>`);
  });
  root.querySelectorAll('.deep p > b, .deep li > b, .box b, .why b, .quiz details > p, .bw, .hint b, figcaption b').forEach((el) => {
    if (el.dataset.au || el.closest('#ex .opts, .line, .pool') || el.closest('[data-say]')) return; el.dataset.au = '1';
    const t = (el.matches('.bw') ? (el.querySelector('b') || el).textContent : el.textContent).trim();
    // nas legendas das imagens todo negrito é alemão (nomes como Bierdeckel não estão no vocabulário das lições)
    // letras e terminações soltas (u, w, -er) não ganham áudio: a voz leria "menos er"; o gerador também as ignora
    if (!t || t.length < 2 || t.startsWith('-')) return;
    if (!(el.matches('figcaption b') ? /\p{L}{2}/u.test(t) : isGerman(t))) return;
    el.classList.add('sayw'); el.dataset.say = sayText(t); el.title = 'Toque para ouvir';
  });
}

/* ---------- aulas em texto marcado (guia e A1) ---------- */
const inl = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
function deepHTML(md) {
  const L = md.split('\n').map((x) => x.trim()).filter(Boolean);
  let h = '', i = 0;
  const take = (pre) => { const out = []; while (i < L.length && L[i].startsWith(pre)) out.push(L[i++].slice(pre.length)); return out; };
  while (i < L.length) {
    const l = L[i];
    if (l.startsWith('|')) {
      let head = true; if (l === '|-') { head = false; i++; }
      const rows = []; while (i < L.length && L[i].startsWith('|') && L[i] !== '|-') rows.push(L[i++].replace(/^\||\|$/g, '').split('|').map((c) => c.trim()));
      h += `<div class="tw"><table class="dt">${rows.map((r, k) => `<tr>${r.map((c) => (k === 0 && head ? `<th>${inl(c)}</th>` : `<td>${inl(c)}</td>`)).join('')}</tr>`).join('')}</table></div>`;
    } else if (l.startsWith('- ')) h += `<ul class="pts">${take('- ').map((x) => `<li>${inl(x)}</li>`).join('')}</ul>`;
    else if (l.startsWith('~ ')) {
      h += `<div class="exs">${take('~ ').map((x) => { const k = x.indexOf(' = '), de = k > 0 ? x.slice(0, k) : x, pt = k > 0 ? x.slice(k + 3) : '';
        return `<p>${spk(de.replace(/\*\*/g, ''))}${typeof micBtn === 'function' ? micBtn(sayText(de), pt.replace(/\*\*/g, '')) : ''}<span class="de">${inl(de)}</span>${pt ? `<br><small>${inl(pt)}</small>` : ''}</p>`; }).join('')}</div>`;
    } else if (l.startsWith('?? ')) {
      // desafio de múltipla escolha: "pergunta || certa || errada… >> explicação"; "🔊 alemão" no lugar da pergunta = ouvir e escolher
      h += `<div class="quiz gquiz"><h4>🎯 Desafio</h4>${take('?? ').map((x) => {
        const [body, why = ''] = x.split(' >> '), [qq, ...op] = body.split(' || '), au = qq.startsWith('🔊 ') ? qq.slice(2).trim() : '';
        const opts = op.map((o, j) => ({ o, ok: j === 0 })).sort(() => Math.random() - 0.5);
        return `<div class="gq"><p class="gqq">${au ? `${spk(au)}<b class="gqa">Ouça e escolha o que foi dito</b>` : inl(qq)}</p>
          <div class="gqo">${opts.map((p) => `<button type="button" data-c="${p.ok ? 1 : 0}">${inl(p.o)}</button>`).join('')}</div><p class="gqw" hidden>${inl(why)}</p></div>`;
      }).join('')}</div>`;
    } else if (l.startsWith('&& ')) {
      // ligar os pares: "a = b | c = d"
      const pairs = take('&& ').flatMap((x) => x.split(' | ')).map((p) => { const k = p.indexOf(' = '); return [p.slice(0, k).trim(), p.slice(k + 3).trim()]; });
      const mix = (a) => a.map((v, j) => ({ v, j })).sort(() => Math.random() - 0.5);
      h += `<div class="quiz gpairs" data-n="${pairs.length}"><h4>🧩 Ligue os pares</h4><p class="mut gpm">Toque num item da esquerda e depois no par dele.</p>
        <div class="gpg"><div class="gpc">${mix(pairs.map((p) => p[0])).map((x) => `<button type="button" data-s="L" data-k="${x.j}"${isGerman(x.v) ? ` data-de="${esc(x.v)}"` : ''}>${inl(x.v)}</button>`).join('')}</div>
        <div class="gpc">${mix(pairs.map((p) => p[1])).map((x) => `<button type="button" data-s="R" data-k="${x.j}">${inl(x.v)}</button>`).join('')}</div></div></div>`;
    } else if (l.startsWith('@ ')) { h += visHTML(l.slice(2)); i++; }
    else if (l.startsWith('IMG ')) {
      // imagem opcional de images/guia/: só aparece se estiver listada em images/guia/index.json (ver guideImgs)
      const [nm, cap = ''] = l.slice(4).split(' | ').map((x) => x.trim());
      h += `<figure class="gimg" data-gimg="${esc(nm)}" hidden><img alt="${esc(cap)}" decoding="async"><figcaption>${inl(cap)}</figcaption></figure>`; i++;
    } else if (l.startsWith('? ')) {
      h += `<div class="quiz"><h4>✍️ Teste rápido</h4><p class="mut">Responda de cabeça, ou em voz alta, antes de tocar para ver a resposta.</p>${take('? ').map((x) => { const [a, b] = x.split(' || ');
        return `<details><summary>${inl(a)}</summary><p>${inl(b || '')}</p></details>`; }).join('')}</div>`;
    } else {
      if (l.startsWith('# ')) h += `<h3 class="step">${inl(l.slice(2))}</h3>`;
      else if (l.startsWith('> ')) h += `<div class="box tip"><span class="bl">💡 Dica</span>${inl(l.slice(2))}</div>`;
      else if (l.startsWith('! ')) h += `<div class="box warn"><span class="bl">⚠️ Atenção</span>${inl(l.slice(2))}</div>`;
      else if (l.startsWith('BR ')) h += `<div class="box br"><span class="bl">🇧🇷 Comparando com o português</span>${inl(l.slice(3))}</div>`;
      else if (l.startsWith('GO ')) h += `<div class="box mission"><span class="bl">🎯 Missão</span>${inl(l.slice(3))}</div>`;
      else h += `<p>${inl(l)}</p>`;
      i++;
    }
  }
  return h;
}

/* ---------- desafios interativos das aulas (?? e &&) ---------- */
if (typeof document !== 'undefined') document.addEventListener('click', (e) => { // (o gerador de áudio carrega este arquivo sem DOM)
  const b = e.target.closest('.gq .gqo button');
  if (b) {
    const q = b.closest('.gq'); if (q.dataset.done) return;
    const ok = b.dataset.c === '1'; q.dataset.done = ok ? 'ok' : 'no'; if (ok && typeof sfx === 'function') sfx('tarefa');
    q.querySelectorAll('.gqo button').forEach((x) => { x.disabled = true; if (x.dataset.c === '1') x.classList.add('ok'); });
    if (!ok) b.classList.add('no');
    const w = q.querySelector('.gqw'); w.innerHTML = `<b>${ok ? '✅ Isso!' : '❌ Quase!'}</b> ${w.innerHTML}`; w.hidden = false;
    return;
  }
  const p = e.target.closest('.gpairs .gpc button');
  if (!p || p.disabled) return;
  const box = p.closest('.gpairs'), cur = box.querySelector('.gpc button.sel');
  if (p.dataset.de) say(p.dataset.de);
  if (!cur || cur.dataset.s === p.dataset.s) { if (cur) cur.classList.remove('sel'); p.classList.add('sel'); return; }
  cur.classList.remove('sel');
  if (cur.dataset.k === p.dataset.k) {
    [cur, p].forEach((x) => { x.classList.add('ok'); x.disabled = true; });
    if (box.querySelectorAll('.gpc button.ok').length === 2 * box.dataset.n) { if (typeof sfx === 'function') sfx('tarefa'); box.dataset.done = box.dataset.miss ? 'no' : 'ok'; box.querySelector('.gpm').textContent = box.dataset.miss ? '🎉 Todos os pares ligados!' : '🎉 Todos os pares de primeira!'; }
  } else {
    box.dataset.miss = '1';
    [cur, p].forEach((x) => { x.classList.add('no'); setTimeout(() => x.classList.remove('no'), 650); });
  }
});
// Placar dos desafios de uma tela (usado ao concluir uma aula do guia).
const quizScore = (root) => {
  const all = [...root.querySelectorAll('.gq, .gpairs')];
  return { n: all.length, ok: all.filter((x) => x.dataset.done === 'ok').length, done: all.filter((x) => x.dataset.done).length };
};
// Imagens opcionais (guia: images/guia, lições: images/aulas): aparecem só as que estão no index.json da pasta.
const GIMG = {};
function guideImgs(root) {
  root.querySelectorAll('[data-gimg]:not([data-seen])').forEach((f) => {
    f.dataset.seen = '1';
    const dir = f.dataset.dir || 'guia';
    (GIMG[dir] = GIMG[dir] || fetch(`images/${dir}/index.json`).then((r) => (r.ok ? r.json() : [])).then((l) => new Set(l)).catch(() => new Set())).then((have) => {
      if (!have.has(f.dataset.gimg)) return;
      const im = f.querySelector('img'); im.onload = () => { f.hidden = false; }; im.onerror = () => f.remove();
      im.src = `images/${dir}/${f.dataset.gimg}.webp`;
    });
  });
}
// Ilustrações de uma lição: images/aulas/licao-001.webp (principal) e licao-001-b.webp (detalhe), se existirem.
// Lições novas da trilha MODO (sem índice original) usam o id: licao-n-bahnhof.webp.
const lessonImgs = (l) => { if (l.oi == null && !l.nova) return ''; const n = 'licao-' + (l.oi == null ? l.sid : String(l.oi + 1).padStart(3, '0')); return `<div class="limgs">${[n, n + '-b'].map((x) => `<figure class="gimg" data-gimg="${x}" data-dir="aulas" hidden><img alt="${esc(l.pt)}" decoding="async">${typeof IMG_CAP !== 'undefined' && IMG_CAP[x] ? `<figcaption>${inl(IMG_CAP[x])}</figcaption>` : ''}</figure>`).join('')}</div>`; };

/* ---------- facilitação gráfica: esquemas por lição ---------- */
const VICON = { F: '🧱', T: '⏳', S: '📏', P: '🔀', V: '⚖️', M: '📊', E: '🧮' };
const VOPS = new Set(['+', '=', '→', ',', '−']);
const kv = (p) => { const e = p.indexOf('='); return e < 0 ? [p, ''] : [p.slice(0, e), p.slice(e + 1)]; };
function visHTML(spec) {
  const seg = spec.split(';'), k = seg[0][0], title = seg[0].slice(2), rest = seg.slice(1);
  if (k === 'U') return typeof uhrHTML === 'function' ? uhrHTML(title) : ''; // relógio interativo (interativo.js)
  if (k === 'K') return typeof katzHTML === 'function' ? katzHTML(title, rest[0]) : ''; // a gata e o caixote
  // mais interativos (interativo2.js): linha do tempo, trem do vagão 2, declinação, carta oficial, medidor de certeza
  if (k === 'Z') return typeof zeitHTML === 'function' ? zeitHTML(title, rest[0], rest[1]) : '';
  if (k === 'W') return typeof zugHTML === 'function' ? zugHTML(title, rest) : '';
  if (k === 'A') return typeof deklHTML === 'function' ? deklHTML(title, rest[0], rest[1]) : '';
  if (k === 'B') return typeof briefHTML === 'function' ? briefHTML(title) : '';
  if (k === 'G') return typeof gewissHTML === 'function' ? gewissHTML(title, rest[0]) : '';
  let body = '';
  if (k === 'F') {
    const hs = rest[0].split('|').map((h) => h.split('^'));
    body = `<div class="tw"><div class="fgrid" style="grid-template-columns:repeat(${hs.length},minmax(88px,auto))">${hs.map(([t, c]) => `<div class="fh k-${c || 'c'}">${inl(t)}</div>`).join('')}${rest.slice(1).map((r) => { const cs = r.split('|'); return hs.map(([, c], i) => `<div class="fc k-${c || 'c'}">${cs[i] ? inl(cs[i]) : '<span class="mut">·</span>'}</div>`).join(''); }).join('')}</div></div>`;
  } else if (k === 'T') {
    const ev = rest.map((p) => { const [a, ex] = kv(p), [lab, pos] = a.split('@'); return { lab, pos: +pos || 0, ex }; }).sort((a, b) => a.pos - b.pos);
    body = `<div class="tl">${ev.map((e) => `<div class="tli ${e.pos < 0 ? 'past' : e.pos > 0 ? 'fut' : 'now'}"><span class="tdot"></span><span class="ttag">${e.pos < 0 ? 'passado' : e.pos > 0 ? 'futuro' : 'agora'}</span><b>${inl(e.lab)}</b>${e.ex ? `<span class="de">${inl(e.ex)}</span>` : ''}</div>`).join('')}</div>`;
  } else if (k === 'S') {
    const [l, r] = rest[0].split('|'), it = rest.slice(1).map(kv);
    body = `<div class="tw"><div class="scale" style="min-width:${it.length * 108}px"><div class="sends"><span>${inl(l)}</span><span>${inl(r)}</span></div><div class="sbar"></div><div class="sitems" style="grid-template-columns:repeat(${it.length},1fr)">${it.map(([a, b]) => `<div><span class="sdot"></span><b class="de">${inl(a)}</b><small>${inl(b)}</small></div>`).join('')}</div></div></div>`;
  } else if (k === 'P') {
    body = `<div class="flow">${rest.map(kv).map(([a, b], i) => `${i ? '<span class="farr" aria-hidden="true">→</span>' : ''}<div class="fstep"><span class="fn">${i + 1}</span><b>${inl(a)}</b>${b ? `<span class="de">${inl(b)}</span>` : ''}</div>`).join('')}</div>`;
  } else if (k === 'V') {
    // coluna de um gênero ("der · azul", "die Bank") usa a cor do gênero; as outras usam cores neutras, sem azul/vermelho/verde
    const gk = (t) => { const m = /^(der|die|das)( ·|\s+[A-ZÄÖÜ])/.exec(t.trim()); return m ? ' vg g-' + { der: 'm', die: 'f', das: 'n' }[m[1]] : ''; };
    body = `<div class="vs">${rest.map((c) => { const [t, ...ls] = c.split('|'); return `<div class="vcol${gk(t)}"><b>${inl(t)}</b>${ls.map((x) => `<span>${inl(x)}</span>`).join('')}</div>`; }).join('')}</div>`;
  } else if (k === 'M') {
    const rows = rest.map((r) => r.split('|'));
    body = `<div class="tw"><table class="dt vm">${rows.map((r, i) => `<tr>${r.map((c, j) => (i === 0 ? `<th>${inl(c)}</th>` : `<td class="${j === 0 ? 'm0' : ''}">${inl(c)}</td>`)).join('')}</tr>`).join('')}</table></div>`;
  } else if (k === 'E') {
    body = `<div class="eq">${rest[0].split('|').map((t) => { if (VOPS.has(t.trim())) return `<span class="eop">${t.trim()}</span>`; const [x, c] = t.split('^'); return `<span class="bw k-${c || 'c'}"><b>${inl(x)}</b></span>`; }).join('')}</div>`;
  }
  return `<div class="vbox"><div class="vt">${VICON[k] || '🗺️'} ${inl(title)}</div>${body}</div>`;
}
const visFor = (l) => (typeof VIS !== 'undefined' && VIS[l.de] ? VIS[l.de].map(visHTML).join('') : '');

// Aula montada em passos a partir do conteúdo da lição (B1 em diante), com os esquemas visuais.
function autoDeep(l) {
  let n = 0;
  const st = (t) => `<h3 class="step">Passo ${++n}: ${t}</h3>`;
  const exP = (e) => `<p>${spk(e.de)}<span class="de">${esc(e.de)}</span><br><small>${esc(e.pt)}</small></p>`;
  const vis = visFor(l);
  return `${st('a ideia')}<p>${esc(l.gx)}</p>
  ${vis ? st('veja no esquema') + vis : ''}
  ${l.pts.length ? st('como funciona, ponto a ponto') + `<ol class="pts num">${l.pts.map((p) => `<li>${esc(p)}</li>`).join('')}</ol>` : ''}
  ${st('exemplos')}<div class="exs">${l.ge.map(exP).join('')}</div>
  ${l.ex.length ? st('no dia a dia') + `<div class="exs">${l.ex.map(exP).join('')}</div>` : ''}
  ${l.bd ? st('a frase por dentro') + breakdownHTML(l.bd) : ''}
  ${st('armadilhas')}${l.cz.filter((c) => c.why).map((c) => `<div class="box warn"><span class="bl">⚠️ ${esc(fill(c))}</span>Não é ${c.w.map((w) => '«' + esc(w) + '»').join(' nem ')}: ${esc(c.why)}.</div>`).join('')}
  <div class="quiz"><h4>✍️ Teste rápido</h4><p class="mut">Escolha a resposta de cabeça, ou em voz alta, antes de tocar para conferir.</p>
  ${l.cz.map((c) => `<details><summary>${esc(c.q)} <small class="mut">(${[c.a, ...c.w].sort().map(esc).join(' · ')})</small></summary><p>${esc(c.a)}${c.why ? ': ' + esc(c.why) : ''}</p></details>`).join('')}</div>`;
}

/* ---------- frase desmontada ---------- */
const RGROUP = { s: 'Sujeito', v: 'Verbo conjugado', v2: 'Fim do verbo', o: 'Objetos', p: 'Atributos', c: 'Complementos', n: 'Negação', w: 'Conectores' };
const RHELP = {
  S: 'quem faz a ação ou de quem se fala; fica no nominativo e concorda com o verbo',
  V: 'o verbo que concorda com o sujeito; na oração principal fica na 2ª posição, na subordinada vai para o fim',
  AUX: 'haben, sein ou werden formando tempo composto, futuro ou passiva; ocupa o lugar do verbo conjugado',
  MOD: 'können, müssen, wollen, dürfen, sollen, möchten: conjugado na 2ª posição, com outro verbo no infinitivo no fim',
  INF: 'verbo na forma básica, que vai para o fim quando há modal, werden, lassen ou zu',
  PT: 'particípio (ge…t, ge…en), que vai para o fim nos tempos compostos e na passiva',
  PX: 'prefixo de verbo separável, que se solta e vai para o fim da oração',
  ZU: 'zu antes do infinitivo, exigido por certos verbos e expressões',
  OA: 'quem ou o que recebe a ação diretamente; caso acusativo',
  OD: 'a pessoa a quem algo é dado ou que é afetada; caso dativo',
  G: 'genitivo: indica posse ou é exigido por certas preposições e verbos',
  RX: 'pronome reflexivo, que volta ao sujeito (mich, dich, sich…)',
  PR: 'o que se diz do sujeito depois de sein, werden, heißen ou bleiben',
  ADJ: 'adjetivo ou particípio antes do substantivo, com terminação',
  ART: 'artigo ou demonstrativo, que mostra gênero, número e caso',
  POS: 'possessivo (mein, dein…), declinado como ein',
  T: 'quando: indicação de tempo', L: 'onde ou para onde: indicação de lugar', M: 'como: modo, meio ou ponto de vista',
  PP: 'complemento com preposição, muitas vezes exigida pelo verbo ou adjetivo',
  ADV: 'advérbio que modifica o verbo, o adjetivo ou a frase toda',
  NEG: 'nega a frase ou parte dela (nicht, kein, kaum…)',
  W: 'palavra interrogativa: abre a pergunta e o verbo vem logo em seguida',
  C: 'liga orações; weil, dass, wenn, ob e semelhantes mandam o verbo para o fim',
  REL: 'retoma um substantivo e abre a oração relativa, com verbo no fim',
  PK: 'partícula que dá tom à frase (doch, mal, ja, wohl…)', X: 'segundo termo de uma comparação',
};
const roleName = (c) => (ROLES[c] || ROLES.X)[0];
const roleGroup = (c) => (ROLES[c] || ROLES.X)[1];

function breakdownHTML(bd, compact = false) {
  const t = bd.t, sentence = t.map((x) => x.w).join(' ');
  const chips = t.map((x, i) => `<div class="bw k-${roleGroup(x.c)}"><span class="bn">${i + 1}</span><b>${esc(x.w)}</b><i>${esc(roleName(x.c))}</i></div>`).join('');
  if (compact) return `<div class="bwrap">${chips}</div>`;
  const vi = t.findIndex((x) => roleGroup(x.c) === 'v'), v2 = t.map((x) => roleGroup(x.c)).lastIndexOf('v2');
  const frame = vi >= 0 && v2 > vi ? `<div class="frame"><span class="bw k-v"><b>${esc(t[vi].w)}</b></span><span class="dots"></span><span class="bw k-v2"><b>${esc(t[v2].w)}</b></span>
    <small>Moldura verbal: a parte conjugada fica na posição ${vi + 1} e a outra parte do verbo fecha a oração. Tudo o que está entre as duas é o meio da frase.</small></div>` : '';
  const used = [...new Set(t.map((x) => roleGroup(x.c)))];
  return `<div class="bd"><div class="row"><p class="bd-s grow">${spk(sentence)}<span class="de">${esc(sentence)}</span><br><small>${esc(bd.pt)}</small></p></div>
  <div class="bwrap">${chips}</div>${frame}
  <ol class="bnotes">${t.map((x, i) => (x.n ? `<li value="${i + 1}"><b>${esc(x.w)}</b> — ${esc(x.n)}</li>` : '')).join('')}</ol>
  <div class="legend">${used.map((g) => `<span class="lg k-${g}">${RGROUP[g]}</span>`).join('')}</div></div>`;
}
