import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Users, Shield, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden text-white">
      <Header />


      <section className="w-full flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-16 xl:px-24 py-8 md:py-16 lg:py-20 gap-6 md:gap-12">
    
        <motion.div 
          className="flex-1 text-center lg:text-left lg:pr-8 xl:pr-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 py-1 rounded-full bg-white/5">
            <svg width="14" height="15" viewBox="0 0 14 15" className="mr-2">
              <circle cx="7" cy="7.5" r="7" fill="url(#gradient)"/>
              <defs>
                <linearGradient id="gradient" x1="-0.036" y1="14.645" x2="9.885" y2="0.472">
                  <stop stopColor="#13D8F6"/>
                  <stop offset="1" stopColor="#0F616D"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="text-sm">About Us</span>
          </div>

          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-[66px] font-sora leading-[100%] tracking-tight mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
            Engineering Intelligence. 
            </span>
            <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-[#13D8F6] to-[#0F616D] bg-clip-text text-transparent md:mt-2">
            Empowering Possibility.
            </span>
          </motion.h1>

          <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            "At Ivish AI Quantum, we are not just building with AI — we are redefining how humans and 
machines connect.
 We believe technology should dissolve barriers, not reinforce them.
 Our mission is simple yet bold: create systems that feel less like tools, and more like trust."
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="w-full lg:w-[35%] xl:w-[30%] relative max-w-[400px] lg:max-w-none"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="border-l-4 border-cyan-400 pl-3 md:pl-4">
            <img
              src="/sahith.jpg"
              alt="Founder"
              className="rounded-xl w-full aspect-[3/4] object-cover"
            />
            <div className="mt-3 md:mt-4 space-y-1">
              <p className="text-lg md:text-xl font-sora">Sahith</p>
              <p className="text-gray-400 text-xs md:text-sm">Founder & CEO</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="px-4 md:px-8 lg:px-16 xl:px-24 py-8 md:py-16 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {/* Innovation */}
          <motion.div 
            className="border-l-4 border-cyan-400 pl-3 md:pl-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <div className="p-2 bg-white/5 rounded-full">
                <Zap className="w-4 h-4 md:w-5 md:h-5 text-cyan-400"/>
              </div>
              <h3 className="text-lg md:text-xl xl:text-2xl font-sora">Next-Level Innovation</h3>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              We're not just using AI — we’re redefining how it works for real people.
            </p>
          </motion.div>

          {/* Impact */}
          <motion.div 
            className="border-l-4 border-cyan-400 pl-3 md:pl-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <div className="p-2 bg-white/5 rounded-full">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-cyan-400"/>
              </div>
              <h3 className="text-lg md:text-xl xl:text-2xl font-sora">Real Impact</h3>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Our mission is simple: make life better for those left behind by tech.
            </p>
          </motion.div>

          {/* Security */}
          <motion.div 
            className="border-l-4 border-cyan-400 pl-3 md:pl-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <div className="p-2 bg-white/5 rounded-full">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-cyan-400"/>
              </div>
              <h3 className="text-lg md:text-xl xl:text-2xl font-sora">Trusted Security</h3>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Security isn't a feature — it’s a foundation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="px-4 md:px-8 lg:px-16 xl:px-24 py-8 md:py-16 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            className="inline-block mb-4 md:mb-6 px-3 py-1 rounded-full bg-black"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-sm">Our Promise</span>
          </motion.div>

          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl xl:text-[46px] font-sora leading-[100%] mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
              Making AI Accessible
            </span>
            <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-[#13D8F6] to-[#0F616D] bg-clip-text text-transparent md:mt-2">
              For Everyone
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
            {/* Individuals */}
            <motion.div 
              className="space-y-2 md:space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg md:text-xl font-sora">For Individuals</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                We craft experiences that restore agency, dignity, and expression.
                No labels. No limits. Just you — amplified.
              </p>
            </motion.div>

            {/* Organizations */}
            <motion.div 
              className="space-y-2 md:space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg md:text-xl font-sora">For Teams & Orgs</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                We build systems that understand language, emotion, and intent —
                so your ideas don’t just move forward — they resonate.
              </p>
            </motion.div>

            {/* Governments */}
            <motion.div 
              className="space-y-2 md:space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg md:text-xl font-sora">For Governments & NGOs</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Inclusion isn’t compliance. It’s evolution.
                We partner with those reshaping equity, access, and digital humanity —
                because the future should work for everyone
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;