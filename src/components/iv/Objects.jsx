import React, { useEffect, useRef, useState } from "react";
import Reveal from "../site/Reveal";

/* IvishAI element library - the objects.
 *
 * The first batch were layout primitives: Band, Wrap, Head, Lede. Useful, but
 * you cannot see any of them, which is how the page ended up as black text on
 * white and nothing else. These are the things with presence - the ones that
 * put the company's own material on the page.
 *
 * The material was already in the repo and unused: thirteen Indian scripts in
 * src/data/sera.js, ten product screenshots in public/sera-screens, eleven
 * partner and credential logos in public/logos, a globe component, and the
 * real numbers (600K products, 27 industries, 8 patents with 1 granted).
 *
 * Colour lives here. Ember and aqua are the brand, and a brand that appears
 * only as two 6px dots is not on the page at all.
 */

/* ---------------------------------------------------------------- 51 Plate */
/* An inverted band. The site is one paper ground, but a page with no dark
   moment has no rhythm - this is the exception, used once or twice, never as a
   card. On ink the cloud ramp applies, so text stays readable. */
export const Plate = ({ id, className = "", children }) => (
  <section id={id} className={`band bg-ink text-cloud ${className}`}>
    <div className="wrap">{children}</div>
  </section>
);

/* ---------------------------------------------------------- 52 ScriptWall */
/* The thirteen scripts Sera ships, each drawn in its own writing system.
   This is the India story told as an object rather than as a sentence: a wall
   of scripts says "thirteen languages" faster than the words do. */
export const ScriptWall = ({ items, tone = "ember" }) => (
  <ul className="flex flex-wrap gap-x-10 gap-y-7">
    {items.map((l, i) => (
      <Reveal as="li" key={l.code} delay={i * 0.03} className="flex flex-col">
        <span
          lang={l.code}
          dir={l.code === "ur" ? "rtl" : "ltr"}
          className={`text-4xl md:text-5xl leading-none ${
            tone === "ember" ? "text-ember" : "text-aqua-deep"
          }`}
        >
          {l.native}
        </span>
        <span className="tag mt-2.5">{l.name}</span>
      </Reveal>
    ))}
  </ul>
);

/* --------------------------------------------------------------- 53 Glyph */
/* One script character as a mark, for when a section needs an object and not
   an icon. Used at size, in the brand colour. */
export const Glyph = ({ char, lang, tone = "ember", size = "text-6xl" }) => (
  <span
    lang={lang}
    aria-hidden="true"
    className={`${size} leading-none ${tone === "aqua" ? "text-aqua-deep" : "text-ember"}`}
  >
    {char}
  </span>
);

/* --------------------------------------------------------------- 54 Stack */
/* The layers of Industry 6.0, drawn. Four planes in perspective, the live ones
   in the brand colours and the planned one as an outline. The old site made
   this a list of four grey bars, which is the one shape that cannot show that
   something sits underneath something else. */
export const Stack = ({ layers }) => (
  <div className="relative py-4 select-none max-w-2xl" aria-hidden="true">
    {layers.map((l, i) => (
      <Reveal
        key={l.name}
        delay={i * 0.08}
        className="relative flex items-center gap-5"
        style={{ marginTop: i === 0 ? 0 : 10 }}
      >
        <span className="tag w-6 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
        <div
          className="h-11 flex-1"
          style={{
            marginLeft: i * 22,
            background:
              l.state === "live"
                ? i % 2
                  ? "#E26426"
                  : "#0F616D"
                : l.state === "foundation"
                  ? "#121214"
                  : "transparent",
            border: l.state === "planned" ? "1px dashed #D8D8D4" : "none",
          }}
        />
      </Reveal>
    ))}
  </div>
);

/* --------------------------------------------------------- 55 ProductMark */
/* A product, as a tile with its own colour and mark. Not a card: there is no
   box round the text, the colour IS the object. */
export const ProductMark = ({ tone = "ember", mark, name, kind, children, action }) => (
  <Reveal className="flex flex-col">
    <div
      className="flex h-36 md:h-44 items-end p-5"
      style={{ background: tone === "aqua" ? "#0F616D" : "#E26426" }}
    >
      {mark ? (
        <img src={mark} alt="" aria-hidden="true" className="h-8 object-contain" />
      ) : (
        <span className="text-paper text-3xl font-medium">{name}</span>
      )}
    </div>
    <p className="tag mt-5">{kind}</p>
    <h3 className="h3 text-ink mt-1.5 mb-2">{name}</h3>
    <p className="body-s max-w-[46ch]">{children}</p>
    {action && <div className="mt-5">{action}</div>}
  </Reveal>
);

/* ------------------------------------------------------------- 56 Screens */
/* Real product screenshots, in a row that scrolls. Ten screens of Sera have
   been sitting in public/sera-screens unused while the page described the
   product in prose. */
export const Screens = ({ shots, label }) => (
  <div>
    {label && <p className="tag mb-4">{label}</p>}
    <ul className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 snap-x">
      {shots.map((s) => (
        <li key={s.src} className="flex-shrink-0 snap-start" style={{ width: 216 }}>
          <img
            src={s.src}
            alt={s.alt || ""}
            loading="lazy"
            className="w-full border border-rule"
          />
          {s.caption && <p className="tag mt-2.5">{s.caption}</p>}
        </li>
      ))}
    </ul>
  </div>
);

/* ------------------------------------------------------ 57 CredentialWall */
/* The recognitions, with their actual marks. These logos are drawn for white,
   which is one more reason the site works better on paper than it did on black
   - they were sitting on forced white plates before. */
export const CredentialWall = ({ items }) => (
  <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-9 items-center">
    {items.map((c, i) => (
      <Reveal as="li" key={c.name} delay={i * 0.04} className="flex flex-col gap-2.5">
        <img src={c.mark} alt={c.name} loading="lazy" className="h-9 object-contain self-start" />
        <span className="tag">{c.note || c.name}</span>
      </Reveal>
    ))}
  </ul>
);

/* --------------------------------------------------------------- 58 Meter */
/* A proportion, drawn. "8 patents, 1 granted" is a fact; the bar makes the
   shape of it visible without overclaiming. */
export const Meter = ({ value, of, label, tone = "ember" }) => {
  const pct = Math.max(0, Math.min(100, (value / of) * 100));
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 mb-2.5">
        <span className="tag">{label}</span>
        <span className="text-ink text-sm">
          {value} <span className="text-ink-faint">of {of}</span>
        </span>
      </div>
      <div className="h-1.5 w-full bg-paper-sunk" role="img" aria-label={`${value} of ${of}`}>
        <div
          className="h-full"
          style={{ width: `${pct}%`, background: tone === "aqua" ? "#0F616D" : "#E26426" }}
        />
      </div>
    </div>
  );
};

/* ------------------------------------------------------------- 59 Counter */
/* A number that counts up once, when it is reached - and is simply the number
   when motion is reduced or the observer never fires. The figure is never
   hidden behind the animation. */
export const Counter = ({ to, suffix = "", label }) => {
  const [n, setN] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const still =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || still || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const started = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - started) / 900);
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <div ref={ref}>
      <p className="h1 text-ink leading-none">
        {n === null ? to : n}
        {suffix && <span className="text-ember">{suffix}</span>}
      </p>
      <p className="body-s mt-3 max-w-[28ch]">{label}</p>
    </div>
  );
};

/* ------------------------------------------------------------ 60 Terminal */
/* Real output, in mono, on ink. Used where the claim is technical and a
   sentence would be weaker than the thing itself. */
export const Terminal = ({ lines, caption }) => (
  <div>
    <pre className="bg-ink text-cloud p-6 overflow-x-auto text-[13px] leading-relaxed font-mono">
      {lines.map(([kind, text], i) => (
        <div key={i} className={kind === "cmd" ? "text-cloud" : "text-cloud-muted"}>
          {kind === "cmd" && <span className="text-ember">$ </span>}
          {text}
        </div>
      ))}
    </pre>
    {caption && <p className="tag mt-3">{caption}</p>}
  </div>
);

/* -------------------------------------------------------------- 61 Swatch */
/* The brand, stated. Every colour on this site is one of these. */
export const Swatch = ({ hex, name, note }) => (
  <div className="flex flex-col gap-2.5">
    <span className="h-16 w-full" style={{ background: hex }} aria-hidden="true" />
    <span className="text-ink text-sm">{name}</span>
    <span className="tag">
      {hex}
      {note && <span className="text-ink-faint"> &middot; {note}</span>}
    </span>
  </div>
);

/* ------------------------------------------------------------ 62 DotField */
/* Reach, drawn as a field of marks rather than claimed as a number on its own.
   Each dot is one place; the count is the caption, not the headline. */
export const DotField = ({ count, lit = 0, label, tone = "ember" }) => (
  <div>
    <div className="flex flex-wrap gap-1.5 max-w-xl" role="img" aria-label={label}>
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full"
          style={{
            background: i < lit ? (tone === "aqua" ? "#0F616D" : "#E26426") : "#E2E2DF",
          }}
        />
      ))}
    </div>
    <p className="tag mt-4">{label}</p>
  </div>
);

/* --------------------------------------------------------- 63 IndustryWall */
/* Twenty-eight industries is a fact worth showing as twenty-eight things. */
export const IndustryWall = ({ items }) => (
  <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
    {items.map((n) => (
      <li key={n} className="text-ink-muted text-sm">
        {n}
      </li>
    ))}
  </ul>
);

/* -------------------------------------------------------- 64 PortraitRow */
/* The team as faces, in a row, at one size. */
export const PortraitRow = ({ people }) => (
  <ul className="flex flex-wrap gap-8">
    {people.map((p, i) => (
      <Reveal as="li" key={p.name} delay={i * 0.05} className="w-36">
        <img
          src={p.photo}
          alt={p.name}
          loading="lazy"
          className="h-36 w-36 object-cover grayscale"
        />
        <p className="text-ink text-sm mt-3">{p.name}</p>
        <p className="tag mt-0.5">{p.role}</p>
      </Reveal>
    ))}
  </ul>
);

/* ------------------------------------------------------------- 65 Marquee */
/* A single line that travels, for a set too long to list. No seam: the
   sequence is rendered twice and the copy is hidden from screen readers. */
export const Marquee = ({ items }) => (
  <div className="overflow-hidden border-y border-rule py-5">
    <div className="iv-marquee flex gap-12 w-max">
      {[0, 1].map((pass) => (
        <div key={pass} className="flex gap-12" aria-hidden={pass === 1 ? "true" : undefined}>
          {items.map((t) => (
            <span key={t + pass} className="tag whitespace-nowrap">
              {t}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
