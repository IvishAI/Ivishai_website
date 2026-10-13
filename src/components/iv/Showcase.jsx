import React, { useEffect, useRef, useState } from "react";

/* 153 Showcase - the app carousel.
 *
 * Restoring what the Sera page had before I replaced it with a flat row of
 * images. The original was a 3D coverflow: phone frames fanned out, the centre
 * one upright and the neighbours scaled back and rotated, advancing on its own
 * every few seconds and pausing when you point at it. A caption underneath
 * changes with the active screen so each one is named, and dots let you jump.
 *
 * I took it out because it was 150 lines of page-level code. That was the
 * wrong trade - it is the single best thing on that page. It belongs in the
 * library, which is where it is now, so the VerbX pages can use it too.
 *
 * Honest about motion: it respects prefers-reduced-motion by not advancing on
 * its own, and every screen is still reachable by its dot. Nothing is only
 * visible while the animation runs.
 */

export const Showcase = ({ screens, interval = 3800, startAt = 0 }) => {
  const n = screens.length;
  const [active, setActive] = useState(startAt);
  const paused = useRef(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (still || n < 2) return;
    const t = setInterval(() => {
      if (!paused.current) setActive((a) => (a + 1) % n);
    }, interval);
    return () => clearInterval(t);
  }, [n, interval, still]);

  const current = screens[active];

  return (
    <div
      className="iv-sc"
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
      onFocusCapture={() => { paused.current = true; }}
      onBlurCapture={() => { paused.current = false; }}
    >
      <div className="iv-sc__stage">
        <span className="iv-sc__glow" aria-hidden="true" />
        {screens.map((s, idx) => {
          let off = idx - active;
          if (off > n / 2) off -= n;
          if (off < -n / 2) off += n;
          const a = Math.abs(off);
          const near = a <= 2;
          return (
            <button
              type="button"
              key={s.src}
              className="iv-sc__card"
              aria-label={s.tag || s.caption}
              aria-current={a === 0 || undefined}
              onClick={() => setActive(idx)}
              style={{
                transform: `translateX(calc(${off} * var(--iv-sc-step))) scale(${
                  a === 0 ? 1 : a === 1 ? 0.85 : 0.72
                }) rotateY(${off * -6}deg)`,
                opacity: near ? (a === 0 ? 1 : a === 1 ? 0.72 : 0.34) : 0,
                pointerEvents: near ? "auto" : "none",
                zIndex: 10 - a,
              }}
            >
              <span className="iv-sc__frame">
                <span className="iv-sc__screen">
                  <img src={s.src} alt={s.title || s.caption || ""} loading="lazy" />
                  <span className="iv-sc__notch" aria-hidden="true" />
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="iv-sc__caption" aria-live="polite">
        {current.tag && <p className="tag">{current.tag}</p>}
        {current.title && <p className="h3 text-ink mt-2">{current.title}</p>}
        {current.body && <p className="body-s mt-2 max-w-[52ch] mx-auto">{current.body}</p>}
      </div>

      <div className="iv-sc__dots" role="tablist" aria-label="Screens">
        {screens.map((s, idx) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-selected={idx === active}
            aria-label={s.tag || s.caption || `Screen ${idx + 1}`}
            className={"iv-sc__dot" + (idx === active ? " is-on" : "")}
            onClick={() => setActive(idx)}
          />
        ))}
      </div>
    </div>
  );
};

/* 154 ZoneList - retail zones, each with its own colour.
 *
 * Replacing a Ledger row that read
 *   "Core Retail - Grocery, Kirana, General Store, Dairy, Fruits & Vegetables,
 *    Bakery"
 * as one long heading, which is four lines of run-on text on a phone and tells
 * you nothing at a glance. The zone is the heading, it carries its own tone,
 * and the shop types underneath are what they are: a list of shop types.
 */
const ZONE_TONES = [
  ["#E26426", "#AD4613"],
  ["#0F616D", "#117C8C"],
  ["#5B4B8A", "#3E3365"],
  ["#3E7A5E", "#2A5742"],
  ["#B5543C", "#8A3A28"],
  ["#55555E", "#121214"],
];

export const ZoneList = ({ zones, hrefFor }) => (
  <ol className="space-y-10">
    {zones.map((z, i) => {
      const [a, b] = ZONE_TONES[i % ZONE_TONES.length];
      return (
        <li key={z.name} className="iv-reveal">
          <div className="flex items-baseline gap-4 flex-wrap">
            <span className="tag">{String(i + 1).padStart(2, "0")}</span>
            <h3
              className="h3"
              style={{
                background: `linear-gradient(100deg, ${a}, ${b})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {z.name}
            </h3>
            <span className="tag">{z.industries.length} shop types</span>
            {z.restricted && <span className="tag text-ember-deep">Regulated</span>}
          </div>

          <ul className="flex flex-wrap gap-2 mt-4 pl-0 sm:pl-12">
            {z.industries.map((ind) =>
              hrefFor ? (
                <li key={ind.slug}>
                  <a
                    href={hrefFor(ind)}
                    className="inline-flex rounded-full px-3.5 py-1.5 text-sm text-ink transition-colors"
                    style={{ background: "#F2F2EF" }}
                  >
                    {ind.name}
                  </a>
                </li>
              ) : (
                <li
                  key={ind.slug}
                  className="inline-flex rounded-full px-3.5 py-1.5 text-sm text-ink"
                  style={{ background: "#F2F2EF" }}
                >
                  {ind.name}
                </li>
              ),
            )}
          </ul>
        </li>
      );
    })}
  </ol>
);
