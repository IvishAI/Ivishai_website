import React, { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../site/Reveal";

/* IvishAI element library - actions, disclosure, states and forms. */

function isExternal(href = "") {
  return /^https?:\/\//i.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}

/* 26 Action - the primary action. Ink fill, paper text. White on the brand
   orange measures 3.45:1 and fails, so the brand is not a button colour. */
export const Action = ({ to, href, children, className = "" }) => {
  const cls = `inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-ink text-paper hover:opacity-90 transition-opacity ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return (
    <a href={href} className={cls} {...(isExternal(href) ? { rel: "noreferrer" } : {})}>
      {children}
    </a>
  );
};

/* 27 Ghost - a secondary action. An outline, which a button may keep. */
export const Ghost = ({ to, href, children, className = "" }) => {
  const cls = `inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-ink text-ink hover:bg-paper-sunk transition-colors ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <a href={href} className={cls}>{children}</a>;
};

/* 28 TextLink - the quiet one. An underline that moves to the brand on hover. */
export const TextLink = ({ to, href, children }) => {
  const cls =
    "inline-flex items-center gap-1.5 text-ink border-b border-rule-strong pb-0.5 hover:border-ember hover:text-ember-deep transition-colors";
  const inner = (
    <>
      {children}
      <span aria-hidden="true">&rarr;</span>
    </>
  );
  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  return <a href={href} className={cls}>{inner}</a>;
};

/* 29 Actions - a row of them, with real hierarchy. The old hero had five
   buttons of equal weight, which is the same as having none. */
export const Actions = ({ children, className = "" }) => (
  <div className={`flex flex-col sm:flex-row flex-wrap gap-3 ${className}`}>{children}</div>
);

/* 30 Disclosure - one question, one answer. No tray, no cyan edge. */
export const Disclosure = ({ q, children, open, onToggle }) => (
  <div className="border-b border-rule">
    <button
      type="button"
      aria-expanded={open}
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-6 py-5 text-left"
    >
      <span className="text-ink text-lg">{q}</span>
      <span className="text-ink-faint text-xl leading-none flex-shrink-0" aria-hidden="true">
        {open ? "−" : "+"}
      </span>
    </button>
    {open && <div className="pb-6 body-s max-w-[62ch]">{children}</div>}
  </div>
);

/* 31 Questions - a set of Disclosures that remembers which is open. */
export const Questions = ({ items }) => {
  const [at, setAt] = useState(null);
  return (
    <div className="border-t border-rule">
      {items.map((it, i) => (
        <Disclosure key={it.q} q={it.q} open={at === i} onToggle={() => setAt(at === i ? null : i)}>
          {it.a}
        </Disclosure>
      ))}
    </div>
  );
};

/* 32 Note - an aside that is not a warning. A left rule, nothing else. */
export const Note = ({ children, className = "" }) => (
  <p className={`border-l-2 border-ember pl-5 py-1 body-s max-w-[62ch] ${className}`}>{children}</p>
);

/* 33 Quote - words someone actually said, and who said them. */
export const Quote = ({ children, who, where }) => (
  <Reveal as="figure" className="max-w-[46ch]">
    <blockquote className="h3 text-ink">{children}</blockquote>
    <figcaption className="tag mt-5">
      {who}
      {where && <span className="text-ink-faint"> &middot; {where}</span>}
    </figcaption>
  </Reveal>
);

/* 34 Figure - an image with something to say about it. */
export const Figure = ({ src, alt, caption }) => (
  <figure>
    <img src={src} alt={alt} loading="lazy" className="w-full" />
    {caption && <figcaption className="tag mt-3">{caption}</figcaption>}
  </figure>
);

/* 35 Portrait - a person photograph, square and quiet. */
export const Portrait = ({ src, name, className = "" }) => (
  <img src={src} alt={name} loading="lazy" className={`object-cover grayscale ${className}`} />
);

/* 36 Marker - the brand dot. The one place colour is allowed to be itself. */
export const Marker = ({ tone = "ember", className = "" }) => (
  <span
    aria-hidden="true"
    className={`inline-block h-1.5 w-1.5 rounded-full ${tone === "aqua" ? "bg-aqua-deep" : "bg-ember"} ${className}`}
  />
);

/* 37 Chip - a small factual label. */
export const Chip = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-paper-sunk tag">
    {children}
  </span>
);

/* 38 Eyebrow - a tag with a marker in front. */
export const Eyebrow = ({ children, tone }) => (
  <span className="inline-flex items-center gap-2">
    <Marker tone={tone} />
    <span className="tag">{children}</span>
  </span>
);

/* 39 JumpList - in-page navigation for a long document. */
export const JumpList = ({ items }) => (
  <nav aria-label="On this page" className="border-l border-rule pl-5">
    <ul className="space-y-2.5">
      {items.map((i) => (
        <li key={i.id}>
          <a href={`#${i.id}`} className="body-s hover:text-ink transition-colors">
            {i.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

/* 40 Crumb - where you are. */
export const Crumb = ({ items }) => (
  <nav aria-label="Breadcrumb" className="tag flex flex-wrap items-center gap-2">
    {items.map((c, i) => (
      <React.Fragment key={c.label}>
        {i > 0 && <span aria-hidden="true">/</span>}
        {c.to ? (
          <Link to={c.to} className="hover:text-ink transition-colors">{c.label}</Link>
        ) : (
          <span className="text-ink">{c.label}</span>
        )}
      </React.Fragment>
    ))}
  </nav>
);

/* 41 NextPrev - the end of a document, pointing somewhere real. */
export const NextPrev = ({ prev, next }) => (
  <div className="flex justify-between gap-6 pt-8 border-t border-rule">
    {prev ? <TextLink to={prev.to}>{prev.label}</TextLink> : <span />}
    {next ? <TextLink to={next.to}>{next.label}</TextLink> : <span />}
  </div>
);

/* 42 EmptyState - nothing here, and what to do about it. */
export const EmptyState = ({ title, detail, action }) => (
  <div className="py-16 max-w-[48ch]">
    <p className="h3 text-ink mb-2">{title}</p>
    {detail && <p className="body-s mb-6">{detail}</p>}
    {action}
  </div>
);

/* 43 ErrorState - something failed, said plainly. */
export const ErrorState = ({ title, detail, onRetry }) => (
  <div className="py-16 max-w-[48ch]">
    <p className="h3 text-ink mb-2">{title}</p>
    {detail && <p className="body-s mb-6">{detail}</p>}
    {onRetry && (
      <button type="button" onClick={onRetry} className="tag border-b border-rule-strong pb-0.5">
        Try again
      </button>
    )}
  </div>
);

/* 44 LoadingState - honest about waiting. */
export const LoadingState = ({ label = "Loading" }) => (
  <p className="py-16 tag" role="status">
    {label}
    <span aria-hidden="true">&hellip;</span>
  </p>
);

/* 45 Field - a labelled input. The label is always visible: a placeholder is
   not a label, and it disappears exactly when it is needed. */
export const Field = ({ label, hint, error, children, required }) => (
  <label className="flex flex-col gap-1.5">
    <span className="tag">
      {label}
      {required && <span className="text-ember-deep"> *</span>}
    </span>
    {children}
    {hint && !error && <span className="body-s">{hint}</span>}
    {error && <span className="text-sm text-ember-deep">{error}</span>}
  </label>
);

/* 46 Input / 47 TextArea / 48 Select - one underline, no trays. */
const base =
  "w-full bg-transparent border-0 border-b border-rule-strong py-2.5 text-ink placeholder:text-ink-faint focus:border-ember focus:outline-none transition-colors";
export const Input = (p) => <input {...p} className={`${base} ${p.className || ""}`} />;
export const TextArea = (p) => (
  <textarea rows={4} {...p} className={`${base} resize-y ${p.className || ""}`} />
);
export const Select = ({ children, ...p }) => (
  <select {...p} className={`${base} ${p.className || ""}`}>
    {children}
  </select>
);

/* 49 FormRow - fields side by side without a grid framework. */
export const FormRow = ({ children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">{children}</div>
);

/* 50 Footnote - the small print, and when it was last true. */
export const Footnote = ({ children, updated }) => (
  <p className="tag pt-8 border-t border-rule">
    {children}
    {updated && <span className="text-ink-faint"> &middot; last updated {updated}</span>}
  </p>
);
