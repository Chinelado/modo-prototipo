"""Capturas de tela da Deutsch-Trilha para o rebranding visual.

Uso:  python tools/capturas.py  (com o servidor local em http://localhost:8765)
Cria a pasta capturas/ com telas do computador (1440x900, retina) e do celular (390x844, 3x),
usando um perfil de demonstração com progresso realista (a "Ana", no dia 34 da trilha).
A pasta capturas/ fica fora do git.
"""
import os, sys, json
from playwright.sync_api import sync_playwright

BASE = os.environ.get('TRILHA_URL', 'http://localhost:8770/')
OUT = os.path.join(os.path.dirname(__file__), '..', 'capturas-modo')

# Perfil de demonstração montado dentro da página (usa os dados reais das lições).
DEMO = r"""
(() => {
  const d0 = new Date(); const iso = (x) => x.toISOString().slice(0, 10);
  const ago = (n) => { const x = new Date(d0); x.setDate(x.getDate() - n); return iso(x); };
  const s = fresh();
  Object.assign(s, { name: 'Ana', goal: 30, start: ago(40), xp: 3180, streak: 12, best: 18, lastDay: iso(d0), freezes: 1,
    reviews: 146, maxCombo: 11, spoken: 14, perfect: 4, theme: 'dark' });
  let seed = 7; const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
  for (let d = 1; d <= 33; d++) s.done[d] = { s: rnd() < 0.7 ? 3 : 2, d: ago(40 - d) };
  const now = Date.now(), day = 864e5;
  for (let d = 1; d <= 33; d++) { const inf = dayInfo(d); if (inf.review) continue;
    LESSONS[inf.li].v.forEach((v, j) => { s.cards[v.k] = { due: now + (rnd() < 0.08 ? -day : rnd() * 9 * day), int: 3 + Math.round(rnd() * 20), ease: 2.3, reps: 2 + Math.round(rnd() * 4), lapses: rnd() < 0.2 ? 1 : 0, mods: { lin: 1 } }; }); }
  IK.forEach((k, i) => { const n = 90 + Math.round(rnd() * 120); s.stats[k] = { n, ok: Math.round(n * (0.68 + rnd() * 0.25)), rn: 30 + i * 3, rok: 22 + i * 2, t: n * (7 + rnd() * 6) }; });
  for (let i = 0; i < 14; i++) s.time[ago(i)] = (i ? 20 + Math.round(rnd() * 30) : 22) * 60;
  s.daily[iso(d0)] = { lesson: true, cards: 12, perfect: false };
  ['guide', 'first', 's3', 's7', 'w50', 'w200', 'combo', 'star', 'week', 'rev', 'speak', 'perfect', 'a1', 'hw10', 'pk3', 'rd5'].forEach((b, i) => { s.badges[b] = ago(38 - i * 2); });
  GUIDE.forEach((g) => { s.guide[g.id] = ago(41); });
  ['flughafen', 'weg', 'restaurant', 'kneipe', 'einkaufen', 'bahnhof'].forEach((p, i) => { s.pockets[p] = { ok: 4, n: 5, d: ago(20 - i) }; });
  TEXTS.slice(0, 5).forEach((t, i) => { s.reads[t.id] = { ok: 3, n: 4, d: ago(30 - i * 6) }; });
  for (let li = 0; li < 27; li++) s.hw[li] = { a: ago(39 - li) };
  // registro por resposta (Perfil por competências): taxa nas 30 últimas e total de respostas
  const att = (n, rate) => ({ n, r: Array.from({ length: Math.min(n, 30) }, () => (rnd() < rate ? 1 : 0)) });
  s.att = { L: att(146, 0.82), R: att(23, 0.74), S: att(8, 0.6), W: att(31, 0.66), voc: att(420, 0.88), gra: att(190, 0.7), pro: att(8, 0.6) };
  s.diary = [{ d: ago(2), t: 'Ich heiße Ana und ich wohne in Curitiba.', l: 0 }];
  localStorage.setItem('deutschTrilha.theme', 'light');
  localStorage.setItem('deutschTrilha.badgesOpen', '1');
  localStorage.setItem(KEY, JSON.stringify(s));
})();
"""

# (arquivo, código para chegar na tela, página inteira?)
def shots(mobile):
    S = []
    add = lambda n, js, full=False, wait=700: S.append((n, js, full, wait))
    add('01-hoje', "go('home')")
    add('01-hoje-pagina-inteira', "go('home')", True)
    add('02-aprender-trilha', "go('trilha')")
    add('02-aprender-trilha-balao', "go('trilha'); setTimeout(() => document.querySelector('.node.n-cur').dispatchEvent(new MouseEvent('click', { bubbles: true })), 300)", False, 1000)
    add('02-aprender-modulo', "go('modulo', 4)")
    add('02-aprender-modulo-pagina-inteira', "go('modulo', 4)", True)
    add('02-aprender-curriculo', "go('curriculo')")
    add('02-aprender-curriculo-busca', "go('curriculo'); const q = document.querySelector('#cq'); q.value = 'dass'; q.oninput()")
    add('02-aprender-comece-aqui', "go('guide')")
    add('09-modulo-1-novo', "go('modulo', 0)", True)
    add('09-licao-nova-alfabeto', "go('intro', LDAY[NEW_LESSONS['n-buchstabieren'].i])", False, 1200)
    add('09-ler-escrever-abertura', "go('intro', LDAY[NEW_LESSONS['n-formular'].i])", False, 1000)
    add('09-ler-escrever-pergunta', "startSession('lesson', LDAY[NEW_LESSONS['n-formular'].i])", False, 800)
    add('09-ler-escrever-ficha', "startSession('lesson', LDAY[NEW_LESSONS['n-formular'].i]); sess.queue = sess.queue.filter(x => x.k !== 'leq'); nextEx(); const v = ['silva', 'Ana', 'Curitiba', 'Brasil', '041 9988 1234', 'Portugiesisch']; document.querySelectorAll('#ex [data-f]').forEach((i, j) => (i.value = v[j])); document.querySelector('#lwChk').click()", False, 800)
    add('03-aula', "S.lstep = {}; go('intro', LDAY[LBYSID['29'].i])", False, 1200)
    add('03-aula-2-entender', "go('intro', LDAY[LBYSID['29'].i]); document.querySelector('[data-ls=\"1\"]').click()", False, 1200)
    add('03-aula-2-entender-parte-3', "go('intro', LDAY[LBYSID['29'].i]); document.querySelector('[data-ls=\"1\"]').click(); document.querySelector('#lsNext').click(); document.querySelector('#lsNext').click()", False, 1200)
    add('03-aula-2-entender-resumo', "go('intro', LDAY[LBYSID['29'].i]); document.querySelector('[data-ls=\"1\"]').click(); document.querySelectorAll('[data-pd]')[document.querySelectorAll('[data-pd]').length - 1].click()", False, 1200)
    add('03-aula-3-palavras', "go('intro', LDAY[LBYSID['29'].i]); document.querySelector('[data-ls=\"2\"]').click()", False, 1000)
    add('03-aula-4-praticar', "go('intro', LDAY[LBYSID['29'].i]); document.querySelector('[data-ls=\"3\"]').click()", False, 800)
    add('03-aula-5-ir-alem', "go('intro', LDAY[LBYSID['29'].i]); document.querySelector('[data-ls=\"4\"]').click()", False, 800)
    add('03-aula-0-aquecimento', "const d = currentDay(); lsGet(d).warm = false; lsGet(d).s = 0; go('intro', d)", False, 900)
    add('03-aula-6-conclusao', "const l = LBYSID['29']; startSession('lesson', LDAY[l.i]); sess.errs = [{ k: 'lin', li: l.i, ans: fill(l.cz[0]), keys: [] }, { k: 'int', li: l.i, ans: l.dlg[3].de + ' = ' + l.dlg[3].pt, keys: [] }, { k: 'esp', li: l.i, ans: '', keys: l.v.slice(0, 4).map((v) => v.k) }, { k: 'intra', li: l.i, ans: 'Molde: Ich habe ein Zimmer reserviert = Reservei um quarto', keys: [] }]; sess.first = 14; sess.firstOk = 11; sess.queue.length = 0; nextEx()", True, 1000)
    add('03-aula-3-palavras-jogo', "go('intro', LDAY[LBYSID['29'].i]); document.querySelector('[data-ls=\"2\"]').click(); document.querySelector('[data-vplay]').click()", False, 800)
    add('03-aula-1-ouvir-licao-nova', "const d = LDAY[NEW_LESSONS['n-alter'].i]; lsGet(d).s = 0; lsGet(d).warm = true; go('intro', d)", False, 900)
    add('03-aula-7-autoavaliacao', "const l = NEW_LESSONS['n-alter']; startSession('lesson', LDAY[l.i]); sess.queue.length = 0; nextEx()", False, 900)
    add('02-aprender-modulo-1-objetivos', "go('modulo', 0); document.querySelector('.mo-lobj').open = true; document.querySelector('.mo-obj').scrollIntoView()", False, 800)
    add('09-esquemas-alfabeto', "const d = LDAY[NEW_LESSONS['n-buchstabieren'].i]; lsGet(d).warm = true; go('intro', d); document.querySelector('[data-ls=\"1\"]').click()", True, 900)
    add('09-esquemas-idade', "const d = LDAY[NEW_LESSONS['n-alter'].i]; lsGet(d).warm = true; go('intro', d); document.querySelector('[data-ls=\"1\"]').click()", True, 900)
    add('09-esquemas-formulario', "const d = LDAY[NEW_LESSONS['n-formular'].i]; lsGet(d).warm = true; go('intro', d); document.querySelector('[data-ls=\"1\"]').click()", True, 900)
    add('09-apoio-formulario', "const d = LDAY[NEW_LESSONS['n-formular'].i]; go('intro', d); document.querySelector('[data-ls=\"2\"]').click()", True, 900)
    add('10-esquemas-plural', "const d = LDAY[NEW_LESSONS['n-plural'].i]; lsGet(d).warm = true; go('intro', d); document.querySelector('[data-ls=\"1\"]').click()", True, 900)
    add('10-esquemas-profissoes', "const d = LDAY[NEW_LESSONS['n-beruf'].i]; lsGet(d).warm = true; go('intro', d); document.querySelector('[data-ls=\"1\"]').click()", True, 900)
    add('10-esquemas-mensagem', "const d = LDAY[NEW_LESSONS['n-nachricht'].i]; lsGet(d).warm = true; go('intro', d); document.querySelector('[data-ls=\"1\"]').click()", True, 900)
    add('10-modulo-2', "go('modulo', 1)", True)
    add('10-mensagem-perfil', "startSession('lesson', LDAY[NEW_LESSONS['n-nachricht'].i])", False, 800)
    add('10-mensagem-escrita', "startSession('lesson', LDAY[NEW_LESSONS['n-nachricht'].i]); sess.queue = sess.queue.filter(x => x.k !== 'leq'); nextEx(); const v = ['Ich heiße Ana und ich bin 30 Jahre alt.', 'Ich komme aus Recife, aber ich wohne in Curitiba.', 'Ich bin Lehrerin.', 'Ich lese gern aber ich tanze nicht gern.', 'Kochst du gern oder tanzt du gern?', 'Viele Grüße, Ana']; document.querySelectorAll('#ex [data-f]').forEach((i, j) => (i.value = v[j])); document.querySelector('#lwChk').click()", True, 800)
    add('11-esquemas-compromisso', "const d = LDAY[NEW_LESSONS['n-termin'].i]; lsGet(d).warm = true; go('intro', d); document.querySelector('[data-ls=\"1\"]').click()", True, 900)
    add('11-esquemas-convite', "const d = LDAY[NEW_LESSONS['n-einladung'].i]; lsGet(d).warm = true; go('intro', d); document.querySelector('[data-ls=\"1\"]').click()", True, 900)
    add('11-modulo-3', "go('modulo', 2)", True)
    add('11-convite-leitura', "startSession('lesson', LDAY[NEW_LESSONS['n-einladung'].i])", False, 800)
    add('11-convite-escrita', "startSession('lesson', LDAY[NEW_LESSONS['n-einladung'].i]); sess.queue = sess.queue.filter(x => x.k !== 'leq'); nextEx(); const v = ['Lieber Julia,', 'Danke für die Einladung!', 'Leider ich kann nicht kommen.', 'Ich arbeite am Samstag.', 'Viele Grüße, Ana']; document.querySelectorAll('#ex [data-f]').forEach((i, j) => (i.value = v[j])); document.querySelector('#lwChk').click()", True, 800)
    add('03-aula-guia-vagao-2', "go('guide', 'n14')", False, 1200)
    add('04-praticar', "go('praticar')")
    add('04-exercicio', "startSession('extra', null, { kinds: ['log'] })")
    add('04-exercicio-fala', "startSession('extra', null, { kinds: ['mus'], forceFala: true })")
    add('05-explorar', "go('extras', 'pocket')")
    add('06-cartas', "go('cards')")
    add('07-perfil', "go('perfil')", False, 1000)
    add('07-perfil-pagina-inteira', "go('perfil')", True, 1000)
    add('07-perfil-sem-dados', "S.att = {}; go('perfil')", False, 1000)
    add('08-tema-escuro-hoje', "setTheme('dark'); go('home')")
    return S
def run():
    os.makedirs(OUT, exist_ok=True)
    with sync_playwright() as p:
        b = p.chromium.launch()
        for mobile in (False, True):
            ctx = b.new_context(viewport={'width': 390, 'height': 844} if mobile else {'width': 1440, 'height': 900},
                                device_scale_factor=3 if mobile else 2, is_mobile=mobile, has_touch=mobile,
                                service_workers='block', locale='pt-BR')
            page = ctx.new_page()
            errs = []
            page.on('pageerror', lambda e: errs.append(str(e)))
            pre = 'celular' if mobile else 'computador'
            # boas-vindas, antes de qualquer progresso
            page.goto(BASE); page.wait_for_timeout(1200)
            page.evaluate("localStorage.clear()"); page.reload(); page.wait_for_timeout(1200)
            os.makedirs(os.path.join(OUT, pre), exist_ok=True)
            for k in (1, 2, 3):
                page.evaluate(f'onboard({k})'); page.wait_for_timeout(400)
                page.screenshot(path=os.path.join(OUT, pre, f'00-boas-vindas-{k}.png'))
            page.evaluate(DEMO); page.reload(); page.wait_for_timeout(1500)
            # avisos flutuantes (conquistas que a demonstração destrava) não entram nas capturas
            page.add_style_tag(content='#toasts { display: none !important; }')
            for name, js, full, wait in shots(mobile):
                page.evaluate("try { setTheme('light') } catch (e) {}") if 'tema-escuro' not in name else None
                page.evaluate(f"(() => {{ {js} }})()")
                page.wait_for_timeout(wait)
                page.evaluate("try { guideImgs(app); enhanceAudio(app); } catch (e) {}")
                page.wait_for_timeout(300)
                page.screenshot(path=os.path.join(OUT, pre, name + '.png'), full_page=full)
                print(pre, name)
            if errs: print('ERROS', pre, errs[:5])
            ctx.close()
        b.close()

if __name__ == '__main__':
    run()
