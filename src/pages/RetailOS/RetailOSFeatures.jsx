import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RetailOSLayout from "./RetailOSLayout";

const features = [
  {
    title: "Billing",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="2" width="14" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    desc: "Fast, reliable billing. Works offline -- no internet needed. Barcode scanning, manual entry, printable invoices, PDF sharing.",
    color: "#E26426",
    rgb: "226,100,38",
  },
  {
    title: "Inventory Management",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="10" width="5" height="8" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="7.5" y="6" width="5" height="12" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="13" y="2" width="5" height="16" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
    desc: "Know what you have and what you are running low on. Industry-appropriate tracking -- deeper for pharmacy, straightforward for others.",
    color: "#13D8F6",
    rgb: "19,216,246",
  },
  {
    title: "Khata -- Credit Ledger",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M3 18c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    desc: "The digital replacement for the paper notebook. Track who owes you, how much, since when. Send reminders directly.",
    color: "#a78bfa",
    rgb: "167,139,250",
  },
  {
    title: "Payments",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="5" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M2 8.5h16" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M6 12h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    desc: "Six payment modes in one place -- Cash, UPI QR, UPI Dynamic, Card, Credit (Khata), and Prepaid Balance.",
    color: "#34d399",
    rgb: "52,211,153",
  },
  {
    title: "Reports & Analytics",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 15l4-5 4 2 5-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    desc: "Daily sales, earnings, expenses, profit. Clean summaries -- not overwhelming dashboards. Business health at a glance.",
    color: "#60a5fa",
    rgb: "96,165,250",
  },
  {
    title: "SERA -- AI Assistant",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M10 7v3l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    desc: "Built into every plan. Helps you set up your shop, manage products, answer business questions, and suggest improvements. Included -- not an add-on.",
    color: "#42A5F5",
    rgb: "21,101,192",
    highlight: true,
  },
];

const seraRows = [
  { action: "Guides you through shop setup at onboarding", tier: "All plans", ok: true },
  { action: "Answers questions about your own business", tier: "All plans", ok: true },
  { action: "Suggests products, pricing, and restocking", tier: "BASIC and above", ok: true },
  { action: "Generates posters and marketing content", tier: "PRO only", ok: true },
  { action: "Compliance guidance for regulated industries", tier: "Zone 6 -- always", ok: true },
];

const RetailOSFeatures = () => (
  <RetailOSLayout>
    {/* ── HERO ── */}
    <section className="px-5 md:px-10 lg:px-14 xl:px-20 pt-10 md:pt-16 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-600 mb-2">Features</p>
        <h1
          className="font-sora font-normal leading-none mb-3"
          style={{
            fontSize: "clamp(32px,5vw,60px)",
            letterSpacing: "-1.5px",
            background: "linear-gradient(110deg, #fff 40%, #E26426 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          What Every Shop Gets
        </h1>
        <p className="text-gray-400 text-sm max-w-lg leading-relaxed">
          Every feature is built for the real conditions of Indian retail -- offline-capable, multilingual, and compliant.
        </p>
      </motion.div>
    </section>

    {/* ── FEATURE GRID ── */}
    <section className="px-5 md:px-10 lg:px-14 xl:px-20 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="relative overflow-hidden p-5 md:p-6 flex flex-col gap-4"
            style={{
              border: f.highlight
                ? "1px solid rgba(21,101,192,0.35)"
                : `1px solid rgba(${f.rgb},0.15)`,
              background: f.highlight
                ? "rgba(21,101,192,0.06)"
                : `rgba(${f.rgb},0.03)`,
            }}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
          >
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: `linear-gradient(90deg, rgba(${f.rgb},0.8), transparent)` }}
            />

            <div className="flex items-start gap-3">
              <div
                className="flex-shrink-0 p-2 rounded-lg"
                style={{ background: `rgba(${f.rgb},0.1)`, color: f.color }}
              >
                {f.icon}
              </div>
              <div>
                {f.highlight && (
                  <span
                    className="inline-block text-[10px] px-2 py-0.5 mb-1 font-medium"
                    style={{ background: "rgba(21,101,192,0.15)", color: "#42A5F5", border: "1px solid rgba(21,101,192,0.3)" }}
                  >
                    AI-Powered
                  </span>
                )}
                <h3 className="text-white font-semibold text-sm md:text-base">{f.title}</h3>
              </div>
            </div>

            <p className="text-gray-400 text-xs md:text-sm leading-relaxed flex-1">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ── SERA SECTION ── */}
    <section
      className="px-5 md:px-10 lg:px-14 xl:px-20 py-10 md:py-14"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-600 mb-2">AI</p>
        <h2
          className="font-sora font-normal mb-3"
          style={{ fontSize: "clamp(22px,3.5vw,40px)", letterSpacing: "-1px" }}
        >
          <span style={{ color: "#42A5F5" }}>SERA</span>
          <span className="text-white"> -- Your Shop's AI</span>
        </h2>
        <p
          className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl"
          style={{ borderLeft: "3px solid rgba(21,101,192,0.6)", paddingLeft: "16px" }}
        >
          Shop Engine for Retail Assistance. It is not a chatbot. It knows your shop type,
          your inventory, your language, and your industry's requirements.
        </p>
      </motion.div>

      <div className="max-w-2xl space-y-1">
        {seraRows.map((row, i) => (
          <motion.div
            key={i}
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3.5 md:p-4"
            style={{ border: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <div
              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: "rgba(21,101,192,0.15)", border: "1px solid rgba(21,101,192,0.3)" }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5l2.5 2.5L8 3" stroke="#42A5F5" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-gray-300 text-sm flex-1">{row.action}</span>
            <span
              className="text-[11px] px-2.5 py-1 self-start sm:self-auto flex-shrink-0"
              style={{ background: "rgba(21,101,192,0.1)", color: "#42A5F5", border: "1px solid rgba(21,101,192,0.2)" }}
            >
              {row.tier}
            </span>
          </motion.div>
        ))}
      </div>

      <div
        className="mt-6 flex items-center gap-3 p-4 max-w-lg"
        style={{ border: "1px solid rgba(21,101,192,0.25)", background: "rgba(21,101,192,0.05)" }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
          <circle cx="8" cy="8" r="6.5" stroke="#42A5F5" strokeWidth="1.4"/>
          <path d="M8 5v4M8 11v0.5" stroke="#42A5F5" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
        <p className="text-white text-xs md:text-sm font-medium">
          SERA is always included in your plan. It is never charged separately.
        </p>
      </div>
    </section>

    {/* ── OFFLINE-FIRST ── */}
    <section
      className="px-5 md:px-10 lg:px-14 xl:px-20 py-10 md:py-14"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <motion.div
        className="max-w-2xl p-6 md:p-8 relative overflow-hidden"
        style={{ border: "1px solid rgba(226,100,38,0.25)", background: "rgba(226,100,38,0.04)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, #E26426, transparent)" }}
        />
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-600 mb-3">Reliability</p>
        <h2
          className="font-sora font-normal mb-4 text-white"
          style={{ fontSize: "clamp(20px,3vw,32px)", letterSpacing: "-0.5px" }}
        >
          Offline-First.{" "}
          <span style={{ color: "#E26426" }}>Always.</span>
        </h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Billing in Retail OS works without internet. Your sales data is stored on the device
          and syncs when connectivity returns. A network failure is never a business failure.
        </p>
      </motion.div>
    </section>

    {/* ── BOTTOM CTAs ── */}
    <section
      className="px-5 md:px-10 lg:px-14 xl:px-20 py-8 md:py-10"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/retail-os/industries"
          className="px-5 py-2.5 text-sm font-medium border text-center transition-all hover:opacity-90"
          style={{ borderColor: "rgba(19,216,246,0.3)", color: "#13D8F6" }}
        >
          See All Industries &rarr;
        </Link>
        <Link
          to="/retail-os/pricing"
          className="px-5 py-2.5 text-sm font-medium border text-center transition-all hover:opacity-90"
          style={{ borderColor: "rgba(226,100,38,0.3)", color: "#E26426" }}
        >
          View Pricing &rarr;
        </Link>
      </div>
    </section>
  </RetailOSLayout>
);

export default RetailOSFeatures;
