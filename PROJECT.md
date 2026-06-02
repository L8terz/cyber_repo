# Security Architecture Hub — Project Context

## Purpose
A personal security architecture study hub built with [Astro](https://astro.build). Covers NIST CSF/RMF, SABSA/TOGAF, Zero Trust/SASE, and Cloud Security. Push to `main` and GitHub Actions deploys automatically to GitHub Pages.

**Live site:** https://L8terz.github.io/cyber_repo

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

### Session 2 — Modular Refactor + Astro Migration
- **Modular refactor:** broke 1600-line monolith into separated CSS and JS modules (`assets/css/styles.css`, `assets/js/*.js`)
- **Astro migration:** converted project to Astro static site generator
  - Guide content moved from embedded raw HTML → clean **Markdown files** (`src/content/guides/`)
  - Astro renders Markdown to HTML at build time — no runtime fetch needed
  - All JS logic preserved unchanged in `public/js/`
  - GitHub Actions workflow added for automatic deploy on every push to `main`
  - Node.js installed via Homebrew to support Astro build tooling
- **GitHub:** repo live at `https://github.com/L8terz/cyber_repo`

---

## Project Structure
```
cyber_repo/
├── src/
│   ├── pages/
│   │   └── index.astro          # Main app shell — sidebar, all pages, imports guides
│   ├── content/
│   │   └── guides/              # ← EDIT GUIDES HERE (plain Markdown)
│   │       ├── nist.md          # NIST CSF / RMF guide
│   │       ├── sabsa.md         # SABSA / TOGAF guide
│   │       ├── zerotrust.md     # Zero Trust / SASE guide
│   │       └── cloud.md         # Cloud Security guide
│   ├── styles/
│   │   └── global.css           # All CSS (variables, layout, components)
│   └── content/
│       └── config.ts            # Content collection schema
├── public/
│   └── js/                      # Client-side JavaScript (loaded as-is)
│       ├── data.js              # All data: LIBRARY_DATA, STUDY_TOPICS, ADM phases, etc.
│       ├── utils.js             # Helpers: escHtml, fmtDate
│       ├── nav.js               # showPage, openGuide
│       ├── library.js           # renderLibrary, filterResources
│       ├── notes.js             # saveNote, renderNotes, clearNote
│       ├── progress.js          # renderProgress, toggleProgress, updateStats
│       ├── news.js              # loadNews (RSS via rss2json API)
│       ├── togaf.js             # ADM wheel, force graph, matrix table
│       └── app.js               # Bootstrap init
├── astro.config.mjs             # site + base configured for L8terz/cyber_repo
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml           # Auto-deploy to GitHub Pages on every push to main
```

---

## How to Update Content

### Edit a guide (most common task)
Open any file in `src/content/guides/` and edit the Markdown directly:
- `## Heading` for sections
- `| Col | Col |` for tables
- `- item` for bullet lists
- `> text` for callout/tip blocks
- `**bold**` for emphasis

### Add a new guide
1. Create `src/content/guides/newguide.md` with this frontmatter:
   ```md
   ---
   title: Your Guide Title
   guideId: newguide
   icon: 🔐
   ---

   # Your content here...
   ```
2. Add a nav item in `src/pages/index.astro`:
   ```html
   <div class="nav-item" onclick="openGuide('newguide')">
     <span class="icon">🔐</span> Your Guide Name
   </div>
   ```
3. Commit and push — GitHub Actions builds and deploys automatically.

### Add a new library resource
Open `public/js/data.js`, find `const LIBRARY_DATA`, and add to the relevant framework's `resources` array:
```js
{ id: 'unique-id', title: 'Resource Title', type: 'Guide|Paper|Official Doc|Reference', url: 'https://...', desc: 'Description.' }
```

### Add a new study topic
Open `public/js/data.js`, find `const STUDY_TOPICS`, and append:
```js
{ id: 't21', label: 'Topic description', framework: 'NIST|SABSA/TOGAF|Zero Trust|Cloud' }
```

### Edit styles
Open `src/styles/global.css`. CSS variables (colours, spacing) are at the top under `:root`.

---

## Everyday GitHub Workflow

```bash
# 1. Make your edits (guides, data, styles)
# 2. In VS Code Source Control panel:
#    - Click + to stage all changes
#    - Type a commit message
#    - Click Commit
#    - Click Sync Changes (circular arrow)
# That's it — GitHub Actions deploys within ~60 seconds
```

Or via terminal:
```bash
git add .
git commit -m "Your message here"
git push
```

---

## Local Development

```bash
npm install        # first time only
npm run dev        # live preview at http://localhost:4321
npm run build      # test production build (GitHub Actions does this automatically)
```

---

## Technical Notes

### How guides work
Markdown files in `src/content/guides/` are rendered to HTML at **build time** by Astro. The rendered HTML is injected into hidden `<div id="guide-data-*">` elements. The `openGuide()` JS function reads these divs at runtime — same behaviour as before, but the source is now clean Markdown instead of raw HTML.

### localStorage keys
| Key | Contents |
|-----|----------|
| `secarch_notes` | `{ resourceId: "note text" }` |
| `secarch_progress` | `{ topicId: true }` |

### News feeds (via rss2json.com free API)
Defined in `public/js/data.js` under `RSS_FEEDS`. Add or remove feeds there. Requires internet connection; fails gracefully if offline.

### Known constraints
- The force graph runs a continuous `requestAnimationFrame` loop while the Control Linkage view is active
- `fetch()` on `file://` protocol is blocked — not an issue since the site is served via GitHub Pages

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
- [ ] Add search across guide content
- [ ] Bookmarking / favourites for library resources
- [ ] Export notes to PDF or markdown
- [ ] Add a glossary page (common security architecture terms and acronyms)
- [ ] Expand TOGAF control linkage graph with more capability nodes
- [ ] Add a threat modelling reference section (STRIDE, PASTA, LINDDUN)
- [ ] Dark mode toggle
