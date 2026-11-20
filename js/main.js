// Diaporama plein écran de l'accueil : fondu toutes les 5 s
(() => {
  const slides = Array.from(document.querySelectorAll('.hero-slides img'));
  if (slides.length < 2) return;
  let current = 0;
  let timer = null;
  const go = (i) => {
    slides[current].classList.remove('is-active');
    current = (i + slides.length) % slides.length;
    slides[current].loading = 'eager';
    slides[current].classList.add('is-active');
    slides[(current + 1) % slides.length].loading = 'eager';
  };
  const start = () => { if (!timer) timer = setInterval(() => go(current + 1), 5000); };
  const stop = () => { clearInterval(timer); timer = null; };
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  slides[1].loading = 'eager';
  start();
})();

// Carrousel « Projets sélectionnés » : flèches
(() => {
  const track = document.querySelector('.track');
  if (!track) return;
  const step = () => {
    const card = track.querySelector('.card');
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.8;
  };
  document.querySelector('.arrow-prev').addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  document.querySelector('.arrow-next').addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
})();

// Filtres de la page Projets
(() => {
  const buttons = document.querySelectorAll('.filters button');
  const tiles = document.querySelectorAll('.tile');
  buttons.forEach((btn) => btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    tiles.forEach((t) => { t.hidden = f !== 'tout' && t.dataset.type !== f; });
  }));
})();

// Visionneuse
(() => {
  const dialog = document.querySelector('.lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const figures = Array.from(document.querySelectorAll('.card, .tile'));
  const img = dialog.querySelector('.lb-img');
  const projet = dialog.querySelector('.lb-projet');
  const vue = dialog.querySelector('.lb-vue');
  const count = dialog.querySelector('.lb-count');
  let list = [];
  let index = 0;

  const show = (i) => {
    index = (i + list.length) % list.length;
    const f = list[index];
    const thumb = f.querySelector('img');
    img.src = thumb.dataset.full;
    img.alt = thumb.alt;
    projet.textContent = f.querySelector('.t-projet').textContent;
    vue.textContent = f.querySelector('.t-vue').textContent;
    count.textContent = `${index + 1} / ${list.length}`;
  };

  figures.forEach((f) => f.querySelector('.tile-open').addEventListener('click', () => {
    list = figures.filter((x) => !x.hidden);
    show(list.indexOf(f));
    dialog.showModal();
  }));
  dialog.querySelector('.lb-prev').addEventListener('click', () => show(index - 1));
  dialog.querySelector('.lb-next').addEventListener('click', () => show(index + 1));
  dialog.querySelector('.lb-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
  dialog.addEventListener('click', (e) => { if (e.target === dialog || e.target.classList.contains('lb-inner')) dialog.close(); });
})();
