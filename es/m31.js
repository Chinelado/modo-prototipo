// Espanhol · B2 · Módulo 31 · Sonar natural (Soar natural). Formato de es/curso.js.

NL('es-marcadores', {
  de: 'Bueno, pues …', pt: 'Os marcadores da fala', gt: 'bueno, pues, o sea, es que, a ver, digamos, este (México, Argentina), en plan (Espanha)',
  gx: 'Na fala real, pequenas palavras organizam a conversa: bueno (bom, para começar ou mudar de assunto), pues (então, bem), o sea (ou seja, quer dizer), es que (é que, para justificar), a ver (vamos ver), digamos (digamos). Para hesitar: este… (México, Argentina) ou eh… E na Espanha jovem: en plan (tipo).',
  ge: 'Bueno, pues nada, nos vemos mañana.=Bom, então tá, a gente se vê amanhã.|Es que no tuve tiempo.=É que não tive tempo.|O sea, que no vienes.=Ou seja, você não vem.',
  v: 'bueno=bom=👌|pues=então, bem=➡️|o sea=ou seja=🟰|es que=é que=🙈|a ver=vamos ver=👀|digamos=digamos=💭|este=é…, tipo (hesitação)=🤔|en plan=tipo (Espanha)=🇪🇸|vale=tá bom (Espanha)=👍|¿no?=né?=❓',
  x: 'pues nada=então tá|bueno, pues=bom, então|¿sabes?=sabe?|¿viste?=viu? (Argentina)|mira=olha|oye=ei, escuta|fíjate=imagina só|total=resumindo|en fin=enfim|vamos=vamos lá, quer dizer',
  dlg: 'Oye, ¿vienes a la fiesta o no?=Ei, você vem à festa ou não?|Bueno, es que… este… mañana trabajo temprano.=Bom, é que… é… amanhã trabalho cedo.|O sea, que no vienes.=Ou seja, você não vem.|A ver, digamos que voy un rato. ¿Vale?=Vamos ver, digamos que eu vou um pouco. Tá bom?',
  cz: 'Es ___ no tuve tiempo. (é que)=que=de=lo|O ___, que no vienes. (ou seja)=sea=seja=sí|___, pues nada, nos vemos mañana. (bom)=Bueno=Bien=Bom',
  whys: 'justificar: es que|ou seja: o sea|bom (para fechar): bueno',
  pts: 'Começar ou mudar de assunto: bueno, pues, a ver, mira, oye.|Explicar ou reformular: o sea, es decir, digamos, quiero decir. Justificar: es que …|Ganhar tempo (hesitar): este… (México, Argentina), eh…, pues…, ¿cómo te digo?|Fechar ou resumir: bueno, pues nada; total, que …; en fin. Pedir confirmação: ¿no?, ¿verdad?, ¿sabes?, ¿viste? (Argentina), ¿vale? (Espanha).',
  ex: 'Mira, te lo explico otra vez.=Olha, eu te explico de novo.|Total, que llegamos tarde.=Resumindo, chegamos atrasados.|En fin, ya veremos.=Enfim, vamos ver.|Es muy simpático, ¿no?=Ele é muito simpático, né?',
  bd: ['Es_que=C^es que: justifica|no_tuve_tiempo.=V', 'É que não tive tempo.'],
  rule: 'marcadores',
  hw: 'Grave-se (ou escreva) contando o seu dia em dois minutos, usando pelo menos oito marcadores: bueno, pues, o sea, es que, a ver, mira, total, en fin.',
  deep: `
Hoje começa o módulo do **espanhol natural**. Os marcadores da fala são o que faz você soar como alguém de verdade, e não como um livro.
# Passo 1: começar e mudar de assunto
@ P:Começar;Neutro=Bueno, …;Atenção=Mira, … / Oye, …;Organizar=A ver, …;Então=Pues …
~ Mira, te lo explico otra vez. = Olha, eu te explico de novo.
~ Bueno, pues nada, nos vemos mañana. = Bom, então tá, a gente se vê amanhã.
# Passo 2: explicar e justificar
| Em espanhol | Em português |
| o sea | ou seja, quer dizer |
| es que … | é que … |
| digamos | digamos |
~ Es que no tuve tiempo. = É que não tive tempo.
~ O sea, que no vienes. = Ou seja, você não vem.
BR **Es que** é a desculpa universal: "**es que** había tráfico", "**es que** no lo sabía". Igualzinho ao nosso "é que…".
# Passo 3: hesitar
@ M:Ganhar tempo;Onde|Marcador;México, Argentina|este…;Espanha|pues…, en plan…;Em toda parte|eh…, ¿cómo te digo?
~ Total, que llegamos tarde. = Resumindo, chegamos atrasados.
# Passo 4: pedir confirmação e fechar
| Marcador | Onde |
| ¿no? / ¿verdad? | em toda parte |
| ¿viste? | Argentina, Uruguai |
| ¿vale? | Espanha |
~ Es muy simpático, ¿no? = Ele é muito simpático, né?
~ En fin, ya veremos. = Enfim, vamos ver.
! **Este…** como hesitação (México, Argentina) não tem nada a ver com "este" de "esta casa": é o nosso "é…", "tipo…".
> Treine agora: responda em voz alta "¿Por qué no viniste ayer?" com três marcadores.
? "É que não tive tempo": || Es que no tuve tiempo.
? "Ou seja": || o sea
? "Resumindo, chegamos atrasados": || Total, que llegamos tarde.
`,
});

NL('es-reacciones', {
  de: '¡No me digas!', pt: 'Reagir como um nativo', gt: '¡anda!, ¡vaya!, ¡qué va!, ¡ni modo!, ¡qué bárbaro!, ¡ojo!, ¿en serio?, ¡menos mal!, ¡qué rabia!, ¡ya!',
  gx: 'As reações curtas mostram que você está ouvindo. Surpresa: ¿En serio? ¡No me digas! ¡Anda! (Espanha) ¡Qué bárbaro! (Argentina). Alívio: ¡Menos mal! Raiva: ¡Qué rabia! Resignação: ¡Ni modo! (México), ¡Qué le vamos a hacer! Negar com força: ¡Qué va! Avisar: ¡Ojo! (cuidado).',
  ge: '¿En serio? ¡No me digas!=Sério? Não me diga!|¡Menos mal que llegaste!=Ainda bem que você chegou!|¿Cansada? ¡Qué va! Estoy perfecta.=Cansada? Que nada! Estou ótima.',
  v: 'en serio=sério=😮|no me digas=não me diga=😲|menos mal=ainda bem=😌|qué rabia=que raiva=😤|qué va=que nada=🙅|ni modo=fazer o quê (México)=🤷|qué bárbaro=que incrível (Argentina)=🤩|ojo=cuidado, atenção=👁️|vaya=puxa=😯|anda=nossa (Espanha)=😳',
  x: 'qué pena=que pena|qué suerte=que sorte|qué horror=que horror|qué asco=que nojo|qué lindo=que lindo|qué bien=que bom|ya=pois é, já sei|claro=claro|obvio=óbvio|ni idea=não faço ideia',
  dlg: 'Perdí el celular en el taxi.=Perdi o celular no táxi.|¡No me digas! ¿Y lo encontraste?=Não me diga! E você achou?|Sí, el taxista me llamó. ¡Menos mal!=Sim, o taxista me ligou. Ainda bem!|¡Qué suerte! Ojo la próxima vez.=Que sorte! Cuidado na próxima vez.',
  cz: '¡___ mal que llegaste! (ainda bem)=Menos=Más=Mejor|¿Cansada? ¡Qué ___! (que nada)=va=nada=no|Perdí el bus. · ¡Ni ___! (fazer o quê, México)=modo=modos=forma',
  whys: 'alívio: menos mal|negar com força: qué va|resignação: ni modo',
  pts: 'Surpresa: ¿En serio? / ¡No me digas! / ¡Vaya! / ¡Anda! (Espanha) / ¡Qué bárbaro! (Argentina) / ¡No puede ser!|Emoções com qué: ¡Qué bien! ¡Qué suerte! ¡Qué pena! ¡Qué rabia! ¡Qué horror! ¡Qué asco!|Alívio e resignação: ¡Menos mal! / ¡Ni modo! (México) / ¡Qué le vamos a hacer! / Bueno, ya está.|Negar, concordar, avisar: ¡Qué va! (que nada) · ¡Ya! / ¡Claro! / ¡Obvio! · ¡Ojo! (cuidado, atenção).',
  ex: '¡Qué rabia! Perdí el último bus.=Que raiva! Perdi o último ônibus.|¡Ni modo! Mañana lo intentamos otra vez.=Fazer o quê! Amanhã tentamos de novo.|¡Ojo con la mochila en el metro!=Cuidado com a mochila no metrô!|¡Qué bárbaro, qué lindo departamento!=Que incrível, que apartamento lindo!',
  bd: ['¡Menos_mal=C^alívio: ainda bem|que_llegaste!=V', 'Ainda bem que você chegou!'],
  rule: 'reacciones',
  hw: 'Escreva dez situações curtas (uma boa notícia, um susto, um azar…) e reaja a cada uma com uma reação diferente desta lição.',
  deep: `
Hoje você aprende a **reagir** como um nativo: as palavrinhas que mostram que você está ouvindo e sentindo.
# Passo 1: surpresa
@ P:Surpresa;Neutra=¿En serio?;Forte=¡No me digas!;Espanha=¡Anda!;Argentina=¡Qué bárbaro!
~ ¿En serio? ¡No me digas! = Sério? Não me diga!
~ ¡Qué bárbaro, qué lindo departamento! = Que incrível, que apartamento lindo!
# Passo 2: as emoções com qué
| Em espanhol | Em português |
| ¡Qué suerte! | Que sorte! |
| ¡Qué rabia! | Que raiva! |
| ¡Qué asco! | Que nojo! |
~ ¡Qué rabia! Perdí el último bus. = Que raiva! Perdi o último ônibus.
# Passo 3: alívio e resignação
@ V:Alívio ou resignação?;Alívio|¡Menos mal!;Resignação|¡Ni modo! / ¡Qué le vamos a hacer!
~ ¡Menos mal que llegaste! = Ainda bem que você chegou!
~ ¡Ni modo! Mañana lo intentamos otra vez. = Fazer o quê! Amanhã tentamos de novo.
BR **¡Ni modo!** é muito mexicano: é o nosso "fazer o quê?", "paciência!".
# Passo 4: negar e avisar
| Em espanhol | Em português |
| ¡Qué va! | Que nada! |
| ¡Ojo! | Cuidado! / Atenção! |
| ¡Ya! | Pois é! / Já sei! |
~ ¿Cansada? ¡Qué va! Estoy perfecta. = Cansada? Que nada! Estou ótima.
~ ¡Ojo con la mochila en el metro! = Cuidado com a mochila no metrô!
! **Bárbaro** na Argentina é elogio ("incrível, ótimo"); em outros contextos, "bárbaro" pode ser "selvagem". Pelo contexto, você percebe.
> Treine agora: um amigo conta que ganhou na loteria e depois perdeu o bilhete. Reaja duas vezes.
? "Ainda bem!": || ¡Menos mal!
? "Que nada!": || ¡Qué va!
? "Fazer o quê!" (México): || ¡Ni modo!
`,
});

NL('es-sinalefa', {
  de: 'La sinalefa', pt: 'O ritmo: ligação entre palavras e entonação', gt: 'sinalefa (vogal + vogal), enlace (consoante + vogal), ritmo silábico, entonação de pergunta e de afirmação',
  gx: 'O espanhol falado liga as palavras: quando uma termina em vogal e a próxima começa com vogal, elas se juntam numa sílaba (sinalefa): ¿Qué hora es? soa ¿qué-o-ra-es? / quéo-raes. Consoante final se liga à vogal seguinte (enlace): los amigos soa lo-sa-mi-gos. O ritmo é regular, sílaba por sílaba, e a entonação sobe nas perguntas de sim ou não e desce nas afirmações.',
  ge: '¿Qué hora es?=Que horas são?|Los amigos de Ana están aquí.=Os amigos da Ana estão aqui.|¿Vienes a la fiesta?=Você vem à festa?',
  v: 'sinalefa=sinalefa (junção de vogais)=🔗|enlace=ligação=🧷|sílaba=sílaba=🔤|ritmo=ritmo=🥁|entonación=entonação=🎵|subir=subir=⬆️|bajar=descer=⬇️|pregunta=pergunta=❓|afirmación=afirmação=❗|pronunciación=pronúncia=🗣️',
  x: 'vocal=vogal|consonante=consoante|acento=acento|tónica=tônica|átona=átona|unir=unir|separar=separar|fluidez=fluência|velocidad=velocidade|claridad=clareza',
  dlg: 'Cuando hablan rápido, no entiendo nada.=Quando falam rápido, não entendo nada.|Es por la sinalefa: unen las palabras. "Mi amigo es alto" suena "miamigoesalto".=É por causa da sinalefa: juntam as palavras. "Mi amigo es alto" soa "miamigoesalto".|¿Y cómo practico?=E como eu pratico?|Lee en voz alta frases cortas, uniendo las vocales.=Leia em voz alta frases curtas, juntando as vogais.',
  cz: '"Mi amigo" se pronuncia ___. (junto)=miamigo=mi-amigo separado=mi hamigo|"Los amigos" se pronuncia ___.=lo-sa-mi-gos=los-a-mi-gos=lo-ami-gos|En "¿Vienes a la fiesta?", la entonación ___ al final.=sube=baja=no cambia',
  whys: 'sinalefa: vogal + vogal se juntam|enlace: a consoante vai para a vogal seguinte|pergunta de sim ou não: sobe',
  pts: 'Sinalefa: vogal final + vogal inicial = uma sílaba: mi‿amigo, qué‿hora‿es, va‿a‿ir (o h não soa).|Enlace: consoante final + vogal inicial: los‿amigos → lo-sa-mi-gos; el‿agua → e-la-gua.|Ritmo: cada sílaba tem mais ou menos o mesmo tempo; as vogais átonas não somem como no português do Brasil (pe-li-cu-la, não "pelcula").|Entonação: sobe no fim das perguntas de sim ou não (¿Vienes?↑); desce nas afirmações e nas perguntas com qué, dónde, cuándo (¿Dónde vives?↓).',
  ex: 'Va a ir a Ecuador.=Vai a Ecuador. (va‿a‿ir‿a‿E-cua-dor)|Mi amigo es alto.=O meu amigo é alto.|¿Dónde vives?=Onde você mora?|El agua está fría.=A água está fria.',
  bd: ['Los_amigos=S^enlace: lo-sa-mi-gos|de_Ana=C^sinalefa: dea-na|están_aquí.=V^enlace: es-ta-na-quí', 'Os amigos da Ana estão aqui.'],
  rule: 'sinalefa',
  hw: 'Escolha dez frases deste módulo, marque com ‿ onde há sinalefa ou enlace e leia em voz alta cinco vezes cada, cada vez mais rápido.',
  deep: `
Hoje você aprende o **ritmo** do espanhol falado: por que os nativos parecem falar "tudo junto" e como fazer igual.
# Passo 1: a sinalefa
@ E:Sinalefa;mi‿amigo^s|qué‿hora‿es^w|va‿a‿ir^v
~ ¿Qué hora es? = Que horas são?
~ Mi amigo es alto. = O meu amigo é alto.
BR O **h** não soa: "qué **h**ora" se junta como se fosse "qué-ora". Por isso **¿Qué hora es?** vira quase uma palavra só.
# Passo 2: o enlace
| Escrito | Soa |
| los amigos | lo-sa-mi-gos |
| el agua | e-la-gua |
| están aquí | es-ta-na-quí |
~ Los amigos de Ana están aquí. = Os amigos da Ana estão aqui.
~ El agua está fría. = A água está fria.
# Passo 3: o ritmo
@ V:Vogais átonas;Português do Brasil (some)|"pelcula", "telfone";Espanhol (soa inteira)|pe-lí-cu-la, te-lé-fo-no
~ Va a ir a Ecuador. = Vai a Ecuador.
# Passo 4: a entonação
| Tipo de frase | Fim da frase |
| pergunta de sim ou não | sobe ↑ |
| pergunta com qué, dónde, cuándo | desce ↓ |
| afirmação | desce ↓ |
~ ¿Vienes a la fiesta? = Você vem à festa?
~ ¿Dónde vives? = Onde você mora?
! Ligar as palavras não é "comer" vogais: cada vogal continua clara, só que sem pausa entre as palavras.
> Treine agora: leia em voz alta "¿Qué hora es? Mi amigo está en el aeropuerto", ligando tudo.
? "mi amigo" soa: || miamigo, numa sílaba só no encontro das vogais
? "los amigos" soa: || lo-sa-mi-gos
? Pergunta de sim ou não: a entonação …? || sobe no fim
`,
});

NL('es-acentos', {
  de: 'Los acentos del español', pt: 'Os sotaques do espanhol', gt: 'México, Caribe, Rio da Prata, Andes, Espanha: s aspirado, yeísmo rehilado (sh), distinção z/s, j forte, voseo',
  gx: 'O espanhol tem muitos sotaques, todos corretos. Alguns traços para reconhecer: no Caribe e em partes da Espanha, o s final vira um sopro (lo(h) amigo(h)); no Rio da Prata, ll e y soam como sh ou j francês (sho me shamo); no centro e norte da Espanha, z e ce/ci soam como o th do inglês (distinção); o México tem s clara e entonação cantada; os Andes, vogais claras e r bem marcado.',
  ge: 'En Buenos Aires dicen "sho me shamo Lucía".=Em Buenos Aires dizem "sho me shamo Lucía".|En Madrid, "zapato" suena con zeta, como el th inglés.=Em Madri, "zapato" soa com zeta, como o th do inglês.|En el Caribe, la ese final casi no se oye.=No Caribe, o s final quase não se ouve.',
  v: 'acento=sotaque=🗣️|seseo=seseo (z = s)=🌎|distinción=distinção (z = th)=🇪🇸|yeísmo=ll = y=🔤|rehilado=sh / zh (Rio da Prata)=🧉|aspirar=aspirar=💨|caribeño=caribenho=🏝️|rioplatense=platino, do Rio da Prata=🇦🇷|andino=andino=🏔️|neutro=neutro=⚖️',
  x: 'México=México|Colombia=Colômbia|Argentina=Argentina|Uruguay=Uruguai|Cuba=Cuba|Puerto Rico=Porto Rico|Perú=Peru|Bolivia=Bolívia|España=Espanha|Andalucía=Andaluzia',
  dlg: '¿De dónde es Marta? Habla con un acento muy bonito.=De onde a Marta é? Ela fala com um sotaque muito bonito.|Es uruguaya. Por eso dice "sho" en lugar de "yo".=É uruguaia. Por isso diz "sho" no lugar de "yo".|¿Y Pablo?=E o Pablo?|Es de Sevilla. Se come las eses al final: "lo(h) do(h)".=É de Sevilha. Engole os esses no final: "lo(h) do(h)".',
  cz: 'En Buenos Aires, "yo" suena como ___.=sho=yo=io|En Madrid, "zapato" se pronuncia con ___. (th inglês)=zeta=ese=jota|En América Latina se dice "zapato" con ___. (seseo)=ese=zeta=che',
  whys: 'Rio da Prata: ll e y soam sh|Espanha centro-norte: distinção|América Latina: seseo',
  pts: 'Seseo × distinção: na América Latina, Canárias e Andaluzia, z / ce / ci soam como s (seseo). No centro e norte da Espanha, como o th do inglês (distinção): zapato, cielo.|Yeísmo: quase todos pronunciam ll e y igual (calle = caye). No Rio da Prata, soam como sh ou zh: sho, cashe.|S aspirado: no Caribe, na Andaluzia e em partes da costa, o s no fim da sílaba vira um sopro ou some: lo(h) amigo(h).|Outros: México (s clara, entonação cantada), Andes (vogais claras, r forte), Espanha (j muito forte, na garganta).',
  ex: 'En Lima se habla bastante despacio y claro.=Em Lima se fala bem devagar e claro.|El acento mexicano tiene una entonación cantada.=O sotaque mexicano tem uma entonação cantada.|Todos los acentos son correctos.=Todos os sotaques são corretos.|Elige un acento como modelo y entiende los demás.=Escolha um sotaque como modelo e entenda os outros.',
  bd: ['En_el_Caribe,=L|la_ese_final=S^o s no fim da sílaba|casi_no_se_oye.=V^aspirado ou mudo', 'No Caribe, o s final quase não se ouve.'],
  rule: 'acentos',
  hw: 'Ouça três vídeos curtos de pessoas de países diferentes (México, Argentina, Espanha) e anote em espanhol dois traços de pronúncia de cada um.',
  deep: `
Hoje você conhece os **sotaques** do espanhol. Não para imitar todos, mas para entender todos.
# Passo 1: seseo e distinção
@ V:Z e ce / ci;América Latina (seseo)|zapato = "sapato";Espanha centro-norte (distinção)|zapato = "thapato"
~ En Madrid, "zapato" suena con zeta, como el th inglés. = Em Madri, "zapato" soa com zeta, como o th do inglês.
BR O **seseo** latino-americano é o que você aprendeu neste curso: z, ce, ci e s soam igual, como o nosso s.
# Passo 2: o Rio da Prata
| Escrito | Soa em Buenos Aires |
| yo | sho |
| me llamo | me shamo |
| calle | cashe |
~ En Buenos Aires dicen "sho me shamo Lucía". = Em Buenos Aires dizem "sho me shamo Lucía".
# Passo 3: o Caribe e o sul da Espanha
@ P:S aspirado;Escrito=los amigos;Soa=lo(h) amigo(h);Onde=Caribe, Andaluzia, partes da costa
~ En el Caribe, la ese final casi no se oye. = No Caribe, o s final quase não se ouve.
# Passo 4: México, Andes e a atitude certa
| Região | Traço |
| México | s clara, entonação cantada |
| Andes (Peru, Bolívia) | fala clara e pausada, r forte |
| Espanha | j forte, distinção z/s |
~ El acento mexicano tiene una entonação cantada. = O sotaque mexicano tem uma entonação cantada.
~ Todos los acentos son correctos. = Todos os sotaques são corretos.
! Não existe sotaque "certo": escolha um como modelo (aqui, o latino-americano neutro) e treine o ouvido com os outros.
> Treine agora: diga "Yo me llamo … y vivo en la calle …" com o sotaque de Buenos Aires.
? Como soa "yo" em Buenos Aires? || sho
? Como se chama "z" = "s"? || seseo
? Onde o s final quase some? || no Caribe e na Andaluzia
`,
});

NL('es-coloquial', {
  de: '¿Qué onda?', pt: 'Gírias e coloquialismos por país', gt: 'chévere, chido, bacán, guay, copado · plata, lana, pasta · ¿qué onda?, ¿qué más?, ¿qué hubo?',
  gx: 'Cada país tem as suas gírias. Para "legal": chévere (Colômbia, Venezuela, Caribe), chido (México), bacán (Chile, Peru), guay (Espanha), copado (Argentina). Para "dinheiro": plata (América do Sul), lana (México), pasta (Espanha). Para cumprimentar: ¿Qué onda? (México, Argentina), ¿Qué más? (Colômbia), ¿Qué hubo? / ¿Quiubo? (México, Colômbia), ¿Qué tal? (em toda parte).',
  ge: '¡Qué chévere tu casa!=Que legal a sua casa!|No tengo plata para el viaje.=Não tenho grana para a viagem.|¿Qué onda, güey? ¿Todo bien?=E aí, mano? Tudo bem?',
  v: 'chévere=legal (Colômbia, Venezuela)=🇨🇴|chido=legal (México)=🇲🇽|bacán=legal (Chile, Peru)=🇨🇱|guay=legal (Espanha)=🇪🇸|copado=legal (Argentina)=🇦🇷|plata=grana (América do Sul)=💰|lana=grana (México)=💵|qué onda=e aí=👋|qué más=e aí (Colômbia)=🙌|güey=mano (México)=🤙',
  x: 'pana=amigo (Venezuela, Equador)|parcero=amigo (Colômbia)|cuate=amigo (México)|tío=cara (Espanha)|che=ei (Argentina)|pibe=garoto (Argentina)|chamba=trabalho (México, Peru)|curro=trabalho (Espanha)|carro=carro (América)|coche=carro (Espanha)',
  dlg: '¿Qué más, parcero? ¿Cómo va la chamba?=E aí, parceiro? Como vai o trabalho?|Bien, aunque con poca plata. ¿Y tú?=Bem, mas com pouca grana. E você?|Chévere. Oye, ¿vamos el sábado a la playa?=Legal. Ei, vamos sábado à praia?|¡De una!=Bora!',
  cz: '¡Qué ___ tu casa! (legal, Colômbia)=chévere=chido=guay|En México, el dinero es la ___.=lana=plata=pasta|¿Qué ___? (e aí, México)=onda=más=tal de',
  whys: 'legal na Colômbia: chévere|grana no México: lana|cumprimento mexicano: ¿qué onda?',
  pts: '"Legal": chévere (Colômbia, Venezuela, Caribe), chido / padre (México), bacán (Chile, Peru), guay (Espanha), copado / genial (Argentina).|"Grana": plata (América do Sul), lana (México), pasta (Espanha). "Trabalho": chamba (México, Peru), laburo (Argentina), curro (Espanha).|"Amigo": parcero (Colômbia), cuate / güey (México), pana (Venezuela), che / boludo (Argentina, só entre amigos), tío (Espanha).|Cumprimentos: ¿Qué onda? ¿Qué más? ¿Qué hubo? ¿Qué tal? Aceitar: ¡De una! (Colômbia), ¡Dale! (Argentina), ¡Órale! (México), ¡Vale! (Espanha).',
  ex: 'Esa película está muy chida.=Esse filme é muito legal.|Mañana empiezo en el laburo nuevo.=Amanhã começo no trampo novo.|¡Qué guay! ¿Cuándo nos vemos?=Que legal! Quando a gente se vê?|¡Órale, vamos!=Beleza, vamos!',
  bd: ['¡Qué_chévere=C^gíria colombiana: legal|tu_casa!=S', 'Que legal a sua casa!'],
  rule: 'coloquial',
  hw: 'Escolha um país e escreva um diálogo curto (oito falas) entre dois amigos de lá, usando as gírias locais desta lição.',
  deep: `
Hoje você conhece as **gírias** mais comuns de cada país. Use com amigos e entenda em filmes e séries.
# Passo 1: "legal"
@ M:Legal;País|Gíria;Colômbia, Venezuela|chévere;México|chido, padre;Chile, Peru|bacán;Espanha|guay;Argentina|copado
~ ¡Qué chévere tu casa! = Que legal a sua casa!
~ Esa película está muy chida. = Esse filme é muito legal.
# Passo 2: dinheiro e trabalho
| País | Grana | Trabalho |
| América do Sul | plata | chamba, laburo |
| México | lana | chamba |
| Espanha | pasta | curro |
~ No tengo plata para el viaje. = Não tenho grana para a viagem.
~ Mañana empiezo en el laburo nuevo. = Amanhã começo no trampo novo.
# Passo 3: cumprimentar e aceitar
@ P:Cumprimentar;México=¿Qué onda?;Colômbia=¿Qué más?;Em toda parte=¿Qué tal?
~ ¿Qué onda, güey? ¿Todo bien? = E aí, mano? Tudo bem?
~ ¡Órale, vamos! = Beleza, vamos!
BR **¡De una!** (Colômbia) é o nosso "bora!", "fechou!". **¡Dale!** (Argentina) e **¡Órale!** (México) fazem o mesmo papel.
# Passo 4: cuidado com o contexto
| Palavra | Atenção |
| güey, boludo | só entre amigos íntimos |
| coger | na Espanha = pegar; em vários países da América é vulgar |
| plata | grana, e também prata |
~ ¡Qué guay! ¿Cuándo nos vemos? = Que legal! Quando a gente se vê?
! Na América Latina, use **tomar** ou **agarrar** o ônibus, não "coger": em vários países, **coger** tem sentido vulgar.
> Treine agora: cumprimente um amigo mexicano e um colombiano com as gírias deles.
? "Legal" na Colômbia: || chévere
? "Grana" no México: || lana
? "E aí?" no México: || ¿Qué onda?
`,
});

NL('es-podcast', {
  de: 'Una entrevista informal', pt: 'Ler uma entrevista falada e escrever um diálogo natural', gt: 'marcadores, reações e coloquialismos numa conversa transcrita',
  gx: 'A transcrição de um podcast ou de uma entrevista informal mostra o espanhol como ele é falado: marcadores (bueno, o sea, es que), hesitações (este…), reações (¡no me digas!, ¡qué bárbaro!) e gírias regionais. Nesta lição você lê uma e escreve um diálogo natural.',
  ge: 'Bueno, pues contanos cómo empezó todo.=Bom, então conta para a gente como tudo começou.|O sea, que lo dejaste todo para viajar.=Ou seja, você largou tudo para viajar.|¡Qué bárbaro! ¿Y no te dio miedo?=Que incrível! E não te deu medo?',
  v: 'podcast=podcast=🎙️|transcripción=transcrição=📝|entrevistador=entrevistador=🎤|invitado=convidado=👤|contar=contar=🗣️|dejarlo todo=largar tudo=🎒|mochilero=mochileiro=🧳|dar miedo=dar medo=😨|animarse=se animar=💪|recomendar=recomendar=👍',
  x: 'viaje=viagem|ahorros=economias|ruta=rota|frontera=fronteira|hostal=hostel|autostop=carona|aventura=aventura|consejo=conselho|seguidores=seguidores|episodio=episódio',
  dlg: 'Bienvenida al podcast. ¿Cómo estás?=Bem-vinda ao podcast. Como você está?|Muy bien, che, gracias por invitarme.=Muito bem, viu, obrigada por me convidar.|Bueno, contanos: ¿cómo empezó el viaje?=Bom, conta para a gente: como começou a viagem?|Y… este… es que estaba harta de la oficina, ¿viste?=E… é… é que eu estava cansada do escritório, sabe?',
  cz: 'Bueno, ___ contanos cómo empezó. (então)=pues=bien=después|O ___, que lo dejaste todo. (ou seja)=sea=sí=seja|¡Qué ___! ¿Y no te dio miedo? (que incrível, Argentina)=bárbaro=bárbara de=bravo',
  whys: 'pues: então|o sea: ou seja|qué bárbaro (Argentina)',
  pts: 'Uma conversa natural tem: marcadores para começar e organizar (bueno, pues, a ver), para explicar (o sea, es que) e para ganhar tempo (este…, eh…).|Reações de quem ouve: ¿En serio? ¡No me digas! ¡Qué bárbaro! ¡Menos mal!|Coloquialismos regionais: ¿viste?, che (Argentina); chévere, de una (Colômbia); ¿qué onda? (México).|Para escrever um diálogo natural: frases curtas, reações, perguntas de confirmação (¿no?, ¿viste?) e algum marcador em cada fala.',
  ex: 'Y… este… es que estaba harta de la oficina.=E… é… é que eu estava cansada do escritório.|Total, que vendí todo y me fui.=Resumindo, vendi tudo e fui embora.|¿En serio? ¡No me digas!=Sério? Não me diga!|Mirá, te lo recomiendo a todo el mundo.=Olha, recomendo para todo mundo.',
  bd: ['O_sea,=C^marcador: ou seja|que_lo_dejaste_todo=V^dejarlo todo: largar tudo|para_viajar.=C', 'Ou seja, você largou tudo para viajar.'],
  rule: 'podcast',
  le: {
    texto: {
      t: 'Podcast «Mochila al hombro» · Episodio 12', kind: 'transcrição de podcast', voz: 'a',
      intro: 'Trecho de um podcast argentino de viagens. A convidada, Valeria, conta a sua aventura. Leia e responda.',
      paras: ['ENTREVISTADOR: Bueno, bienvenida, Valeria. Contanos, ¿cómo empezó todo?', 'VALERIA: Y… este… es que yo trabajaba en un banco y estaba harta, ¿viste? Un día me dije: o lo hago ahora, o no lo hago nunca.', 'ENTREVISTADOR: O sea, que lo dejaste todo. ¡Qué bárbaro! ¿Y no te dio miedo?', 'VALERIA: ¡Un montón! Pero, bueno, vendí el auto, junté mis ahorros y me fui a Bolivia en bus. Total, que estuve un año viajando por diez países.', 'ENTREVISTADOR: ¿Y qué le dirías a alguien que quiere hacer lo mismo? · VALERIA: Mirá, que se anime. Lo peor es quedarse con las ganas.'],
      qs: [
        { q: 'O que a Valeria fazia antes de viajar?', o: ['trabalhava num banco', 'era professora', 'estudava turismo'], a: 0 },
        { q: 'Como ela financiou a viagem?', o: ['vendeu o carro e juntou as economias', 'ganhou um prêmio', 'trabalhou durante a viagem'], a: 0 },
        { q: 'Quanto tempo durou a viagem?', o: ['um ano, por dez países', 'seis meses', 'duas semanas'], a: 0 },
        { q: 'Que conselho ela dá?', o: ['que a pessoa se anime: o pior é ficar com vontade', 'que economize por anos antes', 'que viaje só de avião'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva um diálogo natural', tipo: 'form', ok: 'Diálogo escrito corretamente.',
      pede: 'Escreva um diálogo entre você e um amigo que acabou de voltar de uma viagem. Uma fala por linha.',
      campos: [
        { l: 'Cumprimento', d: '¿Qué tal? / ¿Qué onda? / ¿Qué más?', re: '(qué tal|qué onda|qué más|qué hubo|quiubo|hola|cómo estás|cómo te fue)', f: 'iu', err: 'Comece cumprimentando: ¡Hola! ¿Qué tal el viaje?' },
        { l: 'Um marcador para começar', d: 'Bueno, … / Pues … / A ver …', re: '(^|\\s|¡|¿)(bueno|pues|a ver|mira|mirá|oye)(?!\\p{L})', f: 'iu', err: 'Use um marcador: Bueno, pues …' },
        { l: 'Uma explicação', d: '… es que … / o sea …', re: '(es que|o sea|digamos|total, que|total que)', f: 'iu', err: 'Explique ou justifique: Es que … / O sea, …' },
        { l: 'Uma reação', d: '¿En serio? / ¡No me digas! / ¡Qué …!', re: '(en serio|no me digas|qué bárbaro|qué suerte|qué bien|menos mal|qué rabia|ni modo|no puede ser|qué va|vaya|anda)', f: 'iu', err: 'Reaja: ¿En serio? ¡No me digas!' },
        { l: 'Uma gíria ou expressão', d: 'chévere, chido, bacán, plata, de una …', re: '(chévere|chido|chida|bacán|guay|copado|plata|lana|pasta|de una|dale|órale|vale|che|parcero|pan comido|un ojo de la cara)', f: 'iu', err: 'Use uma gíria ou expressão: ¡Qué chévere! / ¡De una!' },
        { l: 'Pedido de confirmação', d: '… ¿no? / ¿viste? / ¿verdad?', re: '(¿no\\?|¿verdad\\?|¿viste\\?|¿sabes\\?|¿vale\\?)', f: 'iu', err: 'Peça confirmação no fim: …, ¿no?' },
      ],
      modelo: '¡Hola, Mateo! ¿Qué tal el viaje? · Bueno, pues fue increíble. · Es que nunca había visto montañas tan altas. · ¡No me digas! ¿Y fue caro? · Un poco, pero valió la pena. ¡Qué chévere! · La próxima vez vamos juntos, ¿no?',
    },
  },
  hw: 'Escreva a transcrição de uma conversa de dois minutos (doze a quinze falas) entre você e um amigo latino-americano, com marcadores, reações, duas gírias do país dele e pedidos de confirmação.',
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo. Você vai ler a transcrição de um podcast argentino e escrever um diálogo natural.
# Passo 1: a conversa real
@ P:Uma conversa natural;Começar=Bueno, contanos …;Explicar=Es que … / O sea, …;Reagir=¡Qué bárbaro! ¿En serio?;Resumir=Total, que …;Confirmar=…, ¿viste?
~ Bueno, pues contanos cómo empezó todo. = Bom, então conta para a gente como tudo começou.
~ O sea, que lo dejaste todo para viajar. = Ou seja, você largou tudo para viajar.
# Passo 2: as marcas do Rio da Prata
| Na transcrição | O que é |
| contanos, mirá | imperativo com vos |
| ¿viste? | "sabe?", pedido de confirmação |
| che | "ei", "viu" |
~ ¡Qué bárbaro! ¿Y no te dio miedo? = Que incrível! E não te deu medo?
~ Mirá, te lo recomiendo a todo el mundo. = Olha, recomendo para todo mundo.
BR No Rio da Prata, o imperativo com **vos** tem acento no fim: **contá**, **mirá**, **vení**. Com pronome: **contanos**, **decime**.
# Passo 3: as hesitações
~ Y… este… es que estaba harta de la oficina. = E… é… é que eu estava cansada do escritório.
~ Total, que vendí todo y me fui. = Resumindo, vendi tudo e fui embora.
# Passo 4: escrever um diálogo natural
| Dica | Exemplo |
| falas curtas | ¿En serio? |
| um marcador por fala | Bueno, pues … |
| confirmação no fim | …, ¿no? |
~ ¿En serio? ¡No me digas! = Sério? Não me diga!
! Na escrita formal, quase não se usam marcadores orais. Num diálogo, num chat ou num roteiro, eles são o que dá vida ao texto.
> Agora leia o podcast e escreva o seu diálogo.
? "Ou seja, você largou tudo": || O sea, que lo dejaste todo.
? "Resumindo, …": || Total, que …
? "Sabe?" na Argentina: || ¿viste?
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('Bueno, pues …',
  'P:Começar;Neutro=Bueno, …;Atenção=Mira, … / Oye, …;Organizar=A ver, …;Então=Pues …',
  'M:Ganhar tempo;Onde|Marcador;México, Argentina|este…;Espanha|pues…, en plan…;Em toda parte|eh…');
V('¡No me digas!',
  'P:Surpresa;Neutra=¿En serio?;Forte=¡No me digas!;Espanha=¡Anda!;Argentina=¡Qué bárbaro!',
  'V:Alívio ou resignação?;Alívio|¡Menos mal!;Resignação|¡Ni modo!');
V('La sinalefa',
  'E:Sinalefa;mi‿amigo^s|qué‿hora‿es^w|va‿a‿ir^v',
  'M:Entonação;Frase|Fim;sim ou não|sobe;com qué, dónde|desce;afirmação|desce');
V('Los acentos del español',
  'V:Z e ce / ci;América Latina|seseo: "sapato";Espanha centro-norte|distinção: "thapato"',
  'M:Traços;Região|Traço;Rio da Prata|yo = sho;Caribe|s final aspirado;México|entonação cantada');
V('¿Qué onda?',
  'M:Legal;País|Gíria;Colômbia|chévere;México|chido;Chile, Peru|bacán;Espanha|guay;Argentina|copado',
  'M:Grana;País|Gíria;América do Sul|plata;México|lana;Espanha|pasta');
V('Una entrevista informal',
  'P:Uma conversa natural;Começar=Bueno, …;Explicar=Es que … / O sea, …;Reagir=¡Qué bárbaro!;Confirmar=¿viste?',
  'M:Rio da Prata;Na fala|O que é;contanos, mirá|imperativo com vos;¿viste?|sabe?;che|ei, viu');
S_('Bueno, pues …', 'bueno=bom|pues nada=então tá|nos vemos mañana=a gente se vê amanhã|es que=é que|no tuve tiempo=não tive tempo|o sea=ou seja|que no vienes=que você não vem|oye=ei|vienes a la fiesta=você vem à festa|o no=ou não|este=é…|mañana=amanhã|trabajo temprano=trabalho cedo|a ver=vamos ver|digamos que=digamos que|voy un rato=vou um pouco|vale=tá bom|que=que|de=de|lo=o|sea=seja|seja=(erro) seja|sí=sim|bien=bem|bom=(erro) bom|mira=olha|te lo explico=eu te explico|otra vez=de novo|total que=resumindo|llegamos tarde=chegamos atrasados|en fin=enfim|ya veremos=vamos ver|es muy simpático=é muito simpático|no=não|pues=então|es decir=ou seja|quiero decir=quero dizer|cómo te digo=como te digo|verdad=verdade|sabes=sabe|viste=viu|en plan=tipo|eh=é|mira te lo explico=olha, eu te explico|por qué no viniste ayer=por que você não veio ontem|había tráfico=tinha trânsito|no lo sabía=eu não sabia|bueno pues nada=bom, então tá');
S_('¡No me digas!', 'en serio=sério|no me digas=não me diga|menos mal=ainda bem|que llegaste=que você chegou|cansada=cansada|qué va=que nada|estoy perfecta=estou ótima|perdí=perdi|el celular=o celular|en el taxi=no táxi|y lo encontraste=e você achou|sí=sim|el taxista=o taxista|me llamó=me ligou|qué suerte=que sorte|ojo=cuidado|la próxima vez=na próxima vez|más=mais|mejor=melhor|nada=nada|no=não|perdí el bus=perdi o ônibus|ni modo=fazer o quê|modos=modos|forma=forma|qué rabia=que raiva|el último bus=o último ônibus|mañana=amanhã|lo intentamos=tentamos|otra vez=de novo|con la mochila=com a mochila|en el metro=no metrô|qué bárbaro=que incrível|qué lindo=que lindo|departamento=apartamento|vaya=puxa|anda=nossa|no puede ser=não pode ser|qué bien=que bom|qué pena=que pena|qué horror=que horror|qué asco=que nojo|qué le vamos a hacer=fazer o quê|bueno=bom|ya está=pronto|ya=pois é|claro=claro|obvio=óbvio|ni idea=não faço ideia|bárbaro=incrível (Argentina)');
S_('La sinalefa', 'qué hora es=que horas são|los amigos=os amigos|de Ana=da Ana|están aquí=estão aqui|vienes a la fiesta=você vem à festa|cuando=quando|hablan rápido=falam rápido|no entiendo nada=não entendo nada|es por la sinalefa=é por causa da sinalefa|unen las palabras=juntam as palavras|mi amigo es alto=meu amigo é alto|suena=soa|miamigoesalto=miamigoesalto|y cómo practico=e como eu pratico|lee=leia|en voz alta=em voz alta|frases cortas=frases curtas|uniendo las vocales=juntando as vogais|se pronuncia=se pronuncia|miamigo=miamigo|mi-amigo separado=mi-amigo separado|mi hamigo=(erro) mi hamigo|lo-sa-mi-gos=lo-sa-mi-gos|los-a-mi-gos=los-a-mi-gos|lo-ami-gos=lo-ami-gos|la entonación=a entonação|sube=sobe|baja=desce|no cambia=não muda|al final=no final|va a ir=vai|a Ecuador=ao Equador|mi amigo=meu amigo|dónde vives=onde você mora|el agua=a água|está fría=está fria|qué=que|hora=hora|es=é|va=vai|ir=ir|mi=meu|pe-lí-cu-la=pe-lí-cu-la|te-lé-fo-no=te-lé-fo-no|e-la-gua=e-la-gua|es-ta-na-quí=es-ta-na-quí|mi amigo está en el aeropuerto=meu amigo está no aeroporto|está en el aeropuerto=está no aeroporto');
S_('Los acentos del español', 'en Buenos Aires=em Buenos Aires|dicen=dizem|sho me shamo Lucía=sho me shamo Lucía|en Madrid=em Madri|zapato=sapato|suena con zeta=soa com zeta|como el th inglés=como o th do inglês|en el Caribe=no Caribe|la ese final=o s final|casi no se oye=quase não se ouve|de dónde es Marta=de onde a Marta é|habla con un acento=fala com um sotaque|muy bonito=muito bonito|es uruguaya=é uruguaia|por eso=por isso|dice=diz|en lugar de=no lugar de|y Pablo=e o Pablo|es de Sevilla=é de Sevilha|se come las eses=engole os esses|al final=no final|lo(h) do(h)=lo(h) do(h)|yo=eu|suena como=soa como|sho=sho|io=io|se pronuncia con=se pronuncia com|zeta=zeta|ese=esse|jota=jota|en América Latina=na América Latina|se dice=se diz|che=chê|en Lima=em Lima|se habla=se fala|bastante despacio=bem devagar|y claro=e claro|el acento mexicano=o sotaque mexicano|tiene una entonación cantada=tem uma entonação cantada|todos los acentos=todos os sotaques|son correctos=são corretos|elige=escolha|un acento=um sotaque|como modelo=como modelo|y entiende los demás=e entenda os outros|me llamo=me chamo|me shamo=me shamo|calle=rua|cashe=cashe|los amigos=os amigos|lo(h) amigo(h)=lo(h) amigo(h)|cielo=céu|caye=caye|y vivo en la calle=e moro na rua');
S_('¿Qué onda?', 'qué chévere=que legal|tu casa=sua casa|no tengo plata=não tenho grana|para el viaje=para a viagem|qué onda=e aí|güey=mano|todo bien=tudo bem|qué más=e aí|parcero=parceiro|cómo va=como vai|la chamba=o trabalho|bien=bem|aunque=embora|con poca plata=com pouca grana|y tú=e você|chévere=legal|oye=ei|vamos=vamos|el sábado=no sábado|a la playa=à praia|de una=bora|chido=legal|guay=legal|lana=grana|plata=grana|pasta=grana|más=mais|tal de=(erro) tal de|esa película=esse filme|está muy chida=é muito legal|mañana=amanhã|empiezo=começo|en el laburo nuevo=no trampo novo|qué guay=que legal|cuándo nos vemos=quando a gente se vê|órale=beleza|padre=legal (México)|bacán=legal|copado=legal|genial=genial|laburo=trabalho|curro=trabalho|cuate=amigo|pana=amigo|boludo=cara (Argentina, íntimo)|tío=cara|qué hubo=e aí|qué tal=tudo bem|dale=bora|vale=tá bom|coger=pegar (Espanha)|tomar=pegar|agarrar=pegar|el autobús=o ônibus|qué hubo quiubo=e aí|quiubo=e aí|chamba=trabalho');
S_('Una entrevista informal', 'bueno=bom|pues=então|contanos=conta para a gente|cómo empezó todo=como tudo começou|o sea=ou seja|que lo dejaste todo=que você largou tudo|para viajar=para viajar|qué bárbaro=que incrível|y no te dio miedo=e não te deu medo|bienvenida al podcast=bem-vinda ao podcast|cómo estás=como você está|muy bien=muito bem|che=viu|gracias por invitarme=obrigada por me convidar|cómo empezó el viaje=como começou a viagem|y=e|este=é…|es que=é que|estaba harta de=eu estava cansada de|la oficina=o escritório|viste=sabe|bien=bem|después=depois|sí=sim|seja=(erro) seja|bárbara de=(erro) bárbara de|bravo=bravo|total que=resumindo|vendí todo=vendi tudo|y me fui=e fui embora|en serio=sério|no me digas=não me diga|mirá=olha|te lo recomiendo=recomendo|a todo el mundo=para todo mundo|mochila al hombro=mochila nas costas|episodio=episódio|12=12|entrevistador=entrevistador|bienvenida=bem-vinda|Valeria=Valeria|yo trabajaba=eu trabalhava|en un banco=num banco|y estaba harta=e estava cansada|un día=um dia|me dije=eu me disse|o lo hago ahora=ou eu faço agora|o no lo hago nunca=ou não faço nunca|lo dejaste todo=você largou tudo|un montón=um monte|pero=mas|vendí el auto=vendi o carro|junté mis ahorros=juntei minhas economias|y me fui a Bolivia=e fui para a Bolívia|en bus=de ônibus|total=resumindo|que estuve un año=que fiquei um ano|viajando=viajando|por diez países=por dez países|y qué le dirías=e o que você diria|a alguien que quiere=a alguém que quer|hacer lo mismo=fazer o mesmo|que se anime=que se anime|lo peor es=o pior é|quedarse con las ganas=ficar com vontade|hola=olá|Mateo=Mateo|qué tal el viaje=como foi a viagem|fue increíble=foi incrível|nunca había visto=eu nunca tinha visto|montañas tan altas=montanhas tão altas|y fue caro=e foi caro|un poco=um pouco|valió la pena=valeu a pena|qué chévere=que legal|la próxima vez=na próxima vez|vamos juntos=vamos juntos|no=não|qué tal=tudo bem|qué onda=e aí|qué más=e aí|qué hubo=e aí|quiubo=e aí|cómo te fue=como foi|a ver=vamos ver|mira=olha|oye=ei|digamos=digamos|menos mal=ainda bem|qué rabia=que raiva|ni modo=fazer o quê|no puede ser=não pode ser|qué va=que nada|vaya=puxa|anda=nossa|chévere=legal|chido=legal|chida=legal|bacán=legal|guay=legal|copado=legal|plata=grana|lana=grana|pasta=grana|de una=bora|dale=bora|órale=beleza|vale=tá bom|parcero=parceiro|pan comido=moleza|un ojo de la cara=os olhos da cara|verdad=verdade|sabes=sabe|contá=conta|vení=vem|decime=me diz|qué suerte=que sorte|qué bien=que bom');
['ana', 'marta', 'pablo', 'lucía', 'sevilla', 'madrid', 'buenos', 'aires', 'lima', 'ecuador', 'valeria', 'mateo', 'bolivia'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'es-marcadores': {
    o: 'Os marcadores da fala: **bueno**, **pues**, **o sea**, **es que**, **a ver**, **mira**, **total, que**, **en fin**, e para hesitar **este…** (México, Argentina).',
    q: 'Em qualquer conversa informal.',
    p: '**Es que** é a desculpa universal.',
  },
  'es-reacciones': {
    o: 'Reações: **¿En serio?**, **¡No me digas!**, **¡Menos mal!**, **¡Qué rabia!**, **¡Qué va!**, **¡Ni modo!**, **¡Ojo!**, **¡Qué bárbaro!**',
    q: 'Para mostrar que você está ouvindo e sentindo.',
    p: '**¡Qué va!** é "que nada!".',
  },
  'es-sinalefa': {
    o: 'O ritmo: **sinalefa** (mi‿amigo), **enlace** (lo-sa-mi-gos), vogais átonas inteiras e a entonação que sobe nas perguntas de sim ou não.',
    q: 'Para entender falantes rápidos e soar fluente.',
    p: 'Ligar não é engolir vogais.',
  },
  'es-acentos': {
    o: 'Os sotaques: **seseo** × **distinção** (z/s), o **sh** do Rio da Prata, o **s aspirado** do Caribe, a entonação mexicana, a fala andina.',
    q: 'Para entender o espanhol de qualquer país.',
    p: 'Todos os sotaques são corretos.',
  },
  'es-coloquial': {
    o: 'Gírias por país: **chévere**, **chido**, **bacán**, **guay**, **copado**; **plata**, **lana**, **pasta**; **¿Qué onda?**, **¿Qué más?**, **¡De una!**, **¡Órale!**',
    q: 'Com amigos, em séries e nas redes.',
    p: 'Cuidado com palavras que mudam de sentido entre países.',
  },
  'es-podcast': {
    o: 'Uma conversa real transcrita, com marcadores, hesitações, reações e gírias, e um diálogo natural escrito por você.',
    q: 'Para entender podcasts e escrever diálogos e roteiros.',
    p: 'Junta todo o módulo numa conversa de verdade.',
  },
});
Object.assign(CZH, {
  'es-marcadores': ['é que', 'ou seja', 'bom'],
  'es-reacciones': ['ainda bem', 'que nada', 'fazer o quê'],
  'es-sinalefa': ['mi amigo', 'los amigos', 'pergunta de sim ou não'],
  'es-acentos': ['yo em Buenos Aires', 'z em Madri', 'z na América'],
  'es-coloquial': ['legal, Colômbia', 'grana, México', 'e aí, México'],
  'es-podcast': ['então', 'ou seja', 'que incrível'],
});
Object.assign(OBJ, {
  'es-marcadores': { o: 'Uso os marcadores da fala com naturalidade.', a: 'Você consegue contar o seu dia usando bueno, pues, o sea e es que?', ref: 'Interacción oral · B2' },
  'es-reacciones': { o: 'Reajo como um nativo.', a: 'Você consegue reagir a uma notícia boa e a uma ruim com expressões diferentes?', ref: 'Interacción oral · B2' },
  'es-sinalefa': { o: 'Ligo as palavras e uso a entonação certa.', a: 'Você consegue ler uma frase ligando as vogais entre as palavras?', ref: 'Pronunciación · B2' },
  'es-acentos': { o: 'Reconheço os principais sotaques do espanhol.', a: 'Você consegue reconhecer um argentino, um mexicano e um espanhol pela pronúncia?', ref: 'Comprensión auditiva · B2' },
  'es-coloquial': { o: 'Entendo e uso gírias de vários países.', a: 'Você sabe como se diz "legal" em três países?', ref: 'Léxico · B2' },
  'es-podcast': { o: 'Consigo ler uma conversa transcrita e escrever um diálogo natural.', a: 'Você consegue escrever um diálogo que soe como uma conversa de verdade?', ref: 'Expresión escrita · B2' },
});
MOD_OBJ[30] = ['Uso marcadores e reações da fala.', 'Ligo as palavras e uso a entonação certa.', 'Reconheço sotaques e gírias.', 'Consigo escrever um diálogo natural.'];

ES_MODS.push({ lv: 'B2', n: 'Soar natural', l: ['es-marcadores', 'es-reacciones', 'es-sinalefa', 'es-acentos', 'es-coloquial', 'es-podcast'] });
