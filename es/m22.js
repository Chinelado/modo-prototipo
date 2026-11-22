// Espanhol · B1 · Módulo 22 · Tu opinión y DELE B1 (A sua opinião e a prova DELE B1). Formato de es/curso.js.
// A lição da prova DELE B1 usa as durações da tabela oficial "Estructura y duración de los exámenes DELE 2020" do Instituto Cervantes
// (70 + 40 + 60 + 15 min, mais 15 de preparação) e a regra de pontuação dos manuais de preparação (dois grupos, mínimo de 30 em cada).
// Conferido em 22/11/2026. O formato pode mudar: confirmar no site do Instituto Cervantes antes de atualizar.

NL('es-argumentar', {
  de: 'En primer lugar …', pt: 'Organizar um argumento', gt: 'en primer lugar, además, por otro lado, por ejemplo, es decir, no solo … sino también, por lo tanto, en conclusión',
  gx: 'No B1, uma opinião bem organizada vale mais do que uma opinião longa. Os organizadores mostram o caminho: en primer lugar (em primeiro lugar), además (além disso), por otro lado, por ejemplo, es decir (ou seja), no solo … sino también (não só … mas também), por lo tanto (portanto), en conclusión.',
  ge: 'En primer lugar, el transporte público es más barato.=Em primeiro lugar, o transporte público é mais barato.|No solo es más barato, sino también más ecológico.=Não só é mais barato, mas também mais ecológico.|Por lo tanto, deberíamos usarlo más.=Portanto, deveríamos usá-lo mais.',
  v: 'en primer lugar=em primeiro lugar=1️⃣|en segundo lugar=em segundo lugar=2️⃣|además=além disso=➕|por otro lado=por outro lado=↔️|por ejemplo=por exemplo=📌|es decir=ou seja=🟰|no solo … sino también=não só … mas também=➕➕|por lo tanto=portanto=➡️|en conclusión=em conclusão=🏁|argumento=argumento=🧩',
  x: 'ecológico=ecológico|contaminación=poluição|transporte público=transporte público|bicicleta=bicicleta|salud=saúde|ahorrar=economizar|ciudadanos=cidadãos|medida=medida|propuesta=proposta|beneficio=benefício',
  dlg: '¿Cómo empiezo mi texto de opinión?=Como eu começo o meu texto de opinião?|Presenta el tema y di tu opinión. Después, en primer lugar, el primer argumento.=Apresente o tema e diga a sua opinião. Depois, em primeiro lugar, o primeiro argumento.|¿Y para añadir otro?=E para acrescentar outro?|Usa "además" o "por otro lado", y termina con "en conclusión".=Use "además" ou "por otro lado", e termine com "en conclusión".',
  cz: 'En primer ___, el transporte es más barato.=lugar=lugares=sitio|No solo es barato, ___ también ecológico.=sino=si no=pero|Por lo ___, deberíamos usarlo más.=tanto=tan=cuanto',
  whys: 'em primeiro lugar: en primer lugar|não só … mas também: sino|portanto: por lo tanto',
  pts: 'Abrir: Hoy en día … / Mucha gente piensa que … / En mi opinión, …|Ordenar: en primer lugar, en segundo lugar, por último. Somar: además, también, no solo … sino también.|Explicar e exemplificar: es decir, o sea (falado), por ejemplo, como …|Concluir: por lo tanto, por eso, en conclusión, en resumen, para terminar.',
  ex: 'Además, ayuda a reducir la contaminación.=Além disso, ajuda a reduzir a poluição.|Por ejemplo, en Bogotá hay ciclovías los domingos.=Por exemplo, em Bogotá há ciclovias aos domingos.|Es decir, todos salimos ganando.=Ou seja, todos saímos ganhando.|En conclusión, es una buena medida.=Em conclusão, é uma boa medida.',
  bd: ['No_solo=C^não só|es_más_barato,=V|sino_también=C^mas também: sino, junto|más_ecológico.=A', 'Não só é mais barato, mas também mais ecológico.'],
  rule: 'argumentar',
  hw: 'Escreva um parágrafo de opinião (oito a dez frases) sobre um tema da sua cidade, com en primer lugar, además, por ejemplo, no solo … sino también e en conclusión.',
  deep: `
Hoje começa o último módulo do B1. Você aprende a **organizar um argumento**, a base da escrita do DELE B1.
# Passo 1: ordenar
@ P:O caminho do texto;Abrir=En mi opinión, …;1=En primer lugar, …;2=Además, …;Exemplo=Por ejemplo, …;Fechar=En conclusión, …
~ En primer lugar, el transporte público es más barato. = Em primeiro lugar, o transporte público é mais barato.
~ Además, ayuda a reducir la contaminación. = Além disso, ajuda a reduzir a poluição.
# Passo 2: no solo … sino también
@ F:Somar com força;no solo^v|…, sino también^p;No solo es barato,|sino también ecológico.
~ No solo es más barato, sino también más ecológico. = Não só é mais barato, mas também mais ecológico.
BR O nosso "não só … **mas** também" vira **sino** também. **Sino** (junto) corrige ou completa; **si no** (separado) é "se não".
# Passo 3: explicar e exemplificar
| Em espanhol | Em português |
| es decir | ou seja |
| o sea (falado) | ou seja |
| por ejemplo | por exemplo |
~ Por ejemplo, en Bogotá hay ciclovías los domingos. = Por exemplo, em Bogotá há ciclovias aos domingos.
~ Es decir, todos salimos ganando. = Ou seja, todos saímos ganhando.
# Passo 4: concluir
| Em espanhol | Em português |
| por lo tanto | portanto |
| en conclusión | em conclusão |
| para terminar | para terminar |
~ Por lo tanto, deberíamos usarlo más. = Portanto, deveríamos usá-lo mais.
~ En conclusión, es una buena medida. = Em conclusão, é uma boa medida.
! **Por lo tanto** e **en conclusión** fecham; não os use no começo do texto. E **además** leva acento.
> Treine agora: defenda em três frases o uso da bicicleta na cidade, com en primer lugar, además e por lo tanto.
? "Em primeiro lugar": || en primer lugar
? "Não só … mas também": || no solo … sino también
? "Portanto": || por lo tanto
`,
});

NL('es-ventajas', {
  de: 'Ventajas y desventajas', pt: 'Pesar vantagens e desvantagens', gt: 'la ventaja / el inconveniente es que · lo bueno / lo malo es que · tiene sus pros y sus contras · por un lado … por otro …',
  gx: 'Para pesar os dois lados: La ventaja es que … / El inconveniente (a desvantagem) es que …; Lo bueno es que … / Lo malo es que …; Tiene sus pros y sus contras. E para concluir: A pesar de todo, … / Al fin y al cabo, … (no fim das contas).',
  ge: 'La ventaja es que puedes trabajar desde cualquier lugar.=A vantagem é que você pode trabalhar de qualquer lugar.|El inconveniente es que te sientes más solo.=A desvantagem é que você se sente mais sozinho.|Al fin y al cabo, depende de cada persona.=No fim das contas, depende de cada pessoa.',
  v: 'ventaja=vantagem=👍|desventaja=desvantagem=👎|inconveniente=inconveniente, desvantagem=⚠️|lo bueno=o lado bom=😊|lo malo=o lado ruim=😕|pros y contras=prós e contras=⚖️|a pesar de=apesar de=↔️|al fin y al cabo=no fim das contas=🏁|compensar=compensar=⚖️|valer la pena=valer a pena=✅',
  x: 'vivir en el campo=morar no campo|vivir en la ciudad=morar na cidade|redes sociales=redes sociais|trabajo remoto=trabalho remoto|tranquilidad=tranquilidade|ruido=barulho|oportunidades=oportunidades|aislamiento=isolamento|comodidad=comodidade|flexibilidad=flexibilidade',
  dlg: '¿Te mudarías al campo?=Você se mudaria para o campo?|Tiene sus pros y sus contras. Lo bueno es la tranquilidad.=Tem os seus prós e contras. O lado bom é a tranquilidade.|¿Y lo malo?=E o lado ruim?|Que hay menos oportunidades de trabajo. A pesar de todo, me gustaría probar.=Que tem menos oportunidades de trabalho. Apesar de tudo, eu gostaria de experimentar.',
  cz: 'La ___ es que puedes trabajar desde casa. (vantagem)=ventaja=vantaja=ventaje|Lo ___ es que te sientes solo. (o lado ruim)=malo=mal=mala|Al fin y al ___, depende de cada uno.=cabo=final=fin',
  whys: 'vantagem: ventaja|lo + adjetivo: lo malo|no fim das contas: al fin y al cabo',
  pts: 'Vantagem: la ventaja es que …, lo bueno es que …, lo mejor es que …|Desvantagem: el inconveniente / la desventaja es que …, lo malo es que …, lo peor es que …|Os dois lados: tiene sus pros y sus contras; por un lado …, por otro (lado) …|Pesar: a pesar de (todo / los inconvenientes), …; al fin y al cabo, …; vale la pena / no compensa.',
  ex: 'Lo bueno es que hay más flexibilidad.=O lado bom é que tem mais flexibilidade.|A pesar de los inconvenientes, vale la pena.=Apesar das desvantagens, vale a pena.|Por un lado es cómodo; por otro, es caro.=Por um lado é confortável; por outro, é caro.|Para mí, no compensa.=Para mim, não compensa.',
  bd: ['La_ventaja=S^vantagem|es_que=V^é que: introduz o argumento|puedes_trabajar_desde_cualquier_lugar.=V', 'A vantagem é que você pode trabalhar de qualquer lugar.'],
  rule: 'ventajas',
  hw: 'Escolha um tema (morar sozinho, trabalho remoto, redes sociais) e escreva três vantagens e três desvantagens, com formas variadas, e uma conclusão com al fin y al cabo.',
  deep: `
Hoje você aprende a **pesar vantagens e desvantagens**: o raciocínio de quase todo texto de opinião.
# Passo 1: a vantagem
@ P:O lado bom;Vantagem=La ventaja es que …;Lado bom=Lo bueno es que …;O melhor=Lo mejor es que …
~ La ventaja es que puedes trabajar desde cualquier lugar. = A vantagem é que você pode trabalhar de qualquer lugar.
~ Lo bueno es que hay más flexibilidad. = O lado bom é que tem mais flexibilidade.
# Passo 2: a desvantagem
| Em espanhol | Em português |
| el inconveniente es que | a desvantagem é que |
| lo malo es que | o lado ruim é que |
| lo peor es que | o pior é que |
~ El inconveniente es que te sientes más solo. = A desvantagem é que você se sente mais sozinho.
BR **inconveniente** em espanhol é sobretudo "desvantagem, problema": el gran **inconveniente** es el precio.
# Passo 3: os dois lados
~ Por un lado es cómodo; por otro, es caro. = Por um lado é confortável; por outro, é caro.
~ Tiene sus pros y sus contras. = Tem os seus prós e contras.
# Passo 4: pesar e concluir
| Em espanhol | Em português |
| a pesar de todo | apesar de tudo |
| al fin y al cabo | no fim das contas |
| vale la pena / no compensa | vale a pena / não compensa |
~ A pesar de los inconvenientes, vale la pena. = Apesar das desvantagens, vale a pena.
~ Al fin y al cabo, depende de cada persona. = No fim das contas, depende de cada pessoa.
! **lo bueno**, **lo malo** (com **lo**) são "o lado bom", "o lado ruim": a ideia, não uma coisa. Nunca "el bueno es que".
> Treine agora: diga uma vantagem e uma desvantagem de morar numa cidade grande.
? "A vantagem é que": || La ventaja es que …
? "O lado ruim é que": || Lo malo es que …
? "No fim das contas": || al fin y al cabo
`,
});

NL('es-matizar', {
  de: 'Hasta cierto punto', pt: 'Matizar a opinião', gt: 'hasta cierto punto, en cierto modo, no del todo · es cierto que …, pero … · puede que + subjuntivo · a mi parecer',
  gx: 'No B1, você não precisa concordar ou discordar 100 %: pode matizar. Hasta cierto punto (até certo ponto), en cierto modo (de certa forma), no del todo (não totalmente). Para conceder e rebater: Es cierto que …, pero … E para dúvida: Puede que tengas razón (pode ser que você tenha razão).',
  ge: 'Estoy de acuerdo hasta cierto punto.=Concordo até certo ponto.|Es cierto que es caro, pero la calidad es excelente.=É verdade que é caro, mas a qualidade é excelente.|Puede que tengas razón.=Pode ser que você tenha razão.',
  v: 'hasta cierto punto=até certo ponto=📏|en cierto modo=de certa forma=🌓|no del todo=não totalmente=🙃|es cierto que=é verdade que=✅|puede que=pode ser que=🤔|a mi parecer=a meu ver=👀|matizar=matizar, relativizar=🎨|exagerar=exagerar=🔊|generalizar=generalizar=🌐|depende=depende=⚖️',
  x: 'siempre=sempre|nunca=nunca|todos=todos|nadie=ninguém|la mayoría=a maioria|algunos=alguns|a veces=às vezes|en general=em geral|en algunos casos=em alguns casos|en parte=em parte',
  dlg: 'Los jóvenes de hoy no leen nada.=Os jovens de hoje não leem nada.|Bueno, eso es exagerar un poco. Es cierto que leen menos libros, pero leen mucho en internet.=Bom, isso é exagerar um pouco. É verdade que leem menos livros, mas leem muito na internet.|Hasta cierto punto tienes razón.=Até certo ponto você tem razão.|Y puede que lean de otra manera, no menos.=E pode ser que leiam de outra maneira, não menos.',
  cz: 'Estoy de acuerdo hasta ___ punto.=cierto=certo=cierta|Es ___ que es caro, pero vale la pena.=cierto=certo=verdad|Puede que ___ razón. (tener, tú)=tengas=tienes=tendrás',
  whys: 'até certo ponto: hasta cierto punto|é verdade que: es cierto que|puede que + subjuntivo',
  pts: 'Graus: totalmente de acuerdo → de acuerdo → hasta cierto punto / en parte → no del todo → en absoluto.|Conceder e rebater: Es cierto que …, pero … / Tienes razón en que …, sin embargo …|Dúvida: puede que, es posible que + subjuntivo: Puede que tengas razón. Quizás + subjuntivo ou indicativo.|Contra a generalização: Eso es generalizar. No todos … / En algunos casos sí, pero …',
  ex: 'No estoy del todo de acuerdo.=Não concordo totalmente.|En cierto modo, los dos tienen razón.=De certa forma, os dois têm razão.|Eso es generalizar: no todos los jóvenes son iguales.=Isso é generalizar: nem todos os jovens são iguais.|A mi parecer, depende del contexto.=A meu ver, depende do contexto.',
  bd: ['Es_cierto_que=C^concede|es_caro,=V|pero=C^rebate|la_calidad_es_excelente.=V', 'É verdade que é caro, mas a qualidade é excelente.'],
  rule: 'matizar',
  hw: 'Responda a quatro generalizações ("Todos os políticos mentem", "Os jovens não leem"…) matizando: concorde em parte, conceda com es cierto que … pero e use puede que.',
  deep: `
Hoje você aprende a **matizar**: concordar em parte, conceder e rebater. É o que distingue uma opinião madura.
# Passo 1: os graus
@ P:Do sim ao não;Total=totalmente de acuerdo;Parcial=hasta cierto punto;Pouco=no del todo;Nada=en absoluto
~ Estoy de acuerdo hasta cierto punto. = Concordo até certo ponto.
~ No estoy del todo de acuerdo. = Não concordo totalmente.
# Passo 2: conceder e rebater
@ F:Conceder e rebater;Es cierto que …^v|, pero …^p;Es cierto que es caro,|pero la calidad es excelente.
~ Es cierto que es caro, pero la calidad es excelente. = É verdade que é caro, mas a qualidade é excelente.
BR Conceder antes de rebater é a técnica mais elegante de discordar: você mostra que ouviu o outro.
# Passo 3: a dúvida
| Em espanhol | Depois vem |
| puede que | subjuntivo |
| es posible que | subjuntivo |
| quizás | subjuntivo ou indicativo |
~ Puede que tengas razón. = Pode ser que você tenha razão.
~ En cierto modo, los dos tienen razón. = De certa forma, os dois têm razão.
# Passo 4: contra a generalização
~ Eso es generalizar: no todos los jóvenes son iguales. = Isso é generalizar: nem todos os jovens são iguais.
~ A mi parecer, depende del contexto. = A meu ver, depende do contexto.
! "Nem todos" é **no todos** (e não "ni todos"). E **en absoluto** é "de jeito nenhum", não "absolutamente".
> Treine agora: responda matizando a "Las redes sociales son malas".
? "Até certo ponto": || hasta cierto punto
? "Pode ser que você tenha razão": || Puede que tengas razón.
? "Nem todos": || no todos
`,
});

NL('es-debate', {
  de: 'En un debate', pt: 'Participar de um debate', gt: 'pedir a palavra, interromper com educação, retomar, contra-argumentar e resumir',
  gx: 'Num debate, além da opinião, você precisa de frases para gerir a conversa: pedir a palavra (¿Puedo decir algo?), interromper com educação (Perdona que te interrumpa, pero …), retomar (Como decía, …), contra-argumentar (Eso no es del todo cierto) e resumir (O sea, que …).',
  ge: 'Perdona que te interrumpa, pero eso no es del todo cierto.=Desculpe interromper, mas isso não é totalmente verdade.|Déjame terminar, por favor.=Me deixe terminar, por favor.|Como decía antes, el problema es el precio.=Como eu dizia antes, o problema é o preço.',
  v: 'debate=debate=🗣️|interrumpir=interromper=✋|perdona que te interrumpa=desculpe interromper=🙏|déjame terminar=me deixe terminar=⏳|como decía=como eu dizia=🔁|volviendo a=voltando a=↩️|en eso tienes razón=nisso você tem razão=✅|no es del todo cierto=não é totalmente verdade=🙅|o sea, que=ou seja=🟰|en resumen=em resumo=📋',
  x: 'turno=vez|tema=tema|argumento=argumento|contraargumento=contra-argumento|moderador=moderador|público=público|punto de vista=ponto de vista|ejemplo=exemplo|dato=dado|conclusión=conclusão',
  dlg: 'Yo creo que hay que prohibir los autos en el centro.=Eu acho que é preciso proibir os carros no centro.|Perdona que te interrumpa, pero ¿y las personas que trabajan allí?=Desculpe interromper, mas e as pessoas que trabalham lá?|Déjame terminar. Como decía, habría más buses y ciclovías.=Me deixe terminar. Como eu dizia, haveria mais ônibus e ciclovias.|En eso tienes razón, pero hace falta un buen plan.=Nisso você tem razão, mas é preciso um bom plano.',
  cz: 'Perdona que te ___, pero no es cierto. (interromper)=interrumpa=interrumpo=interrumpe|___ terminar, por favor. (me deixe)=Déjame=Dejame=Déjeme a|Como ___ antes, el problema es el precio. (eu dizia)=decía=dije=digo',
  whys: 'perdona que + subjuntivo|imperativo + me: déjame|retomar: imperfecto',
  pts: 'Pedir a palavra: ¿Puedo decir algo? / Quería añadir que … / Una cosa: …|Interromper e defender a vez: Perdona que te interrumpa, pero … / Déjame terminar. / Un momento, que no he terminado.|Retomar e contra-argumentar: Como decía, … / Volviendo a lo de antes, … / Eso no es del todo cierto. / En eso tienes razón, pero …|Resumir e checar: O sea, que … / Si te entiendo bien, … / En resumen, …',
  ex: '¿Puedo decir algo?=Posso dizer uma coisa?|Volviendo a lo de antes, ¿quién lo pagaría?=Voltando ao que falamos antes, quem pagaria isso?|O sea, que estás en contra.=Ou seja, você é contra.|Si te entiendo bien, propones más buses.=Se eu te entendi bem, você propõe mais ônibus.',
  bd: ['Perdona_que=V^desculpa: pede subjuntivo|te_interrumpa,=V^subjuntivo de interrumpir|pero_eso_no_es_del_todo_cierto.=C', 'Desculpe interromper, mas isso não é totalmente verdade.'],
  rule: 'debate',
  hw: 'Escreva um debate curto (dez falas) entre duas pessoas sobre um tema polêmico, usando pelo menos seis frases de gestão da conversa (interromper, retomar, conceder, resumir).',
  deep: `
Hoje você aprende as **frases de debate**: como entrar, interromper, defender a sua vez e resumir.
# Passo 1: pedir a palavra
| Em espanhol | Em português |
| ¿Puedo decir algo? | Posso dizer uma coisa? |
| Quería añadir que … | Queria acrescentar que … |
~ ¿Puedo decir algo? = Posso dizer uma coisa?
# Passo 2: interromper e defender a vez
@ V:A vez de falar;Interromper|Perdona que te interrumpa, pero …;Defender a vez|Déjame terminar, por favor.
~ Perdona que te interrumpa, pero eso no es del todo cierto. = Desculpe interromper, mas isso não é totalmente verdade.
~ Déjame terminar, por favor. = Me deixe terminar, por favor.
BR **Perdona que** pede subjuntivo: perdona que te **interrumpa**. Com usted: **perdone** que le **interrumpa**.
# Passo 3: retomar e contra-argumentar
~ Como decía antes, el problema es el precio. = Como eu dizia antes, o problema é o preço.
~ Volviendo a lo de antes, ¿quién lo pagaría? = Voltando ao que falamos antes, quem pagaria isso?
@ P:Contra-argumentar;Conceder=En eso tienes razón, pero …;Negar=Eso no es del todo cierto.;Perguntar=¿Y qué pasa con …?
# Passo 4: resumir e checar
| Em espanhol | Em português |
| O sea, que … | Ou seja, … |
| Si te entiendo bien, … | Se eu te entendi bem, … |
| En resumen, … | Em resumo, … |
~ O sea, que estás en contra. = Ou seja, você é contra.
~ Si te entiendo bien, propones más buses. = Se eu te entendi bem, você propõe mais ônibus.
! **lo de antes** = "aquilo de antes", "o que falamos antes". O **lo de** + palavra resume um assunto: lo del trabajo, lo de ayer.
> Treine agora: interrompa com educação alguém que diz "El fútbol es aburrido" e dê o seu argumento.
? "Desculpe interromper": || Perdona que te interrumpa.
? "Me deixe terminar": || Déjame terminar.
? "Ou seja, você é contra": || O sea, que estás en contra.
`,
});

NL('es-deleb1', {
  de: 'El examen DELE B1', pt: 'Como é a prova DELE B1', gt: 'estrutura da prova · estratégias',
  gx: 'O DELE B1 é o diploma oficial de espanhol do nível B1, do Instituto Cervantes. Tem quatro provas: Comprensión de lectura (70 minutos), Comprensión auditiva (40 minutos), Expresión e interacción escritas (60 minutos) e Expresión e interacción orales (15 minutos, mais 15 de preparação). No total, 3 horas e 20 minutos.',
  ge: 'La prueba de lectura dura setenta minutos.=A prova de leitura dura setenta minutos.|En la prueba oral tienes quince minutos para prepararte.=Na prova oral você tem quinze minutos para se preparar.|Hay que aprobar los dos grupos.=É preciso passar nos dois grupos.',
  v: 'prueba=prova, parte do exame=📄|tarea=tarefa=✅|comprensión de lectura=compreensão de leitura=📖|comprensión auditiva=compreensão auditiva=🎧|expresión escrita=expressão escrita=✍️|expresión oral=expressão oral=🗣️|preparación=preparação=⏱️|apto=aprovado=🎉|grupo=grupo=👥|calificación=nota=🔢',
  x: 'diploma=diploma|examinador=examinador|candidato=candidato|hoja de respuestas=folha de respostas|modelo de examen=simulado|instrucciones=instruções|monólogo=monólogo|fotografía=fotografia|correo=e-mail|texto de opinión=texto de opinião',
  dlg: '¿Qué tal te fue en el DELE B1?=Como foi o DELE B1?|Bien, aunque la lectura fue larga: setenta minutos.=Bem, embora a leitura tenha sido longa: setenta minutos.|¿Y la prueba oral?=E a prova oral?|Tuve quince minutos para prepararme y después hablé con la examinadora.=Tive quinze minutos para me preparar e depois falei com a examinadora.',
  cz: 'La prueba de lectura dura ___ minutos. (70)=setenta=sesenta=cuarenta|Tienes ___ minutos para prepararte. (15)=quince=cinco=cincuenta|Hay que aprobar los dos ___.=grupos=pruebas=días',
  whys: 'leitura: 70 minutos|preparação da oral: 15 minutos|dois grupos, mínimo em cada',
  pts: 'Quatro provas: Comprensión de lectura (70 min), Comprensión auditiva (40 min), Expresión e interacción escritas (60 min), Expresión e interacción orales (15 min, mais 15 de preparação). Total: 3 h 20 min.|Leitura e audição: textos e gravações mais longos que no A2 (notícias, anúncios, conversas, entrevistas), com múltipla escolha e de relacionar.|Escrita: duas tarefas, em geral uma carta ou e-mail e um texto de opinião ou relato. Oral: individual, com um examinador, depois da preparação.|Pontuação: dois grupos de 50 pontos (Grupo 1: leitura + escrita; Grupo 2: audição + oral). É preciso 30 ou mais em cada grupo para ser APTO.',
  ex: 'Lee las instrucciones con atención.=Leia as instruções com atenção.|Organiza tu texto con conectores.=Organize o seu texto com conectores.|Aprovecha la preparación para tomar notas.=Aproveite a preparação para fazer anotações.|Practica con modelos de examen.=Treine com simulados.',
  bd: ['En_la_prueba_oral=L|tienes_quince_minutos=V|para_prepararte.=C^para + infinitivo + te', 'Na prova oral você tem quinze minutos para se preparar.'],
  rule: 'dele_b1',
  hw: 'Faça um minissimulado de escrita: escreva um texto de opinião (doze a quinze frases) sobre o trabalho remoto, com introdução, dois argumentos organizados, um contra-argumento e conclusão, em no máximo 30 minutos.',
  deep: `
Hoje você conhece a prova **DELE B1** do Instituto Cervantes. Ela mostra o que um B1 consegue fazer: ler e ouvir textos reais, escrever com organização e conversar com segurança.
# Passo 1: as quatro provas
@ P:DELE B1, de cima a baixo;Lectura=70 minutos;Auditiva=40 minutos;Escritas=60 minutos;Orales=15 minutos + 15 de preparação
~ La prueba de lectura dura setenta minutos. = A prova de leitura dura setenta minutos.
! Durações conferidas na tabela oficial do Instituto Cervantes (DELE 2020): 3 h 20 min no total. O formato pode mudar: antes de se inscrever, confira sempre no site oficial.
# Passo 2: leitura, audição e escrita
| Prova | O que é |
| Comprensión de lectura | textos mais longos: notícias, anúncios, cartas, artigos |
| Comprensión auditiva | conversas, entrevistas, notícias de rádio |
| Expresión escrita | duas tarefas: uma carta ou e-mail e um texto de opinião ou relato |
~ Organiza tu texto con conectores. = Organize o seu texto com conectores.
BR Na escrita do B1, a **organização** conta muito: en primer lugar, además, sin embargo, en conclusión. É o que você treinou neste módulo.
# Passo 3: a prova oral e a nota
| Parte | Como é |
| Expresión oral | individual, com um examinador, depois de 15 minutos de preparação |
| Grupo 1 | leitura + escrita: 50 pontos |
| Grupo 2 | audição + oral: 50 pontos |
| Para ser APTO | 30 pontos ou mais em cada grupo |
~ En la prueba oral tienes quince minutos para prepararte. = Na prova oral você tem quinze minutos para se preparar.
~ Hay que aprobar los dos grupos. = É preciso passar nos dois grupos.
# Passo 4: estratégias
| Estratégia | Por quê |
| Use a preparação para anotar palavras-chave. | Você fala melhor com um roteiro. |
| Organize cada texto com conectores. | A coerência pesa na nota. |
| Treine com cronômetro. | 70 minutos de leitura passam rápido. |
~ Aprovecha la preparación para tomar notas. = Aproveite a preparação para fazer anotações.
~ Practica con modelos de examen. = Treine com simulados.
> Treine agora: fale em voz alta, por dois minutos, sobre "Ventajas y desventajas de vivir en una ciudad grande".
? Quanto dura a leitura? || 70 minutos
? Quanto tempo de preparação na oral? || 15 minutos
? Quantos pontos em cada grupo para ser APTO? || 30 ou mais
`,
});

NL('es-ensayo', {
  de: 'Un texto de opinión', pt: 'Ler e escrever um texto de opinião', gt: 'introdução, argumentos organizados, contra-argumento, conclusão',
  gx: 'Um texto de opinião junta tudo do módulo: a introdução (Hoy en día, … En mi opinión, …), os argumentos organizados (En primer lugar, … Además, …), as vantagens e desvantagens, um contra-argumento matizado (Es cierto que …, pero …) e a conclusão (En conclusión, …).',
  ge: 'Hoy en día, muchas empresas permiten el trabajo remoto.=Hoje em dia, muitas empresas permitem o trabalho remoto.|Es cierto que algunas personas se sienten solas, pero hay soluciones.=É verdade que algumas pessoas se sentem sozinhas, mas há soluções.|En conclusión, creo que el modelo híbrido es el mejor.=Em conclusão, acho que o modelo híbrido é o melhor.',
  v: 'texto de opinión=texto de opinião=📝|introducción=introdução=🚪|párrafo=parágrafo=¶|tesis=tese=🎯|argumento=argumento=🧩|contraargumento=contra-argumento=↩️|conclusión=conclusão=🏁|hoy en día=hoje em dia=📅|modelo híbrido=modelo híbrido=🔀|productividad=produtividade=📈',
  x: 'empresa=empresa|empleados=funcionários|desplazamiento=deslocamento|conciliar=conciliar|vida familiar=vida familiar|reuniones=reuniões|aislamiento=isolamento|comunicación=comunicação|confianza=confiança|equilibrio=equilíbrio',
  dlg: '¿Cómo te fue con el texto de opinión?=Como foi o texto de opinião?|Bien. Puse la tesis en la introducción y dos argumentos.=Bem. Coloquei a tese na introdução e dois argumentos.|¿Y el contraargumento?=E o contra-argumento?|Sí: "Es cierto que …, pero …". Y terminé con "en conclusión".=Sim: "É verdade que …, mas …". E terminei com "em conclusão".',
  cz: '___ en día, muchas empresas permiten el teletrabajo.=Hoy=Hoje=Ahora|Es ___ que algunos se sienten solos, pero hay soluciones.=cierto=certo=claro que|Por todo ___, defiendo el modelo híbrido.=ello=eso=lo',
  whys: 'hoje em dia: hoy en día|conceder: es cierto que|por tudo isso: por todo ello',
  pts: 'Introdução: o tema + a sua tese: Hoy en día, … En mi opinión, …|Desenvolvimento: dois ou três argumentos com organizadores (en primer lugar, además, por otro lado) e exemplos.|Contra-argumento matizado: Es cierto que …, pero … / Aunque …, …|Conclusão: retome a tese: En conclusión, … / Por todo ello, …',
  ex: 'En primer lugar, se ahorra tiempo de desplazamiento.=Em primeiro lugar, economiza-se tempo de deslocamento.|Además, es más fácil conciliar la vida familiar.=Além disso, é mais fácil conciliar a vida familiar.|Por todo ello, defiendo el modelo híbrido.=Por tudo isso, defendo o modelo híbrido.|Aunque no es perfecto, tiene más ventajas que inconvenientes.=Embora não seja perfeito, tem mais vantagens do que desvantagens.',
  bd: ['Es_cierto_que=C^concede|algunas_personas_se_sienten_solas,=V|pero_hay_soluciones.=C^rebate', 'É verdade que algumas pessoas se sentem sozinhas, mas há soluções.'],
  rule: 'ensayo',
  le: {
    texto: {
      t: '¿Trabajar desde casa? Sí, pero no siempre', kind: 'texto de opinião', voz: 'a',
      intro: 'Um texto de opinião publicado numa revista peruana. Leia e responda.',
      paras: ['Hoy en día, muchas empresas de Lima permiten trabajar desde casa algunos días por semana. En mi opinión, este modelo híbrido es la mejor solución para empresas y trabajadores.', 'En primer lugar, el trabajo remoto ahorra tiempo. En una ciudad con tanto tráfico, muchas personas pasan dos o tres horas al día en el bus. Además, es más fácil conciliar la vida familiar.', 'Por otro lado, la oficina sigue siendo importante. No solo permite resolver problemas más rápido, sino también crear confianza entre los compañeros.', 'Es cierto que algunas personas prefieren trabajar siempre en casa, pero muchas se sienten solas después de unos meses. Por eso, dos o tres días en la oficina parecen un buen equilibrio.', 'En conclusión, creo que el modelo híbrido combina lo mejor de los dos mundos. Por todo ello, las empresas deberían ofrecerlo a quienes puedan trabajar así.'],
      qs: [
        { q: 'Qual é a tese da autora?', o: ['o modelo híbrido é a melhor solução', 'todos deveriam trabalhar em casa', 'o escritório é sempre melhor'], a: 0 },
        { q: 'Qual é o primeiro argumento?', o: ['o trabalho remoto economiza tempo de deslocamento', 'o salário é maior', 'a empresa economiza energia'], a: 0 },
        { q: 'Por que o escritório continua importante?', o: ['resolve problemas mais rápido e cria confiança', 'é mais barato', 'tem internet melhor'], a: 0 },
        { q: 'Qual é o contra-argumento que ela discute?', o: ['algumas pessoas preferem trabalhar sempre em casa', 'o trânsito vai acabar', 'as empresas não confiam nos funcionários'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva o seu texto de opinião', tipo: 'form', ok: 'Texto escrito corretamente.',
      pede: 'Escreva um texto de opinião sobre "¿Deberían prohibirse los celulares en las escuelas?". Uma frase por linha.',
      campos: [
        { l: 'Introdução e tese', d: 'Hoy en día, … En mi opinión, …', re: '(hoy en día|en la actualidad|en mi opinión|creo que|desde mi punto de vista)', f: 'iu', err: 'Apresente o tema e a sua tese: Hoy en día, … En mi opinión, …' },
        { l: 'Primeiro argumento', d: 'En primer lugar, …', re: '(en primer lugar|primero|para empezar)', f: 'iu', err: 'Comece os argumentos: En primer lugar, …' },
        { l: 'Segundo argumento', d: 'Además, … / Por otro lado, …', re: '(además|por otro lado|en segundo lugar|también|no solo)', f: 'iu', err: 'Acrescente um argumento: Además, …', bad: [['(^|\\s)ademas(?!\\p{L})', '<b>además</b> leva acento.'], ['\\bno solo .* si no también\\b', 'É <b>sino</b> (junto): no solo …, <b>sino</b> también …']] },
        { l: 'Um exemplo', d: 'Por ejemplo, …', re: '(por ejemplo|como|es decir)', f: 'iu', err: 'Dê um exemplo: Por ejemplo, …' },
        { l: 'Contra-argumento', d: 'Es cierto que …, pero …', re: '(es cierto que|es verdad que|aunque|si bien|tienes razón en que)', f: 'iu', err: 'Conceda e rebata: Es cierto que …, pero …' },
        { l: 'Conclusão', d: 'En conclusión, …', re: '(en conclusión|por todo ello|en resumen|para terminar|por lo tanto)', f: 'iu', err: 'Conclua: En conclusión, …', bad: [['\\ben conclusion\\b', '<b>conclusión</b> leva acento.']] },
      ],
      modelo: 'Hoy en día, casi todos los estudiantes tienen celular. En mi opinión, no deberían prohibirse. · En primer lugar, el celular puede ser una herramienta para aprender. · Además, en caso de emergencia, los padres pueden llamar a sus hijos. · Por ejemplo, hay aplicaciones muy útiles para estudiar idiomas. · Es cierto que a veces distraen, pero se pueden usar reglas claras. · En conclusión, es mejor enseñar a usarlos bien que prohibirlos.',
    },
  },
  hw: 'Escreva um texto de opinião completo (quinze a vinte frases, em quatro parágrafos) sobre um tema atual, com introdução, dois argumentos, um contra-argumento matizado e conclusão.',
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo e o B1. Você vai ler um texto de opinião peruano e escrever o seu, no formato da prova DELE B1.
# Passo 1: a estrutura
@ P:Um texto de opinião;Introdução=Hoy en día, … En mi opinión, …;Argumentos=En primer lugar, … Además, …;Contra-argumento=Es cierto que …, pero …;Conclusão=En conclusión, …
~ Hoy en día, muchas empresas permiten el trabajo remoto. = Hoje em dia, muitas empresas permitem o trabalho remoto.
# Passo 2: os argumentos
~ En primer lugar, se ahorra tiempo de desplazamiento. = Em primeiro lugar, economiza-se tempo de deslocamento.
~ Además, es más fácil conciliar la vida familiar. = Além disso, é mais fácil conciliar a vida familiar.
| Parágrafo | O que faz |
| 1 | apresenta o tema e a tese |
| 2 e 3 | um argumento cada, com exemplo |
| 4 | contra-argumento e conclusão |
# Passo 3: o contra-argumento
~ Es cierto que algunas personas se sienten solas, pero hay soluciones. = É verdade que algumas pessoas se sentem sozinhas, mas há soluções.
~ Aunque no es perfecto, tiene más ventajas que inconvenientes. = Embora não seja perfeito, tem mais vantagens do que desvantagens.
BR Responder ao lado contrário **fortalece** a sua tese: mostra que você pensou nos dois lados antes de decidir.
# Passo 4: a conclusão
~ En conclusión, creo que el modelo híbrido es el mejor. = Em conclusão, acho que o modelo híbrido é o melhor.
~ Por todo ello, defiendo el modelo híbrido. = Por tudo isso, defendo o modelo híbrido.
! Na conclusão, **retome a tese** com outras palavras e não traga argumentos novos. **Por todo ello** = por tudo isso.
> Agora leia o texto e escreva o seu.
? "Hoje em dia": || hoy en día
? "É verdade que …, mas …": || Es cierto que …, pero …
? "Por tudo isso": || por todo ello
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('En primer lugar …',
  'P:O caminho do texto;Abrir=En mi opinión, …;1=En primer lugar, …;2=Además, …;Fechar=En conclusión, …',
  'F:Somar com força;no solo^v|…, sino también^p;No solo es barato,|sino también ecológico.');
V('Ventajas y desventajas',
  'P:O lado bom;Vantagem=La ventaja es que …;Lado bom=Lo bueno es que …;O melhor=Lo mejor es que …',
  'M:Pesar;Espanhol|Português;a pesar de todo|apesar de tudo;al fin y al cabo|no fim das contas;no compensa|não compensa');
V('Hasta cierto punto',
  'P:Do sim ao não;Total=totalmente de acuerdo;Parcial=hasta cierto punto;Pouco=no del todo;Nada=en absoluto',
  'F:Conceder e rebater;Es cierto que …^v|, pero …^p;Es cierto que es caro,|pero la calidad es excelente.');
V('En un debate',
  'V:A vez de falar;Interromper|Perdona que te interrumpa, pero …;Defender a vez|Déjame terminar.',
  'P:Contra-argumentar;Conceder=En eso tienes razón, pero …;Negar=Eso no es del todo cierto.;Resumir=O sea, que …');
V('El examen DELE B1',
  'P:DELE B1;Lectura=70 min;Auditiva=40 min;Escritas=60 min;Orales=15 min + 15',
  'M:A nota;Grupo|Provas;1|leitura + escrita;2|audição + oral;APTO|30 ou mais em cada');
V('Un texto de opinión',
  'P:Um texto de opinião;Introdução=Hoy en día, …;Argumentos=En primer lugar, …;Contra-argumento=Es cierto que …, pero …;Conclusão=En conclusión, …',
  'M:Os parágrafos;Parágrafo|O que faz;1|tema e tese;2 e 3|argumentos;4|contra-argumento e conclusão');
S_('En primer lugar …', 'el transporte público=o transporte público|es más barato=é mais barato|no solo=não só|es=é|más barato=mais barato|sino también=mas também|más ecológico=mais ecológico|por lo tanto=portanto|deberíamos usarlo más=deveríamos usá-lo mais|cómo empiezo=como eu começo|mi texto de opinión=meu texto de opinião|presenta=apresente|el tema=o tema|y di tu opinión=e diga sua opinião|después=depois|el primer argumento=o primeiro argumento|y para añadir otro=e para acrescentar outro|usa=use|o=ou|y termina con=e termine com|lugares=lugares|sitio=lugar|si no=se não|pero=mas|tan=tão|cuanto=quanto|ayuda a reducir=ajuda a reduzir|la contaminación=a poluição|en Bogotá=em Bogotá|hay=há|ciclovías=ciclovias|los domingos=aos domingos|todos=todos|salimos ganando=saímos ganhando|es una buena medida=é uma boa medida|hoy en día=hoje em dia|mucha gente piensa que=muita gente pensa que|en mi opinión=na minha opinião|por último=por último|también=também|o sea=ou seja|como=como|por eso=por isso|en resumen=em resumo|para terminar=para terminar|es barato=é barato|ecológico=ecológico|la bicicleta=a bicicleta|en la ciudad=na cidade');
S_('Ventajas y desventajas', 'la ventaja=a vantagem|es que=é que|puedes trabajar=você pode trabalhar|desde cualquier lugar=de qualquer lugar|el inconveniente=a desvantagem|te sientes=você se sente|más solo=mais sozinho|al fin y al cabo=no fim das contas|depende de=depende de|cada persona=cada pessoa|te mudarías=você se mudaria|al campo=para o campo|tiene=tem|sus pros y sus contras=seus prós e contras|lo bueno=o lado bom|es la tranquilidad=é a tranquilidade|y lo malo=e o lado ruim|que hay=que tem|menos oportunidades=menos oportunidades|de trabajo=de trabalho|a pesar de todo=apesar de tudo|me gustaría probar=eu gostaria de experimentar|vantaja=(erro) vantaja|ventaje=(erro) ventaje|lo malo=o lado ruim|mal=mal|mala=má|final=final|fin=fim|cada uno=cada um|hay más flexibilidad=tem mais flexibilidade|a pesar de los inconvenientes=apesar das desvantagens|vale la pena=vale a pena|por un lado=por um lado|es cómodo=é confortável|por otro=por outro|es caro=é caro|para mí=para mim|no compensa=não compensa|lo mejor=o melhor|lo peor=o pior|la desventaja=a desvantagem|el gran inconveniente=a grande desvantagem|es el precio=é o preço|el bueno es que=(erro) el bueno es que|desde casa=de casa|te sientes solo=você se sente sozinho');
S_('Hasta cierto punto', 'estoy de acuerdo=concordo|hasta cierto punto=até certo ponto|es cierto que=é verdade que|es caro=é caro|pero=mas|la calidad=a qualidade|es excelente=é excelente|puede que=pode ser que|tengas razón=você tenha razão|los jóvenes=os jovens|de hoy=de hoje|no leen nada=não leem nada|bueno=bom|eso es exagerar=isso é exagerar|un poco=um pouco|leen menos libros=leem menos livros|leen mucho=leem muito|en internet=na internet|tienes razón=você tem razão|y=e|lean=leiam|de otra manera=de outra maneira|no menos=não menos|certo=(erro) certo|cierta=certa|verdad=verdade|tienes=você tem|tendrás=você terá|vale la pena=vale a pena|totalmente de acuerdo=totalmente de acordo|de acuerdo=de acordo|en parte=em parte|no del todo=não totalmente|en absoluto=de jeito nenhum|tienes razón en que=você tem razão em que|sin embargo=no entanto|es posible que=é possível que|quizás=talvez|eso es generalizar=isso é generalizar|no todos=nem todos|en algunos casos sí=em alguns casos sim|no estoy del todo de acuerdo=não concordo totalmente|en cierto modo=de certa forma|los dos=os dois|tienen razón=têm razão|son iguales=são iguais|a mi parecer=a meu ver|depende del contexto=depende do contexto|ni todos=(erro) nem todos|las redes sociales=as redes sociais|son malas=são ruins');
S_('En un debate', 'perdona que te interrumpa=desculpe interromper|pero=mas|eso=isso|no es del todo cierto=não é totalmente verdade|déjame terminar=me deixe terminar|por favor=por favor|como decía antes=como eu dizia antes|el problema=o problema|es el precio=é o preço|yo creo que=eu acho que|hay que prohibir=é preciso proibir|los autos=os carros|en el centro=no centro|y las personas=e as pessoas|que trabajan allí=que trabalham lá|como decía=como eu dizia|habría=haveria|más buses=mais ônibus|y ciclovías=e ciclovias|en eso tienes razón=nisso você tem razão|hace falta=é preciso|un buen plan=um bom plano|interrumpo=interrompo|interrumpe=interrompe|dejame=(erro) dejame|déjeme a=(erro) déjeme a|dije=eu disse|digo=digo|puedo decir algo=posso dizer uma coisa|quería añadir que=queria acrescentar que|una cosa=uma coisa|un momento=um momento|que no he terminado=que eu não terminei|volviendo a lo de antes=voltando ao que falamos antes|quién lo pagaría=quem pagaria isso|o sea que=ou seja|estás en contra=você é contra|si te entiendo bien=se eu te entendi bem|propones=você propõe|en resumen=em resumo|y qué pasa con=e o que acontece com|perdone que le interrumpa=desculpe interromper (usted)|lo de antes=o que falamos antes|lo del trabajo=o assunto do trabalho|lo de ayer=o que aconteceu ontem|el fútbol es aburrido=o futebol é chato|interrumpa=interrompa');
S_('El examen DELE B1', 'la prueba de lectura=a prova de leitura|dura=dura|setenta minutos=setenta minutos|en la prueba oral=na prova oral|tienes=você tem|quince minutos=quinze minutos|para prepararte=para se preparar|hay que aprobar=é preciso passar|los dos grupos=os dois grupos|qué tal te fue=como foi|en el DELE B1=no DELE B1|bien=bem|aunque=embora|la lectura=a leitura|fue larga=foi longa|y la prueba oral=e a prova oral|tuve=tive|para prepararme=para me preparar|y después=e depois|hablé con=falei com|la examinadora=a examinadora|setenta=setenta|sesenta=sessenta|cuarenta=quarenta|quince=quinze|cinco=cinco|cincuenta=cinquenta|grupos=grupos|pruebas=provas|días=dias|lee=leia|las instrucciones=as instruções|con atención=com atenção|organiza=organize|tu texto=seu texto|con conectores=com conectores|aprovecha=aproveite|la preparación=a preparação|para tomar notas=para fazer anotações|practica=treine|con modelos de examen=com simulados|ventajas y desventajas=vantagens e desvantagens|de vivir=de morar|en una ciudad grande=numa cidade grande|DELE=DELE|B1=B1|lectura=leitura|auditiva=auditiva|escritas=escritas|orales=orais|minutos=minutos|apto=aprovado|comprensión de lectura=compreensão de leitura|comprensión auditiva=compreensão auditiva|expresión e interacción escritas=expressão e interação escritas|expresión e interacción orales=expressão e interação orais|expresión escrita=expressão escrita|expresión oral=expressão oral|grupo=grupo');
S_('Un texto de opinión', 'hoy en día=hoje em dia|muchas empresas=muitas empresas|permiten=permitem|el trabajo remoto=o trabalho remoto|es cierto que=é verdade que|algunas personas=algumas pessoas|se sienten solas=se sentem sozinhas|pero=mas|hay soluciones=há soluções|en conclusión=em conclusão|creo que=acho que|el modelo híbrido=o modelo híbrido|es el mejor=é o melhor|cómo te fue=como foi|con el texto de opinión=com o texto de opinião|bien=bem|puse=coloquei|la tesis=a tese|en la introducción=na introdução|y dos argumentos=e dois argumentos|y el contraargumento=e o contra-argumento|sí=sim|y terminé con=e terminei com|hoje=(erro) hoje|ahora=agora|el teletrabajo=o home office|en primer lugar=em primeiro lugar|se ahorra=economiza-se|tiempo de desplazamiento=tempo de deslocamento|además=além disso|es más fácil=é mais fácil|conciliar=conciliar|la vida familiar=a vida familiar|por todo ello=por tudo isso|defiendo=defendo|aunque=embora|no es perfecto=não é perfeito|tiene más ventajas que inconvenientes=tem mais vantagens do que desvantagens|en mi opinión=na minha opinião|por otro lado=por outro lado|por ejemplo=por exemplo|de Lima=de Lima|trabajar desde casa=trabalhar de casa|algunos días por semana=alguns dias por semana|este modelo híbrido=este modelo híbrido|es la mejor solución=é a melhor solução|para empresas y trabajadores=para empresas e trabalhadores|ahorra tiempo=economiza tempo|en una ciudad=numa cidade|con tanto tráfico=com tanto trânsito|muchas personas=muitas pessoas|pasan=passam|dos o tres horas=duas ou três horas|al día=por dia|en el bus=no ônibus|la oficina=o escritório|sigue siendo importante=continua sendo importante|no solo permite=não só permite|resolver problemas=resolver problemas|más rápido=mais rápido|sino también=mas também|crear confianza=criar confiança|entre los compañeros=entre os colegas|prefieren=preferem|trabajar siempre en casa=trabalhar sempre em casa|muchas=muitas|después de unos meses=depois de alguns meses|por eso=por isso|dos o tres días=dois ou três dias|en la oficina=no escritório|parecen=parecem|un buen equilibrio=um bom equilíbrio|combina=combina|lo mejor de los dos mundos=o melhor dos dois mundos|las empresas=as empresas|deberían ofrecerlo=deveriam oferecê-lo|a quienes puedan trabajar así=a quem possa trabalhar assim|casi todos los estudiantes=quase todos os estudantes|tienen celular=têm celular|no deberían prohibirse=não deveriam ser proibidos|el celular=o celular|puede ser=pode ser|una herramienta=uma ferramenta|para aprender=para aprender|en caso de emergencia=em caso de emergência|los padres=os pais|pueden llamar=podem ligar|a sus hijos=para os filhos|hay aplicaciones=há aplicativos|muy útiles=muito úteis|para estudiar idiomas=para estudar idiomas|a veces=às vezes|distraen=distraem|se pueden usar=podem-se usar|reglas claras=regras claras|es mejor=é melhor|enseñar a usarlos bien=ensinar a usá-los bem|que prohibirlos=do que proibi-los|deberían prohibirse los celulares en las escuelas=os celulares deveriam ser proibidos nas escolas|desde mi punto de vista=do meu ponto de vista|en la actualidad=atualmente|para empezar=para começar|en segundo lugar=em segundo lugar|también=também|no solo=não só|como=como|es decir=ou seja|es verdad que=é verdade que|si bien=embora|tienes razón en que=você tem razão em que|en resumen=em resumo|para terminar=para terminar|por lo tanto=portanto');
['bogotá', 'lima', 'dele', 'b1'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'es-argumentar': {
    o: 'Organizar um argumento: **en primer lugar**, **además**, **por otro lado**, **por ejemplo**, **es decir**, **no solo … sino también**, **por lo tanto**, **en conclusión**.',
    q: 'Na escrita do DELE B1, em e-mails de trabalho e em apresentações.',
    p: '"Não só … mas também" é **no solo … sino también**.',
  },
  'es-ventajas': {
    o: 'Pesar os dois lados: **la ventaja / el inconveniente es que**, **lo bueno / lo malo es que**, **tiene sus pros y sus contras**, **al fin y al cabo**.',
    q: 'Para decidir e para textos de opinião.',
    p: '**lo bueno** (com lo) é "o lado bom".',
  },
  'es-matizar': {
    o: 'Matizar: **hasta cierto punto**, **en cierto modo**, **no del todo**, **es cierto que …, pero …**, **puede que** + subjuntivo.',
    q: 'Para discordar sem brigar e para soar maduro.',
    p: 'Conceder antes de rebater é a técnica mais elegante.',
  },
  'es-debate': {
    o: 'Gerir um debate: **¿Puedo decir algo?**, **Perdona que te interrumpa**, **Déjame terminar**, **Como decía**, **En eso tienes razón, pero …**, **O sea, que …**',
    q: 'Em reuniões, aulas e discussões.',
    p: '**Perdona que** pede subjuntivo.',
  },
  'es-deleb1': {
    o: 'A prova **DELE B1**: leitura 70 min, audição 40, escrita 60, oral 15 + 15 de preparação; dois grupos de 50 pontos e **APTO** com 30 ou mais em cada.',
    q: 'Para quem quer o diploma B1, exigido em muitos processos de trabalho e estudo.',
    p: 'Formato conferido na tabela oficial do Instituto Cervantes; confirme antes de se inscrever.',
  },
  'es-ensayo': {
    o: 'Um texto de opinião: introdução com tese, argumentos organizados, contra-argumento matizado (**es cierto que …, pero …**) e conclusão (**en conclusión**, **por todo ello**).',
    q: 'Para a escrita do DELE B1 e textos de opinião em geral.',
    p: 'Fecha o B1 juntando tudo do módulo.',
  },
});
Object.assign(CZH, {
  'es-argumentar': ['em primeiro lugar', 'mas também', 'portanto'],
  'es-ventajas': ['vantagem', 'o lado ruim', 'no fim das contas'],
  'es-matizar': ['até certo ponto', 'é verdade que', 'puede que + ?'],
  'es-debate': ['perdona que + ?', 'me deixe', 'eu dizia'],
  'es-deleb1': ['leitura', 'preparação', 'APTO'],
  'es-ensayo': ['hoje em dia', 'é verdade que', 'por tudo isso'],
});
Object.assign(OBJ, {
  'es-argumentar': { o: 'Organizo um argumento com conectores.', a: 'Você consegue defender uma ideia em três frases organizadas?', ref: 'Expresión escrita · B1' },
  'es-ventajas': { o: 'Peso vantagens e desvantagens.', a: 'Você consegue dar os prós e os contras de um tema?', ref: 'Expresión oral · B1' },
  'es-matizar': { o: 'Matizo a minha opinião e concedo antes de rebater.', a: 'Você consegue concordar só em parte com alguém?', ref: 'Interacción oral · B1' },
  'es-debate': { o: 'Participo de um debate com as frases de gestão da conversa.', a: 'Você consegue interromper com educação e retomar a sua ideia?', ref: 'Interacción oral · B1' },
  'es-deleb1': { o: 'Conheço o formato da prova DELE B1.', a: 'Você sabe quais são as provas e como é a nota do DELE B1?', ref: 'DELE B1 · Instituto Cervantes' },
  'es-ensayo': { o: 'Consigo ler e escrever um texto de opinião organizado.', a: 'Você consegue escrever um texto de opinião em quatro parágrafos?', ref: 'Expresión escrita · B1' },
});
MOD_OBJ[21] = ['Organizo argumentos com conectores.', 'Peso vantagens e desvantagens e matizo.', 'Participo de um debate.', 'Conheço o DELE B1 e escrevo um texto de opinião.'];

ES_MODS.push({ lv: 'B1', n: 'Opinião e DELE B1', l: ['es-argumentar', 'es-ventajas', 'es-matizar', 'es-debate', 'es-deleb1', 'es-ensayo'] });
