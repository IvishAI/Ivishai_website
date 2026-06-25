import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const highlights = [
  { label: "DPIIT Recognised", detail: "Startup India — AI/ML sector" },
  { label: "2 Live Products", detail: "VerbX + Sera — both in market" },
  { label: "52 AI Models", detail: "Trained and deployed" },
  { label: "28 Industries", detail: "Sera retail coverage" },
  { label: "200+ Languages", detail: "VerbX live coverage" },
  { label: "8 Filed Patents", detail: "5 Utility + 3 Design" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const Investors = () => {
  const [form, setForm] = useState({ name: "", fund: "", email: "", website: "", interest: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Investor Enquiry — ${form.fund || form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nFund: ${form.fund}\nEmail: ${form.email}\nWebsite: ${form.website}\nInterest: ${form.interest}`);
    window.location.href = `mailto:ivishai.investors@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 pt-32 md:pt-40 pb-12">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-mono tracking-[0.25em] uppercase mb-4" style={{ color: "rgba(19,216,246,0.7)" }}>
              IvishAI Quantum — Investors
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
              Why Should<br />
              <span style={{
                background: "linear-gradient(90deg, #13D8F6, #E26426)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Investors Care?
              </span>
            </h1>
            <p className="text-gray-400 text-base max-w-xl leading-relaxed">
              We are building the foundational infrastructure of Industry 6.0 — from India, for the world. Two live products. Eight patents. A market of billions.
            </p>
          </motion.div>
        </section>

        {/* ── HIGHLIGHTS ── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-12 border-t border-white/5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                className="p-4 rounded-xl border border-white/8 text-center"
                style={{ background: "rgba(255,255,255,0.02)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <p className="text-white font-semibold text-sm mb-1">{h.label}</p>
                <p className="text-gray-500 text-xs">{h.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── INVESTOR RELATIONS ── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-12 border-t border-white/5">
          <motion.div {...fadeUp} className="max-w-2xl">
            <h2 className="font-sora text-2xl md:text-3xl font-normal text-white mb-4">Investor Relations</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              IvishAI Quantum is raising to accelerate deployment of Sera across India's 63 million retail stores, and scale VerbX to 2,000+ languages globally. We are DPIIT-recognised, with a full patent portfolio and two products in the market.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full data room access (VC decks, financials, cap table, GTM plan, technical reports) is available upon request and NDA execution.
            </p>
          </motion.div>
        </section>

        {/* ── INVESTOR FORM ── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-12 border-t border-white/5">
          <motion.div {...fadeUp} className="max-w-xl">
            <h2 className="font-sora text-2xl font-normal text-white mb-2">Request Investor Access</h2>
            <p className="text-gray-500 text-sm mb-8">Fill in your details and we'll reach out within 48 hours.</p>

            {submitted ? (
              <div className="p-6 rounded-xl border border-[#13D8F6]/30 text-center" style={{ background: "rgba(19,216,246,0.05)" }}>
                <p className="text-[#13D8F6] font-medium">Thank you — we'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: "name", label: "Your Name", placeholder: "Rahul Sharma", required: true },
                  { name: "fund", label: "Fund / Organisation", placeholder: "Accel Partners", required: false },
                  { name: "email", label: "Email", placeholder: "rahul@accel.com", required: true, type: "email" },
                  { name: "website", label: "Website", placeholder: "accel.com", required: false },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs text-gray-500 mb-1 uppercase tracking-wider">{field.label}</label>
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#13D8F6]/50 transition-colors duration-200"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs text-gray-500 mb-1 uppercase tracking-wider">Area of Interest</label>
                  <textarea
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    placeholder="e.g. VerbX scaling, Sera retail, overall equity round..."
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#13D8F6]/50 transition-colors duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-sm font-semibold transition-all duration-200 hover:opacity-85"
                  style={{ background: "linear-gradient(90deg, #13D8F6, #0F616D)", color: "#000" }}
                >
                  Request Access
                </button>
              </form>
            )}
          </motion.div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Investors;
