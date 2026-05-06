import React from "react";
import { motion } from "framer-motion";

const entries = [
  { org: "Ashwini Vaishnaw -- Minister of Railways, IT & Electronics, Govt. of India", context: "AI Impact Summit 2026" },
  { org: "Minister -- Government of Andhra Pradesh", context: "AI Impact Summit 2026" },
  { org: "NITI Aayog Representatives", context: "AI Impact Summit 2026" },
  { org: "HP, Air India & RBI Members", context: "AI Impact Summit 2026" },
  { org: "Basini -- CEO", context: "AI Impact Summit 2026" },
  { org: "NVIDIA Representatives", context: "AI Impact Summit 2026" },
  { org: "International Delegates -- AI Impact Summit 2026", context: "Multi-country representation across AI, policy & industry" },
];

const WhoWeHaveMet = () => {
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
          Who We Have Met
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-3">
        {entries.map((entry, i) => (
          <motion.div
            key={i}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-4 border border-white/10 hover:border-white/20 transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.03)' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <span className="text-gray-200 text-sm">{entry.org}</span>
            <span className="text-gray-500 text-xs flex-shrink-0 sm:text-right">{entry.context}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeHaveMet;
