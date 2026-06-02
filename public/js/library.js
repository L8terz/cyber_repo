function renderLibrary(filter = '') {
  const container = document.getElementById('library-content');
  const lower = filter.toLowerCase();
  let html = '';

  LIBRARY_DATA.forEach(section => {
    const filtered = filter
      ? section.resources.filter(r =>
          r.title.toLowerCase().includes(lower) ||
          r.desc.toLowerCase().includes(lower) ||
          section.name.toLowerCase().includes(lower))
      : section.resources;
    if (!filtered.length) return;

    html += `<div class="framework-section">
      <div class="framework-header">
        <div class="framework-icon" style="background:${section.iconBg}">${section.icon}</div>
        <div>
          <h3>${section.name}</h3>
          <p>${section.description}</p>
        </div>
      </div>
      <div class="resource-grid">`;

    filtered.forEach(r => {
      const savedNote = notes[r.id] || '';
      html += `<div class="resource-card" id="card-${r.id}">
        <div>
          <div class="resource-meta" style="margin-bottom:6px;">
            <span class="tag ${section.tag}">${section.tagLabel}</span>
            <span class="tag tag-slate">${r.type}</span>
          </div>
          <h4>${r.title}</h4>
        </div>
        <p>${r.desc}</p>
        <div class="resource-actions">
          <a href="${r.url}" target="_blank" class="btn btn-primary">↗ Open</a>
        </div>
        <div>
          <div style="font-size:11px;font-weight:600;color:var(--text-muted);margin-bottom:5px;">MY NOTES</div>
          <textarea class="note-input" placeholder="Add your notes, key takeaways, questions…" onchange="saveNote('${r.id}', this.value)" rows="3">${escHtml(savedNote)}</textarea>
          <span class="note-saved" id="saved-${r.id}">✓ Saved</span>
        </div>
      </div>`;
    });

    html += `</div></div>`;
  });

  container.innerHTML = html || '<p style="color:var(--text-muted);padding:20px 0;">No resources match your search.</p>';
}

function filterResources(val) {
  renderLibrary(val);
}
