import React from "react";
import Reveal from "../site/Reveal";

/* IvishAI element library - records, sequences and proof.
 *
 * The old site rendered four different kinds of information - the Industry 6.0
 * layers, the company timeline, the credentials list and an institutional note
 * - as the same grey full-width bar. None of them read as what they were.
 * These give each its own form.
 */

/* 15 Ledger - a numbered spine. For an ordered set that is not a timeline:
   the layers of Industry 6.0, a list of principles, the steps of a process. */
export const Ledger = ({ items }) => (
  <ol className="border-t border-rule">
    {items.map((it, i) => (
      <Reveal as="li" key={it.name} delay={i * 0.05} className="border-b border-rule">
        <div className="flex items-baseline gap-5 md:gap-8 py-6">
          <span className="tag w-8 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
          <span className="flex-1 text-ink text-lg md:text-xl">{it.name}</span>
          {it.status && <Status state={it.state}>{it.status}</Status>}
        </div>
        {it.note && <p className="body-s pb-6 pl-[3.25rem] md:pl-[4.25rem] max-w-[62ch]">{it.note}</p>}
      </Reveal>
    ))}
  </ol>
);

/* 16 Status - live / planned / foundation. A dot and a word, not a pill on a
   coloured tray. The dot is the only colour. */
export const Status = ({ state = "planned", children }) => {
  const tone =
    state === "live" ? "bg-ember" : state === "foundation" ? "bg-aqua-deep" : "bg-rule-strong";
  return (
    <span className="inline-flex items-center gap-2 flex-shrink-0">
      <span className={`h-1.5 w-1.5 rounded-full ${tone}`} aria-hidden="true" />
      <span className="tag">{children}</span>
    </span>
  );
};

/* 17 Timeline - dated milestones, in order, against a single spine. */
export const Timeline = ({ items }) => (
  <ol className="relative border-l border-rule pl-6 md:pl-10">
    {items.map((m, i) => (
      <Reveal as="li" key={m.when + m.what} delay={i * 0.05} className="relative pb-9 last:pb-0">
        <span
          className="absolute -left-[1.6rem] md:-left-[2.6rem] top-2 h-1.5 w-1.5 rounded-full bg-ink"
          aria-hidden="true"
        />
        <p className="tag mb-1">{m.when}</p>
        <p className="text-ink text-lg">{m.what}</p>
        {m.note && <p className="body-s mt-1 max-w-[58ch]">{m.note}</p>}
      </Reveal>
    ))}
  </ol>
);

/* 18 SpecSheet - grouped name/value pairs. For things that are facts. */
export const SpecSheet = ({ groups }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
    {groups.map(([heading, rows]) => (
      <div key={heading}>
        <p className="tag mb-4">{heading}</p>
        <dl className="border-t border-rule">
          {rows.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-6 py-3 border-b border-rule">
              <dt className="body-s">{k}</dt>
              <dd className="text-ink text-sm text-right">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    ))}
  </div>
);

/* 19 FactRow - one claim, one source. Nothing on this site should state a
   number without somewhere to check it. */
export const FactRow = ({ claim, source }) => (
  <div className="iv-reveal flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4 border-b border-rule">
    <p className="flex-1 text-ink">{claim}</p>
    <p className="tag flex-shrink-0">{source}</p>
  </div>
);

/* 20 CredentialRow - a registration or recognition, with its mark. The mark
   keeps a white plate because the artwork is drawn for white. */
export const CredentialRow = ({ mark, name, detail }) => (
  <div className="iv-reveal flex items-center gap-5 py-4 border-b border-rule">
    {mark ? (
      <img src={mark} alt="" aria-hidden="true" className="h-7 w-20 object-contain flex-shrink-0" />
    ) : (
      <span className="h-1.5 w-1.5 rounded-full bg-ember flex-shrink-0" aria-hidden="true" />
    )}
    <span className="flex-1 text-ink">{name}</span>
    {detail && <span className="tag">{detail}</span>}
  </div>
);

/* 21 PersonRow - a person, their role, what they actually do. Not a card. */
export const PersonRow = ({ photo, name, role, children, links, delay = 0 }) => (
  <Reveal delay={delay} className="flex flex-col sm:flex-row gap-5 py-8 border-b border-rule">
    {photo && (
      <img
        src={photo}
        alt={name}
        loading="lazy"
        className="h-28 w-28 object-cover flex-shrink-0 grayscale"
      />
    )}
    <div className="flex-1 min-w-0">
      <h3 className="text-ink text-lg font-medium">{name}</h3>
      {role && <p className="tag mt-0.5 mb-2">{role}</p>}
      <p className="body-s max-w-[58ch]">{children}</p>
      {links && <div className="flex gap-5 mt-3">{links}</div>}
    </div>
  </Reveal>
);

/* 22 BigNumber - one figure, set at display size, with what it counts. */
export const BigNumber = ({ value, unit, children }) => (
  <Reveal className="flex flex-col">
    <p className="h1 text-ink leading-none">
      {value}
      {unit && <span className="text-ink-faint">{unit}</span>}
    </p>
    <p className="body-s mt-3 max-w-[32ch]">{children}</p>
  </Reveal>
);

/* 23 StatRow - a row of BigNumbers. */
export const StatRow = ({ children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-14">{children}</div>
);

/* 24 Diff - what it was against what it is. Marks, not red and green trays. */
export const Diff = ({ rows }) => (
  <ul className="border-t border-rule">
    {rows.map(([kind, text], i) => (
      <li key={i} className="flex items-baseline gap-4 py-3.5 border-b border-rule">
        <span
          aria-hidden="true"
          className={
            "mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 " +
            (kind === "in" ? "bg-ember" : kind === "out" ? "bg-rule-strong" : "bg-transparent")
          }
        />
        <span className={kind === "note" ? "body-s italic" : "text-ink"}>{text}</span>
      </li>
    ))}
  </ul>
);

/* 25 LogoWall - partners and platforms, flat and quiet. */
export const LogoWall = ({ items }) => (
  <ul className="flex flex-wrap items-center gap-x-12 gap-y-8">
    {items.map((l) => (
      <li key={l.name} className="flex items-center gap-3">
        {l.mark && <img src={l.mark} alt="" aria-hidden="true" className="h-7 object-contain" />}
        <span className="body-s">{l.name}</span>
      </li>
    ))}
  </ul>
);
