// Sequência do curso (protótipo MODO): A1 e A2 redesenhados (docs/A1-A2-redesenho.md, aprovado em 20/11/2026).
// Carregado depois de todos os outros dados. Faz três coisas:
//  1. registra as lições novas, no mesmo formato das atuais (mais o bloco "le" das lições de Ler e escrever);
//  2. reordena LESSONS na sequência nova, em módulos de tamanho variável (enquanto as lições novas não estão
//     todas escritas, um módulo pode ter menos de 6);
//  3. dá a cada lição um id estável (sid): o índice original para as antigas e um nome para as novas.
//     As cartas salvas usam "sid:j", então continuam valendo depois da reordenação.

/* ---------- 1. lições novas ---------- */
const NEW_LESSONS = {};
function NL(id, o) {
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

NL('n-buchstabieren', {
  de: 'Wie schreibt man das?', pt: 'Soletrar nome, e-mail e cidade', gt: 'Alfabeto e sons das letras',
  gx: 'Cada letra tem um nome: A (a), E (ê), I (i), J (iót), V (fau), W (vê), Z (tsét). Ä, Ö, Ü têm nome próprio e ß se chama Eszett. Para soletrar: Wie schreibt man das?',
  ge: 'Wie schreibt man das?=Como se escreve isso?|Können Sie das bitte buchstabieren?=O senhor pode soletrar isso, por favor?|Mein Nachname ist Souza: S-O-U-Z-A.=Meu sobrenome é Souza: S-O-U-Z-A.',
  v: 'das Alphabet=o alfabeto=🔤|der Buchstabe=a letra=🅰️|buchstabieren=soletrar=🗣️|schreiben=escrever=✍️|der Vorname=o nome (primeiro nome)=🪪|der Nachname=o sobrenome=👪|die Adresse=o endereço=🏠|die E-Mail=o e-mail=📧|die Straße=a rua=🛣️|noch einmal=mais uma vez=🔁',
  x: 'groß=grande / maiúsculo|klein=pequeno / minúsculo|der Punkt=o ponto|der Bindestrich=o hífen|das Eszett=a letra ß|der Umlaut=o trema (ä, ö, ü)|die Hausnummer=o número da casa|richtig=certo|falsch=errado|Wie bitte?=Como? / Perdão?',
  dlg: 'Wie ist Ihr Name, bitte?=Qual é o seu nome, por favor?|Mein Name ist Oliveira.=Meu nome é Oliveira.|Wie schreibt man das?=Como se escreve isso?|O-L-I-V-E-I-R-A.=O-L-I-V-E-I-R-A.',
  cz: 'Wie ___ man das?=schreibt=schreiben=schreibe|Können Sie das bitte ___?=buchstabieren=buchstabiert=buchstabierst|Wie ___ Ihr Name?=ist=sind=bist',
  whys: 'com man o verbo leva -t, como com er/sie (man schreibt); schreiben é o infinitivo|depois de können o outro verbo vai para o fim no infinitivo: buchstabieren|Name é singular (der Name), então o verbo é ist; sind é plural e bist é de du',
  pts: 'No alfabeto alemão, sete letras enganam quem fala português: E (ê), I (i), J (iót), V (fau), W (vê), Y (üpsilon) e Z (tsét).|Ä, Ö e Ü são letras com nome próprio (ä, ö, ü), e ß se chama Eszett. Sem teclado alemão, escreve-se ae, oe, ue e ss.|Para soletrar com clareza, diga letra por letra, devagar. Maiúscula é groß (großes A) e minúscula é klein.|man é o sujeito genérico (como "se" ou "a gente"): Wie schreibt man das? = Como se escreve isso?',
  ex: 'Wie bitte? Noch einmal, bitte.=Como? Mais uma vez, por favor.|Mit V oder mit W?=Com V ou com W?|Das schreibt man mit Eszett.=Isso se escreve com ß.|Meine E-Mail ist ana punkt souza at web punkt de.=Meu e-mail é ana ponto souza arroba web ponto de.',
  bd: ['Wie=W^a palavra interrogativa abre a pergunta|schreibt=V^verbo na 2ª posição, com -t porque o sujeito é man|man=S^man é o sujeito genérico: "se", "a gente"|das?=OA^aquilo que se escreve', 'Como se escreve isso?'],
  hw: 'Soletre em voz alta o seu nome completo, o nome da sua rua e o seu e-mail. Grave e confira cada letra com a tabela da aula.',
  deep: `
No Brasil a gente soletra o tempo todo: no telefone, na farmácia, no cadastro. Na Alemanha também, e o seu nome provavelmente vai precisar ser soletrado muitas vezes. Hoje você aprende o alfabeto e as perguntas para isso.
# Passo 1: as letras que se dizem igual
Boa parte das letras soa parecida com o português: A (a), B (bê), D (dê), F (éf), K (ká), L (él), M (ém), N (én), O (ô), P (pê), S (és), T (tê), U (u), X (iks).
~ Mein Name ist Ana: A-N-A. = Meu nome é Ana: A-N-A.
# Passo 2: as letras que enganam
| Letra | Nome em alemão | Como soa para nós |
| E | e | "ê" |
| H | ha | "rá" |
| I | i | "i" |
| J | jot | "iót" |
| R | er | "ér", com o r no fundo da garganta |
| V | vau | "fau" |
| W | we | "vê" |
| Y | ypsilon | "üpsilon" |
| Z | zet | "tsét" |
BR Atenção especial a **V** e **W**: em alemão, V se chama "fau" e W se chama "vê". É o contrário do que a intuição manda.
~ Ich heiße Vera, mit V. = Eu me chamo Vera, com V.
# Passo 3: as letras só do alemão
| Letra | Nome | Sem teclado alemão |
| Ä | ä | ae |
| Ö | ö | oe |
| Ü | ü | ue |
| ß | Eszett | ss |
~ Müller = M-Ü-L-L-E-R (ou Mueller)
~ Straße = S-T-R-A-Eszett-E (ou Strasse)
~ Ich heiße Müller, mit Ü. = Eu me chamo Müller, com Ü.
# Passo 4: as perguntas para soletrar
~ Wie schreibt man das? = Como se escreve isso?
~ Können Sie das bitte buchstabieren? = O senhor pode soletrar, por favor?
~ Wie bitte? Noch einmal, bitte. = Como? Mais uma vez, por favor.
! **man** é o sujeito genérico, como o nosso "se": man schreibt = escreve-se. O verbo leva -t, igual a er/sie.
# Passo 5: soletrar e-mail e endereço
- @ se diz "at" (como em inglês)
- . se diz **Punkt**
- - se diz **Bindestrich**
- maiúscula: **großes** A · minúscula: **kleines** a
~ ana.souza@web.de = ana Punkt souza at web Punkt de
~ Das schreibt man mit Punkt. = Isso se escreve com ponto.
> Treine agora com o seu próprio nome: diga cada letra em voz alta, devagar.
? Como se chama a letra W em alemão? || vê (we)
? E a letra V? || fau (vau)
? Como se pergunta "Como se escreve isso?" || Wie schreibt man das?
`,
});

NL('n-alter', {
  de: 'Wie alt bist du?', pt: 'Idade, telefone e números até 20', gt: 'Números 0–20 · sein + idade',
  gx: 'Idade se diz com sein, não com "ter": Ich bin zwanzig (Jahre alt). De 13 a 19: unidade + zehn (dreizehn). Atenção: sechzehn e siebzehn perdem letras. Telefone: dígito por dígito.',
  ge: 'Wie alt bist du?=Quantos anos você tem?|Ich bin zwanzig Jahre alt.=Eu tenho vinte anos.|Meine Telefonnummer ist null eins sieben sechs …=Meu telefone é zero um sete seis …',
  v: 'null=zero=0️⃣|elf=onze=🔢|zwölf=doze=🔢|dreizehn=treze=🔢|sechzehn=dezesseis=🔢|siebzehn=dezessete=🔢|zwanzig=vinte=🔢|alt=velho / de idade=🎂|das Jahr=o ano=📅|die Telefonnummer=o número de telefone=📞',
  x: 'neun=nove|vierzehn=catorze|fünfzehn=quinze|achtzehn=dezoito|neunzehn=dezenove|dreißig=trinta|vierzig=quarenta|fünfzig=cinquenta|die Handynummer=o número do celular|jung=jovem',
  dlg: 'Wie alt bist du, Tim?=Quantos anos você tem, Tim?|Ich bin siebzehn. Und du?=Eu tenho dezessete. E você?|Ich bin zwanzig. Wie ist deine Handynummer?=Eu tenho vinte. Qual é o seu celular?|Null eins fünf eins, zwölf, neunzehn.=Zero um cinco um, doze, dezenove.',
  cz: 'Wie alt ___ du?=bist=bin=ist|Er ist ___ Jahre alt. (17)=siebzehn=siebenzehn=siebzig|Meine Telefonnummer ___ 0151 1219.=ist=bin=hat',
  whys: 'idade se pergunta com sein; com du a forma é bist|17 é siebzehn: o "en" de sieben cai antes de zehn; siebzig é 70|o número "é": a frase usa sein (ist), não haben, mesmo que em português a gente pense em "ter"',
  pts: 'Em alemão a idade se diz com sein (ser): Ich bin dreißig = eu tenho trinta anos. Jahre alt no fim é opcional.|De 13 a 19 a regra é unidade + zehn: dreizehn, vierzehn, fünfzehn, achtzehn, neunzehn.|Duas exceções: sechzehn (perde o s de sechs) e siebzehn (perde o en de sieben).|No telefone, os números costumam ser ditos dígito por dígito ou em pares. Para não confundir zwei com drei, muita gente diz zwo.',
  ex: 'Ich bin dreißig.=Eu tenho trinta anos.|Meine Tochter ist zwölf.=A minha filha tem doze anos.|Wie ist Ihre Telefonnummer?=Qual é o seu telefone?|Zwo, nicht drei!=Dois, não três!',
  bd: ['Ich=S|bin=V^sein: a idade se diz com "ser"|zwanzig_Jahre_alt.=PR^literalmente "vinte anos velho"', 'Eu tenho vinte anos.'],
  rule: 'sein_heissen',
  hw: 'Escreva a idade de cinco pessoas da sua família (ex.: Meine Mutter ist fünfzig.) e diga em voz alta o seu número de telefone em alemão, dígito por dígito.',
  deep: `
Hoje você aprende a dizer e perguntar a idade e a passar um número de telefone. Para isso precisa dos números de 0 a 20 e de um detalhe que surpreende: em alemão a idade não se "tem", se "é".
# Passo 1: de 0 a 12, para decorar
| Número | Alemão |
| 0 | null |
| 1 | eins |
| 2 | zwei |
| 3 | drei |
| 4 | vier |
| 5 | fünf |
| 6 | sechs |
| 7 | sieben |
| 8 | acht |
| 9 | neun |
| 10 | zehn |
| 11 | elf |
| 12 | zwölf |
~ Das sind zwölf Euro. = São doze euros.
# Passo 2: de 13 a 19, uma regra só
Unidade + **zehn**: drei + zehn = **dreizehn**, vier + zehn = **vierzehn**.
| 13 | dreizehn |
| 14 | vierzehn |
| 15 | fünfzehn |
| 16 | sechzehn |
| 17 | siebzehn |
| 18 | achtzehn |
| 19 | neunzehn |
! Duas exceções: **sechzehn** (sem o s de sechs) e **siebzehn** (sem o en de sieben).
~ 20 = zwanzig · 30 = dreißig · 40 = vierzig · 50 = fünfzig
Os números como 34 ou 57 chegam na lição de horas. Por enquanto, as dezenas redondas bastam.
# Passo 3: a idade se diz com sein
BR Em português a gente **tem** trinta anos. Em alemão a gente **é** trinta anos: Ich **bin** dreißig. Nunca "Ich habe dreißig".
~ Wie alt bist du? = Quantos anos você tem?
~ Wie alt sind Sie? = Quantos anos o senhor tem?
~ Ich bin zwanzig (Jahre alt). = Eu tenho vinte anos.
# Passo 4: o número de telefone
Os alemães costumam ditar o telefone dígito por dígito ou em pares.
~ 0151 1219 = null eins fünf eins, zwölf, neunzehn
~ Meine Nummer ist null eins fünf eins. = Meu número é zero um cinco um.
> Ao telefone, **zwei** e **drei** se confundem. Por isso muita gente diz **zwo** no lugar de zwei.
? Como se diz 17? || siebzehn
? Complete: Ich ___ dreißig Jahre alt. || bin
? Como se pergunta a idade de alguém com quem você fala de "o senhor"? || Wie alt sind Sie?
`,
});

NL('n-formular', {
  de: 'Ein Formular', pt: 'Ler e preencher um formulário', gt: 'Sie e du · dados pessoais',
  gx: 'Com desconhecidos, no trabalho e em repartições usa-se Sie (formal), sempre com maiúscula, com o verbo igual ao infinitivo: Wie heißen Sie? Formulários pedem Name (sobrenome), Vorname (nome), Geburtsdatum e Adresse.',
  ge: 'Wie heißen Sie?=Como o senhor se chama?|Wie ist Ihre Adresse?=Qual é o seu endereço?|Füllen Sie bitte das Formular aus.=Preencha o formulário, por favor.',
  v: 'das Formular=o formulário=📝|die Anmeldung=a inscrição / o cadastro=🖊️|das Geburtsdatum=a data de nascimento=🎂|der Geburtsort=o local de nascimento=📍|die Postleitzahl=o CEP=📮|die Unterschrift=a assinatura=✒️|ausfüllen=preencher=✅|der Kurs=o curso=🎓|die Sprachschule=a escola de idiomas=🏫|das Datum=a data=📆',
  x: 'männlich=masculino|weiblich=feminino|der Familienstand=o estado civil|die Staatsangehörigkeit=a nacionalidade|der Wohnort=a cidade onde mora|Ihr / Ihre=seu / sua (formal)|morgens=de manhã|abends=à noite|das Feld=o campo (do formulário)|ankreuzen=marcar com um x',
  dlg: 'Guten Tag! Wie heißen Sie?=Bom dia! Como a senhora se chama?|Ich heiße Carla Mendes.=Eu me chamo Carla Mendes.|Woher kommen Sie, Frau Mendes?=De onde a senhora vem, sra. Mendes?|Ich komme aus Brasilien.=Eu venho do Brasil.',
  cz: 'Wie ___ Sie?=heißen=heißt=heiße|Woher ___ Sie?=kommen=kommst=kommt|Wo ___ du?=wohnst=wohnen=wohnt',
  whys: 'com Sie (formal) o verbo fica igual ao infinitivo: heißen; heißt é de du ou er/sie|Sie pede a forma do infinitivo: kommen; kommst é de du|com du o verbo leva -st: wohnst; wohnen seria com Sie ou wir',
  pts: 'Sie (formal) é usado com desconhecidos, no trabalho, em lojas e repartições. du é para amigos, família e crianças.|Com Sie, o verbo fica igual ao infinitivo: Sie heißen, Sie kommen, Sie wohnen. É a mesma forma de wir e de sie (eles).|Em formulários, Name é o sobrenome e Vorname é o nome. A data vem no formato dia.mês.ano: 05.03.1990.|O possessivo formal é Ihr / Ihre, também com maiúscula: Ihr Name, Ihre Adresse.',
  ex: 'Wie ist Ihr Vorname?=Qual é o seu nome?|Wo wohnen Sie?=Onde o senhor mora?|Unterschreiben Sie hier, bitte.=Assine aqui, por favor.|Was ist Ihr Geburtsdatum?=Qual é a sua data de nascimento?',
  bd: ['Wie=W^abre a pergunta|heißen=V^com Sie o verbo fica igual ao infinitivo|Sie?=S^Sie formal, sempre com maiúscula', 'Como o senhor se chama?'],
  rule: 'kommen_wohnen',
  hw: 'Escreva os seus dados como num formulário alemão (Name, Vorname, Geburtsdatum, Adresse, Telefon, Sprachen) e depois diga cada linha numa frase completa: Mein Vorname ist …',
  le: {
    texto: {
      t: 'Anmeldung · Sprachschule Berlin', kind: 'leitura',
      intro: 'A Carla se inscreveu num curso de alemão. Leia a ficha dela e responda.',
      paras: ['Name: Mendes', 'Vorname: Carla', 'Geburtsort: Recife, Brasilien', 'Adresse: Lindenstraße 12, 10969 Berlin', 'Telefon: 0176 4582 1903', 'Sprachen: Portugiesisch, Englisch', 'Kurs: Deutsch A1, morgens'],
      qs: [
        { q: 'Qual é o sobrenome da Carla?', o: ['Mendes', 'Carla', 'Linden'], a: 0 },
        { q: 'Onde ela nasceu?', o: ['em Recife', 'em Berlim', 'em Lisboa'], a: 0 },
        { q: 'Que línguas ela já fala?', o: ['português e inglês', 'alemão e inglês', 'só português'], a: 0 },
        { q: 'Quando é o curso dela?', o: ['de manhã', 'à noite', 'à tarde'], a: 0 },
      ],
    },
    escrita: {
      t: 'Preencha a sua ficha', tipo: 'form',
      pede: 'Agora é a sua vez: preencha a ficha de inscrição com os seus dados. Pode inventar, se preferir.',
      campos: [
        { l: 'Name', d: 'sobrenome', re: '^\\p{Lu}[\\p{L}\' -]+$', err: 'O sobrenome começa com letra maiúscula.' },
        { l: 'Vorname', d: 'nome', re: '^\\p{Lu}[\\p{L}\' -]+$', err: 'O nome começa com letra maiúscula.' },
        { l: 'Wohnort', d: 'cidade onde você mora', re: '^\\p{Lu}[\\p{L} .-]+$', err: 'Escreva o nome da cidade com maiúscula.' },
        { l: 'Land', d: 'país, em alemão', re: '^\\p{Lu}[\\p{L} ]+$', err: 'Escreva o país com maiúscula.', bad: [['^brasil$', 'Em alemão o Brasil é <b>Brasilien</b>.'], ['^alemanha$', 'Em alemão a Alemanha é <b>Deutschland</b>.']] },
        { l: 'Telefon', d: 'número', re: '^[+0-9][0-9 /-]{5,}$', err: 'Use só números (pode ter espaços).' },
        { l: 'Sprachen', d: 'línguas que você fala, em alemão', re: '(deutsch|portugiesisch|englisch|spanisch|französisch|italienisch)', f: 'iu', err: 'Escreva as línguas em alemão: Portugiesisch, Englisch, Spanisch…', bad: [['portugu[eê]s|ingl[eê]s|espanhol', 'Escreva em alemão: <b>Portugiesisch</b>, <b>Englisch</b>, <b>Spanisch</b>.']] },
      ],
      modelo: 'Name: Souza · Vorname: Ana · Wohnort: Curitiba · Land: Brasilien · Telefon: 041 9988 1234 · Sprachen: Portugiesisch, Englisch',
    },
  },
  deep: `
Esta lição é de **ler e escrever**. Você vai ler a ficha de inscrição de uma aluna e depois preencher a sua. Antes, duas coisas que todo formulário alemão usa: o tratamento formal **Sie** e os nomes dos campos.
# Passo 1: du ou Sie?
| | du | Sie |
| Para quem | amigos, família, crianças | desconhecidos, trabalho, lojas, repartições |
| Pergunta | Wie heißt du? | Wie heißen Sie? |
| Possessivo | dein Name | Ihr Name |
! **Sie** formal se escreve sempre com maiúscula, e o verbo fica igual ao infinitivo: Sie heißen, Sie kommen, Sie wohnen.
~ Woher kommen Sie? = De onde o senhor vem?
~ Wo wohnst du? = Onde você mora?
# Passo 2: os campos do formulário
| Campo | Significa |
| Name | sobrenome |
| Vorname | nome |
| Geburtsdatum | data de nascimento |
| Geburtsort | local de nascimento |
| Adresse | endereço |
| Postleitzahl (PLZ) | CEP |
| Staatsangehörigkeit | nacionalidade |
| Unterschrift | assinatura |
BR Cuidado: **Name** no formulário é o **sobrenome**, não o nome. O nome vai em **Vorname**.
~ Mein Vorname ist Carla. = Meu nome é Carla.
# Passo 3: como se escrevem os dados
- Data: dia.mês.ano, com pontos: **05.03.1990**
- Endereço: rua + número, depois CEP + cidade: **Lindenstraße 12, 10969 Berlin**
- Países e línguas têm nome próprio: Brasilien, Deutschland · Portugiesisch, Englisch
~ Ich wohne in der Lindenstraße 12. = Eu moro na Lindenstraße 12.
# Passo 4: como ler um formulário
Você não precisa entender cada palavra. Procure primeiro os campos que você conhece (Name, Vorname, Telefon) e use o que está escrito ao lado para deduzir o resto.
~ Was bedeutet Geburtsort? = O que significa Geburtsort?
> No exercício, leia a ficha da Carla com calma. As perguntas estão em português e a resposta está sempre no texto.
? Em "Name: Mendes", Mendes é o nome ou o sobrenome? || o sobrenome
? Como se pergunta o nome de alguém de forma formal? || Wie heißen Sie?
? Como se escreve 5 de março de 1990 num formulário alemão? || 05.03.1990
`,
});

/* Módulo 2 (21/11/2026): plural, profissões e a lição de Ler e escrever "Eine kurze Nachricht". */
NL('n-plural', {
  de: 'Zwei Bücher, drei Stühle', pt: 'Quantidades e objetos no plural', gt: 'Plural dos substantivos',
  gx: 'No plural o artigo é sempre die. A terminação varia: -e (Tische), -(e)n (Lampen), -er com trema (Bücher), -s (Handys) ou nada (Fenster). Aprenda cada palavra com o plural.',
  ge: 'Ich habe zwei Katzen.=Eu tenho dois gatos.|Wie viele Bücher hast du?=Quantos livros você tem?|Die Stühle sind neu.=As cadeiras são novas.',
  v: 'der Hund=o cachorro · plural: die Hunde=🐕|die Katze=o gato · plural: die Katzen=🐈|der Ball=a bola · plural: die Bälle=⚽|das Foto=a foto · plural: die Fotos=📷|die Tasse=a xícara · plural: die Tassen=☕|das Ding=a coisa · plural: die Dinge=🧩|die Brille=os óculos · plural: die Brillen=👓|der Kuli=a caneta · plural: die Kulis=🖊️|viele=muitos, muitas=🔢|wie viele=quantos, quantas=❓',
  x: 'die Zahl=o número · plural: die Zahlen|die Sache=a coisa · plural: die Sachen|die Maus=o rato · plural: die Mäuse|der Vogel=o pássaro · plural: die Vögel|der Singular=o singular|der Plural=o plural|ein paar=alguns, algumas|alle=todos, todas|nur=só, apenas|genug=o suficiente',
  dlg: 'Hast du einen Hund?=Você tem um cachorro?|Nein, ich habe zwei Katzen.=Não, eu tenho dois gatos.|Zwei Katzen? Wie heißen sie?=Dois gatos? Como eles se chamam?|Mia und Max. Hier sind die Fotos!=Mia e Max. Aqui estão as fotos!',
  cz: 'Ich habe zwei ___. (das Buch)=Bücher=Buchs=Buchen|Wie viele ___ hast du? (die Katze)=Katzen=Katze=Katzes|___ Stühle sind neu.=Die=Der=Das',
  whys: 'das Buch faz o plural com -er e trema: die Bücher|feminina terminada em -e ganha -n: die Katze → die Katzen|no plural o artigo é sempre die, mesmo quando o singular é der Stuhl',
  pts: 'No plural o artigo é sempre die: der Stuhl → die Stühle, das Buch → die Bücher.|Há cinco terminações: -e, -(e)n, -er, -s ou nenhuma, muitas vezes com trema: der Ball → die Bälle.|Pistas: femininas em -e ganham -n (die Lampe → die Lampen); palavras em -a, -i, -o ganham -s (das Foto → die Fotos); em -er, -el, -en não mudam (das Fenster).|Depois de número, sem artigo: zwei Bücher. Quantidade: Wie viele …? O verbo vai para o plural: Die Bücher sind neu.',
  ex: 'Ich habe drei Brüder.=Eu tenho três irmãos.|Die Fotos sind alt.=As fotos são antigas.|Wie viele Kinder hast du?=Quantos filhos você tem?|Ich habe nur einen Kuli.=Eu só tenho uma caneta.',
  bd: ['Ich=S|habe=V^haben: ich habe|zwei_Bücher.=OA^número + plural, sem artigo: das Buch → die Bücher', 'Eu tenho dois livros.'],
  rule: 'plural',
  hw: 'Conte os objetos da sua mesa ou do seu quarto e escreva cinco frases com número e plural (ex.: Ich habe drei Kulis.). Confira cada plural no dicionário.',
  deep: `
Um livro, dois livros: em português quase sempre basta pôr -s. Em alemão o plural tem cinco formas, mas o artigo fica fácil: no plural ele é sempre **die**. Hoje você aprende as formas e as pistas para adivinhar cada uma.
# Passo 1: no plural, o artigo é sempre die
| Singular | Plural |
| der Stuhl | die Stühle |
| die Lampe | die Lampen |
| das Buch | die Bücher |
! O **die** do plural não quer dizer feminino. Ele vale para os três gêneros: der, die e das viram **die**.
~ Die Stühle sind neu. = As cadeiras são novas.
# Passo 2: as cinco terminações
| Terminação | Exemplo |
| -e | der Tisch → die Tische |
| -(e)n | die Tür → die Türen |
| -er | das Kind → die Kinder |
| -s | das Handy → die Handys |
| nada | der Computer → die Computer |
Muitas vezes vem junto um **trema**: der Ball → die Bälle, das Buch → die Bücher.
~ Ich habe zwei Kinder. = Eu tenho dois filhos.
# Passo 3: pistas para adivinhar
- Feminina terminada em **-e** ganha **-n**: die Katze → die Katzen, die Tasse → die Tassen
- Palavra terminada em **-a, -i, -o** ou estrangeira ganha **-s**: das Foto → die Fotos, der Kuli → die Kulis
- Masculina ou neutra em **-er, -el, -en** não muda: das Fenster → die Fenster
- Muitas palavras curtas, de uma sílaba, ganham **-e**: der Hund → die Hunde
BR Nenhuma regra funciona sempre. Por isso o vocabulário desta lição mostra o plural de cada palavra: decore os dois juntos, como "der Hund, die Hunde".
~ Ich habe zwei Katzen. = Eu tenho dois gatos.
# Passo 4: números e quantidade
Depois de um número, o substantivo vai para o plural **sem artigo**: zwei Bücher, drei Stühle. Para perguntar a quantidade: **Wie viele …?**
~ Wie viele Bücher hast du? = Quantos livros você tem?
~ Ich habe viele Fotos. = Eu tenho muitas fotos.
! Com o plural, o verbo também vai para o plural: das Foto **ist** alt → die Fotos **sind** alt.
~ Die Fotos sind alt. = As fotos são antigas.
> Diga em voz alta um objeto que você tem e quantos: Ich habe zwei …
? Qual é o artigo de todas as palavras no plural? || die
? Qual é o plural de das Buch? || die Bücher
? Como se pergunta "Quantos gatos você tem?" || Wie viele Katzen hast du?
`,
});

NL('n-beruf', {
  de: 'Was sind Sie von Beruf?', pt: 'Profissões e trabalho', gt: 'sein + profissão · feminino com -in',
  gx: 'Profissão com sein, sem artigo: Ich bin Lehrerin. O feminino é o masculino + in: der Lehrer → die Lehrerin. Também se diz: Ich arbeite als Koch.',
  ge: 'Was sind Sie von Beruf?=Qual é a sua profissão?|Ich bin Ingenieurin.=Eu sou engenheira.|Ich arbeite als Verkäufer.=Eu trabalho como vendedor.',
  v: 'der Beruf=a profissão=💼|von Beruf=de profissão=💼|arbeiten=trabalhar=🛠️|als=como (na função de)=➡️|der Koch / die Köchin=o cozinheiro / a cozinheira=🧑‍🍳|der Verkäufer / die Verkäuferin=o vendedor / a vendedora=🛍️|der Ingenieur / die Ingenieurin=o engenheiro / a engenheira=👷|der Student / die Studentin=o estudante / a estudante=🎓|der Krankenpfleger / die Krankenpflegerin=o enfermeiro / a enfermeira=🩺|studieren=estudar (na faculdade)=📚',
  x: 'der Lehrer / die Lehrerin=o professor / a professora|der Architekt / die Architektin=o arquiteto / a arquiteta|der Friseur / die Friseurin=o cabeleireiro / a cabeleireira|der Polizist / die Polizistin=o policial|der Programmierer / die Programmiererin=o programador / a programadora|der Mechaniker / die Mechanikerin=o mecânico / a mecânica|der Fahrer / die Fahrerin=o motorista|der Rentner / die Rentnerin=o aposentado / a aposentada|der Hausmann / die Hausfrau=o dono de casa / a dona de casa|der Job=o emprego, o trabalho (informal)',
  dlg: 'Was sind Sie von Beruf, Frau Lima?=Qual é a sua profissão, sra. Lima?|Ich bin Krankenpflegerin. Und Sie?=Sou enfermeira. E o senhor?|Ich bin Koch, aber jetzt bin ich Student.=Sou cozinheiro, mas agora sou estudante.|Wirklich? Was studieren Sie?=É mesmo? O que o senhor estuda?',
  cz: 'Ich bin ___. (sou professora)=Lehrerin=eine Lehrerin=Lehrer|Er arbeitet ___ Koch.=als=wie=von|Was ___ Sie von Beruf?=sind=ist=bist',
  whys: 'profissão com sein vai sem artigo, e a mulher usa a forma com -in: Lehrerin|para dizer a função se usa als: Ich arbeite als Koch|com Sie (formal) o verbo sein é sind',
  pts: 'Profissão se diz com sein, sem artigo: Ich bin Koch. Ich bin Studentin.|O feminino é o masculino + in: der Lehrer → die Lehrerin. Às vezes com trema: der Koch → die Köchin.|Perguntas: Was sind Sie von Beruf? (formal) e Was machst du beruflich? (informal). Outra resposta: Ich arbeite als Ingenieur.|arbeiten ganha um e de apoio: du arbeitest, er arbeitet.',
  ex: 'Mein Vater ist Mechaniker.=Meu pai é mecânico.|Meine Schwester studiert in Berlin.=Minha irmã estuda em Berlim.|Ich arbeite als Verkäuferin.=Eu trabalho como vendedora.|Was machst du beruflich?=O que você faz profissionalmente?',
  bd: ['Ich=S|bin=V^sein: a profissão se diz com "ser"|Lehrerin.=PR^sem artigo; o feminino leva -in', 'Eu sou professora.'],
  rule: 'beruf',
  hw: 'Escreva a profissão de cinco pessoas da sua família ou dos seus amigos (ex.: Meine Mutter ist Ärztin.), com a forma feminina quando for o caso. Depois diga a sua: Ich bin … ou Ich arbeite als …',
  deep: `
Depois do nome e de onde a pessoa vem, a pergunta que mais aparece é a da profissão. Hoje você aprende a perguntar, a responder e um detalhe do alemão: quase toda profissão tem uma forma masculina e uma feminina.
# Passo 1: perguntar a profissão
A primeira pergunta é formal (Sie); a segunda, informal (du).
~ Was sind Sie von Beruf? = Qual é a sua profissão?
~ Was machst du beruflich? = O que você faz profissionalmente?
# Passo 2: responder com sein, sem artigo
| Alemão | Português |
| Ich bin Koch. | Sou cozinheiro. |
| Ich bin Studentin. | Sou estudante. |
| Er ist Ingenieur. | Ele é engenheiro. |
BR Igual ao português: "sou cozinheiro", e não "sou um cozinheiro". Em alemão, **ein** ou **eine** antes da profissão soa errado nessa frase.
~ Mein Vater ist Mechaniker. = Meu pai é mecânico.
# Passo 3: o feminino com -in
| Masculino | Feminino |
| der Lehrer | die Lehrerin |
| der Verkäufer | die Verkäuferin |
| der Student | die Studentin |
| der Koch | die Köchin |
| der Arzt | die Ärztin |
! A forma com **-in** é sempre **die**. Algumas ganham trema: Koch → Köchin, Arzt → Ärztin.
~ Sie ist Ärztin. = Ela é médica.
# Passo 4: arbeiten als e studieren
- **arbeiten** ganha um e de apoio: du arbeitest, er arbeitet
- **als** = como, na função de: Ich arbeite **als** Koch
- **studieren** = estudar na faculdade; para escola ou idioma, use **lernen**
~ Ich arbeite als Verkäuferin. = Eu trabalho como vendedora.
~ Meine Schwester studiert in Berlin. = Minha irmã estuda em Berlim.
> Diga em voz alta a sua profissão e a de duas pessoas que você conhece.
? Como se diz "Ela é professora"? || Sie ist Lehrerin.
? Qual é o feminino de der Verkäufer? || die Verkäuferin
? Como se pergunta a profissão de forma formal? || Was sind Sie von Beruf?
`,
});

NL('n-nachricht', {
  de: 'Eine kurze Nachricht', pt: 'Ler um perfil e escrever uma mensagem de apresentação', gt: 'und, aber, oder',
  gx: 'und, aber e oder ligam duas frases sem mudar a ordem: Ich koche gern, aber ich tanze nicht gern. Antes de aber vai vírgula.',
  ge: 'Ich heiße Lukas und ich komme aus Hamburg.=Eu me chamo Lukas e venho de Hamburgo.|Ich koche gern, aber ich tanze nicht gern.=Eu gosto de cozinhar, mas não gosto de dançar.|Kochst du gern oder tanzt du gern?=Você gosta de cozinhar ou de dançar?',
  v: 'die Nachricht=a mensagem=💬|das Profil=o perfil=👤|kennenlernen=conhecer (uma pessoa)=🤝|üben=praticar=🔁|die Fremdsprache=a língua estrangeira=🌍|das Tandem=a troca de idiomas=🗣️|die Person=a pessoa=🧑|sehr=muito (com adjetivo)=⬆️|Liebe / Lieber=Querida / Querido (abertura)=💌|Viele Grüße=Um abraço (despedida)=👋',
  x: 'der Gruß=a saudação|der Betreff=o assunto (de e-mail)|die Muttersprache=a língua materna|der Kontakt=o contato|das Treffen=o encontro|die App=o aplicativo|das Café=o café (lugar)|online=on-line|zurzeit=no momento|später=mais tarde',
  dlg: 'Hallo Lukas! Ich heiße Ana und ich lerne Deutsch.=Oi, Lukas! Eu me chamo Ana e estou aprendendo alemão.|Hallo Ana! Ich lerne Portugiesisch. Wo wohnst du?=Oi, Ana! Eu estou aprendendo português. Onde você mora?|Ich wohne in Curitiba, aber ich komme aus Recife.=Eu moro em Curitiba, mas venho de Recife.|Super! Kochst du gern oder tanzt du gern?=Legal! Você gosta de cozinhar ou de dançar?',
  cz: 'Ich koche gern, ___ ich tanze nicht gern.=aber=und=oder|Kommst du aus Rio ___ aus Recife?=oder=aber=und|Ich heiße Lukas ___ ich wohne in Hamburg.=und=aber=oder',
  whys: 'aber liga duas ideias que se opõem: gosto de uma coisa, mas não da outra|oder apresenta uma escolha entre duas possibilidades|und soma duas informações; depois dele a ordem das palavras não muda',
  pts: 'und (e), aber (mas) e oder (ou) ligam duas frases sem mudar a ordem: depois deles vem sujeito + verbo.|Antes de aber vai vírgula: Ich koche gern, aber ich tanze nicht gern.|Com o mesmo sujeito, ele pode sumir depois de und: Ich heiße Lukas und wohne in Köln.|Mensagem curta: abertura (Hallo / Liebe Ana), três ou quatro frases, uma pergunta e Viele Grüße.',
  ex: 'Ich bin Studentin und ich wohne in Köln.=Eu sou estudante e moro em Colônia.|Ich spiele gern Fußball, aber ich schwimme nicht gern.=Eu gosto de jogar futebol, mas não gosto de nadar.|Wohnst du in Berlin oder in München?=Você mora em Berlim ou em Munique?|Viele Grüße, Ana=Um abraço, Ana',
  bd: ['Ich=S|koche=V|gern,=ADV^gern depois do verbo: gostar de fazer|aber=C^aber liga as duas frases e não muda a ordem|ich=S|tanze=V^o verbo continua na 2ª posição|nicht_gern.=NEG', 'Eu gosto de cozinhar, mas não gosto de dançar.'],
  rule: 'und_aber',
  hw: 'Escreva no diário uma mensagem de apresentação de cinco linhas para um parceiro de tandem: nome e idade, de onde você é, profissão, um gosto com aber e uma pergunta com oder. Termine com Viele Grüße.',
  le: {
    texto: {
      t: 'Tandem-Profil · Lukas', kind: 'leitura',
      intro: 'O Lukas procura alguém para trocar idiomas. Leia o perfil dele e responda.',
      paras: ['Hallo! Ich heiße Lukas und ich bin 28 Jahre alt.', 'Ich komme aus Hamburg, aber ich wohne jetzt in Köln.', 'Ich bin Koch von Beruf. Ich koche sehr gern, aber ich tanze nicht gern.', 'Meine Muttersprache ist Deutsch. Ich spreche auch Englisch.', 'Ich lerne Portugiesisch und suche eine Person aus Brasilien.', 'Kochst du gern oder machst du gern Musik? Viele Grüße, Lukas'],
      qs: [
        { q: 'De onde o Lukas vem?', o: ['de Hamburgo', 'de Colônia', 'do Brasil'], a: 0 },
        { q: 'Qual é a profissão dele?', o: ['cozinheiro', 'professor', 'estudante'], a: 0 },
        { q: 'Do que ele não gosta?', o: ['de dançar', 'de cozinhar', 'de música'], a: 0 },
        { q: 'O que ele procura?', o: ['uma pessoa do Brasil para trocar idiomas', 'um curso de alemão em Colônia', 'um emprego de cozinheiro'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva a sua resposta ao Lukas', tipo: 'form', ok: 'Mensagem escrita corretamente.',
      pede: 'Responda ao Lukas com uma mensagem curta, uma frase em cada linha. Use und, aber e oder. Pode inventar, se preferir.',
      campos: [
        { l: 'Name und Alter', d: 'Ich heiße … und ich bin … Jahre alt.', re: '\\bhei(ß|ss)e\\b.+\\bund\\b.+\\bbin\\b', f: 'iu', err: 'Junte nome e idade com und: Ich heiße Ana und ich bin 30.', bad: [['\\bhabe\\b', 'A idade se diz com sein: Ich <b>bin</b> 30.']] },
        { l: 'Herkunft und Wohnort', d: 'Ich komme aus …, aber ich wohne in …', re: '\\bkomme aus\\b.+\\b(und|aber)\\b.+\\bwohne\\b', f: 'iu', err: 'Diga de onde vem e onde mora, com und ou aber: Ich komme aus Recife, aber ich wohne in Curitiba.' },
        { l: 'Beruf', d: 'Ich bin … (von Beruf). / Ich arbeite als …', re: '\\b(bin|arbeite als)\\s+\\p{L}{3,}', f: 'iu', err: 'Use sein + profissão, sem artigo: Ich bin Lehrerin.', bad: [['\\bbin (ein|eine)\\b', 'A profissão vai <b>sem artigo</b>: Ich bin Lehrerin.']] },
        { l: 'Hobbys', d: 'Ich … gern, aber ich … nicht gern.', re: '\\bgern\\s*,\\s*aber\\b.+\\bnicht gern\\b', f: 'iu', err: 'Diga do que gosta e do que não gosta, com aber: Ich lese gern, aber ich koche nicht gern.', bad: [['gern aber', 'Antes de <b>aber</b> vai vírgula: … gern<b>,</b> aber …']] },
        { l: 'Frage', d: 'uma pergunta com oder', re: '\\boder\\b.*\\?\\s*$', f: 'iu', err: 'Faça uma pergunta com oder e termine com ?: Kochst du gern oder tanzt du gern?' },
        { l: 'Gruß', d: 'a despedida e o seu nome', re: '^viele gr(ü|ue)(ß|ss)e\\b', f: 'iu', err: 'Despeça-se com Viele Grüße e o seu nome.' },
      ],
      modelo: 'Ich heiße Ana und ich bin 30 Jahre alt. · Ich komme aus Recife, aber ich wohne in Curitiba. · Ich bin Lehrerin von Beruf. · Ich lese gern, aber ich tanze nicht gern. · Kochst du gern oder tanzt du gern? · Viele Grüße, Ana',
    },
  },
  deep: `
Esta lição é de **ler e escrever**. Você vai ler o perfil de um alemão que procura alguém para trocar idiomas e depois escrever uma resposta para ele. Antes, as três palavras que ligam as frases de qualquer mensagem: **und**, **aber** e **oder**.
# Passo 1: und, aber, oder
| Alemão | Português |
| und | e |
| aber | mas |
| oder | ou |
! Depois de und, aber e oder a frase continua normal: **sujeito + verbo**. A ordem não muda.
~ Ich koche gern, aber ich tanze nicht gern. = Eu gosto de cozinhar, mas não gosto de dançar.
# Passo 2: a vírgula e o sujeito repetido
- Antes de **aber** vai vírgula: … gern, aber …
- Antes de **und** e **oder**, normalmente não.
- Se o sujeito é o mesmo, ele pode sumir depois de und: Ich heiße Lukas und wohne in Köln.
~ Wohnst du in Berlin oder in München? = Você mora em Berlim ou em Munique?
# Passo 3: como é uma mensagem curta
| Parte | Exemplo |
| Abertura | Hallo Lukas! / Lieber Lukas, |
| Quem sou | Ich heiße Ana und ich bin 30. |
| De onde sou | Ich komme aus Recife, aber ich wohne in Curitiba. |
| Trabalho e gostos | Ich bin Lehrerin. Ich lese gern. |
| Pergunta | Kochst du gern oder tanzt du gern? |
| Despedida | Viele Grüße, Ana |
BR Em português a gente abre com "Oi" e fecha com "Beijos" ou "Abraço". Em alemão, com quem você ainda não conhece bem: **Hallo** ou **Liebe** (para mulher) / **Lieber** (para homem) + nome, e no fim **Viele Grüße**.
~ Viele Grüße, Ana = Um abraço, Ana
# Passo 4: como ler um perfil
Leia primeiro o que você reconhece: nomes, cidades, números e profissões. Depois procure **und**, **aber** e **oder**: eles mostram onde começa cada informação.
~ Ich lerne Portugiesisch. = Eu estou aprendendo português.
> No exercício, leia o perfil do Lukas e depois escreva a sua resposta, uma frase por linha.
? Como se diz "mas" em alemão? || aber
? Antes de qual das três palavras vai vírgula? || aber
? Como se termina uma mensagem informal em alemão? || Viele Grüße
`,
});

/* Módulo 3 (21/11/2026): marcar um compromisso e a lição de Ler e escrever "Eine Einladung". */
NL('n-termin', {
  de: 'Am Montag um zehn', pt: 'Marcar um compromisso', gt: 'am, um, im (tempo)',
  gx: 'um + hora (um zehn Uhr), am + dia ou parte do dia (am Montag, am Abend), im + mês ou estação (im Mai). Para marcar: Hast du am … Zeit? Para responder: Das geht. / Das geht nicht.',
  ge: 'Hast du am Freitag Zeit?=Você tem tempo na sexta?|Der Termin ist um halb drei.=O compromisso é às duas e meia.|Ab Mai arbeite ich von neun bis fünf.=A partir de maio eu trabalho das nove às cinco.',
  v: 'der Termin=o compromisso, a hora marcada=📅|Zeit haben=ter tempo, estar livre=🙆|Das geht.=Dá, está bom.=👍|Das geht nicht.=Não dá.=👎|vielleicht=talvez=🤔|der Kalender=a agenda, o calendário=🗓️|von … bis=de … até=↔️|ab=a partir de=▶️|übermorgen=depois de amanhã=📆|der Vormittag=a manhã (até o meio-dia)=🌤️',
  x: 'der Nachmittag=a tarde|der Januar=janeiro|der März=março|der Mai=maio|der Juli=julho|der Dezember=dezembro|die Verabredung=o encontro marcado|nächste Woche=na semana que vem|zu spät=atrasado, tarde demais|die Mittagspause=o intervalo do almoço',
  dlg: 'Hast du am Montag Zeit?=Você tem tempo na segunda?|Am Montag? Nein, das geht nicht. Und am Dienstag?=Na segunda? Não, não dá. E na terça?|Ja, das geht. Um wie viel Uhr?=Sim, dá. A que horas?|Um zehn Uhr, im Café?=Às dez, no café?',
  cz: 'Hast du ___ Freitag Zeit?=am=um=im|Der Termin ist ___ halb drei.=um=am=im|Der Kurs beginnt ___ März.=im=am=um',
  whys: 'dias da semana usam am: am Freitag|horas usam um: um halb drei|meses usam im: im März',
  pts: 'um + hora: um acht Uhr, um halb drei.|am + dia ou parte do dia: am Montag, am Abend, am Wochenende. Exceção: in der Nacht.|im + mês ou estação: im Mai, im Sommer. Intervalo: von neun bis fünf. Início: ab Montag.|Para marcar: Hast du am … Zeit? Para responder: Das geht. / Das geht nicht. / Vielleicht.',
  ex: 'Der Termin ist am Donnerstag um neun.=O compromisso é na quinta às nove.|Ich arbeite von acht bis vier.=Eu trabalho das oito às quatro.|Wann hast du Zeit?=Quando você tem tempo?|Der Kurs beginnt im März.=O curso começa em março.',
  bd: ['Am_Montag=T^am + dia da semana|habe=V^o verbo fica na 2ª posição, logo depois do tempo|ich=S^o sujeito vem depois do verbo|um_zehn=T^um + hora|einen_Termin.=OA^einen porque Termin é masculino (der Termin)', 'Na segunda, às dez, eu tenho um compromisso.'],
  rule: 'tempo',
  hw: 'Escreva a sua semana como numa agenda, em alemão: um compromisso por dia, com am e um (ex.: Am Montag um neun: Deutschkurs). Depois leia tudo em voz alta.',
  deep: `
Combinar um café, marcar o médico, saber quando começa o curso: tudo depende de três palavrinhas, **um**, **am** e **im**. Hoje você aprende quando usar cada uma e como marcar um compromisso.
# Passo 1: um para a hora
Para dizer a que horas algo acontece, use **um**. Para perguntar: **Um wie viel Uhr …?** ou **Wann …?**
~ Der Kurs beginnt um zehn Uhr. = O curso começa às dez horas.
~ Der Termin ist um halb drei. = O compromisso é às duas e meia.
# Passo 2: am para dias e partes do dia
| Quando | Exemplo |
| dia da semana | am Montag, am Freitag |
| parte do dia | am Morgen, am Vormittag, am Abend |
| fim de semana | am Wochenende |
BR Em português dizemos "na segunda" e "à noite". Em alemão os dois são **am**. Só a madrugada foge à regra: **in der Nacht**.
~ Hast du am Freitag Zeit? = Você tem tempo na sexta?
# Passo 3: im para meses, e os intervalos
- **im** + mês ou estação: im Mai, im Dezember, im Sommer
- **von … bis**: von neun bis fünf (das nove às cinco)
- **ab**: ab Montag (a partir de segunda)
~ Der Kurs beginnt im März. = O curso começa em março.
~ Ich arbeite von acht bis vier. = Eu trabalho das oito às quatro.
# Passo 4: marcar, aceitar e recusar
| Para | Diga |
| perguntar | Hast du am Montag Zeit? |
| aceitar | Ja, das geht. |
| recusar | Nein, das geht nicht. |
| propor outro | Und am Dienstag? |
~ Nein, das geht nicht. Und am Dienstag? = Não, não dá. E na terça?
> Marque um compromisso imaginário em voz alta: o dia com am e a hora com um.
? Qual palavra vai antes de uma hora: um, am ou im? || um
? Como se diz "em maio"? || im Mai
? Como se diz "Não dá"? || Das geht nicht.
`,
});

NL('n-einladung', {
  de: 'Eine Einladung', pt: 'Ler um convite e responder aceitando ou recusando', gt: 'Hast du Zeit? · leider',
  gx: 'Para aceitar: Ich komme gern! Para recusar com educação: Leider kann ich nicht kommen, e o motivo (Ich arbeite am Samstag). Depois de leider vem o verbo: Leider kann ich nicht.',
  ge: 'Hast du am Samstag Zeit?=Você tem tempo no sábado?|Ich komme gern!=Eu vou com prazer!|Leider kann ich nicht kommen.=Infelizmente não posso ir.',
  v: 'die Einladung=o convite=💌|leider=infelizmente=😕|Schade!=Que pena!=😢|Ich komme gern.=Eu vou com prazer.=😊|die Feier=a comemoração, a festa=🥳|grillen=fazer churrasco=🔥|der Grillabend=a noite de churrasco=🍖|bei mir=na minha casa=🏠|der Salat=a salada=🥗|das Getränk=a bebida=🥤',
  x: 'Bis dann!=Até lá!|Danke für die Einladung!=Obrigado pelo convite!|die Wurst=a salsicha, a linguiça|der Nachtisch=a sobremesa|der Hof=o pátio|die Freunde=os amigos|sicher=com certeza|bestimmt=com certeza, sem dúvida|ein anderes Mal=outro dia, outra vez|nächsten Samstag=no próximo sábado',
  dlg: 'Hallo Tim! Hast du am Samstag Zeit?=Oi, Tim! Você tem tempo no sábado?|Am Samstag? Warum?=No sábado? Por quê?|Ich mache einen Grillabend bei mir. Kommst du?=Vou fazer um churrasco na minha casa. Você vem?|Leider kann ich nicht. Ich arbeite am Samstag. Schade!=Infelizmente não posso. Eu trabalho no sábado. Que pena!',
  cz: '___ kann ich nicht kommen.=Leider=Gern=Bitte|Ich komme ___! Danke für die Einladung.=gern=leider=nicht|___ du am Samstag Zeit?=Hast=Bist=Hat',
  whys: 'leider (infelizmente) abre a recusa educada; depois dele vem o verbo: Leider kann ich…|gern depois do verbo mostra que você aceita com prazer|Zeit haben: com du, a forma de haben é hast',
  pts: 'Convidar: Hast du am … Zeit? / Ich mache … Kommst du? / Möchtest du kommen?|Aceitar: Ja, gern! / Ich komme gern. / Danke für die Einladung!|Recusar: Leider kann ich nicht (kommen). Depois de leider vem o verbo. Diga o motivo e, se quiser, proponha outro dia.|"Ir à festa" em alemão é kommen, do ponto de vista de quem convida: Kommst du? – Ja, ich komme.',
  ex: 'Möchtest du am Freitag kommen?=Você gostaria de vir na sexta?|Danke für die Einladung!=Obrigado pelo convite!|Leider kann ich nicht, ich arbeite am Freitag.=Infelizmente não posso, eu trabalho na sexta.|Vielleicht ein anderes Mal!=Quem sabe outro dia!',
  bd: ['Leider=ADV^leider ocupa a 1ª posição|kann=MOD^o modal vem logo depois, na 2ª posição|ich=S^o sujeito vem depois do verbo|nicht=NEG|kommen.=INF^o infinitivo vai para o fim', 'Infelizmente não posso ir.'],
  rule: 'convite',
  hw: 'Escreva no diário um convite curto para um amigo (dia, hora e lugar) e duas respostas: uma aceitando e outra recusando com leider e o motivo.',
  le: {
    texto: {
      t: 'Einladung zum Grillabend', kind: 'leitura',
      intro: 'A Julia convida os vizinhos para um churrasco. Leia o convite e responda.',
      paras: ['Liebe Nachbarn,', 'am Samstag mache ich einen Grillabend bei mir im Hof.', 'Wir beginnen um 18 Uhr.', 'Ich mache Wurst und Salat. Bitte bringt Getränke mit!', 'Habt ihr Zeit? Bitte antwortet bis Mittwoch.', 'Viele Grüße, Julia'],
      qs: [
        { q: 'Quando é o churrasco?', o: ['no sábado, às 18h', 'na quarta, às 18h', 'no sábado, às 8h'], a: 0 },
        { q: 'Onde é?', o: ['no pátio do prédio da Julia', 'num restaurante', 'num parque'], a: 0 },
        { q: 'O que os convidados devem levar?', o: ['bebidas', 'salada', 'linguiça'], a: 0 },
        { q: 'Até quando é preciso responder?', o: ['até quarta-feira', 'até sábado', 'até as 18h'], a: 0 },
      ],
    },
    escrita: {
      t: 'Responda ao convite da Julia', tipo: 'form', ok: 'Resposta escrita corretamente.',
      pede: 'Você escolhe: aceitar ou recusar. Escreva uma frase em cada linha. Pode inventar o motivo.',
      campos: [
        { l: 'Anrede', d: 'a abertura: Liebe Julia, / Hallo Julia,', re: '^(liebe|hallo)\\s+julia\\b', f: 'iu', err: 'Comece com Liebe Julia, ou Hallo Julia,', bad: [['^lieber julia', 'Julia é mulher: <b>Liebe</b> Julia.']] },
        { l: 'Dank', d: 'agradeça o convite', re: '\\bdanke\\b', f: 'iu', err: 'Agradeça o convite: Danke für die Einladung!' },
        { l: 'Antwort', d: 'aceite com gern ou recuse com leider', re: '\\b(gern|gerne|leider)\\b', f: 'iu', err: 'Aceite (Ich komme gern!) ou recuse com leider (Leider kann ich nicht kommen.).', bad: [['^leider ich', 'Depois de <b>leider</b> vem o verbo: Leider <b>kann</b> ich nicht.']] },
        { l: 'Detail', d: 'um detalhe com dia ou hora (am …, um …)', re: '\\b(am|um|ab|bis)\\b', f: 'iu', err: 'Use am (dia) ou um (hora): Ich komme um 18 Uhr. / Ich arbeite am Samstag.' },
        { l: 'Gruß', d: 'a despedida e o seu nome', re: '^(viele gr(ü|ue)(ß|ss)e|bis (dann|samstag|bald))\\b', f: 'iu', err: 'Despeça-se: Viele Grüße, e o seu nome (ou Bis Samstag!).' },
      ],
      modelo: 'Liebe Julia, · Danke für die Einladung! · Ich komme gern. · Ich komme um 18 Uhr. · Viele Grüße, Ana',
    },
  },
  deep: `
Esta lição é de **ler e escrever**. Você vai ler o convite de uma vizinha que faz um churrasco e depois responder, aceitando ou recusando com educação. A palavra-chave da recusa é **leider**.
# Passo 1: convidar
~ Hast du am Samstag Zeit? = Você tem tempo no sábado?
~ Möchtest du kommen? = Você gostaria de vir?
BR Em português a gente "vai" à festa. Em alemão quem é convidado **kommt** (vem), porque se fala do ponto de vista de quem convida: Kommst du? – Ja, ich komme!
# Passo 2: aceitar
| Alemão | Português |
| Ja, gern! | Sim, com prazer! |
| Ich komme gern. | Eu vou com prazer. |
| Danke für die Einladung! | Obrigado pelo convite! |
| Bis dann! | Até lá! |
~ Ich komme gern. = Eu vou com prazer.
# Passo 3: recusar com leider
**leider** = infelizmente. Quando ele abre a frase, o verbo vem logo depois: **Leider kann ich nicht.**
- Diga o motivo: Ich arbeite am Samstag.
- Lamente: Schade!
- Proponha outra vez: Vielleicht ein anderes Mal!
! Recusar só com "Nein." soa seco em alemão também. Agradeça, use **leider** e dê o motivo.
~ Leider kann ich nicht kommen. = Infelizmente não posso ir.
# Passo 4: como ler um convite
Procure quatro coisas: **was** (o quê), **wann** (quando), **wo** (onde) e o que levar. No convite da Julia aparece **Bitte bringt Getränke mit**: mitbringen = levar junto, com o mit no fim, como os verbos separáveis da lição Mein Tag.
~ Wann beginnt die Feier? = Quando começa a festa?
> No exercício, leia o convite da Julia, responda às perguntas e escreva a sua resposta, uma frase por linha.
? Como se diz "infelizmente"? || leider
? Como se aceita um convite? || Ich komme gern!
? Depois de leider, vem o verbo ou o sujeito? || o verbo (Leider kann ich nicht.)
`,
});

/* Módulo 4 (21/11/2026): feira e preços, gostos na comida e a lição de Ler e escrever "Speisekarte und Einkaufszettel". */
NL('n-markt', {
  de: 'Auf dem Markt', pt: 'Quantidades, embalagens e preços', gt: 'Números até 1000 · ein Kilo, eine Packung',
  gx: 'Quantidade + produto, sem "de": ein Kilo Tomaten, eine Packung Reis, 200 Gramm Käse. Preço: Das kostet zwei Euro fünfzig (2,50 €). Centenas: zweihundert; 350 = dreihundertfünfzig.',
  ge: 'Ich möchte ein Kilo Tomaten, bitte.=Eu queria um quilo de tomates, por favor.|Was kostet das?=Quanto custa isso?|Das macht sieben Euro zwanzig.=Dá sete euros e vinte.',
  v: 'der Markt=a feira, o mercado ao ar livre=🧺|das Kilo=o quilo=⚖️|das Gramm=o grama=⚖️|die Packung=o pacote=📦|die Dose=a lata=🥫|das Stück=o pedaço, a unidade=🍰|kosten=custar=💶|der Preis=o preço=🏷️|die Tomate=o tomate=🍅|der Cent=o centavo (de euro)=🪙',
  x: 'die Banane=a banana|die Orange=a laranja|die Erdbeere=o morango|die Zwiebel=a cebola|der Liter=o litro|ein halbes Kilo=meio quilo|Das macht …=Dá … (no total)|Sonst noch etwas?=Mais alguma coisa?|frisch=fresco|die Kasse=o caixa',
  dlg: 'Guten Tag! Was möchten Sie?=Bom dia! O que a senhora deseja?|Ein Kilo Tomaten und eine Packung Käse, bitte.=Um quilo de tomates e um pacote de queijo, por favor.|Sonst noch etwas?=Mais alguma coisa?|Nein, danke. Was kostet das?=Não, obrigada. Quanto custa?',
  cz: 'Ich möchte ein Kilo ___. (tomates)=Tomaten=Tomate=von Tomaten|Was ___ die Äpfel?=kosten=kostet=koste|Das kostet drei ___ fünfzig.=Euro=Euros=Cent',
  whys: 'depois da quantidade vem o produto direto, sem "von", e no plural: ein Kilo Tomaten|die Äpfel é plural, então o verbo é kosten|Euro não vai para o plural no preço: drei Euro fünfzig',
  pts: 'Quantidade + produto, sem preposição: ein Kilo Äpfel, eine Flasche Wasser, 200 Gramm Käse. O que se conta vai no plural (Tomaten).|Preço: 2,50 € = zwei Euro fünfzig. Euro e Cent não vão para o plural: drei Euro.|Centenas: hundert, zweihundert … neunhundert. 350 = dreihundertfünfzig; 1000 = tausend.|Na feira: Ich möchte … · Was kostet …? · Sonst noch etwas? · Das macht … Euro.',
  ex: 'Eine Dose Tomaten, bitte.=Uma lata de tomates, por favor.|Die Erdbeeren sind sehr frisch.=Os morangos estão muito frescos.|Das macht vier Euro achtzig.=Dá quatro euros e oitenta.|Ein Stück Kuchen kostet zwei Euro.=Um pedaço de bolo custa dois euros.',
  bd: ['Ich=S|möchte=MOD^möchten: o jeito educado de pedir|ein_Kilo_Tomaten,=OA^quantidade + produto, sem "von"|bitte.=PK^bitte deixa o pedido educado', 'Eu queria um quilo de tomates, por favor.'],
  rule: 'quantidade',
  hw: 'Pegue uma nota fiscal do mercado e leia em voz alta, em alemão, cinco itens com quantidade e preço (ex.: ein Kilo Reis, vier Euro zwanzig).',
  deep: `
Na feira alemã (der Markt) tudo se pede por quantidade: um quilo, um pacote, uma lata. Hoje você aprende a pedir, a perguntar o preço e a entender a resposta, com os números até mil.
# Passo 1: quantidade + produto
| Quantidade | Exemplo |
| das Kilo | ein Kilo Tomaten |
| das Gramm | 200 Gramm Käse |
| die Packung | eine Packung Reis |
| die Dose | eine Dose Tomaten |
| das Stück | ein Stück Kuchen |
BR Em português dizemos "um quilo **de** tomates". Em alemão não há "de": ein Kilo Tomaten. E o que se conta vai no plural.
~ Ich möchte ein Kilo Tomaten, bitte. = Eu queria um quilo de tomates, por favor.
# Passo 2: os preços
- 2,50 € = **zwei Euro fünfzig**
- 0,80 € = **achtzig Cent**
- 12,99 € = **zwölf Euro neunundneunzig**
! **Euro** e **Cent** não vão para o plural no preço: drei Euro, e não "drei Euros".
~ Was kostet das? = Quanto custa isso?
~ Das kostet zwei Euro fünfzig. = Custa dois euros e cinquenta.
# Passo 3: os números até 1000
| Número | Alemão |
| 100 | hundert |
| 200 | zweihundert |
| 350 | dreihundertfünfzig |
| 999 | neunhundertneunundneunzig |
| 1000 | tausend |
A centena vem primeiro e o resto segue a regra que você já conhece: 24 = vierundzwanzig, então 124 = **hundertvierundzwanzig**.
~ Das macht hundertzwanzig Euro. = Dá cento e vinte euros.
# Passo 4: a conversa na feira
| Quem | Diz |
| vendedor | Was möchten Sie? / Sonst noch etwas? |
| você | Ich möchte … / Was kostet …? |
| vendedor | Das macht … Euro. |
~ Sonst noch etwas? = Mais alguma coisa?
~ Nein, danke. Das ist alles. = Não, obrigada. É só isso.
> Diga em voz alta três coisas da sua lista de compras com quantidade: ein Kilo …, eine Packung …
? Como se pede "um quilo de maçãs"? || ein Kilo Äpfel
? Como se lê 3,50 €? || drei Euro fünfzig
? Como se diz 500? || fünfhundert
`,
});

NL('n-gern', {
  de: 'Was isst du gern?', pt: 'Gostos e preferências na comida', gt: 'mögen · lieber · immer, oft, nie',
  gx: 'mögen = gostar de (uma coisa): Ich mag Käse. É irregular: ich mag, du magst, er mag. Com ação, gern; para preferir, lieber; o favorito, am liebsten. Frequência: immer, oft, manchmal, nie.',
  ge: 'Ich mag Pizza.=Eu gosto de pizza.|Ich trinke lieber Tee.=Eu prefiro beber chá.|Ich esse nie Fleisch.=Eu nunca como carne.',
  v: 'mögen (ich mag)=gostar de=❤️|lieber=de preferência (preferir)=⚖️|am liebsten=o que mais gosta=🏆|immer=sempre=🔁|manchmal=às vezes=🎲|nie=nunca=🚫|das Lieblingsessen=a comida preferida=🍝|die Pizza=a pizza=🍕|süß=doce=🍬|scharf=apimentado=🌶️',
  x: 'selten=raramente|meistens=na maioria das vezes|salzig=salgado|sauer=azedo|vegetarisch=vegetariano|das Lieblingsgetränk=a bebida preferida|die Schokolade=o chocolate|die Nudeln=o macarrão|der Vegetarier / die Vegetarierin=o vegetariano / a vegetariana|probieren=experimentar (provar)',
  dlg: 'Was isst du gern?=O que você gosta de comer?|Ich esse gern Pizza. Und du?=Eu gosto de comer pizza. E você?|Ich mag Pizza, aber am liebsten esse ich Sushi.=Eu gosto de pizza, mas o que eu mais gosto de comer é sushi.|Sushi? Das esse ich nie!=Sushi? Isso eu nunca como!',
  cz: 'Ich ___ Käse. (gosto de queijo)=mag=mage=mögen|Kaffee oder Tee? – Ich trinke ___ Tee.=lieber=gern=mag|Er ___ keine Schokolade.=mag=magt=mögt',
  whys: 'mögen é irregular: ich mag, sem terminação|lieber mostra a escolha entre duas opções: prefiro chá|com er/sie a forma de mögen é mag, igual a ich',
  pts: 'mögen (gostar de algo) é irregular: ich mag, du magst, er/sie mag, wir mögen, ihr mögt, sie/Sie mögen.|Com uma coisa, mögen (Ich mag Käse); com uma ação, gern depois do verbo (Ich esse gern Käse).|Para preferir: lieber (Ich trinke lieber Tee). O favorito: am liebsten (Am liebsten esse ich Pizza).|Frequência: immer, meistens, oft, manchmal, selten, nie. Elas vêm logo depois do verbo: Ich esse oft Reis.',
  ex: 'Magst du Schokolade?=Você gosta de chocolate?|Am liebsten trinke ich Kaffee.=O que eu mais gosto de beber é café.|Ich esse manchmal Fisch.=Às vezes eu como peixe.|Mein Lieblingsessen ist Feijoada.=Minha comida preferida é feijoada.',
  bd: ['Am_liebsten=ADV^am liebsten na 1ª posição: o que mais gosto|esse=V^o verbo continua na 2ª posição|ich=S^o sujeito vem depois do verbo|Pizza.=OA', 'O que eu mais gosto de comer é pizza.'],
  rule: 'gosto',
  hw: 'Escreva cinco frases sobre o que você come: uma com mag, uma com gern, uma com lieber, uma com am liebsten e uma com nie.',
  deep: `
Falar de comida é um dos jeitos mais fáceis de puxar conversa. Hoje você aprende a dizer do que gosta, o que prefere e com que frequência come cada coisa.
# Passo 1: mögen, gostar de algo
| Pessoa | mögen |
| ich | mag |
| du | magst |
| er / sie | mag |
| wir | mögen |
| ihr | mögt |
| sie / Sie | mögen |
! Como nos modais, **ich** e **er** são iguais e sem terminação: ich mag, er mag.
~ Ich mag Pizza. = Eu gosto de pizza.
# Passo 2: mögen ou gern?
- Com uma **coisa**: mögen. Ich **mag** Käse.
- Com uma **ação**: verbo + **gern**. Ich esse **gern** Käse.
BR Em português "gostar" serve para os dois. Em alemão, **Ich mag Käse** e **Ich esse gern Käse** estão certos; o segundo fala da ação de comer.
~ Was isst du gern? = O que você gosta de comer?
# Passo 3: lieber e am liebsten
| gern | lieber | am liebsten |
| gosto | prefiro | gosto mais que tudo |
~ Ich trinke gern Kaffee, aber lieber Tee. = Eu gosto de café, mas prefiro chá.
~ Am liebsten esse ich Pizza. = O que eu mais gosto de comer é pizza.
# Passo 4: com que frequência
| Alemão | Português |
| immer | sempre |
| oft | muitas vezes |
| manchmal | às vezes |
| selten | raramente |
| nie | nunca |
A palavra de frequência vem logo depois do verbo: Ich esse **oft** Reis.
~ Ich esse nie Fleisch. = Eu nunca como carne.
> Diga em voz alta a sua comida preferida: Am liebsten esse ich …
? Como se diz "eu gosto de queijo" com mögen? || Ich mag Käse.
? Como se diz "eu prefiro chá"? || Ich trinke lieber Tee.
? Qual é o contrário de immer? || nie
`,
});

NL('n-einkaufszettel', {
  de: 'Speisekarte und Einkaufszettel', pt: 'Ler um cardápio e escrever uma lista de compras', gt: 'Quantidades no Akkusativ',
  gx: 'Na lista e no pedido, o produto é objeto direto: Ich brauche einen Liter Milch, eine Packung Reis, ein Kilo Mehl. Só o masculino muda (einen). Cardápio: Vorspeisen, Hauptgerichte, Beilagen, Nachspeisen, Getränke.',
  ge: 'Ich brauche einen Liter Milch.=Eu preciso de um litro de leite.|Wir kaufen ein Kilo Kartoffeln.=Nós compramos um quilo de batatas.|Was ist das Tagesgericht?=Qual é o prato do dia?',
  v: 'der Einkaufszettel=a lista de compras=📝|die Vorspeise=a entrada=🥗|das Hauptgericht=o prato principal=🍽️|die Beilage=o acompanhamento=🍚|das Tagesgericht=o prato do dia=📋|brauchen=precisar de=🛒|das Mehl=a farinha=🌾|das Öl=o óleo, o azeite=🫒|der Joghurt=o iogurte=🥛|vergessen=esquecer=🤔',
  x: 'die Soße=o molho|das Hähnchen=o frango|das Schnitzel=o bife empanado|die Pommes=as batatas fritas|gemischt=misto (salada mista)|ohne=sem|die Nachspeise=a sobremesa|das Mineralwasser=a água mineral|die Apfelschorle=o suco de maçã com água com gás|die Liste=a lista',
  dlg: 'Was brauchen wir noch?=Do que ainda precisamos?|Wir brauchen einen Liter Milch und Eier.=Precisamos de um litro de leite e de ovos.|Und Nudeln? Ich koche heute Abend.=E macarrão? Eu cozinho hoje à noite.|Gut, ich schreibe einen Einkaufszettel.=Certo, eu faço uma lista de compras.',
  cz: 'Ich brauche ___ Liter Milch.=einen=ein=eine|Wir kaufen ___ Packung Reis.=eine=einen=ein|Als Hauptgericht nehme ich ___ Schnitzel.=ein=einen=eine',
  whys: 'der Liter é masculino: no acusativo ein vira einen|die Packung é feminino: eine não muda no acusativo|das Schnitzel é neutro: ein não muda no acusativo',
  pts: 'Na lista e no pedido, o produto é objeto direto (acusativo). Só o masculino muda: einen Liter, einen Apfel.|Feminino e neutro ficam iguais: eine Packung Reis, ein Kilo Mehl, ein Schnitzel.|Cardápio alemão: Vorspeisen (entradas), Hauptgerichte (pratos principais), Beilagen, Nachspeisen (sobremesas) e Getränke.|Lista de compras: só a quantidade e o produto, um por linha: 1 l Milch, 500 g Mehl, 6 Eier.',
  ex: 'Als Vorspeise nehme ich eine Suppe.=De entrada eu quero uma sopa.|Ich brauche einen Joghurt und ein Kilo Mehl.=Eu preciso de um iogurte e de um quilo de farinha.|Das Tagesgericht ist Hähnchen mit Reis.=O prato do dia é frango com arroz.|Wir haben kein Öl mehr.=Não temos mais óleo.',
  bd: ['Ich=S|brauche=V^brauchen pede acusativo|einen_Liter=OA^der Liter é masculino: ein vira einen|Milch.=OA^o produto vem logo depois, sem "de"', 'Eu preciso de um litro de leite.'],
  rule: 'quantidade',
  hw: 'Escreva a sua lista de compras desta semana em alemão (quantidade + produto) e depois diga cada item numa frase: Ich brauche einen …',
  le: {
    texto: {
      t: 'Speisekarte · Gasthaus Linde', kind: 'leitura',
      intro: 'O cardápio de um restaurante simples, com o prato do dia. Leia e responda.',
      paras: ['Tagesgericht: Hähnchen mit Reis und Salat · 9,50 €', 'Vorspeisen: Tomatensuppe · 4,20 € / Gemischter Salat · 3,80 €', 'Hauptgerichte: Schnitzel mit Pommes · 12,90 € / Nudeln mit Tomatensoße (vegetarisch) · 8,50 €', 'Nachspeisen: Apfelkuchen · 3,50 € / Schokoladeneis · 2,90 €', 'Getränke: Mineralwasser · 2,20 € / Apfelschorle · 2,60 € / Kaffee · 2,40 €'],
      qs: [
        { q: 'Quanto custa o prato do dia?', o: ['9,50 €', '12,90 €', '8,50 €'], a: 0 },
        { q: 'Qual prato principal é vegetariano?', o: ['o macarrão com molho de tomate', 'o schnitzel com batata frita', 'o frango com arroz'], a: 0 },
        { q: 'Qual é a sobremesa mais barata?', o: ['o sorvete de chocolate', 'a torta de maçã', 'o café'], a: 0 },
        { q: 'Quanto custa uma água mineral?', o: ['2,20 €', '2,60 €', '2,40 €'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva a sua lista de compras', tipo: 'form', ok: 'Lista escrita corretamente.',
      pede: 'Você vai fazer em casa o macarrão com molho de tomate do cardápio. Escreva a lista de compras, quantidade + produto em cada linha, e no fim uma frase com brauche.',
      campos: [
        { l: 'Nudeln', d: 'macarrão: 500 g Nudeln / eine Packung Nudeln', re: '^(\\d+\\s*(g|gramm|kg|kilo)|ein(e)?\\s+(packung|kilo))\\s+nudeln\\.?$', f: 'iu', err: 'Quantidade + produto: 500 g Nudeln ou eine Packung Nudeln.', bad: [['von nudeln|de nudeln', 'Sem "von": eine Packung <b>Nudeln</b>.']] },
        { l: 'Tomaten', d: 'tomates: ein Kilo Tomaten / eine Dose Tomaten', re: '^(\\d+\\s*(g|gramm|kg|kilo)?|ein(e)?\\s+(kilo|dose|packung))\\s+tomaten\\.?$', f: 'iu', err: 'Quantidade + Tomaten, no plural: ein Kilo Tomaten.', bad: [['tomate\\.?$', 'O que se conta vai no plural: <b>Tomaten</b>.'], ['von tomaten|de tomaten', 'Sem "von": ein Kilo <b>Tomaten</b>.']] },
        { l: 'Zwiebeln', d: 'cebolas: 2 Zwiebeln', re: '^(\\d+|zwei|drei|vier)\\s+zwiebeln\\.?$', f: 'iu', err: 'Número + Zwiebeln, no plural: 2 Zwiebeln.' },
        { l: 'Öl', d: 'óleo: eine Flasche Öl', re: '^(eine\\s+flasche|\\d+\\s*(l|ml|liter))\\s+(ö|oe)l\\.?$', f: 'iu', err: 'Quantidade + Öl: eine Flasche Öl (ou 1 l Öl).' },
        { l: 'Satz', d: 'uma frase: Ich brauche einen Liter … / Ich kaufe …', re: '^ich (brauche|kaufe|nehme)\\s+(einen|eine|ein|\\d+)\\s+\\p{L}', f: 'iu', err: 'Uma frase com o verbo e a quantidade: Ich brauche einen Liter Milch.', bad: [['\\bbrauche ein liter|\\bkaufe ein liter', 'der Liter é masculino: Ich brauche <b>einen</b> Liter …']] },
      ],
      modelo: '500 g Nudeln · eine Dose Tomaten · 2 Zwiebeln · eine Flasche Öl · Ich brauche einen Liter Milch.',
    },
  },
  deep: `
Esta lição é de **ler e escrever**. Você vai ler o cardápio de um restaurante e depois escrever uma lista de compras para fazer um prato em casa. O ponto de gramática é um velho conhecido: o **acusativo**, agora com quantidades.
# Passo 1: o cardápio alemão
| Parte | Significa |
| Vorspeisen | entradas |
| Hauptgerichte | pratos principais |
| Beilagen | acompanhamentos |
| Nachspeisen | sobremesas |
| Getränke | bebidas |
O **Tagesgericht** (prato do dia) costuma ser o mais barato e vem em destaque.
~ Das Tagesgericht ist Hähnchen mit Reis. = O prato do dia é frango com arroz.
# Passo 2: pedir com o acusativo
! Só o masculino muda: **einen** Salat, **einen** Kaffee. Feminino e neutro ficam iguais: eine Suppe, ein Schnitzel.
~ Als Vorspeise nehme ich eine Suppe. = De entrada eu quero uma sopa.
~ Als Hauptgericht nehme ich einen Salat. = De prato principal eu quero uma salada.
# Passo 3: a lista de compras
Na lista vão só a quantidade e o produto, um por linha, muitas vezes abreviados:
| Na lista | Lê-se |
| 500 g | fünfhundert Gramm |
| 1 kg | ein Kilo |
| 1 l | ein Liter |
| 1 Pck. | eine Packung |
BR Como em português, ninguém escreve frases na lista. Mas na hora de falar o acusativo aparece: Ich brauche **einen** Liter Milch.
~ Ich brauche einen Liter Milch. = Eu preciso de um litro de leite.
# Passo 4: como ler um cardápio
Procure primeiro as partes (Vorspeisen, Hauptgerichte…) e os preços. Palavras compostas se leem de trás para frente: **Tomatensuppe** = Tomaten + Suppe = sopa de tomate.
~ Was ist das Tagesgericht? = Qual é o prato do dia?
> No exercício, leia o cardápio do Gasthaus Linde e depois escreva a lista de compras do macarrão, uma linha por item.
? Como se diz "o prato do dia"? || das Tagesgericht
? Complete: Ich brauche ___ Liter Milch. || einen
? O que é uma Tomatensuppe? || uma sopa de tomate
`,
});

/* Módulo 5 (21/11/2026): anúncio de apartamento, zum/zur e a lição de Ler e escrever "Schilder und Zettel". */
NL('n-wohnungsanzeige', {
  de: 'Die Wohnungsanzeige', pt: 'Procurar apartamento', gt: 'Abreviações de anúncio · Zimmer, Miete, Nebenkosten',
  gx: 'Anúncios alemães usam abreviações: 2-Zi.-Whg. (apartamento de 2 cômodos), qm (metros quadrados), KM (aluguel sem despesas), NK (despesas), WM (aluguel com despesas), EG (térreo). Zimmer conta sala e quartos juntos.',
  ge: 'Ich suche eine Zwei-Zimmer-Wohnung.=Eu procuro um apartamento de dois cômodos.|Wie hoch ist die Miete?=Quanto é o aluguel?|Die Wohnung hat 60 Quadratmeter.=O apartamento tem 60 metros quadrados.',
  v: 'die Anzeige=o anúncio=📰|der Quadratmeter=o metro quadrado=📐|die Nebenkosten=as despesas (água, aquecimento…)=💧|die Kaltmiete=o aluguel sem despesas=🧊|die Warmmiete=o aluguel com despesas=🔥|die Kaution=o depósito caução=💰|frei ab=livre a partir de=📅|die Besichtigung=a visita ao imóvel=👀|der Vermieter / die Vermieterin=o locador / a locadora=🔑|das Erdgeschoss=o térreo=⬇️',
  x: 'der Mieter / die Mieterin=o inquilino / a inquilina|die Heizung=o aquecimento|der Aufzug=o elevador|die Einbauküche=a cozinha planejada|renoviert=reformado|der Stellplatz=a vaga de garagem|die WG=a república (apartamento dividido)|das Dachgeschoss=o último andar|mieten=alugar|die Provision=a comissão do corretor',
  dlg: 'Guten Tag! Ist die Wohnung in der Lindenstraße noch frei?=Bom dia! O apartamento na Lindenstraße ainda está livre?|Ja. Sie hat zwei Zimmer und 55 Quadratmeter.=Sim. Ele tem dois cômodos e 55 metros quadrados.|Wie hoch sind die Nebenkosten?=Quanto são as despesas?|150 Euro. Möchten Sie die Wohnung besichtigen?=150 euros. A senhora gostaria de visitar o apartamento?',
  cz: 'Die Wohnung ___ drei Zimmer.=hat=ist=gibt|Wie hoch ___ die Nebenkosten?=sind=ist=hat|Die Wohnung ist ___ Mai frei.=ab=um=am',
  whys: 'o apartamento "tem" cômodos: haben (hat)|die Nebenkosten é plural: sind|ab = a partir de: ab Mai',
  pts: 'Zimmer conta os cômodos de morar, sem cozinha e banheiro: uma 2-Zimmer-Wohnung tem sala e um quarto.|Kaltmiete (KM) é o aluguel sem despesas; com as Nebenkosten (NK: água, aquecimento, lixo) vira Warmmiete (WM).|Abreviações: Zi. (Zimmer), Whg. (Wohnung), qm ou m² (Quadratmeter), EG (térreo), OG (andar), Blk. (Balkon), EBK (Einbauküche).|Para perguntar: Ist die Wohnung noch frei? · Wie hoch ist die Miete? · Wann kann ich die Wohnung besichtigen?',
  ex: 'Die Kaltmiete ist 600 Euro.=O aluguel sem despesas é 600 euros.|Gibt es einen Balkon?=Tem varanda?|Die Wohnung liegt im Erdgeschoss.=O apartamento fica no térreo.|Ist die Wohnung noch frei?=O apartamento ainda está livre?',
  bd: ['Wie_hoch=W^wie hoch = quanto (para valores)|ist=V|die_Miete?=S^na pergunta, o sujeito vem depois do verbo', 'Quanto é o aluguel?'],
  rule: 'wohnung',
  hw: 'Procure um anúncio de apartamento num site alemão (de uma cidade que você gostaria de conhecer) e traduza as abreviações. Depois descreva o apartamento em três frases.',
  deep: `
Procurar apartamento na Alemanha é quase um esporte. Os anúncios são curtos e cheios de abreviações. Hoje você aprende a decifrar um anúncio e a ligar para perguntar.
# Passo 1: o que conta como Zimmer
**Zimmer** são os cômodos de morar: sala e quartos. Cozinha (Küche) e banheiro (Bad) não entram na conta.
| Anúncio | Significa |
| 1-Zimmer-Wohnung | sala e quarto num só cômodo |
| 2-Zimmer-Wohnung | sala + 1 quarto |
| 3-Zimmer-Wohnung | sala + 2 quartos |
~ Die Wohnung hat drei Zimmer. = O apartamento tem três cômodos.
# Passo 2: o preço
| Sigla | Significa |
| KM · Kaltmiete | aluguel sem despesas |
| NK · Nebenkosten | água, aquecimento, lixo |
| WM · Warmmiete | aluguel + despesas |
BR No Brasil o condomínio vem à parte. Na Alemanha, compare sempre a **Warmmiete**: é o que você paga de fato por mês. A **Kaution** (caução) costuma ser de até três aluguéis sem despesas.
~ Die Warmmiete ist 750 Euro. = O aluguel com despesas é 750 euros.
# Passo 3: as outras abreviações
| Sigla | Significa |
| qm / m² | Quadratmeter |
| EG | Erdgeschoss (térreo) |
| 2. OG | segundo andar |
| Blk. | Balkon |
| EBK | Einbauküche |
| ab sof. | ab sofort (livre já) |
~ Die Wohnung liegt im Erdgeschoss. = O apartamento fica no térreo.
# Passo 4: ligar e perguntar
~ Ist die Wohnung noch frei? = O apartamento ainda está livre?
~ Wie hoch sind die Nebenkosten? = Quanto são as despesas?
~ Wann kann ich die Wohnung besichtigen? = Quando posso visitar o apartamento?
> Leia um anúncio de verdade e diga em voz alta: quantos Zimmer, quantos m² e qual é a Warmmiete.
? O que significa NK? || Nebenkosten (as despesas)
? Uma 2-Zimmer-Wohnung tem quantos quartos? || um quarto, mais a sala
? Como se pergunta "O apartamento ainda está livre?" || Ist die Wohnung noch frei?
`,
});

NL('n-zurpost', {
  de: 'Zur Post, zum Bahnhof', pt: 'Lugares e serviços da cidade', gt: 'zu + Dativ (zum, zur)',
  gx: 'Para dizer aonde você vai (a um lugar ou a uma pessoa): zu + Dativ. zu + dem = zum (der e das), zu + der = zur (die): zum Bahnhof, zum Kino, zur Post. Cidades e países: nach (nach Berlin). Para casa: nach Hause.',
  ge: 'Ich gehe zur Post.=Eu vou ao correio.|Wie komme ich zum Bahnhof?=Como eu chego à estação?|Wir fahren zum Supermarkt.=Nós vamos ao supermercado.',
  v: 'zum (zu dem)=ao, à (der e das)=➡️|zur (zu der)=à, ao (die)=➡️|die Bäckerei=a padaria=🥐|die Bibliothek=a biblioteca=📚|die Polizei=a polícia=🚓|das Museum=o museu=🏛️|der Park=o parque=🌳|die Tankstelle=o posto de gasolina=⛽|das Schwimmbad=a piscina pública=🏊|nach Hause=para casa=🏠',
  x: 'das Kino=o cinema|das Stadion=o estádio|der Zoo=o zoológico|die Universität=a universidade|das Kaufhaus=a loja de departamentos|die Metzgerei=o açougue|das Theater=o teatro|die Reinigung=a lavanderia|der Kiosk=a banca (jornais e bebidas)|zu Hause=em casa',
  dlg: 'Wohin gehst du?=Aonde você vai?|Ich gehe zur Bäckerei. Und du?=Eu vou à padaria. E você?|Ich gehe zur Post und dann zum Bahnhof.=Eu vou ao correio e depois à estação.|Gut, bis später! Ich gehe nach Hause.=Certo, até mais tarde! Eu vou para casa.',
  cz: 'Ich gehe ___ Post.=zur=zum=zu die|Wie komme ich ___ Bahnhof?=zum=zur=nach|Wir fahren ___ Berlin.=nach=zu=zum',
  whys: 'die Post é feminino: zu + der = zur|der Bahnhof é masculino: zu + dem = zum|com cidades e países se usa nach: nach Berlin',
  pts: 'zu indica o destino (lugar ou pessoa) e pede Dativ: der e das → dem, die → der.|Quase sempre se junta com o artigo: zu dem = zum, zu der = zur. Zum Bahnhof, zum Kino, zur Post.|Cidades e países sem artigo usam nach: nach Berlin, nach Brasilien. Para casa: nach Hause; em casa: zu Hause.|Com pessoas também: Ich gehe zum Arzt, zur Ärztin, zu Anna.',
  ex: 'Ich fahre mit dem Bus zur Arbeit.=Eu vou de ônibus para o trabalho.|Am Samstag gehen wir zum Markt.=No sábado nós vamos à feira.|Ich gehe heute zum Arzt.=Hoje eu vou ao médico.|Wann kommst du nach Hause?=Quando você vem para casa?',
  bd: ['Ich=S|gehe=V|zur_Post.=L^zu + der = zur, porque Post é feminino', 'Eu vou ao correio.'],
  rule: 'destino',
  hw: 'Pense nos lugares aonde você vai esta semana e escreva cinco frases com zum, zur ou nach (ex.: Am Montag gehe ich zur Bank.).',
  deep: `
Padaria, correio, estação, médico: no dia a dia a gente vive dizendo aonde vai. Em alemão isso tem uma palavrinha própria, **zu**, que se junta com o artigo e vira **zum** ou **zur**.
# Passo 1: zu + artigo = zum, zur
| Gênero | zu + artigo | Exemplo |
| der | zum | zum Bahnhof |
| das | zum | zum Kino |
| die | zur | zur Post |
! Depois de **zu** vem o Dativ: der e das viram **dem**, die vira **der**. Por isso zu + dem = zum e zu + der = zur.
~ Ich gehe zur Post. = Eu vou ao correio.
# Passo 2: os lugares da cidade
| der | die | das |
| der Bahnhof | die Bäckerei | das Kino |
| der Park | die Bibliothek | das Museum |
| der Supermarkt | die Tankstelle | das Schwimmbad |
~ Wie komme ich zum Bahnhof? = Como eu chego à estação?
# Passo 3: zu ou nach?
- **zu**: lugares com artigo e pessoas: zum Park, zur Bank, zu Anna
- **nach**: cidades e países sem artigo: nach Berlin, nach Brasilien
- **nach Hause** = para casa · **zu Hause** = em casa
BR Em português tudo é "a" ou "para": vou ao correio, vou a Berlim, vou para casa. Em alemão são três jeitos diferentes.
~ Wir fahren nach Berlin. = Nós vamos para Berlim.
# Passo 4: pedir e dar o caminho
Com o imperativo da lição anterior, você já consegue pedir e dar o caminho até um lugar.
~ Wie komme ich zur Bibliothek? = Como eu chego à biblioteca?
~ Gehen Sie geradeaus und dann links. = Siga em frente e depois à esquerda.
> Diga em voz alta aonde você vai hoje: Ich gehe zum … / zur …
? Por que se diz zur Post? || Post é feminino: zu + der = zur
? Como se diz "para casa"? || nach Hause
? Complete: Wir fahren ___ Berlin. || nach
`,
});

NL('n-schilder', {
  de: 'Schilder und Zettel', pt: 'Ler placas e avisos e escrever um bilhete curto', gt: 'geöffnet, geschlossen, bitte nicht …',
  gx: 'Placas usam poucas palavras: geöffnet (aberto), geschlossen (fechado), Eingang / Ausgang, Bitte nicht rauchen (verbo no infinitivo). Bilhete curto: para quem, o quê, onde ou quando, e o seu nome.',
  ge: 'Die Apotheke ist heute geschlossen.=A farmácia está fechada hoje.|Bitte nicht rauchen!=Por favor, não fume!|Ihr Paket ist bei mir.=O seu pacote está comigo.',
  v: 'das Schild=a placa=🪧|der Zettel=o bilhete, o papelzinho=🗒️|geöffnet=aberto=🟢|geschlossen=fechado=🔴|der Eingang=a entrada=➡️|der Ausgang=a saída=⬅️|rauchen=fumar=🚭|das Paket=o pacote, a encomenda=📦|die Öffnungszeiten=o horário de funcionamento=🕘|Achtung!=Atenção!=⚠️',
  x: 'drücken=empurrar|ziehen=puxar|der Notausgang=a saída de emergência|besetzt=ocupado|außer Betrieb=fora de serviço|Betreten verboten=proibido entrar|die Toilette=o banheiro|der Ruhetag=o dia de descanso (fechado)|klingeln=tocar a campainha|der Briefkasten=a caixa de correio',
  dlg: 'Ist die Post schon geöffnet?=O correio já está aberto?|Nein, heute ist sie geschlossen.=Não, hoje ele está fechado.|Und morgen? Wann ist sie geöffnet?=E amanhã? Quando ele abre?|Ab neun Uhr. Das steht auf dem Schild.=A partir das nove. Está escrito na placa.',
  cz: 'Die Bank ist heute ___. (fechada)=geschlossen=geöffnet=geschließt|Bitte nicht ___!=rauchen=raucht=rauche|Das Paket ist ___ mir.=bei=zu=mit',
  whys: 'geschlossen = fechado; geöffnet é o contrário|depois de bitte nicht vem o verbo no infinitivo: rauchen|bei mir = comigo, na minha casa',
  pts: 'Placas usam o particípio como adjetivo: geöffnet (aberto), geschlossen (fechado), besetzt (ocupado).|Proibições: Bitte nicht + infinitivo (Bitte nicht rauchen). Mais forte: … verboten (Rauchen verboten).|Na porta: drücken (empurrar), ziehen (puxar); Eingang (entrada), Ausgang (saída).|Bilhete curto: para quem (Liebe …), o que aconteceu, onde ou quando, e o seu nome. Frases curtas, sem rodeios.',
  ex: 'Montag Ruhetag.=Fechado às segundas.|Der Aufzug ist außer Betrieb.=O elevador está fora de serviço.|Bitte klingeln!=Toque a campainha, por favor!|Ich bin um 18 Uhr wieder da.=Eu volto às 18h.',
  bd: ['Bitte=PK^bitte deixa o pedido educado|nicht=NEG^a negação vem antes do verbo|rauchen!=INF^na placa, o verbo fica no infinitivo', 'Por favor, não fume!'],
  rule: 'aviso',
  hw: 'Lembre três placas da sua rua ou do seu prédio e escreva como elas seriam em alemão. Depois escreva um bilhete curto para um vizinho.',
  le: {
    texto: {
      t: 'Schilder im Haus und in der Stadt', kind: 'leitura',
      intro: 'Quatro placas e um bilhete que a Ana encontrou nesta semana. Leia e responda.',
      paras: ['Bäckerei Sommer · Öffnungszeiten: Mo–Fr 6–18 Uhr, Sa 7–13 Uhr · Sonntag geschlossen', 'Achtung! Der Aufzug ist außer Betrieb. Bitte die Treppe benutzen.', 'Bitte nicht rauchen!', 'Eingang → · Bitte klingeln', 'Liebe Frau Souza, Ihr Paket ist bei mir, 3. Stock. Ich bin ab 18 Uhr zu Hause. Viele Grüße, Herr Weber'],
      qs: [
        { q: 'A padaria abre no domingo?', o: ['não, no domingo está fechada', 'sim, das 7h às 13h', 'sim, das 6h às 18h'], a: 0 },
        { q: 'O que a Ana deve fazer no prédio?', o: ['usar a escada', 'usar o elevador', 'tocar a campainha do vizinho'], a: 0 },
        { q: 'Onde está o pacote da Ana?', o: ['com o Sr. Weber, no 3º andar', 'no correio', 'na padaria'], a: 0 },
        { q: 'A partir de que horas o Sr. Weber está em casa?', o: ['18h', '13h', '6h'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva um bilhete para a vizinha', tipo: 'form', ok: 'Bilhete escrito corretamente.',
      pede: 'Um pacote da sua vizinha, Frau Klein, foi entregue para você. Escreva um bilhete curto para a porta dela, uma frase em cada linha.',
      campos: [
        { l: 'Anrede', d: 'Liebe Frau Klein,', re: '^(liebe|hallo)\\s+frau\\s+klein\\b', f: 'iu', err: 'Comece com Liebe Frau Klein,', bad: [['^lieber frau', 'Para mulher é <b>Liebe</b> Frau Klein.']] },
        { l: 'Was?', d: 'o pacote está com você: Ihr Paket ist bei mir.', re: '\\bpaket\\b.*\\bbei mir\\b', f: 'iu', err: 'Diga que o pacote está com você: Ihr Paket ist bei mir.' },
        { l: 'Wo?', d: 'onde você mora: Ich wohne im 2. Stock.', re: '\\b(stock|wohnung|erdgeschoss|etage|og|eg)\\b', f: 'iu', err: 'Diga onde você mora: Ich wohne im 2. Stock.' },
        { l: 'Wann?', d: 'quando está em casa: ab 18 Uhr / am Abend', re: '\\b(ab|um|am|bis|heute|morgen)\\b', f: 'iu', err: 'Diga quando está em casa: Ich bin ab 18 Uhr zu Hause.' },
        { l: 'Gruß', d: 'a despedida e o seu nome', re: '^viele gr(ü|ue)(ß|ss)e\\b', f: 'iu', err: 'Despeça-se com Viele Grüße e o seu nome.' },
      ],
      modelo: 'Liebe Frau Klein, · Ihr Paket ist bei mir. · Ich wohne im 2. Stock. · Ich bin ab 18 Uhr zu Hause. · Viele Grüße, Ana',
    },
  },
  deep: `
Esta lição é de **ler e escrever**. Placas e bilhetes estão por toda parte na Alemanha: na padaria, no elevador, na porta do vizinho. Você vai ler alguns e depois escrever um bilhete curto.
# Passo 1: aberto ou fechado
| Placa | Significa |
| geöffnet | aberto |
| geschlossen | fechado |
| Ruhetag | dia em que fecha |
| Öffnungszeiten | horário de funcionamento |
Os dias aparecem abreviados: **Mo**, **Di**, **Mi**, **Do**, **Fr**, **Sa**, **So**. "Mo–Fr 9–18 Uhr" = de segunda a sexta, das 9 às 18.
~ Die Apotheke ist heute geschlossen. = A farmácia está fechada hoje.
# Passo 2: portas e avisos
| Placa | Significa |
| drücken / ziehen | empurrar / puxar |
| Eingang / Ausgang | entrada / saída |
| außer Betrieb | fora de serviço |
| Achtung! | Atenção! |
~ Der Aufzug ist außer Betrieb. = O elevador está fora de serviço.
# Passo 3: proibições
- **Bitte nicht** + infinitivo: Bitte nicht rauchen.
- Mais forte, com **verboten**: Rauchen verboten. Betreten verboten.
! Nas placas o verbo fica no **infinitivo**, sem sujeito: Bitte klingeln.
~ Bitte nicht rauchen! = Por favor, não fume!
# Passo 4: um bilhete curto
Bilhete alemão é direto: para quem, o quê, onde ou quando, e quem assina.
~ Ihr Paket ist bei mir. = O seu pacote está comigo.
~ Ich bin ab 18 Uhr zu Hause. = Estou em casa a partir das 18h.
> No exercício, leia as placas e o bilhete e depois escreva o seu bilhete para a Frau Klein, uma frase por linha.
? O que significa geschlossen? || fechado
? Na porta está escrito ziehen. Você empurra ou puxa? || puxa
? Como se escreve "Por favor, não fume" numa placa? || Bitte nicht rauchen!
`,
});

/* Módulo 6 (21/11/2026): marcar consulta, contar o fim de semana e a lição de Ler e escrever "Eine Postkarte". */
NL('n-arzttermin', {
  de: 'Einen Termin machen', pt: 'Marcar consulta por telefone', gt: 'Modais (revisão) · horários',
  gx: 'Ao telefone: Hier ist … (quem fala), Ich möchte einen Termin machen (o que quer), Kann ich morgen kommen? (o horário). Modal na 2ª posição, verbo no fim. Para desligar: Auf Wiederhören!',
  ge: 'Ich möchte einen Termin machen.=Eu gostaria de marcar uma consulta.|Können Sie am Dienstag um neun kommen?=A senhora pode vir na terça às nove?|Haben Sie heute noch einen Termin frei?=Ainda tem um horário livre hoje?',
  v: 'die Arztpraxis=o consultório=🏥|der Hausarzt / die Hausärztin=o clínico geral=👩‍⚕️|der Zahnarzt / die Zahnärztin=o dentista=🦷|die Gesundheitskarte=o cartão do plano de saúde=🪪|das Wartezimmer=a sala de espera=🪑|sofort=imediatamente=⚡|Hier ist …=Aqui é … (ao telefone)=📞|Was fehlt Ihnen?=O que o senhor está sentindo?=🤒|die Halsschmerzen=a dor de garganta=😷|die Kopfschmerzen=a dor de cabeça=🤕',
  x: 'die Zahnschmerzen=a dor de dente|die Bauchschmerzen=a dor de barriga|das Fieber=a febre|krankgeschrieben=com atestado médico|die Krankmeldung=o atestado|die Überweisung=o encaminhamento (para especialista)|der Facharzt=o especialista|nüchtern=em jejum|die Sprechzeiten=o horário de atendimento|Auf Wiederhören!=Até logo! (ao telefone)',
  dlg: 'Praxis Dr. Lang, guten Morgen!=Consultório Dr. Lang, bom dia!|Guten Morgen, hier ist Ana Souza. Ich möchte einen Termin machen.=Bom dia, aqui é Ana Souza. Eu gostaria de marcar uma consulta.|Was fehlt Ihnen?=O que a senhora está sentindo?|Ich habe Halsschmerzen. Kann ich heute kommen?=Estou com dor de garganta. Posso ir hoje?',
  cz: 'Ich ___ einen Termin machen.=möchte=möchten=möchtet|Können Sie morgen um zehn ___?=kommen=kommt=kommst|Hier ___ Ana Souza.=ist=bin=heißt',
  whys: 'com ich a forma de möchten é möchte|depois do modal (können) o outro verbo vai para o fim, no infinitivo|ao telefone, para dizer quem fala: Hier ist + nome',
  pts: 'Quem liga diz o nome logo: Hier ist … O consultório atende com o próprio nome: Praxis Dr. Lang.|Para marcar: Ich möchte einen Termin machen. · Haben Sie heute noch einen Termin frei?|Modal na 2ª posição, outro verbo no fim: Ich muss morgen arbeiten.|Leve a Gesundheitskarte. Ao desligar: Auf Wiederhören!',
  ex: 'Ich kann leider erst am Freitag.=Infelizmente eu só posso na sexta.|Bringen Sie bitte Ihre Gesundheitskarte mit.=Traga o seu cartão do plano de saúde, por favor.|Sie müssen nüchtern kommen.=O senhor precisa vir em jejum.|Auf Wiederhören!=Até logo!',
  bd: ['Kann=MOD^na pergunta de sim ou não, o modal vem primeiro|ich=S|heute=T|kommen?=INF^o verbo principal vai para o fim, no infinitivo', 'Posso ir hoje?'],
  rule: 'modal',
  hw: 'Escreva o diálogo de uma ligação para marcar consulta: o que você diz, o que a recepção responde e o horário combinado. Depois leia em voz alta, como se fosse real.',
  deep: `
Na Alemanha quase toda consulta é marcada por telefone. A ligação é curta e segue sempre o mesmo roteiro. Hoje você aprende esse roteiro e revisa os modais que já conhece.
# Passo 1: o começo da ligação
| Quem | Diz |
| consultório | Praxis Dr. Lang, guten Morgen! |
| você | Guten Morgen, hier ist Ana Souza. |
| você | Ich möchte einen Termin machen. |
BR Em português a gente diz "Alô, quem fala?". Em alemão quem liga já diz o nome logo de cara: **Hier ist** + nome.
~ Guten Morgen, hier ist Ana Souza. = Bom dia, aqui é Ana Souza.
# Passo 2: dizer o que tem
- Ich habe **Kopfschmerzen**, **Halsschmerzen** ou **Fieber**.
- Es ist **dringend**: é urgente.
~ Was fehlt Ihnen? = O que a senhora está sentindo?
~ Ich habe Halsschmerzen. = Estou com dor de garganta.
# Passo 3: combinar o horário com os modais
| Modal | Exemplo |
| können | Können Sie morgen um zehn kommen? |
| müssen | Sie müssen nüchtern kommen. |
| möchten | Ich möchte am Nachmittag kommen. |
! O modal fica na **2ª posição** (ou em 1º, na pergunta) e o outro verbo vai para o **fim**: Ich **kann** morgen **kommen**.
~ Kann ich heute kommen? = Posso ir hoje?
# Passo 4: confirmar e desligar
~ Gut, dann am Dienstag um neun. = Certo, então terça às nove.
~ Bringen Sie bitte Ihre Gesundheitskarte mit. = Traga o seu cartão do plano de saúde, por favor.
! Ao telefone a despedida é **Auf Wiederhören!**, "até ouvir de novo".
> Ensaie em voz alta: diga quem fala, o que tem e peça um horário.
? Como você se apresenta ao telefone? || Hier ist + o seu nome
? Como se pede uma consulta? || Ich möchte einen Termin machen.
? Como se despede ao telefone? || Auf Wiederhören!
`,
});

NL('n-wochenende', {
  de: 'Mein Wochenende', pt: 'Contar o fim de semana em ordem', gt: 'zuerst, dann, danach · Perfekt',
  gx: 'Em ordem: zuerst, dann, danach, zum Schluss. Quando abrem a frase, o verbo vem logo depois: Dann habe ich gekocht. Perfekt: haben ou sein na 2ª posição, particípio no fim.',
  ge: 'Zuerst habe ich lange geschlafen.=Primeiro eu dormi bastante.|Dann bin ich in die Stadt gefahren.=Depois eu fui para o centro.|Am Abend haben wir Pizza gegessen.=À noite nós comemos pizza.',
  v: 'zuerst=primeiro=1️⃣|dann=depois, então=2️⃣|danach=depois disso=3️⃣|zum Schluss=no fim=🏁|ausschlafen=dormir até tarde=😴|putzen=limpar=🧽|das Konzert=o show=🎸|der Flohmarkt=a feira de usados=🛍️|erzählen=contar (uma história)=💬|entspannt=tranquilo, relaxado=😌',
  x: 'am Samstagabend=no sábado à noite|am Sonntagmorgen=no domingo de manhã|endlich=finalmente|zu Hause bleiben=ficar em casa|die Ausstellung=a exposição|Freunde besuchen=visitar amigos|Wie war dein Wochenende?=Como foi o seu fim de semana?|toll=ótimo|die Serie=a série|faulenzen=ficar à toa',
  dlg: 'Wie war dein Wochenende?=Como foi o seu fim de semana?|Super! Zuerst habe ich lange geschlafen.=Ótimo! Primeiro eu dormi bastante.|Und dann?=E depois?|Dann bin ich zum Flohmarkt gegangen. Danach habe ich gekocht.=Depois eu fui à feira de usados. Depois disso eu cozinhei.',
  cz: 'Zuerst ___ ich lange geschlafen.=habe=bin=hat|Dann ___ ich zum Markt gegangen.=bin=habe=ist|Danach habe ich Pizza ___.=gegessen=essen=geesst',
  whys: 'schlafen faz o Perfekt com haben: habe geschlafen; e depois de zuerst vem o verbo|gehen é movimento: Perfekt com sein (bin gegangen)|o particípio de essen é gegessen e vai para o fim',
  pts: 'Ordem: zuerst → dann → danach → zum Schluss.|Na 1ª posição, o verbo vem logo depois: Dann habe ich gekocht.|sein com movimento e com bleiben (bin gegangen, bin geblieben); haben no resto (habe gekocht).|Perguntas: Wie war dein Wochenende? · Was hast du am Samstag gemacht?',
  ex: 'Am Samstag habe ich die Wohnung geputzt.=No sábado eu limpei o apartamento.|Danach bin ich ins Kino gegangen.=Depois disso eu fui ao cinema.|Zum Schluss haben wir eine Serie gesehen.=No fim nós vimos uma série.|Das Wochenende war sehr entspannt.=O fim de semana foi muito tranquilo.',
  bd: ['Dann=ADV^dann na 1ª posição|habe=AUX^haben na 2ª posição|ich=S^o sujeito vem depois do verbo|Pizza=OA|gegessen.=PT^o particípio vai para o fim', 'Depois eu comi pizza.'],
  rule: 'perfekt',
  hw: 'Escreva no diário o seu último fim de semana em cinco frases, com zuerst, dann, danach e zum Schluss, todas no Perfekt.',
  deep: `
Segunda-feira, a pergunta é sempre a mesma: **Wie war dein Wochenende?** Hoje você aprende a contar o fim de semana em ordem, com as palavras que ligam uma ação à outra.
# Passo 1: as palavras de ordem
| Alemão | Português |
| zuerst | primeiro |
| dann | depois, então |
| danach | depois disso |
| zum Schluss | no fim |
~ Zuerst habe ich lange geschlafen. = Primeiro eu dormi bastante.
# Passo 2: o verbo vem logo depois
Quando **zuerst**, **dann** ou **danach** abrem a frase, o verbo conjugado vem em seguida e o sujeito depois dele.
- **Dann** habe ich gekocht.
- **Danach** bin ich ins Kino gegangen.
BR Em português dizemos "depois eu cozinhei". Em alemão o "eu" troca de lugar com o verbo: Dann **habe ich** gekocht.
~ Dann habe ich gekocht. = Depois eu cozinhei.
# Passo 3: haben ou sein?
| haben | sein |
| habe geschlafen | bin gegangen |
| habe gekocht | bin gefahren |
| habe gesehen | bin geblieben |
! **sein** vai com movimento e mudança de lugar (gehen, fahren, kommen) e com **bleiben**. O resto usa **haben**.
~ Danach bin ich zum Flohmarkt gegangen. = Depois disso eu fui à feira de usados.
# Passo 4: perguntar e responder
Responda com duas ou três frases em ordem e termine dizendo como foi: Es war super, ruhig ou langweilig.
~ Wie war dein Wochenende? = Como foi o seu fim de semana?
~ Was hast du am Samstag gemacht? = O que você fez no sábado?
> Conte em voz alta o seu último sábado, com zuerst, dann e danach.
? Complete: Dann ___ ich gekocht. || habe
? Gehen faz o Perfekt com haben ou sein? || sein (bin gegangen)
? Como se pergunta "Como foi o seu fim de semana?" || Wie war dein Wochenende?
`,
});

NL('n-postkarte', {
  de: 'Eine Postkarte', pt: 'Ler e escrever um cartão-postal de férias', gt: 'Perfekt · Grüße aus …',
  gx: 'Cartão-postal: Liebe … / Lieber …, onde está (Ich bin in …), como é (Das Wetter ist …), o que fez (Perfekt) e Viele Grüße aus … + nome.',
  ge: 'Viele Grüße aus Hamburg!=Lembranças de Hamburgo!|Das Wetter ist super.=O tempo está ótimo.|Gestern sind wir ans Meer gefahren.=Ontem nós fomos para a praia.',
  v: 'die Postkarte=o cartão-postal=📮|Grüße aus …=lembranças de …=👋|die Briefmarke=o selo=📬|der Hafen=o porto=⚓|die Altstadt=o centro histórico=🏰|die Aussicht=a vista=🏞️|wunderschön=lindíssimo=😍|das Schiff=o navio, o barco=🚢|die Ferien=as férias=🏖️|Liebe Grüße=beijos, um abraço (mais carinhoso)=💕',
  x: 'die Ferienwohnung=o apartamento de temporada|die Jugendherberge=o albergue da juventude|die Schifffahrt=o passeio de barco|das Fischbrötchen=o sanduíche de peixe|der Turm=a torre|regnerisch=chuvoso|die Rückreise=a volta (da viagem)|der Absender=o remetente|die Hansestadt=a cidade hanseática (Hamburgo, Bremen…)|Herzliche Grüße=cordiais saudações',
  dlg: 'Was schreibst du da?=O que você está escrevendo aí?|Eine Postkarte an meine Mutter.=Um cartão-postal para a minha mãe.|Und was schreibst du?=E o que você escreve?|Viele Grüße aus Hamburg! Wir haben den Hafen gesehen.=Lembranças de Hamburgo! Nós vimos o porto.',
  cz: 'Viele Grüße ___ Hamburg!=aus=von=nach|Gestern ___ wir den Hafen gesehen.=haben=sind=hat|Wir ___ ans Meer gefahren.=sind=haben=hat',
  whys: 'de onde vêm as lembranças: aus + cidade|sehen faz o Perfekt com haben: haben … gesehen|fahren é movimento: Perfekt com sein',
  pts: 'Abertura: Liebe (mulher) ou Lieber (homem) + nome.|Agora no presente (Ich bin in Hamburg); o que já fez no Perfekt (Wir haben den Hafen gesehen).|Fechamento: Viele Grüße aus … ou Liebe Grüße + nome.|Endereço à direita: nome, rua e número, CEP e cidade.',
  ex: 'Liebe Mama, ich bin in Hamburg.=Querida mãe, estou em Hamburgo.|Die Aussicht ist wunderschön.=A vista é lindíssima.|Wir sind mit dem Schiff gefahren.=Nós andamos de barco.|Liebe Grüße, deine Ana=Beijos, sua Ana',
  bd: ['Gestern=T^o tempo na 1ª posição|haben=AUX^haben na 2ª posição|wir=S|den_Hafen=OA^der Hafen no acusativo: den|gesehen.=PT^o particípio vai para o fim', 'Ontem nós vimos o porto.'],
  rule: 'perfekt',
  hw: 'Escreva um cartão-postal de uma viagem que você fez (ou quer fazer): onde está, como está o tempo, duas coisas que fez no Perfekt e a despedida.',
  le: {
    texto: {
      t: 'Eine Postkarte aus Hamburg', kind: 'leitura',
      intro: 'A Lena está de férias e escreve para a amiga Carla. Leia o cartão e responda.',
      paras: ['Liebe Carla,', 'viele Grüße aus Hamburg! Ich bin seit Montag hier, in einer Ferienwohnung am Hafen.', 'Das Wetter ist leider regnerisch, aber die Stadt ist wunderschön.', 'Gestern habe ich die Altstadt gesehen und ein Fischbrötchen gegessen.', 'Heute machen wir eine Schifffahrt. Am Samstag fahre ich zurück nach Köln.', 'Liebe Grüße, deine Lena'],
      qs: [
        { q: 'Onde a Lena está hospedada?', o: ['num apartamento de temporada perto do porto', 'num hotel no centro', 'na casa da Carla'], a: 0 },
        { q: 'Como está o tempo?', o: ['chuvoso', 'ensolarado', 'muito quente'], a: 0 },
        { q: 'O que ela fez ontem?', o: ['viu o centro histórico e comeu um sanduíche de peixe', 'fez um passeio de barco', 'voltou para Colônia'], a: 0 },
        { q: 'Quando ela volta para casa?', o: ['no sábado', 'na segunda', 'hoje'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva o seu cartão-postal', tipo: 'form', ok: 'Cartão escrito corretamente.',
      pede: 'Você está de férias numa cidade alemã (escolha uma). Escreva um cartão para a Lena, uma frase em cada linha.',
      campos: [
        { l: 'Anrede', d: 'Liebe Lena,', re: '^(liebe|hallo)\\s+lena\\b', f: 'iu', err: 'Comece com Liebe Lena, (Lena é mulher).', bad: [['^lieber lena', 'Lena é mulher: <b>Liebe</b> Lena.']] },
        { l: 'Wo?', d: 'onde você está: Ich bin in …', re: '\\b(bin|sind)\\b.+\\bin\\s+\\p{L}{3,}', f: 'iu', err: 'Diga onde está: Ich bin in München.' },
        { l: 'Wetter', d: 'como está o tempo: Das Wetter ist …', re: '\\bwetter\\b.*\\b(ist|war)\\b', f: 'iu', err: 'Diga como está o tempo: Das Wetter ist schön.' },
        { l: 'Gestern', d: 'o que você fez, no Perfekt: Gestern habe ich … gesehen.', re: '\\b(habe|haben|bin|sind)\\b.+(\\bge\\p{L}+(t|en)|besucht|besichtigt|probiert|fotografiert)[.!]?$', f: 'iu', err: 'Conte o que fez no Perfekt, com o particípio no fim: Gestern habe ich das Museum gesehen.', bad: [['^gestern ich', 'Depois de <b>gestern</b> vem o verbo: Gestern <b>habe</b> ich …']] },
        { l: 'Gruß', d: 'Viele Grüße aus … e o seu nome', re: '^(viele|liebe) gr(ü|ue)(ß|ss)e\\b', f: 'iu', err: 'Despeça-se: Viele Grüße aus … ou Liebe Grüße, e o seu nome.' },
      ],
      modelo: 'Liebe Lena, · ich bin in München. · Das Wetter ist super. · Gestern habe ich das Museum gesehen. · Viele Grüße aus München, Ana',
    },
  },
  deep: `
Esta lição é de **ler e escrever**. O cartão-postal ainda é tradição nas férias alemãs. Você vai ler o cartão de uma amiga em Hamburgo e depois escrever o seu, juntando o presente e o Perfekt.
# Passo 1: as partes do cartão
| Parte | Exemplo |
| Abertura | Liebe Carla, / Lieber Tim, |
| Onde estou | Ich bin in Hamburg. |
| Como é | Das Wetter ist schön. |
| O que fiz | Gestern habe ich den Hafen gesehen. |
| Despedida | Viele Grüße aus Hamburg, Lena |
~ Viele Grüße aus Hamburg! = Lembranças de Hamburgo!
# Passo 2: agora no presente, antes no Perfekt
- O que é agora: **presente**. Ich bin in Hamburg. Das Wetter ist super.
- O que já aconteceu: **Perfekt**. Gestern habe ich ein Fischbrötchen gegessen.
! Com **gestern**, **heute** ou **am Montag** na 1ª posição, o verbo vem logo depois: Gestern **habe** ich …
~ Gestern habe ich die Altstadt gesehen. = Ontem eu vi o centro histórico.
# Passo 3: abertura e despedida
| Para quem | Abertura |
| amiga | Liebe Carla, |
| amigo | Lieber Tim, |
| família | Liebe Mama, |
BR Depois da vírgula da abertura, a linha seguinte começa com **minúscula** em alemão: "Liebe Carla, viele Grüße aus …".
~ Liebe Grüße, deine Ana = Beijos, sua Ana
# Passo 4: o endereço
No cartão, o endereço vai à direita, um item por linha: nome, rua e número, CEP e cidade.
~ Frau Carla Mendes, Lindenstraße 12, 10969 Berlin = Sra. Carla Mendes, Lindenstraße 12, 10969 Berlim
> No exercício, leia o cartão da Lena e escreva o seu, uma frase por linha.
? Qual é a abertura para uma amiga? || Liebe + o nome
? Complete: Gestern ___ ich den Hafen gesehen. || habe
? Como se diz "Lembranças de Munique"? || Viele Grüße aus München
`,
});

V('Die Wohnungsanzeige',
  'M:Decifrando o anúncio;No anúncio|Significa;3-Zi.-Whg.|apartamento de 3 cômodos;65 qm|65 metros quadrados;KM 600 €|aluguel sem despesas;NK 150 €|as despesas;2. OG, Blk.|2º andar, com varanda;ab sof.|livre já',
  'E:O que você paga por mês;Kaltmiete^o|+|Nebenkosten^c|=|Warmmiete^v');
V('Zur Post, zum Bahnhof',
  'V:zum ou zur?;zum · der e das|zum Bahnhof|zum Park|zum Kino;zur · die|zur Post|zur Bank|zur Bäckerei',
  'V:zu ou nach?;zu · lugar ou pessoa|zum Arzt|zur Post;nach · cidade ou país|nach Berlin|nach Brasilien;casa|nach Hause (para casa)|zu Hause (em casa)');
V('Schilder und Zettel',
  'V:Aberto ou fechado?;geöffnet · aberto|Mo–Fr 9–18 Uhr;geschlossen · fechado|Sonntag Ruhetag',
  'P:Um bilhete curto;Para quem=Liebe Frau Klein,;O quê=Ihr Paket ist bei mir.;Onde=im 2. Stock;Quando=ab 18 Uhr;Quem=Viele Grüße, Ana');
V('Einen Termin machen',
  'P:A ligação para o consultório;Atendem=Praxis Dr. Lang, guten Morgen!;Você se apresenta=Hier ist Ana Souza.;Pede=Ich möchte einen Termin machen.;Combinam=Kann ich morgen um zehn kommen?;Despedida=Auf Wiederhören!',
  'E:O modal na 2ª posição, o verbo no fim;Ich^s|kann^v|morgen^c|kommen.^v2');
V('Mein Wochenende',
  'T:Meu sábado, em ordem;zuerst@-3=habe lange geschlafen;dann@-2=bin zum Markt gegangen;danach@-1=habe gekocht;jetzt@0=bin müde',
  'E:Depois de dann, o verbo vem logo;Dann^c|habe^v|ich^s|gekocht.^v2');
V('Eine Postkarte',
  'P:O cartão-postal;Abertura=Liebe Carla,;Onde estou=Ich bin in Hamburg.;Como é=Das Wetter ist schön.;O que fiz=Gestern habe ich den Hafen gesehen.;Despedida=Viele Grüße aus Hamburg!',
  'V:Agora ou antes?;Agora: presente|Ich bin in Hamburg.|Das Wetter ist schön.;Antes: Perfekt|Ich habe den Hafen gesehen.|Wir sind ans Meer gefahren.');
['lena', 'lindenstraße'].forEach((n) => NAMES.add(n));

S_('Die Wohnungsanzeige', 'suchen (ich suche)=procurar|besichtigen=visitar (um imóvel)|hoch (Wie hoch …?)=alto; quanto, para valores');
S_('Zur Post, zum Bahnhof', 'Wie komme ich …?=Como eu chego …?|die Arbeit (zur Arbeit)=o trabalho (para o trabalho)');
S_('Schilder und Zettel', 'wieder da=de volta|benutzen=usar (Bitte die Treppe benutzen.)');
S_('Einen Termin machen', 'erst=só (não antes de)|mitbringen (Bringen Sie … mit)=trazer junto');
S_('Mein Wochenende', 'putzen (geputzt)=limpar (limpei)|ins (in das)=ao, para o (ins Kino)|war (Wie war …?)=foi (passado de sein)');
S_('Eine Postkarte', 'die Mama=a mamãe|ans (an das)=para o (ans Meer = para a praia)|seit Montag=desde segunda');
/* Módulo 7 (21/11/2026): currículo e datas, formação e a lição de Ler e escrever "Eine E-Mail über mich". */
NL('n-lebenslauf', {
  de: 'Mein Lebenslauf', pt: 'Datas e etapas da vida', gt: 'Anos (im Jahr …) · Perfekt (revisão)',
  gx: 'Anos: 1995 = neunzehnhundertfünfundneunzig; 2015 = zweitausendfünfzehn. O ano vem sozinho ou com im Jahr, nunca com "in". Etapas no Perfekt: geboren, studiert, gezogen.',
  ge: 'Ich bin 1995 in Recife geboren.=Eu nasci em 1995, em Recife.|2015 habe ich in São Paulo studiert.=Em 2015 eu estudei em São Paulo.|Seit 2022 wohne ich in Deutschland.=Desde 2022 eu moro na Alemanha.',
  v: 'der Lebenslauf=o currículo=📄|geboren=nascido=👶|das Studium=a faculdade, o curso superior=🎓|umziehen=mudar de casa (ich ziehe um)=📦|heiraten=casar=💍|der Abschluss=a formatura, o diploma=📜|das Praktikum=o estágio=🧑‍💼|der Umzug=a mudança=🚚|neunzehnhundert=mil e novecentos (nos anos)=🗓️|zweitausend=dois mil=🗓️',
  x: 'die Geburt=o nascimento|die Scheidung=o divórcio|geschieden=divorciado|tabellarisch=em forma de tabela|die Lücke=a lacuna (no currículo)|die Elternzeit=a licença parental|der Ruhestand=a aposentadoria|aktuell=atual, atualmente|das Jahrzehnt=a década|die Sprachkenntnisse=os conhecimentos de idiomas',
  dlg: 'Wann bist du geboren?=Quando você nasceu?|Neunzehnhundertneunzig, in Fortaleza.=Em mil novecentos e noventa, em Fortaleza.|Und wann bist du nach Deutschland gekommen?=E quando você veio para a Alemanha?|Im Jahr 2019. Zuerst habe ich in Köln gewohnt.=Em 2019. Primeiro eu morei em Colônia.',
  cz: 'Ich bin 1995 ___.=geboren=gebären=geborgen|___ 2019 wohne ich in Berlin.=Seit=Im=Um|2010 ___ ich nach Köln gezogen.=bin=habe=war',
  whys: 'nascer em alemão: ich bin … geboren|seit + ano: algo que começou e continua|ziehen (mudar de cidade) faz o Perfekt com sein: bin … gezogen',
  pts: 'Até 1999: neunzehnhundert + o resto (1995 = neunzehnhundertfünfundneunzig). Desde 2000: zweitausend + o resto.|O ano vem sozinho (2015 habe ich …) ou com im Jahr. Nunca "in 2015".|Nascer: Ich bin 1990 geboren. Mudar de cidade: Ich bin nach Berlin gezogen.|seit + ano para o que continua: Seit 2022 wohne ich hier.',
  ex: 'Im Jahr 2010 habe ich geheiratet.=Em 2010 eu me casei.|2018 bin ich nach Berlin gezogen.=Em 2018 eu me mudei para Berlim.|Ich habe ein Praktikum gemacht.=Eu fiz um estágio.|Mein Abschluss war 2016.=Minha formatura foi em 2016.',
  bd: ['2018=T^o ano sozinho, sem "in"|bin=AUX^ziehen (mudar) faz o Perfekt com sein|ich=S|nach_Berlin=L|gezogen.=PT^particípio de ziehen', 'Em 2018 eu me mudei para Berlim.'],
  rule: 'perfekt',
  hw: 'Escreva o seu currículo em forma de tabela: cinco linhas com ano e etapa (ex.: 2012 – Abschluss). Depois diga cada linha numa frase no Perfekt.',
  deep: `
Para um emprego, um curso ou uma conversa de apresentação, você vai precisar contar a sua vida em etapas, com datas. Hoje: como dizer os anos em alemão e como montar um currículo simples.
# Passo 1: como se dizem os anos
| Ano | Em alemão |
| 1990 | neunzehnhundertneunzig |
| 2008 | zweitausendacht |
| 2015 | zweitausendfünfzehn |
BR Em português dizemos "mil novecentos e noventa". Em alemão, até 1999, é "dezenove cem noventa": **neunzehnhundert**neunzig. A partir de 2000 é como em português: **zweitausend**fünfzehn.
~ Ich bin 1995 geboren. = Eu nasci em 1995.
# Passo 2: o ano na frase
- Sozinho, no começo: **2015** habe ich geheiratet.
- Com **im Jahr**: **Im Jahr** 2015 habe ich geheiratet.
! Nunca "in 2015". E quando o ano abre a frase, o verbo vem logo depois.
~ Im Jahr 2010 habe ich geheiratet. = Em 2010 eu me casei.
# Passo 3: as etapas da vida no Perfekt
| Etapa | Perfekt |
| nascer | Ich bin … geboren. |
| estudar | Ich habe … studiert. |
| mudar de cidade | Ich bin nach … gezogen. |
| casar | Ich habe … geheiratet. |
~ 2018 bin ich nach Berlin gezogen. = Em 2018 eu me mudei para Berlim.
# Passo 4: o currículo alemão
O **Lebenslauf** costuma ser uma tabela: à esquerda o período, à direita a etapa, do mais recente para o mais antigo.
| Período | Etapa |
| seit 2022 | Verkäuferin, Berlin |
| 2016 – 2021 | Studium, São Paulo |
~ Seit 2022 arbeite ich in Berlin. = Desde 2022 eu trabalho em Berlim.
> Conte em voz alta três etapas da sua vida, com o ano: Ich bin … geboren. … habe ich … / bin ich …
? Como se diz 1998? || neunzehnhundertachtundneunzig
? Complete: ___ 2022 wohne ich hier. || Seit
? "Em 2015" se diz "in 2015"? || Não: 2015 ou im Jahr 2015
`,
});

NL('n-ausbildung', {
  de: 'Schule und Ausbildung', pt: 'Estudos e formação', gt: 'Perfekt dos separáveis e inseparáveis',
  gx: 'Separáveis: o ge- entra no meio (angefangen, aufgehört, eingekauft). Inseparáveis (be-, ver-, er-, ent-, emp-, zer-) e verbos em -ieren ficam sem ge- (bestanden, verstanden, studiert).',
  ge: 'Ich habe 2010 mit dem Studium angefangen.=Eu comecei a faculdade em 2010.|Er hat die Prüfung bestanden.=Ele passou na prova.|Ich habe Informatik studiert.=Eu estudei informática.',
  v: 'die Grundschule=a escola primária (1º ao 4º ano)=🏫|das Gymnasium=o ensino médio preparatório=📚|das Abitur=o diploma do ensino médio=📜|die Prüfung=a prova, o exame=📝|bestehen (bestanden)=passar (na prova)=✅|die Note=a nota=💯|aufhören (aufgehört)=parar, terminar=⏹️|das Fach=a matéria=📐|die Berufsschule=a escola técnica=🔧|durchfallen (durchgefallen)=ser reprovado=❌',
  x: 'die Ausbildung=a formação profissional (técnica)|der Azubi=o aprendiz (em formação)|die Hochschule=a faculdade|das Semester=o semestre|die Hausaufgabe=a lição de casa|das Zeugnis=o boletim, o certificado|die Fortbildung=o curso de aperfeiçoamento|der Studiengang=o curso (da faculdade)|die Informatik=a informática|die Mathe=a matemática',
  dlg: 'Was hast du nach der Schule gemacht?=O que você fez depois da escola?|Ich habe eine Ausbildung als Köchin angefangen.=Eu comecei uma formação de cozinheira.|Und hast du die Prüfung bestanden?=E você passou na prova?|Ja! Danach habe ich in einem Restaurant gearbeitet.=Sim! Depois disso eu trabalhei num restaurante.',
  cz: 'Ich habe mit dem Kurs ___.=angefangen=geanfangen=anfangengt|Sie hat die Prüfung ___.=bestanden=gebestanden=bestehen|Er hat Informatik ___.=studiert=gestudiert=studieren',
  whys: 'anfangen é separável: o ge- entra entre an e fangen|bestehen é inseparável (be-): sem ge-|verbos em -ieren não têm ge-: studiert',
  pts: 'Separáveis: ge- entre o prefixo e o verbo: angefangen, eingekauft, aufgehört.|Inseparáveis (be-, ver-, er-, ent-, emp-, zer-): sem ge-: bestanden, verstanden.|Verbos em -ieren também sem ge-: studiert, fotografiert.|Escola alemã: Grundschule, depois Gymnasium (até o Abitur) ou outra escola; depois Studium ou Ausbildung.',
  ex: 'Ich habe die Hausaufgaben vergessen.=Eu esqueci a lição de casa.|Er ist durchgefallen.=Ele foi reprovado.|Wann hast du mit dem Deutschkurs angefangen?=Quando você começou o curso de alemão?|Ich habe das Wort nicht verstanden.=Eu não entendi a palavra.',
  bd: ['Ich=S|habe=AUX|2010=T|mit_dem_Studium=PP^anfangen mit + dativo|angefangen.=PT^separável: o ge- entra no meio (an-ge-fangen)', 'Eu comecei a faculdade em 2010.'],
  rule: 'perfekt',
  hw: 'Escreva cinco frases sobre a sua formação no Perfekt, com pelo menos um verbo separável (angefangen, aufgehört) e um inseparável ou em -ieren (bestanden, studiert).',
  deep: `
Escola, faculdade, curso técnico: contar a própria formação exige o Perfekt de verbos como começar, terminar, passar e estudar. Muitos são separáveis ou inseparáveis, e o ge- muda de lugar ou some.
# Passo 1: separáveis: o ge- entra no meio
| Infinitivo | Perfekt |
| anfangen | hat angefangen |
| aufhören | hat aufgehört |
| einkaufen | hat eingekauft |
| umziehen | ist umgezogen |
~ Ich habe 2010 mit dem Studium angefangen. = Eu comecei a faculdade em 2010.
# Passo 2: inseparáveis e -ieren: sem ge-
| Infinitivo | Perfekt |
| bestehen | hat bestanden |
| verstehen | hat verstanden |
| vergessen | hat vergessen |
| studieren | hat studiert |
! Os prefixos **be-, ver-, er-, ent-, emp-, zer-** nunca se separam e nunca recebem ge-. Verbos em **-ieren** também não.
~ Er hat die Prüfung bestanden. = Ele passou na prova.
# Passo 3: a escola na Alemanha
| Etapa | Idade |
| Grundschule | 6 a 10 anos |
| Gymnasium (até o Abitur) | 10 a 18 anos |
| Studium ou Ausbildung | depois |
BR A **Ausbildung** não tem equivalente direto no Brasil: é uma formação técnica de 2 a 3 anos, metade na escola técnica e metade numa empresa, com salário.
~ Ich habe eine Ausbildung als Köchin gemacht. = Eu fiz uma formação de cozinheira.
# Passo 4: falar das provas
- **bestehen** (passar) é inseparável: hat bestanden
- **durchfallen** (ser reprovado) é separável e usa sein: ist durchgefallen
~ Hast du die Prüfung bestanden? = Você passou na prova?
~ Er ist durchgefallen. = Ele foi reprovado.
> Conte em voz alta como foi a sua formação: Ich habe … angefangen / studiert / bestanden.
? Qual é o Perfekt de anfangen? || hat angefangen
? Por que bestanden não tem ge-? || porque be- é inseparável
? Qual é o Perfekt de studieren? || hat studiert
`,
});

NL('n-email', {
  de: 'Eine E-Mail über mich', pt: 'Ler um e-mail pessoal e responder contando sobre si', gt: 'weil · Perfekt',
  gx: 'E-mail pessoal: Liebe … / Lieber …, Danke für deine E-Mail!, as novidades (Perfekt para o que mudou, presente para o agora), um motivo com weil (verbo no fim) e Viele Grüße. Antes de weil vai vírgula.',
  ge: 'Danke für deine E-Mail!=Obrigada pelo seu e-mail!|Ich lerne Deutsch, weil ich in Berlin arbeiten möchte.=Eu aprendo alemão porque quero trabalhar em Berlim.|Letztes Jahr bin ich umgezogen.=No ano passado eu me mudei.',
  v: 'der Brieffreund / die Brieffreundin=o amigo / a amiga por correspondência=✉️|die Neuigkeit=a novidade=🆕|Mir geht es gut.=Eu estou bem.=🙂|berichten=relatar=🗞️|der Alltag=o dia a dia=📅|momentan=no momento=⏱️|vermissen=sentir falta de=💭|hoffentlich=tomara, espero que=🤞|Schreib bald!=Escreva logo!=✍️|die Stelle=o emprego, a vaga=💼',
  x: 'die Mail=o e-mail (informal)|Mach’s gut!=Se cuida!|Was gibt’s Neues?=Quais são as novidades?|stressig=estressante|die Heimat=a terra natal|das Heimweh=a saudade de casa|der Mitbewohner / die Mitbewohnerin=o colega / a colega de apartamento|der Sprachkurs=o curso de idiomas|unternehmen=fazer programas, sair|die Zeitverschiebung=o fuso horário',
  dlg: 'Hast du Jonas schon geantwortet?=Você já respondeu ao Jonas?|Noch nicht. Er hat mir eine lange E-Mail geschrieben.=Ainda não. Ele me escreveu um e-mail longo.|Was erzählt er?=O que ele conta?|Er ist umgezogen, weil er eine neue Stelle hat.=Ele se mudou porque tem um emprego novo.',
  cz: 'Ich lerne Deutsch, weil ich in Berlin ___.=wohne=wohnen=wohnst|Ich bin müde, ___ ich habe viel gearbeitet.=denn=weil=dass|Danke ___ deine E-Mail!=für=von=mit',
  whys: 'depois de weil o verbo conjugado vai para o fim: weil ich in Berlin wohne|denn não muda a ordem (denn ich habe…); com weil o verbo iria para o fim|agradecer por algo: danke für + acusativo',
  pts: 'Abertura: Liebe / Lieber + nome. Depois agradeça: Danke für deine E-Mail!|weil manda o verbo conjugado para o fim: …, weil ich viel arbeite. Com Perfekt: …, weil ich umgezogen bin.|O que mudou no Perfekt; como está agora no presente.|Termine com uma pergunta e Viele Grüße. Schreib bald!',
  ex: 'Wie geht es dir? Mir geht es gut.=Como você está? Eu estou bem.|Momentan habe ich viel Stress, weil ich umziehe.=No momento estou muito estressada porque estou me mudando.|Ich vermisse dich!=Sinto sua falta!|Schreib bald!=Escreva logo!',
  bd: ['Ich_lerne_Deutsch,=C^a oração principal|weil=C^weil abre a oração do motivo|ich=S|in_Berlin=L|arbeiten=INF|möchte.=MOD^com weil, o verbo conjugado vai para o fim', 'Eu aprendo alemão porque quero trabalhar em Berlim.'],
  rule: 'weil',
  hw: 'Escreva no diário um e-mail curto para um amigo que mora longe: o que mudou na sua vida (Perfekt), como está agora e um motivo com weil.',
  le: {
    texto: {
      t: 'E-Mail von Jonas', kind: 'leitura',
      intro: 'O Jonas, um amigo alemão, escreve depois de muito tempo. Leia e responda.',
      paras: ['Liebe Ana,', 'wie geht es dir? Lange nichts gehört! Bei mir gibt es viele Neuigkeiten.', 'Im März bin ich nach München gezogen, weil ich dort eine neue Stelle habe. Ich arbeite jetzt in einem Hotel.', 'Die Arbeit ist interessant, aber ich vermisse meine Freunde in Hamburg.', 'Am Wochenende gehe ich oft in die Berge. Das ist toll!', 'Und du? Wie ist dein Deutschkurs? Schreib bald! Viele Grüße, Jonas'],
      qs: [
        { q: 'Por que o Jonas se mudou para Munique?', o: ['porque tem um emprego novo lá', 'porque a família dele mora lá', 'porque quer estudar'], a: 0 },
        { q: 'Onde ele trabalha agora?', o: ['num hotel', 'num restaurante', 'numa escola'], a: 0 },
        { q: 'Do que ele sente falta?', o: ['dos amigos em Hamburgo', 'do mar', 'do trabalho antigo'], a: 0 },
        { q: 'O que ele faz nos fins de semana?', o: ['vai muitas vezes para as montanhas', 'trabalha no hotel', 'visita Hamburgo'], a: 0 },
      ],
    },
    escrita: {
      t: 'Responda ao Jonas', tipo: 'form', ok: 'E-mail escrito corretamente.',
      pede: 'Responda ao e-mail do Jonas contando sobre você. Uma frase em cada linha; use o Perfekt e weil.',
      campos: [
        { l: 'Anrede', d: 'Lieber Jonas,', re: '^(lieber|hallo)\\s+jonas\\b', f: 'iu', err: 'Comece com Lieber Jonas, (Jonas é homem).', bad: [['^liebe jonas', 'Jonas é homem: <b>Lieber</b> Jonas.']] },
        { l: 'Dank', d: 'agradeça: Danke für deine E-Mail!', re: '\\bdanke\\b.*\\bf(ü|ue)r\\b', f: 'iu', err: 'Agradeça: Danke für deine E-Mail!' },
        { l: 'Neuigkeit', d: 'uma novidade no Perfekt: Ich habe … / Ich bin …', re: '\\b(habe|hat|haben|bin|ist|sind)\\b.+(ge\\p{L}+(t|en)|iert|(be|ver|er|ent)\\p{L}+(t|en))[.!]?$', f: 'iu', err: 'Conte uma novidade no Perfekt, com o particípio no fim: Ich habe eine neue Stelle gefunden.' },
        { l: 'Weil', d: 'um motivo: …, weil …', re: ',\\s*weil\\s+\\p{L}+.*\\s\\p{L}+[.!]?$', f: 'iu', err: 'Dê um motivo com weil, depois de uma vírgula: Ich lerne viel, weil ich in Berlin arbeite.', bad: [['weil (ich|er|sie|wir) (bin|habe|ist|hat|arbeite|wohne|lerne|möchte|muss|kann)\\b', 'Depois de <b>weil</b> o verbo vai <b>para o fim</b>: …, weil ich in Berlin <b>wohne</b>.'], ['[^,]\\s+weil\\b', 'Antes de <b>weil</b> vai vírgula.']] },
        { l: 'Gruß', d: 'Schreib bald! / Viele Grüße, + seu nome', re: '(gr(ü|ue)(ß|ss)e|schreib bald)', f: 'iu', err: 'Termine com Schreib bald! ou Viele Grüße e o seu nome.' },
      ],
      modelo: 'Lieber Jonas, · danke für deine E-Mail! · Ich habe einen neuen Job gefunden. · Ich lerne viel Deutsch, weil ich in Berlin arbeite. · Schreib bald! Viele Grüße, Ana',
    },
  },
  deep: `
Esta lição é de **ler e escrever**. Um amigo alemão escreveu depois de muito tempo, contando as novidades. Você vai ler o e-mail dele e responder, contando as suas, com o Perfekt e com **weil**.
# Passo 1: começo e fim de um e-mail pessoal
| Parte | Exemplo |
| Abertura | Lieber Jonas, / Liebe Ana, |
| Primeira frase | Danke für deine E-Mail! |
| Despedida | Schreib bald! Viele Grüße, Ana |
~ Danke für deine E-Mail! = Obrigada pelo seu e-mail!
# Passo 2: contar novidades
- O que mudou: **Perfekt**. Ich bin umgezogen. Ich habe eine neue Stelle gefunden.
- Como está agora: **presente**. Ich wohne jetzt in München.
~ Letztes Jahr bin ich umgezogen. = No ano passado eu me mudei.
# Passo 3: o motivo com weil
**weil** manda o verbo conjugado para o **fim** da oração. Antes dele vai vírgula.
- …, weil ich eine neue Stelle **habe**.
- …, weil ich in Berlin arbeiten **möchte**.
- …, weil ich umgezogen **bin**.
BR Em português o "porque" não mexe em nada. Em alemão, depois de **weil**, guarde o verbo para o final.
~ Ich lerne viel, weil ich hier arbeite. = Eu estudo muito porque trabalho aqui.
# Passo 4: como ler um e-mail pessoal
Procure primeiro as novidades (os verbos no Perfekt) e os motivos (depois de **weil**): eles dizem o que aconteceu e por quê.
~ Er ist umgezogen, weil er Arbeit hat. = Ele se mudou porque tem trabalho.
> No exercício, leia o e-mail do Jonas e escreva a sua resposta, uma frase por linha.
? Qual é a abertura para um amigo? || Lieber + o nome
? Depois de weil, onde fica o verbo conjugado? || no fim
? Complete: Danke ___ deine E-Mail! || für
`,
});

/* Módulo 8 (21/11/2026): regras do prédio e a lição de Ler e escrever "Ein Zettel an die Nachbarn". */
NL('n-hausordnung', {
  de: 'Die Hausordnung', pt: 'Regras do prédio', gt: 'man + modais (man darf nicht, man muss)',
  gx: 'Regras: man + modal. Man muss den Müll trennen. Man darf hier nicht rauchen. man conjuga como er/sie. Atenção: man muss nicht = não precisa.',
  ge: 'Man muss den Müll trennen.=É preciso separar o lixo.|Hier darf man nicht rauchen.=Aqui não se pode fumar.|Ab 22 Uhr muss man leise sein.=A partir das 22h é preciso fazer silêncio.',
  v: 'die Hausordnung=o regulamento do prédio=📋|der Müll=o lixo=🗑️|trennen=separar=♻️|die Ruhezeit=o horário de silêncio=🤫|leise=baixo, silencioso=🔉|der Hausmeister / die Hausmeisterin=o zelador / a zeladora=🧰|das Treppenhaus=a escada do prédio=🪜|erlaubt=permitido=✅|verboten=proibido=⛔|die Mülltonne=a lixeira (contêiner)=🗑️',
  x: 'der Biomüll=o lixo orgânico|das Altpapier=o papel para reciclar|der Gelbe Sack=o saco amarelo (embalagens)|das Altglas=o vidro para reciclar|die Nachtruhe=o silêncio noturno|die Mittagsruhe=o silêncio do meio-dia|der Kinderwagen=o carrinho de bebê|abstellen=deixar (um objeto)|lüften=arejar, abrir as janelas|die Waschküche=a lavanderia do prédio',
  dlg: 'Darf man im Hof grillen?=Pode fazer churrasco no pátio?|Nein, das ist verboten. Das steht in der Hausordnung.=Não, é proibido. Está no regulamento.|Schade! Und wo muss man den Müll trennen?=Que pena! E onde é preciso separar o lixo?|Unten im Hof. Da stehen die Mülltonnen.=Lá embaixo, no pátio. Lá ficam as lixeiras.',
  cz: 'Hier ___ man nicht rauchen.=darf=dürfen=darfst|Man ___ den Müll trennen.=muss=müssen=musst|Nach 22 Uhr muss man leise ___.=sein=ist=sind',
  whys: 'man se conjuga como er: man darf|com man o verbo fica como er/sie: man muss|depois do modal, o verbo vai para o fim no infinitivo: sein',
  pts: 'man = "a gente", "se". Conjuga como er/sie: man muss, man darf, man kann.|man muss (obrigatório), man darf (permitido), man darf nicht (proibido). man muss nicht = não precisa.|Modal na 2ª posição, outro verbo no fim: Man darf hier nicht parken.|Na Hausordnung: Ruhezeiten, separação do lixo e uso das áreas comuns.',
  ex: 'Im Treppenhaus darf man keine Fahrräder abstellen.=Na escada do prédio não se pode deixar bicicletas.|Papier kommt in die blaue Tonne.=O papel vai na lixeira azul.|Am Sonntag darf man keine laute Musik machen.=No domingo não se pode pôr música alta.|Der Hausmeister hilft bei Problemen.=O zelador ajuda quando há problemas.',
  bd: ['Hier=L|darf=MOD^man se conjuga como er: darf|man=S^man = "se", a gente|nicht=NEG|rauchen.=INF^o verbo vai para o fim, no infinitivo', 'Aqui não se pode fumar.'],
  rule: 'man_modal',
  hw: 'Escreva cinco regras da sua casa ou do seu prédio com man muss, man darf e man darf nicht.',
  deep: `
Todo prédio alemão tem a sua **Hausordnung**, o regulamento com horários de silêncio, separação do lixo e regras das áreas comuns. Para entender e falar dessas regras, o alemão usa **man** com os modais.
# Passo 1: man, o sujeito de todo mundo
**man** = "a gente", "se", "as pessoas". Conjuga como **er/sie**.
| Modal | Com man |
| müssen | man muss |
| dürfen | man darf |
| können | man kann |
~ Man muss den Müll trennen. = É preciso separar o lixo.
# Passo 2: obrigatório, permitido, proibido
| Regra | Exemplo |
| obrigatório | Man muss leise sein. |
| permitido | Man darf im Hof sitzen. |
| proibido | Man darf hier nicht rauchen. |
! **muss nicht** não é proibição: quer dizer "não precisa". Man **muss nicht** … = não é obrigatório.
~ Hier darf man nicht rauchen. = Aqui não se pode fumar.
# Passo 3: as Ruhezeiten
Na maioria dos prédios: **Nachtruhe** das 22h às 6h, às vezes **Mittagsruhe** das 13h às 15h, e o domingo é de silêncio.
BR No Brasil o barulho depois das 22h também incomoda, mas na Alemanha a regra é levada muito a sério: furadeira no domingo pode render reclamação.
~ Ab 22 Uhr muss man leise sein. = A partir das 22h é preciso fazer silêncio.
# Passo 4: a separação do lixo
| Lixeira | O que vai nela |
| Biomüll | restos de comida |
| Altpapier | papel e papelão |
| Gelber Sack | embalagens de plástico e metal |
| Restmüll | o resto |
~ Papier kommt in die blaue Tonne. = O papel vai na lixeira azul.
> Diga em voz alta três regras do seu prédio: Man muss … / Man darf nicht …
? Como se diz "Aqui não se pode fumar"? || Hier darf man nicht rauchen.
? man se conjuga como qual pessoa? || como er/sie
? O que significa "Man muss nicht …"? || não é obrigatório, não precisa
`,
});

NL('n-zettel-nachbarn', {
  de: 'Ein Zettel an die Nachbarn', pt: 'Ler avisos do prédio e escrever um bilhete aos vizinhos', gt: 'Könnten Sie …? (fórmula)',
  gx: 'Pedido educado: Könnten Sie bitte …? com o infinitivo no fim (Könnten Sie bitte leiser sein?). Bilhete aos vizinhos: Liebe Nachbarn, o que acontece e quando, desculpas ou pedido, agradecimento e o seu nome com o andar.',
  ge: 'Könnten Sie bitte die Musik leiser machen?=Os senhores poderiam abaixar a música, por favor?|Am Samstag feiere ich meinen Geburtstag.=No sábado eu comemoro o meu aniversário.|Vielen Dank für Ihr Verständnis!=Muito obrigado pela compreensão!',
  v: 'Liebe Nachbarn=Queridos vizinhos=🏘️|Könnten Sie bitte …?=Os senhores poderiam, por favor…?=🙏|das Verständnis=a compreensão=🤝|stören=incomodar=😣|Entschuldigung für …=Desculpem por …=😅|der Lärm=o barulho=🔊|leiser=mais baixo=🔉|der Hausflur=o corredor do prédio=🚪|die Renovierung=a reforma=🛠️|vorher=antes=⏮️',
  x: 'bohren=furar (com furadeira)|der Umzugskarton=a caixa de mudança|rücksichtsvoll=atencioso|die Rücksicht=a consideração|sich beschweren=reclamar|die Beschwerde=a reclamação|die Klingel=a campainha|gießen=regar|leeren=esvaziar|die Nachbarschaft=a vizinhança',
  dlg: 'Hast du den Zettel im Treppenhaus gelesen?=Você leu o bilhete na escada do prédio?|Ja, die Nachbarn im 3. Stock renovieren ihre Wohnung.=Sim, os vizinhos do 3º andar estão reformando o apartamento.|Und was schreiben sie?=E o que eles escrevem?|Sie bohren bis Freitag und entschuldigen sich für den Lärm.=Eles vão furar até sexta e pedem desculpas pelo barulho.',
  cz: '___ Sie bitte leiser sein?=Könnten=Könnt=Konnte|Vielen Dank ___ Ihr Verständnis!=für=von=mit|Entschuldigung ___ den Lärm!=für=von=über',
  whys: 'Könnten Sie …? é a fórmula mais educada para pedir algo|agradecer por algo: Dank für + acusativo|desculpar-se por algo: Entschuldigung für + acusativo',
  pts: 'Pedido educado: Könnten Sie bitte … + infinitivo no fim?|Bilhete: Liebe Nachbarn, o que acontece e quando, desculpas ou pedido, agradecimento.|Fórmulas: Entschuldigung für den Lärm! · Vielen Dank für Ihr Verständnis!|Assine com nome e andar: Ana Souza, 2. Stock.',
  ex: 'Liebe Nachbarn, am Samstag feiern wir eine Party.=Queridos vizinhos, no sábado vamos fazer uma festa.|Entschuldigung für den Lärm!=Desculpem o barulho!|Könnten Sie bitte Ihr Fahrrad in den Keller stellen?=O senhor poderia, por favor, pôr a sua bicicleta no porão?|Vielen Dank für Ihr Verständnis!=Muito obrigado pela compreensão!',
  bd: ['Könnten=MOD^Könnten Sie …? é a fórmula do pedido educado|Sie=S|bitte=PK|leiser=M^mais baixo|sein?=INF^o infinitivo vai para o fim', 'Os senhores poderiam fazer menos barulho, por favor?'],
  rule: 'konj2',
  hw: 'Escreva um bilhete para os seus vizinhos avisando de uma festa ou de uma reforma: o que, quando, um pedido com Könnten Sie bitte …? e o agradecimento.',
  le: {
    texto: {
      t: 'Zettel im Treppenhaus', kind: 'leitura',
      intro: 'Dois avisos na escada do prédio: um do regulamento e um dos vizinhos. Leia e responda.',
      paras: ['Hausordnung · Wichtig!', 'Ruhezeiten: Mo–Sa 22–6 Uhr und 13–15 Uhr, Sonntag ganztags.', 'Fahrräder bitte nicht im Treppenhaus abstellen, sondern im Fahrradkeller.', 'Liebe Nachbarn, wir renovieren ab Montag unsere Wohnung (3. Stock links). Bis Freitag bohren wir leider manchmal.', 'Entschuldigung für den Lärm! Bei Fragen: einfach klingeln. Vielen Dank für Ihr Verständnis! Familie Berger'],
      qs: [
        { q: 'Quando é o horário de silêncio no domingo?', o: ['o dia inteiro', 'das 22h às 6h', 'das 13h às 15h'], a: 0 },
        { q: 'Onde se deve deixar a bicicleta?', o: ['no bicicletário do porão', 'na escada do prédio', 'no pátio'], a: 0 },
        { q: 'Por que a família Berger escreveu?', o: ['porque vai reformar o apartamento', 'porque vai fazer uma festa', 'porque perdeu a chave'], a: 0 },
        { q: 'Até quando vai o barulho?', o: ['até sexta-feira', 'até segunda-feira', 'até domingo'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva um bilhete aos vizinhos', tipo: 'form', ok: 'Bilhete escrito corretamente.',
      pede: 'Você vai comemorar o seu aniversário no sábado à noite. Escreva um bilhete para o mural do prédio, uma frase em cada linha.',
      campos: [
        { l: 'Anrede', d: 'Liebe Nachbarn,', re: '^liebe\\s+nachbarn\\b', f: 'iu', err: 'Comece com Liebe Nachbarn,', bad: [['^lieber nachbarn', 'Nachbarn é plural: <b>Liebe</b> Nachbarn.']] },
        { l: 'Was und wann?', d: 'o quê e quando: Am Samstag feiere ich …', re: '\\b(am|ab|um|von)\\b.+\\b(feiere|feiern|mache|machen|party|geburtstag)\\b|\\b(feiere|feiern)\\b.+\\b(am|ab|um)\\b', f: 'iu', err: 'Diga o quê e quando: Am Samstag feiere ich meinen Geburtstag.' },
        { l: 'Bitte', d: 'um pedido educado ou desculpas: Könnten Sie …? / Entschuldigung für …!', re: '\\b(könnten|entschuldigung|entschuldigen)\\b', f: 'iu', err: 'Peça com educação (Könnten Sie bitte …?) ou peça desculpas (Entschuldigung für den Lärm!).', bad: [['^können sie', 'Mais educado: <b>Könnten</b> Sie bitte …?']] },
        { l: 'Dank', d: 'agradeça: Vielen Dank für Ihr Verständnis!', re: '\\bdank(e)?\\b.*\\bf(ü|ue)r\\b', f: 'iu', err: 'Agradeça: Vielen Dank für Ihr Verständnis!' },
        { l: 'Name', d: 'o seu nome e o andar', re: '\\p{L}+.*\\b(stock|wohnung|etage|og|eg|links|rechts|erdgeschoss|nr)\\b', f: 'iu', err: 'Assine com nome e andar: Ana Souza, 2. Stock.' },
      ],
      modelo: 'Liebe Nachbarn, · am Samstag feiere ich ab 20 Uhr meinen Geburtstag. · Entschuldigung für den Lärm! · Vielen Dank für Ihr Verständnis! · Ana Souza, 2. Stock',
    },
  },
  deep: `
Esta lição é de **ler e escrever**. Na escada de todo prédio alemão há avisos: do regulamento e dos próprios vizinhos. Você vai ler dois deles e depois escrever o seu bilhete, com a fórmula de pedido mais educada do alemão: **Könnten Sie bitte …?**
# Passo 1: a fórmula do pedido educado
**Könnten Sie bitte …?** = "Os senhores poderiam, por favor…?". O outro verbo vai para o **fim**, no infinitivo.
! Por enquanto, guarde como fórmula pronta. A forma **könnten** (Konjunktiv II) é explicada no Módulo 10.
~ Könnten Sie bitte leiser sein? = Os senhores poderiam fazer menos barulho, por favor?
# Passo 2: desculpas e agradecimento
| Fórmula | Significa |
| Entschuldigung für den Lärm! | Desculpem o barulho! |
| Vielen Dank für Ihr Verständnis! | Muito obrigado pela compreensão! |
| Bei Fragen: einfach klingeln. | Dúvidas? É só tocar a campainha. |
~ Entschuldigung für den Lärm! = Desculpem o barulho!
# Passo 3: as partes do bilhete
| Parte | Exemplo |
| Para quem | Liebe Nachbarn, |
| O quê e quando | am Samstag feiere ich meinen Geburtstag. |
| Desculpas | Entschuldigung für den Lärm! |
| Agradecimento | Vielen Dank für Ihr Verständnis! |
| Quem | Ana Souza, 2. Stock |
BR Como no cartão-postal, depois da vírgula de **Liebe Nachbarn,** a frase seguinte começa com minúscula.
~ Am Samstag feiere ich meinen Geburtstag. = No sábado eu comemoro o meu aniversário.
# Passo 4: como ler os avisos do prédio
Procure as horas (Ruhezeiten), o que é proibido (**nicht**, **verboten**) e onde fazer cada coisa (**im Keller**, **im Hof**).
~ Fahrräder bitte nicht im Treppenhaus abstellen. = Por favor, não deixem bicicletas na escada do prédio.
> No exercício, leia os avisos do prédio e escreva o seu bilhete, uma frase por linha.
? Como se pede algo com a máxima educação? || Könnten Sie bitte …?
? Como se diz "Desculpem o barulho!"? || Entschuldigung für den Lärm!
? Como começa um bilhete para todos os vizinhos? || Liebe Nachbarn,
`,
});

V('Mein Lebenslauf',
  'E:1995 em alemão;neunzehn^s|hundert^v|fünfundneunzig^p',
  'T:A vida da Ana;1995@-4=in Recife geboren;2016@-3=Studium in São Paulo;2020@-2=geheiratet;2022@-1=nach Berlin gezogen;heute@0=Verkäuferin in Berlin');
V('Schule und Ausbildung',
  'V:Onde fica o ge-?;Separáveis: no meio|angefangen|aufgehört|eingekauft;Inseparáveis e -ieren: sem ge-|bestanden|verstanden|studiert',
  'P:A escola na Alemanha;Grundschule=6 a 10 anos;Gymnasium=10 a 18 anos;Abitur=o diploma do ensino médio;Studium ou Ausbildung=depois');
V('Eine E-Mail über mich',
  'E:Depois de weil, o verbo vai para o fim;…, weil^w|ich^s|in Berlin^c|arbeite.^v',
  'P:Um e-mail pessoal;Abertura=Lieber Jonas,;Agradecer=Danke für deine E-Mail!;Novidades=Ich bin umgezogen.;Motivo=…, weil ich eine neue Stelle habe.;Despedida=Schreib bald! Viele Grüße');
V('Die Hausordnung',
  'V:Obrigatório, permitido, proibido;man muss|den Müll trennen|leise sein;man darf|im Hof sitzen|Fahrräder in den Keller stellen;man darf nicht|im Treppenhaus rauchen|nach 22 Uhr laut sein',
  'M:Para onde vai o lixo;Lixeira|O que vai nela;Biomüll|restos de comida;Altpapier|papel e papelão;Gelber Sack|embalagens;Restmüll|o resto');
V('Ein Zettel an die Nachbarn',
  'E:O pedido mais educado;Könnten Sie^v|bitte^c|leiser^p|sein?^v2',
  'P:O bilhete aos vizinhos;Para quem=Liebe Nachbarn,;O quê e quando=am Samstag feiere ich meinen Geburtstag.;Desculpas=Entschuldigung für den Lärm!;Agradecimento=Vielen Dank für Ihr Verständnis!;Quem=Ana Souza, 2. Stock');
['fortaleza', 'jonas'].forEach((n) => NAMES.add(n));

S_('Mein Lebenslauf', 'wohnen (gewohnt)=morar (Perfekt: habe gewohnt)');
S_('Schule und Ausbildung', 'der Deutschkurs=o curso de alemão');
S_('Eine E-Mail über mich', 'der Stress=o estresse|antworten (geantwortet)=responder (Perfekt: hat geantwortet)');
S_('Die Hausordnung', 'die Tonne=a lixeira, o contêiner|helfen (er hilft)=ajudar (ele ajuda)');
S_('Ein Zettel an die Nachbarn', 'die Party=a festa|sich entschuldigen=pedir desculpas');
/* Módulo 9 (21/11/2026): trocar um produto, banco e correio e a lição de Ler e escrever "Eine Online-Bestellung". */
NL('n-umtauschen', {
  de: 'Umtauschen', pt: 'Trocar um produto', gt: 'passen, gefallen · zu groß, zu klein',
  gx: 'Para trocar: Ich möchte das umtauschen. Motivo: Das passt mir nicht (tamanho), Das gefällt mir nicht (gosto), Das ist zu klein, Das ist kaputt. Peça: eine Nummer größer, das Geld zurück. Leve o Kassenbon.',
  ge: 'Ich möchte diese Jacke umtauschen.=Eu gostaria de trocar esta jaqueta.|Sie passt mir nicht, sie ist zu klein.=Ela não serve em mim, está pequena demais.|Kann ich das Geld zurückbekommen?=Posso receber o dinheiro de volta?',
  v: 'umtauschen=trocar (um produto)=🔄|der Kassenbon=o cupom fiscal=🧾|kaputt=quebrado, com defeito=💔|zurückbekommen=receber de volta=💶|der Fehler=o defeito, o erro=⚠️|die Reklamation=a reclamação (de produto)=📢|die Gutschrift=o crédito (na loja)=💳|innerhalb von=dentro de (um prazo)=📅|die Frist=o prazo=⏳|das Etikett=a etiqueta=🏷️',
  x: 'der Kundenservice=o atendimento ao cliente|die Garantie=a garantia|reparieren=consertar|das Loch=o buraco|der Fleck=a mancha|eine Nummer kleiner=um número menor|die Originalverpackung=a embalagem original|unbenutzt=sem uso|die Abteilung=o departamento, a seção|Das tut mir leid.=Sinto muito.',
  dlg: 'Guten Tag, ich möchte diese Hose umtauschen.=Bom dia, eu gostaria de trocar esta calça.|Was ist das Problem?=Qual é o problema?|Sie passt mir nicht. Sie ist zu klein.=Ela não serve. Está pequena demais.|Kein Problem. Haben Sie den Kassenbon?=Sem problema. A senhora tem o cupom fiscal?',
  cz: 'Die Jacke passt ___ nicht.=mir=mich=ich|Die Farbe ___ mir nicht.=gefällt=gefallen=gefällst|Die Schuhe sind ___ groß.=zu=sehr=so',
  whys: 'passen pede dativo: passt mir|die Farbe é o sujeito: gefällt|zu + adjetivo = demais: zu groß',
  pts: 'Tamanho: Das passt mir nicht. Gosto: Das gefällt mir nicht. A coisa é o sujeito; a pessoa vai no dativo.|zu + adjetivo = demais: zu groß, zu klein, zu eng.|Defeito: Das ist kaputt. · Hier ist ein Loch.|Pedidos: eine Nummer größer, eine andere Farbe, das Geld zurück.',
  ex: 'Das Hemd ist kaputt.=A camisa está com defeito.|Haben Sie die Hose eine Nummer größer?=Vocês têm a calça um número maior?|Die Farbe gefällt mir nicht.=Não gosto da cor.|Hier ist der Kassenbon.=Aqui está o cupom fiscal.',
  bd: ['Die_Hose=S^a coisa é o sujeito|passt=V^passen: servir (no tamanho)|mir=OD^a pessoa vai no dativo|nicht.=NEG', 'A calça não serve em mim.'],
  rule: 'troca',
  hw: 'Escolha uma roupa ou um objeto que você comprou e imagine a troca: escreva o diálogo com o motivo (passt nicht, gefällt nicht, kaputt) e o que você quer.',
  deep: `
Comprou e não serviu, não gostou ou veio com defeito? Na Alemanha a troca é comum e quase sempre tranquila, desde que você explique o motivo. Hoje você aprende a fazer isso com passen, gefallen e zu.
# Passo 1: não serve ou não gosta?
| Problema | Em alemão |
| não serve (tamanho) | Das passt mir nicht. |
| não gosto | Das gefällt mir nicht. |
| tem defeito | Das ist kaputt. |
! Com **passen** e **gefallen** a coisa é o sujeito e a pessoa vai no **dativo**: Die Hose passt **mir** nicht.
~ Die Farbe gefällt mir nicht. = Não gosto da cor.
# Passo 2: zu = demais
| Alemão | Português |
| zu groß | grande demais |
| zu klein | pequeno demais |
| zu eng | apertado demais |
| zu lang | comprido demais |
BR "Muito grande" em português pode ser elogio ou problema. Em alemão, **sehr groß** é só "muito grande"; **zu groß** é problema: grande demais.
~ Sie ist zu klein. = Ela está pequena demais.
# Passo 3: o que você quer
- **eine Nummer größer / kleiner**: um número maior / menor
- **eine andere Farbe**: outra cor
- **das Geld zurück**: o dinheiro de volta
- **eine Gutschrift**: um crédito na loja
~ Haben Sie die Hose eine Nummer größer? = Vocês têm a calça um número maior?
# Passo 4: a conversa no caixa
| Quem | Diz |
| você | Ich möchte das umtauschen. |
| loja | Was ist das Problem? |
| loja | Haben Sie den Kassenbon? |
| você | Kann ich das Geld zurückbekommen? |
~ Hier ist der Kassenbon. = Aqui está o cupom fiscal.
> Ensaie em voz alta uma troca: o que é, o problema e o que você quer.
? Como se diz "não serve em mim"? || Das passt mir nicht.
? Qual a diferença entre sehr groß e zu groß? || sehr = muito; zu = demais, um problema
? O que é o Kassenbon? || o cupom fiscal
`,
});

NL('n-bankpost', {
  de: 'Auf der Bank und der Post', pt: 'Serviços no banco e no correio', gt: 'Perguntas formais · Ich möchte …',
  gx: 'Nos serviços se fala com Sie e se pede com Ich möchte … + infinitivo no fim (Ich möchte ein Konto eröffnen). Perguntas úteis: Was kostet das? Wie lange dauert das? Brauche ich …?',
  ge: 'Ich möchte ein Konto eröffnen.=Eu gostaria de abrir uma conta.|Ich möchte dieses Paket nach Brasilien schicken.=Eu gostaria de mandar este pacote para o Brasil.|Wie lange dauert das?=Quanto tempo demora?',
  v: 'das Konto=a conta (bancária)=🏦|eröffnen=abrir (uma conta)=🔓|überweisen=transferir (dinheiro)=💸|die Bankkarte=o cartão do banco=💳|der Geldautomat=o caixa eletrônico=🏧|abheben=sacar=💵|der Ausweis=a carteira de identidade=🪪|der Brief=a carta=✉️|das Einschreiben=a carta registrada=📨|dauern=demorar, durar=⏳',
  x: 'die IBAN=o número da conta (IBAN)|die Gebühr=a taxa|die PIN=a senha do cartão|der Kontoauszug=o extrato|der Schalter=o guichê|die Sendungsnummer=o código de rastreio|wiegen=pesar|die Packstation=o armário de retirada de pacotes|der Reisepass=o passaporte|die Wartenummer=a senha de espera',
  dlg: 'Guten Tag, ich möchte ein Paket nach Brasilien schicken.=Bom dia, eu gostaria de mandar um pacote para o Brasil.|Gern. Wie schwer ist es?=Pois não. Quanto ele pesa?|Ungefähr zwei Kilo. Wie lange dauert das?=Uns dois quilos. Quanto tempo demora?|Ungefähr zwei Wochen. Das kostet 38 Euro.=Umas duas semanas. Custa 38 euros.',
  cz: 'Ich möchte ein Konto ___.=eröffnen=eröffne=eröffnet|Wie lange ___ das?=dauert=dauern=dauerst|___ ich meinen Ausweis?=Brauche=Braucht=Brauchen',
  whys: 'depois de möchte o outro verbo vai para o fim, no infinitivo|das é o sujeito: dauert|com ich: brauche',
  pts: 'Pedir um serviço: Ich möchte … + infinitivo no fim (Ich möchte Geld abheben).|Perguntas: Was kostet das? · Wie lange dauert das? · Brauche ich meinen Ausweis?|No banco: ein Konto eröffnen, Geld überweisen, Geld abheben.|No correio: einen Brief schicken, ein Paket schicken, ein Einschreiben.',
  ex: 'Ich möchte 200 Euro abheben.=Eu gostaria de sacar 200 euros.|Muss ich ein Formular ausfüllen?=Preciso preencher um formulário?|Was kostet ein Brief nach Brasilien?=Quanto custa uma carta para o Brasil?|Hier ist mein Ausweis.=Aqui está a minha identidade.',
  bd: ['Ich=S|möchte=MOD^möchte na 2ª posição|ein_Konto=OA|eröffnen.=INF^o infinitivo vai para o fim', 'Eu gostaria de abrir uma conta.'],
  rule: 'modal',
  hw: 'Escreva três pedidos que você faria no banco ou no correio, com Ich möchte …, e uma pergunta para cada um (Was kostet …? Wie lange dauert …?).',
  deep: `
Abrir conta, sacar dinheiro, mandar um pacote para o Brasil: nos serviços alemães tudo é formal e direto. Com **Ich möchte …** e três ou quatro perguntas, você resolve quase tudo.
# Passo 1: pedir com Ich möchte …
**Ich möchte** + o que você quer + o verbo no **fim**, no infinitivo.
~ Ich möchte ein Konto eröffnen. = Eu gostaria de abrir uma conta.
~ Ich möchte 200 Euro abheben. = Eu gostaria de sacar 200 euros.
# Passo 2: no banco
| Alemão | Português |
| ein Konto eröffnen | abrir uma conta |
| Geld überweisen | transferir dinheiro |
| Geld abheben | sacar dinheiro |
| der Geldautomat | o caixa eletrônico |
BR Para abrir conta pedem o **Ausweis** ou o **Reisepass** e, muitas vezes, o comprovante de endereço registrado. Sem endereço registrado, quase nada anda.
~ Hier ist mein Ausweis. = Aqui está a minha identidade.
# Passo 3: no correio
| Alemão | Português |
| einen Brief schicken | mandar uma carta |
| ein Paket schicken | mandar um pacote |
| ein Einschreiben | uma carta registrada |
| die Sendungsnummer | o código de rastreio |
~ Was kostet ein Brief nach Brasilien? = Quanto custa uma carta para o Brasil?
# Passo 4: as perguntas que resolvem
- **Was kostet das?** Quanto custa?
- **Brauche ich …?** Eu preciso de …?
- **Muss ich ein Formular ausfüllen?** Preciso preencher um formulário?
~ Wie lange dauert das? = Quanto tempo demora?
> Ensaie em voz alta: peça um serviço com Ich möchte … e faça duas perguntas.
? Como se diz "sacar dinheiro"? || Geld abheben
? Onde fica o verbo depois de Ich möchte? || no fim, no infinitivo
? Como se pergunta "Quanto tempo demora?" || Wie lange dauert das?
`,
});

NL('n-bestellung', {
  de: 'Eine Online-Bestellung', pt: 'Ler a confirmação de um pedido e escrever uma reclamação curta', gt: 'leider · e-mail formal',
  gx: 'Reclamação formal: Sehr geehrte Damen und Herren, o número do pedido, o problema com leider (o verbo vem logo depois), o que você quer e Mit freundlichen Grüßen. Datas em números: 06.05.2026.',
  ge: 'Sehr geehrte Damen und Herren,=Prezados senhores,|Leider ist die Lieferung nicht angekommen.=Infelizmente a entrega não chegou.|Mit freundlichen Grüßen=Atenciosamente',
  v: 'die Bestellung=o pedido (de compra)=🛒|die Bestellnummer=o número do pedido=#️⃣|die Lieferung=a entrega=🚚|liefern=entregar=📦|beschädigt=danificado=💥|die Rücksendung=a devolução=↩️|Sehr geehrte Damen und Herren=Prezados senhores=📩|Mit freundlichen Grüßen=Atenciosamente=✒️|erstatten=reembolsar=💶|der Artikel=o artigo, o produto=🏷️',
  x: 'stornieren=cancelar (um pedido)|die Lieferzeit=o prazo de entrega|der Warenkorb=o carrinho de compras|die Versandkosten=o frete|kostenlos=grátis|der Händler=o vendedor, a loja|die Bestätigung=a confirmação|voraussichtlich=previsto|das Rücksendeetikett=a etiqueta de devolução|bezahlt=pago',
  dlg: 'Ist dein Paket schon angekommen?=O seu pacote já chegou?|Ja, aber der Artikel ist beschädigt.=Sim, mas o produto está danificado.|Oh nein! Schreib dem Händler eine E-Mail.=Ah, não! Escreva um e-mail para a loja.|Ja, ich möchte mein Geld zurück.=Sim, eu quero o meu dinheiro de volta.',
  cz: '___ ist die Lieferung nicht angekommen.=Leider=Gern=Bitte|Sehr ___ Damen und Herren,=geehrte=geehrter=gehört|Mit freundlichen ___=Grüßen=Grüße=Gruß',
  whys: 'leider abre a frase da má notícia; o verbo vem logo depois|a fórmula fixa é Sehr geehrte Damen und Herren|a despedida formal é Mit freundlichen Grüßen',
  pts: 'Abertura formal: Sehr geehrte Damen und Herren, ou Sehr geehrte Frau … / Sehr geehrter Herr …|O pedido: meine Bestellnummer ist 4521.|O problema com leider: Leider ist der Artikel beschädigt. Depois, o que você quer.|Fechamento: Mit freundlichen Grüßen + nome completo.',
  ex: 'Meine Bestellnummer ist 4521.=O número do meu pedido é 4521.|Leider ist der Artikel beschädigt.=Infelizmente o produto está danificado.|Ich möchte den Artikel zurückschicken.=Eu gostaria de devolver o produto.|Bitte erstatten Sie mir das Geld.=Por favor, reembolsem o meu dinheiro.',
  bd: ['Leider=ADV^leider na 1ª posição|ist=V^o verbo vem logo depois|der_Artikel=S|beschädigt.=PR^o estado do produto', 'Infelizmente o produto está danificado.'],
  rule: 'reclamacao',
  hw: 'Pense numa compra online que deu problema (ou invente) e escreva o e-mail de reclamação: abertura formal, número do pedido, o problema com leider, o que você quer e o fechamento.',
  le: {
    texto: {
      t: 'Bestellbestätigung', kind: 'leitura',
      intro: 'A confirmação de um pedido feito pela Ana numa loja online. Leia e responda.',
      paras: ['Vielen Dank für Ihre Bestellung!', 'Bestellnummer: 4521 · Datum: 03.05.2026', '1 × Regenjacke, Größe M, Farbe Blau · 59,90 €', '1 × Rucksack, Schwarz · 34,90 €', 'Versandkosten: kostenlos · Summe: 94,80 €', 'Lieferung voraussichtlich am 06.05.2026. Rücksendung innerhalb von 30 Tagen kostenlos.'],
      qs: [
        { q: 'Qual é o número do pedido?', o: ['4521', '0305', '9480'], a: 0 },
        { q: 'Quanto custa o frete?', o: ['nada, é grátis', '5,90 €', '34,90 €'], a: 0 },
        { q: 'Quando a entrega deve chegar?', o: ['no dia 6 de maio', 'no dia 3 de maio', 'em 30 dias'], a: 0 },
        { q: 'Em quanto tempo a Ana pode devolver de graça?', o: ['em até 30 dias', 'até o dia 6 de maio', 'ela não pode devolver'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva a reclamação', tipo: 'form', ok: 'Reclamação escrita corretamente.',
      pede: 'A jaqueta chegou com um buraco. Escreva um e-mail curto e formal para a loja, uma frase em cada linha.',
      campos: [
        { l: 'Anrede', d: 'Sehr geehrte Damen und Herren,', re: '^sehr geehrte\\s+damen\\s+und\\s+herren\\b', f: 'iu', err: 'Comece com a fórmula formal: Sehr geehrte Damen und Herren,', bad: [['^(hallo|liebe)', 'Para uma loja, use a abertura formal: <b>Sehr geehrte Damen und Herren,</b>']] },
        { l: 'Bestellung', d: 'o número do pedido: meine Bestellnummer ist 4521.', re: '\\b4521\\b', f: 'iu', err: 'Diga o número do pedido: meine Bestellnummer ist 4521.' },
        { l: 'Problem', d: 'o problema, com leider', re: '^leider\\s+(ist|sind|hat|haben|war|fehlt|kam)\\b', f: 'iu', err: 'Comece com leider e ponha o verbo logo depois: Leider ist die Jacke kaputt.', bad: [['^leider (die|der|das|ich|es)\\b', 'Depois de <b>leider</b> vem o verbo: Leider <b>ist</b> die Jacke …']] },
        { l: 'Wunsch', d: 'o que você quer: eine neue Jacke / das Geld zurück', re: '\\b(möchte|bitte|erstatten|zurück|umtauschen|neue)\\b', f: 'iu', err: 'Diga o que quer: Ich möchte eine neue Jacke. / Bitte erstatten Sie mir das Geld.' },
        { l: 'Gruß', d: 'Mit freundlichen Grüßen + o seu nome', re: '^mit freundlichen gr(ü|ue)(ß|ss)en\\b', f: 'iu', err: 'Feche com Mit freundlichen Grüßen e o seu nome.', bad: [['^viele gr', 'Num e-mail formal: <b>Mit freundlichen Grüßen</b>.']] },
      ],
      modelo: 'Sehr geehrte Damen und Herren, · meine Bestellnummer ist 4521. · Leider ist die Jacke kaputt. · Bitte erstatten Sie mir das Geld. · Mit freundlichen Grüßen, Ana Souza',
    },
  },
  deep: `
Esta lição é de **ler e escrever**. Você vai ler a confirmação de um pedido feito numa loja online e depois escrever uma reclamação curta e formal, porque o produto chegou com defeito.
# Passo 1: ler a confirmação do pedido
| Na confirmação | Significa |
| Bestellnummer | número do pedido |
| Versandkosten | frete |
| Summe | total |
| Lieferung voraussichtlich | entrega prevista |
| Rücksendung | devolução |
As datas vêm em números, com pontos: **06.05.2026** = 6 de maio de 2026.
~ Meine Bestellnummer ist 4521. = O número do meu pedido é 4521.
# Passo 2: o e-mail formal
| Parte | Fórmula |
| Abertura | Sehr geehrte Damen und Herren, |
| Fechamento | Mit freundlichen Grüßen |
BR Equivale ao nosso "Prezados senhores" e "Atenciosamente". Num e-mail para uma empresa, **Hallo** e **Viele Grüße** soam informais demais.
~ Mit freundlichen Grüßen = Atenciosamente
# Passo 3: o problema com leider
**leider** abre a frase da má notícia, e o verbo vem logo depois:
- Leider **ist** die Lieferung nicht angekommen.
- Leider **fehlt** ein Artikel.
~ Leider ist der Artikel beschädigt. = Infelizmente o produto está danificado.
# Passo 4: o que você quer
- Ich möchte den Artikel **umtauschen**.
- Ich möchte den Artikel **zurückschicken**.
- Bitte **erstatten** Sie mir das Geld.
~ Bitte erstatten Sie mir das Geld. = Por favor, reembolsem o meu dinheiro.
> No exercício, leia a confirmação do pedido e escreva a sua reclamação, uma frase por linha.
? Como começa um e-mail formal para uma empresa? || Sehr geehrte Damen und Herren,
? Como se fecha esse e-mail? || Mit freundlichen Grüßen
? Complete: Leider ___ der Artikel beschädigt. || ist
`,
});

/* Módulo 10 (21/11/2026): o dia de trabalho, o telefone e a lição de Ler e escrever "Eine Stellenanzeige". */
NL('n-arbeitstag', {
  de: 'Mein Arbeitstag', pt: 'Horários e colegas', gt: 'vor, nach, seit + Dativ (tempo)',
  gx: 'Tempo com Dativ: vor (antes de; há, e acabou), nach (depois de), seit (desde; há, e continua). vor dem Meeting, nach der Arbeit, seit zwei Jahren. Abrindo a frase, o verbo vem logo depois.',
  ge: 'Nach der Arbeit gehe ich nach Hause.=Depois do trabalho eu vou para casa.|Vor der Besprechung trinke ich einen Kaffee.=Antes da reunião eu tomo um café.|Ich arbeite seit drei Jahren hier.=Eu trabalho aqui há três anos.',
  v: 'vor (+ Dativ)=antes de; há (tempo)=⏮️|nach (+ Dativ)=depois de=⏭️|seit (+ Dativ)=desde; há (e continua)=⏳|der Arbeitstag=o dia de trabalho=💼|die Kantine=o refeitório=🍽️|das Meeting=a reunião=👥|die Gleitzeit=o horário flexível=🕰️|das Homeoffice=o trabalho de casa=🏠|die Frühschicht=o turno da manhã=🌅|erledigen=resolver, fazer (tarefas)=✅',
  x: 'die Spätschicht=o turno da tarde|die Nachtschicht=o turno da noite|der Schreibtisch=a escrivaninha|die Aufgabe=a tarefa|E-Mails beantworten=responder os e-mails|die Kaffeepause=a pausa do café|der Arbeitsweg=o caminho para o trabalho|pendeln=ir e voltar de outra cidade todo dia|der Urlaubstag=o dia de férias|die Teamsitzung=a reunião da equipe',
  dlg: 'Wie sieht dein Arbeitstag aus?=Como é o seu dia de trabalho?|Ich fange um acht an. Vor dem Meeting lese ich meine E-Mails.=Eu começo às oito. Antes da reunião eu leio os meus e-mails.|Und nach der Arbeit?=E depois do trabalho?|Nach der Arbeit gehe ich mit Kollegen joggen.=Depois do trabalho eu vou correr com colegas.',
  cz: 'Nach ___ Arbeit gehe ich nach Hause.=der=die=dem|Vor ___ Meeting trinke ich Kaffee.=dem=das=den|Ich arbeite ___ zwei Jahren hier.=seit=vor=nach',
  whys: 'die Arbeit no dativo: der|das Meeting no dativo: dem|seit = há, e continua até hoje (verbo no presente)',
  pts: 'vor, nach e seit pedem Dativ: der/das → dem, die → der, plural → den + n.|vor = antes de (vor dem Meeting) e há, no passado (vor zwei Jahren).|nach = depois de. seit = desde, com o presente (Ich arbeite seit 2020 hier).|Abrindo a frase, o verbo vem logo depois: Nach der Arbeit gehe ich …',
  ex: 'Vor zwei Jahren habe ich hier angefangen.=Há dois anos eu comecei aqui.|Nach dem Mittagessen habe ich ein Meeting.=Depois do almoço eu tenho uma reunião.|Seit Montag arbeite ich im Homeoffice.=Desde segunda eu trabalho de casa.|In der Kantine esse ich mit Kollegen.=No refeitório eu como com colegas.',
  bd: ['Nach_der_Arbeit=T^nach + Dativ: die Arbeit → der Arbeit|gehe=V^o verbo vem logo depois|ich=S|nach_Hause.=L', 'Depois do trabalho eu vou para casa.'],
  rule: 'dativ_prep',
  hw: 'Descreva o seu dia de trabalho ou de estudo em cinco frases, com vor, nach e seit (ex.: Vor der Arbeit trinke ich Kaffee.).',
  deep: `
Como é o seu dia de trabalho? Para contar, você precisa de três palavrinhas de tempo: **vor**, **nach** e **seit**. As três pedem **Dativ**, o mesmo caso que você já usa com mit e zu.
# Passo 1: vor e nach
| Alemão | Português |
| vor dem Meeting | antes da reunião |
| nach der Arbeit | depois do trabalho |
| vor dem Mittagessen | antes do almoço |
| nach der Pause | depois do intervalo |
~ Nach der Arbeit gehe ich nach Hause. = Depois do trabalho eu vou para casa.
# Passo 2: o Dativ depois de vor, nach, seit
| Gênero | Artigo | Exemplo |
| der | dem | vor dem Termin |
| das | dem | nach dem Meeting |
| die | der | nach der Arbeit |
| plural | den + n | seit zwei Jahren |
~ Vor der Besprechung trinke ich einen Kaffee. = Antes da reunião eu tomo um café.
# Passo 3: vor e seit com tempo passado
- **vor** + tempo = **há**, e acabou: Vor zwei Jahren habe ich hier angefangen.
- **seit** + tempo = **há**, e continua: Ich arbeite seit zwei Jahren hier.
BR Em português os dois são "há dois anos". Em alemão: acabou → **vor** (com Perfekt); continua → **seit** (com presente).
~ Ich arbeite seit drei Jahren hier. = Eu trabalho aqui há três anos.
# Passo 4: o dia de trabalho
| Palavra | Significa |
| die Frühschicht | o turno da manhã |
| die Gleitzeit | o horário flexível |
| das Homeoffice | o trabalho de casa |
| die Kantine | o refeitório |
~ Seit Montag arbeite ich im Homeoffice. = Desde segunda eu trabalho de casa.
> Conte em voz alta o seu dia, com vor, nach e seit.
? Complete: Nach ___ Arbeit gehe ich nach Hause. || der
? "Há dois anos, e continuo" se diz com vor ou seit? || seit
? Qual é o caso depois de vor, nach e seit? || Dativ
`,
});

NL('n-telefon', {
  de: 'Am Telefon', pt: 'Telefonar e deixar recado', gt: 'anrufen, zurückrufen, ausrichten',
  gx: 'No telefone de trabalho: atenda com a empresa e o nome (… am Apparat), peça alguém (Kann ich bitte Frau … sprechen?) e deixe recado (Kann ich eine Nachricht hinterlassen?). anrufen e zurückrufen são separáveis: Ich rufe Sie morgen an.',
  ge: 'Kann ich bitte Frau Weber sprechen?=Posso falar com a sra. Weber, por favor?|Sie ist gerade nicht da.=Ela não está no momento.|Kann ich eine Nachricht hinterlassen?=Posso deixar um recado?',
  v: 'anrufen (ich rufe an)=ligar, telefonar=📞|zurückrufen=retornar a ligação=↩️|ausrichten=dar o recado=📨|hinterlassen=deixar (um recado)=📝|verbinden=transferir a ligação=🔀|am Apparat=falando (ao telefone)=☎️|die Durchwahl=o ramal=#️⃣|die Mailbox=a caixa postal=📬|sich verwählen=discar o número errado=❌|erreichen=conseguir falar com=🎯',
  x: 'die Leitung=a linha|Die Verbindung ist schlecht.=A ligação está ruim.|lauter sprechen=falar mais alto|der Anrufbeantworter=a secretária eletrônica|die Vorwahl=o código de área|wählen=discar|auflegen=desligar (o telefone)|die SMS=a mensagem de texto|der Rückruf=o retorno da ligação|unter der Nummer=no número',
  dlg: 'Firma Berger, Lena Koch am Apparat.=Empresa Berger, Lena Koch falando.|Guten Tag, kann ich bitte Herrn Weber sprechen?=Bom dia, posso falar com o sr. Weber, por favor?|Er ist gerade nicht da. Kann ich etwas ausrichten?=Ele não está no momento. Posso dar algum recado?|Ja. Könnte er mich bitte zurückrufen?=Sim. Ele poderia me retornar, por favor?',
  cz: 'Ich ___ Sie morgen an.=rufe=anrufe=rufen|Könnten Sie mich bitte mit Frau Weber ___?=verbinden=verbindet=verbunden|Kann ich eine Nachricht ___?=hinterlassen=hinterlässt=hinterlasse',
  whys: 'anrufen é separável: ich rufe … an|depois de könnten, o verbo vai para o fim no infinitivo|depois de kann, infinitivo no fim',
  pts: 'Atenda com a empresa e o nome: Firma Berger, Lena Koch am Apparat. Quem liga: Hier ist …|Pedir alguém: Kann ich bitte Frau Weber sprechen?|Recado: Kann ich eine Nachricht hinterlassen? · Kann ich etwas ausrichten?|anrufen e zurückrufen são separáveis: Ich rufe Sie morgen an.',
  ex: 'Einen Moment, ich verbinde Sie.=Um momento, vou transferir a ligação.|Die Leitung ist besetzt.=A linha está ocupada.|Bitte rufen Sie mich zurück.=Por favor, me retorne a ligação.|Meine Nummer ist 0151 2233 4455.=O meu número é 0151 2233 4455.',
  bd: ['Ich=S|rufe=V^anrufen é separável: rufe na 2ª posição|Sie=OA|morgen=T|an.=PX^o prefixo an vai para o fim', 'Eu ligo para o senhor amanhã.'],
  rule: 'separavel',
  hw: 'Escreva duas ligações curtas: numa você pede para falar com alguém e deixa recado; na outra você atende e anota o recado. Leia em voz alta.',
  deep: `
Telefonar numa língua estrangeira assusta: sem gestos e sem rosto, só a voz. A boa notícia é que as ligações de trabalho seguem fórmulas fixas. Hoje você aprende as principais e os verbos separáveis do telefone.
# Passo 1: atender e se apresentar
| Quem | Diz |
| quem atende | Firma Berger, Lena Koch am Apparat. |
| quem liga | Guten Tag, hier ist Ana Souza. |
**am Apparat** = "falando". Na Alemanha se atende o telefone de trabalho dizendo a empresa e o nome.
~ Kann ich bitte Herrn Weber sprechen? = Posso falar com o sr. Weber, por favor?
# Passo 2: transferir ou não está
- **Einen Moment, ich verbinde Sie.** Um momento, vou transferir.
- **Er ist gerade nicht da.** Ele não está no momento.
- **Die Leitung ist besetzt.** A linha está ocupada.
~ Einen Moment, ich verbinde Sie. = Um momento, vou transferir a ligação.
# Passo 3: deixar e anotar recado
| Para | Diga |
| deixar recado | Kann ich eine Nachricht hinterlassen? |
| oferecer | Kann ich etwas ausrichten? |
| pedir retorno | Könnte er mich bitte zurückrufen? |
~ Bitte rufen Sie mich zurück. = Por favor, me retorne a ligação.
# Passo 4: os separáveis do telefone
| Infinitivo | Na frase |
| anrufen | Ich rufe Sie morgen an. |
| zurückrufen | Er ruft Sie gleich zurück. |
| ausrichten | Ich richte es ihm aus. |
BR Dite números de telefone devagar, em pares ou dígito por dígito, e use **zwo** para não confundir zwei com drei.
~ Ich rufe Sie morgen an. = Eu ligo para o senhor amanhã.
> Ensaie em voz alta: peça para falar com alguém, ouça que a pessoa não está e deixe um recado.
? O que significa "am Apparat"? || falando, ao atender
? Como se pede para deixar recado? || Kann ich eine Nachricht hinterlassen?
? Onde fica o an de anrufen na frase? || no fim
`,
});

NL('n-stellenanzeige', {
  de: 'Eine Stellenanzeige', pt: 'Ler um anúncio de emprego e escrever um e-mail de interesse', gt: 'Fórmulas de e-mail formal',
  gx: 'E-mail de interesse: Sehr geehrte Frau … / Sehr geehrter Herr …, a vaga (mit großem Interesse habe ich Ihre Anzeige gelesen), a sua experiência, o pedido (Über eine Einladung zum Gespräch würde ich mich freuen) e Mit freundlichen Grüßen.',
  ge: 'Sehr geehrte Frau Berger,=Prezada sra. Berger,|mit großem Interesse habe ich Ihre Anzeige gelesen.=li o seu anúncio com grande interesse.|Ich habe drei Jahre Erfahrung als Kellnerin.=Tenho três anos de experiência como garçonete.',
  v: 'die Stellenanzeige=o anúncio de emprego=📰|die Bewerbung=a candidatura=📂|sich bewerben=candidatar-se=✋|das Interesse=o interesse=👀|die Voraussetzung=o requisito=📋|Vollzeit / Teilzeit=tempo integral / meio período=⏰|das Gehalt=o salário=💶|der Arbeitgeber=o empregador=🏢|das Vorstellungsgespräch=a entrevista de emprego=🤝|zuverlässig=confiável=🔒',
  x: 'die Unterlagen=os documentos|der Nebenjob=o trabalho extra|die Berufserfahrung=a experiência profissional|teamfähig=que sabe trabalhar em equipe|flexibel=flexível|die Kenntnisse=os conhecimentos|ab sofort=a partir de já|befristet=por tempo determinado|unbefristet=por tempo indeterminado|das Anschreiben=a carta de apresentação',
  dlg: 'Hast du die Anzeige vom Café Linde gesehen?=Você viu o anúncio do Café Linde?|Ja! Sie suchen eine Servicekraft in Teilzeit.=Sim! Eles procuram um atendente em meio período.|Bewirbst du dich?=Você vai se candidatar?|Ja, ich schreibe heute eine E-Mail.=Sim, eu escrevo um e-mail hoje.',
  cz: 'Sehr ___ Herr Berger,=geehrter=geehrte=geehrt|Ich ___ mich um die Stelle.=bewerbe=bewerbt=bewerben|Ich habe zwei Jahre Erfahrung ___ Kellnerin.=als=wie=für',
  whys: 'Herr é masculino: Sehr geehrter Herr …; para mulher, Sehr geehrte Frau …|sich bewerben é reflexivo; com ich: bewerbe mich|als = como, na função de',
  pts: 'Abertura: Sehr geehrte Frau … / Sehr geehrter Herr … ou Sehr geehrte Damen und Herren.|Primeira frase, com minúscula: mit großem Interesse habe ich Ihre Anzeige gelesen.|Quem você é: Erfahrung als …, as línguas, quando pode começar. Pedido: Über eine Einladung zum Gespräch würde ich mich freuen.|Fechamento: Mit freundlichen Grüßen + nome completo.',
  ex: 'Ich bewerbe mich um die Stelle als Verkäuferin.=Eu me candidato à vaga de vendedora.|Ich spreche Portugiesisch, Englisch und Deutsch.=Eu falo português, inglês e alemão.|Ich kann ab sofort anfangen.=Eu posso começar imediatamente.|Über eine Einladung zum Gespräch würde ich mich freuen.=Eu ficaria feliz com um convite para uma entrevista.',
  bd: ['Ich=S|bewerbe=V^sich bewerben: reflexivo|mich=RX^o pronome reflexivo|um_die_Stelle.=PP^sich bewerben um + acusativo', 'Eu me candidato à vaga.'],
  rule: 'candidatura',
  hw: 'Procure um anúncio de emprego simples em alemão (ou use o do Café Linde) e escreva um e-mail curto de interesse, com as cinco partes da lição.',
  le: {
    texto: {
      t: 'Stellenanzeige · Café Linde', kind: 'leitura',
      intro: 'Um café em Berlim procura um atendente. Leia o anúncio e responda.',
      paras: ['Café Linde sucht ab sofort eine Servicekraft (m/w/d) in Teilzeit, 20 Stunden pro Woche.', 'Ihre Aufgaben: Gäste bedienen, Kaffee machen, kassieren.', 'Sie haben Erfahrung im Service, sprechen gut Deutsch und sind freundlich und zuverlässig.', 'Wir bieten: ein nettes Team, flexible Arbeitszeiten und 14 Euro pro Stunde.', 'Interesse? Schreiben Sie eine kurze E-Mail an Frau Berger.'],
      qs: [
        { q: 'Quantas horas por semana é o trabalho?', o: ['20 horas', '14 horas', '40 horas'], a: 0 },
        { q: 'O que o café oferece?', o: ['equipe simpática, horários flexíveis e 14 euros por hora', 'um salário fixo mensal', 'refeições grátis'], a: 0 },
        { q: 'Qual destas é uma tarefa do trabalho?', o: ['atender os clientes', 'limpar a cozinha', 'fazer bolos'], a: 0 },
        { q: 'Para quem se deve escrever?', o: ['para a sra. Berger', 'para o sr. Linde', 'para a equipe'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva o seu e-mail de interesse', tipo: 'form', ok: 'E-mail escrito corretamente.',
      pede: 'Escreva um e-mail curto e formal para a Frau Berger, uma frase em cada linha. Pode inventar a sua experiência.',
      campos: [
        { l: 'Anrede', d: 'Sehr geehrte Frau Berger,', re: '^sehr geehrte\\s+frau\\s+berger\\b', f: 'iu', err: 'Comece com Sehr geehrte Frau Berger,', bad: [['^sehr geehrter frau', 'Para mulher: Sehr <b>geehrte</b> Frau Berger.'], ['^(hallo|liebe)', 'Num e-mail de candidatura, use a abertura formal: <b>Sehr geehrte Frau Berger,</b>']] },
        { l: 'Anzeige', d: 'mit großem Interesse habe ich Ihre Anzeige gelesen.', re: '\\b(interesse|anzeige|bewerbe)\\b', f: 'iu', err: 'Diga que viu o anúncio: mit großem Interesse habe ich Ihre Anzeige gelesen.' },
        { l: 'Erfahrung', d: 'a sua experiência: Ich habe … Erfahrung als …', re: '\\b(erfahrung|gearbeitet|arbeite)\\b', f: 'iu', err: 'Fale da sua experiência: Ich habe zwei Jahre Erfahrung als Kellnerin.', bad: [['erfahrung wie', 'Para a função, use <b>als</b>: Erfahrung als Kellnerin.']] },
        { l: 'Wunsch', d: 'o pedido: Über eine Einladung zum Gespräch würde ich mich freuen.', re: '\\b(einladung|gespräch|freuen|freue)\\b', f: 'iu', err: 'Peça a entrevista: Über eine Einladung zum Gespräch würde ich mich freuen.' },
        { l: 'Gruß', d: 'Mit freundlichen Grüßen + nome completo', re: '^mit freundlichen gr(ü|ue)(ß|ss)en\\b', f: 'iu', err: 'Feche com Mit freundlichen Grüßen e o seu nome completo.', bad: [['^viele gr', 'Num e-mail formal: <b>Mit freundlichen Grüßen</b>.']] },
      ],
      modelo: 'Sehr geehrte Frau Berger, · mit großem Interesse habe ich Ihre Anzeige gelesen. · Ich habe zwei Jahre Erfahrung als Kellnerin. · Über eine Einladung zum Gespräch würde ich mich freuen. · Mit freundlichen Grüßen, Ana Souza',
    },
  },
  deep: `
Esta lição é de **ler e escrever**. Você vai ler um anúncio de emprego de um café e escrever um e-mail curto de interesse, com as fórmulas que todo e-mail formal alemão usa.
# Passo 1: como ler um anúncio de emprego
| No anúncio | Significa |
| sucht ab sofort | procura, para começar já |
| (m/w/d) | masculino, feminino, diverso |
| Teilzeit / Vollzeit | meio período / tempo integral |
| Ihre Aufgaben | as suas tarefas |
| Wir bieten | o que a empresa oferece |
~ Sie suchen eine Servicekraft in Teilzeit. = Eles procuram um atendente em meio período.
# Passo 2: abertura e fechamento formais
| Para | Abertura |
| mulher | Sehr geehrte Frau Berger, |
| homem | Sehr geehrter Herr Berger, |
| sem nome | Sehr geehrte Damen und Herren, |
Fechamento: **Mit freundlichen Grüßen** + nome completo.
~ Sehr geehrter Herr Berger, = Prezado sr. Berger,
# Passo 3: o corpo do e-mail
- A vaga: mit großem Interesse habe ich Ihre Anzeige gelesen.
- Quem você é: Ich habe zwei Jahre Erfahrung als Kellnerin.
- O pedido: Über eine Einladung zum Gespräch würde ich mich freuen.
BR Depois da vírgula de **Sehr geehrte Frau Berger,** a primeira frase começa com **minúscula**: "mit großem Interesse …".
~ Ich kann ab sofort anfangen. = Eu posso começar imediatamente.
# Passo 4: sich bewerben
**sich bewerben um** + acusativo = candidatar-se a. É reflexivo: ich bewerbe **mich**, du bewirbst **dich**.
~ Ich bewerbe mich um die Stelle. = Eu me candidato à vaga.
> No exercício, leia o anúncio do Café Linde e escreva o seu e-mail, uma frase por linha.
? Como começa um e-mail para a Frau Berger? || Sehr geehrte Frau Berger,
? Como se fecha um e-mail formal? || Mit freundlichen Grüßen
? O que significa Teilzeit? || meio período
`,
});

V('Umtauschen',
  'V:Não serve ou não gosta?;passen · o tamanho|Die Hose passt mir nicht.|Sie ist zu klein.;gefallen · o gosto|Die Farbe gefällt mir nicht.|Ich mag die Farbe nicht.',
  'P:A troca no caixa;O quê=Ich möchte das umtauschen.;O motivo=Es passt mir nicht.;O que você quer=eine Nummer größer;A prova=Hier ist der Kassenbon.');
V('Auf der Bank und der Post',
  'V:No banco ou no correio?;die Bank|ein Konto eröffnen|Geld überweisen|Geld abheben;die Post|einen Brief schicken|ein Paket schicken|ein Einschreiben',
  'E:Pedir um serviço;Ich^s|möchte^v|ein Konto^o|eröffnen.^v2');
V('Eine Online-Bestellung',
  'V:Informal ou formal?;Para amigos|Hallo Jonas,|Viele Grüße;Para empresas|Sehr geehrte Damen und Herren,|Mit freundlichen Grüßen',
  'P:O e-mail de reclamação;Abertura=Sehr geehrte Damen und Herren,;O pedido=meine Bestellnummer ist 4521.;O problema=Leider ist die Jacke kaputt.;O que você quer=Bitte erstatten Sie mir das Geld.;Fechamento=Mit freundlichen Grüßen');
V('Mein Arbeitstag',
  'P:Um dia de trabalho;vor der Arbeit=Kaffee trinken;um acht Uhr=anfangen;vor dem Meeting=E-Mails lesen;nach dem Mittagessen=Meeting;nach der Arbeit=nach Hause gehen',
  'V:vor ou seit?;vor · acabou|Vor zwei Jahren habe ich hier angefangen.;seit · continua|Ich arbeite seit zwei Jahren hier.');
V('Am Telefon',
  'P:A ligação de trabalho;Atendem=Firma Berger, Lena Koch am Apparat.;Você pede=Kann ich bitte Herrn Weber sprechen?;Ele não está=Er ist gerade nicht da.;O recado=Könnte er mich bitte zurückrufen?',
  'E:anrufen na frase;Ich^s|rufe^v|Sie morgen^c|an.^v2');
V('Eine Stellenanzeige',
  'M:O anúncio em poucas palavras;No anúncio|Significa;ab sofort|para começar já;(m/w/d)|para qualquer gênero;Teilzeit|meio período;Wir bieten|a empresa oferece',
  'P:O e-mail de interesse;Abertura=Sehr geehrte Frau Berger,;A vaga=mit großem Interesse habe ich Ihre Anzeige gelesen.;Quem sou=Ich habe zwei Jahre Erfahrung als Kellnerin.;O pedido=Über eine Einladung zum Gespräch würde ich mich freuen.;Fechamento=Mit freundlichen Grüßen');

S_('Umtauschen', 'Kein Problem.=Sem problema.');
S_('Auf der Bank und der Post', 'ungefähr=mais ou menos, uns');
S_('Eine Online-Bestellung', 'ankommen (angekommen)=chegar (Perfekt: ist angekommen)|Oh nein!=Ah, não!');
S_('Mein Arbeitstag', 'joggen gehen=ir correr');
S_('Am Telefon', 'gerade=neste momento');
S_('Eine Stellenanzeige', 'die Kellnerin=a garçonete|das Gespräch=a conversa; aqui, a entrevista|die Servicekraft=o atendente (em café ou restaurante)|du bewirbst dich=você se candidata (de sich bewerben)');
// Esquemas visuais (mesmo formato de data/visuals.js) e palavras de apoio (data/support.js) das lições novas.
V('Wie schreibt man das?',
  'V:As letras que mais enganam;V se chama "fau"|Vera: fau · e · er · a;W se chama "vê"|Wien: vê · i · e · en;Z se chama "tsét"|Zoo: tsét · o · o',
  'P:Soletrar um e-mail, peça por peça;ana=a · n · a;. (ponto)=Punkt;souza=s · o · u · z · a;@ (arroba)=at;web.de=web Punkt de');
V('Wie alt bist du?',
  'E:De 13 a 19, uma regra só;unidade (vier)^s|+|zehn^v|=|vierzehn^p',
  'F:A idade se diz com sein;Quem^s|sein^v|Idade^p;Ich|bin|zwanzig.;Sie|ist|zwölf.;Er|ist|siebzehn.');
V('Ein Formular',
  'V:du ou Sie?;du · amigos e família|Wie heißt du?|Wo wohnst du?|dein Name;Sie · formal|Wie heißen Sie?|Wo wohnen Sie?|Ihr Name',
  'M:Como ler uma ficha;Na ficha|Significa;**Name**: Mendes|sobrenome;**Vorname**: Carla|nome;Geburtsdatum: 05.03.1990|data: dia.mês.ano;PLZ, Ort: 10969 Berlin|CEP e cidade;Unterschrift|assinatura');
S_('Wie schreibt man das?', 'oder=ou|at=arroba (@), dito como em inglês');
S_('Wie alt bist du?', 'die Tochter=a filha|dein / deine=seu, sua (informal)|die Nummer=o número');
S_('Ein Formular', 'ausfüllen (Sie füllen … aus)=preencher (o aus vai para o fim)|unterschreiben=assinar');
S_('Zwei Bücher, drei Stühle', 'die Kinder=os filhos, as crianças (plural de das Kind)|die Brüder=os irmãos (plural de der Bruder)');
V('Am Montag um zehn',
  'V:um, am ou im?;um · a hora|um acht Uhr|um halb drei;am · o dia|am Montag|am Abend;im · o mês|im Mai|im Dezember',
  'P:Marcar um compromisso;Perguntar=Hast du am Montag Zeit?;Recusar=Nein, das geht nicht.;Propor outro dia=Und am Dienstag?;Aceitar=Ja, das geht!;Combinar a hora=Um zehn Uhr?');
V('Eine Einladung',
  'V:Aceitar ou recusar;Aceitar|Ja, gern!|Ich komme gern.|Bis dann!;Recusar|Leider kann ich nicht.|Ich arbeite am Samstag.|Schade!',
  'E:Depois de leider, o verbo vem logo;Leider^c|kann^v|ich^s|nicht kommen.^n');
S_('Am Montag um zehn', 'Um wie viel Uhr?=A que horas?|in der Nacht=de madrugada (a exceção do am)');
S_('Eine Einladung', 'mitbringen (bringt … mit)=levar junto|ihr (habt ihr, antwortet)=vocês|die Nachbarn=os vizinhos');
V('Auf dem Markt',
  'V:Embalagens e medidas;das Kilo|ein Kilo Äpfel|ein Kilo Tomaten;die Packung|eine Packung Reis|eine Packung Käse;die Dose|eine Dose Tomaten|eine Dose Suppe',
  'M:Como se lê o preço;Preço|Em alemão;2,50 €|zwei Euro fünfzig;0,80 €|achtzig Cent;12,99 €|zwölf Euro neunundneunzig;350 €|dreihundertfünfzig Euro');
V('Was isst du gern?',
  'E:Do gosto ao favorito;gern^p|→|lieber^v|→|am liebsten^s',
  'P:Com que frequência?;immer=sempre;oft=muitas vezes;manchmal=às vezes;selten=raramente;nie=nunca');
V('Speisekarte und Einkaufszettel',
  'P:O cardápio alemão, de cima para baixo;Vorspeisen=as entradas;Hauptgerichte=os pratos principais;Beilagen=os acompanhamentos;Nachspeisen=as sobremesas;Getränke=as bebidas',
  'M:No acusativo, só o masculino muda;Gênero|Sujeito|Objeto;der|ein Liter|**einen** Liter;die|eine Packung|eine Packung;das|ein Kilo|ein Kilo');
S_('Auf dem Markt', 'hundertzwanzig=cento e vinte (hundert + zwanzig)|alles (Das ist alles.)=tudo (É só isso.)');
S_('Was isst du gern?', 'das Sushi=o sushi');
S_('Speisekarte und Einkaufszettel', 'kein … mehr=não … mais (Wir haben kein Öl mehr.)|die Kartoffeln=as batatas (plural de die Kartoffel)');
S_('Was sind Sie von Beruf?', 'beruflich=profissionalmente (Was machst du beruflich?)|aber=mas');
S_('Eine kurze Nachricht', 'super=ótimo, legal');
['oliveira', 'vera', 'carla', 'mendes', 'web', 'recife', 'tim', 'max', 'lima', 'lukas', 'curitiba', 'julia', 'feijoada', 'linde', 'gasthaus'].forEach((n) => NAMES.add(n));
NEW_LESSONS['n-buchstabieren'].rule = 'soletrar';
V('Zwei Bücher, drei Stühle',
  'V:No plural, o artigo é sempre die;Singular|der Stuhl|die Lampe|das Buch;Plural|die Stühle|die Lampen|die Bücher',
  'M:O plural em cinco formas;Fim|Singular|Plural;-e|der Hund|die Hund**e**;-n / -en|die Katze|die Katze**n**;-er|das Buch|die B**ü**ch**er**;-s|das Foto|die Foto**s**;nada|das Fenster|die Fenster');
V('Was sind Sie von Beruf?',
  'V:Masculino e feminino;der · ele|der Lehrer|der Koch|der Student;die · ela (+ in)|die Lehrerin|die Köchin|die Studentin',
  'F:Profissão com sein, sem artigo;Quem^s|sein^v|Profissão^p;Ich|bin|Koch.;Sie|ist|Ärztin.;Er|ist|Lehrer.');
V('Eine kurze Nachricht',
  'E:Depois do conector, a ordem não muda: sujeito + verbo;Ich koche gern,^c|aber^w|ich^s|tanze^v|nicht gern.^c',
  'P:Uma mensagem curta, parte por parte;Abertura=Hallo Lukas!;Quem sou=Ich heiße Ana und …;De onde sou=Ich komme aus …, aber …;Pergunta=… oder …?;Despedida=Viele Grüße, Ana');


/* ---------- 2. sequência nova ---------- */
// Números = índice original da lição (antes da reordenação). Texto = lição nova ainda não escrita (aparece como "em preparação").
const SEQ = [
  { lv: 'A1', n: 'Primeiros contatos', l: [0, 1, 'n-buchstabieren', 'n-alter', 5, 'n-formular'] },
  { lv: 'A1', n: 'Pessoas e coisas', l: [2, 3, 'n-plural', 'n-beruf', 4, 'n-nachricht'] },
  { lv: 'A1', n: 'Horários e rotina', l: [6, 9, 'n-termin', 10, 11, 'n-einladung'] },
  { lv: 'A1', n: 'Comer e comprar', l: [7, 'n-markt', 8, 'n-gern', 14, 'n-einkaufszettel'] },
  { lv: 'A1', n: 'Casa e cidade', l: [12, 13, 'n-wohnungsanzeige', 15, 'n-zurpost', 'n-schilder'] },
  { lv: 'A1', n: 'Saúde e fim de semana', l: [16, 'n-arzttermin', 17, 18, 'n-wochenende', 'n-postkarte'] },
  { lv: 'A2', n: 'Biografia e passado', l: [19, 'n-lebenslauf', 20, 'n-ausbildung', 23, 'n-email'] },
  { lv: 'A2', n: 'Casa e vizinhança', l: [21, 27, 28, 26, 'n-hausordnung', 'n-zettel-nachbarn'] },
  { lv: 'A2', n: 'Compras e serviços', l: [22, 31, 32, 'n-umtauschen', 'n-bankpost', 'n-bestellung'] },
  { lv: 'A2', n: 'Trabalho', l: [30, 'n-arbeitstag', 35, 38, 'n-telefon', 'n-stellenanzeige'] },
  { lv: 'A2', n: 'Saúde', l: [33, '?Ich brauche einen Termin', '?In der Apotheke', '?Gesund leben', '?Im Notfall', '?Ler e escrever: Krank melden'] },
  { lv: 'A2', n: 'Viagens', l: [29, 34, '?Am Bahnhof und am Flughafen', 25, '?Probleme auf der Reise', '?Ler e escrever: Eine Hotelbewertung'] },
  { lv: 'A2', n: 'Festas e relações', l: [39, 40, 36, 37, 24, '?Ler e escrever: Ein Blogbeitrag'] },
  { lv: 'A2', n: 'Opinião e mídia', l: [41, '?Medien im Alltag', '?Dafür oder dagegen?', '?Kurze Nachrichten', '?Prüfungstraining A2', '?Ler e escrever: Ein Forumsbeitrag'] },
];
// B1 a C2 continuam como estão: cada semana antiga vira um módulo, com o nível da semana.
for (let w = 7; w < 35; w++) SEQ.push({ lv: PHASES.find((p) => w >= p.weeks[0] && w < p.weeks[1]).id, l: [0, 1, 2, 3, 4, 5].map((r) => w * 6 + r) });
// Textos da semana: a semana antiga (1–7) vai para o módulo que trata do mesmo assunto; do B1 em diante, +7.
const TEXT_MOD = { 1: 1, 2: 3, 3: 4, 4: 6, 5: 8, 6: 11, 7: 12 };

/* ---------- 3. reordenação ---------- */
const MODS = [], DAYS = [], LBYSID = {}, LMOD = [], LDAY = [];
(function buildSeq() {
  const old = LESSONS.slice(), seen = new Set();
  old.forEach((l) => { if (!l.nova) { l.oi = l.i; l.sid = String(l.i); } LBYSID[l.sid] = l; });
  LESSONS.length = 0;
  SEQ.forEach((m, w) => {
    const li = [], plan = [];
    m.l.forEach((x) => {
      if (typeof x === 'string' && x[0] === '?') { plan.push({ falta: x.slice(1) }); return; }
      const l = LBYSID[String(x)];
      if (!l) throw new Error('Sequência: lição desconhecida ' + x);
      if (seen.has(l.sid)) throw new Error('Sequência: lição repetida ' + x);
      seen.add(l.sid); l.i = LESSONS.length; LESSONS.push(l); li.push(l.i); plan.push({ i: l.i });
    });
    MODS.push({ lv: m.lv, n: m.n || '', li, plan });
    li.forEach((i, r) => { LMOD[i] = w; LDAY[i] = DAYS.length + 1; DAYS.push({ w, r, li: i, review: false }); });
    DAYS.push({ w, r: li.length, review: true });
  });
  const miss = old.filter((l) => !seen.has(l.sid));
  if (miss.length) throw new Error('Sequência: lições fora da trilha: ' + miss.map((l) => l.sid).join(', '));
  // níveis passam a ser faixas de módulos
  PHASES.forEach((p) => {
    const ws = MODS.map((m, w) => (m.lv === p.id ? w : -1)).filter((w) => w >= 0);
    p.weeks = [ws[0], ws[ws.length - 1] + 1];
    p.when = ws.length > 1 ? `Módulos ${ws[0] + 1}–${ws[ws.length - 1] + 1}` : `Módulo ${ws[0] + 1}`;
  });
  TEXTS.forEach((t) => { t.w = TEXT_MOD[t.w] || t.w + 7; });
})();
const modLs = (w) => (MODS[w] ? MODS[w].li.map((i) => LESSONS[i]) : []);
const firstDayOf = (w) => { const i = DAYS.findIndex((x) => x.w === w); return i < 0 ? DAYS.length : i + 1; };

// Progresso salvo antes da reordenação: dias, tarefas de casa e diário passam para as posições novas.
// As cartas não mudam: as chaves já usam o índice original. O registro antigo fica em S.doneOld.
// A versão 1 da sequência só tinha estas lições novas (Módulo 1). Para quem migrou antes de S.seqDays existir,
// a ordem antiga é a atual sem as outras lições novas. Depois disso, S.seqDays guarda a ordem e basta.
const SEQ_V1_NEW = ['n-buchstabieren', 'n-alter', 'n-formular'];
const SEQ_ADDED_V2 = Object.keys(NEW_LESSONS).filter((k) => !SEQ_V1_NEW.includes(k));
const seqKeys = () => DAYS.map((d) => (d.review ? 'r' + d.w : LESSONS[d.li].sid));
// Quando a sequência muda (lições inseridas), os dias e os índices de lição mudam: tudo é remapeado pelo sid.
function remapSeq(S, oldKeys) {
  const nk = seqKeys(), day = {}; nk.forEach((k, i) => { day[k] = i + 1; });
  const oldSids = oldKeys.filter((k) => !/^r\d+$/.test(k));
  const mapDays = (obj, keepReview) => {
    const out = {};
    Object.entries(obj || {}).forEach(([d, v]) => { const k = oldKeys[+d - 1]; if (k && day[k] && (keepReview || !/^r\d+$/.test(k))) out[day[k]] = v; });
    return out;
  };
  const nd = mapDays(S.done, false);
  // avaliação do módulo só continua valendo se todas as lições do módulo (inclusive as novas) estiverem feitas
  Object.entries(S.done || {}).forEach(([d, v]) => { const k = oldKeys[+d - 1]; if (!/^r\d+$/.test(k || '')) return;
    const w = +k.slice(1); if (MODS[w] && MODS[w].li.every((i) => nd[LDAY[i]])) nd[day[k]] = v; });
  S.done = nd;
  S.lstep = mapDays(S.lstep, true);
  const hw = {}; Object.entries(S.hw || {}).forEach(([i, v]) => { const l = LBYSID[oldSids[+i]]; hw[l ? l.i : i] = v; }); S.hw = hw;
  (S.diary || []).forEach((x) => { if (!x.x && x.l != null && LBYSID[oldSids[x.l]]) x.l = LBYSID[oldSids[x.l]].i; });
}
function migrateSeq(S) {
  if (S.seqV) {
    const now = seqKeys(), old = S.seqDays || now.filter((k) => !SEQ_ADDED_V2.includes(k));
    if (old.join() !== now.join()) remapSeq(S, old);
    S.seqDays = now; S.seqV = 2;
    return;
  }
  const oldDay = (d) => { const w = Math.floor((d - 1) / 7), r = (d - 1) % 7; return { w, r, review: r === 6, oi: w * 6 + r }; };
  const nd = {}, reviews = {};
  Object.entries(S.done || {}).forEach(([d, v]) => {
    const o = oldDay(+d);
    if (o.review) { reviews[o.w] = v; return; }
    const l = LBYSID[String(o.oi)]; if (l) nd[LDAY[l.i]] = v;
  });
  MODS.forEach((m, w) => {
    if (!m.li.length || !m.li.every((i) => nd[LDAY[i]])) return;
    const ow = Math.floor(LESSONS[m.li[0]].oi / 6);
    if (reviews[ow]) nd[firstDayOf(w) + m.li.length] = reviews[ow];
  });
  if (Object.keys(S.done || {}).length) S.doneOld = S.done;
  S.done = nd;
  const hw = {}; Object.entries(S.hw || {}).forEach(([k, v]) => { const l = LBYSID[k]; hw[l ? l.i : k] = v; }); S.hw = hw;
  (S.diary || []).forEach((x) => { if (!x.x && x.l != null && LBYSID[String(x.l)]) x.l = LBYSID[String(x.l)].i; });
  S.seqV = 2; S.seqDays = seqKeys();
}
