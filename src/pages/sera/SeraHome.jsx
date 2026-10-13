import React from "react";
import useSEO from "../../lib/useSEO";
import SeraShell from "../../components/sera/SeraShell";
import {
  Masthead, SectionAnchor, Closer, Bento, Tile, Screens, OrbRow, StatPanel,
  CapsuleRow, Price, Ledger, SplitField, NoteField, Callout, Action, Ghost,
  TextLink, Footnote,
} from "../../components/iv";
import {
  SERA, SERA_PROMISES, SERA_STATS, SERA_FEATURES, SERA_ZONES,
  SERA_LANGUAGES, SERA_PRICING, SERA_POS, SERA_POS_FEATURES,
  SERA_INDUSTRIES,
} from "../../data/sera";

/* Sera - the retail operating system.
 *
 * This page was 1,500 lines and 13,312px tall on a desktop, 18,388px on a
 * phone: twenty-three screens of scrolling for one product. Rebuilt on the
 * element library it says the same things in a fraction of the height, and
 * every figure now reads from src/data/sera.js rather than being typed into
 * the page - which is how "28 industries" survived here while the data held 27
 * and /retail-os claimed 19.
 *
 * Sera keeps its own shell (its own nav and footer). It is a product with its
 * own identity under IvishAI, not a section of the company site.
 */

const SCREENS = [
  { src: "/sera-screens/01-home.png", caption: "Today at a glance" },
  { src: "/sera-screens/08-billing.png", caption: "Billing" },
  { src: "/sera-screens/02-inventory.png", caption: "Inventory" },
  { src: "/sera-screens/05-customers.png", caption: "Khata" },
  { src: "/sera-screens/06-dashboard.png", caption: "Dashboard" },
  { src: "/sera-screens/04-language.png", caption: "Language" },
  { src: "/sera-screens/10-sera-ai.png", caption: "SERA AI" },
];

const TONES = ["ember", "mint", "lilac", "sky", "rose", "sand", "aqua", "stone"];

const GLYPH_TONES = ["ember", "aqua", "plum", "moss", "clay", "ink"];

const SeraHome = () => {
  useSEO(
    `${SERA.name} - ${SERA.category}`,
    SERA.what,
  );

  return (
    <SeraShell>
      <div className="iv text-ink">
        <Masthead
          tag={SERA.category}
          tone="ember"
          title={SERA.hero}
          lede={SERA.what}
          actions={[
            <Action key="p" href={SERA.playStore}>Get Sera on Play</Action>,
            <Ghost key="d" href="#pos">SERA POS for Windows</Ghost>,
          ]}
        />

        <SectionAnchor
          id="promises"
          tag="What you get on day one"
          title="Built for shopkeepers, not accountants."
          lede={SERA.why}
        >
          <div className="flex justify-center">
            <CapsuleRow items={SERA_PROMISES} />
          </div>

          <div className="mt-12 iv-wide">
            <StatPanel
              tone="clay"
              title="Sera, in figures."
              note="Every one of these is read from the product data, not typed onto the page."
              stats={SERA_STATS.map((s) => [s.value, s.label])}
            />
          </div>
        </SectionAnchor>

        <SectionAnchor
          id="features"
          tag="One app"
          title="Everything your shop needs."
        >
          <div className="iv-wide">
            <Bento>
              {SERA_FEATURES.map((f, i) => (
                <Tile
                  key={f.title}
                  tone={TONES[i % TONES.length]}
                  title={f.title}
                  span={i % 3 === 0 ? 2 : undefined}
                  delay={i * 0.05}
                >
                  {f.body}
                </Tile>
              ))}
            </Bento>
          </div>
        </SectionAnchor>

        <SectionAnchor
          id="screens"
          tag="The app itself"
          title="What it looks like on the counter."
          lede="Real screens, not mock-ups."
        >
          <div className="iv-wide">
            <Screens shots={SCREENS} />
          </div>
        </SectionAnchor>

        <SectionAnchor
          id="languages"
          tag="Bharat ki bhasha mein"
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

        <SectionAnchor
          id="zones"
          tag="Find your shop"
          title={`${SERA_INDUSTRIES.length} industries, across ${SERA_ZONES.length} zones.`}
          lede="Your shop type decides your billing screen - a pharmacy does not bill like a bakery."
        >
          <Ledger
            items={SERA_ZONES.map((z) => ({
              name: `${z.name} - ${z.industries.map((i) => i.name).join(", ")}`,
              status: z.restricted ? "Regulated" : `${z.industries.length} types`,
              state: z.restricted ? "planned" : "live",
            }))}
          />

          <div className="mt-10">
            <TextLink to="/sera/grocery">See a shop type in detail</TextLink>
          </div>
        </SectionAnchor>

        <SectionAnchor
          id="pricing"
          tag="Pricing"
          title="Billing is free. Forever."
          lede="Not a trial. The core of the app costs nothing and always will."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 iv-wide">
            {SERA_PRICING.map((p) => (
              <Price
                key={p.name}
                name={p.name}
                amount={p.price}
                per={p.period}
                note={p.desc}
                includes={p.includes}
                action={
                  <Action href={SERA.playStore}>
                    {p.name === "Free" ? "Start free" : "Get Premium"}
                  </Action>
                }
              />
            ))}
          </div>

          <div className="mt-12">
            <NoteField tone="mint" tag="What free actually means">
              Unlimited billing, digital Khata, barcode scanning and offline
              mode, with no card and no time limit. Premium adds to that; it
              does not unlock it.
            </NoteField>
          </div>
        </SectionAnchor>

        <SectionAnchor
          id="pos"
          tag="SERA POS for Windows"
          title="A till for the counter."
          lede="An addition to the app, never a replacement - every till still needs the owner's phone."
        >
          <div className="iv-wide">
            <SplitField
              tone="ink"
              tag={`Version ${SERA_POS.version} · ${SERA_POS.size}`}
              title="SERA POS"
              action={<Action href={SERA_POS.download}>Download for Windows</Action>}
            >
              {SERA_POS.requires}. Direct download, no sign-in and no store.
            </SplitField>
          </div>

          <div className="mt-10 iv-wide">
            <Bento>
              {SERA_POS_FEATURES.slice(0, 4).map((f, i) => (
                <Tile
                  key={f.title}
                  tone={TONES[(i + 2) % TONES.length]}
                  title={f.title}
                  span={i === 0 ? 2 : undefined}
                  delay={i * 0.05}
                >
                  {f.body}
                </Tile>
              ))}
            </Bento>
          </div>

          <div className="mt-12">
            <Callout title="The first time you run it">
              {SERA_POS.smartScreen}
            </Callout>
          </div>
        </SectionAnchor>

        <Closer
          tone="ember"
          glyph="&#2309;"
          lang="hi"
          note={`${SERA.category} · ${SERA.contactEmail}`}
          actions={[
            <Action key="p" href={SERA.playStore}>Get Sera on Play</Action>,
            <Ghost key="c" href={`mailto:${SERA.contactEmail}`}>Talk to us</Ghost>,
          ]}
        >
          Start billing in sixty seconds.
        </Closer>

        <div className="wrap pb-16">
          <Footnote updated="13 October 2026">
            Figures on this page come from the product data. Setup time is a
            typical first run, not a guarantee.
          </Footnote>
        </div>
      </div>
    </SeraShell>
  );
};

export default SeraHome;
