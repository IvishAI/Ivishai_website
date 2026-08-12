import React, { useState, useEffect, useRef } from "react";

const WhyIvishSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const [sectionTop, setSectionTop] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSectionTop(rect.top + window.scrollY);
        setWindowHeight(window.innerHeight);
      }
    };

    const handleScroll = () => setScrollY(window.scrollY);

    updatePosition();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  const getSectionVisibility = () => {
    if (!sectionRef.current) return 0;

    const viewportBottom = scrollY + windowHeight;
    const sectionBottom = sectionTop + sectionRef.current.offsetHeight;

    if (viewportBottom < sectionTop || scrollY > sectionBottom) return 0;

    const visibleHeight =
      Math.min(viewportBottom, sectionBottom) - Math.max(scrollY, sectionTop);
    const sectionHeight = sectionRef.current.offsetHeight;
    return visibleHeight / sectionHeight;
  };

  const getTranslateX = () => {
    if (window.innerWidth < 768) return 0;
    const visibility = getSectionVisibility();
    return Math.max(0, 600 - visibility * 700);
  };

  const cards = [
    {
      title: "Infrastructure, not apps",
      description: "Operating systems beneath communication and commerce - built to sit underneath industries, not on top of them.",
    },
    {
      title: "Two products live today",
      description: "VerbX for multilingual communication and Sera for retail - real deployments, not roadmaps.",
    },
    {
      title: "Offline-first architecture",
      description: "Designed for Indian conditions where connectivity is not a given, and built to scale globally.",
    },
    {
      title: "India to global",
      description: "Born in India, engineered to run anywhere - infrastructure without borders.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden text-white"
      style={{ isolation: "isolate" }}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/whyivishbg.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/whyivishbg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-12 md:py-24 flex flex-col">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-16">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-normal leading-tight mb-4 md:mb-0"
            style={{
              background: "linear-gradient(90deg, #FFF 0%, #E26426 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "'Sora', sans-serif",
              letterSpacing: "-1.52px",
            }}
          >
            Built to run underneath.
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-100 md:w-1/2 md:pl-8">
            IvishAI builds intelligent infrastructure operating systems for communication and commerce.
          </p>
        </div>

        {/* Cards Section */}
        <div className="relative w-full h-auto md:h-[400px]">
          <div
            className="flex flex-col md:flex-row gap-4 md:gap-7 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${getTranslateX()}px)` }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full md:w-[300px] h-auto md:h-[320px] flex-shrink-0 p-6"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.40)",
                  background: "linear-gradient(146deg, rgba(181, 181, 181, 0.30) 14.84%, rgba(98, 98, 98, 0.30) 89.36%)",
                  backdropFilter: "blur(50px)",
                }}
              >
                {/* Icon Placeholder */}
                <div className="mb-4">
                  <img src="/icon.png" alt="Icon" className="w-10 h-10 md:w-12 md:h-12" />
                </div>

                {/* Card Content */}
                <h3 className="text-xl md:text-2xl font-medium text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-gray-200">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIvishSection;
