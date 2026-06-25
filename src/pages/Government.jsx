import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const useCases = [
  {
    title: "Multilingual Public Service Delivery",
    product: "VerbX",
    color: "#13D8F6",
    rgb: "19,216,246",
    desc: "Government counters, helplines, and online portals serving citizens in their native language — across all 22 scheduled Indian languages and 200+ dialects.",
  },
  {
    title: "Police & Emergency Communication",
    product: "VerbX",
    color: "#13D8F6",
    rgb: "19,216,246",
    desc: "Real-time translation for police stations, emergency response teams, and border forces operating in linguistically diverse areas.",
  },
  {
    title: "Retail Sector Formalisation",
    product: "Sera",
    color: "#E26426",
    rgb: "226,100,38",
    desc: "Digitising India's 63 million unorganised retail stores. Sera enables GST compliance, inventory management, and digital payments — offline-first.",
  },
  {
    title: "Government Procurement & Canteens",
    product: "Sera",
    color: "#E26426",
    rgb: "226,100,38",
    desc: "Deploying Sera in government-operated canteens, cooperative stores, and public distribution outlets for full auditability.",
  },
  {
    title: "Smart City Retail Zones",
    product: "Sera",
    color: "#E26426",
    rgb: "226,100,38",
    desc: "Powering the retail and commerce layer of Smart City initiatives — from market digitisation to real-time inventory reporting.",
  },
];

const pilots = [
  {
    title: "VerbX Language Pilot",
    scope: "100-seat multilingual helpdesk or public service counter",
    duration: "3 months",
    deliverable: "Full deployment + usage report + accuracy benchmarks",
  },
  {
    title: "Sera Retail Formalisation Pilot",
    scope: "50–200 stores in a single district or municipal ward",
    duration: "2 months",
    deliverable: "Onboarding, training, live deployment, outcome report",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const Government = () => (
  <>
    <Header />
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 pt-32 md:pt-40 pb-12">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-xs font-mono tracking-[0.25em] uppercase mb-4" style={{ color: "rgba(19,216,246,0.7)" }}>
            IvishAI Quantum — Government
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
            Why Should Government<br />
            <span style={{
              background: "linear-gradient(90deg, #13D8F6, #E26426)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Work With IvishAI?
            </span>
          </h1>
          <p className="text-gray-400 text-base max-w-xl leading-relaxed">
            IvishAI Quantum builds infrastructure that the Government of India needs right now — language access for every citizen, and retail formalisation for every shop.
          </p>
        </motion.div>
      </section>

      {/* ── USE CASES ── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-12 border-t border-white/5">
        <motion.div {...fadeUp} className="mb-8">
          <h2 className="font-sora text-2xl md:text-3xl font-normal text-white">Government Use Cases</h2>
        </motion.div>
        <div className="space-y-4">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              className="p-6 rounded-xl border hover:border-white/10 transition-all duration-300"
              style={{ borderColor: `rgba(${uc.rgb},0.15)`, background: `rgba(${uc.rgb},0.02)` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-white font-medium">{uc.title}</h3>
                <span
                  className="text-[10px] font-mono tracking-wider px-2 py-0.5"
                  style={{ color: uc.color, border: `1px solid rgba(${uc.rgb},0.3)`, background: `rgba(${uc.rgb},0.06)` }}
                >
                  {uc.product}
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{uc.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PILOT OPPORTUNITIES ── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-12 border-t border-white/5">
        <motion.div {...fadeUp} className="mb-8">
          <h2 className="font-sora text-2xl md:text-3xl font-normal text-white mb-2">Pilot Opportunities</h2>
          <p className="text-gray-500 text-sm">We offer structured, time-bound pilots with clear deliverables.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pilots.map((p, i) => (
            <motion.div
              key={p.title}
              className="p-6 rounded-xl border border-white/8 hover:border-white/15 transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.02)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-white font-medium mb-3">{p.title}</h3>
              <div className="space-y-2">
                <p className="text-gray-500 text-xs"><span className="text-gray-400">Scope:</span> {p.scope}</p>
                <p className="text-gray-500 text-xs"><span className="text-gray-400">Duration:</span> {p.duration}</p>
                <p className="text-gray-500 text-xs"><span className="text-gray-400">Deliverable:</span> {p.deliverable}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-16 border-t border-white/5">
        <motion.div {...fadeUp} className="text-center">
          <h2 className="font-sora text-2xl font-normal mb-3 text-white">Government Enquiries</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            Contact us for procurement discussions, pilot proposals, or MoU conversations.
          </p>
          <a
            href="mailto:ivishai.sahith@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold transition-all duration-200 hover:opacity-85"
            style={{ background: "linear-gradient(90deg, #13D8F6, #0F616D)", color: "#000" }}
          >
            ivishai.sahith@gmail.com
          </a>
        </motion.div>
      </section>

    </div>
    <Footer />
  </>
);

export default Government;
