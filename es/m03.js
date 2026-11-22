// Espanhol · A1 · Módulo 3 · Mi día (O meu dia). Formato de es/curso.js.

NL('es-hora', {
  de: '¿Qué hora es?', pt: 'As horas', gt: 'es la una · son las dos · y cuarto, y media, menos cuarto · a las …',
  gx: 'Para dizer as horas: es la una (é uma hora) e son las dos, son las tres… (são duas, são três). Os minutos vêm com y (e) ou menos: son las tres y cuarto (3h15), son las tres y media (3h30), son las cuatro menos cuarto (3h45). Para um compromisso: a las ocho (às oito).',
  ge: 'Son las tres y media.=São três e meia.|Es la una y cuarto.=É uma e quinze.|La clase es a las ocho de la mañana.=A aula é às oito da manhã.',
  v: 'hora=hora=⏰|qué hora es=que horas são=❓|es la una=é uma hora=🕐|son las dos=são duas horas=🕑|y cuarto=e quinze=🕒|y media=e meia=🕧|menos cuarto=quinze para=🕗|de la mañana=da manhã=🌅|de la tarde=da tarde=🌇|de la noche=da noite=🌙',
  x: 'mediodía=meio-dia|medianoche=meia-noite|en punto=em ponto|temprano=cedo|tarde=tarde|reloj=relógio|minutos=minutos|más o menos=mais ou menos|a qué hora=a que horas|clase=aula',
  dlg: 'Disculpa, ¿qué hora es?=Desculpa, que horas são?|Son las cuatro menos cuarto.=São quinze para as quatro.|¡Uy, es tarde! Mi clase es a las cuatro.=Nossa, está tarde! A minha aula é às quatro.|Entonces corre. ¡Suerte!=Então corre. Boa sorte!',
  cz: 'Son las tres y ___. (3h30)=media=medio=mitad|___ la una y cuarto. (1h15)=Es=Son=Está|La clase es ___ las ocho. (às)=a=en=de',
  whys: 'meia hora: y media|uma hora está no singular: es la una|horário de algo: a las',
  pts: 'es la una (singular, só para 1h); son las dos, son las tres… (plural, para as outras horas). Sempre com o artigo la / las.|Minutos depois da hora: y + minutos (y cinco, y cuarto, y media). Antes da próxima hora: menos (son las cuatro menos diez = 3h50).|Para um compromisso: a la una, a las ocho. Para o período do dia: de la mañana, de la tarde, de la noche.|Na América Latina também é comum dizer os minutos direto: son las tres y cuarenta. E 12h é el mediodía; 0h, la medianoche.',
  ex: 'Son las doce en punto.=É meio-dia em ponto.|¿A qué hora empieza la película?=A que horas começa o filme?|Son las nueve menos diez.=São dez para as nove.|Llego a casa a las siete de la tarde.=Chego em casa às sete da noite.',
  bd: ['Son=V^plural: as horas (menos a una)|las_tres=C^com artigo|y_media.=C^e meia', 'São três e meia.'],
  rule: 'hora',
  hw: 'Escreva os horários de cinco coisas do seu dia: Me levanto a las … La clase es a las … Termino el trabajo a las …',
  deep: `
Hoje você aprende a dizer as horas e a marcar um horário. A lógica é parecida com o português, com duas diferenças: o artigo **la / las** e o **menos**.
# Passo 1: es la una, son las dos
@ V:Singular ou plural?;es la una|só para 1h: Es la una.;son las …|para as outras: Son las dos, son las tres.
~ Es la una y cuarto. = É uma e quinze.
~ Son las doce en punto. = É meio-dia em ponto.
BR Em espanhol, a hora sempre leva **la / las**: son **las** tres (e não "son tres").
# Passo 2: os minutos
| Relógio | Em espanhol |
| 3h05 | las tres y cinco |
| 3h15 | las tres y cuarto |
| 3h30 | las tres y media |
| 3h45 | las cuatro menos cuarto |
| 3h50 | las cuatro menos diez |
~ Son las tres y media. = São três e meia.
~ Son las nueve menos diez. = São dez para as nove.
# Passo 3: a que horas?
| Pergunta | Resposta |
| ¿Qué hora es? | Son las ocho. |
| ¿A qué hora es la clase? | A las ocho. |
~ La clase es a las ocho de la mañana. = A aula é às oito da manhã.
~ ¿A qué hora empieza la película? = A que horas começa o filme?
# Passo 4: ojo, brasileño: de la tarde, de la noche
| Período | Em espanhol |
| 7h | las siete de la mañana |
| 15h | las tres de la tarde |
| 19h | las siete de la tarde (ou de la noche) |
| 22h | las diez de la noche |
~ Llego a casa a las siete de la tarde. = Chego em casa às sete da noite.
~ Son las diez de la noche. = São dez da noite.
! Em muitos países latino-americanos, **la tarde** vai até escurecer, por volta das 19h ou 20h. Depois disso é **la noche**.
> Treine agora: diga que horas são agora e a que horas você almoça.
? Como se diz "é uma hora"? || Es la una.
? Como se diz 3h45? || Son las cuatro menos cuarto.
? Como se diz "às oito"? || a las ocho
`,
});

NL('es-rutina', {
  de: 'Mi rutina', pt: 'A rotina diária', gt: 'verbos reflexivos: me levanto, te duchas, se acuesta',
  gx: 'Muitos verbos da rotina são reflexivos: a ação volta para quem faz. Eles vêm com me, te, se, nos, se antes do verbo: me levanto (eu me levanto), me ducho (eu tomo banho), me acuesto (eu me deito). No infinitivo, o se vai no fim: levantarse, ducharse.',
  ge: 'Me levanto a las seis y media.=Eu me levanto às seis e meia.|Después me ducho y desayuno.=Depois tomo banho e tomo café da manhã.|Los domingos me acuesto tarde.=Aos domingos eu me deito tarde.',
  v: 'levantarse=levantar-se=🛏️|ducharse=tomar banho=🚿|vestirse=vestir-se=👕|desayunar=tomar café da manhã=🥐|almorzar=almoçar=🍽️|cenar=jantar=🍝|acostarse=deitar-se=😴|despertarse=acordar=⏰|lavarse los dientes=escovar os dentes=🪥|salir=sair=🚪',
  x: 'primero=primeiro|después=depois|luego=depois, em seguida|por la mañana=de manhã|por la tarde=à tarde|por la noche=à noite|temprano=cedo|tarde=tarde|todos los días=todos os dias|los domingos=aos domingos',
  dlg: '¿A qué hora te levantas?=A que horas você se levanta?|Me levanto a las seis, pero me despierto a las cinco y media.=Eu me levanto às seis, mas acordo às cinco e meia.|¡Qué temprano! Yo me levanto a las ocho.=Que cedo! Eu me levanto às oito.|¡Qué suerte!=Que sorte!',
  cz: 'Yo ___ levanto a las seis.=me=se=te|¿A qué hora te ___? (acostarse)=acuestas=acostas=acuesta|Ella ___ ducha por la mañana.=se=me=te',
  whys: 'com yo: me|o → ue: acuestas|com ella: se',
  pts: 'Verbos reflexivos levam um pronome que combina com o sujeito: (yo) me levanto, (tú) te levantas, (él / ella / usted) se levanta, (nosotros) nos levantamos, (ellos / ustedes) se levantan.|O pronome vem antes do verbo conjugado: me ducho. No infinitivo, vai colado no fim: Quiero ducharme.|Alguns também mudam a vogal: acostarse → me acuesto; despertarse → me despierto; vestirse → me visto.|Para ordenar a rotina: primero, después, luego, más tarde.',
  ex: 'Me lavo los dientes después del desayuno.=Escovo os dentes depois do café da manhã.|Almorzamos a la una.=Almoçamos à uma.|¿A qué hora sales de casa?=A que horas você sai de casa?|Primero me visto y luego salgo.=Primeiro me visto e depois saio.',
  bd: ['Me=OA^pronome reflexivo: combina com yo|levanto=V^levantarse, forma de yo|a_las_seis_y_media.=T', 'Eu me levanto às seis e meia.'],
  rule: 'rutina',
  hw: 'Descreva a sua rotina num dia de semana, em oito frases, com horários e conectores: Primero me levanto a las … Después …',
  deep: `
Hoje você descreve a sua rotina. A maioria dos verbos do dia a dia é **reflexiva**: vem com me, te, se…
# Passo 1: o pronome reflexivo
@ M:levantarse;Pessoa|Forma;yo|me levanto;tú|te levantas;él / ella / usted|se levanta;nosotros|nos levantamos;ellos / ustedes|se levantan
~ Me levanto a las seis y media. = Eu me levanto às seis e meia.
~ Ella se ducha por la mañana. = Ela toma banho de manhã.
BR O português também tem reflexivos ("eu **me** levanto"). A diferença: em espanhol, eles são ainda mais comuns: **me ducho** (tomo banho), **me acuesto** (vou dormir).
# Passo 2: os verbos da rotina
| Em espanhol | Em português |
| despertarse | acordar |
| levantarse | levantar-se |
| ducharse | tomar banho |
| vestirse | vestir-se |
| acostarse | deitar-se, ir dormir |
~ Después me ducho y desayuno. = Depois tomo banho e tomo café da manhã.
~ Primero me visto y luego salgo. = Primeiro me visto e depois saio.
# Passo 3: as refeições
| Em espanhol | Em português |
| desayunar | tomar café da manhã |
| almorzar | almoçar |
| cenar | jantar |
~ Almorzamos a la una. = Almoçamos à uma.
! **cenar** é jantar. "Ceia" é só a do Natal: **la cena de Navidad**.
# Passo 4: ojo, brasileño: o pronome no infinitivo
| Conjugado | Infinitivo |
| Me levanto. | Quiero levantarme. |
| Te duchas. | Vas a ducharte. |
~ Los domingos me acuesto tarde. = Aos domingos eu me deito tarde.
~ Quiero acostarme temprano. = Quero me deitar cedo.
! No infinitivo, o pronome vai **colado no fim**: acostar**me**, duchar**te**.
> Treine agora: conte em voz alta, em quatro frases, a sua manhã de hoje.
? "Eu me levanto": || me levanto
? "Ela toma banho": || se ducha
? "Quero me deitar cedo": || Quiero acostarme temprano.
`,
});

NL('es-cambian', {
  de: 'Quiero, puedo, duermo', pt: 'Os verbos que mudam a vogal', gt: 'presente irregular: e → ie, o → ue, e → i',
  gx: 'Alguns verbos muito usados mudam a vogal da raiz quando ela é tônica: querer → quiero (e → ie), poder → puedo (o → ue), pedir → pido (e → i). A mudança acontece em yo, tú, él e ellos, mas não em nosotros: queremos, podemos.',
  ge: 'Quiero un café, por favor.=Quero um café, por favor.|¿Puedes venir mañana?=Você pode vir amanhã?|Duermo ocho horas por noche.=Durmo oito horas por noite.',
  v: 'querer=querer=💭|poder=poder=💪|dormir=dormir=😴|empezar=começar=▶️|volver=voltar=↩️|preferir=preferir=👍|pensar=pensar=🤔|pedir=pedir=🙏|jugar=jogar, brincar=⚽|entender=entender=💡',
  x: 'cerrar=fechar|encontrar=encontrar|costar=custar|repetir=repetir|servir=servir|recordar=lembrar|almuerzo=almoço|tenis=tênis|mañana=amanhã|siempre=sempre',
  dlg: '¿Quieres jugar al tenis el sábado?=Você quer jogar tênis no sábado?|Quiero, pero no puedo. Trabajo hasta las dos.=Quero, mas não posso. Trabalho até as duas.|¿Y el domingo? ¿Prefieres el domingo?=E no domingo? Você prefere no domingo?|¡Sí! El domingo puedo.=Sim! No domingo eu posso.',
  cz: 'Yo ___ un café. (querer)=quiero=quero=quieres|¿___ venir mañana? (poder, tú)=Puedes=Podes=Pueden|Nosotros ___ ocho horas. (dormir)=dormimos=duermimos=duermemos',
  whys: 'e → ie com yo: quiero|o → ue com tú: puedes|nosotros não muda: dormimos',
  pts: 'e → ie: querer (quiero), empezar (empiezo), pensar (pienso), preferir (prefiero), entender (entiendo), cerrar (cierro).|o → ue: poder (puedo), dormir (duermo), volver (vuelvo), costar (cuesta), encontrar (encuentro), recordar (recuerdo). E jugar, sozinho: u → ue (juego).|e → i: pedir (pido), repetir (repito), servir (sirvo), vestirse (me visto).|A mudança é na sílaba tônica: acontece em yo, tú, él, ellos, mas não em nosotros: quiero / queremos, puedo / podemos.',
  ex: 'La clase empieza a las nueve.=A aula começa às nove.|¿Cuánto cuesta?=Quanto custa?|Siempre pido pizza los viernes.=Sempre peço pizza às sextas.|No entiendo. ¿Puedes repetir?=Não entendo. Você pode repetir?',
  bd: ['Quiero=V^querer: e → ie|un_café,=OA|por_favor.=C', 'Quero um café, por favor.'],
  rule: 'cambian',
  hw: 'Escreva oito frases sobre você com verbos que mudam a vogal: quiero, prefiero, empiezo, puedo, duermo, vuelvo, juego, pido.',
  deep: `
Hoje você aprende um grupo de verbos muito usados que **mudam a vogal** da raiz. Parece difícil, mas segue uma lógica clara.
# Passo 1: e → ie
@ M:querer;Pessoa|Forma;yo|quiero;tú|quieres;él / ella|quiere;nosotros|queremos;ellos|quieren
~ Quiero un café, por favor. = Quero um café, por favor.
~ La clase empieza a las nueve. = A aula começa às nove.
| Verbo | Yo |
| empezar | empiezo |
| pensar | pienso |
| preferir | prefiero |
| entender | entiendo |
# Passo 2: o → ue
| Verbo | Yo | Tú |
| poder | puedo | puedes |
| dormir | duermo | duermes |
| volver | vuelvo | vuelves |
| costar | (cuesta) | |
~ ¿Puedes venir mañana? = Você pode vir amanhã?
~ Duermo ocho horas por noche. = Durmo oito horas por noite.
~ ¿Cuánto cuesta? = Quanto custa?
# Passo 3: e → i
| Verbo | Yo |
| pedir | pido |
| repetir | repito |
| servir | sirvo |
~ Siempre pido pizza los viernes. = Sempre peço pizza às sextas.
! **jugar** é o único com u → ue: juego, juegas, juega (mas jugamos).
# Passo 4: ojo, brasileño: nosotros não muda
@ V:A vogal tônica;Muda (tônica)|quiero, puedo, duermo, juegan;Não muda (átona)|queremos, podemos, dormimos, jugamos
~ No entiendo. ¿Puedes repetir? = Não entendo. Você pode repetir?
BR Cuidado com o portunhol: "**quero**" e "**posso**" são português. Em espanhol: **quiero**, **puedo**.
> Treine agora: diga três coisas que você quer fazer hoje e uma que não pode.
? "Eu quero": || quiero
? "Você pode" (tú): || puedes
? "Nós dormimos": || dormimos (sem mudança)
`,
});

NL('es-frecuencia', {
  de: '¿Con qué frecuencia?', pt: 'Dizer com que frequência', gt: 'siempre, a veces, nunca · los lunes · una vez a la semana',
  gx: 'Para dizer com que frequência: siempre (sempre), casi siempre, a menudo (com frequência), a veces (às vezes), casi nunca, nunca. Para os dias: los lunes (às segundas), todos los días, una vez a la semana. Com nunca depois do verbo, use no antes: No como nunca carne = Nunca como carne.',
  ge: 'Siempre desayuno en casa.=Sempre tomo café da manhã em casa.|Los sábados juego al fútbol.=Aos sábados jogo futebol.|Nunca bebo café por la noche.=Nunca bebo café à noite.',
  v: 'siempre=sempre=🔁|a veces=às vezes=🎲|nunca=nunca=🚫|casi=quase=〰️|a menudo=com frequência=📈|todos los días=todos os dias=📅|una vez=uma vez=1️⃣|los lunes=às segundas=📆|el fin de semana=o fim de semana=🏖️|cada=cada=🔂',
  x: 'lunes=segunda-feira|martes=terça-feira|miércoles=quarta-feira|jueves=quinta-feira|viernes=sexta-feira|sábado=sábado|domingo=domingo|semana=semana|mes=mês|gimnasio=academia',
  dlg: '¿Vas al gimnasio?=Você vai à academia?|Sí, tres veces a la semana: los lunes, miércoles y viernes.=Sim, três vezes por semana: às segundas, quartas e sextas.|¡Qué disciplina! Yo casi nunca voy.=Que disciplina! Eu quase nunca vou.|A veces es difícil, pero me gusta.=Às vezes é difícil, mas eu gosto.',
  cz: '___ desayuno en casa. (sempre)=Siempre=Siempres=Sempre|___ sábados juego al fútbol. (aos)=Los=En los=A los|No bebo café ___ por la noche.=nunca=jamás no=nada',
  whys: 'sempre: siempre|dias da semana: los + dia|com no antes: no … nunca',
  pts: 'Do mais ao menos frequente: siempre, casi siempre, a menudo, a veces, casi nunca, nunca.|Dias da semana sem preposição: el lunes (na segunda, uma vez), los lunes (às segundas, sempre). Todos em minúscula.|Quantas vezes: una vez, dos veces, tres veces al día / a la semana / al mes.|Nunca antes do verbo: Nunca bebo café. Depois do verbo, com no: No bebo nunca café (dupla negação, normal em espanhol).',
  ex: 'Voy al gimnasio tres veces a la semana.=Vou à academia três vezes por semana.|A veces trabajo los domingos.=Às vezes trabalho aos domingos.|Casi siempre almuerzo a la una.=Quase sempre almoço à uma.|El viernes tengo una reunión.=Na sexta tenho uma reunião.',
  bd: ['Los_sábados=T^los + dia: todo sábado|juego=V^jugar: u → ue|al_fútbol.=OA^a + el = al', 'Aos sábados jogo futebol.'],
  rule: 'frecuencia',
  hw: 'Escreva oito frases sobre os seus hábitos, cada uma com uma frequência diferente: siempre, casi siempre, a menudo, a veces, casi nunca, nunca, los lunes, una vez a la semana.',
  deep: `
Hoje você aprende a dizer com que frequência faz as coisas, e os dias da semana.
# Passo 1: a escala da frequência
@ P:Do mais ao menos;Sempre=siempre;Quase sempre=casi siempre;Com frequência=a menudo;Às vezes=a veces;Quase nunca=casi nunca;Nunca=nunca
~ Siempre desayuno en casa. = Sempre tomo café da manhã em casa.
~ Casi siempre almuerzo a la una. = Quase sempre almoço à uma.
# Passo 2: os dias da semana
| Em espanhol | Em português |
| lunes | segunda-feira |
| martes | terça-feira |
| miércoles | quarta-feira |
| jueves | quinta-feira |
| viernes | sexta-feira |
| sábado, domingo | sábado, domingo |
~ Los sábados juego al fútbol. = Aos sábados jogo futebol.
BR Os dias em espanhol vêm dos planetas (lunes, da Lua; martes, de Marte), e não de "feira". E sem preposição: **el lunes**, **los lunes**.
# Passo 3: quantas vezes
| Em espanhol | Em português |
| una vez al día | uma vez por dia |
| dos veces a la semana | duas vezes por semana |
| todos los días | todos os dias |
~ Voy al gimnasio tres veces a la semana. = Vou à academia três vezes por semana.
~ El viernes tengo una reunión. = Na sexta tenho uma reunião.
# Passo 4: ojo, brasileño: nunca e o no
@ V:Duas formas de nunca;Antes do verbo|Nunca bebo café.;Depois do verbo, com no|No bebo nunca café.
~ Nunca bebo café por la noche. = Nunca bebo café à noite.
! Em espanhol, a dupla negação é normal: **no** … **nunca**, **no** … **nada**, **no** … **nadie**.
> Treine agora: diga o que você faz às segundas e o que nunca faz.
? "Às sextas": || los viernes
? "Duas vezes por semana": || dos veces a la semana
? Ordem certa: "Nunca bebo café" ou "No bebo nunca café"? || As duas estão certas.
`,
});

NL('es-muymucho', {
  de: 'Muy y mucho', pt: 'Muito: muy ou mucho?', gt: 'muy + adjetivo / advérbio · mucho, mucha, muchos, muchas + substantivo · verbo + mucho',
  gx: 'O "muito" do português tem duas formas em espanhol. muy vem antes de adjetivo e advérbio, e não muda: muy bueno, muy bien, muy tarde. mucho vem antes de substantivo e concorda com ele (mucho trabajo, mucha gente, muchos amigos), ou depois do verbo (trabajo mucho).',
  ge: 'Es muy bueno.=É muito bom.|Tengo mucho trabajo.=Tenho muito trabalho.|Te quiero mucho.=Te amo muito.',
  v: 'muy=muito (antes de adjetivo)=➕|mucho=muito (antes de substantivo)=➕|mucha=muita=➕|muchos=muitos=➕|muchas=muitas=➕|poco=pouco=➖|bastante=bastante=🆗|demasiado=demais=⚠️|tan=tão=⚖️|tanto=tanto=⚖️',
  x: 'cansado=cansado|ocupado=ocupado|lejos=longe|cerca=perto|gente=gente|tiempo=tempo|dinero=dinheiro|calor=calor|frío=frio|ruido=barulho',
  dlg: '¿Cómo estás?=Como você está?|Muy cansada. Tengo mucho trabajo esta semana.=Muito cansada. Tenho muito trabalho esta semana.|¿Trabajas mucho?=Você trabalha muito?|Sí, muchas horas. ¡Pero el viernes es feriado!=Sim, muitas horas. Mas sexta é feriado!',
  cz: 'Estoy ___ cansada.=muy=mucho=mucha|Tengo ___ trabajo.=mucho=muy=mucha|Hay ___ gente en la calle.=mucha=mucho=muy',
  whys: 'antes de adjetivo: muy|antes de substantivo masculino: mucho|gente é feminino: mucha',
  pts: 'muy + adjetivo ou advérbio, sem mudar: muy bueno, muy buena, muy bien, muy lejos, muy tarde.|mucho + substantivo, concordando: mucho trabajo, mucha gente, muchos amigos, muchas horas.|Depois do verbo, mucho sozinho, sem mudar: Trabajo mucho. Me gusta mucho. Te quiero mucho.|Exceções: mucho mejor, mucho peor, mucho más, mucho menos (comparações levam mucho).',
  ex: 'Hay mucha gente en la calle.=Tem muita gente na rua.|Me gusta mucho esta ciudad.=Gosto muito desta cidade.|Vivo muy lejos del trabajo.=Moro muito longe do trabalho.|Es mucho mejor así.=É muito melhor assim.',
  bd: ['Tengo=V|mucho=C^mucho: antes de substantivo|trabajo.=OA', 'Tenho muito trabalho.'],
  rule: 'muymucho',
  hw: 'Escreva oito frases sobre a sua semana: quatro com muy (muy cansada, muy bien…) e quatro com mucho / mucha / muchos / muchas.',
  deep: `
Hoje você resolve um dos erros mais comuns do brasileiro em espanhol: o "muito". Ele tem **duas** formas.
# Passo 1: muy, antes de adjetivo e advérbio
@ F:Muy;muy^v|+ adjetivo ou advérbio^p;muy|bueno, cansada, bien, lejos, tarde
~ Es muy bueno. = É muito bom.
~ Vivo muy lejos del trabajo. = Moro muito longe do trabalho.
! **muy** não muda nunca: muy bueno, muy buena, muy buenos.
# Passo 2: mucho, antes de substantivo
| Substantivo | Forma |
| trabajo (masculino) | mucho trabajo |
| gente (feminino) | mucha gente |
| amigos (masculino plural) | muchos amigos |
| horas (feminino plural) | muchas horas |
~ Tengo mucho trabajo. = Tenho muito trabalho.
~ Hay mucha gente en la calle. = Tem muita gente na rua.
# Passo 3: mucho, depois do verbo
~ Te quiero mucho. = Te amo muito.
~ Me gusta mucho esta ciudad. = Gosto muito desta cidade.
| Verbo + mucho | Em português |
| Trabajo mucho. | Trabalho muito. |
| Llueve mucho. | Chove muito. |
# Passo 4: ojo, brasileño: os erros clássicos
@ V:Muy ou mucho?;Errado|mucho bueno, muy trabajo, te quiero muy;Certo|muy bueno, mucho trabajo, te quiero mucho
~ Es mucho mejor así. = É muito melhor assim.
BR Exceção: com **mejor**, **peor**, **más** e **menos**, use **mucho**: mucho mejor, mucho más.
> Treine agora: diga como está a sua semana com muy e com mucho.
? "Muito bom": || muy bueno
? "Muita gente": || mucha gente
? "Muito melhor": || mucho mejor
`,
});

NL('es-invitacion', {
  de: 'Una invitación', pt: 'Ler e escrever um convite', gt: 'convidar: ¿qué, cuándo, dónde? · te invito a … · ¿vienes?',
  gx: 'Um convite responde a quatro perguntas: o quê (mi cumpleaños), quando (el sábado 14 a las ocho), onde (en mi casa, calle …) e o que levar (trae algo para tomar). Para convidar: Te invito a … / ¿Quieres venir a …? Para confirmar: ¡Claro que voy! / Lo siento, no puedo.',
  ge: 'Te invito a mi cumpleaños el sábado.=Convido você para o meu aniversário no sábado.|La fiesta empieza a las ocho de la noche.=A festa começa às oito da noite.|¿Puedes confirmar antes del jueves?=Você pode confirmar antes de quinta?',
  v: 'invitación=convite=💌|invitar=convidar=🙋|fiesta=festa=🎉|cumpleaños=aniversário=🎂|confirmar=confirmar=✅|traer=trazer=🎁|venir=vir=🚶|claro que sí=claro que sim=👍|lo siento=sinto muito=😔|dirección=endereço=📍',
  x: 'asado=churrasco|algo para tomar=algo para beber|torta=bolo|regalo=presente|amigos=amigos|piso=andar|timbre=campainha|portón=portão|ropa cómoda=roupa confortável|hasta el sábado=até sábado',
  dlg: '¡Hola, Mateo! ¿Quieres venir a mi fiesta el sábado?=Oi, Mateo! Quer vir à minha festa no sábado?|¡Claro que sí! ¿A qué hora es?=Claro que sim! A que horas é?|A las ocho, en mi casa. Trae algo para tomar.=Às oito, na minha casa. Traga algo para beber.|Perfecto. ¡Nos vemos el sábado!=Perfeito. Nos vemos no sábado!',
  cz: 'Te ___ a mi cumpleaños.=invito=convido=invita|La fiesta ___ a las ocho.=empieza=empeza=comienzas|Lo ___, no puedo ir.=siento=sinto=sento',
  whys: 'convidar (eu): invito|empezar: e → ie|sinto muito: lo siento',
  pts: 'Convidar: Te invito a … (convido você para …) / ¿Quieres venir a …? / ¿Te gustaría venir a …?|As informações: ¿Qué? (mi cumpleaños) · ¿Cuándo? (el sábado 14 a las ocho) · ¿Dónde? (en mi casa, calle …) · ¿Qué traer? (trae algo para tomar).|Aceitar: ¡Claro que sí! / ¡Claro que voy! / ¡Me encantaría! Recusar: Lo siento, no puedo. / Muchas gracias, pero ese día trabajo.|Pedir confirmação: ¿Puedes confirmar antes del jueves? / Confirma, por favor.',
  ex: 'Me encantaría ir.=Eu adoraria ir.|Lo siento, ese día trabajo.=Sinto muito, nesse dia eu trabalho.|Trae algo para tomar.=Traga algo para beber.|¡Nos vemos el sábado!=Nos vemos no sábado!',
  bd: ['Te=OA^você (quem é convidado)|invito=V^invitar, forma de yo|a_mi_cumpleaños=C^para quê|el_sábado.=T', 'Convido você para o meu aniversário no sábado.'],
  rule: 'invitacion',
  le: {
    texto: {
      t: '¡Te invito a mi cumpleaños!', kind: 'convite', voz: 'a',
      intro: 'A Lucía mandou um convite para os amigos. Leia e responda.',
      paras: ['¡Hola, amigos!', 'El sábado 14 de junio cumplo treinta años y quiero celebrarlo con ustedes.', 'Los invito a un asado en mi casa: Calle Las Rosas 245, Montevideo. La fiesta empieza a las siete de la tarde.', 'Yo preparo la comida. Ustedes pueden traer algo para tomar o un postre.', 'Por favor, confirmen antes del miércoles. ¡Los espero!', 'Lucía'],
      qs: [
        { q: 'O que a Lucía vai comemorar?', o: ['os 30 anos dela', 'o casamento', 'um emprego novo'], a: 0 },
        { q: 'Que tipo de festa vai ser?', o: ['um churrasco', 'um jantar num restaurante', 'uma festa na praia'], a: 0 },
        { q: 'O que os convidados podem levar?', o: ['algo para beber ou uma sobremesa', 'a comida', 'cadeiras'], a: 0 },
        { q: 'Até quando é preciso confirmar?', o: ['até quarta-feira', 'até sábado', 'até sexta-feira'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva o seu convite', tipo: 'form', ok: 'Convite escrito corretamente.',
      pede: 'Convide os seus amigos para uma festa, um jantar ou um passeio. Uma informação por linha.',
      campos: [
        { l: '¿Qué?', d: 'Los invito a … / Te invito a …', re: '\\b(invito|invitamos|quieres venir|quieren venir|te gustaría)\\b', f: 'iu', err: 'Faça o convite: Los invito a mi cumpleaños.', bad: [['\\bconvido\\b', '<b>convido</b> é português. Em espanhol: <b>invito</b>.']] },
        { l: '¿Cuándo?', d: 'el sábado 14 de junio', re: '\\b(lunes|martes|miércoles|jueves|viernes|sábado|domingo|mañana|enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)\\b|\\d', f: 'iu', err: 'Diga o dia: el sábado 14 de junio.' },
        { l: '¿A qué hora?', d: 'a las …', re: '\\ba las? \\S+', f: 'iu', err: 'Diga a hora com a la / a las: a las ocho.', bad: [['(^|\\s)às(\\s|$)', 'Em espanhol: <b>a las</b> ocho (sem crase).']] },
        { l: '¿Dónde?', d: 'en mi casa / en el restaurante …', re: '\\ben (mi|el|la|un|una|casa)\\b', f: 'iu', err: 'Diga o lugar: en mi casa.', bad: [['\\b(na|no|num|numa)\\b', 'Em espanhol, use <b>en el</b>, <b>en la</b>, <b>en mi</b>.']] },
        { l: '¿Qué traer?', d: 'Traigan … / Pueden traer …', re: '\\b(trae|traigan|traer|lleven|llevar|pueden)\\b', f: 'iu', err: 'Diga o que levar: Pueden traer algo para tomar.' },
        { l: 'Confirmar', d: 'Confirmen antes del …', re: '\\b(confirm\\w*|avisen|avísame|los espero|te espero)\\b', f: 'iu', err: 'Peça confirmação: Por favor, confirmen antes del jueves.' },
      ],
      modelo: 'Los invito a mi cumpleaños. · El sábado 14 de junio. · A las ocho de la noche. · En mi casa, Calle Flores 30. · Pueden traer algo para tomar. · Por favor, confirmen antes del jueves.',
    },
  },
  hw: 'Escreva um convite completo para uma festa (aniversário, churrasco, jantar), com o quê, quando, a que horas, onde, o que levar e o pedido de confirmação.',
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo. Você vai ler o convite de uma uruguaia e escrever o seu, usando as horas, os dias e os verbos que mudam a vogal.
# Passo 1: as quatro perguntas
@ P:Um convite;O quê=Los invito a mi cumpleaños.;Quando=El sábado 14 de junio.;Onde=En mi casa, Calle …;O que levar=Pueden traer algo para tomar.
~ Te invito a mi cumpleaños el sábado. = Convido você para o meu aniversário no sábado.
~ La fiesta empieza a las ocho de la noche. = A festa começa às oito da noite.
# Passo 2: convidar
| Em espanhol | Tom |
| Te invito a … | direto, a uma pessoa |
| Los invito a … | a várias pessoas |
| ¿Quieres venir a …? | pergunta informal |
| ¿Te gustaría venir a …? | mais educado |
~ ¿Quieres venir a mi fiesta? = Quer vir à minha festa?
# Passo 3: aceitar e recusar
@ V:A resposta;Aceitar|¡Claro que sí! / ¡Me encantaría!;Recusar|Lo siento, no puedo. / Ese día trabajo.
~ Me encantaría ir. = Eu adoraria ir.
~ Lo siento, ese día trabajo. = Sinto muito, nesse dia eu trabalho.
# Passo 4: ojo, brasileño: asado, torta, tomar
| Em espanhol | Em português |
| asado | churrasco |
| torta | bolo (em vários países) |
| tomar | beber (algo para tomar) |
| postre | sobremesa |
~ Trae algo para tomar. = Traga algo para beber.
! "**Algo para tomar**" é algo para beber. E na Argentina e no Uruguai, **torta** é bolo; no México, torta é um sanduíche!
> Agora leia o convite da Lucía e escreva o seu.
? Como convidar várias pessoas? || Los invito a …
? Como recusar com educação? || Lo siento, no puedo.
? "Algo para tomar" quer dizer…? || algo para beber
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('¿Qué hora es?',
  'V:Singular ou plural?;es la una|só para 1h;son las …|para as outras horas',
  'M:Os minutos;Relógio|Em espanhol;3h15|las tres y cuarto;3h30|las tres y media;3h45|las cuatro menos cuarto');
V('Mi rutina',
  'M:levantarse;Pessoa|Forma;yo|me levanto;tú|te levantas;él / ella|se levanta;nosotros|nos levantamos;ellos|se levantan',
  'V:O pronome;Conjugado|Me levanto.;Infinitivo|Quiero levantarme.');
V('Quiero, puedo, duermo',
  'M:Três mudanças;Mudança|Exemplo;e → ie|quiero, empiezo;o → ue|puedo, duermo;e → i|pido, repito',
  'V:A vogal tônica;Muda|quiero, puedo;Não muda|queremos, podemos');
V('¿Con qué frecuencia?',
  'P:Do mais ao menos;Sempre=siempre;Às vezes=a veces;Nunca=nunca',
  'M:Os dias;Uma vez|Sempre;el lunes|los lunes;el sábado|los sábados');
V('Muy y mucho',
  'M:Muy ou mucho?;Antes de|Forma|Exemplo;adjetivo, advérbio|muy|muy bueno;substantivo|mucho / mucha|mucho trabajo;depois do verbo|mucho|trabajo mucho',
  'V:Os erros clássicos;Errado|mucho bueno, muy trabajo;Certo|muy bueno, mucho trabajo');
V('Una invitación',
  'P:Um convite;O quê=Los invito a …;Quando=el sábado;Onde=en mi casa;O que levar=algo para tomar',
  'V:A resposta;Aceitar|¡Claro que sí!;Recusar|Lo siento, no puedo.');
S_('¿Qué hora es?', 'son=são|las=as|tres=três|media=meia|la=a|una=uma|cuarto=quarto, quinze|clase=aula|ocho=oito|disculpa=desculpa|cuatro=quatro|menos=menos|uy=nossa|mi=minha|entonces=então|corre=corre|suerte=sorte|doce=doze|en punto=em ponto|empieza=começa|película=filme|nueve=nove|diez=dez|llego=chego|casa=casa|siete=sete|cinco=cinco|cuarenta=quarenta|almuerzo=almoço');
S_('Mi rutina', 'me=me|acostarme=me deitar|seis=seis|media=meia|ducho=tomo banho|y=e|desayuno=tomo café da manhã|domingos=domingos|acuesto=deito|tarde=tarde|levantas=levanta|pero=mas|despierto=acordo|cinco=cinco|qué temprano=que cedo|suerte=sorte|lavo=lavo|dientes=dentes|desayuno (o)=café da manhã|almorzamos=almoçamos|sales=sai|visto=visto|salgo=saio|quiero=quero|cena=jantar|Navidad=Natal|vas=vai|se ducha=toma banho');
S_('Quiero, puedo, duermo', 'café=café|puedes=pode|venir=vir|duermo=durmo|ocho=oito|horas=horas|noche=noite|quieres=quer|sábado=sábado|tenis=tênis|pero=mas|trabajo=trabalho|hasta=até|dos=duas|domingo=domingo|prefieres=prefere|puedo=posso|clase=aula|empieza=começa|nueve=nove|cuánto=quanto|cuesta=custa|pido=peço|pizza=pizza|viernes=sextas|entiendo=entendo|pienso=penso|vuelvo=volto|juego=jogo|repito=repito|sirvo=sirvo|queremos=queremos|podemos=podemos|jugamos=jogamos|dormimos=dormimos');
S_('¿Con qué frecuencia?', 'desayuno=tomo café da manhã|casa=casa|juego=jogo|fútbol=futebol|bebo=bebo|café=café|noche=noite|vas=vai|gimnasio=academia|tres veces=três vezes|qué disciplina=que disciplina|voy=vou|difícil=difícil|almuerzo=almoço|reunión=reunião|tengo=tenho|trabajo=trabalho|veces=vezes|al día=por dia|a la semana=por semana|nadie=ninguém|nada=nada');
S_('Muy y mucho', 'bueno=bom|tengo=tenho|trabajo=trabalho|te quiero=te amo|cómo estás=como você está|cansada=cansada|esta semana=esta semana|trabajas=trabalha|horas=horas|feriado=feriado|gente=gente|calle=rua|me gusta=gosto|ciudad=cidade|vivo=moro|lejos=longe|mejor=melhor|así=assim|bien=bem|amigos=amigos|llueve=chove|peor=pior|más=mais|menos=menos|buena=boa');
S_('Una invitación', 'te invito=convido você|cumpleaños=aniversário|sábado=sábado|fiesta=festa|empieza=começa|ocho=oito|noche=noite|puedes=pode|antes del=antes de|jueves=quinta|quieres=quer|claro=claro|qué hora=que horas|casa=casa|trae=traga|algo=algo|tomar=beber|perfecto=perfeito|nos vemos=nos vemos|me encantaría=eu adoraria|ese día=nesse dia|trabajo=trabalho|amigos=amigos|cumplo=faço (anos)|treinta=trinta|celebrarlo=comemorar|con ustedes=com vocês|los invito=convido vocês|Calle=rua|Montevideo=Montevidéu|siete=sete|tarde=tarde|preparo=preparo|comida=comida|pueden=podem|postre=sobremesa|confirmen=confirmem|miércoles=quarta|los espero=espero vocês|junio=junho|catorce=catorze|flores=flores|treinta (30)=trinta');
['lucía', 'montevideo', 'mateo', 'rosas', 'flores'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'es-hora': {
    o: '**es la una** (1h) e **son las dos, son las tres…** Os minutos com **y** (y cuarto, y media) ou **menos** (menos cuarto). Para um compromisso: **a las ocho**.',
    q: 'Para perguntar as horas, marcar compromissos e falar da rotina.',
    p: 'Toda combinação depende de um horário. E o artigo **las** (son **las** tres) é a pegadinha.',
  },
  'es-rutina': {
    o: 'Verbos reflexivos da rotina: **me levanto**, **me ducho**, **me acuesto**. O pronome combina com o sujeito; no infinitivo, vai no fim: **ducharme**.',
    q: 'Para contar o seu dia a dia.',
    p: 'São os verbos mais usados para falar da vida diária. E **cenar** é jantar, não "ceia".',
  },
  'es-cambian': {
    o: 'Verbos que mudam a vogal tônica: **quiero** (e → ie), **puedo** (o → ue), **pido** (e → i). Em **nosotros**, não muda: **queremos**.',
    q: 'Em pedidos, convites e planos: querer, poder, preferir, empezar estão em toda parte.',
    p: '"Quero" e "posso" são portunhol. **Quiero** e **puedo** são das palavras mais úteis do espanhol.',
  },
  'es-frecuencia': {
    o: 'Frequência: **siempre**, **a veces**, **nunca**; dias: **los lunes**; vezes: **tres veces a la semana**.',
    q: 'Para falar de hábitos e combinar horários.',
    p: 'Junta-se com a rotina e deixa você contar o dia a dia com precisão.',
  },
  'es-muymucho': {
    o: '**muy** + adjetivo ou advérbio (**muy bueno**); **mucho / mucha / muchos / muchas** + substantivo (**mucho trabajo**); verbo + **mucho**.',
    q: 'Sempre que quiser dizer "muito".',
    p: '"Mucho bueno" é um dos erros mais típicos do brasileiro. A regra é simples e resolve de vez.',
  },
  'es-invitacion': {
    o: 'Um convite: **Los invito a …**, quando, a que horas, onde, o que levar e **confirmen**. Para responder: **¡Claro que sí!** / **Lo siento, no puedo**.',
    q: 'Para convidar amigos e colegas, por mensagem ou e-mail.',
    p: 'Junta horas, dias e verbos que mudam a vogal num texto real.',
  },
});
Object.assign(CZH, {
  'es-hora': ['3h30', '1h15', 'às'],
  'es-rutina': ['com yo', 'acostarse com tú', 'com ella'],
  'es-cambian': ['querer com yo', 'poder com tú', 'dormir com nosotros'],
  'es-frecuencia': ['sempre', 'aos sábados', 'no … ___'],
  'es-muymucho': ['antes de cansada', 'antes de trabajo', 'antes de gente'],
  'es-invitacion': ['convidar (eu)', 'empezar', 'sinto muito'],
});
Object.assign(OBJ, {
  'es-hora': { o: 'Consigo dizer as horas e marcar um horário.', a: 'Você consegue dizer 3h45 em espanhol?', ref: 'Interacción oral · A1' },
  'es-rutina': { o: 'Consigo descrever a minha rotina com verbos reflexivos.', a: 'Você consegue contar a sua manhã com me levanto, me ducho…?', ref: 'Expresión oral · A1' },
  'es-cambian': { o: 'Uso os verbos que mudam a vogal: quiero, puedo, duermo.', a: 'Você sabe por que se diz quiero, mas queremos?', ref: 'Gramática · A1' },
  'es-frecuencia': { o: 'Consigo dizer com que frequência faço as coisas.', a: 'Você consegue falar dos seus hábitos com siempre, a veces e nunca?', ref: 'Expresión oral · A1' },
  'es-muymucho': { o: 'Uso muy e mucho corretamente.', a: 'Você sabe quando usar muy e quando usar mucho?', ref: 'Gramática · A1' },
  'es-invitacion': { o: 'Consigo ler e escrever um convite.', a: 'Você consegue convidar amigos para uma festa por escrito?', ref: 'Expresión escrita · A1' },
});
MOD_OBJ[2] = ['Consigo dizer as horas e descrever a minha rotina.', 'Uso os verbos que mudam a vogal.', 'Consigo dizer com que frequência faço as coisas.', 'Consigo escrever um convite.'];

ES_MODS.push({ lv: 'A1', n: 'O meu dia', l: ['es-hora', 'es-rutina', 'es-cambian', 'es-frecuencia', 'es-muymucho', 'es-invitacion'] });
