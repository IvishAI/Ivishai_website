import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RetailOSLayout from "./RetailOSLayout";

const zones = [
  {
    zone: "01", type: "Core Retail", color: "#E26426", rgb: "226,100,38",
    industries: ["Grocery / Kirana", "General Store", "Dairy", "Fruits & Veg", "Bakery"],
    restricted: false,
  },
  {
    zone: "02", type: "Pharmacy", color: "#13D8F6", rgb: "19,216,246",
    industries: ["Pharmacy", "Medical Store"],
    restricted: false,
  },
  {
    zone: "03", type: "Regulated Retail", color: "#60a5fa", rgb: "96,165,250",
    industries: ["Electronics", "Mobile Store", "Hardware", "Stationery"],
    restricted: false,
  },
  {
    zone: "04", type: "Service-Led", color: "#a78bfa", rgb: "167,139,250",
    industries: ["Salon / Beauty", "Tailor / Boutique", "Repair Shop"],
    restricted: false,
  },
  {
    zone: "05", type: "Food & Beverage", color: "#34d399", rgb: "52,211,153",
    industries: ["Fast Food / Takeaway", "Tiffin / Curry Point"],
    restricted: false,
  },
  {
    zone: "06", type: "Regulated Restricted", color: "#9575CD", rgb: "94,53,177",
    industries: ["Liquor Shop", "Tobacco Shop", "Paan Shop", "Hybrid Paan + Food"],
    restricted: true,
  },
];

const stats = [
  { val: "19", label: "Industries" },
  { val: "6", label: "Zones" },
  { val: "Yes", label: "Offline-First" },
  { val: "SERA", label: "AI Built-in" },
];

const RetailOSOverview = () => (
  <RetailOSLayout>
    {/* ── HERO ── */}
    <section className="px-5 md:px-10 lg:px-14 xl:px-20 pt-10 md:pt-16 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-xs font-mono text-gray-600">
          <span>Industry 6.0</span>
          <span>/</span>
          <span style={{ color: "#E26426" }}>Retail OS</span>
        </div>

        <h1
          className="font-sora font-normal leading-none mb-4"
          style={{
            fontSize: "clamp(40px,6vw,72px)",
            letterSpacing: "-2px",
            background: "linear-gradient(110deg, #fff 40%, #E26426 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          The Operating System<br />for Indian Retail
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed mb-8">
          One platform. One AI. 19 industries. Works offline. India's 12 million retail shops
          deserve better than paper registers and WhatsApp.
        </p>

        {/* Stat strip */}
        <div className="flex flex-wrap gap-3 mb-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col px-4 py-2.5"
              style={{ border: "1px solid rgba(226,100,38,0.2)", background: "rgba(226,100,38,0.04)" }}
            >
              <span className="font-sora font-bold text-xl" style={{ color: "#E26426" }}>{s.val}</span>
              <span className="text-gray-500 text-[10px] uppercase tracking-wider font-mono">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/retail-os/pricing"
            className="px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: "#E26426", color: "#fff" }}
          >
            Get Started Free
          </Link>
          <Link
            to="/retail-os/features"
            className="px-5 py-2.5 text-sm font-medium border text-white hover:bg-white/5 transition-colors"
            style={{ borderColor: "rgba(255,255,255,0.15)" }}
          >
            Explore Features
          </Link>
        </div>
      </motion.div>
    </section>

    {/* ── DIVIDER ── */}
    <div className="mx-5 md:mx-10 lg:mx-14 xl:mx-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

    {/* ── 6 ZONES ── */}
    <section className="px-5 md:px-10 lg:px-14 xl:px-20 py-10 md:py-14">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-600 mb-2">Coverage</p>
        <h2
          className="font-sora font-normal"
          style={{ fontSize: "clamp(22px,3.5vw,40px)", letterSpacing: "-1px" }}
        >
          <span className="text-white">6 Zones.</span>{" "}
          <span style={{ color: "#E26426" }}>19 Industries.</span>{" "}
          <span className="text-white">One Platform.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
        {zones.map((zone, i) => (
          <motion.div
            key={zone.zone}
            className="relative overflow-hidden p-5"
            style={{
              border: `1px solid rgba(${zone.rgb},0.2)`,
              background: `rgba(${zone.rgb},0.03)`,
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: `linear-gradient(90deg, rgba(${zone.rgb},0.8), transparent)` }}
            />

            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <span
                  className="text-[10px] font-mono tracking-[0.18em] uppercase"
                  style={{ color: `rgba(${zone.rgb},0.7)` }}
                >
                  Zone {zone.zone}
                </span>
                <h3 className="font-semibold text-sm text-white mt-0.5">{zone.type}</h3>
              </div>
              {zone.restricted && (
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0"
                  style={{ background: `rgba(${zone.rgb},0.15)`, color: zone.color, border: `1px solid rgba(${zone.rgb},0.3)` }}
                >
                  Compliance
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {zone.industries.map((ind) => (
                <span
                  key={ind}
                  className="text-[11px] px-2 py-1 text-gray-400"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {ind}
                </span>
              ))}
            </div>

            {/* Zone number watermark */}
            <div
              className="absolute bottom-0 right-3 font-sora font-bold leading-none pointer-events-none select-none"
              style={{ fontSize: "72px", color: zone.color, opacity: 0.04, lineHeight: 1 }}
            >
              {zone.zone}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6">
        <Link
          to="/retail-os/industries"
          className="text-sm font-medium transition-colors hover:underline"
          style={{ color: "#E26426" }}
        >
          See all industries in detail &rarr;
        </Link>
      </div>
    </section>

    {/* ── WHY RETAIL OS ── */}
    <section
      className="px-5 md:px-10 lg:px-14 xl:px-20 py-10 md:py-14"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-600 mb-4">The Problem</p>
        <blockquote
          className="text-white text-base md:text-lg leading-relaxed font-light"
          style={{ borderLeft: "3px solid #E26426", paddingLeft: "18px" }}
        >
          India has 12 million retail shops. Most run on paper registers, WhatsApp, and memory.
          Retail OS is the complete operating system for any shop — billing, inventory, payments,
          credit management, and AI built in from day one.
        </blockquote>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/retail-os/features"
            className="px-4 py-2 text-xs font-medium border transition-all hover:opacity-90"
            style={{ borderColor: "rgba(19,216,246,0.3)", color: "#13D8F6" }}
          >
            Explore Features &rarr;
          </Link>
          <Link
            to="/retail-os/pricing"
            className="px-4 py-2 text-xs font-medium border transition-all hover:opacity-90"
            style={{ borderColor: "rgba(226,100,38,0.3)", color: "#E26426" }}
          >
            See Pricing &rarr;
          </Link>
        </div>
      </motion.div>
    </section>
  </RetailOSLayout>
);

export default RetailOSOverview;
