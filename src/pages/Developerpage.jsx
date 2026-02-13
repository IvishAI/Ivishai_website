import { motion } from "framer-motion";
import { Cpu, Terminal, Bolt, Palette, PenTool } from "lucide-react";
import Footer from "../components/Footer";

const CombinedPage = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden text-white">
      {/* Main Content Container */}
      <div className="px-5 md:px-16 lg:px-28 py-12 md:py-24">
        {/* Developer & Designer Columns */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Developer Section Group */}
          <div className="flex-1 flex flex-col gap-16">
            {/* Developer Details */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5">
                <svg width="14" height="15" viewBox="0 0 14 15" className="mr-2">
                  <circle cx="7" cy="7.5" r="7" fill="url(#gradientDev)" />
                  <defs>
                    <linearGradient id="gradientDev" x1="-0.036" y1="14.645" x2="9.885" y2="0.472">
                      <stop stopColor="#13D8F6" />
                      <stop offset="1" stopColor="#0F616D" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-sm">Developed by</span>
              </div>

              <motion.h1
                className="text-4xl md:text-6xl font-sora leading-[100%] tracking-tight md:tracking-[-1.52px] mb-6 md:mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
                  Ankith M
                </span>
                <br />
                <span className="text-2xl md:text-4xl bg-gradient-to-r from-[#13D8F6] to-[#0F616D] bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-gray-300 mb-8 md:mb-12 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Crafting immersive digital experiences with cutting-edge web technologies.
                Specializing in AI integration and scalable cloud solutions.
              </motion.p>

              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  href="https://portfolio-9niq35yan-ankith-ms-projects-8b28c506.vercel.app/"
                  className="flex items-center gap-2 border border-white px-6 py-2 md:px-8 md:py-3 hover:bg-white/10 transition-all text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                  <Terminal size={18} className="mt-0.5" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Developer Stack (Mobile) */}
            <div className="lg:hidden border-l-4 border-cyan-400 pl-6">
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/5 rounded-full">
                    <Cpu className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-sora">Core Stack</h3>
                </div>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  React/Next.js, Node.js, Python, AWS, PostgreSQL, Docker, Kubernetes
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="p-2 bg-white/5 rounded-full">
                    <Bolt className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-sora">AI Specialization</h3>
                </div>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  TensorFlow, PyTorch, NLP, Computer Vision, LLM Integration
                </p>
              </div>
            </div>
          </div>

          {/* Designer Section Group */}
          <div className="flex-1 flex flex-col gap-16">
            {/* Designer Details */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5">
                <svg width="14" height="15" viewBox="0 0 14 15" className="mr-2">
                  <circle cx="7" cy="7.5" r="7" fill="url(#gradientDes)" />
                  <defs>
                    <linearGradient id="gradientDes" x1="-0.036" y1="14.645" x2="9.885" y2="0.472">
                      <stop stopColor="#13D8F6" />
                      <stop offset="1" stopColor="#0F616D" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-sm">Designed by</span>
              </div>

              <motion.h1
                className="text-4xl md:text-6xl font-sora leading-[100%] tracking-tight md:tracking-[-1.52px] mb-6 md:mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
                  ASHUTOSH RANA
                </span>
                <br />
                <span className="text-2xl md:text-4xl bg-gradient-to-r from-[#13D8F6] to-[#0F616D] bg-clip-text text-transparent">
                  UX/Product Designer
                </span>
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-gray-300 mb-8 md:mb-12 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Creating intuitive and visually striking digital experiences with a focus on user research,
                wireframing, and prototyping to bring innovative designs to life.
              </motion.p>

              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  href="https://ashutoshdesigns.framer.website/"
                  className="flex items-center gap-2 border border-white px-6 py-2 md:px-8 md:py-3 hover:bg-white/10 transition-all text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Portfolio
                  <PenTool size={18} className="mt-0.5" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Designer Stack (Mobile) */}
            <div className="lg:hidden border-l-4 border-cyan-400 pl-6">
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/5 rounded-full">
                    <Palette className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-sora">Design Tools</h3>
                </div>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  Figma, Sketch, Adobe XD, Illustrator, Photoshop
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="p-2 bg-white/5 rounded-full">
                    <PenTool className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-sora">UX Strategy</h3>
                </div>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  User Research, Wireframing, Prototyping, Usability Testing, Interaction Design
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Stacks Section */}
        <motion.div
          className="hidden lg:grid grid-cols-2 gap-16 mt-20 pt-20 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {/* Developer Stack (Desktop) */}
          <div className="border-l-4 border-cyan-400 pl-6">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white/5 rounded-full">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-sora">Core Stack</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                React/Next.js, Node.js, Python, AWS, PostgreSQL, Docker, Kubernetes
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="p-2 bg-white/5 rounded-full">
                  <Bolt className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-sora">AI Specialization</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                TensorFlow, PyTorch, NLP, Computer Vision, LLM Integration
              </p>
            </div>
          </div>

          {/* Designer Stack (Desktop) */}
          <div className="border-l-4 border-cyan-400 pl-6">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white/5 rounded-full">
                  <Palette className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-sora">Design Tools</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Figma, Sketch, Adobe XD, Illustrator, Photoshop
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="p-2 bg-white/5 rounded-full">
                  <PenTool className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-sora">UX Strategy</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                User Research, Wireframing, Prototyping, Usability Testing, Interaction Design
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <section className="px-5 md:px-16 lg:px-28 py-12 md:py-20">
        <div className="border border-white/10 rounded-xl p-8 md:p-16 text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-sora mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <span className="bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
              Let's Build
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#13D8F6] to-[#0F616D] bg-clip-text text-transparent">
              The Future
            </span>
          </motion.h2>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="https://calendly.com/ankithm113"
              className="bg-white text-black px-6 py-2 md:px-8 md:py-3 hover:bg-white/90 transition-all text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="https://github.com/Ankith-m1006"
              className="border border-white px-6 py-2 md:px-8 md:py-3 hover:bg-white/10 transition-all text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
            >
              View GitHub
            </motion.a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CombinedPage;