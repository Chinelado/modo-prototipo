// Espanhol · "Comece aqui" (antes do dia 1): 10 aulas curtas, conforme docs/espanhol-estrutura.md.
// Mesma marcação de data/guide.js e en/guia.js:
//   # título     > dica     ! erro comum     BR comparação com o português     GO missão
//   ~ espanhol = tradução (com áudio)     | a | b |  tabela (a primeira linha é o cabeçalho)     - item de lista     **negrito**
//   @ esquema visual (sintaxe de data/visuals.js)
//   ?? pergunta || certa || errada || errada >> explicação   desafio de múltipla escolha
//   ?? 🔊 espanhol || certa || errada >> explicação            desafio de ouvir e escolher
//   && espanhol = tradução | espanhol = tradução              jogo de ligar os pares
//   ? pergunta || resposta                                    teste rápido de revelar
const GUIDE_CATS = [
  { id: 'start', e: '🚀', t: 'Primeiros passos' },
  { id: 'palavras', e: '💡', t: 'O espanhol que você já entende' },
  { id: 'sons', e: '🔊', t: 'Os sons do espanhol' },
  { id: 'base', e: '🧩', t: 'Como o espanhol funciona' },
];
const GUIDE = [
// ---------- 🚀 Primeiros passos ----------
{ id: 's01', cat: 'start', e: '🗺️', t: 'Boas-vindas ao espanhol', s: 'Como a trilha funciona e como estudar com o MODO', body: `
Que bom ter você aqui! 🎉 Esta trilha é de **espanhol latino-americano**, o que você mais encontra nos países vizinhos, em viagens, séries e músicas. Tudo é explicado em português, em aulas curtas como esta.
# Seis degraus, uma régua mundial
O mundo inteiro mede uma língua com a mesma régua, o **Quadro Europeu Comum de Referência**. Para o espanhol, a prova oficial de cada degrau é o **DELE**, do Instituto Cervantes.
| Nível | Você consegue… | Prova de referência |
| A1 | se apresentar e pedir coisas simples | DELE A1 |
| A2 | contar o que fez e resolver a rotina | DELE A2 |
| B1 | conversar sobre quase tudo e viajar sem medo | DELE B1 |
| B2 | discutir temas complexos e trabalhar em espanhol | DELE B2 |
| C1 | usar o espanhol com folga no estudo e no trabalho | DELE C1 |
| C2 | entender praticamente tudo, até ironia | DELE C2 |
> O brasileiro costuma **entender** muito desde o começo. O desafio é **falar** sem cair no portunhol. A trilha foi feita para isso.
# Módulos de seis lições
Cada módulo tem **6 lições e 1 avaliação**. A 6ª lição é sempre de **ler e escrever**: um texto de verdade (uma ficha, uma mensagem, um convite) e a sua vez de escrever.
@ P:Uma lição por dia;1. Ouvir=a conversa da lição, com microfone;2. Entender=a regra passo a passo, com o "Ojo, brasileño";3. Palavras=o vocabulário com áudio;4. Praticar=exercícios curtos e variados;5. Escrever=uma frase sua, corrigida na hora
# Ojo, brasileño!
**Ojo** quer dizer "atenção!" (literalmente, "olho!"). Em cada aula do começo, um passo com esse nome mostra a armadilha do português naquele tema: uma palavra parecida com outro sentido, um gênero diferente, um som.
~ ¡Ojo! = Atenção!
~ ¡Hola! ¿Cómo estás? = Oi! Como você está?
! Não pule as cartas de revisão: é o erro número 1 de quem desiste. Cinco minutos de cartas por dia valem mais que uma hora de lição nova.
?? Qual é a prova oficial de espanhol em cada nível? || DELE || TOEFL || Goethe >> O DELE, do Instituto Cervantes, vai do A1 ao C2.
?? O que quer dizer "¡Ojo!"? || Atenção! || Olhe para mim! || Cuidado com os olhos! >> Ojo é olho, mas na expressão ¡Ojo! quer dizer atenção.
` },
{ id: 's02', cat: 'start', e: '🎯', t: 'Seu objetivo com o espanhol', s: 'Para que você quer o espanhol, e como isso guia o estudo', body: `
Quem sabe **para que** estuda, estuda melhor. Antes da primeira lição, pense um minuto no seu objetivo.
# Objetivos comuns
| Objetivo | O que priorizar |
| viajar pela América Latina | falar e ouvir: as lições de cidade, comida e viagem |
| trabalhar com países vizinhos | e-mails, reuniões e o registro formal (usted) |
| séries, músicas e livros | ouvir muito e ampliar o vocabulário |
| morar fora ou estudar | tudo, e a prova DELE do nível pedido |
~ Quiero viajar por Sudamérica. = Quero viajar pela América do Sul.
~ Quiero hablar con mis colegas. = Quero falar com os meus colegas.
# Pequeno e todo dia
> Quinze minutos por dia valem mais que duas horas no domingo. O cérebro guarda o que vê **com frequência**.
GO Escreva numa frase para que você quer o espanhol: **Quiero aprender español para …**
~ Quiero aprender español para viajar. = Quero aprender espanhol para viajar.
?? O que funciona melhor? || 15 minutos todo dia || 2 horas uma vez por semana || 1 dia inteiro por mês >> A frequência é o que fixa a língua.
` },
// ---------- 💡 O espanhol que você já entende ----------
{ id: 's03', cat: 'palavras', e: '💡', t: 'Você já entende muito', s: 'Palavras iguais, parecidas e as regras de "tradução"', body: `
Português e espanhol vêm do latim e são primos próximos. Você já entende boa parte de um texto simples em espanhol.
# Palavras iguais ou quase iguais
| Espanhol | Português |
| casa | casa |
| mesa | mesa |
| hospital | hospital |
| ciudad | cidade |
| problema | problema |
| importante | importante |
~ casa, mesa, hospital, ciudad = casa, mesa, hospital, cidade
~ Es muy importante. = É muito importante.
# Regras de "tradução"
Muitas palavras seguem padrões fixos entre as duas línguas:
| Português | Espanhol | Exemplos |
| -ção | -ción | informação → información, nação → nación |
| -dade | -dad | cidade → ciudad, verdade → verdad |
| -agem | -aje | viagem → viaje, mensagem → mensaje |
| o → ue | ue | porta → puerta, novo → nuevo |
| e → ie | ie | terra → tierra, pedra → piedra |
~ información, verdad, viaje = informação, verdade, viagem
~ puerta, nuevo, tierra = porta, novo, terra
> Quando não souber uma palavra, tente a regra: muitas vezes funciona. Mas desconfie das que parecem fáceis demais: a próxima aula é sobre elas.
&& ciudad = cidade | viaje = viagem | puerta = porta | verdad = verdade | información = informação
?? Como se diz "mensagem" em espanhol? || mensaje || mensagem || mensaja >> -agem vira -aje: viaje, mensaje, garaje.
?? Como se diz "novo"? || nuevo || novo || nobo >> O o tônico muitas vezes vira ue: puerta, nuevo, fuego.
` },
{ id: 's04', cat: 'palavras', e: '🪤', t: 'Falsos amigos', s: 'exquisito, embarazada, oficina, polvo e outras armadilhas', body: `
Falsos amigos são palavras **iguais ou parecidas** com o português, mas com outro sentido. No espanhol há muitos, e alguns rendem situações bem constrangedoras.
# Os mais traiçoeiros
| Em espanhol | Parece… | Mas quer dizer |
| exquisito | esquisito | delicioso |
| embarazada | embaraçada | grávida |
| oficina | oficina | escritório |
| polvo | polvo | pó, poeira |
| rato | rato | um momento, um tempinho |
| salsa | salsa | molho |
| todavía | todavia | ainda |
| largo | largo | comprido |
| pelado | pelado | careca |
| apellido | apelido | sobrenome |
BR "Estoy embarazada" não é "estou envergonhada": é "**estou grávida**". Para vergonha, diga **me da vergüenza**. 😅
~ exquisito, embarazada, oficina, polvo = delicioso, grávida, escritório, pó
~ La comida está exquisita. = A comida está deliciosa.
~ Trabajo en una oficina. = Trabalho num escritório.
~ ¿Cuál es tu apellido? = Qual é o seu sobrenome?
# E as palavras certas para o que você queria dizer
| Português | Espanhol |
| esquisito | raro |
| oficina (de carro) | taller |
| polvo (animal) | pulpo |
| rato (animal) | ratón |
| apelido | apodo |
~ raro, taller, pulpo, ratón, apodo = esquisito, oficina, polvo, rato, apelido
?? Uma amiga diz "Estoy embarazada". O que ela disse? || Estou grávida. || Estou envergonhada. || Estou atrapalhada. >> Embarazada = grávida.
?? "Espera un rato." O que pedem? || Espere um pouco. || Espere o rato. || Espere no carro. >> Rato, em espanhol, é um tempinho.
?? Como se diz "esquisito" em espanhol? || raro || exquisito || esquisito >> Exquisito é delicioso. Esquisito é raro.
&& exquisito = delicioso | oficina = escritório | polvo = pó | apellido = sobrenome | todavía = ainda
` },
// ---------- 🔊 Os sons do espanhol ----------
{ id: 's05', cat: 'sons', e: '👅', t: 'Os sons que mudam', s: 'j, g, ll, y, rr, z e o b que é igual ao v', body: `
O espanhol tem poucos sons difíceis para o brasileiro. Mas alguns **mudam** em relação ao português, e são eles que denunciam o sotaque.
# O j e o g forte
O **j** (e o **g** antes de e, i) soa como um "r" bem raspado na garganta, parecido com o "rr" de "carro" no sotaque carioca.
~ jamón, joven, gente = presunto, jovem, gente
~ Juan es joven. = O Juan é jovem.
! Não pronuncie o j como em português: "jamón" não é "jamão". É "**rramón**", com o som da garganta.
# O ll e o y
Na maior parte da América Latina, **ll** e **y** soam igual: um "i" forte, quase um "j" suave. Na Argentina e no Uruguai, soam como "x" ou "j".
~ llamar, calle, yo = chamar, rua, eu
~ Me llamo Ana. = Eu me chamo Ana.
# O r e o rr
O **r** entre vogais é suave e rápido, como em "caro". O **rr** e o r do começo da palavra são **vibrados**, com a ponta da língua batendo várias vezes.
| Palavra | Som |
| pero (mas) | r suave |
| perro (cachorro) | rr vibrado |
| rojo (vermelho) | r vibrado |
~ pero, perro = mas, cachorro
# z e c: o "s" da América Latina
Na América Latina, **z** e **c** (antes de e, i) soam como **s**: zapato soa "sapato". Na Espanha, soam como o th do inglês.
~ zapato, cerveza, cinco = sapato, cerveja, cinco
# b e v: o mesmo som
Em espanhol, **b** e **v** soam **igual**, como um b suave. Vino e bino soariam idênticos.
~ vino, bueno, vivir = vinho, bom, viver
?? 🔊 perro || cachorro || mas || caro >> Perro tem rr vibrado; pero tem r suave.
?? 🔊 pero || mas || cachorro || pera >> Pero, com r suave, é "mas".
?? Como soa o z de "zapato" na América Latina? || como s || como z || como th >> Na América Latina, z soa como s.
` },
{ id: 's06', cat: 'sons', e: '🔉', t: 'Vogais fechadas e o acento', s: 'Cinco vogais, sem nasal, e a sílaba forte da palavra', body: `
O espanhol tem só **cinco** sons de vogal, sempre claros. O brasileiro precisa evitar duas coisas: as vogais nasais e as vogais abertas.
# Sem vogal nasal
Em espanhol, **não** existe ão, ã, õ. A vogal antes de m ou n continua limpa.
| Português | Espanhol |
| não | no |
| mão | mano |
| canção | canción |
| bom | bueno |
~ no, mano, canción = não, mão, canção
! "Canción" não soa "cansão": a vogal **o** é limpa e o n fica no fim: "can-SION".
# O e o o sempre fechados
O **e** soa sempre como em "você" (fechado) e o **o** como em "avô". Nada de é ou ó abertos.
~ café, sol, peso = café, sol, peso
# O acento da palavra
Cada palavra tem uma sílaba forte. O acento gráfico mostra quando ela foge da regra. E várias palavras têm a sílaba forte em lugar **diferente** do português:
| Português | Espanhol |
| telefone | teléfono |
| academia | academia (a-ca-DE-mia) |
| democracia | democracia (de-mo-CRA-cia) |
| nível | nivel (ni-VEL) |
| oxigênio | oxígeno |
~ teléfono, nivel, oxígeno = telefone, nível, oxigênio
> Essas palavras se chamam **heterotônicas**. Errar o acento delas é uma das marcas do portunhol.
?? Onde fica a sílaba forte de "teléfono"? || te-LÉ-fo-no || te-le-FO-no || TE-le-fo-no >> O acento gráfico mostra: te-LÉ-fo-no.
?? Como se diz "não" em espanhol? || no || não || nao >> O espanhol não tem vogais nasais: no.
` },
// ---------- 🧩 Como o espanhol funciona ----------
{ id: 's07', cat: 'base', e: '⚧', t: 'O gênero que muda', s: 'el viaje, la leche, el árbol: os heterogenéricos', body: `
Em espanhol, quase todos os substantivos têm o mesmo gênero do português. Mas há uma lista importante de palavras que **trocam de gênero**: os **heterogenéricos**.
# Masculinos em espanhol, femininos em português
| Espanhol | Português |
| el viaje | a viagem |
| el árbol | a árvore |
| el puente | a ponte |
| el color | a cor |
| el dolor | a dor |
| el equipo | a equipe |
~ el viaje, el árbol, el puente = a viagem, a árvore, a ponte
~ El viaje fue largo. = A viagem foi longa.
# Femininos em espanhol, masculinos em português
| Espanhol | Português |
| la leche | o leite |
| la sal | o sal |
| la nariz | o nariz |
| la sangre | o sangue |
| la miel | o mel |
~ la leche, la sal, la nariz = o leite, o sal, o nariz
~ La leche está fría. = O leite está frio.
! Palavras terminadas em **-aje** são masculinas: el viaje, el mensaje, el garaje. Já as terminadas em **-umbre** são femininas: la costumbre.
?? Como se diz "a viagem"? || el viaje || la viaje || la viajem >> Viaje é masculino em espanhol.
?? Como se diz "o leite"? || la leche || el leche || lo leche >> Leche é feminino em espanhol.
&& el árbol = a árvore | la sal = o sal | el puente = a ponte | la nariz = o nariz | el color = a cor
` },
{ id: 's08', cat: 'base', e: '🧩', t: 'Como a frase funciona', s: 'el, la, lo, al, del, e o sujeito que pode cair', body: `
A boa notícia: a frase em espanhol tem uma ordem muito parecida com a do português. As novidades estão nos artigos e nas pequenas palavras.
# A ordem e o sujeito
Como no português, o sujeito **pode cair**: o verbo já mostra quem é.
@ F:A ordem da frase em espanhol;Quem (pode cair)^s|Verbo^v|O resto^p;(Yo)|vivo|en São Paulo.;Ella|es|mi amiga.;(Nosotros)|hablamos|portugués.
~ Vivo en São Paulo. = Moro em São Paulo.
~ Ella es mi amiga. = Ela é minha amiga.
# Os artigos
| Espanhol | Português |
| el (masculino) | o |
| la (feminino) | a |
| los / las | os / as |
| un / una | um / uma |
| lo (neutro) | o (como em "o importante") |
~ el libro, la casa, los amigos = o livro, a casa, os amigos
~ Lo importante es estudiar. = O importante é estudar.
! **el** (artigo, sem acento) é "o"; **él** (pronome, com acento) é "ele".
# Só duas contrações
O português junta muitas palavras (no, na, do, da, pelo…). O espanhol só junta duas:
| Espanhol | Português |
| a + el = al | ao |
| de + el = del | do |
| en el, en la | no, na |
| de la | da |
~ Voy al cine. = Vou ao cinema.
~ Salgo del trabajo a las seis. = Saio do trabalho às seis.
~ Estoy en la casa de Ana. = Estou na casa da Ana.
! "No" e "na" não existem como contração: diga **en el** e **en la**.
?? Como se diz "na casa"? || en la casa || na casa || ne la casa >> Em espanhol não há "na": en la casa.
?? Como se diz "vou ao cinema"? || Voy al cine. || Voy a el cine. || Voy ao cine. >> a + el vira al.
? Quais são as duas únicas contrações do espanhol? || al (a + el) e del (de + el).
` },
{ id: 's09', cat: 'base', e: '🚫', t: 'Portunhol: o que evitar', s: 'muy × mucho, me gusta e os erros que entregam o brasileiro', body: `
Portunhol é a mistura que sai quando o brasileiro fala espanhol "no automático". Dá para se comunicar, mas alguns erros soam estranhos. Estes são os mais comuns.
# muy × mucho
**muy** vem antes de adjetivo e advérbio; **mucho** vem antes de substantivo ou depois do verbo.
| Certo | Errado |
| muy bueno (muito bom) | mucho bueno |
| mucho trabajo (muito trabalho) | muy trabajo |
| Te quiero mucho. | Te quiero muy. |
~ Es muy bueno. = É muito bom.
~ Tengo mucho trabajo. = Tenho muito trabalho.
# me gusta, e não "yo gusto"
Em espanhol, quem "gosta" é a coisa: ela **agrada** você.
~ Me gusta el café. = Eu gosto de café.
~ Me gustan los libros. = Eu gosto dos livros.
! Nada de "**yo gusto de café**". O certo é **me gusta el café**, sem "de".
# Outros sinais de portunhol
| Portunhol | Espanhol |
| obrigado | gracias |
| tchau | chau / adiós |
| tengo 20 anos | tengo 20 **años** |
| eu | yo |
| você | tú / usted |
BR Cuidado com **años** (anos) e **anos**: sem o til, a palavra muda de sentido e vira uma gafe. Escreva sempre **años**.
~ Tengo veinte años. = Tenho vinte anos.
?? Como se diz "muito bom"? || muy bueno || mucho bueno || muy bien bueno >> Antes de adjetivo, muy.
?? Como se diz "eu gosto de chocolate"? || Me gusta el chocolate. || Yo gusto de chocolate. || Me gusto chocolate. >> Com gustar, a coisa é o sujeito: me gusta el chocolate.
` },
{ id: 's10', cat: 'base', e: '👂', t: 'Ouvir de verdade', s: 'Velocidade, sotaques e como treinar o ouvido', body: `
O espanhol é falado em mais de vinte países, e cada região tem o seu sotaque. Entender vários é parte do caminho.
# Os sotaques que você vai ouvir
| Região | Uma marca |
| México | ritmo claro, vogais bem marcadas |
| Rio da Prata (Argentina, Uruguai) | ll e y soam como "x": "sho" para yo; usam vos |
| Caribe (Cuba, Porto Rico) | o s do fim quase some: "lo amigo" |
| Andes (Peru, Bolívia) | ritmo mais lento, consoantes claras |
| Espanha | z e c soam como th; usam vosotros |
~ ¿Cómo estás? = Como você está?
~ ¿Vos cómo estás? = E você, como está? (Argentina)
# Velocidade não é problema
O espanhol **parece** rápido porque as palavras se juntam: "¿Qué es eso?" soa quase "que-ê-so". Com o tempo, o ouvido separa as palavras sozinho.
> Ouça um pouco todo dia: uma música, um vídeo curto, um podcast. Na trilha, use o botão de som lento quando precisar.
~ Más despacio, por favor. = Mais devagar, por favor.
~ ¿Puede repetir, por favor? = Pode repetir, por favor?
?? Onde se usa "vos" no lugar de "tú"? || Argentina e Uruguai || México || Espanha >> No Rio da Prata, vos substitui tú.
?? Como se pede para falar mais devagar? || Más despacio, por favor. || Más rápido, por favor. || Más alto, por favor. >> Despacio = devagar.
` },
];
