# IvishAI Website — Issues Index

**Project:** ivishai.com (React SPA — this repo)
**Scope:** Content and structure refactor for all ivishai.com pages + new Retail OS section
**Out of scope:** verbxeco.com — that is a completely separate repo, do not touch it here

---

## Ground Rules Before You Start

### Tech Stack
- React 18 + React Router DOM v6 (client-side SPA — no Next.js)
- Tailwind CSS + DaisyUI
- Framer Motion for animations
- All pages in `src/pages/`, shared components in `src/components/`
- Routing defined in `src/App.js`

### Color Rule — CRITICAL
**Do NOT change any colors.** The existing color scheme must stay exactly as-is:
- Backgrounds: `black`
- Primary accent: `#E26426` (orange)
- Secondary accent: `#13D8F6` (cyan) / `#0F616D` (dark teal)
- Text: `white`, `text-gray-300`, `text-stone-300`
- Gradients: white→orange, cyan→orange, etc.

All new pages and rewrites must match this existing dark aesthetic.

### Design Rule
Every page uses `<Header />` + page content + `<Footer />` from `src/components/`. Do not remove or replace these. Match the visual style of existing pages like About or Careers.

### What ivishai.com Does
- Parent company site for IvishAI Quantum Pvt. Ltd.
- Routes visitors to two products: VerbX (external → verbxeco.com) and Retail OS (internal → /retail-os)
- Nothing is sold on ivishai.com itself
- Retail OS lives fully inside ivishai.com under /retail-os — no separate domain

---

## Issue List

| # | Title | File(s) | Status |
|---|-------|---------|--------|
| [001](ISSUE-001-navigation.md) | Update Header Navigation | `src/components/Header.jsx` | Open |
| [002](ISSUE-002-home-page.md) | Rewrite Home Page | `src/pages/Home.jsx` + components | Open |
| [003](ISSUE-003-products-page.md) | Rewrite Products Page | `src/pages/Products/Products.jsx` | Open |
| [004](ISSUE-004-about-page.md) | Rewrite About Page | `src/pages/header/About.jsx` | Open |
| [005](ISSUE-005-careers-page.md) | Rewrite Careers Page | `src/pages/Careers/Careers.jsx` | Open |
| [006](ISSUE-006-retail-os-overview.md) | Build Retail OS Overview | `src/pages/RetailOS/RetailOSOverview.jsx` (new) | Open |
| [007](ISSUE-007-retail-os-features.md) | Build Retail OS Features | `src/pages/RetailOS/RetailOSFeatures.jsx` (new) | Open |
| [008](ISSUE-008-retail-os-industries.md) | Build Retail OS Industries | `src/pages/RetailOS/RetailOSIndustries.jsx` (new) | Open |
| [009](ISSUE-009-retail-os-pricing.md) | Build Retail OS Pricing | `src/pages/RetailOS/RetailOSPricing.jsx` (new) | Open |
| [010](ISSUE-010-routing.md) | Update App.js Routing | `src/App.js` | Open |
| [011](ISSUE-011-cleanup.md) | Clean Up Old Pages | Multiple files | Open |

---

## Recommended Execution Order

1. **010** — Routing first (add /retail-os routes so pages don't 404 during dev)
2. **001** — Navigation (sets the frame for everything)
3. **002** — Home page (highest traffic, entry point)
4. **003** — Products page (routing layer between both products)
5. **006** — Retail OS Overview (front door to Retail OS)
6. **007** — Retail OS Features
7. **008** — Retail OS Industries
8. **009** — Retail OS Pricing
9. **004** — About page
10. **005** — Careers page
11. **011** — Cleanup last (safe to defer)
