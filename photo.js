(() => {
  const card = document.querySelector('.photo-card');
  if (!card) return;
  const photos = [
    {src: 'assets/sunset.jpg', title: '夕阳里的我', alt: '夕阳下，陈奕洁站在水边的生活照片', position: 'center 65%'},
    {src: 'assets/portrait.jpg', title: '日常一刻', alt: '陈奕洁的个人生活照', position: 'center'},
    {src: 'assets/lake.jpg', title: '湖边时光', alt: '陈奕洁提供的湖边生活照片', position: 'center'}
  ];
  const mainImage = card.querySelector('#personal-photo');
  const open = card.querySelector('#photo-open');
  const viewer = document.querySelector('#photo-viewer');
  const largeImage = viewer.querySelector('#viewer-photo');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const choices = [...card.querySelectorAll('[data-photo]')];
  let index = 0;
  let savedOverflow;

  function show(next, announce = true) {
    index = (next + photos.length) % photos.length;
    const photo = photos[index];
    const count = `${String(index + 1).padStart(2, '0')} / 03`;
    for (const image of [mainImage, largeImage]) {
      image.src = photo.src;
      image.alt = photo.alt;
    }
    mainImage.style.objectPosition = photo.position;
    card.querySelector('#photo-title').textContent = photo.title;
    card.querySelector('#photo-count').textContent = count;
    open.setAttribute('aria-label', `放大查看${photo.title}`);
    viewer.querySelector('#viewer-title').textContent = photo.title;
    viewer.querySelector('#viewer-count').textContent = `${count} · ${photo.title}`;
    choices.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    if (announce && !viewer.open) card.querySelector('#photo-status').textContent = `${count} · ${photo.title}`;
    if (announce && !reduced.matches) {
      const image = viewer.open ? largeImage : mainImage;
      image.getAnimations().forEach(animation => animation.cancel());
      image.animate([{opacity: .45}, {opacity: 1}], {duration: 280, easing: 'ease-out'});
    }
  }
  choices.forEach(button => button.addEventListener('click', () => show(Number(button.dataset.photo))));
  for (const prefix of ['photo', 'viewer']) {
    document.querySelector(`#${prefix}-prev`).addEventListener('click', () => show(index - 1));
    document.querySelector(`#${prefix}-next`).addEventListener('click', () => show(index + 1));
  }
  open.addEventListener('click', () => {
    savedOverflow = document.body.style.overflow;
    viewer.showModal();
    document.body.style.overflow = 'hidden';
  });
  viewer.querySelector('#photo-close').addEventListener('click', () => viewer.close());
  viewer.addEventListener('close', () => {
    document.body.style.overflow = savedOverflow ?? '';
    open.focus({preventScroll: true});
  });
  // Only dismiss a real backdrop click, not empty space inside the dialog.
  let backdropDown = false;
  const outside = event => {
    const box = viewer.getBoundingClientRect();
    return event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
  };
  viewer.addEventListener('pointerdown', event => { backdropDown = event.target === viewer && outside(event); });
  viewer.addEventListener('click', event => {
    if (backdropDown && event.target === viewer && outside(event)) viewer.close();
    backdropDown = false;
  });
  for (const region of [card, viewer]) {
    region.addEventListener('keydown', event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      show(index + (event.key === 'ArrowRight' ? 1 : -1));
    });
  }
  for (const surface of [open, viewer.querySelector('.photo-stage')]) {
    let start = null, suppressClick = false;
    surface.addEventListener('touchstart', event => {
      suppressClick = false;
      start = event.touches.length === 1 ? {x: event.touches[0].clientX, y: event.touches[0].clientY} : null;
    }, {passive: true});
    surface.addEventListener('touchend', event => {
      if (!start) return;
      const dx = event.changedTouches[0].clientX - start.x;
      const dy = event.changedTouches[0].clientY - start.y;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) {
        show(index + (dx < 0 ? 1 : -1));
        suppressClick = true;
      }
      start = null;
    }, {passive: true});
    surface.addEventListener('touchcancel', () => { start = null; }, {passive: true});
    surface.addEventListener('click', event => {
      if (suppressClick) { event.preventDefault(); event.stopImmediatePropagation(); suppressClick = false; }
    }, true);
  }
  function resetTilt() {
    for (const name of ['--photo-rx', '--photo-ry', '--photo-x', '--photo-y']) card.style.removeProperty(name);
  }
  card.addEventListener('pointermove', event => {
    if (!fine.matches || reduced.matches || event.pointerType === 'touch') return;
    const box = card.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - box.left) / box.width));
    const y = Math.max(0, Math.min(1, (event.clientY - box.top) / box.height));
    card.style.setProperty('--photo-rx', `${(0.5 - y) * 5}deg`);
    card.style.setProperty('--photo-ry', `${(x - 0.5) * 5}deg`);
    card.style.setProperty('--photo-x', `${x * 100}%`);
    card.style.setProperty('--photo-y', `${y * 100}%`);
  }, {passive: true});
  card.addEventListener('pointerleave', resetTilt);
  window.addEventListener('blur', resetTilt);
  reduced.addEventListener('change', resetTilt);
  fine.addEventListener('change', resetTilt);
  show(0, false);
})();
