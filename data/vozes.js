// Quem fala cada fala gravada. Vozes: a = feminina (Livia), b = masculina (Daniel),
// c = 2ª feminina (Lyra), d = 2ª masculina (William). Os IDs ficam em tools/elevenlabs.json.
// Usado pelo app (qual áudio tocar) e por tools/audio-elevenlabs.mjs (com qual voz gravar).

// Diálogos das lições: por padrão, falas 1 e 3 = 'a' e falas 2 e 4 = 'b'.
// Exceções pelo título da lição: [voz das falas 1 e 3, voz das falas 2 e 4].
const VOZ_DLG = {
  'Hallo! Ich bin …': 'ba', // Paulo pergunta, Lena responde
  'Im Beruf': 'ba', // "Ich wollte Ärztin werden"
  'Als ich Kind war': 'ba', // "Wo hast du deinen Mann kennengelernt?"
  'An die Chefin': 'ba', // a chefe é Frau Berger
  'Man lernt nie aus': 'ba', // "ich bin Quereinsteigerin"
  'Talkshow': 'ba', // "Frau Ministerin"
};

// Textos longos: voz de cada personagem. Narração sem nome = 'a', a não ser que '' diga outra (narrador homem).
const VOZ_TXT = {
  t16: { Lena: 'a', Paulo: 'b' },
  t18: { Verkäuferin: 'a', Kunde: 'b' },
  t19: { '': 'b' }, // carta do Tom
  t20: { Ärztin: 'a', 'Herr Lang': 'b' },
  t22: { Mieterin: 'a', 'Herr Wolf': 'b' },
  t23: { '': 'a', 'Julia, 29': 'a', 'Thomas, 52': 'd', 'Karin, 67': 'c', 'Jonas, 17': 'b' },
  t24: { Sprecherin: 'a' },
  t26: { Sachbearbeiterin: 'a', 'Herr Costa': 'b' },
  t28: { 'Frau Albers': 'a', 'Herr Demir': 'b', 'Frau Kraus': 'c' },
  t30: { Lara: 'a', Mehmet: 'b' },
  t32: { Moderatorin: 'a', 'Prof. Richter': 'b' },
  t34: { 'Frau Hartmann': 'a', 'Herr Seidel': 'b' },
  t02: { Reisende: 'a', Mitarbeiter: 'b' },
  t04: { 'Frau Koch': 'a', 'Frau Souza': 'c' },
  t05: { 'Markus, 45, Vater': 'b', 'Aylin, 17, Schülerin': 'a', 'Herr Becker, 58, Lehrer': 'd', 'Sofia, 34, Mutter': 'c' },
  t07: { Moderator: 'b', 'Dr. Wagner': 'a' },
  t08: { Jonas_88: 'b', Mira_K: 'a', Helmut_W: 'd', Leonie: 'c' },
  t12: { Moderatorin: 'a', 'Herr Brandt': 'b', 'Frau Yilmaz': 'c', 'Herr Lenz': 'd' },
};

// Frases soltas que devem sair com outra voz (texto exato → voz).
const VOZ_FRASE = {};

// "Nome: fala" → { who, txt }. Aceita títulos abreviados como "Dr." e "Prof." no nome.
function splitFala(p) {
  const m = /^((?:Dr\.|Prof\.|[^:.!?]){2,32}):\s(.+)$/s.exec(p);
  return m ? { who: m[1], txt: m[2] } : { who: '', txt: p };
}
const vozKey = (t) => String(t).replace(/\*\*/g, '').replace(/\(.*?\)/g, ' ').replace(/___/g, ' ').replace(/\s+/g, ' ').trim();

// Mapa texto → voz para tudo o que tem personagem. O resto usa 'a'.
let VOZ_MAPA = null;
function vozMapa() {
  if (VOZ_MAPA) return VOZ_MAPA;
  const m = new Map(), put = (t, s) => { const k = vozKey(t); if (k && !m.has(k)) m.set(k, s); };
  Object.entries(VOZ_FRASE).forEach(([t, s]) => put(t, s));
  LESSONS.forEach((l) => { const v = VOZ_DLG[l.de] || 'ab'; l.dlg.forEach((d, i) => put(d.de, v[i % 2])); });
  if (typeof POCKETS !== 'undefined') POCKETS.forEach((p) => pkDlg(p).forEach((d) => put(d.de, d.v)));
  TEXTS.forEach((t) => {
    const fixed = VOZ_TXT[t.id] || {}, order = {};
    t.paras.forEach((p) => {
      const { who, txt } = splitFala(p);
      if (!who) return put(txt, fixed[''] || 'a');
      const s = fixed[who] || (order[who] = order[who] || 'abcd'[Object.keys(order).length % 4]);
      put(txt, s);
    });
  });
  // textos das lições de Ler e escrever (trilha MODO): voz = narração, vozes = { personagem: voz } para "Nome: fala"
  LESSONS.forEach((l) => {
    const T = l.le && l.le.texto; if (!T || !(T.voz || T.vozes)) return;
    T.paras.forEach((p) => { const { who, txt } = splitFala(p); if (who && T.vozes && T.vozes[who]) put(txt, T.vozes[who]); else put(p, T.voz || 'a'); });
  });
  return (VOZ_MAPA = m);
}
const vozDe = (t) => vozMapa().get(vozKey(t)) || 'a';
