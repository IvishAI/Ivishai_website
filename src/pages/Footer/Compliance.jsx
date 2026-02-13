import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Globe, CheckCircle } from "lucide-react";

const Compliance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-900 px-6 md:px-16 py-16">
      
      {/* 🔹 Header Section */}
      <motion.section
        className="w-full text-center bg-gradient-to-r from-green-700 to-blue-700 text-white py-16 px-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold flex justify-center items-center gap-3">
          <ShieldCheck size={42} />
          <span className="font-bold">COMPLIANCE & REGULATORY STANDARDS</span>
        </h1>
        <p className="text-lg text-white/90 mt-4 max-w-3xl mx-auto font-semibold">
          IvishAI strictly adheres to international security and data protection regulations to ensure compliance, transparency, and accountability.
        </p>
      </motion.section>

      {/* 🔹 Compliance Frameworks Section */}
      <section className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">OUR COMMITMENT TO COMPLIANCE</h2>
        <p className="text-lg text-gray-700 mt-2 font-semibold">
          We align with global regulatory frameworks and industry standards to protect data privacy, security, and ethical AI usage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[
            {
              icon: <Globe size={42} className="text-green-600" />,
              title: "GDPR – Europe",
              desc: "We comply with General Data Protection Regulation (GDPR), ensuring the privacy and rights of European users."
            },
            {
              icon: <FileText size={42} className="text-green-600" />,
              title: "DPDP Act – India",
              desc: "We adhere to India’s Digital Personal Data Protection (DPDP) Act, focusing on user data rights and security."
            },
            {
              icon: <CheckCircle size={42} className="text-green-600" />,
              title: "SOC 2 & ISO 27001",
              desc: "Our data security & management meet SOC 2 and ISO 27001 standards, ensuring operational excellence."
            }
          ].map((compliance, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200 hover:shadow-xl transition"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 flex justify-center">{compliance.icon}</div>
              <h3 className="text-xl font-bold text-green-600">{compliance.title}</h3>
              <p className="text-gray-700 mt-2 font-semibold">{compliance.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Compliance Reports Section */}
      <motion.section
        className="mt-16 max-w-5xl mx-auto bg-blue-100 py-12 px-8 text-center rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-gray-900">VIEW OUR COMPLIANCE REPORTS</h2>
        <p className="text-lg text-gray-700 mt-2 max-w-3xl mx-auto font-semibold">
          Explore our comprehensive security & compliance reports to understand how we safeguard user data.
        </p>
        <motion.a
          href="/compliance-reports"
          className="mt-6 inline-block px-8 py-3 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800 transition-all font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          VIEW REPORTS
        </motion.a>
      </motion.section>

    </div>
  );
};

export default Compliance;
