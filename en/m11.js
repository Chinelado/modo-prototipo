// Inglês · A2 · Módulo 11 · Health (Saúde). Formato de en/curso.js.

NL('en-appt', {
  de: 'I need an appointment', pt: 'Marcar, remarcar e cancelar consultas', gt: 'make, reschedule, cancel · datas e horas',
  gx: 'Para marcar: I\'d like to make an appointment with Dr. Lee. Para remarcar: I need to reschedule my appointment. Para cancelar: I\'d like to cancel. A recepção pergunta: What day works for you? (que dia é bom para você?) e Is 3 p.m. OK?',
  ge: "I'd like to make an appointment with Dr. Lee.=Eu queria marcar uma consulta com a dra. Lee.|I need to reschedule my appointment.=Preciso remarcar a minha consulta.|Does Tuesday at three work for you?=Terça às três está bom para você?",
  v: 'appointment=consulta, horário marcado=📅|make an appointment=marcar consulta=🗓️|reschedule=remarcar=🔄|cancel=cancelar=❌|works for you=está bom para você=👍|earliest=o mais cedo possível=⏩|available=disponível=🟢|check-up=check-up, exame de rotina=🩺|clinic=clínica=🏥|front desk=recepção=🛎️',
  x: 'dentist=dentista|eye doctor=oftalmologista|insurance=plano de saúde, seguro|new patient=paciente novo|date of birth=data de nascimento|reminder=lembrete|arrive early=chegar cedo|fill out=preencher|form=formulário|walk-in=sem hora marcada',
  dlg: "Hi, I'd like to make an appointment with Dr. Lee.=Oi, eu queria marcar uma consulta com a dra. Lee.|Sure. Are you a new patient?=Claro. Você é paciente novo?|Yes. What's the earliest you have?=Sou. Qual é o horário mais cedo que vocês têm?|Thursday at ten. Does that work for you?=Quinta às dez. Está bom para você?",
  cz: "I'd like to ___ an appointment.=make=do=take|I need to ___ my appointment. (remarcar)=reschedule=cancel=make|Does Monday ___ for you?=work=works=is good",
  whys: 'marcar consulta é make an appointment|mudar para outro dia: reschedule|depois de does, o verbo fica no básico: work',
  pts: 'make an appointment = marcar consulta (e não "do" ou "mark"). reschedule = remarcar; cancel = cancelar.|Para combinar o horário: What day works for you? Does Tuesday work for you? (Terça está bom?) Resposta: That works! / Tuesday doesn\'t work for me.|Na primeira consulta: Are you a new patient? Do you have insurance? Please arrive 15 minutes early to fill out some forms.|Datas e horas: on Tuesday, at 3 p.m., on May 5th. E para o mais cedo possível: What\'s the earliest you have?',
  ex: "I'd like to cancel my appointment for tomorrow.=Eu queria cancelar a minha consulta de amanhã.|Tuesday doesn't work for me. How about Wednesday?=Terça não dá para mim. Que tal quarta?|Please arrive fifteen minutes early.=Por favor, chegue quinze minutos antes.|Do you have insurance?=Você tem plano de saúde?",
  bd: ["I'd_like_to=V^eu queria|make=V^make: marcar|an_appointment=OA^uma consulta|with_Dr._Lee.=PP^com quem", 'Eu queria marcar uma consulta com a dra. Lee.'],
  rule: 'consulta',
  hw: 'Escreva três telefonemas curtos para uma clínica: um para marcar, um para remarcar e um para cancelar. Em cada um, diga o dia e a hora.',
  deep: `
Hoje você aprende a marcar, remarcar e cancelar consultas: no médico, no dentista, em qualquer serviço com hora marcada.
# Passo 1: marcar
~ I'd like to make an appointment with Dr. Lee. = Eu queria marcar uma consulta com a dra. Lee.
~ What's the earliest you have? = Qual é o horário mais cedo que vocês têm?
BR "Marcar consulta" é **make** an appointment. "Mark an appointment" não existe, e **appointment** é para consulta; **date** é encontro romântico.
# Passo 2: combinar o horário
| A recepção pergunta | Você responde |
| What day works for you? | Tuesday works for me. |
| Does 3 p.m. work for you? | That works! |
| How about Thursday at ten? | Thursday doesn't work for me. |
~ Does Tuesday at three work for you? = Terça às três está bom para você?
~ Tuesday doesn't work for me. How about Wednesday? = Terça não dá para mim. Que tal quarta?
! **work** aqui quer dizer "funcionar, servir": Does it work for you? = Serve para você?
# Passo 3: remarcar e cancelar
| Em inglês | Em português |
| reschedule | remarcar |
| cancel | cancelar |
| move it to Friday | passar para sexta |
~ I need to reschedule my appointment. = Preciso remarcar a minha consulta.
~ I'd like to cancel my appointment for tomorrow. = Eu queria cancelar a minha consulta de amanhã.
# Passo 4: a primeira consulta
~ Are you a new patient? = Você é paciente novo?
~ Do you have insurance? = Você tem plano de saúde?
~ Please arrive fifteen minutes early. = Por favor, chegue quinze minutos antes.
! Nos Estados Unidos, **insurance** (o plano de saúde) é a primeira pergunta em quase toda clínica.
# Passo 5: som da lição, schedule
No inglês americano, **schedule** soa "skédjul", com **sk**. (No britânico, "shédjul".) E **reschedule**: "ri-skédjul".
~ I need to reschedule. = Preciso remarcar.
> Treine agora: marque uma consulta em voz alta e peça o horário mais cedo.
? Como se diz "marcar consulta"? || make an appointment
? Como se pergunta "terça está bom para você?" || Does Tuesday work for you?
? Como se diz "remarcar"? || reschedule
`,
});

NL('en-pharmacy', {
  de: 'At the pharmacy', pt: 'Remédio e dose', gt: 'twice a day, after meals · should',
  gx: 'Na farmácia: Do you have anything for a cold? (tem algo para resfriado?). A dose: take one pill twice a day (tome um comprimido duas vezes ao dia), after meals (depois das refeições), with water. Remédio sem receita é over-the-counter; com receita, prescription.',
  ge: "Do you have anything for a sore throat?=Vocês têm alguma coisa para dor de garganta?|Take one pill twice a day after meals.=Tome um comprimido duas vezes ao dia, depois das refeições.|You shouldn't drink alcohol with this medicine.=Você não deveria beber álcool com este remédio.",
  v: 'pharmacy=farmácia=💊|pill=comprimido=💊|dose=dose=📏|twice a day=duas vezes ao dia=2️⃣|after meals=depois das refeições=🍽️|prescription=receita=📄|over-the-counter=sem receita=🛒|side effects=efeitos colaterais=⚠️|allergic to=alérgico a=🤧|pharmacist=farmacêutico=🧑‍⚕️',
  x: 'tablet=comprimido|syrup=xarope|drops=gotas|cream=pomada, creme|painkiller=analgésico|before bed=antes de dormir|on an empty stomach=em jejum|every 6 hours=a cada 6 horas|drowsy=sonolento|refill=renovar (a receita)',
  dlg: "Hi, do you have anything for a cough?=Oi, vocês têm alguma coisa para tosse?|Yes, this syrup is good. Are you allergic to anything?=Temos, este xarope é bom. Você é alérgico a alguma coisa?|No, I'm not. How often do I take it?=Não. De quanto em quanto tempo eu tomo?|Every six hours. It can make you drowsy, so you shouldn't drive.=A cada seis horas. Pode dar sono, então você não deveria dirigir.",
  cz: 'Take one pill ___ a day. (duas vezes)=twice=two=two times of|Do you have anything ___ a cold?=for=to=against of|Are you allergic ___ anything?=to=of=with',
  whys: 'duas vezes: twice|remédio para algo: for a cold|alérgico a: allergic to',
  pts: 'Para pedir: Do you have anything for a cold / a headache / a cough? Para explicar: I have a sore throat. I have a fever.|A dose: one pill, twice a day (ou three times a day), every six hours, after meals, before bed, with water.|over-the-counter = sem receita (pode comprar direto). prescription = receita médica. Nos Estados Unidos, muitos remédios que no Brasil são vendidos livremente precisam de receita.|Avisos da bula: May cause drowsiness (pode causar sono). Do not take with alcohol. Keep out of reach of children (manter longe de crianças).',
  ex: "Do I need a prescription for this?=Preciso de receita para isto?|I'm allergic to penicillin.=Eu sou alérgica a penicilina.|Take it before bed.=Tome antes de dormir.|Are there any side effects?=Tem algum efeito colateral?",
  bd: ['Take=V^imperativo: tome|one_pill=OA^um comprimido|twice_a_day=T^duas vezes ao dia|after_meals.=T^depois das refeições', 'Tome um comprimido duas vezes ao dia, depois das refeições.'],
  rule: 'farmacia',
  hw: 'Escreva a "bula" em inglês de um remédio que você conhece: para que serve (for …), a dose (… times a day, after meals) e dois avisos (Do not … / You shouldn\'t …).',
  deep: `
Hoje você vai à farmácia: pede um remédio, entende a dose e lê os avisos. Informações em que é importante não errar.
# Passo 1: pedir um remédio
~ Do you have anything for a sore throat? = Vocês têm alguma coisa para dor de garganta?
~ Do I need a prescription for this? = Preciso de receita para isto?
| Em inglês | Em português |
| over-the-counter | sem receita |
| prescription | receita médica |
| pharmacist | farmacêutico |
| painkiller | analgésico |
BR Nos Estados Unidos, vários remédios vendidos livremente no Brasil exigem **prescription**. E o farmacêutico costuma ajudar a escolher o over-the-counter.
# Passo 2: a dose
@ P:Como tomar;Quantidade=one pill, two tablets, ten drops;Quantas vezes=once a day, twice a day, three times a day;De quanto em quanto=every six hours;Quando=after meals, before bed, on an empty stomach
~ Take one pill twice a day after meals. = Tome um comprimido duas vezes ao dia, depois das refeições.
~ Take it before bed. = Tome antes de dormir.
! **once** (uma vez), **twice** (duas vezes) e depois **three times**, **four times**.
# Passo 3: alergias e efeitos
~ Are you allergic to anything? = Você é alérgico a alguma coisa?
~ I'm allergic to penicillin. = Eu sou alérgica a penicilina.
~ Are there any side effects? = Tem algum efeito colateral?
! Alérgico **a** = allergic **to**.
# Passo 4: os avisos da bula
| Na bula | Significa |
| May cause drowsiness. | Pode causar sono. |
| Do not take with alcohol. | Não tome com álcool. |
| Keep out of reach of children. | Mantenha longe do alcance de crianças. |
| Do not exceed the stated dose. | Não ultrapasse a dose indicada. |
~ You shouldn't drink alcohol with this medicine. = Você não deveria beber álcool com este remédio.
> Treine agora: explique em voz alta a dose de um remédio que você já tomou.
? Como se diz "duas vezes ao dia"? || twice a day
? O que é "over-the-counter"? || remédio sem receita
? Como se diz "sou alérgica a penicilina"? || I'm allergic to penicillin.
`,
});

NL('en-healthy', {
  de: 'Healthy habits', pt: 'Conselhos para uma vida saudável', gt: 'should / ought to · imperativo · comparativo',
  gx: 'Para conselhos, should (ou ought to, mais formal): You should sleep more. Para instruções diretas, o imperativo: Drink more water! Don\'t skip breakfast! E o comparativo ajuda a comparar hábitos: Walking is healthier than driving.',
  ge: "You should eat more vegetables.=Você deveria comer mais verduras.|Don't skip breakfast!=Não pule o café da manhã!|Walking is healthier than driving.=Caminhar é mais saudável que dirigir.",
  v: 'healthy=saudável=🥗|healthier=mais saudável=🥦|habit=hábito=🔁|ought to=deveria (formal)=👉|sleep=dormir=😴|exercise=fazer exercício; exercício=🏃|skip=pular (uma refeição)=⏭️|stress=estresse=😫|junk food=comida não saudável=🍔|balanced diet=alimentação equilibrada=⚖️',
  x: 'get enough sleep=dormir o suficiente|stay hydrated=se manter hidratado|cut down on=diminuir|avoid=evitar|stretch=alongar|screen time=tempo de tela|sugar=açúcar|salt=sal|energy=energia|lifestyle=estilo de vida',
  dlg: "I'm always tired. What should I do?=Estou sempre cansada. O que eu deveria fazer?|You should go to bed earlier and cut down on coffee.=Você deveria ir dormir mais cedo e diminuir o café.|I know. And I never exercise.=Eu sei. E eu nunca faço exercício.|Start slowly. Walking is better than nothing!=Comece devagar. Caminhar é melhor que nada!",
  cz: 'You ___ sleep more. (deveria)=should=should to=must to|You ought ___ drink more water.=to=-=for|Walking is ___ than driving. (healthy)=healthier=more healthy=healthiest',
  whys: 'conselho: should + verbo, sem to|ought sempre leva to: ought to drink|healthy termina em -y: healthier',
  pts: 'should = deveria (conselho): You should sleep more. You shouldn\'t eat so much sugar. Pergunta: What should I do?|ought to = o mesmo que should, um pouco mais formal: You ought to see a doctor. Diferente do should, leva to.|O imperativo dá instruções diretas: Drink more water. Don\'t skip breakfast. Para suavizar: Try to … (tente…).|Para comparar hábitos: Walking is healthier than driving. Sleeping well is more important than you think.',
  ex: "You ought to see a doctor.=Você deveria ir ao médico.|Try to get eight hours of sleep.=Tente dormir oito horas.|You shouldn't eat so much junk food.=Você não deveria comer tanta porcaria.|Cut down on sugar and salt.=Diminua o açúcar e o sal.",
  bd: ['You=S|should=MOD^conselho|eat=INF^direto, sem to|more_vegetables.=OA', 'Você deveria comer mais verduras.'],
  rule: 'conselho',
  hw: 'Escreva seis conselhos de saúde para alguém da sua família: dois com should, um com ought to, dois com o imperativo (um com Don\'t) e um com um comparativo (… is healthier than …).',
  deep: `
Hoje você dá e pede conselhos de saúde: dormir, comer, se mexer. O inglês tem três ferramentas para isso: **should**, **ought to** e o **imperativo**.
# Passo 1: should e ought to
@ V:should ou ought to?;should (o mais comum)|You should sleep more.|You shouldn't skip meals.;ought to (mais formal, com to)|You ought to see a doctor.|You ought to rest.
~ You should eat more vegetables. = Você deveria comer mais verduras.
~ You ought to see a doctor. = Você deveria ir ao médico.
~ What should I do? = O que eu deveria fazer?
! **should** vem sem to; **ought** vem sempre com **to**.
# Passo 2: o imperativo
Para instruções diretas, como num cartaz ou de um médico:
| Faça | Não faça |
| Drink more water. | Don't skip breakfast. |
| Get enough sleep. | Don't eat late at night. |
| Try to walk every day. | Don't stay on your phone in bed. |
~ Don't skip breakfast! = Não pule o café da manhã!
~ Try to get eight hours of sleep. = Tente dormir oito horas.
BR **Try to** + verbo (tente…) deixa o imperativo mais gentil.
# Passo 3: comparar hábitos
~ Walking is healthier than driving. = Caminhar é mais saudável que dirigir.
~ Walking is better than nothing! = Caminhar é melhor que nada!
! Atividades como sujeito vão com **-ing**: **Walking** is healthy. **Sleeping** well is important.
# Passo 4: hábitos saudáveis
| Em inglês | Em português |
| get enough sleep | dormir o suficiente |
| stay hydrated | se manter hidratado |
| cut down on sugar | diminuir o açúcar |
| a balanced diet | uma alimentação equilibrada |
| screen time | tempo de tela |
~ Cut down on sugar and salt. = Diminua o açúcar e o sal.
> Treine agora: dê três conselhos de saúde para você mesma, com should, ought to e o imperativo.
? Como se diz "você deveria dormir mais"? || You should sleep more.
? ought ou ought to: "You ___ rest"? || ought to
? Como se diz "não pule o café da manhã"? || Don't skip breakfast.
`,
});

NL('en-emergency', {
  de: "It's an emergency", pt: 'Emergências', gt: 'What happened? · passado simples · 911',
  gx: 'Nos Estados Unidos, o número de emergência é 911 (nine-one-one) para polícia, bombeiros e ambulância. A atendente pergunta: What\'s your emergency? What happened? Where are you? Responda com frases curtas no passado: My friend fell. He hit his head.',
  ge: "I need an ambulance!=Preciso de uma ambulância!|My friend fell and hit his head.=O meu amigo caiu e bateu a cabeça.|We're at 25 Oak Street.=Estamos na Oak Street, 25.",
  v: 'emergency=emergência=🚨|ambulance=ambulância=🚑|police=polícia=🚓|fire=fogo, incêndio=🔥|accident=acidente=💥|happened=aconteceu=❗|fell=caiu (fall)=🤕|hit=bateu (hit)=👊|bleeding=sangrando=🩸|breathe=respirar=😮‍💨',
  x: 'unconscious=inconsciente|hurt=machucado|burn=queimadura; queimar|broken leg=perna quebrada|car crash=batida de carro|stolen=roubado|lost=perdido|help!=socorro!|stay calm=fique calmo|on the way=a caminho',
  dlg: "911, what's your emergency?=911, qual é a sua emergência?|There was an accident. A man fell off his bike.=Houve um acidente. Um homem caiu da bicicleta.|Is he breathing? Is he bleeding?=Ele está respirando? Está sangrando?|Yes, he's breathing, but his leg is bleeding.=Está respirando, mas a perna está sangrando.",
  cz: 'What ___? (aconteceu)=happened=did happen=happen|My friend ___ and hit his head. (fall)=fell=falled=fall|Is he ___? (respirando)=breathing=breathe=breath',
  whys: 'a pergunta é sobre o sujeito (o que aconteceu): What happened?, sem did|fall é irregular: fell|para "está respirando": to be + -ing, breathing',
  pts: 'Emergência nos Estados Unidos: 911 (nine-one-one), para polícia, bombeiros e ambulância. É de graça e funciona de qualquer celular.|A atendente pergunta: What\'s your emergency? What happened? Where are you? Is he breathing? Responda curto e claro.|What happened? não leva did, porque what é o sujeito (lembra da lição da escola?).|Diga o lugar primeiro, se puder: We\'re at 25 Oak Street. I\'m on Main Street, near the bank. A ajuda está a caminho: Help is on the way.',
  ex: "There's a fire in my building!=Tem um incêndio no meu prédio!|My wallet was stolen.=A minha carteira foi roubada.|Please stay calm. Help is on the way.=Por favor, fique calmo. A ajuda está a caminho.|He's unconscious, but he's breathing.=Ele está inconsciente, mas está respirando.",
  bd: ['My_friend=S|fell=V^fall no passado: caiu|and=C|hit=V^hit no passado: igual ao presente|his_head.=OA', 'O meu amigo caiu e bateu a cabeça.'],
  rule: 'emergencia',
  hw: 'Escreva uma ligação de emergência inventada, de seis falas: o que aconteceu (no passado), onde você está, o estado da pessoa e a resposta da atendente.',
  deep: `
Hoje você aprende o que dizer numa emergência. Tomara que você nunca precise, mas saber estas frases traz tranquilidade em qualquer viagem.
# Passo 1: o 911
Nos Estados Unidos e no Canadá, o número é **911** (nine-one-one): polícia, bombeiros e ambulância, tudo num número só.
~ 911, what's your emergency? = 911, qual é a sua emergência?
~ I need an ambulance! = Preciso de uma ambulância!
| Em inglês | Em português |
| police | polícia |
| ambulance | ambulância |
| fire department | bombeiros |
# Passo 2: o que aconteceu
~ What happened? = O que aconteceu?
~ There was an accident. = Houve um acidente.
~ My friend fell and hit his head. = O meu amigo caiu e bateu a cabeça.
! **What happened?** não leva did: o what é o sujeito. Responda com o **passado simples**: fell, hit, crashed, broke.
# Passo 3: onde você está
~ We're at 25 Oak Street. = Estamos na Oak Street, 25.
~ I'm on Main Street, near the bank. = Estou na Main Street, perto do banco.
BR Nos endereços americanos, o **número vem antes** da rua: 25 Oak Street.
# Passo 4: o estado da pessoa
@ P:As perguntas da atendente;Respira?=Is he breathing?;Sangra?=Is he bleeding?;Consciente?=Is he conscious?;Onde?=Where are you?
~ He's unconscious, but he's breathing. = Ele está inconsciente, mas está respirando.
~ Please stay calm. Help is on the way. = Por favor, fique calmo. A ajuda está a caminho.
# Passo 5: outras emergências
~ There's a fire in my building! = Tem um incêndio no meu prédio!
~ My wallet was stolen. = A minha carteira foi roubada.
> Treine agora: diga em voz alta o seu endereço do jeito americano (número antes da rua).
? Qual é o número de emergência nos Estados Unidos? || 911 (nine-one-one)
? Como se pergunta "o que aconteceu?" || What happened?
? Qual o passado de fall? || fell
`,
});

NL('en-bored', {
  de: 'Bored or boring?', pt: 'Sentimentos: -ed ou -ing?', gt: 'adjetivos em -ed × -ing',
  gx: 'Adjetivos em -ed dizem como a pessoa se sente: I\'m bored (estou entediada). Adjetivos em -ing dizem como a coisa é, o que causa o sentimento: The movie is boring (o filme é chato). Trocar muda tudo: "I\'m boring" quer dizer "eu sou chata"!',
  ge: "I'm bored.=Estou entediada.|This class is boring.=Esta aula é chata.|I'm interested in history.=Eu me interesso por história.",
  v: 'bored=entediado=🥱|boring=chato, entediante=😴|tired=cansado=😩|tiring=cansativo=🏋️|interested=interessado=🤔|interesting=interessante=💡|excited=animado=🤩|exciting=empolgante=🎢|worried=preocupado=😟|relaxed=relaxado=😌',
  x: 'relaxing=relaxante|surprised=surpreso|surprising=surpreendente|confused=confuso (a pessoa)|confusing=confuso (a coisa)|embarrassed=envergonhado|embarrassing=constrangedor|annoyed=irritado|annoying=irritante|stressed=estressado',
  dlg: "How was the conference?=Como foi a conferência?|Honestly? It was so boring. I was bored all day.=Sinceramente? Foi muito chata. Fiquei entediada o dia todo.|Really? I thought the topic was interesting.=Sério? Achei o tema interessante.|The topic was interesting, but the speaker was tiring!=O tema era interessante, mas o palestrante era cansativo!",
  cz: "I'm ___. I have nothing to do. (entediada)=bored=boring=bore|The movie was ___. (chato)=boring=bored=bore|I'm very ___ in art. (interessada)=interested=interesting=interest",
  whys: 'como a pessoa se sente: -ed, bored|como a coisa é: -ing, boring|a pessoa se interessa: interested in',
  pts: '-ed = como a pessoa se sente: I\'m tired, I\'m bored, I\'m excited, I\'m worried.|-ing = como a coisa (ou a pessoa) é, o que causa o sentimento: The trip was tiring. The class is boring. The news is exciting.|Cuidado: "I\'m boring" quer dizer "eu sou chata"; "I\'m bored" quer dizer "estou entediada". "I\'m interesting" quer dizer "eu sou interessante".|Muitos vêm com preposição: interested in, excited about, worried about, tired of.',
  ex: "I'm so excited about the trip!=Estou muito animada com a viagem!|The news was surprising.=A notícia foi surpreendente.|I'm worried about my exam.=Estou preocupada com a minha prova.|This traffic is so annoying!=Este trânsito é muito irritante!",
  bd: ["I'm=S^eu estou|bored.=ADJ^-ed: como eu me sinto", 'Estou entediada.'],
  rule: 'ed_ing',
  hw: 'Escreva cinco pares de frases, um com -ed e um com -ing (I was tired. The day was tiring.). Use bored/boring, tired/tiring, interested/interesting, excited/exciting e worried.',
  deep: `
Hoje você aprende a falar de sentimentos sem cair numa armadilha clássica: **bored** e **boring** parecem iguais, mas um diz como você **se sente** e o outro como a coisa **é**.
# Passo 1: -ed, como a pessoa se sente
| Em inglês | Em português |
| I'm bored. | Estou entediada. |
| I'm tired. | Estou cansada. |
| I'm interested. | Estou interessada. |
| I'm excited. | Estou animada. |
| I'm worried. | Estou preocupada. |
~ I'm bored. = Estou entediada.
~ I'm so excited about the trip! = Estou muito animada com a viagem!
# Passo 2: -ing, como a coisa é
| Em inglês | Em português |
| The class is boring. | A aula é chata. |
| The trip was tiring. | A viagem foi cansativa. |
| The book is interesting. | O livro é interessante. |
| The news is exciting. | A notícia é empolgante. |
~ This class is boring. = Esta aula é chata.
@ E:A coisa causa, a pessoa sente;The movie is boring^s|→|I'm bored.^p
# Passo 3: a armadilha
@ V:Cuidado com o que você diz;Você quer dizer|I'm bored. (estou entediada)|I'm interested. (me interesso);Se trocar, vira|I'm boring. (sou chata!)|I'm interesting. (sou interessante)
BR Em português, "estou chateada" e "sou chata" já mudam o verbo. Em inglês, o verbo é o mesmo (**to be**), e só o fim do adjetivo muda tudo.
# Passo 4: com preposição
| Em inglês | Em português |
| interested in | interessado em |
| excited about | animado com |
| worried about | preocupado com |
| tired of | cansado de |
~ I'm interested in history. = Eu me interesso por história.
~ I'm worried about my exam. = Estou preocupada com a minha prova.
> Treine agora: diga como você se sente hoje (-ed) e como foi o seu dia (-ing).
? Como se diz "estou entediada"? || I'm bored.
? Como se diz "o filme foi chato"? || The movie was boring.
? O que quer dizer "I'm boring"? || "eu sou chata"
`,
});

NL('en-sick', {
  de: 'Calling in sick', pt: 'Ler uma bula e avisar que está doente', gt: 'because, so',
  gx: 'Para avisar o trabalho que está doente: I\'m calling in sick today (vou faltar por doença). Explique com because (o motivo) e so (a consequência): I have a fever, so I can\'t come in. I\'m staying home because I have the flu.',
  ge: "I'm sorry, but I can't come in today because I'm sick.=Desculpe, mas não posso ir hoje porque estou doente.|I have a high fever, so I'm going to see a doctor.=Estou com febre alta, então vou ao médico.|I'll send you a doctor's note.=Vou mandar um atestado médico.",
  v: "call in sick=avisar que vai faltar por doença=🤒|because=porque (motivo)=💡|so=então, por isso (consequência)=➡️|come in=ir (ao trabalho)=🏢|flu=gripe=🤧|doctor's note=atestado médico=📄|sick day=dia de licença por doença=🛌|feel better=melhorar=🙂|work from home=trabalhar de casa=🏠|recover=se recuperar=💪",
  x: 'manager=gerente|cover my shifts=cobrir os meus turnos|catch up=pôr em dia|contagious=contagioso|rest=descanso; descansar|throw up=vomitar|dizzy=tonto|keep you posted=te manter informado|get well soon=melhoras|label=rótulo, bula',
  dlg: "Hi, Mr. Brown. This is Ana. I'm sorry, but I'm calling in sick today.=Oi, sr. Brown. Aqui é a Ana. Desculpe, mas vou faltar hoje porque estou doente.|Oh no, what's wrong?=Ah, não, o que houve?|I have the flu, so I'm staying home.=Estou com gripe, então vou ficar em casa.|OK, get well soon! Keep me posted.=Tudo bem, melhoras! Me mantenha informado.",
  cz: "I can't come in ___ I'm sick.=because=so=but|I have a fever, ___ I'm staying home.=so=because=or|I'll send you a doctor's ___. (atestado)=note=letter=paper",
  whys: 'o motivo vem depois de because|a consequência vem depois de so|atestado médico é doctor\'s note',
  pts: 'because dá o motivo: I\'m staying home because I have the flu. so dá a consequência: I have the flu, so I\'m staying home. A ordem das ideias inverte.|Para avisar: I\'m calling in sick today. I can\'t come in today. Para propor: I can work from home. I\'ll send you a doctor\'s note.|Na bula (label): Directions (como usar), Warnings (avisos), Do not use if… (não use se…), Ask a doctor before use if… (consulte um médico antes se…).|Resposta de quem recebe: Get well soon! (melhoras!) Take care! Keep me posted.',
  ex: "I'm dizzy, so I can't drive.=Estou tonta, então não posso dirigir.|She's not here today because her son is sick.=Ela não está hoje porque o filho está doente.|Could someone cover my shifts?=Alguém poderia cobrir os meus turnos?|I'll catch up on my work tomorrow.=Amanhã ponho o meu trabalho em dia.",
  bd: ["I_have_a_high_fever,=C^o motivo primeiro|so=C^so: a consequência|I'm_going_to=V^plano|see_a_doctor.=OA", 'Estou com febre alta, então vou ao médico.'],
  rule: 'doente',
  hw: 'Escreva uma mensagem para o seu chefe (ou professor) avisando que está doente, com cinco frases: o aviso, o motivo com because, a consequência com so, uma proposta e o fechamento.',
  le: {
    texto: {
      t: 'Medicine label · ColdAway Day & Night', kind: 'leitura',
      intro: 'A Ana está gripada e comprou um remédio na farmácia. Leia a bula e responda.',
      paras: ['Uses: temporarily relieves cold and flu symptoms: fever, headache, sore throat, cough', 'Directions: adults and children 12 years and over: take 2 tablets every 6 hours. Do not take more than 8 tablets in 24 hours.', 'Night tablets may cause drowsiness. Do not drive after taking them.', 'Warnings: do not use with other medicines that contain acetaminophen. Do not drink alcohol.', 'Ask a doctor before use if you are pregnant or have liver disease.'],
      qs: [
        { q: 'Para que serve o remédio?', o: ['sintomas de resfriado e gripe', 'dor nas costas', 'alergia'], a: 0 },
        { q: 'Qual é a dose para adultos?', o: ['2 comprimidos a cada 6 horas', '8 comprimidos de uma vez', '1 comprimido por dia'], a: 0 },
        { q: 'O que não se deve fazer depois de tomar o comprimido da noite?', o: ['dirigir', 'comer', 'dormir'], a: 0 },
        { q: 'Quem deve falar com um médico antes de usar?', o: ['grávidas e quem tem doença no fígado', 'crianças de 12 anos', 'quem tem dor de cabeça'], a: 0 },
      ],
    },
    escrita: {
      t: 'Avise o seu chefe que você está doente', tipo: 'form', ok: 'Mensagem escrita corretamente.',
      pede: 'Escreva uma mensagem para o seu chefe, o Mr. Brown, avisando que vai faltar. Uma frase em cada linha.',
      campos: [
        { l: 'Greeting', d: 'Hi Mr. Brown, / Dear Mr. Brown,', re: '^(hi|hello|dear|good morning)\\b.*\\bbrown\\b', f: 'iu', err: 'Comece com Hi Mr. Brown,' },
        { l: 'The news', d: "I'm calling in sick today. / I can't come in today.", re: "\\b(calling in sick|call in sick|can'?t come in|cannot come in|won'?t be (in|at work)|not coming in|stay(ing)? home)\\b", f: 'iu', err: "Avise: I'm sorry, but I can't come in today." },
        { l: 'Because', d: 'o motivo, com because', re: '\\bbecause\\b\\s+\\p{L}+', f: 'iu', err: 'Dê o motivo com because: … because I have the flu.' },
        { l: 'So', d: 'a consequência, com so', re: '\\bso\\b\\s+\\p{L}+', f: 'iu', err: "Diga a consequência com so: I have a fever, so I'm going to see a doctor." },
        { l: 'Offer', d: "I can work from home. / I'll send a doctor's note.", re: "\\b(work from home|doctor'?s note|catch up|answer (my )?e-?mails|check (my )?e-?mails|keep you posted|tomorrow)\\b", f: 'iu', err: "Proponha algo: I'll send you a doctor's note. / I can check my e-mails." },
        { l: 'Sign-off', d: 'Thanks, Ana / Best, Ana', re: '^(thanks|thank you|best|regards|sincerely)\\b.*\\p{Lu}\\p{L}+', f: 'iu', err: 'Feche com Thanks, Ana ou Best, Ana.' },
      ],
      modelo: "Hi Mr. Brown, · I'm sorry, but I can't come in today. · I'm staying home because I have the flu. · I have a high fever, so I'm going to see a doctor. · I'll send you a doctor's note tomorrow. · Thanks, Ana",
    },
  },
  deep: `
Esta lição é de **ler e escrever**. Você vai ler a bula de um remédio americano e escrever uma mensagem avisando o trabalho que está doente. Antes, as duas palavras que explicam qualquer situação: **because** e **so**.
# Passo 1: because e so
@ V:Motivo ou consequência?;because: o motivo|I'm staying home because I have the flu.;so: a consequência|I have the flu, so I'm staying home.
~ I'm sorry, but I can't come in today because I'm sick. = Desculpe, mas não posso ir hoje porque estou doente.
~ I have a high fever, so I'm going to see a doctor. = Estou com febre alta, então vou ao médico.
! Antes de **so** costuma vir vírgula: I'm dizzy**,** so I can't drive.
# Passo 2: avisar o trabalho
| Em inglês | Em português |
| I'm calling in sick today. | Vou faltar hoje por doença. |
| I can't come in today. | Não posso ir hoje. |
| I can work from home. | Posso trabalhar de casa. |
| I'll send you a doctor's note. | Vou mandar um atestado. |
| I'll keep you posted. | Vou te manter informado. |
~ I'll send you a doctor's note. = Vou mandar um atestado médico.
BR **call in sick** é a expressão para "faltar por doença", mesmo quando você avisa por mensagem.
# Passo 3: ler uma bula americana
| Na bula | Significa |
| Uses | para que serve |
| Directions | como usar |
| Warnings | avisos |
| every 6 hours | a cada 6 horas |
| Do not exceed … | não ultrapasse … |
| Ask a doctor before use if … | consulte um médico antes se … |
~ Get well soon! = Melhoras!
> Agora leia a bula do ColdAway e escreva a sua mensagem para o Mr. Brown.
? because ou so: "I'm sick, ___ I'm staying home"? || so
? Como se diz "vou faltar por doença"? || I'm calling in sick.
? O que quer dizer "Get well soon!"? || Melhoras!
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('I need an appointment',
  'P:Marcar, remarcar, cancelar;Marcar=I\'d like to make an appointment.;Remarcar=I need to reschedule.;Cancelar=I\'d like to cancel.;Horário=Does Tuesday work for you?',
  'V:Serve ou não serve?;Serve|That works!|Tuesday works for me.;Não serve|Tuesday doesn\'t work for me.|How about Wednesday?');
V('At the pharmacy',
  'P:Como tomar;Quanto=one pill, two tablets;Quantas vezes=once, twice, three times a day;De quanto em quanto=every six hours;Quando=after meals, before bed',
  'V:Com ou sem receita?;Sem receita|over-the-counter|pode comprar direto;Com receita|prescription|precisa do médico');
V('Healthy habits',
  'V:should ou ought to?;should (sem to)|You should sleep more.;ought to (com to)|You ought to see a doctor.',
  'V:O imperativo;Faça|Drink more water.|Try to walk every day.;Não faça|Don\'t skip breakfast.|Don\'t eat late.');
V("It's an emergency",
  'P:Uma ligação para o 911;Atendente=911, what\'s your emergency?;Você=I need an ambulance!;O que houve=My friend fell and hit his head.;Onde=We\'re at 25 Oak Street.',
  'E:O endereço americano: número antes;25^p|Oak^s|Street^v');
V('Bored or boring?',
  'V:-ed ou -ing?;-ed: como a pessoa se sente|I\'m bored.|I\'m tired.|I\'m excited.;-ing: como a coisa é|The class is boring.|The trip was tiring.|The news is exciting.',
  'E:A coisa causa, a pessoa sente;The movie is boring^s|→|I\'m bored.^p');
V('Calling in sick',
  'V:because ou so?;because: o motivo|I\'m home because I\'m sick.;so: a consequência|I\'m sick, so I\'m home.',
  'P:Uma mensagem de aviso;Saudação=Hi Mr. Brown,;Aviso=I can\'t come in today.;Motivo=because I have the flu.;Proposta=I\'ll send you a doctor\'s note.;Fechamento=Thanks, Ana');
S_('I need an appointment', 'Dr.=dr., dra.|patient=paciente|Thursday=quinta|how about=que tal|tomorrow=amanhã|fifteen minutes=quinze minutos|date=encontro (romântico)|mark=marcar (com sinal)|move it to Friday=passar para sexta|that works=está bom, serve|schedule=agenda');
S_('At the pharmacy', 'anything=alguma coisa|cough=tosse|alcohol=álcool|medicine=remédio|penicillin=penicilina|how often=com que frequência|six hours=seis horas|drive=dirigir|ten drops=dez gotas|drowsiness=sonolência|reach=alcance|children=crianças|exceed=ultrapassar|stated=indicada');
S_('Healthy habits', 'more vegetables=mais verduras|earlier=mais cedo|slowly=devagar|nothing=nada|eight hours=oito horas|so much=tanto|late at night=tarde da noite|phone=celular|in bed=na cama|important=importante|walking=caminhar|driving=dirigir|try to=tentar');
S_("It's an emergency", 'man=homem|bike=bicicleta|leg=perna|friend=amigo|head=cabeça|building=prédio|wallet=carteira|conscious=consciente|fire department=bombeiros|near=perto de|bank=banco');
S_('Bored or boring?', 'thought=achei, pensei (think)|honestly=sinceramente|conference=conferência|all day=o dia todo|topic=tema|speaker=palestrante|nothing to do=nada para fazer|movie=filme|art=arte|history=história|trip=viagem|news=notícia|exam=prova|traffic=trânsito|book=livro|class=aula');
S_('Calling in sick', 'what\'s wrong=o que houve|staying home=ficar em casa|high fever=febre alta|someone=alguém|son=filho|e-mails=e-mails|uses=usos|relieves=alivia|temporarily=temporariamente|symptoms=sintomas|directions=modo de usar|adults=adultos|tablets=comprimidos|contain=contém|pregnant=grávida|liver disease=doença no fígado|warnings=avisos');
['lee', 'brown', 'coldaway', 'acetaminophen', 'penicillin'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'en-appt': {
    o: 'Marcar: **make an appointment**. Remarcar: **reschedule**. Cancelar: **cancel**. Para combinar o horário: **Does Tuesday work for you?**',
    q: 'No médico, no dentista e em qualquer serviço com hora marcada.',
    p: '"Mark an appointment" não existe. Com as frases certas, você resolve uma consulta por telefone em um minuto.',
  },
  'en-pharmacy': {
    o: 'Para pedir: **Do you have anything for a cold?** A dose: **twice a day**, **after meals**, **every six hours**. Sem receita é **over-the-counter**; com receita, **prescription**.',
    q: 'Na farmácia: pedir um remédio, entender a dose e os avisos da bula.',
    p: 'Errar a dose de um remédio pode ser perigoso. Esta lição garante que você entende o que está tomando.',
  },
  'en-healthy': {
    o: 'Conselhos com **should** (sem to) ou **ought to** (com to). Instruções diretas com o **imperativo**: **Drink more water! Don\'t skip breakfast!**',
    q: 'Para dar e pedir conselhos de saúde e de hábitos.',
    p: 'Should, ought to e o imperativo servem para qualquer conselho, não só de saúde.',
  },
  'en-emergency': {
    o: 'Nos EUA, emergência é **911**. A atendente pergunta **What happened?** e **Where are you?** Responda curto, no passado: **My friend fell and hit his head**.',
    q: 'Numa emergência: chamar ajuda, explicar o que aconteceu e dizer onde você está.',
    p: 'Tomara que você nunca precise. Mas saber estas frases dá segurança em qualquer viagem.',
  },
  'en-bored': {
    o: '**-ed** diz como a pessoa se sente (**I\'m bored**); **-ing** diz como a coisa é (**The movie is boring**). Trocar muda o sentido: "I\'m boring" = sou chata.',
    q: 'Para falar de sentimentos e opinar sobre filmes, aulas, viagens e notícias.',
    p: 'É uma das trocas mais comuns do brasileiro, e uma das mais engraçadas para quem ouve.',
  },
  'en-sick': {
    o: '**because** dá o motivo e **so** dá a consequência. Para avisar o trabalho: **I\'m calling in sick today**. E a bula: **Directions**, **Warnings**, **every 6 hours**.',
    q: 'Para avisar que está doente e ler as instruções de um remédio.',
    p: 'Faltar ao trabalho com uma mensagem clara e educada é uma habilidade profissional. E ler a bula é questão de segurança.',
  },
});
Object.assign(CZH, {
  'en-appt': ['marcar consulta', 'mudar para outro dia', 'work, depois de does'],
  'en-pharmacy': ['duas vezes', 'remédio para algo', 'alérgico a'],
  'en-healthy': ['conselho: deveria', 'ought sempre leva…', 'healthy, comparando'],
  'en-emergency': ['o que aconteceu (sem did)', 'fall, no passado', 'respirando'],
  'en-bored': ['como eu me sinto', 'como o filme é', 'eu me interesso'],
  'en-sick': ['o motivo', 'a consequência', 'atestado médico'],
});
Object.assign(OBJ, {
  'en-appt': { o: 'Consigo marcar, remarcar e cancelar uma consulta.', a: 'Você consegue marcar uma consulta por telefone em inglês?', ref: 'Goods and services (health) · A2' },
  'en-pharmacy': { o: 'Consigo pedir um remédio e entender a dose e os avisos.', a: 'Você entende "twice a day after meals"?', ref: 'Goods and services (health) · A2' },
  'en-healthy': { o: 'Consigo dar e pedir conselhos de saúde.', a: 'Você consegue usar should, ought to e o imperativo?', ref: 'Goal-oriented co-operation · A2' },
  'en-emergency': { o: 'Consigo pedir ajuda numa emergência e explicar o que aconteceu.', a: 'Você sabe o que dizer numa ligação para o 911?', ref: 'Goods and services (emergency) · A2' },
  'en-bored': { o: 'Consigo falar de sentimentos com os adjetivos -ed e -ing.', a: 'Você sabe a diferença entre bored e boring?', ref: 'Expressing feelings · A2' },
  'en-sick': { o: 'Consigo ler uma bula e avisar o trabalho que estou doente.', a: 'Você consegue escrever um aviso de falta com because e so?', ref: 'Notes and messages · A2' },
});
MOD_OBJ[10] = ['Consigo marcar consultas e entender remédios.', 'Consigo dar conselhos de saúde.', 'Consigo pedir ajuda numa emergência.', 'Consigo falar de sentimentos e avisar que estou doente.'];

EN_MODS.push({ lv: 'A2', n: 'Saúde', l: ['en-appt', 'en-pharmacy', 'en-healthy', 'en-emergency', 'en-bored', 'en-sick'] });
