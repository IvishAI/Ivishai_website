import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Masthead, Closer, LegalDoc, Clause, PageIndex, TwoUp, Footnote,
  Action, Ghost,
} from "../../components/iv";
import { EMAILS, BRAND } from "../../data/site";

/* Privacy policy.
 *
 * Presentation only. The policy text below is exactly as it was - see the note
 * in the rebuild script about NeuraVision and biometric data, both of which
 * are the owner's to decide on, not mine to quietly edit.
 */

const slug = (t) =>
  t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const lines = (text) => (Array.isArray(text) ? text : [text]);

const PrivacyPolicy = () => (
  <div className="iv min-h-screen text-ink">
    <Header />

    <Masthead
      tag="Legal"
      tone="sky"
      title="Privacy policy"
      lede="What we collect, why we collect it, and what we will never do with it."
      actions={[
        <Action key="t" href="/terms">Terms &amp; conditions</Action>,
        <Ghost key="c" href={`mailto:${EMAILS.general}`}>Ask a question</Ghost>,
      ]}
    />

    <section className="band">
      <div className="wrap">
        <TwoUp
          aside={
            <PageIndex
              items={sections.map((sec) => ({
                id: slug(sec.title),
                label: sec.title,
              }))}
            />
          }
        >
          <LegalDoc>
            {sections.map((sec, n) => (
              <div key={sec.title} id={slug(sec.title)} className="scroll-mt-28">
                <Clause n={String(n + 1).padStart(2, "0")} title={sec.title}>
                  {sec.content.map((block, bi) => (
                    <React.Fragment key={bi}>
                      {block.text &&
                        lines(block.text).map((line, li) => <p key={li}>{line}</p>)}
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
              {BRAND.legal}. Privacy questions go to {EMAILS.general}.
            </Footnote>
          </LegalDoc>
        </TwoUp>
      </div>
    </section>

    <Closer
      tone="ink"
      note={BRAND.legal}
      actions={[
        <Action key="t" href="/terms">Terms &amp; conditions</Action>,
        <Ghost key="h" to="/">Home</Ghost>,
      ]}
    >
      We collect what we need and nothing we cannot explain.
    </Closer>

    <Footer />
  </div>
);

export default PrivacyPolicy;

const sections = [
  {
    title: "Introduction",
    content: [
      {
        text: `IvishAI Quantum Pvt. Ltd. ("IvishAI","we","us", or"our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal and biometric data when you use our website, mobile apps, devices (NeuraVision), APIs, and services (VerbX AI).`,
      },
    ],
  },
  {
    title: "Data We Collect",
    content: [
      {
        subtitle: "a. Personal Information",
        text: [
          "Name, email, phone number",
          "Location (optional)",
          "Account preferences",
          "Payment information (if applicable)",
        ],
      },
      {
        subtitle: "b. Biometric & Sensor Data",
        text: [
          "Facial recognition data",
          "Gesture patterns",
          "Voice, speech, or sign language input",
          "Emotion or context-based data",
          "This data is securely encrypted and processed only for functionality, personalization, or accessibility purposes.",
        ],
      },
      {
        subtitle: "c. Usage Data",
        text: [
          "Device type, IP address, browser, time zone",
          "Pages visited, interactions, features used",
        ],
      },
      {
        subtitle: "d. Cookies & Tracking",
        text: [
          "We use cookies for analytics, performance, and personalization. You can control this via browser settings.",
        ],
      },
    ],
  },
  {
    title: "How We Use Your Data",
    content: [
      {
        text: [
          "Provide and improve our products and services",
          "Personalize user experience (via AI/ML)",
          "Deliver real-time translation and accessibility features",
          "Communicate with you",
          "Fulfill legal obligations",
          "Enhance safety and security",
        ],
      },
    ],
  },
  {
    title: "Data Sharing & Disclosure",
    content: [
      {
        text: [
          "Research partners (anonymized, for accessibility R&D)",
          "Cloud providers (e.g., AWS India)",
          "Authorized third-party vendors (API partners, analytics tools)",
          "Government authorities, when legally required",
          "We do not sell your personal data for advertising without your explicit consent.",
        ],
      },
    ],
  },
  {
    title: "International Data Transfers",
    content: [
      {
        text: [
          "For users in the EU/EEA, UK, and USA, data may be processed in India and stored on AWS infrastructure.",
          "We follow GDPR, DPDP (India), and CCPA compliance standards, including: Data minimization, User consent, Right to access, delete, or correct data.",
        ],
      },
    ],
  },
  {
    title: "Children's Privacy (Users under 18)",
    content: [
      {
        text: `If you are under 18, you must have parental or guardian consent to use our services. We do not knowingly collect data from minors without such consent.`,
      },
    ],
  },
  {
    title: "Your Rights",
    content: [
      {
        text: [
          "Request access to your data",
          "Correct inaccurate or outdated info",
          "Delete your account/data",
          "Withdraw consent at any time",
          "Lodge a complaint with a data protection authority",
          "To exercise these rights, email: ivishai.supprt@gmail.com",
        ],
      },
    ],
  },
  {
    title: "Data Security",
    content: [
      {
        text: [
          "AES-256 encryption",
          "SSL/TLS for data in transit",
          "Secure access controls",
          "Regular audits & penetration testing",
        ],
      },
    ],
  },
  {
    title: "Data Retention",
    content: [
      {
        text: `We retain personal and biometric data only as long as required for service provision, legal, or regulatory purposes.`,
      },
    ],
  },
  {
    title: "Contact Us",
    content: [
      {
        text: `For any privacy concerns or requests, reach us at: ivishai.supprt@gmail.com`,
      },
    ],
  },
];


