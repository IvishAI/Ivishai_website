import { motion } from "framer-motion"

const TermsOfUse = () => {
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
            Terms of Use – IvishAI Quantum Pvt. Ltd.
          </h1>
          <div className="text-[#8892b0] space-y-2">
            <p>Effective Date: March 31, 2025</p>
            <p>Last Updated: March 31, 2025</p>
            <p>Company: IvishAI Quantum Pvt. Ltd.</p>
            <p>Location: Hyderabad, India</p>
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
              <div className="flex items-start mb-4">
                <div className="text-[#64ffda] text-2xl font-bold mr-4">
                  {index + 1}.
                </div>
                <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-[#13D8F6] to-[#64ffda] bg-clip-text text-transparent">
                  {section.title}
                </h2>
              </div>
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
          <h3 className="text-2xl text-[#64ffda] mb-4">Contact</h3>
          <a
            href="mailto:ivishaicontactemail@gmai.co"
            className="text-[#E26426] hover:text-[#ff8c63] transition-colors"
          >
            ivishaicontactemail@gmai.co
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      {
        text: `By accessing or using our website, software (VerbX AI), wearable devices (NeuraVision), APIs, or services (collectively, “IvishAI Services”), you agree to be legally bound by these Terms of Use. If you do not agree, please do not use our services.`
      }
    ]
  },
  {
    title: "Eligibility",
    content: [
      {
        text: `You must be at least 13 years old to use IvishAI Services. If you are under 18, you must have parental or guardian consent.`
      }
    ]
  },
  {
    title: "Services Overview",
    content: [
      {
        text: [
          "NeuraVision: AI-powered wearable devices for accessibility",
          "VerbX AI: SaaS platform for multilingual real-time communication",
          "APIs: For enterprise and developer integrations",
          "Website & Mobile Apps: For managing accounts, data, and access",
          "We reserve the right to modify, suspend, or discontinue any feature without notice."
        ]
      }
    ]
  },
  {
    title: "Account & Access",
    content: [
      {
        text: [
          "Keeping your account credentials secure",
          "All activities under your account",
          "Providing accurate, complete registration information",
          "IvishAI may suspend or terminate accounts that violate these terms or applicable laws."
        ]
      }
    ]
  },
  {
    title: "Acceptable Use",
    content: [
      {
        text: [
          "Use IvishAI Services for illegal or harmful activities is prohibited",
          "Reverse-engineer or resell our software or hardware is not allowed",
          "Use bots or automated systems to access our APIs or databases is forbidden",
          "Upload viruses, exploit security vulnerabilities, or interfere with service is not permitted"
        ]
      }
    ]
  },
  {
    title: "Intellectual Property",
    content: [
      {
        text: `All content, designs, trademarks, algorithms, and technologies are the property of IvishAI Quantum Pvt. Ltd. or its licensors. You may not copy, distribute, or exploit any part of the platform or hardware unless expressly authorized.`
      }
    ]
  },
  {
    title: "Payments & Subscriptions",
    content: [
      {
        text: [
          "Pricing for SaaS (VerbX AI) is listed clearly on our site.",
          "Hardware pricing for NeuraVision may vary by region.",
          "You agree to pay applicable fees, taxes, and renewals unless canceled.",
          "Subscription plans are non-transferable and subject to change with notice."
        ]
      }
    ]
  },
  {
    title: "Privacy & Data Use",
    content: [
      {
        text: `Our Privacy Policy governs how we collect, use, and protect your data — including biometric data such as facial recognition and gesture inputs. By using our services, you consent to this data collection and processing.`
      }
    ]
  },
  {
    title: "Third-Party Services",
    content: [
      {
        text: `We may integrate with third-party platforms (e.g., cloud providers, analytics tools). IvishAI is not responsible for the content or actions of these platforms.`
      }
    ]
  },
  {
    title: "Limitation of Liability",
    content: [
      {
        text: [
          "Indirect, incidental, or consequential damages",
          "Data loss, unauthorized access, or service interruptions",
          "Misuse of our services or devices",
          "Maximum liability is limited to the amount you paid (if any) within the past 6 months."
        ]
      }
    ]
  },
  {
    title: "Warranty Disclaimer",
    content: [
      {
        text: `IvishAI services are provided "as is" and "as available". We do not guarantee uninterrupted service, full accuracy, or compatibility with all use cases.`
      }
    ]
  },
  {
    title: "Termination",
    content: [
      {
        text: `We reserve the right to suspend or terminate accounts at our discretion, especially for violations of these terms or applicable laws.`
      }
    ]
  },
  {
    title: "Governing Law",
    content: [
      {
        text: `These Terms are governed by the laws of India, specifically under the jurisdiction of courts in Hyderabad, Telangana.`
      }
    ]
  },
  {
    title: "Updates to Terms",
    content: [
      {
        text: `We may update these Terms occasionally. Updates will be posted on our website with the "Last Updated" date. Continued use of our services implies acceptance.`
      }
    ]
  },
  {
    title: "Contact",
    content: [
      {
        text: `For questions or support, please contact: ivishaicontactemail@gmai.co`
      }
    ]
  }
]

export default TermsOfUse
