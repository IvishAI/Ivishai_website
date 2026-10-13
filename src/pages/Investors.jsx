import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Masthead, SectionAnchor, Closer, SplitField, Checklist, NoteField,
  Action, Ghost, TextLink, StatPanel, Steps, Contacts,
} from "../components/iv";
import { PRODUCTS, NUMBERS, EMAILS, CALENDLY } from "../data/site";

/* Investor relations.
 *
 * ⚠️ THE FORM THAT USED TO BE HERE DID NOT SEND ANYTHING.
 *
 * It validated the fields, then set `submitted = true` and showed "Request
 * received - we'll be in touch." The comment in the old code said it outright:
 * "Front-end only - no network request is made." The page also claimed "our
 * team reviews every request manually", which it could not, because nothing
 * ever arrived. Every investor who filled it in was told they had been heard.
 *
 * Replacing it with a form that posts somewhere needs a backend endpoint and
 * the owner's decision about where those requests land. Until that exists, the
 * honest thing is a real mailto and a real booking link: both of them actually
 * do something, and neither of them lies about it.
 */

const { verbx, sera } = PRODUCTS;

const SUBJECT = encodeURIComponent("Investor access request - IvishAI");
const BODY = encodeURIComponent(
  [
    "Fund or firm:",
    "Name:",
    "Role:",
    "A line or two on your thesis and what you would like to explore:",
    "",
  ].join("\n"),
);
const MAILTO = `mailto:${EMAILS.investors}?subject=${SUBJECT}&body=${BODY}`;

const DATA_ROOM = [
  [false, "VC decks"],
  [false, "Financials"],
  [false, "Cap table"],
  [false, "Funding history"],
  [false, "Product videos"],
  [false, "Patent details"],
  [false, "Revenue plans"],
  [false, "GTM plans"],
  [false, "Technical reports"],
];

const HOW = [
  {
    title: "Write to us",
    note: "Your fund, your thesis, and what you would like to explore. The link below opens a mail with those fields in it.",
  },
  {
    title: "The founding team reads it",
    note: "Every request, by a person. We will tell you either way.",
  },
  {
    title: "Access is granted case by case",
    note: "Approved investors get the data room. Sensitive material is never on the public site.",
  },
];

const Investors = () => (
  <div className="iv min-h-screen text-ink">
    <Header />

    <Masthead
      tag="Investor relations"
      tone="lilac"
      title="Infrastructure, deployed today."
      lede="Two operating systems in the field - the first layers of a long-term Industry 6.0 vision. The public site stays high-level by design; the full picture lives in the data room."
      actions={[
        <Action key="r" href={MAILTO}>Request access</Action>,
        <Ghost key="b" href={CALENDLY}>Book 30 minutes</Ghost>,
      ]}
    />

    <SectionAnchor
      id="products"
      tag="What is live"
      title="Two products, in the field."
      lede="Not a roadmap. Both are running in production today."
    >
      <div className="space-y-5 iv-wide">
        <SplitField
          tone="aqua"
          tag={verbx.tag}
          title={verbx.name}
          action={<TextLink href={verbx.href}>{verbx.cta}</TextLink>}
        >
          Communication infrastructure for a multilingual world.
        </SplitField>
        <SplitField
          tone="ember"
          tag={sera.tag}
          title={sera.name}
          action={<TextLink to={sera.href}>{sera.cta}</TextLink>}
        >
          Retail infrastructure for India&rsquo;s 60 million shops.
        </SplitField>
      </div>

      <div className="mt-12 iv-wide">
        <StatPanel
          tone="plum"
          title="The public figures."
          note="These are the numbers we publish. Anything financial is in the data room, not on this page."
          stats={[
            [`${NUMBERS.languages}`, "Languages live"],
            ["2", "Products in production"],
            [`${NUMBERS.patentsTotal}`, "Patents filed"],
            [`${NUMBERS.patentsGranted}`, "Granted"],
          ]}
        />
      </div>
    </SectionAnchor>

    <SectionAnchor
      id="data-room"
      tag="Private data room"
      title="What is behind the door."
      lede="None of this is published. It unlocks on approval, and only then."
    >
      <div className="max-w-xl mx-auto text-left">
        <Checklist items={DATA_ROOM} />
      </div>

      <div className="mt-12">
        <NoteField tone="sand" tag="Why it is not on this page">
          A public page cannot hold financials, a cap table or a patent file
          without them ceasing to be private. So they are not here, and we do
          not pretend otherwise.
        </NoteField>
      </div>
    </SectionAnchor>

    <SectionAnchor
      id="request"
      tag="How to get access"
      title="Three steps, and a real address."
      lede="There is no form on this page. The link below opens a mail that reaches the founding team."
    >
      <Steps items={HOW} />

      <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
        <Action href={MAILTO}>Request investor access</Action>
        <Ghost href={CALENDLY}>Book 30 minutes</Ghost>
      </div>

      <div className="mt-14">
        <Contacts items={[["Investor relations", EMAILS.investors]]} />
      </div>
    </SectionAnchor>

    <Closer
      tone="plum"
      glyph="&#2694;"
      lang="bn"
      note="Reviewed by the founding team"
      actions={[
        <Action key="r" href={MAILTO}>Request access</Action>,
        <Ghost key="a" to="/about">About the company</Ghost>,
      ]}
    >
      The first two layers are running. The rest is the plan.
    </Closer>

    <Footer />
  </div>
);

export default Investors;
