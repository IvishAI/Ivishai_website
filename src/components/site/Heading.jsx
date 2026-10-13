/**
 * Heading - consistent display heading with brand gradient variants.
 *
 * Props:
 * as string"h1" |"h2" |"h3" - default"h2"
 * gradient"ember" |"aqua" |"steel" |"none" - default"none"
 *
 * The gradient default used to be"ember", which is how the site ended up with
 * nine gradient headings on one page. On the light ground headings are ink and
 * rank by size; the gradient names are kept only so older calls still resolve.
 * size"xl" |"lg" |"md" |"sm" - default"lg"
 * className string
 */
const SIZES = {
  xl: "text-5xl md:text-7xl lg:text-[76px] leading-[1.02] tracking-tightest",
  lg: "text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight",
  md: "text-3xl md:text-4xl leading-[1.1] tracking-tight",
  sm: "text-2xl md:text-3xl leading-tight",
};

const GRADIENTS = {
  ember: "text-ink",
  aqua: "text-ink",
  steel: "text-ink",
  none: "text-ink",
};

const Heading = ({
  as = "h2",
  gradient = "none",
  size = "lg",
  className = "",
  children,
}) => {
  const Tag = as;
  return (
    <Tag
      className={`font-sora font-normal ${SIZES[size]} ${GRADIENTS[gradient]} ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Heading;
