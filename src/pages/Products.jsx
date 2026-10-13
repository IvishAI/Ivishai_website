import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Masthead, SectionAnchor, Closer, SplitField, Bento, Tile, Ledger,
  StatPanel, OrbRow, Action, Ghost, TextLink, NoteField, Matrix,
} from "../components/iv";
import { PRODUCTS, NUMBERS } from "../data/site";

/* What IvishAI builds.
 *
 * Two products, and the honest shape of what is live against what is planned.
 * The page used to be a grid of icon cards from an icon library, which told a
 * visitor nothing a sentence would not have, and buried the one fact that
 * matters: there are exactly two of these and both are running.
 *
 * NUMBERS is the single source for every figure here. Nothing on this page is
 * typed twice, so nothing can drift between pages.
 */

const { verbx, sera } = PRODUCTS;

const LAYERS = [
  {
    name: "IvishAI - Intelligent Infrastructure",
    status: "Foundation",
    state: "foundation",
    note: "The layer the others are built on.",
  },
  {
    name: `${verbx.name} - Communication`,
    status: "Live",
    state: "live",
    note: verbx.overview,
  },
  {
    name: `${sera.name} - Commerce`,
    status: "Live",
    state: "live",
    note: sera.overview,
  },
  {
    name: "More pillars to follow",
    status: "Planned",
    state: "planned",
    note: "Named as planned, because that is what they are.",
  },
];

const Products = () => (
  <div className="iv min-h-screen text-ink">
    <Header />

    <Masthead
      tag="What we build"
      tone="aqua"
      title="Two operating systems, live."
      lede="Not a roadmap. VerbX carries communication and Sera carries commerce, and both are running in production today."
      actions={[
        <Action key="v" href={verbx.href}>{verbx.cta}</Action>,
        <Ghost key="s" to={sera.href}>{sera.cta}</Ghost>,
      ]}
    />

    <SectionAnchor id="live" tag="Live today" title="The two products.">
      <div className="space-y-5">
        <SplitField
          tone="aqua"
          tag={verbx.tag}
          title={verbx.name}
          action={<TextLink href={verbx.href}>{verbx.cta}</TextLink>}
        >
          {verbx.overview}
        </SplitField>
        <SplitField
          tone="ember"
          tag={sera.tag}
          title={sera.name}
          action={<TextLink to={sera.href}>{sera.cta}</TextLink>}
        >
          {sera.overview}
        </SplitField>
      </div>
    </SectionAnchor>

    <SectionAnchor
      id="languages"
      tag="The languages"
      title="Bharat, in its own scripts."
      lede={`${NUMBERS.languages} languages live in VerbX - ${NUMBERS.indianLanguages} Indian and ${NUMBERS.globalLanguages} foreign. A shopkeeper sees their own script, not an approximation of it.`}
    >
      <OrbRow
        size={72}
        items={[
          { glyph: "अ", lang: "hi", tone: "ember" },
          { glyph: "அ", lang: "ta", tone: "aqua" },
          { glyph: "అ", lang: "te", tone: "plum" },
          { glyph: "আ", lang: "bn", tone: "moss" },
          { glyph: "અ", lang: "gu", tone: "clay" },
          { glyph: "ಅ", lang: "kn", tone: "ink" },
          { glyph: "അ", lang: "ml", tone: "ember" },
          { glyph: "ਅ", lang: "pa", tone: "aqua" },
          { glyph: "ଅ", lang: "or", tone: "plum" },
          { glyph: "ا", lang: "ur", tone: "moss" },
        ]}
      />

      <div className="mt-12">
        <StatPanel
          tone="aqua"
          title="What is actually running."
          note="Every figure here comes from one place in the code, so no two pages can disagree about it."
          stats={[
            [`${NUMBERS.languages}`, "Languages live"],
            [`${NUMBERS.indianLanguages}`, "Indian languages"],
            [`${NUMBERS.engines}`, "Engines"],
            [`${NUMBERS.patentsTotal}`, "Patents filed"],
          ]}
        />
      </div>
    </SectionAnchor>

    <SectionAnchor
      id="layers"
      tag="The layers"
      title="Where each one sits."
      lede="Two are live. One is the ground they stand on. The rest are named as planned, not pretended to be finished."
    >
      <Ledger items={LAYERS} />
    </SectionAnchor>

    <SectionAnchor
      id="difference"
      tag="How they differ"
      title="One company, two problems."
      lede="They share an engine and an account. What they do with it is not the same."
    >
      <Matrix
        cols={[verbx.name, sera.name]}
        rows={[
          ["Offline-first", true, true],
          ["Multilingual interface", true, true],
          ["Speech and voice", true, false],
          ["Document translation", true, false],
          ["Billing and khata", false, true],
          ["Inventory", false, true],
        ]}
      />

      <div className="mt-10">
        <NoteField tone="sand" tag="One account">
          The same credentials, the same balance and the same language list across
          both. A term fixed once is fixed everywhere.
        </NoteField>
      </div>
    </SectionAnchor>

    <SectionAnchor
      id="principles"
      tag="How they are built"
      title="The same four decisions, in both."
    >
      <Bento>
        <Tile tone="lilac" span={2} title="Infrastructure, not apps">
          Operating systems beneath communication and commerce - built to sit
          underneath industries, not on top of them.
        </Tile>
        <Tile tone="mint" title="Offline-first">
          Designed for Indian conditions where connectivity is not a given.
        </Tile>
        <Tile tone="ember" title="One account">
          One set of credentials and one balance, across every product.
        </Tile>
        <Tile tone="sky" span={2} title="India to global">
          Born in India, engineered to run anywhere - infrastructure without
          borders.
        </Tile>
      </Bento>
    </SectionAnchor>

    <Closer
      tone="aqua"
      glyph="அ"
      lang="ta"
      note="Two products, live today"
      actions={[
        <Action key="v" href={verbx.href}>{verbx.cta}</Action>,
        <Ghost key="c" to="/contact">Talk to us</Ghost>,
      ]}
    >
      The layer your industry runs on.
    </Closer>

    <Footer />
  </div>
);

export default Products;
