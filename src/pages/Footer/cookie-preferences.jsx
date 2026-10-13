import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Masthead, SectionAnchor, Closer, ConsentRow, NoteField, Action, Ghost,
  Footnote, Contacts,
} from "../../components/iv";
import { readConsent, writeConsent } from "../../lib/consent";
import { EMAILS } from "../../data/site";

/* Cookie preferences.
 *
 * ⚠️ WHAT THIS PAGE USED TO DO:
 *
 * Three toggles - Essential, Analytics, Personalised - with the optional two
 * defaulting to OFF, and a "Save Preferences" button that had **no onClick
 * handler at all**. It animated on hover and did nothing. The toggles were
 * React state, discarded the moment you navigated away.
 *
 * At the same time public/index.html loaded the Meta Pixel and fired
 * fbq('track','PageView') for every visitor on every page, and loaded GA4. So
 * a visitor could come to this page, switch analytics off, press Save, and be
 * tracked exactly as before. A consent interface that collects a decision and
 * ignores it is worse than no interface, because it tells the visitor they are
 * protected.
 *
 * The choice is now stored, applied, and honoured: GA runs under Consent Mode
 * denied-by-default, and the Pixel is not loaded at all until someone agrees.
 * Undecided counts as no.
 */

const CookiesPreference = () => {
  const [consent, setConsent] = useState(() => readConsent());
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const set = (key) => (value) => {
    setConsent((c) => ({ ...c, [key]: value }));
    setSaved(false);
  };

  const save = () => {
    writeConsent(consent);
    setConsent(readConsent());
    setSaved(true);
  };

  return (
    <div className="iv min-h-screen text-ink">
      <Header />

      <Masthead
        tag="Cookies"
        tone="sand"
        title="Your choice, and we keep it."
        lede="Three kinds of cookie. The two optional ones are off until you say otherwise, and this page remembers what you chose."
      />

      <SectionAnchor
        id="choices"
        tag="What you can turn off"
        title="Choose what runs."
      >
        <div className="max-w-xl mx-auto text-left">
          <div className="py-5 border-b border-rule opacity-70">
            <p className="text-ink">Essential</p>
            <p className="body-s">
              What makes the site work at all - routing and your saved choice on
              this page. These cannot be switched off, and they are not used to
              track you.
            </p>
          </div>

          <ConsentRow
            label="Analytics"
            note="Which pages are read, so we know what to write more of. Google Analytics."
            checked={consent.analytics}
            onChange={set("analytics")}
          />

          <ConsentRow
            label="Personalised advertising"
            note="Lets us measure advertising. Meta Pixel. Off unless you turn it on, and not even loaded until then."
            checked={consent.personalised}
            onChange={set("personalised")}
          />

          <div className="flex flex-col sm:flex-row items-start gap-4 mt-9">
            <button
              type="button"
              onClick={save}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-ink text-paper hover:opacity-90 transition-opacity"
            >
              Save my choice
            </button>
            {saved && (
              <p className="tag pt-4" role="status">
                Saved. It applies from now on, on this browser.
              </p>
            )}
          </div>

          <div className="mt-12">
            <NoteField tone="stone" tag="If you do nothing">
              Nothing optional runs. Undecided counts as no, and if your browser
              blocks storage we treat that as a no too rather than guessing.
            </NoteField>
          </div>
        </div>
      </SectionAnchor>

      <SectionAnchor id="ask" tag="Questions" title="Ask us about any of this.">
        <Contacts items={[["Privacy and cookies", EMAILS.general]]} />
        <div className="mt-12 max-w-[62ch] mx-auto">
          <Footnote updated="13 October 2026">
            Your choice is stored in this browser only. We do not keep a record
            of it on our side.
          </Footnote>
        </div>
      </SectionAnchor>

      <Closer
        tone="ink"
        note="Ivish AI Quantum Pvt Ltd"
        actions={[
          <Action key="p" href="/privacypolicy">Privacy policy</Action>,
          <Ghost key="h" to="/">Home</Ghost>,
        ]}
      >
        A choice we ignore is not a choice.
      </Closer>

      <Footer />
    </div>
  );
};

export default CookiesPreference;
