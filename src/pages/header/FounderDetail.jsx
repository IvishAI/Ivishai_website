import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { getFounder } from "../../data/site";

const FounderDetail = () => {
  const { slug } = useParams();
  const f = getFounder(slug);

  if (!f) return <Navigate to="/about" replace />;

  return (
    <div className="min-h-screen bg-black overflow-hidden text-white">
      <Header />

      {/* ── HERO ── */}
      <section className="w-full px-4 md:px-8 lg:px-20 xl:px-32 pt-36 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <Link
            to="/about"
            className="inline-block mb-8 text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            ← Founding team
          </Link>

          <div className="grid gap-10 md:grid-cols-[240px_1fr] md:items-end max-w-5xl">
            <img
              src={f.photo}
              alt={f.name}
              className="w-full max-w-[240px] aspect-[4/5] object-cover border border-white/10"
            />

            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                <span className="text-sm text-gray-300">{f.role}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora tracking-tight leading-[110%] mb-6">
                <span className="bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
                  {f.name}
                </span>
              </h1>

              <a
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-3 bg-white/5 border border-white/10 text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Connect on LinkedIn ↗
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── PERSONAL NOTE ── */}
      <section className="px-4 md:px-8 lg:px-20 xl:px-32 py-20 border-t border-white/10">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-sora mb-8 bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
            Personal note
          </h2>

          {f.personalNote ? (
            <div className="border-l-4 border-[#E26426] pl-6 md:pl-8">
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {f.personalNote}
              </p>
            </div>
          ) : (
            <p className="text-gray-400 text-base md:text-lg">
              A personal note from {f.name.split(" ")[0]} is coming soon.
            </p>
          )}
        </motion.div>
      </section>

      {/* ── ABOUT ── */}
      <section className="px-4 md:px-8 lg:px-20 xl:px-32 py-20 border-t border-white/10">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-sora mb-8 bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
            About
          </h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">{f.about}</p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default FounderDetail;
