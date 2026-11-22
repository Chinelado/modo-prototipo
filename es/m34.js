// Espanhol · C1 · Módulo 34 · Español académico. Formato de es/curso.js.

NL('es-impersonal', {
  de: 'Se observa que…', pt: 'A voz impessoal do texto acadêmico', gt: 'se + verbo (se observa, se analiza) · cabe señalar · conviene destacar · el plural de modéstia',
  gx: 'O texto acadêmico em espanhol evita o "eu": usa o se impessoal (En este trabajo se analiza …, Se observa que …), expressões como cabe señalar que (vale apontar que) e conviene destacar que (convém destacar que), e às vezes o plural de modéstia (Como hemos visto …). O resultado é um tom objetivo e distante.',
  ge: 'En este trabajo se analiza el uso de las redes sociales.=Neste trabalho se analisa o uso das redes sociais.|Cabe señalar que la muestra es pequeña.=Vale apontar que a amostra é pequena.|Como hemos visto, los datos son claros.=Como vimos, os dados são claros.',
  v: 'se analiza=analisa-se=🔬|se observa=observa-se=👁️|cabe señalar=vale apontar=☝️|conviene destacar=convém destacar=🔦|trabajo=trabalho (acadêmico)=📑|muestra=amostra=🧪|objetivo=objetivo=🎯|hipótesis=hipótese=💡|resultado=resultado=📊|investigación=pesquisa=🔍',
  x: 'estudio=estudo|análisis=análise|método=método|encuesta=pesquisa (questionário)|entrevista=entrevista|participante=participante|variable=variável|tabla=tabela|gráfico=gráfico|capítulo=capítulo',
  dlg: '¿Puedo escribir "yo creo" en la tesis?=Posso escrever "eu acho" na tese?|Mejor no. Usa formas impersonales: "se observa", "cabe señalar".=Melhor não. Use formas impessoais: "observa-se", "vale apontar".|¿Y si quiero hablar de lo que hice?=E se eu quiser falar do que fiz?|Entonces di "en este trabajo se analiza" o "hemos analizado".=Então diga "neste trabalho se analisa" ou "analisamos".',
  cz: 'En este trabajo ___ analiza el uso de las redes.=se=si=es|___ señalar que la muestra es pequeña. (vale)=Cabe=Vale=Cabe de|Como ___ visto, los datos son claros. (vimos)=hemos=habemos=vimos de',
  whys: 'se impessoal|cabe señalar = vale apontar|plural de modéstia: hemos visto',
  pts: 'Se impessoal: se analiza, se observa, se propone, se concluye. Com substantivo plural, o verbo concorda: se analizan los datos.|Cabe + infinitivo: cabe señalar, cabe destacar, cabe preguntarse (vale perguntar-se).|Conviene + infinitivo: conviene recordar, conviene matizar. Es preciso / es necesario + infinitivo também.|Plural de modéstia: como hemos visto, a continuación veremos. Evite "yo creo", "en mi opinión" no corpo do texto.',
  ex: 'Se analizan los datos de 2024.=Analisam-se os dados de 2024.|Cabe preguntarse si el método es válido.=Vale perguntar se o método é válido.|Conviene recordar que el estudio es local.=Convém lembrar que o estudo é local.|A continuación veremos los resultados.=A seguir veremos os resultados.',
  bd: ['En_este_trabajo=L|se_analiza=V^se impessoal|el_uso_de_las_redes_sociales.=OA', 'Neste trabalho se analisa o uso das redes sociais.'],
  rule: 'impersonal_ac',
  hw: 'Reescreva em voz impessoal cinco frases do tipo "Eu analisei…", "Eu acho que…" de um trabalho seu (ou inventado).',
  deep: `
Hoje começa o módulo do **espanhol acadêmico**. Primeiro, a **voz impessoal**: escrever sem "eu".
# Passo 1: o se impessoal
@ P:Se impessoal;se analiza=analisa-se;se observa=observa-se;se propone=propõe-se;se concluye=conclui-se
~ En este trabajo se analiza el tema. = Neste trabalho se analisa o tema.
~ Se analizan los datos de 2024. = Analisam-se os dados de 2024.
BR Como no português formal, o verbo concorda com o substantivo: se analiz**a** el dato, se analiz**an** los datos.
# Passo 2: cabe e conviene
| Em espanhol | Em português |
| cabe señalar que | vale apontar que |
| cabe preguntarse si | vale perguntar se |
| conviene recordar que | convém lembrar que |
~ Cabe señalar que la muestra es pequeña. = Vale apontar que a amostra é pequena.
~ Conviene recordar que el estudio es local. = Convém lembrar que o estudo é local.
# Passo 3: o plural de modéstia
@ V:Plural de modéstia;Retomar|Como hemos visto, …;Anunciar|A continuación veremos …
~ Como hemos visto, los datos son claros. = Como vimos, os dados são claros.
~ A continuación veremos los resultados. = A seguir veremos os resultados.
# Passo 4: o que evitar
| Evite | Prefira |
| Yo creo que … | Se puede afirmar que … |
| Yo analicé … | En este trabajo se analiza … |
| Es muy importante … | Cabe destacar … |
~ Se puede afirmar que el método funciona. = Pode-se afirmar que o método funciona.
! Na introdução e na conclusão, alguns textos aceitam o "nosotros": **hemos analizado**. O "yo" quase nunca.
> Treine agora: diga o tema de um trabalho seu começando por "En este trabajo se analiza …".
? "Neste trabalho se analisa": || En este trabajo se analiza
? "Vale apontar que": || Cabe señalar que
? "Como vimos" (plural de modéstia): || Como hemos visto
`,
});

NL('es-cautela', {
  de: 'Podría afirmarse que…', pt: 'Cautela: afirmar sem exagerar', gt: 'condicional de cautela (podría, cabría) · parece que · al parecer · en cierta medida · tiende a · los datos sugieren',
  gx: 'No texto acadêmico, raramente se afirma algo como verdade absoluta. O espanhol atenua com o condicional (podría afirmarse, cabría pensar), com parecer (parece que, al parecer), com quantificadores (en cierta medida, en gran parte), com tender a (tiende a aumentar) e com verbos mais fracos (los datos sugieren / apuntan a).',
  ge: 'Podría afirmarse que el turismo ha cambiado la ciudad.=Poderia afirmar-se que o turismo mudou a cidade.|Los datos sugieren una relación entre ambas variables.=Os dados sugerem uma relação entre as duas variáveis.|En cierta medida, el problema es cultural.=Em certa medida, o problema é cultural.',
  v: 'podría afirmarse=poderia afirmar-se=🤔|cabría pensar=caberia pensar=💭|al parecer=ao que parece=🌫️|en cierta medida=em certa medida=📏|en gran parte=em grande parte=🧩|tender a=tender a=📈|sugerir=sugerir=💡|apuntar a=apontar para=👉|probablemente=provavelmente=🎲|aparentemente=aparentemente=👀',
  x: 'relación=relação|tendencia=tendência|causa=causa|factor=fator|evidencia=evidência|indicio=indício|conclusión=conclusão|limitación=limitação|generalización=generalização|matiz=nuance',
  dlg: 'En el borrador escribiste: "Las redes sociales causan depresión".=No rascunho você escreveu: "As redes sociais causam depressão".|¿Está mal?=Está errado?|Es demasiado fuerte. Mejor: "Los datos sugieren una relación entre redes sociales y depresión".=É forte demais. Melhor: "Os dados sugerem uma relação entre redes sociais e depressão".|Entendido. Y añado "en cierta medida".=Entendi. E acrescento "em certa medida".',
  cz: '___ afirmarse que el turismo ha cambiado la ciudad. (poderia)=Podría=Puede=Podrá|Los datos ___ una relación. (sugerem)=sugieren=sugerén=sugerem|En ___ medida, el problema es cultural.=cierta=cierto=certa',
  whys: 'condicional de cautela|sugerir: sugieren (e → ie)|medida é feminino: cierta',
  pts: 'Condicional de cautela: podría afirmarse, cabría pensar, sería posible, habría que matizar.|Parecer: parece que, al parecer, aparentemente; e verbos fracos: sugerir, apuntar a, indicar.|Quantificadores: en cierta medida, en gran parte, en la mayoría de los casos, hasta cierto punto.|Tender a + infinitivo: Los precios tienden a subir. Evite absolutos (siempre, nunca, todos, demuestra) sem prova.',
  ex: 'Los precios tienden a subir en verano.=Os preços tendem a subir no verão.|Al parecer, la muestra no era representativa.=Ao que parece, a amostra não era representativa.|Hasta cierto punto, la hipótesis se confirma.=Até certo ponto, a hipótese se confirma.|Cabría pensar que hay otros factores.=Caberia pensar que há outros fatores.',
  bd: ['Los_datos=S|sugieren=V^verbo mais fraco que demostrar|una_relación_entre_ambas_variables.=OA', 'Os dados sugerem uma relação entre as duas variáveis.'],
  rule: 'cautela',
  hw: 'Pegue cinco afirmações categóricas de notícias ("X causa Y", "todos os jovens…") e reescreva-as em espanhol com cautela acadêmica.',
  deep: `
Hoje você aprende a **cautela**: dizer o que os dados mostram sem exagerar.
# Passo 1: o condicional de cautela
@ P:Condicional;podría afirmarse=poderia afirmar-se;cabría pensar=caberia pensar;sería posible=seria possível;habría que matizar=seria preciso matizar
~ Podría afirmarse que el turismo cambió la ciudad. = Poderia afirmar-se que o turismo mudou a cidade.
~ Cabría pensar que hay otros factores. = Caberia pensar que há outros fatores.
# Passo 2: verbos mais fracos
| Forte demais | Com cautela |
| demuestra | sugiere, apunta a |
| causa | está relacionado con |
| siempre | en la mayoría de los casos |
~ Los datos sugieren una relación. = Os dados sugerem uma relação.
BR **Sugerir** muda o e: suger**i**mos, mas sug**ie**ren, sug**ie**re. Igual a pref**ie**ren.
# Passo 3: quantificadores
@ M:Medir a afirmação;Expressão|Sentido;en cierta medida|em certa medida;en gran parte|em grande parte;hasta cierto punto|até certo ponto
~ En cierta medida, el problema es cultural. = Em certa medida, o problema é cultural.
~ Hasta cierto punto, la hipótesis se confirma. = Até certo ponto, a hipótese se confirma.
# Passo 4: parecer e tender a
~ Al parecer, la muestra no era representativa. = Ao que parece, a amostra não era representativa.
~ Los precios tienden a subir. = Os preços tendem a subir.
! Cautela não é insegurança: é precisão. Diga exatamente o que os dados permitem dizer.
> Treine agora: transforme "Las redes sociales causan depresión" numa frase com cautela.
? "Os dados sugerem": || Los datos sugieren
? "Em certa medida": || en cierta medida
? "Poderia afirmar-se que": || Podría afirmarse que
`,
});

NL('es-citar', {
  de: 'Según García (2019)…', pt: 'Citar fontes', gt: 'según · de acuerdo con · como señala · afirma / sostiene / plantea que · cita direta e indireta · verbos para citar',
  gx: 'Para citar, o espanhol acadêmico usa según X, de acuerdo con X, como señala X (2019) e verbos que mostram a postura do autor: afirma, sostiene (defende), plantea (propõe), advierte (alerta), cuestiona (questiona). A cita direta vai entre aspas latinas ou comuns; a indireta segue as regras do estilo indireto.',
  ge: 'Según García (2019), el español es la segunda lengua materna del mundo.=Segundo García (2019), o espanhol é a segunda língua materna do mundo.|Como señala Pérez, «la lengua cambia con la sociedad».=Como aponta Pérez, "a língua muda com a sociedade".|López sostiene que el método es insuficiente.=López defende que o método é insuficiente.',
  v: 'según=segundo=📚|de acuerdo con=de acordo com=🤝|como señala=como aponta=☝️|afirmar=afirmar=🗣️|sostener=defender (uma tese)=🛡️|plantear=propor, levantar=💡|advertir=alertar=⚠️|cuestionar=questionar=❓|cita=citação=❝|fuente=fonte=📖',
  x: 'autor=autor|autora=autora|obra=obra|artículo=artigo|revista=revista|página=página|bibliografía=bibliografia|referencia=referência|comillas=aspas|plagio=plágio',
  dlg: '¿Cómo cito a la autora en el trabajo?=Como cito a autora no trabalho?|Puedes decir "según Ruiz (2021)" o "como señala Ruiz".=Você pode dizer "segundo Ruiz (2021)" ou "como aponta Ruiz".|¿Y si no estoy de acuerdo con ella?=E se eu não concordar com ela?|Usa "Ruiz sostiene que …, aunque cabría cuestionar …".=Use "Ruiz defende que …, embora caiba questionar …".',
  cz: '___ García (2019), el español crece. (segundo)=Según=Segundo=Seguido|Como ___ Pérez, la lengua cambia. (aponta)=señala=aponta=señalan|López ___ que el método es insuficiente. (defende)=sostiene=defende=sostene',
  whys: 'segundo = según|señalar: señala|sostener (como tener): sostiene',
  pts: 'Introduzir a fonte: según X (2019), de acuerdo con X, para X, en palabras de X.|Verbos de citação: afirma, señala, sostiene, plantea, advierte, cuestiona, subraya. O verbo mostra a postura do autor.|Cita direta: Como señala Pérez, «…». As aspas latinas « » são comuns na Espanha; as comuns " " também valem.|Cita indireta: o tempo segue o estilo indireto: Pérez afirmó que la lengua cambiaba. E sempre a referência na bibliografia: copiar sem citar é plagio.',
  ex: 'De acuerdo con el informe, el desempleo bajó.=De acordo com o relatório, o desemprego caiu.|En palabras de Ruiz, «leer es resistir».=Nas palavras de Ruiz, "ler é resistir".|La autora advierte que los datos son parciales.=A autora alerta que os dados são parciais.|Algunos estudios cuestionan esta idea.=Alguns estudos questionam essa ideia.',
  bd: ['Según_García_(2019),=L^fonte|el_español=S|es_la_segunda_lengua_materna_del_mundo.=OA', 'Segundo García (2019), o espanhol é a segunda língua materna do mundo.'],
  rule: 'citar',
  hw: 'Escolha um artigo que você leu e escreva três frases citando o autor com três verbos diferentes (afirma, sostiene, advierte).',
  deep: `
Hoje você aprende a **citar fontes** como num trabalho acadêmico.
# Passo 1: introduzir a fonte
@ P:A fonte;según=Según García (2019), …;de acuerdo con=De acuerdo con el informe, …;en palabras de=En palabras de Ruiz, …
~ Según García, el español crece. = Segundo García, o espanhol cresce.
~ De acuerdo con el informe, el desempleo bajó. = De acordo com o relatório, o desemprego caiu.
BR "Segundo" (o autor) em espanhol é **según**. **Segundo** em espanhol é só o número ordinal ou o segundo do relógio.
# Passo 2: verbos que mostram postura
| Verbo | Sentido |
| afirma / señala | neutro |
| sostiene | defende uma tese |
| advierte | alerta |
| cuestiona | questiona |
~ López sostiene que el método es insuficiente. = López defende que o método é insuficiente.
~ La autora advierte que los datos son parciales. = A autora alerta que os dados são parciais.
# Passo 3: cita direta
@ V:Aspas;Espanha|«la lengua cambia»;América Latina|"la lengua cambia"
~ En palabras de Ruiz, «leer es resistir». = Nas palavras de Ruiz, "ler é resistir".
# Passo 4: cita indireta e plágio
~ Pérez afirmó que la lengua cambiaba. = Pérez afirmou que a língua mudava.
~ Algunos estudios cuestionan esta idea. = Alguns estudos questionam essa ideia.
! **Sostener** se conjuga como **tener**: sost**ie**ne, sost**uv**o. E copiar sem citar é **plagio**.
> Treine agora: cite um autor que você conhece com "Como señala …, …".
? "Segundo García": || Según García
? "Defende que": || sostiene que
? "Alerta que": || advierte que
`,
});

NL('es-estructurar', {
  de: 'En primer lugar… en suma', pt: 'Organizar o texto acadêmico', gt: 'introdução, desenvolvimento e conclusão · conectores de ordem · retomar e anunciar · concluir',
  gx: 'O texto acadêmico em espanhol tem marcas claras de organização: para anunciar (El presente trabajo se divide en tres partes), para ordenar (en primer lugar, a continuación, por último), para acrescentar e contrastar (asimismo, por otra parte, no obstante) e para concluir (en suma, en definitiva, a modo de conclusión).',
  ge: 'El presente trabajo se divide en tres partes.=O presente trabalho se divide em três partes.|A continuación se describe el método.=A seguir se descreve o método.|En suma, los resultados confirman la hipótesis.=Em suma, os resultados confirmam a hipótese.',
  v: 'el presente trabajo=o presente trabalho=📑|dividirse en=dividir-se em=🧩|en primer lugar=em primeiro lugar=1️⃣|a continuación=a seguir=➡️|por último=por último=🔚|asimismo=da mesma forma=➕|por otra parte=por outro lado=↔️|no obstante=no entanto=⚖️|en suma=em suma=🧮|a modo de conclusión=à guisa de conclusão=🏁',
  x: 'introducción=introdução|apartado=seção|marco teórico=referencial teórico|metodología=metodologia|discusión=discussão|conclusiones=conclusões|anexo=anexo|índice=sumário|resumen=resumo|palabras clave=palavras-chave',
  dlg: 'Mi trabajo parece una lista de ideas sueltas.=Meu trabalho parece uma lista de ideias soltas.|Te faltan conectores. Empieza anunciando las partes.=Faltam conectores. Comece anunciando as partes.|¿Algo como "El presente trabajo se divide en tres apartados"?=Algo como "O presente trabalho se divide em três seções"?|Exacto. Y al final, "en suma" o "a modo de conclusión".=Exato. E no fim, "em suma" ou "à guisa de conclusão".',
  cz: 'El presente trabajo se divide ___ tres partes.=en=de=por|___ se describe el método. (a seguir)=A continuación=A seguir=En seguida|En ___, los resultados confirman la hipótesis. (suma)=suma=soma=suman',
  whys: 'dividirse en|a seguir = a continuación|em suma = en suma',
  pts: 'Anunciar: El presente trabajo se divide en … / En el primer apartado se … / En el segundo …|Ordenar: en primer lugar, en segundo lugar, a continuación, por último.|Acrescentar e contrastar: asimismo, además, por otra parte; no obstante, sin embargo, ahora bien.|Concluir: en suma, en definitiva, en conclusión, a modo de conclusión, por todo lo expuesto.',
  ex: 'En el primer apartado se presenta el marco teórico.=Na primeira seção se apresenta o referencial teórico.|Por último, se discuten las limitaciones.=Por último, discutem-se as limitações.|Asimismo, se observa un aumento del consumo.=Da mesma forma, observa-se um aumento do consumo.|Por todo lo expuesto, cabe concluir que el plan es viable.=Por tudo o que foi exposto, cabe concluir que o plano é viável.',
  bd: ['En_suma,=C^conector de conclusão|los_resultados=S|confirman_la_hipótesis.=V', 'Em suma, os resultados confirmam a hipótese.'],
  rule: 'estructurar',
  hw: 'Escreva o parágrafo de apresentação de um trabalho imaginário (cinco frases), anunciando as partes com en el primer apartado, a continuación e por último.',
  deep: `
Hoje você aprende a **organizar** um texto acadêmico do começo ao fim.
# Passo 1: anunciar as partes
@ P:A estrutura;Introdução=El presente trabajo se divide en …;Desenvolvimento=En el primer apartado …;Conclusão=A modo de conclusión, …
~ El presente trabajo se divide en tres partes. = O presente trabalho se divide em três partes.
~ En el primer apartado se presenta el marco teórico. = Na primeira seção se apresenta o referencial.
BR "A seguir" é **a continuación**. **En seguida** quer dizer "imediatamente".
# Passo 2: ordenar
| Ordem | Conector |
| primeiro | en primer lugar |
| depois | a continuación |
| fim | por último |
~ A continuación se describe el método. = A seguir se descreve o método.
~ Por último, se discuten las limitaciones. = Por último, discutem-se as limitações.
# Passo 3: acrescentar e contrastar
@ V:Conectores;Acrescentar|asimismo, además, por otra parte;Contrastar|no obstante, sin embargo, ahora bien
~ Asimismo, se observa un aumento del consumo. = Da mesma forma, observa-se um aumento do consumo.
# Passo 4: concluir
~ En suma, los resultados confirman la hipótesis. = Em suma, os resultados confirmam a hipótese.
~ Por todo lo expuesto, el plan es viable. = Por tudo o que foi exposto, o plano é viável.
! **En suma**, **en definitiva** e **a modo de conclusión** fecham o texto. **Finalmente** ordena, não conclui.
> Treine agora: anuncie as três partes de um trabalho sobre a sua cidade.
? "A seguir": || a continuación
? "Em suma": || en suma
? "O presente trabalho se divide em": || El presente trabajo se divide en
`,
});

NL('es-definir', {
  de: 'Se entiende por…', pt: 'Definir, classificar e exemplificar', gt: 'se entiende por · se define como · consiste en · se divide en · a saber · por ejemplo, tal como, es el caso de',
  gx: 'Todo texto acadêmico define seus conceitos. Em espanhol: Se entiende por X … (entende-se por X), X se define como …, X consiste en … Para classificar: se divide en / se distinguen dos tipos. Para exemplificar: por ejemplo, tal como, es el caso de, como muestra.',
  ge: 'Se entiende por bilingüismo el uso habitual de dos lenguas.=Entende-se por bilinguismo o uso habitual de duas línguas.|El método consiste en comparar dos grupos.=O método consiste em comparar dois grupos.|Se distinguen dos tipos de energía: renovable y no renovable.=Distinguem-se dois tipos de energia: renovável e não renovável.',
  v: 'se entiende por=entende-se por=📘|se define como=define-se como=📖|consistir en=consistir em=🧱|dividirse en=dividir-se em=🗂️|distinguir=distinguir=🔀|tipo=tipo=🏷️|a saber=a saber=📋|tal como=tal como=👉|es el caso de=é o caso de=📌|concepto=conceito=💭',
  x: 'definición=definição|categoría=categoria|clasificación=classificação|ejemplo=exemplo|rasgo=traço|característica=característica|término=termo|bilingüismo=bilinguismo|energía=energia|renovable=renovável',
  dlg: '¿Qué es exactamente la economía circular?=O que é exatamente a economia circular?|Se define como un modelo que reutiliza los recursos.=Define-se como um modelo que reutiliza os recursos.|¿Me das un ejemplo?=Você me dá um exemplo?|Es el caso de las empresas que reparan en lugar de tirar.=É o caso das empresas que consertam em vez de jogar fora.',
  cz: 'Se entiende ___ bilingüismo el uso de dos lenguas.=por=como=de|El método consiste ___ comparar dos grupos.=en=de=a|Es el caso ___ las empresas que reparan.=de=del=en',
  whys: 'entender por|consistir en|el caso de',
  pts: 'Definir: Se entiende por X … / X se define como … / X es un … que … / Por X se entiende …|Descrever: X consiste en + infinitivo ou substantivo: consiste en comparar, consiste en un cuestionario.|Classificar: X se divide en … / Se distinguen dos tipos: … / Existen tres clases de …, a saber: …|Exemplificar: por ejemplo, tal como, como es el caso de, un ejemplo claro es …',
  ex: 'Existen tres clases de rocas, a saber: ígneas, sedimentarias y metamórficas.=Existem três classes de rochas, a saber: ígneas, sedimentares e metamórficas.|Un ejemplo claro es el reciclaje de vidrio.=Um exemplo claro é a reciclagem de vidro.|La encuesta consiste en veinte preguntas.=O questionário consiste em vinte perguntas.|Por economía circular se entiende un modelo sin residuos.=Por economia circular entende-se um modelo sem resíduos.',
  bd: ['Se_entiende_por_bilingüismo=V^definição|el_uso_habitual=S|de_dos_lenguas.=OA', 'Entende-se por bilinguismo o uso habitual de duas línguas.'],
  rule: 'definir',
  hw: 'Defina três conceitos da sua área (ou do seu dia a dia) com se entiende por, consiste en e um exemplo com es el caso de.',
  deep: `
Hoje você aprende a **definir, classificar e exemplificar** conceitos.
# Passo 1: definir
@ P:Definir;se entiende por=entende-se por;se define como=define-se como;es un … que=é um … que
~ Se entiende por bilingüismo el uso de dos lenguas. = Entende-se por bilinguismo o uso de duas línguas.
~ Se define como un modelo sin residuos. = Define-se como um modelo sem resíduos.
# Passo 2: consistir en
~ El método consiste en comparar dos grupos. = O método consiste em comparar dois grupos.
~ La encuesta consiste en veinte preguntas. = O questionário consiste em vinte perguntas.
BR Como no português, **consistir en**, mas atenção: em espanhol é **en**, nunca "consistir de".
# Passo 3: classificar
| Em espanhol | Em português |
| se divide en | divide-se em |
| se distinguen dos tipos | distinguem-se dois tipos |
| a saber | a saber |
~ Se distinguen dos tipos de energía. = Distinguem-se dois tipos de energia.
# Passo 4: exemplificar
@ M:Exemplos;Expressão|Uso;por ejemplo|neutro;tal como|dentro da frase;es el caso de|apresenta um caso;un ejemplo claro es|destaca o exemplo
~ Es el caso de las empresas que reparan. = É o caso das empresas que consertam.
~ Un ejemplo claro es el reciclaje de vidrio. = Um exemplo claro é a reciclagem de vidro.
! **A saber** introduz uma lista que detalha o que foi dito: tres clases, **a saber**: …
> Treine agora: defina "una ciudad sostenible" com se entiende por e dê um exemplo.
? "Entende-se por": || Se entiende por
? "Consiste em comparar": || consiste en comparar
? "É o caso de": || es el caso de
`,
});

NL('es-resumen', {
  de: 'El resumen de un artículo', pt: 'Ler e escrever: o resumo acadêmico', gt: 'resumo (abstract): objetivo, método, resultados, conclusão, palavras-chave',
  gx: 'O resumo de um artigo científico tem partes fixas: objetivo (El objetivo de este estudio es …), método (Para ello, se realizó …), resultados (Los resultados muestran / sugieren …), conclusão (Se concluye que …) e palavras-chave. Você lê o resumo de um estudo chileno sobre leitura e escreve o seu.',
  ge: 'El objetivo de este estudio es analizar los hábitos de lectura.=O objetivo deste estudo é analisar os hábitos de leitura.|Para ello, se realizó una encuesta a 500 estudiantes.=Para isso, foi feita uma pesquisa com 500 estudantes.|Se concluye que la lectura digital no sustituye a la impresa.=Conclui-se que a leitura digital não substitui a impressa.',
  v: 'resumen=resumo=📝|objetivo=objetivo=🎯|para ello=para isso=🛠️|realizar=realizar=⚙️|mostrar=mostrar=📊|concluir=concluir=🏁|palabras clave=palavras-chave=🔑|hábito=hábito=🔁|lectura=leitura=📖|estudiante=estudante=🎓',
  x: 'impreso=impresso|digital=digital|pantalla=tela|comprensión=compreensão|universidad=universidade|muestra=amostra|cuestionario=questionário|porcentaje=porcentagem|diferencia=diferença|propuesta=proposta',
  dlg: '¿Cuántas palabras tiene que tener el resumen?=Quantas palavras o resumo tem que ter?|Unas doscientas. Y nada de opiniones personales.=Umas duzentas. E nada de opiniões pessoais.|¿Escribo en pasado o en presente?=Escrevo no passado ou no presente?|El método, en pasado: "se realizó". El objetivo y la conclusión, en presente.=O método, no passado: "foi feita". O objetivo e a conclusão, no presente.',
  cz: 'El objetivo de este estudio ___ analizar los hábitos. (é)=es=está=ser|Para ___, se realizó una encuesta. (isso)=ello=eso de=él|Se ___ que la lectura digital no sustituye a la impresa. (conclui-se)=concluye=conclui=concluí',
  whys: 'objetivo + es + infinitivo|para ello = para isso|se impessoal: se concluye',
  pts: 'Objetivo, em presente: El objetivo de este estudio es + infinitivo / Este trabajo tiene como objetivo …|Método, em passado: Para ello, se realizó / se analizaron / se entrevistó a …|Resultados com cautela: Los resultados muestran / sugieren / indican que …|Conclusão e palavras-chave: Se concluye que … / Estos resultados permiten … Palabras clave: lectura, …',
  ex: 'Este trabajo tiene como objetivo describir el problema.=Este trabalho tem como objetivo descrever o problema.|Se entrevistó a veinte docentes.=Foram entrevistados vinte docentes.|Los resultados indican una diferencia significativa.=Os resultados indicam uma diferença significativa.|Estos resultados permiten replantear las políticas de lectura.=Esses resultados permitem repensar as políticas de leitura.',
  bd: ['Para_ello,=C^ligação com o objetivo|se_realizó=V^se impessoal, passado|una_encuesta_a_500_estudiantes.=OA', 'Para isso, foi feita uma pesquisa com 500 estudantes.'],
  rule: 'resumen_ac',
  le: {
    texto: {
      t: 'Resumen: «¿Pantalla o papel? Hábitos de lectura en universitarios chilenos»', kind: 'resumo de artigo', voz: 'a',
      intro: 'O resumo de um artigo publicado por pesquisadoras de uma universidade de Santiago do Chile. Leia e responda.',
      paras: ['El objetivo de este estudio es analizar los hábitos de lectura de los estudiantes universitarios en formato digital e impreso.', 'Para ello, se realizó una encuesta a 500 estudiantes de tres universidades de Santiago y se entrevistó a veinte docentes.', 'Los resultados muestran que el 70 % lee principalmente en pantalla. No obstante, la comprensión de textos largos tiende a ser mayor en papel.', 'Se concluye que la lectura digital no sustituye a la impresa, sino que la complementa. Estos resultados permiten replantear el uso de materiales en la universidad.', 'Palabras clave: lectura, formato digital, comprensión, educación superior.'],
      qs: [
        { q: 'Qual é o objetivo do estudo?', o: ['analisar os hábitos de leitura digital e impressa de universitários', 'vender livros', 'comparar universidades'], a: 0 },
        { q: 'Que método foi usado?', o: ['uma pesquisa com 500 estudantes e entrevistas com 20 docentes', 'um experimento em laboratório', 'só entrevistas'], a: 0 },
        { q: 'O que acontece com textos longos?', o: ['a compreensão tende a ser maior no papel', 'são mais lidos na tela', 'ninguém os lê'], a: 0 },
        { q: 'Qual é a conclusão?', o: ['a leitura digital complementa a impressa', 'o papel vai desaparecer', 'a tela é melhor em tudo'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva o seu resumo', tipo: 'form', ok: 'Resumo escrito corretamente.',
      pede: 'Escreva o resumo de um estudo (real ou imaginário) sobre um tema que você conhece. Uma frase por linha.',
      campos: [
        { l: 'Objetivo', d: 'El objetivo de este estudio es …', re: '(el objetivo|tiene como objetivo|se propone|pretende)', f: 'iu', err: 'Comece pelo objetivo: El objetivo de este estudio es + infinitivo.', bad: [['el objetivo de este (estudio|trabajo) es de(?!\\p{L})', 'Sem "de": El objetivo … <b>es analizar</b>.']] },
        { l: 'Método', d: 'Para ello, se realizó …', re: '(para ello|se realizó|se realizaron|se analizó|se analizaron|se entrevistó|se aplicó|se comparó|se comparan|se analizan)', f: 'iu', err: 'Diga o método no passado, com se: Para ello, se realizó …' },
        { l: 'Resultados', d: 'Los resultados muestran / sugieren que …', re: '(los resultados|los datos) (\\p{L}+ )?(muestran|sugieren|indican|apuntan|revelan|confirman)', f: 'iu', err: 'Apresente os resultados: Los resultados muestran que …', bad: [['los resultados (demuestran|prueban) que (todos|siempre|nunca)', 'Cuidado com o absoluto: prefira <b>sugieren</b> ou <b>indican</b>.']] },
        { l: 'Cautela', d: 'tiende a … / en cierta medida …', re: '(tiende|tienden|en cierta medida|en gran parte|parece|podría|cabría|al parecer|hasta cierto punto|no obstante)', f: 'iu', err: 'Atenue um resultado: … tiende a … / En cierta medida, …' },
        { l: 'Conclusão', d: 'Se concluye que …', re: '(se concluye|en suma|en conclusión|estos resultados permiten|en definitiva)', f: 'iu', err: 'Conclua: Se concluye que …' },
        { l: 'Palavras-chave', d: 'Palabras clave: …', re: 'palabras clave', f: 'iu', err: 'Termine com: Palabras clave: …' },
      ],
      modelo: 'El objetivo de este estudio es analizar el uso del transporte público en Curitiba. · Para ello, se realizó una encuesta a 300 usuarios. · Los resultados muestran que el 60 % usa el autobús todos los días. · No obstante, la satisfacción tiende a ser baja en las horas pico. · Se concluye que es necesario aumentar la frecuencia. · Palabras clave: transporte, movilidad, ciudad.',
    },
  },
  hw: 'Encontre o resumo de um artigo em espanhol (Google Acadêmico, SciELO ou Redalyc) e marque nele o objetivo, o método, os resultados e a conclusão.',
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo acadêmico. Você vai ler o resumo de um estudo chileno e escrever o seu.
# Passo 1: as partes do resumo
@ P:Resumo;Objetivo=El objetivo de este estudio es …;Método=Para ello, se realizó …;Resultados=Los resultados muestran …;Conclusão=Se concluye que …;Palavras-chave=Palabras clave: …
~ El objetivo de este estudio es analizar la lectura. = O objetivo deste estudo é analisar a leitura.
# Passo 2: os tempos verbais
| Parte | Tempo |
| objetivo | presente: es, tiene como objetivo |
| método | passado: se realizó, se entrevistó |
| conclusão | presente: se concluye |
~ Para ello, se realizó una encuesta. = Para isso, foi feita uma pesquisa.
~ Se entrevistó a veinte docentes. = Foram entrevistados vinte docentes.
BR Com pessoas, o se impessoal leva **a** e fica no singular: **se entrevistó a** veinte docentes.
# Passo 3: resultados com cautela
~ Los resultados muestran una diferencia clara. = Os resultados mostram uma diferença clara.
~ La comprensión tiende a ser mayor en papel. = A compreensão tende a ser maior no papel.
@ V:Resultados;Forte demais|Los resultados demuestran que siempre …;Com cautela|Los resultados sugieren que …
# Passo 4: conclusão e palavras-chave
~ Se concluye que la lectura digital complementa a la impresa. = Conclui-se que a leitura digital complementa a impressa.
~ Palabras clave: lectura, comprensión, universidad. = Palavras-chave: leitura, compreensão, universidade.
! Bases como **SciELO** e **Redalyc** têm milhares de artigos acadêmicos em espanhol, gratuitos.
> Agora leia o resumo do estudo e escreva o seu.
? "Para isso, foi feita uma pesquisa": || Para ello, se realizó una encuesta.
? "Conclui-se que": || Se concluye que
? "Foram entrevistados vinte docentes": || Se entrevistó a veinte docentes.
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('Se observa que…',
  'P:Voz impessoal;se analiza=analisa-se;cabe señalar=vale apontar;conviene recordar=convém lembrar;como hemos visto=como vimos',
  'M:O que evitar;Evite|Prefira;Yo creo que …|Se puede afirmar que …;Yo analicé …|En este trabajo se analiza …');
V('Podría afirmarse que…',
  'P:Cautela;Condicional=podría afirmarse;Verbo fraco=los datos sugieren;Quantificador=en cierta medida;Tendência=tiende a',
  'M:Forte demais ou com cautela;Forte|Com cautela;demuestra|sugiere;causa|está relacionado con;siempre|en la mayoría de los casos');
V('Según García (2019)…',
  'P:Citar;Fonte=Según García (2019), …;Verbo=sostiene, advierte, cuestiona;Cita direta=En palabras de Ruiz, «…»',
  'M:Verbos de citação;Verbo|Postura;afirma|neutro;sostiene|defende;advierte|alerta;cuestiona|questiona');
V('En primer lugar… en suma',
  'P:A estrutura;Anunciar=se divide en …;Ordenar=en primer lugar, a continuación;Acrescentar=asimismo;Concluir=en suma',
  'V:Conectores;Acrescentar|asimismo, además, por otra parte;Contrastar|no obstante, sin embargo, ahora bien');
V('Se entiende por…',
  'P:Definir;se entiende por=entende-se por;se define como=define-se como;consiste en=consiste em',
  'M:Exemplos;Expressão|Uso;por ejemplo|neutro;es el caso de|apresenta um caso;a saber|introduz uma lista');
V('El resumen de un artículo',
  'P:Resumo;Objetivo=El objetivo … es;Método=Para ello, se realizó;Resultados=muestran / sugieren;Conclusão=Se concluye que',
  'M:Tempos verbais;Parte|Tempo;objetivo|presente;método|passado;conclusão|presente');
S_('Se observa que…', 'en este trabajo=neste trabalho|se analiza=se analisa|el uso de las redes sociales=o uso das redes sociais|cabe señalar que=vale apontar que|la muestra es pequeña=a amostra é pequena|como hemos visto=como vimos|los datos son claros=os dados são claros|puedo escribir=posso escrever|yo creo=eu acho|en la tesis=na tese|mejor no=melhor não|usa formas impersonales=use formas impessoais|se observa=observa-se|y si quiero hablar=e se eu quiser falar|de lo que hice=do que fiz|entonces di=então diga|o hemos analizado=ou analisamos|si=se|es=é|cabe=cabe|vale=(erro) vale|cabe de=(erro) cabe de|hemos=vimos (haber)|habemos=(erro) habemos|vimos de=(erro) vimos de|el uso de las redes=o uso das redes|se analizan los datos=analisam-se os dados|de 2024=de 2024|cabe preguntarse si=vale perguntar se|el método es válido=o método é válido|conviene recordar que=convém lembrar que|el estudio es local=o estudo é local|a continuación veremos=a seguir veremos|los resultados=os resultados|se propone=propõe-se|se concluye=conclui-se|el tema=o tema|se puede afirmar que=pode-se afirmar que|el método funciona=o método funciona|yo creo que=eu acho que|yo analicé=eu analisei|es muy importante=é muito importante|cabe destacar=cabe destacar|en mi opinión=na minha opinião|es preciso=é preciso|es necesario=é necessário|conviene matizar=convém matizar|nosotros=nós|hemos analizado=analisamos');
S_('Podría afirmarse que…', 'podría afirmarse que=poderia afirmar-se que|el turismo=o turismo|ha cambiado la ciudad=mudou a cidade|cambió la ciudad=mudou a cidade|los datos sugieren=os dados sugerem|una relación=uma relação|entre ambas variables=entre as duas variáveis|en cierta medida=em certa medida|el problema es cultural=o problema é cultural|en el borrador escribiste=no rascunho você escreveu|las redes sociales=as redes sociais|causan depresión=causam depressão|está mal=está errado|es demasiado fuerte=é forte demais|mejor=melhor|entre redes sociales y depresión=entre redes sociais e depressão|entendido=entendi|y añado=e acrescento|puede=pode|podrá=poderá|sugieren=sugerem|sugerén=(erro) sugerén|sugerem=(erro) sugerem|cierta=certa|cierto=certo|certa=(erro) certa|los precios=os preços|tienden a subir=tendem a subir|en verano=no verão|al parecer=ao que parece|la muestra=a amostra|no era representativa=não era representativa|hasta cierto punto=até certo ponto|la hipótesis se confirma=a hipótese se confirma|cabría pensar que=caberia pensar que|hay otros factores=há outros fatores|sería posible=seria possível|habría que matizar=seria preciso matizar|demuestra=demonstra|sugiere=sugere|apunta a=aponta para|causa=causa|está relacionado con=está relacionado com|siempre=sempre|en la mayoría de los casos=na maioria dos casos|en gran parte=em grande parte|sugerimos=sugerimos|prefieren=preferem|nunca=nunca|todos=todos|indicar=indicar');
S_('Según García (2019)…', 'según García=segundo García|el español=o espanhol|es la segunda lengua materna del mundo=é a segunda língua materna do mundo|como señala Pérez=como aponta Pérez|la lengua cambia=a língua muda|con la sociedad=com a sociedade|López sostiene que=López defende que|el método es insuficiente=o método é insuficiente|cómo cito a la autora=como cito a autora|en el trabajo=no trabalho|puedes decir=você pode dizer|según Ruiz=segundo Ruiz|o como señala Ruiz=ou como aponta Ruiz|y si no estoy de acuerdo con ella=e se eu não concordar com ela|usa=use|Ruiz sostiene que=Ruiz defende que|aunque cabría cuestionar=embora caiba questionar|según=segundo|segundo=(erro) segundo|seguido=seguido|el español crece=o espanhol cresce|señala=aponta|aponta=(erro) aponta|señalan=apontam|sostiene=defende|defende=(erro) defende|sostene=(erro) sostene|de acuerdo con el informe=de acordo com o relatório|el desempleo bajó=o desemprego caiu|en palabras de Ruiz=nas palavras de Ruiz|leer es resistir=ler é resistir|la autora advierte que=a autora alerta que|los datos son parciales=os dados são parciais|algunos estudios=alguns estudos|cuestionan esta idea=questionam essa ideia|Pérez afirmó que=Pérez afirmou que|la lengua cambiaba=a língua mudava|afirma=afirma|plantea=propõe|advierte=alerta|cuestiona=questiona|subraya=sublinha|para=para|sostuvo=defendeu|plagio=plágio');
S_('En primer lugar… en suma', 'el presente trabajo=o presente trabalho|se divide en tres partes=se divide em três partes|a continuación=a seguir|se describe el método=se descreve o método|en suma=em suma|los resultados confirman la hipótesis=os resultados confirmam a hipótese|mi trabajo parece=meu trabalho parece|una lista de ideas sueltas=uma lista de ideias soltas|te faltan conectores=faltam conectores|empieza anunciando las partes=comece anunciando as partes|algo como=algo como|se divide en tres apartados=se divide em três seções|exacto=exato|y al final=e no fim|o a modo de conclusión=ou à guisa de conclusão|en=em|de=de|por=por|a seguir=(erro) a seguir|en seguida=imediatamente|suma=suma|soma=(erro) soma|suman=somam|en el primer apartado=na primeira seção|se presenta el marco teórico=se apresenta o referencial teórico|por último=por último|se discuten las limitaciones=discutem-se as limitações|asimismo=da mesma forma|se observa un aumento del consumo=observa-se um aumento do consumo|por todo lo expuesto=por tudo o que foi exposto|cabe concluir que=cabe concluir que|el plan es viable=o plano é viável|en primer lugar=em primeiro lugar|en segundo lugar=em segundo lugar|además=além disso|por otra parte=por outro lado|no obstante=no entanto|sin embargo=no entanto|ahora bien=porém|en definitiva=em definitivo|en conclusión=em conclusão|finalmente=finalmente|el marco teórico=o referencial teórico|en el segundo=no segundo');
S_('Se entiende por…', 'se entiende por=entende-se por|bilingüismo=bilinguismo|el uso habitual de dos lenguas=o uso habitual de duas línguas|el uso de dos lenguas=o uso de duas línguas|el método consiste en=o método consiste em|comparar dos grupos=comparar dois grupos|se distinguen dos tipos de energía=distinguem-se dois tipos de energia|renovable y no renovable=renovável e não renovável|qué es exactamente=o que é exatamente|la economía circular=a economia circular|se define como=define-se como|un modelo que reutiliza los recursos=um modelo que reutiliza os recursos|me das un ejemplo=você me dá um exemplo|es el caso de=é o caso de|las empresas que reparan=as empresas que consertam|en lugar de tirar=em vez de jogar fora|por=por|como=como|de=de|en=em|a=a|del=do|existen tres clases de rocas=existem três classes de rochas|a saber=a saber|ígneas=ígneas|sedimentarias=sedimentares|y metamórficas=e metamórficas|un ejemplo claro es=um exemplo claro é|el reciclaje de vidrio=a reciclagem de vidro|la encuesta consiste en=o questionário consiste em|veinte preguntas=vinte perguntas|por economía circular=por economia circular|un modelo sin residuos=um modelo sem resíduos|es un=é um|que=que|se divide en=divide-se em|por ejemplo=por exemplo|tal como=tal como|consistir de=(erro) consistir de|una ciudad sostenible=uma cidade sustentável|como muestra=como mostra');
S_('El resumen de un artículo', 'el objetivo de este estudio es=o objetivo deste estudo é|analizar los hábitos de lectura=analisar os hábitos de leitura|analizar la lectura=analisar a leitura|para ello=para isso|se realizó una encuesta=foi feita uma pesquisa|a 500 estudiantes=com 500 estudantes|se concluye que=conclui-se que|la lectura digital=a leitura digital|no sustituye a la impresa=não substitui a impressa|cuántas palabras=quantas palavras|tiene que tener el resumen=o resumo tem que ter|unas doscientas=umas duzentas|y nada de opiniones personales=e nada de opiniões pessoais|escribo en pasado=escrevo no passado|o en presente=ou no presente|el método=o método|en pasado=no passado|el objetivo y la conclusión=o objetivo e a conclusão|en presente=no presente|es=é|está=está|ser=ser|ello=isso|eso de=(erro) eso de|él=ele|concluye=conclui|conclui=(erro) conclui|concluí=concluí|este trabajo tiene como objetivo=este trabalho tem como objetivo|describir el problema=descrever o problema|se entrevistó a veinte docentes=foram entrevistados vinte docentes|los resultados indican=os resultados indicam|una diferencia significativa=uma diferença significativa|estos resultados permiten=esses resultados permitem|replantear las políticas de lectura=repensar as políticas de leitura|los resultados muestran=os resultados mostram|una diferencia clara=uma diferença clara|la comprensión tiende a ser mayor en papel=a compreensão tende a ser maior no papel|complementa a la impresa=complementa a impressa|palabras clave=palavras-chave|lectura=leitura|comprensión=compreensão|universidad=universidade|resumen=resumo|pantalla o papel=tela ou papel|hábitos de lectura en universitarios chilenos=hábitos de leitura em universitários chilenos|de los estudiantes universitarios=dos estudantes universitários|en formato digital e impreso=em formato digital e impresso|de tres universidades de Santiago=de três universidades de Santiago|y se entrevistó a veinte docentes=e foram entrevistados vinte docentes|que el 70 % lee=que 70 % leem|principalmente en pantalla=principalmente na tela|no obstante=no entanto|la comprensión de textos largos=a compreensão de textos longos|tiende a ser mayor en papel=tende a ser maior no papel|sino que la complementa=mas a complementa|replantear el uso de materiales=repensar o uso de materiais|en la universidad=na universidade|formato digital=formato digital|educación superior=educação superior|el uso del transporte público=o uso do transporte público|en Curitiba=em Curitiba|a 300 usuarios=com 300 usuários|que el 60 % usa el autobús=que 60 % usam o ônibus|todos los días=todos os dias|la satisfacción=a satisfação|tiende a ser baja=tende a ser baixa|en las horas pico=nos horários de pico|es necesario aumentar la frecuencia=é necessário aumentar a frequência|transporte=transporte|movilidad=mobilidade|ciudad=cidade|los resultados demuestran que siempre=(forte demais) os resultados demonstram que sempre|los resultados sugieren que=os resultados sugerem que|SciELO=SciELO|Redalyc=Redalyc|se analizaron=foram analisados|se propone=propõe-se|pretende=pretende');
['garcía', 'pérez', 'lópez', 'ruiz', 'santiago', 'curitiba', 'scielo', 'redalyc'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'es-impersonal': {
    o: 'A voz impessoal acadêmica: **se analiza**, **se observa**, **cabe señalar**, **conviene recordar** e o plural de modéstia (**como hemos visto**).',
    q: 'Em trabalhos, teses, relatórios e artigos.',
    p: 'Evite o "yo" no corpo do texto.',
  },
  'es-cautela': {
    o: 'Cautela acadêmica: condicional (**podría afirmarse**), verbos fracos (**sugieren**), quantificadores (**en cierta medida**) e **tiende a**.',
    q: 'Para apresentar resultados e opiniões com precisão.',
    p: 'Evite absolutos sem prova: demuestra, siempre, todos.',
  },
  'es-citar': {
    o: 'Citar fontes: **según X**, **de acuerdo con**, **en palabras de** e verbos de postura (**sostiene**, **advierte**, **cuestiona**).',
    q: 'Em qualquer texto que use fontes.',
    p: '"Segundo o autor" é **según el autor**.',
  },
  'es-estructurar': {
    o: 'Organizar o texto: anunciar (**se divide en**), ordenar (**a continuación**), acrescentar (**asimismo**) e concluir (**en suma**).',
    q: 'Para textos acadêmicos e relatórios longos.',
    p: '"A seguir" é **a continuación**; en seguida é "imediatamente".',
  },
  'es-definir': {
    o: 'Definir (**se entiende por**, **se define como**), descrever (**consiste en**), classificar (**se distinguen**) e exemplificar (**es el caso de**).',
    q: 'Para apresentar conceitos com clareza.',
    p: 'Consistir **en**, nunca "consistir de".',
  },
  'es-resumen': {
    o: 'O resumo acadêmico: objetivo (**El objetivo … es**), método (**se realizó**), resultados (**muestran / sugieren**), conclusão (**se concluye**) e palavras-chave.',
    q: 'Para artigos, congressos e trabalhos de conclusão.',
    p: 'Método no passado; objetivo e conclusão no presente.',
  },
});
Object.assign(CZH, {
  'es-impersonal': ['se impessoal', 'vale = ?', 'haber: hemos'],
  'es-cautela': ['condicional', 'e → ie', 'medida (fem.)'],
  'es-citar': ['segundo = ?', 'señalar', 'sostener'],
  'es-estructurar': ['dividirse …', 'a seguir', 'em suma'],
  'es-definir': ['entender …', 'consistir …', 'el caso …'],
  'es-resumen': ['es + infinitivo', 'para isso', 'conclui-se'],
});
Object.assign(OBJ, {
  'es-impersonal': { o: 'Escrevo em voz impessoal acadêmica.', a: 'Você consegue apresentar um trabalho sem usar "yo"?', ref: 'Español académico · C1' },
  'es-cautela': { o: 'Atenuo afirmações com precisão acadêmica.', a: 'Você consegue transformar uma afirmação absoluta numa frase com cautela?', ref: 'Español académico · C1' },
  'es-citar': { o: 'Cito fontes com verbos de postura.', a: 'Você consegue citar um autor com sostiene ou advierte?', ref: 'Español académico · C1' },
  'es-estructurar': { o: 'Organizo um texto acadêmico com conectores.', a: 'Você consegue anunciar as partes de um trabalho e concluí-lo?', ref: 'Español académico · C1' },
  'es-definir': { o: 'Defino, classifico e exemplifico conceitos.', a: 'Você consegue definir um conceito com se entiende por?', ref: 'Español académico · C1' },
  'es-resumen': { o: 'Consigo ler e escrever um resumo acadêmico.', a: 'Você consegue escrever o resumo de um estudo com todas as partes?', ref: 'Español académico · C1' },
});
MOD_OBJ[33] = ['Escrevo em voz impessoal e com cautela.', 'Cito fontes com verbos de postura.', 'Organizo, defino e exemplifico num texto acadêmico.', 'Escrevo o resumo de um estudo.'];

ES_MODS.push({ lv: 'C1', n: 'Español académico', l: ['es-impersonal', 'es-cautela', 'es-citar', 'es-estructurar', 'es-definir', 'es-resumen'] });
