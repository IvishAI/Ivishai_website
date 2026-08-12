import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

/**
 * CTAButton - the one button used across the site. Handles internal routes,
 * external links, and plain buttons, with consistent brand styling + hover.
 *
 * Props:
 *   variant  "primary" | "secondary" | "ghost" - default "secondary"
 *   to       string   internal route (react-router Link)
 *   href     string   external URL (opens new tab, adds arrow)
 *   onClick  fn       button handler
 *   arrow    bool     force show the up-right arrow
 *   size     "sm" | "md" - default "md"
 */
const VARIANTS = {
  primary:
    "bg-white text-ink hover:bg-white/90 border border-white",
  secondary:
    "border border-white/70 text-cloud hover:bg-white/10 hover:border-white",
  ghost:
    "border border-white/15 text-cloud hover:bg-white/5 hover:border-white/40",
};

const CTAButton = ({
  children,
  variant = "secondary",
  to,
  href,
  onClick,
  arrow = false,
  size = "md",
  className = "",
  ...rest
}) => {
  const pad = size === "sm" ? "px-5 py-2.5 text-sm" : "px-7 py-3.5 text-[15px]";
  const base = `group inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ${pad} ${VARIANTS[variant]} ${className}`;

  // An href beginning with "/" (or #) is in-app: route via <Link>, not a new tab.
  const isExternal = href && /^https?:\/\//i.test(href);
  const internalDest = to || (href && !isExternal ? href : null);

  const inner = (
    <>
      {children}
      {(isExternal || arrow) && (
        <ArrowUpRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  };

  if (isExternal) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={base}
        {...motionProps}
        {...rest}
      >
        {inner}
      </motion.a>
    );
  }
  if (internalDest) {
    return (
      <motion.div className="inline-flex" {...motionProps}>
        <Link to={internalDest} className={base} {...rest}>
          {inner}
        </Link>
      </motion.div>
    );
  }
  return (
    <motion.button type="button" onClick={onClick} className={base} {...motionProps} {...rest}>
      {inner}
    </motion.button>
  );
};

export default CTAButton;
