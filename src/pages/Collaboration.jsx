import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Plane,
  Landmark,
  HeartPulse,
  Headset,
  PlaneTakeoff,
  Building2,
  Code2,
  Cpu,
  GraduationCap,
  Truck,
  Store,
  MapPin,
  Share2,
  Mail,
  ArrowUpRight,
  Sparkles,
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
import { PRODUCTS, LINKS, EMAILS, CALENDLY } from "../data/site";

const spring = { type: "spring", stiffness: 300, damping: 24 };

/* ------------------------------ Track data ---------------------------- */
// VerbX partnership tracks - each routes to the matching VerbX industry page.
const VERBX_TRACKS = [
  { label: "Travel", icon: Plane },
  { label: "Banking", icon: Landmark },
  { label: "Healthcare", icon: HeartPulse },
  { label: "BPO", icon: Headset },
  { label: "Aviation", icon: PlaneTakeoff },
  { label: "Government", icon: Building2 },
  { label: "SaaS/API", icon: Code2 },
  { label: "OEM", icon: Cpu },
  { label: "Institutional", icon: GraduationCap },
];

// Sera partnership tracks.
const SERA_TRACKS = [
  { label: "Colleges", icon: GraduationCap },
  { label: "Distributors", icon: Truck },
  { label: "Retail Associations", icon: Store },
  { label: "State Partners", icon: MapPin },
  { label: "Channel Partners", icon: Share2 },
];

/* -------------------------------- Chip -------------------------------- */
const Chip = ({ label, icon: Icon, iconClass, borderClass, to, href }) => {
  const body = (
    <>
      <span className={`inline-flex shrink-0 rounded-xl bg-white/5 p-3 ${iconClass}`}>
        <Icon className="h-5 w-5" />
      </span>
      <span className="font-sora text-base md:text-lg text-cloud">{label}</span>
      <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-cloud-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
    </>
  );
  const cls = `group glass flex h-full items-center gap-4 rounded-2xl p-5 transition-colors duration-300 ${borderClass}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4 }}
        transition={spring}
        className={cls}
      >
        {body}
      </motion.a>
    );
  }
  return (
    <motion.div whileHover={{ y: -4 }} transition={spring} className="h-full">
      <Link to={to} className={cls}>
        {body}
      </Link>
    </motion.div>
  );
};

/* -------------------------------- Hero -------------------------------- */
const Hero = () => (
  <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
    <AmbientBackground variant="dual" />
    <div className="container-site">
      <Reveal as="span" y={0}>
        <Eyebrow>Collaboration</Eyebrow>
      </Reveal>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 max-w-4xl font-sora font-normal tracking-tight text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-gradient-ember"
      >
        How can we work together?
      </motion.h1>

      <Reveal delay={0.4} className="mt-7 max-w-2xl text-lg text-cloud-muted">
        We work with enterprises, institutions, government, distributors and channel
        partners across both VerbX and Sera. Tell us where you fit.
      </Reveal>

      <Reveal delay={0.55} className="mt-10 flex flex-wrap gap-3">
        <CTAButton variant="primary" href={CALENDLY}>
          Book a 30-min call
        </CTAButton>
        <CTAButton variant="secondary" href={`mailto:${EMAILS.collaboration}`}>
          Email the collaboration team
        </CTAButton>
      </Reveal>
    </div>
  </section>
);

/* --------------------- Strategic & Funding Partner -------------------- */
const StrategicPartner = () => (
  <Section id="strategic-partner" className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>Strategic &amp; Funding Partner</Eyebrow>
      <Reveal
        as="h2"
        delay={0.05}
        className="mt-5 font-sora text-4xl md:text-5xl text-gradient-aqua"
      >
        Backed for growth.
      </Reveal>
    </div>

    <div className="mt-12">
      <Reveal>
        <a
          href={LINKS.ventureWolf}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <Card className="relative overflow-hidden">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <div className="flex h-20 w-44 shrink-0 items-center justify-center rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <img
                    src="/logos/venturewolf-white.png"
                    alt="Venture Wolf"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-ember-soft">
                    <Sparkles className="h-4 w-4" />
                    Strategic growth &amp; funding
                  </div>
                  <h3 className="mt-2 font-sora text-2xl md:text-3xl text-cloud">
                    Venture Wolf
                  </h3>
                  <p className="mt-2 max-w-md text-cloud-muted">
                    Strategic growth &amp; funding partner.
                  </p>
                </div>
              </div>

              <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-white">
                Visit Venture Wolf
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Card>
        </a>
      </Reveal>
    </div>
  </Section>
);

/* ------------------------- VerbX Partnerships ------------------------- */
const VerbXPartnerships = () => (
  <Section id="verbx-partnerships" className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>VerbX Partnerships</Eyebrow>
      <Reveal
        as="h2"
        delay={0.05}
        className="mt-5 font-sora text-4xl md:text-5xl text-gradient-aqua"
      >
        Partner across VerbX.
      </Reveal>
      <Reveal delay={0.12} className="mt-5 text-lg text-cloud-muted">
        Enterprise, government, OEM and institutional tracks for the language
        communication operating system.
      </Reveal>
    </div>

    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {VERBX_TRACKS.map((t, i) => (
        <Reveal key={t.label} delay={i * 0.06}>
          <Chip
            label={t.label}
            icon={t.icon}
            href={PRODUCTS.verbx.href}
            iconClass="text-aqua"
            borderClass="hover:border-aqua/30"
          />
        </Reveal>
      ))}
    </div>

    <Reveal delay={0.2} className="mt-6 text-sm text-cloud-faint">
      Each track routes to the matching VerbX industry page on verbxeco.com.
    </Reveal>
  </Section>
);

/* -------------------------- Sera Partnerships ------------------------- */
const SeraPartnerships = () => (
  <Section id="sera-partnerships" className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>Sera Partnerships</Eyebrow>
      <Reveal
        as="h2"
        delay={0.05}
        className="mt-5 font-sora text-4xl md:text-5xl text-gradient-ember"
      >
        Partner across Sera.
      </Reveal>
      <Reveal delay={0.12} className="mt-5 text-lg text-cloud-muted">
        Distribution, retail and channel tracks for the retail operating system built
        for Bharat.
      </Reveal>
    </div>

    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SERA_TRACKS.map((t, i) => (
        <Reveal key={t.label} delay={i * 0.06}>
          <Chip
            label={t.label}
            icon={t.icon}
            to={PRODUCTS.sera.href}
            iconClass="text-ember-soft"
            borderClass="hover:border-ember/30"
          />
        </Reveal>
      ))}
    </div>
  </Section>
);

/* ------------------------ Collaboration Contact ----------------------- */
const CollaborationContact = () => (
  <Section id="collaboration-contact" className="border-t border-white/10">
    <Card hover={false} className="text-center">
      <Reveal as="span" y={0} className="inline-block">
        <Eyebrow>Let&apos;s Collaborate</Eyebrow>
      </Reveal>
      <Reveal
        as="h2"
        delay={0.05}
        className="mt-5 font-sora text-3xl md:text-5xl text-gradient-ember"
      >
        Tell us where you fit.
      </Reveal>
      <Reveal delay={0.12} className="mx-auto mt-4 max-w-xl text-cloud-muted">
        Enterprise, government, OEM, institutional, distribution or channel - start the
        conversation and we&apos;ll route you to the right team.
      </Reveal>

      <Reveal
        delay={0.2}
        className="mt-9 flex flex-wrap items-center justify-center gap-3"
      >
        <CTAButton variant="primary" href={CALENDLY}>
          Book a 30-min call
        </CTAButton>
        <CTAButton variant="secondary" href={`mailto:${EMAILS.collaboration}`}>
          Email the collaboration team
        </CTAButton>
      </Reveal>

      <Reveal delay={0.28} className="mt-6">
        <a
          href={`mailto:${EMAILS.collaboration}`}
          className="inline-flex items-center gap-2 text-sm text-cloud-faint transition-colors hover:text-cloud"
        >
          <Mail className="h-4 w-4 text-aqua" />
          {EMAILS.collaboration}
        </a>
      </Reveal>
    </Card>
  </Section>
);

/* -------------------------------- Page -------------------------------- */
const Collaboration = () => {
  useSEO(
    "Collaborate with IvishAI - VerbX & Sera Partnerships",
    "Partnership paths across VerbX (enterprise, government, OEM, institutional) and Sera (distributors, retail associations, state & channel partners)."
  );

  return (
    <PageShell>
      <Hero />
      <StrategicPartner />
      <VerbXPartnerships />
      <SeraPartnerships />
      <CollaborationContact />
    </PageShell>
  );
};

export default Collaboration;
