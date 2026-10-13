import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Masthead, SectionAnchor, Closer, Profile, PartnerRow, CredentialStrip,
  NoteField, LinkOut, Timeline, PersonRow, StatPanel, Action, Ghost, TextLink,
} from "../../components/iv";
import {
  FOUNDERS,
  ADVISORS,
  TIMELINE,
  CREDENTIALS,
  TECH_PARTNERS,
  INSTITUTIONAL_SUPPORT,
} from "../../data/site";

/* Who we are.
 *
 * This page has the strongest material on the site - a dated timeline, real
 * founders with their own words, and credentials anyone can check - and it was
 * rendering all of it at half strength: every section centred in a ~700px
 * column inside a 1440px canvas, with the timeline, the credentials and the
 * institutional note all drawn as the same grey bar, and each founder reduced
 * to a card with two lines.
 *
 * Now the timeline is a timeline, the credentials are a record, and the
 * founders get their own words - which is the one thing a company page can say
 * that nobody else can copy.
 */

const About = () => (
  <div className="iv min-h-screen text-ink">
    <Header />

    <Masthead
      tag="Who we are"
      tone="lilac"
      title="An infrastructure company."
      lede="IvishAI builds operating systems for real-world industries - starting with communication (VerbX) and commerce (Sera), and extending toward the broader vision of Industry 6.0."
      actions={[
        <Action key="p" href="/products">See what we build</Action>,
        <Ghost key="c" to="/contact">Talk to us</Ghost>,
      ]}
    />

    <SectionAnchor
      id="journey"
      tag="Our journey"
      title="How we got here."
      lede="Dated milestones, in order. Nothing here is a projection."
    >
      <Timeline items={TIMELINE.map((t) => ({ when: t.when, what: t.what }))} />
    </SectionAnchor>

    <SectionAnchor
      id="people"
      tag="Founding team"
      title="The people behind IvishAI."
      lede="Three founders, in their own words."
    >
      <div className="space-y-14">
        {FOUNDERS.map((f, i) => (
          <Profile
            key={f.slug}
            delay={i * 0.06}
            photo={f.photo}
            name={f.name}
            role={f.role}
            tone={["lilac", "mint", "ember"][i % 3]}
            quote={f.personalNote}
            links={[
              <TextLink key="more" to={`/about/${f.slug}`}>Read more</TextLink>,
              f.linkedin ? <LinkOut key="li" href={f.linkedin}>LinkedIn</LinkOut> : null,
            ].filter(Boolean)}
          >
            {f.card}
          </Profile>
        ))}
      </div>
    </SectionAnchor>

    <SectionAnchor id="advisors" tag="Advisors and mentors" title="The people guiding us.">
      <div>
        {ADVISORS.map((a, i) => (
          <PersonRow
            key={a.name}
            delay={i * 0.06}
            photo={a.photo}
            name={a.name}
            role={a.role}
            links={a.linkedin ? [<LinkOut key="li" href={a.linkedin}>LinkedIn</LinkOut>] : null}
          >
            {a.credibility}
          </PersonRow>
        ))}
      </div>
    </SectionAnchor>

    <SectionAnchor
      id="record"
      tag="Company credentials"
      title="Recognised and registered."
      lede="Every one of these is checkable. We do not list anything here that we cannot show."
    >
      <div className="iv-wide"><CredentialStrip items={CREDENTIALS} /></div>

      <div className="mt-12">
        <StatPanel
          tone="plum"
          title="The record, in figures."
          note="From the company record. The patents page lists each filing and where it stands."
          stats={[
            ["2025", "Incorporated"],
            ["8", "Patents filed"],
            ["1", "Granted"],
            ["2", "Products live"],
          ]}
        />
      </div>

      <div className="mt-8">
        <NoteField tone="sky" tag="Institutional support">
          {INSTITUTIONAL_SUPPORT}
        </NoteField>
      </div>
    </SectionAnchor>

    <SectionAnchor
      id="partners"
      tag="Technology partners"
      title="The infrastructure we build on."
      lede="We run on other people's infrastructure where it is better than building our own, and we say which."
    >
      <div>
        {TECH_PARTNERS.map((p) => (
          <PartnerRow key={p.name} logo={p.logo} name={p.name} note={p.note} href={p.href} />
        ))}
      </div>
    </SectionAnchor>

    <Closer
      tone="ink"
      glyph="&#2309;"
      lang="hi"
      note="Ivish AI Quantum Pvt Ltd &middot; Hyderabad"
      actions={[
        <Action key="p" href="/products">See what we build</Action>,
        <Ghost key="j" to="/careers">Work with us</Ghost>,
      ]}
    >
      DPIIT-recognised, MSME-registered, with two products live.
    </Closer>

    <Footer />
  </div>
);

export default About;
