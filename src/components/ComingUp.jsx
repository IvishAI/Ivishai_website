import React from "react";
import { motion } from "framer-motion";

const pillars = [
  { num: "01", name: "IvishAI — Intelligent Infrastructure", status: "Foundation", statusColor: "text-gray-200", badgeClass: "bg-white/10 text-gray-200 border border-white/20" },
  { num: "02", name: "VerbX — Communication", status: "Live", statusColor: "text-[#13D8F6]", badgeClass: "bg-[#13D8F6]/10 text-[#13D8F6] border border-[#13D8F6]/30" },
  { num: "03", name: "Sera — Commerce", status: "Live", statusColor: "text-[#E26426]", badgeClass: "bg-[#E26426]/10 text-[#E26426] border border-[#E26426]/30" },
  { num: "04", name: "More pillars to follow", status: "Planned", statusColor: "text-gray-500", badgeClass: "bg-white/5 text-gray-500 border border-white/10" },
];

const SixPillars = () => {
  return (
    <section className="bg-black text-white px-5 md:px-16 lg:px-40 py-16 md:py-24">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-sora text-4xl md:text-[56px] font-normal leading-[1.1] tracking-tight md:tracking-[-1.52px] bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
          The Layers of Industry 6.0
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-3">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.num}
            className="flex items-center justify-between gap-4 px-5 py-4 border border-white/10 hover:border-white/20 transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.03)' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <div className="flex items-center gap-5 min-w-0">
              <span className="text-gray-500 text-sm font-mono flex-shrink-0">{pillar.num}</span>
              <span className="text-gray-200 text-base truncate">{pillar.name}</span>
            </div>
            <span className={`text-xs px-3 py-1 rounded-full flex-shrink-0 ${pillar.badgeClass}`}>
              {pillar.status}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SixPillars;
