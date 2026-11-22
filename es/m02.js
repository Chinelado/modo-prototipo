// Espanhol · A1 · Módulo 2 · Mi gente y mis cosas (Minha gente e minhas coisas). Formato de es/curso.js.

NL('es-familia', {
  de: 'Mi familia', pt: 'Apresentar a família', gt: 'possessivos: mi, tu, su · plural: mis, tus, sus',
  gx: 'Para falar da família, use os possessivos: mi (meu, minha), tu (seu, sua, de tú), su (seu, sua, de usted, dele, dela). No plural, ganham -s: mis hermanos. Diferente do português, não se usa artigo antes do possessivo: mi madre (e não "la mi madre").',
  ge: 'Mi madre se llama Rosa.=A minha mãe se chama Rosa.|Tengo dos hermanos.=Tenho dois irmãos.|Sus hijos viven en Lima.=Os filhos dela moram em Lima.',
  v: 'familia=família=👨‍👩‍👧|madre=mãe=👩|padre=pai=👨|hermano, hermana=irmão, irmã=🧑‍🤝‍🧑|hijo, hija=filho, filha=👶|abuelo, abuela=avô, avó=👴|esposo, esposa=marido, esposa=💍|padres=pais (pai e mãe)=👪|primo, prima=primo, prima=🧒|tío, tía=tio, tia=🧔',
  x: 'novio, novia=namorado, namorada|sobrino=sobrinho|nieto=neto|mayor=mais velho|menor=mais novo|soltero=solteiro|casado=casado|hijo único=filho único|mascota=animal de estimação|perro=cachorro',
  dlg: '¿Tienes hermanos?=Você tem irmãos?|Sí, tengo una hermana mayor. Se llama Lucía.=Sim, tenho uma irmã mais velha. Ela se chama Lucía.|¿Y tus padres dónde viven?=E os seus pais, onde moram?|Mis padres viven en Recife, con mi abuela.=Os meus pais moram em Recife, com a minha avó.',
  cz: '___ madre se llama Rosa. (minha)=Mi=La mi=Mía|___ hermanos viven en Lima. (meus)=Mis=Mi=Los mi|Ana y ___ esposo son de Chile. (dela)=su=tu=sus',
  whys: 'possessivo sem artigo: mi madre|plural: mis hermanos|dela: su (singular)',
  pts: 'Possessivos antes do substantivo: mi (meu, minha), tu (seu, sua, de tú), su (seu, sua, de usted; dele, dela), nuestro / nuestra (nosso, nossa).|No plural, ganham -s: mis padres, tus hijos, sus primos.|Sem artigo antes: mi madre, e não "la mi madre". Em português dizemos "a minha mãe"; em espanhol, só mi madre.|padres quer dizer pai e mãe juntos; hermanos, irmãos e irmãs juntos; hijos, filhos e filhas.',
  ex: 'Mis padres viven en Recife.=Os meus pais moram em Recife.|¿Cómo se llama tu hermana?=Como se chama a sua irmã?|Nuestra abuela tiene ochenta años.=A nossa avó tem oitenta anos.|Soy hijo único.=Sou filho único.',
  bd: ['Mi=C^possessivo, sem artigo antes|madre=S^mãe|se_llama=V^se chama|Rosa.=PR', 'A minha mãe se chama Rosa.'],
  rule: 'posesivos',
  hw: 'Desenhe a sua árvore genealógica e escreva seis frases sobre ela: Mi madre se llama … Tengo … hermanos. Mis abuelos viven en …',
  deep: `
Hoje você apresenta a sua família. As palavras são parecidas com as do português; a novidade está nos possessivos.
# Passo 1: a família
| Em espanhol | Em português |
| madre / padre | mãe / pai |
| hermano / hermana | irmão / irmã |
| hijo / hija | filho / filha |
| abuelo / abuela | avô / avó |
| esposo / esposa | marido / esposa |
~ Mi madre se llama Rosa. = A minha mãe se chama Rosa.
~ Tengo dos hermanos. = Tenho dois irmãos.
# Passo 2: os possessivos
@ M:Possessivos;Pessoa|Singular|Plural;meu, minha|mi|mis;seu, sua (tú)|tu|tus;seu, sua (usted), dele, dela|su|sus;nosso, nossa|nuestro / nuestra|nuestros / nuestras
~ Mis padres viven en Recife. = Os meus pais moram em Recife.
~ ¿Cómo se llama tu hermana? = Como se chama a sua irmã?
# Passo 3: o plural que junta todos
| Plural | Quer dizer |
| padres | pai e mãe |
| hermanos | irmãos e irmãs |
| hijos | filhos e filhas |
| abuelos | avô e avó |
~ Sus hijos viven en Lima. = Os filhos dela moram em Lima.
! **padres** são os pais (pai e mãe). Parentes, em espanhol, são **parientes**.
# Passo 4: ojo, brasileño: sem artigo antes do possessivo
| Português | Espanhol |
| a minha mãe | mi madre |
| o meu irmão | mi hermano |
| os seus pais | tus padres |
~ Nuestra abuela tiene ochenta años. = A nossa avó tem oitenta anos.
BR Em português, "a minha mãe" leva artigo. Em espanhol, **nunca**: "la mi madre" está errado.
> Treine agora: apresente três pessoas da sua família com mi, mis e su.
? Como se diz "a minha mãe"? || mi madre (sem artigo)
? O que quer dizer "padres"? || pai e mãe
? Plural de "tu": || tus
`,
});

NL('es-genero', {
  de: 'El, la, los, las', pt: 'Gênero e plural', gt: 'artigos · gênero · plural · heterogenéricos',
  gx: 'Os artigos: el (o), la (a), los (os), las (as), un (um), una (uma). O plural se faz com -s depois de vogal (casas) e -es depois de consoante (ciudades, colores). Quase todos os substantivos têm o mesmo gênero do português, mas alguns mudam: el viaje, la leche, el árbol, la nariz.',
  ge: 'El viaje fue largo.=A viagem foi longa.|La leche está fría.=O leite está frio.|Las ciudades son grandes.=As cidades são grandes.',
  v: 'el=o=👉|la=a=👉|los=os=👉|las=as=👉|un, una=um, uma=1️⃣|viaje=viagem=✈️|leche=leite=🥛|árbol=árvore=🌳|nariz=nariz=👃|color=cor=🎨',
  x: 'puente=ponte|sal=sal|sangre=sangue|equipo=equipe|mensaje=mensagem|dolor=dor|miel=mel|lápiz=lápis|flores=flores|papel=papel',
  dlg: '¿Dónde está la sal?=Onde está o sal?|Está en la mesa, al lado de la leche.=Está na mesa, ao lado do leite.|¿La sal? ¿No es el sal?=A sal? Não é o sal?|No, en español es la sal, femenino.=Não, em espanhol é "la sal", feminino.',
  cz: '___ viaje fue largo. (a viagem)=El=La=Lo|___ leche está fría. (o leite)=La=El=Lo|Las ___ son grandes. (cidades)=ciudades=ciudads=ciudad',
  whys: 'viaje é masculino em espanhol|leche é feminino em espanhol|consoante no fim: plural com -es',
  pts: 'Artigos definidos: el (o), la (a), los (os), las (as). Indefinidos: un (um), una (uma), unos, unas.|Plural: -s depois de vogal (casa → casas); -es depois de consoante (ciudad → ciudades, color → colores); -z vira -ces (lápiz → lápices).|Heterogenéricos masculinos em espanhol: el viaje, el árbol, el puente, el color, el dolor, el equipo, el mensaje (as palavras em -aje são masculinas).|Heterogenéricos femininos em espanhol: la leche, la sal, la nariz, la sangre, la miel.',
  ex: 'Tengo un mensaje para ti.=Tenho uma mensagem para você.|El árbol es muy alto.=A árvore é muito alta.|Me duele la nariz.=Meu nariz dói.|Los lápices están aquí.=Os lápis estão aqui.',
  bd: ['El=C^artigo masculino: viaje é masculino em espanhol|viaje=S^viagem|fue_largo.=V^foi longo', 'A viagem foi longa.'],
  rule: 'genero',
  hw: 'Faça duas listas: dez palavras com el e dez com la, incluindo os heterogenéricos da lição (el viaje, la leche…). Depois passe cinco delas para o plural.',
  deep: `
Hoje você aprende os artigos, o plural e uma armadilha clássica do brasileiro: as palavras que **mudam de gênero** em espanhol.
# Passo 1: os artigos
| | Masculino | Feminino |
| singular | el (o) | la (a) |
| plural | los (os) | las (as) |
| um, uma | un | una |
~ El libro y la casa. = O livro e a casa.
~ Tengo un mensaje para ti. = Tenho uma mensagem para você.
# Passo 2: o plural
@ M:O plural;Termina em|Plural|Exemplo;vogal|-s|casa → casas;consoante|-es|ciudad → ciudades;-z|-ces|lápiz → lápices
~ Las ciudades son grandes. = As cidades são grandes.
~ Los lápices están aquí. = Os lápis estão aqui.
# Passo 3: os que mudam de gênero
| Masculinos em espanhol | Femininos em espanhol |
| el viaje (a viagem) | la leche (o leite) |
| el árbol (a árvore) | la sal (o sal) |
| el puente (a ponte) | la nariz (o nariz) |
| el color (a cor) | la sangre (o sangue) |
| el equipo (a equipe) | la miel (o mel) |
~ El viaje fue largo. = A viagem foi longa.
~ La leche está fría. = O leite está frio.
~ El árbol es muy alto. = A árvore é muito alta.
# Passo 4: ojo, brasileño: o adjetivo acompanha
Quando o gênero muda, o adjetivo muda junto: el viaje **largo**, la leche **fría**.
~ Me duele la nariz. = Meu nariz dói.
! Truque: palavras em **-aje** (viaje, mensaje, paisaje) são masculinas. Palavras em **-dad** e **-ción** (ciudad, canción) são femininas.
> Treine agora: diga com o artigo certo: viagem, leite, árvore, sal, mensagem.
? Como se diz "a viagem"? || el viaje
? Como se diz "o leite"? || la leche
? Plural de "ciudad": || ciudades
`,
});

NL('es-hay', {
  de: '¿Qué hay en tu casa?', pt: 'Dizer o que existe num lugar', gt: 'hay = há, tem · hay + un, una, dos… (sem artigo definido)',
  gx: 'Para dizer o que existe num lugar, o espanhol usa hay, que não muda: hay un sofá, hay dos sillas, hay mucha gente. É o nosso "tem" ou "há". Depois de hay não se usa el / la: hay una cocina, e não "hay la cocina".',
  ge: 'En mi casa hay dos dormitorios.=Na minha casa tem dois quartos.|¿Hay un baño en el primer piso?=Tem um banheiro no primeiro andar?|No hay ascensor.=Não tem elevador.',
  v: 'hay=há, tem=📍|casa=casa=🏠|apartamento=apartamento=🏢|cocina=cozinha=🍳|baño=banheiro=🚿|dormitorio=quarto=🛏️|sala=sala=🛋️|mesa=mesa=🪑|silla=cadeira=💺|ventana=janela=🪟',
  x: 'sofá=sofá|cama=cama|armario=armário|refrigerador=geladeira|ascensor=elevador|balcón=varanda|jardín=jardim|piso=andar; piso|grande=grande|pequeño=pequeno',
  dlg: '¿Cómo es tu nuevo apartamento?=Como é o seu apartamento novo?|Es pequeño, pero bonito. Hay una sala, un dormitorio y una cocina.=É pequeno, mas bonito. Tem uma sala, um quarto e uma cozinha.|¿Hay balcón?=Tem varanda?|Sí, hay un balcón pequeño con plantas.=Sim, tem uma varanda pequena com plantas.',
  cz: 'En mi casa ___ dos dormitorios. (tem)=hay=tiene=están|No ___ ascensor en el edificio.=hay=tiene=es|Hay ___ cocina grande.=una=la=el',
  whys: 'existir num lugar: hay|negativa: no hay|depois de hay, un / una (nunca el / la)',
  pts: 'hay = há, tem (existe). Não muda: hay un libro, hay dez libros, hay mucha gente.|Depois de hay: un, una, números, mucho, poco ou nada (hay pan). Nunca el / la: "hay la cocina" está errado.|Pergunta: ¿Hay …? Negativa: No hay …: No hay ascensor.|Atenção: hay é diferente de tener. "Na minha casa tem dois quartos" = En mi casa hay dos dormitorios (e não "mi casa tiene", que também existe, mas é outro jeito de dizer).',
  ex: 'Hay mucha gente en la calle.=Tem muita gente na rua.|En la cocina hay una mesa y cuatro sillas.=Na cozinha tem uma mesa e quatro cadeiras.|¿Qué hay en el refrigerador?=O que tem na geladeira?|No hay pan.=Não tem pão.',
  bd: ['En_mi_casa=L^lugar|hay=V^hay: há, tem (não muda)|dos_dormitorios.=OA^o que existe', 'Na minha casa tem dois quartos.'],
  rule: 'hay',
  hw: 'Descreva a sua casa em seis frases com hay: En mi casa hay … En la sala hay … No hay …',
  deep: `
Hoje você aprende a descrever um lugar: o que **tem** nele. Em espanhol, isso é **hay**.
# Passo 1: hay, o "tem" que não muda
@ E:Hay;En mi casa^c|hay^v|dos dormitorios.^p
~ En mi casa hay dos dormitorios. = Na minha casa tem dois quartos.
~ Hay mucha gente en la calle. = Tem muita gente na rua.
BR **hay** é o nosso "tem" ou "há" de existir. Não muda nunca: hay un libro, hay diez libros.
# Passo 2: as partes da casa
| Em espanhol | Em português |
| la sala | a sala |
| la cocina | a cozinha |
| el dormitorio | o quarto |
| el baño | o banheiro |
| el balcón | a varanda |
~ Hay una sala, un dormitorio y una cocina. = Tem uma sala, um quarto e uma cozinha.
# Passo 3: perguntar e negar
| Pergunta | Negativa |
| ¿Hay ascensor? | No hay ascensor. |
| ¿Hay pan? | No hay pan. |
~ ¿Qué hay en el refrigerador? = O que tem na geladeira?
~ No hay pan. = Não tem pão.
# Passo 4: ojo, brasileño: hay + un / una
@ V:Depois de hay;Certo|hay una cocina / hay dos sillas;Errado|hay la cocina / hay las sillas
~ Hay una cocina grande. = Tem uma cozinha grande.
! Depois de **hay**: un, una, números, mucho, poco. Nunca **el / la**. Para algo específico, use **está**: La cocina está al lado (próximo módulo).
> Treine agora: descreva o cômodo onde você está com três frases com hay.
? Como se diz "tem dois quartos"? || Hay dos dormitorios.
? hay muda no plural? || Não: hay un libro, hay diez libros.
? "Hay la cocina" está certo? || Não: hay una cocina.
`,
});

NL('es-colores', {
  de: 'Los colores', pt: 'As cores e a concordância', gt: 'adjetivos: gênero e número · a cor depois do substantivo',
  gx: 'O adjetivo concorda com o substantivo em gênero e número, como em português: el carro rojo, la casa roja, los carros rojos. Os que terminam em -e ou consoante não mudam no feminino: verde, azul, gris. E a cor vem depois do substantivo.',
  ge: 'Tengo un carro rojo.=Tenho um carro vermelho.|La casa es blanca y azul.=A casa é branca e azul.|Me gustan las flores amarillas.=Eu gosto das flores amarelas.',
  v: 'rojo=vermelho=🔴|azul=azul=🔵|verde=verde=🟢|amarillo=amarelo=🟡|blanco=branco=⚪|negro=preto=⚫|gris=cinza=🩶|rosado=rosa=🩷|marrón=marrom=🟤|anaranjado=laranja=🟠',
  x: 'morado=roxo|celeste=azul-claro|claro=claro|oscuro=escuro|carro=carro|flor=flor|camisa=camisa|zapatos=sapatos|bandera=bandeira|ojos=olhos',
  dlg: '¿De qué color es tu carro?=De que cor é o seu carro?|Es gris oscuro. ¿Y el tuyo?=É cinza-escuro. E o seu?|El mío es rojo, como la bandera de Chile.=O meu é vermelho, como a bandeira do Chile.|¡Qué bonito!=Que bonito!',
  cz: 'La casa es ___. (branca)=blanca=blanco=blancos|Los zapatos son ___. (pretos)=negros=negro=negras|La camisa es ___. (verde)=verde=verda=verdes',
  whys: 'casa é feminino: blanca|zapatos é masculino plural: negros|verde não muda no feminino',
  pts: 'O adjetivo concorda em gênero e número: el carro rojo, la casa roja, los carros rojos, las casas rojas.|Adjetivos em -e ou consoante não mudam no feminino: el carro verde, la casa verde; el mar azul, la camisa azul. No plural: verdes, azules, grises.|A cor vem depois do substantivo, como em português: una camisa blanca.|Para perguntar a cor: ¿De qué color es …? / ¿De qué color son …?',
  ex: 'Mis ojos son marrones.=Os meus olhos são castanhos.|La bandera de Brasil es verde y amarilla.=A bandeira do Brasil é verde e amarela.|Quiero una camisa azul.=Quero uma camisa azul.|El cielo está gris.=O céu está cinza.',
  bd: ['Tengo=V|un_carro=OA^carro: masculino|rojo.=C^adjetivo concorda: rojo', 'Tenho um carro vermelho.'],
  rule: 'colores',
  hw: 'Descreva cinco objetos da sua casa com a cor, prestando atenção ao gênero e ao número: el sofá gris, las cortinas blancas…',
  deep: `
Hoje você aprende as cores e a concordância do adjetivo, que funciona quase igual ao português.
# Passo 1: as cores
| Em espanhol | Em português |
| rojo / roja | vermelho / vermelha |
| amarillo / amarilla | amarelo / amarela |
| blanco / blanca | branco / branca |
| negro / negra | preto / preta |
| azul, verde, gris | azul, verde, cinza |
~ Tengo un carro rojo. = Tenho um carro vermelho.
~ ¿De qué color es tu carro? = De que cor é o seu carro?
# Passo 2: a concordância
@ M:Rojo em quatro formas;|Singular|Plural;masculino|el carro rojo|los carros rojos;feminino|la casa roja|las casas rojas
~ La casa es blanca y azul. = A casa é branca e azul.
~ Los zapatos son negros. = Os sapatos são pretos.
# Passo 3: as cores que não mudam
| Termina em | Masculino | Feminino | Plural |
| -e | verde | verde | verdes |
| consoante | azul | azul | azules |
| consoante | gris | gris | grises |
~ Quiero una camisa azul. = Quero uma camisa azul.
~ La bandera de Brasil es verde y amarilla. = A bandeira do Brasil é verde e amarela.
# Passo 4: ojo, brasileño: negro, rosado, marrón
| Português | Espanhol |
| preto | negro |
| rosa (a cor) | rosado (ou rosa) |
| castanho (olhos) | marrón, café |
| roxo | morado |
~ Mis ojos son marrones. = Os meus olhos são castanhos.
! **negro** é a palavra comum para a cor preta. E **rojo** é vermelho: não confunda com o nosso "roxo", que é **morado**.
> Treine agora: diga a cor de três coisas que você está vendo agora.
? Como se diz "a casa branca"? || la casa blanca
? Feminino de "azul": || azul (não muda)
? Como se diz "roxo"? || morado
`,
});

NL('es-gusta', {
  de: 'Me gusta', pt: 'Dizer do que você gosta', gt: 'gustar: me gusta / me gustan · a mí también / a mí tampoco',
  gx: 'Em espanhol, quem "gosta" é a coisa: ela agrada você. Por isso: me gusta el café (o café me agrada), me gustan los libros (os livros me agradam). O verbo concorda com a coisa: gusta (singular ou verbo), gustan (plural). Para concordar: a mí también; para concordar com uma negativa: a mí tampoco.',
  ge: 'Me gusta el café.=Eu gosto de café.|Me gustan los libros.=Eu gosto de livros.|¿Te gusta bailar?=Você gosta de dançar?',
  v: 'me gusta=eu gosto (de)=👍|me gustan=eu gosto (de, plural)=👍|me encanta=eu adoro=😍|no me gusta=eu não gosto=👎|música=música=🎵|fútbol=futebol=⚽|bailar=dançar=💃|leer=ler=📖|cocinar=cozinhar=🍳|películas=filmes=🎬',
  x: 'a mí también=eu também|a mí tampoco=eu também não|odio=odeio|prefiero=prefiro|mucho=muito|un poco=um pouco|nada=nada|series=séries|viajar=viajar|chocolate=chocolate',
  dlg: '¿Te gusta el fútbol?=Você gosta de futebol?|¡Me encanta! ¿Y a ti?=Adoro! E você?|A mí no me gusta mucho. Prefiero las series.=Eu não gosto muito. Prefiro as séries.|¡A mí también me gustan las series!=Eu também gosto de séries!',
  cz: 'Me ___ el café.=gusta=gustan=gusto|Me ___ los libros.=gustan=gusta=gusto|No me gusta el frío. A mí ___.=tampoco=también=no',
  whys: 'uma coisa: gusta|várias coisas: gustan|concordar com uma negativa: tampoco',
  pts: 'gustar funciona ao contrário do português: a coisa é o sujeito. Me gusta el café = o café me agrada.|gusta com uma coisa ou um verbo (me gusta bailar); gustan com várias coisas (me gustan los libros).|Quem gosta vem no pronome: me (eu), te (você), le (ele, ela, usted), nos (nós), les (eles, ustedes). A mí, a ti… dão ênfase.|Use o artigo depois: me gusta el café, me gustan las películas. Sem o "de": nada de "me gusta de café".',
  ex: 'No me gusta el frío.=Eu não gosto do frio.|Me encanta cocinar.=Eu adoro cozinhar.|A mí tampoco.=Eu também não.|¿Qué música te gusta?=De que música você gosta?',
  bd: ['Me=OD^me: a quem agrada|gusta=V^gusta: concorda com a coisa|el_café.=S^o café: o sujeito', 'Eu gosto de café.'],
  rule: 'gustar',
  hw: 'Escreva cinco coisas de que você gosta e três de que não gosta, com me gusta / me gustan / no me gusta. Depois pergunte a alguém: ¿Te gusta …?',
  deep: `
Hoje você aprende um dos verbos mais usados e mais traiçoeiros para o brasileiro: **gustar**. A frase funciona "ao contrário" do português.
# Passo 1: a coisa agrada você
@ F:Gustar;A quem^s|gusta / gustan^v|O quê^p;Me|gusta|el café.;Me|gustan|los libros.;¿Te|gusta|bailar?
~ Me gusta el café. = Eu gosto de café.
~ Me gustan los libros. = Eu gosto de livros.
BR Pense em "o café **me agrada**". Por isso o verbo concorda com a **coisa**: gusta (uma) ou gustan (várias).
# Passo 2: quem gosta
| Pronome | Exemplo |
| me (eu) | Me gusta. |
| te (você) | ¿Te gusta? |
| le (ele, ela, usted) | Le gusta. |
| nos (nós) | Nos gusta. |
| les (eles, ustedes) | Les gusta. |
~ ¿Te gusta bailar? = Você gosta de dançar?
~ ¿Qué música te gusta? = De que música você gosta?
# Passo 3: graus de gostar
| Em espanhol | Em português |
| Me encanta. | Adoro. |
| Me gusta mucho. | Gosto muito. |
| No me gusta mucho. | Não gosto muito. |
| No me gusta nada. | Não gosto nada. |
~ Me encanta cocinar. = Eu adoro cozinhar.
~ No me gusta el frío. = Eu não gosto do frio.
# Passo 4: ojo, brasileño: también e tampoco
@ V:Concordar;Com afirmação|Me gusta. → A mí también.;Com negação|No me gusta. → A mí tampoco.
~ A mí tampoco. = Eu também não.
! Nada de "**yo gusto de**" nem "me gusta **de**": é **me gusta el café**. E "eu também não" é **a mí tampoco**.
> Treine agora: diga três coisas de que você gosta e uma de que não gosta.
? "Eu gosto de livros": || Me gustan los libros.
? gusta ou gustan com "bailar"? || gusta (um verbo)
? "Eu também não": || A mí tampoco.
`,
});

NL('es-mensaje', {
  de: 'Un mensaje para presentarme', pt: 'Ler e escrever uma mensagem de apresentação', gt: 'presentarse por escrito: nombre, origen, familia, gustos',
  gx: 'Uma mensagem de apresentação (para um grupo de intercâmbio, um colega novo) junta tudo do começo da trilha: saudação (¡Hola a todos!), quem você é (Me llamo …, soy de …), família, trabalho, do que gosta (me gusta / me encanta) e uma despedida (¡Saludos! / Un abrazo).',
  ge: '¡Hola a todos! Me llamo Ana y soy de Brasil.=Oi, pessoal! Eu me chamo Ana e sou do Brasil.|Me encanta viajar y conocer gente nueva.=Adoro viajar e conhecer gente nova.|¡Un abrazo!=Um abraço!',
  v: 'mensaje=mensagem=💬|presentarme=me apresentar=🙋|grupo=grupo=👥|a todos=a todos, pessoal=👋|conocer=conhecer=🤝|gente nueva=gente nova=🧑‍🤝‍🧑|intercambio=intercâmbio=🔁|saludos=saudações, abraços=✉️|un abrazo=um abraço=🤗|tiempo libre=tempo livre=🕒',
  x: 'practicar=praticar|escribir=escrever|pronto=logo, em breve|nos vemos=nos vemos|también=também|además=além disso|me presento=me apresento|soy nuevo=sou novo|en mi tiempo libre=no meu tempo livre|espero=espero',
  dlg: '¿Ya escribiste en el grupo de intercambio?=Você já escreveu no grupo de intercâmbio?|Todavía no. ¿Qué escribo?=Ainda não. O que eu escrevo?|Tu nombre, de dónde eres y qué te gusta.=Seu nome, de onde você é e do que você gosta.|¡Perfecto! Empiezo con "¡Hola a todos!".=Perfeito! Começo com "Oi, pessoal!".',
  cz: '¡Hola a ___! Me llamo Ana.=todos=todo=tudo|Me ___ viajar. (adoro)=encanta=encantan=encanto|¡Un ___! (despedida)=abrazo=abraço=brazo',
  whys: 'saudação ao grupo: hola a todos|adoro + verbo: me encanta|despedida: un abrazo',
  pts: 'Saudação: ¡Hola a todos! / ¡Hola, chicos! (informal) / Buenos días a todos.|Apresentação: Me llamo … Soy de … Tengo … años. Soy … (profissão). Vivo en …|Família e gostos: Tengo dos hermanos. Me gusta … / Me encanta … / En mi tiempo libre …|Despedida: ¡Saludos! / ¡Un abrazo! / ¡Nos vemos pronto!',
  ex: 'En mi tiempo libre me gusta leer.=No meu tempo livre eu gosto de ler.|Quiero practicar mi español.=Quero praticar o meu espanhol.|¡Nos vemos pronto!=Nos vemos em breve!|Soy nueva en el grupo.=Sou nova no grupo.',
  bd: ['¡Hola_a_todos!=C^saudação ao grupo|Me_llamo_Ana=V^apresentação|y_soy_de_Brasil.=C^origem', 'Oi, pessoal! Eu me chamo Ana e sou do Brasil.'],
  rule: 'mensaje',
  le: {
    texto: {
      t: 'Grupo de intercambio · Mensaje de Camila', kind: 'mensagem', voz: 'a',
      intro: 'A Camila entrou num grupo de intercâmbio de línguas e escreveu uma mensagem para se apresentar. Leia e responda.',
      paras: ['¡Hola a todos!', 'Me llamo Camila, tengo veintiocho años y soy de Santiago de Chile. Soy diseñadora y trabajo en una agencia.', 'Tengo una hermana menor, Sofía, y un perro que se llama Toto.', 'Me encanta la música brasileña y quiero aprender portugués. En mi tiempo libre me gusta cocinar y bailar.', '¡Un abrazo y nos vemos pronto!'],
      qs: [
        { q: 'De onde é a Camila?', o: ['de Santiago do Chile', 'de São Paulo', 'de Lima'], a: 0 },
        { q: 'O que ela faz?', o: ['é designer numa agência', 'é professora', 'é estudante'], a: 0 },
        { q: 'Quem é Toto?', o: ['o cachorro dela', 'o irmão dela', 'o namorado dela'], a: 0 },
        { q: 'Por que ela quer aprender português?', o: ['adora a música brasileira', 'vai morar no Brasil', 'trabalha com brasileiros'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva a sua apresentação', tipo: 'form', ok: 'Mensagem escrita corretamente.',
      pede: 'Escreva a sua mensagem para o grupo de intercâmbio. Uma frase por linha.',
      campos: [
        { l: 'Saludo', d: '¡Hola a todos!', re: '^¡?(hola|buenos días|buenas)\\b', f: 'iu', err: 'Comece com uma saudação: ¡Hola a todos!' },
        { l: 'Nombre y origen', d: 'Me llamo … y soy de …', re: '\\b(me llamo|soy)\\b.*\\bde\\b', f: 'iu', err: 'Diga o nome e a origem: Me llamo Ana y soy de Brasil.', bad: [['\\bsoy (do|da)\\b', 'Em espanhol: <b>soy de</b> Brasil (sem do / da).']] },
        { l: 'Edad o profesión', d: 'Tengo … años. / Soy …', re: '\\b(tengo|soy|trabajo|estudio)\\b', f: 'iu', err: 'Diga a idade ou a profissão: Tengo treinta años. Soy profesora.', bad: [['\\banos\\b', 'Ano é <b>año</b>, com ñ: tengo treinta <b>años</b>.']] },
        { l: 'Familia', d: 'Tengo … / Mi …', re: '\\b(tengo|mi|mis|vivo con)\\b', f: 'iu', err: 'Fale da família: Tengo dos hermanos.' },
        { l: 'Gustos', d: 'Me gusta … / Me encanta …', re: '\\bme (gusta|gustan|encanta|encantan)\\b', f: 'iu', err: 'Diga do que você gosta: Me gusta viajar.', bad: [['\\b(yo )?gusto de\\b', 'Com gustar: <b>me gusta</b> viajar (e não "gusto de").']] },
        { l: 'Despedida', d: '¡Un abrazo! / ¡Saludos!', re: '\\b(abrazo|saludos|nos vemos|hasta pronto|besos|chau)\\b', f: 'iu', err: 'Termine com uma despedida: ¡Un abrazo!' },
      ],
      modelo: '¡Hola a todos! · Me llamo Ana y soy de Brasil. · Tengo treinta años y soy profesora. · Tengo dos hermanos. · Me encanta viajar y leer. · ¡Un abrazo!',
    },
  },
  hw: 'Escreva uma mensagem de apresentação completa, de seis a oito frases, para um grupo de intercâmbio de línguas, como a da Camila.',
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo. Você vai ler a mensagem de apresentação de uma chilena e escrever a sua, juntando tudo o que aprendeu até aqui.
# Passo 1: a estrutura
@ P:Uma mensagem de apresentação;Saudação=¡Hola a todos!;Quem sou=Me llamo … Soy de …;Idade e trabalho=Tengo … años. Soy …;Família=Tengo …;Gostos=Me gusta … / Me encanta …;Despedida=¡Un abrazo!
~ ¡Hola a todos! Me llamo Ana y soy de Brasil. = Oi, pessoal! Eu me chamo Ana e sou do Brasil.
# Passo 2: falar de você
| Em espanhol | Em português |
| Soy nueva en el grupo. | Sou nova no grupo. |
| Quiero practicar mi español. | Quero praticar o meu espanhol. |
| En mi tiempo libre … | No meu tempo livre … |
~ Quiero practicar mi español. = Quero praticar o meu espanhol.
~ En mi tiempo libre me gusta leer. = No meu tempo livre eu gosto de ler.
# Passo 3: a despedida
| Em espanhol | Tom |
| ¡Un abrazo! | caloroso |
| ¡Saludos! | neutro |
| ¡Nos vemos pronto! | animado |
~ ¡Un abrazo! = Um abraço!
~ ¡Nos vemos pronto! = Nos vemos em breve!
# Passo 4: ojo, brasileño: confira antes de enviar
| Confira | Certo |
| origem | soy de Brasil |
| idade | tengo … años (com ñ) |
| gostos | me gusta / me gustan |
~ Me encanta viajar y conocer gente nueva. = Adoro viajar e conhecer gente nova.
! Antes de enviar, procure os sinais de portunhol: **do / da**, **anos** sem ñ, **gusto de**. São os erros mais visíveis num texto curto.
> Agora leia a mensagem da Camila e escreva a sua.
? Como saudar um grupo? || ¡Hola a todos!
? Como se despedir com carinho? || ¡Un abrazo!
? Como dizer "adoro viajar"? || Me encanta viajar.
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('Mi familia',
  'M:Possessivos;Pessoa|Singular|Plural;meu, minha|mi|mis;seu, sua (tú)|tu|tus;dele, dela (usted)|su|sus',
  'V:Sem artigo;Português|a minha mãe;Espanhol|mi madre');
V('El, la, los, las',
  'M:O plural;Termina em|Plural;vogal|casas;consoante|ciudades;-z|lápices',
  'M:Gênero que muda;Masculino em espanhol|Feminino em espanhol;el viaje|la leche;el árbol|la sal;el puente|la nariz');
V('¿Qué hay en tu casa?',
  'E:Hay;En mi casa^c|hay^v|dos dormitorios.^p',
  'V:Depois de hay;Certo|hay una cocina;Errado|hay la cocina');
V('Los colores',
  'M:Rojo em quatro formas;|Singular|Plural;masculino|rojo|rojos;feminino|roja|rojas',
  'P:Não mudam no feminino;-e=verde;consoante=azul, gris');
V('Me gusta',
  'F:Gustar;A quem^s|gusta / gustan^v|O quê^p;Me|gusta|el café.;Me|gustan|los libros.',
  'V:Concordar;Com afirmação|A mí también.;Com negação|A mí tampoco.');
V('Un mensaje para presentarme',
  'P:Uma mensagem de apresentação;Saudação=¡Hola a todos!;Quem sou=Me llamo … Soy de …;Gostos=Me gusta …;Despedida=¡Un abrazo!',
  'P:Confira antes de enviar;Origem=soy de;Idade=años;Gostos=me gusta');
S_('Mi familia', 'se llama=se chama|dos=dois|sus=seus, suas (dela)|viven=moram|tienes=você tem|sí=sim|una=uma|y=e|tus=seus, suas|dónde=onde|mis=meus, minhas|con=com|nuestra=nossa|ochenta=oitenta|único=único|parientes=parentes|nuestro=nosso|su=seu, sua; dele, dela|tu=seu, sua');
S_('El, la, los, las', 'fue=foi|largo=longo|está=está|fría=frio|las=as|son=são|grandes=grandes|dónde=onde|mesa=mesa|al lado de=ao lado de|femenino=feminino|en español=em espanhol|tengo=tenho|para ti=para você|alto=alto|me duele=dói|están=estão|aquí=aqui|libro=livro|casa=casa|ciudad=cidade|lápices=lápis|paisaje=paisagem|canción=canção');
S_('¿Qué hay en tu casa?', 'dos=dois|primer=primeiro|edificio=prédio|nuevo=novo|bonito=bonito|plantas=plantas|cómo es=como é|pero=mas|con=com|mucha gente=muita gente|calle=rua|cuatro=quatro|qué=o que|pan=pão|tiene=tem|diez=dez|libros=livros|al lado=ao lado|está=está');
S_('Los colores', 'tengo=tenho|casa=casa|es=é|me gustan=eu gosto de|tu=seu|el tuyo=o seu|el mío=o meu|como=como|Chile=Chile|qué bonito=que bonito|son=são|marrones=castanhos|Brasil=Brasil|quiero=quero|cielo=céu|está=está|mar=mar|cortinas=cortinas|sofá=sofá|rosa=rosa');
S_('Me gusta', 'café=café|libros=livros|te=você (a você)|y a ti=e você|a mí=a mim, eu|frío=frio|qué=que|le=ele, ela (a ele, a ela)|nos=nós (a nós)|les=eles (a eles)|gusta=agrada|gustan=agradam|odio=odeio');
S_('Un mensaje para presentarme', 'ya=já|escribiste=escreveu|todavía no=ainda não|escribo=escrevo|tu=seu|qué=o que|empiezo=começo|perfecto=perfeito|con=com|me llamo=eu me chamo|soy=sou|leer=ler|quiero=quero|mi=meu|nueva=nova|chicos=pessoal|veintiocho=vinte e oito|Santiago=Santiago|diseñadora=designer|agencia=agência|menor=mais nova|perro=cachorro|se llama=se chama|música brasileña=música brasileira|portugués=português|bailar=dançar|cocinar=cozinhar|treinta=trinta|profesora=professora|hermanos=irmãos|viajar=viajar|besos=beijos|hasta pronto=até logo');
['rosa', 'lucía', 'recife', 'camila', 'sofía', 'toto', 'santiago'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'es-familia': {
    o: 'Os possessivos: **mi** (meu, minha), **tu** (seu, sua), **su** (dele, dela, de usted), com **-s** no plural. E **sem artigo** antes: **mi madre**.',
    q: 'Para apresentar a sua família e perguntar sobre a de alguém.',
    p: '"La mi madre" é um erro típico de brasileiro. E **padres** quer dizer pai e mãe, não "padres".',
  },
  'es-genero': {
    o: 'Artigos (**el, la, los, las**), plural (**-s / -es**) e as palavras que mudam de gênero: **el viaje**, **la leche**, **el árbol**, **la nariz**.',
    q: 'Em qualquer frase: todo substantivo vem com o gênero dele.',
    p: '"La viaje" e "el leche" são marcas clássicas do portunhol. A lista é curta e vale decorar.',
  },
  'es-hay': {
    o: '**hay** = há, tem (existir). Não muda: **hay un sofá**, **hay dos sillas**. Depois dele, **un / una** ou números, nunca **el / la**.',
    q: 'Para descrever um lugar: a casa, a cidade, a geladeira.',
    p: 'É o "tem" do dia a dia. E "hay la cocina" é um erro que se nota na hora.',
  },
  'es-colores': {
    o: 'As cores e a concordância: **rojo / roja / rojos / rojas**. **Verde**, **azul** e **gris** não mudam no feminino.',
    q: 'Para descrever roupas, objetos, casas e pessoas.',
    p: 'A concordância é igual à do português. A armadilha é **rojo** (vermelho) × roxo (**morado**).',
  },
  'es-gusta': {
    o: '**gustar** funciona ao contrário: a coisa agrada você. **Me gusta el café**, **me gustan los libros**. Para concordar: **a mí también** / **a mí tampoco**.',
    q: 'Para falar de gostos, hobbies e preferências.',
    p: '"Yo gusto de café" é o erro número 1 do brasileiro. Entender gustar abre a porta para encantar, interesar, doler…',
  },
  'es-mensaje': {
    o: 'Uma mensagem de apresentação: **¡Hola a todos!**, quem você é, família, gostos (**me gusta**, **me encanta**) e **¡Un abrazo!**',
    q: 'Para grupos de intercâmbio, colegas novos e redes sociais.',
    p: 'Junta tudo do começo da trilha num texto real.',
  },
});
Object.assign(CZH, {
  'es-familia': ['minha', 'meus', 'dela'],
  'es-genero': ['a viagem', 'o leite', 'plural de ciudad'],
  'es-hay': ['tem (existir)', 'não tem', 'depois de hay'],
  'es-colores': ['branca', 'pretos', 'verde no feminino'],
  'es-gusta': ['uma coisa', 'várias coisas', 'também não'],
  'es-mensaje': ['pessoal', 'adoro', 'despedida'],
});
Object.assign(OBJ, {
  'es-familia': { o: 'Consigo apresentar a minha família com os possessivos.', a: 'Você consegue dizer "a minha mãe" e "os meus irmãos" em espanhol?', ref: 'Expresión oral · A1' },
  'es-genero': { o: 'Uso os artigos, o plural e o gênero certo, inclusive nas palavras que mudam.', a: 'Você sabe o gênero de viaje, leche e árbol em espanhol?', ref: 'Gramática · A1' },
  'es-hay': { o: 'Consigo descrever o que existe num lugar com hay.', a: 'Você consegue descrever a sua casa com hay?', ref: 'Expresión oral · A1' },
  'es-colores': { o: 'Consigo descrever objetos com as cores, na concordância certa.', a: 'Você consegue dizer a cor de cinco objetos, no masculino e no feminino?', ref: 'Vocabulario · A1' },
  'es-gusta': { o: 'Consigo dizer do que gosto e do que não gosto com gustar.', a: 'Você consegue dizer "eu gosto de livros" sem errar o verbo?', ref: 'Interacción oral · A1' },
  'es-mensaje': { o: 'Consigo ler e escrever uma mensagem de apresentação.', a: 'Você consegue escrever uma mensagem para se apresentar num grupo?', ref: 'Expresión escrita · A1' },
});
MOD_OBJ[1] = ['Consigo apresentar a minha família e as minhas coisas.', 'Uso o gênero e o plural certos, inclusive nas palavras que mudam.', 'Consigo descrever a minha casa com hay e as cores.', 'Consigo dizer do que gosto e escrever uma apresentação.'];

ES_MODS.push({ lv: 'A1', n: 'Minha gente e minhas coisas', l: ['es-familia', 'es-genero', 'es-hay', 'es-colores', 'es-gusta', 'es-mensaje'] });
