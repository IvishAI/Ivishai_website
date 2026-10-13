import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Band, Head, Display, Lede, Actions, Action, Ghost, TextLink,
  Columns, Ledger, Questions, Marker, Tag,
  Tile, Bento, ColourField, StatPanel, Wash, OrbRow, SplitField, Ribbon,
} from "../components/iv";

/* The company home page.
 *
 * What it was: a centred heading, a small grey line under it and a grid of
 * boxes - nine times down the page, with a full-bleed orange video in the
 * middle. Every section the same shape, so nothing ranked and the eye had to
 * re-find the start of the line at each one.
 *
 * What it is: one left axis, one measure, hairlines between bands, and each
 * piece of content in the form that fits it. The four layers are a numbered
 * ledger because they are ordered. The two products are two statements because
 * there are only two and they are the whole company today. The questions are
 * questions.
 */

const LAYERS = [
  {
    name: "IvishAI - Intelligent Infrastructure",
    status: "Foundation",
    state: "foundation",
    note: "The layer the others are built on.",
  },
  {
    name: "VerbX - Communication",
    status: "Live",
    state: "live",
    note: "A language communication operating system, built offline-first.",
  },
  {
    name: "Sera - Commerce",
    status: "Live",
    state: "live",
    note: "A retail operating system for Bharat: billing, khata and compliance, across 27 industries.",
  },
  { name: "More pillars to follow", status: "Planned", state: "planned" },
];

const WHY = [
  [
    "Infrastructure, not apps",
    "Operating systems beneath communication and commerce - built to sit underneath industries, not on top of them.",
  ],
  [
    "Two products live today",
    "VerbX for multilingual communication and Sera for retail. Real deployments, not roadmaps.",
  ],
  [
    "Offline-first architecture",
    "Designed for Indian conditions where connectivity is not a given, and built to scale globally.",
  ],
  [
    "India to global",
    "Born in India, engineered to run anywhere - infrastructure without borders.",
  ],
];

const QUESTIONS = [
  {
    q: "What is IvishAI?",
    a: "An infrastructure company. We build the operating systems that sit underneath real-world industries, starting with communication and commerce.",
  },
  {
    q: "What is VerbX?",
    a: "A language communication operating system - speech, translation, voice and documents, for institutions, developers and travellers.",
  },
  {
    q: "What is Sera?",
    a: "A retail operating system built for Bharat: billing, khata, compliance and offline-first operation, across 27 industries.",
  },
  {
    q: "Why is it credible?",
    a: "DPIIT-recognised and MSME-registered, incubated at PDPM IIITDM Jabalpur, with two products live and eight patents filed, one granted.",
  },
  {
    q: "How do I engage?",
    a: "Use the products, build on the APIs, or talk to us about a government or enterprise deployment.",
  },
];

const Home = () => (
  <div className="iv bg-paper text-ink min-h-screen">
    <Header />

    {/* One statement, one lede, two actions - not five buttons of equal weight,
        which is the same as having none. */}
    <section className="band bg-grid pt-28 md:pt-36 relative overflow-hidden">
      <Wash tone="ember" />
      <div className="wrap relative text-center">
        <span className="inline-flex items-center gap-2 mb-7 justify-center">
          <Marker tone="aqua" />
          <Tag>Infrastructure for Industry 6.0</Tag>
        </span>

        <Display className="max-w-[18ch] mx-auto">
          Where intelligence becomes infrastructure.
        </Display>

        <Lede className="mt-7 mx-auto">
          IvishAI builds the operating systems that sit underneath communication
          and commerce - starting with VerbX and Sera, and extending toward the
          broader vision of Industry 6.0.
        </Lede>

        <Actions className="mt-10 justify-center">
          <Action href="/products">See what we build</Action>
          <Ghost to="/about">About the company</Ghost>
        </Actions>
      </div>
    </section>

    <Band>
      <Head tag="The vision" title="Building the infrastructure of Industry 6.0." />
      <div className="border-t border-rule">
        <div className="border-b border-rule">
          <Columns label="What that means">
            Industry 6.0 is our long-term vision: intelligent operating systems
            that sit underneath real-world industries. VerbX and Sera are the
            first two layers; more pillars will follow.
          </Columns>
        </div>
        <Columns label="What we build">
          Operating systems beneath communication and commerce - built to sit
          underneath industries, not on top of them. Two products live today,
          engineered offline-first for Indian conditions and built to scale
          globally.
        </Columns>
      </div>
    </Band>

    <Band>
      <Head
        tag="The layers"
        title="Four layers, in order."
        lede="Two are live. One is the ground they stand on. The rest are named as planned, not pretended to be finished."
      />
      <Ledger items={LAYERS} />

      <div className="mt-14">
        <StatPanel
          tone="plum"
          title="Two products, live."
          note="Figures from the company record, not projections. Each one is checkable on the page it belongs to."
          stats={[
            ["600K+", "Products pre-loaded"],
            ["27", "Industry types"],
            ["8", "Patents filed"],
            ["2025", "Incorporated"],
          ]}
        />
      </div>
    </Band>

    <Band>
      <Head
        tag="The languages"
        title="Bharat, in its own scripts."
        lede="Sera ships in thirteen Indian languages and VerbX in seventy-six. A shopkeeper sees their own, not an approximation of it."
      />
      <OrbRow
        size={72}
        items={[
          { glyph: "\u0905", lang: "hi", tone: "ember" },
          { glyph: "\u0B85", lang: "ta", tone: "aqua" },
          { glyph: "\u0C05", lang: "te", tone: "plum" },
          { glyph: "\u0986", lang: "bn", tone: "moss" },
          { glyph: "\u0A85", lang: "gu", tone: "clay" },
          { glyph: "\u0C85", lang: "kn", tone: "ink" },
          { glyph: "\u0D05", lang: "ml", tone: "ember" },
          { glyph: "\u0A05", lang: "pa", tone: "aqua" },
          { glyph: "\u0B05", lang: "or", tone: "plum" },
          { glyph: "\u0627", lang: "ur", tone: "moss" },
        ]}
      />
    </Band>

    <Band>
      <Head tag="Live today" title="Two operating systems." />
      <div className="space-y-5">
        <SplitField
          tone="aqua"
          tag="Communication infrastructure"
          title="VerbX"
          action={<TextLink href="/products">Explore VerbX</TextLink>}
        >
          A language communication operating system for multilingual
          institutions, built offline-first - for individuals, institutions,
          developers and travellers.
        </SplitField>
        <SplitField
          tone="ember"
          tag="Retail infrastructure"
          title="Sera"
          action={<TextLink to="/sera">Explore Sera</TextLink>}
        >
          A retail operating system built for Bharat&rsquo;s shops - billing,
          khata, compliance and offline-first operation, across 27 industries.
        </SplitField>
      </div>
    </Band>

    <Band>
      <Head tag="Why IvishAI" title="Built to run underneath." />
      <Bento>
        <Tile tone="lilac" span={2} title={WHY[0][0]} delay={0}>{WHY[0][1]}</Tile>
        <Tile tone="mint" title={WHY[1][0]} delay={0.06}>{WHY[1][1]}</Tile>
        <Tile tone="ember" title={WHY[2][0]} delay={0.12}>{WHY[2][1]}</Tile>
        <Tile tone="sky" span={2} title={WHY[3][0]} delay={0.18}>{WHY[3][1]}</Tile>
      </Bento>
    </Band>

    <Band>
      <Head tag="In 30 seconds" title="The quick answers." />
      <Questions items={QUESTIONS} />
      <p className="mt-8">
        <TextLink href="/morefaq">More questions</TextLink>
      </p>
    </Band>

    <Band>
      <ColourField tone="ink" note="Ivish AI Quantum Pvt Ltd" glyph="&#2309;" lang="hi">
        Operating systems for the industries that run underneath everything else.
      </ColourField>
      <div className="mt-5">
        <Ribbon
          tone="ember"
          action={<Ghost to="/contact" className="!border-paper !text-paper hover:!bg-white/10">Talk to us</Ghost>}
        >
          DPIIT-recognised and MSME-registered, with two live products and eight
          patents filed.
        </Ribbon>
      </div>
      <Actions className="mt-10 justify-center">
        <Action href="/products">See what we build</Action>
        <Ghost to="/about">About the company</Ghost>
      </Actions>
    </Band>

    <Footer />
  </div>
);

export default Home;
