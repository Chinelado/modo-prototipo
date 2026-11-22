// Inglês · A2 · Módulo 12 · Travel (Viagens). Formato de en/curso.js.

NL('en-booking', {
  de: 'Booking a trip', pt: 'Reservar hotel e passagem', gt: "will para decisões e ofertas (I'll take it)",
  gx: 'Na hora de reservar, will aparece para decisões tomadas na hora (OK, I\'ll take it! = Ok, vou ficar com ele!) e para ofertas (I\'ll send you the confirmation = Vou te mandar a confirmação). Frases úteis: I\'d like to book a room for two nights. Is breakfast included?',
  ge: "I'd like to book a room for two nights.=Eu queria reservar um quarto para duas noites.|Is breakfast included?=O café da manhã está incluído?|OK, I'll take it!=Ok, vou ficar com ele!",
  v: 'book=reservar=📝|booking=reserva=🧾|room=quarto=🛏️|single room=quarto de solteiro=1️⃣|double room=quarto de casal=2️⃣|night=noite, diária=🌙|check in=fazer check-in=🛎️|check out=fazer check-out=🚪|confirmation=confirmação=✅|round trip=ida e volta=🔁',
  x: 'one-way=só ida|flight=voo|ticket=passagem|aisle seat=assento no corredor|window seat=assento na janela|fully booked=lotado|deposit=sinal, depósito|cancellation=cancelamento|free cancellation=cancelamento grátis|per night=por noite',
  dlg: "Hi, I'd like to book a double room for three nights.=Oi, eu queria reservar um quarto de casal para três noites.|We have one with a view for $150 a night.=Temos um com vista por 150 dólares a diária.|Is breakfast included?=O café da manhã está incluído?|Yes, it is. Great, I'll take it!=Está, sim. Ótimo, vou ficar com ele!",
  cz: "I'd like to ___ a room. (reservar)=book=make=mark|OK, ___ take it! (decisão agora)=I'll=I'm going to=I am|Is breakfast ___?=included=include=including",
  whys: 'reservar é book|decisão tomada na hora: I\'ll|está incluído: is included',
  pts: 'book = reservar (hotel, voo, mesa): I\'d like to book a room / a flight / a table. A reserva é booking ou reservation.|will para decisões na hora: OK, I\'ll take it! I\'ll pay by card. E para ofertas: I\'ll help you with your bags. I\'ll send you the details.|No hotel: check in (fazer check-in), check out (fazer check-out), single / double room, per night, Is breakfast included?|No voo: one-way (só ida), round trip (ida e volta), aisle seat (corredor), window seat (janela).',
  ex: "I'll pay by card.=Vou pagar com cartão.|Is there free cancellation?=Tem cancelamento grátis?|I'd like a window seat, please.=Eu queria um assento na janela, por favor.|What time is check-out?=Que horas é o check-out?",
  bd: ["OK,=PK|I'll=S^I will: decisão tomada agora|take=V^ficar com, levar|it!=OA^o quarto", 'Ok, vou ficar com ele!'],
  rule: 'reserva',
  hw: 'Escreva um diálogo de seis falas reservando um hotel: tipo de quarto, quantas noites, o preço, se o café está incluído e a decisão com I\'ll.',
  deep: `
Hoje você reserva uma viagem: hotel e passagem. E vê um uso do **will** que aparece toda hora quando se viaja: a decisão tomada **na hora**.
# Passo 1: reservar
~ I'd like to book a room for two nights. = Eu queria reservar um quarto para duas noites.
~ I'd like to book a flight to New York. = Eu queria reservar um voo para Nova York.
BR "Reservar" é **book**. O livro também é book, mas como verbo é reservar: book a room, book a table.
# Passo 2: no hotel
| Em inglês | Em português |
| single room | quarto de solteiro |
| double room | quarto de casal |
| per night | por diária |
| breakfast included | café incluído |
| check in / check out | fazer check-in / check-out |
~ Is breakfast included? = O café da manhã está incluído?
~ What time is check-out? = Que horas é o check-out?
# Passo 3: will, a decisão na hora
@ P:Os usos do will na viagem;Decisão=OK, I'll take it!;Pagamento=I'll pay by card.;Oferta=I'll help you with your bags.;Promessa=I'll send you the confirmation.
~ OK, I'll take it! = Ok, vou ficar com ele!
~ I'll pay by card. = Vou pagar com cartão.
! Se a decisão foi tomada **antes**, é going to: I'm going to stay at a hotel downtown. Se é **agora**, will: Hmm… OK, I'll take it!
# Passo 4: a passagem
| Em inglês | Em português |
| one-way | só ida |
| round trip | ida e volta |
| aisle seat | assento no corredor |
| window seat | assento na janela |
~ I'd like a window seat, please. = Eu queria um assento na janela, por favor.
> Treine agora: reserve em voz alta um quarto para três noites e decida na hora com I'll.
? Como se diz "reservar um quarto"? || book a room
? Como se diz "vou ficar com ele" (decidindo agora)? || I'll take it!
? O que é "round trip"? || ida e volta
`,
});

NL('en-airport', {
  de: 'At the airport', pt: 'Aeroporto, avisos e embarque', gt: 'delayed, canceled, gate, boarding',
  gx: 'No aeroporto, os avisos usam palavras curtas: Flight 205 is delayed (atrasado), canceled (cancelado), now boarding at gate 12 (embarcando no portão 12). No check-in: Can I see your passport? Do you have any bags to check?',
  ge: "Flight 205 to Miami is delayed.=O voo 205 para Miami está atrasado.|Now boarding at gate twelve.=Embarque agora no portão doze.|Do you have any bags to check?=Você tem malas para despachar?",
  v: 'flight=voo=✈️|gate=portão=🚪|boarding=embarque=🎫|boarding pass=cartão de embarque=🎟️|delayed=atrasado=⏳|canceled=cancelado=❌|on time=no horário=✅|passport=passaporte=🛂|carry-on=bagagem de mão=🎒|check a bag=despachar uma mala=🧳',
  x: 'departures=partidas|arrivals=chegadas|terminal=terminal|security=segurança (raio-x)|customs=alfândega|baggage claim=esteira de bagagem|layover=escala|connecting flight=voo de conexão|final call=última chamada|aisle=corredor',
  dlg: "Excuse me, is flight 205 on time?=Com licença, o voo 205 está no horário?|No, I'm afraid it's delayed. It now leaves at four.=Não, infelizmente está atrasado. Agora sai às quatro.|And which gate is it?=E qual é o portão?|Gate twelve. Boarding starts at three thirty.=Portão doze. O embarque começa às três e meia.",
  cz: 'The flight is ___. It leaves at four now. (atrasado)=delayed=late on=canceled|Now boarding at ___ 12. (portão)=gate=door=port|Do you have any bags to ___? (despachar)=check=send=dispatch',
  whys: 'voo atrasado: delayed|portão de embarque: gate|despachar a mala: check a bag',
  pts: 'Nos painéis: Departures (partidas), Arrivals (chegadas), On time, Delayed, Canceled, Boarding, Final call (última chamada), Gate.|Os avisos: Flight 205 to Miami is now boarding at gate 12. This is the final call for passengers on flight 205.|No check-in: Can I see your passport? Do you have any bags to check? Window or aisle? Here\'s your boarding pass.|Depois do voo: customs (alfândega), baggage claim (esteira), e se tiver conexão: layover (escala), connecting flight.',
  ex: "My flight was canceled. What should I do?=O meu voo foi cancelado. O que eu devo fazer?|Where is baggage claim?=Onde fica a esteira de bagagem?|I have a two-hour layover in Dallas.=Eu tenho uma escala de duas horas em Dallas.|This is the final call for flight 205.=Esta é a última chamada para o voo 205.",
  bd: ['Flight_205_to_Miami=S^o voo|is=V|delayed.=PR^atrasado', 'O voo 205 para Miami está atrasado.'],
  rule: 'aeroporto',
  hw: 'Escreva três avisos de aeroporto (um atrasado, um cancelado, um embarcando) e um diálogo de quatro falas no check-in, com passaporte, mala e assento.',
  deep: `
Hoje você passa por um aeroporto americano: check-in, painéis, avisos e o que fazer se o voo atrasar. Os avisos são rápidos, mas usam sempre as mesmas palavras.
# Passo 1: os painéis
| No painel | Significa |
| Departures | partidas |
| Arrivals | chegadas |
| On time | no horário |
| Delayed | atrasado |
| Canceled | cancelado |
| Boarding | embarcando |
| Final call | última chamada |
~ Flight 205 to Miami is delayed. = O voo 205 para Miami está atrasado.
! **canceled** é a grafia americana; no britânico, **cancelled**.
# Passo 2: o check-in
~ Can I see your passport? = Posso ver o seu passaporte?
~ Do you have any bags to check? = Você tem malas para despachar?
~ Window or aisle? = Janela ou corredor?
~ Here's your boarding pass. = Aqui está o seu cartão de embarque.
BR "Despachar a mala" é **check** a bag. A mala que vai com você é **carry-on**.
# Passo 3: os avisos
@ P:Um aviso de embarque;O voo=Flight 205 to Miami;O que acontece=is now boarding;Onde=at gate 12.;Urgente=This is the final call.
~ Now boarding at gate twelve. = Embarque agora no portão doze.
~ This is the final call for flight 205. = Esta é a última chamada para o voo 205.
# Passo 4: na chegada
| Em inglês | Em português |
| customs | alfândega |
| baggage claim | esteira de bagagem |
| layover | escala |
| connecting flight | voo de conexão |
~ Where is baggage claim? = Onde fica a esteira de bagagem?
~ I have a two-hour layover in Dallas. = Eu tenho uma escala de duas horas em Dallas.
# Passo 5: som da lição, os números do voo
Números de voo se leem em pares ou dígito por dígito: 205 = **two oh five**; 1430 = **fourteen thirty**. Portões, número simples: gate **twelve**.
~ Flight two oh five. = Voo dois zero cinco.
> Treine agora: leia em voz alta um aviso de embarque inventado, com o número do voo e do portão.
? Como se diz "o voo está atrasado"? || The flight is delayed.
? O que é "gate"? || o portão de embarque
? Como se diz "despachar uma mala"? || check a bag
`,
});

NL('en-trouble', {
  de: 'Travel problems', pt: 'Imprevistos na viagem', gt: 'passado simples + because / so',
  gx: 'Para contar um imprevisto, o passado simples com because (motivo) e so (consequência): We missed our flight because the train was late. I lost my passport, so I went to the consulate. Para pedir ajuda: Could you help me? I lost my …',
  ge: "We missed our flight because the train was late.=Perdemos o voo porque o trem atrasou.|I lost my passport, so I went to the consulate.=Perdi o passaporte, então fui ao consulado.|The airline lost my suitcase.=A companhia aérea perdeu a minha mala.",
  v: 'miss=perder (voo, ônibus)=🏃|missed=perdeu=⌛|lost=perdeu (objeto)=❓|suitcase=mala=🧳|airline=companhia aérea=🛫|consulate=consulado=🏛️|stuck=preso, sem conseguir sair=🚧|overbooked=com overbooking=🚫|compensation=indenização=💵|complaint=reclamação=📝',
  x: 'stolen=roubado|wallet=carteira|delayed=atrasado|strike=greve|storm=tempestade|rebook=remarcar (voo)|voucher=voucher, vale|lost and found=achados e perdidos|travel insurance=seguro-viagem|report=registrar (ocorrência)',
  dlg: "How was your trip?=Como foi a viagem?|Terrible! We missed our connection because the first flight was delayed.=Péssima! Perdemos a conexão porque o primeiro voo atrasou.|Oh no! What did you do?=Ah, não! O que vocês fizeram?|We slept at the airport, so we were very tired the next day.=Dormimos no aeroporto, então ficamos muito cansados no dia seguinte.",
  cz: 'We ___ our flight. (perdemos)=missed=lost=lose|I ___ my passport. (perdi o objeto)=lost=missed=loosed|The train was late, ___ we missed the flight.=so=because=but',
  whys: 'perder um voo, um ônibus: miss|perder um objeto: lose, lost|a consequência vem depois de so',
  pts: 'miss = perder um meio de transporte ou um compromisso (miss a flight, miss the bus); lose / lost = perder um objeto (lose a passport, lost my wallet). Em português é tudo "perder".|Para contar: passado simples + because (o motivo) ou so (a consequência): The flight was canceled because of a storm. My bag was lost, so I bought new clothes.|because of + substantivo: because of the storm, because of a strike. because + frase: because it was raining.|Para pedir ajuda: Could you help me? I lost my passport. Where is the lost and found? I\'d like to report a stolen wallet.',
  ex: "Our flight was canceled because of a storm.=O nosso voo foi cancelado por causa de uma tempestade.|My wallet was stolen at the station.=A minha carteira foi roubada na estação.|They gave us a hotel voucher.=Eles nos deram um voucher de hotel.|Where is the lost and found?=Onde fica o achados e perdidos?",
  bd: ['We=S|missed=V^miss: perder o voo|our_flight=OA|because=C^o motivo|the_train_was_late.=C', 'Perdemos o voo porque o trem atrasou.'],
  rule: 'problema',
  hw: 'Conte um imprevisto de viagem (real ou inventado) em seis frases no passado, com because, because of e so. Use miss e lose pelo menos uma vez.',
  deep: `
Hoje você conta imprevistos: voo perdido, mala extraviada, carteira roubada. Para isso junta o **passado simples** com **because** e **so**, e aprende que "perder" em inglês são duas palavras.
# Passo 1: miss ou lose?
@ V:Qual "perder"?;miss: transporte, compromisso|I missed the bus.|We missed our flight.;lose / lost: um objeto|I lost my passport.|She lost her phone.
~ We missed our flight because the train was late. = Perdemos o voo porque o trem atrasou.
~ The airline lost my suitcase. = A companhia aérea perdeu a minha mala.
BR "Perdi o ônibus" é **missed**; "perdi a chave" é **lost**. Trocar os dois é muito comum.
# Passo 2: because, because of, so
| Palavra | Vem com | Exemplo |
| because | uma frase | because the train was late |
| because of | um substantivo | because of a storm |
| so | a consequência | so we slept at the airport |
~ Our flight was canceled because of a storm. = O nosso voo foi cancelado por causa de uma tempestade.
~ I lost my passport, so I went to the consulate. = Perdi o passaporte, então fui ao consulado.
# Passo 3: pedir ajuda
~ Could you help me? I lost my passport. = Você pode me ajudar? Perdi o passaporte.
~ Where is the lost and found? = Onde fica o achados e perdidos?
~ I'd like to report a stolen wallet. = Eu queria registrar o roubo de uma carteira.
| Em inglês | Em português |
| rebook | remarcar o voo |
| voucher | vale (de hotel, comida) |
| compensation | indenização |
| travel insurance | seguro-viagem |
! Se o voo atrasar ou for cancelado, pergunte: **Can you rebook me on the next flight?** e **Do I get a voucher?**
> Treine agora: conte em voz alta um imprevisto que você já teve, com because e so.
? miss ou lose: "Perdi o ônibus"? || missed (I missed the bus)
? because ou because of: "___ a storm"? || because of
? Como se diz "achados e perdidos"? || lost and found
`,
});

NL('en-weather', {
  de: "What's the weather like?", pt: 'O tempo e a previsão', gt: "It's raining · will para previsões",
  gx: 'Para o tempo, o sujeito é sempre it: It\'s sunny, It\'s raining, It\'s cold. Para perguntar: What\'s the weather like? Para a previsão, will: It will rain tomorrow. Nos Estados Unidos a temperatura é em Fahrenheit: 86°F são 30°C.',
  ge: "What's the weather like in Chicago?=Como está o tempo em Chicago?|It's cold and windy.=Está frio e ventando.|It will snow tomorrow.=Vai nevar amanhã.",
  v: 'weather=tempo (clima)=⛅|sunny=ensolarado=☀️|cloudy=nublado=☁️|rain=chuva; chover=🌧️|snow=neve; nevar=❄️|windy=ventando=💨|hot=quente=🥵|cold=frio=🥶|degrees=graus=🌡️|forecast=previsão do tempo=📺',
  x: 'warm=morno, agradável|cool=fresco|humid=úmido, abafado|storm=tempestade|thunder=trovão|freezing=congelante|umbrella=guarda-chuva|Fahrenheit=Fahrenheit (°F)|Celsius=Celsius (°C)|heat wave=onda de calor',
  dlg: "What's the weather like in New York?=Como está o tempo em Nova York?|It's freezing! It's twenty degrees.=Está congelante! Está vinte graus.|Twenty? That's not cold!=Vinte? Isso não é frio!|Fahrenheit! That's about minus seven Celsius.=Fahrenheit! Dá uns sete graus negativos.",
  cz: "___ raining. (está chovendo)=It's=Is=Are|What's the weather ___?=like=as=how|I think it ___ snow tomorrow.=will=is=going",
  whys: 'o tempo sempre tem o sujeito it: It\'s raining|a pergunta do tempo é What\'s the weather like?|previsão com I think: will',
  pts: 'O tempo sempre usa it como sujeito: It\'s sunny. It\'s raining. It\'s cold. "Is raining" está errado.|Para perguntar: What\'s the weather like? (como está o tempo?) ou How\'s the weather?|Previsão: will (It will rain tomorrow / It won\'t be cold) ou going to, quando dá para ver (Look at those clouds! It\'s going to rain).|Fahrenheit: 32°F = 0°C; 50°F = 10°C; 68°F = 20°C; 86°F = 30°C. Truque rápido: tire 30 e divida por 2.',
  ex: "It's raining, so take an umbrella.=Está chovendo, então leve um guarda-chuva.|The forecast says it will be sunny.=A previsão diz que vai fazer sol.|It's eighty-six degrees. That's hot!=Está oitenta e seis graus. Isso é calor!|It won't rain this weekend.=Não vai chover neste fim de semana.",
  bd: ["It's=S^it: o sujeito do tempo|cold=PR|and=C|windy.=PR", 'Está frio e ventando.'],
  rule: 'tempo_clima',
  hw: 'Escreva a previsão do tempo da sua cidade para três dias, com will e won\'t, e converta a temperatura para Fahrenheit (Celsius × 2 + 30, mais ou menos).',
  deep: `
Hoje você fala do tempo: o assunto número um de conversa fiada em inglês. E aprende a não se assustar com os "graus" americanos.
# Passo 1: it, o sujeito do tempo
| Em inglês | Em português |
| It's sunny. | Está ensolarado. |
| It's cloudy. | Está nublado. |
| It's raining. | Está chovendo. |
| It's snowing. | Está nevando. |
| It's windy. | Está ventando. |
~ It's cold and windy. = Está frio e ventando.
BR Em português, "está chovendo" não tem sujeito. Em inglês, sempre **it**: It's raining. Lembra do Comece aqui?
# Passo 2: perguntar
~ What's the weather like in Chicago? = Como está o tempo em Chicago?
~ How's the weather? = Como está o tempo?
! Aqui **like** não é "gostar": é "como". What's the weather **like**? = Como é o tempo?
# Passo 3: a previsão
@ V:Vai chover?;will (previsão)|It will rain tomorrow.|It won't be cold.;going to (dá para ver)|Look at the clouds!|It's going to rain.
~ It will snow tomorrow. = Vai nevar amanhã.
~ The forecast says it will be sunny. = A previsão diz que vai fazer sol.
# Passo 4: Fahrenheit
@ P:Fahrenheit × Celsius;32°F=0°C (congela);50°F=10°C (frio);68°F=20°C (agradável);86°F=30°C (calor);100°F=38°C (muito calor)
~ It's eighty-six degrees. That's hot! = Está oitenta e seis graus. Isso é calor!
! Truque rápido: de Fahrenheit para Celsius, **tire 30 e divida por 2**. 70°F → 40 ÷ 2 = 20°C (mais ou menos).
> Treine agora: diga como está o tempo agora onde você está, com it, e a temperatura em Fahrenheit.
? Como se diz "está chovendo"? || It's raining.
? Como se pergunta "como está o tempo?" || What's the weather like?
? 30°C é quente ou frio em Fahrenheit (86°F)? || quente: 86°F = 30°C
`,
});

NL('en-if', {
  de: 'If it rains …', pt: 'Planos com condição', gt: 'primeira condicional',
  gx: 'Para planos que dependem de algo possível, a primeira condicional: If + presente, will + verbo. If it rains, we\'ll stay at the hotel (se chover, vamos ficar no hotel). Atenção: depois de if, presente, e não will: "If it will rain" está errado.',
  ge: "If it rains, we'll stay at the hotel.=Se chover, vamos ficar no hotel.|If we have time, we'll visit the museum.=Se tivermos tempo, vamos visitar o museu.|I'll call you if I get lost.=Eu te ligo se eu me perder.",
  v: 'if=se=🔀|unless=a menos que=🚧|get lost=se perder=🧭|have time=ter tempo=⏰|stay=ficar=🏨|take a taxi=pegar um táxi=🚕|change plans=mudar os planos=🔄|in case=caso, para o caso de=🛟|otherwise=senão=↪️|depend on=depender de=⚖️',
  x: 'sightseeing=passeio turístico|boat tour=passeio de barco|museum=museu|beach=praia|tickets=ingressos|sold out=esgotado|crowded=lotado|cheaper=mais barato|earlier=mais cedo|later=mais tarde',
  dlg: "What are we doing tomorrow?=O que a gente vai fazer amanhã?|It depends on the weather. If it's sunny, we'll go to the beach.=Depende do tempo. Se fizer sol, vamos à praia.|And if it rains?=E se chover?|If it rains, we'll go to the museum.=Se chover, vamos ao museu.",
  cz: "If it ___, we'll stay home. (chover)=rains=will rain=rain|If we have time, ___ visit the museum.=we'll=we will to=we are|I'll call you ___ I get lost.=if=when=so",
  whys: 'depois de if, presente: if it rains (com it, -s)|a consequência vai com will: we\'ll visit|condição possível: if',
  pts: 'A primeira condicional: If + presente, will + verbo. If it rains, we\'ll stay home. Fala de algo possível no futuro.|Depois de if, nunca will: If it rains (e não "if it will rain"). O futuro fica só na outra parte.|A ordem pode inverter: We\'ll stay home if it rains. Com if no começo, vírgula no meio.|unless = a menos que (= if not): We\'ll go unless it rains. (Vamos, a menos que chova.)',
  ex: "If the tickets are sold out, we'll go tomorrow.=Se os ingressos estiverem esgotados, vamos amanhã.|We'll take a taxi if it's late.=Vamos pegar um táxi se estiver tarde.|We'll go to the beach unless it rains.=Vamos à praia a menos que chova.|Take an umbrella in case it rains.=Leve um guarda-chuva caso chova.",
  bd: ["If_it_rains,=C^if + presente: a condição|we'll=S^we will: o resultado|stay=V|at_the_hotel.=L", 'Se chover, vamos ficar no hotel.'],
  rule: 'condicional1',
  hw: 'Escreva o plano de um dia de viagem com cinco frases condicionais: If it\'s sunny, … / If it rains, … / If we have time, … / … unless … / … in case …',
  deep: `
Hoje você faz planos que dependem de algo: do tempo, do horário, do dinheiro. É a **primeira condicional**, o "se … vai" do inglês.
# Passo 1: if + presente, will + verbo
@ F:A primeira condicional;Se (if + presente)^c|O resultado (will)^v;If it rains,|we'll stay at the hotel.;If we have time,|we'll visit the museum.;If it's sunny,|we'll go to the beach.
~ If it rains, we'll stay at the hotel. = Se chover, vamos ficar no hotel.
~ If we have time, we'll visit the museum. = Se tivermos tempo, vamos visitar o museu.
BR Em português dizemos "se **chover**" (futuro do subjuntivo). Em inglês, depois de if vem o **presente simples**: if it **rains**. "If it will rain" está errado.
# Passo 2: a ordem pode inverter
| if no começo (com vírgula) | if no meio (sem vírgula) |
| If I get lost, I'll call you. | I'll call you if I get lost. |
| If it's late, we'll take a taxi. | We'll take a taxi if it's late. |
~ I'll call you if I get lost. = Eu te ligo se eu me perder.
# Passo 3: unless e in case
| Palavra | Quer dizer | Exemplo |
| unless | a menos que (= if not) | We'll go unless it rains. |
| in case | caso, por precaução | Take an umbrella in case it rains. |
~ We'll go to the beach unless it rains. = Vamos à praia a menos que chova.
~ Take an umbrella in case it rains. = Leve um guarda-chuva caso chova.
# Passo 4: depende
~ It depends on the weather. = Depende do tempo.
! Depender **de** = depend **on**: It depends on the weather / on the price.
> Treine agora: faça três planos para o fim de semana que dependem do tempo, com if.
? Está certo "If it will rain"? || Não: If it rains.
? Como se diz "se chover, vamos ficar em casa"? || If it rains, we'll stay home.
? O que quer dizer unless? || a menos que (= if not)
`,
});

NL('en-review', {
  de: 'A hotel review', pt: 'Ler avaliações e escrever a sua', gt: "adjetivos · passado · I'd recommend …",
  gx: 'Uma avaliação de hotel conta a experiência no passado (The room was clean, the staff were friendly), usa adjetivos fortes (amazing, terrible, spotless) e termina com uma recomendação: I\'d recommend this hotel / I wouldn\'t recommend it. Equilíbrio é comum: The location was great, but the room was small.',
  ge: "The room was clean and the staff were very friendly.=O quarto estava limpo e os funcionários eram muito simpáticos.|The location was perfect, but the breakfast was disappointing.=A localização era perfeita, mas o café da manhã foi decepcionante.|I'd definitely recommend this hotel.=Eu com certeza recomendaria este hotel.",
  v: "review=avaliação=⭐|recommend=recomendar=👍|I'd recommend=eu recomendaria=🙌|staff=funcionários, equipe=🧑‍💼|location=localização=📍|clean=limpo=✨|dirty=sujo=🦠|comfortable=confortável=🛏️|disappointing=decepcionante=😕|value for money=custo-benefício=💲",
  x: 'spotless=impecável|noisy=barulhento|helpful=prestativo|rude=grosseiro|spacious=espaçoso|tiny=minúsculo|amenities=comodidades|pool=piscina|stars=estrelas|stay=estadia; ficar',
  dlg: "Did you read the reviews before you booked?=Você leu as avaliações antes de reservar?|Yes. Most people said the location was great.=Li. A maioria disse que a localização era ótima.|And the rooms?=E os quartos?|Some said they were small, but clean. Good value for money!=Alguns disseram que eram pequenos, mas limpos. Bom custo-benefício!",
  cz: "The room ___ very clean. (estava)=was=is=were|I'd ___ this hotel.=recommend=recommending=to recommend|The location was great, ___ the room was small.=but=so=because",
  whys: 'a avaliação conta a estadia no passado: was|depois de I\'d (I would), o verbo vem no básico: recommend|duas ideias opostas: but',
  pts: 'Uma avaliação conta a estadia no passado: The room was clean. The staff were helpful. We stayed for three nights.|Adjetivos fortes deixam a avaliação viva: amazing, spotless (impecável), terrible, tiny (minúsculo). Com but você equilibra: The pool was nice, but it was crowded.|Para recomendar: I\'d recommend this hotel (I would recommend). I wouldn\'t recommend it. I\'d definitely stay here again.|staff (os funcionários) pode ir com verbo no plural no americano informal, mas o singular também é comum: The staff was / were friendly.',
  ex: "We stayed for three nights in May.=Ficamos três noites em maio.|The staff were very helpful.=Os funcionários foram muito prestativos.|I wouldn't recommend the restaurant.=Eu não recomendaria o restaurante.|Overall, it was good value for money.=No geral, teve um bom custo-benefício.",
  bd: ["I'd=S^I would: eu (recomendaria)|definitely=ADV^com certeza|recommend=V^forma básica, depois de I'd|this_hotel.=OA", 'Eu com certeza recomendaria este hotel.'],
  rule: 'avaliacao',
  hw: 'Escreva uma avaliação de cinco frases de um hotel, restaurante ou lugar em que você esteve: quando ficou, duas coisas boas, uma ruim com but e a recomendação com I\'d.',
  le: {
    texto: {
      t: 'Reviews · Harbor View Inn, Boston', kind: 'leitura', vozes: { 'Rita (★★★★★)': 'a', 'Dan (★★☆☆☆)': 'b' },
      intro: 'Duas avaliações do mesmo hotel em Boston. Leia e responda.',
      paras: ['Rita (★★★★★): We stayed for four nights in June and loved it! The room was spotless and the bed was very comfortable. The staff were so helpful. The location is perfect: you can walk everywhere. I\'d definitely recommend this hotel.', 'Dan (★★☆☆☆): The location was great, but that\'s the only good thing. Our room was tiny and very noisy because it was next to the elevator. Breakfast was disappointing: cold eggs and bad coffee. For $250 a night, it wasn\'t good value for money. I wouldn\'t recommend it.'],
      qs: [
        { q: 'Em que os dois concordam?', o: ['a localização é ótima', 'o café da manhã é bom', 'o quarto é grande'], a: 0 },
        { q: 'Por que o quarto do Dan era barulhento?', o: ['ficava ao lado do elevador', 'ficava na rua principal', 'tinha uma festa'], a: 0 },
        { q: 'O que a Rita achou dos funcionários?', o: ['muito prestativos', 'grosseiros', 'não comentou'], a: 0 },
        { q: 'Qual a principal crítica do Dan ao preço?', o: ['não teve bom custo-benefício', 'era barato demais', 'não aceitavam cartão'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva a sua avaliação', tipo: 'form', ok: 'Avaliação escrita corretamente.',
      pede: 'Escreva uma avaliação de um hotel ou restaurante (de verdade ou inventado), uma frase em cada linha.',
      campos: [
        { l: 'When', d: 'We stayed … / I was there …', re: '\\b(stayed|visited|was there|were there|went)\\b', f: 'iu', err: 'Diga quando você esteve lá, no passado: We stayed for three nights in May.' },
        { l: 'Good thing', d: 'algo bom, no passado', re: '\\b(was|were)\\b.*\\b(clean|great|amazing|comfortable|friendly|helpful|perfect|spotless|delicious|beautiful|nice|good|excellent)\\b', f: 'iu', err: 'Diga algo bom, no passado: The room was clean.', bad: [['\\b(is|are)\\b.*\\b(clean|great|amazing|comfortable)\\b', 'A estadia já passou: use <b>was / were</b>.']] },
        { l: 'Balance', d: '…, but …', re: ',?\\s*\\bbut\\b\\s+\\p{L}+', f: 'iu', err: 'Equilibre com but: The location was great, but the room was small.' },
        { l: 'Recommendation', d: "I'd recommend … / I wouldn't recommend …", re: "\\b(i'?d|i would|i wouldn'?t|i would not)\\s+(definitely\\s+|not\\s+)?recommend\\b", f: 'iu', err: "Recomende ou não: I'd recommend this hotel.", bad: [["\\brecommend(ing|s)\\b", "Depois de I'd, o verbo vem no básico: I'd <b>recommend</b>."]] },
        { l: 'Stars', d: 'a nota: 4 stars / ★★★★', re: '(\\d\\s*(/\\s*5|stars?)|★)', f: 'iu', err: 'Dê a nota: 4 stars ou 4/5.' },
      ],
      modelo: "We stayed for three nights in May. · The room was clean and comfortable. · The location was great, but the breakfast was disappointing. · I'd recommend this hotel. · 4 stars",
    },
  },
  deep: `
Esta lição é de **ler e escrever**. Você vai ler duas avaliações opostas do mesmo hotel e escrever a sua. É um texto curto que junta o passado, os adjetivos e a opinião.
# Passo 1: contar no passado
~ We stayed for three nights in May. = Ficamos três noites em maio.
~ The room was clean and the staff were very friendly. = O quarto estava limpo e os funcionários eram muito simpáticos.
! A estadia já acabou: **was**, **were**, **stayed**, **loved**. O que continua igual (a localização do hotel) pode ir no presente: The location **is** perfect.
# Passo 2: adjetivos fortes
@ V:Bom ou ruim?;Bom|spotless (impecável)|spacious (espaçoso)|helpful (prestativo)|amazing (incrível);Ruim|dirty (sujo)|tiny (minúsculo)|rude (grosseiro)|disappointing (decepcionante)
~ The location was perfect, but the breakfast was disappointing. = A localização era perfeita, mas o café da manhã foi decepcionante.
BR Uma avaliação com **but** parece mais confiável: The pool was nice, **but** it was crowded.
# Passo 3: recomendar
| Em inglês | Em português |
| I'd recommend this hotel. | Eu recomendaria este hotel. |
| I'd definitely stay here again. | Eu com certeza ficaria aqui de novo. |
| I wouldn't recommend it. | Eu não recomendaria. |
| good value for money | bom custo-benefício |
~ I'd definitely recommend this hotel. = Eu com certeza recomendaria este hotel.
~ Overall, it was good value for money. = No geral, teve um bom custo-benefício.
> Agora leia as duas avaliações do Harbor View Inn e escreva a sua.
? Como se diz "eu recomendaria"? || I'd recommend
? Qual tempo verbal usar para contar a estadia? || o passado: was, were, stayed
? O que é "value for money"? || custo-benefício
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('Booking a trip',
  'P:Reservar um quarto;O quê=I\'d like to book a double room;Quanto tempo=for three nights.;Pergunta=Is breakfast included?;Decisão=OK, I\'ll take it!',
  'V:Antes ou agora?;Decidido antes (going to)|I\'m going to stay downtown.;Decidido agora (will)|OK, I\'ll take it!');
V('At the airport',
  'M:O painel;No painel|Significa;On time|no horário;Delayed|atrasado;Canceled|cancelado;Boarding|embarcando;Final call|última chamada',
  'P:Do check-in à chegada;Check-in=passport, bags, seat;Security=raio-x;Gate=portão;Customs=alfândega;Baggage claim=esteira');
V('Travel problems',
  'V:Qual "perder"?;miss: transporte|I missed the bus.|We missed our flight.;lose: objeto|I lost my passport.|She lost her phone.',
  'P:Motivo e consequência;because=because the train was late;because of=because of a storm;so=so we slept at the airport');
V("What's the weather like?",
  'P:Fahrenheit × Celsius;32°F=0°C;50°F=10°C;68°F=20°C;86°F=30°C',
  'E:O tempo sempre tem sujeito;It\'s^s|raining.^v');
V('If it rains …',
  'F:A primeira condicional;if + presente^c|will + verbo^v;If it rains,|we\'ll stay home.;If it\'s sunny,|we\'ll go to the beach.',
  'V:Depois de if;Certo|If it rains, …|If I have time, …;Errado|If it will rain, …|If I will have time, …');
V('A hotel review',
  'P:Uma avaliação;Quando=We stayed for three nights.;O bom=The room was spotless.;O ruim=…, but the breakfast was cold.;Recomendação=I\'d recommend this hotel.;Nota=4 stars',
  'V:Recomendar ou não?;Sim|I\'d recommend it.|I\'d stay here again.;Não|I wouldn\'t recommend it.|Not good value for money.');
S_('Booking a trip', 'view=vista|three nights=três noites|great=ótimo|pay by card=pagar com cartão|table=mesa|bags=malas|details=detalhes|downtown=centro|New York=Nova York|flight=voo|send=mandar|help=ajudar');
S_('At the airport', 'four=quatro|three thirty=três e meia|starts=começa|passengers=passageiros|two-hour=de duas horas|Dallas=Dallas|leaves=sai|here\'s=aqui está|seat=assento|should=deveria|two oh five=dois zero cinco|fourteen thirty=quatorze e trinta');
S_('Travel problems', 'terrible=péssimo|connection=conexão|first flight=primeiro voo|slept=dormiu (sleep)|next day=dia seguinte|train=trem|station=estação|gave=deu (give)|went=foi (go)|bought=comprou (buy)|clothes=roupas|phone=celular|bus=ônibus|key=chave');
S_("What's the weather like?", 'freezing=congelante|twenty=vinte|minus seven=menos sete|about=mais ou menos|clouds=nuvens|says=diz|eighty-six=oitenta e seis|this weekend=neste fim de semana|take=levar|snowing=nevando');
S_('If it rains …', 'tomorrow=amanhã|depends=depende|hotel=hotel|late=tarde|call=ligar|home=casa|price=preço|weekend=fim de semana');
S_('A hotel review', 'read=leu (read)|before=antes|booked=reservou|most people=a maioria das pessoas|said=disse (say)|some=alguns|small=pequeno|three nights=três noites|May=maio|restaurant=restaurante|overall=no geral|definitely=com certeza|again=de novo|crowded=lotado|walk everywhere=ir a pé a todo lugar|elevator=elevador|cold eggs=ovos frios|bad coffee=café ruim|only good thing=única coisa boa|loved=adorou');
['dallas', 'harbor', 'inn', 'rita', 'dan'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'en-booking': {
    o: 'Reservar é **book**: **I\'d like to book a room for two nights**. E **will** para decisões na hora: **OK, I\'ll take it!**',
    q: 'Para reservar hotel, voo e passeios, por telefone, e-mail ou no balcão.',
    p: 'Reservar sozinha é o primeiro passo de qualquer viagem independente.',
  },
  'en-airport': {
    o: 'Painéis e avisos usam palavras curtas: **on time**, **delayed**, **canceled**, **boarding**, **gate**, **final call**. E no check-in: **passport**, **bags to check**, **boarding pass**.',
    q: 'No aeroporto: check-in, painéis, avisos de embarque e chegada.',
    p: 'Os avisos de aeroporto são rápidos. Conhecer as palavras-chave evita perder o voo.',
  },
  'en-trouble': {
    o: '**miss** é perder um transporte (missed the flight); **lose** é perder um objeto (lost my passport). Para contar: passado + **because**, **because of** ou **so**.',
    q: 'Para contar e resolver imprevistos: voo perdido, mala extraviada, objeto roubado.',
    p: 'Imprevistos acontecem. Saber explicar o que houve é o primeiro passo para resolver.',
  },
  'en-weather': {
    o: 'O tempo sempre tem o sujeito **it**: **It\'s raining**. Pergunta: **What\'s the weather like?** Previsão com **will**. E nos EUA, graus em **Fahrenheit**.',
    q: 'Para falar do tempo, entender a previsão e não se assustar com os graus americanos.',
    p: 'O tempo é o assunto número um de conversa fiada em inglês. E 86 graus não é o fim do mundo: é 30°C.',
  },
  'en-if': {
    o: 'A **primeira condicional**: **If** + presente, **will** + verbo. **If it rains, we\'ll stay home.** Depois de if, nunca will.',
    q: 'Para fazer planos que dependem do tempo, do dinheiro ou do horário.',
    p: '"If it will rain" é um erro clássico de quem pensa em português ("se chover"). Esta lição resolve isso.',
  },
  'en-review': {
    o: 'Uma avaliação conta a estadia no **passado**, usa adjetivos fortes e **but** para equilibrar, e termina com **I\'d recommend** ou **I wouldn\'t recommend**.',
    q: 'Para ler avaliações antes de reservar e escrever a sua depois da viagem.',
    p: 'Avaliações decidem onde ficar e onde comer. Ler e escrever avaliações é usar o inglês de verdade.',
  },
});
Object.assign(CZH, {
  'en-booking': ['reservar', 'decisão tomada agora', 'está incluído'],
  'en-airport': ['voo atrasado', 'portão de embarque', 'despachar a mala'],
  'en-trouble': ['perder o voo', 'perder um objeto', 'a consequência'],
  'en-weather': ['está chovendo', 'a pergunta do tempo', 'previsão'],
  'en-if': ['rain, depois de if', 'o resultado: vamos', 'condição: se'],
  'en-review': ['estava (no passado)', 'recommend, depois de I\'d', 'ideias opostas'],
});
Object.assign(OBJ, {
  'en-booking': { o: 'Consigo reservar hotel e passagem e decidir na hora com will.', a: 'Você consegue reservar um quarto por telefone em inglês?', ref: 'Goods and services (travel) · A2' },
  'en-airport': { o: 'Consigo me virar num aeroporto: check-in, painéis e avisos.', a: 'Você entende delayed, boarding e final call?', ref: 'Travel · A2' },
  'en-trouble': { o: 'Consigo contar um imprevisto de viagem e pedir ajuda.', a: 'Você sabe a diferença entre miss e lose?', ref: 'Narrating · A2' },
  'en-weather': { o: 'Consigo falar do tempo, entender a previsão e converter Fahrenheit.', a: 'Você consegue dizer como está o tempo e entender 86°F?', ref: 'Conversation · A2' },
  'en-if': { o: 'Consigo fazer planos com condição usando a primeira condicional.', a: 'Você consegue dizer "se chover, vamos ficar em casa"?', ref: 'Describing plans · A2' },
  'en-review': { o: 'Consigo ler avaliações e escrever a minha de um hotel ou restaurante.', a: 'Você consegue escrever uma avaliação com but e I\'d recommend?', ref: 'Reviews · A2' },
});
MOD_OBJ[11] = ['Consigo reservar e me virar no aeroporto.', 'Consigo contar e resolver imprevistos de viagem.', 'Consigo falar do tempo e fazer planos com if.', 'Consigo ler e escrever uma avaliação.'];

EN_MODS.push({ lv: 'A2', n: 'Viagens', l: ['en-booking', 'en-airport', 'en-trouble', 'en-weather', 'en-if', 'en-review'] });
