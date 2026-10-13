import React from "react";
import SeraShell from "../../components/sera/SeraShell";
import useSEO from "../../lib/useSEO";
import {
  Masthead, Closer, LegalDoc, Clause, PageIndex, TwoUp, Footnote,
  Action, Ghost,
} from "../../components/iv";
import { SERA } from "../../data/sera";

/* Sera's own privacy policy.
 *
 * Presentation only - the policy text below is untouched. It keeps Sera's own
 * shell, because it is the product's policy rather than the company's.
 */

const SECTIONS = [
  {
    title: "Information Collection and Use",
    intro:
      "SERA collects only the information needed to provide its shop management features - billing, inventory, customer ledger, analytics, and AI assistance.",
    points: [
      "Account information: Your full name, mobile phone number, and a 4-digit PIN are collected to create and secure your account.",
      "Shop information: Shop name, business type, zone/category, and optional GST number are collected during onboarding to configure your shop.",
      "Business data: Billing records, product inventory, customer names and phone numbers, expense entries, and sales analytics are stored to power the app core features.",
      "Camera (CAMERA): Used exclusively for barcode scanning during billing. No images are captured or stored. Barcodes are processed in real time to look up product information only.",
      "Push notifications: A Firebase Cloud Messaging token is stored to deliver low-stock alerts, payment reminders, and app updates. You may disable notifications in your device settings at any time.",
      "Device information: Device model, OS version, app version, and crash diagnostics are collected to maintain app stability.",
    ],
  },
  {
    title: "Third-Party Services and Data Sharing",
    intro:
      "We use trusted third-party providers to operate SERA. These providers access only the data necessary to perform their function and are bound by confidentiality obligations.",
    points: [
      "Firebase (Google): Used for push notification delivery. Your FCM token is shared with Firebase for this purpose.",
      "Railway: Cloud infrastructure and hosting provider where SERA backend servers run.",
      "MongoDB / PostgreSQL: Database services where your shop and business data are stored securely.",
      "OpenAI: Powers the SERA AI assistant. Anonymised queries may be sent to OpenAI to generate business insights. No personally identifiable data is shared.",
      "We do not sell, rent, or trade your personal or business data to any third party for commercial purposes.",
    ],
  },
  {
    title: "Data Security",
    intro:
      "We take data security seriously and apply the following protections:",
    points: [
      "All data is encrypted in transit using HTTPS/TLS.",
      "PINs are hashed and never stored in plain text.",
      "Access to backend systems is controlled, authenticated, and logged.",
      "Each shop data is strictly isolated - shop owners can only access their own data.",
      "Regular security reviews are conducted to identify and address vulnerabilities.",
    ],
  },
  {
    title: "Data Retention",
    intro: null,
    points: [
      "Account and shop data: Retained for the lifetime of your account.",
      "Billing and transaction records: Retained as needed for your business records.",
      "Crash logs and diagnostics: Automatically deleted after 30 days.",
      "Deleted accounts: All associated data is permanently removed within 30 days of an account deletion request.",
      "You may request deletion of your data at any time by contacting us.",
    ],
  },
  {
    title: "Your Rights",
    intro:
      "Depending on your region, you have the following rights regarding your data:",
    points: [
      "Access: Request a copy of the data we hold about you and your shop.",
      "Correction: Update inaccurate or incomplete information through the app settings screen.",
      "Deletion: Request permanent deletion of your account and all associated data.",
      "Portability: Request an export of your business data in a readable format.",
      "Withdraw consent: Stop using the app and request data removal at any time.",
      "To exercise any of these rights, contact us at ivishaiteam@gmail.com.",
    ],
  },
  {
    title: "Children's Privacy",
    intro: null,
    points: [
      "SERA is designed for adults operating retail businesses and is not intended for individuals under the age of 18.",
      "We do not knowingly collect personal data from minors.",
      "If you believe a minor has registered an account, please contact us immediately and we will remove the data.",
    ],
  },
  {
    title: "Changes to This Policy",
    intro: null,
    points: [
      "We may update this Privacy Policy from time to time to reflect changes in our app or applicable legal requirements.",
      "The effective date at the top of this page will be updated whenever changes are made.",
      "For significant changes, we will notify you via in-app notification or push notification.",
      "Continued use of SERA after an update constitutes your acceptance of the revised policy.",
    ],
  },
];

const slug = (t) =>
  t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function SeraPrivacyPolicy() {
  useSEO(
    "Sera - privacy policy",
    "What Sera collects, why, and what it never does with it.",
  );

  return (
    <SeraShell>
      <div className="iv text-ink">
        <Masthead
          tag="Sera"
          tone="ember"
          title="Privacy policy"
          lede="What the app collects to run your shop, and what it does not."
          actions={[
            <Action key="p" href={SERA.playStore}>Get Sera on Play</Action>,
            <Ghost key="c" href={`mailto:${SERA.contactEmail}`}>Ask a question</Ghost>,
          ]}
        />

        <section className="band">
          <div className="wrap">
            <TwoUp
              aside={
                <PageIndex
                  items={SECTIONS.map((sec) => ({
                    id: slug(sec.title),
                    label: sec.title,
                  }))}
                />
              }
            >
              <LegalDoc>
                {SECTIONS.map((sec, n) => (
                  <div key={sec.title} id={slug(sec.title)} className="scroll-mt-28">
                    <Clause n={String(n + 1).padStart(2, "0")} title={sec.title}>
                      {sec.intro && <p>{sec.intro}</p>}
                      {sec.points && (
                        <ul className="space-y-2 pl-1">
                          {sec.points.map((pt, k) => (
                            <li key={k} className="flex gap-3">
                              <span
                                aria-hidden="true"
                                className="mt-2.5 h-1 w-1 rounded-full bg-ember flex-shrink-0"
                              />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Clause>
                  </div>
                ))}

                <Footnote updated="13 October 2026">
                  Questions about this policy go to {SERA.contactEmail}.
                </Footnote>
              </LegalDoc>
            </TwoUp>
          </div>
        </section>

        <Closer
          tone="ink"
          note={SERA.category}
          actions={[
            <Action key="p" href={SERA.playStore}>Get Sera on Play</Action>,
            <Ghost key="s" to="/sera">Back to Sera</Ghost>,
          ]}
        >
          Your shop's data is your shop's.
        </Closer>
      </div>
    </SeraShell>
  );
}
