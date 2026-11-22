// Espanhol · B2 · Módulo 25 · Será que … (Probabilidade e dedução). Formato de es/curso.js.

NL('es-sera', {
  de: '¿Dónde estará?', pt: 'O futuro de probabilidade', gt: 'futuro simples para suposições sobre o presente: estará, serán, tendrá',
  gx: 'Em espanhol, o futuro simples também serve para supor algo sobre o presente: ¿Dónde estará Ana? (onde será que a Ana está?) · Estará en el tráfico (deve estar no trânsito). ¿Qué hora es? · Serán las ocho (devem ser umas oito). É o nosso "será que …?" e "deve estar".',
  ge: '¿Dónde estará Ana? Ya son las nueve.=Onde será que a Ana está? Já são nove horas.|Estará en el tráfico.=Deve estar no trânsito.|No sé qué hora es; serán las ocho.=Não sei que horas são; devem ser umas oito.',
  v: 'estará=deve estar=📍|serán=devem ser=🕗|tendrá=deve ter=🫴|será que=será que=🤔|suponer=supor=💭|suposición=suposição=❓|probablemente=provavelmente=📊|tráfico=trânsito=🚗|cansado=cansado=😴|ocupado=ocupado=📵',
  x: 'llegar tarde=chegar atrasado|contestar=atender, responder|batería=bateria|dormido=dormindo|enfermo=doente|enojado=bravo|de viaje=viajando|en una reunión=numa reunião|sin señal=sem sinal|costar=custar',
  dlg: 'Ana no contesta el teléfono.=A Ana não atende o telefone.|Estará en una reunión, o tendrá el celular sin batería.=Deve estar numa reunião, ou deve estar com o celular sem bateria.|¿Y por qué no avisó?=E por que não avisou?|No sé. Tendrá sus razones.=Não sei. Deve ter os motivos dela.',
  cz: '¿Dónde ___ Ana? (será que está)=estará=está=esté|No sé qué hora es; ___ las ocho. (devem ser)=serán=son=sean|___ el celular sin batería. (deve ter, ela)=Tendrá=Tiene=Tenga',
  whys: 'suposição sobre o presente: futuro|suposição: serán|suposição: tendrá',
  pts: 'Futuro simples para supor algo sobre o agora: Estará en casa (= probablemente está en casa).|Pergunta de dúvida: ¿Dónde estará? ¿Quién será? ¿Qué hora será? (= será que …?).|Resposta de suposição: Serán las ocho. Tendrá unos cuarenta años. Costará unos cien dólares.|É muito usado na fala; o contexto mostra se é futuro de verdade ou suposição.',
  ex: '¿Quién será a estas horas?=Quem será a esta hora?|Tendrá unos cuarenta años.=Deve ter uns quarenta anos.|Costará unos cien dólares.=Deve custar uns cem dólares.|Estará cansada después del viaje.=Deve estar cansada depois da viagem.',
  bd: ['¿Dónde=Q|estará=V^futuro: suposição sobre o presente|Ana?=S', 'Onde será que a Ana está?'],
  rule: 'futuro_prob',
  hw: 'Olhe fotos de pessoas desconhecidas (ou pense em vizinhos) e faça seis suposições com o futuro: Tendrá unos … años, Será …, Estará …, Vivirá …',
  deep: `
Hoje começa o módulo da **probabilidade**. Você aprende um uso do futuro que o português quase não tem: **supor**.
# Passo 1: supor com o futuro
@ V:Fato ou suposição?;Fato (presente)|Está en casa.;Suposição (futuro)|Estará en casa.
~ Estará en el tráfico. = Deve estar no trânsito.
~ Estará cansada después del viaje. = Deve estar cansada depois da viagem.
BR O nosso "**deve estar**" e "**será que** está?" viram simplesmente **estará** em espanhol. É curto e muito natural.
# Passo 2: a pergunta de dúvida
| Em espanhol | Em português |
| ¿Dónde estará? | Onde será que está? |
| ¿Quién será? | Quem será? |
| ¿Qué hora será? | Que horas serão? |
~ ¿Dónde estará Ana? Ya son las nueve. = Onde será que a Ana está? Já são nove horas.
~ ¿Quién será a estas horas? = Quem será a esta hora?
# Passo 3: números aproximados
@ P:Suposições;Idade=Tendrá unos cuarenta años.;Hora=Serán las ocho.;Preço=Costará unos cien dólares.
~ Tendrá unos cuarenta años. = Deve ter uns quarenta anos.
~ No sé qué hora es; serán las ocho. = Não sei que horas são; devem ser umas oito.
# Passo 4: futuro ou suposição?
| Frase | Sentido |
| Mañana estará en Lima. | futuro (vai estar) |
| Ahora estará en Lima. | suposição (deve estar) |
~ Costará unos cien dólares. = Deve custar uns cem dólares.
! O que decide é o **tempo de referência**: com **ahora** ou sem marcador futuro, o futuro simples é suposição sobre o presente.
> Treine agora: um amigo não respondeu a sua mensagem. Faça três suposições com o futuro.
? "Deve estar no trânsito": || Estará en el tráfico.
? "Quem será?": || ¿Quién será?
? "Deve ter uns quarenta anos": || Tendrá unos cuarenta años.
`,
});

NL('es-habrasalido', {
  de: 'Habrá salido', pt: 'Supor sobre o passado recente', gt: 'futuro composto (habrá + particípio) para suposições sobre o que já aconteceu',
  gx: 'Para supor algo que já aconteceu (passado recente ou ligado ao agora), o espanhol usa o futuro composto: habrá + particípio: No contesta; habrá salido (não atende; deve ter saído). ¿Habrá llegado ya? (será que já chegou?). É o nosso "deve ter + particípio".',
  ge: 'No contesta; habrá salido.=Não atende; deve ter saído.|¿Habrá llegado ya el paquete?=Será que o pacote já chegou?|Habrán perdido el bus.=Devem ter perdido o ônibus.',
  v: 'habrá salido=deve ter saído=🚪|habrá llegado=deve ter chegado=📦|habrán perdido=devem ter perdido=🚌|se habrá olvidado=deve ter esquecido=🙈|se habrá dormido=deve ter dormido=😴|ya=já=✅|todavía no=ainda não=⏳|paquete=pacote=📦|mensaje=mensagem=💬|confundirse=se confundir=🔀',
  x: 'equivocarse de día=errar o dia|perder el bus=perder o ônibus|quedarse dormido=pegar no sono|olvidarse=esquecer-se|apagar el celular=desligar o celular|cambiar de planes=mudar de planos|enfermarse=adoecer|retrasarse=atrasar|leer=ler|recibir=receber',
  dlg: 'Pedro y Lucía no han llegado. ¿Qué les habrá pasado?=O Pedro e a Lúcia não chegaram. O que será que aconteceu com eles?|Habrán perdido el bus, o se habrán equivocado de día.=Devem ter perdido o ônibus, ou devem ter errado o dia.|¿Les escribiste?=Você escreveu para eles?|Sí, pero no lo han leído. Habrán apagado el celular.=Sim, mas não leram. Devem ter desligado o celular.',
  cz: 'No contesta; ___ salido. (deve ter)=habrá=habría=ha|¿___ llegado ya el paquete? (será que)=Habrá=Hubo=Ha de|___ perdido el bus. (devem ter, eles)=Habrán=Habrá=Han de',
  whys: 'suposição sobre o passado recente: habrá|pergunta de dúvida: habrá llegado|ellos: habrán',
  pts: 'Futuro composto = habrá (habrás, habrá, habremos, habrán) + particípio.|Suposição sobre o passado recente ou ligado ao agora: Habrá salido. Se habrá dormido. Habrán perdido el bus.|Pergunta de dúvida: ¿Qué habrá pasado? ¿Habrá llegado ya? (será que já chegou?).|Compare: Estará en casa (suposição sobre o agora) × Habrá llegado a casa (suposição sobre algo que já aconteceu).',
  ex: '¿Qué les habrá pasado?=O que será que aconteceu com eles?|Se habrá olvidado de la cita.=Deve ter esquecido o compromisso.|Ya habrá leído tu mensaje.=Já deve ter lido a sua mensagem.|Se habrá quedado dormido.=Deve ter pegado no sono.',
  bd: ['No_contesta;=V|habrá_salido.=V^futuro composto: suposição sobre o que já aconteceu', 'Não atende; deve ter saído.'],
  rule: 'futuro_comp_prob',
  hw: 'Escreva cinco situações estranhas (alguém não veio, a luz acabou, a porta está aberta…) e duas suposições para cada uma com habrá + particípio.',
  deep: `
Hoje você aprende a **supor o que já aconteceu**: o "deve ter saído", "será que já chegou?".
# Passo 1: habrá + particípio
| Pessoa | Forma |
| yo | habré salido |
| tú | habrás llegado |
| él / ella | habrá salido |
| ellos | habrán perdido |
~ No contesta; habrá salido. = Não atende; deve ter saído.
~ Habrán perdido el bus. = Devem ter perdido o ônibus.
# Passo 2: a pergunta de dúvida
@ P:Perguntas;O quê?=¿Qué habrá pasado?;Já?=¿Habrá llegado ya?;Quem?=¿Quién lo habrá hecho?
~ ¿Habrá llegado ya el paquete? = Será que o pacote já chegou?
~ ¿Qué les habrá pasado? = O que será que aconteceu com eles?
BR **¿Qué habrá pasado?** é exatamente o nosso "o que será que aconteceu?". Muito comum quando alguém se atrasa ou some.
# Passo 3: com verbos pronominais
| Em espanhol | Em português |
| se habrá olvidado | deve ter esquecido |
| se habrá quedado dormido | deve ter pegado no sono |
| se habrán equivocado | devem ter se enganado |
~ Se habrá olvidado de la cita. = Deve ter esquecido o compromisso.
~ Se habrá quedado dormido. = Deve ter pegado no sono.
# Passo 4: agora ou já aconteceu?
@ V:Suposição;Sobre o agora|Estará en casa.;Sobre o que já aconteceu|Habrá llegado a casa.
~ Ya habrá leído tu mensaje. = Já deve ter lido a sua mensagem.
! O "deve ter + particípio" de suposição é **habrá + particípio**, não "debe tener": **habrá** salido.
> Treine agora: a sua colega não veio trabalhar e não avisou. Faça três suposições.
? "Deve ter saído": || Habrá salido.
? "O que será que aconteceu?": || ¿Qué habrá pasado?
? "Deve ter esquecido": || Se habrá olvidado.
`,
});

NL('es-serian', {
  de: 'Serían las tres', pt: 'Supor sobre o passado: o condicional', gt: 'condicional de probabilidade: suposições sobre um momento passado · serían, tendría, estaría',
  gx: 'Para supor algo sobre um momento do passado, usa-se o condicional: Cuando llegué, serían las tres (quando cheguei, deviam ser umas três). ¿Cuántos años tendría? · Tendría unos veinte (devia ter uns vinte). É o mesmo jogo do futuro de probabilidade, um passo atrás no tempo.',
  ge: 'Cuando llegué, serían las tres de la mañana.=Quando cheguei, deviam ser umas três da manhã.|El ladrón tendría unos veinte años.=O ladrão devia ter uns vinte anos.|¿Por qué no vino? · Estaría enfermo.=Por que ele não veio? · Devia estar doente.',
  v: 'serían=deviam ser=🕒|tendría=devia ter=🫴|estaría=devia estar=📍|habría=devia haver=👥|testigo=testemunha=👀|ladrón=ladrão=🦹|describir=descrever=📝|aproximadamente=aproximadamente=≈|alrededor de=em torno de=🔄|unos, unas=uns, umas=≈',
  x: 'policía=polícia|denuncia=boletim de ocorrência|altura=altura|delgado=magro|gorra=boné|mochila=mochila|huir=fugir|oscuro=escuro|calle=rua|esquina=esquina',
  dlg: 'Usted vio al ladrón. ¿Cómo era?=O senhor viu o ladrão. Como ele era?|Era joven; tendría unos veinte años. Llevaba una gorra negra.=Era jovem; devia ter uns vinte anos. Usava um boné preto.|¿Y qué hora era?=E que horas eram?|Serían las diez de la noche. La calle estaría vacía.=Deviam ser umas dez da noite. A rua devia estar vazia.',
  cz: 'Cuando llegué, ___ las tres. (deviam ser)=serían=serán=eran|El ladrón ___ unos veinte años. (devia ter)=tendría=tendrá=tenía|¿Por qué no vino? · ___ enfermo. (devia estar)=Estaría=Estará=Estuvo',
  whys: 'suposição sobre o passado: condicional|idade suposta no passado: tendría|suposição: estaría',
  pts: 'Condicional para supor sobre um momento passado: Serían las tres (= probablemente eran las tres).|Idade, hora, quantidade aproximadas: Tendría unos veinte años. Habría unas cincuenta personas.|Pergunta de dúvida sobre o passado: ¿Qué hora sería? ¿Quién sería? (= que horas seriam? quem seria?).|Resumo: presente → futuro (serán); passado recente → futuro composto (habrá sido); passado → condicional (serían).',
  ex: 'Habría unas cincuenta personas en la fiesta.=Devia haver umas cinquenta pessoas na festa.|¿Quién sería aquel hombre?=Quem seria aquele homem?|La calle estaría vacía.=A rua devia estar vazia.|Mediría alrededor de un metro ochenta.=Devia medir em torno de um metro e oitenta.',
  bd: ['Cuando_llegué,=T^momento passado|serían=V^condicional: suposição sobre o passado|las_tres_de_la_mañana.=T', 'Quando cheguei, deviam ser umas três da manhã.'],
  rule: 'cond_prob',
  hw: 'Imagine que você testemunhou algo estranho ontem. Descreva a cena com seis suposições no condicional: a hora, a idade das pessoas, quantas pessoas havia, onde estariam.',
  deep: `
Hoje você aprende a **supor sobre o passado** com o condicional: um passo atrás do futuro de probabilidade.
# Passo 1: o condicional de probabilidade
@ V:Fato ou suposição?;Fato|Eran las tres.;Suposição|Serían las tres.
~ Cuando llegué, serían las tres de la mañana. = Quando cheguei, deviam ser umas três da manhã.
~ ¿Por qué no vino? · Estaría enfermo. = Por que ele não veio? · Devia estar doente.
# Passo 2: números aproximados
| Em espanhol | Em português |
| Tendría unos veinte años. | Devia ter uns vinte anos. |
| Habría unas cincuenta personas. | Devia haver umas cinquenta pessoas. |
| Mediría alrededor de un metro ochenta. | Devia medir em torno de um metro e oitenta. |
~ El ladrón tendría unos veinte años. = O ladrão devia ter uns vinte anos.
~ Habría unas cincuenta personas en la fiesta. = Devia haver umas cinquenta pessoas na festa.
# Passo 3: perguntas sobre o passado
~ ¿Quién sería aquel hombre? = Quem seria aquele homem?
~ La calle estaría vacía. = A rua devia estar vazia.
BR É o nosso "**devia** ser", "quem **seria**?". O condicional em espanhol faz o trabalho dos dois.
# Passo 4: os três tempos da suposição
@ M:Suposição;Sobre|Tempo|Exemplo;o agora|futuro|Serán las ocho.;o que já aconteceu|futuro composto|Habrá salido.;um momento passado|condicional|Serían las tres.
~ Serían las tres cuando volví. = Deviam ser umas três quando voltei.
! Fato e suposição se distinguem pelo tempo: **eran** las tres (sei) × **serían** las tres (suponho).
> Treine agora: descreva com suposições uma pessoa que você viu na rua ontem.
? "Deviam ser umas três": || Serían las tres.
? "Devia ter uns vinte anos": || Tendría unos veinte años.
? "Quem seria aquele homem?": || ¿Quién sería aquel hombre?
`,
});

NL('es-debede', {
  de: 'Debe de estar cansada', pt: 'Deber de, deber e tener que', gt: 'deber de + infinitivo (probabilidade) · deber + infinitivo (obrigação) · tener que (dedução forte)',
  gx: 'O espanhol cuidadoso distingue: deber + infinitivo = obrigação (Debes estudiar: você tem que estudar); deber de + infinitivo = probabilidade (Debe de estar cansada: deve estar cansada). Na fala, muita gente usa deber sem de para os dois. E para dedução forte: Tiene que estar en casa; la luz está encendida (só pode estar em casa).',
  ge: 'Debe de estar cansada después del viaje.=Ela deve estar cansada depois da viagem.|Debes estudiar más si quieres aprobar.=Você deve estudar mais se quiser passar.|Tiene que estar en casa: la luz está encendida.=Só pode estar em casa: a luz está acesa.',
  v: 'deber de=dever (probabilidade)=🤔|deber=dever (obrigação)=☝️|tener que=ter que; só pode=❗|deducir=deduzir=🔍|pista=pista=🧩|encendido=aceso=💡|apagado=apagado=🌑|seguro que=com certeza=✅|sin duda=sem dúvida=💯|evidente=evidente=👁️',
  x: 'luz=luz|ventana=janela|auto=carro|garaje=garagem|huellas=pegadas|charco=poça|mojado=molhado|ruido=barulho|olor=cheiro|humo=fumaça',
  dlg: '¿Está Marta en casa?=A Marta está em casa?|Tiene que estar: su auto está en el garaje.=Só pode estar: o carro dela está na garagem.|Pero no abre la puerta.=Mas não abre a porta.|Debe de estar durmiendo. Ayer llegó muy tarde.=Deve estar dormindo. Ontem chegou muito tarde.',
  cz: '___ de estar cansada. (deve, probabilidade)=Debe=Tiene=Hay|___ estudiar más. (obrigação, tú)=Debes=Debes de=Tienes de|___ que estar en casa: la luz está encendida. (dedução forte)=Tiene=Debe=Hay',
  whys: 'probabilidade: deber de|obrigação: deber|dedução forte: tener que',
  pts: 'deber de + infinitivo: probabilidade: Debe de estar cansada. Deben de ser las ocho.|deber + infinitivo: obrigação ou conselho: Debes descansar. No debes fumar aquí.|Na fala, deber sem de também se usa para probabilidade (Debe estar cansada), e a norma aceita. O contrário (deber de para obrigação) é considerado erro.|Dedução forte, quase certeza: tener que (Tiene que estar en casa) e seguro que (Seguro que está durmiendo).',
  ex: 'Deben de ser las ocho.=Devem ser umas oito.|No debes fumar aquí.=Você não deve fumar aqui.|Seguro que está durmiendo.=Com certeza está dormindo.|Ha llovido: el suelo tiene que estar mojado.=Choveu: o chão só pode estar molhado.',
  bd: ['Debe_de=V^deber de: probabilidade|estar_cansada=V|después_del_viaje.=T', 'Ela deve estar cansada depois da viagem.'],
  rule: 'deber_de',
  hw: 'Escreva oito frases: três de obrigação (debes …), três de probabilidade (debe de …) e duas de dedução forte (tiene que … / seguro que …), sobre pessoas da sua casa ou do trabalho.',
  deep: `
Hoje você aprende a diferença entre **dever** de obrigação e **dever** de probabilidade, que o espanhol cuidadoso separa com um **de**.
# Passo 1: obrigação ou probabilidade?
@ V:Dever;Obrigação (deber)|Debes estudiar más.;Probabilidade (deber de)|Debe de estar cansada.
~ Debe de estar cansada después del viaje. = Ela deve estar cansada depois da viagem.
~ Debes estudiar más si quieres aprobar. = Você deve estudar mais se quiser passar.
# Passo 2: a regra e a fala
| Uso | Norma | Na fala |
| obrigação | debes estudiar | debes estudiar |
| probabilidade | debe de estar | debe de estar / debe estar |
~ Deben de ser las ocho. = Devem ser umas oito.
~ No debes fumar aquí. = Você não deve fumar aqui.
BR Para não errar: use **deber de** só para suposições. "Debes de estudiar" (obrigação com de) é o erro que a norma condena.
# Passo 3: a dedução forte
@ P:Do mais certo ao menos;Quase certeza=Tiene que estar en casa.;Muito provável=Seguro que está durmiendo.;Provável=Debe de estar cansada.;Possível=A lo mejor salió.
~ Tiene que estar en casa: la luz está encendida. = Só pode estar em casa: a luz está acesa.
~ Seguro que está durmiendo. = Com certeza está dormindo.
# Passo 4: deduzir pelas pistas
| Pista | Dedução |
| la luz está encendida | tiene que estar en casa |
| el suelo está mojado | ha llovido / tiene que haber llovido |
~ Ha llovido: el suelo tiene que estar mojado. = Choveu: o chão só pode estar molhado.
! **tener que** aqui não é obrigação: é o nosso "**só pode** ser", a conclusão lógica a partir de uma pista.
> Treine agora: você vê fumaça saindo da janela do vizinho. Faça uma dedução forte e uma suposição.
? "Deve estar cansada" (probabilidade): || Debe de estar cansada.
? "Você deve estudar" (obrigação): || Debes estudiar.
? "Só pode estar em casa": || Tiene que estar en casa.
`,
});

NL('es-alomejor', {
  de: 'A lo mejor, quizás, puede que', pt: 'Os graus de certeza e o modo', gt: 'seguro que, seguramente + indicativo · quizás, tal vez + indicativo ou subjuntivo · a lo mejor + indicativo · puede que + subjuntivo · capaz que (Rio da Prata)',
  gx: 'Cada expressão de dúvida pede um modo: seguro que e seguramente + indicativo; a lo mejor + indicativo (sempre); puede que e es posible que + subjuntivo (sempre); quizás e tal vez aceitam os dois (o subjuntivo deixa mais dúvida). No Rio da Prata e em outros países, capaz que + subjuntivo também é "talvez".',
  ge: 'A lo mejor llueve esta tarde.=Talvez chova esta tarde.|Puede que no venga a la reunión.=Pode ser que ele não venha à reunião.|Quizás tenga razón.=Talvez ela tenha razão.',
  v: 'seguro que=com certeza=💯|seguramente=provavelmente, com certeza=✅|probablemente=provavelmente=📊|a lo mejor=talvez=🤷|quizás=talvez=❓|tal vez=talvez=❔|puede que=pode ser que=🎲|es posible que=é possível que=🔀|capaz que=talvez (Rio da Prata)=🧉|igual=talvez (Espanha, coloquial)=🇪🇸',
  x: 'llover=chover|cancelar=cancelar|aprobar=aprovar|cambiar de idea=mudar de ideia|equivocarse=enganar-se|llegar a tiempo=chegar a tempo|tener razón=ter razão|subir los precios=subir os preços|ganar=ganhar|perder=perder',
  dlg: '¿Crees que van a cancelar el concierto?=Você acha que vão cancelar o show?|A lo mejor lo cancelan, si sigue lloviendo.=Talvez cancelem, se continuar chovendo.|¿Y si no lo cancelan?=E se não cancelarem?|Puede que lo pasen para mañana. Quizás lo anuncien esta tarde.=Pode ser que passem para amanhã. Talvez anunciem esta tarde.',
  cz: 'A lo mejor ___ esta tarde. (llover)=llueve=llueva=lloverá que|Puede que no ___ a la reunión. (venir, él)=venga=viene=vendrá|Seguro que ___ razón. (tener, ella)=tiene=tenga=tuviera',
  whys: 'a lo mejor + indicativo|puede que + subjuntivo|seguro que + indicativo',
  pts: 'Só indicativo: seguro que, seguramente, probablemente (muito usado com indicativo), a lo mejor: A lo mejor llueve.|Só subjuntivo: puede que, es posible que, es probable que: Puede que llueva.|Os dois: quizás, tal vez (antes do verbo): Quizás llueve (acho provável) / Quizás llueva (mais dúvida).|Regionais: capaz que + subjuntivo (Rio da Prata, Andes): Capaz que llueva. Igual + indicativo (Espanha, coloquial): Igual llueve.',
  ex: 'Seguramente ya lo sabe.=Provavelmente ela já sabe.|Es posible que suban los precios.=É possível que os preços subam.|Tal vez me equivoque.=Talvez eu esteja enganada.|Capaz que llueva más tarde.=Talvez chova mais tarde.',
  bd: ['A_lo_mejor=C^talvez: sempre indicativo|llueve=V^indicativo|esta_tarde.=T', 'Talvez chova esta tarde.'],
  rule: 'certeza',
  hw: 'Faça dez previsões sobre a próxima semana (tempo, trabalho, futebol, preços), usando cada expressão com o modo certo: seguro que, a lo mejor, puede que, quizás, es posible que.',
  deep: `
Hoje você junta todas as expressões de **dúvida e certeza** e aprende o **modo** que cada uma pede.
# Passo 1: só indicativo
@ P:Com indicativo;Certeza=Seguro que tiene razón.;Muito provável=Seguramente ya lo sabe.;Talvez=A lo mejor llueve.
~ A lo mejor llueve esta tarde. = Talvez chova esta tarde.
~ Seguramente ya lo sabe. = Provavelmente ela já sabe.
BR **A lo mejor** é o "talvez" mais usado na fala, e o mais fácil: sempre com **indicativo**.
# Passo 2: só subjuntivo
| Expressão | Exemplo |
| puede que | Puede que no venga. |
| es posible que | Es posible que suban los precios. |
| es probable que | Es probable que llueva. |
~ Puede que no venga a la reunión. = Pode ser que ele não venha à reunião.
~ Es posible que suban los precios. = É possível que os preços subam.
# Passo 3: quizás e tal vez, os dois
@ V:Quizás;Indicativo (acho provável)|Quizás tiene razón.;Subjuntivo (mais dúvida)|Quizás tenga razón.
~ Quizás tenga razón. = Talvez ela tenha razão.
~ Tal vez me equivoque. = Talvez eu esteja enganada.
# Passo 4: as variantes regionais
| Expressão | Onde | Modo |
| capaz que | Rio da Prata, Andes | subjuntivo |
| igual | Espanha (coloquial) | indicativo |
| a lo mejor | em toda parte | indicativo |
~ Capaz que llueva más tarde. = Talvez chova mais tarde.
! Erro clássico: "a lo mejor **llueva**". Com **a lo mejor**, nunca subjuntivo: a lo mejor **llueve**.
> Treine agora: faça três previsões para o fim de semana, com três expressões diferentes.
? A lo mejor + ? || indicativo
? Puede que + ? || subjuntivo
? "Talvez ela tenha razão": || Quizás tenga razón.
`,
});

NL('es-misterio', {
  de: 'El misterio del perro', pt: 'Ler e escrever hipóteses sobre um mistério', gt: 'futuro, futuro composto e condicional de probabilidade, deber de, tener que e os graus de certeza',
  gx: 'Um texto de hipóteses junta tudo do módulo: as pistas (La puerta estaba abierta …), a dedução forte (Tiene que haber sido alguien de la casa), as suposições sobre o passado (Serían las diez … Habría salido …), sobre o agora (Estará escondido …) e os graus de certeza (A lo mejor …, Puede que …, Seguro que …).',
  ge: 'Tiene que haber sido alguien que conocía al perro.=Só pode ter sido alguém que conhecia o cachorro.|Serían las diez cuando desapareció.=Deviam ser umas dez quando ele desapareceu.|A lo mejor está escondido en el jardín.=Talvez ele esteja escondido no jardim.',
  v: 'misterio=mistério=🕵️|pista=pista=🧩|desaparecer=desaparecer=💨|escondido=escondido=🙈|sospechar=suspeitar=🤨|sospechoso=suspeito=👤|testigo=testemunha=👀|huella=pegada=🐾|aparecer=aparecer=✨|resolver=resolver=✅',
  x: 'perro=cachorro|jardín=jardim|vecino=vizinho|puerta=porta|reja=portão de grade|ladrar=latir|collar=coleira|barro=barro|galletas=biscoitos|veterinario=veterinário',
  dlg: '¿Ya apareció el perro de los vecinos?=O cachorro dos vizinhos já apareceu?|Todavía no. Debe de estar asustado en algún lugar.=Ainda não. Deve estar assustado em algum lugar.|¿Y nadie lo vio salir?=E ninguém o viu sair?|No. Pero la reja estaba abierta; alguien la habrá dejado así.=Não. Mas o portão estava aberto; alguém deve ter deixado assim.',
  cz: '___ que haber sido alguien de la casa. (só pode)=Tiene=Debe=Hay|___ las diez cuando desapareció. (deviam ser)=Serían=Serán=Eran|A lo mejor ___ escondido en el jardín. (estar)=está=esté=estará que',
  whys: 'dedução forte: tener que|suposição sobre o passado: condicional|a lo mejor + indicativo',
  pts: 'Apresente as pistas no imperfecto e no indefinido: La reja estaba abierta. Nadie oyó nada.|Dedução forte: Tiene que haber sido … / Seguro que …|Suposições: sobre o passado (Serían las diez; Habría salido por la reja), sobre o que já aconteceu (Alguien la habrá dejado abierta), sobre o agora (Estará escondido).|Graus de dúvida: a lo mejor + indicativo, puede que + subjuntivo, quizás. E a conclusão: Lo más probable es que + subjuntivo.',
  ex: 'Nadie oyó ladrar al perro.=Ninguém ouviu o cachorro latir.|Alguien habrá dejado la reja abierta.=Alguém deve ter deixado o portão aberto.|Puede que lo haya llevado un vecino.=Pode ser que um vizinho o tenha levado.|Lo más probable es que vuelva solo.=O mais provável é que volte sozinho.',
  bd: ['Tiene_que_haber_sido=V^tener que + haber + particípio: dedução forte sobre o passado|alguien_que_conocía_al_perro.=S', 'Só pode ter sido alguém que conhecia o cachorro.'],
  rule: 'misterio',
  le: {
    texto: {
      t: 'El caso de Canela', kind: 'crônica de bairro', voz: 'b',
      intro: 'O boletim de um bairro de Quito contou o mistério da cachorrinha Canela. Leia e responda.',
      paras: ['El martes por la mañana, la familia Andrade descubrió que Canela, su perrita, había desaparecido. La reja del jardín estaba abierta y en el barro había huellas pequeñas.', 'Lo extraño es que nadie oyó ladrar a Canela. Tiene que haber sido alguien que la conocía, dijo la señora Andrade, porque Canela siempre ladra a los desconocidos.', 'Según un vecino, serían las seis de la mañana cuando vio a un niño con una bolsa de galletas cerca de la reja. Puede que el niño la haya invitado a pasear.', 'Por la tarde, el misterio se resolvió: Canela estaba en la casa del nieto de la vecina, que la había llevado al parque y se había olvidado de devolverla.', 'Canela volvió a casa feliz, con barro hasta las orejas. A lo mejor el próximo martes también se escapa.'],
      qs: [
        { q: 'Que pistas a família encontrou?', o: ['o portão aberto e pegadas pequenas no barro', 'a coleira na rua', 'um bilhete'], a: 0 },
        { q: 'Por que a dona achou que foi alguém conhecido?', o: ['porque a Canela não latiu, e ela sempre late para desconhecidos', 'porque viu a pessoa', 'porque a porta não foi forçada'], a: 0 },
        { q: 'O que o vizinho viu?', o: ['um menino com um pacote de biscoitos perto do portão', 'um carro estranho', 'a Canela correndo sozinha'], a: 0 },
        { q: 'Como o mistério terminou?', o: ['o neto da vizinha tinha levado a Canela ao parque e esqueceu de devolvê-la', 'a Canela voltou sozinha', 'a polícia a encontrou'], a: 0 },
      ],
    },
    escrita: {
      t: 'Escreva as suas hipóteses', tipo: 'form', ok: 'Hipóteses escritas corretamente.',
      pede: 'Você chegou em casa e encontrou a porta aberta e a geladeira vazia. Escreva as suas hipóteses. Uma frase por linha.',
      campos: [
        { l: 'A pista', d: 'La puerta estaba … / No había …', re: '(^|\\s)(estaba|estaban|había|no había|era)(?!\\p{L})', f: 'iu', err: 'Descreva a pista no imperfecto: La puerta estaba abierta.' },
        { l: 'Dedução forte', d: 'Tiene que haber sido … / Seguro que …', re: '(tiene que|tienen que|seguro que|sin duda)', f: 'iu', err: 'Faça uma dedução forte: Tiene que haber sido alguien con llave.' },
        { l: 'Sobre o passado', d: 'Serían las … / Habría …', re: '\\p{L}+ría(n)?(?!\\p{L})', f: 'iu', err: 'Suponha sobre o passado com o condicional: Serían las tres cuando entraron.' },
        { l: 'O que já aconteceu', d: '… habrá + particípio', re: '(^|\\s)(habrá|habrán|se habrá|se habrán) \\p{L}*(ado|ido|cho|sto|to)(?!\\p{L})', f: 'iu', err: 'Suponha o que já aconteceu: Mi hermano habrá invitado a sus amigos.', bad: [['\\bdebe tener (\\p{L}*(ado|ido))(?!\\p{L})', 'Para "deve ter + particípio", use <b>habrá</b> + particípio.']] },
        { l: 'Dúvida', d: 'A lo mejor … / Puede que …', re: '(a lo mejor|puede que|quizás|tal vez|es posible que)', f: 'iu', err: 'Mostre dúvida: A lo mejor … / Puede que …', bad: [['\\ba lo mejor (\\p{L}+ )?(sea|haya|esté|tenga|vuelva|venga)\\b', 'Com <b>a lo mejor</b>, o indicativo: a lo mejor <b>es</b>, <b>está</b>, <b>vuelve</b>.'], ['\\bpuede que (\\p{L}+ )?(es|está|tiene|ha|vuelve|viene)\\b', 'Com <b>puede que</b>, o subjuntivo: puede que <b>sea</b>, <b>esté</b>, <b>haya</b>.']] },
        { l: 'Conclusão', d: 'Lo más probable es que …', re: '(lo más probable|seguramente|probablemente|en conclusión|al final)', f: 'iu', err: 'Conclua: Lo más probable es que …' },
      ],
      modelo: 'La puerta estaba abierta y no había nada en la nevera. · Tiene que haber sido alguien con llave. · Serían las cuatro de la tarde, porque el café todavía estaba caliente. · Mi hermano habrá invitado a sus amigos. · A lo mejor está en el parque con ellos. · Lo más probable es que vuelva con hambre otra vez.',
    },
  },
  hw: 'Invente um pequeno mistério da sua vida (algo sumido, alguém que não apareceu) e escreva doze frases com pistas, dedução forte, suposições nos três tempos e graus de dúvida.',
  deep: `
Esta lição é de **ler e escrever** e fecha o módulo. Você vai ler um mistério de bairro equatoriano e escrever as suas hipóteses.
# Passo 1: a estrutura
@ P:Hipóteses sobre um mistério;Pistas=La reja estaba abierta.;Dedução=Tiene que haber sido …;Suposições=Serían las seis … / habrá dejado …;Dúvida=A lo mejor … / Puede que …;Conclusão=Lo más probable es que …
~ Nadie oyó ladrar al perro. = Ninguém ouviu o cachorro latir.
# Passo 2: deduzir
~ Tiene que haber sido alguien que conocía al perro. = Só pode ter sido alguém que conhecia o cachorro.
~ Alguien habrá dejado la reja abierta. = Alguém deve ter deixado o portão aberto.
| Certeza | Forma |
| quase certeza | tiene que haber sido |
| suposição sobre o que já aconteceu | habrá dejado |
| suposição sobre um momento passado | serían las seis |
# Passo 3: duvidar
~ Serían las diez cuando desapareció. = Deviam ser umas dez quando ele desapareceu.
~ Puede que lo haya llevado un vecino. = Pode ser que um vizinho o tenha levado.
~ A lo mejor está escondido en el jardín. = Talvez ele esteja escondido no jardim.
BR **Puede que lo haya llevado** usa o **pretérito perfecto do subjuntivo** (haya + particípio): a dúvida sobre algo que já aconteceu.
# Passo 4: concluir
~ Lo más probable es que vuelva solo. = O mais provável é que volte sozinho.
! **Lo más probable es que** + subjuntivo é a forma elegante de fechar hipóteses: lo más probable es que **vuelva**.
> Agora leia o caso da Canela e escreva as suas hipóteses.
? "Só pode ter sido alguém": || Tiene que haber sido alguien …
? "Alguém deve ter deixado": || Alguien habrá dejado …
? "O mais provável é que volte": || Lo más probable es que vuelva.
`,
});

/* ---------- esquemas visuais e palavras de apoio ---------- */
V('¿Dónde estará?',
  'V:Fato ou suposição?;Fato|Está en casa.;Suposição|Estará en casa.',
  'P:Suposições;Idade=Tendrá unos cuarenta años.;Hora=Serán las ocho.;Preço=Costará unos cien dólares.');
V('Habrá salido',
  'P:Perguntas;O quê?=¿Qué habrá pasado?;Já?=¿Habrá llegado ya?;Quem?=¿Quién lo habrá hecho?',
  'V:Suposição;Sobre o agora|Estará en casa.;Já aconteceu|Habrá llegado a casa.');
V('Serían las tres',
  'V:Fato ou suposição?;Fato|Eran las tres.;Suposição|Serían las tres.',
  'M:Suposição;Sobre|Tempo;o agora|futuro: serán;o que já aconteceu|futuro composto: habrá sido;um momento passado|condicional: serían');
V('Debe de estar cansada',
  'V:Dever;Obrigação|Debes estudiar más.;Probabilidade|Debe de estar cansada.',
  'P:Do mais certo ao menos;Quase certeza=Tiene que estar en casa.;Muito provável=Seguro que …;Provável=Debe de …;Possível=A lo mejor …');
V('A lo mejor, quizás, puede que',
  'M:O modo;Expressão|Modo;a lo mejor, seguro que|indicativo;puede que, es posible que|subjuntivo;quizás, tal vez|os dois',
  'V:Quizás;Indicativo|Quizás tiene razón.;Subjuntivo|Quizás tenga razón.');
V('El misterio del perro',
  'P:Hipóteses;Pistas=La reja estaba abierta.;Dedução=Tiene que haber sido …;Suposições=Serían las seis …;Conclusão=Lo más probable es que …',
  'M:Certeza;Grau|Forma;quase certeza|tiene que haber sido;suposição|habrá dejado;dúvida|puede que haya …');
S_('¿Dónde estará?', 'dónde=onde|estará=deve estar|Ana=Ana|ya son las nueve=já são nove horas|en el tráfico=no trânsito|no sé=não sei|qué hora es=que horas são|serán=devem ser|las ocho=umas oito|no contesta=não atende|el teléfono=o telefone|en una reunión=numa reunião|o=ou|tendrá=deve ter|el celular=o celular|sin batería=sem bateria|y por qué=e por que|no avisó=não avisou|sus razones=os motivos dela|está=está|esté=esteja|son=são|sean=sejam|tiene=tem|tenga=tenha|quién será=quem será|a estas horas=a esta hora|unos cuarenta años=uns quarenta anos|costará=deve custar|unos cien dólares=uns cem dólares|cansada=cansada|después del viaje=depois da viagem|está en casa=está em casa|estará en casa=deve estar em casa|qué hora será=que horas serão|mañana=amanhã|en Lima=em Lima|ahora=agora|mañana estará en Lima=amanhã vai estar em Lima|ahora estará en Lima=agora deve estar em Lima');
S_('Habrá salido', 'no contesta=não atende|habrá salido=deve ter saído|habrá llegado=deve ter chegado|ya=já|el paquete=o pacote|habrán perdido=devem ter perdido|el bus=o ônibus|Pedro=Pedro|y Lucía=e Lúcia|no han llegado=não chegaram|qué les habrá pasado=o que será que aconteceu com eles|o se habrán equivocado=ou devem ter errado|de día=o dia|les escribiste=você escreveu para eles|sí=sim|pero=mas|no lo han leído=não leram|habrán apagado=devem ter desligado|el celular=o celular|habría=teria|ha=tem|hubo=houve|ha de=há de|habrá=deve ter|han de=hão de|habré salido=devo ter saído|habrás llegado=você deve ter chegado|qué habrá pasado=o que será que aconteceu|quién lo habrá hecho=quem será que fez isso|se habrá olvidado=deve ter esquecido|de la cita=do compromisso|ya habrá leído=já deve ter lido|tu mensaje=sua mensagem|se habrá quedado dormido=deve ter pegado no sono|se habrán equivocado=devem ter se enganado|estará en casa=deve estar em casa|habrá llegado a casa=deve ter chegado em casa|debe tener=(erro) debe tener|habrá llegado ya=será que já chegou');
S_('Serían las tres', 'cuando llegué=quando cheguei|serían=deviam ser|las tres=umas três|de la mañana=da manhã|el ladrón=o ladrão|tendría=devia ter|unos veinte años=uns vinte anos|por qué=por que|no vino=ele não veio|estaría=devia estar|enfermo=doente|usted=o senhor|vio=viu|al ladrón=o ladrão|cómo era=como ele era|era joven=era jovem|llevaba=usava|una gorra negra=um boné preto|y qué hora era=e que horas eram|las diez de la noche=umas dez da noite|la calle=a rua|vacía=vazia|serán=serão|eran=eram|tendrá=terá|tenía=tinha|estará=estará|estuvo=esteve|habría=devia haver|unas cincuenta personas=umas cinquenta pessoas|en la fiesta=na festa|quién sería=quem seria|aquel hombre=aquele homem|mediría=devia medir|alrededor de=em torno de|un metro ochenta=um metro e oitenta|eran las tres=eram três horas|volví=voltei|cuando volví=quando voltei|serían las tres=deviam ser umas três|qué hora sería=que horas seriam|serán las ocho=devem ser umas oito|habrá salido=deve ter saído|habrá sido=deve ter sido');
S_('Debe de estar cansada', 'debe de=deve (provavelmente)|estar cansada=estar cansada|después del viaje=depois da viagem|debes=você deve|estudiar más=estudar mais|si quieres aprobar=se quiser passar|tiene que estar=só pode estar|en casa=em casa|la luz=a luz|está encendida=está acesa|está=está|Marta=Marta|tiene que estar=só pode estar|su auto=o carro dela|en el garaje=na garagem|pero=mas|no abre la puerta=não abre a porta|estar durmiendo=estar dormindo|ayer=ontem|llegó muy tarde=chegou muito tarde|debe=deve|tiene=tem|hay=há|debes de=(erro) debes de|tienes de=(erro) tienes de|deben de ser=devem ser|las ocho=umas oito|no debes=você não deve|fumar aquí=fumar aqui|seguro que=com certeza|está durmiendo=está dormindo|ha llovido=choveu|el suelo=o chão|mojado=molhado|debes estudiar=você deve estudar|debe de estar=deve estar|debe estar=deve estar|debes descansar=você deve descansar|deben de=devem|a lo mejor salió=talvez tenha saído|tiene que haber llovido=só pode ter chovido|estudiar=estudar|tiene que=só pode');
S_('A lo mejor, quizás, puede que', 'a lo mejor=talvez|llueve=chove|esta tarde=esta tarde|puede que=pode ser que|no venga=ele não venha|a la reunión=à reunião|quizás=talvez|tenga razón=ela tenha razão|crees que=você acha que|van a cancelar=vão cancelar|el concierto=o show|lo cancelan=cancelem|si sigue lloviendo=se continuar chovendo|y si no lo cancelan=e se não cancelarem|lo pasen=passem|para mañana=para amanhã|lo anuncien=anunciem|llueva=chova|lloverá que=(erro) lloverá que|venga=venha|viene=vem|vendrá=virá|seguro que=com certeza|tiene=tem|tenga=tenha|tuviera=tivesse|seguramente=provavelmente|ya lo sabe=já sabe|es posible que=é possível que|suban los precios=os preços subam|tal vez=talvez|me equivoque=eu esteja enganada|capaz que=talvez|más tarde=mais tarde|tiene razón=tem razão|seguro que tiene razón=com certeza tem razão|es probable que=é provável que|igual llueve=talvez chova|quizás tiene razón=talvez tenha razão|quizás tenga razón=talvez tenha razão|probablemente=provavelmente|igual=talvez|a lo mejor llueve=talvez chova|puede que no venga=pode ser que não venha');
S_('El misterio del perro', 'tiene que haber sido=só pode ter sido|alguien=alguém|que conocía=que conhecia|al perro=o cachorro|serían las diez=deviam ser umas dez|cuando desapareció=quando ele desapareceu|a lo mejor=talvez|está escondido=está escondido|en el jardín=no jardim|ya apareció=já apareceu|el perro=o cachorro|de los vecinos=dos vizinhos|todavía no=ainda não|debe de estar=deve estar|asustado=assustado|en algún lugar=em algum lugar|y nadie=e ninguém|lo vio salir=o viu sair|no=não|pero=mas|la reja=o portão|estaba abierta=estava aberto|habrá dejado=deve ter deixado|así=assim|tiene=tem|debe=deve|hay=há|serán=serão|eran=eram|está=está|esté=esteja|estará que=(erro) estará que|nadie oyó=ninguém ouviu|ladrar=latir|puede que=pode ser que|lo haya llevado=o tenha levado|un vecino=um vizinho|lo más probable es que=o mais provável é que|vuelva solo=volte sozinho|habría salido=devia ter saído|por la reja=pelo portão|estará escondido=deve estar escondido|seguro que=com certeza|el martes=na terça|por la mañana=de manhã|la familia Andrade=a família Andrade|descubrió que=descobriu que|Canela=Canela|su perrita=sua cachorrinha|había desaparecido=tinha desaparecido|del jardín=do jardim|y en el barro=e no barro|había huellas pequeñas=havia pegadas pequenas|lo extraño es que=o estranho é que|a Canela=a Canela|la conocía=a conhecia|dijo=disse|la señora Andrade=a senhora Andrade|porque=porque|siempre ladra=sempre late|a los desconocidos=para os desconhecidos|según=segundo|las seis=umas seis|de la mañana=da manhã|cuando vio=quando viu|a un niño=um menino|con una bolsa de galletas=com um pacote de biscoitos|cerca de=perto de|el niño=o menino|la haya invitado=a tenha convidado|a pasear=para passear|por la tarde=à tarde|el misterio=o mistério|se resolvió=se resolveu|estaba=estava|en la casa=na casa|del nieto=do neto|de la vecina=da vizinha|que la había llevado=que a tinha levado|al parque=ao parque|y se había olvidado=e tinha esquecido|de devolverla=de devolvê-la|volvió a casa=voltou para casa|feliz=feliz|con barro=com barro|hasta las orejas=até as orelhas|el próximo martes=na próxima terça|también=também|se escapa=foge|la puerta=a porta|y no había nada=e não havia nada|en la nevera=na geladeira|alguien con llave=alguém com chave|las cuatro=umas quatro|de la tarde=da tarde|el café=o café|todavía estaba caliente=ainda estava quente|mi hermano=meu irmão|habrá invitado=deve ter convidado|a sus amigos=os amigos dele|en el parque=no parque|con ellos=com eles|vuelva=volte|con hambre=com fome|otra vez=de novo|había=havia|no había=não havia|era=era|estaban=estavam|tienen que=só podem|sin duda=sem dúvida|habrá=deve ter|habrán=devem ter|se habrá=deve ter se|se habrán=devem ter se|quizás=talvez|tal vez=talvez|es posible que=é possível que|seguramente=provavelmente|probablemente=provavelmente|en conclusión=em conclusão|al final=no fim|lo más probable=o mais provável');
['ana', 'pedro', 'lucía', 'lima', 'marta', 'andrade', 'canela', 'quito'].forEach((n) => NAMES.add(n));

/* ---------- visão geral, dicas das lacunas e objetivos ---------- */
Object.assign(VG, {
  'es-sera': {
    o: 'O futuro de probabilidade: **estará**, **serán**, **tendrá** para supor algo sobre o presente; **¿Dónde estará?** = onde será que está?',
    q: 'Sempre que alguém se atrasa, some ou você não sabe algo.',
    p: '"Deve estar" é **estará**.',
  },
  'es-habrasalido': {
    o: 'O futuro composto de probabilidade: **habrá salido**, **se habrá olvidado**, **¿Qué habrá pasado?** para supor o que já aconteceu.',
    q: 'Para explicar atrasos e ausências.',
    p: '"Deve ter saído" é **habrá salido**.',
  },
  'es-serian': {
    o: 'O condicional de probabilidade: **serían las tres**, **tendría unos veinte años**, **habría unas cincuenta personas** para supor sobre um momento passado.',
    q: 'Para descrever cenas e testemunhos.',
    p: '**eran** (sei) × **serían** (suponho).',
  },
  'es-debede': {
    o: '**deber de** (probabilidade: **debe de estar cansada**), **deber** (obrigação: **debes estudiar**) e **tener que** (dedução forte: **tiene que estar en casa**).',
    q: 'Para deduzir e para dar conselhos sem confundir os dois.',
    p: 'Nunca **deber de** para obrigação.',
  },
  'es-alomejor': {
    o: 'Os graus de certeza e o modo: **a lo mejor**, **seguro que** + indicativo; **puede que**, **es posible que** + subjuntivo; **quizás**, **tal vez** com os dois; **capaz que** no Rio da Prata.',
    q: 'Para fazer previsões e falar com nuance.',
    p: '**a lo mejor** nunca com subjuntivo.',
  },
  'es-misterio': {
    o: 'Hipóteses sobre um mistério: pistas, dedução forte (**tiene que haber sido**), suposições nos três tempos e graus de dúvida (**lo más probable es que** …).',
    q: 'Para relatos, crônicas e a escrita do DELE B2.',
    p: 'Junta todo o módulo num texto.',
  },
});
Object.assign(CZH, {
  'es-sera': ['será que está', 'devem ser', 'deve ter'],
  'es-habrasalido': ['deve ter', 'será que já', 'eles'],
  'es-serian': ['deviam ser', 'devia ter', 'devia estar'],
  'es-debede': ['probabilidade', 'obrigação', 'dedução forte'],
  'es-alomejor': ['a lo mejor + ?', 'puede que + ?', 'seguro que + ?'],
  'es-misterio': ['só pode', 'deviam ser', 'a lo mejor + estar'],
});
Object.assign(OBJ, {
  'es-sera': { o: 'Uso o futuro para supor algo sobre o presente.', a: 'Você consegue dizer "deve estar no trânsito" em espanhol?', ref: 'Gramática · B2' },
  'es-habrasalido': { o: 'Uso o futuro composto para supor o que já aconteceu.', a: 'Você consegue perguntar "o que será que aconteceu?"?', ref: 'Gramática · B2' },
  'es-serian': { o: 'Uso o condicional para supor sobre o passado.', a: 'Você sabe a diferença entre "eran las tres" e "serían las tres"?', ref: 'Gramática · B2' },
  'es-debede': { o: 'Distingo deber, deber de e tener que.', a: 'Você sabe por que se diz "debe de estar cansada"?', ref: 'Gramática · B2' },
  'es-alomejor': { o: 'Uso cada expressão de dúvida com o modo certo.', a: 'Você sabe qual modo vai depois de a lo mejor e de puede que?', ref: 'Gramática · B2' },
  'es-misterio': { o: 'Consigo ler e escrever hipóteses sobre um mistério.', a: 'Você consegue escrever hipóteses sobre algo estranho que aconteceu?', ref: 'Expresión escrita · B2' },
});
MOD_OBJ[24] = ['Faço suposições sobre o presente e o passado.', 'Distingo deber, deber de e tener que.', 'Uso os graus de certeza com o modo certo.', 'Consigo escrever hipóteses sobre um mistério.'];

ES_MODS.push({ lv: 'B2', n: 'Probabilidade e dedução', l: ['es-sera', 'es-habrasalido', 'es-serian', 'es-debede', 'es-alomejor', 'es-misterio'] });
