import { motion } from "framer-motion";

/**
 * Card - glass surface with a subtle hover lift + aqua edge glow.
 * The default container for feature/value/stat blocks.
 *
 * Props:
 *   hover    bool    enable lift on hover - default true
 *   className string
 */
const Card = ({ children, hover = true, className = "", ...rest }) => (
  <motion.div
    className={`glass rounded-2xl p-6 md:p-8 transition-colors duration-300 hover:border-aqua/30 ${className}`}
    whileHover={hover ? { y: -6 } : undefined}
    transition={{ type: "spring", stiffness: 300, damping: 24 }}
    {...rest}
  >
    {children}
  </motion.div>
);

export default Card;
