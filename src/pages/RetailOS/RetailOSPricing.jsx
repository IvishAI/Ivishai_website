import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RetailOSLayout from "./RetailOSLayout";

const standardPlans = [
  {
    name: "FREE",
    price: "Rs. 0",
    period: "/month",
    annual: "Free forever",
    highlighted: false,
    ctaLabel: "Get Started Free",
    mailSubject: "Retail OS FREE Plan",
    features: [
      { label: "Billing", value: "Full", ok: true },
      { label: "Inventory", value: "Basic", ok: true },
      { label: "Khata (Credit Ledger)", value: "No", ok: false },
      { label: "Reports", value: "Basic", ok: true },
      { label: "SERA AI", value: "Setup only", ok: true },
      { label: "Multi-language", value: "No", ok: false },
      { label: "Users", value: "1", ok: true },
      { label: "Poster Generation", value: "No", ok: false },
      { label: "Priority Support", value: "No", ok: false },
    ],
  },
  {
    name: "BASIC",
    price: "Rs. 299",
    period: "/month",
    annual: "Rs. 2,999 / year",
    highlighted: false,
    ctaLabel: "Start BASIC",
    mailSubject: "Retail OS BASIC Plan",
    features: [
      { label: "Billing", value: "Full", ok: true },
      { label: "Inventory", value: "Full", ok: true },
      { label: "Khata (Credit Ledger)", value: "Yes", ok: true },
      { label: "Reports", value: "Full", ok: true },
      { label: "SERA AI", value: "Included", ok: true },
      { label: "Multi-language", value: "Yes", ok: true },
      { label: "Users", value: "2", ok: true },
      { label: "Poster Generation", value: "No", ok: false },
      { label: "Priority Support", value: "No", ok: false },
    ],
  },
  {
    name: "PRO",
    price: "Rs. 699",
    period: "/month",
    annual: "Rs. 6,999 / year",
    highlighted: true,
    ctaLabel: "Start PRO",
    mailSubject: "Retail OS PRO Plan",
    features: [
      { label: "Billing", value: "Full", ok: true },
      { label: "Inventory", value: "Full", ok: true },
      { label: "Khata (Credit Ledger)", value: "Yes", ok: true },
      { label: "Reports", value: "Advanced", ok: true },
      { label: "SERA AI", value: "Included", ok: true },
      { label: "Multi-language", value: "Yes", ok: true },
      { label: "Users", value: "Unlimited", ok: true },
      { label: "Poster Generation", value: "Yes", ok: true },
      { label: "Priority Support", value: "Yes", ok: true },
    ],
  },
];

const zone6Plans = [
  {
    name: "ENTRY",
    price: "Rs. 299",
    period: "/month",
    annual: "Rs. 2,999 / year",
    highlighted: false,
    ctaLabel: "Start ENTRY",
    mailSubject: "Retail OS Zone6 ENTRY Plan",
    features: [
      { label: "Billing", value: "Full", ok: true },
      { label: "Compliance Assistant (SERA)", value: "Yes", ok: true },
      { label: "Poster Generation", value: "No", ok: false },
    ],
  },
  {
    name: "BASIC",
    price: "Rs. 699",
    period: "/month",
    annual: "Rs. 6,999 / year",
    highlighted: false,
    ctaLabel: "Start BASIC",
    mailSubject: "Retail OS Zone6 BASIC Plan",
    features: [
      { label: "Billing", value: "Full", ok: true },
      { label: "Compliance Assistant (SERA)", value: "Yes", ok: true },
      { label: "Poster Generation", value: "No", ok: false },
    ],
  },
  {
    name: "PRO",
    price: "Rs. 999",
    period: "/month",
    annual: "Rs. 9,999 / year",
    highlighted: true,
    ctaLabel: "Start PRO",
    mailSubject: "Retail OS Zone6 PRO Plan",
    features: [
      { label: "Billing", value: "Full", ok: true },
      { label: "Compliance Assistant (SERA)", value: "Yes", ok: true },
      { label: "Poster Generation", value: "Yes", ok: true },
    ],
  },
];

const CheckIcon = ({ ok, color }) => (
  <div
    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
    style={{
      background: ok ? `rgba(${color},0.15)` : "rgba(255,255,255,0.04)",
      border: ok ? `1px solid rgba(${color},0.35)` : "1px solid rgba(255,255,255,0.08)",
    }}
  >
    {ok ? (
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M1.5 4l2 2L6.5 2" stroke={`rgb(${color})`} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) : (
      <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
        <path d="M1 1l4 4M5 1L1 5" stroke="rgba(156,163,175,0.3)" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    )}
  </div>
);

const PlanCard = ({ plan, accentColor, accentRgb, index }) => (
  <motion.div
    className="relative flex flex-col"
    style={{
      border: plan.highlighted ? `1px solid rgba(${accentRgb},0.45)` : "1px solid rgba(255,255,255,0.07)",
      background: plan.highlighted ? `rgba(${accentRgb},0.06)` : "rgba(255,255,255,0.02)",
    }}
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
  >
    {/* Top gradient accent */}
    <div
      className="h-[2px]"
      style={{
        background: plan.highlighted
          ? `linear-gradient(90deg, ${accentColor}, transparent)`
          : "transparent",
      }}
    />

    {plan.highlighted && (
      <div
        className="absolute -top-3 left-4 px-2.5 py-0.5 text-[10px] font-semibold text-black tracking-wide uppercase"
        style={{ background: accentColor }}
      >
        Most Popular
      </div>
    )}

    <div className="p-5 md:p-6 flex-1 flex flex-col">
      <div className="mb-4">
        <h3 className="text-xs font-mono uppercase tracking-[0.15em] text-gray-500 mb-2">{plan.name}</h3>
        <div className="flex items-baseline gap-1 mb-0.5">
          <span className="font-sora font-bold text-2xl md:text-3xl text-white">{plan.price}</span>
          <span className="text-gray-500 text-xs">{plan.period}</span>
        </div>
        <p className="text-gray-600 text-[11px]">{plan.annual}</p>
      </div>

      <div className="space-y-2.5 flex-1 mb-5">
        {plan.features.map((f) => (
          <div key={f.label} className="flex items-center gap-2.5 text-xs md:text-sm">
            <CheckIcon ok={f.ok} color={accentRgb} />
            <span className="flex-1 text-gray-400">{f.label}</span>
            <span
              className="font-medium flex-shrink-0 text-xs"
              style={{ color: f.ok ? accentColor : "rgba(156,163,175,0.3)" }}
            >
              {f.value}
            </span>
          </div>
        ))}
      </div>

      <a
        href={`mailto:connect@ivishai.com?subject=${encodeURIComponent(plan.mailSubject)}`}
        className="block text-center py-2.5 text-sm font-semibold transition-opacity hover:opacity-80"
        style={{
          background: plan.highlighted ? accentColor : "transparent",
          color: plan.highlighted ? "#fff" : accentColor,
          border: plan.highlighted ? "none" : `1px solid rgba(${accentRgb},0.35)`,
        }}
      >
        {plan.ctaLabel}
      </a>
    </div>
  </motion.div>
);

const RetailOSPricing = () => (
  <RetailOSLayout>
    {/* ── HERO ── */}
    <section className="px-5 md:px-10 lg:px-14 xl:px-20 pt-10 md:pt-16 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-600 mb-2">Pricing</p>
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
          Plans for Your Shop
        </h1>
        <p className="text-gray-400 text-sm max-w-lg">
          Works for all shop types -- grocery, pharmacy, salon, food, and more. Annual plans save 2 months.
        </p>
      </motion.div>
    </section>

    {/* ── ZONES 1-5 PLANS ── */}
    <section className="px-5 md:px-10 lg:px-14 xl:px-20 pb-12 md:pb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Zones 1 -- 5</span>
        <div className="h-px flex-1 max-w-xs" style={{ background: "rgba(226,100,38,0.2)" }} />
        <span className="text-[11px] text-gray-600">All shop types</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 max-w-3xl">
        {standardPlans.map((plan, i) => (
          <PlanCard key={plan.name} plan={plan} accentColor="#E26426" accentRgb="226,100,38" index={i} />
        ))}
      </div>

      <div className="mt-5 space-y-1">
        <p className="text-gray-600 text-xs">Annual plans = 2 months free</p>
        <p className="text-gray-600 text-xs">14-day free PRO trial for all new shops</p>
      </div>
    </section>

    {/* ── ZONE 6 ── */}
    <section
      className="px-5 md:px-10 lg:px-14 xl:px-20 py-10 md:py-14"
      style={{ borderTop: "1px solid rgba(94,53,177,0.2)" }}
    >
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Zone 6</span>
          <div className="h-px flex-1 max-w-xs" style={{ background: "rgba(94,53,177,0.3)" }} />
          <span
            className="text-[11px] px-2 py-0.5 rounded-full"
            style={{ background: "rgba(94,53,177,0.12)", color: "#9575CD", border: "1px solid rgba(94,53,177,0.3)" }}
          >
            Regulated Restricted
          </span>
        </div>

        <div
          className="p-5 max-w-xl mb-6"
          style={{ border: "1px solid rgba(94,53,177,0.25)", background: "rgba(94,53,177,0.04)" }}
        >
          <div
            className="h-[2px] mb-4"
            style={{ background: "linear-gradient(90deg, #9575CD, transparent)" }}
          />
          <h2 className="font-sora font-medium text-white text-base md:text-lg mb-2">
            Zone 6 -- Regulated Restricted
          </h2>
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-2">
            Liquor shops, tobacco shops, paan shops, and hybrid outlets. Compliance is built in from day one.
          </p>
          <p className="text-xs font-medium" style={{ color: "#9575CD" }}>
            No permanent free tier. A minimum plan is required to operate.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 max-w-3xl">
        {zone6Plans.map((plan, i) => (
          <PlanCard key={plan.name} plan={plan} accentColor="#9575CD" accentRgb="94,53,177" index={i} />
        ))}
      </div>

      <p className="mt-5 text-gray-600 text-xs">
        Zone 6 requires a minimum plan due to compliance requirements.
      </p>
    </section>

    {/* ── ENTERPRISE ── */}
    <section
      className="px-5 md:px-10 lg:px-14 xl:px-20 py-10 md:py-14"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <motion.div
        className="max-w-xl p-6 md:p-8 relative overflow-hidden"
        style={{ border: "1px solid rgba(255,255,255,0.09)", background: "rgba(255,255,255,0.02)" }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, #E26426, transparent)" }}
        />
        <p className="text-xs font-mono uppercase tracking-[0.15em] text-gray-600 mb-3">Enterprise</p>
        <h3 className="font-sora font-medium text-white text-base md:text-xl mb-3">
          Banking, Government & Enterprise?
        </h3>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          Custom pricing for government institutions, enterprise deployments, and bulk installations.
        </p>
        <a
          href="mailto:connect@ivishai.com"
          className="inline-flex items-center gap-2 text-sm font-semibold hover:underline transition-colors"
          style={{ color: "#E26426" }}
        >
          connect@ivishai.com
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </motion.div>
    </section>

    {/* ── COMPARE CTA ── */}
    <section
      className="px-5 md:px-10 lg:px-14 xl:px-20 py-8"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/retail-os/features"
          className="px-5 py-2.5 text-sm font-medium border text-center transition-all hover:opacity-90"
          style={{ borderColor: "rgba(19,216,246,0.3)", color: "#13D8F6" }}
        >
          Compare Features &rarr;
        </Link>
        <Link
          to="/retail-os/industries"
          className="px-5 py-2.5 text-sm font-medium border text-center transition-all hover:opacity-90"
          style={{ borderColor: "rgba(255,255,255,0.12)", color: "#9ca3af" }}
        >
          See All Industries &rarr;
        </Link>
      </div>
    </section>
  </RetailOSLayout>
);

export default RetailOSPricing;
