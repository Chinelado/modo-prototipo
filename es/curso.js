// Espanhol · curso. Carregado depois de es/base.js, só em espanhol.html.
// Mesmo formato das lições do inglês (en/curso.js): NL(id, {...}) registra a lição, ES_MODS monta a trilha.
// Este arquivo: o motor das lições (NL) e o Módulo 1 (Primeros contactos), conforme docs/espanhol-estrutura.md.
// Espanhol latino-americano (ustedes, seseo). Cada aula do A1–A2 tem um passo "Ojo, brasileño" com a armadilha
// do português naquele tema (falso amigo, gênero que muda, som, estrutura).

/* ---------- 1. lições ---------- */
// Cada arquivo de módulo (es/m02.js, es/m03.js…) registra as suas lições com NL e o módulo com ES_MODS.push.
// es/trilha.js, carregado por último, monta a trilha na ordem de ES_MODS.
const NEW_LESSONS = {};
const ES_MODS = [];
function NL(id, o) {
  // id e título são chaves (progresso, esquemas, apoio, tarefas): repetir quebraria a trilha
  if (NEW_LESSONS[id] || LESSONS.some((x) => x.de === o.de)) throw new Error('Lição repetida: ' + id + ' / ' + o.de);
  const l = {
    i: LESSONS.length, sid: id, nova: true, de: o.de, pt: o.pt, gt: o.gt, gx: o.gx,
    pts: o.pts.split('|'), ex: pairs(o.ex), ge: pairs(o.ge), dlg: pairs(o.dlg),
    v: [...o.v.split('|').map((s) => ({ s })), ...o.x.split('|').map((s) => ({ s, x: true }))].map(({ s, x }, j) => {
      const [a, b, c] = s.split('='); return { k: id + ':' + j, de: a, pt: b, em: c || '', ...(x ? { x: true } : {}) };
    }),
    cz: o.cz.split('|').map((s) => { const p = s.split('='); return { q: p[0], a: p[1], w: p.slice(2) }; }),
    deep: o.deep, rule: o.rule || null, le: o.le || null,
  };
  o.whys.split('|').forEach((w, j) => { if (l.cz[j]) l.cz[j].why = w; });
  l.bd = { pt: o.bd[1], t: o.bd[0].split('|').map((s) => { const [w, rest] = s.split('='); const [c, n] = (rest || 'X').split('^'); return { w: w.replace(/_/g, ' '), c, n: n || '' }; }) };
  if (o.hw) HW[o.de] = o.hw;
  LESSONS.push(l); NEW_LESSONS[id] = l;
}

NL('es-hola', {
  de: '¡Hola! Soy Ana.', pt: 'Cumprimentar e se apresentar', gt: 'ser: yo soy, tú eres · pronomes · tú e usted',
  gx: 'Para se apresentar, o espanhol usa o verbo ser, como o português: yo soy (eu sou), tú eres (você é), él es, ella es (ele é, ela é). Como no português, o sujeito pode cair: Soy Ana. E há duas formas de "você": tú (informal) e usted (formal).',
  ge: 'Soy Ana.=Eu sou a Ana.|Tú eres mi profesor.=Você é o meu professor.|Él es mi amigo.=Ele é meu amigo.',
  v: 'hola=oi, olá=👋|buenos días=bom dia=🌅|buenas tardes=boa tarde=🌇|buenas noches=boa noite=🌙|me llamo=eu me chamo=🪪|nombre=nome=📛|amigo, amiga=amigo, amiga=🤝|profesor, profesora=professor, professora=🧑‍🏫|estudiante=estudante=🎒|mucho gusto=muito prazer=😊',
  x: 'adiós=tchau, adeus|hasta luego=até logo|chau=tchau|gracias=obrigado, obrigada|por favor=por favor|sí=sim|no=não|y=e|igualmente=igualmente|encantada=encantada (prazer)',
  dlg: '¡Hola! Soy Ana. ¿Cómo te llamas?=Oi! Eu sou a Ana. Como você se chama?|Hola, Ana. Me llamo Mateo.=Olá, Ana. Eu me chamo Mateo.|Mucho gusto, Mateo.=Muito prazer, Mateo.|Igualmente.=Igualmente.',
  cz: 'Yo ___ Ana.=soy=es=eres|Tú ___ mi profesor.=eres=es=soy|Ella ___ mi amiga.=es=eres=son',
  whys: 'com yo, o verbo ser é soy|com tú, o verbo ser é eres|com él, ella e usted, o verbo ser é es',
  pts: 'ser é o verbo para dizer quem alguém é: Soy Ana (eu sou a Ana), Ella es mi amiga (ela é minha amiga).|Cada pessoa tem a sua forma: yo soy · tú eres · usted es · él / ella es · nosotros somos · ustedes son · ellos / ellas son.|Como no português, o sujeito pode cair, porque o verbo já mostra quem é: Soy Ana = Yo soy Ana.|tú é o "você" informal; usted é o formal, e o verbo vai como com él: ¿Usted es la señora López?',
  ex: '¿Eres Mateo?=Você é o Mateo?|Soy estudiante.=Eu sou estudante.|Ella es mi profesora.=Ela é a minha professora.|¡Hola! ¡Buenos días!=Olá! Bom dia!',
  bd: ['Soy=V^ser, forma de yo: o sujeito pode cair|Ana.=PR^quem eu sou', 'Eu sou a Ana.'],
  rule: 'ser_hola',
  hw: 'Apresente-se em voz alta três vezes, como se encontrasse três pessoas diferentes: ¡Hola! Soy … Mucho gusto. Depois escreva três frases sobre pessoas que você conhece, com él, ella e tú (Ella es mi amiga…).',
  deep: `
Hoje você aprende a primeira conversa de qualquer viagem ou reunião: cumprimentar, dizer o seu nome e perguntar o da outra pessoa. A boa notícia: o espanhol faz isso quase como o português.
# Passo 1: cumprimentar
| Em espanhol | Quando usar |
| ¡Hola! | oi, olá: serve para tudo |
| ¡Buenos días! | bom dia: até o meio-dia |
| ¡Buenas tardes! | boa tarde |
| ¡Buenas noches! | boa noite, ao chegar e ao sair |
| ¡Adiós! / ¡Chau! | tchau |
~ ¡Hola! Soy Ana. = Oi! Eu sou a Ana.
~ ¡Buenos días! = Bom dia!
BR Repare no plural: **buenos días**, **buenas tardes**, **buenas noches**. E, como no português, buenas noches serve para chegar e para sair.
# Passo 2: o verbo ser
| Pessoa | Ser |
| yo (eu) | soy |
| tú (você, informal) | eres |
| usted (você, formal) | es |
| él / ella (ele / ela) | es |
| nosotros, nosotras | somos |
| ustedes (vocês) | son |
| ellos / ellas | son |
~ Soy estudiante. = Eu sou estudante.
~ Ella es mi profesora. = Ela é a minha professora.
~ Somos amigos. = Somos amigos.
# Passo 3: tú ou usted?
@ V:Informal ou formal?;tú|amigos, família, colegas: ¿Cómo te llamas?;usted|desconhecidos mais velhos, atendimento: ¿Cómo se llama?
~ ¿Usted es la señora López? = A senhora é a dona López?
! Na América Latina, **ustedes** é o plural de tú e de usted. O **vosotros** é da Espanha.
# Passo 4: perguntar e dizer o nome
~ ¿Cómo te llamas? = Como você se chama?
~ Me llamo Mateo. = Eu me chamo Mateo.
~ Mucho gusto. = Muito prazer.
| Pergunta | Resposta |
| ¿Cómo te llamas? | Me llamo Ana. |
| ¿Cómo se llama? (formal) | Me llamo Ana López. |
# Passo 5: ojo, brasileño: os sinais de abrir
Em espanhol, pergunta e exclamação têm sinal **no começo** também, de cabeça para baixo: **¿** e **¡**.
~ ¿Eres Mateo? = Você é o Mateo?
~ ¡Hola! ¡Buenos días! = Olá! Bom dia!
! E o **ll** de llamo soa como um "i" forte, quase "j": me "jamo" (na Argentina, "xamo"). Nunca como o lh de "olho".
> Treine agora: apresente-se em voz alta: ¡Hola! Soy … Mucho gusto.
? Como se diz "eu sou"? || Soy (ou Yo soy).
? Qual é o "você" formal? || usted
? Como começa uma pergunta escrita em espanhol? || com ¿, de cabeça para baixo
`,
});

NL('es-donde', {
  de: '¿De dónde eres?', pt: 'Dizer de onde você é', gt: 'ser de · nacionalidades · perguntar e negar',
  gx: 'Para dizer a origem, use ser de + país: Soy de Brasil. A nacionalidade muda com o gênero: brasileño / brasileña, mexicano / mexicana. Para perguntar, basta a entonação e os sinais ¿ ?: ¿Eres de Chile? Para negar, no antes do verbo: No soy argentina.',
  ge: 'Soy de Brasil.=Sou do Brasil.|¿De dónde eres?=De onde você é?|No soy argentina, soy brasileña.=Não sou argentina, sou brasileira.',
  v: 'país=país=🌍|Brasil=Brasil=🇧🇷|brasileño, brasileña=brasileiro, brasileira=🙋|ciudad=cidade=🏙️|vivo en=moro em=🏠|hablo=falo=🗣️|español=espanhol=💬|portugués=português=💬|de dónde=de onde=❓|dónde=onde=📍',
  x: 'mexicano, mexicana=mexicano, mexicana|argentino, argentina=argentino, argentina|colombiano, colombiana=colombiano, colombiana|chileno, chilena=chileno, chilena|peruano, peruana=peruano, peruana|uruguayo, uruguaya=uruguaio, uruguaia|español, española=espanhol, espanhola (da Espanha)|inglés=inglês|un poco=um pouco|qué bien=que legal',
  dlg: '¿De dónde eres, Mateo?=De onde você é, Mateo?|Soy de México, de Guadalajara. ¿Y tú?=Sou do México, de Guadalajara. E você?|Soy brasileña, de São Paulo.=Sou brasileira, de São Paulo.|¡Qué bien! ¿Hablas español?=Que legal! Você fala espanhol?',
  cz: '¿De dónde ___ tú?=eres=es=soy|Soy ___ Brasil.=de=do=del|No ___ argentina, soy brasileña.=soy=estoy=es',
  whys: 'com tú, ser é eres|origem: ser de + país, sem "do"|com yo, ser é soy',
  pts: 'ser de + país diz a origem: Soy de Brasil. Os países, em geral, vão sem artigo: de Brasil, de México, de Chile.|A nacionalidade concorda com quem fala: brasileño / brasileña, mexicano / mexicana. Termina em consoante? Acrescente -a: español / española. Escreve-se com minúscula, como em português.|Pergunta sim ou não: a mesma ordem da afirmação, com ¿ no começo e ? no fim: ¿Eres de Chile?|Negativa: no antes do verbo: No soy argentina. No hablo inglés.',
  ex: 'Vivo en São Paulo.=Moro em São Paulo.|Hablo portugués y un poco de español.=Falo português e um pouco de espanhol.|¿Eres de Colombia?=Você é da Colômbia?|Mateo es mexicano.=O Mateo é mexicano.',
  bd: ['Soy=V^ser, forma de yo|de=C^de: origem (sem "do")|Brasil.=L^o país, sem artigo', 'Sou do Brasil.'],
  rule: 'origen',
  hw: 'Escreva de onde são cinco pessoas que você conhece ou admira (Shakira es de Colombia…) e uma frase sobre você: Soy de … Vivo en … Hablo …',
  deep: `
Hoje você aprende a segunda pergunta de toda conversa: de onde a pessoa é. Em espanhol, você vai precisar do verbo ser e de **de**.
# Passo 1: ser de + país
@ F:A origem;Quem^s|ser^v|de + país^p;(Yo)|soy|de Brasil.;Mateo|es|de México.;Ellos|son|de Chile.
~ Soy de Brasil. = Sou do Brasil.
~ Mateo es de México. = O Mateo é do México.
BR Em português dizemos "do Brasil", "da Argentina". Em espanhol, os países em geral vão **sem artigo**: de Brasil, de Argentina, de México.
# Passo 2: as nacionalidades
| País | Ele | Ela |
| Brasil | brasileño | brasileña |
| México | mexicano | mexicana |
| Argentina | argentino | argentina |
| Colombia | colombiano | colombiana |
| España | español | española |
~ Soy brasileña. = Sou brasileira.
~ Mateo es mexicano. = O Mateo é mexicano.
! Como em português, a nacionalidade começa com **minúscula**: brasileño, mexicana.
# Passo 3: perguntar e negar
| Afirmação | Pergunta | Negativa |
| Eres de Chile. | ¿Eres de Chile? | No eres de Chile. |
| Hablas español. | ¿Hablas español? | No hablas español. |
~ ¿De dónde eres? = De onde você é?
~ No soy argentina, soy brasileña. = Não sou argentina, sou brasileira.
# Passo 4: onde mora e que língua fala
~ Vivo en São Paulo. = Moro em São Paulo.
~ Hablo portugués y un poco de español. = Falo português e um pouco de espanhol.
| Verbo | Yo | Tú |
| vivir (morar) | vivo | vives |
| hablar (falar) | hablo | hablas |
# Passo 5: ojo, brasileño: "do" e "da" não existem
| Português | Espanhol |
| Sou do Brasil. | Soy de Brasil. |
| Sou da Colômbia. | Soy de Colombia. |
| Moro no Rio. | Vivo en Río. |
~ ¿Eres de Colombia? = Você é da Colômbia?
! "Soy do Brasil" é portunhol puro. E lembre: **en** é "em", "no" e "na" ao mesmo tempo.
> Treine agora: diga de onde você é, onde mora e que línguas fala.
? Como se diz "sou do Brasil"? || Soy de Brasil.
? Feminino de brasileño: || brasileña
? Como se nega em espanhol? || com no antes do verbo: No soy …
`,
});

NL('es-letras', {
  de: '¿Cómo se escribe?', pt: 'O alfabeto e soletrar', gt: 'as letras · deletrear · o e-mail',
  gx: 'As letras do espanhol têm nomes parecidos com os do português, com algumas diferenças: h é hache, j é jota, ñ é eñe, v é uve (ou ve). Para pedir que alguém soletre: ¿Cómo se escribe? No e-mail, @ é arroba e o ponto é punto.',
  ge: '¿Cómo se escribe?=Como se escreve?|Mi apellido es Souza: S-O-U-Z-A.=O meu sobrenome é Souza: S-O-U-Z-A.|Mi correo es ana arroba mail punto com.=O meu e-mail é ana arroba mail ponto com.',
  v: 'letra=letra=🔤|deletrear=soletrar=🗣️|escribir=escrever=✍️|apellido=sobrenome=🪪|correo electrónico=e-mail=📧|arroba=arroba=📨|punto=ponto=⚫|mayúscula=maiúscula=🔠|minúscula=minúscula=🔡|repetir=repetir=🔁',
  x: 'guion=hífen|guion bajo=underline (_)|eñe=a letra ñ|jota=a letra j|hache=a letra h|ce=a letra c|ge=a letra g|uve=a letra v|be=a letra b|zeta=a letra z',
  dlg: '¿Cómo te llamas?=Como você se chama?|Ana Souza.=Ana Souza.|¿Cómo se escribe tu apellido?=Como se escreve o seu sobrenome?|Ese, o, u, zeta, a. Souza.=Esse, o, u, zê, a. Souza.',
  cz: '¿Cómo se ___ tu apellido?=escribe=escribes=escrito|Mi correo es ana ___ mail punto com. (@)=arroba=at=aroba|La letra ñ se llama ___.=eñe=ene=enhe',
  whys: 'cómo se escribe: forma fixa, com se|@ no e-mail: arroba, como em português|ñ é uma letra própria: eñe',
  pts: 'As letras: a, be, ce, de, e, efe, ge, hache, i, jota, ka, ele, eme, ene, eñe, o, pe, cu, erre, ese, te, u, uve (ou ve), uve doble, equis, ye, zeta.|O ñ é uma letra própria, com o som do nosso nh: España, mañana.|b e v têm o mesmo som em espanhol. Por isso se pergunta ¿con be o con uve? (na América Latina também se diz be larga e ve corta).|No e-mail: @ = arroba, . = punto, - = guion, _ = guion bajo.',
  ex: '¿Puede repetir, por favor?=Pode repetir, por favor?|¿Con be o con uve?=Com b ou com v?|Mi nombre es con hache.=O meu nome é com h.|Es con mayúscula.=É com maiúscula.',
  bd: ['¿Cómo=C^como|se_escribe=V^se escreve: forma fixa|tu_apellido?=OA^o seu sobrenome', 'Como se escreve o seu sobrenome?'],
  rule: 'deletrear',
  hw: 'Soletre em voz alta o seu nome, o seu sobrenome e o seu e-mail, letra por letra, em espanhol. Depois escreva o seu e-mail como se diz: ana arroba … punto com.',
  deep: `
Hoje você aprende a soletrar, uma habilidade que você vai usar em hotéis, cadastros e ao telefone, porque o seu nome quase nunca é espanhol.
# Passo 1: as letras
| Letra | Nome | Letra | Nome |
| a | a | ñ | eñe |
| b | be | o | o |
| c | ce | p | pe |
| d | de | q | cu |
| e | e | r | erre |
| f | efe | s | ese |
| g | ge | t | te |
| h | hache | u | u |
| i | i | v | uve |
| j | jota | w | uve doble |
| k | ka | x | equis |
| l | ele | y | ye |
| m | eme | z | zeta |
| n | ene | | |
~ ¿Cómo se escribe? = Como se escreve?
~ Mi apellido es Souza: S-O-U-Z-A. = O meu sobrenome é Souza: S-O-U-Z-A.
# Passo 2: b e v, o mesmo som
Em espanhol, **b** e **v** soam igual. Por isso a pergunta clássica:
~ ¿Con be o con uve? = Com b ou com v?
| Pergunta | Resposta |
| ¿Con be o con uve? | Con uve: Valeria. |
| ¿Con ese o con zeta? | Con zeta: Souza. |
# Passo 3: o e-mail
| Símbolo | Em espanhol |
| @ | arroba |
| . | punto |
| - | guion |
| _ | guion bajo |
~ Mi correo es ana arroba mail punto com. = O meu e-mail é ana arroba mail ponto com.
# Passo 4: pedir para repetir
~ ¿Puede repetir, por favor? = Pode repetir, por favor?
~ Es con mayúscula. = É com maiúscula.
| Em espanhol | Em português |
| ¿Puede repetir? | Pode repetir? |
| más despacio | mais devagar |
| con mayúscula | com maiúscula |
# Passo 5: ojo, brasileño: o j e o h
| Letra | Som em espanhol |
| j (jota) | um "r" raspado na garganta: Juan soa "Ruan" |
| h (hache) | muda, como em português: hola soa "ola" |
| ll | um "i" forte: llamo soa "iamo" ou "jamo" |
~ Mi nombre es con hache. = O meu nome é com h.
! Ao soletrar "jota", diga "**rrota**", com o som da garganta, e não "jota" como em português.
> Treine agora: soletre o seu nome completo em voz alta, letra por letra.
? Como se chama a letra ñ? || eñe
? Como se diz @ no e-mail? || arroba
? Como soa o j em espanhol? || como um "r" raspado na garganta
`,
});

NL('es-edad', {
  de: '¿Cuántos años tienes?', pt: 'A idade e os números', gt: 'tener · números de 0 a 100 · o telefone',
  gx: 'A idade se diz com tener, como em português: Tengo treinta años. Os números de 16 a 29 são escritos numa palavra só (dieciséis, veintidós); de 31 em diante, com y: treinta y uno, cuarenta y cinco. E cuidado: ano é año, com ñ.',
  ge: 'Tengo treinta años.=Tenho trinta anos.|¿Cuántos años tienes?=Quantos anos você tem?|Mi hermano tiene veinte años.=O meu irmão tem vinte anos.',
  v: 'tener=ter=🤲|años=anos=🎂|número=número=🔢|teléfono=telefone=📞|cumpleaños=aniversário=🎉|cero=zero=0️⃣|diez=dez=🔟|veinte=vinte=2️⃣|cien=cem=💯|cuántos=quantos=❓',
  x: 'uno=um|dos=dois|tres=três|cuatro=quatro|cinco=cinco|seis=seis|siete=sete|ocho=oito|nueve=nove|treinta=trinta',
  dlg: '¿Cuántos años tienes, Ana?=Quantos anos você tem, Ana?|Tengo treinta años. ¿Y tú?=Tenho trinta anos. E você?|Tengo veinticinco.=Tenho vinte e cinco.|¿Y cuál es tu número de teléfono?=E qual é o seu número de telefone?',
  cz: '¿Cuántos años ___? (tener, tú)=tienes=tiene=tengo|Yo ___ treinta años.=tengo=soy=tienes|16 = ___=dieciséis=diez y seis=dezesseis',
  whys: 'com tú, tener é tienes|a idade é com tener: tengo|de 16 a 29, uma palavra só: dieciséis',
  pts: 'tener (ter): yo tengo · tú tienes · él / ella / usted tiene · nosotros tenemos · ellos / ustedes tienen. A idade se diz com tener, como em português.|Números: 1 uno, 2 dos, 3 tres, 4 cuatro, 5 cinco, 6 seis, 7 siete, 8 ocho, 9 nueve, 10 diez, 11 once, 12 doce, 13 trece, 14 catorce, 15 quince.|De 16 a 29, uma palavra só: dieciséis, diecisiete, veinte, veintiuno, veintidós. Depois, com y: treinta y uno, cuarenta y cinco, noventa y nueve.|100 é cien; de 101 em diante, ciento: ciento uno. Telefone: diga os dígitos um por um ou em pares.',
  ex: 'Mi número es el 98 765 4321.=O meu número é 98 765 4321.|Tengo dieciséis años.=Tenho dezesseis anos.|Mi madre tiene cincuenta y dos años.=A minha mãe tem cinquenta e dois anos.|Hoy es mi cumpleaños.=Hoje é o meu aniversário.',
  bd: ['Tengo=V^tener, forma de yo|treinta=C^30|años.=OA^años, com ñ', 'Tenho trinta anos.'],
  rule: 'edad',
  hw: 'Escreva a idade de cinco pessoas da sua família (Mi madre tiene …) e o seu número de telefone por extenso, em espanhol.',
  deep: `
Hoje você aprende a dizer a idade e o telefone. Para isso, precisa do verbo **tener** e dos números.
# Passo 1: tener
| Pessoa | Tener |
| yo | tengo |
| tú | tienes |
| él / ella / usted | tiene |
| nosotros | tenemos |
| ellos / ustedes | tienen |
~ Tengo treinta años. = Tenho trinta anos.
~ ¿Cuántos años tienes? = Quantos anos você tem?
# Passo 2: de 0 a 15
| 0 a 3 | 4 a 7 | 8 a 11 | 12 a 15 |
| 0 cero | 4 cuatro | 8 ocho | 12 doce |
| 1 uno | 5 cinco | 9 nueve | 13 trece |
| 2 dos | 6 seis | 10 diez | 14 catorce |
| 3 tres | 7 siete | 11 once | 15 quince |
~ Mi hermano tiene doce años. = O meu irmão tem doze anos.
# Passo 3: de 16 a 100
| Número | Em espanhol |
| 16 | dieciséis |
| 20 | veinte |
| 22 | veintidós |
| 30 | treinta |
| 45 | cuarenta y cinco |
| 50 | cincuenta |
| 100 | cien |
~ Tengo dieciséis años. = Tenho dezesseis anos.
~ Mi madre tiene cincuenta y dos años. = A minha mãe tem cinquenta e dois anos.
! De 16 a 29: **uma palavra só** (veintidós). De 31 em diante: **com y** (treinta y uno).
# Passo 4: o telefone
~ ¿Cuál es tu número de teléfono? = Qual é o seu número de telefone?
~ Mi número es el 98 765 4321. = O meu número é 98 765 4321.
| Em espanhol | Em português |
| nueve, ocho | nove, oito |
| siete, seis, cinco | sete, seis, cinco |
# Passo 5: ojo, brasileño: años, e não "anos"
| Escreva | Não escreva |
| años | anos |
| veinte | vinte |
| cincuenta | cinquenta |
~ Hoy es mi cumpleaños. = Hoje é o meu aniversário.
! **años** (anos) tem ñ. Sem o til, a palavra vira outra, e é uma gafe clássica. Escreva sempre **años**.
> Treine agora: diga em voz alta a sua idade e o seu telefone, número por número.
? Como se diz "tenho trinta anos"? || Tengo treinta años.
? 16 em espanhol: || dieciséis
? 45 em espanhol: || cuarenta y cinco
`,
});

NL('es-trabajo', {
  de: '¿A qué te dedicas?', pt: 'Profissão e trabalho', gt: 'profissões · presente: -ar, -er, -ir',
  gx: 'A profissão vai sem artigo, como em português: Soy profesora. Para dizer onde trabalha, use os verbos regulares do presente: trabajo (-ar), aprendo (-er), vivo (-ir). Para perguntar: ¿A qué te dedicas? ou ¿En qué trabajas?',
  ge: 'Soy profesora.=Sou professora.|Trabajo en una oficina.=Trabalho num escritório.|Vivo en Curitiba y aprendo español.=Moro em Curitiba e aprendo espanhol.',
  v: 'trabajar=trabalhar=💼|vivir=viver, morar=🏠|aprender=aprender=📚|médico, médica=médico, médica=🩺|enfermero, enfermera=enfermeiro, enfermeira=💉|ingeniero, ingeniera=engenheiro, engenheira=🏗️|abogado, abogada=advogado, advogada=⚖️|empresa=empresa=🏢|oficina=escritório=🖥️|hospital=hospital=🏥',
  x: 'escuela=escola|banco=banco|tienda=loja|desde casa=de casa|jubilado, jubilada=aposentado, aposentada|camarero, camarera=garçom, garçonete|programador, programadora=programador, programadora|hermana=irmã|pero=mas|ahora=agora',
  dlg: '¿A qué te dedicas?=O que você faz?|Soy enfermera. Trabajo en un hospital. ¿Y tú?=Sou enfermeira. Trabalho num hospital. E você?|Soy ingeniero, pero ahora trabajo desde casa.=Sou engenheiro, mas agora trabalho de casa.|¡Qué bien!=Que bom!',
  cz: 'Yo ___ en un hospital. (trabajar)=trabajo=trabaja=trabajar|Tú ___ en Curitiba. (vivir)=vives=vive=vivo|Ella ___ médica. (sem artigo)=es=es una=está',
  whys: '-ar com yo: trabajo|-ir com tú: vives|profissão: ser, sem artigo',
  pts: 'A profissão vai sem artigo, como em português: Soy profesora (e não "soy una profesora"). Com adjetivo, o artigo volta: Es una profesora excelente.|-ar (trabajar): trabajo, trabajas, trabaja, trabajamos, trabajan.|-er (aprender): aprendo, aprendes, aprende, aprendemos, aprenden. -ir (vivir): vivo, vives, vive, vivimos, viven.|Para perguntar a profissão: ¿A qué te dedicas? (informal), ¿A qué se dedica? (formal) ou ¿En qué trabajas?',
  ex: 'Mi hermana es médica.=A minha irmã é médica.|¿Dónde trabajas?=Onde você trabalha?|Trabajamos en un banco.=Trabalhamos num banco.|Ellos viven en Lima.=Eles moram em Lima.',
  bd: ['Trabajo=V^-ar, forma de yo|en_una_oficina.=L^oficina: escritório (falso amigo!)', 'Trabalho num escritório.'],
  rule: 'profesion',
  hw: 'Escreva a profissão de cinco pessoas que você conhece e onde elas trabalham (Mi hermana es médica. Trabaja en un hospital.). Depois diga a sua: Soy … Trabajo en …',
  deep: `
Hoje você aprende a dizer o que faz e onde trabalha. Para isso, vai conhecer os verbos regulares do presente, que funcionam quase como em português.
# Passo 1: a profissão
| Ele | Ela |
| profesor | profesora |
| médico | médica |
| enfermero | enfermera |
| ingeniero | ingeniera |
| abogado | abogada |
~ Soy profesora. = Sou professora.
~ Mi hermana es médica. = A minha irmã é médica.
BR Como em português, a profissão vai **sem artigo**: Soy ingeniero (e não "soy un ingeniero").
# Passo 2: os verbos em -ar
@ M:trabajar;Pessoa|Forma;yo|trabajo;tú|trabajas;él / ella / usted|trabaja;nosotros|trabajamos;ellos / ustedes|trabajan
~ Trabajo en una oficina. = Trabalho num escritório.
~ Trabajamos en un banco. = Trabalhamos num banco.
# Passo 3: os verbos em -er e -ir
| Pessoa | aprender | vivir |
| yo | aprendo | vivo |
| tú | aprendes | vives |
| él / ella | aprende | vive |
| nosotros | aprendemos | vivimos |
| ellos | aprenden | viven |
~ Vivo en Curitiba y aprendo español. = Moro em Curitiba e aprendo espanhol.
~ Ellos viven en Lima. = Eles moram em Lima.
# Passo 4: perguntar
| Informal | Formal |
| ¿A qué te dedicas? | ¿A qué se dedica? |
| ¿Dónde trabajas? | ¿Dónde trabaja? |
~ ¿A qué te dedicas? = O que você faz?
~ ¿Dónde trabajas? = Onde você trabalha?
# Passo 5: ojo, brasileño: oficina é escritório
| Em espanhol | Quer dizer |
| oficina | escritório |
| taller | oficina (de carro) |
| en un hospital | num hospital |
~ Trabajo en una oficina. = Trabalho num escritório.
~ Llevo el carro al taller. = Levo o carro à oficina.
! "Num", "numa", "no", "na" não existem em espanhol: diga **en un**, **en una**, **en el**, **en la**.
> Treine agora: diga a sua profissão, onde trabalha e onde mora.
? Profissão leva artigo em espanhol? || Não: Soy profesora.
? "Trabalho" (eu): || trabajo
? O que é "oficina" em espanhol? || escritório
`,
});

NL('es-ficha', {
  de: 'Una ficha de inscripción', pt: 'Ler e preencher uma ficha', gt: 'nombre, apellidos, fecha de nacimiento, nacionalidad',
  gx: 'Numa ficha em espanhol, nombre é o nome e apellidos são os sobrenomes: na América Latina, as pessoas usam dois, o do pai e o da mãe (García López). A data se escreve como no Brasil: dia, mês e ano. E os formulários tratam você por usted: Escriba, Firme, Complete.',
  ge: 'Me llamo Ana Souza Lima.=Eu me chamo Ana Souza Lima.|Mi fecha de nacimiento es el 5 de marzo de 1990.=A minha data de nascimento é 5 de março de 1990.|Hablo portugués e inglés.=Falo português e inglês.',
  v: 'ficha=ficha=📋|inscripción=inscrição=📝|apellidos=sobrenomes=🪪|fecha de nacimiento=data de nascimento=🎂|nacionalidad=nacionalidade=🌍|dirección=endereço=🏠|correo=e-mail=📧|idiomas=línguas, idiomas=💬|firma=assinatura=✍️|curso=curso=🎓',
  x: 'calle=rua|código postal=CEP|estado civil=estado civil|soltero, soltera=solteiro, solteira|casado, casada=casado, casada|mañana=manhã|tarde=tarde|noche=noite|nivel=nível|completo=completo',
  dlg: 'Buenos días. Quiero inscribirme en el curso.=Bom dia. Quero me inscrever no curso.|Muy bien. ¿Su nombre completo?=Muito bem. O seu nome completo?|Ana Souza Lima.=Ana Souza Lima.|Gracias. Complete esta ficha, por favor.=Obrigado. Preencha esta ficha, por favor.',
  cz: 'Mi ___ es Souza. (sobrenome)=apellido=apodo=nombre|Hablo portugués ___ inglés. (e)=e=y=i|Mi fecha de ___ es el 5 de marzo. (nascimento)=nacimiento=nacimento=nació',
  whys: 'sobrenome: apellido (apodo é apelido)|antes de som de i, y vira e|nascimento: nacimiento',
  pts: 'nombre é o nome; apellido é o sobrenome (e não o apelido, que é apodo). Na América Latina, as pessoas usam dois apellidos: o do pai e o da mãe.|A data vai como no Brasil: dia, mês e ano. 05/03/1990 é el 5 de marzo de 1990.|Os formulários tratam você por usted: Escriba, Complete, Firme aquí.|y (e) vira e antes de palavra que começa com som de i: español e inglés, padre e hijo.',
  ex: 'Escriba su nombre con mayúscula.=Escreva o seu nome com maiúscula.|Firme aquí, por favor.=Assine aqui, por favor.|¿Cuál es su dirección?=Qual é o seu endereço?|Mis apellidos son Souza Lima.=Os meus sobrenomes são Souza Lima.',
  bd: ['Mis_apellidos=S^sobrenomes (o do pai e o da mãe)|son=V|Souza_Lima.=PR', 'Os meus sobrenomes são Souza Lima.'],
  rule: 'ficha',
  le: {
    texto: {
      t: 'Ficha de inscripción · Escuela de Español Bogotá', kind: 'leitura',
      intro: 'A Valentina se inscreveu num curso de espanhol para estrangeiros. Leia a ficha que ela preencheu como exemplo para a turma e responda.',
      paras: ['Nombre: Valentina', 'Apellidos: García López', 'Fecha de nacimiento: 14/08/1995', 'Nacionalidad: colombiana', 'Dirección: Calle 45, número 12, Bogotá', 'Idiomas: español e inglés', 'Curso: nivel A1, por la mañana'],
      qs: [
        { q: 'Quais são os sobrenomes da Valentina?', o: ['García López', 'Valentina García', 'López Bogotá'], a: 0 },
        { q: 'Quando ela nasceu?', o: ['em 14 de agosto de 1995', 'em 8 de setembro de 1995', 'em 14 de maio de 1985'], a: 0 },
        { q: 'Que línguas ela fala?', o: ['espanhol e inglês', 'espanhol e português', 'só espanhol'], a: 0 },
        { q: 'Quando é o curso?', o: ['de manhã', 'à tarde', 'à noite'], a: 0 },
      ],
    },
    escrita: {
      t: 'Preencha a sua ficha', tipo: 'form',
      pede: 'Agora é a sua vez: preencha a ficha com os seus dados, em espanhol. Pode inventar, se preferir.',
      campos: [
        { l: 'Nombre', d: 'nome', re: '^\\p{Lu}[\\p{L}\' -]+$', f: 'u', err: 'O nome começa com letra maiúscula.' },
        { l: 'Apellidos', d: 'sobrenomes', re: '^\\p{Lu}[\\p{L}\' -]+$', f: 'u', err: 'Os sobrenomes começam com maiúscula: Souza Lima.' },
        { l: 'Nacionalidad', d: 'nacionalidade, em espanhol', re: '^\\p{L}+$', f: 'u', err: 'Escreva a nacionalidade numa palavra: brasileña, brasileño…', bad: [['^brasileir[oa]$', 'Em espanhol é <b>brasileño / brasileña</b>.'], ['^brasil$', 'Aqui vai a nacionalidade: <b>brasileño / brasileña</b>.']] },
        { l: 'Ciudad', d: 'cidade onde você mora', re: '^\\p{Lu}[\\p{L} .-]+$', f: 'u', err: 'Escreva o nome da cidade com maiúscula.' },
        { l: 'Fecha de nacimiento', d: 'dd/mm/aaaa', re: '^\\d{1,2}/\\d{1,2}/\\d{4}$', f: 'u', err: 'Escreva a data com dia, mês e ano: 05/03/1990.' },
        { l: 'Idiomas', d: 'línguas que você fala, em espanhol', re: '(español|portugués|inglés|francés|italiano|alemán)', f: 'iu', err: 'Escreva as línguas em espanhol: portugués, español, inglés…', bad: [['(^|[ ,])(português|espanhol|inglês|francês)([ ,]|$)', 'Escreva em espanhol: <b>portugués</b>, <b>español</b>, <b>inglés</b>.']] },
      ],
      modelo: 'Ana · Souza Lima · brasileña · Curitiba · 05/03/1990 · portugués, español',
    },
  },
  deep: `
Esta lição é de **ler e escrever**. Você vai ler a ficha de inscrição de uma aluna e depois preencher a sua. Antes, quatro coisas que toda ficha em espanhol tem.
# Passo 1: os campos da ficha
| Campo | Significa |
| Nombre | nome |
| Apellidos | sobrenomes |
| Fecha de nacimiento | data de nascimento |
| Nacionalidad | nacionalidade |
| Dirección | endereço |
| Idiomas | línguas |
~ Me llamo Ana Souza Lima. = Eu me chamo Ana Souza Lima.
~ ¿Cuál es su dirección? = Qual é o seu endereço?
# Passo 2: dois sobrenomes
Na América Latina, cada pessoa tem **dois apellidos**: o primeiro do pai e o primeiro da mãe.
@ E:Os sobrenomes;Valentina^s|García^v|López^p
~ Mis apellidos son Souza Lima. = Os meus sobrenomes são Souza Lima.
! **apellido** é sobrenome. Apelido, em espanhol, é **apodo**.
# Passo 3: a data e o usted
~ Mi fecha de nacimiento es el 5 de marzo de 1990. = A minha data de nascimento é 5 de março de 1990.
| Instrução | Significa |
| Escriba | Escreva |
| Complete | Preencha |
| Firme aquí | Assine aqui |
~ Firme aquí, por favor. = Assine aqui, por favor.
BR A data vai como no Brasil: dia, mês e ano. Que alívio depois do inglês! 😄
# Passo 4: ojo, brasileño: y vira e
~ Hablo portugués e inglés. = Falo português e inglês.
| Antes de som de i | Exemplo |
| y vira e | español e inglés |
| y vira e | padre e hijo |
! O "e" do português é **y** em espanhol. Mas, antes de palavra com som de **i** (inglés, hijo), ele vira **e**, para não juntar dois "i".
> Agora leia a ficha da Valentina e preencha a sua.
? Como se diz "sobrenome"? || apellido
? Como fica "espanhol e inglês"? || español e inglés
? Em que ordem vai a data? || dia, mês e ano, como no Brasil
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('¡Hola! Soy Ana.',
  'M:El verbo ser;Pessoa|Forma;yo|soy;tú|eres;usted / él / ella|es;nosotros|somos;ustedes / ellos|son',
  'V:tú ou usted?;tú|informal: amigos, família;usted|formal: desconhecidos, atendimento');
V('¿De dónde eres?',
  'F:A origem;Quem^s|ser^v|de + país^p;(Yo)|soy|de Brasil.;Mateo|es|de México.',
  'M:Nacionalidades;Ele|Ela;brasileño|brasileña;mexicano|mexicana;español|española');
V('¿Cómo se escribe?',
  'P:Letras com nome próprio;h=hache;j=jota;ñ=eñe;v=uve;z=zeta',
  'M:O e-mail;Símbolo|Em espanhol;@|arroba;.|punto;-|guion');
V('¿Cuántos años tienes?',
  'M:tener;Pessoa|Forma;yo|tengo;tú|tienes;él / ella|tiene;nosotros|tenemos;ellos|tienen',
  'P:Os números;16 a 29=uma palavra: veintidós;31 em diante=com y: treinta y uno;100=cien');
V('¿A qué te dedicas?',
  'M:Presente regular;Pessoa|-ar|-er|-ir;yo|trabajo|aprendo|vivo;tú|trabajas|aprendes|vives;él / ella|trabaja|aprende|vive',
  'V:Falso amigo;oficina|escritório;taller|oficina (de carro)');
V('Una ficha de inscripción',
  'P:Uma ficha;Nombre=nome;Apellidos=sobrenomes (pai e mãe);Fecha de nacimiento=dia/mês/ano;Idiomas=línguas',
  'E:Os sobrenomes;Valentina^s|García (pai)^v|López (mãe)^p');
S_('¡Hola! Soy Ana.', 'cómo te llamas=como você se chama|yo=eu|tú=você (informal)|usted=você (formal), o senhor, a senhora|él=ele|ella=ela|mi=meu, minha|señora=senhora|somos=somos|eres=você é|llamo=chamo');
S_('¿De dónde eres?', 'México=México|Guadalajara=Guadalajara|Colombia=Colômbia|Chile=Chile|Argentina=Argentina|España=Espanha|hablas=você fala|vivir=morar|hablar=falar|vives=você mora|Río=Rio');
S_('¿Cómo se escribe?', 'cómo=como|se escribe=se escreve|tu=seu, sua|mi=meu, minha|mail=correio; aqui, o nome do site|com=com, no e-mail (ponto com)|puede=pode|con=com|es=é|ese=esse (a letra s)|o=ou; a letra o|u=a letra u|zeta=a letra z|a=a letra a|mayúsculas=maiúsculas|más despacio=mais devagar');
S_('¿Cuántos años tienes?', 'hermano=irmão|madre=mãe|y=e|cuál=qual|tu=seu, sua|el=o|veinticinco=vinte e cinco|cincuenta=cinquenta|dieciséis=dezesseis|doce=doze|cuarenta=quarenta|hoy=hoje|veintidós=vinte e dois|treinta y uno=trinta e um');
S_('¿A qué te dedicas?', 'a qué te dedicas=o que você faz|soy=sou|en=em|un=um|una=uma|y=e|tú=você|qué bien=que bom|desde=de, desde|trabajamos=trabalhamos|viven=moram|Lima=Lima|llevo=levo|carro=carro|al=ao|taller=oficina (de carro)|aprendo=aprendo|excelente=excelente');
S_('Una ficha de inscripción', 'quiero=quero|inscribirme=me inscrever|muy bien=muito bem|su=seu, sua (de usted)|complete=preencha|esta=esta|escriba=escreva|firme=assine|aquí=aqui|mis=meus, minhas|son=são|el 5 de marzo=5 de março|de=de|marzo=março|me llamo=eu me chamo|hablo=falo|padre=pai|hijo=filho|cuál=qual');
['mateo', 'valentina', 'garcía', 'lópez', 'souza', 'lima', 'bogotá', 'guadalajara', 'curitiba', 'shakira'].forEach((n) => NAMES.add(n));

ES_MODS.push({ lv: 'A1', n: 'Primeiros contatos', l: ['es-hola', 'es-donde', 'es-letras', 'es-edad', 'es-trabajo', 'es-ficha'] });
