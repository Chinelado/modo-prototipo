/* MODO · idioma ativo. Carregado antes de tudo, nas duas páginas: index.html (alemão) e ingles.html (inglês).
   Cada idioma tem os próprios dados (data/ para o alemão, en/ para o inglês), o próprio progresso (chave no
   localStorage), a própria voz, o próprio reconhecimento de fala e a própria pasta de áudio. O motor é o mesmo. */
const LANG = document.documentElement.dataset.lang || 'de';
const LANG_PACKS = {
  de: { code: 'de', sigla: 'DE', nome: 'Alemão', lingua: 'alemão', ref: 'na estrutura do Goethe-Institut', tts: 'de-DE', audio: 'audio', key: 'deutschTrilha.v1', page: 'index.html' },
  en: {
    code: 'en', sigla: 'EN', nome: 'Inglês', lingua: 'inglês', ref: 'com as provas Cambridge como referência', tts: 'en-US', audio: 'audio-en', key: 'modo.en.v1', page: 'ingles.html',
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
};
const LP = LANG_PACKS[LANG] || LANG_PACKS.de;
// trocar de idioma: lembra a escolha e abre a página do idioma (o progresso de cada um fica separado)
function goLang(code) {
  try { localStorage.setItem('modo.lang', code); } catch (e) { /* só lembra a escolha */ }
  const p = LANG_PACKS[code]; if (p && p.code !== LANG) location.href = p.page;
}
