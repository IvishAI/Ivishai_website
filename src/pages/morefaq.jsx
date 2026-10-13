import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useSEO from "../lib/useSEO";
import {
  Masthead, SectionAnchor, Closer, Questions, PageIndex, TwoUp,
  Action, Ghost, Footnote,
} from "../components/iv";
import { EMAILS } from "../data/site";

/* The longer FAQ.
 *
 * The questions are unchanged. They used to render as one continuous list with
 * `{ section: "..." }` markers styled as coloured rows between them, which
 * meant the sections were a visual hint rather than a structure - you could not
 * link to one, and on a phone you could not tell where one ended.
 *
 * They are real sections now, with an index down the side.
 */

const FAQ_ITEMS = [
    // SECTION 1
    { section: "GENERAL QUESTIONS" },
    {
      q: "What is VerbX?",
      a: "VerbX is a real-time language companion that helps you communicate across languages effortlessly using voice, text, and visual tools.",
    },
    {
      q: "Who created VerbX?",
      a: "VerbX is developed by Ivish AI, a company focused on safe, trustworthy, and privacy-first communication technology.",
    },
    {
      q: "Is VerbX a translation app?",
      a: "VerbX is more than translation — it enables clarity, tone-awareness, and real-time language support.",
    },
    {
      q: "Which platforms support VerbX?",
      a: "VerbX is available on Android. iOS and Web versions are coming soon.",
    },
    {
      q: "Who can use VerbX?",
      a: "Travelers, students, families, professionals, teachers, global teams, and anyone communicating across languages.",
    },
    {
      q: "What languages does VerbX support?",
      a: "VerbX supports global and Indian languages, with continuous expansion.",
    },
    {
      q: "Do I need an account to use VerbX?",
      a: "Basic features work without login. Signing in unlocks personalization and saved phrasebooks.",
    },
    {
      q: "Is VerbX free to use?",
      a: "VerbX offers free essential features, with premium features available by subscription.",
    },

    // SECTION 2
    { section: "FEATURES & HOW THEY WORK" },
    {
      q: "How does real-time voice conversation work?",
      a: "You speak → VerbX converts → the listener reads/hears it in their language instantly.",
    },
    {
      q: "Can VerbX work offline?",
      a: "Yes. You can download offline packs for essential language features.",
    },
    {
      q: "What is the Phrasebook?",
      a: "Your personal library of manually saved phrases for quick access.",
    },
    {
      q: "Does VerbX support camera scanning?",
      a: "Yes — scan menus, documents, signs, handwriting for instant output.",
    },
    {
      q: "Does VerbX understand tone/emotion?",
      a: "Yes — VerbX detects tone without altering meaning.",
    },
    {
      q: "What is the “Hey Ivish” wakeword?",
      a: "A hands-free activation method for VerbX assistance.",
    },
    {
      q: "Can VerbX help in phone calls?",
      a: "VerbX provides live captions or in-person conversation support (device-based).",
    },
    {
      q: "Is VerbX useful for learning languages?",
      a: "Yes — with real-time examples, pronunciation aids, and corrections.",
    },

    // SECTION 3
    { section: "PRIVACY & SAFETY" },
    {
      q: "Does VerbX store my conversations?",
      a: (
        <ul className="list-disc pl-6">
          <li>No — unless you save something manually.</li>
          <li>Everything else auto-deletes within minutes.</li>
        </ul>
      ),
    },
    {
      q: "What is zero-storage?",
      a: "VerbX does not save your text, voice, or camera data by default.",
    },
    {
      q: "Is my data safe?",
      a: "Yes — VerbX uses encryption and strict privacy rules.",
    },
    {
      q: "Who can access my data?",
      a: "Only you. Not even Ivish AI can view your conversations.",
    },
    {
      q: "How does VerbX ensure accuracy?",
      a: "By prioritizing clarity, safety, and faithful meaning preservation.",
    },
    {
      q: "Can children use VerbX?",
      a: "VerbX is safe for general audiences but not designed for users under 13.",
    },
    {
      q: "Does VerbX share my data?",
      a: (
        <ul className="list-disc pl-6">
          <li>Only minimum required for functionality.</li>
          <li>No data is sold.</li>
        </ul>
      ),
    },
    {
      q: "How do I delete my account or data?",
      a: "Email ivishai.supprt@gmail.com from your registered address.",
    },

    // SECTION 4
    { section: "SUBSCRIPTIONS & BILLING" },
    {
      q: "How do subscriptions work?",
      a: "Premium features are available via monthly or yearly plans.",
    },
    {
      q: "What payment methods are supported?",
      a: "Payments are securely handled through Google Play or approved gateways.",
    },
    {
      q: "Can I cancel my subscription?",
      a: "Yes — anytime via Google Play settings.",
    },
    {
      q: "What happens after cancellation?",
      a: "You retain premium access until the billing cycle ends.",
    },

    // SECTION 5
    { section: "OFFLINE MODE" },
    {
      q: "What can I do offline?",
      a: (
        <ul className="list-disc pl-6">
          <li>Use downloaded language packs</li>
          <li>Access saved phrases</li>
          <li>Basic features depending on device support</li>
        </ul>
      ),
    },
    {
      q: "Does offline mode store my data?",
      a: "No — zero-storage rules still apply.",
    },

    // SECTION 6
    { section: "COMPANION DEVICE" },
    {
      q: "What is the VerbX Companion?",
      a: "A wearable device designed for hands-free communication.",
    },
    {
      q: "Does the device store data?",
      a: "No — it follows the same zero-storage principle.",
    },
    {
      q: "How does it connect?",
      a: "Via Bluetooth or similar wireless protocols.",
    },

    // SECTION 7
    { section: "ENTERPRISE, GOVERNMENT & EDUCATION" },
    {
      q: "Do you offer enterprise solutions?",
      a: "Yes — tailored versions for organizations and institutions.",
    },
    {
      q: "Can VerbX be used for official communication?",
      a: "Yes — includes a literal mode for high-accuracy needs.",
    },
    {
      q: "Do you support NGOs?",
      a: "Yes — Ivish AI supports accessibility and multicultural initiatives.",
    },

    // SECTION 8
    { section: "TROUBLESHOOTING" },
    {
      q: "Voice isn’t detected — what to do?",
      a: "Check mic permissions, restart app, or close background apps.",
    },
    {
      q: "Camera text is unclear — fix?",
      a: "Ensure lighting, steady your phone, and center the text.",
    },
    {
      q: "App is slow — solution?",
      a: "Restart app and check network or updates.",
    },
    { q: "Found a bug?", a: "Email ivishai.supprt@gmail.com with details." },
  ];

/* The flat list carries `{ section }` markers between groups. Fold it into
   actual groups so each one can be a section with an id. */
const GROUPS = FAQ_ITEMS.reduce((acc, item) => {
  if (item.section) {
    acc.push({ title: item.section, items: [] });
  } else if (acc.length) {
    acc[acc.length - 1].items.push({ q: item.q, a: item.a });
  }
  return acc;
}, []);

const slug = (t) =>
  t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const MoreFAQ = () => {
  useSEO(
    "Frequently asked questions - IvishAI",
    "Questions about IvishAI, VerbX and Sera, answered.",
  );

  return (
    <div className="iv min-h-screen text-ink">
      <Header />

      <Masthead
        tag="Questions"
        tone="lilac"
        title="Asked often enough to write down."
        lede="Everything we get asked about the company and the two products. If yours is not here, write to us and it probably will be."
        actions={[
          <Action key="c" href={`mailto:${EMAILS.general}`}>Ask us something</Action>,
          <Ghost key="p" href="/products">See what we build</Ghost>,
        ]}
      />

      <section className="band">
        <div className="wrap">
          <TwoUp
            aside={
              <PageIndex
                items={GROUPS.map((g) => ({ id: slug(g.title), label: g.title }))}
              />
            }
          >
            <div className="space-y-16">
              {GROUPS.map((g) => (
                <div key={g.title} id={slug(g.title)} className="scroll-mt-28">
                  <p className="tag mb-5">{g.title}</p>
                  <Questions items={g.items} />
                </div>
              ))}
            </div>
          </TwoUp>
        </div>
      </section>

      <SectionAnchor id="ask" tag="Not answered" title="Then ask us.">
        <p className="body-s max-w-[52ch] mx-auto">
          There is no form here. The address below reaches a person, and a good
          question usually ends up on this page.
        </p>
        <div className="mt-9 flex justify-center">
          <Action href={`mailto:${EMAILS.general}`}>Ask us something</Action>
        </div>
        <div className="mt-12 max-w-[62ch] mx-auto">
          <Footnote updated="13 October 2026">
            40 questions across 8 sections.
          </Footnote>
        </div>
      </SectionAnchor>

      <Closer
        tone="ink"
        glyph="&#2309;"
        lang="hi"
        note={`Questions \u00b7 ${EMAILS.general}`}
        actions={[
          <Action key="p" href="/products">See what we build</Action>,
          <Ghost key="a" to="/about">About the company</Ghost>,
        ]}
      >
        If it gets asked twice, it belongs here.
      </Closer>

      <Footer />
    </div>
  );
};

export default MoreFAQ;
