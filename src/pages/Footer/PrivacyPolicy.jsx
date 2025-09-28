import { motion } from "framer-motion"

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
            Privacy Policy – IvishAI Quantum Pvt. Ltd.
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
                        <ul className="space-y-2">
                          {item.text.map((point, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-[#64ffda] mr-2">•</span>
                              {point}
                            </li>
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
          <a
            href="mailto:ivishaicontactemail@gmail.com"
            className="text-[#E26426] hover:text-[#ff8c63] transition-colors"
          >
            ivishaicontactemail@gmail.com
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

const sections = [
  {
    title: "Introduction",
    content: [
      {
        text: `IvishAI Quantum Pvt. Ltd. ("IvishAI", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal and biometric data when you use our website, mobile apps, devices (NeuraVision), APIs, and services (VerbX AI).`
      }
    ]
  },
  {
    title: "Data We Collect",
    content: [
      {
        subtitle: "a. Personal Information",
        text: [
          "Name, email, phone number",
          "Location (optional)",
          "Account preferences",
          "Payment information (if applicable)"
        ]
      },
      {
        subtitle: "b. Biometric & Sensor Data",
        text: [
          "Facial recognition data",
          "Gesture patterns",
          "Voice, speech, or sign language input",
          "Emotion or context-based data",
          "This data is securely encrypted and processed only for functionality, personalization, or accessibility purposes."
        ]
      },
      {
        subtitle: "c. Usage Data",
        text: [
          "Device type, IP address, browser, time zone",
          "Pages visited, interactions, features used"
        ]
      },
      {
        subtitle: "d. Cookies & Tracking",
        text: [
          "We use cookies for analytics, performance, and personalization. You can control this via browser settings."
        ]
      }
    ]
  },
  {
    title: "How We Use Your Data",
    content: [
      {
        text: [
          "Provide and improve our products and services",
          "Personalize user experience (via AI/ML)",
          "Deliver real-time translation and accessibility features",
          "Communicate with you",
          "Fulfill legal obligations",
          "Enhance safety and security"
        ]
      }
    ]
  },
  {
    title: "Data Sharing & Disclosure",
    content: [
      {
        text: [
          "Research partners (anonymized, for accessibility R&D)",
          "Cloud providers (e.g., AWS India)",
          "Authorized third-party vendors (API partners, analytics tools)",
          "Government authorities, when legally required",
          "We do not sell your personal data for advertising without your explicit consent."
        ]
      }
    ]
  },
  {
    title: "International Data Transfers",
    content: [
      {
        text: [
          "For users in the EU/EEA, UK, and USA, data may be processed in India and stored on AWS infrastructure.",
          "We follow GDPR, DPDP (India), and CCPA compliance standards, including: Data minimization, User consent, Right to access, delete, or correct data."
        ]
      }
    ]
  },
  {
    title: "Children's Privacy (Users under 18)",
    content: [
      {
        text: `If you are under 18, you must have parental or guardian consent to use our services. We do not knowingly collect data from minors without such consent.`
      }
    ]
  },
  {
    title: "Your Rights",
    content: [
      {
        text: [
          "Request access to your data",
          "Correct inaccurate or outdated info",
          "Delete your account/data",
          "Withdraw consent at any time",
          "Lodge a complaint with a data protection authority",
          "To exercise these rights, email: ivishaicontactemail@gmai.com"
        ]
      }
    ]
  },
  {
    title: "Data Security",
    content: [
      {
        text: [
          "AES-256 encryption",
          "SSL/TLS for data in transit",
          "Secure access controls",
          "Regular audits & penetration testing"
        ]
      }
    ]
  },
  {
    title: "Data Retention",
    content: [
      {
        text: `We retain personal and biometric data only as long as required for service provision, legal, or regulatory purposes.`
      }
    ]
  },
  {
    title: "Contact Us",
    content: [
      {
        text: `For any privacy concerns or requests, reach us at: ivishaicontactemail@gmai.com`
      }
    ]
  }
]

export default PrivacyPolicy
