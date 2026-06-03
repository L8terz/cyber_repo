# SecArch Hub — Visual Redesign Spec

**Date:** 2026-06-04  
**Status:** Approved  
**Approach:** Shell + CSS rewrite (Approach A)

---

## Goal

Redesign the Security Architecture Hub with a modern, minimal, clean aesthetic and a cyber theme. The redesign preserves all existing functionality while introducing a new layout shell, updated visual system, and a new blank-foundation section.

---

## Design Direction

**Clean Cyber — Purely Minimal**

Cyber personality comes from the color palette alone — no decorative elements (no grid textures, glows, scanlines, or pattern overlays). Structure and color do all the work.

---

## Layout

**Top Bar + Collapsible Side Nav**

```
┌─────────────────────────────────────────────────────────┐
│  ☰  ⬡ SecArch Hub  / Dashboard        🔍 Search…  ⌘K  J │  ← Header (48px, always visible)
├──────────┬──────────────────────────────────────────────┤
│          │                                              │
│ Sidebar  │  Main content area                          │
│ (220px)  │  background: #f8faff                        │
│          │                                              │
│ collapses│                                              │
│ to 0px   │                                              │
└──────────┴──────────────────────────────────────────────┘
```

- **Header**: Always visible, `#060d1e`, 48px. Contains hamburger toggle, logo + breadcrumb, search pill, avatar initials.
- **Sidebar**: `#111d35`, 220px wide. Collapses to `width: 0` on hamburger click with a `transition: width 0.2s ease`. When collapsed, full content width is available.
- **Main area**: `#f8faff` off-white background, scrollable, `padding: 28px 32px`.

---

## Color System

| Token | Value | Usage |
|---|---|---|
| `--header-bg` | `#060d1e` | Top header background |
| `--sidebar-bg` | `#111d35` | Sidebar background |
| `--sidebar-text` | `#7fa8cc` | Inactive nav item text |
| `--sidebar-section` | `#3d6080` | Nav section labels |
| `--sidebar-active-text` | `#e8f4ff` | Active nav item text |
| `--sidebar-active-bg` | `rgba(56,189,248,0.07)` | Active nav item background |
| `--sidebar-border` | `rgba(56,189,248,0.08)` | Sidebar right border |
| `--bg` | `#f8faff` | Main area background |
| `--card-bg` | `#ffffff` | Card background |
| `--border` | `#e2e8f0` | Card / divider borders |
| `--text` | `#0f172a` | Primary text |
| `--text-muted` | `#64748b` | Secondary text |
| `--text-sub` | `#94a3b8` | Tertiary / meta text |
| `--accent` | `#38bdf8` | Primary cyan accent |
| `--accent-dark` | `#0284c7` | Darker cyan (stat value) |
| `--green` | `#059669` | Resources stat |
| `--indigo` | `#4f46e5` | Progress stat |
| `--amber` | `#d97706` | Notes stat |

---

## Typography

**Font:** Inter (loaded from Google Fonts)

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

| Use | Size | Weight |
|---|---|---|
| Page title (h2) | 22px | 800 |
| Card / section heading | 11px uppercase | 700 |
| Nav item | 13px | 400 |
| Body / resource text | 13–14px | 400 |
| Stat value | 30px | 800 |
| Meta / labels | 10–11px | 600 |

---

## Components

### Top Header
- Height: 48px, `background: #060d1e`, `border-bottom: 1px solid rgba(56,189,248,0.09)`
- Left: hamburger button (28×28px, border `rgba(56,189,248,0.14)`) + logo `⬡ SecArch Hub` + breadcrumb `<span id="header-breadcrumb">/ Dashboard</span>` (updated by `showPage()`)
- Right: search pill (`background: #0d1f3a`, border `rgba(56,189,248,0.14)`, text "Search everything…" + `<kbd>⌘K</kbd>` badge) + avatar circle (gradient `#38bdf8 → #6366f1`, initials "J")
- Hamburger toggles `#sidebar` between `width: 220px` and `width: 0`

### Sidebar
- `background: #111d35`, `width: 220px`, `transition: width 0.2s ease`, `overflow: hidden`
- Nav section labels: 10px, uppercase, `letter-spacing: 1.2px`, `color: #3d6080`
- Nav items: 13px, `color: #7fa8cc`, `border-left: 2px solid transparent`, `padding: 8px 16px`
- Active nav item: `background: rgba(56,189,248,0.07)`, `color: #e8f4ff`, `border-left-color: #38bdf8`
- Hover: `background: rgba(56,189,248,0.04)`, `color: #b8d4ea`, `border-left-color: rgba(56,189,248,0.25)`
- Footer: `border-top: 1px solid rgba(56,189,248,0.06)`, `color: #3d6080`, 11px

### Stat Cards (Dashboard)
- 4-column grid, `gap: 12px`
- `background: #fff`, `border: 1px solid #e2e8f0`, `border-radius: 10px`, `padding: 16px 18px`
- `border-top: 2px solid {accent-color}` — cyan / green / indigo / amber per card
- Label: 11px uppercase `#94a3b8`; Value: 30px 800 weight in accent color; Sub: 11px `#94a3b8`

### Content Cards
- `background: #fff`, `border: 1px solid #e2e8f0`, `border-radius: 10px`, `padding: 18px`
- Section title: 11px uppercase, `color: #94a3b8`, `letter-spacing: 0.8px`, preceded by a 3×12px `#38bdf8` left bar (via `::before` pseudo-element)

### Navigation Items (sidebar)
All nav items call `showPage(id, el)` or `openGuide(id)` as before — no JS logic changes except `toggleSidebar()` added to `nav.js`.

### NEW Badge (`.nav-new`)
- Inline badge used on the Cyber Security Architect nav item
- `font-size: 9px`, `font-weight: 700`, `color: #38bdf8`
- `background: rgba(56,189,248,0.08)`, `border: 1px solid rgba(56,189,248,0.18)`, `border-radius: 8px`, `padding: 1px 5px`
- `margin-left: auto` to push it to the right edge of the nav item

---

## New Section — Cyber Security Architect

**Nav entry** (under a new "New" section group in sidebar):
```html
<div class="nav-item" onclick="showPage('architect', this)">
  <span class="icon">◈</span> Cyber Sec Architect
  <span class="nav-new">NEW</span>
</div>
```

**Page shell** (`#page-architect`):
- Centered placeholder: shield icon + "Cyber Security Architect" title + "This section is coming soon. Foundation is set — ready to build out." subtitle
- No content — foundation only, ready for future development

---

## Files Changed

| File | Change |
|---|---|
| `src/styles/global.css` | Full rewrite — new design tokens, all component styles |
| `src/pages/index.astro` | Add `<link>` for Inter, add `<header>` element, update sidebar HTML (new colors via CSS classes), add `#page-architect` page shell, add new nav item |
| `public/js/nav.js` | Add `toggleSidebar()` function; update `showPage()` breadcrumb to update header path label |

All other JS modules (`library.js`, `notes.js`, `progress.js`, `togaf.js`, `news.js`, `data.js`, `utils.js`, `app.js`) are **unchanged**.

---

## Out of Scope

- No changes to guide Markdown content (`src/content/guides/`)
- No changes to Astro config or build pipeline
- No mobile/responsive layout (existing behavior preserved)
- Cyber Security Architect section content — foundation only
