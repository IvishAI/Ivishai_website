import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Masthead, SectionAnchor, Closer, Bento, Tile, Steps, NoteField,
  Action, Ghost, Contacts,
} from "../components/iv";
import { EMAILS } from "../data/site";

/* Government.
 *
 * Four use cases that were icon cards from a stock icon set, and a three-step
 * pilot that was three numbered boxes. Neither needed an icon: the claims are
 * specific enough to carry themselves, and a public body reading this wants to
 * know what we will actually do, not look at a shield glyph.
 *
 * Nothing here claims a deployment we have not made. The engagements we have
 * had are on the Recognition page, where they can be checked.
 */

const USE_CASES = [
  [
    "lilac",
    "Citizen services in every language",
    "Reach citizens in the languages they actually speak. VerbX carries public information, notices, and support across languages so essential communication lands clearly - never lost in translation.",
  ],
  [
    "mint",
    "Compliance-first by design",
    "Sera digitises regulated and small retail with compliance built in from the first transaction. Record-keeping and reporting are part of the system, not bolted on afterward.",
  ],
  [
    "sky",
    "Data sovereignty you control",
    "Infrastructure that keeps sensitive citizen and commercial data where it belongs. Built so public bodies retain ownership of, and control over, the data they are accountable for.",
  ],
  [
    "ember",
    "Reach that works offline-first",
    "Designed for real conditions on the ground - the last mile, patchy connectivity, remote districts. An offline-first architecture keeps services running where the network doesn't.",
  ],
];

const PILOT = [
  {
    title: "Tell us the problem",
    note: "The department, the citizens it serves, and what is not reaching them today.",
  },
  {
    title: "We scope a pilot",
    note: "Against what already exists. We will say plainly which parts are built and which are not.",
  },
  {
    title: "We run it, focused",
    note: "One district, one service, one language set - small enough to measure.",
  },
];

const Government = () => (
  <div className="iv min-h-screen text-ink">
    <Header />

    <Masthead
      tag="Public sector"
      tone="sky"
      title="Infrastructure for public service."
      lede="Communication and commerce systems built for Indian conditions - every language, offline-first, and compliant from the first transaction."
      actions={[
        <Action key="t" href={`mailto:${EMAILS.government}`}>Start a conversation</Action>,
        <Ghost key="p" to="/products">See what we build</Ghost>,
      ]}
    />

    <SectionAnchor
      id="use-cases"
      tag="Where it applies"
      title="Four problems we can carry."
      lede="Each of these is something our products already do, not a capability we would be building for the first time."
    >
      <div className="iv-wide">
        <Bento>
          <Tile tone={USE_CASES[0][0]} span={2} title={USE_CASES[0][1]}>{USE_CASES[0][2]}</Tile>
          <Tile tone={USE_CASES[1][0]} title={USE_CASES[1][1]}>{USE_CASES[1][2]}</Tile>
          <Tile tone={USE_CASES[2][0]} title={USE_CASES[2][1]}>{USE_CASES[2][2]}</Tile>
          <Tile tone={USE_CASES[3][0]} span={2} title={USE_CASES[3][1]}>{USE_CASES[3][2]}</Tile>
        </Bento>
      </div>
    </SectionAnchor>

    <SectionAnchor
      id="pilot"
      tag="Pilot opportunities"
      title="How a pilot actually starts."
      lede="Three steps. We would rather run one small thing properly than promise a programme."
    >
      <Steps items={PILOT} />

      <div className="mt-12">
        <NoteField tone="stone" tag="What we will not do">
          We will not claim a deployment we have not made. Where a capability is
          not built yet, we say so before the pilot is scoped, not after.
        </NoteField>
      </div>
    </SectionAnchor>

    <SectionAnchor id="contact" tag="Talk to us" title="Where to write.">
      <Contacts
        items={[
          ["Government and public sector", EMAILS.government],
          ["General enquiries", EMAILS.general],
        ]}
      />
    </SectionAnchor>

    <Closer
      tone="aqua"
      glyph="&#2309;"
      lang="hi"
      note="Ivish AI Quantum Pvt Ltd"
      actions={[
        <Action key="t" href={`mailto:${EMAILS.government}`}>Start a conversation</Action>,
        <Ghost key="r" to="/recognition">See where we have been</Ghost>,
      ]}
    >
      Services that reach the last district, in the language spoken there.
    </Closer>

    <Footer />
  </div>
);

export default Government;
