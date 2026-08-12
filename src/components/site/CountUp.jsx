import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

/**
 * CountUp - animates a number from 0 to `end` when scrolled into view.
 * Used for the locked metrics (76 languages, 27 engines, ~130 countries, 8 patents).
 *
 * Props:
 *   end       number   target value (required)
 *   duration  number   ms - default 1600
 *   prefix    string   e.g. "~"
 *   suffix    string   e.g. "+"
 *   className string
 */
const CountUp = ({ end, duration = 1600, prefix = "", suffix = "", className = "" }) => {
  const [value, setValue] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setValue(end);
      return;
    }

    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
};

export default CountUp;
