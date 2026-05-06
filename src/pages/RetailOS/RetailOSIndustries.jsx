import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import RetailOSLayout from "./RetailOSLayout";

const zones = [
  {
    zone: "01",
    heading: "Core Retail",
    color: "#E26426",
    rgb: "226,100,38",
    restricted: false,
    industries: [
      { name: "Grocery / Kirana", caps: "Weight-based billing for loose items, barcode scanning, customer credit (Khata)" },
      { name: "General Store", caps: "Full product catalogue, inventory tracking, mixed billing" },
      { name: "Dairy", caps: "Daily supply scheduling, regular customer management, Khata billing" },
      { name: "Fruits & Vegetables", caps: "Weight-based billing, daily price updates, seasonal inventory" },
      { name: "Bakery", caps: "Product catalogue, daily production tracking, invoice generation" },
    ],
  },
  {
    zone: "02",
    heading: "Pharmacy",
    color: "#13D8F6",
    rgb: "19,216,246",
    restricted: false,
    industries: [
      { name: "Pharmacy / Medical Store", caps: "Batch tracking, expiry date monitoring, prescription-linked billing, drug catalogue management" },
    ],
  },
  {
    zone: "03",
    heading: "Regulated Retail",
    color: "#60a5fa",
    rgb: "96,165,250",
    restricted: false,
    note: "Full billing, inventory, and reporting -- standard retail workflow.",
    industries: [
      { name: "Electronics", caps: "" },
      { name: "Mobile Store", caps: "" },
      { name: "Hardware", caps: "" },
      { name: "Stationery", caps: "" },
    ],
  },
  {
    zone: "04",
    heading: "Service-Led",
    color: "#a78bfa",
    rgb: "167,139,250",
    restricted: false,
    industries: [
      { name: "Salon / Beauty", caps: "Service billing, walk-in and appointment billing, staff service tracking" },
      { name: "Tailor / Boutique", caps: "Measurement records, order management, delivery tracking, service billing" },
      { name: "Repair Shop", caps: "Job card management, parts + labour billing, delivery status" },
    ],
  },
  {
    zone: "05",
    heading: "Food & Beverage",
    color: "#34d399",
    rgb: "52,211,153",
    restricted: false,
    industries: [
      { name: "Fast Food / Takeaway", caps: "Menu-based billing, token ordering, quick checkout" },
      { name: "Tiffin / Curry Point", caps: "Subscription-based customer billing, daily order management, Khata for regulars" },
    ],
  },
  {
    zone: "06",
    heading: "Regulated Restricted",
    color: "#9575CD",
    rgb: "94,53,177",
    restricted: true,
    intro: "Liquor shops, tobacco shops, paan shops, and hybrid food+paan outlets operate under specific regulations. Retail OS is the only retail platform built with these compliance requirements from day one.",
    closingNote: "Zone 6 does not have a free plan. A minimum paid plan is required to operate on Retail OS -- due to compliance requirements.",
    industries: [
      { name: "Liquor Shop", caps: "State excise license validation, age restriction, dry-state blocking" },
      { name: "Tobacco Shop", caps: "COTPA compliance, age restriction, proximity restrictions" },
      { name: "Paan Shop", caps: "COTPA if tobacco products sold, standard billing otherwise" },
      { name: "Hybrid Paan + Food", caps: "COTPA and FSSAI layers -- both active where applicable" },
    ],
  },
];

const ZoneCard = ({ zone, i }) => {
  const [open, setOpen] = useState(true);

  return (
    <motion.div
      className="overflow-hidden"
      style={{
        border: `1px solid rgba(${zone.rgb},0.2)`,
        background: `rgba(${zone.rgb},0.02)`,
      }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: i * 0.05 }}
    >
      {/* Top accent line */}
      <div
        className="h-[2px]"
        style={{ background: `linear-gradient(90deg, rgba(${zone.rgb},0.8), transparent)` }}
      />

      {/* Header */}
      <button
        className="w-full flex items-center justify-between p-4 md:p-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3 flex-wrap">
          <span
            className="text-xs font-mono px-2 py-0.5 flex-shrink-0"
            style={{ color: zone.color, background: `rgba(${zone.rgb},0.12)`, border: `1px solid rgba(${zone.rgb},0.25)` }}
          >
            Zone {zone.zone}
          </span>
          <span className="font-semibold text-sm md:text-base text-white">{zone.heading}</span>
          {zone.restricted && (
            <span
              className="text-[10px] px-2 py-0.5 rounded-full font-medium"
              style={{ background: `rgba(${zone.rgb},0.15)`, color: zone.color, border: `1px solid rgba(${zone.rgb},0.3)` }}
            >
              Compliance Required
            </span>
          )}
          <span className="text-gray-600 text-xs">
            {zone.industries.length} {zone.industries.length === 1 ? "industry" : "industries"}
          </span>
        </div>
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-500 flex-shrink-0 ml-2"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-5 pb-5" style={{ borderTop: `1px solid rgba(${zone.rgb},0.1)` }}>
              {zone.intro && (
                <p
                  className="text-gray-300 text-xs md:text-sm leading-relaxed mt-4 mb-4"
                  style={{ borderLeft: `3px solid rgba(${zone.rgb},0.5)`, paddingLeft: "12px" }}
                >
                  {zone.intro}
                </p>
              )}
              {zone.note && (
                <p className="text-gray-500 text-xs italic mt-3 mb-3">{zone.note}</p>
              )}

              <div className="space-y-0">
                {zone.industries.map((ind) => (
                  <div
                    key={ind.name}
                    className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-3"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <span
                      className="text-sm font-medium sm:w-44 flex-shrink-0"
                      style={{ color: zone.color }}
                    >
                      {ind.name}
                    </span>
                    {ind.caps && (
                      <span className="text-gray-400 text-xs md:text-sm">{ind.caps}</span>
                    )}
                  </div>
                ))}
              </div>

              {zone.closingNote && (
                <p className="text-gray-500 text-xs italic pt-4">{zone.closingNote}</p>
              )}
              {zone.restricted && (
                <Link
                  to="/retail-os/pricing"
                  className="inline-block mt-3 text-xs font-medium hover:underline"
                  style={{ color: zone.color }}
                >
                  See Zone 6 Pricing &rarr;
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const RetailOSIndustries = () => (
  <RetailOSLayout>
    {/* ── INTRO ── */}
    <section className="px-5 md:px-10 lg:px-14 xl:px-20 pt-10 md:pt-16 pb-8">
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-600 mb-2">Industries</p>
        <h1
          className="font-sora font-normal leading-none mb-4"
          style={{
            fontSize: "clamp(32px,5vw,60px)",
            letterSpacing: "-1.5px",
            background: "linear-gradient(110deg, #fff 40%, #E26426 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Why Industries Matter
        </h1>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          A pharmacy needs expiry date tracking and compliance controls. A salon bills for
          services, not products. A food stall uses a token queue. A kirana sells by weight.
          One size fits none of them -- which is why Retail OS adapts to each industry's real workflow.
        </p>
      </motion.div>
    </section>

    {/* ── ZONES ── */}
    <section className="px-5 md:px-10 lg:px-14 xl:px-20 pb-12 space-y-3">
      {zones.map((zone, i) => (
        <ZoneCard key={zone.zone} zone={zone} i={i} />
      ))}
    </section>

    {/* ── BOTTOM CTAs ── */}
    <section
      className="px-5 md:px-10 lg:px-14 xl:px-20 py-8 md:py-10"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/retail-os/features"
          className="px-5 py-2.5 text-sm font-medium border text-center transition-all hover:opacity-90"
          style={{ borderColor: "rgba(19,216,246,0.3)", color: "#13D8F6" }}
        >
          View All Features &rarr;
        </Link>
        <Link
          to="/retail-os/pricing"
          className="px-5 py-2.5 text-sm font-medium border text-center transition-all hover:opacity-90"
          style={{ borderColor: "rgba(226,100,38,0.3)", color: "#E26426" }}
        >
          See Pricing &rarr;
        </Link>
      </div>
    </section>
  </RetailOSLayout>
);

export default RetailOSIndustries;
