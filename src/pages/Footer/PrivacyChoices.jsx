import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { ShieldCheck, Trash2, Download, UserX } from "lucide-react";

const PrivacyChoices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="w-full min-h-screen bg-gray-50 text-gray-900 px-6 md:px-16 py-16">
      
      {/* 🔹 Header Section */}
      <motion.section
        className="w-full text-center bg-gradient-to-r from-blue-700 to-purple-600 text-white py-16 px-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold flex justify-center items-center gap-3">
          <ShieldCheck size={42} />
          Your Privacy Choices
        </h1>
        <p className="text-lg text-white/90 mt-4 max-w-3xl mx-auto">
          At <strong>IvishAI</strong>, we respect your right to control your personal data. <strong>Manage your privacy settings below.</strong>

        </p>
      </motion.section>

      {/* 🔹 Privacy Options Section */}
      <section className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">Manage Your Privacy</h2>
        <p className="text-lg text-gray-700 mt-2">
          You have full control over how your data is used. Choose the options below to manage your privacy settings.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[
            {
              icon: <Trash2 size={42} className="text-red-600" />,
              title: "Delete My Data",
              desc: "Request the complete removal of your personal data from our system.",
            },
            {
              icon: <UserX size={42} className="text-yellow-600" />,
              title: "Opt-Out of AI Processing",
              desc: "Prevent your data from being used in AI-driven models and analytics.",
            },
            {
              icon: <Download size={42} className="text-blue-600" />,
              title: "Download My Data",
              desc: "Request a report with all personal data associated with your account.",
            },
          ].map((privacy, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200 hover:shadow-xl transition"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 flex justify-center">{privacy.icon}</div>
              <h3 className="text-xl font-bold text-blue-600">{privacy.title}</h3>
              <p className="text-gray-700 mt-2">{privacy.desc}</p>
              <motion.button
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Manage
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Additional Information */}
      <motion.section
        className="mt-16 max-w-5xl mx-auto bg-blue-100 py-12 px-8 text-center rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-gray-900">Need Assistance?</h2>
        <p className="text-lg text-gray-700 mt-2 max-w-3xl mx-auto">
          If you need help managing your privacy preferences, feel free to <strong>contact our support team</strong>.

        </p>
        <motion.a
          href="/contact"
          className="mt-6 inline-block px-8 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Support
        </motion.a>
      </motion.section>

    </div>
  );
};

export default PrivacyChoices;
