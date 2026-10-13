import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Masthead, Closer, LegalDoc, Clause, PageIndex, TwoUp, Footnote,
  Action, Ghost,
} from "../../components/iv";
import { EMAILS, BRAND } from "../../data/site";

/* Terms & Conditions.
 *
 * This file was routed at /security and titled "Terms & Conditions - Ivish AI",
 * so anyone clicking "Security" in search of a security page got terms of
 * service instead. It is served at /terms now, with /security redirecting, so
 * no existing link breaks.
 *
 * The termsSections data below is untouched. Eighteen sections of real legal
 * text is the last thing to retype for the sake of a layout, so only the
 * presentation changed: a measure you can read, numbered clauses, an index
 * down the side, and a date saying when this was last true.
 */

const slug = (t) =>
  t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const TermsOfUse = () => (
  <div className="iv min-h-screen text-ink">
    <Header />

    <Masthead
      tag="Legal"
      tone="stone"
      title="Terms & Conditions"
      lede="The terms that govern your use of the IvishAI website, our apps and the services behind them."
      actions={[
        <Action key="p" href="/privacypolicy">Privacy policy</Action>,
        <Ghost key="c" href={`mailto:${EMAILS.general}`}>Ask a question</Ghost>,
      ]}
    />

    <section className="band">
      <div className="wrap">
        <TwoUp
          aside={
            <PageIndex
              items={termsSections.map((sec) => ({
                id: slug(sec.title),
                label: sec.title,
              }))}
            />
          }
        >
          <LegalDoc>
            {termsSections.map((sec, n) => (
              <div key={sec.title} id={slug(sec.title)} className="scroll-mt-28">
                <Clause n={String(n + 1).padStart(2, "0")} title={sec.title}>
                  {sec.content.map((block, bi) => (
                    <React.Fragment key={bi}>
                      {(block.text || []).map((line, li) => (
                        <p key={li}>{line}</p>
                      ))}
                      {block.list && (
                        <ul className="space-y-2 pl-1">
                          {block.list.map((item, ii) => (
                            <li key={ii} className="flex gap-3">
                              <span
                                aria-hidden="true"
                                className="mt-2.5 h-1 w-1 rounded-full bg-ember flex-shrink-0"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </React.Fragment>
                  ))}
                </Clause>
              </div>
            ))}

            <Footnote updated="13 October 2026">
              {BRAND.legal}. Questions about these terms go to {EMAILS.general}.
            </Footnote>
          </LegalDoc>
        </TwoUp>
      </div>
    </section>

    <Closer
      tone="ink"
      note={BRAND.legal}
      actions={[
        <Action key="p" href="/privacypolicy">Privacy policy</Action>,
        <Ghost key="h" to="/">Home</Ghost>,
      ]}
    >
      Written to be read, not to be scrolled past.
    </Closer>

    <Footer />
  </div>
);

export default TermsOfUse;

const termsSections = [
  {
    title: "Introduction",
    content: [
      {
        text: [
          "Welcome to Ivish AI.",
          "These Terms & Conditions govern your use of the Ivish AI website, the VerbX mobile app, and all related services.",
          "By accessing or using our services, you agree to these Terms. If you do not agree, please stop using the service.",
        ],
      },
    ],
  },
  {
    title: "Definitions",
    content: [
      {
        text: [
          "“Company”, “We”, “Us” refers to Ivish AI (IvishAI Quantum Pvt. Ltd.).",
          "“VerbX” refers to the language companion app developed by Ivish AI.",
          "“User”, “You” refers to anyone using our services.",
          "“Services” refers to all features offered through VerbX and the Ivish AI website.",
        ],
      },
    ],
  },
  {
    title: "Eligibility",
    content: [
      {
        text: [
          "You must be at least 13 years old to use VerbX.",
          "If you are under the legal age of majority, you must use the service under parental supervision.",
          "VerbX is not intended for children under 13.",
        ],
      },
    ],
  },
  {
    title: "User Account",
    content: [
      {
        text: [
          "Some features require an account using Email or Google Sign-In.",
          "You agree to provide accurate information and keep credentials secure.",
          "We may suspend accounts involved in misuse or violations.",
        ],
      },
    ],
  },
  {
    title: "Acceptable Use",
    content: [
      {
        text: [
          "You agree NOT to use VerbX to break laws or harm others.",
          "Do not impersonate others, generate harmful content, reverse engineer the app, or misuse translations.",
          "Misuse may result in temporary or permanent restrictions.",
        ],
      },
    ],
  },
  {
    title: "Language Conversion Safety",
    content: [
      {
        text: [
          "VerbX aims for clarity and respect across languages.",
          "Automated output is not always perfect.",
          "Users remain responsible for interpretation, especially in legal, medical, or sensitive contexts.",
          "Do not rely on VerbX as a substitute for certified professionals.",
        ],
      },
    ],
  },
  {
    title: "Privacy & Data Handling",
    content: [
      {
        text: [
          "VerbX follows a zero-storage design by default—nothing is saved unless you manually add it to your phrasebook.",
          "Sensitive data is encrypted during transmission.",
          "We do not sell personal data.",
          "See our Privacy Policy for full details.",
        ],
      },
    ],
  },
  {
    title: "User-Generated Content",
    content: [
      {
        text: [
          "Users retain ownership of the content they type, upload, or save.",
          "You grant us permission to process content only to provide services.",
          "We may remove illegal or harmful content.",
        ],
      },
    ],
  },
  {
    title: "Subscription & Payments",
    content: [
      {
        text: [
          "Premium features may require payment.",
          "Payments are processed through Google Play, Apple App Store, or authorized gateways.",
          "We do not store card details.",
          "Subscriptions auto-renew unless cancelled.",
          "Refunds are issued only where legally required.",
        ],
      },
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      {
        text: [
          "All intellectual property related to Ivish AI and VerbX belongs to IvishAI Quantum Pvt. Ltd.",
          "You may not copy, reproduce, or distribute any part of our services without permission.",
        ],
      },
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      {
        text: [
          "VerbX may rely on third-party services (authentication, cloud systems, analytics).",
          "You agree to their terms where applicable.",
          "We are not responsible for third-party availability or behavior.",
        ],
      },
    ],
  },
  {
    title: "Service Availability",
    content: [
      {
        text: [
          "We aim to provide smooth service but do not guarantee uninterrupted access.",
          "Maintenance, updates, or outages may occur.",
          "Features may change or be discontinued at any time.",
        ],
      },
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      {
        text: [
          "Ivish AI is not liable for indirect, incidental, or consequential damages.",
          "We are not liable for misunderstandings, interruptions, or reliance on automated output.",
          "Total liability is limited to the amount paid for premium services in the past 12 months.",
        ],
      },
    ],
  },
  {
    title: "Indemnification",
    content: [
      {
        text: [
          "You agree to indemnify Ivish AI for claims arising from misuse, violations, or harmful actions.",
        ],
      },
    ],
  },
  {
    title: "Termination",
    content: [
      {
        text: [
          "We may suspend or terminate your account for violations, misuse, fraud, or harmful behavior.",
          "Users may delete their account anytime.",
        ],
      },
    ],
  },
  {
    title: "Changes to These Terms",
    content: [
      {
        text: [
          "We may update these Terms periodically.",
          "Changes will be reflected in the updated date and may be communicated in-app.",
          "Continued use implies acceptance.",
        ],
      },
    ],
  },
  {
    title: "Governing Law",
    content: [
      {
        text: [
          "These Terms are governed by Indian law with jurisdiction in Hyderabad, Telangana.",
        ],
      },
    ],
  },
  {
    title: "Contact Us",
    content: [
      {
        text: [
          "For inquiries email ivishai.supprt@gmail.com or call +91 7013440427.",
          "IvishAI Quantum Pvt. Ltd., Hyderabad, India.",
        ],
      },
    ],
  },
];
