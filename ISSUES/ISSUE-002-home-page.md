# ISSUE-002 — Rewrite Home Page

**File:** `src/pages/Home.jsx` and its child components in `src/components/`
**Priority:** Highest — entry point for all traffic

---

## Overview

The Home page needs a complete content overhaul. The visual design (dark theme, black backgrounds, orange/cyan gradients, Framer Motion animations) must stay exactly as it is. Only the copy and section structure changes.

The page must include these sections in order:
1. Hero Section
2. Who We Are
3. The 6 Pillars of Industry 6.0
4. Our Two Live Products
5. Why IvishAI Quantum
6. Who We Have Met
7. FAQ

---

## Section 1 — Hero

Replace the current hero content with:

| Element | Content |
|---------|---------|
| Headline | We Are Building Industry 6.0 |
| Sub-headline | From India. For the World. |
| Body copy | IvishAI Quantum is building the foundational infrastructure of the next era — where language, intelligence, and human systems converge. Our products are not features. They are operating systems for how the world works. |
| CTA Button 1 | "Explore VerbX" → links to https://verbxeco.com (external, open new tab) |
| CTA Button 2 | "Explore Retail OS" → links to /retail-os (internal) |

Keep the existing hero visual style — dark background, gradient text, button styling.

---

## Section 2 — Who We Are

Section heading: **We Are Not Building Apps. We Are Building What Comes After Them.**

Body copy:
> IvishAI Quantum is a DPIIT-recognised deep-tech company, born in India, built for the world. We architect the foundations of Industry 6.0 — intelligent systems that disappear into daily life, indispensable to those who use them, invisible when they work perfectly.
>
> We build new baselines, not new features. Every product we ship removes a wall that should never have existed — in language, in commerce, in access, in intelligence.

Style this like the existing "Mission Statement" component — dark section, gradient heading.

---

## Section 3 — The 6 Pillars of Industry 6.0

Section heading: **The 6 Pillars of Industry 6.0**

Render as a table or card grid with these 6 rows:

| Pillar | Name | Status |
|--------|------|--------|
| Pillar 1 | VerbX — Language Communication OS | Live |
| Pillar 2 | Retail OS — Retail Operating System | In Market |
| Pillar 3 | To Be Announced | Planned |
| Pillar 4 | To Be Announced | Planned |
| Pillar 5 | To Be Announced | Planned |
| Pillar 6 | iii — Invisible Intelligent Infrastructure | Long-Term Vision |

Status badges: "Live" = cyan, "In Market" = orange, "Planned" = gray, "Long-Term Vision" = subtle/muted.

---

## Section 4 — Our Two Live Products

Section heading: **Two Products. One Vision. Industry 6.0.**

Render as two side-by-side cards:

**Card 1 — VerbX**
- What it is: Language Communication OS — Pillar 1
- Who it serves: Individuals, institutions, developers, travellers
- Where it lives: verbxeco.com — its own site
- Status: Live — App, SaaS & UI surfaces in market
- CTA: "Explore VerbX →" → https://verbxeco.com (external, new tab)

**Card 2 — Retail OS**
- What it is: Retail Operating System — Pillar 2
- Who it serves: Retailers across 19 shop types in India
- Where it lives: ivishai.com/retail-os
- Status: Live — in market
- CTA: "Explore Retail OS →" → /retail-os (internal)

---

## Section 5 — Why IvishAI Quantum

Section heading: **Why IvishAI Quantum**

Render as a grid of principle cards (like the existing feature/why cards):

| Principle | What It Means |
|-----------|---------------|
| Human at the Core | Technology adapts to people — their language, culture, and environment. Never the reverse. |
| Security by Design | Privacy and integrity are architectural principles. Built into every layer before the first line of code. |
| Global from Day One | Built in India, designed for every market on earth. We think in decades and in continents. |
| Invisible When It Works | The best infrastructure disappears. You never notice it — until it's gone. |
| Owned Infrastructure | We do not depend on single-vendor AI. 52 proprietary models trained, 100+ ONNX runtimes. Edge-first, offline-capable. |
| Mission-Critical Proven | Active in banking and healthcare — sectors where failure is not an option. |

---

## Section 6 — Who We Have Met

Section heading: **Who We Have Met**

Render as a clean list or card grid. All context is "AI Impact Summit 2026":

| Organisation / Individual | Context |
|--------------------------|---------|
| Ashwini Vaishnaw — Minister of Railways, IT & Electronics, Govt. of India | AI Impact Summit 2026 |
| Minister — Government of Andhra Pradesh | AI Impact Summit 2026 |
| NITI Aayog Representatives | AI Impact Summit 2026 |
| HP, Air India & RBI Members | AI Impact Summit 2026 |
| Basini — CEO | AI Impact Summit 2026 |
| NVIDIA Representatives | AI Impact Summit 2026 |
| International Delegates — AI Impact Summit 2026 | Multi-country representation across AI, policy & industry |

This section signals credibility. Style it with appropriate visual weight — not flashy, but trustworthy.

---

## Section 7 — FAQ

Replace the current FAQ content with these Q&A pairs. Keep the existing accordion/FAQ component structure and styling:

**Q: What is IvishAI Quantum?**
A: A DPIIT-recognised Indian deep-tech company building the infrastructure of Industry 6.0. We build operating systems — for language, for retail, and for the systems that will define the next decade.

**Q: What is VerbX?**
A: VerbX is Pillar 1 — the world's first Language Communication OS. Real-time voice, text, and camera translation across 2,000+ languages. Offline-capable, institutionally secure, live in market. Visit verbxeco.com.

**Q: What is Retail OS?**
A: Retail OS is Pillar 2 — a complete operating system for Indian retail shops. One platform, one AI, 19 industries. From a kirana store to a pharmacy to a regulated liquor shop.

**Q: What does Industry 6.0 mean?**
A: The era where AI, edge computing, language intelligence, and physical systems work in seamless harmony — not as tools people operate, but as infrastructure people live within.

**Q: Are VerbX and Retail OS separate products?**
A: Yes. VerbX has its own site at verbxeco.com. Retail OS lives at ivishai.com/retail-os. Both are pillars of IvishAI Quantum's Industry 6.0 architecture.

**Q: Is IvishAI Quantum funded?**
A: Yes. We have received funding and are DPIIT-recognised under Startup India.

**Q: How do I partner with IvishAI Quantum?**
A: Write to us at connect@ivishai.com. We are open to institutional pilots, enterprise integrations, and strategic partnerships across sectors.

---

## What NOT to Change
- All visual styling, colors, animations
- The Header and Footer components
- The overall page layout approach
