

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Globe, Heart, Brain, Rocket } from "lucide-react";
import Header from "../../components/carheader";
import Footer from "../../components/Footer";

const CareersPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
            Careers at Ivish 
          </h1>
          <h2
            className="font-sora font-normal leading-[100%] tracking-[-2px] mb-8"
            style={{
              background: 'linear-gradient(90deg, #FFF 0%, #E26426 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: 'clamp(32px, 6vw, 56px)'
            }}
          >
            Build the Future of Industry 6.0
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            We are not just building products. We are building the future foundations of human–machine collaboration.
          </motion.p>
        </motion.div>

        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 p-8 rounded-2xl border border-white/10 mb-16"
        >
          <p className="text-xl text-gray-300 text-center max-w-5xl mx-auto leading-relaxed">
            At Ivish AI Quantum, every idea matters, every voice counts, and every contribution helps shape a 
            world where technology dissolves barriers and empowers possibility.
          </p>
        </motion.div>

        {/* Why Work With Us Section */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl md:text-4xl font-sora text-center mb-12"
            style={{
              background: 'linear-gradient(90deg, #FFF 0%, #E26426 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Why Work With Us?
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Target size={32} />, 
                title: "Purpose with Impact", 
                desc: "Your work will touch lives globally — from empowering individuals to transforming industries and nations." 
              },
              { 
                icon: <Brain size={32} />, 
                title: "Innovation at the Core", 
                desc: "We don't add features. We create new baselines in AI, robotics, neurotech, and quantum powered ecosystems." 
              },
              { 
                icon: <Globe size={32} />, 
                title: "Global by Design", 
                desc: "Born in India, built for the world. Our team is pioneering solutions that scale across continents." 
              },
              { 
                icon: <Heart size={32} />, 
                title: "Culture of Trust", 
                desc: "We believe in openness, collaboration, and human dignity — technology should amplify people, not replace them." 
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all h-full"
              >
                <div className="text-cyan-400 mb-4">{item.icon}</div>
                <h4 className="text-xl font-sora mb-3">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Talent Network Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-sora mb-6">We're Not Hiring (Yet). But We're Listening.</h3>
            <p className="text-xl text-gray-300 mb-8">
              Right now, we're in stealth growth mode. But the future is expanding fast — and we'll soon be looking
              for brilliant minds to join our mission.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="flex-1"
            >
              <h4 className="text-2xl font-sora mb-6 text-center md:text-left">Future Roles We'll Need:</h4>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Artificial Intelligence & Machine Learning",
                  "Human–Computer Interaction & UX",
                  "Robotics, AR/VR, and Wearables",
                  "Blockchain & Quantum Computing",
                  "Business, Design, and Strategy"
                ].map((role, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-cyan-400/10 text-cyan-400 rounded-full p-1 mr-3 mt-1">
                      <ArrowRight size={14} />
                    </div>
                    <span className="text-gray-300">{role}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              className="flex-1 bg-gradient-to-br from-cyan-400/10 to-orange-500/10 p-8 rounded-2xl border border-white/10"
            >
              <h4 className="text-2xl font-sora mb-6 text-center">Join Our Talent Network</h4>
              <p className="text-gray-300 mb-8 text-center">
                If you believe your work can shape the next era of Industry 6.0, we'd love to hear from you.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-400 to-orange-500 text-black px-8 py-4 rounded-lg font-medium flex items-center gap-2 mx-auto"
              >
                <Users size={20} />
                Stay Updated on Future Opportunities
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Life at Ivish Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="bg-white/5 p-10 rounded-2xl border border-white/10 text-center"
        >
          <Rocket size={48} className="mx-auto text-cyan-400 mb-6" />
          <h3 className="text-3xl md:text-4xl font-sora mb-6">Life at Ivish AI Quantum</h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're a team of dreamers, engineers, and builders working at the edge of what's possible.
            Here, curiosity is celebrated, ideas are valued, and ambition is limitless.
            This is not just a workplace. It's a launchpad for the future.
          </p>
        </motion.div>
      </div>
    </div>
    <Footer />
  </>
);
};

export default CareersPage;