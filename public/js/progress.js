function renderProgress() {
  const container = document.getElementById('progress-list');
  const frameColors = {
    'NIST': 'tag-blue', 'SABSA/TOGAF': 'tag-purple',
    'Zero Trust': 'tag-green', 'Cloud': 'tag-amber'
  };
  let html = '';
  STUDY_TOPICS.forEach(t => {
    const done = !!progress[t.id];
    html += `<div class="progress-item">
      <div class="progress-check ${done ? 'done' : ''}" onclick="toggleProgress('${t.id}', this)">${done ? '✓' : ''}</div>
      <div class="progress-content">
        <h4 style="${done ? 'text-decoration:line-through;color:var(--text-muted)' : ''}">${t.label}</h4>
        <p><span class="tag ${frameColors[t.framework] || 'tag-slate'}" style="font-size:10px">${t.framework}</span></p>
      </div>
    </div>`;
  });
  container.innerHTML = html;
  updateProgressBar();
}

function toggleProgress(id, el) {
  progress[id] = !progress[id];
  if (!progress[id]) delete progress[id];
  localStorage.setItem('secarch_progress', JSON.stringify(progress));
  el.classList.toggle('done');
  el.textContent = progress[id] ? '✓' : '';
  const content = el.nextElementSibling.querySelector('h4');
  if (content) content.style.cssText = progress[id] ? 'text-decoration:line-through;color:var(--text-muted)' : '';
  updateProgressBar();
  updateStats();
}

function updateProgressBar() {
  const done = Object.values(progress).filter(Boolean).length;
  const total = STUDY_TOPICS.length;
  const pct = Math.round((done / total) * 100);
  const bar = document.getElementById('overall-bar');
  const label = document.getElementById('overall-label');
  if (bar) bar.style.width = pct + '%';
  if (label) label.textContent = `${done} of ${total} topics completed`;
}

function updateStats() {
  const noteCount = Object.values(notes).filter(v => v.trim()).length;
  const done = Object.values(progress).filter(Boolean).length;
  const pct = Math.round((done / STUDY_TOPICS.length) * 100);
  const el = document.getElementById('notes-count');
  const pp = document.getElementById('progress-pct');
  if (el) el.textContent = noteCount;
  if (pp) pp.textContent = pct + '%';
}
