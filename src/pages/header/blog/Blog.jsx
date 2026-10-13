import React, { useMemo, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import useSEO from "../../../lib/useSEO";
import {
  Masthead, SectionAnchor, Closer, Lead, PostTile, PostGrid, PressRow,
  Topics, Subscribe, EmptyState, NoteField, Action, Ghost, Footnote,
} from "../../../components/iv";
import { EMAILS, BRAND } from "../../../data/site";

/* Writing and press.
 *
 * Two things were wrong here beyond the design:
 *
 * 1. The index listed three posts while six post pages existed. ai-healthcare,
 *    cloud-computing, cybersecurity-ai and deep-learning were orphaned -
 *    published and linked from nowhere. All six are listed.
 *
 * 2. Press coverage and our own posts were one list with a tag between them.
 *    An article someone else wrote about us is a different kind of thing, and
 *    the stronger of the two. They are separate sections.
 *
 * Every cover here is drawn from the brand - a tone and a script glyph, chosen
 * by a hash of the title so a post keeps its colour between visits. Nothing
 * waits on a photograph being found for it, and nothing is a stock image of a
 * robot hand.
 *
 * THE POSTS THEMSELVES are general AI writing, not about what we build. The
 * owner is replacing them; the page is built so that swapping the POSTS array
 * is the whole job.
 */

const PRESS = [
  {
    outlet: "Startup Times",
    when: "Feb 2025",
    title:
      "Breaking Barriers with Empathy: The Journey of Sahith Vutukuri and IvishAI Quantum",
    href: "https://startuptimes.net/breaking-barriers-with-empathy-the-journey-of-sahith-vutukuri-and-ivishai-quantum",
  },
];

const POSTS = [
  {
    to: "/ai-transforming-industries",
    topic: "Industry",
    date: "10 Feb 2025",
    read: "5 min read",
    title: "How AI is transforming industries",
    excerpt:
      "From manufacturing to healthcare, and the innovations actually driving it.",
    lead: true,
  },
  {
    to: "/ai-wearables",
    topic: "Hardware",
    date: "28 Jan 2025",
    read: "4 min read",
    title: "The future of AI-powered wearables",
    excerpt: "Health monitoring, fitness tracking, and what reaches daily life.",
  },
  {
    to: "/ai-healthcare",
    topic: "Healthcare",
    date: "2025",
    read: "6 min read",
    title: "AI in healthcare: revolutionising patient care",
    excerpt: "Where machine learning is reaching patients, and where it is not.",
  },
  {
    to: "/deep-learning",
    topic: "Research",
    date: "2025",
    read: "4 min read",
    title: "Deep learning: the next big leap",
    excerpt: "What changed, and why it changed when it did.",
  },
  {
    to: "/cloud-computing",
    topic: "Infrastructure",
    date: "2025",
    read: "4 min read",
    title: "Cloud computing: the backbone of AI",
    excerpt: "The infrastructure underneath the models.",
  },
  {
    to: "/cybersecurity-ai",
    topic: "Security",
    date: "2025",
    read: "4 min read",
    title: "Cybersecurity in the age of AI",
    excerpt: "New attack surfaces, and the defences that matter.",
  },
];

const Blog = () => {
  const [topic, setTopic] = useState("All");

  const topics = useMemo(
    () => ["All", ...Array.from(new Set(POSTS.map((p) => p.topic)))],
    [],
  );

  const lead = POSTS.find((p) => p.lead) || POSTS[0];
  const rest = POSTS.filter((p) => p !== lead);

  const shown = useMemo(
    () => (topic === "All" ? rest : rest.filter((p) => p.topic === topic)),
    [topic, rest],
  );

  useSEO(
    `Writing and press - ${BRAND.name}`,
    "Coverage of the company, and posts from the team.",
  );

  return (
    <div className="iv min-h-screen text-ink">
      <Header />

      <Masthead
        tag="Writing and press"
        tone="lilac"
        title="What we write, and what gets written about us."
        lede="Coverage of the company, and posts from the team on where this technology is going."
        actions={[
          <Action key="r" href="/recognition">The full record</Action>,
          <Ghost key="c" to="/contact">Media enquiries</Ghost>,
        ]}
      />

      <SectionAnchor id="lead" tag="Latest" title="The one to read first.">
        <div className="iv-wide">
          <Lead
            to={lead.to}
            kicker={lead.topic}
            title={lead.title}
            excerpt={lead.excerpt}
            date={lead.date}
            read={lead.read}
          />
        </div>
      </SectionAnchor>

      <SectionAnchor
        id="posts"
        tag="From the team"
        title="Everything else."
        lede="Six posts. Pick a subject, or read the lot."
      >
        <Topics items={topics} active={topic} onPick={setTopic} />

        <div className="mt-14 iv-wide">
          {shown.length ? (
            <PostGrid>
              {shown.map((p, i) => (
                <PostTile
                  key={p.to}
                  to={p.to}
                  kicker={p.topic}
                  title={p.title}
                  excerpt={p.excerpt}
                  date={p.date}
                  read={p.read}
                  delay={i * 0.05}
                />
              ))}
            </PostGrid>
          ) : (
            <EmptyState
              title={`Nothing filed under ${topic}`}
              detail="Pick another subject, or read everything."
              action={
                <button
                  type="button"
                  onClick={() => setTopic("All")}
                  className="tag border-b border-rule-strong pb-0.5"
                >
                  Show all
                </button>
              }
            />
          )}
        </div>

        <div className="mt-14">
          <NoteField tone="stone" tag="A note on dates">
            Where a post carries only a year, that is because we do not have the
            publication date on record. We would rather show the year we are
            sure of than invent a day.
          </NoteField>
        </div>
      </SectionAnchor>

      <SectionAnchor
        id="press"
        tag="Press"
        title="Written about us."
        lede="Coverage by other people, which is the kind worth reading."
      >
        <div>
          {PRESS.map((p) => (
            <PressRow key={p.href} {...p} />
          ))}
        </div>
      </SectionAnchor>

      <section className="band">
        <div className="wrap">
          <div className="iv-wide">
            <Subscribe
              action={
                <Action href={`mailto:${EMAILS.general}?subject=Writing`}>
                  Tell us what to write about
                </Action>
              }
            >
              We do not run a newsletter, because we have not earned the right
              to one yet.
            </Subscribe>
          </div>

          <div className="mt-12 max-w-[62ch] mx-auto">
            <Footnote updated="13 October 2026">
              Press enquiries go to {EMAILS.general}.
            </Footnote>
          </div>
        </div>
      </section>

      <Closer
        tone="plum"
        glyph="&#2694;"
        lang="bn"
        note={`Media · ${EMAILS.general}`}
        actions={[
          <Action key="r" href="/recognition">The full record</Action>,
          <Ghost key="a" to="/about">About the company</Ghost>,
        ]}
      >
        If you are writing about us, talk to us first.
      </Closer>

      <Footer />
    </div>
  );
};

export default Blog;
