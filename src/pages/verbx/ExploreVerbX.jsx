import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useSEO from "../../lib/useSEO";
import EarthGlobe from "./EarthGlobe";
import {
  Masthead, SectionAnchor, Closer, Plate, Tag, OrbRow, StatPanel,
  CapsuleRow, NoteField, Action, Ghost, Footnote,
} from "../../components/iv";
import { VERBX_COUNTRY_GROUPS, VERBX_COUNTRY_COUNT } from "../../data/verbx-countries";
import { PRODUCTS, NUMBERS } from "../../data/site";

/* Explore VerbX.
 *
 * This was an interstitial: a globe, a counter, and a Skip button in the top
 * right, standing between the company site and the product. A page whose best
 * outcome is the visitor pressing Skip should not exist, and the globe was the
 * good part of it trapped behind a gate.
 *
 * It is a page now. The globe is a section, the gate is gone, and the link to
 * the product site is an ordinary link.
 *
 * ON THE NUMBER. It used to say "VerbX works across 130+ countries". The data
 * file says in its own comment that the grouped tails "cover the rest to ~130",
 * and the groups overlap the named list - so 130 is an estimate of where the
 * languages are spoken, not a count of countries we operate in. What is
 * precise is the language count, so that leads, and the reach is described as
 * what it is.
 */

const { verbx } = PRODUCTS;

const ExploreVerbX = () => {
  useSEO(
    "Explore VerbX - the language communication operating system",
    `VerbX ships ${NUMBERS.languages} languages, built offline-first, for multilingual institutions.`,
  );

  return (
    <div className="iv min-h-screen text-ink">
      <Header />

      <Masthead
        tag="VerbX"
        tone="aqua"
        title="One world. One voice."
        lede={verbx.overview}
        actions={[
          <Action key="v" href={verbx.href}>Open VerbX</Action>,
          <Ghost key="p" to="/products">See both products</Ghost>,
        ]}
      />

      {/* The globe is drawn for a dark ground, so it gets the one inverted band
          this site allows rather than being forced onto paper. */}
      <Plate>
        <div className="flex flex-col items-center text-center">
          <Tag>Where the languages are spoken</Tag>
          <div className="my-10">
            <EarthGlobe />
          </div>
          <p className="h2 text-cloud max-w-[18ch]">
            {NUMBERS.languages} languages, carried anywhere.
          </p>
          <p className="text-cloud-muted mt-5 max-w-[56ch]">
            {NUMBERS.indianLanguages} Indian and {NUMBERS.globalLanguages}{" "}
            foreign. Between them they are spoken across roughly{" "}
            {VERBX_COUNTRY_COUNT} countries.
          </p>
        </div>
      </Plate>

      <SectionAnchor
        id="scripts"
        tag="In their own scripts"
        title="Not an approximation."
        lede="A reader sees their own writing system, not a transliteration of it."
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

        <div className="mt-12 iv-wide">
          <StatPanel
            tone="aqua"
            title="What ships today."
            note="These are the figures we publish, and they come from one place in the code."
            stats={[
              [`${NUMBERS.languages}`, "Languages live"],
              [`${NUMBERS.indianLanguages}`, "Indian languages"],
              [`${NUMBERS.globalLanguages}`, "Foreign languages"],
              [`${NUMBERS.engines}`, "Engines"],
            ]}
          />
        </div>
      </SectionAnchor>

      <SectionAnchor
        id="reach"
        tag="Reach"
        title="Where those languages are spoken."
        lede="Named regions, and the groups that make up the rest."
      >
        <div className="flex justify-center">
          <CapsuleRow
            items={VERBX_COUNTRY_GROUPS.map((g) => `${g.label} · ${g.note}`)}
          />
        </div>

        <div className="mt-12">
          <NoteField tone="stone" tag="What this number is">
            Roughly {VERBX_COUNTRY_COUNT} is where the languages we ship are
            spoken - not a list of countries we have deployed in. The precise
            figure is the language count, and that is the one we lead with.
          </NoteField>
        </div>

        <div className="mt-10 max-w-[62ch] mx-auto">
          <Footnote updated="13 October 2026">
            Language counts come from the product; the regional groupings are
            indicative.
          </Footnote>
        </div>
      </SectionAnchor>

      <Closer
        tone="aqua"
        glyph="&#3077;"
        lang="ta"
        note="VerbX lives on its own domain"
        actions={[
          <Action key="v" href={verbx.href}>Open VerbX</Action>,
          <Ghost key="c" to="/contact">Talk to us</Ghost>,
        ]}
      >
        One communication layer, in every language it has to carry.
      </Closer>

      <Footer />
    </div>
  );
};

export default ExploreVerbX;
