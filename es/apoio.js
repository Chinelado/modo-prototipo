// Espanhol · Visão geral, dicas das lacunas e objetivos (mesmo formato de en/apoio.js).
// **negrito** = palavra em espanhol. Escrito para iniciantes: frases curtas, sem termo técnico sem explicação.

/* ---------- Visão geral: o que é (o), quando usar (q), por que aprender (p) ---------- */
const VG = {
  'es-hola': {
    o: 'Para se apresentar você usa o verbo **ser**, como em português: **yo soy**, **tú eres**, **él / ella es**. O sujeito pode cair: **Soy Ana**. E há dois "você": **tú** (informal) e **usted** (formal).',
    q: 'No primeiro contato com alguém: cumprimentar, dizer o seu nome e dizer quem é quem.',
    p: 'É a primeira frase de qualquer conversa em espanhol. E você já aprende os sinais de abrir (**¿** e **¡**), que o português não tem.',
  },
  'es-donde': {
    o: 'Para dizer a origem: **ser de** + país, sem artigo: **Soy de Brasil**. A nacionalidade muda com o gênero: **brasileño / brasileña**. Para negar: **no** antes do verbo.',
    q: 'Para perguntar e dizer de onde alguém é, onde mora e que língua fala.',
    p: '"Soy do Brasil" é um dos primeiros sinais de portunhol. Aqui você aprende o jeito certo desde o começo.',
  },
  'es-letras': {
    o: 'As letras do espanhol têm nomes próprios: **hache** (h), **jota** (j), **eñe** (ñ), **uve** (v). No e-mail, **@** é **arroba** e o ponto é **punto**.',
    q: 'Ao telefone, num hotel ou num cadastro: quando alguém precisa escrever o seu nome ou o seu e-mail.',
    p: 'O seu nome quase nunca é espanhol, então você vai soletrá-lo muitas vezes. E como b e v soam igual, a pergunta "¿con be o con uve?" é diária.',
  },
  'es-edad': {
    o: 'A idade se diz com **tener**, como em português: **Tengo treinta años**. De 16 a 29, uma palavra só (**dieciséis**, **veintidós**); depois, com **y** (**treinta y uno**).',
    q: 'Para dizer e perguntar a idade e para passar o seu número de telefone.',
    p: 'Os números aparecem em tudo: preço, endereço, horário. E **años**, com ñ, evita uma das gafes mais famosas do portunhol.',
  },
  'es-trabajo': {
    o: 'A profissão vai **sem artigo**: **Soy profesora**. Os verbos regulares do presente: **trabajo** (-ar), **aprendo** (-er), **vivo** (-ir).',
    q: 'Para dizer o que você faz, onde trabalha e onde mora, e perguntar o mesmo a alguém.',
    p: 'Com três terminações você conjuga centenas de verbos. E **oficina** (escritório) é o primeiro falso amigo do trabalho.',
  },
  'es-ficha': {
    o: 'Numa ficha: **nombre** (nome), **apellidos** (os dois sobrenomes, do pai e da mãe), **fecha de nacimiento** (dia/mês/ano) e **nacionalidad**. Os formulários usam **usted**: **Escriba**, **Firme**.',
    q: 'Para se inscrever num curso, num hotel, num site ou num aplicativo em espanhol.',
    p: 'Você vai preencher fichas em espanhol em viagens e no trabalho. E **apellido** (sobrenome) × **apodo** (apelido) é armadilha certa.',
  },
};

/* ---------- dicas das lacunas (uma por lacuna, na ordem) ---------- */
const CZH = {
  'es-hola': ['ser, com yo', 'ser, com tú', 'ser, com ella'],
  'es-donde': ['ser, com tú', 'origem: de + país', 'ser, com yo, na negativa'],
  'es-letras': ['escribir, com se', '@ no e-mail', 'o nome da letra ñ'],
  'es-edad': ['tener, com tú', 'a idade: tener', '16 por extenso'],
  'es-trabajo': ['trabajar, com yo', 'vivir, com tú', 'profissão: ser, sem artigo'],
  'es-ficha': ['sobrenome', 'e, antes de som de i', 'nascimento'],
};

/* ---------- objetivos "Consigo…" (por lição e por módulo) ---------- */
const OBJ = {
  'es-hola': { o: 'Consigo cumprimentar, dizer o meu nome e perguntar o nome de alguém.', a: 'Você consegue se apresentar em espanhol e perguntar o nome da outra pessoa?', ref: 'Interacción oral · A1' },
  'es-donde': { o: 'Consigo dizer e perguntar de onde alguém é, onde mora e que línguas fala.', a: 'Você consegue dizer a sua nacionalidade e perguntar a de alguém?', ref: 'Interacción oral · A1' },
  'es-letras': { o: 'Consigo soletrar o meu nome e o meu e-mail, e pedir para alguém soletrar.', a: 'Você consegue soletrar o seu nome e o seu e-mail em espanhol?', ref: 'Interacción oral · A1' },
  'es-edad': { o: 'Consigo dizer e perguntar a idade e passar um número de telefone.', a: 'Você consegue dizer a sua idade e o seu telefone em espanhol?', ref: 'Interacción oral · A1' },
  'es-trabajo': { o: 'Consigo dizer a minha profissão, onde trabalho e onde moro.', a: 'Você consegue dizer o que faz e onde trabalha em espanhol?', ref: 'Expresión oral · A1' },
  'es-ficha': { o: 'Consigo ler e preencher uma ficha simples em espanhol.', a: 'Você consegue preencher uma ficha de inscrição em espanhol com os seus dados?', ref: 'Expresión escrita · A1' },
};
const MOD_OBJ = {
  0: ['Consigo me apresentar: nome, de onde sou e a minha profissão.', 'Consigo soletrar o meu nome e dizer a minha idade e o meu telefone.', 'Consigo fazer perguntas simples para conhecer alguém.', 'Consigo ler e preencher uma ficha com os meus dados.'],
};
