import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useSEO from "../lib/useSEO";
import {
  Masthead, SectionAnchor, Closer, Profile, CapsuleRow, LinkOut, NoteField,
  Action, Ghost, Footnote,
} from "../components/iv";
import { EMAILS, BRAND } from "../data/site";

/* Credits - who built this site.
 *
 * The footer calls this "Credits" and it was laid out as two personal
 * portfolios, with skill lists (Figma, Sketch, Adobe XD, TensorFlow, Kubernetes)
 * that read as CVs rather than as credit for the work.
 *
 * Credit is worth giving, so it stays - but as credit: who did what, and where
 * to find them. The skills are kept as a short line each rather than a wall,
 * because nobody reads a company site to learn that a designer uses Figma.
 */

const PEOPLE = [
  {
    name: "Ankith M",
    role: "Co-founder & CTO - engineering",
    photo: "/team/ankith.png",
    did: "Built this site, and the frontend, backend, cloud infrastructure and agentic AI systems behind VerbX and Sera.",
    stack: ["React", "Node.js", "Python", "AWS", "PostgreSQL", "Docker"],
    links: [
      ["GitHub", "https://github.com/Ankith-m1006"],
      ["Portfolio", "https://portfolio-9niq35yan-ankith-ms-projects-8b28c506.vercel.app/"],
      ["Book time", "https://calendly.com/ankithm113"],
    ],
  },
  {
    name: "Ashutosh",
    role: "Product and interface design",
    did: "Interface and product design across the IvishAI surfaces.",
    stack: ["Figma", "Prototyping", "User research", "Interaction design"],
    links: [["Portfolio", "https://ashutoshdesigns.framer.website/"]],
  },
];

const Developerpage = () => {
  useSEO("Credits - IvishAI", "Who built this site.");

  return (
    <div className="iv min-h-screen text-ink">
      <Header />

      <Masthead
        tag="Credits"
        tone="mint"
        title="Who built this."
        lede="A company site is made by people. These are the ones who made this one."
        actions={[
          <Action key="a" href="/about">The founding team</Action>,
          <Ghost key="c" to="/careers">Work with us</Ghost>,
        ]}
      />

      <SectionAnchor id="people" tag="The build" title="Hands on it.">
        <div className="space-y-14 max-w-3xl mx-auto text-left">
          {PEOPLE.map((p, i) => (
            <div key={p.name}>
              <Profile
                delay={i * 0.06}
                photo={p.photo}
                name={p.name}
                role={p.role}
                tone={i % 2 ? "mint" : "lilac"}
                links={p.links.map(([label, href]) => (
                  <LinkOut key={href} href={href}>{label}</LinkOut>
                ))}
              >
                {p.did}
              </Profile>
              <div className="mt-5 sm:pl-[12.5rem]">
                <CapsuleRow items={p.stack} />
              </div>
            </div>
          ))}
        </div>
      </SectionAnchor>

      <SectionAnchor id="how" tag="How it is built" title="The short version.">
        <div className="max-w-[62ch] mx-auto text-left">
          <NoteField tone="stone" tag="This site">
            React on Vercel, one element library, no component framework. Every
            figure on it reads from a single data file, so no two pages can
            disagree about how many languages we ship.
          </NoteField>
        </div>

        <div className="mt-12 max-w-[62ch] mx-auto">
          <Footnote updated="13 October 2026">
            Spotted something wrong on this site? {EMAILS.general}.
          </Footnote>
        </div>
      </SectionAnchor>

      <Closer
        tone="ink"
        note={BRAND.legal}
        actions={[
          <Action key="a" href="/about">About the company</Action>,
          <Ghost key="h" to="/">Home</Ghost>,
        ]}
      >
        Built by a small team, on purpose.
      </Closer>

      <Footer />
    </div>
  );
};

export default Developerpage;
