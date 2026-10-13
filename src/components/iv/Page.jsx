import React from "react";
import Reveal from "../site/Reveal";
import { TINTS, FIELDS } from "./Fields";

/* IvishAI element library - page-level forms. 131 to 140.
 *
 * Found while rebuilding About: the shapes every page needs and none of them
 * had, so each one was improvising its own opener, its own person block and
 * its own partner row inline. That is how the old site drifted.
 */

const grad = (pair, angle = 145) =>
  `linear-gradient(${angle}deg, ${pair[0]} 0%, ${pair[1]} 100%)`;

/* ------------------------------------------------------- 131 Masthead */
/* The opener every page gets: a tag, the one display line, a lede and at most
   two actions, over a soft wash. The old site wrote this by hand on each page
   with a different padding and a different alignment every time. */
export const Masthead = ({ tag, title, lede, actions, tone = "ember" }) => (
  <section className="band relative overflow-hidden pt-28 md:pt-36">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-[30rem]"
      style={{
        background: `radial-gradient(58% 70% at 72% 0%, ${(TINTS[tone] || TINTS.ember)[1]} 0%, transparent 70%)`,
      }}
    />
    {/* Centred, per the owner on 13 Oct. The page opener is the one place the
        whole site agrees on its axis, so this sets the tone for every page. */}
    <div className="wrap relative text-center">
      {tag && <p className="tag mb-5 iv-rise" style={{ "--d": "0ms" }}>{tag}</p>}
      <h1 className="text-ink max-w-[18ch] mx-auto iv-rise" style={{ "--d": "60ms" }}>{title}</h1>
      {lede && <p className="lede mt-6 mx-auto iv-rise" style={{ "--d": "140ms" }}>{lede}</p>}
      {actions && (
        <div
          className="flex flex-col sm:flex-row gap-3 mt-9 justify-center iv-rise"
          style={{ "--d": "220ms" }}
        >
          {actions}
        </div>
      )}
    </div>
  </section>
);

/* -------------------------------------------------------- 132 Profile */
/* A person at feature size, with their own words. A founder is the one place
   a site should quote the person rather than describe them. */
export const Profile = ({
  photo, name, role, children, quote, links, tone = "stone", delay = 0,
}) => (
  <Reveal delay={delay} className="grid grid-cols-1 sm:grid-cols-[11rem_1fr] gap-6 md:gap-9">
    <div>
      {photo && (
        <img
          src={photo}
          alt={name}
          loading="lazy"
          className="w-full aspect-square object-cover rounded-2xl grayscale"
        />
      )}
    </div>
    <div className="min-w-0">
      <h3 className="h3 text-ink">{name}</h3>
      {role && <p className="tag mt-1 mb-4">{role}</p>}
      <p className="text-ink-muted leading-relaxed max-w-[58ch]">{children}</p>
      {quote && (
        <blockquote
          className="mt-6 rounded-2xl p-6 text-ink max-w-[58ch]"
          style={{ background: grad(TINTS[tone] || TINTS.stone) }}
        >
          {quote}
        </blockquote>
      )}
      {links && <div className="flex flex-wrap gap-5 mt-5">{links}</div>}
    </div>
  </Reveal>
);

/* ----------------------------------------------------- 133 PartnerRow */
/* A partner with its mark, what the relationship actually is, and a way to
   check it. The mark keeps a paper plate because partner artwork is drawn for
   white - but it is a plate, not a card: no outline. */
export const PartnerRow = ({ logo, name, note, href }) => {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
      className="iv-reveal flex flex-col sm:flex-row sm:items-center gap-5 py-6 border-b border-rule group"
    >
      {logo && (
        <span className="flex h-12 w-28 flex-shrink-0 items-center justify-center bg-paper rounded-lg p-2">
          <img src={logo} alt="" aria-hidden="true" className="max-h-full object-contain" />
        </span>
      )}
      <span className="flex-1">
        <span className="block text-ink group-hover:text-ember-deep transition-colors">{name}</span>
        {note && <span className="body-s block mt-0.5 max-w-[56ch]">{note}</span>}
      </span>
      {href && <span className="tag flex-shrink-0" aria-hidden="true">&rarr;</span>}
    </Tag>
  );
};

/* ------------------------------------------------ 134 CredentialStrip */
/* The recognitions as a row of marks on tints. Five identical grey bars said
   nothing; this reads as a record. */
export const CredentialStrip = ({ items }) => {
  const tones = Object.keys(TINTS);
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {items.map((c, i) => (
        <Reveal
          as="li"
          key={c.label}
          delay={i * 0.05}
          className="rounded-2xl p-5 flex flex-col justify-between min-h-[8.5rem]"
          style={{ background: grad(TINTS[tones[i % tones.length]]) }}
        >
          {c.logo ? (
            <img src={c.logo} alt="" aria-hidden="true" className="h-8 object-contain self-start" />
          ) : (
            <span className="h-2 w-2 rounded-full bg-ember" aria-hidden="true" />
          )}
          <span className="text-ink text-sm leading-snug mt-5">{c.label}</span>
        </Reveal>
      ))}
    </ul>
  );
};

/* --------------------------------------------------------- 135 TwoUp */
/* A sticky left column against long right-hand content. For pages that are
   really documents: legal, patents, a long product page. */
export const TwoUp = ({ aside, children }) => (
  <div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr] gap-10 lg:gap-16">
    <div className="lg:sticky lg:top-28 lg:self-start">{aside}</div>
    <div className="min-w-0">{children}</div>
  </div>
);

/* ------------------------------------------------------ 136 PageIndex */
/* What is on this page, at the top of it, for anything long. */
export const PageIndex = ({ items }) => (
  <nav aria-label="On this page">
    <p className="tag mb-4">On this page</p>
    <ol className="space-y-2.5">
      {items.map((i, n) => (
        <li key={i.id}>
          <a href={`#${i.id}`} className="body-s hover:text-ink transition-colors flex gap-3">
            <span className="text-ink-faint">{String(n + 1).padStart(2, "0")}</span>
            {i.label}
          </a>
        </li>
      ))}
    </ol>
  </nav>
);

/* ------------------------------------------------------ 137 NoteField */
/* One fact that needs more weight than a sentence and less than a field.
   A tint, a mark, and the line. */
export const NoteField = ({ tone = "sand", tag, children }) => (
  <div className="iv-reveal rounded-2xl p-7 md:p-9" style={{ background: grad(TINTS[tone] || TINTS.sand) }}>
    {tag && <p className="tag mb-3">{tag}</p>}
    <p className="text-ink max-w-[62ch] leading-relaxed">{children}</p>
  </div>
);

/* ------------------------------------------------------- 138 LinkOut */
/* An external link that admits it leaves the site. */
export const LinkOut = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-1.5 text-ink-muted hover:text-ember-deep transition-colors text-sm"
  >
    {children}
    <span aria-hidden="true">&#8599;</span>
  </a>
);

/* -------------------------------------------------- 139 SectionAnchor */
/* A band that can be linked to, with its heading carrying the id. */
export const SectionAnchor = ({ id, tag, title, lede, children }) => (
  <section id={id} className="band scroll-mt-24">
    <div className="wrap">
      <Reveal className="head">
        {tag && <span className="tag block mb-3.5">{tag}</span>}
        <h2 className="text-ink">{title}</h2>
        {lede && <p className="lede mt-4 mx-auto">{lede}</p>}
      </Reveal>
      {children}
    </div>
  </section>
);

/* --------------------------------------------------------- 140 Closer */
/* How every page ends: one saturated field and somewhere to go. Consistent,
   so the site stops inventing a different ending on each page. */
export const Closer = ({ tone = "ink", children, note, actions, glyph, lang }) => (
  <section className="band">
    <div className="wrap">
      <Reveal
        className="relative overflow-hidden rounded-3xl flex items-center justify-center text-center min-h-[20rem] p-10"
        style={{ background: grad(FIELDS[tone] || FIELDS.ink, 155) }}
      >
        {glyph && (
          <span
            lang={lang}
            aria-hidden="true"
            className="absolute -right-6 -bottom-24 text-[20rem] leading-none text-white/10 select-none"
          >
            {glyph}
          </span>
        )}
        <div className="relative">
          <p className="h2 text-paper max-w-[20ch] mx-auto">{children}</p>
          {note && <p className="tag mt-5 text-paper/70">{note}</p>}
        </div>
      </Reveal>
      {actions && <div className="flex flex-col sm:flex-row gap-3 mt-7 justify-center">{actions}</div>}
    </div>
  </section>
);
