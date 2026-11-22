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
  // ---------- Módulo 2 ----------
  posesivos: R('a família com possessivos (mi madre, mis hermanos, su hijo…)', (t, k) => {
    const c = C(k);
    if (/ (la|el|los|las) (mi|mis|tu|tus|su|sus) /.test(c)) return 'Sem artigo antes do possessivo: <b>mi madre</b> (e não "la mi madre").';
    if (/ mi (hermanos|padres|hijos|abuelos|primos|tíos|amigos) /.test(c)) return 'No plural, o possessivo ganha -s: <b>mis</b> hermanos.';
    return need(has(k, /^(mi|mis|tu|tus|su|sus|nuestro|nuestra|nuestros|nuestras)$/) || has(k, /^(madre|padre|padres|hermano|hermana|hermanos|hijo|hija|hijos|abuelo|abuela|abuelos|familia|esposo|esposa)$/), 'Fale da família: <b>Mi</b> madre se llama … / Tengo dos <b>hermanos</b>.');
  }),
  genero: R('substantivos com o artigo certo (el viaje, la leche, los árboles…)', (t, k) => {
    const c = C(k);
    if (/ (la|una) (viaje|mensaje|árbol|puente|color|dolor|equipo|paisaje) /.test(c)) return 'Essa palavra é masculina em espanhol: <b>el</b> viaje, <b>el</b> árbol, <b>el</b> color.';
    if (/ (el|un) (leche|sal|nariz|sangre|miel|ciudad|canción) /.test(c)) return 'Essa palavra é feminina em espanhol: <b>la</b> leche, <b>la</b> sal, <b>la</b> nariz.';
    return need(has(k, /^(el|la|los|las|un|una|unos|unas)$/), 'Use o artigo: <b>el</b> viaje, <b>la</b> leche, <b>los</b> libros.');
  }),
  hay: R('o que existe num lugar, com <b>hay</b>', (t, k) => {
    const c = C(k);
    if (/ hay (el|la|los|las) /.test(c)) return 'Depois de hay, use <b>un / una</b> ou um número: hay <b>una</b> cocina (e não "hay la cocina").';
    if (/ (tem|tiene) (dos|tres|una|un) (dormitorios|cuartos|sillas|baños) /.test(c) && !/ mi casa tiene /.test(c)) return 'Para existir num lugar, use <b>hay</b>: En mi casa <b>hay</b> dos dormitorios.';
    return need(k.includes('hay'), 'Use <b>hay</b>: En mi casa <b>hay</b> … / No <b>hay</b> …');
  }),
  colores: R('uma cor que concorda com o substantivo (la casa blanca, los carros rojos…)', (t, k) => {
    const c = C(k);
    if (/ (la|una|las) \p{L}*a (blanco|negro|rojo|amarillo|rosado) /u.test(c)) return 'A cor concorda com o substantivo feminino: la casa <b>blanca</b>.';
    if (/ (verda|azula|grisa) /.test(c)) return 'verde, azul e gris não mudam no feminino: la camisa <b>verde</b>.';
    return need(has(k, /^(rojo|roja|rojos|rojas|azul|azules|verde|verdes|amarillo|amarilla|amarillos|amarillas|blanco|blanca|blancos|blancas|negro|negra|negros|negras|gris|grises|rosado|rosada|marrón|marrones|morado|morada|anaranjado|anaranjada|celeste|color|colores)$/), 'Use uma cor: el carro <b>rojo</b>, la casa <b>blanca</b>.');
  }),
  gustar: R('um gosto com <b>gustar</b> (me gusta el café, me gustan los libros…)', (t, k) => {
    const c = C(k);
    if (/ gusta(n)? de /.test(c)) return 'Sem "de" depois de gustar: me gusta <b>el</b> café.';
    if (/ me gusta (los|las) /.test(c)) return 'Com várias coisas, use <b>gustan</b>: me <b>gustan</b> los libros.';
    if (/ me gustan (el|la) /.test(c)) return 'Com uma coisa só, use <b>gusta</b>: me <b>gusta</b> el café.';
    return need(has(k, /^(gusta|gustan|encanta|encantan|gustaría)$/) || / (también|tampoco) /.test(c), 'Use gustar: <b>Me gusta</b> … / <b>Me gustan</b> …');
  }),
  mensaje: R('uma frase de mensagem de apresentação (¡Hola a todos! / Me llamo … / Me encanta … / ¡Un abrazo!)', (t, k) => need(has(k, /^(hola|todos|llamo|soy|tengo|gusta|gustan|encanta|abrazo|saludos|vemos|quiero|practicar|nueva|nuevo|libre)$/), 'Escreva como numa apresentação: <b>¡Hola a todos!</b> / <b>Me llamo</b> … / <b>¡Un abrazo!</b>')),
  // ---------- Módulo 3 ----------
  hora: R('uma hora ou um horário (Son las tres y media / a las ocho…)', (t, k) => {
    const c = C(k);
    if (/ son (dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce) /.test(c)) return 'A hora leva artigo: son <b>las</b> tres.';
    if (/ son las una /.test(c)) return 'Uma hora fica no singular: <b>es la una</b>.';
    return need(/ (es la|son las|a la|a las) /.test(c) || has(k, /^(hora|horas|mediodía|medianoche|punto)$/), 'Diga a hora: <b>Son las</b> tres y media. / <b>a las</b> ocho.');
  }),
  rutina: R('uma ação da rotina, com verbo reflexivo (me levanto, me ducho…)', (t, k) => {
    const c = C(k);
    if (/ yo (levanto|ducho|acuesto|visto|despierto) /.test(c)) return 'Falta o pronome reflexivo: (yo) <b>me</b> levanto.';
    if (/ me (levantas|duchas|acuestas) /.test(c)) return 'Com me, o verbo vai na forma de yo: me <b>levanto</b>.';
    return need(has(k, /^(me|te|se|nos)$/) || has(k, /^(desayuno|desayunas|desayuna|almuerzo|almuerzas|almuerza|almorzamos|ceno|cenas|cena|salgo|sales|sale)$/), 'Use um verbo da rotina: <b>me levanto</b>, <b>me ducho</b>, <b>desayuno</b>…');
  }),
  cambian: R('um verbo que muda a vogal (quiero, puedo, duermo, pido…)', (t, k) => {
    if (has(k, /^(quero|posso|podo|dormo|prefero|empezo|pedo|volvo|jogo|quieremos|puedemos|duermimos)$/)) return 'Confira a vogal: <b>quiero</b>, <b>puedo</b>, <b>duermo</b> (e em nosotros, sem mudança: queremos, podemos).';
    return need(has(k, /^(quiero|quieres|quiere|quieren|queremos|puedo|puedes|puede|pueden|podemos|duermo|duermes|duerme|duermen|dormimos|empiezo|empieza|empiezan|prefiero|prefieres|prefiere|pienso|piensas|piensa|vuelvo|vuelves|vuelve|pido|pides|pide|repito|juego|juegas|juega|cuesta|cuestan|entiendo|entiendes|entiende|cierro|cierra|encuentro|recuerdo|sirvo)$/), 'Use um verbo que muda a vogal: <b>quiero</b>, <b>puedo</b>, <b>duermo</b>…');
  }),
  frecuencia: R('com que frequência (siempre, a veces, nunca, los lunes, dos veces a la semana…)', (t, k) => {
    const c = C(k);
    if (/ (nas|às|aos) (segundas|terças|quartas|quintas|sextas|sábados|domingos) /.test(c)) return 'Em espanhol: <b>los</b> lunes, <b>los</b> sábados (sem preposição).';
    return need(/ (siempre|nunca|a veces|a menudo|casi|todos los días|cada|veces|los lunes|los martes|los miércoles|los jueves|los viernes|los sábados|los domingos|el fin de semana|el lunes|el martes|el miércoles|el jueves|el viernes|el sábado|el domingo) /.test(c), 'Diga a frequência: <b>siempre</b> / <b>a veces</b> / <b>nunca</b> / <b>los lunes</b>.');
  }),
  muymucho: R('"muito" com <b>muy</b> ou <b>mucho</b> (muy bueno, mucho trabajo, trabajo mucho)', (t, k) => need(has(k, /^(muy|mucho|mucha|muchos|muchas|poco|poca|pocos|pocas|bastante|demasiado)$/), 'Use muy ou mucho: <b>muy</b> bueno / <b>mucho</b> trabajo / trabajo <b>mucho</b>.')),
  invitacion: R('uma frase de convite (Te invito a … / La fiesta es a las … / ¡Claro que sí!)', (t, k) => need(has(k, /^(invito|invitamos|invitación|fiesta|cumpleaños|venir|vienes|quieres|confirma|confirmen|confirmar|trae|traigan|traer|claro|siento|encantaría|asado|espero|vemos|empieza)$/), 'Escreva como num convite: <b>Te invito a</b> … / <b>La fiesta empieza a las</b> …')),
  // ---------- Módulo 4 ----------
  hambre: R('como você está, com <b>tener</b> (tengo hambre, tengo sed, tengo frío…)', (t, k) => {
    const c = C(k);
    if (/ (estoy|estás|está|estamos|están) con (hambre|sed|frío|calor|sueño|prisa) /.test(c)) return 'Em espanhol, essas sensações se "têm": <b>tengo</b> hambre, <b>tengo</b> sed.';
    if (/ mucho (hambre|sed|prisa) /.test(c)) return 'hambre, sed e prisa são femininos: <b>mucha</b> hambre.';
    return need(has(k, /^(hambre|sed|frío|calor|sueño|prisa)$/) || / algo de (tomar|comer) /.test(c), 'Diga como está: <b>Tengo hambre</b> / <b>Tengo sed</b> / <b>Tengo frío</b>.');
  }),
  mercado: R('um pedido ou uma pergunta de preço (un kilo de …, ¿Cuánto cuesta?…)', (t, k) => {
    const c = C(k);
    if (/ cuánto cuesta (los|las) /.test(c)) return 'Com várias coisas: ¿Cuánto <b>cuestan</b> las manzanas?';
    if (/ cuánto cuestan (el|la) /.test(c)) return 'Com uma coisa só: ¿Cuánto <b>cuesta</b> el queso?';
    return need(/ (kilo|kilos|medio|docena|gramos|botella|paquete|cuánto|cuesta|cuestan|algo más|aquí tiene|eso es todo|me da|quiero|son|tiene|cómo se llama) /.test(c), 'Peça ou pergunte o preço: <b>Quiero un kilo de</b> … / <b>¿Cuánto cuesta?</b>');
  }),
  restaurante: R('um pedido no restaurante (Quisiera … / Para mí, … / La cuenta, por favor)', (t, k) => {
    const c = C(k);
    if (/ para mi /.test(c) && !/ para mi (plato|mesa|amigo|amiga|casa) /.test(c)) return 'Depois de para, use <b>mí</b>, com acento: para <b>mí</b>.';
    return need(/ (quisiera|para mí|me trae|la cuenta|de primero|de segundo|de postre|para tomar|propina|mesa|pagar|tarjeta|exquisita|exquisito|carta|menú) /.test(c), 'Peça com educação: <b>Quisiera</b> … / <b>Para mí</b>, … / <b>La cuenta, por favor</b>.');
  }),
  demostrativos: R('um demonstrativo (este, esa, aquellos, esto…)', (t, k) => {
    const c = C(k);
    if (/ (este|ese|aquel) (camisa|casa|mesa|chaqueta|falda|ciudad|calle) /.test(c)) return 'Com substantivo feminino: <b>esta</b>, <b>esa</b>, <b>aquella</b> camisa.';
    if (/ (esta|esa|aquella) (pan|libro|carro|vestido|plato) /.test(c)) return 'Com substantivo masculino: <b>este</b>, <b>ese</b>, <b>aquel</b> libro.';
    return need(has(k, /^(este|esta|estos|estas|ese|esa|esos|esas|aquel|aquella|aquellos|aquellas|esto|eso|aquello)$/), 'Use um demonstrativo: <b>este</b> (aqui), <b>ese</b> (aí), <b>aquel</b> (lá).');
  }),
  ropa: R('uma frase de compra de roupa (¿Puedo probarme …? / me queda bien / ¿Qué talla …?)', (t, k) => {
    const c = C(k);
    if (/ (los pantalones|los zapatos|las \p{L}+) me queda /u.test(c)) return 'Com várias peças, use <b>quedan</b>: los zapatos me <b>quedan</b> chicos.';
    return need(has(k, /^(talla|probarme|probarse|probármelo|probador|queda|quedan|calza|número|oferta|caja|ropa|camisa|camiseta|pantalones|falda|vestido|zapatos|chaqueta)$/), 'Fale de roupa: <b>¿Puedo probarme</b> …? / Me <b>queda</b> bien.');
  }),
  menu: R('uma frase de pedido do menú del día (De primero, … / ¿Está incluido …?)', (t, k) => {
    const c = C(k);
    if (/ suco /.test(c)) return 'Suco, na América Latina, é <b>jugo</b>.';
    return need(/ (de primero|de segundo|de postre|para tomar|incluye|incluido|menú|sopa|ensalada|jugo|picante|sin|vegetariana|plato) /.test(c), 'Peça do cardápio: <b>De primero</b>, … / <b>¿Está incluido</b> …?');
  }),
  // ---------- Módulo 5 ----------
  dondeesta: R('onde fica algo, com <b>estar</b> (El banco está al lado del hotel…)', (t, k) => {
    const c = C(k);
    if (/ (dónde|donde) es (el|la) /.test(c)) return 'Para localização, use <b>estar</b>: ¿Dónde <b>está</b> el banco?';
    if (/ (do|da|no|na) (hotel|banco|plaza|museo|parque|estación|esquina|calle) /.test(c)) return 'Em espanhol: <b>del</b>, <b>de la</b>, <b>en el</b>, <b>en la</b>.';
    return need(has(k, /^(está|están|estoy|queda|quedan)$/) || / (al lado|enfrente|cerca|lejos|detrás|delante|entre|esquina|derecha|izquierda|cuadras) /.test(c), 'Diga onde fica: El banco <b>está</b> al lado del hotel.');
  }),
  hayesta: R('<b>hay</b> (existe) ou <b>está</b> (onde fica)', (t, k) => {
    const c = C(k);
    if (/ hay (el|la|los|las) /.test(c)) return 'Depois de hay, use un / una ou número. Para algo específico, use <b>está</b>: El banco <b>está</b> aquí.';
    if (/ (un|una) \p{L}+ está /u.test(c) && !/ dónde /.test(c)) return 'Para dizer que algo existe, use <b>hay</b>: <b>Hay</b> un banco en la calle.';
    return need(has(k, /^(hay|está|están)$/), 'Use <b>hay</b> (existe) ou <b>está</b> (onde fica).');
  }),
  direcciones: R('uma direção, com o imperativo (sigue, dobla, cruza / siga, doble, cruce)', (t, k) => {
    const c = C(k);
    if (/ (vire|siga em frente|atravesse) /.test(c)) return 'Em espanhol: <b>dobla / doble</b> (vire), <b>sigue / siga</b> (siga), <b>cruza / cruce</b> (atravesse).';
    return need(has(k, /^(sigue|siga|dobla|doble|gira|gire|cruza|cruce|toma|tome|llego|llega|llegar|recto|derecho|semáforo|perdido|perdida|ayuda|final|esquina|derecha|izquierda)$/), 'Dê uma direção: <b>Sigue</b> todo recto. <b>Dobla</b> a la derecha.');
  }),
  transporte: R('como você vai (en autobús, en metro, a pie, tomo el …)', (t, k) => {
    const c = C(k);
    if (/ de (autobús|metro|taxi|tren|avión|bicicleta|bus|carro) /.test(c) && / (voy|vas|va|vamos|van) /.test(c)) return 'Com transporte, use <b>en</b>: voy <b>en</b> metro.';
    if (/ (en|de) pie /.test(c)) return 'A pé é <b>a pie</b>.';
    if (/ (cojo|coges|coge) /.test(c)) return 'Na América Latina, use <b>tomar</b>: tomo el autobús.';
    return need(/ (en autobús|en metro|en taxi|en tren|en avión|en bicicleta|en bus|en carro|a pie|tomo|tomas|toma|colectivo|camión|micro|parada|boleto|tarda|bajo|subo) /.test(c), 'Diga como vai: Voy <b>en metro</b>. / Voy <b>a pie</b>. / <b>Tomo</b> el autobús.');
  }),
  poder: R('um pedido com <b>poder</b> (¿Puedo …? / ¿Puede …? / No se puede …)', (t, k) => {
    if (has(k, /^(podo|posso|podes)$/)) return 'Em espanhol: <b>puedo</b>, <b>puedes</b> (o → ue).';
    return need(has(k, /^(puedo|puedes|puede|podemos|pueden|poder)$/), 'Use poder: <b>¿Puedo</b> pagar con tarjeta? / Aquí no se <b>puede</b> fumar.');
  }),
  carteles: R('um aviso ou uma placa (Prohibido …, Salida, Empuje, Fuera de servicio…)', (t, k) => {
    if (has(k, /^(proibido|proibida|saída|empurre|puxe|banheiro|banheiros)$/)) return 'Escreva o aviso em espanhol: <b>Prohibido</b>, <b>Salida</b>, <b>Empuje</b>, <b>Jale</b>, <b>Baños</b>.';
    return need(has(k, /^(prohibido|prohibida|salida|entrada|empuje|jale|tire|abierto|abierta|cerrado|cerrada|baños|caja|horario|servicio|permite|ascensor|escalera|aviso|alquila|no)$/), 'Escreva um aviso: <b>Prohibido fumar</b> / <b>Salida</b> / <b>Empuje</b>.');
  }),
  // ---------- Módulo 6 ----------
  gerundio: R('o que está acontecendo, com <b>estar + gerúndio</b> (estoy comiendo…)', (t, k) => {
    if (has(k, /^(comendo|fazendo|lendo|dormindo|escrevendo|bebendo|vivendo)$/)) return 'O gerúndio do -er e do -ir leva i: com<b>iendo</b>, hac<b>iendo</b>, le<b>yendo</b>.';
    if (has(k, /^(leiendo|dormiendo|pediendo)$/)) return 'Confira: <b>leyendo</b>, <b>durmiendo</b>, <b>pidiendo</b>.';
    return need(has(k, ESTAR) && has(k, /\p{L}+(ando|iendo|yendo)$/u), 'Use estar + gerúndio: <b>Estoy comiendo</b>. / <b>Está lloviendo</b>.');
  }),
  ira: R('um plano com <b>ir a + infinitivo</b> (voy a viajar…)', (t, k) => {
    const c = C(k);
    if (/ (voy|vas|va|vamos|van) (ir|viajar|comer|trabajar|visitar|descansar|hacer|cenar|salir|ver|estudiar|llover|empezar|venir) /.test(c)) return 'Não esqueça o <b>a</b>: voy <b>a</b> viajar.';
    return need(/ (voy|vas|va|vamos|van) a \p{L}+(ar|er|ir) /u.test(c), 'Fale de um plano: <b>Voy a</b> viajar. / <b>Vamos a</b> cenar.');
  }),
  pasado: R('algo que você fez, no <b>pretérito indefinido</b> (ayer trabajé, comí…)', (t, k) => {
    if (has(k, /^(hablastes|comistes|vistes|fuistes|hicistes|estuvistes)$/)) return 'Com tú, o passado não termina em -s: <b>viste</b>, <b>hablaste</b>.';
    if (has(k, /^(trabalhei|comi|fiz|cheguei|comprei|visitei)$/)) return 'Isso é português. Em espanhol: <b>trabajé</b>, <b>comí</b>, <b>hice</b>, <b>llegué</b>.';
    return need(has(k, /\p{L}+(é|aste|ó|amos|aron|í|iste|ió|imos|ieron)$/u) || has(k, /^(fui|fue|fuimos|fueron|vi|vio|tuve|hice|hizo|estuve|pude|vine|dije)$/), 'Conte o que fez: Ayer <b>trabajé</b> … / <b>Comí</b> …');
  }),
  irregulares: R('um irregular no passado (fui, tuve, hice, estuve, pude, vine, dije…)', (t, k) => {
    if (has(k, /^(tuvé|hicé|estuvé|pudé|viné|dijé|hiço|dijieron|tení|hací)$/)) return 'Os irregulares não levam acento e têm forma própria: <b>tuve</b>, <b>hice</b>, <b>hizo</b>, <b>dijeron</b>.';
    return need(has(k, /^(fui|fuiste|fue|fuimos|fueron|tuve|tuviste|tuvo|tuvimos|tuvieron|hice|hiciste|hizo|hicimos|hicieron|estuve|estuviste|estuvo|estuvimos|estuvieron|pude|pudiste|pudo|pudimos|quise|quiso|vine|viniste|vino|vinimos|vinieron|dije|dijiste|dijo|dijimos|dijeron)$/), 'Use um irregular: <b>fui</b>, <b>tuve</b>, <b>hice</b>, <b>estuve</b>…');
  }),
  finde: R('uma frase sobre o fim de semana (primero, después, al final, ¡qué bien!…)', (t, k) => {
    const c = C(k);
    return need(/ (primero|después|luego|más tarde|al final|qué tal|qué bien|qué lástima|qué pena|lo pasé|cómo te fue|fin de semana|divertido|tranquilo|aburrido) /.test(c) || has(k, /\p{L}+(é|ó|í|ió|aste|iste)$/u), 'Conte o fim de semana: <b>Primero</b> fui …, <b>después</b> … / <b>¡Qué bien!</b>');
  }),
  postal: R('uma frase de postal (¡Hola desde …! / Estoy … / Ayer visité … / Mañana voy a … / Besos)', (t, k) => {
    const c = C(k);
    if (/ (voy|vamos) (ir|visitar|viajar|comer|ver) /.test(c)) return 'Não esqueça o <b>a</b>: voy <b>a</b> ir.';
    return need(/ (desde|querida|querido|estoy|disfrutando|ayer|visité|fui|comí|mañana|voy a|besos|abrazo|extraño|hasta pronto|hace|calor) /.test(c), 'Escreva como num postal: <b>¡Hola desde</b> …! / <b>Ayer visité</b> … / <b>Mañana voy a</b> …');
  }),
  // ---------- Módulo 7 ----------
  imperfecto: R('como as coisas eram, no <b>imperfeito</b> (era, vivía, jugaba, iba…)', (t, k) => {
    if (has(k, /^(brincava|morava|tinha|ia|era criança)$/)) return 'Isso é português. Em espanhol: <b>jugaba</b>, <b>vivía</b>, <b>tenía</b>, <b>iba</b>.';
    if (has(k, /^(ibamos|jugabamos|viviamos|comia|vivia|tenia|habia)$/)) return 'Confira o acento: <b>íbamos</b>, <b>jugábamos</b>, <b>vivía</b>, <b>tenía</b>, <b>había</b>.';
    return need(has(k, /\p{L}+(aba|abas|ábamos|aban|ía|ías|íamos|ían)$/u) || has(k, /^(era|eras|éramos|eran|iba|ibas|íbamos|iban|veía|veían)$/), 'Use o imperfeito: Cuando <b>era</b> niño, <b>jugaba</b> …');
  }),
  describir_pasado: R('uma descrição no passado (era, tenía, había, llevaba…)', (t, k) => {
    const c = C(k);
    if (/ habían (muchos|muchas|dos|tres|cuatro|cinco|treinta|\p{L}+ alumnos) /u.test(c)) return '<b>había</b> (existir) não vai para o plural: había treinta alumnos.';
    return need(has(k, /^(era|eran|tenía|tenían|había|estaba|estaban|llevaba|llevábamos|llevaban|empezaban|jugábamos|comíamos)$/) || has(k, /\p{L}+(aba|aban|ábamos|ía|ían|íamos)$/u), 'Descreva no imperfeito: La escuela <b>era</b> grande. <b>Había</b> un patio.');
  }),
  contraste: R('uma história com os dois passados (Llovía cuando salí / Estaba … cuando …)', (t, k) => {
    const imp = has(k, /\p{L}+(aba|aban|ía|ían)$/u) || has(k, /^(era|había|estaba|iba)$/);
    const ind = has(k, /\p{L}+(é|ó|í|ió|aron|ieron)$/u) || has(k, /^(fui|fue|hice|hizo|tuve|vino|dijo|pude|vi|vio|puse)$/);
    return need(imp || ind, 'Conte com os dois passados: <b>Llovía</b> cuando <b>salí</b>. / <b>Estaba</b> cocinando cuando <b>sonó</b> el teléfono.');
  }),
  soler: R('antes e agora (soler, ya no, todavía, antes … ahora …)', (t, k) => {
    const c = C(k);
    if (/ no más (fumo|vivo|trabajo|como|juego|estudio|tengo) /.test(c)) return 'Para "não … mais", use <b>ya no</b>: <b>ya no</b> fumo.';
    if (has(k, /^(solo|soles|sole|soleía|suelía)$/) && /solo (correr|ir|comer|levantar|trabajar)/.test(c.trim())) return 'soler muda o → ue: <b>suelo</b> correr.';
    return need(/ (antes|ahora|ya no|todavía|suelo|sueles|suele|solemos|suelen|solía|solías|solíamos|solían|sigo|sigues|sigue|dejé de|empecé a|hoy en día) /.test(c), 'Compare: <b>Antes</b> …, <b>ahora</b> … / <b>Solía</b> … / <b>Ya no</b> …');
  }),
  recuerdo: R('uma lembrança (Recuerdo que … / Me acuerdo de … / olía a / me encantaba…)', (t, k) => {
    const c = C(k);
    if (/ me acuerdo (mi|la|el|los|las|que) /.test(c)) return 'acordarse pede <b>de</b>: me acuerdo <b>de</b> mi abuelo.';
    return need(/ (recuerdo|recuerdas|me acuerdo|te acuerdas|olía|se oía|se oían|se veía|me encantaba|me gustaba|me daba|me sentía|lo que más) /.test(c) || has(k, /\p{L}+(aba|ía|ían)$/u), 'Conte a lembrança: <b>Recuerdo que</b> … / <b>Me acuerdo de</b> … / <b>Me encantaba</b> …');
  }),
  recuerdo_texto: R('uma frase de lembrança (Cuando tenía … / Un día, … llegó / Todavía me acuerdo …)', (t, k) => {
    const c = C(k);
    if (/ cuando (tuve|fui) (\p{L}+) años /u.test(c)) return 'Para a idade no cenário, use o imperfeito: cuando <b>tenía</b> ocho años.';
    return need(/ (cuando tenía|cuando era|un día|aquel día|ese día|una vez|de repente|todavía|nunca olvidaré|desde entonces|me acuerdo|no podía) /.test(c) || has(k, /\p{L}+(aba|ía|é|ó|ió)$/u), 'Conte a lembrança: <b>Cuando tenía</b> … / <b>Un día</b>, … / <b>Todavía me acuerdo</b> …');
  }),
  // ---------- Módulo 8 ----------
  perfecto: R('uma experiência com o <b>pretérito perfecto</b> (he viajado, has comido, nunca he …)', (t, k) => {
    const c = C(k);
    if (/ (tengo|tienes|tiene|tenemos|tienen) (\p{L}*(ado|ido)|hecho|visto|dicho|escrito) /u.test(c)) return 'O auxiliar é <b>haber</b>: <b>he</b> comido (e não "tengo comido").';
    if (/ (haz|as) (estado|visto|comido|ido|hecho|viajado|probado) /.test(c)) return 'Com tú, o auxiliar é <b>has</b> (com h e s).';
    if (/ (he|has|ha|hemos|han) (hacido|vido|decido|escribido|volvido|ponido|abrido|rompido) /.test(c)) return 'Esse particípio é irregular: <b>hecho</b>, <b>visto</b>, <b>dicho</b>, <b>escrito</b>, <b>vuelto</b>, <b>puesto</b>, <b>abierto</b>, <b>roto</b>.';
    return need(/ (he|has|ha|hemos|han) (\p{L}*(ado|ido)|hecho|visto|dicho|escrito|vuelto|puesto|abierto|roto) /u.test(c), 'Use haber + particípio: <b>He</b> viajado. ¿Alguna vez <b>has</b> estado …?');
  }),
  yatodavia: R('o que já fez e o que ainda não fez (ya, todavía no, aún no)', (t, k) => {
    const c = C(k);
    if (/ no todavía /.test(c)) return 'A ordem é <b>todavía no</b> (ou <b>aún no</b>).';
    return need(/ (ya|todavía no|aún no|todavía|aún|falta) /.test(c), 'Use <b>ya</b> (já) ou <b>todavía no</b> (ainda não): <b>Ya</b> he terminado.');
  }),
  objeto: R('um pronome de objeto (lo, la, los, las, le, les)', (t, k) => {
    const c = C(k);
    if (/ (el libro|el pasaporte|la película|las llaves|los boletos)\?? (compré|tengo|vi|encuentro|he visto) /.test(c)) return 'Em espanhol o pronome é obrigatório: ¿El libro? <b>Lo</b> compré.';
    return need(/ (lo|la|los|las|le|les) /.test(c) || has(k, /\p{L}+(rlo|rla|rlos|rlas|rle|rles)$/u), 'Use um pronome: ¿El libro? <b>Lo</b> compré. <b>Le</b> mandé un mensaje.');
  }),
  doble_pronombre: R('dois pronomes juntos (me lo, te la, se lo…)', (t, k) => {
    const c = C(k);
    if (/ (le|les) (lo|la|los|las) /.test(c)) return 'le + lo vira <b>se lo</b>: <b>se lo</b> di.';
    if (/ (lo|la|los|las) (me|te|nos) /.test(c)) return 'A ordem é: primeiro quem recebe, depois o objeto: <b>me lo</b>, <b>te la</b>.';
    return need(/ (me|te|se|nos) (lo|la|los|las) /.test(c) || has(k, /\p{L}+(melo|mela|melos|melas|telo|tela|telos|telas|selo|sela|selos|selas)$/u), 'Junte os dois pronomes: <b>me lo</b> das, <b>se lo</b> di, <b>te la</b> presto.');
  }),
  primera_vez: R('uma primeira vez (la primera vez que …, por primera vez, nunca antes…)', (t, k) => {
    const c = C(k);
    if (/ (el|mi|un|su|tu) primero (viaje|día|trabajo|vuelo|año) /.test(c)) return '<b>primero</b> perde o -o antes de substantivo masculino: <b>primer</b> viaje.';
    if (/ (la|mi|una) viaje /.test(c)) return '<b>viaje</b> é masculino: <b>el</b> viaje, <b>mi primer</b> viaje.';
    return need(/ (primera vez|primer|primera|nunca antes|alguna vez|una vez|increíble|inolvidable) /.test(c) || has(k, /\p{L}+(é|ó|í|ió|aba|ía)$/u), 'Conte a primeira vez: <b>La primera vez que</b> viajé … / <b>Por primera vez</b> …');
  }),
  correo: R('uma frase de e-mail pessoal (saudação, novidade, pedido ou despedida)', (t, k) => {
    const c = C(k);
    if (/ (tengo|tienes) (\p{L}*(ado|ido)) /u.test(c)) return 'O auxiliar é <b>haber</b>: <b>he</b> cambiado (e não "tengo cambiado").';
    if (/ le (lo|la|los|las) /.test(c)) return 'le + lo vira <b>se lo</b>.';
    return need(/ (hola|querido|querida|cómo estás|qué tal|he|has|hemos|ya|todavía|un abrazo|besos|escríbeme|hasta pronto|saludos|te extraño|novedades) /.test(c), 'Escreva como num e-mail: ¡<b>Hola</b>, …! / <b>He</b> empezado … / <b>Un abrazo</b>.');
  }),
  // ---------- Módulo 9 ----------
  comparativo: R('uma comparação (más … que, menos … que, mejor, peor, mayor, menor)', (t, k) => {
    const c = C(k);
    if (/ más (mejor|mejores|peor|peores) /.test(c)) return '<b>mejor</b> e <b>peor</b> já comparam: sem "más".';
    if (/ (más|menos) que (cien|mil|diez|veinte|cincuenta|\d+) /.test(c)) return 'Com números, use <b>de</b>: más <b>de</b> cien.';
    if (/ más (alto|grande|caro|rápido|barato|frío|fría|cómodo|bonito|bonita) (do|da) /.test(c)) return 'Isso é português. O segundo termo vem com <b>que</b>: más caro <b>que</b> …';
    return need(/ (más|menos|mejor|mejores|peor|peores|mayor|mayores|menor|menores) /.test(c), 'Compare: Es <b>más</b> caro <b>que</b> … / Es <b>mejor que</b> …');
  }),
  igualdad: R('uma igualdade (tan … como, tanto … como, el mismo que)', (t, k) => {
    const c = C(k);
    if (/ tan (\p{L}+) (cuanto|quanto) /u.test(c)) return 'O nosso "quanto" vira <b>como</b>: tan grande <b>como</b>.';
    if (/ tanto gente /.test(c)) return '<b>gente</b> é feminino: <b>tanta</b> gente.';
    if (/ tan (tiempo|dinero|gente|libros|horas|amigos|trabajo) /.test(c)) return 'Com substantivo, use <b>tanto</b> (que concorda): <b>tanto</b> tiempo, <b>tanta</b> gente.';
    return need(/ (tan|tanto|tanta|tantos|tantas|el mismo|la misma|los mismos|las mismas|igual|parecido|parecida) /.test(c), 'Compare iguais: <b>tan</b> grande <b>como</b> … / <b>tanto</b> tiempo <b>como</b> …');
  }),
  superlativo: R('um superlativo (el más … de, el mejor, el peor, -ísimo)', (t, k) => {
    const c = C(k);
    if (/ muy \p{L}+ísim[oa]s? /u.test(c)) return '<b>-ísimo</b> já intensifica: sem "muy".';
    if (/ (el|la|los|las) más (bueno|buena|buenos|buenas) /.test(c)) return 'Use <b>el mejor</b>, <b>la mejor</b>: nunca "el más bueno".';
    if (/ (el|la|los|las) (más \p{L}+|mejor|peor|mejores|peores) (\p{L}+ )?do /u.test(c)) return 'O grupo vem com <b>de</b> / <b>del</b>: el río más largo <b>del</b> mundo.';
    return need(/ (más|mejor|peor|mejores|peores|mayor|menor) /.test(c) || has(k, /\p{L}+ísim[oa]s?$/u), 'Use um superlativo: <b>el más</b> grande <b>de</b> … / <b>el mejor</b> … / caro → <b>carísimo</b>.');
  }),
  preferir: R('uma escolha (¿cuál?, ¿qué + substantivo?, prefiero, el rojo…)', (t, k) => {
    const c = C(k);
    if (/ cuál (color|talla|número|película|libro|camisa|restaurante|ciudad) /.test(c)) return 'Antes de substantivo, use <b>qué</b>: ¿<b>Qué</b> color prefieres?';
    if (has(k, /^(prefero|prefiro|preferes|prefere)$/)) return 'preferir muda e → ie: <b>prefiero</b>, <b>prefieres</b>, <b>prefiere</b>.';
    return need(/ (cuál|cuáles|qué|prefiero|prefieres|prefiere|preferimos|prefieren|me llevo|favorito|favorita) /.test(c), 'Escolha: ¿<b>Cuál</b> prefieres? / <b>Prefiero</b> el azul.');
  }),
  devolucion: R('uma frase de troca na loja (quería cambiar, me queda, la talla, el recibo…)', (t, k) => {
    const c = C(k);
    if (/ me (fica|ficou|fico) /.test(c)) return 'Para roupa, use <b>quedar</b>: <b>me queda</b> grande.';
    if (/ me queda (chicos|grandes|apretados|bien) /.test(c) && / (zapatos|pantalones|jeans|lentes) /.test(c)) return 'Com plural, <b>me quedan</b>: los zapatos <b>me quedan</b> chicos.';
    return need(/ (quería|cambiar|devolver|me queda|me quedan|talla|recibo|probador|reembolso|probármelo|probármela|el dinero|defecto|mancha|garantía) /.test(c), 'Na loja: <b>Quería cambiar</b> … / <b>Me queda</b> grande. / ¿Tiene otra <b>talla</b>?');
  }),
  resena: R('uma frase de avaliação (lo mejor, lo peor, mejor que, lo recomiendo…)', (t, k) => {
    const c = C(k);
    if (/ más (mejor|mejores|peor|peores) /.test(c)) return '<b>mejor</b> e <b>peor</b> já comparam: sem "más".';
    if (has(k, /^recomendo$/)) return 'recomendar muda e → ie: <b>recomiendo</b>.';
    return need(/ (lo mejor|lo peor|mejor|peor|más|menos|recomiendo|vale la pena|estrellas|calidad|precio|compré) /.test(c), 'Avalie: <b>Lo mejor</b> es … / Es <b>mejor que</b> … / <b>Lo recomiendo</b>.');
  }),
  // ---------- Módulo 10 ----------
  mitrabajo: R('uma frase sobre o seu trabalho (trabajo en / como, me encargo de…)', (t, k) => {
    const c = C(k);
    if (/ me encargo (los|las|el|la|del|atender) /.test(c)) return 'encargarse pede <b>de</b>: me encargo <b>de</b> los clientes.';
    if (/ trabajo (numa|num) /.test(c)) return 'Isso é português. Em espanhol: trabajo <b>en una</b> empresa.';
    return need(/ (trabajo|trabajas|trabaja|me encargo|te dedicas|soy|oficina|empresa|jefe|jefa|colegas|reuniones|reunión|sueldo|horario|tiempo) /.test(c), 'Fale do trabalho: <b>Trabajo en</b> … / <b>Me encargo de</b> …');
  }),
  telefono: R('uma frase ao telefone (aló, quería hablar con, ¿de parte de quién?…)', (t, k) => {
    const c = C(k);
    if (/ (desligue|desligar|ligar|ligo) /.test(c)) return 'Isso é português. Em espanhol: <b>colgar</b> (desligar) e <b>llamar</b> (ligar).';
    if (/ de parte de quien /.test(c)) return 'Na pergunta, <b>quién</b> leva acento.';
    return need(/ (aló|bueno|diga|quería|hablar con|de parte|un momento|cuelgue|mensaje|llame|llamar|vuelvo|ocupado|equivocado|habla) /.test(c), 'Ao telefone: ¿<b>Aló</b>? / <b>Quería hablar con</b> … / ¿<b>De parte de quién</b>?');
  }),
  porpara: R('uma frase com <b>por</b> ou <b>para</b>', (t, k) => {
    const c = C(k);
    if (/ (pelo|pela|pelos|pelas) /.test(c)) return 'Não existe "pelo" em espanhol: use <b>por el</b>, <b>por la</b>.';
    if (/ gracias para /.test(c)) return 'Agradecimento leva <b>por</b>: gracias <b>por</b> tu ayuda.';
    if (/ para (teléfono|correo|internet|la lluvia) /.test(c)) return 'Meio e causa levam <b>por</b>: <b>por</b> teléfono, <b>por</b> la lluvia.';
    if (/ es por (el lunes|el martes|mañana|el viernes|ti|mí) /.test(c)) return 'Prazo e destinatário levam <b>para</b>: es <b>para</b> el lunes.';
    return need(/ (por|para) /.test(c), 'Use <b>por</b> (causa, meio, troca) ou <b>para</b> (objetivo, destino, prazo).');
  }),
  obligacion: R('uma obrigação (tengo que, hay que, debes, no hace falta…)', (t, k) => {
    const c = C(k);
    if (/ (yo|tú|él|ella|nosotros) hay que /.test(c)) return '<b>hay que</b> é impessoal: sem pessoa. Para uma pessoa: <b>tengo que</b>.';
    if (/ tengo (trabajar|llegar|terminar|ir|hacer|estudiar) /.test(c)) return 'Falta o <b>que</b>: tengo <b>que</b> trabajar.';
    if (/ (tenho|precisa) /.test(c)) return 'Isso é português. Em espanhol: <b>tengo que</b> / <b>no hace falta</b>.';
    return need(/ (tengo que|tienes que|tiene que|tenemos que|tienen que|hay que|debo|debes|debe|debemos|deben|necesito|necesitas|hace falta|obligatorio|prohibido) /.test(c), 'Fale de obrigação: <b>Tengo que</b> … / <b>Hay que</b> … / <b>No hace falta</b> …');
  }),
  entrevista: R('uma frase de entrevista (he trabajado, sé, puedo, ¿por qué quiere …?)', (t, k) => {
    const c = C(k);
    if (/ tengo (trabajado|coordinado|estudiado) /.test(c)) return 'O auxiliar é <b>haber</b>: <b>he</b> trabajado.';
    if (/ (yo )?se (usar|hablar|manejar|programar) /.test(c)) return '"Eu sei" é <b>sé</b>, com acento.';
    return need(/ (he|sé|hablo|puedo|soy|quiere|cuénteme|sus|experiencia|puntos|próximos|horario|organizada|organizado) /.test(c), 'Na entrevista: <b>He trabajado</b> … / <b>Sé</b> usar … / <b>Soy</b> muy organizada.');
  }),
  anuncio: R('uma frase de anúncio ou de candidatura (se busca, me interesa, adjunto…)', (t, k) => {
    const c = C(k);
    if (/ me intereso (el|en el) /.test(c)) return '<b>interesar</b> funciona como gustar: <b>me interesa</b> el puesto.';
    if (/ anexo (mi|el) /.test(c)) return 'Em espanhol: <b>adjunto</b> mi currículum.';
    return need(/ (se busca|se requiere|se ofrece|me interesa|adjunto|quedo|atentamente|estimados|estimado|estimada|puesto|currículum|requisitos|indispensable) /.test(c), 'Escreva: <b>Se busca</b> … / <b>Me interesa</b> el puesto … / <b>Adjunto</b> mi currículum.');
  }),
  // ---------- Módulo 11 ----------
  doler: R('onde dói ou um sintoma (me duele, me duelen, tengo fiebre…)', (t, k) => {
    const c = C(k);
    if (/ (me|te|le|nos|les) duele (mi|tu|su) /.test(c)) return 'Com partes do corpo, use o artigo: me duele <b>la</b> cabeza.';
    if (/ (me|te|le|nos|les) duele (los|las) /.test(c)) return 'Com plural, <b>duelen</b>: me <b>duelen</b> los pies.';
    if (/ (me|te|le) duelen (la|el) /.test(c)) return 'Com singular, <b>duele</b>: me <b>duele</b> la cabeza.';
    if (/ (yo )?(dolo|duelo) /.test(c)) return 'doler funciona como gustar: <b>me duele</b> la cabeza.';
    return need(/ (duele|duelen|dolor|fiebre|tos|gripe|resfriado|resfriada|mareado|mareada) /.test(c), 'Diga onde dói: <b>Me duele</b> la cabeza. / <b>Tengo fiebre</b>.');
  }),
  farmacia: R('uma frase na farmácia (¿tiene algo para …?, cada ocho horas, receta…)', (t, k) => {
    const c = C(k);
    if (/ a cada \p{L}+ horas /u.test(c)) return 'Em espanhol é só <b>cada</b>: <b>cada</b> ocho horas.';
    if (/ algo por (el|la) /.test(c)) return 'Objetivo leva <b>para</b>: algo <b>para</b> la tos.';
    return need(/ (tiene algo|para la|para el|pastilla|pastillas|jarabe|crema|curitas|receta|cada|tome|tómelo|alérgico|alérgica|caja) /.test(c), 'Na farmácia: ¿<b>Tiene algo para</b> la tos? / <b>cada</b> ocho horas.');
  }),
  imperativo: R('um conselho no imperativo (toma, bebe, haz, ve / tome, beba…)', (t, k) => {
    const c = C(k);
    if (/ (faz|vai|tem|vem|põe|diz|sai) /.test(c)) return 'Isso é português. Com tú: <b>haz</b>, <b>ve</b>, <b>ten</b>, <b>ven</b>, <b>pon</b>, <b>di</b>, <b>sal</b>.';
    if (/ (hace|va|tiene|viene|pone|dice|sale) (ejercicio|al médico|paciencia|aquí|a casa) /.test(c) && !/ (usted|él|ella) /.test(c)) return 'Com tú, esse imperativo é irregular: <b>haz</b>, <b>ve</b>, <b>ten</b>, <b>ven</b>.';
    return need(/ (toma|tome|bebe|beba|descansa|descanse|haz|haga|ve|vaya|ten|tenga|ven|venga|acuéstate|abríguese|duerme|duerma) /.test(c) || has(k, /\p{L}+(lo|la|te|se|me)$/u), 'Dê um conselho: <b>Toma</b> mucha agua. / <b>Tome</b> este jarabe.');
  }),
  imperativo_neg: R('uma proibição (no tomes, no comas, no hagas, no te preocupes…)', (t, k) => {
    const c = C(k);
    if (/ no (toma|come|hace|haz|vai|va|sale|fuma|bebe) (café|eso|esto|dulces|alcohol|sin|tanto|al) /.test(c)) return 'O negativo muda a vogal: <b>no tomes</b>, <b>no comas</b>, <b>no hagas</b>, <b>no vayas</b>.';
    if (/ no (preocúpate|tómalo|hazlo|dímelo) /.test(c)) return 'No negativo, o pronome vai antes: <b>no te preocupes</b>, <b>no lo hagas</b>.';
    return need(/ no (\p{L}+ )?(\p{L}+(es|as)|tome|coma|haga|vaya|toque|salga|fume) /u.test(c), 'Proíba: <b>No tomes</b> café. <b>No hagas</b> eso. <b>No te preocupes</b>.');
  }),
  emergencia: R('uma frase de emergência (¡Ayuda!, llame a …, se cayó, urgencias…)', (t, k) => {
    const c = C(k);
    if (/ (caió|caiu|desmaiou) /.test(c)) return 'Em espanhol: se <b>cayó</b> (caiu), se <b>desmayó</b> (desmaiou).';
    if (/ (llama|chame) a (una ambulancia|la policía) /.test(c) && / (usted|señor|señora) /.test(c)) return 'Com usted: <b>llame</b> a una ambulancia.';
    return need(/ (ayuda|auxilio|llame|ambulancia|emergencia|urgencias|se cayó|se desmayó|se cortó|sangrando|respirar|respira|contesta|accidente|policía|seguro) /.test(c), 'Peça ajuda: ¡<b>Ayuda</b>! ¡<b>Llame a una ambulancia</b>! <b>Se cayó</b>.');
  }),
  ausencia: R('uma frase de aviso de ausência (no voy a poder ir, reposo, perdón por las molestias…)', (t, k) => {
    const c = C(k);
    if (/ (me|te) duele (mi|tu) /.test(c)) return 'Com partes do corpo, use o artigo: me duele <b>la</b> cabeza.';
    if (/ perdón para /.test(c)) return 'Desculpas levam <b>por</b>: perdón <b>por</b> las molestias.';
    if (/ no vou /.test(c)) return 'Em espanhol, <b>voy</b>: no <b>voy</b> a poder ir.';
    return need(/ (no voy a poder|no puedo|avisarte|avisarle|me siento|duele|duelen|fiebre|reposo|justificante|médico|te mando|perdón|molestias|comprensión|volver|enferma|enfermo) /.test(c), 'Avise: Hoy <b>no voy a poder</b> ir. / <b>Perdón por las molestias</b>.');
  }),
  // ---------- Módulo 12 ----------
  hotel: R('uma frase de hotel (quisiera reservar, habitación, ¿está incluido …?)', (t, k) => {
    const c = C(k);
    if (/ (el|un) habitación /.test(c)) return '<b>habitación</b> é feminino: <b>la</b> habitación, <b>una</b> habitación.';
    if (/ em nome de /.test(c)) return 'Em espanhol: <b>a nombre de</b>.';
    if (/ (quarto|café da manhã) /.test(c)) return 'Isso é português. Em espanhol: <b>habitación</b>, <b>desayuno</b>.';
    return need(/ (quisiera|reservar|reserva|habitación|desayuno|incluido|noche|noches|pasaporte|piso|llave|toalla|salida|recepción|wifi|vista) /.test(c), 'No hotel: <b>Quisiera reservar</b> una <b>habitación</b> doble.');
  }),
  aeropuerto: R('uma frase de aeroporto (facturar, puerta, vuelo, retrasado…)', (t, k) => {
    const c = C(k);
    if (/ (despachar|atrasado|portão) /.test(c)) return 'Isso é português. Em espanhol: <b>facturar</b>, <b>retrasado</b>, <b>puerta</b>.';
    return need(/ (facturar|maleta|equipaje|vuelo|puerta|embarque|retrasado|cancelado|escala|aduana|migración|ventanilla|pasillo|asiento|cinta) /.test(c), 'No aeroporto: <b>facturar</b> la maleta / la <b>puerta</b> de embarque / el <b>vuelo</b> está <b>retrasado</b>.');
  }),
  problemas_viaje: R('um problema de viagem (no funciona, se me perdió, me robaron, una queja…)', (t, k) => {
    const c = C(k);
    if (/ (perdí|olvidé) (el|la|mi|los|las) /.test(c) && !/ se me /.test(c)) return 'Funciona, mas o natural é mostrar que foi sem querer: <b>se me perdió</b> el pasaporte.';
    if (/ se me (perdieron|olvidaron|rompieron) (el|la) /.test(c)) return 'Com um objeto, o verbo fica no singular: se me <b>perdió</b> el pasaporte.';
    if (/ se me (perdió|olvidó|rompió) (los|las) /.test(c)) return 'Com plural, o verbo vai para o plural: se me <b>perdieron</b> las llaves.';
    if (/ (roubaram|reclamação) /.test(c)) return 'Isso é português. Em espanhol: <b>me robaron</b>, <b>una queja</b>.';
    return need(/ (no funciona|se me|me robaron|robaron|queja|denuncia|ruido|sucia|sucio|roto|rota|agua caliente|bloquear|cambiar de habitación|devolver) /.test(c), 'Explique o problema: … <b>no funciona</b>. / <b>Se me perdió</b> … / <b>Me robaron</b> …');
  }),
  condicional: R('um pedido educado no condicional (podría, me gustaría, sería, le importaría…)', (t, k) => {
    const c = C(k);
    if (/ (podería|gustaria|seria|poderia|tendria|haria) /.test(c)) return 'Confira a forma: <b>podría</b>, <b>gustaría</b>, <b>sería</b> (com acento no í).';
    if (/ le importaría de /.test(c)) return '¿Le importaría + infinitivo, sem "de": ¿Le importaría <b>abrir</b> la ventana?';
    return need(has(k, /\p{L}+(ría|rías|ríamos|rían)$/u), 'Peça com educação: ¿<b>Podría</b> …? / Me <b>gustaría</b> … / ¿<b>Sería</b> posible …?');
  }),
  clima: R('uma frase sobre o tempo (hace calor, llueve, está nublado, va a llover…)', (t, k) => {
    const c = C(k);
    if (/ está (mucho )?(calor|frío|sol|viento|fresco) /.test(c)) return 'Com calor, frio, sol e vento, use <b>hace</b>: <b>hace</b> calor.';
    if (/ hace muy (calor|frío|viento|sol) /.test(c)) return 'calor, frío e viento são substantivos: <b>mucho</b> calor, <b>mucho</b> frío.';
    if (/ llovendo /.test(c)) return 'O gerúndio é <b>lloviendo</b>.';
    return need(/ (hace|hará|llueve|lloviendo|llover|nieva|nevando|nublado|despejado|tormenta|niebla|grados|tiempo|calor|frío|temporada) /.test(c), 'Fale do tempo: <b>Hace</b> calor. <b>Llueve</b>. <b>Está nublado</b>.');
  }),
  resena_hotel: R('uma frase de avaliação de hotel (nos quedamos, era, lo mejor, volvería…)', (t, k) => {
    const c = C(k);
    if (/ (ficamos|fiquei) /.test(c)) return 'Isso é português. Em espanhol: <b>nos quedamos</b>, <b>me quedé</b>.';
    if (/ (recomendaria|volveria) /.test(c)) return 'O condicional leva acento: recomend<b>aría</b>, volv<b>ería</b>.';
    return need(/ (nos quedamos|me quedé|quedamos|era|eran|estaba|había|hacía|lo mejor|lo peor|recomendaría|volvería|personal|ubicación|habitación|no funcionaba|fue) /.test(c), 'Avalie: <b>Nos quedamos</b> … / La habitación <b>era</b> … / <b>Volvería</b>.');
  }),
  // ---------- Módulo 13 ----------
  futuro: R('um plano ou previsão no <b>futuro simples</b> (viajaré, haré, tendré…)', (t, k) => {
    const c = C(k);
    if (/ (viajarei|farei|terei|irei|estarei|poderei|viajaremos) /.test(c) && / (viajarei|farei|terei|irei|estarei|poderei) /.test(c)) return 'Isso é português. Em espanhol: <b>viajaré</b>, <b>haré</b>, <b>tendré</b>, <b>iré</b>.';
    if (/ (hacerá|teneré|poderé|saliré|veniré|deciré|hacerás|tenerás|poderás) /.test(c)) return 'Esse futuro é irregular: <b>haré</b>, <b>tendré</b>, <b>podré</b>, <b>saldré</b>, <b>vendré</b>, <b>diré</b>.';
    return need(has(k, /\p{L}+r(é|ás|á|emos|án)$/u) || / (voy a|vas a|va a|vamos a|van a) /.test(c), 'Use o futuro: El año que viene <b>viajaré</b> … / Mañana <b>hará</b> sol.');
  }),
  aceptar: R('convidar, aceitar ou recusar (¿te gustaría …?, me encantaría, lo siento, es que …)', (t, k) => {
    const c = C(k);
    if (/ é que /.test(c)) return 'Em espanhol: <b>es que</b>, sem acento.';
    if (/ te gustaría de /.test(c)) return '¿Te gustaría + infinitivo, sem "de": ¿Te gustaría <b>ir</b> al cine?';
    return need(/ (te gustaría|qué tal si|te animas|quieres|me encantaría|dale|claro|me parece bien|lo siento|es que|otro día|quedamos|quedar|paso por ti|pero no puedo|no puedo) /.test(c), 'Convide ou responda: ¿<b>Te gustaría</b> …? / ¡<b>Me encantaría</b>! / <b>Lo siento, es que</b> …');
  }),
  fiestas: R('uma frase sobre uma festa (se celebra, la gente baila, es una tradición…)', (t, k) => {
    const c = C(k);
    if (/ la gente (bailan|ponen|comen|cantan|se disfrazan|celebran|son|van) /.test(c)) return '<b>la gente</b> é singular em espanhol: la gente <b>baila</b>, la gente <b>pone</b>.';
    if (/ (é celebrado|é celebrada) /.test(c)) return 'Em espanhol, com o se: <b>se celebra</b>.';
    return need(/ (se celebra|se festeja|fiesta|fiestas|tradición|carnaval|desfile|desfiles|altares|disfraza|disfraz|baila|celebramos|recordamos|feriado|colorida|alegre) /.test(c), 'Descreva a festa: <b>Se celebra</b> en … / <b>La gente baila</b> … / Es una <b>tradición</b> …');
  }),
  espero_que: R('um desejo para alguém (espero que + subjuntivo, ¡que te vaya bien!…)', (t, k) => {
    const c = C(k);
    if (/ espero que (vienes|vendrás|tienes|tendrás|puedes|te gusta|te gustará|llegas|pasas|me llamas) /.test(c)) return 'Depois de <b>espero que</b>, o subjuntivo: que <b>vengas</b>, que <b>tengas</b>, que te <b>guste</b>.';
    if (/ que lo pasas /.test(c)) return 'É subjuntivo: ¡Que lo <b>pases</b> bien!';
    return need(/ (espero que|que te vaya|que lo pases|que te mejores|que tengas|que disfrutes|espero llegar|espero) /.test(c), 'Deseje: <b>Espero que vengas</b>. / ¡<b>Que te vaya bien</b>!');
  }),
  ojala: R('uma esperança com <b>ojalá</b> + subjuntivo', (t, k) => {
    const c = C(k);
    if (/ ojalá (que )?(no )?(hará|hace|llueve|lloverá|puedes|podrás|puedo|tenemos|ganamos|gana|sale|es|va) /.test(c)) return 'Depois de <b>ojalá</b>, o subjuntivo: ojalá <b>haga</b>, ojalá no <b>llueva</b>, ojalá <b>puedas</b>.';
    if (/ tomara /.test(c)) return 'Em espanhol, "tomara" é <b>ojalá</b>.';
    return need(/ ojalá /.test(c), 'Use <b>ojalá</b> + subjuntivo: <b>Ojalá</b> haga sol.');
  }),
  blog: R('uma frase de post (iré, se celebra, cuéntenme, espero que, ojalá…)', (t, k) => {
    const c = C(k);
    if (/ (irei|estarei|viajarei) /.test(c)) return 'Isso é português. Em espanhol: <b>iré</b>, <b>estaré</b>, <b>viajaré</b>.';
    if (/ la gente (bailan|se disfrazan|ponen) /.test(c)) return '<b>la gente</b> é singular: la gente <b>baila</b>.';
    if (/ ojalá (que )?(hará|hace|llueve|lloverá) /.test(c)) return 'Depois de <b>ojalá</b>, o subjuntivo: ojalá <b>haga</b>, ojalá no <b>llueva</b>.';
    return need(has(k, /\p{L}+r(é|ás|á|emos|án)$/u) || / (se celebra|la gente|alguien|cuéntenme|espero que|ojalá|nos vemos|hola|post|blog) /.test(c), 'Escreva o post: <b>Iré</b> a … / <b>Se celebra</b> … / <b>Ojalá</b> …');
  }),
  // ---------- Módulo 14 ----------
  opinion: R('uma opinião (creo que, me parece que, para mí, no creo que + subjuntivo…)', (t, k) => {
    const c = C(k);
    if (/ acho que /.test(c)) return 'Isso é português. Em espanhol: <b>creo que</b>.';
    if (/ no (creo|pienso) que (es|tiene|está|hay|va|puede|llueve) /.test(c)) return 'Com opinião negativa, o subjuntivo: no creo que <b>sea</b>, <b>tenga</b>, <b>esté</b>, <b>haya</b>, <b>llueva</b>.';
    if (/ (creo|pienso) que (sea|tenga|esté|haya) /.test(c) && !/ no (creo|pienso) /.test(c)) return 'Com opinião afirmativa, o indicativo: creo que <b>es</b>, <b>tiene</b>.';
    return need(/ (creo que|pienso que|me parece que|para mí|en mi opinión|qué opinas|qué te parece|qué piensas|no creo que|tienes razón) /.test(c), 'Dê a sua opinião: <b>Creo que</b> … / <b>Para mí</b>, … / <b>No creo que</b> sea …');
  }),
  acuerdo: R('concordar ou discordar (estoy de acuerdo, tienes razón, yo no lo veo así…)', (t, k) => {
    const c = C(k);
    if (/ (soy|tengo) de acuerdo /.test(c)) return 'Com acuerdo, use <b>estar</b>: <b>estoy</b> de acuerdo.';
    if (/ (concordo|concuerdo) (com|con) /.test(c)) return 'O natural é <b>estoy de acuerdo con</b> …';
    if (/ con (tú|ti) /.test(c)) return '"Com você" é <b>contigo</b>.';
    return need(/ (de acuerdo|tienes razón|tiene razón|toda la razón|exacto|claro|por supuesto|no lo veo así|depende|en parte|al contrario|sí pero) /.test(c) || / pero /.test(c), 'Responda: <b>Estoy de acuerdo</b>. / <b>Tienes razón</b>. / <b>Yo no lo veo así</b>.');
  }),
  conectores: R('uma frase com conectores (aunque, sin embargo, además, por eso, por un lado…)', (t, k) => {
    const c = C(k);
    if (/ ademas /.test(c)) return '<b>además</b> leva acento.';
    if (/ (embora|no entanto|além disso|por isso) /.test(c)) return 'Isso é português. Em espanhol: <b>aunque</b>, <b>sin embargo</b>, <b>además</b>, <b>por eso</b>.';
    return need(/ (aunque|pero|sin embargo|además|también|por eso|así que|por un lado|por otro|en conclusión|en resumen) /.test(c), 'Use um conector: <b>Aunque</b> … / <b>Sin embargo</b>, … / <b>Además</b>, …');
  }),
  noticias: R('uma frase sobre notícias (según, ha habido, ¿viste que …?, ¡no me digas!…)', (t, k) => {
    const c = C(k);
    if (/ segundo (el|la|los|las) (periódico|radio|expertos|noticias|gobierno) /.test(c)) return 'A fonte é <b>según</b>: <b>según</b> el periódico.';
    if (/ ha hubo /.test(c)) return 'É <b>ha habido</b> (ou <b>hubo</b>).';
    return need(/ (según|ha habido|hubo|viste|no me digas|qué barbaridad|qué pena|qué bien|anunció|suben|bajan|gana|ganó|noticias|periódico|huelga|accidente|gobierno|precios|llega) /.test(c), 'Conte ou comente: <b>Según</b> el periódico, … / ¿<b>Viste que</b> …? / ¡<b>No me digas</b>!');
  }),
  dele_a2: R('uma frase sobre a prova (examen, prueba, aprobar, lectura, oral…)', (t, k) => need(/ (examen|prueba|pruebas|aprobar|apto|grupo|grupos|lectura|auditiva|escritas|orales|oral|individual|instrucciones|preguntas|palabras|cronómetro|minutos|dele|dura) /.test(C(k)), 'Fale da prova: El <b>examen</b> tiene cuatro <b>pruebas</b>. / Hay que <b>aprobar</b> …')),
  foro: R('uma frase de comentário (estoy de acuerdo con, creo que, por un lado, en conclusión…)', (t, k) => {
    const c = C(k);
    if (/ (soy|tengo) de acuerdo /.test(c)) return 'Com acuerdo, use <b>estar</b>: <b>estoy</b> de acuerdo.';
    if (/ acho que /.test(c)) return 'Isso é português. Em espanhol: <b>creo que</b>.';
    if (/ en conclusion /.test(c)) return '<b>conclusión</b> leva acento.';
    return need(/ (de acuerdo|como dice|creo que|en mi opinión|para mí|por un lado|por otro|además|sin embargo|por ejemplo|en conclusión|en resumen|depende|saludos|no creo que|pero) /.test(c), 'Comente: <b>Estoy de acuerdo con</b> … / <b>Por un lado</b> … / <b>En conclusión</b> …');
  }),
  // ---------- Módulo 15 ----------
  narrar: R('uma frase de história (imperfecto para o cenário, indefinido para os fatos)', (t, k) => {
    const c = C(k);
    if (/ (fiquei|percebi) /.test(c)) return 'Isso é português. Em espanhol: <b>me puse</b> (fiquei), <b>me di cuenta</b> (percebi).';
    if (/ me (quedé|quede) (nervios[oa]|triste|roj[oa]|feliz) /.test(c)) return 'Para emoções, "ficar" é <b>ponerse</b>: <b>me puse</b> nerviosa.';
    if (/ me di cuenta que /.test(c)) return 'darse cuenta pede <b>de</b>: me di cuenta <b>de que</b> …';
    const imp = has(k, /\p{L}+(aba|aban|ía|ían)$/u) || has(k, /^(era|había|estaba|iba)$/);
    const ind = has(k, /\p{L}+(é|ó|í|ió|aron|ieron)$/u) || has(k, /^(fui|fue|hice|hizo|tuve|vino|dijo|pude|vi|vio|puse|di|dio)$/);
    return need(imp || ind, 'Conte: <b>Era</b> tarde … / <b>Abrí</b> la puerta … / Me <b>di cuenta</b> de que …');
  }),
  pluscuamperfecto: R('o passado do passado (había + particípio)', (t, k) => {
    const c = C(k);
    if (/ (tenía|tenías|teníamos|tenían) (\p{L}*(ado|ido)|hecho|visto|dicho|escrito|vuelto|puesto) /u.test(c)) return 'O auxiliar é <b>haber</b>: <b>había</b> comido (e não "tenía comido").';
    if (/ hubo (\p{L}*(ado|ido)) /u.test(c)) return 'Use <b>había</b> + particípio: <b>había</b> terminado.';
    return need(/ (había|habías|habíamos|habían) (\p{L}*(ado|ido)|hecho|visto|dicho|escrito|vuelto|puesto|abierto|roto) /u.test(c) || / se había /.test(c), 'Use o pluscuamperfecto: Cuando llegué, ya <b>había</b> terminado.');
  }),
  conectores_narr: R('uma frase com conector de narrativa (al principio, luego, de pronto, en cuanto, por fin…)', (t, k) => {
    const c = C(k);
    if (/ (no começo|assim que|enquanto isso|finalmente|de repente) /.test(c) && / (no começo|assim que|enquanto isso) /.test(c)) return 'Isso é português. Em espanhol: <b>al principio</b>, <b>en cuanto</b>, <b>mientras tanto</b>.';
    if (/ en el principio /.test(c)) return 'O natural é <b>al principio</b>.';
    return need(/ (al principio|primero|luego|después|más tarde|al rato|de pronto|de repente|en cuanto|mientras tanto|mientras|al final|por fin|finalmente|total que|al día siguiente|a la mañana siguiente|esa mañana|esa noche|entonces|resulta que) /.test(c), 'Use um conector: <b>Al principio</b> … / <b>De pronto</b> … / <b>Por fin</b> …');
  }),
  anecdota: R('uma frase de anedota ou reação (resulta que, a punto de, ¡qué fuerte!…)', (t, k) => {
    const c = C(k);
    if (/ verguenza /.test(c)) return '<b>vergüenza</b> leva trema: ver<b>güe</b>nza.';
    if (/ a ponto de /.test(c)) return 'Em espanhol: <b>a punto de</b>.';
    return need(/ (sabes qué|te conté|resulta que|a punto de|de pronto|qué fuerte|qué vergüenza|qué susto|en serio|no me digas|qué hiciste|me morí de risa|metí la pata|al final|nunca más) /.test(c) || has(k, /\p{L}+(é|ó|í|ió|aba|ía)$/u), 'Conte ou reaja: <b>Resulta que</b> … / <b>Estaba a punto de</b> … / ¡<b>Qué vergüenza</b>!');
  }),
  leyenda: R('uma frase de lenda (había una vez, cuenta la leyenda, se dice que, se convirtió en…)', (t, k) => {
    const c = C(k);
    if (/ (era una vez|diz a lenda) /.test(c)) return 'Em espanhol: <b>Había una vez</b>, <b>Cuenta la leyenda que</b>.';
    if (/ se convirtió (piedra|volcán|montaña|árbol|pez|animal|un|una) /.test(c)) return 'convertirse pede <b>en</b>: se convirtió <b>en</b> piedra.';
    return need(/ (había una vez|cuenta la leyenda|se dice que|hace muchos años|desde entonces|y por eso|se convirtió en|los convirtieron en|convirtió) /.test(c) || has(k, /\p{L}+(aba|ía|ían|é|ó|ió|aron|ieron)$/u), 'Conte a lenda: <b>Había una vez</b> … / <b>Cuenta la leyenda que</b> …');
  }),
  relato: R('uma frase de relato (cenário, fatos, había + particípio, conectores, desfecho)', (t, k) => {
    const c = C(k);
    if (/ (tenía|tenían) (\p{L}*(ado|ido)) /u.test(c)) return 'O auxiliar é <b>haber</b>: <b>había</b> perdido.';
    if (/ me (quedé|quede) (nervios[oa]|triste) /.test(c)) return 'Para emoções, use <b>ponerse</b>: <b>me puse</b> nerviosa.';
    return need(has(k, /\p{L}+(aba|ía|ían|é|ó|ió|aron|ieron)$/u) || / (había|era|fue|fui|hice|tuve|vi|desde entonces|al final|de pronto|al principio|nunca olvidaré|aquella|aquel) /.test(c), 'Conte o relato: <b>Aquella mañana</b> … / … ya se <b>había</b> ido / <b>Desde entonces</b> …');
  }),
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
