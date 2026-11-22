// Espanhol · B1 · Módulo 21 · Dijo que … (Disse que …). Formato de es/curso.js.

NL('es-dijoque', {
  de: 'Dijo que vendría', pt: 'Contar o que alguém disse', gt: 'dice que + mesmo tempo · dijo que: presente → imperfecto, indefinido → pluscuamperfecto, futuro → condicional',
  gx: 'Para contar o que alguém disse: com dice que (presente), os tempos não mudam: "Estoy cansada" → Dice que está cansada. Com dijo que (passado), os tempos recuam, como em português: "Estoy cansada" → Dijo que estaba cansada; "Fui al cine" → Dijo que había ido; "Vendré" → Dijo que vendría.',
  ge: 'Dice que está muy cansada.=Ela diz que está muito cansada.|Dijo que estaba muy cansada.=Ela disse que estava muito cansada.|Me dijo que vendría a las ocho.=Ele me disse que viria às oito.',
  v: 'decir=dizer=💬|dice que=diz que=🗣️|dijo que=disse que=🗨️|contar=contar=📖|comentar=comentar=💭|estilo indirecto=discurso indireto=🔁|vendría=viria=🚶|había ido=tinha ido=⏪|estaba=estava=📍|iba a=ia=➡️',
  x: 'cansado=cansado|llegar tarde=chegar atrasado|cambiar de planes=mudar de planos|mudarse=se mudar|renunciar=pedir demissão|casarse=se casar|embarazada=grávida|ascender=ser promovido|viajar=viajar|volver=voltar',
  dlg: '¿Hablaste con Lucía? ¿Qué te dijo?=Você falou com a Lucía? O que ela te disse?|Me dijo que estaba cansada del trabajo y que iba a renunciar.=Ela me disse que estava cansada do trabalho e que ia pedir demissão.|¿En serio? ¿Y qué va a hacer?=Sério? E o que ela vai fazer?|Dijo que se mudaría a Madrid el año que viene.=Disse que se mudaria para Madri no ano que vem.',
  cz: 'Dijo que ___ muy cansada. ("Estoy cansada")=estaba=está=estuvo|Me dijo que ___ a las ocho. ("Vendré")=vendría=vendrá=venía|Dijo que ya ___ comido. ("Ya comí")=había=ha=hubo',
  whys: 'presente → imperfecto|futuro → condicional|indefinido → pluscuamperfecto',
  pts: 'dice que + o mesmo tempo da frase original: "Estoy cansada" → Dice que está cansada.|dijo que + os tempos recuam: presente → imperfecto (está → estaba); indefinido e perfecto → pluscuamperfecto (fui, he ido → había ido).|futuro → condicional (vendré → vendría); ir a + infinitivo → iba a (voy a renunciar → iba a renunciar).|Não mudam: o imperfecto, o pluscuamperfecto e o condicional (estaba → estaba).',
  ex: 'Dijo que había ido al médico.=Disse que tinha ido ao médico.|Me contó que iba a casarse.=Me contou que ia se casar.|Dice que no puede venir.=Diz que não pode vir.|Comentó que el hotel era muy caro.=Comentou que o hotel era muito caro.',
  bd: ['Me_dijo=V^passado: os tempos recuam|que_vendría=V^futuro → condicional|a_las_ocho.=T', 'Ele me disse que viria às oito.'],
  rule: 'estilo_ind',
  hw: 'Escreva cinco frases que alguém te disse esta semana (em discurso direto) e passe cada uma para o discurso indireto com dijo que, mudando os tempos.',
  deep: `
Hoje você aprende a **contar o que alguém disse**: o discurso indireto. A boa notícia: as mudanças são as mesmas do português.
# Passo 1: dice que, sem mudança
@ V:Presente;Ela diz|"Estoy cansada.";Discurso indireto|Dice que está cansada.
~ Dice que está muy cansada. = Ela diz que está muito cansada.
~ Dice que no puede venir. = Diz que não pode vir.
# Passo 2: dijo que, os tempos recuam
| Ela disse | Ela disse que … |
| "Estoy cansada." (presente) | estaba cansada (imperfecto) |
| "Fui al médico." (indefinido) | había ido al médico |
| "Vendré." (futuro) | vendría (condicional) |
| "Voy a renunciar." | iba a renunciar |
~ Dijo que estaba muy cansada. = Ela disse que estava muito cansada.
~ Dijo que había ido al médico. = Disse que tinha ido ao médico.
BR É exatamente o que fazemos em português: "estou" → "disse que **estava**"; "vou" → "disse que **ia**"; "virei" → "disse que **viria**".
# Passo 3: futuro e planos
~ Me dijo que vendría a las ocho. = Ele me disse que viria às oito.
~ Me contó que iba a casarse. = Me contou que ia se casar.
@ M:Planos no discurso indireto;Ela disse|Ela disse que …;"Vendré."|vendría;"Voy a casarme."|iba a casarse
# Passo 4: o que não muda
| Original | Discurso indireto |
| "Era caro." | dijo que era caro |
| "Había llovido." | dijo que había llovido |
| "Me gustaría ir." | dijo que le gustaría ir |
~ Comentó que el hotel era muy caro. = Comentou que o hotel era muito caro.
! No discurso indireto, cuidado com os pronomes: "**me** gustaría" → dijo que **le** gustaría; "**mi** casa" → **su** casa.
> Treine agora: conte o que um amigo te disse ontem, com dijo que.
? "Estoy cansada" → Dijo que …: || estaba cansada
? "Vendré" → Dijo que …: || vendría
? "Fui al cine" → Dijo que …: || había ido al cine
`,
});

NL('es-cambios', {
  de: 'Al día siguiente', pt: 'As mudanças de tempo, lugar e pessoa', gt: 'hoy → ese día · mañana → al día siguiente · aquí → allí · este → ese · venir → ir · traer → llevar',
  gx: 'Quando você conta depois o que alguém disse, as palavras de tempo e lugar também mudam: hoy → ese día / aquel día, mañana → al día siguiente, ayer → el día anterior, aquí → allí, este → ese. E os verbos de movimento: venir → ir, traer → llevar. Os pronomes seguem a pessoa: "mi casa" → su casa.',
  ge: 'Dijo: "Mañana vengo aquí". → Dijo que al día siguiente iría allí.=Disse: "Amanhã venho aqui". → Disse que no dia seguinte iria lá.|Me dijo que ese día no podía.=Me disse que naquele dia não podia.|Dijo que había llegado el día anterior.=Disse que tinha chegado no dia anterior.',
  v: 'ese día=naquele dia=📅|al día siguiente=no dia seguinte=⏩|el día anterior=no dia anterior=⏪|esa semana=naquela semana=🗓️|allí=lá, ali=📍|ese, esa=esse, essa=👉|ir=ir=🚶|llevar=levar=🧺|su=seu, dela, dele=👤|le=lhe, a ele, a ela=🗣️',
  x: 'la semana siguiente=a semana seguinte|el mes anterior=o mês anterior|en ese momento=naquele momento|entonces=então|aquel lugar=aquele lugar|esa noche=naquela noite|venir=vir|traer=trazer|mi=meu|tu=seu',
  dlg: 'La semana pasada Pedro me dijo: "Mañana te traigo el libro".=Na semana passada o Pedro me disse: "Amanhã te trago o livro".|¿Y te lo trajo?=E ele trouxe?|No. Me dijo que me lo llevaría al día siguiente, pero nunca apareció.=Não. Ele me disse que me levaria no dia seguinte, mas nunca apareceu.|¡Típico de Pedro!=Típico do Pedro!',
  cz: '"Mañana vengo." → Dijo que ___ iría. (no dia seguinte)=al día siguiente=mañana=el día anterior|"Aquí hace frío." → Dijo que ___ hacía frío. (lá)=allí=aquí=acá|"Te traigo el libro." → Dijo que me lo ___. (levaria)=llevaría=traería=trajo',
  whys: 'mañana → al día siguiente|aquí → allí|traer → llevar (outro lugar)',
  pts: 'Tempo: hoy → ese día; mañana → al día siguiente; ayer → el día anterior; la semana que viene → la semana siguiente; ahora → en ese momento.|Lugar: aquí → allí; este → ese / aquel.|Movimento: venir → ir; traer → llevar (quando a pessoa já não está no mesmo lugar).|Pessoa: os pronomes e possessivos mudam: "mi casa" → su casa; "te llamo" → me dijo que me llamaría.',
  ex: 'Me dijo que en ese momento estaba ocupada.=Me disse que naquele momento estava ocupada.|Dijo que la semana siguiente se mudaba.=Disse que na semana seguinte ia se mudar.|Me explicó que su casa estaba lejos.=Me explicou que a casa dela ficava longe.|Prometió que me llamaría esa noche.=Prometeu que me ligaria naquela noite.',
  bd: ['Dijo_que=V^passado|al_día_siguiente=T^mañana → al día siguiente|iría_allí.=V^venir → ir, aquí → allí', 'Disse que no dia seguinte iria lá.'],
  rule: 'cambios_ind',
  hw: 'Transforme seis frases ditas na semana passada (com hoy, mañana, aquí, este, venir, traer) em discurso indireto, mudando tempo, lugar e pessoa.',
  deep: `
Hoje você aprende as **mudanças de tempo, lugar e pessoa** no discurso indireto.
# Passo 1: o tempo
| Original | Contado depois |
| hoy | ese día |
| mañana | al día siguiente |
| ayer | el día anterior |
| ahora | en ese momento |
~ Me dijo que ese día no podía. = Me disse que naquele dia não podia.
~ Dijo que había llegado el día anterior. = Disse que tinha chegado no dia anterior.
# Passo 2: o lugar
@ M:Lugar;Original|Contado depois;aquí|allí;este|ese;esta casa|esa casa
~ Dijo que allí hacía mucho frío. = Disse que lá fazia muito frio.
~ Me dijo que en ese momento estaba ocupada. = Me disse que naquele momento estava ocupada.
# Passo 3: venir e traer
@ V:Movimento;Original|"Mañana vengo y te traigo el libro.";Contado depois|Dijo que iría y me llevaría el libro.
~ Me dijo que me lo llevaría al día siguiente. = Ele me disse que me levaria no dia seguinte.
BR Em espanhol, **venir** e **traer** são sempre "para onde eu estou". Se a pessoa já não está lá, viram **ir** e **llevar**.
# Passo 4: a pessoa
| Original | Contado depois |
| "mi casa" | su casa |
| "te llamo" | me dijo que me llamaría |
| "me gusta" | dijo que le gustaba |
~ Me explicó que su casa estaba lejos. = Me explicou que a casa dela ficava longe.
~ Prometió que me llamaría esa noche. = Prometeu que me ligaria naquela noite.
! **su** pode ser "dele", "dela", "deles" ou "seu". Se ficar ambíguo, use **de él** / **de ella**: la casa **de ella**.
> Treine agora: conte o que alguém te disse ontem sobre amanhã, mudando as palavras de tempo.
? mañana → ? || al día siguiente
? aquí → ? || allí
? traer → ? (outro lugar) || llevar
`,
});

NL('es-mepregunto', {
  de: 'Me preguntó si …', pt: 'Perguntas indiretas', gt: 'preguntar si · qué, dónde, cuándo, cómo, por qué (com acento) · ¿sabes dónde …? · ordem direta',
  gx: 'Para contar uma pergunta: se a pergunta é de sim ou não, use si: "¿Vienes?" → Me preguntó si iba. Se tem pronome interrogativo, ele fica (com acento): "¿Dónde vives?" → Me preguntó dónde vivía. Também para perguntar com educação: ¿Sabes dónde está la estación? ¿Me puede decir qué hora es?',
  ge: 'Me preguntó si quería ir a la fiesta.=Ele me perguntou se eu queria ir à festa.|Le pregunté dónde vivía.=Perguntei onde ela morava.|¿Sabe a qué hora sale el tren?=O senhor sabe a que horas sai o trem?',
  v: 'preguntar=perguntar=❓|si=se (pergunta)=🔀|qué=o que, que=❔|dónde=onde=📍|cuándo=quando=🕐|cómo=como=🔧|por qué=por que=🤔|cuánto=quanto=💲|quién=quem=👤|no sé si=não sei se=🤷',
  x: 'querer saber=querer saber|averiguar=descobrir|recepcionista=recepcionista|horario=horário|precio=preço|salida=saída|llegada=chegada|dirección=endereço|disponible=disponível|confirmar=confirmar',
  dlg: '¿Qué te preguntó el recepcionista?=O que o recepcionista te perguntou?|Me preguntó si tenía reserva y cuántas noches me quedaba.=Ele me perguntou se eu tinha reserva e quantas noites eu ia ficar.|¿Y tú qué le preguntaste?=E o que você perguntou para ele?|Le pregunté a qué hora era el desayuno y si había wifi.=Perguntei a que horas era o café da manhã e se tinha wi-fi.',
  cz: '"¿Vienes?" → Me preguntó ___ iba.=si=que=se|"¿Dónde vives?" → Le pregunté ___ vivía.=dónde=donde=que dónde|¿Sabe a qué hora ___ el tren? (sair)=sale=sale el=salía',
  whys: 'sim ou não: si|interrogativo com acento: dónde|pergunta indireta no presente: sale',
  pts: 'Sim ou não: preguntar + si: "¿Tienes reserva?" → Me preguntó si tenía reserva.|Com interrogativo: o pronome fica, com acento: qué, dónde, cuándo, cómo, cuánto, quién, por qué: Le pregunté dónde vivía.|Os tempos recuam como em dijo que: "¿Vienes?" → Me preguntó si iba.|Pergunta educada: ¿Sabe …? ¿Me puede decir …? ¿Podría decirme …? + interrogativo + frase na ordem normal.',
  ex: 'Le pregunté a qué hora era el desayuno.=Perguntei a que horas era o café da manhã.|No sé si va a venir.=Não sei se ele vai vir.|¿Me puede decir dónde está la estación?=O senhor pode me dizer onde fica a estação?|Quería saber cuánto costaba.=Queria saber quanto custava.',
  bd: ['Me_preguntó=V^passado|si_quería=C^pergunta de sim ou não: si|ir_a_la_fiesta.=V', 'Ele me perguntou se eu queria ir à festa.'],
  rule: 'pregunta_ind',
  hw: 'Conte uma conversa num hotel, num médico ou numa entrevista: o que te perguntaram e o que você perguntou (seis perguntas indiretas, com si e com interrogativos).',
  deep: `
Hoje você aprende as **perguntas indiretas**: contar uma pergunta e perguntar com educação.
# Passo 1: sim ou não: si
@ V:Pergunta de sim ou não;Direta|"¿Tienes reserva?";Indireta|Me preguntó si tenía reserva.
~ Me preguntó si quería ir a la fiesta. = Ele me perguntou se eu queria ir à festa.
~ No sé si va a venir. = Não sei se ele vai vir.
BR É o nosso "**se**" de pergunta: "perguntou **se** eu queria". Em espanhol, **si** (sem acento).
# Passo 2: com interrogativo
| Direta | Indireta |
| ¿Dónde vives? | Me preguntó dónde vivía. |
| ¿Cuánto cuesta? | Quería saber cuánto costaba. |
| ¿Por qué lloras? | Me preguntó por qué lloraba. |
~ Le pregunté dónde vivía. = Perguntei onde ela morava.
~ Quería saber cuánto costaba. = Queria saber quanto custava.
# Passo 3: perguntar com educação
@ P:Perguntas educadas;Informal=¿Sabes dónde …?;Formal=¿Sabe a qué hora …?;Mais formal=¿Me puede decir …?;Muito formal=¿Podría decirme …?
~ ¿Sabe a qué hora sale el tren? = O senhor sabe a que horas sai o trem?
~ ¿Me puede decir dónde está la estación? = O senhor pode me dizer onde fica a estação?
# Passo 4: o acento fica
| Pergunta indireta | Frase comum |
| No sé dónde vive. | Vive donde trabaja. |
| Me preguntó cuándo llegaba. | Llamo cuando llego. |
~ Le pregunté a qué hora era el desayuno. = Perguntei a que horas era o café da manhã.
! Na pergunta indireta, o interrogativo **mantém o acento**: no sé **dónde**, me preguntó **cuándo**. E não se coloca "que" antes: me preguntó dónde (e não "que dónde").
> Treine agora: pergunte a um desconhecido, com educação, onde fica uma farmácia e a que horas fecha.
? "Perguntou se eu queria": || Me preguntó si quería.
? "Perguntei onde ela morava": || Le pregunté dónde vivía.
? "O senhor sabe a que horas sai o trem?": || ¿Sabe a qué hora sale el tren?
`,
});

NL('es-mepidio', {
  de: 'Me pidió que la llamara', pt: 'Pedidos e ordens no discurso indireto', gt: 'dice que + presente do subjuntivo · dijo / pidió que + imperfeito do subjuntivo · decir: informar × mandar',
  gx: 'Para contar um pedido ou uma ordem: se o verbo está no presente, presente do subjuntivo: "Llámame" → Me pide que la llame. No passado, imperfeito do subjuntivo: Me pidió que la llamara. Atenção: decir que + indicativo é informação (Dijo que venía); decir que + subjuntivo é ordem (Dijo que viniera).',
  ge: 'Me pidió que la llamara por la tarde.=Ela me pediu que eu ligasse para ela à tarde.|El médico me dijo que descansara.=O médico me disse para descansar.|Mi jefe dice que lleguemos temprano.=O meu chefe diz para chegarmos cedo.',
  v: 'pedir que=pedir que=🙏|decir que (ordem)=dizer para=📢|recomendar que=recomendar que=👍|aconsejar que=aconselhar que=💡|ordenar que=mandar que=☝️|rogar que=implorar que=🥺|exigir que=exigir que=❗|insistir en que=insistir que=🔁|prohibir que=proibir que=🚫|permitir que=permitir que=✅',
  x: 'descansar=descansar|tomar las pastillas=tomar os comprimidos|traer los documentos=trazer os documentos|apagar el celular=desligar o celular|no llegar tarde=não chegar atrasado|firmar=assinar|esperar=esperar|guardar silencio=fazer silêncio|hacer reposo=fazer repouso|volver la semana siguiente=voltar na semana seguinte',
  dlg: '¿Qué te dijo el médico?=O que o médico te disse?|Me dijo que hiciera reposo y que tomara las pastillas cada ocho horas.=Ele me disse para fazer repouso e tomar os comprimidos a cada oito horas.|¿Y nada más?=E mais nada?|Me pidió que volviera la semana siguiente para otro examen.=Ele me pediu que eu voltasse na semana seguinte para outro exame.',
  cz: 'Me pidió que la ___ por la tarde. (llamar, yo)=llamara=llame=llamaba|El médico me dijo que ___. (descansar, ordem)=descansara=descansaba=descansé|Mi jefe dice que ___ temprano. (llegar, nosotros)=lleguemos=llegamos=llegáramos',
  whys: 'pedido no passado: imperfeito do subjuntivo|ordem no passado: imperfeito do subjuntivo|ordem no presente: presente do subjuntivo',
  pts: 'Presente: me pide / dice que + presente do subjuntivo: "Llámame" → Me pide que la llame.|Passado: me pidió / dijo que + imperfeito do subjuntivo: Me pidió que la llamara.|decir que + indicativo = informação: Dijo que venía (disse que vinha). decir que + subjuntivo = ordem: Dijo que viniera (disse para vir).|Outros verbos: recomendar, aconsejar, exigir, prohibir, permitir que + subjuntivo.',
  ex: 'Me recomendó que tomara más agua.=Me recomendou que eu tomasse mais água.|Nos exigieron que trajéramos los documentos.=Exigiram que trouxéssemos os documentos.|Dijo que venía. / Dijo que viniera.=Disse que vinha. / Disse para vir.|Nos prohibieron que usáramos el celular.=Nos proibiram de usar o celular.',
  bd: ['Me_pidió=V^pedido no passado|que_la_llamara=V^imperfeito do subjuntivo|por_la_tarde.=T', 'Ela me pediu que eu ligasse para ela à tarde.'],
  rule: 'pedido_ind',
  hw: 'Conte o que te pediram ou mandaram fazer nesta semana (médico, chefe, professor, família) em oito frases, com me pidió que, me dijo que, me recomendó que + imperfeito do subjuntivo.',
  deep: `
Hoje você aprende a contar **pedidos e ordens**. Aqui o subjuntivo aparece de novo.
# Passo 1: no presente
@ V:Pedido no presente;Direto|"Llámame.";Indireto|Me pide que la llame.
~ Mi jefe dice que lleguemos temprano. = O meu chefe diz para chegarmos cedo.
# Passo 2: no passado
| Direto | Indireto (passado) |
| "Llámame." | Me pidió que la llamara. |
| "Descansa." | Me dijo que descansara. |
| "Traigan los documentos." | Nos pidió que trajéramos los documentos. |
~ Me pidió que la llamara por la tarde. = Ela me pediu que eu ligasse para ela à tarde.
~ El médico me dijo que descansara. = O médico me disse para descansar.
BR O nosso "disse **para** descansar" vira **me dijo que descansara**. O "para + infinitivo" desses pedidos é **que + subjuntivo**.
# Passo 3: decir, informar ou mandar?
@ V:Decir que;Informação (indicativo)|Dijo que venía.;Ordem (subjuntivo)|Dijo que viniera.
~ Dijo que venía. / Dijo que viniera. = Disse que vinha. / Disse para vir.
# Passo 4: outros verbos
| Verbo | Exemplo |
| recomendar que | Me recomendó que tomara más agua. |
| exigir que | Nos exigieron que trajéramos los documentos. |
| prohibir que | Nos prohibieron que usáramos el celular. |
~ Me recomendó que tomara más agua. = Me recomendou que eu tomasse mais água.
~ Nos prohibieron que usáramos el celular. = Nos proibiram de usar o celular.
! Mesmo regra do Módulo 18: verbo de pedido no **passado** → **imperfeito** do subjuntivo (llamara, descansara).
> Treine agora: conte duas coisas que o médico ou o chefe te pediu da última vez.
? "Ela me pediu que eu ligasse": || Me pidió que la llamara.
? "Disse para vir" (ordem): || Dijo que viniera.
? "Disse que vinha" (informação): || Dijo que venía.
`,
});

NL('es-verbosrelato', {
  de: 'Explicó, aseguró, admitió', pt: 'Os verbos para contar o que foi dito', gt: 'explicar, asegurar, admitir, negar, añadir, quejarse de, prometer, advertir, reconocer · na fala e nas notícias',
  gx: 'Para contar com precisão, não fique só no dijo. Use verbos que mostram como foi dito: explicó (explicou), aseguró (garantiu), admitió (admitiu), negó (negou), añadió (acrescentou), se quejó de (reclamou de), prometió (prometeu), advirtió (avisou, alertou). São muito usados em notícias.',
  ge: 'El ministro aseguró que los precios bajarían.=O ministro garantiu que os preços iam cair.|La empresa admitió que había cometido un error.=A empresa admitiu que tinha cometido um erro.|Mi vecina se quejó de que había mucho ruido.=A minha vizinha reclamou que tinha muito barulho.',
  v: 'explicar=explicar=💬|asegurar=garantir, afirmar=✅|admitir=admitir=🙋|negar=negar=🙅|añadir=acrescentar=➕|quejarse de=reclamar de=😤|prometer=prometer=🤞|advertir=alertar, avisar=⚠️|reconocer=reconhecer=🤝|confesar=confessar=🤫',
  x: 'ministro=ministro|portavoz=porta-voz|empresa=empresa|error=erro|culpa=culpa|retraso=atraso|precios=preços|investigación=investigação|declaraciones=declarações|rueda de prensa=coletiva de imprensa',
  dlg: '¿Viste la rueda de prensa del ministro?=Você viu a coletiva do ministro?|Sí. Aseguró que los precios bajarían el mes que viene.=Vi. Ele garantiu que os preços iam cair no mês que vem.|¿Y admitió algún error?=E admitiu algum erro?|No, negó que hubiera problemas, pero los periodistas no le creyeron.=Não, negou que houvesse problemas, mas os jornalistas não acreditaram nele.',
  cz: 'El ministro ___ que los precios bajarían. (garantiu)=aseguró=garantió=aseguraba|La empresa ___ que había cometido un error. (admitiu)=admitió=admitía=admitió de|Mi vecina se quejó ___ que había ruido.=de=por=con',
  whys: 'garantir: asegurar|admitir: admitió|quejarse de que',
  pts: 'Afirmar: explicar, asegurar, afirmar, comentar, contar, añadir + que + indicativo.|Admitir ou negar: admitir, reconocer, confesar que + indicativo; negar que + subjuntivo (negó que hubiera problemas).|Reclamar e avisar: quejarse de que, advertir que, prometer que (+ condicional no passado).|Nas notícias: según el portavoz, …; el ministro declaró que …; en una rueda de prensa, …',
  ex: 'Explicó que el retraso se debía al tráfico.=Explicou que o atraso se devia ao trânsito.|Negó que hubiera problemas.=Negou que houvesse problemas.|Añadió que la investigación continuaría.=Acrescentou que a investigação continuaria.|Prometió que no volvería a pasar.=Prometeu que não ia acontecer de novo.',
  bd: ['El_ministro=S|aseguró=V^asegurar: garantir|que_los_precios_bajarían.=V^futuro → condicional', 'O ministro garantiu que os preços iam cair.'],
  rule: 'verbos_relato',
  hw: 'Leia uma notícia curta em espanhol (ou em português) e reescreva quatro declarações com verbos variados: aseguró, admitió, negó que, añadió, prometió.',
  deep: `
Hoje você aprende os **verbos de relato**: os que mostram **como** algo foi dito. Eles dão precisão e estilo.
# Passo 1: afirmar e explicar
@ P:Afirmar;Explicar=explicó que …;Garantir=aseguró que …;Acrescentar=añadió que …;Contar=contó que …
~ El ministro aseguró que los precios bajarían. = O ministro garantiu que os preços iam cair.
~ Explicó que el retraso se debía al tráfico. = Explicou que o atraso se devia ao trânsito.
# Passo 2: admitir e negar
| Verbo | Depois vem |
| admitir, reconocer que | indicativo |
| negar que | subjuntivo |
~ La empresa admitió que había cometido un error. = A empresa admitiu que tinha cometido um erro.
~ Negó que hubiera problemas. = Negou que houvesse problemas.
BR **negar que** pede subjuntivo, como em português: "negou que **houvesse**" = negó que **hubiera**.
# Passo 3: reclamar, prometer, alertar
| Em espanhol | Em português |
| se quejó de que … | reclamou que … |
| prometió que … | prometeu que … |
| advirtió que … | alertou que … |
~ Mi vecina se quejó de que había mucho ruido. = A minha vizinha reclamou que tinha muito barulho.
~ Prometió que no volvería a pasar. = Prometeu que não ia acontecer de novo.
# Passo 4: nas notícias
~ Añadió que la investigación continuaría. = Acrescentou que a investigação continuaria.
@ M:Nas notícias;Espanhol|Português;según el portavoz|segundo o porta-voz;declaró que|declarou que;en una rueda de prensa|numa coletiva de imprensa
! "Reclamar" (queixar-se) é **quejarse de**; **reclamar** em espanhol é exigir algo que é seu: reclamar el equipaje.
> Treine agora: reconte uma declaração de um político ou de uma empresa com três verbos diferentes.
? "Garantiu que": || aseguró que
? "Negou que houvesse": || negó que hubiera
? "Reclamou que": || se quejó de que
`,
});

NL('es-recado', {
  de: 'Te cuento lo que dijo', pt: 'Ler e escrever: contar uma conversa', gt: 'discurso indireto completo: afirmações, perguntas, pedidos e verbos de relato numa mensagem',
  gx: 'Uma mensagem para alguém que perdeu uma reunião ou uma conversa junta tudo do módulo: o que foi dito (Dijo que …), as perguntas (Preguntó si …), os pedidos (Pidió que …), as mudanças de tempo (al día siguiente, esa semana) e os verbos de relato (explicó, aseguró, se quejó de).',
  ge: 'La jefa explicó que el proyecto se retrasaría un mes.=A chefe explicou que o projeto ia atrasar um mês.|Preguntó si alguien podía viajar a Lima esa semana.=Perguntou se alguém podia viajar para Lima naquela semana.|Nos pidió que enviáramos los informes antes del viernes.=Nos pediu que enviássemos os relatórios antes de sexta.',
  v: 'reunión=reunião=👥|resumen=resumo=📝|te cuento=te conto=💬|lo que dijo=o que ele disse=🗨️|perderse=perder (um evento)=😕|retrasarse=atrasar=⏰|plazo=prazo=📅|encargarse de=ficar responsável por=👔|al final=no fim=🔚|en resumen=em resumo=📋',
  x: 'proyecto=projeto|cliente=cliente|presupuesto=orçamento|informe=relatório|entrega=entrega|equipo=equipe|viaje=viagem|voluntario=voluntário|tareas=tarefas|próxima reunión=próxima reunião',
  dlg: 'Me perdí la reunión. ¿Qué dijeron?=Perdi a reunião. O que disseram?|La jefa explicó que el proyecto se retrasaría un mes.=A chefe explicou que o projeto ia atrasar um mês.|¿Y pidió algo?=E pediu alguma coisa?|Sí, pidió que enviáramos los informes antes del viernes.=Sim, pediu que enviássemos os relatórios antes de sexta.',
  cz: 'Explicó que el proyecto se ___ un mes. ("se retrasará")=retrasaría=retrasará=retrasara|Preguntó ___ alguien podía viajar.=si=que=se|Nos pidió que ___ los informes. (enviar, nosotros)=enviáramos=enviamos=enviaríamos',
  whys: 'futuro → condicional|pergunta de sim ou não: si|pedido no passado: imperfeito do subjuntivo',
  pts: 'Abertura: Te cuento lo que dijeron en la reunión. / Como te perdiste la reunión, te hago un resumen.|Afirmações com verbos de relato: La jefa explicó que … / El cliente se quejó de que … / Ana aseguró que …|Perguntas e pedidos: Preguntó si … / Quería saber cuándo … / Nos pidió que + imperfeito do subjuntivo.|Fecho: En resumen, … / La próxima reunión es … / Cualquier duda, me dices.',
  ex: 'Te cuento lo que dijeron en la reunión.=Te conto o que disseram na reunião.|El cliente se quejó de que el presupuesto era muy alto.=O cliente reclamou que o orçamento era muito alto.|Ana se ofreció a encargarse del viaje.=A Ana se ofereceu para ficar responsável pela viagem.|Cualquier duda, me dices.=Qualquer dúvida, me fala.',
  bd: ['Nos_pidió=V^pedido no passado|que_enviáramos=V^imperfeito do subjuntivo: nosotros|los_informes.=OA', 'Nos pediu que enviássemos os relatórios.'],
  rule: 'recado',
  le: {
    texto: {
      t: 'Resumen de la reunión', kind: 'mensagem', voz: 'a',
      intro: 'O Martín faltou a uma reunião de trabalho em Santiago, e a colega Fernanda mandou um resumo. Leia e responda.',
      paras: ['Hola, Martín: Como te perdiste la reunión de ayer, te cuento lo más importante.', 'La jefa explicó que el proyecto con el cliente de Lima se retrasaría un mes, porque todavía no habían aprobado el presupuesto.', 'El cliente se quejó de que el precio era muy alto, pero la jefa aseguró que no podíamos bajarlo más.', 'Después preguntó si alguien podía viajar a Lima la semana siguiente. Ana se ofreció, así que ella se encargará del viaje.', 'Por último, nos pidió que enviáramos los informes antes del viernes. En resumen: más plazo, pero más trabajo. Cualquier duda, me dices. Fernanda.'],
      qs: [
        { q: 'Por que o projeto vai atrasar?', o: ['o orçamento ainda não tinha sido aprovado', 'a chefe estava doente', 'faltou equipe'], a: 0 },
        { q: 'Do que o cliente reclamou?', o: ['do preço alto', 'do atraso', 'da qualidade'], a: 0 },
        { q: 'Quem vai viajar para Lima?', o: ['a Ana', 'a Fernanda', 'o Martín'], a: 0 },
        { q: 'O que a chefe pediu a todos?', o: ['enviar os relatórios antes de sexta', 'chegar mais cedo', 'baixar o preço'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva o seu resumo', tipo: 'form', ok: 'Resumo escrito corretamente.',
      pede: 'Um colega perdeu uma reunião (ou uma aula). Conte para ele o que foi dito. Uma frase por linha.',
      campos: [
        { l: 'Abertura', d: 'Te cuento lo que dijeron …', re: '(te cuento|te hago un resumen|te resumo|como te perdiste)', f: 'iu', err: 'Abra a mensagem: Como te perdiste la reunión, te cuento lo más importante.' },
        { l: 'Uma afirmação', d: '… explicó / dijo que …', re: '(explicó|dijo|aseguró|comentó|contó|añadió|admitió) que', f: 'iu', err: 'Conte o que alguém disse: La profesora explicó que …', bad: [['\\b(dijo|explicó|aseguró) que (\\p{L}+ )?(será|va a|es|está|tiene|hay) ', 'No passado, os tempos recuam: dijo que <b>sería</b>, <b>iba a</b>, <b>era</b>, <b>había</b>.']] },
        { l: 'Uma pergunta', d: 'Preguntó si … / Quería saber …', re: '(preguntó|quería saber|quiso saber) (si|qué|dónde|cuándo|cómo|cuánto|quién|por qué|a qué)(?!\\p{L})', f: 'iu', err: 'Conte uma pergunta: Preguntó si alguien podía …', bad: [['\\bpreguntó que (si|dónde|cuándo|qué)\\b', 'Sem "que" antes: preguntó <b>si</b> …, preguntó <b>dónde</b> …']] },
        { l: 'Um pedido', d: 'Nos pidió que …', re: '(pidió|dijo|recomendó|exigió) que (\\p{L}+ )?\\p{L}+(ara|era|áramos|éramos|aran|eran|aras|eras)(?!\\p{L})', f: 'iu', err: 'Conte um pedido com o imperfeito do subjuntivo: Nos pidió que enviáramos …', bad: [['\\bpidió que (\\p{L}+ )?(enviemos|enviamos|traigamos|lleguemos|estudiemos)\\b', 'No passado, o imperfeito do subjuntivo: que <b>enviáramos</b>, <b>trajéramos</b>.']] },
        { l: 'Uma reclamação ou promessa', d: '… se quejó de que / prometió que …', re: '(se quejó|prometió|advirtió|negó|reconoció|admitió)', f: 'iu', err: 'Use outro verbo de relato: El cliente se quejó de que …' },
        { l: 'Fecho', d: 'En resumen, … / Cualquier duda, me dices.', re: '(en resumen|cualquier duda|un abrazo|saludos|nos vemos)', f: 'iu', err: 'Feche: En resumen, … Cualquier duda, me dices.' },
      ],
      modelo: 'Hola, Pedro: como te perdiste la clase, te cuento lo más importante. · La profesora explicó que el examen sería el 10 de junio. · Un compañero preguntó si podíamos usar el diccionario. · La profesora nos pidió que leyéramos dos capítulos. · También advirtió que no aceptaría trabajos tarde. · En resumen, hay que estudiar mucho. Cualquier duda, me dices.',
    },
  },
  hw: 'Escreva um resumo completo (dez a doze frases) de uma reunião, aula ou conversa para alguém que não estava, com afirmações, perguntas, pedidos, mudanças de tempo e três verbos de relato diferentes.',
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo. Você vai ler o resumo de uma reunião em Santiago e escrever o seu.
# Passo 1: a estrutura
@ P:Um resumo de conversa;Abertura=Te cuento lo que dijeron.;Afirmações=Explicó que …;Perguntas=Preguntó si …;Pedidos=Nos pidió que …;Fecho=En resumen, …
~ Te cuento lo que dijeron en la reunión. = Te conto o que disseram na reunião.
# Passo 2: afirmações com verbos de relato
~ La jefa explicó que el proyecto se retrasaría un mes. = A chefe explicou que o projeto ia atrasar um mês.
~ El cliente se quejó de que el presupuesto era muy alto. = O cliente reclamou que o orçamento era muito alto.
| Original | No resumo |
| "Se retrasará." | explicó que se retrasaría |
| "Es muy alto." | se quejó de que era muy alto |
| "No podemos bajarlo." | aseguró que no podíamos bajarlo |
# Passo 3: perguntas e pedidos
~ Preguntó si alguien podía viajar a Lima esa semana. = Perguntou se alguém podia viajar para Lima naquela semana.
~ Nos pidió que enviáramos los informes antes del viernes. = Nos pediu que enviássemos os relatórios antes de sexta.
BR Num resumo, varie os verbos: **explicó**, **aseguró**, **se quejó de**, **preguntó**, **pidió**. Só **dijo** cansa o leitor.
# Passo 4: o fecho
~ Ana se ofreció a encargarse del viaje. = A Ana se ofereceu para ficar responsável pela viagem.
~ Cualquier duda, me dices. = Qualquer dúvida, me fala.
! **Perderse** algo é "perder" um evento: **te perdiste** la reunión = você perdeu a reunião. E **ofrecerse a** + infinitivo = se oferecer para.
> Agora leia o resumo da Fernanda e escreva o seu.
? "Explicou que ia atrasar": || Explicó que se retrasaría.
? "Perguntou se alguém podia": || Preguntó si alguien podía.
? "Nos pediu que enviássemos": || Nos pidió que enviáramos.
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('Dijo que vendría',
  'V:Presente;Ela diz|"Estoy cansada.";Discurso indireto|Dice que está cansada.',
  'M:Os tempos recuam;Original|Dijo que …;estoy|estaba;fui|había ido;vendré|vendría');
V('Al día siguiente',
  'M:Tempo;Original|Contado depois;hoy|ese día;mañana|al día siguiente;ayer|el día anterior',
  'V:Movimento;Original|"Vengo y te traigo el libro.";Contado depois|Iría y me llevaría el libro.');
V('Me preguntó si …',
  'V:Pergunta de sim ou não;Direta|"¿Tienes reserva?";Indireta|Me preguntó si tenía reserva.',
  'P:Perguntas educadas;Informal=¿Sabes dónde …?;Formal=¿Sabe a qué hora …?;Mais formal=¿Me puede decir …?');
V('Me pidió que la llamara',
  'M:Pedidos;Tempo|Subjuntivo;me pide que|presente: llame;me pidió que|imperfeito: llamara',
  'V:Decir que;Informação|Dijo que venía.;Ordem|Dijo que viniera.');
V('Explicó, aseguró, admitió',
  'P:Afirmar;Explicar=explicó que;Garantir=aseguró que;Acrescentar=añadió que;Contar=contó que',
  'M:Depois vem;Verbo|Modo;admitir que|indicativo;negar que|subjuntivo;prometer que|condicional');
V('Te cuento lo que dijo',
  'P:Um resumo;Abertura=Te cuento …;Afirmações=Explicó que …;Perguntas=Preguntó si …;Pedidos=Nos pidió que …',
  'M:No resumo;Original|Contado;"Se retrasará."|se retrasaría;"¿Puedes viajar?"|si podía viajar');
S_('Dijo que vendría', 'dice que=diz que|está=está|muy cansada=muito cansada|dijo que=disse que|estaba=estava|me dijo que=me disse que|vendría=viria|a las ocho=às oito|hablaste con=você falou com|Lucía=Lucía|qué te dijo=o que ela te disse|cansada=cansada|del trabajo=do trabalho|y que=e que|iba a renunciar=ia pedir demissão|en serio=sério|y qué va a hacer=e o que ela vai fazer|se mudaría=se mudaria|a Madrid=para Madri|el año que viene=no ano que vem|estuvo=esteve|vendrá=virá|venía=vinha|había=tinha|ha=tem|hubo=houve|comido=comido|estoy cansada=estou cansada|fui al médico=fui ao médico|había ido=tinha ido|al médico=ao médico|me contó que=me contou que|iba a casarse=ia se casar|no puede venir=não pode vir|comentó que=comentou que|el hotel=o hotel|era muy caro=era muito caro|vendré=virei|voy a renunciar=vou pedir demissão|fui=fui|he ido=fui|era caro=era caro|había llovido=tinha chovido|me gustaría ir=eu gostaria de ir|le gustaría ir=ela gostaria de ir|mi casa=minha casa|su casa=a casa dela|voy a casarme=vou me casar|estoy=estou|al cine=ao cinema|ya comí=já comi|ya=já|había ido al cine=tinha ido ao cinema|estaba cansada=estava cansada');
S_('Al día siguiente', 'dijo=disse|mañana=amanhã|vengo=venho|aquí=aqui|dijo que=disse que|al día siguiente=no dia seguinte|iría=iria|allí=lá|me dijo que=me disse que|ese día=naquele dia|no podía=não podia|había llegado=tinha chegado|el día anterior=no dia anterior|la semana pasada=na semana passada|Pedro=Pedro|me dijo=me disse|te traigo=te trago|el libro=o livro|y te lo trajo=e ele trouxe|no=não|me lo llevaría=me levaria|pero=mas|nunca apareció=nunca apareceu|típico de Pedro=típico do Pedro|acá=aqui|hace frío=faz frio|hacía frío=fazia frio|traería=traria|trajo=trouxe|llevaría=levaria|en ese momento=naquele momento|estaba ocupada=estava ocupada|la semana siguiente=na semana seguinte|se mudaba=ia se mudar|me explicó que=me explicou que|su casa=a casa dela|estaba lejos=ficava longe|prometió que=prometeu que|me llamaría=me ligaria|esa noche=naquela noite|hoy=hoje|ayer=ontem|ahora=agora|este=este|esta casa=esta casa|esa casa=essa casa|mi casa=minha casa|te llamo=te ligo|me gusta=eu gosto|le gustaba=ela gostava|de ella=dela|la casa de ella=a casa dela|la semana que viene=a semana que vem|ese=esse|allí hacía mucho frío=lá fazia muito frio|y me llevaría el libro=e me levaria o livro|iría y me llevaría el libro=iria e me levaria o livro|vengo y te traigo el libro=venho e te trago o livro|y te traigo el libro=e te trago o livro');
S_('Me preguntó si …', 'me preguntó=me perguntou|si=se|quería=eu queria|ir a la fiesta=ir à festa|le pregunté=perguntei a ela|dónde=onde|vivía=morava|sabe=o senhor sabe|a qué hora=a que horas|sale=sai|el tren=o trem|qué te preguntó=o que te perguntou|el recepcionista=o recepcionista|tenía reserva=eu tinha reserva|y cuántas noches=e quantas noites|me quedaba=eu ia ficar|y tú=e você|qué le preguntaste=o que você perguntou para ele|era=era|el desayuno=o café da manhã|y si=e se|había wifi=tinha wi-fi|iba=ia|vienes=você vem|que=que|se=se|donde=onde|que dónde=(erro) que dónde|sale el=sai o|salía=saía|dónde vives=onde você mora|tienes reserva=você tem reserva|no sé si=não sei se|va a venir=ele vai vir|me puede decir=o senhor pode me dizer|dónde está=onde fica|la estación=a estação|quería saber=queria saber|cuánto=quanto|costaba=custava|cuánto cuesta=quanto custa|por qué=por que|lloras=você chora|lloraba=chorava|sabes dónde=você sabe onde|podría decirme=poderia me dizer|vive=mora|donde trabaja=onde trabalha|llamo=ligo|cuando llego=quando chego|cuándo=quando|llegaba=chegava|no sé dónde vive=não sei onde mora|me preguntó cuándo llegaba=me perguntou quando eu chegava');
S_('Me pidió que la llamara', 'me pidió que=me pediu que|la llamara=eu ligasse para ela|por la tarde=à tarde|el médico=o médico|me dijo que=me disse para|descansara=descansar|mi jefe=meu chefe|dice que=diz para|lleguemos=chegarmos|temprano=cedo|qué te dijo=o que ele te disse|hiciera reposo=fazer repouso|y que tomara=e tomar|las pastillas=os comprimidos|cada ocho horas=a cada oito horas|y nada más=e mais nada|volviera=eu voltasse|la semana siguiente=na semana seguinte|para otro examen=para outro exame|llame=ligue|llamaba=ligava|descansaba=descansava|descansé=descansei|llegamos=chegamos|llegáramos=chegássemos|llámame=me liga|me pide que=me pede que|la llame=eu ligue para ela|descansa=descanse|traigan=tragam|los documentos=os documentos|nos pidió que=nos pediu que|trajéramos=trouxéssemos|dijo que venía=disse que vinha|dijo que viniera=disse para vir|me recomendó que=me recomendou que|tomara=eu tomasse|más agua=mais água|nos exigieron que=exigiram que|nos prohibieron que=nos proibiram de|usáramos=usar|el celular=o celular|venía=vinha|viniera=viesse');
S_('Explicó, aseguró, admitió', 'el ministro=o ministro|aseguró que=garantiu que|los precios=os preços|bajarían=iam cair|la empresa=a empresa|admitió que=admitiu que|había cometido=tinha cometido|un error=um erro|mi vecina=minha vizinha|se quejó de que=reclamou que|había=tinha|mucho ruido=muito barulho|viste=você viu|la rueda de prensa=a coletiva de imprensa|del ministro=do ministro|sí=sim|el mes que viene=no mês que vem|y admitió=e admitiu|algún error=algum erro|no=não|negó que=negou que|hubiera=houvesse|problemas=problemas|pero=mas|los periodistas=os jornalistas|no le creyeron=não acreditaram nele|garantió=(erro) garantió|aseguraba=garantia|admitía=admitia|admitió de=(erro) admitió de|de=de|por=por|con=com|explicó que=explicou que|el retraso=o atraso|se debía=se devia|al tráfico=ao trânsito|añadió que=acrescentou que|la investigación=a investigação|continuaría=continuaria|prometió que=prometeu que|no volvería a pasar=não ia acontecer de novo|según el portavoz=segundo o porta-voz|declaró que=declarou que|en una rueda de prensa=numa coletiva de imprensa|contó que=contou que|advirtió que=alertou que|reclamar=exigir|el equipaje=a bagagem|afirmar=afirmar|comentar=comentar|contar=contar|reconocer=reconhecer|confesar=confessar|admitir=admitir|negar=negar|asegurar=garantir|explicar=explicar|añadir=acrescentar|prometer=prometer|advertir=alertar|quejarse de=reclamar de');
S_('Te cuento lo que dijo', 'la jefa=a chefe|explicó que=explicou que|el proyecto=o projeto|se retrasaría=ia atrasar|un mes=um mês|preguntó si=perguntou se|alguien=alguém|podía=podia|viajar=viajar|a Lima=para Lima|esa semana=naquela semana|nos pidió que=nos pediu que|enviáramos=enviássemos|los informes=os relatórios|antes del viernes=antes de sexta|me perdí=perdi|la reunión=a reunião|qué dijeron=o que disseram|y pidió algo=e pediu alguma coisa|sí=sim|pidió que=pediu que|se retrasará=vai atrasar|retrasará=atrasará|retrasara=atrasasse|que=que|se=se|enviamos=enviamos|enviaríamos=enviaríamos|te cuento=te conto|lo que dijeron=o que disseram|en la reunión=na reunião|el cliente=o cliente|se quejó de que=reclamou que|el presupuesto=o orçamento|era muy alto=era muito alto|Ana=Ana|se ofreció a=se ofereceu para|encargarse del viaje=ficar responsável pela viagem|cualquier duda=qualquer dúvida|me dices=me fala|como te perdiste=como você perdeu|te hago un resumen=te faço um resumo|aseguró que=garantiu que|quería saber=queria saber|cuándo=quando|en resumen=em resumo|la próxima reunión=a próxima reunião|es=é|es muy alto=é muito alto|no podemos bajarlo=não podemos baixá-lo|no podíamos bajarlo=não podíamos baixá-lo|hola=olá|Martín=Martín|de ayer=de ontem|lo más importante=o mais importante|con el cliente=com o cliente|de Lima=de Lima|porque=porque|todavía no=ainda não|habían aprobado=tinham aprovado|el precio=o preço|pero=mas|después=depois|preguntó=perguntou|la semana siguiente=na semana seguinte|se ofreció=se ofereceu|así que=então|ella=ela|se encargará del viaje=vai ficar responsável pela viagem|por último=por último|más plazo=mais prazo|pero más trabajo=mas mais trabalho|Fernanda=Fernanda|Pedro=Pedro|la clase=a aula|la profesora=a professora|el examen=a prova|sería=seria|el 10 de junio=em 10 de junho|un compañero=um colega|podíamos=podíamos|usar=usar|el diccionario=o dicionário|nos pidió=nos pediu|leyéramos=lêssemos|dos capítulos=dois capítulos|también=também|advirtió que=alertou que|no aceptaría=não aceitaria|trabajos tarde=trabalhos atrasados|hay que estudiar=é preciso estudar|mucho=muito|te perdiste=você perdeu|perderse=perder (um evento)|ofrecerse a=se oferecer para');
['lucía', 'madrid', 'pedro', 'martín', 'fernanda', 'ana', 'lima', 'santiago'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'es-dijoque': {
    o: 'O discurso indireto: **dice que** + mesmo tempo; **dijo que** + tempos que recuam: **estoy → estaba**, **fui → había ido**, **vendré → vendría**, **voy a → iba a**.',
    q: 'Para contar conversas, recados e notícias.',
    p: 'As mudanças são as mesmas do português.',
  },
  'es-cambios': {
    o: 'As mudanças de tempo (**mañana → al día siguiente**, **hoy → ese día**), lugar (**aquí → allí**), movimento (**venir → ir**, **traer → llevar**) e pessoa (**mi → su**).',
    q: 'Para contar com precisão o que foi dito em outro momento.',
    p: '**venir** e **traer** só para onde você está.',
  },
  'es-mepregunto': {
    o: 'Perguntas indiretas: **preguntó si** (sim ou não) e **preguntó dónde / cuándo / qué** (com acento). E as perguntas educadas: **¿Sabe …?**, **¿Me puede decir …?**',
    q: 'Para contar perguntas e perguntar com educação.',
    p: 'O interrogativo mantém o acento: no sé **dónde**.',
  },
  'es-mepidio': {
    o: 'Pedidos e ordens: **me pide que** + presente do subjuntivo; **me pidió / dijo que** + imperfeito do subjuntivo. **Dijo que venía** (informação) × **dijo que viniera** (ordem).',
    q: 'Para contar o que o médico, o chefe ou a família pediram.',
    p: '"Disse para vir" é **dijo que viniera**.',
  },
  'es-verbosrelato': {
    o: 'Verbos de relato: **explicó**, **aseguró**, **admitió**, **negó que** (+ subjuntivo), **añadió**, **se quejó de que**, **prometió**, **advirtió**.',
    q: 'Para notícias, resumos e conversas mais precisas.',
    p: '"Reclamar" é **quejarse de**.',
  },
  'es-recado': {
    o: 'Um resumo de conversa: **te cuento lo que dijeron**, afirmações com verbos de relato, perguntas com **si**, pedidos com **pidió que** + imperfeito do subjuntivo e o fecho.',
    q: 'Para mensagens de trabalho e para a escrita do DELE B1.',
    p: 'Junta todo o discurso indireto do módulo.',
  },
});
Object.assign(CZH, {
  'es-dijoque': ['estoy → ?', 'vendré → ?', 'comí → ?'],
  'es-cambios': ['mañana → ?', 'aquí → ?', 'traer → ?'],
  'es-mepregunto': ['sim ou não', 'dónde', 'pergunta educada'],
  'es-mepidio': ['llamar, passado', 'descansar, ordem', 'llegar, presente'],
  'es-verbosrelato': ['garantiu', 'admitiu', 'quejarse + ?'],
  'es-recado': ['se retrasará → ?', 'pergunta: ?', 'enviar, nosotros'],
});
Object.assign(OBJ, {
  'es-dijoque': { o: 'Conto o que alguém disse, mudando os tempos.', a: 'Você consegue passar "vendré" para o discurso indireto?', ref: 'Gramática · B1' },
  'es-cambios': { o: 'Mudo tempo, lugar e pessoa no discurso indireto.', a: 'Você sabe o que acontece com "mañana" e "aquí"?', ref: 'Gramática · B1' },
  'es-mepregunto': { o: 'Conto perguntas e pergunto com educação.', a: 'Você consegue contar o que o recepcionista te perguntou?', ref: 'Interacción oral · B1' },
  'es-mepidio': { o: 'Conto pedidos e ordens com o subjuntivo.', a: 'Você sabe a diferença entre "dijo que venía" e "dijo que viniera"?', ref: 'Gramática · B1' },
  'es-verbosrelato': { o: 'Uso verbos de relato variados.', a: 'Você consegue recontar uma notícia com aseguró, negó e admitió?', ref: 'Comprensión de lectura · B1' },
  'es-recado': { o: 'Consigo ler e escrever o resumo de uma conversa.', a: 'Você consegue resumir uma reunião para um colega em espanhol?', ref: 'Expresión escrita · B1' },
});
MOD_OBJ[20] = ['Conto o que alguém disse.', 'Mudo tempos, lugar e pessoa.', 'Conto perguntas e pedidos.', 'Consigo resumir uma conversa por escrito.'];

ES_MODS.push({ lv: 'B1', n: 'Disse que …', l: ['es-dijoque', 'es-cambios', 'es-mepregunto', 'es-mepidio', 'es-verbosrelato', 'es-recado'] });
