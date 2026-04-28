# ISSUE-003 — Rewrite Products Page

**File:** `src/pages/Products/Products.jsx`
**Route:** `/products`
**Priority:** High — routing layer between both products

---

## Purpose of This Page

This page is the routing layer. Users arrive here from the Home page or nav. They see two product cards side by side. One takes them to verbxeco.com (external), the other takes them deeper into ivishai.com (/retail-os).

Nothing is sold on this page. No pricing. Just clear product positioning and a CTA for each.

---

## Page Structure

### Page Heading
**Two Products. One Vision. Industry 6.0.**

Sub-copy:
> IvishAI Quantum is building the foundational infrastructure of the next era. Below are the two live pillars of that vision.

---

## Two Product Cards — Side by Side

### Card 1 — VerbX (Pillar 1)

| Element | Content |
|---------|---------|
| Label | Pillar 1 |
| Product Name | VerbX |
| Tagline | Language Communication OS |
| Description | The world's first Language Communication OS. Real-time voice, text, and camera translation across 2,000+ languages. Offline-capable. Institutionally secure. Live in market. |
| Who it serves | Individuals · Institutions · Developers · Travellers |
| Status badge | Live |
| CTA Button | "Explore VerbX →" |
| CTA destination | https://verbxeco.com — external link, opens in new tab |

### Card 2 — Retail OS (Pillar 2)

| Element | Content |
|---------|---------|
| Label | Pillar 2 |
| Product Name | Retail OS |
| Tagline | Retail Operating System |
| Description | The complete operating system for Indian retail. One platform, one AI, 19 industries. From a kirana store to a pharmacy to a regulated liquor shop. Works offline. Built for 12 million shops. |
| Who it serves | Retailers across 19 shop types in India |
| Status badge | In Market |
| CTA Button | "Learn More →" |
| CTA destination | /retail-os — internal React Router link |

---

## Visual Design

- Match the existing dark aesthetic of the site (black background, gradient headings, card styling)
- VerbX card: use cyan accent (`#13D8F6`) for the card border or badge
- Retail OS card: use orange accent (`#E26426`) for the card border or badge
- Cards should be equal width, side by side on desktop, stacked on mobile
- "Live" badge: cyan. "In Market" badge: orange.

---

## Important — VerbX Link Behaviour

The VerbX CTA must open verbxeco.com in a **new tab**:
```jsx
<a href="https://verbxeco.com" target="_blank" rel="noopener noreferrer">
  Explore VerbX →
</a>
```

The Retail OS CTA must use React Router `<Link to="/retail-os">`.

---

## What NOT to Change
- Visual design patterns
- Header and Footer
- Color scheme
