// Espanhol · A2 · Módulo 9 · Comparar. Formato de es/curso.js.

NL('es-masque', {
  de: 'Más que, menos que', pt: 'Comparar: mais e menos', gt: 'más + adjetivo + que · menos … que · mejor, peor, mayor, menor',
  gx: 'Para comparar, use más … que (mais … que) e menos … que (menos … que): Bogotá es más fría que Cartagena. Quatro formas são irregulares: mejor (melhor), peor (pior), mayor (mais velho, maior) e menor (mais novo, menor). Nunca "más mejor".',
  ge: 'Bogotá es más fría que Cartagena.=Bogotá é mais fria que Cartagena.|El tren es menos caro que el avión.=O trem é menos caro que o avião.|Mi hermana es mayor que yo.=A minha irmã é mais velha que eu.',
  v: 'más … que=mais … que=⬆️|menos … que=menos … que=⬇️|mejor=melhor=👍|peor=pior=👎|mayor=mais velho; maior=🧓|menor=mais novo; menor=🧒|caro=caro=💰|barato=barato=🪙|rápido=rápido=⚡|cómodo=confortável=🛋️',
  x: 'frío=frio|caliente=quente|grande=grande|pequeño=pequeno|alto=alto|bajo=baixo|lento=lento|moderno=moderno|antiguo=antigo|tranquilo=tranquilo',
  dlg: '¿Qué es mejor para ir a Medellín, el bus o el avión?=O que é melhor para ir a Medellín, o ônibus ou o avião?|El avión es más rápido, pero es más caro.=O avião é mais rápido, mas é mais caro.|¿Y el bus es cómodo?=E o ônibus é confortável?|Sí, y es menos caro que el avión.=Sim, e é menos caro que o avião.',
  cz: 'Bogotá es más fría ___ Cartagena.=que=de=como|Este café es ___ que el otro. (melhor)=mejor=más mejor=más bueno|Mi hermana es ___ que yo. (mais velha)=mayor=más vieja=más mayor',
  whys: 'más … que|bueno → mejor (sem más)|idade: mayor',
  pts: 'más + adjetivo + que: más caro que, más rápido que. menos + adjetivo + que: menos caro que.|Irregulares: bueno → mejor, malo → peor. Nunca "más mejor" ou "más bueno" para qualidade.|Para idade: mayor (mais velho) e menor (mais novo): Mi hermana es mayor que yo.|Com números, de: más de cien personas, menos de diez dólares.',
  ex: 'Este celular es mejor que el mío.=Este celular é melhor que o meu.|El tráfico hoy está peor que ayer.=O trânsito hoje está pior que ontem.|Hay más de cien personas.=Tem mais de cem pessoas.|Mi casa es menos grande que la tuya.=A minha casa é menos grande que a sua.',
  bd: ['Bogotá=S|es_más_fría=V^más + adjetivo|que_Cartagena.=C^que: o segundo termo', 'Bogotá é mais fria que Cartagena.'],
  rule: 'comparativo',
  hw: 'Compare duas cidades que você conhece em oito frases, com más … que, menos … que, mejor, peor, mayor e menor.',
  deep: `
Hoje você começa a **comparar**: cidades, preços, pessoas. É uma das coisas que mais usamos no dia a dia.
# Passo 1: más e menos
@ F:Comparar;más / menos^v|+ adjetivo^c|+ que^p;Es más|caro|que el bus.;Es menos|caro|que el avión.
~ Bogotá es más fría que Cartagena. = Bogotá é mais fria que Cartagena.
~ El tren es menos caro que el avión. = O trem é menos caro que o avião.
# Passo 2: os irregulares
| Adjetivo | Comparativo |
| bueno | mejor |
| malo | peor |
| grande (idade) | mayor |
| pequeño (idade) | menor |
~ Este celular es mejor que el mío. = Este celular é melhor que o meu.
~ El tráfico hoy está peor que ayer. = O trânsito hoje está pior que ontem.
# Passo 3: idade e números
@ V:Idade;Mais velho|Mi hermana es mayor que yo.;Mais novo|Mi primo es menor que yo.
~ Mi hermana es mayor que yo. = A minha irmã é mais velha que eu.
~ Hay más de cien personas. = Tem mais de cem pessoas.
# Passo 4: ojo, brasileño: "más mejor" não existe
| Errado | Certo |
| más mejor | mejor |
| más bueno (qualidade) | mejor |
| más que cien | más de cien |
~ Mi casa es menos grande que la tuya. = A minha casa é menos grande que a sua.
! Como em português ("mais melhor" é erro), **mejor** já é comparativo. E com números é **de**: más **de** cien.
> Treine agora: compare o seu celular com o de alguém.
? "Mais caro que": || más caro que
? "Melhor": || mejor
? "Mais de cem": || más de cien
`,
});

NL('es-tancomo', {
  de: 'Tan … como', pt: 'Comparar igualdades', gt: 'tan + adjetivo + como · tanto / tanta / tantos / tantas + substantivo + como · igual que',
  gx: 'Para dizer que duas coisas são iguais: tan + adjetivo + como (tão … quanto): Lima es tan grande como Bogotá. Com substantivo, tanto concorda: tanto dinero, tanta gente, tantos libros, tantas horas como … E com verbo: trabajo tanto como tú.',
  ge: 'Lima es tan grande como Bogotá.=Lima é tão grande quanto Bogotá.|No tengo tanto tiempo como tú.=Não tenho tanto tempo quanto você.|Aquí hay tanta gente como en el centro.=Aqui tem tanta gente quanto no centro.',
  v: 'tan … como=tão … quanto=🟰|tanto … como=tanto … quanto=⚖️|tanta=tanta=⚖️|tantos=tantos=⚖️|tantas=tantas=⚖️|igual que=igual a=🔁|el mismo=o mesmo=🪞|parecido=parecido=👯|diferente=diferente=↔️|gente=gente, pessoas=👥',
  x: 'tiempo=tempo|dinero=dinheiro|trabajo=trabalho|horas=horas|amigos=amigos|ruido=barulho|calor=calor|playa=praia|ciudad=cidade|centro=centro',
  dlg: '¿Te gusta más Lima o Bogotá?=Você gosta mais de Lima ou de Bogotá?|Las dos son lindas. Lima es tan grande como Bogotá.=As duas são lindas. Lima é tão grande quanto Bogotá.|¿Y el clima?=E o clima?|En Lima no llueve tanto como en Bogotá.=Em Lima não chove tanto quanto em Bogotá.',
  cz: 'Lima es ___ grande como Bogotá.=tan=tanto=tão|No tengo ___ tiempo como tú.=tanto=tan=tanta|Hay ___ gente como en el centro.=tanta=tanto=tan',
  whys: 'com adjetivo: tan|tiempo, masculino: tanto|gente, feminino: tanta',
  pts: 'tan + adjetivo / advérbio + como: tan grande como, tan rápido como.|tanto / tanta / tantos / tantas + substantivo + como: concorda com o substantivo: tanto tiempo, tanta gente, tantos libros, tantas horas.|verbo + tanto como: Trabajo tanto como tú. No llueve tanto como en Bogotá.|Iguais: igual que, el mismo / la misma que, parecido a.',
  ex: 'Mi hijo es tan alto como yo.=O meu filho é tão alto quanto eu.|Trabajo tanto como tú.=Trabalho tanto quanto você.|Tengo el mismo celular que tú.=Tenho o mesmo celular que você.|Este barrio es parecido al mío.=Este bairro é parecido com o meu.',
  bd: ['Lima=S|es_tan_grande=V^tan + adjetivo|como_Bogotá.=C^como: o segundo termo', 'Lima é tão grande quanto Bogotá.'],
  rule: 'igualdad',
  hw: 'Compare você com uma pessoa da sua família em oito frases, com tan … como, tanto / tanta … como e el mismo … que.',
  deep: `
Hoje você compara coisas **iguais**: tão grande quanto, tanto tempo quanto.
# Passo 1: tan + adjetivo + como
@ F:Igualdade;tan^v|+ adjetivo^c|+ como^p;Es tan|grande|como Bogotá.;Es tan|alto|como yo.
~ Lima es tan grande como Bogotá. = Lima é tão grande quanto Bogotá.
~ Mi hijo es tan alto como yo. = O meu filho é tão alto quanto eu.
# Passo 2: tanto concorda
| Substantivo | Forma |
| tiempo (masc.) | tanto tiempo |
| gente (fem.) | tanta gente |
| libros (masc. pl.) | tantos libros |
| horas (fem. pl.) | tantas horas |
~ No tengo tanto tiempo como tú. = Não tenho tanto tempo quanto você.
~ Aquí hay tanta gente como en el centro. = Aqui tem tanta gente quanto no centro.
# Passo 3: com verbo, e o mesmo
~ Trabajo tanto como tú. = Trabalho tanto quanto você.
~ Tengo el mismo celular que tú. = Tenho o mesmo celular que você.
@ M:Iguais;Em espanhol|Em português;el mismo que|o mesmo que;igual que|igual a;parecido a|parecido com
# Passo 4: ojo, brasileño: como, e não "cuanto"
| Português | Espanhol |
| tão … quanto | tan … como |
| tanto … quanto | tanto … como |
| parecido com | parecido a |
~ Este barrio es parecido al mío. = Este bairro é parecido com o meu.
! O nosso "quanto" vira **como**: tan grande **como**. E **gente** é feminino singular: **tanta** gente, la gente **es** simpática.
> Treine agora: compare duas pessoas da sua família com tan … como.
? "Tão grande quanto": || tan grande como
? "Tanta gente": || tanta gente
? "O mesmo que você": || el mismo que tú
`,
});

NL('es-mejor', {
  de: 'El mejor, el peor', pt: 'Os superlativos', gt: 'el / la más + adjetivo + de · el mejor, el peor · -ísimo',
  gx: 'Para dizer que algo é o mais de todos: el / la más + adjetivo + de: el país más grande de Sudamérica. Com bueno e malo: el mejor, el peor. E para intensificar, -ísimo: carísimo (caríssimo), riquísimo (delicioso).',
  ge: 'Brasil es el país más grande de Sudamérica.=O Brasil é o maior país da América do Sul.|Es el mejor restaurante de la ciudad.=É o melhor restaurante da cidade.|La comida estaba riquísima.=A comida estava deliciosa.',
  v: 'el más=o mais=🥇|la más=a mais=🥇|el mejor=o melhor=🏆|el peor=o pior=💩|el mayor=o mais velho=🧓|el menor=o mais novo=🧒|riquísimo=delicioso=😋|carísimo=caríssimo=💸|muchísimo=muitíssimo=➕|lindísimo=lindíssimo=😍',
  x: 'país=país|montaña=montanha|río=rio|ciudad=cidade|equipo=time|jugador=jogador|plato=prato|del mundo=do mundo|de la familia=da família|de todos=de todos',
  dlg: '¿Cuál es el mejor restaurante de la ciudad?=Qual é o melhor restaurante da cidade?|Para mí, El Fogón. La comida es riquísima.=Para mim, o El Fogón. A comida é deliciosa.|¿Y es caro?=E é caro?|Un poco, pero no es el más caro de la zona.=Um pouco, mas não é o mais caro da região.',
  cz: 'Es el país más grande ___ Sudamérica.=de=que=en|Es el ___ restaurante de la ciudad. (melhor)=mejor=más bueno=más mejor|La comida estaba ___. (muito gostosa)=riquísima=muy riquísima=más rica',
  whys: 'superlativo: de|bueno → el mejor|-ísimo já é intensivo: sem muy',
  pts: 'el / la / los / las + más + adjetivo + de: la ciudad más bonita de Chile, el río más largo del mundo.|Com bueno e malo: el mejor, la peor, los mejores. Sem más: el mejor (nunca "el más bueno").|Para idade: el mayor, la menor: Soy la menor de la familia.|-ísimo intensifica: caro → carísimo, rico → riquísimo, lindo → lindísimo. Nunca com muy: "muy riquísimo" é erro.',
  ex: 'Soy la menor de la familia.=Sou a mais nova da família.|Es el peor día de la semana.=É o pior dia da semana.|El Amazonas es el río más largo del mundo.=O Amazonas é o rio mais longo do mundo.|Este hotel es carísimo.=Este hotel é caríssimo.',
  bd: ['Es_el_mejor=V^el + mejor: superlativo|restaurante=S|de_la_ciudad.=C^de: o grupo', 'É o melhor restaurante da cidade.'],
  rule: 'superlativo',
  hw: 'Escreva oito superlativos sobre o seu país ou a sua cidade: o lugar mais bonito, o melhor restaurante, a comida mais rica, a rua mais movimentada.',
  deep: `
Hoje você aprende a dizer que algo é **o mais**, **o melhor** ou **o pior** de todos.
# Passo 1: el más … de
@ F:Superlativo;el / la^v|+ más + adjetivo^c|+ de^p;Es el país|más grande|de Sudamérica.;Es la ciudad|más bonita|de Chile.
~ Brasil es el país más grande de Sudamérica. = O Brasil é o maior país da América do Sul.
~ El Amazonas es el río más largo del mundo. = O Amazonas é o rio mais longo do mundo.
# Passo 2: el mejor e el peor
| Adjetivo | Superlativo |
| bueno | el mejor, la mejor |
| malo | el peor, la peor |
| (idade) | el mayor, la menor |
~ Es el mejor restaurante de la ciudad. = É o melhor restaurante da cidade.
~ Soy la menor de la familia. = Sou a mais nova da família.
# Passo 3: -ísimo
@ M:Intensificar;Adjetivo|Com -ísimo;caro|carísimo;rico|riquísimo;lindo|lindísimo
~ La comida estaba riquísima. = A comida estava deliciosa.
~ Este hotel es carísimo. = Este hotel é caríssimo.
# Passo 4: ojo, brasileño: "o maior" e rico
| Português | Espanhol |
| o maior país | el país más grande |
| delicioso | rico, riquísimo |
| muito gostoso | muy rico |
~ Es el peor día de la semana. = É o pior dia da semana.
! "O maior país" (tamanho) é **el más grande**; **mayor** é sobretudo para idade. E comida **rica** é comida gostosa.
> Treine agora: diga qual é o melhor restaurante da sua cidade e por quê.
? "O melhor restaurante da cidade": || el mejor restaurante de la ciudad
? "Caríssimo": || carísimo
? "Sou a mais nova": || Soy la menor.
`,
});

NL('es-prefieres', {
  de: '¿Cuál prefieres?', pt: 'Escolher e dar preferência', gt: 'cuál × qué · preferir (e → ie) · este / ese · el rojo, la grande',
  gx: 'Para escolher entre opções, use ¿cuál? (qual): ¿Cuál prefieres, el rojo o el azul? O verbo preferir muda e → ie: prefiero, prefieres. E o espanhol evita repetir o substantivo: el rojo (o vermelho), la grande (a grande), el de la izquierda (o da esquerda).',
  ge: '¿Cuál prefieres, el rojo o el azul?=Qual você prefere, o vermelho ou o azul?|Prefiero el azul, es más elegante.=Prefiro o azul, é mais elegante.|Me llevo la grande.=Vou levar a grande.',
  v: 'cuál=qual=❓|cuáles=quais=❓❓|preferir=preferir=💗|prefiero=prefiro=👍|prefieres=você prefere=🤔|me llevo=vou levar=🛍️|este=este=👇|ese=esse=👉|el de=o de=🏷️|la otra=a outra=🔄',
  x: 'izquierda=esquerda|derecha=direita|elegante=elegante|práctico=prático|clásico=clássico|moderno=moderno|claro=claro|oscuro=escuro|liso=liso|estampado=estampado',
  dlg: 'Tengo dos camisas. ¿Cuál prefieres?=Tenho duas camisas. Qual você prefere?|Prefiero la de rayas. Es más original.=Prefiro a listrada. É mais original.|¿No te gusta la blanca?=Você não gosta da branca?|Sí, pero la de rayas es más bonita.=Gosto, mas a listrada é mais bonita.',
  cz: '¿___ prefieres, el rojo o el azul?=Cuál=Qué=Cual|Yo ___ el azul. (preferir)=prefiero=prefero=prefiro|Me llevo ___ grande. (a camisa)=la=lo=el',
  whys: 'escolher entre opções: cuál|preferir: e → ie|la camisa: la grande',
  pts: '¿cuál? / ¿cuáles? = qual / quais, para escolher entre opções: ¿Cuál prefieres? ¿Cuáles te gustan?|¿qué? + substantivo: ¿Qué color prefieres? (e não "¿cuál color?").|preferir muda e → ie: prefiero, prefieres, prefiere, preferimos, prefieren.|Sem repetir o substantivo: el rojo, la grande, el de la izquierda, la de rayas.',
  ex: '¿Qué color prefieres?=Que cor você prefere?|¿Cuál es tu favorito?=Qual é o seu favorito?|Prefiero el de la izquierda.=Prefiro o da esquerda.|Preferimos quedarnos en casa.=Preferimos ficar em casa.',
  bd: ['¿Cuál=Q^escolher entre opções|prefieres,=V^preferir: e → ie|el_rojo_o_el_azul?=OA^sem repetir o substantivo', 'Qual você prefere, o vermelho ou o azul?'],
  rule: 'preferir',
  hw: 'Escreva seis perguntas de escolha com ¿cuál? e ¿qué + substantivo? e responda com prefiero e el / la … sem repetir o substantivo.',
  deep: `
Hoje você aprende a **escolher**: qual prefere, qual vai levar, sem repetir o nome da coisa.
# Passo 1: ¿cuál?
@ V:Cuál ou qué?;Entre opções|¿Cuál prefieres?;Com substantivo|¿Qué color prefieres?
~ ¿Cuál prefieres, el rojo o el azul? = Qual você prefere, o vermelho ou o azul?
~ ¿Qué color prefieres? = Que cor você prefere?
# Passo 2: preferir
| Pessoa | preferir |
| yo | prefiero |
| tú | prefieres |
| él / ella | prefiere |
| nosotros | preferimos |
| ellos | prefieren |
~ Prefiero el azul, es más elegante. = Prefiro o azul, é mais elegante.
~ Preferimos quedarnos en casa. = Preferimos ficar em casa.
# Passo 3: sem repetir o substantivo
@ M:Sem repetir;Em espanhol|Em português;el rojo|o vermelho;la grande|a grande;el de la izquierda|o da esquerda;la de rayas|a listrada
~ Me llevo la grande. = Vou levar a grande.
~ Prefiero el de la izquierda. = Prefiro o da esquerda.
# Passo 4: ojo, brasileño: "qual cor?"
| Português | Espanhol |
| Qual cor? | ¿Qué color? |
| Qual é o seu nome? | ¿Cuál es tu nombre? |
| Qual você prefere? | ¿Cuál prefieres? |
~ ¿Cuál es tu favorito? = Qual é o seu favorito?
! Antes de substantivo, use **qué**: ¿**Qué** color? ¿**Qué** talla? O **cuál** fica sozinho ou com o verbo ser: ¿**Cuál** es …?
> Treine agora: pergunte a alguém qual roupa prefere, entre duas.
? "Qual você prefere?": || ¿Cuál prefieres?
? "Que cor?": || ¿Qué color?
? "Vou levar a grande": || Me llevo la grande.
`,
});

NL('es-devolucion', {
  de: 'De compras y devoluciones', pt: 'Trocar e devolver na loja', gt: 'quería cambiar … · me queda grande · el recibo, la talla, el reembolso',
  gx: 'Para trocar ou devolver: Quería cambiar esta camisa (queria trocar esta camisa). Para dizer como a roupa fica: me queda grande / chica (fica grande / pequena em mim). E o vocabulário da loja: la talla (o tamanho), el recibo (o recibo, a nota), el probador (o provador), el reembolso (o reembolso).',
  ge: 'Quería cambiar esta camisa.=Queria trocar esta camisa.|Me queda un poco grande.=Fica um pouco grande em mim.|¿Tiene el recibo?=O senhor tem o recibo?',
  v: 'cambiar=trocar=🔄|devolver=devolver=↩️|la talla=o tamanho (roupa)=📏|me queda=fica (em mim)=👕|chico, chica=pequeno, pequena=🔽|el recibo=o recibo, a nota=🧾|el probador=o provador=🚪|el reembolso=o reembolso=💵|la garantía=a garantia=🛡️|defectuoso=com defeito=⚠️',
  x: 'apretado=apertado|ancho=largo, folgado|corto=curto|largo=comprido|manga=manga|cierre=zíper|mancha=mancha|roto=rasgado, quebrado|vendedora=vendedora|caja=caixa',
  dlg: 'Buenas tardes. Quería cambiar esta camisa.=Boa tarde. Queria trocar esta camisa.|¿Qué problema tiene?=Qual é o problema?|Me queda chica. ¿La tiene en talla M?=Ficou pequena em mim. Tem no tamanho M?|Sí, aquí está. ¿Tiene el recibo?=Sim, aqui está. A senhora tem o recibo?',
  cz: '___ cambiar esta camisa. (queria)=Quería=Quiero que=Quise|Me ___ un poco grande.=queda=fica=queden|¿La tiene en ___ M? (tamanho)=talla=tamaño=número',
  whys: 'pedido educado: quería|ficar (roupa): quedar|tamanho de roupa: talla',
  pts: 'Pedido educado com o imperfeito: Quería cambiar … / Quería devolver … (é mais gentil que quiero).|Como fica: me queda grande / chico / bien / apretado. Para plural: me quedan chicos (os sapatos).|Na loja: ¿La tiene en otra talla? ¿Puedo probármelo? ¿Dónde está el probador?|Devolver: ¿Me devuelven el dinero? Tiene un defecto. Aquí está el recibo.',
  ex: '¿Puedo probármela?=Posso experimentá-la?|Los zapatos me quedan chicos.=Os sapatos ficam pequenos em mim.|Tiene una mancha.=Tem uma mancha.|¿Me pueden devolver el dinero?=Vocês podem me devolver o dinheiro?',
  bd: ['Me=OI^para mim|queda=V^quedar: como a roupa fica|un_poco_grande.=A', 'Fica um pouco grande em mim.'],
  rule: 'devolucion',
  hw: 'Escreva um diálogo de troca numa loja (oito falas): o que você quer trocar, o problema, o tamanho e o recibo.',
  deep: `
Hoje você aprende a **trocar e devolver** numa loja: dizer o problema, pedir outro tamanho e o reembolso.
# Passo 1: o pedido educado
@ V:Mais educado;Direto|Quiero cambiar esta camisa.;Educado|Quería cambiar esta camisa.
~ Quería cambiar esta camisa. = Queria trocar esta camisa.
~ ¿Tiene el recibo? = O senhor tem o recibo?
BR O **quería** é o nosso "queria" educado. Na loja, no restaurante e no balcão, soa muito mais gentil que **quiero**.
# Passo 2: como fica
| Em espanhol | Em português |
| me queda grande | fica grande em mim |
| me queda chico | fica pequeno em mim |
| me queda bien | fica bem em mim |
| me quedan chicos | ficam pequenos em mim |
~ Me queda un poco grande. = Fica um pouco grande em mim.
~ Los zapatos me quedan chicos. = Os sapatos ficam pequenos em mim.
# Passo 3: o vocabulário da loja
@ P:Na loja;Tamanho=la talla;Nota=el recibo;Provador=el probador;Reembolso=el reembolso
~ ¿Puedo probármela? = Posso experimentá-la?
~ ¿Me pueden devolver el dinero? = Vocês podem me devolver o dinheiro?
# Passo 4: ojo, brasileño: talla e largo
| Em espanhol | Em português |
| la talla | o tamanho (roupa) |
| el número | o tamanho (sapato) |
| largo | comprido |
| ancho | largo, folgado |
~ Tiene una mancha. = Tem uma mancha.
! **largo** é falso amigo: em espanhol quer dizer **comprido**. O nosso "largo" é **ancho**.
> Treine agora: diga que uma calça ficou apertada e peça outro tamanho.
? "Queria trocar esta camisa": || Quería cambiar esta camisa.
? "Fica grande em mim": || Me queda grande.
? "largo" em espanhol: || comprido
`,
});

NL('es-resena', {
  de: 'Una reseña de producto', pt: 'Ler e escrever uma avaliação', gt: 'comparativos e superlativos numa avaliação · lo mejor / lo peor · recomiendo',
  gx: 'Uma avaliação de produto junta tudo do módulo: o que você comprou (Compré estos audífonos …), a comparação (Son mejores que los anteriores), o melhor e o pior (Lo mejor es la batería; lo peor, el precio) e a recomendação (Los recomiendo / No los recomiendo).',
  ge: 'Compré estos audífonos hace un mes.=Comprei estes fones há um mês.|Lo mejor es la batería; lo peor, el precio.=O melhor é a bateria; o pior, o preço.|Los recomiendo totalmente.=Recomendo totalmente.',
  v: 'reseña=avaliação, resenha=⭐|lo mejor=o melhor (de tudo)=👍|lo peor=o pior=👎|recomendar=recomendar=📣|calidad=qualidade=💎|precio=preço=💲|batería=bateria=🔋|audífonos=fones de ouvido=🎧|vale la pena=vale a pena=✅|estrellas=estrelas=⭐',
  x: 'pantalla=tela|cargador=carregador|envío=entrega, frete|devolución=devolução|resistente=resistente|liviano=leve|pesado=pesado|ruido=barulho|sonido=som|anteriores=anteriores',
  dlg: '¿Leíste las reseñas antes de comprar?=Você leu as avaliações antes de comprar?|Sí, casi todas dicen que es el mejor de su precio.=Sim, quase todas dizem que é o melhor pela faixa de preço.|¿Y lo peor?=E o pior?|Dicen que la batería dura menos de lo prometido.=Dizem que a bateria dura menos do que o prometido.',
  cz: '___ mejor es la batería. (o melhor de tudo)=Lo=El=La|Son ___ que los anteriores. (melhores)=mejores=más mejores=mejor|Los ___ totalmente. (recomendo)=recomiendo=recomendo=recomiendan',
  whys: 'o melhor (ideia): lo|plural de mejor: mejores|recomendar: e → ie',
  pts: 'Comece pelo contexto: Compré … hace un mes. Lo uso todos los días.|Compare: Es mejor que …, más cómodo que …, tan bueno como …|lo mejor / lo peor (o melhor, o pior de tudo): Lo mejor es la batería. Lo peor es el precio.|Feche com a nota e a recomendação: Le doy cuatro estrellas. Lo recomiendo / No lo recomiendo. Vale la pena.',
  ex: 'La calidad del sonido es excelente.=A qualidade do som é excelente.|Es más liviano que el modelo anterior.=É mais leve que o modelo anterior.|Le doy cuatro estrellas.=Dou quatro estrelas.|No vale la pena por ese precio.=Não vale a pena por esse preço.',
  bd: ['Lo_mejor=S^lo + adjetivo: a ideia, o aspecto|es=V|la_batería.=A', 'O melhor é a bateria.'],
  rule: 'resena',
  le: {
    texto: {
      t: 'Audífonos SonaMax X2', kind: 'avaliação', voz: 'a',
      intro: 'A Camila, de Santiago, avaliou uns fones numa loja on-line. Leia e responda.',
      paras: ['Compré estos audífonos hace dos meses y los uso todos los días para trabajar y para correr.', 'Lo mejor es el sonido: es muchísimo mejor que el de mis audífonos anteriores. Además, son más livianos y muy cómodos.', 'Lo peor es la batería. En la página dice que dura veinte horas, pero en realidad dura menos de quince.', 'El envío fue rapidísimo: llegaron en dos días. El precio no es el más barato, pero la calidad es excelente.', 'Le doy cuatro estrellas. Los recomiendo, pero no son perfectos.'],
      qs: [
        { q: 'Para que a Camila usa os fones?', o: ['para trabalhar e para correr', 'só para viajar', 'para ver filmes'], a: 0 },
        { q: 'Qual é o melhor aspecto, segundo ela?', o: ['o som', 'o preço', 'a bateria'], a: 0 },
        { q: 'Qual é o problema da bateria?', o: ['dura menos de quinze horas, e não vinte', 'demora para carregar', 'esquenta muito'], a: 0 },
        { q: 'Quantas estrelas ela dá?', o: ['quatro', 'cinco', 'três'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva a sua avaliação', tipo: 'form', ok: 'Avaliação escrita corretamente.',
      pede: 'Avalie um produto que você comprou (celular, fone, tênis, livro…). Uma frase por linha.',
      campos: [
        { l: 'O produto', d: 'Compré … hace …', re: '(^|\\s)(compré|tengo|uso|me regalaron)(?!\\p{L})', f: 'iu', err: 'Diga o que comprou: Compré estos audífonos hace un mes.' },
        { l: 'Uma comparação', d: 'Es mejor que … / más … que …', re: '(^|\\s)(mejor|mejores|peor|peores|más|menos|tan|tanto)(?!\\p{L}).*(que|como)(?!\\p{L})', f: 'iu', err: 'Compare: Es mejor que el anterior. / Es más liviano que …', bad: [['\\bmás (mejor|mejores|peor|peores)\\b', '<b>mejor</b> e <b>peor</b> já comparam: sem "más".']] },
        { l: 'O melhor', d: 'Lo mejor es …', re: '(^|\\s)lo (mejor|que más me gusta)(?!\\p{L})', f: 'iu', err: 'Diga o melhor aspecto: Lo mejor es el sonido.', bad: [['^\\s*el mejor es (el|la)\\b', 'Para o melhor aspecto, use <b>lo</b>: <b>lo</b> mejor es …']] },
        { l: 'O pior', d: 'Lo peor es …', re: '(^|\\s)lo (peor|que menos me gusta)(?!\\p{L})', f: 'iu', err: 'Diga o pior aspecto: Lo peor es la batería.' },
        { l: 'A nota', d: 'Le doy … estrellas', re: '(estrellas?|puntos?|nota)(?!\\p{L})', f: 'iu', err: 'Dê uma nota: Le doy cuatro estrellas.' },
        { l: 'Recomendação', d: 'Lo recomiendo / No lo recomiendo', re: '(recomiendo|vale la pena)(?!\\p{L})', f: 'iu', err: 'Recomende ou não: Lo recomiendo.', bad: [['\\brecomendo\\b', 'Em espanhol, recomendar muda e → ie: <b>recomiendo</b>.']] },
      ],
      modelo: 'Compré este celular hace tres meses. · Es mucho mejor que mi celular anterior. · Lo mejor es la cámara. · Lo peor es el precio. · Le doy cuatro estrellas. · Lo recomiendo.',
    },
  },
  hw: 'Escreva uma avaliação completa (oito a dez frases) de algo que você comprou, com comparações, lo mejor, lo peor, uma nota e a recomendação.',
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo. Você vai ler a avaliação de uma chilena e escrever a sua, com comparativos e superlativos.
# Passo 1: a estrutura
@ P:Uma avaliação;Contexto=Compré … hace un mes.;Comparação=Es mejor que …;Lo mejor=Lo mejor es …;Lo peor=Lo peor es …;Nota=Le doy cuatro estrellas.
~ Compré estos audífonos hace un mes. = Comprei estes fones há um mês.
~ Es más liviano que el modelo anterior. = É mais leve que o modelo anterior.
# Passo 2: lo mejor e lo peor
@ V:El ou lo?;Um objeto|Es el mejor celular.;Um aspecto, uma ideia|Lo mejor es la batería.
~ Lo mejor es la batería; lo peor, el precio. = O melhor é a bateria; o pior, o preço.
~ Lo mejor es el sonido. = O melhor é o som.
BR **lo** + adjetivo é "a coisa", "o aspecto": **lo mejor** = o melhor de tudo; **lo bueno** = o lado bom.
# Passo 3: a nota e a recomendação
| Em espanhol | Em português |
| Le doy cuatro estrellas. | Dou quatro estrelas. |
| Lo recomiendo. | Recomendo. |
| Vale la pena. | Vale a pena. |
~ Le doy cuatro estrellas. = Dou quatro estrelas.
~ Los recomiendo totalmente. = Recomendo totalmente.
# Passo 4: ojo, brasileño: os nomes das coisas
| América Latina | Brasil |
| audífonos | fones de ouvido |
| celular | celular |
| liviano | leve |
| el envío | a entrega |
~ La calidad del sonido es excelente. = A qualidade do som é excelente.
! Na Espanha, fones são **auriculares** e o celular é **el móvil**. Na América Latina, **audífonos** e **celular**.
> Agora leia a avaliação da Camila e escreva a sua.
? "O melhor é a bateria": || Lo mejor es la batería.
? "Recomendo": || Lo recomiendo.
? "Mais leve que": || más liviano que
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('Más que, menos que',
  'F:Comparar;más / menos^v|+ adjetivo^c|+ que^p;Es más|caro|que el bus.;Es menos|caro|que el avión.',
  'M:Irregulares;Adjetivo|Comparativo;bueno|mejor;malo|peor;(idade)|mayor, menor');
V('Tan … como',
  'F:Igualdade;tan^v|+ adjetivo^c|+ como^p;Es tan|grande|como Bogotá.',
  'M:tanto concorda;Substantivo|Forma;tiempo|tanto tiempo;gente|tanta gente;horas|tantas horas');
V('El mejor, el peor',
  'F:Superlativo;el / la^v|+ más + adjetivo^c|+ de^p;Es el país|más grande|de Sudamérica.',
  'M:Intensificar;Adjetivo|Com -ísimo;caro|carísimo;rico|riquísimo;lindo|lindísimo');
V('¿Cuál prefieres?',
  'V:Cuál ou qué?;Entre opções|¿Cuál prefieres?;Com substantivo|¿Qué color prefieres?',
  'M:Sem repetir;Espanhol|Português;el rojo|o vermelho;la grande|a grande;el de la izquierda|o da esquerda');
V('De compras y devoluciones',
  'V:Mais educado;Direto|Quiero cambiar esta camisa.;Educado|Quería cambiar esta camisa.',
  'P:Na loja;Tamanho=la talla;Nota=el recibo;Provador=el probador;Reembolso=el reembolso');
V('Una reseña de producto',
  'P:Uma avaliação;Contexto=Compré …;Comparação=Es mejor que …;Lo mejor=Lo mejor es …;Nota=Le doy cuatro estrellas.',
  'V:El ou lo?;Um objeto|Es el mejor celular.;Um aspecto|Lo mejor es la batería.');
S_('Más que, menos que', 'Bogotá=Bogotá|es=é|fría=fria|que=que|Cartagena=Cartagena|el tren=o trem|el avión=o avião|mi hermana=minha irmã|yo=eu|qué es mejor=o que é melhor|para ir a=para ir a|Medellín=Medellín|el bus=o ônibus|o=ou|pero=mas|y=e|sí=sim|este café=este café|el otro=o outro|más vieja=mais velha|más bueno=mais bom|este celular=este celular|el mío=o meu|el tráfico=o trânsito|hoy=hoje|está=está|ayer=ontem|hay=tem|más de cien=mais de cem|personas=pessoas|mi casa=minha casa|la tuya=a sua|mi primo=meu primo|más mejor=(erro) mais melhor|más que cien=(erro) mais que cem|más de=mais de|menos de=menos de|diez dólares=dez dólares|bueno=bom|malo=ruim|es más=é mais|es menos=é menos|fría que=fria que|el bus=o ônibus|cien=cem');
S_('Tan … como', 'Lima=Lima|es=é|grande=grande|Bogotá=Bogotá|no tengo=não tenho|tú=você|aquí=aqui|hay=tem|en el centro=no centro|te gusta más=você gosta mais|o=ou|las dos=as duas|son lindas=são lindas|y el clima=e o clima|en Lima=em Lima|no llueve=não chove|en Bogotá=em Bogotá|mi hijo=meu filho|alto=alto|yo=eu|trabajo=trabalho|tengo=tenho|el mismo=o mesmo|celular=celular|este barrio=este bairro|al mío=ao meu|libros=livros|la misma que=a mesma que|parecido a=parecido com|la gente es simpática=as pessoas são simpáticas|es tan=é tão|tanto como=tanto quanto|tanta gente=tanta gente|tantos libros=tantos livros|tantas horas=tantas horas|tanto tiempo=tanto tempo|tan … como=tão … quanto|tanto … como=tanto … quanto');
S_('El mejor, el peor', 'Brasil=Brasil|es=é|el país=o país|más grande=maior|de Sudamérica=da América do Sul|restaurante=restaurante|de la ciudad=da cidade|la comida=a comida|estaba=estava|riquísima=deliciosa|cuál es=qual é|para mí=para mim|El Fogón=El Fogón|y es caro=e é caro|un poco=um pouco|pero=mas|no es=não é|de la zona=da região|más bueno=mais bom|más mejor=(erro) mais melhor|muy riquísima=(erro) muito deliciosa|más rica=mais gostosa|soy=sou|de la familia=da família|el peor día=o pior dia|de la semana=da semana|el Amazonas=o Amazonas|el río=o rio|más largo=mais longo|del mundo=do mundo|este hotel=este hotel|la ciudad=a cidade|más bonita=mais bonita|de Chile=do Chile|la mejor=a melhor|la peor=a pior|los mejores=os melhores|rico=gostoso|lindo=lindo|caro=caro|muy rico=muito gostoso|es el mejor=é o melhor|es la ciudad=é a cidade|la menor=a mais nova|la mayor=a mais velha|el país más grande=o maior país');
S_('¿Cuál prefieres?', 'el rojo=o vermelho|o=ou|el azul=o azul|es más elegante=é mais elegante|la grande=a grande|tengo=tenho|dos camisas=duas camisas|la de rayas=a listrada|es más original=é mais original|no te gusta=você não gosta|la blanca=a branca|sí=sim|pero=mas|es más bonita=é mais bonita|yo=eu|prefero=(erro) prefero|prefiro=(erro) prefiro|qué color=que cor|tu favorito=seu favorito|el de la izquierda=o da esquerda|preferimos=preferimos|quedarnos=ficar|en casa=em casa|prefiere=prefere|prefieren=preferem|qué talla=que tamanho|cuál es tu nombre=qual é o seu nome|te gustan=você gosta|color=cor|es=é|qué=que');
S_('De compras y devoluciones', 'quería=queria|esta camisa=esta camisa|un poco=um pouco|grande=grande|tiene=tem|buenas tardes=boa tarde|qué problema=que problema|la tiene=tem|en talla M=no tamanho M|sí=sim|aquí está=aqui está|quiero que=quero que|quise=quis|fica=(erro) fica|queden=fiquem|tamaño=tamanho|número=número|quiero=quero|me queda bien=fica bem em mim|me quedan=ficam em mim|chicos=pequenos|en otra talla=em outro tamanho|puedo probármelo=posso experimentá-lo|dónde está=onde está|me devuelven=vocês me devolvem|el dinero=o dinheiro|un defecto=um defeito|puedo probármela=posso experimentá-la|los zapatos=os sapatos|una mancha=uma mancha|me pueden devolver=vocês podem me devolver|una calça=uma calça|pantalón=calça|chico=pequeno|M=M|me queda chico=fica pequeno em mim|me queda grande=fica grande em mim');
S_('Una reseña de producto', 'compré=comprei|estos=estes|hace un mes=há um mês|es=é|la batería=a bateria|el precio=o preço|los recomiendo=recomendo|totalmente=totalmente|leíste=você leu|las reseñas=as avaliações|antes de comprar=antes de comprar|sí=sim|casi todas=quase todas|dicen que=dizem que|el mejor=o melhor|de su precio=pela faixa de preço|y lo peor=e o pior|dura=dura|menos de lo prometido=menos do que o prometido|son=são|más mejores=(erro) mais melhores|recomendo=(erro) recomendo|recomiendan=recomendam|lo uso=uso|todos los días=todos os dias|es mejor que=é melhor que|más cómodo=mais confortável|tan bueno como=tão bom quanto|le doy=dou|cuatro=quatro|lo recomiendo=recomendo|no lo recomiendo=não recomendo|del sonido=do som|excelente=excelente|más liviano=mais leve|el modelo anterior=o modelo anterior|no vale la pena=não vale a pena|por ese precio=por esse preço|SonaMax=SonaMax|X2=X2|Camila=Camila|Santiago=Santiago|hace dos meses=há dois meses|los uso=uso|para trabajar=para trabalhar|para correr=para correr|el sonido=o som|muchísimo=muitíssimo|el de=o de|mis audífonos=meus fones|además=além disso|más livianos=mais leves|muy cómodos=muito confortáveis|en la página=na página|dice que=diz que|veinte horas=vinte horas|pero=mas|en realidad=na verdade|menos de quince=menos de quinze|el envío=a entrega|fue=foi|rapidísimo=rapidíssimo|llegaron=chegaram|en dos días=em dois dias|no es=não é|el más barato=o mais barato|la calidad=a qualidade|cuatro estrellas=quatro estrelas|no son perfectos=não são perfeitos|este celular=este celular|hace tres meses=há três meses|mucho mejor=muito melhor|mi celular anterior=meu celular anterior|la cámara=a câmera|lo bueno=o lado bom|es el mejor celular=é o melhor celular|el móvil=o celular (Espanha)|auriculares=fones (Espanha)|celular=celular|liviano=leve');
['cartagena', 'medellín', 'lima', 'camila', 'santiago', 'sonamax', 'fogón', 'amazonas', 'sudamérica'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'es-masque': {
    o: 'Comparar com **más … que** e **menos … que**. Irregulares: **mejor**, **peor**, **mayor**, **menor**. Com números: **más de cien**.',
    q: 'Para comparar preços, cidades, pessoas e opções.',
    p: '"Más mejor" é erro, como "mais melhor" em português.',
  },
  'es-tancomo': {
    o: 'Igualdade: **tan** + adjetivo + **como**; **tanto / tanta / tantos / tantas** + substantivo + **como**; **el mismo que**.',
    q: 'Para dizer que duas coisas são iguais ou parecidas.',
    p: 'O nosso "quanto" vira **como**: tan grande **como**.',
  },
  'es-mejor': {
    o: 'Superlativos: **el / la más … de**, **el mejor**, **el peor**, **el mayor**. E **-ísimo** para intensificar: **carísimo**, **riquísimo**.',
    q: 'Para dizer que algo é o mais, o melhor ou o pior.',
    p: 'Comida **rica** é comida gostosa, e **-ísimo** nunca leva muy.',
  },
  'es-prefieres': {
    o: '**¿Cuál prefieres?** para escolher; **¿qué** + substantivo**?** (**¿Qué color?**). **preferir** (e → ie) e o substantivo omitido: **el rojo**, **la grande**.',
    q: 'Para escolher entre opções numa loja, num cardápio ou num plano.',
    p: '"Qual cor?" é **¿Qué color?**, e não "¿cuál color?".',
  },
  'es-devolucion': {
    o: 'Trocar e devolver: **Quería cambiar …**, **me queda grande / chico**, **la talla**, **el recibo**, **el probador**, **el reembolso**.',
    q: 'Para resolver problemas em lojas.',
    p: '**largo** é comprido; o nosso "largo" é **ancho**.',
  },
  'es-resena': {
    o: 'Uma avaliação de produto: contexto, comparações, **lo mejor** e **lo peor**, a nota e a recomendação (**Lo recomiendo**).',
    q: 'Para avaliar produtos e ler avaliações antes de comprar.',
    p: 'Junta tudo do módulo num texto prático.',
  },
});
Object.assign(CZH, {
  'es-masque': ['más … ?', 'melhor', 'mais velha'],
  'es-tancomo': ['com adjetivo', 'tiempo', 'gente'],
  'es-mejor': ['superlativo + ?', 'melhor', 'muito gostosa'],
  'es-prefieres': ['entre opções', 'preferir, com yo', 'a camisa'],
  'es-devolucion': ['queria', 'ficar (roupa)', 'tamanho'],
  'es-resena': ['o melhor de tudo', 'melhores', 'recomendo'],
});
Object.assign(OBJ, {
  'es-masque': { o: 'Consigo comparar com más, menos, mejor e peor.', a: 'Você consegue comparar duas cidades que conhece?', ref: 'Expresión oral · A2' },
  'es-tancomo': { o: 'Consigo dizer que duas coisas são iguais.', a: 'Você sabe quando usar tan e quando usar tanto?', ref: 'Gramática · A2' },
  'es-mejor': { o: 'Uso os superlativos e o -ísimo.', a: 'Você consegue dizer qual é o melhor restaurante da sua cidade?', ref: 'Expresión oral · A2' },
  'es-prefieres': { o: 'Consigo escolher e dizer o que prefiro.', a: 'Você sabe quando usar cuál e quando usar qué?', ref: 'Interacción oral · A2' },
  'es-devolucion': { o: 'Consigo trocar e devolver coisas numa loja.', a: 'Você consegue dizer que uma roupa ficou pequena e pedir outro tamanho?', ref: 'Interacción oral · A2' },
  'es-resena': { o: 'Consigo ler e escrever uma avaliação de produto.', a: 'Você consegue avaliar algo que comprou, em espanhol?', ref: 'Expresión escrita · A2' },
});
MOD_OBJ[8] = ['Consigo comparar coisas e pessoas.', 'Uso os superlativos.', 'Consigo escolher e trocar numa loja.', 'Consigo escrever uma avaliação de produto.'];

ES_MODS.push({ lv: 'A2', n: 'Comparar', l: ['es-masque', 'es-tancomo', 'es-mejor', 'es-prefieres', 'es-devolucion', 'es-resena'] });
