/**
 * Section - consistent vertical rhythm + centered content container.
 * Every page section should be wrapped in this for uniform spacing.
 *
 * Props:
 *   id        string  anchor id
 *   tight     bool    smaller vertical padding
 *   full      bool    skip the inner container (edge-to-edge content)
 *   className string  extra classes on the <section>
 */
const Section = ({ id, tight = false, full = false, className = "", children }) => {
  const pad = tight ? "py-12 md:py-16" : "py-16 md:py-24 lg:py-28";
  return (
    <section id={id} className={`relative ${pad} ${className}`}>
      {full ? children : <div className="container-site">{children}</div>}
    </section>
  );
};

export default Section;
