function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  sidebar.classList.toggle('collapsed');
  if (overlay) overlay.classList.toggle('visible', !sidebar.classList.contains('collapsed') && window.innerWidth <= 768);
}

function _closeSidebarMobile() {
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.add('collapsed');
    const overlay = document.getElementById('sidebar-overlay');
    if (overlay) overlay.classList.remove('visible');
  }
}

function showPage(id, el) {
  _closeSidebarMobile();
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  if (el) el.classList.add('active');
  const labels = {
    dashboard: 'Dashboard',
    library: 'Library',
    progress: 'Study Progress',
    notes: 'My Notes',
    togaf: 'TOGAF Explorer',
    guide: 'Guide',
    architect: 'Cyber Security Architect'
  };
  const crumb = document.getElementById('header-breadcrumb');
  if (crumb) crumb.textContent = '/ ' + (labels[id] || id);
  if (id === 'notes') renderNotes();
  if (id === 'progress') renderProgress();
  if (id === 'dashboard') updateStats();
  if (id === 'togaf') setTimeout(() => drawADMWheel(), 50);
}

function openGuide(id) {
  _closeSidebarMobile();
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-guide').classList.add('active');
  const el = document.getElementById('guide-data-' + id);
  document.getElementById('guide-content').innerHTML = el ? el.innerHTML : '<h1>Guide not found</h1>';
  const guideLabels = {
    nist: 'NIST CSF / RMF',
    sabsa: 'SABSA / TOGAF Guide',
    zerotrust: 'Zero Trust / SASE',
    cloud: 'Cloud Security'
  };
  const crumb = document.getElementById('header-breadcrumb');
  if (crumb) crumb.textContent = '/ ' + (guideLabels[id] || id);
}
