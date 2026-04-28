import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 md:pt-24 pb-16 relative overflow-hidden text-white" style={{ backgroundImage: 'url("/image 21.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>

      <div className="max-w-5xl px-8 md:pl-16 lg:pl-28 py-12 md:py-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-6"
          style={{ padding: '2px 8px', borderRadius: '100px', background: 'rgba(255, 255, 255, 0.08)' }}
        >
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <circle cx="7" cy="7.5" r="7" fill="url(#paint0_linear_68_282)"/>
            <defs>
              <linearGradient id="paint0_linear_68_282" x1="-0.036" y1="14.6447" x2="9.8852" y2="0.471573" gradientUnits="userSpaceOnUse">
                <stop stopColor="#13D8F6"/>
                <stop offset="1" stopColor="#0F616D"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="inline-block text-sm">
            Industry 6.0
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-[76px] font-sora font-normal leading-[100%] tracking-[-0.04em] md:tracking-[-1.52px] mb-6"
        >
          <span className="block bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
            We Are Building
          </span>
          <span className="block bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
            Industry 6.0
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="text-2xl md:text-3xl text-gray-200 mb-6 font-light"
        >
          From India. For the World.
        </motion.p>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-base md:text-lg text-gray-300 mb-10 max-w-[90%]"
        >
          IvishAI Quantum is building the foundational infrastructure of the next era — where language,
          intelligence, and human systems converge. Our products are not features. They are operating
          systems for how the world works.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <motion.a
            href="https://verbxeco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 border border-white py-4 px-7 w-full md:w-auto hover:bg-white/10 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore VerbX
          </motion.a>
          <motion.a
            href="/retail-os"
            className="inline-flex items-center justify-center gap-1 py-4 px-7 w-full md:w-auto hover:opacity-90 transition-opacity duration-200"
            style={{ background: '#FFF', color: '#000' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Retail OS
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
