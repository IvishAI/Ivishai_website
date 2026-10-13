import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Masthead, SectionAnchor, Closer, Checklist, Steps, NoteField, Contacts,
  Action, Ghost, Footnote,
} from "../../components/iv";
import { EMAILS, BRAND } from "../../data/site";

/* Responsible disclosure.
 *
 * Two things were wrong here and both mattered.
 *
 * 1. It told researchers to report to security@ivishai.com. That address is
 *    not in our address list - every address we actually publish is a Gmail
 *    one - so a vulnerability report would have gone to a box nobody reads. On
 *    a page whose entire purpose is receiving security reports, that is the
 *    worst possible bug. It points at the general address until a real security
 *    mailbox exists.
 *
 * 2. It promised to "acknowledge your report within 48 hours". There is no
 *    rota and no on-call, so that could not be held to. Promising a response
 *    time you cannot keep to a security researcher is how a private report
 *    becomes a public one.
 */

const RULES = [
  [true, "Report privately first, and give us a chance to fix it"],
  [true, "Include enough detail to reproduce it - a proof of concept helps"],
  [false, "Do not exploit a vulnerability or access data that is not yours"],
  [false, "Do not disrupt the service or other people's use of it"],
  [false, "Do not disclose publicly before it is resolved"],
];

const WHAT_WE_DO = [
  {
    title: "We read it",
    note: "A person, not a queue. We will come back to you - and if we are slow, chase us.",
  },
  {
    title: "We tell you what we found",
    note: "Whether we could reproduce it, and whether we consider it a vulnerability.",
  },
  {
    title: "We fix it by severity",
    note: "And we tell you when it is done, so you can confirm it yourself.",
  },
];

const MAILTO = `mailto:${EMAILS.general}?subject=${encodeURIComponent("Security disclosure")}`;

const ResponsibleDisclosure = () => (
  <div className="iv min-h-screen text-ink">
    <Header />

    <Masthead
      tag="Security"
      tone="stone"
      title="Found something? Tell us."
      lede="If you have found a vulnerability in anything we run, we would much rather hear it from you than read about it."
      actions={[
        <Action key="r" href={MAILTO}>Report a vulnerability</Action>,
        <Ghost key="c" href="/compliance">Our compliance posture</Ghost>,
      ]}
    />

    <SectionAnchor
      id="rules"
      tag="Guidelines"
      title="What we ask of you."
      lede="Short, and the usual."
    >
      <div className="max-w-xl mx-auto text-left">
        <Checklist items={RULES} />
      </div>
    </SectionAnchor>

    <SectionAnchor
      id="ours"
      tag="In return"
      title="What we will do."
      lede="Written as what we can actually hold to."
    >
      <Steps items={WHAT_WE_DO} />

      <div className="mt-12">
        <NoteField tone="sand" tag="On response times">
          This page used to promise an acknowledgement within 48 hours. We have
          no on-call rota and could not hold to it, and a promise a researcher
          cannot rely on is worse than none. We reply as fast as we can, and you
          are welcome to chase us.
        </NoteField>
      </div>
    </SectionAnchor>

    <SectionAnchor id="where" tag="Where to send it" title="One address, read by a person.">
      <Contacts items={[["Security disclosures", EMAILS.general]]} />

      <div className="mt-12 max-w-[62ch] mx-auto">
        <Footnote updated="13 October 2026">
          We do not run a paid bounty programme, and we will not pretend
          otherwise. Credit where you want it, and our thanks either way.
        </Footnote>
      </div>
    </SectionAnchor>

    <Closer
      tone="ink"
      note={BRAND.legal}
      actions={[
        <Action key="r" href={MAILTO}>Report a vulnerability</Action>,
        <Ghost key="t" href="/terms">Terms</Ghost>,
      ]}
    >
      Tell us privately, and we will fix it properly.
    </Closer>

    <Footer />
  </div>
);

export default ResponsibleDisclosure;
