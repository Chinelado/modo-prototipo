// Espanhol · base de dados (carregada logo depois de data/core.js, só em espanhol.html). Adaptada de en/base.js.
// Define as mesmas funções e listas que o motor usa no alemão (data/visuals.js, known.js, guide.js, vozes.js,
// pockets.js, extras.js, interativos.js…), com o conteúdo do espanhol. O que o espanhol ainda não tem (
// textos longos, pockets, interativos) fica vazio, e o motor simplesmente não mostra.

/* ---------- esquemas visuais (mesmo formato de data/visuals.js) ---------- */
const VIS = {};
const V = (t, ...specs) => { VIS[t] = specs; };

/* ---------- tarefas de casa, imagens e respostas alternativas ---------- */
const HW = {};
const IMG_CAP = {};
// respostas alternativas das lacunas (chave = texto exato da lacuna)
const CZ_ALT = {};

/* ---------- Comece aqui: as aulas estão em es/guia.js ---------- */
const GUIDE_OLD = {};
function migrateGuide(st) { st.guide = st.guide || {}; }
const GLOSS = [
  ['Sujeito', 'Quem faz a ação. Como no português, em espanhol ele pode ficar implícito: o verbo já mostra quem é.', '(Yo) Soy Ana. (Sou a Ana.)'],
  ['Ser e estar', 'Os dois existem em espanhol, quase como no português: ser para o que algo é, estar para lugar e estado.', 'Soy de Brasil. · Estoy cansada.'],
  ['Artigo', 'el / la = o / a; los / las = os / as; un / una = um / uma. O gênero às vezes muda em relação ao português.', 'el viaje · la leche'],
  ['Falso amigo', 'Palavra parecida com o português, mas com outro sentido.', 'exquisito = delicioso · embarazada = grávida'],
];

/* ---------- controle de vocabulário (mesma lógica de data/known.js) ---------- */
const SUP = {};
function S_(title, list) { SUP[title] = list.split('|').map((s) => { const [de, pt] = s.split('='); return { de, pt }; }); }
const NAMES = new Set(('modo ana paulo lucas sofía sofia mateo valentina diego camila lucía lucia carlos maría maria josé jose juan pedro laura marta pablo martín martin ' +
  'méxico mexico colombia argentina chile perú peru uruguay bolivia ecuador venezuela cuba españa brasil são paulo rio bogotá bogota lima santiago montevideo ' +
  'buenos aires quito cancún cancun medellín medellin guadalajara monterrey cartagena cusco garcía garcia lópez lopez pérez perez gonzález gonzalez rodríguez rodriguez silva souza').split(' '));
// variações da mesma palavra (hablo/hablar, casas/casa, comiendo/comer) contam como conhecidas
const stemOf = (w) => w.replace(/(amos|emos|imos|aron|ieron|aban|ían|ando|iendo|ados|adas|idos|idas|ado|ada|ido|ida|aste|iste|aba|ía|ar|er|ir|as|es|an|en|a|e|o|é|ó|í|s)$/, '');
function knownIndex() {
  const toks = (t) => (String(t).replace(/\*\*/g, '').match(/[\p{L}']+/gu) || []).map((w) => w.toLowerCase().replace(/^'+|'+$/g, ''));
  const taught = new Set(), stems = new Set();
  const teach = (t) => toks(t).forEach((w) => { taught.add(w); if (w.length > 4) stems.add(stemOf(w)); });
  // formas da mesma palavra: casas/casa, ciudades/ciudad, buena/bueno, hablo/hablar
  const forms = (w) => [w, w.replace(/s$/, ''), w.replace(/es$/, ''), w.replace(/ces$/, 'z'), w.replace(/a$/, 'o'), w.replace(/as$/, 'o'), w.replace(/os$/, 'o')];
  const isKnown = (w) => forms(w).some((f) => taught.has(f)) || (w.length > 4 && stemOf(w).length >= 3 && stems.has(stemOf(w))) || (LP.extra || []).includes(w);
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
    const unknown = [...new Set(used.flatMap(toks))].filter((w) => w.length > 1 && !isKnown(w) && !/^\d/.test(w) && !NAMES.has(w) && !PT_STOP.has(w) && !/[ãõçâêôà]/.test(w));
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
  ['yt', 'A1-B2', 'Dreaming Spanish', 'Vídeos de input compreensível, separados por nível, com falantes de vários países.'],
  ['yt', 'A1-B1', 'Easy Spanish', 'Entrevistas na rua em vários países latino-americanos, com legendas em espanhol e inglês.'],
  ['site', 'A2-B2', 'Practica Español (Agencia EFE)', 'Notícias reais adaptadas para quem aprende, com exercícios.'],
  ['site', 'B1-C2', 'BBC Mundo', 'Notícias e reportagens em espanhol, com foco na América Latina.'],
  ['pod', 'A2-B2', 'Españolistos', 'Podcast de conversas sobre cultura e dia a dia, com espanhol da Costa Rica.'],
  ['serie', 'B1-C1', 'Club de Cuervos', 'Série mexicana de comédia sobre um time de futebol: espanhol do México, rápido e natural.'],
  ['mus', 'A1-C2', 'LyricsTraining (lyricstraining.com)', 'Complete as letras de músicas em espanhol enquanto elas tocam, com quatro níveis de dificuldade.', 'https://lyricstraining.com/es'],
  // novos itens sempre no fim: o id (x + posição) marca o que já foi visto
].map(([t, lv, n, d, u], i) => {
  const L = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], [a, b] = lv.split('-');
  const lvs = L.slice(L.indexOf(a), L.indexOf(b || a) + 1);
  const qy = encodeURIComponent(n.replace(/\s*\(.*?\)/g, ''));
  const link = u || (t === 'yt' || t === 'mus' ? 'https://www.youtube.com/results?search_query=' + qy : 'https://www.google.com/search?q=' + qy);
  return { id: 'x' + i, t, lvs, n, d, link };
});

/* ---------- interativos do alemão (relógio, gata e caixote, linha do tempo…): ainda não existem no espanhol ---------- */
const NUM_DE = [], MIN_DE = {};
function uhrText() { return ''; }
const uhrFormal = () => '';
const KATZE = [], ZEITEN = [], DEKL = {}, DEKL_CASOS = [], BRIEF = [], BRIEF_QUIZ = [], GEWISS = [], GEWISS_PISTAS = [];

/* ---------- textos longos e Pockets: ainda não escritos no espanhol ---------- */
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
  const m = /^((?:Dr\.|Dra\.|Sr\.|Sra\.|[^:.!?¿¡]){2,32}):\s(.+)$/s.exec(p);
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

// papéis da frase desmontada: no espanhol, objeto direto e indireto (com os pronomes lo, la, le)
Object.assign(ROLES, { OA: ['objeto direto', 'o'], OD: ['objeto indireto', 'o'], AUX: ['verbo auxiliar (haber, estar, ir a)', 'v'], C: ['conjunção', 'w'] });
