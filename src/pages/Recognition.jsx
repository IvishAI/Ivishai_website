import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Masthead, SectionAnchor, Closer, CredentialStrip, Timeline, FactRow,
  StatPanel, NoteField, Action, Ghost, Marquee,
} from "../components/iv";
import { CREDENTIALS, ENGAGEMENTS, EVENTS, NUMBERS } from "../data/site";

/* Recognition and media.
 *
 * This page is the company's record, and the honesty rule bites hardest here:
 * an engagement is a conversation that happened, not an endorsement. "Met
 * Ashwini Vaishnaw at the AI Impact Summit" is true and checkable; "backed by"
 * would not be. So every row carries the event it happened at, and the page
 * says in its own words what these are and are not.
 */

const Recognition = () => (
  <div className="iv min-h-screen text-ink">
    <Header />

    <Masthead
      tag="Recognition and media"
      tone="sand"
      title="The record, as it stands."
      lede="Registrations anyone can verify, the events we were actually at, and the people we actually met - with the room it happened in, so none of it reads as more than it is."
      actions={[
        <Action key="a" href="/about">About the company</Action>,
        <Ghost key="p" to="/patents">The patents</Ghost>,
      ]}
    />

    <SectionAnchor
      id="registered"
      tag="Company credentials"
      title="Registered and recognised."
      lede="Each of these is checkable against a public register."
    >
      <div className="iv-wide">
        <CredentialStrip items={CREDENTIALS} />
      </div>

      <div className="mt-12 iv-wide">
        <StatPanel
          tone="plum"
          title="The figures."
          note="From the company record. Patents are listed individually on the patents page, with where each one stands."
          stats={[
            ["2025", "Incorporated"],
            [`${NUMBERS.patentsTotal}`, "Patents filed"],
            [`${NUMBERS.patentsGranted}`, "Granted"],
            ["2", "Products live"],
          ]}
        />
      </div>
    </SectionAnchor>

    <SectionAnchor
      id="events"
      tag="Where we have been"
      title="The events."
      lede="Dated, and in order."
    >
      <Timeline
        items={EVENTS.map((e) => ({ when: e.when, what: e.name, note: e.note }))}
      />
    </SectionAnchor>

    <SectionAnchor
      id="engagements"
      tag="People we have met"
      title="Conversations, with the room they happened in."
      lede="These are meetings, not endorsements. Each one names the event, so you can judge it for what it is."
    >
      <div>
        {ENGAGEMENTS.map((e) => (
          <FactRow key={e.who} claim={e.who} source={e.ctx} />
        ))}
      </div>

      <div className="mt-12">
        <NoteField tone="stone" tag="What this list is not">
          Nobody on this page has endorsed, invested in or partnered with
          IvishAI unless it says so elsewhere on this site in those words. A
          conversation at a summit is a conversation at a summit.
        </NoteField>
      </div>
    </SectionAnchor>

    <div className="wrap pb-10">
      <Marquee
        items={[
          "DPIIT recognised",
          "MSME registered",
          "Startup India SISFS runner-up 2026",
          "PDPM IIITDM Jabalpur",
          "Deep Tech Conclave 2024",
          "Startup Mahakumbh 2025",
          "AI Impact Summit 2026",
          "WADLA Hackathon 2025",
        ]}
      />
    </div>

    <Closer
      tone="ember"
      glyph="&#3077;"
      lang="ta"
      note="Ivish AI Quantum Pvt Ltd"
      actions={[
        <Action key="p" href="/patents">The patents</Action>,
        <Ghost key="c" to="/contact">Talk to us</Ghost>,
      ]}
    >
      Everything on this page can be checked.
    </Closer>

    <Footer />
  </div>
);

export default Recognition;
