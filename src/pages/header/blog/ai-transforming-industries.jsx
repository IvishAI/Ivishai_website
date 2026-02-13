import React, { useState, useEffect } from 'react';
import { Share2, Menu, X, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

// Sections for Table of Contents
const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'healthcare', title: 'Healthcare' },
  { id: 'finance', title: 'Finance' },
  { id: 'retail', title: 'Retail' },
  { id: 'logistics', title: 'Logistics' },
  { id: 'challenges', title: 'Challenges and Considerations' },
  { id: 'conclusion', title: 'Conclusion' }
];

function App() {
  const [showTOC, setShowTOC] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);




  // Handle share functionality
  const handleShare = async () => {
    const title = "How Artificial Intelligence is Transforming Industries";
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  // Scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
    setShowTOC(false);
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Track scroll position to highlight active section in TOC
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Determine active section
      let currentSection = '';
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element && window.scrollY >= element.offsetTop - 150) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Header with controls */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10 py-4 px-6 flex justify-between items-center">
        <h2
          className="text-xl font-sora font-normal"
          style={{
            background: 'linear-gradient(90deg, #D0D0D0 0%, #5F5F5F 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          AI Transforming Industries
        </h2>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowTOC(!showTOC)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-300 border border-white/10"
          >
            {showTOC ? <X size={18} /> : <Menu size={18} />}
            <span className="hidden sm:inline">Contents</span>
          </button>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-orange-500 hover:from-cyan-500 hover:to-orange-600 transition-colors text-black font-medium"
          >
            <Share2 size={18} />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </header>

      {/* Table of Contents Sidebar */}
      <div className={`fixed top-[72px] right-0 h-[calc(100vh-72px)] bg-black/95 backdrop-blur-md border-l border-white/10 w-72 transform transition-transform duration-300 z-40 ${showTOC ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <h3 className="text-xl font-sora mb-4 text-white">Table of Contents</h3>
          <ul className="space-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left w-full px-3 py-2 rounded-lg transition-colors ${activeSection === section.id
                    ? 'bg-cyan-400/10 text-cyan-400 font-medium border border-cyan-400/20'
                    : 'hover:bg-white/5 text-gray-300'
                    }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-12 flex justify-center">
        <article className="max-w-6xl w-full bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10">
          {/* Blog Title */}
          <motion.h1
            className="font-sora font-normal leading-[100%] tracking-[-2px] mb-6 text-center"
            style={{
              background: 'linear-gradient(90deg, #D0D0D0 0%, #5F5F5F 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: 'clamp(40px, 6vw, 64px)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            How Artificial Intelligence is Transforming Industries
          </motion.h1>

          {/* Author and Date */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-orange-500 flex items-center justify-center text-black font-bold">
              AM
            </div>
            <div>
              <p className="font-sora text-white">Ankith M</p>
              <p className="text-gray-400 text-sm">October 10, 2023</p>
            </div>
          </div>

          {/* Reading Time */}
          <div className="text-center text-gray-400 mb-10">
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">15 min read</span>
          </div>

          {/* Introduction */}
          <section id="introduction" className="mb-16">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Artificial Intelligence (AI) has evolved from a futuristic concept to a transformative force, reshaping industries worldwide. From healthcare and finance to retail and logistics, AI technologies are driving innovation, enhancing efficiency, and enabling organizations to solve complex problems at unprecedented scales.
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg mb-8 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=1932&auto=format&fit=crop"
                alt="AI Transforming Industries"
                className="w-full h-auto object-cover"
              />
              <div className="bg-white/5 p-3 text-sm text-gray-400 italic">
                AI technologies are revolutionizing multiple industries across the global economy
              </div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              AI is not just a tool; it's a paradigm shift that is redefining how businesses operate, how services are delivered, and how we interact with technology. Let's dive deeper into its impact across industries.
            </p>
          </section>

          {/* Healthcare Section */}
          <section id="healthcare" className="mb-16">
            <h2 className="text-3xl font-sora mb-8 text-white">Healthcare</h2>
            <p className="text-lg text-gray-300 mb-8">
              In healthcare, AI enhances diagnostics and treatment plans. Machine learning algorithms analyze medical data to identify patterns, aiding in early disease detection and personalized care strategies. This leads to improved patient outcomes and more efficient healthcare delivery.
            </p>
            <div className="bg-gradient-to-r from-cyan-400/10 to-orange-500/10 p-6 rounded-xl border border-white/10">
              <h3 className="text-2xl font-sora text-white mb-6">Key Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                  <div className="text-cyan-400 font-sora text-lg mb-2">Medical Imaging</div>
                  <p className="text-gray-300">
                    AI algorithms assist radiologists by detecting anomalies in imaging data, leading to earlier and more accurate diagnoses.
                  </p>
                </div>
                <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                  <div className="text-cyan-400 font-sora text-lg mb-2">Predictive Analytics</div>
                  <p className="text-gray-300">
                    AI models predict patient deterioration, enabling proactive interventions in critical care settings.
                  </p>
                </div>
                <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                  <div className="text-cyan-400 font-sora text-lg mb-2">Drug Discovery</div>
                  <p className="text-gray-300">
                    AI accelerates the drug discovery process by modeling how compounds interact with targets, reducing the time to market for new medications.
                  </p>
                </div>
                <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                  <div className="text-cyan-400 font-sora text-lg mb-2">Telemedicine</div>
                  <p className="text-gray-300">
                    AI-powered telemedicine platforms enable remote consultations, making healthcare accessible to underserved areas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Finance Section */}
          <section id="finance" className="mb-16">
            <h2 className="text-3xl font-sora mb-8 text-white">Finance</h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-cyan-400/30 transition-all">
                <h3 className="text-2xl font-sora text-white mb-4">Fraud Detection</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
                      alt="Fraud Detection"
                      className="w-full h-auto rounded-lg border border-white/10"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg text-gray-300">
                      AI systems monitor transactions in real-time, identifying suspicious activities and reducing fraud losses. These systems can analyze patterns across millions of transactions to detect anomalies that would be impossible for humans to spot.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-cyan-400/30 transition-all">
                <h3 className="text-2xl font-sora text-white mb-4">Algorithmic Trading</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img
                      src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop"
                      alt="Algorithmic Trading"
                      className="w-full h-auto rounded-lg border border-white/10"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg text-gray-300">
                      AI models analyze market data to execute trades at optimal times, enhancing investment strategies. These algorithms can process vast amounts of financial data and news in milliseconds to make trading decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-cyan-400/30 transition-all">
                <h3 className="text-2xl font-sora text-white mb-4">Credit Scoring</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
                      alt="Credit Scoring"
                      className="w-full h-auto rounded-lg border border-white/10"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg text-gray-300">
                      AI evaluates creditworthiness by analyzing diverse data sources, enabling more inclusive lending practices. This allows financial institutions to serve previously underbanked populations with more accurate risk assessments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Retail Section */}
          <section id="retail" className="mb-16">
            <h2 className="text-3xl font-sora mb-8 text-white">Retail</h2>
            <p className="text-lg text-gray-300 mb-8">
              AI is reshaping the retail industry by personalizing customer experiences, improving inventory management, and enabling targeted marketing. AI-powered recommendation systems analyze customer data to provide personalized product suggestions, enhancing customer engagement and driving sales.
            </p>
            <div className="bg-gradient-to-r from-cyan-400/10 to-orange-500/10 rounded-xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <div className="text-cyan-400 text-2xl mb-4">01</div>
                  <h3 className="text-xl font-sora text-white mb-3">Personalized Recommendations</h3>
                  <p className="text-gray-300">
                    AI analyzes customer behavior to suggest products, increasing sales and customer satisfaction. These systems learn from browsing history, purchases, and even time spent viewing items.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <div className="text-cyan-400 text-2xl mb-4">02</div>
                  <h3 className="text-xl font-sora text-white mb-3">Inventory Optimization</h3>
                  <p className="text-gray-300">
                    AI forecasts demand, reducing overstock and stockouts, and improving supply chain efficiency. This leads to significant cost savings and better customer experiences.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <div className="text-cyan-400 text-2xl mb-4">03</div>
                  <h3 className="text-xl font-sora text-white mb-3">Chatbots</h3>
                  <p className="text-gray-300">
                    AI-powered chatbots assist customers with inquiries, providing instant support and enhancing the shopping experience. Modern chatbots can handle complex conversations and transactions.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <div className="text-cyan-400 text-2xl mb-4">04</div>
                  <h3 className="text-xl font-sora text-white mb-3">Virtual Try-Ons</h3>
                  <p className="text-gray-300">
                    AI and AR technologies allow customers to visualize products before purchasing, improving confidence and reducing returns. This is particularly valuable for clothing, furniture, and cosmetics.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Logistics Section */}
          <section id="logistics" className="mb-16">
            <h2 className="text-3xl font-sora mb-8 text-white">Logistics</h2>
            <p className="text-lg text-gray-300 mb-8">
              In logistics, AI optimizes supply chain operations by predicting demand, managing inventory levels, and optimizing delivery routes. This leads to cost reductions, improved efficiency, and enhanced customer satisfaction.
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg mb-8 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                alt="Logistics and Supply Chain"
                className="w-full h-auto object-cover"
              />
              <div className="bg-white/5 p-3 text-sm text-gray-400 italic">
                AI is revolutionizing logistics and supply chain management with predictive analytics and automation
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <h3 className="text-2xl font-sora text-white mb-4">Route Optimization</h3>
                <p className="text-lg text-gray-300">
                  AI calculates the most efficient delivery routes, reducing fuel consumption and delivery times. These systems can adapt in real-time to traffic conditions and other variables.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <h3 className="text-2xl font-sora text-white mb-4">Demand Forecasting</h3>
                <p className="text-lg text-gray-300">
                  AI predicts product demand, enabling better inventory planning and reducing waste. This is particularly valuable for seasonal products and during unpredictable market conditions.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <h3 className="text-2xl font-sora text-white mb-4">Warehouse Automation</h3>
                <p className="text-lg text-gray-300">
                  AI controls robots that manage inventory, increasing accuracy and reducing labor costs. Modern warehouses can operate with minimal human intervention, improving efficiency and safety.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <h3 className="text-2xl font-sora text-white mb-4">Autonomous Vehicles</h3>
                <p className="text-lg text-gray-300">
                  AI-powered drones and autonomous vehicles are revolutionizing last-mile delivery, making it faster and more efficient. These technologies are particularly valuable in areas with difficult terrain or limited infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* Challenges and Considerations Section */}
          <section id="challenges" className="mb-16">
            <h2 className="text-3xl font-sora mb-8 text-white">Challenges and Considerations</h2>
            <p className="text-lg text-gray-300 mb-8">
              Despite its advantages, AI adoption presents challenges, including ethical considerations, data privacy concerns, and potential job displacement due to automation. Addressing these issues requires comprehensive policies and frameworks to ensure responsible and equitable AI deployment.
            </p>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-sora text-white mb-6">Key Challenges</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-orange-500/20 text-orange-400 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-sora text-white">Ethical Use</h4>
                    <p className="text-gray-300">
                      Ensuring AI systems operate without bias and make decisions transparently is crucial for maintaining public trust. Organizations must implement ethical guidelines and oversight mechanisms.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-orange-500/20 text-orange-400 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-sora text-white">Data Privacy</h4>
                    <p className="text-gray-300">
                      Protecting individual privacy while utilizing data for AI applications requires robust security measures and regulations. Companies must be transparent about data collection and usage.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-orange-500/20 text-orange-400 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-sora text-white">Workforce Impact</h4>
                    <p className="text-gray-300">
                      Preparing the workforce for AI-driven changes involves reskilling programs and education initiatives to mitigate job displacement. Organizations and governments must collaborate on workforce transition strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="mb-12">
            <h2 className="text-3xl font-sora mb-8 text-white">Conclusion</h2>
            <div className="bg-gradient-to-r from-cyan-400/10 to-orange-500/10 p-8 rounded-xl border border-white/10">
              <p className="text-lg text-gray-300 mb-6">
                In conclusion, AI's transformative impact across various industries underscores the need for balanced integration strategies that maximize benefits while mitigating associated risks. As AI continues to evolve, its role in shaping the future of these sectors will only become more significant.
              </p>
              <p className="text-lg text-gray-300">
                The future of AI is bright, but it requires careful planning, ethical considerations, and collaboration across industries to ensure its potential is fully realized. Organizations that embrace AI responsibly will gain competitive advantages while contributing to positive societal outcomes.
              </p>
            </div>
          </section>

          {/* Author Bio */}
          <div className="border-t border-white/10 pt-8 mt-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-orange-500 flex items-center justify-center text-black font-bold text-xl">
                AM
              </div>
              <div>
                <h3 className="text-xl font-sora text-white">About Ankith M</h3>
                <p className="text-gray-300 mt-2">
                  Ankith M is a technology analyst and researcher specializing in artificial intelligence and its applications across industries. With a background in computer science and business strategy, he provides insights on how emerging technologies are reshaping the business landscape.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-400 to-orange-500 text-black p-3 rounded-full shadow-lg hover:from-cyan-500 hover:to-orange-600 transition-colors z-30"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </div>
  );
}

export default App;