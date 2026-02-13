import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const VerbXProductPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white font-sora px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 pt-24 sm:pt-28 md:pt-32">

        {/* ---------------- HEADER WITH LOGO + VERBX ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <img
              src="/verbx-logo.svg"
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 cursor-pointer"
              alt="VerbX Logo"
              onClick={() => navigate("/verbxlogo")}
            />

            <h1
              className="font-bold text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #F6F6F8 0%, #ffffff 100%)",
                fontFamily: "Cabinet Grotesk",
                fontSize: "clamp(40px, 12vw, 150px)",
                letterSpacing: "-2px",
                lineHeight: "110%",
              }}
            >
              VerbX
            </h1>
          </div>
        </motion.div>

        {/* ---------------- HERO SECTION ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-20 sm:mb-24 md:mb-32">

          {/* Left: Mobile UI */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center order-1 lg:order-1"
          >
            <img
              src="/verbx-ui.png"
              alt="VerbX UI"
              className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[450px] h-auto rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Right: About Text + PlayStore */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-2"
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              VerbX is designed to remove language barriers and make communication natural,
              effortless, and accessible for everyone. Whether you're speaking with someone from
              another region, traveling abroad, working with global teams, or helping someone nearby,
              VerbX allows you to understand and be understood instantly.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              VerbX is built to feel simple and human — you speak, type, or scan, and VerbX helps
              you communicate clearly in the language the other person knows.
            </p>

            {/* Play Store Soon */}
            <div className="pt-4 sm:pt-6">
              <p className="uppercase tracking-wide bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent text-xs sm:text-sm mb-3 font-bold">
                Launching Soon on Play Store
              </p>

              <img
                src="/google-play-badge.png"
                alt="Get it on Google Play"
                className="cursor-pointer w-36 sm:w-44 md:w-48 h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* ---------------- FEATURES HEADING ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
            Powerful Features
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-orange-500 mx-auto"></div>
        </motion.div>

        {/* ---------------- ALTERNATING FEATURES ---------------- */}
        <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24 md:space-y-32 mb-20 sm:mb-24 md:mb-32">

          {/* Feature 1 - Cyan */}
          <AlternatingFeature
            number="01"
            title="Communicate Freely in Any Language"
            description="VerbX supports a wide range of languages and enables seamless communication through voice, text, and visual tools. You don't need to know the other language — VerbX acts as your companion and bridges the gap in real time."
            align="left"
            color="cyan"
          />

          {/* Feature 2 - Orange */}
          <AlternatingFeature
            number="02"
            title="Real-Time Voice Conversation"
            description="Speak naturally and VerbX converts your words into the listener's language instantly. The entire experience is designed to feel smooth, fast, and natural — helping both sides follow conversations confidently."
            align="right"
            color="orange"
          />

          {/* Feature 3 - Cyan */}
          <AlternatingFeature
            number="03"
            title="Instant Text & Camera Conversion"
            description="Type something or scan a menu, signboard, handwritten note, or document — VerbX helps you understand it immediately in your preferred language."
            align="left"
            color="cyan"
          />

          {/* Feature 4 - Orange */}
          <AlternatingFeature
            number="04"
            title="Clear, Respectful & Emotion-Aware Communication"
            description="VerbX recognizes tone such as calm, excited, polite, or tense, and displays it transparently without altering your meaning — helping avoid cultural misunderstandings."
            align="right"
            color="orange"
          />

        </div>

        {/* ---------------- PRIVACY SPOTLIGHT ---------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-20 sm:mb-24 md:mb-32 relative"
        >
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-orange-500/5 blur-3xl rounded-full"></div>

          <div className="relative bg-black border-2 border-cyan-400/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="absolute -top-4 sm:-top-6 left-4 sm:left-8 md:left-12 bg-black px-4 sm:px-6 py-1.5 sm:py-2 border-2 border-cyan-400 rounded-full">
              <span className="bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent font-bold text-xs sm:text-sm tracking-wider">PRIVACY FIRST</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 mt-4">
              Zero-Storage Principle
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <PrivacyPoint text="We do not store your voice, text, or camera inputs" index={0} />
              <PrivacyPoint text="Nothing is saved unless you manually add it to your Phrasebook" index={1} />
              <PrivacyPoint text="Saved content is private and encrypted" index={2} />
              <PrivacyPoint text="You control everything" index={3} />
            </div>
          </div>
        </motion.div>

        {/* ---------------- WHO IT'S FOR - CIRCULAR BADGES ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-20 sm:mb-24 md:mb-32 text-center"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
            Designed for Everyone
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-10 md:mb-12 px-4">VerbX is made for people from all walks of life</p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            {["Students", "Travelers", "Families", "Professionals", "NGOs", "Schools", "Global teams"].map((user, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative">
                  <div className={`absolute inset-0 ${idx % 2 === 0 ? 'bg-cyan-400/20' : 'bg-orange-500/20'} rounded-full blur-xl ${idx % 2 === 0 ? 'group-hover:bg-cyan-400/40' : 'group-hover:bg-orange-500/40'} transition-all duration-300`}></div>
                  <div className={`relative bg-gradient-to-br from-neutral-900 to-black border ${idx % 2 === 0 ? 'border-neutral-700 hover:border-cyan-400' : 'border-neutral-700 hover:border-orange-500'} rounded-full px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 transition-all duration-300`}>
                    <p className="text-white font-medium whitespace-nowrap text-sm sm:text-base">{user}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ---------------- ADDITIONAL FEATURES - TIMELINE STYLE ---------------- */}
        <div className="max-w-4xl mx-auto mb-20 sm:mb-24 md:mb-32">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-12 sm:mb-14 md:mb-16 px-4"
          >
            More Features
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-orange-500 to-transparent hidden sm:block"></div>

            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              <TimelineFeature
                title="Offline Support for Real-World Use"
                description="Download offline packs to use essential features even without internet — perfect for travel, remote regions, or low-network environments."
                color="cyan"
              />

              <TimelineFeature
                title="Your Personal Phrasebook"
                description="Save your most-used lines — greetings, directions, work terms — and access them instantly whenever needed."
                color="orange"
              />

              <TimelineFeature
                title="Built for Safety and Trust"
                description="VerbX ensures your communication stays clear, respectful, meaningful, culturally appropriate, and reliable — even in important situations."
                color="cyan"
              />

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="pl-0 sm:pl-12 md:pl-16 lg:pl-20 pt-8"
              >
                <a
                  href="https://verbxeco.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-orange-500 text-black font-bold rounded-full text-lg hover:scale-105 transition-transform shadow-lg shadow-cyan-500/20"
                >
                  Explore  Eco System
                  <ArrowRight size={20} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

// Alternating Feature Component
const AlternatingFeature = ({ number, title, description, align, color }) => {
  const isLeft = align === "left";
  const isCyan = color === "cyan";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 ${!isLeft && "md:flex-row-reverse"}`}
    >
      {/* Large Number */}
      <div className="flex-shrink-0">
        <div className="relative">
          <span className={`text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-b ${isCyan ? 'from-cyan-400/20' : 'from-orange-500/20'} to-transparent leading-none`}>
            {number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`flex-1 text-center md:text-left ${!isLeft && "md:text-right"}`}>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight px-4 md:px-0">
          {title}
        </h3>
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed px-4 md:px-0">
          {description}
        </p>
        <div className={`w-12 sm:w-14 md:w-16 h-1 ${isCyan ? 'bg-gradient-to-r from-cyan-400 to-cyan-500' : 'bg-gradient-to-r from-orange-500 to-orange-600'} mt-4 sm:mt-5 md:mt-6 mx-auto md:mx-0 ${!isLeft && "md:ml-auto md:mr-0"}`}></div>
      </div>
    </motion.div>
  );
};

// Privacy Point Component
const PrivacyPoint = ({ text, index }) => {
  const isCyan = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-start gap-2 sm:gap-3"
    >
      <div className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full ${isCyan ? 'bg-cyan-400/20 border-cyan-400' : 'bg-orange-500/20 border-orange-500'} border flex items-center justify-center mt-0.5 sm:mt-1`}>
        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isCyan ? 'bg-cyan-400' : 'bg-orange-500'}`}></div>
      </div>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">{text}</p>
    </motion.div>
  );
};

// Timeline Feature Component
const TimelineFeature = ({ title, description, color }) => {
  const isCyan = color === "cyan";

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative pl-0 sm:pl-12 md:pl-16 lg:pl-20"
    >
      {/* Timeline dot */}
      <div className={`absolute left-3.5 sm:left-4 md:left-6 top-1 sm:top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full ${isCyan ? 'bg-cyan-400' : 'bg-orange-500'} border-2 sm:border-4 border-black hidden sm:block`}></div>

      <div className="group hover:translate-x-1 sm:hover:translate-x-2 transition-transform duration-300">
        <h4 className={`text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 ${isCyan ? 'group-hover:text-cyan-400' : 'group-hover:text-orange-500'} transition-colors duration-300`}>
          {title}
        </h4>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default VerbXProductPage;
