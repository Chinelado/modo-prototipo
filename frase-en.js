/* Frase livre do inglês ("Escreva uma frase verdadeira sobre você"): mesma interface de frase.js
   (checkFrase, modelOf, ruleOfLesson, fraseConcord), com as regras do inglês.
   O que o app confere, além da regra da lição: o to be combina com o sujeito (I am, you are, she is),
   a idade vem com to be (e não com have), e a profissão leva a / an, com an antes de som de vogal. */
(() => {

const norm = (t) => String(t).replace(/[’‘`´]/g, "'").replace(/[“”"«»]/g, '');
const fT = (t) => norm(t).toLowerCase().split(/[^\p{L}']+/u).map((w) => w.replace(/^'+|'+$/g, '')).filter(Boolean);
const clauses = (t) => norm(t).split(/[,;.!?:]+/).map(fT).filter((c) => c.length);
const has = (toks, re) => toks.some((w) => re.test(w));
const BE = /^(am|is|are|was|were|i'm|you're|he's|she's|it's|we're|they're|isn't|aren't|wasn't|weren't|what's|that's|there's)$/;
const NUM = /^(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred)$/;

/* Concordância do to be com o sujeito, e o sujeito que não pode faltar. */
const SUBJ = { i: 'am', you: 'are', we: 'are', they: 'are', he: 'is', she: 'is', it: 'is' };
const FORMA = { am: 'am', "'m": 'am', is: 'is', "isn't": 'is', are: 'are', "aren't": 'are' };
function concord(text) {
  for (const c of clauses(text)) {
    if (c[0] === 'am' && c[1] !== 'i') return { ok: false, msg: 'Em inglês o sujeito nunca some: <b>I am</b> (ou <b>I\'m</b>) …, e não só <b>am</b>.' };
    for (let p = 0; p < c.length - 1; p++) {
      const need = SUBJ[c[p]]; if (!need) continue;
      const v = c[p + 1], got = FORMA[v]; if (!got) continue;
      if (got !== need) return { ok: false, msg: `Com <b>${esc(c[p] === 'i' ? 'I' : c[p])}</b>, o to be é <b>${need}</b> (${c[p] === 'i' ? 'I' : c[p]} ${need}). Você escreveu <b>${esc(v)}</b>.` };
    }
    // pergunta: o to be vem antes do sujeito (Are you…? Is she…?)
    for (let p = 0; p < c.length - 1; p++) {
      const got = FORMA[c[p]], need = SUBJ[c[p + 1]]; if (!got || !need) continue;
      if (p > 0 && SUBJ[c[p - 1]]) continue;
      if (got !== need) return { ok: false, msg: `Na pergunta com <b>${esc(c[p + 1] === 'i' ? 'I' : c[p + 1])}</b>, o to be é <b>${need}</b>: ${need[0].toUpperCase() + need.slice(1)} ${c[p + 1] === 'i' ? 'I' : c[p + 1]} …?` };
    }
  }
  // idade com have: I have twenty years
  if (/\b(have|has)\s+(\d+|[a-z-]+)\s+years?\b/i.test(norm(text))) return { ok: false, msg: 'Em inglês a idade se diz com <b>to be</b>: <b>I\'m twenty</b> (years old), e não "I have twenty years".' };
  return { ok: true };
}

/* a ou an: manda o som da palavra seguinte. Exceções comuns: an hour, an honest; a university, a European, a one-… */
const AN_EXC = /^(hour|hours|honest|honor|heir)/, A_EXC = /^(uni|use|usu|euro|one|once|ukr)/;
function artigo(text) {
  const c = fT(text);
  for (let p = 0; p < c.length - 1; p++) {
    const art = c[p], w = c[p + 1]; if (art !== 'a' && art !== 'an') continue;
    const vogal = (/^[aeiou]/.test(w) && !A_EXC.test(w)) || AN_EXC.test(w);
    if (art === 'a' && vogal) return `Antes de som de vogal, use <b>an</b>: an ${esc(w)}.`;
    if (art === 'an' && !vogal) return `Antes de som de consoante, use <b>a</b>: a ${esc(w)}.`;
  }
  return true;
}

/* Regras por lição: d = o que o aluno vê; c = conferência (texto, tokens → true ou mensagem); pres = conferir o to be. */
const R = (d, c, pres = true) => ({ d, c, pres });
const need = (ok, msg) => (ok ? true : msg);
const RULES = {
  to_be: R('o verbo <b>to be</b> para dizer quem você é (I\'m …, She\'s …, You are …)', (t, k) => need(has(k, BE), 'Use o <b>to be</b>: I\'m …, you are …, she\'s …')),
  from: R('de onde você ou alguém é, com <b>from</b> (I\'m from Brazil), onde mora (I live in …) ou uma pergunta com to be (Are you …?)', (t, k) => need(k.includes('from') || (k.includes('live') && k.includes('in')) || (has(k, BE) && /\?\s*$/.test(t.trim())), 'Diga a origem com <b>from</b> (I\'m from Brazil) ou onde mora com <b>live in</b> (I live in Rio).')),
  spell: R('uma frase que <b>soletre</b> algo, letra por letra com hífens (My name is Ana: A-N-A), ou um e-mail com <b>at</b> e <b>dot</b>', (t, k) => need(/\p{L}(\s*-\s*\p{L}){2,}/u.test(t) || (k.includes('at') && k.includes('dot')) || has(k, /^(spell|spelled|double|capital)$/), 'Soletre com hífens (<b>A-N-A</b>) ou diga um e-mail com <b>at</b> e <b>dot</b>.')),
  age: R('a <b>idade</b> com to be (I\'m twenty / My son is twelve)', (t, k) => need(has(k, BE) && (has(k, NUM) || /\d/.test(t) || k.includes('old')), has(k, BE) ? 'Diga a idade com um número: I\'m <b>twenty</b>.' : 'A idade se diz com <b>to be</b>: I\'m twenty.')),
  job: R('uma <b>profissão</b> com <b>a</b> ou <b>an</b> (I\'m a nurse / She\'s an engineer), ou onde você trabalha (I work in …)', (t, k) => {
    const a = artigo(t); if (a !== true) return a;
    if (has(k, BE) && !k.some((w) => w === 'a' || w === 'an') && !has(k, /^(retired|unemployed|from|not|my|your|his|her)$/)) return 'Em inglês a profissão leva artigo: I\'m <b>a</b> nurse, she\'s <b>an</b> engineer.';
    return need(k.includes('a') || k.includes('an') || has(k, /^(work|works|job)$/), 'Diga a profissão com <b>a</b> / <b>an</b> (I\'m a nurse) ou onde trabalha (I work in …).');
  }),
  dados: R('um <b>dado pessoal</b>: o nome (My first name is …), a origem (I\'m from …) ou as línguas que você fala (I speak …)', (t, k) => {
    if (/\b(brazilian|american|portuguese|english|spanish|canadian|mexican)\b/.test(norm(t)) && !/\b(Brazilian|American|Portuguese|English|Spanish|Canadian|Mexican)\b/.test(norm(t))) return 'Em inglês, nacionalidades e línguas começam com maiúscula: <b>Brazilian</b>, <b>English</b>.';
    return need(has(k, /^(name|from|speak|live|born|birth|nationality)$/) || has(k, BE), 'Diga um dado seu: My first name is … / I\'m from … / I speak …');
  }),
  frage: R('uma <b>pergunta</b> (Where are you from? / Are you Brazilian?)', (t) => need(/\?\s*$/.test(t.trim()), 'Termine a pergunta com <b>?</b>.')),
};
const ruleOfLesson = (les) => RULES[les.rule] || null;

// Conferência completa. Devolve { pt, rule, struct: true|false|null, msg, conc: {ok,msg}|null, word }.
function checkFrase(text, les, sug) {
  const toks = fT(text), pt = toks.filter((w) => /^(eu|você|voce|não|nao|é|um|uma|meu|minha|que|com|para|muito|gosto|tenho|sou|estou|moro|do|da|no|na|de|anos)$/.test(w)).length >= Math.max(2, toks.length * 0.4);
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
