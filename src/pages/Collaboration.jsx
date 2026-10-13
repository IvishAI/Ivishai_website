import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Masthead, SectionAnchor, Closer, CapsuleRow, SplitField, Steps,
  NoteField, Action, Ghost, TextLink, Contacts, PartnerRow,
} from "../components/iv";
import { PRODUCTS, EMAILS, CALENDLY, TECH_PARTNERS } from "../data/site";

/* Collaboration.
 *
 * Fourteen partnership tracks, which were fourteen icon tiles - a plane for
 * travel, a bank for banking, a stethoscope for healthcare. The icons carried
 * no information the word next to them did not, and fourteen of them in a grid
 * read as a sector list from a template.
 *
 * They are what they are: two lists of named tracks. Capsules, in the tint
 * family, so the two products are told apart by where the list sits rather
 * than by a different glyph on each row.
 */

const { verbx, sera } = PRODUCTS;

const VERBX_TRACKS = [
  "Travel", "Banking", "Healthcare", "BPO", "Aviation",
  "Government", "SaaS / API", "OEM", "Institutional",
];

const SERA_TRACKS = [
  "Colleges", "Distributors", "Retail associations", "State partners",
  "Channel partners",
];

const HOW = [
  {
    title: "Tell us the track",
    note: "Which product, which sector, and what you already have in place.",
  },
  {
    title: "We scope it against what exists",
    note: "Two products are live. We will say plainly which parts are built and which are not.",
  },
  {
    title: "We build the missing layer",
    note: "And it becomes part of the platform, not a one-off that only you can use.",
  },
];

const Collaboration = () => (
  <div className="iv min-h-screen text-ink">
    <Header />

    <Masthead
      tag="Partnerships"
      tone="rose"
      title="Build on the layer underneath."
      lede="Fourteen tracks across VerbX and Sera - enterprise, government, OEM and institutional on one side; distributors, associations and state partners on the other."
      actions={[
        <Action key="t" href={`mailto:${EMAILS.collaboration}`}>Start a conversation</Action>,
        <Ghost key="b" href={CALENDLY}>Book 30 minutes</Ghost>,
      ]}
    />

    <SectionAnchor
      id="verbx"
      tag="VerbX partnerships"
      title="Communication tracks."
      lede="Where a multilingual communication layer is the thing that is missing."
    >
      <div className="iv-wide">
        <SplitField
          tone="aqua"
          tag={verbx.tag}
          title={verbx.name}
          action={<TextLink href={verbx.href}>{verbx.cta}</TextLink>}
        >
          {verbx.overview}
        </SplitField>
      </div>
      <div className="mt-10 flex justify-center">
        <CapsuleRow items={VERBX_TRACKS} />
      </div>
    </SectionAnchor>

    <SectionAnchor
      id="sera"
      tag="Sera partnerships"
      title="Commerce tracks."
      lede="Where the reach into shops matters more than the software does."
    >
      <div className="iv-wide">
        <SplitField
          tone="ember"
          tag={sera.tag}
          title={sera.name}
          action={<TextLink to={sera.href}>{sera.cta}</TextLink>}
        >
          {sera.overview}
        </SplitField>
      </div>
      <div className="mt-10 flex justify-center">
        <CapsuleRow items={SERA_TRACKS} />
      </div>
    </SectionAnchor>

    <SectionAnchor
      id="how"
      tag="How it works"
      title="Three steps, and no exclusivity."
    >
      <Steps items={HOW} />

      <div className="mt-12">
        <NoteField tone="stone" tag="What we build stays shared">
          We would rather build a missing capability once, into the platform,
          than build it privately for one partner. If it is worth having, every
          partner should get it.
        </NoteField>
      </div>
    </SectionAnchor>

    <SectionAnchor
      id="existing"
      tag="Who we already work with"
      title="Current partners."
      lede="The technology partners our infrastructure actually runs on."
    >
      <div>
        {TECH_PARTNERS.map((p) => (
          <PartnerRow key={p.name} logo={p.logo} name={p.name} note={p.note} href={p.href} />
        ))}
      </div>

      <div className="mt-12">
        <Contacts
          items={[
            ["Collaboration and partnerships", EMAILS.collaboration],
            ["General enquiries", EMAILS.general],
          ]}
        />
      </div>
    </SectionAnchor>

    <Closer
      tone="clay"
      glyph="&#3205;"
      lang="te"
      note="Ivish AI Quantum Pvt Ltd"
      actions={[
        <Action key="t" href={`mailto:${EMAILS.collaboration}`}>Start a conversation</Action>,
        <Ghost key="p" to="/products">See what we build</Ghost>,
      ]}
    >
      Tell us which layer is missing.
    </Closer>

    <Footer />
  </div>
);

export default Collaboration;
