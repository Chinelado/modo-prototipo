/* Frase livre ("Escreva uma frase verdadeira sobre você"): conferência pela ESTRUTURA da lição, com qualquer verbo.
   Cada lição tem uma regra (o que precisa aparecer na frase) e um texto que diz ao aluno exatamente o que fazer.
   Nas lições sobre verbos específicos (sein e heißen, haben, modais…), a regra diz quais verbos usar.
   Nas lições de estrutura (Perfekt, weil, reflexivos…), qualquer verbo serve.
   No presente, o app também confere a concordância do verbo com o pronome (ich wohne, du wohnst, er wohnt).
   Lições sem regra (vocabulário e textos do B2 em diante) aceitam qualquer frase em alemão. */
(() => {

const fT = (t) => String(t).toLowerCase().replace(/[„“"»«]/g, '').split(/[^\p{L}ß]+/u).filter(Boolean);
const clauses = (t) => String(t).split(/[,;.!?:]+/).map(fT).filter((c) => c.length);
const last = (c) => c[c.length - 1] || '';
const has = (toks, re) => toks.some((w) => re.test(w));
const SEIN = /^(bin|bist|ist|sind|seid)$/, HABEN = /^(habe|hab|hast|hat|haben|habt)$/, WERDEN = /^(werde|wirst|wird|werden|werdet)$/;
const MODAL = /^(kann|kannst|können|könnt|muss|musst|müssen|müsst|will|willst|wollen|wollt|darf|darfst|dürfen|dürft|soll|sollst|sollen|sollt|mag|magst|mögen|möchte|möchtest|möchten|möchtet)$/;
const MODAL_PRAET = /^(konnte|konntest|konnten|musste|musstest|mussten|wollte|wolltest|wollten|durfte|durftest|durften|sollte|solltest|sollten|mochte|mochtest|mochten)(t)?$/;
const KONJ2 = /^(würde|würdest|würden|würdet|hätte|hättest|hätten|wäre|wärst|wären|könnte|könntest|könnten|müsste|müsstest|müssten|sollte|solltest|sollten|dürfte|dürften|möchte|möchtest|möchten)$/;
const isInf = (w) => /^(sein|tun)$/.test(w) || (/(en|ern|eln)$/.test(w) && w.length > 3);
const isPart = (w) => /^ge\p{L}{2,}(t|en)$/u.test(w) || /\p{L}{3,}(iert|t|en)$/u.test(w);
const PREFIX = /^(auf|an|ein|aus|mit|zu|zurück|fern|ab|vor|nach|los|weg|her|hin|heim|fest|weiter|statt|teil|kennen|spazieren)$/;
// a oração que começa na conjunção termina com o verbo conjugado
// …e nenhum verbo conjugado fica no meio (…, weil ich will arbeiten ✗ · …, weil ich arbeiten will ✓).
const FIN = (w) => MODAL.test(w) || HABEN.test(w) || SEIN.test(w) || WERDEN.test(w) || MODAL_PRAET.test(w) || KONJ2.test(w) || /^(war|warst|waren|hatte|hatten)$/.test(w);
// A última palavra tem de ser um verbo: minúscula (substantivo alemão é maiúsculo) e não um advérbio.
const NAO_FIM = /^(gern|nicht|schon|noch|heute|morgen|gestern|immer|oft|sehr|auch|jetzt|hier|dort|da|so|mehr|viel|gut|zusammen)$/;
const clausesRaw = (t) => String(t).split(/[,;.!?:]+/).map((c) => c.replace(/[„“"»«]/g, '').split(/[^\p{L}ß]+/u).filter(Boolean)).filter((c) => c.length);
const verbLast = (text, conj) => clausesRaw(text).some((raw) => {
  const c = raw.map((w) => w.toLowerCase()), i = c.indexOf(conj); if (i < 0) return false;
  const rest = c.slice(i + 1), fim = raw[raw.length - 1]; if (rest.length < 2) return false;
  if (rest.slice(0, -1).some(FIN)) return false;               // auxiliar ou modal antes do fim (…, weil ich will arbeiten)
  if (/^\p{Lu}/u.test(fim) || NAO_FIM.test(last(rest))) return false; // termina em substantivo ou advérbio (…, weil ich wohne in Berlin)
  return /(e|en|n|t|st|te|ten|bin|ist|sind|war|hat|kann|muss|will|darf|soll|mag|weiß)$/.test(last(rest));
});

/* Concordância no presente: pronome + verbo conjugado (antes ou depois dele). */
const PRON = { ich: 'ich', du: 'du', er: 'er', es: 'er', man: 'er', sie: 'sie', wir: 'wir', ihr: 'ihr' };
const NAO_VERBO = /^(und|aber|oder|auch|gern|nicht|kein|keine|sehr|heute|morgen|jetzt|hier|dort|da|schon|noch|immer|oft|nie|gerade|wirklich|so|ganz|mit|in|im|am|um|aus|nach|von|zu|für|bei|der|die|das|den|dem|ein|eine|einen|mein|meine|dein|deine|sein|seine|ihr|ihre|unser|euer)$/;
const IRR = { // presente irregular frequente
  ich: /^(bin|kann|muss|will|darf|soll|mag|weiß|möchte|habe|hab|werde|war|hatte|konnte|musste|wollte|durfte|sollte|mochte|würde|hätte|wäre|könnte)$/,
  du: /^(bist|hast|kannst|musst|willst|darfst|sollst|magst|weißt|wirst|liest|isst|heißt)$/,
  er: /^(ist|hat|kann|muss|will|darf|soll|mag|weiß|möchte|wird|war|hatte|konnte|musste|wollte|durfte|sollte|würde|hätte|wäre|könnte|gibt)$/,
  wir: /^(sind|haben|werden)$/, ihr: /^(seid|habt|werdet)$/,
};
const END = { ich: /e$/, du: /(st|ßt|zt|tzt|xt)$/, er: /t$/, wir: /(en|n)$/, ihr: /t$/ };
const DICA = { ich: 'termina em -e (ich wohne)', du: 'termina em -st (du wohnst)', er: 'termina em -t (er wohnt)', wir: 'termina em -en (wir wohnen)', ihr: 'termina em -t (ihr wohnt)' };
function concord(text) {
  for (const c of clauses(text)) {
    for (let p = 0; p < c.length; p++) {
      const k = PRON[c[p]]; if (!k) continue;
      const v = p === 0 ? c[1] : c[p - 1];
      if (!v || NAO_VERBO.test(v) || v.length < 2) continue;
      if (k === 'sie') { if (IRR.er.test(v) || IRR.wir.test(v) || END.er.test(v) || END.wir.test(v)) continue; return { ok: false, msg: `Com <b>sie</b>, o verbo termina em -t (sie wohnt) ou, no plural, em -en (sie wohnen). Você escreveu <b>${esc(v)}</b>.` }; }
      if (IRR[k] && IRR[k].test(v)) continue;
      if (END[k].test(v)) continue;
      return { ok: false, msg: `Com <b>${esc(c[p])}</b>, o verbo ${DICA[k]}. Você escreveu <b>${esc(v)}</b>.` };
    }
  }
  return { ok: true };
}

/* Regras por lição: d = o que o aluno vê; c = conferência (texto → true ou mensagem de erro); pres = conferir concordância. */
const R = (d, c, pres = false) => ({ d, c, pres });
const need = (ok, msg) => (ok ? true : msg);
const RULES = {
  sein_heissen: R('o verbo <b>sein</b> (ich bin, du bist…) ou <b>heißen</b> (ich heiße…), para dizer quem você é', (t, k) => need(has(k, /^(bin|bist|ist|sind|seid|heiße|heißt|heißen)$/), 'Use <b>sein</b> (bin, bist, ist…) ou <b>heißen</b> (heiße, heißt…).'), true),
  kommen_wohnen: R('<b>kommen aus</b> (de onde você vem) ou <b>wohnen in</b> (onde você mora); outro verbo no presente também vale', (t, k) => need(has(k, /^(aus|in|im)$/), 'Diga de onde vem (<b>aus</b> + país) ou onde mora (<b>in</b> + cidade).'), true),
  presente: R('um verbo no <b>presente</b> que combine com o sujeito (ich wohne, du wohnst, er wohnt). <b>Qualquer verbo serve.</b>', () => true, true),
  soletrar: R('uma frase que <b>soletre</b> algo, letra por letra com hífens (Mein Name ist Ana: A-N-A), ou que diga como se escreve (Das schreibt man mit V)', (t, k) => need(/\p{L}(\s*-\s*\p{L}){2,}/u.test(t) || /\bmit (\p{Lu}|ß|Eszett|Umlaut|Punkt|Bindestrich)(?!\p{L})/u.test(t) || has(k, /^(schreibt|schreibe|schreiben|buchstabieren|buchstabiere|buchstabiert)$/), 'Soletre com hífens (<b>A-N-A</b>) ou use <b>schreiben</b>: Das schreibt man mit V.'), true),
  plural: R('um <b>plural</b> com número ou quantidade (Ich habe zwei Katzen / Ich habe viele Bücher)', (t, k) => need(has(k, /^(zwei|drei|vier|fünf|sechs|sieben|acht|neun|zehn|elf|zwölf|zwanzig|viele|alle|ein|paar|wie)$/) || /\b\d+\b/.test(t), 'Use um número ou <b>viele</b> + o plural: Ich habe zwei Katzen.'), true),
  beruf: R('<b>sein</b> + profissão, sem artigo (Ich bin Lehrerin), ou <b>arbeiten als</b> (Ich arbeite als Koch)', (t, k) => need(has(k, /^(bin|bist|ist|sind|seid|arbeite|arbeitest|arbeitet|arbeiten|studiere|studierst|studiert|studieren)$/), 'Diga a profissão com <b>sein</b> (Ich bin Koch) ou <b>arbeiten als</b>.'), true),
  und_aber: R('duas ideias ligadas por <b>und</b>, <b>aber</b> ou <b>oder</b> (Ich koche gern, aber ich tanze nicht gern)', (t, k) => need(has(k, /^(und|aber|oder)$/), 'Ligue duas frases com <b>und</b>, <b>aber</b> ou <b>oder</b>.'), true),
  tempo: R('uma indicação de tempo: <b>am</b> + dia, <b>um</b> + hora ou <b>im</b> + mês (Am Montag um zehn habe ich einen Termin)', (t, k) => need(has(k, /^(am|um|im|von|bis|ab)$/), 'Diga quando: <b>am</b> + dia, <b>um</b> + hora ou <b>im</b> + mês.'), true),
  convite: R('um convite (Hast du am … Zeit?) ou uma resposta: aceitar com <b>gern</b> ou recusar com <b>leider</b>', (t, k) => need(has(k, /^(gern|gerne|leider|zeit|kommst|möchtest|einladung)$/), 'Convide (Hast du am … Zeit?), aceite com <b>gern</b> ou recuse com <b>leider</b>.'), true),
  quantidade: R('uma <b>quantidade</b> ou um <b>preço</b> (Ich möchte ein Kilo Tomaten / Das kostet zwei Euro)', (t, k) => need(has(k, /^(kilo|gramm|liter|packung|flasche|dose|stück|glas|euro|cent|kostet|kosten|macht|einen|eine)$/) || /[0-9]/.test(t), 'Use uma quantidade ou um preço: ein Kilo Äpfel, zwei Euro fünfzig.'), true),
  gosto: R('um <b>gosto</b>: mögen (Ich mag …), gern, lieber, am liebsten, ou a frequência (oft, nie…)', (t, k) => need(has(k, /^(mag|magst|mögen|mögt|gern|gerne|lieber|liebsten|nie|immer|oft|manchmal|selten|meistens)$/), 'Diga um gosto: Ich mag …, Ich esse gern …, lieber ou am liebsten.'), true),
  wohnung: R('uma frase sobre um <b>apartamento</b>: cômodos, aluguel ou visita (Die Wohnung hat drei Zimmer / Wie hoch ist die Miete?)', (t, k) => need(has(k, /^(zimmer|miete|wohnung|quadratmeter|nebenkosten|kaltmiete|warmmiete|balkon|küche|bad|frei|besichtigen|kaution)$/), 'Fale do apartamento: Die Wohnung hat … Zimmer. / Wie hoch ist die Miete?'), true),
  destino: R('<b>aonde</b> você vai: zum / zur + lugar, ou nach + cidade (Ich gehe zur Post)', (t, k) => need(has(k, /^(zum|zur|zu|nach)$/), 'Diga aonde vai: <b>zum</b> / <b>zur</b> + lugar, ou <b>nach</b> + cidade.'), true),
  aviso: R('um <b>aviso</b> (geöffnet, geschlossen, Bitte nicht …) ou um recado curto (Ihr Paket ist bei mir)', (t, k) => need(has(k, /^(geöffnet|geschlossen|bitte|verboten|achtung|paket|zettel|bei|besetzt)$/), 'Escreva um aviso: geöffnet / geschlossen, Bitte nicht … ou um recado curto.'), true),
  man_modal: R('uma regra com <b>man</b> + modal (Man muss den Müll trennen / Hier darf man nicht rauchen)', (t, k) => need(k.includes('man') && has(k, MODAL), k.includes('man') ? 'Use um modal com man: man <b>muss</b>, man <b>darf</b>, man <b>kann</b>.' : 'Use <b>man</b> + modal: Man muss … / Man darf nicht …'), true),
  troca: R('uma <b>troca</b>: passen ou gefallen com o dativo, zu + adjetivo ou o pedido (Das passt mir nicht / Ich möchte das umtauschen)', (t, k) => need(has(k, /^(passt|passen|gefällt|gefallen|umtauschen|kaputt|zurück|zu)$/), 'Explique a troca: Das passt mir nicht. / Das ist zu klein. / Ich möchte das umtauschen.'), true),
  reclamacao: R('uma <b>reclamação</b> com leider e o que você quer (Leider ist der Artikel beschädigt)', (t, k) => need(has(k, /^(leider|bestellung|bestellnummer|lieferung|artikel|beschädigt|kaputt|erstatten|zurück|geehrte|geehrter)$/), 'Reclame: Leider ist … / Meine Bestellung … / Bitte erstatten Sie …'), true),
  candidatura: R('uma frase de <b>candidatura</b> (Ich bewerbe mich um die Stelle / Ich habe Erfahrung als …)', (t, k) => need(has(k, /^(bewerbe|bewerben|stelle|erfahrung|interesse|anzeige|geehrte|geehrter|freuen|freue|einladung|arbeite)$/), 'Fale da vaga: Ich bewerbe mich um … / Ich habe Erfahrung als …'), true),
  frage: R('uma <b>pergunta</b>: com palavra W (Wo wohnst du?) ou de sim/não (Wohnst du hier?). Qualquer verbo serve.', (t) => need(/\?\s*$/.test(t.trim()), 'Termine a pergunta com <b>?</b>.'), true),
  haben: R('o verbo <b>haben</b> (ich habe, du hast, er hat…) com um objeto', (t, k) => need(has(k, HABEN), 'Use <b>haben</b>: habe, hast, hat, haben…'), true),
  negacao: R('uma negação com <b>nicht</b> ou <b>kein</b>. Qualquer verbo serve.', (t, k) => need(has(k, /^(nicht|kein|keine|keinen|keinem|keiner|keines)$/), 'Use <b>nicht</b> ou <b>kein/keine</b> para negar.'), true),
  separavel: R('um <b>verbo separável</b>, com o prefixo no fim (Ich stehe um 7 Uhr auf). Qualquer verbo separável serve.', (t) => need(clauses(t).some((c) => PREFIX.test(last(c))), 'O prefixo do verbo separável vai para o fim: Ich stehe früh <b>auf</b>.'), true),
  modal: R('um <b>verbo modal</b> (kann, muss, will, darf, soll, möchte…) e outro verbo no <b>infinitivo no fim</b>. Qualquer verbo serve.', (t, k) => need(has(k, MODAL) && clauses(t).some((c) => c.some((w) => MODAL.test(w)) && isInf(last(c))), has(k, MODAL) ? 'O segundo verbo vai no <b>infinitivo, no fim</b>: Ich kann gut <b>kochen</b>.' : 'Use um modal: kann, muss, will, darf, soll, möchte…'), true),
  esgibt: R('<b>es gibt</b> + o que existe (Es gibt einen Park in meiner Straße)', (t) => need(/\b(es gibt|gibt es)\b/i.test(t), 'Use <b>es gibt</b> (há / tem).'), false),
  lugar: R('uma <b>preposição de lugar</b> (in, auf, unter, neben, hinter, vor, zwischen, an, über) para dizer onde algo está', (t, k) => need(has(k, /^(in|im|auf|unter|neben|hinter|vor|zwischen|an|am|über)$/), 'Use uma preposição de lugar: in, auf, unter, neben…'), true),
  dativ_prep: R('uma preposição com <b>dativo</b> (mit, bei, zu, von, seit, aus, nach)', (t, k) => need(has(k, /^(mit|bei|beim|zu|zum|zur|von|vom|seit|aus|nach)$/), 'Use mit, bei, zu, von, seit, aus ou nach.'), true),
  perfekt: R('o <b>Perfekt</b>: <b>haben</b> ou <b>sein</b> + o particípio <b>no fim</b> (Ich habe gestern Pizza gegessen). Qualquer verbo serve.', (t, k) => need(has(k, HABEN) || has(k, SEIN) ? clauses(t).some((c) => (c.some((w) => HABEN.test(w) || SEIN.test(w))) && isPart(last(c))) : false, has(k, HABEN) || has(k, SEIN) ? 'O particípio (gemacht, gegessen, gefahren…) vai <b>no fim</b> da frase.' : 'Use <b>haben</b> ou <b>sein</b> + particípio: Ich habe … gemacht.'), false),
  perfekt_sein: R('o <b>Perfekt com sein</b> (movimento ou mudança): Ich bin nach Rom gefahren. Qualquer verbo de movimento serve.', (t, k) => need(has(k, SEIN) && clauses(t).some((c) => c.some((w) => SEIN.test(w)) && isPart(last(c))), has(k, SEIN) ? 'O particípio (gefahren, gegangen, geflogen…) vai <b>no fim</b>.' : 'Com verbos de movimento, o Perfekt usa <b>sein</b>: Ich <b>bin</b> … gefahren.'), false),
  praet_sein_haben: R('o passado <b>war</b> ou <b>hatte</b> (Früher war ich… / Ich hatte…)', (t, k) => need(has(k, /^(war|warst|waren|wart|hatte|hattest|hatten|hattet)$/), 'Use <b>war</b> (sein) ou <b>hatte</b> (haben) no passado.'), false),
  komparativ: R('uma <b>comparação</b>: adjetivo com -er + <b>als</b> (größer als…), ou <b>am …sten</b>', (t, k) => need((k.includes('als') && has(k, /\p{L}{2,}er$/u)) || /\bam \p{L}+sten\b/iu.test(t) || has(k, /^(besser|lieber|mehr)$/), 'Compare com -er + <b>als</b> (Ich bin größer als…) ou use <b>am …sten</b>.'), false),
  weil: R('<b>weil</b> (verbo no fim: …, weil ich müde bin) ou <b>denn</b> (…, denn ich bin müde). Qualquer verbo serve.', (t, k) => need(verbLast(t, 'weil') || k.includes('denn'), k.includes('weil') ? 'Depois de <b>weil</b>, o verbo conjugado vai <b>para o fim</b>: …, weil ich müde <b>bin</b>.' : 'Use <b>weil</b> ou <b>denn</b> para dar o motivo.'), false),
  dass: R('uma oração com <b>dass</b>, com o verbo no fim (Ich glaube, dass Deutsch schön <b>ist</b>). Qualquer verbo serve.', (t, k) => need(verbLast(t, 'dass'), k.includes('dass') ? 'Depois de <b>dass</b>, o verbo vai <b>para o fim</b>.' : 'Use <b>dass</b>: Ich finde, dass…'), false),
  wenn: R('uma oração com <b>wenn</b>, com o verbo no fim (Wenn es regnet, bleibe ich zu Hause). Qualquer verbo serve.', (t, k) => need(verbLast(t, 'wenn'), k.includes('wenn') ? 'Depois de <b>wenn</b>, o verbo vai <b>para o fim</b>.' : 'Use <b>wenn</b>: Wenn ich Zeit habe, …'), false),
  reflexivo: R('um <b>verbo reflexivo</b>, com mich, dich, sich, uns ou euch (Ich freue mich…). Qualquer verbo reflexivo serve.', (t, k) => need(has(k, /^(mich|dich|sich|uns|euch|mir|dir)$/), 'Um verbo reflexivo precisa do pronome: <b>mich</b>, dich, sich…'), true),
  futur: R('o <b>Futur</b>: <b>werden</b> + infinitivo <b>no fim</b> (Ich werde nach Berlin fahren). Qualquer verbo serve.', (t, k) => need(has(k, WERDEN) && clauses(t).some((c) => c.some((w) => WERDEN.test(w)) && isInf(last(c))), has(k, WERDEN) ? 'O infinitivo vai <b>no fim</b>: Ich werde … <b>lernen</b>.' : 'Use <b>werden</b>: ich werde, du wirst, er wird…'), false),
  modal_praet: R('um <b>modal no passado</b> (konnte, musste, wollte, durfte, sollte) + infinitivo no fim. Qualquer verbo serve.', (t, k) => need(has(k, MODAL_PRAET), 'Use o modal no passado: konnte, musste, wollte…'), false),
  sollen: R('<b>sollen</b> para conselho (Ich soll… / Du solltest…) + infinitivo no fim', (t, k) => need(has(k, /^(soll|sollst|sollen|sollt|sollte|solltest|sollten)$/), 'Use <b>sollen</b> ou <b>sollte</b>.'), false),
  relativa: R('uma <b>oração relativa</b> (…, der/die/das …, com o verbo no fim): Ich habe eine Freundin, die in Rio wohnt.', (t, k) => need(clauses(t).some((c, i) => i > 0 && /^(der|die|das|den|dem|denen|deren|dessen|was|wo)$/.test(c[0]) && c.length >= 3), 'Depois da vírgula, comece com <b>der/die/das</b> e termine com o verbo.'), false),
  konj2: R('o <b>Konjunktiv II</b> (würde, hätte, wäre, könnte, möchte…)', (t, k) => need(has(k, KONJ2), 'Use würde, hätte, wäre, könnte ou möchte.'), false),
  conectores: R('um conector: <b>deshalb</b>, <b>trotzdem</b> ou <b>sonst</b>, com o verbo logo depois', (t, k) => need(has(k, /^(deshalb|deswegen|trotzdem|sonst|darum|daher)$/), 'Use deshalb, trotzdem ou sonst.'), false),
  praet: R('o <b>Präteritum</b> (machte, ging, kam, war, hatte…), como numa história', (t, k) => need(has(k, /^(war|warst|waren|hatte|hatten|ging|gingen|kam|kamen|sah|sahen|gab|fand|las|aß|trank|fuhr|lief|schrieb|blieb|wurde|wurden)$/) || has(k, /\p{L}{2,}(te|ten|test)$/u), 'Use um verbo no Präteritum: machte, ging, kam, war…'), false),
  plusq: R('o <b>Plusquamperfekt</b>: <b>hatte</b> ou <b>war</b> + particípio (Nachdem ich gegessen hatte, …)', (t, k) => need(has(k, /^(hatte|hattest|hatten|war|warst|waren)$/) && k.some(isPart), 'Use hatte/war + particípio: Ich <b>hatte</b> schon <b>gegessen</b>.'), false),
  quando: R('uma oração de tempo com <b>als</b>, <b>wenn</b>, <b>während</b> ou <b>bevor</b>, com o verbo no fim', (t) => need(['als', 'wenn', 'während', 'bevor'].some((c) => verbLast(t, c)), 'Use als, wenn, während ou bevor, com o verbo no fim da oração.'), false),
  finalidade: R('<b>um … zu</b> (Ich lerne Deutsch, um in Berlin zu arbeiten) ou <b>damit</b>', (t, k) => need((k.includes('um') && k.includes('zu')) || k.includes('damit'), 'Use <b>um … zu</b> + infinitivo, ou <b>damit</b>.'), false),
  passiv: R('a <b>voz passiva</b>: werden/wurde + particípio no fim (Das Haus wurde 1900 gebaut)', (t, k) => need(has(k, /^(wird|werden|wurde|wurden|worden)$/) && k.some(isPart), 'Use werden/wurde + particípio: … <b>wird</b> … <b>gebaut</b>.'), false),
  wohl: R('o <b>Futur I</b> ou uma suposição com <b>wohl</b> (Er wird wohl müde sein)', (t, k) => need(has(k, WERDEN), 'Use <b>werden</b> (+ wohl): Ich werde… / Er wird wohl…'), false),
  obwohl: R('<b>obwohl</b> (verbo no fim) ou <b>zwar … aber</b>', (t, k) => need(verbLast(t, 'obwohl') || (k.includes('zwar') && k.includes('aber')), 'Use <b>obwohl</b> (verbo no fim) ou <b>zwar … aber</b>.'), false),
  zu_inf: R('um <b>infinitivo com zu</b> (Ich habe Lust, ins Kino zu gehen)', (t, k) => need(clauses(t).some((c) => c.length >= 2 && c[c.length - 2] === 'zu' || /\p{L}+zu\p{L}+en$/u.test(last(c))), 'Termine com <b>zu</b> + infinitivo: …, Deutsch <b>zu lernen</b>.'), false),
  lassen: R('o verbo <b>lassen</b> (Ich lasse mein Auto reparieren)', (t, k) => need(has(k, /^(lasse|lässt|lassen|lasst|ließ|ließen|gelassen)$/), 'Use <b>lassen</b>: Ich lasse …'), false),
  als_ob: R('<b>als ob</b> + Konjunktiv II (Er tut so, als ob er alles wüsste)', (t) => need(/\bals ob\b|\bals wäre|\bals hätte/i.test(t), 'Use <b>als ob</b>.'), false),
  futur2: R('o <b>Futur II</b>: werden + particípio + haben/sein no fim (Bis morgen werde ich es geschafft haben)', (t, k) => need(has(k, WERDEN) && /^(haben|sein)$/.test(last(clauses(t).find((c) => c.some((w) => WERDEN.test(w))) || [])), 'Termine com particípio + <b>haben</b> ou <b>sein</b>: … geschafft <b>haben</b>.'), false),
  indem: R('<b>indem</b>, <b>ohne … zu</b> ou <b>statt … zu</b>', (t, k) => need(k.includes('indem') || ((k.includes('ohne') || k.includes('statt') || k.includes('anstatt')) && k.includes('zu')), 'Use indem, ohne … zu ou statt … zu.'), false),
};
// lição (índice) → regra
const RULE_OF = {
  0: 'sein_heissen', 1: 'kommen_wohnen', 3: 'presente', 4: 'presente', 5: 'frage', 7: 'haben', 8: 'negacao', 9: 'separavel', 10: 'presente', 11: 'modal',
  12: 'esgibt', 13: 'lugar', 14: 'presente', 16: 'modal', 17: 'perfekt', 18: 'perfekt_sein', 19: 'praet_sein_haben', 20: 'dativ_prep', 21: 'lugar', 22: 'komparativ',
  23: 'weil', 24: 'dass', 25: 'wenn', 26: 'reflexivo', 29: 'futur', 30: 'modal_praet', 33: 'sollen', 36: 'relativa', 37: 'relativa', 38: 'konj2', 41: 'conectores',
  42: 'praet', 43: 'plusq', 44: 'quando', 45: 'relativa', 47: 'finalidade', 48: 'passiv', 49: 'passiv', 50: 'konj2', 51: 'konj2', 52: 'wohl', 54: 'obwohl', 58: 'zu_inf',
  59: 'lassen', 61: 'konj2', 62: 'konj2', 63: 'relativa', 86: 'indem', 92: 'als_ob', 93: 'futur2',
};
const ruleOfLesson = (les) => RULES[les.rule || RULE_OF[les.oi]] || null;

// Conferência completa. Devolve { pt, struct: true|false|null, msg, conc: {ok,msg}|null, word }.
function checkFrase(text, les, sug) {
  const toks = fT(text), pt = toks.filter((w) => /^(eu|você|voce|não|nao|é|um|uma|meu|minha|que|com|para|muito|gosto|tenho|sou|estou|moro|do|da|no|na)$/.test(w)).length >= Math.max(2, toks.length * 0.4);
  const rule = ruleOfLesson(les), r = rule ? rule.c(text, toks) : null;
  const conc = (rule ? rule.pres : les.i <= 16) ? concord(text) : null;
  return { pt, rule, struct: rule ? r === true : null, msg: r === true ? '' : r, conc, word: sug ? wordIn(text, sug.de) : null };
}
// Exemplo da própria lição que segue a regra (para mostrar como modelo, sem obrigar a copiar).
function modelOf(les) {
  const rule = ruleOfLesson(les), all = [...les.ge, ...les.ex, ...les.dlg];
  return (rule && all.find((s) => rule.c(s.de, fT(s.de)) === true)) || les.ge[0];
}

// só isto fica visível para o resto do app
Object.assign(window, { checkFrase, modelOf, ruleOfLesson, fraseConcord: concord });
})();
