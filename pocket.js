/* Lições Pocket (aba Extras): situações reais com ilustrações interativas, frases, diálogo com vozes e teste.
   Os dados ficam em data/pockets.js. Toda palavra das ilustrações tem data-say: tocar = ouvir. */

// Imagens geradas (PROMPTS-POCKET.md) listadas em images/pocket/index.json: só essas são pedidas ao servidor.
let PKIMG = new Set();
// Imagens que ficam: só as que mostram algo que você precisa reconhecer no mundo real e que o app não desenha bem
// (um símbolo, uma máquina, uma forma de placa, um prato). Cenas só decorativas foram retiradas.
const PK_LOOK = {
  apotheke: 'O **A** vermelho marca toda **Apotheke**: é por ele que você acha uma farmácia na rua. Na vitrine, a placa **Notdienst** indica a farmácia de plantão.',
  anmeldung: 'O painel chama a sua senha (**A 047**) e mostra o guichê (**12**): é o mesmo número da sua **Wartemarke**. Quando ele aparecer, vá direto ao guichê indicado.',
  'supermarkt-detalhe': 'Este é o **Pfandautomat**: você coloca as garrafas e latas com Pfand, a máquina imprime o **Pfandbon** e o caixa desconta o valor da compra.',
  'kneipe-detalhe': 'Repare nos riscos no porta-copos: cada risco é uma bebida. No fim da noite, a conta sai do **Bierdeckel**.',
  'auto-detalhe': 'Na estrada, a forma da placa fala antes da palavra: octógono vermelho = **Stopp**; triângulo de ponta para baixo = **Vorfahrt achten** (dê a preferência); círculo vermelho com faixa branca = **Einfahrt verboten**; placa azul com a pista = **Autobahn**.',
  'biergarten-detalhe': 'Da esquerda para a direita: **Brezn** (pretzel), **Obatzda** (pasta de queijo) e **Radi** (rabanete fatiado), com a **Maß**, a caneca de um litro.',
  'weihnachtsmarkt-detalhe': 'No cone, **gebrannte Mandeln** (amêndoas caramelizadas); na mão, um **Lebkuchenherz** (coração de pão de mel); e o **Glühwein** na caneca, que tem **Tassenpfand**: devolva a caneca para recuperar o depósito.',
  muell: 'As cores das lixeiras: **gelb** (embalagens e plástico), **blau** (papel), **braun** (orgânico, a **Biotonne**) e **grau** ou **schwarz** (o resto, **Restmüll**).',
};
fetch('images/pocket/index.json').then((r) => (r.ok ? r.json() : [])).then((j) => { PKIMG = new Set(j); }).catch(() => {});

// Grupos da lista em Extras: o que não estiver em "viagem" aparece em "Morar na Alemanha".
const PK_VIAGEM = new Set(['flughafen', 'weg', 'restaurant', 'kneipe', 'einkaufen', 'sehenswuerdigkeiten', 'hotel', 'bahnhof', 'baeckerei', 'taxi', 'weihnachtsmarkt', 'biergarten', 'stadion', 'fahrrad', 'auto', 'wandern', 'kino']);
let pkGroup = 'viagem';
function pocketList() {
  const done = S.pockets || {}, n = Object.keys(done).filter((id) => POCKETS.some((p) => p.id === id)).length;
  const card = (p) => { const r = done[p.id];
    return `<button class="pkc ${r ? 'ok' : ''}" data-pk="${p.id}">${typeof pkThumb === 'function' ? pkThumb(p) : `<span class="pke">${p.e}</span>`}<span class="grow"><b>${esc(p.t)}</b><small>${esc(p.pt)} · ${p.lv}${r ? ` · ✓ ${r.ok}/${r.n}` : ''}</small></span></button>`; };
  const groups = { viagem: ['✈️', 'Viagem e passeio', POCKETS.filter((p) => PK_VIAGEM.has(p.id))], vida: ['🏠', 'Morar na Alemanha', POCKETS.filter((p) => !PK_VIAGEM.has(p.id))] };
  const [, , list] = groups[pkGroup] || groups.viagem;
  return `<p class="mut">Situações reais em 5 a 10 minutos: painéis, placas, cardápios e etiquetas com áudio em cada palavra.</p>
  <div class="xprog"><div class="bar"><i style="width:${Math.round((n / POCKETS.length) * 100)}%"></i></div><small>${n} de ${POCKETS.length} feitas</small></div>
  <div class="chips seg">${Object.entries(groups).map(([id, [e, t, l]]) => `<button class="chipb ${id === pkGroup ? 'on' : ''}" data-pkg="${id}">${e} ${t} <small>${l.filter((p) => done[p.id]).length}/${l.length}</small></button>`).join('')}</div>
  <div class="pkgrid">${list.map(card).join('')}</div>`;
}

const pkSay = (t) => (/\p{L}/u.test(t) ? ` data-say="${esc(t)}"` : '');
const pkWord = (de, pt, cls = '') => `<button class="pkw ${cls}"${pkSay(de)}><b>${esc(de)}</b>${pt ? `<small>${esc(pt)}</small>` : ''}</button>`;
const pkLeg = (s) => (s ? `<div class="pk-leg">${pkPairs(s).map((x) => pkWord(x.de, x.pt)).join('')}</div>` : '');

// Uma ilustração por tipo: painel, placas, cardápio, etiquetas, cartão, nota, quadro de informações, mapa e caminho.
function pkIll(il) {
  switch (il.k) {
    case 'board': {
      const st = (s) => (/^fast |verspätet|\+|wechsel/i.test(s) ? 'warn' : /fällt aus|annulliert|geschlossen|ausverkauft/.test(s) ? 'bad' : s ? 'ok' : '');
      return `<div class="pk-board ${il.estilo || ''}"><div class="pkb-h">${{ trem: '🚆', placar: '⚽', kino: '🎬' }[il.estilo] || '✈️'} ${esc(il.t)}</div><div class="tw"><table>
        <tr>${pkPairs(il.cols).map((c) => `<th${pkSay(c.de)}>${esc(c.de)}<small>${esc(c.pt)}</small></th>`).join('')}</tr>
        ${il.rows.map((r) => `<tr>${r.map((v, i) => (i === r.length - 1 ? `<td class="st ${st(v)}"${pkSay(v)}>${esc(v)}</td>` : `<td>${esc(v)}</td>`)).join('')}</tr>`).join('')}
      </table></div>${pkLeg(il.leg)}</div>`;
    }
    case 'signs':
      return `<div class="pk-signs ${il.estilo || ''}">${pkIcons(il.items).map((s) => `<button class="pk-sign"${pkSay(s.de)}><span class="ic">${s.ic}</span><span><b>${esc(s.de)}</b><small>${esc(s.pt)}</small></span></button>`).join('')}</div>`;
    case 'menu':
      return `<div class="pk-menu ${il.estilo || ''}"><div class="pkm-h"><b${pkSay(il.t)}>${esc(il.t)}</b><small>${esc(il.sub || '')}</small></div>
        ${il.secoes.map((s) => `<div class="pkm-s"><h4${pkSay(s.n)}>${esc(s.n)} <small>${esc(s.pt)}</small></h4>
          ${pkPairs(s.itens).map((x) => `<div class="pkm-i"${pkSay(x.de)}><span><b>${esc(x.de)}</b><small>${esc(x.pt)}</small></span><i></i><em>${esc(x.r[0] || '')} €</em></div>`).join('')}</div>`).join('')}
        ${il.nota ? (() => { const [de, pt] = il.nota.split('='); return `<p class="pkm-n"${pkSay(de)}>${esc(de)}<small>${esc(pt || '')}</small></p>`; })() : ''}</div>`;
    case 'tags':
      return `<div class="pk-tags ${il.estilo || ''}">${pkPairs(il.tags).map((t) => { const [preco, antigo, selo] = t.r;
        return `<div class="pk-tag"${pkSay(t.de)}>${selo ? `<span class="selo"${pkSay(selo)}>${esc(selo)}</span>` : ''}<b>${esc(t.de)}</b><small>${esc(t.pt)}</small>
          <div class="pr">${antigo ? `<s>${esc(antigo)}</s>` : ''}<strong>${esc(preco)}</strong></div></div>`; }).join('')}</div>`;
    case 'ticket':
      return `<div class="pk-ticket"><div class="pkt-h">${esc(il.t)}</div><div class="pkt-g">${pkPairs(il.campos).map((c) => `<div class="pkt-f">${pkWord(c.de, c.pt, 'sm')}<span>${esc(c.r[0] || '')}</span></div>`).join('')}</div></div>`;
    case 'receipt': {
      const [tl, tv] = il.total.split('=');
      return `<div class="pk-receipt"><div class="pkr-h">${esc(il.t)}</div>
        ${pkPairs(il.linhas).map((x) => `<div class="pkr-l"${pkSay(x.de)}><span>${esc(x.de)}<small>${esc(x.pt)}</small></span><span>${esc(x.r[0] || '')}</span></div>`).join('')}
        <div class="pkr-t"${pkSay(tl)}><span>${esc(tl)}</span><span>${esc(tv)} €</span></div></div>${pkLeg(il.extra)}`;
    }
    case 'info':
      return `<div class="pk-info ${il.estilo || ''}"><div class="pki-h">${esc(il.t)}</div>${pkPairs(il.linhas).map((x) => `<div class="pki-l">${pkWord(x.de, x.pt)}${x.r[0] ? `<span>${esc(x.r[0])}</span>` : ''}</div>`).join('')}</div>`;
    case 'map':
      return `<div class="pk-map"><div class="pkmap-h">${esc(il.t)}</div><div class="pkmap-g">${pkIcons(il.items).map((b) => `<button class="pkmap-b ${/hier/.test(b.de) ? 'here' : ''}"${pkSay(b.de)}><span>${b.ic}</span><b>${esc(b.de)}</b><small>${esc(b.pt)}</small></button>`).join('')}</div>${pkLeg(il.leg)}</div>`;
    case 'route':
      return `<div class="pk-route">${pkIcons(il.items).map((s) => `<button class="pk-step"${pkSay(s.de)}><span>${s.ic}</span><b>${esc(s.de)}</b><small>${esc(s.pt)}</small></button>`).join('')}</div>`;
    default: return '';
  }
}

function pocket(id) {
  const p = POCKETS.find((x) => x.id === id);
  if (!p) return go('extras', 'pocket');
  S.pockets = S.pockets || {};
  const fr = pkPairs(p.frases), ou = pkPairs(p.ouvir), dl = pkDlg(p), r = S.pockets[id];
  const ck = (j) => 'p:' + id + ':' + j, inCards = fr.filter((_, j) => S.cards[ck(j)]).length;
  const paras = dl.map((d) => d.who + ': ' + d.de);
  app.innerHTML = `<button class="ghost back" id="bk">← Extras</button>
  <div class="lhead"><div class="gbig">${p.e}</div><div><span class="eyebrow">Pocket · ${p.lv} · 5 a 10 min</span><h1>${esc(p.t)}</h1><p class="mut">${esc(p.pt)}</p></div></div>
  <div class="card"><h3>🎬 A cena</h3><p>${inl(p.cena)}</p></div>
  <h2>🗺️ Toque e ouça</h2><p class="mut">Toque em qualquer palavra das ilustrações para ouvir a pronúncia.</p>
  ${p.ill.map((il) => `<div class="pk-ill">${pkIll(il)}</div>`).join('')}
  ${(p.img || []).filter((im) => PK_LOOK[im.f] && PKIMG.has(im.f)).map((im) => `<div class="card pk-look"><h3>👀 Repare</h3><figure class="pk-img"><img src="images/pocket/${im.f}.webp" decoding="async" alt="${esc(im.alt)}" onload="this.parentNode.classList.add('ok')" onerror="this.closest('.pk-look').remove()"><figcaption>${inl(PK_LOOK[im.f])}</figcaption></figure></div>`).join('')}
  <h2>💬 Você diz</h2><div class="card pk-list">${fr.map((x) => `<p>${spk(x.de)}${micBtn(x.de, x.pt)}<span class="de">${esc(x.de)}</span><br><small>${esc(x.pt)}</small></p>`).join('')}
    <button id="pkCards" ${inCards === fr.length ? 'disabled' : ''}>${inCards === fr.length ? '✓ Frases nas cartas de revisão' : `🃏 Pôr as ${fr.length} frases nas cartas de revisão`}</button></div>
  <h2>👂 Você vai ouvir</h2><div class="card pk-list">${ou.map((x) => `<p>${spk(x.de)}<span class="de">${esc(x.de)}</span><br><small>${esc(x.pt)}</small></p>`).join('')}</div>
  <h2>🎭 A cena em diálogo</h2><div class="card tplayer"><div class="row"><button class="pri" id="pkPlay">▶ Ouvir a cena</button><button id="pkStop">⏹ Parar</button></div></div>
  <div class="card ttext">${dl.map((d, i) => `<div class="tpara" data-i="${i}">${spk(d.de)}<b class="twho">${esc(d.who)}:</b> <span class="de">${esc(d.de)}</span><br><small>${esc(d.pt)}</small></div>`).join('')}</div>
  <div class="box br"><span class="bl">🇩🇪 Dica cultural</span>${inl(p.dica)}</div>
  <h2>✅ Teste rápido</h2><div class="card">${r ? `<p class="mut">Você já fez: ${r.ok}/${r.n} acertos. Pode refazer para treinar.</p>` : ''}
    ${p.quiz.map((q, i) => `<div class="tq" data-q="${i}"><p>${i + 1}. ${esc(q.q)}</p><div class="opts col">${q.o.map((o, j) => `<button data-a="${j}">${esc(o)}</button>`).join('')}</div></div>`).join('')}
    <button class="pri big" id="pkCheck">Conferir respostas</button><div id="pkRes"></div></div>`;
  $('#bk').onclick = () => go('extras', 'pocket');
  $('#pkPlay').onclick = () => readFrom(paras, 0);
  $('#pkStop').onclick = stopRead;
  $$('.tpara').forEach((el) => (el.ondblclick = () => readFrom(paras, +el.dataset.i)));
  $('#pkCards').onclick = () => {
    fr.forEach((_, j) => { if (!S.cards[ck(j)]) S.cards[ck(j)] = newCard(); });
    save(); checkBadges(); toast(`🃏 ${fr.length} frases de "${p.t}" nas cartas de revisão`);
    $('#pkCards').disabled = true; $('#pkCards').textContent = '✓ Frases nas cartas de revisão';
  };
  const ans = {};
  $$('.tq').forEach((qe) => $$('button', qe).forEach((b) => (b.onclick = () => { $$('button', qe).forEach((x) => x.classList.remove('sel')); b.classList.add('sel'); ans[qe.dataset.q] = +b.dataset.a; })));
  $('#pkCheck').onclick = () => {
    if (Object.keys(ans).length < p.quiz.length) return toast('Responda todas as perguntas antes de conferir.');
    let ok = 0;
    p.quiz.forEach((q, i) => {
      const qe = document.querySelector(`.tq[data-q="${i}"]`);
      $$('button', qe).forEach((b) => { b.disabled = true; if (+b.dataset.a === q.a) b.classList.add('ok'); else if (+b.dataset.a === ans[i]) b.classList.add('no'); });
      if (ans[i] === q.a) ok++;
    });
    const n = p.quiz.length, first = !S.pockets[id], xp = first ? ok * 10 + (ok === n ? 20 : 0) : 0;
    sfx('conclusao'); S.pockets[id] = { ok, n, d: today() };
    if (xp) addXP(xp); markActive(); checkBadges(); save();
    $('#pkRes').innerHTML = `<div class="fb ${ok >= n - 1 ? 'ok' : 'no'}"><b>${ok}/${n} acertos${xp ? ' · +' + xp + ' XP' : ''}</b><p>${ok === n ? 'Perfeito! Você está pronta para essa situação.' : 'Volte às ilustrações e às frases das respostas em vermelho e ouça de novo.'}</p></div>`;
    $('#pkCheck').disabled = true;
  };
}
