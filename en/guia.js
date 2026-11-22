// Inglês · "Comece aqui" (antes do dia 1): 10 aulas curtas, conforme docs/ingles-estrutura.md.
// Mesma marcação de data/guide.js:
//   # título     > dica     ! erro comum     BR comparação com o português     GO missão
//   ~ inglês = tradução (com áudio)     | a | b |  tabela (a primeira linha é o cabeçalho)     - item de lista     **negrito**
//   @ esquema visual (sintaxe de data/visuals.js)
//   ?? pergunta || certa || errada || errada >> explicação   desafio de múltipla escolha
//   ?? 🔊 inglês || certa || errada >> explicação             desafio de ouvir e escolher
//   && inglês = tradução | inglês = tradução                  jogo de ligar os pares
//   ? pergunta || resposta                                    teste rápido de revelar
const GUIDE_CATS = [
  { id: 'start', e: '🚀', t: 'Primeiros passos' },
  { id: 'palavras', e: '💡', t: 'O inglês que você já sabe' },
  { id: 'sons', e: '🔊', t: 'Os sons do inglês' },
  { id: 'base', e: '🧩', t: 'Como o inglês funciona' },
];
const GUIDE = [
// ---------- 🚀 Primeiros passos ----------
{ id: 'e01', cat: 'start', e: '🗺️', t: 'Boas-vindas ao inglês', s: 'Como a trilha funciona e como estudar com o MODO', body: `
Que bom ter você aqui! 🎉 Esta trilha é de **inglês americano**, o que você mais ouve em séries, músicas e no trabalho. Tudo é explicado em português, em aulas curtas como esta.
# Seis degraus, uma régua mundial
O mundo inteiro mede uma língua com a mesma régua, o **Quadro Europeu Comum de Referência**. Cada degrau tem uma prova conhecida da Cambridge.
| Nível | Você consegue… | Prova de referência |
| A1 | se apresentar e pedir coisas simples | — |
| A2 | contar o que fez e resolver a rotina | A2 Key |
| B1 | conversar sobre quase tudo e viajar sem medo | B1 Preliminary |
| B2 | discutir temas complexos e trabalhar em inglês | B2 First |
| C1 | usar o inglês com folga no estudo e no trabalho | C1 Advanced |
| C2 | entender praticamente tudo, até ironia | C2 Proficiency |
> O **B1** já é o nível de independência: com ele você se vira sozinha ou sozinho numa viagem ou numa reunião simples.
# Módulos de seis lições
Cada módulo tem **6 lições e 1 avaliação**. A 6ª lição é sempre de **ler e escrever**: um texto de verdade (um cadastro, um e-mail, uma mensagem) e a sua vez de escrever.
@ P:Uma lição por dia;1. Ouvir=a conversa da lição, com microfone;2. Entender=a regra passo a passo, com o som da lição;3. Palavras=o vocabulário com áudio;4. Praticar=exercícios curtos e variados;5. Ir além=tarefa de casa e conteúdos extras
# Errar faz parte do método
Quando você erra e logo vê o porquê, o cérebro guarda a regra **melhor** do que se tivesse acertado no chute. Por isso cada erro aqui vem com explicação.
! Não pule as cartas de revisão: é o erro número 1 de quem desiste. Cinco minutos de cartas por dia valem mais que uma hora de lição nova.
?? Quantas lições tem cada módulo? || 6 lições e 1 avaliação || 10 lições seguidas || 4 lições e 2 provas >> Seis lições, e a sexta é sempre de ler e escrever.
?? Qual nível já é considerado de independência? || B1 || A1 || C2 >> No B1 você conversa sobre quase tudo do dia a dia.
` },
{ id: 'e02', cat: 'start', e: '🎯', t: 'Seu objetivo com o inglês', s: 'Para que você quer o inglês, e como isso guia o estudo', body: `
Quem sabe **para que** estuda, estuda melhor. Antes da primeira lição, pense um minuto no seu objetivo.
# Para que você quer o inglês?
- **Viajar:** pedir comida, se virar no aeroporto e no hotel, conversar com quem você conhece.
- **Trabalhar:** reuniões, e-mails, entrevista de emprego, trabalho remoto para fora.
- **Entender:** séries, músicas, vídeos e notícias sem legenda.
- **Estudar:** ler artigos, fazer um curso ou uma prova como o TOEFL ou o IELTS.
> Não precisa escolher um só. Mas o seu objetivo principal diz onde colocar mais energia: quem quer viajar treina mais a fala; quem quer ler, mais o vocabulário.
# Você não começa do zero
Muito brasileiro já entende bastante inglês de ouvido e de leitura, só não fala. Isso é normal: **entender** vem antes de **falar**. Na trilha, você ouve e repete desde a primeira lição, para a boca acompanhar o ouvido.
# Metas que funcionam
| Meta vaga | Meta que funciona |
| "Quero falar inglês." | "Quero me apresentar e pedir comida em inglês até o fim do mês." |
| "Vou estudar mais." | "Vou fazer uma lição por dia, logo depois do café." |
BR Uma meta pequena e com prazo ajuda mais que uma grande e sem data. E estudar sempre no mesmo horário cria o hábito sem esforço.
GO Escreva a sua meta numa frase, com prazo, e deixe onde você veja todo dia.
?? Qual destas metas funciona melhor? || Fazer uma lição por dia, depois do café || Estudar mais || Ficar fluente logo >> Uma meta concreta e com hora marcada vira hábito.
` },
// ---------- 💡 O inglês que você já sabe ----------
{ id: 'e03', cat: 'palavras', e: '💡', t: 'Você já sabe inglês', s: 'As palavras que o português pegou emprestadas', body: `
Você já fala dezenas de palavras em inglês todos os dias. 😉 Elas são um ótimo ponto de partida, com um cuidado: a **pronúncia** quase sempre muda.
# Palavras que você já usa
| Em inglês | Como o brasileiro costuma dizer | Como soa em inglês |
| show | "chôu" | "shou" |
| site | "sáiti" | "sait", sem o "i" no fim |
| internet | "internéti" | "ÍN-ter-net" |
| delivery | "delíveri" | "di-LÍ-ve-ri" |
| shopping | "xópin" | "SHÁ-ping" |
~ show, site, internet, delivery, shopping = show, site, internet, entrega, compras
~ I love this show. = Eu amo esta série.
~ The website is online. = O site está no ar.
! Em inglês, **shopping** é o ato de fazer compras. O prédio com lojas, o nosso "shopping", se chama **mall**.
# Palavras quase iguais
Muitas palavras terminadas em -ção, -dade e -mente têm uma irmã em inglês:
| Português | Inglês |
| informação | information |
| universidade | university |
| normalmente | normally |
| importante | important |
~ information, university, normally = informação, universidade, normalmente
~ It's very important. = É muito importante.
> Quando não souber uma palavra, tente a "irmã" em inglês: muitas vezes funciona. Mas desconfie das que parecem fáceis demais: a próxima aula é sobre elas.
&& mall = shopping (o prédio) | university = universidade | important = importante | information = informação | website = site
?? Como se diz "shopping" (o prédio com lojas) em inglês americano? || mall || shopping || store >> Shopping, em inglês, é fazer compras. O prédio é mall.
` },
{ id: 'e04', cat: 'palavras', e: '🪤', t: 'Falsos amigos', s: 'pretend, actually, push, library e outras armadilhas', body: `
Falsos amigos são palavras que **parecem** português, mas querem dizer outra coisa. São as que mais causam confusão, porque a gente nem desconfia.
# Os mais traiçoeiros
| Em inglês | Parece… | Mas quer dizer |
| pretend | pretender | fingir |
| actually | atualmente | na verdade |
| push | puxar | empurrar |
| library | livraria | biblioteca |
| parents | parentes | pais (pai e mãe) |
| college | colégio | faculdade |
| lunch | lanche | almoço |
| exit | êxito | saída |
| notebook | notebook | caderno |
| costume | costume | fantasia |
BR Na porta de uma loja americana, **PUSH** quer dizer empurrar e **PULL** quer dizer puxar. Dá para errar a porta no primeiro dia. 😅
~ pretend, push, library, college = fingir, empurrar, biblioteca, faculdade
~ lunch, exit, notebook, costume = almoço, saída, caderno, fantasia
~ Actually, I'm from Brazil. = Na verdade, eu sou do Brasil.
~ My parents are in Rio. = Os meus pais estão no Rio.
# E as palavras certas para o que você queria dizer
| Português | Inglês |
| atualmente | nowadays, currently |
| pretender | to plan, to intend |
| livraria | bookstore |
| parentes | relatives |
| notebook (computador) | laptop |
~ nowadays, relatives, laptop = atualmente, parentes, notebook
~ I'm at the bookstore. = Eu estou na livraria.
?? Numa porta está escrito PUSH. O que você faz? || empurra || puxa || toca a campainha >> Push = empurrar. Puxar é pull.
?? "My parents are here." Quem está aí? || o pai e a mãe || os parentes || os amigos >> Parents são os pais. Parentes são relatives.
?? Como se diz "atualmente" em inglês? || nowadays || actually || currently not >> Actually quer dizer "na verdade". Atualmente é nowadays ou currently.
&& pretend = fingir | actually = na verdade | library = biblioteca | lunch = almoço | exit = saída
` },
// ---------- 🔊 Os sons do inglês ----------
{ id: 'e05', cat: 'sons', e: '👅', t: 'Os sons que o português não tem', s: 'O th, o h com sopro e o r americano', body: `
O inglês tem poucos sons que não existem em português. Três deles aparecem o tempo todo, e vale treinar desde já.
# O th, com a língua entre os dentes
São dois sons, os dois com a ponta da língua aparecendo um pouquinho entre os dentes:
| Tipo | Como fazer | Exemplos |
| th com voz | a garganta vibra, como num "d" suave | the, this, they, mother |
| th sem voz | só ar, como um "f" feito com a língua | think, three, thank you |
~ this, they, mother = isto, eles, mãe
~ think, three = pensar, três
~ Thank you! = Obrigado! / Obrigada!
! Não troque o th por "d", "f" ou "t": "tank you" (tanque você) não é "thank you".
# O h com sopro
Em português o h é mudo. Em inglês, no começo da palavra, ele é um **sopro**, parecido com o "r" de "rato" no sotaque carioca, só que mais leve.
~ hi = oi
~ house = casa
# O r americano
No inglês americano, a língua se curva para trás **sem tocar** em lugar nenhum. E o r do fim da palavra **soa**: car não é "cá".
~ red = vermelho
~ car = carro
BR O "r caipira" do interior de São Paulo e de Minas é parecido com o r americano. Se você tem esse sotaque, já sai na frente!
?? 🔊 three || three (três) || tree (árvore) >> Em three, a língua fica entre os dentes. Em tree, não.
?? 🔊 think || think (pensar) || sink (pia) >> O th de think é feito com a língua entre os dentes. O s de sink, não.
GO Diga "Thank you" e "three" na frente do espelho: a ponta da língua tem que aparecer.
` },
{ id: 'e06', cat: 'sons', e: '🐑', t: 'Vogais curtas e longas', s: 'ship × sheep, full × fool', body: `
Em inglês, uma vogal **mais curta ou mais longa** muda a palavra inteira. Para o ouvido brasileiro elas parecem iguais, então o treino é ouvir com atenção.
# i curto × i longo
| Curto (relaxado) | Longo (sorrindo) |
| ship (navio) | sheep (ovelha) |
| live (morar) | leave (sair) |
| sit (sentar) | seat (assento) |
O **i curto** é rápido e relaxado, quase um "ê" fechado. O **i longo** é esticado, com os lábios abertos como num sorriso.
~ ship, sheep = navio, ovelha
~ sit, seat = sentar, assento
~ I live in São Paulo. = Eu moro em São Paulo.
~ I leave at six. = Eu saio às seis.
# u curto × u longo
| Curto | Longo |
| full (cheio) | fool (bobo) |
| pull (puxar) | pool (piscina) |
~ full, fool = cheio, bobo
~ pull, pool = puxar, piscina
~ The pool is full. = A piscina está cheia.
> A escrita ajuda: **ee** e **ea** costumam ser o i longo (sheep, seat). **oo** costuma ser o u longo (pool, fool).
?? 🔊 sheep || sheep (ovelha) || ship (navio) >> Em sheep o som é longo, com os lábios esticados.
?? 🔊 live || live (morar) || leave (sair) >> Em live o i é curto e relaxado.
?? 🔊 pool || pool (piscina) || pull (puxar) >> Em pool o u é longo.
` },
{ id: 'e07', cat: 'sons', e: '🔚', t: 'O fim das palavras', s: 'big, não "bigue": sem vogal extra no fim', body: `
O português quase nunca termina palavra em consoante. Por isso, sem perceber, a gente coloca uma vogal no fim: big vira "bigui", Facebook vira "feicibúqui". Em inglês, a consoante do fim fica **seca**.
# Sem vogal no fim
| Em inglês | Como o brasileiro costuma dizer | Como soa |
| big | "bigui" | "big" |
| black | "bléqui" | "blék" |
| hot dog | "hóti dógui" | "hát dóg" |
| Facebook | "feicibúqui" | "FEIS-buk" |
~ big, black, hot dog = grande, preto, cachorro-quente
~ It's a big dog. = É um cachorro grande.
# O t e o d que viram "tchi" e "dji"
Em muitas regiões do Brasil, "ti" e "di" viram "tchi" e "dji". Em inglês isso não acontece: o t é sempre t.
~ hot = quente
~ red = vermelho
! "Hótchi" e "rédji" denunciam o sotaque na hora. Termine o t e o d com a língua parada no céu da boca, sem soltar vogal.
# O m do fim fecha a boca
No fim da palavra, o m se faz com os **lábios fechados**: time, him, room. Em português, o m do fim só deixa a vogal nasal.
~ What time is it? = Que horas são?
?? Como se diz "big"? || com a consoante seca no fim: "big" || "bigui" || "bigue" >> Em inglês, a palavra termina na consoante, sem vogal extra.
GO Diga devagar "big", "black" e "hot dog", parando na consoante. Grave e ouça.
` },
{ id: 'e08', cat: 'sons', e: '🥁', t: 'O acento das palavras', s: 'PHOtograph, phoTOgraphy: a sílaba forte muda tudo', body: `
Toda palavra inglesa tem uma sílaba **forte**, mais longa e mais alta. As outras ficam fracas e curtas. Errar a sílaba forte atrapalha mais do que errar um som.
# A sílaba forte muda de lugar
| Palavra | Sílaba forte |
| photograph (fotografia) | **PHO**tograph |
| photography (a arte de fotografar) | pho**TO**graphy |
| photographer (fotógrafo) | pho**TO**grapher |
~ photograph = fotografia
~ photography = fotografia (a arte)
~ photographer = fotógrafo
# Palavras que o brasileiro acentua errado
| Palavra | Como é |
| hotel | ho**TEL** |
| computer | com**PU**ter |
| banana | ba**NA**na, com o primeiro e o último "a" bem fracos |
| comfortable | **COMF**-ter-bul, só três sílabas |
~ hotel, computer, banana = hotel, computador, banana
~ The hotel is comfortable. = O hotel é confortável.
# As sílabas fracas quase somem
A vogal fraca vira um som curtinho, parecido com o "â" de "cama" dito rápido. É por isso que o inglês parece "engolir" partes das palavras.
> Nas palavras do vocabulário, ouça o áudio e repare qual sílaba **se destaca**. É ela que você precisa acertar.
?? Onde cai o acento em "photographer"? || pho-TO-grapher || PHO-tographer || photo-GRA-pher >> Pho-TO-grapher, como em pho-TO-graphy.
?? Quantas sílabas tem "comfortable" na fala? || três: COMF-ter-bul || quatro: com-for-ta-ble || cinco >> Na fala, a sílaba "or" quase some.
` },
{ id: 'e09', cat: 'sons', e: '👂', t: 'Ouvir de verdade', s: 'Palavras que se juntam: gonna, wanna, what\'s up', body: `
Você aprende "I am going to", mas o nativo fala "I'm gonna". Na fala rápida, as palavras **se juntam** e encolhem. Conhecer as junções mais comuns faz o inglês das séries ficar muito mais claro.
# As junções mais comuns
| Escrito | Como soa | Quer dizer |
| going to | gonna | vou, vai (futuro) |
| want to | wanna | quero, quer |
| got to | gotta | tenho que |
| What's up? | "uâtsâp" | E aí? |
| Do you…? | "dyu" | Você…? |
~ I'm gonna call you. = Vou te ligar.
~ I wanna go home. = Eu quero ir para casa.
~ I gotta go. = Tenho que ir.
! Gonna e wanna são da **fala** e de mensagens informais. Num e-mail de trabalho ou numa prova, escreva going to e want to.
# Uma palavra emenda na outra
Quando uma palavra termina em consoante e a próxima começa com vogal, elas se ligam: **an apple** soa "a-napple", **pick it up** soa "pi-ki-tup".
~ an apple = uma maçã
~ Pick it up! = Pega isso!
> Não tente falar assim desde já. Primeiro aprenda a **reconhecer** no ouvido. A fala natural vem com o tempo.
?? O que quer dizer "I'm gonna eat"? || Eu vou comer || Eu quero comer || Eu tenho que comer >> Gonna = going to, o futuro.
?? Num e-mail de trabalho, qual forma usar? || I want to || I wanna || I wanna to >> Wanna é só da fala informal.
&& gonna = going to | wanna = want to | gotta = got to | What's up? = E aí?
` },
// ---------- 🧩 Como o inglês funciona ----------
{ id: 'e10', cat: 'base', e: '🧱', t: 'Como a frase funciona', s: 'Sujeito sempre presente e uma ordem que quase não muda', body: `
A boa notícia: a frase inglesa tem uma ordem bem fixa, parecida com a do português. A novidade: o **sujeito nunca some**.
# A ordem: quem + verbo + o resto
@ F:A ordem da frase em inglês;Quem^s|Verbo^v|O resto^p;I|live|in São Paulo.;She|is|my friend.;We|speak|Portuguese.
~ I live in São Paulo. = Eu moro em São Paulo.
~ She is my friend. = Ela é minha amiga.
# O sujeito nunca some
Em português, o verbo já mostra quem é: "moro", "somos". Em inglês, não. Por isso o sujeito aparece **sempre**, até quando não é ninguém: chuva, calor e horas usam **it**.
| Português | Inglês |
| Moro no Rio. | I live in Rio. |
| Está chovendo. | It's raining. |
| Está quente. | It's hot. |
| São dez horas. | It's ten o'clock. |
~ It's raining. = Está chovendo.
~ It's ten o'clock. = São dez horas.
! "Is raining" e "Am tired" estão errados. Sempre com sujeito: It's raining. I'm tired.
# O adjetivo vem antes
Em português, dizemos "um carro vermelho". Em inglês, o adjetivo vem **antes** do substantivo, e não muda no plural.
| Português | Inglês |
| um carro vermelho | a red car |
| carros vermelhos | red cars |
~ I have a red car. = Eu tenho um carro vermelho.
?? Como se diz "Está chovendo"? || It's raining. || Is raining. || Raining. >> O inglês sempre pede o sujeito: aqui, it.
?? Como se diz "uma casa grande"? || a big house || a house big || a house bigs >> O adjetivo vem antes do substantivo e não vai para o plural.
? Por que o inglês precisa de "it" em "It's hot"? || Porque toda frase precisa de sujeito, mesmo quando não há ninguém fazendo a ação.
` },
];
