// Espanhol · B2 · Módulo 32 · DELE B2. Formato de es/curso.js.
// Durações: tabela oficial "Estructura y duración de los exámenes DELE 2020" do Instituto Cervantes (70 + 40 + 80 + 20 min,
// mais 20 de preparação; 3 h 50). Pontuação: dois grupos, mínimo de 30 em cada, como no A2 e no B1 (manuais de preparação).
// As lições descrevem as tarefas em termos gerais; conferido em 22/11/2026. Confirmar no site do Instituto Cervantes antes de atualizar.

NL('es-deleb2', {
  de: 'El examen DELE B2', pt: 'Como é a prova DELE B2', gt: 'estrutura da prova · os dois grupos · estratégias gerais',
  gx: 'O DELE B2 é o diploma oficial de espanhol do nível B2, do Instituto Cervantes, muito pedido por universidades e empresas. Tem quatro provas: Comprensión de lectura (70 minutos), Comprensión auditiva (40 minutos), Expresión e interacción escritas (80 minutos) e Expresión e interacción orales (20 minutos, mais 20 de preparação). No total, 3 horas e 50 minutos.',
  ge: 'La prueba de expresión escrita dura ochenta minutos.=A prova de expressão escrita dura oitenta minutos.|Para la prueba oral, tienes veinte minutos de preparación.=Para a prova oral, você tem vinte minutos de preparação.|El DELE B2 no caduca.=O DELE B2 não vence.',
  v: 'prueba=prova, parte do exame=📄|tarea=tarefa=✅|grupo=grupo=👥|preparación=preparação=⏱️|apto=aprovado=🎉|no apto=reprovado=🔁|calificación=nota=🔢|caducar=vencer, expirar=⌛|convocatoria=data de prova=📅|inscripción=inscrição=📝',
  x: 'universidad=universidade|empresa=empresa|requisito=requisito|certificado=certificado|centro de examen=centro de exame|Instituto Cervantes=Instituto Cervantes|modelo de examen=simulado|hoja de respuestas=folha de respostas|examinador=examinador|calificador=avaliador',
  dlg: '¿Por qué quieres hacer el DELE B2?=Por que você quer fazer o DELE B2?|Porque la universidad de Salamanca lo pide para el máster.=Porque a universidade de Salamanca pede para o mestrado.|¿Y es muy difícil?=E é muito difícil?|Es largo: casi cuatro horas. Pero si te preparas bien, se aprueba.=É longo: quase quatro horas. Mas se você se preparar bem, dá para passar.',
  cz: 'La prueba escrita dura ___ minutos. (80)=ochenta=setenta=cuarenta|Tienes ___ minutos de preparación para la oral. (20)=veinte=quince=treinta|El DELE B2 no ___. (vence)=caduca=vence=termina',
  whys: 'escrita: 80 minutos|preparação da oral: 20 minutos|o diploma não vence: no caduca',
  pts: 'Quatro provas: Comprensión de lectura (70 min), Comprensión auditiva (40 min), Expresión e interacción escritas (80 min), Expresión e interacción orales (20 min, mais 20 de preparação). Total: 3 h 50 min.|Pontuação: dois grupos de 50 pontos. Grupo 1: leitura + escrita. Grupo 2: audição + oral. É preciso 30 ou mais em cada grupo para ser APTO.|O diploma DELE não vence: vale para sempre.|Estratégia geral: conheça o formato, treine com simulados oficiais e cronometre cada prova.',
  ex: 'Hay que aprobar los dos grupos por separado.=É preciso passar nos dois grupos separadamente.|Es recomendable hacer modelos de examen.=É recomendável fazer simulados.|El diploma es válido para siempre.=O diploma é válido para sempre.|La inscripción se hace en un centro de examen.=A inscrição é feita num centro de exame.',
  bd: ['Hay_que_aprobar=V^regra geral|los_dos_grupos=OA|por_separado.=M^cada um com 30 ou mais', 'É preciso passar nos dois grupos separadamente.'],
  rule: 'dele_b2',
  hw: 'Monte um plano de estudo de quatro semanas para o DELE B2: uma prova por semana, com um simulado cronometrado no fim de cada semana.',
  deep: `
Hoje começa o último módulo do **B2**, dedicado à prova **DELE B2**. Primeiro, a visão geral.
# Passo 1: as quatro provas
@ P:DELE B2, de cima a baixo;Lectura=70 minutos;Auditiva=40 minutos;Escritas=80 minutos;Orales=20 minutos + 20 de preparação
~ La prueba de expresión escrita dura ochenta minutos. = A prova de expressão escrita dura oitenta minutos.
! Durações conferidas na tabela oficial do Instituto Cervantes (DELE 2020): 3 h 50 min no total. Antes de se inscrever, confira sempre no site oficial.
# Passo 2: a nota
| Grupo | Provas | Para ser APTO |
| 1 | leitura + escrita | 30 de 50 ou mais |
| 2 | audição + oral | 30 de 50 ou mais |
~ Hay que aprobar los dos grupos por separado. = É preciso passar nos dois grupos separadamente.
BR Ir muito bem num grupo não compensa o outro: é preciso **30** em **cada** grupo.
# Passo 3: o diploma
~ El DELE B2 no caduca. = O DELE B2 não vence.
~ El diploma es válido para siempre. = O diploma é válido para sempre.
@ V:Por que fazer;Universidades|requisito para mestrados e graduações;Empresas|comprova o nível B2
# Passo 4: a preparação
| Estratégia | Por quê |
| Conheça cada tarefa. | Não perde tempo lendo instruções. |
| Faça simulados oficiais. | Treina o ritmo real. |
| Cronometre tudo. | 3 h 50 cansam: o ritmo importa. |
~ Es recomendable hacer modelos de examen. = É recomendável fazer simulados.
~ Para la prueba oral, tienes veinte minutos de preparación. = Para a prova oral, você tem vinte minutos de preparação.
> Treine agora: diga em espanhol quanto dura cada prova do DELE B2.
? Quanto dura a escrita? || 80 minutos
? Quantos minutos de preparação na oral? || 20
? O DELE B2 vence? || Não: no caduca.
`,
});

NL('es-b2lectura', {
  de: 'La comprensión de lectura', pt: 'Estratégias para a leitura', gt: 'ler as perguntas antes · palavras-chave · sinônimos e paráfrases · distratores · gestão do tempo',
  gx: 'Na leitura do B2, os textos são longos e as perguntas usam outras palavras (paráfrases). As estratégias: ler as perguntas antes (leer las preguntas primero), sublinhar palavras-chave (subrayar), procurar sinônimos (buscar sinónimos), desconfiar das opções que repetem palavras do texto (los distractores) e controlar o tempo (unos 15 minutos por tarea).',
  ge: 'Lee primero las preguntas y después el texto.=Leia primeiro as perguntas e depois o texto.|La respuesta correcta suele usar sinónimos.=A resposta correta costuma usar sinônimos.|Cuidado con las opciones que repiten palabras del texto.=Cuidado com as opções que repetem palavras do texto.',
  v: 'subrayar=sublinhar=✏️|palabra clave=palavra-chave=🔑|sinónimo=sinônimo=🔄|paráfrasis=paráfrase=🔁|distractor=distrator=🪤|opción=opção=🔘|deducir=deduzir=🔍|idea principal=ideia principal=💡|detalle=detalhe=🔬|párrafo=parágrafo=¶',
  x: 'texto=texto|fragmento=trecho|título=título|enunciado=enunciado|tiempo=tempo|reloj=relógio|vocabulario=vocabulário|contexto=contexto|intención del autor=intenção do autor|tono=tom',
  dlg: 'Siempre me falta tiempo en la lectura.=Sempre me falta tempo na leitura.|¿Lees las preguntas antes del texto?=Você lê as perguntas antes do texto?|No, leo todo el texto primero.=Não, leio o texto inteiro primeiro.|Prueba al revés: así sabes qué buscar.=Tente ao contrário: assim você sabe o que procurar.',
  cz: 'Lee ___ las preguntas. (primeiro)=primero=primer=primera|La respuesta correcta suele usar ___.=sinónimos=sinonimos=las mismas palabras|Cuidado con los ___. (distratores)=distractores=distratores=distracciones',
  whys: 'advérbio: primero|paráfrase: sinónimos|opções-armadilha: distractores',
  pts: 'Antes: leia o enunciado e as perguntas; sublinhe as palavras-chave de cada pergunta.|Durante: procure no texto a ideia, não a palavra exata: a resposta certa costuma ser uma paráfrase (sinónimos).|Desconfie dos distratores: opções que repetem palavras do texto mas mudam o sentido (sempre/nunca, todos/algunos).|Tempo: divida os 70 minutos pelas tarefas e não fique preso numa pergunta; marque tudo na folha de respostas.',
  ex: 'Subraya las palabras clave de cada pregunta.=Sublinhe as palavras-chave de cada pergunta.|No te quedes atascado en una pregunta.=Não fique travado numa pergunta.|Busca la idea principal de cada párrafo.=Procure a ideia principal de cada parágrafo.|Marca todas las respuestas en la hoja.=Marque todas as respostas na folha.',
  bd: ['La_respuesta_correcta=S|suele_usar=V^soler: costumar|sinónimos.=OA^paráfrase', 'A resposta correta costuma usar sinônimos.'],
  rule: 'b2_lectura',
  hw: 'Pegue um artigo de jornal em espanhol, invente cinco perguntas de múltipla escolha sobre ele (com um distrator em cada) e responda depois de dois dias.',
  deep: `
Hoje você aprende **estratégias para a leitura** do DELE B2: textos longos, perguntas com paráfrases e armadilhas.
# Passo 1: perguntas primeiro
@ P:A ordem;1=Leia o enunciado.;2=Leia as perguntas e sublinhe palavras-chave.;3=Leia o texto procurando as ideias.;4=Responda e confira.
~ Lee primero las preguntas y después el texto. = Leia primeiro as perguntas e depois o texto.
~ Subraya las palabras clave de cada pregunta. = Sublinhe as palavras-chave de cada pergunta.
# Passo 2: sinônimos e paráfrases
| No texto | Na pergunta |
| aumentó un 20 % | creció |
| no está de acuerdo | se opone |
| a pesar de | aunque |
~ La respuesta correcta suele usar sinónimos. = A resposta correta costuma usar sinônimos.
BR O B2 testa se você entende a **ideia**, não se acha a palavra igual. Por isso o vocabulário de sinônimos dos módulos anteriores ajuda tanto.
# Passo 3: os distratores
@ V:Armadilha;Distrator|repete a palavra do texto, muda o sentido;Resposta certa|usa outras palavras, mantém o sentido
~ Cuidado con las opciones que repiten palabras del texto. = Cuidado com as opções que repetem palavras do texto.
~ Busca la idea principal de cada párrafo. = Procure a ideia principal de cada parágrafo.
# Passo 4: o tempo
| Dica | Por quê |
| não fique preso numa pergunta | as outras valem o mesmo |
| marque tudo na folha | resposta em branco não pontua |
~ No te quedes atascado en una pregunta. = Não fique travado numa pergunta.
~ Marca todas las respuestas en la hoja. = Marque todas as respostas na folha.
! Palavras absolutas (siempre, nunca, todos, nadie) nas opções costumam ser sinal de distrator.
> Treine agora: leia um parágrafo de notícia e diga a ideia principal com outras palavras.
? Ler as perguntas antes ou depois? || antes
? A resposta certa costuma usar…: || sinônimos (paráfrase)
? Opção que repete palavras do texto: || cuidado, pode ser distrator
`,
});

NL('es-b2auditiva', {
  de: 'La comprensión auditiva', pt: 'Estratégias para a compreensão auditiva', gt: 'prever o tema · anotar palavras-chave · opinião × fato · sotaques diferentes · a segunda escuta',
  gx: 'Na audição do B2, você ouve conversas, entrevistas, notícias e monólogos com sotaques diferentes. As estratégias: aproveitar o tempo para ler as perguntas e prever o tema, anotar palavras-chave na primeira escuta, distinguir opinião de fato (quem pensa o quê) e usar a segunda escuta para confirmar.',
  ge: 'Aprovecha el tiempo para leer las preguntas.=Aproveite o tempo para ler as perguntas.|En la primera escucha, anota solo palabras clave.=Na primeira escuta, anote só palavras-chave.|Fíjate en quién dice cada cosa.=Preste atenção em quem diz cada coisa.',
  v: 'escucha=escuta=🎧|audio=áudio=🔊|grabación=gravação=📼|anotar=anotar=📝|prever=prever=🔮|fijarse en=prestar atenção em=👂|hablante=falante=🗣️|opinión=opinião=💭|dato=dado=📊|confirmar=confirmar=✅',
  x: 'entrevista=entrevista|noticia=notícia|conversación=conversa|monólogo=monólogo|anuncio=anúncio|acento=sotaque|velocidad=velocidade|ruido de fondo=barulho de fundo|pausa=pausa|instrucciones=instruções',
  dlg: 'En la auditiva me pierdo cuando hablan rápido.=Na auditiva eu me perco quando falam rápido.|¿Anotas mientras escuchas?=Você anota enquanto escuta?|Intento escribir todo.=Tento escrever tudo.|Ese es el error. Anota solo palabras clave y usa la segunda escucha para confirmar.=Esse é o erro. Anote só palavras-chave e use a segunda escuta para confirmar.',
  cz: 'Aprovecha el tiempo para ___ las preguntas.=leer=ler=leyendo|En la primera escucha, ___ solo palabras clave. (anote)=anota=anote de=anotar a|___ en quién dice cada cosa. (preste atenção)=Fíjate=Fijate=Mira de',
  whys: 'para + infinitivo|imperativo tú: anota|fijarse, imperativo com acento: fíjate',
  pts: 'Antes de ouvir: leia as perguntas no tempo que dão e preveja o tema e o vocabulário.|Primeira escuta: anote só palavras-chave, números e nomes; não tente escrever tudo.|Segunda escuta: confirme e decida. Preste atenção em quem diz o quê (a mulher, o entrevistado) e em opinião × fato.|Sotaques: o B2 usa vozes de vários países. Treine com rádios e podcasts da Espanha, do México, da Argentina e da Colômbia (Módulo 31).',
  ex: 'Anota los números y los nombres propios.=Anote os números e os nomes próprios.|Usa la segunda escucha para confirmar.=Use a segunda escuta para confirmar.|No te pongas nervioso si no entiendes una palabra.=Não fique nervoso se não entender uma palavra.|Escucha podcasts de varios países.=Escute podcasts de vários países.',
  bd: ['Fíjate=V^fijarse: imperativo, com acento|en_quién_dice=C|cada_cosa.=OA', 'Preste atenção em quem diz cada coisa.'],
  rule: 'b2_auditiva',
  hw: 'Escute um podcast ou um telejornal em espanhol por dez minutos, anote dez palavras-chave e escreva um resumo de cinco frases separando fatos de opiniões.',
  deep: `
Hoje você aprende **estratégias para a compreensão auditiva** do DELE B2.
# Passo 1: antes de ouvir
@ P:O antes;Ler=as perguntas;Prever=o tema e o vocabulário;Marcar=quem fala: hombre, mujer, entrevistado
~ Aprovecha el tiempo para leer las preguntas. = Aproveite o tempo para ler as perguntas.
# Passo 2: as duas escutas
| Escuta | O que fazer |
| primeira | anotar palavras-chave, números, nomes |
| segunda | confirmar e decidir |
~ En la primera escucha, anota solo palabras clave. = Na primeira escuta, anote só palavras-chave.
~ Usa la segunda escucha para confirmar. = Use a segunda escuta para confirmar.
BR O erro mais comum é tentar escrever tudo: enquanto escreve, você perde o que vem depois.
# Passo 3: quem diz o quê
@ V:Opinião ou fato?;Fato|La ciudad tiene dos millones de habitantes.;Opinião|Creo que la ciudad está demasiado llena.
~ Fíjate en quién dice cada cosa. = Preste atenção em quem diz cada coisa.
~ Anota los números y los nombres propios. = Anote os números e os nomes próprios.
# Passo 4: os sotaques e a calma
~ Escucha podcasts de varios países. = Escute podcasts de vários países.
~ No te pongas nervioso si no entiendes una palabra. = Não fique nervoso se não entender uma palavra.
| Treino | Onde |
| sotaques variados | rádios e podcasts de vários países |
| velocidade real | entrevistas e debates |
! Não entender uma palavra não é não entender a ideia: siga ouvindo e use o contexto.
> Treine agora: ouça 30 segundos de um áudio em espanhol e anote só cinco palavras-chave.
? Na primeira escuta, anotar…: || só palavras-chave, números e nomes
? Para que serve a segunda escuta? || confirmar
? "Preste atenção em": || fíjate en
`,
});

NL('es-b2oral', {
  de: 'La expresión oral', pt: 'Estratégias para a prova oral', gt: 'valorar propostas · descrever uma foto com hipóteses · opinar sobre dados · usar a preparação',
  gx: 'A oral do B2 é individual, com um examinador, depois de 20 minutos de preparação. Em geral você precisa: avaliar propostas sobre um problema (Me parece la mejor propuesta porque … / Esta propuesta tiene un inconveniente …), descrever uma situação ou foto fazendo hipóteses (Parece que … / Estarán …), e reagir a dados ou a uma pesquisa (Me sorprende que + subjuntivo).',
  ge: 'Me parece la mejor propuesta porque es la más realista.=Acho a melhor proposta porque é a mais realista.|En la foto parece que están celebrando algo.=Na foto parece que estão comemorando alguma coisa.|Me sorprende que tantas personas trabajen desde casa.=Me surpreende que tantas pessoas trabalhem de casa.',
  v: 'propuesta=proposta=📋|valorar=avaliar=⚖️|ventaja=vantagem=👍|inconveniente=desvantagem=⚠️|foto=foto=📸|parece que=parece que=🤔|encuesta=pesquisa=📊|me sorprende que=me surpreende que=😮|guion=roteiro=📝|improvisar=improvisar=🎭',
  x: 'examinador=examinador|preparación=preparação|notas=anotações|tema=tema|situación=situação|personajes=personagens|relación=relação|resultado=resultado|porcentaje=porcentagem|datos=dados',
  dlg: '¿Qué propuesta elegirías para reducir el tráfico?=Que proposta você escolheria para reduzir o trânsito?|Me parece la mejor la de ampliar el metro, porque es una solución a largo plazo.=Acho a melhor a de ampliar o metrô, porque é uma solução de longo prazo.|¿Y la de cobrar peaje en el centro?=E a de cobrar pedágio no centro?|Tiene un inconveniente: perjudicaría a quienes trabajan allí.=Tem uma desvantagem: prejudicaria quem trabalha lá.',
  cz: 'Me ___ la mejor propuesta. (parece)=parece=parezco=parecen|En la foto ___ que están celebrando algo.=parece=parecen=aparece|Me sorprende que tantas personas ___ desde casa. (trabajar)=trabajen=trabajan=trabajarán',
  whys: 'parecer como gustar: me parece|parece que + indicativo|me sorprende que + subjuntivo',
  pts: 'Avaliar propostas: Me parece la mejor propuesta porque … / Esta propuesta tiene la ventaja de … / El inconveniente es que … / Yo propondría además …|Descrever e supor: En la foto se ve … / Parece que … / Estarán (futuro de probabilidade) … / Me imagino que …|Reagir a dados: Me sorprende que + subjuntivo / Es lógico que + subjuntivo / Me llama la atención el dato de …|Usar a preparação: anote palavras-chave e conectores, não um texto inteiro para ler.',
  ex: 'Yo propondría además crear más ciclovías.=Eu proporia, além disso, criar mais ciclovias.|Estarán en una boda, por la ropa.=Devem estar num casamento, pela roupa.|Me llama la atención el dato de los jóvenes.=Me chama a atenção o dado dos jovens.|Es lógico que la gente prefiera trabajar desde casa.=É lógico que as pessoas prefiram trabalhar de casa.',
  bd: ['Me_sorprende_que=V^reação: pede subjuntivo|tantas_personas_trabajen=V^subjuntivo|desde_casa.=L', 'Me surpreende que tantas pessoas trabalhem de casa.'],
  rule: 'b2_oral',
  hw: 'Prepare-se em 20 minutos e grave-se por 5 minutos: escolha um problema da sua cidade, avalie três propostas imaginárias e reaja a um dado inventado com me sorprende que.',
  deep: `
Hoje você aprende **estratégias para a prova oral** do DELE B2.
# Passo 1: avaliar propostas
@ P:Avaliar;A melhor=Me parece la mejor propuesta porque …;Vantagem=Tiene la ventaja de …;Desvantagem=El inconveniente es que …;Somar=Yo propondría además …
~ Me parece la mejor propuesta porque es la más realista. = Acho a melhor proposta porque é a mais realista.
~ Yo propondría además crear más ciclovías. = Eu proporia, além disso, criar mais ciclovias.
# Passo 2: descrever e supor
| Em espanhol | Em português |
| En la foto se ve … | Na foto se vê … |
| Parece que … | Parece que … |
| Estarán en … | Devem estar em … |
~ En la foto parece que están celebrando algo. = Na foto parece que estão comemorando alguma coisa.
~ Estarán en una boda, por la ropa. = Devem estar num casamento, pela roupa.
BR Aqui entra o **futuro de probabilidade** do Módulo 25: **estarán**, **tendrán**, **serán**. Mostra nível B2 na hora.
# Passo 3: reagir a dados
@ V:Reações a dados;Surpresa|Me sorprende que + subjuntivo;Lógica|Es lógico que + subjuntivo
~ Me sorprende que tantas personas trabajen desde casa. = Me surpreende que tantas pessoas trabalhem de casa.
~ Es lógico que la gente prefiera trabajar desde casa. = É lógico que as pessoas prefiram trabalhar de casa.
# Passo 4: usar a preparação
| Na preparação | Na prova |
| palavras-chave | fale com as suas palavras |
| conectores (además, sin embargo) | ligue as ideias |
| um exemplo pessoal | dê vida à resposta |
~ Me llama la atención el dato de los jóvenes. = Me chama a atenção o dado dos jovens.
~ No leas un texto escrito. = Não leia um texto escrito.
! Não escreva um texto para ler: o examinador avalia a **fala espontânea**. Anote só um roteiro.
> Treine agora: descreva em voz alta uma foto qualquer, com três suposições no futuro.
? "Acho a melhor proposta": || Me parece la mejor propuesta.
? "Devem estar num casamento": || Estarán en una boda.
? "Me surpreende que trabalhem": || Me sorprende que trabajen.
`,
});

NL('es-b2escrita', {
  de: 'La expresión escrita', pt: 'Estratégias para a escrita', gt: 'tarefa a partir de uma gravação · tomar notas · escolher o registro · planejar, escrever, revisar · contar palavras',
  gx: 'A escrita do B2 tem duas tarefas em 80 minutos. Uma delas costuma partir de uma gravação que você ouve (por exemplo, para escrever uma carta ou um artigo); a outra é um texto à escolha entre opções (opinião, relato, crítica). As estratégias: anotar as ideias do áudio, escolher o registro (formal ou informal), planejar antes de escrever, respeitar o número de palavras e revisar.',
  ge: 'Mientras escuchas, toma notas de las ideas principales.=Enquanto escuta, anote as ideias principais.|Antes de escribir, haz un pequeño esquema.=Antes de escrever, faça um pequeno esquema.|Deja cinco minutos para revisar.=Deixe cinco minutos para revisar.',
  v: 'tomar notas=fazer anotações=📝|esquema=esquema=🗂️|borrador=rascunho=📄|registro=registro=🎩|número de palabras=número de palavras=🔢|revisar=revisar=🔍|conector=conector=🔗|párrafo=parágrafo=¶|coherencia=coerência=🧩|adecuación=adequação=✅',
  x: 'carta formal=carta formal|artículo=artigo|reseña=resenha|relato=relato|texto de opinión=texto de opinião|correo=e-mail|destinatario=destinatário|tono=tom|ortografía=ortografia|acentos=acentos',
  dlg: '¿Cómo te organizas en la escrita?=Como você se organiza na escrita?|Primero hago un esquema con las ideas y los conectores.=Primeiro faço um esquema com as ideias e os conectores.|¿Y el tiempo?=E o tempo?|Unos treinta y cinco minutos por tarea, y diez para revisar todo.=Uns trinta e cinco minutos por tarefa, e dez para revisar tudo.',
  cz: 'Mientras escuchas, ___ notas. (faça)=toma=haz=pon|Antes de escribir, ___ un pequeño esquema. (faça)=haz=hace=has|Deja cinco minutos para ___.=revisar=revisas=revisando',
  whys: 'tomar notas (colocação)|imperativo de hacer: haz|para + infinitivo',
  pts: 'Tarefa a partir de uma gravação: durante a escuta, anote as ideias principais e os dados; depois, use-os no texto com as suas palavras.|Registro: identifique o destinatário e o gênero (carta formal, artigo, e-mail a um amigo) e mantenha o tratamento (usted ou tú) do começo ao fim.|Planejar: esquema com introdução, desenvolvimento e conclusão, e os conectores que vai usar (asimismo, sin embargo, por todo ello).|Revisar: número de palavras, acentos, concordância, modos (indicativo/subjuntivo) e repetições.',
  ex: 'Identifica el destinatario y el registro.=Identifique o destinatário e o registro.|No repitas siempre las mismas palabras.=Não repita sempre as mesmas palavras.|Revisa los acentos y la concordancia.=Revise os acentos e a concordância.|Respeta el número de palabras.=Respeite o número de palavras.',
  bd: ['Mientras_escuchas,=T^durante a gravação|toma_notas=V^colocação: tomar notas|de_las_ideias_principales.=OA', 'Enquanto escuta, anote as ideias principais.'],
  rule: 'b2_escrita',
  hw: 'Escute uma notícia curta em espanhol, anote as ideias e escreva um e-mail formal (150 a 180 palavras) a uma autoridade comentando o problema, com esquema, conectores e revisão final.',
  deep: `
Hoje você aprende **estratégias para a escrita** do DELE B2: o método que vale para as duas tarefas.
# Passo 1: a tarefa com áudio
@ P:Com áudio;Ouvir=as ideias principais e os dados;Anotar=palavras-chave, números, opiniões;Escrever=com as suas palavras, citando a fonte
~ Mientras escuchas, toma notas de las ideas principales. = Enquanto escuta, anote as ideias principais.
BR Não copie frases do áudio: reformule. "**Según la grabación**, …" ou "**Como se explica en el audio**, …" são boas formas de usar a fonte.
# Passo 2: o registro
| Texto | Registro |
| carta a uma autoridade | formal: usted, Estimado/a …: |
| e-mail a um amigo | informal: tú, Hola, … |
| artigo de opinião | neutro, impessoal |
~ Identifica el destinatario y el registro. = Identifique o destinatário e o registro.
# Passo 3: planejar
@ M:O esquema;Parte|Conteúdo;Introdução|tema e tese;Desenvolvimento|dois ou três argumentos com conectores;Conclusão|retomar a tese
~ Antes de escribir, haz un pequeño esquema. = Antes de escrever, faça um pequeno esquema.
~ No repitas siempre las mismas palabras. = Não repita sempre as mesmas palavras.
# Passo 4: revisar
| Revise | Exemplo |
| acentos | además, también, está |
| modos | aunque + modo certo, de ahí que + subjuntivo |
| número de palavras | nem menos, nem muito mais |
~ Revisa los acentos y la concordancia. = Revise os acentos e a concordância.
~ Deja cinco minutos para revisar. = Deixe cinco minutos para revisar.
! "Fazer anotações" é **tomar notas** (e não "hacer notas"). E "faça" (tú) é **haz**.
> Treine agora: faça em dois minutos o esquema de um texto sobre "el uso del celular en clase".
? "Fazer anotações": || tomar notas
? Carta a uma autoridade: tú ou usted? || usted
? Quanto tempo deixar para revisar? || uns cinco a dez minutos
`,
});

NL('es-b2simulado', {
  de: 'Simulacro de escritura', pt: 'Ler e escrever: um simulado da escrita B2', gt: 'carta formal de opinião a um jornal, com dados, argumentos, contra-argumento e proposta',
  gx: 'Este simulado junta tudo do B2: você lê uma carta de um leitor a um jornal sobre um problema da cidade e escreve a sua, com registro formal, dados, argumentos organizados (en primer lugar, asimismo), um contra-argumento (si bien es cierto que …), uma proposta (propondría que + subjuntivo) e um fecho formal.',
  ge: 'Me dirijo a ustedes en relación con el artículo publicado el pasado lunes.=Dirijo-me a vocês em relação ao artigo publicado na segunda passada.|Si bien es cierto que el turismo genera empleo, no es menos cierto que encarece la vivienda.=Embora seja verdade que o turismo gera emprego, também é verdade que encarece a moradia.|Propondría que el ayuntamiento limitara los alquileres turísticos.=Eu proporia que a prefeitura limitasse os aluguéis turísticos.',
  v: 'carta al director=carta do leitor=✉️|lector=leitor=👤|artículo=artigo=📰|turismo=turismo=🧳|alquiler turístico=aluguel por temporada=🏠|vivienda=moradia=🏘️|encarecer=encarecer=📈|vecinos=moradores=👥|ayuntamiento=prefeitura (Espanha)=🏛️|limitar=limitar=🚧',
  x: 'barrio=bairro|centro histórico=centro histórico|precios=preços|empleo=emprego|comercio local=comércio local|ruido=barulho|regulación=regulação|licencia=licença|propietario=proprietário|equilibrio=equilíbrio',
  dlg: '¿Viste la carta de aquella vecina en el diario?=Você viu a carta daquela moradora no jornal?|Sí, sobre los alquileres turísticos. Está muy bien escrita.=Vi, sobre os aluguéis por temporada. Está muito bem escrita.|¿Qué propone?=O que ela propõe?|Que se limiten las licencias en el centro, sin prohibirlas del todo.=Que se limitem as licenças no centro, sem proibi-las totalmente.',
  cz: 'Me ___ a ustedes en relación con el artículo.=dirijo=dirigo=dirijo de|Si bien es cierto que genera empleo, no es ___ cierto que encarece la vivienda.=menos=más=tan|Propondría que el ayuntamiento ___ los alquileres. (limitar)=limitara=limite=limitaría',
  whys: 'dirigirse: me dirijo|no es menos cierto que|condicional + que + imperfeito do subjuntivo',
  pts: 'Abertura formal: Señor director: / Estimados señores: Me dirijo a ustedes en relación con …|Dados e argumentos: Según datos del ayuntamiento, … En primer lugar, … Asimismo, …|Contra-argumento: Si bien es cierto que …, no es menos cierto que …|Proposta e fecho: Propondría que + imperfeito do subjuntivo / Sería conveniente que … Por todo ello, … Atentamente, …',
  ex: 'Según datos del ayuntamiento, los alquileres subieron un treinta por ciento.=Segundo dados da prefeitura, os aluguéis subiram trinta por cento.|Asimismo, el comercio local está desapareciendo.=Do mesmo modo, o comércio local está desaparecendo.|Sería conveniente que se escuchara a los vecinos.=Seria conveniente que os moradores fossem ouvidos.|Por todo ello, pido una regulación equilibrada.=Por tudo isso, peço uma regulação equilibrada.',
  bd: ['Propondría_que=V^condicional + que|el_ayuntamiento_limitara=V^imperfeito do subjuntivo: concordância|los_alquileres_turísticos.=OA', 'Eu proporia que a prefeitura limitasse os aluguéis turísticos.'],
  rule: 'b2_simulado',
  le: {
    texto: {
      t: 'Carta al director: «Mi barrio ya no es mi barrio»', kind: 'carta do leitor', voz: 'a',
      intro: 'Uma moradora de Cartagena de Indias escreveu ao jornal da cidade. Leia e responda.',
      paras: ['Señor director: Me dirijo a usted en relación con el artículo «El turismo bate récords», publicado el pasado lunes en su diario.', 'Vivo desde hace cuarenta años en el centro histórico. Según datos de la alcaldía, el número de alquileres turísticos se ha triplicado en cinco años. En primer lugar, esto ha encarecido la vivienda: muchos vecinos han tenido que irse del barrio.', 'Asimismo, las tiendas de toda la vida están desapareciendo y en su lugar abren negocios solo para turistas. Por la noche, el ruido no nos deja dormir.', 'Si bien es cierto que el turismo genera empleo, no es menos cierto que una ciudad sin vecinos pierde su alma. Por ello, propondría que la alcaldía limitara las nuevas licencias en el centro y que se escuchara a los vecinos.', 'No pido prohibir el turismo, sino encontrar un equilibrio. Atentamente, Rosa Martínez.'],
      qs: [
        { q: 'O que motivou a carta?', o: ['um artigo sobre o recorde do turismo', 'uma multa', 'uma obra no bairro'], a: 0 },
        { q: 'O que aconteceu com os aluguéis por temporada?', o: ['triplicaram em cinco anos', 'diminuíram', 'foram proibidos'], a: 0 },
        { q: 'Qual é o contra-argumento que ela reconhece?', o: ['o turismo gera emprego', 'os turistas são educados', 'os preços caíram'], a: 0 },
        { q: 'O que ela propõe?', o: ['limitar as novas licenças no centro e ouvir os moradores', 'proibir o turismo', 'aumentar os hotéis'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva a sua carta', tipo: 'form', ok: 'Carta escrita corretamente.',
      pede: 'Escreva uma carta ao jornal sobre um problema da sua cidade (trânsito, poluição, turismo, segurança). Uma frase por linha.',
      campos: [
        { l: 'Abertura formal', d: 'Señor director: Me dirijo a usted en relación con …', re: '(me dirijo a|en relación con|con respecto a|señor director|estimad[oa]s?)', f: 'iu', err: 'Abra formalmente: Señor director: Me dirijo a usted en relación con …', bad: [['\\bme dirigo\\b', 'É <b>me dirijo</b>, com j.']] },
        { l: 'Um dado', d: 'Según datos de …', re: '(según|de acuerdo con|los datos|el \\d+|por ciento|%)', f: 'iu', err: 'Apoie-se num dado: Según datos de la alcaldía, …' },
        { l: 'Argumentos organizados', d: 'En primer lugar, … Asimismo, …', re: '(en primer lugar|asimismo|además|por otro lado|en segundo lugar)', f: 'iu', err: 'Organize: En primer lugar, … Asimismo, …' },
        { l: 'Contra-argumento', d: 'Si bien es cierto que …, no es menos cierto que …', re: '(si bien|no es menos cierto|aunque|es cierto que|frente a quienes)', f: 'iu', err: 'Reconheça o outro lado: Si bien es cierto que …, no es menos cierto que …' },
        { l: 'Proposta', d: 'Propondría que … / Sería conveniente que …', re: '(propondría que|propongo que|sería conveniente que|sería necesario que|pido que)', f: 'iu', err: 'Faça uma proposta: Propondría que el ayuntamiento …', bad: [['\\bpropondría que (\\p{L}+ )+(limite|escuche|cree|construya|controle|ponga)\\b', 'Com <b>propondría que</b> (condicional), o imperfeito do subjuntivo: <b>limitara</b>, <b>escuchara</b>, <b>creara</b>.']] },
        { l: 'Fecho formal', d: 'Por todo ello, … Atentamente, …', re: '(atentamente|saludos cordiales|por todo ello)', f: 'iu', err: 'Feche: Por todo ello, … Atentamente, …' },
      ],
      modelo: 'Señor director: me dirijo a usted en relación con el tráfico en mi barrio. · Según datos de la alcaldía, los atascos aumentaron un cuarenta por ciento. · En primer lugar, perdemos horas cada día; asimismo, la contaminación ha empeorado. · Si bien es cierto que hacen falta carreteras, no es menos cierto que el transporte público es la solución. · Propondría que la alcaldía creara más carriles para buses. · Por todo ello, espero una respuesta rápida. Atentamente, Ana Souza.',
    },
  },
  hw: 'Faça o simulado completo: escreva uma carta ao jornal (150 a 180 palavras) em no máximo 40 minutos, com todas as partes da estrutura, e revise com a lista do passo 4 da lição de escrita.',
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo e o **B2**. Você vai ler a carta de uma moradora colombiana e fazer um simulado da escrita do DELE B2.
# Passo 1: a estrutura da carta
@ P:Carta ao jornal;Abertura=Señor director: Me dirijo a usted …;Dado=Según datos de …;Argumentos=En primer lugar … Asimismo …;Contra-argumento=Si bien es cierto que …;Proposta=Propondría que …;Fecho=Atentamente
~ Me dirijo a ustedes en relación con el artículo publicado el pasado lunes. = Dirijo-me a vocês em relação ao artigo publicado na segunda passada.
# Passo 2: dados e argumentos
~ Según datos del ayuntamiento, los alquileres subieron un treinta por ciento. = Segundo dados da prefeitura, os aluguéis subiram trinta por cento.
~ Asimismo, el comercio local está desapareciendo. = Do mesmo modo, o comércio local está desaparecendo.
| Recurso | Módulo |
| dados com según | 20 |
| conectores formais | 26 |
| contra-argumento | 30 |
# Passo 3: o contra-argumento e a proposta
~ Si bien es cierto que el turismo genera empleo, no es menos cierto que encarece la vivienda. = Embora seja verdade que o turismo gera emprego, também é verdade que encarece a moradia.
~ Propondría que el ayuntamiento limitara los alquileres turísticos. = Eu proporia que a prefeitura limitasse os aluguéis turísticos.
BR **Propondría que** (condicional) pede **imperfeito do subjuntivo** (limitara): a concordância dos tempos do Módulo 18.
# Passo 4: o fecho
~ Sería conveniente que se escuchara a los vecinos. = Seria conveniente que os moradores fossem ouvidos.
~ Por todo ello, pido una regulación equilibrada. = Por tudo isso, peço uma regulação equilibrada.
! Na Espanha, a prefeitura é **el ayuntamiento**; na América Latina, **la alcaldía** (ou **la municipalidad**).
> Agora leia a carta da Rosa e faça o seu simulado.
? "Dirijo-me a vocês em relação a": || Me dirijo a ustedes en relación con …
? "Eu proporia que limitassem": || Propondría que limitaran …
? "Prefeitura" na Colômbia: || la alcaldía
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('El examen DELE B2',
  'P:DELE B2;Lectura=70 min;Auditiva=40 min;Escritas=80 min;Orales=20 min + 20',
  'M:A nota;Grupo|Provas;1|leitura + escrita;2|audição + oral;APTO|30 ou mais em cada');
V('La comprensión de lectura',
  'P:A ordem;1=Enunciado;2=Perguntas e palavras-chave;3=Texto;4=Responder',
  'V:Armadilha;Distrator|repete a palavra, muda o sentido;Resposta certa|outras palavras, mesmo sentido');
V('La comprensión auditiva',
  'M:As duas escutas;Escuta|O que fazer;primeira|anotar palavras-chave;segunda|confirmar e decidir',
  'V:Opinião ou fato?;Fato|tiene dos millones de habitantes;Opinião|creo que está demasiado llena');
V('La expresión oral',
  'P:Avaliar;A melhor=Me parece la mejor propuesta …;Vantagem=Tiene la ventaja de …;Desvantagem=El inconveniente es que …',
  'V:Reações a dados;Surpresa|Me sorprende que + subjuntivo;Lógica|Es lógico que + subjuntivo');
V('La expresión escrita',
  'M:O esquema;Parte|Conteúdo;Introdução|tema e tese;Desenvolvimento|argumentos com conectores;Conclusão|retomar a tese',
  'M:Registro;Texto|Registro;carta a uma autoridade|formal: usted;e-mail a um amigo|informal: tú');
V('Simulacro de escritura',
  'P:Carta ao jornal;Abertura=Me dirijo a usted …;Dado=Según datos de …;Contra-argumento=Si bien es cierto que …;Proposta=Propondría que …',
  'M:Recursos;Recurso|Módulo;dados com según|20;conectores formais|26;contra-argumento|30');
S_('El examen DELE B2', 'la prueba=a prova|de expresión escrita=de expressão escrita|dura=dura|ochenta minutos=oitenta minutos|para la prueba oral=para a prova oral|tienes=você tem|veinte minutos=vinte minutos|de preparación=de preparação|el DELE B2=o DELE B2|no caduca=não vence|por qué quieres=por que você quer|hacer=fazer|porque=porque|la universidad de Salamanca=a universidade de Salamanca|lo pide=pede|para el máster=para o mestrado|y es muy difícil=e é muito difícil|es largo=é longo|casi cuatro horas=quase quatro horas|pero=mas|si te preparas bien=se você se preparar bem|se aprueba=dá para passar|la prueba escrita=a prova escrita|ochenta=oitenta|setenta=setenta|cuarenta=quarenta|veinte=vinte|quince=quinze|treinta=trinta|caduca=vence|vence=(erro) vence|termina=termina|hay que aprobar=é preciso passar|los dos grupos=os dois grupos|por separado=separadamente|es recomendable=é recomendável|hacer modelos de examen=fazer simulados|el diploma=o diploma|es válido=é válido|para siempre=para sempre|la inscripción=a inscrição|se hace=é feita|en un centro de examen=num centro de exame|lectura=leitura|auditiva=auditiva|escritas=escritas|orales=orais|DELE=DELE|B2=B2|minutos=minutos|grupo=grupo|apto=aprovado');
S_('La comprensión de lectura', 'lee=leia|primero=primeiro|las preguntas=as perguntas|y después=e depois|el texto=o texto|la respuesta correcta=a resposta correta|suele usar=costuma usar|sinónimos=sinônimos|cuidado con=cuidado com|las opciones=as opções|que repiten=que repetem|palabras del texto=palavras do texto|siempre me falta tiempo=sempre me falta tempo|en la lectura=na leitura|lees=você lê|antes del texto=antes do texto|no=não|leo=leio|todo el texto=o texto inteiro|prueba al revés=tente ao contrário|así=assim|sabes=você sabe|qué buscar=o que procurar|primer=primeiro|primera=primeira|sinonimos=(erro) sinonimos|las mismas palabras=as mesmas palavras|distractores=distratores|distratores=(erro) distratores|distracciones=distrações|subraya=sublinhe|las palabras clave=as palavras-chave|de cada pregunta=de cada pergunta|no te quedes atascado=não fique travado|en una pregunta=numa pergunta|busca=procure|la idea principal=a ideia principal|de cada párrafo=de cada parágrafo|marca=marque|todas las respuestas=todas as respostas|en la hoja=na folha|aumentó un 20 %=aumentou 20 %|creció=cresceu|no está de acuerdo=não concorda|se opone=se opõe|a pesar de=apesar de|aunque=embora|siempre=sempre|nunca=nunca|todos=todos|nadie=ninguém');
S_('La comprensión auditiva', 'aprovecha=aproveite|el tiempo=o tempo|para leer=para ler|las preguntas=as perguntas|en la primera escucha=na primeira escuta|anota=anote|solo=só|palabras clave=palavras-chave|fíjate en=preste atenção em|quién dice=quem diz|cada cosa=cada coisa|en la auditiva=na auditiva|me pierdo=eu me perco|cuando hablan rápido=quando falam rápido|anotas=você anota|mientras escuchas=enquanto escuta|intento escribir=tento escrever|todo=tudo|ese es el error=esse é o erro|y usa=e use|la segunda escucha=a segunda escuta|para confirmar=para confirmar|leer=ler|ler=(erro) ler|leyendo=lendo|anote de=(erro) anote de|anotar a=(erro) anotar a|fijate=(erro) fijate|mira de=(erro) mira de|los números=os números|y los nombres propios=e os nomes próprios|usa=use|no te pongas nervioso=não fique nervoso|si no entiendes=se não entender|una palabra=uma palavra|escucha=escute|podcasts=podcasts|de varios países=de vários países|hombre=homem|mujer=mulher|entrevistado=entrevistado|la ciudad=a cidade|tiene=tem|dos millones de habitantes=dois milhões de habitantes|creo que=acho que|está demasiado llena=está cheia demais|anota los números=anote os números|y os nombres propios=e os nomes próprios');
S_('La expresión oral', 'me parece=acho|la mejor propuesta=a melhor proposta|porque=porque|es la más realista=é a mais realista|en la foto=na foto|parece que=parece que|están celebrando algo=estão comemorando alguma coisa|me sorprende que=me surpreende que|tantas personas=tantas pessoas|trabajen=trabalhem|desde casa=de casa|qué propuesta=que proposta|elegirías=você escolheria|para reducir=para reduzir|el tráfico=o trânsito|me parece la mejor=acho a melhor|la de ampliar=a de ampliar|el metro=o metrô|es una solución=é uma solução|a largo plazo=de longo prazo|y la de cobrar=e a de cobrar|peaje=pedágio|en el centro=no centro|tiene un inconveniente=tem uma desvantagem|perjudicaría=prejudicaria|a quienes trabajan allí=quem trabalha lá|parezco=pareço|parecen=parecem|aparece=aparece|trabajan=trabalham|trabajarán=trabalharão|yo propondría=eu proporia|además=além disso|crear=criar|más ciclovías=mais ciclovias|estarán=devem estar|en una boda=num casamento|por la ropa=pela roupa|me llama la atención=me chama a atenção|el dato de=o dado de|los jóvenes=os jovens|es lógico que=é lógico que|la gente=as pessoas|prefiera=prefira|trabajar desde casa=trabalhar de casa|tiene la ventaja de=tem a vantagem de|el inconveniente es que=a desvantagem é que|en la foto se ve=na foto se vê|me imagino que=imagino que|sin embargo=no entanto');
S_('La expresión escrita', 'mientras escuchas=enquanto escuta|toma notas=anote|de las ideas principales=das ideias principais|antes de escribir=antes de escrever|haz=faça|un pequeño esquema=um pequeno esquema|deja=deixe|cinco minutos=cinco minutos|para revisar=para revisar|cómo te organizas=como você se organiza|en la escrita=na escrita|primero=primeiro|hago=faço|un esquema=um esquema|con las ideas=com as ideias|y los conectores=e os conectores|y el tiempo=e o tempo|unos treinta y cinco minutos=uns trinta e cinco minutos|por tarea=por tarefa|y diez=e dez|para revisar todo=para revisar tudo|toma=anote|pon=ponha|hace=faz|has=você tem|revisar=revisar|revisas=você revisa|revisando=revisando|identifica=identifique|el destinatario=o destinatário|y el registro=e o registro|no repitas=não repita|siempre=sempre|las mismas palabras=as mesmas palavras|revisa=revise|los acentos=os acentos|y la concordancia=e a concordância|respeta=respeite|el número de palabras=o número de palavras|según la grabación=segundo a gravação|como se explica en el audio=como se explica no áudio|estimado=prezado|hola=olá|además=além disso|también=também|está=está|asimismo=do mesmo modo|sin embargo=no entanto|por todo ello=por tudo isso|aunque=embora|de ahí que=daí que|hacer notas=(erro) hacer notas|el uso del celular en clase=o uso do celular na aula');
S_('Simulacro de escritura', 'me dirijo a ustedes=dirijo-me a vocês|en relación con=em relação a|el artículo=o artigo|publicado=publicado|el pasado lunes=na segunda passada|si bien es cierto que=embora seja verdade que|el turismo=o turismo|genera empleo=gera emprego|no es menos cierto que=também é verdade que|encarece=encarece|la vivienda=a moradia|propondría que=eu proporia que|el ayuntamiento=a prefeitura|limitara=limitasse|los alquileres turísticos=os aluguéis por temporada|viste=você viu|la carta=a carta|de aquella vecina=daquela moradora|en el diario=no jornal|sí=sim|sobre=sobre|está muy bien escrita=está muito bem escrita|qué propone=o que ela propõe|que se limiten=que se limitem|las licencias=as licenças|en el centro=no centro|sin prohibirlas=sem proibi-las|del todo=totalmente|dirigo=(erro) dirigo|dirijo de=(erro) dirijo de|menos=menos|más=mais|tan=tão|limite=limite|limitaría=limitaria|según datos del ayuntamiento=segundo dados da prefeitura|los alquileres=os aluguéis|subieron=subiram|un treinta por ciento=trinta por cento|asimismo=do mesmo modo|el comercio local=o comércio local|está desapareciendo=está desaparecendo|sería conveniente que=seria conveniente que|se escuchara=fossem ouvidos|a los vecinos=os moradores|por todo ello=por tudo isso|pido=peço|una regulación equilibrada=uma regulação equilibrada|señor director=senhor diretor|me dirijo a usted=dirijo-me ao senhor|según datos de=segundo dados de|en primer lugar=em primeiro lugar|atentamente=atenciosamente|la alcaldía=a prefeitura|la municipalidad=a prefeitura|carta al director=carta do leitor|mi barrio ya no es mi barrio=meu bairro já não é meu bairro|el turismo bate récords=o turismo bate recordes|en su diario=no seu jornal|vivo desde hace cuarenta años=moro há quarenta anos|en el centro histórico=no centro histórico|según datos de la alcaldía=segundo dados da prefeitura|el número de=o número de|se ha triplicado=triplicou|en cinco años=em cinco anos|esto ha encarecido=isso encareceu|muchos vecinos=muitos moradores|han tenido que irse=tiveram que ir embora|del barrio=do bairro|las tiendas=as lojas|de toda la vida=de sempre|están desapareciendo=estão desaparecendo|y en su lugar=e no lugar delas|abren=abrem|negocios=negócios|solo para turistas=só para turistas|por la noche=à noite|el ruido=o barulho|no nos deja dormir=não nos deixa dormir|una ciudad sin vecinos=uma cidade sem moradores|pierde su alma=perde a sua alma|por ello=por isso|limitara las nuevas licencias=limitasse as novas licenças|y que se escuchara=e que fossem ouvidos|no pido=não peço|prohibir el turismo=proibir o turismo|sino=mas|encontrar un equilibrio=encontrar um equilíbrio|Rosa Martínez=Rosa Martínez|el tráfico=o trânsito|en mi barrio=no meu bairro|los atascos=os engarrafamentos|aumentaron=aumentaram|un cuarenta por ciento=quarenta por cento|perdemos horas=perdemos horas|cada día=cada dia|la contaminación=a poluição|ha empeorado=piorou|hacen falta=são necessárias|carreteras=estradas|el transporte público=o transporte público|es la solución=é a solução|creara=criasse|más carriles=mais faixas|para buses=para ônibus|espero una respuesta rápida=espero uma resposta rápida|Ana Souza=Ana Souza|con respecto a=com relação a|estimados=prezados|estimado=prezado|estimada=prezada|de acuerdo con=de acordo com|los datos=os dados|por ciento=por cento|además=além disso|por otro lado=por outro lado|en segundo lugar=em segundo lugar|si bien=embora|aunque=embora|es cierto que=é verdade que|frente a quienes=diante dos que|propongo que=proponho que|sería necesario que=seria necessário que|pido que=peço que|saludos cordiales=cordialmente');
['salamanca', 'cartagena', 'indias', 'rosa', 'martínez', 'souza', 'ana', 'dele', 'b2'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'es-deleb2': {
    o: 'A prova **DELE B2**: leitura 70 min, audição 40, escrita 80, oral 20 + 20 de preparação (3 h 50); dois grupos de 50 pontos e **APTO** com 30 em cada. O diploma **no caduca**.',
    q: 'Para universidades e empresas que pedem o nível B2.',
    p: 'Formato conferido na tabela oficial; confirme antes de se inscrever.',
  },
  'es-b2lectura': {
    o: 'Leitura: perguntas antes do texto, palavras-chave, **sinónimos** e paráfrases, cuidado com os **distractores**, gestão dos 70 minutos.',
    q: 'Na prova e em qualquer leitura longa em espanhol.',
    p: 'A resposta certa usa outras palavras.',
  },
  'es-b2auditiva': {
    o: 'Audição: ler as perguntas antes, anotar só **palabras clave** na primeira escuta, confirmar na segunda, distinguir opinião de fato e treinar sotaques.',
    q: 'Na prova e para entender rádio, podcasts e reuniões.',
    p: 'Não tente escrever tudo.',
  },
  'es-b2oral': {
    o: 'Oral: avaliar propostas (**me parece la mejor propuesta porque …**), descrever com hipóteses (**estarán …**) e reagir a dados (**me sorprende que** + subjuntivo).',
    q: 'Na prova oral e em discussões de trabalho.',
    p: 'Na preparação, anote um roteiro, não um texto.',
  },
  'es-b2escrita': {
    o: 'Escrita: **tomar notas** do áudio, escolher o registro, fazer um **esquema**, respeitar o número de palavras e revisar acentos, modos e concordância.',
    q: 'Nas duas tarefas da escrita do DELE B2.',
    p: '"Fazer anotações" é **tomar notas**.',
  },
  'es-b2simulado': {
    o: 'Um simulado: carta formal ao jornal com dados (**según**), argumentos (**en primer lugar**, **asimismo**), contra-argumento (**si bien es cierto que**) e proposta (**propondría que** + imperfeito do subjuntivo).',
    q: 'Para treinar a escrita do DELE B2.',
    p: 'Fecha o B2 juntando os módulos 20 a 30.',
  },
});
Object.assign(CZH, {
  'es-deleb2': ['escrita', 'preparação', 'vencer'],
  'es-b2lectura': ['primeiro', 'paráfrase', 'distratores'],
  'es-b2auditiva': ['para + ?', 'anote', 'preste atenção'],
  'es-b2oral': ['parecer', 'parece que', 'me sorprende que + ?'],
  'es-b2escrita': ['tomar …', 'faça', 'para + ?'],
  'es-b2simulado': ['dirigirse', 'no es … cierto', 'propondría que + ?'],
});
Object.assign(OBJ, {
  'es-deleb2': { o: 'Conheço o formato da prova DELE B2.', a: 'Você sabe quanto dura cada prova do DELE B2 e como é a nota?', ref: 'DELE B2 · Instituto Cervantes' },
  'es-b2lectura': { o: 'Aplico estratégias de leitura para a prova.', a: 'Você sabe reconhecer um distrator numa pergunta de leitura?', ref: 'Comprensión de lectura · B2' },
  'es-b2auditiva': { o: 'Aplico estratégias de audição para a prova.', a: 'Você sabe o que anotar na primeira escuta?', ref: 'Comprensión auditiva · B2' },
  'es-b2oral': { o: 'Aplico estratégias para a prova oral.', a: 'Você consegue avaliar propostas e descrever uma foto com hipóteses?', ref: 'Expresión oral · B2' },
  'es-b2escrita': { o: 'Aplico estratégias de escrita para a prova.', a: 'Você consegue planejar e revisar um texto em tempo limitado?', ref: 'Expresión escrita · B2' },
  'es-b2simulado': { o: 'Consigo escrever um texto no formato da prova B2.', a: 'Você consegue escrever uma carta ao jornal em 40 minutos?', ref: 'Expresión escrita · B2' },
});
MOD_OBJ[31] = ['Conheço o formato do DELE B2.', 'Aplico estratégias de leitura e audição.', 'Aplico estratégias para a oral e a escrita.', 'Faço um simulado da escrita B2.'];

ES_MODS.push({ lv: 'B2', n: 'DELE B2', l: ['es-deleb2', 'es-b2lectura', 'es-b2auditiva', 'es-b2oral', 'es-b2escrita', 'es-b2simulado'] });
