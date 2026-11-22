// Inglês · Visão geral, dicas das lacunas e objetivos (mesmo formato de data/visao.js, lacunas.js e objetivos.js).
// **negrito** = palavra em inglês. Escrito para iniciantes: frases curtas, sem termo técnico sem explicação.

/* ---------- Visão geral: o que é (o), quando usar (q), por que aprender (p) ---------- */
const VG = {
  'en-hi': {
    o: 'Para se apresentar você usa um verbo só: **to be**, que quer dizer ser e estar. Ele tem três formas: **I am**, **you are**, **he is** / **she is**. Na fala vira **I\'m**, **you\'re**, **she\'s**.',
    q: 'No primeiro contato com alguém: cumprimentar, dizer o seu nome e dizer quem é quem.',
    p: 'É a primeira frase de qualquer conversa em inglês. E você já aprende a regra que mais pega o brasileiro: o sujeito nunca some (**I\'m Ana**, e não só "Am Ana").',
  },
  'en-from': {
    o: 'Para perguntar com **to be**, basta trocar o verbo de lugar: **you are** → **are you?** Para negar, coloque **not** depois dele: **I\'m not**, **she isn\'t**.',
    q: 'Para perguntar e dizer de onde alguém é, e para responder sim ou não.',
    p: 'De onde você é? é a segunda pergunta de toda conversa. E perguntar e negar com to be é a base de todas as perguntas que vêm depois.',
  },
  'en-spell': {
    o: 'As letras do inglês têm nomes próprios, e as vogais enganam: **A** soa "ei", **E** soa "i" e **I** soa "ai". No e-mail, **@** é **at** e o ponto é **dot**.',
    q: 'Ao telefone, num hotel ou num cadastro: quando alguém precisa escrever o seu nome ou o seu e-mail.',
    p: 'O seu nome quase nunca é inglês, então você vai soletrá-lo muitas vezes. Saber as letras evita erro no cadastro e na reserva.',
  },
  'en-age': {
    o: 'Em inglês, a idade se diz com **to be**, e não com "ter": **I\'m twenty** = eu tenho vinte anos. De 13 a 19, os números terminam em **-teen**.',
    q: 'Para dizer e perguntar a idade e para passar o seu número de telefone.',
    p: '"I have twenty years" é um dos erros mais comuns do brasileiro. E os números aparecem em tudo: telefone, preço, endereço, horário.',
  },
  'en-job': {
    o: 'Em inglês, a profissão leva artigo: **I\'m a nurse**, **she\'s an engineer**. Use **an** antes de som de vogal e **a** antes de som de consoante.',
    q: 'Para dizer o que você faz e onde trabalha, e para perguntar a profissão de alguém.',
    p: 'Em português dizemos "sou enfermeira", sem artigo. Em inglês, sem o **a**, a frase fica errada. É um erro que se nota na hora.',
  },
  'en-form': {
    o: 'Num cadastro em inglês, **first name** é o nome e **last name** é o sobrenome. Nacionalidades e línguas começam com maiúscula, e a data americana vem com o mês primeiro.',
    q: 'Para se inscrever num curso, num site, num hotel ou num aplicativo em inglês.',
    p: 'Você vai preencher cadastros em inglês a vida toda. Ler 03/05 como "3 de maio" num formulário americano é um erro clássico.',
  },
};

/* ---------- dicas das lacunas (uma por lacuna, na ordem) ---------- */
const CZH = {
  'en-hi': ['to be (ser), com I', 'to be (ser), com you', 'to be (ser), com she'],
  'en-from': ['to be (ser), com you, na pergunta', 'origem: de onde', 'to be na negativa, com she'],
  'en-spell': ['spell (soletrar), depois de do you', '@ (arroba) no e-mail', 'a letra que soa "i"'],
  'en-age': ['to be (ser), com you', 'to be (ser), com I', '13 por extenso'],
  'en-job': ['artigo antes de som de consoante', 'artigo antes de som de vogal', 'do (fazer), depois de do you'],
  'en-form': ['o campo do sobrenome', 'nacionalidade (brasileira)', 'a língua inglesa'],
};

/* ---------- objetivos "Consigo…" (por lição e por módulo) ---------- */
const OBJ = {
  'en-hi': { o: 'Consigo cumprimentar, dizer o meu nome e perguntar o nome de alguém.', a: 'Você consegue se apresentar em inglês e perguntar o nome da outra pessoa?', ref: 'Conversation · A1' },
  'en-from': { o: 'Consigo dizer e perguntar de onde alguém é, e responder sim ou não.', a: 'Você consegue perguntar de onde alguém é e dizer a sua nacionalidade?', ref: 'Information exchange · A1' },
  'en-spell': { o: 'Consigo soletrar o meu nome e o meu e-mail, e pedir para alguém soletrar.', a: 'Você consegue soletrar o seu nome e o seu e-mail em inglês?', ref: 'Information exchange · A1' },
  'en-age': { o: 'Consigo dizer e perguntar a idade e passar um número de telefone.', a: 'Você consegue dizer a sua idade e o seu telefone em inglês?', ref: 'Information exchange · A1' },
  'en-job': { o: 'Consigo dizer a minha profissão e onde trabalho, e perguntar a de alguém.', a: 'Você consegue dizer a sua profissão em inglês, com a ou an?', ref: 'Information exchange · A1' },
  'en-form': { o: 'Consigo ler e preencher um cadastro simples em inglês.', a: 'Você consegue preencher um cadastro em inglês com os seus dados?', ref: 'Forms and questionnaires · A1' },
};
const MOD_OBJ = {
  0: ['Consigo me apresentar: nome, de onde sou e a minha profissão.', 'Consigo soletrar o meu nome e dizer a minha idade e o meu telefone.', 'Consigo fazer perguntas simples para conhecer alguém.', 'Consigo ler e preencher um cadastro com os meus dados.'],
};
