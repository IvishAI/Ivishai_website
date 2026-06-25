import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const verbxPartners = [
  {
    industry: "Travel",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 14l4-8 3 4 2-2 5 6H3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>,
    desc: "Airlines, OTAs, travel agencies needing multilingual passenger communication",
  },
  {
    industry: "Banking",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="8" width="16" height="9" rx="1" stroke="currentColor" strokeWidth="1.4"/><path d="M10 3l8 5H2l8-5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M6 11v3M10 11v3M14 11v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
    desc: "Banks, NBFCs, MFIs serving linguistically diverse customers",
  },
  {
    industry: "Healthcare",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M10 7v6M7 10h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
    desc: "Hospitals, clinics, diagnostic centres with multilingual patients",
  },
  {
    industry: "BPO",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M4 17c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M14 5a4 4 0 0 1 0 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
    desc: "Call centres and outsourcing firms needing agent-assist translation",
  },
  {
    industry: "Aviation",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 13l2-6 5 3 4-5 2 1-3 6-3-1-2 3-5-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>,
    desc: "Airports, ground handlers, in-flight service providers",
  },
  {
    industry: "Government",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 17h16M4 17V9M8 17V9M12 17V9M16 17V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M2 9l8-6 8 6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>,
    desc: "Ministries, state departments, public service delivery",
  },
  {
    industry: "SaaS / API",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 8l-4 4 4 4M14 8l4 4-4 4M11 5l-2 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    desc: "Platforms and developers embedding language AI in their products",
  },
  {
    industry: "OEM",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="6" width="14" height="9" rx="1" stroke="currentColor" strokeWidth="1.4"/><path d="M7 6V4h6v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="10" cy="10.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/></svg>,
    desc: "Device manufacturers integrating VerbX at the hardware layer",
  },
  {
    industry: "Institutional",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3l8 4-8 4-8-4 8-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M4 10v5c0 1.1 2.686 2 6 2s6-.9 6-2v-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
    desc: "Universities, schools, training institutes with diverse student bodies",
  },
];

const seraPartners = [
  { type: "Colleges & Universities", desc: "Campus pilot programmes, student-run retail, canteen management" },
  { type: "Distributors", desc: "FMCG and pharma distributors deploying Sera across retailer networks" },
  { type: "Retail Associations", desc: "Vyapar mandals, trade bodies, chamber affiliates" },
  { type: "State Partners", desc: "State government retail digitisation initiatives and e-governance pilots" },
  { type: "Channel Partners", desc: "Resellers, system integrators, and franchise networks" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const Collaboration = () => (
  <>
    <Header />
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 pt-32 md:pt-40 pb-12">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-xs font-mono tracking-[0.25em] uppercase mb-4" style={{ color: "rgba(19,216,246,0.7)" }}>
            IvishAI Quantum — Partnership
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
            How Can We<br />
            <span style={{
              background: "linear-gradient(90deg, #13D8F6, #E26426)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Work Together?
            </span>
          </h1>
          <p className="text-gray-400 text-base max-w-xl leading-relaxed">
            IvishAI Quantum builds infrastructure-level products. We partner with organisations who serve the same markets — to embed, distribute, or co-deploy our platforms.
          </p>
        </motion.div>
      </section>

      {/* ── STRATEGIC PARTNERSHIPS ── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-12 border-t border-white/5">
        <motion.div {...fadeUp}>
          <h2 className="font-sora text-2xl md:text-3xl font-normal mb-4" style={{ color: "#13D8F6" }}>
            Strategic Partnerships
          </h2>
          <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
            We are open to deep strategic alliances — distribution agreements, white-label deployments, co-branded pilots, and technology licensing. If your organisation operates at scale and serves our target markets, let's talk.
          </p>
        </motion.div>
      </section>

      {/* ── VERBX PARTNERSHIPS ── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-12 border-t border-white/5">
        <motion.div {...fadeUp} className="mb-8">
          <p className="text-xs font-mono tracking-[0.2em] uppercase mb-2" style={{ color: "#13D8F6" }}>Pillar 01</p>
          <h2 className="font-sora text-2xl md:text-3xl font-normal mb-3 text-white">VerbX Partnerships</h2>
          <p className="text-gray-500 text-sm max-w-xl">Language infrastructure for institutions. Partner with us to embed VerbX into your platform or service.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {verbxPartners.map((p, i) => (
            <motion.div
              key={p.industry}
              className="p-5 rounded-xl border border-[#13D8F6]/15 hover:border-[#13D8F6]/40 transition-all duration-300"
              style={{ background: "rgba(19,216,246,0.03)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="mb-3 text-gray-400">{p.icon}</div>
              <h3 className="text-white font-medium mb-2">{p.industry}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SERA PARTNERSHIPS ── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-12 border-t border-white/5">
        <motion.div {...fadeUp} className="mb-8">
          <p className="text-xs font-mono tracking-[0.2em] uppercase mb-2" style={{ color: "#E26426" }}>Pillar 02</p>
          <h2 className="font-sora text-2xl md:text-3xl font-normal mb-3 text-white">Sera Partnerships</h2>
          <p className="text-gray-500 text-sm max-w-xl">Retail infrastructure for India. Partner with us to deploy Sera across your network of stores, members, or distributors.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {seraPartners.map((p, i) => (
            <motion.div
              key={p.type}
              className="p-5 rounded-xl border border-[#E26426]/15 hover:border-[#E26426]/40 transition-all duration-300"
              style={{ background: "rgba(226,100,38,0.03)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <h3 className="text-white font-medium mb-2">{p.type}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-16 border-t border-white/5">
        <motion.div {...fadeUp} className="text-center">
          <h2 className="font-sora text-2xl md:text-3xl font-normal mb-4 text-white">Ready to Partner?</h2>
          <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
            Write to us at <span style={{ color: "#13D8F6" }}>ivishaihello@gmail.com</span> with your organisation name, industry, and what you have in mind.
          </p>
          <a
            href="mailto:ivishaihello@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold transition-all duration-200 hover:opacity-85"
            style={{ background: "linear-gradient(90deg, #13D8F6, #0F616D)", color: "#000" }}
          >
            Get in Touch
          </a>
        </motion.div>
      </section>

    </div>
    <Footer />
  </>
);

export default Collaboration;
