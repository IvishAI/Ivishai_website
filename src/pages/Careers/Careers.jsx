import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Masthead, SectionAnchor, Closer, Bento, Tile, Contacts, NoteField,
  Action, Ghost, TextLink,
} from "../../components/iv";
import { EMAILS, BRAND } from "../../data/site";

/* Careers.
 *
 * Deliberately plain, and deliberately without job postings - owner's call on
 * 13 Oct: "just keep careers page plain, no need of any posting".
 *
 * What was removed with it, and why it is not a loss:
 *   - the application form wrote twenty fields to the browser console and then
 *     popped an alert saying "Application submitted successfully". Every
 *     application was discarded and every applicant was told otherwise.
 *   - the careers login / signup / profile pages were an account system for an
 *     application pipeline that did not exist.
 *   - nine role pages described openings with no way to apply to them that
 *     actually worked.
 *
 * One address, which a person reads, beats all of it.
 */

const WHY = [
  [
    "lilac",
    "Infrastructure, not features",
    "You would be working on the layer underneath - the operating systems that other software sits on top of.",
  ],
  [
    "mint",
    "Small enough to matter",
    "Three founders and a short bench. What you build ships, and you will know which part is yours.",
  ],
  [
    "ember",
    "Built for Bharat",
    "Indian languages, Indian conditions, offline-first. The hard problems are the interesting ones.",
  ],
  [
    "sky",
    "Hyderabad, and the work",
    "Registered in Hyderabad, incubated at PDPM IIITDM Jabalpur. Tell us where you are and we will be straight with you about it.",
  ],
];

const Careers = () => (
  <div className="iv min-h-screen text-ink">
    <Header />

    <Masthead
      tag="Careers"
      tone="sand"
      title="Build Industry 6.0, from India."
      lede="We are not running a listings page. If you want to work on infrastructure that sits underneath communication and commerce, write to us and tell us what you have built."
      actions={[
        <Action key="w" href={`mailto:${EMAILS.careers}`}>Write to us</Action>,
        <Ghost key="a" to="/about">About the company</Ghost>,
      ]}
    />

    <SectionAnchor
      id="why"
      tag="Why here"
      title="What the work actually is."
    >
      <div className="iv-wide">
        <Bento>
          <Tile tone={WHY[0][0]} span={2} title={WHY[0][1]}>{WHY[0][2]}</Tile>
          <Tile tone={WHY[1][0]} title={WHY[1][1]}>{WHY[1][2]}</Tile>
          <Tile tone={WHY[2][0]} title={WHY[2][1]}>{WHY[2][2]}</Tile>
          <Tile tone={WHY[3][0]} span={2} title={WHY[3][1]}>{WHY[3][2]}</Tile>
        </Bento>
      </div>
    </SectionAnchor>

    <SectionAnchor
      id="how"
      tag="How to reach us"
      title="One address, read by a person."
      lede="No form, no portal, no tracking number. Send what you have built and why this, and we will reply either way."
    >
      <Contacts
        items={[
          ["Careers and internships", EMAILS.careers],
          ["Anything else", EMAILS.general],
        ]}
      />

      <div className="mt-12">
        <NoteField tone="stone" tag="What we do not have">
          We are not advertising specific openings today. If that changes it
          will say so here, and we would rather say nothing than list a role we
          are not actually hiring for.
        </NoteField>
      </div>

      <p className="mt-10">
        <TextLink to="/stay-updated">Tell us to let you know when roles open</TextLink>
      </p>
    </SectionAnchor>

    <Closer
      tone="ink"
      glyph="&#2949;"
      lang="gu"
      note={BRAND.legal}
      actions={[
        <Action key="w" href={`mailto:${EMAILS.careers}`}>Write to us</Action>,
        <Ghost key="p" to="/products">See what we build</Ghost>,
      ]}
    >
      Tell us what you have built, and why this.
    </Closer>

    <Footer />
  </div>
);

export default Careers;
