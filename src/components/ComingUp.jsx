import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Shield, Zap, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductsComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-24 md:py-32">

      {/* Headings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1
          className="font-sora font-normal leading-[100%] tracking-[-3px] mb-4"
          style={{
            background: 'linear-gradient(90deg, #D0D0D0 0%, #5F5F5F 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: 'clamp(48px, 8vw, 96px)'
          }}
        >
          Flagship Product
        </h1>

        <h2
          className="font-sora font-normal leading-[100%] tracking-[-2px] mb-8"
          style={{
            background: 'linear-gradient(90deg, #FFF 0%, #E26426 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: 'clamp(32px, 6vw, 64px)'
          }}
        >
          Meet VerbX — The World's First Language OS from India
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mt-6 leading-relaxed"
        >
          VerbX is an AI communication ecosystem that enables natural, real-time understanding
          across voices, accents, and contexts — built on emotion-aware intelligence, privacy,
          and edge AI.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-4"
        >
          A single platform that powers assistive devices, enterprises, and smart environments.
        </motion.p>
      </motion.div>

      {/* Features Grid */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <MessageCircle className="w-6 h-6" />,
              title: "Real-Time Understanding",
              description: "Natural communication across voices, accents, and contexts with instant processing"
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Emotion-Aware Intelligence",
              description: "AI that understands context, emotion, and intent for meaningful interactions"
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Privacy & Edge AI",
              description: "Built with privacy-first design and edge computing for secure, local processing"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-400/30
                         transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyan-400/10 rounded-lg text-cyan-400
                                group-hover:bg-cyan-400/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-sora">{feature.title}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-gray-300 mb-8">
            Discover how VerbX is redefining human-machine communication
          </p>

          {/* -------- BUTTON ROW (UPDATED) -------- */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">

            {/* Learn More */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-400 to-orange-500 text-black px-10 py-4 rounded-lg
                         font-medium flex items-center gap-2 hover:from-cyan-500 hover:to-orange-600
                         transition-all"
              onClick={() => navigate('/products')}
            >
              Learn More About VerbX
              <ArrowRight size={20} />
            </motion.button>

            {/* Get Early Access */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-400 to-orange-500 text-black px-10 py-4 rounded-lg
                         font-medium flex items-center gap-2 hover:from-cyan-500 hover:to-orange-600
                         transition-all"
              onClick={() => navigate('/getearlyaccess')}
            >
              <Mail size={20} />
              Get Early Access
            </motion.button>

          </div>
          {/* -------- END BUTTON ROW -------- */}

        </motion.div>

      </div>
    </div>
  );
};

export default ProductsComingSoon;
