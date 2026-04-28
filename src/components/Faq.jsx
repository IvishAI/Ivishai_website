"use client";
import React, { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqItems = [
    {
      question: "What is IvishAI Quantum?",
      answer: "A DPIIT-recognised Indian deep-tech company building the infrastructure of Industry 6.0. We build operating systems -- for language, for retail, and for the systems that will define the next decade.",
    },
    {
      question: "What is VerbX?",
      answer: "VerbX is Pillar 1 -- the world's first Language Communication OS. Real-time voice, text, and camera translation across 2,000+ languages. Offline-capable, institutionally secure, live in market. Visit verbxeco.com.",
    },
    {
      question: "What is Retail OS?",
      answer: "Retail OS is Pillar 2 -- a complete operating system for Indian retail shops. One platform, one AI, 19 industries. From a kirana store to a pharmacy to a regulated liquor shop.",
    },
    {
      question: "What does Industry 6.0 mean?",
      answer: "The era where AI, edge computing, language intelligence, and physical systems work in seamless harmony -- not as tools people operate, but as infrastructure people live within.",
    },
    {
      question: "Are VerbX and Retail OS separate products?",
      answer: "Yes. VerbX has its own site at verbxeco.com. Retail OS lives at ivishai.com/retail-os. Both are pillars of IvishAI Quantum's Industry 6.0 architecture.",
    },
    {
      question: "Is IvishAI Quantum funded?",
      answer: "Yes. We have received funding and are DPIIT-recognised under Startup India.",
    },
    {
      question: "How do I partner with IvishAI Quantum?",
      answer: "Write to us at connect@ivishai.com. We are open to institutional pilots, enterprise integrations, and strategic partnerships across sectors.",
    },
  ];

  return (
    <section className="flex flex-col gap-6 items-center px-5 md:px-20 lg:px-40 py-12 w-full bg-black">
      <h2 className="w-full text-4xl md:text-5xl lg:text-6xl tracking-tighter text-center font-sora font-normal leading-tight md:leading-normal bg-gradient-to-r from-white to-[#63FFF5] bg-clip-text text-transparent">
        Any Questions? <span className="text-cyan-400">We Got You.</span>
      </h2>

      <div className="flex flex-col gap-4 md:gap-6 w-full">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>

      <a
        href="/morefaq"
        className="text-white text-sm md:text-base underline hover:text-cyan-400 transition-colors duration-200 mt-2"
      >
        More Questions
      </a>
    </section>
  );
}

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <article className="w-full">
      <header
        className="flex justify-between items-center w-full px-5 md:px-11 py-4 cursor-pointer bg-neutral-800 border-l-[5px] border-l-cyan-400 h-auto md:h-[76px]"
        onClick={onClick}
      >
        <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-stone-300">
          {question}
        </h3>
        <div className="w-6 h-6 md:w-9 md:h-9 flex items-center justify-center">
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </div>
      </header>

      {isOpen && answer && (
        <div className="px-5 md:px-11 py-4 text-base md:text-lg bg-neutral-800 border-l-[5px] border-l-cyan-400 text-stone-300">
          {answer}
        </div>
      )}
    </article>
  );
}

const PlusIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="w-full h-full">
    <path d="M28.5 16.5H19.5V7.5H16.5V16.5H7.5V19.5H16.5V28.5H19.5V19.5H28.5V16.5Z" fill="#11ABC2"/>
  </svg>
);

const MinusIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="w-full h-full">
    <path d="M7.5 16.5h21v3h-21z" fill="#11ABC2"/>
  </svg>
);

export default FAQ;
