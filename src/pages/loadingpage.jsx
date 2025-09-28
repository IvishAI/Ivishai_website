"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Cpu, Database, Globe, Layers, Server, Wifi } from "lucide-react"

export default function LoadingPage() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing")
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1))
    }, 50)

    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        switch (prev) {
          case "Initializing": return "Connecting to servers"
          case "Connecting to servers": return "Loading data"
          case "Loading data": return "Preparing interface"
          default: return "Almost there"
        }
      })
    }, 2000)

    return () => {
      clearInterval(interval)
      clearInterval(textInterval)
    }
  }, [])

  const techIcons = [Code, Cpu, Database, Globe, Layers, Server, Wifi]

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
        <div className="border border-white/10 rounded-xl p-8 backdrop-blur-lg bg-black/50">
          <motion.h1
            className="text-4xl md:text-5xl font-sora text-center mb-6"
            style={{
              background: 'linear-gradient(45deg, #FFFFFF, #E26426)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
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

          {/* Progress Bar */}
          <div className="h-2 bg-white/10 rounded-full mb-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-[#E26426]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>

          {/* Status Text */}
          <motion.div
            key={loadingText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-2"
          >
            <p className="text-gray-300 font-sora">{loadingText}</p>
            <p className="text-sm text-cyan-400">{progress}%</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Icons */}
        {!prefersReducedMotion && techIcons.map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: 0.5 + Math.random()
            }}
            animate={{
              x: ["-10%", "110%", "110%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
              rotate: [0, 180, 360],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
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
  )
}