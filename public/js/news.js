async function loadNews() {
  const container = document.getElementById('news-feed');
  container.innerHTML = '<div class="news-loading">Fetching latest security news…</div>';
  const API = 'https://api.rss2json.com/v1/api.json?rss_url=';
  const results = [];

  await Promise.allSettled(
    RSS_FEEDS.map(async feed => {
      try {
        const res = await fetch(`${API}${encodeURIComponent(feed.url)}&count=3`, { signal: AbortSignal.timeout(8000) });
        const data = await res.json();
        if (data.items) {
          data.items.forEach(item => {
            results.push({ source: feed.label, title: item.title, url: item.link, date: item.pubDate });
          });
        }
      } catch {}
    })
  );

  results.sort((a, b) => new Date(b.date) - new Date(a.date));
  const top = results.slice(0, 10);

  if (!top.length) {
    container.innerHTML = '<div class="news-loading">Could not load feeds. Check your internet connection or try again.</div>';
    return;
  }

  container.innerHTML = top.map(item => `
    <div class="news-item">
      <div class="news-source">${item.source}</div>
      <div class="news-title"><a href="${item.url}" target="_blank">${item.title}</a></div>
      <div class="news-date">${fmtDate(item.date)}</div>
    </div>
  `).join('');

  document.getElementById('last-updated').textContent = 'just now';
}
