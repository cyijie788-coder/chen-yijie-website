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
  const effects = document.createElement('div');
  effects.className = 'cursor-effects'; effects.setAttribute('aria-hidden', 'true');
  document.body.append(effects); effects.append(halo);
  const trail = Array.from({length: 9}, (_, i) => {
    const dot = document.createElement('i'); dot.className = 'cursor-trail';
    dot.style.setProperty('--tail-index', i); effects.append(dot);
    return {el: dot, x: 0, y: 0};
  });
  let pointerFrame = 0, pointerActive = false, lastMove = 0, x = 0, y = 0, ringX = 0, ringY = 0;
  const pointerAllowed = event => finePointer.matches && !reduced.matches && event.pointerType !== 'touch';
  function placeEffects() {
    const openDialog = document.querySelector('dialog[open]');
    const host = openDialog || document.body;
    if (effects.parentElement !== host) host.append(effects);
  }
  function animatePointer(time) {
    pointerFrame = 0;
    if (!pointerActive || !finePointer.matches || reduced.matches) return;
    ringX += (x - ringX) * .24; ringY += (y - ringY) * .24;
    halo.style.transform = `translate3d(${ringX}px,${ringY}px,0)`;
    let leadX = x, leadY = y;
    trail.forEach((dot, i) => {
      dot.x += (leadX - dot.x) * .38; dot.y += (leadY - dot.y) * .38;
      dot.el.style.transform = `translate3d(${dot.x}px,${dot.y}px,0) scale(${1 - i * .075})`;
      leadX = dot.x; leadY = dot.y;
    });
    if (time - lastMove < 650) pointerFrame = requestAnimationFrame(animatePointer);
    else effects.classList.remove('moving');
  }
  document.addEventListener('pointermove', event => {
    if (!pointerAllowed(event)) return;
    placeEffects(); x = event.clientX; y = event.clientY; lastMove = performance.now();
    if (!pointerActive) { ringX = x; ringY = y; trail.forEach(dot => { dot.x = x; dot.y = y; }); }
    pointerActive = true; halo.classList.add('active'); effects.classList.add('moving');
    halo.classList.toggle('is-hover', !!event.target.closest('a,button,summary,input,[tabindex="0"]'));
    if (!pointerFrame) pointerFrame = requestAnimationFrame(animatePointer);
  }, {passive: true});
  function hidePointer() { pointerActive = false; halo.classList.remove('active'); effects.classList.remove('moving'); cancelAnimationFrame(pointerFrame); pointerFrame = 0; }
  document.documentElement.addEventListener('pointerleave', hidePointer);
  window.addEventListener('blur', hidePointer);
  reduced.addEventListener('change', hidePointer);
  const bursts = [];
  document.addEventListener('pointerdown', event => {
    if (!pointerAllowed(event) || event.button !== 0) return;
    placeEffects();
    while (bursts.length >= 4) bursts.shift().remove();
    const burst = document.createElement('span'); burst.className = 'cursor-burst';
    burst.style.left = event.clientX + 'px'; burst.style.top = event.clientY + 'px';
    for (let i = 0; i < 2; i++) { const ring = document.createElement('i'); ring.className = 'burst-ring'; ring.style.setProperty('--ring-index', i); burst.append(ring); }
    for (let i = 0; i < 6; i++) { const spark = document.createElement('i'); spark.className = 'burst-spark'; const angle = i * Math.PI / 3; spark.style.setProperty('--sx', Math.cos(angle) * 44 + 'px'); spark.style.setProperty('--sy', Math.sin(angle) * 44 + 'px'); burst.append(spark); }
    effects.append(burst); bursts.push(burst);
    setTimeout(() => { burst.remove(); const i = bursts.indexOf(burst); if (i >= 0) bursts.splice(i, 1); }, 800);
  }, {passive: true});
  document.querySelectorAll('.topic,.knowledge-grid button').forEach(card => {
    card.classList.add('interactive-card');
    card.addEventListener('pointermove', event => {
      if (!finePointer.matches || reduced.matches) return;
      const box = card.getBoundingClientRect(), x = event.clientX - box.left, y = event.clientY - box.top;
      card.style.setProperty('--mx', x + 'px'); card.style.setProperty('--my', y + 'px');
      card.style.setProperty('--rx', ((.5 - y / box.height) * 7).toFixed(2) + 'deg'); card.style.setProperty('--ry', ((x / box.width - .5) * 7).toFixed(2) + 'deg');
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
