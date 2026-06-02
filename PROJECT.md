# Security Architecture Hub — Project Context

## Purpose
A local, offline-friendly website serving as Jason's personal security architecture study hub as he steps into a new security architecture role. No server required — open `index.html` directly in any browser.

## Project Structure
```
cyber/
├── index.html          # Main SPA — all pages, guides, and logic in one file
├── PROJECT.md          # This file
└── guides/             # Standalone guide files (content also embedded in index.html)
    ├── nist.html
    ├── sabsa.html
    ├── zerotrust.html
    └── cloud.html
```

> **Important:** Guide content is embedded directly inside `index.html` (as hidden `<div id="guide-data-*">` elements) so the site works when opened via `file://`. The `guides/` folder files are kept as readable backups but are not fetched at runtime.

---

## What's Built

### Pages (sidebar navigation)
| Page | Description |
|------|-------------|
| **Dashboard** | Live news feed (CISA, Krebs, Dark Reading, SANS via rss2json API), 2025–2026 trend cards, quick-jump framework tags, and stats counters |
| **Library** | 28 curated resources across 4 framework domains, each with description, external link, and a personal notes field (auto-saved to localStorage) |
| **TOGAF Explorer** | Interactive ADM wheel, control linkage force graph, and framework matrix (see below) |
| **Study Progress** | 20 checklist topics across all frameworks, progress bar, persisted in localStorage |
| **My Notes** | Consolidated view of all saved notes with delete option |
| **Framework Guides** | Inline readable deep-dives for each domain (no fetch — all embedded) |

### TOGAF Explorer (3 views)
1. **ADM Wheel** — SVG circular diagram of all 9 ADM phases + Requirements Management center. Click any segment → detail panel showing security architect role, SABSA layer, NIST CSF function, key deliverables, inputs/outputs.
2. **Control Linkage Graph** — Canvas-based force-directed graph of 19 security capabilities (IAM, PAM, SIEM, SOAR, EDR, ZTNA, CSPM, DLP, GRC, etc.) with 30+ edges. Hover to highlight connections, click to pin detail.
3. **Framework Matrix** — Table mapping every TOGAF ADM phase → SABSA layer → NIST CSF function → key security controls.

### Framework Guides (embedded content)
| Guide | Coverage |
|-------|----------|
| **NIST CSF / RMF** | CSF 2.0 six functions, RMF 7 steps, SP 800-53 control families, publication relationships, ATO process |
| **SABSA / TOGAF** | SABSA six-layer matrix, attributes, trust framework, TOGAF ADM phases, integration guidance |
| **Zero Trust / SASE** | NIST SP 800-207 tenets, CISA ZT Maturity Model, ZT components, SASE/SSE, ZTNA vs VPN, implementation roadmap |
| **Cloud Security** | Shared responsibility model, CSA CCM v4, multi-account patterns, AWS/Azure core services, CNAPP |

---

## Frameworks Covered
- **NIST CSF 2.0 & RMF** (SP 800-37, SP 800-53 Rev 5, SP 800-137)
- **SABSA** (Six-layer matrix, attributes, trust domains)
- **TOGAF 10** (ADM phases A–H + Preliminary + Requirements Management)
- **Zero Trust** (NIST SP 800-207, CISA ZT Maturity Model 2.0, BeyondCorp)
- **SASE / SSE** (SD-WAN, SWG, CASB, ZTNA, FWaaS)
- **Cloud Security** (CSA CCM v4, AWS SRA, Azure Security Benchmark, CNAPP)

---

## Technical Notes

### localStorage keys
| Key | Contents |
|-----|----------|
| `secarch_notes` | JSON object: `{ resourceId: "note text" }` |
| `secarch_progress` | JSON object: `{ topicId: true }` |

### News feeds (via rss2json.com free API)
- CISA: `https://www.cisa.gov/news.xml`
- Krebs on Security: `https://krebsonsecurity.com/feed/`
- Dark Reading: `https://www.darkreading.com/rss.xml`
- SANS ISC: `https://isc.sans.edu/rssfeed.xml`

### Known constraints
- `fetch()` is blocked on `file://` protocol — that's why all guide content is embedded inline in `index.html` rather than loaded from the `guides/` folder
- The rss2json news feed requires an internet connection; fails gracefully if offline
- The force graph runs a continuous `requestAnimationFrame` loop while the Control Linkage Graph view is active

---

## GitHub Setup & Workflow

### One-time setup (run in Terminal)

**Step 1 — Clean up the partial git init from the sandbox, then reinitialise:**
```bash
cd ~/Documents/jase_claude_project/cyber
rm -rf .git
git init
git branch -m main
git config user.name "Jason Nguyen"
git config user.email "jnguyen0304@gmail.com"
```

**Step 2 — Stage and commit all files:**
```bash
git add .
git commit -m "Initial commit — Security Architecture Hub"
```

**Step 3 — Create repo on GitHub:**
- Go to https://github.com/new
- Name it `secarch-hub` (or whatever you like)
- Set to **Public** (required for free GitHub Pages)
- **Do NOT** tick "Add README" or any other options — keep it empty
- Click **Create repository**

**Step 4 — Push to GitHub:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/secarch-hub.git
git push -u origin main
```

**Step 5 — Enable GitHub Pages:**
- Go to your repo on GitHub → **Settings** → **Pages** (left sidebar)
- Under "Source" select: `Deploy from a branch`
- Branch: `main` / Folder: `/ (root)`
- Click **Save**
- Your site will be live in ~1 minute at: `https://YOUR_USERNAME.github.io/secarch-hub`

---

### Ongoing workflow — every time you make changes

```bash
cd ~/Documents/jase_claude_project/cyber

# See what changed
git status

# Stage everything
git add .

# Commit with a meaningful message
git commit -m "Add ISO 27001 guide and two new library resources"

# Push — GitHub Pages auto-deploys within ~30 seconds
git push
```

That's it. Every `git push` to `main` automatically updates your live GitHub Pages site.

---

### Useful git commands

| Command | What it does |
|---------|-------------|
| `git status` | See what files have changed |
| `git diff` | See exactly what changed in each file |
| `git log --oneline` | See commit history |
| `git checkout -- index.html` | Discard unsaved changes to a file |
| `git stash` | Temporarily shelve changes without committing |

---

## Planned / Future Improvements
- [ ] Add search across guide content (not just library resources)
- [ ] Add more framework domains (ISO 27001, SOC 2, PCI-DSS, MITRE ATT&CK)
- [ ] Bookmarking / favourites for library resources
- [ ] Export notes to PDF or markdown
- [ ] Add a glossary page (common security architecture terms and acronyms)
- [ ] Expand TOGAF control linkage graph with more capability nodes
- [ ] Add a threat modelling reference section (STRIDE, PASTA, LINDDUN)
- [ ] Dark mode toggle

---

## How to Update Content

### Add a new library resource
In `index.html`, find `const LIBRARY_DATA` and add an entry to the relevant framework's `resources` array:
```js
{ id: 'unique-id', title: 'Resource Title', type: 'Guide|Paper|Official Doc|Reference', url: 'https://...', desc: 'Description.' }
```

### Add a new study topic
In `index.html`, find `const STUDY_TOPICS` and append:
```js
{ id: 't21', label: 'Topic description', framework: 'NIST|SABSA/TOGAF|Zero Trust|Cloud' }
```

### Edit guide content
Find the relevant `<div id="guide-data-[name]">` block inside `index.html` (in the hidden div section just before `<script>`). Edit the HTML directly. Use the same heading/table/blockquote structure already in place.

### Add a new guide
1. Add a nav item: `<div class="nav-item" onclick="openGuide('newid')">...</div>`
2. Add embedded content: `<div id="guide-data-newid">...</div>` in the hidden section
3. Optionally create a matching `guides/newid.html` file as a readable backup
