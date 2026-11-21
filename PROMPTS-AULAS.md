# Imagens nas lições: só as que ensinam

## O critério

Uma imagem só entra se fizer **pelo menos uma** destas três coisas que o texto, o áudio e os esquemas do app não fazem tão bem:

1. **Mostrar uma regra que é espacial ou física.** Onde as coisas estão, para onde vão, a posição da boca e da língua num som.
2. **Fazer reconhecer algo do mundo real.** Um gesto, uma placa, uma máquina, um prato, um mapa. É o que o aluno vai encontrar na rua e precisa identificar sem legenda.
3. **Criar um gancho de memória que o português não dá.** Só quando o sentido literal da palavra é uma cena concreta e inesperada.

Fica de fora o que for:
- **Cena de clima:** pessoas sorrindo num café, numa festa, numa estação.
- **Repetição de esquema:** tabela, linha do tempo, régua ou comparação que o app já desenha com cor e áudio.
- **Algo que o português já resolve:** "mandei consertar" = lassen; "está sendo fechada / está fechada" = werden / sein.

Uma imagem decorativa não é neutra: ela ocupa o topo da tela, empurra o conteúdo para baixo e gasta a atenção do aluno.

## O estilo

Dois estilos, cada um com uma função. Nada de estilo "livro ilustrado aconchegante".

| Estilo | Quando usar | Por quê |
| --- | --- | --- |
| **Diagrama ilustrado** | Regras espaciais, articulação dos sons, contrastes de sentido | Um traço limpo isola a única coisa que importa. Uma foto traria detalhes que distraem. |
| **Foto realista** | Gestos e objetos que o aluno precisa reconhecer no mundo real | A aparência real é o próprio conteúdo: a ilustração estiliza e perde o que se quer reconhecer. |
| **Mapa estilizado** | Onde se fala cada variedade | Uma forma geográfica simples, sem detalhes de relevo, com números. |

Três regras valem para todos:

- **Nenhuma palavra escrita na imagem.** Geradores erram o alemão (ä, ö, ü, ß) e o texto na imagem não tem áudio. Use **números em círculos** quando precisar apontar partes: o app traz a legenda com as palavras certas e o som.
- **Uma ideia por imagem**, com fundo liso e nada além do necessário.
- **Formato 3:2**, alto contraste e cores que funcionam nos temas claro e escuro.

## Decisão por lição

### Viram imagem (9)

| Lição | Dia | Estilo | Função didática |
| --- | --- | --- | --- |
| Wo ist …? | 16 | Diagrama | As sete preposições de lugar são posições no espaço: a imagem **é** a regra. |
| Beim Arzt | 19 | Diagrama | Partes do corpo apontadas com números: reconhecimento direto, sem tradução. |
| Wohin damit? | 25 | Diagrama | Movimento (acusativo) × posição (dativo), a distinção mais difícil do A2. A seta é a regra. |
| Geschenke | 37 | Diagrama | O dativo como "quem recebe": mostra os dois objetos de "dar" e para onde cada um vai. |
| Als ich Kind war | 52 | Diagrama | "als" = uma vez × "wenn" = sempre que: uma foto contra uma pilha de fotos. |
| Übersetzen oder übersetzen? | 125 | Diagrama | O sentido literal de über·setzen (levar para a outra margem) é uma cena concreta e inesperada. |
| Ich drücke dir die Daumen | 143 | Foto | Na Alemanha se aperta o polegar dentro da mão, e não se cruzam os dedos: é preciso reconhecer o gesto. |
| Servus und Grüezi | 222 | Mapa | Onde ficam a Alemanha, a Áustria e a Suíça e qual variedade se fala em cada uma. |
| Grüß Gott und Moin | 234 | Mapa | Em que região da Alemanha se ouve cada cumprimento. |

### Viram facilitação interativa no app, e não imagem (5)

| Lição | Dia | Por que código é melhor |
| --- | --- | --- |
| Wie spät ist es? | 8 | Um relógio de ponteiros arrastáveis com áudio ensina "halb vier" melhor que quatro relógios parados. |
| Meine Wohnung | 15 | Uma planta clicável já existe no Pocket "Wohnung" e dá o som de cada cômodo. |
| Was hast du gemacht?, Es war einmal…, Nachdem…, Futur II | 20, 50, 51, 109 | Uma linha do tempo dos tempos verbais em código, que acende a cada tempo novo. |
| Hiermit wird Ihnen mitgeteilt | 226 | Uma carta oficial desenhada em código, com as zonas (Aktenzeichen, Frist, Rechtsbehelfsbelehrung) clicáveis. Uma imagem gerada erraria o texto. |
| Die Grafik zeigt …, Mit Zahlen argumentieren | 114, 213 | Gráficos são dados: o app desenha com números exatos. |

### Ficam sem imagem (descartadas da lista anterior)

| Lição | Motivo |
| --- | --- |
| Hallo! Ich bin …, Meine Familie, Was machst du gern?, Unterwegs, Ich habe Hunger | Vocabulário concreto que os emojis e o áudio já cobrem; a imagem só repetiria. |
| Was ist das?, Maiúsculas e gêneros | O esquema colorido der/die/das já faz isso, com áudio. |
| Mein Tag, Im Urlaub, Besser schneller, Das Wetter, Feste feiern | Os esquemas (moldura, comparação, régua, tabela) já mostram a regra. |
| Morgens im Bad, Hergestellt in Deutschland, Ich lasse es reparieren, Das weinende Kind, Geschlossen! | O português tem a mesma distinção ("me lavo", "é fabricado", "mandei consertar", "chorando / consertado", "sendo fechada / fechada"). |
| Früher, Wenn ich reich wäre, Es war einmal, Über allen Gipfeln ist Ruh | Imagem de clima: bonita, mas não ensina a regra. |
| Ver-, zer-, ent-, be-, Haustür und Hausschlüssel, Auf die lange Bank, Wortspiele, Das dürfte stimmen | O esquema ou a tradução literal na aula já dá o gancho de memória. |

## Como gerar e salvar

1. Cole o **bloco de estilo** certo numa conversa nova (um bloco por estilo; não misture na mesma conversa).
2. Cole o prompt e gere em **paisagem 3:2 (1536 × 1024)**.
3. Confira que **não há letras** na imagem (só os números pedidos). Se aparecer texto, peça: *"Remove all text, keep only the numbers"*.
4. Salve como **PNG** em `images/aulas/` com o nome indicado e me avise. Eu converto para WebP, escrevo a legenda com as palavras numeradas e o áudio, e publico.

## Bloco de estilo A: diagrama ilustrado

```
You will create didactic diagrams for a German-learning app. Every image in this conversation follows these rules:
- Purpose: explain ONE grammar or vocabulary idea visually. Clarity over beauty.
- Style: clean flat vector illustration, thick soft outlines, simple geometric characters with minimal facial detail, no textures, no decorative background elements.
- Background: plain off-white (#f5f9fc) with a very subtle shadow under objects.
- Colors: mostly neutral grays and navy (#0e1525); use only two accent colors with meaning: orange (#ff8a3d) for movement or the highlighted element, teal (#1aa3a3) for position or the second element.
- Absolutely no letters or words anywhere in the image. Numbers inside small navy circles are allowed only when I ask for them.
- Landscape 3:2 (1536x1024), generous margins, every element large enough to read on a phone.
Reply "ok" and wait for my first prompt.
```

## Bloco de estilo B: foto realista

```
You will create realistic reference photos for a German-learning app. Every image in this conversation follows these rules:
- Photorealistic, natural daylight, neutral and uncluttered background, shallow depth of field.
- The subject must be shown exactly as it looks in real life in Germany, centered and large.
- No visible brands, logos or readable text. No celebrities.
- Landscape 3:2 (1536x1024).
Reply "ok" and wait for my first prompt.
```

## Prompts

### Lição 14 · Dia 16 · Wo ist …? — `licao-014.png` (estilo A)
```
Seven small identical scenes arranged in a clean grid (4 on top, 3 below), each with the same orange cat and the same simple teal cardboard box, all at the same size and angle. Scene 1: the cat sits on top of the box. Scene 2: the cat sits inside the open box, head visible. Scene 3: the cat lies under the box, which is propped up on one side. Scene 4: the cat sits next to the box. Scene 5: the cat is behind the box, only ears and tail visible. Scene 6: the cat sits in front of the box. Scene 7: the cat sits between two identical boxes. A small navy circle with the number 1 to 7 at the top-left corner of each scene. No other text.
```
Legenda que o app vai mostrar: 1 auf · 2 in · 3 unter · 4 neben · 5 hinter · 6 vor · 7 zwischen.

### Lição 17 · Dia 19 · Beim Arzt — `licao-017.png` (estilo A)
```
A simple full-body adult figure standing in a neutral front pose, gender-neutral, wearing plain gray clothes, like a clean medical chart. Thin navy leader lines point to eight body parts, each ending in a small navy circle with a number: 1 head, 2 neck, 3 arm, 4 hand, 5 belly, 6 leg, 7 foot. A small inset on the right shows the same figure from behind with number 8 pointing to the back. No other text.
```
Legenda: 1 der Kopf · 2 der Hals · 3 der Arm · 4 die Hand · 5 der Bauch · 6 das Bein · 7 der Fuß · 8 der Rücken.

### Lição 22 · Dia 25 · Wohin damit? — `licao-022.png` (estilo A)
```
Two side-by-side panels with the same plain wall and the same framed picture. Left panel: a simple figure on a small step stool is hanging the picture, and a thick orange curved arrow shows the picture moving onto the wall. Right panel: the picture already hangs still on the wall, with a small teal pin icon above it and no person. A thin vertical divider between panels. No text.
```
Legenda: à esquerda, movimento, **Wohin?** → acusativo: *Ich hänge das Bild an die Wand.* À direita, posição, **Wo?** → dativo: *Das Bild hängt an der Wand.*

### Lição 32 · Dia 37 · Geschenke — `licao-032.png` (estilo A)
```
A simple figure on the left hands a wrapped book to a child on the right. The book is outlined in orange and a thick orange arrow shows it moving from the adult's hands toward the child. The child is outlined in teal with a soft teal glow, arms open to receive. Plain background, no other objects. No text.
```
Legenda: o que é dado (laranja) vai no **acusativo**: *ein Buch*. Quem recebe (verde-azulado) vai no **dativo**: *dem Kind*. *Ich gebe dem Kind ein Buch.*

### Lição 45 · Dia 52 · Als ich Kind war — `licao-045.png` (estilo A)
```
Split image. Left half: one single large instant photo of a child on the first day of school holding a school cone, with a small orange "1" marker in a navy circle. Right half: a fanned stack of eight similar instant photos of the same child visiting grandmother, each slightly different in season, with a small teal circular "repeat" arrow icon. No text.
```
Legenda: **als** = uma vez só no passado (a foto única). **wenn** = toda vez que acontecia (a pilha de fotos).

### Lição 108 · Dia 125 · Übersetzen oder übersetzen? — `licao-108.png` (estilo A)
```
Split image. Left half: a small wooden ferry boat crossing a calm river, a ferryman with a pole carrying two passengers, and a thick orange arrow from one bank to the other. Right half: a person at a plain desk with a laptop and two open books, with a teal arrow going from one book to the other. No text.
```
Legenda: separável, **über·setzen** (Er setzt uns über) = levar para a outra margem. Inseparável, **übersetzen** (Sie übersetzt den Text) = traduzir. O acento muda junto: **ü**bersetzen × übers**e**tzen.

### Lição 123 · Dia 143 · Ich drücke dir die Daumen — `licao-123.png` (estilo A)
> **Refazer.** A primeira versão (foto) saiu com um punho comum, com o polegar **por fora** dos dedos: ensinaria o gesto errado. Como geradores têm dificuldade com mãos em foto, o prompt agora é um diagrama, com o polegar desenhado "por transparência" para mostrar onde ele fica.
```
Two large simple hand diagrams side by side, seen from the front at chest height, clean flat vector with thick outlines. LEFT: a closed fist where the THUMB IS TUCKED INSIDE the fist, underneath the four curled fingers; the four fingers are drawn semi-transparent so the thumb is visible inside, and the hidden thumb is colored orange. The thumb tip must NOT stick out and must NOT rest on top of the fingers. Small teal check mark icon above this hand. RIGHT, smaller and faded gray: a hand with the index and middle fingers crossed (the Brazilian/English good-luck sign), with a small gray cross-out mark above it. Plain off-white background. No letters or words.
```
Antes de salvar, confira: na mão da esquerda o polegar laranja tem que estar **dentro**, coberto pelos dedos.
Legenda: na Alemanha, para desejar sorte se **aperta o polegar dentro da mão**, e não se cruzam os dedos. Daí *Ich drücke dir die Daumen!*

### Lição 191 · Dia 222 · Servus und Grüezi — `licao-191.png` (mapa)
```
A clean stylized flat map of Germany, Austria and Switzerland only, each country in a different soft flat color (Germany light gray, Austria light orange, Switzerland light teal), with thin white borders and a plain off-white background. Neighboring countries are omitted. A small navy circle with a number sits in the center of each country: 1 Germany, 2 Austria, 3 Switzerland. No city names, no other text.
```
Legenda: 1 Deutschland, *Hallo!* · 2 Österreich, *Servus! / Grüß Gott!* · 3 Schweiz, *Grüezi!* (com áudio de cada um).

### Lição 201 · Dia 234 · Grüß Gott und Moin — `licao-201.png` (mapa)
```
A clean stylized flat map of Germany only, on a plain off-white background, divided into four soft color regions: the north coast (light teal), the Berlin area (light gray), Bavaria in the southeast (light orange) and Baden-Württemberg in the southwest (light yellow). A small navy circle with a number in each region: 1 north, 2 Berlin, 3 Bavaria, 4 Baden-Württemberg. No city names, no other text.
```
Legenda: 1 *Moin!* · 2 *Tach!* · 3 *Servus!* · 4 *Grüß Gott!*

## E os Pockets?

Das 48 imagens, ficaram **8**. Elas saíram do topo da lição e foram para um bloco **"👀 Repare"**, depois das ilustrações, com uma legenda que diz o que observar:

| Pocket | O que a imagem ensina |
| --- | --- |
| Apotheke | O **A** vermelho e a placa **Notdienst**. |
| Anmeldung | O painel que chama a senha e indica o guichê. |
| Supermarkt | O **Pfandautomat**, máquina que não existe no Brasil. |
| Kneipe | Os riscos no **Bierdeckel**, que viram a conta. |
| Auto | A **forma** das placas: octógono, triângulo invertido, círculo com faixa. |
| Biergarten | **Brezn**, **Obatzda** e **Radi**, pratos que o brasileiro não conhece. |
| Weihnachtsmarkt | **Gebrannte Mandeln**, **Lebkuchenherz** e a caneca com **Tassenpfand**. |
| Mülltrennung | As **cores** das lixeiras. |

As outras 40 eram cenas de clima (pessoas sorrindo no hotel, no cinema, na academia) ou repetiam o painel, a etiqueta ou o cartão de embarque que o app já desenha com áudio. Os PNG originais continuam na sua pasta `images/pocket/`, caso queira alguma de volta.

---

# Lições novas do A1–A2 (trilha MODO, 21/11/2026)

O mesmo critério valeu para as 42 lições novas: só entra imagem que mostra uma regra espacial ou física, que faz reconhecer algo do mundo real ou que cria um gancho de memória que o português não dá.

## Decisão por lição

### Ganham imagem nova (4 prompts abaixo)

| Lição | Arquivo | Estilo | Função didática |
| --- | --- | --- | --- |
| Die Wohnungsanzeige | `licao-n-wohnungsanzeige.png` | Diagrama | O que conta como **Zimmer** é uma regra espacial: na planta, sala e quarto contam; cozinha, banheiro e corredor não. É a confusão nº 1 de quem procura apartamento ("2 Zimmer" não são 2 quartos). |
| Die Wohnungsanzeige (detalhe) | `licao-n-wohnungsanzeige-b.png` | Diagrama | **EBK / Einbauküche**: muitos apartamentos alugados vêm sem cozinha nenhuma, só com os canos. O brasileiro não imagina isso, e a sigla do anúncio só faz sentido vendo. |
| Am Bahnhof und am Flughafen | `licao-n-bahnhof.png` | Diagrama | **Gleis × Bahnsteig**: na Alemanha o número é do trilho, e cada plataforma fica entre dois números. É espacial, e o português usa "plataforma" para os dois. |
| Schilder und Zettel | `licao-n-schilder.png` | Diagrama | **ziehen × drücken**: a direção da porta é uma ação física que nenhum emoji mostra, e as duas palavras estão em toda porta alemã. |

### Reaproveitam uma imagem que já existe (já estão no app)

| Lição | Imagem | Por quê |
| --- | --- | --- |
| Die Hausordnung | a das lixeiras do Pocket (`muell`), copiada para `licao-n-hausordnung.webp` | As **cores** das lixeiras são o que se precisa reconhecer no pátio do prédio. |
| In der Apotheke | a da farmácia do Pocket (`apotheke`), copiada para `licao-n-apotheke.webp` | O **A** vermelho e a placa **Notdienst**, que a lição cita. |

### Ficam sem imagem (36)

| Lições | Motivo |
| --- | --- |
| Wie schreibt man das?, Wie alt bist du?, Zwei Bücher drei Stühle, Am Montag um zehn, Was isst du gern?, Zur Post zum Bahnhof, Mein Lebenslauf, Schule und Ausbildung, Mein Arbeitstag, Gesund bleiben, Kurze Nachrichten | Regra de gramática ou de números que os esquemas coloridos (tabela, fórmula, linha do tempo, comparação) já mostram, com áudio. |
| Was sind Sie von Beruf?, Auf dem Markt, Einen Termin machen, Umtauschen, Auf der Bank und der Post, Am Telefon, Ich brauche einen Termin, Im Notfall, Probleme auf der Reise, Medien im Alltag, Ich bin dafür! | Vocabulário e frases que o emoji e o áudio cobrem, ou distinção que o português já tem ("grande demais", "cancelar / remarcar"). Uma foto seria cena de clima. |
| Ein Formular, Eine kurze Nachricht, Eine Einladung, Speisekarte und Einkaufszettel, Eine Postkarte, Eine E-Mail über mich, Ein Zettel an die Nachbarn, Eine Online-Bestellung, Eine Stellenanzeige, Krank melden, Eine Hotelbewertung, Ein Blogbeitrag, Ein Forumsbeitrag | Lições de Ler e escrever: o conteúdo é o texto, que o app mostra com áudio. Uma imagem com texto erraria o alemão; uma sem texto seria decoração. |
| Mein Wochenende, Prüfungstraining A2 | Cena de clima (fim de semana, sala de prova): bonita, mas não ensina. |

## Como gerar e salvar

1. Abra uma conversa **nova** no ChatGPT e cole primeiro o **Bloco de estilo A** (diagrama ilustrado, mais acima neste arquivo). Espere o "ok".
2. Cole um prompt por vez e gere em **paisagem 3:2 (1536 × 1024)**.
3. Confira a imagem com a **lista de conferência** de cada prompt antes de salvar. Se vier qualquer letra ou palavra, peça: *"Remove all text, keep only the circled numbers."*
4. Salve como **PNG** em `images/aulas/` com o nome indicado e me avise. Eu converto para WebP e ponho no app. A legenda já está escrita (em `data/imagens.js`), com áudio em cada palavra.

## Prompts

### Die Wohnungsanzeige — `licao-n-wohnungsanzeige.png` (estilo A)
```
Didactic diagram: a top-down architectural floor plan of ONE small rental apartment, as a clean flat vector illustration.

Layout (seen exactly from above; walls as thick navy #0e1525 lines; door openings as gaps with a thin quarter-circle door-swing arc; windows as gaps with two thin parallel lines on the outer walls):
- Space 1, bottom-left, the largest room: the living room. Fill it with soft orange (#ff8a3d at about 35% opacity). Inside, simple top-view furniture icons in navy outline: a three-seat sofa against the wall, a small coffee table, a low TV cabinet on the opposite wall.
- Space 2, top-left: the bedroom. Same soft orange fill as space 1. Inside, top-view icons: a double bed with two pillows, a wardrobe against the wall, one small nightstand.
- Space 3, top-right: the kitchen. Light gray fill (#d9dee5). Top-view icons along one wall: a counter with a sink and a four-burner stove, and a fridge.
- Space 4, middle-right, small: the bathroom. Light gray fill. Top-view icons: toilet, washbasin and a square shower tray.
- Space 5, bottom-right, narrow: the entrance hallway that connects all four rooms. Light gray fill. The apartment's front door is on its outer wall, drawn as a door gap with a swing arc.
- Space 6: a small balcony attached to the OUTSIDE of the living room's bottom wall, drawn with a dashed navy outline and a white fill, reached through a door from the living room.

Numbering: a navy circle (white number inside, all circles the same size) in the center of each space: 1 living room, 2 bedroom, 3 kitchen, 4 bathroom, 5 hallway, 6 balcony.

Important: ONLY spaces 1 and 2 are orange. Kitchen, bathroom and hallway must be gray. The two orange rooms should clearly look like the two biggest "real rooms" of the flat.

Style: plain off-white background (#f5f9fc), the plan centered and filling about 80% of the image, very subtle shadow under the plan. No textures, no people, no plants, no compass, no measurements, no dimension lines, no scale bar, no letters or words anywhere. The only characters allowed are the numbers 1 to 6 inside the circles. Landscape 3:2 (1536x1024).
```
**Conferir antes de salvar:** só a sala (1) e o quarto (2) estão em laranja; a cozinha (3), o banheiro (4) e o corredor (5) estão em cinza; há exatamente os números 1 a 6; nenhuma palavra nem medida.
**Legenda (já no app):** Só 1 e 2, em laranja, contam como **Zimmer**: esta é uma **Zwei-Zimmer-Wohnung**, com sala e um quarto. 3 **die Küche** · 4 **das Bad** · 5 **der Flur** · 6 **der Balkon** não entram na conta.

### Die Wohnungsanzeige (detalhe) — `licao-n-wohnungsanzeige-b.png` (estilo A)
```
Didactic diagram, two side-by-side panels of the SAME empty rental kitchen room, seen from the doorway at eye level, in clean flat vector style. Both panels: identical room shape, a window on the back wall, plain light gray floor, white walls, same viewpoint and same size.

LEFT panel (number 1): the kitchen as it is handed over in many German rental apartments, completely EMPTY. On the back wall only: a short strip of white wall tiles, two capped water pipes sticking out of the wall, a capped drain pipe below them, one electrical junction box for a stove with loose cable ends, and two wall sockets. No cabinets, no sink, no stove, no fridge, no furniture at all. Highlight the pipes and the junction box with a thin orange outline (#ff8a3d).

RIGHT panel (number 2): the same room with a complete fitted kitchen installed along the back wall: lower cabinets with a continuous countertop, a sink with tap exactly where the pipes were, a built-in stove with oven where the junction box was, upper wall cabinets, and a tall fridge cabinet at the end. Cabinets in a simple light teal tone (#1aa3a3 at about 40%) so the new kitchen stands out.

A thin vertical divider line between the panels. A navy circle with a white number at the top-left corner of each panel: 1 left, 2 right.

Style: plain off-white background (#f5f9fc) around the panels, navy outlines (#0e1525), no textures, no people, no brands, no letters or words anywhere; the only characters allowed are the circled numbers 1 and 2. Landscape 3:2 (1536x1024).
```
**Conferir antes de salvar:** o painel 1 está realmente vazio (só canos, caixa elétrica e tomadas); o painel 2 é o mesmo cômodo, com a cozinha montada; nenhuma marca nem palavra.
**Legenda (já no app):** 1 Muitos apartamentos alugados na Alemanha vêm sem cozinha: só os canos e as tomadas na parede. 2 Com **Einbauküche** (**EBK** no anúncio), armários, pia e fogão já estão lá.

### Am Bahnhof und am Flughafen — `licao-n-bahnhof.png` (estilo A)
```
Didactic diagram of a German railway platform, clean flat vector, seen from a slightly elevated three-quarter view looking along the tracks, so the layout is easy to read.

In the center: ONE long island platform (a raised concrete strip), filled with soft teal (#1aa3a3 at about 40%), with a simple flat roof canopy on a row of thin pillars, two plain benches and two small standing figures waiting (simple geometric people, no faces). Along both long edges of the platform, a thin white safety line.

On EACH side of the platform runs ONE railway track: two steel rails on wooden sleepers and gravel, outlined in orange (#ff8a3d) so both tracks clearly stand out from the platform. On the LEFT track stands a modern red-and-white regional train with its doors open toward the platform. The RIGHT track is empty.

Above each platform edge, hanging from the canopy, a small square sign plate facing the viewer, one for each track. These sign plates must be completely BLANK (plain white squares with a navy border): no numbers, no letters, no symbols on them.

Numbering with navy circles (white number inside), placed clearly next to what they mark: circle 1 on the teal platform surface between the two waiting people; circle 2 on the gravel next to the left track; circle 3 on the gravel next to the right track.

Style: plain off-white sky and background (#f5f9fc), no station building, no city, no clock, no departure board with text, no brands or logos on the train, no letters or words anywhere. The only characters allowed are the circled numbers 1, 2 and 3. Landscape 3:2 (1536x1024).
```
**Conferir antes de salvar:** a plataforma (1) está no meio, entre dois trilhos (2 e 3); as placas penduradas estão em branco; o trem não tem marca nem letreiro.
**Legenda (já no app):** 1 **der Bahnsteig**: onde você espera o trem. 2 e 3 **das Gleis**: os trilhos, cada um com o seu número. O painel diz o número do Gleis (**Der Zug fährt von Gleis 7.**), e cada Bahnsteig fica entre dois Gleise.

### Schilder und Zettel — `licao-n-schilder.png` (estilo A)
```
Didactic diagram, two side-by-side panels showing the SAME single glass entrance door of a shop, in clean flat vector style, seen from a slightly elevated three-quarter angle so the floor in front of the door is visible. Same door, same size, same angle in both panels. Each door has a navy metal frame and a large glass pane; the glass is completely blank (no stickers, no signs, no letters).

LEFT panel (number 1), PULL: the door has a vertical bar handle. A simple stylized hand and forearm (geometric, cut off at the shoulder, no face) grips the bar and pulls. The door is half open TOWARD the viewer. On the floor, a dashed navy quarter-circle shows the door's swing path on the viewer's side, and a thick curved orange arrow (#ff8a3d) points from the door toward the viewer.

RIGHT panel (number 2), PUSH: instead of a bar, the door has a flat rectangular metal push plate. An open palm presses flat against the plate. The door is half open AWAY from the viewer, into the shop. On the floor, a dashed navy quarter-circle shows the swing path on the FAR side of the door, and a thick straight teal arrow (#1aa3a3) points from the hand away from the viewer into the door.

A thin vertical divider between the panels. A navy circle with a white number at the top-left corner of each panel: 1 left, 2 right.

Style: plain off-white background (#f5f9fc), navy outlines (#0e1525), no shop interior details, no brands, no letters, words or symbols on the doors, no other text. The only characters allowed are the circled numbers 1 and 2. Landscape 3:2 (1536x1024).
```
**Conferir antes de salvar:** no painel 1 a porta abre **para fora**, na direção de quem olha; no painel 2 abre **para dentro**, longe de quem olha; não há nenhuma palavra no vidro.
**Legenda (já no app):** 1 **ziehen**: puxar, a porta vem na sua direção. 2 **drücken**: empurrar, a porta vai para longe de você. É o que está escrito nas portas alemãs.
