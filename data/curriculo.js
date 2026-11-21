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
['oliveira', 'vera', 'carla', 'mendes', 'web', 'recife', 'tim'].forEach((n) => NAMES.add(n));
NEW_LESSONS['n-buchstabieren'].rule = 'soletrar';

/* ---------- 2. sequência nova ---------- */
// Números = índice original da lição (antes da reordenação). Texto = lição nova ainda não escrita (aparece como "em preparação").
const SEQ = [
  { lv: 'A1', n: 'Primeiros contatos', l: [0, 1, 'n-buchstabieren', 'n-alter', 5, 'n-formular'] },
  { lv: 'A1', n: 'Pessoas e coisas', l: [2, 3, '?Zwei Bücher, drei Stühle', '?Was sind Sie von Beruf?', 4, '?Ler e escrever: Eine kurze Nachricht'] },
  { lv: 'A1', n: 'Horários e rotina', l: [6, 9, '?Am Montag um zehn', 10, 11, '?Ler e escrever: Eine Einladung'] },
  { lv: 'A1', n: 'Comer e comprar', l: [7, '?Auf dem Markt', 8, '?Was isst du gern?', 14, '?Ler e escrever: Speisekarte und Einkaufszettel'] },
  { lv: 'A1', n: 'Casa e cidade', l: [12, 13, '?Die Wohnungsanzeige', 15, '?Zur Post, zum Bahnhof', '?Ler e escrever: Schilder und Zettel'] },
  { lv: 'A1', n: 'Saúde e fim de semana', l: [16, '?Einen Termin machen', 17, 18, '?Mein Wochenende', '?Ler e escrever: Eine Postkarte'] },
  { lv: 'A2', n: 'Biografia e passado', l: [19, '?Mein Lebenslauf', 20, '?Schule und Ausbildung', 23, '?Ler e escrever: Eine E-Mail über mich'] },
  { lv: 'A2', n: 'Casa e vizinhança', l: [21, 27, 28, 26, '?Die Hausordnung', '?Ler e escrever: Ein Zettel an die Nachbarn'] },
  { lv: 'A2', n: 'Compras e serviços', l: [22, 31, 32, '?Umtauschen', '?Auf der Bank und der Post', '?Ler e escrever: Eine Online-Bestellung'] },
  { lv: 'A2', n: 'Trabalho', l: [30, '?Mein Arbeitstag', 35, 38, '?Am Telefon', '?Ler e escrever: Eine Stellenanzeige'] },
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
function migrateSeq(S) {
  if (S.seqV) return;
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
  S.seqV = 1;
}
