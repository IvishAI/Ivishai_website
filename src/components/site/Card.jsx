/**
 * Card - kept as a NAME only.
 *
 * There are no cards on this site any more. It used to be a surface with a
 * hover lift and an aqua edge glow, wrapped round most of the content on the
 * page; now it is padding and nothing else, so the 21 places that still call it
 * keep working while the shell is gone everywhere at once.
 *
 * Do not add a fill, an outline, a radius or a shadow back to this. If a block
 * needs separating, give it space, or a single hairline.
 *
 * Props:
 *   className string
 */
const Card = ({ children, hover, className = "", ...rest }) => (
  <div className={`p-6 md:p-8 ${className}`} {...rest}>
    {children}
  </div>
);

export default Card;
