import React from "react";
import {
  Globe,
  Languages,
  WifiOff,
  ReceiptText,
  BookText,
  ShieldCheck,
  Store,
  Layers,
  Sparkles,
} from "lucide-react";
import {
  PageShell,
  Section,
  Heading,
  Eyebrow,
  CTAButton,
  Reveal,
  CountUp,
  AmbientBackground,
} from "../components/site";
import useSEO from "../lib/useSEO";
import { PRODUCTS, NUMBERS } from "../data/site";

/* ------------------------------------------------------------------ */
/*  Accent config - VerbX (aqua / communication), Sera (ember / commerce)
/* ------------------------------------------------------------------ */
const ACCENT = {
  aqua: {
    text: "text-aqua",
    grad: "text-gradient-aqua",
    glow: "#13D8F6",
    dot: "bg-aqua",
    chipIcon: "text-aqua",
  },
  ember: {
    text: "text-ember-soft",
    grad: "text-gradient-ember",
    glow: "#E26426",
    dot: "bg-ember",
    chipIcon: "text-ember-soft",
  },
};

/* ------------------------------- Hero ----------------------------------- */
const Hero = () => (
  <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
    <AmbientBackground variant="dual" />
    <div className="container-site">
      <Reveal as="span" y={0}>
        <Eyebrow>Products</Eyebrow>
      </Reveal>

      <Reveal delay={0.05} className="mt-6">
        <Heading as="h1" gradient="ember" size="xl">
          Two operating systems, live today.
        </Heading>
      </Reveal>

      <Reveal delay={0.18} className="mt-7 max-w-2xl text-lg text-cloud-muted">
        Two operating systems, live today - one for communication, one for commerce.
      </Reveal>

      <Reveal delay={0.3} className="mt-9 flex flex-wrap gap-3">
        <CTAButton variant="primary" href={PRODUCTS.verbx.href}>
          Visit VerbX Website
        </CTAButton>
        <CTAButton variant="secondary" to={PRODUCTS.sera.href}>
          Explore Sera
        </CTAButton>
      </Reveal>
    </div>
  </section>
);

/* -------------------------- Feature chip -------------------------------- */
const Chip = ({ icon: Icon, label, accent }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-cloud-muted">
    <Icon className={`h-4 w-4 ${accent.chipIcon}`} />
    {label}
  </span>
);

/* -------------------- Large product feature block ----------------------- */
const ProductFeature = ({
  accent,
  tag,
  line,
  wordmark,
  overview,
  chips,
  stat,
  cta,
  icon: Icon,
  reverse = false,
}) => (
  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
    {/* ---- Content column ---- */}
    <div className={reverse ? "lg:order-2" : "lg:order-1"}>
      <div className="flex items-center gap-3">
        <span className={`text-xs uppercase tracking-wider ${accent.text}`}>{tag}</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-cloud-muted">
          <span className={`relative flex h-1.5 w-1.5`}>
            <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${accent.dot} opacity-60`} />
            <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${accent.dot}`} />
          </span>
          Live today
        </span>
      </div>

      {wordmark}

      <p className="mt-4 text-lg text-cloud-muted">{line}</p>

      <p className="mt-6 max-w-xl leading-relaxed text-cloud">{overview}</p>

      <div className="mt-7 flex flex-wrap gap-2.5">
        {chips.map((c) => (
          <Chip key={c.label} icon={c.icon} label={c.label} accent={accent} />
        ))}
      </div>

      <div className="mt-9">
        {cta.href ? (
          <CTAButton variant="primary" href={cta.href}>
            {cta.label}
          </CTAButton>
        ) : (
          <CTAButton variant="primary" to={cta.to}>
            {cta.label}
          </CTAButton>
        )}
      </div>
    </div>

    {/* ---- Visual column ---- */}
    <div className={reverse ? "lg:order-1" : "lg:order-2"}>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
        <div className="absolute inset-0 bg-grid opacity-[0.35]" />
        <div
          className="pointer-events-none absolute -inset-x-16 -top-16 h-56 opacity-30 blur-3xl"
          style={{ background: `radial-gradient(circle, ${accent.glow}, transparent 70%)` }}
        />
        <div className="relative flex flex-col items-center text-center">
          <div className={`inline-flex rounded-xl bg-white/5 p-3 ${accent.text}`}>
            <Icon className="h-7 w-7" />
          </div>
          <div className={`mt-6 font-sora text-6xl md:text-7xl ${accent.grad}`}>
            <CountUp end={stat.end} suffix={stat.suffix || ""} />
          </div>
          <div className="mt-2 text-sm text-cloud-muted">{stat.label}</div>
        </div>
      </div>
    </div>
  </div>
);

/* ------------------------------- VerbX ---------------------------------- */
const VerbXBlock = () => (
  <Section id="verbx" className="border-t border-white/10">
    <ProductFeature
      accent={ACCENT.aqua}
      tag={PRODUCTS.verbx.tag}
      line={PRODUCTS.verbx.line}
      icon={Globe}
      wordmark={
        <h2 className="mt-5">
          <img
            src="/logos/verbx.png"
            alt="VerbX"
            className="h-9 w-auto md:h-11"
            loading="lazy"
          />
        </h2>
      }
      overview={PRODUCTS.verbx.overview}
      chips={[
        { icon: Languages, label: `${NUMBERS.languages} languages live today` },
        { icon: WifiOff, label: "Offline-first" },
        { icon: Globe, label: "Multilingual institutions" },
      ]}
      stat={{ end: NUMBERS.languages, label: "languages live today" }}
      cta={{ label: "Explore VerbX", to: "/explore-verbx" }}
    />
  </Section>
);

/* -------------------------------- Sera ---------------------------------- */
const SeraBlock = () => (
  <Section id="sera" className="border-t border-white/10">
    <ProductFeature
      reverse
      accent={ACCENT.ember}
      tag={PRODUCTS.sera.tag}
      line={PRODUCTS.sera.line}
      icon={Store}
      wordmark={
        <h2 className="mt-5 font-sora text-5xl leading-none text-gradient-ember md:text-6xl">
          Sera
        </h2>
      }
      overview={PRODUCTS.sera.overview}
      chips={[
        { icon: ReceiptText, label: "Billing" },
        { icon: BookText, label: "Khata" },
        { icon: ShieldCheck, label: "Compliance" },
        { icon: WifiOff, label: "Offline-first" },
      ]}
      stat={{ end: 28, label: "industries covered" }}
      cta={{ label: "Explore Sera", to: PRODUCTS.sera.href }}
    />
  </Section>
);

/* ---------------------- Future Industry 6.0 pillars --------------------- */
const PILLARS = [
  {
    no: "01",
    label: "VerbX - Communication",
    live: true,
    accent: "aqua",
  },
  {
    no: "02",
    label: "Sera - Commerce",
    live: true,
    accent: "ember",
  },
  { no: "03", label: "To be announced", live: false },
  { no: "04", label: "To be announced", live: false },
  { no: "05", label: "To be announced", live: false },
];

const PillarRow = ({ pillar, i }) => {
  const a = pillar.accent ? ACCENT[pillar.accent] : null;
  return (
    <Reveal delay={i * 0.09} y={16}>
      <div
        className={`flex items-center gap-4 rounded-xl border px-5 py-4 backdrop-blur-sm md:px-6 md:py-5 ${
          pillar.live
            ? "border-white/10 bg-white/[0.03]"
            : "border-dashed border-white/15 bg-white/[0.015]"
        }`}
      >
        <span
          className={`font-sora text-lg tabular-nums ${
            pillar.live ? (a ? a.text : "text-cloud") : "text-cloud-faint"
          }`}
        >
          {pillar.no}
        </span>
        <span className={`flex-1 ${pillar.live ? "text-cloud" : "text-cloud-faint"}`}>
          {pillar.label}
        </span>
        {pillar.live ? (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-cloud-muted">
            <span className={`inline-flex h-1.5 w-1.5 rounded-full ${a.dot}`} />
            Live
          </span>
        ) : (
          <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-cloud-faint">
            Soon
          </span>
        )}
      </div>
    </Reveal>
  );
};

const FuturePillars = () => (
  <Section id="industry-60" className="border-t border-white/10">
    <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="lg:sticky lg:top-28">
        <Eyebrow>Industry 6.0</Eyebrow>
        <Reveal delay={0.05} className="mt-5">
          <Heading as="h2" gradient="aqua" size="lg">
            More pillars to follow.
          </Heading>
        </Reveal>
        <Reveal delay={0.12} className="mt-6 max-w-xl text-lg text-cloud-muted">
          VerbX and Sera are the first two pillars. More intelligent operating-system layers
          will follow under the Industry 6.0 vision.
        </Reveal>

        <Reveal delay={0.2} className="mt-8 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <span className="mt-0.5 inline-flex rounded-lg bg-white/5 p-2 text-cloud-muted">
            <Sparkles className="h-5 w-5" />
          </span>
          <p className="text-sm leading-relaxed text-cloud-faint">
            Pillars 03-05 are to be announced. Details coming soon.
          </p>
        </Reveal>

        <Reveal delay={0.28} className="mt-9 flex flex-wrap gap-3">
          <CTAButton variant="secondary" to="/explore-verbx">
            Explore VerbX
          </CTAButton>
          <CTAButton variant="secondary" to={PRODUCTS.sera.href}>
            Explore Sera
          </CTAButton>
        </Reveal>
      </div>

      {/* Roadmap stack */}
      <div>
        <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-cloud-faint">
          <Layers className="h-4 w-4" />
          Operating-system layers
        </div>
        <div className="space-y-3">
          {PILLARS.map((p, i) => (
            <PillarRow key={p.no} pillar={p} i={i} />
          ))}
        </div>
      </div>
    </div>
  </Section>
);

/* ------------------------------- Page ----------------------------------- */
const Products = () => {
  useSEO(
    "Products - VerbX & Sera | IvishAI",
    "VerbX, a language communication operating system, and Sera, a retail operating system for Bharat. Explore both products from IvishAI."
  );

  return (
    <PageShell>
      <Hero />
      <VerbXBlock />
      <SeraBlock />
      <FuturePillars />
    </PageShell>
  );
};

export default Products;
