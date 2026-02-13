import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { Shield, Zap, Globe, Heart } from "lucide-react";

const About = () => {

  return (
    <div className="min-h-screen bg-black overflow-hidden text-white">
      <Header />

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="w-full px-4 md:px-8 lg:px-20 xl:px-32 py-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="text-sm text-gray-300">About Ivish AI Quantum</span>
          </div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-[66px] font-sora tracking-tight leading-[110%] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
              Engineering Intelligence.
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#13D8F6] to-[#0F616D] bg-clip-text text-transparent">
              Empowering Possibility.
            </span>
          </motion.h1>

          <p className="text-base md:text-lg text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            Ivish AI Quantum is a deep-tech company pioneering the architecture of Industry 6.0 —
            blending AI, robotics, wearables, drones, and quantum systems to redefine human-machine synergy.
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            We build ecosystems that are adaptive, accessible, and deeply human — designed to make
            technology feel effortless, intuitive, and safe.
          </p>

          <div className="inline-flex px-5 py-2 rounded-lg bg-white/5 border border-white/10">
            <span className="text-sm text-cyan-400 italic">
              "Technology should disappear into life — not dominate it."
            </span>
          </div>
        </motion.div>
      </section>

      {/* ---------------- MISSION ---------------- */}
      <section className="px-4 md:px-8 lg:px-20 xl:px-32 py-20 border-t border-white/10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-sora mb-4 bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building a future where technology feels human.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {[
              "Create AI ecosystems that learn, listen, and adapt naturally.",
              "Design solutions that make access, language, and ability equal for all.",
              "Develop edge & quantum intelligence that empowers people — not platforms.",
              "Enable institutions to build safe, inclusive, AI-driven infrastructure."
            ].map((point, i) => (
              <div className="flex items-start gap-4" key={i}>
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2" />
                <p className="text-gray-300">{point}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-xl p-8 bg-gradient-to-br from-cyan-400/10 to-orange-500/10 border border-white/10"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              From India to the world — we are shaping Industry 6.0 through meaningful innovation,
              human-machine alignment, and universally accessible intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- VALUES ---------------- */}
      <section className="px-4 md:px-8 lg:px-20 xl:px-32 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-sora mb-4 bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
            Our Values
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: <Zap className="w-6 h-6 text-cyan-400" />,
              title: "Innovation That Matters",
              desc: "We focus on challenges that shape the next decade — accessibility, trust, and meaningful AI."
            },
            {
              icon: <Shield className="w-6 h-6 text-cyan-400" />,
              title: "Security by Design",
              desc: "Privacy & integrity are engineered into every layer — edge to cloud."
            },
            {
              icon: <Heart className="w-6 h-6 text-cyan-400" />,
              title: "Human at the Core",
              desc: "Technology should adapt to emotion, culture, and individuality — not the other way around."
            },
            {
              icon: <Globe className="w-6 h-6 text-cyan-400" />,
              title: "Global from Day One",
              desc: "Born in India, built for the world — for every market, every culture, every human."
            },
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="mb-4 p-3 bg-white/5 rounded-full inline-flex">{item.icon}</div>
              <h3 className="text-xl font-sora mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- FOUNDER'S NOTE (NEW LAYOUT) ---------------- */}
      <section className="px-4 md:px-8 lg:px-20 xl:px-32 py-24 border-t border-white/10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-sora bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
            Founder’s Note
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img
              src="/sahith.jpg"
              alt="Sahith Vutukuri"
              className="rounded-xl w-80 h-80 object-cover shadow-lg shadow-cyan-500/10"
            />
          </motion.div>

          {/* Founder Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-sora mb-2">Sahith Vutukuri</h3>
            <p className="text-gray-400 text-sm mb-6">Founder & CEO</p>

            <p className="text-gray-300 text-lg leading-relaxed">
              At Ivish AI Quantum, our vision is clear — to build intelligence that elevates human potential.
              Technology should empower, not overwhelm.  
              We are designing systems that listen, adapt, and integrate seamlessly into everyday life.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ---------------- VISION ---------------- */}
      <section className="px-4 md:px-8 lg:px-20 xl:px-32 py-20 border-t border-white/10">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="text-sm text-gray-300">Our Vision</span>
          </div>

          <h2 className="text-4xl font-sora mb-6">
            <span className="bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
              From India to the World
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#13D8F6] to-[#0F616D] bg-clip-text text-transparent">
              The Blueprint for Industry 6.0
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 p-10 rounded-xl border border-white/10 max-w-3xl mx-auto"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              By 2070, Ivish AI Quantum aims to position India as the global nucleus of human-centric AI —
              combining emotional intelligence, robotics, and quantum computing to drive sustainable,
              accessible, and intelligent global progress.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
