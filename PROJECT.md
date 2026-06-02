# Security Architecture Hub — Project Context

## Purpose
A personal security architecture study hub built with [Astro](https://astro.build). No manual build needed — push to `main` and GitHub Actions deploys automatically.

## Project Structure
```
cyber/
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
├── astro.config.mjs             # ← UPDATE site + base to match your GitHub repo
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml           # Auto-deploy to GitHub Pages on every push to main
```

---

## How to Update Content

### Edit a guide (most common task)
Open any file in `src/content/guides/` and edit the Markdown directly. Standard Markdown syntax:
- `## Heading` for sections
- `| Col | Col |` for tables
- `- item` for lists
- `> text` for callout blocks
- `**bold**` for emphasis

### Add a new guide
1. Create `src/content/guides/newguide.md` with this frontmatter at the top:
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
3. Push — it auto-deploys.

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

## GitHub Setup — One-time configuration

**Before first deploy**, update `astro.config.mjs` with your GitHub details:
```js
site: 'https://YOUR_GITHUB_USERNAME.github.io',
base: '/YOUR_REPO_NAME',
```

Then in your GitHub repo → **Settings** → **Pages**:
- Source: **GitHub Actions** (not "Deploy from branch")

After that, every `git push` to `main` triggers a build and live deploy automatically.

---

## Local Development

```bash
npm install        # first time only
npm run dev        # starts local server at http://localhost:4321
npm run build      # build to dist/ folder (GitHub Actions does this automatically)
```

---

## Technical Notes

### How guides work
Markdown files in `src/content/guides/` are rendered to HTML at **build time** by Astro. The rendered HTML is injected into hidden `<div id="guide-data-*">` elements in the page. The `openGuide()` JavaScript function reads from these divs at runtime — same as before, but now the source is clean Markdown instead of raw HTML.

### localStorage keys
| Key | Contents |
|-----|----------|
| `secarch_notes` | `{ resourceId: "note text" }` |
| `secarch_progress` | `{ topicId: true }` |

### News feeds (via rss2json.com free API)
Defined in `public/js/data.js` under `RSS_FEEDS`. Add or remove feeds there.

### Known constraints
- The rss2json news feed requires an internet connection; fails gracefully if offline
- The force graph runs a continuous `requestAnimationFrame` loop while active

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
- [ ] Add a glossary page
- [ ] Expand TOGAF control linkage graph with more capability nodes
- [ ] Add a threat modelling reference section (STRIDE, PASTA, LINDDUN)
- [ ] Dark mode toggle
