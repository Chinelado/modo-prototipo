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

// ---------- B1 ----------
Object.assign(VG, {
  42: {
    o: 'Para contar histórias por escrito, o alemão usa outro passado, o **Präteritum**: verbos regulares ganham **-te** (**spielte**) e os irregulares mudam a vogal (**ging**, **kam**, **sah**).',
    q: 'Em livros, notícias, contos e relatos escritos. Na conversa, continua valendo o Perfekt (**habe gespielt**).',
    p: 'Sem ele você não consegue ler um livro ou uma notícia em alemão. É o passado da escrita.',
  },
  43: {
    o: 'Quando uma coisa aconteceu antes de outra, também no passado, usa-se **hatte** ou **war** + particípio: **Ich hatte den Bus verpasst** (eu tinha perdido o ônibus).',
    q: 'Para contar uma história em ordem e deixar claro o que veio antes, muitas vezes com **nachdem** (depois que).',
    p: 'É o nosso "tinha feito". Sem ele, a ordem dos acontecimentos de uma história fica confusa.',
  },
  44: {
    o: 'Há vários "quando": **als** é para uma vez só no passado (**Als ich Kind war**); **wenn**, para o que se repete. **während** = enquanto; **bevor** = antes de. Todos mandam o verbo para o fim.',
    q: 'Para contar momentos da vida: a infância, uma viagem, o que acontecia sempre e o que aconteceu uma vez.',
    p: '**als** e **wenn** são "quando" em português, e trocar um pelo outro é um dos erros mais comuns do B1.',
  },
  45: {
    o: 'Na frase de "que", o pronome muda conforme a função: com preposição, ela vem antes (**der Freund, mit dem ich wohne**); no plural do dativo, **denen**.',
    q: 'Para descrever pessoas e lugares com mais detalhe: o amigo com quem você mora, a cidade em que vive.',
    p: 'É a forma natural de juntar informações numa frase só, em vez de várias frases curtas.',
  },
  46: {
    o: 'O genitivo mostra de quem é algo: **das Auto meines Bruders** (o carro do meu irmão). E palavras como **wegen** (por causa de) e **trotz** (apesar de) pedem essa forma.',
    q: 'Para dizer a causa ou o obstáculo de algo (**wegen des Wetters**) e em textos mais formais.',
    p: 'Você vai encontrar o genitivo em notícias, avisos e cartas. Na fala, muita gente usa **von** + dativo no lugar dele.',
  },
  47: {
    o: 'Para dizer a finalidade: **um … zu** + verbo quando a pessoa é a mesma (**Ich lerne, um die Prüfung zu bestehen**); **damit** quando são pessoas diferentes.',
    q: 'Sempre que você explica para que faz algo: estuda para passar, economiza para viajar.',
    p: 'É o nosso "para" + verbo, que você usa o tempo todo.',
  },
  48: {
    o: 'Na voz passiva o foco é o que é feito, não quem faz: **werden** + particípio no fim. **Das Haus wird gebaut** (a casa está sendo construída).',
    q: 'Para falar de processos, produção e serviços: o que é fabricado, entregue, consertado.',
    p: 'Manuais, notícias e avisos usam muito a passiva. Ela aparece em todo texto técnico.',
  },
  49: {
    o: 'A passiva também tem passado: **wurde** + particípio (**Das Auto wurde 1886 erfunden**). E com verbos como **müssen**: **muss gemacht werden**.',
    q: 'Para falar de história, invenções e do que precisa ser feito.',
    p: 'Datas e invenções são quase sempre contadas na passiva. E "precisa ser feito" é muito comum no trabalho.',
  },
  50: {
    o: 'Para falar do que não é real, só imaginado: **Wenn ich Zeit hätte, würde ich reisen** (se eu tivesse tempo, viajaria). Usa **hätte**, **wäre** e **würde**.',
    q: 'Para sonhos, desejos e hipóteses: o que você faria se ganhasse na loteria, se fosse outra pessoa.',
    p: 'É o nosso "se eu tivesse…, eu faria…". Você usa para imaginar, sonhar e dar conselhos.',
  },
  51: {
    o: 'Para falar do que poderia ter sido e não foi: **hätte** ou **wäre** + particípio. **Ich hätte mehr lernen sollen** (eu deveria ter estudado mais).',
    q: 'Para arrependimentos, críticas e situações que poderiam ter sido diferentes.',
    p: 'É o "eu teria feito…" do português, comum em conversas sobre decisões passadas.',
  },
  52: {
    o: '**werden** + verbo no fim fala do futuro: planos, promessas e previsões. Com **wohl**, vira suposição: **Er wird wohl im Büro sein** (ele deve estar no escritório).',
    q: 'Para falar de planos e resoluções, prever o tempo e supor algo sem ter certeza.',
    p: 'O uso de suposição surpreende: **werden** nem sempre é futuro, às vezes é "deve ser".',
  },
  53: {
    o: 'Para não repetir uma coisa já dita, use **da-** + preposição (**darauf**, **davon**). Para perguntar por ela, **wo-** + preposição (**Worauf wartest du?**).',
    q: 'Com verbos de preposição fixa (**warten auf**, **sich freuen auf**), quando a resposta é uma coisa e não uma pessoa.',
    p: 'Os alemães usam essas palavras o tempo todo. Sem elas, a fala fica cheia de repetições.',
  },
  54: {
    o: '**obwohl** (embora) manda o verbo para o fim: **Obwohl ich müde bin, lerne ich**. E **zwar … aber** admite algo antes do contraste: **Es ist zwar teuer, aber gut**.',
    q: 'Para contrastar ideias: fazer algo apesar de um obstáculo, reconhecer um ponto e mostrar outro.',
    p: 'Contrastar é essencial para argumentar e opinar com nuance.',
  },
  55: {
    o: 'Alguns conectores vêm em dupla: **entweder … oder** (ou … ou), **weder … noch** (nem … nem), **sowohl … als auch** (tanto … quanto). E **je … desto** = quanto mais…, mais….',
    q: 'Para falar de escolhas, somar ou excluir duas coisas e mostrar uma relação que cresce junto.',
    p: 'Eles dão precisão à fala e são muito usados em textos e argumentos.',
  },
  56: {
    o: 'Alguns substantivos masculinos ganham **-n** ou **-en** em quase todos os casos: **der Kollege** → **den Kollegen**, **dem Kollegen**. Só o sujeito fica igual.',
    q: 'Com palavras como **Kollege**, **Junge**, **Kunde**, **Herr**, **Student**, **Mensch** e **Nachbar**.',
    p: 'São palavras muito comuns, de pessoas e profissões. O **-n** a mais é fácil de esquecer.',
  },
  57: {
    o: 'Sem artigo, o adjetivo faz o papel do artigo e mostra o gênero: **guter Wein** (der), **frische Milch** (die), **kaltes Wasser** (das).',
    q: 'Em cardápios, anúncios e frases gerais, quando não há **der**, **die**, **das** nem **ein**.',
    p: 'Aparece muito em comida e em descrições gerais. É a última peça das terminações de adjetivo.',
  },
  58: {
    o: 'Depois de verbos como **versuchen** (tentar) e expressões como **Lust haben**, o outro verbo vai para o fim com **zu**: **Ich versuche, pünktlich zu sein**.',
    q: 'Para falar de tentativas, vontades, coisas que você esqueceu, começou ou parou de fazer.',
    p: 'É uma das estruturas mais usadas do alemão a partir do B1. Ela está em todo texto.',
  },
  59: {
    o: '**lassen** + verbo tem dois sentidos: mandar fazer (**Ich lasse mein Auto reparieren**) e deixar alguém fazer (**Er lässt die Kinder spielen**).',
    q: 'Para falar de serviços que outra pessoa faz para você e do que você permite.',
    p: 'É como se diz "mandei consertar" ou "cortei o cabelo" (no salão) em alemão.',
  },
  60: {
    o: 'Uma candidatura usa fórmulas fixas: **Hiermit bewerbe ich mich um die Stelle als …**, a sua experiência e os seus pontos fortes.',
    q: 'Para escrever uma carta de candidatura e se preparar para a entrevista de emprego.',
    p: 'Uma candidatura bem escrita abre portas. As fórmulas certas mostram que você conhece o costume alemão.',
  },
  61: {
    o: 'Para recomendações gerais: **man sollte** (deveríamos) e **man könnte** (poderíamos). Para o que precisa ser feito: **muss geschützt werden** (precisa ser protegido).',
    q: 'Para falar de meio ambiente e de soluções: o que todos deveriam fazer e o que precisa mudar.',
    p: 'É um tema clássico de conversa e de prova, e essas estruturas servem para qualquer debate.',
  },
  62: {
    o: 'Há várias formas de aconselhar, da mais direta à mais suave: **Du solltest …**, **An deiner Stelle würde ich …** (no seu lugar, eu…), **Wie wäre es, wenn …?**',
    q: 'Para dar conselhos sobre saúde, hábitos e problemas de amigos.',
    p: 'Variar a forma de aconselhar deixa a fala mais natural e mais gentil.',
  },
  63: {
    o: 'Depois de **alles**, **etwas**, **nichts** e **vieles**, o "que" é **was**: **Das ist alles, was ich weiß** (é tudo o que eu sei).',
    q: 'Para falar de informações de forma geral: tudo o que você leu, nada do que viu.',
    p: 'É um caso que o **der/die/das** não cobre, muito comum ao falar de mídia e de informação.',
  },
  64: {
    o: '**seit** = há, e ainda continua (**seit drei Monaten**); **vor** = há, e já acabou (**vor zwei Jahren**); **nach** = depois de. Os três mudam o artigo para o dativo.',
    q: 'Para falar dos seus estudos e da sua formação: há quanto tempo você aprende, quando começou.',
    p: 'O português usa "há" para os dois casos. Em alemão, escolher entre **seit** e **vor** muda o sentido.',
  },
  65: {
    o: 'Para reclamar sem brigar: **Es stört mich, dass …** (me incomoda que…), **Könnten Sie bitte …?** E para se desculpar: **Das tut mir leid**.',
    q: 'Em conflitos de vizinhança: barulho, lixo, áreas comuns.',
    p: 'Reclamar com educação resolve o problema e preserva a convivência.',
  },
  66: {
    o: 'Para dar opinião: **Meiner Meinung nach** + verbo logo depois, ou **Ich bin der Ansicht, dass …** + verbo no fim. Para concordar: **Da stimme ich dir zu**.',
    q: 'Em discussões, debates e na prova oral: dizer o que pensa e reagir à opinião do outro.',
    p: 'Variar as fórmulas mostra domínio da língua, e ter frases prontas dá segurança.',
  },
  67: {
    o: 'Para pesar prós e contras: **Ein Vorteil ist, dass …**, **Dagegen spricht, dass …**, **Einerseits …, andererseits …**',
    q: 'Para discutir uma decisão, comparar opções e escrever um texto argumentativo.',
    p: 'É a base da argumentação no B1, na fala e na escrita.',
  },
  68: {
    o: 'A carta formal de reclamação tem estrutura fixa: abertura (**Sehr geehrte Damen und Herren**), o problema, o pedido (**Ich bitte Sie um …**) e o fecho.',
    q: 'Para reclamar por escrito de um produto, um serviço ou uma cobrança.',
    p: 'Na Alemanha, reclamação por escrito tem peso. E a estrutura serve para qualquer carta formal.',
  },
  69: {
    o: 'O e-mail informal tem abertura (**Liebe Anna**), agradecimento, a resposta (aceitar, recusar ou propor) e despedida (**Liebe Grüße**).',
    q: 'Para responder a convites e combinar coisas com amigos por escrito.',
    p: 'É uma das tarefas da prova escrita do B1 e do dia a dia.',
  },
  70: {
    o: 'Para planejar com alguém: propor (**Lass uns …**, **Ich schlage vor, dass …**), perguntar a opinião (**Was hältst du davon?**) e fechar (**Abgemacht!**).',
    q: 'Para combinar uma festa, uma viagem ou um projeto, e na prova oral do B1.',
    p: 'Planejar junto é conversar de verdade: propor, ouvir e chegar a um acordo.',
  },
  71: {
    o: 'Uma apresentação tem começo, meio e fim: **Ich möchte über … sprechen**, **zuerst … dann … zum Schluss** e **Vielen Dank für Ihre Aufmerksamkeit**.',
    q: 'Para apresentar um tema no trabalho, no curso e na prova oral do B1.',
    p: 'Com a estrutura pronta você se concentra no conteúdo e não se perde.',
  },
  72: {
    o: 'No guichê da estação: **Mein Zug ist ausgefallen** (meu trem foi cancelado), **Erreiche ich noch meinen Anschluss?** (ainda pego a conexão?).',
    q: 'Quando a viagem dá errado: trem cancelado, conexão perdida, bagagem extraviada.',
    p: 'Resolver um imprevisto no guichê, em alemão, com calma, é uma habilidade muito prática.',
  },
  73: {
    o: 'Muitos adjetivos de sentimento vêm com uma preposição fixa: **stolz auf** (orgulhoso de), **zufrieden mit** (satisfeito com), **verliebt in** (apaixonado por).',
    q: 'Para falar de sentimentos e relações: de quem você tem orgulho, com o que está satisfeito.',
    p: 'A preposição quase nunca é a do português. Decorar adjetivo e preposição juntos evita erro.',
  },
  74: {
    o: 'Para resumir e recomendar: **Der Film handelt von …** (o filme é sobre…), **Es geht um …** e **Ich kann das Buch empfehlen**.',
    q: 'Para falar de filmes, livros, peças e exposições que você viu.',
    p: 'Contar uma história e recomendá-la é ótimo para conversar e treinar a fala.',
  },
  75: {
    o: 'Para relatar o que outros dizem: **laut der Zeitung** (segundo o jornal), **Es heißt, dass …** (dizem que…) e **sollen**: **Er soll reich sein** (dizem que ele é rico).',
    q: 'Para contar notícias e boatos sem afirmar que são verdade.',
    p: 'O sentido de **sollen** como "dizem que" surpreende, e aparece muito em notícias.',
  },
  76: {
    o: 'O verbo pode virar adjetivo: com **-d**, a ação em andamento (**das weinende Kind**, a criança que chora); com o particípio, a ação concluída (**das reparierte Auto**).',
    q: 'Para descrever com mais precisão, sobretudo na escrita.',
    p: 'Textos escritos usam muito essa forma. Reconhecê-la facilita a leitura.',
  },
  77: {
    o: 'O Goethe-Zertifikat B1 tem quatro partes, aprovadas separadamente: ler, ouvir, escrever e falar. Cada uma pede 60% dos pontos.',
    q: 'Quando você estiver se preparando para a prova do B1.',
    p: 'Conhecer a prova tira o medo, e as lições do B1 treinam exatamente o que ela pede.',
  },
});

// ---------- B2 ----------
Object.assign(VG, {
  78: {
    o: 'Para contar o que alguém disse sem garantir que é verdade, o alemão tem uma forma própria do verbo, o **Konjunktiv I**: **Er sagt, er sei krank** (ele diz que está doente).',
    q: 'Sobretudo em notícias e textos formais, quando se relata a fala de outra pessoa.',
    p: 'Jornais usam isso o tempo todo. Reconhecer essa forma mostra quem disse o quê.',
  },
  79: {
    o: 'Perguntas e ordens também podem ser relatadas: **Er fragte, ob ich kommen könne**, **Sie sagte, ich solle warten**. Quando o Konjunktiv I parece o presente normal, usa-se **hätten** e **wären**.',
    q: 'Para contar uma conversa: o que perguntaram e o que pediram para você fazer.',
    p: 'Completa o discurso indireto: com ele você relata qualquer tipo de fala.',
  },
  80: {
    o: 'Duas formas de dizer "pode ser feito" sem a passiva: **Das lässt sich reparieren** e **Der Antrag ist bis Freitag einzureichen** (deve ser entregue).',
    q: 'Em textos de burocracia, regras e prazos: formulários, avisos oficiais, contratos.',
    p: 'Cartas de repartições usam muito essas formas. Entendê-las evita perder prazos.',
  },
  81: {
    o: 'Um verbo + **-bar** vira "que pode ser…": **machbar** (possível de fazer), **lesbar** (legível). Com **un-**, vira o contrário: **unbezahlbar**.',
    q: 'Para avaliar se algo é possível, viável, acessível.',
    p: 'É uma forma curta e muito usada. Com ela você entende e cria muitas palavras novas.',
  },
  82: {
    o: '**werden** + particípio mostra a ação acontecendo (**Die Tür wird geschlossen**); **sein** + particípio mostra o resultado (**Die Tür ist geschlossen**).',
    q: 'Para dizer o estado das coisas: fechado, reservado, pago, pronto.',
    p: 'Placas e avisos usam o estado (**geschlossen**, **reserviert**). E a diferença entre processo e resultado fica clara.',
  },
  83: {
    o: 'Verbos viram substantivos: **lernen** → **das Lernen**, **entwickeln** → **die Entwicklung**, **ankommen** → **die Ankunft**.',
    q: 'Em textos formais, notícias e relatórios, que preferem substantivos a frases com verbo.',
    p: 'É a chave para entender textos densos e para escrever num estilo mais formal.',
  },
  84: {
    o: 'Em linguagem formal, muitos verbos viram combinações fixas: **eine Entscheidung treffen** (decidir), **eine Frage stellen** (perguntar), **zur Verfügung stehen** (estar à disposição).',
    q: 'No trabalho, em e-mails formais e reuniões.',
    p: 'Elas soam profissionais e aparecem em todo texto formal. Precisam ser decoradas como blocos.',
  },
  85: {
    o: 'Em textos densos, uma informação inteira vem antes do substantivo: **die gestern gelieferte Ware** = a mercadoria que foi entregue ontem.',
    q: 'Na leitura de jornais, contratos e textos técnicos.',
    p: 'Essa estrutura assusta no começo. Sabendo desmontá-la, o texto fica claro.',
  },
  86: {
    o: '**indem** explica como se faz algo (**Man lernt, indem man übt**: aprende-se praticando). **ohne … zu** = sem; **statt … zu** = em vez de.',
    q: 'Para explicar métodos, dar instruções e falar de alternativas.',
    p: 'É o nosso "fazendo", "sem fazer" e "em vez de fazer", muito usados para explicar.',
  },
  87: {
    o: 'Para condições: **falls** (caso), **sofern** (desde que), **es sei denn** (a não ser que). E sem conector, com o verbo primeiro: **Sollte es regnen, bleiben wir hier**.',
    q: 'Para fazer planos com condições e exceções, na fala e na escrita formal.',
    p: 'Variar o "se" deixa o texto mais preciso. A forma sem conector é muito comum em e-mails formais.',
  },
  88: {
    o: 'Para contrastar dois fatos: **während** e **wohingegen** (enquanto, com verbo no fim), **dagegen** e **hingegen** (por outro lado) e **im Gegensatz zu** (ao contrário de).',
    q: 'Para comparar pessoas, lugares, opiniões e dados.',
    p: 'Contrastar com precisão é essencial em textos argumentativos e na prova do B2.',
  },
  89: {
    o: 'Para mostrar consequências: **so … dass** (tão… que), **sodass** (de modo que) e **folglich** (consequentemente).',
    q: 'Para explicar o resultado de algo: estava tão frio que…, por isso…',
    p: 'Causa e consequência são a base de qualquer argumento.',
  },
  90: {
    o: 'Os modais também medem a certeza: **muss** (quase certo), **dürfte** (provável), **könnte** (possível). **Das dürfte stimmen** = isso deve estar certo.',
    q: 'Para fazer suposições sem afirmar com certeza.',
    p: 'Os alemães usam isso o tempo todo para suavizar o que dizem. É sinal de fala madura.',
  },
  91: {
    o: '**sollen** pode significar "dizem que" (**Er soll reich sein**) e **wollen**, "afirma que, mas duvido" (**Er will nichts gesehen haben**).',
    q: 'Para relatar boatos e alegações sem se comprometer.',
    p: 'Esse uso aparece muito em notícias. Sem ele, você entende o contrário do que foi dito.',
  },
  92: {
    o: '**als ob** + Konjunktiv II = como se: **Er tut so, als ob er krank wäre** (ele finge que está doente). Na forma curta, o verbo vem logo depois de **als**.',
    q: 'Para falar de aparências: algo parece, mas não é.',
    p: 'É uma expressão muito comum na fala e em descrições.',
  },
  93: {
    o: 'O **Futur II** (**werden** + particípio + **haben** ou **sein**) faz suposições sobre o passado (**Er wird den Zug verpasst haben**: ele deve ter perdido o trem) ou fala de prazos.',
    q: 'Para supor o que aconteceu e dizer o que estará pronto até certo momento.',
    p: 'O uso de suposição é o mais comum, e ele parece futuro sem ser.',
  },
  94: {
    o: 'Em relatórios, várias preposições formais pedem genitivo: **angesichts** (diante de), **infolge** (em consequência de), **anlässlich** (por ocasião de), **dank** (graças a).',
    q: 'Em textos formais, relatórios, notícias e e-mails de trabalho.',
    p: 'Elas dão um tom profissional ao texto e são muito comuns na leitura.',
  },
  95: {
    o: 'O estilo formal troca frases inteiras por preposição + substantivo: **weil es regnet** → **wegen des Regens**; quando chove → **bei Regen**.',
    q: 'Para escrever de forma concisa: relatórios, resumos, e-mails formais.',
    p: 'Textos formais alemães usam muito esse estilo. Saber converter ajuda a ler e a escrever.',
  },
  96: {
    o: 'Numa discussão você pode concordar só em parte (**Ich stimme Ihnen nur teilweise zu**) e contra-argumentar com educação (**Dem möchte ich widersprechen**).',
    q: 'Em debates sobre trabalho e sociedade, e na prova oral do B2.',
    p: 'Discordar com elegância é uma das marcas do nível B2.',
  },
  97: {
    o: 'Para descrever gráficos: **Die Grafik zeigt …**, **um 5 Prozent steigen** (subir 5 pontos) × **auf 20 Prozent steigen** (chegar a 20%).',
    q: 'Para apresentar dados e estatísticas, no trabalho e na prova.',
    p: 'A diferença entre **um** e **auf** muda o número. É erro comum até em nível alto.',
  },
  98: {
    o: 'Para se posicionar sobre um tema: **Ich vertrete die Auffassung, dass …**, **Aus meiner Sicht …**, **Abschließend lässt sich sagen, dass …**',
    q: 'Para falar e escrever sobre temas sociais, como migração e integração.',
    p: 'São fórmulas de texto argumentativo, úteis na prova e em qualquer debate sério.',
  },
  99: {
    o: 'Uma postagem de fórum tem estrutura: o tema, a sua opinião (**Ich bin fest davon überzeugt, dass …**), argumentos com exemplos e a conclusão.',
    q: 'Para a prova escrita do B2 e para opinar por escrito.',
    p: 'É uma das duas tarefas da prova escrita, e a estrutura garante pontos.',
  },
  100: {
    o: 'Com superiores, o registro é formal: **Sehr geehrte Frau …**, **Ich wende mich an Sie, weil …**, **Wäre es möglich, …?**',
    q: 'Para escrever à chefia: pedir férias, remarcar algo, explicar um problema.',
    p: 'O tom certo faz diferença no trabalho. E é a outra tarefa da prova escrita do B2.',
  },
  101: {
    o: 'Uma apresentação tem roteiro fixo, e no debate há fórmulas para reagir: **Könnten Sie das genauer erläutern?**, **Darf ich kurz einhaken?**',
    q: 'Para apresentar um tema e debater depois, no trabalho e na prova oral.',
    p: 'Saber reagir a perguntas é o que separa uma apresentação boa de uma decorada.',
  },
  102: {
    o: '**wer** generaliza pessoas: **Wer viel übt, lernt schnell** (quem pratica muito…). E **was** retoma uma frase inteira: **…, was mich ärgerte** (o que me irritou).',
    q: 'Para fazer afirmações gerais e comentar o que aconteceu.',
    p: 'São estruturas muito comuns em ditados, opiniões e comentários.',
  },
  103: {
    o: '**dessen** e **deren** = cujo, cuja: **der Mann, dessen Auto kaputt ist** (o homem cujo carro…). Concordam com o dono, não com a coisa.',
    q: 'Para falar de posse e origem dentro da frase.',
    p: 'O português quase não usa "cujo" na fala, mas o alemão usa bastante, sobretudo na escrita.',
  },
  104: {
    o: 'Conectores de tempo mais precisos: **sobald** (assim que), **solange** (enquanto), **seitdem** (desde que), **bis** (até que). Todos mandam o verbo para o fim.',
    q: 'Para ordenar ações no tempo: o que acontece assim que, enquanto ou até que algo aconteça.',
    p: 'Com eles você conta e planeja com precisão, sem depender só de **dann**.',
  },
  105: {
    o: 'Palavrinhas como **doch**, **ja**, **mal** e **denn** dão tom à frase, sem mudar o sentido: **Komm doch mit!** soa mais amigável que **Komm mit!**',
    q: 'Na fala do dia a dia, para soar natural e simpático.',
    p: 'Elas são o que mais separa o alemão de livro do alemão falado.',
  },
  106: {
    o: 'O meio da frase tem uma ordem natural: tempo → causa → modo → lugar. **Ich fahre morgen mit dem Zug nach Berlin.**',
    q: 'Em frases longas, com várias informações juntas.',
    p: 'A ordem certa faz a frase soar natural. A errada não é proibida, mas soa estrangeira.',
  },
  107: {
    o: 'Prefixos como **über-** e **um-** às vezes se separam, às vezes não, e o sentido muda: **übersetzen** é traduzir ou levar para a outra margem. O acento mostra qual é.',
    q: 'Com verbos de prefixo de duplo sentido: **über-**, **um-**, **unter-**, **durch-**.',
    p: 'É uma armadilha clássica. Entender o padrão evita mal-entendidos.',
  },
  108: {
    o: '**es** às vezes é só um sujeito formal: **Es freut mich, dass du kommst**. Se outra palavra abrir a frase, ele some: **Mich freut, dass du kommst**.',
    q: 'Em expressões como **es geht um**, **es gibt** e **es kommt darauf an**.',
    p: 'Essas expressões estão em toda conversa. Saber quando o **es** some deixa a fala natural.',
  },
  109: {
    o: 'Para dizer o que deveria ou poderia ter sido feito: **Das hätte vermieden werden können** (isso poderia ter sido evitado).',
    q: 'Para avaliar erros e responsabilidades, no trabalho e em discussões.',
    p: 'É uma estrutura longa, mas muito usada em críticas e relatórios.',
  },
  110: {
    o: 'Sufixos formam palavras: **-heit**, **-keit** e **-ung** criam substantivos (sempre femininos); **-los** (sem) e **-voll** (cheio de) criam adjetivos.',
    q: 'Para entender e formar palavras novas a partir das que você já conhece.',
    p: 'Multiplica o seu vocabulário. E o gênero dessas palavras você acerta sem decorar.',
  },
  111: {
    o: 'Como os verbos, muitos substantivos e adjetivos têm preposição fixa: **Interesse an**, **Angst vor**, **verantwortlich für**.',
    q: 'Para falar de interesses, medos, responsabilidades e dependências.',
    p: 'A preposição raramente é a do português, por isso precisa ser decorada junto.',
  },
  112: {
    o: 'Para desejos impossíveis: **Wenn ich doch nur mehr Zeit hätte!** ou, sem **wenn**, com o verbo primeiro: **Hätte ich bloß mehr Zeit!**',
    q: 'Para expressar desejos e lamentos fortes.',
    p: 'É uma forma muito expressiva, comum na fala emocional.',
  },
  113: {
    o: '**man** muda nos outros casos: **einen**, **einem**. E depois de **etwas** e **nichts** o adjetivo vira substantivo: **etwas Neues**, **nichts Besonderes**.',
    q: 'Para falar de forma geral e indefinida: alguém, ninguém, algo novo.',
    p: '**etwas Neues** e **nichts Besonderes** estão em toda conversa.',
  },
  114: {
    o: 'Para falar de sintomas e aconselhar com formalidade: **Ich leide unter …**, **Es wäre ratsam, … zu …**, **Ich würde Ihnen empfehlen, …**',
    q: 'Em conversas sobre estresse e saúde mental, com médicos e no trabalho.',
    p: 'Falar de saúde mental com precisão ajuda a pedir e a oferecer ajuda.',
  },
  115: {
    o: 'Para analisar propaganda: **Die Werbung spricht … an** (se dirige a), **Das weckt den Wunsch nach …** (desperta o desejo de).',
    q: 'Para falar de consumo, propaganda e influência.',
    p: 'É um tema clássico de prova e de debate, com vocabulário próprio.',
  },
  116: {
    o: 'Para exigir medidas: **Es müsste mehr getan werden**, **Es wäre sinnvoll, … zu …**, **Die Politik ist gefordert**.',
    q: 'Em debates sobre clima e política.',
    p: 'São fórmulas de exigência educada, úteis em qualquer debate público.',
  },
  117: {
    o: 'Para comparar com nuance: **Im Vergleich zu …**, **Was … betrifft, …** (quanto a…), **Der Unterschied besteht darin, dass …**',
    q: 'Para comparar estilos de vida, como cidade e campo, com argumentos.',
    p: 'Comparar com nuance é exatamente o que a prova do B2 pede.',
  },
  118: {
    o: 'Para relatar experiências com reflexão: **Ich habe die Erfahrung gemacht, dass …**, **Rückblickend …** (olhando para trás), **Im Laufe der Zeit …**',
    q: 'Para falar da sua trajetória de aprendizado e de decisões passadas.',
    p: 'Contar uma experiência com reflexão dá profundidade à conversa.',
  },
  119: {
    o: 'Para avaliar fontes: **Die Quelle gilt als seriös**, **Es ist fraglich, ob …**, **Die Meldung wurde nicht bestätigt**.',
    q: 'Para falar de notícias falsas e checar informações.',
    p: 'Saber questionar uma fonte é essencial hoje, em qualquer língua.',
  },
  120: {
    o: 'Na leitura da prova, a pergunta raramente repete as palavras do texto: procure sinônimos (**zunehmen** = **steigen**) e preste atenção em **nur**, **kaum** e **nicht**.',
    q: 'Na prova de leitura e em qualquer texto difícil.',
    p: 'Estratégia vale tanto quanto vocabulário. Muitos erros vêm de ler rápido demais.',
  },
  121: {
    o: 'Na fala real, sons somem: **hab’s** (habe es), **nich** (nicht). E há palavras de preenchimento: **also**, **na ja**, **sozusagen**.',
    q: 'Para entender conversas reais, séries, podcasts e colegas.',
    p: 'O alemão falado é mais rápido que o do livro. Conhecer esses atalhos libera a atenção para o conteúdo.',
  },
  122: {
    o: 'Expressões idiomáticas não se traduzem palavra por palavra: **die Daumen drücken** é torcer por alguém, **nur Bahnhof verstehen** é não entender nada.',
    q: 'Na conversa informal, em séries e entre amigos.',
    p: 'São o tempero da língua. Entender e usar algumas deixa a fala viva.',
  },
  123: {
    o: 'Para negociar: **Ich könnte Ihnen entgegenkommen, wenn …** (posso ceder se…), **Könnten wir uns auf … einigen?**, **Damit wäre ich einverstanden**.',
    q: 'Em negociações de trabalho, compras grandes e acordos.',
    p: 'Negociar bem em alemão é uma habilidade profissional valiosa.',
  },
  124: {
    o: 'Para reclamar por telefone com firmeza: **Ich rufe wegen … an**, **Die Ware entspricht nicht der Beschreibung**, **Ich erwarte, dass …**',
    q: 'Quando um produto ou serviço não corresponde ao combinado.',
    p: 'Ao telefone não há tempo para pensar. As fórmulas prontas dão segurança.',
  },
  125: {
    o: 'O Goethe-Zertifikat B2 tem quatro módulos, que podem ser feitos separadamente: ler, ouvir, escrever (fórum e mensagem formal) e falar (apresentação e discussão).',
    q: 'Quando você estiver se preparando para o certificado B2.',
    p: 'Conhecer o formato e o tempo de cada parte é metade da preparação.',
  },
  126: {
    o: 'Mais combinações fixas do registro formal: **zur Sprache bringen** (levantar um assunto), **in Betracht ziehen** (considerar), **in Kraft treten** (entrar em vigor).',
    q: 'Em reuniões, relatórios e notícias.',
    p: 'Elas aparecem em todo texto oficial. Reconhecê-las é essencial para ler leis e comunicados.',
  },
  127: {
    o: 'Um particípio pode substituir uma frase inteira: **In Berlin angekommen, rief sie an** (ao chegar a Berlim, ela ligou). E vira fórmula de comentário: **ehrlich gesagt**, **genau genommen**.',
    q: 'Na escrita elaborada e para comentar o que você mesmo diz.',
    p: '**ehrlich gesagt** e **kurz gesagt** estão em toda conversa.',
  },
  128: {
    o: 'Um texto bem escrito retoma o que já disse sem repetir: **dies**, **dabei**, **wie bereits erwähnt** (como já mencionado), **im Folgenden** (a seguir).',
    q: 'Para escrever textos longos e coesos: relatórios, redações, e-mails.',
    p: 'Coesão é um dos critérios da prova escrita. Essas palavras costuram o texto.',
  },
  129: {
    o: 'Para dosar a intensidade: **ziemlich** (bastante), **sehr**, **äußerst** (extremamente). E para negar com força: **keineswegs** (de modo algum).',
    q: 'Para avaliar com precisão, sem exagerar nem diminuir.',
    p: 'Escolher a intensidade certa mostra domínio e evita mal-entendidos.',
  },
  130: {
    o: 'Comparações avançadas: **doppelt so groß wie** (o dobro do tamanho), **genauso gut wie**, **zu müde, um weiterzuarbeiten** (cansado demais para continuar).',
    q: 'Para comparar proporções e dizer que algo é demais para outra coisa.',
    p: 'São muito usadas com dados e em argumentos.',
  },
  131: {
    o: 'O registro formal troca os modais por expressões: **in der Lage sein** (ser capaz), **verpflichtet sein** (ser obrigado), **es ist erforderlich** (é necessário).',
    q: 'Em cartas oficiais, contratos e regulamentos.',
    p: 'Documentos oficiais quase não usam **müssen** e **können**. Essas expressões dizem o mesmo, de forma formal.',
  },
  132: {
    o: 'No banco: **ein Konto eröffnen** (abrir conta), **überweisen** (transferir), **die Gebühren** (as tarifas). E para perguntar: **Wie hoch sind die Gebühren?**',
    q: 'Para resolver assuntos bancários: abrir ou encerrar conta, entender tarifas, transferir.',
    p: 'Dinheiro é assunto sério, e entender as condições evita surpresas.',
  },
  133: {
    o: 'Contratos têm vocabulário próprio: **kündigen** (rescindir), **die Kündigungsfrist** (o prazo para rescindir), **das Widerrufsrecht** (o direito de desistir).',
    q: 'Para entender e rescindir contratos: celular, internet, academia, aluguel.',
    p: 'Na Alemanha, contrato se rescinde por escrito e no prazo. Entender isso economiza dinheiro.',
  },
  134: {
    o: 'Para relatar pesquisas: **Eine Studie hat gezeigt, dass …**, **Die Ergebnisse deuten darauf hin, dass …** (os resultados indicam que), **Es ist noch unklar, ob …**',
    q: 'Para falar de ciência e citar estudos em argumentos.',
    p: 'Citar uma pesquisa dá força ao argumento, e essas fórmulas mostram o grau de certeza.',
  },
  135: {
    o: 'Uma resenha tem estrutura: dados da obra, resumo (**Im Mittelpunkt steht …**), avaliação (**Besonders gelungen ist …**) e recomendação.',
    q: 'Para escrever sobre livros, filmes e peças.',
    p: 'É um ótimo exercício de escrita e uma forma de compartilhar o que você leu ou viu.',
  },
  136: {
    o: 'Para falar de costumes: **Bei uns ist es üblich, … zu …** (é comum…), **In Deutschland gilt es als unhöflich, …** (é considerado falta de educação).',
    q: 'Para comparar culturas e explicar diferenças sem julgar.',
    p: 'Entender e explicar diferenças culturais é parte de viver em outro país.',
  },
  137: {
    o: 'Para falar de engajamento: **Ich engagiere mich für …**, **ehrenamtlich tätig sein** (ser voluntário), **einen Beitrag leisten** (contribuir).',
    q: 'Para falar de voluntariado e de participação na comunidade.',
    p: 'Voluntariado é muito valorizado na Alemanha, inclusive no currículo.',
  },
  138: {
    o: 'Reuniões seguem fórmulas: **Auf der Tagesordnung stehen drei Punkte**, **Kommen wir zum nächsten Punkt**, **Fassen wir kurz zusammen**.',
    q: 'Para conduzir ou participar de reuniões de trabalho.',
    p: 'Com as fórmulas certas você conduz a reunião com segurança.',
  },
  139: {
    o: 'O telefone de trabalho tem fórmulas fixas: **Was kann ich für Sie tun?**, **Er ist gerade nicht am Platz** (ele não está na mesa), **Ich richte es ihm aus**.',
    q: 'Para atender e fazer ligações no trabalho.',
    p: 'Atender bem o telefone é a primeira impressão de uma empresa.',
  },
  140: {
    o: 'Feedback em três passos: o que você observou (**Mir ist aufgefallen, dass …**), o efeito e o que deseja (**Ich würde mir wünschen, dass …**).',
    q: 'Para dar e receber críticas no trabalho sem criar conflito.',
    p: 'Os alemães são diretos, mas o feedback bem feito tem estrutura, e ela protege a relação.',
  },
  141: {
    o: 'Para relatar o andamento de um projeto: **Wir liegen im Zeitplan** (estamos no prazo), **Als Nächstes steht … an**, **Wir rechnen mit …**',
    q: 'Em reuniões e relatórios de projeto.',
    p: 'Relatar status com clareza é rotina em qualquer trabalho de equipe.',
  },
  142: {
    o: 'A entrevista de emprego tem perguntas clássicas: **Erzählen Sie etwas über sich**, **Was reizt Sie an der Stelle?** (o que atrai você na vaga?) e a pretensão salarial.',
    q: 'Para se preparar para entrevistas de emprego.',
    p: 'Ter respostas prontas para as perguntas clássicas diminui muito o nervosismo do dia.',
  },
  143: {
    o: 'E-mails comerciais têm fórmulas para consulta (**Ich bitte um ein Angebot**), proposta e cobrança, e um fecho educado.',
    q: 'Para escrever a fornecedores e clientes: pedir orçamento, enviar proposta, cobrar.',
    p: 'O tom certo em e-mails comerciais é essencial no trabalho.',
  },
  144: {
    o: 'Em palestras, palavras-sinal anunciam a estrutura: **zunächst**, **ein weiterer Punkt**, **daraus folgt**, **zusammenfassend**.',
    q: 'Para entender palestras e aulas e anotar o essencial.',
    p: 'Seguindo as palavras-sinal, você não se perde mesmo sem entender tudo.',
  },
  145: {
    o: 'Para reconhecer posições num texto: a favor (**befürworten**, **begrüßen**), contra (**ablehnen**, **kritisieren**) e dividido (**skeptisch**).',
    q: 'Na leitura de opiniões, artigos e comentários.',
    p: 'A prova pergunta muito "quem é a favor de quê". Esses verbos dão a resposta.',
  },
  146: {
    o: 'Antes de entregar um texto, revise cinco pontos: posição do verbo, concordância, casos depois de preposição, terminações de adjetivo e maiúsculas.',
    q: 'Sempre que você escrever em alemão, sobretudo na prova.',
    p: 'A maioria dos erros vem da pressa. Uma revisão rápida salva muitos pontos.',
  },
  147: {
    o: 'A apresentação da prova oral tem roteiro: tema, estrutura (**Ich gliedere meinen Vortrag in drei Teile**), alternativas, prós e contras, opinião e fecho.',
    q: 'Para a primeira parte da prova oral do B2.',
    p: 'Com o roteiro decorado, você fala com segurança e cumpre todos os pontos.',
  },
  148: {
    o: 'Na discussão: retome o que o outro disse, concorde em parte (**In diesem Punkt gebe ich Ihnen recht, allerdings …**) e contra-argumente.',
    q: 'Para a segunda parte da prova oral do B2 e para qualquer debate.',
    p: 'O que conta na prova é reagir ao outro, não apenas repetir o que você preparou.',
  },
  149: {
    o: 'Quem fala português repete alguns erros: falsos amigos (**bekommen** é receber, não tornar-se), verbo fora do lugar e traduções literais ("Ich habe 30 Jahre" ✗).',
    q: 'Para revisar os seus textos e a sua fala, sobretudo os erros que você nem percebe.',
    p: 'Conhecer os erros típicos do brasileiro é o atalho mais rápido para soar natural.',
  },
});

// ---------- C1 ----------
Object.assign(VG, {
  150: {
    o: 'Textos acadêmicos e oficiais condensam frases inteiras em grupos de substantivos: **Nachdem er das Studium abgeschlossen hatte** vira **Nach Abschluss des Studiums**.',
    q: 'Para ler textos acadêmicos e administrativos e escrever no mesmo estilo, ou desfazer o estilo para explicar com clareza.',
    p: 'No C1 você precisa transitar entre os dois estilos. É a base da leitura de textos difíceis.',
  },
  151: {
    o: '**zu** + particípio presente antes do substantivo indica algo que deve ou pode ser feito: **die zu lösende Aufgabe** = a tarefa a ser resolvida.',
    q: 'Em ofícios, normas, contratos e textos técnicos.',
    p: 'É uma estrutura típica do alemão oficial. Reconhecê-la evita ler o contrário.',
  },
  152: {
    o: 'O discurso indireto formal tem três tempos: presente (**er sei**), passado (**er habe gesagt**, **er sei gekommen**) e futuro (**er werde kommen**).',
    q: 'Para ler notícias com precisão e relatar falas no tempo certo.',
    p: 'Notícias políticas são escritas assim. Sem isso você não sabe quando algo foi dito ou feito.',
  },
  153: {
    o: 'Para tirar conclusões sobre o passado: modal + particípio + **haben** ou **sein**. **Er muss es gewusst haben** = tenho quase certeza de que ele sabia.',
    q: 'Para deduzir o que aconteceu a partir de indícios.',
    p: 'É como se raciocina em voz alta em alemão: com que grau de certeza algo aconteceu.',
  },
  154: {
    o: 'Mais partículas que dão tom: **ruhig** (encoraja: **Komm ruhig rein!**), **etwa** (suspeita), **eh** (de qualquer jeito), **nun mal** (é assim e pronto).',
    q: 'Na fala natural, para mostrar atitude: encorajar, desconfiar, conformar-se.',
    p: 'São elas que dão naturalidade à fala de nível avançado.',
  },
  155: {
    o: 'Conectores do registro culto: **zumal** (ainda mais porque), **wenngleich** (embora), **geschweige denn** (muito menos), **nichtsdestotrotz** (ainda assim).',
    q: 'Para argumentar com precisão em textos e falas elaboradas.',
    p: 'Eles mostram nível C1 e permitem nuances que os conectores básicos não dão.',
  },
  156: {
    o: 'A mesma ideia tem palavras para cada situação: **kriegen** (coloquial), **bekommen** (neutro), **erhalten** (formal).',
    q: 'Sempre: com amigos, no dia a dia e em textos oficiais.',
    p: 'No C1 o registro certo é tão importante quanto o sentido. Uma palavra informal num e-mail formal chama atenção.',
  },
  157: {
    o: 'A **Erörterung** é o texto argumentativo clássico: introdução com a pergunta central, argumentos a favor e contra e uma conclusão com posição própria.',
    q: 'Para a prova escrita do C1 e para qualquer texto que discuta um tema.',
    p: 'É o gênero de redação mais cobrado em alemão acadêmico.',
  },
  158: {
    o: 'Para resumir o texto de outra pessoa: **Der Text befasst sich mit …**, **Der Autor vertritt die These, dass …**, com o Konjunktiv I para marcar que as ideias são dele.',
    q: 'Para resumir artigos, relatórios e textos acadêmicos.',
    p: 'Resumir com precisão, sem misturar a sua opinião, é habilidade central do C1.',
  },
  159: {
    o: 'Em textos científicos se afirma com cautela: **Die Daten legen nahe, dass …** (os dados sugerem), **unter Umständen** (eventualmente), **Es ist nicht auszuschließen, dass …**',
    q: 'Para escrever e falar sobre pesquisas e dados sem exagerar a certeza.',
    p: 'Afirmar com prudência é a marca do texto acadêmico, e evita críticas.',
  },
  160: {
    o: 'Expressões do alemão culto: **etwas auf die lange Bank schieben** (adiar indefinidamente), **auf der Hand liegen** (ser óbvio), **aus dem Stegreif** (de improviso).',
    q: 'Na leitura de jornais e em conversas entre adultos.',
    p: 'Entender essas expressões evita perder o sentido de um texto inteiro.',
  },
  161: {
    o: 'Prefixos mudam o sentido de forma previsível: **ver-** (erro ou mudança: **sich verschreiben**), **zer-** (em pedaços), **ent-** (retirar), **be-** (dá um objeto ao verbo).',
    q: 'Para deduzir o sentido de palavras novas sem dicionário.',
    p: 'É uma ferramenta poderosa de leitura: um verbo que você conhece vira vários.',
  },
  162: {
    o: 'Recursos retóricos para debater: pergunta retórica (**Wollen wir das wirklich?**), concessão com virada (**Gewiss …, doch …**) e apelo (**Ich appelliere an …**).',
    q: 'Em debates, discursos e apresentações em que você quer convencer.',
    p: 'Convencer exige mais que argumentos certos: exige forma.',
  },
  163: {
    o: 'Para conduzir o público numa apresentação longa: **Wie Sie der Grafik entnehmen können …**, **Lassen Sie mich das an einem Beispiel verdeutlichen**, **Gibt es bis hierhin Fragen?**',
    q: 'Em apresentações acadêmicas e profissionais.',
    p: 'Com essas fórmulas o público acompanha você, mesmo num tema difícil.',
  },
  164: {
    o: 'Para discordar com diplomacia: **Ich würde zu bedenken geben, dass …**, **Es wäre zu überlegen, ob …**, **Das sehe ich, mit Verlaub, etwas anders**.',
    q: 'Com chefes, clientes e em reuniões delicadas.',
    p: 'Criticar sem ofender é uma habilidade social decisiva no trabalho.',
  },
  165: {
    o: 'Para causa e efeito em textos: **… ist auf … zurückzuführen** (deve-se a), **… geht mit … einher** (vem acompanhado de), **… trägt zu … bei** (contribui para).',
    q: 'Em textos sobre economia, sociedade e política.',
    p: 'Essas expressões estão em todo texto analítico e deixam a sua escrita precisa.',
  },
  166: {
    o: 'Para discutir dilemas: **Es stellt sich die Frage, ob …**, **Aus ethischer Sicht …**, **Die Verantwortung liegt bei …**, **Das ist nur vertretbar, wenn …**',
    q: 'Em debates sobre ética, tecnologia e responsabilidade.',
    p: 'Temas abstratos pedem vocabulário próprio, e é isso que o C1 avalia.',
  },
  167: {
    o: 'O Goethe-Zertifikat C1 tem quatro módulos independentes, com textos longos e abstratos. Espera-se vocabulário variado, registro adequado e argumentação estruturada.',
    q: 'Quando você estiver se preparando para o certificado C1.',
    p: 'Saber o que a banca espera orienta toda a sua preparação.',
  },
  168: {
    o: 'Concessões elegantes: **so schwer es auch ist** (por mais difícil que seja), **wie … auch immer** (como quer que…), **selbst wenn** (mesmo que).',
    q: 'Em textos e falas elaborados, para admitir um obstáculo e manter a posição.',
    p: 'São formas mais expressivas que **obwohl**, típicas do registro culto.',
  },
  169: {
    o: '**je nachdem, ob/wie …** = dependendo de…; **ohne dass** e **anstatt dass** funcionam como **ohne … zu** e **statt … zu**, mas com sujeitos diferentes.',
    q: 'Para falar de condições e alternativas com precisão.',
    p: 'Completam o repertório de conectores e evitam frases ambíguas.',
  },
  170: {
    o: 'Há outras passivas além de **werden**: com **bekommen** (quem recebe algo: **Ich bekomme das Paket geliefert**) e, na fala, **Das gehört verboten!**',
    q: 'Na fala e na escrita, quando o foco é quem recebe a ação.',
    p: 'São muito usadas no dia a dia e soam naturais.',
  },
  171: {
    o: 'Três gêneros de imprensa: o **Bericht** informa sem opinião, o **Kommentar** defende uma posição e a **Reportage** narra com cenas e pessoas.',
    q: 'Na leitura de jornais e quando você precisa escrever num desses gêneros.',
    p: 'Reconhecer o gênero mostra se o texto quer informar ou convencer você.',
  },
  172: {
    o: 'Para citar fontes sem copiar: **laut**, **X zufolge** (segundo X, depois do nome), **gemäß**, **wie X betont**. A citação literal vai entre aspas „…“.',
    q: 'Em textos acadêmicos e profissionais que usam outras fontes.',
    p: 'Citar corretamente é exigência acadêmica e dá credibilidade.',
  },
  173: {
    o: 'Um texto formal de opinião (carta de leitor, posicionamento) tem estrutura: referência ao texto, posição, argumentos com exemplos, proposta e fecho formal.',
    q: 'Para escrever a um jornal, a uma instituição ou num fórum oficial.',
    p: 'É uma das tarefas típicas da prova escrita do C1.',
  },
  174: {
    o: 'Colocações são palavras que sempre andam juntas: **Wert legen auf** (dar valor a), **eine Rolle spielen** (ter importância), **in Anspruch nehmen** (recorrer a).',
    q: 'Sempre: na fala e na escrita.',
    p: 'Traduzir palavra por palavra quase sempre dá errado. As colocações certas fazem você soar nativo.',
  },
  175: {
    o: 'Sufixos e compostos formam adjetivos precisos: **zeitgemäß** (atual), **fehlerhaft** (com defeito), **kinderleicht** (facílimo), **eiskalt** (gelado).',
    q: 'Para descrever com precisão e expressividade.',
    p: 'Enriquecem o seu vocabulário e permitem entender muitas palavras novas.',
  },
  176: {
    o: 'O alemão junta palavras numa só, e a última parte decide o gênero: **die Haustür** (a porta da casa). Entre as partes pode entrar um **-s-**: **Arbeitsplatz**.',
    q: 'Sempre: compostos estão em todo texto alemão.',
    p: 'Desmontar compostos é a chave para entender palavras longas que você nunca viu.',
  },
  177: {
    o: 'Textos de economia usam um núcleo fixo de palavras: **der Umsatz** (faturamento), **der Gewinn** (lucro), **der Verlust** (prejuízo), **verzeichnen** (registrar).',
    q: 'Para ler notícias econômicas e relatórios de empresas.',
    p: 'Com esse núcleo você lê qualquer notícia de economia.',
  },
  178: {
    o: '**derjenige, der …** (aquele que…) dá ênfase. **derselbe** é o mesmo, idêntico; **der gleiche** é um igual. **solch** = tal.',
    q: 'Para se referir a pessoas e coisas com precisão, sobretudo na escrita formal.',
    p: 'A diferença entre **derselbe** e **der gleiche** é sutil, mas mostra domínio.',
  },
  179: {
    o: 'Entender uma fala longa não é entender cada palavra: é anotar o essencial, pedir esclarecimento (**Könnten Sie das präzisieren?**) e parafrasear para confirmar.',
    q: 'Em palestras, reuniões e na prova de compreensão.',
    p: 'Pedir esclarecimento é sinal de competência, não de fraqueza.',
  },
  180: {
    o: 'Quem modera uma discussão abre, dá a palavra (**Sie haben das Wort**), interrompe com educação, resume (**Halten wir fest …**) e busca o acordo.',
    q: 'Para conduzir debates e reuniões.',
    p: 'Moderar em alemão mostra liderança e domínio da língua.',
  },
  181: {
    o: 'A conversa social tem rituais: abrir com algo da situação, perguntar com interesse (**Erzählen Sie mal!**), mudar de assunto (**Apropos …**) e encerrar com educação.',
    q: 'Em eventos, no trabalho e com novos conhecidos.',
    p: 'O small talk abre portas. Com as fórmulas certas ele flui sem esforço.',
  },
  182: {
    o: 'Números pedem precisão: **Prozent** (variação relativa) × **Prozentpunkte** (diferença entre percentuais). E cuidado com correlação × causalidade.',
    q: 'Para argumentar com dados e entender estatísticas em notícias.',
    p: 'Confundir porcento com ponto percentual é erro comum até em jornais.',
  },
  183: {
    o: 'Temas abstratos têm vocabulário próprio: **Mehrsprachigkeit** (multilinguismo), **Zugehörigkeit** (pertencimento), **Herkunft** (origem).',
    q: 'Para discutir identidade, língua e pertencimento.',
    p: 'É um tema que toca quem vive entre duas línguas, e um clássico das provas.',
  },
  184: {
    o: 'O mesmo fato pode ser contado de formas que conduzem o leitor: pela escolha de palavras, pelo enquadramento (**Framing**) e por perguntas sugestivas.',
    q: 'Na leitura crítica de jornais, redes sociais e propaganda.',
    p: 'Ler nas entrelinhas protege você de manipulação, em qualquer língua.',
  },
  185: {
    o: 'Um simulado completo do C1: leitura de textos longos, escuta de palestras, escrita argumentativa e formal, e fala com apresentação e discussão.',
    q: 'Na reta final da preparação para o C1.',
    p: 'Treinar com tempo cronometrado mostra onde ainda vale investir.',
  },
});

// ---------- C2 ----------
Object.assign(VG, {
  186: {
    o: 'Dizer menos para significar mais: **nicht gerade billig** = bem caro; **gar nicht übel** = muito bom. E a ironia diz o contrário: **Na toll!** quando tudo deu errado.',
    q: 'Na conversa entre nativos, em críticas e em textos de opinião.',
    p: 'Quem não percebe a atenuação e a ironia entende o oposto do que foi dito.',
  },
  187: {
    o: 'Fora do discurso indireto, o Konjunktiv I sobrevive em fórmulas: **Wie dem auch sei** (seja como for), **Man nehme drei Eier** (em receitas), **Gott sei Dank**.',
    q: 'Em receitas, discursos, textos antigos e expressões do dia a dia.',
    p: 'São fórmulas fixas: basta reconhecê-las e usá-las inteiras.',
  },
  188: {
    o: 'Alguns verbos e adjetivos do registro elevado ainda pedem genitivo: **bedürfen** (necessitar de), **gedenken** (homenagear a memória de), **mächtig sein** (dominar).',
    q: 'Em textos formais, discursos e literatura.',
    p: 'Raros na fala, mas marcantes na escrita culta. Reconhecê-los é sinal de C2.',
  },
  189: {
    o: 'O que vai para a 1ª posição ganha destaque: **Diesen Film kenne ich nicht**. Até o particípio pode abrir a frase: **Gelesen habe ich es nicht**.',
    q: 'Para dar ênfase e estilo, na fala e na escrita.',
    p: 'A ordem das palavras é uma ferramenta de estilo, não só de gramática.',
  },
  190: {
    o: 'O alemão tem três padrões nacionais. Na Áustria, **Jänner** e **heuer**; na Suíça, **Velo** e **Billett**, e sem ß (**Strasse**).',
    q: 'Ao viajar, ler ou conversar com austríacos e suíços.',
    p: 'Nenhum padrão é mais certo que o outro. Reconhecê-los evita confusão.',
  },
  191: {
    o: 'Para analisar literatura: o narrador pode ser **Ich-Erzähler** (1ª pessoa), **auktorial** (onisciente) ou **personal** (colado numa personagem). E há recursos como metáfora e **Leitmotiv**.',
    q: 'Na leitura e na discussão de romances e contos.',
    p: 'Com essas ferramentas você lê literatura alemã como leitor crítico.',
  },
  192: {
    o: 'Provérbios são frases fixas, muitas com outra imagem em português: **Der Apfel fällt nicht weit vom Stamm** = filho de peixe, peixinho é.',
    q: 'Na conversa, para comentar uma situação com sabedoria popular.',
    p: 'Nativos citam provérbios pela metade. Conhecê-los permite entender a alusão.',
  },
  193: {
    o: 'O **Amtsdeutsch** empilha substantivos, passiva e termos jurídicos: **Bescheid** (decisão), **Widerspruch einlegen** (recorrer), **fristgerecht** (no prazo).',
    q: 'Ao ler cartas de repartições, da previdência, do imposto de renda.',
    p: 'Perder um prazo por não entender a carta tem consequências reais.',
  },
  194: {
    o: 'Mediar é passar um conteúdo adiante de forma adequada a quem ouve: resumir, simplificar e explicar. **Vereinfacht gesagt …**, **Gemeint ist damit …**',
    q: 'Para explicar um documento a alguém, traduzir a ideia de uma reunião, ajudar quem não entende.',
    p: 'Quem chega ao C2 vira ponte entre línguas e pessoas.',
  },
  195: {
    o: 'O **Kommentar** defende uma posição com argumentos; a **Glosse** faz o mesmo com humor e exagero, e termina numa **Pointe** (o arremate).',
    q: 'Na leitura de jornais e para escrever textos de opinião com estilo.',
    p: 'Escrever com humor e ironia é um dos degraus mais altos da língua.',
  },
  196: {
    o: 'No C2, **sagen** raramente é a melhor palavra: **andeuten** (insinuar), **einräumen** (admitir), **erwidern** (retrucar), **beteuern** (jurar).',
    q: 'Para relatar falas com precisão, na escrita e em resumos.',
    p: 'O verbo certo carrega a intenção de quem falou. É precisão pura.',
  },
  197: {
    o: 'O Goethe-Zertifikat C2 (**Großes Deutsches Sprachdiplom**) tem quatro módulos e exige entender quase tudo, inclusive o subentendido, e se expressar com nuance.',
    q: 'Quando você estiver se preparando para o certificado mais alto.',
    p: 'Conhecer a prova mostra que, a esta altura, o desafio é a precisão.',
  },
  198: {
    o: 'Figuras de retórica dão força ao discurso: **Anapher** (repetir o início), **Trikolon** (três elementos), **Chiasmus** (inversão cruzada).',
    q: 'Na análise de discursos e ensaios, e com parcimônia nos seus textos.',
    p: 'Reconhecer essas figuras é entender como um texto convence.',
  },
  199: {
    o: 'O **Essay** é mais livre que a **Erörterung**: parte de uma observação, explora o tema com tom pessoal e termina abrindo uma reflexão.',
    q: 'Para escrever ensaios e textos reflexivos.',
    p: 'É o gênero de quem já domina a estrutura e pode brincar com ela.',
  },
  200: {
    o: 'A Alemanha tem dialetos fortes. Você não precisa falá-los, mas reconhecê-los: **Moin** (norte), **Grüß Gott** (sul), **icke** (Berlim).',
    q: 'Ao viajar pelo país e conversar com pessoas de várias regiões.',
    p: 'Reconhecer o regional é entender o país de verdade.',
  },
  201: {
    o: 'O alemão pegou palavras de várias línguas e criou falsos anglicismos: **Handy** (celular) e **Beamer** (projetor) não existem assim em inglês.',
    q: 'No dia a dia, onde essas palavras estão por toda parte.',
    p: 'Evita confusão com quem fala inglês e explica palavras estranhas.',
  },
  202: {
    o: 'Trocadilhos (**Wortspiele**) e piadas infames (**Kalauer**) exploram duplos sentidos, compostos e sons parecidos.',
    q: 'Em manchetes, propaganda e conversas descontraídas.',
    p: 'Entender o humor é um dos últimos degraus de uma língua.',
  },
  203: {
    o: 'Textos legais têm forma fixa: **§** (parágrafo), **Abs.** (alínea) e fórmulas como **sofern nicht** (salvo se). E o presente vira ordem: **Der Mieter hat die Miete zu zahlen**.',
    q: 'Ao ler contratos, leis e regulamentos.',
    p: 'Entender o texto legal protege os seus direitos.',
  },
  204: {
    o: 'A poesia tem vocabulário de análise: **Vers**, **Strophe**, **Reim**, **lyrisches Ich** (eu lírico). O poema de Goethe **Über allen Gipfeln ist Ruh** mostra como poucas palavras criam silêncio.',
    q: 'Na leitura e na conversa sobre poesia.',
    p: 'A poesia mostra a língua no seu ponto mais concentrado.',
  },
  205: {
    o: 'Pares que confundem até nativos: **scheinbar** (só na aparência) × **anscheinend** (ao que parece, provavelmente é); **effektiv** (eficaz) × **effizient** (eficiente).',
    q: 'Sempre que a precisão importa: textos, relatórios, argumentos.',
    p: 'No C2, a palavra quase certa é a palavra errada.',
  },
  206: {
    o: 'Em debates reais há interrupções e frases cortadas, e fórmulas para disputar a palavra: **Lassen Sie mich ausreden!**, **Moment mal!**, **Sie weichen aus**.',
    q: 'Para entender talk shows e debates e participar deles.',
    p: 'A fala espontânea é rápida e desordenada. Saber disputar a palavra é essencial.',
  },
  207: {
    o: 'Um trabalho acadêmico alemão tem estrutura fixa: **Einleitung** (pergunta), **Hauptteil** (análise com fontes), **Fazit** (resposta) e bibliografia.',
    q: 'Na universidade e em qualquer texto de pesquisa.',
    p: 'Seguir as convenções é condição para o texto ser levado a sério.',
  },
  208: {
    o: 'O polimento final: evitar repetições, equilibrar substantivos e verbos, variar o início das frases e cortar palavras vazias.',
    q: 'Sempre que um texto importante estiver pronto: antes de enviar ou entregar.',
    p: 'O conteúdo fica igual, mas a leitura fica leve. É o que separa um bom texto de um ótimo.',
  },
  209: {
    o: 'O fechamento da trilha: a estratégia para a prova C2 e, mais importante, um plano para manter o alemão para sempre, com leitura, escrita e conversa reais.',
    q: 'No fim da trilha e daqui para a frente.',
    p: 'Uma língua se mantém viva com uso. O C2 não é o fim, é o começo de usar o alemão de verdade.',
  },
});
