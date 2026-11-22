/* Frase livre do espanhol ("Escreva uma frase verdadeira sobre você"): mesma interface de frase.js e frase-en.js
   (checkFrase, modelOf, ruleOfLesson, fraseConcord), com as regras do espanhol.
   O que o app confere, além da regra da lição: ser, estar e tener combinam com o pronome (yo soy, tú eres, ella tiene),
   e os sinais mais comuns de portunhol (muy × mucho, "yo gusto de", "anos" sem til, palavras em português).
   Os padrões usam a frase como palavras separadas por espaço, com espaço nas pontas (C(k)): o \b do JavaScript
   não reconhece letras acentuadas (tú, él, más) como parte da palavra. */
(() => {

const norm = (t) => String(t).replace(/[’‘`´]/g, "'").replace(/[“”"«»]/g, '');
const fT = (t) => norm(t).toLowerCase().split(/[^\p{L}']+/u).map((w) => w.replace(/^'+|'+$/g, '')).filter(Boolean);
const clauses = (t) => norm(t).split(/[,;.!?¿¡:]+/).map(fT).filter((c) => c.length);
const has = (toks, re) => toks.some((w) => re.test(w));
const C = (k) => ' ' + k.join(' ') + ' ';
const low = (t) => norm(t).toLowerCase();
const SER = /^(soy|eres|sos|es|somos|son|era|eras|éramos|eran|fui|fue|fuimos|fueron)$/;
const ESTAR = /^(estoy|estás|está|estamos|están|estaba|estaban|estuve|estuvo)$/;
const NUM = /^(cero|uno|una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce|trece|catorce|quince|dieciséis|dieciseis|diecisiete|dieciocho|diecinueve|veinte|veinti\p{L}+|treinta|cuarenta|cincuenta|sesenta|setenta|ochenta|noventa|cien|ciento)$/u;

/* Concordância de ser, estar e tener com o pronome, e os sinais de portunhol. */
const PRON = { yo: 0, 'tú': 1, tu: 1, vos: 1, usted: 2, 'él': 2, ella: 2, nosotros: 3, nosotras: 3, ustedes: 4, ellos: 4, ellas: 4 };
const CONJ = {
  ser: [['soy'], ['eres', 'sos'], ['es'], ['somos'], ['son']],
  tener: [['tengo'], ['tienes', 'tenés'], ['tiene'], ['tenemos'], ['tienen']],
  estar: [['estoy'], ['estás'], ['está'], ['estamos'], ['están']],
};
const FORMA = {}; Object.entries(CONJ).forEach(([v, ps]) => ps.forEach((fs, p) => fs.forEach((f) => { FORMA[f] = { v, p }; })));
const MUY_ADJ = 'bueno|buena|buenos|buenas|bonito|bonita|grande|caro|cara|barato|barata|interesante|bien|mal|rápido|rápida|tarde|temprano|cansado|cansada|feliz|lejos|cerca|fácil|difícil|importante|alto|alta|bajo|baja|lindo|linda|rico|rica|simpático|simpática|contento|contenta|frío|fría|caliente|largo|larga|pequeño|pequeña|nuevo|nueva|viejo|vieja|joven';
const MUCHO_N = 'trabajo|tiempo|dinero|gente|amigos|amigas|cosas|calor|frío|hambre|sed|sueño|miedo|libros|años|personas|agua|comida|ruido|tráfico';
const PT_TR = { eu: 'yo', 'você': 'tú / usted', voce: 'tú / usted', 'vocês': 'ustedes', 'não': 'no', nao: 'no', obrigado: 'gracias', obrigada: 'gracias', 'também': 'también', 'então': 'entonces', muito: 'muy / mucho', muita: 'mucha', tenho: 'tengo', estou: 'estoy', meu: 'mi', minha: 'mi', sou: 'soy', moro: 'vivo' };
function concord(text) {
  const t = low(text), k = fT(text), c = C(k);
  for (const cl of clauses(text)) {
    for (let p = 0; p < cl.length - 1; p++) {
      const pr = PRON[cl[p]]; if (pr == null || (p > 0 && /^(y|e|o|u|ni)$/.test(cl[p - 1]))) continue; // "Ana y yo somos": sujeito composto
      const f = FORMA[cl[p + 1]]; if (!f || f.p === pr) continue;
      const certo = CONJ[f.v][pr][0];
      return { ok: false, msg: `Com <b>${esc(cl[p])}</b>, o verbo ${f.v} fica <b>${certo}</b> (${esc(cl[p])} ${certo}). Você escreveu <b>${esc(cl[p + 1])}</b>.` };
    }
  }
  // portunhol mais comum
  const ptw = k.find((w) => PT_TR[w]);
  if (ptw) return { ok: false, msg: `<b>${esc(ptw)}</b> é português. Em espanhol: <b>${PT_TR[ptw]}</b>.` };
  if (new RegExp(' muy (' + MUCHO_N + ') ').test(c)) return { ok: false, msg: 'Antes de substantivo, use <b>mucho / mucha</b>: mucho trabajo, mucha gente. <b>muy</b> é para adjetivos (muy bueno).' };
  if (new RegExp(' mucho (' + MUY_ADJ + ') ').test(c)) return { ok: false, msg: 'Antes de adjetivo ou advérbio, use <b>muy</b>: muy bueno, muy bien. <b>mucho</b> é para substantivos.' };
  if (/ gusto de /.test(c)) return { ok: false, msg: 'Com gustar, a coisa é o sujeito: <b>me gusta</b> el café (e não "yo gusto de café").' };
  if (/ anos /.test(c)) return { ok: false, msg: 'Ano em espanhol é <b>año</b>, com ñ: tengo veinte <b>años</b>. Sem o til, a palavra é outra (e é uma gafe).' };
  if (/soy\s+(\d+|\p{L}+)\s+años/u.test(t)) return { ok: false, msg: 'A idade se diz com <b>tener</b>: <b>tengo</b> veinte años.' };
  return { ok: true };
}

/* Regras por lição: d = o que o aluno vê; c = conferência (texto, tokens → true ou mensagem). */
const R = (d, c, pres = true) => ({ d, c, pres });
const need = (ok, msg) => (ok ? true : msg);
const RULES = {
  // ---------- Módulo 1 ----------
  ser_hola: R('o verbo <b>ser</b> para dizer quem você é (Soy Ana, Ella es mi amiga…)', (t, k) => need(has(k, SER) || has(k, /^(llamo|llamas|llama|llamamos|hola|buenos|buenas|adiós|chau|gusto|igualmente)$/), 'Use <b>ser</b> ou <b>llamarse</b>: <b>Soy</b> Ana. / <b>Me llamo</b> Ana.')),
  origen: R('de onde você é (<b>Soy de</b> … / <b>Soy</b> brasileña)', (t, k) => {
    const c = C(k);
    if (/ soy (do|da) /.test(c)) return 'Em espanhol, "do" e "da" não existem: <b>Soy de</b> Brasil, <b>soy de la</b> ciudad.';
    return need(/ (soy|eres|sos|es|somos|son|vivo|vives|vive) de /.test(c) || / (de dónde|dónde|vivo en|vive en|vives en|hablo|hablas|habla) /.test(c) || has(k, /^(brasileño|brasileña|brasileños|mexicano|mexicana|argentino|argentina|colombiano|colombiana|chileno|chilena|peruano|peruana|uruguayo|uruguaya|español|española)$/), 'Diga a origem: <b>Soy de</b> Brasil. / <b>Soy brasileña</b>.');
  }),
  deletrear: R('soletrar algo (A-N-A) ou dizer um e-mail com <b>arroba</b> e <b>punto</b>', (t, k) => need(/\p{L}(\s*-\s*\p{L}){2,}/u.test(t) || (k.includes('arroba') && k.includes('punto')) || has(k, /^(escribe|escribo|escribes|deletrear|letra|letras|mayúscula|minúscula|apellido|correo|repetir|hache|uve|be|zeta|ese|jota|eñe)$/), 'Soletre com hífens (<b>A-N-A</b>) ou diga um e-mail com <b>arroba</b> e <b>punto</b>.')),
  edad: R('a idade com <b>tener</b> (Tengo treinta años)', (t, k) => {
    if (/soy\s+(\d+|\p{L}+)\s+años/u.test(low(t))) return 'A idade se diz com <b>tener</b>: <b>tengo</b> treinta años.';
    return need((has(k, /^(tengo|tienes|tiene|tenemos|tienen|cumplo|cumple)$/) && (has(k, NUM) || /\d/.test(t) || k.includes('años'))) || has(k, /^(número|teléfono|celular|años|cumpleaños)$/), 'Diga a idade com <b>tener</b> e um número: <b>Tengo</b> treinta <b>años</b>.');
  }),
  profesion: R('a profissão ou o trabalho (Soy profesora / Trabajo en …)', (t, k) => {
    const c = C(k);
    if (/ trabajo (en|de) (um|uma) /.test(c)) return 'Em espanhol, o artigo é <b>un / una</b>: trabajo en <b>una</b> oficina.';
    return need(/ (soy|eres|es|somos|son) \p{L}+/u.test(c) || has(k, /^(trabajo|trabajas|trabaja|trabajamos|trabajan|estudio|estudias|estudia|dedico|dedicas|dedica|vivo|vive|vives|vivimos|viven|trabajas)$/), 'Diga o que você faz: <b>Soy</b> profesora. / <b>Trabajo en</b> un hospital.');
  }),
  ficha: R('um dado pessoal (Me llamo … / Mi apellido es … / Soy de … / Hablo …)', (t, k) => need(has(k, /^(llamo|llama|nombre|apellido|apellidos|soy|vivo|hablo|nací|nacionalidad|correo|teléfono|dirección|fecha|escriba|complete|firme)$/), 'Escreva um dado pessoal: <b>Me llamo</b> … / <b>Mi apellido es</b> … / <b>Hablo</b> portugués.')),
};
const ruleOfLesson = (les) => RULES[les.rule] || null;

// Conferência completa. Devolve { pt, rule, struct: true|false|null, msg, conc: {ok,msg}|null, word }.
function checkFrase(text, les, sug) {
  const toks = fT(text), pt = toks.filter((w) => /^(eu|você|voce|não|nao|meu|minha|tenho|sou|estou|moro|muito|obrigado|obrigada|também|um|uma|ele|é|são|com|gosto|anos)$/.test(w)).length >= Math.max(2, toks.length * 0.4);
  const rule = ruleOfLesson(les), r = rule ? rule.c(text, toks) : null;
  const conc = concord(text);
  return { pt, rule, struct: rule ? r === true : null, msg: r === true ? '' : r, conc, word: sug ? wordIn(text, sug.de) : null };
}
// Exemplo da própria lição que segue a regra (para mostrar como modelo, sem obrigar a copiar).
function modelOf(les) {
  const rule = ruleOfLesson(les), all = [...les.ge, ...les.ex, ...les.dlg];
  return (rule && all.find((s) => rule.c(s.de, fT(s.de)) === true)) || les.ge[0];
}

Object.assign(window, { checkFrase, modelOf, ruleOfLesson, fraseConcord: concord });
})();
