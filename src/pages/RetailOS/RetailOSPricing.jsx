import React from "react";
import RetailOSLayout from "./RetailOSLayout";
import useSEO from "../../lib/useSEO";
import {
  Masthead, SectionAnchor, Closer, Price, Table, NoteField, Action, Ghost,
  Footnote,
} from "../../components/iv";
import { SERA } from "../../data/sera";
import { EMAILS } from "../../data/site";

/* Retail OS - pricing.
 *
 * ⚠️ TWO PRICE LISTS EXIST FOR THIS PRODUCT.
 *
 *   /retail-os/pricing : FREE / BASIC Rs.299 / PRO Rs.699
 *   /sera              : Free / Premium "From Rs.99"   (SERA_PRICING)
 *
 * A customer who sees both will not know which is true. I have NOT silently
 * picked one, because that is a commercial decision and guessing could put the
 * wrong price in front of a shopkeeper. Both are left as they were and the
 * owner needs to say which is current - at which point this page should read
 * from src/data/sera.js like everything else does.
 *
 * The tiers below are exactly as they were on this page.
 */

const PLANS = [
  {
    name: "FREE",
    price: "₹0",
    period: "forever",
    note: "Every shop starts here. No card, no time limit.",
    includes: ["Full billing", "Basic inventory", "Basic reports", "SERA AI for setup", "1 user"],
  },
  {
    name: "BASIC",
    price: "₹299",
    period: "/month",
    note: "₹2,999 a year. Adds Khata and the full inventory.",
    includes: [
      "Everything in Free",
      "Full inventory",
      "Khata credit ledger",
      "Multi-language",
      "SERA suggestions",
    ],
  },
  {
    name: "PRO",
    price: "₹699",
    period: "/month",
    note: "For shops running more than one counter.",
    includes: [
      "Everything in Basic",
      "Poster generation",
      "Priority support",
      "Multiple users",
      "Full reports",
    ],
  },
];

const MATRIX = [
  ["Billing", "Full", "Full", "Full"],
  ["Inventory", "Basic", "Full", "Full"],
  ["Khata (credit ledger)", "—", "Yes", "Yes"],
  ["Reports", "Basic", "Full", "Full"],
  ["SERA AI", "Setup only", "Suggestions", "Everything"],
  ["Multi-language", "—", "Yes", "Yes"],
  ["Users", "1", "Multiple", "Multiple"],
  ["Poster generation", "—", "—", "Yes"],
  ["Priority support", "—", "—", "Yes"],
];

const RetailOSPricing = () => {
  useSEO("Plans for your shop - Retail OS", "Billing is free forever. Paid tiers add Khata, inventory and SERA AI.");

  return (
    <RetailOSLayout>
      <Masthead
        tag="Pricing"
        tone="sand"
        title="Billing is free. Forever."
        lede="Not a trial. Every shop starts on Free and stays there as long as it likes; the paid tiers add to it rather than unlocking it."
        actions={[
          <Action key="p" href={SERA.playStore}>Start free</Action>,
          <Ghost key="c" href={`mailto:${EMAILS.general}`}>Ask about a plan</Ghost>,
        ]}
      />

      <SectionAnchor id="plans" tag="The plans" title="Three of them.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 iv-wide">
          {PLANS.map((p) => (
            <Price
              key={p.name}
              name={p.name}
              amount={p.price}
              per={p.period}
              note={p.note}
              includes={p.includes}
              action={
                <Action href={p.name === "FREE" ? SERA.playStore : `mailto:${EMAILS.general}?subject=Retail OS ${p.name} plan`}>
                  {p.name === "FREE" ? "Start free" : `Start ${p.name}`}
                </Action>
              }
            />
          ))}
        </div>
      </SectionAnchor>

      <SectionAnchor
        id="compare"
        tag="Side by side"
        title="What each one actually includes."
      >
        <Table head={["", "Free", "Basic", "Pro"]} rows={MATRIX} />

        <div className="mt-10">
          <NoteField tone="mint" tag="What free actually means">
            Unlimited billing, barcode scanning and offline mode, with no card
            and no time limit. If all you need is to bill customers, you never
            have to pay us.
          </NoteField>
        </div>

        <div className="mt-12 max-w-[62ch] mx-auto">
          <Footnote updated="13 October 2026">
            Prices in rupees, excluding taxes. Ask us before you commit if
            anything here is unclear - {EMAILS.general}.
          </Footnote>
        </div>
      </SectionAnchor>

      <Closer
        tone="ember"
        glyph="&#2693;"
        lang="gu"
        note={`${SERA.category} · ${SERA.contactEmail}`}
        actions={[
          <Action key="p" href={SERA.playStore}>Start free</Action>,
          <Ghost key="f" to="/retail-os/features">What every shop gets</Ghost>,
        ]}
      >
        Start free, and stay free if that is enough.
      </Closer>
    </RetailOSLayout>
  );
};

export default RetailOSPricing;
