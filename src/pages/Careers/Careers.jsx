import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Globe, Heart, Brain, Rocket, Sparkles, Zap, Star } from "lucide-react";
import Header from "../../components/carheader";
import Footer from "../../components/Footer";

const CareersPage = () => {


  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white overflow-hidden">

        {/* Hero Section - Keeping Diagonal Split */}
        <div className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
            <div
              className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-20"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)"
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          </div>

          <div className="relative z-10 px-6 md:px-16 lg:px-24 py-24 md:py-32 w-full">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="max-w-3xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 mb-6 md:mb-8"
                >
                  <div className="h-px w-8 md:w-12 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                  <span className="text-cyan-400 text-xs md:text-sm font-medium tracking-wider uppercase">Join Our Mission</span>
                </motion.div>

                <h1
                  className="font-sora font-normal leading-[90%] tracking-[-3px] md:tracking-[-4px] mb-4 md:mb-6"
                  style={{
                    background: 'linear-gradient(90deg, #D0D0D0 0%, #5F5F5F 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: 'clamp(48px, 10vw, 120px)'
                  }}
                >
                  Careers at<br />Ivish
                </h1>

                <h2
                  className="font-sora font-normal leading-[95%] tracking-[-2px] md:tracking-[-3px] mb-8 md:mb-10"
                  style={{
                    background: 'linear-gradient(90deg, #FFF 0%, #E26426 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: 'clamp(32px, 7vw, 72px)'
                  }}
                >
                  Build the Future of<br />Industry 6.0
                </h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-8 md:mb-12"
                >
                  We are not just building products. We are building the future foundations of human–machine collaboration.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-base md:text-xl text-gray-400 leading-relaxed italic border-l-2 border-cyan-400 pl-4 md:pl-6">
                    At Ivish AI Quantum, every idea matters, every voice counts, and every contribution helps shape a
                    world where technology dissolves barriers and empowers possibility.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Why Work With Us - Vertical Stack Cards with Images */}
        <div className="py-16 md:py-32 px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 md:mb-24"
            >
              <h3
                className="text-4xl md:text-7xl font-sora text-center"
                style={{
                  background: 'linear-gradient(90deg, #FFF 0%, #E26426 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Why Work With Us?
              </h3>
            </motion.div>

            <div className="space-y-8 md:space-y-12">

              {/* Card 1 - Image Left */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-center"
              >
                <div className="relative h-64 md:h-96 rounded-t-3xl md:rounded-3xl overflow-hidden order-1">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
                    className="w-full h-full object-cover"
                    alt="Purpose"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-400/20 backdrop-blur-md flex items-center justify-center">
                      <Target size={24} className="text-cyan-400" />
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-white/5 to-transparent border-x border-b md:border border-white/10 rounded-b-3xl md:rounded-3xl p-8 md:p-10 order-2">
                  <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4 block">01</span>
                  <h4 className="text-3xl md:text-4xl font-sora mb-4 md:mb-6 text-white">Purpose with Impact</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Your work will touch lives globally — from empowering individuals to transforming industries and nations.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 - Image Right */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-center"
              >
                <div className="bg-gradient-to-br from-white/5 to-transparent border-x border-b md:border border-white/10 rounded-b-3xl md:rounded-3xl p-8 md:p-10 order-2 md:order-1">
                  <span className="text-orange-500 text-sm font-medium tracking-wider uppercase mb-4 block">02</span>
                  <h4 className="text-3xl md:text-4xl font-sora mb-4 md:mb-6 text-white">Innovation at the Core</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    We don't add features. We create new baselines in AI, robotics, neurotech, and quantum powered ecosystems.
                  </p>
                </div>
                <div className="relative h-64 md:h-96 rounded-t-3xl md:rounded-3xl overflow-hidden order-1 md:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200"
                    className="w-full h-full object-cover"
                    alt="Innovation"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500/20 backdrop-blur-md flex items-center justify-center">
                      <Brain size={24} className="text-orange-500" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 - Image Left */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-center"
              >
                <div className="relative h-64 md:h-96 rounded-t-3xl md:rounded-3xl overflow-hidden order-1">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200"
                    className="w-full h-full object-cover"
                    alt="Global"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-400/20 backdrop-blur-md flex items-center justify-center">
                      <Globe size={24} className="text-cyan-400" />
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-white/5 to-transparent border-x border-b md:border border-white/10 rounded-b-3xl md:rounded-3xl p-8 md:p-10 order-2">
                  <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4 block">03</span>
                  <h4 className="text-3xl md:text-4xl font-sora mb-4 md:mb-6 text-white">Global by Design</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Born in India, built for the world. Our team is pioneering solutions that scale across continents.
                  </p>
                </div>
              </motion.div>

              {/* Card 4 - Image Right */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-center"
              >
                <div className="bg-gradient-to-br from-white/5 to-transparent border-x border-b md:border border-white/10 rounded-b-3xl md:rounded-3xl p-8 md:p-10 order-2 md:order-1">
                  <span className="text-orange-500 text-sm font-medium tracking-wider uppercase mb-4 block">04</span>
                  <h4 className="text-3xl md:text-4xl font-sora mb-4 md:mb-6 text-white">Culture of Trust</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    We believe in openness, collaboration, and human dignity — technology should amplify people, not replace them.
                  </p>
                </div>
                <div className="relative h-64 md:h-96 rounded-t-3xl md:rounded-3xl overflow-hidden order-1 md:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
                    className="w-full h-full object-cover"
                    alt="Culture"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500/20 backdrop-blur-md flex items-center justify-center">
                      <Heart size={24} className="text-orange-500" />
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Full Width Image Break */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[50vh] md:h-[70vh] my-16 md:my-24"
        >
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600"
            className="w-full h-full object-cover"
            alt="Workspace"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.6 }}
              >
                <Sparkles size={56} className="mx-auto mb-6 text-cyan-400" />
              </motion.div>
              <h3 className="text-3xl md:text-6xl font-sora text-white mb-3 md:mb-4">Innovation Meets Purpose</h3>
              <p className="text-lg md:text-2xl text-gray-300">Where brilliant minds create the future</p>
            </div>
          </div>
        </motion.div>

        {/* Talent Network - Keeping the Circular Design (AWESOME PART) */}
        <div className="py-16 md:py-32 px-6 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-20"
            >
              <h3 className="text-4xl md:text-7xl font-sora mb-6 md:mb-8 text-white leading-tight px-4">
                We're Not Hiring (Yet).<br />
                <span className="text-gray-500">But We're Listening.</span>
              </h3>
              <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Right now, we're in stealth growth mode. But the future is expanding fast — and we'll soon be looking
                for brilliant minds to join our mission.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left - Roles */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h4 className="text-2xl md:text-3xl font-sora mb-8 md:mb-12 text-gray-300">Future Roles We'll Need:</h4>

                <div className="space-y-5 md:space-y-6">
                  {[
                    { role: "Artificial Intelligence & Machine Learning", color: "cyan" },
                    { role: "Human–Computer Interaction & UX", color: "orange" },
                    { role: "Robotics, AR/VR, and Wearables", color: "cyan" },
                    { role: "Blockchain & Quantum Computing", color: "orange" },
                    { role: "Business, Design, and Strategy", color: "cyan" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group flex items-start gap-4"
                    >
                      <div className={`mt-1.5 w-3 h-3 rounded-full flex-shrink-0 ${item.color === 'cyan' ? 'bg-cyan-400' : 'bg-orange-500'} group-hover:scale-150 transition-transform duration-300`}></div>
                      <span className="text-gray-300 text-base md:text-lg group-hover:text-white transition-colors">{item.role}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right - CTA Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <div className="relative w-full max-w-[350px] md:max-w-[400px] aspect-square">
                  {/* Animated rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20 animate-ping"></div>
                  <div className="absolute inset-4 md:inset-8 rounded-full border-2 border-orange-500/20 animate-ping delay-75"></div>

                  {/* Main circle */}
                  <div className="absolute inset-8 md:inset-12 rounded-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center p-8 md:p-10">
                    <Users size={48} className="text-cyan-400 mb-4 md:mb-6" strokeWidth={1.5} />
                    <h4 className="text-xl md:text-2xl font-sora mb-3 md:mb-4 text-white">Join Our Talent Network</h4>
                    <p className="text-gray-400 text-xs md:text-sm mb-6 md:mb-8">Shape the next era of Industry 6.0</p>

                    <Link to="/stay-updated">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-cyan-400 to-orange-500 text-black px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-sm flex items-center gap-2"
                      >
                        Stay Updated
                        <ArrowRight size={16} />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Life at Ivish - Mobile Optimized */}
        <div className="py-16 md:py-32 px-6 md:px-16 lg:px-24">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 md:gap-4 mb-8">
                <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-cyan-400"></div>
                <Rocket size={40} className="text-cyan-400 md:w-12 md:h-12" />
                <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-cyan-400"></div>
              </div>

              <h3 className="text-4xl md:text-7xl font-sora mb-8 md:mb-10 text-white leading-tight">
                Life at Ivish AI Quantum
              </h3>

              <p className="text-xl md:text-3xl text-gray-300 leading-relaxed mb-6">
                We're a team of dreamers, engineers, and builders working at the edge of what's possible.
                Here, curiosity is celebrated, ideas are valued, and ambition is limitless.
              </p>

              <p className="text-lg md:text-2xl text-gray-500 leading-relaxed">
                This is not just a workplace. It's a launchpad for the future.
              </p>

              <div className="flex justify-center gap-3 md:gap-6 mt-12">
                <Star size={20} className="text-cyan-400 animate-pulse md:w-6 md:h-6" />
                <Zap size={20} className="text-orange-500 animate-pulse delay-100 md:w-6 md:h-6" />
                <Star size={20} className="text-cyan-400 animate-pulse delay-200 md:w-6 md:h-6" />
              </div>
            </motion.div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default CareersPage;
