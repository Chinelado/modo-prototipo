// Objetivos "consigo…" (decisão 10, 20/11/2026) — RASCUNHO, ainda sem revisão pedagógica.
// OBJ: por lição, pelo id estável (sid): o = objetivo, a = pergunta de autoavaliação, ref = escala do Quadro Europeu e nível.
// Vêm do piloto do A1 (docs/objetivos-A1-piloto.md) mais as lições novas dos Módulos 1 a 4 e "Im Urlaub", que desceu para o A1.
// MOD_OBJ: por módulo (índice na trilha nova). Só o A1 tem objetivos por enquanto; o A2 em diante mostra "em redação".
const OBJ = {
  0: { o: 'Consigo cumprimentar, me despedir, dizer meu nome e perguntar o nome de alguém.', a: 'Você consegue cumprimentar alguém, dizer seu nome e perguntar o nome da pessoa?', ref: 'Conversation · A1' },
  1: { o: 'Consigo dizer de onde sou e onde moro, e perguntar isso a alguém.', a: 'Você consegue dizer de onde é e onde mora, e perguntar isso a alguém?', ref: 'Information exchange · A1' },
  'n-buchstabieren': { o: 'Consigo soletrar meu nome, meu e-mail e minha rua, e pedir para alguém soletrar.', a: 'Você consegue soletrar o seu nome e o seu e-mail em alemão?', ref: 'Information exchange · A1' },
  'n-alter': { o: 'Consigo dizer e perguntar a idade e passar um número de telefone.', a: 'Você consegue dizer a sua idade e o seu telefone em alemão?', ref: 'Information exchange · A1' },
  5: { o: 'Consigo fazer perguntas simples com quem, onde, quando e como, e perguntas de sim ou não.', a: 'Você consegue fazer perguntas simples para conhecer alguém?', ref: 'Information exchange · A1' },
  'n-formular': { o: 'Consigo ler uma ficha de inscrição e preencher a minha com os meus dados.', a: 'Você consegue preencher um formulário simples com os seus dados?', ref: 'Notes, messages and forms · A1; Reading for orientation · A1' },
  2: { o: 'Consigo perguntar o que é um objeto e nomear objetos do dia a dia com o artigo certo.', a: 'Você consegue perguntar o que é um objeto e dizer o nome dele com o artigo?', ref: 'Vocabulary range · A1' },
  3: { o: 'Consigo apresentar as pessoas da minha família e dizer de quem é alguma coisa.', a: 'Você consegue apresentar as pessoas da sua família?', ref: 'Sustained monologue: describing experience · A1' },
  'n-plural': { o: 'Consigo dizer quantos objetos ou animais tenho, no plural, e perguntar quantos alguém tem.', a: 'Você consegue dizer quantos objetos ou animais tem e perguntar isso a alguém?', ref: 'Vocabulary range · A1; Information exchange · A1' },
  'n-beruf': { o: 'Consigo dizer a minha profissão e perguntar a de alguém, na forma masculina ou feminina.', a: 'Você consegue dizer a sua profissão e perguntar a profissão de alguém?', ref: 'Information exchange · A1' },
  4: { o: 'Consigo dizer o que gosto de fazer no tempo livre e perguntar do que a outra pessoa gosta.', a: 'Você consegue dizer o que gosta de fazer e perguntar os gostos de alguém?', ref: 'Conversation · A1' },
  'n-nachricht': { o: 'Consigo ler um perfil curto e escrever uma mensagem simples de apresentação, ligando as frases com und, aber e oder.', a: 'Você consegue escrever uma mensagem curta se apresentando?', ref: 'Correspondence · A1; Reading correspondence · A1' },
  6: { o: 'Consigo perguntar e dizer as horas, combinar um horário e usar os números até 100.', a: 'Você consegue perguntar as horas e combinar um horário?', ref: 'Information exchange · A1' },
  9: { o: 'Consigo contar a minha rotina: a que horas acordo e o que faço em cada dia da semana.', a: 'Você consegue contar como é o seu dia e a sua semana?', ref: 'Sustained monologue: describing experience · A1 (fronteira com A2)' },
  'n-termin': { o: 'Consigo marcar um compromisso: perguntar se a pessoa tem tempo, dizer o dia e a hora e aceitar ou propor outro horário.', a: 'Você consegue marcar um compromisso com dia e hora?', ref: 'Information exchange · A1; Conversation · A1' },
  10: { o: 'Consigo dizer como vou para algum lugar e perguntar como alguém se desloca.', a: 'Você consegue dizer como vai para os lugares e perguntar isso a alguém?', ref: 'Information exchange · A1' },
  11: { o: 'Consigo pedir ajuda, dizer que não entendi e pedir para repetirem ou falarem mais devagar.', a: 'Quando não entende, você consegue pedir para repetirem ou falarem mais devagar?', ref: 'Asking for clarification · A1–A2 (conferir)' },
  'n-einladung': { o: 'Consigo ler um convite simples e responder aceitando ou recusando com educação.', a: 'Você consegue responder a um convite, aceitando ou recusando?', ref: 'Correspondence · A1; Reading correspondence · A1' },
  7: { o: 'Consigo dizer o que quero comer e pedir alimentos numa compra simples.', a: 'Você consegue dizer o que quer comer e pedir alimentos numa loja?', ref: 'Obtaining goods and services · A1' },
  'n-markt': { o: 'Consigo comprar alimentos numa feira: pedir quantidades, perguntar o preço e entender os números até mil.', a: 'Você consegue pedir quantidades e perguntar o preço numa feira?', ref: 'Obtaining goods and services · A1' },
  8: { o: 'Consigo pedir comida e bebida num restaurante, recusar algo educadamente e pedir a conta.', a: 'Você consegue fazer um pedido num restaurante e pedir a conta?', ref: 'Obtaining goods and services · A2 (a lição antecipa)' },
  'n-gern': { o: 'Consigo dizer do que gosto, o que prefiro e com que frequência como ou bebo algo.', a: 'Você consegue dizer do que gosta e o que prefere comer?', ref: 'Conversation · A1' },
  14: { o: 'Consigo perguntar o preço de uma roupa, falar da cor e dizer se está cara ou barata.', a: 'Você consegue perguntar quanto custa uma roupa e dizer se está caro?', ref: 'Obtaining goods and services · A1' },
  'n-einkaufszettel': { o: 'Consigo ler um cardápio simples e escrever uma lista de compras com quantidades.', a: 'Você consegue ler um cardápio e escrever uma lista de compras?', ref: 'Reading for orientation · A1; Notes, messages and forms · A1' },
  12: { o: 'Consigo descrever a minha casa: quantos cômodos tem, o que há nela e como ela é.', a: 'Você consegue descrever a sua casa ou apartamento?', ref: 'Sustained monologue: describing experience · A1 (fronteira com A2)' },
  13: { o: 'Consigo perguntar onde está um objeto e dizer onde ele está.', a: 'Você consegue perguntar e dizer onde as coisas estão?', ref: 'Information exchange · A1' },
  15: { o: 'Consigo perguntar como chegar a um lugar e entender instruções curtas de caminho.', a: 'Você consegue pedir informação de caminho e entender a resposta?', ref: 'Understanding announcements and instructions · A1' },
  16: { o: 'Consigo dizer ao médico onde dói e como me sinto, e entender o que devo ou não devo fazer.', a: 'Você consegue explicar ao médico o que está sentindo?', ref: 'Obtaining goods and services · A2 (conferir)' },
  17: { o: 'Consigo contar, de forma simples, o que fiz ontem ou no fim de semana.', a: 'Você consegue contar o que fez ontem?', ref: 'Sustained monologue: describing experience · A2 (a lição antecipa)' },
  18: { o: 'Consigo contar uma viagem ou um passeio que fiz, com os verbos de movimento.', a: 'Você consegue contar uma viagem ou um passeio que fez?', ref: 'Sustained monologue: describing experience · A2 (a lição antecipa)' },
};
const MOD_OBJ = {
  0: ['Consigo me apresentar: nome, de onde sou e onde moro.', 'Consigo soletrar meu nome e dizer minha idade e meu telefone.', 'Consigo fazer perguntas simples para conhecer alguém.', 'Consigo ler e preencher um formulário com os meus dados.'],
  1: ['Consigo nomear objetos com o artigo certo, no singular e no plural.', 'Consigo apresentar a minha família e dizer a minha profissão.', 'Consigo dizer do que gosto e escrever uma mensagem curta de apresentação.'],
  2: ['Consigo dizer as horas e marcar um compromisso.', 'Consigo contar a minha rotina e como me desloco.', 'Consigo pedir ajuda e responder a um convite.'],
  3: ['Consigo comprar comida e perguntar preços e quantidades.', 'Consigo pedir num restaurante e dizer do que gosto.', 'Consigo comprar roupas e ler um cardápio.'],
  4: ['Consigo descrever a minha casa e dizer onde as coisas estão.', 'Consigo ler um anúncio de apartamento.', 'Consigo pedir o caminho e entender placas e avisos.'],
  5: ['Consigo explicar ao médico o que sinto e marcar uma consulta.', 'Consigo contar o que fiz ontem, no fim de semana e nas férias.', 'Consigo escrever um cartão-postal curto.'],
};
