import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Masthead, SectionAnchor, Closer, Contacts, Address, NoteField,
  Action, Ghost, LinkOut, Bento, Tile,
} from "../../components/iv";
import { EMAILS, CALENDLY, SOCIALS, BRAND } from "../../data/site";

/* Contact.
 *
 * Six addresses, which used to be six icon cards in two brand colours
 * alternating for no reason. The useful fact on a contact page is which
 * address goes where, and that is a list - so it is a list, and the addresses
 * are real mailto links rather than text someone has to retype.
 *
 * No contact form. A form here would collect a name and an email and then send
 * exactly the mail the visitor could have sent themselves, with one more place
 * for it to get lost. The booking link is real and goes to Calendly.
 */

const WHERE = [
  ["General", EMAILS.general, "Questions, media and anything that does not fit a box below."],
  ["Collaboration", EMAILS.collaboration, "Partnerships, pilots and building on our infrastructure."],
  ["Investors", EMAILS.investors, "Investment conversations and diligence requests."],
  ["Government", EMAILS.government, "Public-sector engagement and institutional programmes."],
  ["Careers", EMAILS.careers, "Roles, internships and joining the team."],
  ["Support", EMAILS.support, "Product help for VerbX and Sera users."],
];

const Contact = () => (
  <div className="iv min-h-screen text-ink">
    <Header />

    <Masthead
      tag="Contact"
      tone="mint"
      title="Write to the right person."
      lede="Six addresses, and what each one is for. A message sent to the right one gets answered faster than a form."
      actions={[
        <Action key="b" href={CALENDLY}>Book 30 minutes</Action>,
        <Ghost key="g" href={`mailto:${EMAILS.general}`}>Email us</Ghost>,
      ]}
    />

    <SectionAnchor
      id="where"
      tag="Where to write"
      title="Which address goes where."
    >
      <Contacts items={WHERE.map(([what, addr]) => [what, addr])} />

      <div className="mt-12 iv-wide">
        <Bento>
          {WHERE.slice(0, 3).map(([label, , blurb], i) => (
            <Tile key={label} tone={["lilac", "mint", "sky"][i]} title={label} delay={i * 0.05}>
              {blurb}
            </Tile>
          ))}
          {WHERE.slice(3).map(([label, , blurb], i) => (
            <Tile key={label} tone={["ember", "rose", "sand"][i]} title={label} delay={(i + 3) * 0.05}>
              {blurb}
            </Tile>
          ))}
        </Bento>
      </div>
    </SectionAnchor>

    <SectionAnchor id="office" tag="Where we are" title="The registered office.">
      <div className="flex flex-col items-center gap-8 text-center">
        <Address
          lines={[BRAND.legal, BRAND.hq]}
          note="Registered office"
        />
        <div className="flex flex-wrap gap-6 justify-center">
          <LinkOut href={SOCIALS.linkedin}>LinkedIn</LinkOut>
          <LinkOut href={SOCIALS.x}>X</LinkOut>
          <LinkOut href={SOCIALS.instagram}>Instagram</LinkOut>
        </div>
      </div>

      <div className="mt-12">
        <NoteField tone="stone" tag="On response times">
          We do not publish a guaranteed reply time, because we would not be
          able to hold to it honestly. Every address above reaches a person, not
          a queue.
        </NoteField>
      </div>
    </SectionAnchor>

    <Closer
      tone="moss"
      glyph="&#2438;"
      lang="bn"
      note={BRAND.legal}
      actions={[
        <Action key="b" href={CALENDLY}>Book 30 minutes</Action>,
        <Ghost key="p" to="/products">See what we build</Ghost>,
      ]}
    >
      Tell us what you are trying to build.
    </Closer>

    <Footer />
  </div>
);

export default Contact;
