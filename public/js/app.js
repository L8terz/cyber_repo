renderLibrary();
updateStats();
loadNews();
document.getElementById('last-updated').textContent = new Date().toLocaleDateString();

if (window.innerWidth <= 768) {
  document.getElementById('sidebar').classList.add('collapsed');
}
