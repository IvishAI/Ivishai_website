import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Navigation Header */}
      <nav className="absolute top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 py-4 px-6 md:px-28">
        <motion.h1
          className="text-xl font-sora bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          IvishAI
        </motion.h1>
      </nav>

      {/* Main Content */}
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated 404 Number */}
        <motion.h1
          className="text-[128px] md:text-[200px] font-sora font-normal leading-[100%] tracking-[-4px] mb-6"
          style={{
            background: 'linear-gradient(90deg, #FFF 0%, #E26426 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          404
        </motion.h1>

        {/* Error Message */}
        <motion.p
          className="text-lg text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* You've discovered uncharted territory. Let's get you back to familiar ground. */}
          The page is under development, Stay Tuned !!!!!!
        </motion.p>

        {/* Navigation Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="border border-white px-8 py-3 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} />
            Go Back
          </motion.button>


        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-10 h-10 bg-white/5 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 bg-white/5 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-12 h-12 bg-cyan-400/10 rounded-full"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Error404;