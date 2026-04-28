# ISSUE-007 — Build Retail OS Features Page

**File:** `src/pages/RetailOS/RetailOSFeatures.jsx` (create new file)
**Route:** `/retail-os/features`
**Priority:** High

---

## Page Structure

### Section 1 — What Every Shop Gets

Heading: **What Every Shop Gets**

Render as a feature grid (6 cards):

| Feature | What It Does |
|---------|-------------|
| Billing | Fast, reliable billing. Works offline — no internet needed. Barcode scanning, manual entry, printable invoices, PDF sharing. |
| Inventory Management | Know what you have and what you are running low on. Industry-appropriate tracking — deeper for pharmacy, straightforward for others. |
| Khata — Credit Ledger | The digital replacement for the paper notebook. Track who owes you, how much, since when. Send reminders directly. |
| Payments | Six payment modes in one place — Cash, UPI QR, UPI Dynamic, Card, Credit (Khata), and Prepaid Balance. |
| Reports & Analytics | Daily sales, earnings, expenses, profit. Clean summaries — not overwhelming dashboards. Business health at a glance. |
| SERA — AI Assistant | Built into every plan. Helps you set up your shop, manage products, answer business questions, and suggest improvements. Included — not an add-on. |

---

### Section 2 — SERA — Your Shop's AI

Heading: **SERA — Your Shop's AI**

Intro copy:
> SERA stands for Shop Engine for Retail Assistance. It is not a chatbot. It knows your shop type, your inventory, your language, and your industry's requirements.

Render as a two-column table (What SERA Does | Available In):

| What SERA Does | Available In |
|----------------|-------------|
| Guides you through shop setup at onboarding | All plans |
| Answers questions about your own business | All plans |
| Suggests products, pricing, and restocking | BASIC and above |
| Generates posters and marketing content | PRO only |
| Compliance guidance for regulated industries | Zone 6 — always active |

Closing line (bold or highlighted):
> **SERA is always included in your plan. It is never charged separately.**

---

### Section 3 — Offline-First. Always.

Heading: **Offline-First. Always.**

Body:
> Billing in Retail OS works without internet. Your sales data is stored on the device and syncs when connectivity returns. A network failure is never a business failure.

This can be a full-width banner section or a prominent callout block.

---

### Bottom CTA

Add navigation CTAs at the bottom:
- "See All Industries →" → /retail-os/industries
- "View Pricing →" → /retail-os/pricing

---

## Visual Design

- Match site dark aesthetic
- Use `<Header />` and `<Footer />`
- Include Retail OS sub-nav (Overview | Features | Industries | Pricing) if created in ISSUE-006
- SERA section can use the blue accent `#1565C0` as a subtle highlight (this is SERA's designated colour in the design system) — apply it as an icon colour, border, or badge, keeping the overall dark theme intact
