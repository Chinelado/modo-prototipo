// Espanhol · trilha: monta a sequência com os módulos registrados em ES_MODS (es/curso.js e es/mNN.js).
// Carregado depois de todos os módulos e antes de config.js.

/* ---------- 2. sequência ---------- */
const SEQ = ES_MODS;
const TEXT_MOD = {};

// Níveis do espanhol: provas de referência DELE (Instituto Cervantes). Só os níveis que já têm módulos entram na trilha.
const PHASES_ES = {
  A1: ['A1 · DELE A1', 'Apresentar-se, fazer pedidos simples, perguntar e responder sobre o dia a dia.'],
  A2: ['A2 · DELE A2', 'Contar lembranças e experiências, comparar, fazer planos e resolver situações de rotina.'],
  B1: ['B1 · DELE B1', 'Contar histórias, expressar desejos e opiniões e lidar com imprevistos no trabalho e em viagens.'],
  B2: ['B2 · DELE B2', 'Discutir temas abstratos com fluência e defender um ponto de vista com detalhes.'],
  C1: ['C1 · DELE C1', 'Usar o espanhol com flexibilidade em contextos acadêmicos e profissionais.'],
  C2: ['C2 · DELE C2', 'Entender praticamente tudo e se expressar com precisão e nuance.'],
};
PHASES.forEach((p) => { const e = PHASES_ES[p.id]; if (e) { p.n = e[0]; p.can = e[1]; delete p.mods; delete p.ue; } }); // as horas por nível do Goethe não valem para o espanhol

/* ---------- 3. trilha ---------- */
const MODS = [], DAYS = [], LBYSID = {}, LMOD = [], LDAY = [];
(function buildSeq() {
  LESSONS.forEach((l) => { LBYSID[l.sid] = l; });
  const old = LESSONS.slice(); LESSONS.length = 0;
  SEQ.forEach((m, w) => {
    const li = [], plan = [];
    m.l.forEach((x) => {
      const l = LBYSID[String(x)];
      if (!l) throw new Error('Sequência: lição desconhecida ' + x);
      l.i = LESSONS.length; l.oi = l.i; LESSONS.push(l); li.push(l.i); plan.push({ i: l.i });
    });
    MODS.push({ lv: m.lv, n: m.n || '', li, plan });
    li.forEach((i, r) => { LMOD[i] = w; LDAY[i] = DAYS.length + 1; DAYS.push({ w, r, li: i, review: false }); });
    DAYS.push({ w, r: li.length, review: true });
  });
  const miss = old.filter((l) => !LESSONS.includes(l));
  if (miss.length) throw new Error('Sequência: lições fora da trilha: ' + miss.map((l) => l.sid).join(', '));
  // só os níveis que já têm módulos ficam na trilha
  for (let k = PHASES.length - 1; k >= 0; k--) {
    const p = PHASES[k], ws = MODS.map((m, w) => (m.lv === p.id ? w : -1)).filter((w) => w >= 0);
    if (!ws.length) { PHASES.splice(k, 1); continue; }
    p.weeks = [ws[0], ws[ws.length - 1] + 1];
    p.when = ws.length > 1 ? `Módulos ${ws[0] + 1}–${ws[ws.length - 1] + 1}` : `Módulo ${ws[0] + 1}`;
  }
})();
const modLs = (w) => (MODS[w] ? MODS[w].li.map((i) => LESSONS[i]) : []);
const firstDayOf = (w) => { const i = DAYS.findIndex((x) => x.w === w); return i < 0 ? DAYS.length : i + 1; };

// Progresso: o espanhol nasce com a sequência nova, então só remapeia quando a trilha crescer (mesma lógica do alemão).
const SEQ_V1_NEW = [], SEQ_ADDED_V2 = [];
const seqKeys = () => DAYS.map((d) => (d.review ? 'r' + d.w : LESSONS[d.li].sid));
function remapSeq(S, oldKeys) {
  const nk = seqKeys(), day = {}; nk.forEach((k, i) => { day[k] = i + 1; });
  const oldSids = oldKeys.filter((k) => !/^r\d+$/.test(k));
  const mapDays = (obj, keepReview) => {
    const out = {};
    Object.entries(obj || {}).forEach(([d, v]) => { const k = oldKeys[+d - 1]; if (k && day[k] && (keepReview || !/^r\d+$/.test(k))) out[day[k]] = v; });
    return out;
  };
  const nd = mapDays(S.done, false);
  Object.entries(S.done || {}).forEach(([d, v]) => { const k = oldKeys[+d - 1]; if (!/^r\d+$/.test(k || '')) return;
    const w = +k.slice(1); if (MODS[w] && MODS[w].li.every((i) => nd[LDAY[i]])) nd[day[k]] = v; });
  S.done = nd;
  S.lstep = mapDays(S.lstep, true);
  const hw = {}; Object.entries(S.hw || {}).forEach(([i, v]) => { const l = LBYSID[oldSids[+i]]; hw[l ? l.i : i] = v; }); S.hw = hw;
  (S.diary || []).forEach((x) => { if (!x.x && x.l != null && LBYSID[oldSids[x.l]]) x.l = LBYSID[oldSids[x.l]].i; });
}
function migrateSeq(S) {
  const now = seqKeys();
  if (S.seqDays && S.seqDays.join() !== now.join()) remapSeq(S, S.seqDays);
  S.seqV = 2; S.seqDays = now;
}
