import React, { useState, useEffect } from 'react';
import { Share2, Menu, X, ChevronUp } from 'lucide-react';

function App() {
  const [showTOC, setShowTOC] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sections for Table of Contents
  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'key-features', title: 'Key Features' },
    { id: 'applications', title: 'Applications' },
    { id: 'challenges', title: 'Challenges' },
    { id: 'future-trends', title: 'Future Trends' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  // Handle share functionality
  const handleShare = async () => {
    const title = "The Future of AI-Powered Wearables";
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
  }, [sections]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 text-gray-900 relative">
      {/* Header with controls */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md py-4 px-6 flex justify-between items-center">
        <h2 className="text-xl font-serif font-bold text-cyan-900">AI-Powered Wearables</h2>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowTOC(!showTOC)} 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 hover:bg-cyan-200 transition-colors text-cyan-800"
          >
            {showTOC ? <X size={18} /> : <Menu size={18} />}
            <span className="hidden sm:inline">Contents</span>
          </button>
          <button 
            onClick={handleShare} 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-600 hover:bg-cyan-700 transition-colors text-white"
          >
            <Share2 size={18} />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </header>

      {/* Table of Contents Sidebar */}
      <div className={`fixed top-[72px] right-0 h-[calc(100vh-72px)] bg-white/95 backdrop-blur-md shadow-xl w-72 transform transition-transform duration-300 z-40 ${showTOC ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <h3 className="text-xl font-bold text-cyan-900 mb-4 font-serif">Table of Contents</h3>
          <ul className="space-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left w-full px-3 py-2 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'bg-cyan-100 text-cyan-800 font-medium'
                      : 'hover:bg-gray-100'
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
        <article className="max-w-4xl w-full bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-200">
          {/* Blog Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyan-900 mb-6 text-center font-serif leading-tight">
            The Future of AI-Powered Wearables
          </h1>

          {/* Author and Date */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-full bg-cyan-200 flex items-center justify-center text-cyan-800 font-bold">
              SL
            </div>
            <div>
              <p className="font-semibold text-gray-800">Sarah Lee</p>
              <p className="text-gray-500 text-sm">January 28, 2025</p>
            </div>
          </div>

          {/* Reading Time */}
          <div className="text-center text-gray-500 mb-10 text-sm">
            <span className="px-3 py-1 bg-gray-100 rounded-full">12 min read</span>
          </div>

          {/* Introduction */}
          <section id="introduction" className="mb-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Artificial Intelligence (AI) is no longer confined to computers and smartphones. It's now making its way into wearable devices, transforming how we interact with technology on a daily basis. From smartwatches and fitness trackers to augmented reality (AR) glasses, AI-powered wearables are becoming smarter, more intuitive, and more integrated into our lives.
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg mb-8">
              <img 
                src="https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="AI-Powered Wearable Devices" 
                className="w-full h-auto object-cover" 
              />
              <div className="bg-gray-50 p-3 text-sm text-gray-500 italic">
                AI-powered wearables are revolutionizing how we monitor health, fitness, and interact with our environment
              </div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              In this article, we'll explore the future of AI-powered wearables, their applications across various industries, the challenges they face, and what lies ahead for this exciting technology that's reshaping our relationship with the digital world.
            </p>
          </section>

          {/* Key Features Section */}
          <section id="key-features" className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-800 mb-8 font-serif">Key Features of AI-Powered Wearables</h2>
            <p className="text-xl text-gray-700 mb-8">
              Modern AI wearables offer a range of sophisticated features that go far beyond simple step counting or heart rate monitoring. These devices leverage artificial intelligence to provide personalized insights and seamless experiences.
            </p>
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl shadow-sm border border-cyan-100">
              <h3 className="text-2xl font-semibold text-cyan-800 mb-6">Core Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="text-cyan-600 font-bold text-lg mb-2">Health Monitoring</div>
                  <p className="text-gray-700">
                    AI-powered wearables track vital signs like heart rate, blood pressure, and oxygen levels. Advanced algorithms analyze this data in real-time, providing actionable health insights and early warning signs of potential issues.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="text-cyan-600 font-bold text-lg mb-2">Personalized Recommendations</div>
                  <p className="text-gray-700">
                    These devices analyze user behavior and preferences to provide tailored fitness and wellness recommendations, from workout routines to dietary changes based on your activity levels and goals.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="text-cyan-600 font-bold text-lg mb-2">Predictive Analytics</div>
                  <p className="text-gray-700">
                    AI algorithms can predict potential health issues based on historical data patterns, enabling early intervention for conditions like heart problems, sleep disorders, or stress-related illnesses.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="text-cyan-600 font-bold text-lg mb-2">Seamless Integration</div>
                  <p className="text-gray-700">
                    AI wearables integrate with other smart devices, creating a cohesive ecosystem where your smartwatch can control your home, car, and other connected technologies with simple gestures or voice commands.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Applications Section */}
          <section id="applications" className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-800 mb-8 font-serif">Applications of AI-Powered Wearables</h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white border border-cyan-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold text-cyan-800 mb-4">Fitness and Wellness</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                      alt="Fitness Tracking" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg text-gray-700">
                      AI-powered wearables are revolutionizing the fitness industry by providing real-time feedback on workouts, tracking progress, and offering personalized coaching. Devices like WHOOP and Garmin use AI to optimize training schedules, recovery times, and even detect specific exercises automatically.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-cyan-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold text-cyan-800 mb-4">Healthcare</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1631815588090-d1bcbe9b4b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" 
                      alt="Healthcare Monitoring" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg text-gray-700">
                      In healthcare, AI wearables enable remote patient monitoring, chronic disease management, and even mental health support. These devices can monitor glucose levels for diabetics, detect early signs of depression through sleep and activity patterns, and even predict seizures for epilepsy patients.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-cyan-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold text-cyan-800 mb-4">Augmented Reality (AR)</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                      alt="AR Glasses" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg text-gray-700">
                      AR glasses powered by AI, like Microsoft HoloLens and Magic Leap, are transforming industries such as manufacturing, education, and retail. These devices overlay digital information onto the real world, enabling hands-free work guidance, immersive learning experiences, and interactive shopping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Challenges Section */}
          <section id="challenges" className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-800 mb-8 font-serif">Challenges and Considerations</h2>
            <p className="text-xl text-gray-700 mb-8">
              Despite their potential, AI-powered wearables face several significant challenges that must be addressed for widespread adoption and maximum benefit.
            </p>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-amber-800 mb-6">Key Challenges</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-amber-100 text-amber-800 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Data Privacy</h4>
                    <p className="text-gray-700">
                      Wearables collect vast amounts of personal data, raising concerns about how this data is stored, used, and protected. Users must trust that their sensitive health and behavioral information won't be misused or compromised.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-amber-100 text-amber-800 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5ZM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Battery Life</h4>
                    <p className="text-gray-700">
                      AI algorithms are computationally intensive, which can drain battery life quickly. Balancing powerful AI capabilities with reasonable battery duration remains a significant engineering challenge for wearable devices.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-amber-100 text-amber-800 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Accuracy</h4>
                    <p className="text-gray-700">
                      Ensuring the accuracy of AI algorithms, especially in healthcare applications, is critical to avoid false positives or negatives. Medical-grade wearables must meet stringent regulatory requirements and validation standards.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-amber-100 text-amber-800 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">User Adoption</h4>
                    <p className="text-gray-700">
                      Convincing users to adopt new wearable technologies can be challenging, especially if the devices are expensive, complex to use, or aesthetically unappealing. Balancing functionality with design is essential for mainstream adoption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Future Trends Section */}
          <section id="future-trends" className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-800 mb-8 font-serif">Future Trends</h2>
            <p className="text-xl text-gray-700 mb-8">
              The future of AI-powered wearables is bright, with several exciting developments on the horizon that will transform how we interact with technology and monitor our health.
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg mb-8">
              <img 
                src="https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Future of Wearable Technology" 
                className="w-full h-auto object-cover" 
              />
              <div className="bg-gray-50 p-3 text-sm text-gray-500 italic">
                Next-generation wearables will become more integrated with our daily lives, offering seamless and intuitive experiences
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white border border-cyan-100 p-6 rounded-xl shadow-sm">
                <h3 className="text-2xl font-semibold text-cyan-800 mb-4">Miniaturization</h3>
                <p className="text-lg text-gray-700">
                  Wearables will become smaller, lighter, and more comfortable to wear, with some devices potentially becoming nearly invisible. Smart contact lenses, tiny in-ear computers, and even electronic tattoos are all in development.
                </p>
              </div>
              <div className="bg-white border border-cyan-100 p-6 rounded-xl shadow-sm">
                <h3 className="text-2xl font-semibold text-cyan-800 mb-4">Enhanced AI Capabilities</h3>
                <p className="text-lg text-gray-700">
                  AI algorithms will become more sophisticated, enabling wearables to provide even more accurate and personalized insights. On-device AI processing will improve privacy and reduce latency for critical applications.
                </p>
              </div>
              <div className="bg-white border border-cyan-100 p-6 rounded-xl shadow-sm">
                <h3 className="text-2xl font-semibold text-cyan-800 mb-4">Integration with IoT</h3>
                <p className="text-lg text-gray-700">
                  Wearables will integrate seamlessly with the Internet of Things (IoT), creating a connected ecosystem where your devices communicate with each other to provide contextual assistance throughout your day.
                </p>
              </div>
              <div className="bg-white border border-cyan-100 p-6 rounded-xl shadow-sm">
                <h3 className="text-2xl font-semibold text-cyan-800 mb-4">New Use Cases</h3>
                <p className="text-lg text-gray-700">
                  As AI technology evolves, we'll see innovative applications like emotion detection, brain-computer interfaces, and advanced AR that can overlay digital information onto our physical world in increasingly natural ways.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-800 mb-8 font-serif">Conclusion</h2>
            <div className="bg-cyan-50 p-8 rounded-xl border border-cyan-100">
              <p className="text-xl text-gray-700 mb-6">
                AI-powered wearables are transforming how we interact with technology, offering personalized, real-time insights into our health, fitness, and daily lives. While challenges remain in areas like privacy, battery life, and accuracy, the potential of these devices is immense.
              </p>
              <p className="text-xl text-gray-700">
                As technology continues to evolve, we can expect AI-powered wearables to become even more integrated into our lives, revolutionizing industries from healthcare to entertainment and improving our overall well-being. The future of wearable technology is not just about devices we wear, but about creating seamless extensions of ourselves that enhance our capabilities and quality of life.
              </p>
            </div>
          </section>

          {/* Author Bio */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-cyan-200 flex items-center justify-center text-cyan-800 font-bold text-xl">
                SL
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">About Sarah Lee</h3>
                <p className="text-gray-600 mt-2">
                  Sarah Lee is a technology journalist and researcher specializing in wearable technology and artificial intelligence. With a background in computer science and human-computer interaction, she explores how emerging technologies are changing our relationship with the digital world.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-cyan-600 text-white p-3 rounded-full shadow-lg hover:bg-cyan-700 transition-colors z-30"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;