function saveNote(id, val) {
  notes[id] = val;
  localStorage.setItem('secarch_notes', JSON.stringify(notes));
  const el = document.getElementById('saved-' + id);
  if (el) { el.style.display = 'inline'; setTimeout(() => el.style.display = 'none', 2000); }
  updateStats();
}

function renderNotes() {
  const container = document.getElementById('notes-list');
  const entries = Object.entries(notes).filter(([, v]) => v.trim());
  if (!entries.length) {
    container.innerHTML = '<div style="color:var(--text-muted);font-size:14px;padding:20px 0;">No notes yet. Add notes from the Library resources.</div>';
    return;
  }
  let html = '';
  entries.forEach(([id, text]) => {
    let title = id;
    LIBRARY_DATA.forEach(s => s.resources.forEach(r => { if (r.id === id) title = r.title; }));
    html += `<div class="note-entry">
      <h4>${title}</h4>
      <div class="note-entry-text">${escHtml(text)}</div>
      <div style="display:flex;gap:10px;align-items:center;margin-top:10px;">
        <button class="btn btn-outline" onclick="clearNote('${id}')">🗑 Delete</button>
      </div>
    </div>`;
  });
  container.innerHTML = html;
}

function clearNote(id) {
  delete notes[id];
  localStorage.setItem('secarch_notes', JSON.stringify(notes));
  renderNotes();
  updateStats();
}
