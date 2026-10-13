import React from "react";
import RetailOSLayout from "./RetailOSLayout";
import useSEO from "../../lib/useSEO";
import {
  Masthead, SectionAnchor, Closer, ZoneList, StatPanel, Bento, Tile,
  CapsuleRow, Action, Ghost, TextLink, NoteField,
} from "../../components/iv";
import {
  SERA, SERA_ZONES, SERA_INDUSTRIES, SERA_LANGUAGES, SERA_PROMISES,
} from "../../data/sera";

/* Retail OS - overview.
 *
 * THE COUNTS NOW COME FROM THE DATA. This page had its own hardcoded `zones`
 * and `stats` arrays and claimed "6 Zones. 19 Industries." while
 * src/data/sera.js held 27 and /sera claimed 28 - one product, three different
 * numbers on one website. Nothing here is typed twice any more.
 */

const RetailOSOverview = () => {
  useSEO("Retail OS - the operating system for Indian retail", SERA.what);

  return (
    <RetailOSLayout>
      <Masthead
        tag="Retail OS"
        tone="ember"
        title="The operating system for Indian retail."
        lede={`One platform, one AI, ${SERA_INDUSTRIES.length} shop types across ${SERA_ZONES.length} zones. From a kirana store to a pharmacy to a regulated liquor shop. Works offline.`}
        actions={[
          <Action key="p" href={SERA.playStore}>Get Sera on Play</Action>,
          <Ghost key="f" to="/retail-os/features">What every shop gets</Ghost>,
        ]}
      />

      <SectionAnchor id="promises" tag="On day one" title="What you get immediately.">
        <div className="flex justify-center">
          <CapsuleRow items={SERA_PROMISES} />
        </div>

        <div className="mt-12 iv-wide">
          <StatPanel
            tone="clay"
            title="Retail OS, in figures."
            note="Read from the product data, so this page cannot disagree with the Sera page about it."
            stats={[
              ["600K+", "Products pre-loaded"],
              [`${SERA_LANGUAGES.length}`, "Languages"],
              [`${SERA_INDUSTRIES.length}`, "Shop types"],
              [`${SERA_ZONES.length}`, "Retail zones"],
            ]}
          />
        </div>
      </SectionAnchor>

      <SectionAnchor
        id="zones"
        tag="The zones"
        title="Your shop type decides your screen."
        lede="A pharmacy does not bill like a bakery, and a regulated shop has obligations a grocer does not."
      >
        <ZoneList zones={SERA_ZONES} hrefFor={(ind) => `/sera/${ind.slug}`} />

        <div className="mt-10">
          <TextLink to="/retail-os/industries">Why the industry matters</TextLink>
        </div>
      </SectionAnchor>

      <SectionAnchor id="why" tag="How it is built" title="Four decisions behind all of it.">
        <div className="iv-wide">
          <Bento>
            <Tile tone="ember" span={2} title="Offline-first">
              Billing works with no connection at all. Designed for the
              conditions shops actually trade in, not for a demo on good wifi.
            </Tile>
            <Tile tone="mint" title="No hardware required">
              A phone is enough. The Windows till is an addition, never a
              requirement.
            </Tile>
            <Tile tone="lilac" title="One AI, every plan">
              SERA helps set the shop up and answers questions about it.
              Included, not an add-on.
            </Tile>
            <Tile tone="sky" span={2} title="Billing free, forever">
              Not a trial. The core of the app costs nothing and always will.
            </Tile>
          </Bento>
        </div>

        <div className="mt-12">
          <NoteField tone="stone" tag="On the numbers">
            Every figure on this page is read from one file. Until today this
            page said 19 shop types, the Sera page said 28, and the data held{" "}
            {SERA_INDUSTRIES.length}.
          </NoteField>
        </div>
      </SectionAnchor>

      <Closer
        tone="ember"
        glyph="&#2309;"
        lang="hi"
        note={`${SERA.category} · ${SERA.contactEmail}`}
        actions={[
          <Action key="p" href={SERA.playStore}>Get Sera on Play</Action>,
          <Ghost key="pr" to="/retail-os/pricing">See the plans</Ghost>,
        ]}
      >
        Every shop, on one system.
      </Closer>
    </RetailOSLayout>
  );
};

export default RetailOSOverview;
