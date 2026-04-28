import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/carheader";
import Footer from "../../components/Footer";

const roles = [
  {
    title: "AI & Machine Learning Engineer",
    domain: "Intelligence",
    owns: "Core models -- speech, translation, offline inference, proprietary AI systems.",
  },
  {
    title: "Full Stack Developer",
    domain: "Product",
    owns: "Consumer and institutional product surfaces. Web and mobile.",
  },
  {
    title: "UI / UX Designer",
    domain: "Design",
    owns: "Design for trust. Products go into banks, hospitals, and government offices. Clarity is not optional.",
  },
  {
    title: "Business Development & Partnerships",
    domain: "Growth",
    owns: "Institutional pipeline -- banks, hospitals, retail chains, enterprise. High ownership, high impact.",
  },
  {
    title: "Hardware & Embedded Systems Engineer",
    domain: "Hardware",
    owns: "Physical layer -- AI earbuds, kiosk systems, edge inference, firmware.",
  },
  {
    title: "Marketing -- Brand & Content",
    domain: "Marketing",
    owns: "Define how the world sees IvishAI Quantum and VerbX. Strategy, storytelling, campaigns.",
  },
  {
    title: "Marketing -- Growth & Digital",
    domain: "Marketing",
    owns: "Performance marketing, user acquisition, SEO, partnerships for VerbX and Retail OS.",
  },
  {
    title: "Marketing -- Institutional & B2B",
    domain: "Marketing",
    owns: "Account-based marketing for banking, healthcare, government, and enterprise verticals.",
  },
];

const CareersPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white overflow-hidden">

        {/* ── HERO SECTION ── */}
        <div className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
            <div
              className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-20"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)"
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          </div>

          <div className="relative z-10 px-6 md:px-16 lg:px-24 py-24 md:py-32 w-full">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="max-w-3xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 mb-6 md:mb-8"
                >
                  <div className="h-px w-8 md:w-12 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                  <span className="text-cyan-400 text-xs md:text-sm font-medium tracking-wider uppercase">Join Our Mission</span>
                </motion.div>

                <h1
                  className="font-sora font-normal leading-[90%] tracking-[-3px] md:tracking-[-4px] mb-4 md:mb-6"
                  style={{
                    background: 'linear-gradient(90deg, #D0D0D0 0%, #5F5F5F 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: 'clamp(48px, 10vw, 120px)'
                  }}
                >
                  Careers at<br />Ivish
                </h1>

                <h2
                  className="font-sora font-normal leading-[95%] tracking-[-2px] md:tracking-[-3px] mb-8 md:mb-10"
                  style={{
                    background: 'linear-gradient(90deg, #FFF 0%, #E26426 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: 'clamp(32px, 7vw, 72px)'
                  }}
                >
                  Build Industry 6.0.<br />From India to the World.
                </h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-8 md:mb-12"
                >
                  We are not looking for people to fill roles. We are looking for people who see problems
                  others miss -- and build things that last.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── OPEN ROLES ── */}
        <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24 border-t border-white/10">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="font-sora font-normal mb-12"
              style={{
                background: 'linear-gradient(90deg, #FFF 0%, #E26426 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: 'clamp(32px, 5vw, 64px)'
              }}
            >
              Open Roles
            </h2>

            <div className="space-y-3">
              {roles.map((role, i) => (
                <motion.div
                  key={role.title}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 md:p-6 border border-white/10 hover:border-white/25 transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-3 mb-1">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
                        style={{ background: 'rgba(19,216,246,0.08)', color: '#13D8F6', border: '1px solid rgba(19,216,246,0.2)' }}
                      >
                        {role.domain}
                      </span>
                      <h3 className="text-white font-medium">{role.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mt-1">{role.owns}</p>
                  </div>
                  <a
                    href={`mailto:careers@ivishai.com?subject=${encodeURIComponent(role.title)}`}
                    className="flex-shrink-0 px-5 py-2.5 text-sm font-medium border border-[#E26426] text-[#E26426] hover:bg-[#E26426] hover:text-white transition-all duration-200 text-center"
                  >
                    Apply
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── NO ROLE LISTED ── */}
        <section className="px-6 md:px-16 lg:px-24 py-16 border-t border-white/10">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg">
              No role listed for you? If you believe you belong here, write to us:{" "}
              <a
                href="mailto:careers@ivishai.com"
                className="text-[#E26426] font-medium hover:underline"
              >
                careers@ivishai.com
              </a>
            </p>
          </motion.div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default CareersPage;
