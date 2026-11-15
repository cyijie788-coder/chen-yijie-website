(() => {
  const tabs = [...document.querySelectorAll('.film-tabs [role="tab"]')];
  const videos = [...document.querySelectorAll('.video-work video')];
  function selectFilm(tab, focus = false) {
    videos.forEach(video => video.pause());
    tabs.forEach(item => {
      const active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
    });
    const video = document.getElementById(tab.getAttribute('aria-controls')).querySelector('video');
    if (video.preload === 'none') { video.preload = 'metadata'; video.load(); }
    if (focus) {
      tab.focus({preventScroll: true});
      tab.scrollIntoView({block: 'nearest', inline: 'nearest', behavior: 'instant'});
    }
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => selectFilm(tab));
    tab.addEventListener('keydown', event => {
      const positions = {ArrowRight: (i + 1) % tabs.length, ArrowLeft: (i + tabs.length - 1) % tabs.length, Home: 0, End: tabs.length - 1};
      if (!(event.key in positions)) return;
      event.preventDefault();
      selectFilm(tabs[positions[event.key]], true);
    });
  });
  videos.forEach(video => video.addEventListener('play', () => videos.forEach(other => { if (other !== video) other.pause(); })));
  document.querySelectorAll('.video-work').forEach(panel => {
    const video = panel.querySelector('video');
    const status = panel.querySelector('[data-chapter-status]');
    if (!status) return;
    let chapterRequest = null;
    function seekChapter() {
      if (!chapterRequest || video.readyState < 1 || !Number.isFinite(video.duration)) return;
      video.currentTime = Math.min(chapterRequest.time, video.duration);
      status.textContent = `已跳转至 ${chapterRequest.label}，可按播放继续观看。`;
      chapterRequest = null;
    }
    panel.querySelectorAll('[data-seek]').forEach(button => button.addEventListener('click', () => {
      chapterRequest = {time: Number(button.dataset.seek), label: button.textContent};
      if (video.readyState >= 1) seekChapter();
      else { status.textContent = '正在载入视频章节…'; video.load(); }
    }));
    video.addEventListener('loadedmetadata', seekChapter);
  });
  videos.forEach(video => video.addEventListener('error', () => {
    const message = document.createElement('p');
    message.className = 'film-status';
    message.textContent = '视频暂时无法载入，请尝试下方的“单独打开视频”链接。';
    if (!video.parentElement.querySelector('.film-status')) video.after(message);
  }));

  const questions = [
    {question: 'V8 里的“8”，首先告诉你什么？', options: ['气缸数量', '最高挡位', '性能排名'], answer: 0, note: 'hybrid', explanation: 'V 表示气缸的排列形式，8 表示气缸数量。它不是整车性能的排名。'},
    {question: 'SF90 Stradale 的动力组合是？', options: ['V8 与三台电机', '只有一台电机', 'V12，没有电机'], answer: 0, note: 'sf90', explanation: 'SF90 Stradale 将 V8 发动机与三台电机结合，两台电机在前轴，另一台位于发动机与变速箱之间。'},
    {question: '哪台车在加入电机后，依然保留了 V12？', options: ['Lamborghini Revuelto', 'Lexus LFA', 'Audi RS7'], answer: 0, note: 'revuelto', explanation: 'Revuelto 结合 V12 与三台电机。混动和发动机的气缸形式，是两个不同的维度。'},
    {question: '“西装暴徒”在 RS7 笔记里是什么？', options: ['车迷对外形与性格的比喻', '官方车型名称', '一种发动机结构'], answer: 0, note: 'rs7', explanation: '这是车迷式的形容，用来聊 RS7 外形与性能之间的反差，并非官方车型名称。'},
    {question: '看见同一款车有两组参数，先做什么？', options: ['核对年款、地区和版本', '直接选较大的数字', '只看配图的颜色'], answer: 0, note: 'rs7', explanation: '同一款车的不同年款、地区或版本，参数可能不同。先核对对象，再比较数字。'}
  ];
  const shuffle = values => {
    const result = [...values];
    for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]]; }
    return result;
  };
  const question = document.querySelector('#quiz-question');
  const options = document.querySelector('#quiz-options');
  const feedback = document.querySelector('#quiz-feedback');
  const next = document.querySelector('#quiz-next');
  const note = document.querySelector('#quiz-note');
  let order, round, score, answered, finished, best = null;
  try { const value = localStorage.getItem('cyj-quiz-best'); if (value !== null && /^[0-5]$/.test(value)) best = Number(value); } catch {}
  function renderBest() { document.querySelector('#quiz-best').textContent = `本机最佳：${best === null ? '—' : best} / 5`; }
  function openNote(key) { document.querySelector(`.topic[data-topic="${key}"]`).click(); }
  function render(focus = false) {
    const item = order[round];
    answered = false;
    finished = false;
    question.textContent = item.question;
    document.querySelector('#quiz-round').textContent = `第 ${round + 1} / 5 题 · 已答对 ${score} 题`;
    document.querySelector('#quiz-progress').value = round;
    feedback.textContent = '';
    feedback.className = 'quiz-feedback';
    note.hidden = true; next.hidden = true;
    options.replaceChildren();
    shuffle(item.options.map((text, i) => ({text, correct: i === item.answer}))).forEach((choice, i) => {
      const button = document.createElement('button');
      button.type = 'button';
      const letter = document.createElement('span'); letter.textContent = String.fromCharCode(65 + i);
      const label = document.createElement('span'); label.textContent = choice.text;
      button.append(letter, label);
      button.dataset.correct = String(choice.correct);
      button.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        if (choice.correct) score++;
        options.querySelectorAll('button').forEach(option => {
          option.setAttribute('aria-disabled', 'true');
          if (option.dataset.correct === 'true') option.classList.add('is-correct');
        });
        if (!choice.correct) button.classList.add('is-wrong');
        feedback.textContent = `${choice.correct ? '答对了！' : '差一点，正确答案已标出。'} ${item.explanation}`;
        document.querySelector('#quiz-progress').value = round + 1;
        note.hidden = false; next.hidden = false;
        next.textContent = round === 4 ? '查看成绩 ↗' : '下一题 →';
      });
      options.append(button);
    });
    if (focus) question.focus({preventScroll: true});
  }
  function start(focus = false) { order = shuffle(questions); round = 0; score = 0; renderBest(); render(focus); }
  note.addEventListener('click', () => openNote(order[round].note));
  next.addEventListener('click', () => {
    if (finished) { start(true); return; }
    if (!answered) return;
    if (round < 4) { round++; render(true); return; }
    finished = true;
    question.textContent = `${score} / 5，${score === 5 ? '这局满分！' : score >= 3 ? '汽车直觉不错！' : '又认识了几件新鲜事。'}`;
    document.querySelector('#quiz-round').textContent = '本轮挑战完成';
    options.replaceChildren();
    feedback.textContent = '这次的知识都来自车库笔记。继续逛逛，或换个顺序再挑战一次。成绩仅保存在当前浏览器。';
    note.hidden = true;
    next.textContent = '再来一轮 ↻';
    best = Math.max(best ?? 0, score);
    try { localStorage.setItem('cyj-quiz-best', String(best)); } catch {}
    renderBest(); question.focus({preventScroll: true});
  });
  let lastStory = '';
  document.querySelector('#random-story').addEventListener('click', () => {
    const cards = [...document.querySelectorAll('.topic')].filter(card => card.dataset.topic !== lastStory);
    const card = cards[Math.floor(Math.random() * cards.length)];
    lastStory = card.dataset.topic;
    document.querySelector('#random-status').textContent = `这次去看看：${briefs[lastStory].label}`;
    card.click();
  });
  start();
})();
