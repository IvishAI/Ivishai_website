import React from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Award,
  Trophy,
  PlayCircle,
  Newspaper,
  Quote,
  Calendar,
  MapPin,
  WifiOff,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import {
  PageShell,
  Section,
  Eyebrow,
  CTAButton,
  Card,
  Reveal,
  Stat,
  AmbientBackground,
} from "../components/site";
import useSEO from "../lib/useSEO";
import { NUMBERS, ENGAGEMENTS, EVENTS, LINKS } from "../data/site";

/* --------------------------- shared motion ---------------------------- */
const LINE = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const LINE_T = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };

/* -------------------------------- Hero -------------------------------- */
const Hero = () => (
  <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
    <AmbientBackground variant="dual" />
    <div className="container-site">
      <Reveal as="span" y={0}>
        <Eyebrow>Recognition &amp; Media</Eyebrow>
      </Reveal>

      <motion.h1
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        className="mt-6 font-sora font-normal tracking-tightest"
      >
        <motion.span
          variants={LINE}
          transition={LINE_T}
          className="block text-5xl md:text-7xl lg:text-[76px] leading-[1.02] text-cloud"
        >
          Why IvishAI
        </motion.span>
        <motion.span
          variants={LINE}
          transition={LINE_T}
          className="mt-2 block text-4xl md:text-6xl leading-[1.08] text-gradient-ember"
        >
          is credible.
        </motion.span>
      </motion.h1>

      <Reveal delay={0.45} className="mt-7 max-w-2xl text-lg text-cloud-muted">
        DPIIT-recognised, MSME-registered, 1 patent granted with 7 more filed, and recognised across
        national startup platforms - backed by real government and industry engagements.
      </Reveal>
    </div>
  </section>
);

/* ------------------------ Innovation Milestones ----------------------- */
const MILESTONES = [
  { end: NUMBERS.patentsTotal, label: "Patents (1 Granted)" },
  { end: NUMBERS.engines, label: "Engines Orchestrated" },
  { end: NUMBERS.countries, prefix: "~", label: "Countries at Production Quality" },
  { end: NUMBERS.languages, label: "Languages" },
];

const Milestones = () => (
  <Section id="milestones" className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>Innovation Milestones</Eyebrow>
      <Reveal as="h2" delay={0.05} className="mt-5 font-sora text-4xl md:text-5xl text-gradient-aqua">
        Proof, in numbers.
      </Reveal>
    </div>

    <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
      {MILESTONES.map((m, i) => (
        <Reveal key={m.label} delay={i * 0.1}>
          <Stat end={m.end} prefix={m.prefix} label={m.label} />
        </Reveal>
      ))}
    </div>

    <Reveal delay={0.2} className="mt-12 flex justify-center">
      <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-cloud">
        <WifiOff className="h-4 w-4 text-aqua" />
        Offline AI Architecture
      </span>
    </Reveal>
  </Section>
);

/* -------------------- Government & Industry Engagements ---------------- */
const Engagements = () => (
  <Section id="engagements" className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>Government &amp; Industry Engagements</Eyebrow>
      <Reveal as="h2" delay={0.05} className="mt-5 font-sora text-4xl md:text-5xl text-gradient-ember">
        Met, interacted, engaged.
      </Reveal>
      <Reveal delay={0.12} className="mt-6 text-lg text-cloud-muted">
        Direct engagement with leaders across government, deep tech and industry - in the rooms where
        the future of AI is being decided.
      </Reveal>
    </div>

    <div className="mt-12 grid gap-4 sm:grid-cols-2">
      {ENGAGEMENTS.map((e, i) => (
        <Reveal key={e.who} delay={i * 0.06}>
          <div className="flex h-full items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors duration-300 hover:border-aqua/30">
            <span className="mt-0.5 inline-flex shrink-0 rounded-lg bg-white/5 p-2 text-aqua">
              <BadgeCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="font-sora text-cloud">{e.who}</p>
              <p className="mt-1 text-sm text-cloud-faint">{e.ctx}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

/* -------------------------- Startup Recognition ----------------------- */
const RECOGNITION = [
  {
    icon: Trophy,
    accent: "text-aqua",
    tag: "VibeCon India - Round 2",
    body:
      "Selected for Round 2 of VibeCon India (alongside Y Combinator's Startup School), from 6,000+ applications.",
    link: { href: LINKS.vibecon, label: "View announcement" },
  },
  {
    icon: Award,
    accent: "text-ember-soft",
    tag: "NSUT IIF - SISFS",
    body: "Runner-Up, 2026.",
  },
];

const StartupRecognition = () => (
  <Section id="startup-recognition" className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>Startup Recognition</Eyebrow>
      <Reveal as="h2" delay={0.05} className="mt-5 font-sora text-4xl md:text-5xl text-gradient-aqua">
        Chosen on the national stage.
      </Reveal>
    </div>

    <div className="mt-12 grid gap-5 md:grid-cols-2">
      {RECOGNITION.map((r, i) => (
        <Reveal key={r.tag} delay={i * 0.1}>
          <Card className="flex h-full flex-col">
            <div className={`mb-5 inline-flex w-fit rounded-xl bg-white/5 p-3 ${r.accent}`}>
              <r.icon className="h-6 w-6" />
            </div>
            <h3 className="font-sora text-2xl text-cloud">{r.tag}</h3>
            <p className="mt-3 text-cloud-muted">{r.body}</p>
            {r.link && (
              <a
                href={r.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-aqua hover:underline"
              >
                {r.link.label}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </Card>
        </Reveal>
      ))}
    </div>
  </Section>
);

/* -------------------------------- Podcast ----------------------------- */
const Podcast = () => (
  <Section id="podcast" className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>Podcast</Eyebrow>
      <Reveal as="h2" delay={0.05} className="mt-5 font-sora text-4xl md:text-5xl text-gradient-ember">
        Podcast appearance.
      </Reveal>
      <Reveal delay={0.12} className="mt-6 text-lg text-cloud-muted">
        The story behind IvishAI - the vision, the products and the road to Industry 6.0.
      </Reveal>
    </div>

    <Reveal delay={0.18} className="mt-10">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
        <iframe
          className="absolute inset-0 h-full w-full"
          src="https://www.youtube.com/embed/c87sUt706eY"
          title="IvishAI - podcast appearance"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </Reveal>

    <Reveal delay={0.24} className="mt-8">
      <CTAButton variant="secondary" href={LINKS.podcast}>
        <span className="inline-flex items-center gap-2">
          <PlayCircle className="h-4 w-4" />
          Watch on YouTube
        </span>
      </CTAButton>
    </Reveal>
  </Section>
);

/* --------------------------- Startup Times ---------------------------- */
const StartupTimes = () => (
  <Section id="startup-times" className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>Press</Eyebrow>
      <Reveal as="h2" delay={0.05} className="mt-5 font-sora text-4xl md:text-5xl text-gradient-aqua">
        Featured in Startup Times.
      </Reveal>
    </div>

    <Reveal delay={0.12} className="mt-10">
      <Card hover={false}>
        <div className="mb-6 inline-flex w-fit rounded-xl bg-white/5 p-3 text-aqua">
          <Newspaper className="h-6 w-6" />
        </div>

        <div className="flex gap-4">
          <Quote className="h-8 w-8 shrink-0 text-cloud-faint" />
          <blockquote className="font-sora text-2xl md:text-3xl leading-snug text-cloud">
            Breaking Barriers with Empathy: the journey of Sahith Vutukuri and IvishAI.
          </blockquote>
        </div>

        <p className="mt-6 text-sm uppercase tracking-wider text-cloud-faint">
          Featured in Startup Times
        </p>

        {/* [TO CONFIRM] - editorial pull-quote to be added once approved. */}
        <p className="mt-4 text-cloud-faint">Pull-quote coming soon.</p>

        <a
          href={LINKS.startupTimes}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 inline-flex items-center gap-1 text-sm font-medium text-aqua hover:underline"
        >
          Read the feature
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Card>
    </Reveal>
  </Section>
);

/* --------------------------- Events & Summits ------------------------- */
const Events = () => (
  <Section id="events" className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>Events &amp; Summits</Eyebrow>
      <Reveal as="h2" delay={0.05} className="mt-5 font-sora text-4xl md:text-5xl text-gradient-ember">
        Where we&apos;ve shown up.
      </Reveal>
    </div>

    <div className="mt-12 grid gap-5 sm:grid-cols-2">
      {EVENTS.map((ev, i) => (
        <Reveal key={ev.name} delay={i * 0.1}>
          <Card className="h-full">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex rounded-xl bg-white/5 p-3 text-aqua">
                <Calendar className="h-5 w-5" />
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-aqua-soft">
                <MapPin className="h-4 w-4" />
                {ev.when}
              </span>
            </div>
            <h3 className="mt-5 font-sora text-xl text-cloud">{ev.name}</h3>
            {ev.note && (
              <p className="mt-3 text-sm leading-relaxed text-cloud-muted">{ev.note}</p>
            )}
          </Card>
        </Reveal>
      ))}
    </div>
  </Section>
);

/* ------------------- Awards + Future Media Coverage ------------------- */
const HORIZON = [
  { icon: Award, title: "Awards" },
  { icon: Newspaper, title: "Media Coverage" },
];

const Horizon = () => (
  <Section id="horizon" className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>On the Horizon</Eyebrow>
      <Reveal as="h2" delay={0.05} className="mt-5 font-sora text-4xl md:text-5xl text-gradient-aqua">
        More to come.
      </Reveal>
    </div>

    <div className="mt-12 grid gap-5 md:grid-cols-2">
      {HORIZON.map((h, i) => (
        <Reveal key={h.title} delay={i * 0.1}>
          <div className="flex h-full flex-col rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6 md:p-8">
            <div className="mb-5 inline-flex w-fit rounded-xl bg-white/5 p-3 text-cloud-faint">
              <h.icon className="h-6 w-6" />
            </div>
            <h3 className="font-sora text-xl text-cloud">{h.title}</h3>
            {/* [TO CONFIRM] - reserved slot, populated as coverage lands. */}
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-cloud-faint">
              <Clock className="h-4 w-4" />
              Coming soon.
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

/* --------------------------------- Page ------------------------------- */
const Recognition = () => {
  useSEO(
    "Recognition & Media - IvishAI Credibility, Engagements & Press",
    "Government & industry engagements, startup recognition, innovation milestones, podcast and press features for IvishAI."
  );

  return (
    <PageShell>
      <Hero />
      <Milestones />
      <Engagements />
      <StartupRecognition />
      <Podcast />
      <StartupTimes />
      <Events />
      <Horizon />
    </PageShell>
  );
};

export default Recognition;
