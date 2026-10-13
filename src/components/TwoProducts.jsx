import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TwoProducts = () => {
  return (
    <section className="bg-paper text-ink px-5 md:px-16 lg:px-40 py-16 md:py-24 border-t">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-sora text-4xl md:text-[56px] font-normal leading-[1.1] tracking-tight md:tracking-[-1.52px] text-ink">
          Two operating systems, live today.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* VerbX Card */}
        <motion.div
          className="p-8 hover:border-aqua-deep/60 transition-all duration-300 flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-ink-faint font-mono uppercase tracking-wider">
              Communication Infrastructure
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#13D8F6]/10 text-aqua-deep">
              Live
            </span>
          </div>
          <h3 className="font-sora text-2xl text-ink mb-1">VerbX</h3>
          <p className="text-aqua-deep text-sm mb-4">
            The language communication operating system.
          </p>
          <p className="text-ink-muted text-sm leading-relaxed mb-3 flex-1">
            VerbX is a Language Communication Operating System for multilingual
            institutions — 76 languages live today, built offline-first.
          </p>
          <p className="text-ink-faint text-xs mb-6">
            Individuals · Institutions · Developers · Travellers
          </p>
          <Link
            to="/explore-verbx"
            className="inline-flex items-center gap-2 text-aqua-deep font-medium hover:underline transition-all duration-200"
          >
            Explore VerbX →
          </Link>
        </motion.div>

        {/* Sera Card */}
        <motion.div
          className="p-8 hover:border-ember-deep/60 transition-all duration-300 flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-ink-faint font-mono uppercase tracking-wider">
              Retail Infrastructure
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#E26426]/10 text-ember-deep">
              Live
            </span>
          </div>
          <h3 className="font-sora text-2xl text-ink mb-1">Sera</h3>
          <p className="text-ember-deep text-sm mb-4">
            The operating system for Bharat retail.
          </p>
          <p className="text-ink-muted text-sm leading-relaxed mb-3 flex-1">
            Sera is a Retail Operating System built for Bharat's shops —
            billing, Khata, compliance, offline-first, across 27 industries.
          </p>
          <p className="text-ink-faint text-xs mb-6">
            Retailers across 27 industries in India
          </p>
          <Link
            to="/sera"
            className="inline-flex items-center gap-2 text-ember-deep font-medium hover:underline transition-all duration-200"
          >
            Explore Sera →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TwoProducts;
