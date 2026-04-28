# ISSUE-004 — Rewrite About Page

**File:** `src/pages/header/About.jsx`
**Route:** `/about`
**Priority:** Medium

---

## Page Structure

The About page has 4 sections:
1. Who We Are
2. Company Credentials
3. Founder's Note
4. The 6-Pillar Architecture

---

## Section 1 — Who We Are

Heading: **Who We Are**

Body copy (two paragraphs):

> IvishAI Quantum is a DPIIT-recognised deep-tech company headquartered in Hyderabad, India. We build the foundational infrastructure of Industry 6.0 — the convergence of language intelligence, AI-driven commerce systems, and edge computing.

> We are not a product company in the traditional sense. We are an ecosystem builder — creating the operating layers that individuals, institutions, and nations will depend on. Every product we build is invisible when it works, indispensable when it matters, and trusted because integrity was engineered in from the beginning.

---

## Section 2 — Company Credentials

Heading: **Company Credentials**

Render as a clean table or info cards:

| Credential | Detail |
|-----------|--------|
| Registered Name | IvishAI Quantum Pvt. Ltd. |
| Recognition | DPIIT-recognised Startup India company — AI / Machine Learning sector |
| Headquarters | Hyderabad, India |
| Funding | Funded — Startup India recognised |
| Live Products | VerbX — Language OS. Retail OS — Retail Platform. |
| Engagements | AI Impact Summit 2026 — engaged with ministers, national bodies, and international delegates |

---

## Section 3 — Founder's Note

Attribution: **Sahith Vutukuri — Founder & CEO, IvishAI Quantum Pvt. Ltd.**

Full quote to display (this is the complete founder's note — use all of it):

> Great leaders do not claim to have all the answers — or carry the weight of every decision alone. Their power lies in choosing the right team, inspiring unwavering trust, and empowering those around them to rise together. That is how legacies are forged — through unity, trust, and shared vision.
>
> I founded IvishAI Quantum on a simple conviction: the most important problems are the ones nobody has properly solved yet.
>
> We are in the earliest days of what I believe will be the defining technological shift of our generation — Industry 6.0. Not the internet. Not smartphones. Not even generative AI. The real shift is when all of these stop being things people use — and start being things people live within.
>
> Language will be the first wall to fall. Commerce infrastructure will be the second. What we are building at IvishAI Quantum is not a product suite. It is a new baseline — for how an individual communicates, how a retailer operates, how an institution serves the person across the counter.
>
> We are building this from India — the most linguistically complex, commercially diverse, and digitally underserved large market on earth. If we can solve it here, we can solve it anywhere.
>
> The best is genuinely ahead — not just for IvishAI Quantum, but for every person our systems will one day serve.

Style this as a quote/blockquote section. The existing About page already has quote styling (`text-cyan-400` italic) — use the same pattern.

---

## Section 4 — The 6-Pillar Architecture

Heading: **The 6-Pillar Architecture**

Render as a table or card grid:

| Pillar | Name | What It Addresses |
|--------|------|-------------------|
| Pillar 1 | VerbX — Language Communication OS | Language as infrastructure. 2,000+ languages. Offline. Institutionally secure. Live. |
| Pillar 2 | Retail OS — Retail Operating System | Commerce as infrastructure. 19 industries. 6 zones. AI-first. Offline-first. Live. |
| Pillar 3 | To Be Announced | — |
| Pillar 4 | To Be Announced | — |
| Pillar 5 | To Be Announced | — |
| Pillar 6 | iii — Invisible Intelligent Infrastructure | Long-term convergence of all pillars into a unified intelligent layer |

---

## What NOT to Change
- Visual design, colors, animations
- Header and Footer components
- Existing page structure patterns
