import React, { useEffect, useRef, useState } from "react";

/* IvishAI element library - the drawn ones. 101 to 115.
 *
 * The first hundred were type on rules: correct, readable, and completely flat.
 * The VerbX marketing elements are DRAWN - a globe with scripts orbiting it,
 * odometer reels built from real digit columns, gauges with a limit marker,
 * isometric wireframes. That is the difference between a page that is set and
 * a page that is designed, and it was missing here.
 *
 * Everything below is geometry, in SVG or CSS, in the brand colours. No images,
 * so nothing here costs a download.
 */

const EMBER = "#E26426";
const AQUA = "#0F616D";
const INK = "#121214";
const RULE = "#D8D8D4";

/* --------------------------------------------------------- 101 IsoStack */
/* The signature object: Industry 6.0 as isometric planes, one sitting on the
   next. A company whose whole claim is "we are the layer underneath" should be
   able to show that, and a list of grey bars never could. */
export const IsoStack = ({ layers, size = 440 }) => {
  const w = size;
  const h = size * 0.78;
  const cx = w / 2;
  const rx = w * 0.42;
  const ry = rx * 0.42;
  const gap = h / (layers.length + 1.4);

  /* Drawn bottom-up: the foundation is the LAST plane painted and the lowest on
     screen, because a company whose claim is that it sits underneath cannot
     have its foundation floating on top of its products. */
  const order = [...layers].reverse();

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" style={{ maxWidth: w }} aria-hidden="true">
      {order.map((l, i) => {
        const cy = gap * (i + 1);
        const fill =
          l.state === "live" ? (i % 2 ? EMBER : AQUA) : l.state === "foundation" ? INK : "none";
        const planned = l.state === "planned";
        return (
          <g key={l.name} opacity={planned ? 0.85 : 1}>
            {/* the side wall, so the plane has thickness */}
            {!planned && (
              <path
                d={`M ${cx - rx} ${cy} v 14 a ${rx} ${ry} 0 0 0 ${rx * 2} 0 v -14 z`}
                fill={fill}
                opacity="0.55"
              />
            )}
            <ellipse
              cx={cx}
              cy={cy}
              rx={rx}
              ry={ry}
              fill={planned ? "none" : fill}
              stroke={planned ? RULE : "none"}
              strokeDasharray={planned ? "5 5" : undefined}
            />
          </g>
        );
      })}
    </svg>
  );
};

/* ------------------------------------------------------------- 102 Orbit */
/* The parent at the centre, the products around it. Drawn, so the relationship
   is visible rather than asserted in a sentence. */
export const Orbit = ({ centre, nodes, size = 320 }) => {
  const c = size / 2;
  const r = size * 0.36;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" style={{ maxWidth: size }} aria-hidden="true">
      <circle cx={c} cy={c} r={r} fill="none" stroke={RULE} />
      <circle cx={c} cy={c} r={r * 0.58} fill="none" stroke={RULE} strokeDasharray="4 6" />
      {nodes.map((n, i) => {
        const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = c + Math.cos(a) * r;
        const y = c + Math.sin(a) * r;
        return (
          <g key={n.label}>
            <line x1={c} y1={c} x2={x} y2={y} stroke={RULE} />
            <circle cx={x} cy={y} r="9" fill={n.state === "planned" ? "none" : i % 2 ? EMBER : AQUA} stroke={n.state === "planned" ? RULE : "none"} strokeDasharray={n.state === "planned" ? "3 3" : undefined} />
            <text
              x={x}
              y={y + (Math.sin(a) >= 0 ? 28 : -18)}
              textAnchor="middle"
              fontSize="11"
              fill={INK}
              fontFamily="ui-monospace, monospace"
              letterSpacing="0.08em"
            >
              {n.label.toUpperCase()}
            </text>
          </g>
        );
      })}
      <circle cx={c} cy={c} r="22" fill={INK} />
      <text x={c} y={c + 4} textAnchor="middle" fontSize="11" fill="#fff" fontFamily="ui-monospace, monospace">
        {centre}
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------- 103 Mesh */
/* Infrastructure, as a network that does not pretend to be a real topology:
   a deterministic lattice, so it is the same on every visit. */
export const Mesh = ({ cols = 9, rows = 5, lit = 7, size = 480 }) => {
  const gap = size / (cols + 1);
  const h = gap * (rows + 1);
  const pts = [];
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) pts.push([gap * (c + 1), gap * (r + 1), r * cols + c]);

  return (
    <svg viewBox={`0 0 ${size} ${h}`} width="100%" aria-hidden="true">
      {pts.map(([x, y, i]) => (
        <g key={i}>
          {x + gap < size && <line x1={x} y1={y} x2={x + gap} y2={y} stroke={RULE} />}
          {y + gap < h && <line x1={x} y1={y} x2={x} y2={y + gap} stroke={RULE} />}
        </g>
      ))}
      {pts.map(([x, y, i]) => {
        const on = (i * 7) % 11 < lit / 2;
        return <circle key={i} cx={x} cy={y} r={on ? 4 : 2} fill={on ? (i % 3 ? EMBER : AQUA) : RULE} />;
      })}
    </svg>
  );
};

/* ---------------------------------------------------------- 104 Odometer */
/* Each digit is a column of ten stacked vertically, shifted so the wanted one
   sits in the window. A single "0123456789" string lays out horizontally and
   shows one stray digit - ten block children is the only way the column
   actually exists. */
export const Odometer = ({ value, label }) => {
  const [on, setOn] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return setOn(true);
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setOn(true), io.disconnect()),
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <span className="iv-odo" aria-label={String(value)}>
        {String(value).split("").map((ch, i) =>
          /\d/.test(ch) ? (
            <span key={i} className="iv-odo__d">
              <span
                className="iv-odo__reel"
                style={{ transform: `translateY(-${(on ? Number(ch) : 0) * 10}%)`, transitionDelay: `${i * 70}ms` }}
              >
                {"0123456789".split("").map((d) => (
                  <b key={d}>{d}</b>
                ))}
              </span>
            </span>
          ) : (
            <span key={i} className="iv-odo__sep">{ch}</span>
          ),
        )}
      </span>
      {label && <p className="tag mt-3">{label}</p>}
    </div>
  );
};

/* ------------------------------------------------------------- 105 Gauge */
/* A value against a limit, with the limit actually marked - a bar with no
   threshold on it only says "some". */
export const Gauge = ({ items, limit, limitLabel }) => {
  const max = Math.max(limit, ...items.map((i) => i[1])) * 1.15;
  return (
    <div className="space-y-4">
      {items.map(([label, value, unit]) => (
        <div key={label} className="flex items-center gap-5">
          <span className="tag w-40 flex-shrink-0">{label}</span>
          <span className="relative flex-1 h-2.5 bg-paper-sunk">
            <i
              className="absolute inset-y-0 left-0 block"
              style={{ width: `${(value / max) * 100}%`, background: value > limit ? EMBER : AQUA }}
            />
            <u
              className="absolute inset-y-[-4px] w-px block"
              style={{ left: `${(limit / max) * 100}%`, background: INK }}
            />
          </span>
          <span className="text-ink text-sm w-16 text-right">
            {value}
            <em className="not-italic text-ink-faint">{unit}</em>
          </span>
        </div>
      ))}
      {limitLabel && (
        <p className="tag flex items-center gap-2 pt-1">
          <span className="inline-block w-px h-3" style={{ background: INK }} />
          {limitLabel}
        </p>
      )}
    </div>
  );
};

/* ------------------------------------------------------------ 106 Poster */
/* A tile that is art, not a card: a tone, a script glyph set oversize and
   bleeding, and the title over it. */
export const Poster = ({ title, kicker, tone = 0, glyph, lang, href }) => {
  const TONES = [EMBER, AQUA, INK, "#AD4613", "#63FFF5", "#55555E"];
  const Tag = href ? "a" : "div";
  return (
    <Tag className="block group" {...(href ? { href } : {})}>
      <span
        className="relative flex items-end h-52 overflow-hidden p-5"
        style={{ background: TONES[tone % TONES.length] }}
      >
        {glyph && (
          <span
            lang={lang}
            aria-hidden="true"
            className="absolute -right-4 -top-10 text-[11rem] leading-none text-white/20 select-none"
          >
            {glyph}
          </span>
        )}
        <span className="relative text-paper text-2xl">{title}</span>
      </span>
      {kicker && <span className="tag block mt-3">{kicker}</span>}
    </Tag>
  );
};

/* ----------------------------------------------------------- 107 Lattice */
/* A proportion as a field of squares - 1 in 8 reads instantly when you can
   count it, and not at all as "12.5%". */
export const Lattice = ({ of, lit, label, cols = 20 }) => (
  <div>
    <div className="flex flex-wrap gap-1.5 max-w-lg" role="img" aria-label={`${lit} of ${of}`}>
      {Array.from({ length: of }, (_, i) => (
        <span
          key={i}
          className="h-3 w-3"
          style={{ background: i < lit ? EMBER : "transparent", border: i < lit ? "none" : `1px solid ${RULE}` }}
        />
      ))}
    </div>
    {label && <p className="tag mt-4">{label}</p>}
  </div>
);

/* -------------------------------------------------------------- 108 Ring */
/* One proportion, drawn as an arc. For a single figure that deserves weight. */
export const Ring = ({ value, of, label, size = 148 }) => {
  const r = size / 2 - 10;
  const c = 2 * Math.PI * r;
  const p = Math.max(0, Math.min(1, value / of));
  return (
    <div className="flex items-center gap-6">
      <svg width={size} height={size} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={RULE} strokeWidth="3" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={EMBER}
          strokeWidth="3"
          strokeDasharray={`${c * p} ${c}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <text x="50%" y="52%" textAnchor="middle" dominantBaseline="middle" fontSize="26" fill={INK} fontFamily="Fraunces, serif">
          {value}
        </text>
      </svg>
      <div>
        <p className="text-ink">{label}</p>
        <p className="tag mt-1">of {of}</p>
      </div>
    </div>
  );
};

/* ---------------------------------------------------------- 109 Waveform */
/* Speech, drawn. Deterministic so it does not jitter between renders. */
export const Waveform = ({ bars = 56, tone = "ember", height = 56 }) => (
  <div className="flex items-center gap-[3px]" style={{ height }} aria-hidden="true">
    {Array.from({ length: bars }, (_, i) => {
      const v = (Math.sin(i * 0.5) + Math.sin(i * 0.17) + 2.2) / 4.4;
      return (
        <span
          key={i}
          className="w-[3px]"
          style={{ height: `${18 + v * 82}%`, background: tone === "aqua" ? AQUA : EMBER, opacity: 0.35 + v * 0.65 }}
        />
      );
    })}
  </div>
);

/* ------------------------------------------------------------ 110 Blueprint */
/* A technical frame with corner ticks and a caption, for a diagram or a figure
   that should read as an engineering drawing. */
export const Blueprint = ({ caption, children }) => (
  <figure>
    <div className="relative p-9" style={{ outline: `1px solid ${RULE}` }}>
      {[
        "top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0",
      ].map((pos) => (
        <span key={pos} className={`absolute ${pos} h-3 w-3`} style={{ borderTop: `1px solid ${INK}`, borderLeft: `1px solid ${INK}` }} aria-hidden="true" />
      ))}
      {children}
    </div>
    {caption && <figcaption className="tag mt-3">{caption}</figcaption>}
  </figure>
);

/* --------------------------------------------------------------- 111 Pin */
/* Where things actually are. A schematic of India, not a real map - it is a
   diagram, and it says so by being obviously drawn. */
export const PinMap = ({ pins, size = 260 }) => (
  <svg viewBox="0 0 100 120" width={size} aria-hidden="true">
    <path
      d="M30 12 L52 8 L66 18 L74 34 L68 52 L72 66 L60 86 L50 112 L42 88 L28 70 L22 48 L24 28 Z"
      fill="none"
      stroke={RULE}
      strokeWidth="1"
    />
    {pins.map((p) => (
      <g key={p.label}>
        <circle cx={p.x} cy={p.y} r="2.6" fill={EMBER} />
        <circle cx={p.x} cy={p.y} r="6" fill="none" stroke={EMBER} opacity="0.4" />
        <text x={p.x + 9} y={p.y + 3} fontSize="5" fill={INK} fontFamily="ui-monospace, monospace">
          {p.label}
        </text>
      </g>
    ))}
  </svg>
);

/* ------------------------------------------------------------- 112 Flow */
/* A pipeline, drawn left to right, with the stages named on the line. */
export const Flow = ({ stages }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0">
    {stages.map((s, i) => (
      <React.Fragment key={s}>
        <span className="flex items-center gap-2.5 flex-shrink-0">
          <span className="h-2 w-2 rounded-full" style={{ background: i === 0 ? INK : EMBER }} />
          <span className="text-ink text-sm whitespace-nowrap">{s}</span>
        </span>
        {i < stages.length - 1 && (
          <span className="hidden sm:block flex-1 h-px mx-4" style={{ background: RULE }} aria-hidden="true" />
        )}
      </React.Fragment>
    ))}
  </div>
);

/* ------------------------------------------------------------ 113 Bars */
/* A small chart that is a chart: axis, labels, and no gradient fills. */
export const Bars = ({ items, unit = "" }) => {
  const max = Math.max(...items.map((i) => i.value));
  return (
    <div className="flex items-end gap-5 h-52 border-b" style={{ borderColor: RULE }}>
      {items.map((it, i) => (
        <div key={it.label} className="flex-1 flex flex-col items-center justify-end h-full">
          <span className="text-ink text-sm mb-2">
            {it.value}
            {unit}
          </span>
          <span
            className="w-full"
            style={{ height: `${(it.value / max) * 78}%`, background: i % 2 ? AQUA : EMBER }}
          />
          <span className="tag mt-3 text-center">{it.label}</span>
        </div>
      ))}
    </div>
  );
};

/* ------------------------------------------------------------- 114 Cube */
/* An isometric unit, for a diagram that needs a solid thing in it. */
export const Cube = ({ size = 92, tone = "ember" }) => {
  const c = tone === "aqua" ? AQUA : EMBER;
  return (
    <svg viewBox="0 0 100 110" width={size} aria-hidden="true">
      <polygon points="50,4 94,28 50,52 6,28" fill={c} />
      <polygon points="6,28 50,52 50,104 6,80" fill={c} opacity="0.72" />
      <polygon points="94,28 50,52 50,104 94,80" fill={INK} opacity="0.88" />
    </svg>
  );
};

/* ------------------------------------------------------------ 115 Hatch */
/* A band of diagonal rule, for the ground under a statement. Texture that
   costs nothing and is never an image. */
export const Hatch = ({ height = 96, className = "" }) => (
  <div
    className={className}
    style={{
      height,
      backgroundImage: `repeating-linear-gradient(45deg, ${RULE} 0 1px, transparent 1px 9px)`,
    }}
    aria-hidden="true"
  />
);
