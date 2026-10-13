import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../site/Reveal";
import { TINTS, FIELDS } from "./Fields";

/* IvishAI element library - editorial. 143 to 152.
 *
 * Built for the writing pages. A blog index made of rows reads as a changelog;
 * a blog index made of stock photographs reads as a content farm. These draw
 * their own covers from the brand - a tone, a script glyph, and the title set
 * large - so a post is recognisable before it is read and nothing depends on
 * finding a photograph for it.
 */

const grad = (pair, angle = 145) =>
  `linear-gradient(${angle}deg, ${pair[0]} 0%, ${pair[1]} 100%)`;

const TINT_KEYS = Object.keys(TINTS);
const FIELD_KEYS = Object.keys(FIELDS);

/* A stable tone per title, so a post keeps its colour between visits and the
   index does not reshuffle itself on every load. */
function toneFor(seed, keys) {
  let n = 0;
  for (let i = 0; i < seed.length; i++) n = (n * 31 + seed.charCodeAt(i)) >>> 0;
  return keys[n % keys.length];
}

const GLYPHS = [
  ["अ", "hi"], ["அ", "ta"], ["అ", "te"], ["আ", "bn"],
  ["અ", "gu"], ["ಅ", "kn"], ["അ", "ml"], ["ਅ", "pa"],
];

function glyphFor(seed) {
  let n = 0;
  for (let i = 0; i < seed.length; i++) n = (n * 17 + seed.charCodeAt(i)) >>> 0;
  return GLYPHS[n % GLYPHS.length];
}

/* ----------------------------------------------------------- 143 Lead */
/* The one post the index leads with. Full width, saturated, with the glyph
   bleeding off the corner - the same treatment as a ColourField, because a
   lead article deserves the weight of a statement. */
export const Lead = ({ to, href, kicker, title, excerpt, date, read }) => {
  const tone = toneFor(title, FIELD_KEYS);
  const [g, lang] = glyphFor(title);
  const Inner = (
    <>
      <span
        lang={lang}
        aria-hidden="true"
        className="absolute -right-10 -bottom-32 text-[26rem] leading-none text-white/10 select-none"
      >
        {g}
      </span>
      <span className="relative block max-w-[42ch]">
        {kicker && <span className="tag block text-paper/90 mb-5">{kicker}</span>}
        <span className="h1 block text-paper">{title}</span>
        {excerpt && <span className="block text-paper/80 mt-6 text-lg">{excerpt}</span>}
        <span className="tag block text-paper/90 mt-8">
          {[date, read].filter(Boolean).join(" · ")}
        </span>
      </span>
    </>
  );
  const cls =
    "relative block overflow-hidden rounded-3xl p-10 md:p-16 min-h-[26rem] flex items-end transition-transform hover:-translate-y-0.5";
  const style = { background: grad(FIELDS[tone], 155) };

  return (
    <Reveal>
      {to ? (
        <Link to={to} className={cls} style={style}>{Inner}</Link>
      ) : (
        <a href={href} className={cls} style={style}>{Inner}</a>
      )}
    </Reveal>
  );
};

/* ------------------------------------------------------- 144 PostTile */
/* A post in the grid. Its cover is a tinted field with the glyph in it, so
   every post has artwork and none of it is a stock photograph. */
export const PostTile = ({ to, href, title, excerpt, date, read, kicker, delay = 0 }) => {
  const tone = toneFor(title, TINT_KEYS);
  const [g, lang] = glyphFor(title);
  const Inner = (
    <>
      <span
        className="relative flex h-44 items-end overflow-hidden rounded-2xl p-5"
        style={{ background: grad(TINTS[tone]) }}
      >
        <span
          lang={lang}
          aria-hidden="true"
          className="absolute -right-3 -top-14 text-[11rem] leading-none text-ink/10 select-none"
        >
          {g}
        </span>
        {kicker && <span className="tag relative">{kicker}</span>}
      </span>
      <span className="block mt-5">
        <span className="tag block">{[date, read].filter(Boolean).join(" · ")}</span>
        <span className="h3 block text-ink mt-2 group-hover:text-ember-deep transition-colors">
          {title}
        </span>
        {excerpt && <span className="body-s block mt-2">{excerpt}</span>}
      </span>
    </>
  );
  const cls = "group block";
  return (
    <Reveal delay={delay}>
      {to ? <Link to={to} className={cls}>{Inner}</Link> : <a href={href} className={cls}>{Inner}</a>}
    </Reveal>
  );
};

/* ------------------------------------------------------- 145 PostGrid */
export const PostGrid = ({ children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
    {children}
  </div>
);

/* ------------------------------------------------------ 146 PressRow */
/* Coverage written by someone else. It leaves the site, and says so. */
export const PressRow = ({ href, outlet, title, when }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="iv-reveal group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-7 py-6 border-b border-rule"
  >
    <span className="tag sm:w-44 flex-shrink-0">{outlet}</span>
    <span className="flex-1 text-ink group-hover:text-ember-deep transition-colors">
      {title}
    </span>
    <span className="tag flex-shrink-0">
      {when} <span aria-hidden="true">&#8599;</span>
    </span>
  </a>
);

/* ------------------------------------------------------- 147 Article */
/* The shell every post sits in: a measure, a byline, and nothing else
   competing with the words. */
export const Article = ({ kicker, title, who, date, read, children }) => (
  <article className="band">
    <div className="wrap">
      <header className="max-w-[46ch] mx-auto text-center mb-14">
        {kicker && <p className="tag mb-4">{kicker}</p>}
        <h1 className="text-ink">{title}</h1>
        <p className="tag mt-6">
          {[who, date, read].filter(Boolean).join(" · ")}
        </p>
      </header>
      <div className="iv-prose max-w-[68ch] mx-auto">{children}</div>
    </div>
  </article>
);

/* ------------------------------------------------------ 148 ReadNext */
export const ReadNext = ({ items }) => (
  <div className="border-t border-rule pt-10">
    <p className="tag mb-7">Read next</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {items.map((p, i) => (
        <PostTile key={p.to} {...p} delay={i * 0.06} />
      ))}
    </div>
  </div>
);

/* ------------------------------------------------------- 149 Topics */
/* The subjects, as a filter that is honest about being a label - it does not
   pretend to filter anything it cannot. */
export const Topics = ({ items, active, onPick }) => (
  <div className="flex flex-wrap gap-2.5 justify-center" role="group" aria-label="Topics">
    {items.map((t) => {
      const on = t === active;
      return (
        <button
          key={t}
          type="button"
          aria-pressed={on}
          onClick={() => onPick(t)}
          className={
            "rounded-full px-4 py-1.5 text-sm transition-colors " +
            (on ? "bg-ink text-paper" : "text-ink-muted hover:text-ink")
          }
          style={on ? undefined : { background: grad(TINTS.stone, 120) }}
        >
          {t}
        </button>
      );
    })}
  </div>
);

/* ------------------------------------------------------ 150 Subscribe */
/* Says plainly what arriving in an inbox would mean, and does not promise a
   cadence we have not kept. */
export const Subscribe = ({ action, children }) => (
  <div
    className="rounded-3xl p-9 md:p-12 text-center"
    style={{ background: grad(TINTS.sand) }}
  >
    <p className="h3 text-ink max-w-[24ch] mx-auto">{children}</p>
    <div className="mt-7 flex justify-center">{action}</div>
  </div>
);

/* ------------------------------------------------------- 151 Shelf */
/* A horizontal row of posts for the foot of an article or a narrow section. */
export const Shelf = ({ items }) => (
  <ul className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 snap-x">
    {items.map((p) => (
      <li key={p.to || p.href} className="flex-shrink-0 snap-start w-72">
        <PostTile {...p} />
      </li>
    ))}
  </ul>
);

/* ------------------------------------------------------- 152 Dateline */
export const Dateline = ({ when, where }) => (
  <p className="tag">
    {when}
    {where && <span className="text-ink-faint"> · {where}</span>}
  </p>
);
