// Inglês · B1 · Módulo 20 · How it's made (Como é feito). Formato de en/curso.js.

NL('en-madein', {
  de: "It's made in Brazil", pt: 'A voz passiva no presente', gt: 'passiva: is / are + particípio',
  gx: 'Na voz passiva, o foco está no que recebe a ação, e não em quem faz: Coffee is grown in Brazil (o café é cultivado no Brasil). A forma no presente é is / are + particípio. Usa-se muito para produtos, processos e fatos gerais.',
  ge: "Coffee is grown in Brazil.=O café é cultivado no Brasil.|These shoes are made in Italy.=Estes sapatos são feitos na Itália.|English is spoken all over the world.=O inglês é falado no mundo todo.",
  v: 'made=feito (make)=🏭|grown=cultivado (grow)=🌱|produced=produzido=⚙️|sold=vendido (sell)=🏷️|spoken=falado (speak)=🗣️|used=usado=🔧|exported=exportado=🚢|built=construído (build)=🏗️|designed=projetado=✏️|recycled=reciclado=♻️',
  x: 'factory=fábrica|product=produto|cotton=algodão|wood=madeira|plastic=plástico|steel=aço|label=etiqueta|imported=importado|delivered=entregue|cleaned=limpo',
  dlg: "Where is this T-shirt made?=Onde esta camiseta é feita?|The label says it's made in Vietnam.=A etiqueta diz que é feita no Vietnã.|And is the cotton grown there too?=E o algodão também é cultivado lá?|I don't know. It might be imported.=Não sei. Pode ser importado.",
  cz: 'Coffee ___ grown in Brazil.=is=are=has|These phones are ___ in China. (make)=made=make=making|English is ___ in many countries. (speak)=spoken=speak=spoke',
  whys: 'coffee é singular: is + particípio|a passiva usa o particípio: made|o particípio de speak é spoken',
  pts: 'Passiva no presente: is / are + particípio. Coffee is grown. Cars are made. O foco é no produto ou no fato, não em quem faz.|Usa-se quando quem faz não importa, é óbvio ou ninguém sabe: The streets are cleaned every night (por quem? não importa).|Os particípios irregulares mais comuns aqui: made, grown, sold, spoken, built, written, eaten, known.|Negativa e pergunta: It isn\'t made here. Where is it made? Are they sold online?',
  ex: "Most of our products are sold online.=A maioria dos nossos produtos é vendida online.|The streets are cleaned every night.=As ruas são limpas toda noite.|This chair is made of wood.=Esta cadeira é feita de madeira.|Plastic bottles are recycled here.=Garrafas de plástico são recicladas aqui.",
  bd: ['Coffee=S^o foco: o produto|is_grown=V^is + particípio: a passiva|in_Brazil.=L', 'O café é cultivado no Brasil.'],
  rule: 'passiva_presente',
  hw: 'Olhe as etiquetas de cinco coisas da sua casa e escreva de onde são e de que são feitas, com a passiva: My phone is made in … / This shirt is made of cotton.',
  deep: `
Hoje você aprende a **voz passiva** no presente: o jeito de falar de produtos, processos e fatos sem dizer quem faz.
# Passo 1: is / are + particípio
@ F:A passiva no presente;O quê^s|is / are^v|Particípio^p;Coffee|is|grown in Brazil.;These shoes|are|made in Italy.;English|is|spoken everywhere.
~ Coffee is grown in Brazil. = O café é cultivado no Brasil.
~ These shoes are made in Italy. = Estes sapatos são feitos na Itália.
BR É o nosso "**é feito**", "**são vendidos**". Em inglês, **is / are** + o particípio do verbo.
# Passo 2: ativa ou passiva?
@ V:Quem faz ou o que é feito?;Ativa: foco em quem faz|Farmers grow coffee in Brazil.;Passiva: foco no que é feito|Coffee is grown in Brazil.
! Use a passiva quando **quem faz** não importa, é óbvio ou ninguém sabe: The streets **are cleaned** every night.
# Passo 3: os particípios
| Verbo | Particípio |
| make | made |
| grow | grown |
| sell | sold |
| speak | spoken |
| build | built |
| use | used |
~ Most of our products are sold online. = A maioria dos nossos produtos é vendida online.
# Passo 4: feito de quê
| Em inglês | Em português |
| made of wood | feito de madeira |
| made of cotton | feito de algodão |
| made in Brazil | feito no Brasil |
~ This chair is made of wood. = Esta cadeira é feita de madeira.
! **made of** = o material; **made in** = o lugar.
> Treine agora: escolha três objetos à sua volta e diga onde e de que são feitos.
? Como se diz "o café é cultivado no Brasil"? || Coffee is grown in Brazil.
? made of ou made in: "feito de madeira"? || made of wood
? Qual o particípio de sell? || sold
`,
});

NL('en-process', {
  de: 'How is chocolate made?', pt: 'Descrever um processo', gt: 'passiva + first, then, after that, finally',
  gx: 'Para descrever um processo (como algo é feito), a passiva junta com conectores de sequência: First, the beans are picked. Then, they are dried in the sun. After that, they are roasted. Finally, the chocolate is packed.',
  ge: "First, the cocoa beans are picked.=Primeiro, os grãos de cacau são colhidos.|Then, they are dried in the sun.=Depois, são secos ao sol.|Finally, the chocolate is packed and sold.=Por fim, o chocolate é embalado e vendido.",
  v: 'process=processo=⚙️|picked=colhido=🧺|dried=secado=☀️|roasted=torrado=🔥|ground=moído (grind)=⚫|mixed=misturado=🥣|heated=aquecido=🌡️|cooled=resfriado=❄️|packed=embalado=📦|shipped=enviado (por navio, em geral)=🚢',
  x: 'beans=grãos|cocoa=cacau|sugar=açúcar|milk=leite|machine=máquina|step=etapa|stage=estágio|melted=derretido|poured=despejado|tested=testado',
  dlg: "Do you know how chocolate is made?=Você sabe como o chocolate é feito?|Not really. Is it made from cocoa beans?=Não muito. É feito de grãos de cacau?|Yes! First, the beans are picked and dried. Then they're roasted.=Sim! Primeiro, os grãos são colhidos e secos. Depois, são torrados.|And when is the sugar added?=E quando o açúcar é adicionado?",
  cz: 'First, the beans ___ picked.=are=is=were|Then, they are ___ in the sun. (dry)=dried=dry=drying|___, the chocolate is packed. (por fim)=Finally=First=Then',
  whys: 'the beans é plural: are + particípio|dry → dried (consoante + y vira -ied)|a última etapa: finally',
  pts: 'Um processo descreve etapas que acontecem sempre: por isso o presente, e a passiva, porque o foco é no produto e não em quem faz.|Conectores de sequência: First, … Then, … Next, … After that, … Finally, … Também: once (assim que) e when.|made from = feito a partir de (o material muda: Chocolate is made from cocoa beans). made of = feito de (o material continua visível: a table made of wood).|Particípios de processo: picked, dried, roasted, ground (moído), mixed, heated, cooled, packed, shipped.',
  ex: "Next, the beans are ground into a paste.=Em seguida, os grãos são moídos até virar uma pasta.|Sugar and milk are added.=Açúcar e leite são adicionados.|After that, the mixture is heated and cooled.=Depois disso, a mistura é aquecida e resfriada.|Chocolate is made from cocoa beans.=O chocolate é feito a partir de grãos de cacau.",
  bd: ['First,=T^a primeira etapa|the_cocoa_beans=S^o foco: o produto|are_picked.=V^passiva: são colhidos', 'Primeiro, os grãos de cacau são colhidos.'],
  rule: 'processo',
  hw: 'Descreva em seis etapas como é feito algo que você conhece (café, pão, suco, uma camiseta), com a passiva e first, then, next, after that e finally.',
  deep: `
Hoje você aprende a descrever um **processo**: como algo é feito, do começo ao fim. É uma das tarefas clássicas de escrita e fala do B1 e do B2.
# Passo 1: as etapas, na passiva
@ P:Do grão à barra de chocolate;First=the beans are picked.;Then=they are dried in the sun.;Next=they are roasted and ground.;After that=sugar and milk are added.;Finally=the chocolate is packed and sold.
~ First, the cocoa beans are picked. = Primeiro, os grãos de cacau são colhidos.
~ Then, they are dried in the sun. = Depois, são secos ao sol.
~ Finally, the chocolate is packed and sold. = Por fim, o chocolate é embalado e vendido.
BR Num processo, o foco é no **produto**, e não em quem trabalha. Por isso a passiva: the beans **are picked** (e não "workers pick the beans").
# Passo 2: os verbos de processo
| Verbo | Particípio | Em português |
| pick | picked | colhido |
| dry | dried | secado |
| roast | roasted | torrado |
| grind | ground | moído |
| mix | mixed | misturado |
| pack | packed | embalado |
~ Next, the beans are ground into a paste. = Em seguida, os grãos são moídos até virar uma pasta.
~ After that, the mixture is heated and cooled. = Depois disso, a mistura é aquecida e resfriada.
# Passo 3: made from × made of
@ V:from ou of?;made from: o material se transforma|Chocolate is made from cocoa beans.|Paper is made from wood.;made of: o material continua visível|This table is made of wood.|The bag is made of leather.
~ Chocolate is made from cocoa beans. = O chocolate é feito a partir de grãos de cacau.
> Treine agora: descreva em voz alta, em quatro etapas, como se faz o café que você toma.
? Por que um processo usa a passiva? || porque o foco é no produto, não em quem faz
? Qual o particípio de grind? || ground
? made from ou made of: "Paper is ___ wood"? || made from
`,
});

NL('en-beenrepaired', {
  de: 'The bridge has been repaired', pt: 'A passiva em outros tempos', gt: 'has been / will be / is being / was + particípio',
  gx: 'A passiva existe em todos os tempos; só o to be muda: is made (presente), was made (passado), has been made (present perfect), will be made (futuro), is being made (contínuo). O particípio fica sempre igual: The bridge has been repaired. The new station will be opened next year.',
  ge: "The bridge has been repaired.=A ponte foi consertada.|The new station will be opened next year.=A nova estação vai ser inaugurada ano que vem.|The road is being repaired right now.=A estrada está sendo consertada agora.",
  v: 'has been=foi (até hoje)=⏮️|will be=vai ser=⏭️|is being=está sendo=⏳|was=foi (com data)=📆|repaired=consertado=🔧|opened=inaugurado, aberto=🎀|closed=fechado=🚧|replaced=substituído=🔄|cancelled=cancelado=❌|announced=anunciado=📢',
  x: 'road=estrada|bridge=ponte|station=estação|construction=obra, construção|delayed=atrasado|approved=aprovado|finished=terminado|painted=pintado|renovated=reformado|expanded=ampliado',
  dlg: "Is the subway line open again?=A linha do metrô já reabriu?|Not yet. It's still being repaired.=Ainda não. Ainda está sendo consertada.|When will it be finished?=Quando vai ser terminada?|It was supposed to be finished last month. Now they say it'll be opened in May.=Era para ter sido terminada mês passado. Agora dizem que vai ser inaugurada em maio.",
  cz: 'The bridge ___ been repaired.=has=have=is|The station will ___ opened next year.=be=been=being|The road is ___ repaired right now.=being=been=be',
  whys: 'present perfect da passiva, com the bridge: has been + particípio|futuro da passiva: will be + particípio|contínuo da passiva: is being + particípio',
  pts: 'A passiva em todos os tempos: só o to be muda; o particípio fica igual. is repaired / was repaired / has been repaired / will be repaired / is being repaired.|has been + particípio: já foi feito, até hoje (sem data): The bridge has been repaired.|will be + particípio: vai ser feito: The station will be opened next year.|is being + particípio: está sendo feito agora: The road is being repaired.',
  ex: "The meeting has been cancelled.=A reunião foi cancelada.|The museum is being renovated.=O museu está sendo reformado.|The results will be announced on Friday.=Os resultados vão ser anunciados na sexta.|The project was approved last week.=O projeto foi aprovado semana passada.",
  bd: ['The_bridge=S|has_been_repaired.=V^has been + particípio: a passiva no present perfect', 'A ponte foi consertada.'],
  rule: 'passiva_tempos',
  hw: 'Escreva cinco frases sobre obras e mudanças na sua cidade, cada uma num tempo da passiva: was …, has been …, is being …, will be … e is …',
  deep: `
Hoje você leva a passiva para todos os tempos. A regra é simples: **só o to be muda**; o particípio fica sempre igual.
# Passo 1: a passiva em todos os tempos
@ M:Só o to be muda;Tempo|Passiva;presente|is repaired;passado|was repaired;present perfect|has been repaired;futuro|will be repaired;contínuo|is being repaired
~ The bridge has been repaired. = A ponte foi consertada.
~ The new station will be opened next year. = A nova estação vai ser inaugurada ano que vem.
~ The road is being repaired right now. = A estrada está sendo consertada agora.
# Passo 2: has been, já foi feito
~ The meeting has been cancelled. = A reunião foi cancelada.
! Como no present perfect comum: sem data, **has been**; com data, **was**: The project **was approved** last week.
# Passo 3: is being, está sendo feito
~ The museum is being renovated. = O museu está sendo reformado.
BR É o nosso "**está sendo** + particípio": está sendo reformado = **is being renovated**.
# Passo 4: will be, vai ser feito
~ The results will be announced on Friday. = Os resultados vão ser anunciados na sexta.
| Em inglês | Em português |
| will be opened | vai ser inaugurado |
| will be finished | vai ser terminado |
| will be announced | vai ser anunciado |
> Treine agora: diga uma obra da sua cidade que foi feita, uma que está sendo feita e uma que vai ser feita.
? Como se diz "está sendo consertado"? || is being repaired
? Como se diz "vai ser inaugurado"? || will be opened
? has been ou was: "foi aprovado semana passada"? || was approved (com data)
`,
});

NL('en-havedone', {
  de: 'I had my hair cut', pt: 'Mandar fazer algo', gt: 'have / get something done',
  gx: 'Quando outra pessoa faz algo para você (e você paga ou pede), o inglês usa have / get + coisa + particípio: I had my hair cut (cortei o cabelo, no cabeleireiro). I\'m getting my car fixed (estou mandando consertar o carro). "I cut my hair" quer dizer que você mesma cortou.',
  ge: "I had my hair cut yesterday.=Cortei o cabelo ontem (no cabeleireiro).|I'm getting my car fixed this week.=Vou mandar consertar o carro esta semana.|We had our kitchen painted.=Mandamos pintar a cozinha.",
  v: 'have … done=mandar fazer=🧑‍🔧|get … done=mandar fazer (informal)=🛠️|cut=cortado=✂️|fixed=consertado=🔧|painted=pintado=🖌️|cleaned=limpo=🧽|delivered=entregue=🚚|checked=examinado, verificado=🩺|done=feito=✅|hairdresser=cabeleireiro=💇',
  x: 'mechanic=mecânico|dentist=dentista|nails=unhas|teeth cleaned=limpeza dos dentes|eyes tested=exame de vista|suit=terno|shortened=encurtado|installed=instalado|photo taken=foto tirada|translated=traduzido',
  dlg: "Your hair looks great! Did you cut it yourself?=O seu cabelo está ótimo! Você mesma cortou?|No way! I had it cut at a salon downtown.=De jeito nenhum! Cortei num salão no centro.|I need to get mine done too.=Preciso cortar o meu também.|And I'm having my nails done on Saturday!=E vou fazer as unhas no sábado!",
  cz: 'I ___ my hair cut yesterday. (mandei)=had=have=did|I\'m getting my car ___. (fix)=fixed=fix=fixing|We had our house ___. (paint)=painted=paint=to paint',
  whys: 'mandar fazer, no passado: had + coisa + particípio|get + coisa + particípio: fixed|have + coisa + particípio: painted',
  pts: 'have + coisa + particípio = alguém faz para você: I have my car washed every month. I had my hair cut.|get + coisa + particípio = o mesmo, mais informal: I need to get my phone fixed.|Compare: I cut my hair (eu mesma cortei) × I had my hair cut (alguém cortou para mim). Em português dizemos "cortei o cabelo" para os dois.|Serviços comuns: have your hair cut, your nails done, your teeth cleaned, your eyes tested, your car fixed, your suit shortened.',
  ex: "I have my car washed every month.=Mando lavar o carro todo mês.|You should get your eyes tested.=Você deveria fazer um exame de vista.|She had her dress shortened.=Ela mandou encurtar o vestido.|Where can I get this translated?=Onde posso mandar traduzir isto?",
  bd: ['I=S|had=V^had: mandei (no passado)|my_hair=OA^a coisa|cut=PT^particípio: o que foi feito|yesterday.=T', 'Cortei o cabelo ontem (no cabeleireiro).'],
  rule: 'have_done',
  hw: 'Escreva seis serviços que você mandou ou vai mandar fazer, com have / get + coisa + particípio (I had my … fixed / I need to get my … cleaned).',
  deep: `
Hoje você aprende a dizer que **mandou fazer** algo: cortar o cabelo, consertar o carro, pintar a casa. Em português, "cortei o cabelo" serve para os dois casos; em inglês, não.
# Passo 1: have + coisa + particípio
@ E:Mandar fazer;I had^v|my hair^s|cut.^p
~ I had my hair cut yesterday. = Cortei o cabelo ontem (no cabeleireiro).
~ We had our kitchen painted. = Mandamos pintar a cozinha.
# Passo 2: eu mesma ou outra pessoa?
@ V:Quem fez?;Eu mesma|I cut my hair.|I painted the kitchen.;Outra pessoa (mandei)|I had my hair cut.|I had the kitchen painted.
BR "Cortei o cabelo" em português quase sempre quer dizer "no cabeleireiro". Em inglês, **I cut my hair** dá a entender que você mesma cortou. Para o salão: **I had my hair cut**.
# Passo 3: get, o jeito informal
~ I'm getting my car fixed this week. = Vou mandar consertar o carro esta semana.
~ I need to get mine done too. = Preciso fazer o meu também.
! **get** + coisa + particípio é o mesmo que have, só mais informal e comum na fala.
# Passo 4: serviços do dia a dia
| Em inglês | Em português |
| have your hair cut | cortar o cabelo |
| get your nails done | fazer as unhas |
| have your teeth cleaned | fazer limpeza nos dentes |
| get your eyes tested | fazer exame de vista |
| have your car fixed | consertar o carro |
~ You should get your eyes tested. = Você deveria fazer um exame de vista.
~ Where can I get this translated? = Onde posso mandar traduzir isto?
> Treine agora: diga dois serviços que você mandou fazer este mês.
? Como se diz "cortei o cabelo" (no salão)? || I had my hair cut.
? O que quer dizer "I cut my hair"? || que você mesma cortou
? Como se diz "vou mandar consertar o carro"? || I'm getting my car fixed.
`,
});

NL('en-invented', {
  de: 'Invented by …', pt: 'Invenções e quem as fez', gt: 'passiva com by · was invented by',
  gx: 'Quando quem fez importa, a passiva traz o agente com by: The telephone was invented by Alexander Graham Bell. Mona Lisa was painted by Leonardo da Vinci. É comum para invenções, obras de arte e descobertas, quando o foco está na obra.',
  ge: "The light bulb was invented by Thomas Edison.=A lâmpada foi inventada por Thomas Edison.|The Mona Lisa was painted by Leonardo da Vinci.=A Mona Lisa foi pintada por Leonardo da Vinci.|Penicillin was discovered in 1928.=A penicilina foi descoberta em 1928.",
  v: 'invented=inventado=💡|discovered=descoberto=🔍|painted=pintado=🎨|written=escrito (write)=✍️|directed=dirigido=🎬|composed=composto=🎼|founded=fundado=🏢|by=por (quem fez)=👤|invention=invenção=⚙️|inventor=inventor=🧑‍🔬',
  x: 'airplane=avião|telephone=telefone|light bulb=lâmpada|internet=internet|novel=romance (livro)|song=canção|company=empresa|scientist=cientista|century=século|patent=patente',
  dlg: "Did you know the airplane was invented by a Brazilian?=Você sabia que o avião foi inventado por um brasileiro?|Really? I thought it was invented by the Wright brothers.=Sério? Achei que tinha sido inventado pelos irmãos Wright.|Well, Brazilians say Santos-Dumont was first!=Bom, os brasileiros dizem que o Santos-Dumont foi o primeiro!|That's a good argument for a dinner party!=Isso dá uma boa discussão para um jantar!",
  cz: 'The telephone was invented ___ Bell.=by=from=of|Romeo and Juliet was ___ by Shakespeare. (write)=written=wrote=writed|Penicillin ___ discovered in 1928.=was=is=has',
  whys: 'quem fez a ação: by|o particípio de write é written|com data (1928), passiva no passado: was',
  pts: 'Passiva no passado com o agente: was / were + particípio + by + quem fez. The light bulb was invented by Edison.|Use by quando quem fez é importante ou interessante. Se não importa, deixe de fora: Penicillin was discovered in 1928.|Particípios das obras: invented, discovered, painted, written, directed (filmes), composed (músicas), founded (empresas), built.|Para perguntar: Who was it invented by? / When was it built? / Where was it discovered?',
  ex: "Google was founded in 1998.=O Google foi fundado em 1998.|The song was composed by Tom Jobim.=A canção foi composta por Tom Jobim.|The movie was directed by a woman.=O filme foi dirigido por uma mulher.|Who was it written by?=Por quem foi escrito?",
  bd: ['The_light_bulb=S^a obra: o foco|was_invented=V^passiva no passado|by_Thomas_Edison.=PP^by: quem fez', 'A lâmpada foi inventada por Thomas Edison.'],
  rule: 'passiva_by',
  hw: 'Escreva seis frases sobre invenções, livros, músicas e filmes que você conhece, com was + particípio + by (… was invented / written / composed / directed by …).',
  deep: `
Hoje você fala de invenções, obras de arte e descobertas: quem fez o quê. A passiva traz o autor com **by**.
# Passo 1: was + particípio + by
@ E:A obra e quem fez;The Mona Lisa^s|was painted^v|by Leonardo da Vinci.^p
~ The light bulb was invented by Thomas Edison. = A lâmpada foi inventada por Thomas Edison.
~ The Mona Lisa was painted by Leonardo da Vinci. = A Mona Lisa foi pintada por Leonardo da Vinci.
# Passo 2: com ou sem by?
@ V:Quem fez importa?;Importa: com by|The song was composed by Tom Jobim.;Não importa: sem by|Penicillin was discovered in 1928.
~ Penicillin was discovered in 1928. = A penicilina foi descoberta em 1928.
! Use **by** só quando quem fez é importante ou interessante. "The pizza was made by someone" não acrescenta nada.
# Passo 3: os verbos das obras
| Obra | Verbo | Particípio |
| invenção | invent | invented |
| descoberta | discover | discovered |
| quadro | paint | painted |
| livro | write | written |
| filme | direct | directed |
| música | compose | composed |
| empresa | found | founded |
~ Google was founded in 1998. = O Google foi fundado em 1998.
~ The movie was directed by a woman. = O filme foi dirigido por uma mulher.
# Passo 4: perguntar
~ Who was it written by? = Por quem foi escrito?
| Em inglês | Em português |
| Who was it invented by? | Por quem foi inventado? |
| When was it built? | Quando foi construído? |
| Where was it discovered? | Onde foi descoberto? |
BR Na pergunta com by, o **by** costuma ir para o fim: Who was it written **by**?
> Treine agora: diga três obras brasileiras e por quem foram feitas, com was … by.
? Como se diz "foi inventado por Edison"? || It was invented by Edison.
? Qual o particípio de write? || written
? Como se pergunta "por quem foi pintado?" || Who was it painted by?
`,
});

NL('en-howitworks', {
  de: 'How it works', pt: 'Ler e escrever sobre um processo', gt: 'passiva em processos · conectores de sequência',
  gx: 'Um texto sobre um processo (como funciona a reciclagem, como o café chega à sua xícara) tem: uma introdução, as etapas na passiva com conectores (First, … Then, … After that, … Finally, …) e uma conclusão. Use o presente, porque o processo acontece sempre assim.',
  ge: "First, the bottles are collected from homes.=Primeiro, as garrafas são recolhidas nas casas.|After that, they are washed and cut into small pieces.=Depois disso, são lavadas e cortadas em pedaços pequenos.|Finally, the plastic is used to make new products.=Por fim, o plástico é usado para fazer novos produtos.",
  v: 'recycling=reciclagem=♻️|collected=recolhido=🗑️|sorted=separado=🔀|washed=lavado=🧼|cut=cortado=✂️|melted=derretido=🔥|turned into=transformado em=🔄|pieces=pedaços=🧩|reused=reutilizado=🔁|landfill=aterro sanitário=🏔️',
  x: 'bin=lixeira|truck=caminhão|plant=usina, fábrica|glass=vidro|paper=papel|metal=metal|waste=lixo, resíduo|environment=meio ambiente|reduce=reduzir|energy=energia',
  dlg: "What happens to the bottles after we recycle them?=O que acontece com as garrafas depois que a gente recicla?|They're taken to a recycling plant and sorted.=Elas são levadas para uma usina de reciclagem e separadas.|And then?=E depois?|Then they're cleaned, melted and turned into new things, like T-shirts!=Depois são limpas, derretidas e transformadas em coisas novas, como camisetas!",
  cz: 'First, the bottles ___ collected.=are=is=have|Then, they are ___ into small pieces. (cut)=cut=cutted=cutting|___, the plastic is used again. (por fim)=Finally=First=Then',
  whys: 'the bottles é plural: are + particípio|cut não muda: o particípio é cut|a última etapa: finally',
  pts: 'Introdução: diga o que vai explicar: Have you ever wondered what happens to …? / This is how … works.|Etapas: presente + passiva + conectores: First, … are collected. Then, … are sorted. After that, … Finally, …|Conclusão: o resultado ou a importância: This way, less waste goes to landfills. / Recycling saves energy.|Varie os conectores (next, once, when) e use turned into (transformado em) e used to make (usado para fazer).',
  ex: "Have you ever wondered what happens to your trash?=Você já se perguntou o que acontece com o seu lixo?|Glass can be recycled again and again.=O vidro pode ser reciclado várias vezes.|This way, less waste goes to landfills.=Assim, menos lixo vai para os aterros.|Recycling saves a lot of energy.=A reciclagem economiza muita energia.",
  bd: ['After_that,=T^depois disso|they=S^as garrafas|are_washed=V^passiva|and_cut_into_small_pieces.=V^cut: particípio igual', 'Depois disso, são lavadas e cortadas em pedaços pequenos.'],
  rule: 'texto_processo',
  hw: 'Escreva um texto de 80 a 100 palavras explicando um processo que você conhece (como o café chega à xícara, como uma camiseta é feita, como funciona a coleta de lixo), com introdução, etapas na passiva e conclusão.',
  le: {
    texto: {
      t: 'From your bin to a new T-shirt', kind: 'leitura', voz: 'b',
      intro: 'Um texto explica o que acontece com as garrafas plásticas recicladas. Leia e responda.',
      paras: ['Have you ever wondered what happens to the plastic bottles you recycle?', 'First, they are collected from homes and taken to a recycling plant.', 'Then, they are sorted by color and type. Bottle caps and labels are removed.', 'After that, the bottles are washed and cut into small pieces called flakes.', 'Next, the flakes are melted and turned into long, thin fibers.', 'Finally, these fibers are used to make new products, like T-shirts, bags and even carpets.', 'It takes about 25 bottles to make one T-shirt. This way, less plastic goes to landfills.'],
      qs: [
        { q: 'Para onde as garrafas vão primeiro?', o: ['para uma usina de reciclagem', 'para um aterro', 'para uma loja'], a: 0 },
        { q: 'O que é retirado das garrafas?', o: ['as tampas e os rótulos', 'a cor', 'o plástico'], a: 0 },
        { q: 'Como se chamam os pedaços pequenos?', o: ['flakes', 'fibers', 'caps'], a: 0 },
        { q: 'Quantas garrafas são preciso para uma camiseta?', o: ['cerca de 25', 'uma', 'cerca de 100'], a: 0 },
      ],
    },
    escrita: {
      t: 'Explique um processo', tipo: 'form', ok: 'Texto escrito corretamente.',
      pede: 'Explique como é feita uma coisa (café, pão, papel, suco…). Uma etapa em cada linha, com a passiva.',
      campos: [
        { l: 'Introduction', d: 'Have you ever wondered …? / This is how …', re: '\\b(have you ever wondered|this is how|do you know how|here is how)\\b', f: 'iu', err: 'Comece apresentando o processo: Have you ever wondered how coffee is made?' },
        { l: 'Step 1', d: 'First, … is / are + particípio', re: '^first,?\\s.*\\b(is|are)\\s+\\p{L}+(ed|en|wn|t|ne|ld|ght|ut)\\b', f: 'iu', err: 'Primeira etapa com First e a passiva: First, the coffee beans are picked.', bad: [['^first,?\\s.*\\b(pick|picks|wash|washes|dry|dries|cut|cuts)\\b(?! by)', 'Use a passiva: the beans <b>are picked</b>.']] },
        { l: 'Step 2', d: 'Then, …', re: '^(then|next),?\\s.*\\b(is|are)\\s+\\p{L}+(ed|en|wn|t|ne|ld|ght|ut)\\b', f: 'iu', err: 'Segunda etapa com Then e a passiva: Then, they are dried in the sun.' },
        { l: 'Step 3', d: 'After that, …', re: '^after that,?\\s.*\\b(is|are)\\s+\\p{L}+(ed|en|wn|t|ne|ld|ght|ut)\\b', f: 'iu', err: 'Terceira etapa com After that e a passiva: After that, they are roasted.' },
        { l: 'Step 4', d: 'Finally, …', re: '^finally,?\\s.*\\b(is|are)\\s+\\p{L}+(ed|en|wn|t|ne|ld|ght|ut)\\b', f: 'iu', err: 'Última etapa com Finally e a passiva: Finally, the coffee is packed and sold.' },
        { l: 'Conclusion', d: 'This way, … / That\'s how …', re: "^(this way|that'?s how|and that'?s|so,|in the end)\\b", f: 'iu', err: "Feche com uma conclusão: That's how your coffee gets to your cup!" },
      ],
      modelo: "Have you ever wondered how coffee is made? · First, the coffee cherries are picked by hand. · Then, the beans are dried in the sun. · After that, they are roasted and ground. · Finally, the coffee is packed and sold. · That's how your coffee gets to your cup!",
    },
  },
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo da passiva. Você vai ler como uma garrafa plástica vira camiseta e escrever um texto explicando outro processo.
# Passo 1: a estrutura do texto
@ P:Um texto sobre um processo;Introdução=Have you ever wondered what happens to …?;Etapa 1=First, the bottles are collected.;Etapa 2=Then, they are sorted.;Etapa 3=After that, they are washed and cut.;Etapa 4=Finally, they are turned into new products.;Conclusão=This way, less plastic goes to landfills.
~ First, the bottles are collected from homes. = Primeiro, as garrafas são recolhidas nas casas.
~ Finally, the plastic is used to make new products. = Por fim, o plástico é usado para fazer novos produtos.
# Passo 2: presente e passiva
Um processo acontece **sempre** do mesmo jeito: presente. E o foco é no **produto**: passiva.
| Etapa | Passiva |
| recolher | are collected |
| separar | are sorted |
| lavar | are washed |
| derreter | are melted |
| transformar | are turned into |
~ After that, they are washed and cut into small pieces. = Depois disso, são lavadas e cortadas em pedaços pequenos.
# Passo 3: introdução e conclusão
| Introdução | Conclusão |
| Have you ever wondered …? | This way, … |
| This is how … works. | That's how … |
| Do you know how … is made? | It's a simple process that … |
~ Have you ever wondered what happens to your trash? = Você já se perguntou o que acontece com o seu lixo?
~ This way, less waste goes to landfills. = Assim, menos lixo vai para os aterros.
BR Esse tipo de texto aparece em provas de inglês e em trabalhos. Introdução, etapas com conectores e conclusão: com esse roteiro, fica fácil.
> Agora leia o texto sobre reciclagem e escreva o seu.
? Por que o processo usa o presente? || porque acontece sempre do mesmo jeito
? Como se diz "transformado em"? || turned into
? Como fechar o texto? || com uma conclusão: This way, … / That's how …
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V("It's made in Brazil",
  'F:A passiva no presente;O quê^s|is / are^v|Particípio^p;Coffee|is|grown in Brazil.;These shoes|are|made in Italy.',
  'V:Ativa ou passiva?;Ativa: quem faz|Farmers grow coffee.;Passiva: o que é feito|Coffee is grown in Brazil.');
V('How is chocolate made?',
  'P:Do grão à barra;First=the beans are picked.;Then=they are dried.;Next=they are roasted.;After that=sugar is added.;Finally=the chocolate is packed.',
  'V:made from ou made of?;from: o material se transforma|Chocolate is made from cocoa.;of: o material continua visível|The table is made of wood.');
V('The bridge has been repaired',
  'M:Só o to be muda;Tempo|Passiva;presente|is repaired;passado|was repaired;present perfect|has been repaired;futuro|will be repaired;contínuo|is being repaired',
  'E:Está sendo feito;The road^s|is being^v|repaired.^p');
V('I had my hair cut',
  'E:Mandar fazer;I had^v|my hair^s|cut.^p',
  'V:Quem fez?;Eu mesma|I cut my hair.;Outra pessoa|I had my hair cut.|I got my car fixed.');
V('Invented by …',
  'E:A obra e quem fez;The Mona Lisa^s|was painted^v|by Leonardo da Vinci.^p',
  'M:Os verbos das obras;Obra|Particípio;invenção|invented;livro|written;filme|directed;música|composed;empresa|founded');
V('How it works',
  'P:Um texto sobre um processo;Introdução=Have you ever wondered …?;Etapas=First, Then, After that, Finally + passiva;Conclusão=This way, … / That\'s how …',
  'P:Da garrafa à camiseta;collected=recolhidas;sorted=separadas;washed=lavadas;melted=derretidas;turned into=transformadas em');
S_("It's made in Brazil", 'coffee=café|Brazil=Brasil|shoes=sapatos|Italy=Itália|English=inglês|all over the world=no mundo todo|T-shirt=camiseta|label=etiqueta|says=diz|Vietnam=Vietnã|cotton=algodão|there=lá|imported=importado|phones=celulares|China=China|countries=países|products=produtos|online=online|streets=ruas|every night=toda noite|chair=cadeira|bottles=garrafas|farmers=agricultores|everywhere=em todo lugar|most of=a maioria de');
S_('How is chocolate made?', 'chocolate=chocolate|cocoa beans=grãos de cacau|sun=sol|not really=não muito|added=adicionado|paste=pasta|mixture=mistura|into=em (transformação)|paper=papel|leather=couro|table=mesa|bag=bolsa|bar=barra|coffee=café');
S_('The bridge has been repaired', 'subway line=linha do metrô|open again=reaberta|still=ainda|right now=agora|last month=mês passado|May=maio|meeting=reunião|museum=museu|results=resultados|Friday=sexta|project=projeto|last week=semana passada|next year=ano que vem|new=nova|say=dizem|work=obra');
S_('I had my hair cut', 'hair=cabelo|looks great=está ótimo|yourself=você mesma|salon=salão|downtown=centro|mine=o meu|nails=unhas|Saturday=sábado|yesterday=ontem|car=carro|this week=esta semana|kitchen=cozinha|every month=todo mês|washed=lavado|eyes=olhos|tested=examinados|dress=vestido|shortened=encurtado|translated=traduzido|house=casa|phone=celular');
S_('Invented by …', 'airplane=avião|Brazilian=brasileiro|thought=achei (think)|brothers=irmãos|first=primeiro|argument=discussão, argumento|dinner party=jantar|light bulb=lâmpada|Mona Lisa=Mona Lisa|penicillin=penicilina|1928=mil novecentos e vinte e oito|telephone=telefone|Google=Google|1998=mil novecentos e noventa e oito|song=canção|movie=filme|woman=mulher|someone=alguém|pizza=pizza|built=construído');
S_('How it works', 'happens=acontece|recycle=reciclar|taken=levadas|recycling plant=usina de reciclagem|cleaned=limpas|things=coisas|T-shirts=camisetas|bottles=garrafas|homes=casas|small=pequenos|plastic=plástico|new products=novos produtos|wondered=se perguntou|trash=lixo|again and again=várias vezes|less=menos|goes=vai|saves=economiza|a lot of=muita|bin=lixeira|color=cor|type=tipo|bottle caps=tampas|labels=rótulos|removed=retirados|called=chamados|flakes=flocos|long=longas|thin=finas|fibers=fibras|bags=bolsas|carpets=tapetes|takes=são precisas|about=cerca de|coffee cherries=frutos do café|by hand=à mão|cup=xícara|gets to=chega a');
['bell', 'alexander', 'graham', 'edison', 'thomas', 'leonardo', 'vinci', 'mona', 'lisa', 'wright', 'santos-dumont', 'santos', 'dumont', 'jobim', 'shakespeare', 'romeo', 'juliet', 'google', 'vietnam', 'italy', 'china'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'en-madein': {
    o: 'A **voz passiva** no presente é **is / are + particípio**: **Coffee is grown in Brazil**. O foco é no produto ou no fato, e não em quem faz.',
    q: 'Para falar de produtos, de onde vêm e de que são feitos, e de fatos gerais.',
    p: 'A passiva está em etiquetas, notícias, manuais e textos técnicos. Entendê-la é essencial a partir do B1.',
  },
  'en-process': {
    o: 'Um processo usa a passiva com conectores: **First, the beans are picked. Then, they are dried. Finally, the chocolate is packed.**',
    q: 'Para explicar como algo é feito, do começo ao fim.',
    p: 'Descrever processos é uma tarefa clássica de escrita e de fala nas provas de inglês.',
  },
  'en-beenrepaired': {
    o: 'A passiva existe em todos os tempos: só o to be muda. **has been repaired**, **will be opened**, **is being repaired**, **was approved**.',
    q: 'Para falar de obras, mudanças e decisões: o que foi, está sendo ou vai ser feito.',
    p: 'Notícias e avisos usam a passiva em todos os tempos. Com a regra "só o to be muda", você domina todos de uma vez.',
  },
  'en-havedone': {
    o: '**have / get + coisa + particípio** = mandar fazer: **I had my hair cut** (no salão). **I cut my hair** quer dizer que você mesma cortou.',
    q: 'Para falar de serviços: cabeleireiro, mecânico, dentista, consertos.',
    p: 'Em português, "cortei o cabelo" serve para os dois casos. Em inglês, a diferença evita mal-entendidos engraçados.',
  },
  'en-invented': {
    o: 'Com o agente: **was + particípio + by**. **The light bulb was invented by Edison**. Use by só quando quem fez importa.',
    q: 'Para falar de invenções, obras de arte, livros, músicas e descobertas.',
    p: 'É o jeito natural de falar de autoria em inglês, em museus, aulas e conversas sobre cultura.',
  },
  'en-howitworks': {
    o: 'Um texto sobre um processo tem introdução, etapas no presente com a passiva e conectores (**First, Then, After that, Finally**) e conclusão.',
    q: 'Para explicar por escrito como algo funciona ou é feito.',
    p: 'É um texto que aparece em provas e no trabalho. E fecha o módulo com a passiva em uso real.',
  },
});
Object.assign(CZH, {
  'en-madein': ['passiva, com coffee', 'make, no particípio', 'speak, no particípio'],
  'en-process': ['passiva, com the beans', 'dry, no particípio', 'a última etapa'],
  'en-beenrepaired': ['passiva no present perfect, com the bridge', 'passiva no futuro', 'passiva contínua'],
  'en-havedone': ['mandei (passado)', 'fix, depois de getting my car', 'paint, depois de had our house'],
  'en-invented': ['quem fez', 'write, no particípio', 'com data: passiva no passado'],
  'en-howitworks': ['passiva, com the bottles', 'cut, no particípio', 'a última etapa'],
});
Object.assign(OBJ, {
  'en-madein': { o: 'Consigo falar de produtos e fatos com a voz passiva no presente.', a: 'Você consegue dizer onde e de que um produto é feito?', ref: 'Grammatical accuracy · B1' },
  'en-process': { o: 'Consigo descrever um processo com a passiva e conectores.', a: 'Você consegue explicar como algo é feito, etapa por etapa?', ref: 'Describing processes · B1' },
  'en-beenrepaired': { o: 'Consigo usar a passiva em vários tempos.', a: 'Você consegue dizer o que foi, está sendo e vai ser feito?', ref: 'Grammatical accuracy · B1' },
  'en-havedone': { o: 'Consigo dizer que mandei fazer algo com have / get something done.', a: 'Você sabe a diferença entre I cut my hair e I had my hair cut?', ref: 'Goods and services · B1' },
  'en-invented': { o: 'Consigo falar de invenções e obras com a passiva e by.', a: 'Você consegue dizer quem inventou, pintou ou escreveu algo?', ref: 'Describing culture · B1' },
  'en-howitworks': { o: 'Consigo ler e escrever um texto explicando um processo.', a: 'Você consegue escrever um texto com introdução, etapas e conclusão?', ref: 'Written reports · B1' },
});
MOD_OBJ[19] = ['Consigo usar a voz passiva em vários tempos.', 'Consigo descrever um processo.', 'Consigo dizer que mandei fazer algo e falar de invenções.', 'Consigo escrever um texto explicando um processo.'];

EN_MODS.push({ lv: 'B1', n: 'Como é feito', l: ['en-madein', 'en-process', 'en-beenrepaired', 'en-havedone', 'en-invented', 'en-howitworks'] });
