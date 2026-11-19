/* Винарија Новак — понашање сајта */
(function () {
  'use strict';
  var d = document, root = d.documentElement, body = d.body;
  var shot = /[?&]shot/.test(location.search);
  var still = shot || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  if (shot) root.classList.add('shot');

  /* ---------- боце (SVG) ---------- */
  var WINES = {
    bagrina:   { lines: ['БАГРИНА'], band: '#d6a23e' },
    kaberne:   { lines: ['КАБЕРНЕ', 'СОВИЊОН'], band: '#a3283a' },
    tamjanika: { lines: ['ЦРНА', 'ТАМЈАНИКА'], band: '#8a3a64' }
  };
  var uid = 0;
  var STONES = [[18,357,24,9],[44,357,30,9],[76,357,26,9],[22,368,30,9],[54,368,22,9],[78,368,22,9],[16,379,18,9],[36,379,34,9],[72,379,32,9]];
  function bottle(key) {
    var w = WINES[key]; if (!w) return '';
    var n = ++uid, g = 'g' + n, s = 'sh' + n, c = 'cu' + n, cap = 'cp' + n;
    var name = w.lines.length === 1
      ? '<text x="60" y="314" text-anchor="middle" font-family="Oswald,sans-serif" font-weight="500" font-size="10.5" letter-spacing="2.2" fill="url(#' + c + ')">' + w.lines[0] + '</text>'
      : '<text x="60" y="306" text-anchor="middle" font-family="Oswald,sans-serif" font-weight="500" font-size="9.5" letter-spacing="2" fill="url(#' + c + ')">' + w.lines[0] + '</text>' +
        '<text x="60" y="319" text-anchor="middle" font-family="Oswald,sans-serif" font-weight="500" font-size="9.5" letter-spacing="2" fill="url(#' + c + ')">' + w.lines[1] + '</text>';
    var stones = STONES.map(function (r) { return '<rect x="' + r[0] + '" y="' + r[1] + '" width="' + r[2] + '" height="' + r[3] + '" rx="2.2"/>'; }).join('');
    return '<svg viewBox="0 0 120 440" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">' +
      '<defs>' +
        '<linearGradient id="' + g + '" x1="0" x2="1"><stop offset="0" stop-color="#030303"/><stop offset=".16" stop-color="#232120"/><stop offset=".32" stop-color="#0b0a0a"/><stop offset=".72" stop-color="#020202"/><stop offset=".9" stop-color="#181615"/><stop offset="1" stop-color="#040404"/></linearGradient>' +
        '<linearGradient id="' + s + '" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".75"/><stop offset=".25" stop-color="#000" stop-opacity="0"/><stop offset=".75" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".8"/></linearGradient>' +
        '<linearGradient id="' + c + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f0c79f"/><stop offset=".45" stop-color="#c98b5b"/><stop offset=".7" stop-color="#9c653c"/><stop offset="1" stop-color="#e2ad80"/></linearGradient>' +
        '<linearGradient id="' + cap + '" x1="0" x2="1"><stop offset="0" stop-color="#0a0909"/><stop offset=".3" stop-color="#2a2725"/><stop offset=".55" stop-color="#121110"/><stop offset="1" stop-color="#050505"/></linearGradient>' +
      '</defs>' +
      '<path d="M50 14V118c0 22-36 32-38 64v244q0 8 8 8h80q8 0 8-8V182c-2-32-38-42-38-64V14z" fill="url(#' + g + ')"/>' +
      '<rect x="46.5" y="3" width="27" height="96" rx="3" fill="url(#' + cap + ')"/>' +
      '<rect x="46.5" y="3" width="27" height="7" rx="3" fill="#2d2a27"/>' +
      '<rect x="46.5" y="86" width="27" height="5" fill="' + w.band + '"/>' +
      '<rect x="46.5" y="92.5" width="27" height="1" fill="url(#' + c + ')" opacity=".8"/>' +
      '<use href="#seal" x="52" y="40" width="16" height="16" color="#c98b5b" opacity=".85"/>' +
      '<rect x="12" y="232" width="96" height="164" fill="#100f0e"/>' +
      '<rect x="16.5" y="236.5" width="87" height="155" fill="none" stroke="url(#' + c + ')" stroke-width=".6" opacity=".5"/>' +
      '<use href="#seal" x="39" y="246" width="42" height="42" color="#c98b5b"/>' +
      name +
      '<text x="60" y="350" text-anchor="middle" font-family="Oswald,sans-serif" font-weight="700" font-size="25" letter-spacing=".5" fill="url(#' + c + ')" filter="url(#rough)">НОВАК</text>' +
      '<g fill="url(#' + c + ')" opacity=".62">' + stones + '</g>' +
      '<rect x="12" y="232" width="96" height="164" fill="url(#' + s + ')"/>' +
      '<rect x="22" y="192" width="5" height="230" rx="2.5" fill="#fff" opacity=".08"/>' +
      '<rect x="53" y="16" width="2.5" height="80" rx="1.2" fill="#fff" opacity=".1"/>' +
      '<path d="M50 14V118c0 22-36 32-38 64v244q0 8 8 8h80q8 0 8-8V182c-2-32-38-42-38-64V14z" fill="none" stroke="url(#rm' + n + ')" stroke-width="1.6"/>' +
      '<linearGradient id="rm' + n + '" x1="0" x2="1"><stop offset="0" stop-color="#e6ad7c" stop-opacity=".75"/><stop offset=".22" stop-color="#e6ad7c" stop-opacity="0"/><stop offset=".78" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".35"/></linearGradient>' +
      '<path d="M50 118c0 22-36 32-38 64" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="2"/>' +
    '</svg>';
  }
  d.querySelectorAll('[data-bottle]').forEach(function (el) { el.innerHTML = bottle(el.getAttribute('data-bottle')); });

  /* ---------- профил укуса и термометар ---------- */
  d.querySelectorAll('.scale').forEach(function (s) {
    var v = +s.getAttribute('data-v') || 0, dots = s.querySelector('.dots'), h = '';
    for (var i = 1; i <= 5; i++) h += '<i' + (i <= v ? ' class="f"' : '') + '></i>';
    dots.innerHTML = h; dots.setAttribute('role', 'img'); dots.setAttribute('aria-label', v + ' / 5');
  });
  d.querySelectorAll('.thermo').forEach(function (t) {
    var deg = +t.getAttribute('data-t') || 12, lvl = Math.max(.15, Math.min(.95, (deg - 4) / 18)), y = 98 - lvl * 84;
    t.innerHTML = '<svg viewBox="0 0 22 120" aria-hidden="true"><rect x="7" y="4" width="8" height="98" rx="4" fill="none" stroke="#3a332c" stroke-width="1.5"/>' +
      '<rect x="9.5" y="' + y.toFixed(1) + '" width="3" height="' + (104 - y).toFixed(1) + '" rx="1.5" fill="#c98b5b"/><circle cx="11" cy="106" r="8" fill="#c98b5b"/>' +
      [20, 40, 60, 80].map(function (yy) { return '<path d="M17 ' + yy + 'h4" stroke="#776c5f" stroke-width="1"/>'; }).join('') + '</svg>';
  });

  /* ---------- заглавље и мени ---------- */
  var top = d.getElementById('top'), page = body.getAttribute('data-page');
  d.querySelectorAll('.nav a[data-page="' + page + '"]').forEach(function (a) { a.setAttribute('aria-current', 'page'); });
  var mbar = d.querySelector('.mbar');
  function onScroll() {
    var y = window.scrollY;
    if (top) top.classList.toggle('solid', y > 30);
    if (mbar) mbar.classList.toggle('show', y > window.innerHeight * .45);
  }
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  var burger = d.querySelector('.burger');
  function closeNav() { body.classList.remove('nav-open'); body.style.overflow = ''; if (burger) burger.setAttribute('aria-expanded', 'false'); }
  if (burger) {
    burger.addEventListener('click', function () {
      var open = body.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      body.style.overflow = open ? 'hidden' : '';
    });
    d.querySelectorAll('.nav a').forEach(function (a) { a.addEventListener('click', closeNav); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });
  }

  /* ---------- појављивање ---------- */
  var rv = d.querySelectorAll('.rv');
  if (still || !('IntersectionObserver' in window)) {
    rv.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    rv.forEach(function (el) { io.observe(el); });
  }
  function ready() { root.classList.add('ready'); }
  if (d.fonts && d.fonts.ready) { Promise.race([d.fonts.ready, new Promise(function (r) { setTimeout(r, 900); })]).then(ready); } else ready();

  /* ---------- бројач 100% ---------- */
  var cnt = d.querySelector('[data-count]');
  if (cnt && !still && 'IntersectionObserver' in window) {
    var to = +cnt.getAttribute('data-count'); cnt.textContent = '0';
    var cio = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return; cio.disconnect();
      var t0 = performance.now(), dur = 1700;
      (function step(t) {
        var p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
        cnt.textContent = Math.round(e * to); if (p < 1) requestAnimationFrame(step);
      })(t0);
    }, { threshold: .5 });
    cio.observe(cnt);
  }

  /* ---------- вина: боца која прати текст ---------- */
  var stage = d.querySelector('.stage');
  var navLinks = d.querySelectorAll('.wine-nav a');
  var COLORS = { bagrina: 'var(--bagrina)', kaberne: 'var(--kaberne)', tamjanika: 'var(--tamjanika)' };
  function setActive(key) {
    if (stage) {
      stage.querySelectorAll('[data-key]').forEach(function (b) {
        var svg = b.querySelector('svg'); if (svg) svg.classList.toggle('on', b.getAttribute('data-key') === key);
      });
      stage.style.setProperty('--glow', COLORS[key] || 'var(--copper)');
      var h = d.querySelector('#' + key + ' h2'), meta = stage.querySelector('.meta');
      if (h && meta) meta.textContent = h.textContent;
    }
    navLinks.forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + key); });
    centerChip();
  }
  // на телефону активни линк у траци вина клизи у средину
  function centerChip() {
    var on = d.querySelector('.wine-nav a.on'), wrap = on && on.parentNode;
    if (!wrap || wrap.scrollWidth <= wrap.clientWidth) return;
    wrap.scrollTo({ left: on.offsetLeft - (wrap.clientWidth - on.offsetWidth) / 2, behavior: still ? 'auto' : 'smooth' });
  }
  var wines = d.querySelectorAll('.wine[data-key]');
  if (wines.length) {
    setActive('bagrina');
    if ('IntersectionObserver' in window) {
      var wio = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) setActive(e.target.getAttribute('data-key')); });
      }, { rootMargin: '-45% 0px -50% 0px' });
      wines.forEach(function (w) { wio.observe(w); });
      var pk = d.getElementById('prilika');
      if (pk) new IntersectionObserver(function (es) {
        if (es[0].isIntersecting) { navLinks.forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#prilika'); }); centerChip(); }
      }, { rootMargin: '-45% 0px -50% 0px' }).observe(pk);
    }
    d.addEventListener('novak:lang', function () {
      var on = d.querySelector('.wine-nav a.on'); if (on && on.getAttribute('href') !== '#prilika') setActive(on.getAttribute('href').slice(1));
    });
  }

  /* ---------- вртешка вина (телефон): тачкице ---------- */
  d.querySelectorAll('.wines, .gallery').forEach(function (track) {
    var cards = track.children, dots = d.createElement('div');
    if (!cards.length) return;
    dots.className = 'wdots'; dots.setAttribute('aria-hidden', 'true');
    for (var c = 0; c < cards.length; c++) dots.appendChild(d.createElement('i'));
    track.parentNode.insertBefore(dots, track.nextSibling);
    var syncDots = function () {
      var i = Math.round(track.scrollLeft / Math.max(1, cards[0].offsetWidth + 12));
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) i = cards.length - 1;
      dots.querySelectorAll('i').forEach(function (dot, k) { dot.classList.toggle('on', k === i); });
    };
    track.addEventListener('scroll', syncDots, { passive: true }); syncDots();
  });

  /* ---------- лајтбокс за фотографије ---------- */
  var full = d.querySelectorAll('[data-full]');
  if (full.length && typeof HTMLDialogElement === 'function') {
    var lb = d.createElement('dialog'); lb.className = 'lb';
    lb.innerHTML = '<button class="lb-x" type="button" aria-label="×">×</button><img alt=""><p></p>';
    body.appendChild(lb);
    var lbImg = lb.querySelector('img'), lbCap = lb.querySelector('p'), lbX = lb.querySelector('.lb-x');
    full.forEach(function (b) {
      b.addEventListener('click', function () {
        var img = b.querySelector('img'), fig = b.closest('figure'), cap = fig && fig.querySelector('figcaption');
        lbImg.src = b.getAttribute('data-full'); lbImg.alt = img ? img.alt : '';
        lbCap.textContent = !cap ? '' : cap.children.length
          ? [].map.call(cap.children, function (c) { return c.textContent.trim(); }).join(' · ')
          : cap.textContent.replace(/\s+/g, ' ').trim();
        lbX.setAttribute('aria-label', root.lang === 'en' ? 'Close' : 'Затвори');
        lb.showModal();
      });
    });
    lbX.addEventListener('click', function () { lb.close(); });
    lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
  }

  /* ---------- бирач вина ---------- */
  var chips = d.querySelectorAll('[data-pick]'), answer = d.querySelector('.answer');
  chips.forEach(function (ch) {
    ch.addEventListener('click', function () {
      var k = ch.getAttribute('data-pick');
      chips.forEach(function (o) { o.setAttribute('aria-pressed', o === ch ? 'true' : 'false'); });
      var empty = answer.querySelector('.empty'); if (empty) empty.hidden = true;
      answer.querySelectorAll('.ans').forEach(function (a) {
        var on = a.getAttribute('data-for') === k; a.hidden = !on;
        if (on) { answer.style.setProperty('--c', COLORS[a.getAttribute('data-wine')]); a.classList.remove('fade'); void a.offsetWidth; a.classList.add('fade'); }
      });
      // на телефону је одговор испод дугмића — доведи га у видно поље
      var r = answer.getBoundingClientRect();
      if (r.top > window.innerHeight * .55 || r.bottom < 80) answer.scrollIntoView({ behavior: still ? 'auto' : 'smooth', block: 'center' });
    });
  });

  /* ---------- образац (mailto) ---------- */
  var form = d.getElementById('upit');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements, name = f['name'].value.trim(), mail = f['email'].value.trim();
    if (!name) { f['name'].focus(); return; }
    if (!/^\S+@\S+\.\S+$/.test(mail)) { f['email'].focus(); return; }
    var topic = f['topic'].options[f['topic'].selectedIndex].text;
    var txt = f['message'].value.trim() + '\n\n— ' + name + ' (' + mail + ')';
    location.href = 'mailto:info@vinarijanovak.rs?subject=' + encodeURIComponent(topic + ' — ' + name) + '&body=' + encodeURIComponent(txt);
  });

  /* ---------- језик ---------- */
  var EN = window.NOVAK_EN || {}, KEY = 'novak-lang', lang = 'sr';
  try { lang = localStorage.getItem(KEY) === 'en' ? 'en' : 'sr'; } catch (e) {}
  var srHTML = new Map(), srAttr = new Map(), srTitle = d.title;
  var metaDesc = d.querySelector('meta[name="description"]'), srDesc = metaDesc ? metaDesc.content : '';
  function apply(l) {
    var en = l === 'en';
    root.lang = en ? 'en' : 'sr-Cyrl';
    d.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (!srHTML.has(el)) srHTML.set(el, el.innerHTML);
      var k = el.getAttribute('data-i18n');
      el.innerHTML = en && EN[k] != null ? EN[k] : srHTML.get(el);
    });
    d.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      if (!srAttr.has(el)) srAttr.set(el, {});
      var store = srAttr.get(el);
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':'), a = p[0], k = p[1];
        if (!(a in store)) store[a] = el.getAttribute(a);
        el.setAttribute(a, en && EN[k] != null ? EN[k] : store[a]);
      });
    });
    d.title = en && EN['title.' + page] ? EN['title.' + page] : srTitle;
    if (metaDesc) metaDesc.content = en && EN['desc.' + page] ? EN['desc.' + page] : srDesc;
    d.querySelectorAll('[data-lang-toggle]').forEach(function (b) {
      b.textContent = en ? 'ЋИР' : 'EN';
      b.setAttribute('aria-label', en ? 'Српска верзија (ћирилица)' : 'English version');
      b.setAttribute('lang', en ? 'sr-Cyrl' : 'en');
    });
    d.dispatchEvent(new CustomEvent('novak:lang', { detail: l }));
  }
  if (lang === 'en') apply('en');
  d.querySelectorAll('[data-lang-toggle]').forEach(function (b) {
    b.addEventListener('click', function () {
      lang = lang === 'en' ? 'sr' : 'en';
      try { localStorage.setItem(KEY, lang); } catch (e) {}
      apply(lang);
    });
  });
})();
