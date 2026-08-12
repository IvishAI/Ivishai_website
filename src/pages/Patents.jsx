import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Clock,
  FileText,
  Cpu,
  PenTool,
  Scale,
  Sparkles,
  Route,
} from "lucide-react";
import {
  PageShell,
  Section,
  Eyebrow,
  CTAButton,
  Card,
  Reveal,
  Stat,
  CountUp,
  AmbientBackground,
} from "../components/site";
import useSEO from "../lib/useSEO";
import { PATENTS, PRODUCTS } from "../data/site";

/* ------------------------------- Hero --------------------------------- */
const Hero = () => (
  <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
    <AmbientBackground variant="dual" />
    <div className="container-site">
      <Reveal as="span" y={0}>
        <Eyebrow>Patents &amp; IP</Eyebrow>
      </Reveal>

      <motion.h1
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        className="mt-6 font-sora font-normal tracking-tightest"
      >
        <motion.span
          variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="block text-5xl md:text-7xl lg:text-[76px] leading-[1.02] text-gradient-ember"
        >
          Innovation proof.
        </motion.span>
      </motion.h1>

      <Reveal delay={0.45} className="mt-7 max-w-2xl text-lg text-cloud-muted">
        Our IP protects the offline-first AI architecture and the systems behind VerbX and Sera.
        1 design patent is granted; the remaining 7 are pending or filed.
      </Reveal>
    </div>
  </section>
);

/* --------------------------- Patent Counts ---------------------------- */
// Portfolio split - exact lines sourced from PATENTS data (never paraphrased).
const SPLIT = [
  { icon: Cpu, end: 5, tone: "text-gradient-aqua", accent: "text-aqua", line: PATENTS.utility },
  { icon: PenTool, end: 3, tone: "text-gradient-ember", accent: "text-ember-soft", line: PATENTS.design },
];

// Status chips - accurate breakdown (1 + 2 + 5 = 8). Never "all filed" / "all granted".
const STATUS = [
  { icon: BadgeCheck, count: 1, label: "Granted", note: "Design", accent: "text-aqua" },
  { icon: Clock, count: 2, label: "Pending", note: "Design", accent: "text-ember-soft" },
  { icon: FileText, count: 5, label: "Filed", note: "Complete Specification · Utility", accent: "text-aqua" },
];

const PatentCounts = () => (
  <Section id="counts" className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>The portfolio</Eyebrow>
      <Reveal as="h2" delay={0.05} className="mt-5 font-sora text-4xl md:text-5xl text-gradient-aqua">
        By the numbers.
      </Reveal>
    </div>

    {/* Featured stat + utility / design split */}
    <div className="mt-12 grid gap-5 lg:grid-cols-3">
      <Reveal>
        <Card className="flex h-full flex-col items-center justify-center text-center" hover={false}>
          <div className="mb-5 inline-flex rounded-xl bg-white/5 p-3 text-aqua">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <Stat end={8} label="Patents" />
          <p className="mt-4 text-xs uppercase tracking-wider text-cloud-faint">Total portfolio</p>
        </Card>
      </Reveal>

      {SPLIT.map((s, i) => (
        <Reveal key={s.line} delay={(i + 1) * 0.1}>
          <Card className="flex h-full flex-col items-center justify-center text-center">
            <div className={`mb-5 inline-flex rounded-xl bg-white/5 p-3 ${s.accent}`}>
              <s.icon className="h-6 w-6" />
            </div>
            <div className={`font-sora text-4xl md:text-5xl lg:text-6xl ${s.tone}`}>
              <CountUp end={s.end} />
            </div>
            <p className="mt-3 text-cloud">{s.line}</p>
          </Card>
        </Reveal>
      ))}
    </div>

    {/* Status breakdown strip */}
    <Reveal delay={0.1} className="mt-5">
      <div className="glass rounded-2xl p-6 md:p-8">
        <p className="text-xs uppercase tracking-wider text-cloud-faint">Status breakdown</p>
        <p className="mt-2 font-sora text-lg md:text-xl text-cloud">{PATENTS.summary}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {STATUS.map((c) => (
            <span
              key={c.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-cloud-muted"
            >
              <c.icon className={`h-4 w-4 ${c.accent}`} />
              <span className="font-sora text-cloud">{c.count}</span>
              {c.label}
              <span className="text-cloud-faint">· {c.note}</span>
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  </Section>
);

/* ----------------- [TO CONFIRM] placeholder block --------------------- */
const ComingSoon = ({ id, eyebrow, heading, gradient, icon: Icon }) => (
  <Section id={id} className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Reveal as="h2" delay={0.05} className={`mt-5 font-sora text-4xl md:text-5xl ${gradient}`}>
        {heading}
      </Reveal>
    </div>
    <Reveal delay={0.12} className="mt-10">
      <Card hover={false} className="flex flex-col items-center justify-center py-14 text-center">
        <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3 text-cloud-faint">
          <Icon className="h-6 w-6" />
        </div>
        <p className="text-cloud-faint">Details coming soon.</p>
      </Card>
    </Reveal>
  </Section>
);

/* --------------------------- Legal & IP Partner ----------------------- */
const LegalPartner = () => (
  <Section id="partner" className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>Legal &amp; IP Partner</Eyebrow>
      <Reveal as="h2" delay={0.05} className="mt-5 font-sora text-4xl md:text-5xl text-gradient-ember">
        Filed with LexOrbis.
      </Reveal>
    </div>

    <Reveal delay={0.12} className="mt-10">
      <Card hover={false} className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
        {/* Logo rendered plainly - no recolour, no hover filter/animation. */}
        <div className="flex items-center justify-center rounded-xl bg-white p-6">
          <img
            src="/logos/lexorbis.jpg"
            alt="LexOrbis"
            className="h-16 w-auto md:h-20"
          />
        </div>
        <div>
          <div className="inline-flex items-center gap-2 text-aqua">
            <Scale className="h-5 w-5" />
            <span className="text-sm uppercase tracking-wider">Legal &amp; IP Partner</span>
          </div>
          <p className="mt-4 font-sora text-xl md:text-2xl leading-snug text-cloud">
            {PATENTS.legalPartner.note}
          </p>
        </div>
      </Card>
    </Reveal>
  </Section>
);

/* ----------------------------- Closing CTA ---------------------------- */
const ClosingCTA = () => (
  <Section id="explore" className="border-t border-white/10">
    <Card className="text-center" hover={false}>
      <Reveal as="h2" className="font-sora text-3xl md:text-5xl text-gradient-aqua">
        See what the IP protects.
      </Reveal>
      <Reveal delay={0.1} className="mx-auto mt-4 max-w-xl text-cloud-muted">
        The patents sit underneath VerbX and Sera - explore the products they protect.
      </Reveal>
      <Reveal delay={0.18} className="mt-8 flex flex-wrap justify-center gap-3">
        <CTAButton variant="primary" href={PRODUCTS.verbx.href}>
          {PRODUCTS.verbx.cta}
        </CTAButton>
        <CTAButton variant="secondary" to={PRODUCTS.sera.href}>
          {PRODUCTS.sera.cta}
        </CTAButton>
      </Reveal>
    </Card>
  </Section>
);

/* ------------------------------- Page --------------------------------- */
const Patents = () => {
  useSEO(
    "Patents & IP - IvishAI Innovation",
    "8 patents - 1 design patent granted, 7 pending/filed (5 utility, 3 design) - protecting IvishAI's offline-first AI and operating-system architecture."
  );

  return (
    <PageShell>
      <Hero />
      <PatentCounts />
      <ComingSoon
        id="innovation-areas"
        eyebrow="Innovation Areas"
        heading="Innovation areas."
        gradient="text-gradient-ember"
        icon={Sparkles}
      />
      <ComingSoon
        id="roadmap"
        eyebrow="IP Roadmap"
        heading="The IP roadmap."
        gradient="text-gradient-aqua"
        icon={Route}
      />
      <LegalPartner />
      <ClosingCTA />
    </PageShell>
  );
};

export default Patents;
