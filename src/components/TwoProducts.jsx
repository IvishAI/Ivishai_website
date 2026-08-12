import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TwoProducts = () => {
  return (
    <section className="bg-black text-white px-5 md:px-16 lg:px-40 py-16 md:py-24 border-t border-white/10">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-sora text-4xl md:text-[56px] font-normal leading-[1.1] tracking-tight md:tracking-[-1.52px] bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
          Two operating systems, live today.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* VerbX Card */}
        <motion.div
          className="p-8 border border-[#13D8F6]/30 hover:border-[#13D8F6]/60 transition-all duration-300 flex flex-col"
          style={{ background: 'rgba(19,216,246,0.04)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">Communication Infrastructure</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#13D8F6]/10 text-[#13D8F6] border border-[#13D8F6]/30">
              Live
            </span>
          </div>
          <h3 className="font-sora text-2xl text-white mb-1">VerbX</h3>
          <p className="text-[#13D8F6] text-sm mb-4">The language communication operating system.</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3 flex-1">
            VerbX is a Language Communication Operating System for multilingual institutions —
            76 languages live today, built offline-first.
          </p>
          <p className="text-gray-500 text-xs mb-6">Individuals · Institutions · Developers · Travellers</p>
          <Link
            to="/explore-verbx"
            className="inline-flex items-center gap-2 text-[#13D8F6] font-medium hover:underline transition-all duration-200"
          >
            Explore VerbX →
          </Link>
        </motion.div>

        {/* Sera Card */}
        <motion.div
          className="p-8 border border-[#E26426]/30 hover:border-[#E26426]/60 transition-all duration-300 flex flex-col"
          style={{ background: 'rgba(226,100,38,0.04)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">Retail Infrastructure</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#E26426]/10 text-[#E26426] border border-[#E26426]/30">
              Live
            </span>
          </div>
          <h3 className="font-sora text-2xl text-white mb-1">Sera</h3>
          <p className="text-[#E26426] text-sm mb-4">The operating system for Bharat retail.</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3 flex-1">
            Sera is a Retail Operating System built for Bharat's shops — billing, Khata, compliance,
            offline-first, across 28 industries.
          </p>
          <p className="text-gray-500 text-xs mb-6">Retailers across 28 industries in India</p>
          <Link
            to="/sera"
            className="inline-flex items-center gap-2 text-[#E26426] font-medium hover:underline transition-all duration-200"
          >
            Explore Sera →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TwoProducts;
