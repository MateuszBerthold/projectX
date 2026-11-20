// brandscale – interakcje: kafelki platform, karuzela marek, przepływ zamówienia
(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Kafelki marketplace'ów reagujące na kursor ---------- */
  var hero = document.querySelector('.top');
  var cloud = document.getElementById('cloud');
  if (hero && cloud && !reduceMotion) {
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      cloud.style.setProperty('--mx', (x * 2).toFixed(3));
      cloud.style.setProperty('--my', (y * 2).toFixed(3));
    });
    hero.addEventListener('pointerleave', function () {
      cloud.style.setProperty('--mx', 0);
      cloud.style.setProperty('--my', 0);
    });
  }

  /* ---------- Karuzela marek ---------- */
  var brands = document.getElementById('brands');
  if (brands) {
    var list = brands.querySelector('.brands-list');
    var toggle = document.getElementById('brands-toggle');
    if (!reduceMotion && list) {
      // Druga kopia logotypów = płynna, niekończąca się pętla (ukryta dla czytników ekranu)
      Array.prototype.slice.call(list.children).forEach(function (li) {
        var copy = li.cloneNode(true);
        copy.setAttribute('aria-hidden', 'true');
        var img = copy.querySelector('img');
        if (img) img.alt = '';
        list.appendChild(copy);
      });
    }
    if (toggle) {
      toggle.addEventListener('click', function () {
        var paused = brands.classList.toggle('is-paused');
        toggle.classList.toggle('is-paused', paused);
        toggle.setAttribute('aria-label', paused ? 'Wznów przewijanie logotypów' : 'Zatrzymaj przewijanie logotypów');
      });
    }
  }

  /* ---------- Przepływ zamówienia ---------- */
  var flow = document.getElementById('flow');
  if (!flow) return;

  var steps = Array.prototype.slice.call(flow.querySelectorAll('.flow-step'));
  var details = Array.prototype.slice.call(flow.querySelectorAll('.flow-detail'));
  var progress = document.getElementById('flow-progress');
  var parcel = document.getElementById('flow-parcel');
  var playBtn = document.getElementById('flow-play');
  var prevBtn = document.getElementById('flow-prev');
  var nextBtn = document.getElementById('flow-next');
  var last = steps.length - 1;
  var current = 0;
  var timer = null;
  var playing = !reduceMotion;
  var visible = false;
  var STEP_MS = 3200;

  function show(i) {
    current = (i + steps.length) % steps.length;
    steps.forEach(function (btn, n) {
      btn.classList.toggle('is-active', n === current);
      btn.classList.toggle('is-done', n < current);
      if (n === current) btn.setAttribute('aria-current', 'step');
      else btn.removeAttribute('aria-current');
    });
    details.forEach(function (d, n) {
      d.hidden = n !== current;
      d.classList.remove('enter');
      if (n === current && !reduceMotion) { void d.offsetWidth; d.classList.add('enter'); }
    });
    var pct = (current / last) * 100;
    progress.style.width = pct + '%';
    parcel.style.left = pct + '%';
    if (!reduceMotion) {
      parcel.classList.remove('bump');
      void parcel.offsetWidth;
      parcel.classList.add('bump');
    }
  }

  function updatePlayButton() {
    playBtn.classList.toggle('is-paused', !playing);
    playBtn.setAttribute('aria-label', playing ? 'Zatrzymaj animację' : 'Odtwórz animację');
  }

  function schedule() {
    clearInterval(timer);
    timer = null;
    if (playing && visible) {
      timer = setInterval(function () { show(current + 1); }, STEP_MS);
    }
  }

  function stop() { playing = false; updatePlayButton(); schedule(); }

  steps.forEach(function (btn) {
    btn.addEventListener('click', function () {
      stop();
      show(parseInt(btn.getAttribute('data-step'), 10));
    });
  });
  prevBtn.addEventListener('click', function () { stop(); show(current - 1); });
  nextBtn.addEventListener('click', function () { stop(); show(current + 1); });
  playBtn.addEventListener('click', function () {
    playing = !playing;
    if (playing && current === last) show(0);
    updatePlayButton();
    schedule();
  });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      schedule();
    }, { threshold: 0.35 }).observe(flow);
  } else {
    visible = true;
  }

  show(0);
  updatePlayButton();
  schedule();
})();
