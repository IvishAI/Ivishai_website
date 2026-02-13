import { motion } from "framer-motion";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-black text-[#ccd6f6] font-sora p-8 md:p-12 lg:p-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Page Header */}
        <div className="mb-12 text-center border-b border-[#64ffda]/30 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent mb-4">
            Terms & Conditions – Ivish AI
          </h1>
          <div className="text-[#8892b0] space-y-2">
            <p>Last Updated: December 5, 2025</p>
            <p>Company: Ivish AI (IvishAI Quantum Pvt. Ltd.)</p>
            <p>Product Covered: VerbX – Language Companion App</p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {termsSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-panel p-6 rounded-xl"
            >
              {/* Section Title */}
              <div className="flex items-start mb-4">
                <div className="text-[#64ffda] text-2xl font-bold mr-4">
                  {index + 1}.
                </div>
                <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-[#13D8F6] to-[#64ffda] bg-clip-text text-transparent">
                  {section.title}
                </h2>
              </div>

              {/* Section Content */}
              <div className="ml-8 space-y-6">
                {section.content.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-[#64ffda]/30 pl-4">
                    <div className="text-[#8892b0] space-y-3">
                      {Array.isArray(item.text) ? (
                        <ul className="space-y-2 list-disc list-inside">
                          {item.text.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{item.text}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-6 border-2 border-[#64ffda]/30 rounded-xl text-center"
        >
          <h3 className="text-2xl text-[#64ffda] mb-4">Contact Us</h3>
          <p className="text-[#8892b0] mb-2">Email: 
            <a
              href="mailto:ivishai.supprt@gmail.com"
              className="text-[#E26426] ml-2 hover:text-[#ff8c63] transition-colors"
            >
              ivishai.supprt@gmail.com
            </a>
          </p>
          <p className="text-[#8892b0]">Phone: +91 7013440427</p>
          <p className="text-[#8892b0] mt-2">IvishAI Quantum Pvt. Ltd., Hyderabad, India</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TermsOfUse;

/* ------------------ TERMS SECTIONS ------------------ */

const termsSections = [
  {
    title: "Introduction",
    content: [
      {
        text: [
          "Welcome to Ivish AI.",
          "These Terms & Conditions govern your use of the Ivish AI website, the VerbX mobile app, and all related services.",
          "By accessing or using our services, you agree to these Terms. If you do not agree, please stop using the service."
        ]
      }
    ]
  },
  {
    title: "Definitions",
    content: [
      {
        text: [
          "“Company”, “We”, “Us” refers to Ivish AI (IvishAI Quantum Pvt. Ltd.).",
          "“VerbX” refers to the language companion app developed by Ivish AI.",
          "“User”, “You” refers to anyone using our services.",
          "“Services” refers to all features offered through VerbX and the Ivish AI website."
        ]
      }
    ]
  },
  {
    title: "Eligibility",
    content: [
      {
        text: [
          "You must be at least 13 years old to use VerbX.",
          "If you are under the legal age of majority, you must use the service under parental supervision.",
          "VerbX is not intended for children under 13."
        ]
      }
    ]
  },
  {
    title: "User Account",
    content: [
      {
        text: [
          "Some features require an account using Email or Google Sign-In.",
          "You agree to provide accurate information and keep credentials secure.",
          "We may suspend accounts involved in misuse or violations."
        ]
      }
    ]
  },
  {
    title: "Acceptable Use",
    content: [
      {
        text: [
          "You agree NOT to use VerbX to break laws or harm others.",
          "Do not impersonate others, generate harmful content, reverse engineer the app, or misuse translations.",
          "Misuse may result in temporary or permanent restrictions."
        ]
      }
    ]
  },
  {
    title: "Language Conversion Safety",
    content: [
      {
        text: [
          "VerbX aims for clarity and respect across languages.",
          "Automated output is not always perfect.",
          "Users remain responsible for interpretation, especially in legal, medical, or sensitive contexts.",
          "Do not rely on VerbX as a substitute for certified professionals."
        ]
      }
    ]
  },
  {
    title: "Privacy & Data Handling",
    content: [
      {
        text: [
          "VerbX follows a zero-storage design by default—nothing is saved unless you manually add it to your phrasebook.",
          "Sensitive data is encrypted during transmission.",
          "We do not sell personal data.",
          "See our Privacy Policy for full details."
        ]
      }
    ]
  },
  {
    title: "User-Generated Content",
    content: [
      {
        text: [
          "Users retain ownership of the content they type, upload, or save.",
          "You grant us permission to process content only to provide services.",
          "We may remove illegal or harmful content."
        ]
      }
    ]
  },
  {
    title: "Subscription & Payments",
    content: [
      {
        text: [
          "Premium features may require payment.",
          "Payments are processed through Google Play, Apple App Store, or authorized gateways.",
          "We do not store card details.",
          "Subscriptions auto-renew unless cancelled.",
          "Refunds are issued only where legally required."
        ]
      }
    ]
  },
  {
    title: "Intellectual Property",
    content: [
      {
        text: [
          "All intellectual property related to Ivish AI and VerbX belongs to IvishAI Quantum Pvt. Ltd.",
          "You may not copy, reproduce, or distribute any part of our services without permission."
        ]
      }
    ]
  },
  {
    title: "Third-Party Services",
    content: [
      {
        text: [
          "VerbX may rely on third-party services (authentication, cloud systems, analytics).",
          "You agree to their terms where applicable.",
          "We are not responsible for third-party availability or behavior."
        ]
      }
    ]
  },
  {
    title: "Service Availability",
    content: [
      {
        text: [
          "We aim to provide smooth service but do not guarantee uninterrupted access.",
          "Maintenance, updates, or outages may occur.",
          "Features may change or be discontinued at any time."
        ]
      }
    ]
  },
  {
    title: "Limitation of Liability",
    content: [
      {
        text: [
          "Ivish AI is not liable for indirect, incidental, or consequential damages.",
          "We are not liable for misunderstandings, interruptions, or reliance on automated output.",
          "Total liability is limited to the amount paid for premium services in the past 12 months."
        ]
      }
    ]
  },
  {
    title: "Indemnification",
    content: [
      {
        text: [
          "You agree to indemnify Ivish AI for claims arising from misuse, violations, or harmful actions."
        ]
      }
    ]
  },
  {
    title: "Termination",
    content: [
      {
        text: [
          "We may suspend or terminate your account for violations, misuse, fraud, or harmful behavior.",
          "Users may delete their account anytime."
        ]
      }
    ]
  },
  {
    title: "Changes to These Terms",
    content: [
      {
        text: [
          "We may update these Terms periodically.",
          "Changes will be reflected in the updated date and may be communicated in-app.",
          "Continued use implies acceptance."
        ]
      }
    ]
  },
  {
    title: "Governing Law",
    content: [
      {
        text: [
          "These Terms are governed by Indian law with jurisdiction in Hyderabad, Telangana."
        ]
      }
    ]
  },
  {
    title: "Contact Us",
    content: [
      {
        text: [
          "For inquiries email ivishai.supprt@gmail.com or call +91 7013440427.",
          "IvishAI Quantum Pvt. Ltd., Hyderabad, India."
        ]
      }
    ]
  }
];
