# ISSUE-001 — Update Header Navigation

**File:** `src/components/Header.jsx`
**Priority:** High — do this early, it affects every page

---

## What to Change

The current nav has: Home · About · Products · Careers · Testimonials · Blogs · Contact Us

**New nav must have:** About · Products · Careers  (3 items only)

Remove from nav: Testimonials, Blogs, and the standalone Contact Us button in the nav bar.
Keep the logo linking to `/`.

### Desktop Nav Links
```
About        → /about
Products     → /products
Careers      → /careers
```

No other top-level nav items. Clean and minimal.

### Mobile Nav (hamburger menu)
Same 3 links:
```
About        → /about
Products     → /products
Careers      → /careers
```

### Footer Links — Also Update
In `src/components/Footer.jsx`, the footer columns currently reference old products (UnitySense, LinguaFlow, etc.). Update the Products column to reference:
- VerbX → links to verbxeco.com (open in new tab, external)
- Retail OS → /retail-os (internal)

Keep the legal/policy footer links as-is (Privacy Policy, Legal, Security, etc.).

---

## What NOT to Change
- The visual design of the header (transparent bg, backdrop blur, existing styling)
- Logo styling and placement
- The overall header layout and mobile behavior
- Any color values
