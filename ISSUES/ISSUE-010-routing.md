# ISSUE-010 — Update App.js Routing

**File:** `src/App.js`
**Priority:** Do this first — other issues depend on routes existing

---

## New Routes to Add

Open `src/App.js` and add the following routes inside the existing `<Routes>` block:

```jsx
import RetailOSOverview from './pages/RetailOS/RetailOSOverview';
import RetailOSFeatures from './pages/RetailOS/RetailOSFeatures';
import RetailOSIndustries from './pages/RetailOS/RetailOSIndustries';
import RetailOSPricing from './pages/RetailOS/RetailOSPricing';

// Inside <Routes>:
<Route path="/retail-os" element={<RetailOSOverview />} />
<Route path="/retail-os/features" element={<RetailOSFeatures />} />
<Route path="/retail-os/industries" element={<RetailOSIndustries />} />
<Route path="/retail-os/pricing" element={<RetailOSPricing />} />
```

These files won't exist until ISSUE-006 through ISSUE-009 are completed. Add the routes as placeholder imports first if needed — wrap in a try/catch or use React.lazy for deferred loading.

---

## Existing Routes — Keep As-Is

Keep all existing routes. Do not remove any existing routes even if they seem outdated — they may still be linked from somewhere. The cleanup of old pages is a separate task (ISSUE-011).

Specifically keep:
- `/` → Home
- `/about` → About
- `/products` → Products
- `/careers` → Careers
- `/contact` → Contact
- `/privacypolicy`, `/legal`, `/security`, `/compliance`, etc.
- All auth routes (`/login`, `/signup`, `/profile`)
- `/jobapplicationform`, `/stay-updated`

---

## React.lazy Pattern (Recommended)

The project already uses React.lazy for code splitting. Follow the same pattern for the new Retail OS pages:

```jsx
const RetailOSOverview = React.lazy(() => import('./pages/RetailOS/RetailOSOverview'));
const RetailOSFeatures = React.lazy(() => import('./pages/RetailOS/RetailOSFeatures'));
const RetailOSIndustries = React.lazy(() => import('./pages/RetailOS/RetailOSIndustries'));
const RetailOSPricing = React.lazy(() => import('./pages/RetailOS/RetailOSPricing'));
```

Wrap the routes in `<Suspense fallback={<div>Loading...</div>}>` or use the existing loading page component at `src/pages/loadingpage.jsx`.
