// Espanhol · B2 · Módulo 26 · Registro formal. Formato de es/curso.js.

NL('es-tuusted', {
  de: '¿Tú o usted?', pt: 'Escolher o registro: tú, usted, vos, vosotros', gt: 'tú × usted conforme o país e a situação · ustedes (América) × vosotros (Espanha) · vos (Rio da Prata, América Central) · ¿nos tuteamos?',
  gx: 'Escolher entre tú e usted depende do país e da situação. Em geral: usted com desconhecidos mais velhos, autoridades, clientes e em contextos formais; tú com amigos, colegas e jovens. Na Colômbia e na Costa Rica, usted é comum até entre amigos. No plural, a América Latina usa ustedes para tudo; a Espanha usa vosotros no informal. E no Rio da Prata, vos substitui tú (vos tenés).',
  ge: '¿Le puedo hacer una pregunta?=Posso fazer uma pergunta ao senhor?|¿Nos tuteamos? Somos colegas.=Vamos nos tratar por você? Somos colegas.|¿Ustedes ya comieron?=Vocês já comeram?',
  v: 'tú=você (informal)=🙂|usted=o senhor, a senhora=🎩|vos=você (Rio da Prata)=🧉|ustedes=vocês=👥|vosotros=vocês (Espanha, informal)=🇪🇸|tutear=tratar por tú=🤝|ustedear=tratar por usted=🙇|trato=tratamento=💬|confianza=intimidade, confiança=🫂|respeto=respeito=🙏',
  x: 'desconocido=desconhecido|autoridad=autoridade|cliente=cliente|jefe=chefe|suegra=sogra|profesor=professor|médico=médico|camarero=garçom|colega=colega|vecino=vizinho',
  dlg: 'Buenos días, señora Pérez. ¿Cómo está usted?=Bom dia, senhora Pérez. Como a senhora está?|Bien, gracias. Pero por favor, tutéame. Ya nos conocemos.=Bem, obrigada. Mas por favor, me chame de você. Já nos conhecemos.|De acuerdo. ¿Y cómo estás?=Combinado. E como você está?|Muy bien. ¡Así es más fácil!=Muito bem. Assim é mais fácil!',
  cz: '¿___ puedo hacer una pregunta? (ao senhor)=Le=Te=Lo|¿___ ya comieron? (vocês, América Latina)=Ustedes=Vosotros=Vos|Vos ___ razón. (ter, Rio da Prata)=tenés=tienes=tiene',
  whys: 'usted: le|plural na América Latina: ustedes|voseo: tenés',
  pts: 'usted: desconhecidos (sobretudo mais velhos), autoridades, clientes, entrevistas, cartas formais. Verbo na 3ª pessoa: ¿Cómo está usted? Pronomes le, lo, la, su.|tú: amigos, família, colegas, jovens, redes sociais. Na dúvida, comece com usted e espere o convite: ¿Nos tuteamos? / Tutéame.|Plural: ustedes em toda a América Latina (formal e informal); na Espanha, vosotros no informal (¿Vosotros ya comisteis?) e ustedes no formal.|vos: Argentina, Uruguai, Paraguai e América Central: vos tenés, vos sos, vení. É informal, como tú.',
  ex: 'Tutéame, por favor.=Me chame de você, por favor.|¿Vosotros ya comisteis?=Vocês já comeram? (Espanha)|Vos sos de Brasil, ¿no?=Você é do Brasil, né?|¿Me permite su pasaporte?=O senhor me permite o seu passaporte?',
  bd: ['¿Le=OI^usted: le|puedo_hacer=V|una_pregunta?=OA', 'Posso fazer uma pergunta ao senhor?'],
  rule: 'registro',
  hw: 'Escreva a mesma mensagem (pedir um favor) em três versões: para um amigo (tú), para a sua chefe (usted) e para um grupo de colegas (ustedes). Depois, reescreva a do amigo como se ele fosse argentino (vos).',
  deep: `
Hoje começa o módulo do **registro formal**. Antes das fórmulas, a decisão básica: **tú** ou **usted**?
# Passo 1: quando usar cada um
@ V:Tú ou usted?;Tú (informal)|amigos, colegas, jovens, redes;Usted (formal)|desconhecidos mais velhos, autoridades, clientes, cartas
~ ¿Le puedo hacer una pregunta? = Posso fazer uma pergunta ao senhor?
~ ¿Me permite su pasaporte? = O senhor me permite o seu passaporte?
BR Na dúvida, comece com **usted** e espere o convite para o **tú**. É o equivalente ao nosso "o senhor / a senhora" até a pessoa dizer "pode me chamar de você".
# Passo 2: passar para o tú
| Em espanhol | Em português |
| ¿Nos tuteamos? | Vamos nos tratar por você? |
| Tutéame, por favor. | Me chame de você, por favor. |
| Puedes tutearme. | Pode me chamar de você. |
~ ¿Nos tuteamos? Somos colegas. = Vamos nos tratar por você? Somos colegas.
~ Tutéame, por favor. = Me chame de você, por favor.
# Passo 3: o plural
@ M:O plural;Lugar|Informal|Formal;América Latina|ustedes|ustedes;Espanha|vosotros|ustedes
~ ¿Ustedes ya comieron? = Vocês já comeram?
~ ¿Vosotros ya comisteis? = Vocês já comeram? (Espanha)
# Passo 4: o voseo
| Tú | Vos (Rio da Prata) |
| tú tienes | vos tenés |
| tú eres | vos sos |
| ven | vení |
~ Vos sos de Brasil, ¿no? = Você é do Brasil, né?
! Na Colômbia e na Costa Rica, **usted** também aparece entre amigos e na família: lá, não é distância, é carinho.
> Treine agora: cumprimente uma senhora desconhecida com usted e depois proponha o tú a uma colega.
? "O senhor": || usted
? "Vamos nos tratar por você?": || ¿Nos tuteamos?
? "Você é" no Rio da Prata: || vos sos
`,
});

NL('es-disculpe', {
  de: 'Sería tan amable de …', pt: 'A cortesia formal na fala', gt: 'disculpe la molestia · ¿sería tan amable de …? · tenga la amabilidad de · permítame · con su permiso · no faltaba más',
  gx: 'Em situações formais (balcão, hotel, escritório, atendimento), algumas fórmulas deixam o pedido muito educado: Disculpe la molestia (desculpe o incômodo), ¿Sería tan amable de …? (o senhor faria a gentileza de …?), Tenga la amabilidad de esperar (tenha a bondade de esperar), Permítame (permita-me), Con su permiso (com licença), No faltaba más (imagina, de nada).',
  ge: 'Disculpe la molestia, ¿sería tan amable de ayudarme?=Desculpe o incômodo, o senhor faria a gentileza de me ajudar?|Tenga la amabilidad de esperar un momento.=Tenha a bondade de esperar um momento.|Muchas gracias. · No faltaba más.=Muito obrigada. · Imagina, não há de quê.',
  v: 'disculpe la molestia=desculpe o incômodo=🙏|sería tan amable de=faria a gentileza de=🌷|tenga la amabilidad de=tenha a bondade de=🤲|permítame=permita-me=🙋|con su permiso=com licença=🚪|no faltaba más=imagina, de nada=😊|a sus órdenes=às suas ordens=🫡|con mucho gusto=com muito prazer=💐|le agradezco=agradeço ao senhor=🙇|encantado de=encantado em=🤝',
  x: 'ventanilla=guichê|turno=vez, senha|formulario=formulário|firmar=assinar|rellenar=preencher|sello=carimbo|trámite=trâmite|oficina=escritório|recepción=recepção|atención al cliente=atendimento ao cliente',
  dlg: 'Disculpe la molestia, ¿podría decirme dónde se renueva el pasaporte?=Desculpe o incômodo, o senhor poderia me dizer onde se renova o passaporte?|Con mucho gusto. Es en la ventanilla tres. Tenga la amabilidad de sacar un turno.=Com muito prazer. É no guichê três. Tenha a bondade de tirar uma senha.|Muchísimas gracias, muy amable.=Muitíssimo obrigada, muito gentil.|No faltaba más. A sus órdenes.=Imagina. Às suas ordens.',
  cz: '¿Sería tan ___ de ayudarme?=amable=amabilidad=amado|Tenga la ___ de esperar.=amabilidad=amable=amistad|Con su ___, voy a pasar. (licença)=permiso=licencia=permito',
  whys: 'sería tan amable de|tenga la amabilidad de|com licença: con su permiso',
  pts: 'Pedir: ¿Sería tan amable de + infinitivo? / ¿Le importaría + infinitivo? / ¿Podría usted …? / Disculpe la molestia, …|Instruir com cortesia (atendimento): Tenga la amabilidad de + infinitivo / Haga el favor de + infinitivo.|Passar, interromper, apresentar-se: Con su permiso. / Permítame. / Encantado de conocerla.|Agradecer e responder: Le agradezco mucho. / Muy amable. · No faltaba más. / Con mucho gusto. / A sus órdenes (México e outros).',
  ex: 'Permítame que le presente a mi colega.=Permita-me apresentar a minha colega.|Con su permiso, tengo que retirarme.=Com licença, tenho que me retirar.|Haga el favor de firmar aquí.=Faça o favor de assinar aqui.|Le agradezco mucho su ayuda.=Agradeço muito a sua ajuda.',
  bd: ['¿Sería_tan_amable=V^condicional + tan amable: pedido muito educado|de_ayudarme?=C^de + infinitivo', 'O senhor faria a gentileza de me ajudar?'],
  rule: 'cortesia_formal',
  hw: 'Escreva um diálogo formal (dez falas) num consulado ou numa recepção de hotel, usando pelo menos seis fórmulas de cortesia desta lição.',
  deep: `
Hoje você aprende as **fórmulas de cortesia formal** da fala: as frases que abrem portas em balcões, hotéis e escritórios.
# Passo 1: pedir com muita educação
@ P:Do educado ao muito educado;Educado=¿Podría ayudarme?;Mais=¿Le importaría ayudarme?;Muito=¿Sería tan amable de ayudarme?
~ Disculpe la molestia, ¿sería tan amable de ayudarme? = Desculpe o incômodo, o senhor faria a gentileza de me ajudar?
# Passo 2: a cortesia do atendimento
| Em espanhol | Em português |
| Tenga la amabilidad de esperar. | Tenha a bondade de esperar. |
| Haga el favor de firmar aquí. | Faça o favor de assinar aqui. |
| A sus órdenes. | Às suas ordens. |
~ Tenga la amabilidad de esperar un momento. = Tenha a bondade de esperar um momento.
~ Haga el favor de firmar aquí. = Faça o favor de assinar aqui.
# Passo 3: passar e apresentar
@ V:Licença;Passar|Con su permiso.;Apresentar|Permítame que le presente a …
~ Permítame que le presente a mi colega. = Permita-me apresentar a minha colega.
~ Con su permiso, tengo que retirarme. = Com licença, tenho que me retirar.
# Passo 4: agradecer e responder
| Agradecer | Responder |
| Le agradezco mucho. | No faltaba más. |
| Muy amable. | Con mucho gusto. |
~ Le agradezco mucho su ayuda. = Agradeço muito a sua ajuda.
~ Muchas gracias. · No faltaba más. = Muito obrigada. · Imagina, não há de quê.
! **No faltaba más** é uma resposta gentil a um agradecimento ou pedido ("imagina, claro!"), não "não faltava mais nada".
> Treine agora: peça a um desconhecido, com a máxima cortesia, que segure a porta para você.
? "Desculpe o incômodo": || Disculpe la molestia.
? "O senhor faria a gentileza de …?": || ¿Sería tan amable de …?
? "Com licença" (para passar): || Con su permiso.
`,
});

NL('es-presentacion', {
  de: 'Buenos días a todos', pt: 'Fazer uma apresentação formal', gt: 'abrir, anunciar a estrutura, passar de uma parte a outra, citar dados, concluir e abrir para perguntas',
  gx: 'Numa apresentação formal (reunião, aula, congresso), as frases de transição guiam o público: Quisiera agradecer … (gostaria de agradecer), En primer lugar hablaré de … (primeiro vou falar de), Pasemos ahora a … (passemos agora a), Como pueden ver en el gráfico … (como podem ver no gráfico), Para concluir … e ¿Alguna pregunta?',
  ge: 'Quisiera agradecerles a todos su presencia.=Gostaria de agradecer a todos pela presença.|Pasemos ahora a los resultados.=Passemos agora aos resultados.|Como pueden ver en el gráfico, las ventas subieron.=Como vocês podem ver no gráfico, as vendas subiram.',
  v: 'presentación=apresentação=📊|quisiera=gostaria=🙋|agradecer=agradecer=🙏|hablaré de=vou falar de=🗣️|pasemos a=passemos a=➡️|como pueden ver=como podem ver=👀|gráfico=gráfico=📈|diapositiva=slide=🖼️|para concluir=para concluir=🏁|alguna pregunta=alguma pergunta=❓',
  x: 'resultados=resultados|objetivo=objetivo|propuesta=proposta|datos=dados|tabla=tabela|público=público|congreso=congresso|ponencia=palestra|ventas=vendas|trimestre=trimestre',
  dlg: 'Buenos días a todos. Quisiera agradecerles su presencia.=Bom dia a todos. Gostaria de agradecer pela presença.|En primer lugar, hablaré de los objetivos del proyecto.=Em primeiro lugar, vou falar dos objetivos do projeto.|Después pasaré a los resultados y, para concluir, a la propuesta.=Depois passarei aos resultados e, para concluir, à proposta.|Si tienen preguntas, con gusto las responderé al final.=Se tiverem perguntas, responderei com prazer no final.',
  cz: '___ agradecerles su presencia. (gostaria)=Quisiera=Quiero que=Quisiese de|Pasemos ___ a los resultados. (agora)=ahora=ya=hoy|Como ___ ver en el gráfico, … (vocês podem)=pueden=pueda=podéis de',
  whys: 'gostaria: quisiera|passemos agora: pasemos ahora|ustedes: pueden',
  pts: 'Abrir: Buenos días a todos. Quisiera agradecerles … El objetivo de esta presentación es …|Anunciar a estrutura: En primer lugar hablaré de …, después … y, por último, …|Transições e dados: Pasemos ahora a … / Como pueden ver en esta diapositiva, … / Me gustaría destacar que …|Concluir: Para concluir, … / En resumen, … / Muchas gracias por su atención. ¿Alguna pregunta?',
  ex: 'El objetivo de esta presentación es mostrar los resultados.=O objetivo desta apresentação é mostrar os resultados.|Me gustaría destacar un dato importante.=Gostaria de destacar um dado importante.|Para concluir, propongo tres medidas.=Para concluir, proponho três medidas.|Muchas gracias por su atención. ¿Alguna pregunta?=Muito obrigada pela atenção. Alguma pergunta?',
  bd: ['Como_pueden_ver=C^ustedes: pueden|en_el_gráfico,=L|las_ventas_subieron.=V', 'Como vocês podem ver no gráfico, as vendas subiram.'],
  rule: 'presentacion',
  hw: 'Prepare o roteiro de uma apresentação de três minutos sobre um projeto seu (de trabalho ou de estudo), com abertura, estrutura, duas transições, um dado, conclusão e perguntas.',
  deep: `
Hoje você aprende a **guiar uma apresentação formal**: as frases que ligam as partes e mantêm o público com você.
# Passo 1: abrir
@ P:A apresentação;Abrir=Quisiera agradecerles …;Estrutura=En primer lugar hablaré de …;Transição=Pasemos ahora a …;Fechar=Para concluir, …
~ Quisiera agradecerles a todos su presencia. = Gostaria de agradecer a todos pela presença.
~ El objetivo de esta presentación es mostrar los resultados. = O objetivo desta apresentação é mostrar os resultados.
# Passo 2: anunciar e passar
| Em espanhol | Em português |
| En primer lugar hablaré de … | Em primeiro lugar vou falar de … |
| Pasemos ahora a … | Passemos agora a … |
| Por último, … | Por último, … |
~ Pasemos ahora a los resultados. = Passemos agora aos resultados.
BR Num público latino-americano, fale com **ustedes** (pueden ver, les agradezco). Na Espanha, num ambiente informal, ouvirá **vosotros**.
# Passo 3: mostrar dados
~ Como pueden ver en el gráfico, las ventas subieron. = Como vocês podem ver no gráfico, as vendas subiram.
~ Me gustaría destacar un dato importante. = Gostaria de destacar um dado importante.
@ V:Apontar;Slide|Como pueden ver en esta diapositiva …;Destaque|Me gustaría destacar que …
# Passo 4: concluir
| Em espanhol | Em português |
| Para concluir, … | Para concluir, … |
| Muchas gracias por su atención. | Muito obrigada pela atenção. |
| ¿Alguna pregunta? | Alguma pergunta? |
~ Para concluir, propongo tres medidas. = Para concluir, proponho três medidas.
~ Muchas gracias por su atención. ¿Alguna pregunta? = Muito obrigada pela atenção. Alguma pergunta?
! O "slide" é **diapositiva** (ou **lámina** em alguns países). E "palestra" num congresso é **ponencia** ou **charla**.
> Treine agora: abra uma apresentação em voz alta, com agradecimento, objetivo e estrutura.
? "Gostaria de agradecer": || Quisiera agradecer …
? "Passemos agora a": || Pasemos ahora a …
? "Slide": || diapositiva
`,
});

NL('es-nominal', {
  de: 'La presentación del informe', pt: 'O estilo nominal e impessoal', gt: 'nominalização: presentar → la presentación de · se ha decidido, cabe destacar, conviene, resulta necesario',
  gx: 'Textos formais (relatórios, atas, e-mails institucionais) preferem substantivos a verbos e frases impessoais. Em vez de "Vamos a presentar el informe el lunes", escreve-se La presentación del informe será el lunes. E se usam fórmulas impessoais: Se ha decidido … (decidiu-se), Cabe destacar que … (vale destacar que), Conviene … (convém), Resulta necesario … (faz-se necessário).',
  ge: 'La presentación del informe será el lunes.=A apresentação do relatório será na segunda-feira.|Se ha decidido aplazar la reunión.=Decidiu-se adiar a reunião.|Cabe destacar el aumento de las ventas.=Vale destacar o aumento das vendas.',
  v: 'presentación=apresentação=📊|aprobación=aprovação=✅|aumento=aumento=📈|disminución=diminuição=📉|aplazamiento=adiamento=⏳|se ha decidido=decidiu-se=⚖️|cabe destacar=vale destacar=📌|conviene=convém=👍|resulta necesario=faz-se necessário=❗|llevar a cabo=realizar=🛠️',
  x: 'informe=relatório|acta=ata|reunión=reunião|plazo=prazo|presupuesto=orçamento|medida=medida|implementación=implementação|evaluación=avaliação|revisión=revisão|entrega=entrega',
  dlg: '¿Cómo escribo esto en el acta? "Decidimos que vamos a cambiar el plazo".=Como eu escrevo isso na ata? "Decidimos que vamos mudar o prazo".|Mejor: "Se acordó la modificación del plazo".=Melhor: "Acordou-se a modificação do prazo".|¿Y "tenemos que revisar el presupuesto"?=E "temos que revisar o orçamento"?|"Resulta necesaria la revisión del presupuesto".=Faz-se necessária a revisão do orçamento.',
  cz: 'La ___ del informe será el lunes. (presentar)=presentación=presentar=presentada|Se ha ___ aplazar la reunión. (decidir)=decidido=decidida=decidió|___ destacar el aumento de las ventas. (vale)=Cabe=Vale=Cabría de',
  whys: 'substantivo no lugar do verbo|se + perfecto: impessoal|cabe destacar',
  pts: 'Nominalizar: presentar → la presentación de; aprobar → la aprobación de; aumentar → el aumento de; revisar → la revisión de; aplazar → el aplazamiento de.|Impessoal com se: Se ha decidido … / Se acordó … / Se recomienda … (sem dizer "nós").|Fórmulas de destaque e necessidade: Cabe destacar / señalar que … · Conviene + infinitivo · Resulta necesario / fundamental + infinitivo ou substantivo.|Verbos formais: llevar a cabo (realizar), efectuar, realizar, contar con (dispor de), dar a conocer (divulgar).',
  ex: 'Se acordó la modificación del plazo.=Acordou-se a modificação do prazo.|Resulta necesaria la revisión del presupuesto.=Faz-se necessária a revisão do orçamento.|Conviene revisar los datos antes de la entrega.=Convém revisar os dados antes da entrega.|La empresa llevó a cabo una evaluación interna.=A empresa realizou uma avaliação interna.',
  bd: ['La_presentación_del_informe=S^nominalização: presentar → la presentación|será=V|el_lunes.=T', 'A apresentação do relatório será na segunda-feira.'],
  rule: 'nominal',
  hw: 'Reescreva cinco frases informais de trabalho ("Vamos a cambiar el horario", "Tenemos que revisar los gastos"…) no estilo nominal e impessoal de uma ata ou relatório.',
  deep: `
Hoje você aprende o **estilo nominal e impessoal** dos textos formais: relatórios, atas e comunicados.
# Passo 1: do verbo ao substantivo
@ M:Nominalizar;Verbo|Substantivo;presentar|la presentación;aprobar|la aprobación;aumentar|el aumento;aplazar|el aplazamiento
~ La presentación del informe será el lunes. = A apresentação do relatório será na segunda-feira.
~ Cabe destacar el aumento de las ventas. = Vale destacar o aumento das vendas.
# Passo 2: o impessoal com se
@ V:Informal ou formal?;Informal|Decidimos cambiar el plazo.;Formal|Se acordó la modificación del plazo.
~ Se ha decidido aplazar la reunión. = Decidiu-se adiar a reunião.
~ Se acordó la modificación del plazo. = Acordou-se a modificação do prazo.
# Passo 3: as fórmulas
| Em espanhol | Em português |
| cabe destacar que | vale destacar que |
| conviene + infinitivo | convém |
| resulta necesario | faz-se necessário |
~ Resulta necesaria la revisión del presupuesto. = Faz-se necessária a revisão do orçamento.
~ Conviene revisar los datos antes de la entrega. = Convém revisar os dados antes da entrega.
# Passo 4: os verbos formais
| Neutro | Formal |
| hacer, realizar | llevar a cabo |
| tener | contar con |
| anunciar | dar a conocer |
~ La empresa llevó a cabo una evaluación interna. = A empresa realizou uma avaliação interna.
! Com **resulta necesario/a** + substantivo, o adjetivo concorda: resulta necesari**a** la revisión. Com infinitivo, fica no masculino: resulta necesari**o** revisar.
> Treine agora: transforme "Vamos a contratar a dos personas" numa frase de relatório.
? "A apresentação do relatório": || la presentación del informe
? "Decidiu-se adiar": || Se ha decidido aplazar …
? "Realizar" (formal): || llevar a cabo
`,
});

NL('es-noobstante', {
  de: 'No obstante, asimismo', pt: 'Conectores formais', gt: 'no obstante, sin embargo · asimismo, además · por consiguiente, por lo tanto · en cuanto a, con respecto a · dado que, puesto que · a fin de (que)',
  gx: 'Os textos formais pedem conectores mais elevados: no obstante (no entanto), asimismo (também, do mesmo modo), por consiguiente (por conseguinte), en cuanto a / con respecto a (quanto a), dado que / puesto que (dado que, já que), a fin de + infinitivo / a fin de que + subjuntivo (a fim de).',
  ge: 'El proyecto es viable. No obstante, requiere más inversión.=O projeto é viável. No entanto, requer mais investimento.|Asimismo, se recomienda contratar a un especialista.=Do mesmo modo, recomenda-se contratar um especialista.|Dado que el plazo es corto, conviene empezar ya.=Dado que o prazo é curto, convém começar já.',
  v: 'no obstante=no entanto=↔️|asimismo=do mesmo modo, também=➕|por consiguiente=por conseguinte=➡️|en cuanto a=quanto a=📌|con respecto a=com relação a=📎|dado que=dado que=🔑|puesto que=já que=🔑|a fin de=a fim de=🎯|a fin de que=a fim de que=🎯|en definitiva=em suma=🏁',
  x: 'viable=viável|inversión=investimento|requerir=requerer|especialista=especialista|plazo=prazo|recursos=recursos|garantizar=garantir|calidad=qualidade|cumplir=cumprir|objetivos=objetivos',
  dlg: '¿Cómo uno estas dos ideas en el informe: "es barato, pero es lento"?=Como eu ligo estas duas ideias no relatório: "é barato, mas é lento"?|Puedes escribir: "Es económico. No obstante, presenta tiempos de entrega largos".=Você pode escrever: "É econômico. No entanto, apresenta prazos de entrega longos".|¿Y para añadir otra ventaja?=E para acrescentar outra vantagem?|Usa "asimismo": "Asimismo, el proveedor ofrece garantía".=Use "asimismo": "Do mesmo modo, o fornecedor oferece garantia".',
  cz: 'Es viable. No ___, requiere más inversión.=obstante=obstáculo=obstante que|___ que el plazo es corto, conviene empezar ya. (dado)=Dado=Dando=Dada|A fin de que todos ___ informados, … (estar)=estén=están=estarán',
  whys: 'no obstante = no entanto|dado que + indicativo|a fin de que + subjuntivo',
  pts: 'Contraste: no obstante, sin embargo (início de frase, com vírgula). Soma: asimismo, además, igualmente.|Consequência: por consiguiente, por lo tanto, de ahí que (+ subjuntivo). Tema: en cuanto a, con respecto a, en lo que se refiere a.|Causa: dado que, puesto que, ya que + indicativo; debido a + substantivo.|Finalidade: a fin de + infinitivo (mesmo sujeito); a fin de que + subjuntivo (sujeitos diferentes). Conclusão: en definitiva, en suma.',
  ex: 'En cuanto al presupuesto, todavía no hay acuerdo.=Quanto ao orçamento, ainda não há acordo.|Por consiguiente, se aplazará la entrega.=Por conseguinte, a entrega será adiada.|Se enviará un resumen a fin de que todos estén informados.=Será enviado um resumo a fim de que todos estejam informados.|En definitiva, el proyecto es viable.=Em suma, o projeto é viável.',
  bd: ['Dado_que=C^causa formal: + indicativo|el_plazo_es_corto,=V|conviene_empezar_ya.=V', 'Dado que o prazo é curto, convém começar já.'],
  rule: 'conectores_formales',
  hw: 'Escreva um parágrafo de relatório (oito frases) avaliando uma proposta, com pelo menos seis conectores formais diferentes desta lição.',
  deep: `
Hoje você aprende os **conectores formais**: os que dão ao texto o tom de relatório, artigo ou e-mail institucional.
# Passo 1: contraste e soma
@ M:Formal × comum;Comum|Formal;pero|no obstante;además|asimismo;por eso|por consiguiente
~ El proyecto es viable. No obstante, requiere más inversión. = O projeto é viável. No entanto, requer mais investimento.
~ Asimismo, se recomienda contratar a un especialista. = Do mesmo modo, recomenda-se contratar um especialista.
# Passo 2: tema e causa
| Função | Conector |
| tema | en cuanto a, con respecto a |
| causa | dado que, puesto que, ya que |
~ En cuanto al presupuesto, todavía no hay acuerdo. = Quanto ao orçamento, ainda não há acordo.
~ Dado que el plazo es corto, conviene empezar ya. = Dado que o prazo é curto, convém começar já.
# Passo 3: finalidade e consequência
@ V:A fin de;Mesmo sujeito (infinitivo)|a fin de mejorar el servicio;Sujeitos diferentes (subjuntivo)|a fin de que todos estén informados
~ Se enviará un resumen a fin de que todos estén informados. = Será enviado um resumo a fim de que todos estejam informados.
~ Por consiguiente, se aplazará la entrega. = Por conseguinte, a entrega será adiada.
BR **No obstante** e **asimismo** são raros na fala, mas muito comuns em textos formais e na escrita do DELE B2 e C1.
# Passo 4: concluir
| Em espanhol | Em português |
| en definitiva | em suma |
| en suma | em suma |
| en conclusión | em conclusão |
~ En definitiva, el proyecto es viable. = Em suma, o projeto é viável.
! **Asimismo** (junto) = do mesmo modo; **así mismo** (separado) = desse mesmo jeito. Nos textos formais, quase sempre é **asimismo**.
> Treine agora: ligue três ideias sobre um fornecedor (barato, lento, com garantia) com conectores formais.
? "No entanto" (formal): || no obstante
? "Do mesmo modo": || asimismo
? "A fim de que todos estejam informados": || a fin de que todos estén informados
`,
});

NL('es-reclamacion', {
  de: 'Una carta de reclamación', pt: 'Ler e escrever uma reclamação formal', gt: 'carta formal com usted, estilo impessoal, conectores formais e um pedido firme',
  gx: 'Uma carta de reclamação junta tudo do módulo: o tratamento formal (Estimados señores:), os fatos (El pasado 3 de mayo adquirí …), o problema com conectores (No obstante, …, Asimismo, …), o estilo nominal (la devolución del importe), o pedido firme e educado (Les ruego que …, Solicito …) e a consequência (En caso contrario, me veré obligada a …).',
  ge: 'Me dirijo a ustedes para manifestar mi descontento con el servicio.=Dirijo-me a vocês para manifestar a minha insatisfação com o serviço.|Solicito la devolución del importe pagado.=Solicito a devolução do valor pago.|En caso contrario, me veré obligada a presentar una queja formal.=Caso contrário, serei obrigada a apresentar uma reclamação formal.',
  v: 'reclamación=reclamação=📢|manifestar=manifestar=🗣️|descontento=insatisfação=😠|adquirir=adquirir, comprar=🛒|importe=valor, quantia=💲|devolución=devolução=↩️|reembolso=reembolso=💵|en caso contrario=caso contrário=⚠️|verse obligado a=ser obrigado a=⚖️|hoja de reclamaciones=livro de reclamações=📕',
  x: 'pedido=pedido|factura=nota fiscal|defectuoso=com defeito|plazo de entrega=prazo de entrega|garantía=garantia|atención al cliente=atendimento ao cliente|número de pedido=número do pedido|sin respuesta=sem resposta|indemnización=indenização|consumidor=consumidor',
  dlg: '¿Ya respondieron a tu reclamación?=Já responderam à sua reclamação?|Todavía no. Les escribí hace dos semanas.=Ainda não. Escrevi para eles há duas semanas.|Escríbeles otra vez, más formal, y menciona la oficina del consumidor.=Escreva de novo, mais formal, e mencione o órgão de defesa do consumidor.|Buena idea: "En caso contrario, me veré obligada a acudir a la oficina del consumidor".=Boa ideia: "Caso contrário, serei obrigada a recorrer ao órgão de defesa do consumidor".',
  cz: 'Me dirijo a ustedes para manifestar mi ___. (insatisfação)=descontento=descontente=desconfianza|Solicito la ___ del importe pagado. (devolução)=devolución=devolver=devuelta|En caso ___, me veré obligada a … (contrário)=contrario=contrário=contra',
  whys: 'insatisfação: descontento|nominalização: la devolución|caso contrário: en caso contrario',
  pts: 'Abertura formal: Estimados señores: Me dirijo a ustedes para manifestar mi descontento con …|Os fatos, com datas e números: El pasado 3 de mayo adquirí … (número de pedido …). Sin embargo, … Asimismo, …|O pedido firme, em estilo nominal: Solicito la devolución del importe / la sustitución del producto. Les ruego que + subjuntivo.|A consequência e o fecho: En caso contrario, me veré obligada a … Quedo a la espera de su respuesta. Atentamente, …',
  ex: 'El pasado 3 de mayo adquirí un televisor en su tienda en línea.=No último dia 3 de maio adquiri uma televisão na sua loja on-line.|Sin embargo, el producto llegó defectuoso.=No entanto, o produto chegou com defeito.|Les ruego que me respondan a la mayor brevedad.=Peço que me respondam o quanto antes.|Quedo a la espera de su respuesta.=Fico no aguardo da sua resposta.',
  bd: ['En_caso_contrario,=C^caso contrário|me_veré_obligada=V^verse obligado: ser obrigado|a_presentar_una_queja_formal.=C', 'Caso contrário, serei obrigada a apresentar uma reclamação formal.'],
  rule: 'reclamacion',
  le: {
    texto: {
      t: 'Reclamación · Pedido 48213', kind: 'carta formal', voz: 'a',
      intro: 'Uma cliente de Santiago escreveu para uma loja on-line de eletrodomésticos. Leia e responda.',
      paras: ['Estimados señores: Me dirijo a ustedes para manifestar mi descontento con el servicio recibido en relación con el pedido número 48213.', 'El pasado 3 de mayo adquirí una lavadora en su tienda en línea. Según su página web, el plazo de entrega era de cinco días hábiles. No obstante, el producto llegó tres semanas después.', 'Asimismo, al instalarla, comprobé que la puerta no cerraba correctamente. Dado que la lavadora está en garantía, me puse en contacto con su servicio de atención al cliente en dos ocasiones, sin recibir respuesta.', 'Por consiguiente, solicito la sustitución del producto o, en su defecto, la devolución del importe pagado. Les ruego que me respondan a la mayor brevedad.', 'En caso contrario, me veré obligada a acudir al Servicio Nacional del Consumidor. Quedo a la espera de su respuesta. Atentamente, Carolina Muñoz.'],
      qs: [
        { q: 'Qual foi o primeiro problema?', o: ['a máquina chegou três semanas depois do prazo', 'chegou o produto errado', 'cobraram duas vezes'], a: 0 },
        { q: 'O que ela descobriu ao instalar a máquina?', o: ['a porta não fechava direito', 'faltava uma peça', 'a máquina fazia barulho'], a: 0 },
        { q: 'O que ela solicita?', o: ['a troca do produto ou a devolução do valor', 'só um desconto', 'uma visita técnica'], a: 0 },
        { q: 'O que ela fará se não responderem?', o: ['vai recorrer ao Serviço Nacional do Consumidor', 'vai cancelar o cartão', 'vai escrever nas redes sociais'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva a sua reclamação', tipo: 'form', ok: 'Reclamação escrita corretamente.',
      pede: 'Escreva uma reclamação formal a uma companhia aérea que perdeu a sua mala. Uma frase por linha.',
      campos: [
        { l: 'Abertura', d: 'Estimados señores: Me dirijo a ustedes para …', re: '(me dirijo a ustedes|me pongo en contacto con ustedes|les escribo para)', f: 'iu', err: 'Abra formalmente: Me dirijo a ustedes para manifestar mi descontento …' },
        { l: 'Os fatos', d: 'El pasado … viajé / adquirí …', re: '(el pasado|el día|el \\d+ de)', f: 'iu', err: 'Dê a data dos fatos: El pasado 10 de marzo viajé …' },
        { l: 'O problema, com conector', d: 'No obstante, … / Sin embargo, …', re: '(no obstante|sin embargo|asimismo|además|dado que|puesto que)', f: 'iu', err: 'Use um conector formal: No obstante, mi maleta no llegó.' },
        { l: 'O pedido', d: 'Solicito la … / Les ruego que …', re: '(solicito|les ruego que|le ruego que|les agradecería que|exijo)', f: 'iu', err: 'Faça o pedido: Solicito una indemnización / Les ruego que …', bad: [['\\bles ruego que (me )?(responden|envían|devuelven|pagan)\\b', 'Depois de <b>les ruego que</b>, o subjuntivo: <b>respondan</b>, <b>envíen</b>, <b>devuelvan</b>.']] },
        { l: 'A consequência', d: 'En caso contrario, me veré obligada a …', re: '(en caso contrario|de lo contrario|me veré obligad[oa])', f: 'iu', err: 'Diga o que fará: En caso contrario, me veré obligada a …' },
        { l: 'Fecho', d: 'Quedo a la espera … Atentamente', re: '(quedo a la espera|atentamente|saludos cordiales)', f: 'iu', err: 'Feche: Quedo a la espera de su respuesta. Atentamente, …' },
      ],
      modelo: 'Estimados señores: me dirijo a ustedes para manifestar mi descontento con su servicio. · El pasado 10 de marzo viajé de São Paulo a Bogotá en el vuelo 245. · No obstante, mi maleta no llegó y todavía no tengo noticias. · Les ruego que me informen dónde está y solicito una indemnización por los gastos. · En caso contrario, me veré obligada a presentar una queja formal. · Quedo a la espera de su respuesta. Atentamente, Ana Souza.',
    },
  },
  hw: 'Escreva uma reclamação formal completa (doze a quinze frases) sobre um produto ou serviço real ou imaginário, com fatos e datas, conectores formais, estilo nominal, pedido firme e consequência.',
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo. Você vai ler a reclamação de uma chilena e escrever a sua.
# Passo 1: a estrutura
@ P:Uma reclamação formal;Abertura=Me dirijo a ustedes para …;Fatos=El pasado 3 de mayo …;Problema=No obstante, … Asimismo, …;Pedido=Solicito la devolución …;Consequência=En caso contrario, …
~ Me dirijo a ustedes para manifestar mi descontento con el servicio. = Dirijo-me a vocês para manifestar a minha insatisfação com o serviço.
# Passo 2: os fatos
~ El pasado 3 de mayo adquirí un televisor en su tienda en línea. = No último dia 3 de maio adquiri uma televisão na sua loja on-line.
~ Sin embargo, el producto llegó defectuoso. = No entanto, o produto chegou com defeito.
| Recurso | Exemplo |
| data e número | el pasado 3 de mayo · pedido 48213 |
| conector formal | no obstante, asimismo, dado que |
| estilo nominal | la devolución del importe |
# Passo 3: o pedido firme
~ Solicito la devolución del importe pagado. = Solicito a devolução do valor pago.
~ Les ruego que me respondan a la mayor brevedad. = Peço que me respondam o quanto antes.
BR Firme não é grosseiro: em espanhol formal, **solicito** e **les ruego que** são fortes e educados ao mesmo tempo.
# Passo 4: a consequência e o fecho
~ En caso contrario, me veré obligada a presentar una queja formal. = Caso contrário, serei obrigada a apresentar uma reclamação formal.
~ Quedo a la espera de su respuesta. = Fico no aguardo da sua resposta.
! **Importe** é o valor pago (el importe de la factura), não "importação". E **a la mayor brevedad** = o quanto antes.
> Agora leia a reclamação da Carolina e escreva a sua.
? "Dirijo-me a vocês para": || Me dirijo a ustedes para …
? "A devolução do valor": || la devolución del importe
? "Caso contrário, serei obrigada a": || En caso contrario, me veré obligada a …
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('¿Tú o usted?',
  'V:Tú ou usted?;Tú|amigos, colegas, jovens;Usted|desconhecidos, autoridades, clientes',
  'M:O plural;Lugar|Informal|Formal;América Latina|ustedes|ustedes;Espanha|vosotros|ustedes');
V('Sería tan amable de …',
  'P:Do educado ao muito educado;Educado=¿Podría ayudarme?;Mais=¿Le importaría …?;Muito=¿Sería tan amable de …?',
  'M:Agradecer e responder;Agradecer|Responder;Le agradezco mucho.|No faltaba más.;Muy amable.|Con mucho gusto.');
V('Buenos días a todos',
  'P:A apresentação;Abrir=Quisiera agradecerles …;Estrutura=En primer lugar hablaré de …;Transição=Pasemos ahora a …;Fechar=Para concluir, …',
  'V:Apontar;Slide|Como pueden ver en esta diapositiva …;Destaque|Me gustaría destacar que …');
V('La presentación del informe',
  'M:Nominalizar;Verbo|Substantivo;presentar|la presentación;aprobar|la aprobación;aumentar|el aumento',
  'V:Informal ou formal?;Informal|Decidimos cambiar el plazo.;Formal|Se acordó la modificación del plazo.');
V('No obstante, asimismo',
  'M:Formal × comum;Comum|Formal;pero|no obstante;además|asimismo;por eso|por consiguiente',
  'V:A fin de;Mesmo sujeito|a fin de mejorar;Sujeitos diferentes|a fin de que todos estén informados');
V('Una carta de reclamación',
  'P:Uma reclamação;Abertura=Me dirijo a ustedes …;Fatos=El pasado …;Pedido=Solicito …;Consequência=En caso contrario, …',
  'M:Recursos;Recurso|Exemplo;conector formal|no obstante;estilo nominal|la devolución del importe;pedido|les ruego que respondan');
S_('¿Tú o usted?', 'le=lhe (ao senhor)|puedo hacer=posso fazer|una pregunta=uma pergunta|nos tuteamos=vamos nos tratar por você|somos colegas=somos colegas|ustedes=vocês|ya=já|comieron=comeram|buenos días=bom dia|señora Pérez=senhora Pérez|cómo está usted=como a senhora está|bien=bem|gracias=obrigada|pero=mas|por favor=por favor|tutéame=me chame de você|ya nos conocemos=já nos conhecemos|de acuerdo=combinado|y cómo estás=e como você está|muy bien=muito bem|así es más fácil=assim é mais fácil|te=te|lo=o|vosotros=vocês (Espanha)|vos=você (Rio da Prata)|tenés=você tem (voseo)|tienes=você tem|tiene=tem|comisteis=comeram (Espanha)|vos sos=você é (voseo)|de Brasil=do Brasil|no=não|me permite=me permite|su pasaporte=seu passaporte|puedes tutearme=pode me chamar de você|tú tienes=você tem|tú eres=você é|ven=venha|vení=venha (voseo)|sos=é (voseo)|tú=você|usted=o senhor|cómo está=como está');
S_('Sería tan amable de …', 'disculpe la molestia=desculpe o incômodo|sería tan amable de=faria a gentileza de|ayudarme=me ajudar|tenga la amabilidad de=tenha a bondade de|esperar=esperar|un momento=um momento|muchas gracias=muito obrigada|no faltaba más=imagina, de nada|podría decirme=poderia me dizer|dónde=onde|se renueva=se renova|el pasaporte=o passaporte|con mucho gusto=com muito prazer|es=é|en la ventanilla tres=no guichê três|sacar un turno=tirar uma senha|muchísimas gracias=muitíssimo obrigada|muy amable=muito gentil|a sus órdenes=às suas ordens|amabilidad=bondade|amado=amado|amable=gentil|amistad=amizade|con su permiso=com licença|voy a pasar=vou passar|licencia=licença (documento)|permito=permito|podría ayudarme=poderia me ajudar|le importaría ayudarme=o senhor se importaria de me ajudar|permítame que le presente a=permita-me apresentar|mi colega=minha colega|tengo que retirarme=tenho que me retirar|haga el favor de=faça o favor de|firmar aquí=assinar aqui|le agradezco mucho=agradeço muito|su ayuda=sua ajuda|encantado de conocerla=encantado em conhecê-la|podría usted=o senhor poderia|le importaría=o senhor se importaria|permítame=permita-me|le agradezco=agradeço|que sostenga la puerta=que segure a porta');
S_('Buenos días a todos', 'quisiera=gostaria|agradecerles=agradecer a vocês|a todos=a todos|su presencia=sua presença|pasemos ahora a=passemos agora a|los resultados=os resultados|como pueden ver=como vocês podem ver|en el gráfico=no gráfico|las ventas=as vendas|subieron=subiram|buenos días a todos=bom dia a todos|en primer lugar=em primeiro lugar|hablaré de=vou falar de|los objetivos=os objetivos|del proyecto=do projeto|después=depois|pasaré a=passarei a|y para concluir=e para concluir|a la propuesta=à proposta|si tienen preguntas=se tiverem perguntas|con gusto=com prazer|las responderé=responderei|al final=no final|quiero que=quero que|quisiese de=(erro) quisiese de|ya=já|hoy=hoje|pueda=possa|podéis de=(erro) podéis de|el objetivo=o objetivo|de esta presentación=desta apresentação|es mostrar=é mostrar|me gustaría destacar=gostaria de destacar|un dato importante=um dado importante|para concluir=para concluir|propongo=proponho|tres medidas=três medidas|muchas gracias por su atención=muito obrigada pela atenção|alguna pregunta=alguma pergunta|por último=por último|como pueden ver en esta diapositiva=como podem ver neste slide|me gustaría destacar que=gostaria de destacar que|en resumen=em resumo|les agradezco=agradeço a vocês|lámina=slide|charla=palestra|quisiera agradecer=gostaria de agradecer');
S_('La presentación del informe', 'la presentación del informe=a apresentação do relatório|será=será|el lunes=na segunda-feira|se ha decidido=decidiu-se|aplazar=adiar|la reunión=a reunião|cabe destacar=vale destacar|el aumento=o aumento|de las ventas=das vendas|cómo escribo esto=como eu escrevo isso|en el acta=na ata|decidimos que=decidimos que|vamos a cambiar=vamos mudar|el plazo=o prazo|mejor=melhor|se acordó=acordou-se|la modificación del plazo=a modificação do prazo|y=e|tenemos que revisar=temos que revisar|el presupuesto=o orçamento|resulta necesaria=faz-se necessária|la revisión del presupuesto=a revisão do orçamento|presentar=apresentar|presentada=apresentada|decidida=decidida|decidió=decidiu|vale=vale|cabría de=(erro) cabría de|conviene=convém|revisar=revisar|los datos=os dados|antes de la entrega=antes da entrega|la empresa=a empresa|llevó a cabo=realizou|una evaluación interna=uma avaliação interna|la presentación=a apresentação|la aprobación=a aprovação|el aplazamiento=o adiamento|aprobar=aprovar|aumentar=aumentar|decidimos cambiar el plazo=decidimos mudar o prazo|cabe destacar que=vale destacar que|resulta necesario=faz-se necessário|hacer=fazer|realizar=realizar|llevar a cabo=realizar|tener=ter|contar con=dispor de|anunciar=anunciar|dar a conocer=divulgar|revisar los gastos=revisar os gastos|vamos a cambiar el horario=vamos mudar o horário|vamos a contratar=vamos contratar|a dos personas=duas pessoas|se recomienda=recomenda-se');
S_('No obstante, asimismo', 'el proyecto=o projeto|es viable=é viável|no obstante=no entanto|requiere=requer|más inversión=mais investimento|asimismo=do mesmo modo|se recomienda=recomenda-se|contratar=contratar|a un especialista=um especialista|dado que=dado que|el plazo=o prazo|es corto=é curto|conviene=convém|empezar ya=começar já|cómo uno=como eu ligo|estas dos ideas=estas duas ideias|en el informe=no relatório|es barato=é barato|pero=mas|es lento=é lento|puedes escribir=você pode escrever|es económico=é econômico|presenta=apresenta|tiempos de entrega=prazos de entrega|largos=longos|y para añadir=e para acrescentar|otra ventaja=outra vantagem|usa=use|el proveedor=o fornecedor|ofrece=oferece|garantía=garantia|obstáculo=obstáculo|obstante que=(erro) obstante que|dando=dando|dada=dada|a fin de que=a fim de que|todos=todos|estén informados=estejam informados|estén=estejam|están=estão|estarán=estarão|en cuanto al presupuesto=quanto ao orçamento|todavía no hay acuerdo=ainda não há acordo|por consiguiente=por conseguinte|se aplazará la entrega=a entrega será adiada|se enviará un resumen=será enviado um resumo|en definitiva=em suma|pero=mas|además=além disso|por eso=por isso|con respecto a=com relação a|puesto que=já que|ya que=já que|a fin de mejorar el servicio=a fim de melhorar o serviço|en suma=em suma|en conclusión=em conclusão|así mismo=desse mesmo jeito|sin embargo=no entanto|igualmente=igualmente|por lo tanto=portanto|de ahí que=daí que|en lo que se refiere a=no que se refere a|debido a=devido a|en cuanto a=quanto a|a fin de=a fim de');
S_('Una carta de reclamación', 'me dirijo a ustedes=dirijo-me a vocês|para manifestar=para manifestar|mi descontento=minha insatisfação|con el servicio=com o serviço|solicito=solicito|la devolución=a devolução|del importe pagado=do valor pago|en caso contrario=caso contrário|me veré obligada a=serei obrigada a|presentar=apresentar|una queja formal=uma reclamação formal|ya respondieron=já responderam|a tu reclamación=à sua reclamação|todavía no=ainda não|les escribí=escrevi para eles|hace dos semanas=há duas semanas|escríbeles=escreva para eles|otra vez=de novo|más formal=mais formal|y menciona=e mencione|la oficina del consumidor=o órgão de defesa do consumidor|buena idea=boa ideia|acudir a=recorrer a|descontente=descontente|desconfianza=desconfiança|devolver=devolver|devuelta=devolvida|contrário=(erro) contrário|contra=contra|el pasado 3 de mayo=no último dia 3 de maio|adquirí=adquiri|un televisor=uma televisão|en su tienda en línea=na sua loja on-line|sin embargo=no entanto|el producto=o produto|llegó defectuoso=chegou com defeito|les ruego que=peço que|me respondan=me respondam|a la mayor brevedad=o quanto antes|quedo a la espera de=fico no aguardo de|su respuesta=sua resposta|estimados señores=prezados senhores|no obstante=no entanto|asimismo=do mesmo modo|la sustitución del producto=a troca do produto|atentamente=atenciosamente|el importe=o valor|de la factura=da nota|en relación con=em relação a|el pedido número=o pedido número|48213=48213|una lavadora=uma máquina de lavar|según=segundo|su página web=seu site|el plazo de entrega=o prazo de entrega|era de=era de|cinco días hábiles=cinco dias úteis|tres semanas después=três semanas depois|al instalarla=ao instalá-la|comprobé que=verifiquei que|la puerta=a porta|no cerraba=não fechava|correctamente=corretamente|dado que=dado que|la lavadora=a máquina de lavar|está en garantía=está na garantia|me puse en contacto con=entrei em contato com|su servicio de atención al cliente=seu serviço de atendimento ao cliente|en dos ocasiones=em duas ocasiões|sin recibir respuesta=sem receber resposta|por consiguiente=por conseguinte|o=ou|en su defecto=na falta disso|al Servicio Nacional del Consumidor=ao Serviço Nacional do Consumidor|Carolina Muñoz=Carolina Muñoz|con su servicio=com seu serviço|el pasado 10 de marzo=no último dia 10 de março|viajé=viajei|de São Paulo=de São Paulo|a Bogotá=para Bogotá|en el vuelo 245=no voo 245|mi maleta=minha mala|no llegó=não chegou|y todavía no tengo noticias=e ainda não tenho notícias|me informen=me informem|dónde está=onde está|una indemnización=uma indenização|por los gastos=pelos gastos|Ana Souza=Ana Souza|me pongo en contacto con ustedes=entro em contato com vocês|les escribo para=escrevo para vocês para|el día=no dia|además=além disso|puesto que=já que|le ruego que=peço que|les agradecería que=agradeceria se|exijo=exijo|de lo contrario=caso contrário|saludos cordiales=cordialmente|me veré obligado a=serei obrigado a');
['pérez', 'santiago', 'carolina', 'muñoz', 'bogotá', 'são', 'paulo', 'souza', 'brasil'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'es-tuusted': {
    o: 'Escolher o registro: **tú** (informal), **usted** (formal), **ustedes** no plural na América Latina, **vosotros** na Espanha, **vos** no Rio da Prata. E passar para o tú: **¿Nos tuteamos?**',
    q: 'Em qualquer primeira conversa, sobretudo no trabalho.',
    p: 'Na dúvida, comece com usted.',
  },
  'es-disculpe': {
    o: 'A cortesia formal: **Disculpe la molestia**, **¿Sería tan amable de …?**, **Tenga la amabilidad de …**, **Permítame**, **Con su permiso**, **No faltaba más**.',
    q: 'Em balcões, hotéis, consulados e escritórios.',
    p: '**No faltaba más** é "imagina, claro".',
  },
  'es-presentacion': {
    o: 'Guiar uma apresentação: **Quisiera agradecerles**, **En primer lugar hablaré de**, **Pasemos ahora a**, **Como pueden ver**, **Para concluir**, **¿Alguna pregunta?**',
    q: 'Em reuniões, aulas e congressos.',
    p: '"Slide" é **diapositiva**.',
  },
  'es-nominal': {
    o: 'O estilo nominal e impessoal: **la presentación de**, **se ha decidido**, **cabe destacar**, **conviene**, **resulta necesario**, **llevar a cabo**.',
    q: 'Em relatórios, atas e comunicados.',
    p: 'Substantivos no lugar de verbos deixam o texto formal.',
  },
  'es-noobstante': {
    o: 'Conectores formais: **no obstante**, **asimismo**, **por consiguiente**, **en cuanto a**, **dado que**, **a fin de (que)**, **en definitiva**.',
    q: 'Em textos formais e na escrita do DELE B2.',
    p: '**a fin de que** pede subjuntivo.',
  },
  'es-reclamacion': {
    o: 'Uma reclamação formal: **me dirijo a ustedes para manifestar mi descontento**, fatos com datas, conectores formais, **solicito la devolución**, **les ruego que** e **en caso contrario, me veré obligada a**.',
    q: 'Para defender os seus direitos de consumidor.',
    p: 'Junta todo o módulo num texto formal e firme.',
  },
});
Object.assign(CZH, {
  'es-tuusted': ['ao senhor', 'vocês (América)', 'voseo'],
  'es-disculpe': ['tan … de', 'tenga la …', 'licença'],
  'es-presentacion': ['gostaria', 'agora', 'vocês podem'],
  'es-nominal': ['presentar → ?', 'se ha …', 'vale destacar'],
  'es-noobstante': ['no entanto', 'dado', 'a fin de que + ?'],
  'es-reclamacion': ['insatisfação', 'devolução', 'caso contrário'],
});
Object.assign(OBJ, {
  'es-tuusted': { o: 'Escolho o registro certo conforme o país e a situação.', a: 'Você sabe quando usar tú, usted, vos e vosotros?', ref: 'Competencia sociolingüística · B2' },
  'es-disculpe': { o: 'Uso as fórmulas de cortesia formal.', a: 'Você consegue pedir algo com a máxima educação em espanhol?', ref: 'Interacción oral · B2' },
  'es-presentacion': { o: 'Conduzo uma apresentação formal.', a: 'Você consegue abrir e fechar uma apresentação em espanhol?', ref: 'Expresión oral · B2' },
  'es-nominal': { o: 'Escrevo no estilo nominal e impessoal.', a: 'Você consegue transformar uma frase informal numa frase de ata?', ref: 'Expresión escrita · B2' },
  'es-noobstante': { o: 'Uso conectores formais.', a: 'Você sabe usar no obstante, asimismo e a fin de que?', ref: 'Expresión escrita · B2' },
  'es-reclamacion': { o: 'Consigo ler e escrever uma reclamação formal.', a: 'Você consegue escrever uma reclamação firme e educada?', ref: 'Expresión escrita · B2' },
});
MOD_OBJ[25] = ['Escolho o registro certo.', 'Uso a cortesia formal e conduzo apresentações.', 'Escrevo no estilo formal com conectores.', 'Consigo escrever uma reclamação formal.'];

ES_MODS.push({ lv: 'B2', n: 'Registro formal', l: ['es-tuusted', 'es-disculpe', 'es-presentacion', 'es-nominal', 'es-noobstante', 'es-reclamacion'] });
