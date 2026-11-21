#!/usr/bin/env node
/* Gerador de áudios da Deutsch-Trilha com a API da ElevenLabs.
   Lê os dados do app, lista todo o alemão que tem botão de áudio e grava um MP3 por frase em audio/xx/<hash>.mp3.
   O app toca esses arquivos quando existem e usa a voz do navegador quando não existem.

   Uso (na pasta do projeto):
     node tools/audio-elevenlabs.mjs                 simulação: quanto falta gerar e quantos créditos custa (não gasta nada)
     node tools/audio-elevenlabs.mjs vozes           lista as vozes da sua conta (com os IDs)
     node tools/audio-elevenlabs.mjs amostra         gera 12 áudios variados para você ouvir antes de gerar tudo
     node tools/audio-elevenlabs.mjs gerar --limite 20000   gera o que falta, parando em 20 mil créditos
     node tools/audio-elevenlabs.mjs gerar --limite tudo    gera tudo o que falta
     node tools/audio-elevenlabs.mjs refazer "Guten Tag!"   apaga e gera de novo um áudio específico
     node tools/audio-elevenlabs.mjs indice           só reconstrói audio/index.json

   A chave da API fica só na variável de ambiente ELEVENLABS_API_KEY (nunca no código nem no repositório).
   Vozes, modelo e velocidade ficam em tools/elevenlabs.json. Veja AUDIO-ELEVENLABS.md. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'audio');
const CFG_FILE = path.join(ROOT, 'tools', 'elevenlabs.json');
const API = 'https://api.elevenlabs.io/v1';

/* ---------- mesma chave e mesmo hash usados pelo app (audioKey e cyrb53 em app.js) ---------- */
const sayText = (t) => String(t).replace(/\*\*/g, '').replace(/\(.*?\)/g, ' ').replace(/___/g, ' ').replace(/\s+/g, ' ').trim();
function cyrb53(str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0; i < str.length; i++) { const ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}
const audioKey = (text, slot = 'a') => (slot === 'a' ? '' : slot + '|') + sayText(text);
const fileOf = (h) => path.join(OUT, h.slice(0, 2), h + '.mp3');

/* ---------- carrega os dados do app ---------- */
function loadApp() {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const files = [...html.matchAll(/src="(data\/[^"]+)"/g)].map((m) => m[1]).concat('art.js');
  const esc = (x) => String(x).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ctx = { console, esc };
  vm.createContext(ctx);
  const code = files.map((f) => fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n;\n')
    + '\n;this.__app = { LESSONS, SUP, TEXTS, GUIDE, GLOSS: typeof GLOSS === "undefined" ? [] : GLOSS, PHASES, VIS: typeof VIS === "undefined" ? {} : VIS, IMG_CAP: typeof IMG_CAP === "undefined" ? {} : IMG_CAP, KATZE: typeof KATZE === "undefined" ? [] : KATZE, ZEITEN: typeof ZEITEN === "undefined" ? [] : ZEITEN, DEKL: typeof DEKL === "undefined" ? {} : DEKL, BRIEF: typeof BRIEF === "undefined" ? [] : BRIEF, GEWISS: typeof GEWISS === "undefined" ? [] : GEWISS, uhrText: typeof uhrText === "undefined" ? null : uhrText, isGerman, falavel, visHTML, vozDe, splitFala,'
    + ' POCKETS: typeof POCKETS === "undefined" ? [] : POCKETS, pocketTexts: typeof pocketTexts === "undefined" ? () => [] : pocketTexts,'
    // trilha MODO (data/curriculo.js): o nível vem do módulo da lição, porque os módulos têm tamanhos diferentes
    + ' lvOf: typeof LMOD === "undefined" ? null : (i) => (MODS[LMOD[i]] || {}).lv, VG: typeof VG === "undefined" ? null : VG };';
  vm.runInContext(code, ctx, { filename: 'deutsch-trilha' });
  return ctx.__app;
}
const decode = (s) => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');

/* Lista tudo o que o app fala. A voz de cada frase vem de data/vozes.js (vozDe), a mesma regra que o app usa para tocar:
   a e c = femininas, b e d = masculinas; diálogos e textos longos seguem o gênero de cada personagem. */
function inventory(A) {
  const items = new Map();
  let grupo = 'A1'; // nível (A1…C2) ou "Pocket": define em que pacote o áudio entra no download offline
  let sid = ''; // lição atual: cada áudio guarda as lições em que aparece (comando refazer-licao)
  const add = (text, _slot, cat = '') => {
    const t = sayText(text); if (t.length < 2 || t.startsWith('-') || !/\p{L}/u.test(t)) return;
    const slot = A.vozDe(t);
    const key = audioKey(t, slot); if (!items.has(key)) items.set(key, { key, text: t, slot, cat, grupo, hash: cyrb53(key), sids: new Set() });
    if (sid) items.get(key).sids.add(sid);
  };
  const deepLines = (md, cat) => {
    md.split('\n').map((x) => x.trim()).forEach((x) => {
      if (x.startsWith('~ ')) add(x.slice(2).split(' = ')[0], 'a', cat);
      else if (x.startsWith('|')) x.split('|').forEach((c) => { c = c.trim(); if (c && A.isGerman(c)) add(c, 'a', cat); });
      else if (x.startsWith('?? ')) { const q = x.slice(3).split(' || ')[0]; if (q.startsWith('🔊 ')) add(q.slice(2).trim(), 'a', cat); } // ouvir e escolher
      else if (x.startsWith('&& ')) x.slice(3).split(' | ').forEach((p) => { const d = p.split(' = ')[0].trim(); if (A.isGerman(d)) add(d, 'a', cat); }); // pares
      else if (x.startsWith('@ ')) visSpec(x.slice(2)); // esquemas dentro da aula
      else if (x.startsWith('? ')) { const r = x.slice(2).split(' || ')[1]; if (r && A.isGerman(r)) add(r, 'a', cat); }
    });
    (md.match(/\*\*(.+?)\*\*/g) || []).forEach((b) => { if (A.isGerman(b)) add(b, 'a', cat); });
  };
  const visSpec = (spec) => {
    if (/^W:/.test(spec)) { spec.split(';').slice(1).forEach((s) => { const t = s.split('=')[0].split('|').map((x) => x.trim().replace(/^[*@^]/, '')).join(' '); add(t[0].toUpperCase() + t.slice(1) + '.', 'a', 'interativos'); }); return; }
    if (/^[UKZABG]:/.test(spec)) return; // interativos: os textos vêm de data/interativos.js
    let html = ''; try { html = A.visHTML(spec); } catch { return; }
    // elementos sem outros blocos dentro (célula, chip, palavra), que é onde o app põe o botão de áudio
    for (const m of html.matchAll(/<(div|span|b|td|th)\b[^>]*>((?:(?!<\/?(?:div|span|td|th)\b).)*?)<\/\1>/gs)) {
      const t = decode(m[2].replace(/<[^>]+>/g, '')).trim(); if (t && A.isGerman(t)) add(t, 'a', 'esquemas');
    }
  };
  const levelOf = (i) => { if (A.lvOf && A.lvOf(i)) return A.lvOf(i); const w = Math.floor(i / 6); return (A.PHASES.find((p) => w >= p.weeks[0] && w < p.weeks[1]) || A.PHASES[A.PHASES.length - 1]).id; };
  grupo = 'A1';
  A.GUIDE.forEach((g) => deepLines(g.body, 'guia'));
  (A.GLOSS || []).forEach(([, , e]) => { if (A.isGerman(e)) add(e, 'a', 'guia'); }); // exemplos do Dicionário de termos
  A.LESSONS.forEach((l) => {
    grupo = levelOf(l.i); sid = String(l.sid != null ? l.sid : l.i);
    // visão geral (data/visao.js): as palavras em negrito que são alemão tocam ao toque
    if (A.VG && A.VG[sid]) ['o', 'q', 'p'].forEach((k) => (String(A.VG[sid][k] || '').match(/\*\*(.+?)\*\*/g) || []).forEach((b) => { b = b.slice(2, -2); if (A.isGerman(b)) add(b, 'a', 'visão geral'); }));
    l.v.forEach((v) => add(v.de, 'a', 'vocabulário'));
    [...l.ge, ...l.ex].forEach((e) => add(e.de, 'a', 'exemplos'));
    l.dlg.forEach((e) => add(e.de, '', 'diálogos'));
    l.cz.forEach((c) => add(c.q.replace('___', c.a), 'a', 'lacunas'));
    if (l.bd) { add(l.bd.t.map((x) => x.w).join(' '), 'a', 'frase desmontada'); l.bd.t.forEach((x) => { if (A.isGerman(x.w)) add(x.w, 'a', 'frase desmontada'); }); }
    if (l.deep) deepLines(l.deep, 'aulas');
    (A.SUP[l.de] || []).forEach((s) => add(s.de, 'a', 'palavras de apoio'));
    (A.VIS[l.de] || []).forEach(visSpec);
    // lições de Ler e escrever: cada parágrafo do texto tem botão de áudio (leTextHTML em modo.js)
    // (com vozes, "Nome: fala" grava só a fala, como o app mostra)
    if (l.le && l.le.texto) { const T = l.le.texto; T.paras.forEach((p) => { const { who, txt } = A.splitFala(p); add(who && T.vozes && T.vozes[who] ? txt : p, '', 'leitura'); }); }
  });
  sid = '';
  A.TEXTS.forEach((t) => {
    grupo = t.lv;
    t.paras.forEach((p) => add(A.splitFala(p).txt, '', 'textos longos'));
    t.gl.split('|').forEach((g) => add(g.split('=')[0], 'a', 'textos longos'));
  });
  grupo = 'Pocket';
  A.POCKETS.forEach((pk) => A.pocketTexts(pk).forEach((t) => add(t, '', 'pocket')));
  // palavras em negrito das legendas das imagens (bloco Repare do Pocket e ilustrações das lições)
  const bolds = (txt, cat) => (String(txt).match(/\*\*(.+?)\*\*/g) || []).map((b) => b.slice(2, -2)).forEach((b) => { if (/\p{L}{2}/u.test(b)) add(b, 'a', cat); }); // nas legendas todo negrito é alemão
  bolds((/const PK_LOOK = \{([\s\S]*?)\n\};/.exec(fs.readFileSync(path.join(ROOT, 'pocket.js'), 'utf8').replace(/\r\n/g, '\n')) || [])[1] || '', 'pocket');
  grupo = 'A1'; Object.values(A.IMG_CAP).forEach((t) => bolds(t, 'imagens'));
  // relógio (todas as horas de 5 em 5 minutos) e a gata no caixote
  if (A.uhrText) for (let h = 1; h <= 12; h++) for (let m = 0; m < 60; m += 5) add(A.uhrText(h, m), 'a', 'interativos');
  A.KATZE.forEach((k) => { add(k.wo, 'a', 'interativos'); add(k.wohin, 'a', 'interativos'); });
  A.ZEITEN.forEach((z) => { add(z.ex, 'a', 'interativos'); add(z.lern, 'a', 'interativos'); });
  Object.values(A.DEKL).forEach((t) => ['m', 'f', 'n', 'p'].forEach((g) => t[g].forEach((s) => add(s.replace('|', ''), 'a', 'interativos'))));
  A.BRIEF.forEach((b) => add(b.z.replace(/\n/g, ' '), 'a', 'interativos'));
  A.GEWISS.forEach((g) => { add(g.jetzt, 'a', 'interativos'); add(g.past, 'a', 'interativos'); });
  return [...items.values()];
}

let allItems = null; // inventário completo, usado para os pacotes de download offline

/* ---------- configuração ---------- */
const DEFAULT_CFG = {
  modelo: 'eleven_multilingual_v2',
  formato: 'mp3_44100_64',
  velocidade: 0.95,
  estabilidade: 0.5,
  similaridade: 0.75,
  paralelo: 2,
  vozes: { a: '', b: '', c: '', d: '' },
};
function loadCfg() {
  if (!fs.existsSync(CFG_FILE)) fs.writeFileSync(CFG_FILE, JSON.stringify(DEFAULT_CFG, null, 2) + '\n');
  const c = { ...DEFAULT_CFG, ...JSON.parse(fs.readFileSync(CFG_FILE, 'utf8')) };
  c.vozes = { ...DEFAULT_CFG.vozes, ...c.vozes };
  return c;
}
// Créditos por caractere medidos no plano Creator em 16/11/2026 (cabeçalho character-cost da API):
// Multilingual v2, v3 e v4 ≈ 0,44 · Flash v2.5 e v4 Turbo ≈ 0,21. O gerador também soma o custo real de cada áudio.
const creditRate = (model) => (/flash|turbo/i.test(model) ? 0.22 : 0.45);
const voiceFor = (cfg, slot) => cfg.vozes[slot] || (slot === 'c' ? cfg.vozes.a : slot === 'd' ? cfg.vozes.b : '') || cfg.vozes.a;
const KEY = () => {
  const k = process.env.ELEVENLABS_API_KEY;
  if (!k) { console.error('Falta a chave: defina a variável de ambiente ELEVENLABS_API_KEY (veja AUDIO-ELEVENLABS.md).'); process.exit(1); }
  return k;
};

/* ---------- API ---------- */
async function api(pathname, opts = {}) {
  const res = await fetch(API + pathname, { ...opts, headers: { 'xi-api-key': KEY(), ...(opts.headers || {}) } });
  if (!res.ok) {
    let detail = ''; try { detail = JSON.stringify((await res.json()).detail); } catch { /* sem corpo */ }
    const err = new Error(`HTTP ${res.status} ${detail}`); err.status = res.status; err.detail = detail; throw err;
  }
  return res;
}
async function credits() {
  try {
    const s = await (await api('/user/subscription')).json();
    return { used: s.character_count, limit: s.character_limit, tier: s.tier };
  } catch (e) { return null; }
}
let realCost = 0; // créditos realmente cobrados (cabeçalho character-cost da resposta)
let noLangCode = false; // o modelo recusou language_code uma vez: não manda mais
// o que a voz lê: a barra de alternativas ("bin / heiße") vira pausa, para não ser pronunciada
let spoken = (t) => t; // trocado por falavel() de art.js quando o app é carregado (mesma regra do navegador)
async function tts(cfg, item) {
  const voice = voiceFor(cfg, item.slot);
  const body = {
    text: spoken(item.text), model_id: cfg.modelo,
    voice_settings: { stability: cfg.estabilidade, similarity_boost: cfg.similaridade, speed: cfg.velocidade },
  };
  // pede alemão explícito: palavras soltas que existem em inglês (null, elf) saíam lidas em inglês.
  // Se o modelo não aceitar o parâmetro, o gerador tenta de novo sem ele e lembra para os próximos.
  if (/flash|turbo/i.test(cfg.modelo) || !noLangCode) body.language_code = 'de';
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await api(`/text-to-speech/${voice}?output_format=${cfg.formato}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'audio/mpeg' }, body: JSON.stringify(body),
      });
      realCost += Number(res.headers.get('character-cost')) || 0;
      return Buffer.from(await res.arrayBuffer());
    } catch (e) {
      if (/quota_exceeded|insufficient/i.test(e.detail || '')) throw Object.assign(new Error('Créditos da ElevenLabs esgotados.'), { fatal: true });
      if (e.status === 402) throw Object.assign(new Error('Esta voz exige plano pago na ElevenLabs (o plano grátis não usa vozes da Voice Library pela API).'), { fatal: true });
      if (e.status === 401 || e.status === 403) throw Object.assign(new Error('Chave recusada pela ElevenLabs (' + e.message + ').'), { fatal: true });
      if ((e.status === 422 || e.status === 400) && body.language_code && /language/i.test(e.detail || '') && !/flash|turbo/i.test(cfg.modelo)) {
        noLangCode = true; delete body.language_code; console.log('  (o modelo não aceita language_code; seguindo sem ele)'); continue;
      }
      if (e.status === 422 || e.status === 400) throw e; // problema neste texto: pula
      if (attempt >= 5) throw e;
      const wait = (e.status === 429 ? 4000 : 1500) * attempt;
      await new Promise((r) => setTimeout(r, wait));
    }
  }
}

/* ---------- índice para o app ---------- */
function writeIndex(items) {
  const h = [], size = {};
  if (fs.existsSync(OUT)) for (const d of fs.readdirSync(OUT)) {
    const dir = path.join(OUT, d); if (!fs.statSync(dir).isDirectory()) continue;
    for (const f of fs.readdirSync(dir)) { const st = fs.statSync(path.join(dir, f)); if (f.endsWith('.mp3') && st.size > 0) { h.push(f.slice(0, -4)); size[f.slice(0, -4)] = st.size; } }
  }
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, 'index.json'), JSON.stringify({ v: 1, n: h.length, h: h.sort() }));
  // pacotes para o download offline: audio/levels.json = { A1: { n, mb, h: [...] }, … }
  if (items) {
    const lv = {};
    items.forEach((x) => { if (!size[x.hash]) return; const g = (lv[x.grupo] = lv[x.grupo] || { n: 0, bytes: 0, h: [] }); g.n++; g.bytes += size[x.hash]; g.h.push(x.hash); });
    Object.values(lv).forEach((g) => { g.mb = Math.round(g.bytes / 1e5) / 10; delete g.bytes; });
    fs.writeFileSync(path.join(OUT, 'levels.json'), JSON.stringify(lv));
  }
  return h.length;
}

/* ---------- comandos ---------- */
const fmt = (n) => Math.round(n).toLocaleString('pt-BR');
async function simulate(items, cfg) {
  const done = items.filter((x) => fs.existsSync(fileOf(x.hash)));
  const todo = items.filter((x) => !fs.existsSync(fileOf(x.hash)));
  const chars = (l) => l.reduce((s, x) => s + x.text.length, 0);
  const byCat = {};
  todo.forEach((x) => { const c = (byCat[x.cat] = byCat[x.cat] || { n: 0, ch: 0 }); c.n++; c.ch += x.text.length; });
  console.log(`\nÁudios no app: ${fmt(items.length)} (${fmt(chars(items))} caracteres)`);
  console.log(`Já gerados:    ${fmt(done.length)}`);
  console.log(`Faltam:        ${fmt(todo.length)} (${fmt(chars(todo))} caracteres)\n`);
  Object.entries(byCat).sort((a, b) => b[1].ch - a[1].ch).forEach(([k, v]) => console.log(`  ${k.padEnd(18)} ${fmt(v.n).padStart(6)} itens ${fmt(v.ch).padStart(8)} caracteres`));
  console.log(`\nCréditos estimados com o modelo atual (${cfg.modelo}): ${fmt(chars(todo) * creditRate(cfg.modelo))}`);
  console.log(`  Multilingual v2 / v3 / v4: ~${fmt(chars(todo) * 0.45)}   ·   Flash v2.5 / v4 Turbo: ~${fmt(chars(todo) * 0.22)}`);
  console.log('  Some uns 20% de folga para refazer áudios que saírem ruins.');
  const missing = ['a', 'b'].filter((s) => !cfg.vozes[s]);
  if (missing.length) console.log(`\n⚠️  Falta escolher as vozes ${missing.join(' e ')} em tools/elevenlabs.json (rode: node tools/audio-elevenlabs.mjs vozes).`);
  if (process.env.ELEVENLABS_API_KEY) { const c = await credits(); if (c) console.log(`\nSua conta (${c.tier}): ${fmt(c.limit - c.used)} créditos disponíveis de ${fmt(c.limit)}.`); }
  console.log('');
}

async function listVoices() {
  const { voices } = await (await api('/voices')).json();
  console.log('\nVozes da sua conta (copie o ID para tools/elevenlabs.json):\n');
  voices.forEach((v) => {
    const lb = v.labels || {};
    console.log(`${v.voice_id}  ${v.name.padEnd(28)} ${[lb.gender, lb.accent, lb.language, lb.age, lb.use_case].filter(Boolean).join(' · ')}`);
  });
  console.log('\nPara vozes nativas alemãs, procure "German" em Voices → Voice Library no site e adicione à sua conta; depois rode este comando de novo.\n');
}

async function generate(items, cfg, limitArg) {
  if (!cfg.vozes.a) { console.error('Escolha pelo menos a voz "a" em tools/elevenlabs.json (rode: node tools/audio-elevenlabs.mjs vozes).'); process.exit(1); }
  const rate = creditRate(cfg.modelo);
  const limit = limitArg === 'tudo' ? Infinity : Number(limitArg);
  if (!Number.isFinite(limit) && limitArg !== 'tudo') { console.error('Diga quantos créditos no máximo: --limite 20000 (ou --limite tudo).'); process.exit(1); }
  const todo = items.filter((x) => !fs.existsSync(fileOf(x.hash)));
  const acc = await credits();
  if (acc) console.log(`Créditos disponíveis na conta: ${fmt(acc.limit - acc.used)}`);
  let spent = 0, ok = 0, fail = 0, stop = false, idx = 0;
  const queue = [];
  for (const x of todo) { const cost = x.text.length * rate; if (spent + cost > limit) break; spent += cost; queue.push(x); }
  console.log(`Gerando ${fmt(queue.length)} de ${fmt(todo.length)} áudios pendentes (~${fmt(spent)} créditos). Ctrl+C interrompe; o que já foi gerado fica salvo.\n`);
  const t0 = Date.now();
  const worker = async () => {
    while (!stop && idx < queue.length) {
      const x = queue[idx++];
      try {
        const buf = await tts(cfg, x);
        const f = fileOf(x.hash); fs.mkdirSync(path.dirname(f), { recursive: true });
        fs.writeFileSync(f + '.tmp', buf); fs.renameSync(f + '.tmp', f);
        ok++;
        if (ok % 25 === 0) { process.stdout.write(`  ${fmt(ok)}/${fmt(queue.length)} prontos (${Math.round((Date.now() - t0) / 1000)} s)\n`); }
        if (ok % 200 === 0) writeIndex(allItems);
      } catch (e) {
        fail++; console.error(`  ✗ "${x.text.slice(0, 50)}": ${e.message}`);
        if (e.fatal) { stop = true; }
      }
    }
  };
  await Promise.all(Array.from({ length: Math.max(1, cfg.paralelo) }, worker));
  const n = writeIndex(allItems);
  console.log(`\nPronto: ${fmt(ok)} gerados, ${fmt(fail)} com erro, ${fmt(realCost)} créditos gastos. Índice com ${fmt(n)} áudios em audio/index.json.`);
  if (queue.length < todo.length) console.log(`Ainda faltam ${fmt(todo.length - ok)} áudios. Rode de novo com outro --limite para continuar.`);
}

async function sample(items, cfg) {
  const pick = (pred, n) => items.filter((x) => pred(x) && !fs.existsSync(fileOf(x.hash))).slice(0, n);
  const chosen = [
    ...pick((x) => x.cat === 'vocabulário' && !x.text.includes(' '), 3),
    ...pick((x) => x.cat === 'exemplos' && x.text.split(' ').length > 4, 3),
    ...pick((x) => x.cat === 'diálogos' && x.slot === 'a', 2),
    ...pick((x) => x.cat === 'diálogos' && x.slot === 'b', 2),
    ...pick((x) => x.cat === 'textos longos' && x.text.length > 120, 2),
  ];
  await generate(chosen, cfg, 'tudo');
  console.log('\nOuça no app (recarregue a página):');
  chosen.forEach((x) => console.log(`  [voz ${x.slot}] ${x.text.slice(0, 90)}`));
}

// Procura áudios suspeitos: duração muito diferente do esperado para o tamanho do texto (fala cortada, repetida ou com ruído).
// MP3 a 64 kbps: duração ≈ bytes × 8 / 64000. Grava a lista em tools/audio-suspeitos.txt.
function check(items, cfg) {
  const kbps = Number((/_(\d+)$/.exec(cfg.formato) || [])[1]) || 64;
  const rows = items.filter((x) => fs.existsSync(fileOf(x.hash))).map((x) => {
    const sec = (fs.statSync(fileOf(x.hash)).size * 8) / (kbps * 1000);
    return { ...x, sec, cps: x.text.length / sec };
  });
  const sorted = rows.filter((x) => x.text.length >= 15).map((x) => x.cps).sort((a, b) => a - b);
  const med = sorted[Math.floor(sorted.length / 2)] || 14;
  const bad = rows.filter((x) => {
    const expect = Math.max(0.6, x.text.length / med);
    return x.sec > expect * 2.5 + 1.5 || (x.text.length >= 15 && x.sec < expect * 0.45);
  }).sort((a, b) => b.sec / (b.text.length / med) - a.sec / (a.text.length / med));
  const lines = bad.map((x) => `${x.sec.toFixed(1)} s (esperado ~${(x.text.length / med).toFixed(1)} s)\t[voz ${x.slot}]\t${x.text}`);
  fs.writeFileSync(path.join(ROOT, 'tools', 'audio-suspeitos.txt'), lines.join('\n') + '\n');
  console.log(`\n${fmt(rows.length)} áudios conferidos · ritmo mediano ${med.toFixed(1)} caracteres/s · ${bad.length} suspeitos (lista em tools/audio-suspeitos.txt)\n`);
  lines.slice(0, 40).forEach((l) => console.log('  ' + l));
  // os extremos, mesmo dentro do normal, para ouvir por amostragem
  const ratio = (x) => x.sec / Math.max(0.6, x.text.length / med);
  const ext = [...rows].sort((a, b) => ratio(b) - ratio(a));
  console.log('Mais longos que o esperado:'); ext.slice(0, 6).forEach((x) => console.log(`  ${x.sec.toFixed(1)} s · ${x.text.slice(0, 70)}`));
  console.log('Mais curtos que o esperado (frases):'); ext.filter((x) => x.text.length >= 15).slice(-6).forEach((x) => console.log(`  ${x.sec.toFixed(1)} s · ${x.text.slice(0, 70)}`));
  return bad;
}

async function redo(items, cfg, text) {
  const t = sayText(text), hits = items.filter((x) => x.text === t);
  if (!hits.length) { console.error(`Não encontrei "${t}" entre os áudios do app.`); process.exit(1); }
  hits.forEach((x) => { const f = fileOf(x.hash); if (fs.existsSync(f)) fs.unlinkSync(f); });
  await generate(hits, cfg, 'tudo');
}

/* ---------- main ---------- */
const [cmd = 'simular', ...rest] = process.argv.slice(2);
const opt = (name) => { const i = rest.indexOf('--' + name); return i >= 0 ? rest[i + 1] : undefined; };
try {
  const cfg = loadCfg();
  const needItems = cmd !== 'vozes';
  const app = needItems ? loadApp() : null; if (app) spoken = app.falavel;
  const items = needItems ? inventory(app) : [];
  allItems = items;
  if (cmd === 'simular') await simulate(items, cfg);
  else if (cmd === 'vozes') await listVoices();
  else if (cmd === 'amostra') await sample(items, cfg);
  else if (cmd === 'gerar') await generate(items, cfg, opt('limite'));
  else if (cmd === 'refazer') await redo(items, cfg, rest.filter((x) => !x.startsWith('--')).join(' '));
  else if (cmd === 'conferir') check(items, cfg);
  else if (cmd === 'limpar') {
    // apaga áudios que nenhuma frase atual usa (por exemplo, gravados com a voz errada antes de uma correção)
    const keep = new Set(items.map((x) => x.hash)); let n = 0;
    if (fs.existsSync(OUT)) for (const d of fs.readdirSync(OUT)) {
      const dir = path.join(OUT, d); if (!fs.statSync(dir).isDirectory()) continue;
      for (const f of fs.readdirSync(dir)) if (f.endsWith('.mp3') && !keep.has(f.slice(0, -4))) { fs.unlinkSync(path.join(dir, f)); n++; }
      if (!fs.readdirSync(dir).length) fs.rmdirSync(dir);
    }
    console.log(`${n} áudios sem uso apagados. Índice com ${writeIndex(items)} áudios.`);
  }
  else if (cmd === 'simbolos') {
    // regrava os áudios cujo texto falado muda com falavel() (setas, pontos médios, sinais, traços, emojis); só "/" já foi regravado antes
    const hit = items.filter((x) => spoken(x.text) !== x.text.replace(/\s+/g, ' ').trim() && (/[→⇒←·•|=+–—]|->/.test(x.text) || /\p{Extended_Pictographic}/u.test(x.text)));
    console.log(hit.length + ' áudios com símbolos ' + (rest.includes('--simular') ? 'seriam regravados (simulação, nada foi apagado)' : 'serão regravados'));
    if (rest.includes('--simular')) hit.slice(0, 60).forEach((x) => console.log('  ' + x.text + '  →  ' + spoken(x.text)));
    else { hit.forEach((x) => { const f = fileOf(x.hash); if (fs.existsSync(f)) fs.unlinkSync(f); }); await generate(hit, cfg, 'tudo'); }
  }
  else if (cmd === 'barras') { const hit = items.filter((x) => x.text.includes('/')); hit.forEach((x) => { const f = fileOf(x.hash); if (fs.existsSync(f)) fs.unlinkSync(f); }); console.log(hit.length + ' áudios com barra serão regravados'); await generate(hit, cfg, 'tudo'); }
  else if (cmd === 'listar') { const re = new RegExp(rest.filter((x) => !x.startsWith('--')).join(' ') || '/'); const hit = items.filter((x) => re.test(x.text)); hit.forEach((x) => console.log('[' + x.slot + '] ' + x.text)); console.log(hit.length + ' textos'); }
  else if (cmd === 'refazer-licao') {
    // apaga e grava de novo todos os áudios das lições pedidas (ids separados por vírgula: n-alter,6)
    const want = new Set((rest.find((x) => !x.startsWith('--')) || '').split(',').filter(Boolean));
    const hit = items.filter((x) => [...x.sids].some((s) => want.has(s)));
    if (!hit.length) { console.error('Nenhum áudio encontrado para: ' + [...want].join(', ')); process.exit(1); }
    console.log(`${hit.length} áudios das lições ${[...want].join(', ')} (${fmt(hit.reduce((s, x) => s + x.text.length, 0))} caracteres)`);
    if (rest.includes('--simular')) hit.forEach((x) => console.log('  [' + x.slot + '] ' + x.text));
    else { hit.forEach((x) => { const f = fileOf(x.hash); if (fs.existsSync(f)) fs.unlinkSync(f); }); await generate(hit, cfg, 'tudo'); }
  }
  else if (cmd === 'indice') console.log(`Índice com ${writeIndex(items)} áudios.`);
  else { console.error(`Comando desconhecido: ${cmd}. Use simular, vozes, amostra, gerar, refazer, conferir, limpar ou indice.`); process.exit(1); }
} catch (e) {
  console.error('Erro:', e.status === 401 && /missing_permissions/.test(e.detail || '') ? 'a chave da API não tem a permissão necessária: ' + e.message : e.message);
  process.exitCode = 1; // sem process.exit(): no Windows, sair com uma conexão aberta derruba o Node
}
