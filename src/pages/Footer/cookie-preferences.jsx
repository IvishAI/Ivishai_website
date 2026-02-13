import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { CheckCircle, Cookie } from "lucide-react";

const CookiesPreference = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [preferences, setPreferences] = useState({

    essential: true,
    analytics: false,
    personalized: false,
  });

  const togglePreference = (type) => {
    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-900 px-6 md:px-16 py-16">

      {/* 🔹 Header Section */}
      <motion.section
        className="w-full text-center bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-16 px-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold flex justify-center items-center gap-3">
          <Cookie size={42} />
          Cookies Preferences
        </h1>
        <p className="text-lg text-white/90 mt-4 max-w-3xl mx-auto">
          IvishAI <strong>uses cookies to enhance your browsing experience</strong>. Choose which cookies you allow.

        </p>
      </motion.section>

      {/* 🔹 Cookie Options Section */}
      <section className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">Manage Your Preferences</h2>
        <p className="text-lg text-gray-700 mt-2">
          Select the cookies you would like to enable. <strong>You can change these settings anytime.</strong>

        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[
            {
              type: "essential",
              icon: <CheckCircle size={42} className="text-yellow-600" />,
              title: "✅ Essential Cookies",
              desc: "Required for core functionalities. Cannot be disabled.",
              disabled: true,
            },
            {
              type: "analytics",
              icon: <CheckCircle size={42} className={`text-${preferences.analytics ? "green" : "gray"}-600`} />,
              title: preferences.analytics ? "✅ Analytics Cookies" : "🔲 Analytics Cookies",
              desc: "Helps us improve site performance and user experience.",
            },
            {
              type: "personalized",
              icon: <CheckCircle size={42} className={`text-${preferences.personalized ? "green" : "gray"}-600`} />,
              title: preferences.personalized ? "✅ Personalized Cookies" : "🔲 Personalized Cookies",
              desc: "Tailor AI experiences to match your preferences.",
            },
          ].map((cookie, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 text-center border border-gray-200 hover:shadow-xl transition ${cookie.disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
                }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={!cookie.disabled ? { scale: 1.05 } : {}}
              onClick={() => !cookie.disabled && togglePreference(cookie.type)}
            >
              <div className="mb-4 flex justify-center">{cookie.icon}</div>
              <h3 className={`text-xl font-bold ${cookie.disabled ? "text-gray-500" : "text-yellow-600"}`}>
                {cookie.title}
              </h3>
              <p className="text-gray-700 mt-2">{cookie.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Save Preferences Button */}
      <motion.section
        className="mt-16 max-w-5xl mx-auto bg-yellow-100 py-12 px-8 text-center rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-gray-900">Your Privacy Matters</h2>
        <p className="text-lg text-gray-700 mt-2 max-w-3xl mx-auto">
          Click <strong>"Save Preferences"</strong> to confirm your choices.

        </p>
        <motion.button
          className="mt-6 px-8 py-3 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Save Preferences
        </motion.button>
      </motion.section>

    </div>
  );
};

export default CookiesPreference;
