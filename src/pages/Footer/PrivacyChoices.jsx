import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Masthead, SectionAnchor, Closer, Steps, NoteField, Contacts,
  Action, Ghost, TextLink, Footnote,
} from "../../components/iv";
import { EMAILS, BRAND } from "../../data/site";

/* Your privacy choices.
 *
 * This page said "You have full control over how your data is used. Choose the
 * options below to manage your privacy settings" - and then offered no working
 * control at all. The only real control on this site is the cookie page, and
 * until today that one did not work either.
 *
 * So this page stops pretending to be a control panel and becomes what it is:
 * the list of choices you actually have, each one pointing at the thing that
 * performs it. A page that describes a setting it cannot change is worse than
 * a page that tells you where the setting is.
 */

const CHOICES = [
  {
    title: "Turn analytics off, or on",
    note: "The one switch on this site that changes what runs. It is off until you turn it on, and the choice is remembered.",
  },
  {
    title: "Ask what we hold about you",
    note: "Write to us and we will tell you what we have, which for most visitors is nothing beyond anonymous analytics.",
  },
  {
    title: "Ask us to delete it",
    note: "Same address. We will do it and confirm when it is done.",
  },
];

const PrivacyChoices = () => (
  <div className="iv min-h-screen text-ink">
    <Header />

    <Masthead
      tag="Your privacy"
      tone="sky"
      title="The choices you actually have."
      lede="Three of them, and each one points at the thing that performs it rather than describing a setting this page cannot change."
      actions={[
        <Action key="c" href="/cookie-preferences">Cookie preferences</Action>,
        <Ghost key="p" href="/privacypolicy">Privacy policy</Ghost>,
      ]}
    />

    <SectionAnchor id="choices" tag="What you can do" title="And where to do it.">
      <Steps items={CHOICES} />

      <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
        <Action href="/cookie-preferences">Manage cookies</Action>
        <Ghost href={`mailto:${EMAILS.general}?subject=${encodeURIComponent("Privacy request")}`}>
          Make a privacy request
        </Ghost>
      </div>

      <div className="mt-14">
        <NoteField tone="stone" tag="What changed here">
          This page used to promise &ldquo;full control&rdquo; and then offer no
          working control at all. The cookie page is the real one, and as of
          today it genuinely saves and honours what you choose.
        </NoteField>
      </div>
    </SectionAnchor>

    <SectionAnchor id="more" tag="The documents" title="If you want the detail.">
      <ul className="border-t border-rule max-w-xl mx-auto text-left">
        <li className="border-b border-rule py-5">
          <TextLink to="/privacypolicy">Privacy policy</TextLink>
          <p className="body-s mt-1.5">What we collect and why, in full.</p>
        </li>
        <li className="border-b border-rule py-5">
          <TextLink to="/cookie-preferences">Cookie preferences</TextLink>
          <p className="body-s mt-1.5">The working switch.</p>
        </li>
      </ul>

      <div className="mt-12">
        <Contacts items={[["Privacy requests", EMAILS.general]]} />
      </div>

      <div className="mt-12 max-w-[62ch] mx-auto">
        <Footnote updated="13 October 2026">
          Your cookie choice is stored in your browser only. We keep no record
          of it on our side.
        </Footnote>
      </div>
    </SectionAnchor>

    <Closer
      tone="ink"
      note={BRAND.legal}
      actions={[
        <Action key="c" href="/cookie-preferences">Manage cookies</Action>,
        <Ghost key="h" to="/">Home</Ghost>,
      ]}
    >
      A choice we ignore is not a choice.
    </Closer>

    <Footer />
  </div>
);

export default PrivacyChoices;
