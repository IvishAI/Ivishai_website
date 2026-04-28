# ISSUE-009 — Build Retail OS Pricing Page

**File:** `src/pages/RetailOS/RetailOSPricing.jsx` (create new file)
**Route:** `/retail-os/pricing`
**Priority:** High

---

## Page Structure

The pricing page has two distinct pricing tables:
1. Plans for Zones 1–5 (standard shops)
2. Plans for Zone 6 (regulated restricted — no free tier)

---

### Section 1 — Plans for Zones 1 to 5

Heading: **Plans for Your Shop**
Sub: Works for all shop types — grocery, pharmacy, salon, food, and more.

Render as a 3-column pricing table:

|  | FREE | BASIC | PRO |
|--|------|-------|-----|
| Monthly | Rs. 0 | Rs. 299 | Rs. 699 |
| Annual | Rs. 0 | Rs. 2,999 | Rs. 6,999 |
| Billing | Full | Full | Full |
| Inventory | Basic | Full | Full |
| Khata (Credit Ledger) | No | Yes | Yes |
| Reports | Basic | Full | Advanced |
| SERA AI | Setup only | Yes — included | Yes — included |
| Multi-language | No | Yes | Yes |
| Users | 1 | 2 | Unlimited |
| Marketing / Poster Generation | No | No | Yes |
| Priority Support | No | No | Yes |

Notes below the table:
- Annual plans = 2 months free
- 14-day free PRO trial for all new shops

CTAs:
- FREE: "Get Started Free" → (link to signup or contact)
- BASIC: "Start BASIC" → (link to signup or contact)
- PRO: "Start PRO" → (link to signup or contact)

For now, CTAs can link to `mailto:connect@ivishai.com?subject=Retail OS [Plan Name]` or the contact page until a real signup flow exists.

---

### Section 2 — Zone 6 Plans (Regulated Restricted)

**IMPORTANT:** This section must be clearly separated and visually distinct. Add a banner or heading that says:

> **Zone 6 — Regulated Restricted**
> Liquor shops, tobacco shops, paan shops, and hybrid outlets. Compliance is built in from day one.
> **No permanent free tier. A minimum plan is required to operate.**

Render as a 3-column pricing table:

|  | ENTRY | BASIC | PRO |
|--|-------|-------|-----|
| Monthly | Rs. 299 | Rs. 699 | Rs. 999 |
| Annual | Rs. 2,999 | Rs. 6,999 | Rs. 9,999 |
| Billing | Full | Full | Full |
| Compliance Assistant (SERA) | Yes | Yes | Yes |
| Marketing / Poster Generation | No | No | Yes |

Note below the table:
- Zone 6 requires a minimum plan to operate. No permanent free tier — due to compliance requirements.

CTAs:
- Same pattern as above — mailto or contact link.

---

### Section 3 — Enterprise / Government

Below both tables, add a simple callout:

> **Banking, Government & Enterprise?**
> We offer custom pricing for government institutions, enterprise deployments, and bulk installations. Write to us at connect@ivishai.com.

---

## Visual Design

- Match site dark aesthetic
- Use `<Header />` and `<Footer />`
- Include Retail OS sub-nav
- FREE plan: subtle styling (no special highlight)
- PRO plan (Zones 1-5): highlight as recommended — use orange accent border or "Most Popular" badge
- Zone 6 section: add a compliance badge with subtle purple (`#5E35B1`) border or label — signals regulated status
- Tables should be mobile-responsive (stack columns vertically on small screens)
