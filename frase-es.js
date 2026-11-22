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
  // ---------- Módulo 16 ----------
  subjuntivo: R('uma frase com o presente do <b>subjuntivo</b> (que tengas, espero que sea, ojalá…)', (t, k) => {
    const c = C(k);
    if (/ (conosca|conoscas|tenas|hacas|salas|dormas|seja|esteja|tenha) /.test(c)) return 'Confira a forma: <b>conozca</b>, <b>tengas</b>, <b>hagas</b>, <b>salgas</b>, <b>duermas</b>, <b>sea</b>, <b>esté</b>.';
    if (/ (espero que|ojalá|que) (tienes|eres|estás|puedes|haces|conoces|sabes|vas) /.test(c) && / (espero que|ojalá) /.test(c)) return 'Depois de <b>espero que</b> e <b>ojalá</b>, o subjuntivo: <b>tengas</b>, <b>seas</b>, <b>estés</b>, <b>puedas</b>.';
    return need(/ (que|ojalá) /.test(c), 'Use o subjuntivo: <b>Que tengas</b> suerte. / <b>Espero que sea</b> verdad.');
  }),
  influencia: R('um pedido sobre outra pessoa (quiero que, necesito que, te pido que + subjuntivo)', (t, k) => {
    const c = C(k);
    if (/ (quiero|quieres|quiere|queremos|quieren|necesito|necesitas|prefiero|pido|pide|piden|digo) que (vienes|me ayudas|me llamas|llegan|estudio|te preocupas|vas|haces|tienes|eres|estás) /.test(c)) return 'Quando outra pessoa faz, o subjuntivo: que <b>vengas</b>, que me <b>ayudes</b>, que <b>lleguen</b>.';
    if (/ (quiero|necesito|prefiero) que (vaya|ir) a /.test(c) && / yo /.test(c)) return 'Se é você mesma, use o infinitivo: <b>quiero ir</b>.';
    if (/ (digo|pido) para (él|ella|ellos|ti|usted) /.test(c)) return 'Em espanhol: <b>le digo que</b> venga, <b>te pido que</b> esperes.';
    return need(/ (quiero que|quieres que|quiere que|quieren que|necesito que|prefiero que|te pido que|le pido que|les pido que|me piden que|les digo que|le digo que|no quiero que|quiero|prefiero|necesito) /.test(c), 'Peça: <b>Quiero que</b> vengas. / <b>Te pido que</b> me ayudes.');
  }),
  emocion_sub: R('uma emoção sobre o outro (me alegra que, me molesta que, me preocupa que + subjuntivo)', (t, k) => {
    const c = C(k);
    if (/ me (alegra|molesta|preocupa|encanta|sorprende|da pena) que (estás|llegas|duermes|hay|te vas|vienes|tienes|eres) /.test(c)) return 'Com emoção sobre o outro, o subjuntivo: que <b>estés</b>, <b>llegues</b>, <b>duermas</b>, <b>haya</b>.';
    if (/ (yo )?(alegro|molesto|preocupo) que /.test(c) && !/ me /.test(c)) return 'Funciona como gustar: <b>me alegra</b>, <b>me molesta</b>, <b>me preocupa</b>.';
    return need(/ (alegra|molesta|preocupa|encanta|sorprende|da pena|miedo de que|odio que|siento que|da igual que|pone nervioso|pone nerviosa) /.test(c), 'Reaja: <b>Me alegra que</b> estés aquí. / <b>Me molesta que</b> llegues tarde.');
  }),
  valoracion: R('uma expressão impessoal (es importante que + subjuntivo / es verdad que + indicativo)', (t, k) => {
    const c = C(k);
    if (/ es (importante|necesario|mejor|normal|posible|raro|una pena) que (duermes|sales|salimos|estás|llueve|puedes|vienes|tienes|es) /.test(c)) return 'Expressões de valor pedem subjuntivo: que <b>duermas</b>, <b>salgamos</b>, <b>estés</b>, <b>llueva</b>, <b>puedas</b>.';
    if (/ (es verdad|es cierto|está claro|es evidente) que (sea|tengas|estés|haya|puedas) /.test(c) && !/ no (es verdad|es cierto|está claro) /.test(c)) return 'Fato afirmado pede indicativo: es verdad que <b>es</b>, que <b>tienes</b>.';
    return need(/ (es importante|es necesario|es mejor|es normal|es posible|es raro|es una pena|es verdad|es cierto|está claro|es evidente|hace falta) /.test(c), 'Use: <b>Es importante que</b> … / <b>Es verdad que</b> …');
  }),
  aconsejar: R('um conselho (te aconsejo que + subjuntivo, yo que tú + condicional, ¿por qué no …?)', (t, k) => {
    const c = C(k);
    if (/ te (aconsejo|recomiendo|sugiero) que (hablas|descansas|buscas|esperas|llamas|vas|le dices|piensas) /.test(c)) return 'Depois de <b>te aconsejo que</b>, o subjuntivo: <b>hables</b>, <b>descanses</b>, <b>busques</b>.';
    if (/ yo que tú (busco|hablo|hago|digo|voy|busque|hable|haga) /.test(c)) return 'Depois de <b>yo que tú</b>, o condicional: <b>buscaría</b>, <b>hablaría</b>, <b>haría</b>.';
    if (/ te aconsejo a /.test(c)) return 'Em espanhol: <b>te aconsejo que</b> + subjuntivo.';
    return need(/ (te aconsejo|te recomiendo|te sugiero|yo que tú|yo en tu lugar|por qué no|lo mejor es) /.test(c) || has(k, /\p{L}+ría$/u), 'Aconselhe: <b>Te aconsejo que</b> hables … / <b>Yo que tú</b>, buscaría …');
  }),
  consultorio: R('uma frase de resposta de conselhos (es normal que, te aconsejo que, yo que tú, espero que…)', (t, k) => {
    const c = C(k);
    if (/ es normal que (te sientes|estás|tienes) /.test(c)) return 'Depois de <b>es normal que</b>, o subjuntivo: te <b>sientas</b>, <b>estés</b>, <b>tengas</b>.';
    if (/ yo que tu /.test(c)) return '<b>tú</b> leva acento: yo que <b>tú</b>.';
    if (/ te aconsejo que (hablas|le dices|esperas) /.test(c)) return 'Depois de <b>te aconsejo que</b>, o subjuntivo: <b>hables</b>, <b>le digas</b>.';
    return need(/ (querido|querida|es normal que|entiendo que|te aconsejo|te recomiendo|yo que tú|yo en tu lugar|lo mejor es|es importante que|es necesario que|espero que|ojalá|un abrazo) /.test(c), 'Responda: <b>Es normal que</b> … / <b>Te aconsejo que</b> … / <b>Espero que</b> …');
  }),
  // ---------- Módulo 17 ----------
  cuando_sub: R('cuando + subjuntivo para o futuro (cuando tenga, cuando sea…)', (t, k) => {
    const c = C(k);
    if (/ cuando (\p{L}+(ré|rás|rá|remos|rán)) /u.test(c) && !/ ¿?cuándo /.test(c)) return 'Depois de <b>cuando</b>, nunca futuro: cuando <b>tenga</b>, cuando <b>sea</b>.';
    if (/ cuando (tengo|termino|llego|soy|vuelvo|tienes|terminas|vuelves) [^ ]+ .*\p{L}+(ré|rás|rá|remos|rán) /u.test(c)) return 'Se a outra parte é futuro, cuando pede subjuntivo: cuando <b>tenga</b>, cuando <b>termine</b>.';
    return need(/ (cuando|cuándo) /.test(c), 'Use cuando: <b>Cuando tenga</b> tiempo, te llamaré.');
  }),
  temporales: R('uma oração de tempo (en cuanto, hasta que, mientras, antes de que…)', (t, k) => {
    const c = C(k);
    if (/ (en cuanto|hasta que|antes de que|tan pronto como) (\p{L}+(ré|rás|rá|remos|rán)) /u.test(c)) return 'Com futuro, essas palavras pedem subjuntivo: en cuanto <b>llegue</b>, hasta que <b>termines</b>.';
    if (/ hasta (tú|usted|él|ella) (terminar|llegar|volver) /.test(c)) return 'Em espanhol: <b>hasta que termines</b>.';
    return need(/ (en cuanto|hasta que|antes de que|después de que|mientras|tan pronto como|antes de|después de) /.test(c), 'Use: <b>En cuanto</b> llegue … / <b>Hasta que</b> termines …');
  }),
  prediccion: R('uma previsão (futuro, seguramente, es probable que, quizás, a lo mejor…)', (t, k) => {
    const c = C(k);
    if (/ habrán /.test(c)) return 'O futuro de hay é <b>habrá</b>, no singular: <b>habrá</b> más robots.';
    if (/ a lo mejor (sea|haya|tengamos|vivamos|trabajemos|existan) /.test(c)) return 'Depois de <b>a lo mejor</b>, o indicativo: a lo mejor <b>es</b>, <b>hay</b>, <b>vivimos</b>.';
    if (/ es probable que (\p{L}+(ré|rás|rá|remos|rán)|trabajamos|vivimos|hay|es) /u.test(c)) return 'Depois de <b>es probable que</b>, o subjuntivo: <b>trabajemos</b>, <b>haya</b>, <b>sea</b>.';
    return need(has(k, /\p{L}+(ré|rás|rá|remos|rán)$/u) || / (seguramente|probablemente|sin duda|es probable|es posible|quizás|tal vez|a lo mejor|no creo que|habrá) /.test(c), 'Preveja: En 2050 <b>habrá</b> … / <b>Es probable que</b> …');
  }),
  planes: R('um plano ou intenção (pienso + infinitivo, tengo pensado, estoy pensando en, voy a…)', (t, k) => {
    const c = C(k);
    if (/ pienso en (viajar|mudarme|estudiar|hacer|cambiar|abrir|ir|empezar|comprar) /.test(c)) return 'Para planos, <b>pensar</b> + infinitivo, sem en: <b>pienso viajar</b>.';
    if (/ tengo pensando /.test(c)) return 'É <b>tengo pensado</b> (particípio).';
    if (/ estoy pensando (viajar|cambiar|mudarme|hacer|estudiar) /.test(c)) return '<b>Estar pensando</b> pede <b>en</b>: estoy pensando <b>en</b> cambiar …';
    return need(/ (pienso|piensas|piensa|tengo pensado|tienes pensado|intención de|estoy pensando en|voy a|vas a|va a|vamos a|plan|planes|todavía no sé|depende) /.test(c), 'Conte o plano: <b>Pienso</b> viajar … / <b>Tengo pensado</b> mudarme …');
  }),
  condicion_real: R('uma condição real (si + presente) ou uma promessa', (t, k) => {
    const c = C(k);
    if (/ si (llueva|tengas|tenga|pueda|puedas|haga|esté|estés|sea|seas|vaya|vayas) /.test(c)) return 'Depois de <b>si</b>, o indicativo: si <b>llueve</b>, si <b>tienes</b>, si <b>puedes</b>.';
    if (/ si (\p{L}+(ré|rás|rá|remos|rán)) /u.test(c)) return 'Depois de <b>si</b>, nunca futuro: si <b>llueve</b>, si <b>tienes</b>.';
    if (/ (siempre que|a menos que) (llueve|me lo pides|tienes|puedes) /.test(c)) return '<b>siempre que</b> e <b>a menos que</b> pedem subjuntivo: a menos que <b>llueva</b>.';
    return need(/ (si|te prometo|te juro|prometo|siempre que|a menos que|en caso de que) /.test(c), 'Use: <b>Si</b> llueve, … / <b>Te prometo que</b> …');
  }),
  carta_futuro: R('uma frase de carta para o futuro (cuando leas, seguramente, tengo pensado, si, espero que…)', (t, k) => {
    const c = C(k);
    if (/ cuando (leerás|lees|abrirás|tendrás) /.test(c)) return 'Com cuando + futuro, o subjuntivo: cuando <b>leas</b>.';
    if (/ si (estés|tengas|vivas|sigas|seas) /.test(c)) return 'Depois de <b>si</b>, o indicativo: si <b>estás</b>, si <b>tienes</b>.';
    return need(has(k, /\p{L}+(ré|rás|rá|remos|rán)$/u) || / (cuando|seguramente|es probable|a lo mejor|tengo pensado|pienso|si|espero que|ojalá|no olvides|no te rindas|con cariño|querida|querido) /.test(c), 'Escreva: <b>Cuando leas</b> esta carta, … / <b>Espero que</b> …');
  }),
  // ---------- Módulo 18 ----------
  imperf_sub: R('uma frase com o imperfeito do subjuntivo (tuviera, fuera, pudiera…)', (t, k) => {
    const c = C(k);
    if (/ (pudieramos|tuvieramos|fueramos|hablaramos|hicieramos) /.test(c)) return 'Com nosotros, acento: <b>pudiéramos</b>, <b>tuviéramos</b>, <b>fuéramos</b>.';
    if (/ (tenería|tenera|podiera|hacera|sabiera|decera) /.test(c)) return 'Use o ellos do indefinido: <b>tuviera</b>, <b>pudiera</b>, <b>hiciera</b>, <b>supiera</b>, <b>dijera</b>.';
    if (/ si (tendría|sería|podría|haría|estaría|sabría) /.test(c)) return 'Depois de <b>si</b>, o imperfeito do subjuntivo: si <b>tuviera</b>, si <b>fuera</b>.';
    return need(has(k, /\p{L}+(ra|ras|ramos|ran|se|ses|semos|sen)$/u) && / (si|ojalá|que|como si) /.test(c), 'Use o imperfeito do subjuntivo: Si <b>tuviera</b> …, Si <b>fuera</b> …');
  }),
  si_irreal: R('uma hipótese (si + imperfeito do subjuntivo, condicional)', (t, k) => {
    const c = C(k);
    if (/ si (tendría|sería|podría|haría|estaría|habría|ganaría|viviría|hablaría) /.test(c)) return 'Depois de <b>si</b>, nunca o condicional: si <b>tuviera</b>, si <b>fuera</b>, si <b>ganara</b>.';
    if (/ si (tenga|sea|pueda|gane|viva|hable) /.test(c)) return 'Na hipótese, o imperfeito do subjuntivo: si <b>tuviera</b>, si <b>fuera</b>, si <b>ganara</b>.';
    return need(has(k, /\p{L}+(ría|rías|ríamos|rían)$/u) || / si /.test(c), 'Faça a hipótese: <b>Si ganara</b> la lotería, <b>dejaría</b> de trabajar.');
  }),
  ojala_imperf: R('um desejo improvável (ojalá + imperfeito do subjuntivo) ou como si', (t, k) => {
    const c = C(k);
    if (/ como si (es|sea|está|esté|tiene|tenga|conoce|conozca|pasa|pase|hay|haya) /.test(c)) return 'Depois de <b>como si</b>, sempre o imperfeito do subjuntivo: como si <b>fuera</b>, <b>estuviera</b>, <b>tuviera</b>.';
    if (/ quem dera /.test(c)) return 'Em espanhol: <b>ojalá</b> + imperfeito do subjuntivo, ou <b>¡quién pudiera!</b>';
    return need(/ (ojalá|como si|quién pudiera) /.test(c), 'Use: <b>Ojalá fuera</b> verdad. / Habla <b>como si fuera</b> el jefe.');
  }),
  me_gustaria_que: R('um desejo ou pedido com a concordância dos tempos (me gustaría que vinieras, me pidió que…)', (t, k) => {
    const c = C(k);
    if (/ (me gustaría|preferiría|sería mejor|quisiera|quería|me pidió|le dije|le pedí|me dijo) que (\p{L}+ )?(vengas|fumes|llames|esperes|expliques|tengas|vengan|hables|acompañes|digas) /u.test(c)) return 'Com condicional ou passado, o imperfeito do subjuntivo: que <b>vinieras</b>, <b>fumaras</b>, <b>llamara</b>.';
    if (/ (me gustaría|preferiría) que (\p{L}+(rías|ría|ríamos|rían)) /u.test(c)) return 'Depois de que, o imperfeito do subjuntivo (e não o condicional): que <b>vinieras</b>.';
    return need(/ (me gustaría que|preferiría que|sería mejor que|quisiera que|quería que|me pidió que|le dije que|le pedí que|me dijo que|me gustaría|preferiría|quisiera) /.test(c), 'Use: <b>Me gustaría que</b> vinieras. / <b>Me pidió que</b> lo llamara.');
  }),
  dilemas: R('uma resposta a um dilema (condicional, en ese caso, si + imperfeito do subjuntivo…)', (t, k) => {
    const c = C(k);
    if (/ si (no )?(lo |la |me |te )?(devolvería|haría|diría|mentiría|quedaría) /.test(c)) return 'Depois de <b>si</b>, o imperfeito do subjuntivo: si no lo <b>devolviera</b>, si <b>mintiera</b>.';
    if (/ aunque nadie me (ve|vea|verá) .*\p{L}+ría /u.test(c)) return 'Na hipótese, <b>aunque</b> + imperfeito do subjuntivo: aunque nadie me <b>viera</b>.';
    return need(has(k, /\p{L}+(ría|rías|ríamos|rían)$/u) || / (en ese caso|dependería|imagina|en tu lugar|en mi lugar|si|aunque) /.test(c), 'Responda: <b>Yo, en ese caso, devolvería</b> … / <b>Dependería de</b> …');
  }),
  mundo_ideal: R('uma frase de texto hipotético (si yo fuera, lo primero que haría, si hubiera, ojalá…)', (t, k) => {
    const c = C(k);
    if (/ si (yo )?(sería|sea|soy) /.test(c)) return 'Depois de <b>si</b>, o imperfeito do subjuntivo: si yo <b>fuera</b>.';
    if (/ si (habría|haya) /.test(c)) return 'Depois de <b>si</b>: si <b>hubiera</b> (houvesse).';
    if (/ la gente (usarían|tendrían|caminarían|serían) /.test(c)) return '<b>la gente</b> é singular: la gente <b>usaría</b>.';
    return need(has(k, /\p{L}+(ría|rían|ríamos)$/u) || / (si|ojalá|así|de esta manera|en conclusión|lo primero) /.test(c), 'Escreva: <b>Si yo fuera</b> … / <b>Lo primero que haría</b> … / <b>Si hubiera</b> …');
  }),
  // ---------- Módulo 19 ----------
  trayectoria: R('uma frase de trajetória (me gradué, llevo … + gerúndio, desde hace, estuve a cargo de…)', (t, k) => {
    const c = C(k);
    if (/ hay (\p{L}+ )?(años|meses) /u.test(c)) return 'Para tempo, use <b>hace</b>: <b>hace</b> tres años, <b>desde hace</b> tres años.';
    if (/ llevo (\p{L}+ )?(años|meses) (trabajo|estudio|vivo) /u.test(c)) return 'Com <b>llevar</b>, o gerúndio: llevo tres años <b>trabajando</b>.';
    if (/ me formé (en|como) /.test(c)) return 'O natural é <b>me gradué en</b> (ou me licencié en, na Espanha).';
    return need(/ (me gradué|me licencié|llevo|desde hace|hace|estuve a cargo|me encargaba|coordiné|lideré|empecé como|me ascendieron|me especialicé|hice una maestría) /.test(c), 'Conte: <b>Me gradué en</b> … / <b>Llevo</b> tres años <b>trabajando</b> …');
  }),
  carta_formal: R('uma fórmula de e-mail formal (estimado/a, le escribo para, quedo a su disposición…)', (t, k) => {
    const c = C(k);
    if (/ (te escribo|tu respuesta|quedo a tu disposición) /.test(c)) return 'No e-mail formal, use <b>usted</b>: <b>le</b> escribo, <b>su</b> respuesta.';
    if (/ (prezad[oa]|atenciosamente|fico à disposição) /.test(c)) return 'Isso é português. Em espanhol: <b>Estimado/a</b>, <b>Atentamente</b>, <b>Quedo a su disposición</b>.';
    return need(/ (estimado|estimada|estimados|le escribo|me pongo en contacto|en relación con|le agradecería|podría|quedo a su disposición|quedo a la espera|atentamente|saludos cordiales|adjunto|solicitar) /.test(c), 'Use as fórmulas: <b>Estimada señora</b> …: / <b>Le escribo para</b> … / <b>Atentamente</b>.');
  }),
  pedido_formal: R('um pedido formal (le ruego que, le agradecería que, ¿le importa que …?)', (t, k) => {
    const c = C(k);
    if (/ le agradecería que (me )?(confirme|envíe|responda|llame|tenga|envíen|confirmen) /.test(c)) return 'Depois de <b>le agradecería que</b>, o imperfeito do subjuntivo: <b>confirmara</b>, <b>enviara</b>, <b>respondiera</b>.';
    if (/ le (ruego|importa) que (me )?(disculpa|abro|cambiamos|uso) /.test(c)) return 'Depois de <b>le ruego que</b> / <b>le importa que</b>, o subjuntivo: <b>disculpe</b>, <b>abra</b>, <b>cambiemos</b>.';
    return need(/ (le ruego|le agradecería|le importa|le importaría|me permite|sería posible|disculpe|le pido disculpas|por supuesto|con mucho gusto|no hay problema) /.test(c), 'Peça com formalidade: <b>Le agradecería que</b> … / ¿<b>Le importa que</b> …?');
  }),
  entrevista_b1: R('uma resposta de entrevista (creo que encajo, puedo aportar, cuando trabajaba … tuve que …)', (t, k) => {
    const c = C(k);
    if (/ (me encaixo|consegui) /.test(c)) return 'Isso é português. Em espanhol: <b>encajo</b>, <b>logré</b> / <b>conseguí</b>.';
    return need(/ (creo que|encajo|puedo aportar|por ejemplo|una vez|cuando trabajaba|tuve que|logramos|logré|al final|mi mayor|fortaleza|debilidad|cómo es|próximos pasos|equipo|organizada|organizado|aprendo) /.test(c), 'Responda: <b>Creo que encajo</b> bien porque … / <b>Una vez tuve que</b> …');
  }),
  estudios: R('uma frase sobre estudos (carrera, beca, aprobar, reprobar, sacar una nota…)', (t, k) => {
    const c = C(k);
    if (/ (una|la) bolsa (de estudios|para estudiar) /.test(c)) return 'Bolsa de estudos é <b>beca</b>.';
    if (/ (tiré|tire) (un|una) /.test(c)) return 'Tirar nota é <b>sacar</b>: <b>saqué</b> un nueve.';
    return need(/ (carrera|licenciatura|maestría|máster|doctorado|beca|matriculé|matricularse|aprobé|aprobar|reprobé|reprobar|suspendí|saqué|nota|promedio|semestre|materia|materias|tesis|intercambio|universidad|estudio|estudias) /.test(c), 'Fale dos estudos: <b>Estudio la carrera de</b> … / <b>Conseguí una beca</b> …');
  }),
  motivacion: R('uma frase de carta de motivação (me dirijo a ustedes, me gradué, puedo aportar, les agradecería que…)', (t, k) => {
    const c = C(k);
    if (/ me dirigo /.test(c)) return 'Em espanhol: <b>me dirijo</b> (com j).';
    if (/ (le|les) agradecería que (tengan|tienen|tendrían) /.test(c)) return 'Depois de <b>agradecería que</b>, o imperfeito do subjuntivo: <b>tuvieran</b>.';
    return need(/ (me dirijo|candidatura|solicitud|me gradué|llevo|estuve a cargo|me gustaría|me permitiría|puedo aportar|al regresar|les agradecería|le agradecería|quedo a su disposición|atentamente|estimados) /.test(c), 'Escreva: <b>Me dirijo a ustedes</b> … / <b>Puedo aportar</b> … / <b>Les agradecería que</b> …');
  }),
  // ---------- Módulo 20 ----------
  pasiva: R('uma frase na voz passiva (ser + particípio, por + agente)', (t, k) => {
    const c = C(k);
    if (/ (la|una) (ciudad|catedral|ley|casa|iglesia|novela|película|obra) (fue|será|es|ha sido) \p{L}*(ado|ido) /u.test(c)) return 'O particípio concorda: la ciudad fue fund<b>ada</b>.';
    if (/ (los|las) \p{L}+ fue \p{L}*(ados|adas|idos|idas) /u.test(c)) return 'Com plural, <b>fueron</b>: los puentes <b>fueron</b> construidos.';
    if (/ (fue|fueron) \p{L}*(ado|ada|ados|adas|ido|ida|idos|idas|to|ta|tos|tas) para (el|la|los|las|un|una) [A-ZÁÉÍÓÚ]?\p{L}+ /u.test(c) && / escrit| pintad| diseñad/.test(c)) return 'O agente entra com <b>por</b>: fue escrito <b>por</b> …';
    return need(/ (fue|fueron|será|serán|es|son|ha sido|han sido) \p{L}*(ado|ada|ados|adas|ido|ida|idos|idas|to|ta|tos|tas|cho|cha) /u.test(c), 'Use a passiva: La ciudad <b>fue fundada</b> en … / <b>fue escrito por</b> …');
  }),
  se_pasiva: R('uma frase com se passivo ou impessoal (se vende, se venden, se dice que…)', (t, k) => {
    const c = C(k);
    if (/ se (vende|alquila|necesita|busca|habla) (casas|departamentos|camareros|libros|habitaciones|autos|locales) /.test(c)) return 'O se passivo concorda com a coisa: se <b>venden</b> casas, se <b>necesitan</b> camareros.';
    if (/ se (venden|buscan|necesitan) a /.test(c)) return 'Com pessoas, o verbo fica no singular: se <b>busca</b> a dos personas.';
    if (/ (vende-se|aluga-se|precisa-se) /.test(c)) return 'Isso é português. Em espanhol: <b>se vende</b>, <b>se alquila</b>, <b>se necesita</b>.';
    return need(/ se \p{L}+ /u.test(c), 'Use o se: <b>Se venden</b> casas. / Aquí <b>se vive</b> bien.');
  }),
  proceso: R('uma etapa de processo (primero se …, después se …, por último se …)', (t, k) => {
    const c = C(k);
    if (/ se (recoge|seca|tuesta|muele|mezcla|empaqueta) (los|las) /.test(c)) return 'O se concorda com a coisa: se <b>recogen</b> los granos, se <b>secan</b> las semillas.';
    if (/ por ultimo /.test(c)) return '<b>último</b> leva acento: por <b>último</b>.';
    return need(/ (primero|después|luego|a continuación|más tarde|por último|finalmente|se) /.test(c), 'Descreva a etapa: <b>Primero se</b> recogen … / <b>Después se</b> secan …');
  }),
  sociedad: R('uma frase sobre a sociedade (desigualdad, desempleo, debido a, gracias a…)', (t, k) => {
    const c = C(k);
    if (/ devido a /.test(c)) return 'Em espanhol, com b: <b>debido a</b>.';
    if (/ (el|un) (desigualdad|ciudad|seguridad|inseguridad|sociedad|libertad|realidad) /.test(c)) return 'As palavras em <b>-dad</b> são femininas: <b>la</b> desigualdad, <b>la</b> ciudad.';
    if (/ por causa de /.test(c)) return 'Em espanhol: <b>a causa de</b> (ou <b>por</b>).';
    return need(/ (desigualdad|desempleo|pobreza|inseguridad|corrupción|vivienda|inflación|crisis|debido a|a causa de|por culpa de|gracias a|por eso|por lo tanto|como consecuencia|gobierno|problema) /.test(c), 'Fale da sociedade: <b>El desempleo</b> aumentó <b>debido a</b> …');
  }),
  datos: R('uma frase com dados (según, el 40 %, la mitad, aumentar, disminuir…)', (t, k) => {
    const c = C(k);
    if (/ segundo (un|una|el|la|los|las) (estudio|encuesta|informe|datos) /.test(c)) return 'A fonte é <b>según</b>: <b>según</b> una encuesta.';
    if (/ metade /.test(c)) return 'Em espanhol: <b>la mitad</b>.';
    if (/ (^|[^l] )(\d+) % de los /.test(c) && !/ (el|un|del) \d+ % /.test(c)) return 'A porcentagem leva artigo: <b>el</b> 40 % de los jóvenes.';
    return need(/ (según|%|por ciento|la mitad|un tercio|un cuarto|mayoría|minoría|aumentó|aumentaron|disminuyó|disminuyeron|se duplicó|se mantuvo|creció|bajó|cayó|encuesta|datos) /.test(c), 'Dê um dado: <b>Según</b> una encuesta, <b>el 40 %</b> de …');
  }),
  articulo: R('uma frase de artigo informativo (según, fue presentado, se calcula que, debido a, se proponen…)', (t, k) => {
    const c = C(k);
    if (/ segundo (un|una|el|la) (estudio|informe|encuesta) /.test(c)) return 'A fonte é <b>según</b>.';
    if (/ se propone (varias|medidas|campañas|soluciones) /.test(c)) return 'O se concorda: se <b>proponen</b> varias medidas.';
    if (/ se espera que (\p{L}+ )?(reduce|ayuda|cambia|va) /u.test(c)) return 'Depois de <b>se espera que</b>, o subjuntivo: <b>reduzca</b>, <b>ayude</b>, <b>cambie</b>.';
    return need(/ (según|fue|fueron|se|debido a|como consecuencia|por eso|gran parte|millones|el \d+ %) /.test(c), 'Escreva: <b>Según</b> un estudio, … / <b>Se calcula que</b> … / <b>Se proponen</b> …');
  }),
  // ---------- Módulo 21 ----------
  estilo_ind: R('o discurso indireto (dice que / dijo que, com os tempos que recuam)', (t, k) => {
    const c = C(k);
    if (/ (dijo|contó|comentó|explicó) que (\p{L}+ )?(vendrá|será|irá|tendrá|hará|podrá) /u.test(c)) return 'Com <b>dijo que</b>, o futuro vira condicional: <b>vendría</b>, <b>sería</b>, <b>iría</b>.';
    if (/ (dijo|contó|comentó) que (\p{L}+ )?va a /u.test(c)) return 'Com <b>dijo que</b>, <b>va a</b> vira <b>iba a</b>.';
    return need(/ (dice que|dijo que|me dijo|contó que|comentó que|explicó que|dicen que|dijeron que) /.test(c), 'Conte: <b>Dijo que</b> estaba cansada. / <b>Me dijo que</b> vendría.');
  }),
  cambios_ind: R('as mudanças do discurso indireto (al día siguiente, allí, ese día, llevar…)', (t, k) => {
    const c = C(k);
    if (/ dijo que (mañana|aquí) /.test(c)) return 'Contado depois: <b>mañana</b> → <b>al día siguiente</b>; <b>aquí</b> → <b>allí</b>.';
    return need(/ (al día siguiente|el día anterior|ese día|aquel día|esa semana|la semana siguiente|en ese momento|esa noche|allí|ese|esa|iría|llevaría|su) /.test(c), 'Mude o tempo e o lugar: <b>al día siguiente</b>, <b>allí</b>, <b>ese día</b>.');
  }),
  pregunta_ind: R('uma pergunta indireta (preguntó si …, preguntó dónde …, ¿sabe qué …?)', (t, k) => {
    const c = C(k);
    if (/ (preguntó|pregunté|preguntaron|quería saber|no sé) que (si|dónde|cuándo|qué|cómo|cuánto) /.test(c)) return 'Sem "que" antes: preguntó <b>si</b> …, preguntó <b>dónde</b> …';
    if (/ (preguntó|pregunté|no sé|sabe|sabes|decir) (donde|cuando|cuanto|como|quien) /.test(c)) return 'Na pergunta indireta, o interrogativo leva acento: <b>dónde</b>, <b>cuándo</b>, <b>cuánto</b>, <b>cómo</b>.';
    if (/ (preguntó|pregunté) se /.test(c)) return 'Em espanhol, a pergunta indireta usa <b>si</b>: preguntó <b>si</b> …';
    return need(/ (preguntó|pregunté|preguntaron|quería saber|quiso saber|no sé si|sabe|sabes|me puede decir|podría decirme) /.test(c), 'Use: Me <b>preguntó si</b> … / Le <b>pregunté dónde</b> …');
  }),
  pedido_ind: R('um pedido no discurso indireto (me pidió que + imperfeito do subjuntivo)', (t, k) => {
    const c = C(k);
    if (/ (pidió|pidieron|recomendó|exigió|exigieron|prohibió|prohibieron) que (\p{L}+ )?(llame|llamo|descanse|descanso|traigamos|traemos|vuelva|vuelvo|tome|tomo|usemos|usamos|enviemos|enviamos) /u.test(c)) return 'Com o pedido no passado, o imperfeito do subjuntivo: que <b>llamara</b>, <b>descansara</b>, <b>trajéramos</b>.';
    if (/ (pide|dice|piden|dicen) que (\p{L}+ )?(llamara|llegáramos|descansara|viniera) /u.test(c)) return 'Com o pedido no presente, o presente do subjuntivo: que <b>llame</b>, <b>lleguemos</b>.';
    return need(/ (pidió que|me pide que|dijo que|dice que|recomendó que|exigieron que|exigió que|prohibieron que|prohibió que|permitió que) /.test(c), 'Conte o pedido: Me <b>pidió que</b> la llamara. / Me <b>dijo que</b> descansara.');
  }),
  verbos_relato: R('um verbo de relato (explicó, aseguró, admitió, negó que, se quejó de que…)', (t, k) => {
    const c = C(k);
    if (/ negó que (había|hay|era|es|tenía|tiene) /.test(c)) return '<b>negar que</b> pede subjuntivo: negó que <b>hubiera</b>, <b>fuera</b>, <b>tuviera</b>.';
    if (/ se quejó que /.test(c)) return '<b>quejarse</b> pede <b>de</b>: se quejó <b>de que</b> …';
    if (/ (reclamó|garantizó|garantió) que /.test(c)) return 'Em espanhol: <b>se quejó de que</b> (reclamou), <b>aseguró que</b> (garantiu).';
    return need(/ (explicó|aseguró|admitió|negó|añadió|se quejó|prometió|advirtió|reconoció|confesó|declaró|afirmó|comentó|contó) /.test(c), 'Use um verbo de relato: <b>Aseguró que</b> … / <b>Admitió que</b> … / <b>Negó que</b> …');
  }),
  recado: R('uma frase de resumo (te cuento, explicó que, preguntó si, nos pidió que…)', (t, k) => {
    const c = C(k);
    if (/ preguntó que (si|dónde|cuándo|qué) /.test(c)) return 'Sem "que" antes: preguntó <b>si</b> …';
    if (/ pidió que (\p{L}+ )?(enviemos|enviamos|traigamos|lleguemos|leamos) /u.test(c)) return 'No passado, o imperfeito do subjuntivo: que <b>enviáramos</b>, <b>leyéramos</b>.';
    if (/ (dijo|explicó|aseguró) que (\p{L}+ )?(será|va a|retrasará) /u.test(c)) return 'No passado, os tempos recuam: <b>sería</b>, <b>iba a</b>, <b>se retrasaría</b>.';
    return need(/ (te cuento|resumen|explicó|dijo|aseguró|preguntó|pidió|se quejó|prometió|advirtió|cualquier duda|se ofreció|te perdiste|me perdí) /.test(c), 'Resuma: <b>Te cuento</b> … / <b>Explicó que</b> … / <b>Nos pidió que</b> …');
  }),
  // ---------- Módulo 22 ----------
  argumentar: R('um argumento organizado (en primer lugar, además, no solo … sino también, por lo tanto…)', (t, k) => {
    const c = C(k);
    if (/ no solo .* si no también /.test(c)) return 'É <b>sino</b> (junto): no solo …, <b>sino</b> también …';
    if (/ no solo .* pero también /.test(c)) return 'Depois de <b>no solo</b>, use <b>sino</b> también.';
    if (/ ademas /.test(c)) return '<b>además</b> leva acento.';
    return need(/ (en primer lugar|en segundo lugar|además|por otro lado|por ejemplo|es decir|o sea|no solo|sino también|por lo tanto|por eso|en conclusión|en resumen|para terminar|en mi opinión|por último) /.test(c), 'Organize: <b>En primer lugar</b>, … / <b>Además</b>, … / <b>Por lo tanto</b>, …');
  }),
  ventajas: R('vantagens e desvantagens (la ventaja es que, lo malo es que, al fin y al cabo…)', (t, k) => {
    const c = C(k);
    if (/ el (bueno|malo|mejor|peor) es que /.test(c)) return 'Para "o lado bom", use <b>lo</b>: <b>lo</b> bueno es que …';
    if (/ (a|la) vantaja /.test(c)) return 'Em espanhol: <b>la ventaja</b>.';
    return need(/ (ventaja|ventajas|desventaja|desventajas|inconveniente|inconvenientes|lo bueno|lo malo|lo mejor|lo peor|pros|contras|a pesar de|al fin y al cabo|vale la pena|compensa|por un lado|por otro) /.test(c), 'Pese: <b>La ventaja es que</b> … / <b>Lo malo es que</b> …');
  }),
  matizar: R('uma opinião matizada (hasta cierto punto, no del todo, es cierto que … pero, puede que…)', (t, k) => {
    const c = C(k);
    if (/ puede que (\p{L}+ )?(tienes|tiene|tienen|es|son|está|hay|leen|lee) /u.test(c)) return 'Depois de <b>puede que</b>, o subjuntivo: puede que <b>tengas</b>, <b>sea</b>, <b>haya</b>.';
    if (/ ni todos /.test(c)) return '"Nem todos" é <b>no todos</b>.';
    return need(/ (hasta cierto punto|en cierto modo|no del todo|en parte|es cierto que|es verdad que|tienes razón|puede que|es posible que|quizás|a mi parecer|depende|generalizar|exagerar|no todos|en absoluto|de acuerdo) /.test(c), 'Matize: <b>Hasta cierto punto</b> … / <b>Es cierto que</b> …, pero …');
  }),
  debate: R('uma frase de debate (perdona que te interrumpa, déjame terminar, como decía, o sea, que…)', (t, k) => {
    const c = C(k);
    if (/ perdona que te (interrumpo|interrumpe) /.test(c)) return '<b>Perdona que</b> pede subjuntivo: que te <b>interrumpa</b>.';
    if (/ dejame /.test(c)) return 'Com o pronome, acento: <b>déjame</b>.';
    return need(/ (puedo decir|quería añadir|perdona que|perdone que|déjame|un momento|como decía|volviendo a|lo de antes|en eso tienes razón|no es del todo cierto|o sea|si te entiendo|en resumen|qué pasa con|pero) /.test(c), 'Use: <b>Perdona que te interrumpa</b>, pero … / <b>Como decía</b>, …');
  }),
  dele_b1: R('uma frase sobre a prova (prueba, minutos, preparación, aprobar…)', (t, k) => need(/ (examen|prueba|pruebas|aprobar|apto|grupo|grupos|lectura|auditiva|escritas|orales|oral|preparación|prepararte|prepararme|instrucciones|conectores|notas|modelos|minutos|dele|dura|examinador|examinadora|texto) /.test(C(k)), 'Fale da prova: La <b>prueba</b> de lectura dura … / Hay que <b>aprobar</b> …')),
  ensayo: R('uma frase de texto de opinião (hoy en día, en mi opinión, en primer lugar, es cierto que …, en conclusión…)', (t, k) => {
    const c = C(k);
    if (/ en conclusion /.test(c)) return '<b>conclusión</b> leva acento.';
    if (/ ademas /.test(c)) return '<b>además</b> leva acento.';
    return need(/ (hoy en día|en mi opinión|creo que|en primer lugar|además|por otro lado|por ejemplo|es cierto que|aunque|pero|en conclusión|por todo ello|por lo tanto|no solo|defiendo) /.test(c), 'Escreva: <b>Hoy en día</b>, … / <b>En primer lugar</b>, … / <b>En conclusión</b>, …');
  }),
  // ---------- Módulo 23 ----------
  pasados_b2: R('uma narração com os passados (imperfecto, indefinido, pluscuamperfecto, perfecto)', (t, k) => {
    const c = C(k);
    if (/ desde entonces (\p{L}+ )?(viví|trabajé|estudié|volví|fui) /u.test(c)) return 'Com <b>desde entonces</b> (até hoje), o perfecto: desde entonces <b>he vivido</b>.';
    if (/ (ayer|el año pasado|el mes pasado|en \d{4}) (he|has|ha|hemos|han) \p{L}+ /u.test(c)) return 'Com ayer, el año pasado ou uma data, o indefinido: ayer <b>comí</b>.';
    return need(has(k, /\p{L}+(aba|aban|ábamos|ía|ían|íamos|é|ó|í|ió|aron|ieron)$/u) || / (había|he|ha|hemos|han|fue|fui|era|desde entonces|por aquel entonces|hasta entonces|al cabo de|poco a poco|nos mudamos) /.test(c), 'Narre: <b>Por aquel entonces</b> vivíamos … / … <b>cerró</b> … / <b>Desde entonces he</b> …');
  }),
  costumbre: R('um hábito ou adaptação (acostumbrarse a, solía, dejar de, volver a…)', (t, k) => {
    const c = C(k);
    if (/ (acostumbré|acostumbro|acostumbrada|acostumbrado|acostumbras|acostumbró|acostumbramos) con /.test(c)) return 'acostumbrarse pede <b>a</b>: me acostumbré <b>al</b> frío.';
    if (/ volví de (estudiar|fumar|hacer|trabajar|leer|escribir) /.test(c)) return 'Fazer de novo é <b>volver a</b>: volví <b>a</b> estudiar.';
    if (/ dejé (fumar|estudiar|trabajar|comer|beber) /.test(c)) return 'Parar de é <b>dejar de</b>: dejé <b>de</b> fumar.';
    return need(/ (acostumbr\p{L}*|suelo|sueles|suele|solía|solías|solíamos|solían|costumbre|dejé de|dejó de|deje de|volví a|volvió a|volver a|me costó|me cuesta|no volví) /u.test(c), 'Fale do hábito: Me <b>acostumbré a</b> … / <b>Solía</b> … / <b>Dejé de</b> …');
  }),
  cambio_persona: R('uma mudança (ponerse, volverse, hacerse, quedarse, convertirse en, llegar a ser)', (t, k) => {
    const c = C(k);
    if (/ se (convirtió|convierte|convirtieron) (un|una|el|la) /.test(c)) return 'convertirse pede <b>en</b>: se convirtió <b>en</b> …';
    if (/ (me|se|te) (quedé|quedó|quedaste) (nervios[oa]|roj[oa]|triste|feliz) /.test(c)) return 'Emoção passageira é <b>ponerse</b>: me <b>puse</b> nerviosa.';
    return need(/ (puse|puso|pusieron|pongo|ponerse|volví|volvió|volvieron|vuelve|hice|hizo|hicieron|quedé|quedó|quedaron|convertí|convirtió|convirtieron|llegó a ser|llegué a ser|llegar a ser) /.test(c), 'Use um verbo de mudança: me <b>volví</b> más paciente / se <b>hizo</b> médico / se <b>quedó</b> sin …');
  }),
  perfecto_ind: R('pretérito perfecto ou indefinido (he comido / comí)', (t, k) => {
    const c = C(k);
    if (/ (ayer|anoche|el año pasado|el mes pasado|la semana pasada|en \d{4}|hace \p{L}+ (años|días|meses)) (\p{L}+ )?(he|has|ha|hemos|han) \p{L}*(ado|ido) /u.test(c)) return 'Com ayer, el año pasado ou uma data, o indefinido em toda parte: ayer <b>comí</b>.';
    if (/ alguna vez (\p{L}+ )?(estuviste|fuiste|comiste|viajaste) /u.test(c)) return 'Para experiência, o natural é o perfecto: ¿Alguna vez <b>has estado</b> …?';
    return need(has(k, /\p{L}+(é|ó|í|ió|aron|ieron|aste|iste)$/u) || / (he|has|ha|hemos|han) \p{L}*(ado|ido|cho|sto|to) /u.test(c), 'Use <b>he comido</b> ou <b>comí</b>: Hoy <b>comí</b> … / ¿Alguna vez <b>has estado</b> …?');
  }),
  duracion_pasado: R('duração no passado (llevaba + gerúndio, llevaba … sin, hacía … que)', (t, k) => {
    const c = C(k);
    if (/ hizo (mucho|meses|años|tiempo|tanto) (tiempo )?que /.test(c)) return 'No passado, <b>hacía</b>: <b>hacía</b> mucho que …';
    if (/ llevaba (\p{L}+ )+(años|meses|días|horas) no (\p{L}+) /u.test(c)) return 'Com <b>llevar</b>, o negativo é <b>sin</b> + infinitivo: llevaba años <b>sin ver</b>.';
    return need(/ (llevaba|llevábamos|llevabas|llevaban|hacía|desde hacía) /.test(c), 'Use: <b>Llevaba</b> dos años viviendo … / <b>Llevaba</b> años <b>sin</b> … / <b>Hacía</b> mucho que …');
  }),
  memorias: R('uma frase de memórias (por aquel entonces, solía, llevaba … sin, me volví, desde entonces he…)', (t, k) => {
    const c = C(k);
    if (/ hizo (mucho|meses|años) que /.test(c)) return 'No passado, <b>hacía</b> mucho que …';
    if (/ me acostumbré con /.test(c)) return 'acostumbrarse pede <b>a</b>.';
    return need(has(k, /\p{L}+(aba|ía|ían|é|ó|ió|aron|ieron)$/u) || / (por aquel entonces|desde entonces|todavía hoy|solía|llevaba|había|he|me volví|me hice|me acostumbré|poco a poco|aquel|aquella) /.test(c), 'Escreva: <b>Por aquel entonces</b> … / <b>Desde entonces he</b> …');
  }),
  // ---------- Módulo 24 ----------
  si_pasado: R('uma hipótese sobre o passado (si + hubiera + particípio, habría + particípio)', (t, k) => {
    const c = C(k);
    if (/ si (\p{L}+ )?(habría|habrías|habríamos|habrían) /u.test(c)) return 'Depois de <b>si</b>, use <b>hubiera</b>: si lo <b>hubiera</b> sabido (nunca "si lo habría").';
    if (/ (tendría|tendrías|tendríamos) (\p{L}*(ado|ido)|hecho|dicho|visto) /u.test(c)) return 'O "teria" + particípio é <b>habría</b>: <b>habría</b> venido.';
    return need(/ (hubiera|hubieras|hubiéramos|hubieran|hubiese|habría|habrías|habríamos|habrían) /.test(c), 'Faça a hipótese: Si lo <b>hubiera</b> sabido, <b>habría</b> venido.');
  }),
  condicional_comp: R('o condicional composto (habría + particípio, yo en tu lugar habría …)', (t, k) => {
    const c = C(k);
    if (/ (tendría|tendrías|tendríamos|tendrían) (\p{L}*(ado|ido)|hecho|dicho|visto|sido) /u.test(c)) return 'O "teria" + particípio é <b>habría</b>: <b>habría</b> hecho.';
    return need(/ (habría|habrías|habríamos|habrían) /.test(c), 'Use <b>habría</b> + particípio: Yo <b>habría hecho</b> lo mismo.');
  }),
  lamento: R('um lamento sobre o passado (ojalá hubiera, me arrepiento de, qué pena que …)', (t, k) => {
    const c = C(k);
    if (/ me arrepiento (no|haber|haberlo|haberla|haberte) /.test(c)) return 'arrepentirse pede <b>de</b>: me arrepiento <b>de</b> no haber …';
    if (/ de no tener (\p{L}*(ado|ido)) /u.test(c)) return 'O "ter" + particípio é <b>haber</b>: de no <b>haber</b> viajado.';
    if (/ ojalá (\p{L}+ )?(habría|había) /u.test(c)) return 'Depois de <b>ojalá</b>, para o passado: <b>hubiera</b> + particípio.';
    return need(/ (ojalá|arrepiento|arrepientas|arrepiente|lamento|qué pena|me da pena|nunca es tarde|lo hecho|lección) /.test(c), 'Lamente: <b>Ojalá hubiera</b> … / <b>Me arrepiento de</b> no haber …');
  }),
  reproche: R('uma crítica ou autocrítica (deberías haber …, podrías haber …, la próxima vez …)', (t, k) => {
    const c = C(k);
    if (/ (debería|deberías|deberíamos|podrías|podría) tener (\p{L}*(ado|ido)|dicho|hecho) /u.test(c)) return 'O "deveria ter" é <b>debería haber</b> + particípio.';
    if (/ haber me lo /.test(c)) return 'Os pronomes vão colados: <b>habérmelo</b> dicho.';
    return need(/ (debería|deberías|deberíamos|podrías|podría|tendría que|tendrías que|tendríamos que|por qué no|no pasa nada|la próxima vez) /.test(c) || has(k, /^(habérmelo|habértelo|haberte|haberlo|haberme)$/), 'Critique: <b>Deberías haber</b> … / <b>Podrías haber</b> …');
  }),
  mixtas: R('uma hipótese mista (si hubiera …, ahora …; si fuera …, habría …; de haberlo sabido …)', (t, k) => {
    const c = C(k);
    if (/ si (\p{L}+ )?(habría|habrías|sería|serías|tendría) /u.test(c)) return 'Depois de <b>si</b>, nunca o condicional: si <b>hubiera</b> …, si <b>fuera</b> …';
    return need(/ (hubiera|hubieras|hubiéramos|fuera|fueras|fuese) /.test(c) || / de haber(lo|la|te|me)? /.test(c), 'Misture os tempos: Si <b>hubiera estudiado</b>, ahora <b>sería</b> … / <b>De haberlo sabido</b>, …');
  }),
  carta_perdon: R('uma frase de carta de reflexão (me arrepiento de, si te hubiera …, debería haber …, ojalá…)', (t, k) => {
    const c = C(k);
    if (/ si (\p{L}+ )?(habría|habrías|habríamos) /u.test(c)) return 'Depois de <b>si</b>, use <b>hubiera</b>.';
    if (/ me arrepiento (no|haber) /.test(c)) return 'arrepentirse pede <b>de</b>.';
    return need(/ (querida|querido|hace años|te acuerdas|arrepiento|hubiera|habría|habríamos|debería|ojalá|perdón|perdóname|echo de menos|extraño|seríamos|ahora) /.test(c), 'Escreva: <b>Me arrepiento de</b> … / <b>Si te hubiera</b> … / <b>Ojalá</b> …');
  }),
  // ---------- Módulo 25 ----------
  futuro_prob: R('uma suposição com o futuro (estará, serán, tendrá…)', (t, k) => {
    const c = C(k);
    if (/ (debe|deben) (estar|ser|tener) /.test(c) && !/ debe de /.test(c)) return 'Funciona, mas o espanhol prefere o futuro para supor: <b>estará</b>, <b>será</b>, <b>tendrá</b>.';
    return need(has(k, /\p{L}+r(á|án|ás|é|emos)$/u), 'Suponha com o futuro: <b>Estará</b> en el tráfico. / <b>Serán</b> las ocho.');
  }),
  futuro_comp_prob: R('uma suposição sobre o que já aconteceu (habrá + particípio)', (t, k) => {
    const c = C(k);
    if (/ (debe|deben) (tener|haber) \p{L}*(ado|ido) /u.test(c)) return 'Para "deve ter + particípio", use <b>habrá</b> + particípio: <b>habrá</b> salido.';
    if (/ (habría|habrían) \p{L}*(ado|ido) /u.test(c) && !/ (cuando|anoche|ayer) /.test(c)) return 'Para supor sobre o que acabou de acontecer, o futuro composto: <b>habrá</b> salido.';
    return need(/ (habrá|habrán|habrás|habré|habremos) /.test(c), 'Use <b>habrá</b> + particípio: No contesta; <b>habrá salido</b>.');
  }),
  cond_prob: R('uma suposição sobre o passado (serían, tendría, estaría, habría…)', (t, k) => {
    const c = C(k);
    if (/ cuando (llegué|llegó|vi|vio|salí) (\p{L}+ )?(serán|tendrá|estará) /u.test(c)) return 'Para um momento passado, o condicional: <b>serían</b>, <b>tendría</b>, <b>estaría</b>.';
    return need(has(k, /\p{L}+ría(n|s|mos)?$/u), 'Suponha com o condicional: <b>Serían</b> las tres. / <b>Tendría</b> unos veinte años.');
  }),
  deber_de: R('deber de (probabilidade), deber (obrigação) ou tener que (dedução)', (t, k) => {
    const c = C(k);
    if (/ (debes|debe|deben|debemos) de (estudiar|descansar|trabajar|llegar|hacer|pagar|comer|dormir|ir) (más|temprano|ya|hoy|antes) /.test(c)) return 'Para obrigação, <b>deber</b> sem de: <b>debes estudiar</b>. O <b>deber de</b> é para probabilidade.';
    return need(/ (debe|deben|debes|debo|debemos|tiene que|tienen que|seguro que|sin duda) /.test(c), 'Use: <b>Debe de</b> estar cansada. / <b>Debes</b> estudiar. / <b>Tiene que</b> estar en casa.');
  }),
  certeza: R('um grau de certeza com o modo certo (a lo mejor + indicativo, puede que + subjuntivo…)', (t, k) => {
    const c = C(k);
    if (/ a lo mejor (no )?(\p{L}+ )?(sea|esté|tenga|llueva|venga|haya|pueda|vaya|cancelen|suban|vuelva) /u.test(c)) return 'Com <b>a lo mejor</b>, o indicativo: a lo mejor <b>es</b>, <b>llueve</b>, <b>viene</b>.';
    if (/ (puede que|es posible que|es probable que|capaz que) (no )?(\p{L}+ )?(es|está|tiene|llueve|viene|hay|puede|va|suben|vuelve|cancelan) /u.test(c)) return 'Com <b>puede que</b> / <b>es posible que</b>, o subjuntivo: <b>llueva</b>, <b>venga</b>, <b>haya</b>.';
    if (/ seguro que (\p{L}+ )?(tenga|sea|esté|llueva|venga) /u.test(c)) return 'Com <b>seguro que</b>, o indicativo: seguro que <b>tiene</b> razón.';
    return need(/ (a lo mejor|puede que|es posible que|es probable que|quizás|tal vez|seguro que|seguramente|probablemente|capaz que|igual) /.test(c), 'Mostre o grau de certeza: <b>A lo mejor</b> llueve. / <b>Puede que</b> llueva.');
  }),
  misterio: R('uma frase de hipótese (tiene que haber sido, habrá dejado, serían, a lo mejor…)', (t, k) => {
    const c = C(k);
    if (/ a lo mejor (\p{L}+ )?(sea|esté|tenga|vuelva|venga|haya) /u.test(c)) return 'Com <b>a lo mejor</b>, o indicativo.';
    if (/ puede que (\p{L}+ )?(es|está|tiene|ha|vuelve|viene) /u.test(c)) return 'Com <b>puede que</b>, o subjuntivo.';
    return need(has(k, /\p{L}+(ría|rían|rá|rán)$/u) || / (tiene que|seguro que|habrá|habrán|debe de|a lo mejor|puede que|quizás|lo más probable|estaba|había|nadie) /.test(c), 'Faça hipóteses: <b>Tiene que haber sido</b> … / <b>Habrá dejado</b> … / <b>A lo mejor</b> …');
  }),
  // ---------- Módulo 26 ----------
  registro: R('uma frase com o registro certo (tú, usted, ustedes, vos, vosotros)', (t, k) => {
    const c = C(k);
    if (/ usted (tienes|eres|estás|puedes|quieres|vienes) /.test(c)) return 'Com <b>usted</b>, o verbo vai na 3ª pessoa: usted <b>tiene</b>, <b>es</b>, <b>está</b>.';
    if (/ vos (tienes|eres|puedes|quieres) /.test(c)) return 'Com <b>vos</b>: vos <b>tenés</b>, vos <b>sos</b>, vos <b>podés</b>.';
    if (/ ustedes (tenéis|sois|estáis|comisteis) /.test(c)) return 'Com <b>ustedes</b>, a 3ª pessoa do plural: ustedes <b>tienen</b>, <b>son</b>.';
    return need(/ (tú|usted|ustedes|vos|vosotros|le|su|tuteamos|tutéame|tutearme|sos|tenés|comisteis|permite) /.test(c), 'Escolha o registro: ¿<b>Le</b> puedo …? / ¿<b>Nos tuteamos</b>? / <b>Vos sos</b> …');
  }),
  cortesia_formal: R('uma fórmula de cortesia formal (disculpe la molestia, sería tan amable de, con su permiso…)', (t, k) => {
    const c = C(k);
    if (/ (sería|serías) tan amable (ayudarme|esperar|decirme|darme) /.test(c)) return 'Falta o <b>de</b>: ¿sería tan amable <b>de</b> ayudarme?';
    return need(/ (disculpe|molestia|sería tan amable|tenga la amabilidad|haga el favor|permítame|con su permiso|no faltaba más|a sus órdenes|con mucho gusto|le agradezco|muy amable|le importaría|podría) /.test(c), 'Seja formal: <b>Disculpe la molestia</b> … / ¿<b>Sería tan amable de</b> …?');
  }),
  presentacion: R('uma frase de apresentação formal (quisiera agradecer, pasemos ahora a, como pueden ver…)', (t, k) => {
    const c = C(k);
    if (/ como (puede|podéis) ver /.test(c) && / ustedes /.test(c)) return 'Com ustedes: como <b>pueden</b> ver.';
    return need(/ (buenos días a todos|quisiera|agradecerles|agradezco|objetivo|en primer lugar|hablaré|pasemos|pasaré|como pueden ver|diapositiva|me gustaría destacar|para concluir|en resumen|gracias por su atención|alguna pregunta|propongo) /.test(c), 'Guie o público: <b>Quisiera agradecerles</b> … / <b>Pasemos ahora a</b> … / <b>Para concluir</b> …');
  }),
  nominal: R('uma frase no estilo nominal ou impessoal (la presentación de, se ha decidido, cabe destacar…)', (t, k) => {
    const c = C(k);
    if (/ resulta necesario (la|una) /.test(c)) return 'Com substantivo feminino, concorda: resulta <b>necesaria</b> la revisión.';
    return need(/ (se ha decidido|se acordó|se recomienda|cabe destacar|cabe señalar|conviene|resulta necesari|resulta fundamental|llevó a cabo|llevar a cabo|contar con|dar a conocer) /.test(c) || has(k, /\p{L}+(ción|miento|sión)$/u), 'Use o estilo formal: <b>La presentación del</b> informe … / <b>Se ha decidido</b> … / <b>Cabe destacar</b> …');
  }),
  conectores_formales: R('um conector formal (no obstante, asimismo, por consiguiente, dado que, a fin de que…)', (t, k) => {
    const c = C(k);
    if (/ a fin de que (\p{L}+ )?(están|son|tienen|pueden|saben|reciben) /u.test(c)) return 'Depois de <b>a fin de que</b>, o subjuntivo: <b>estén</b>, <b>sean</b>, <b>tengan</b>.';
    return need(/ (no obstante|sin embargo|asimismo|igualmente|por consiguiente|por lo tanto|de ahí que|en cuanto a|en cuanto al|con respecto a|en lo que se refiere|dado que|puesto que|ya que|a fin de|en definitiva|en suma) /.test(c), 'Use um conector formal: <b>No obstante</b>, … / <b>Asimismo</b>, … / <b>Dado que</b> …');
  }),
  reclamacion: R('uma frase de reclamação formal (me dirijo a ustedes, solicito, les ruego que, en caso contrario…)', (t, k) => {
    const c = C(k);
    if (/ les ruego que (me )?(responden|envían|devuelven|pagan|informan) /.test(c)) return 'Depois de <b>les ruego que</b>, o subjuntivo: <b>respondan</b>, <b>envíen</b>, <b>devuelvan</b>.';
    return need(/ (me dirijo|descontento|el pasado|adquirí|no obstante|sin embargo|asimismo|solicito|les ruego|devolución|sustitución|importe|en caso contrario|me veré obligad|quedo a la espera|atentamente|dado que|por consiguiente) /.test(c), 'Escreva formalmente: <b>Me dirijo a ustedes</b> … / <b>Solicito</b> … / <b>En caso contrario</b> …');
  }),
  // ---------- Módulo 27 ----------
  relativo_prep: R('uma relativa com preposição (en la que, con el que, por el cual, con quien…)', (t, k) => {
    const c = C(k);
    if (/ (el|la|los|las) \p{L}+ (el|la) cual (leí|vi|compré|escribí|conocí|tengo) /u.test(c)) return 'Sem preposição, use só <b>que</b>: el libro <b>que</b> leí.';
    if (/ (en|con|por|para|de) que (trabajo|vivo|hablé|viajé|renuncié) /.test(c)) return 'Depois de preposição, o artigo: en <b>la</b> que, con <b>el</b> que, por <b>el</b> que.';
    return need(/ (en|con|por|para|de|a|sin|sobre|bajo|desde) (el|la|los|las) (que|cual|cuales) /.test(c) || / (con|a|para|de) (quien|quienes) /.test(c), 'Use: la empresa <b>en la que</b> … / el motivo <b>por el cual</b> … / la amiga <b>con quien</b> …');
  }),
  lo_que: R('uma frase com lo que ou lo cual', (t, k) => {
    const c = C(k);
    if (/^ (el|la) que (más|menos) /.test(c)) return 'Para a ideia, use <b>lo</b>: <b>lo</b> que más me gusta.';
    return need(/ (lo que|lo cual|todo lo que) /.test(c), 'Use <b>lo que</b>: <b>Lo que</b> necesito es … / …, <b>lo cual</b> me molestó.');
  }),
  cuyo: R('uma relativa de posse com cuyo, cuya, cuyos, cuyas', (t, k) => {
    const c = C(k);
    if (/ cuy[oa]s? (el|la|los|las) /.test(c)) return 'Depois de <b>cuyo</b>, sem artigo: <b>cuya</b> novela.';
    if (/ que (su|sus) (novela|obra|obras|libro|libros|dueño|hijos|padre|madre) /.test(c)) return 'Na escrita, o "que su" vira <b>cuyo</b>: la autora <b>cuya</b> novela …';
    if (/ cuyo (novela|obra|letra|casa|ciudad|protagonista|carrera) /.test(c)) return '<b>cuyo</b> concorda com o que vem depois: <b>cuya</b> novela.';
    if (/ cuya (libro|puerto|dueño|nombre|padre) /.test(c)) return '<b>cuyo</b> concorda com o que vem depois: <b>cuyo</b> libro.';
    return need(/ (cuyo|cuya|cuyos|cuyas) /.test(c), 'Use <b>cuyo</b>: la autora <b>cuya</b> novela … / un pueblo <b>cuyos</b> habitantes …');
  }),
  relativo_adv: R('uma relativa de lugar, tempo ou modo (donde, el día en que, la manera en que…)', (t, k) => {
    const c = C(k);
    if (/ (la ciudad|el pueblo|la casa|el barrio|el lugar) dónde (nací|vivo|crecí|vivía|trabajo) /.test(c)) return 'Como relativo, <b>donde</b> não tem acento: la ciudad <b>donde</b> nací.';
    if (/ (el día|el año|la vez|el momento) cuando /.test(c)) return 'Depois de um substantivo de tempo, <b>(en) que</b>: el día <b>en que</b> …';
    return need(/ (donde|adonde|en que|en el que|en la que|la vez que|el día que|la manera en que|la forma en que|así es como|como) /.test(c), 'Use: la ciudad <b>donde</b> … / el día <b>en que</b> … / la manera <b>en que</b> …');
  }),
  relativo_subj: R('uma relativa com subjuntivo (busco a alguien que hable, no hay nadie que…, el que quiera…)', (t, k) => {
    const c = C(k);
    if (/ (busco|buscamos|necesito|necesitamos|quiero|queremos) (a )?(un|una|alguien|algo) (\p{L}+ )?que (tiene|habla|sabe|está|acepta|es|puede) /u.test(c)) return 'Antecedente procurado: subjuntivo: que <b>tenga</b>, <b>hable</b>, <b>sepa</b>, <b>esté</b>.';
    if (/ no (conozco a nadie|hay nadie|hay nada|tengo nada) que (habla|sabe|tiene|me gusta|es|puede) /.test(c)) return 'Antecedente inexistente: subjuntivo: que <b>hable</b>, <b>sepa</b>, <b>me guste</b>.';
    if (/ el que (quiere|quiera) venir, que (avisa) /.test(c)) return 'É <b>que avise</b>.';
    return need(/ (busco|buscamos|necesito|necesitamos|quiero|no conozco|no hay|tengo|el que|quien|cuando quieras|lo que sea|donde sea) /.test(c), 'Use: <b>Busco</b> a alguien que <b>hable</b> … / <b>No hay nadie que</b> …');
  }),
  resena_libro: R('uma frase de resenha (es una novela cuya …, cuenta la historia de, lo que más me gustó, a quien busque…)', (t, k) => {
    const c = C(k);
    if (/ cuy[oa]s? (el|la|los|las) /.test(c)) return 'Depois de <b>cuyo</b>, sem artigo.';
    if (/ a quien (busca|quiere|tiene|le gusta) /.test(c)) return 'Para o leitor indefinido, o subjuntivo: a quien <b>busque</b>, <b>quiera</b>, <b>le guste</b>.';
    return need(/ (novela|película|serie|libro|cuenta la historia|trata de|cuyo|cuya|donde|en la que|en el que|lo que más|lo que menos|lo cual|recomiendo|recomendaría|lectura|desenlace|personajes|protagonista|ambientada) /.test(c), 'Escreva a resenha: <b>Cuenta la historia de</b> … / <b>Lo que más me gustó</b> … / <b>Se la recomiendo</b> …');
  }),
  // ---------- Módulo 28 ----------
  perifrasis_fase: R('uma perífrase de fase (estar a punto de, ponerse a, echarse a, acabar de, dejar de, volver a)', (t, k) => {
    const c = C(k);
    if (/ acabé de (llegar|salir|comer|llamar|terminar) /.test(c) && !/ (ayer|anoche|cuando) /.test(c)) return 'Para "acabei de" (agorinha), o presente: <b>acabo de</b> llegar.';
    if (/ a ponto de /.test(c)) return 'Em espanhol: a <b>punto</b> de.';
    if (/ (volví|volvió|volvimos) de (llamar|estudiar|llover|salir) /.test(c)) return 'De novo é <b>volver a</b>: volvió <b>a</b> llamar.';
    return need(/ (a punto de|me puse a|se puso a|se pusieron a|nos pusimos a|se echó a|se echaron a|me eché a|acabo de|acaba de|acabamos de|acabé de|terminé de|terminó de|dejó de|dejé de|volvió a|volví a|empezó a|empecé a) /.test(c), 'Use uma perífrase: <b>Estaba a punto de</b> … / <b>Se echó a</b> reír / <b>Acabo de</b> …');
  }),
  perifrasis_gerundio: R('uma perífrase com gerúndio (sigo estudiando, voy entendiendo, anda diciendo…)', (t, k) => {
    const c = C(k);
    if (/ (sigo|sigue|sigues|seguimos|siguen|seguía) a \p{L}+r /u.test(c)) return 'Com <b>seguir</b>, o gerúndio, sem "a": sigo <b>estudiando</b>.';
    if (/ (continúo|continúa|continúan) (de|a) \p{L}+r /u.test(c)) return 'Com <b>continuar</b>, o gerúndio: continúo <b>estudiando</b>.';
    return need(/ (sigo|sigues|sigue|seguimos|siguen|seguía|continúo|continúa|continuaba|voy|vas|va|vamos|van|iba|ando|andas|anda|andan|andaba|vengo|venía|viene|llevo|llevaba|lleva) \p{L}+(ando|iendo|yendo) /u.test(c) || / me voy \p{L}+ando /u.test(c) || / (llevo|lleva|llevaba|llevamos) (\p{L}+ )+\p{L}+(ando|iendo|yendo) /u.test(c), 'Use: <b>Sigo</b> estudiando / <b>Voy</b> entendiendo / <b>Anda</b> diciendo …');
  }),
  tener_participio: R('tener / llevar / dejar / dar por + particípio (com concordância)', (t, k) => {
    const c = C(k);
    if (/ (tengo|llevo|tiene|lleva) (escrito|leído|vendido|hecho) (tres|dos|cuatro|cinco|cien|cincuenta|las|unas) (cartas|páginas|entradas|capítulos|cosas|tareas) /.test(c) && !/ (escritas|leídas|vendidas|hechas) /.test(c)) return 'Aqui o particípio concorda com o objeto: tengo <b>escritas</b> dos cartas, llevo <b>leídas</b> cien páginas.';
    return need(/ (tengo|tienes|tiene|tenemos|llevo|llevamos|lleva|dejé|dejó|doy|da|dio|dimos) (por )?(\p{L}+ )?\p{L}*(ado|ada|ados|adas|ido|ida|idos|idas|ído|ída|ídos|ídas|cho|cha|chos|chas|to|ta|tos|tas) /u.test(c), 'Use: <b>Tengo escritos</b> tres capítulos / <b>Llevo leídas</b> … / <b>Doy por terminada</b> …');
  }),
  colocaciones: R('uma colocação natural (tomar una decisión, echar una mano, sacar una foto, hacer cola…)', (t, k) => {
    const c = C(k);
    if (/ (tiramos|tiré|tiró) (una|muchas|unas) fotos? /.test(c)) return 'Tirar foto é <b>sacar</b> (ou tomar) una foto: <b>sacamos</b> fotos.';
    if (/ (hacer|hago|hice|hace) cumpleaños /.test(c)) return 'Fazer aniversário é <b>cumplir años</b>.';
    if (/ (das|da|dame|me das) una mano /.test(c)) return 'Dar uma mão é <b>echar una mano</b>: ¿me <b>echas</b> una mano?';
    if (/ hacer fila /.test(c)) return 'Fazer fila é <b>hacer cola</b>.';
    return need(/ (decisión|una mano|foto|fotos|paseo|vuelta|cola|caso|prisa|riesgo|error|atención|en cuenta|cumplo|cumple|las gracias|una pregunta|un consejo) /.test(c), 'Use uma colocação: <b>tomar una decisión</b> / <b>echar una mano</b> / <b>sacar una foto</b> …');
  }),
  expresiones: R('uma expressão idiomática (estar en las nubes, tomar el pelo, ser pan comido…)', (t, k) => {
    const c = C(k);
    if (/ papas en la lengua /.test(c)) return 'Em espanhol são <b>pelos</b>: no tener <b>pelos</b> en la lengua.';
    if (/ mundo de la luna /.test(c)) return 'Em espanhol: estar <b>en las nubes</b>.';
    return need(/ (en las nubes|el pelo|las pilas|pan comido|ojo de la cara|pelos en la lengua|en el clavo|la pata|hasta las narices|uña y carne) /.test(c), 'Use uma expressão: <b>estar en las nubes</b> / <b>ser pan comido</b> / <b>tomar el pelo</b> …');
  }),
  cronica: R('uma frase de crônica (perífrases, colocações e expressões)', (t, k) => {
    const c = C(k);
    if (/ (seguía|seguí) a \p{L}+r /u.test(c)) return 'Com <b>seguir</b>, o gerúndio: seguía <b>esperando</b>.';
    if (/ hice fila /.test(c)) return 'Fazer fila é <b>hacer cola</b>.';
    return need(/ (a punto de|me puse a|me eché a|seguía|volví a|hice cola|hacer cola|sello|sonrisa|pan comido|ojo de la cara|pelos en la lengua|moraleja|todos sabemos|aquel|aquella|las pilas|metí la pata|al final|me di cuenta) /.test(c) || has(k, /\p{L}+(ando|iendo)$/u), 'Escreva a crônica: <b>Estaba a punto de</b> … / <b>Hice cola</b> … / <b>Moraleja</b>: …');
  }),
  // ---------- Módulo 29 ----------
  reunion: R('uma frase de reunião (propongo que, quedamos en que, ¿quién se encarga …?)', (t, k) => {
    const c = C(k);
    if (/ propongo que (\p{L}+ )?(lanzamos|hacemos|esperamos|dejamos|hablamos|revisamos) /u.test(c)) return 'Depois de <b>propongo que</b>, o subjuntivo: <b>lancemos</b>, <b>hagamos</b>, <b>esperemos</b>.';
    if (/ quedamos que /.test(c)) return 'Combinar é <b>quedar en</b>: quedamos <b>en</b> que …';
    return need(/ (propongo|sugiero|qué tal si|qué opinan|alguien quiere|quedamos en|estamos de acuerdo|se encarga|siguiente paso|orden del día|punto|empecemos|objetivo|me parece) /.test(c), 'Na reunião: <b>Propongo que</b> … / <b>Quedamos en que</b> … / ¿<b>Quién se encarga de</b> …?');
  }),
  negociar: R('uma frase de negociação (estaríamos dispuestos a, siempre que + subjuntivo, a cambio de…)', (t, k) => {
    const c = C(k);
    if (/ (siempre que|con tal de que|a condición de que) (\p{L}+ )?(pagan|firman|es|son|compran|aceptan|entregan) /u.test(c)) return 'Como condição, o subjuntivo: siempre que <b>paguen</b>, <b>firmen</b>, <b>sea</b>.';
    return need(/ (dispuestos|dispuesta|dispuesto|podríamos|siempre que|con tal de que|a condición de que|qué les parece si|y si|a cambio de|descuento|me temo|trato hecho|cerramos el trato|nos interesaría|lo que podemos ofrecer) /.test(c), 'Negocie: <b>Estaríamos dispuestos a</b> … <b>siempre que</b> … / ¿<b>Qué les parece si</b> …?');
  }),
  correo_trabajo: R('uma frase de e-mail de trabalho (te escribo para, te adjunto, ¿podrías …?, quedo atenta…)', (t, k) => {
    const c = C(k);
    if (/ te anexo /.test(c)) return 'No e-mail, "anexar" é <b>adjuntar</b>: te <b>adjunto</b> …';
    if (/ (le|les) (adjunto|escribo) .* (tus|te) /.test(c)) return 'Mantenha o mesmo tratamento: <b>le</b> … <b>sus</b> (usted) ou <b>te</b> … <b>tus</b> (tú).';
    return need(/ (hola|te escribo|les escribo|te adjunto|les adjunto|adjunto|podrías|me confirmas|quedo atent|quedo pendiente|un saludo|saludos|cualquier duda|gracias de antemano|asunto|recordatorio) /.test(c), 'Escreva: <b>Te escribo para</b> … / <b>Te adjunto</b> … / <b>Quedo atenta</b>.');
  }),
  feedback: R('uma frase de feedback (lo que funcionó muy bien, quizás podrías, te sugiero que + subjuntivo…)', (t, k) => {
    const c = C(k);
    if (/ te sugiero que (\p{L}+ )?(revisas|incluyes|hablas|practicas|agregas|cambias) /u.test(c)) return 'Depois de <b>te sugiero que</b>, o subjuntivo: <b>revises</b>, <b>incluyas</b>, <b>practiques</b>.';
    return need(/ (lo que funcionó|me gustó|fortaleza|quizás podrías|podrías|te sugiero|qué te parece si|aspecto a mejorar|en general|muy buen trabajo|gracias por los comentarios|lo tendré en cuenta|si necesitas ayuda) /.test(c), 'Dê feedback: <b>Lo que funcionó muy bien fue</b> … / <b>Quizás podrías</b> …');
  }),
  conflicto: R('uma frase para resolver um conflito (entiendo que estés …, busquemos una solución, lo importante es que…)', (t, k) => {
    const c = C(k);
    if (/ lo importante es que (\p{L}+ )+(recibe|llega|está|es|tiene|termina) /u.test(c)) return 'Depois de <b>lo importante es que</b>, o subjuntivo: <b>reciba</b>, <b>llegue</b>, <b>esté</b>.';
    if (/ pongámosnos /.test(c)) return 'Com o pronome, o -s cai: <b>pongámonos</b>.';
    return need(/ (entiendo|punto de vista|no se trata|culpables|malentendido|busquemos|pongámonos|hablemos|lo importante es que|qué te parece si|a partir de ahora|solución|tienes razón) /.test(c), 'Medeie: <b>Entiendo que</b> … / <b>Busquemos una solución</b> / <b>Lo importante es que</b> …');
  }),
  acta: R('uma frase de ata (se trató, se acordó, se encargará de, plazo, queda pendiente…)', (t, k) => {
    const c = C(k);
    if (/ (acordamos|decidimos) /.test(c)) return 'Na ata, o impessoal: <b>se acordó</b>, <b>se decidió</b>.';
    return need(/ (asistentes|ausentes|orden del día|se trató|se acordó|se decidió|se aprobó|se encargará|responsable|plazo|queda pendiente|quedan pendientes|próxima reunión|se presentó|se discutió) /.test(c), 'Escreva a ata: <b>Se acordó</b> … / … <b>se encargará de</b> … / <b>Plazo</b>: …');
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
