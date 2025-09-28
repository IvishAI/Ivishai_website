// import React from "react";
// import { motion } from "framer-motion";
// import { Mail, ArrowRight } from "lucide-react";
// import Header from "../../components/Header"; // Importing the Header component
// import Footer from "../../components/Footer"; // Importing the Footer component

// const ProductsComingSoon = () => {
//   return (
//     <>
//       <Header /> {/* Adding the Header component here */}
//       <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-24 md:py-32">
//         {/* Headings */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h1 
//             className="font-sora font-normal mb-4 mx-auto"
//             style={{
//               background: 'linear-gradient(90deg, #FFF 0%, #E26426 100%)',
//               backgroundClip: 'text',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               textAlign: 'center',
//               fontSize: '60px',
//               lineHeight: '120%',
//               letterSpacing: '-1.2px',              
//               width: '1120px'
//             }}
//           >
//             AI solutions redefining accessibility and enterprise automation
//           </h1>
//         </motion.div>

//         {/* Product Buttons */}
//         <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 justify-center mb-16">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => window.location.href = '/unitysensepage'}
//             className="border border-white px-8 py-3 hover:bg-white/10 transition-all flex items-center gap-2"
//           >
//             NeuraVision
//             <ArrowRight size={18} className="ml-2" />
//           </motion.button>
          
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => window.location.href = '/linguaflowpage'} 
//             className="border border-white px-8 py-3 hover:bg-white/10 transition-all flex items-center gap-2"
//           >
//             Verbex AI
//             <ArrowRight size={18} className="ml-2" />
//           </motion.button>
//         </div>
//       </div>
//       <Footer /> {/* Adding the Footer component here */}
//     </>
//   );
// };

// export default ProductsComingSoon;
import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const ProductsComingSoon = () => {
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
            fontSize: 'clamp(64px, 10vw, 128px)'
          }}
        >
          Our Products
        </h1>
        <h2
          className="font-sora font-normal leading-[100%] tracking-[-3px]"
          style={{
            background: 'linear-gradient(90deg, #FFF 0%, #E26426 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: 'clamp(32px, 8vw, 64px)'
          }}
        >
          Coming Soon
        </h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-6"
        >
          We're developing revolutionary AI solutions that will transform accessibility and global communication
        </motion.p>
      </motion.div>

      {/* Innovation Grid */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item * 0.2 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-sora">AI Innovation {item}</h3>
                <span className="px-3 py-1 text-xs bg-cyan-400/10 text-cyan-400 rounded-full">
                  Phase {item}
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Cutting-edge technology currently in development, designed to empower users worldwide
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        { <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-gray-300 mb-8">
            Be the first to experience our next-generation AI solutions
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white px-8 py-3 hover:bg-white/10 transition-all flex items-center gap-2 mx-auto"
          >
            <Mail size={20} />
            Get Early Access
            <ArrowRight size={18} className="ml-2" />
          </motion.button>
        </motion.div> }
      </div>
    </div>
  );
};

export default ProductsComingSoon;
