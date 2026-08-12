/**
 * Eyebrow - the small pill label above a heading (e.g. "Who We Are").
 * Carries the brand aqua dot for a consistent look site-wide.
 */
const Eyebrow = ({ children, className = "" }) => (
  <span className={`eyebrow ${className}`}>
    <span
      className="inline-block h-2 w-2 rounded-full"
      style={{ background: "linear-gradient(135deg,#13D8F6,#0F616D)" }}
    />
    {children}
  </span>
);

export default Eyebrow;
