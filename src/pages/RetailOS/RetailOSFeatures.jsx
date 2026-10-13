import React from "react";
import RetailOSLayout from "./RetailOSLayout";
import useSEO from "../../lib/useSEO";
import {
  Masthead, SectionAnchor, Closer, Bento, Tile, Table, NoteField, OrbRow,
  Action, Ghost, Callout,
} from "../../components/iv";
import { SERA, SERA_LANGUAGES, SERA_POS } from "../../data/sera";

/* Retail OS - features.
 *
 * Six capabilities that were six icon tiles with a hand-drawn SVG each. The
 * icons said nothing the word beside them did not, and every one of them was
 * inline markup the page had to carry.
 *
 * The SERA AI table is kept as a table, because which tier gets what is exactly
 * the kind of thing a shopkeeper needs to be able to check at a glance.
 */

const FEATURES = [
  [
    "ember",
    2,
    "Billing",
    "Fast, reliable billing that works offline - no internet needed. Barcode scanning, manual entry, printable invoices and PDF sharing.",
  ],
  [
    "mint",
    1,
    "Inventory",
    "Know what you have and what you are running low on. Deeper tracking for pharmacy, straightforward for everyone else.",
  ],
  [
    "lilac",
    1,
    "Khata - credit ledger",
    "The digital replacement for the paper notebook. Who owes you, how much, since when - and reminders you can send directly.",
  ],
  [
    "sky",
    2,
    "Payments",
    "Six modes in one place: cash, UPI QR, UPI dynamic, card, credit (Khata) and prepaid balance.",
  ],
  [
    "sand",
    1,
    "Reports and analytics",
    "Daily sales, earnings, expenses and profit. Clean summaries rather than an overwhelming dashboard.",
  ],
  [
    "rose",
    1,
    "SERA - the AI assistant",
    "Sets up your shop, manages products, answers questions about your business. In every plan, not an add-on.",
  ],
];

const SERA_ROWS = [
  ["Guides you through shop setup at onboarding", "All plans"],
  ["Answers questions about your own business", "All plans"],
  ["Suggests products, pricing and restocking", "BASIC and above"],
  ["Generates posters and offers", "PRO"],
];

const GLYPH_TONES = ["ember", "aqua", "plum", "moss", "clay", "ink"];

const RetailOSFeatures = () => {
  useSEO("What every shop gets - Retail OS", SERA.why);

  return (
    <RetailOSLayout>
      <Masthead
        tag="Features"
        tone="mint"
        title="What every shop gets."
        lede="Six things, in one app, on a phone. Billing is free in all of them."
        actions={[
          <Action key="p" href={SERA.playStore}>Get Sera on Play</Action>,
          <Ghost key="pr" to="/retail-os/pricing">See the plans</Ghost>,
        ]}
      />

      <SectionAnchor id="features" tag="The six" title="Everything the counter needs.">
        <div className="iv-wide">
          <Bento>
            {FEATURES.map(([tone, span, title, body], i) => (
              <Tile key={title} tone={tone} span={span === 2 ? 2 : undefined} title={title} delay={i * 0.05}>
                {body}
              </Tile>
            ))}
          </Bento>
        </div>
      </SectionAnchor>

      <SectionAnchor
        id="sera-ai"
        tag="SERA AI"
        title="Which plan gets what."
        lede="Set out plainly, because a tier list buried in prose is how people end up on the wrong plan."
      >
        <Table head={["What SERA does", "Available on"]} rows={SERA_ROWS} />

        <div className="mt-10">
          <Callout title="On your data">
            SERA answers questions about your own shop. The products are
            offline-first, so the common case is that nothing leaves the device
            to make that work.
          </Callout>
        </div>
      </SectionAnchor>

      <SectionAnchor
        id="languages"
        tag="Language"
        title={`${SERA_LANGUAGES.length} languages, each in its own script.`}
        lede="A shopkeeper reads their own writing system, not a transliteration of it."
      >
        <OrbRow
          size={68}
          items={SERA_LANGUAGES.filter((l) => l.code !== "en").map((l, i) => ({
            glyph: l.native.charAt(0),
            lang: l.code,
            tone: GLYPH_TONES[i % GLYPH_TONES.length],
          }))}
        />
      </SectionAnchor>

      <SectionAnchor id="till" tag="On a counter" title="SERA POS for Windows.">
        <div className="max-w-xl mx-auto text-left">
          <NoteField tone="stone" tag={`Version ${SERA_POS.version} · ${SERA_POS.size}`}>
            {SERA_POS.requires}. An addition to the app, never a replacement -
            every till still needs the owner&rsquo;s phone.
          </NoteField>
        </div>
        <div className="mt-9 flex justify-center">
          <Action href={SERA_POS.download}>Download for Windows</Action>
        </div>
      </SectionAnchor>

      <Closer
        tone="moss"
        glyph="&#3077;"
        lang="ta"
        note={`${SERA.category} · ${SERA.contactEmail}`}
        actions={[
          <Action key="p" href={SERA.playStore}>Get Sera on Play</Action>,
          <Ghost key="i" to="/retail-os/industries">Find your shop type</Ghost>,
        ]}
      >
        One app, and the counter runs on it.
      </Closer>
    </RetailOSLayout>
  );
};

export default RetailOSFeatures;
