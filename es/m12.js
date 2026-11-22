// Espanhol · A2 · Módulo 12 · De viaje (Viagens). Formato de es/curso.js.

NL('es-hotel', {
  de: 'Reservar un hotel', pt: 'Reservar e fazer o check-in', gt: 'quisiera reservar · habitación doble / sencilla · ¿está incluido el desayuno? · por noche',
  gx: 'Para reservar: Quisiera reservar una habitación doble para tres noches (gostaria de reservar um quarto duplo para três noites). Perguntas úteis: ¿Cuánto cuesta por noche? ¿Está incluido el desayuno? No check-in: Tengo una reserva a nombre de … (tenho uma reserva em nome de …).',
  ge: 'Quisiera reservar una habitación doble.=Gostaria de reservar um quarto duplo.|¿Está incluido el desayuno?=O café da manhã está incluído?|Tengo una reserva a nombre de Souza.=Tenho uma reserva em nome de Souza.',
  v: 'reservar=reservar=📅|habitación=quarto=🛏️|doble=duplo=👥|sencilla=individual=👤|por noche=por noite=🌙|desayuno=café da manhã=🥐|incluido=incluído=✅|reserva=reserva=📋|llave=chave=🔑|recepción=recepção=🛎️',
  x: 'huésped=hóspede|pasaporte=passaporte|ascensor=elevador|piso=andar|vista al mar=vista para o mar|aire acondicionado=ar-condicionado|wifi=wi-fi|toallas=toalhas|salida=saída, check-out|entrada=entrada, check-in',
  dlg: 'Buenas noches. Tengo una reserva a nombre de Ana Souza.=Boa noite. Tenho uma reserva em nome de Ana Souza.|Sí, una habitación doble para tres noches. ¿Me permite su pasaporte?=Sim, um quarto duplo para três noites. Me permite o seu passaporte?|Claro. ¿A qué hora es el desayuno?=Claro. A que horas é o café da manhã?|De siete a diez. Su habitación está en el quinto piso.=Das sete às dez. O seu quarto fica no quinto andar.',
  cz: '___ reservar una habitación doble. (gostaria)=Quisiera=Quisera=Quiera|¿Está ___ el desayuno?=incluido=incluso=incluida|Tengo una reserva a ___ de Souza.=nombre=nome=nombres',
  whys: 'pedido educado: quisiera|desayuno, masculino: incluido|em nome de: a nombre de',
  pts: 'Reservar: Quisiera reservar una habitación doble / sencilla para … noches, del 3 al 6 de mayo.|Perguntar: ¿Cuánto cuesta por noche? ¿Está incluido el desayuno? ¿Tiene wifi? ¿A qué hora es la salida?|No check-in: Tengo una reserva a nombre de … ¿Me permite su pasaporte? Su habitación está en el quinto piso.|quisiera = gostaria (ainda mais educado que quería).',
  ex: '¿Cuánto cuesta por noche?=Quanto custa por noite?|¿A qué hora es la salida?=A que horas é o check-out?|¿Me puede dar otra toalla?=Pode me dar outra toalha?|La habitación tiene vista al mar.=O quarto tem vista para o mar.',
  bd: ['Quisiera=V^gostaria: pedido educado|reservar=V|una_habitación_doble.=OA', 'Gostaria de reservar um quarto duplo.'],
  rule: 'hotel',
  hw: 'Escreva um diálogo completo de reserva por telefone (oito falas): datas, tipo de quarto, preço, café da manhã e horário de saída.',
  deep: `
Hoje começa o módulo das **viagens**. Você aprende a reservar um hotel e a fazer o check-in.
# Passo 1: reservar
@ P:Uma reserva;Tipo=una habitación doble;Datas=del 3 al 6 de mayo;Noites=para tres noches;Pergunta=¿Está incluido el desayuno?
~ Quisiera reservar una habitación doble. = Gostaria de reservar um quarto duplo.
~ ¿Cuánto cuesta por noche? = Quanto custa por noite?
# Passo 2: as perguntas
| Em espanhol | Em português |
| ¿Está incluido el desayuno? | O café da manhã está incluído? |
| ¿Tiene wifi? | Tem wi-fi? |
| ¿A qué hora es la salida? | A que horas é o check-out? |
~ ¿Está incluido el desayuno? = O café da manhã está incluído?
~ ¿A qué hora es la salida? = A que horas é o check-out?
# Passo 3: o check-in
~ Tengo una reserva a nombre de Souza. = Tenho uma reserva em nome de Souza.
~ ¿Me puede dar otra toalla? = Pode me dar outra toalha?
@ M:Na recepção;Em espanhol|Em português;la llave|a chave;el ascensor|o elevador;el quinto piso|o quinto andar
# Passo 4: ojo, brasileño: habitación e piso
| Em espanhol | Em português |
| la habitación | o quarto (de hotel) |
| el cuarto | o quarto (de casa) |
| el piso | o andar; o chão |
| el desayuno | o café da manhã |
~ La habitación tiene vista al mar. = O quarto tem vista para o mar.
! **habitación** é feminino: **la** habitación doble. E **piso** é o andar: el quinto **piso** = o quinto andar.
> Treine agora: ligue para um hotel e reserve um quarto para duas noites.
? "Gostaria de reservar": || Quisiera reservar.
? "Quarto duplo": || habitación doble
? "Em nome de": || a nombre de
`,
});

NL('es-aeropuerto', {
  de: 'En el aeropuerto', pt: 'No aeroporto', gt: 'facturar la maleta · la puerta de embarque · el vuelo está retrasado · equipaje de mano',
  gx: 'No aeroporto: facturar la maleta (despachar a mala), el equipaje de mano (a bagagem de mão), la tarjeta de embarque (o cartão de embarque), la puerta (o portão). E os avisos: el vuelo está retrasado (atrasado), cancelado, embarque inmediato.',
  ge: 'Quisiera facturar esta maleta.=Gostaria de despachar esta mala.|¿Cuál es la puerta de embarque?=Qual é o portão de embarque?|El vuelo está retrasado una hora.=O voo está atrasado uma hora.',
  v: 'aeropuerto=aeroporto=🛫|vuelo=voo=✈️|facturar=despachar (mala)=🧳|equipaje de mano=bagagem de mão=🎒|tarjeta de embarque=cartão de embarque=🎫|puerta=portão=🚪|retrasado=atrasado=⏰|cancelado=cancelado=❌|escala=escala, conexão=🔁|aduana=alfândega=🛃',
  x: 'pasillo=corredor|ventanilla=janela|asiento=assento|mostrador=balcão|control de seguridad=controle de segurança|migración=imigração|llegadas=desembarque|salidas=embarque, partidas|cinta=esteira|pasajero=passageiro',
  dlg: 'Buenos días. ¿Su pasaporte, por favor? ¿Va a facturar?=Bom dia. O seu passaporte, por favor? Vai despachar?|Sí, esta maleta. Y esta mochila es equipaje de mano.=Sim, esta mala. E esta mochila é bagagem de mão.|¿Prefiere ventanilla o pasillo?=Prefere janela ou corredor?|Ventanilla, por favor. ¿Cuál es la puerta?=Janela, por favor. Qual é o portão?',
  cz: 'Quisiera ___ esta maleta. (despachar)=facturar=despachar=embarcar|¿Cuál es la ___ de embarque? (portão)=puerta=portón=salida|El vuelo está ___ una hora. (atrasado)=retrasado=atrasado=tarde',
  whys: 'despachar mala: facturar|portão: puerta|atrasado: retrasado',
  pts: 'No balcão: Quisiera facturar esta maleta. Esta mochila es equipaje de mano. ¿Prefiere ventanilla o pasillo?|O cartão: la tarjeta de embarque, la puerta 12, el asiento 23A, el embarque empieza a las …|Avisos: El vuelo está retrasado. El vuelo ha sido cancelado. Embarque inmediato por la puerta …|Na chegada: migración, aduana, la cinta de equipaje, llegadas.',
  ex: 'Prefiero ventanilla.=Prefiro janela.|El embarque empieza a las ocho.=O embarque começa às oito.|Tengo una escala en Lima.=Tenho uma escala em Lima.|No encuentro mi maleta.=Não encontro a minha mala.',
  bd: ['El_vuelo=S|está_retrasado=V^retrasado: atrasado|una_hora.=T', 'O voo está atrasado uma hora.'],
  rule: 'aeropuerto',
  hw: 'Escreva o seu percurso num aeroporto em oito frases: o check-in, a mala, o assento, o portão, um atraso e a chegada.',
  deep: `
Hoje você aprende o espanhol do **aeroporto**: despachar a mala, achar o portão e entender os avisos.
# Passo 1: no balcão
| Em espanhol | Em português |
| facturar la maleta | despachar a mala |
| equipaje de mano | bagagem de mão |
| ventanilla o pasillo | janela ou corredor |
~ Quisiera facturar esta maleta. = Gostaria de despachar esta mala.
~ Prefiero ventanilla. = Prefiro janela.
# Passo 2: o cartão de embarque
@ P:O cartão de embarque;Voo=el vuelo AV 85;Portão=la puerta 12;Assento=el asiento 23A;Embarque=a las ocho
~ ¿Cuál es la puerta de embarque? = Qual é o portão de embarque?
~ El embarque empieza a las ocho. = O embarque começa às oito.
# Passo 3: os avisos
@ V:Problemas;Atrasado|El vuelo está retrasado.;Cancelado|El vuelo ha sido cancelado.
~ El vuelo está retrasado una hora. = O voo está atrasado uma hora.
~ Tengo una escala en Lima. = Tenho uma escala em Lima.
# Passo 4: ojo, brasileño: facturar e puerta
| Em espanhol | Em português |
| facturar | despachar (a mala) |
| la puerta | o portão |
| la ventanilla | a janela (do avião) |
| retrasado | atrasado |
~ No encuentro mi maleta. = Não encontro a minha mala.
! **facturar** não tem nada a ver com fatura: no aeroporto é **despachar a mala**. E "atrasado" é **retrasado**.
> Treine agora: diga no balcão que quer despachar uma mala e pergunte pelo portão.
? "Despachar a mala": || facturar la maleta
? "Portão de embarque": || puerta de embarque
? "O voo está atrasado": || El vuelo está retrasado.
`,
});

NL('es-problemas', {
  de: 'Problemas de viaje', pt: 'Resolver problemas de viagem', gt: 'no funciona · se me perdió · me robaron · quería poner una queja',
  gx: 'Para resolver problemas: algo não funciona (el aire acondicionado no funciona), você perdeu algo (se me perdió el pasaporte), roubaram algo (me robaron la cartera). Para reclamar: Quería poner una queja (queria fazer uma reclamação). E para pedir solução: ¿Me puede cambiar de habitación?',
  ge: 'El aire acondicionado no funciona.=O ar-condicionado não está funcionando.|Se me perdió el pasaporte.=Perdi o passaporte.|Me robaron la cartera en el metro.=Roubaram a minha carteira no metrô.',
  v: 'problema=problema=⚠️|no funciona=não funciona=🔧|se me perdió=perdi (sem querer)=😟|me robaron=me roubaram=🕵️|queja=reclamação=📢|cartera=carteira, bolsa=👛|ruido=barulho=🔊|sucio=sujo=🧹|roto=quebrado=💔|solución=solução=✅',
  x: 'ducha=chuveiro|agua caliente=água quente|calefacción=aquecimento|enchufe=tomada|denuncia=boletim de ocorrência|consulado=consulado|embajada=embaixada|tarjeta de crédito=cartão de crédito|bloquear=bloquear|devolver el dinero=devolver o dinheiro',
  dlg: 'Disculpe, quería poner una queja.=Com licença, queria fazer uma reclamação.|Dígame, ¿cuál es el problema?=Diga, qual é o problema?|La ducha no tiene agua caliente y hay mucho ruido.=O chuveiro não tem água quente e tem muito barulho.|Lo siento mucho. Le cambio de habitación ahora mismo.=Sinto muito. Eu troco a senhora de quarto agora mesmo.',
  cz: 'El aire acondicionado no ___.=funciona=funcionan=anda|Se me ___ el pasaporte. (perdi)=perdió=perdí=perdieron|Me ___ la cartera. (roubaram)=robaron=robó=robaram',
  whys: 'uma coisa: funciona|perder sem querer: se me perdió|eles roubaram: robaron',
  pts: 'Não funciona: El aire / la ducha / el wifi no funciona. No hay agua caliente. La habitación está sucia.|Acidentes com se: se me perdió (perdi), se me olvidó (esqueci), se me rompió (quebrou). O se mostra que foi sem querer.|Roubo: Me robaron la cartera. Quiero hacer una denuncia. Tengo que bloquear la tarjeta.|Reclamar e pedir: Quería poner una queja. ¿Me puede cambiar de habitación? ¿Me pueden devolver el dinero?',
  ex: 'Se me olvidó el cargador en el hotel.=Esqueci o carregador no hotel.|Hay mucho ruido en la calle.=Tem muito barulho na rua.|Quiero hacer una denuncia.=Quero registrar um boletim de ocorrência.|¿Me puede cambiar de habitación?=Pode me trocar de quarto?',
  bd: ['Se=R^se: aconteceu sem querer|me=OI^a mim|perdió=V^o verbo concorda com o objeto|el_pasaporte.=S', 'Perdi o passaporte.'],
  rule: 'problemas_viaje',
  hw: 'Escreva três problemas que podem acontecer numa viagem (algo que não funciona, algo que você perdeu e um roubo) e como você pediria ajuda em cada caso.',
  deep: `
Hoje você aprende a **resolver problemas** de viagem: reclamar, explicar o que aconteceu e pedir uma solução.
# Passo 1: o que não funciona
| Em espanhol | Em português |
| El aire no funciona. | O ar não está funcionando. |
| No hay agua caliente. | Não tem água quente. |
| La habitación está sucia. | O quarto está sujo. |
~ El aire acondicionado no funciona. = O ar-condicionado não está funcionando.
~ Hay mucho ruido en la calle. = Tem muito barulho na rua.
# Passo 2: foi sem querer: se me …
@ P:Acidentes;Perdi=se me perdió;Esqueci=se me olvidó;Quebrou=se me rompió
~ Se me perdió el pasaporte. = Perdi o passaporte.
~ Se me olvidó el cargador en el hotel. = Esqueci o carregador no hotel.
BR O **se me** mostra que a culpa não foi bem sua: "**se me** perdió" é "acabou se perdendo". Muito usado no dia a dia.
# Passo 3: roubo
~ Me robaron la cartera en el metro. = Roubaram a minha carteira no metrô.
~ Quiero hacer una denuncia. = Quero registrar um boletim de ocorrência.
@ M:Depois de um roubo;Em espanhol|Em português;hacer una denuncia|registrar uma ocorrência;bloquear la tarjeta|bloquear o cartão;ir al consulado|ir ao consulado
# Passo 4: ojo, brasileño: reclamar
| Português | Espanhol |
| fazer uma reclamação | poner una queja |
| reclamar | quejarse |
| a carteira | la cartera / la billetera |
~ ¿Me puede cambiar de habitación? = Pode me trocar de quarto?
! "Reclamar" em espanhol é **quejarse** ou **poner una queja**; **reclamar** existe, mas é exigir um direito.
> Treine agora: reclame na recepção que o chuveiro não tem água quente.
? "Perdi o passaporte" (sem querer): || Se me perdió el pasaporte.
? "Roubaram a minha carteira": || Me robaron la cartera.
? "Fazer uma reclamação": || poner una queja
`,
});

NL('es-podria', {
  de: '¿Podría …?', pt: 'Pedidos educados: o condicional', gt: 'podría, querría, me gustaría, sería · ¿le importaría …?',
  gx: 'O condicional deixa os pedidos mais educados: ¿Podría ayudarme? (poderia me ajudar?), Me gustaría … (eu gostaria de …). Forma-se com o infinitivo + -ía: hablaría, comería. Irregulares: podría, tendría, haría, querría, diría, saldría, vendría.',
  ge: '¿Podría ayudarme, por favor?=O senhor poderia me ajudar, por favor?|Me gustaría cambiar la fecha del vuelo.=Eu gostaria de mudar a data do voo.|¿Sería posible llegar más temprano?=Seria possível chegar mais cedo?',
  v: 'podría=poderia=🙏|me gustaría=eu gostaria=💭|sería=seria=🤔|querría=eu queria=🫶|tendría=teria=🫴|haría=faria=🛠️|le importaría=o senhor se importaria=😊|posible=possível=✅|amable=gentil=🌷|ayudarme=me ajudar=🤝',
  x: 'cambiar=mudar, trocar|la fecha=a data|más temprano=mais cedo|más tarde=mais tarde|abrir la ventana=abrir a janela|bajar el volumen=abaixar o volume|indicar=indicar|recomendar=recomendar|traer=trazer|guardar=guardar',
  dlg: 'Disculpe, ¿podría ayudarme con la maleta?=Com licença, o senhor poderia me ajudar com a mala?|Claro, con mucho gusto.=Claro, com muito prazer.|Muy amable. ¿Y le importaría guardarla hasta las tres?=Muito gentil. E o senhor se importaria de guardá-la até as três?|No hay problema. Se la guardo en la recepción.=Sem problema. Eu guardo para a senhora na recepção.',
  cz: '¿___ ayudarme, por favor? (poderia)=Podría=Pudiera=Podería|Me ___ cambiar la fecha. (gostaria)=gustaría=gustaria=gustaba|¿___ posible llegar antes? (seria)=Sería=Será=Fuera',
  whys: 'poder no condicional: podría|condicional de gustar: gustaría (com acento)|ser no condicional: sería',
  pts: 'Condicional = infinitivo + -ía, -ías, -ía, -íamos, -ían: hablaría, comería, viviría.|Irregulares: poder → podría, tener → tendría, hacer → haría, querer → querría, decir → diría, salir → saldría, venir → vendría.|Pedidos educados: ¿Podría …? ¿Le importaría …? Me gustaría … ¿Sería posible …?|Mais educado ainda com usted: ¿Podría usted …? / ¿Me podría decir …?',
  ex: '¿Me podría decir dónde está el baño?=O senhor poderia me dizer onde fica o banheiro?|¿Le importaría bajar el volumen?=O senhor se importaria de abaixar o volume?|Yo en tu lugar, no iría.=Eu, no seu lugar, não iria.|Me gustaría una habitación más tranquila.=Eu gostaria de um quarto mais tranquilo.',
  bd: ['¿Podría=V^poder no condicional: educado|ayudarme,=V^infinitivo + me|por_favor?=C', 'O senhor poderia me ajudar, por favor?'],
  rule: 'condicional',
  hw: 'Escreva oito pedidos educados para uma viagem, com podría, le importaría, me gustaría e sería posible.',
  deep: `
Hoje você aprende a fazer **pedidos educados** com o condicional. Funciona como o nosso "poderia", "gostaria".
# Passo 1: podría e me gustaría
@ V:Mais educado;Direto|¿Puede ayudarme?;Educado|¿Podría ayudarme?
~ ¿Podría ayudarme, por favor? = O senhor poderia me ajudar, por favor?
~ Me gustaría cambiar la fecha del vuelo. = Eu gostaria de mudar a data do voo.
# Passo 2: como se forma
| Verbo | Condicional |
| hablar | hablaría |
| comer | comería |
| vivir | viviría |
| ser | sería |
~ ¿Sería posible llegar más temprano? = Seria possível chegar mais cedo?
~ Me gustaría una habitación más tranquila. = Eu gostaria de um quarto mais tranquilo.
# Passo 3: os irregulares
@ M:Irregulares;Verbo|Condicional;poder|podría;tener|tendría;hacer|haría;decir|diría;salir|saldría
~ ¿Me podría decir dónde está el baño? = O senhor poderia me dizer onde fica o banheiro?
~ Yo en tu lugar, no iría. = Eu, no seu lugar, não iria.
# Passo 4: ojo, brasileño: le importaría
| Português | Espanhol |
| O senhor se importaria de …? | ¿Le importaría …? |
| Poderia me dizer …? | ¿Me podría decir …? |
| Muito gentil. | Muy amable. |
~ ¿Le importaría bajar el volumen? = O senhor se importaria de abaixar o volume?
! **¿Le importaría** + infinitivo? não leva "de": ¿Le importaría **abrir** la ventana? (e não "de abrir").
> Treine agora: peça com educação para trocar de quarto e para guardar a sua mala.
? "Poderia me ajudar?": || ¿Podría ayudarme?
? "Eu gostaria de": || Me gustaría …
? "Seria possível": || ¿Sería posible …?
`,
});

NL('es-clima', {
  de: 'El tiempo', pt: 'O tempo e o clima', gt: 'hace calor / frío / sol · llueve, nieva · está nublado · va a llover',
  gx: 'Para falar do tempo, o espanhol usa hacer: hace calor, hace frío, hace sol, hace viento. Para chuva e neve: llueve, nieva (ou está lloviendo). Com estar: está nublado (nublado). E para a previsão: va a llover (vai chover), mañana hará frío.',
  ge: 'Hoy hace mucho calor.=Hoje está muito calor.|Está lloviendo, lleva paraguas.=Está chovendo, leve guarda-chuva.|Mañana va a hacer frío.=Amanhã vai fazer frio.',
  v: 'el tiempo=o tempo (clima)=🌤️|hace calor=faz calor=🥵|hace frío=faz frio=🥶|hace sol=faz sol=☀️|hace viento=está ventando=💨|llueve=chove=🌧️|nieva=neva=❄️|está nublado=está nublado=☁️|paraguas=guarda-chuva=☂️|grados=graus=🌡️',
  x: 'tormenta=tempestade|humedad=umidade|temperatura=temperatura|pronóstico=previsão|estación seca=estação seca|temporada de lluvias=época de chuvas|primavera=primavera|verano=verão|otoño=outono|invierno=inverno',
  dlg: '¿Qué tiempo hace en Bogotá en julio?=Como é o tempo em Bogotá em julho?|Hace fresco todo el año, unos quince grados.=Faz fresco o ano todo, uns quinze graus.|¿Llueve mucho?=Chove muito?|Sí, bastante. Lleva siempre un paraguas.=Sim, bastante. Leve sempre um guarda-chuva.',
  cz: 'Hoy ___ mucho calor.=hace=está=hay|Está ___. (chovendo)=lloviendo=llovendo=lluvia|Mañana va a ___ frío.=hacer=estar=ser',
  whys: 'calor: hace|gerúndio de llover: lloviendo|frío com hacer',
  pts: 'Com hacer: hace calor, hace frío, hace sol, hace viento, hace buen / mal tiempo, hace fresco.|Verbos próprios: llueve (chove), nieva (neva); agora: está lloviendo.|Com estar: está nublado, está despejado (céu limpo). Com haber: hay tormenta, hay niebla.|Previsão: va a llover, mañana hará calor. Pergunta: ¿Qué tiempo hace? ¿Cuántos grados hace?',
  ex: '¿Qué tiempo hace hoy?=Como está o tempo hoje?|Hace veinticinco grados.=Está fazendo vinte e cinco graus.|Está nublado, pero no llueve.=Está nublado, mas não chove.|En diciembre empieza la temporada de lluvias.=Em dezembro começa a época de chuvas.',
  bd: ['Hoy=T|hace=V^hacer: calor, frío, sol, viento|mucho_calor.=OA^calor: substantivo, com mucho', 'Hoje está muito calor.'],
  rule: 'clima',
  hw: 'Descreva o clima da sua cidade em cada estação, em oito frases, e diga o que levar na mala para visitá-la.',
  deep: `
Hoje você aprende a falar do **tempo**, assunto essencial para planejar viagens e puxar conversa.
# Passo 1: hace
@ P:Com hacer;Calor=hace calor;Frio=hace frío;Sol=hace sol;Vento=hace viento
~ Hoy hace mucho calor. = Hoje está muito calor.
~ ¿Qué tiempo hace hoy? = Como está o tempo hoje?
# Passo 2: chuva, neve e nuvens
| Em espanhol | Em português |
| llueve / está lloviendo | chove / está chovendo |
| nieva | neva |
| está nublado | está nublado |
| hay tormenta | tem tempestade |
~ Está lloviendo, lleva paraguas. = Está chovendo, leve guarda-chuva.
~ Está nublado, pero no llueve. = Está nublado, mas não chove.
# Passo 3: a previsão
~ Mañana va a hacer frío. = Amanhã vai fazer frio.
~ Hace veinticinco grados. = Está fazendo vinte e cinco graus.
@ V:Agora × amanhã;Agora|Hace calor.;Amanhã|Va a hacer calor.
# Passo 4: ojo, brasileño: "está calor"
| Português | Espanhol |
| está calor | hace calor |
| está muito calor | hace mucho calor |
| está frio | hace frío |
~ En diciembre empieza la temporada de lluvias. = Em dezembro começa a época de chuvas.
! "Está calor" não existe: é **hace** calor. E como **calor** é substantivo, leva **mucho**: hace **mucho** calor (e não "muy calor").
BR Em muitos países perto da linha do Equador, o ano se divide em **temporada seca** e **temporada de lluvias**, e não em quatro estações.
> Treine agora: descreva o tempo de hoje na sua cidade em três frases.
? "Está muito calor": || Hace mucho calor.
? "Está chovendo": || Está lloviendo.
? "Amanhã vai fazer frio": || Mañana va a hacer frío.
`,
});

NL('es-opinionhotel', {
  de: 'Una reseña de hotel', pt: 'Ler e escrever uma avaliação de hotel', gt: 'o passado da estadia (indefinido e imperfecto) · lo mejor / lo peor · recomendaría',
  gx: 'Uma avaliação de hotel junta tudo do módulo: a estadia no passado (Nos quedamos tres noches), a descrição no imperfeito (La habitación era amplia), o problema (El aire no funcionaba), como o hotel resolveu (Nos cambiaron de habitación) e a recomendação no condicional (Lo recomendaría / Volvería).',
  ge: 'Nos quedamos tres noches en el hotel.=Ficamos três noites no hotel.|La habitación era amplia y muy limpia.=O quarto era amplo e muito limpo.|Sin duda, volvería.=Sem dúvida, eu voltaria.',
  v: 'quedarse=ficar, hospedar-se=🏨|estancia=estadia=🗓️|amplio=amplo=📐|limpio=limpo=✨|personal=equipe, funcionários=🧑‍💼|atento=atencioso=🤗|ubicación=localização=📍|relación calidad-precio=custo-benefício=⚖️|volvería=eu voltaria=🔁|recomendaría=eu recomendaria=👍',
  x: 'céntrico=central|tranquilo=tranquilo|ruidoso=barulhento|cómodo=confortável|desayuno buffet=café da manhã buffet|piscina=piscina|terraza=terraço|playa=praia|incómodo=desconfortável|mejorar=melhorar',
  dlg: '¿Qué tal el hotel en Cartagena?=Como foi o hotel em Cartagena?|Muy bien. La ubicación era perfecta, cerca de la playa.=Muito bom. A localização era perfeita, perto da praia.|¿Y la habitación?=E o quarto?|Era pequeña, pero muy limpia. Volvería sin duda.=Era pequeno, mas muito limpo. Voltaria sem dúvida.',
  cz: 'Nos ___ tres noches. (ficamos)=quedamos=quedábamos=ficamos|La habitación ___ amplia. (era, descrição)=era=fue=es|Sin duda, ___. (eu voltaria)=volvería=volveré=volvía',
  whys: 'a estadia (fato): quedamos|descrição no passado: era|recomendação: condicional',
  pts: 'A estadia, no indefinido: Nos quedamos tres noches. Llegamos el viernes. Nos cambiaron de habitación.|A descrição, no imperfeito: La habitación era amplia. El personal era muy atento. Había mucho ruido.|Lo mejor / lo peor: Lo mejor fue el desayuno. Lo peor, el ruido de la calle.|A recomendação, no condicional: Lo recomendaría. Volvería sin duda. No lo recomendaría para familias.',
  ex: 'El personal era muy atento.=Os funcionários eram muito atenciosos.|Lo mejor fue el desayuno.=O melhor foi o café da manhã.|El primer día, el aire no funcionaba.=No primeiro dia, o ar não funcionava.|Lo recomendaría para parejas.=Eu recomendaria para casais.',
  bd: ['Sin_duda,=C|volvería.=V^condicional: eu voltaria', 'Sem dúvida, eu voltaria.'],
  rule: 'resena_hotel',
  le: {
    texto: {
      t: 'Hotel Casa Brisa, Cartagena', kind: 'avaliação de hotel', voz: 'a',
      intro: 'A Lorena, de Quito, avaliou um hotel em Cartagena, na Colômbia. Leia e responda.',
      paras: ['Mi esposo y yo nos quedamos cuatro noches en el Hotel Casa Brisa, dentro de la ciudad amurallada.', 'La ubicación era perfecta: a cinco minutos de la plaza y a diez de la playa. La habitación era pequeña, pero muy limpia y bonita.', 'El primer día tuvimos un problema: el aire acondicionado no funcionaba y hacía muchísimo calor. Llamamos a recepción y en media hora nos cambiaron de habitación.', 'Lo mejor fue el personal, siempre muy atento. Lo peor, el ruido de la calle los sábados por la noche.', 'Relación calidad-precio: excelente. Lo recomendaría a parejas y volvería sin duda.'],
      qs: [
        { q: 'Quantas noites eles ficaram?', o: ['quatro', 'três', 'uma semana'], a: 0 },
        { q: 'Qual foi o problema no primeiro dia?', o: ['o ar-condicionado não funcionava', 'o quarto estava sujo', 'a reserva não existia'], a: 0 },
        { q: 'Como o hotel resolveu?', o: ['trocou o casal de quarto em meia hora', 'devolveu o dinheiro', 'não resolveu'], a: 0 },
        { q: 'O que foi o pior?', o: ['o barulho da rua aos sábados à noite', 'o café da manhã', 'a localização'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva a sua avaliação', tipo: 'form', ok: 'Avaliação escrita corretamente.',
      pede: 'Avalie um hotel (real ou imaginário) onde você ficou. Uma frase por linha.',
      campos: [
        { l: 'A estadia', d: 'Nos quedamos … / Me quedé …', re: '(^|\\s)(me quedé|nos quedamos|estuve|estuvimos|pasé|pasamos)(?!\\p{L})', f: 'iu', err: 'Diga quanto tempo ficou: Nos quedamos tres noches.', bad: [['\\b(ficamos|fiquei)\\b', 'Isso é português. Em espanhol: <b>nos quedamos</b>, <b>me quedé</b>.']] },
        { l: 'Como era', d: 'La habitación era …', re: '(^|\\s)(era|eran|estaba|estaban|tenía|había)(?!\\p{L})', f: 'iu', err: 'Descreva no imperfeito: La habitación era amplia.' },
        { l: 'Um problema', d: '… no funcionaba / hacía …', re: '(no funcionaba|ruido|problema|sucia|sucio|no había|hacía)', f: 'iu', err: 'Conte um problema: El aire no funcionaba.' },
        { l: 'O melhor', d: 'Lo mejor fue …', re: '(^|\\s)lo mejor(?!\\p{L})', f: 'iu', err: 'Diga o melhor: Lo mejor fue el desayuno.' },
        { l: 'O pior', d: 'Lo peor fue …', re: '(^|\\s)lo peor(?!\\p{L})', f: 'iu', err: 'Diga o pior: Lo peor, el ruido.' },
        { l: 'Recomendação', d: 'Lo recomendaría / Volvería …', re: '(recomendaría|volvería|no lo recomendaría|no volvería)(?!\\p{L})', f: 'iu', err: 'Recomende no condicional: Lo recomendaría. Volvería sin duda.', bad: [['\\b(recomendaria|volveria)\\b', 'O condicional leva acento: recomend<b>aría</b>, volv<b>ería</b>.']] },
      ],
      modelo: 'Nos quedamos tres noches en un hotel en Lima. · La habitación era grande y muy limpia. · El primer día no funcionaba el wifi. · Lo mejor fue el desayuno. · Lo peor fue el ruido de la calle. · Lo recomendaría a mis amigos.',
    },
  },
  hw: 'Escreva uma avaliação completa (oito a dez frases) de um hotel ou pousada onde você ficou, com a estadia, a descrição, um problema, lo mejor, lo peor e a recomendação.',
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo. Você vai ler a avaliação de uma equatoriana e escrever a sua, com os passados e o condicional.
# Passo 1: a estrutura
@ P:Uma avaliação de hotel;Estadia=Nos quedamos tres noches.;Descrição=La habitación era amplia.;Problema=El aire no funcionaba.;Lo mejor=Lo mejor fue …;Recomendação=Volvería.
~ Nos quedamos tres noches en el hotel. = Ficamos três noites no hotel.
~ La habitación era amplia y muy limpia. = O quarto era amplo e muito limpo.
# Passo 2: os dois passados
| Indefinido (fatos) | Imperfecto (descrição) |
| Nos quedamos tres noches. | La habitación era pequeña. |
| Nos cambiaron de habitación. | El personal era atento. |
| Llamamos a recepción. | Hacía muchísimo calor. |
~ El primer día, el aire no funcionaba. = No primeiro dia, o ar não funcionava.
~ El personal era muy atento. = Os funcionários eram muito atenciosos.
# Passo 3: lo mejor e lo peor
~ Lo mejor fue el desayuno. = O melhor foi o café da manhã.
| Em espanhol | Em português |
| la ubicación | a localização |
| el personal | os funcionários, a equipe |
| relación calidad-precio | custo-benefício |
BR **el personal** (singular) é a equipe do hotel. "El personal **era** atento" = os funcionários eram atenciosos.
# Passo 4: a recomendação no condicional
~ Sin duda, volvería. = Sem dúvida, eu voltaria.
~ Lo recomendaría para parejas. = Eu recomendaria para casais.
! **quedarse** é hospedar-se: me **quedé** en un hotel. Não confunda com **quedar** (ficar em algum lugar, combinar): ¿Dónde **queda** el hotel?
> Agora leia a avaliação da Lorena e escreva a sua.
? "Ficamos três noites": || Nos quedamos tres noches.
? "O melhor foi o café": || Lo mejor fue el desayuno.
? "Eu voltaria": || Volvería.
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('Reservar un hotel',
  'P:Uma reserva;Tipo=una habitación doble;Datas=del 3 al 6 de mayo;Noites=para tres noches',
  'M:Na recepção;Espanhol|Português;la llave|a chave;el ascensor|o elevador;el quinto piso|o quinto andar');
V('En el aeropuerto',
  'P:O cartão de embarque;Voo=el vuelo;Portão=la puerta;Assento=el asiento;Embarque=a las ocho',
  'V:Problemas;Atrasado|El vuelo está retrasado.;Cancelado|El vuelo ha sido cancelado.');
V('Problemas de viaje',
  'P:Acidentes;Perdi=se me perdió;Esqueci=se me olvidó;Quebrou=se me rompió',
  'M:Depois de um roubo;Espanhol|Português;hacer una denuncia|registrar uma ocorrência;bloquear la tarjeta|bloquear o cartão');
V('¿Podría …?',
  'V:Mais educado;Direto|¿Puede ayudarme?;Educado|¿Podría ayudarme?',
  'M:Irregulares;Verbo|Condicional;poder|podría;tener|tendría;hacer|haría;decir|diría');
V('El tiempo',
  'P:Com hacer;Calor=hace calor;Frio=hace frío;Sol=hace sol;Vento=hace viento',
  'V:Agora × amanhã;Agora|Hace calor.;Amanhã|Va a hacer calor.');
V('Una reseña de hotel',
  'P:Uma avaliação de hotel;Estadia=Nos quedamos …;Descrição=La habitación era …;Lo mejor=Lo mejor fue …;Recomendação=Volvería.',
  'M:Os dois passados;Indefinido|Imperfecto;Nos quedamos.|Era pequeña.;Llamamos.|Hacía calor.');
S_('Reservar un hotel', 'quisiera=gostaria|está=está|el desayuno=o café da manhã|tengo=tenho|una reserva=uma reserva|a nombre de=em nome de|Souza=Souza|buenas noches=boa noite|Ana Souza=Ana Souza|sí=sim|una habitación doble=um quarto duplo|para tres noches=para três noites|me permite=me permite|su pasaporte=seu passaporte|claro=claro|a qué hora=a que horas|es=é|de siete a diez=das sete às dez|su habitación=seu quarto|en el quinto piso=no quinto andar|quisera=(erro) quisera|quiera=queira|incluso=inclusive|incluida=incluída|nome=(erro) nome|nombres=nomes|cuánto cuesta=quanto custa|tiene wifi=tem wi-fi|la salida=o check-out|me puede dar=pode me dar|otra toalla=outra toalha|la habitación=o quarto|tiene=tem|del 3 al 6 de mayo=de 3 a 6 de maio|el cuarto=o quarto|el piso=o andar|el ascensor=o elevador|la llave=a chave|para … noches=para … noites|una habitación sencilla=um quarto individual|dos noches=duas noites|habitación doble=quarto duplo');
S_('En el aeropuerto', 'quisiera=gostaria|esta maleta=esta mala|cuál es=qual é|la puerta de embarque=o portão de embarque|el vuelo=o voo|está=está|una hora=uma hora|buenos días=bom dia|su pasaporte=seu passaporte|por favor=por favor|va a facturar=vai despachar|sí=sim|y=e|esta mochila=esta mochila|es=é|prefiere=prefere|o=ou|la puerta=o portão|despachar=(erro) despachar|embarcar=embarcar|portón=portão grande|salida=saída|atrasado=(erro) atrasado|tarde=tarde|la tarjeta de embarque=o cartão de embarque|la puerta 12=o portão 12|el asiento 23A=o assento 23A|el embarque=o embarque|empieza=começa|a las=às|ha sido cancelado=foi cancelado|embarque inmediato=embarque imediato|por la puerta=pelo portão|la cinta de equipaje=a esteira de bagagem|prefiero=prefiro|a las ocho=às oito|tengo=tenho|una escala=uma escala|en Lima=em Lima|no encuentro=não encontro|mi maleta=minha mala|el vuelo AV 85=o voo AV 85|AV=AV|85=85|facturar la maleta=despachar a mala|puerta de embarque=portão de embarque|la maleta=a mala');
S_('Problemas de viaje', 'el aire acondicionado=o ar-condicionado|el pasaporte=o passaporte|la cartera=a carteira|en el metro=no metrô|disculpe=com licença|quería poner=queria fazer|una queja=uma reclamação|dígame=diga|cuál es=qual é|el problema=o problema|la ducha=o chuveiro|no tiene=não tem|agua caliente=água quente|y=e|hay=tem|mucho ruido=muito barulho|lo siento mucho=sinto muito|le cambio=eu troco a senhora|de habitación=de quarto|ahora mismo=agora mesmo|funcionan=funcionam|anda=anda|perdí=perdi|perdieron=perderam|robó=roubou|robaram=(erro) roubaram|el aire=o ar|el wifi=o wi-fi|no hay=não tem|la habitación=o quarto|está sucia=está sujo|se me olvidó=esqueci|se me rompió=quebrou|quiero hacer=quero fazer|una denuncia=uma ocorrência|tengo que=tenho que|bloquear la tarjeta=bloquear o cartão|me puede cambiar=pode me trocar|me pueden devolver=podem me devolver|el dinero=o dinheiro|el cargador=o carregador|en el hotel=no hotel|en la calle=na rua|hacer una denuncia=registrar uma ocorrência|ir al consulado=ir ao consulado|quejarse=reclamar|poner una queja=fazer uma reclamação|la billetera=a carteira|reclamar=exigir');
S_('¿Podría …?', 'por favor=por favor|cambiar=mudar|la fecha=a data|del vuelo=do voo|posible=possível|llegar=chegar|más temprano=mais cedo|disculpe=com licença|con la maleta=com a mala|claro=claro|con mucho gusto=com muito prazer|muy amable=muito gentil|y=e|guardarla=guardá-la|hasta las tres=até as três|no hay problema=sem problema|se la guardo=guardo para a senhora|en la recepción=na recepção|pudiera=pudesse|podería=(erro) podería|gustaria=(erro) gustaria|gustaba=gostava|antes=antes|será=será|fuera=fosse|hablaría=falaria|comería=comeria|viviría=viveria|tendría=teria|haría=faria|querría=eu queria|diría=diria|saldría=sairia|vendría=viria|podría usted=o senhor poderia|me podría decir=poderia me dizer|dónde está=onde fica|el baño=o banheiro|bajar=abaixar|el volumen=o volume|yo=eu|en tu lugar=no seu lugar|no iría=não iria|una habitación=um quarto|más tranquila=mais tranquilo|puede ayudarme=pode me ajudar|abrir=abrir|la ventana=a janela|de abrir=(erro) de abrir|me gustaría=eu gostaria|sería posible=seria possível|hablar=falar|comer=comer|vivir=viver|ser=ser|poder=poder|tener=ter|hacer=fazer|decir=dizer|salir=sair');
S_('El tiempo', 'hoy=hoje|mucho calor=muito calor|está lloviendo=está chovendo|lleva=leve|mañana=amanhã|va a hacer frío=vai fazer frio|qué tiempo hace=como está o tempo|en Bogotá=em Bogotá|en julio=em julho|hace fresco=faz fresco|todo el año=o ano todo|unos quince=uns quinze|llueve mucho=chove muito|sí=sim|bastante=bastante|siempre=sempre|un paraguas=um guarda-chuva|está=está|hay=tem|llovendo=(erro) llovendo|lluvia=chuva|hacer=fazer|estar=estar|ser=ser|hace buen tiempo=faz tempo bom|hace mal tiempo=faz tempo ruim|ahora=agora|está despejado=o céu está limpo|hay tormenta=tem tempestade|hay niebla=tem neblina|va a llover=vai chover|mañana hará calor=amanhã vai fazer calor|cuántos grados hace=quantos graus está fazendo|hace veinticinco grados=está fazendo vinte e cinco graus|está nublado=está nublado|pero=mas|no llueve=não chove|en diciembre=em dezembro|empieza=começa|la temporada de lluvias=a época de chuvas|temporada seca=estação seca|está calor=(erro) está calor|muy calor=(erro) muito calor|hace calor=faz calor|va a hacer calor=vai fazer calor');
S_('Una reseña de hotel', 'nos quedamos=ficamos|tres noches=três noites|en el hotel=no hotel|la habitación=o quarto|era=era|y=e|muy limpia=muito limpo|sin duda=sem dúvida|qué tal=como foi|en Cartagena=em Cartagena|muy bien=muito bom|la ubicación=a localização|perfecta=perfeita|cerca de la playa=perto da praia|y la habitación=e o quarto|pequeña=pequeno|pero=mas|quedábamos=ficávamos|ficamos=(erro) ficamos|fue=foi|es=é|volveré=voltarei|volvía=voltava|llegamos=chegamos|el viernes=na sexta|nos cambiaron=nos trocaram|de habitación=de quarto|el personal=os funcionários|muy atento=muito atencioso|había=tinha|mucho ruido=muito barulho|lo mejor fue=o melhor foi|el desayuno=o café da manhã|lo peor=o pior|el ruido=o barulho|de la calle=da rua|lo recomendaría=eu recomendaria|no lo recomendaría=não recomendaria|para familias=para famílias|el primer día=no primeiro dia|el aire=o ar|no funcionaba=não funcionava|para parejas=para casais|llamamos=ligamos|a recepción=para a recepção|hacía=fazia|muchísimo calor=muitíssimo calor|me quedé=fiquei|en un hotel=num hotel|dónde=onde|queda=fica|Casa Brisa=Casa Brisa|Lorena=Lorena|Quito=Quito|mi esposo=meu marido|yo=eu|cuatro noches=quatro noites|dentro de=dentro de|la ciudad amurallada=a cidade murada|a cinco minutos=a cinco minutos|de la plaza=da praça|a diez=a dez|bonita=bonito|tuvimos=tivemos|un problema=um problema|el aire acondicionado=o ar-condicionado|en media hora=em meia hora|siempre=sempre|los sábados=aos sábados|por la noche=à noite|relación calidad-precio=custo-benefício|excelente=excelente|a parejas=a casais|volvería=voltaria|en Lima=em Lima|grande=grande|no funcionaba el wifi=o wi-fi não funcionava|a mis amigos=aos meus amigos');
['brisa', 'lorena', 'quito', 'cartagena', 'bogotá', 'lima', 'souza'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'es-hotel': {
    o: 'Reservar e fazer o check-in: **Quisiera reservar una habitación doble**, **¿Está incluido el desayuno?**, **Tengo una reserva a nombre de …**',
    q: 'Para reservar por telefone ou chegar ao hotel.',
    p: '**habitación** é o quarto de hotel, e **piso** é o andar.',
  },
  'es-aeropuerto': {
    o: 'O aeroporto: **facturar la maleta**, **equipaje de mano**, **la puerta de embarque**, **el vuelo está retrasado**, **escala**, **aduana**.',
    q: 'Do check-in à esteira de bagagem.',
    p: '**facturar** é despachar a mala, e **retrasado** é atrasado.',
  },
  'es-problemas': {
    o: 'Problemas: **no funciona**, **se me perdió**, **se me olvidó**, **me robaron**, **quería poner una queja**, **¿Me puede cambiar de habitación?**',
    q: 'Para reclamar e resolver imprevistos de viagem.',
    p: 'O **se me** mostra que foi sem querer.',
  },
  'es-podria': {
    o: 'O condicional para pedidos educados: **¿Podría …?**, **Me gustaría …**, **¿Sería posible …?**, **¿Le importaría …?**',
    q: 'Para pedir favores a desconhecidos, em hotéis, lojas e aeroportos.',
    p: 'Infinitivo + **-ía**; irregulares: **podría**, **tendría**, **haría**.',
  },
  'es-clima': {
    o: 'O tempo: **hace calor / frío / sol / viento**, **llueve**, **nieva**, **está nublado**, **va a llover**.',
    q: 'Para planejar viagens, fazer a mala e puxar conversa.',
    p: '"Está calor" não existe: é **hace calor**.',
  },
  'es-opinionhotel': {
    o: 'Uma avaliação de hotel: a estadia no indefinido (**nos quedamos**), a descrição no imperfeito (**era**), **lo mejor / lo peor** e a recomendação no condicional (**volvería**).',
    q: 'Para avaliar hotéis e ler avaliações antes de reservar.',
    p: 'Junta os passados e o condicional num texto real.',
  },
});
Object.assign(CZH, {
  'es-hotel': ['gostaria', 'desayuno', 'em nome de'],
  'es-aeropuerto': ['despachar', 'portão', 'atrasado'],
  'es-problemas': ['uma coisa', 'perdi, sem querer', 'roubaram'],
  'es-podria': ['poderia', 'gostaria', 'seria'],
  'es-clima': ['calor', 'chovendo', 'frío + ?'],
  'es-opinionhotel': ['ficamos', 'descrição', 'eu voltaria'],
});
Object.assign(OBJ, {
  'es-hotel': { o: 'Consigo reservar um hotel e fazer o check-in.', a: 'Você consegue reservar um quarto por telefone?', ref: 'Interacción oral · A2' },
  'es-aeropuerto': { o: 'Consigo me virar no aeroporto.', a: 'Você consegue despachar a mala e achar o portão?', ref: 'Interacción oral · A2' },
  'es-problemas': { o: 'Consigo reclamar e resolver problemas de viagem.', a: 'Você consegue dizer que perdeu algo ou que algo não funciona?', ref: 'Interacción oral · A2' },
  'es-podria': { o: 'Faço pedidos educados com o condicional.', a: 'Você consegue pedir um favor com "¿Podría …?"?', ref: 'Interacción oral · A2' },
  'es-clima': { o: 'Consigo falar do tempo e da previsão.', a: 'Você sabe por que se diz "hace calor"?', ref: 'Expresión oral · A2' },
  'es-opinionhotel': { o: 'Consigo ler e escrever uma avaliação de hotel.', a: 'Você consegue avaliar um hotel em espanhol?', ref: 'Expresión escrita · A2' },
});
MOD_OBJ[11] = ['Consigo reservar e fazer o check-in.', 'Consigo me virar no aeroporto e resolver problemas.', 'Faço pedidos educados e falo do tempo.', 'Consigo escrever uma avaliação de hotel.'];

ES_MODS.push({ lv: 'A2', n: 'Viagens', l: ['es-hotel', 'es-aeropuerto', 'es-problemas', 'es-podria', 'es-clima', 'es-opinionhotel'] });
