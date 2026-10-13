/* The IvishAI element library.
 *
 * 50 elements. Every page on this site is built from these, so a fix made once
 * lands everywhere - which is the whole reason the old site drifted: layout was
 * written inline on each page, so no page could inherit anything.
 *
 * The rules these enforce:
 *   one ground          - no page sets its own background
 *   one axis            - left, the whole way down
 *   no cards            - no fill, outline, radius or shadow round content
 *   colour in marks     - never in a heading, never behind a paragraph
 *   motion is optional  - nothing is only visible once an animation has fired
 *
 * Contrast is measured, not chosen: aqua #13D8F6 is 1.72:1 on paper and is a
 * fill only; ember #E26426 is 3.45:1 and is display-size or a mark. The deep
 * pair (#0F616D, #AD4613) is what you write with.
 */

export {
  Band, Bleed, Wrap, Tag, Head, Display, Lede, Prose,
  Statement, Rule, Columns, Grid, Cell, Spacer,
} from "./Structure";

export {
  Ledger, Status, Timeline, SpecSheet, FactRow, CredentialRow,
  PersonRow, BigNumber, StatRow, Diff, LogoWall,
} from "./Record";

export {
  Action, Ghost, TextLink, Actions, Disclosure, Questions, Note, Quote,
  Figure, Portrait, Marker, Chip, Eyebrow, JumpList, Crumb, NextPrev,
  EmptyState, ErrorState, LoadingState, Field, Input, TextArea, Select,
  FormRow, Footnote,
} from "./Action";

export {
  Plate, ScriptWall, Glyph, Stack, ProductMark, Screens, CredentialWall,
  Meter, Counter, Terminal, Swatch, DotField, IndustryWall, PortraitRow,
  Marquee,
} from "./Objects";

export {
  PatentRow, RoleRow, Requirements, LegalDoc, Clause, Table, Matrix, Steps,
  Contacts, Address, ArticleRow, ByLine, PullQuote, Aside, KeyValue, Tabs,
  Toggle, Price, ComparisonBar, Legend, Highlights, Milestone, Banner,
  Callout, Checklist, Code, Kbd, SectionIndex, ShowMore, Anchor, Ticker,
  Avatar, ConsentRow, Sticky, Progress,
} from "./More";

export {
  IsoStack, Orbit, Mesh, Odometer, Gauge, Poster, Lattice, Ring,
  Waveform, Blueprint, PinMap, Flow, Bars, Cube, Hatch,
} from "./Drawn";

/* The colour fields. "No cards" meant no hairline box drawn round content - it
   never meant no colour. These are surfaces, and they are where the presence
   comes from. */
export {
  TINTS, FIELDS, Tile, Bento, ColourField, FieldStack, StatPanel, Wash, Orb, OrbRow,
  SplitField, QuoteField, Capsule, CapsuleRow, TonePanel, Ribbon, Palette,
} from "./Fields";

/* Page-level forms, found while rebuilding About: the shapes every page needs
   and none of them had, so each was improvising its own opener inline. */
export {
  Masthead, Profile, PartnerRow, CredentialStrip, TwoUp, PageIndex,
  NoteField, LinkOut, SectionAnchor, Closer,
} from "./Page";

/* Editorial - the writing pages draw their own covers from the brand, so a
   post has artwork without needing a stock photograph found for it. */
export {
  Lead, PostTile, PostGrid, PressRow, Article, ReadNext, Topics,
  Subscribe, Shelf, Dateline,
} from "./Editorial";

export { Showcase, ZoneList } from "./Showcase";
