// Espanhol · A2 · Módulo 10 · El trabajo (O trabalho). Formato de es/curso.js.

NL('es-mitrabajo', {
  de: 'Mi trabajo', pt: 'Falar do seu trabalho', gt: 'trabajo en / como / de · me encargo de · la oficina (escritório)',
  gx: 'Para falar do trabalho: Trabajo en una empresa de tecnología (onde), Trabajo como diseñadora (o quê), Me encargo de los clientes (sou responsável por). Atenção ao falso amigo: la oficina é o escritório; a oficina mecânica é el taller.',
  ge: 'Trabajo en una empresa de tecnología.=Trabalho numa empresa de tecnologia.|Me encargo de atender a los clientes.=Sou responsável por atender os clientes.|Trabajo desde casa dos días por semana.=Trabalho de casa dois dias por semana.',
  v: 'empresa=empresa=🏢|oficina=escritório=🖥️|jefe, jefa=chefe=👔|colega=colega=🤝|cliente=cliente=🧑‍💼|sueldo=salário=💵|horario=horário=🕘|me encargo de=sou responsável por=📋|reunión=reunião=👥|proyecto=projeto=📁',
  x: 'tiempo completo=tempo integral|medio tiempo=meio período|desde casa=de casa|turno=turno|vacaciones=férias|contrato=contrato|equipo=equipe|tareas=tarefas|taller=oficina mecânica|ascenso=promoção',
  dlg: '¿A qué te dedicas?=O que você faz (da vida)?|Soy diseñadora. Trabajo en una agencia de publicidad.=Sou designer. Trabalho numa agência de publicidade.|¿Y te gusta?=E você gosta?|Sí, mucho. Mis colegas son geniales, pero el horario es largo.=Sim, muito. Os meus colegas são ótimos, mas o horário é longo.',
  cz: 'Trabajo ___ una empresa de tecnología.=en=a=por|Me encargo ___ los clientes.=de=por=con|Trabajo en una ___. (escritório)=oficina=escritorio=taller',
  whys: 'onde se trabalha: en|encargarse de|escritório: oficina',
  pts: 'Onde: Trabajo en una empresa / en un hospital / en una tienda. O quê: Trabajo como … / Soy …|Tarefas: Me encargo de … (sou responsável por), Tengo que …, Atiendo a los clientes.|Condições: Trabajo a tiempo completo / medio tiempo, desde casa, por turnos. Gano un buen sueldo.|Pergunta típica: ¿A qué te dedicas? (o que você faz?) = ¿En qué trabajas?',
  ex: 'Mi jefa es muy exigente.=A minha chefe é muito exigente.|Tengo reuniones todos los lunes.=Tenho reuniões todas as segundas.|Trabajo a medio tiempo.=Trabalho meio período.|Mi oficina está en el centro.=O meu escritório fica no centro.',
  bd: ['Me_encargo=V^encargarse: ser responsável|de=P^encargarse pede de|atender_a_los_clientes.=OA', 'Sou responsável por atender os clientes.'],
  rule: 'mitrabajo',
  hw: 'Descreva o seu trabalho (ou o de alguém da família) em oito frases: onde, o quê, as tarefas, o horário, os colegas e o que você gosta e não gosta.',
  deep: `
Hoje começa o módulo do **trabalho**. Você aprende a dizer onde trabalha, o que faz e como é o seu dia.
# Passo 1: onde e o quê
@ P:Falar do trabalho;Onde=Trabajo en una empresa.;O quê=Trabajo como diseñadora.;Tarefas=Me encargo de los clientes.
~ Trabajo en una empresa de tecnología. = Trabalho numa empresa de tecnologia.
~ ¿A qué te dedicas? = O que você faz da vida?
# Passo 2: as tarefas
| Em espanhol | Em português |
| me encargo de | sou responsável por |
| atiendo a los clientes | atendo os clientes |
| tengo reuniones | tenho reuniões |
~ Me encargo de atender a los clientes. = Sou responsável por atender os clientes.
~ Tengo reuniones todos los lunes. = Tenho reuniões todas as segundas.
# Passo 3: as condições
| Em espanhol | Em português |
| a tiempo completo | em tempo integral |
| a medio tiempo | meio período |
| desde casa | de casa (home office) |
~ Trabajo a medio tiempo. = Trabalho meio período.
~ Trabajo desde casa dos días por semana. = Trabalho de casa dois dias por semana.
# Passo 4: ojo, brasileño: oficina
@ V:Falso amigo;la oficina|o escritório;el taller|a oficina mecânica
~ Mi oficina está en el centro. = O meu escritório fica no centro.
~ Mi jefa es muy exigente. = A minha chefe é muito exigente.
! **oficina** é o escritório. Se o carro quebrou, você vai ao **taller**. E **escritorio** é a escrivaninha.
> Treine agora: responda a "¿A qué te dedicas?" em três frases.
? "Escritório": || oficina
? "Sou responsável por": || Me encargo de …
? "O que você faz da vida?": || ¿A qué te dedicas?
`,
});

NL('es-telefono', {
  de: 'Al teléfono', pt: 'Falar ao telefone', gt: 'aló / bueno / diga · ¿de parte de quién? · quería hablar con … · dejar un mensaje',
  gx: 'Ao telefone, cada país atende de um jeito: ¿Aló? (quase toda a América Latina), ¿Bueno? (México), ¿Diga? (Espanha). Para pedir alguém: Quería hablar con … Para perguntar quem é: ¿De parte de quién? E se a pessoa não está: ¿Quiere dejar un mensaje?',
  ge: 'Buenos días, quería hablar con la señora Gómez.=Bom dia, gostaria de falar com a senhora Gómez.|¿De parte de quién?=Quem gostaria?|Un momento, por favor. No cuelgue.=Um momento, por favor. Não desligue.',
  v: 'aló=alô=📞|llamar=ligar=📱|contestar=atender=☎️|colgar=desligar=📴|de parte de quién=quem gostaria=❓|un momento=um momento=⏳|dejar un mensaje=deixar um recado=📝|volver a llamar=ligar de novo=🔁|ocupado=ocupado=🚫|equivocado=engano, errado=❌',
  x: 'extensión=ramal|celular=celular|número=número|línea=linha|señal=sinal|batería=bateria|altavoz=viva-voz|correo de voz=caixa postal|marcar=discar|llamada perdida=chamada perdida',
  dlg: '¿Aló? Buenos días, quería hablar con el señor Ruiz.=Alô? Bom dia, gostaria de falar com o senhor Ruiz.|¿De parte de quién?=Quem gostaria?|De parte de Ana Souza, de la empresa Sol.=Da parte de Ana Souza, da empresa Sol.|Lo siento, está en una reunión. ¿Quiere dejar un mensaje?=Sinto muito, ele está numa reunião. A senhora quer deixar um recado?',
  cz: '___ hablar con la señora Gómez. (gostaria)=Quería=Quiero que=Quisiera que|¿De parte de ___?=quién=qué=quien|Un momento, no ___. (desligue)=cuelgue=desligue=cuelga',
  whys: 'pedido educado: quería|pronome interrogativo com acento: quién|colgar, ordem com usted: cuelgue',
  pts: 'Atender: ¿Aló? (América Latina), ¿Bueno? (México), ¿Diga? / ¿Sí? (Espanha). Numa empresa: Empresa Sol, buenos días.|Pedir alguém: Quería hablar con … / ¿Se encuentra el señor Ruiz? / ¿Me comunica con …?|Quem é: ¿De parte de quién? · De parte de … Esperar: Un momento, por favor. No cuelgue.|Recado: ¿Quiere dejar un mensaje? · Dígale que me llame, por favor. · Vuelvo a llamar más tarde.',
  ex: 'Está ocupado en este momento.=Ele está ocupado neste momento.|Dígale que me llame, por favor.=Diga para ele me ligar, por favor.|Vuelvo a llamar más tarde.=Volto a ligar mais tarde.|Perdón, número equivocado.=Desculpe, foi engano.',
  bd: ['Quería=V^imperfeito de cortesia|hablar_con=V|la_señora_Gómez.=OA', 'Gostaria de falar com a senhora Gómez.'],
  rule: 'telefono',
  hw: 'Escreva dois diálogos curtos ao telefone: um em que a pessoa atende e outro em que você deixa um recado.',
  deep: `
Hoje você aprende a **falar ao telefone**: atender, pedir alguém, esperar e deixar recado.
# Passo 1: atender
| País | Como atende |
| quase toda a América Latina | ¿Aló? |
| México | ¿Bueno? |
| Espanha | ¿Diga? / ¿Sí? |
~ Buenos días, quería hablar con la señora Gómez. = Bom dia, gostaria de falar com a senhora Gómez.
~ ¿Aló? ¿Quién habla? = Alô? Quem fala?
# Passo 2: quem é e esperar
@ V:Ao telefone;Pergunta|¿De parte de quién?;Resposta|De parte de Ana Souza.
~ ¿De parte de quién? = Quem gostaria?
~ Un momento, por favor. No cuelgue. = Um momento, por favor. Não desligue.
# Passo 3: deixar recado
| Em espanhol | Em português |
| ¿Quiere dejar un mensaje? | Quer deixar um recado? |
| Dígale que me llame. | Diga para ele me ligar. |
| Vuelvo a llamar más tarde. | Volto a ligar mais tarde. |
~ Dígale que me llame, por favor. = Diga para ele me ligar, por favor.
~ Vuelvo a llamar más tarde. = Volto a ligar mais tarde.
# Passo 4: ojo, brasileño: contestar e colgar
| Em espanhol | Em português |
| contestar el teléfono | atender o telefone |
| colgar | desligar |
| número equivocado | foi engano |
~ Perdón, número equivocado. = Desculpe, foi engano.
! **contestar** é atender (e também responder); **colgar** é desligar. E **ligar**, em espanhol, é **llamar**.
> Treine agora: ligue para uma empresa, peça para falar com alguém e deixe um recado.
? "Quem gostaria?": || ¿De parte de quién?
? "Não desligue": || No cuelgue.
? "Atender o telefone": || contestar el teléfono
`,
});

NL('es-porpara', {
  de: 'Por y para', pt: 'Por e para', gt: 'para: objetivo, destino, prazo, destinatário · por: causa, meio, lugar de passagem, troca, período',
  gx: 'Em espanhol, por e para dividem o trabalho do nosso "por" e "para". para olha para frente: objetivo (estudio para aprender), destino (salgo para Lima), prazo (para el lunes), destinatário (es para ti). por olha para trás ou para o meio: causa (por la lluvia), meio (por teléfono), troca (por diez dólares), lugar (por el parque).',
  ge: 'Este informe es para el lunes.=Este relatório é para segunda-feira.|Te llamo por teléfono.=Te ligo pelo telefone.|Gracias por tu ayuda.=Obrigada pela sua ajuda.',
  v: 'para=para (objetivo, destino, prazo)=🎯|por=por (causa, meio, troca)=🔀|por la mañana=de manhã=🌅|por teléfono=por telefone=📞|por eso=por isso=➡️|para mí=para mim=🙋|gracias por=obrigada por=🙏|por ciento=por cento=💯|por favor=por favor=🙏|para siempre=para sempre=♾️',
  x: 'informe=relatório|regalo=presente|lluvia=chuva|parque=parque|correo=e-mail|semana=semana|hora=hora|cambio=troca|camino=caminho|culpa=culpa',
  dlg: '¿Para cuándo es el informe?=Para quando é o relatório?|Para el lunes, pero lo necesito por correo.=Para segunda, mas preciso dele por e-mail.|¿Por qué tan rápido?=Por que tão rápido?|Porque es para una reunión con un cliente.=Porque é para uma reunião com um cliente.',
  cz: 'Este informe es ___ el lunes. (prazo)=para=por=a|Te llamo ___ teléfono. (meio)=por=para=en|Gracias ___ tu ayuda.=por=para=de',
  whys: 'prazo: para|meio: por|gracias por (causa)',
  pts: 'para = objetivo (Estudio para aprender), destino (Salgo para Lima), prazo (para el lunes), destinatário (Es para ti), opinião (Para mí, es caro).|por = causa (por la lluvia), meio (por teléfono, por correo), troca e preço (lo compré por diez dólares), lugar de passagem (paseo por el parque), período (por la mañana).|Fixas: gracias por, por favor, por eso, por ejemplo, por fin, por ciento.|Dica: para olha para o destino; por olha para a causa e para o caminho.',
  ex: 'No salí por la lluvia.=Não saí por causa da chuva.|Lo compré por diez dólares.=Comprei por dez dólares.|Estudio español para viajar.=Estudo espanhol para viajar.|Para mí, es demasiado caro.=Para mim, é caro demais.',
  bd: ['Este_informe=S|es_para=V^para: prazo|el_lunes.=T', 'Este relatório é para segunda-feira.'],
  rule: 'porpara',
  hw: 'Escreva dez frases sobre o seu trabalho ou os seus estudos: cinco com para (objetivo, prazo, destinatário) e cinco com por (causa, meio, período).',
  deep: `
Hoje você enfrenta um clássico: **por e para**. A boa notícia: o português ajuda em muitos casos.
# Passo 1: para olha para frente
@ P:Para;Objetivo=Estudio para aprender.;Destino=Salgo para Lima.;Prazo=Es para el lunes.;Destinatário=Es para ti.
~ Este informe es para el lunes. = Este relatório é para segunda-feira.
~ Estudio español para viajar. = Estudo espanhol para viajar.
# Passo 2: por olha para a causa e o caminho
@ P:Por;Causa=por la lluvia;Meio=por teléfono;Troca=por diez dólares;Lugar=por el parque
~ Te llamo por teléfono. = Te ligo pelo telefone.
~ No salí por la lluvia. = Não saí por causa da chuva.
# Passo 3: as expressões fixas
| Em espanhol | Em português |
| gracias por | obrigada por |
| por eso | por isso |
| por la mañana | de manhã |
| para mí | para mim |
~ Gracias por tu ayuda. = Obrigada pela sua ajuda.
~ Lo compré por diez dólares. = Comprei por dez dólares.
# Passo 4: ojo, brasileño: "pelo" e "de manhã"
| Português | Espanhol |
| pelo telefone | por teléfono |
| pela manhã, de manhã | por la mañana |
| por causa da chuva | por la lluvia |
~ Para mí, es demasiado caro. = Para mim, é caro demais.
! Não existe "pelo" em espanhol: é **por el** (por el parque, por teléfono). E "de manhã" é **por la** mañana.
> Treine agora: diga para quando é o seu próximo prazo e por que meio você vai entregar.
? Prazo: por ou para? || para
? "Pelo telefone": || por teléfono
? "Obrigada pela ajuda": || Gracias por la ayuda.
`,
});

NL('es-obligacion', {
  de: 'Tengo que, hay que, debo', pt: 'Obrigação e necessidade', gt: 'tener que + infinitivo · hay que · deber · no hace falta',
  gx: 'Para obrigação pessoal: tengo que + infinitivo (tenho que). Para regra geral, sem pessoa: hay que (é preciso): Hay que llegar a las ocho. Para dever, conselho forte: debes descansar. E para dizer que não é necessário: no hace falta / no tienes que.',
  ge: 'Tengo que terminar el informe hoy.=Tenho que terminar o relatório hoje.|Hay que llegar a las ocho.=É preciso chegar às oito.|No hace falta traer nada.=Não precisa trazer nada.',
  v: 'tener que=ter que=📌|hay que=é preciso=📢|deber=dever=⚖️|necesitar=precisar=🙏|no hace falta=não precisa=🆗|obligatorio=obrigatório=❗|permitido=permitido=✅|prohibido=proibido=🚫|regla=regra=📏|uniforme=uniforme=👔',
  x: 'llegar=chegar|firmar=assinar|entregar=entregar|registrarse=se registrar|fichar=bater o ponto|avisar=avisar|pedir permiso=pedir permissão|traer=trazer|puntual=pontual|horario=horário',
  dlg: 'Es mi primer día. ¿Qué tengo que hacer?=É o meu primeiro dia. O que eu tenho que fazer?|Primero, hay que firmar el contrato.=Primeiro, é preciso assinar o contrato.|¿Tengo que usar uniforme?=Tenho que usar uniforme?|No, no hace falta. Pero debes llegar puntual.=Não, não precisa. Mas você deve chegar pontual.',
  cz: '___ que terminar el informe. (eu tenho)=Tengo=Tenho=Hay|___ que llegar a las ocho. (é preciso)=Hay=Tiene=Es|No hace ___ traer nada.=falta=necesario=precisa',
  whys: 'obrigação pessoal: tengo que|regra geral: hay que|não precisa: no hace falta',
  pts: 'tener que + infinitivo = obrigação de alguém: Tengo que trabajar. ¿Tienes que viajar?|hay que + infinitivo = regra geral, sem pessoa: Hay que llegar a las ocho. Hay que usar casco.|deber + infinitivo = dever, conselho forte: Debes descansar. No debes fumar aquí.|Sem obrigação: no tienes que … / no hace falta + infinitivo: No hace falta traer nada.',
  ex: 'Debes descansar más.=Você deve descansar mais.|No tienes que venir mañana.=Você não precisa vir amanhã.|Aquí hay que usar casco.=Aqui é preciso usar capacete.|Necesito hablar con mi jefe.=Preciso falar com o meu chefe.',
  bd: ['Hay_que=V^regra geral, sem pessoa|llegar=V^infinitivo|a_las_ocho.=T', 'É preciso chegar às oito.'],
  rule: 'obligacion',
  hw: 'Escreva as regras do seu trabalho ou da sua casa em oito frases: com hay que, tienes que, debes e no hace falta.',
  deep: `
Hoje você aprende a falar de **obrigações**: o que você tem que fazer, o que é preciso fazer e o que não precisa.
# Passo 1: tener que
@ F:Obrigação pessoal;tener que^v|+ infinitivo^p;Tengo que|trabajar.;¿Tienes que|viajar?
~ Tengo que terminar el informe hoy. = Tenho que terminar o relatório hoje.
~ ¿Tengo que usar uniforme? = Tenho que usar uniforme?
# Passo 2: hay que, a regra geral
@ V:Quem?;Pessoal|Tengo que llegar a las ocho.;Geral, para todos|Hay que llegar a las ocho.
~ Hay que llegar a las ocho. = É preciso chegar às oito.
~ Aquí hay que usar casco. = Aqui é preciso usar capacete.
# Passo 3: deber e necesitar
| Em espanhol | Em português |
| debes descansar | você deve descansar |
| no debes fumar | você não deve fumar |
| necesito hablar | preciso falar |
~ Debes descansar más. = Você deve descansar mais.
~ Necesito hablar con mi jefe. = Preciso falar com o meu chefe.
# Passo 4: ojo, brasileño: "não precisa"
| Português | Espanhol |
| não precisa trazer | no hace falta traer |
| você não precisa vir | no tienes que venir |
| é preciso | hay que |
~ No hace falta traer nada. = Não precisa trazer nada.
~ No tienes que venir mañana. = Você não precisa vir amanhã.
! "Precisar" existe (**necesitar**), mas o "não precisa" do dia a dia é **no hace falta**. E **hay que** nunca leva pessoa: "yo hay que" é erro.
> Treine agora: diga duas coisas que você tem que fazer hoje e uma regra do seu trabalho.
? "Tenho que trabalhar": || Tengo que trabajar.
? "É preciso chegar cedo": || Hay que llegar temprano.
? "Não precisa": || No hace falta.
`,
});

NL('es-entrevista', {
  de: 'Una entrevista', pt: 'Uma entrevista de emprego', gt: 'usted · experiencia, puntos fuertes · he trabajado, sé, puedo · preguntas formales',
  gx: 'Numa entrevista se usa usted: ¿Por qué quiere trabajar con nosotros? Para responder: a experiência (He trabajado tres años en …), as habilidades (Sé usar …, Hablo inglés), os pontos fortes (Soy organizada) e as perguntas finais (¿Cuál es el horario?).',
  ge: '¿Por qué quiere trabajar con nosotros?=Por que o senhor quer trabalhar conosco?|He trabajado tres años en atención al cliente.=Trabalhei três anos com atendimento ao cliente.|Soy una persona muy organizada.=Sou uma pessoa muito organizada.',
  v: 'entrevista=entrevista=🎤|experiencia=experiência=📈|currículum=currículo=📄|puesto=cargo, vaga=💼|puntos fuertes=pontos fortes=💪|puntos débiles=pontos fracos=🔻|organizado=organizado=🗂️|responsable=responsável=✅|trabajo en equipo=trabalho em equipe=🤝|disponibilidad=disponibilidade=📅',
  x: 'título=diploma|carrera=faculdade, curso|idiomas=idiomas|habilidades=habilidades|salario=salário|beneficios=benefícios|incorporarse=começar (no emprego)|seleccionado=selecionado|candidato=candidato|empresa=empresa',
  dlg: 'Cuénteme un poco sobre usted.=Me conte um pouco sobre o senhor.|Soy administradora y he trabajado cinco años en logística.=Sou administradora e trabalhei cinco anos em logística.|¿Cuáles son sus puntos fuertes?=Quais são os seus pontos fortes?|Soy muy organizada y me gusta trabajar en equipo.=Sou muito organizada e gosto de trabalhar em equipe.',
  cz: '¿Por qué ___ trabajar con nosotros? (usted)=quiere=quieres=quier|___ trabajado tres años en ventas.=He=Tengo=Hay|___ usar Excel muy bien. (eu sei)=Sé=Se=Sei',
  whys: 'usted: quiere|experiência: he + particípio|saber: sé (com acento)',
  pts: 'O entrevistador usa usted: ¿Por qué quiere …? ¿Cuál es su experiencia? Cuénteme sobre usted.|A experiência com o pretérito perfecto: He trabajado …, He coordinado …, He aprendido …|Habilidades: Sé usar … (sei usar), Hablo inglés y portugués, Puedo empezar el lunes.|Perguntas finais: ¿Cuál es el horario? ¿Cuándo sería el inicio? ¿Cuáles son los próximos pasos?',
  ex: 'Hablo portugués, inglés y español.=Falo português, inglês e espanhol.|Puedo empezar la próxima semana.=Posso começar na semana que vem.|Mi punto débil es que soy perfeccionista.=O meu ponto fraco é que sou perfeccionista.|¿Cuáles son los próximos pasos?=Quais são os próximos passos?',
  bd: ['He_trabajado=V^pretérito perfecto: experiência|tres_años=T|en_atención_al_cliente.=L', 'Trabalhei três anos com atendimento ao cliente.'],
  rule: 'entrevista',
  hw: 'Prepare as suas respostas para uma entrevista: quem você é, a sua experiência, duas habilidades, um ponto forte, um ponto fraco e duas perguntas finais.',
  deep: `
Hoje você se prepara para uma **entrevista de emprego** em espanhol: formal, com usted e com a sua experiência.
# Passo 1: as perguntas (com usted)
| Pergunta | Em português |
| Cuénteme sobre usted. | Me fale sobre o senhor / a senhora. |
| ¿Por qué quiere trabajar aquí? | Por que quer trabalhar aqui? |
| ¿Cuáles son sus puntos fuertes? | Quais são os seus pontos fortes? |
~ ¿Por qué quiere trabajar con nosotros? = Por que o senhor quer trabalhar conosco?
~ ¿Cuáles son sus puntos fuertes? = Quais são os seus pontos fortes?
# Passo 2: a experiência
@ P:Responder;Quem sou=Soy administradora.;Experiência=He trabajado cinco años en …;Habilidade=Sé usar Excel.;Ponto forte=Soy muy organizada.
~ He trabajado tres años en atención al cliente. = Trabalhei três anos com atendimento ao cliente.
~ Soy una persona muy organizada. = Sou uma pessoa muito organizada.
# Passo 3: habilidades e disponibilidade
| Em espanhol | Em português |
| Sé usar … | Sei usar … |
| Hablo tres idiomas. | Falo três idiomas. |
| Puedo empezar el lunes. | Posso começar na segunda. |
~ Hablo portugués, inglés y español. = Falo português, inglês e espanhol.
~ Puedo empezar la próxima semana. = Posso começar na semana que vem.
# Passo 4: ojo, brasileño: sé e currículum
| Em espanhol | Em português |
| sé (saber) | sei |
| se (pronome) | se |
| el currículum | o currículo |
| la carrera | a faculdade, o curso |
~ ¿Cuáles son los próximos pasos? = Quais são os próximos passos?
! **sé** com acento é "eu sei"; **se** sem acento é o pronome. E **carrera** é o curso superior: estudié la **carrera** de Derecho.
> Treine agora: responda em voz alta: "Cuénteme un poco sobre usted".
? "Trabalhei três anos em vendas": || He trabajado tres años en ventas.
? "Eu sei usar Excel": || Sé usar Excel.
? "Pontos fortes": || puntos fuertes
`,
});

NL('es-anuncio', {
  de: 'Un anuncio de trabajo', pt: 'Ler uma vaga e escrever uma candidatura', gt: 'se busca, se requiere, se ofrece · uma mensagem curta de candidatura',
  gx: 'Os anúncios de vaga usam o se impessoal: Se busca recepcionista (procura-se), Se requiere experiencia (exige-se), Se ofrece buen ambiente (oferece-se). Para se candidatar: Estimados señores: Me interesa el puesto de … Tengo experiencia en … Quedo a la espera de su respuesta.',
  ge: 'Se busca recepcionista bilingüe.=Procura-se recepcionista bilíngue.|Me interesa el puesto de recepcionista.=Tenho interesse na vaga de recepcionista.|Quedo a la espera de su respuesta.=Fico no aguardo da sua resposta.',
  v: 'se busca=procura-se=🔎|se requiere=exige-se=📋|se ofrece=oferece-se=🎁|requisitos=requisitos=✅|anuncio=anúncio=📢|me interesa=tenho interesse=🙋|adjunto=anexo, em anexo=📎|estimados=prezados=✉️|atentamente=atenciosamente=🖊️|quedo a la espera=fico no aguardo=⏳',
  x: 'bilingüe=bilíngue|recepcionista=recepcionista|hotel=hotel|turnos rotativos=turnos alternados|buen ambiente=bom ambiente|indispensable=indispensável|deseable=desejável|enviar=enviar|candidatura=candidatura|referencias=referências',
  dlg: '¿Viste el anuncio del hotel?=Você viu o anúncio do hotel?|Sí, se busca recepcionista bilingüe. ¡Es perfecto para ti!=Sim, procura-se recepcionista bilíngue. É perfeito para você!|¿Qué requisitos piden?=Que requisitos pedem?|Experiencia mínima de un año y disponibilidad para turnos.=Experiência mínima de um ano e disponibilidade para turnos.',
  cz: '___ busca recepcionista. (procura-se)=Se=Le=Lo|Me ___ el puesto de recepcionista.=interesa=intereso=interesan|___ el currículum. (anexo)=Adjunto=Anexo=Junto',
  whys: 'impessoal: se|interesar funciona como gustar|anexo: adjunto',
  pts: 'Anúncio: Se busca … (procura-se), Se requiere … (exige-se), Se ofrece … (oferece-se). Requisitos: indispensable (obrigatório), deseable (desejável).|Candidatura: saudação formal (Estimados señores:), o interesse (Me interesa el puesto de …).|O seu perfil: Tengo experiencia en …, He trabajado …, Hablo …|Fecho: Adjunto mi currículum. Quedo a la espera de su respuesta. Atentamente, …',
  ex: 'Se requiere experiencia mínima de un año.=Exige-se experiência mínima de um ano.|Se ofrece contrato indefinido.=Oferece-se contrato por tempo indeterminado.|Adjunto mi currículum.=Envio o meu currículo em anexo.|Atentamente, Ana Souza.=Atenciosamente, Ana Souza.',
  bd: ['Me=OI^a mim|interesa=V^interesar funciona como gustar|el_puesto_de_recepcionista.=S', 'Tenho interesse na vaga de recepcionista.'],
  rule: 'anuncio',
  le: {
    texto: {
      t: 'Se busca recepcionista', kind: 'anúncio de vaga', voz: 'b',
      intro: 'Um hotel de Cusco, no Peru, publicou esta vaga. Leia e responda.',
      paras: ['Hotel Inti Wasi, en el centro histórico de Cusco, busca recepcionista bilingüe para incorporarse en enero.', 'Se requiere: experiencia mínima de un año en atención al cliente, español e inglés avanzado (indispensable) y disponibilidad para turnos rotativos. Se valorará el portugués.', 'Funciones: recibir a los huéspedes, gestionar reservas por teléfono y por correo, e informar sobre excursiones.', 'Se ofrece: contrato indefinido, almuerzo en el hotel y un excelente ambiente de trabajo.', 'Los interesados deben enviar su currículum a empleo@intiwasi.pe antes del 15 de diciembre.'],
      qs: [
        { q: 'Que idiomas são obrigatórios?', o: ['espanhol e inglês avançado', 'só espanhol', 'espanhol e português'], a: 0 },
        { q: 'O que conta como vantagem extra?', o: ['falar português', 'ter carro', 'morar em Cusco'], a: 0 },
        { q: 'Qual é uma das funções?', o: ['gerenciar reservas por telefone e e-mail', 'cozinhar o almoço', 'guiar excursões'], a: 0 },
        { q: 'Até quando é preciso mandar o currículo?', o: ['até 15 de dezembro', 'até janeiro', 'até o fim do ano'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva a sua candidatura', tipo: 'form', ok: 'Candidatura escrita corretamente.',
      pede: 'Escreva uma mensagem curta para se candidatar à vaga do hotel. Uma frase por linha.',
      campos: [
        { l: 'Saudação', d: 'Estimados señores:', re: '^\\s*(estimad[oa]s?|señor|señora|buen[oa]s)', f: 'iu', err: 'Comece com uma saudação formal: Estimados señores:' },
        { l: 'O interesse', d: 'Me interesa el puesto de …', re: '(me interesa|quisiera|quiero presentar|deseo)(?!\\p{L})', f: 'iu', err: 'Diga o seu interesse: Me interesa el puesto de recepcionista.', bad: [['\\bme intereso (el|en el) puesto\\b', '<b>interesar</b> funciona como gustar: <b>me interesa</b> el puesto.']] },
        { l: 'A experiência', d: 'He trabajado … / Tengo experiencia en …', re: '(^|\\s)(he trabajado|tengo experiencia|trabajé|he sido|trabajo)(?!\\p{L})', f: 'iu', err: 'Fale da sua experiência: He trabajado dos años en un hotel.', bad: [['\\btengo trabajado\\b', 'O auxiliar é <b>haber</b>: <b>he</b> trabajado.']] },
        { l: 'Os idiomas', d: 'Hablo …', re: '(^|\\s)(hablo|domino|sé)(?!\\p{L})', f: 'iu', err: 'Diga que idiomas fala: Hablo portugués, español e inglés.' },
        { l: 'O anexo', d: 'Adjunto mi currículum.', re: '(adjunto|envío|le envío|mando)(?!\\p{L})', f: 'iu', err: 'Mencione o anexo: Adjunto mi currículum.', bad: [['\\banexo (mi|el) currículum', 'Em espanhol, diga <b>adjunto</b> mi currículum.']] },
        { l: 'Fecho', d: 'Quedo a la espera … / Atentamente', re: '(quedo a la espera|atentamente|saludos cordiales|cordialmente)', f: 'iu', err: 'Feche com formalidade: Quedo a la espera de su respuesta. Atentamente, …' },
      ],
      modelo: 'Estimados señores: · Me interesa el puesto de recepcionista. · He trabajado dos años en un hotel en Salvador. · Hablo portugués, español e inglés. · Adjunto mi currículum. · Quedo a la espera de su respuesta. Atentamente, Ana Souza.',
    },
  },
  hw: 'Escolha uma vaga real ou imaginária e escreva uma candidatura completa (oito a dez frases), com saudação, interesse, experiência, idiomas, disponibilidade, anexo e fecho formal.',
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo. Você vai ler uma vaga num hotel do Peru e escrever a sua candidatura.
# Passo 1: o anúncio
@ P:Um anúncio;Se busca=quem procuram;Se requiere=os requisitos;Funciones=as tarefas;Se ofrece=o que oferecem
~ Se busca recepcionista bilingüe. = Procura-se recepcionista bilíngue.
~ Se requiere experiencia mínima de un año. = Exige-se experiência mínima de um ano.
BR O **se** impessoal é o nosso "procura-se", "vende-se", "aluga-se". Em espanhol ele aparece em todo anúncio.
# Passo 2: indispensável ou desejável
| Em espanhol | Em português |
| indispensable | obrigatório |
| deseable | desejável |
| se valorará | será um diferencial |
~ Se ofrece contrato indefinido. = Oferece-se contrato por tempo indeterminado.
# Passo 3: a candidatura
@ P:Uma candidatura;Saudação=Estimados señores:;Interesse=Me interesa el puesto de …;Experiência=He trabajado …;Anexo=Adjunto mi currículum.;Fecho=Atentamente, …
~ Me interesa el puesto de recepcionista. = Tenho interesse na vaga de recepcionista.
~ Adjunto mi currículum. = Envio o meu currículo em anexo.
# Passo 4: ojo, brasileño: o fecho
| Português | Espanhol |
| Prezados senhores | Estimados señores |
| Fico no aguardo | Quedo a la espera |
| Atenciosamente | Atentamente |
| em anexo | adjunto |
~ Quedo a la espera de su respuesta. = Fico no aguardo da sua resposta.
~ Atentamente, Ana Souza. = Atenciosamente, Ana Souza.
! Na saudação formal, o espanhol usa **dois-pontos**: Estimados señores**:** (e não vírgula).
> Agora leia a vaga do hotel e escreva a sua candidatura.
? "Procura-se": || Se busca.
? "Tenho interesse na vaga": || Me interesa el puesto.
? "Atenciosamente": || Atentamente.
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('Mi trabajo',
  'P:Falar do trabalho;Onde=Trabajo en una empresa.;O quê=Trabajo como diseñadora.;Tarefas=Me encargo de los clientes.',
  'V:Falso amigo;la oficina|o escritório;el taller|a oficina mecânica');
V('Al teléfono',
  'M:Atender;País|Como atende;América Latina|¿Aló?;México|¿Bueno?;Espanha|¿Diga?',
  'V:Ao telefone;Pergunta|¿De parte de quién?;Resposta|De parte de Ana Souza.');
V('Por y para',
  'P:Para;Objetivo=para aprender;Destino=para Lima;Prazo=para el lunes;Destinatário=para ti',
  'P:Por;Causa=por la lluvia;Meio=por teléfono;Troca=por diez dólares;Lugar=por el parque');
V('Tengo que, hay que, debo',
  'F:Obrigação pessoal;tener que^v|+ infinitivo^p;Tengo que|trabajar.',
  'V:Quem?;Pessoal|Tengo que llegar a las ocho.;Geral|Hay que llegar a las ocho.');
V('Una entrevista',
  'P:Responder;Quem sou=Soy administradora.;Experiência=He trabajado …;Habilidade=Sé usar Excel.;Ponto forte=Soy organizada.',
  'M:Perguntas finais;Em espanhol|Em português;¿Cuál es el horario?|Qual é o horário?;¿Cuáles son los próximos pasos?|Quais são os próximos passos?');
V('Un anuncio de trabajo',
  'P:Um anúncio;Se busca=quem procuram;Se requiere=os requisitos;Se ofrece=o que oferecem',
  'P:Uma candidatura;Saudação=Estimados señores:;Interesse=Me interesa …;Anexo=Adjunto …;Fecho=Atentamente');
S_('Mi trabajo', 'trabajo=trabalho|en una empresa=numa empresa|de tecnología=de tecnologia|atender=atender|a los clientes=os clientes|desde casa=de casa|dos días=dois dias|por semana=por semana|a qué te dedicas=o que você faz|soy=sou|diseñadora=designer|en una agencia=numa agência|de publicidad=de publicidade|y te gusta=e você gosta|sí=sim|mucho=muito|mis colegas=meus colegas|son geniales=são ótimos|pero=mas|el horario=o horário|es largo=é longo|escritorio=escrivaninha|mi jefa=minha chefe|es muy exigente=é muito exigente|tengo=tenho|reuniones=reuniões|todos los lunes=todas as segundas|a medio tiempo=meio período|mi oficina=meu escritório|está=fica|en el centro=no centro|en un hospital=num hospital|en una tienda=numa loja|como=como|tengo que=tenho que|atiendo=atendo|a tiempo completo=em tempo integral|por turnos=por turnos|gano=ganho|un buen sueldo=um bom salário|en qué trabajas=em que você trabalha|trabajo como=trabalho como|me encargo de=sou responsável por|atiendo a los clientes=atendo os clientes|tengo reuniones=tenho reuniões|a=a');
S_('Al teléfono', 'buenos días=bom dia|quería=gostaria|hablar con=falar com|la señora Gómez=a senhora Gómez|de parte de quién=quem gostaria|por favor=por favor|no cuelgue=não desligue|el señor Ruiz=o senhor Ruiz|de parte de=da parte de|Ana Souza=Ana Souza|de la empresa=da empresa|Sol=Sol|lo siento=sinto muito|está=está|en una reunión=numa reunião|quiere=quer|quiero que=quero que|quisiera que=gostaria que|qué=que|quien=quem|desligue=(erro) desligue|cuelga=desliga|bueno=alô (México)|diga=alô (Espanha)|sí=sim|empresa Sol=empresa Sol|se encuentra=se encontra|me comunica con=me passa para|dígale que=diga para ele|me llame=me ligue|vuelvo a llamar=volto a ligar|más tarde=mais tarde|en este momento=neste momento|perdón=desculpe|número equivocado=foi engano|quién habla=quem fala|contestar el teléfono=atender o telefone|ligar=(português) ligar');
S_('Por y para', 'este informe=este relatório|es para=é para|el lunes=segunda-feira|te llamo=te ligo|gracias por=obrigada por|tu ayuda=sua ajuda|para cuándo=para quando|es el informe=é o relatório|lo necesito=preciso dele|por correo=por e-mail|por qué=por que|tan rápido=tão rápido|porque=porque|para una reunión=para uma reunião|con un cliente=com um cliente|a=a|en=em|de=de|estudio=estudo|para aprender=para aprender|salgo=saio|para Lima=para Lima|para ti=para você|para mí=para mim|es caro=é caro|por la lluvia=por causa da chuva|lo compré=comprei|por diez dólares=por dez dólares|paseo=passeio|por el parque=pelo parque|por ejemplo=por exemplo|por fin=finalmente|no salí=não saí|estudio español=estudo espanhol|para viajar=para viajar|es demasiado caro=é caro demais|por el=pelo|la ayuda=a ajuda|es=é');
S_('Tengo que, hay que, debo', 'terminar=terminar|el informe=o relatório|hoy=hoje|llegar=chegar|a las ocho=às oito|traer=trazer|nada=nada|es mi primer día=é meu primeiro dia|qué tengo que hacer=o que eu tenho que fazer|primero=primeiro|firmar=assinar|el contrato=o contrato|usar=usar|no=não|pero=mas|debes=você deve|puntual=pontual|tenho=(erro) tenho|hay=há|tiene=tem|es=é|necesario=necessário|precisa=(erro) precisa|tengo que=tenho que|trabajar=trabalhar|tienes que=você tem que|viajar=viajar|usar casco=usar capacete|descansar=descansar|no debes=você não deve|fumar aquí=fumar aqui|descansar más=descansar mais|venir=vir|mañana=amanhã|aquí=aqui|necesito=preciso|hablar con=falar com|mi jefe=meu chefe|necesito hablar=preciso falar|temprano=cedo|yo=eu');
S_('Una entrevista', 'por qué=por que|quiere=quer|trabajar=trabalhar|con nosotros=conosco|he trabajado=trabalhei|tres años=três anos|en atención al cliente=com atendimento ao cliente|soy=sou|una persona=uma pessoa|muy organizada=muito organizada|cuénteme=me conte|un poco=um pouco|sobre usted=sobre o senhor|administradora=administradora|cinco años=cinco anos|en logística=em logística|cuáles son=quais são|sus puntos fuertes=seus pontos fortes|me gusta=gosto de|trabajar en equipo=trabalhar em equipe|quieres=você quer|quier=(erro) quier|en ventas=em vendas|tengo=tenho|hay=há|sé=sei|se=se|sei=(erro) sei|usar=usar|Excel=Excel|muy bien=muito bem|cuál es su experiencia=qual é a sua experiência|he coordinado=coordenei|he aprendido=aprendi|hablo=falo|inglés=inglês|y=e|portugués=português|puedo empezar=posso começar|el lunes=segunda-feira|cuál es el horario=qual é o horário|cuándo sería=quando seria|el inicio=o início|los próximos pasos=os próximos passos|español=espanhol|la próxima semana=a semana que vem|mi punto débil=meu ponto fraco|es que=é que|perfeccionista=perfeccionista|trabajar aquí=trabalhar aqui|hablo tres idiomas=falo três idiomas|estudié=estudei|Derecho=Direito');
S_('Un anuncio de trabajo', 'recepcionista bilingüe=recepcionista bilíngue|el puesto de=a vaga de|de su respuesta=da sua resposta|viste=você viu|el anuncio del hotel=o anúncio do hotel|sí=sim|es perfecto=é perfeito|para ti=para você|qué requisitos=que requisitos|piden=pedem|experiencia mínima=experiência mínima|de un año=de um ano|y=e|disponibilidad=disponibilidade|para turnos=para turnos|le=lhe|lo=o|intereso=(erro) intereso|interesan=interessam|anexo=(erro) anexo|junto=junto|contrato indefinido=contrato por tempo indeterminado|mi currículum=meu currículo|Ana Souza=Ana Souza|funciones=funções|se valorará=será um diferencial|Inti Wasi=Inti Wasi|en el centro histórico=no centro histórico|de Cusco=de Cusco|busca=procura|para incorporarse=para começar|en enero=em janeiro|experiencia=experiência|en atención al cliente=em atendimento ao cliente|español=espanhol|e=e|inglés avanzado=inglês avançado|el portugués=o português|recibir=receber|a los huéspedes=os hóspedes|gestionar=gerenciar|reservas=reservas|por teléfono=por telefone|por correo=por e-mail|informar=informar|sobre=sobre|excursiones=excursões|almuerzo=almoço|en el hotel=no hotel|un excelente ambiente=um excelente ambiente|de trabajo=de trabalho|los interesados=os interessados|deben=devem|enviar=enviar|su currículum=seu currículo|a=a|empleo@intiwasi.pe=empleo@intiwasi.pe|antes del=antes de|15 de diciembre=15 de dezembro|estimados señores=prezados senhores|me interesa=tenho interesse em|he trabajado=trabalhei|dos años=dois anos|en un hotel=num hotel|en Salvador=em Salvador|hablo=falo|portugués=português|adjunto=envio em anexo|quedo a la espera=fico no aguardo|atentamente=atenciosamente');
['gómez', 'ruiz', 'souza', 'cusco', 'inti', 'wasi', 'salvador', 'excel', 'sol'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'es-mitrabajo': {
    o: 'Falar do trabalho: **Trabajo en …**, **Trabajo como …**, **Me encargo de …**, o horário e as condições. E a pergunta: **¿A qué te dedicas?**',
    q: 'Para se apresentar profissionalmente e conversar sobre trabalho.',
    p: '**oficina** é escritório; a oficina mecânica é **el taller**.',
  },
  'es-telefono': {
    o: 'O telefone: **¿Aló?**, **Quería hablar con …**, **¿De parte de quién?**, **No cuelgue**, **¿Quiere dejar un mensaje?**',
    q: 'Para ligar para empresas, hotéis e consultórios.',
    p: '**contestar** é atender e **colgar** é desligar.',
  },
  'es-porpara': {
    o: '**para**: objetivo, destino, prazo, destinatário. **por**: causa, meio, troca, lugar de passagem, período. E as fixas: **gracias por**, **por eso**, **por la mañana**.',
    q: 'Em quase toda frase sobre trabalho, viagens e planos.',
    p: 'Não existe "pelo": é **por el**.',
  },
  'es-obligacion': {
    o: '**tener que** (obrigação pessoal), **hay que** (regra geral), **deber** (conselho forte) e **no hace falta** (não precisa).',
    q: 'Para falar de regras, tarefas e obrigações.',
    p: '**hay que** nunca leva pessoa.',
  },
  'es-entrevista': {
    o: 'Uma entrevista com **usted**: a experiência (**He trabajado …**), as habilidades (**Sé usar …**), os pontos fortes e as perguntas finais.',
    q: 'Para se candidatar a vagas em países de língua espanhola.',
    p: '**sé** (eu sei) tem acento; **se** (pronome) não.',
  },
  'es-anuncio': {
    o: 'Ler uma vaga (**Se busca**, **Se requiere**, **Se ofrece**) e escrever uma candidatura formal (**Me interesa el puesto …**, **Adjunto mi currículum**, **Atentamente**).',
    q: 'Para procurar emprego em espanhol.',
    p: 'Junta tudo do módulo num texto formal.',
  },
});
Object.assign(CZH, {
  'es-mitrabajo': ['onde: ?', 'encargarse + ?', 'escritório'],
  'es-telefono': ['gostaria', 'quem, com acento', 'não desligue'],
  'es-porpara': ['prazo', 'meio', 'gracias + ?'],
  'es-obligacion': ['eu tenho que', 'é preciso', 'não precisa'],
  'es-entrevista': ['usted', 'experiência', 'eu sei'],
  'es-anuncio': ['procura-se', 'interesar', 'anexo'],
});
Object.assign(OBJ, {
  'es-mitrabajo': { o: 'Consigo falar do meu trabalho e das minhas tarefas.', a: 'Você consegue responder "¿A qué te dedicas?"?', ref: 'Expresión oral · A2' },
  'es-telefono': { o: 'Consigo fazer e atender ligações simples.', a: 'Você consegue ligar para uma empresa e deixar um recado?', ref: 'Interacción oral · A2' },
  'es-porpara': { o: 'Uso por e para nos casos principais.', a: 'Você sabe por que se diz "es para el lunes" e "por teléfono"?', ref: 'Gramática · A2' },
  'es-obligacion': { o: 'Consigo falar de obrigações e regras.', a: 'Você sabe a diferença entre tengo que e hay que?', ref: 'Gramática · A2' },
  'es-entrevista': { o: 'Consigo responder às perguntas básicas de uma entrevista.', a: 'Você consegue falar da sua experiência com o pretérito perfecto?', ref: 'Interacción oral · A2' },
  'es-anuncio': { o: 'Consigo ler uma vaga e escrever uma candidatura curta.', a: 'Você consegue escrever uma candidatura formal em espanhol?', ref: 'Expresión escrita · A2' },
});
MOD_OBJ[9] = ['Consigo falar do meu trabalho.', 'Consigo usar o telefone em espanhol.', 'Uso por e para e falo de obrigações.', 'Consigo ler uma vaga e me candidatar.'];

ES_MODS.push({ lv: 'A2', n: 'O trabalho', l: ['es-mitrabajo', 'es-telefono', 'es-porpara', 'es-obligacion', 'es-entrevista', 'es-anuncio'] });
