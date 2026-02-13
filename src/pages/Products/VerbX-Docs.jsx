import React from "react";
import { ChevronLeft } from "lucide-react";

const Docs = () => {
  return (
    <div className="bg-gradient-to-b from-[#F5F9FF] to-white min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold text-gray-900">VerbX </h1>
          <nav>
            <a href="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </a>
          </nav>
        </div>
      </header>

      
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Documentation</h2>

        {/* Introduction */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h3>
          <p className="text-gray-700 leading-relaxed">
            VerbX is an AI-powered multilingual communication platform designed for individuals, enterprises, and government agencies. It offers real-time, sentiment-aware translation across 100+ languages and is integrated with AI-driven learning, AR/VR simulations, and enterprise API solutions.
          </p>
        </section>

        {/* Installation Guide */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Installation Guide</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Step 1: Download VerbX</h4>
            <p className="text-gray-700 mb-4">
              Visit the <a href="/LinguaFlowPage" className="text-blue-600 hover:underline">VerbX download page</a> and choose the appropriate version for your platform (Windows, macOS, Linux, or Android).
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mb-2">Step 2: Install the Software</h4>
            <p className="text-gray-700 mb-4">
              Follow the installation instructions for your platform:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Windows:</strong> Run the installer and follow the on-screen instructions.</li>
              <li><strong>macOS:</strong> Drag the VerbX app to your Applications folder.</li>
              <li><strong>Linux:</strong> Use the terminal to install the .deb or .rpm package.</li>
              <li><strong>Android:</strong> Install the APK file from the download page.</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-800 mb-2">Step 3: Launch VerbX</h4>
            <p className="text-gray-700">
              Once installed, launch VerbX and sign in with your account to start using the platform.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Real-Time AI Translation</h4>
              <p className="text-gray-700">Speech, text, and video subtitles across 100+ languages.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Sentiment-Aware Chat AI</h4>
              <p className="text-gray-700">Detects tone and adjusts responses accordingly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Industry-Specific AI</h4>
              <p className="text-gray-700">Custom translation models for medical, legal, and financial sectors.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Enterprise API Licensing</h4>
              <p className="text-gray-700">AI-driven translation tools for BPOs, e-commerce, and global businesses.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">AR/VR Language Immersion</h4>
              <p className="text-gray-700">AI-powered cultural and business simulations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Secure & Scalable</h4>
              <p className="text-gray-700">Blockchain-based security and adaptive AI learning.</p>
            </div>
          </div>
        </section>

        {/* Who Can Benefit? */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who Can Benefit from VerbX?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Businesses, Call Centers, & BPOs</h4>
              <p className="text-gray-700">AI-powered multilingual workforce solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Educational Institutions</h4>
              <p className="text-gray-700">AI-driven language learning tools for students & professionals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Government & NGOs</h4>
              <p className="text-gray-700">AI-powered accessibility for official documentation & public communication.</p>
            </div>
          </div>
        </section>

        {/* Pricing & Availability */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Pricing & Availability</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Basic (Free)</h4>
              <p className="text-gray-700">Core features, AI-powered translation (ad-supported).</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Pro (₹99/month)</h4>
              <p className="text-gray-700">Advanced multilingual support, real-time sentiment-aware chat.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Enterprise (₹999/user/month)</h4>
              <p className="text-gray-700">API access, custom AI models, workforce integration.</p>
            </div>
          </div>
        </section>

        {/* Back to Products */}
        <div className="mt-16 text-center">
          <a href="/products" className="text-blue-600 flex items-center justify-center gap-2 text-lg font-medium hover:underline">
            <ChevronLeft size={24} />
            Back to Products
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-16 text-center">
        <p>&copy; 2025 Ivish AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Docs;