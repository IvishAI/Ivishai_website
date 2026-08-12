import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Languages,
  ShieldCheck,
  Lock,
  WifiOff,
  Target,
  Mail,
  CalendarClock,
  ArrowUpRight,
} from "lucide-react";
import {
  PageShell,
  Section,
  Eyebrow,
  CTAButton,
  Card,
  Reveal,
  AmbientBackground,
} from "../components/site";
import useSEO from "../lib/useSEO";
import { EMAILS, CALENDLY } from "../data/site";

/* ------------------------------- Hero --------------------------------- */
const Hero = () => (
  <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
    <AmbientBackground variant="dual" />
    <div className="container-site">
      <Reveal as="span" y={0}>
        <Eyebrow>Government</Eyebrow>
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
          className="block text-4xl md:text-6xl lg:text-[70px] leading-[1.05] text-cloud"
        >
          Infrastructure governments
        </motion.span>
        <motion.span
          variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-2 block text-4xl md:text-6xl lg:text-[70px] leading-[1.05] text-gradient-aqua"
        >
          can deploy at scale.
        </motion.span>
      </motion.h1>

      <Reveal delay={0.45} className="mt-7 max-w-2xl text-lg text-cloud-muted">
        Multilingual citizen communication (VerbX) and compliance-first retail digitisation for
        regulated and small retail (Sera) - infrastructure governments can deploy at scale,
        offline-first.
      </Reveal>

      <Reveal delay={0.55} className="mt-10 flex flex-wrap gap-3">
        <CTAButton variant="primary" href={CALENDLY}>
          Book a 30-min call
        </CTAButton>
        <CTAButton variant="secondary" href={`mailto:${EMAILS.government}`}>
          Talk to the team
        </CTAButton>
      </Reveal>
    </div>
  </section>
);

/* -------------------------- Government use cases ----------------------- */
const USE_CASES = [
  {
    icon: Languages,
    accent: "text-aqua",
    title: "Citizen services in every language",
    body: "Reach citizens in the languages they actually speak. VerbX carries public information, notices, and support across languages so essential communication lands clearly - never lost in translation.",
  },
  {
    icon: ShieldCheck,
    accent: "text-ember-soft",
    title: "Compliance-first by design",
    body: "Sera digitises regulated and small retail with compliance built in from the first transaction. Record-keeping and reporting are part of the system, not bolted on afterward.",
  },
  {
    icon: Lock,
    accent: "text-aqua",
    title: "Data sovereignty you control",
    body: "Infrastructure that keeps sensitive citizen and commercial data where it belongs. Built so public bodies retain ownership of, and control over, the data they are accountable for.",
  },
  {
    icon: WifiOff,
    accent: "text-ember-soft",
    title: "Reach that works offline-first",
    body: "Designed for real conditions on the ground - the last mile, patchy connectivity, remote districts. An offline-first architecture keeps services running where the network doesn't.",
  },
];

const UseCases = () => (
  <Section id="use-cases" className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>Government use cases</Eyebrow>
      <Reveal as="h2" delay={0.05} className="mt-5 font-sora text-4xl md:text-5xl text-gradient-ember">
        Outcomes, not just technology.
      </Reveal>
      <Reveal delay={0.12} className="mt-6 text-lg text-cloud-muted">
        Two operating systems, mapped to the outcomes public bodies are measured on - citizen
        services, compliance, data sovereignty, and reach that holds up in the field.
      </Reveal>
    </div>

    <div className="mt-12 grid gap-5 sm:grid-cols-2">
      {USE_CASES.map((u, i) => (
        <Reveal key={u.title} delay={i * 0.1}>
          <Card className="h-full">
            <div className={`mb-5 inline-flex rounded-xl bg-white/5 p-3 ${u.accent}`}>
              <u.icon className="h-6 w-6" />
            </div>
            <h3 className="font-sora text-xl text-cloud">{u.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-cloud-muted">{u.body}</p>
          </Card>
        </Reveal>
      ))}
    </div>

    <Reveal delay={0.2} className="mt-8 text-sm text-cloud-faint">
      Specific departments and use cases will be detailed here soon.
    </Reveal>
  </Section>
);

/* -------------------------- Pilot opportunities ----------------------- */
const PILOT_STEPS = [
  { n: "01", label: "Tell us the problem" },
  { n: "02", label: "We scope a pilot" },
  { n: "03", label: "We run it - focused" },
];

const Pilots = () => (
  <Section id="pilots" className="border-t border-white/10">
    <div className="grid items-start gap-12 lg:grid-cols-2">
      <div>
        <Eyebrow>Pilot opportunities</Eyebrow>
        <Reveal as="h2" delay={0.05} className="mt-5 font-sora text-4xl md:text-5xl text-gradient-aqua">
          Start with a focused pilot.
        </Reveal>
        <Reveal delay={0.12} className="mt-6 max-w-xl text-lg text-cloud-muted">
          We run focused pilots with public bodies. Tell us the problem; we scope a pilot.
        </Reveal>

        <Reveal delay={0.2} className="mt-8">
          <CTAButton variant="primary" href={CALENDLY}>
            Scope a pilot
          </CTAButton>
        </Reveal>
      </div>

      <div className="space-y-4">
        {PILOT_STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1}>
            <div className="flex items-center gap-5 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
              <span className="font-sora text-lg text-aqua">{s.n}</span>
              <span className="text-cloud">{s.label}</span>
            </div>
          </Reveal>
        ))}

        <Reveal delay={0.35}>
          <Card hover={false} className="border-dashed">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-cloud-faint" />
              <h3 className="font-sora text-lg text-cloud">Live pilots</h3>
            </div>
            <p className="mt-3 text-sm text-cloud-faint">Details coming soon.</p>
          </Card>
        </Reveal>
      </div>
    </div>
  </Section>
);

/* --------------------------- Government contact ----------------------- */
const Contact = () => (
  <Section id="contact" className="border-t border-white/10">
    <Card className="text-center" hover={false}>
      <Reveal as="h2" className="font-sora text-3xl md:text-5xl text-gradient-ember">
        Let's scope your pilot.
      </Reveal>
      <Reveal delay={0.1} className="mx-auto mt-4 max-w-xl text-cloud-muted">
        Bring the problem you need solved. We'll work out whether a pilot fits - and how to run it.
      </Reveal>

      <Reveal delay={0.16} className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-cloud-muted">
        <Mail className="h-4 w-4 text-aqua" />
        <a href={`mailto:${EMAILS.government}`} className="text-cloud hover:text-aqua hover:underline">
          {EMAILS.government}
        </a>
      </Reveal>

      <Reveal delay={0.24} className="mt-8 flex flex-wrap justify-center gap-3">
        <CTAButton variant="primary" href={CALENDLY}>
          <CalendarClock className="h-[17px] w-[17px]" />
          Book a 30-min call
        </CTAButton>
        <CTAButton variant="secondary" href={`mailto:${EMAILS.government}`}>
          Email the government team
        </CTAButton>
      </Reveal>

      <Reveal delay={0.32} className="mt-8">
        <Link
          to="/recognition"
          className="inline-flex items-center gap-1 text-sm text-cloud-faint transition-colors hover:text-cloud"
        >
          See our recognition and credentials
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </Card>
  </Section>
);

/* ------------------------------- Page --------------------------------- */
const Government = () => {
  useSEO(
    "Government - IvishAI Infrastructure for Public Services",
    "Multilingual citizen communication and compliance-first retail digitisation. Government use cases and pilot opportunities with IvishAI."
  );

  return (
    <PageShell>
      <Hero />
      <UseCases />
      <Pilots />
      <Contact />
    </PageShell>
  );
};

export default Government;
