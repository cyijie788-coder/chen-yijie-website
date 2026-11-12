const $ = selector => document.querySelector(selector);
let theme = 'dark';
try { theme = localStorage.getItem('cyj-theme') === 'light' ? 'light' : 'dark'; } catch {}
function applyTheme() {
  document.documentElement.dataset.theme = theme;
  $('#theme').textContent = theme === 'dark' ? '☀' : '☾';
  $('#theme').setAttribute('aria-label', theme === 'dark' ? '切换浅色模式' : '切换深色模式');
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#141615' : '#f4f3ed';
}
applyTheme();
$('#theme').onclick = () => { theme = theme === 'dark' ? 'light' : 'dark'; applyTheme(); try { localStorage.setItem('cyj-theme', theme); } catch {} };
$('#year').textContent = new Date().getFullYear();
let toastTimer;
function toast(text) { $('#toast').textContent = text; clearTimeout(toastTimer); toastTimer = setTimeout(() => $('#toast').textContent = '', 3000); }
$('#copy').onclick = async () => { try { await navigator.clipboard.writeText('18625554386'); toast('号码已复制'); } catch { toast('联系电话：18625554386'); } };
let activeKind = 'all';
function filterStories() {
  const query = $('#story-search').value.trim().toLowerCase();
  let count = 0;
  document.querySelectorAll('.topic').forEach(card => {
    const story = briefs[card.dataset.topic];
    const text = [story.title, story.label, story.deck, ...story.facts].join(' ').toLowerCase();
    const match = (activeKind === 'all' || story.kind === activeKind) && (!query || text.includes(query));
    card.hidden = !match;
    if (match) { count++; card.classList.add('is-visible'); }
  });
  $('#result-count').textContent = '共 ' + count + ' 篇内容 · 点击阅读';
  $('#story-empty').hidden = count !== 0;
  $('#clear-search').hidden = !query;
}
document.querySelectorAll('[data-filter]').forEach(button => button.onclick = () => {
  activeKind = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  filterStories();
});
$('#story-search').addEventListener('input', filterStories);
$('#clear-search').onclick = () => { $('#story-search').value = ''; filterStories(); $('#story-search').focus(); };
$('#reset-search').onclick = () => { $('#story-search').value = ''; document.querySelector('[data-filter="all"]').click(); $('#story-search').focus(); };
let current;
const dialog = $('#brief');
function readerMode(plan) {
  $('#reading-notes').hidden = plan;
  $('#reading-plan').hidden = !plan;
  $('#plan-actions').hidden = !plan;
  for (const [id, active] of [['notes-tab', !plan], ['plan-tab', plan]]) { $( '#' + id).classList.toggle('active', active); $( '#' + id).setAttribute('aria-pressed', String(active)); }
}
$('#notes-tab').onclick = () => readerMode(false);
$('#plan-tab').onclick = () => readerMode(true);
document.querySelectorAll('[data-topic]').forEach(button => button.onclick = () => {
  current = briefs[button.dataset.topic];
  $('#brief-title').textContent = current.title;
  $('#brief-intro').textContent = current.intro;
  $('#brief-script').textContent = current.script;
  $('#brief-note').textContent = current.note;
  $('#brief-image').src = current.image;
  $('#brief-image').alt = current.label + ' 车型资料配图';
  $('#brief-facts').replaceChildren();
  for (const fact of current.facts) { const p = document.createElement('p'); p.textContent = fact; $('#brief-facts').append(p); }
  $('#brief-sources').replaceChildren();
  for (const source of current.sources) { const li = document.createElement('li'), a = document.createElement('a'); a.href = source.url; a.textContent = source.title + ' ↗'; a.target = '_blank'; a.rel = 'noopener'; li.append(a); $('#brief-sources').append(li); }
  $('#brief-shots').replaceChildren();
  for (const shot of current.shots) { const li = document.createElement('li'); li.textContent = shot; $('#brief-shots').append(li); }
  readerMode(false);
  dialog.showModal();
  dialog.scrollTop = 0;
});
dialog.querySelector('.close').onclick = () => dialog.close();
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
$('#copy-brief').onclick = async () => {
  if (!current) return;
  const text = [current.title, current.intro, ...current.facts, '画面与讲述思路', ...current.shots.map((x, i) => `${i + 1}. ${x}`), '配音开场草稿', current.script, current.note, ...current.sources.map(s => s.title + ' ' + s.url)].join('\n');
  try { await navigator.clipboard.writeText(text); toast('内容提纲已复制'); } catch { toast('可点击“下载全部选题”保存提纲'); }
};
