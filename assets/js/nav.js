function showPage(id, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  if (el) el.classList.add('active');
  if (id === 'notes') renderNotes();
  if (id === 'progress') renderProgress();
  if (id === 'dashboard') updateStats();
  if (id === 'togaf') setTimeout(() => drawADMWheel(), 50);
}

function openGuide(id) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-guide').classList.add('active');
  const el = document.getElementById('guide-data-' + id);
  document.getElementById('guide-content').innerHTML = el ? el.innerHTML : '<h1>Guide not found</h1>';
}
