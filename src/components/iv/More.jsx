import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../site/Reveal";

/* IvishAI element library - 66 to 100.
 *
 * The rest of what a company site actually needs: the pages beyond the home
 * page are careers, patents, government, investors, legal and blog, and each
 * of those was previously improvising its own layout inline. These are the
 * forms those pages need, built once.
 */

/* ------------------------------------------------------------ 66 PatentRow */
/* A patent with its number and where it actually is. "8 patents" means little;
   "filed, under examination" means something. */
export const PatentRow = ({ no, title, status, filed }) => (
  <div className="iv-reveal flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-5 border-b border-rule">
    <span className="tag sm:w-32 flex-shrink-0">{no}</span>
    <span className="flex-1 text-ink">{title}</span>
    <span className="flex items-center gap-2 flex-shrink-0">
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${status === "Granted" ? "bg-ember" : "bg-rule-strong"}`}
      />
      <span className="tag">{status}{filed && ` · ${filed}`}</span>
    </span>
  </div>
);

/* ------------------------------------------------------------- 67 RoleRow */
/* An open role: title, team, place, and whether it is actually open. */
export const RoleRow = ({ to, title, team, place, mode, open = true }) => (
  <Link to={to} className="iv-reveal group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-6 border-b border-rule">
    <span className="flex-1">
      <span className="text-ink text-lg group-hover:text-ember-deep transition-colors">{title}</span>
      {!open && <span className="tag ml-3">closed</span>}
    </span>
    <span className="tag flex-shrink-0">{[team, place, mode].filter(Boolean).join(" · ")}</span>
  </Link>
);

/* -------------------------------------------------------- 68 Requirements */
/* What a role actually needs, as a list that is not bulleted with a glyph. */
export const Requirements = ({ title, items }) => (
  <div>
    <p className="tag mb-4">{title}</p>
    <ul className="space-y-3">
      {items.map((t) => (
        <li key={t} className="flex gap-3.5 text-ink-muted max-w-[62ch]">
          <span aria-hidden="true" className="mt-2.5 h-1 w-1 rounded-full bg-ember flex-shrink-0" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  </div>
);

/* ----------------------------------------------------------- 69 LegalDoc */
/* A legal page: a measure, numbered clauses, and the date it was last true. */
export const LegalDoc = ({ children }) => (
  <div className="max-w-[72ch] space-y-10">{children}</div>
);

/* ------------------------------------------------------------- 70 Clause */
export const Clause = ({ n, title, children }) => (
  <section>
    <h2 className="h3 text-ink mb-3">
      {n && <span className="tag mr-3">{n}</span>}
      {title}
    </h2>
    <div className="text-ink-muted leading-relaxed space-y-3">{children}</div>
  </section>
);

/* -------------------------------------------------------------- 71 Table */
/* A real table, for things that are tabular. Rules, no trays. */
export const Table = ({ head, rows, caption }) => (
  <div className="overflow-x-auto">
    {caption && <p className="tag mb-4">{caption}</p>}
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-rule-strong">
          {head.map((h) => (
            <th key={h} className="tag font-normal py-3 pr-6 align-bottom">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-b border-rule">
            {r.map((c, j) => (
              <td key={j} className={`py-3.5 pr-6 ${j === 0 ? "text-ink" : "text-ink-muted"} text-sm`}>
                {c}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ------------------------------------------------------------- 72 Matrix */
/* Which product does what. A tick is a mark, not a green badge. */
export const Matrix = ({ cols, rows }) => (
  <Table
    head={["", ...cols]}
    rows={rows.map(([name, ...cells]) => [
      name,
      ...cells.map((on) =>
        on ? <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember" /> : <span className="text-ink-faint">&mdash;</span>,
      ),
    ])}
  />
);

/* -------------------------------------------------------------- 73 Steps */
/* An ordered process, where each step follows the last. */
export const Steps = ({ items }) => (
  <ol className="space-y-9">
    {items.map((s, i) => (
      <Reveal as="li" key={s.title} delay={i * 0.06} className="flex gap-5 md:gap-8">
        <span className="tag w-8 flex-shrink-0 pt-1">{String(i + 1).padStart(2, "0")}</span>
        <div>
          <p className="text-ink text-lg">{s.title}</p>
          <p className="body-s mt-1 max-w-[58ch]">{s.note}</p>
        </div>
      </Reveal>
    ))}
  </ol>
);

/* ------------------------------------------------------------ 74 Contacts */
/* Which address goes where - a company site's most-used fact. */
export const Contacts = ({ items }) => (
  <dl className="border-t border-rule">
    {items.map(([what, addr]) => (
      <div key={addr} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4 border-b border-rule">
        <dt className="sm:w-48 flex-shrink-0 tag">{what}</dt>
        <dd>
          <a href={`mailto:${addr}`} className="text-ink border-b border-rule-strong hover:border-ember transition-colors">
            {addr}
          </a>
        </dd>
      </div>
    ))}
  </dl>
);

/* ------------------------------------------------------------- 75 Address */
export const Address = ({ lines, note }) => (
  <address className="not-italic">
    {lines.map((l) => (
      <p key={l} className="text-ink-muted">{l}</p>
    ))}
    {note && <p className="tag mt-3">{note}</p>}
  </address>
);

/* --------------------------------------------------------- 76 ArticleRow */
/* A post in a list: date, title, and how long it takes to read. */
export const ArticleRow = ({ to, date, title, read, excerpt }) => (
  <Link to={to} className="iv-reveal group block py-7 border-b border-rule">
    <div className="flex flex-wrap items-baseline gap-4 mb-1.5">
      <span className="tag">{date}</span>
      {read && <span className="tag text-ink-faint">{read}</span>}
    </div>
    <p className="h3 text-ink group-hover:text-ember-deep transition-colors">{title}</p>
    {excerpt && <p className="body-s mt-2 max-w-[66ch]">{excerpt}</p>}
  </Link>
);

/* ----------------------------------------------------------- 77 ByLine */
export const ByLine = ({ who, role, date }) => (
  <p className="tag">
    {who}
    {role && <span className="text-ink-faint"> &middot; {role}</span>}
    {date && <span className="text-ink-faint"> &middot; {date}</span>}
  </p>
);

/* --------------------------------------------------------- 78 PullQuote */
/* A line lifted out of an article, set at display size. */
export const PullQuote = ({ children }) => (
  <p className="h2 text-ink my-12 max-w-[22ch] border-l-2 border-ember pl-7">{children}</p>
);

/* ------------------------------------------------------------- 79 Aside */
export const Aside = ({ title, children }) => (
  <aside className="border-t border-rule pt-5 max-w-[46ch]">
    {title && <p className="tag mb-2">{title}</p>}
    <p className="body-s">{children}</p>
  </aside>
);

/* ---------------------------------------------------------- 80 KeyValue */
export const KeyValue = ({ k, v }) => (
  <div className="flex justify-between gap-6 py-3 border-b border-rule">
    <span className="body-s">{k}</span>
    <span className="text-ink text-sm text-right">{v}</span>
  </div>
);

/* -------------------------------------------------------------- 81 Tabs */
export const Tabs = ({ items }) => {
  const [at, setAt] = useState(0);
  return (
    <div>
      <div role="tablist" className="flex gap-7 border-b border-rule">
        {items.map((t, i) => (
          <button
            key={t.label}
            role="tab"
            aria-selected={at === i}
            onClick={() => setAt(i)}
            className={`pb-3 -mb-px border-b-2 transition-colors ${
              at === i ? "border-ember text-ink" : "border-transparent text-ink-faint hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="pt-8">{items[at].body}</div>
    </div>
  );
};

/* ------------------------------------------------------------ 82 Toggle */
export const Toggle = ({ options, value, onChange, label }) => (
  <div role="group" aria-label={label} className="inline-flex border border-rule-strong">
    {options.map((o) => (
      <button
        key={o}
        type="button"
        aria-pressed={value === o}
        onClick={() => onChange(o)}
        className={`px-4 py-2 text-sm transition-colors ${
          value === o ? "bg-ink text-paper" : "text-ink-muted hover:text-ink"
        }`}
      >
        {o}
      </button>
    ))}
  </div>
);

/* -------------------------------------------------------------- 83 Price */
/* A plan. No tray, no "most popular" ribbon - the price is the fact. */
export const Price = ({ name, amount, per, note, includes, action }) => (
  <Reveal className="flex flex-col">
    <p className="tag">{name}</p>
    <p className="h2 text-ink mt-2">
      {amount}
      {per && <span className="text-ink-faint text-base ml-1.5">{per}</span>}
    </p>
    {note && <p className="body-s mt-2">{note}</p>}
    {includes && (
      <ul className="mt-6 space-y-2.5">
        {includes.map((i) => (
          <li key={i} className="flex gap-3 body-s">
            <span aria-hidden="true" className="mt-2 h-1 w-1 rounded-full bg-ember flex-shrink-0" />
            {i}
          </li>
        ))}
      </ul>
    )}
    {action && <div className="mt-7">{action}</div>}
  </Reveal>
);

/* ------------------------------------------------------- 84 ComparisonBar */
/* Two quantities against each other, drawn to the same scale. */
export const ComparisonBar = ({ rows, unit = "" }) => {
  const max = Math.max(...rows.map((r) => r.value));
  return (
    <ul className="space-y-5">
      {rows.map((r) => (
        <li key={r.label}>
          <div className="flex justify-between gap-4 mb-2">
            <span className="body-s">{r.label}</span>
            <span className="text-ink text-sm">{r.value}{unit}</span>
          </div>
          <div className="h-2 bg-paper-sunk">
            <div
              className="h-full"
              style={{ width: `${(r.value / max) * 100}%`, background: r.tone === "aqua" ? "#0F616D" : "#E26426" }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

/* ------------------------------------------------------------ 85 Legend */
export const Legend = ({ items }) => (
  <ul className="flex flex-wrap gap-6">
    {items.map((i) => (
      <li key={i.label} className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: i.hex }} aria-hidden="true" />
        <span className="tag">{i.label}</span>
      </li>
    ))}
  </ul>
);

/* --------------------------------------------------------- 86 Highlights */
/* Three or four facts that belong together, with no box round them. */
export const Highlights = ({ items }) => (
  <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
    {items.map(([v, k]) => (
      <div key={k}>
        <dt className="h3 text-ink">{v}</dt>
        <dd className="tag mt-1.5">{k}</dd>
      </div>
    ))}
  </dl>
);

/* ---------------------------------------------------------- 87 Milestone */
/* One dated thing, for use outside a full timeline. */
export const Milestone = ({ when, what }) => (
  <p className="flex flex-wrap items-baseline gap-3">
    <span className="tag">{when}</span>
    <span className="text-ink">{what}</span>
  </p>
);

/* ------------------------------------------------------------- 88 Banner */
/* One sentence across the page, with somewhere to go. Not a card. */
export const Banner = ({ children, action }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 py-7 border-y border-rule">
    <p className="text-ink max-w-[52ch]">{children}</p>
    {action}
  </div>
);

/* ----------------------------------------------------------- 89 Callout */
/* The one that is a warning, and looks like it without shouting. */
export const Callout = ({ title, children }) => (
  <div className="border-l-2 border-ember-deep pl-6 py-1 max-w-[62ch]">
    {title && <p className="text-ink font-medium mb-1">{title}</p>}
    <p className="body-s">{children}</p>
  </div>
);

/* ---------------------------------------------------------- 90 Checklist */
export const Checklist = ({ items }) => (
  <ul className="space-y-3.5">
    {items.map(([done, text]) => (
      <li key={text} className="flex gap-3.5">
        <span
          aria-hidden="true"
          className={`mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0 ${done ? "bg-ember" : "bg-rule-strong"}`}
        />
        <span className={done ? "text-ink" : "text-ink-faint"}>{text}</span>
      </li>
    ))}
  </ul>
);

/* -------------------------------------------------------------- 91 Code */
export const Code = ({ children }) => (
  <code className="font-mono text-[0.9em] bg-paper-sunk px-1.5 py-0.5">{children}</code>
);

/* ------------------------------------------------------------ 92 Kbd */
export const Kbd = ({ children }) => (
  <kbd className="font-mono text-xs border-b-2 border-rule-strong px-1.5 py-0.5">{children}</kbd>
);

/* ------------------------------------------------------- 93 SectionIndex */
/* A numbered contents list at the top of a long page. */
export const SectionIndex = ({ items }) => (
  <ol className="border-t border-rule max-w-md">
    {items.map((i, n) => (
      <li key={i.id} className="border-b border-rule">
        <a href={`#${i.id}`} className="flex items-baseline gap-5 py-3.5 group">
          <span className="tag">{String(n + 1).padStart(2, "0")}</span>
          <span className="text-ink group-hover:text-ember-deep transition-colors">{i.label}</span>
        </a>
      </li>
    ))}
  </ol>
);

/* ------------------------------------------------------------ 94 Reveal2 */
/* A progressive disclosure for a long list: show some, then the rest. */
export const ShowMore = ({ children, initial = 6, label = "Show all" }) => {
  const all = React.Children.toArray(children);
  const [open, setOpen] = useState(false);
  const shown = open ? all : all.slice(0, initial);
  return (
    <>
      {shown}
      {!open && all.length > initial && (
        <button type="button" onClick={() => setOpen(true)} className="tag mt-6 border-b border-rule-strong pb-0.5">
          {label} ({all.length})
        </button>
      )}
    </>
  );
};

/* ------------------------------------------------------------- 95 Anchor */
/* A heading you can link to, with the link made visible on hover. */
export const Anchor = ({ id, children }) => (
  <h2 id={id} className="h3 text-ink group scroll-mt-28">
    {children}
    <a href={`#${id}`} className="tag ml-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Link to this section">
      #
    </a>
  </h2>
);

/* ------------------------------------------------------------ 96 Ticker */
/* A live-ish figure with the moment it was true. Never a number alone. */
export const Ticker = ({ value, label, asOf }) => (
  <div>
    <p className="h3 text-ink">{value}</p>
    <p className="tag mt-1">{label}</p>
    {asOf && <p className="tag text-ink-faint mt-0.5">as of {asOf}</p>}
  </div>
);

/* ------------------------------------------------------------- 97 Avatar */
export const Avatar = ({ src, name, size = 40 }) => (
  <img
    src={src}
    alt={name}
    loading="lazy"
    className="rounded-full object-cover grayscale"
    style={{ width: size, height: size }}
  />
);

/* ------------------------------------------------------ 98 ConsentRow */
/* A real choice, defaulting to the private option. */
export const ConsentRow = ({ label, note, checked, onChange }) => (
  <label className="flex items-start gap-4 py-5 border-b border-rule cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="mt-1.5 accent-[#E26426]"
    />
    <span>
      <span className="text-ink block">{label}</span>
      {note && <span className="body-s">{note}</span>}
    </span>
  </label>
);

/* ------------------------------------------------------------ 99 Sticky */
/* A side column that holds position next to long content. */
export const Sticky = ({ children, className = "" }) => (
  <div className={`lg:sticky lg:top-28 ${className}`}>{children}</div>
);

/* --------------------------------------------------------- 100 Progress */
/* How far down a long document the reader is. Decoration that is honest:
   it reflects real position and disappears under reduced motion. */
export const Progress = () => {
  const [p, setP] = useState(0);
  const raf = useRef(0);
  useEffect(() => {
    const on = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setP(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => {
      window.removeEventListener("scroll", on);
      cancelAnimationFrame(raf.current);
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-50 pointer-events-none" aria-hidden="true">
      <div className="h-full bg-ember" style={{ width: `${p}%` }} />
    </div>
  );
};
