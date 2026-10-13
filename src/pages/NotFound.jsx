import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Masthead, SectionAnchor, Closer, Action, Ghost, TextLink, NoteField,
} from "../components/iv";
import { EMAILS } from "../data/site";

/* What a wrong URL gets.
 *
 * It used to be a black page reading "The page is under development, Stay
 * Tuned !!!!!!" - which was not true. Nothing is under development at a
 * mistyped address; the page simply is not there, and telling a visitor to
 * stay tuned for a typo wastes their time.
 *
 * It now says what happened, shows the address they asked for so they can see
 * the typo, and offers the handful of places people are actually trying to
 * reach.
 */

const WAYS = [
  ["/", "Home", "What IvishAI builds, in one page."],
  ["/products", "Products", "VerbX for communication, Sera for commerce."],
  ["/about", "About", "The company, the people and the record."],
  ["/blog", "Writing & press", "Coverage of the company, and posts from the team."],
  ["/contact", "Contact", "Six addresses, and what each one is for."],
];

const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <div className="iv min-h-screen text-ink">
      <Header />

      <Masthead
        tag="404"
        tone="stone"
        title="There is nothing at this address."
        lede="The link may be old, or there may be a typo in it. Nothing has gone wrong on your side."
        actions={[
          <Action key="h" href="/">Go to the home page</Action>,
          <Ghost key="c" href={`mailto:${EMAILS.general}`}>Tell us about it</Ghost>,
        ]}
      />

      <SectionAnchor
        id="ways"
        tag="Where you might have meant"
        title="Try one of these."
      >
        <ul className="border-t border-rule max-w-xl mx-auto text-left">
          {WAYS.map(([to, label, line]) => (
            <li key={to} className="border-b border-rule py-5">
              <TextLink to={to}>{label}</TextLink>
              <p className="body-s mt-1.5">{line}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 max-w-xl mx-auto">
          <NoteField tone="stone" tag="The address you asked for">
            <span className="font-mono text-sm break-all">{pathname}</span>
          </NoteField>
        </div>
      </SectionAnchor>

      <Closer
        tone="ink"
        glyph="&#2309;"
        lang="hi"
        note={`If you followed a link from us, tell us · ${EMAILS.general}`}
        actions={[
          <Action key="h" href="/">Home</Action>,
          <Ghost key="p" href="/products">See what we build</Ghost>,
        ]}
      >
        A wrong address is not a dead end.
      </Closer>

      <Footer />
    </div>
  );
};

export default NotFound;
