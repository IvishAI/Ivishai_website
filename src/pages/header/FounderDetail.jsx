import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useSEO from "../../lib/useSEO";
import {
  Masthead, SectionAnchor, Closer, Portrait, QuoteField, Prose, Crumb,
  LinkOut, Action, Ghost, PersonRow,
} from "../../components/iv";
import { getFounder, FOUNDERS, EMAILS } from "../../data/site";

/* One founder.
 *
 * The strongest thing on a company site is a person saying something in their
 * own words, and this page already had it - personalNote was sitting here as a
 * grey block below the fold. It leads now.
 *
 * An unknown slug still redirects to /about rather than 404ing, which is right:
 * the team list is the useful destination.
 */

const FounderDetail = () => {
  const { slug } = useParams();
  const f = getFounder(slug);

  useSEO(
    f ? `${f.name} - ${f.role} at IvishAI` : "IvishAI",
    f ? f.card : "The people behind IvishAI.",
  );

  if (!f) return <Navigate to="/about" replace />;

  const others = FOUNDERS.filter((x) => x.slug !== f.slug);

  return (
    <div className="iv min-h-screen text-ink">
      <Header />

      <Masthead
        tag={f.role}
        tone="lilac"
        title={f.name}
        lede={f.card}
        actions={[
          f.linkedin ? (
            <Action key="li" href={f.linkedin}>LinkedIn</Action>
          ) : (
            <Action key="c" href={`mailto:${EMAILS.general}`}>Get in touch</Action>
          ),
          <Ghost key="a" to="/about">The whole team</Ghost>,
        ]}
      />

      <section className="band">
        <div className="wrap">
          <div className="flex justify-center mb-8">
            <Crumb
              items={[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: f.name },
              ]}
            />
          </div>

          <div className="flex justify-center">
            {f.photo && (
              <Portrait src={f.photo} name={f.name} className="w-56 h-56 rounded-2xl" />
            )}
          </div>
        </div>
      </section>

      {f.personalNote && (
        <section className="band">
          <div className="wrap">
            <div className="iv-wide">
              <QuoteField tone="lilac" who={f.name} where={f.role}>
                {f.personalNote}
              </QuoteField>
            </div>
          </div>
        </section>
      )}

      {f.about && (
        <SectionAnchor id="about" tag="Background" title={`About ${f.name.split(" ")[0]}`}>
          <Prose>
            {String(f.about)
              .split(/\n{2,}/)
              .map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
          </Prose>
          {f.linkedin && (
            <p className="mt-8">
              <LinkOut href={f.linkedin}>{f.name} on LinkedIn</LinkOut>
            </p>
          )}
        </SectionAnchor>
      )}

      {others.length > 0 && (
        <SectionAnchor id="others" tag="The rest of the team" title="Who else builds this.">
          <div className="max-w-2xl mx-auto text-left">
            {others.map((o, i) => (
              <PersonRow
                key={o.slug}
                delay={i * 0.06}
                photo={o.photo}
                name={o.name}
                role={o.role}
                links={
                  o.linkedin ? [<LinkOut key="li" href={o.linkedin}>LinkedIn</LinkOut>] : null
                }
              >
                {o.card}
              </PersonRow>
            ))}
          </div>
        </SectionAnchor>
      )}

      <Closer
        tone="ink"
        note="Ivish AI Quantum Pvt Ltd"
        actions={[
          <Action key="a" href="/about">About the company</Action>,
          <Ghost key="c" to="/careers">Work with us</Ghost>,
        ]}
      >
        A company is the people who turn up to build it.
      </Closer>

      <Footer />
    </div>
  );
};

export default FounderDetail;
