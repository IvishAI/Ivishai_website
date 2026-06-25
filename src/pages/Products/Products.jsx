import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const products = [
  {
    id: "verbx",
    pillar: "01",
    name: "VerbX",
    tagline: "Language Communication OS",
    status: "Live",
    statusColor: "#13D8F6",
    accent: "#13D8F6",
    accentDark: "#0F616D",
    accentRgb: "19,216,246",
    description: "The world's first Language Communication OS. Real-time voice, text, and camera translation across 2,000+ languages. Offline-capable. Institutionally secure.",
    audience: "Individuals · Institutions · Developers · Travellers",
    site: "verbxeco.com",
    stats: [
      { label: "Languages", val: "2,000+" },
      { label: "Offline", val: "Yes" },
      { label: "Models", val: "52+" },
    ],
    cta: { label: "Visit verbxeco.com", href: "https://verbxeco.com", external: true },
  },
  {
    id: "sera",
    pillar: "02",
    name: "Sera",
    tagline: "Retail Operating System",
    status: "In Market",
    statusColor: "#E26426",
    accent: "#E26426",
    accentDark: "#AD4613",
    accentRgb: "226,100,38",
    description: "The complete operating system for Indian retail. One platform, one AI, 28 industries. From a kirana store to a pharmacy to a regulated liquor shop. Works offline.",
    audience: "Retailers across 28 shop types in India",
    site: "ivishai.com/sera",
    stats: [
      { label: "Industries", val: "28" },
      { label: "Zones", val: "6" },
      { label: "Offline", val: "Yes" },
    ],
    cta: { label: "Explore Sera", href: "/sera", external: false },
  },
];

const ProductCard = ({ product, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Ambient glow behind card */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 blur-xl"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, rgba(${product.accentRgb},0.3), transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div
        className="relative rounded-2xl overflow-hidden transition-all duration-500"
        style={{
          border: `1px solid rgba(${product.accentRgb},${hovered ? 0.4 : 0.15})`,
          background: `linear-gradient(145deg, rgba(${product.accentRgb},0.06) 0%, rgba(0,0,0,0) 60%)`,
        }}
      >
        {/* Top gradient bar */}
        <div
          className="h-px w-full"
          style={{ background: `linear-gradient(90deg, ${product.accent}, ${product.accentDark}, transparent)` }}
        />

        <div className="p-6 sm:p-8 lg:p-10">
          {/* Header row */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span
                  className="text-[10px] font-mono tracking-[0.2em] uppercase px-2 py-0.5"
                  style={{ color: product.accent, background: `rgba(${product.accentRgb},0.1)`, border: `1px solid rgba(${product.accentRgb},0.25)` }}
                >
                  Pillar {product.pillar}
                </span>
                <span
                  className="text-[10px] font-mono tracking-[0.2em] uppercase"
                  style={{ color: product.statusColor }}
                >
                  ● {product.status}
                </span>
              </div>

              <h2
                className="font-sora font-normal leading-none"
                style={{
                  fontSize: "clamp(40px,7vw,88px)",
                  letterSpacing: "-3px",
                  background: `linear-gradient(110deg, #ffffff 40%, ${product.accent} 100%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {product.name}
              </h2>
              <p style={{ color: product.accent }} className="text-sm font-medium">{product.tagline}</p>
            </div>

            {/* Stat chips — desktop */}
            <div className="hidden sm:flex flex-col gap-2 text-right">
              {product.stats.map((s) => (
                <div key={s.label} className="flex items-baseline gap-2 justify-end">
                  <span className="text-gray-500 text-xs">{s.label}</span>
                  <span className="text-white font-semibold text-base" style={{ color: product.accent }}>{s.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
            {/* Description */}
            <div className="lg:col-span-3 space-y-4">
              <p className="text-gray-300 text-base leading-relaxed">{product.description}</p>
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-widest mb-1">Who it serves</p>
                <p className="text-gray-400 text-sm">{product.audience}</p>
              </div>
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-widest mb-1">Where it lives</p>
                <p className="text-sm" style={{ color: product.accent }}>{product.site}</p>
              </div>
            </div>

            {/* Right column: mobile stats + CTA */}
            <div className="lg:col-span-2 flex flex-col justify-between gap-6">
              {/* Stat chips — mobile only */}
              <div className="flex flex-wrap gap-3 sm:hidden">
                {product.stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col px-3 py-2"
                    style={{ border: `1px solid rgba(${product.accentRgb},0.2)`, background: `rgba(${product.accentRgb},0.05)` }}
                  >
                    <span className="text-gray-500 text-[10px] uppercase tracking-wider">{s.label}</span>
                    <span className="font-bold text-lg" style={{ color: product.accent }}>{s.val}</span>
                  </div>
                ))}
              </div>

              {/* CTA block */}
              <div
                className="p-5 lg:p-6 space-y-4"
                style={{ border: `1px solid rgba(${product.accentRgb},0.15)`, background: `rgba(${product.accentRgb},0.04)` }}
              >
                <p className="text-gray-400 text-xs leading-relaxed">
                  {product.id === "verbx"
                    ? "VerbX lives on its own platform. Click below to visit the full product site."
                    : "Sera lives here on ivishai.com. Explore features, industries, and pricing."}
                </p>
                {product.cta.external ? (
                  <a
                    href={product.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold transition-all duration-200 hover:opacity-85 active:scale-95"
                    style={{ background: `linear-gradient(90deg, ${product.accent}, ${product.accentDark})`, color: "#000" }}
                  >
                    {product.cta.label}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M5.25 2.5H2.5A1 1 0 0 0 1.5 3.5v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9M8.5 1.5H12.5M12.5 1.5V5.5M12.5 1.5L6 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                ) : (
                  <Link
                    to={product.cta.href}
                    className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold transition-all duration-200 hover:opacity-85 active:scale-95"
                    style={{ background: `linear-gradient(90deg, ${product.accent}, ${product.accentDark})`, color: "#fff" }}
                  >
                    {product.cta.label}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom pillar number watermark */}
        <div
          className="absolute bottom-0 right-0 font-sora font-bold leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(80px,14vw,160px)",
            color: product.accent,
            opacity: 0.04,
            lineHeight: 1,
            paddingRight: "24px",
            paddingBottom: "0",
          }}
        >
          {product.pillar}
        </div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 pt-32 md:pt-40 pb-10 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-mono tracking-[0.25em] uppercase mb-5" style={{ color: "rgba(19,216,246,0.7)" }}>
              Industry 6.0 — Live Pillars
            </p>
            <h1
              className="font-sora font-normal leading-[0.95] mb-4"
              style={{
                fontSize: "clamp(42px,8vw,100px)",
                letterSpacing: "-3px",
                background: "linear-gradient(110deg, #ffffff 0%, #a0a0a0 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Two Products.<br />
              <span
                style={{
                  background: "linear-gradient(90deg, #E26426, #13D8F6)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                One Vision.
              </span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed mt-4">
              IvishAI Quantum is building the foundational infrastructure of the next era.
              These are the two live pillars.
            </p>
          </motion.div>
        </section>

        {/* ── PRODUCT CARDS ── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 pb-16 md:pb-24 space-y-6 md:space-y-8">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </section>

        {/* ── FOOTER NOTE ── */}
        <motion.div
          className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-10 border-t border-white/5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 text-xs">
            Pillars 3–6 are in development. Each pillar is a foundational layer of Industry 6.0.
          </p>
        </motion.div>

      </div>
      <Footer />
    </>
  );
};

export default Products;
