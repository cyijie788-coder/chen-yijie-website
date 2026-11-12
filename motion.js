(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const slides = ['sf90', 'revuelto', 'gt3', 'gtr', 'lfa'];
  const carousel = document.querySelector('.hero-carousel');
  const feature = document.querySelector('#feature-card');
  const dots = document.querySelector('.carousel-dots');
  let index = 0, auto = !reduced.matches, hover = false, focused = false, visible = true, interval;
  const pauseButton = document.querySelector('#carousel-pause');
  slides.forEach((key, i) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', '切换到 ' + briefs[key].label);
    button.onclick = () => show(i);
    dots.append(button);
  });
  function show(next, animate = true) {
    index = (next + slides.length) % slides.length;
    const key = slides[index], story = briefs[key], image = document.querySelector('#feature-image');
    feature.dataset.topic = key;
    feature.setAttribute('aria-label', '阅读 ' + story.label + ' 的故事');
    image.src = story.image;
    image.alt = story.label + ' 车型资料图';
    document.querySelector('#feature-label').textContent = 'FEATURED / ' + story.label.split(' / ')[0];
    document.querySelector('#feature-title').textContent = story.label.split(' / ')[1] || story.label;
    document.querySelector('#feature-deck').textContent = story.deck + ' ↗';
    document.querySelector('#carousel-position').textContent = String(index + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
    [...dots.children].forEach((dot, i) => { dot.setAttribute('aria-pressed', String(i === index)); dot.classList.toggle('active', i === index); });
    if (animate && !reduced.matches) image.animate([{opacity: .4}, {opacity: 1}], {duration: 500, easing: 'ease-out'});
    resetTimer();
  }
  function resetTimer() { clearInterval(interval); if (auto) interval = setInterval(() => { if (!hover && !focused && visible && !document.hidden && !document.querySelector('#brief').open) show(index + 1); }, 6500); }
  function renderPause() { pauseButton.textContent = auto ? 'Ⅱ' : '▷'; pauseButton.setAttribute('aria-label', auto ? '暂停自动轮播' : '开始自动轮播'); pauseButton.setAttribute('aria-pressed', String(!auto)); resetTimer(); }
  document.querySelector('#carousel-prev').onclick = () => show(index - 1);
  document.querySelector('#carousel-next').onclick = () => show(index + 1);
  pauseButton.onclick = () => { auto = !auto; renderPause(); };
  carousel.addEventListener('pointerenter', () => hover = true);
  carousel.addEventListener('pointerleave', () => hover = false);
  carousel.addEventListener('focusin', () => focused = true);
  carousel.addEventListener('focusout', event => { if (!carousel.contains(event.relatedTarget)) focused = false; });
  carousel.addEventListener('keydown', event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); show(index + (event.key === 'ArrowRight' ? 1 : -1)); } });
  let touchStart;
  carousel.addEventListener('touchstart', event => { const t = event.touches[0]; touchStart = {x: t.clientX, y: t.clientY}; }, {passive: true});
  carousel.addEventListener('touchend', event => { if (!touchStart) return; const t = event.changedTouches[0], dx = t.clientX - touchStart.x, dy = t.clientY - touchStart.y; if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) show(index + (dx < 0 ? 1 : -1)); touchStart = null; }, {passive: true});
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => visible = entries[0].isIntersecting, {threshold: .2}).observe(carousel);
  show(0, false); renderPause();
  reduced.addEventListener('change', () => { if (reduced.matches) { auto = false; renderPause(); document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible')); } });
  const halo = document.querySelector('.cursor-halo');
  let frame;
  document.addEventListener('pointermove', event => {
    if (!finePointer.matches || reduced.matches || event.pointerType === 'touch') return;
    cancelAnimationFrame(frame);
    const x = event.clientX, y = event.clientY;
    frame = requestAnimationFrame(() => { halo.style.transform = `translate3d(${x}px,${y}px,0)`; halo.classList.add('active'); });
  }, {passive: true});
  document.documentElement.addEventListener('pointerleave', () => halo.classList.remove('active'));
  document.querySelectorAll('.topic,.knowledge-grid button').forEach(card => {
    card.classList.add('interactive-card');
    card.addEventListener('pointermove', event => {
      if (!finePointer.matches || reduced.matches) return;
      const box = card.getBoundingClientRect(), x = event.clientX - box.left, y = event.clientY - box.top;
      card.style.setProperty('--mx', x + 'px'); card.style.setProperty('--my', y + 'px');
      card.style.setProperty('--rx', ((.5 - y / box.height) * 3).toFixed(2) + 'deg'); card.style.setProperty('--ry', ((x / box.width - .5) * 3).toFixed(2) + 'deg');
    }, {passive: true});
    card.addEventListener('pointerleave', () => { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); });
  });
  if (!reduced.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), {threshold: .06});
    document.querySelectorAll('.topic,.knowledge-section,.garage-faq,.work-layout').forEach(el => { el.classList.add('reveal'); observer.observe(el); });
  }
  const progress = document.querySelector('#reading-progress');
  let scrollFrame;
  function updateProgress() { cancelAnimationFrame(scrollFrame); scrollFrame = requestAnimationFrame(() => { const max = document.documentElement.scrollHeight - innerHeight; progress.style.transform = `scaleX(${max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0})`; }); }
  addEventListener('scroll', updateProgress, {passive: true}); addEventListener('resize', updateProgress); updateProgress();
})();
