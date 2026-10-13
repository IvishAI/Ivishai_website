import { motion, useReducedMotion } from "framer-motion";

/**
 * Reveal - the site's scroll entrance.
 *
 * It used to start at opacity 0 and rely on whileInView to bring content back.
 * That makes the animation load-bearing: if it never fires, the content is
 * simply not there. Walking every page with a scripted scroll found sections on
 * /recognition, /sera and /Blog still at opacity 0 after the whole page had
 * been scrolled past - content a visitor may never see.
 *
 * It also carried a comment claiming it respected prefers-reduced-motion
 * "automatically". It did not. framer-motion does not read the OS setting for
 * initial/whileInView on its own, and no CSS was doing it either - CountUp,
 * EarthGlobe and the loading page each check the media query by hand, and this
 * component, which gates far more content than all of them together, did not.
 *
 * So: with reduced motion the content is simply there, no animation at all.
 * Motion is a refinement on top of a page that already reads.
 *
 * Props:
 *   delay   number  seconds before animating (for staggering) - default 0
 *   y       number  starting offset in px - default 24
 *   as      string  wrapper element - default "div"
 *   once    bool    only animate the first time - default true
 */
const Reveal = ({ children, delay = 0, y = 24, as = "div", once = true, className = "", ...rest }) => {
  const MotionTag = motion[as] || motion.div;
  const still = useReducedMotion();

  if (still) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
