# Security Architecture Hub — Project Context

## Purpose
A personal security architecture study hub built with [Astro](https://astro.build). Covers NIST CSF/RMF, SABSA/TOGAF, Zero Trust/SASE, and Cloud Security. Push to `main` and GitHub Actions deploys automatically to GitHub Pages.

**Live site:** https://l8terz.github.io/cyber_repo
**GitHub repo:** https://github.com/L8terz/cyber_repo
**Local project:** `~/Documents/jase_claude_project/cyber/`

---

## Session History

### Session 1 — Initial Build
- Built a single-file vanilla HTML/CSS/JS SPA (`index.html`, ~1600 lines)
- Dashboard with live RSS news feed (CISA, Krebs, Dark Reading, SANS)
- Resource library with 28 curated references across 4 framework domains
- Study progress tracker (20 topics, persisted in localStorage)
- Personal notes system (per-resource, persisted in localStorage)
- TOGAF Explorer with 3 interactive views: ADM wheel (SVG), Control Linkage force graph (Canvas), Framework Matrix
- Embedded guide content for NIST, SABSA/TOGAF, Zero Trust/SASE, Cloud Security

### Session 2 — Modular Refactor + Astro Migration + GitHub Live
- **Modular refactor:** broke 1600-line monolith into separated CSS and JS modules
- **Astro migration:** converted project to Astro static site generator
  - Guide content moved from embedded raw HTML → clean **Markdown files** (`src/content/guides/`)
  - Astro renders Markdown to HTML at build time — no runtime fetch needed
  - All JS logic preserved unchanged in `public/js/`
  - GitHub Actions workflow added (`deploy.yml`) — auto-deploys on every push to `main`
  - Node.js installed via Homebrew to support Astro build tooling
- **Bug fixed:** JS asset paths were malformed (`/cyber_repojs/`) due to missing slash separator between `BASE_URL` and `js/` — fixed in `src/pages/index.astro`
- **GitHub Pages:** source set to "GitHub Actions" in repo Settings → Pages
- **Site confirmed live** at https://l8terz.github.io/cyber_repo ✅

---

## Project Structure
```
cyber/
├── src/
│   ├── pages/
│   │   └── index.astro              # Main app shell — sidebar, all pages, imports guides
│   ├── content/
│   │   └── guides/                  # ← EDIT GUIDE CONTENT HERE (plain Markdown)
│   │       ├── nist.md              # NIST CSF / RMF guide
│   │       ├── sabsa.md             # SABSA / TOGAF guide
│   │       ├── zerotrust.md         # Zero Trust / SASE guide
│   │       └── cloud.md             # Cloud Security guide
│   ├── styles/
│   │   └── global.css               # All CSS (variables, layout, components)
│   └── content/
│       └── config.ts                # Content collection schema
├── public/
│   └── js/                          # Client-side JavaScript (loaded as-is)
│       ├── data.js                  # ← ADD RESOURCES + STUDY TOPICS HERE
│       ├── utils.js                 # Helpers: escHtml, fmtDate
│       ├── nav.js                   # showPage, openGuide
│       ├── library.js               # renderLibrary, filterResources
│       ├── notes.js                 # saveNote, renderNotes, clearNote
│       ├── progress.js              # renderProgress, toggleProgress, updateStats
│       ├── news.js                  # loadNews (RSS via rss2json API)
│       ├── togaf.js                 # ADM wheel, force graph, matrix table
│       └── app.js                   # Bootstrap init
├── astro.config.mjs                 # site + base configured for L8terz/cyber_repo
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml               # Auto-deploy to GitHub Pages on every push to main
```

---

## How Guides Work
Each guide in the sidebar is powered by a Markdown file in `src/content/guides/`. Astro converts the Markdown to HTML at build time and injects it into the page. The `openGuide()` JavaScript function reads it at runtime — so the site stays fast with no server needed.

**Markdown is just plain text with simple formatting:**
```md
## Section Heading

Regular paragraph text here.

| Column 1 | Column 2 |
|---|---|
| Row data | Row data |

- Bullet point
- Another point

> This is a callout/tip box
```

---

## How to Update Content

### Edit an existing guide
Open the relevant file in `src/content/guides/` in VS Code and edit the Markdown. Save, commit, push — live in ~60 seconds.

### Add a brand new guide
1. Create `src/content/guides/newguide.md`:
   ```md
   ---
   title: Your Guide Title
   guideId: newguide
   icon: 🔐
   ---

   # Your content here...
   ```
2. Add a nav link in `src/pages/index.astro` (in the Frameworks section of the sidebar):
   ```html
   <div class="nav-item" onclick="openGuide('newguide')">
     <span class="icon">🔐</span> Your Guide Name
   </div>
   ```
3. Commit and push — done.

### Add a new library resource
Open `public/js/data.js`, find `const LIBRARY_DATA`, add to the relevant framework's `resources` array:
```js
{ id: 'unique-id', title: 'Resource Title', type: 'Guide|Paper|Official Doc|Reference', url: 'https://...', desc: 'Description.' }
```

### Add a new study topic
Open `public/js/data.js`, find `const STUDY_TOPICS`, append:
```js
{ id: 't21', label: 'Topic description', framework: 'NIST|SABSA/TOGAF|Zero Trust|Cloud' }
```

### Edit styles
Open `src/styles/global.css`. CSS variables (colours, spacing) are at the top under `:root`.

---

## Everyday GitHub Workflow

In VS Code Source Control panel:
1. Make your edits
2. Click **+** to stage all changes
3. Type a commit message
4. Click **Commit**
5. Click **Sync Changes** (circular arrow)

GitHub Actions builds and deploys automatically — check progress at:
https://github.com/L8terz/cyber_repo/actions

---

## Local Development

```bash
# Navigate to project folder
cd ~/Documents/jase_claude_project/cyber

npm install        # first time only
npm run dev        # live preview at http://localhost:4321
npm run build      # test production build locally
```

> Node.js installed via Homebrew. If `npm` not found, run: `export PATH="/opt/homebrew/bin:$PATH"`

---

## Technical Notes

### Script path fix (important context)
In `src/pages/index.astro`, JS files are loaded using:
```astro
<script is:inline src={`${import.meta.env.BASE_URL}/js/data.js`}></script>
```
The explicit `/` between `BASE_URL` and `js/` is intentional — Astro's `BASE_URL` has no trailing slash when `base` is set to `/cyber_repo`, so without it paths render as `/cyber_repojs/data.js` (broken).

### How the TOGAF Explorer works
- **ADM Wheel** — SVG drawn by `togaf.js`, click segments to see security architect role per phase
- **Control Linkage Graph** — Canvas-based force-directed graph, runs `requestAnimationFrame` loop while active
- **Framework Matrix** — HTML table built dynamically from `MATRIX_DATA` in `data.js`

### localStorage keys
| Key | Contents |
|-----|----------|
| `secarch_notes` | `{ resourceId: "note text" }` |
| `secarch_progress` | `{ topicId: true }` |

### News feeds
Defined in `public/js/data.js` under `RSS_FEEDS`. Requires internet; fails gracefully offline.

---

## Frameworks Covered
- **NIST CSF 2.0 & RMF** (SP 800-37, SP 800-53 Rev 5, SP 800-137)
- **SABSA** (Six-layer matrix, attributes, trust domains)
- **TOGAF 10** (ADM phases A–H + Preliminary + Requirements Management)
- **Zero Trust** (NIST SP 800-207, CISA ZT Maturity Model 2.0, BeyondCorp)
- **SASE / SSE** (SD-WAN, SWG, CASB, ZTNA, FWaaS)
- **Cloud Security** (CSA CCM v4, AWS SRA, Azure Security Benchmark, CNAPP)

---

## Planned / Future Improvements
- [ ] Add more framework domains (ISO 27001, SOC 2, PCI-DSS, MITRE ATT&CK)
- [ ] Add a threat modelling guide (STRIDE, PASTA, LINDDUN)
- [ ] Add a glossary page (common security architecture terms and acronyms)
- [ ] Add search across guide content
- [ ] Bookmarking / favourites for library resources
- [ ] Export notes to PDF or markdown
- [ ] Expand TOGAF control linkage graph with more capability nodes
- [ ] Dark mode toggle
