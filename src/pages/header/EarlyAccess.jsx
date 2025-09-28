import React, { useState } from "react";
import { motion } from "framer-motion";

const EarlyAccess = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Thank you for signing up! We'll notify you soon.");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FDEBD0] to-[#E6E6FA] text-gray-900 p-10">
      {/* Page Heading */}
      <motion.h1 
        className="text-4xl font-bold text-center text-purple-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Join Our Early Access Program
      </motion.h1>

      <p className="text-lg mt-4 text-center max-w-2xl text-gray-700">
        Be among the first to experience the future of AI with Ivish AI. Our early adopters will have exclusive access to our latest AI-powered innovations before public release.
      </p>

      {/* Signup Form */}
      <motion.form 
        onSubmit={handleSignup} 
        className="mt-6 flex flex-col sm:flex-row gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 w-80 text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-300"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex items-center gap-2"
        >
          Request Early Access 
        </button>
      </motion.form>

      {/* Message */}
      {message && <p className="mt-3 text-green-500">{message}</p>}

      {/* Product Features */}
      <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-bold text-purple-700">🚀 AI-Powered Insights</h3>
          <p className="text-gray-600 mt-2">Get data-driven recommendations tailored to your needs.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-bold text-purple-700">🤖 Smart Automation</h3>
          <p className="text-gray-600 mt-2">Let AI handle repetitive tasks and boost productivity.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-bold text-purple-700">📈 Scalable & Secure</h3>
          <p className="text-gray-600 mt-2">Enterprise-grade performance with top-tier security.</p>
        </div>
      </div>
    </div>
  );
};

export default EarlyAccess;