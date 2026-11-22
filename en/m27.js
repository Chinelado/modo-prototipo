// Inglês · B2 · Módulo 27 · Linking ideas (Ligar ideias). Formato de en/curso.js.

NL('en-nondefining', {
  de: 'My sister, who lives in Rome', pt: 'Relativas explicativas, entre vírgulas', gt: 'who / which / where / whose entre vírgulas · sem that',
  gx: 'A relativa explicativa acrescenta uma informação extra, entre vírgulas: My sister, who lives in Rome, is a doctor. Sem ela, a frase continua completa. Nesse tipo de relativa não se usa that, e o pronome nunca pode ser omitido. Use who (pessoas), which (coisas), where (lugares) e whose (de quem).',
  ge: "My sister, who lives in Rome, is a doctor.=A minha irmã, que mora em Roma, é médica.|The Louvre, which opened in 1793, is the world's most visited museum.=O Louvre, que abriu em 1793, é o museu mais visitado do mundo.|Porto, where my parents met, is a beautiful city.=O Porto, onde os meus pais se conheceram, é uma cidade linda.",
  v: 'who=que, quem (pessoas)=👤|which=que, o qual (coisas)=📦|where=onde=📍|whose=cujo, de quem=🔑|extra information=informação extra=➕|comma=vírgula=❜|defining=restritiva=🎯|non-defining=explicativa=💬|whom=quem (formal)=🎩|clause=oração=🧩',
  x: 'a doctor=médica|the most visited=o mais visitado|museum=museu|parents met=pais se conheceram|beautiful=linda|built=construído|novel=romance|award=prêmio|neighbor=vizinho|famous=famoso',
  dlg: "Who's that man with your brother?=Quem é aquele homem com o seu irmão?|That's Mr. Lee, who teaches at my old school.=É o sr. Lee, que dá aula na minha antiga escola.|The one whose son is a famous chef?=Aquele cujo filho é um chef famoso?|Yes! His son, who is only 25, already has his own restaurant.=Isso! O filho dele, que tem só 25 anos, já tem o próprio restaurante.",
  cz: 'My sister, ___ lives in Rome, is a doctor.=who=that=which|The Louvre, ___ opened in 1793, is huge.=which=that=who|Mr. Lee, ___ son is a chef, teaches music.=whose=who=who\'s',
  whys: 'pessoa, entre vírgulas: who (nunca that)|coisa, entre vírgulas: which (nunca that)|de quem: whose',
  pts: 'A relativa explicativa dá uma informação extra e fica entre vírgulas: My brother, who lives in Paris, is coming.|Não se usa that, e o pronome não pode sair: The car, which I bought last year, is red. (e não "The car, that I bought…").|who para pessoas, which para coisas, where para lugares, when para tempo, whose para posse: Ana, whose husband is Italian, speaks four languages.|Compare: My sister who lives in Rome (tenho várias irmãs; falo da que mora em Roma) × My sister, who lives in Rome (só tenho uma irmã; a vírgula muda o sentido).',
  ex: "Ana, whose husband is Italian, speaks four languages.=A Ana, cujo marido é italiano, fala quatro línguas.|The car, which I bought last year, is already broken.=O carro, que eu comprei ano passado, já está quebrado.|In 2010, when I was in college, I lived in London.=Em 2010, quando eu estava na faculdade, eu morava em Londres.|My boss, whom you met yesterday, wants to talk to you.=O meu chefe, que você conheceu ontem, quer falar com você.",
  bd: ['My_sister,=S|who_lives_in_Rome,=C^informação extra, entre vírgulas|is=V|a_doctor.=C', 'A minha irmã, que mora em Roma, é médica.'],
  rule: 'relativa_explicativa',
  hw: 'Escreva cinco frases sobre pessoas e lugares da sua vida com relativas explicativas entre vírgulas: use who, which, where, whose e when.',
  deep: `
Hoje você aprende a acrescentar **informação extra** no meio da frase, entre vírgulas. É assim que os textos em inglês ficam mais ricos e menos repetitivos.
# Passo 1: a informação extra
@ E:Entre vírgulas;My sister,^s|who lives in Rome,^c|is a doctor.^p
~ My sister, who lives in Rome, is a doctor. = A minha irmã, que mora em Roma, é médica.
~ The Louvre, which opened in 1793, is the world's most visited museum. = O Louvre, que abriu em 1793, é o museu mais visitado do mundo.
BR Tire o trecho entre vírgulas: "My sister is a doctor" continua completo. Por isso se chama **explicativa**.
# Passo 2: os pronomes
| Pronome | Para | Exemplo |
| who | pessoas | Mr. Lee, who teaches music, … |
| which | coisas | The car, which I bought, … |
| where | lugares | Porto, where my parents met, … |
| when | tempo | In 2010, when I was in college, … |
| whose | posse | Ana, whose husband is Italian, … |
~ Porto, where my parents met, is a beautiful city. = O Porto, onde os meus pais se conheceram, é uma cidade linda.
~ Ana, whose husband is Italian, speaks four languages. = A Ana, cujo marido é italiano, fala quatro línguas.
# Passo 3: nunca that
@ V:Com vírgulas;Errado|The car, that I bought, is red.;Certo|The car, which I bought, is red.
~ The car, which I bought last year, is already broken. = O carro, que eu comprei ano passado, já está quebrado.
~ The car, which I bought, is red. = O carro, que eu comprei, é vermelho.
! Entre vírgulas: **nunca that**, e o pronome **nunca some**.
# Passo 4: a vírgula muda o sentido
| Frase | Sentido |
| My sister who lives in Rome is a doctor. | Tenho mais de uma irmã: a de Roma é médica. |
| My sister, who lives in Rome, is a doctor. | Tenho uma irmã só; ela mora em Roma. |
~ My boss, whom you met yesterday, wants to talk to you. = O meu chefe, que você conheceu ontem, quer falar com você.
> Treine agora: apresente três pessoas da sua família com uma informação extra entre vírgulas.
? Pode usar that entre vírgulas? || Não: use who ou which.
? Qual pronome para "cujo"? || whose
? Qual pronome para lugares? || where
`,
});

NL('en-whichclause', {
  de: 'He was late, which annoyed me', pt: 'which comentando a frase inteira', gt: '…, which + verbo · all of which, most of whom',
  gx: 'which, depois de vírgula, pode comentar a frase inteira, e não só uma palavra: He was late again, which really annoyed me (o que me irritou). É o nosso "o que". Também há relativas com quantidade: I have three brothers, all of whom live abroad; She wrote ten books, most of which became films.',
  ge: "He was late again, which really annoyed me.=Ele se atrasou de novo, o que me irritou muito.|It rained all week, which meant we couldn't go to the beach.=Choveu a semana toda, o que significou que não pudemos ir à praia.|I have three brothers, all of whom live abroad.=Tenho três irmãos, todos os quais moram no exterior.",
  v: 'which=o que (sobre a frase)=💬|annoyed=irritou=😤|surprised=surpreendeu=😮|meant=significou=➡️|all of whom=todos os quais (pessoas)=👥|most of which=a maioria dos quais (coisas)=📚|none of whom=nenhum dos quais=🚫|some of which=alguns dos quais=🔢|both of which=ambos os quais=✌️|explains=explica=💡',
  x: 'abroad=no exterior|became films=viraram filmes|was cancelled=foi cancelado|got the job=conseguiu o emprego|a relief=um alívio|a shame=uma pena|made me laugh=me fez rir|was unexpected=foi inesperado|for free=de graça|in time=a tempo',
  dlg: "How was your trip to Lisbon?=Como foi a sua viagem para Lisboa?|Great! The flight was cancelled, which was a shame, but we got a free hotel.=Ótima! O voo foi cancelado, o que foi uma pena, mas ganhamos um hotel de graça.|Did you visit any museums?=Você visitou algum museu?|We visited five, most of which were free on Sundays.=Visitamos cinco, a maioria dos quais era de graça aos domingos.",
  cz: 'He was late again, ___ annoyed me.=which=that=what|I have three brothers, all of ___ live abroad.=whom=who=them|She wrote ten books, most of ___ became films.=which=them=what',
  whys: 'comentar a frase toda: , which (o que)|pessoas, depois de preposição: whom|coisas, depois de preposição: which',
  pts: ', which comenta a frase inteira: She passed the exam, which surprised everyone. É o nosso ", o que …".|Não use what nem that nesse caso: "He was late, what annoyed me" está errado.|Quantidade + of + whom (pessoas) / which (coisas): all of whom, most of which, some of whom, none of which, both of which.|É típico da escrita e da fala bem articulada: liga duas ideias numa frase só.',
  ex: "She passed the exam, which surprised everyone.=Ela passou na prova, o que surpreendeu todo mundo.|The tickets were free, which was a relief.=Os ingressos eram de graça, o que foi um alívio.|We interviewed twenty people, none of whom had heard of the brand.=Entrevistamos vinte pessoas, nenhuma das quais tinha ouvido falar da marca.|He told a joke, which made me laugh.=Ele contou uma piada, o que me fez rir.",
  bd: ['He_was_late_again,=C^a frase inteira|which=S^which: o que|really_annoyed=V|me.=OA', 'Ele se atrasou de novo, o que me irritou muito.'],
  rule: 'which_frase',
  hw: 'Escreva cinco frases sobre a sua semana em que , which comenta a frase inteira (… , which was great / a shame / a relief), e duas com all of whom ou most of which.',
  deep: `
Hoje você aprende a comentar uma frase inteira com **, which**: o nosso ", **o que** …". E a combinar quantidades com relativas.
# Passo 1: , which = , o que
@ E:Comentando a frase;He was late again,^c|which^s|really annoyed me.^p
~ He was late again, which really annoyed me. = Ele se atrasou de novo, o que me irritou muito.
~ It rained all week, which meant we couldn't go to the beach. = Choveu a semana toda, o que significou que não pudemos ir à praia.
BR Em português dizemos ", **o que** me irritou". Em inglês é **, which**, e nunca "what".
# Passo 2: comentários comuns
| Em inglês | Em português |
| …, which was a shame. | …, o que foi uma pena. |
| …, which was a relief. | …, o que foi um alívio. |
| …, which surprised everyone. | …, o que surpreendeu todo mundo. |
| …, which made me laugh. | …, o que me fez rir. |
~ She passed the exam, which surprised everyone. = Ela passou na prova, o que surpreendeu todo mundo.
~ The tickets were free, which was a relief. = Os ingressos eram de graça, o que foi um alívio.
# Passo 3: quantidade + of whom / of which
@ M:Quantidade e relativa;Para|Exemplo;pessoas|three brothers, all of whom live abroad;coisas|ten books, most of which became films;nenhum|twenty people, none of whom knew
~ I have three brothers, all of whom live abroad. = Tenho três irmãos, todos os quais moram no exterior.
! Depois de of: **whom** para pessoas, **which** para coisas. Nunca "all of them" nesse lugar: isso pede outra frase.
# Passo 4: na escrita
~ We interviewed twenty people, none of whom had heard of the brand. = Entrevistamos vinte pessoas, nenhuma das quais tinha ouvido falar da marca.
~ He told a joke, which made me laugh. = Ele contou uma piada, o que me fez rir.
> Treine agora: conte algo que deu errado nesta semana e comente com , which was …
? Como se diz ", o que foi uma pena"? || , which was a shame.
? "He was late, what annoyed me" está certo? || Não: , which annoyed me.
? Pessoas depois de all of: who ou whom? || whom
`,
});

NL('en-participle', {
  de: 'Having finished the work', pt: 'Orações com particípio', gt: 'Walking home, … · Having finished, … · Built in 1900, …',
  gx: 'Para ligar duas ações com o mesmo sujeito sem repetir, o inglês usa orações com particípio: Walking home, I saw an accident (enquanto voltava para casa…). Having finished the work, she went out (depois de terminar…). Built in 1900, the house is very old (construída em 1900…). O sujeito das duas partes tem de ser o mesmo.',
  ge: "Walking home, I saw an old friend.=Voltando para casa, encontrei um velho amigo.|Having finished the work, she went for a walk.=Depois de terminar o trabalho, ela foi dar uma volta.|Built in 1900, the house needs a lot of repairs.=Construída em 1900, a casa precisa de muitos reparos.",
  v: 'walking=andando, voltando=🚶|having finished=depois de terminar=✅|built=construído=🏗️|feeling=sentindo-se=😌|not knowing=sem saber=❓|seen from=vista de=👀|written by=escrito por=✍️|realizing=percebendo=💡|repairs=reparos=🔧|while=enquanto=⏳',
  x: 'an old friend=um velho amigo|went for a walk=foi dar uma volta|needs=precisa|feeling tired=sentindo-se cansado|went to bed early=foi dormir cedo|not knowing what to do=sem saber o que fazer|called the police=chamou a polícia|from the plane=do avião|tiny=minúsculo|on arrival=na chegada',
  dlg: "How did you find out about the job?=Como você ficou sabendo da vaga?|Reading the news online, I saw an ad.=Lendo as notícias na internet, vi um anúncio.|And you applied right away?=E você se candidatou na hora?|Yes. Having read the description, I knew it was perfect for me.=Sim. Depois de ler a descrição, eu soube que era perfeita para mim.",
  cz: '___ home, I saw an old friend. (walk)=Walking=Walked=Walk|___ finished the work, she went out.=Having=Have=Had|___ in 1900, the house is very old. (build)=Built=Building=Having',
  whys: 'ação ao mesmo tempo: -ing|ação anterior: having + particípio|sentido passivo (foi construída): particípio',
  pts: '-ing: duas ações ao mesmo tempo, ou uma causa: Walking home, I saw him. Feeling tired, I went to bed early (como estava cansada…).|Having + particípio: uma ação terminada antes da outra: Having finished the report, he left.|Particípio (sentido passivo): Built in 1900, the house … / Written in 1949, the novel …|O sujeito tem de ser o mesmo nas duas partes. "Walking home, the rain started" está errado: a chuva não estava andando!',
  ex: "Feeling tired, I went to bed early.=Como estava cansada, fui dormir cedo.|Not knowing what to do, she called the police.=Sem saber o que fazer, ela chamou a polícia.|Seen from the plane, the city looks tiny.=Vista do avião, a cidade parece minúscula.|Having read the description, I applied.=Depois de ler a descrição, me candidatei.",
  bd: ['Having_finished=V^having + particípio: depois de terminar|the_work,=OA|she=S^o mesmo sujeito|went_for_a_walk.=V', 'Depois de terminar o trabalho, ela foi dar uma volta.'],
  rule: 'participio',
  hw: 'Reescreva cinco frases que você escreveu antes (com when, because, after) usando orações com particípio: -ing, having + particípio e particípio passivo.',
  deep: `
Hoje você aprende a ligar ações de um jeito mais elegante e conciso: as **orações com particípio**. Muito usadas em histórias, notícias e textos formais.
# Passo 1: -ing: ao mesmo tempo ou causa
@ E:Ao mesmo tempo;Walking home,^c|I^s|saw an old friend.^p
~ Walking home, I saw an old friend. = Voltando para casa, encontrei um velho amigo.
~ Feeling tired, I went to bed early. = Como estava cansada, fui dormir cedo.
~ Not knowing what to do, she called the police. = Sem saber o que fazer, ela chamou a polícia.
BR É bem parecido com o nosso gerúndio: "**Voltando** para casa, encontrei…". E a negativa é **Not** + -ing.
# Passo 2: having + particípio: antes
@ P:A ordem das ações;Primeiro=Having finished the work,;Depois=she went for a walk.
~ Having finished the work, she went for a walk. = Depois de terminar o trabalho, ela foi dar uma volta.
~ Having read the description, I applied. = Depois de ler a descrição, me candidatei.
# Passo 3: o particípio: sentido passivo
| Oração | Equivale a |
| Built in 1900, the house … | The house, which was built in 1900, … |
| Seen from the plane, the city … | When it is seen from the plane, … |
| Written in 1949, the novel … | The novel, which was written in 1949, … |
~ Built in 1900, the house needs a lot of repairs. = Construída em 1900, a casa precisa de muitos reparos.
~ Seen from the plane, the city looks tiny. = Vista do avião, a cidade parece minúscula.
# Passo 4: o mesmo sujeito
@ V:O sujeito;Errado|Walking home, the rain started.;Certo|Walking home, I got caught in the rain.
! A oração com particípio "pega emprestado" o sujeito da frase principal. Se ele não combina, a frase fica sem sentido.
~ Walking home, I got caught in the rain. = Voltando para casa, peguei chuva.
> Treine agora: conte a sua manhã em três frases com orações de particípio: Having …, …ing, e uma com Not …ing.
? Como se diz "depois de terminar o trabalho"? || Having finished the work, …
? "Walking home, the rain started" está certo? || Não: o sujeito tem de ser quem andava.
? A negativa de "Knowing" é…? || Not knowing
`,
});

NL('en-sitting', {
  de: 'The woman sitting next to me', pt: 'Relativas reduzidas', gt: 'the man sitting there · a book written in 1900 · the first to arrive',
  gx: 'Muitas relativas podem ser encurtadas: The woman who is sitting next to me → The woman sitting next to me. A book which was written in 1900 → A book written in 1900. Depois de the first, the last, the only, usa-se to + verbo: She was the first to arrive. Isso deixa o texto mais leve e natural.',
  ge: "The woman sitting next to me was very friendly.=A mulher sentada ao meu lado era muito simpática.|I'm reading a book written in 1900.=Estou lendo um livro escrito em 1900.|She was the first to arrive at the party.=Ela foi a primeira a chegar na festa.",
  v: 'sitting=sentado=🪑|standing=em pé=🧍|wearing=usando=👕|written=escrito=✍️|made=feito=🔨|called=chamado=🏷️|the first to=o primeiro a=🥇|the last to=o último a=🏁|the only one to=o único a=☝️|leading to=que leva a=🛣️',
  x: 'next to me=ao meu lado|friendly=simpático|the guy wearing a hat=o cara de chapéu|the road leading to=a estrada que leva a|a town called=uma cidade chamada|made in Italy=feito na Itália|people living here=as pessoas que moram aqui|students taking the exam=alunos fazendo a prova|the car parked outside=o carro estacionado lá fora|left behind=deixado para trás',
  dlg: "Do you know the guy wearing the blue hat?=Você conhece o cara de chapéu azul?|Yes, that's Leo. He's the only one to finish the marathon in our group.=Sim, é o Leo. Ele é o único do nosso grupo a terminar a maratona.|Impressive! And the woman standing next to him?=Impressionante! E a mulher em pé do lado dele?|That's his wife. She runs a shop called \"Green Corner\".=É a esposa dele. Ela tem uma loja chamada \"Green Corner\".",
  cz: 'The woman ___ next to me was friendly. (sit)=sitting=sat=who sitting|I\'m reading a book ___ in 1900. (write)=written=writing=wrote|She was the first ___ arrive.=to=who=-',
  whys: 'who is sitting → sitting|which was written → written|depois de the first: to + verbo',
  pts: 'Relativa ativa → -ing: The man who is standing there → The man standing there. People who live here → People living here.|Relativa passiva → particípio: A car which was made in Italy → A car made in Italy. The documents that were left behind → The documents left behind.|the first / the last / the only (one) + to + verbo: He was the last to leave. She is the only one to speak Chinese.|Muito comum em descrições e notícias: The man arrested yesterday … / Students taking the exam must …',
  ex: "Students taking the exam must arrive by nine.=Os alunos que vão fazer a prova devem chegar até as nove.|The car parked outside is mine.=O carro estacionado lá fora é meu.|He was the last to leave the office.=Ele foi o último a sair do escritório.|I grew up in a town called Hope.=Cresci numa cidade chamada Hope.",
  bd: ['The_woman=S|sitting_next_to_me=C^who is sitting → sitting|was=V|very_friendly.=C', 'A mulher sentada ao meu lado era muito simpática.'],
  rule: 'relativa_reduzida',
  hw: 'Descreva uma foto com muitas pessoas usando cinco relativas reduzidas (the man wearing…, the girl sitting…) e escreva duas frases com the first to e the only one to.',
  deep: `
Hoje você aprende a **encurtar** as relativas. Em vez de "the woman who is sitting next to me", o inglês prefere "the woman **sitting** next to me".
# Passo 1: -ing no lugar de who is / which is
@ V:Encurtando;Longo|The woman who is sitting next to me …;Curto|The woman sitting next to me …
~ The woman sitting next to me was very friendly. = A mulher sentada ao meu lado era muito simpática.
~ Students taking the exam must arrive by nine. = Os alunos que vão fazer a prova devem chegar até as nove.
BR Repare que o português às vezes faz o mesmo: "a mulher **sentada** ao meu lado", "o cara **de** chapéu" (the guy **wearing** a hat).
# Passo 2: o particípio no lugar da passiva
@ V:Passiva encurtada;Longo|a book which was written in 1900;Curto|a book written in 1900
~ I'm reading a book written in 1900. = Estou lendo um livro escrito em 1900.
~ The car parked outside is mine. = O carro estacionado lá fora é meu.
| Longo | Curto |
| a car which was made in Italy | a car made in Italy |
| a town which is called Hope | a town called Hope |
~ I grew up in a town called Hope. = Cresci numa cidade chamada Hope.
# Passo 3: the first / the last / the only + to
| Em inglês | Em português |
| the first to arrive | o primeiro a chegar |
| the last to leave | o último a sair |
| the only one to finish | o único a terminar |
~ She was the first to arrive at the party. = Ela foi a primeira a chegar na festa.
~ He was the last to leave the office. = Ele foi o último a sair do escritório.
# Passo 4: descrever uma cena
| Pessoa | Descrição |
| the guy wearing a blue hat | o cara de chapéu azul |
| the woman standing next to him | a mulher em pé ao lado dele |
| people living here | as pessoas que moram aqui |
~ The man standing there is my uncle. = O homem em pé ali é o meu tio.
> Treine agora: olhe ao redor e descreva três pessoas ou objetos com -ing e com particípio.
? Encurte "the man who is sitting there": || the man sitting there
? Encurte "a book which was written in 1900": || a book written in 1900
? "o primeiro a chegar": || the first to arrive
`,
});

NL('en-notonly', {
  de: 'Not only… but also', pt: 'Acrescentar, explicar o motivo e a finalidade', gt: 'not only … but also · as well as · due to · so as to · so that',
  gx: 'Conectores para ligar ideias com precisão. Adição: not only … but also, as well as, in addition, moreover. Causa: due to / because of + substantivo, since / as + frase. Finalidade: in order to / so as to + verbo, so that + frase. Resultado: as a result, therefore.',
  ge: "She not only speaks English but also Japanese.=Ela não só fala inglês como também japonês.|The flight was delayed due to bad weather.=O voo atrasou devido ao mau tempo.|I left early so as to avoid the traffic.=Saí cedo para evitar o trânsito.",
  v: 'not only … but also=não só … como também=➕|as well as=além de=🤝|moreover=além disso (formal)=📎|due to=devido a=🔗|since=já que=💡|in order to=a fim de=🎯|so as to=para (formal)=🏹|so that=para que=🔑|as a result=como resultado=➡️|therefore=portanto=∴',
  x: 'delayed=atrasado|bad weather=mau tempo|avoid=evitar|traffic=trânsito|cheaper=mais barato|healthier=mais saudável|prices went up=os preços subiram|save money=economizar|the strike=a greve|everyone could hear=todos pudessem ouvir',
  dlg: "Why did you choose this university?=Por que você escolheu esta universidade?|It's not only cheap but also close to home.=Não só é barata como também fica perto de casa.|And the course?=E o curso?|It's excellent. Moreover, it offers a year abroad, so I can improve my English.=É excelente. Além disso, oferece um ano no exterior, então posso melhorar o meu inglês.",
  cz: 'She not only speaks English ___ also Japanese.=but=and=or|The flight was delayed ___ to bad weather.=due=because=since|I left early so ___ to avoid the traffic.=as=that=for',
  whys: 'not only … but also|devido a: due to + substantivo|finalidade formal: so as to + verbo',
  pts: 'Adição: not only … but also (She is not only smart but also kind), as well as + substantivo ou -ing (As well as teaching, she writes books), in addition / moreover / furthermore (no início da frase, mais formais).|Causa: due to / because of / owing to + substantivo (due to the strike); since / as + frase (Since it was late, we left).|Finalidade: in order to / so as to + verbo (in order to save money); so that + frase com can / could (I spoke slowly so that everyone could understand).|Resultado: as a result, therefore, consequently: Prices went up. As a result, sales fell.',
  ex: "As well as teaching, she writes books.=Além de dar aula, ela escreve livros.|Since it was late, we took a taxi.=Já que era tarde, pegamos um táxi.|I spoke slowly so that everyone could understand.=Falei devagar para que todos pudessem entender.|Prices went up. As a result, sales fell.=Os preços subiram. Como resultado, as vendas caíram.",
  bd: ['She=S|not_only=C^não só|speaks_English=V|but_also=C^como também|Japanese.=OA', 'Ela não só fala inglês como também japonês.'],
  rule: 'conectores_adicao',
  hw: 'Escreva um parágrafo defendendo uma escolha sua (cidade, curso, emprego) com not only … but also, as well as, due to, so as to e as a result.',
  deep: `
Hoje você aprende conectores para ligar ideias com **precisão**: acrescentar, explicar a causa, dizer a finalidade e o resultado. É o que dá coesão a um texto B2.
# Passo 1: adição
@ P:Acrescentar ideias;Na frase=not only … but also / as well as;No início=In addition, / Moreover, / Furthermore,
~ She not only speaks English but also Japanese. = Ela não só fala inglês como também japonês.
~ As well as teaching, she writes books. = Além de dar aula, ela escreve livros.
BR **not only … but also** é o nosso "não só … como também". Depois de **as well as**, use substantivo ou -ing.
# Passo 2: causa
| Conector | Depois vem | Exemplo |
| due to / because of | substantivo | due to bad weather |
| since / as | frase | Since it was late, … |
~ The flight was delayed due to bad weather. = O voo atrasou devido ao mau tempo.
~ Since it was late, we took a taxi. = Já que era tarde, pegamos um táxi.
# Passo 3: finalidade
@ M:Para quê;Conector|Exemplo;in order to + verbo|in order to save money;so as to + verbo|so as to avoid the traffic;so that + frase|so that everyone could understand
~ I left early so as to avoid the traffic. = Saí cedo para evitar o trânsito.
~ I spoke slowly so that everyone could understand. = Falei devagar para que todos pudessem entender.
! A negativa: **so as not to** / **in order not to** + verbo: so as not to wake the baby.
# Passo 4: resultado
| Em inglês | Em português |
| As a result, … | Como resultado, … |
| Therefore, … | Portanto, … |
| Consequently, … | Consequentemente, … |
~ Prices went up. As a result, sales fell. = Os preços subiram. Como resultado, as vendas caíram.
> Treine agora: explique por que você estuda inglês com so as to, not only … but also e as a result.
? "não só … como também": || not only … but also
? Depois de due to vem…? || um substantivo: due to the rain
? Negativa de so as to: || so as not to
`,
});

NL('en-biography', {
  de: 'A short biography', pt: 'Ler e escrever uma biografia', gt: 'relativas explicativas + orações com particípio + conectores',
  gx: 'Uma biografia curta conta a vida de alguém em ordem, com datas, e usa as estruturas deste módulo para ligar as ideias: Born in Warsaw in 1867, Marie Curie … / She moved to Paris, where she studied … / Having won the Nobel Prize, she … / which made her the first person to …',
  ge: "Born in Warsaw in 1867, Marie Curie moved to Paris in 1891.=Nascida em Varsóvia em 1867, Marie Curie se mudou para Paris em 1891.|She studied at the Sorbonne, where she met Pierre Curie.=Ela estudou na Sorbonne, onde conheceu Pierre Curie.|She won a second Nobel Prize in 1911, which made her the first person to win two.=Ela ganhou um segundo Prêmio Nobel em 1911, o que fez dela a primeira pessoa a ganhar dois.",
  v: 'born=nascido=👶|grew up=cresceu=🌱|moved to=se mudou para=🚚|studied=estudou=📚|married=se casou com=💍|won=ganhou=🏆|died=morreu=🕯️|career=carreira=💼|achievement=conquista=⭐|legacy=legado=🏛️',
  x: 'Nobel Prize=Prêmio Nobel|physics=física|chemistry=química|research=pesquisa|radioactivity=radioatividade|scientist=cientista|the first woman=a primeira mulher|in her honor=em homenagem a ela|throughout her life=ao longo da vida|later=mais tarde',
  dlg: "Who are you writing about for the school project?=Sobre quem você está escrevendo para o trabalho da escola?|Marie Curie, who won two Nobel Prizes.=Marie Curie, que ganhou dois Prêmios Nobel.|Wow. Where was she from?=Nossa. De onde ela era?|Poland. Having finished school there, she moved to Paris to study.=Da Polônia. Depois de terminar a escola lá, ela se mudou para Paris para estudar.",
  cz: '___ in Warsaw in 1867, she moved to Paris. (nascida)=Born=Borned=Having born|She studied at the Sorbonne, ___ she met Pierre.=where=which=that|She won a second prize, ___ made her famous.=which=what=that',
  whys: 'nascida: born|lugar, entre vírgulas: where|comentando a frase: , which',
  pts: 'Organize em ordem cronológica, com datas: In 1891, … / Two years later, … / By 1903, … / In the following years, …|Use relativas explicativas para a informação extra: She studied at the Sorbonne, where she met Pierre.|Use orações com particípio para ligar ações: Born in Warsaw, … / Having finished school, … / Working with her husband, …|Feche com o legado: Today, she is remembered as … / Her work led to … / Many places are named in her honor.',
  ex: "Working with her husband, she discovered two new elements.=Trabalhando com o marido, ela descobriu dois novos elementos.|In 1903, she became the first woman to win a Nobel Prize.=Em 1903, ela se tornou a primeira mulher a ganhar um Prêmio Nobel.|Today, she is remembered as a great scientist.=Hoje, ela é lembrada como uma grande cientista.|Her research led to important medical treatments.=A pesquisa dela levou a tratamentos médicos importantes.",
  bd: ['Born_in_Warsaw_in_1867,=C^particípio: nascida|Marie_Curie=S|moved=V|to_Paris_in_1891.=L', 'Nascida em Varsóvia em 1867, Marie Curie se mudou para Paris em 1891.'],
  rule: 'biografia',
  le: {
    texto: {
      t: 'Marie Curie (1867–1934)', kind: 'biografia', voz: 'b',
      intro: 'Uma biografia curta de uma cientista famosa. Leia e responda.',
      paras: ['Born in Warsaw in 1867, Maria Sklodowska grew up in a family of teachers. Women could not go to university in Poland at that time, so she moved to Paris in 1891, where she studied physics and mathematics.', 'At the Sorbonne she met Pierre Curie, whom she married in 1895. Working together, they discovered two new elements, which they called polonium and radium.', 'In 1903, Marie and Pierre shared the Nobel Prize in Physics with Henri Becquerel. She was the first woman to win a Nobel Prize.', 'Having lost Pierre in a street accident in 1906, she continued their research alone. In 1911 she won the Nobel Prize in Chemistry, which made her the first person to win two Nobel Prizes.', 'Marie Curie died in 1934. Today, she is remembered not only as a brilliant scientist but also as a symbol for women in science.'],
      qs: [
        { q: 'Por que ela se mudou para Paris?', o: ['as mulheres não podiam entrar na universidade na Polônia', 'o marido dela morava lá', 'ganhou uma bolsa da Sorbonne'], a: 0 },
        { q: 'O que o casal descobriu trabalhando junto?', o: ['dois novos elementos: polônio e rádio', 'a eletricidade', 'os raios X'], a: 0 },
        { q: 'O que aconteceu em 1906?', o: ['Pierre morreu num acidente de rua', 'ela ganhou o segundo Nobel', 'eles se casaram'], a: 0 },
        { q: 'Por que o Nobel de 1911 foi especial?', o: ['ela foi a primeira pessoa a ganhar dois Nobel', 'foi o primeiro Nobel de química', 'ela dividiu com o marido'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva uma biografia', tipo: 'form', ok: 'Biografia escrita corretamente.',
      pede: 'Escreva uma biografia curta de alguém que você admira (famoso ou da sua família). Uma frase por linha.',
      campos: [
        { l: 'Birth', d: 'Born in … in …, …', re: '^born in\\b', f: 'iu', err: 'Comece com o nascimento, em oração de particípio: Born in Recife in 1950, my grandmother …', bad: [['^borned\\b', 'O particípio é <b>born</b>.']] },
        { l: 'Extra information', d: '…, where / who / which …', re: ',\\s*(where|who|whom|which|whose|when)\\b', f: 'iu', err: 'Acrescente uma informação extra entre vírgulas: She moved to São Paulo, where she …', bad: [[',\\s*that\\b', 'Entre vírgulas, não use that: use <b>who</b> ou <b>which</b>.']] },
        { l: 'Two actions', d: 'Having …, … / …ing …, …', re: '^(having|working|living|after (finishing|leaving|getting|moving)|\\p{L}+ing)\\b.*,', f: 'iu', err: 'Ligue duas ações com particípio: Having finished school, she …' },
        { l: 'Achievement', d: 'the first … to … / , which …', re: '\\bthe (first|only|last)\\b.*\\bto\\b|,\\s*which\\b', f: 'iu', err: 'Fale de uma conquista: She was the first in her family to go to university.' },
        { l: 'Linking', d: 'not only … but also / as well as / as a result', re: '\\b(not only|as well as|as a result|in addition|moreover|due to|so as to|in order to|therefore)\\b', f: 'iu', err: 'Use um conector: As well as working, she …' },
        { l: 'Legacy', d: 'Today, … is remembered as …', re: '\\b(today|nowadays|still)\\b|\\bremembered\\b|\\blegacy\\b', f: 'iu', err: 'Feche com o legado: Today, she is remembered as …' },
      ],
      modelo: 'Born in Recife in 1950, my grandmother grew up on a farm. · In 1970 she moved to São Paulo, where she met my grandfather. · Having saved some money, she opened a small bakery. · She was the first woman in her family to run a business. · As well as working, she raised four children. · Today, she is remembered as a strong and generous woman.',
    },
  },
  hw: 'Escreva uma biografia de cerca de 150 palavras de uma pessoa que você admira, usando pelo menos duas relativas explicativas, duas orações com particípio e dois conectores.',
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo "Ligar ideias". A biografia é o gênero perfeito para usar tudo junto: relativas, particípios e conectores.
# Passo 1: em ordem, com datas
@ P:Uma biografia;Nascimento=Born in … in …,;Formação=She moved to …, where she studied …;Carreira=Having …, she …;Conquista=She was the first … to …;Legado=Today, she is remembered as …
~ Born in Warsaw in 1867, Marie Curie moved to Paris in 1891. = Nascida em Varsóvia em 1867, Marie Curie se mudou para Paris em 1891.
| Em inglês | Em português |
| Two years later, … | Dois anos depois, … |
| By 1903, … | Em 1903, já … |
| In the following years, … | Nos anos seguintes, … |
# Passo 2: a informação extra
~ She studied at the Sorbonne, where she met Pierre Curie. = Ela estudou na Sorbonne, onde conheceu Pierre Curie.
~ She won a second Nobel Prize in 1911, which made her the first person to win two. = Ela ganhou um segundo Prêmio Nobel em 1911, o que fez dela a primeira pessoa a ganhar dois.
BR Uma biografia sem relativas fica cheia de frases curtas e repetidas: "She studied at the Sorbonne. She met Pierre there." Com **where**, vira uma frase só.
# Passo 3: ligar ações
~ Working with her husband, she discovered two new elements. = Trabalhando com o marido, ela descobriu dois novos elementos.
~ In 1903, she became the first woman to win a Nobel Prize. = Em 1903, ela se tornou a primeira mulher a ganhar um Prêmio Nobel.
~ Having lost Pierre, she worked alone. = Depois de perder Pierre, ela trabalhou sozinha.
# Passo 4: o legado
| Em inglês | Em português |
| Today, she is remembered as … | Hoje, ela é lembrada como … |
| Her work led to … | O trabalho dela levou a … |
| … named in her honor | … com o nome dela, em homenagem |
~ Today, she is remembered as a great scientist. = Hoje, ela é lembrada como uma grande cientista.
~ Her research led to important medical treatments. = A pesquisa dela levou a tratamentos médicos importantes.
> Agora leia a biografia de Marie Curie e escreva a de alguém que você admira.
? Como começar com o nascimento? || Born in … in …, …
? Como dizer "a primeira mulher a ganhar"? || the first woman to win
? Como fechar uma biografia? || Today, she is remembered as …
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('My sister, who lives in Rome',
  'E:Entre vírgulas;My sister,^s|who lives in Rome,^c|is a doctor.^p',
  'P:Os pronomes;pessoas=who;coisas=which;lugares=where;tempo=when;posse=whose');
V('He was late, which annoyed me',
  'E:Comentando a frase;He was late again,^c|which^s|really annoyed me.^p',
  'M:Quantidade e relativa;Para|Exemplo;pessoas|all of whom;coisas|most of which;nenhum|none of whom');
V('Having finished the work',
  'P:Três orações com particípio;Ao mesmo tempo=Walking home, I …;Antes=Having finished, she …;Passivo=Built in 1900, the house …',
  'V:O sujeito;Errado|Walking home, the rain started.;Certo|Walking home, I got caught in the rain.');
V('The woman sitting next to me',
  'V:Encurtando;Longo|the woman who is sitting there;Curto|the woman sitting there',
  'P:Encurtar relativas;Ativa=who is sitting → sitting;Passiva=which was written → written;Ordem=the first to arrive');
V('Not only… but also',
  'P:Conectores;Adição=not only … but also / as well as;Causa=due to / since;Finalidade=so as to / so that;Resultado=as a result / therefore',
  'M:Para quê;Conector|Depois vem;in order to / so as to|verbo;so that|frase');
V('A short biography',
  'P:Uma biografia;Nascimento=Born in … in …,;Formação=…, where she studied …;Carreira=Having …, she …;Conquista=the first … to …;Legado=Today, she is remembered as …',
  'E:Particípio no início;Born in Warsaw,^c|Marie Curie^s|moved to Paris.^p');
S_('My sister, who lives in Rome', 'sister=irmã|lives=mora|Rome=Roma|doctor=médica|opened=abriu|world\'s=do mundo|visited=visitado|parents=pais|met=se conheceram|city=cidade|man=homem|brother=irmão|teaches=dá aula|old school=antiga escola|son=filho|chef=chef|only=só|already=já|own=próprio|restaurant=restaurante|music=música|husband=marido|Italian=italiano|speaks=fala|four languages=quatro línguas|car=carro|bought=comprei|last year=ano passado|broken=quebrado|college=faculdade|London=Londres|boss=chefe|yesterday=ontem|talk=falar|red=vermelho|huge=enorme|uncle=tio');
S_('He was late, which annoyed me', 'late=atrasado|again=de novo|really=muito|rained=choveu|all week=a semana toda|beach=praia|brothers=irmãos|live=moram|trip=viagem|Lisbon=Lisboa|flight=voo|hotel=hotel|visit=visitar|museums=museus|five=cinco|Sundays=domingos|wrote=escreveu|ten books=dez livros|passed=passou|exam=prova|everyone=todo mundo|tickets=ingressos|interviewed=entrevistamos|twenty people=vinte pessoas|heard of=ouvido falar de|brand=marca|told a joke=contou uma piada|week=semana|knew=sabia|great=ótimo');
S_('Having finished the work', 'walk=andar|home=casa|saw=vi|work=trabalho|house=casa|a lot of=muitos|find out=ficar sabendo|job=vaga|reading=lendo|news=notícias|online=na internet|ad=anúncio|applied=se candidatou|right away=na hora|read=lido|description=descrição|perfect=perfeita|city=cidade|looks=parece|plane=avião|rain=chuva|started=começou|got caught in the rain=peguei chuva|finish=terminar|report=relatório|left=saiu|novel=romance|accident=acidente|morning=manhã|very old=muito velha|went out=saiu');
S_('The woman sitting next to me', 'woman=mulher|book=livro|reading=lendo|party=festa|arrive=chegar|guy=cara|blue hat=chapéu azul|finish=terminar|marathon=maratona|group=grupo|impressive=impressionante|wife=esposa|runs=tem, administra|shop=loja|students=alunos|exam=prova|by nine=até as nove|mine=meu|leave=sair|office=escritório|grew up=cresci|town=cidade|man=homem|uncle=tio|documents=documentos|Italy=Itália|Chinese=chinês|speak=falar|arrested=preso|yesterday=ontem|photo=foto|people=pessoas');
S_('Not only… but also', 'speaks=fala|English=inglês|Japanese=japonês|flight=voo|weather=tempo|left early=saí cedo|choose=escolher|university=universidade|cheap=barata|close to home=perto de casa|course=curso|excellent=excelente|offers=oferece|a year abroad=um ano no exterior|improve=melhorar|teaching=dar aula|writes books=escreve livros|late=tarde|taxi=táxi|spoke slowly=falei devagar|understand=entender|prices=preços|sales fell=as vendas caíram|smart=inteligente|kind=gentil|wake=acordar|baby=bebê|rain=chuva|study=estudar|went up=subiram');
S_('A short biography', 'writing=escrevendo|school project=trabalho da escola|Poland=Polônia|finished school=terminou a escola|Warsaw=Varsóvia|Paris=Paris|Sorbonne=Sorbonne|second=segundo|first person=primeira pessoa|husband=marido|discovered=descobriu|new elements=novos elementos|became=se tornou|woman=mulher|great=grande|medical treatments=tratamentos médicos|important=importantes|family=família|teachers=professores|women=mulheres|university=universidade|at that time=naquela época|mathematics=matemática|married=se casou com|together=juntos|polonium=polônio|radium=rádio|shared=dividiram|lost=perdido|street accident=acidente de rua|continued=continuou|alone=sozinha|brilliant=brilhante|symbol=símbolo|science=ciência|famous=famoso|later=depois|following years=anos seguintes|named=com o nome|honor=homenagem|work=trabalho');
['rome', 'lee', 'porto', 'louvre', 'lisbon', 'leo', 'hope', 'marie', 'curie', 'pierre', 'maria', 'sklodowska', 'becquerel', 'henri', 'warsaw', 'sorbonne', 'recife'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'en-nondefining': {
    o: 'A relativa explicativa dá uma informação extra **entre vírgulas**: **My sister, who lives in Rome, is a doctor.** Nunca com that.',
    q: 'Para enriquecer descrições e textos sem criar frases curtas e repetidas.',
    p: 'A vírgula muda o sentido da frase, e é um ponto clássico das provas B2.',
  },
  'en-whichclause': {
    o: '**, which** comenta a frase inteira: **He was late, which annoyed me** (o que me irritou). E **all of whom / most of which**.',
    q: 'Para comentar fatos e ligar ideias numa só frase.',
    p: 'O brasileiro tende a dizer "what" no lugar de which. Aqui você corrige isso.',
  },
  'en-participle': {
    o: 'Orações com particípio: **Walking home, I…** (ao mesmo tempo), **Having finished, she…** (antes), **Built in 1900, the house…** (passivo).',
    q: 'Para narrar e escrever de forma concisa e elegante.',
    p: 'É uma das marcas do inglês escrito avançado.',
  },
  'en-sitting': {
    o: 'Relativas reduzidas: **the woman sitting next to me**, **a book written in 1900**, **the first to arrive**.',
    q: 'Para descrever pessoas, objetos e cenas com leveza.',
    p: 'Os nativos encurtam relativas o tempo todo. Reconhecer isso ajuda muito na leitura.',
  },
  'en-notonly': {
    o: 'Conectores de adição, causa, finalidade e resultado: **not only… but also**, **as well as**, **due to**, **so as to**, **so that**, **as a result**.',
    q: 'Para dar coesão a textos e argumentos.',
    p: 'A variedade de conectores é um dos critérios de nota da escrita B2.',
  },
  'en-biography': {
    o: 'Uma biografia curta: datas em ordem, **Born in…**, relativas explicativas, **Having…**, **the first… to** e o legado.',
    q: 'Para contar a vida de alguém por escrito.',
    p: 'É o gênero perfeito para juntar tudo do módulo.',
  },
});
Object.assign(CZH, {
  'en-nondefining': ['pessoa, entre vírgulas', 'coisa, entre vírgulas', 'de quem'],
  'en-whichclause': ['comentando a frase toda', 'pessoas depois de of', 'coisas depois de of'],
  'en-participle': ['ao mesmo tempo', 'ação anterior', 'sentido passivo'],
  'en-sitting': ['who is sitting → ?', 'which was written → ?', 'the first + ?'],
  'en-notonly': ['not only … ___ also', 'devido a', 'so ___ to'],
  'en-biography': ['nascida', 'lugar, entre vírgulas', 'comentando a frase'],
});
Object.assign(OBJ, {
  'en-nondefining': { o: 'Consigo acrescentar informação extra com relativas explicativas entre vírgulas.', a: 'Você sabe por que não se usa that entre vírgulas?', ref: 'Relative clauses · B2' },
  'en-whichclause': { o: 'Consigo comentar uma frase inteira com , which e usar all of whom / most of which.', a: 'Você consegue dizer ", o que foi uma pena" em inglês?', ref: 'Relative clauses · B2' },
  'en-participle': { o: 'Consigo ligar ações com orações de particípio.', a: 'Você consegue dizer "depois de terminar o trabalho, ela saiu" com Having?', ref: 'Participle clauses · B2' },
  'en-sitting': { o: 'Consigo encurtar relativas com -ing, particípio e the first to.', a: 'Você consegue descrever pessoas numa foto com relativas reduzidas?', ref: 'Reduced relatives · B2' },
  'en-notonly': { o: 'Consigo ligar ideias com conectores de adição, causa, finalidade e resultado.', a: 'Você consegue usar not only … but also e so as to?', ref: 'Linking words · B2' },
  'en-biography': { o: 'Consigo ler e escrever uma biografia curta com ideias bem ligadas.', a: 'Você consegue escrever a vida de alguém com relativas e particípios?', ref: 'Writing a biography · B2' },
});
MOD_OBJ[26] = ['Consigo acrescentar informação extra com relativas entre vírgulas.', 'Consigo ligar ações com orações de particípio.', 'Consigo usar conectores de adição, causa e finalidade.', 'Consigo escrever uma biografia curta.'];

EN_MODS.push({ lv: 'B2', n: 'Ligar ideias', l: ['en-nondefining', 'en-whichclause', 'en-participle', 'en-sitting', 'en-notonly', 'en-biography'] });
