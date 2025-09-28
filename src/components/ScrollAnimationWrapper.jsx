// components/ScrollAnimationWrapper.js
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollAnimationWrapper = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: '-50px 0px'
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }
      } : {}}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;