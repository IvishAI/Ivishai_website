import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const credentials = [
  { label: "DPIIT Startup India",        detail: "Recognised — AI / Machine Learning sector",              year: "Feb 2025" },
  { label: "MSME Certificate",           detail: "Registered under MSME",                                  year: "Feb 2025" },
  { label: "YC VibeCon India",           detail: "Round 2 — selected from 6,000+ applications",            year: "2026" },
  { label: "NSUTIIF / SISFS",            detail: "Runner-up — national-level startup competition",          year: "2026" },
  { label: "IIC Startup Semester",       detail: "PDPM IIITDM Jabalpur",                                   year: "Aug 2025 – Jun 2026" },
];

const interactions = [
  {
    title: "AI Impact Summit 2026",
    detail: "Met Google DeepMind CEO Ashwini Vaishnaw, Infosys Co-founder, Father of AI Prof. Raj Reddy, and NVIDIA leadership.",
    year: "April 2026",
  },
  {
    title: "Startup Mahakumbh",
    detail: "1-on-1 pitch session with Mahavir Praap Sharma.",
    year: "April 2025",
  },
  {
    title: "1st Deep Tech Conclave",
    detail: "Attended near CM Chandrababu Naidu.",
    year: "Dec 2024",
  },
  {
    title: "WADLA Hackathon",
    detail: "Collaborated with IIITDM Jabalpur, Swiggy, and WADLA. IvishAI contributed 3 problem statements, mentored 5 teams.",
    year: "Dec 2025",
  },
  {
    title: "VVDN Factory Visit",
    detail: "Met Director of VVDN, Gurgaon.",
    year: "April 2026",
  },
];

const milestones = [
  { stat: "52",    label: "AI models trained",          sub: "₹5 lakh invested — powering VerbX" },
  { stat: "200+",  label: "Languages live",             sub: "VerbX — scaling to 2,000+" },
  { stat: "28",    label: "Industries in Sera",         sub: "6 zones, production-ready" },
  { stat: "15",    label: "Stores in pilot",            sub: "Sera v2.0 — 2 months live" },
];

const press = [
  {
    outlet: "Startup Times",
    title: "Breaking Barriers with Empathy — The Journey of Sahith Vutukuri and IvishAI Quantum",
    type: "Magazine Feature",
    link: "https://startuptimes.net/breaking-barriers-with-empathy-the-journey-of-sahith-vutukuri-and-ivishai-quantum",
  },
  {
    outlet: "Video Podcast",
    title: "Founder interview — full episode",
    type: "Podcast",
    link: "https://youtu.be/c87sUt706eY",
  },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };

const RecognitionMedia = () => (
  <>
    <Header />
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 pt-32 md:pt-40 pb-12">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-xs font-mono tracking-[0.25em] uppercase mb-4" style={{ color: "rgba(19,216,246,0.7)" }}>
            IvishAI Quantum — Credibility
          </p>
          <h1 className="font-sora font-normal leading-[0.95] mb-5"
            style={{
              fontSize: "clamp(40px,7vw,88px)", letterSpacing: "-3px",
              background: "linear-gradient(110deg, #ffffff 0%, #a0a0a0 100%)",
              backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
            Recognition<br />
            <span style={{
              background: "linear-gradient(90deg, #13D8F6, #E26426)",
              backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              & Media
            </span>
          </h1>
          <p className="text-gray-400 text-base max-w-xl leading-relaxed">
            Every milestone is documented. Every recognition is earned. This is the record.
          </p>
        </motion.div>
      </section>

      {/* ── RECOGNITION ── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-14 border-t border-white/5">
        <motion.div {...fadeUp} className="mb-8">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-600 mb-2">Recognition</p>
          <h2 className="font-sora text-2xl md:text-3xl font-normal text-white">Startup & Government</h2>
        </motion.div>
        <div className="max-w-2xl space-y-0">
          {credentials.map((c, i) => (
            <motion.div key={c.label}
              className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 py-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <span className="text-white text-sm font-medium sm:w-52 flex-shrink-0">{c.label}</span>
              <span className="text-gray-400 text-sm flex-1 leading-relaxed">{c.detail}</span>
              <span className="text-gray-600 text-xs font-mono flex-shrink-0 sm:text-right">{c.year}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── INTERACTIONS ── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-14 border-t border-white/5">
        <motion.div {...fadeUp} className="mb-8">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-600 mb-2">Engagements</p>
          <h2 className="font-sora text-2xl md:text-3xl font-normal text-white">Industry & Government Interactions</h2>
        </motion.div>
        <div className="max-w-2xl space-y-0">
          {interactions.map((item, i) => (
            <motion.div key={item.title}
              className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 py-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="sm:w-52 flex-shrink-0">
                <p className="text-white text-sm font-medium">{item.title}</p>
                <p className="text-gray-600 text-xs font-mono mt-0.5">{item.year}</p>
              </div>
              <span className="text-gray-400 text-sm flex-1 leading-relaxed">{item.detail}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-14 border-t border-white/5">
        <motion.div {...fadeUp} className="mb-8">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-600 mb-2">Progress</p>
          <h2 className="font-sora text-2xl md:text-3xl font-normal text-white">Innovation Milestones</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
          {milestones.map((m, i) => (
            <motion.div key={m.label}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <p className="font-sora font-bold text-3xl md:text-4xl mb-1" style={{ color: "#E26426" }}>{m.stat}</p>
              <p className="text-white text-sm font-medium leading-snug">{m.label}</p>
              <p className="text-gray-600 text-xs mt-1">{m.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PRESS ── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-14 border-t border-white/5">
        <motion.div {...fadeUp} className="mb-8">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-600 mb-2">Press</p>
          <h2 className="font-sora text-2xl md:text-3xl font-normal text-white">Media Coverage</h2>
        </motion.div>
        <div className="max-w-2xl space-y-0">
          {press.map((p, i) => (
            <motion.div key={p.outlet}
              className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-5"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="sm:w-52 flex-shrink-0">
                <p className="text-white text-sm font-medium">{p.outlet}</p>
                <p className="text-gray-600 text-xs font-mono mt-0.5">{p.type}</p>
              </div>
              <div className="flex-1">
                <p className="text-gray-300 text-sm leading-relaxed mb-2">"{p.title}"</p>
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  className="text-xs font-medium hover:underline transition-colors"
                  style={{ color: "#E26426" }}>
                  View →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
    <Footer />
  </>
);

export default RecognitionMedia;
