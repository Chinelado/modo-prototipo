// Espanhol · A2 · Módulo 11 · La salud (A saúde). Formato de es/curso.js.

NL('es-duele', {
  de: 'Me duele la cabeza', pt: 'Dizer onde dói', gt: 'doler como gustar: me duele / me duelen · el cuerpo · tengo fiebre, tos',
  gx: 'doler funciona como gustar: me duele la cabeza (dói a minha cabeça), me duelen los pies (doem os meus pés). Atenção: com partes do corpo, o espanhol usa o artigo, e não o possessivo: me duele la cabeza (e não "mi cabeza"). Para outros sintomas: tengo fiebre, tengo tos, estoy resfriado.',
  ge: 'Me duele la cabeza.=Estou com dor de cabeça.|Me duelen los pies.=Os meus pés estão doendo.|Tengo fiebre y tos.=Estou com febre e tosse.',
  v: 'doler=doer=🤕|me duele=dói (em mim)=😣|me duelen=doem (em mim)=😖|cabeza=cabeça=🧠|estómago=estômago=🤢|espalda=costas=🔙|garganta=garganta=🗣️|muela=dente (molar)=🦷|fiebre=febre=🤒|tos=tosse=😷',
  x: 'brazo=braço|pierna=perna|rodilla=joelho|oído=ouvido|ojos=olhos|cuello=pescoço|mano=mão|pie=pé|resfriado=resfriado|gripe=gripe',
  dlg: '¿Qué te pasa? Tienes mala cara.=O que você tem? Você está com uma cara péssima.|Me duele mucho la garganta y tengo fiebre.=Estou com muita dor de garganta e com febre.|¿Desde cuándo?=Desde quando?|Desde ayer. Creo que es gripe.=Desde ontem. Acho que é gripe.',
  cz: 'Me ___ la cabeza.=duele=duelen=dolo|Me ___ los pies.=duelen=duele=duelo|Me duele ___ espalda.=la=mi=a',
  whys: 'la cabeza, singular: duele|los pies, plural: duelen|parte do corpo: artigo, não possessivo',
  pts: 'doler funciona como gustar: me duele (uma coisa), me duelen (várias). ¿Te duele? ¿Le duele? (usted).|Com o corpo, use o artigo: me duele la cabeza, me duelen los ojos. Nunca "me duele mi cabeza".|Outros sintomas com tener: tengo fiebre, tengo tos, tengo gripe, tengo dolor de estómago.|Com estar: estoy resfriado, estoy mareado (tonto), estoy cansado.',
  ex: 'Me duele la espalda de tanto trabajar.=As minhas costas doem de tanto trabalhar.|¿Te duele aquí?=Dói aqui?|Tengo dolor de estómago.=Estou com dor de estômago.|Estoy resfriada.=Estou resfriada.',
  bd: ['Me=OI^a mim (como gustar)|duele=V^doler: o → ue|la_cabeza.=S^parte do corpo: com artigo', 'Estou com dor de cabeça.'],
  rule: 'doler',
  hw: 'Escreva oito frases sobre a última vez que você ficou doente: o que doía, os sintomas, desde quando e o que você fez.',
  deep: `
Hoje começa o módulo da **saúde**. Você aprende a dizer onde dói e o que está sentindo, essencial numa viagem.
# Passo 1: doler, como gustar
@ V:Uma ou várias?;Uma coisa|Me duele la cabeza.;Várias|Me duelen los pies.
~ Me duele la cabeza. = Estou com dor de cabeça.
~ Me duelen los pies. = Os meus pés estão doendo.
# Passo 2: o corpo
@ P:O corpo;Cabeça=la cabeza;Garganta=la garganta;Costas=la espalda;Estômago=el estómago;Dente=la muela
~ Me duele la espalda de tanto trabajar. = As minhas costas doem de tanto trabalhar.
~ ¿Te duele aquí? = Dói aqui?
# Passo 3: os sintomas
| Com tener | Com estar |
| tengo fiebre | estoy resfriado |
| tengo tos | estoy mareado |
| tengo gripe | estoy cansado |
~ Tengo fiebre y tos. = Estou com febre e tosse.
~ Estoy resfriada. = Estou resfriada.
# Passo 4: ojo, brasileño: artigo, e não possessivo
| Errado | Certo |
| me duele mi cabeza | me duele la cabeza |
| me lavo mis manos | me lavo las manos |
~ Tengo dolor de estómago. = Estou com dor de estômago.
! Com partes do corpo, o **me** já diz de quem é: me duele **la** cabeza. E **constipado** (Espanha) não é intestino preso: é **resfriado**.
> Treine agora: diga a um médico duas coisas que doem e um sintoma.
? "Estou com dor de cabeça": || Me duele la cabeza.
? "Os meus pés doem": || Me duelen los pies.
? "Estou com febre": || Tengo fiebre.
`,
});

NL('es-farmacia', {
  de: 'En la farmacia', pt: 'Na farmácia', gt: '¿Tiene algo para …? · pastillas, jarabe, receta · cada ocho horas',
  gx: 'Na farmácia, pergunte: ¿Tiene algo para el dolor de cabeza? (tem algo para dor de cabeça?). O vocabulário: pastillas (comprimidos), jarabe (xarope), crema (pomada), curitas (curativos). E as instruções: tome una pastilla cada ocho horas (a cada oito horas), sin receta (sem receita).',
  ge: '¿Tiene algo para el dolor de garganta?=Tem algo para dor de garganta?|Tome una pastilla cada ocho horas.=Tome um comprimido a cada oito horas.|¿Necesito receta?=Preciso de receita?',
  v: 'farmacia=farmácia=💊|pastilla=comprimido=💊|jarabe=xarope=🧴|crema=pomada, creme=🧴|curita=curativo (band-aid)=🩹|receta=receita (médica)=📝|cada … horas=a cada … horas=⏰|en ayunas=em jejum=🍽️|alergia=alergia=🤧|efectos secundarios=efeitos colaterais=⚠️',
  x: 'analgésico=analgésico|antibiótico=antibiótico|termómetro=termômetro|gotas=gotas|dosis=dose|caja=caixa|vendas=ataduras|protector solar=protetor solar|picadura=picada|mareo=enjoo',
  dlg: 'Buenas tardes. ¿Tiene algo para la tos?=Boa tarde. Tem algo para tosse?|Sí, este jarabe es muy bueno. ¿Es para usted?=Sim, este xarope é muito bom. É para a senhora?|Sí. ¿Cómo lo tomo?=Sim. Como eu tomo?|Una cucharada cada ocho horas, después de comer.=Uma colher a cada oito horas, depois de comer.',
  cz: '¿Tiene algo ___ la tos?=para=por=a|Tome una pastilla ___ ocho horas. (a cada)=cada=a cada=todas|¿Necesito ___? (receita médica)=receta=receita=recibo',
  whys: 'objetivo: para|frequência: cada|receita médica: receta',
  pts: 'Pedir: ¿Tiene algo para …? (el dolor, la tos, la fiebre, el mareo). ¿Me da una caja de …?|Formas: pastillas, jarabe, crema, gotas, curitas.|Instruções: Tome una pastilla cada ocho horas. Después de comer. En ayunas. No más de tres al día.|Receita: ¿Necesito receta? Se vende sin receta. Atenção: recibo é o comprovante de pagamento.',
  ex: '¿Me da una caja de curitas?=Me dá uma caixa de curativos?|Se vende sin receta.=É vendido sem receita.|Tómelo después de comer.=Tome depois de comer.|Soy alérgica a la penicilina.=Sou alérgica a penicilina.',
  bd: ['¿Tiene_algo=V^usted: tem algo|para=P^objetivo: para|el_dolor_de_garganta?=OA', 'Tem algo para dor de garganta?'],
  rule: 'farmacia',
  hw: 'Escreva um diálogo na farmácia (oito falas): o que você sente, o que pede, como tomar e se precisa de receita.',
  deep: `
Hoje você aprende a se virar **na farmácia**: pedir um remédio, entender como tomar e dizer se tem alergia.
# Passo 1: pedir
~ ¿Tiene algo para el dolor de garganta? = Tem algo para dor de garganta?
~ ¿Me da una caja de curitas? = Me dá uma caixa de curativos?
@ P:Na farmácia;Comprimidos=pastillas;Xarope=jarabe;Pomada=crema;Curativos=curitas
# Passo 2: como tomar
| Em espanhol | Em português |
| cada ocho horas | a cada oito horas |
| después de comer | depois de comer |
| en ayunas | em jejum |
| tres veces al día | três vezes ao dia |
~ Tome una pastilla cada ocho horas. = Tome um comprimido a cada oito horas.
~ Tómelo después de comer. = Tome depois de comer.
# Passo 3: receita e alergia
~ ¿Necesito receta? = Preciso de receita?
~ Se vende sin receta. = É vendido sem receita.
~ Soy alérgica a la penicilina. = Sou alérgica a penicilina.
# Passo 4: ojo, brasileño: receta e cada
@ V:Falsos amigos;la receta|a receita (médica ou culinária);el recibo|o comprovante de pagamento
| Português | Espanhol |
| a cada oito horas | cada ocho horas |
| comprimido | pastilla |
~ Una cucharada cada ocho horas. = Uma colher a cada oito horas.
! Em espanhol é só **cada** (sem "a"): **cada** ocho horas. E **pastilla** é o comprimido, não a bala.
> Treine agora: peça algo para dor de cabeça e pergunte como tomar.
? "Tem algo para tosse?": || ¿Tiene algo para la tos?
? "A cada oito horas": || cada ocho horas
? "Receita médica": || receta
`,
});

NL('es-consejos', {
  de: 'Consejos', pt: 'Dar conselhos: o imperativo', gt: 'imperativo afirmativo com tú e usted · toma / tome · irregulares: haz, ve, ten, ven, pon, di, sal',
  gx: 'Para dar conselhos e instruções, use o imperativo. Com tú, é igual à forma de él no presente: toma (tomar), bebe (beber), descansa. Com usted, a vogal troca: tome, beba, descanse. Os pronomes vão colados no fim: tómalo, acuéstate. Irregulares com tú: haz, ve, ten, ven, pon, di, sal, sé.',
  ge: 'Toma mucha agua y descansa.=Beba muita água e descanse.|Tome este jarabe tres veces al día.=Tome este xarope três vezes ao dia.|Ve al médico si no mejoras.=Vá ao médico se não melhorar.',
  v: 'consejo=conselho=💡|toma=tome (tú)=🥤|bebe=beba (tú)=💧|descansa=descanse (tú)=😴|haz=faça (tú)=✅|ve=vá (tú)=🚶|ten=tenha (tú)=🫴|ven=venha (tú)=👋|tome=tome (usted)=💊|acuéstate=deite-se=🛏️',
  x: 'agua=água|té=chá|miel=mel|limón=limão|ejercicio=exercício|abrigarse=se agasalhar|reposo=repouso|dormir=dormir|comer sano=comer saudável|mejorarse=melhorar',
  dlg: 'Me siento fatal. Creo que tengo gripe.=Estou me sentindo péssima. Acho que estou com gripe.|Pobrecita. Acuéstate y toma un té con miel.=Coitadinha. Deite-se e tome um chá com mel.|¿Y si mañana sigo mal?=E se amanhã eu continuar mal?|Entonces ve al médico. Y ten cuidado con el frío.=Então vá ao médico. E tenha cuidado com o frio.',
  cz: '___ mucha agua. (tomar, tú)=Toma=Tome=Tomas|___ este jarabe. (tomar, usted)=Tome=Toma=Tomes|___ al médico si no mejoras. (ir, tú)=Ve=Vai=Va',
  whys: 'imperativo com tú: igual a él|imperativo com usted: a → e|ir com tú: ve',
  pts: 'Imperativo com tú = forma de él no presente: toma, bebe, descansa, duerme, abre.|Imperativo com usted: a vogal troca: -ar → -e (tome, descanse); -er / -ir → -a (beba, abra).|Irregulares com tú: hacer → haz, ir → ve, tener → ten, venir → ven, poner → pon, decir → di, salir → sal, ser → sé.|Pronomes colados no fim: tómalo, acuéstate, dímelo. Com acento para manter a pronúncia.',
  ex: 'Haz ejercicio todos los días.=Faça exercício todos os dias.|Abríguese bien.=Agasalhe-se bem.|Ten paciencia.=Tenha paciência.|Ven a mi casa y te preparo una sopa.=Venha à minha casa e eu te preparo uma sopa.',
  bd: ['Toma=V^imperativo, tú: igual a él toma|mucha_agua=OA|y_descansa.=V^imperativo, tú', 'Beba muita água e descanse.'],
  rule: 'imperativo',
  hw: 'Dê oito conselhos para alguém resfriado: quatro com tú (toma, descansa, haz, ve) e quatro com usted (tome, descanse, beba, vaya).',
  deep: `
Hoje você aprende a **dar conselhos e instruções** com o imperativo. Com tú, é muito parecido com o que falamos no Brasil.
# Passo 1: o imperativo com tú
| Verbo | Él (presente) | Imperativo tú |
| tomar | toma | ¡Toma! |
| beber | bebe | ¡Bebe! |
| descansar | descansa | ¡Descansa! |
| dormir | duerme | ¡Duerme! |
~ Toma mucha agua y descansa. = Beba muita água e descanse.
BR É o nosso imperativo do dia a dia: "**toma** água", "**descansa**". Aqui ele é também a forma correta.
# Passo 2: os irregulares com tú
@ M:Irregulares;Verbo|Imperativo tú;hacer|haz;ir|ve;tener|ten;venir|ven;poner|pon;decir|di
~ Haz ejercicio todos los días. = Faça exercício todos os dias.
~ Ve al médico si no mejoras. = Vá ao médico se não melhorar.
~ Ten paciencia. = Tenha paciência.
# Passo 3: o imperativo com usted
@ V:A vogal troca;-ar → -e|tomar → tome;-er / -ir → -a|beber → beba
~ Tome este jarabe tres veces al día. = Tome este xarope três vezes ao dia.
~ Abríguese bien. = Agasalhe-se bem.
# Passo 4: ojo, brasileño: os pronomes no fim
| Sem pronome | Com pronome |
| toma | tómalo |
| acuesta | acuéstate |
| di | dímelo |
~ Acuéstate y toma un té con miel. = Deite-se e tome um chá com mel.
! No imperativo afirmativo, os pronomes vão **colados no fim**: tóma**lo**, acuésta**te**. E ganham acento para manter a sílaba forte.
> Treine agora: dê três conselhos a uma amiga gripada, com tú.
? "Beba muita água" (tú): || Toma mucha agua.
? "Faça exercício" (tú): || Haz ejercicio.
? "Tome este xarope" (usted): || Tome este jarabe.
`,
});

NL('es-nohagas', {
  de: '¡No hagas eso!', pt: 'Proibir e advertir: o imperativo negativo', gt: 'no + subjuntivo: no tomes, no comas, no hagas, no vayas · no lo hagas',
  gx: 'O imperativo negativo tem forma própria: com -ar, a vogal vira e (no tomes); com -er e -ir, vira a (no comas, no salgas). Irregulares: no hagas, no vayas, no tengas, no pongas, no digas. E os pronomes vão antes: no lo hagas, no te preocupes.',
  ge: '¡No hagas eso!=Não faça isso!|No tomes café por la noche.=Não tome café à noite.|No te preocupes, no es grave.=Não se preocupe, não é grave.',
  v: 'no tomes=não tome (tú)=🚫☕|no comas=não coma=🚫🍔|no hagas=não faça=✋|no vayas=não vá=🛑|no salgas=não saia=🚪|no te preocupes=não se preocupe=😌|no fumes=não fume=🚭|no olvides=não esqueça=🧠|no toque=não toque (usted)=🖐️|cuidado=cuidado=⚠️',
  x: 'dulces=doces|alcohol=álcool|sol=sol|frío=frio|pantallas=telas|esfuerzo=esforço|grave=grave|tranquilo=tranquilo|levantar peso=levantar peso|automedicarse=se automedicar',
  dlg: 'Doctor, ¿puedo ir al gimnasio mañana?=Doutor, posso ir à academia amanhã?|No, no vayas esta semana. Necesitas reposo.=Não, não vá esta semana. Você precisa de repouso.|¿Y puedo trabajar?=E posso trabalhar?|Sí, pero no levantes peso y no te olvides de las pastillas.=Sim, mas não levante peso e não se esqueça dos comprimidos.',
  cz: 'No ___ café por la noche. (tomar, tú)=tomes=tomas=toma|¡No ___ eso! (hacer, tú)=hagas=haces=haz|No te ___, no es grave. (preocupar)=preocupes=preocupas=preocupa',
  whys: '-ar: vogal vira e|hacer: hagas|-ar: preocupes',
  pts: 'Negativo com tú: -ar → -es (no tomes, no fumes); -er / -ir → -as (no comas, no salgas, no bebas).|Irregulares: no hagas, no vayas, no tengas, no pongas, no digas, no vengas, no seas.|Pronomes antes do verbo: no lo hagas, no te preocupes, no me digas.|Com usted: no tome, no coma, no haga, no vaya (as mesmas formas, sem o -s).',
  ex: 'No comas tantos dulces.=Não coma tantos doces.|No salgas sin abrigo.=Não saia sem agasalho.|No te automediques.=Não se automedique.|No toque la herida, por favor.=Não toque no machucado, por favor.',
  bd: ['No=N|tomes=V^negativo, tú: -ar → -es|café_por_la_noche.=OA', 'Não tome café à noite.'],
  rule: 'imperativo_neg',
  hw: 'Escreva oito proibições ou advertências de um médico para um paciente: quatro com tú e quatro com usted (no tome, no haga, no vaya…).',
  deep: `
Hoje você aprende a **proibir e advertir**. Aqui o espanhol é diferente do português falado no Brasil.
# Passo 1: a forma negativa
@ V:Afirmativo × negativo;Afirmativo (tú)|¡Toma café!;Negativo (tú)|¡No tomes café!
| Verbo | Afirmativo | Negativo |
| tomar | toma | no tomes |
| comer | come | no comas |
| salir | sal | no salgas |
~ No tomes café por la noche. = Não tome café à noite.
~ No comas tantos dulces. = Não coma tantos doces.
# Passo 2: os irregulares
@ M:Irregulares;Verbo|Negativo tú;hacer|no hagas;ir|no vayas;tener|no tengas;decir|no digas
~ ¡No hagas eso! = Não faça isso!
~ No vayas esta semana. = Não vá esta semana.
# Passo 3: os pronomes vão antes
| Afirmativo | Negativo |
| hazlo | no lo hagas |
| preocúpate | no te preocupes |
| dímelo | no me lo digas |
~ No te preocupes, no es grave. = Não se preocupe, não é grave.
~ No te automediques. = Não se automedique.
# Passo 4: ojo, brasileño: "não toma"
| Português falado | Espanhol |
| não toma | no tomes |
| não faz isso | no hagas eso |
| não vai | no vayas |
~ No salgas sin abrigo. = Não saia sem agasalho.
~ No toque la herida, por favor. = Não toque no machucado, por favor.
! No Brasil dizemos "não **toma**"; em espanhol, "no toma" soa como "ele não toma". O negativo **muda a vogal**: no tom**es**, no com**as**.
> Treine agora: diga a uma criança três coisas que ela não deve fazer.
? "Não tome café" (tú): || No tomes café.
? "Não faça isso": || No hagas eso.
? "Não se preocupe": || No te preocupes.
`,
});

NL('es-emergencia', {
  de: 'Una emergencia', pt: 'Uma emergência', gt: '¡Ayuda! · llame a una ambulancia · se cayó, se desmayó, está sangrando · soy alérgico',
  gx: 'Numa emergência, você precisa de frases curtas: ¡Ayuda! (socorro!), ¡Llame a una ambulancia! (chame uma ambulância!), Se cayó (caiu), Se desmayó (desmaiou), Está sangrando (está sangrando). O número geral em muitos países é o 911, mas confira o do país.',
  ge: '¡Ayuda! ¡Llame a una ambulancia!=Socorro! Chame uma ambulância!|Mi amigo se cayó y no puede caminar.=O meu amigo caiu e não consegue andar.|Es una emergencia.=É uma emergência.',
  v: 'ayuda=socorro, ajuda=🆘|ambulancia=ambulância=🚑|emergencia=emergência=🚨|urgencias=pronto-socorro=🏥|se cayó=caiu=⬇️|se desmayó=desmaiou=😵|sangrar=sangrar=🩸|herida=ferimento, machucado=🩹|respirar=respirar=🫁|seguro médico=plano de saúde=📄',
  x: 'accidente=acidente|quemadura=queimadura|fractura=fratura|tobillo=tornozelo|pulso=pulso|consciente=consciente|policía=polícia|bomberos=bombeiros|dirección=endereço|rápido=rápido',
  dlg: '¡Ayuda, por favor! Un señor se desmayó.=Socorro, por favor! Um senhor desmaiou.|¿Respira?=Ele está respirando?|Sí, pero no contesta.=Sim, mas não responde.|Voy a llamar a una ambulancia. No lo mueva.=Vou chamar uma ambulância. Não o mova.',
  cz: '¡___ a una ambulancia! (chame, usted)=Llame=Llama=Llamé|Mi amigo se ___ y no puede caminar. (cair)=cayó=caió=cae|Lléveme a ___, por favor. (pronto-socorro)=urgencias=emergencia=socorro',
  whys: 'imperativo com usted: llame|caer no indefinido: cayó|pronto-socorro: urgencias',
  pts: 'Pedir ajuda: ¡Ayuda! ¡Llame a una ambulancia! ¡Llame a la policía! Es una emergencia.|Contar o que aconteceu (indefinido): Se cayó. Se desmayó. Se cortó. Tuvo un accidente.|Descrever o estado: Está sangrando. No puede respirar. No contesta. Está consciente.|No hospital: Lléveme a urgencias. Soy alérgica a … Tengo seguro médico.',
  ex: 'Se cortó la mano con un vidrio.=Cortou a mão num vidro.|No puede respirar bien.=Não consegue respirar bem.|Lléveme a urgencias, por favor.=Me leve ao pronto-socorro, por favor.|Tengo seguro médico de viaje.=Tenho seguro de saúde de viagem.',
  bd: ['Mi_amigo=S|se_cayó=V^caer no indefinido: cayó|y_no_puede_caminar.=V', 'O meu amigo caiu e não consegue andar.'],
  rule: 'emergencia',
  hw: 'Escreva duas ligações de emergência curtas (seis falas cada): uma queda e um desmaio, com o que aconteceu, o estado da pessoa e o endereço.',
  deep: `
Hoje você aprende as frases de **emergência**. Tomara que você nunca precise, mas é bom saber.
# Passo 1: pedir ajuda
| Em espanhol | Em português |
| ¡Ayuda! | Socorro! |
| ¡Llame a una ambulancia! | Chame uma ambulância! |
| ¡Llame a la policía! | Chame a polícia! |
~ ¡Ayuda! ¡Llame a una ambulancia! = Socorro! Chame uma ambulância!
~ Es una emergencia. = É uma emergência.
# Passo 2: o que aconteceu
@ P:O que aconteceu;Queda=Se cayó.;Desmaio=Se desmayó.;Corte=Se cortó.;Acidente=Tuvo un accidente.
~ Mi amigo se cayó y no puede caminar. = O meu amigo caiu e não consegue andar.
~ Se cortó la mano con un vidrio. = Cortou a mão num vidro.
# Passo 3: o estado e o hospital
| Em espanhol | Em português |
| Está sangrando. | Está sangrando. |
| No puede respirar. | Não consegue respirar. |
| No contesta. | Não responde. |
~ No puede respirar bien. = Não consegue respirar bem.
~ Lléveme a urgencias, por favor. = Me leve ao pronto-socorro, por favor.
# Passo 4: ojo, brasileño: socorro e urgencias
| Português | Espanhol |
| Socorro! | ¡Ayuda! / ¡Auxilio! |
| pronto-socorro | urgencias |
| plano de saúde | seguro médico |
~ Tengo seguro médico de viaje. = Tenho seguro de saúde de viagem.
! "Socorro" existe, mas o grito natural é **¡Ayuda!** E o pronto-socorro é **urgencias** (sempre no plural).
> Treine agora: peça ajuda e explique que uma pessoa caiu e está sangrando.
? "Socorro!": || ¡Ayuda!
? "Chame uma ambulância!": || ¡Llame a una ambulancia!
? "Pronto-socorro": || urgencias
`,
});

NL('es-faltar', {
  de: 'Un mensaje para faltar', pt: 'Ler e escrever uma mensagem de ausência', gt: 'avisar que vai faltar: no voy a poder ir · me siento mal · justificante · pedir desculpas',
  gx: 'Uma mensagem para avisar que vai faltar junta o módulo: o aviso (Hoy no voy a poder ir al trabajo), o motivo com os sintomas (Me duele mucho la garganta y tengo fiebre), o que o médico disse (El médico me dijo que descanse), a solução (Mañana te mando el informe) e as desculpas (Perdón por las molestias).',
  ge: 'Hoy no voy a poder ir a la oficina.=Hoje não vou poder ir ao escritório.|El médico me dio dos días de reposo.=O médico me deu dois dias de repouso.|Perdón por las molestias.=Desculpe o transtorno.',
  v: 'faltar=faltar=🚫|avisar=avisar=📣|no voy a poder=não vou poder=🙅|me siento mal=estou me sentindo mal=🤒|reposo=repouso=🛌|justificante=atestado=📄|molestias=incômodo, transtorno=😬|reemplazar=substituir=🔄|pendiente=pendente=📌|mejorarse=melhorar=💪',
  x: 'licencia médica=licença médica|cita=consulta|turno=turno|clase=aula|examen=prova|compañeros=colegas|urgente=urgente|recuperarse=se recuperar|cuanto antes=o quanto antes|de todos modos=de qualquer forma',
  dlg: '¿Ya le avisaste a tu jefa?=Você já avisou a sua chefe?|Todavía no. Le voy a mandar un mensaje ahora.=Ainda não. Vou mandar uma mensagem para ela agora.|No te olvides del justificante.=Não esqueça o atestado.|Sí, el médico me lo dio esta mañana.=Sim, o médico me deu hoje de manhã.',
  cz: 'Hoy no ___ a poder ir. (eu vou)=voy=vou=iba|El médico me dio dos días de ___. (repouso)=reposo=repouso=descanso de|Perdón ___ las molestias.=por=para=de',
  whys: 'ir a + infinitivo: voy|repouso: reposo|desculpas por',
  pts: 'O aviso: Hoy no voy a poder ir … / Te escribo para avisarte que …|O motivo: Me siento mal. Me duele … Tengo fiebre. Estoy con gripe.|O médico e a solução: El médico me dio dos días de reposo. Te mando el justificante. Mañana termino el informe.|O fecho: Perdón por las molestias. Gracias por tu comprensión. Espero volver el lunes.',
  ex: 'Te escribo para avisarte que estoy enferma.=Te escrevo para avisar que estou doente.|Te mando el justificante por correo.=Te mando o atestado por e-mail.|Espero volver el lunes.=Espero voltar na segunda.|Gracias por tu comprensión.=Obrigada pela compreensão.',
  bd: ['Hoy=T|no_voy_a_poder=V^ir a + poder: futuro próximo|ir_a_la_oficina.=V', 'Hoje não vou poder ir ao escritório.'],
  rule: 'ausencia',
  le: {
    texto: {
      t: 'Hoy no puedo ir', kind: 'mensagem', voz: 'b',
      intro: 'O Andrés, de Montevidéu, mandou esta mensagem para a chefe dele. Leia e responda.',
      paras: ['Buenos días, Laura. Te escribo para avisarte que hoy no voy a poder ir a la oficina.', 'Anoche empecé a sentirme mal y esta mañana me desperté con fiebre y mucho dolor de garganta.', 'Fui al médico temprano y me dijo que es una infección. Me dio antibióticos y tres días de reposo. Te mando el justificante por correo.', 'La presentación para el cliente ya está casi lista. Se la mandé a Paula para que la termine, porque ella conoce bien el proyecto.', 'Perdón por las molestias. Espero volver el lunes. Un saludo, Andrés.'],
      qs: [
        { q: 'Quando o Andrés começou a se sentir mal?', o: ['na noite anterior', 'há uma semana', 'no trabalho'], a: 0 },
        { q: 'O que o médico disse?', o: ['que é uma infecção', 'que é só cansaço', 'que é alergia'], a: 0 },
        { q: 'Quantos dias de repouso ele tem?', o: ['três', 'dois', 'cinco'], a: 0 },
        { q: 'Quem vai terminar a apresentação?', o: ['a Paula', 'a Laura', 'o próprio Andrés, de casa'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva a sua mensagem', tipo: 'form', ok: 'Mensagem escrita corretamente.',
      pede: 'Escreva uma mensagem para a sua chefe (ou professora) avisando que vai faltar. Uma frase por linha.',
      campos: [
        { l: 'Saudação', d: 'Buenos días, … / Hola, …', re: '^\\s*(¡?hola|buen[oa]s|estimad[oa]|querid[oa])', f: 'iu', err: 'Comece com uma saudação: Buenos días, Laura.' },
        { l: 'O aviso', d: 'Hoy no voy a poder ir …', re: '(no voy a poder|no puedo ir|no podré|avisarte|avisarle|voy a faltar)', f: 'iu', err: 'Avise que vai faltar: Hoy no voy a poder ir a la oficina.', bad: [['\\bno vou\\b', 'Em espanhol, <b>voy</b>: no <b>voy</b> a poder ir.']] },
        { l: 'O motivo', d: 'Me duele … / Tengo fiebre …', re: '(me duele|me duelen|tengo (fiebre|gripe|tos|dolor)|me siento mal|estoy (enferm[oa]|resfriad[oa]))', f: 'iu', err: 'Diga o motivo: Me duele la garganta y tengo fiebre.', bad: [['\\bme duele mi\\b', 'Com partes do corpo, use o artigo: me duele <b>la</b> cabeza.'], ['\\bme duele (los|las) ', 'Com plural, <b>me duelen</b>: me duelen los oídos.']] },
        { l: 'O médico', d: 'El médico me dio …', re: '(médic[oa]|doctor[a]?|reposo|justificante|receta)(?!\\p{L})', f: 'iu', err: 'Fale do médico: El médico me dio dos días de reposo.' },
        { l: 'A solução', d: 'Te mando … / Mañana termino …', re: '(te mando|le mando|mañana|el lunes|ya está|termino|se lo|se la)(?!\\p{L})', f: 'iu', err: 'Proponha uma solução: Mañana te mando el informe.' },
        { l: 'Fecho', d: 'Perdón por las molestias.', re: '(perdón|disculp|gracias por|un saludo|saludos)', f: 'iu', err: 'Feche com desculpas: Perdón por las molestias.', bad: [['\\bperdón para\\b', 'Desculpas levam <b>por</b>: perdón <b>por</b> las molestias.']] },
      ],
      modelo: 'Buenos días, Laura. · Hoy no voy a poder ir a la oficina. · Me duele mucho la cabeza y tengo fiebre. · El médico me dio dos días de reposo. · Mañana te mando el informe. · Perdón por las molestias.',
    },
  },
  hw: 'Escreva uma mensagem completa (oito a dez frases) avisando que vai faltar ao trabalho ou a uma aula, com o motivo, o que o médico disse, uma solução e o fecho.',
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo. Você vai ler a mensagem de um uruguaio e escrever a sua, avisando que vai faltar.
# Passo 1: a estrutura
@ P:Uma mensagem de ausência;Aviso=Hoy no voy a poder ir.;Motivo=Me duele la garganta.;Médico=Me dio tres días de reposo.;Solução=Te mando el informe.;Fecho=Perdón por las molestias.
~ Hoy no voy a poder ir a la oficina. = Hoje não vou poder ir ao escritório.
~ Te escribo para avisarte que estoy enferma. = Te escrevo para avisar que estou doente.
# Passo 2: o motivo e o médico
~ Me duele mucho la garganta. = Estou com muita dor de garganta.
~ El médico me dio dos días de reposo. = O médico me deu dois dias de repouso.
| Em espanhol | Em português |
| el justificante | o atestado |
| la licencia médica | a licença médica |
| el reposo | o repouso |
# Passo 3: a solução
| Em espanhol | Em português |
| Te mando el informe mañana. | Te mando o relatório amanhã. |
| Se lo mandé a Paula. | Mandei para a Paula. |
| Ya está casi listo. | Já está quase pronto. |
~ Te mando el justificante por correo. = Te mando o atestado por e-mail.
BR Na mensagem, mostre que o trabalho não vai parar: é o detalhe que deixa a chefe tranquila.
# Passo 4: o fecho
~ Perdón por las molestias. = Desculpe o transtorno.
~ Gracias por tu comprensión. = Obrigada pela compreensão.
~ Espero volver el lunes. = Espero voltar na segunda.
! **molestia** é incômodo, e não doença: "perdón por las **molestias**" = desculpe o transtorno. **Molestar** é incomodar.
> Agora leia a mensagem do Andrés e escreva a sua.
? "Hoje não vou poder ir": || Hoy no voy a poder ir.
? "Atestado": || justificante
? "Desculpe o transtorno": || Perdón por las molestias.
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('Me duele la cabeza',
  'V:Uma ou várias?;Uma coisa|Me duele la cabeza.;Várias|Me duelen los pies.',
  'P:O corpo;Cabeça=la cabeza;Garganta=la garganta;Costas=la espalda;Estômago=el estómago');
V('En la farmacia',
  'P:Na farmácia;Comprimidos=pastillas;Xarope=jarabe;Pomada=crema;Curativos=curitas',
  'V:Falsos amigos;la receta|a receita;el recibo|o comprovante');
V('Consejos',
  'M:Irregulares;Verbo|Imperativo tú;hacer|haz;ir|ve;tener|ten;venir|ven',
  'V:A vogal troca (usted);-ar → -e|tome;-er / -ir → -a|beba');
V('¡No hagas eso!',
  'V:Afirmativo × negativo;Afirmativo|¡Toma café!;Negativo|¡No tomes café!',
  'M:Irregulares;Verbo|Negativo tú;hacer|no hagas;ir|no vayas;tener|no tengas');
V('Una emergencia',
  'P:O que aconteceu;Queda=Se cayó.;Desmaio=Se desmayó.;Corte=Se cortó.;Acidente=Tuvo un accidente.',
  'M:Pedir ajuda;Espanhol|Português;¡Ayuda!|Socorro!;Llame a una ambulancia.|Chame uma ambulância.;urgencias|pronto-socorro');
V('Un mensaje para faltar',
  'P:Uma mensagem de ausência;Aviso=No voy a poder ir.;Motivo=Me duele …;Solução=Te mando …;Fecho=Perdón por las molestias.',
  'M:No trabalho;Espanhol|Português;el justificante|o atestado;el reposo|o repouso;las molestias|o transtorno');
S_('Me duele la cabeza', 'los pies=os pés|tengo=tenho|y=e|qué te pasa=o que você tem|tienes mala cara=você está com uma cara péssima|mucho=muito|desde cuándo=desde quando|desde ayer=desde ontem|creo que=acho que|es=é|dolo=(erro) dolo|duelo=(erro) duelo|mi=minha|a=a|te duele=dói em você|le duele=dói no senhor|tengo dolor de estómago=estou com dor de estômago|estoy=estou|mareado=tonto, enjoado|cansado=cansado|de tanto trabajar=de tanto trabalhar|aquí=aqui|resfriada=resfriada|dolor=dor|me lavo=lavo|las manos=as mãos|mis manos=minhas mãos|mi cabeza=minha cabeça|constipado=resfriado (Espanha)|los ojos=os olhos|me duele la cabeza=estou com dor de cabeça');
S_('En la farmacia', 'tiene=tem|algo=algo|para=para|el dolor de garganta=a dor de garganta|tome=tome|una=um|ocho horas=oito horas|necesito=preciso de|buenas tardes=boa tarde|la tos=a tosse|sí=sim|este=este|es muy bueno=é muito bom|es para usted=é para a senhora|cómo lo tomo=como eu tomo|una cucharada=uma colher|después de comer=depois de comer|por=por|a=a|todas=todas|receita=(erro) receita|recibo=comprovante|me da=me dá|una caja de=uma caixa de|se vende=é vendido|sin receta=sem receita|tómelo=tome|soy alérgica=sou alérgica|a la penicilina=a penicilina|el dolor=a dor|la fiebre=a febre|el mareo=o enjoo|no más de=não mais de|tres al día=três por dia|tres veces al día=três vezes ao dia|el dolor de cabeza=a dor de cabeça');
S_('Consejos', 'mucha=muita|y=e|este jarabe=este xarope|tres veces al día=três vezes ao dia|al médico=ao médico|si no mejoras=se não melhorar|me siento fatal=estou me sentindo péssima|creo que=acho que|tengo gripe=estou com gripe|pobrecita=coitadinha|un té con miel=um chá com mel|y si=e se|mañana=amanhã|sigo mal=continuo mal|entonces=então|cuidado=cuidado|con el frío=com o frio|tomas=você toma|vai=(erro) vai|va=vai|duerme=durma|abre=abra|descanse=descanse|beba=beba|abra=abra|pon=ponha|di=diga|sal=saia|sé=seja|tómalo=tome isso|dímelo=me diga|todos los días=todos os dias|abríguese=agasalhe-se|bien=bem|paciencia=paciência|a mi casa=à minha casa|te preparo=te preparo|una sopa=uma sopa|acuesta=deita|tomar=tomar|beber=beber|descansar=descansar|dormir=dormir|hacer=fazer|ir=ir|tener=ter|venir=vir|poner=pôr|decir=dizer|salir=sair|ser=ser');
S_('¡No hagas eso!', 'eso=isso|café=café|por la noche=à noite|no te preocupes=não se preocupe|no es grave=não é grave|doctor=doutor|puedo ir=posso ir|al gimnasio=à academia|mañana=amanhã|esta semana=esta semana|necesitas=você precisa de|y puedo trabajar=e posso trabalhar|sí=sim|pero=mas|no levantes=não levante|no te olvides de=não se esqueça de|las pastillas=os comprimidos|tomas=você toma|toma=toma|haces=você faz|haz=faça|preocupas=você se preocupa|preocupa=preocupa|tantos=tantos|sin abrigo=sem agasalho|no te automediques=não se automedique|la herida=o machucado|por favor=por favor|no bebas=não beba|no tengas=não tenha|no pongas=não ponha|no digas=não diga|no vengas=não venha|no seas=não seja|no lo hagas=não faça isso|no me digas=não me diga|no tome=não tome|no coma=não coma|no haga=não faça|no vaya=não vá|come=come|sal=saia|hazlo=faça isso|preocúpate=preocupe-se|dímelo=me diga|no me lo digas=não me diga isso|no toma=(erro) não toma|no hagas eso=não faça isso');
S_('Una emergencia', 'llame=chame|a una ambulancia=uma ambulância|mi amigo=meu amigo|y=e|no puede=não consegue|caminar=andar|es=é|por favor=por favor|un señor=um senhor|respira=respira|sí=sim|pero=mas|no contesta=não responde|voy a llamar=vou chamar|no lo mueva=não o mova|llama=liga|llamé=liguei|caió=(erro) caió|cae=cai|lléveme a=me leve a|socorro=socorro|a la policía=a polícia|se cortó=se cortou|tuvo un accidente=teve um acidente|está sangrando=está sangrando|no puede respirar=não consegue respirar|está consciente=está consciente|soy alérgica a=sou alérgica a|tengo=tenho|la mano=a mão|con un vidrio=num vidro|bien=bem|de viaje=de viagem|auxilio=socorro|911=911|emergencias=emergências');
S_('Un mensaje para faltar', 'hoy=hoje|a la oficina=ao escritório|el médico=o médico|me dio=me deu|dos días de=dois dias de|perdón por=desculpe por|las molestias=o transtorno|le avisaste=você avisou|a tu jefa=a sua chefe|todavía no=ainda não|le voy a mandar=vou mandar para ela|un mensaje=uma mensagem|ahora=agora|no te olvides del=não se esqueça do|sí=sim|me lo dio=me deu|esta mañana=hoje de manhã|vou=(erro) vou|iba=ia|repouso=(erro) repouso|descanso de=descanso de|para=para|de=de|te escribo=te escrevo|para avisarte que=para te avisar que|no voy a poder ir=não vou poder ir|me siento mal=estou me sentindo mal|me duele=dói|tengo fiebre=estou com febre|estoy con gripe=estou com gripe|te mando=te mando|mañana termino=amanhã termino|el informe=o relatório|gracias por=obrigada por|tu comprensión=sua compreensão|espero volver=espero voltar|el lunes=na segunda|estoy enferma=estou doente|por correo=por e-mail|mucho=muito|la garganta=a garganta|se lo mandé=mandei para ele|ya está=já está|casi listo=quase pronto|molestar=incomodar|Laura=Laura|Paula=Paula|Andrés=Andrés|Montevideo=Montevidéu|buenos días=bom dia|anoche=ontem à noite|empecé a=comecei a|sentirme mal=me sentir mal|me desperté=acordei|con fiebre=com febre|y=e|mucho dolor de garganta=muita dor de garganta|fui=fui|temprano=cedo|me dijo que=me disse que|es una infección=é uma infecção|antibióticos=antibióticos|tres días=três dias|la presentación=a apresentação|para el cliente=para o cliente|casi lista=quase pronta|se la mandé=mandei para ela|a Paula=para a Paula|para que la termine=para que ela termine|porque=porque|ella conoce=ela conhece|bien=bem|el proyecto=o projeto|un saludo=um abraço|la cabeza=a cabeça|me duele mucho=dói muito');
['laura', 'paula', 'andrés', 'montevideo'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'es-duele': {
    o: '**doler** funciona como gustar: **me duele la cabeza**, **me duelen los pies**. Sintomas com tener (**tengo fiebre**) e estar (**estoy resfriado**).',
    q: 'No médico, na farmácia ou para explicar por que você não está bem.',
    p: 'Com partes do corpo, use o artigo: **la** cabeza, e não "mi cabeza".',
  },
  'es-farmacia': {
    o: 'Na farmácia: **¿Tiene algo para …?**, **pastillas**, **jarabe**, **curitas**, **cada ocho horas**, **sin receta**.',
    q: 'Para comprar remédios simples em viagem.',
    p: 'É **cada** ocho horas, sem o "a" do português.',
  },
  'es-consejos': {
    o: 'O imperativo afirmativo: com tú, igual à forma de él (**toma**, **bebe**); com usted, a vogal troca (**tome**, **beba**). Irregulares: **haz**, **ve**, **ten**, **ven**.',
    q: 'Para dar conselhos, instruções e receitas.',
    p: 'Os pronomes vão colados no fim: **tómalo**, **acuéstate**.',
  },
  'es-nohagas': {
    o: 'O imperativo negativo: **no tomes**, **no comas**, **no hagas**, **no vayas**. Os pronomes vão antes: **no te preocupes**.',
    q: 'Para proibir, advertir e acalmar alguém.',
    p: 'O nosso "não toma" vira **no tomes**.',
  },
  'es-emergencia': {
    o: 'Emergências: **¡Ayuda!**, **¡Llame a una ambulancia!**, **se cayó**, **se desmayó**, **está sangrando**, **urgencias**.',
    q: 'Para pedir ajuda num momento difícil.',
    p: 'Frases curtas salvam vidas: decore as principais.',
  },
  'es-faltar': {
    o: 'Uma mensagem de ausência: o aviso (**no voy a poder ir**), o motivo, o médico (**reposo**, **justificante**), a solução e o fecho (**Perdón por las molestias**).',
    q: 'Para avisar o trabalho ou a escola que você vai faltar.',
    p: 'Junta tudo do módulo num texto prático.',
  },
});
Object.assign(CZH, {
  'es-duele': ['la cabeza', 'los pies', 'parte do corpo'],
  'es-farmacia': ['objetivo', 'a cada', 'receita médica'],
  'es-consejos': ['tomar, tú', 'tomar, usted', 'ir, tú'],
  'es-nohagas': ['tomar, negativo', 'hacer, negativo', 'preocuparse, negativo'],
  'es-emergencia': ['chame (usted)', 'caer, indefinido', 'pronto-socorro'],
  'es-faltar': ['ir a + poder', 'repouso', 'perdón + ?'],
});
Object.assign(OBJ, {
  'es-duele': { o: 'Consigo dizer onde dói e o que estou sentindo.', a: 'Você consegue explicar a um médico o que está sentindo?', ref: 'Interacción oral · A2' },
  'es-farmacia': { o: 'Consigo comprar remédios simples e entender como tomar.', a: 'Você consegue pedir algo para dor de garganta?', ref: 'Interacción oral · A2' },
  'es-consejos': { o: 'Dou conselhos e instruções com o imperativo.', a: 'Você sabe a diferença entre "toma" e "tome"?', ref: 'Gramática · A2' },
  'es-nohagas': { o: 'Uso o imperativo negativo para proibir e advertir.', a: 'Você sabe por que se diz "no tomes" e não "no toma"?', ref: 'Gramática · A2' },
  'es-emergencia': { o: 'Consigo pedir ajuda numa emergência.', a: 'Você consegue explicar que alguém caiu e precisa de ajuda?', ref: 'Interacción oral · A2' },
  'es-faltar': { o: 'Consigo ler e escrever uma mensagem para faltar.', a: 'Você consegue avisar a chefe que vai faltar, em espanhol?', ref: 'Expresión escrita · A2' },
});
MOD_OBJ[10] = ['Consigo dizer o que estou sentindo.', 'Consigo me virar na farmácia.', 'Dou conselhos e proibições com o imperativo.', 'Consigo escrever uma mensagem para faltar.'];

ES_MODS.push({ lv: 'A2', n: 'A saúde', l: ['es-duele', 'es-farmacia', 'es-consejos', 'es-nohagas', 'es-emergencia', 'es-faltar'] });
