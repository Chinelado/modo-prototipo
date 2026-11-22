// Espanhol · A1 · Módulo 5 · La ciudad (A cidade). Formato de es/curso.js.

NL('es-dondeesta', {
  de: '¿Dónde está el banco?', pt: 'Onde fica: estar e a localização', gt: 'estar + lugar · al lado de, enfrente de, cerca de, lejos de, entre',
  gx: 'Para dizer onde algo fica, use estar: el banco está al lado del hotel. As preposições de lugar: al lado de (ao lado de), enfrente de (em frente a), cerca de (perto de), lejos de (longe de), entre (entre), detrás de (atrás de), a la derecha / a la izquierda (à direita / à esquerda). Lembre: de + el = del.',
  ge: 'El banco está al lado del hotel.=O banco fica ao lado do hotel.|La farmacia está enfrente de la plaza.=A farmácia fica em frente à praça.|¿Está lejos de aquí?=Fica longe daqui?',
  v: 'estar=estar, ficar (lugar)=📍|al lado de=ao lado de=↔️|enfrente de=em frente a=⬆️|cerca de=perto de=🤏|lejos de=longe de=🛣️|entre=entre=↕️|detrás de=atrás de=🔙|a la derecha=à direita=👉|a la izquierda=à esquerda=👈|en la esquina=na esquina=📐',
  x: 'banco=banco|farmacia=farmácia|plaza=praça|hotel=hotel|supermercado=supermercado|iglesia=igreja|parque=parque|estación=estação|museo=museu|cuadra=quarteirão',
  dlg: 'Disculpe, ¿dónde está la farmacia?=Com licença, onde fica a farmácia?|Está en la esquina, al lado del supermercado.=Fica na esquina, ao lado do supermercado.|¿Está lejos?=É longe?|No, está muy cerca. A dos cuadras.=Não, é muito perto. A dois quarteirões.',
  cz: 'El banco ___ al lado del hotel. (fica)=está=es=hay|La farmacia está ___ de la plaza. (em frente)=enfrente=en frente a=frente|El museo está al lado ___ parque. (de + el)=del=de el=do',
  whys: 'localização: estar|em frente a: enfrente de|de + el = del',
  pts: 'estar + lugar diz onde algo fica: El banco está en la plaza. ¿Dónde está el hotel?|Preposições: al lado de, enfrente de, cerca de, lejos de, detrás de, delante de, entre … y …, en la esquina.|Direções: a la derecha, a la izquierda, todo recto / derecho (em frente).|de + el = del: al lado del hotel. a + el = al: Voy al banco.',
  ex: 'El hotel está entre el banco y la iglesia.=O hotel fica entre o banco e a igreja.|La estación está a la derecha.=A estação fica à direita.|El parque está detrás del museo.=O parque fica atrás do museu.|Está a dos cuadras.=Fica a dois quarteirões.',
  bd: ['El_banco=S^algo específico|está=V^estar: localização|al_lado_del=L^de + el = del|hotel.=L', 'O banco fica ao lado do hotel.'],
  rule: 'dondeesta',
  hw: 'Descreva o seu bairro em seis frases com estar e as preposições de lugar: La panadería está al lado de … El parque está cerca de …',
  deep: `
Hoje você aprende a dizer **onde fica** cada lugar. Em espanhol, a localização se diz com **estar**.
# Passo 1: estar + lugar
@ E:Onde fica;El banco^s|está^v|al lado del hotel.^p
~ El banco está al lado del hotel. = O banco fica ao lado do hotel.
~ ¿Está lejos de aquí? = Fica longe daqui?
BR Em português, dizemos "**fica**" ou "**é**" ("onde é o banco?"). Em espanhol, a localização é sempre **estar**: ¿Dónde **está** el banco?
# Passo 2: as preposições de lugar
| Em espanhol | Em português |
| al lado de | ao lado de |
| enfrente de | em frente a |
| cerca de / lejos de | perto de / longe de |
| detrás de | atrás de |
| entre … y … | entre … e … |
| en la esquina | na esquina |
~ La farmacia está enfrente de la plaza. = A farmácia fica em frente à praça.
~ El hotel está entre el banco y la iglesia. = O hotel fica entre o banco e a igreja.
# Passo 3: direita, esquerda, distância
| Em espanhol | Em português |
| a la derecha | à direita |
| a la izquierda | à esquerda |
| a dos cuadras | a dois quarteirões |
~ La estación está a la derecha. = A estação fica à direita.
~ Está a dos cuadras. = Fica a dois quarteirões.
# Passo 4: ojo, brasileño: del, e não "do"
| Português | Espanhol |
| ao lado do hotel | al lado del hotel |
| atrás do museu | detrás del museo |
| perto da praça | cerca de la plaza |
~ El parque está detrás del museo. = O parque fica atrás do museu.
! Só existem **del** (de + el) e **al** (a + el). "Da", "do", "na", "no" não existem: **de la**, **del**, **en la**, **en el**.
> Treine agora: diga onde fica a padaria mais perto da sua casa.
? "Onde fica o banco?": || ¿Dónde está el banco?
? "Em frente à praça": || enfrente de la plaza
? de + el = || del
`,
});

NL('es-hayesta', {
  de: 'Hay o está', pt: 'Hay ou está?', gt: 'hay + un / una (existe) · el / la + está (onde fica)',
  gx: 'hay e está traduzem o nosso "tem" e "fica", e o brasileiro confunde. Use hay para dizer que algo existe, com un / una ou número: Hay un banco cerca. Use está para dizer onde fica algo específico, com el / la / nome: El banco está en la plaza.',
  ge: 'Hay un banco en esta calle.=Tem um banco nesta rua.|El banco está al lado de la farmacia.=O banco fica ao lado da farmácia.|¿Hay un cajero por aquí?=Tem um caixa eletrônico por aqui?',
  v: 'hay=há, tem (existe)=📍|está=fica, está=📌|cajero=caixa eletrônico=🏧|panadería=padaria=🥖|restaurante=restaurante=🍽️|baño=banheiro=🚻|por aquí=por aqui=👇|calle=rua=🛣️|barrio=bairro=🏘️|centro=centro=🏙️',
  x: 'tienda=loja|correo=correio|policía=polícia|hospital=hospital|escuela=escola|cine=cinema|biblioteca=biblioteca|gasolinera=posto de gasolina|parada=ponto (de ônibus)|mercado=mercado',
  dlg: 'Disculpe, ¿hay un cajero por aquí?=Com licença, tem um caixa eletrônico por aqui?|Sí, hay uno en el centro comercial.=Sim, tem um no shopping.|¿Y dónde está el centro comercial?=E onde fica o shopping?|Está a cinco minutos, enfrente de la estación.=Fica a cinco minutos, em frente à estação.',
  cz: '¿___ un cajero por aquí? (tem)=Hay=Está=Es|El cajero ___ en el centro comercial. (fica)=está=hay=es|En mi barrio ___ dos panaderías. (tem)=hay=están=tiene',
  whys: 'existe? hay + un|algo específico: el … está|existir, com número: hay',
  pts: 'hay = existe: hay + un, una, unos, números, mucho, poco. Hay un banco. Hay dos panaderías. Hay mucha gente.|está = onde fica algo específico: el / la / nome + está. El banco está en la plaza. Ana está en casa.|Pergunta típica de turista: ¿Hay un baño por aquí? (existe?) → ¿Dónde está el baño? (onde fica?).|Plural: hay não muda (hay dos bancos); estar muda (los bancos están en el centro).',
  ex: 'En mi barrio hay dos panaderías.=No meu bairro tem duas padarias.|Los baños están al fondo.=Os banheiros ficam no fundo.|¿Dónde está el cine?=Onde fica o cinema?|No hay farmacia en esta calle.=Não tem farmácia nesta rua.',
  bd: ['¿Hay=V^hay: existe?|un_cajero=OA^un: algo não específico|por_aquí?=L', 'Tem um caixa eletrônico por aqui?'],
  rule: 'hayesta',
  hw: 'Escreva quatro frases com hay sobre o seu bairro (Hay un parque…) e quatro com está dizendo onde fica cada lugar (El parque está…).',
  deep: `
Hoje você resolve uma das confusões mais comuns do brasileiro: **hay** ou **está**? Os dois podem virar "tem" ou "fica" em português.
# Passo 1: hay, algo existe
@ E:Existe?;Hay^v|un banco^s|en esta calle.^p
~ Hay un banco en esta calle. = Tem um banco nesta rua.
~ En mi barrio hay dos panaderías. = No meu bairro tem duas padarias.
# Passo 2: está, onde fica algo específico
@ E:Onde fica?;El banco^s|está^v|al lado de la farmacia.^p
~ El banco está al lado de la farmacia. = O banco fica ao lado da farmácia.
~ Los baños están al fondo. = Os banheiros ficam no fundo.
# Passo 3: a regra do artigo
@ M:Hay ou está?;Depois / antes|Use|Exemplo;un, una, número|hay|Hay un cine.;el, la, nome|está|El cine está aquí.
~ ¿Hay un cajero por aquí? = Tem um caixa eletrônico por aqui?
~ ¿Dónde está el cine? = Onde fica o cinema?
BR Truque: se vier **un / una** ou número, é **hay**. Se vier **el / la** ou um nome, é **está**.
# Passo 4: ojo, brasileño: perguntar como turista
| Primeiro | Depois |
| ¿Hay un baño por aquí? | ¿Dónde está el baño? |
| ¿Hay una farmacia cerca? | ¿Dónde está la farmacia? |
~ No hay farmacia en esta calle. = Não tem farmácia nesta rua.
! "Hay el banco" e "el banco hay" estão errados. E não use **tener** para lugares: "la calle tiene un banco" soa estranho; diga **en la calle hay un banco**.
> Treine agora: pergunte se há um banheiro por perto e depois onde ele fica.
? "Tem um banco por aqui?": || ¿Hay un banco por aquí?
? "O banco fica na praça": || El banco está en la plaza.
? hay muda no plural? || Não: hay dos bancos.
`,
});

NL('es-llego', {
  de: '¿Cómo llego?', pt: 'Pedir e dar direções', gt: 'imperativo: sigue, dobla, cruza (tú) · siga, doble, cruce (usted)',
  gx: 'Para dar direções, usa-se o imperativo: sigue todo recto (siga em frente), dobla a la derecha (vire à direita), cruza la calle (atravesse a rua). Com usted, a vogal troca: siga, doble, cruce. Para pedir: ¿Cómo llego a …? / ¿Para ir a …?',
  ge: '¿Cómo llego al museo?=Como chego ao museu?|Sigue todo recto y dobla a la izquierda.=Siga em frente e vire à esquerda.|Cruce la avenida y tome la primera calle.=Atravesse a avenida e pegue a primeira rua.',
  v: 'llegar=chegar=🏁|seguir=seguir=⬆️|todo recto=sempre em frente=⬆️|doblar=virar=↪️|girar=virar=🔄|cruzar=atravessar=🚸|tomar=pegar (rua, ônibus)=👉|avenida=avenida=🛣️|semáforo=semáforo=🚦|primera=primeira=1️⃣',
  x: 'segunda=segunda|tercera=terceira|hasta=até|después de=depois de|al final de=no fim de|puente=ponte|rotonda=rotatória|esquina=esquina|perdido=perdido|mapa=mapa',
  dlg: 'Perdón, ¿cómo llego a la estación?=Desculpe, como chego à estação?|Siga todo recto hasta el semáforo.=Siga em frente até o semáforo.|¿Y después?=E depois?|Doble a la derecha. La estación está al final de la calle.=Vire à direita. A estação fica no fim da rua.',
  cz: '___ todo recto. (siga, tú)=Sigue=Sigues=Segue|___ a la derecha. (vire, usted)=Doble=Dobla=Dobra|¿Cómo ___ al museo? (chego)=llego=chego=llega',
  whys: 'imperativo de tú: sigue|imperativo de usted: doble|chegar, com yo: llego',
  pts: 'Pedir direções: ¿Cómo llego a …? / ¿Para ir a …? / ¿Dónde queda …? / Estoy perdido, ¿me ayuda?|Imperativo com tú: sigue, dobla, cruza, toma, gira. Com usted, a vogal troca: siga, doble, cruce, tome, gire.|Ordem do caminho: todo recto / derecho, hasta el semáforo, la primera (segunda) calle a la derecha, al final de la calle.|tomar serve para ruas e transporte: tome la segunda calle, tome el autobús.',
  ex: 'Tome la segunda calle a la izquierda.=Pegue a segunda rua à esquerda.|Estoy perdida. ¿Me ayuda?=Estou perdida. Pode me ajudar?|Cruza el puente y sigue derecho.=Atravesse a ponte e siga em frente.|Está al final de la calle.=Fica no fim da rua.',
  bd: ['Sigue=V^imperativo de tú: seguir|todo_recto=L^sempre em frente|y_dobla=V^imperativo: doblar|a_la_izquierda.=L', 'Siga em frente e vire à esquerda.'],
  rule: 'direcciones',
  hw: 'Escreva como chegar da sua casa até a padaria, o ponto de ônibus ou o trabalho, em cinco passos, com o imperativo (sigue, dobla, cruza…).',
  deep: `
Hoje você aprende a pedir e a dar direções. Para isso, precisa do **imperativo**: siga, vire, atravesse.
# Passo 1: pedir direções
| Em espanhol | Em português |
| ¿Cómo llego a …? | Como chego a …? |
| ¿Para ir a …? | Para ir a …? |
| Estoy perdido / perdida. | Estou perdido / perdida. |
~ ¿Cómo llego al museo? = Como chego ao museu?
~ Estoy perdida. ¿Me ayuda? = Estou perdida. Pode me ajudar?
# Passo 2: o imperativo, tú e usted
@ M:Imperativo;Verbo|Tú|Usted;seguir|sigue|siga;doblar|dobla|doble;cruzar|cruza|cruce;tomar|toma|tome
~ Sigue todo recto y dobla a la izquierda. = Siga em frente e vire à esquerda.
~ Cruce la avenida y tome la primera calle. = Atravesse a avenida e pegue a primeira rua.
BR Com **usted**, a vogal "troca": -ar vira -e (doble, cruce) e -er/-ir vira -a (siga). É o mesmo jeito do nosso "siga", "vire".
# Passo 3: o caminho em ordem
@ P:Um caminho;1=Siga todo recto;2=hasta el semáforo;3=doble a la derecha;4=está al final de la calle
~ Tome la segunda calle a la izquierda. = Pegue a segunda rua à esquerda.
~ Está al final de la calle. = Fica no fim da rua.
# Passo 4: ojo, brasileño: doblar, tomar, derecho
| Em espanhol | Em português |
| doblar | virar (dobrar a esquina) |
| tomar la calle | pegar a rua |
| derecho / recto | em frente |
| a la derecha | à direita |
~ Cruza el puente y sigue derecho. = Atravesse a ponte e siga em frente.
! **derecho** (em frente) e **derecha** (direita) são diferentes: sigue **derecho** = siga em frente; dobla a la **derecha** = vire à direita.
> Treine agora: explique em três passos como ir do seu quarto até a porta da rua.
? "Siga em frente" (tú): || Sigue todo recto.
? "Vire à direita" (usted): || Doble a la derecha.
? "Como chego à estação?": || ¿Cómo llego a la estación?
`,
});

NL('es-transporte', {
  de: 'En autobús o en metro', pt: 'Os meios de transporte', gt: 'ir en + transporte · a pie · tomar el autobús · ¿cuánto se tarda?',
  gx: 'Para dizer como você vai: ir en + transporte (en autobús, en metro, en taxi, en bicicleta), mas a pie (a pé). Para pegar um transporte: tomar el autobús, el metro. Para perguntar o tempo: ¿Cuánto se tarda? / ¿Cuánto tiempo toma? O ônibus muda de nome: autobús, bus, colectivo (Argentina), camión (México), micro (Chile).',
  ge: 'Voy al trabajo en metro.=Vou para o trabalho de metrô.|Tomo el autobús en la esquina.=Pego o ônibus na esquina.|Voy a pie, está cerca.=Vou a pé, é perto.',
  v: 'autobús=ônibus=🚌|metro=metrô=🚇|taxi=táxi=🚕|bicicleta=bicicleta=🚲|a pie=a pé=🚶|tren=trem=🚆|avión=avião=✈️|tomar=pegar (transporte)=👉|boleto=passagem, bilhete=🎫|parada=ponto, parada=🚏',
  x: 'colectivo=ônibus (Argentina)|camión=ônibus (México)|micro=ônibus (Chile)|carro=carro|moto=moto|ida y vuelta=ida e volta|tarjeta=cartão|bajar=descer|subir=subir, embarcar|tarda=demora',
  dlg: '¿Cómo vas a la universidad?=Como você vai para a universidade?|En autobús. Lo tomo en la parada de la esquina.=De ônibus. Pego no ponto da esquina.|¿Cuánto se tarda?=Quanto tempo demora?|Unos veinte minutos, si no hay tráfico.=Uns vinte minutos, se não tem trânsito.',
  cz: 'Voy al trabajo ___ metro. (de)=en=de=por|Voy ___ pie. (a pé)=a=en=de|___ el autobús en la esquina. (pego)=Tomo=Pego=Cojo',
  whys: 'com transporte: en|a pé: a pie|pegar um transporte: tomar',
  pts: 'ir en + transporte: en autobús, en metro, en taxi, en tren, en avión, en bicicleta. A exceção: a pie (a pé) e a caballo.|tomar = pegar um transporte: Tomo el metro. Subir al autobús (embarcar), bajar del autobús (descer).|Perguntas: ¿Cuánto se tarda? (quanto tempo leva?) ¿Dónde está la parada? ¿Cuánto cuesta el boleto?|Atenção, na Espanha "coger el autobús" é comum, mas em vários países da América Latina coger é palavra vulgar. Use sempre tomar.',
  ex: '¿Dónde está la parada del autobús?=Onde fica o ponto de ônibus?|Me bajo en la próxima.=Desço na próxima.|Un boleto de ida y vuelta, por favor.=Uma passagem de ida e volta, por favor.|En Buenos Aires tomo el colectivo.=Em Buenos Aires pego o ônibus.',
  bd: ['Voy=V^ir, forma de yo|al_trabajo=L^a + el = al|en_metro.=C^en + transporte', 'Vou para o trabalho de metrô.'],
  rule: 'transporte',
  hw: 'Escreva como você vai para o trabalho, a escola ou o mercado: o transporte, onde pega, quanto tempo leva e onde desce.',
  deep: `
Hoje você aprende a falar de transporte: como vai, onde pega o ônibus e quanto tempo leva.
# Passo 1: ir en + transporte
@ F:Como você vai;ir^v|en + transporte^p;Voy|en autobús.;Voy|en metro.;Voy|a pie.
~ Voy al trabajo en metro. = Vou para o trabalho de metrô.
~ Voy a pie, está cerca. = Vou a pé, é perto.
BR Em português dizemos "**de** ônibus". Em espanhol, é **en** autobús. A exceção é **a pie** (a pé).
# Passo 2: tomar, subir, bajar
| Em espanhol | Em português |
| tomar el autobús | pegar o ônibus |
| subir al metro | entrar no metrô |
| bajar del taxi | descer do táxi |
~ Tomo el autobús en la esquina. = Pego o ônibus na esquina.
~ Me bajo en la próxima. = Desço na próxima.
# Passo 3: perguntas de viagem
| Pergunta | Em português |
| ¿Cuánto se tarda? | Quanto tempo leva? |
| ¿Dónde está la parada? | Onde fica o ponto? |
| ¿Cuánto cuesta el boleto? | Quanto custa a passagem? |
~ ¿Dónde está la parada del autobús? = Onde fica o ponto de ônibus?
~ Un boleto de ida y vuelta, por favor. = Uma passagem de ida e volta, por favor.
# Passo 4: ojo, brasileño: o ônibus muda de nome
| País | Ônibus |
| México | camión |
| Argentina | colectivo |
| Chile | micro |
| Colômbia, Peru | bus |
~ En Buenos Aires tomo el colectivo. = Em Buenos Aires pego o ônibus.
! Use sempre **tomar** para transporte. Na Espanha se diz "coger el autobús", mas em vários países latino-americanos **coger** é palavrão.
> Treine agora: diga como você vai para o trabalho e quanto tempo leva.
? "De ônibus": || en autobús
? "Pegar o metrô": || tomar el metro
? Como se diz ônibus na Argentina? || colectivo
`,
});

NL('es-puedo', {
  de: '¿Puedo pagar con tarjeta?', pt: 'Pedir permissão e falar de possibilidades', gt: 'poder + infinitivo · ¿se puede …? · no se puede',
  gx: 'poder + infinitivo serve para pedir permissão (¿Puedo entrar? = posso entrar?), pedir favores (¿Puedes ayudarme? = você pode me ajudar?) e falar de possibilidade. Para regras gerais, use se puede / no se puede: Aquí no se puede fumar (aqui não se pode fumar).',
  ge: '¿Puedo pagar con tarjeta?=Posso pagar com cartão?|¿Puede ayudarme, por favor?=O senhor pode me ajudar, por favor?|Aquí no se puede fumar.=Aqui não se pode fumar.',
  v: 'poder=poder=💪|¿puedo …?=posso …?=🙋|¿puedes …?=você pode …?=🙏|se puede=pode-se, é permitido=✅|no se puede=não se pode=🚫|pagar=pagar=💳|entrar=entrar=🚪|sacar fotos=tirar fotos=📷|estacionar=estacionar=🅿️|fumar=fumar=🚬',
  x: 'ayudarme=me ajudar|abrir=abrir|cerrar=fechar|usar=usar|baño=banheiro|wifi=wi-fi|contraseña=senha|claro=claro|por supuesto=claro, com certeza|lo siento=sinto muito',
  dlg: 'Disculpe, ¿se puede sacar fotos aquí?=Com licença, pode tirar fotos aqui?|Sí, pero sin flash.=Sim, mas sem flash.|¿Y puedo usar el baño?=E posso usar o banheiro?|Claro, está al fondo a la izquierda.=Claro, fica no fundo à esquerda.',
  cz: '¿___ pagar con tarjeta? (posso)=Puedo=Podo=Puede yo|¿___ ayudarme? (você pode, tú)=Puedes=Podes=Pode|Aquí no se ___ fumar.=puede=pode=pueden',
  whys: 'poder com yo: puedo (o → ue)|poder com tú: puedes|regra geral: se puede',
  pts: 'poder + infinitivo: ¿Puedo entrar? (permissão), ¿Puedes ayudarme? (favor), No puedo ir (possibilidade). Lembre: o → ue (puedo, puedes, puede, podemos, pueden).|Regras gerais e impessoais: se puede / no se puede + infinitivo: ¿Se puede estacionar aquí? No se puede fumar.|Responder: Sí, claro. / Por supuesto. / Lo siento, no se puede.|Com usted (mais educado): ¿Puede ayudarme? ¿Me puede decir …?',
  ex: '¿Me puede decir la contraseña del wifi?=O senhor pode me dizer a senha do wi-fi?|Lo siento, no se puede estacionar aquí.=Sinto muito, não se pode estacionar aqui.|No puedo ir hoy.=Não posso ir hoje.|¿Podemos entrar?=Podemos entrar?',
  bd: ['¿Puedo=V^poder: o → ue, forma de yo|pagar=V^infinitivo|con_tarjeta?=C', 'Posso pagar com cartão?'],
  rule: 'poder',
  hw: 'Escreva seis perguntas pedindo permissão ou favores numa viagem (¿Puedo …? ¿Se puede …? ¿Me puede …?) e três regras de um lugar com no se puede.',
  deep: `
Hoje você aprende a pedir permissão e favores com **poder**, e a entender as regras de um lugar com **se puede**.
# Passo 1: poder + infinitivo
@ F:Pedir com poder;¿Poder^v|+ infinitivo^p;¿Puedo|pagar con tarjeta?;¿Puedes|ayudarme?;¿Podemos|entrar?
~ ¿Puedo pagar con tarjeta? = Posso pagar com cartão?
~ ¿Podemos entrar? = Podemos entrar?
! Lembre do o → ue: **puedo**, **puedes**, **puede** (mas **podemos**).
# Passo 2: pedir favores com educação
| Informal (tú) | Formal (usted) |
| ¿Puedes ayudarme? | ¿Puede ayudarme? |
| ¿Me puedes decir …? | ¿Me puede decir …? |
~ ¿Puede ayudarme, por favor? = O senhor pode me ajudar, por favor?
~ ¿Me puede decir la contraseña del wifi? = O senhor pode me dizer a senha do wi-fi?
# Passo 3: se puede, as regras
@ V:Permitido ou proibido?;Se puede|¿Se puede sacar fotos?;No se puede|Aquí no se puede fumar.
~ Aquí no se puede fumar. = Aqui não se pode fumar.
~ Lo siento, no se puede estacionar aquí. = Sinto muito, não se pode estacionar aqui.
# Passo 4: ojo, brasileño: "posso" e "podo"
| Português | Espanhol |
| posso | puedo |
| pode (você) | puedes / puede |
| podemos | podemos |
~ No puedo ir hoy. = Não posso ir hoje.
! "**Podo**" e "**posso**" não existem em espanhol. É **puedo**, com o → ue.
> Treine agora: peça permissão para tirar uma foto e para usar o banheiro.
? "Posso pagar com cartão?": || ¿Puedo pagar con tarjeta?
? "Aqui não se pode fumar": || Aquí no se puede fumar.
? "Eu posso" em espanhol: || puedo
`,
});

NL('es-carteles', {
  de: 'Carteles y avisos', pt: 'Ler placas e avisos', gt: 'prohibido, salida, empuje, abierto, no se permite',
  gx: 'Na rua e nos prédios, os avisos usam palavras curtas: Salida (saída), Entrada, Empuje / Jale (empurre / puxe), Abierto / Cerrado, Prohibido fumar, No se permite …, Baños, Caja. Muitos usam o imperativo de usted (Empuje, No toque) ou o infinitivo (No fumar).',
  ge: 'Prohibido fumar.=Proibido fumar.|Empuje la puerta.=Empurre a porta.|La tienda está cerrada los domingos.=A loja fica fechada aos domingos.',
  v: 'salida=saída=🚪|entrada=entrada=➡️|empuje=empurre=👐|jale, tire=puxe=🫳|abierto=aberto=🟢|cerrado=fechado=🔴|prohibido=proibido=🚫|aviso=aviso=⚠️|horario=horário=🕘|baños=banheiros=🚻',
  x: 'no tocar=não tocar|silencio=silêncio|peligro=perigo|ascensor=elevador|escalera=escada|planta baja=térreo|piso=andar|cuidado=cuidado|fuera de servicio=fora de serviço|se alquila=aluga-se',
  dlg: '¿Por dónde se sale?=Por onde se sai?|Por allí, donde dice "Salida".=Por ali, onde diz "Saída".|¿Y el ascensor funciona?=E o elevador funciona?|No, el cartel dice "Fuera de servicio". Hay que usar la escalera.=Não, a placa diz "Fora de serviço". Tem que usar a escada.',
  cz: '___ fumar. (proibido)=Prohibido=Proibido=Prohibida|___ la puerta. (empurre)=Empuje=Empurre=Puxe|La tienda está ___ los domingos. (fechada)=cerrada=fechada=cerrado',
  whys: 'proibido: prohibido, com h|empurre: empuje|tienda é feminino: cerrada',
  pts: 'Avisos com imperativo de usted: Empuje (empurre), Jale / Tire (puxe), No toque (não toque), Espere (espere), Cuidado.|Com infinitivo: No fumar, No estacionar, No tocar. Ou com prohibido / no se permite: Prohibido el paso (proibida a passagem).|Estados: Abierto / Cerrado, Libre / Ocupado, Fuera de servicio (fora de serviço).|Lugares: Salida, Entrada, Baños, Caja, Ascensor, Escalera, Planta baja (térreo).',
  ex: 'Fuera de servicio.=Fora de serviço.|Se alquila departamento.=Aluga-se apartamento.|No se permite el ingreso de mascotas.=Não é permitida a entrada de animais.|Horario: de lunes a sábado, de 9 a 18 h.=Horário: de segunda a sábado, das 9 às 18 h.',
  bd: ['Prohibido=C^proibido, com h|fumar.=V^infinitivo', 'Proibido fumar.'],
  rule: 'carteles',
  le: {
    texto: {
      t: 'Avisos en el edificio', kind: 'avisos', voz: 'b',
      intro: 'Avisos colados na entrada de um prédio de escritórios em Lima. Leia e responda.',
      paras: ['ENTRADA PRINCIPAL. Horario de atención: de lunes a viernes, de 8:00 a 19:00. Sábados: de 9:00 a 13:00.', 'ASCENSOR FUERA DE SERVICIO. Por favor, use la escalera. Disculpe las molestias.', 'PROHIBIDO FUMAR en todo el edificio.', 'No se permite el ingreso de mascotas.', 'BAÑOS: segundo piso, al final del pasillo, a la derecha.', 'SALIDA DE EMERGENCIA: planta baja, detrás de la recepción.'],
      qs: [
        { q: 'Quando o prédio abre aos sábados?', o: ['das 9h às 13h', 'das 8h às 19h', 'não abre'], a: 0 },
        { q: 'Por que é preciso usar a escada?', o: ['o elevador está fora de serviço', 'o elevador é só para funcionários', 'é mais rápido'], a: 0 },
        { q: 'Onde ficam os banheiros?', o: ['no segundo andar, no fim do corredor, à direita', 'no térreo, atrás da recepção', 'no primeiro andar, à esquerda'], a: 0 },
        { q: 'Pode entrar com o cachorro?', o: ['não, animais não são permitidos', 'sim, sempre', 'só aos sábados'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva os avisos', tipo: 'form', ok: 'Avisos escritos corretamente.',
      pede: 'Você organiza um evento num salão. Escreva os avisos que vão nas paredes, em espanhol.',
      campos: [
        { l: 'Horário', d: 'Horario: …', re: '\\b(horario|de \\d|abierto)\\b', f: 'iu', err: 'Escreva o horário: Horario: de 10 a 18 h.' },
        { l: 'Proibição', d: 'Prohibido … / No se permite …', re: '\\b(prohibido|no se permite|no se puede|no fumar|no tocar)\\b', f: 'iu', err: 'Escreva uma proibição: Prohibido fumar.', bad: [['\\bproibido\\b', 'Em espanhol, com h: <b>prohibido</b>.']] },
        { l: 'Porta', d: 'Empuje / Jale', re: '\\b(empuje|jale|tire|empujar|jalar)\\b', f: 'iu', err: 'Escreva o aviso da porta: Empuje.', bad: [['\\b(empurre|puxe)\\b', 'Em espanhol: <b>Empuje</b> (empurre) / <b>Jale</b> (puxe).']] },
        { l: 'Banheiros', d: 'Baños: …', re: '\\bbaños?\\b', f: 'iu', err: 'Indique os banheiros: Baños: al fondo a la izquierda.', bad: [['\\bbanheiros?\\b', 'Em espanhol: <b>Baños</b>.']] },
        { l: 'Saída', d: 'Salida …', re: '\\bsalida\\b', f: 'iu', err: 'Indique a saída: Salida de emergencia.', bad: [['\\bsaída\\b', 'Em espanhol: <b>Salida</b>.']] },
        { l: 'Algo fora de serviço', d: '… fuera de servicio', re: '\\bfuera de servicio\\b|\\bcerrado\\b', f: 'iu', err: 'Avise algo que não funciona: Ascensor fuera de servicio.' },
      ],
      modelo: 'Horario: de 10 a 18 h. · Prohibido fumar. · Empuje. · Baños: al fondo a la izquierda. · Salida de emergencia. · Ascensor fuera de servicio.',
    },
  },
  hw: 'Fotografe (ou lembre) cinco placas da sua cidade e escreva como elas seriam em espanhol.',
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo da cidade. Você vai ler os avisos de um prédio em Lima e escrever os seus, usando hay, está, o imperativo e se puede.
# Passo 1: avisos de lugar
| Em espanhol | Em português |
| Entrada / Salida | Entrada / Saída |
| Baños | Banheiros |
| Caja | Caixa |
| Planta baja | Térreo |
~ Salida de emergencia. = Saída de emergência.
~ Los baños están en el segundo piso. = Os banheiros ficam no segundo andar.
# Passo 2: proibições
@ P:Três jeitos de proibir;Prohibido=Prohibido fumar.;No se permite=No se permite el ingreso de mascotas.;No + infinitivo=No tocar.
~ Prohibido fumar. = Proibido fumar.
~ No se permite el ingreso de mascotas. = Não é permitida a entrada de animais.
BR **prohibido** tem **h** no meio, que não se pronuncia: "proibido".
# Passo 3: portas e estados
| Aviso | Significa |
| Empuje | Empurre |
| Jale / Tire | Puxe |
| Abierto / Cerrado | Aberto / Fechado |
| Fuera de servicio | Fora de serviço |
~ Empuje la puerta. = Empurre a porta.
~ La tienda está cerrada los domingos. = A loja fica fechada aos domingos.
# Passo 4: ojo, brasileño: empuje e jale
~ Fuera de servicio. = Fora de serviço.
! **Empuje** parece "empurre" (e é!). Mas **jale** (puxe), comum na América Latina, não se parece com nada em português. Na Espanha e em alguns países, puxe é **tire**.
| Pode ver | Quer dizer |
| JALE / TIRE | PUXE |
| EMPUJE | EMPURRE |
> Agora leia os avisos do prédio e escreva os do seu evento.
? "Proibido fumar": || Prohibido fumar.
? O que quer dizer "Jale"? || Puxe.
? "Fora de serviço": || Fuera de servicio.
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('¿Dónde está el banco?',
  'E:Onde fica;El banco^s|está^v|al lado del hotel.^p',
  'P:Preposições;ao lado=al lado de;em frente=enfrente de;perto=cerca de;longe=lejos de;atrás=detrás de');
V('Hay o está',
  'M:Hay ou está?;Com|Use|Exemplo;un, una, número|hay|Hay un cine.;el, la, nome|está|El cine está aquí.',
  'V:O turista pergunta;Primeiro|¿Hay un baño por aquí?;Depois|¿Dónde está el baño?');
V('¿Cómo llego?',
  'M:Imperativo;Verbo|Tú|Usted;seguir|sigue|siga;doblar|dobla|doble;cruzar|cruza|cruce',
  'V:Derecho ou derecha?;derecho|em frente;derecha|direita');
V('En autobús o en metro',
  'F:Como você vai;ir^v|en + transporte^p;Voy|en autobús.;Voy|a pie.',
  'M:O ônibus;País|Nome;México|camión;Argentina|colectivo;Chile|micro');
V('¿Puedo pagar con tarjeta?',
  'F:Pedir com poder;¿Poder^v|+ infinitivo^p;¿Puedo|pagar?;¿Puedes|ayudarme?',
  'V:Regras;Se puede|¿Se puede sacar fotos?;No se puede|Aquí no se puede fumar.');
V('Carteles y avisos',
  'P:Três jeitos de proibir;Prohibido=Prohibido fumar.;No se permite=No se permite …;No + infinitivo=No tocar.',
  'M:A porta;Aviso|Significa;Empuje|Empurre;Jale / Tire|Puxe');
S_('¿Dónde está el banco?', 'banco=banco|está=fica|del=do|hotel=hotel|farmacia=farmácia|plaza=praça|aquí=aqui|disculpe=com licença|supermercado=supermercado|muy cerca=muito perto|a dos cuadras=a dois quarteirões|iglesia=igreja|estación=estação|parque=parque|museo=museu|panadería=padaria|todo recto=em frente|delante de=diante de|y=e|voy=vou');
S_('Hay o está', 'banco=banco|esta calle=esta rua|cajero=caixa eletrônico|uno=um|centro comercial=shopping|cinco minutos=cinco minutos|enfrente de=em frente a|estación=estação|panaderías=padarias|baños=banheiros|al fondo=no fundo|cine=cinema|farmacia=farmácia|plaza=praça|mucha gente=muita gente|tiene=tem|cerca=perto|dónde=onde');
S_('¿Cómo llego?', 'museo=museu|sigue=siga|dobla=vire|izquierda=esquerda|cruce=atravesse|tome=pegue|perdón=desculpe|estación=estação|siga=siga|semáforo=semáforo|después=depois|doble=vire|derecha=direita|final=fim|calle=rua|segunda=segunda|perdida=perdida|me ayuda=pode me ajudar|cruza=atravesse|puente=ponte|derecho=em frente|para ir=para ir|dónde queda=onde fica|gire=vire|toma=pegue|cuarto=quarto|puerta=porta');
S_('En autobús o en metro', 'voy=vou|trabajo=trabalho|tomo=pego|esquina=esquina|cerca=perto|vas=vai|universidad=universidade|lo tomo=pego (ele)|cuánto se tarda=quanto tempo leva|unos veinte minutos=uns vinte minutos|si=se|tráfico=trânsito|parada=ponto|me bajo=desço|próxima=próxima|ida y vuelta=ida e volta|Buenos Aires=Buenos Aires|subir=entrar, subir|bajar=descer|cuánto cuesta=quanto custa|caballo=cavalo|coger=pegar (Espanha)');
S_('¿Puedo pagar con tarjeta?', 'puedo=posso|tarjeta=cartão|puede=pode|ayudarme=me ajudar|aquí=aqui|disculpe=com licença|sacar fotos=tirar fotos|sin flash=sem flash|usar=usar|baño=banheiro|al fondo=no fundo|izquierda=esquerda|me puede decir=pode me dizer|contraseña=senha|wifi=wi-fi|lo siento=sinto muito|estacionar=estacionar|hoy=hoje|podemos=podemos|entrar=entrar|claro=claro|decir=dizer|ir=ir');
S_('Carteles y avisos', 'permite=permite|puerta=porta|tienda=loja|domingos=domingos|por dónde se sale=por onde se sai|por allí=por ali|dice=diz|funciona=funciona|cartel=placa|hay que=tem que|escalera=escada|departamento=apartamento|ingreso=entrada|mascotas=animais de estimação|de lunes a sábado=de segunda a sábado|entrada principal=entrada principal|atención=atendimento|viernes=sexta|use=use|disculpe las molestias=desculpe o incômodo|todo el edificio=todo o prédio|segundo piso=segundo andar|pasillo=corredor|derecha=direita|emergencia=emergência|recepción=recepção|detrás de=atrás de|salón=salão|evento=evento|al fondo=no fundo|izquierda=esquerda|libre=livre|ocupado=ocupado|espere=espere|no toque=não toque|paso=passagem|el paso=a passagem');
['lima', 'buenos', 'aires'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'es-dondeesta': {
    o: 'Onde fica: **estar** + lugar (**El banco está al lado del hotel**), com as preposições **al lado de**, **enfrente de**, **cerca de**, **lejos de**, **detrás de**.',
    q: 'Para perguntar e explicar onde ficam os lugares da cidade.',
    p: 'Em português dizemos "onde **é** o banco?". Em espanhol, a localização é sempre **estar**.',
  },
  'es-hayesta': {
    o: '**hay** + un / una / número = algo existe; **el / la** + **está** = onde fica algo específico.',
    q: 'Na rua, como turista: primeiro se há, depois onde fica.',
    p: 'É uma das confusões mais comuns do brasileiro, e a regra do artigo resolve.',
  },
  'es-llego': {
    o: 'Direções com o imperativo: **sigue**, **dobla**, **cruza** (tú) ou **siga**, **doble**, **cruce** (usted). Para pedir: **¿Cómo llego a …?**',
    q: 'Para pedir e dar direções na rua.',
    p: '**derecho** (em frente) × **derecha** (direita) é a pegadinha das direções.',
  },
  'es-transporte': {
    o: '**ir en** + transporte (en autobús, en metro), **a pie**, **tomar** o ônibus, e o ônibus que muda de nome: **camión**, **colectivo**, **micro**.',
    q: 'Para se locomover numa cidade latino-americana.',
    p: 'Use sempre **tomar**: coger é palavrão em vários países.',
  },
  'es-puedo': {
    o: '**poder** + infinitivo: **¿Puedo pagar con tarjeta?**, **¿Puede ayudarme?** E as regras: **se puede** / **no se puede**.',
    q: 'Para pedir permissão e favores e entender as regras de um lugar.',
    p: 'É o verbo mais útil para quem viaja. E **puedo** (não "podo") vem do o → ue.',
  },
  'es-carteles': {
    o: 'Placas e avisos: **Salida**, **Empuje** / **Jale**, **Prohibido**, **No se permite**, **Fuera de servicio**.',
    q: 'Na rua, em lojas, prédios e transportes.',
    p: 'Placas estão em todo lugar. E **jale** (puxe) não lembra nada do português.',
  },
});
Object.assign(CZH, {
  'es-dondeesta': ['localização', 'em frente a', 'de + el'],
  'es-hayesta': ['existe', 'algo específico', 'existir, com número'],
  'es-llego': ['imperativo, tú', 'imperativo, usted', 'chegar, com yo'],
  'es-transporte': ['com transporte', 'a pé', 'pegar'],
  'es-puedo': ['poder, com yo', 'poder, com tú', 'regra geral'],
  'es-carteles': ['proibido', 'empurre', 'fechada'],
});
Object.assign(OBJ, {
  'es-dondeesta': { o: 'Consigo dizer onde fica um lugar com estar e as preposições.', a: 'Você consegue explicar onde fica a padaria mais perto de casa?', ref: 'Expresión oral · A1' },
  'es-hayesta': { o: 'Uso hay e está corretamente.', a: 'Você sabe quando dizer hay e quando dizer está?', ref: 'Gramática · A1' },
  'es-llego': { o: 'Consigo pedir e dar direções simples.', a: 'Você consegue explicar um caminho com sigue, dobla e cruza?', ref: 'Interacción oral · A1' },
  'es-transporte': { o: 'Consigo falar dos meios de transporte e pegar um ônibus.', a: 'Você consegue dizer como vai para o trabalho e quanto tempo leva?', ref: 'Interacción oral · A1' },
  'es-puedo': { o: 'Consigo pedir permissão e favores com poder.', a: 'Você consegue pedir para pagar com cartão ou usar o banheiro?', ref: 'Interacción oral · A1' },
  'es-carteles': { o: 'Consigo ler placas e escrever avisos simples.', a: 'Você entende as placas mais comuns em espanhol?', ref: 'Comprensión de lectura · A1' },
});
MOD_OBJ[4] = ['Consigo dizer onde ficam os lugares e usar hay e está.', 'Consigo pedir e dar direções.', 'Consigo usar o transporte e pedir permissão.', 'Consigo ler placas e avisos.'];

ES_MODS.push({ lv: 'A1', n: 'A cidade', l: ['es-dondeesta', 'es-hayesta', 'es-llego', 'es-transporte', 'es-puedo', 'es-carteles'] });
