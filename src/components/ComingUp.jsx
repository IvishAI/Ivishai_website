import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    num: "01",
    name: "IvishAI — Intelligent Infrastructure",
    status: "Foundation",
    statusColor: "text-ink-muted",
    badgeClass: " text-ink-muted",
  },
  {
    num: "02",
    name: "VerbX — Communication",
    status: "Live",
    statusColor: "text-aqua-deep",
    badgeClass: "bg-[#13D8F6]/10 text-aqua-deep",
  },
  {
    num: "03",
    name: "Sera — Commerce",
    status: "Live",
    statusColor: "text-ember-deep",
    badgeClass: "bg-[#E26426]/10 text-ember-deep",
  },
  {
    num: "04",
    name: "More pillars to follow",
    status: "Planned",
    statusColor: "text-ink-faint",
    badgeClass: " text-ink-faint",
  },
];

const SixPillars = () => {
  return (
    <section className="bg-paper text-ink px-5 md:px-16 lg:px-40 py-16 md:py-24">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-sora text-4xl md:text-[56px] font-normal leading-[1.1] tracking-tight md:tracking-[-1.52px] text-ink">
          The Layers of Industry 6.0
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-3">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.num}
            className="flex items-center justify-between gap-4 px-5 py-4 transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.03)" }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <div className="flex items-center gap-5 min-w-0">
              <span className="text-ink-faint text-sm font-mono flex-shrink-0">
                {pillar.num}
              </span>
              <span className="text-ink-muted text-base truncate">
                {pillar.name}
              </span>
            </div>
            <span
              className={`text-xs px-3 py-1 rounded-full flex-shrink-0 ${pillar.badgeClass}`}
            >
              {pillar.status}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SixPillars;
