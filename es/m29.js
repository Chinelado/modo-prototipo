// Espanhol · B2 · Módulo 29 · En el trabajo (No trabalho). Formato de es/curso.js.

NL('es-reunion', {
  de: 'En la reunión', pt: 'Participar de uma reunião', gt: 'abrir a pauta, propor (propongo que + subjuntivo), pedir opinião, chegar a um acordo (quedamos en que)',
  gx: 'Numa reunião de trabalho: para abrir (El objetivo de hoy es …, El primer punto del orden del día es …), propor (Propongo que + subjuntivo: Propongo que lancemos la campaña en marzo), pedir opinião (¿Qué opinan?), e fechar acordos: Quedamos en que … (combinamos que …), ¿Estamos de acuerdo?',
  ge: 'El primer punto del orden del día es el presupuesto.=O primeiro ponto da pauta é o orçamento.|Propongo que lancemos la campaña en marzo.=Proponho que lancemos a campanha em março.|Entonces quedamos en que Ana prepara el informe.=Então combinamos que a Ana prepara o relatório.',
  v: 'reunión=reunião=👥|orden del día=pauta=📋|punto=ponto, item=📌|proponer=propor=💡|propuesta=proposta=📝|quedar en=combinar=🤝|ponerse de acuerdo=entrar em acordo=✅|plazo=prazo=📅|responsable=responsável=👤|siguiente paso=próximo passo=➡️',
  x: 'presupuesto=orçamento|campaña=campanha|lanzamiento=lançamento|cliente=cliente|equipo=equipe|objetivo=objetivo|prioridad=prioridade|calendario=cronograma|votar=votar|aprobar=aprovar',
  dlg: 'Bueno, empecemos. El primer punto es el lanzamiento.=Bom, vamos começar. O primeiro ponto é o lançamento.|Propongo que lo hagamos en marzo, después de las vacaciones.=Proponho que o façamos em março, depois das férias.|Me parece bien. ¿Qué opinan los demás?=Acho bom. O que os outros acham?|De acuerdo. Entonces quedamos en marzo.=De acordo. Então combinamos março.',
  cz: 'Propongo que ___ la campaña en marzo. (lanzar, nosotros)=lancemos=lanzamos=lanzaremos|Quedamos ___ que Ana prepara el informe.=en=de=con|El primer punto del ___ del día es el presupuesto.=orden=ordem=orde',
  whys: 'propongo que + subjuntivo|quedar en: combinar|orden del día: pauta',
  pts: 'Abrir: Empecemos. / El objetivo de hoy es … / El primer punto del orden del día es …|Propor: Propongo que + subjuntivo (propongo que lancemos …) / Sugiero + infinitivo / ¿Qué tal si + presente …?|Pedir e dar opinião: ¿Qué opinan? / ¿Alguien quiere añadir algo? / A mí me parece que … / Estoy de acuerdo con …|Fechar: Entonces quedamos en que … / ¿Estamos de acuerdo? / El siguiente paso es … / ¿Quién se encarga de …?',
  ex: '¿Quién se encarga de hablar con el cliente?=Quem fica responsável por falar com o cliente?|¿Alguien quiere añadir algo?=Alguém quer acrescentar alguma coisa?|El siguiente paso es aprobar el presupuesto.=O próximo passo é aprovar o orçamento.|¿Qué tal si lo dejamos para la próxima reunión?=Que tal se deixarmos isso para a próxima reunião?',
  bd: ['Propongo_que=V^proposta: pede subjuntivo|lancemos=V^subjuntivo de lanzar: z → c|la_campaña_en_marzo.=OA', 'Proponho que lancemos a campanha em março.'],
  rule: 'reunion',
  hw: 'Escreva o roteiro de uma reunião curta (dez falas) para organizar um evento: abertura, duas propostas com propongo que, opiniões e o acordo final com quedamos en que.',
  deep: `
Hoje começa o módulo do **trabalho**. Você aprende as frases para conduzir e participar de uma **reunião**.
# Passo 1: abrir
@ P:A reunião;Abrir=Empecemos. El objetivo de hoy es …;Pauta=El primer punto del orden del día es …;Propor=Propongo que …;Fechar=Quedamos en que …
~ El primer punto del orden del día es el presupuesto. = O primeiro ponto da pauta é o orçamento.
# Passo 2: propor
| Em espanhol | Depois vem |
| Propongo que | subjuntivo: lancemos |
| Sugiero | infinitivo: sugiero esperar |
| ¿Qué tal si …? | presente: ¿qué tal si esperamos? |
~ Propongo que lancemos la campaña en marzo. = Proponho que lancemos a campanha em março.
~ ¿Qué tal si lo dejamos para la próxima reunión? = Que tal se deixarmos isso para a próxima reunião?
# Passo 3: opiniões
~ ¿Alguien quiere añadir algo? = Alguém quer acrescentar alguma coisa?
@ V:Opinar;Pedir|¿Qué opinan?;Dar|A mí me parece que …
BR **Orden del día** é a "pauta" da reunião. **La agenda** em espanhol é mais a agenda de compromissos.
# Passo 4: fechar acordos
| Em espanhol | Em português |
| Quedamos en que … | Combinamos que … |
| ¿Quién se encarga de …? | Quem fica responsável por …? |
| El siguiente paso es … | O próximo passo é … |
~ Entonces quedamos en que Ana prepara el informe. = Então combinamos que a Ana prepara o relatório.
~ ¿Quién se encarga de hablar con el cliente? = Quem fica responsável por falar com o cliente?
! **Quedar en** = combinar algo: quedamos **en** que … / quedamos **en** vernos el lunes. Sem o **en**, quedar é "ficar".
> Treine agora: proponha uma data para um evento e feche o acordo com quedamos en.
? "Proponho que lancemos": || Propongo que lancemos …
? "Combinamos que": || Quedamos en que …
? "Pauta": || orden del día
`,
});

NL('es-negociar', {
  de: 'Estaríamos dispuestos a …', pt: 'Negociar', gt: 'estaríamos dispuestos a … siempre que + subjuntivo · ¿qué les parece si …? · a cambio de · cerrar el trato',
  gx: 'Para negociar com educação e firmeza: o condicional suaviza (Estaríamos dispuestos a bajar el precio …), a condição usa siempre que / con tal de que + subjuntivo (… siempre que firmen por dos años), a contraproposta usa ¿Qué les parece si …? e a troca usa a cambio de (em troca de). Para fechar: Trato hecho (negócio fechado).',
  ge: 'Estaríamos dispuestos a bajar el precio un diez por ciento.=Estaríamos dispostos a baixar o preço em dez por cento.|Siempre que firmen un contrato por dos años.=Desde que assinem um contrato de dois anos.|¿Qué les parece si lo dejamos en un ocho por ciento?=O que acham de deixarmos em oito por cento?',
  v: 'negociar=negociar=🤝|estar dispuesto a=estar disposto a=✅|siempre que=desde que=🔒|con tal de que=contanto que=🔐|a cambio de=em troca de=🔄|contrapropuesta=contraproposta=↩️|ceder=ceder=⚖️|descuento=desconto=🏷️|condiciones=condições=📄|trato hecho=negócio fechado=🤝',
  x: 'precio=preço|plazo de pago=prazo de pagamento|entrega=entrega|volumen=volume|garantía=garantia|exclusividad=exclusividade|firmar=assinar|contrato=contrato|proveedor=fornecedor|margen=margem',
  dlg: 'Nuestro precio es de cien dólares por unidad.=O nosso preço é de cem dólares por unidade.|Es un poco alto. ¿Estarían dispuestos a hacer un descuento?=É um pouco alto. Estariam dispostos a dar um desconto?|Podríamos bajar un cinco por ciento, siempre que paguen en treinta días.=Poderíamos baixar cinco por cento, desde que paguem em trinta dias.|¿Y si el pedido es el doble? · Entonces, un ocho por ciento. · Trato hecho.=E se o pedido for o dobro? · Então, oito por cento. · Negócio fechado.',
  cz: '___ dispuestos a bajar el precio. (estaríamos)=Estaríamos=Estamos de=Estaremos a|Siempre que ___ un contrato por dos años. (firmar, ustedes)=firmen=firman=firmarán|Les damos un descuento a ___ de exclusividad.=cambio=troca=cambios',
  whys: 'condicional suaviza: estaríamos|siempre que + subjuntivo|em troca de: a cambio de',
  pts: 'Suavizar com o condicional: Estaríamos dispuestos a … / Podríamos … / Nos interesaría …|Pôr condições: siempre que / con tal de que / a condición de que + subjuntivo: siempre que paguen en treinta días.|Contraproposta: ¿Qué les parece si …? / ¿Y si …? / Lo que podemos ofrecer es … / a cambio de …|Recusar com educação e fechar: Lo siento, pero no podemos bajar más. / Me temo que no es posible. / Trato hecho. / Cerramos el trato.',
  ex: 'Les damos un descuento a cambio de exclusividad.=Damos um desconto em troca de exclusividade.|Me temo que no podemos bajar más.=Receio que não possamos baixar mais.|Con tal de que la entrega sea en marzo, aceptamos.=Contanto que a entrega seja em março, aceitamos.|Entonces, cerramos el trato.=Então, fechamos o negócio.',
  bd: ['Podríamos_bajar_un_cinco_por_ciento,=V^condicional: suaviza|siempre_que=C^condição: pede subjuntivo|paguen_en_treinta_días.=V', 'Poderíamos baixar cinco por cento, desde que paguem em trinta dias.'],
  rule: 'negociar',
  hw: 'Escreva uma negociação curta (dez falas) entre um fornecedor e um cliente, com condicional, duas condições com siempre que / con tal de que, uma contraproposta e o fecho.',
  deep: `
Hoje você aprende a **negociar** em espanhol: suavizar, pôr condições, contrapropor e fechar.
# Passo 1: suavizar com o condicional
@ V:Direto ou negociável?;Direto|Bajamos el precio.;Negociável|Estaríamos dispuestos a bajar el precio.
~ Estaríamos dispuestos a bajar el precio un diez por ciento. = Estaríamos dispostos a baixar o preço em dez por cento.
BR O condicional abre espaço: **podríamos**, **estaríamos dispuestos**, **nos interesaría**. Soa firme, mas aberto.
# Passo 2: as condições
| Em espanhol | Em português | Depois vem |
| siempre que | desde que | subjuntivo |
| con tal de que | contanto que | subjuntivo |
| a condición de que | com a condição de que | subjuntivo |
~ Siempre que firmen un contrato por dos años. = Desde que assinem um contrato de dois anos.
~ Con tal de que la entrega sea en marzo, aceptamos. = Contanto que a entrega seja em março, aceitamos.
# Passo 3: a contraproposta
@ P:Contrapropor;Pergunta=¿Qué les parece si …?;Hipótese=¿Y si …?;Troca=… a cambio de …
~ ¿Qué les parece si lo dejamos en un ocho por ciento? = O que acham de deixarmos em oito por cento?
~ Les damos un descuento a cambio de exclusividad. = Damos um desconto em troca de exclusividade.
# Passo 4: recusar e fechar
| Recusar | Fechar |
| Me temo que no es posible. | Trato hecho. |
| No podemos bajar más. | Cerramos el trato. |
~ Me temo que no podemos bajar más. = Receio que não possamos baixar mais.
~ Entonces, cerramos el trato. = Então, fechamos o negócio.
! **Siempre que** com subjuntivo é "desde que" (condição); com indicativo é "sempre que" (toda vez): siempre que **viene**, trae flores.
> Treine agora: negocie o preço de um aluguel com uma condição e uma contraproposta.
? "Estaríamos dispostos a": || Estaríamos dispuestos a …
? "Desde que paguem em trinta dias": || siempre que paguen en treinta días
? "Negócio fechado": || Trato hecho.
`,
});

NL('es-correotrabajo', {
  de: 'Un correo de trabajo', pt: 'O e-mail de trabalho semiformal', gt: 'Hola, equipo / Te escribo para / Te adjunto / ¿Podrías …? / Quedo atenta / Un saludo',
  gx: 'Entre colegas, o e-mail de trabalho é mais leve que a carta formal, mas organizado: Hola, Pablo: / Hola, equipo: · Te escribo para … · Te adjunto el informe (te envio em anexo) · ¿Podrías enviarme los datos antes del viernes? · Quedo atenta / Quedo pendiente (fico no aguardo) · Un saludo / Saludos.',
  ge: 'Hola, equipo: les escribo para recordarles la reunión del lunes.=Olá, equipe: escrevo para lembrar vocês da reunião de segunda.|Te adjunto el informe con los datos de marzo.=Te envio em anexo o relatório com os dados de março.|¿Podrías enviarme tus comentarios antes del viernes?=Você poderia me enviar os seus comentários antes de sexta?',
  v: 'correo=e-mail=📧|asunto=assunto=🏷️|te escribo para=te escrevo para=✍️|te adjunto=te envio em anexo=📎|podrías=você poderia=🙏|antes del=antes de=📅|quedo atenta=fico no aguardo=⏳|quedo pendiente=fico no aguardo=📬|un saludo=um abraço, abraços=👋|con copia a=com cópia para=📨',
  x: 'recordatorio=lembrete|seguimiento=acompanhamento|confirmar=confirmar|revisar=revisar|comentarios=comentários|archivo=arquivo|enlace=link|plazo=prazo|urgente=urgente|equipo=equipe',
  dlg: '¿Ya le escribiste a Pablo por lo del informe?=Você já escreveu para o Pablo sobre o relatório?|Sí: "Hola, Pablo: te adjunto el borrador. ¿Podrías revisarlo antes del jueves?"=Sim: "Olá, Pablo: te envio em anexo o rascunho. Você poderia revisá-lo antes de quinta?"|¿Y cómo lo cerraste?=E como você fechou?|"Quedo atenta a tus comentarios. Un saludo."=Fico no aguardo dos seus comentários. Abraços.',
  cz: 'Te ___ el informe. (envio em anexo)=adjunto=anexo=adjunta|¿___ enviarme tus comentarios? (você poderia)=Podrías=Pudieras de=Podrás|Quedo ___ a tus comentarios. (no aguardo)=atenta=atento de=atendida',
  whys: 'anexar: adjuntar|pedido educado: podrías|quedo atenta (eu, mulher)',
  pts: 'Assunto claro: Asunto: Informe de marzo · Recordatorio: reunión del lunes.|Abertura: Hola, Pablo: / Hola, equipo: / Buenos días a todos: · Te escribo para … / Les escribo para …|Pedido e anexo: Te adjunto … / ¿Podrías …? / Te agradecería que … / ¿Me confirmas …? / antes del viernes.|Fecho: Quedo atento / atenta (a tus comentarios). Quedo pendiente. Cualquier duda, me dices. Un saludo / Saludos / Gracias de antemano.',
  ex: 'Asunto: Recordatorio de la reunión del lunes.=Assunto: Lembrete da reunião de segunda.|¿Me confirmas si puedes asistir?=Você me confirma se pode participar?|Cualquier duda, me dices.=Qualquer dúvida, me fala.|Gracias de antemano.=Obrigada desde já.',
  bd: ['¿Podrías=V^condicional: pedido educado|enviarme_tus_comentarios=V|antes_del_viernes?=T', 'Você poderia me enviar os seus comentários antes de sexta?'],
  rule: 'correo_trabajo',
  hw: 'Escreva três e-mails curtos de trabalho: um lembrete de reunião para a equipe, um envio de relatório pedindo revisão com prazo e uma resposta confirmando presença.',
  deep: `
Hoje você aprende o **e-mail de trabalho** do dia a dia: mais leve que a carta formal, mas claro e organizado.
# Passo 1: assunto e abertura
@ P:O e-mail;Assunto=Asunto: Informe de marzo;Abertura=Hola, Pablo: / Hola, equipo:;Motivo=Te escribo para …;Pedido=¿Podrías …?;Fecho=Quedo atenta. Un saludo.
~ Hola, equipo: les escribo para recordarles la reunión del lunes. = Olá, equipe: escrevo para lembrar vocês da reunião de segunda.
~ Asunto: Recordatorio de la reunión del lunes. = Assunto: Lembrete da reunião de segunda.
# Passo 2: anexar e pedir
| Em espanhol | Em português |
| Te adjunto … | Te envio em anexo … |
| ¿Podrías …? | Você poderia …? |
| ¿Me confirmas …? | Você me confirma …? |
~ Te adjunto el informe con los datos de marzo. = Te envio em anexo o relatório com os dados de março.
~ ¿Podrías enviarme tus comentarios antes del viernes? = Você poderia me enviar os seus comentários antes de sexta?
BR Em espanhol, "**anexar**" no e-mail é **adjuntar**: te **adjunto** el archivo. "Anexo" existe, mas é o documento anexo de um contrato.
# Passo 3: o fecho
@ M:Fechos;Espanhol|Português;Quedo atenta / atento|Fico no aguardo;Cualquier duda, me dices.|Qualquer dúvida, me fala.;Gracias de antemano.|Obrigada desde já.;Un saludo.|Abraços.
~ Cualquier duda, me dices. = Qualquer dúvida, me fala.
~ Gracias de antemano. = Obrigada desde já.
# Passo 4: semiformal × formal
| Semiformal (colegas) | Formal (Módulo 19) |
| Hola, Pablo: | Estimado señor Pérez: |
| Te escribo para … | Le escribo para … |
| Un saludo. | Atentamente. |
~ ¿Me confirmas si puedes asistir? = Você me confirma se pode participar?
! **Quedo atenta** concorda com quem escreve: uma mulher escreve **atenta**, um homem **atento**.
> Treine agora: escreva um e-mail curto pedindo a um colega um documento até quinta.
? "Te envio em anexo": || Te adjunto …
? "Você poderia …?": || ¿Podrías …?
? "Fico no aguardo" (mulher): || Quedo atenta.
`,
});

NL('es-feedback', {
  de: 'Dar feedback', pt: 'Dar e receber feedback', gt: 'lo que funcionó muy bien fue … · quizás podrías … · te sugiero que + subjuntivo · ¿qué te parece si …? · agradezco tus comentarios',
  gx: 'Feedback construtivo começa pelo positivo (Lo que funcionó muy bien fue …), sugere com suavidade (Quizás podrías … / Te sugiero que + subjuntivo / ¿Qué te parece si …?) e termina com apoio (Si necesitas ayuda, avísame). Para receber: Gracias por los comentarios. Lo tendré en cuenta.',
  ge: 'Lo que funcionó muy bien fue la introducción.=O que funcionou muito bem foi a introdução.|Quizás podrías incluir más ejemplos.=Talvez você pudesse incluir mais exemplos.|Te sugiero que revises los datos de la tabla.=Te sugiro que revise os dados da tabela.',
  v: 'feedback=feedback, retorno=💬|comentarios=comentários=🗨️|funcionar=funcionar=✅|mejorar=melhorar=📈|aspecto=aspecto=🔍|sugerir=sugerir=💡|quizás podrías=talvez você pudesse=🌱|tener en cuenta=levar em conta=📝|fortaleza=ponto forte=💪|área de mejora=ponto a melhorar=🛠️',
  x: 'presentación=apresentação|informe=relatório|claridad=clareza|estructura=estrutura|ejemplo=exemplo|ritmo=ritmo|diseño=design|tono=tom|detalle=detalhe|resultado=resultado',
  dlg: '¿Qué te pareció mi presentación?=O que você achou da minha apresentação?|Muy buena. Lo que funcionó muy bien fue la introducción.=Muito boa. O que funcionou muito bem foi a introdução.|¿Y qué podría mejorar?=E o que eu poderia melhorar?|Quizás podrías hablar un poco más despacio. Te sugiero que practiques con cronómetro.=Talvez você pudesse falar um pouco mais devagar. Te sugiro que treine com cronômetro.',
  cz: 'Lo que ___ muy bien fue la introducción. (funcionou)=funcionó=funcionaba=funcione|Te sugiero que ___ los datos. (revisar, tú)=revises=revisas=revisarás|Gracias por los comentarios. Lo ___ en cuenta. (vou levar)=tendré=tengo de=tenga',
  whys: 'fato passado: funcionó|sugerir que + subjuntivo|futuro: lo tendré en cuenta',
  pts: 'Comece pelo positivo: Lo que funcionó muy bien fue … / Me gustó mucho … / Tu fortaleza es …|Sugira com suavidade: Quizás podrías … / ¿Qué te parece si …? / Te sugiero que + subjuntivo / Un aspecto a mejorar sería …|Feche com apoio: En general, muy buen trabajo. / Si necesitas ayuda, avísame.|Receber feedback: Gracias por los comentarios. / Lo tendré en cuenta. / ¿Podrías darme un ejemplo?',
  ex: '¿Qué te parece si agregamos un gráfico?=O que você acha de acrescentarmos um gráfico?|Un aspecto a mejorar sería el ritmo.=Um ponto a melhorar seria o ritmo.|En general, muy buen trabajo.=No geral, muito bom trabalho.|Gracias por los comentarios. Lo tendré en cuenta.=Obrigada pelos comentários. Vou levar em conta.',
  bd: ['Te_sugiero_que=V^sugestão: pede subjuntivo|revises=V^subjuntivo de revisar|los_datos_de_la_tabla.=OA', 'Te sugiro que revise os dados da tabela.'],
  rule: 'feedback',
  hw: 'Dê feedback por escrito (oito frases) sobre uma apresentação ou um texto de um colega: dois pontos fortes, duas sugestões com formas diferentes e um fecho de apoio.',
  deep: `
Hoje você aprende a **dar e receber feedback** com tato: o positivo primeiro, as sugestões com suavidade e o apoio no final.
# Passo 1: o positivo
@ P:Um bom feedback;Positivo=Lo que funcionó muy bien fue …;Sugestão=Quizás podrías …;Apoio=Si necesitas ayuda, avísame.
~ Lo que funcionó muy bien fue la introducción. = O que funcionou muito bem foi a introdução.
# Passo 2: sugerir com suavidade
| Forma | Depois vem |
| Quizás podrías … | infinitivo |
| ¿Qué te parece si …? | presente |
| Te sugiero que … | subjuntivo |
| Un aspecto a mejorar sería … | substantivo |
~ Quizás podrías incluir más ejemplos. = Talvez você pudesse incluir mais exemplos.
~ Te sugiero que revises los datos de la tabla. = Te sugiro que revise os dados da tabela.
BR O condicional (**podrías**, **sería**) faz o trabalho que no português fazem o "talvez" e o "quem sabe". É a chave para soar construtivo.
# Passo 3: fechar com apoio
~ ¿Qué te parece si agregamos un gráfico? = O que você acha de acrescentarmos um gráfico?
~ En general, muy buen trabajo. = No geral, muito bom trabalho.
@ V:Tom;Duro|Esto está mal.;Construtivo|Un aspecto a mejorar sería …
# Passo 4: receber feedback
| Em espanhol | Em português |
| Gracias por los comentarios. | Obrigada pelos comentários. |
| Lo tendré en cuenta. | Vou levar em conta. |
| ¿Podrías darme un ejemplo? | Você poderia me dar um exemplo? |
~ Gracias por los comentarios. Lo tendré en cuenta. = Obrigada pelos comentários. Vou levar em conta.
! "Feedback" se usa muito em espanhol, mas também **comentarios**, **retroalimentación** (formal) e **devolución** (Argentina).
> Treine agora: dê um feedback de três frases sobre a última apresentação a que você assistiu.
? "O que funcionou muito bem foi": || Lo que funcionó muy bien fue …
? "Te sugiro que revise": || Te sugiero que revises …
? "Vou levar em conta": || Lo tendré en cuenta.
`,
});

NL('es-conflicto', {
  de: 'Resolver un conflicto', pt: 'Mediar e resolver conflitos', gt: 'entiendo tu punto de vista · pongámonos en el lugar de … · busquemos una solución · lo importante es que + subjuntivo',
  gx: 'Para resolver um conflito no trabalho: reconheça (Entiendo tu punto de vista / Entiendo que estés molesto), mude o foco para a solução (Busquemos una solución, Pongámonos en el lugar del cliente), estabeleça o essencial (Lo importante es que + subjuntivo) e proponha um acordo (¿Qué te parece si …? / Podríamos …).',
  ge: 'Entiendo que estés molesto con el retraso.=Entendo que você esteja chateado com o atraso.|Busquemos una solución entre todos.=Vamos buscar uma solução entre todos.|Lo importante es que el cliente reciba el pedido a tiempo.=O importante é que o cliente receba o pedido a tempo.',
  v: 'conflicto=conflito=⚡|malentendido=mal-entendido=🔀|punto de vista=ponto de vista=👀|molesto=chateado=😤|calmarse=acalmar-se=😌|ponerse en el lugar de=colocar-se no lugar de=🔄|buscar una solución=buscar uma solução=🧩|lo importante es que=o importante é que=❗|acuerdo=acordo=🤝|culpa=culpa=⚖️',
  x: 'retraso=atraso|error=erro|tensión=tensão|discusión=discussão|responsabilidad=responsabilidade|equipo=equipe|comunicación=comunicação|reproche=reprovação|disculpa=desculpa|compromiso=compromisso',
  dlg: '¡Siempre me toca a mí hacer el trabajo de los demás!=Sempre sobra para mim fazer o trabalho dos outros!|Entiendo que estés cansado. No es justo si es así.=Entendo que você esteja cansado. Não é justo, se for assim.|Pues sí, es así.=Pois é, é assim.|Busquemos una solución. ¿Qué te parece si repartimos las tareas en la reunión del lunes?=Vamos buscar uma solução. O que você acha de dividirmos as tarefas na reunião de segunda?',
  cz: 'Entiendo que ___ molesto. (estar, tú)=estés=estás=estarás|___ una solución entre todos. (vamos buscar)=Busquemos=Buscamos=Buscaremos|Lo importante es que el cliente ___ el pedido. (recibir)=reciba=recibe=recibirá',
  whys: 'entiendo que + subjuntivo (empatia)|nosotros no imperativo: busquemos|lo importante es que + subjuntivo',
  pts: 'Reconhecer: Entiendo tu punto de vista. / Entiendo que estés molesto (subjuntivo: empatia). / Tienes razón en que …|Tirar a culpa do centro: No se trata de buscar culpables. / Fue un malentendido.|Focar na solução (imperativo de nosotros): Busquemos una solución. Pongámonos en el lugar del cliente. Hablemos con calma.|O essencial e o acordo: Lo importante es que + subjuntivo. / ¿Qué te parece si …? / A partir de ahora, …',
  ex: 'No se trata de buscar culpables.=Não se trata de procurar culpados.|Pongámonos en el lugar del cliente.=Vamos nos colocar no lugar do cliente.|Fue un malentendido.=Foi um mal-entendido.|A partir de ahora, revisaremos todo juntos.=A partir de agora, vamos revisar tudo juntos.',
  bd: ['Lo_importante_es_que=V^o essencial: pede subjuntivo|el_cliente_reciba=V^subjuntivo de recibir|el_pedido_a_tiempo.=OA', 'O importante é que o cliente receba o pedido a tempo.'],
  rule: 'conflicto',
  hw: 'Escreva um diálogo (dez falas) em que você media um conflito entre dois colegas, usando reconhecimento, foco na solução, lo importante es que e um acordo final.',
  deep: `
Hoje você aprende a **resolver conflitos**: reconhecer, tirar a culpa do centro e chegar a um acordo.
# Passo 1: reconhecer
@ V:Empatia;Fato (indicativo)|Entiendo que estás molesto.;Empatia (subjuntivo)|Entiendo que estés molesto.
~ Entiendo que estés molesto con el retraso. = Entendo que você esteja chateado com o atraso.
BR **Entiendo que** + subjuntivo mostra compreensão ("entendo que você **esteja**"), não apenas registra o fato.
# Passo 2: tirar a culpa do centro
| Em espanhol | Em português |
| No se trata de buscar culpables. | Não se trata de procurar culpados. |
| Fue un malentendido. | Foi um mal-entendido. |
~ No se trata de buscar culpables. = Não se trata de procurar culpados.
~ Fue un malentendido. = Foi um mal-entendido.
# Passo 3: focar na solução
@ P:Vamos …;Buscar=Busquemos una solución.;Colocar-se=Pongámonos en el lugar de …;Conversar=Hablemos con calma.
~ Busquemos una solución entre todos. = Vamos buscar uma solução entre todos.
~ Pongámonos en el lugar del cliente. = Vamos nos colocar no lugar do cliente.
# Passo 4: o essencial e o acordo
| Em espanhol | Depois vem |
| Lo importante es que | subjuntivo |
| ¿Qué te parece si …? | presente |
| A partir de ahora, … | futuro ou presente |
~ Lo importante es que el cliente reciba el pedido a tiempo. = O importante é que o cliente receba o pedido a tempo.
~ A partir de ahora, revisaremos todo juntos. = A partir de agora, vamos revisar tudo juntos.
! O imperativo de **nosotros** (busquemos, hablemos, pongámonos) é o nosso "**vamos** buscar", "vamos conversar". Com pronome, perde o -s: pongámo**nos** (e não "pongámosnos").
> Treine agora: dois colegas brigaram por causa de um prazo. Medeie com três frases.
? "Entendo que você esteja chateado": || Entiendo que estés molesto.
? "Vamos buscar uma solução": || Busquemos una solución.
? "O importante é que o cliente receba": || Lo importante es que el cliente reciba …
`,
});

NL('es-acta', {
  de: 'El acta de la reunión', pt: 'Ler e escrever uma ata', gt: 'estilo nominal e impessoal, acordos, responsáveis e prazos',
  gx: 'A ata registra uma reunião de forma objetiva: os presentes (Asistentes: …), os temas (Se trató el tema de …), os acordos no impessoal (Se acordó …, Se decidió que …), os responsáveis (Responsable: …) e os prazos (Plazo: …). Junta o estilo nominal do Módulo 26 com a linguagem de reunião deste módulo.',
  ge: 'Se acordó lanzar la campaña el 15 de marzo.=Acordou-se lançar a campanha em 15 de março.|Ana Torres se encargará del informe final.=Ana Torres ficará responsável pelo relatório final.|La próxima reunión será el lunes 10 a las nueve.=A próxima reunião será na segunda, dia 10, às nove.',
  v: 'acta=ata=📄|asistentes=participantes=👥|ausentes=ausentes=🚫|se trató=tratou-se=🗨️|se acordó=acordou-se=🤝|se decidió=decidiu-se=⚖️|responsable=responsável=👤|plazo=prazo=📅|pendiente=pendente=📌|próxima reunión=próxima reunião=🔜',
  x: 'orden del día=pauta|propuesta=proposta|votación=votação|unanimidad=unanimidade|presupuesto=orçamento|campaña=campanha|proveedor=fornecedor|cronograma=cronograma|revisión=revisão|aprobación=aprovação',
  dlg: '¿Quién redacta el acta hoy?=Quem redige a ata hoje?|Yo me encargo. ¿Qué pongo sobre el presupuesto?=Eu fico responsável. O que eu coloco sobre o orçamento?|Que se acordó revisarlo con el proveedor.=Que se acordou revisá-lo com o fornecedor.|Perfecto. ¿Y el responsable? · Carlos, con plazo hasta el viernes.=Perfeito. E o responsável? · Carlos, com prazo até sexta.',
  cz: 'Se ___ lanzar la campaña en marzo. (acordar)=acordó=acordaron=acordamos|Ana se ___ del informe final. (encargar-se, futuro)=encargará=encarga de=encargaría de|La próxima reunión ___ el lunes. (ser, futuro)=será=sea=fuera',
  whys: 'impessoal: se acordó|futuro: se encargará|futuro: será',
  pts: 'Cabeçalho: Acta de la reunión del … · Asistentes: … · Ausentes: … · Orden del día: …|Desenvolvimento em estilo impessoal: Se trató el tema de … / Se presentó … / Se discutió …|Acordos: Se acordó + infinitivo ou que + indicativo / Se decidió … / Se aprobó por unanimidad …|Responsáveis, prazos e próxima reunião: X se encargará de … · Plazo: … · Queda pendiente … · La próxima reunión será …',
  ex: 'Se trató el tema del presupuesto.=Tratou-se do tema do orçamento.|Se aprobó la propuesta por unanimidad.=A proposta foi aprovada por unanimidade.|Queda pendiente la revisión del contrato.=Fica pendente a revisão do contrato.|Plazo: hasta el viernes 7.=Prazo: até sexta-feira, dia 7.',
  bd: ['Se_acordó=V^impessoal: se + indefinido|lanzar_la_campaña=V|el_15_de_marzo.=T', 'Acordou-se lançar a campanha em 15 de março.'],
  rule: 'acta',
  le: {
    texto: {
      t: 'Acta de la reunión del 3 de marzo', kind: 'ata', voz: 'b',
      intro: 'A ata de uma reunião de equipe numa empresa de turismo de Lima. Leia e responda.',
      paras: ['Asistentes: Ana Torres, Carlos Ruiz, Lucía Paredes y Martín Gómez. Ausente: Sofía Rojas (de vacaciones).', 'Orden del día: 1) lanzamiento de la campaña de verano; 2) presupuesto; 3) problemas con el proveedor de transporte.', 'Se trató en primer lugar el lanzamiento de la campaña. Tras una breve discusión, se acordó lanzarla el 15 de marzo. Ana Torres se encargará de coordinar el equipo de diseño.', 'En cuanto al presupuesto, se aprobó por unanimidad la propuesta de Carlos Ruiz. Con respecto al proveedor de transporte, se decidió pedir otras dos ofertas. Responsable: Martín Gómez. Plazo: hasta el viernes 7.', 'Queda pendiente la revisión del contrato con el hotel. La próxima reunión será el lunes 10 a las nueve.'],
      qs: [
        { q: 'Quem faltou à reunião?', o: ['Sofía Rojas, que estava de férias', 'Carlos Ruiz', 'ninguém'], a: 0 },
        { q: 'O que se decidiu sobre a campanha?', o: ['lançá-la em 15 de março', 'adiá-la para abril', 'cancelá-la'], a: 0 },
        { q: 'O que vai fazer o Martín Gómez?', o: ['pedir outras duas ofertas de transporte até sexta', 'coordenar o design', 'revisar o contrato com o hotel'], a: 0 },
        { q: 'O que ficou pendente?', o: ['a revisão do contrato com o hotel', 'o orçamento', 'a data da campanha'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva a sua ata', tipo: 'form', ok: 'Ata escrita corretamente.',
      pede: 'Escreva a ata de uma reunião (real ou imaginária) do seu trabalho, da sua turma ou do seu prédio. Uma frase por linha.',
      campos: [
        { l: 'Participantes', d: 'Asistentes: …', re: '(asistentes|presentes|participantes)', f: 'iu', err: 'Liste os participantes: Asistentes: …' },
        { l: 'O tema', d: 'Se trató el tema de …', re: '(se trató|se trataron|se presentó|se presentaron|se discutió|se habló)', f: 'iu', err: 'Diga o tema no impessoal: Se trató el tema de …' },
        { l: 'Um acordo', d: 'Se acordó … / Se decidió …', re: '(se acordó|se decidió|se aprobó|se acordaron|se aprobaron)', f: 'iu', err: 'Registre um acordo: Se acordó …', bad: [['\\b(acordamos|decidimos)\\b', 'Na ata, o impessoal: <b>se acordó</b>, <b>se decidió</b>.']] },
        { l: 'Responsável', d: '… se encargará de … / Responsable: …', re: '(se encargará|responsable|se ocupará|estará a cargo)', f: 'iu', err: 'Diga quem é o responsável: X se encargará de …' },
        { l: 'Prazo ou pendência', d: 'Plazo: … / Queda pendiente …', re: '(plazo|queda pendiente|quedan pendientes|hasta el)', f: 'iu', err: 'Registre o prazo: Plazo: hasta el viernes.' },
        { l: 'Próxima reunião', d: 'La próxima reunión será …', re: '(próxima reunión|se levanta la sesión|se cerró la reunión)', f: 'iu', err: 'Feche: La próxima reunión será …' },
      ],
      modelo: 'Asistentes: los vecinos del edificio y la administradora. · Se trató el tema de la limpieza de las áreas comunes. · Se acordó contratar una nueva empresa de limpieza. · La administradora se encargará de pedir tres presupuestos. · Plazo: hasta el 30 de abril. · La próxima reunión será el 5 de mayo a las siete.',
    },
  },
  hw: 'Escreva a ata completa (doze a quinze linhas) de uma reunião, com cabeçalho, pauta, três temas tratados, dois acordos, responsáveis, prazos, uma pendência e a próxima reunião.',
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo. Você vai ler a ata de uma empresa peruana e escrever a sua.
# Passo 1: a estrutura
@ P:Uma ata;Cabeçalho=Asistentes: … · Orden del día: …;Temas=Se trató …;Acordos=Se acordó …;Responsáveis=X se encargará de …;Fecho=La próxima reunión será …
~ Se trató el tema del presupuesto. = Tratou-se do tema do orçamento.
# Passo 2: os acordos, no impessoal
~ Se acordó lanzar la campaña el 15 de marzo. = Acordou-se lançar a campanha em 15 de março.
~ Se aprobó la propuesta por unanimidad. = A proposta foi aprovada por unanimidade.
| Informal | Na ata |
| Decidimos lanzarla en marzo. | Se acordó lanzarla en marzo. |
| Todos dijeron que sí. | Se aprobó por unanimidad. |
# Passo 3: responsáveis e prazos
~ Ana Torres se encargará del informe final. = Ana Torres ficará responsável pelo relatório final.
~ Plazo: hasta el viernes 7. = Prazo: até sexta-feira, dia 7.
BR A ata é **objetiva**: sem opiniões, sem "eu", com o **se** impessoal e o **futuro** para as tarefas.
# Passo 4: pendências e próxima reunião
~ Queda pendiente la revisión del contrato. = Fica pendente a revisão do contrato.
~ La próxima reunión será el lunes 10 a las nueve. = A próxima reunião será na segunda, dia 10, às nove.
! **Queda pendiente** (singular) com um assunto; **quedan pendientes** (plural) com vários: quedan pendientes dos temas.
> Agora leia a ata e escreva a sua.
? "Acordou-se": || se acordó
? "Ficará responsável por": || se encargará de …
? "Fica pendente": || queda pendiente
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('En la reunión',
  'P:A reunião;Abrir=El objetivo de hoy es …;Pauta=El primer punto del orden del día …;Propor=Propongo que …;Fechar=Quedamos en que …',
  'M:Propor;Forma|Depois vem;Propongo que|subjuntivo;Sugiero|infinitivo;¿Qué tal si …?|presente');
V('Estaríamos dispuestos a …',
  'V:Direto ou negociável?;Direto|Bajamos el precio.;Negociável|Estaríamos dispuestos a bajar el precio.',
  'M:Condições;Espanhol|Depois vem;siempre que|subjuntivo;con tal de que|subjuntivo;a cambio de|substantivo');
V('Un correo de trabajo',
  'P:O e-mail;Assunto=Asunto: …;Abertura=Hola, Pablo:;Pedido=¿Podrías …?;Fecho=Quedo atenta. Un saludo.',
  'M:Semiformal × formal;Semiformal|Formal;Hola, Pablo:|Estimado señor Pérez:;Te escribo para|Le escribo para;Un saludo.|Atentamente.');
V('Dar feedback',
  'P:Um bom feedback;Positivo=Lo que funcionó muy bien fue …;Sugestão=Quizás podrías …;Apoio=Si necesitas ayuda, avísame.',
  'V:Tom;Duro|Esto está mal.;Construtivo|Un aspecto a mejorar sería …');
V('Resolver un conflicto',
  'V:Empatia;Fato|Entiendo que estás molesto.;Empatia|Entiendo que estés molesto.',
  'P:Vamos …;Buscar=Busquemos una solución.;Colocar-se=Pongámonos en el lugar de …;Conversar=Hablemos con calma.');
V('El acta de la reunión',
  'P:Uma ata;Cabeçalho=Asistentes: …;Temas=Se trató …;Acordos=Se acordó …;Fecho=La próxima reunión será …',
  'M:Informal × ata;Informal|Na ata;Decidimos …|Se acordó …;Todos dijeron que sí.|Se aprobó por unanimidad.');
S_('En la reunión', 'el primer punto=o primeiro ponto|del orden del día=da pauta|es el presupuesto=é o orçamento|propongo que=proponho que|lancemos=lancemos|la campaña=a campanha|en marzo=em março|entonces=então|quedamos en que=combinamos que|Ana=Ana|prepara=prepara|el informe=o relatório|bueno=bom|empecemos=vamos começar|es el lanzamiento=é o lançamento|lo hagamos=o façamos|después de=depois de|las vacaciones=as férias|me parece bien=acho bom|qué opinan=o que acham|los demás=os outros|de acuerdo=de acordo|quedamos en marzo=combinamos março|lanzamos=lançamos|lanzaremos=lançaremos|en=em|de=de|con=com|orden=ordem|ordem=(erro) ordem|orde=(erro) orde|quién se encarga de=quem fica responsável por|hablar con el cliente=falar com o cliente|alguien quiere añadir algo=alguém quer acrescentar algo|el siguiente paso=o próximo passo|es aprobar=é aprovar|qué tal si=que tal se|lo dejamos=deixamos isso|para la próxima reunión=para a próxima reunião|el objetivo de hoy es=o objetivo de hoje é|sugiero=sugiro|sugiero esperar=sugiro esperar|qué tal si esperamos=que tal se esperarmos|a mí me parece que=a mim parece que|estoy de acuerdo con=concordo com|estamos de acuerdo=estamos de acordo|la agenda=a agenda|quedamos en vernos=combinamos de nos ver|el lunes=na segunda|lancemos la campaña=lancemos a campanha|el objetivo=o objetivo');
S_('Estaríamos dispuestos a …', 'estaríamos dispuestos a=estaríamos dispostos a|bajar el precio=baixar o preço|un diez por ciento=dez por cento|siempre que=desde que|firmen=assinem|un contrato=um contrato|por dos años=de dois anos|qué les parece si=o que acham de|lo dejamos=deixarmos|en un ocho por ciento=em oito por cento|nuestro precio=nosso preço|es de cien dólares=é de cem dólares|por unidad=por unidade|es un poco alto=é um pouco alto|estarían dispuestos a=estariam dispostos a|hacer un descuento=dar um desconto|podríamos bajar=poderíamos baixar|un cinco por ciento=cinco por cento|paguen=paguem|en treinta días=em trinta dias|y si=e se|el pedido=o pedido|es el doble=é o dobro|entonces=então|un ocho por ciento=oito por cento|trato hecho=negócio fechado|estamos de=(erro) estamos de|estaremos a=(erro) estaremos a|firman=assinam|firmarán=assinarão|les damos=damos|un descuento=um desconto|a cambio de=em troca de|exclusividad=exclusividade|cambio=troca|troca=(erro) troca|cambios=trocas|me temo que=receio que|no podemos bajar más=não podemos baixar mais|con tal de que=contanto que|la entrega=a entrega|sea en marzo=seja em março|aceptamos=aceitamos|cerramos el trato=fechamos o negócio|bajamos el precio=baixamos o preço|podríamos=poderíamos|nos interesaría=nos interessaria|a condición de que=com a condição de que|lo que podemos ofrecer es=o que podemos oferecer é|lo siento=sinto muito|pero=mas|no es posible=não é possível|siempre que viene=sempre que vem|trae flores=traz flores|siempre que paguen en treinta días=desde que paguem em trinta dias');
S_('Un correo de trabajo', 'hola=olá|equipo=equipe|les escribo para=escrevo para vocês para|recordarles=lembrar vocês|la reunión del lunes=a reunião de segunda|te adjunto=te envio em anexo|el informe=o relatório|con los datos=com os dados|de marzo=de março|podrías enviarme=você poderia me enviar|tus comentarios=seus comentários|antes del viernes=antes de sexta|ya le escribiste=você já escreveu|a Pablo=para o Pablo|por lo del informe=sobre o relatório|sí=sim|Pablo=Pablo|el borrador=o rascunho|podrías revisarlo=você poderia revisá-lo|antes del jueves=antes de quinta|y cómo lo cerraste=e como você fechou|quedo atenta a=fico no aguardo de|un saludo=abraços|anexo=anexo|adjunta=anexa|pudieras de=(erro) pudieras de|podrás=poderá|atento de=(erro) atento de|atendida=atendida|asunto=assunto|recordatorio de=lembrete de|me confirmas=você me confirma|si puedes asistir=se pode participar|cualquier duda=qualquer dúvida|me dices=me fala|gracias de antemano=obrigada desde já|te escribo para=te escrevo para|quedo pendiente=fico no aguardo|quedo atenta=fico no aguardo|quedo atento=fico no aguardo|saludos=saudações|buenos días a todos=bom dia a todos|te agradecería que=eu agradeceria se|estimado señor Pérez=prezado senhor Pérez|le escribo para=escrevo para o senhor|atentamente=atenciosamente|informe de marzo=relatório de março|el archivo=o arquivo|el viernes=sexta');
S_('Dar feedback', 'lo que funcionó muy bien=o que funcionou muito bem|fue la introducción=foi a introdução|quizás podrías=talvez você pudesse|incluir=incluir|más ejemplos=mais exemplos|te sugiero que=te sugiro que|revises=revise|los datos=os dados|de la tabla=da tabela|qué te pareció=o que você achou de|mi presentación=minha apresentação|muy buena=muito boa|y qué podría mejorar=e o que eu poderia melhorar|hablar=falar|un poco más despacio=um pouco mais devagar|practiques=treine|con cronómetro=com cronômetro|funcionó=funcionou|funcionaba=funcionava|funcione=funcione|revisas=revisa|revisarás=revisará|gracias por los comentarios=obrigada pelos comentários|lo tendré en cuenta=vou levar em conta|tengo de=(erro) tengo de|tenga=tenha|qué te parece si=o que você acha de|agregamos=acrescentarmos|un gráfico=um gráfico|un aspecto a mejorar=um ponto a melhorar|sería el ritmo=seria o ritmo|en general=no geral|muy buen trabajo=muito bom trabalho|me gustó mucho=gostei muito|tu fortaleza es=seu ponto forte é|si necesitas ayuda=se precisar de ajuda|avísame=me avisa|podrías darme un ejemplo=você poderia me dar um exemplo|esto está mal=isto está errado|retroalimentación=retroalimentação|devolución=retorno (Argentina)|lo tendré=vou levá-lo|sería=seria');
S_('Resolver un conflicto', 'entiendo que=entendo que|estés molesto=você esteja chateado|con el retraso=com o atraso|busquemos=vamos buscar|una solución=uma solução|entre todos=entre todos|lo importante es que=o importante é que|el cliente=o cliente|reciba=receba|el pedido=o pedido|a tiempo=a tempo|siempre me toca a mí=sempre sobra para mim|hacer el trabajo=fazer o trabalho|de los demás=dos outros|estés cansado=você esteja cansado|no es justo=não é justo|si es así=se for assim|pues sí=pois é|es así=é assim|qué te parece si=o que você acha de|repartimos=dividirmos|las tareas=as tarefas|en la reunión del lunes=na reunião de segunda|estás=você está|estarás=você estará|buscamos=buscamos|buscaremos=buscaremos|recibe=recebe|recibirá=receberá|no se trata de=não se trata de|buscar culpables=procurar culpados|pongámonos=vamos nos colocar|en el lugar del cliente=no lugar do cliente|fue un malentendido=foi um mal-entendido|a partir de ahora=a partir de agora|revisaremos=vamos revisar|todo juntos=tudo juntos|entiendo tu punto de vista=entendo seu ponto de vista|tienes razón en que=você tem razão em que|hablemos con calma=vamos conversar com calma|entiendo que estás molesto=entendo que você está chateado|pongámonos en el lugar de=vamos nos colocar no lugar de|pongámosnos=(erro) pongámosnos|hablemos=vamos conversar|busquemos una solución=vamos buscar uma solução');
S_('El acta de la reunión', 'se acordó=acordou-se|lanzar=lançar|la campaña=a campanha|el 15 de marzo=em 15 de março|Ana Torres=Ana Torres|se encargará del=ficará responsável pelo|informe final=relatório final|la próxima reunión=a próxima reunião|será=será|el lunes 10=na segunda, dia 10|a las nueve=às nove|quién redacta=quem redige|el acta=a ata|hoy=hoje|yo me encargo=eu fico responsável|qué pongo=o que eu coloco|sobre el presupuesto=sobre o orçamento|que se acordó=que se acordou|revisarlo=revisá-lo|con el proveedor=com o fornecedor|perfecto=perfeito|y el responsable=e o responsável|Carlos=Carlos|con plazo=com prazo|hasta el viernes=até sexta|acordaron=acordaram|acordamos=acordamos|encarga de=(erro) encarga de|encargaría de=(erro) encargaría de|sea=seja|fuera=fosse|se trató=tratou-se|el tema del presupuesto=o tema do orçamento|se aprobó=foi aprovada|la propuesta=a proposta|por unanimidad=por unanimidade|queda pendiente=fica pendente|la revisión del contrato=a revisão do contrato|plazo=prazo|hasta el viernes 7=até sexta-feira, dia 7|asistentes=participantes|ausente=ausente|ausentes=ausentes|orden del día=pauta|se presentó=foi apresentado|se discutió=discutiu-se|se decidió=decidiu-se|decidimos=decidimos|lanzarla=lançá-la|en marzo=em março|todos dijeron que sí=todos disseram que sim|quedan pendientes=ficam pendentes|dos temas=dois temas|acta de la reunión del=ata da reunião de|3 de marzo=3 de março|Carlos Ruiz=Carlos Ruiz|Lucía Paredes=Lucía Paredes|Martín Gómez=Martín Gómez|Sofía Rojas=Sofía Rojas|de vacaciones=de férias|lanzamiento=lançamento|de la campaña de verano=da campanha de verão|presupuesto=orçamento|problemas con=problemas com|el proveedor de transporte=o fornecedor de transporte|en primer lugar=em primeiro lugar|el lanzamiento=o lançamento|tras una breve discusión=depois de uma breve discussão|coordinar=coordenar|el equipo de diseño=a equipe de design|en cuanto al=quanto ao|la propuesta de=a proposta de|con respecto al=com relação ao|pedir=pedir|otras dos ofertas=outras duas ofertas|responsable=responsável|el contrato=o contrato|con el hotel=com o hotel|los vecinos=os moradores|del edificio=do prédio|y la administradora=e a administradora|el tema de=o tema de|la limpieza=a limpeza|de las áreas comunes=das áreas comuns|contratar=contratar|una nueva empresa=uma nova empresa|de limpieza=de limpeza|la administradora=a administradora|se encargará de=ficará responsável por|pedir tres presupuestos=pedir três orçamentos|hasta el 30 de abril=até 30 de abril|el 5 de mayo=em 5 de maio|a las siete=às sete|presentes=presentes|participantes=participantes|se trataron=trataram-se|se presentaron=foram apresentados|se habló=falou-se|se acordaron=acordaram-se|se aprobaron=foram aprovados|se ocupará=se ocupará|estará a cargo=estará a cargo|hasta el=até|se levanta la sesión=encerra-se a sessão|se cerró la reunión=a reunião foi encerrada|próxima reunión=próxima reunião');
['ana', 'pablo', 'pérez', 'carlos', 'torres', 'ruiz', 'lucía', 'paredes', 'martín', 'gómez', 'sofía', 'rojas', 'lima'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'es-reunion': {
    o: 'Reuniões: **el orden del día**, **propongo que** + subjuntivo, **¿qué opinan?**, **quedamos en que**, **¿quién se encarga de …?**, **el siguiente paso**.',
    q: 'Em reuniões presenciais e on-line.',
    p: '**Quedar en** = combinar.',
  },
  'es-negociar': {
    o: 'Negociar: **estaríamos dispuestos a**, **siempre que / con tal de que** + subjuntivo, **¿qué les parece si …?**, **a cambio de**, **trato hecho**.',
    q: 'Com fornecedores, clientes e até no aluguel.',
    p: '**Siempre que** + subjuntivo = desde que.',
  },
  'es-correotrabajo': {
    o: 'O e-mail de trabalho: **Hola, equipo:**, **te escribo para**, **te adjunto**, **¿podrías …?**, **quedo atenta**, **un saludo**.',
    q: 'No dia a dia de qualquer empresa.',
    p: '"Anexar" é **adjuntar**.',
  },
  'es-feedback': {
    o: 'Feedback construtivo: **lo que funcionó muy bien fue**, **quizás podrías**, **te sugiero que** + subjuntivo, **un aspecto a mejorar sería** e, para receber, **lo tendré en cuenta**.',
    q: 'Em avaliações, revisões e mentorias.',
    p: 'O condicional deixa a crítica construtiva.',
  },
  'es-conflicto': {
    o: 'Resolver conflitos: **entiendo que estés molesto**, **no se trata de buscar culpables**, **busquemos una solución**, **lo importante es que** + subjuntivo.',
    q: 'Para mediar desentendimentos no trabalho.',
    p: 'O imperativo de nosotros é o nosso "vamos …".',
  },
  'es-acta': {
    o: 'Uma ata: **asistentes**, **se trató**, **se acordó**, **X se encargará de**, **plazo**, **queda pendiente**, **la próxima reunión será**.',
    q: 'Para registrar reuniões de trabalho, de condomínio, de turma.',
    p: 'Junta o estilo nominal e a linguagem de reunião.',
  },
});
Object.assign(CZH, {
  'es-reunion': ['propongo que + ?', 'quedar + ?', 'pauta'],
  'es-negociar': ['estaríamos', 'siempre que + ?', 'em troca de'],
  'es-correotrabajo': ['anexar', 'você poderia', 'fico no aguardo'],
  'es-feedback': ['funcionou', 'sugerir que + ?', 'vou levar em conta'],
  'es-conflicto': ['entiendo que + ?', 'vamos buscar', 'lo importante es que + ?'],
  'es-acta': ['acordou-se', 'ficará responsável', 'será'],
});
Object.assign(OBJ, {
  'es-reunion': { o: 'Participo de reuniões e fecho acordos.', a: 'Você consegue propor algo e fechar um acordo numa reunião?', ref: 'Interacción oral · B2' },
  'es-negociar': { o: 'Negocio com condições e contrapropostas.', a: 'Você consegue negociar um preço com siempre que + subjuntivo?', ref: 'Interacción oral · B2' },
  'es-correotrabajo': { o: 'Escrevo e-mails de trabalho claros.', a: 'Você consegue pedir um documento com prazo por e-mail?', ref: 'Expresión escrita · B2' },
  'es-feedback': { o: 'Dou e recebo feedback com tato.', a: 'Você consegue sugerir uma melhoria sem soar duro?', ref: 'Interacción oral · B2' },
  'es-conflicto': { o: 'Ajudo a resolver conflitos.', a: 'Você consegue mediar um desentendimento entre colegas?', ref: 'Interacción oral · B2' },
  'es-acta': { o: 'Consigo ler e escrever uma ata de reunião.', a: 'Você consegue registrar acordos, responsáveis e prazos?', ref: 'Expresión escrita · B2' },
});
MOD_OBJ[28] = ['Participo de reuniões e negociações.', 'Escrevo e-mails de trabalho.', 'Dou feedback e resolvo conflitos.', 'Consigo escrever uma ata.'];

ES_MODS.push({ lv: 'B2', n: 'No trabalho', l: ['es-reunion', 'es-negociar', 'es-correotrabajo', 'es-feedback', 'es-conflicto', 'es-acta'] });
