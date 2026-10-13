import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Masthead, SectionAnchor, Closer, Checklist, NoteField, Contacts,
  Action, Ghost, TextLink, Footnote,
} from "../../components/iv";
import { EMAILS, BRAND } from "../../data/site";

/* Legal - the index to the other documents.
 *
 * Two claims came off this page, for the same reason the SOC 2 claim came off
 * /compliance: they are the kind a reader is entitled to check.
 *
 *   "GDPR Compliant - Users have full control over their data"
 *   "Regular Audits - We conduct internal security and privacy audits every
 *    6 months"
 *
 * GDPR compliance is a legal conclusion, not a badge you award yourself, and I
 * found nothing in this repository showing a six-monthly audit has ever been
 * run. What is true is stated instead: what we commit to in the terms, and
 * where the actual documents are.
 */

const COMMITMENTS = [
  [true, "We collect what we need to run the service and can explain each of it"],
  [true, "We do not sell personal data"],
  [true, "We do not share user data without consent"],
  [true, "Analytics is off until a visitor turns it on"],
  [true, "Our products are offline-first, so the common case never leaves the device"],
];

const DOCS = [
  ["/terms", "Terms & conditions", "What you agree to by using our services."],
  ["/privacypolicy", "Privacy policy", "What we collect, and what we never do with it."],
  ["/cookie-preferences", "Cookie preferences", "Turn analytics on or off. It is honoured."],
  ["/compliance", "Compliance", "What we can evidence, and what we cannot."],
  ["/responsibledisclosure", "Responsible disclosure", "How to report a vulnerability."],
];

const Legal = () => (
  <div className="iv min-h-screen text-ink">
    <Header />

    <Masthead
      tag="Legal"
      tone="stone"
      title="The documents, in one place."
      lede="Terms, privacy, cookies, compliance and disclosure - and a plain statement of what we actually commit to."
      actions={[
        <Action key="t" href="/terms">Terms &amp; conditions</Action>,
        <Ghost key="p" href="/privacypolicy">Privacy policy</Ghost>,
      ]}
    />

    <SectionAnchor id="docs" tag="The documents" title="Everything we publish.">
      <ul className="border-t border-rule max-w-xl mx-auto text-left">
        {DOCS.map(([to, label, line]) => (
          <li key={to} className="border-b border-rule py-5">
            <TextLink to={to}>{label}</TextLink>
            <p className="body-s mt-1.5">{line}</p>
          </li>
        ))}
      </ul>
    </SectionAnchor>

    <SectionAnchor
      id="commitments"
      tag="What we commit to"
      title="Said plainly, so you can hold us to it."
    >
      <div className="max-w-xl mx-auto text-left">
        <Checklist items={COMMITMENTS} />
      </div>

      <div className="mt-12">
        <NoteField tone="stone" tag="What this page no longer claims">
          It used to say we are &ldquo;GDPR Compliant&rdquo; and that we run
          internal security and privacy audits every six months. Compliance is a
          legal conclusion rather than a badge, and we have no record of such an
          audit, so neither claim is made here. See the compliance page for what
          we can actually evidence.
        </NoteField>
      </div>
    </SectionAnchor>

    <SectionAnchor id="ask" tag="Questions" title="Ask, and we will answer plainly.">
      <Contacts items={[["Legal and privacy", EMAILS.general]]} />
      <div className="mt-12 max-w-[62ch] mx-auto">
        <Footnote updated="13 October 2026">
          {BRAND.legal}, {BRAND.hq}.
        </Footnote>
      </div>
    </SectionAnchor>

    <Closer
      tone="ink"
      note={BRAND.legal}
      actions={[
        <Action key="t" href="/terms">Terms &amp; conditions</Action>,
        <Ghost key="h" to="/">Home</Ghost>,
      ]}
    >
      We would rather be checkable than impressive.
    </Closer>

    <Footer />
  </div>
);

export default Legal;
