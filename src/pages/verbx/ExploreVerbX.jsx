import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, SkipForward } from "lucide-react";
import { CountUp } from "../../components/site";
import useSEO from "../../lib/useSEO";
import EarthGlobe from "./EarthGlobe";
import { VERBX_COUNTRY_GROUPS, VERBX_COUNTRY_COUNT } from "../../data/verbx-countries";

// The VerbX product site lives on its own domain - this intro hands off to it.
const VERBX_SITE = "https://verbxeco.com";

const ExploreVerbX = () => {
  const goToVerbX = () => {
    window.location.href = VERBX_SITE;
  };
  useSEO("Explore VerbX - One World. One Voice.", "VerbX works across 130+ countries. One communication layer for the world.");

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-cloud">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(80% 60% at 50% 42%, rgba(226,100,38,0.10), transparent 70%)" }} />

      <button onClick={goToVerbX} className="absolute right-5 top-5 z-20 inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1.5 text-xs text-cloud-muted transition-colors hover:text-white">
        Skip <SkipForward className="h-3.5 w-3.5" />
      </button>

      <div className="container-site relative z-10 flex min-h-screen flex-col items-center justify-center py-20 text-center">
        {/* Rotating earth */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(226,100,38,0.22), rgba(19,216,246,0.08) 55%, transparent 72%)" }} />
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            <EarthGlobe />
          </motion.div>
        </div>

        {/* Count */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="mt-8">
          <div className="font-sora text-6xl md:text-7xl text-gradient-ember">
            <CountUp end={VERBX_COUNTRY_COUNT} />+
          </div>
          <div className="mt-1 text-sm uppercase tracking-[0.2em] text-cloud-muted">Countries. One Voice.</div>
        </motion.div>

        {/* Slogan */}
        <motion.div
          className="mt-9 font-sora text-3xl md:text-5xl lg:text-6xl leading-tight"
          initial="h" animate="s"
          variants={{ h: {}, s: { transition: { staggerChildren: 0.18, delayChildren: 0.9 } } }}
        >
          {["One World.", "One Voice.", "One VerbX."].map((line, i) => (
            <motion.span key={line} variants={{ h: { opacity: 0, y: 18 }, s: { opacity: 1, y: 0 } }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className={`block ${i === 2 ? "text-gradient-aqua" : "text-cloud"}`}>
              {line}
            </motion.span>
          ))}
        </motion.div>

        {/* Language-group tags (no individual country names) */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.7 }} className="mt-9 flex flex-wrap justify-center gap-2">
          {VERBX_COUNTRY_GROUPS.map((g) => (
            <span key={g.label} className="rounded-full border border-ember/30 bg-ember/10 px-3 py-1.5 text-xs font-medium text-ember-soft" title={g.note}>
              {g.label} <span className="text-cloud-faint">· {g.note}</span>
            </span>
          ))}
        </motion.div>

        {/* Hand-off */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3, duration: 0.7 }} className="mt-11">
          <p className="mb-5 text-lg text-cloud-muted">Get ready to dive into VerbX.</p>
          <button onClick={goToVerbX} className="group inline-flex items-center gap-2 rounded-md bg-ember px-8 py-4 font-medium text-white transition-all hover:bg-ember-soft">
            Explore VerbX <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ExploreVerbX;
