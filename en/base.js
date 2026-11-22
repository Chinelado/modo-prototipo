// Inglês · base de dados (carregada logo depois de data/core.js, só em ingles.html).
// Define as mesmas funções e listas que o motor usa no alemão (data/visuals.js, known.js, guide.js, vozes.js,
// pockets.js, extras.js, interativos.js…), com o conteúdo do inglês. O que o inglês ainda não tem (
// textos longos, pockets, interativos) fica vazio, e o motor simplesmente não mostra.

/* ---------- esquemas visuais (mesmo formato de data/visuals.js) ---------- */
const VIS = {};
const V = (t, ...specs) => { VIS[t] = specs; };

/* ---------- tarefas de casa, imagens e respostas alternativas ---------- */
const HW = {};
const IMG_CAP = {};
// respostas alternativas das lacunas (chave = texto exato da lacuna)
const CZ_ALT = {};

/* ---------- Comece aqui: as aulas estão em en/guia.js ---------- */
const GUIDE_OLD = {};
function migrateGuide(st) { st.guide = st.guide || {}; }
const GLOSS = [
  ['Sujeito', 'Quem faz a ação ou de quem se fala. Em inglês ele aparece sempre, mesmo quando o português o omite.', 'I am tired. (Estou cansado.)'],
  ['Verbo to be', 'Ser e estar ao mesmo tempo: am, is, are. Também é usado para a idade.', 'I am a nurse. · She is 20.'],
  ['Artigo', 'a / an = um, uma; the = o, a, os, as. Antes da profissão, o inglês usa a / an.', 'I am a teacher.'],
  ['Contração', 'Duas palavras juntas com apóstrofo, muito usadas na fala.', "I'm = I am · you're = you are"],
];

/* ---------- controle de vocabulário (mesma lógica de data/known.js) ---------- */
const SUP = {};
function S_(title, list) { SUP[title] = list.split('|').map((s) => { const [de, pt] = s.split('='); return { de, pt }; }); }
const NAMES = new Set(('modo ana paulo lucas mark emma sam nick kim lee john sarah tom rio brazil brazilian são paulo new york chicago boston miami ' +
  'london toronto canada usa america american english smith brown johnson garcia souza silva').split(' '));
// variações da mesma palavra (works/work, spelled/spell, studying/study) contam como conhecidas
const stemOf = (w) => w.replace(/'s$/, '').replace(/(ies)$/, 'y').replace(/(ing|ed|es|s)$/, '');
function knownIndex() {
  const toks = (t) => (String(t).replace(/\*\*/g, '').match(/[\p{L}']+/gu) || []).map((w) => w.toLowerCase().replace(/^'+|'+$/g, ''));
  const taught = new Set(), stems = new Set();
  const teach = (t) => toks(t).forEach((w) => { taught.add(w); if (w.length > 3) stems.add(stemOf(w)); });
  // formas da mesma palavra: eggs/egg, boxes/box, cities/city, cooking/cook, dancing/dance, worked/work, liked/like
  const forms = (w) => [w, w.replace(/'s$/, ''), w.replace(/s$/, ''), w.replace(/es$/, ''), w.replace(/ies$/, 'y'), w.replace(/ing$/, ''), w.replace(/ing$/, 'e'),
    w.replace(/(\p{L})\1ing$/u, '$1'), w.replace(/ed$/, ''), w.replace(/d$/, ''), w.replace(/ied$/, 'y'), w.replace(/(\p{L})\1ed$/u, '$1')];
  const isKnown = (w) => forms(w).some((f) => taught.has(f)) || (w.length > 3 && stems.has(stemOf(w))) || (LP.extra || []).includes(w);
  GUIDE.forEach((g) => g.body.split('\n').filter((x) => x.trim().startsWith('~ ')).forEach((x) => teach(x.trim().slice(2).split(' = ')[0])));
  const report = [];
  LESSONS.forEach((l) => {
    l.v.forEach((v) => teach(v.de));
    (SUP[l.de] || []).forEach((s) => teach(s.de));
    if (l.deep) {
      l.deep.split('\n').filter((x) => x.trim().startsWith('|')).forEach((row) => row.split('|').forEach((c) => { if (isGerman(c)) teach(c); }));
      (l.deep.match(/\*\*(.+?)\*\*/g) || []).forEach((b) => { if (isGerman(b)) teach(b); });
    }
    const used = [...l.ge, ...l.ex, ...l.dlg].map((e) => e.de).concat(l.cz.map((c) => c.q.replace('___', c.a)), l.bd ? [l.bd.t.map((x) => x.w).join(' ')] : [],
      l.deep ? l.deep.split('\n').filter((x) => x.trim().startsWith('~ ')).map((x) => x.trim().slice(2).split(' = ')[0]) : [])
      .map((t) => t.replace(/\(.*?\)/g, ' '));
    l.usedText = used.join(' ');
    const unknown = [...new Set(used.flatMap(toks))].filter((w) => w.length > 1 && !isKnown(w) && !/^\d/.test(w) && !NAMES.has(w.replace(/'s$/, '')) && !PT_STOP.has(w) && !/[ãõçáéíóúâêôà]/.test(w));
    report.push({ i: l.i, de: l.de, unknown });
    used.forEach(teach);
  });
  return report;
}

/* ---------- conteúdos externos (Explorar → Filmes, músicas e mais) ---------- */
const XT = {
  yt: ['▶️', 'YouTube', ['cor', 'esp']], mus: ['🎵', 'Música', ['mus']], film: ['🎬', 'Filme', ['esp', 'int']], serie: ['📺', 'Série', ['esp', 'int']],
  pod: ['🎧', 'Podcast', ['mus', 'intra']], book: ['📖', 'Livro', ['lin', 'intra']], site: ['📰', 'Leitura', ['lin', 'log']],
  ref: ['🧩', 'Referência', ['log']], app: ['💬', 'Conversa', ['int']], doc: ['🌿', 'Documentário', ['nat', 'esp']],
};
// Sem endereço: o link abre uma busca, para nunca apontar para um endereço errado.
const EXTRAS = [
  ['site', 'A1-B1', 'VOA Learning English', 'Notícias dos Estados Unidos em inglês mais lento e simples, com áudio e texto.'],
  ['yt', 'A1-B2', 'BBC Learning English', 'Aulas curtas de gramática, vocabulário e pronúncia, um tema por vídeo.'],
  ['yt', 'A1-B1', 'English with Lucy', 'Pronúncia e vocabulário explicados com calma, para quem está começando.'],
  ['pod', 'A2-B2', 'All Ears English', 'Podcast de conversas naturais em inglês americano, sobre situações do dia a dia.'],
  ['serie', 'A2-B2', 'Friends', 'Comédia com frases curtas e situações do cotidiano: comece com legendas em inglês.'],
  ['mus', 'A1-C2', 'LyricsTraining (lyricstraining.com)', 'Complete as letras de músicas em inglês enquanto elas tocam, com quatro níveis de dificuldade.', 'https://lyricstraining.com/en'],
  // novos itens sempre no fim: o id (x + posição) marca o que já foi visto
].map(([t, lv, n, d, u], i) => {
  const L = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], [a, b] = lv.split('-');
  const lvs = L.slice(L.indexOf(a), L.indexOf(b || a) + 1);
  const qy = encodeURIComponent(n.replace(/\s*\(.*?\)/g, ''));
  const link = u || (t === 'yt' || t === 'mus' ? 'https://www.youtube.com/results?search_query=' + qy : 'https://www.google.com/search?q=' + qy);
  return { id: 'x' + i, t, lvs, n, d, link };
});

/* ---------- interativos do alemão (relógio, gata e caixote, linha do tempo…): ainda não existem no inglês ---------- */
const NUM_DE = [], MIN_DE = {};
function uhrText() { return ''; }
const uhrFormal = () => '';
const KATZE = [], ZEITEN = [], DEKL = {}, DEKL_CASOS = [], BRIEF = [], BRIEF_QUIZ = [], GEWISS = [], GEWISS_PISTAS = [];

/* ---------- textos longos e Pockets: ainda não escritos no inglês ---------- */
const TEXTS = [];
const POCKETS = [];
const PK = (o) => POCKETS.push(o);
const pkPairs = (s) => (s || '').split('|').filter(Boolean).map((x) => { const [de, pt, ...r] = x.split('='); return { de, pt: pt || '', r }; });
const pkIcons = (s) => pkPairs(s).map((x) => { const i = x.de.indexOf('>'); return { ic: x.de.slice(0, i), de: x.de.slice(i + 1), pt: x.pt, r: x.r }; });
const pkDlg = (pk) => pkPairs(pk.dlg).map((x) => { const [who, v, de] = x.de.split('>'); return { who, v, de, pt: x.pt }; });
function pocketTexts() { return []; }

/* ---------- vozes (mesma lógica de data/vozes.js) ---------- */
// Diálogos das lições: por padrão, falas 1 e 3 = 'a' (feminina) e 2 e 4 = 'b' (masculina). Exceções pelo título.
const VOZ_DLG = {};
const VOZ_TXT = {};
const VOZ_FRASE = {};
function splitFala(p) {
  const m = /^((?:Dr\.|Mr\.|Ms\.|Mrs\.|[^:.!?]){2,32}):\s(.+)$/s.exec(p);
  return m ? { who: m[1], txt: m[2] } : { who: '', txt: p };
}
const vozKey = (t) => String(t).replace(/\*\*/g, '').replace(/\(.*?\)/g, ' ').replace(/___/g, ' ').replace(/\s+/g, ' ').trim();
let VOZ_MAPA = null;
function vozMapa() {
  if (VOZ_MAPA) return VOZ_MAPA;
  const m = new Map(), put = (t, s) => { const k = vozKey(t); if (k && !m.has(k)) m.set(k, s); };
  Object.entries(VOZ_FRASE).forEach(([t, s]) => put(t, s));
  LESSONS.forEach((l) => { const v = VOZ_DLG[l.de] || 'ab'; l.dlg.forEach((d, i) => put(d.de, v[i % 2])); });
  LESSONS.forEach((l) => {
    const T = l.le && l.le.texto; if (!T || !(T.voz || T.vozes)) return;
    T.paras.forEach((p) => { const { who, txt } = splitFala(p); if (who && T.vozes && T.vozes[who]) put(txt, T.vozes[who]); else put(p, T.voz || 'a'); });
  });
  return (VOZ_MAPA = m);
}
const vozDe = (t) => vozMapa().get(vozKey(t)) || 'a';

// papéis da frase desmontada: no inglês não há casos; o objeto é só "objeto"
Object.assign(ROLES, { OA: ['objeto direto', 'o'], OD: ['objeto indireto', 'o'], AUX: ['verbo auxiliar (do, does, be, have)', 'v'], C: ['conjunção', 'w'] });
