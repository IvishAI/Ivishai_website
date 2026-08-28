import SeraShell from '../../components/sera/SeraShell'
import useSEO from '../../lib/useSEO'

const SECTIONS = [
  {
    title: 'Information Collection and Use',
    intro: 'SERA collects only the information needed to provide its shop management features - billing, inventory, customer ledger, analytics, and AI assistance.',
    points: [
      'Account information: Your full name, mobile phone number, and a 4-digit PIN are collected to create and secure your account.',
      'Shop information: Shop name, business type, zone/category, and optional GST number are collected during onboarding to configure your shop.',
      'Business data: Billing records, product inventory, customer names and phone numbers, expense entries, and sales analytics are stored to power the app core features.',
      'Camera (CAMERA): Used exclusively for barcode scanning during billing. No images are captured or stored. Barcodes are processed in real time to look up product information only.',
      'Push notifications: A Firebase Cloud Messaging token is stored to deliver low-stock alerts, payment reminders, and app updates. You may disable notifications in your device settings at any time.',
      'Device information: Device model, OS version, app version, and crash diagnostics are collected to maintain app stability.',
    ],
  },
  {
    title: 'Third-Party Services and Data Sharing',
    intro: 'We use trusted third-party providers to operate SERA. These providers access only the data necessary to perform their function and are bound by confidentiality obligations.',
    points: [
      'Firebase (Google): Used for push notification delivery. Your FCM token is shared with Firebase for this purpose.',
      'Railway: Cloud infrastructure and hosting provider where SERA backend servers run.',
      'MongoDB / PostgreSQL: Database services where your shop and business data are stored securely.',
      'OpenAI: Powers the SERA AI assistant. Anonymised queries may be sent to OpenAI to generate business insights. No personally identifiable data is shared.',
      'We do not sell, rent, or trade your personal or business data to any third party for commercial purposes.',
    ],
  },
  {
    title: 'Data Security',
    intro: 'We take data security seriously and apply the following protections:',
    points: [
      'All data is encrypted in transit using HTTPS/TLS.',
      'PINs are hashed and never stored in plain text.',
      'Access to backend systems is controlled, authenticated, and logged.',
      'Each shop data is strictly isolated - shop owners can only access their own data.',
      'Regular security reviews are conducted to identify and address vulnerabilities.',
    ],
  },
  {
    title: 'Data Retention',
    intro: null,
    points: [
      'Account and shop data: Retained for the lifetime of your account.',
      'Billing and transaction records: Retained as needed for your business records.',
      'Crash logs and diagnostics: Automatically deleted after 30 days.',
      'Deleted accounts: All associated data is permanently removed within 30 days of an account deletion request.',
      'You may request deletion of your data at any time by contacting us.',
    ],
  },
  {
    title: 'Your Rights',
    intro: 'Depending on your region, you have the following rights regarding your data:',
    points: [
      'Access: Request a copy of the data we hold about you and your shop.',
      'Correction: Update inaccurate or incomplete information through the app settings screen.',
      'Deletion: Request permanent deletion of your account and all associated data.',
      'Portability: Request an export of your business data in a readable format.',
      'Withdraw consent: Stop using the app and request data removal at any time.',
      'To exercise any of these rights, contact us at ivishaiteam@gmail.com.',
    ],
  },
  {
    title: "Children's Privacy",
    intro: null,
    points: [
      'SERA is designed for adults operating retail businesses and is not intended for individuals under the age of 18.',
      'We do not knowingly collect personal data from minors.',
      'If you believe a minor has registered an account, please contact us immediately and we will remove the data.',
    ],
  },
  {
    title: 'Changes to This Policy',
    intro: null,
    points: [
      'We may update this Privacy Policy from time to time to reflect changes in our app or applicable legal requirements.',
      'The effective date at the top of this page will be updated whenever changes are made.',
      'For significant changes, we will notify you via in-app notification or push notification.',
      'Continued use of SERA after an update constitutes your acceptance of the revised policy.',
    ],
  },
]

const CSS = `
.pp-page {
  --s-navy: #000000;
  --s-orange: #FF6B2B;
  --s-orange-d: #E04F10;
  --s-paper: #FBFAF8;
  --s-paper-dim: #F3F0EA;
  --s-surface: #FFFFFF;
  --s-ink: #14151A;
  --s-ink-s: #55565F;
  --s-ink-f: #8B8C94;
  --s-line: #E7E2D9;
  --fd: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --fm: 'SF Mono', ui-monospace, monospace;
  background: var(--s-paper);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
}
.pp-page *, .pp-page *::before, .pp-page *::after { box-sizing: border-box; margin: 0; padding: 0; }

.pp-hero {
  background: var(--s-navy); color: #fff;
  padding: 140px 0 72px;
}
.pp-wrap { max-width: 800px; margin: 0 auto; padding: 0 24px; }
.pp-wrap-wide { max-width: 1000px; margin: 0 auto; padding: 0 24px; }
.pp-eye { font-family: var(--fm); font-size: 11px; letter-spacing: .16em; text-transform: uppercase; color: rgba(255,255,255,.5); display: block; margin-bottom: 16px; }
.pp-h1 { font-family: var(--fd); font-weight: 700; font-size: clamp(2rem,5vw,3.4rem); letter-spacing: -.04em; line-height: 1.05; color: #fff; }
.pp-meta { margin-top: 20px; display: flex; flex-wrap: wrap; gap: 20px; }
.pp-meta-item { font-size: .82rem; color: rgba(255,255,255,.55); }
.pp-meta-item span { color: rgba(255,255,255,.85); font-weight: 500; }

.pp-intro {
  background: var(--s-orange-d); color: #fff;
  padding: 32px 0;
}
.pp-intro p { font-size: 1rem; line-height: 1.65; color: rgba(255,255,255,.88); }

.pp-body { padding: 72px 0 96px; }
.pp-sections { display: flex; flex-direction: column; gap: 0; }
.pp-section { padding: 40px 0; border-top: 1px solid var(--s-line); display: grid; grid-template-columns: 200px 1fr; gap: 40px; }
.pp-sections .pp-section:last-child { border-bottom: 1px solid var(--s-line); }
.pp-sec-num { font-family: var(--fm); font-size: .75rem; color: var(--s-ink-f); padding-top: 4px; }
.pp-sec-title { font-family: var(--fd); font-weight: 650; font-size: 1.1rem; letter-spacing: -.02em; color: var(--s-ink); line-height: 1.2; }
.pp-sec-intro { font-size: .92rem; color: var(--s-ink-s); line-height: 1.65; margin-top: 10px; }
.pp-sec-points { list-style: none; margin-top: 14px; display: flex; flex-direction: column; gap: 10px; }
.pp-sec-points li { display: flex; align-items: flex-start; gap: 10px; font-size: .88rem; color: var(--s-ink-s); line-height: 1.6; }
.pp-sec-points li::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--s-orange); flex-shrink: 0; margin-top: 7px; }

.pp-contact {
  background: var(--s-navy); color: #fff;
  border-radius: 28px; padding: 56px 48px;
  margin: 0 24px 72px;
  position: relative; overflow: hidden;
}
.pp-contact::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 20% 50%, rgba(255,107,43,.2), transparent 60%); }
.pp-contact > * { position: relative; }
.pp-contact-eye { font-family: var(--fm); font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: rgba(255,255,255,.45); display: block; margin-bottom: 12px; }
.pp-contact-title { font-family: var(--fd); font-weight: 650; font-size: 1.5rem; letter-spacing: -.03em; color: #fff; }
.pp-contact-body { margin-top: 14px; font-size: .95rem; color: rgba(255,255,255,.7); line-height: 1.65; }
.pp-contact a { color: var(--s-orange); text-decoration: none; border-bottom: 1px solid rgba(255,107,43,.4); }
.pp-contact a:hover { border-color: var(--s-orange); }

@media (max-width: 720px) {
  .pp-hero { padding-top: 110px; padding-bottom: 56px; }
  .pp-section { grid-template-columns: 1fr; gap: 12px; padding: 28px 0; }
  .pp-contact { padding: 36px 24px; margin: 0 0 56px; border-radius: 20px; }
}
`

export default function SeraPrivacyPolicy() {
  useSEO(
    'Privacy Policy - Sera by IvishAI',
    'Privacy Policy for Sera, the free shop management app by IvishAI Quantum Private Limited.',
  )
  return (
    <SeraShell>
      <style>{CSS}</style>
      <div className="pp-page">

        {/* Hero */}
        <div className="pp-hero">
          <div className="pp-wrap">
            <span className="pp-eye">Legal · IvishAI Quantum Private Limited</span>
            <h1 className="pp-h1">Privacy Policy</h1>
            <div className="pp-meta">
              <div className="pp-meta-item">Effective date <span>August 6, 2026</span></div>
              <div className="pp-meta-item">Product <span>Sera - Shop Management App</span></div>
              <div className="pp-meta-item">Company <span>IvishAI Quantum Pvt Ltd</span></div>
            </div>
          </div>
        </div>

        {/* Intro strip */}
        <div className="pp-intro">
          <div className="pp-wrap">
            <p>This Privacy Policy explains how Sera collects, uses, and protects information when you use the Sera mobile application. By creating an account and using Sera, you agree to this policy.</p>
          </div>
        </div>

        {/* Sections */}
        <div className="pp-body">
          <div className="pp-wrap-wide">
            <div className="pp-sections">
              {SECTIONS.map((s, i) => (
                <div key={s.title} className="pp-section">
                  <div>
                    <div className="pp-sec-num">{String(i + 1).padStart(2, '0')}</div>
                    <div className="pp-sec-title">{s.title}</div>
                  </div>
                  <div>
                    {s.intro && <p className="pp-sec-intro">{s.intro}</p>}
                    <ul className="pp-sec-points">
                      {s.points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div className="pp-contact">
            <span className="pp-contact-eye">Get in touch</span>
            <div className="pp-contact-title">Questions about your data?</div>
            <p className="pp-contact-body">
              For privacy inquiries, email us at{' '}
              <a href="mailto:ivishaiteam@gmail.com">ivishaiteam@gmail.com</a>
              <br />
              IvishAI Quantum Private Limited, Hyderabad, Telangana, India
            </p>
          </div>
        </div>

      </div>
    </SeraShell>
  )
}
