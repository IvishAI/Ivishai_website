import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Band, Head, Display, Lede, Actions, Action, Ghost, TextLink,
  Columns, Ledger, Grid, Cell, Questions, Statement, Marker, Tag,
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
    note: "A retail operating system for Bharat: billing, khata and compliance, across 28 industries.",
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
    a: "A retail operating system built for Bharat: billing, khata, compliance and offline-first operation, across 28 industries.",
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
    <section className="band bg-grid pt-28 md:pt-36">
      <div className="wrap">
        <span className="inline-flex items-center gap-2 mb-7">
          <Marker tone="aqua" />
          <Tag>Infrastructure for Industry 6.0</Tag>
        </span>

        <Display className="max-w-[16ch]">
          Where intelligence becomes infrastructure.
        </Display>

        <Lede className="mt-7">
          IvishAI builds the operating systems that sit underneath communication
          and commerce - starting with VerbX and Sera, and extending toward the
          broader vision of Industry 6.0.
        </Lede>

        <Actions className="mt-10">
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
    </Band>

    <Band>
      <Head tag="Live today" title="Two operating systems." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <Tag>Communication infrastructure</Tag>
          <h3 className="h3 text-ink mt-3 mb-2">VerbX</h3>
          <p className="body-s max-w-[46ch] mb-5">
            A language communication operating system for multilingual
            institutions, built offline-first - for individuals, institutions,
            developers and travellers.
          </p>
          <TextLink href="/products">Explore VerbX</TextLink>
        </div>
        <div>
          <Tag>Retail infrastructure</Tag>
          <h3 className="h3 text-ink mt-3 mb-2">Sera</h3>
          <p className="body-s max-w-[46ch] mb-5">
            A retail operating system built for Bharat&rsquo;s shops - billing,
            khata, compliance and offline-first operation, across 28 industries.
          </p>
          <TextLink to="/sera">Explore Sera</TextLink>
        </div>
      </div>
    </Band>

    <Band>
      <Head tag="Why IvishAI" title="Built to run underneath." />
      <Grid cols={4}>
        {WHY.map(([title, body], i) => (
          <Cell key={title} title={title} delay={i * 0.06} mark={<Marker />}>
            {body}
          </Cell>
        ))}
      </Grid>
    </Band>

    <Band>
      <Head tag="In 30 seconds" title="The quick answers." />
      <Questions items={QUESTIONS} />
      <p className="mt-8">
        <TextLink href="/morefaq">More questions</TextLink>
      </p>
    </Band>

    <Band tight>
      <Statement cite="IvishAI Quantum Pvt Ltd">
        Operating systems for the industries that run underneath everything else.
      </Statement>
      <Actions className="mt-10">
        <Action href="/products">See what we build</Action>
        <Ghost to="/contact">Talk to us</Ghost>
      </Actions>
    </Band>

    <Footer />
  </div>
);

export default Home;
