import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SeraLayout from "./SeraLayout";

const zones = [
  { zone: "01", type: "Core Retail",           count: 7,  industries: ["Grocery / Kirana", "General Store", "Dairy", "Fruits & Veg", "Bakery", "Wholesale Store", "Poultry / Meat Shop"] },
  { zone: "02", type: "Pharmacy & Wellness",   count: 3,  industries: ["Pharmacy", "Medical Store", "Ayurveda / Herbal Store"] },
  { zone: "03", type: "Regulated Retail",      count: 6,  industries: ["Electronics", "Mobile Store", "Hardware", "Stationery", "Clothing / Garments", "Pet Store"] },
  { zone: "04", type: "Service-Led",           count: 5,  industries: ["Salon / Beauty", "Tailor / Boutique", "Repair Shop", "Gym / Fitness Center", "Laundry"] },
  { zone: "05", type: "Food & Beverage",       count: 3,  industries: ["Fast Food / Takeaway", "Tiffin / Curry Point", "Juice Bar / Cold Drinks"] },
  { zone: "06", type: "Regulated Restricted",  count: 4,  industries: ["Liquor Shop", "Tobacco Shop", "Paan Shop", "Hybrid Paan + Food"], restricted: true },
];

const stats = [
  { val: "28", label: "Industries" },
  { val: "6",  label: "Zones" },
  { val: "Yes", label: "Offline-First" },
  { val: "SERA", label: "AI Built-in" },
];

const SeraOverview = () => (
  <SeraLayout>
    {/* ── HERO ── */}
    <section className="px-5 md:px-10 lg:px-14 xl:px-20 pt-10 md:pt-16 pb-10">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="flex items-center gap-2 mb-6 text-xs font-mono text-gray-600">
          <span>Industry 6.0</span><span>/</span>
          <span style={{ color: "#E26426" }}>Sera</span>
        </div>

        <h1
          className="font-sora font-normal leading-none mb-4"
          style={{
            fontSize: "clamp(40px,6vw,72px)", letterSpacing: "-2px",
            background: "linear-gradient(110deg, #fff 40%, #E26426 100%)",
            backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}
        >
          The Operating System<br />for Indian Retail
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed mb-8">
          One platform. One AI. 28 industries. Works offline. India's 63 million retail shops
          deserve better than paper registers and WhatsApp.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col px-4 py-2.5"
              style={{ border: "1px solid rgba(226,100,38,0.2)", background: "rgba(226,100,38,0.04)" }}>
              <span className="font-sora font-bold text-xl" style={{ color: "#E26426" }}>{s.val}</span>
              <span className="text-gray-500 text-[10px] uppercase tracking-wider font-mono">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link to="/sera/pricing" className="px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: "#E26426", color: "#fff" }}>
            Get Started Free
          </Link>
          <Link to="/sera/features" className="px-5 py-2.5 text-sm font-medium border text-white hover:bg-white/5 transition-colors"
            style={{ borderColor: "rgba(255,255,255,0.15)" }}>
            Explore Features
          </Link>
        </div>
      </motion.div>
    </section>

    <div className="mx-5 md:mx-10 lg:mx-14 xl:mx-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

    {/* ── ZONES — plain list, no rainbow cards ── */}
    <section className="px-5 md:px-10 lg:px-14 xl:px-20 py-10 md:py-14">
      <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-600 mb-2">Coverage</p>
        <h2 className="font-sora font-normal" style={{ fontSize: "clamp(22px,3.5vw,40px)", letterSpacing: "-1px" }}>
          <span className="text-white">6 Zones.</span>{" "}
          <span style={{ color: "#E26426" }}>28 Industries.</span>{" "}
          <span className="text-white">One Platform.</span>
        </h2>
      </motion.div>

      <div className="max-w-2xl space-y-0">
        {zones.map((zone, i) => (
          <motion.div key={zone.zone}
            className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-4"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <div className="flex-shrink-0 w-32">
              <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "#E26426" }}>Zone {zone.zone}</span>
              <p className="text-white text-sm font-medium mt-0.5">{zone.type}</p>
              {zone.restricted && (
                <span className="text-[10px] text-gray-500 font-mono">Compliance</span>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5 flex-1">
              {zone.industries.map((ind) => (
                <span key={ind} className="text-[11px] px-2 py-0.5 text-gray-400"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {ind}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6">
        <Link to="/sera/industries" className="text-sm font-medium transition-colors hover:underline" style={{ color: "#E26426" }}>
          See all industries in detail &rarr;
        </Link>
      </div>
    </section>

    {/* ── WHY SERA ── */}
    <section className="px-5 md:px-10 lg:px-14 xl:px-20 py-10 md:py-14" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-600 mb-4">The Problem</p>
        <blockquote className="text-white text-base md:text-lg leading-relaxed font-light"
          style={{ borderLeft: "3px solid #E26426", paddingLeft: "18px" }}>
          India has 63 million retail shops. Most run on paper registers, WhatsApp, and memory.
          Sera is the complete operating system for any shop — billing, inventory, payments,
          credit management, and AI built in from day one. Offline-first, always.
        </blockquote>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/sera/features" className="px-4 py-2 text-xs font-medium border transition-all hover:opacity-90"
            style={{ borderColor: "rgba(255,255,255,0.15)", color: "#fff" }}>
            Explore Features &rarr;
          </Link>
          <Link to="/sera/pricing" className="px-4 py-2 text-xs font-medium border transition-all hover:opacity-90"
            style={{ borderColor: "rgba(226,100,38,0.3)", color: "#E26426" }}>
            See Pricing &rarr;
          </Link>
        </div>
      </motion.div>
    </section>
  </SeraLayout>
);

export default SeraOverview;
