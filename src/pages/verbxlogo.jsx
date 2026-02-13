import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const VerbXLogoStory = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white font-sora overflow-hidden relative">
      {/* Close Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-8 right-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 group"
      >
        <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
      </button>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20">
        
        {/* Main Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <img
            src="/verbx-logo.svg"
            alt="VerbX Logo"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 via-white to-cyan-400 bg-clip-text text-transparent"
        >
          The Story Behind VerbX
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-gray-400 text-lg md:text-xl mb-20 max-w-3xl mx-auto"
        >
          Where two languages meet, understanding begins
        </motion.p>

        {/* Flowing Waves Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-6xl mx-auto mb-32"
        >
          {/* Waves Illustration */}
          <div className="relative w-full h-64 md:h-80 mb-12 overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-900/50 to-transparent">
            <svg
              viewBox="0 0 1400 400"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Orange Wave */}
              <motion.path
                d="M0,200 Q100,100 200,200 T400,200 T600,200"
                stroke="#f97316"
                strokeWidth="40"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
              />
              
              {/* Cyan Wave */}
              <motion.path
                d="M800,200 Q900,100 1000,200 T1200,200 T1400,200"
                stroke="#22d3ee"
                strokeWidth="40"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
              />

              {/* Connecting/Intertwining waves */}
              <motion.path
                d="M600,200 Q650,250 700,200 Q750,150 800,200"
                stroke="url(#gradient)"
                strokeWidth="40"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }}
              />

              {/* Gradient Definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Explanation Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="text-center space-y-6"
          >
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              These two flowing lines represent different languages — distinct in tone, shape, and rhythm. 
              As they move toward each other, they begin to mirror, respond, and intertwine — just like a real conversation.
            </p>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              <span className="bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent font-semibold">VerbX</span>: translating not just words, but emotion, intention, and human meaning across any language.
            </p>
          </motion.div>
        </motion.div>

        {/* Complete Logo with Intertwined Waves */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="relative bg-gradient-to-br from-neutral-900 to-black rounded-3xl p-12 md:p-16 border border-white/10">
            {/* Intertwined Logo */}
            <div className="flex justify-center mb-8">
              <svg
                viewBox="0 0 400 200"
                className="w-full max-w-md h-auto"
              >
                {/* Left wave (orange) */}
                <motion.path
                  d="M0,100 Q50,50 100,100 Q150,150 200,100"
                  stroke="#f97316"
                  strokeWidth="30"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 3.2 }}
                />
                
                {/* Right wave (cyan) - intertwined */}
                <motion.path
                  d="M200,100 Q250,50 300,100 Q350,150 400,100"
                  stroke="#22d3ee"
                  strokeWidth="30"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 3.4 }}
                />

                {/* Center intertwining */}
                <motion.path
                  d="M150,100 Q175,120 200,100 Q225,80 250,100"
                  stroke="url(#centerGradient)"
                  strokeWidth="30"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 3.8 }}
                />

                <defs>
                  <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* VerbX Text */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 4.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-center"
              style={{
                background: "linear-gradient(90deg, #f97316 0%, #22d3ee 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Cabinet Grotesk, sans-serif",
              }}
            >
              VerbX
            </motion.h2>
          </div>
        </motion.div>

        {/* Logo Meaning Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.8 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20"
        >
          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🌊</span>
            </div>
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Flow</h3>
            <p className="text-gray-400 text-sm">Natural, seamless communication that feels effortless and human</p>
          </div>

          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🔗</span>
            </div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Connection</h3>
            <p className="text-gray-400 text-sm">Bridging languages and cultures, bringing people together</p>
          </div>

          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <span className="text-2xl">💫</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Unity</h3>
            <p className="text-gray-400 text-sm">Two languages becoming one conversation, perfectly synchronized</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 5 }}
          className="text-center"
        >
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-cyan-400 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform duration-300"
          >
            Back to VerbX
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default VerbXLogoStory;
