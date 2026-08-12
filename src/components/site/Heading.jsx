/**
 * Heading - consistent display heading with brand gradient variants.
 *
 * Props:
 *   as       string  "h1" | "h2" | "h3" - default "h2"
 *   gradient "ember" | "aqua" | "steel" | "none" - default "ember"
 *   size     "xl" | "lg" | "md" | "sm" - default "lg"
 *   className string
 */
const SIZES = {
  xl: "text-5xl md:text-7xl lg:text-[76px] leading-[1.02] tracking-tightest",
  lg: "text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight",
  md: "text-3xl md:text-4xl leading-[1.1] tracking-tight",
  sm: "text-2xl md:text-3xl leading-tight",
};

const GRADIENTS = {
  ember: "text-gradient-ember",
  aqua: "text-gradient-aqua",
  steel: "text-gradient-steel",
  none: "text-cloud",
};

const Heading = ({ as = "h2", gradient = "ember", size = "lg", className = "", children }) => {
  const Tag = as;
  return (
    <Tag className={`font-sora font-normal ${SIZES[size]} ${GRADIENTS[gradient]} ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;
