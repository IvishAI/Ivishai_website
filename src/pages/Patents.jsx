import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Masthead, SectionAnchor, Closer, Lattice, Table, PartnerRow, NoteField,
  Action, Ghost, Highlights,
} from "../components/iv";
import { PATENTS, NUMBERS, EMAILS } from "../data/site";

/* Patents.
 *
 * "8 patents" on its own is the kind of number that invites a reader to assume
 * eight granted patents. One is granted. The page leads with the breakdown
 * rather than the headline, and the Lattice draws one-in-eight so the shape of
 * it is visible before anyone reads a word.
 *
 * LexOrbis appears here under a consent letter that requires pre-publication
 * review - see `approvalRequired` in the data. Do not change how that partner
 * is described without the owner clearing it.
 */

const BREAKDOWN = [
  ["Design patent", "Granted", "1"],
  ["Design patents", "Pending", "2"],
  ["Utility patents", "Complete specification filed", "5"],
];

const Patents = () => (
  <div className="iv min-h-screen text-ink">
    <Header />

    <Masthead
      tag="Intellectual property"
      tone="ember"
      title="Eight filings. One granted."
      lede="The breakdown first, because the headline number on its own would let you assume eight granted patents. It is one."
      actions={[
        <Action key="r" href="/recognition">The full record</Action>,
        <Ghost key="c" to="/contact">Talk to us</Ghost>,
      ]}
    />

    <SectionAnchor
      id="shape"
      tag="Where they stand"
      title="One in eight, drawn."
      lede="A filing is not a grant. Seven of these are still with the patent office."
    >
      <div className="flex flex-col items-center gap-10">
        <Lattice of={NUMBERS.patentsTotal} lit={NUMBERS.patentsGranted} label="Granted, of filings made" />
      </div>

      <div className="mt-14">
        <Highlights
          items={[
            [`${NUMBERS.patentsTotal}`, "Filings made"],
            [`${NUMBERS.patentsGranted}`, "Granted"],
            ["2", "Design, pending"],
            ["5", "Utility, filed"],
          ]}
        />
      </div>
    </SectionAnchor>

    <SectionAnchor id="breakdown" tag="The breakdown" title="Each one, by status.">
      <Table head={["Type", "Status", "Count"]} rows={BREAKDOWN} caption={PATENTS.summary} />

      <div className="mt-10">
        <NoteField tone="stone" tag="What a filing means">
          A complete specification filed is an application with the patent
          office. It confers no rights until it is examined and granted, and we
          do not describe a filing as a patent anywhere on this site.
        </NoteField>
      </div>
    </SectionAnchor>

    <SectionAnchor
      id="partner"
      tag="Legal and IP partner"
      title="Who files them."
    >
      <PartnerRow
        logo={PATENTS.legalPartner.logo}
        name={PATENTS.legalPartner.name}
        note={PATENTS.legalPartner.note}
      />
    </SectionAnchor>

    <Closer
      tone="plum"
      glyph="&#3205;"
      lang="te"
      note={`Enquiries · ${EMAILS.general}`}
      actions={[
        <Action key="r" href="/recognition">The full record</Action>,
        <Ghost key="a" to="/about">About the company</Ghost>,
      ]}
    >
      We say filed when it is filed, and granted when it is granted.
    </Closer>

    <Footer />
  </div>
);

export default Patents;
