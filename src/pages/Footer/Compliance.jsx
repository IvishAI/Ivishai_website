import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Masthead, SectionAnchor, Closer, Checklist, NoteField, Contacts,
  Action, Ghost, Footnote,
} from "../../components/iv";
import { EMAILS, CREDENTIALS } from "../../data/site";

/* Compliance.
 *
 * ⚠️ WHAT THIS PAGE USED TO CLAIM, VERBATIM:
 *
 *     title: "SOC 2 & ISO 27001",
 *     desc:  "Our data security & management meet SOC 2 and ISO 27001
 *             standards, ensuring operational excellence."
 *
 * ...under a green tick, on a page aimed at government and enterprise buyers.
 * It also had a "VIEW REPORTS" button pointing at /compliance-reports, which
 * is not a route on this site and 404s.
 *
 * SOC 2 and ISO 27001 are audited certifications. A company either holds them,
 * with an auditor and a certificate and a date, or it does not. I could find no
 * evidence in this repository that IvishAI holds either, and the claim is the
 * kind a procurement team checks.
 *
 * So this page no longer asserts them. It states what is actually verifiable -
 * the registrations, where data sits, and what we commit to - and it says
 * plainly which certifications we do NOT hold. If any of these are in fact
 * held, restore the claim WITH the certificate number and date, not with a
 * tick.
 */

const TRUE_TODAY = [
  [true, "DPIIT recognised, and MSME registered"],
  [true, "Incorporated in India as a private limited company"],
  [true, "Infrastructure runs on AWS"],
  [true, "Offline-first products, so data need not leave the device to work"],
];

const NOT_YET = [
  [false, "SOC 2 — not audited"],
  [false, "ISO 27001 — not certified"],
  [false, "Published third-party security reports"],
];

const Compliance = () => (
  <div className="iv min-h-screen text-ink">
    <Header />

    <Masthead
      tag="Compliance"
      tone="stone"
      title="What we can actually evidence."
      lede="A compliance page is only worth anything if every line on it survives being checked. So this one lists what is true today, and what is not yet."
      actions={[
        <Action key="c" href={`mailto:${EMAILS.general}`}>Ask us anything</Action>,
        <Ghost key="s" to="/security">Security</Ghost>,
      ]}
    />

    <SectionAnchor
      id="true-today"
      tag="Verifiable today"
      title="What we hold."
      lede="Each of these can be checked against a public register or a contract."
    >
      <div className="max-w-xl mx-auto text-left">
        <Checklist items={TRUE_TODAY} />
      </div>
    </SectionAnchor>

    <SectionAnchor
      id="not-yet"
      tag="Not yet"
      title="What we do not hold."
      lede="Said here rather than left for a buyer to discover in diligence."
    >
      <div className="max-w-xl mx-auto text-left">
        <Checklist items={NOT_YET} />
      </div>

      <div className="mt-12">
        <NoteField tone="sand" tag="Why this section exists">
          This page previously stated that our data security and management
          &ldquo;meet SOC 2 and ISO 27001 standards&rdquo;. Those are audited
          certifications, not a posture, and we are not going to claim a
          certificate we cannot produce. If you need one for procurement, tell
          us and we will tell you honestly where we are.
        </NoteField>
      </div>
    </SectionAnchor>

    <SectionAnchor
      id="data"
      tag="Data protection"
      title="How we treat data."
      lede="Our obligations under India's DPDP Act, and what we do beyond them."
    >
      <div className="max-w-[62ch] mx-auto text-left text-ink-muted leading-relaxed space-y-4">
        <p>
          We collect what we need to run the service and nothing we cannot
          explain. We do not sell personal data.
        </p>
        <p>
          Our products are built offline-first, which means the common case is
          that content is processed on the device and never leaves it. Where
          processing does happen on our infrastructure, it runs on AWS.
        </p>
        <p>
          For public-sector deployments, data residency and ownership are part
          of the engagement, not an afterthought - raise it at the pilot stage
          and it will be written down.
        </p>
      </div>
    </SectionAnchor>

    <SectionAnchor id="ask" tag="Questions" title="Ask, and we will answer plainly.">
      <Contacts
        items={[
          ["Compliance and security", EMAILS.general],
          ["Government and public sector", EMAILS.government],
        ]}
      />

      <div className="mt-12 max-w-[62ch] mx-auto">
        <Footnote updated="13 October 2026">
          {CREDENTIALS.length} registrations listed on the about page.
        </Footnote>
      </div>
    </SectionAnchor>

    <Closer
      tone="ink"
      note="Ivish AI Quantum Pvt Ltd"
      actions={[
        <Action key="c" href={`mailto:${EMAILS.general}`}>Ask us anything</Action>,
        <Ghost key="a" to="/about">The company record</Ghost>,
      ]}
    >
      We would rather be checkable than impressive.
    </Closer>

    <Footer />
  </div>
);

export default Compliance;
