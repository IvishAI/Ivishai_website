# ISSUE-008 — Build Retail OS Industries Page

**File:** `src/pages/RetailOS/RetailOSIndustries.jsx` (create new file)
**Route:** `/retail-os/industries`
**Priority:** High

---

## Page Structure

### Intro Section

Heading: **Why Industries Matter**

Body:
> A pharmacy needs expiry date tracking and compliance controls. A salon bills for services, not products. A food stall uses a token queue. A kirana sells by weight. One size fits none of them — which is why Retail OS adapts to each industry's real workflow.

---

### Zone 1 — Core Retail

Zone heading: **Zone 1 — Core Retail**

| Industry | Key Capabilities |
|----------|-----------------|
| Grocery / Kirana | Weight-based billing for loose items, barcode scanning, customer credit (Khata) |
| General Store | Full product catalogue, inventory tracking, mixed billing — standard and variable items |
| Dairy | Daily supply scheduling, regular customer management, Khata billing |
| Fruits & Vegetables | Weight-based billing, daily price updates, seasonal inventory |
| Bakery | Product catalogue, daily production tracking, invoice generation |

---

### Zone 2 — Pharmacy

Zone heading: **Zone 2 — Pharmacy**

| Industry | Key Capabilities |
|----------|-----------------|
| Pharmacy / Medical Store | Batch tracking, expiry date monitoring, prescription-linked billing, drug catalogue management |

---

### Zone 3 — Regulated Retail

Zone heading: **Zone 3 — Regulated Retail**

Industries: Electronics, Mobile Store, Hardware, Stationery

Note: The source document lists Zone 3 industries in the overview table but does not provide detailed per-industry capabilities for Zone 3. Render with the 4 industry names and a note: "Full billing, inventory, and reporting — standard retail workflow."

---

### Zone 4 — Service-Led

Zone heading: **Zone 4 — Service-Led**

| Industry | Key Capabilities |
|----------|-----------------|
| Salon / Beauty | Service billing, walk-in and appointment billing, staff service tracking |
| Tailor / Boutique | Measurement records, order management, delivery tracking, service billing |
| Repair Shop | Job card management, parts + labour billing, delivery status |

---

### Zone 5 — Food & Beverage

Zone heading: **Zone 5 — Food & Beverage**

| Industry | Key Capabilities |
|----------|-----------------|
| Fast Food / Takeaway | Menu-based billing, token ordering, quick checkout |
| Tiffin / Curry Point | Subscription-based customer billing, daily order management, Khata for regulars |

---

### Zone 6 — Regulated Restricted

Zone heading: **Zone 6 — Regulated Restricted**

**IMPORTANT:** Zone 6 must be visually distinct. It has compliance requirements. Add a clear badge or banner: "Compliance Required — No Free Tier."

Intro copy:
> Liquor shops, tobacco shops, paan shops, and hybrid food+paan outlets operate under specific regulations. Retail OS is the only retail platform built with these compliance requirements from day one.

| Industry | Compliance Built In |
|----------|-------------------|
| Liquor Shop | State excise license validation, age restriction, dry-state blocking |
| Tobacco Shop | COTPA compliance, age restriction, proximity restrictions |
| Paan Shop | COTPA if tobacco products sold, standard billing otherwise |
| Hybrid Paan + Food | COTPA and FSSAI layers — both active where applicable |

Closing note for Zone 6:
> Zone 6 does not have a free plan. A minimum paid plan is required to operate on Retail OS — due to compliance requirements.

Link: "See Zone 6 Pricing →" → /retail-os/pricing

---

### Bottom CTA

- "View All Features →" → /retail-os/features
- "See Pricing →" → /retail-os/pricing

---

## Visual Design

- Match site dark aesthetic
- Use `<Header />` and `<Footer />`
- Include Retail OS sub-nav
- Zone 6 section: use a subtle purple badge/border (`#5E35B1` used sparingly as an accent, not a background repaint) to signal compliance/restricted status
- Each zone can be a collapsible section or a full section — either works
