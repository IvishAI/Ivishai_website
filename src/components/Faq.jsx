"use client";
import React, { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqItems = [
    {
      question: "What is IvishAI?",
      answer: "An infrastructure company building operating systems for real-world industries.",
    },
    {
      question: "What is VerbX?",
      answer: "A language communication operating system for multilingual institutions.",
    },
    {
      question: "What is Sera?",
      answer: "A retail operating system built for Bharat's shops.",
    },
    {
      question: "Why is it credible?",
      answer: "DPIIT-recognised, MSME-registered, 1 patent granted (7 more filed), and recognised across national startup platforms.",
    },
    {
      question: "How do I engage?",
      answer: "Collaborate, Government, or Investors - pick your path below.",
    },
  ];

  return (
    <section className="flex flex-col gap-6 items-center px-5 md:px-20 lg:px-40 py-12 w-full bg-black">
      <h2 className="w-full text-4xl md:text-5xl lg:text-6xl tracking-tighter text-center font-sora font-normal leading-tight md:leading-normal bg-gradient-to-r from-white to-[#63FFF5] bg-clip-text text-transparent">
        In 30 Seconds. <span className="text-cyan-400">The Quick Answers.</span>
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
