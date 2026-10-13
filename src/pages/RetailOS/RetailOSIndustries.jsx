import React from "react";
import RetailOSLayout from "./RetailOSLayout";
import useSEO from "../../lib/useSEO";
import {
  Masthead, SectionAnchor, Closer, ZoneList, Steps, NoteField, Table,
  Action, Ghost, TextLink,
} from "../../components/iv";
import { SERA, SERA_ZONES, SERA_INDUSTRIES } from "../../data/sera";

/* Retail OS - industries.
 *
 * Reads SERA_ZONES rather than keeping its own copy. The copy it used to keep
 * is why this page said 19 while the data held 27.
 *
 * Each zone gets its own coloured heading and its shop types as links, rather
 * than the whole thing collapsing into one run-on line.
 */

const WHY = [
  {
    title: "The billing screen changes",
    note: "A pharmacy needs batch and expiry. A bakery needs weight. A salon needs a service and a slot. The same screen for all three is the same screen for none of them.",
  },
  {
    title: "The inventory changes",
    note: "Serial numbers and warranties for electronics; shelf life for food; nothing of the sort for stationery.",
  },
  {
    title: "The obligations change",
    note: "A regulated shop has record-keeping a grocer does not, and the system should carry that rather than the shopkeeper remembering it.",
  },
];

const RetailOSIndustries = () => {
  useSEO(
    `${SERA_INDUSTRIES.length} shop types - Retail OS`,
    `Sera supports ${SERA_INDUSTRIES.length} shop types across ${SERA_ZONES.length} retail zones.`,
  );

  return (
    <RetailOSLayout>
      <Masthead
        tag="Industries"
        tone="lilac"
        title="Why the shop type matters."
        lede={`${SERA_INDUSTRIES.length} shop types across ${SERA_ZONES.length} zones, because a pharmacy does not bill like a bakery.`}
        actions={[
          <Action key="p" href={SERA.playStore}>Get Sera on Play</Action>,
          <Ghost key="f" to="/retail-os/features">What every shop gets</Ghost>,
        ]}
      />

      <SectionAnchor id="why" tag="The reason" title="Three things that actually differ.">
        <Steps items={WHY} />
      </SectionAnchor>

      <SectionAnchor
        id="zones"
        tag="The zones"
        title="Find your shop."
        lede="Pick a type to see what its screen looks like."
      >
        <ZoneList zones={SERA_ZONES} hrefFor={(ind) => `/sera/${ind.slug}`} />
      </SectionAnchor>

      <SectionAnchor id="regulated" tag="Regulated shops" title="Where the rules are stricter.">
        <Table
          head={["Zone", "Shop types", "Status"]}
          rows={SERA_ZONES.map((z) => [
            z.name,
            String(z.industries.length),
            z.restricted ? "Regulated" : "Standard",
          ])}
          caption={`${SERA_ZONES.length} zones, ${SERA_INDUSTRIES.length} shop types`}
        />

        <div className="mt-10">
          <NoteField tone="stone" tag="If your shop is not listed">
            Tell us what you sell and we will say honestly whether Sera fits it
            today. We would rather say no than sell you a screen built for
            someone else&rsquo;s counter.
          </NoteField>
        </div>

        <p className="mt-10">
          <TextLink to="/contact">Tell us about your shop</TextLink>
        </p>
      </SectionAnchor>

      <Closer
        tone="plum"
        glyph="&#3205;"
        lang="te"
        note={`${SERA.category} · ${SERA.contactEmail}`}
        actions={[
          <Action key="p" href={SERA.playStore}>Get Sera on Play</Action>,
          <Ghost key="pr" to="/retail-os/pricing">See the plans</Ghost>,
        ]}
      >
        Your counter, your screen.
      </Closer>
    </RetailOSLayout>
  );
};

export default RetailOSIndustries;
