import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SeraLayout from "./SeraLayout";

const zones = [
  {
    zone: "01", heading: "Core Retail",
    industries: [
      { name: "Grocery / Kirana",   caps: "Weight-based billing, barcode scanning, customer credit (Khata)" },
      { name: "General Store",      caps: "Full product catalogue, inventory tracking, mixed billing" },
      { name: "Dairy",              caps: "Daily supply scheduling, regular customer management, Khata billing" },
      { name: "Fruits & Vegetables",caps: "Weight-based billing, daily price updates, seasonal inventory" },
      { name: "Bakery",             caps: "Product catalogue, daily production tracking, invoice generation" },
      { name: "Wholesale Store",    caps: "Bulk billing, wholesale pricing tiers, large-volume inventory management" },
      { name: "Poultry / Meat Shop",caps: "Weight-based billing, daily pricing, freshness-based inventory" },
    ],
  },
  {
    zone: "02", heading: "Pharmacy & Wellness",
    industries: [
      { name: "Pharmacy / Medical Store",   caps: "Batch tracking, expiry date monitoring, prescription-linked billing, drug catalogue" },
      { name: "Ayurveda / Herbal Store",    caps: "Herbal product catalogue, batch tracking, expiry monitoring" },
      { name: "Optical Store",              caps: "Prescription management, lens inventory, frame catalogue, customer vision records" },
    ],
  },
  {
    zone: "03", heading: "Regulated Retail",
    note: "Full billing, inventory, and reporting — standard retail workflow.",
    industries: [
      { name: "Electronics",          caps: "Serial number tracking, warranty management, brand-wise inventory" },
      { name: "Mobile Store",         caps: "IMEI tracking, accessories billing, repair job cards" },
      { name: "Hardware",             caps: "SKU-based inventory, bulk billing, contractor credit accounts" },
      { name: "Stationery",           caps: "Full catalogue billing, school season inventory, institutional orders" },
      { name: "Clothing / Garments",  caps: "Size and colour variants, seasonal collection management, alteration tracking" },
      { name: "Pet Store",            caps: "Product and food inventory, grooming service billing, pet health records" },
    ],
  },
  {
    zone: "04", heading: "Service-Led",
    industries: [
      { name: "Salon / Beauty",       caps: "Service billing, walk-in and appointment billing, staff service tracking" },
      { name: "Tailor / Boutique",    caps: "Measurement records, order management, delivery tracking, service billing" },
      { name: "Repair Shop",          caps: "Job card management, parts + labour billing, delivery status" },
      { name: "Gym / Fitness Center", caps: "Membership billing, renewal tracking, attendance-linked billing" },
      { name: "Laundry",              caps: "Item-wise billing, delivery scheduling, customer order tracking" },
    ],
  },
  {
    zone: "05", heading: "Food & Beverage",
    industries: [
      { name: "Fast Food / Takeaway",  caps: "Menu-based billing, token ordering, quick checkout" },
      { name: "Tiffin / Curry Point",  caps: "Subscription-based customer billing, daily order management, Khata for regulars" },
      { name: "Juice Bar / Cold Drinks", caps: "Quick-serve menu billing, add-on customisation, daily revenue tracking" },
    ],
  },
  {
    zone: "06", heading: "Regulated Restricted",
    restricted: true,
    intro: "Liquor shops, tobacco shops, paan shops, and hybrid food+paan outlets operate under specific regulations. Sera is the only retail platform built with these compliance requirements from day one.",
    closingNote: "Zone 6 does not have a free plan. A minimum paid plan is required to operate on Sera — due to compliance requirements.",
    industries: [
      { name: "Liquor Shop",         caps: "State excise license validation, age restriction, dry-state blocking" },
      { name: "Tobacco Shop",        caps: "COTPA compliance, age restriction, proximity restrictions" },
      { name: "Paan Shop",           caps: "COTPA if tobacco products sold, standard billing otherwise" },
      { name: "Hybrid Paan + Food",  caps: "COTPA and FSSAI layers — both active where applicable" },
    ],
  },
];

const ZoneCard = ({ zone, i }) => {
  const [open, setOpen] = useState(true);

  return (
    <motion.div className="overflow-hidden rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.45, delay: i * 0.05 }}
    >
      <button className="w-full flex items-center justify-between p-4 md:p-5 text-left" onClick={() => setOpen(!open)}>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-[10px] font-mono px-2 py-0.5"
            style={{ color: "#E26426", background: "rgba(226,100,38,0.08)", border: "1px solid rgba(226,100,38,0.2)" }}>
            Zone {zone.zone}
          </span>
          <span className="font-semibold text-sm md:text-base text-white">{zone.heading}</span>
          {zone.restricted && (
            <span className="text-[10px] px-2 py-0.5 text-gray-500 font-mono">Compliance Required</span>
          )}
          <span className="text-gray-600 text-xs">
            {zone.industries.length} {zone.industries.length === 1 ? "industry" : "industries"}
          </span>
        </div>
        <motion.svg width="16" height="16" viewBox="0 0 16 16" fill="none"
          animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}
          className="text-gray-500 flex-shrink-0 ml-2">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <div className="px-4 md:px-5 pb-5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              {zone.intro && (
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mt-4 mb-4"
                  style={{ borderLeft: "3px solid rgba(226,100,38,0.4)", paddingLeft: "12px" }}>
                  {zone.intro}
                </p>
              )}
              {zone.note && <p className="text-gray-600 text-xs italic mt-3 mb-3">{zone.note}</p>}

              <div className="space-y-0">
                {zone.industries.map((ind) => (
                  <div key={ind.name} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-3"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span className="text-white text-sm font-medium sm:w-48 flex-shrink-0">{ind.name}</span>
                    {ind.caps && <span className="text-gray-400 text-xs md:text-sm">{ind.caps}</span>}
                  </div>
                ))}
              </div>

              {zone.closingNote && <p className="text-gray-600 text-xs italic pt-4">{zone.closingNote}</p>}
              {zone.restricted && (
                <Link to="/sera/pricing" className="inline-block mt-3 text-xs font-medium hover:underline"
                  style={{ color: "#E26426" }}>
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

const SeraIndustries = () => (
  <SeraLayout>
    <section className="px-5 md:px-10 lg:px-14 xl:px-20 pt-10 md:pt-16 pb-8">
      <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-600 mb-2">Industries</p>
        <h1 className="font-sora font-normal leading-none mb-4"
          style={{
            fontSize: "clamp(32px,5vw,60px)", letterSpacing: "-1.5px",
            background: "linear-gradient(110deg, #fff 40%, #E26426 100%)",
            backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
          28 Industries. One Platform.
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          A pharmacy needs expiry date tracking. A salon bills for services. A food stall uses a token
          queue. A kirana sells by weight. Sera adapts to each industry's real workflow.
        </p>
      </motion.div>
    </section>

    <section className="px-5 md:px-10 lg:px-14 xl:px-20 pb-12 space-y-px">
      {zones.map((zone, i) => <ZoneCard key={zone.zone} zone={zone} i={i} />)}
    </section>

    <section className="px-5 md:px-10 lg:px-14 xl:px-20 py-8 md:py-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link to="/sera/features" className="px-5 py-2.5 text-sm font-medium border text-center transition-all hover:opacity-90"
          style={{ borderColor: "rgba(255,255,255,0.15)", color: "#fff" }}>
          View All Features &rarr;
        </Link>
        <Link to="/sera/pricing" className="px-5 py-2.5 text-sm font-medium border text-center transition-all hover:opacity-90"
          style={{ borderColor: "rgba(226,100,38,0.3)", color: "#E26426" }}>
          See Pricing &rarr;
        </Link>
      </div>
    </section>
  </SeraLayout>
);

export default SeraIndustries;
