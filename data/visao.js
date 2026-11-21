// Visão geral: a primeira tela da etapa "Entender" de cada lição (pedido de 21/11/2026).
// Antes de qualquer detalhe, o aluno vê em linguagem simples: o que é a regra (o), quando usar (q) e por que aprender (p).
// Os exemplos são as frases de gramática da própria lição (l.ge), que já têm áudio.
// Escrito para iniciantes: frases curtas, sem termo técnico sem explicação. **negrito** = palavra em alemão.
// Lições sem texto aqui (B1 em diante, por enquanto) mostram a visão geral montada com o resumo da regra (l.gx).
const VG = {
  // ---------- Módulo 1 · Primeiros contatos ----------
  0: {
    o: 'Para se apresentar você usa dois verbos: **sein** (ser) e **heißen** (chamar-se). Eles mudam um pouco conforme a pessoa: **ich bin**, **du bist**, **er ist**.',
    q: 'No primeiro contato com alguém: dizer o seu nome, perguntar o nome da pessoa e dizer quem é quem.',
    p: 'É a primeira frase de qualquer conversa. E você já aprende a regra mais importante do alemão: o verbo fica sempre em 2º lugar.',
  },
  1: {
    o: 'Os verbos comuns mudam só o final: **ich komme**, **du kommst**, **er kommt**. Para dizer de onde você vem, use **aus**; para dizer onde mora, use **in**.',
    q: 'Quando alguém pergunta de onde você é, onde mora e que línguas fala.',
    p: 'Depois do nome, é a pergunta que todo alemão faz. E o mesmo padrão de final (-e, -st, -t) serve para centenas de verbos.',
  },
  'n-buchstabieren': {
    o: 'Cada letra tem um nome em alemão, e algumas enganam: o V se chama "fau" e o W se chama "vê". Para pedir que alguém soletre: **Wie schreibt man das?**',
    q: 'Ao telefone, num cadastro, na farmácia: sempre que você precisa dizer como se escreve o seu nome, o seu e-mail ou a sua rua.',
    p: 'Nomes brasileiros quase sempre precisam ser soletrados na Alemanha. Saber o alfabeto evita erro no seu nome em documentos.',
  },
  'n-alter': {
    o: 'Em alemão você não "tem" idade, você "é" a idade: **Ich bin zwanzig**. E os números de 0 a 20 seguem quase todos uma regra simples: 13 é três + dez (**dreizehn**).',
    q: 'Quando perguntam a sua idade, quando você passa o seu telefone ou entende um número dito em voz alta.',
    p: 'Idade e telefone aparecem em toda apresentação e todo formulário. E os números até 20 são a base de todos os outros.',
  },
  5: {
    o: 'Há dois tipos de pergunta. Com palavra de pergunta (**wo**, **wer**, **wann**…), ela vem primeiro e o verbo logo depois. Pergunta de sim ou não começa pelo verbo.',
    q: 'Sempre que você quer saber algo: onde a pessoa mora, quem é, quando, como, ou se algo é verdade.',
    p: 'Perguntar é o que mantém a conversa viva. Com estas duas formas você já consegue fazer qualquer pergunta simples.',
  },
  'n-formular': {
    o: 'Com quem você não conhece, use **Sie** (o senhor, a senhora), sempre com letra maiúscula. Com **Sie** o verbo fica igual ao infinitivo: **Wie heißen Sie?**',
    q: 'Com desconhecidos, no trabalho, em lojas e repartições. E ao preencher formulários, que pedem os seus dados pessoais.',
    p: 'Na Alemanha quase tudo passa por formulário. E usar **Sie** na hora certa é a primeira forma de educação.',
  },
  // ---------- Módulo 2 · Pessoas e coisas ----------
  2: {
    o: 'Toda palavra tem um artigo: **der** (masculino), **die** (feminino) ou **das** (neutro). E o gênero nem sempre é o mesmo do português: a cadeira é **der Stuhl**.',
    q: 'Sempre que você fala de uma coisa ou de uma pessoa: o artigo vem junto com a palavra.',
    p: 'O artigo muda muitas outras palavras da frase. Por isso, desde já, aprenda cada palavra com o seu artigo, como se fossem uma só.',
  },
  3: {
    o: '**mein** quer dizer meu e minha; **dein**, teu e tua (de **du**). Com palavras femininas e no plural ganham um **-e**: **meine Mutter**, **meine Eltern**.',
    q: 'Para apresentar a sua família e dizer de quem é alguma coisa.',
    p: 'Família é um dos primeiros assuntos de conversa. E o mesmo **-e** volta depois em várias outras palavras.',
  },
  'n-plural': {
    o: 'No plural o artigo é sempre **die**, para qualquer palavra. O final da palavra é que varia: **Bücher**, **Katzen**, **Fotos**.',
    q: 'Sempre que você fala de mais de uma coisa: quantos filhos, quantos livros, quantas pessoas.',
    p: 'Contar e falar de quantidades é do dia a dia. E a boa notícia é que o artigo do plural é sempre o mesmo.',
  },
  'n-beruf': {
    o: 'Para dizer a profissão use **sein**, sem artigo: **Ich bin Lehrer** (e não "um professor"). Para a mulher, acrescente **-in**: **Lehrerin**.',
    q: 'Quando perguntam o que você faz, ou quando você fala do trabalho de alguém.',
    p: 'Profissão é a terceira pergunta de toda apresentação, depois do nome e de onde você vem.',
  },
  4: {
    o: 'Os verbos regulares mudam só o final, conforme a pessoa: **ich lerne**, **du lernst**, **er lernt**. E **gern** depois do verbo quer dizer "gostar de fazer".',
    q: 'Para falar do que você faz no dia a dia e do que gosta de fazer no tempo livre.',
    p: 'Com esse padrão você conjuga a maioria dos verbos do alemão, e **gern** é o jeito mais simples de falar dos seus gostos.',
  },
  'n-nachricht': {
    o: '**und** (e), **aber** (mas) e **oder** (ou) ligam duas frases, e depois deles a frase continua normal, sem mudar nada de lugar.',
    q: 'Para escrever e falar frases mais longas: juntar duas informações, fazer um contraste ou dar uma escolha.',
    p: 'Com essas três palavras suas mensagens deixam de ser uma lista de frases soltas.',
  },
  // ---------- Módulo 3 · Horários e rotina ----------
  6: {
    o: 'De 21 a 99 o alemão fala a unidade primeiro: 21 = "um e vinte", **einundzwanzig**. Para as horas: **Es ist drei Uhr**, e "às" é **um**.',
    q: 'Para dizer e perguntar as horas, combinar um horário e entender preços e números.',
    p: 'Horários aparecem o tempo todo: no trabalho, no trem, no médico. E a ordem "unidade antes da dezena" é a que mais confunde no começo.',
  },
  9: {
    o: 'Alguns verbos têm um pedaço que se solta e vai para o fim da frase: **aufstehen** (levantar) vira **Ich stehe um sechs auf**.',
    q: 'Para contar a sua rotina: acordar, começar, fazer compras, ver TV… muitos desses verbos se separam.',
    p: 'Esses verbos são muito comuns. Se você não procurar o pedaço no fim da frase, entende o contrário do que foi dito.',
  },
  'n-termin': {
    o: 'Três palavrinhas dizem "quando": **um** + hora (**um zehn Uhr**), **am** + dia (**am Montag**) e **im** + mês ou estação (**im Mai**).',
    q: 'Para marcar um compromisso, combinar um café, dizer quando começa um curso.',
    p: 'Marcar horário é uma das conversas mais comuns. Com **um**, **am** e **im** você diz qualquer data.',
  },
  10: {
    o: 'Alguns verbos mudam a vogal com **du** e com **er/sie**: **fahren** vira **du fährst**, **lesen** vira **er liest**. Com **ich** e no plural não muda nada.',
    q: 'Ao falar de transporte, de leitura, de comida: **fahren**, **lesen**, **sehen**, **essen** e **nehmen** são desse tipo.',
    p: 'Esses verbos estão entre os mais usados. Conhecendo o padrão, você reconhece a forma mudada e não estranha.',
  },
  11: {
    o: '**können** (poder, saber) e **möchten** (gostaria) ficam em 2º lugar, e o outro verbo vai inteiro para o fim: **Ich kann Deutsch sprechen**.',
    q: 'Para pedir ajuda, dizer o que você sabe fazer e pedir algo com educação.',
    p: 'Com **möchte** você pede qualquer coisa com educação. E essa forma (verbo em 2º, outro verbo no fim) vale para todos os verbos desse tipo.',
  },
  'n-einladung': {
    o: 'Para aceitar um convite: **Ich komme gern!** Para recusar com educação, comece com **leider** (infelizmente): **Leider kann ich nicht kommen.**',
    q: 'Quando alguém te convida para uma festa, um churrasco ou um café, por mensagem ou pessoalmente.',
    p: 'Recusar sem ser grosseiro é importante. E depois de **leider** o verbo vem logo em seguida, como você vai ver.',
  },
  // ---------- Módulo 4 · Comer e comprar ----------
  7: {
    o: 'Quando uma coisa recebe a ação (o que você tem, come ou compra), o artigo masculino muda: **der** vira **den**, **ein** vira **einen**. O resto não muda.',
    q: 'Ao dizer o que você quer, tem, come ou compra: **Ich habe einen Apfel**.',
    p: 'Essa mudança (o acusativo) aparece em quase toda frase com objeto. Começar pelo masculino deixa tudo mais simples.',
  },
  'n-markt': {
    o: 'Em alemão não há "de" entre a quantidade e o produto: **ein Kilo Tomaten** (um quilo de tomates). E o preço se diz assim: 2,50 € = **zwei Euro fünfzig**.',
    q: 'Na feira, no mercado, na padaria: para pedir quantidades e entender quanto custa.',
    p: 'Comprar comida é uma das primeiras coisas que você faz ao chegar. E os números até 1000 servem para todos os preços.',
  },
  8: {
    o: 'Há dois "não". **kein** nega uma coisa (**Ich trinke kein Bier**); **nicht** nega o resto: um verbo, um adjetivo (**Das ist nicht teuer**).',
    q: 'Para recusar algo, dizer que não tem, que não quer, ou que algo não é como parece.',
    p: 'Negar é essencial em qualquer conversa, e escolher entre **kein** e **nicht** é uma dúvida que todo iniciante tem.',
  },
  'n-gern': {
    o: 'Para gostar de uma coisa use **mögen**: **Ich mag Käse**. Para preferir: **lieber**. Para o favorito: **am liebsten**. E para a frequência: **immer**, **oft**, **nie**.',
    q: 'Ao falar de comida, de bebida e de hábitos: do que você gosta, o que prefere e com que frequência come algo.',
    p: 'Comida é assunto em toda mesa. Com essas palavras você diz exatamente o que quer e o que não quer.',
  },
  14: {
    o: '**dieser** quer dizer este/esta e muda com o gênero: **dieser** (der), **diese** (die), **dieses** (das). Para o preço: **Was kostet …?**',
    q: 'Numa loja, para apontar a peça que você quer e perguntar quanto custa.',
    p: 'Comprar roupa e escolher entre várias coisas fica fácil quando você consegue dizer "este aqui".',
  },
  'n-einkaufszettel': {
    o: 'Na lista e no pedido, o produto é o objeto do verbo. Por isso só o masculino muda: **Ich brauche einen Liter Milch**, mas **eine Packung Reis**.',
    q: 'Para ler um cardápio, pedir no restaurante e escrever a sua lista de compras.',
    p: 'Ler o cardápio sem medo e montar a lista do mercado em alemão são tarefas da primeira semana no país.',
  },
  // ---------- Módulo 5 · Casa e cidade ----------
  12: {
    o: '**es gibt** quer dizer "há" ou "tem": **Es gibt einen Balkon**. E o adjetivo depois de **ist** não muda nada: **Die Küche ist groß**.',
    q: 'Para descrever a sua casa: o que tem nela e como ela é.',
    p: 'Casa é assunto de conversa e de procura de apartamento. E **es gibt** serve para falar de qualquer lugar.',
  },
  13: {
    o: 'Para dizer onde algo está, use palavras de lugar (**auf** = em cima, **unter** = embaixo, **neben** = ao lado…). Depois delas o artigo muda: **der** vira **dem**.',
    q: 'Para dizer onde estão as coisas e as pessoas: na mesa, embaixo da cadeira, no banheiro.',
    p: 'Achar e mostrar coisas é do dia a dia. E este é o primeiro contato com o dativo, que volta em muitas lições.',
  },
  'n-wohnungsanzeige': {
    o: 'Anúncios de apartamento usam muitas siglas. E **Zimmer** não é quarto: é cômodo. Uma **Zwei-Zimmer-Wohnung** tem sala e um quarto.',
    q: 'Quando você procura apartamento: para ler o anúncio, entender o preço e ligar para perguntar.',
    p: 'Entender o anúncio evita surpresa: no tamanho do apartamento e no valor de verdade do aluguel.',
  },
  15: {
    o: 'Para dar uma instrução ou uma ordem: com **Sie**, o verbo vem primeiro (**Gehen Sie geradeaus!**); com **du**, só o verbo, sem o final -st (**Nimm den Bus!**).',
    q: 'Para dar e entender direções na rua, dar instruções e fazer pedidos diretos.',
    p: 'Pedir e dar o caminho é das situações mais comuns para quem chega numa cidade nova.',
  },
  'n-zurpost': {
    o: 'Para dizer aonde você vai, use **zu**, que junta com o artigo: **zum** (der e das) e **zur** (die). Para cidade e país, use **nach**: **nach Berlin**.',
    q: 'Sempre que você diz aonde vai: ao correio, à estação, ao médico, para casa.',
    p: 'Você vai usar isso todos os dias. E é a forma de dizer "ir a um lugar" que o português não tem igual.',
  },
  'n-schilder': {
    o: 'Placas usam poucas palavras: **geöffnet** (aberto), **geschlossen** (fechado), **Bitte nicht rauchen** (não fume). O verbo fica no infinitivo, sem pessoa.',
    q: 'Na rua, no prédio, nas lojas: para entender avisos e escrever um bilhete curto para um vizinho.',
    p: 'Placas estão por toda parte. Entender **ziehen** (puxe) e **geschlossen** (fechado) evita muito aperto.',
  },
  // ---------- Módulo 6 · Saúde e fim de semana ----------
  16: {
    o: 'Mais três verbos como **können**: **müssen** (ter que), **dürfen** (ter permissão) e **wollen** (querer). Também ficam em 2º lugar, com o outro verbo no fim.',
    q: 'No médico, nas regras e nos planos: o que você precisa fazer, o que pode ou não pode e o que quer.',
    p: 'Com esses verbos você entende regras e explica o que precisa. São dos mais usados da língua.',
  },
  'n-arzttermin': {
    o: 'Uma ligação para o consultório segue um roteiro: você diz o nome (**Hier ist …**), o que quer (**Ich möchte einen Termin machen**) e combina o horário.',
    q: 'Para marcar uma consulta por telefone, que é como quase tudo se marca na Alemanha.',
    p: 'Telefonar numa língua nova assusta. Com o roteiro pronto, a ligação fica curta e previsível.',
  },
  17: {
    o: 'Para falar do passado se usa **haben** + uma forma do verbo no fim, o particípio: **Ich habe Pizza gegessen** (eu comi pizza).',
    q: 'Sempre que você conta o que fez: ontem, no fim de semana, no ano passado.',
    p: 'É o passado mais usado na fala do dia a dia. Com ele você já conta qualquer coisa que aconteceu.',
  },
  18: {
    o: 'Alguns verbos usam **sein** em vez de **haben** no passado: os de movimento, como **gehen** e **fahren**, e o **bleiben**: **Ich bin nach Hause gegangen**.',
    q: 'Para contar viagens e deslocamentos: aonde você foi, como foi e quanto tempo ficou.',
    p: 'Viagens e passeios são assunto certo. E escolher entre **haben** e **sein** fica fácil quando você pensa em movimento.',
  },
  'n-wochenende': {
    o: 'Para contar em ordem: **zuerst** (primeiro), **dann** (depois), **danach** (depois disso). Quando elas abrem a frase, o verbo vem logo depois: **Dann habe ich gekocht**.',
    q: 'Para contar o seu fim de semana ou qualquer sequência de acontecimentos.',
    p: '"Como foi o seu fim de semana?" é a pergunta de toda segunda-feira. Com essas palavras, a sua resposta ganha ordem.',
  },
  'n-postkarte': {
    o: 'Um cartão-postal junta o agora e o passado: onde você está (**Ich bin in Hamburg**) e o que já fez (**Wir haben den Hafen gesehen**).',
    q: 'Para escrever de férias para alguém: um cartão, uma mensagem ou um e-mail curto.',
    p: 'É um texto curto e completo: abertura, novidades e despedida. O mesmo modelo serve para muitas mensagens.',
  },
  // ---------- Módulo 7 · Biografia e passado ----------
  19: {
    o: 'Para **sein** e **haben**, o passado mais usado é curto: **ich war** (eu era, estava) e **ich hatte** (eu tinha).',
    q: 'Para contar como era antes, como você estava e o que tinha.',
    p: 'Na conversa, os alemães quase sempre usam **war** e **hatte** em vez da forma longa do passado. Você vai ouvir isso o tempo todo.',
  },
  'n-lebenslauf': {
    o: 'Os anos até 1999 se dizem como "dezenove cem": 1995 = **neunzehnhundertfünfundneunzig**. E o ano vem sozinho, sem "em": **2015 habe ich studiert**.',
    q: 'Para contar a sua vida em etapas e montar um currículo: quando nasceu, estudou e se mudou.',
    p: 'Currículo, entrevista e conversa de apresentação pedem datas. E dizer o ano errado é um erro muito comum.',
  },
  20: {
    o: 'Algumas palavras sempre mudam o artigo depois delas: **mit** (com), **bei** (na casa de), **zu**, **von** e **seit**. **der** vira **dem**, **die** vira **der**.',
    q: 'Para dizer com quem você faz as coisas, onde mora e desde quando.',
    p: 'Essas palavras aparecem em quase toda frase. Decorar o grupo de uma vez poupa muita dúvida depois.',
  },
  'n-ausbildung': {
    o: 'No passado, alguns verbos têm o **ge-** no meio (**angefangen**) e outros não têm **ge-** nenhum (**bestanden**, **studiert**).',
    q: 'Para contar os seus estudos e a sua formação: o que começou, terminou, estudou e em que passou.',
    p: 'Escola e formação são assunto de entrevista e de apresentação. E esses verbos são dos mais usados para falar disso.',
  },
  23: {
    o: 'Há dois "porque". Com **weil**, o verbo vai para o fim: **…, weil ich krank bin**. Com **denn**, a frase fica na ordem normal.',
    q: 'Sempre que você explica um motivo: por que estuda, por que não vai, por que gosta.',
    p: 'Dar o motivo deixa a conversa natural. E é o primeiro caso em que o verbo vai para o fim da frase.',
  },
  'n-email': {
    o: 'Um e-mail pessoal tem abertura, agradecimento, novidades e despedida. Os motivos vêm com **weil**, que manda o verbo para o fim.',
    q: 'Para escrever a um amigo que mora longe, contando o que mudou na sua vida.',
    p: 'Escrever com calma é ótimo para praticar. E o modelo serve para qualquer e-mail pessoal.',
  },
  // ---------- Módulo 8 · Casa e vizinhança ----------
  21: {
    o: 'Palavras como **auf**, **in** e **an** mudam o artigo de dois jeitos: com movimento (para onde?) usa um; parado (onde?) usa outro. **auf den Tisch** × **auf dem Tisch**.',
    q: 'Ao arrumar a casa: quando você coloca algo num lugar e quando diz onde algo está.',
    p: 'É uma das regras que mais confundem no A2. Pensar em "está se movendo ou está parado?" resolve quase tudo.',
  },
  27: {
    o: 'Antes de uma palavra, o adjetivo ganha um final que mostra o gênero: **ein neuer Tisch**, **eine neue Lampe**, **ein neues Buch**.',
    q: 'Para descrever coisas: uma casa grande, um quarto claro, uma mesa nova.',
    p: 'Descrever é muito comum. E depois de **ein** é o adjetivo que mostra se a palavra é masculina, feminina ou neutra.',
  },
  28: {
    o: 'Depois de **der**, **die**, **das**, o adjetivo quase sempre termina em **-e** ou **-en**: **der neue Film**, **den jungen Mann**.',
    q: 'Para falar de pessoas e coisas que você já conhece: o vizinho novo, a senhora simpática do 1º andar.',
    p: 'Com **der/die/das** a regra é mais simples do que com **ein**: são só dois finais.',
  },
  26: {
    o: 'Alguns verbos vêm com uma palavrinha que volta para a própria pessoa: **ich freue mich**, **er zieht sich an** (ele se veste).',
    q: 'Para contar a rotina pessoal (lavar-se, vestir-se, apressar-se) e dizer como você se sente.',
    p: 'O português também tem "me", "se", "nos". Muitos desses verbos são iguais, e alguns só são assim em alemão.',
  },
  'n-hausordnung': {
    o: 'Regras se dizem com **man** (a gente, se) e um verbo como **müssen** ou **dürfen**: **Man muss den Müll trennen**. **Hier darf man nicht rauchen.**',
    q: 'Para entender o regulamento do prédio e explicar regras: silêncio, lixo, áreas comuns.',
    p: 'Morar num prédio alemão é seguir regras, e a convivência com os vizinhos depende delas.',
  },
  'n-zettel-nachbarn': {
    o: 'O pedido mais educado do alemão é **Könnten Sie bitte …?** (os senhores poderiam…?), com o outro verbo no fim.',
    q: 'Para escrever um aviso aos vizinhos: uma festa, uma reforma, um pedido.',
    p: 'Um bilhete educado evita conflito. E **Könnten Sie …?** serve para qualquer pedido delicado.',
  },
  // ---------- Módulo 9 · Compras e serviços ----------
  22: {
    o: 'Para comparar, acrescente **-er** ao adjetivo e use **als**: **schneller als** (mais rápido que). O máximo é **am …sten**: **am schnellsten**.',
    q: 'Para comparar preços, cidades, pessoas e coisas, e dizer o que você prefere.',
    p: 'Comparar é decidir: o que é mais barato, mais perto, melhor. Você faz isso o tempo todo.',
  },
  31: {
    o: 'Alguns verbos sempre usam o dativo para a pessoa: **Das Kleid gefällt mir** (o vestido me agrada). Também **helfen**, **gehören** e **schmecken**.',
    q: 'Para dizer se algo te agrada, o que vai dar de presente e a quem, e a quem você ajuda.',
    p: 'Esses verbos são muito usados, e a frase funciona ao contrário do português: a coisa é o sujeito.',
  },
  32: {
    o: 'Para não repetir nomes, use pronomes: **ihn** (o), **ihm** (a ele), **es** (isso), **mir** (a mim). Com dois pronomes, a coisa vem antes: **Ich gebe es dir**.',
    q: 'Para pedir algo emprestado, dar e mostrar coisas sem repetir o nome de tudo.',
    p: 'Sem pronomes a fala fica repetitiva e robótica. Com eles, ela soa natural.',
  },
  'n-umtauschen': {
    o: 'Para trocar um produto, diga o motivo: **Das passt mir nicht** (não serve), **Das gefällt mir nicht** (não gosto) ou **zu groß** (grande demais).',
    q: 'Quando uma compra não serviu, você não gostou ou veio com defeito.',
    p: 'Trocar é comum na Alemanha, mas é preciso explicar. E **zu** (demais) é diferente de **sehr** (muito).',
  },
  'n-bankpost': {
    o: 'Nos serviços se pede com **Ich möchte …** e o verbo no fim: **Ich möchte ein Konto eröffnen**. E três perguntas resolvem quase tudo: preço, tempo e documentos.',
    q: 'No banco e no correio: abrir conta, sacar dinheiro, mandar uma carta ou um pacote.',
    p: 'São tarefas obrigatórias para quem mora no país. Com uma fórmula só você pede qualquer serviço.',
  },
  'n-bestellung': {
    o: 'Um e-mail para uma empresa tem fórmulas fixas: **Sehr geehrte Damen und Herren** no começo e **Mit freundlichen Grüßen** no fim. O problema vem com **leider**.',
    q: 'Para reclamar de uma compra on-line: um produto danificado, uma entrega que não chegou.',
    p: 'Saber reclamar por escrito, com educação e clareza, resolve muitos problemas. E as fórmulas servem para todo e-mail formal.',
  },
  // ---------- Módulo 10 · Trabalho ----------
  30: {
    o: 'No passado, os verbos como **können** e **müssen** ficam curtos e perdem o trema: **ich konnte**, **ich musste**, **ich wollte**.',
    q: 'Para contar o que você queria, precisava ou podia fazer antes: na infância, na escola, no trabalho.',
    p: 'Assim como **war** e **hatte**, essas formas curtas são as que os alemães usam na conversa.',
  },
  'n-arbeitstag': {
    o: '**vor** (antes de), **nach** (depois de) e **seit** (desde) mudam o artigo: **nach der Arbeit**. E **seit** + tempo é "há", para o que continua: **seit drei Jahren**.',
    q: 'Para contar o seu dia de trabalho e há quanto tempo você trabalha ou mora num lugar.',
    p: 'Horários e tempo de experiência aparecem em toda conversa sobre trabalho.',
  },
  35: {
    o: 'Para perguntar com mais educação, comece com **Wissen Sie, …?** ou **Können Sie mir sagen, …?** e mande o verbo da pergunta para o fim. Para "se", use **ob**.',
    q: 'Para pedir informações a desconhecidos: na rua, na estação, numa loja.',
    p: 'Uma pergunta direta pode soar seca. Esta forma é a mais educada para falar com quem você não conhece.',
  },
  38: {
    o: 'Para pedir com delicadeza: **Könnten Sie …?** (poderia…?), **Ich hätte gern …** (eu gostaria de…) e **Würdest du …?** São formas mais suaves que o pedido direto.',
    q: 'Em lojas, cafés e serviços, e sempre que você quer pedir algo com cuidado.',
    p: 'Educação conta muito na Alemanha. Com essas fórmulas qualquer pedido soa simpático.',
  },
  'n-telefon': {
    o: 'Ligações de trabalho seguem fórmulas: quem atende diz a empresa e o nome, você pede alguém e, se a pessoa não estiver, deixa um recado. **anrufen** (ligar) se separa: **Ich rufe Sie an**.',
    q: 'Para ligar para uma empresa, pedir para falar com alguém e deixar um recado.',
    p: 'Sem gestos, só a voz, o telefone assusta. Com as fórmulas prontas você sabe o que vai ouvir e o que dizer.',
  },
  'n-stellenanzeige': {
    o: 'Um e-mail de candidatura tem fórmulas fixas: **Sehr geehrte Frau …**, a vaga, a sua experiência e o pedido de entrevista. **sich bewerben** quer dizer candidatar-se.',
    q: 'Para ler um anúncio de emprego e responder mostrando interesse.',
    p: 'Arrumar trabalho é um dos grandes objetivos de quem aprende alemão, e o primeiro passo é esse e-mail.',
  },
  // ---------- Módulo 11 · Saúde ----------
  33: {
    o: '**sollen** passa uma ordem ou um conselho de outra pessoa: **Der Arzt sagt, ich soll schlafen**. Para aconselhar com delicadeza: **Du solltest …** (você deveria).',
    q: 'No médico e em conversas sobre saúde: entender as recomendações e dar conselhos.',
    p: 'Entender o que o médico manda fazer é essencial. E **solltest** é o jeito gentil de aconselhar alguém.',
  },
  'n-termin2': {
    o: 'Para mudar um compromisso há dois verbos: **absagen** (cancelar) e **verschieben** (remarcar). E para propor um horário: **Passt Ihnen Donnerstag?**',
    q: 'Quando você não pode ir a uma consulta e precisa cancelar ou trocar o horário.',
    p: 'Na Alemanha, avisar com antecedência é obrigação, e alguns consultórios cobram a falta.',
  },
  'n-apotheke': {
    o: 'Na farmácia se pede "algo contra": **Ich brauche etwas gegen Husten**. E a dose vem em fórmulas curtas: **dreimal täglich** (três vezes ao dia), **nach dem Essen**.',
    q: 'Para pedir um remédio e entender como tomar, o que o farmacêutico diz e o que está na caixa.',
    p: 'Tomar remédio do jeito errado é perigoso. Entender a dose é das coisas mais úteis do A2.',
  },
  'n-gesund': {
    o: 'Para aconselhar você tem duas formas: a direta, com o verbo primeiro (**Trink mehr Wasser!**), e a delicada, com **solltest**. E para comparar hábitos: **gesünder als**.',
    q: 'Para dar e entender conselhos de saúde: comer, dormir, se mexer.',
    p: 'Saúde é assunto do dia a dia. E escolher entre ordem e conselho muda o tom da conversa.',
  },
  'n-notfall': {
    o: 'Numa emergência: **Hilfe!** (socorro), o número **112** e o que aconteceu, no passado: **Ich bin gefallen** (eu caí).',
    q: 'Num acidente ou numa emergência: pedir ajuda, ligar para o 112 e dizer onde e o que aconteceu.',
    p: 'Tomara que você nunca precise. Mas saber essas frases pode fazer toda a diferença.',
  },
  'n-krankmelden': {
    o: 'Para avisar que está doente: **Ich kann heute leider nicht kommen, weil ich krank bin.** Depois de **weil**, o verbo vai para o fim.',
    q: 'Quando você acorda doente e precisa avisar o trabalho ou o curso. E para ler a bula de um remédio.',
    p: 'Avisar direito protege o seu emprego. E ler a bula ajuda a se cuidar com segurança.',
  },
  // ---------- Módulo 12 · Viagens ----------
  29: {
    o: 'Para falar do futuro, use **werden** + o verbo no fim: **Ich werde morgen fahren**. No dia a dia, o presente com "amanhã" também serve.',
    q: 'Para falar de planos de viagem e reservar um hotel.',
    p: 'Planejar e reservar é parte de toda viagem. E **werden** deixa claro que você fala do futuro.',
  },
  34: {
    o: 'Para o tempo se usa **es**: **Es regnet** (está chovendo), **Es ist kalt**. E as estações vêm com **im**: **im Winter**.',
    q: 'Para falar do tempo de hoje e de como são as estações onde você mora.',
    p: 'O tempo é o assunto preferido para puxar conversa na Alemanha.',
  },
  'n-bahnhof': {
    o: 'Na estação e no aeroporto três palavras resolvem quase tudo: **Verspätung** (atraso), **fällt aus** (foi cancelado) e **umsteigen** (fazer baldeação).',
    q: 'Para entender os painéis e os avisos de alto-falante e não perder o trem.',
    p: 'Atraso de trem é comum na Alemanha. Entender o aviso na hora evita perder a conexão.',
  },
  25: {
    o: '**wenn** quer dizer "se" ou "quando". O verbo da parte com **wenn** vai para o fim: **Wenn es regnet, bleibe ich hier**.',
    q: 'Para falar de planos que dependem de algo: se chover, se você tiver tempo, sempre que acontecer algo.',
    p: 'Combinar planos com condições é do dia a dia. E repare como a outra parte da frase começa pelo verbo.',
  },
  'n-reiseprobleme': {
    o: 'Para resolver um imprevisto: conte o que aconteceu no passado (**Ich habe meinen Pass verloren**) e explique o motivo com **weil**.',
    q: 'Quando algo dá errado numa viagem: mala perdida, cartão roubado, trem perdido, quarto com problema.',
    p: 'Explicar um problema com calma e pedir ajuda é o que resolve a situação.',
  },
  'n-hotelbewertung': {
    o: 'O adjetivo tem duas posições. Depois de **war** fica sem mudança (**Das Zimmer war sauber**); antes da palavra ganha um final (**ein ruhiges Zimmer**).',
    q: 'Para ler avaliações antes de reservar e escrever a sua depois da estadia.',
    p: 'Todo mundo lê avaliações. Escrever a sua é um ótimo treino de descrição.',
  },
  // ---------- Módulo 13 · Festas e relações ----------
  39: {
    o: 'Para datas se usa "primeiro, segundo, terceiro…": **am ersten Juni**, **am dritten Mai**. Quase todos terminam em **-ten**.',
    q: 'Para dizer quando é o seu aniversário, uma festa ou um compromisso.',
    p: 'Datas aparecem em convites, formulários e conversas. E em alemão o dia sempre vem com o ordinal.',
  },
  40: {
    o: 'Alguns verbos vêm sempre com a mesma preposição: **warten auf** (esperar por), **denken an** (pensar em), **sprechen über** (falar sobre).',
    q: 'Para falar dos seus interesses, do que espera, do que pensa e do que sonha.',
    p: 'Muitas vezes a preposição é diferente do português. Decorar o verbo junto com ela evita erro.',
  },
  36: {
    o: 'Para descrever alguém dentro da frase, use **der**, **die** ou **das** como "que": **der Mann, der hier arbeitet** (o homem que trabalha aqui). O verbo vai para o fim.',
    q: 'Para explicar quem é uma pessoa: o que ela faz, de onde vem, onde está.',
    p: 'Com essa estrutura você junta duas frases em uma e descreve pessoas com mais detalhe.',
  },
  37: {
    o: 'Quando o "que" é o objeto (o filme **que eu vi**), só o masculino muda: **der Film, den ich liebe**. Feminino e neutro ficam iguais.',
    q: 'Para falar de coisas: o filme que você viu, a música de que gosta, o livro que está lendo.',
    p: 'É a mesma estrutura da lição anterior, com uma única mudança: **den** no masculino.',
  },
  24: {
    o: '**dass** quer dizer "que" e manda o verbo para o fim: **Ich glaube, dass es stimmt**. Antes de **dass** vai sempre vírgula.',
    q: 'Para dar a sua opinião, dizer o que você sabe ou espera e contar o que alguém disse.',
    p: 'Dar opinião é a base de qualquer conversa mais longa. E **dass** é a palavra de ligação mais usada do alemão.',
  },
  'n-blog': {
    o: 'Um comentário curto junta duas estruturas do módulo: a opinião com **dass** (**Ich finde, dass …**) e um detalhe com uma frase de "que" (**die Torte, die du gebacken hast**).',
    q: 'Para ler um post de blog ou de rede social e deixar um comentário.',
    p: 'Comentar é escrever de verdade, para outra pessoa ler. Um ótimo jeito de praticar.',
  },
  // ---------- Módulo 14 · Opinião e mídia ----------
  41: {
    o: '**deshalb** (por isso), **trotzdem** (mesmo assim) e **sonst** (senão) ocupam o 1º lugar da frase, então o verbo vem logo depois: **…, deshalb bleibe ich zu Hause**.',
    q: 'Para ligar ideias: dizer a consequência, manter um plano mesmo com um obstáculo, avisar o que acontece se não…',
    p: 'Com esses conectores a sua fala e a sua escrita ficam muito mais naturais.',
  },
  'n-medien': {
    o: 'Para falar de hábitos use a frequência (**jeden Tag**, **oft**, **nie**) e para opinar, **dass**: **Ich finde, dass wir zu viel online sind**.',
    q: 'Para falar do seu uso do celular, da internet e das notícias, e do que você acha disso.',
    p: 'Mídia é tema de conversa e de prova. E você junta várias coisas que já aprendeu.',
  },
  'n-meinung': {
    o: 'Para opinar: **Ich bin dafür** (sou a favor), **Ich bin dagegen** (sou contra). Para concordar: **Das stimmt**. Para discordar com educação: **Das sehe ich anders**.',
    q: 'Em discussões do dia a dia: concordar, discordar e dar um argumento.',
    p: 'Discordar com educação é uma habilidade importante, na vida e na prova do A2.',
  },
  'n-nachrichten': {
    o: 'Notícias escritas usam outro passado, o **Präteritum**: **es regnete** (choveu), **er kam** (ele veio). Você não precisa saber formar, só reconhecer.',
    q: 'Para ler notícias curtas e entender o essencial: quem, o quê, quando e onde.',
    p: 'Jornal, site e aviso oficial usam essa forma. Reconhecê-la abre a porta para a leitura.',
  },
  'n-pruefung': {
    o: 'A prova do Goethe A2 tem quatro partes: ler, ouvir, escrever e falar. Na parte oral você planeja algo com outra pessoa: **Wie wäre es um drei?** (que tal às três?)',
    q: 'Quando você estiver se preparando para o certificado A2.',
    p: 'Saber como é a prova tira o medo e mostra que você já treinou cada parte dela nas lições.',
  },
  'n-forum': {
    o: 'Uma opinião bem escrita tem posição, motivo (**weil**, verbo no fim), consequência (**deshalb**) e objeção (**trotzdem**, verbo logo depois).',
    q: 'Para ler opiniões num fórum e escrever a sua sobre um tema da cidade.',
    p: 'É a última lição do A2: junta os conectores que você aprendeu num texto de verdade.',
  },
};
