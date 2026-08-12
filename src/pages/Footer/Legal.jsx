import React, { useEffect } from "react";

import { motion } from "framer-motion";

const Legal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="w-full min-h-screen bg-white text-gray-900 px-6 md:px-16 py-16">
      
      {/* 🔹 Header Section */}
      <motion.section
        className="w-full text-center bg-gradient-to-r from-blue-700 to-purple-700 text-white py-16 px-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold">Legal & Terms of Service</h1>
        <p className="text-lg text-white/90 mt-4 max-w-3xl mx-auto">
          Protecting your rights, ensuring transparency, and maintaining compliance with global data protection laws.
        </p>
      </motion.section>

      {/* 🔹 Terms of Service */}
      <section className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">Terms of Service</h2>
        <p className="text-lg text-gray-700 mt-2">
          By using <strong>IvishAI Quantum Pvt Ltd</strong> services, you agree to our terms, including:

        </p>

        {/* 🔹 List of Legal Points */}
        <ul className="list-disc text-lg text-gray-700 mt-4 pl-6 space-y-3">
          <li>
            <strong>Acceptable Use:</strong> Users must adhere to ethical usage of our AI-powered assistive & language tools.
          </li>
          <li>
            <strong>Intellectual Property:</strong> All <strong>content, software, and AI models</strong> remain the exclusive property of IvishAI.

          </li>
          <li>
            <strong>Data Protection:</strong> We ensure compliance with <strong>GDPR, CCPA</strong>, and other global data privacy regulations.

          </li>
          <li>
            <strong>User Responsibilities:</strong> Users must comply with all applicable laws when interacting with IvishAI products.
          </li>
        </ul>
      </section>

      {/* 🔹 Privacy & Data Protection */}
      <section className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">Privacy & Data Protection</h2>
        <p className="text-lg text-gray-700 mt-2">
          Your data privacy and security are our top priorities. We implement <strong>end-to-end encryption</strong>, secure data storage, and robust policies to protect user data.

        </p>

        <ul className="list-disc text-lg text-gray-700 mt-4 pl-6 space-y-3">
          <li>
            <strong>Data Collection:</strong> We only collect <strong>essential user data</strong> for functionality and do not sell personal information.

          </li>
          <li>
            <strong>Third-Party Sharing:</strong> We <strong>do not</strong> share user data without explicit consent.

          </li>
          <li>
            <strong>Opt-Out & Deletion:</strong> Users have the right to <strong>delete or export</strong> their data upon request.

          </li>
        </ul>
      </section>

      {/* 🔹 Compliance & Updates */}
      <section className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">Compliance & Policy Updates</h2>
        <p className="text-lg text-gray-700 mt-2">
          We regularly review and update our legal policies to remain compliant with evolving global regulations.
        </p>

        <ul className="list-disc text-lg text-gray-700 mt-4 pl-6 space-y-3">
          <li>
            <strong>GDPR Compliant</strong> – Users have full control over their data within our systems.

          </li>
          <li>
            <strong>CCPA Transparency</strong> – California residents can request detailed reports on how their data is handled.

          </li>
          <li>
            <strong>Regular Audits</strong> – We conduct internal security and privacy audits every <strong>6 months</strong>.

          </li>
        </ul>
      </section>

      {/* 🔹 Contact & Legal Assistance */}
      <motion.section
        className="mt-20 py-12 bg-blue-100 text-center rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-gray-900">Need Legal Assistance?</h2>
        <p className="text-lg text-gray-700 mt-2 max-w-3xl mx-auto">
          For any legal inquiries or <strong>data requests</strong>, please contact our <strong>legal team</strong> at:

        </p>
        <p className="text-lg font-semibold text-blue-900 mt-4">📧 ivishai.supprt@gmail.com</p>
      </motion.section>

    </div>
  );
};

export default Legal;
