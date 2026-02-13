"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MoreFAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  // ---------------- SECTION COLORS ----------------
  // Each section alternates colors (cyan → orange → cyan → orange ...)
  const sectionColors = [
    "cyan",     // GENERAL QUESTIONS
    "orange",   // FEATURES
    "cyan",     // PRIVACY
    "orange",   // BILLING
    "cyan",     // OFFLINE MODE
    "orange",   // COMPANION DEVICE
    "cyan",     // ENTERPRISE
    "orange"    // TROUBLESHOOTING
  ];

  // ---------------- ALL 40 ITEMS ----------------
  const faqItems = [
    // SECTION 1
    { section: "GENERAL QUESTIONS" },
    { q: "What is VerbX?", a: "VerbX is a real-time language companion that helps you communicate across languages effortlessly using voice, text, and visual tools." },
    { q: "Who created VerbX?", a: "VerbX is developed by Ivish AI, a company focused on safe, trustworthy, and privacy-first communication technology." },
    { q: "Is VerbX a translation app?", a: "VerbX is more than translation — it enables clarity, tone-awareness, and real-time language support." },
    { q: "Which platforms support VerbX?", a: "VerbX is available on Android. iOS and Web versions are coming soon." },
    { q: "Who can use VerbX?", a: "Travelers, students, families, professionals, teachers, global teams, and anyone communicating across languages." },
    { q: "What languages does VerbX support?", a: "VerbX supports global and Indian languages, with continuous expansion." },
    { q: "Do I need an account to use VerbX?", a: "Basic features work without login. Signing in unlocks personalization and saved phrasebooks." },
    { q: "Is VerbX free to use?", a: "VerbX offers free essential features, with premium features available by subscription." },

    // SECTION 2
    { section: "FEATURES & HOW THEY WORK" },
    { q: "How does real-time voice conversation work?", a: "You speak → VerbX converts → the listener reads/hears it in their language instantly." },
    { q: "Can VerbX work offline?", a: "Yes. You can download offline packs for essential language features." },
    { q: "What is the Phrasebook?", a: "Your personal library of manually saved phrases for quick access." },
    { q: "Does VerbX support camera scanning?", a: "Yes — scan menus, documents, signs, handwriting for instant output." },
    { q: "Does VerbX understand tone/emotion?", a: "Yes — VerbX detects tone without altering meaning." },
    { q: "What is the “Hey Ivish” wakeword?", a: "A hands-free activation method for VerbX assistance." },
    { q: "Can VerbX help in phone calls?", a: "VerbX provides live captions or in-person conversation support (device-based)." },
    { q: "Is VerbX useful for learning languages?", a: "Yes — with real-time examples, pronunciation aids, and corrections." },

    // SECTION 3
    { section: "PRIVACY & SAFETY" },
    { q: "Does VerbX store my conversations?", a: (<ul className="list-disc pl-6"><li>No — unless you save something manually.</li><li>Everything else auto-deletes within minutes.</li></ul>) },
    { q: "What is zero-storage?", a: "VerbX does not save your text, voice, or camera data by default." },
    { q: "Is my data safe?", a: "Yes — VerbX uses encryption and strict privacy rules." },
    { q: "Who can access my data?", a: "Only you. Not even Ivish AI can view your conversations." },
    { q: "How does VerbX ensure accuracy?", a: "By prioritizing clarity, safety, and faithful meaning preservation." },
    { q: "Can children use VerbX?", a: "VerbX is safe for general audiences but not designed for users under 13." },
    { q: "Does VerbX share my data?", a: (<ul className="list-disc pl-6"><li>Only minimum required for functionality.</li><li>No data is sold.</li></ul>) },
    { q: "How do I delete my account or data?", a: "Email ivishai.supprt@gmail.com from your registered address." },

    // SECTION 4
    { section: "SUBSCRIPTIONS & BILLING" },
    { q: "How do subscriptions work?", a: "Premium features are available via monthly or yearly plans." },
    { q: "What payment methods are supported?", a: "Payments are securely handled through Google Play or approved gateways." },
    { q: "Can I cancel my subscription?", a: "Yes — anytime via Google Play settings." },
    { q: "What happens after cancellation?", a: "You retain premium access until the billing cycle ends." },

    // SECTION 5
    { section: "OFFLINE MODE" },
    { q: "What can I do offline?", a: (<ul className="list-disc pl-6"><li>Use downloaded language packs</li><li>Access saved phrases</li><li>Basic features depending on device support</li></ul>) },
    { q: "Does offline mode store my data?", a: "No — zero-storage rules still apply." },

    // SECTION 6
    { section: "COMPANION DEVICE" },
    { q: "What is the VerbX Companion?", a: "A wearable device designed for hands-free communication." },
    { q: "Does the device store data?", a: "No — it follows the same zero-storage principle." },
    { q: "How does it connect?", a: "Via Bluetooth or similar wireless protocols." },

    // SECTION 7
    { section: "ENTERPRISE, GOVERNMENT & EDUCATION" },
    { q: "Do you offer enterprise solutions?", a: "Yes — tailored versions for organizations and institutions." },
    { q: "Can VerbX be used for official communication?", a: "Yes — includes a literal mode for high-accuracy needs." },
    { q: "Do you support NGOs?", a: "Yes — Ivish AI supports accessibility and multicultural initiatives." },

    // SECTION 8
    { section: "TROUBLESHOOTING" },
    { q: "Voice isn’t detected — what to do?", a: "Check mic permissions, restart app, or close background apps." },
    { q: "Camera text is unclear — fix?", a: "Ensure lighting, steady your phone, and center the text." },
    { q: "App is slow — solution?", a: "Restart app and check network or updates." },
    { q: "Found a bug?", a: "Email ivishai.supprt@gmail.com with details." }
  ];

  let currentSectionIndex = -1;

  return (
    <>
      <Header />
      <section className="px-6 md:px-20 lg:px-36 pt-24 md:pt-16 pb-16 bg-black text-white">
        <h1
          className="text-center text-4xl md:text-6xl font-sora mb-10 tracking-tight
                     bg-gradient-to-r from-cyan-400 via-teal-300 to-orange-500
                     bg-clip-text text-transparent"
        >
          More Frequently Asked Questions
        </h1>

        <div className="flex flex-col gap-6">
          {faqItems.map((item, index) => {
            if (item.section) {
              currentSectionIndex++;

              return (
                <h2
                  key={index}
                  className={`text-2xl md:text-3xl font-semibold mt-10 mb-2 tracking-tight
                    ${sectionColors[currentSectionIndex] === "cyan" ? "text-cyan-400" : "text-orange-400"}`}
                >
                  {item.section}
                </h2>
              );
            }

            const isCyan = sectionColors[currentSectionIndex] === "cyan";

            return (
              <AccordionItem
                key={index}
                question={item.q}
                answer={item.a}
                isOpen={openIndex === index}
                onClick={() => toggle(index)}
                borderColor={isCyan ? "border-cyan-400" : "border-orange-400"}
                iconColor={isCyan ? "#13D8F6" : "#E26426"}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}

// ------------- Accordion Component -------------
function AccordionItem({ question, answer, isOpen, onClick, borderColor, iconColor }) {
  return (
    <article>
      <header
        onClick={onClick}
        className={`flex justify-between items-center px-5 md:px-10 py-4 
        bg-neutral-800 border-l-[6px] cursor-pointer ${borderColor}`}
      >
        <h3 className="text-lg md:text-xl text-stone-200">{question}</h3>

        <div className="w-7 h-7">
          {isOpen ? <MinusIcon color={iconColor} /> : <PlusIcon color={iconColor} />}
        </div>
      </header>

      {isOpen && (
        <div className={`px-5 md:px-10 py-4 bg-neutral-800 border-l-[6px] ${borderColor} text-gray-300`}>
          {answer}
        </div>
      )}
    </article>
  );
}

// ------------- Dynamic Icons -------------
const PlusIcon = ({ color }) => (
  <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
    <path d="M28.5 16.5H19.5V7.5H16.5V16.5H7.5V19.5H16.5V28.5H19.5V19.5H28.5V16.5Z" fill={color} />
  </svg>
);

const MinusIcon = ({ color }) => (
  <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
    <path d="M7.5 16.5h21v3h-21z" fill={color} />
  </svg>
);

export default MoreFAQ;
