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
function concord(text, terceira = false) {
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
  // o -s de he, she, it (a partir da lição da rotina) e o verbo sem -s depois de does / doesn't
  if (terceira) {
    for (const c of clauses(text)) {
      for (let p = 0; p < c.length - 1; p++) {
        if (!/^(he|she|it)$/.test(c[p])) continue;
        if (p > 0 && /^(does|did|doesn't|didn't|can|can't|will|won't|would|should|could|must|might|may|to|let|make|help|do|don't)$/.test(c[p - 1])) continue; // pergunta ou outro verbo antes
        let v = c[p + 1]; if (FREQ.test(v) && c[p + 2]) v = c[p + 2];
        if (BASE.test(v)) return { ok: false, msg: `Com <b>${esc(c[p])}</b>, o verbo do presente ganha -s: ${esc(c[p])} <b>${esc(com_s(v))}</b>. Você escreveu <b>${esc(v)}</b>.` };
      }
      for (let p = 0; p < c.length - 2; p++) {
        if (!/^(does|doesn't|didn't|did)$/.test(c[p])) continue;
        const v = c[p + 2]; if (S_FORM.test(v)) return { ok: false, msg: `Depois de <b>${esc(c[p])}</b>, o verbo fica na forma básica, sem -s: ${esc(c[p])} ${esc(c[p + 1])} <b>${esc(sem_s(v))}</b>.` };
      }
    }
  }
  // idade com have: I have twenty years
  if (/\b(i|you|he|she|we|they|my \p{L}+) (have|has)\s+(\d+|[a-z]+(-[a-z]+)?)\s+years?(\s+old)?\s*([.!?,]|$)/iu.test(norm(text))) return { ok: false, msg: 'Em inglês a idade se diz com <b>to be</b>: <b>I\'m twenty</b> (years old), e não "I have twenty years".' };
  return { ok: true };
}

/* verbos comuns na forma básica (para o -s de he, she, it) */
const VERBOS = 'work|live|like|love|hate|go|have|watch|study|do|play|get|eat|drink|read|speak|teach|cook|want|need|know|come|make|take|drive|walk|run|swim|dance|start|finish|leave|clean|wake|sleep|write|buy|use|say|think|travel|visit|help|call|wash|open|close|teach|learn|listen|look|see';
const BASE = new RegExp('^(' + VERBOS + ')$');
const IRR3 = { have: 'has', go: 'goes', do: 'does', study: 'studies', watch: 'watches', wash: 'washes', finish: 'finishes', teach: 'teaches', fly: 'flies', try: 'tries', buy: 'buys', play: 'plays' };
const com_s = (v) => IRR3[v] || (/(s|sh|ch|x|o)$/.test(v) ? v + 'es' : /[^aeiou]y$/.test(v) ? v.slice(0, -1) + 'ies' : v + 's');
const S_FORM = new RegExp('^(' + VERBOS.split('|').map(com_s).join('|') + ')$');
const sem_s = (v) => (Object.entries(IRR3).find(([, s]) => s === v) || [])[0] || v.replace(/ies$/, 'y').replace(/(sh|ch|x|o|ss)es$/, '$1').replace(/s$/, '');
const FREQ = /^(always|usually|often|sometimes|rarely|never|also|really|still|just|only)$/;

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
  // ---------- Módulo 2 ----------
  this_that: R('<b>this</b>, <b>that</b>, <b>these</b> ou <b>those</b> para mostrar algo (This is my phone. / Those are my keys.)', (t, k) => {
    const c = k.join(' ');
    if (/\b(these|those) is\b/.test(c)) return 'these e those são plural: <b>these are</b>, <b>those are</b>.';
    if (/\b(this|that) are\b/.test(c)) return 'this e that são singular: <b>this is</b>, <b>that is</b>.';
    return need(has(k, /^(this|that|these|those|that's)$/), 'Use this, that, these ou those: <b>This is</b> my phone.');
  }),
  family: R('alguém da sua família com um <b>possessivo</b> (my, his, her…) ou com <b>\'s</b> (Ana\'s brother)', (t, k) => need(has(k, /^(my|your|his|her|our|their)$/) || /\p{L}'s\s+\p{L}/u.test(norm(t)), 'Use um possessivo (my, his, her…) ou \'s: My sister is … / Ana\'s husband is …')),
  plural: R('um <b>plural</b> com número ou quantidade (I have two cats / Many people are …)', (t, k) => {
    if (has(k, /^(childs|childrens|peoples|mans|womans|mens|womens|persons|foots|tooths|boxs|citys|babys)$/)) return 'Esse plural é irregular ou leva -es / -ies: children, people, men, women, boxes, cities.';
    return need(has(k, /^(two|three|four|five|six|seven|eight|nine|ten|many|people|children|men|women)$/) || /\d/.test(t), 'Use um número ou many com o plural: I have two cats.');
  }),
  adjetivo: R('uma descrição com <b>cor ou adjetivo antes do substantivo</b> (a red car / two black cats)', (t, k) => {
    const COR = 'red|blue|green|yellow|black|white|orange|brown|gray|grey|pink|purple|new|old|small|big|cheap|expensive|beautiful';
    if (has(k, new RegExp('^(' + COR + ')s$')) && !k.includes('browns')) return 'O adjetivo não tem plural: two <b>black</b> cats.';
    if (new RegExp('\\b(a|an|the|two|three|my|your) (car|bag|dog|cat|house|phone|book|cup|chair|table|shirt)s? (' + COR + ')\\b').test(k.join(' '))) return 'Em inglês o adjetivo vem <b>antes</b> do substantivo: a <b>red car</b>.';
    return need(has(k, new RegExp('^(' + COR + '|dark|light|color)$')), 'Descreva com uma cor ou um adjetivo: a <b>red</b> car, It\'s <b>blue</b>.');
  }),
  gostos: R('um <b>gosto</b> com like, love ou hate (I like reading / I don\'t like coffee)', (t, k) => {
    if (/\blike of\b/.test(k.join(' '))) return 'like não tem "de": I like music.';
    if (/\b(like|love|hate) (read|cook|dance|swim|run|travel|play|watch)\b/.test(k.join(' '))) return 'A atividade depois de like vai com -ing (I like <b>reading</b>) ou com to (I like <b>to read</b>).';
    return need(has(k, /^(like|likes|love|loves|hate|hates|enjoy)$/), 'Diga um gosto: I <b>like</b> …, I <b>love</b> …, I don\'t like …');
  }),
  conectores: R('duas ideias ligadas por <b>and</b>, <b>but</b>, <b>or</b> ou <b>because</b>', (t, k) => need(has(k, /^(and|but|or|because)$/), 'Ligue duas ideias com and, but, or ou because.')),
  // ---------- Módulo 3 ----------
  hora: R("uma <b>hora</b> com It's (It's seven thirty / It's half past six) ou um horário com at (at ten)", (t, k) => {
    if (/^\s*is\s/i.test(norm(t))) return "As horas precisam do sujeito: <b>It's</b> ten o'clock.";
    return need(has(k, /^(it's|o'clock|past|half|quarter|noon|midnight|at)$/) || /\d:\d\d/.test(t), "Diga uma hora: <b>It's</b> seven thirty. / I get up <b>at</b> seven.");
  }),
  terceira: R('a rotina de <b>outra pessoa</b>, com o -s do verbo (She works … / He gets up at …)', (t, k) => need(has(k, /^(he|she|it)$/) || /^\p{Lu}\p{L}+\s+\p{L}+s\b/u.test(norm(t).trim()) || has(k, /^(my|his|her)$/), 'Fale de outra pessoa: <b>She works</b> … / <b>My brother gets up</b> at …')),
  do_does: R("uma <b>pergunta</b> com do / does ou uma <b>negativa</b> com don't / doesn't", (t, k) => {
    const c = k.join(' ');
    if (/\bdo (he|she|it)\b/.test(c)) return 'Com he, she e it a pergunta usa <b>does</b>: Does she …?';
    if (/\bdoes (i|you|we|they)\b/.test(c)) return 'Com I, you, we e they a pergunta usa <b>do</b>: Do you …?';
    if (/\b(he|she|it) don't\b/.test(c)) return "Com he, she e it a negativa é <b>doesn't</b>.";
    return need(has(k, /^(do|does|don't|doesn't)$/), "Pergunte com <b>do / does</b> (Do you …? Does she …?) ou negue com <b>don't / doesn't</b>.");
  }),
  tempo: R('<b>quando</b>: at + hora, on + dia ou in + mês / parte do dia (On Monday at ten …)', (t, k) => {
    const c = k.join(' ');
    if (/\bin (monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/.test(c)) return 'Dia da semana usa <b>on</b>: on Monday.';
    if (/\b(on|in) (one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|noon)\b/.test(c) || /\b(on|in) \d{1,2}(:\d\d)?\s*(a\.?m|p\.?m)?\b(?!\d)/i.test(norm(t)) && !/\b(on|in) \d+(st|nd|rd|th)\b/i.test(norm(t))) return 'Hora usa <b>at</b>: at ten.';
    if (/\b(at|on) (january|february|march|april|may|june|july|august|september|october|november|december)\b/.test(c)) return 'Mês usa <b>in</b>: in May.';
    return need((has(k, /^(at|on|in)$/) && has(k, /^(monday|tuesday|wednesday|thursday|friday|saturday|sunday|morning|afternoon|evening|night|january|february|march|april|may|june|july|august|september|october|november|december|noon|weekend)$/)) || /\bat (\d|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|noon|midnight|night)\b/i.test(norm(t)), 'Diga quando: <b>on</b> Monday, <b>at</b> ten, <b>in</b> the morning.');
  }),
  frequencia: R('um hábito com <b>always, usually, often, sometimes ou never</b>, no lugar certo', (t, k) => {
    if (/\b(always|usually|often|sometimes|never) (am|is|are)\b/.test(k.join(' '))) return "Com o to be, a frequência vem <b>depois</b>: I'm <b>always</b> tired.";
    return need(has(k, /^(always|usually|often|sometimes|rarely|never|once|twice|times|every)$/), 'Use uma palavra de frequência: I <b>always</b> … / She <b>never</b> …');
  }),
  convite: R("um <b>convite</b> (Would you like to …?) ou uma resposta: aceitar (I'd love to!) ou recusar (Sorry, I can't …)", (t, k) => {
    if (/\bwould you like (come|go|have|eat|watch)\b/.test(k.join(' '))) return 'Depois de would you like vem <b>to</b>: Would you like <b>to</b> come?';
    return need(has(k, /^(would|i'd|can't|cannot|love|sorry|invitation|party)$/), "Convide (Would you like to …?), aceite (I'd love to!) ou recuse (Sorry, I can't …).");
  }),
  // ---------- Módulo 4 ----------
  comida: R("comida com <b>some</b> ou <b>any</b>, ou fome e sede com to be (I'm hungry)", (t, k) => {
    const c = k.join(' ');
    if (/\b(have|has) (hungry|thirsty)\b/.test(c)) return "Fome e sede se dizem com to be: <b>I'm hungry</b>.";
    if (/\b(don't|doesn't|isn't|aren't|not) have some\b|\bdon't .*\bsome\b/.test(c) && !/\bany\b/.test(c)) return 'Na negativa, use <b>any</b>: We don\'t have <b>any</b> milk.';
    if (/\ba (bread|rice|milk|water|cheese|sugar|butter|meat)\b/.test(c)) return 'Essa comida não se conta: diga <b>some</b> bread, e não "a bread".';
    return need(has(k, /^(some|any|hungry|thirsty)$/), "Use some, any, hungry ou thirsty: We have <b>some</b> eggs. / I'm <b>hungry</b>.");
  }),
  quantidade: R('uma <b>quantidade</b> ou um <b>preço</b> (How many …? / How much is it? / a bottle of water)', (t, k) => {
    const c = k.join(' ');
    if (/\bhow many (milk|water|rice|bread|coffee|money|time|sugar|cheese)\b/.test(c)) return 'Isso não se conta: <b>How much</b> milk?';
    if (/\bhow much (eggs|apples|tomatoes|people|bottles|cans|books|potatoes)\b/.test(c)) return 'Isso se conta: <b>How many</b> eggs?';
    if (/\bdozen of\b/.test(c)) return 'Em a dozen eggs não tem <b>of</b>.';
    return need(has(k, /^(much|many|bottle|bottles|pound|pounds|dozen|can|cans|carton|dollar|dollars|cents|cent|price)$/) || /\$\s*\d/.test(t), 'Pergunte ou diga uma quantidade ou um preço: How much is it? / a bottle of water.');
  }),
  pedido: R("um <b>pedido</b> educado: I'd like … ou Can I have …?", (t, k) => {
    if (/^\s*(i want|give me)\b/i.test(norm(t))) return "Para pedir com educação, prefira <b>I'd like</b> … ou <b>Can I have</b> …?";
    return need(/\b(i'd like|i would like|can i have|could i have|may i have)\b/i.test(norm(t)), "Peça com educação: <b>I'd like</b> a coffee, please. / <b>Can I have</b> a muffin?");
  }),
  there: R('o que tem num lugar com <b>there is / there are</b> (There\'s a bank near here.)', (t, k) => {
    const c = k.join(' ');
    if (/^\s*(have|has) (a|an|two|three|some|many|any)\b/i.test(norm(t))) return '"Tem" de existir é <b>there is / there are</b>: There\'s a bank here.';
    if (/\bthere is (two|three|four|five|many|some \p{L}+s)\b/u.test(c)) return 'Com várias coisas, use <b>there are</b>.';
    if (/\bthere are (a|an|one)\b/.test(c)) return 'Com uma coisa, use <b>there is</b> (there\'s).';
    return need(has(k, /^(there|there's)$/), 'Use <b>there is / there are</b>: There\'s a pharmacy on my street.');
  }),
  roupa: R('uma frase de <b>loja de roupas</b>: tamanho, provar, too + adjetivo ou o preço', (t, k) => {
    if (/\b(pants|jeans|shoes|sneakers|shorts|glasses) is\b/.test(k.join(' '))) return 'pants, jeans e shoes são plural: These pants <b>are</b> …';
    return need(has(k, /^(too|size|small|medium|large|try|fitting|much|sale|tight|loose)$/), "Fale da roupa: It's <b>too</b> big. / Do you have this in a <b>medium</b>? / Can I <b>try</b> this on?");
  }),
  lista: R('um item de <b>lista de compras</b> ou um <b>pedido</b> de restaurante (We need some bread / I\'d like the burger)', (t, k) => need(has(k, /^(some|any|need|dozen|bottle|bottles|pound|like|have|check|menu|comes|with)$/), 'Escreva um item com quantidade (We need <b>some</b> bread) ou um pedido (I\'d like …).')),
  // ---------- Módulo 5 ----------
  lugar: R('onde algo está, com <b>in, on, under, next to, behind ou between</b> (The keys are on the table.)', (t, k) => {
    if (/\bin the (table|wall|floor|sofa|bed|desk)\b/.test(k.join(' '))) return 'Em cima de uma superfície é <b>on</b>: on the table, on the wall.';
    return need(has(k, /^(in|on|under|next|behind|between|front|there|there's)$/), 'Diga onde está: The keys are <b>on</b> the table. / The cat is <b>under</b> the bed.');
  }),
  can: R("uma habilidade ou um pedido com <b>can / can't</b> (I can swim. / Can you help me?)", (t, k) => {
    const c = k.join(' ');
    if (/\bcans\b/.test(c)) return 'can não muda: she <b>can</b>.';
    if (/\bcan to\b/.test(c)) return 'Depois de can, o verbo vem sem to: can <b>swim</b>.';
    if (/\b(don't|doesn't|not) can\b/.test(c)) return "A negativa é <b>can't</b>: I can't swim.";
    if (/\b(do|does) (you|he|she|they|we|i) can\b/.test(c)) return 'A pergunta com can não usa do: <b>Can you</b> swim?';
    return need(has(k, /^(can|can't|cannot)$/), "Use can ou can't: I <b>can</b> cook. / <b>Can</b> you help me?");
  }),
  aluguel: R('uma pergunta ou frase sobre <b>aluguel</b>: rent, bedrooms, utilities (How much is the rent?)', (t, k) => {
    if (/\bhow much bedrooms\b/.test(k.join(' '))) return 'bedroom se conta: <b>How many</b> bedrooms?';
    return need(has(k, /^(rent|bedroom|bedrooms|bathroom|bathrooms|utilities|furnished|available|deposit|neighborhood|apartment|landlord|included|pets|parking)$/), 'Fale do aluguel: How much is the <b>rent</b>? / Are <b>utilities</b> included?');
  }),
  caminho: R('uma <b>instrução de caminho</b> com o imperativo (Go straight and turn left.)', (t, k) => {
    if (/^\s*(you )?(goes|turns|crosses)\b/i.test(norm(t))) return 'O imperativo é o verbo sozinho: <b>Go</b> straight, <b>turn</b> left.';
    return need(has(k, /^(go|turn|take|cross|walk|left|right|straight|block|blocks|corner)$/), 'Dê uma instrução: <b>Go straight</b> and <b>turn left</b>.');
  }),
  lugar_cidade: R('onde você está ou aonde vai: <b>at</b> the bank, <b>on</b> Main Street, <b>to</b> work', (t, k) => {
    const c = k.join(' ');
    if (/\b(go|goes|come|comes|walk|walks) to home\b/.test(c)) return 'Com go e come, home vai sem to: <b>go home</b>.';
    if (/\b(go|goes|walk|walks|drive|drives) (at|in) (the|work|school)\b/.test(c)) return 'Movimento usa <b>to</b>: go <b>to</b> work.';
    if (/\b(i'm|i am|is|are|we're|she's|he's) to (the|work|school|home)\b/.test(c)) return 'Parado num lugar é <b>at</b>: I\'m <b>at</b> work.';
    return need(has(k, /^(at|on|in|to|home|downtown)$/), 'Diga onde está (<b>at</b> the bank) ou aonde vai (<b>to</b> work).');
  }),
  aviso: R("uma <b>placa</b> ou um <b>bilhete</b> com o imperativo (Please close the door. / Don't forget the keys!)", (t, k) => {
    if (/^\s*(not|no) (forget|close|open|touch|call|use|park|smoke)\b/i.test(norm(t))) return "O imperativo negativo é <b>Don't</b> + verbo: Don't forget.";
    return need(has(k, /^(please|don't|no|open|closed|close|call|exit|out|push|pull|back)$/), "Escreva um aviso: <b>No</b> parking. / <b>Please</b> close the door. / <b>Don't</b> forget!");
  }),
  // ---------- Módulo 6 ----------
  sintoma: R('um <b>sintoma</b> com have (I have a headache) ou um <b>conselho</b> com should', (t, k) => {
    const c = k.join(' ');
    if (/\b(i'm|i am|she's|he's) (a )?(headache|fever|cold|cough|stomachache|sore throat)\b/.test(c)) return 'Sintoma se diz com <b>have</b>: I <b>have</b> a headache.';
    if (/\bshould to\b/.test(c)) return 'Depois de should, o verbo vem sem to: You should <b>rest</b>.';
    if (/\bshoulds\b/.test(c)) return 'should não muda: she <b>should</b>.';
    return need(has(k, /^(headache|fever|cold|cough|stomachache|sore|throat|hurts|hurt|sick|should|shouldn't|medicine|doctor)$/), 'Diga um sintoma (I have a <b>fever</b>) ou dê um conselho (You <b>should</b> rest).');
  }),
  continuo: R("o que está acontecendo <b>agora</b>, com to be + -ing (I'm working. / It's raining.)", (t, k) => {
    // sujeito + verbo -ing sem o to be antes (I working) — mas não na pergunta (Are you working?)
    const semBe = clauses(t).some((c) => c.some((w, p) => /^(i|you|we|they|he|she|it)$/.test(w) && /\p{L}{2,}ing$/u.test(c[p + 1] || '') && !/^(thing|something|nothing|bring|sing|king)$/.test(c[p + 1]) && !/^(am|is|are|was|were|isn't|aren't)$/.test(c[p - 1] || '')));
    if (semBe && !has(k, /^(like|likes|love|loves|hate|hates|enjoy|enjoys|keep|stop|start|finish)$/)) return "Não esqueça o to be: <b>I'm</b> working, <b>she's</b> cooking.";
    return need(k.some((w) => /\p{L}{2,}ing$/u.test(w) && !/^(thing|something|nothing|anything|everything|morning|evening|king|ring|spring|sing|bring|ceiling|building|ping)$/.test(w)) && has(k, /^(am|is|are|i'm|you're|he's|she's|it's|we're|they're|isn't|aren't)$/), "Use to be + -ing: I'<b>m working</b>. / It's <b>raining</b>.");
  }),
  was_were: R('o passado de to be: <b>was</b> ou <b>were</b> (I was at home. / It was great.)', (t, k) => {
    const c = k.join(' ');
    if (/\b(i|he|she|it) were\b/.test(c) && !/\bif (i|he|she|it) were\b/.test(c)) return 'Com I, he, she e it, o passado de to be é <b>was</b>.';
    if (/\b(you|we|they) was\b/.test(c)) return 'Com you, we e they, o passado de to be é <b>were</b>.';
    return need(has(k, /^(was|were|wasn't|weren't|born)$/), 'Use <b>was</b> ou <b>were</b>: I <b>was</b> at home. / It <b>was</b> great.');
  }),
  passado: R('o que você fez, no <b>passado</b> com -ed ou com did (I worked. / Did you watch …?)', (t, k) => {
    const c = k.join(' ');
    if (/\b(did|didn't) (you|i|he|she|we|they|it)? ?\p{L}+ed\b/u.test(c) && !/\b(did|didn't) (you|i|he|she|we|they|it) need\b/.test(c)) return 'Com did, o verbo volta à forma básica: Did you <b>work</b>? I didn\'t <b>work</b>.';
    return need(has(k, /^(did|didn't)$/) || k.some((w) => /\p{L}{2,}ed$/u.test(w) && !/^(need|bed|red|tired|interested|bored|excited|married|used)$/.test(w)), 'Conte algo do passado: I <b>worked</b> … / <b>Did</b> you …?');
  }),
  irregular: R('o que você fez com um <b>verbo irregular</b> (went, had, saw, ate, got, bought…)', (t, k) => {
    if (has(k, /^(goed|eated|buyed|seed|haved|taked|maked|getted|comed|drinked|sleeped|meeted|writed)$/)) return 'Esse verbo é irregular: went, ate, bought, saw, had, took, made, got, came, drank, slept, met, wrote.';
    if (/\bdid (you|i|he|she|we|they) (went|saw|ate|had|got|bought|made|took)\b/.test(k.join(' '))) return 'Com did, o verbo volta à forma básica: Did you <b>go</b>?';
    return need(has(k, /^(went|had|saw|ate|got|bought|made|took|came|met|slept|left|read|wrote|drank|did|didn't|was|were)$/), 'Conte algo com um irregular: I <b>went</b> … / We <b>had</b> … / I <b>saw</b> …');
  }),
  postal: R('uma frase de <b>cartão de viagem</b>: onde está, o que fez ou como está o tempo', (t, k) => need(has(k, /^(went|saw|ate|had|took|visited|bought|stayed|was|were|weather|sunny|rainy|hot|cold|having|we're|i'm|love|trip|vacation)$/), "Conte a viagem: We're in … / Yesterday we <b>went</b> … / It's <b>sunny</b>.")),
  // ---------- Módulo 7 ----------
  used_to: R('um hábito do passado com <b>used to</b> (I used to play …) ou um fato com o passado simples', (t, k) => {
    const c = k.join(' ');
    if (/\bdid(n't)? (you|i|he|she|we|they) used to\b|\bdidn't used to\b/.test(c)) return 'Com did, o d sai: did you <b>use to</b>, I didn\'t <b>use to</b>.';
    if (/\b(i|you|we|they|he|she) use to\b/.test(c) && !/\bdid/.test(c)) return 'Na afirmação é <b>used to</b>: I used to play.';
    if (/\bused to (played|went|lived|was|had|ate)\b/.test(c)) return 'Depois de used to, o verbo vem na forma básica: used to <b>play</b>.';
    return need(/\bused to\b|\buse to\b/.test(c) || k.some((w) => /\p{L}{2,}ed$/u.test(w)) || has(k, /^(was|were|went|had|broke|grew|fell)$/), 'Conte um hábito do passado: I <b>used to</b> play in the street.');
  }),
  datas: R('uma data ou um ano da sua vida (I was born in nineteen ninety… / on May fifth)', (t, k) => {
    const c = k.join(' ');
    if (/\bon (january|february|march|april|may|june|july|august|september|october|november|december)\b(?! \d| (first|second|third|\p{L}+th))/u.test(c) || /\bon (19|20)\d\d\b/.test(norm(t))) return 'Com o mês ou o ano sozinho, use <b>in</b>: in May, in 1995.';
    if (/\bin (january|february|march|april|may|june|july|august|september|october|november|december) (\d|first|second|third|\p{L}+th)\b/u.test(c)) return 'Com a data completa, use <b>on</b>: on May 5th.';
    return need(/\b(19|20)\d\d\b/.test(t) || has(k, /^(born|nineteen|twenty|thousand|first|second|third|fifth|birthday|graduated|married|moved|retired|started)$/) || has(k, /^\p{L}+th$/u), 'Diga uma data ou um ano: I was born <b>in</b> 1995. / My birthday is <b>on</b> May 5th.');
  }),
  pergunta_passado: R('uma <b>pergunta no passado</b> (Where did you study? / Who was your teacher?)', (t, k) => {
    const c = k.join(' ');
    if (/\bdid (you|he|she|they|we|i) \p{L}+ed\b/u.test(c) && !/\bneed\b/.test(c)) return 'Depois de did, o verbo fica no básico: Did you <b>study</b>?';
    if (/^(where|what|when|why|how) (you|he|she|they|we) (studied|went|learned|did)\b/.test(c)) return 'Na pergunta, entra o did: Where <b>did</b> you study?';
    return need(/\?\s*$/.test(t.trim()) && has(k, /^(did|was|were|didn't|wasn't|weren't|taught|happened)$/), 'Faça uma pergunta no passado, com did, was ou were, e termine com ?');
  }),
  perfect_ever: R("uma <b>experiência</b> com o present perfect (I've been to … / Have you ever …? / I've never …)", (t, k) => {
    const c = k.join(' ');
    if (/\b(have|has|'ve|'s|i've|you've|we've|they've|she's|he's) (ever |never |already |just )?(went|saw|ate|did|took|wrote|was|came|ran)\b/.test(c)) return 'O present perfect usa o <b>particípio</b>: been, seen, eaten, done, gone, taken.';
    if (/\b(have|has|i've|you've|we've|they've)\b.*\b(in (19|20)\d\d|last (week|year|month)|yesterday|ago)\b/.test(norm(t).toLowerCase())) return 'Com data (in 2019, last year, ago), use o <b>passado simples</b>: I went there in 2019.';
    return need(has(k, /^(have|has|i've|you've|we've|they've|she's|he's|haven't|hasn't|ever|never)$/), "Use o present perfect: <b>I've been</b> to … / <b>Have you ever</b> …?");
  }),
  since_for: R("há quanto tempo, com o present perfect + <b>for</b> ou <b>since</b> (I've lived here for five years.)", (t, k) => {
    const c = k.join(' ');
    if (/\b(i|you|we|they|he|she) (am|is|are|live|lives|work|works|know|knows|have|has)\b.*\b(since|for)\b/.test(c) && !/\b(have|has) (been|lived|worked|known|had|studied)\b/.test(c) && !/\b(i've|you've|we've|they've|he's|she's)\b/.test(c)) return "Para \"há quanto tempo\", use o present perfect: <b>I've lived</b> here for … / <b>I've been</b> here since …";
    if (/\bsince (one|two|three|four|five|six|seven|eight|nine|ten|a few|many|\d+) (years|months|weeks|days|hours)\b/.test(c)) return 'Com duração, use <b>for</b>: for five years. since é o ponto de partida: since 2020.';
    if (/\bfor (19|20)\d\d\b|\bfor (january|february|march|april|may|june|july|august|september|october|november|december|monday|last)\b/.test(c)) return 'Com o ponto de partida, use <b>since</b>: since 2020, since January.';
    return need(has(k, /^(since|for|long)$/), 'Diga há quanto tempo, com <b>for</b> (for five years) ou <b>since</b> (since 2020).');
  }),
  email_pessoal: R('uma frase de <b>e-mail pessoal</b> com novidade (just), experiência ou há quanto tempo', (t, k) => need(has(k, /^(just|already|yet|have|has|i've|we've|haven't|since|for|hope|miss|news|ever|never)$/) || k.some((w) => /\p{L}{2,}ed$/u.test(w)), "Conte uma novidade: I've <b>just</b> started … / I've lived here <b>for</b> …")),
  // ---------- Módulo 8 ----------
  going_to: R("um <b>plano</b> com to be + going to (I'm going to move …)", (t, k) => {
    const c = k.join(' ');
    if (clauses(t).some((cl) => cl.some((w, p) => /^(i|you|we|they|he|she)$/.test(w) && cl[p + 1] === 'going' && !/^(am|is|are|was|were|isn't|aren't|not)$/.test(cl[p - 1] || '')))) return "Não esqueça o to be: <b>I'm</b> going to …";
    if (/\bgoing to (moved|went|bought|sold|painted|visited|studied)\b/.test(c)) return 'Depois de going to, o verbo vem no básico: going to <b>move</b>.';
    return need(/\bgoing to\b|\bgonna\b/.test(c), "Conte um plano: I'm <b>going to</b> …");
  }),
  regras: R("uma <b>regra</b> com must, have to, mustn't ou don't have to", (t, k) => {
    const c = k.join(' ');
    if (/\bmust to\b/.test(c)) return 'must vem sem to: You must <b>recycle</b>.';
    if (/\b(he|she|it) have to\b/.test(c)) return 'Com he e she: <b>has to</b>.';
    if (/\bhaven't to\b/.test(c)) return "A negativa de have to é <b>don't have to</b>.";
    return need(has(k, /^(must|mustn't|have|has|had|allowed)$/) && (has(k, /^(must|mustn't|allowed)$/) || /\b(have|has|had) to\b/.test(c)), "Escreva uma regra com must, have to, mustn't ou don't have to.");
  }),
  comparativo: R('uma <b>comparação</b> (bigger than / more expensive than / the best)', (t, k) => {
    const c = k.join(' ');
    if (/\bmore (big|small|cheap|good|bad|nice|old|new|tall|short|fast|hot|cold|easy|safe|quiet|close)(er)?\b/.test(c)) return 'Adjetivo curto ganha -er: <b>bigger</b>, <b>cheaper</b>. more é para os longos.';
    if (/\b(gooder|goodest|badder|baddest|more better|most best)\b/.test(c)) return 'good e bad são irregulares: better, the best, worse, the worst.';
    if (/\b(bigger|smaller|cheaper|better|worse|more \p{L}+|\p{L}+er) (that|then|of)\b/u.test(c)) return 'Para comparar, use <b>than</b>: bigger <b>than</b>.';
    return need(has(k, /^(than|best|worst|most|better|worse|as)$/) || k.some((w) => /\p{L}{3,}est$/u.test(w)), 'Compare: <b>bigger than</b>, <b>more expensive than</b>, <b>the best</b>.');
  }),
  tarefas: R('uma <b>tarefa de casa</b> com make, do ou um phrasal verb (do the dishes / make the bed / take out the trash)', (t, k) => {
    const c = k.join(' ');
    if (/\bmake (the )?(dishes|laundry|homework|shopping|exercise)\b/.test(c)) return 'Tarefa e atividade usam <b>do</b>: do the dishes, do the laundry.';
    if (/\bdo (the )?bed\b|\bdo (a )?(dinner|cake|mistake|noise)\b/.test(c)) return 'Criar ou produzir usa <b>make</b>: make the bed, make dinner.';
    if (/\b(take|put|clean|pick) (out|away|up) (it|them)\b/.test(c)) return 'Com pronome, a partícula vai para o fim: take <b>it out</b>.';
    return need(has(k, /^(do|does|did|make|makes|made|clean|take|put|vacuum|sweep|iron|wash|chores|dishes|laundry)$/), 'Fale de uma tarefa: I <b>do the dishes</b>. / She <b>makes the bed</b>.');
  }),
  descrever: R('uma <b>descrição</b> de alguém: aparência (She has curly hair) ou jeito (He\'s friendly)', (t, k) => {
    const c = k.join(' ');
    if (/\b(is|she's|he's|i'm) (long|short|curly|straight|blond|black|brown) hair\b/.test(c)) return 'Cabelo se diz com <b>have</b>: She <b>has</b> long hair.';
    if (/\b(she|he|i) (have|has)\b.*\b(tall|short)\b(?! hair)/.test(c) && !/hair/.test(c)) return 'Altura se diz com <b>to be</b>: She <b>is</b> tall.';
    return need(has(k, /^(tall|short|hair|eyes|beard|friendly|funny|kind|smart|shy|lazy|outgoing|quiet|like|looks|hardworking|bossy|rude|boring|curly|blond)$/), 'Descreva alguém: She\'s <b>tall</b>. He has <b>curly hair</b>. She\'s <b>friendly</b>.');
  }),
  vizinhos: R('um <b>pedido educado</b> (Could you please …? / Would you mind …?) ou um pedido de <b>desculpas</b> (I\'m sorry for …)', (t, k) => {
    const c = k.join(' ');
    if (/\bwould you mind (to )?(turn|move|take|close|open|leave|help|park)\b/.test(c)) return 'Depois de would you mind, o verbo vai com -ing: Would you mind <b>moving</b> …?';
    if (/\bsorry of\b/.test(c)) return 'Desculpas por algo: sorry <b>for</b>.';
    return need(/\b(could you|would you mind|can you please|sorry|apologize|thank you for)\b/.test(c), 'Peça com <b>Could you please</b> …? ou peça desculpas com <b>I\'m sorry for</b> …');
  }),
  // ---------- Módulo 9 ----------
  devolver: R("uma frase para <b>devolver ou trocar</b> (I'd like to return this. / It doesn't fit. / It's too small.)", (t, k) => {
    const c = k.join(' ');
    if (/\benough (big|small|long|short|cheap|good|old|warm)\b/.test(c)) return 'enough vem <b>depois</b> do adjetivo: big enough.';
    if (/\b(it's|it is|is) not fit\b|\bisn't fit\b/.test(c)) return "fit é verbo: It <b>doesn't fit</b>.";
    return need(has(k, /^(return|exchange|refund|receipt|fit|fits|broken|too|enough|wrong|damaged)$/), "Explique a troca: I'd like to <b>return</b> this. / It <b>doesn't fit</b>. / It's <b>too</b> small.");
  }),
  servico: R("um pedido com <b>I'd like to</b> + verbo ou a pergunta <b>How long does it take?</b>", (t, k) => {
    const c = k.join(' ');
    if (/\bi'd like (open|send|withdraw|deposit|transfer|buy|return|pay|make)\b/.test(c)) return "Com uma ação: I'd like <b>to</b> open …";
    if (/\bhow long (it takes|does it takes)\b/.test(c)) return 'A pergunta é <b>How long does it take?</b>';
    return need(/\b(i'd like to|i would like to|how long|it takes|takes)\b/.test(c), "Peça com <b>I'd like to</b> … ou pergunte <b>How long does it take?</b>");
  }),
  pronome_objeto: R('uma frase com <b>it, them, me, him, her ou us</b> depois do verbo (They delivered it.)', (t, k) => {
    const c = k.join(' ');
    if (/\b(help|call|tell|send|give|show|love|like|see|ask) (i|he|she|we|they)\b/.test(c)) return 'Depois do verbo, use o pronome objeto: help <b>me</b>, call <b>him</b>, love <b>them</b>.';
    if (/\b(send|pick|take|give|put) back (it|them)\b|\b(pick|take) up (it|them)\b/.test(c)) return 'Com pronome, a partícula vai para o fim: send <b>it back</b>.';
    return need(has(k, /^(it|them|me|him|her|us)$/) && k.indexOf('it') !== 0, 'Use um pronome depois do verbo: They delivered <b>it</b>. / I love <b>them</b>.');
  }),
  dois_objetos: R('um <b>presente</b> com dois objetos (I gave her a book. / I bought a gift for my mom.)', (t, k) => {
    const c = k.join(' ');
    if (/\b(give|gave|send|sent|show|showed) (her|him|me|them|us) (it|them)\b/.test(c)) return 'Com it, a coisa vem antes: give <b>it to her</b>.';
    if (/\b(gave|give|sent|send|showed|show) to (her|him|me|them|us|my)\b/.test(c) && !/\b(it|them) to\b/.test(c)) return 'Com a pessoa logo depois do verbo, não tem to: I gave <b>her</b> a book.';
    if (/\b(bought|buy|made|make|got|get) (a|an|the|some) \p{L}+ to (her|him|me|my|them|us)\b/u.test(c)) return 'Com buy e make, use <b>for</b>: bought a gift <b>for</b> my mom.';
    return need(has(k, /^(gave|give|sent|send|bought|buy|showed|show|made|lent|gift|present)$/), 'Conte um presente: I <b>gave</b> my sister a book. / I <b>bought</b> a gift for …');
  }),
  escolha: R('uma <b>escolha</b> com one / ones ou uma pergunta com which (I\'ll take the red one. / Which one do you want?)', (t, k) => {
    const c = k.join(' ');
    if (/\b(take|want|like|prefer|buy) the (red|blue|black|white|green|big|small|cheap|cheaper|new|old|other|first|second)\s*[.!]?$/.test(c)) return 'O adjetivo precisa de um substantivo: the red <b>one</b>.';
    return need(has(k, /^(one|ones|which|both|either|neither|prefer|choose)$/), "Escolha: I'll take the red <b>one</b>. / <b>Which</b> one do you want?");
  }),
  reclamacao: R("uma frase de <b>e-mail formal de reclamação</b> (I am writing to complain about … / Unfortunately, … / I would like …)", (t, k) => {
    if (/\b(i'm|i'd|don't|can't|won't|didn't|isn't|wasn't)\b/.test(k.join(' '))) return 'No e-mail formal, sem contrações: <b>I am</b>, <b>I would</b>, <b>do not</b>.';
    return need(has(k, /^(complain|writing|unfortunately|refund|replacement|dear|sincerely|regards|order|damaged|would|attached|forward)$/), 'Use uma frase formal: I am writing to <b>complain</b> about … / <b>Unfortunately</b>, …');
  }),
  // ---------- Módulo 10 ----------
  trabalho: R('uma frase sobre o <b>seu trabalho</b>: a rotina (I usually …) ou o que está fazendo agora (This week I\'m …)', (t, k) => {
    const c = k.join(' ');
    if (/\b(usually|always|every day|every monday|often|never) (i'm|i am|she's|he's|we're) \p{L}+ing\b/u.test(c) || /\b(i'm|i am) (usually|always|often|never) \p{L}+ing\b/u.test(c)) return 'Rotina vai no presente simples: I <b>usually start</b> at nine.';
    if (/\bwork (with|in) (a|the) (bank|company|hospital|school|hotel)\b/.test(c)) return 'Com empresa, use <b>for</b>: I work <b>for</b> a bank.';
    return need(has(k, /^(work|works|working|job|team|meeting|meetings|client|clients|project|report|office|manager|colleague|colleagues|charge|deadline)$/), 'Fale do seu trabalho: I <b>work</b> in … / This week I\'m <b>working</b> on …');
  }),
  telefone: R("uma frase de <b>telefone</b> (This is … / Can I speak to …? / Could you take a message?)", (t, k) => {
    if (/^\s*(?:(?:[Hh]ello|[Hh]i),?\s*)?I am \p{Lu}/u.test(norm(t)) || /^\s*(?:(?:[Hh]ello|[Hh]i),?\s*)?I'm \p{Lu}\p{L}+[.!]?\s*$/u.test(norm(t))) return 'Ao telefone, apresente-se com <b>This is</b> Ana.';
    return need(/\b(this is|speak to|speaking|hold on|message|call (me |you |him |her )?back|available|put you through|who's calling)\b/.test(k.join(' ')), 'Use uma frase de telefone: <b>This is</b> … / <b>Can I speak to</b> …?');
  }),
  passado_continuo: R('uma cena do passado com <b>was / were + -ing</b> (I was working when …)', (t, k) => {
    const c = k.join(' ');
    if (/\b(i|he|she|it) were \p{L}+ing\b/u.test(c)) return 'Com I, he, she e it: <b>was</b> + -ing.';
    if (/\b(you|we|they) was \p{L}+ing\b/u.test(c)) return 'Com you, we e they: <b>were</b> + -ing.';
    return need(/\b(was|were) ((i|you|he|she|it|we|they) )?\p{L}+ing\b/u.test(c), 'Use o passado contínuo: I <b>was working</b> when …');
  }),
  mind: R("um <b>pedido educado</b> (Could you …? / Would you mind + -ing? / Would you mind if I …?)", (t, k) => {
    const c = k.join(' ');
    if (/\bwould you mind (to )?(send|check|close|open|help|call|print|forward|share|cover|take|move|give|wait)\b/.test(c)) return 'Depois de would you mind, o verbo vai com -ing: would you mind <b>sending</b> …?';
    if (/\bwould you mind if i (leave|open|close|use|take|go|come|bring)\b/.test(c)) return 'Depois de would you mind if I, o verbo vai no passado: if I <b>left</b> / <b>opened</b>.';
    return need(/\b(could you|would you mind|would you|can you|not at all|i'm afraid)\b/.test(c), 'Peça com educação: <b>Could you</b> …? / <b>Would you mind</b> + -ing?');
  }),
  futuro: R("o <b>futuro</b>: um combinado (I'm meeting … on Monday), um plano (going to) ou uma decisão / previsão (will)", (t, k) => {
    const c = k.join(' ');
    if (/\bwill (to )?(going|goes)\b|\bwill to\b/.test(c)) return 'Depois de will, o verbo vem direto: I <b>will go</b>.';
    if (/\bwill (meeting|calling|going|working)\b/.test(c)) return 'Depois de will, o verbo vem no básico: I will <b>call</b> you.';
    return need(/\b(will|won't|i'll|you'll|she'll|he'll|we'll|they'll|it'll|going to|gonna)\b/.test(c) || (/\b(i'm|we're|she's|he's|they're|am|is|are) \p{L}+ing\b/u.test(c) && has(k, /^(tomorrow|next|monday|tuesday|wednesday|thursday|friday|saturday|sunday|tonight|weekend|week|at|on)$/)), "Fale do futuro: I'<b>m meeting</b> … on Monday. / I'm <b>going to</b> … / I'<b>ll</b> …");
  }),
  candidatura: R('uma frase de <b>candidatura</b> (I am writing to apply for … / I have … of experience in …)', (t, k) => {
    const c = k.join(' ');
    if (/\bapply to the (position|job)\b/.test(c)) return 'Candidatar-se a uma vaga: apply <b>for</b> the position.';
    if (/\b(years|year|months) of experiences\b/.test(c)) return 'experience, de trabalho, não tem plural: two years of <b>experience</b>.';
    if (/\binterested (on|for|about)\b/.test(c)) return 'Interessado em: interested <b>in</b>.';
    return need(has(k, /^(apply|applying|position|experience|interested|résumé|resume|fluent|skills|available|attached|interview)$/), 'Use uma frase de candidatura: I am writing to <b>apply for</b> … / I have … of <b>experience in</b> …');
  }),
  // ---------- Módulo 11 ----------
  consulta: R('uma frase para <b>marcar, remarcar ou cancelar</b> uma consulta (I\'d like to make an appointment …)', (t, k) => {
    const c = k.join(' ');
    if (/\b(mark|do|take) an appointment\b/.test(c)) return 'Marcar consulta é <b>make</b> an appointment.';
    if (/\bdoes (it|that|monday|tuesday|wednesday|thursday|friday|\p{L}+) works\b/u.test(c)) return 'Depois de does, o verbo fica no básico: Does it <b>work</b> for you?';
    return need(has(k, /^(appointment|reschedule|cancel|work|works|available|earliest|insurance|patient)$/), "Use uma frase da consulta: I'd like to <b>make an appointment</b> … / I need to <b>reschedule</b> …");
  }),
  farmacia: R('uma frase de <b>farmácia</b>: pedir um remédio (Do you have anything for …?) ou a dose (twice a day)', (t, k) => {
    const c = k.join(' ');
    if (/\btwo times a day\b/.test(c)) return 'Duas vezes é <b>twice</b>: twice a day.';
    if (/\ballergic (of|with|from)\b/.test(c)) return 'Alérgico a: allergic <b>to</b>.';
    if (/\banything (to|against) (a )?(cold|cough|headache|fever|pain)\b/.test(c)) return 'Remédio para algo: anything <b>for</b> a cold.';
    return need(has(k, /^(pill|pills|tablet|tablets|dose|twice|once|times|meals|prescription|counter|allergic|syrup|drops|medicine|anything|every)$/), 'Fale do remédio: Do you have anything <b>for</b> a cold? / Take one pill <b>twice a day</b>.');
  }),
  conselho: R("um <b>conselho</b> com should, ought to ou o imperativo (You should … / Don't …)", (t, k) => {
    const c = k.join(' ');
    if (/\bshould to\b/.test(c)) return 'should vem sem to: You should <b>sleep</b> more.';
    if (/\bought (sleep|eat|drink|go|see|rest|walk|exercise|try|stop|avoid)\b/.test(c)) return 'ought sempre leva to: You ought <b>to</b> rest.';
    if (/\bmore healthy\b/.test(c)) return 'healthy termina em -y: <b>healthier</b>.';
    return need(has(k, /^(should|shouldn't|ought|don't|try|drink|eat|sleep|avoid|stop|healthier|better)$/), 'Dê um conselho: You <b>should</b> … / <b>Don\'t</b> … / <b>Try to</b> …');
  }),
  emergencia: R('uma frase de <b>emergência</b>: o que aconteceu (no passado), onde você está ou o que precisa', (t, k) => {
    const c = k.join(' ');
    if (/\bwhat did happen\b|\bwhat did it happen\b/.test(c)) return 'O what é o sujeito: <b>What happened?</b>, sem did.';
    if (has(k, /^(falled|hitted|breaked|bleeded)$/)) return 'Esse verbo é irregular: fell, hit, broke, bled.';
    return need(has(k, /^(help|ambulance|police|fire|emergency|accident|happened|fell|hit|bleeding|breathing|hurt|stolen|crashed|broke|need)$/) || /\d+ \p{L}+ (street|avenue|road)/iu.test(t), 'Diga o que aconteceu, onde está ou do que precisa: I need an <b>ambulance</b>! / My friend <b>fell</b>.');
  }),
  ed_ing: R('um sentimento (-ed) ou como algo é (-ing): I\'m bored. / The movie was boring.', (t, k) => {
    const c = k.join(' ');
    if (/\b(i'm|i am|i was|we're|we are|we were) (so |very |really )?(boring|tiring|interesting|exciting|confusing|annoying|embarrassing|surprising|relaxing)\b/.test(c)) return 'Para como você se sente, use <b>-ed</b>: I\'m <b>bored</b>. (I\'m boring = eu sou chata!)';
    if (/\b(movie|class|book|trip|day|meeting|news|show|game|traffic|job|film) (is|was|are|were) (so |very |really )?(bored|tired|interested|excited|confused|annoyed|surprised|relaxed)\b/.test(c)) return 'Para como a coisa é, use <b>-ing</b>: The movie was <b>boring</b>.';
    if (/\binterested (on|about|for)\b/.test(c)) return 'Interessado em: interested <b>in</b>.';
    return need(k.some((w) => /^\p{L}{3,}(ed|ing)$/u.test(w) && /^(bor|tir|interest|excit|worr|relax|surpris|confus|embarrass|annoy|stress)/.test(w)), 'Use um adjetivo de sentimento: I\'m <b>bored</b>. / It was <b>boring</b>.');
  }),
  doente: R('um aviso de que está doente, com <b>because</b> ou <b>so</b> (I can\'t come in because …)', (t, k) => need(has(k, /^(because|so|sick|flu|fever|note|home|can't|calling|cold|dizzy)$/), "Avise com o motivo: I can't come in today <b>because</b> I'm sick. / I have a fever, <b>so</b> …")),
  // ---------- Módulo 12 ----------
  reserva: R("uma frase de <b>reserva</b> (I'd like to book … / Is breakfast included? / OK, I'll take it!)", (t, k) => {
    const c = k.join(' ');
    if (/\bi will to\b|\bi'll to\b/.test(c)) return "Depois de will, o verbo vem direto: I'll <b>take</b> it.";
    return need(has(k, /^(book|booking|reservation|room|night|nights|included|check|i'll|flight|ticket|seat|round|one-way)$/), "Faça uma reserva: I'd like to <b>book</b> a room … / OK, <b>I'll</b> take it!");
  }),
  aeroporto: R('uma frase de <b>aeroporto</b> (The flight is delayed. / Now boarding at gate 12. / I have a bag to check.)', (t, k) => {
    if (/\bport (\d+|twelve|ten|five)\b/.test(k.join(' '))) return 'Portão de embarque é <b>gate</b>.';
    return need(has(k, /^(flight|gate|boarding|delayed|canceled|cancelled|passport|check|carry-on|layover|customs|baggage|departures|arrivals|time|seat|terminal)$/), 'Use uma palavra do aeroporto: The <b>flight</b> is <b>delayed</b>. / Now boarding at <b>gate</b> 12.');
  }),
  problema: R('um <b>imprevisto</b> no passado, com because ou so (We missed the flight because …)', (t, k) => {
    const c = k.join(' ');
    if (/\b(lost|lose) (the|our|my|a) (flight|bus|train|connection|plane)\b/.test(c)) return 'Perder um transporte é <b>miss</b>: We <b>missed</b> the flight.';
    if (/\b(missed|miss) (my|the|our|her|his) (passport|wallet|phone|bag|suitcase|keys|key)\b/.test(c)) return 'Perder um objeto é <b>lose</b>: I <b>lost</b> my passport.';
    if (/\bbecause (a|the) (storm|strike|rain|snow|traffic|delay)\b/.test(c)) return 'Com um substantivo, use <b>because of</b>: because of the storm.';
    return need(has(k, /^(missed|lost|stolen|delayed|canceled|cancelled|because|so|stuck|forgot|broke)$/), 'Conte um imprevisto: We <b>missed</b> the flight <b>because</b> … / I <b>lost</b> my …, <b>so</b> …');
  }),
  tempo_clima: R("uma frase sobre o <b>tempo</b> com it (It's raining. / It will be sunny tomorrow.)", (t, k) => {
    if (/^\s*(is|was) (raining|snowing|sunny|cold|hot|windy|cloudy)\b/i.test(norm(t))) return "O tempo precisa de sujeito: <b>It's</b> raining.";
    if (/\bwhat('s| is) the weather\s*\??\s*$/i.test(norm(t))) return "A pergunta é <b>What's the weather like?</b>";
    return need(has(k, /^(weather|sunny|cloudy|rain|raining|rains|snow|snowing|windy|hot|cold|warm|degrees|forecast|storm|humid|freezing)$/), "Fale do tempo: <b>It's</b> sunny. / It <b>will rain</b> tomorrow.");
  }),
  condicional1: R("um plano com <b>if</b> (If it rains, we'll stay home.)", (t, k) => {
    const c = k.join(' ');
    if (/\bif (it|i|you|we|they|he|she) will\b/.test(c) || /\bif (it|i|you|we|they|he|she)'ll\b/.test(c)) return 'Depois de if, use o presente: If it <b>rains</b> (e não "if it will rain").';
    if (/\bif it rain\b/.test(c)) return 'Com it, o presente ganha -s: If it <b>rains</b>.';
    return need(has(k, /^(if|unless)$/) && /\b(will|won't|'ll|i'll|we'll|you'll|they'll|it'll|she'll|he'll)\b/.test(c), "Faça um plano com condição: <b>If</b> it rains, we<b>'ll</b> stay home.");
  }),
  avaliacao: R("uma frase de <b>avaliação</b> no passado (The room was clean. / I'd recommend this hotel.)", (t, k) => {
    const c = k.join(' ');
    if (/\b(i'd|i would) (recommending|recommends|to recommend)\b/.test(c)) return "Depois de I'd, o verbo vem no básico: I'd <b>recommend</b>.";
    return need(has(k, /^(was|were|stayed|recommend|recommended|clean|dirty|staff|location|comfortable|noisy|helpful|spotless|disappointing|value|stars)$/), "Avalie: The room <b>was</b> clean. / I'd <b>recommend</b> this hotel.");
  }),
  // ---------- Módulo 13 ----------
  comemoracao: R("uma frase sobre uma <b>festa ou data</b> (I'm turning 30. / Happy Thanksgiving! / Congratulations!)", (t, k) => {
    const c = k.join(' ');
    if (/\bhappy (wedding|graduation|new job)\b/.test(c)) return 'Para conquistas, diga <b>Congratulations</b> on your wedding!';
    if (/\b(i'm|i am|she's|he's) doing (\d+|twenty|thirty|forty|fifty|sixty)\b/.test(c)) return '"Fazer anos" é <b>turn</b>: I\'m <b>turning</b> thirty.';
    return need(has(k, /^(birthday|party|celebrate|holiday|thanksgiving|christmas|halloween|wedding|anniversary|congratulations|turning|turn|happy|cheers|guests)$/), "Fale de uma festa: I'm <b>turning</b> 30. / <b>Happy</b> birthday! / <b>Congratulations</b>!");
  }),
  relativa: R('uma descrição com <b>who, which, that ou where</b> (The woman who lives next door …)', (t, k) => {
    const c = k.join(' ');
    if (/\b(man|woman|person|people|friend|guy|girl|boy|teacher|doctor|neighbor|brother|sister) which\b/.test(c)) return 'Para pessoas, use <b>who</b> (ou that).';
    if (/\b(book|car|cake|house|movie|dress|restaurant|phone|city) who\b/.test(c)) return 'Para coisas, use <b>which</b> ou <b>that</b>.';
    if (/\b(city|town|place|country|restaurant|house) (that|which) (i|we|you|they|he|she) (was born|live|lived|met|grew up)\b/.test(c)) return 'Para lugares, use <b>where</b>: the city <b>where</b> I was born.';
    // relativa no meio da frase (the woman who …) ou depois de vírgula (My cousin, who …); a pergunta "Who is …?" não conta
    return need(clauses(t).some((cl, i) => cl.some((w, p) => (p > 0 || (i > 0 && w !== 'that')) && /^(who|which|that|where|whose)$/.test(w) && !/^(think|know|said|hope|sure|say|believe)$/.test(cl[p - 1] || '') && (w !== 'that' || (cl[p + 1] && !/^(is|was|are|like|do|did)$/.test(cl[p - 1] || ''))))), 'Junte duas informações: The woman <b>who</b> lives next door … / The cake <b>that</b> you made …');
  }),
  sugestao: R("uma <b>sugestão</b> (Let's … / How about …? / Why don't we …?)", (t, k) => {
    const c = k.join(' ');
    if (/\blet's (going|to go|to)\b/.test(c)) return "Depois de let's, o verbo vem no básico: Let's <b>go</b>!";
    if (/\bhow about (go|eat|watch|have|stay|order|cook|take|visit)\b/.test(c)) return 'Depois de how about, o verbo vai com -ing: How about <b>going</b>?';
    if (/\bwhy don't we (going|to go)\b/.test(c)) return "Depois de why don't we, o verbo vem no básico: Why don't we <b>go</b>?";
    return need(/\b(let's|how about|why don't we|i'd rather|what about|shall we)\b/.test(c), "Sugira: <b>Let's</b> … / <b>How about</b> …? / <b>Why don't we</b> …?");
  }),
  opiniao_simples: R("uma <b>opinião</b> com I think / I don't think (ou I think so / I don't think so)", (t, k) => {
    const c = k.join(' ');
    if (/\bi think (yes|no|not)\s*[.!]?$/.test(c) || /\bi don't think no\b/.test(c)) return "A resposta curta é <b>I think so</b> / <b>I don't think so</b>.";
    if (/\bi think (that )?(it|he|she|they|you|this|that) (isn't|aren't|is not|are not|won't|doesn't|don't)\b/.test(c)) return "Em inglês, a negação vai no think: <b>I don't think</b> it's …";
    return need(/\b(i think|i don't think|in my opinion|i guess|i believe|i hope|i'm not sure)\b/.test(c), "Dê uma opinião: <b>I think</b> … / <b>I don't think</b> …");
  }),
  ing_to: R('dois verbos juntos, com <b>-ing</b> ou <b>to</b> (I enjoy dancing. / I want to learn …)', (t, k) => {
    const c = k.join(' ');
    if (/\b(enjoy|enjoys|enjoyed|finish|finished|avoid|avoids|keep|kept|mind|practice|miss|suggest) to \p{L}+/u.test(c)) return 'Esse verbo pede -ing: I enjoy <b>dancing</b>.';
    if (/\b(want|wants|wanted|need|needs|decide|decided|hope|hoped|plan|planned|promise|agree|learn|would like|'d like) \p{L}+ing\b/u.test(c) && !/\b(need|want)s? (nothing|something|anything|everything)\b/.test(c)) return 'Esse verbo pede to: I want <b>to learn</b>.';
    if (/\b(enjoy|enjoys|finish|avoid|keep|mind) (dance|cook|read|swim|work|eat|travel|play|go|run|walk|sing)\b/.test(c)) return 'Esse verbo pede -ing: I enjoy <b>dancing</b>.';
    return need(k.some((w) => /\p{L}{2,}ing$/u.test(w)) || /\bto \p{L}+/u.test(c), 'Junte dois verbos: I enjoy <b>dancing</b>. / I want <b>to learn</b> …');
  }),
  comentario: R("uma frase de <b>comentário</b> com opinião (I agree … / In my opinion, … because … / However, …)", (t, k) => {
    const c = k.join(' ');
    if (/\b(i'm|i am|we're|we are) (totally |completely )?agree\b/.test(c)) return 'agree é verbo: <b>I agree</b> (e não "I am agree").';
    return need(has(k, /^(agree|disagree|opinion|think|however|because|example|also|post|sharing|personally)$/), 'Comente: I <b>agree</b> … / In my <b>opinion</b>, … <b>because</b> … / <b>However</b>, …');
  }),
  // ---------- Módulo 14 ----------
  midia: R('a mídia na sua vida, com <b>-ing como sujeito</b> (Watching series is …) ou <b>spend</b> (I spend two hours …)', (t, k) => {
    const c = k.join(' ');
    if (/^\s*(watch|read|follow|listen|scroll|play|use) \p{L}+.* (is|are) /iu.test(norm(t))) return 'A atividade como sujeito vai com -ing: <b>Watching</b> series is …';
    if (/\bi pass (\p{L}+ )?(hours|hour|minutes|time)\b/u.test(c)) return 'Passar tempo é <b>spend</b>: I spend two hours …';
    return need(/^\s*\p{L}+ing\b/iu.test(norm(t)) || has(k, /^(spend|spent|series|news|podcasts|podcast|media|social|watch|watching|online|screen|scrolling)$/), 'Fale da mídia: <b>Watching</b> series is … / I <b>spend</b> … a day on …');
  }),
  concordar: R("uma reação: <b>So do I / Neither do I</b> (com o auxiliar certo) ou <b>I agree / I see your point, but …</b>", (t, k) => {
    const c = k.join(' ');
    if (/\bneither (don't|doesn't|can't|didn't)\b/.test(c)) return 'Depois de neither, o auxiliar é afirmativo: Neither <b>do</b> I.';
    if (/\bso don't i\b|\bi too\b/.test(c)) return 'Eu também: <b>So do I</b> ou <b>Me too</b>.';
    if (/\b(i'm|i am) agree\b/.test(c)) return 'agree é verbo: <b>I agree</b>.';
    return need(/\b(so (do|am|can|did|have|was|will) i|neither (do|am|can|did|have|was|will) i|me too|me neither|i agree|i disagree|see your point|not so sure|that's true|exactly)\b/.test(c), "Reaja: <b>So do I!</b> / <b>Neither can I.</b> / <b>I see your point, but</b> …");
  }),
  passiva: R('uma notícia com a <b>passiva</b>: was / were + particípio (The bridge was built in 1937.)', (t, k) => {
    const c = k.join(' ');
    if (/\b(was|were) (build|arrest|steal|find|open|close|elect|cancel|destroy|injure)\b/.test(c)) return 'Na passiva, use o <b>particípio</b>: was <b>built</b>, were <b>arrested</b>, was <b>stolen</b>.';
    if (/\b(two|three|many|several|\d+) \p{L}+s was \p{L}+(ed|en|t)\b/u.test(c)) return 'Com plural, use <b>were</b>: Two men <b>were</b> arrested.';
    return need(/\b(was|were) (\p{L}+ed|built|stolen|found|born|done|made|taken|given|seen|written|sold|hit|hurt|shot|known)\b/u.test(c), 'Use a passiva: The bridge <b>was built</b> … / Two men <b>were arrested</b> …');
  }),
  conectores2: R('duas ideias ligadas por <b>because, so, although ou however</b>', (t, k) => {
    if (/\balthough\b.*\bbut\b/i.test(norm(t))) return 'Com although, não use but: Although it\'s expensive<b>,</b> I love it.';
    if (/[a-z]\s+however\s+[a-z]/i.test(norm(t)) && !/[.;]\s*however|,\s*however,/i.test(norm(t))) return 'however abre uma frase nova, com vírgula: It\'s expensive. <b>However,</b> I love it.';
    return need(has(k, /^(because|so|although|however|though|but)$/), 'Ligue as ideias com because, so, although ou however.');
  }),
  prova_a2: R('uma frase sobre a <b>prova</b> ou uma estratégia (The exam has … / I will practice …)', (t, k) => need(has(k, /^(exam|test|reading|writing|listening|speaking|practice|instructions|words|minutes|hour|pairs|parts|part|timer|pass)$/), 'Fale da prova: The <b>exam</b> has … / I will <b>practice</b> …')),
  forum: R('uma frase de <b>opinião</b> organizada (I think … because … / Although … / In conclusion, …)', (t, k) => {
    if (/\b(i'm|i am) agree\b/.test(k.join(' '))) return 'agree é verbo: <b>I agree</b>.';
    if (/\balthough\b.*\bbut\b/i.test(norm(t))) return 'Com although, não use but.';
    return need(has(k, /^(think|opinion|because|so|although|however|example|conclusion|agree|disagree|sum|that's|why)$/), 'Dê a sua opinião: I <b>think</b> … <b>because</b> … / <b>Although</b> … / In <b>conclusion</b>, …');
  }),
  // ---------- Módulo 15 ----------
  narrativa: R('uma cena de história: o cenário no <b>passado contínuo</b> e o fato no <b>passado simples</b> (I was walking when …)', (t, k) => {
    const c = k.join(' ');
    if (/\b(was|were) (stop|see|open|turn|run|shout|notice|realize|call|walk|go|work|drive|wait|read|cook|eat|sleep|sit|rain|snow|talk|play|watch|study)\b/.test(c)) return 'Depois de was / were, o verbo vai com -ing: I was <b>walking</b>.';
    if (/\bwhen (a|the|he|she|they|someone|my) \p{L}+ was \p{L}+ing\b/u.test(c) && /\bwas \p{L}+ing .*when\b/u.test(c)) return 'A ação curta, depois de when, vai no passado simples: … when a car <b>stopped</b>.';
    return need(/\b(was|were) \p{L}+ing\b/u.test(c) || k.some((w) => /\p{L}{3,}ed$/u.test(w)) || has(k, /^(saw|went|ran|came|took|got|found|said|told|heard|felt|left)$/), 'Conte uma cena: I <b>was walking</b> home when a car <b>stopped</b>.');
  }),
  past_perfect: R('o passado antes do passado, com <b>had + particípio</b> (When I arrived, the train had already left.)', (t, k) => {
    const c = k.join(' ');
    if (/\bhad (already |never |just )?(went|ate|saw|did|took|wrote|forgot|came|began|gave|spoke|broke)\b/.test(c)) return 'Depois de had, use o <b>particípio</b>: had <b>gone</b>, had <b>eaten</b>, had <b>forgotten</b>.';
    return need(/\b(had|'d)\s+(already |never |just )?\p{L}+/u.test(c) && has(k, /^(had|i'd|she'd|he'd|we'd|they'd|you'd)$/), 'Use o past perfect: … the train <b>had already left</b>.');
  }),
  conectores_narrativa: R('uma frase de história com um conector: <b>at first, suddenly, meanwhile, as soon as, eventually, in the end</b>', (t, k) => need(/\b(at first|suddenly|meanwhile|as soon as|eventually|in the end|finally|luckily|unfortunately|then|later|the next)\b/i.test(norm(t)), 'Use um conector: <b>Suddenly</b>, … / <b>Eventually</b>, … / <b>In the end</b>, …')),
  caso: R("uma frase para <b>contar um caso</b> ou <b>reagir</b> (Did I tell you about …? / No way! / You're kidding!)", (t, k) => {
    const c = k.join(' ');
    if (/\b(say|said) (me|you|him|her|us|them)\b/.test(c)) return 'Com a pessoa logo depois, use <b>tell</b>: tell <b>me</b>, told <b>you</b>.';
    return need(/\b(did i tell you|guess what|no way|you're kidding|you won't believe|what happened|long story short|anyway|to make it worse|hilarious|embarrassing|poor you|that's awful|oh my god)\b/.test(c), "Conte ou reaja: <b>Did I tell you about</b> …? / <b>No way!</b> / <b>You're kidding!</b>");
  }),
  noticia: R('uma frase de <b>notícia</b>: a novidade (has + particípio), um detalhe (passado) ou a fonte (according to)', (t, k) => need(has(k, /^(has|have|according|reported|witnesses|police|firefighters|were|was|had|evacuated|rescued|news)$/) || k.some((w) => /\p{L}{3,}ed$/u.test(w)), 'Escreva uma notícia: A fire <b>has destroyed</b> … / <b>According to</b> the police, …')),
  historia: R('uma frase de <b>história curta</b>, com os tempos do passado e conectores', (t, k) => need(/\b(was|were) \p{L}+ing\b/u.test(k.join(' ')) || /\bhad \p{L}+/u.test(k.join(' ')) || has(k, /^(suddenly|eventually|finally|end|felt|saw|found|decided|realized)$/) || k.some((w) => /\p{L}{3,}ed$/u.test(w)), 'Escreva no passado: I <b>was walking</b> … <b>Suddenly</b>, I <b>saw</b> …')),
  // ---------- Módulo 16 ----------
  perfect_continuous: R("algo que começou e continua, com <b>have / has been + -ing</b> (I've been learning English for two years.)", (t, k) => {
    const c = k.join(' ');
    if (/\b(i|you|we|they|he|she) (am|is|are|'m|'s|'re) \p{L}+ing\b.*\b(for (\d+|two|three|four|five|six|a|an|many|ten) (years|months|weeks|days|hours|year|month|week|hour)|since)\b/u.test(c) || /\b(i'm|you're|we're|they're|he's|she's) \p{L}+ing\b.*\b(for (\d+|two|three|four|five|six|a|an|many|ten) (years|months|weeks|days|hours|year|month|week|hour)|since)\b/u.test(c)) return "Para algo que começou e continua, use <b>have been + -ing</b>: I've been learning English for two years.";
    if (/\b(been) (knowing|having|liking|loving|being)\b/.test(c)) return "Verbos de estado ficam no simples: I've <b>known</b> her for years.";
    return need(/\b(have|has|'ve|'s|i've|you've|we've|they've|she's|he's|it's) ((i|you|we|they|he|she|it) )?been \p{L}+ing\b/u.test(c), "Use have been + -ing: I'<b>ve been learning</b> … for …");
  }),
  mudanca: R('uma <b>mudança</b>: present perfect (Prices have gone up.) ou antes e agora (I used to …, but now …)', (t, k) => {
    const c = k.join(' ');
    if (/\b(has|have) (went|become|grew|came|ran)\b/.test(c) && !/\b(has|have) become\b/.test(c)) return 'Depois de has / have, use o particípio: has <b>gone</b>, has <b>grown</b>.';
    if (/\bnot \p{L}+ anymore\b/u.test(c) === false && /\banymore\b/.test(c) && !/\b(don't|doesn't|didn't|isn't|aren't|wasn't|not|never|no)\b/.test(c)) return 'anymore vai na frase negativa: I <b>don\'t</b> live there anymore.';
    return need(has(k, /^(changed|grown|become|improved|gone|has|have|used|now|nowadays|anymore|longer)$/), 'Fale de uma mudança: The city <b>has changed</b> … / I <b>used to</b> …, but <b>now</b> …');
  }),
  usedto2: R('<b>used to</b> (costumava), <b>be used to</b> (estar acostumado) ou <b>get used to</b> (se acostumar)', (t, k) => {
    const c = k.join(' ');
    if (/\b(am|is|are|'m|'s|'re|i'm|you're|she's|he's|we're|they're|getting|get|got|was|were) used to (live|work|eat|drive|speak|wake|cook|wear|be|have|go|study|sleep|tip)\b/.test(c)) return 'Depois de be / get used to, o verbo vai com -ing: I\'m used to <b>working</b>.';
    if (/\bused to (living|working|eating|driving|speaking|waking)\b/.test(c) && !/\b(am|is|are|'m|'s|'re|i'm|you're|she's|he's|we're|they're|getting|get|got|was|were) used to\b/.test(c)) return 'Para "costumava", o verbo vem no básico: I used to <b>live</b>. Para "acostumado", use I\'m used to living.';
    return need(/\bused to\b/.test(c), 'Use used to, be used to ou get used to.');
  }),
  still_yet: R('uma frase de adaptação com <b>still, already, yet ou anymore</b>', (t, k) => {
    const c = k.join(' ');
    if (/\b(haven't|hasn't|didn't|don't) \p{L}+ .*\bstill\s*[.!]?$/u.test(c)) return 'Para "ainda não", use <b>yet</b> no fim: I haven\'t found a job <b>yet</b>.';
    if (/\byet\b/.test(c) && !/\b(haven't|hasn't|have|has|didn't|did|not|don't|isn't|aren't)\b/.test(c)) return 'yet vai na pergunta ou na negativa: I haven\'t … <b>yet</b>. / Have you … <b>yet</b>?';
    return need(has(k, /^(still|already|yet|anymore|longer)$/), 'Use still, already, yet ou anymore: I <b>still</b> miss … / I\'ve <b>already</b> …');
  }),
  perfect_simples_continuo: R("o <b>present perfect</b> simples (resultado: I've saved $2,000) ou contínuo (atividade: I've been saving for a year)", (t, k) => {
    const c = k.join(' ');
    if (/\bbeen \p{L}+ing (\d+|two|three|four|five|six|seven|eight|nine|ten|many|several) \p{L}+s\b/u.test(c)) return 'Com um número de coisas (resultado), use o simples: I\'ve <b>read</b> three books.';
    return need(/\b(have|has|'ve|i've|you've|we've|they've|she's|he's) (been |already |just |never )?\p{L}+/u.test(c) && has(k, /^(have|has|i've|you've|we've|they've|she's|he's|haven't|hasn't)$/), "Use o present perfect: I'<b>ve saved</b> … / I'<b>ve been saving</b> …");
  }),
  texto_mudanca: R('uma frase do seu <b>texto sobre uma mudança</b>: used to, passado com data, have been + -ing ou get used to', (t, k) => need(/\b(used to|been \p{L}+ing|getting used|got used|ago|looking back|regret|hasn't been|i've|have)\b/u.test(k.join(' ')) || k.some((w) => /\p{L}{3,}ed$/u.test(w)), "Conte a mudança: I <b>used to</b> … / Two years <b>ago</b>, I … / I'<b>ve been</b> …ing …")),
  // ---------- Módulo 17 ----------
  might: R('uma possibilidade com <b>might / may</b> ou um grau de certeza (I\'ll probably … / I definitely won\'t …)', (t, k) => {
    const c = k.join(' ');
    if (/\b(might|may) to\b/.test(c)) return 'might e may vêm sem to: I might <b>go</b>.';
    if (/\b(mights|mays)\b/.test(c)) return 'might não muda: she <b>might</b>.';
    if (/\bwon't probably\b/.test(c)) return 'Com won\'t, probably vem antes: I <b>probably won\'t</b> go.';
    return need(has(k, /^(might|may|probably|definitely|maybe|perhaps)$/), 'Fale de uma possibilidade: I <b>might</b> … / I\'ll <b>probably</b> …');
  }),
  tempo_futuro: R("uma frase com <b>when, as soon as, before, after ou until</b> + presente (When I get there, I'll call you.)", (t, k) => {
    const c = k.join(' ');
    if (/\b(when|as soon as|before|after|until|once) (i|you|we|they|he|she|it)( will|'ll)\b/.test(c)) return 'Depois de when / as soon as, o futuro vai no presente: When I <b>get</b> there, …';
    return need(/\b(when|as soon as|before|after|until|once|by the time)\b/.test(c), "Use when, as soon as, before, after ou until: <b>When</b> I get there, I'll call you.");
  }),
  previsao: R("uma <b>previsão</b> sobre o futuro (will / won't / likely / I doubt …)", (t, k) => {
    const c = k.join(' ');
    if (/\bi think (that )?\p{L}+ (won't|will not)\b/u.test(c)) return "Na opinião negativa, o not vai no think: <b>I don't think</b> … will …";
    if (/\b(is|are) likely (go|be|happen|change|rise|disappear)\b/.test(c)) return 'be likely pede to: is likely <b>to</b> go up.';
    return need(has(k, /^(will|won't|likely|unlikely|doubt|future|probably|definitely|predict)$/) || /\b(\p{L}+'ll)\b/u.test(c), 'Faça uma previsão: Cars <b>will</b> … / Prices are <b>likely to</b> … / I <b>doubt</b> …');
  }),
  metas: R('uma <b>meta</b> com to + verbo (My goal is to … / I\'m planning to …) e, se quiser, um prazo com by', (t, k) => {
    const c = k.join(' ');
    if (/\b(goal is|planning|plan|hope|intend|would like|'d like|want) (reach|finish|travel|learn|save|run|read|change|get|work|go|buy|start)\b/.test(c)) return 'Esse verbo pede to: I\'m planning <b>to</b> travel.';
    return need(/\b(goal is|goal|plan|planning|hope|intend|would like|'d like|want) to\b/.test(c) || /\bby (the end|next|december|june|\d)/.test(c), 'Diga uma meta: My <b>goal is to</b> … / I\'m <b>planning to</b> … by …');
  }),
  future_continuous: R('o que você <b>vai estar fazendo</b>: will be + -ing (This time next year, I\'ll be living …)', (t, k) => {
    const c = k.join(' ');
    if (/\b(will|'ll) be (live|work|fly|study|sleep|drive|travel|sit|wait|use|lie)\b/.test(c)) return 'Depois de will be, o verbo vai com -ing: I\'ll be <b>living</b>.';
    if (/\b(will|'ll) (living|working|flying|studying|sleeping|driving|traveling)\b/.test(c)) return 'Falta o be: I\'ll <b>be</b> working.';
    return need(/\b(will|'ll|won't) ((i|you|we|they|he|she|it) )?be \p{L}+ing\b/u.test(c), "Use will be + -ing: I'<b>ll be living</b> …");
  }),
  carta_futuro: R('uma frase da <b>carta para o futuro</b> (When you read this, … / I hope you\'ll be … / You might …)', (t, k) => {
    if (/\bwhen you will (read|open)\b/i.test(norm(t))) return 'Depois de when, o futuro vai no presente: When you <b>read</b> this…';
    return need(/\b(will|'ll|going to|might|may|hope|when you|don't forget|remember|be kind|take care)\b/i.test(norm(t)), "Escreva para o futuro: When you read this, … / I hope you'<b>ll be</b> … / You <b>might</b> …");
  }),
  // ---------- Módulo 18 ----------
  condicional2: R("uma situação imaginada: <b>if + passado, would + verbo</b> (If I had more money, I'd travel.)", (t, k) => {
    const c = k.join(' ');
    if (/\bif (i|you|we|they|he|she|it) would\b/.test(c)) return 'Depois de if, use o passado, e não would: If I <b>had</b> …';
    if (/\bif i (am|was|would be) you\b/.test(c)) return 'O padrão é <b>If I were you</b>.';
    if (/\bif (i|you|we|they|he|she) (had|were|won|lived|could|knew)\b/.test(c) && /\b(will|'ll)\b/.test(c) && !/\bwould|'d\b/.test(c)) return 'Com if + passado, o resultado é <b>would</b>: If I had …, I<b>\'d</b> …';
    return need(/\bif\b/.test(c) && /\b(would|'d|could|might|wouldn't)\b/.test(c), "Imagine: <b>If</b> I had …, I<b>'d</b> …");
  }),
  hipotetica: R("uma pergunta ou resposta imaginada (What would you do if …? / I'd … / I'd never …)", (t, k) => {
    const c = k.join(' ');
    if (/\bwhat will you do if (you|i) (found|won|saw|had|were|lost)\b/.test(c)) return 'Com if + passado, a pergunta usa <b>would</b>: What would you do if…?';
    if (/\b(would|'d) (to )?(took|went|told|kept|lied|stole)\b/.test(c)) return 'Depois de would, o verbo vem no básico: I\'d <b>take</b> …';
    return need(/\b(would|'d|wouldn't|what if|tough one)\b/.test(c), "Use would: What <b>would</b> you do if…? / I<b>'d</b> …");
  }),
  wish: R('um desejo sobre o presente: <b>wish + passado</b> (I wish I had …, I wish I could …)', (t, k) => {
    const c = k.join(' ');
    if (/\bwish (i|you|we|they|he|she|it) (have|has|am|is|are|can|will|know|live|speak)\b/.test(c)) return 'Depois de wish, o verbo vai para o passado: I wish I <b>had</b> / <b>were</b> / <b>could</b> …';
    return need(/\b(wish|if only)\b/.test(c), 'Use wish: I <b>wish</b> I had … / I <b>wish</b> I could …');
  }),
  unless: R('uma condição com <b>unless, as long as, provided that, in case</b> ou <b>even if</b>', (t, k) => {
    const c = k.join(' ');
    if (/\bunless (i|you|we|they|he|she|it) (don't|doesn't|do not|does not)\b/.test(c)) return 'unless já é negativo (if not): unless you <b>hurry</b>, sem don\'t.';
    if (/\b(unless|as long as|in case|provided that|even if) (i|you|we|they|he|she|it) (will|'ll)\b/.test(c)) return 'Depois dessas palavras, o futuro vai no presente: in case it <b>rains</b>.';
    return need(/\b(unless|as long as|provided that|providing that|in case|even if)\b/.test(c), 'Use unless, as long as, in case ou even if.');
  }),
  condicional12: R('uma condição possível (if + presente, will) ou imaginada (if + passado, would)', (t, k) => {
    const c = k.join(' ');
    if (/\bif (i|you|we|they|he|she|it) (win|get|pass|have|am|is|are|go|study)\b/.test(c) && /\b(would|'d)\b/.test(c)) return 'Não misture: com if + presente, use <b>will</b> (If I win, I\'ll …).';
    if (/\bif (i|you|we|they|he|she|it) (won|got|passed|had|were|went|could)\b/.test(c) && /\b(will|'ll)\b/.test(c) && !/\b(would|'d)\b/.test(c)) return 'Não misture: com if + passado, use <b>would</b> (If I won, I\'d …).';
    if (/\bif (i|you|we|they|he|she|it) (will|would)\b/.test(c)) return 'Depois de if, nunca will ou would.';
    return need(/\bif\b/.test(c) && /\b(will|won't|would|wouldn't|'ll|'d)\b/.test(c), "Use uma condicional: If I …, I'll … / If I …ed, I'd …");
  }),
  conselho_coluna: R("um <b>conselho</b> com empatia (I understand … / If I were you, I'd … / You could …)", (t, k) => {
    const c = k.join(' ');
    if (/\bif i (am|was|would be) you\b/.test(c)) return 'O padrão é <b>If I were you</b>.';
    if (/\bif i were you,? (i will|i'll)\b/.test(c)) return "Com If I were you, use <b>I'd</b>: If I were you, I'd …";
    return need(/\b(if i were you|you should|you could|why don't you|i understand|must be|i'd|i would|would|deserve)\b/.test(c), "Aconselhe: <b>If I were you, I'd</b> … / <b>You could</b> …");
  }),
  // ---------- Módulo 19 ----------
  obrigacao2: R('uma obrigação no passado ou no futuro (I had to … / You\'ll have to …) ou com be supposed to', (t, k) => {
    const c = k.join(' ');
    if (/\b(musted|must to|will must|had must)\b/.test(c)) return 'must não tem passado nem futuro: use <b>had to</b> / <b>will have to</b>.';
    if (/\b(am|is|are|'m|'s|'re|i'm|we're|you're|she's|he's|they're) suppose to\b/.test(c)) return 'A expressão é <b>supposed</b> to, com -d.';
    return need(/\b(had to|have to|has to|will have to|'ll have to|supposed to|need to|allowed to|didn't have to|don't need to)\b/.test(c), 'Fale de uma obrigação: I <b>had to</b> … / You\'<b>ll have to</b> … / We\'re <b>supposed to</b> …');
  }),
  entrevista: R('uma resposta de <b>entrevista</b>: experiência (I\'ve worked …), um ponto forte ou um fato com data', (t, k) => {
    const c = k.join(' ');
    if (/\b(i've|i have) (worked|led|managed)\b.*\bin (19|20)\d\d\b/.test(c)) return 'Com data, use o passado simples: In 2020, I <b>led</b> …';
    if (/\bi work (in|as|for) \p{L}+.*\bfor (\d+|two|three|four|five|six|ten) years\b/u.test(c)) return "Para há quanto tempo, use o present perfect: I'<b>ve worked</b> … for five years.";
    return need(has(k, /^(experience|worked|i've|strengths|strength|weakness|weaknesses|skills|led|managed|organized|team|achievement|learned)$/), "Responda como numa entrevista: I'<b>ve worked</b> in … / One of my <b>strengths</b> is …");
  }),
  had_better: R("um conselho forte com <b>had better</b> (You'd better … / You'd better not …)", (t, k) => {
    const c = k.join(' ');
    if (/\b(don't|doesn't|didn't) had better\b|\bhad not better\b|\bhad better don't\b/.test(c)) return "A negativa é <b>had better not</b>: You'd better not …";
    if (/\b(had|'d) better to\b/.test(c)) return "had better vem sem to: You'd better <b>hurry</b>.";
    return need(/\b(had better|'d better|you'd better|i'd better|we'd better)\b/.test(c), "Dê um aviso: You'<b>d better</b> … / You'<b>d better not</b> …");
  }),
  estudo: R('uma frase sobre <b>estudos</b> com as expressões (sign up for, take a course, catch up on, drop out of …)', (t, k) => {
    if (/\b(make|made|making|makes) (a|an|the) (\p{L}+ )?course\b/u.test(k.join(' '))) return 'Fazer um curso é <b>take</b> a course.';
    return need(/\b(sign(ed)? up|enroll|take a course|taking|took a course|apply|applied|drop(ped)? out|catch(ing)? up|fall(ing)? behind|fell behind|tuition|scholarship|degree|course|class|assignment)\b/.test(k.join(' ')), 'Fale dos seus estudos: I <b>signed up for</b> … / I need to <b>catch up on</b> …');
  }),
  reuniao: R("uma fala de <b>reunião</b> (Sorry to interrupt, but … / What if we …? / I see your point, but …)", (t, k) => need(/\b(sorry to interrupt|can i add|what if we|how about|we could|why don't we|i see your point|in my view|good point|let's move on|wrap up|i agree|i disagree)\b/.test(k.join(' ')), "Fale como numa reunião: <b>Sorry to interrupt, but</b> … / <b>What if we</b> …?")),
  email_formal: R('uma frase de <b>e-mail formal</b> com pergunta indireta (Could you tell me when the course starts?)', (t, k) => {
    const c = k.join(' ');
    if (/\b(tell me|know|wonder) (when|where|how much|how many|what time|what) (does|do|did|is|are) \p{L}+/u.test(c)) return 'Na pergunta indireta, a ordem é de afirmação: tell me when the course <b>starts</b>.';
    if (/\b(i'm|i'd|don't|can't|won't|isn't)\b/.test(c)) return 'No e-mail formal, sem contrações: <b>I am</b>, <b>I would</b>.';
    return need(/\b(inquire|enquire|could you (please )?tell me|i would like to know|i would be grateful|look forward|dear|regards|further information)\b/.test(c), 'Escreva formalmente: I am writing to <b>inquire about</b> … / <b>Could you please tell me</b> …?');
  }),
  // ---------- Módulo 20 ----------
  passiva_presente: R('a <b>passiva no presente</b>: is / are + particípio (Coffee is grown in Brazil.)', (t, k) => {
    const c = k.join(' ');
    if (/\b(is|are) (make|grow|sell|speak|build|use|produce|export|design)\b/.test(c)) return 'Na passiva, use o particípio: is <b>made</b>, are <b>grown</b>, is <b>spoken</b>.';
    if (/\b(\p{L}+s|they|these|those) is (made|grown|sold|used|produced|built)\b/u.test(c) && !/\b(this|it|that|news)\b/.test(c)) return 'Com plural, use <b>are</b>: These shoes <b>are</b> made …';
    return need(/\b(is|are|isn't|aren't) (\p{L}+ed|made|grown|sold|spoken|built|known|written|worn|eaten|done|taken|kept)\b/u.test(c), 'Use a passiva: … <b>is made</b> in … / … <b>are grown</b> …');
  }),
  processo: R('uma etapa de <b>processo</b>: conector + passiva (First, the beans are picked.)', (t, k) => {
    const c = k.join(' ');
    if (/\b(is|are) (pick|dry|roast|grind|mix|heat|cool|pack|ship|cut|wash)\b(?! up| out)/.test(c)) return 'Use o particípio: are <b>picked</b>, are <b>dried</b>, is <b>ground</b>.';
    return need(/\b(is|are) (\p{L}+(ed|en|wn)|ground|cut|made|sold|built)\b/u.test(c) || /\bmade (from|of)\b/.test(c), 'Descreva uma etapa: <b>First</b>, the beans <b>are picked</b>.');
  }),
  passiva_tempos: R('a passiva em outro tempo (has been / will be / is being / was + particípio)', (t, k) => {
    const c = k.join(' ');
    if (/\b(has|have) been (repair|open|close|cancel|announce|build|finish)\b/.test(c) || /\bwill be (repair|open|close|cancel|announce|build|finish)\b/.test(c) || /\bis being (repair|open|close|build|paint|renovate)\b/.test(c)) return 'Use o particípio: has been <b>repaired</b>, will be <b>opened</b>, is being <b>built</b>.';
    if (/\bis been\b|\bwill been\b|\bhas being\b/.test(c)) return 'Confira o to be: <b>has been</b>, <b>will be</b>, <b>is being</b>.';
    return need(/\b(has been|have been|will be|is being|are being|was|were|won't be|hasn't been) (\p{L}+ed|built|done|made|sold|taken|written|given|shown|chosen|found|paid|cut|held)\b/u.test(c), 'Use a passiva num tempo: The bridge <b>has been repaired</b>. / It <b>will be opened</b> …');
  }),
  have_done: R('um serviço com <b>have / get + coisa + particípio</b> (I had my hair cut.)', (t, k) => {
    const c = k.join(' ');
    if (/\b(had|have|has|get|got|getting|having) (my|your|his|her|our|their|the) (\p{L}+ )?(fix|paint|clean|wash|check|test|repair|translate|deliver|install|shorten)\b/u.test(c)) return 'A coisa é seguida do particípio: my car <b>fixed</b>, my house <b>painted</b>.';
    return need(/\b(had|have|has|get|got|getting|having|get) (my|your|his|her|our|their|the|this|it) (\p{L}+ )?(\p{L}+ed|cut|done|made|taken)\b/u.test(c), 'Diga um serviço: I <b>had my hair cut</b>. / I\'m <b>getting my car fixed</b>.');
  }),
  passiva_by: R('uma obra ou invenção com a passiva e <b>by</b> (… was invented by …)', (t, k) => {
    const c = k.join(' ');
    if (/\bwas (invent|paint|write|wrote|direct|compose|discover|found|build)\b/.test(c)) return 'Use o particípio: was <b>invented</b>, was <b>written</b>, was <b>painted</b>.';
    if (/\b(invented|painted|written|directed|composed|discovered|founded|built) (from|of) \p{Lu}/u.test(norm(t))) return 'Quem fez vem com <b>by</b>: invented <b>by</b> Edison.';
    return need(/\b(was|were) ((it|they|this|that|he|she) )?(\p{L}+ed|written|built|drawn|sung|made|taken|shown)\b/u.test(c), 'Use a passiva: The light bulb <b>was invented by</b> Edison.');
  }),
  texto_processo: R('uma frase do texto sobre um <b>processo</b> (introdução, etapa com a passiva ou conclusão)', (t, k) => need(/\b(is|are) \p{L}+(ed|en|wn|t)\b/u.test(k.join(' ')) || /\b(have you ever wondered|this way|that's how|first|then|after that|finally|next)\b/.test(k.join(' ')), 'Escreva uma etapa: <b>First</b>, the bottles <b>are collected</b>.')),
  // ---------- Módulo 21 ----------
  indireto: R('o que alguém disse, em <b>discurso indireto</b> (She said she was tired.)', (t, k) => {
    const c = k.join(' ');
    if (/\bsaid (me|you|him|her|us|them)\b/.test(c)) return 'Com a pessoa logo depois, use <b>told</b>: She <b>told me</b> she was tired.';
    if (/\bsaid (that )?(i|you|he|she|we|they|it) (will|can|am|is|are)\b/.test(c)) return 'No discurso indireto, o tempo volta um passo: will → <b>would</b>, can → <b>could</b>, am / is → <b>was</b>.';
    return need(/\b(said|told|mentioned|explained)\b/.test(c), 'Conte o que alguém disse: She <b>said</b> she was …');
  }),
  indireto_pedido: R('um pedido ou ordem contado: <b>told / asked + pessoa + (not) to + verbo</b>', (t, k) => {
    const c = k.join(' ');
    if (/\b(told|asked|reminded|warned) (me|you|him|her|us|them) (don't|do not)\b/.test(c)) return 'Na negativa, use <b>not to</b>: She told me <b>not to</b> run.';
    if (/\b(told|asked|reminded|warned) (me|you|him|her|us|them) to not\b/.test(c)) return 'A ordem é <b>not to</b>: told me <b>not to</b> …';
    if (/\b(told|asked) (me|you|him|her|us|them) (wait|call|come|bring|stay|sit|help|be|go|send)\b/.test(c)) return 'Falta o to: told me <b>to</b> wait.';
    if (/\b(told|asked) (i|he|she|we|they) to\b/.test(c)) return 'Depois de told / asked, use me, him, her, us, them: told <b>me</b> to …';
    return need(/\b(told|asked|reminded|warned|advised|invited|ordered) (me|you|him|her|us|them|\p{L}+) (not )?to \p{L}+/u.test(c), 'Conte um pedido: He <b>told me to</b> wait. / She <b>asked me not to</b> …');
  }),
  indireto_pergunta: R('uma pergunta contada (She asked where I lived. / He asked if I was married.)', (t, k) => {
    const c = k.join(' ');
    if (/\b(asked|wanted to know|wondered) (me )?(where|when|why|what|how|who|what time|how long) (do|does|did|are|is|was|were|can|will) (i|you|he|she|we|they|it)\b/.test(c)) return 'Na pergunta contada, a ordem é de afirmação e sem do: She asked where <b>I lived</b>.';
    if (/\?\s*$/.test(t.trim()) && /\b(asked|wanted to know)\b/.test(c)) return 'A pergunta contada termina com ponto, e não com ?';
    return need(/\b(asked|wanted to know|wondered)\b.*\b(if|whether|where|when|why|what|how|who)\b/.test(c), 'Conte uma pergunta: She <b>asked where</b> I lived. / He <b>asked if</b> I was …');
  }),
  verbos_relato: R('um relato com <b>promise, offer, refuse, suggest, admit, explain</b> …', (t, k) => {
    const c = k.join(' ');
    if (/\b(suggested|suggest|admitted|admit|denied|deny) to \p{L}+/u.test(c)) return 'suggest, admit e deny pedem -ing: She suggested <b>taking</b> …';
    if (/\b(promised|offered|refused|agreed) (\p{L}+ing)\b/u.test(c)) return 'promise, offer, refuse e agree pedem to: He promised <b>to call</b>.';
    if (/\bapologized (to |)(be|being)? ?(late|for be)\b/.test(c) && !/\bfor being\b/.test(c)) return 'Pedir desculpas por: apologized <b>for being</b> late.';
    return need(has(k, /^(promised|offered|refused|agreed|suggested|explained|admitted|denied|complained|apologized|insisted|recommended|confirmed)$/), 'Use um verbo de relato: He <b>promised</b> to … / She <b>suggested</b> …ing.');
  }),
  say_tell: R('<b>say</b> ou <b>tell</b> do jeito certo (She told me … / He said that …)', (t, k) => {
    const c = k.join(' ');
    if (/\b(said|say|says) (me|you|him|her|us|them)\b/.test(c)) return 'Com a pessoa logo depois, use <b>tell</b>: She <b>told me</b> …';
    if (/\b(told|tell|tells) that\b/.test(c)) return 'tell precisa da pessoa: She told <b>me</b> that … (ou She said that …).';
    return need(has(k, /^(said|told|say|tell|says|tells|apparently|heard)$/), 'Conte uma novidade: She <b>told me</b> … / He <b>said</b> …');
  }),
  recado: R('uma frase de <b>recado</b> em discurso indireto (She said … / She asked you to … / She asked if …)', (t, k) => {
    const c = k.join(' ');
    if (/\bsaid (that )?(the meeting |it |she |he )?will\b/.test(c)) return 'No recado, will vira <b>would</b>: She said it <b>would</b> be …';
    if (/\basked (you|him|her) (bring|call|send|confirm)\b/.test(c)) return 'Falta o to: asked you <b>to</b> bring …';
    return need(/\b(called|said|asked|wanted to know|mentioned|left a message|call (her|him) back)\b/.test(c), 'Repasse o recado: Rachel <b>called</b>. She <b>said</b> … / She <b>asked you to</b> …');
  }),
  // ---------- Módulo 22 ----------
  conectores_argumento: R('um argumento com conector (<b>Firstly, In addition, However, Therefore, In conclusion</b>)', (t, k) => {
    if (/\bdespite (it|they|he|she|we|i|you|the \p{L}+ (is|are|was|were))\b/iu.test(norm(t))) return 'despite vem com substantivo ou -ing: despite <b>the cost</b>. Com frase, use although.';
    return need(/\b(firstly|first of all|secondly|in addition|moreover|furthermore|however|on the other hand|therefore|as a result|in conclusion|to sum up|all in all|despite|finally)\b/i.test(norm(t)), 'Use um conector: <b>Firstly</b>, … / <b>In addition</b>, … / <b>Therefore</b>, …');
  }),
  phrasal: R('uma frase com um <b>phrasal verb</b> (give up, find out, look after, put off, run out of …)', (t, k) => {
    const c = k.join(' ');
    if (/\b(turn|put|give|pick|find|set) (down|off|up|out) (it|them)\b/.test(c)) return 'Com pronome, a partícula vai para o fim: turn <b>it down</b>.';
    if (/\blooking forward to (see|meet|hear|work|visit)\b/.test(c)) return 'Depois de look forward to, use -ing: looking forward to <b>seeing</b>.';
    return need(/\b(give|gave|giving) up\b|\b(find|found|finding) out\b|\blook(ed|ing|s)? after\b|\blook(ing)? forward to\b|\b(put|putting) off\b|\bturn(ed|ing)? down\b|\bcame? up with\b|\b(run|ran|running) out of\b|\b(get|got|gets|getting) (on |along )?(well )?(on )?with\b|\bset(ting)? up\b|\b(took|take) up\b|\bcarry on\b|\bfigure(d)? out\b|\bbroke down\b|\bshow(ed)? up\b|\bwork(ed)? out\b|\bcall(ed)? off\b/.test(c), 'Use um phrasal verb: I <b>gave up</b> … / We <b>ran out of</b> …');
  }),
  pros_contras: R('uma opinião com grau ou com prós e contras (I agree up to a point … / The main advantage is …)', (t, k) => {
    if (/\b(i'm|i am) (agree|disagree)\b/.test(k.join(' '))) return 'agree é verbo: <b>I agree</b>.';
    return need(/\b(agree|disagree|up to a point|not so sure|advantage|disadvantage|benefit|drawback|on balance|fair point|it depends|in favor|against|pros|cons)\b/.test(k.join(' ')), 'Dê o grau da opinião ou um prós e contras: I <b>agree up to a point</b>. / The main <b>advantage</b> is …');
  }),
  artigo: R('uma frase de <b>artigo</b> (Have you ever …? / In my opinion, … / What are you waiting for?)', (t, k) => need(/\b(have you ever|imagine|in my opinion|in my experience|let me tell you|what are you waiting for|give it a try|the best way|i think|for example)\b/.test(k.join(' ')), 'Escreva como num artigo: <b>Have you ever</b> …? / <b>In my experience</b>, …')),
  prova_b1: R('uma frase sobre a <b>prova</b> ou uma estratégia (The exam has … / I will practice …)', (t, k) => need(has(k, /^(exam|test|reading|writing|listening|speaking|practice|e-mail|article|story|photo|pairs|parts|minutes|spelling|answers|strategy)$/), 'Fale da prova: The <b>exam</b> has … / I will <b>practice</b> …')),
  texto_opiniao: R('uma frase de <b>texto de opinião</b> (In my opinion, … should … / Firstly, … / However, … / In conclusion, …)', (t, k) => {
    if (/\bshould to\b/.test(k.join(' '))) return 'should vem sem to: should <b>ban</b>.';
    return need(/\b(should|would|in my opinion|firstly|in addition|moreover|however|for example|in conclusion|therefore|on the other hand)\b/.test(k.join(' ')), 'Escreva uma parte do texto: In my opinion, … <b>should</b> … / <b>Firstly</b>, … / <b>However</b>, …');
  }),
  // ---------- Módulo 23 ----------
  would_habito: R('um hábito do passado com <b>would</b> (ações) ou <b>used to</b> (estados)', (t, k) => {
    const c = k.join(' ');
    if (/\b(i|we|she|he|they|my \p{L}+) would (have|be|live|know|love|like|own|believe)\b/u.test(c) && /\b(when i was|as a child|every|always|used to|childhood|kid)\b/.test(c)) return 'Para estados no passado (have, be, live, know), use <b>used to</b>: I used to have …';
    if (/\bwould (went|played|spent|told|made|took)\b/.test(c)) return 'Depois de would, o verbo vem no básico: would <b>go</b>.';
    return need(/\b(would|'d|used to)\b/.test(c), 'Conte um hábito: Every summer, we <b>would</b> … / I <b>used to</b> …');
  }),
  past_perfect_continuous: R('o que <b>vinha acontecendo</b>: had been + -ing (When we arrived, it had been raining for hours.)', (t, k) => {
    const c = k.join(' ');
    if (/\bhad been (knowing|having|being|liking|loving|owning)\b/.test(c)) return 'Verbos de estado ficam no past perfect simples: had <b>known</b>.';
    if (/\bhad been (wait|work|rain|run|cry|walk|study|date|live)\b/.test(c)) return 'Depois de had been, -ing: had been <b>waiting</b>.';
    return need(/\b(had|'d) been \p{L}+ing\b/u.test(c), "Use had been + -ing: … had <b>been waiting</b> for …");
  }),
  remember_ing_to: R('<b>remember, forget, stop ou try</b> com -ing ou to, no sentido certo', (t, k) => {
    const c = k.join(' ');
    if (/\b(don't|never) forget (lock|buy|call|send|bring|pay|take)\b/.test(c) || /\bremember (lock|buy|call|send|bring|pay|take)\b/.test(c)) return 'Para tarefa, use to: Remember <b>to</b> lock the door.';
    return need(/\b(remember|remembered|forget|forgot|stop|stopped|try|tried|regret)\b/.test(c) && (/\b(remember|remembered|forget|forgot|stop|stopped|try|tried|regret)\w* (\p{L}+ing|to \p{L}+)\b/u.test(c)), 'Use remember, forget, stop ou try com -ing ou to: I remember <b>meeting</b> … / Remember <b>to</b> …');
  }),
  nostalgia: R('uma memória com os <b>sentidos</b> ou <b>remind … of</b> (I can still smell … / This song reminds me of …)', (t, k) => {
    const c = k.join(' ');
    if (/\b(remembers|remember) me (of|about)\b/.test(c)) return 'Para "isso me lembra de", use <b>reminds me of</b>.';
    if (/\breminds? me (about|to my|from)\b/.test(c)) return 'A expressão é <b>remind … of</b>: reminds me <b>of</b> …';
    return need(/\b(remind|reminds|reminded|smell|hear|taste|those were the days|miss|memories|vividly|vaguely|nostalgic|still)\b/.test(c), 'Conte uma memória: I can still <b>smell</b> … / This <b>reminds me of</b> …');
  }),
  momento: R('um momento decisivo (The moment I … / As soon as … / Hardly had … when / No sooner had … than)', (t, k) => {
    const c = k.join(' ');
    if (/\bno sooner\b.*\bwhen\b/.test(c) && !/\bthan\b/.test(c)) return 'no sooner pede <b>than</b>: No sooner had we left <b>than</b> …';
    if (/\bhardly\b.*\bthan\b/.test(c) && !/\bwhen\b/.test(c)) return 'hardly pede <b>when</b>: Hardly had I arrived <b>when</b> …';
    if (/^\s*(no sooner|hardly) (i|we|you|he|she|they) had\b/i.test(norm(t))) return 'Depois de No sooner / Hardly no começo, inverta: <b>had I</b> arrived.';
    return need(/\b(the moment|as soon as|no sooner|hardly|from that day on|ever since|little did i know|out of the blue|it hit me)\b/.test(c), 'Marque o momento: <b>The moment</b> I saw …, I knew. / <b>Hardly had</b> I … <b>when</b> …');
  }),
  memoria_texto: R('uma frase da sua <b>memória</b>: hábito (would / used to), o momento, os sentidos ou a reflexão', (t, k) => need(/\b(would|used to|had been|the moment|smell|hear|taste|looking back|taught me|still|remember|i'll never forget)\b/.test(k.join(' ')) || k.some((w) => /\p{L}{3,}ed$/u.test(w)), 'Escreva a memória: Every summer, she <b>would</b> … / <b>Looking back</b>, …')),
  // ---------- Módulo 24 ----------
  condicional3: R("o passado imaginado: <b>if + had + particípio, would have + particípio</b>", (t, k) => {
    const c = k.join(' ');
    if (/\bif (i|you|we|they|he|she|it) would have\b/.test(c)) return 'Depois de if, use had: <b>If I had</b> known…';
    if (/\b(would|could|might)( \w+)? have (went|ate|saw|did|took|came|knew|wrote|call|go|tell|invite|see|eat|take|know|do|write)\b/.test(c)) return 'Depois de would have, use o particípio: would have <b>gone</b>, <b>known</b>, <b>come</b>.';
    return need((/\bif\b/.test(c) && /\b(had|hadn't|\w+'d)\b/.test(c) && /\b(would|could|might|wouldn't|couldn't|\w+'d)( \w+)? have\b/.test(c)) || /\bif only\b.*\b(had|hadn't)\b/.test(c), "Imagine o passado: <b>If I had</b> known, I <b>would have</b> …");
  }),
  wish_passado: R('um arrependimento com <b>wish / if only + had + particípio</b>', (t, k) => {
    const c = k.join(' ');
    if (/\bwish (i|you|we|they|he|she) would have\b/.test(c)) return 'Com wish sobre o passado, use had: I wish I <b>had</b> …';
    return need(/\b(wish|wishes|wished|if only)\b/.test(c) && /\b(had|hadn't|\w+'d)\b/.test(c), 'Lamente o passado: I <b>wish I had</b> … / <b>If only I had</b> …');
  }),
  condicional_mista: R('uma decisão do passado com efeito <b>agora</b> (If I had …, I would … now)', (t, k) => {
    const c = k.join(' ');
    if (/\bif\b.*\bhad\b.*\bwould have been\b.*\b(now|today)\b/.test(c)) return 'Com efeito agora, use would + verbo: I <b>would be</b> … now.';
    return need(/\bif\b/.test(c) && /\b(had|hadn't|were)\b/.test(c) && /\b(would|wouldn't|'d|could)\b/.test(c), 'Ligue o passado ao presente: If I <b>had</b> …, I <b>would</b> … now.');
  }),
  should_have: R("o que devia (ou não devia) ter sido feito: <b>should have / could have + particípio</b>", (t, k) => {
    const c = k.join(' ');
    if (/\b(should|could|would) of\b/.test(c)) return 'O certo é <b>should have</b> (na fala soa "should\'ve").';
    if (/\b(should|shouldn't|could) have (call|tell|say|go|come|listen|study|check|eat|start|ask)\b/.test(c)) return 'Depois de should have, use o particípio: should have <b>called</b>.';
    return need(/\b(should|shouldn't|could|couldn't|would|might)( have|'ve)\b/.test(c), 'Use should have: I <b>should have</b> … / You <b>shouldn\'t have</b> …');
  }),
  arrependimento: R("arrependimento ou lição (I regret …ing / I'm glad I … / It turned out to be …)", (t, k) => {
    const c = k.join(' ');
    if (/\bregret (to not|don't|didn't|not to)\b/.test(c)) return 'A negativa de regret: regret <b>not</b> + -ing: I regret not going.';
    return need(/\b(regret|glad|turned out|blessing in disguise|hard way|worth it|lesson|silver lining|no regrets|moved on)\b/.test(c), "Fale de um arrependimento ou lição: I <b>regret</b> …ing / I'm <b>glad</b> I …");
  }),
  desculpas: R("uma frase de <b>pedido de desculpas</b> (I'm sorry I … / I should have … / I'd like to make it up to you)", (t, k) => {
    const c = k.join(' ');
    if (/\bshould of\b/.test(c)) return 'O certo é <b>should have</b>.';
    if (/\bapologize (to|of) (forget|miss|be)\b/.test(c)) return 'Pedir desculpas por: apologize <b>for</b> + -ing.';
    return need(/\b(sorry|apologize|apologise|should have|shouldn't have|make it up|forgive|won't happen again|thoughtless|let you down)\b/.test(c), "Peça desculpas: <b>I'm sorry I</b> … / I <b>should have</b> …");
  }),
  // ---------- Módulo 25 ----------
  deducao_presente: R("uma dedução sobre o presente com <b>must / can't / might / could</b>", (t, k) => {
    const c = k.join(' ');
    if (/\bmustn't be\b/.test(c)) return "Para dedução negativa, use <b>can't</b>: She can't be tired.";
    if (/\bmust to be\b|\bmust being\b/.test(c)) return 'Depois de must, verbo básico: must <b>be</b>.';
    return need(/\b(must|can't|cannot|might|could|may) be\b/.test(c), "Deduza: She <b>must be</b> … / That <b>can't be</b> … / He <b>might be</b> …");
  }),
  deducao_passado: R("uma dedução sobre o passado: <b>must have / can't have / might have + particípio</b>", (t, k) => {
    const c = k.join(' ');
    if (/\bmustn't have\b/.test(c)) return "Para dedução negativa, use <b>can't have</b>.";
    if (/\b(must|can't|might|could|may) have (forget|miss|take|see|go|leave|steal|fall|eat|do|write)\b/.test(c)) return 'Use o particípio: must have <b>forgotten</b>, can\'t have <b>seen</b>.';
    if (/\b(must|might|could) of\b/.test(c)) return 'O certo é <b>must have</b>.';
    return need(/\b(must|can't|couldn't|cannot|might|could|may)( have|'ve)\b/.test(c), "Deduza sobre o passado: He <b>must have</b> … / She <b>can't have</b> …");
  }),
  aparencia: R('como algo <b>parece</b>: look / seem / sound + adjetivo, look like + substantivo', (t, k) => {
    const c = k.join(' ');
    if (/\b(look|looks|looked|seem|seems|sound|sounds) like (tired|happy|sad|nice|great|terrible|good|bad|upset|worried|angry|delicious|strange|expensive)\b/.test(c) && !/\blike (a|an|the)\b/.test(c)) return 'Antes de adjetivo, sem like: You <b>look tired</b>.';
    return need(has(k, /^(look|looks|looked|seem|seems|seemed|sound|sounds|sounded|appear|appears|taste|tastes|smell|smells|feel|feels)$/), 'Use look, seem ou sound: You <b>look</b> tired. / That <b>sounds</b> great.');
  }),
  especular: R("uma especulação (I bet … / There's no way … / Judging by … / My guess is …)", (t, k) => need(/\b(i bet|there's no way|judging by|judging from|my guess|i suspect|maybe|perhaps|spoilers?|give it away|must have|might have|could have|can't have|must be|might be)\b/.test(k.join(' ')), "Especule: <b>I bet</b> … / <b>There's no way</b> … / <b>Judging by</b> …")),
  certeza: R('um grau de certeza (bound to / likely to / unlikely to / I doubt / no doubt / chances are)', (t, k) => {
    const c = k.join(' ');
    if (/\b(bound|likely|unlikely|sure) (win|rain|come|happen|be|make|find|rise)\b/.test(c)) return 'Essas expressões pedem to: bound <b>to</b> win, likely <b>to</b> rain.';
    return need(/\b(bound to|sure to|likely to|unlikely to|doubt|no doubt|chances are|a safe bet|a long shot|time will tell|definitely|certainly)\b/.test(c), "Mostre a certeza: She's <b>bound to</b> … / <b>I doubt</b> … / <b>Chances are</b> …");
  }),
  detetive: R("uma frase de <b>dedução</b> sobre o mistério (… must have … / It can't have been … because …)", (t, k) => {
    const c = k.join(' ');
    if (/\bmustn't have\b/.test(c)) return "Para dedução negativa, use <b>can't have</b>.";
    if (/\bmust have (take|steal|go|lie|hide)\b/.test(c)) return 'Use o particípio: must have <b>taken</b>, <b>stolen</b>.';
    return need(/\b(must have|can't have|couldn't have|might have|could have|must be|the culprit|evidence|because|solved|clues?|alibi)\b/.test(c), "Deduza: … <b>must have</b> … / It <b>can't have been</b> … because …");
  }),
  // ---------- Módulo 26 ----------
  passiva_impessoal: R('a passiva impessoal: <b>It is said that …</b> ou <b>He is said to be …</b>', (t, k) => {
    const c = k.join(' ');
    if (/\b(is|are|was|were) (said|believed|thought|expected|known|reported|considered) (be|have)\b/.test(c)) return 'Falta o to: He is said <b>to be</b> rich.';
    if (/\b(is|are|was|were) (said|believed|thought|expected|reported) to have (leave|move|go|steal|build)\b/.test(c)) return 'Depois de to have, o particípio: to have <b>left</b>.';
    return need(/\b(is|are|was|were|it's) (said|believed|thought|expected|known|reported|considered|understood)\b/.test(c), 'Use a passiva: <b>It is said that</b> … / He <b>is said to</b> …');
  }),
  passiva_modal: R('a passiva com modal: <b>must be signed</b> / <b>should have been sent</b>', (t, k) => {
    const c = k.join(' ');
    if (/\b(must|should|can|could|might|will|may|can't|cannot) been\b/.test(c)) return 'Com modal: <b>be</b> + particípio (must be signed), ou <b>have been</b> (should have been sent).';
    if (/\b(should|must|might|could) have be\b/.test(c)) return 'Depois de have, use <b>been</b>: should have been sent.';
    if (/\b(must|should|can|can't|could|might|will) be (sign|send|fix|buy|deliver|solve|replace|leave|steal|do)\b/.test(c)) return 'Depois de be, o particípio: be <b>signed</b>, <b>fixed</b>.';
    return need(/\b(must|should|can|can't|cannot|could|couldn't|might|may|will|won't|shouldn't|mustn't|must not)( not)? (be|have been)\b/.test(c), 'Use modal + <b>be</b> + particípio: It <b>must be</b> signed. / It <b>should have been</b> sent.');
  }),
  verbo_preposicao: R('um verbo de relato com preposição + -ing (accuse of, blame for, thank for, insist on…)', (t, k) => {
    const c = k.join(' ');
    if (/\baccus\w* \w+ (for|to|by)\b/.test(c)) return 'accuse pede <b>of</b>: accused him of lying.';
    if (/\bcongratulat\w* \w+ for\b/.test(c)) return 'congratulate pede <b>on</b>: congratulated her on her promotion.';
    if (/\binsist\w* (in|to)\b/.test(c)) return 'insist pede <b>on</b>: insisted on paying.';
    if (/\b(of|for|on|against) (lie|help|pay|swim|be|come|go|lose|change|explain|work)\b/.test(c)) return 'Depois da preposição, use -ing: of <b>lying</b>, for <b>helping</b>.';
    return need(/\b(accus\w*|blam\w*|thank\w*|congratulat\w*|warn\w*|insist\w*|apologi[sz]\w*|object\w*|forg[ai]v\w*|critici[sz]\w*)\b/.test(c), 'Use um verbo de relato: They <b>accused</b> him <b>of</b> … / She <b>thanked</b> me <b>for</b> …');
  }),
  subjuntivo: R('uma recomendação com <b>that + verbo básico</b> (I recommend that she apply)', (t, k) => {
    const c = k.join(' ');
    if (/\bsuggest\w* to (go|meet|apply|do|take|see|study)\b/.test(c)) return 'Sem to depois de suggest: I suggest <b>going</b> / I suggest that we <b>go</b>.';
    if (/\b(essential|important|vital|necessary|recommend\w*|suggest\w*|insist\w*|demand\w*|request\w*) that (he|she|it|everyone|everybody|the \w+) (is|are) (on|ready|here|informed)\b/.test(c)) return 'Depois de that, o verbo básico: that he <b>be</b> on time.';
    if (/\b(recommend\w*|suggest\w*|insist\w*|demand\w*|request\w*|essential|important|vital) that (he|she|it) (applies|rests|leaves|wears|goes|sees|takes|studies|has)\b/.test(c)) return 'Depois de that, o verbo básico, sem -s: that she <b>apply</b>.';
    return need(/\b(recommend|recommends|recommended|suggest|suggests|suggested|insist|insisted|demand|demanded|request|requested|essential|important|vital|necessary)\b/.test(c), 'Recomende: <b>I recommend that</b> you … / <b>It is essential that</b> …');
  }),
  registro: R('uma frase em <b>registro formal</b> (receive, request, purchase, We regret to inform you…)', (t, k) => {
    const c = k.join(' ');
    if (/\b(gonna|wanna|gotta)\b/.test(c)) return 'Isso é muito informal. Use <b>going to</b> / <b>would like to</b>.';
    return need(/\b(receive\w*|request\w*|assist\w*|purchas\w*|requir\w*|obtain\w*|inform\w*|commenc\w*|regret|hesitate|postpon\w*|investigat\w*|attached|look forward|discover\w*|contact|additional|kind regards|formal|informal|register)\b/.test(c), 'Use o vocabulário formal: <b>receive</b>, <b>request</b>, <b>purchase</b>, <b>We regret to inform you</b> …');
  }),
  relatorio: R('uma frase de <b>relatório</b> (The aim of this report … / It was found that … / It is recommended that …)', (t, k) => {
    const c = k.join(' ');
    if (/\brecommended that \w+( \w+)? (is|are) (extended|purchased|replaced|improved)\b/.test(c)) return 'Depois de recommended that, o verbo básico: … <b>be</b> extended.';
    return need(/\b(report|aim|it was found|survey|majority|most|a small number|overall|recommend\w*|according to|findings|in addition|solution|facilities|students said)\b/.test(c), 'Use a linguagem do relatório: <b>The aim of this report</b> … / <b>It was found that</b> … / <b>Overall</b> …');
  }),
  // ---------- Módulo 27 ----------
  relativa_explicativa: R('uma relativa explicativa entre vírgulas (…, who / which / where / whose …,)', (t, k) => {
    if (/,\s*that\b/i.test(t)) return 'Entre vírgulas, não use that: use <b>who</b> (pessoas) ou <b>which</b> (coisas).';
    return need(/,\s*(who|whom|which|where|whose|when)\b/i.test(t) || has(k, /^(who|whom|which|where|whose)$/), 'Acrescente uma informação extra: My sister<b>, who</b> lives in Rome, …');
  }),
  which_frase: R('<b>, which</b> comentando a frase inteira (…, which was a shame)', (t, k) => {
    if (/,\s*what\b/i.test(t)) return 'Para comentar a frase, use <b>, which</b>: He was late<b>, which</b> annoyed me.';
    if (/\b(all|most|some|none|both|many) of who\b/i.test(t)) return 'Depois de of, use <b>whom</b>: all of whom.';
    return need(/,\s*which\b/i.test(t) || /\bof (whom|which)\b/i.test(t) || has(k, /^which$/), 'Comente a frase: …<b>, which</b> was a relief.');
  }),
  participio: R('uma oração com particípio (…ing, … / Having …, … / Built in …, …)', (t, k) => {
    const c = k.join(' ');
    if (/^having (finish|eat|see|write|do|go|leave|lose|win)\b/.test(c)) return 'Depois de having, o particípio: Having <b>finished</b>.';
    return need(/^(having|not)\b|^\w+ing\b|^(built|born|written|seen|made|founded|left|known|located)\b/.test(c) || /\b(having|walking|feeling|reading|working|knowing)\b/.test(c), 'Comece com particípio: <b>Walking</b> home, … / <b>Having finished</b>, …');
  }),
  relativa_reduzida: R('uma relativa reduzida (the woman sitting …, a book written …, the first to …)', (t, k) => {
    const c = k.join(' ');
    if (/\bthe (first|last|only( one)?) (who )?(arrive|leave|finish|speak|win)\b/.test(c)) return 'Use to: the first <b>to</b> arrive.';
    return need(/\b\w+ing\b/.test(c) || /\b(written|made|called|parked|left|built|taken|known|named|arrested)\b/.test(c) || /\bthe (first|last|only( one)?) to\b/.test(c), 'Encurte a relativa: the woman <b>sitting</b> there / a book <b>written</b> in 1900.');
  }),
  conectores_adicao: R('um conector de adição, causa, finalidade ou resultado', (t, k) => {
    const c = k.join(' ');
    if (/\bnot only\b/.test(c) && !/\bbut\b/.test(c)) return 'Complete com <b>but also</b>: not only … but also …';
    if (/\bdue to (it|the \w+ (is|was|were|are))\b/.test(c)) return 'Depois de due to, use substantivo: due to <b>the rain</b>. Para frase, use since / because.';
    if (/\bso as to not\b|\bin order to not\b/.test(c)) return 'A negativa é <b>so as not to</b> / <b>in order not to</b>.';
    return need(/\b(not only|but also|as well as|in addition|moreover|furthermore|due to|because of|owing to|since|as a result|therefore|consequently|in order to|so as to|so as not to|so that)\b/.test(c), 'Use um conector: <b>not only</b> … <b>but also</b> / <b>due to</b> / <b>so as to</b> …');
  }),
  biografia: R('uma frase de biografia (Born in … / …, where … / Having … / the first … to … / Today, … is remembered as …)', (t, k) => {
    const c = k.join(' ');
    if (/^borned\b/.test(c)) return 'O particípio é <b>born</b>.';
    if (/,\s*that\b/i.test(t)) return 'Entre vírgulas, não use that: use <b>who</b> ou <b>which</b>.';
    return need(/\b(born|grew up|moved|studied|married|won|died|became|discovered|remembered|career|having|working|first|which|where|who|whom|later|today|prize|research)\b/.test(c), 'Conte a vida: <b>Born in</b> … / She moved to …<b>, where</b> … / <b>Today</b>, she is remembered as …');
  }),
  // ---------- Módulo 28 ----------
  phrasal_relacoes: R('um phrasal verb de relacionamento (get along with, fall out, make up, split up, take after…)', (t, k) => {
    const c = k.join(' ');
    if (/\bfell out (to|of) \w+/.test(c) && !/\bfell out of (love|bed)\b/.test(c)) return 'Brigar com alguém: fall out <b>with</b>.';
    if (/\btakes? after to\b|\blook(s|ed)? up at\b/.test(c)) return 'Sem preposição extra: take after <b>her father</b>; admirar: look up <b>to</b>.';
    return need(/\b(get|gets|got|getting) (along|on)\b|\b(fall|falls|fell|fallen) out\b|\b(make|makes|made) up\b|\b(split|splits|break|breaks|broke) up\b|\b(ask|asks|asked) \w+ out\b|\b(bring|brought|grow|grew|grown) up\b|\b(take|takes|took) after\b|\blook(s|ed)? (up to|down on)\b|\blet(s|ting)? \w+ down\b|\b(go|goes|went) out with\b|\bget back together\b/.test(c), 'Use um phrasal verb de relacionamento: We <b>fell out</b> / We <b>made up</b> / She <b>takes after</b> …');
  }),
  phrasal_trabalho: R('um phrasal verb do trabalho (set up, take on, carry out, deal with, sort out, fill in, hand in…)', (t, k) => {
    const c = k.join(' ');
    if (/\bdeal(s|t)? (of|about)\b/.test(c)) return 'Lidar com: deal <b>with</b>.';
    return need(/\b(set|sets|setting) up\b|\b(take|takes|took|taking|taken) on\b|\b(carry|carries|carried) out\b|\b(deal|deals|dealt) with\b|\b(sort|sorts|sorted|sorting) (\w+ )?out\b|\b(fill|fills|filled) (\w+ )?(in|out)\b|\b(hand|hands|handed) (\w+ )?in\b|\bcatch(ing)? up\b|\bkeep(ing)? up with\b|\b(fall|fell|fallen|falling) behind\b|\blook(ing)? into\b|\bprint(ed)? (\w+ )?out\b/.test(c), 'Use um phrasal verb do trabalho: I need to <b>sort out</b> … / She <b>set up</b> …');
  }),
  phrasal_gramatica: R('um phrasal verb com o objeto no lugar certo (turn it off, look after them, put up with it)', (t, k) => {
    const c = k.join(' ');
    if (/\b(turn|switch|pick|throw|put|take|give|fill|hand|sort|call|write|look) (off|on|up|away|down|back|in|out) (it|them|him|her|me|us)\b/.test(c) && !/\b(look up to|put up with|look out for)\b/.test(c) && !/\blook (after|into|for)\b/.test(c)) return 'Com pronome, ele fica no meio: turn <b>it</b> off, pick <b>them</b> up.';
    if (/\b(put|putting) up (it|this|that)\b/.test(c)) return 'aguentar é <b>put up with</b>: I can\'t put up with it.';
    return need(/\b(turn|switch|pick|throw|look|put|get|cut|come|run|give|take|fill|hand|sort|call)(s|ed|ing)?\b.*\b(off|on|up|away|after|with|down|over|into|out|back)\b/.test(c) || /\b(picked|threw|thrown|took|got|came|ran|gave|put|cut)\b.*\b(up|away|with|on|out|off)\b/.test(c), 'Use um phrasal verb: Turn <b>it off</b>. / I can\'t <b>put up with</b> it.');
  }),
  collocations_verbo: R('uma collocation com <b>make / do / take / have / pay / keep</b>', (t, k) => {
    const c = k.join(' ');
    if (/\b(do|does|did|doing|take|takes|took|taking) (a|the|this|that|my|your|our) (decision|mistake)s?\b/.test(c)) return 'Decisão e erro vão com <b>make</b>: make a decision, make a mistake.';
    if (/\b(make|makes|making|made) (some |my |your |the )?(research|homework|shopping)\b/.test(c)) return 'Pesquisa e dever de casa vão com <b>do</b>: do research.';
    if (/\b(give|gives|gave|make|makes|made|do|did) attention\b/.test(c)) return 'Prestar atenção: <b>pay</b> attention.';
    return need(/\b(make|makes|made|making|do|does|did|doing|done|take|takes|took|taking|taken|have|has|had|having|pay|pays|paid|keep|keeps|kept|break|broke|save|waste|tell|told)\b/.test(c) && /\b(decision|mistakes?|effort|progress|complaint|money|plan|research|homework|best|favou?r|shopping|break|risks?|part|advantage|look|go|chat|attention|promises?|time|truth|lie)\b/.test(c), 'Use uma collocation: <b>make a decision</b> / <b>take a break</b> / <b>pay attention</b>.');
  }),
  collocations_adj: R('uma collocation de adjetivo ou advérbio (heavy rain, strong coffee, highly recommended…)', (t, k) => {
    const c = k.join(' ');
    if (/\bstrong (rain|traffic)\b/.test(c)) return 'Chuva e trânsito fortes: <b>heavy</b> rain, <b>heavy</b> traffic.';
    if (/\bheavy coffee\b/.test(c)) return 'Café forte: <b>strong</b> coffee.';
    return need(/\b(heavy|strong|high|close|big|narrow|slight)\b/.test(c) || /\b(highly|deeply|fully|bitterly|seriously|completely|totally|easily|well) \w+/.test(c) || /\b(coffee|traffic|rain)\b.*\b(strong|heavy)\b/.test(c), 'Use uma collocation: <b>heavy rain</b> / <b>strong coffee</b> / <b>highly recommended</b>.');
  }),
  email_informal: R("uma frase de e-mail informal (Sorry I haven't been in touch / Guess what? / Can't wait to …)", (t, k) => {
    const c = k.join(' ');
    if (/\b(yours faithfully|yours sincerely|dear sir)\b/.test(c)) return 'Isso é formal demais para um amigo. Use <b>Take care</b> / <b>Love</b>.';
    return need(/\b(in touch|get back to|guess what|taken up|took up|catch up|catching up|can't wait|take care|love|anyway|by the way|let me know|come and stay|ran into|moved house|how are things|hear from you|no worries)\b/.test(c), "Escreva como para um amigo: <b>Sorry I haven't been in touch</b> / <b>Guess what?</b> / <b>Can't wait to</b> …");
  }),
  // ---------- Módulo 29 ----------
  conduzir_reuniao: R("uma frase para conduzir uma reunião (Let's get started / Let's move on to … / To sum up …)", (t, k) => {
    const c = k.join(' ');
    if (/\bmove (to|for) the next\b/.test(c)) return "Passar para: move <b>on</b> to the next point.";
    return need(/\b(get started|get down to business|agenda|item|move on|brings us to|over to you|stick to|off topic|running out of time|sum up|action points|any other business|wrap up|purpose of this meeting|come back to)\b/.test(c), "Conduza a reunião: <b>Let's get started</b> / <b>Let's move on to</b> … / <b>To sum up</b> …");
  }),
  email_trabalho: R("uma frase de e-mail de trabalho (Just following up on … / Could you let me know by … / I'll keep you posted)", (t, k) => {
    const c = k.join(' ');
    if (/\buntil (monday|tuesday|wednesday|thursday|friday|tomorrow)\b/.test(c) && /\b(send|let me know|finish|reply)\b/.test(c)) return 'Para prazo final, use <b>by</b>: let me know <b>by</b> Friday.';
    return need(/\b(follow(ing)? up|let me know|keep you posted|heads|attached|as discussed|thanks in advance|by (monday|tuesday|wednesday|thursday|friday|tomorrow|the end)|quick question|asap|fyi|cc|reminder|any questions)\b/.test(c), "Escreva como num e-mail de trabalho: <b>Just following up on</b> … / <b>Could you let me know by</b> …");
  }),
  feedback: R("uma frase de feedback com tato (I really liked … / You might want to … / It might be worth …)", (t, k) => {
    const c = k.join(' ');
    if (/\bmight want (add|change|check|make)\b/.test(c)) return 'Falta o to: You might want <b>to</b> add …';
    if (/\bworth to\b/.test(c)) return 'Depois de worth, use -ing: It might be worth <b>checking</b>.';
    return need(/\b(might want to|might be worth|could work on|work on|great job|really liked|a bit|slightly|overall|strength|keep up the good work|helpful|great start|have you thought about|maybe you could)\b/.test(c), 'Dê feedback com tato: <b>You might want to</b> … / <b>It might be worth</b> …');
  }),
  discordar_diplomacia: R("uma discordância diplomática (I see your point, but … / I'm not convinced … / Wouldn't it be better …?)", (t, k) => {
    const c = k.join(' ');
    if (/\bi('m| am) not agree\b/.test(c)) return "Diga <b>I don't agree</b>, ou melhor, com tato: <b>I'm not sure that</b> …";
    if (/^(you're|you are) wrong\b/.test(c)) return 'Isso soa agressivo. Tente: <b>I see your point, but</b> …';
    return need(/\b(see your point|good point|fair point|take your point|not sure|not convinced|only concern|wouldn't it be better|have we considered|what if we|meet halfway|compromise|to be honest|doubts|go with)\b/.test(c), "Discorde com tato: <b>I see your point, but</b> … / <b>Wouldn't it be better to</b> …?");
  }),
  apresentacao: R("uma frase de apresentação ou de gráfico (Today I'm going to talk about … / sales rose sharply …)", (t, k) => {
    const c = k.join(' ');
    if (/\b(rised|falled|raised sharply)\b/.test(c)) return 'Passado irregular: rise → <b>rose</b>, fall → <b>fell</b>.';
    if (/\b(rose|fell|increased|decreased|dropped) (sharp|slight|steady|dramatic)\b/.test(c)) return 'Depois do verbo, use o advérbio: rose <b>sharply</b>, fell <b>slightly</b>.';
    return need(/\b(talk about|turn to|moving on|to conclude|any questions|as you can see|this slide|graph|rose|rise|rises|increased?|fell|fall|falls|dropped|drop|decreased?|remained? stable|peak|sharply|steadily|slightly|dramatically|sharp|slight|steady)\b/.test(c), "Apresente: <b>Today I'm going to talk about</b> … / Sales <b>rose sharply</b> …");
  }),
  resumo_reuniao: R("uma frase de resumo de reunião (We discussed … / It was agreed that … / X will … by …)", (t, k) => {
    const c = k.join(' ');
    if (/\bdiscussed about\b/.test(c)) return 'discuss não leva about: We discussed <b>the budget</b>.';
    if (/\bit was agree\b/.test(c)) return 'Na passiva: It was <b>agreed</b> that …';
    return need(/\b(discussed|agreed|decided|approved|action points|will \w+ .*\bby\b|outstanding|next meeting|missed anything|thanks,? everyone|attendees|summary|for coming)\b/.test(c), 'Resuma: <b>We discussed</b> … / <b>It was agreed that</b> … / Paula <b>will</b> send … <b>by</b> Friday.');
  }),
  // ---------- Módulo 30 ----------
  contraste: R('um contraste com <b>despite / in spite of / even though / whereas / nevertheless</b>', (t, k) => {
    const c = k.join(' ');
    if (/\bdespite of\b/.test(c)) return 'Sem of: <b>despite</b> the rain (ou <b>in spite of</b>).';
    if (/\b(despite|in spite of) (i|you|he|she|it|we|they|there) (was|were|is|am|are|had|have|did)\b/.test(c)) return 'Depois de despite, substantivo ou -ing: Despite <b>the rain</b> / Despite <b>being</b> tired. Ou: despite <b>the fact that</b> …';
    if (/\b(despite|in spite of) (be|have|feel|work)\b/.test(c)) return 'Depois de despite, use -ing: despite <b>being</b> tired.';
    return need(/\b(despite|in spite of|even though|although|though|whereas|while|nevertheless|however|on the other hand|in contrast)\b/.test(c), 'Contraste: <b>Despite</b> the rain, … / <b>Even though</b> … / … <b>whereas</b> …');
  }),
  midia: R('uma frase sobre mídia (reliable, biased, misleading, clickbait, fact-check, go viral…)', (t, k) => need(/\b(source|sources|reliable|trustworthy|biased|misleading|clickbait|fact-check\w*|fact|checked|viral|headline|misinformation|fake|share|shared|spread|spreads|evidence|edited|out of context|article|news)\b/.test(k.join(' ')), 'Use o vocabulário da mídia: a <b>reliable source</b> / <b>misleading</b> / it <b>went viral</b> …')),
  cautela: R('uma afirmação cautelosa (It could be argued … / tend to / some evidence / arguably / to some extent)', (t, k) => {
    const c = k.join(' ');
    if (/\bit could be argue\b/.test(c)) return 'Na passiva: It could be <b>argued</b> that …';
    if (/\btends? to (spending|being|having)\b/.test(c)) return 'Depois de tend to, o verbo básico: tend to <b>spend</b>.';
    return need(/\b(could be argued|can be argued|tends? to|appears? to|seems? to|some evidence|studies suggest|suggests?|arguably|to some extent|in (many|some) cases|generally|may|might|can|it seems|likely)\b/.test(c), 'Use linguagem cautelosa: <b>It could be argued that</b> … / … <b>tend to</b> …');
  }),
  rebater: R('uma frase que apresente ou rebata o outro lado (Some people claim … / While it is true … / However …)', (t, k) => {
    const c = k.join(' ');
    if (/\bpeople claims\b|\bcritics argues\b/.test(c)) return 'Com sujeito no plural, sem -s: people <b>claim</b>, critics <b>argue</b>.';
    return need(/\b(claim|claims|critics|opponents|supporters|argue|argues|while it is true|admittedly|fair point|however|this ignores|does not mean|on the contrary|on balance|outweigh|outweighs|it is often said|say)\b/.test(c), 'Apresente ou rebata: <b>Some people claim that</b> … <b>However</b>, …');
  }),
  manchete: R('uma manchete (Storm hits coast / PM to visit China / Man arrested) ou a frase completa dela', (t, k) => {
    const c = k.join(' ');
    if (/\b(will to|is to going)\b/.test(c)) return 'Na manchete, o futuro é só <b>to</b> + verbo: PM <b>to visit</b> China.';
    return need(/\b(hits|to visit|to quit|to resume|arrested|quits|slams|vows|soar|soars|find|finds|killed|closed|talks|row|probe|cuts|boost|headline|headlines|happened|already)\b/.test(c) || /^[\p{Lu}][\p{L}]+ (to \w+|\w+s|\w+ed)\b/u.test(t), 'Escreva como manchete: <b>Storm hits coast</b> / <b>PM to visit China</b> / <b>Man arrested</b>.');
  }),
  redacao: R('uma frase de redação argumentativa (Nowadays … / Firstly … / In addition … / In conclusion, I believe …)', (t, k) => {
    const c = k.join(' ');
    if (/^actually,? (many|most|a lot of|people|millions)\b/.test(c)) return '<b>actually</b> é "na verdade". Para "atualmente", use <b>nowadays</b>.';
    return need(/\b(nowadays|these days|question of whether|widely debated|firstly|first of all|to begin with|in addition|furthermore|moreover|for example|for instance|some people claim|while it is true|however|in conclusion|on balance|to conclude|i believe|advantages?|disadvantages?|outweigh)\b/.test(c), 'Use a linguagem da redação: <b>Nowadays</b> … / <b>Firstly</b> … / <b>In conclusion, I believe</b> …');
  }),
};
const ruleOfLesson = (les) => RULES[les.rule] || null;

// Conferência completa. Devolve { pt, rule, struct: true|false|null, msg, conc: {ok,msg}|null, word }.
function checkFrase(text, les, sug) {
  const toks = fT(text), pt = toks.filter((w) => /^(eu|você|voce|não|nao|é|um|uma|meu|minha|que|com|para|muito|gosto|tenho|sou|estou|moro|do|da|no|na|de|anos)$/.test(w)).length >= Math.max(2, toks.length * 0.4);
  const rule = ruleOfLesson(les), r = rule ? rule.c(text, toks) : null;
  const conc = concord(text, NEW_LESSONS['en-day'] ? les.i >= NEW_LESSONS['en-day'].i : false);
  return { pt, rule, struct: rule ? r === true : null, msg: r === true ? '' : r, conc, word: sug ? wordIn(text, sug.de) : null };
}
// Exemplo da própria lição que segue a regra (para mostrar como modelo, sem obrigar a copiar).
function modelOf(les) {
  const rule = ruleOfLesson(les), all = [...les.ge, ...les.ex, ...les.dlg];
  return (rule && all.find((s) => rule.c(s.de, fT(s.de)) === true)) || les.ge[0];
}

Object.assign(window, { checkFrase, modelOf, ruleOfLesson, fraseConcord: concord });
})();
