# ISSUE-011 — Clean Up Old Pages

**Priority:** Low — do this last, after all other issues are complete

---

## Overview

The codebase has product pages from an older version of the site (UnitySense, LinguaFlow, old VerbX content). These no longer reflect the current product lineup and should be removed or hidden. Do this carefully — verify nothing links to them before deleting.

---

## Pages to Remove (after verifying no active links)

| File | Route | Reason |
|------|-------|--------|
| `src/pages/Products/UnitySensePage.jsx` | `/unitysensepage` | Old product — no longer exists |
| `src/pages/Products/LinguaFlowPage.jsx` | `/linguaflowpage` | Renamed to VerbX — outdated |
| `src/pages/Products/VerbX-Docs.jsx` | `/verbx-docs` | VerbX docs belong on verbxeco.com, not here |
| `src/pages/VerbXIntro.jsx` | `/verbxintro` | Outdated intro page |
| `src/pages/verbxlogo.jsx` | `/verbxlogo` | Not part of new site structure |

### Before Deleting
1. Search `src/` for any `<Link to="/unitysensepage">` or similar references
2. Search `src/` for any `<a href="/linguaflowpage">` references
3. Check `src/components/Header.jsx` and `src/components/Footer.jsx` for links to these routes
4. Check `src/App.js` — remove the route entries after removing the files
5. Only delete once you've confirmed zero active links pointing to them

---

## Individual Job Pages — Optional Cleanup

The following individual job detail pages exist but are no longer linked from the new Careers page design (ISSUE-005 uses a table format instead):

| File | Route |
|------|-------|
| `src/pages/Careers/aiml/AiResearchScientist.jsx` | `/ai-research-scientist` |
| `src/pages/Careers/aiml/MachineLearningEngineer.jsx` | `/machine-learning-engineer` |
| `src/pages/Careers/aiml/ComputerVisionEngineer.jsx` | `/computer-vision-engineer` |
| `src/pages/Careers/aiml/NlpResearcher.jsx` | `/nlp-researcher` |
| `src/pages/Careers/Software/FrontendDeveloper.jsx` | `/frontenddeveloper` |
| `src/pages/Careers/Software/BackendEngineer.jsx` | `/backendengineer` |

**Decision:** Either remove them (less clutter) or keep them (no harm, they just won't be linked). If you keep them, remove their route entries from `App.js` so they 404 cleanly rather than serving stale content. If you remove them, apply the same check-for-links process described above.

---

## Pages to Keep (Do NOT touch)

- All legal/policy pages (`/privacypolicy`, `/legal`, `/security`, `/compliance`, etc.)
- Auth pages (`/login`, `/signup`, `/profile`)
- `/jobapplicationform` and `/stay-updated`
- `/blog` and all blog articles (not in new nav but still accessible)
- `/contact`
- `/morefaq`
- `NotFound.jsx` (404 page)

---

## After Cleanup

Run the app and verify:
- No broken links in Header or Footer
- The 404 page shows for removed routes (not a blank screen)
- All new Retail OS routes work correctly
