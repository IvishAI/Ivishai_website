import React from "react";
import Reveal from "../site/Reveal";

/* IvishAI element library - structure and type.
 *
 * The old site had one shape: a centred heading, a small grey line under it,
 * and a grid of boxes. Nine of those down the home page. These elements exist
 * so each kind of content gets the form that actually fits it - a record reads
 * as a record, a sequence reads as a sequence - instead of everything being
 * poured into the same tray.
 *
 * Rules, enforced by what these components will and will not do:
 *   - one ground, one left axis
 *   - no cards: no fill, outline, radius or shadow wrapped round content
 *   - colour lives in marks, never in a heading and never behind a paragraph
 *   - nothing is only visible after an animation fires
 */

/* 01 Band - one section of the page, with the rhythm and the hairline. */
export const Band = ({ id, tight = false, className = "", children }) => (
  <section id={id} className={`band${tight ? " band--tight" : ""} ${className}`}>
    <div className="wrap">{children}</div>
  </section>
);

/* 02 Bleed - a band whose content runs to the page edge. */
export const Bleed = ({ id, className = "", children }) => (
  <section id={id} className={`band ${className}`}>
    {children}
  </section>
);

/* 03 Wrap - the measure on its own, for use inside a Bleed. */
export const Wrap = ({ className = "", children }) => (
  <div className={`wrap ${className}`}>{children}</div>
);

/* 04 Tag - the small mono label above a heading. */
export const Tag = ({ children, className = "" }) => (
  <span className={`tag ${className}`}>{children}</span>
);

/* 05 Head - tag, heading, and at most one lede. CENTRED (owner, 13 Oct). */
export const Head = ({ tag, title, lede, as = "h2", className = "" }) => {
  const H = as;
  return (
    <div className={`head ${className}`}>
      {tag && <Tag>{tag}</Tag>}
      <H className="text-ink">{title}</H>
      {lede && <p className="lede">{lede}</p>}
    </div>
  );
};

/* 06 Display - the one oversized statement a page is allowed. */
export const Display = ({ children, className = "" }) => (
  <h1 className={`text-ink ${className}`}>{children}</h1>
);

/* 07 Lede - the opening paragraph, with a readable measure. */
export const Lede = ({ children, className = "" }) => (
  <p className={`lede ${className}`}>{children}</p>
);

/* 08 Prose - running body copy, held to a measure. */
export const Prose = ({ children, className = "" }) => (
  <div className={`max-w-[68ch] text-ink-muted leading-relaxed space-y-4 ${className}`}>
    {children}
  </div>
);

/* 09 Statement - a single sentence set large, used alone in a band. */
export const Statement = ({ children, cite }) => (
  <Reveal>
    <p className="h2 text-ink max-w-[20ch]">{children}</p>
    {cite && <p className="tag mt-6">{cite}</p>}
  </Reveal>
);

/* 10 Rule - one hairline. The only separator on the site. */
export const Rule = ({ className = "" }) => (
  <hr className={`border-0 border-t border-rule ${className}`} />
);

/* 11 Columns - a left label against a right body, the page's basic pairing. */
export const Columns = ({ label, children, className = "" }) => (
  <div className={`flex flex-col md:flex-row gap-3 md:gap-12 py-7 ${className}`}>
    <div className="md:w-56 flex-shrink-0 text-ink text-lg">{label}</div>
    <div className="flex-1 text-ink-muted leading-relaxed max-w-[62ch]">{children}</div>
  </div>
);

/* 12 Grid - an honest n-up, with no box round each cell. */
export const Grid = ({ cols = 3, className = "", children }) => {
  const at = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[cols];
  return <div className={`grid grid-cols-1 ${at} gap-x-10 gap-y-10 ${className}`}>{children}</div>;
};

/* 13 Cell - one item in a Grid: a mark, a name, a line. */
export const Cell = ({ mark, title, children, delay = 0 }) => (
  <Reveal delay={delay} className="flex flex-col">
    {mark && <div className="mb-3 text-ember-deep">{mark}</div>}
    {title && <h3 className="text-ink text-lg font-medium mb-1.5">{title}</h3>}
    <p className="body-s">{children}</p>
  </Reveal>
);

/* 14 Spacer - deliberate empty ground, when a gap is the point. */
export const Spacer = ({ h = 48 }) => <div style={{ height: h }} aria-hidden="true" />;
