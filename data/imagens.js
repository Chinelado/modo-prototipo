// Legendas das ilustrações das lições (images/aulas/licao-NNN.webp). Só existem para imagens com função didática:
// os números da imagem são explicados aqui. Todo negrito é alemão e toca o áudio ao ser tocado.
// Critério e prompts: PROMPTS-AULAS.md.
const IMG_CAP = {
  'licao-014': '1 **auf** · 2 **in** · 3 **unter** · 4 **neben** · 5 **hinter** · 6 **vor** · 7 **zwischen**. Para dizer onde algo está, essas preposições pedem o dativo: **Die Katze ist unter dem Tisch.**',
  'licao-017': '1 **der Kopf** · 2 **der Hals** · 3 **der Arm** · 4 **die Hand** · 5 **der Bauch** · 6 **das Bein** · 7 **der Fuß** · 8 **der Rücken**',
  'licao-022': 'À esquerda há movimento (**Wohin?**) e a preposição pede acusativo: **Ich hänge das Bild an die Wand.** À direita a coisa está parada (**Wo?**) e pede dativo: **Das Bild hängt an der Wand.**',
  'licao-032': 'O que é dado (laranja) vai no acusativo; quem recebe (verde-azulado) vai no dativo: **Ich gebe dem Kind ein Buch.**',
  'licao-045': '**als**: uma vez só no passado (a foto única). **wenn**: toda vez que acontecia (a pilha de fotos).',
  'licao-108': 'À esquerda, separável: **Er setzt uns über.** (leva para a outra margem). À direita, inseparável: **Sie übersetzt den Text.** (traduz). O acento muda junto.',
  'licao-123': 'Na Alemanha, para desejar sorte se aperta o polegar dentro da mão, e não se cruzam os dedos: **Ich drücke dir die Daumen!**',
  'licao-191': '1 Deutschland: **Hallo!** · 2 Österreich: **Servus!** e **Grüß Gott!** · 3 Schweiz: **Grüezi!**',
  'licao-201': '1 Norte, sobretudo perto do mar: **Moin!** · 2 Leste, com Berlim: **Tach!** · 3 Baviera: **Servus!** · 4 Baden-Württemberg: **Grüß Gott!** As fronteiras são aproximadas: cumprimentos não param na divisa.',
  // Lições novas do A1–A2 (trilha MODO, 21/11/2026). As duas primeiras reaproveitam fotos do Pocket; as outras esperam a geração (PROMPTS-AULAS.md).
  'licao-n-hausordnung': 'As cores das lixeiras: **gelb** (embalagens e plástico, o **Gelber Sack**), **blau** (papel, o **Altpapier**), **braun** (restos de comida, o **Biomüll**) e **grau** ou **schwarz** (o resto, **Restmüll**).',
  'licao-n-apotheke': 'O **A** vermelho marca toda **Apotheke**: é por ele que você acha uma farmácia na rua. A placa **Notdienst** indica a farmácia de plantão, aberta à noite e no domingo.',
  'licao-n-wohnungsanzeige': 'Só 1 e 2, em laranja, contam como **Zimmer**: esta é uma **Zwei-Zimmer-Wohnung**, com sala e um quarto. 3 **die Küche** · 4 **das Bad** · 5 **der Flur** · 6 **der Balkon** não entram na conta.',
  'licao-n-wohnungsanzeige-b': '1 Muitos apartamentos alugados na Alemanha vêm sem cozinha: só os canos e as tomadas na parede. 2 Com **Einbauküche** (**EBK** no anúncio), armários, pia e fogão já estão lá.',
  'licao-n-schilder': '1 **ziehen**: puxar, a porta vem na sua direção. 2 **drücken**: empurrar, a porta vai para longe de você. É o que está escrito nas portas alemãs.',
  'licao-n-bahnhof': '1 **der Bahnsteig**: onde você espera o trem. 2 e 3 **das Gleis**: os trilhos, cada um com o seu número. O painel diz o número do Gleis (**Der Zug fährt von Gleis 7.**), e cada Bahnsteig fica entre dois Gleise.',
};
