// Inglês · curso (piloto). Carregado depois de en/base.js, só em ingles.html.
// Mesmo formato das lições novas do alemão (data/curriculo.js): NL(id, {...}) registra a lição, SEQ monta a trilha.
// Este arquivo: o motor das lições (NL) e o Módulo 1 (First contacts), conforme docs/ingles-estrutura.md. Inglês americano.
// Diferenças do alemão, adaptadas à língua: sem cores de gênero; a profissão leva artigo (a / an); idade com to be;
// e cada aula tem um passo "Som da lição" com o contraste de pronúncia que o brasileiro mais erra.

/* ---------- 1. lições ---------- */
// Cada arquivo de módulo (en/m02.js, en/m03.js…) registra as suas lições com NL e o módulo com EN_MODS.push.
// en/trilha.js, carregado por último, monta a trilha na ordem de EN_MODS.
const NEW_LESSONS = {};
const EN_MODS = [];
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

NL('en-hi', {
  de: "Hi! I'm Ana.", pt: 'Cumprimentar e se apresentar', gt: 'to be: I am, you are · pronomes',
  gx: 'Em inglês, ser e estar são um verbo só: to be. I am (eu sou, eu estou), you are (você é), he is, she is (ele é, ela é). Na fala, quase sempre contraído: I\'m, you\'re, he\'s, she\'s. E o sujeito nunca some: I\'m Ana, e não só "Am Ana".',
  ge: "I'm Ana.=Eu sou a Ana.|You are my teacher.=Você é o meu professor.|He's my friend.=Ele é meu amigo.",
  v: 'hi=oi=👋|hello=olá=🙋|my=meu, minha=👤|name=nome=🪪|friend=amigo, amiga=🤝|teacher=professor, professora=🧑‍🏫|student=aluno, aluna=🎒|nice to meet you=prazer em conhecer você=😊|good morning=bom dia=🌅|goodbye=tchau, até logo=🚪',
  x: 'good afternoon=boa tarde|good evening=boa noite (ao chegar)|good night=boa noite (ao se despedir)|bye=tchau|see you=até mais|thanks=obrigado, obrigada|please=por favor|yes=sim|no=não|and=e',
  dlg: "Hi! I'm Ana. What's your name?=Oi! Eu sou a Ana. Qual é o seu nome?|Hello, Ana. I'm Mark.=Olá, Ana. Eu sou o Mark.|Nice to meet you, Mark.=Prazer em te conhecer, Mark.|Nice to meet you too.=O prazer é meu.",
  cz: 'I ___ Ana.=am=is=are|You ___ my teacher.=are=am=is|She ___ my friend.=is=are=am',
  whys: 'com I, o to be é sempre am (I am = I\'m); is é de he, she e it|com you, o to be é are, tanto para uma pessoa quanto para várias|com he, she e it, o to be é is (she\'s = she is); are é de you, we e they',
  pts: 'to be quer dizer ser e estar ao mesmo tempo: I am Ana (eu sou a Ana), I am tired (eu estou cansada). O contexto diz qual dos dois é.|Cada pessoa tem a sua forma: I am · you are · he is · she is · it is · we are · they are. São só três: am, is e are.|Na conversa, o inglês junta o sujeito e o verbo com apóstrofo: I\'m, you\'re, he\'s, she\'s, it\'s, we\'re, they\'re. As duas formas estão certas.|O sujeito é obrigatório. Em português dizemos "Sou a Ana" sem o "eu"; em inglês o I nunca cai, e ele se escreve sempre com maiúscula.',
  ex: "Are you Mark?=Você é o Mark?|I'm a student.=Eu sou estudante.|She's my teacher.=Ela é a minha professora.|Hello! Good morning!=Olá! Bom dia!",
  bd: ['I=S^eu: nunca cai e sempre com maiúscula|am=V^to be na forma de I|Ana.=PR^quem eu sou', 'Eu sou a Ana.'],
  rule: 'to_be',
  hw: 'Apresente-se em voz alta três vezes, como se encontrasse três pessoas diferentes: Hi! I\'m … Nice to meet you. Depois escreva três frases sobre pessoas que você conhece, com he, she e you (She\'s my friend…).',
  deep: `
Hoje você aprende a primeira conversa de qualquer viagem, reunião ou aula: cumprimentar, dizer o seu nome e perguntar o da outra pessoa. Para isso, precisa de um verbo só, o mais usado do inglês: **to be**.
# Passo 1: cumprimentar
| Em inglês | Quando usar |
| Hi! | oi: entre amigos e no dia a dia |
| Hello! | olá: serve para qualquer pessoa |
| Good morning! | bom dia: até o meio-dia |
| Good afternoon! | boa tarde |
| Good evening! | boa noite, ao chegar |
| Good night! | boa noite, ao se despedir ou ir dormir |
~ Hi! I'm Ana. = Oi! Eu sou a Ana.
~ Good morning! = Bom dia!
BR Good night não é cumprimento: é despedida. Ao chegar num lugar à noite, diga **Good evening**.
# Passo 2: to be, ser e estar num verbo só
| Pessoa | Forma completa | Na fala |
| eu | I am | I'm |
| você | you are | you're |
| ele | he is | he's |
| ela | she is | she's |
| isso (coisa) | it is | it's |
| nós | we are | we're |
| eles, elas | they are | they're |
! São só três formas: **am** (com I), **is** (com he, she, it) e **are** (com you, we, they).
~ I'm a student. = Eu sou estudante.
~ She's my teacher. = Ela é a minha professora.
~ We're friends. = Nós somos amigos.
# Passo 3: o sujeito nunca some
Em português o verbo já mostra quem é: "sou", "somos". Em inglês, não. Por isso o sujeito aparece **sempre**.
| Português | Inglês |
| Sou a Ana. | I'm Ana. |
| É o meu amigo. | He's my friend. |
| Prazer em te conhecer. | Nice to meet you. |
! **I** (eu) se escreve sempre com maiúscula, mesmo no meio da frase: Mark and I.
~ Hello, Ana. I'm Mark. = Olá, Ana. Eu sou o Mark.
# Passo 4: perguntar e responder o nome
~ What's your name? = Qual é o seu nome?
~ My name is Mark. = O meu nome é Mark.
~ Nice to meet you. = Prazer em te conhecer.
~ Nice to meet you too. = O prazer é meu.
# Passo 5: som da lição, o h que se ouve
Em português o h é mudo: "hotel" soa "otel". Em inglês, o **h** do começo da palavra é um **sopro**, parecido com o "r" de "rato" no sotaque carioca, só que bem mais leve.
~ hi = oi
~ hello = olá
~ he = ele
~ Hi! Hello! = Oi! Olá!
BR Sem o sopro, hi vira "ai" e he vira "i". Ponha a mão na frente da boca: em **hi**, você sente o ar.
~ Hello! Good morning! = Olá! Bom dia!
> Treine agora: diga Hi! I'm … com o seu nome, três vezes, com o sopro do h.
? Qual é a forma do to be com she? || is (she is = she's)
? Como se diz "Eu sou a Ana" em inglês? || I'm Ana. (o I nunca cai)
? Good night serve para chegar ou para ir embora? || para ir embora
`,
});

NL('en-from', {
  de: 'Where are you from?', pt: 'De onde você é: países e nacionalidades', gt: 'to be: perguntas e negativas · from',
  gx: 'Para perguntar com to be, o verbo vem antes do sujeito: you are → are you? Para negar, basta not depois do verbo: I\'m not, she isn\'t, we aren\'t. A origem se diz com from: I\'m from Brazil.',
  ge: "Where are you from?=De onde você é?|I'm from Brazil.=Eu sou do Brasil.|I'm not American.=Eu não sou americana.",
  v: 'where=onde=📍|from=de (origem)=🛫|Brazil=o Brasil=🇧🇷|Brazilian=brasileiro, brasileira=🧑‍🤝‍🧑|the United States=os Estados Unidos=🇺🇸|American=americano, americana=🗽|country=país=🗺️|city=cidade=🏙️|live=morar=🏠|not=não=🚫',
  x: 'Canada=o Canadá|Canadian=canadense|England=a Inglaterra|English=inglês, inglesa|Mexico=o México|Mexican=mexicano, mexicana|Portugal=Portugal|Portuguese=português, portuguesa|here=aqui|really?=sério?',
  dlg: "Where are you from, Emma?=De onde você é, Emma?|I'm from Chicago. And you?=Eu sou de Chicago. E você?|I'm from Brazil. I live in São Paulo.=Eu sou do Brasil. Eu moro em São Paulo.|Really? I'm in São Paulo too!=Sério? Eu também estou em São Paulo!",
  cz: "Where ___ you from?=are=is=am|I'm ___ Brazil.=from=in=of|She ___ American. She's Canadian.=isn't=aren't=not",
  whys: 'com you, o to be é are; na pergunta ele vem antes do sujeito: Where are you from?|a origem se diz com from (I\'m from Brazil); in é onde você está ou mora (I live in Rio)|com she, a negativa é is not = isn\'t; aren\'t é de you, we e they, e not sozinho fica sem o verbo',
  pts: 'Na pergunta, o to be troca de lugar com o sujeito: You are Brazilian → Are you Brazilian? Não precisa de nenhuma outra palavra.|Para negar, o not vem logo depois do to be: I am not · she is not · they are not. Na fala: I\'m not, she isn\'t, they aren\'t.|A resposta curta repete o to be: Yes, I am. · No, I\'m not. No sim, nunca se contrai: Yes, I am (e não "Yes, I\'m").|Países e nacionalidades começam sempre com maiúscula em inglês: Brazil, Brazilian, American.',
  ex: "Are you Brazilian?=Você é brasileira?|Yes, I am.=Sim, sou.|We aren't from here.=Nós não somos daqui.|Is Emma from Canada?=A Emma é do Canadá?",
  bd: ['Where=W^a palavra interrogativa abre a pergunta|are=V^o to be vem antes do sujeito: é isso que faz a pergunta|you=S|from?=PP^a preposição fica sozinha no fim', 'De onde você é?'],
  rule: 'from',
  hw: 'Escreva de onde são cinco pessoas que você conhece ou admira, com país e nacionalidade (Shakira is from Colombia. She\'s Colombian.). Depois faça uma pergunta e uma negativa sobre cada uma (Is she American? No, she isn\'t.).',
  deep: `
Depois do nome, a pergunta que mais aparece é "de onde você é?". Hoje você aprende a perguntar e a responder, e a dizer que não, tudo com o mesmo verbo da lição passada: **to be**.
# Passo 1: perguntar com to be
Para perguntar, o to be passa para a frente do sujeito. Só isso.
| Afirmação | Pergunta |
| You are Brazilian. | Are you Brazilian? |
| She is from Canada. | Is she from Canada? |
| They are American. | Are they American? |
~ Where are you from? = De onde você é?
~ Are you Brazilian? = Você é brasileira?
! Com palavra de pergunta (where, what, who), a ordem é a mesma: **Where** + are + you + from?
# Passo 2: responder sim ou não
~ Yes, I am. = Sim, sou.
~ No, I'm not. = Não, não sou.
~ Yes, she is. = Sim, ela é.
~ No, she is not. = Não, ela não é.
BR Em português respondemos só "sou". Em inglês, a resposta curta repete o sujeito e o to be: **Yes, I am**. Sem contração no sim.
# Passo 3: negar com not
| Forma completa | Na fala |
| I am not | I'm not |
| you are not | you aren't |
| he / she is not | he / she isn't |
| we / they are not | we / they aren't |
~ I'm not American. = Eu não sou americana.
~ We aren't Canadian. = Nós não somos canadenses.
# Passo 4: países e nacionalidades
| País | Nacionalidade |
| Brazil | Brazilian |
| the United States | American |
| Canada | Canadian |
| Mexico | Mexican |
| England | English |
| Portugal | Portuguese |
! Em inglês, país e nacionalidade começam **sempre com maiúscula**: I'm Brazilian. Em português, "brasileira" é minúscula.
~ I'm from Brazil. I'm Brazilian. = Eu sou do Brasil. Sou brasileira.
~ I live in São Paulo. = Eu moro em São Paulo.
# Passo 5: som da lição, o th de the
O **th** de the, this e they não existe em português. Ponha a ponta da língua entre os dentes, de leve, e solte o ar com a voz ligada. A língua vibra.
~ the United States = os Estados Unidos
~ they are = eles são
~ this is Emma = esta é a Emma
BR Não troque por "dê" ("de United States") nem por "zê". A língua aparece um pouquinho entre os dentes: pode treinar no espelho.
> Treine agora: diga I'm from … com o seu país e depois a sua nacionalidade, com maiúscula na cabeça.
? Como se pergunta "Você é americano?" || Are you American?
? Como se responde "sim" curto a essa pergunta? || Yes, I am.
? Qual é a negativa de she is? || she isn't (she is not)
`,
});

NL('en-spell', {
  de: 'How do you spell it?', pt: 'Soletrar nome, sobrenome e e-mail', gt: 'O alfabeto · at e dot',
  gx: 'As letras do inglês têm nomes que enganam quem fala português: A se diz "ei", E se diz "i" e I se diz "ai". G é "dji" e J é "djei". No e-mail, @ é at e o ponto é dot. Para pedir: How do you spell it?',
  ge: 'How do you spell it?=Como se soletra?|My name is Ana: A-N-A.=O meu nome é Ana: A-N-A.|My email is ana at mail dot com.=O meu e-mail é ana arroba mail ponto com.',
  v: 'letter=letra=🔤|spell=soletrar=🗣️|email=e-mail=📧|first name=nome (primeiro nome)=🪪|last name=sobrenome=👪|at=arroba (@)=🌀|dot=ponto (no e-mail)=⚫|capital letter=letra maiúscula=🅰️|again=de novo=🔁|sorry?=como? perdão?=❓',
  x: 'double=duas vezes (double L = LL)|dash=hífen (-)|underscore=sublinhado (_)|lowercase=minúscula|website=site|username=nome de usuário|phone=telefone|write=escrever|slowly=devagar|correct=certo',
  dlg: "What's your last name?=Qual é o seu sobrenome?|It's Oliveira.=É Oliveira.|How do you spell it?=Como se soletra?|O-L-I-V-E-I-R-A.=O-L-I-V-E-I-R-A.",
  cz: "How do you ___ it?=spell=spells=spelling|My email is ana ___ mail dot com.=at=in=on|It's Lee, with double ___.=E=I=A",
  whys: 'depois de do you, o verbo fica na forma básica: spell, sem -s e sem -ing|o @ se diz at; in e on não aparecem em e-mails|em inglês, a letra E se chama "i": Lee se escreve L-E-E, com double E',
  pts: 'Três vogais enganam: A se diz "ei", E se diz "i" e I se diz "ai". É a troca que mais confunde o brasileiro ao soletrar.|G se diz "dji" e J se diz "djei". R se diz "ar", Y se diz "uai" e W se diz "dâbliu".|Letra repetida se diz com double: Lee = L, double E. Maiúscula é capital letter; minúscula é lowercase.|No e-mail: @ = at, . = dot, - = dash, _ = underscore. Para pedir que repitam: Sorry? Can you say that again?',
  ex: "Sorry? Can you say that again?=Como? Pode repetir?|Is that with a capital S?=É com S maiúsculo?|It's double L.=É com dois L.|My username is ana underscore souza.=O meu nome de usuário é ana sublinhado souza.",
  bd: ['How=W^como|do=AUX^do: o auxiliar das perguntas com outros verbos; não se traduz|you=S|spell=V^o verbo principal, na forma básica|it?=OA^aquilo que se soletra', 'Como se soletra?'],
  rule: 'spell',
  hw: 'Soletre em voz alta, em inglês, o seu nome completo, o seu e-mail e o nome da sua cidade. Grave, ouça e confira cada letra com a tabela da aula, com atenção especial a A, E, I, G e J.',
  deep: `
No telefone, num hotel ou num cadastro online, você vai precisar soletrar o seu nome. Em inglês, isso tem uma armadilha: várias letras têm nomes diferentes do português, e justamente as vogais.
# Passo 1: as letras que soam parecido
Muitas letras se dizem quase como em português: B (bi), C (si), D (di), F (éf), K (kei), L (él), M (ém), N (én), O (ou), P (pi), S (és), T (ti), V (vi).
~ My name is Ana: A-N-A. = O meu nome é Ana: A-N-A.
# Passo 2: as letras que enganam
| Letra | Como soa | Cuidado |
| A | "ei" | não é "a" |
| E | "i" | não é "é" |
| I | "ai" | não é "i" |
| G | "dji" | parece o nosso "j" de "Jesus", mas com d na frente |
| J | "djei" | |
| H | "eitch" | |
| Q | "kiu" | |
| R | "ar" | |
| U | "iu" | |
| W | "dâbliu" | literalmente "duplo U" |
| Y | "uai" | |
| Z | "zi" | no inglês britânico é "zéd" |
BR A troca mais comum: soletrar "Silva" como S-**I**-L-V-A dizendo "i" para o I. Em inglês, o I se diz "ai", e quem ouve "i" escreve **E**.
~ Silva: S-I-L-V-A = Silva
~ Lee: L-E-E = Lee
~ Can you spell that, please? = Você pode soletrar, por favor?
# Passo 3: pedir e repetir
~ How do you spell it? = Como se soletra?
~ Sorry? Can you say that again? = Como? Pode repetir?
~ Is that with a capital S? = É com S maiúsculo?
~ It's double L. = É com dois L.
! Em **How do you spell it?**, o **do** é um auxiliar: não quer dizer "fazer", só marca a pergunta. Você vai vê-lo muito nas próximas lições.
# Passo 4: soletrar um e-mail
| Símbolo | Em inglês |
| @ | at |
| . | dot |
| - | dash |
| _ | underscore |
~ ana.souza@mail.com = ana dot souza at mail dot com
~ My email is ana at mail dot com. = O meu e-mail é ana arroba mail ponto com.
# Passo 5: som da lição, E e I
O par que mais derruba o brasileiro é **E** ("i") e **I** ("ai"). Treine os dois juntos até sair sem pensar.
~ Pete: P-E-T-E = Pete
~ Mike: M-I-K-E = Mike
~ It's Lee, with double E. = É Lee, com dois E.
> Treine agora: soletre o seu nome e o seu sobrenome em voz alta, devagar, letra por letra.
? Como se diz a letra I em inglês? || "ai"
? E a letra E? || "i"
? Como se diz o @ num e-mail? || at
`,
});

NL('en-age', {
  de: 'How old are you?', pt: 'Idade, telefone e números até 20', gt: 'Números 0–20 · idade com to be',
  gx: 'Idade em inglês se diz com to be, não com "ter": I\'m twenty (years old). "I have twenty years" é um erro típico de quem fala português. De 13 a 19 os números terminam em -teen, com acento no fim: thirTEEN. No telefone, dígito por dígito.',
  ge: "How old are you?=Quantos anos você tem?|I'm twenty years old.=Eu tenho vinte anos.|She's thirteen, not thirty!=Ela tem treze, não trinta!",
  v: 'zero=zero=0️⃣|eleven=onze=🔢|twelve=doze=🔢|thirteen=treze=🔢|fifteen=quinze=🔢|twenty=vinte=🔢|old=velho; de idade=🎂|year=ano=📅|phone number=número de telefone=📞|how old=quantos anos=❓',
  x: 'eight=oito|nine=nove|fourteen=catorze|sixteen=dezesseis|seventeen=dezessete|eighteen=dezoito|nineteen=dezenove|thirty=trinta|son=filho|daughter=filha',
  dlg: "How old are you, Sam?=Quantos anos você tem, Sam?|I'm seventeen. And you?=Eu tenho dezessete. E você?|I'm twenty. What's your phone number?=Eu tenho vinte. Qual é o seu telefone?|It's five five five, oh one nine two.=É cinco cinco cinco, zero um nove dois.",
  cz: 'How old ___ you?=are=have=is|I ___ twenty years old.=am=have=is|My daughter is ___. (13)=thirteen=thirty=three',
  whys: 'a idade se pergunta com to be: How old are you? (literalmente "quão velho você é?")|em inglês a idade é "ser": I am twenty; I have twenty years é o erro típico de quem fala português|13 é thirteen, com acento no fim (thirTEEN); thirty é 30, com acento no começo (THIRty)',
  pts: 'A idade se diz com to be: I am twenty = eu tenho vinte anos. Years old no fim é opcional: I\'m twenty também está certo.|Nunca use have para a idade. "I have twenty years" soa estranho para um nativo; o certo é I\'m twenty.|De 13 a 19, os números terminam em -teen, e o acento cai no -teen: thirTEEN, fourTEEN, fifTEEN. As dezenas (30, 40, 50) têm acento no começo: THIRty, FORty, FIFty.|No telefone, diga dígito por dígito, em grupos. O zero pode ser zero ou oh: five five five, oh one nine two.',
  ex: "My son is twelve.=Meu filho tem doze anos.|Are you eighteen?=Você tem dezoito anos?|What's your phone number?=Qual é o seu telefone?|It's nine one one.=É nove um um.",
  bd: ['I=S|am=V^to be: a idade se diz com "ser"|twenty_years_old.=PR^literalmente "vinte anos velho"; years old é opcional', 'Eu tenho vinte anos.'],
  rule: 'age',
  hw: 'Escreva a idade de cinco pessoas da sua família (My mother is … / My son is …), com os números por extenso. Depois diga em voz alta o seu número de telefone em inglês, dígito por dígito.',
  deep: `
Hoje você aprende a dizer e perguntar a idade e a passar um número de telefone. Para isso precisa dos números de 0 a 20 e de um detalhe que derruba muita gente: em inglês, a idade não se "tem", se "é".
# Passo 1: de 0 a 12, para decorar
| Número | Em inglês |
| 0 | zero |
| 1, 2, 3 | one, two, three |
| 4, 5, 6 | four, five, six |
| 7, 8, 9 | seven, eight, nine |
| 10, 11, 12 | ten, eleven, twelve |
~ one, two, three, four, five, six = um, dois, três, quatro, cinco, seis
~ seven, eight, nine, ten, eleven, twelve = sete, oito, nove, dez, onze, doze
# Passo 2: de 13 a 19, a família -teen
De 13 a 19, quase todos seguem a mesma regra: o número + **-teen**. Três mudam um pouco: thirteen (de three), fifteen (de five) e eighteen (de eight, com um t só).
| Número | Em inglês |
| 13 | thirteen |
| 14 | fourteen |
| 15 | fifteen |
| 16 | sixteen |
| 17 | seventeen |
| 18 | eighteen |
| 19 | nineteen |
| 20 | twenty |
~ thirteen, fourteen, fifteen = treze, catorze, quinze
~ sixteen, seventeen, eighteen, nineteen, twenty = dezesseis, dezessete, dezoito, dezenove, vinte
# Passo 3: a idade se diz com to be
| Português | Inglês |
| Eu tenho vinte anos. | I'm twenty (years old). |
| Quantos anos você tem? | How old are you? |
| Ela tem doze anos. | She's twelve. |
BR O erro mais comum do brasileiro: "I have twenty years". Em inglês, a idade é como uma característica: você **é** vinte, I **am** twenty.
~ How old are you? = Quantos anos você tem?
~ I'm twenty years old. = Eu tenho vinte anos.
~ My son is twelve. = Meu filho tem doze anos.
# Passo 4: o número de telefone
Diga dígito por dígito, em grupos, com uma pausa entre eles. O zero pode ser **zero** ou **oh**, como a letra O.
~ five five five, oh one nine two = cinco cinco cinco, zero um nove dois
~ What's your phone number? = Qual é o seu telefone?
! Número repetido pode virar **double**: five five = double five.
# Passo 5: som da lição, thirteen × thirty
O que separa 13 de 30 é o **acento**. No -teen, a força vai para o fim; na dezena, para o começo.
| Número | Acento |
| 13 thirteen | thir**TEEN** |
| 30 thirty | **THIR**ty |
| 14 fourteen | four**TEEN** |
| 40 forty | **FOR**ty |
| 15 fifteen | fif**TEEN** |
| 50 fifty | **FIF**ty |
~ thirteen, thirty = treze, trinta
~ fourteen, forty = catorze, quarenta
~ fifteen, fifty = quinze, cinquenta
! O **th** de thirteen é o th sem voz: língua entre os dentes, só ar, como um "f" feito com a língua.
~ I'm thirteen. She's thirty. = Eu tenho treze anos. Ela tem trinta.
> Treine agora: diga a sua idade e a de alguém da sua família, em frases completas.
? Como se diz "Eu tenho trinta anos"? || I'm thirty (years old).
? Onde cai o acento em fifteen? || no fim: fifTEEN
? Como se pergunta a idade de alguém? || How old are you?
`,
});

NL('en-job', {
  de: "What's your job?", pt: 'Profissões e onde você trabalha', gt: 'a / an antes da profissão',
  gx: 'Em inglês, a profissão leva artigo: I\'m a nurse, she\'s an engineer. Em português dizemos "sou enfermeira", sem artigo; em inglês, sem o a, a frase fica errada. Use an antes de som de vogal: an engineer, an actor.',
  ge: "I'm a nurse.=Eu sou enfermeira.|She's an engineer.=Ela é engenheira.|What do you do?=O que você faz? (no trabalho)",
  v: 'job=trabalho, emprego=💼|nurse=enfermeiro, enfermeira=🩺|doctor=médico, médica=🥼|engineer=engenheiro, engenheira=🛠️|lawyer=advogado, advogada=⚖️|cook=cozinheiro, cozinheira=🍳|actor=ator, atriz=🎭|work=trabalhar=🏢|company=empresa=🏬|a / an=um, uma=☝️',
  x: 'office=escritório|hospital=hospital|restaurant=restaurante|developer=programador, programadora|designer=designer|manager=gerente|waiter=garçom|architect=arquiteto, arquiteta|unemployed=desempregado, desempregada|retired=aposentado, aposentada',
  dlg: "What do you do, Nick?=O que você faz, Nick?|I'm an engineer. And you?=Eu sou engenheiro. E você?|I'm a nurse. I work in a hospital.=Eu sou enfermeira. Eu trabalho num hospital.|Oh, nice!=Ah, que legal!",
  cz: "I'm ___ nurse.=a=an=the|She's ___ engineer.=an=a=the|What do you ___?=do=does=make",
  whys: 'a profissão leva artigo; nurse começa com som de consoante, então é a|engineer começa com som de vogal, então é an: an engineer|What do you do? = o que você faz; o primeiro do é o auxiliar da pergunta e o segundo é o verbo fazer',
  pts: 'Em inglês, a profissão sempre leva artigo: I\'m a teacher, he\'s a doctor. Sem o a, a frase fica errada. É o contrário do português.|a antes de som de consoante (a nurse, a doctor) e an antes de som de vogal (an engineer, an actor, an architect).|Para perguntar a profissão, o mais natural é What do you do? What\'s your job? também está certo, só é mais direto.|Para dizer onde você trabalha: I work in a hospital, I work in an office, I work for a company.',
  ex: "He's a doctor.=Ele é médico.|I'm an architect.=Eu sou arquiteta.|I work in an office.=Eu trabalho num escritório.|I'm a student, not a teacher.=Eu sou estudante, não professora.",
  bd: ['She=S|is=V^to be|an=ART^an, porque engineer começa com som de vogal|engineer.=PR^a profissão', 'Ela é engenheira.'],
  rule: 'job',
  hw: 'Escreva a profissão de cinco pessoas que você conhece, sempre com a ou an (My father is a cook. My sister is an engineer.). Depois responda em voz alta: What do you do? Where do you work?',
  deep: `
Em qualquer conversa, depois do nome e da origem, vem a profissão. Em inglês, ela tem uma regra que o português não tem: o artigo **a** ou **an** antes da profissão.
# Passo 1: a profissão leva artigo
| Português | Inglês |
| Sou enfermeira. | I'm **a** nurse. |
| Ele é médico. | He's **a** doctor. |
| Ela é engenheira. | She's **an** engineer. |
BR Em português, a profissão vem sem artigo: "sou professora". Em inglês, sem o **a**, a frase fica errada. "I'm teacher" é o erro mais comum do brasileiro.
~ I'm a nurse. = Eu sou enfermeira.
~ He's a doctor. = Ele é médico.
# Passo 2: a ou an?
A regra é pelo **som**, não pela letra: **an** antes de som de vogal, **a** antes de som de consoante.
| a | an |
| a nurse | an engineer |
| a doctor | an actor |
| a lawyer | an architect |
| a cook | an office |
~ She's an engineer. = Ela é engenheira.
~ I'm an architect. = Eu sou arquiteta.
! **an** junta com a palavra seguinte, como se fosse uma só: an engineer soa "a-nengineer".
# Passo 3: perguntar a profissão
~ What do you do? = O que você faz?
~ What's your job? = Qual é a sua profissão?
! Em **What do you do?**, o primeiro do é o auxiliar da pergunta e o segundo é o verbo fazer. É a forma mais natural de perguntar.
# Passo 4: onde você trabalha
| Em inglês | Exemplo |
| work in + lugar | I work in a hospital. |
| work for + empresa | I work for a bank. |
| work from home | I work from home. |
~ I work in an office. = Eu trabalho num escritório.
~ I work from home. = Eu trabalho de casa.
# Passo 5: som da lição, a e an
Na fala, **a** quase nunca soa "ei": é um "â" curto e fraco, que gruda na palavra seguinte. O **an** também: "ân".
~ a nurse = uma enfermeira
~ an actor = um ator
~ I'm a student. = Eu sou estudante.
! O que manda é o som: **an hour** (o h é mudo, então começa com vogal) e **a university** (soa "iu", que começa com consoante).
> Treine agora: diga a sua profissão em voz alta, com a ou an, e onde você trabalha.
? Como se diz "Eu sou professora"? || I'm a teacher.
? É a engineer ou an engineer? || an engineer (som de vogal)
? Qual é a pergunta mais natural para saber a profissão? || What do you do?
`,
});

NL('en-form', {
  de: 'A sign-up form', pt: 'Ler e preencher um cadastro', gt: 'first name, last name · maiúsculas',
  gx: 'Em cadastros em inglês, first name é o nome e last name é o sobrenome. Nacionalidades e línguas começam com maiúscula: Brazilian, Portuguese, English. E a data americana vem com o mês primeiro: 03/05/1990 é 5 de março.',
  ge: "What's your first name?=Qual é o seu nome?|What's your last name?=Qual é o seu sobrenome?|Please fill out this form.=Por favor, preencha este formulário.",
  v: 'form=formulário=📝|sign up=inscrever-se, cadastrar-se=🖊️|date of birth=data de nascimento=🎂|nationality=nacionalidade=🌎|language=língua, idioma=🗣️|address=endereço=🏠|zip code=CEP=📮|signature=assinatura=✒️|fill out=preencher=✅|course=curso=🎓',
  x: 'male=masculino|female=feminino|single=solteiro, solteira|married=casado, casada|occupation=profissão (em formulários)|Spanish=espanhol|street=rua|state=estado|morning=manhã|evening=noite',
  dlg: "Hello! What's your name?=Olá! Qual é o seu nome?|I'm Carla Mendes.=Eu sou a Carla Mendes.|Where are you from, Ms. Mendes?=De onde a senhora é, sra. Mendes?|I'm from Brazil.=Eu sou do Brasil.",
  cz: "What's your ___ name? (sobrenome)=last=first=late|I'm from Brazil. I'm ___.=Brazilian=brazilian=Brazil|I speak Portuguese and ___.=English=english=England",
  whys: 'last name é o sobrenome; first name é o nome|a nacionalidade começa sempre com maiúscula em inglês: Brazilian; Brazil é o país|as línguas também começam com maiúscula: English; England é o país',
  pts: 'Num cadastro em inglês, first name é o nome e last name (ou surname) é o sobrenome. É a ordem contrária de muitos formulários brasileiros.|Em inglês, nacionalidades e línguas começam com maiúscula: I\'m Brazilian. I speak Portuguese. Em português elas são minúsculas.|A data americana vem com o mês primeiro: mês/dia/ano. 03/05/1990 é 5 de março, e não 3 de maio.|Para formalidade, use Mr. (senhor), Ms. (senhora) e o sobrenome: Ms. Mendes.',
  ex: "My first name is Carla.=O meu nome é Carla.|What's your date of birth?=Qual é a sua data de nascimento?|I speak Portuguese and English.=Eu falo português e inglês.|Sign here, please.=Assine aqui, por favor.",
  bd: ['My=POS^meu, minha: a mesma palavra para tudo|last_name=S^o sobrenome|is=V^to be|Mendes.=PR', 'O meu sobrenome é Mendes.'],
  rule: 'dados',
  hw: 'Preencha um cadastro em inglês com os seus dados (first name, last name, date of birth no formato americano, nationality, languages) e depois diga cada linha numa frase completa: My first name is …',
  le: {
    texto: {
      t: 'Sign-up form · Boston English School', kind: 'leitura',
      intro: 'A Carla se inscreveu num curso de inglês nos Estados Unidos. Leia a ficha dela e responda.',
      paras: ['Last name: Mendes', 'First name: Carla', 'Date of birth: 03/05/1990', 'Nationality: Brazilian', 'Address: 12 Linden Street, Boston', 'Languages: Portuguese, Spanish', 'Course: English A1, mornings'],
      qs: [
        { q: 'Qual é o sobrenome da Carla?', o: ['Mendes', 'Carla', 'Linden'], a: 0 },
        { q: 'Quando ela nasceu? (lembre: a data americana começa pelo mês)', o: ['em 5 de março de 1990', 'em 3 de maio de 1990', 'em 5 de março de 1903'], a: 0 },
        { q: 'Que línguas ela já fala?', o: ['português e espanhol', 'português e inglês', 'só português'], a: 0 },
        { q: 'Quando é o curso dela?', o: ['de manhã', 'à noite', 'à tarde'], a: 0 },
      ],
    },
    escrita: {
      t: 'Preencha o seu cadastro', tipo: 'form',
      pede: 'Agora é a sua vez: preencha o cadastro com os seus dados, em inglês. Pode inventar, se preferir.',
      campos: [
        { l: 'Last name', d: 'sobrenome', re: '^\\p{Lu}[\\p{L}\' -]+$', err: 'O sobrenome começa com letra maiúscula.' },
        { l: 'First name', d: 'nome', re: '^\\p{Lu}[\\p{L}\' -]+$', err: 'O nome começa com letra maiúscula.' },
        { l: 'City', d: 'cidade onde você mora', re: '^\\p{Lu}[\\p{L} .-]+$', err: 'Escreva o nome da cidade com maiúscula.' },
        { l: 'Country', d: 'país, em inglês', re: '^\\p{Lu}[\\p{L} ]+$', err: 'Escreva o país com maiúscula.', bad: [['^brasil$', 'Em inglês o Brasil é <b>Brazil</b>, com z.'], ['^estados unidos$', 'Em inglês é <b>the United States</b>.']] },
        { l: 'Nationality', d: 'nacionalidade, em inglês', re: '^\\p{Lu}[\\p{L} ]+$', err: 'Em inglês, a nacionalidade começa com maiúscula: <b>Brazilian</b>.', bad: [['^brasileir[oa]$', 'Em inglês é <b>Brazilian</b>, com maiúscula.'], ['^brazil$', 'Brazil é o país. A nacionalidade é <b>Brazilian</b>.']] },
        { l: 'Languages', d: 'línguas que você fala, em inglês', re: '(English|Portuguese|Spanish|French|Italian|German|Japanese|Chinese)', f: 'u', err: 'Escreva as línguas em inglês e com maiúscula: Portuguese, English, Spanish…', bad: [['\\b(portugu[eê]s|ingl[eê]s|espanhol)\\b','Escreva em inglês: <b>Portuguese</b>, <b>English</b>, <b>Spanish</b>.']] },
      ],
      modelo: 'Souza · Ana · Curitiba · Brazil · Brazilian · Portuguese, English',
    },
  },
  deep: `
Esta lição é de **ler e escrever**. Você vai ler a ficha de inscrição de uma aluna e depois preencher a sua. Antes, três coisas que todo cadastro em inglês usa: os nomes dos campos, a data americana e as maiúsculas.
# Passo 1: os campos do cadastro
| Campo | Significa |
| First name | nome |
| Last name | sobrenome |
| Date of birth | data de nascimento |
| Nationality | nacionalidade |
| Address | endereço |
| Zip code | CEP |
| Occupation | profissão |
| Signature | assinatura |
~ What's your first name? = Qual é o seu nome?
~ What's your last name? = Qual é o seu sobrenome?
# Passo 2: a data americana
Nos Estados Unidos, a data vem com o **mês primeiro**: mês/dia/ano.
| Escrito | No Brasil seria | Significa |
| 03/05/1990 | 05/03/1990 | 5 de março de 1990 |
| 12/01/2000 | 01/12/2000 | 1º de dezembro de 2000 |
BR Ler 03/05 como "3 de maio" é um erro clássico. Num formulário americano, o primeiro número é sempre o mês.
~ What's your date of birth? = Qual é a sua data de nascimento?
# Passo 3: as maiúsculas do inglês
Em inglês, várias palavras que são minúsculas em português começam com maiúscula.
| Português | Inglês |
| brasileira | Brazilian |
| português (a língua) | Portuguese |
| inglês | English |
| eu | I |
~ I'm Brazilian. = Eu sou brasileira.
~ I speak Portuguese and English. = Eu falo português e inglês.
# Passo 4: Mr. e Ms.
Para tratar alguém com formalidade, use **Mr.** (senhor) ou **Ms.** (senhora) com o **sobrenome**.
~ Where are you from, Ms. Mendes? = De onde a senhora é, sra. Mendes?
~ Please fill out this form. = Por favor, preencha este formulário.
> Agora leia a ficha da Carla e depois preencha a sua.
? Num formulário americano, o que é 04/07/2020? || 7 de abril de 2020
? Last name é o nome ou o sobrenome? || o sobrenome
? Como se escreve "brasileira" em inglês? || Brazilian, com maiúscula
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V("Hi! I'm Ana.",
  'M:to be: três formas para sete pessoas;Pessoa|Forma|Na fala;I|am|I\'m;you · we · they|are|you\'re · we\'re · they\'re;he · she · it|is|he\'s · she\'s · it\'s',
  'F:O sujeito nunca some;Quem^s|to be^v|O quê^p;I|am|Ana.;She|is|my teacher.;We|are|friends.');
V('Where are you from?',
  'E:A pergunta: o to be passa para a frente;You are^s|→|Are you^v|from Brazil?^p',
  'V:Sim ou não;Sim|Yes, I am.|Yes, she is.|Yes, they are.;Não|No, I\'m not.|No, she isn\'t.|No, they aren\'t.');
V('How do you spell it?',
  'V:As vogais que enganam;Letra|A soa "ei"|E soa "i"|I soa "ai";Exemplo|Ana: ei · én · ei|Lee: él · i · i|Mike: ém · ai · kei · i',
  'P:Soletrar um e-mail, peça por peça;ana=ei · én · ei;. (ponto)=dot;souza=és · ou · iu · zi · ei;@ (arroba)=at;mail.com=mail dot com');
V('How old are you?',
  'E:De 13 a 19, uma regra só;número (four)^s|+|teen^v|=|fourteen^p',
  'F:A idade se diz com to be;Quem^s|to be^v|Idade^p;I|am|twenty.;She|is|twelve.;He|is|seventeen.');
V("What's your job?",
  'V:a ou an? Manda o som;a · som de consoante|a nurse|a doctor|a lawyer;an · som de vogal|an engineer|an actor|an architect',
  'F:Profissão com artigo;Quem^s|to be^v|a / an + profissão^p;I|am|a nurse.;She|is|an engineer.;He|is|a cook.');
V('A sign-up form',
  'M:Como ler um cadastro;No cadastro|Significa;**Last name**: Mendes|sobrenome;**First name**: Carla|nome;Date of birth: 03/05/1990|5 de março de 1990 (mês primeiro);Nationality: Brazilian|nacionalidade, com maiúscula;Languages: Portuguese|línguas, com maiúscula',
  'V:Maiúscula em inglês, minúscula em português;Português|brasileira|português|eu;Inglês|Brazilian|Portuguese|I');
S_("Hi! I'm Ana.", "what's (what is)=qual é|your=seu, sua (de você)|too=também|tired=cansado, cansada");
S_('Where are you from?', 'in=em (I live in São Paulo)|this is=este é, esta é|we=nós|they=eles, elas');
S_('How do you spell it?', 'do (How do you…?)=auxiliar da pergunta; não se traduz|can you say that=você pode dizer isso|with=com|mail=correio; aqui, o nome do site');
S_('How old are you?', 'one, two, three, four, five, six, seven, ten=um, dois, três, quatro, cinco, seis, sete, dez|forty, fifty=quarenta, cinquenta|mother=mãe|oh=zero, no telefone');
S_("What's your job?", 'nice=legal, agradável|in a / in an=num, numa|for=para (I work for a bank)|bank=banco|from home=de casa');
S_('A sign-up form', 'speak=falar (uma língua)|sign=assinar|here=aqui|Mr. / Ms.=senhor / senhora');
['emma', 'chicago', 'carla', 'mendes', 'oliveira', 'mike', 'pete', 'nick', 'boston', 'linden', 'colombia', 'shakira'].forEach((n) => NAMES.add(n));

EN_MODS.push({ lv: 'A1', n: 'Primeiros contatos', l: ['en-hi', 'en-from', 'en-spell', 'en-age', 'en-job', 'en-form'] });
