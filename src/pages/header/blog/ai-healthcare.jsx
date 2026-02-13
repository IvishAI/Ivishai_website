import React, { useState, useEffect } from 'react';
import { Share2, Menu, X, ChevronUp } from 'lucide-react';

// Sections for Table of Contents
const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'transforming-healthcare', title: 'How AI is Transforming Healthcare' },
  { id: 'applications', title: 'Applications of AI in Healthcare' },
  { id: 'challenges', title: 'Challenges in AI-Powered Healthcare' },
  { id: 'future-trends', title: 'Future Trends in AI-Powered Healthcare' },
  { id: 'conclusion', title: 'Conclusion' }
];

function App() {
  const [showTOC, setShowTOC] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);




  // Handle share functionality
  const handleShare = async () => {
    const title = "AI in Healthcare: Revolutionizing Patient Care";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-900 relative">
      {/* Header with controls */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md py-4 px-6 flex justify-between items-center">
        <h2 className="text-xl font-serif font-bold text-blue-900">AI in Healthcare</h2>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowTOC(!showTOC)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors text-blue-800"
          >
            {showTOC ? <X size={18} /> : <Menu size={18} />}
            <span className="hidden sm:inline">Contents</span>
          </button>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-white"
          >
            <Share2 size={18} />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </header>

      {/* Table of Contents Sidebar */}
      <div className={`fixed top-[72px] right-0 h-[calc(100vh-72px)] bg-white/95 backdrop-blur-md shadow-xl w-72 transform transition-transform duration-300 z-40 ${showTOC ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4 font-serif">Table of Contents</h3>
          <ul className="space-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left w-full px-3 py-2 rounded-lg transition-colors ${activeSection === section.id
                      ? 'bg-blue-100 text-blue-800 font-medium'
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
      <div className="px- py-12 flex justify-center">
        <article className="max-w-6xl w-full bg-white p-10 rounded-2xl shadow-2xl border border-gray-200">
          {/* Blog Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 mb-6 text-center font-serif leading-tight">
            AI in Healthcare: Revolutionizing Patient Care
          </h1>

          {/* Author and Date */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold">
              LW
            </div>
            <div>
              <p className="font-semibold text-gray-800">Lisa White</p>
              <p className="text-gray-500 text-sm">February 1, 2025</p>
            </div>
          </div>

          {/* Reading Time */}
          <div className="text-center text-gray-500 mb-10 text-sm">
            <span className="px-3 py-1 bg-gray-100 rounded-full">12 min read</span>
          </div>

          {/* Introduction */}
          <section id="introduction" className="mb-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Artificial Intelligence (AI) is transforming healthcare by enhancing diagnostics, treatment plans, and patient outcomes. From early disease detection to personalized medicine, AI is revolutionizing how healthcare is delivered. In this blog, we'll explore how AI is reshaping patient care, its applications, challenges, and the future of AI in healthcare.
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg mb-8">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="AI in Healthcare"
                className="w-full h-auto object-cover"
              />
              <div className="bg-gray-50 p-3 text-sm text-gray-500 italic">
                AI technologies are transforming medical diagnostics and patient care
              </div>
            </div>
          </section>

          {/* How AI is Transforming Healthcare */}
          <section id="transforming-healthcare" className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-8 font-serif">How AI is Transforming Healthcare</h2>
            <p className="text-xl text-gray-700 mb-8">
              AI is enabling healthcare providers to deliver more accurate, efficient, and personalized care. By analyzing vast amounts of medical data, AI systems can identify patterns, predict outcomes, and assist in decision-making. Here are some key ways AI is transforming healthcare:
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm border border-blue-100">
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Key Areas of Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="text-blue-600 font-bold text-lg mb-2">Diagnostics</div>
                  <p className="text-gray-700">
                    AI algorithms analyze medical images, lab results, and patient histories to assist in accurate and early diagnosis.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="text-blue-600 font-bold text-lg mb-2">Treatment Personalization</div>
                  <p className="text-gray-700">
                    AI helps create personalized treatment plans based on a patient's genetic makeup, lifestyle, and medical history.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="text-blue-600 font-bold text-lg mb-2">Predictive Analytics</div>
                  <p className="text-gray-700">
                    AI predicts patient outcomes, such as the likelihood of readmission or disease progression, enabling proactive care.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="text-blue-600 font-bold text-lg mb-2">Administrative Efficiency</div>
                  <p className="text-gray-700">
                    AI automates administrative tasks like scheduling, billing, and documentation, freeing up time for healthcare providers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Applications of AI in Healthcare */}
          <section id="applications" className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-8 font-serif">Applications of AI in Healthcare</h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white border border-blue-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Medical Imaging</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img
                      src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      alt="Medical Imaging"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg text-gray-700">
                      AI algorithms analyze medical images (e.g., X-rays, MRIs) to detect abnormalities like tumors, fractures, or infections. For example, AI can assist radiologists in identifying early signs of cancer, improving diagnostic accuracy by up to 30% in some studies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-blue-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Drug Discovery</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img
                      src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      alt="Drug Discovery"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg text-gray-700">
                      AI accelerates drug discovery by predicting how compounds interact with biological targets. This reduces the time and cost of developing new medications, potentially cutting development time from years to months.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-blue-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Remote Patient Monitoring</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img
                      src="https://images.unsplash.com/photo-1551419762-4a3d998f6292?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      alt="Remote Patient Monitoring"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg text-gray-700">
                      AI-powered wearables and devices monitor patients' health in real-time, enabling remote care for chronic conditions like diabetes or heart disease. These systems can detect anomalies and alert healthcare providers before a crisis occurs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-blue-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Virtual Health Assistants</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img
                      src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1178&q=80"
                      alt="Virtual Health Assistants"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg text-gray-700">
                      AI chatbots and virtual assistants provide patients with instant medical advice, appointment scheduling, and medication reminders. These tools improve patient engagement and reduce the burden on healthcare staff.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Challenges in AI-Powered Healthcare */}
          <section id="challenges" className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-8 font-serif">Challenges in AI-Powered Healthcare</h2>
            <p className="text-xl text-gray-700 mb-8">
              Despite its potential, AI-powered healthcare faces several challenges:
            </p>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-orange-800 mb-6">Key Challenges</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-orange-100 text-orange-800 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Data Privacy</h4>
                    <p className="text-gray-700">
                      AI systems require access to sensitive patient data, raising concerns about privacy and compliance with regulations like HIPAA. Ensuring data security while maintaining utility is a delicate balance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-orange-100 text-orange-800 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Bias in Algorithms</h4>
                    <p className="text-gray-700">
                      AI models can inherit biases from training data, leading to unequal treatment recommendations for different demographic groups. This can perpetuate or even amplify existing healthcare disparities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-orange-100 text-orange-800 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Regulatory Hurdles</h4>
                    <p className="text-gray-700">
                      The approval process for AI-powered medical devices and algorithms can be lengthy and complex. Regulatory frameworks are still evolving to keep pace with rapid technological advancements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-orange-100 text-orange-800 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Integration with Existing Systems</h4>
                    <p className="text-gray-700">
                      Integrating AI tools with legacy healthcare systems can be challenging and costly. Many healthcare institutions operate on outdated infrastructure that isn't designed to work with modern AI solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Future Trends in AI-Powered Healthcare */}
          <section id="future-trends" className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-8 font-serif">Future Trends in AI-Powered Healthcare</h2>
            <p className="text-xl text-gray-700 mb-8">
              The future of AI in healthcare is promising, with several exciting trends on the horizon:
            </p>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-purple-600 text-4xl mb-4">01</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Explainable AI (XAI)</h3>
                  <p className="text-gray-700">
                    Efforts are underway to make AI systems more transparent, enabling healthcare providers to understand how decisions are made. This will increase trust and adoption of AI in clinical settings.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-purple-600 text-4xl mb-4">02</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">AI-Driven Genomics</h3>
                  <p className="text-gray-700">
                    AI will play a larger role in analyzing genetic data to develop personalized treatments and therapies. This could revolutionize how we approach diseases with genetic components.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-purple-600 text-4xl mb-4">03</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">AI in Mental Health</h3>
                  <p className="text-gray-700">
                    AI-powered tools will be used to diagnose and treat mental health conditions, such as depression and anxiety. These tools can provide support between therapy sessions and identify warning signs early.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-purple-600 text-4xl mb-4">04</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Collaborative AI</h3>
                  <p className="text-gray-700">
                    AI systems will work alongside healthcare providers to enhance decision-making and improve patient outcomes. This human-AI partnership will leverage the strengths of both.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-8 font-serif">Conclusion</h2>
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
              <p className="text-xl text-gray-700 mb-6">
                AI is revolutionizing healthcare by enabling more accurate diagnostics, personalized treatments, and efficient care delivery. While challenges remain, ongoing advancements in AI technology are paving the way for a future where healthcare is more accessible, effective, and patient-centric.
              </p>
              <p className="text-xl text-gray-700">
                As we continue to embrace AI, its role in shaping the future of healthcare will only grow stronger. The key to success lies in addressing the challenges while maximizing the benefits, ensuring that AI serves as a powerful tool to enhance human capabilities rather than replace them.
              </p>
            </div>
          </section>

          {/* Author Bio */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold text-xl">
                LW
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">About Lisa White</h3>
                <p className="text-gray-600 mt-2">
                  Lisa White is a healthcare technology researcher and writer with over 15 years of experience in the field. She specializes in the intersection of AI and healthcare, and has published numerous articles on the subject.
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
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-30"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;