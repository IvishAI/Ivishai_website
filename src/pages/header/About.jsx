import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import {
  FOUNDERS,
  ADVISORS,
  TIMELINE,
  CREDENTIALS,
  TECH_PARTNERS,
  INSTITUTIONAL_SUPPORT,
} from "../../data/site";

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
            <span className="text-sm text-gray-300">Who We Are</span>
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

          <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
            IvishAI is an infrastructure company building operating systems for real-world
            industries — starting with communication (VerbX) and commerce (Sera), and extending
            toward the broader vision of Industry 6.0.
          </p>
        </motion.div>
      </section>

      {/* ── SECTION 2: OUR JOURNEY ── */}
      <section className="px-4 md:px-8 lg:px-20 xl:px-32 py-20 border-t border-white/10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-sora mb-4 bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
            Our Journey
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Company timeline — confirmed milestones.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {TIMELINE.map((m, i) => (
            <motion.div
              key={m.when}
              className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-4 bg-white/5 border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <span className="text-sm sm:w-44 flex-shrink-0 font-medium" style={{ color: "#13D8F6" }}>
                {m.when}
              </span>
              <span className="text-gray-200 text-sm">{m.what}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: FOUNDING TEAM ── */}
      <section className="px-4 md:px-8 lg:px-20 xl:px-32 py-20 border-t border-white/10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-sora bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent mb-3">
            The people behind IvishAI.
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">Founding Team</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {FOUNDERS.map((f, i) => (
            <motion.div
              key={f.slug}
              className="relative p-6 flex flex-col gap-3 overflow-hidden bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <img
                src={f.photo}
                alt={f.name}
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />

              <div>
                <h3 className="text-white font-semibold text-lg leading-tight">{f.name}</h3>
                <p className="text-sm mt-0.5" style={{ color: "#13D8F6", opacity: 0.8 }}>
                  {f.role}
                </p>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">{f.card}</p>

              <div className="flex items-center gap-4 mt-auto pt-2">
                <Link
                  to={`/about/${f.slug}`}
                  className="text-sm text-cyan-400 hover:text-white transition-colors duration-200"
                >
                  Read more →
                </Link>
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  LinkedIn ↗
                </a>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, #13D8F6, transparent)", opacity: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: ADVISORS & MENTORS ── */}
      <section className="px-4 md:px-8 lg:px-20 xl:px-32 py-20 border-t border-white/10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-sora bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent mb-3">
            The people guiding us.
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">Advisors &amp; Mentors</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {ADVISORS.map((a, i) => (
            <motion.div
              key={a.name}
              className="relative p-6 flex gap-5 overflow-hidden bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <img
                src={a.photo}
                alt={a.name}
                className="w-24 md:w-28 aspect-[4/5] flex-shrink-0 object-cover"
                loading="lazy"
              />

              <div className="min-w-0 flex flex-col gap-2">
                <div>
                  <h3 className="text-white font-semibold text-lg leading-tight">{a.name}</h3>
                  <p className="text-sm mt-0.5" style={{ color: "#E26426", opacity: 0.9 }}>
                    {a.role}
                  </p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{a.credibility}</p>
                <a
                  href={a.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200 mt-auto"
                >
                  LinkedIn ↗
                </a>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, #E26426, transparent)", opacity: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: COMPANY CREDENTIALS ── */}
      <section className="px-4 md:px-8 lg:px-20 xl:px-32 py-20 border-t border-white/10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-sora mb-4 bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
            Recognised and registered.
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">Company Credentials</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {CREDENTIALS.map((c, i) => (
            <motion.div
              key={c.label}
              className="flex items-center gap-4 p-4 bg-white/5 border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              {c.logo ? (
                <span className="flex h-9 w-24 flex-shrink-0 items-center justify-center bg-white px-2 py-1.5">
                  <img
                    src={c.logo}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </span>
              ) : (
                <span
                  className="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                  style={{ background: "#13D8F6" }}
                />
              )}
              <span className="text-gray-200 text-sm">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: INSTITUTIONAL SUPPORT ── */}
      <section className="px-4 md:px-8 lg:px-20 xl:px-32 py-16 border-t border-white/10">
        <motion.div
          className="max-w-3xl mx-auto p-4 bg-white/5 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1">
            Institutional Support
          </span>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            {INSTITUTIONAL_SUPPORT}
          </p>
        </motion.div>
      </section>

      {/* ── SECTION 7: TECHNOLOGY PARTNERS ── */}
      <section className="px-4 md:px-8 lg:px-20 xl:px-32 py-20 border-t border-white/10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-sora bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent mb-3">
            The infrastructure we build on.
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">Technology Partners</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {TECH_PARTNERS.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-6 flex items-start gap-5 overflow-hidden bg-white/5 border border-white/10 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex h-16 w-24 flex-shrink-0 items-center justify-center">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-16 w-auto max-w-full object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-semibold text-lg leading-tight">
                  {p.name} <span className="text-gray-400 text-sm">↗</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">{p.note}</p>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, #E26426, transparent)", opacity: 0.4 }}
              />
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── SECTION 8: QUICK COMPANY CREDIBILITY ── */}
      <section className="px-4 md:px-8 lg:px-20 xl:px-32 py-20 border-t border-white/10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="p-6 bg-white/5 border border-white/10">
            <p className="font-sora text-xl md:text-2xl leading-snug text-white">
              DPIIT-recognised, MSME-registered deep-tech company with two live products and 8
              patents (1 granted).
            </p>
            <div className="mt-6">
              <Link
                to="/recognition"
                className="text-sm text-cyan-400 hover:text-white transition-colors duration-200"
              >
                Full proof on Recognition &amp; Media →
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
