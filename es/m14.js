// Espanhol · A2 · Módulo 14 · Opiniones y DELE A2 (Opiniões e a prova DELE A2). Formato de es/curso.js.
// A lição da prova DELE A2 segue a tabela oficial "Estructura y duración de los exámenes DELE 2020" do Instituto Cervantes
// (duração de cada prova) e as regras de pontuação descritas pelos manuais de preparação (dois grupos, mínimo de 30 em cada).
// Conferido em 22/11/2026. O formato pode mudar: confirmar no site do Instituto Cervantes antes de atualizar.

NL('es-creoque', {
  de: 'Creo que, no creo que', pt: 'Dar a sua opinião', gt: 'creo que / pienso que + indicativo · no creo que + subjuntivo · para mí, en mi opinión',
  gx: 'Para dar opinião: creo que, pienso que, me parece que, para mí, en mi opinión. Com o afirmativo, o verbo fica no indicativo: Creo que es una buena idea. Com o negativo, vai para o subjuntivo, como você viu com ojalá: No creo que sea una buena idea.',
  ge: 'Creo que el transporte público es caro.=Acho que o transporte público é caro.|No creo que sea una buena idea.=Não acho que seja uma boa ideia.|Para mí, lo más importante es la salud.=Para mim, o mais importante é a saúde.',
  v: 'creo que=acho que=💭|pienso que=penso que=🧠|me parece que=me parece que=🤔|para mí=para mim=🙋|en mi opinión=na minha opinião=🗨️|no creo que=não acho que=🙅|opinión=opinião=💬|idea=ideia=💡|importante=importante=❗|tener razón=ter razão=✅',
  x: 'ventaja=vantagem|desventaja=desvantagem|problema=problema|solución=solução|redes sociales=redes sociais|transporte público=transporte público|medio ambiente=meio ambiente|teletrabajo=home office|tecnología=tecnologia|educación=educação',
  dlg: '¿Qué opinas del teletrabajo?=O que você acha do home office?|Creo que tiene muchas ventajas. Ahorras tiempo.=Acho que tem muitas vantagens. Você economiza tempo.|Pues yo no creo que sea bueno para todos.=Pois eu não acho que seja bom para todo mundo.|Tienes razón, depende de la persona.=Você tem razão, depende da pessoa.',
  cz: 'Creo que ___ una buena idea. (ser)=es=sea=será que|No creo que ___ una buena idea. (ser)=sea=es=fue|___ mí, lo más importante es la salud.=Para=Por=En',
  whys: 'creo que + indicativo: es|no creo que + subjuntivo: sea|opinião: para mí',
  pts: 'Para dar opinião: creo que, pienso que, me parece que + indicativo: Creo que es caro. Me parece que tienes razón.|Para mí, … / En mi opinión, … / A mi modo de ver, … no começo da frase.|Negativo + subjuntivo: No creo que sea … / No pienso que tenga … / No me parece que esté bien.|Perguntar a opinião: ¿Qué opinas de …? ¿Qué te parece …? ¿Tú qué piensas?',
  ex: '¿Qué te parece la idea?=O que você acha da ideia?|Me parece que tienes razón.=Acho que você tem razão.|No creo que llueva hoy.=Não acho que vá chover hoje.|En mi opinión, las redes sociales tienen ventajas y desventajas.=Na minha opinião, as redes sociais têm vantagens e desvantagens.',
  bd: ['No_creo_que=V^opinião negativa: pede subjuntivo|sea=V^subjuntivo de ser|una_buena_idea.=A', 'Não acho que seja uma boa ideia.'],
  rule: 'opinion',
  hw: 'Dê a sua opinião sobre três temas (home office, redes sociais, transporte público) em duas frases cada: uma com creo que e outra com no creo que.',
  deep: `
Hoje começa o último módulo do A2. Você aprende a **dar a sua opinião** e a perguntar a opinião dos outros.
# Passo 1: creo que, pienso que
@ P:Dar opinião;Acho que=Creo que …;Penso que=Pienso que …;Me parece que=Me parece que …;Para mim=Para mí, …
~ Creo que el transporte público es caro. = Acho que o transporte público é caro.
~ Me parece que tienes razón. = Acho que você tem razão.
# Passo 2: perguntar
| Em espanhol | Em português |
| ¿Qué opinas de …? | O que você acha de …? |
| ¿Qué te parece …? | O que você acha de …? |
| ¿Tú qué piensas? | E você, o que pensa? |
~ ¿Qué te parece la idea? = O que você acha da ideia?
~ ¿Qué opinas del teletrabajo? = O que você acha do home office?
# Passo 3: no creo que + subjuntivo
@ V:Afirmativo × negativo;Afirmativo (indicativo)|Creo que es buena idea.;Negativo (subjuntivo)|No creo que sea buena idea.
~ No creo que sea una buena idea. = Não acho que seja uma boa ideia.
~ No creo que llueva hoy. = Não acho que vá chover hoje.
BR O português faz igual: "acho que **é**" e "não acho que **seja**". Confie no seu ouvido de brasileiro.
# Passo 4: ojo, brasileño: "acho que"
| Português | Espanhol |
| acho que | creo que |
| achar (encontrar) | encontrar |
| O que você acha? | ¿Qué te parece? / ¿Qué opinas? |
~ Para mí, lo más importante es la salud. = Para mim, o mais importante é a saúde.
! O nosso "acho que" é **creo que**. **Hallar** existe, mas é "encontrar": nunca "hallo que" para dar opinião.
> Treine agora: dê a sua opinião sobre o home office, a favor e contra.
? "Acho que é caro": || Creo que es caro.
? "Não acho que seja boa ideia": || No creo que sea buena idea.
? "O que você acha?": || ¿Qué te parece?
`,
});

NL('es-acuerdo', {
  de: 'Estoy de acuerdo', pt: 'Concordar e discordar', gt: 'estoy de acuerdo · tienes razón · no estoy de acuerdo · depende · sí, pero …',
  gx: 'Para concordar: Estoy de acuerdo (contigo), Tienes razón, Claro, Exacto. Para discordar com educação: No estoy de acuerdo, Yo no lo veo así, Sí, pero … E para ficar no meio: Depende, En parte sí. Atenção: em espanhol se diz estoy de acuerdo, com estar.',
  ge: 'Estoy de acuerdo contigo.=Concordo com você.|No estoy de acuerdo con esa idea.=Não concordo com essa ideia.|Sí, pero también hay que pensar en el precio.=Sim, mas também é preciso pensar no preço.',
  v: 'estar de acuerdo=concordar=🤝|tienes razón=você tem razão=✅|exacto=exatamente=🎯|claro=claro=👍|depende=depende=⚖️|en parte=em parte=🌓|yo no lo veo así=eu não vejo assim=🙅|al contrario=pelo contrário=🔄|sin embargo=no entanto=↔️|discutir=discutir, debater=🗣️',
  x: 'argumento=argumento|punto de vista=ponto de vista|debate=debate|a favor=a favor|en contra=contra|totalmente=totalmente|para nada=de jeito nenhum|quizás=talvez|desde luego=sem dúvida|por supuesto=com certeza',
  dlg: 'Creo que hay que prohibir los celulares en las escuelas.=Acho que é preciso proibir os celulares nas escolas.|Estoy de acuerdo en parte. Distraen mucho.=Concordo em parte. Distraem muito.|¿En parte?=Em parte?|Sí, pero también son útiles para buscar información.=Sim, mas também são úteis para pesquisar informação.',
  cz: '___ de acuerdo contigo.=Estoy=Soy=Tengo|Tienes ___. (razão)=razón=rasón=razones|No estoy de acuerdo ___ esa idea.=con=de=en',
  whys: 'acuerdo com estar|ter razão: tener razón|de acuerdo con',
  pts: 'Concordar: Estoy de acuerdo (contigo / con eso). Tienes razón. Claro. Exacto. Por supuesto.|Discordar com educação: No estoy de acuerdo. Yo no lo veo así. No sé, yo creo que … Sí, pero …|No meio: Depende. En parte sí. Estoy de acuerdo en parte.|de acuerdo + con (pessoa, ideia) / en (ponto): Estoy de acuerdo con Ana en eso.',
  ex: 'Por supuesto, estoy totalmente de acuerdo.=Com certeza, concordo totalmente.|Yo no lo veo así.=Eu não vejo assim.|Depende de la situación.=Depende da situação.|Tienes toda la razón.=Você tem toda a razão.',
  bd: ['Estoy_de_acuerdo=V^estar de acuerdo: concordar|contigo.=C^con + ti = contigo', 'Concordo com você.'],
  rule: 'acuerdo',
  hw: 'Leia três opiniões polêmicas (por exemplo: "as férias deveriam ser mais longas") e responda a cada uma concordando, discordando ou ficando no meio, com um argumento.',
  deep: `
Hoje você aprende a **concordar e discordar** com educação, essencial em reuniões, debates e na prova oral.
# Passo 1: concordar
@ P:Concordar;Neutro=Estoy de acuerdo.;Forte=Totalmente de acuerdo.;Com a pessoa=Tienes razón.;Curto=¡Exacto!
~ Estoy de acuerdo contigo. = Concordo com você.
~ Tienes toda la razón. = Você tem toda a razão.
# Passo 2: discordar com educação
| Mais direto | Mais suave |
| No estoy de acuerdo. | Yo no lo veo así. |
| Al contrario. | Sí, pero … |
~ No estoy de acuerdo con esa idea. = Não concordo com essa ideia.
~ Yo no lo veo así. = Eu não vejo assim.
# Passo 3: ficar no meio
~ Depende de la situación. = Depende da situação.
~ Sí, pero también hay que pensar en el precio. = Sim, mas também é preciso pensar no preço.
@ M:No meio;Em espanhol|Em português;depende|depende;en parte sí|em parte, sim;estoy de acuerdo en parte|concordo em parte
# Passo 4: ojo, brasileño: estar de acuerdo
| Português | Espanhol |
| concordo | estoy de acuerdo |
| você tem razão | tienes razón |
| com você | contigo |
~ Por supuesto, estoy totalmente de acuerdo. = Com certeza, concordo totalmente.
! "Concordar" em espanhol é **estar de acuerdo**; **concordar** existe, mas é para a gramática (o adjetivo concorda com o substantivo). E "com você" é **contigo**.
> Treine agora: concorde com uma opinião e discorde de outra, sempre com um argumento.
? "Concordo com você": || Estoy de acuerdo contigo.
? "Você tem razão": || Tienes razón.
? "Eu não vejo assim": || Yo no lo veo así.
`,
});

NL('es-aunque', {
  de: 'Aunque, sin embargo', pt: 'Conectores: contraste e argumento', gt: 'aunque, pero, sin embargo · además, también · por eso, así que · por un lado … por otro …',
  gx: 'Para organizar ideias e argumentos, use conectores. Contraste: aunque (embora, mesmo que), pero, sin embargo (no entanto). Soma: además (além disso), también. Consequência: por eso, así que. E para ver os dois lados: por un lado … por otro (lado) …',
  ge: 'Aunque es caro, vale la pena.=Embora seja caro, vale a pena.|El hotel es bonito; sin embargo, está lejos.=O hotel é bonito; no entanto, fica longe.|Por un lado es práctico, por otro es caro.=Por um lado é prático, por outro é caro.',
  v: 'aunque=embora, mesmo que=🔀|pero=mas=↔️|sin embargo=no entanto=⚖️|además=além disso=➕|también=também=➕|por eso=por isso=➡️|así que=então=➡️|por un lado=por um lado=◀️|por otro lado=por outro lado=▶️|en conclusión=em conclusão=🏁',
  x: 'ventaja=vantagem|desventaja=desvantagem|práctico=prático|caro=caro|lejos=longe|cerca=perto|ruidoso=barulhento|cómodo=confortável|rápido=rápido|barato=barato',
  dlg: '¿Te gusta vivir en el centro?=Você gosta de morar no centro?|Por un lado, sí: todo está cerca.=Por um lado, sim: tudo fica perto.|¿Y por otro?=E por outro?|Por otro, es muy ruidoso. Además, los alquileres son caros.=Por outro, é muito barulhento. Além disso, os aluguéis são caros.',
  cz: '___ es caro, vale la pena. (embora)=Aunque=Pero=Además|El hotel es bonito; sin ___, está lejos.=embargo=embargue=embarco|___, los alquileres son caros. (além disso)=Además=Aunque=Sin embargo',
  whys: 'contraste no começo: aunque|no entanto: sin embargo|soma: además',
  pts: 'Contraste: aunque (no começo ou no meio), pero (no meio), sin embargo (entre frases, com ponto e vírgula ou ponto).|Soma: además, también, y. Além disso = además (com acento no a final).|Consequência: por eso, así que: Llovía, así que nos quedamos en casa.|Os dois lados: por un lado …, por otro (lado) … E para fechar: en conclusión, en resumen.',
  ex: 'Llovía, así que nos quedamos en casa.=Estava chovendo, então ficamos em casa.|Además, los alquileres son caros.=Além disso, os aluguéis são caros.|Trabajo mucho; por eso estoy cansada.=Trabalho muito; por isso estou cansada.|En conclusión, vale la pena.=Em conclusão, vale a pena.',
  bd: ['Aunque=C^contraste: embora|es_caro,=V|vale_la_pena.=V', 'Embora seja caro, vale a pena.'],
  rule: 'conectores',
  hw: 'Escreva um pequeno texto (oito frases) com vantagens e desvantagens de morar numa cidade grande, usando por un lado, por otro, además, aunque, sin embargo e en conclusión.',
  deep: `
Hoje você aprende os **conectores** que organizam um argumento. Eles fazem um texto de A2 soar muito mais maduro.
# Passo 1: contraste
@ M:Contraste;Em espanhol|Em português;aunque|embora, mesmo que;pero|mas;sin embargo|no entanto
~ Aunque es caro, vale la pena. = Embora seja caro, vale a pena.
~ El hotel es bonito; sin embargo, está lejos. = O hotel é bonito; no entanto, fica longe.
# Passo 2: soma e consequência
| Função | Conector |
| somar | además, también |
| consequência | por eso, así que |
| concluir | en conclusión, en resumen |
~ Además, los alquileres son caros. = Além disso, os aluguéis são caros.
~ Llovía, así que nos quedamos en casa. = Estava chovendo, então ficamos em casa.
# Passo 3: os dois lados
@ P:Argumentar;Lado 1=Por un lado, es práctico.;Lado 2=Por otro, es caro.;Fecho=En conclusión, vale la pena.
~ Por un lado es práctico, por otro es caro. = Por um lado é prático, por outro é caro.
~ En conclusión, vale la pena. = Em conclusão, vale a pena.
# Passo 4: ojo, brasileño: aunque + indicativo
| Português | Espanhol |
| embora seja caro | aunque es caro |
| embora chova | aunque llueve |
~ Trabajo mucho; por eso estoy cansada. = Trabalho muito; por isso estou cansada.
! O nosso "embora" pede subjuntivo; **aunque** com um fato real pede **indicativo**: aunque **es** caro. E **además** leva acento.
> Treine agora: dê um lado bom e um lado ruim do lugar onde você mora.
? "Embora seja caro": || Aunque es caro.
? "No entanto": || sin embargo
? "Além disso": || además
`,
});

NL('es-noticias', {
  de: 'Las noticias', pt: 'Entender e comentar notícias', gt: 'manchetes no presente e no indefinido · según · ha habido · ¿Viste que …?',
  gx: 'As notícias usam o indefinido para fatos (El Gobierno anunció …), o pretérito perfecto para fatos de hoje (Ha habido un accidente) e o presente nas manchetes (Suben los precios). Para comentar: ¿Viste que …? (você viu que …?), Según el periódico … (segundo o jornal …), ¡No me digas! (não me diga!).',
  ge: 'Según el periódico, suben los precios del transporte.=Segundo o jornal, os preços do transporte vão subir.|Ha habido un accidente en la autopista.=Houve um acidente na rodovia.|¿Viste que ganó la selección?=Você viu que a seleção ganhou?',
  v: 'noticias=notícias=📰|periódico=jornal=🗞️|titular=manchete=🔠|según=segundo, de acordo com=📢|anunciar=anunciar=📣|subir=subir, aumentar=📈|bajar=baixar, cair=📉|ha habido=houve=❗|gobierno=governo=🏛️|selección=seleção=⚽',
  x: 'presidente=presidente|elecciones=eleições|economía=economia|precios=preços|huelga=greve|accidente=acidente|terremoto=terremoto|inundación=enchente|deportes=esportes|cultura=cultura',
  dlg: '¿Viste las noticias? Suben otra vez los precios del transporte.=Você viu as notícias? Os preços do transporte vão subir de novo.|¡No me digas! ¿Cuánto?=Não me diga! Quanto?|Según la radio, un diez por ciento.=Segundo o rádio, dez por cento.|¡Qué barbaridad! Así no se puede.=Que absurdo! Assim não dá.',
  cz: '___ el periódico, suben los precios. (segundo)=Según=Segundo=Por|Ha ___ un accidente en la autopista. (houve)=habido=hubo=hay|¿Viste que ___ la selección? (ganhar)=ganó=ganaba=gana',
  whys: 'segundo (fonte): según|ha + habido|fato concluído: ganó',
  pts: 'Manchetes no presente, para dar vida: Suben los precios. Llega el invierno. Gana Argentina.|Fatos: indefinido (El Gobierno anunció …, Ganó la selección) ou pretérito perfecto para hoje (Ha habido un accidente).|A fonte: según el periódico, según la radio, según los expertos.|Comentar: ¿Viste que …? ¡No me digas! ¡Qué bien! ¡Qué barbaridad! ¡Qué pena!',
  ex: 'El Gobierno anunció nuevas medidas.=O governo anunciou novas medidas.|Hay huelga de metro mañana.=Tem greve do metrô amanhã.|¡Qué pena!=Que pena!|Según los expertos, va a llover mucho.=Segundo os especialistas, vai chover muito.',
  bd: ['Según_el_periódico,=C^según: a fonte|suben=V^presente na manchete|los_precios_del_transporte.=S', 'Segundo o jornal, os preços do transporte vão subir.'],
  rule: 'noticias',
  hw: 'Escolha três notícias desta semana e escreva cada uma em duas frases: a manchete (no presente) e um comentário seu (con según, creo que, ¡qué …!).',
  deep: `
Hoje você aprende a **entender e comentar notícias**: manchetes, fatos e reações.
# Passo 1: as manchetes
@ P:Manchetes no presente;Economia=Suben los precios.;Clima=Llega el invierno.;Esporte=Gana la selección.
~ Según el periódico, suben los precios del transporte. = Segundo o jornal, os preços do transporte vão subir.
BR A manchete em espanhol usa muito o **presente**, como no Brasil: "Sobem os preços", "Chega o inverno".
# Passo 2: os fatos
| Tempo | Exemplo |
| indefinido | El Gobierno anunció nuevas medidas. |
| perfecto (hoje) | Ha habido un accidente. |
| presente | Hay huelga de metro mañana. |
~ Ha habido un accidente en la autopista. = Houve um acidente na rodovia.
~ El Gobierno anunció nuevas medidas. = O governo anunciou novas medidas.
# Passo 3: comentar
| Em espanhol | Em português |
| ¿Viste que …? | Você viu que …? |
| ¡No me digas! | Não me diga! |
| ¡Qué barbaridad! | Que absurdo! |
| ¡Qué pena! | Que pena! |
~ ¿Viste que ganó la selección? = Você viu que a seleção ganhou?
~ ¡Qué pena! = Que pena!
# Passo 4: ojo, brasileño: según
| Português | Espanhol |
| segundo o jornal | según el periódico |
| de acordo com os especialistas | según los expertos |
| houve | hubo / ha habido |
~ Según los expertos, va a llover mucho. = Segundo os especialistas, vai chover muito.
! A fonte é **según** (e não "segundo", que em espanhol só é o número ordinal: el **segundo** día).
> Treine agora: conte uma notícia de hoje e reaja a ela.
? "Segundo o jornal": || según el periódico
? "Houve um acidente": || Ha habido un accidente.
? "Não me diga!": || ¡No me digas!
`,
});

NL('es-delea2', {
  de: 'El examen DELE A2', pt: 'Como é a prova DELE A2', gt: 'estrutura da prova · estratégias',
  gx: 'O DELE A2 é o diploma oficial de espanhol do nível A2, do Instituto Cervantes. Tem quatro provas: Comprensión de lectura (60 minutos), Comprensión auditiva (40 minutos), Expresión e interacción escritas (45 minutos) e Expresión e interacción orales (12 minutos, mais 12 de preparação). No total, 2 horas e 49 minutos.',
  ge: 'El examen tiene cuatro pruebas.=A prova tem quatro partes.|Hay que aprobar los dos grupos.=É preciso passar nos dois grupos.|La prueba oral es individual.=A prova oral é individual.',
  v: 'examen=prova, exame=📝|prueba=prova, parte do exame=📄|tarea=tarefa=✅|comprensión de lectura=compreensão de leitura=📖|comprensión auditiva=compreensão auditiva=🎧|expresión escrita=expressão escrita=✍️|expresión oral=expressão oral=🗣️|preparación=preparação=⏱️|apto=aprovado=🎉|calificación=nota=🔢',
  x: 'diploma=diploma|candidato=candidato|examinador=examinador|hoja de respuestas=folha de respostas|instrucciones=instruções|selección múltiple=múltipla escolha|grupo=grupo|puntos=pontos|no apto=reprovado|modelo de examen=simulado',
  dlg: 'Quiero presentarme al DELE A2.=Quero prestar o DELE A2.|¡Buena idea! ¿Sabes cuánto dura?=Boa ideia! Você sabe quanto tempo dura?|Casi tres horas, con la prueba oral.=Quase três horas, com a prova oral.|¿Y la prueba oral es en pareja?=E a prova oral é em dupla?',
  cz: 'La prueba de lectura dura sesenta ___.=minutos=horas=días|La prueba oral es ___. (individual)=individual=en pareja=en grupo|Hay que aprobar los dos ___.=grupos=pruebas=días',
  whys: 'leitura: 60 minutos|oral: individual, com examinador|dois grupos, mínimo em cada',
  pts: 'Quatro provas: Comprensión de lectura (60 min), Comprensión auditiva (40 min), Expresión e interacción escritas (45 min), Expresión e interacción orales (12 min, mais 12 de preparação). Total: 2 h 49 min.|Leitura e audição: tarefas com textos e gravações curtas do dia a dia (avisos, mensagens, anúncios, conversas), com respostas de múltipla escolha ou de relacionar.|Escrita: duas tarefas, uma de interação (responder a uma mensagem ou e-mail) e outra de expressão (um texto curto sobre você, a sua rotina ou uma experiência). Oral: individual, com um examinador.|Pontuação: dois grupos, cada um com 50 pontos. Grupo 1: leitura + escrita. Grupo 2: audição + oral. É preciso pelo menos 30 pontos em cada grupo para ser APTO.',
  ex: 'Lee las instrucciones con atención.=Leia as instruções com atenção.|Responde a todas las preguntas.=Responda a todas as perguntas.|Cuenta las palabras de tu texto.=Conte as palavras do seu texto.|Practica con un cronómetro.=Treine com cronômetro.',
  bd: ['Hay_que=V^regra geral: é preciso|aprobar=V^passar (na prova)|los_dos_grupos.=OA', 'É preciso passar nos dois grupos.'],
  rule: 'dele_a2',
  hw: 'Faça um minissimulado de escrita: responda a um e-mail de um amigo que pergunta sobre o seu fim de semana (oito a dez frases, com o indefinido), em no máximo 20 minutos.',
  deep: `
Hoje você conhece a prova **DELE A2** do Instituto Cervantes, o diploma oficial de espanhol do nível A2. Mesmo que você não vá fazer a prova, ela mostra o que um A2 consegue fazer.
# Passo 1: as quatro provas
@ P:DELE A2, de cima a baixo;Lectura=60 minutos;Auditiva=40 minutos;Escritas=45 minutos;Orales=12 minutos + 12 de preparação
~ El examen tiene cuatro pruebas. = A prova tem quatro partes.
! Durações conferidas na tabela oficial do Instituto Cervantes (DELE 2020): 2 h 49 min no total. O formato pode mudar: antes de se inscrever, confira sempre no site oficial.
# Passo 2: leitura, audição e escrita
| Prova | O que é |
| Comprensión de lectura | textos curtos do dia a dia: avisos, mensagens, anúncios |
| Comprensión auditiva | gravações de conversas, avisos e mensagens |
| Expresión escrita | duas tarefas: responder a uma mensagem e escrever um texto curto |
~ Lee las instrucciones con atención. = Leia as instruções com atenção.
BR Na escrita, o enunciado diz **o que** você precisa contar. Cumprir cada ponto pedido conta muito: é o que você treinou nas lições de "Ler e escrever".
# Passo 3: a prova oral e a nota
| Parte | Como é |
| Expresión oral | individual, com um examinador, depois de 12 minutos de preparação |
| Grupo 1 | leitura + escrita: 50 pontos |
| Grupo 2 | audição + oral: 50 pontos |
| Para ser APTO | 30 pontos ou mais em cada grupo |
~ La prueba oral es individual. = A prova oral é individual.
~ Hay que aprobar los dos grupos. = É preciso passar nos dois grupos.
# Passo 4: estratégias
| Estratégia | Por quê |
| Leia as instruções com atenção. | Muitos erros vêm de não entender o que se pede. |
| Responda a tudo. | Resposta em branco não pontua. |
| Use a preparação da prova oral. | São 12 minutos para organizar as ideias. |
| Treine com cronômetro. | 60 minutos de leitura passam rápido. |
~ Responde a todas las preguntas. = Responda a todas as perguntas.
~ Practica con un cronómetro. = Treine com cronômetro.
> Treine agora: responda em voz alta, em dois minutos: "Habla de tu rutina y de tu fin de semana".
? Quantas provas tem o DELE A2? || quatro
? Quantos pontos em cada grupo para ser APTO? || 30 ou mais
? A prova oral é em dupla? || Não: é individual.
`,
});

NL('es-foro', {
  de: 'Un comentario en un foro', pt: 'Ler e escrever um comentário num fórum', gt: 'opinião, acordo e desacordo, conectores e conclusão',
  gx: 'Um comentário num fórum junta tudo do módulo: a opinião (Creo que …), a resposta a outro participante (Estoy de acuerdo con Lucas, pero …), os argumentos com conectores (Por un lado … por otro … Además …) e a conclusão (En conclusión, …).',
  ge: 'Estoy de acuerdo con Lucas, pero no en todo.=Concordo com o Lucas, mas não em tudo.|Por un lado, el teletrabajo ahorra tiempo.=Por um lado, o home office economiza tempo.|En conclusión, creo que lo mejor es combinar las dos cosas.=Em conclusão, acho que o melhor é combinar as duas coisas.',
  v: 'foro=fórum=💬|comentario=comentário=🗨️|participante=participante=👤|responder=responder=↩️|tema=tema=📌|argumento=argumento=🧩|combinar=combinar=🔗|equilibrio=equilíbrio=⚖️|experiencia=experiência=🧭|saludos=saudações=👋',
  x: 'teletrabajo=home office|oficina=escritório|compañeros=colegas|ahorrar=economizar|aislado=isolado|horario flexible=horário flexível|productividad=produtividade|distracciones=distrações|híbrido=híbrido|por mi parte=da minha parte',
  dlg: '¿Leíste el debate del foro sobre el teletrabajo?=Você leu o debate do fórum sobre home office?|Sí, y escribí un comentario.=Sim, e escrevi um comentário.|¿Y qué dijiste?=E o que você disse?|Que estoy de acuerdo en parte, pero que lo mejor es combinar.=Que concordo em parte, mas que o melhor é combinar.',
  cz: '___ de acuerdo con Lucas, pero no en todo.=Estoy=Soy=Concuerdo|___ un lado, ahorra tiempo.=Por=Para=De|En ___, lo mejor es combinar.=conclusión=conclusion=resumo',
  whys: 'concordar: estar de acuerdo|por un lado|en conclusión (com acento)',
  pts: 'Responda a alguém: Estoy de acuerdo con … / No estoy de acuerdo con … / Como dice Lucas, …|Dê a sua opinião: Creo que … / En mi opinión, … / No creo que … (+ subjuntivo).|Argumente com conectores: Por un lado … Por otro … Además … Sin embargo … Por ejemplo …|Conclua: En conclusión, … / En resumen, … e despeça-se: Saludos.',
  ex: 'Como dice Lucas, se ahorra mucho tiempo.=Como diz o Lucas, economiza-se muito tempo.|Sin embargo, a veces me siento aislada.=No entanto, às vezes me sinto isolada.|Por ejemplo, yo trabajo tres días en casa.=Por exemplo, eu trabalho três dias em casa.|En resumen, depende de cada persona.=Em resumo, depende de cada pessoa.',
  bd: ['En_conclusión,=C^fecha o argumento|creo_que=V^opinião: indicativo|lo_mejor_es_combinar.=S', 'Em conclusão, acho que o melhor é combinar.'],
  rule: 'foro',
  le: {
    texto: {
      t: 'Foro: ¿Teletrabajo sí o no?', kind: 'fórum', voz: 'b',
      intro: 'Num fórum de uma revista argentina, as pessoas discutem o home office. Leia a pergunta e os dois comentários, e responda.',
      paras: ['Pregunta del foro: ¿Es mejor trabajar desde casa o en la oficina? Cuéntennos su experiencia.', 'Lucas, Buenos Aires: Para mí, el teletrabajo es lo mejor. Ahorro dos horas de transporte al día y trabajo más tranquilo. Además, puedo almorzar con mi familia.', 'Sofía, Rosario: Estoy de acuerdo con Lucas en parte. Por un lado, es cómodo. Por otro, a veces me siento aislada y extraño a mis compañeros.', 'Sofía, Rosario: Sin embargo, no creo que la oficina sea la solución. En mi empresa trabajamos tres días en casa y dos en la oficina, y funciona muy bien.', 'Sofía, Rosario: En conclusión, creo que lo mejor es combinar las dos cosas. Saludos.'],
      qs: [
        { q: 'Quanto tempo o Lucas economiza por dia?', o: ['duas horas de transporte', 'meia hora', 'quatro horas'], a: 0 },
        { q: 'Qual é o problema do home office para a Sofía?', o: ['às vezes ela se sente isolada', 'a internet é ruim', 'ela trabalha mais'], a: 0 },
        { q: 'Como funciona a empresa da Sofía?', o: ['três dias em casa e dois no escritório', 'só no escritório', 'só em casa'], a: 0 },
        { q: 'Qual é a conclusão da Sofía?', o: ['o melhor é combinar as duas coisas', 'o escritório é melhor', 'o home office é sempre melhor'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva o seu comentário', tipo: 'form', ok: 'Comentário escrito corretamente.',
      pede: 'Responda no fórum: é melhor trabalhar (ou estudar) em casa ou fora? Uma frase por linha.',
      campos: [
        { l: 'Resposta a alguém', d: 'Estoy de acuerdo con … / No estoy de acuerdo con …', re: '(estoy de acuerdo|no estoy de acuerdo|como dice|tienes razón|tiene razón)', f: 'iu', err: 'Responda a outro participante: Estoy de acuerdo con Sofía.', bad: [['\\b(soy|tengo) de acuerdo\\b', 'Com acuerdo, use <b>estar</b>: <b>estoy</b> de acuerdo.'], ['\\bconcuerdo con\\b', 'O natural é <b>estoy de acuerdo con</b> …']] },
        { l: 'Opinião', d: 'Creo que … / En mi opinión, …', re: '(creo que|pienso que|me parece que|en mi opinión|para mí)', f: 'iu', err: 'Dê a sua opinião: Creo que …', bad: [['\\bacho que\\b', 'Isso é português. Em espanhol: <b>creo que</b>.']] },
        { l: 'Um lado', d: 'Por un lado, …', re: '(por un lado|por una parte)', f: 'iu', err: 'Mostre um lado: Por un lado, es cómodo.' },
        { l: 'O outro lado', d: 'Por otro, … / Sin embargo, …', re: '(por otro|por otra parte|sin embargo|pero)', f: 'iu', err: 'Mostre o outro lado: Por otro, me siento aislada.' },
        { l: 'Mais um argumento', d: 'Además, … / Por ejemplo, …', re: '(además|también|por ejemplo|aunque)', f: 'iu', err: 'Acrescente um argumento: Además, …', bad: [['\\bademas\\b', '<b>además</b> leva acento.']] },
        { l: 'Conclusão', d: 'En conclusión, …', re: '(en conclusión|en resumen|por eso|así que)', f: 'iu', err: 'Conclua: En conclusión, lo mejor es combinar.', bad: [['\\ben conclusion\\b', '<b>conclusión</b> leva acento.']] },
      ],
      modelo: 'Estoy de acuerdo con Sofía en parte. · Creo que trabajar en casa es muy cómodo. · Por un lado, ahorro mucho tiempo. · Por otro, a veces me distraigo mucho. · Además, extraño a mis compañeros. · En conclusión, lo mejor es combinar las dos cosas.',
    },
  },
  hw: 'Escreva um comentário completo (oito a dez frases) num fórum sobre um tema que você escolher (redes sociais, transporte, estudar idiomas on-line), com resposta a alguém, opinião, os dois lados e conclusão.',
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo e o A2. Você vai ler um debate num fórum argentino e escrever o seu comentário.
# Passo 1: a estrutura
@ P:Um comentário de fórum;Resposta=Estoy de acuerdo con Lucas …;Opinião=Creo que …;Dois lados=Por un lado … Por otro …;Conclusão=En conclusión, …
~ Estoy de acuerdo con Lucas, pero no en todo. = Concordo com o Lucas, mas não em tudo.
~ Como dice Lucas, se ahorra mucho tiempo. = Como diz o Lucas, economiza-se muito tempo.
# Passo 2: os argumentos
~ Por un lado, el teletrabajo ahorra tiempo. = Por um lado, o home office economiza tempo.
~ Sin embargo, a veces me siento aislada. = No entanto, às vezes me sinto isolada.
| Conector | Para quê |
| por un lado / por otro | os dois lados |
| además, por ejemplo | mais um argumento |
| sin embargo, aunque | contraste |
# Passo 3: a sua experiência
~ Por ejemplo, yo trabajo tres días en casa. = Por exemplo, eu trabalho três dias em casa.
BR Um exemplo da sua vida deixa o argumento muito mais forte. É o que a Sofía faz quando fala da empresa dela.
| Em espanhol | Em português |
| en mi caso | no meu caso |
| por mi parte | da minha parte |
| en mi empresa | na minha empresa |
# Passo 4: a conclusão
~ En conclusión, creo que lo mejor es combinar las dos cosas. = Em conclusão, acho que o melhor é combinar as duas coisas.
~ En resumen, depende de cada persona. = Em resumo, depende de cada pessoa.
! Termine com uma frase clara: **En conclusión** / **En resumen**, e a sua posição. Num fórum, despedir-se com **Saludos** é o suficiente.
> Agora leia o debate e escreva o seu comentário.
? "Concordo com o Lucas": || Estoy de acuerdo con Lucas.
? "Por um lado … por outro": || Por un lado … por otro …
? "Em conclusão": || En conclusión.
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('Creo que, no creo que',
  'P:Dar opinião;Acho que=Creo que …;Penso que=Pienso que …;Para mim=Para mí, …',
  'V:Afirmativo × negativo;Afirmativo (indicativo)|Creo que es buena idea.;Negativo (subjuntivo)|No creo que sea buena idea.');
V('Estoy de acuerdo',
  'P:Concordar;Neutro=Estoy de acuerdo.;Forte=Totalmente de acuerdo.;Com a pessoa=Tienes razón.',
  'M:Discordar;Mais direto|Mais suave;No estoy de acuerdo.|Yo no lo veo así.;Al contrario.|Sí, pero …');
V('Aunque, sin embargo',
  'M:Conectores;Função|Conector;contraste|aunque, sin embargo;soma|además;consequência|por eso, así que',
  'P:Argumentar;Lado 1=Por un lado …;Lado 2=Por otro …;Fecho=En conclusión …');
V('Las noticias',
  'P:Manchetes no presente;Economia=Suben los precios.;Clima=Llega el invierno.;Esporte=Gana la selección.',
  'M:Comentar;Espanhol|Português;¿Viste que …?|Você viu que …?;¡No me digas!|Não me diga!;¡Qué pena!|Que pena!');
V('El examen DELE A2',
  'P:DELE A2;Lectura=60 min;Auditiva=40 min;Escritas=45 min;Orales=12 min + 12',
  'M:A nota;Grupo|Provas;1|leitura + escrita;2|audição + oral;APTO|30 ou mais em cada');
V('Un comentario en un foro',
  'P:Um comentário de fórum;Resposta=Estoy de acuerdo con …;Opinião=Creo que …;Dois lados=Por un lado …;Conclusão=En conclusión …',
  'M:Conectores;Conector|Para quê;por un lado / por otro|os dois lados;además|mais um argumento;sin embargo|contraste');
S_('Creo que, no creo que', 'el transporte público=o transporte público|es caro=é caro|sea=seja|una buena idea=uma boa ideia|para mí=para mim|lo más importante=o mais importante|es=é|la salud=a saúde|qué opinas del=o que você acha do|teletrabajo=home office|tiene=tem|muchas ventajas=muitas vantagens|ahorras tiempo=você economiza tempo|pues=pois|yo=eu|bueno=bom|para todos=para todo mundo|tienes razón=você tem razão|depende de=depende de|la persona=a pessoa|será que=será que|fue=foi|por=por|en=em|me parece que=acho que|a mi modo de ver=a meu ver|no pienso que=não penso que|tenga=tenha|no me parece que=não me parece que|esté bien=esteja bem|qué opinas de=o que você acha de|qué te parece=o que você acha de|tú qué piensas=e você, o que pensa|la idea=a ideia|llueva=chova|hoy=hoje|las redes sociales=as redes sociais|tienen=têm|ventajas=vantagens|y=e|desventajas=desvantagens|buena idea=boa ideia|creo que es=acho que é|hallar=encontrar|hallo que=(erro) acho que|encontrar=encontrar|no creo que llueva=não acho que vá chover');
S_('Estoy de acuerdo', 'contigo=com você|con esa idea=com essa ideia|sí=sim|pero=mas|hay que=é preciso|pensar en=pensar em|el precio=o preço|creo que=acho que|prohibir=proibir|los celulares=os celulares|en las escuelas=nas escolas|distraen mucho=distraem muito|son útiles=são úteis|para buscar=para pesquisar|información=informação|soy=sou|tengo=tenho|rasón=(erro) rasón|razones=razões|de=de|en=em|con=com|con eso=com isso|no sé=não sei|con Ana=com a Ana|en eso=nisso|estoy totalmente de acuerdo=concordo totalmente|de la situación=da situação|tienes toda la razón=você tem toda a razão|totalmente de acuerdo=totalmente de acordo|con=com|concordar=concordar|estoy de acuerdo en parte=concordo em parte|en parte sí=em parte, sim|Ana=Ana');
S_('Aunque, sin embargo', 'es caro=é caro|vale la pena=vale a pena|el hotel=o hotel|es bonito=é bonito|está lejos=fica longe|es práctico=é prático|por otro=por outro|es caro=é caro|te gusta=você gosta de|vivir=morar|en el centro=no centro|sí=sim|todo está cerca=tudo fica perto|y por otro=e por outro|es muy ruidoso=é muito barulhento|los alquileres=os aluguéis|son caros=são caros|embargue=(erro) embargue|embarco=embarco|en resumen=em resumo|y=e|llovía=estava chovendo|nos quedamos=ficamos|en casa=em casa|trabajo mucho=trabalho muito|estoy cansada=estou cansada|llueve=chove|aunque llueve=embora chova');
S_('Las noticias', 'según el periódico=segundo o jornal|suben=sobem|los precios del transporte=os preços do transporte|ha habido=houve|un accidente=um acidente|en la autopista=na rodovia|viste que=você viu que|ganó=ganhou|la selección=a seleção|viste las noticias=você viu as notícias|otra vez=de novo|no me digas=não me diga|cuánto=quanto|según la radio=segundo o rádio|un diez por ciento=dez por cento|qué barbaridad=que absurdo|así no se puede=assim não dá|segundo=segundo (número)|por=por|hubo=houve|hay=há|ganaba=ganhava|gana=ganha|suben los precios=sobem os preços|llega el invierno=chega o inverno|gana Argentina=a Argentina ganha|el Gobierno=o governo|anunció=anunciou|según=segundo|los expertos=os especialistas|qué bien=que bom|qué pena=que pena|nuevas medidas=novas medidas|hay huelga de metro=tem greve do metrô|mañana=amanhã|va a llover=vai chover|mucho=muito|el segundo día=o segundo dia|de acuerdo con=de acordo com|llega=chega|el invierno=o inverno|gana la selección=a seleção ganha|creo que=acho que|qué=que');
S_('El examen DELE A2', 'el examen=a prova|tiene=tem|cuatro pruebas=quatro provas|hay que=é preciso|aprobar=passar|los dos grupos=os dois grupos|la prueba oral=a prova oral|es individual=é individual|quiero=quero|presentarme al=prestar o|DELE A2=DELE A2|buena idea=boa ideia|sabes=você sabe|cuánto dura=quanto tempo dura|casi tres horas=quase três horas|con la prueba oral=com a prova oral|y=e|es en pareja=é em dupla|la prueba de lectura=a prova de leitura|dura=dura|sesenta=sessenta|horas=horas|días=dias|individual=individual|en pareja=em dupla|en grupo=em grupo|grupos=grupos|pruebas=provas|lee=leia|las instrucciones=as instruções|con atención=com atenção|responde a=responda a|todas las preguntas=todas as perguntas|cuenta=conte|las palabras=as palavras|de tu texto=do seu texto|practica=treine|con un cronómetro=com cronômetro|lectura=leitura|auditiva=auditiva|escritas=escritas|orales=orais|habla de=fale de|tu rutina=sua rotina|tu fin de semana=seu fim de semana|de=de|DELE=DELE|A2=A2|minutos=minutos|apto=aprovado|no apto=reprovado|expresión e interacción escritas=expressão e interação escritas|expresión e interacción orales=expressão e interação orais|comprensión de lectura=compreensão de leitura|comprensión auditiva=compreensão auditiva|expresión escrita=expressão escrita|expresión oral=expressão oral|grupo=grupo');
S_('Un comentario en un foro', 'estoy de acuerdo con=concordo com|Lucas=Lucas|pero=mas|no en todo=não em tudo|por un lado=por um lado|el teletrabajo=o home office|ahorra tiempo=economiza tempo|en conclusión=em conclusão|creo que=acho que|lo mejor=o melhor|es combinar=é combinar|las dos cosas=as duas coisas|leíste=você leu|el debate del foro=o debate do fórum|sobre el teletrabajo=sobre o home office|sí=sim|y=e|escribí=escrevi|un comentario=um comentário|qué dijiste=o que você disse|que=que|estoy de acuerdo en parte=concordo em parte|soy=sou|concuerdo=concordo|para=para|de=de|conclusion=(erro) conclusion|resumo=(erro) resumo|como dice=como diz|se ahorra=economiza-se|mucho tiempo=muito tempo|sin embargo=no entanto|a veces=às vezes|me siento aislada=me sinto isolada|por ejemplo=por exemplo|yo trabajo=eu trabalho|tres días=três dias|en casa=em casa|en resumen=em resumo|depende de=depende de|cada persona=cada pessoa|no estoy de acuerdo con=não concordo com|en mi opinión=na minha opinião|no creo que=não acho que|por otro=por outro|además=além disso|saludos=saudações|en mi caso=no meu caso|por mi parte=da minha parte|en mi empresa=na minha empresa|pregunta del foro=pergunta do fórum|es mejor=é melhor|trabajar desde casa=trabalhar de casa|o=ou|en la oficina=no escritório|cuéntennos=contem para nós|su experiencia=sua experiência|Buenos Aires=Buenos Aires|para mí=para mim|es lo mejor=é o melhor|ahorro=economizo|dos horas=duas horas|de transporte=de transporte|al día=por dia|trabajo=trabalho|más tranquilo=mais tranquilo|puedo almorzar=posso almoçar|con mi familia=com minha família|Sofía=Sofía|Rosario=Rosario|en parte=em parte|es cómodo=é confortável|extraño a=sinto falta de|mis compañeros=meus colegas|la oficina=o escritório|sea=seja|la solución=a solução|trabajamos=trabalhamos|y dos=e dois|funciona=funciona|muy bien=muito bem|trabajar en casa=trabalhar em casa|es muy cómodo=é muito confortável|ahorro mucho tiempo=economizo muito tempo|me distraigo=me distraio|mucho=muito|acho que=(português) acho que');
['lucas', 'sofía', 'rosario', 'argentina', 'ana', 'dele', 'buenos', 'aires'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'es-creoque': {
    o: 'Dar opinião: **creo que**, **pienso que**, **me parece que** + indicativo; **no creo que** + subjuntivo (**no creo que sea**). E perguntar: **¿Qué te parece?**',
    q: 'Em conversas, debates e na prova oral.',
    p: 'O nosso "acho que" é **creo que**.',
  },
  'es-acuerdo': {
    o: 'Concordar (**estoy de acuerdo**, **tienes razón**), discordar com educação (**yo no lo veo así**, **sí, pero …**) e ficar no meio (**depende**, **en parte**).',
    q: 'Em reuniões, discussões e fóruns.',
    p: '"Concordar" é **estar de acuerdo**; "com você" é **contigo**.',
  },
  'es-aunque': {
    o: 'Conectores: **aunque**, **sin embargo** (contraste), **además** (soma), **por eso**, **así que** (consequência), **por un lado … por otro** e **en conclusión**.',
    q: 'Para organizar argumentos falados e escritos.',
    p: 'Com fatos reais, **aunque** + indicativo: aunque **es** caro.',
  },
  'es-noticias': {
    o: 'Notícias: manchetes no presente, fatos no indefinido ou no perfecto (**ha habido**), a fonte com **según** e as reações (**¡No me digas!**, **¡Qué pena!**).',
    q: 'Para acompanhar e comentar o que acontece no mundo hispânico.',
    p: '"Segundo o jornal" é **según** el periódico.',
  },
  'es-delea2': {
    o: 'A prova **DELE A2**: quatro provas (leitura 60 min, audição 40, escrita 45, oral 12 + 12 de preparação), dois grupos de 50 pontos e **APTO** com 30 ou mais em cada.',
    q: 'Para quem quer o diploma oficial, ou só quer saber o que um A2 consegue fazer.',
    p: 'Formato conferido na tabela oficial do Instituto Cervantes; confirme no site antes de se inscrever.',
  },
  'es-foro': {
    o: 'Um comentário num fórum: resposta a alguém (**estoy de acuerdo con …**), opinião, os dois lados com conectores e a conclusão (**en conclusión**).',
    q: 'Para participar de debates on-line e da escrita do DELE.',
    p: 'Fecha o A2 juntando opinião e argumento.',
  },
});
Object.assign(CZH, {
  'es-creoque': ['creo que + indicativo', 'no creo que + subjuntivo', 'opinião'],
  'es-acuerdo': ['acuerdo com qual verbo?', 'ter razão', 'de acuerdo + ?'],
  'es-aunque': ['embora', 'no entanto', 'além disso'],
  'es-noticias': ['segundo (fonte)', 'houve', 'fato concluído'],
  'es-delea2': ['leitura', 'oral', 'APTO'],
  'es-foro': ['concordar', 'por um lado', 'em conclusão'],
});
Object.assign(OBJ, {
  'es-creoque': { o: 'Consigo dar e pedir opiniões.', a: 'Você sabe por que se diz "no creo que sea"?', ref: 'Interacción oral · A2' },
  'es-acuerdo': { o: 'Consigo concordar e discordar com educação.', a: 'Você consegue discordar de alguém sem ser grosseira?', ref: 'Interacción oral · A2' },
  'es-aunque': { o: 'Organizo argumentos com conectores.', a: 'Você consegue dar um lado bom e um ruim de algo, com conectores?', ref: 'Expresión escrita · A2' },
  'es-noticias': { o: 'Consigo entender e comentar notícias simples.', a: 'Você consegue contar uma notícia e reagir a ela?', ref: 'Comprensión de lectura · A2' },
  'es-delea2': { o: 'Conheço o formato da prova DELE A2.', a: 'Você sabe quais são as quatro provas e como é a nota?', ref: 'DELE A2 · Instituto Cervantes' },
  'es-foro': { o: 'Consigo ler e escrever um comentário com opinião e argumentos.', a: 'Você consegue escrever um comentário num fórum em espanhol?', ref: 'Expresión escrita · A2' },
});
MOD_OBJ[13] = ['Consigo dar e pedir opiniões.', 'Concordo e discordo com educação.', 'Organizo argumentos com conectores.', 'Conheço a prova DELE A2.'];

ES_MODS.push({ lv: 'A2', n: 'Opiniões e DELE A2', l: ['es-creoque', 'es-acuerdo', 'es-aunque', 'es-noticias', 'es-delea2', 'es-foro'] });
