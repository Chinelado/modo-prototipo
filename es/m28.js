// Espanhol · B2 · Módulo 28 · Perífrasis y expresiones (Perífrases e expressões). Formato de es/curso.js.

NL('es-acabode', {
  de: 'Acabo de llegar', pt: 'As fases de uma ação', gt: 'acabar de · estar a punto de · ponerse a · echarse a · dejar de · volver a',
  gx: 'As perífrases mostram em que fase está a ação: estar a punto de (estar prestes a), ponerse a (começar a, de repente), echarse a (desatar a: echarse a reír, a llorar), acabar de (acabar de, agorinha), dejar de (parar de) e volver a (fazer de novo).',
  ge: 'Acabo de llegar a casa.=Acabei de chegar em casa.|Estaba a punto de salir cuando llamaste.=Eu estava prestes a sair quando você ligou.|Cuando oyó la noticia, se echó a llorar.=Quando ouviu a notícia, caiu no choro.',
  v: 'acabar de=acabar de=✅|estar a punto de=estar prestes a=⏳|ponerse a=começar a, pôr-se a=▶️|echarse a=desatar a=💥|dejar de=parar de=✋|volver a=voltar a, de novo=🔁|empezar a=começar a=🚀|terminar de=terminar de=🏁|de repente=de repente=⚡|noticia=notícia=📰',
  x: 'reír=rir|llorar=chorar|correr=correr|llover=chover|nevar=nevar|gritar=gritar|temblar=tremer|aplaudir=aplaudir|cantar=cantar|estudiar=estudar',
  dlg: '¿Ya comiste?=Você já comeu?|Acabo de terminar. ¿Por qué?=Acabei de terminar. Por quê?|Estaba a punto de pedir una pizza.=Eu estava prestes a pedir uma pizza.|Uy, justo me puse a lavar los platos. ¡La próxima!=Ih, justo comecei a lavar a louça. Na próxima!',
  cz: '___ de llegar a casa. (acabei)=Acabo=Acabé=Termino|Estaba a ___ de salir.=punto=ponto=puente|Se ___ a llorar. (caiu no choro)=echó=puso=dejó',
  whys: 'acabar de no presente: acabo de|estar a punto de|echarse a + emoção',
  pts: 'Antes: estar a punto de + infinitivo (prestes a): Estaba a punto de salir.|Início: empezar a / comenzar a (neutro), ponerse a (de repente, por decisão: me puse a estudiar), echarse a (com emoção ou movimento brusco: echarse a reír, a llorar, a correr).|Fim: acabar de (agorinha: acabo de llegar = acabei de chegar), terminar de (concluir: terminé de leer el libro), dejar de (parar: dejé de fumar).|Repetição: volver a + infinitivo (de novo): Volvió a llover.',
  ex: 'De repente se puso a llover.=De repente começou a chover.|Todos se echaron a reír.=Todos caíram na risada.|Terminé de leer el libro anoche.=Terminei de ler o livro ontem à noite.|Volvió a llamar a las diez.=Ligou de novo às dez.',
  bd: ['Estaba_a_punto_de=V^estar prestes a|salir=V|cuando_llamaste.=T', 'Eu estava prestes a sair quando você ligou.'],
  rule: 'perifrasis_fase',
  hw: 'Conte um dia agitado em oito frases usando as seis perífrases: estar a punto de, ponerse a, echarse a, acabar de, dejar de e volver a.',
  deep: `
Hoje começa o módulo das **perífrases**: verbo + infinitivo ou gerúndio que mostram a fase, a duração e o jeito de uma ação. São o tempero do espanhol natural.
# Passo 1: antes e começo
@ P:As fases;Antes=estar a punto de;Começo=empezar a, ponerse a;Começo brusco=echarse a;Fim=acabar de, terminar de;De novo=volver a
~ Estaba a punto de salir cuando llamaste. = Eu estava prestes a sair quando você ligou.
~ De repente se puso a llover. = De repente começou a chover.
# Passo 2: echarse a
| Em espanhol | Em português |
| echarse a reír | cair na risada |
| echarse a llorar | cair no choro |
| echarse a correr | sair correndo |
~ Cuando oyó la noticia, se echó a llorar. = Quando ouviu a notícia, caiu no choro.
~ Todos se echaron a reír. = Todos caíram na risada.
# Passo 3: acabar de e terminar de
@ V:Acabar ou terminar?;Acabar de (agorinha)|Acabo de llegar.;Terminar de (concluir)|Terminé de leer el libro.
~ Acabo de llegar a casa. = Acabei de chegar em casa.
~ Terminé de leer el libro anoche. = Terminei de ler o livro ontem à noite.
BR O nosso "**acabei de** chegar" é **acabo de** llegar, no **presente**. "Acabé de llegar" soa como "terminei de chegar".
# Passo 4: dejar de e volver a
| Em espanhol | Em português |
| dejó de llover | parou de chover |
| volvió a llover | voltou a chover, choveu de novo |
~ Volvió a llamar a las diez. = Ligou de novo às dez.
! "De novo" em espanhol é muito mais natural com **volver a** do que com "otra vez": **volvió a llamar**.
> Treine agora: conte o que aconteceu ontem à noite com três perífrases diferentes.
? "Acabei de chegar": || Acabo de llegar.
? "Eu estava prestes a sair": || Estaba a punto de salir.
? "Caiu na risada": || Se echó a reír.
`,
});

NL('es-sigo', {
  de: 'Sigo estudiando', pt: 'Perífrases com gerúndio', gt: 'seguir / continuar + gerúndio · ir + gerúndio · andar + gerúndio · venir + gerúndio · llevar + gerúndio',
  gx: 'Com gerúndio, as perífrases mostram duração e progresso: seguir + gerúndio (continuar: sigo estudiando), ir + gerúndio (progresso gradual: voy entendiendo poco a poco), andar + gerúndio (andar fazendo, por aí, com repetição: anda diciendo mentiras), venir + gerúndio (vir fazendo, desde antes: vengo diciendo que …) e llevar + gerúndio (há quanto tempo).',
  ge: 'Sigo estudiando español todos los días.=Continuo estudando espanhol todos os dias.|Poco a poco voy entendiendo más.=Pouco a pouco vou entendendo mais.|Anda diciendo que se va a mudar.=Anda dizendo que vai se mudar.',
  v: 'seguir + gerúndio=continuar + gerúndio=▶️|continuar=continuar=➡️|ir + gerúndio=ir + gerúndio (aos poucos)=📈|andar + gerúndio=andar + gerúndio=🚶|venir + gerúndio=vir + gerúndio=🔙|llevar + gerúndio=estar há … fazendo=⏳|poco a poco=pouco a pouco=🐢|cada vez más=cada vez mais=⬆️|todavía=ainda=⏳|desde hace=há=📅',
  x: 'mejorar=melhorar|entender=entender|acostumbrarse=acostumar-se|quejarse=reclamar|buscar trabajo=procurar emprego|decir=dizer|pensar=pensar|aprender=aprender|crecer=crescer|subir=subir',
  dlg: '¿Sigues buscando trabajo?=Você continua procurando emprego?|Sí, llevo tres meses buscando, pero voy teniendo más entrevistas.=Sim, estou procurando há três meses, mas estou tendo cada vez mais entrevistas.|¡Qué bien! Ya te lo venía diciendo: hay que tener paciencia.=Que bom! Eu já vinha te dizendo isso: é preciso ter paciência.|Sí, sí. Y tú andas diciendo eso a todo el mundo.=Sim, sim. E você anda dizendo isso para todo mundo.',
  cz: '___ estudiando español. (continuo)=Sigo=Sigo a=Continúo de|Poco a poco ___ entendiendo más.=voy=ando=vengo de|___ diciendo que se va a mudar. (anda, ele)=Anda=Va=Viene a',
  whys: 'seguir + gerúndio (sem preposição)|progresso gradual: ir + gerúndio|por aí, repetido: andar + gerúndio',
  pts: 'seguir / continuar + gerúndio (nunca "seguir a" nem "continuar de"): Sigo viviendo en Lima. Continúa lloviendo.|ir + gerúndio: progresso gradual: Voy entendiendo. La situación va mejorando.|andar + gerúndio: atividade repetida, meio desordenada ou criticada: Anda diciendo tonterías. Ando buscando un regalo.|venir + gerúndio: algo que vem de antes até agora: Vengo diciendo que … · llevar + gerúndio: há quanto tempo (Módulo 19).',
  ex: 'La situación va mejorando poco a poco.=A situação vai melhorando pouco a pouco.|Ando buscando un regalo para mi madre.=Ando procurando um presente para a minha mãe.|Ya te lo venía diciendo.=Eu já vinha te dizendo isso.|Llevo tres meses buscando trabajo.=Estou procurando emprego há três meses.',
  bd: ['Poco_a_poco=T^aos poucos|voy_entendiendo=V^ir + gerúndio: progresso gradual|más.=M', 'Pouco a pouco vou entendendo mais.'],
  rule: 'perifrasis_gerundio',
  hw: 'Escreva oito frases sobre o seu processo de aprender espanhol com perífrases de gerúndio: sigo …, voy …, ando …, vengo …, llevo …',
  deep: `
Hoje você aprende as **perífrases com gerúndio**: continuar, progredir aos poucos, andar fazendo, vir fazendo.
# Passo 1: seguir + gerúndio
@ V:Continuar;Em espanhol|Sigo estudiando.;Erro comum|Sigo a estudiar.
~ Sigo estudiando español todos los días. = Continuo estudando espanhol todos os dias.
BR **Seguir** + gerúndio, sem preposição: sigo **estudiando** (e não "sigo a estudiar", nem "continúo de estudiar").
# Passo 2: ir + gerúndio, aos poucos
~ Poco a poco voy entendiendo más. = Pouco a pouco vou entendendo mais.
~ La situación va mejorando poco a poco. = A situação vai melhorando pouco a pouco.
@ P:Progresso;Entender=voy entendiendo;Melhorar=va mejorando;Acostumar=me voy acostumbrando
# Passo 3: andar e venir + gerúndio
| Perífrase | Ideia |
| andar diciendo | dizer por aí, várias vezes |
| andar buscando | procurar aqui e ali |
| venir diciendo | vir dizendo (desde antes) |
~ Anda diciendo que se va a mudar. = Anda dizendo que vai se mudar.
~ Ya te lo venía diciendo. = Eu já vinha te dizendo isso.
# Passo 4: llevar + gerúndio
~ Llevo tres meses buscando trabajo. = Estou procurando emprego há três meses.
~ Ando buscando un regalo para mi madre. = Ando procurando um presente para a minha mãe.
! **Andar + gerúndio** muitas vezes tem tom crítico: **anda diciendo** tonterías = fica dizendo bobagens por aí.
> Treine agora: descreva o seu progresso no espanhol com três perífrases de gerúndio.
? "Continuo estudando": || Sigo estudiando.
? "Vou entendendo aos poucos": || Voy entendiendo poco a poco.
? "Anda dizendo": || Anda diciendo …
`,
});

NL('es-tengohecho', {
  de: 'Tengo escritos tres capítulos', pt: 'Tener + particípio: o resultado acumulado', gt: 'tener + particípio (concorda) · llevar + particípio · dar por + particípio · dejar + particípio',
  gx: 'Algumas perífrases com particípio mostram o resultado de uma ação e concordam com o objeto, como adjetivo: Tengo escritos tres capítulos (tenho três capítulos escritos), Llevo leídas cien páginas (já li cem páginas até agora), Doy por terminada la reunión (dou a reunião por encerrada), Dejé preparada la cena (deixei o jantar pronto).',
  ge: 'Ya tengo escritos tres capítulos de la tesis.=Já tenho três capítulos da tese escritos.|Llevo leídas cien páginas del libro.=Já li cem páginas do livro até agora.|Doy por terminada la reunión.=Dou a reunião por encerrada.',
  v: 'tener + particípio=ter + particípio (concorda)=📦|llevar + particípio=já ter feito (até agora)=📊|dar por + particípio=dar por=✔️|dejar + particípio=deixar + particípio=🧺|escrito=escrito=✍️|leído=lido=📖|terminado=terminado=🏁|preparado=preparado=🍲|resuelto=resolvido=🧩|vendido=vendido=💰',
  x: 'capítulo=capítulo|tesis=tese|página=página|entrada=ingresso|asunto=assunto|reunión=reunião|cena=jantar|maleta=mala|informe=relatório|tareas=tarefas',
  dlg: '¿Cómo vas con la tesis?=Como vai a tese?|Bien. Tengo escritos tres capítulos y llevo leídos casi todos los artículos.=Bem. Tenho três capítulos escritos e já li quase todos os artigos.|¿Y el congreso?=E o congresso?|Tengo vendidas cincuenta entradas. Doy el asunto por resuelto.=Já vendi cinquenta ingressos. Dou o assunto por resolvido.',
  cz: 'Tengo ___ tres capítulos. (escritos)=escritos=escrito=escritas|Llevo ___ cien páginas. (lidas)=leídas=leído=leídos|Doy por ___ la reunión. (encerrada)=terminada=terminado=terminar',
  whys: 'capítulos, masculino plural: escritos|páginas, feminino plural: leídas|la reunión, feminino: terminada',
  pts: 'tener + particípio, concordando com o objeto: tengo escritas dos cartas, tengo pensado un plan. Mostra o resultado acumulado (diferente de he escrito, que conta a ação).|llevar + particípio: quanto já foi feito até agora: Llevo leídas cien páginas. Llevamos recorridos veinte kilómetros.|dar por + particípio: considerar algo assim: Doy por terminada la clase. Lo dio por perdido.|dejar + particípio: deixar algo pronto: Dejé hecha la cama. Dejé preparada la cena.',
  ex: 'Dejé preparada la cena antes de salir.=Deixei o jantar pronto antes de sair.|Llevamos recorridos veinte kilómetros.=Já percorremos vinte quilômetros até agora.|Lo dio por perdido.=Deu como perdido.|Tengo pensado un plan.=Tenho um plano em mente.',
  bd: ['Tengo_escritos=V^tener + particípio: concorda com capítulos|tres_capítulos=OA^masculino plural|de_la_tesis.=C', 'Tenho três capítulos da tese escritos.'],
  rule: 'tener_participio',
  hw: 'Faça um balanço de um projeto seu (estudo, trabalho, mudança) em seis frases com tener + particípio, llevar + particípio, dejar + particípio e dar por + particípio, cuidando da concordância.',
  deep: `
Hoje você aprende as **perífrases com particípio**: elas mostram o **resultado** de uma ação e funcionam como adjetivo.
# Passo 1: tener + particípio
@ V:Ação ou resultado?;A ação (perfecto)|He escrito tres capítulos.;O resultado (tener + particípio)|Tengo escritos tres capítulos.
~ Ya tengo escritos tres capítulos de la tesis. = Já tenho três capítulos da tese escritos.
~ Tengo pensado un plan. = Tenho um plano em mente.
BR Aqui o particípio **concorda** com o objeto, como um adjetivo: tengo escrit**as** dos cartas, tengo escrit**os** tres capítulos.
# Passo 2: llevar + particípio
| Em espanhol | Em português |
| Llevo leídas cien páginas. | Já li cem páginas (até agora). |
| Llevamos recorridos veinte kilómetros. | Já percorremos vinte quilômetros. |
~ Llevo leídas cien páginas del libro. = Já li cem páginas do livro até agora.
# Passo 3: dar por + particípio
@ P:Dar por;Encerrar=doy por terminada la reunión;Desistir=lo dio por perdido;Considerar=lo doy por hecho
~ Doy por terminada la reunión. = Dou a reunião por encerrada.
~ Lo dio por perdido. = Deu como perdido.
# Passo 4: dejar + particípio
| Em espanhol | Em português |
| Dejé hecha la cama. | Deixei a cama feita. |
| Dejé preparada la cena. | Deixei o jantar pronto. |
~ Dejé preparada la cena antes de salir. = Deixei o jantar pronto antes de sair.
~ Llevamos recorridos veinte kilómetros. = Já percorremos vinte quilômetros até agora.
! Não confunda: **he escrito** (perfecto, particípio invariável) × **tengo escritas** (resultado, particípio que concorda).
> Treine agora: faça um balanço do seu dia com tener + particípio e dejar + particípio.
? "Tenho três capítulos escritos": || Tengo escritos tres capítulos.
? "Já li cem páginas": || Llevo leídas cien páginas.
? "Dou por encerrada": || Doy por terminada …
`,
});

NL('es-colocaciones', {
  de: 'Tomar una decisión', pt: 'Colocações: as combinações naturais', gt: 'tomar una decisión, hacer una pregunta, dar un paseo, echar una mano, sacar una foto, correr un riesgo, cometer un error, prestar atención',
  gx: 'Colocações são combinações que os nativos usam sempre juntas, e que muitas vezes não batem com o português: tomar una decisión (tomar uma decisão), hacer una pregunta (fazer uma pergunta), dar un paseo (dar uma volta), echar una mano (dar uma mão), sacar una foto (tirar uma foto), correr un riesgo (correr um risco), prestar atención (prestar atenção).',
  ge: 'Tengo que tomar una decisión importante.=Tenho que tomar uma decisão importante.|¿Me echas una mano con la mudanza?=Você me dá uma mão com a mudança?|Sacamos muchas fotos en Cusco.=Tiramos muitas fotos em Cusco.',
  v: 'tomar una decisión=tomar uma decisão=⚖️|hacer una pregunta=fazer uma pergunta=❓|dar un paseo=dar uma volta=🚶|echar una mano=dar uma mão=🤝|sacar una foto=tirar uma foto=📸|correr un riesgo=correr um risco=🎲|cometer un error=cometer um erro=❌|prestar atención=prestar atenção=👂|dar las gracias=agradecer=🙏|tener en cuenta=levar em conta=📝',
  x: 'pedir perdón=pedir desculpas|hacer caso=dar ouvidos|dar una vuelta=dar uma volta|dar la vuelta=virar, dar a volta|poner una excusa=dar uma desculpa|sacar buena nota=tirar nota boa|cumplir años=fazer aniversário|hacer cola=fazer fila|darse prisa=apressar-se|echar de menos=sentir falta',
  dlg: '¿Ya tomaste una decisión sobre el trabajo?=Você já tomou uma decisão sobre o emprego?|Todavía no. No quiero cometer un error.=Ainda não. Não quero cometer um erro.|Ten en cuenta que todo cambio es un riesgo.=Leve em conta que toda mudança é um risco.|Lo sé. ¿Damos un paseo y lo hablamos?=Eu sei. Vamos dar uma volta e conversamos?',
  cz: 'Tengo que ___ una decisión. (tomar)=tomar=hacer=dar|¿Me ___ una mano? (dar)=echas=das=pones|___ muchas fotos. (tiramos)=Sacamos=Tiramos=Hicimos de',
  whys: 'tomar una decisión|dar uma mão: echar una mano|tirar foto: sacar una foto',
  pts: 'Iguais ao português: tomar una decisión, correr un riesgo, cometer un error, prestar atención, hacer una pregunta.|Diferentes: echar una mano (dar uma mão), sacar una foto (tirar uma foto), dar un paseo / una vuelta (dar uma volta), hacer cola (fazer fila), cumplir años (fazer aniversário).|Com hacer: hacer caso (dar ouvidos), hacer falta (fazer falta, ser preciso). Com poner: poner una excusa, poner atención (América).|Com dar: dar las gracias, dar un consejo, dar la razón (dar razão), darse prisa (apressar-se).',
  ex: 'Hay que hacer cola para entrar.=É preciso fazer fila para entrar.|Mañana cumplo treinta años.=Amanhã faço trinta anos.|Nunca me haces caso.=Você nunca me dá ouvidos.|Date prisa, que perdemos el bus.=Corre, que vamos perder o ônibus.',
  bd: ['¿Me=OI|echas_una_mano=V^colocação: dar uma mão|con_la_mudanza?=C', 'Você me dá uma mão com a mudança?'],
  rule: 'colocaciones',
  hw: 'Escreva dez frases sobre a sua semana usando dez colocações diferentes desta lição, sobretudo as que são diferentes do português.',
  deep: `
Hoje você aprende as **colocações**: as combinações de palavras que soam naturais em espanhol.
# Passo 1: as iguais ao português
@ P:Iguais;Decisão=tomar una decisión;Erro=cometer un error;Risco=correr un riesgo;Atenção=prestar atención
~ Tengo que tomar una decisión importante. = Tenho que tomar uma decisão importante.
# Passo 2: as diferentes
| Português | Espanhol |
| dar uma mão | echar una mano |
| tirar uma foto | sacar una foto |
| fazer fila | hacer cola |
| fazer aniversário | cumplir años |
~ ¿Me echas una mano con la mudanza? = Você me dá uma mão com a mudança?
~ Sacamos muchas fotos en Cusco. = Tiramos muitas fotos em Cusco.
BR "Tirar uma foto" é **sacar** (ou **tomar**, em vários países); "tirar" em espanhol é jogar fora.
# Passo 3: com hacer e dar
@ M:Verbos-coringa;Verbo|Colocações;hacer|hacer cola, hacer caso, hacer una pregunta;dar|dar un paseo, dar las gracias, darse prisa;tener|tener en cuenta, tener ganas
~ Hay que hacer cola para entrar. = É preciso fazer fila para entrar.
~ Nunca me haces caso. = Você nunca me dá ouvidos.
# Passo 4: na vida real
~ Mañana cumplo treinta años. = Amanhã faço trinta anos.
~ Date prisa, que perdemos el bus. = Corre, que vamos perder o ônibus.
! "Fazer aniversário" é **cumplir años** (e não "hacer cumpleaños"). E **dar la vuelta** é virar; **dar una vuelta** é passear.
> Treine agora: conte o seu fim de semana com quatro colocações diferentes do português.
? "Dar uma mão": || echar una mano
? "Tirar uma foto": || sacar una foto
? "Fazer aniversário": || cumplir años
`,
});

NL('es-expresiones', {
  de: 'Estar en las nubes', pt: 'Expressões idiomáticas', gt: 'estar en las nubes, tomar el pelo, ponerse las pilas, ser pan comido, costar un ojo de la cara, no tener pelos en la lengua, dar en el clavo',
  gx: 'As expressões idiomáticas dão cor à fala. Algumas têm equivalente quase igual em português (costar un ojo de la cara = custar os olhos da cara); outras mudam a imagem: estar en las nubes (estar no mundo da lua), tomar el pelo (tirar sarro, enganar), ponerse las pilas (se ligar, se esforçar), ser pan comido (ser moleza), no tener pelos en la lengua (não ter papas na língua).',
  ge: 'Perdona, estaba en las nubes.=Desculpa, eu estava no mundo da lua.|Ese celular cuesta un ojo de la cara.=Esse celular custa os olhos da cara.|El examen fue pan comido.=A prova foi moleza.',
  v: 'estar en las nubes=estar no mundo da lua=☁️|tomar el pelo=tirar sarro, enganar=😜|ponerse las pilas=se ligar, se esforçar=🔋|ser pan comido=ser moleza=🍞|costar un ojo de la cara=custar os olhos da cara=💸|no tener pelos en la lengua=não ter papas na língua=👅|dar en el clavo=acertar em cheio=🔨|meter la pata=dar uma mancada=🙈|estar hasta las narices=estar de saco cheio=😤|ser uña y carne=ser unha e carne=🤞',
  x: 'expresión=expressão|sentido figurado=sentido figurado|literal=literal|broma=brincadeira|esfuerzo=esforço|sincero=sincero|acertar=acertar|equivocarse=enganar-se|harto=farto|inseparable=inseparável',
  dlg: '¿Viste el precio del nuevo teléfono? ¡Cuesta un ojo de la cara!=Você viu o preço do celular novo? Custa os olhos da cara!|¿En serio? Me estás tomando el pelo.=Sério? Você está tirando sarro de mim.|No, de verdad. Y Marta, que no tiene pelos en la lengua, dijo que era un robo.=Não, de verdade. E a Marta, que não tem papas na língua, disse que era um roubo.|Dio en el clavo.=Acertou em cheio.',
  cz: 'Perdona, estaba en las ___. (mundo da lua)=nubes=lunas=nueves|Me estás tomando el ___. (sarro)=pelo=pie=pelota|El examen fue ___ comido. (moleza)=pan=pastel=papa',
  whys: 'estar en las nubes|tomar el pelo|ser pan comido',
  pts: 'Quase iguais: costar un ojo de la cara (custar os olhos da cara), ser uña y carne (ser unha e carne), meter la pata (dar uma mancada).|Imagem diferente: estar en las nubes (no mundo da lua), ser pan comido (moleza), no tener pelos en la lengua (sem papas na língua).|Do dia a dia: tomar el pelo (tirar sarro, enganar), ponerse las pilas (se ligar, se esforçar), estar hasta las narices (de saco cheio).|Use com moderação e no registro certo: são informais, ótimas na conversa, raras num texto formal.',
  ex: 'Tienes que ponerte las pilas si quieres aprobar.=Você precisa se ligar se quiser passar.|Ana y Sofía son uña y carne.=A Ana e a Sofía são unha e carne.|Estoy hasta las narices del ruido.=Estou de saco cheio do barulho.|Diste en el clavo con ese regalo.=Você acertou em cheio com esse presente.',
  bd: ['Ese_celular=S|cuesta_un_ojo_de_la_cara.=V^expressão: muito caro', 'Esse celular custa os olhos da cara.'],
  rule: 'expresiones',
  hw: 'Escreva oito minidiálogos (duas falas cada) usando oito expressões desta lição em situações do seu dia a dia.',
  deep: `
Hoje você aprende **expressões idiomáticas** do espanhol: algumas parecem com as nossas, outras trocam a imagem.
# Passo 1: as quase iguais
@ M:Quase iguais;Espanhol|Português;costar un ojo de la cara|custar os olhos da cara;ser uña y carne|ser unha e carne;meter la pata|dar uma mancada
~ Ese celular cuesta un ojo de la cara. = Esse celular custa os olhos da cara.
~ Ana y Sofía son uña y carne. = A Ana e a Sofía são unha e carne.
# Passo 2: a imagem muda
| Espanhol | Português |
| estar en las nubes | estar no mundo da lua |
| ser pan comido | ser moleza |
| no tener pelos en la lengua | não ter papas na língua |
~ Perdona, estaba en las nubes. = Desculpa, eu estava no mundo da lua.
~ El examen fue pan comido. = A prova foi moleza.
BR Em espanhol são **pelos** (na língua); em português, **papas**. A ideia é a mesma: falar sem filtro.
# Passo 3: do dia a dia
@ P:Do dia a dia;Enganar=tomar el pelo;Esforçar-se=ponerse las pilas;Acertar=dar en el clavo;Cansar=estar hasta las narices
~ Tienes que ponerte las pilas si quieres aprobar. = Você precisa se ligar se quiser passar.
~ Diste en el clavo con ese regalo. = Você acertou em cheio com esse presente.
# Passo 4: o registro
| Situação | Usar? |
| conversa com amigos | sim, à vontade |
| reunião de trabalho | algumas, com cuidado |
| texto formal | quase nunca |
~ Estoy hasta las narices del ruido. = Estou de saco cheio do barulho.
! **Tomar el pelo** é "zoar, enganar de brincadeira", e não puxar o cabelo: ¡Me estás tomando el pelo! = Você está brincando comigo!
> Treine agora: reaja a três situações com três expressões diferentes.
? "Estar no mundo da lua": || estar en las nubes
? "Ser moleza": || ser pan comido
? "Você está tirando sarro de mim": || Me estás tomando el pelo.
`,
});

NL('es-cronica', {
  de: 'Una crónica del día a día', pt: 'Ler e escrever uma crônica', gt: 'perífrases, colocações e expressões num texto pessoal e bem-humorado',
  gx: 'A crônica é um texto curto, pessoal e muitas vezes bem-humorado sobre o cotidiano. Ela junta tudo do módulo: as perífrases (estaba a punto de, me puse a, sigo …), as colocações (tomar una decisión, hacer cola) e as expressões (estar en las nubes, costar un ojo de la cara).',
  ge: 'Estaba a punto de salir cuando me di cuenta de que había perdido las llaves.=Eu estava prestes a sair quando percebi que tinha perdido as chaves.|Tuve que hacer cola durante una hora.=Tive que fazer fila durante uma hora.|Al final me eché a reír: era pan comido.=No fim caí na risada: era moleza.',
  v: 'crónica=crônica=📰|cotidiano=cotidiano=☕|humor=humor=😄|trámite=trâmite, burocracia=📄|oficina=repartição, escritório=🏢|ventanilla=guichê=🪟|funcionario=funcionário=👔|sello=carimbo=🔖|paciencia=paciência=🧘|ironía=ironia=😏',
  x: 'formulario=formulário|fotocopia=fotocópia|número=senha, número|horario de atención=horário de atendimento|requisito=requisito|cola=fila|espera=espera|lunes=segunda-feira|vecino=vizinho|burocracia=burocracia',
  dlg: '¿Cómo te fue en la oficina de migraciones?=Como foi na imigração?|Hice cola dos horas y, cuando llegué a la ventanilla, me faltaba una fotocopia.=Fiz fila duas horas e, quando cheguei ao guichê, faltava uma fotocópia.|¡No me digas! ¿Y qué hiciste?=Não me diga! E o que você fez?|Me eché a reír. ¿Qué otra cosa podía hacer?=Caí na risada. O que mais eu podia fazer?',
  cz: 'Estaba a ___ de salir.=punto=ponto=pique|Tuve que hacer ___ una hora. (fila)=cola=fila=línea de|Me ___ a reír. (caí na risada)=eché=puse a=di',
  whys: 'estar a punto de|fazer fila: hacer cola|echarse a reír',
  pts: 'Comece com uma situação comum e um toque de humor: Todos sabemos lo que es … / Aquel lunes, …|Narre com perífrases: estaba a punto de, me puse a, volví a, acabé de, seguía esperando.|Dê cor com colocações e expressões: hacer cola, tomar una decisión, estar en las nubes, costar un ojo de la cara.|Termine com uma reflexão leve ou irônica: Al final, … / Moraleja: … / Desde entonces, …',
  ex: 'Todos sabemos lo que es un trámite en lunes.=Todos sabemos o que é um trâmite numa segunda-feira.|Seguía esperando cuando volvieron a llamar mi número.=Eu continuava esperando quando chamaram o meu número de novo.|Moraleja: lleva siempre dos fotocopias.=Moral da história: leve sempre duas fotocópias.|Salí de allí con el sello y una sonrisa.=Saí de lá com o carimbo e um sorriso.',
  bd: ['Estaba_a_punto_de_salir=V^perífrase: prestes a|cuando=C|me_di_cuenta=V^darse cuenta: perceber|de_que_había_perdido_las_llaves.=C', 'Eu estava prestes a sair quando percebi que tinha perdido as chaves.'],
  rule: 'cronica',
  le: {
    texto: {
      t: 'El sello', kind: 'crônica', voz: 'b',
      intro: 'Uma crônica de um jornal de Bogotá sobre a burocracia do dia a dia. Leia e responda.',
      paras: ['Todos sabemos lo que es un trámite en lunes. Aquel lunes, yo necesitaba un simple sello en un documento. Pan comido, pensé.', 'Llegué a las ocho, saqué un número y me puse a esperar. A las nueve seguía esperando. A las diez, estaba a punto de rendirme cuando, por fin, llamaron mi número.', 'La funcionaria miró mis papeles con calma y me dijo, sin pelos en la lengua: «Le falta una fotocopia». La fotocopiadora más cercana costaba un ojo de la cara y estaba a tres cuadras.', 'Volví con la fotocopia, hice cola otra vez y, cuando me tocó, la misma funcionaria me puso el sello en dos segundos. Me eché a reír y ella también.', 'Moraleja: lleva siempre dos fotocopias, ponte las pilas y, sobre todo, no hagas trámites en lunes.'],
      qs: [
        { q: 'O que o cronista precisava?', o: ['um simples carimbo num documento', 'renovar o passaporte', 'pagar uma multa'], a: 0 },
        { q: 'O que aconteceu quando ele chegou ao guichê?', o: ['faltava uma fotocópia', 'o sistema caiu', 'era o guichê errado'], a: 0 },
        { q: 'Como era a fotocopiadora mais próxima?', o: ['caríssima e a três quarteirões', 'de graça e ao lado', 'fechada'], a: 0 },
        { q: 'Qual é a moral da história?', o: ['levar sempre duas fotocópias e não fazer trâmites na segunda', 'nunca ir a repartições', 'chegar mais tarde'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva a sua crônica', tipo: 'form', ok: 'Crônica escrita corretamente.',
      pede: 'Escreva uma crônica curta e bem-humorada sobre uma situação do dia a dia (uma fila, um trâmite, um trânsito). Uma frase por linha.',
      campos: [
        { l: 'A situação', d: 'Todos sabemos lo que es … / Aquel lunes, …', re: '(todos sabemos|aquel|aquella|el otro día|hace poco|una vez)', f: 'iu', err: 'Abra com a situação: Todos sabemos lo que es … / Aquel lunes, …' },
        { l: 'Uma perífrase de fase', d: 'Estaba a punto de … / Me puse a …', re: '(a punto de|me puse a|se puso a|me eché a|se echó a|acabé de|acababa de|volví a|volvió a|dejé de)', f: 'iu', err: 'Use uma perífrase: Estaba a punto de rendirme …' },
        { l: 'Uma perífrase de gerúndio', d: 'Seguía esperando … / Iba …', re: '(seguía|seguí|sigo|continuaba|iba|ando|andaba|llevaba) \\p{L}+(ando|iendo|yendo)(?!\\p{L})', f: 'iu', err: 'Use uma perífrase de gerúndio: Seguía esperando …', bad: [['\\bsegu(ía|í|ir) a \\p{L}+r\\b', 'Com <b>seguir</b>, o gerúndio, sem "a": seguía <b>esperando</b>.']] },
        { l: 'Uma colocação', d: 'hice cola / tomé una decisión …', re: '(hice cola|hacer cola|tomé una decisión|tomar una decisión|saqué|sacar una foto|eché una mano|di un paseo|presté atención|cometí un error)', f: 'iu', err: 'Use uma colocação: Hice cola otra vez.' },
        { l: 'Uma expressão', d: 'costaba un ojo de la cara / pan comido …', re: '(pan comido|un ojo de la cara|en las nubes|las pilas|pelos en la lengua|en el clavo|hasta las narices|tomar el pelo|uña y carne|meter la pata|metí la pata)', f: 'iu', err: 'Use uma expressão: Pan comido, pensé.' },
        { l: 'Fecho', d: 'Moraleja: … / Al final, …', re: '(moraleja|al final|desde entonces|en fin|conclusión)', f: 'iu', err: 'Feche com humor: Moraleja: …' },
      ],
      modelo: 'Aquel viernes tenía que renovar mi licencia de conducir. · Estaba a punto de salir cuando empezó a llover a cántaros. · Llegué tarde y seguía lloviendo. · Hice cola durante dos horas bajo el agua. · Pensé que sería pan comido, pero metí la pata: había olvidado la foto. · Moraleja: revisa siempre los requisitos antes de salir.',
    },
  },
  hw: 'Escreva uma crônica completa (doze a quinze frases) sobre uma situação engraçada do seu cotidiano, com pelo menos quatro perífrases, duas colocações, duas expressões e uma moral da história.',
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo. Você vai ler uma crônica colombiana sobre burocracia e escrever a sua.
# Passo 1: a estrutura
@ P:Uma crônica;Situação=Todos sabemos lo que es …;Ação=Me puse a esperar …;Clímax=Estaba a punto de …;Virada=Le falta una fotocopia.;Moral=Moraleja: …
~ Todos sabemos lo que es un trámite en lunes. = Todos sabemos o que é um trâmite numa segunda-feira.
# Passo 2: as perífrases fazem o ritmo
~ Estaba a punto de salir cuando me di cuenta de que había perdido las llaves. = Eu estava prestes a sair quando percebi que tinha perdido as chaves.
~ Seguía esperando cuando volvieron a llamar mi número. = Eu continuava esperando quando chamaram o meu número de novo.
| Perífrase | Efeito |
| me puse a esperar | o começo |
| seguía esperando | a demora |
| estaba a punto de rendirme | a tensão |
# Passo 3: as expressões dão humor
~ Tuve que hacer cola durante una hora. = Tive que fazer fila durante uma hora.
~ Al final me eché a reír: era pan comido. = No fim caí na risada: era moleza.
BR A crônica é muito popular na América Latina (e no Brasil!). O humor nasce do contraste: **pan comido, pensé** … e depois duas horas de fila.
# Passo 4: a moral
~ Moraleja: lleva siempre dos fotocopias. = Moral da história: leve sempre duas fotocópias.
~ Salí de allí con el sello y una sonrisa. = Saí de lá com o carimbo e um sorriso.
! **Moraleja** é a "moral da história". E "chover muito" tem expressão própria: **llover a cántaros**.
> Agora leia a crônica e escreva a sua.
? "Estava prestes a sair": || Estaba a punto de salir.
? "Fazer fila": || hacer cola
? "Moral da história": || moraleja
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('Acabo de llegar',
  'P:As fases;Antes=estar a punto de;Começo=ponerse a;Começo brusco=echarse a;Fim=acabar de;De novo=volver a',
  'V:Acabar ou terminar?;Acabar de (agorinha)|Acabo de llegar.;Terminar de (concluir)|Terminé de leer el libro.');
V('Sigo estudiando',
  'V:Continuar;Certo|Sigo estudiando.;Erro comum|Sigo a estudiar.',
  'M:Com gerúndio;Perífrase|Ideia;ir + gerúndio|aos poucos;andar + gerúndio|por aí, repetido;venir + gerúndio|desde antes');
V('Tengo escritos tres capítulos',
  'V:Ação ou resultado?;A ação|He escrito tres capítulos.;O resultado|Tengo escritos tres capítulos.',
  'P:Dar por;Encerrar=doy por terminada la reunión;Desistir=lo dio por perdido;Considerar=lo doy por hecho');
V('Tomar una decisión',
  'M:Diferentes do português;Português|Espanhol;dar uma mão|echar una mano;tirar uma foto|sacar una foto;fazer fila|hacer cola;fazer aniversário|cumplir años',
  'M:Verbos-coringa;Verbo|Colocações;hacer|cola, caso, una pregunta;dar|un paseo, las gracias;tener|en cuenta, ganas');
V('Estar en las nubes',
  'M:A imagem muda;Espanhol|Português;estar en las nubes|estar no mundo da lua;ser pan comido|ser moleza;no tener pelos en la lengua|não ter papas na língua',
  'P:Do dia a dia;Enganar=tomar el pelo;Esforçar-se=ponerse las pilas;Acertar=dar en el clavo');
V('Una crónica del día a día',
  'P:Uma crônica;Situação=Todos sabemos …;Clímax=Estaba a punto de …;Virada=Le falta …;Moral=Moraleja: …',
  'M:O ritmo;Perífrase|Efeito;me puse a|o começo;seguía esperando|a demora;a punto de|a tensão');
S_('Acabo de llegar', 'acabo de=acabei de|llegar a casa=chegar em casa|estaba a punto de=eu estava prestes a|salir=sair|cuando llamaste=quando você ligou|cuando oyó=quando ouviu|la noticia=a notícia|se echó a llorar=caiu no choro|ya comiste=você já comeu|acabo de terminar=acabei de terminar|por qué=por quê|pedir una pizza=pedir uma pizza|uy=ih|justo=justo|me puse a=comecei a|lavar los platos=lavar a louça|la próxima=na próxima|acabé=acabei|termino=termino|punto=ponto|ponto=(erro) ponto|puente=ponte|echó=se jogou|puso=pôs|dejó=deixou|de repente=de repente|se puso a llover=começou a chover|todos se echaron a reír=todos caíram na risada|terminé de leer=terminei de ler|el libro=o livro|anoche=ontem à noite|volvió a llamar=ligou de novo|a las diez=às dez|empezar a=começar a|ponerse a=começar a|echarse a=desatar a|acabar de=acabar de|terminar de=terminar de|volver a=voltar a|acabo de llegar=acabei de chegar|terminé de leer el libro=terminei de ler o livro|echarse a reír=cair na risada|echarse a llorar=cair no choro|echarse a correr=sair correndo|dejó de llover=parou de chover|volvió a llover=choveu de novo|acabé de llegar=(erro) acabé de llegar|otra vez=de novo|me puse a estudiar=comecei a estudar|dejé de fumar=parei de fumar|estar a punto de=estar prestes a|dejar de=parar de|se echó a reír=caiu na risada|llegar=chegar');
S_('Sigo estudiando', 'sigo estudiando=continuo estudando|español=espanhol|todos los días=todos os dias|poco a poco=pouco a pouco|voy entendiendo=vou entendendo|más=mais|anda diciendo=anda dizendo|que se va a mudar=que vai se mudar|sigues buscando=você continua procurando|trabajo=emprego|sí=sim|llevo tres meses buscando=estou procurando há três meses|pero=mas|voy teniendo=estou tendo|más entrevistas=mais entrevistas|qué bien=que bom|ya te lo venía diciendo=eu já vinha te dizendo isso|hay que tener paciencia=é preciso ter paciência|y tú=e você|andas diciendo=anda dizendo|eso=isso|a todo el mundo=para todo mundo|sigo a=(erro) sigo a|continúo de=(erro) continúo de|voy=vou|ando=ando|vengo de=venho de|anda=anda|va=vai|viene a=vem a|la situación=a situação|va mejorando=vai melhorando|ando buscando=ando procurando|un regalo=um presente|para mi madre=para minha mãe|llevo tres meses buscando trabajo=estou procurando emprego há três meses|sigo viviendo en Lima=continuo morando em Lima|continúa lloviendo=continua chovendo|anda diciendo tonterías=anda dizendo bobagens|vengo diciendo=venho dizendo|me voy acostumbrando=vou me acostumando|sigo a estudiar=(erro) sigo a estudiar|andar diciendo=andar dizendo|andar buscando=andar procurando|venir diciendo=vir dizendo|voy entendiendo poco a poco=vou entendendo pouco a pouco');
S_('Tengo escritos tres capítulos', 'ya=já|tengo escritos=tenho escritos|tres capítulos=três capítulos|de la tesis=da tese|llevo leídas=já li|cien páginas=cem páginas|del libro=do livro|doy por terminada=dou por encerrada|la reunión=a reunião|cómo vas con la tesis=como vai a tese|bien=bem|y llevo leídos=e já li|casi todos los artículos=quase todos os artigos|y el congreso=e o congresso|tengo vendidas=já vendi|cincuenta entradas=cinquenta ingressos|doy el asunto por resuelto=dou o assunto por resolvido|escrito=escrito|escritas=escritas|leído=lido|leídos=lidos|terminado=terminado|terminar=terminar|dejé preparada=deixei pronta|la cena=o jantar|antes de salir=antes de sair|llevamos recorridos=já percorremos|veinte kilómetros=vinte quilômetros|lo dio por perdido=deu como perdido|tengo pensado=tenho em mente|un plan=um plano|he escrito tres capítulos=escrevi três capítulos|tengo escritos tres capítulos=tenho três capítulos escritos|llevo leídas cien páginas=já li cem páginas|llevamos recorridos veinte kilómetros=já percorremos vinte quilômetros|doy por terminada la reunión=dou a reunião por encerrada|lo doy por hecho=dou como certo|dejé hecha la cama=deixei a cama feita|dejé preparada la cena=deixei o jantar pronto|tengo escritas dos cartas=tenho duas cartas escritas|he escrito=escrevi|tengo escritas=tenho escritas|doy por terminada la clase=dou a aula por encerrada|lo dio por=deu como|tengo pensado un plan=tenho um plano em mente');
S_('Tomar una decisión', 'tengo que=tenho que|tomar una decisión=tomar uma decisão|importante=importante|me echas una mano=você me dá uma mão|con la mudanza=com a mudança|sacamos=tiramos|muchas fotos=muitas fotos|en Cusco=em Cusco|ya tomaste=você já tomou|una decisión=uma decisão|sobre el trabajo=sobre o emprego|todavía no=ainda não|no quiero=não quero|cometer un error=cometer um erro|ten en cuenta=leve em conta|que todo cambio=que toda mudança|es un riesgo=é um risco|lo sé=eu sei|damos un paseo=vamos dar uma volta|y lo hablamos=e conversamos|tomar=tomar|hacer=fazer|dar=dar|echas=você joga|das=você dá|pones=você põe|tiramos=jogamos fora|hicimos de=(erro) hicimos de|hay que=é preciso|hacer cola=fazer fila|para entrar=para entrar|mañana=amanhã|cumplo treinta años=faço trinta anos|nunca me haces caso=você nunca me dá ouvidos|date prisa=corre|que perdemos el bus=que vamos perder o ônibus|correr un riesgo=correr um risco|prestar atención=prestar atenção|hacer una pregunta=fazer uma pergunta|echar una mano=dar uma mão|sacar una foto=tirar uma foto|dar un paseo=dar uma volta|dar una vuelta=dar uma volta|cumplir años=fazer aniversário|hacer caso=dar ouvidos|hacer falta=fazer falta|poner una excusa=dar uma desculpa|poner atención=prestar atenção|dar las gracias=agradecer|dar un consejo=dar um conselho|dar la razón=dar razão|darse prisa=apressar-se|tener en cuenta=levar em conta|tener ganas=ter vontade|tirar=jogar fora|dar la vuelta=virar|hacer cumpleaños=(erro) hacer cumpleaños|tomar una foto=tirar uma foto');
S_('Estar en las nubes', 'perdona=desculpa|estaba en las nubes=eu estava no mundo da lua|ese celular=esse celular|cuesta un ojo de la cara=custa os olhos da cara|el examen=a prova|fue pan comido=foi moleza|viste=você viu|el precio=o preço|del nuevo teléfono=do celular novo|en serio=sério|me estás tomando el pelo=você está tirando sarro de mim|no=não|de verdad=de verdade|y Marta=e a Marta|que no tiene pelos en la lengua=que não tem papas na língua|dijo que=disse que|era un robo=era um roubo|dio en el clavo=acertou em cheio|nubes=nuvens|lunas=luas|nueves=noves|pelo=cabelo|pie=pé|pelota=bola|pan=pão|pastel=bolo|papa=batata|tienes que=você precisa|ponerte las pilas=se ligar|si quieres aprobar=se quiser passar|Ana y Sofía=Ana e Sofía|son uña y carne=são unha e carne|estoy hasta las narices=estou de saco cheio|del ruido=do barulho|diste en el clavo=você acertou em cheio|con ese regalo=com esse presente|costar un ojo de la cara=custar os olhos da cara|ser uña y carne=ser unha e carne|meter la pata=dar uma mancada|estar en las nubes=estar no mundo da lua|ser pan comido=ser moleza|no tener pelos en la lengua=não ter papas na língua|tomar el pelo=tirar sarro|ponerse las pilas=se ligar|dar en el clavo=acertar em cheio|estar hasta las narices=estar de saco cheio|me estás tomando el pelo=você está brincando comigo');
S_('Una crónica del día a día', 'estaba a punto de salir=eu estava prestes a sair|cuando me di cuenta=quando percebi|de que había perdido=que tinha perdido|las llaves=as chaves|tuve que=tive que|hacer cola=fazer fila|durante una hora=durante uma hora|al final=no fim|me eché a reír=caí na risada|era pan comido=era moleza|cómo te fue=como foi|en la oficina de migraciones=na imigração|hice cola=fiz fila|dos horas=duas horas|y cuando llegué=e quando cheguei|a la ventanilla=ao guichê|me faltaba=faltava|una fotocopia=uma fotocópia|no me digas=não me diga|y qué hiciste=e o que você fez|qué otra cosa podía hacer=o que mais eu podia fazer|punto=ponto|ponto=(erro) ponto|pique=pique|cola=fila|fila=fileira|línea de=(erro) línea de|eché=caí|puse a=(erro) puse a|di=dei|todos sabemos=todos sabemos|lo que es=o que é|un trámite=um trâmite|en lunes=numa segunda-feira|seguía esperando=eu continuava esperando|cuando volvieron a llamar=quando chamaram de novo|mi número=meu número|moraleja=moral da história|lleva siempre=leve sempre|dos fotocopias=duas fotocópias|salí de allí=saí de lá|con el sello=com o carimbo|y una sonrisa=e um sorriso|aquel lunes=naquela segunda-feira|yo necesitaba=eu precisava|un simple sello=um simples carimbo|en un documento=num documento|pan comido=moleza|pensé=pensei|llegué=cheguei|a las ocho=às oito|saqué un número=tirei uma senha|y me puse a esperar=e comecei a esperar|a las nueve=às nove|a las diez=às dez|estaba a punto de rendirme=eu estava prestes a desistir|por fin=finalmente|llamaron mi número=chamaram meu número|la funcionaria=a funcionária|miró=olhou|mis papeles=meus papéis|con calma=com calma|y me dijo=e me disse|sin pelos en la lengua=sem papas na língua|le falta una fotocopia=falta uma fotocópia|la fotocopiadora más cercana=a copiadora mais próxima|costaba un ojo de la cara=custava os olhos da cara|y estaba a tres cuadras=e ficava a três quarteirões|volví=voltei|con la fotocopia=com a fotocópia|hice cola otra vez=fiz fila de novo|cuando me tocó=quando chegou a minha vez|la misma funcionaria=a mesma funcionária|me puso el sello=pôs o carimbo|en dos segundos=em dois segundos|y ella también=e ela também|ponte las pilas=se ligue|y sobre todo=e sobretudo|no hagas trámites=não faça trâmites|aquel viernes=naquela sexta|tenía que renovar=eu tinha que renovar|mi licencia de conducir=minha carteira de motorista|empezó a llover a cántaros=começou a chover canivete|llegué tarde=cheguei atrasado|y seguía lloviendo=e continuava chovendo|durante dos horas=durante duas horas|bajo el agua=debaixo d’água|pensé que sería pan comido=pensei que seria moleza|pero metí la pata=mas dei uma mancada|había olvidado la foto=tinha esquecido a foto|revisa siempre=confira sempre|los requisitos=os requisitos|antes de salir=antes de sair|llover a cántaros=chover canivete|aquel=aquele|aquella=aquela|el otro día=outro dia|hace poco=há pouco|una vez=uma vez|a punto de=prestes a|me puse a=comecei a|se puso a=começou a|se echó a=desatou a|acabé de=acabei de|acababa de=tinha acabado de|volví a=voltei a|volvió a=voltou a|dejé de=parei de|seguía=continuava|seguí=continuei|sigo=continuo|continuaba=continuava|iba=ia|ando=ando|andaba=andava|llevaba=estava havia|hacer cola=fazer fila|tomé una decisión=tomei uma decisão|tomar una decisión=tomar uma decisão|saqué=tirei|sacar una foto=tirar uma foto|eché una mano=dei uma mão|di un paseo=dei uma volta|presté atención=prestei atenção|cometí un error=cometi um erro|un ojo de la cara=os olhos da cara|en las nubes=no mundo da lua|las pilas=as pilhas|pelos en la lengua=papas na língua|en el clavo=em cheio|hasta las narices=de saco cheio|uña y carne=unha e carne|metí la pata=dei uma mancada|desde entonces=desde então|en fin=enfim|conclusión=conclusão');
['cusco', 'lima', 'marta', 'ana', 'sofía', 'bogotá'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'es-acabode': {
    o: 'As fases da ação: **estar a punto de**, **ponerse a**, **echarse a** (reír, llorar), **acabar de** (agorinha), **terminar de**, **dejar de**, **volver a**.',
    q: 'Para narrar com ritmo e precisão.',
    p: '"Acabei de chegar" é **acabo de llegar**.',
  },
  'es-sigo': {
    o: 'Perífrases com gerúndio: **seguir** + gerúndio, **ir** + gerúndio (aos poucos), **andar** + gerúndio (por aí), **venir** + gerúndio (desde antes), **llevar** + gerúndio.',
    q: 'Para falar de processos e de coisas que continuam.',
    p: '**Sigo estudiando**, sem "a".',
  },
  'es-tengohecho': {
    o: 'Perífrases com particípio: **tener** + particípio (**tengo escritos tres capítulos**), **llevar** + particípio, **dar por** + particípio, **dejar** + particípio.',
    q: 'Para fazer balanços de projetos e tarefas.',
    p: 'O particípio concorda com o objeto.',
  },
  'es-colocaciones': {
    o: 'Colocações: **tomar una decisión**, **echar una mano**, **sacar una foto**, **hacer cola**, **cumplir años**, **hacer caso**, **darse prisa**.',
    q: 'Para soar natural no dia a dia.',
    p: '"Tirar foto" é **sacar** una foto.',
  },
  'es-expresiones': {
    o: 'Expressões idiomáticas: **estar en las nubes**, **tomar el pelo**, **ponerse las pilas**, **ser pan comido**, **costar un ojo de la cara**, **no tener pelos en la lengua**, **dar en el clavo**.',
    q: 'Em conversas informais.',
    p: '**Tomar el pelo** é zoar, não puxar o cabelo.',
  },
  'es-cronica': {
    o: 'Uma crônica bem-humorada com perífrases (**estaba a punto de**, **seguía esperando**), colocações (**hacer cola**) e expressões (**pan comido**), com uma **moraleja**.',
    q: 'Para textos pessoais, blogs e a escrita do DELE B2.',
    p: 'Junta todo o módulo num texto leve.',
  },
});
Object.assign(CZH, {
  'es-acabode': ['acabei', 'a punto de', 'echarse a'],
  'es-sigo': ['continuo', 'aos poucos', 'por aí'],
  'es-tengohecho': ['capítulos', 'páginas', 'la reunión'],
  'es-colocaciones': ['decisão', 'dar uma mão', 'tirar foto'],
  'es-expresiones': ['mundo da lua', 'tirar sarro', 'moleza'],
  'es-cronica': ['a punto de', 'fila', 'caí na risada'],
});
Object.assign(OBJ, {
  'es-acabode': { o: 'Uso perífrases de fase.', a: 'Você sabe dizer "acabei de chegar" e "caiu no choro"?', ref: 'Gramática · B2' },
  'es-sigo': { o: 'Uso perífrases com gerúndio.', a: 'Você consegue descrever um processo com ir e seguir + gerúndio?', ref: 'Gramática · B2' },
  'es-tengohecho': { o: 'Uso perífrases com particípio, com concordância.', a: 'Você consegue fazer o balanço de um projeto com tener + particípio?', ref: 'Gramática · B2' },
  'es-colocaciones': { o: 'Uso colocações naturais.', a: 'Você conhece as colocações que mudam do português para o espanhol?', ref: 'Léxico · B2' },
  'es-expresiones': { o: 'Entendo e uso expressões idiomáticas comuns.', a: 'Você consegue usar três expressões numa conversa?', ref: 'Léxico · B2' },
  'es-cronica': { o: 'Consigo ler e escrever uma crônica.', a: 'Você consegue escrever uma crônica bem-humorada em espanhol?', ref: 'Expresión escrita · B2' },
});
MOD_OBJ[27] = ['Uso perífrases de fase, de gerúndio e de particípio.', 'Uso colocações naturais.', 'Entendo e uso expressões idiomáticas.', 'Consigo escrever uma crônica.'];

ES_MODS.push({ lv: 'B2', n: 'Perífrases e expressões', l: ['es-acabode', 'es-sigo', 'es-tengohecho', 'es-colocaciones', 'es-expresiones', 'es-cronica'] });
