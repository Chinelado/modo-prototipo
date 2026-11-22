// Espanhol · C1 · Módulo 38 · DELE C1 y SIELE. Formato de es/curso.js.
// DELE C1: durações da tabela oficial "Estructura y duración de los exámenes DELE 2020" do Instituto Cervantes
// (90 + 50 + 80 + 20 min, mais 20 de preparação; 4 h 20). Grupos (prova 1 + prova 3; prova 2 + prova 4) e mínimo de 30 em cada:
// documento da UCM e guia da GlobalExam, que coincidem. O Cervantes publicou uma guia do C1 em 2024: conferir se o modelo mudou.
// SIELE Global: leitura 60, audição 55, escrita 50, oral cerca de 15 a 20 min; nota de 0 a 1000 (fontes: UCM, UBU, UC3M).
// A validade do certificado SIELE não entrou na lição porque as fontes divergem. Conferido em 22/11/2026.

NL('es-delec1', {
  de: 'El examen DELE C1', pt: 'Como é a prova DELE C1', gt: 'quatro provas · uso da língua · destrezas integradas · os dois grupos',
  gx: 'O DELE C1 tem quatro provas, e duas delas são integradas (juntam duas habilidades): 1. Comprensión de lectura y uso de la lengua (90 minutos); 2. Comprensión auditiva y uso de la lengua (50 minutos); 3. Destrezas integradas: comprensión auditiva y expresión e interacción escritas (80 minutos); 4. Destrezas integradas: comprensión de lectura y expresión e interacción orales (20 minutos, mais 20 de preparação). No total, 4 horas e 20 minutos.',
  ge: 'El examen dura cuatro horas y veinte minutos.=A prova dura quatro horas e vinte minutos.|En las pruebas integradas, escuchas y luego escribes.=Nas provas integradas, você escuta e depois escreve.|Hay que aprobar cada grupo por separado.=É preciso passar em cada grupo separadamente.',
  v: 'uso de la lengua=uso da língua=🧩|destrezas integradas=habilidades integradas=🔗|prueba=prova=📄|grupo=grupo=👥|apto=aprovado=🎉|preparación=preparação=⏱️|tarea=tarefa=✅|fuente=fonte=📚|exposición=exposição=🎤|conversación=conversa=💬',
  x: 'guía del examen=guia da prova|modelo de examen=simulado|Instituto Cervantes=Instituto Cervantes|calificación=nota|convocatoria=data de prova|diploma=diploma|universidad=universidade|requisito=requisito|nivel=nível|candidato=candidato',
  dlg: '¿Qué tiene de especial el DELE C1?=O que o DELE C1 tem de especial?|Que hay pruebas integradas: escuchas una conferencia y después escribes sobre ella.=Que há provas integradas: você ouve uma palestra e depois escreve sobre ela.|¿Y cuánto dura?=E quanto dura?|Cuatro horas y veinte. Hay que llegar descansado.=Quatro horas e vinte. É preciso chegar descansado.',
  cz: 'El examen dura cuatro horas y ___ minutos. (20)=veinte=treinta=cuarenta|En las pruebas ___, escuchas y luego escribes. (integradas)=integradas=integrales=juntas|Hay que aprobar ___ grupo por separado.=cada=todo=cada uno',
  whys: 'total: 4 h 20|destrezas integradas|cada + substantivo',
  pts: 'Provas 1 e 2: leitura e audição, cada uma com tarefas de uso da língua (conectores, preposições, vocabulário em contexto). 90 e 50 minutos.|Prova 3 (80 minutos): você ouve um áudio, toma notas e escreve um texto a partir dele; depois, uma segunda tarefa escrita à escolha.|Prova 4 (20 minutos + 20 de preparação): você lê textos e faz uma exposição, depois conversa e negocia com o examinador.|Nota: dois grupos (prova 1 + prova 3; prova 2 + prova 4), com 30 pontos ou mais em cada para ser APTO. Confira sempre a guia oficial: o Cervantes atualizou o modelo do C1 em 2024.',
  ex: 'En la prueba 3 hay que tomar notas de un audio.=Na prova 3 é preciso fazer anotações de um áudio.|La prueba oral empieza con una exposición.=A prova oral começa com uma exposição.|El uso de la lengua evalúa la gramática en contexto.=O uso da língua avalia a gramática em contexto.|Conviene hacer un modelo de examen completo.=Convém fazer um simulado completo.',
  bd: ['Hay_que_aprobar=V^regra geral|cada_grupo=OA|por_separado.=M^30 ou mais em cada', 'É preciso passar em cada grupo separadamente.'],
  rule: 'dele_c1',
  hw: 'Baixe um modelo de prova DELE C1 no site do Instituto Cervantes e leia só as instruções das quatro provas: anote o que cada tarefa pede.',
  deep: `
Hoje começa o último módulo do **C1**: as provas **DELE C1** e **SIELE**. Primeiro, a estrutura do DELE C1.
# Passo 1: as quatro provas
@ P:DELE C1;1=Lectura y uso de la lengua: 90 min;2=Auditiva y uso de la lengua: 50 min;3=Auditiva + escrita: 80 min;4=Lectura + oral: 20 min + 20
~ El examen dura cuatro horas y veinte minutos. = A prova dura quatro horas e vinte minutos.
! Durações da tabela oficial do Instituto Cervantes. O modelo do C1 foi atualizado em 2024: confira a guia oficial antes de se inscrever.
# Passo 2: as destrezas integradas
| Prova | Junta |
| 3 | ouvir + escrever |
| 4 | ler + falar |
~ En las pruebas integradas, escuchas y luego escribes. = Nas provas integradas, você escuta e depois escreve.
BR Na prova integrada, o texto que você ouve ou lê é a **fonte** do que você produz. Copiar frases inteiras não vale: reformule.
# Passo 3: o uso da língua
@ V:Uso da língua;O que avalia|conectores, preposições, vocabulário em contexto;Como treinar|ler muito e revisar os módulos 26 a 37
~ El uso de la lengua evalúa la gramática en contexto. = O uso da língua avalia a gramática em contexto.
~ Los conectores son muy importantes. = Os conectores são muito importantes.
# Passo 4: a nota
| Grupo | Provas |
| 1 | 1 (leitura) + 3 (escrita integrada) |
| 2 | 2 (audição) + 4 (oral integrada) |
~ Hay que aprobar cada grupo por separado. = É preciso passar em cada grupo separadamente.
~ Conviene hacer un modelo de examen completo. = Convém fazer um simulado completo.
> Treine agora: diga em espanhol quanto dura a prova e o que é uma prova integrada.
? Quanto dura o DELE C1? || 4 horas e 20 minutos
? A prova 3 junta…: || ouvir e escrever
? A prova 4 junta…: || ler e falar
`,
});

NL('es-c1lectura', {
  de: 'Lectura y uso de la lengua', pt: 'Estratégias para leitura e uso da língua', gt: 'textos longos e densos · lacunas com conectores e preposições · vocabulário em contexto · gestão de 90 minutos',
  gx: 'Na prova 1 do C1, os textos são longos, acadêmicos ou literários, e há tarefas de uso da língua: completar lacunas com a palavra certa (conectores, preposições, verbos em contexto). Estratégias: ler o parágrafo inteiro antes de escolher, olhar a palavra antes e depois da lacuna (regência: depender de, consistir en), e reconhecer a função do conector (contraste, causa, adição).',
  ge: 'Lee el párrafo entero antes de elegir la opción.=Leia o parágrafo inteiro antes de escolher a opção.|Fíjate en la preposición que pide el verbo.=Preste atenção na preposição que o verbo pede.|Este conector introduce un contraste.=Esse conector introduz um contraste.',
  v: 'hueco=lacuna=⬜|opción=opção=🔘|regencia=regência=🔗|conector=conector=🧷|función=função=⚙️|contraste=contraste=⚖️|adición=adição=➕|matiz=nuance=🎚️|denso=denso=🧱|descartar=descartar=❌',
  x: 'texto académico=texto acadêmico|texto literario=texto literário|fragmento=trecho|párrafo=parágrafo|contexto=contexto|significado=significado|preposición=preposição|verbo=verbo|cronómetro=cronômetro|hoja de respuestas=folha de respostas',
  dlg: 'En el uso de la lengua siempre dudo entre dos opciones.=No uso da língua eu sempre fico em dúvida entre duas opções.|¿Miras la palabra que va antes del hueco?=Você olha a palavra que vem antes da lacuna?|No siempre.=Nem sempre.|Hazlo: si el verbo es "consistir", la respuesta es "en". La regencia decide.=Faça isso: se o verbo é "consistir", a resposta é "en". A regência decide.',
  cz: 'Lee el párrafo ___ antes de elegir. (inteiro)=entero=entera=enteiro|Fíjate en la preposición que ___ el verbo. (pede)=pide=pede=pida de|El método consiste ___ comparar dos grupos.=en=de=a',
  whys: 'párrafo é masculino: entero|pedir: pide|consistir en',
  pts: 'Leia o parágrafo inteiro antes da lacuna: o conector certo depende da relação entre as ideias (contraste, causa, adição, conclusão).|Regência: olhe a palavra antes da lacuna. Depender de, consistir en, confiar en, tratar de, contar con, soñar con.|Descarte: elimine primeiro as opções que quebram a gramática (gênero, número, modo); depois escolha pelo sentido.|Tempo: 90 minutos para cinco tarefas. Não fique preso numa lacuna: marque, siga e volte no fim.',
  ex: 'Descarta primero las opciones imposibles.=Descarte primeiro as opções impossíveis.|"Sin embargo" introduce un contraste.="Sin embargo" introduz um contraste.|Todo depende de la preposición.=Tudo depende da preposição.|Vuelve al final a los huecos difíciles.=Volte no fim às lacunas difíceis.',
  bd: ['Fíjate_en=V^fijarse en|la_preposición=OA|que_pide_el_verbo.=C^regência', 'Preste atenção na preposição que o verbo pede.'],
  rule: 'c1_lectura',
  hw: 'Faça uma lista de vinte verbos com regência (depender de, consistir en, contar con, tratar de…) e escreva uma frase para cada um.',
  deep: `
Hoje você aprende **estratégias para a prova 1**: leitura de textos densos e **uso da língua**.
# Passo 1: o parágrafo inteiro
~ Lee el párrafo entero antes de elegir. = Leia o parágrafo inteiro antes de escolher.
@ P:Função do conector;Contraste=sin embargo, no obstante;Causa=ya que, debido a;Adição=asimismo, además;Conclusão=en suma, por tanto
~ "Sin embargo" introduce un contraste. = "Sin embargo" introduz um contraste.
# Passo 2: a regência
| Verbo | Preposição |
| depender | de |
| consistir | en |
| contar | con |
| tratar | de |
~ Fíjate en la preposición que pide el verbo. = Preste atenção na preposição que o verbo pede.
~ Todo depende de la preposición. = Tudo depende da preposição.
BR Algumas regências mudam do português: "sonhar **com**" é **soñar con**, mas "casar **com**" é **casarse con** e "pensar **em**" é **pensar en**: atenção às que parecem iguais e não são.
# Passo 3: descartar
@ V:Descartar;Primeiro|opções que quebram a gramática;Depois|escolher pelo sentido
~ Descarta primero las opciones imposibles. = Descarte primeiro as opções impossíveis.
# Passo 4: o tempo
| Dica | Por quê |
| não fique preso | todas valem o mesmo |
| volte no fim | a cabeça descansa |
~ Vuelve al final a los huecos difíciles. = Volte no fim às lacunas difíceis.
! Os módulos 26 a 37 (conectores, registro, colocações) são a melhor preparação para o uso da língua.
> Treine agora: diga a preposição de depender, consistir, contar e tratar.
? "Depender": || depender de
? "Consistir": || consistir en
? "Sin embargo" introduz…: || um contraste
`,
});

NL('es-c1integrada', {
  de: 'Escuchar y escribir', pt: 'A prova integrada: ouvir e escrever', gt: 'tomar notas de uma palestra · organizar as notas · escrever a partir da fonte · reformular · a segunda tarefa',
  gx: 'Na prova 3 do C1, você ouve um áudio (uma palestra, uma entrevista) e escreve um texto a partir dele, como um resumo ou um artigo, usando as ideias da fonte com as suas palavras. Depois vem uma segunda tarefa escrita, à escolha. As chaves: tomar notas eficientes, organizar as ideias antes de escrever e reformular, citando a fonte (Según el conferenciante…, Como se explica en la conferencia…).',
  ge: 'Según la conferenciante, las ciudades deben cambiar.=Segundo a palestrante, as cidades devem mudar.|Toma notas con abreviaturas y flechas.=Faça anotações com abreviaturas e setas.|Reformula las ideas con tus propias palabras.=Reformule as ideias com as suas próprias palavras.',
  v: 'conferencia=palestra=🎤|conferenciante=palestrante=🧑‍🏫|abreviatura=abreviatura=✂️|flecha=seta=➡️|esquema=esquema=🗂️|reformular=reformular=🔁|propias palabras=próprias palavras=💬|fuente=fonte=📚|idea clave=ideia-chave=🔑|ejemplo=exemplo=📌',
  x: 'audio=áudio|entrevista=entrevista|ponente=palestrante|dato=dado|argumento=argumento|conclusión=conclusão|resumen=resumo|artículo=artigo|informe=relatório|borrador=rascunho',
  dlg: 'Cuando escucho la conferencia, intento escribirlo todo y me pierdo.=Quando escuto a palestra, tento escrever tudo e me perco.|Usa abreviaturas: "q" para "que", una flecha para "causa".=Use abreviaturas: "q" para "que", uma seta para "causa".|¿Y después?=E depois?|Ordena las notas en un esquema y escribe con tus palabras, citando la fuente.=Organize as notas num esquema e escreva com as suas palavras, citando a fonte.',
  cz: 'Según ___ conferenciante, las ciudades deben cambiar. (a)=la=el=lo|Toma notas con abreviaturas y ___. (setas)=flechas=setas=flechos|Reformula las ideas con tus ___ palabras. (próprias)=propias=proprias=propios',
  whys: 'la conferenciante (mulher)|seta = flecha|propias (sem r)',
  pts: 'Notas: só palavras-chave, números, nomes e a relação entre as ideias. Abreviaturas (q = que, x = por, + = más) e setas (→ causa).|Organizar: antes de escrever, transforme as notas num esquema: tese da fonte, dois ou três argumentos, um exemplo, a conclusão.|Escrever: cite a fonte (Según la conferenciante …, Como se explica en la conferencia …) e reformule; não copie frases inteiras.|Segunda tarefa: escolha a opção cujo gênero você domina melhor (carta, artigo, resenha) e use a mesma técnica de planejar e revisar.',
  ex: 'Como se explica en la conferencia, el modelo actual no funciona.=Como se explica na palestra, o modelo atual não funciona.|Ordena las notas en un esquema.=Organize as notas num esquema.|La conferenciante pone como ejemplo París.=A palestrante dá Paris como exemplo.|No copies frases enteras del audio.=Não copie frases inteiras do áudio.',
  bd: ['Según_la_conferenciante,=L^fonte|las_ciudades=S|deben_cambiar.=V', 'Segundo a palestrante, as cidades devem mudar.'],
  rule: 'c1_integrada',
  hw: 'Escute uma palestra curta em espanhol (TED en Español, por exemplo), faça anotações com abreviaturas e escreva um resumo de 150 palavras citando a fonte.',
  deep: `
Hoje você aprende a **prova integrada de ouvir e escrever**, a marca do DELE C1.
# Passo 1: tomar notas
@ P:Notas eficientes;q=que;x=por;+=más;→=causa, leva a
~ Toma notas con abreviaturas y flechas. = Faça anotações com abreviaturas e setas.
BR "Seta" em espanhol é **flecha**. E **seta** em espanhol é cogumelo!
# Passo 2: organizar
| Das notas | Ao esquema |
| tese da fonte | introdução |
| argumentos e exemplo | desenvolvimento |
| conclusão | fecho |
~ Ordena las notas en un esquema. = Organize as notas num esquema.
# Passo 3: citar e reformular
@ V:Usar a fonte;Citar|Según la conferenciante, …;Reformular|com as suas próprias palavras
~ Según la conferenciante, las ciudades deben cambiar. = Segundo a palestrante, as cidades devem mudar.
~ No copies frases enteras del audio. = Não copie frases inteiras do áudio.
~ Reformula las ideas con tus propias palabras. = Reformule as ideias com as suas próprias palavras.
# Passo 4: a segunda tarefa
~ Elige el género que mejor dominas. = Escolha o gênero que você domina melhor.
| Gênero | Módulo |
| artigo de opinião, coluna | 36 |
| relatório, comentário de dados | 37 |
| carta formal | 26, 35 |
! Divida os 80 minutos: escuta e notas, cerca de 40 minutos para a primeira tarefa e o resto para a segunda e a revisão.
> Treine agora: escute um minuto de qualquer podcast em espanhol e anote só cinco palavras-chave com setas.
? "Seta": || flecha
? "Segundo a palestrante": || Según la conferenciante
? "Com as suas próprias palavras": || con tus propias palabras
`,
});

NL('es-c1oral', {
  de: 'La exposición oral', pt: 'Estratégias para a prova oral do C1', gt: 'preparar a exposição a partir de textos · estruturar a fala · conversar com o examinador · negociar e chegar a um acordo',
  gx: 'Na prova 4 do C1, você lê textos durante a preparação e, em geral, faz uma exposição sobre o tema, conversa com o examinador sobre ela e participa de uma negociação ou debate. As chaves: anotar a estrutura (não um texto), marcar a fala com conectores (En primer lugar, me gustaría señalar que…), responder com nuance e negociar (Podríamos llegar a un acuerdo si…).',
  ge: 'Me gustaría empezar señalando un problema.=Gostaria de começar apontando um problema.|En los textos se plantean dos posturas.=Nos textos se apresentam duas posições.|Podríamos llegar a un acuerdo si cada uno cede un poco.=Poderíamos chegar a um acordo se cada um ceder um pouco.',
  v: 'exposición=exposição=🎤|postura=posição=🧭|señalar=apontar=☝️|llegar a un acuerdo=chegar a um acordo=🤝|ceder=ceder=↩️|propuesta=proposta=💡|matizar=matizar=🎚️|resumir=resumir=📝|guion=roteiro=🗒️|negociar=negociar=💬',
  x: 'examinador=examinador|texto=texto|tema=tema|tiempo=tempo|preparación=preparação|conclusión=conclusão|ejemplo=exemplo|opinión=opinião|alternativa=alternativa|compromiso=compromisso',
  dlg: 'Tienes dos minutos más para terminar tu exposición.=Você tem mais dois minutos para terminar a sua exposição.|Gracias. Para resumir, los textos coinciden en el problema, pero no en la solución.=Obrigada. Para resumir, os textos coincidem no problema, mas não na solução.|¿Y usted qué propondría?=E o que você proporia?|Propondría combinar ambas posturas: podríamos llegar a un acuerdo si se reducen los plazos.=Eu proporia combinar as duas posições: poderíamos chegar a um acordo se os prazos forem reduzidos.',
  cz: 'Me gustaría empezar ___ un problema. (apontando)=señalando=apuntando de=señalar|En los textos se ___ dos posturas. (apresentam)=plantean=plantan=presentan de|Podríamos llegar ___ un acuerdo.=a=en=con',
  whys: 'gerúndio: señalando|plantear (≠ plantar)|llegar a un acuerdo',
  pts: 'Preparação: leia os textos e anote a estrutura da exposição (tese, dois ou três pontos, exemplo, conclusão) e conectores, não um texto para ler.|Exposição: anuncie e conduza: Me gustaría empezar …, En primer lugar …, Por otra parte …, Para resumir …|Conversa: responda com nuance (hasta cierto punto, depende de …) e peça esclarecimento se precisar: ¿Se refiere a …?|Negociação: proponha e ceda: Podríamos llegar a un acuerdo si … / Estoy dispuesta a … siempre que + subjuntivo.',
  ex: 'Para resumir, los textos coinciden en el problema.=Para resumir, os textos coincidem no problema.|¿Se refiere usted a los costes?=O senhor se refere aos custos?|Estoy dispuesta a ceder siempre que se respete el plazo.=Estou disposta a ceder desde que o prazo seja respeitado.|Por otra parte, conviene matizar un punto.=Por outro lado, convém matizar um ponto.',
  bd: ['Podríamos_llegar_a_un_acuerdo=V^negociar|si_cada_uno=C|cede_un_poco.=V', 'Poderíamos chegar a um acordo se cada um ceder um pouco.'],
  rule: 'c1_oral',
  hw: 'Leia dois artigos com opiniões opostas sobre um tema (por exemplo, turismo nas cidades) e grave uma exposição de quatro minutos com introdução, as duas posições, a sua proposta e o resumo.',
  deep: `
Hoje você aprende **estratégias para a prova oral** do DELE C1.
# Passo 1: preparar a partir dos textos
@ P:A preparação;Ler=os textos e marcar as posições;Anotar=tese, dois ou três pontos, exemplo;Conectores=en primer lugar, por otra parte, para resumir
~ En los textos se plantean dos posturas. = Nos textos se apresentam duas posições.
BR Anote só o **roteiro** (guion). Ler um texto pronto na prova oral perde pontos de fluidez.
# Passo 2: conduzir a exposição
| Momento | Fórmula |
| abrir | Me gustaría empezar señalando … |
| ordenar | En primer lugar … Por otra parte … |
| fechar | Para resumir … |
~ Me gustaría empezar señalando un problema. = Gostaria de começar apontando um problema.
~ Para resumir, los textos coinciden en el problema. = Para resumir, os textos coincidem no problema.
# Passo 3: a conversa
@ V:Conversar;Nuance|Hasta cierto punto, depende de …;Esclarecer|¿Se refiere usted a …?
~ ¿Se refiere usted a los costes? = O senhor se refere aos custos?
~ Por otra parte, conviene matizar un punto. = Por outro lado, convém matizar um ponto.
# Passo 4: negociar
~ Podríamos llegar a un acuerdo. = Poderíamos chegar a um acordo.
~ Estoy dispuesta a ceder siempre que se respete el plazo. = Estou disposta a ceder desde que o prazo seja respeitado.
! **Siempre que** com sentido de condição pede subjuntivo: siempre que se respet**e**.
> Treine agora: proponha um acordo sobre o horário de uma reunião usando siempre que.
? "Gostaria de começar apontando": || Me gustaría empezar señalando
? "Poderíamos chegar a um acordo": || Podríamos llegar a un acuerdo
? "Desde que se respeite": || siempre que se respete
`,
});

NL('es-siele', {
  de: 'El SIELE', pt: 'O SIELE: a prova online', gt: 'SIELE Global · quatro provas no computador · nota de 0 a 1000 · níveis A1 a C1 · DELE ou SIELE?',
  gx: 'O SIELE (Servicio Internacional de Evaluación de la Lengua Española) é a outra prova oficial, do Instituto Cervantes com universidades do México, da Espanha e da Argentina. É feita no computador, não tem aprovado ou reprovado: dá uma nota de 0 a 1000 e um nível do A1 ao C1. O SIELE Global tem quatro provas: leitura (60 minutos), audição (55), escrita (50) e oral (cerca de 15 a 20 minutos, gravada no computador).',
  ge: 'El SIELE se hace en el ordenador.=O SIELE é feito no computador.|No hay aprobado ni suspenso: recibes una puntuación.=Não há aprovado nem reprovado: você recebe uma nota.|La prueba oral se graba en el ordenador.=A prova oral é gravada no computador.',
  v: 'SIELE=SIELE=💻|puntuación=pontuação=🔢|ordenador=computador (Espanha)=🖥️|computadora=computador (América)=💻|grabar=gravar=🎙️|suspenso=reprovado (Espanha)=❌|certificado=certificado=📜|nivel=nível=📶|resultado=resultado=📊|en línea=online=🌐',
  x: 'universidad=universidade|centro de examen=centro de exame|inscripción=inscrição|fecha=data|auriculares=fones de ouvido|micrófono=microfone|pantalla=tela|empresa=empresa|beca=bolsa de estudos|visado=visto',
  dlg: '¿Hago el DELE o el SIELE?=Faço o DELE ou o SIELE?|Depende. ¿Para qué lo necesitas?=Depende. Para que você precisa?|Para una beca, y me piden el resultado en un mes.=Para uma bolsa, e me pedem o resultado em um mês.|Entonces el SIELE: es en el ordenador y el resultado sale antes. Pero confirma que la beca lo acepta.=Então o SIELE: é no computador e o resultado sai antes. Mas confirme que a bolsa aceita.',
  cz: 'El SIELE se hace en el ___. (computador, Espanha)=ordenador=computador=ordenadora|No hay aprobado ni ___. (reprovado)=suspenso=reprovado=suspendido de|La prueba oral se ___ en el ordenador. (grava)=graba=grava=grabe de',
  whys: 'Espanha: ordenador|aprobado ni suspenso|grabar com b',
  pts: 'O SIELE Global tem quatro provas no computador: Comprensión de lectura (60 min), Comprensión auditiva (55 min), Expresión e interacción escritas (50 min) e Expresión e interacción orales (cerca de 15 a 20 min, gravada).|Nota: de 0 a 1000 (a soma das quatro provas), com um nível do A1 ao C1. Não há "apto" nem "no apto".|DELE: diploma de um nível só, com aprovado ou não, que não vence. SIELE: certificado com validade limitada (confira o prazo atual no site oficial), mais rápido e flexível.|Como escolher: veja o que a instituição pede (universidade, empresa, bolsa, visto) e o prazo de que você precisa.',
  ex: 'La puntuación máxima es de mil puntos.=A pontuação máxima é de mil pontos.|El SIELE certifica hasta el nivel C1.=O SIELE certifica até o nível C1.|El DELE no caduca.=O DELE não vence.|Confirma qué examen acepta la universidad.=Confirme que prova a universidade aceita.',
  bd: ['No_hay=V|aprobado_ni_suspenso:=OA^sem aprovado ou reprovado|recibes_una_puntuación.=V', 'Não há aprovado nem reprovado: você recebe uma nota.'],
  rule: 'siele',
  hw: 'Pesquise que prova de espanhol (DELE ou SIELE) é aceita pela instituição que mais interessa a você e escreva em espanhol três frases explicando a sua escolha.',
  deep: `
Hoje você conhece o **SIELE**, a prova online de espanhol, e aprende a escolher entre DELE e SIELE.
# Passo 1: o que é o SIELE
@ P:SIELE Global;Leitura=60 min;Audição=55 min;Escrita=50 min;Oral=cerca de 15 a 20 min
~ El SIELE se hace en el ordenador. = O SIELE é feito no computador.
~ La prueba oral se graba en el ordenador. = A prova oral é gravada no computador.
! Durações conferidas em guias de universidades parceiras (UCM, UBU). Confira o formato atual no site oficial do SIELE.
# Passo 2: a nota
| SIELE | DELE |
| nota de 0 a 1000 | apto ou no apto |
| nível do A1 ao C1 | um nível por prova |
~ No hay aprobado ni suspenso. = Não há aprovado nem reprovado.
~ La puntuación máxima es de mil puntos. = A pontuação máxima é de mil pontos.
BR Na Espanha, "reprovado" é **suspenso** e "computador" é **ordenador**; na América Latina, **reprobado** e **computadora**.
# Passo 3: DELE ou SIELE?
@ V:Comparar;DELE|diploma que não vence, aprovado ou não;SIELE|no computador, mais flexível, certificado com validade limitada
~ El DELE no caduca. = O DELE não vence.
~ El SIELE certifica hasta el nivel C1. = O SIELE certifica até o nível C1.
# Passo 4: como escolher
~ Confirma qué examen acepta la universidad. = Confirme que prova a universidade aceita.
| Pergunta | Por quê |
| Que prova a instituição aceita? | nem todas aceitam as duas |
| Quando preciso do resultado? | os prazos são diferentes |
> Treine agora: explique em espanhol qual prova você faria e por quê.
? A nota do SIELE vai de… || 0 a 1000
? O DELE vence? || Não: no caduca.
? "Computador" na Espanha: || ordenador
`,
});

NL('es-c1simulado', {
  de: 'Simulacro de tarea integrada', pt: 'Ler e escrever: um simulado da tarefa integrada', gt: 'artigo a partir de uma fonte: citar, reformular, estruturar, matizar e concluir',
  gx: 'Este simulado fecha o C1: você lê as anotações de uma palestra sobre a "cidade de 15 minutos" (como as que faria na prova 3) e escreve um artigo para uma revista usando a fonte: citar (Según la conferenciante…), reformular, organizar (En primer lugar, Asimismo), conceder (Si bien…), propor e concluir com cautela.',
  ge: 'Según la conferenciante, la ciudad de quince minutos mejora la calidad de vida.=Segundo a palestrante, a cidade de quinze minutos melhora a qualidade de vida.|Si bien la idea es atractiva, no es fácil de aplicar en todas partes.=Embora a ideia seja atraente, não é fácil de aplicar em todo lugar.|En definitiva, todo indica que vale la pena intentarlo.=Em definitivo, tudo indica que vale a pena tentar.',
  v: 'ciudad de 15 minutos=cidade de 15 minutos=🏙️|calidad de vida=qualidade de vida=🌿|a pie=a pé=🚶|servicios=serviços=🏥|barrio=bairro=🏘️|urbanista=urbanista=📐|aplicar=aplicar=🛠️|periferia=periferia=🗺️|desplazamiento=deslocamento=🚌|todo indica=tudo indica=🧭',
  x: 'conferencia=palestra|apuntes=anotações|revista=revista|artículo=artigo|comercio=comércio|parque=parque|escuela=escola|transporte=transporte|densidad=densidade|desigualdad=desigualdade',
  dlg: '¿Cómo te fue en el simulacro de la prueba 3?=Como foi no simulado da prova 3?|Bien. Tomé notas con flechas y me sirvieron mucho.=Bem. Fiz anotações com setas e me ajudaram muito.|¿Y el artículo?=E o artigo?|Cité a la conferenciante, maticé con "si bien" y cerré con "todo indica que". Creo que quedó redondo.=Citei a palestrante, matizei com "si bien" e fechei com "todo indica que". Acho que ficou redondo.',
  cz: 'Según la conferenciante, la ciudad de quince minutos ___ la calidad de vida. (melhora)=mejora=melhora=mejore|Si bien la idea ___ atractiva, no es fácil de aplicar. (é)=es=sea=está|En definitiva, todo ___ que vale la pena. (indica)=indica=indique=indicaba de',
  whys: 'según + indicativo|si bien + indicativo|todo indica que',
  pts: 'Introdução: apresente o tema e a fonte: En una conferencia reciente, la urbanista … planteó …|Desenvolvimento: reformule as ideias da fonte com conectores: En primer lugar …, Asimismo …, Según la conferenciante …|Matiz: conceda um limite: Si bien …, no es menos cierto que … / Cabe preguntarse si …|Conclusão: proposta e cautela: Sería conveniente que + subjuntivo … En definitiva, todo indica que …',
  ex: 'En una conferencia reciente, una urbanista planteó esta idea.=Numa palestra recente, uma urbanista propôs essa ideia.|Asimismo, se reducen los desplazamientos en carro.=Da mesma forma, reduzem-se os deslocamentos de carro.|Cabe preguntarse si funcionaría en la periferia.=Cabe perguntar se funcionaria na periferia.|Sería conveniente que cada barrio tuviera servicios básicos.=Seria conveniente que cada bairro tivesse serviços básicos.',
  bd: ['Si_bien_la_idea_es_atractiva,=C^concessão: si bien + indicativo|no_es_fácil_de_aplicar=V|en_todas_partes.=L', 'Embora a ideia seja atraente, não é fácil de aplicar em todo lugar.'],
  rule: 'c1_simulado',
  le: {
    texto: {
      t: 'Apuntes de la conferencia «La ciudad de los 15 minutos»', kind: 'anotações de palestra', voz: 'a',
      intro: 'As anotações que uma candidata fez durante uma palestra, como na prova 3 do DELE C1. Leia e responda.',
      paras: ['Conferenciante: Laura Vidal, urbanista, Universidad de Guadalajara. Tema: la ciudad de los 15 minutos.', 'Idea clave: vivir a 15 minutos a pie o en bici de lo esencial: trabajo, escuela, salud, comercio, parques.', 'Ventajas: menos desplazamientos → menos tráfico y contaminación; más vida de barrio; más tiempo libre.', 'Ejemplos: París y Barcelona, con calles para peatones y servicios repartidos por los barrios.', 'Límites: difícil en la periferia, con poca densidad y pocos servicios; riesgo de que suban los alquileres en los barrios mejorados. Conclusión: hay que adaptarla a cada ciudad, no copiarla.'],
      qs: [
        { q: 'Qual é a ideia-chave da palestra?', o: ['viver a 15 minutos a pé ou de bicicleta do essencial', 'trabalhar só 15 minutos por dia', 'construir mais rodovias'], a: 0 },
        { q: 'Qual é uma vantagem citada?', o: ['menos deslocamentos, menos trânsito e poluição', 'aluguéis mais baratos em todo lugar', 'mais carros no centro'], a: 0 },
        { q: 'Que limite a palestrante aponta?', o: ['é difícil na periferia e os aluguéis podem subir', 'ninguém gosta de caminhar', 'só funciona na Europa'], a: 0 },
        { q: 'Qual é a conclusão?', o: ['é preciso adaptar a ideia a cada cidade', 'é preciso copiar Paris', 'a ideia não serve'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva o artigo', tipo: 'form', ok: 'Artigo escrito corretamente.',
      pede: 'Escreva um artigo para uma revista sobre a cidade de 15 minutos, usando as anotações da palestra. Uma frase por linha.',
      campos: [
        { l: 'Apresentar tema e fonte', d: 'En una conferencia reciente, la urbanista … planteó …', re: '(conferencia|según|la urbanista|la conferenciante|como se explica|planteó|propuso)', f: 'iu', err: 'Apresente a fonte: En una conferencia reciente, la urbanista Laura Vidal planteó …', bad: [['segundo (la|el) (conferenciante|urbanista|conferencia)(?!\\p{L})', '"Segundo" (a fonte) é <b>según</b>.']] },
        { l: 'Ideia da fonte reformulada', d: 'Según la conferenciante, …', re: '(según|de acuerdo con|para la|la idea (clave )?consiste en|se trata de|la propuesta)', f: 'iu', err: 'Reformule a ideia central: Según la conferenciante, … / La idea consiste en …' },
        { l: 'Argumentos organizados', d: 'En primer lugar … Asimismo …', re: '(en primer lugar|asimismo|además|por otra parte|en segundo lugar)', f: 'iu', err: 'Organize as vantagens: En primer lugar, … Asimismo, …' },
        { l: 'Matiz ou limite', d: 'Si bien …, no es menos cierto que … / Cabe preguntarse si …', re: '(si bien|no es menos cierto|cabe preguntarse|no obstante|ahora bien|sin embargo)', f: 'iu', err: 'Mostre um limite: Si bien …, no es menos cierto que …' },
        { l: 'Proposta', d: 'Sería conveniente que + subjuntivo …', re: '(sería conveniente que|habría que|convendría|propondría que|es necesario que|sería necesario que)', f: 'iu', err: 'Faça uma proposta: Sería conveniente que cada barrio tuviera …', bad: [['sería (conveniente|necesario) que (\\p{L}+ )*?(tiene|tienen|hay|es|puede|pueden)(?!\\p{L})', 'Com <b>sería conveniente que</b>, o imperfeito do subjuntivo: <b>tuviera</b>, <b>hubiera</b>, <b>pudiera</b>.']] },
        { l: 'Conclusão com cautela', d: 'En definitiva, todo indica que …', re: '(en definitiva|en suma|todo indica|cabe concluir|en conclusión)', f: 'iu', err: 'Conclua com cautela: En definitiva, todo indica que …' },
      ],
      modelo: 'En una conferencia reciente, la urbanista Laura Vidal planteó la idea de la ciudad de los 15 minutos. · Según la conferenciante, se trata de vivir cerca de todo lo esencial. · En primer lugar, habría menos tráfico; asimismo, los barrios tendrían más vida. · Si bien la idea es atractiva, no es menos cierto que en la periferia es difícil de aplicar. · Sería conveniente que cada ciudad adaptara el modelo a su realidad. · En definitiva, todo indica que vale la pena intentarlo.',
    },
  },
  hw: 'Faça o simulado completo: escute uma palestra de dez minutos em espanhol, faça anotações e escreva um artigo de 200 palavras em 40 minutos, com as seis partes da lição.',
  deep: `
Esta lição é de **ler e escrever** e fecha o **C1**. Você vai ler as anotações de uma palestra e escrever um artigo, como na prova 3 do DELE C1.
# Passo 1: das anotações ao texto
@ P:Artigo a partir da fonte;Fonte=En una conferencia reciente, …;Ideia=Según la conferenciante, …;Argumentos=En primer lugar … Asimismo …;Limite=Si bien …;Proposta=Sería conveniente que …;Conclusão=En definitiva, …
~ Según la conferenciante, la idea mejora la vida. = Segundo a palestrante, a ideia melhora a vida.
# Passo 2: reformular as notas
| Nota | Frase |
| menos desplazamientos → menos tráfico | Se reducen los desplazamientos y, con ellos, el tráfico. |
| difícil en la periferia | Cabe preguntarse si funcionaría en la periferia. |
~ Asimismo, se reducen los desplazamientos. = Da mesma forma, reduzem-se os deslocamentos.
~ Cabe preguntarse si funcionaría en la periferia. = Cabe perguntar se funcionaria na periferia.
# Passo 3: matizar e propor
~ Si bien la idea es atractiva, no es fácil. = Embora a ideia seja atraente, não é fácil.
~ Sería conveniente que cada barrio tuviera servicios. = Seria conveniente que cada bairro tivesse serviços.
BR **Si bien** pede indicativo (es), como "embora" com fato conhecido; e **sería conveniente que** pede imperfeito do subjuntivo (tuviera), como "seria conveniente que tivesse".
# Passo 4: concluir
~ En definitiva, todo indica que vale la pena. = Em definitivo, tudo indica que vale a pena.
| Recurso | Módulo |
| citar e reformular | 34 |
| concessão e proposta | 30, 36 |
| conclusão com cautela | 34, 37 |
! Parabéns: com este simulado você fecha o **C1**. O C2 traz estilo, variedades do espanhol, literatura e a prova DELE C2.
> Agora leia as anotações da palestra e escreva o seu artigo.
? "Segundo a palestrante": || Según la conferenciante
? "Embora a ideia seja atraente": || Si bien la idea es atractiva
? "Tudo indica que": || todo indica que
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('El examen DELE C1',
  'P:DELE C1;1=Lectura y uso: 90 min;2=Auditiva y uso: 50 min;3=Auditiva + escrita: 80 min;4=Lectura + oral: 20 + 20 min',
  'M:A nota;Grupo|Provas;1|prova 1 + prova 3;2|prova 2 + prova 4;APTO|30 ou mais em cada');
V('Lectura y uso de la lengua',
  'P:Função do conector;Contraste=sin embargo;Causa=ya que;Adição=asimismo;Conclusão=en suma',
  'M:Regência;Verbo|Preposição;depender|de;consistir|en;contar|con;tratar|de');
V('Escuchar y escribir',
  'P:Notas;q=que;x=por;+=más;→=causa',
  'V:Usar a fonte;Citar|Según la conferenciante, …;Reformular|com as suas próprias palavras');
V('La exposición oral',
  'P:Exposição;Abrir=Me gustaría empezar señalando …;Ordenar=En primer lugar … Por otra parte …;Fechar=Para resumir …',
  'V:Negociar;Propor|Podríamos llegar a un acuerdo si …;Ceder|Estoy dispuesta a … siempre que …');
V('El SIELE',
  'P:SIELE Global;Leitura=60 min;Audição=55 min;Escrita=50 min;Oral=15 a 20 min',
  'M:DELE ou SIELE;Prova|Resultado;DELE|apto / no apto, não vence;SIELE|0 a 1000, A1 a C1');
V('Simulacro de tarea integrada',
  'P:Artigo;Fonte=En una conferencia reciente …;Ideia=Según la conferenciante …;Limite=Si bien …;Proposta=Sería conveniente que …;Conclusão=En definitiva …',
  'M:Das notas ao texto;Nota|Frase;menos desplazamientos → menos tráfico|Se reducen los desplazamientos.;difícil en la periferia|Cabe preguntarse si funcionaría.');
S_('El examen DELE C1', 'el examen dura=a prova dura|cuatro horas y veinte minutos=quatro horas e vinte minutos|en las pruebas integradas=nas provas integradas|escuchas=você escuta|y luego escribes=e depois escreve|hay que aprobar=é preciso passar|cada grupo=cada grupo|por separado=separadamente|qué tiene de especial=o que tem de especial|el DELE C1=o DELE C1|que hay pruebas integradas=que há provas integradas|escuchas una conferencia=você ouve uma palestra|y después escribes sobre ella=e depois escreve sobre ela|y cuánto dura=e quanto dura|cuatro horas y veinte=quatro horas e vinte|hay que llegar descansado=é preciso chegar descansado|veinte=vinte|treinta=trinta|cuarenta=quarenta|integradas=integradas|integrales=integrais|juntas=juntas|cada=cada|todo=todo|cada uno=cada um|en la prueba 3=na prova 3|hay que tomar notas=é preciso fazer anotações|de un audio=de um áudio|la prueba oral=a prova oral|empieza con una exposición=começa com uma exposição|el uso de la lengua=o uso da língua|evalúa la gramática=avalia a gramática|en contexto=em contexto|conviene hacer=convém fazer|un modelo de examen completo=um simulado completo|lectura y uso de la lengua=leitura e uso da língua|auditiva y uso de la lengua=audição e uso da língua|comprensión de lectura=compreensão de leitura|comprensión auditiva=compreensão auditiva|expresión e interacción escritas=expressão e interação escritas|expresión e interacción orales=expressão e interação orais|destrezas integradas=habilidades integradas|auditiva=audição|escrita=escrita|lectura=leitura|oral=oral|min=min|DELE=DELE|C1=C1');
S_('Lectura y uso de la lengua', 'lee el párrafo entero=leia o parágrafo inteiro|antes de elegir=antes de escolher|la opción=a opção|fíjate en=preste atenção em|la preposición=a preposição|que pide el verbo=que o verbo pede|este conector=esse conector|introduce un contraste=introduz um contraste|en el uso de la lengua=no uso da língua|siempre dudo=sempre fico em dúvida|entre dos opciones=entre duas opções|miras la palabra=você olha a palavra|que va antes del hueco=que vem antes da lacuna|no siempre=nem sempre|hazlo=faça isso|si el verbo es consistir=se o verbo é consistir|la respuesta es en=a resposta é en|la regencia decide=a regência decide|entero=inteiro|entera=inteira|enteiro=(erro) enteiro|pide=pede|pede=(erro) pede|pida de=(erro) pida de|el método=o método|consiste=consiste|comparar dos grupos=comparar dois grupos|en=em|de=de|a=a|descarta primero=descarte primeiro|las opciones imposibles=as opções impossíveis|sin embargo=no entanto|todo depende de=tudo depende de|vuelve al final=volte no fim|a los huecos difíciles=às lacunas difíceis|depender=depender|consistir=consistir|contar=contar|tratar=tratar|con=com|soñar con=sonhar com|casarse con=casar com|pensar en=pensar em|ya que=já que|debido a=devido a|asimismo=da mesma forma|además=além disso|en suma=em suma|por tanto=portanto|no obstante=no entanto|consistir en=consistir em|depender de=depender de|contar con=contar com|tratar de=tratar de');
S_('Escuchar y escribir', 'según la conferenciante=segundo a palestrante|las ciudades=as cidades|deben cambiar=devem mudar|toma notas=faça anotações|con abreviaturas=com abreviaturas|y flechas=e setas|reformula las ideas=reformule as ideias|con tus propias palabras=com as suas próprias palavras|cuando escucho la conferencia=quando escuto a palestra|intento escribirlo todo=tento escrever tudo|y me pierdo=e me perco|usa abreviaturas=use abreviaturas|q para que=q para que|una flecha para causa=uma seta para causa|y después=e depois|ordena las notas=organize as notas|en un esquema=num esquema|y escribe con tus palabras=e escreva com as suas palavras|citando la fuente=citando a fonte|la=a|el=o|lo=o|flechas=setas|setas=cogumelos|flechos=(erro) flechos|propias=próprias|proprias=(erro) proprias|propios=próprios|como se explica en la conferencia=como se explica na palestra|el modelo actual no funciona=o modelo atual não funciona|la conferenciante pone como ejemplo=a palestrante dá como exemplo|París=Paris|no copies frases enteras=não copie frases inteiras|del audio=do áudio|elige el género=escolha o gênero|que mejor dominas=que você domina melhor|q=que|x=por|seta=cogumelo|según el conferenciante=segundo o palestrante|TED en Español=TED em espanhol');
S_('La exposición oral', 'me gustaría empezar=gostaria de começar|señalando un problema=apontando um problema|en los textos=nos textos|se plantean dos posturas=se apresentam duas posições|podríamos llegar a un acuerdo=poderíamos chegar a um acordo|si cada uno cede un poco=se cada um ceder um pouco|tienes dos minutos más=você tem mais dois minutos|para terminar tu exposición=para terminar a sua exposição|gracias=obrigada|para resumir=para resumir|los textos coinciden=os textos coincidem|en el problema=no problema|pero no en la solución=mas não na solução|y usted qué propondría=e o que você proporia|propondría combinar=eu proporia combinar|ambas posturas=as duas posições|si se reducen los plazos=se os prazos forem reduzidos|señalando=apontando|apuntando de=(erro) apuntando de|señalar=apontar|plantean=apresentam|plantan=plantam|presentan de=(erro) presentan de|a=a|en=em|con=com|se refiere usted a=o senhor se refere a|los costes=os custos|estoy dispuesta a ceder=estou disposta a ceder|siempre que se respete el plazo=desde que o prazo seja respeitado|por otra parte=por outro lado|conviene matizar=convém matizar|un punto=um ponto|en primer lugar=em primeiro lugar|hasta cierto punto=até certo ponto|depende de=depende de|siempre que=desde que|se respete=seja respeitado|guion=roteiro');
S_('El SIELE', 'el SIELE=o SIELE|se hace en el ordenador=é feito no computador|no hay aprobado ni suspenso=não há aprovado nem reprovado|recibes una puntuación=você recebe uma nota|la prueba oral=a prova oral|se graba en el ordenador=é gravada no computador|hago el DELE o el SIELE=faço o DELE ou o SIELE|depende=depende|para qué lo necesitas=para que você precisa|para una beca=para uma bolsa|y me piden el resultado=e me pedem o resultado|en un mes=em um mês|entonces el SIELE=então o SIELE|es en el ordenador=é no computador|y el resultado sale antes=e o resultado sai antes|pero confirma que=mas confirme que|la beca lo acepta=a bolsa aceita|ordenador=computador|computador=(erro) computador|ordenadora=(erro) ordenadora|suspenso=reprovado|reprovado=(erro) reprovado|suspendido de=(erro) suspendido de|graba=grava|grava=(erro) grava|grabe de=(erro) grabe de|la puntuación máxima=a pontuação máxima|es de mil puntos=é de mil pontos|certifica hasta el nivel C1=certifica até o nível C1|el DELE no caduca=o DELE não vence|confirma qué examen=confirme que prova|acepta la universidad=a universidade aceita|reprobado=reprovado|computadora=computador|apto=aprovado|no apto=reprovado|SIELE=SIELE|DELE=DELE|min=min');
S_('Simulacro de tarea integrada', 'según la conferenciante=segundo a palestrante|la ciudad de quince minutos=a cidade de quinze minutos|mejora la calidad de vida=melhora a qualidade de vida|si bien la idea es atractiva=embora a ideia seja atraente|no es fácil de aplicar=não é fácil de aplicar|en todas partes=em todo lugar|en definitiva=em definitivo|todo indica que=tudo indica que|vale la pena intentarlo=vale a pena tentar|cómo te fue=como foi|en el simulacro de la prueba 3=no simulado da prova 3|bien=bem|tomé notas con flechas=fiz anotações com setas|y me sirvieron mucho=e me ajudaram muito|y el artículo=e o artigo|cité a la conferenciante=citei a palestrante|maticé con si bien=matizei com si bien|y cerré con todo indica que=e fechei com tudo indica que|creo que quedó redondo=acho que ficou redondo|mejora=melhora|melhora=(erro) melhora|mejore=melhore|es=é|sea=seja|está=está|indica=indica|indique=indique|indicaba de=(erro) indicaba de|en una conferencia reciente=numa palestra recente|una urbanista=uma urbanista|planteó esta idea=propôs essa ideia|asimismo=da mesma forma|se reducen los desplazamientos=reduzem-se os deslocamentos|en carro=de carro|cabe preguntarse si=cabe perguntar se|funcionaría en la periferia=funcionaria na periferia|sería conveniente que=seria conveniente que|cada barrio=cada bairro|tuviera servicios básicos=tivesse serviços básicos|tuviera servicios=tivesse serviços|apuntes de la conferencia=anotações da palestra|la ciudad de los 15 minutos=a cidade dos 15 minutos|conferenciante=palestrante|Laura Vidal=Laura Vidal|urbanista=urbanista|Universidad de Guadalajara=Universidade de Guadalajara|tema=tema|idea clave=ideia-chave|vivir a 15 minutos a pie=viver a 15 minutos a pé|o en bici=ou de bicicleta|de lo esencial=do essencial|trabajo=trabalho|escuela=escola|salud=saúde|comercio=comércio|parques=parques|ventajas=vantagens|menos desplazamientos=menos deslocamentos|menos tráfico y contaminación=menos trânsito e poluição|más vida de barrio=mais vida de bairro|más tiempo libre=mais tempo livre|ejemplos=exemplos|París y Barcelona=Paris e Barcelona|con calles para peatones=com ruas para pedestres|y servicios repartidos=e serviços distribuídos|por los barrios=pelos bairros|límites=limites|difícil en la periferia=difícil na periferia|con poca densidad=com pouca densidade|y pocos servicios=e poucos serviços|riesgo de que suban=risco de que subam|los alquileres=os aluguéis|en los barrios mejorados=nos bairros melhorados|conclusión=conclusão|hay que adaptarla=é preciso adaptá-la|a cada ciudad=a cada cidade|no copiarla=não copiá-la|la urbanista Laura Vidal=a urbanista Laura Vidal|planteó la idea de=propôs a ideia de|se trata de vivir=trata-se de viver|cerca de todo lo esencial=perto de tudo o que é essencial|en primer lugar=em primeiro lugar|habría menos tráfico=haveria menos trânsito|los barrios tendrían más vida=os bairros teriam mais vida|no es menos cierto que=também é verdade que|en la periferia es difícil de aplicar=na periferia é difícil de aplicar|cada ciudad adaptara el modelo=cada cidade adaptasse o modelo|a su realidad=à sua realidade|según la conferenciante la idea mejora la vida=segundo a palestrante, a ideia melhora a vida|menos desplazamientos → menos tráfico=menos deslocamentos → menos trânsito|se reducen los desplazamientos y, con ellos, el tráfico=reduzem-se os deslocamentos e, com eles, o trânsito|si bien la idea es atractiva no es fácil=embora a ideia seja atraente, não é fácil|en definitiva todo indica que vale la pena=em definitivo, tudo indica que vale a pena|planteó=propôs|propuso=propôs|como se explica=como se explica|de acuerdo con=de acordo com|la idea consiste en=a ideia consiste em|la propuesta=a proposta|además=além disso|por otra parte=por outro lado|en segundo lugar=em segundo lugar|no obstante=no entanto|ahora bien=porém|sin embargo=no entanto|habría que=seria preciso|convendría=conviria|propondría que=eu proporia que|es necesario que=é necessário que|sería necesario que=seria necessário que|en suma=em suma|cabe concluir=cabe concluir|en conclusión=em conclusão|la idea mejora la vida=a ideia melhora a vida');
['laura', 'vidal', 'guadalajara', 'parís', 'barcelona', 'siele', 'dele', 'c1', 'ted'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'es-delec1': {
    o: 'O **DELE C1**: quatro provas (90 + 50 + 80 + 20 min, mais 20 de preparação; 4 h 20), duas delas **integradas**, e dois grupos com 30 pontos em cada.',
    q: 'Para universidades, empregos e quem quer comprovar o nível C1.',
    p: 'O modelo foi atualizado em 2024: confira a guia oficial.',
  },
  'es-c1lectura': {
    o: 'Leitura e uso da língua: ler o parágrafo inteiro, reconhecer a função do conector, olhar a **regência** (depender de, consistir en) e descartar opções.',
    q: 'Na prova 1 do DELE C1 e em qualquer texto denso.',
    p: 'A palavra antes da lacuna decide a preposição.',
  },
  'es-c1integrada': {
    o: 'A prova integrada: **tomar notas** com abreviaturas e setas, organizar num esquema, citar a fonte (**según la conferenciante**) e reformular.',
    q: 'Na prova 3 do DELE C1 e em resumos de palestras.',
    p: '"Seta" é **flecha**; seta é cogumelo.',
  },
  'es-c1oral': {
    o: 'A prova oral: preparar um roteiro a partir dos textos, conduzir a exposição, conversar com nuance e negociar (**podríamos llegar a un acuerdo si …**).',
    q: 'Na prova 4 do DELE C1 e em reuniões.',
    p: 'Anote o roteiro, não um texto.',
  },
  'es-siele': {
    o: 'O **SIELE**: prova no computador, nota de 0 a 1000, níveis A1 a C1; e como escolher entre **DELE** e **SIELE**.',
    q: 'Para escolher a prova certa para a sua meta.',
    p: 'Confira sempre o que a instituição aceita.',
  },
  'es-c1simulado': {
    o: 'Um simulado da tarefa integrada: artigo a partir das notas de uma palestra, com fonte, reformulação, **si bien**, **sería conveniente que** e **todo indica que**.',
    q: 'Para treinar a prova 3 do DELE C1.',
    p: 'Fecha o C1 juntando os módulos 30 a 37.',
  },
});
Object.assign(CZH, {
  'es-delec1': ['total', 'integradas', 'cada'],
  'es-c1lectura': ['párrafo (masc.)', 'pedir', 'consistir …'],
  'es-c1integrada': ['a palestrante', 'seta', 'próprias'],
  'es-c1oral': ['gerúndio', 'apresentar', 'llegar …'],
  'es-siele': ['Espanha', 'reprovado', 'gravar'],
  'es-c1simulado': ['según + ?', 'si bien + ?', 'todo …'],
});
Object.assign(OBJ, {
  'es-delec1': { o: 'Conheço o formato da prova DELE C1.', a: 'Você sabe quais são as provas integradas do DELE C1?', ref: 'DELE C1 · Instituto Cervantes' },
  'es-c1lectura': { o: 'Aplico estratégias de leitura e uso da língua.', a: 'Você sabe escolher a preposição pela regência do verbo?', ref: 'Comprensión de lectura y uso de la lengua · C1' },
  'es-c1integrada': { o: 'Escrevo a partir de uma fonte oral.', a: 'Você consegue tomar notas de uma palestra e escrever um resumo citando a fonte?', ref: 'Destrezas integradas · C1' },
  'es-c1oral': { o: 'Faço uma exposição e negocio com o examinador.', a: 'Você consegue conduzir uma exposição de quatro minutos e propor um acordo?', ref: 'Expresión e interacción orales · C1' },
  'es-siele': { o: 'Conheço o SIELE e sei escolher entre DELE e SIELE.', a: 'Você sabe como é a nota do SIELE?', ref: 'SIELE · Instituto Cervantes' },
  'es-c1simulado': { o: 'Consigo escrever um texto no formato da prova integrada.', a: 'Você consegue escrever um artigo a partir de anotações em 40 minutos?', ref: 'Destrezas integradas · C1' },
});
MOD_OBJ[37] = ['Conheço o formato do DELE C1 e do SIELE.', 'Aplico estratégias de leitura e uso da língua.', 'Escrevo a partir de uma fonte e faço uma exposição oral.', 'Faço um simulado da tarefa integrada.'];

ES_MODS.push({ lv: 'C1', n: 'DELE C1 y SIELE', l: ['es-delec1', 'es-c1lectura', 'es-c1integrada', 'es-c1oral', 'es-siele', 'es-c1simulado'] });
