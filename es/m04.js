// Espanhol · A1 · Módulo 4 · Comer y comprar (Comer e comprar). Formato de es/curso.js.

NL('es-hambre', {
  de: 'Tengo hambre', pt: 'Fome, sede, frio e calor', gt: 'tener + hambre, sed, frío, calor, sueño, prisa · ¿qué quieres comer?',
  gx: 'Em espanhol, fome, sede, frio, calor, sono e pressa se "têm": tengo hambre (estou com fome), tengo sed (estou com sede), tengo frío, tengo calor, tengo sueño, tengo prisa. Para intensificar, use mucho / mucha: tengo mucha hambre, tengo mucho frío.',
  ge: 'Tengo mucha hambre.=Estou com muita fome.|¿Tienes sed?=Você está com sede?|Tenemos frío.=Estamos com frio.',
  v: 'hambre=fome=🍽️|sed=sede=🥤|frío=frio=🥶|calor=calor=🥵|sueño=sono=😴|prisa=pressa=🏃|comer=comer=🍴|beber=beber=🥛|agua=água=💧|pan=pão=🍞',
  x: 'tomar=tomar, beber|merienda=lanche da tarde|algo=algo|ahora=agora|todavía=ainda|ya=já|un poco=um pouco|mucho=muito|nada=nada|una botella=uma garrafa',
  dlg: '¿Tienes hambre?=Você está com fome?|¡Sí, mucha! No desayuné.=Sim, muita! Não tomei café da manhã.|Hay pan y queso en la cocina.=Tem pão e queijo na cozinha.|¡Perfecto! Y tengo sed también. ¿Hay agua?=Perfeito! E estou com sede também. Tem água?',
  cz: 'Tengo mucha ___. (fome)=hambre=fome=hambres|¿___ sed? (você está com)=Tienes=Estás con=Eres|Tengo ___ frío. (muito)=mucho=mucha=muy',
  whys: 'fome: hambre (feminino: mucha hambre)|sede se "tem": tienes sed|frío é masculino: mucho frío',
  pts: 'tener + hambre, sed, frío, calor, sueño, prisa: tengo hambre (estou com fome), tengo sueño (estou com sono).|Para intensificar: mucho / mucha, que concorda com o substantivo: mucha hambre, mucha sed, mucho frío, mucho calor, mucho sueño.|Pergunta e negativa: ¿Tienes hambre? / No tengo hambre.|Para oferecer: ¿Quieres algo de comer? ¿Quieres algo de tomar?',
  ex: 'No tengo hambre, gracias.=Não estou com fome, obrigada.|Tengo sueño. Me voy a dormir.=Estou com sono. Vou dormir.|¿Quieres algo de tomar?=Quer algo para beber?|Tengo prisa, voy a llegar tarde.=Estou com pressa, vou chegar atrasada.',
  bd: ['Tengo=V^tener: fome, sede, frio… se "têm"|mucha=C^mucha: hambre é feminino|hambre.=OA', 'Estou com muita fome.'],
  rule: 'hambre',
  hw: 'Escreva como você está agora e em três momentos do dia (de manhã, depois do almoço, à noite), com tengo hambre, sed, frío, calor, sueño ou prisa.',
  deep: `
Hoje você aprende a dizer como está: com fome, com sede, com frio. Em espanhol, tudo isso se **tem**.
# Passo 1: tener + sensação
@ F:Tener + sensação;Quem^s|tener^v|Sensação^p;(Yo)|tengo|hambre.;¿(Tú)|tienes|sed?;(Nosotros)|tenemos|frío.
~ Tengo mucha hambre. = Estou com muita fome.
~ ¿Tienes sed? = Você está com sede?
BR Em português, a gente "**está com** fome". Em espanhol, a gente "**tem** fome": tengo hambre. "Estoy con hambre" soa estranho.
# Passo 2: as seis sensações
| Em espanhol | Em português |
| tengo hambre | estou com fome |
| tengo sed | estou com sede |
| tengo frío | estou com frio |
| tengo calor | estou com calor |
| tengo sueño | estou com sono |
| tengo prisa | estou com pressa |
~ Tengo sueño. Me voy a dormir. = Estou com sono. Vou dormir.
~ Tengo prisa, voy a llegar tarde. = Estou com pressa, vou chegar atrasada.
# Passo 3: mucho ou mucha?
| Feminino | Masculino |
| mucha hambre | mucho frío |
| mucha sed | mucho calor |
| mucha prisa | mucho sueño |
~ Tenemos frío. = Estamos com frio.
! **hambre** é feminino: mucha hambre (mas se diz **el hambre** no singular, por causa do som: el agua, el hambre).
# Passo 4: oferecer e recusar
~ ¿Quieres algo de tomar? = Quer algo para beber?
~ No tengo hambre, gracias. = Não estou com fome, obrigada.
| Oferecer | Responder |
| ¿Quieres algo de comer? | Sí, gracias. / No, gracias. |
| ¿Tienes hambre? | Un poco. / ¡Mucha! |
> Treine agora: diga como você está agora, com tener e duas sensações.
? "Estou com fome": || Tengo hambre.
? "Muita sede": || mucha sed
? "Estou com sono": || Tengo sueño.
`,
});

NL('es-mercado', {
  de: 'En el mercado', pt: 'Comprar na feira e no mercado', gt: '¿cuánto cuesta? · un kilo de, medio kilo, una docena · ¿algo más?',
  gx: 'Para comprar comida: Quiero un kilo de tomates, medio kilo de queso, una docena de huevos. Para o preço: ¿Cuánto cuesta? (uma coisa) / ¿Cuánto cuestan? (várias) / ¿Cuánto es? (o total). O vendedor pergunta: ¿Algo más? (mais alguma coisa?).',
  ge: 'Quiero un kilo de tomates, por favor.=Quero um quilo de tomates, por favor.|¿Cuánto cuestan las manzanas?=Quanto custam as maçãs?|¿Algo más? No, eso es todo.=Mais alguma coisa? Não, é só isso.',
  v: 'mercado=mercado, feira=🛒|kilo=quilo=⚖️|medio=meio=½|docena=dúzia=🥚|tomate=tomate=🍅|manzana=maçã=🍎|queso=queijo=🧀|huevo=ovo=🥚|cuánto cuesta=quanto custa=💲|algo más=mais alguma coisa=➕',
  x: 'papa=batata|cebolla=cebola|plátano=banana|naranja=laranja|carne=carne|pollo=frango|leche=leite|arroz=arroz|frijoles=feijão|eso es todo=é só isso',
  dlg: 'Buenos días. ¿Qué le doy?=Bom dia. O que vai ser?|Un kilo de tomates y medio kilo de queso, por favor.=Um quilo de tomates e meio quilo de queijo, por favor.|Aquí tiene. ¿Algo más?=Aqui está. Mais alguma coisa?|No, eso es todo. ¿Cuánto es?=Não, é só isso. Quanto é?',
  cz: '¿Cuánto ___ las manzanas? (custam)=cuestan=cuesta=costam|Quiero medio ___ de queso.=kilo=quilo=quilos|Una ___ de huevos. (dúzia)=docena=dúzia=doce',
  whys: 'várias coisas: cuestan|quilo: kilo|dúzia: docena',
  pts: 'Pedir: Quiero … / Me da …, por favor / Quisiera … (mais educado). Quantidades: un kilo de, medio kilo de, cien gramos de, una docena de, una botella de, un paquete de.|Preço: ¿Cuánto cuesta el queso? (uma coisa), ¿Cuánto cuestan las manzanas? (várias), ¿Cuánto es? (o total).|O vendedor: ¿Qué le doy? / ¿Qué desea? (o que deseja?), ¿Algo más?, Aquí tiene (aqui está).|Frutas e verduras mudam de nome de país para país: papa (batata), plátano / banana, frijoles / porotos (feijão).',
  ex: 'Me da una docena de huevos.=Me dá uma dúzia de ovos.|Son quinientos pesos.=São quinhentos pesos.|¿Tiene plátanos?=Tem banana?|Aquí tiene.=Aqui está.',
  bd: ['Quiero=V^querer: e → ie|un_kilo_de=C^quantidade + de|tomates,=OA|por_favor.=C', 'Quero um quilo de tomates, por favor.'],
  rule: 'mercado',
  hw: 'Escreva a sua lista de compras da semana em espanhol, com quantidades (un kilo de, una docena de…), e um diálogo curto pedindo três coisas e perguntando o preço.',
  deep: `
Hoje você vai à feira e ao mercado: pedir quantidades, perguntar o preço e pagar.
# Passo 1: pedir com quantidades
| Quantidade | Exemplo |
| un kilo de | un kilo de tomates |
| medio kilo de | medio kilo de queso |
| cien gramos de | cien gramos de jamón |
| una docena de | una docena de huevos |
| una botella de | una botella de agua |
~ Quiero un kilo de tomates, por favor. = Quero um quilo de tomates, por favor.
~ Me da una docena de huevos. = Me dá uma dúzia de ovos.
# Passo 2: o preço
@ M:Cuesta ou cuestan?;Pergunta|Para;¿Cuánto cuesta el queso?|uma coisa;¿Cuánto cuestan las manzanas?|várias coisas;¿Cuánto es?|o total
~ ¿Cuánto cuestan las manzanas? = Quanto custam as maçãs?
~ Son quinientos pesos. = São quinhentos pesos.
# Passo 3: o que o vendedor diz
| Vendedor | Em português |
| ¿Qué le doy? / ¿Qué desea? | O que vai ser? |
| ¿Algo más? | Mais alguma coisa? |
| Aquí tiene. | Aqui está. |
~ ¿Algo más? No, eso es todo. = Mais alguma coisa? Não, é só isso.
~ Aquí tiene. = Aqui está.
# Passo 4: ojo, brasileño: os nomes que mudam
| Português | Espanhol |
| batata | papa (na América Latina) |
| banana | plátano, banana |
| feijão | frijoles, porotos |
| abacate | aguacate, palta |
~ ¿Tiene plátanos? = Tem banana?
~ ¿Cómo se llama esto? = Como se chama isto?
! O mesmo alimento muda de nome entre países: **palta** no Chile e na Argentina, **aguacate** no México e na Colômbia. Na dúvida, aponte e pergunte: **¿Cómo se llama esto?**
> Treine agora: peça três coisas na feira, com quantidades, e pergunte quanto é.
? "Quanto custam as maçãs?": || ¿Cuánto cuestan las manzanas?
? "Meio quilo de queijo": || medio kilo de queso
? "Mais alguma coisa?": || ¿Algo más?
`,
});

NL('es-restaurante', {
  de: 'En el restaurante', pt: 'Pedir num restaurante', gt: 'quisiera · para mí · de primero, de segundo · la cuenta · la propina',
  gx: 'Para pedir com educação: Quisiera … (eu queria), Para mí, … (para mim), ¿Me trae …? (me traz…?). O garçom pergunta: ¿Qué van a pedir? / ¿Para tomar? No fim: La cuenta, por favor. E a gorjeta é la propina (falso amigo!).',
  ge: 'Quisiera una mesa para dos.=Eu queria uma mesa para dois.|Para mí, el pescado con ensalada.=Para mim, o peixe com salada.|La cuenta, por favor.=A conta, por favor.',
  v: 'restaurante=restaurante=🍽️|mesa=mesa=🪑|carta, menú=cardápio=📜|quisiera=eu queria=🙏|para mí=para mim=🙋|pescado=peixe (prato)=🐟|ensalada=salada=🥗|postre=sobremesa=🍰|la cuenta=a conta=🧾|propina=gorjeta=💵',
  x: 'mesero, mesera=garçom, garçonete|plato=prato|de primero=de entrada|de segundo=de prato principal|bebida=bebida|vaso=copo|cuchara=colher|tenedor=garfo|cuchillo=faca|exquisito=delicioso',
  dlg: 'Buenas noches. ¿Ya saben qué van a pedir?=Boa noite. Já sabem o que vão pedir?|Sí. Para mí, el pollo con papas, por favor.=Sim. Para mim, o frango com batatas, por favor.|¿Y para tomar?=E para beber?|Una limonada, por favor. ¡Gracias!=Uma limonada, por favor. Obrigado!',
  cz: '___ una mesa para dos. (eu queria)=Quisiera=Queria=Quiera|Para ___, el pescado. (para mim)=mí=me=mi|La ___, por favor. (a conta)=cuenta=conta=cuento',
  whys: 'pedido educado: quisiera|depois de para: mí, com acento|a conta: la cuenta',
  pts: 'Pedir com educação: Quisiera … (eu queria) / Me trae …, por favor (me traz…) / Para mí, … (para mim).|O garçom: ¿Mesa para cuántos? ¿Qué van a pedir? ¿Para tomar? ¿Algo de postre?|O cardápio: la carta ou el menú; de primero (entrada), de segundo (principal), de postre (sobremesa). Menú del día: prato do dia com preço fixo.|No fim: La cuenta, por favor. ¿Puedo pagar con tarjeta? E a gorjeta: la propina.',
  ex: '¿Me trae un vaso de agua, por favor?=Me traz um copo de água, por favor?|De postre, un flan.=De sobremesa, um pudim.|¿Puedo pagar con tarjeta?=Posso pagar com cartão?|¡La comida está exquisita!=A comida está deliciosa!',
  bd: ['Para_mí,=C^para mim (mí com acento)|el_pescado=OA^o prato|con_ensalada.=C', 'Para mim, o peixe com salada.'],
  rule: 'restaurante',
  hw: 'Escreva um diálogo de seis falas num restaurante: pedir a mesa, a comida, a bebida, a sobremesa, a conta e elogiar a comida.',
  deep: `
Hoje você vai a um restaurante: pedir a mesa, a comida, a bebida e a conta, com educação.
# Passo 1: chegar e pedir a mesa
~ Quisiera una mesa para dos. = Eu queria uma mesa para dois.
| Garçom | Você |
| ¿Mesa para cuántos? | Para dos, por favor. |
| ¿Ya saben qué van a pedir? | Sí. / Un momento, por favor. |
BR **Quisiera** é o nosso "eu queria", educado. "Quiero" também serve, mas soa mais direto.
# Passo 2: pedir a comida
@ P:O cardápio;Entrada=de primero;Principal=de segundo;Sobremesa=de postre;Bebida=para tomar
~ Para mí, el pescado con ensalada. = Para mim, o peixe com salada.
~ De postre, un flan. = De sobremesa, um pudim.
! **mí** (mim) tem acento. **mi** sem acento é "meu, minha": para **mí** / **mi** plato.
# Passo 3: pedir algo mais e pagar
| Em espanhol | Em português |
| ¿Me trae …? | Me traz …? |
| La cuenta, por favor. | A conta, por favor. |
| ¿Puedo pagar con tarjeta? | Posso pagar com cartão? |
~ ¿Me trae un vaso de agua, por favor? = Me traz um copo de água, por favor?
~ La cuenta, por favor. = A conta, por favor.
# Passo 4: ojo, brasileño: propina e exquisito
| Em espanhol | Quer dizer |
| la propina | a gorjeta |
| exquisito | delicioso |
| pescado | peixe (para comer) |
| pez | peixe (vivo, no mar) |
~ ¡La comida está exquisita! = A comida está deliciosa!
! **propina** em espanhol é gorjeta: totalmente normal deixar uma. E **exquisito** é um elogio!
> Treine agora: peça um prato, uma bebida e a conta, em voz alta.
? "Eu queria uma mesa": || Quisiera una mesa.
? O que é "propina"? || gorjeta
? "A conta, por favor": || La cuenta, por favor.
`,
});

NL('es-este', {
  de: 'Este, ese, aquel', pt: 'Os demonstrativos', gt: 'este (aqui), ese (aí), aquel (lá) · esto, eso',
  gx: 'Os demonstrativos mostram a distância: este (este, aqui perto de mim), ese (esse, perto de você), aquel (aquele, longe dos dois). Eles concordam: este / esta / estos / estas. Para algo sem nome: esto, eso, aquello. Muito úteis para comprar apontando.',
  ge: '¿Cuánto cuesta esta camisa?=Quanto custa esta camisa?|Quiero ese pan, por favor.=Quero esse pão, por favor.|¿Qué es aquello?=O que é aquilo?',
  v: 'este, esta=este, esta=👇|estos, estas=estes, estas=👇|ese, esa=esse, essa=👉|esos, esas=esses, essas=👉|aquel, aquella=aquele, aquela=👆|aquellos=aqueles=👆|esto=isto=❓|eso=isso=❓|aquello=aquilo=❓|aquí=aqui=📍',
  x: 'ahí=aí|allí, allá=lá|cerca=perto|lejos=longe|al lado=ao lado|este de aquí=este aqui|el otro=o outro|cuál=qual|mostrar=mostrar|probar=provar',
  dlg: '¿Cuánto cuesta esta camisa?=Quanto custa esta camisa?|¿Esa azul? Cuesta veinte dólares.=Essa azul? Custa vinte dólares.|¿Y aquella verde, la de la ventana?=E aquela verde, a da vitrine?|Aquella es más cara: treinta dólares.=Aquela é mais cara: trinta dólares.',
  cz: '¿Cuánto cuesta ___ camisa? (esta, aqui)=esta=este=esto|Quiero ___ pan. (esse, perto de você)=ese=esa=eso|¿Qué es ___? (aquilo)=aquello=aquel=aquella',
  whys: 'camisa é feminino, perto de mim: esta|pan é masculino, perto de você: ese|algo sem nome, longe: aquello',
  pts: 'Três distâncias: este (perto de mim, aqui), ese (perto de você, aí), aquel (longe dos dois, lá).|Concordam com o substantivo: este libro, esta mesa, estos libros, estas mesas; ese / esa / esos / esas; aquel / aquella / aquellos / aquellas.|Para algo sem nome ou uma ideia: esto (isto), eso (isso), aquello (aquilo). Nunca mudam: ¿Qué es esto?|Com advérbios: aquí (aqui), ahí (aí), allí / allá (lá).',
  ex: 'Estos zapatos son cómodos.=Estes sapatos são confortáveis.|¿Puedo probarme esa chaqueta?=Posso provar essa jaqueta?|Eso es todo, gracias.=É só isso, obrigada.|Aquellas casas son muy antiguas.=Aquelas casas são muito antigas.',
  bd: ['¿Cuánto_cuesta=V^quanto custa|esta=C^esta: perto de mim (camisa é feminino)|camisa?=S', 'Quanto custa esta camisa?'],
  rule: 'demostrativos',
  hw: 'Imagine que está numa loja e escreva seis frases apontando produtos: este, esa, aquellos… e pergunte o preço de três deles.',
  deep: `
Hoje você aprende a apontar: este, esse, aquele. Muito útil para comprar quando você não sabe o nome das coisas.
# Passo 1: três distâncias
@ P:Perto ou longe?;Aqui (perto de mim)=este;Aí (perto de você)=ese;Lá (longe dos dois)=aquel
~ ¿Cuánto cuesta esta camisa? = Quanto custa esta camisa?
~ Quiero ese pan, por favor. = Quero esse pão, por favor.
# Passo 2: a concordância
| | Masculino | Feminino |
| aqui | este / estos | esta / estas |
| aí | ese / esos | esa / esas |
| lá | aquel / aquellos | aquella / aquellas |
~ Estos zapatos son cómodos. = Estes sapatos são confortáveis.
~ Aquellas casas son muy antiguas. = Aquelas casas são muito antigas.
# Passo 3: esto, eso, aquello
~ ¿Qué es aquello? = O que é aquilo?
~ Eso es todo, gracias. = É só isso, obrigada.
| Neutro | Quando usar |
| esto | algo sem nome, aqui |
| eso | algo sem nome, aí; uma ideia |
| aquello | algo sem nome, lá |
# Passo 4: ojo, brasileño: "este" não é "esse"
| Português falado | Espanhol |
| "esse aqui" | este |
| "esse aí" | ese |
~ ¿Puedo probarme esa chaqueta? = Posso provar essa jaqueta?
! No Brasil, muita gente usa "esse" para tudo. Em espanhol, a distinção vale: **este** (aqui) e **ese** (aí) não são a mesma coisa.
> Treine agora: aponte três objetos à sua volta e diga este, ese e aquel.
? "Esta camisa" (aqui): || esta camisa
? "Aquilo" (algo sem nome): || aquello
? Plural de "ese": || esos
`,
});

NL('es-ropa', {
  de: 'La ropa', pt: 'Comprar roupa', gt: 'la talla · probarse · ¿me queda bien? · quedar',
  gx: 'Para comprar roupa: ¿Qué talla usa? (que tamanho?), ¿Puedo probármelo? (posso provar?), ¿Dónde está el probador? (o provador). E o verbo quedar, que funciona como gustar: me queda bien (fica bem em mim), me queda grande (fica grande), me quedan chicos (ficam pequenos).',
  ge: '¿Puedo probarme estos pantalones?=Posso provar estas calças?|La camisa me queda grande.=A camisa fica grande em mim.|¿Tiene una talla más chica?=Tem um tamanho menor?',
  v: 'ropa=roupa=👗|camisa=camisa=👔|camiseta=camiseta=👕|pantalones=calças=👖|falda=saia=👗|vestido=vestido=👗|zapatos=sapatos=👞|chaqueta=jaqueta=🧥|talla=tamanho (de roupa)=📏|probador=provador=🚪',
  x: 'probarse=provar (roupa)|quedar bien=ficar bem|grande=grande|chico, pequeño=pequeno|más grande=maior|más chico=menor|número=número (de sapato)|en oferta=em promoção|descuento=desconto|caja=caixa (para pagar)',
  dlg: 'Hola. ¿Puedo probarme esta chaqueta?=Oi. Posso provar esta jaqueta?|Claro. ¿Qué talla usa?=Claro. Que tamanho a senhora usa?|La M. ¿Dónde está el probador?=O M. Onde fica o provador?|Al fondo, a la derecha.=No fundo, à direita.',
  cz: '¿Qué ___ usa? (tamanho)=talla=tamaño=talle de|La camisa me ___ grande.=queda=quedan=fica|Los pantalones me ___ chicos.=quedan=queda=ficam',
  whys: 'tamanho de roupa: talla|uma peça: queda|várias (pantalones): quedan',
  pts: 'talla é o tamanho de roupa (S, M, L ou números); para sapatos, número: ¿Qué número calza?|probarse = provar roupa: ¿Puedo probármelo? (posso provar isso?). El probador = o provador.|quedar funciona como gustar: me queda bien (fica bem em mim), te queda grande, me quedan chicos (os sapatos ficam pequenos).|pantalones é plural, como o nosso "calças": estos pantalones me quedan bien.',
  ex: '¿Qué número calza?=Que número você calça?|Este vestido te queda muy bien.=Este vestido fica muito bem em você.|¿Está en oferta?=Está em promoção?|Voy a pagar en la caja.=Vou pagar no caixa.',
  bd: ['La_camisa=S^a coisa: o sujeito, como em gustar|me=OD^em mim|queda=V^quedar: fica|grande.=C', 'A camisa fica grande em mim.'],
  rule: 'ropa',
  hw: 'Escreva um diálogo de seis falas numa loja de roupas: pedir para provar, dizer o tamanho, perguntar o provador, dizer como ficou e perguntar o preço.',
  deep: `
Hoje você compra roupa: pedir para provar, dizer o tamanho e comentar como ficou.
# Passo 1: as roupas
| Em espanhol | Em português |
| la camisa / la camiseta | a camisa / a camiseta |
| los pantalones | as calças |
| la falda | a saia |
| el vestido | o vestido |
| la chaqueta | a jaqueta |
| los zapatos | os sapatos |
~ ¿Puedo probarme estos pantalones? = Posso provar estas calças?
# Passo 2: talla e número
| Em espanhol | Para |
| ¿Qué talla usa? | roupa (S, M, L, 40…) |
| ¿Qué número calza? | sapatos (37, 38…) |
~ ¿Tiene una talla más chica? = Tem um tamanho menor?
~ ¿Qué número calza? = Que número você calça?
# Passo 3: quedar, como gustar
@ F:Quedar;A peça^s|me queda / me quedan^v|Como fica^p;La camisa|me queda|grande.;Los zapatos|me quedan|chicos.;El vestido|te queda|muy bien.
~ La camisa me queda grande. = A camisa fica grande em mim.
~ Este vestido te queda muy bien. = Este vestido fica muito bem em você.
BR **quedar** funciona como gustar: a **roupa** é o sujeito. Uma peça: **queda**. Várias: **quedan**.
# Passo 4: ojo, brasileño: talla, probador, caja
| Em espanhol | Em português |
| la talla | o tamanho (roupa) |
| el probador | o provador |
| la caja | o caixa (onde se paga) |
| en oferta | em promoção |
~ ¿Está en oferta? = Está em promoção?
~ Voy a pagar en la caja. = Vou pagar no caixa.
! "**Talla**" não tem nada a ver com "talho": é o **tamanho** da roupa.
> Treine agora: peça para provar uma roupa e diga como ficou.
? "Que tamanho você usa?": || ¿Qué talla usa?
? "Fica grande em mim": || Me queda grande.
? "As calças ficam pequenas": || Los pantalones me quedan chicos.
`,
});

NL('es-menu', {
  de: 'El menú del día', pt: 'Ler um cardápio e montar o seu pedido', gt: 'menú del día · de primero, de segundo, de postre · incluye',
  gx: 'Em muitos países latino-americanos, o almoço tem o menú del día (ou menú ejecutivo, corrientazo): um preço fixo com entrada (de primero), prato principal (de segundo), bebida e às vezes sobremesa (de postre). Ler um cardápio é entender essas partes e os nomes dos pratos.',
  ge: 'El menú del día incluye sopa, plato principal y bebida.=O prato do dia inclui sopa, prato principal e bebida.|De primero, quiero la sopa de verduras.=De entrada, quero a sopa de legumes.|¿El postre está incluido?=A sobremesa está incluída?',
  v: 'menú del día=prato do dia (preço fixo)=📋|incluye=inclui=✅|sopa=sopa=🥣|plato principal=prato principal=🍛|bebida=bebida=🥤|verduras=verduras, legumes=🥦|carne=carne=🥩|pollo=frango=🍗|arroz=arroz=🍚|incluido=incluído=☑️',
  x: 'a elegir=à escolha|o=ou|precio=preço|jugo natural=suco natural|café=café|helado=sorvete|flan=pudim|frijoles=feijão|vegetariano=vegetariano|sin=sem',
  dlg: '¿Cuál es el menú del día?=Qual é o prato do dia?|De primero, sopa o ensalada. De segundo, pollo o pescado.=De entrada, sopa ou salada. De prato principal, frango ou peixe.|¿Incluye bebida?=Inclui bebida?|Sí, incluye un jugo natural y el postre.=Sim, inclui um suco natural e a sobremesa.',
  cz: 'El menú ___ sopa y bebida. (inclui)=incluye=inclue=incluí|De ___, quiero la sopa. (entrada)=primero=primer=entrada|¿El postre está ___? (incluído)=incluido=incluído=incluye',
  whys: 'incluir: incluye|entrada no cardápio: de primero|particípio: incluido',
  pts: 'Menú del día: preço fixo com de primero (entrada), de segundo (principal), bebida e às vezes postre (sobremesa). Em cada parte, você escolhe: a elegir.|Para pedir: De primero, quiero … / De segundo, … / Para tomar, …|Perguntas úteis: ¿Qué incluye? ¿Está incluido el postre? ¿Tiene opción vegetariana? ¿Es picante?|Nomes que mudam: jugo (suco, na América Latina; zumo na Espanha), papas (batatas), frijoles (feijão).',
  ex: '¿Tiene opción vegetariana?=Tem opção vegetariana?|¿Es picante?=É apimentado?|Sin cebolla, por favor.=Sem cebola, por favor.|Para tomar, un jugo de naranja.=Para beber, um suco de laranja.',
  bd: ['El_menú_del_día=S^prato do dia, preço fixo|incluye=V^incluir: inclui|sopa,_plato_principal_y_bebida.=OA', 'O prato do dia inclui sopa, prato principal e bebida.'],
  rule: 'menu',
  le: {
    texto: {
      t: 'Restaurante La Casona · Menú del día', kind: 'cardápio', voz: 'b',
      intro: 'Um restaurante em Bogotá anuncia o almoço do dia. Leia o cardápio e responda.',
      paras: ['Menú del día: 25.000 pesos', 'De primero (a elegir): sopa de verduras o ensalada de la casa.', 'De segundo (a elegir): pollo a la plancha con arroz y papas, o pescado con ensalada. Opción vegetariana: arroz con frijoles y plátano.', 'Bebida: jugo natural de mango o de naranja.', 'Postre: flan o fruta. El café no está incluido (3.000 pesos).', 'De lunes a viernes, de 12 a 3 de la tarde.'],
      qs: [
        { q: 'Quanto custa o prato do dia?', o: ['25.000 pesos', '3.000 pesos', '12 pesos'], a: 0 },
        { q: 'Qual é a opção vegetariana?', o: ['arroz com feijão e banana', 'sopa de legumes', 'salada da casa'], a: 0 },
        { q: 'O que não está incluído?', o: ['o café', 'o suco', 'a sobremesa'], a: 0 },
        { q: 'Quando servem o prato do dia?', o: ['de segunda a sexta, do meio-dia às três', 'todos os dias à noite', 'só aos sábados'], a: 0 },
      ],
    },
    escrita: {
      t: 'Faça o seu pedido', tipo: 'form', ok: 'Pedido completo.',
      pede: 'Você está no La Casona. Escolha e escreva o seu pedido, parte por parte.',
      campos: [
        { l: 'De primero', d: 'De primero, quiero …', re: '\\b(sopa|ensalada)\\b', f: 'iu', err: 'Escolha a entrada: De primero, quiero la sopa de verduras.' },
        { l: 'De segundo', d: 'De segundo, …', re: '\\b(pollo|pescado|arroz|frijoles|vegetariana)\\b', f: 'iu', err: 'Escolha o prato principal: De segundo, el pollo con arroz.' },
        { l: 'Para tomar', d: 'Para tomar, un jugo de …', re: '\\b(jugo|agua|limonada)\\b', f: 'iu', err: 'Escolha a bebida: Para tomar, un jugo de mango.', bad: [['\\bsuco\\b', 'Suco, na América Latina, é <b>jugo</b>.']] },
        { l: 'De postre', d: 'De postre, …', re: '\\b(flan|fruta|helado)\\b', f: 'iu', err: 'Escolha a sobremesa: De postre, el flan.' },
        { l: 'Una pregunta', d: '¿Está incluido …? / ¿Es picante?', re: '\\?$', f: 'u', err: 'Faça uma pergunta ao garçom, com ¿ … ?: ¿Está incluido el café?' },
        { l: 'Al final', d: 'La cuenta, por favor.', re: '\\b(cuenta|pagar|tarjeta)\\b', f: 'iu', err: 'Peça a conta: La cuenta, por favor.', bad: [['\\bconta\\b', 'A conta, em espanhol, é <b>la cuenta</b>.']] },
      ],
      modelo: 'De primero, quiero la sopa de verduras. · De segundo, el pollo con arroz y papas. · Para tomar, un jugo de mango. · De postre, el flan. · ¿Está incluido el café? · La cuenta, por favor.',
    },
  },
  hw: 'Monte o cardápio do dia de um restaurante imaginário em espanhol, com duas opções de entrada, duas de prato principal, bebida, sobremesa e preço.',
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo. Você vai ler um cardápio de Bogotá e montar o seu pedido, usando o que aprendeu no restaurante e no mercado.
# Passo 1: o menú del día
@ P:O prato do dia;Entrada=de primero;Principal=de segundo;Bebida=para tomar;Sobremesa=de postre
~ El menú del día incluye sopa, plato principal y bebida. = O prato do dia inclui sopa, prato principal e bebida.
BR É como o nosso "prato feito" ou "executivo": preço fixo, almoço completo. Na Colômbia também se chama **corrientazo**; no Chile, **menú ejecutivo**.
# Passo 2: ler as opções
| No cardápio | Quer dizer |
| a elegir | à escolha |
| o | ou |
| incluido / no incluido | incluído / não incluído |
| opción vegetariana | opção vegetariana |
~ ¿El postre está incluido? = A sobremesa está incluída?
~ ¿Tiene opción vegetariana? = Tem opção vegetariana?
# Passo 3: montar o pedido
~ De primero, quiero la sopa de verduras. = De entrada, quero a sopa de legumes.
~ Para tomar, un jugo de naranja. = Para beber, um suco de laranja.
| Parte | Frase |
| entrada | De primero, … |
| principal | De segundo, … |
| bebida | Para tomar, … |
| sobremesa | De postre, … |
# Passo 4: ojo, brasileño: jugo, picante, sin
| Em espanhol | Em português |
| jugo | suco |
| picante | apimentado |
| sin cebolla | sem cebola |
~ ¿Es picante? = É apimentado?
~ Sin cebolla, por favor. = Sem cebola, por favor.
! No México e em boa parte da América Latina, pergunte sempre **¿Es picante?** O picante de lá é bem mais forte que o nosso. 🌶️
> Agora leia o cardápio do La Casona e faça o seu pedido.
? "De entrada" no cardápio: || de primero
? "Suco" na América Latina: || jugo
? "É apimentado?": || ¿Es picante?
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('Tengo hambre',
  'F:Tener + sensação;Quem^s|tener^v|Sensação^p;(Yo)|tengo|hambre.;¿(Tú)|tienes|sed?',
  'V:Português e espanhol;Português|estou com fome;Espanhol|tengo hambre');
V('En el mercado',
  'M:Cuesta ou cuestan?;Pergunta|Para;¿Cuánto cuesta …?|uma coisa;¿Cuánto cuestan …?|várias;¿Cuánto es?|o total',
  'P:Quantidades;kilo=un kilo de;meio=medio kilo de;dúzia=una docena de;garrafa=una botella de');
V('En el restaurante',
  'P:O cardápio;Entrada=de primero;Principal=de segundo;Sobremesa=de postre;Bebida=para tomar',
  'V:Falsos amigos;propina|gorjeta;exquisito|delicioso');
V('Este, ese, aquel',
  'P:Perto ou longe?;Aqui=este;Aí=ese;Lá=aquel',
  'M:Neutros;Neutro|Quando;esto|aqui;eso|aí;aquello|lá');
V('La ropa',
  'F:Quedar;A peça^s|me queda / quedan^v|Como fica^p;La camisa|me queda|grande.;Los zapatos|me quedan|chicos.',
  'M:Tamanho;Para|Pergunta;roupa|¿Qué talla usa?;sapatos|¿Qué número calza?');
V('El menú del día',
  'P:O prato do dia;Entrada=de primero;Principal=de segundo;Bebida=para tomar;Sobremesa=de postre',
  'V:Nomes;jugo|suco;picante|apimentado');
S_('Tengo hambre', 'tengo=tenho, estou com|tienes=você tem, está com|tenemos=estamos com|mucha=muita|desayuné=tomei café da manhã|queso=queijo|cocina=cozinha|perfecto=perfeito|también=também|hay=tem|gracias=obrigada|me voy=vou|dormir=dormir|quieres=quer|algo de tomar=algo para beber|voy a llegar tarde=vou chegar atrasada|el agua=a água|el hambre=a fome|comer=comer|sí=sim|no=não');
S_('En el mercado', 'quiero=quero|tomates=tomates|por favor=por favor|cuánto=quanto|cuestan=custam|manzanas=maçãs|qué le doy=o que vai ser|medio kilo=meio quilo|aquí tiene=aqui está|eso es todo=é só isso|cuánto es=quanto é|me da=me dá|huevos=ovos|son=são|quinientos=quinhentos|pesos=pesos|tiene=tem|plátanos=bananas|gramos=gramas|cien=cem|jamón=presunto|paquete=pacote|qué desea=o que deseja|palta=abacate|aguacate=abacate|porotos=feijão|cómo se llama esto=como se chama isto|quisiera=queria');
S_('En el restaurante', 'para dos=para dois|con=com|ya saben=já sabem|qué van a pedir=o que vão pedir|papas=batatas|y para tomar=e para beber|limonada=limonada|me trae=me traz|un vaso de agua=um copo de água|flan=pudim|puedo pagar=posso pagar|tarjeta=cartão|comida=comida|está=está|cuántos=quantos|un momento=um momento|mi plato=meu prato|pez=peixe (vivo)');
S_('Este, ese, aquel', 'cuánto cuesta=quanto custa|camisa=camisa|quiero=quero|pan=pão|qué es=o que é|azul=azul|veinte=vinte|dólares=dólares|verde=verde|ventana=vitrine; janela|más cara=mais cara|treinta=trinta|zapatos=sapatos|cómodos=confortáveis|puedo probarme=posso provar|chaqueta=jaqueta|todo=tudo|casas=casas|antiguas=antigas|son=são|libro=livro|libros=livros|mesas=mesas');
S_('La ropa', 'puedo probarme=posso provar|estos=estes|me queda=fica em mim|tiene=tem|más chica=menor|claro=claro|qué talla usa=que tamanho usa|M=M|dónde está=onde fica|al fondo=no fundo|a la derecha=à direita|calza=calça (sapato)|te queda=fica em você|muy bien=muito bem|está=está|voy a pagar=vou pagar|me quedan=ficam em mim|probármelo=provar isso|chicos=pequenos');
S_('El menú del día', 'de primero=de entrada|quiero=quero|de verduras=de legumes|postre=sobremesa|está=está|cuál es=qual é|o=ou|ensalada=salada|de segundo=de prato principal|pescado=peixe|un jugo natural=um suco natural|opción=opção|es picante=é apimentado|cebolla=cebola|para tomar=para beber|naranja=laranja|casa=casa|pesos=pesos|a la plancha=grelhado|papas=batatas|plátano=banana|mango=manga|fruta=fruta|no está incluido=não está incluído|de lunes a viernes=de segunda a sexta|de la tarde=da tarde|corrientazo=prato feito|ejecutivo=executivo|helado=sorvete|limonada=limonada|tarjeta=cartão|cuenta=conta|pagar=pagar');
['bogotá', 'casona'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'es-hambre': {
    o: 'Fome, sede, frio, calor, sono e pressa se **têm**: **tengo hambre**, **tengo sed**, **tengo frío**. Para intensificar: **mucha hambre**, **mucho frío**.',
    q: 'Para dizer como você está e oferecer comida ou bebida.',
    p: '"Estoy con hambre" é tradução literal do português. O natural é **tengo hambre**.',
  },
  'es-mercado': {
    o: 'Quantidades (**un kilo de**, **medio kilo de**, **una docena de**) e preço: **¿Cuánto cuesta?** (uma coisa), **¿Cuánto cuestan?** (várias), **¿Cuánto es?** (total).',
    q: 'Na feira, no mercado e em qualquer loja.',
    p: 'Comprar comida é uma das primeiras situações reais de quem viaja. E os nomes mudam de país para país.',
  },
  'es-restaurante': {
    o: 'Pedir com educação: **Quisiera …**, **Para mí, …**, **¿Me trae …?**, **La cuenta, por favor**. E **la propina** é a gorjeta.',
    q: 'Em restaurantes, bares e cafés.',
    p: '**propina** (gorjeta) e **exquisito** (delicioso) são falsos amigos que aparecem justamente à mesa.',
  },
  'es-este': {
    o: 'Três distâncias: **este** (aqui), **ese** (aí), **aquel** (lá), com concordância. Para algo sem nome: **esto**, **eso**, **aquello**.',
    q: 'Para apontar e comprar quando você não sabe o nome das coisas.',
    p: 'No Brasil, "esse" serve para tudo; em espanhol, este e ese são diferentes.',
  },
  'es-ropa': {
    o: '**talla** (tamanho), **probarse** (provar), **el probador** (provador) e **quedar**, que funciona como gustar: **me queda grande**, **me quedan chicos**.',
    q: 'Para comprar roupa e sapatos.',
    p: '**quedar** é muito usado e segue a mesma lógica de gustar.',
  },
  'es-menu': {
    o: 'O **menú del día**: **de primero**, **de segundo**, **para tomar**, **de postre**, e as perguntas **¿Está incluido?** e **¿Es picante?**',
    q: 'No almoço em qualquer país latino-americano.',
    p: 'Junta restaurante, comida e quantidades num cardápio real.',
  },
});
Object.assign(CZH, {
  'es-hambre': ['fome', 'sede: você tem', 'frío é masculino'],
  'es-mercado': ['várias coisas', 'quilo', 'dúzia'],
  'es-restaurante': ['eu queria', 'para mim', 'a conta'],
  'es-este': ['esta (aqui)', 'esse (aí)', 'aquilo'],
  'es-ropa': ['tamanho', 'uma peça', 'várias peças'],
  'es-menu': ['inclui', 'entrada', 'incluído'],
});
Object.assign(OBJ, {
  'es-hambre': { o: 'Consigo dizer que estou com fome, sede, frio ou sono.', a: 'Você sabe dizer "estou com fome" do jeito espanhol?', ref: 'Expresión oral · A1' },
  'es-mercado': { o: 'Consigo comprar comida com quantidades e perguntar o preço.', a: 'Você consegue pedir um quilo de algo e perguntar quanto é?', ref: 'Interacción oral · A1' },
  'es-restaurante': { o: 'Consigo pedir num restaurante e pedir a conta.', a: 'Você consegue pedir uma refeição completa em espanhol?', ref: 'Interacción oral · A1' },
  'es-este': { o: 'Consigo apontar coisas com este, ese e aquel.', a: 'Você sabe a diferença entre este e ese?', ref: 'Gramática · A1' },
  'es-ropa': { o: 'Consigo comprar roupa: pedir para provar e dizer como ficou.', a: 'Você consegue dizer "fica grande em mim" em espanhol?', ref: 'Interacción oral · A1' },
  'es-menu': { o: 'Consigo ler um cardápio e montar o meu pedido.', a: 'Você consegue entender um menú del día e pedir?', ref: 'Comprensión de lectura · A1' },
});
MOD_OBJ[3] = ['Consigo dizer como estou: fome, sede, frio.', 'Consigo comprar comida e roupa.', 'Consigo pedir num restaurante.', 'Consigo ler um cardápio e fazer o meu pedido.'];

ES_MODS.push({ lv: 'A1', n: 'Comer e comprar', l: ['es-hambre', 'es-mercado', 'es-restaurante', 'es-este', 'es-ropa', 'es-menu'] });
