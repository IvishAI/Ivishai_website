import React from "react";
import Reveal from "../site/Reveal";

/* IvishAI element library - the colour fields. 116 to 130.
 *
 * WHY THESE EXIST.
 *
 * "No cards anywhere" was taken too far. What was wrong with the old site was
 * the grey bordered box - a hairline rectangle drawn round a paragraph, on a
 * dark ground, repeated down every page. Removing that was right.
 *
 * But the VerbX marketing site is full of FILLED panels: soft gradient bento
 * tiles in lavender, mint, peach, blue, pink and yellow, and five full-bleed
 * saturated fields each carrying one line. That is where its presence comes
 * from. Stripping every fill, radius and large colour surface off this site
 * left 115 correct elements that all looked the same: type on hairlines.
 *
 * So the rule is not "no fills". The rule is:
 *   - no hairline box drawn round content to separate it
 *   - but YES to large colour surfaces, used as surfaces
 *   - a tint carries ink; a saturated field carries paper
 *
 * The tints are built around the brand rather than picked at random: ember and
 * aqua lead, and the rest are the neighbours they need to sit beside.
 */

/* The tint family. Each is a soft two-stop gradient, light enough that ink
   still reads at 12:1 or better on top of it. */
export const TINTS = {
  ember: ["#FDEDE2", "#FBDCC8"],
  aqua: ["#E4F2F4", "#CFE7EA"],
  lilac: ["#EEEBFA", "#E0DBF6"],
  mint: ["#E7F4EC", "#D6EBDF"],
  sky: ["#E4EEFB", "#D2E2F8"],
  rose: ["#FBE7F0", "#F7D5E5"],
  sand: ["#FAF2DF", "#F5E7C4"],
  stone: ["#F2F2EF", "#E7E7E2"],
};

/* The saturated family, for a field that carries paper-coloured text. */
export const FIELDS = {
  ember: ["#E26426", "#AD4613"],
  aqua: ["#117C8C", "#0F616D"],
  ink: ["#1C1C20", "#0B0B0D"],
  plum: ["#5B4B8A", "#3E3365"],
  moss: ["#3E7A5E", "#2A5742"],
  clay: ["#B5543C", "#8A3A28"],
};

const grad = (pair, angle = 145) =>
  `linear-gradient(${angle}deg, ${pair[0]} 0%, ${pair[1]} 100%)`;

/* ---------------------------------------------------------- 116 Tile */
/* One tinted panel. A surface, not a box: no outline, and the colour is the
   edge. Ink sits on it, because a tint that needs white text is not a tint. */
export const Tile = ({ tone = "ember", title, children, span, tall, href, delay = 0 }) => {
  const Tag = href ? "a" : "div";
  return (
    <Reveal
      delay={delay}
      className={[span === 2 ? "sm:col-span-2" : "", tall ? "sm:row-span-2" : ""].join(" ")}
    >
      <Tag
        {...(href ? { href } : {})}
        className={`flex h-full flex-col justify-end rounded-2xl p-7 md:p-8 ${tall ? "min-h-[17rem]" : "min-h-[13rem]"} ${href ? "transition-transform hover:-translate-y-0.5" : ""}`}
        style={{ background: grad(TINTS[tone] || TINTS.ember) }}
      >
        {title && <h3 className="text-ink text-lg font-medium mb-1.5">{title}</h3>}
        <p className="text-ink-muted text-sm leading-relaxed max-w-[42ch]">{children}</p>
      </Tag>
    </Reveal>
  );
};

/* ---------------------------------------------------------- 117 Bento */
/* The grid those tiles live in. Varying sizes, because a perfectly even grid
   of six is a table, not a composition. */
export const Bento = ({ children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 auto-rows-fr">{children}</div>
);

/* ---------------------------------------------------------- 118 Field */
/* A full-bleed saturated panel carrying one line. The thing the marketing site
   uses five of, and the single biggest reason it has presence. */
export const ColourField = ({ tone = "ember", children, note, tall = false, glyph, lang }) => (
  <Reveal
    className={`relative overflow-hidden rounded-3xl flex items-center justify-center text-center ${tall ? "min-h-[32rem]" : "min-h-[22rem]"} p-10`}
    style={{ background: grad(FIELDS[tone] || FIELDS.ember, 155) }}
  >
    {glyph && (
      <span
        lang={lang}
        aria-hidden="true"
        className="absolute -right-6 -bottom-24 text-[22rem] leading-none text-white/10 select-none"
      >
        {glyph}
      </span>
    )}
    <div className="relative">
      <p className="h2 text-paper max-w-[18ch] mx-auto">{children}</p>
      {note && <p className="tag mt-5 text-paper/70">{note}</p>}
    </div>
  </Reveal>
);

/* ------------------------------------------------------ 119 FieldStack */
/* Several fields in sequence, which is how they are actually used - one after
   another, each a different colour, each one line. */
export const FieldStack = ({ items }) => (
  <div className="space-y-5">
    {items.map((f) => (
      <ColourField key={f.text} tone={f.tone} note={f.note} glyph={f.glyph} lang={f.lang}>
        {f.text}
      </ColourField>
    ))}
  </div>
);

/* ------------------------------------------------------ 120 StatPanel */
/* A saturated panel carrying figures. The numbers are paper on colour, which
   is the one place a big number earns that much weight. */
export const StatPanel = ({ tone = "plum", title, note, stats }) => (
  <Reveal
    className="rounded-3xl p-9 md:p-12"
    style={{ background: grad(FIELDS[tone] || FIELDS.plum, 135) }}
  >
    {title && <p className="h3 text-paper mb-2">{title}</p>}
    {note && <p className="text-paper/70 text-sm max-w-[60ch] mb-9">{note}</p>}
    <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map(([v, k]) => (
        <div key={k}>
          <dt className="text-paper text-3xl md:text-4xl font-medium leading-none">{v}</dt>
          <dd className="text-paper/70 text-xs uppercase tracking-[0.08em] mt-2.5">{k}</dd>
        </div>
      ))}
    </dl>
  </Reveal>
);

/* ----------------------------------------------------------- 121 Wash */
/* A soft gradient behind a hero. The ground stays the ground - this sits on
   top of it and fades out, rather than becoming a second background. */
export const Wash = ({ tone = "ember", className = "" }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute inset-x-0 top-0 h-[34rem] ${className}`}
    style={{
      background: `radial-gradient(60% 70% at 70% 0%, ${TINTS[tone][1]} 0%, transparent 70%)`,
    }}
  />
);

/* ----------------------------------------------------------- 122 Orb */
/* A soft coloured sphere. The marketing site's discs, in our colours - an
   object that is purely presence, used sparingly. */
export const Orb = ({ tone = "ember", size = 64, glyph, lang }) => {
  const [a, b] = FIELDS[tone] || FIELDS.ember;
  return (
    <span
      className="inline-flex items-center justify-center rounded-full flex-shrink-0"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 32% 28%, #ffffff55 0%, transparent 42%), linear-gradient(145deg, ${a}, ${b})`,
      }}
    >
      {glyph && (
        <span lang={lang} className="text-paper" style={{ fontSize: size * 0.42 }} aria-hidden="true">
          {glyph}
        </span>
      )}
    </span>
  );
};

/* ------------------------------------------------------- 123 OrbRow */
/* A row of them, each carrying a script. The languages, as objects. */
export const OrbRow = ({ items, size = 64 }) => (
  <ul className="flex flex-wrap gap-3.5">
    {items.map((o, i) => (
      <Reveal as="li" key={o.lang + i} delay={i * 0.04}>
        <Orb tone={o.tone} size={size} glyph={o.glyph} lang={o.lang} />
      </Reveal>
    ))}
  </ul>
);

/* ------------------------------------------------------ 124 SplitField */
/* Half colour, half ground. For a statement that needs an image's worth of
   weight without an image. */
export const SplitField = ({ tone = "aqua", tag, title, children, action }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden">
    <div className="min-h-[18rem]" style={{ background: grad(FIELDS[tone] || FIELDS.aqua) }} />
    <div className="flex flex-col justify-center p-9 md:p-12" style={{ background: grad(TINTS[tone] || TINTS.aqua) }}>
      {tag && <p className="tag mb-3">{tag}</p>}
      <h3 className="h3 text-ink mb-3">{title}</h3>
      <p className="text-ink-muted max-w-[44ch]">{children}</p>
      {action && <div className="mt-7">{action}</div>}
    </div>
  </div>
);

/* ------------------------------------------------------- 125 QuoteField */
/* Words someone said, on colour, at size. */
export const QuoteField = ({ tone = "sand", children, who, where }) => (
  <Reveal
    className="rounded-3xl p-9 md:p-14"
    style={{ background: grad(TINTS[tone] || TINTS.sand) }}
  >
    <blockquote className="h2 text-ink max-w-[22ch]">{children}</blockquote>
    <p className="tag mt-7">
      {who}
      {where && <span className="text-ink-faint"> &middot; {where}</span>}
    </p>
  </Reveal>
);

/* -------------------------------------------------------- 126 Capsule */
/* A tinted pill carrying one fact. For a row of small claims that would
   otherwise be bullet points. */
export const Capsule = ({ tone = "stone", children }) => (
  <span
    className="inline-flex items-center rounded-full px-4 py-1.5 text-sm text-ink"
    style={{ background: grad(TINTS[tone] || TINTS.stone, 120) }}
  >
    {children}
  </span>
);

/* ------------------------------------------------------ 127 CapsuleRow */
export const CapsuleRow = ({ items }) => (
  <div className="flex flex-wrap gap-2.5">
    {items.map((t, i) => (
      <Capsule key={t} tone={Object.keys(TINTS)[i % Object.keys(TINTS).length]}>
        {t}
      </Capsule>
    ))}
  </div>
);

/* ------------------------------------------------------ 128 TonePanel */
/* A tint behind a block of real content - a list, a table, a form - so a
   section can change weight without a box being drawn round it. */
export const TonePanel = ({ tone = "stone", className = "", children }) => (
  <div
    className={`rounded-3xl p-8 md:p-12 ${className}`}
    style={{ background: grad(TINTS[tone] || TINTS.stone) }}
  >
    {children}
  </div>
);

/* -------------------------------------------------------- 129 Ribbon */
/* A thin saturated strip. One line, full width, used between bands. */
export const Ribbon = ({ tone = "ember", children, action }) => (
  <div
    className="rounded-2xl px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
    style={{ background: grad(FIELDS[tone] || FIELDS.ember, 100) }}
  >
    <p className="text-paper max-w-[54ch]">{children}</p>
    {action}
  </div>
);

/* ------------------------------------------------------- 130 Palette */
/* The tint and field families, shown. So nobody invents a ninth colour. */
export const Palette = () => (
  <div className="space-y-8">
    <div>
      <p className="tag mb-3">Tints &middot; ink sits on these</p>
      <div className="grid grid-cols-4 lg:grid-cols-8 gap-3">
        {Object.entries(TINTS).map(([name, pair]) => (
          <div key={name}>
            <span className="block h-16 rounded-xl" style={{ background: grad(pair) }} />
            <span className="tag block mt-2">{name}</span>
          </div>
        ))}
      </div>
    </div>
    <div>
      <p className="tag mb-3">Fields &middot; paper sits on these</p>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
        {Object.entries(FIELDS).map(([name, pair]) => (
          <div key={name}>
            <span className="block h-16 rounded-xl" style={{ background: grad(pair) }} />
            <span className="tag block mt-2">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
