/* MODO · idioma ativo. Carregado antes de tudo, em cada página: index.html (alemão), ingles.html (inglês) e espanhol.html (espanhol).
   Cada idioma tem os próprios dados (data/ para o alemão, en/ para o inglês, es/ para o espanhol), o próprio progresso (chave no
   localStorage), a própria voz, o próprio reconhecimento de fala e a própria pasta de áudio. O motor é o mesmo. */
const LANG = document.documentElement.dataset.lang || 'de';
const LANG_PACKS = {
  de: {
    code: 'de', sigla: 'DE', nome: 'Alemão', lingua: 'alemão', ref: 'na estrutura do Goethe-Institut', tts: 'de-DE', audio: 'audio', key: 'deutschTrilha.v1', page: 'index.html',
    flag: '🇩🇪', slug: 'alemao', vozNome: 'alemã', hello: 'Guten Tag! Ich bin deine deutsche Stimme.', teclas: ['ä', 'ö', 'ü', 'ß'],
  },
  en: {
    code: 'en', sigla: 'EN', nome: 'Inglês', lingua: 'inglês', ref: 'com as provas Cambridge como referência', tts: 'en-US', audio: 'audio-en', key: 'modo.en.v1', page: 'ingles.html',
    flag: '🇺🇸', slug: 'ingles', vozNome: 'em inglês', hello: 'Hi! I am your English voice.', teclas: [],
    // títulos de nível e conquistas com nome na língua estudada (no alemão eles estão em app.js)
    titles: ['Beginner', 'Explorer', 'Speaker', 'Storyteller', 'Thinker', 'Achiever', 'Master'],
    badges: { guide: 'Ready!', first: 'First step', diary: 'Dear diary', speak: 'Out loud!', rd5: 'Reader', rd15: 'Bookworm', hw50: 'Rotina em inglês', pkall: 'Pronta para viajar' },
    // palavras gramaticais do inglês: contam como "inglês" ao decidir o que ganha botão de som e o que é palavra estrangeira
    extra: ('i you he she it we they me him her us them my your his its our their mine yours am is are was were be been being ' +
      'do does did done have has had will would can could should must may might shall the a an this that these those ' +
      'and or but because so if when where what who whom whose which why how not no yes there here to of in on at for from with by about ' +
      'as than then too very also just only all some any every each many much more most other another hi hello bye please thanks thank sorry okay ok ' +
      "i'm you're he's she's it's we're they're isn't aren't don't doesn't didn't can't won't let's what's where's how's that's there's " +
      "i've you've we've they've haven't hasn't i'd you'd he'd she'd we'd they'd i'll you'll he'll she'll we'll they'll it'll hadn't wouldn't've wasn't weren't wouldn't couldn't shouldn't who's").split(' '),
  },
  es: {
    code: 'es', sigla: 'ES', nome: 'Espanhol', lingua: 'espanhol', ref: 'com as provas DELE como referência', tts: 'es-MX', audio: 'audio-es', key: 'modo.es.v1', page: 'espanhol.html',
    flag: '🌎', slug: 'espanhol', vozNome: 'em espanhol', hello: '¡Hola! Soy tu voz en español.', teclas: ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'],
    titles: ['Principiante', 'Explorador', 'Hablante', 'Narrador', 'Pensador', 'Experto', 'Maestro'],
    badges: { guide: '¡Lista!', first: 'Primer paso', diary: 'Querido diario', speak: '¡En voz alta!', rd5: 'Lectora', rd15: 'Ratón de biblioteca', hw50: 'Rotina em espanhol', pkall: 'Pronta para viajar' },
    // palavras gramaticais do espanhol (as que também existem em português ficam de fora: o app as trataria como português)
    extra: ('yo tú él ella usted nosotros nosotras ellos ellas ustedes me te lo le nos los les la las se mí ti conmigo contigo mi mis tu tus su sus nuestro nuestra nuestros nuestras ' +
      'el un unos unas al del este esta estos estas ese esos esas aquel aquella aquellos aquellas esto eso aquello ' +
      'soy eres es somos son estoy estás está estamos están hay tengo tienes tiene tenemos tienen fue fui era eran ' +
      'y pero porque si cuando donde dónde qué quién quiénes cuál cuáles cómo cuánto cuánta cuántos cuántas por qué ' +
      'muy mucho mucha muchos muchas poco también tampoco ya todavía aquí allí ahí hola adiós gracias sí bueno buena buenos buenas ' +
      'con sin hasta desde hacia entre sobre ningún ninguno ninguna algo alguien nada nadie siempre nunca después luego').split(' '),
  },
};
const LP = LANG_PACKS[LANG] || LANG_PACKS.de;
// trocar de idioma: lembra a escolha e abre a página do idioma (o progresso de cada um fica separado)
function goLang(code) {
  try { localStorage.setItem('modo.lang', code); } catch (e) { /* só lembra a escolha */ }
  const p = LANG_PACKS[code]; if (p && p.code !== LANG) location.href = p.page;
}
// escolha do idioma (barra lateral e Perfil): com mais de dois idiomas, uma lista
function pickLang() {
  const outros = Object.values(LANG_PACKS).filter((p) => p.code !== LANG);
  const old = document.getElementById('langPick'); if (old) old.remove();
  const box = document.createElement('div'); box.id = 'langPick'; box.className = 'lang-pick'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-label', 'Trocar de idioma');
  box.innerHTML = `<div class="lang-card"><h3>Trocar de idioma</h3><p class="mut">O progresso de cada idioma fica guardado separado.</p>
    ${outros.map((p) => `<button type="button" class="lang-opt" data-code="${p.code}"><span class="mo-code">${p.sigla}</span><b>${p.nome}</b></button>`).join('')}
    <button type="button" class="ghost lang-x">Cancelar</button></div>`;
  box.addEventListener('click', (e) => {
    const b = e.target.closest('[data-code]'); if (b) { goLang(b.dataset.code); return; }
    if (e.target === box || e.target.closest('.lang-x')) box.remove();
  });
  document.body.appendChild(box);
}
