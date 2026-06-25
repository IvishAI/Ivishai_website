import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const credentials = [
  { label: "Registered Name", value: "IvishAI Quantum Pvt. Ltd." },
  { label: "Recognition", value: "DPIIT-recognised Startup India company — AI / Machine Learning sector" },
  { label: "Headquarters", value: "Hyderabad, India" },
  { label: "Funding", value: "Funded — Startup India recognised" },
  { label: "Live Products", value: "VerbX — Language OS. Sera — Retail Platform." },
  { label: "Engagements", value: "AI Impact Summit 2026 — engaged with ministers, national bodies, and international delegates" },
];

const pillars = [
  {
    num: "01",
    name: "VerbX",
    sub: "Language Communication OS",
    desc: "Language as infrastructure. 2,000+ languages. Offline. Institutionally secure. Live.",
    color: "#13D8F6",
    bg: "rgba(19,216,246,0.06)",
    border: "rgba(19,216,246,0.25)",
  },
  {
    num: "02",
    name: "Sera",
    sub: "Retail Operating System",
    desc: "Commerce as infrastructure. 28 industries. 6 zones. AI-first. Offline-first. Live.",
    color: "#E26426",
    bg: "rgba(226,100,38,0.06)",
    border: "rgba(226,100,38,0.25)",
  },
  {
    num: "03",
    name: "To Be Announced",
    sub: "Pillar 3",
    desc: "—",
    color: "#6B6B6B",
    bg: "rgba(255,255,255,0.03)",
    border: "rgba(255,255,255,0.08)",
  },
  {
    num: "04",
    name: "To Be Announced",
    sub: "Pillar 4",
    desc: "—",
    color: "#6B6B6B",
    bg: "rgba(255,255,255,0.03)",
    border: "rgba(255,255,255,0.08)",
  },
  {
    num: "05",
    name: "To Be Announced",
    sub: "Pillar 5",
    desc: "—",
    color: "#6B6B6B",
    bg: "rgba(255,255,255,0.03)",
    border: "rgba(255,255,255,0.08)",
  },
  {
    num: "06",
    name: "iii",
    sub: "Invisible Intelligent Infrastructure",
    desc: "Long-term convergence of all pillars into a unified intelligent layer.",
    color: "#AD4613",
    bg: "rgba(173,70,19,0.06)",
    border: "rgba(173,70,19,0.25)",
  },
];

const founderNote = [
  "Great leaders do not claim to have all the answers — or carry the weight of every decision alone. Their power lies in choosing the right team, inspiring unwavering trust, and empowering those around them to rise together. That is how legacies are forged — through unity, trust, and shared vision.",
  "I founded IvishAI Quantum on a simple conviction: the most important problems are the ones nobody has properly solved yet.",
  "We are in the earliest days of what I believe will be the defining technological shift of our generation — Industry 6.0. Not the internet. Not smartphones. Not even generative AI. The real shift is when all of these stop being things people use — and start being things people live within.",
  "Language will be the first wall to fall. Commerce infrastructure will be the second. What we are building at IvishAI Quantum is not a product suite. It is a new baseline — for how an individual communicates, how a retailer operates, how an institution serves the person across the counter.",
  "We are building this from India — the most linguistically complex, commercially diverse, and digitally underserved large market on earth. If we can solve it here, we can solve it anywhere.",
  "The best is genuinely ahead — not just for IvishAI Quantum, but for every person our systems will one day serve.",
];

const About = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden text-white">
      <Header />

      {/* ── SECTION 1: WHO WE ARE ── */}
      <section className="w-full px-4 md:px-8 lg:px-20 xl:px-32 pt-36 pb-20">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="text-sm text-gray-300">About IvishAI Quantum</span>
          </div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-[66px] font-sora tracking-tight leading-[110%] mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
              Who We Are
            </span>
          </motion.h1>

          <p className="text-base md:text-lg text-gray-300 mb-6 max-w-2xl leading-relaxed">
            IvishAI Quantum is a DPIIT-recognised deep-tech company headquartered in Hyderabad, India.
            We build the foundational infrastructure of Industry 6.0 — the convergence of language
            intelligence, AI-driven commerce systems, and edge computing.
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
            We are not a product company in the traditional sense. We are an ecosystem builder —
            creating the operating layers that individuals, institutions, and nations will depend on.
            Every product we build is invisible when it works, indispensable when it matters, and
            trusted because integrity was engineered in from the beginning.
          </p>
        </motion.div>
      </section>

      {/* ── SECTION 2: COMPANY CREDENTIALS ── */}
      <section className="px-4 md:px-8 lg:px-20 xl:px-32 py-20 border-t border-white/10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-sora mb-4 bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
            Company Credentials
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {credentials.map((cred, i) => (
            <motion.div
              key={cred.label}
              className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-4 bg-white/5 border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <span className="text-gray-400 text-sm sm:w-44 flex-shrink-0 font-medium">{cred.label}</span>
              <span className="text-gray-200 text-sm">{cred.value}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: FOUNDER'S NOTE — full-width centered layout ── */}
      <section className="px-4 md:px-8 lg:px-20 xl:px-32 py-24 border-t border-white/10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-sora bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
            Founder's Note
          </h2>
        </motion.div>

        {/* Centered founder identity block */}
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative mb-6">
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-30"
              style={{ background: 'radial-gradient(circle, #13D8F6 0%, #E26426 100%)' }}
            />
            <img
              src="/sahith.jpg"
              alt="Sahith Vutukuri"
              className="relative w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-2 border-white/20 shadow-xl"
              style={{ boxShadow: '0 0 40px rgba(19,216,246,0.15)' }}
            />
          </div>
          <h3 className="text-2xl font-sora text-white mb-1">Sahith Vutukuri</h3>
          <p className="text-gray-400 text-sm">Founder & CEO, IvishAI Quantum Pvt. Ltd.</p>
        </motion.div>

        {/* Quote block — full width centered */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="border-l-4 border-[#E26426] pl-6 md:pl-8 space-y-5">
            {founderNote.map((para, i) => (
              <p key={i} className="text-gray-300 leading-relaxed text-base md:text-lg">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-8 inline-block px-5 py-3 bg-white/5 border border-[#13D8F6]/30">
            <span className="text-sm text-cyan-400 italic">
              "The best is genuinely ahead — not just for IvishAI Quantum, but for every person our systems will one day serve."
            </span>
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 4: 6-PILLAR ARCHITECTURE — card grid with theme colors ── */}
      <section className="px-4 md:px-8 lg:px-20 xl:px-32 py-20 border-t border-white/10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-sora bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent mb-3">
            The 6-Pillar Architecture
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Six pillars. One vision. The foundational infrastructure of Industry 6.0.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              className="relative p-6 flex flex-col gap-3 overflow-hidden"
              style={{ border: `1px solid ${pillar.border}`, background: pillar.bg }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Pillar number — large watermark */}
              <span
                className="absolute top-2 right-4 font-sora font-bold select-none pointer-events-none"
                style={{ fontSize: '64px', lineHeight: 1, color: pillar.color, opacity: 0.12 }}
              >
                {pillar.num}
              </span>

              <div>
                <span
                  className="text-xs font-mono font-medium mb-2 block"
                  style={{ color: pillar.color }}
                >
                  Pillar {pillar.num}
                </span>
                <h3 className="text-white font-semibold text-lg leading-tight">{pillar.name}</h3>
                <p className="text-sm mt-0.5" style={{ color: pillar.color, opacity: 0.8 }}>{pillar.sub}</p>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, ${pillar.color}, transparent)`, opacity: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
