// Objetivos "consigo…" (decisão 10, 20/11/2026) — RASCUNHO, ainda sem revisão pedagógica.
// OBJ: por lição, pelo id estável (sid): o = objetivo, a = pergunta de autoavaliação, ref = escala do Quadro Europeu e nível.
// Vêm do piloto do A1 (docs/objetivos-A1-piloto.md), mais as 42 lições novas do A1–A2 e "Im Urlaub", que desceu para o A1.
// MOD_OBJ: por módulo (índice na trilha nova). A1 e A2 têm objetivos, e todas as lições do A1–A2 também (as antigas do A2 desde 21/11/2026).
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
// Módulos 5 e 6 (21/11/2026)
Object.assign(OBJ, {
  'n-wohnungsanzeige': { o: 'Consigo entender um anúncio de apartamento simples e perguntar sobre o aluguel e a visita.', a: 'Você consegue entender um anúncio de apartamento e perguntar sobre o aluguel?', ref: 'Reading for orientation · A1 (fronteira com A2)' },
  'n-zurpost': { o: 'Consigo dizer aonde vou na cidade e perguntar como chegar a um lugar.', a: 'Você consegue dizer aonde vai e perguntar como chegar a um lugar?', ref: 'Information exchange · A1' },
  'n-schilder': { o: 'Consigo entender placas e avisos comuns e escrever um bilhete curto para um vizinho.', a: 'Você consegue entender placas comuns e escrever um bilhete curto?', ref: 'Reading for orientation · A1; Notes, messages and forms · A1' },
  'n-arzttermin': { o: 'Consigo marcar uma consulta por telefone: dizer quem sou, o que sinto e combinar um horário.', a: 'Você consegue marcar uma consulta por telefone?', ref: 'Obtaining goods and services · A1–A2 (a lição antecipa)' },
  'n-wochenende': { o: 'Consigo contar o que fiz no fim de semana, em ordem, com zuerst, dann e danach.', a: 'Você consegue contar o seu fim de semana em ordem?', ref: 'Sustained monologue: describing experience · A2 (a lição antecipa)' },
  'n-postkarte': { o: 'Consigo ler e escrever um cartão-postal simples de férias.', a: 'Você consegue escrever um cartão-postal contando onde está e o que fez?', ref: 'Correspondence · A1' },
});
// Módulos 7 e 8 (21/11/2026)
Object.assign(OBJ, {
  'n-lebenslauf': { o: 'Consigo contar as etapas da minha vida com os anos e montar um currículo simples em tabela.', a: 'Você consegue contar as etapas da sua vida com os anos?', ref: 'Sustained monologue: describing experience · A2' },
  'n-ausbildung': { o: 'Consigo contar a minha formação, a escola, os cursos e as provas, no Perfekt.', a: 'Você consegue contar como foi a sua formação?', ref: 'Sustained monologue: describing experience · A2' },
  'n-email': { o: 'Consigo ler um e-mail pessoal e responder contando novidades e dando motivos com weil.', a: 'Você consegue responder a um e-mail pessoal contando novidades?', ref: 'Correspondence · A2' },
  'n-hausordnung': { o: 'Consigo entender as regras de um prédio e dizer o que é obrigatório, permitido ou proibido.', a: 'Você consegue explicar as regras do seu prédio com man muss e man darf?', ref: 'Understanding announcements and instructions · A2' },
  'n-zettel-nachbarn': { o: 'Consigo ler avisos do prédio e escrever um bilhete educado aos vizinhos.', a: 'Você consegue escrever um bilhete educado para os vizinhos?', ref: 'Notes, messages and forms · A2' },
});
// Objetivos dos módulos do A2 (21/11/2026, rascunho). As lições antigas do A2 ainda não têm objetivo próprio.
Object.assign(MOD_OBJ, {
  6: ['Consigo contar como era antes e as etapas da minha vida, com datas.', 'Consigo falar da minha formação e dar motivos com weil.', 'Consigo ler e responder a um e-mail pessoal.'],
  7: ['Consigo arrumar e descrever a casa e as pessoas, com adjetivos.', 'Consigo contar a minha rotina com verbos reflexivos.', 'Consigo entender as regras do prédio e escrever um bilhete aos vizinhos.'],
  8: ['Consigo comparar produtos e falar de presentes.', 'Consigo trocar um produto e resolver coisas no banco e no correio.', 'Consigo ler a confirmação de um pedido e escrever uma reclamação curta.'],
  9: ['Consigo falar do meu trabalho e da minha rotina na empresa.', 'Consigo pedir informações e fazer pedidos com educação.', 'Consigo telefonar, deixar recado e ler um anúncio de emprego.'],
  10: ['Consigo marcar e remarcar consultas e seguir conselhos médicos.', 'Consigo pedir remédio na farmácia e entender a dose.', 'Consigo agir numa emergência simples e avisar que estou doente.'],
  11: ['Consigo planejar uma viagem e falar do tempo.', 'Consigo entender avisos de atraso e resolver imprevistos.', 'Consigo ler e escrever uma avaliação de hotel.'],
  12: ['Consigo falar de festas e datas e dizer o que sinto.', 'Consigo descrever pessoas e coisas com orações relativas.', 'Consigo dar opiniões simples e comentar um post.'],
  13: ['Consigo ligar ideias e falar dos meus hábitos com a mídia.', 'Consigo concordar, discordar e entender notícias curtas.', 'Consigo escrever uma opinião curta num fórum e sei como é a prova do A2.'],
});
// Módulos 9 e 10 (21/11/2026)
Object.assign(OBJ, {
  'n-umtauschen': { o: 'Consigo trocar um produto numa loja, explicando o problema e dizendo o que quero.', a: 'Você consegue trocar um produto e explicar o motivo?', ref: 'Obtaining goods and services · A2' },
  'n-bankpost': { o: 'Consigo resolver coisas simples no banco e no correio: pedir um serviço e perguntar preço e prazo.', a: 'Você consegue pedir um serviço no banco ou no correio?', ref: 'Obtaining goods and services · A2' },
  'n-bestellung': { o: 'Consigo ler a confirmação de um pedido online e escrever uma reclamação curta e formal.', a: 'Você consegue escrever uma reclamação curta para uma loja?', ref: 'Correspondence · A2; Reading for orientation · A2' },
  'n-arbeitstag': { o: 'Consigo descrever o meu dia de trabalho com horários e com vor, nach e seit.', a: 'Você consegue descrever o seu dia de trabalho?', ref: 'Sustained monologue: describing experience · A2' },
  'n-telefon': { o: 'Consigo fazer uma ligação de trabalho simples: pedir para falar com alguém e deixar ou anotar um recado.', a: 'Você consegue pedir para falar com alguém ao telefone e deixar recado?', ref: 'Using telecommunications · A2' },
  'n-stellenanzeige': { o: 'Consigo ler um anúncio de emprego simples e escrever um e-mail curto de interesse.', a: 'Você consegue ler um anúncio de emprego e escrever um e-mail de interesse?', ref: 'Reading for orientation · A2; Correspondence · A2' },
});
// Módulo 11 (21/11/2026)
Object.assign(OBJ, {
  'n-termin2': { o: 'Consigo cancelar e remarcar uma consulta, propondo outro dia e horário.', a: 'Você consegue cancelar e remarcar uma consulta?', ref: 'Obtaining goods and services · A2; Using telecommunications · A2' },
  'n-apotheke': { o: 'Consigo pedir um remédio na farmácia e entender a dose e quando tomar.', a: 'Você consegue pedir um remédio e entender como tomar?', ref: 'Obtaining goods and services · A2; Understanding instructions · A2' },
  'n-gesund': { o: 'Consigo dar conselhos simples de saúde e comparar hábitos.', a: 'Você consegue dar conselhos de saúde a alguém?', ref: 'Conversation · A2' },
  'n-notfall': { o: 'Consigo pedir ajuda numa emergência, chamar uma ambulância e dizer o que aconteceu.', a: 'Você consegue pedir ajuda e explicar uma emergência?', ref: 'Obtaining goods and services · A2 (emergências)' },
  'n-krankmelden': { o: 'Consigo ler uma bula simples e escrever uma mensagem avisando que estou doente.', a: 'Você consegue avisar o trabalho que está doente?', ref: 'Notes, messages and forms · A2; Reading for orientation · A2' },
});
// Módulos 12 e 13 (21/11/2026)
Object.assign(OBJ, {
  'n-bahnhof': { o: 'Consigo entender avisos de atraso, cancelamento e baldeação na estação e no aeroporto.', a: 'Você consegue entender um aviso de atraso ou de cancelamento?', ref: 'Understanding announcements and instructions · A2' },
  'n-reiseprobleme': { o: 'Consigo explicar um problema na viagem, dizer o que aconteceu e pedir ajuda.', a: 'Você consegue explicar um imprevisto de viagem e pedir ajuda?', ref: 'Obtaining goods and services · A2' },
  'n-hotelbewertung': { o: 'Consigo ler avaliações de hotel e escrever uma curta, dizendo o que foi bom e o que foi ruim.', a: 'Você consegue escrever uma avaliação curta de um hotel?', ref: 'Reading for orientation · A2; Creative writing · A2' },
  'n-blog': { o: 'Consigo ler um post de blog sobre uma festa e escrever um comentário com a minha opinião.', a: 'Você consegue comentar um post dando a sua opinião?', ref: 'Reading correspondence · A2; Online conversation and discussion · A2' },
});
// Módulo 14 (21/11/2026)
Object.assign(OBJ, {
  'n-medien': { o: 'Consigo falar dos meus hábitos com celular, internet e notícias e dar uma opinião simples sobre eles.', a: 'Você consegue falar dos seus hábitos com a mídia?', ref: 'Sustained monologue: describing experience · A2' },
  'n-meinung': { o: 'Consigo dar a minha opinião, concordar e discordar com educação e dar um argumento.', a: 'Você consegue concordar ou discordar dando um motivo?', ref: 'Informal discussion (with friends) · A2' },
  'n-nachrichten': { o: 'Consigo entender o essencial de uma notícia curta: quem, o quê, quando e onde.', a: 'Você consegue entender o essencial de uma notícia curta?', ref: 'Reading for information and argument · A2' },
  'n-pruefung': { o: 'Sei como é a prova do A2 e consigo planejar algo junto com outra pessoa, como na parte oral.', a: 'Você sabe como é a prova do A2 e consegue combinar um horário com alguém?', ref: 'Goal-oriented co-operation · A2' },
  'n-forum': { o: 'Consigo ler opiniões num fórum e escrever a minha, com motivo, consequência e objeção.', a: 'Você consegue escrever uma opinião curta num fórum?', ref: 'Online conversation and discussion · A2; Reading for information and argument · A2' },
});
// Lições antigas do A2, na trilha nova (21/11/2026). Chave = índice original da lição.
Object.assign(OBJ, {
  19: { o: 'Consigo contar como foi um dia ou um acontecimento no passado, com war e hatte.', a: 'Você consegue contar como foi o seu fim de semana ou um dia especial?', ref: 'Sustained monologue: describing experience · A2' },
  20: { o: 'Consigo dizer com quem faço as coisas, com quem moro e desde quando.', a: 'Você consegue dizer com quem mora, com quem viaja e desde quando?', ref: 'Information exchange · A2' },
  23: { o: 'Consigo explicar por que faço algo e dar um motivo ao recusar um convite.', a: 'Você consegue dizer por que faz algo, com weil ou denn?', ref: 'Sustained monologue: putting a case · A2' },
  21: { o: 'Consigo dizer onde as coisas estão e onde vou colocá-las ao arrumar a casa.', a: 'Você consegue dizer onde ficam as coisas e onde vai colocar cada uma?', ref: 'Goal-oriented co-operation · A2' },
  27: { o: 'Consigo descrever uma casa ou um apartamento com adjetivos: um quarto grande, uma varanda tranquila.', a: 'Você consegue descrever um apartamento com adjetivos?', ref: 'Sustained monologue: describing experience · A2' },
  28: { o: 'Consigo descrever pessoas que conheço, como os meus vizinhos, e deixar claro de quem estou falando.', a: 'Você consegue descrever os seus vizinhos ou colegas?', ref: 'Sustained monologue: describing experience · A2' },
  26: { o: 'Consigo contar a minha rotina pessoal (me levantar, me arrumar, me apressar) e dizer como me sinto.', a: 'Você consegue contar como se arruma de manhã e dizer como se sente?', ref: 'Sustained monologue: describing experience · A2' },
  22: { o: 'Consigo comparar pessoas, lugares e coisas e dizer o que prefiro e o que é o melhor.', a: 'Você consegue comparar duas cidades ou duas coisas e dizer qual prefere?', ref: 'Sustained monologue: describing experience · A2' },
  31: { o: 'Consigo dizer o que vou dar de presente e para quem, e dizer se algo me agrada.', a: 'Você consegue dizer o que vai dar a alguém e se gostou de um presente?', ref: 'Conversation · A2' },
  32: { o: 'Consigo pedir algo emprestado e dizer que vou dar, mostrar ou mandar algo a alguém, sem repetir o nome das coisas.', a: 'Você consegue pedir algo emprestado e dizer "eu te dou isso amanhã"?', ref: 'Goal-oriented co-operation · A2' },
  30: { o: 'Consigo contar o que eu queria, precisava ou podia fazer no passado, na escola e no trabalho.', a: 'Você consegue contar o que queria ser quando criança e o que precisou fazer no trabalho?', ref: 'Sustained monologue: describing experience · A2' },
  35: { o: 'Consigo pedir informações com educação a um desconhecido: Wissen Sie, wo …? Können Sie mir sagen, ob …?', a: 'Você consegue pedir uma informação com educação a alguém na rua?', ref: 'Information exchange · A2' },
  38: { o: 'Consigo fazer pedidos educados em lojas e serviços, com Könnten Sie …?, Ich hätte gern … e Wäre das …?', a: 'Você consegue pedir algo numa loja com Ich hätte gern … ou Könnten Sie …?', ref: 'Obtaining goods and services · A2' },
  33: { o: 'Consigo dizer ao médico o que sinto e desde quando, e entender os conselhos que ele dá.', a: 'Você consegue explicar ao médico o que sente e entender o que ele recomenda?', ref: 'Information exchange · A2' },
  29: { o: 'Consigo reservar um quarto de hotel e falar dos meus planos de viagem.', a: 'Você consegue reservar um quarto e dizer o que vai fazer na viagem?', ref: 'Obtaining goods and services · A2' },
  34: { o: 'Consigo falar do tempo que está fazendo e de como são as estações onde moro.', a: 'Você consegue dizer como está o tempo e como é cada estação na sua cidade?', ref: 'Conversation · A2' },
  25: { o: 'Consigo falar de planos que dependem de uma condição: Wenn es regnet, bleibe ich zu Hause.', a: 'Você consegue dizer o que faz se chover ou se tiver tempo livre?', ref: 'Informal discussion (with friends) · A2' },
  39: { o: 'Consigo dizer datas, convidar para uma festa e combinar o que cada um leva.', a: 'Você consegue dizer a data de uma festa e combinar o que levar?', ref: 'Goal-oriented co-operation · A2' },
  40: { o: 'Consigo falar dos meus interesses, do que estou esperando e do que sonho fazer.', a: 'Você consegue dizer pelo que se interessa e com o que sonha?', ref: 'Conversation · A2' },
  36: { o: 'Consigo explicar quem é uma pessoa, dizendo o que ela faz, de onde vem ou onde está.', a: 'Você consegue explicar quem é alguém numa foto ou numa festa?', ref: 'Sustained monologue: describing experience · A2' },
  37: { o: 'Consigo dizer de qual coisa estou falando: o filme que vi, a música de que gosto, os óculos que comprei.', a: 'Você consegue falar de um filme ou de uma música de que gosta, dizendo qual é?', ref: 'Sustained monologue: describing experience · A2' },
  24: { o: 'Consigo dar a minha opinião de forma simples e contar o que outra pessoa disse.', a: 'Você consegue dizer o que acha de algo e contar o que alguém disse?', ref: 'Informal discussion (with friends) · A2' },
  41: { o: 'Consigo dizer o que faço por causa de algo, o que faço mesmo assim e o que acontece se não fizer (deshalb, trotzdem, sonst).', a: 'Você consegue ligar duas ideias com deshalb ou trotzdem?', ref: 'Coherence and cohesion · A2' },
});
