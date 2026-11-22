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
  if (/\b(have|has)\s+(\d+|[a-z-]+)\s+years?\b/i.test(norm(text))) return { ok: false, msg: 'Em inglês a idade se diz com <b>to be</b>: <b>I\'m twenty</b> (years old), e não "I have twenty years".' };
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
