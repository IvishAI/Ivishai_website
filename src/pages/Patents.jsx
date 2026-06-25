import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const patents = [
  { type: "Utility", num: "U01", area: "Multilingual Real-Time Voice Translation", product: "VerbX", status: "Filed" },
  { type: "Utility", num: "U02", area: "Offline-First Language Model Architecture", product: "VerbX", status: "Filed" },
  { type: "Utility", num: "U03", area: "Camera-Based Text Translation Pipeline", product: "VerbX", status: "Filed" },
  { type: "Utility", num: "U04", area: "AI-Driven Retail Inventory Management", product: "Sera", status: "Filed" },
  { type: "Utility", num: "U05", area: "Multi-Industry POS with Compliance Layer", product: "Sera", status: "Filed" },
  { type: "Design", num: "D01", area: "VerbX Mobile Application Interface", product: "VerbX", status: "Filed" },
  { type: "Design", num: "D02", area: "Sera Retail Dashboard UI", product: "Sera", status: "Filed" },
  { type: "Design", num: "D03", area: "IvishAI Brand Identity System", product: "IvishAI", status: "Filed" },
];

const innovationAreas = [
  {
    area: "Language Infrastructure",
    color: "#13D8F6",
    rgb: "19,216,246",
    desc: "Novel architectures for offline multilingual NLP, real-time voice translation, and camera-based OCR translation at edge.",
  },
  {
    area: "Retail Intelligence",
    color: "#E26426",
    rgb: "226,100,38",
    desc: "AI-first retail OS for unorganised markets — inventory prediction, compliance automation, and offline-first data sync.",
  },
  {
    area: "Edge AI Deployment",
    color: "#a78bfa",
    rgb: "167,139,250",
    desc: "Techniques for deploying large AI models on low-cost Android hardware with no internet dependency.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const Patents = () => (
  <>
    <Header />
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 pt-32 md:pt-40 pb-12">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-xs font-mono tracking-[0.25em] uppercase mb-4" style={{ color: "rgba(19,216,246,0.7)" }}>
            IvishAI Quantum — IP
          </p>
          <h1
            className="font-sora font-normal leading-[0.95] mb-5"
            style={{
              fontSize: "clamp(40px,7vw,88px)",
              letterSpacing: "-3px",
              background: "linear-gradient(110deg, #ffffff 0%, #a0a0a0 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Innovation<br />
            <span style={{
              background: "linear-gradient(90deg, #13D8F6, #E26426)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Proof
            </span>
          </h1>
          <p className="text-gray-400 text-base max-w-xl leading-relaxed">
            8 patents filed across our two live products. 5 utility patents protecting core technology. 3 design patents protecting user experience.
          </p>
        </motion.div>
      </section>

      {/* ── PATENT STRATEGY ── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-12 border-t border-white/5">
        <motion.div {...fadeUp} className="max-w-2xl">
          <h2 className="font-sora text-2xl font-normal text-white mb-4">Patent Strategy</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            Our IP strategy focuses on three layers: core technology (how our AI works), deployment architecture (how we run it offline), and user experience (how people interact with it). This creates a defensive moat at every layer of the stack.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            All patents are filed under IvishAI Quantum Pvt. Ltd. with DPIIT-registered startup status — qualifying for expedited examination under India's startup IP support programme.
          </p>
        </motion.div>
      </section>

      {/* ── PATENT LIST ── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-12 border-t border-white/5">
        <motion.div {...fadeUp} className="mb-10">
          <h2 className="font-sora text-2xl font-normal text-white mb-1">Filed Patents</h2>
        </motion.div>

        {/* Utility Patents */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-5">
            <p className="text-xs font-mono uppercase tracking-[0.2em]" style={{ color: "#13D8F6" }}>Utility Patents</p>
            <div className="h-px flex-1 max-w-xs" style={{ background: "rgba(19,216,246,0.15)" }} />
            <span className="text-xs text-gray-600">5 filed</span>
          </div>
          <div className="max-w-2xl space-y-0">
            {patents.filter(p => p.type === "Utility").map((p, i) => (
              <motion.div key={p.num}
                className="flex items-start gap-4 py-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <span className="text-xs font-mono text-gray-600 flex-shrink-0 w-8 pt-0.5">{p.num}</span>
                <div className="flex-1">
                  <p className="text-white text-sm">{p.area}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{p.product}</p>
                </div>
                <span className="text-[10px] font-mono flex-shrink-0 pt-0.5" style={{ color: "#13D8F6" }}>● Filed</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Design Patents */}
        <div>
          <div className="flex items-center gap-4 mb-5">
            <p className="text-xs font-mono uppercase tracking-[0.2em]" style={{ color: "#E26426" }}>Design Patents</p>
            <div className="h-px flex-1 max-w-xs" style={{ background: "rgba(226,100,38,0.15)" }} />
            <span className="text-xs text-gray-600">3 filed</span>
          </div>
          <div className="max-w-2xl space-y-0">
            {patents.filter(p => p.type === "Design").map((p, i) => (
              <motion.div key={p.num}
                className="flex items-start gap-4 py-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <span className="text-xs font-mono text-gray-600 flex-shrink-0 w-8 pt-0.5">{p.num}</span>
                <div className="flex-1">
                  <p className="text-white text-sm">{p.area}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{p.product}</p>
                </div>
                <span className="text-[10px] font-mono flex-shrink-0 pt-0.5" style={{ color: "#E26426" }}>● Filed</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INNOVATION AREAS ── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-12 border-t border-white/5">
        <motion.div {...fadeUp} className="mb-8">
          <h2 className="font-sora text-2xl font-normal text-white">Innovation Areas</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {innovationAreas.map((a, i) => (
            <motion.div
              key={a.area}
              className="p-6 rounded-xl border transition-all duration-300"
              style={{ borderColor: `rgba(${a.rgb},0.2)`, background: `rgba(${a.rgb},0.03)` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="font-medium mb-3" style={{ color: a.color }}>{a.area}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── IP ROADMAP ── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-12 border-t border-white/5">
        <motion.div {...fadeUp} className="max-w-xl">
          <h2 className="font-sora text-2xl font-normal text-white mb-4">IP Roadmap</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            As we scale VerbX to 2,000+ languages and Sera to new industries and geographies, we will continue filing patents around new translation architectures, vertical-specific AI engines, and hardware integrations. Full IP portfolio details are available in the investor data room.
          </p>
        </motion.div>
      </section>

    </div>
    <Footer />
  </>
);

export default Patents;
