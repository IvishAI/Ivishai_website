import { motion } from "framer-motion";

/**
 * Reveal - the site's signature scroll entrance.
 * Fades + rises into view once. Respects prefers-reduced-motion automatically
 * (framer-motion reads the OS setting; our CSS also neutralises transitions).
 *
 * Props:
 *   delay   number  seconds before animating (for staggering) - default 0
 *   y       number  starting offset in px - default 24
 *   as      string  wrapper element - default "div"
 *   once    bool    only animate first time - default true
 */
const Reveal = ({ children, delay = 0, y = 24, as = "div", once = true, className = "", ...rest }) => {
  const MotionTag = motion[as] || motion.div;
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
