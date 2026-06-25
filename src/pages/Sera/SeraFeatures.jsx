import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SeraLayout from "./SeraLayout";

const features = [
  {
    title: "Billing",
    desc: "Fast, reliable billing. Works offline — no internet needed. Barcode scanning, manual entry, printable invoices, PDF sharing.",
  },
  {
    title: "Inventory Management",
    desc: "Know what you have and what you're running low on. Industry-appropriate tracking — deeper for pharmacy, straightforward for others.",
  },
  {
    title: "Khata — Credit Ledger",
    desc: "The digital replacement for the paper notebook. Track who owes you, how much, since when. Send reminders directly.",
  },
  {
    title: "Payments",
    desc: "Six payment modes in one place — Cash, UPI QR, UPI Dynamic, Card, Credit (Khata), and Prepaid Balance.",
  },
  {
    title: "Reports & Analytics",
    desc: "Daily sales, earnings, expenses, profit. Clean summaries — not overwhelming dashboards. Business health at a glance.",
  },
  {
    title: "SERA — AI Assistant",
    desc: "Built into every plan. Helps you set up your shop, manage products, answer business questions, and suggest improvements. Included — not an add-on.",
  },
];

const seraRows = [
  { action: "Guides you through shop setup at onboarding",   tier: "All plans" },
  { action: "Answers questions about your own business",      tier: "All plans" },
  { action: "Suggests products, pricing, and restocking",    tier: "BASIC and above" },
  { action: "Generates posters and marketing content",       tier: "PRO only" },
  { action: "Compliance guidance for regulated industries",  tier: "Zone 6 — always" },
];

const SeraFeatures = () => (
  <SeraLayout>
    {/* ── HERO ── */}
    <section className="px-5 md:px-10 lg:px-14 xl:px-20 pt-10 md:pt-16 pb-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-600 mb-2">Features</p>
        <h1 className="font-sora font-normal leading-none mb-3"
          style={{
            fontSize: "clamp(32px,5vw,60px)", letterSpacing: "-1.5px",
            background: "linear-gradient(110deg, #fff 40%, #E26426 100%)",
            backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
          What Every Shop Gets
        </h1>
        <p className="text-gray-400 text-sm max-w-lg leading-relaxed">
          Every feature is built for the real conditions of Indian retail — offline-capable, multilingual, and compliant.
        </p>
      </motion.div>
    </section>

    {/* ── FEATURES — plain credential-style list ── */}
    <section className="px-5 md:px-10 lg:px-14 xl:px-20 pb-12">
      <div className="max-w-2xl space-y-0">
        {features.map((f, i) => (
          <motion.div key={f.title}
            className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-4"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <span className="text-white text-sm font-medium sm:w-44 flex-shrink-0">{f.title}</span>
            <span className="text-gray-400 text-sm leading-relaxed">{f.desc}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ── SERA AI ── */}
    <section className="px-5 md:px-10 lg:px-14 xl:px-20 py-10 md:py-14" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-600 mb-2">AI</p>
        <h2 className="font-sora font-normal mb-3" style={{ fontSize: "clamp(22px,3.5vw,40px)", letterSpacing: "-1px" }}>
          <span style={{ color: "#E26426" }}>SERA</span>
          <span className="text-white"> — Your Shop's AI</span>
        </h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl"
          style={{ borderLeft: "3px solid rgba(226,100,38,0.5)", paddingLeft: "16px" }}>
          Shop Engine for Retail Assistance. It is not a chatbot. It knows your shop type,
          your inventory, your language, and your industry's requirements.
        </p>
      </motion.div>

      <div className="max-w-2xl space-y-0">
        {seraRows.map((row, i) => (
          <motion.div key={i}
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-3.5"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <span className="text-gray-300 text-sm flex-1">{row.action}</span>
            <span className="text-[11px] px-2.5 py-1 self-start sm:self-auto flex-shrink-0"
              style={{ background: "rgba(226,100,38,0.08)", color: "#E26426", border: "1px solid rgba(226,100,38,0.2)" }}>
              {row.tier}
            </span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ── BOTTOM CTAs ── */}
    <section className="px-5 md:px-10 lg:px-14 xl:px-20 py-8 md:py-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link to="/sera/industries" className="px-5 py-2.5 text-sm font-medium border text-center transition-all hover:opacity-90"
          style={{ borderColor: "rgba(255,255,255,0.15)", color: "#fff" }}>
          See All Industries &rarr;
        </Link>
        <Link to="/sera/pricing" className="px-5 py-2.5 text-sm font-medium border text-center transition-all hover:opacity-90"
          style={{ borderColor: "rgba(226,100,38,0.3)", color: "#E26426" }}>
          View Pricing &rarr;
        </Link>
      </div>
    </section>
  </SeraLayout>
);

export default SeraFeatures;
