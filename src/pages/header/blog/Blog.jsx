import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  Masthead, SectionAnchor, Closer, ArticleRow, PartnerRow, NoteField,
  Action, Ghost,
} from "../../../components/iv";
import { EMAILS } from "../../../data/site";

/* Writing and press.
 *
 * Two things were wrong here beyond the design.
 *
 * 1. The index listed three posts while six post pages existed. ai-healthcare,
 *    cloud-computing, cybersecurity-ai and deep-learning were orphaned -
 *    reachable only by typing the URL, linked from nowhere. All six are listed
 *    now, so nothing on this site is published-but-hidden.
 *
 * 2. Press coverage and our own writing were mixed in one list with a tag to
 *    tell them apart. An article someone else wrote about us is a different
 *    kind of thing from a post we wrote, and it is the stronger of the two.
 *    They are separate sections now.
 *
 * The posts themselves are general AI writing rather than anything about what
 * we build. Worth revisiting - but that is a content decision, not a design
 * one, so they are listed as they are.
 */

const PRESS = [
  {
    name: "Breaking Barriers with Empathy: The Journey of Sahith Vutukuri and IvishAI Quantum",
    note: "Startup Times · 15 February 2025",
    href: "https://startuptimes.net/breaking-barriers-with-empathy-the-journey-of-sahith-vutukuri-and-ivishai-quantum",
  },
];

const POSTS = [
  {
    to: "/ai-transforming-industries",
    date: "10 Feb 2025",
    read: "5 min read",
    title: "How AI is transforming industries",
    excerpt:
      "How artificial intelligence is changing sectors from manufacturing to healthcare, and the innovations driving it.",
  },
  {
    to: "/ai-wearables",
    date: "28 Jan 2025",
    read: "4 min read",
    title: "The future of AI-powered wearables",
    excerpt:
      "AI-driven wearable technology in personal health monitoring, fitness tracking and daily life.",
  },
  {
    to: "/ai-healthcare",
    date: "2025",
    read: "6 min read",
    title: "AI in healthcare: revolutionising patient care",
    excerpt: "Where machine learning is actually reaching patients, and where it is not.",
  },
  {
    to: "/deep-learning",
    date: "2025",
    read: "4 min read",
    title: "Deep learning: the next big leap",
    excerpt: "What changed, and why it changed when it did.",
  },
  {
    to: "/cloud-computing",
    date: "2025",
    read: "4 min read",
    title: "Cloud computing: the backbone of AI",
    excerpt: "The infrastructure underneath the models.",
  },
  {
    to: "/cybersecurity-ai",
    date: "2025",
    read: "4 min read",
    title: "Cybersecurity in the age of AI",
    excerpt: "New attack surfaces, and the defences that actually matter.",
  },
];

const Blog = () => (
  <div className="iv min-h-screen text-ink">
    <Header />

    <Masthead
      tag="Writing and press"
      tone="sand"
      title="What we write, and what gets written about us."
      lede="Coverage of the company, and posts from the team."
      actions={[
        <Action key="r" href="/recognition">The full record</Action>,
        <Ghost key="c" to="/contact">Media enquiries</Ghost>,
      ]}
    />

    <SectionAnchor
      id="press"
      tag="Press"
      title="Written about us."
      lede="Coverage by other people, which is the kind worth reading."
    >
      <div>
        {PRESS.map((p) => (
          <PartnerRow key={p.href} name={p.name} note={p.note} href={p.href} />
        ))}
      </div>
    </SectionAnchor>

    <SectionAnchor
      id="posts"
      tag="From the team"
      title="Posts."
      lede="General writing on where this technology is going."
    >
      <div>
        {POSTS.map((p) => (
          <ArticleRow
            key={p.to}
            to={p.to}
            date={p.date}
            read={p.read}
            title={p.title}
            excerpt={p.excerpt}
          />
        ))}
      </div>

      <div className="mt-12">
        <NoteField tone="stone" tag="A note on dates">
          Where a post carries only a year, that is because we do not have the
          publication date on record. We would rather show the year we are sure
          of than invent a day.
        </NoteField>
      </div>
    </SectionAnchor>

    <Closer
      tone="ink"
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

export default Blog;
