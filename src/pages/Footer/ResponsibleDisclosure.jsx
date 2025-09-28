import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Mail } from "lucide-react";

const ResponsibleDisclosure = () => {
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
        <h1 className="text-5xl font-extrabold flex justify-center items-center gap-3">
          <ShieldAlert size={42} />
          Responsible Disclosure
        </h1>
        <p className="text-lg text-white/90 mt-4 max-w-3xl mx-auto">
          Security is a <strong>collective effort</strong>. We appreciate ethical hackers & researchers for helping us maintain a secure system.

        </p>
      </motion.section>

      {/* 🔹 Introduction */}
      <section className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">Reporting Security Vulnerabilities</h2>
        <p className="text-lg text-gray-700 mt-2">
          At <strong>IvishAI Quantum Pvt Ltd</strong>, we take <strong>security seriously</strong> and encourage security researchers to report vulnerabilities <strong>responsibly</strong>.

          If you identify a security issue, please follow the <strong>guidelines</strong> below to <strong>help us address it promptly</strong>.

        </p>
      </section>

      {/* 🔹 Guidelines for Responsible Disclosure */}
      <section className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">Responsible Disclosure Guidelines</h2>
        <p className="text-lg text-gray-700 mt-2">
          To ensure security and <strong>ethical vulnerability reporting</strong>, please adhere to the following guidelines:

        </p>

        <ul className="list-disc text-lg text-gray-700 mt-4 pl-6 space-y-3">
          <li>
            <strong>Do not exploit</strong> vulnerabilities or access data without permission.

          </li>
          <li>
            <strong>Do not disrupt</strong> IvishAI services or user experience.

          </li>
          <li>
            Provide <strong>detailed reports</strong> including proof of concept (PoC) and steps to reproduce.

          </li>
          <li>
            <strong>Respect privacy</strong> – Do not disclose vulnerabilities publicly before we resolve them.

          </li>
          <li>
            <strong>Submit findings securely</strong> to our <strong>Security Team</strong> for prompt review and resolution.

          </li>
        </ul>
      </section>

      {/* 🔹 Reporting a Security Issue */}
      <section className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">How to Report a Vulnerability</h2>
        <p className="text-lg text-gray-700 mt-2">
          If you've found a <strong>security vulnerability</strong>, please report it responsibly via <strong>email</strong> to our <strong>Security Team</strong>:

        </p>

        <motion.div
          className="mt-6 flex justify-center items-center bg-blue-100 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Mail size={32} className="text-blue-700" />
          <p className="text-lg font-semibold text-blue-900 ml-3">security@ivishai.com</p>
        </motion.div>

        <p className="text-md text-gray-600 mt-4 text-center">
          Please include <strong>technical details, impact assessment, and potential fixes</strong>.

        </p>
      </section>

      {/* 🔹 Our Commitment */}
      <section className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">Our Commitment</h2>
        <p className="text-lg text-gray-700 mt-2">
          We <strong>appreciate</strong> the contributions of the security community in helping us <strong>strengthen</strong> our platform.

          <strong>Researchers who report responsibly</strong> will be recognized and <strong>may qualify</strong> for our <strong>IvishAI Security Hall of Fame</strong>.

        </p>

        <ul className="list-disc text-lg text-gray-700 mt-4 pl-6 space-y-3">
          <li>
            We will <strong>acknowledge your report</strong> within <strong>48 hours</strong>.

          </li>
          <li>
            If validated, we will <strong>prioritize a fix</strong> based on severity.

          </li>
          <li>
            Researchers following <strong>responsible disclosure practices</strong> will be <strong>publicly recognized</strong>.

          </li>
        </ul>
      </section>

      {/* 🔹 Call to Action */}
      <motion.section
        className="mt-20 py-12 bg-blue-100 text-center rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-gray-900">Join Us in Making AI Secure</h2>
        <p className="text-lg text-gray-700 mt-2 max-w-3xl mx-auto">
          We welcome security professionals & ethical hackers to <strong>help protect AI-driven innovation</strong>.

        </p>
        <motion.a
          href="mailto:security@ivishai.com"
          className="mt-6 inline-block px-8 py-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Report a Vulnerability
        </motion.a>
      </motion.section>

    </div>
  );
};

export default ResponsibleDisclosure;
