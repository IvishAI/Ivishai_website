import React from "react";
import Reveal from "./site/Reveal";

/* Why IvishAI.
 *
 * This section used to be the one place the site stopped looking like itself: a
 * full-bleed orange video behind white text, in the middle of a page that was
 * otherwise flat black. On the paper ground it is simply the page, and the four
 * claims carry themselves.
 *
 * It also used to position the cards with scroll maths -
 * `translateX(max(0, 600 - visibility * 700))` - which is why the right-hand
 * cards were cut off the edge: until the section was nearly fully in view they
 * sat up to 600px to the right, inside an `overflow-hidden`. A visitor who
 * scrolled quickly, or whose viewport was tall enough that the section never
 * reached full visibility, never saw the fourth card at all.
 *
 * Four cards is not a carousel. They are a grid, and they are all there.
 */

const CARDS = [
  {
    title: "Infrastructure, not apps",
    description:
      "Operating systems beneath communication and commerce - built to sit underneath industries, not on top of them.",
  },
  {
    title: "Two products live today",
    description:
      "VerbX for multilingual communication and Sera for retail - real deployments, not roadmaps.",
  },
  {
    title: "Offline-first architecture",
    description:
      "Designed for Indian conditions where connectivity is not a given, and built to scale globally.",
  },
  {
    title: "India to global",
    description:
      "Born in India, engineered to run anywhere - infrastructure without borders.",
  },
];

const WhyIvishSection = () => (
  <section className="relative w-full bg-paper text-ink py-16 md:py-24 lg:py-28">
    <div className="container-site">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10 md:mb-16">
        <h2 className="font-sora text-4xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tightest text-ink max-w-[14ch]">
          Built to run underneath.
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-ink-muted md:max-w-md">
          IvishAI builds intelligent infrastructure operating systems for
          communication and commerce.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {CARDS.map((card, i) => (
          <Reveal
            key={card.title}
            delay={i * 0.06}
            className="flex flex-col p-6"
          >
            <img
              src="/icon.png"
              alt=""
              aria-hidden="true"
              className="w-10 h-10 md:w-12 md:h-12 mb-4"
            />
            <h3 className="text-xl md:text-2xl font-medium text-ink mb-2">
              {card.title}
            </h3>
            <p className="text-sm md:text-base text-ink-muted">
              {card.description}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyIvishSection;
