"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Database, Globe, Layers, Server, Wifi } from "lucide-react";

export default function LoadingPage() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    return undefined;
  }, []);

  const techIcons = [Code, Cpu, Database, Globe, Layers, Server, Wifi];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full z-10"
      >
        {/* Loading Content */}
        <div className="p-8 bg-black/50">
          <motion.h1
            className="text-4xl md:text-5xl font-sora text-center mb-6"
            style={{
              background: "linear-gradient(45deg, #FFFFFF, #E26426)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Loading
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              .
            </motion.span>
          </motion.h1>

          {/* An honest loading bar: it moves while the page loads and claims no percentage
              (it used to count 1% every 50 ms, measuring nothing). */}
          <div className="h-2 bg-white/10 rounded-full mb-4 overflow-hidden" role="progressbar" aria-label="Loading">
            <motion.div
              className="h-full w-1/3 bg-gradient-to-r from-cyan-400 to-[#E26426] rounded-full"
              animate={prefersReducedMotion ? { x: "100%" } : { x: ["-100%", "300%"] }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Status Text */}
          <div className="text-center space-y-2">
            <p className="text-gray-300 font-sora">Loading</p>
          </div>
        </div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Icons */}
        {!prefersReducedMotion &&
          techIcons.map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                scale: 0.5 + Math.random(),
              }}
              animate={{
                x: ["-10%", "110%", "110%"],
                y: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                ],
                rotate: [0, 180, 360],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Icon className="text-cyan-400/30" size={24} />
            </motion.div>
          ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAwIDBIMHYyMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEzZDhmNiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]" />
      </div>

      {/* Accessibility Toggle */}
      <motion.div
        className="absolute bottom-8 text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <button
          onClick={() => setPrefersReducedMotion(!prefersReducedMotion)}
          className="hover:text-cyan-400 transition-colors"
        >
          {prefersReducedMotion ? "Enable Animations" : "Reduce Animations"}
        </button>
      </motion.div>
    </div>
  );
}
