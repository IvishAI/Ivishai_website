import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-[#ccd6f6] font-sora p-8 md:p-12 lg:p-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="mb-12 text-center border-b border-[#64ffda]/30 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent mb-4">
            Privacy Policy – IvishAI Quantum Private Limited
          </h1>

          <div className="text-[#8892b0] space-y-2">
            <p>Last Updated: December 5, 2025</p>
            <p>Company: IvishAI Quantum Private Limited (“Ivish AI”)</p>
            <p>Product Covered: VerbX – Real-Time Language Companion App</p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
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
                    {item.subtitle && (
                      <h3 className="text-xl text-[#64ffda] mb-2">
                        {item.subtitle}
                      </h3>
                    )}

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
          <h3 className="text-2xl text-[#64ffda] mb-4">Contact Information</h3>

          <p className="text-[#8892b0] mb-1">
            Email:
            <a
              href="mailto:ivishai.supprt@gmail.com"
              className="text-[#E26426] ml-2 hover:text-[#ff8c63] transition-colors"
            >
              ivishai.supprt@gmail.com
            </a>
          </p>

          <p className="text-[#8892b0]">Phone: +91 7013440427</p>

          <p className="text-[#8892b0] mt-2">
            IvishAI Quantum Private Limited, Hyderabad, Telangana, India
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

/* ------------------ UPDATED SECTIONS ------------------ */

const sections = [
  {
    title: "Introduction",
    content: [
      {
        text: [
          "Ivish AI (“we”, “our”, “us”) is committed to protecting your privacy and keeping your data safe.",
          "This Privacy Policy explains what information we collect, how we use it, how we protect it, when it is shared, and the rights you have as a user.",
          "VerbX is built with privacy-first principles. We do not store your voice, text, or camera data unless you choose to save something to your Phrasebook.",
          "By using our website or VerbX, you agree to this Privacy Policy."
        ]
      }
    ]
  },

  {
    title: "What This Policy Covers",
    content: [
      {
        text: [
          "This Privacy Policy applies to:",
          "• Ivish AI’s official website",
          "• VerbX mobile application",
          "• Any online features, services, or communications we provide",
          "This policy does NOT apply to unaffiliated third-party services or websites we do not operate."
        ]
      }
    ]
  },

  {
    title: "Information We Collect",
    content: [
      {
        subtitle: "3.1 Information You Provide",
        text: [
          "Account Information (Email, Google Sign-In):",
          "• Email address",
          "• Name (if shared via Google)",
          "• Phone number (if manually entered)",
          "User Content Examples:",
          "• Typed text",
          "• Voice inputs",
          "• Camera-scanned text",
          "• Saved phrases in Phrasebook",
          "Important: VerbX does NOT store your voice/text/camera data unless you manually save it."
        ]
      },

      {
        subtitle: "3.2 Information Collected Automatically",
        text: [
          "We may collect technical data such as:",
          "• Device model & OS",
          "• IP address",
          "• Crash logs & diagnostics",
          "• Network type",
          "• Usage patterns",
          "Audio/Camera Inputs:",
          "• Processed in real-time only",
          "• Never stored unless you save content"
        ]
      },

      {
        subtitle: "3.3 Location Information",
        text: [
          "We may collect approximate location to:",
          "• apply regional language settings",
          "• prevent fraud",
          "• improve system performance",
          "We do not collect precise GPS unless required by a feature and permitted by you."
        ]
      },

      {
        subtitle: "3.4 Cookies & Website Analytics",
        text: [
          "Our website may use cookies for security, performance, and personalization.",
          "You may disable cookies through your browser."
        ]
      }
    ]
  },

  {
    title: "How We Use Your Information",
    content: [
      {
        text: [
          "We use your information to:",
          "• provide language conversion",
          "• authenticate users",
          "• personalize experience",
          "• process payments (if applicable)",
          "• fix bugs and improve performance",
          "• secure our systems",
          "• communicate updates",
          "We do NOT sell your data and do NOT use your content for AI training."
        ]
      }
    ]
  },

  {
    title: "Phrasebook Storage (User-Controlled Only)",
    content: [
      {
        text: [
          "VerbX follows a strict user-controlled memory approach:",
          "• Only what YOU save is stored.",
          "• All saved data is encrypted.",
          "• You may delete your data anytime.",
          "• Nothing else is stored.",
          "• Real-time data is deleted after use."
        ]
      }
    ]
  },

  {
    title: "Sharing of Information",
    content: [
      {
        subtitle: "6.1 Service Providers",
        text: [
          "We may share limited information with trusted providers who enable:",
          "• cloud hosting",
          "• authentication",
          "• crash analytics",
          "• payment processing",
          "These providers follow strict security standards."
        ]
      },

      {
        subtitle: "6.2 Legal Requirements",
        text: [
          "We may disclose information if legally required:",
          "• government request",
          "• court order",
          "• regulatory obligations",
          "We share only what is mandatory by law."
        ]
      }
    ]
  },

  {
    title: "Data Security",
    content: [
      {
        text: [
          "We use strong security measures including:",
          "• encryption of data in transit",
          "• secure authentication",
          "• controlled access layers",
          "• secure infrastructure management",
          "• threat monitoring systems",
          "While no system is 100% secure, we constantly strengthen protections."
        ]
      }
    ]
  },

  {
    title: "Data Retention",
    content: [
      {
        text: [
          "We retain information only as long as necessary:",
          "• Voice/Text/Camera: Deleted after processing",
          "• Phrasebook entries: Until deleted by you",
          "• Account data: Until account deletion",
          "• Diagnostics: Short retention for troubleshooting",
          "• Payment data: Stored by payment processors only"
        ]
      }
    ]
  },

  {
    title: "Your Rights",
    content: [
      {
        text: [
          "Depending on your region, you may:",
          "• access your data",
          "• update or correct data",
          "• delete your account/data",
          "• withdraw consent",
          "• restrict processing",
          "• request a copy of your data",
          "To exercise your rights, email ivishai.supprt@gmail.com."
        ]
      }
    ]
  },

  {
    title: "Children’s Privacy",
    content: [
      {
        text: [
          "VerbX is not intended for children under 13.",
          "We do not knowingly collect personal data from children.",
          "If you believe a child submitted information, contact us to remove it."
        ]
      }
    ]
  },

  {
    title: "Third-Party Links",
    content: [
      {
        text: [
          "Our app or website may contain links to third-party services.",
          "We are not responsible for their privacy practices.",
          "Users should review their policies before interacting."
        ]
      }
    ]
  },

  {
    title: "International Use",
    content: [
      {
        text: [
          "Our services may be used globally.",
          "Data may be processed on servers in different regions.",
          "We ensure protections consistent with applicable laws."
        ]
      }
    ]
  },

  {
    title: "Changes to This Policy",
    content: [
      {
        text: [
          "We may update this Privacy Policy occasionally.",
          "Updated changes will reflect the new date.",
          "We may notify users through the app or website.",
          "Continued use means acceptance of the updated Policy."
        ]
      }
    ]
  },

  {
    title: "Contact Information",
    content: [
      {
        text: [
          "For questions or concerns, contact us:",
          "Email: ivishai.supprt@gmail.com",
          "Phone: +91 7013440427",
          "IvishAI Quantum Private Limited, Hyderabad, Telangana, India"
        ]
      }
    ]
  }
];

export default PrivacyPolicy;
