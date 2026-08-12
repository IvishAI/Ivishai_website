import React from "react";
import { motion } from "framer-motion";

// Same five routing CTAs as the hero.
const ROUTES = [
  { label: "Explore VerbX", href: "/explore-verbx", primary: true },
  { label: "Explore Sera", href: "/sera" },
  { label: "Collaborate", href: "/collaboration" },
  { label: "Government", href: "/government" },
  { label: "Investors", href: "/investors" },
];

const ClosingCTA = () => {
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
          Pick your path.
        </h2>
        <p className="text-gray-300 text-base md:text-lg mt-6 max-w-xl mx-auto">
          Explore the products or route straight to the team that fits.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {ROUTES.map((r) =>
          r.primary ? (
            <motion.a
              key={r.label}
              href={r.href}
              className="inline-flex items-center justify-center gap-1 py-4 px-7 w-full md:w-auto hover:opacity-90 transition-opacity duration-200"
              style={{ background: '#FFF', color: '#000' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {r.label}
            </motion.a>
          ) : (
            <motion.a
              key={r.label}
              href={r.href}
              className="inline-flex items-center justify-center gap-1 border border-white py-4 px-7 w-full md:w-auto hover:bg-white/10 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {r.label}
            </motion.a>
          )
        )}
      </motion.div>
    </section>
  );
};

export default ClosingCTA;
