# ISSUE-006 — Build Retail OS Overview Page

**File:** `src/pages/RetailOS/RetailOSOverview.jsx` (create new file)
**Route:** `/retail-os`
**Priority:** High — front door to the entire Retail OS section

---

## Setup

Create a new folder: `src/pages/RetailOS/`
Create the file: `src/pages/RetailOS/RetailOSOverview.jsx`

Also create a shared Retail OS nav component (optional but recommended):
`src/pages/RetailOS/RetailOSNav.jsx` — a sub-navigation bar with links to all 4 Retail OS pages:
- Overview → /retail-os
- Features → /retail-os/features
- Industries → /retail-os/industries
- Pricing → /retail-os/pricing

This sub-nav sits below the main Header and above each Retail OS page's content.

---

## Page Structure

### Hero Section

| Element | Content |
|---------|---------|
| Headline | Retail OS — The Operating System for Indian Retail |
| Sub-headline | One platform. One AI. 19 industries. Works offline. |
| Body | India's 12 million retail shops deserve better than paper registers and WhatsApp. Retail OS is the complete operating system for any shop — billing, inventory, payments, credit management, and an AI built in from day one. It adapts to your business, not the other way around. |
| CTA 1 | "Get Started Free" → /retail-os/pricing |
| CTA 2 | "View Plans" → /retail-os/pricing |
| CTA 3 | "See All Industries" → /retail-os/industries |

---

### Section 2 — 6 Zones. 19 Industries. One Platform.

Heading: **6 Zones. 19 Industries. One Platform.**

Render as a table or zone cards:

| Zone | Type | Industries Covered |
|------|------|--------------------|
| Zone 1 | Core Retail | Grocery, Kirana, General Store, Dairy, Fruits & Vegetables, Bakery |
| Zone 2 | Pharmacy | Pharmacy, Medical Store |
| Zone 3 | Regulated Retail | Electronics, Mobile Store, Hardware, Stationery |
| Zone 4 | Service-Led | Salon, Beauty, Tailor, Boutique, Repair Shop |
| Zone 5 | Food & Beverage | Fast Food, Takeaway, Tiffin Centre, Curry Point |
| Zone 6 | Regulated Restricted | Liquor Shop, Tobacco Shop, Paan Shop, Hybrid Paan + Food |

Zone 6 should have a slightly different visual treatment — it has compliance requirements and no free tier. A small badge or note saying "Compliance Required" is appropriate.

Add a CTA at the bottom: "Explore All Industries →" → /retail-os/industries

---

## Visual Design

- Match the dark aesthetic of the rest of the site (black background, gradient headings)
- The orange accent `#E26426` is especially appropriate for Retail OS elements (it's the product's identity colour in the design system, though we're not repainting the whole site — use it naturally within the existing gradient/accent patterns)
- Use `<Header />` and `<Footer />` from `src/components/`
- Include the Retail OS sub-nav if you created `RetailOSNav.jsx`

---

## Routing

Make sure `src/App.js` has this route registered (see ISSUE-010):
```jsx
<Route path="/retail-os" element={<RetailOSOverview />} />
```
