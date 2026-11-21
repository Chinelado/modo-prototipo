# MODO · Arquitetura integrada v1

**Data:** 20/11/2026 · **Base:** Documento-mestre v1.0, Dossiê consolidado v1 e **inspeção direta do código** do Deutsch-Trilha (o inventário anterior foi feito só por telas).
**Status de cada decisão:** ✅ Confirmado (já decidido pela direção) · 🟡 Proposta (recomendação desta análise) · 🔴 A validar (precisa de aprovação antes de construir).

---

## 0. Leitura crítica do documento-mestre

### O que está sólido
- Arquitetura comum (CEFR A1–C2) com currículo próprio por idioma. ✅
- A Trilha como identidade visual do produto, e não uma lista. ✅ Ela já existe no código (mapa com blocos isométricos, checkpoints e estados) e o protótipo da fase 1 a preservou.
- XP separado de proficiência, e nenhuma equivalência de exame inventada. ✅
- Sem vídeo na primeira versão. ✅ A base atual é texto, áudio, ilustrações didáticas e interação.

### O que precisa de ajuste
1. **O motor atual gera os exercícios, ele não os guarda.** O modelo de dados proposto trata a atividade (Activity) como um registro escrito à mão. No Deutsch-Trilha, os 8 formatos são **montados na hora** a partir dos dados da lição: vocabulário, exemplos, diálogos, lacunas e frase desmontada. Isso é o maior ativo técnico do projeto. Uma lição de inglês escrita com os mesmos campos ganha os exercícios de graça. O modelo precisa ter os dois tipos: atividade **gerada** (modelo + parâmetros) e atividade **escrita à mão**. 🟡
2. **Competências comunicativas × conhecimento linguístico.** O CEFR separa as atividades comunicativas (Listening, Reading, Speaking, Writing, Interaction, Mediation) das competências linguísticas (vocabulário, gramática, pronúncia). Boa parte dos exercícios atuais mede conhecimento, não uma habilidade. O Perfil deve mostrar os dois blocos separados, para não chamar de "Speaking" o que é escolher uma palavra. ✅ *(20/11/2026)*
3. **Mediation não tem evidência hoje.** Há uma única lição sobre mediação (C2). A competência não deve aparecer no Perfil até existirem atividades que a avaliem; o mesmo vale para Interaction. ✅ *(20/11/2026)*
4. **"Currículo" como área própria repete o Aprender.** Decidido: Currículo é uma **visão dentro de Aprender** (a árvore Idioma → Nível → Módulo → Lição), e Certificações é um destino contextual (a partir do nível e das lições de preparação). A navegação fica em seis itens. ✅ *(20/11/2026)*
5. **Quatro níveis de conteúdo são demais para o alemão atual.** O código tem Nível → Semana (6 lições + checkpoint) → Lição → Exercício. Criar "Unidades" artificiais só para preencher a hierarquia não tem ganho pedagógico. Decidido: **Módulo = semana**, e o checkpoint é a avaliação do módulo. O modelo prevê Unidade, mas ela é **invisível** para o aluno (1:1 com o módulo) enquanto o conteúdo não pedir outra coisa. Nenhuma lição muda de lugar. ✅ *(20/11/2026)*
6. **O nível "A2" mostrado ao aluno hoje é posição na trilha, não proficiência.** A interface deve chamar de "Trilha: A2" e reservar "nível estimado por competência" para quando houver evidência. 🟡

---

## 1. Mapa do produto

```
MODO
├── Hoje ............. próxima ação, missão do dia, indicadores, sugestão baseada em dados, explorar
├── Aprender
│   ├── Trilha ....... mapa visual por nível (A1–C2), blocos, checkpoints, resumo da etapa
│   ├── Módulo ....... objetivos can-do, lições, vocabulário, checkpoint, progresso
│   ├── Lição ........ contexto → objetivo → explicação → exemplos → vocabulário → prática → feedback → conclusão
│   ├── Comece aqui .. 17 aulas de introdução (como estudar, sons, primeiras frases, como a língua funciona)
│   ├── Currículo .... árvore navegável (aba de Aprender, não item do menu)                     ✅
│   └── Nivelamento .. teste de posição (não é certificação)
├── Praticar ......... por foco: cartas, misto, gramática, vocabulário, escuta, fala, conversa e escrita, leitura
├── Explorar ......... Pockets (situações reais), textos longos, conteúdos externos, por tema e nível
├── Cartas ........... revisão espaçada (atalho global no computador; dentro de Praticar no celular)
├── Perfil ........... evolução (competências + conhecimento), conquistas, estatísticas, ajustes
└── Certificações .... destino contextual: resumo de cada nível da Trilha e Perfil;               ✅
                       só entra quando cada exame tiver ficha com fonte oficial
Sistema: conta e sincronização, áudio e offline, tema claro/escuro, sons, fala, idioma ativo
```

## 2. Arquitetura de informação

| Área | Pergunta do aluno | Conteúdo principal | Computador | Celular |
|---|---|---|---|---|
| Hoje | O que eu faço agora? | próxima lição, missão, sugestão | lateral | barra inferior |
| Aprender | Onde estou na jornada? | Trilha, módulo, lição, Comece aqui | lateral | barra inferior |
| Praticar | Como reforço? | sessões curtas por foco | lateral | barra inferior |
| Explorar | Como uso na vida real? | Pockets, textos, conteúdos | lateral | barra inferior |
| Cartas | O que revisar? | fila de revisão | lateral | dentro de Praticar + atalho na Home ✅ |

- **Celular:** barra inferior com 5 itens (Hoje, Aprender, Praticar, Explorar, Perfil). As Cartas ficam no topo de Praticar e aparecem como atalho na Home quando há cartas vencidas. ✅ *(20/11/2026)*
| Perfil | Como estou evoluindo? | competências, histórico, ajustes | lateral | barra inferior |

- **Idioma ativo** fica sempre visível (lateral no computador, cabeçalho no celular). Trocar de idioma muda todo o contexto: trilha, cartas, prática e perfil. 🟡
- **Tablet (1024 px):** lateral recolhida só com ícones e conteúdo em duas colunas. 🟡

## 3. Arquitetura pedagógica

### 3.1 Hierarquia
`Idioma → Nível CEFR → Módulo → (Unidade, invisível no alemão) → Lição → Atividade → Avaliação` ✅

O aluno navega **Trilha → Módulo → Lição**. A Unidade existe só no modelo de dados.

| Nível MODO | Alemão hoje | Função pedagógica |
|---|---|---|
| Módulo | Semana (6 lições) | tema comunicativo + objetivos can-do |
| Avaliação do módulo | Checkpoint semanal (18 exercícios mistos) | consolidação e evidência por competência |
| Lição | Dia | um objetivo observável |
| Atividade | Exercício (gerado ou escrito) | prática de uma competência |

### 3.2 A lição em 8 etapas, comparada ao que já existe

| Etapa | Existe hoje? | Onde |
|---|---|---|
| 1. Contextualização | Parcial | diálogo da lição; nos Pockets, a "cena" |
| 2. Objetivo can-do | **Não** | lacuna principal: escrever um objetivo observável para cada uma das 210 lições |
| 3. Explicação | Sim | 210 aulas escritas passo a passo + 275 esquemas visuais + comparação com o português |
| 4. Exemplos | Sim | 1.338 frases-exemplo e 840 falas de diálogo, todas com áudio |
| 5. Vocabulário | Sim | 3.120 palavras + 763 palavras de apoio, com áudio e cor de gênero |
| 6. Prática | Sim | 14 exercícios por lição em 8 formatos + fala + 7 componentes interativos |
| 7. Feedback | Sim | erro com o "porquê", respostas alternativas aceitas, nova tentativa no fim |
| 8. Conclusão | Parcial | estrelas, XP e tarefa de casa; faltam as competências praticadas e a recomendação |

**Objetivos "consigo…" — decidido em 20/11/2026** ✅
- **Granularidade:** 1 objetivo por lição (210) e, para cada módulo, um **nome curto** + 3 a 4 objetivos que resumem os das suas lições (35 módulos).
- **Referência:** inspirados nos **descritores ilustrativos do Quadro Europeu (versão 2020)** do nível da lição, reescritos em português simples. Cada objetivo guarda o descritor que o inspirou, para revisão. Nada de equivalência inventada: se nenhum descritor se aplica, o objetivo é marcado assim.
- **Formato:** "Consigo + ação observável + contexto" (ex.: *Consigo dizer o que eu acho sobre um tema do dia a dia usando „Ich glaube, dass …“*).
- **Autoria:** rascunho em lote feito pelo Claude, começando por um **piloto do A1** (18 lições + 3 módulos); a direção revisa o piloto antes do resto. Revisão por professor de alemão antes de publicar.
- **Uso:** o objetivo abre a lição (etapa 2) e aparece na tela de Módulo. Na conclusão, **autoavaliação** "Já consigo / Ainda não", guardada à parte: **não entra** no acerto das competências.
- **Modelo de dados:** `LessonObjective { lesson_id, texto, descritor_ref, status: rascunho | revisado | aprovado }`; `Module.nome`; `SelfAssessment { user, lesson_id, resposta, data }`.

### 3.3 Biblioteca de exercícios (16 tipos do documento × motor atual)

| Tipo pedido | Situação | Observação |
|---|---|---|
| Múltipla escolha | ✅ existe | regra, função na frase, gênero, intruso |
| Verdadeiro ou falso | ❌ falta | simples de gerar a partir dos exemplos |
| Associação de palavras | ✅ existe | memória de pares, ligar pares no guia |
| Associação de imagens | ❌ falta | depende de imagens didáticas por palavra (custo alto) |
| Ordenação de frases | ✅ existe | montar a frase; trem do vagão 2 |
| Construção de frases | ✅ existe | trem; frase livre com regra de estrutura |
| Lacunas | ✅ existe | 630 lacunas, digitadas ou de escolha |
| Tradução contextualizada | 🟡 parcial | hoje só palavra a palavra |
| Compreensão de áudio | ✅ existe | ouça e escolha; textos de escuta |
| Identificação de pronúncia | 🟡 parcial | só no guia (schön/schon) |
| Resposta escrita | ✅ existe | frase livre conferida pela estrutura |
| Interpretação de texto | ✅ existe | 35 textos longos, 145 perguntas |
| Diálogos interativos | ✅ existe | escolha da resposta numa conversa |
| Simulações de situações reais | 🟡 parcial | 35 Pockets (falta interação ramificada) |
| Revisão de vocabulário | ✅ existe | cartas com revisão espaçada |
| Desafios integradores | 🟡 parcial | checkpoints e o desafio final do guia |
| *(além do pedido)* Fala avaliada | ✅ existe | reconhecimento de voz com correção palavra por palavra |
| *(além do pedido)* Componentes interativos | ✅ existe | relógio, gata e caixote, linha do tempo, declinação, carta oficial, medidor de certeza |

### 3.4 Competências: como cada formato vira evidência 🟡

| Formato | Competência comunicativa | Conhecimento linguístico |
|---|---|---|
| Ouça e escolha, textos de escuta | Listening | — |
| Textos longos com perguntas | Reading | — |
| Fale a frase | Speaking (inteligibilidade) | Pronúncia |
| Frase livre | Writing | Gramática |
| Diálogo (escolher a resposta) | conta como Reading (compreensão de diálogo) | — |
| Lacunas, montar frase, regra | — | Gramática |
| Pares, classificar, resposta rápida, cartas | — | Vocabulário |

**Decidido em 20/11/2026** ✅
- **Inteligências múltiplas ficam só no motor.** Continuam escolhendo os formatos por trás, sem aparecer para o aluno. O Perfil mostra competências.
- **Medida = acerto + volume.** Cada competência mostra a taxa de acerto recente e quantas respostas a sustentam. Não há nível A1–C2 por competência enquanto os exercícios não forem calibrados para isso.
- **Evidência mínima:** a competência aparece com número a partir de **20 respostas no total**; a taxa usa as **30 respostas mais recentes**. Abaixo disso: "ainda sem dados suficientes (8 de 20)".
- **Interaction e Mediation ficam fora do Perfil** até existirem atividades que as avaliem (conversa com resposta aberta ou falada; tarefas de mediação). Os diálogos de escolha contam para Reading.
- **Blocos do Perfil:** *Competências comunicativas* (Listening, Reading, Speaking, Writing) e *Conhecimento linguístico* (Vocabulário, Gramática, Pronúncia).
- **Consequência técnica:** "as 30 mais recentes" exige guardar cada resposta (ActivityAttempt), não só os totais por formato de hoje.

### 3.5 Avaliação
- **Nivelamento:** posiciona o aluno na trilha (já existe, adaptativo, 6 perguntas por nível). Não é certificação. ✅
- **Checkpoint de módulo:** evidência por competência + recomendação de revisão. 🟡
- **Simulados de exame:** só depois do levantamento oficial de cada exame (seção 9 do dossiê). 🔴

## 4. Modelo de dados conceitual

A proposta do documento é boa. Os ajustes abaixo vêm do que o código real exige.

| Ajuste | Por quê |
|---|---|
| **IDs estáveis e legíveis** (`de.a2.m05.l04`, `de.a2.m05.l04.v07`) | hoje o progresso fica guardado pela posição (dia 34, palavra 4 da lição 7). Inserir ou reordenar uma lição quebra o progresso de quem já estuda |
| **ContentVersion** em Lesson, VocabularyItem e Activity | corrigir uma lição não pode apagar o histórico de quem já a fez |
| **ActivityTemplate** (gerador + parâmetros) ao lado de Activity (escrita à mão) | preserva o motor gerativo, que é o que torna o inglês viável |
| **LanguagePack** (por idioma) | normalização de texto, respostas alternativas, regras de frase, vozes, reconhecimento de fala, cores de gênero (alemão), contrações (inglês) |
| **Proficiência separada da posição:** `UserLanguage.trail_position` × `SkillProgress.estimated_level` | evita confundir "estou no A2 da trilha" com "falo A2" |
| **ActivityAttempt** registra tentativa a tentativa | hoje só há totais por formato; sem histórico não há evidência por competência. O histórico começa a contar a partir da migração |
| **ReviewSchedule** com o algoritmo versionado | o algoritmo atual (estilo SM-2: facilidade 2,3, intervalos crescentes) precisa ficar registrado para trocar sem perder agendas |

**Entidades (resumo):** Language, LanguagePack, CEFRLevel, Module, Unit (opcional), Lesson, LessonObjective (can-do), Activity / ActivityTemplate, VocabularyItem, GrammarTopic, MediaAsset (áudio com voz e texto falado), ExamFamily / ExamReference (fonte e data de verificação) · User, UserLanguage, UserProgress, ActivityAttempt, SkillProgress, VocabularyReview, Achievement, UserAchievement, StudySession.

**Migração do estado atual de cada aluno:**

| Hoje (navegador e nuvem) | MODO |
|---|---|
| `S.done[dia]` | UserProgress(lesson_id, status, data, estrelas) |
| `S.cards["lição:palavra"]` | VocabularyReview(vocabulary_item_id, agenda) |
| `S.stats[formato]` (só totais) | semente de SkillProgress marcada como "histórico agregado" |
| `S.time`, `S.daily`, sequência | StudySession / métricas motivacionais |
| `S.badges`, `S.guide`, `S.hw`, `S.pockets`, `S.reads`, `S.seen` | UserAchievement e conclusões de conteúdo |

## 5. Fluxos principais

1. **Primeiro acesso:** boas-vindas → idioma (só os disponíveis; os demais "em breve") → nível (do zero → Comece aqui; já sei → nivelamento) → nome e meta → Hoje. *(já no protótipo)*
2. **Retomar:** Hoje → "Continuar a lição" → etapas → exercícios → conclusão (competências praticadas + revisão sugerida) → Hoje atualizado.
3. **Concluir um módulo:** 6ª lição → checkpoint → resultado por competência → marco na trilha → próximo módulo.
4. **Praticar:** Praticar → foco → sessão curta (10 tarefas) → resumo com dificuldades e próxima ação.
5. **Revisar:** Hoje ou Praticar → Cartas → frente, lembrar, verso, autoavaliação → resumo.
6. **Explorar:** Explorar → tema/nível → Pocket → cena, vocabulário com áudio, diálogo, teste → salvar frases nas cartas.
7. **Trocar de idioma:** seletor → contexto inteiro muda; o progresso de cada idioma é independente.
8. **Entender a evolução:** Perfil → competências (com ou sem evidência) → histórico → conquistas em segundo plano.

## 6. Hoje, Trilha, Módulo e Lição

- **Hoje** sempre aponta para **um** item da Trilha: a próxima lição ou o checkpoint, com a mesma posição ("A2 · Módulo 5 · Lição 34").
- **Trilha** é o mapa do nível: blocos = lições, marcos = checkpoints, faixa do nível = progresso. Tocar num bloco abre a lição; tocar no marco do módulo abre o **interior do módulo**.
- **Módulo** (= semana; nova tela ✅): objetivos can-do, as 6 lições com estado, vocabulário do módulo, checkpoint e "o que revisar".
- **Lição** termina devolvendo o aluno à Trilha com o bloco seguinte destacado.

## 7. Aprender, Praticar, Explorar e Cartas

```
Aprender (sequência guiada) ──gera──▶ vocabulário ──▶ Cartas (retenção)
     │                                                 ▲
     └──libera conteúdo──▶ Praticar (reforço por foco) ┤ dificuldades viram sugestões
                                                       │
Explorar (situações reais) ──"pôr nas cartas"──────────┘
```
- Praticar só usa o que o aluno **já estudou** (lições concluídas). Explorar é livre, filtrado pelo nível.
- A sugestão da Home liga as quatro áreas: cartas vencidas → Cartas; formato com menor acerto → a prática correspondente. *(já no protótipo, com dados reais)*

## 8. Estratégia do Inglês A1

1. **Decisões antes de escrever conteúdo:** 🔴 variante (americano ou britânico, que define a voz, a ortografia e o reconhecimento de fala); objetivos do A1 por competência; revisão pedagógica por professor de inglês.
2. **Pacote de idioma inglês:** contrações (I'm = I am) e respostas alternativas; regras de frase do inglês (be, presente simples com -s na 3ª pessoa, do/does); sem cores de gênero; vozes e reconhecimento de fala em inglês; guia de sons (th, schwa, vogais longas e curtas).
3. **Piloto de um módulo**, não o A1 inteiro: "Primeiros contatos" com 6 lições + checkpoint, escritas no **mesmo formato** das lições alemãs (vocabulário, exemplos, diálogo, lacunas, frase desmontada, aula, esquema). O motor gera os 14 exercícios de cada lição.
4. **Teste com 5 a 7 adultos** antes de escrever os outros módulos.
5. **Depois:** os 8 módulos do A1 propostos no dossiê, com objetivos can-do.

*Custo principal:* autoria e revisão de conteúdo (e áudio), não código. O código novo fica no pacote de idioma.

## 9. Estratégia de migração do Alemão

### 9.1 Inventário real (código, 20/11/2026)

| Ativo | Quantidade |
|---|---|
| Lições | 210 (35 semanas): A1 18 · A2 24 · B1 36 · B2 72 · C1 36 · C2 24 |
| Aulas escritas passo a passo | 210 |
| Esquemas visuais | 275 (mais 7 componentes interativos) |
| Vocabulário | 3.120 palavras + 763 de apoio |
| Frases-exemplo / falas de diálogo | 1.338 / 840 |
| Lacunas | 630 (com respostas alternativas) |
| Frases desmontadas (função de cada palavra) | 210 |
| Tarefas de casa específicas | 210 |
| Comece aqui / glossário | 17 aulas / 33 termos |
| Textos longos | 35 (145 perguntas de compreensão) |
| Pockets (situações reais) | 35 |
| Conteúdos externos curados | 97 |
| Áudios gravados (ElevenLabs, 4 vozes) | 11.219 |
| Sistemas | revisão espaçada, nivelamento adaptativo, fala, login e nuvem (Supabase), offline por nível, tema claro/escuro, sons |

### 9.2 Achados que mudam a prioridade
- **O A1 e o A2 são finos** (42 lições juntos) e o B2 é o maior nível (72). Para o público prioritário (adultos iniciantes), o primeiro trabalho de conteúdo alemão é **ampliar o A1–A2**, e não reorganizar o B2. 🔴
- **Falta o objetivo can-do** nas 210 lições e o nome dos 35 módulos: rascunho em lote a partir dos descritores do Quadro Europeu, piloto no A1, com revisão humana (ver 3.2). ✅ *(20/11/2026)*
- O código específico do alemão (cores de gênero, regras de frase, respostas alternativas) vira o **pacote de idioma alemão**, sem mudança pedagógica.

### 9.3 Passos
1. Congelar **IDs estáveis** para tudo o que existe hoje. 2. Escrever a **migração do progresso** (navegador e nuvem) e testá-la com cópias reais. 3. Mapear semana → módulo e checkpoint → avaliação do módulo. 4. Redigir os objetivos can-do. 5. Separar o pacote de idioma alemão. 6. Aplicar a camada MODO (fase 1 já prototipada). 7. Teste com usuários. 8. Liberar por etapas, com o Deutsch-Trilha ativo até a migração estar validada.

## 10. Plano de evolução

O roadmap do documento-mestre começa pelas fases 2 a 5 (Home, Trilha, motor, cartas, Explorar), mas **para o alemão isso já existe**. A ordem recomendada usa esse fato:

| Etapa | Entrega | Critério para seguir |
|---|---|---|
| A. Fundação de dados | IDs estáveis, versões de conteúdo, migração de progresso, pacote de idioma | progresso de 100% dos usuários de teste migrado sem perda |
| B. Experiência MODO (alemão) | protótipo da fase 1 + Módulo, Perfil por competência e conclusão de lição completos | teste com 5–7 adultos: achar a próxima ação, praticar, revisar e explicar o próprio progresso |
| C. Conteúdo alemão | ampliar o A1–A2, objetivos can-do, auditoria pedagógica | revisão por especialista |
| D. Inglês piloto | 1 módulo A1 completo com áudio | teste com usuários + revisão pedagógica |
| E. Inglês A1 completo | 8 módulos | evidência de aprendizagem nos checkpoints |
| F. Certificações | fichas por exame com fonte oficial; simulados | cada relação com o CEFR documentada |
| G. Novos idiomas | mais um pacote de idioma | arquitetura reutilizada sem mudança estrutural |

## 11. Decisões pendentes

| # | Decisão | Quem decide |
|---|---|---|
| 1 | ~~Inteligências múltiplas saem do Perfil e do motor?~~ ✅ Ficam só no motor; o Perfil mostra competências (20/11/2026) | Produto + pedagogia |
| 2 | ~~Currículo e Certificações: áreas próprias ou destinos contextuais~~ ✅ Currículo = aba de Aprender; Certificações = destino contextual (20/11/2026) | Produto + UX |
| 3 | ~~Unidade opcional no alemão~~ ✅ Módulo = semana, Unidade invisível; Cartas no celular dentro de Praticar + atalho na Home (20/11/2026) | Pedagogia |
| 4 | ~~Evidência mínima para mostrar uma competência~~ ✅ 20 respostas no total, taxa das 30 últimas; acerto + volume, sem nível por competência; Interaction e Mediation fora (20/11/2026) | Pedagogia |
| 5 | Variante do inglês e idioma de interface | Produto |
| 6 | ~~Ampliar o A1–A2 alemão~~ ✅ A1 6 módulos, A2 8 (84 lições); sequência redesenhada reaproveitando as atuais; lição "Ler e escrever" em todo módulo; inserção direta no protótipo. Proposta de sequência em `A1-A2-redesenho.md` (20/11/2026). **Alunos que já estudavam:** as lições novas inseridas antes do ponto onde pararam são **obrigatórias** (a trilha volta para a primeira lição nova; o que já foi feito continua feito e aberto) (20/11/2026) | Produto + pedagogia |
| 7 | Tokens finais (com os tons de texto acessíveis do protótipo) e cores de gênero | Design |
| 8 | Infraestrutura: manter o app estático + Supabase ou adotar um back-end com API de conteúdo | Arquitetura |
| 9 | Algoritmo de revisão espaçada (manter o atual ou adotar outro, como FSRS) | Pedagogia + engenharia |
| 10 | ~~Objetivos "consigo…"~~ ✅ Lição + módulo (com nome), base nos descritores do Quadro Europeu 2020, piloto A1 revisado pela direção, autoavaliação no fim da lição fora do acerto (20/11/2026) | Pedagogia |
