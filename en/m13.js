// Inglês · A2 · Módulo 13 · Celebrations and people (Festas e relações). Formato de en/curso.js.

NL('en-birthday', {
  de: 'Happy birthday!', pt: 'Datas comemorativas e festas', gt: 'ordinais · feriados americanos · convites',
  gx: 'Para datas e aniversários: ordinais (It\'s my thirtieth birthday). Os feriados americanos mais importantes: Thanksgiving (Ação de Graças, quarta quinta-feira de novembro), the Fourth of July (Dia da Independência), Halloween (31 de outubro) e Christmas. Para cumprimentar: Happy birthday! Happy holidays! Congratulations!',
  ge: "Happy birthday! How old are you today?=Feliz aniversário! Quantos anos você faz hoje?|Thanksgiving is on the fourth Thursday of November.=O Dia de Ação de Graças é na quarta quinta-feira de novembro.|We're having a party for my mom's sixtieth birthday.=Vamos fazer uma festa para os sessenta anos da minha mãe.",
  v: 'celebrate=comemorar=🎉|holiday=feriado=🗓️|Thanksgiving=Dia de Ação de Graças=🦃|Christmas=Natal=🎄|New Year\'s Eve=véspera de Ano-Novo=🎆|wedding=casamento=💒|anniversary=aniversário de casamento=💍|congratulations=parabéns=👏|turn (30)=fazer (30 anos)=🎂|guest=convidado=🧑‍🤝‍🧑',
  x: 'Halloween=Halloween (31 de outubro)|the Fourth of July=4 de julho, Dia da Independência|Easter=Páscoa|Mother\'s Day=Dia das Mães|baby shower=chá de bebê|graduation=formatura|surprise party=festa surpresa|toast=brinde|host=anfitrião|Cheers!=Saúde! (no brinde)',
  dlg: "Are you doing anything for your birthday?=Você vai fazer alguma coisa no seu aniversário?|Yes! I'm turning forty, so I'm having a big party.=Vou! Vou fazer quarenta, então vou dar uma festa grande.|Wow, congratulations! When is it?=Uau, parabéns! Quando é?|On Saturday the twelfth. You're invited, of course!=No sábado, dia doze. Você está convidada, claro!",
  cz: "It's my ___ birthday. (30º)=thirtieth=thirty=thirtyth|I'm ___ forty next week. (vou fazer)=turning=doing=having|Thanksgiving is ___ November.=in=on=at",
  whys: 'aniversário de 30 anos: o ordinal thirtieth (o y vira -ieth)|"fazer anos" é turn: I\'m turning forty|com o mês, in',
  pts: 'Para dizer a idade que você vai fazer: turn: I\'m turning thirty next week (vou fazer trinta). Ou com ordinal: my thirtieth birthday.|Ordinais das dezenas: twentieth, thirtieth, fortieth, fiftieth: o y vira i + eth.|Feriados americanos: Thanksgiving (quarta quinta de novembro, peru e família), the Fourth of July (fogos e churrasco), Halloween (fantasias e doces), Christmas, New Year\'s Eve.|Cumprimentos: Happy birthday! Happy Thanksgiving! Congratulations! (para conquistas: casamento, bebê, formatura) Cheers! (no brinde).',
  ex: "Congratulations on your wedding!=Parabéns pelo casamento!|We celebrate Thanksgiving with the whole family.=Comemoramos o Dia de Ação de Graças com a família toda.|Happy anniversary!=Feliz aniversário de casamento!|Cheers to the bride and groom!=Um brinde aos noivos!",
  bd: ["I'm_turning=V^turn: fazer (anos), no contínuo|forty=PR^a idade|next_week.=T", 'Vou fazer quarenta anos semana que vem.'],
  rule: 'comemoracao',
  hw: 'Escreva quatro datas importantes do seu ano com o ordinal e o que você faz em cada uma (My birthday is on May fifth. I always …). Depois escreva três cumprimentos para três situações diferentes.',
  deep: `
Hoje você fala de festas e comemorações: aniversários, casamentos e os feriados americanos que aparecem em todo filme e série.
# Passo 1: fazer anos
~ Happy birthday! How old are you today? = Feliz aniversário! Quantos anos você faz hoje?
~ I'm turning forty next week. = Vou fazer quarenta anos semana que vem.
| Em inglês | Em português |
| turn 30 | fazer 30 anos |
| my thirtieth birthday | o meu aniversário de 30 anos |
| a surprise party | uma festa surpresa |
! As dezenas viram ordinal com **-ieth**: twent**ieth**, thirt**ieth**, fort**ieth**.
# Passo 2: os feriados americanos
| Feriado | Quando | Como é |
| Thanksgiving | 4ª quinta de novembro | jantar em família, peru |
| the Fourth of July | 4 de julho | fogos, churrasco |
| Halloween | 31 de outubro | fantasias, doces |
| Christmas | 25 de dezembro | presentes, família |
| New Year's Eve | 31 de dezembro | festa, contagem regressiva |
~ Thanksgiving is on the fourth Thursday of November. = O Dia de Ação de Graças é na quarta quinta-feira de novembro.
BR **Thanksgiving** é o feriado mais importante para muitas famílias americanas, às vezes mais que o Natal.
# Passo 3: cumprimentar
@ P:O que dizer;Aniversário=Happy birthday!;Casamento, bebê, formatura=Congratulations!;Feriado=Happy Thanksgiving! / Happy holidays!;Brinde=Cheers!
~ Congratulations on your wedding! = Parabéns pelo casamento!
! "Parabéns" de aniversário é **Happy birthday**. **Congratulations** é para conquistas: casamento, emprego novo, formatura.
# Passo 4: festas da vida
| Em inglês | Em português |
| wedding | casamento |
| anniversary | aniversário de casamento |
| baby shower | chá de bebê |
| graduation | formatura |
~ Happy anniversary! = Feliz aniversário de casamento!
> Treine agora: diga quando é o seu aniversário e quantos anos você vai fazer, com turn.
? Como se diz "vou fazer trinta anos"? || I'm turning thirty.
? Congratulations ou Happy birthday no aniversário? || Happy birthday!
? Quando é Thanksgiving? || na quarta quinta-feira de novembro
`,
});

NL('en-who', {
  de: 'The man who …', pt: 'Descrever pessoas e coisas com detalhes', gt: 'relativas: who, which, that',
  gx: 'Para dar mais informação sobre alguém ou algo, o inglês usa who (para pessoas), which (para coisas) ou that (para os dois): The woman who lives next door is a doctor. The cake that you made was delicious. Em português, tudo isso é "que".',
  ge: "The woman who lives next door is a doctor.=A mulher que mora ao lado é médica.|The cake that you made was delicious.=O bolo que você fez estava delicioso.|This is the restaurant which I told you about.=Este é o restaurante de que eu te falei.",
  v: 'who=que, quem (pessoas)=🧑|which=que, o qual (coisas)=📦|that=que (pessoas e coisas)=🔗|whose=cujo, de quem=🔑|where=onde (lugar)=📍|the one who=aquele que=👆|neighbor=vizinho=🏡|cousin=primo, prima=👫|met=conheceu=🤝|told=contou, falou=💬',
  x: 'bride=noiva|groom=noivo|best man=padrinho (do noivo)|maid of honor=madrinha (da noiva)|ex=ex|fiancé=noivo (comprometido)|stranger=desconhecido|guy=cara|lady=senhora|dress=vestido',
  dlg: "Who's the guy who's talking to your sister?=Quem é o cara que está conversando com a sua irmã?|That's Jake, the man who I met at the wedding.=É o Jake, o homem que eu conheci no casamento.|The wedding that was in Miami?=O casamento que foi em Miami?|Yes! The one where it rained all day.=Isso! Aquele em que choveu o dia todo.",
  cz: 'The woman ___ lives next door is a nurse.=who=which=where|The car ___ I bought is red.=that=who=where|This is the city ___ I was born.=where=which=who',
  whys: 'pessoa: who (ou that)|coisa: that (ou which)|lugar: where',
  pts: 'who para pessoas: the man who called. which para coisas: the book which I read. that serve para os dois e é o mais comum na fala: the man that called, the book that I read.|where para lugares: the city where I was born. whose para posse: the woman whose car was stolen (a mulher cujo carro foi roubado).|Quando o que vem depois tem sujeito próprio, o that / which / who pode sumir: The cake (that) you made was delicious.|Em português tudo vira "que" ou "onde". Em inglês, escolha: pessoa (who), coisa (which), os dois (that), lugar (where).',
  ex: "My cousin, who lives in Texas, is getting married.=O meu primo, que mora no Texas, vai se casar.|The dress she wore was beautiful.=O vestido que ela usou era lindo.|That's the guy whose car I hit!=É o cara em cujo carro eu bati!|Do you know anyone who speaks Spanish?=Você conhece alguém que fale espanhol?",
  bd: ['The_woman=S^a pessoa|who_lives_next_door=REL^who: dá mais informação sobre a pessoa|is=V^o verbo principal da frase|a_doctor.=PR', 'A mulher que mora ao lado é médica.'],
  rule: 'relativa',
  hw: 'Escreva seis frases sobre pessoas, coisas e lugares da sua vida com who, that, which e where (My friend who lives in … / The city where I grew up …). Em duas, tire o that.',
  deep: `
Hoje você aprende a juntar duas informações numa frase só, para descrever pessoas e coisas com detalhe. Em português, quase tudo é "que". Em inglês, a palavra muda com o que você descreve.
# Passo 1: who, which, that
@ P:Qual palavra?;who=pessoas: the woman who lives next door;which=coisas: the book which I read;that=pessoas e coisas: the man that called, the cake that you made;where=lugares: the city where I was born
~ The woman who lives next door is a doctor. = A mulher que mora ao lado é médica.
~ The cake that you made was delicious. = O bolo que você fez estava delicioso.
BR Na fala, **that** é o mais comum para pessoas e coisas. **who** e **which** aparecem mais na escrita.
# Passo 2: where e whose
~ This is the city where I was born. = Esta é a cidade onde eu nasci.
~ That's the guy whose car I hit! = É o cara em cujo carro eu bati!
| Palavra | Para | Exemplo |
| where | lugar | the restaurant where we met |
| whose | posse (de quem) | the woman whose dog barks |
# Passo 3: quando o that some
Se depois do that vem **outro sujeito**, ele pode sumir:
| Com that | Sem that |
| The cake that you made … | The cake you made … |
| The man that I met … | The man I met … |
~ The dress she wore was beautiful. = O vestido que ela usou era lindo.
! Se o that é o **sujeito** (the man **that called**), ele não pode sumir: "The man called" muda o sentido.
# Passo 4: a informação extra, entre vírgulas
~ My cousin, who lives in Texas, is getting married. = O meu primo, que mora no Texas, vai se casar.
! Entre vírgulas (informação extra), use **who** ou **which**, nunca that.
> Treine agora: descreva duas pessoas da sua vida com who e uma coisa com that.
? Qual palavra para pessoas? || who (ou that)
? Como se diz "a cidade onde eu nasci"? || the city where I was born
? Dá para tirar o that em "the cake that you made"? || Sim: the cake you made
`,
});

NL('en-lets', {
  de: "Let's …", pt: 'Sugerir e combinar programas', gt: "Let's … · How about …? · Why don't we …?",
  gx: 'Para sugerir algo: Let\'s + verbo (Let\'s go to the movies!), How about + -ing? (How about going to the beach?) ou Why don\'t we + verbo? (Why don\'t we order pizza?). Para aceitar: Good idea! / Sounds great! Para recusar: I\'d rather … (eu prefiro…).',
  ge: "Let's go to the movies tonight!=Vamos ao cinema hoje à noite!|How about going to the beach on Sunday?=Que tal ir à praia no domingo?|Why don't we order pizza?=Por que a gente não pede pizza?",
  v: "let's=vamos (sugestão)=👉|how about=que tal=💡|why don't we=por que a gente não=🤔|good idea=boa ideia=👍|sounds great=parece ótimo=🙌|I'd rather=eu prefiro=🔄|instead=em vez disso=↩️|tonight=hoje à noite=🌙|hang out=sair, passar um tempo junto=🍻|plans=planos=📋",
  x: 'go out=sair|stay in=ficar em casa|grab a bite=comer alguma coisa|catch a movie=ver um filme|go for a walk=dar uma volta|I\'m in!=Tô dentro!|count me out=tô fora|maybe another time=quem sabe outro dia|whatever you want=o que você quiser|I don\'t mind=tanto faz',
  dlg: "I'm bored. Let's do something!=Estou entediada. Vamos fazer alguma coisa!|How about going to the new Mexican restaurant?=Que tal ir ao restaurante mexicano novo?|Hmm, I'd rather stay in. Why don't we cook something?=Hum, prefiro ficar em casa. Por que a gente não cozinha alguma coisa?|Good idea! Let's make tacos!=Boa ideia! Vamos fazer tacos!",
  cz: "Let's ___ to the beach!=go=going=to go|How about ___ a movie? (watch)=watching=watch=to watch|Why don't we ___ pizza? (order)=order=ordering=to order",
  whys: 'depois de let\'s, o verbo vem no básico: let\'s go|depois de how about, -ing: how about watching|depois de why don\'t we, o verbo no básico: order',
  pts: 'Let\'s + verbo básico: Let\'s go! Let\'s eat out tonight. (Let\'s = let us.) Negativa: Let\'s not …|How about + -ing (ou + substantivo): How about going to the beach? How about pizza?|Why don\'t we + verbo básico? Why don\'t we stay in tonight? É uma sugestão, não uma pergunta de verdade.|Responder: aceitar (Good idea! Sounds great! I\'m in!) ou propor outra coisa (I\'d rather stay in. How about … instead?).',
  ex: "Let's not go out tonight. I'm tired.=Não vamos sair hoje à noite. Estou cansada.|How about Saturday instead?=Que tal sábado, em vez disso?|Sounds great! I'm in!=Ótimo! Tô dentro!|I don't mind. Whatever you want.=Tanto faz. O que você quiser.",
  bd: ["Why_don't_we=AUX^por que a gente não: uma sugestão|order=V^o verbo no básico|pizza?=OA", 'Por que a gente não pede pizza?'],
  rule: 'sugestao',
  hw: 'Escreva um diálogo de seis falas combinando um programa com um amigo: duas sugestões (Let\'s… / How about…?), uma recusa com I\'d rather e o combinado final.',
  deep: `
Hoje você sugere e combina programas: um filme, um jantar, um passeio. São três jeitos de sugerir, e cada um pede o verbo de um jeito.
# Passo 1: três jeitos de sugerir
@ F:Sugerir;Sugestão^w|Verbo^v|O resto^p;Let's|go|to the movies!;How about|going|to the beach?;Why don't we|order|pizza?
~ Let's go to the movies tonight! = Vamos ao cinema hoje à noite!
~ How about going to the beach on Sunday? = Que tal ir à praia no domingo?
~ Why don't we order pizza? = Por que a gente não pede pizza?
! **Let's** e **Why don't we** + verbo **básico**; **How about** + **-ing**.
BR **Why don't we…?** parece uma pergunta de "por quê", mas é só uma sugestão: "que tal…?".
# Passo 2: aceitar
| Em inglês | Em português |
| Good idea! | Boa ideia! |
| Sounds great! | Parece ótimo! |
| I'm in! | Tô dentro! |
| Why not? | Por que não? |
~ Sounds great! I'm in! = Ótimo! Tô dentro!
# Passo 3: propor outra coisa
~ I'd rather stay in. = Prefiro ficar em casa.
~ How about Saturday instead? = Que tal sábado, em vez disso?
~ Let's not go out tonight. I'm tired. = Não vamos sair hoje à noite. Estou cansada.
| Em inglês | Em português |
| I'd rather … | eu prefiro … |
| … instead | … em vez disso |
| Maybe another time. | Quem sabe outro dia. |
| I don't mind. | Tanto faz. |
# Passo 4: programas
| Em inglês | Em português |
| go out | sair |
| stay in | ficar em casa |
| hang out | passar um tempo junto |
| grab a bite | comer alguma coisa |
| catch a movie | ver um filme |
~ Let's hang out this weekend! = Vamos sair neste fim de semana!
> Treine agora: sugira três programas para o fim de semana, um com cada estrutura.
? Como continua "How about ___ (go) out?" || going
? Como se diz "prefiro ficar em casa"? || I'd rather stay in.
? Let's + verbo básico ou -ing? || básico: Let's go!
`,
});

NL('en-think', {
  de: "I don't think so", pt: 'Dar uma opinião simples', gt: "I think / I don't think (a negação no think)",
  gx: 'Para dar opinião: I think … (eu acho que…). Para a opinião negativa, o inglês põe o not no think: I don\'t think it\'s a good idea (acho que não é uma boa ideia), e não "I think it\'s not". Respostas curtas: I think so (acho que sim) / I don\'t think so (acho que não).',
  ge: "I think it's a great idea.=Eu acho que é uma ótima ideia.|I don't think he's coming.=Acho que ele não vem.|Is it going to rain? I don't think so.=Vai chover? Acho que não.",
  v: "I think=eu acho que=💭|I don't think=acho que não=🙅|I think so=acho que sim=👍|I don't think so=acho que não=👎|opinion=opinião=🗣️|in my opinion=na minha opinião=📢|agree=concordar=🤝|believe=acreditar=🙏|sure=certo, seguro=✅|maybe=talvez=🤷",
  x: 'I guess=acho, suponho|I hope so=espero que sim|I hope not=espero que não|I\'m not sure=não tenho certeza|probably=provavelmente|definitely=com certeza|seems=parece|right=certo|wrong=errado|good idea=boa ideia',
  dlg: "Do you think Sam is coming to the party?=Você acha que o Sam vem à festa?|I don't think so. He's working tonight.=Acho que não. Ele está trabalhando hoje à noite.|That's too bad. I think he'd love it.=Que pena. Acho que ele ia adorar.|I think so too. Maybe next time!=Também acho. Quem sabe na próxima!",
  cz: "I ___ think it's a good idea. (acho que não é)=don't=-=not|Is she coming? I think ___.=so=yes=it|___ my opinion, it's expensive.=In=On=For",
  whys: 'o inglês nega o think: I don\'t think it\'s…|"acho que sim" é I think so|na minha opinião: in my opinion',
  pts: 'I think + frase: I think it\'s a good idea. O that pode aparecer ou não: I think (that) he\'s right.|A negação vai para o think: I don\'t think it\'s expensive (acho que não é caro). "I think it isn\'t expensive" é possível, mas soa forçado.|Respostas curtas: I think so (acho que sim), I don\'t think so (acho que não), I hope so (espero que sim), I hope not (espero que não). Nunca "I think yes".|Outras formas: In my opinion, … / I guess … (mais informal) / I\'m not sure.',
  ex: "I think so too.=Também acho.|I don't think it's expensive.=Acho que não é caro.|In my opinion, the first movie was better.=Na minha opinião, o primeiro filme era melhor.|Will they win? I hope so!=Eles vão ganhar? Espero que sim!",
  bd: ["I=S|don't_think=V^a negação fica no think|he's_coming.=C^a opinião, afirmativa", 'Acho que ele não vem.'],
  rule: 'opiniao_simples',
  hw: 'Responda em inglês a cinco perguntas sobre a semana que vem com I think so, I don\'t think so, I hope so ou I hope not. Depois dê três opiniões completas, uma com I don\'t think.',
  deep: `
Hoje você dá opinião de um jeito simples e natural. E aprende uma diferença sutil: em inglês, a negação vai para o **think**.
# Passo 1: I think
~ I think it's a great idea. = Eu acho que é uma ótima ideia.
~ In my opinion, the first movie was better. = Na minha opinião, o primeiro filme era melhor.
! Depois de I think, o **that** é opcional: I think (that) he's right.
# Passo 2: a negação vai para o think
@ V:Onde vai o não?;Português|Acho que ele não vem.|Acho que não é caro.;Inglês|I don't think he's coming.|I don't think it's expensive.
~ I don't think he's coming. = Acho que ele não vem.
BR Em português o "não" vai na opinião ("acho que **não** vem"). Em inglês, vai no think: I **don't** think he's coming. É o jeito natural.
# Passo 3: as respostas curtas
| Em inglês | Em português |
| I think so. | Acho que sim. |
| I don't think so. | Acho que não. |
| I hope so. | Espero que sim. |
| I hope not. | Espero que não. |
| I'm not sure. | Não tenho certeza. |
~ Is it going to rain? I don't think so. = Vai chover? Acho que não.
~ Will they win? I hope so! = Eles vão ganhar? Espero que sim!
! "I think yes" e "I think no" não existem: **I think so** / **I don't think so**.
# Passo 4: concordar
~ I think so too. = Também acho.
| Em inglês | Em português |
| I agree. | Concordo. |
| I think so too. | Também acho. |
| You're right. | Você tem razão. |
> Treine agora: dê três opiniões sobre o seu dia, uma com I think, uma com I don't think e uma resposta curta.
? Como se diz "acho que não é caro"? || I don't think it's expensive.
? Como se diz "acho que sim"? || I think so.
? Existe "I think yes"? || Não: I think so.
`,
});

NL('en-enjoy', {
  de: 'I enjoy dancing', pt: 'Gostos e intenções: -ing ou to?', gt: 'verbo + -ing × verbo + to',
  gx: 'Depois de alguns verbos, o próximo verbo vai com -ing: enjoy, finish, mind, avoid, keep (I enjoy dancing). Depois de outros, vai com to: want, need, decide, hope, plan, would like (I want to dance). Like, love, hate e start aceitam os dois.',
  ge: "I enjoy dancing.=Eu gosto de dançar.|I want to learn salsa.=Eu quero aprender salsa.|We decided to have a small wedding.=Decidimos fazer um casamento pequeno.",
  v: 'enjoy=gostar de, curtir=😊|finish=terminar=🏁|avoid=evitar=🚫|keep=continuar=🔁|want=querer=🎯|need=precisar=❗|decide=decidir=⚖️|hope=esperar (desejar)=🙏|plan=planejar=📋|would like=gostaria=🙋',
  x: 'practice=praticar|suggest=sugerir|miss=sentir falta de|promise=prometer|agree=concordar|learn=aprender|try=tentar|stop=parar|forget=esquecer|remember=lembrar',
  dlg: "What do you enjoy doing on weekends?=O que você gosta de fazer nos fins de semana?|I enjoy cooking for friends. And I want to learn to dance!=Eu gosto de cozinhar para os amigos. E quero aprender a dançar!|Really? I'm planning to take a salsa class.=Sério? Estou planejando fazer uma aula de salsa.|Great! I'd love to come with you.=Ótimo! Eu adoraria ir com você.",
  cz: 'I enjoy ___. (dance)=dancing=to dance=dance|I want ___ salsa. (learn)=to learn=learning=learn|We decided ___ a small party. (have)=to have=having=have',
  whys: 'depois de enjoy, -ing: enjoy dancing|depois de want, to: want to learn|depois de decide, to: decided to have',
  pts: 'Com -ing: enjoy, finish, mind, avoid, keep, practice, suggest, miss. I enjoy reading. I finished working at six. Keep going!|Com to: want, need, decide, hope, plan, promise, agree, learn, would like. I want to travel. She decided to quit.|Com os dois, sem mudar o sentido: like, love, hate, start. I like dancing = I like to dance.|Um caso que muda o sentido: stop. I stopped smoking (parei de fumar) × I stopped to smoke (parei para fumar).',
  ex: "She avoids eating late.=Ela evita comer tarde.|I hope to see you soon.=Espero te ver logo.|Keep practicing!=Continue praticando!|I stopped smoking two years ago.=Eu parei de fumar há dois anos.",
  bd: ['I=S|enjoy=V^enjoy pede -ing|dancing.=OA^o verbo com -ing', 'Eu gosto de dançar.'],
  rule: 'ing_to',
  hw: 'Escreva oito frases sobre você: quatro com verbos que pedem -ing (enjoy, avoid, finish, keep) e quatro com verbos que pedem to (want, need, decide, hope).',
  deep: `
Hoje você aprende uma regra que pega muita gente: quando um verbo vem depois de outro, às vezes ele vai com **-ing** e às vezes com **to**. Depende do primeiro verbo.
# Passo 1: verbos + -ing
@ P:Estes pedem -ing;enjoy=I enjoy dancing.;finish=I finished working at six.;avoid=She avoids eating late.;keep=Keep practicing!;mind=Do you mind waiting?
~ I enjoy dancing. = Eu gosto de dançar.
~ Keep practicing! = Continue praticando!
# Passo 2: verbos + to
@ P:Estes pedem to;want=I want to learn salsa.;need=I need to go.;decide=We decided to have a small wedding.;hope=I hope to see you soon.;would like=I'd love to come.
~ I want to learn salsa. = Eu quero aprender salsa.
~ We decided to have a small wedding. = Decidimos fazer um casamento pequeno.
BR Em português todos ficam no infinitivo ("gosto de dançar", "quero dançar"). Em inglês é preciso saber qual verbo pede o quê: "I enjoy to dance" e "I want dancing" estão errados.
# Passo 3: os que aceitam os dois
| Verbo | Com -ing | Com to |
| like | I like dancing. | I like to dance. |
| love | I love cooking. | I love to cook. |
| start | It started raining. | It started to rain. |
~ I like dancing. = Eu gosto de dançar.
# Passo 4: stop, que muda o sentido
| Em inglês | Em português |
| I stopped smoking. | Parei de fumar. |
| I stopped to smoke. | Parei para fumar. |
~ I stopped smoking two years ago. = Eu parei de fumar há dois anos.
> Treine agora: diga duas coisas que você gosta de fazer (enjoy) e duas que quer fazer (want to).
? enjoy + -ing ou to? || -ing: I enjoy dancing.
? want + -ing ou to? || to: I want to dance.
? O que quer dizer "I stopped smoking"? || Parei de fumar.
`,
});

NL('en-blog', {
  de: 'A blog comment', pt: 'Ler um post e comentar', gt: 'conectores · opinião',
  gx: 'Num comentário de blog você reage ao texto, dá a sua opinião e conta uma experiência: Great post! I totally agree. In my opinion, … I think … because … Conectores ajudam a organizar: also (também), however (porém), for example (por exemplo), that\'s why (por isso).',
  ge: "Great post! I totally agree with you.=Ótimo post! Concordo totalmente com você.|In my opinion, small weddings are better because they're more personal.=Na minha opinião, casamentos pequenos são melhores porque são mais pessoais.|However, I think the party is important too.=Porém, acho que a festa também é importante.",
  v: 'post=post, publicação=📝|comment=comentário; comentar=💬|agree=concordar=🤝|disagree=discordar=🙅|totally=totalmente=💯|however=porém, no entanto=↔️|also=também=➕|for example=por exemplo=👉|that\'s why=por isso=➡️|share=compartilhar=🔁',
  x: 'personally=pessoalmente|on the other hand=por outro lado|actually=na verdade|thanks for sharing=obrigado por compartilhar|great point=ótimo ponto|I couldn\'t agree more=não poderia concordar mais|guests=convidados|budget=orçamento|stressful=estressante|memories=lembranças',
  dlg: "Did you read Kate's blog post about weddings?=Você leu o post da Kate sobre casamentos?|Yes! She thinks big weddings are a waste of money.=Li! Ela acha que casamentos grandes são desperdício de dinheiro.|Do you agree?=Você concorda?|Partly. Big weddings are expensive. However, the memories are priceless!=Em parte. Casamentos grandes são caros. Porém, as lembranças não têm preço!",
  cz: 'I totally ___ with you.=agree=am agree=agreeing|Weddings are expensive. ___, they are fun.=However=Because=For example|In my ___, small parties are better.=opinion=opinião=think',
  whys: 'concordar é um verbo: I agree (e não "I am agree")|ideia oposta, no começo da frase: however|na minha opinião: in my opinion',
  pts: 'Para reagir: Great post! Thanks for sharing! I totally agree. / I don\'t agree. / Great point!|agree é verbo: I agree with you. "I am agree" é um erro muito comum do brasileiro.|Conectores: also (também), however (porém, no começo da frase, com vírgula), for example, that\'s why (por isso), on the other hand (por outro lado).|Estrutura de um comentário: reação ao post + a sua opinião com o motivo (because) + um exemplo ou experiência + fechamento.',
  ex: "I couldn't agree more!=Não poderia concordar mais!|For example, my sister's wedding had only twenty guests.=Por exemplo, o casamento da minha irmã teve só vinte convidados.|That's why I think small is better.=Por isso acho que pequeno é melhor.|Thanks for sharing your story!=Obrigada por compartilhar a sua história!",
  bd: ['In_my_opinion,=PK^na minha opinião|small_weddings=S|are=V|better=PR^comparativo de good|because_they\'re_more_personal.=C^o motivo', 'Na minha opinião, casamentos pequenos são melhores porque são mais pessoais.'],
  rule: 'comentario',
  hw: 'Escolha um tema (casamentos, aniversários, feriados) e escreva um comentário de cinco frases: reação, opinião com because, um exemplo com for example, uma ideia oposta com however e o fechamento.',
  le: {
    texto: {
      t: "Kate's Blog · Big wedding or small wedding?", kind: 'leitura', voz: 'a',
      intro: 'A Kate escreveu um post sobre casamentos, e uma leitora comentou. Leia e responda.',
      paras: ['Kate: Last month, my husband and I celebrated our tenth anniversary. We had a tiny wedding: only fifteen guests in my parents\' backyard. Today, I think it was the best decision we made.', 'Kate: Big weddings are beautiful, but they\'re very expensive and stressful. For example, the average American wedding costs about $30,000! We used that money to buy our first house.', 'Comment from Maria: Great post! I agree that big weddings are expensive. However, my wedding had 200 guests and it was the happiest day of my life. I think it depends on the couple. Thanks for sharing!'],
      qs: [
        { q: 'Como foi o casamento da Kate?', o: ['pequeno, com quinze convidados no quintal dos pais', 'grande, com duzentos convidados', 'num hotel em outro país'], a: 0 },
        { q: 'O que a Kate fez com o dinheiro que economizou?', o: ['comprou a primeira casa', 'viajou', 'deu uma festa'], a: 0 },
        { q: 'A Maria concorda com a Kate em quê?', o: ['que casamentos grandes são caros', 'que casamentos pequenos são melhores', 'em tudo'], a: 0 },
        { q: 'Qual é a conclusão da Maria?', o: ['depende do casal', 'casamento grande é sempre melhor', 'é melhor não casar'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva o seu comentário no blog da Kate', tipo: 'form', ok: 'Comentário escrito corretamente.',
      pede: 'Escreva um comentário com a sua opinião: casamento grande ou pequeno? Uma frase em cada linha.',
      campos: [
        { l: 'Reaction', d: 'Great post! / Thanks for sharing!', re: '\\b(great|nice|interesting|thanks|thank you|love|loved)\\b', f: 'iu', err: 'Reaja ao post: Great post! / Thanks for sharing!' },
        { l: 'Agree or not', d: "I agree … / I don't agree …", re: "\\b(i (totally |completely |partly )?agree|i don'?t agree|i disagree|i couldn'?t agree more)\\b", f: 'iu', err: 'Diga se concorda: I totally agree with you. / I don\'t agree.', bad: [['\\bi am agree\\b|\\bi\'m agree\\b', 'agree é verbo: <b>I agree</b> (e não "I am agree").']] },
        { l: 'Opinion', d: 'In my opinion, … because …', re: '\\b(in my opinion|i think|i believe|personally)\\b.*\\bbecause\\b', f: 'iu', err: 'Dê a sua opinião com o motivo: In my opinion, small weddings are better because …' },
        { l: 'Example', d: 'For example, …', re: '^for example\\b|\\bfor example,', f: 'iu', err: 'Dê um exemplo: For example, my sister\'s wedding …' },
        { l: 'However', d: 'However, …', re: '^however\\s*,', f: 'iu', err: 'Mostre o outro lado com However, no começo e com vírgula: However, big parties are fun.' },
      ],
      modelo: "Great post! · I totally agree with you. · In my opinion, small weddings are better because they're more personal. · For example, my sister's wedding had only twenty guests. · However, I think a party is important too.",
    },
  },
  deep: `
Esta lição é de **ler e escrever**. Você vai ler um post de blog sobre casamentos e um comentário, e depois escrever o seu. É o primeiro texto de **opinião** da trilha.
# Passo 1: reagir e concordar
| Em inglês | Em português |
| Great post! | Ótimo post! |
| Thanks for sharing! | Obrigada por compartilhar! |
| I totally agree. | Concordo totalmente. |
| I don't agree. | Não concordo. |
| I couldn't agree more! | Não poderia concordar mais! |
~ Great post! I totally agree with you. = Ótimo post! Concordo totalmente com você.
BR **agree** é verbo: **I agree**. "I am agree" é um dos erros mais comuns do brasileiro, porque em português dizemos "estou de acordo".
# Passo 2: os conectores
@ P:Para organizar a opinião;also=também (soma);however=porém (opõe);for example=por exemplo;that's why=por isso;on the other hand=por outro lado
~ However, I think the party is important too. = Porém, acho que a festa também é importante.
~ That's why I think small is better. = Por isso acho que pequeno é melhor.
! **However** costuma abrir a frase, com **vírgula** depois: However, …
# Passo 3: como é um comentário
@ P:Um comentário de blog;Reação=Great post!;Concordar ou não=I totally agree with you.;Opinião + motivo=In my opinion, … because …;Exemplo=For example, …;Outro lado=However, …
~ In my opinion, small weddings are better because they're more personal. = Na minha opinião, casamentos pequenos são melhores porque são mais pessoais.
> Agora leia o post da Kate e o comentário da Maria, e escreva o seu.
? Como se diz "eu concordo"? || I agree. (e não "I am agree")
? Qual conector abre uma ideia oposta? || However,
? Como se diz "por exemplo"? || for example
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('Happy birthday!',
  'M:Os feriados americanos;Feriado|Quando;Thanksgiving|4ª quinta de novembro;the Fourth of July|4 de julho;Halloween|31 de outubro;Christmas|25 de dezembro',
  'V:Qual "parabéns"?;Aniversário|Happy birthday!;Conquista (casamento, emprego)|Congratulations!');
V('The man who …',
  'P:Qual "que"?;who=pessoas;which=coisas;that=pessoas e coisas;where=lugares;whose=de quem',
  'E:Juntar duas informações;The woman^s|who lives next door^w|is a doctor.^p');
V("Let's …",
  'F:Três jeitos de sugerir;Sugestão^w|Verbo^v;Let\'s|go!;How about|going?;Why don\'t we|go?',
  'V:Aceitar ou mudar;Aceitar|Good idea!|Sounds great!|I\'m in!;Mudar|I\'d rather stay in.|How about … instead?');
V("I don't think so",
  'V:Onde vai o não?;Português|Acho que ele não vem.;Inglês|I don\'t think he\'s coming.',
  'P:Respostas curtas;Acho que sim=I think so.;Acho que não=I don\'t think so.;Espero que sim=I hope so.;Espero que não=I hope not.');
V('I enjoy dancing',
  'V:-ing ou to?;-ing|enjoy dancing|finish working|avoid eating;to|want to dance|decide to go|hope to see',
  'V:stop muda o sentido;stop + -ing|I stopped smoking. (parei de fumar);stop + to|I stopped to smoke. (parei para fumar)');
V('A blog comment',
  'P:Um comentário de blog;Reação=Great post!;Concordar=I totally agree.;Opinião=In my opinion, … because …;Exemplo=For example, …;Outro lado=However, …',
  'E:agree é verbo;I^s|agree^v|with you.^p');
S_('Happy birthday!', 'today=hoje|party=festa|mom=mãe|sixtieth=sexagésimo|forty=quarenta|big=grande|wow=uau|invited=convidado|of course=claro|twelfth=décimo segundo|whole family=família toda|bride and groom=noivos|thirtieth=trigésimo|fortieth=quadragésimo|surprise=surpresa');
S_('The man who …', 'talking=conversando|sister=irmã|Jake=Jake|wedding=casamento|rained=choveu|all day=o dia todo|delicious=delicioso|restaurant=restaurante|nurse=enfermeira|born=nascido|Texas=Texas|getting married=vai se casar|wore=usou (wear)|hit=bati (hit)|anyone=alguém|barks=late|car=carro|called=ligou|grew up=cresci');
S_("Let's …", 'bored=entediada|something=alguma coisa|Mexican=mexicano|cook=cozinhar|tacos=tacos|movies=cinema|beach=praia|Sunday=domingo|order=pedir (comida)|pizza=pizza|tired=cansada|Saturday=sábado|weekend=fim de semana|why not=por que não');
S_("I don't think so", 'coming=vindo|party=festa|tonight=hoje à noite|too bad=que pena|he\'d love it=ele ia adorar|next time=na próxima|expensive=caro|first movie=primeiro filme|win=ganhar|rain=chover|you\'re right=você tem razão');
S_('I enjoy dancing', 'weekends=fins de semana|friends=amigos|dance=dançar|salsa=salsa|take a class=fazer uma aula|small=pequeno|eating late=comer tarde|soon=logo|smoking=fumar|two years ago=há dois anos|waiting=esperar|go=ir|quit=sair, largar|travel=viajar|reading=ler|cooking=cozinhar|raining=chover');
S_('A blog comment', 'read=leu (read)|blog=blog|weddings=casamentos|waste of money=desperdício de dinheiro|partly=em parte|priceless=sem preço|expensive=caro|fun=divertido|small parties=festas pequenas|personal=pessoal|sister\'s=da irmã|only=só|twenty=vinte|story=história|tenth=décimo|tiny=minúsculo|fifteen=quinze|backyard=quintal|decision=decisão|average=média|costs=custa|thirty thousand=trinta mil|house=casa|happiest=mais feliz|couple=casal|depends on=depende de|celebrated=comemoramos');
['kate', 'jake', 'texas', 'kates', 'maria'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'en-birthday': {
    o: 'Para aniversários: **turn** (I\'m turning thirty) e ordinais (my **thirtieth** birthday). Feriados americanos: **Thanksgiving**, **the Fourth of July**, **Halloween**. **Congratulations** é para conquistas.',
    q: 'Para falar de aniversários, festas e feriados, e cumprimentar do jeito certo.',
    p: 'Os feriados americanos aparecem em todo filme e série. Entender o que eles são é entender a cultura.',
  },
  'en-who': {
    o: 'Para dar mais detalhes: **who** (pessoas), **which** (coisas), **that** (os dois), **where** (lugares). **The woman who lives next door…** Em português, tudo é "que".',
    q: 'Para descrever pessoas, coisas e lugares com detalhe numa frase só.',
    p: 'Sem relativas, você fala em frases curtinhas e soltas. Com elas, o inglês começa a fluir.',
  },
  'en-lets': {
    o: 'Para sugerir: **Let\'s** + verbo, **How about** + -ing?, **Why don\'t we** + verbo? Para mudar a proposta: **I\'d rather…**',
    q: 'Para combinar programas com amigos, família e colegas.',
    p: 'Combinar o que fazer é uma das conversas mais comuns da vida social.',
  },
  'en-think': {
    o: '**I think…** dá opinião. Na opinião negativa, o not vai no think: **I don\'t think he\'s coming**. Respostas curtas: **I think so** / **I don\'t think so**.',
    q: 'Para dar uma opinião simples e responder a perguntas sem ter certeza.',
    p: '"I think yes" e "I think not" são erros clássicos. I think so resolve na hora.',
  },
  'en-enjoy': {
    o: 'Alguns verbos pedem **-ing** depois (**enjoy dancing**, finish, avoid, keep); outros pedem **to** (**want to dance**, need, decide, hope).',
    q: 'Para falar de gostos, planos e intenções com dois verbos juntos.',
    p: '"I enjoy to dance" e "I want dancing" soam errados para o nativo. Saber qual verbo pede o quê deixa a frase natural.',
  },
  'en-blog': {
    o: 'Um comentário reage ao texto (**Great post!**), concorda ou não (**I agree**, e nunca "I am agree"), dá a opinião com **because** e organiza com **for example** e **however**.',
    q: 'Para comentar posts, notícias e textos e dar a sua opinião por escrito.',
    p: 'Opinar por escrito é o caminho para o B1. E comentar na internet é praticar inglês de verdade.',
  },
});
Object.assign(CZH, {
  'en-birthday': ['30º, como ordinal', 'fazer (anos)', 'com o mês'],
  'en-who': ['pessoa', 'coisa', 'lugar'],
  'en-lets': ['go, depois de let\'s', 'watch, depois de how about', 'order, depois de why don\'t we'],
  'en-think': ['a negação vai no think', 'acho que sim', 'na minha opinião'],
  'en-enjoy': ['dance, depois de enjoy', 'learn, depois de want', 'have, depois de decided'],
  'en-blog': ['concordar (verbo)', 'ideia oposta, no começo', 'opinião'],
});
Object.assign(OBJ, {
  'en-birthday': { o: 'Consigo falar de aniversários, festas e feriados e cumprimentar do jeito certo.', a: 'Você sabe quando dizer Happy birthday e quando dizer Congratulations?', ref: 'Social conventions · A2' },
  'en-who': { o: 'Consigo descrever pessoas, coisas e lugares com who, which, that e where.', a: 'Você consegue juntar duas informações numa frase com who ou that?', ref: 'Describing people · A2' },
  'en-lets': { o: 'Consigo sugerir e combinar programas.', a: 'Você consegue sugerir com Let\'s, How about e Why don\'t we?', ref: 'Goal-oriented co-operation · A2' },
  'en-think': { o: 'Consigo dar uma opinião simples e responder sem ter certeza.', a: 'Você consegue dizer "acho que não" em inglês?', ref: 'Conversation · A2' },
  'en-enjoy': { o: 'Consigo falar de gostos e intenções com verbo + -ing ou verbo + to.', a: 'Você sabe que é "enjoy dancing" e "want to dance"?', ref: 'Grammatical accuracy · A2' },
  'en-blog': { o: 'Consigo ler um post e escrever um comentário com a minha opinião.', a: 'Você consegue escrever um comentário com agree, because e however?', ref: 'Written interaction · A2' },
});
MOD_OBJ[12] = ['Consigo falar de festas e feriados e cumprimentar do jeito certo.', 'Consigo descrever pessoas e coisas com detalhe.', 'Consigo sugerir programas e dar opinião simples.', 'Consigo comentar um post com a minha opinião.'];

EN_MODS.push({ lv: 'A2', n: 'Festas e relações', l: ['en-birthday', 'en-who', 'en-lets', 'en-think', 'en-enjoy', 'en-blog'] });
