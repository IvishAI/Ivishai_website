import React, { useRef, useEffect, useState } from "react";

/* ===== 1) STAR ICON ===== */
function StarIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="star"
    >
      <path
        d="M15.0734 6.36251C15.0315 6.23908 14.9544 6.13063 14.8515 6.05055C14.7487 5.97046 14.6247 5.92224 14.4947 5.91184L10.6941 5.60984L9.04941 1.96917C8.99703 1.85192 8.91184 1.75232 8.80411 1.68241C8.69638 1.6125 8.57072 1.57527 8.44229 1.5752C8.31387 1.57512 8.18816 1.61222 8.08036 1.68201C7.97255 1.75181 7.88725 1.85131 7.83474 1.96851L6.19007 5.60984L2.38941 5.91184C2.26171 5.92196 2.13963 5.96865 2.03778 6.04633C1.93592 6.12401 1.8586 6.22939 1.81507 6.34986C1.77154 6.47033 1.76363 6.6008 1.7923 6.72564C1.82098 6.85049 1.88501 6.96443 1.97674 7.05384L4.78541 9.79184L3.79207 14.0932C3.76191 14.2234 3.77158 14.3596 3.81982 14.4843C3.86806 14.6089 3.95265 14.7162 4.06261 14.7921C4.17257 14.8681 4.30282 14.9093 4.43646 14.9103C4.57011 14.9113 4.70097 14.8721 4.81207 14.7978L8.44207 12.3778L12.0721 14.7978C12.1856 14.8732 12.3196 14.9121 12.4558 14.9091C12.5921 14.9061 12.7242 14.8614 12.8343 14.7811C12.9445 14.7008 13.0274 14.5887 13.0719 14.4599C13.1164 14.3311 13.1205 14.1917 13.0834 14.0605L11.8641 9.79384L14.8881 7.07251C15.0861 6.89384 15.1587 6.61517 15.0734 6.36251Z"
        fill="#F8C200"
      />
    </svg>
  );
}

/* ===== 2) STAR RATING ===== */
function StarRating({ rating = 5 }) {
  return (
    <div className="flex gap-1 items-center">
      {[...Array(rating)].map((_, index) => (
        <StarIcon key={index} />
      ))}
    </div>
  );
}

/* ===== 3) TESTIMONIAL CARD (used in both layouts) ===== */
function TestimonialCard({ text, name, role, rating }) {
  return (
    <article className="flex flex-col gap-4 p-6 sm:p-8 bg-[rgba(59,59,59,0.5)] rounded-md border border-[rgba(80,80,80,0.3)] transition-colors hover:bg-[rgba(75,75,75,0.7)] flex-shrink-0 w-full sm:w-[428px]">
      <div className="flex flex-col gap-3">
        <StarRating rating={rating} />
        <p className="text-white leading-6">{text}</p>
      </div>
      <div className="flex gap-4 items-center mt-4">
        <div className="w-12 h-12 rounded-full bg-[#ccc]" aria-hidden="true" />
        <div className="flex flex-col gap-1">
          <h3 className="text-white m-0">{name}</h3>
          <p className="text-xs text-gray-400 m-0">{role}</p>
        </div>
      </div>
    </article>
  );
}

/* ===== SAMPLE DATA ===== */
const testimonials = [
  {
    id: 1,
    text: "IvishAI is making AI tech affordable and useful for everyone. Really impressed with how well it works.",
    name: "Priya Singh",
    role: "Role, Company",
    rating: 5,
  },
  {
    id: 2,
    text: "Fantastic service, easy to integrate. Definitely recommend trying it out!",
    name: "John Doe",
    role: "Designer, ABC Inc",
    rating: 5,
  },
  {
    id: 3,
    text: "My team loves the features and the support is incredible.",
    name: "Jane Smith",
    role: "CEO, XYZ Corp",
    rating: 5,
  },
  {
    id: 4,
    text: "It saves us hours of work every week. Great solution!",
    name: "Robert Brown",
    role: "Manager, Tech Co",
    rating: 4,
  },
  {
    id: 5,
    text: "Seamless user experience. I've never used anything like it.",
    name: "Alice Green",
    role: "Marketer, Agency",
    rating: 5,
  },
];

const secondRowTestimonials = [
  {
    id: 6,
    text: "The user experience is seamless. I’ve never used anything like it.",
    name: "David Johnson",
    role: "CTO, InnovateX",
    rating: 5,
  },
  {
    id: 7,
    text: "Definitely a game-changer for our workflow.",
    name: "Sara Lee",
    role: "Product Lead, StartUp",
    rating: 5,
  },
  {
    id: 8,
    text: "So easy to use, and the results are amazing.",
    name: "Michael Chen",
    role: "Engineer, SoftApps",
    rating: 4,
  },
  {
    id: 9,
    text: "It's made AI accessible to our entire team.",
    name: "Priya Singh",
    role: "Analyst, BigData Inc",
    rating: 5,
  },
  {
    id: 10,
    text: "The support is second to none. Highly recommended!",
    name: "John Williams",
    role: "Freelancer",
    rating: 5,
  },
];

/* ===== 5) MOBILE CARD WRAPPER WITH POP-UP ANIMATION ===== */
function MobileCard({ children }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-500 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

/* ===== 6) MAIN EXPORTED COMPONENT ===== */
export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 640 // breakpoint: 640px
  );
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const sectionRef = useRef(null);

  // Listen to resize events to update layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Horizontal scroll animation for non-mobile layout
  useEffect(() => {
    if (isMobile) return; // skip horizontal animation on mobile

    const handleScroll = () => {
      if (!sectionRef.current || !firstRowRef.current || !secondRowRef.current)
        return;

      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate section progress (0 to 1)
      const sectionProgress = 1 - (top + height) / (windowHeight + height);

      if (sectionProgress >= 0 && sectionProgress <= 1) {
        const moveAmount = 600;
        const firstRowTranslate = -sectionProgress * moveAmount;
        const secondRowTranslate = sectionProgress * moveAmount;

        firstRowRef.current.style.transform = `translateX(${firstRowTranslate}px)`;
        secondRowRef.current.style.transform = `translateX(${secondRowTranslate}px)`;

        // Apply subtle opacity effect
        const opacityValue = 0.7 + sectionProgress * 0.3;
        firstRowRef.current.style.opacity = opacityValue.toString();
        secondRowRef.current.style.opacity = opacityValue.toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  // Render vertical layout on mobile: combine both sets of testimonials in order
  if (isMobile) {
    const combinedTestimonials = [...testimonials, ...secondRowTestimonials];
    return (
      <section
        ref={sectionRef}
        className="py-12 px-4 w-full bg-black text-white flex flex-col gap-8 items-center overflow-hidden"
      >
        <h2
          className="text-center font-sora text-4xl sm:text-6xl lg:text-7xl tracking-tight"
          style={{
            lineHeight: "100%",
            letterSpacing: "-1.52px",
            background:
              "var(--Grad-Blue-Text, linear-gradient(90deg, #FFF 0%, #63FFF5 100%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          See What Our Users Say
        </h2>
        <div className="flex flex-col gap-6 w-full max-w-[600px]">
          {combinedTestimonials.map((t) => (
            <MobileCard key={t.id}>
              <TestimonialCard
                text={t.text}
                name={t.name}
                role={t.role}
                rating={t.rating}
              />
            </MobileCard>
          ))}
        </div>
      </section>
    );
  }

  // Render horizontal layout for larger screens
  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 w-full bg-black text-white flex flex-col gap-16 items-center overflow-hidden"
    >
      <h2
        className="text-center font-sora text-4xl sm:text-6xl lg:text-7xl tracking-tight"
        style={{
          lineHeight: "100%",
          letterSpacing: "-1.52px",
          background:
            "var(--Grad-Blue-Text, linear-gradient(90deg, #FFF 0%, #63FFF5 100%))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        See What Our Users Say
      </h2>

      <div className="flex flex-col gap-8 w-full max-w-[1880px]">
        {/* First Row */}
        <div
          ref={firstRowRef}
          className="flex gap-4 transition-transform duration-500 ease-out"
        >
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.id}
              text={t.text}
              name={t.name}
              role={t.role}
              rating={t.rating}
            />
          ))}
        </div>

        {/* Second Row */}
        <div
          ref={secondRowRef}
          className="flex gap-4 transition-transform duration-500 ease-out"
        >
          {secondRowTestimonials.map((t) => (
            <TestimonialCard
              key={t.id}
              text={t.text}
              name={t.name}
              role={t.role}
              rating={t.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
