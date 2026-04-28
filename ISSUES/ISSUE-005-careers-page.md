# ISSUE-005 — Rewrite Careers Page

**File:** `src/pages/Careers/Careers.jsx`
**Route:** `/careers`
**Priority:** Medium

---

## Overview

The Careers page needs a content rewrite. The visual design stays the same. The new page has:
1. Hero section
2. Open Roles table/grid

**Important:** The individual job detail pages (`/frontenddeveloper`, `/backendengineer`, `/ai-research-scientist`, etc.) can be kept or removed — but they are no longer linked from the Careers page. The new design uses a simplified 8-role table format. Each role either links to a job application form or shows a mailto link.

---

## Section 1 — Hero

**Headline:** Build Industry 6.0. From India to the World.

**Sub-copy:**
> We are not looking for people to fill roles. We are looking for people who see problems others miss — and build things that last.

Keep the existing hero visual treatment (background image, diagonal clip, gradient text).

---

## Section 2 — Open Roles

**Heading:** Open Roles

Render as a table or card grid with these 8 roles:

| Role | Domain | What You Own |
|------|--------|--------------|
| AI & Machine Learning Engineer | Intelligence | Core models — speech, translation, offline inference, proprietary AI systems. |
| Full Stack Developer | Product | Consumer and institutional product surfaces. Web and mobile. |
| UI / UX Designer | Design | Design for trust. Products go into banks, hospitals, and government offices. Clarity is not optional. |
| Business Development & Partnerships | Growth | Institutional pipeline — banks, hospitals, retail chains, enterprise. High ownership, high impact. |
| Hardware & Embedded Systems Engineer | Hardware | Physical layer — AI earbuds, kiosk systems, edge inference, firmware. |
| Marketing — Brand & Content | Marketing | Define how the world sees IvishAI Quantum and VerbX. Strategy, storytelling, campaigns. |
| Marketing — Growth & Digital | Marketing | Performance marketing, user acquisition, SEO, partnerships for VerbX and Retail OS. |
| Marketing — Institutional & B2B | Marketing | Account-based marketing for banking, healthcare, government, and enterprise verticals. |

Each role card/row should have an "Apply" button that either:
- Links to `/jobapplicationform` (the existing form page), OR
- Opens a mailto: `careers@ivishai.com?subject=[Role Name]`

---

## Section 3 — No Role Listed?

Below the roles table, add this text:

> No role listed for you? If you believe you belong here, write to us:
> **careers@ivishai.com**

Make the email a clickable mailto link.

---

## What NOT to Change
- Visual design, colors, animations
- Header and Footer
- The existing `/jobapplicationform` page (keep it, just link to it from roles)
- The existing auth pages (`/login`, `/signup`, `/profile`) — leave them as-is
