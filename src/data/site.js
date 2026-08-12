// ============================================================================
// IvishAI - Single source of truth for site-wide content.
// All copy, numbers, emails, links and people come from the Master Website Doc.
// Do NOT invent facts. [TO CONFIRM] items are left explicit for later fill-in.
// ============================================================================

export const BRAND = {
  name: "IvishAI",
  legal: "Ivish AI Quantum Pvt Ltd",
  hero: "Where Intelligence Becomes Infrastructure.",
  category: "The Operating Systems Company for Industry 6.0.",
  vision: "Building the Infrastructure of Industry 6.0.",
  description:
    "IvishAI builds intelligent infrastructure operating systems for communication and commerce.",
  hq: "Hyderabad, Telangana, India",
  year: 2025,
};

// ---- Primary navigation (IvishAI site) - the locked 10 items --------------
export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Collaboration", href: "/collaboration" },
  { label: "Recognition & Media", href: "/recognition" },
  { label: "Government", href: "/government" },
  { label: "Investors", href: "/investors" },
  { label: "Patents", href: "/patents" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

// ---- Contact map (which email goes where) ---------------------------------
export const EMAILS = {
  general: "ivishai.supprt@gmail.com", // spelling "supprt" kept exactly as supplied
  support: "ivishai.supprt@gmail.com",
  collaboration: "ivishai.sahith@gmail.com",
  government: "ivishai.sahith@gmail.com",
  investors: "ivishai.investors@gmail.com",
  careers: "ivishai.hrteam@gmail.com",
};

export const CALENDLY = "https://calendly.com/ivishaihello/30min";

// ---- Social + ecosystem ----------------------------------------------------
export const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/ivishai/",
  x: "https://x.com/ai_ivish52542",
  instagram: "https://www.instagram.com/ivish_ai/",
};

export const ECOSYSTEM = {
  ivishai: { label: "IvishAI", href: "/", note: "Parent" },
  verbx: { label: "VerbX", href: "https://verbxeco.com", note: "Communication Infrastructure", external: true },
  sera: { label: "Sera", href: "/sera", note: "Retail Infrastructure" },
};

// ---- External links (Appendix B) ------------------------------------------
export const LINKS = {
  podcast: "https://youtu.be/c87sUt706eY",
  deepTechShort: "https://youtube.com/shorts/20Y7-P0HwLk",
  vibecon:
    "https://www.linkedin.com/posts/vutukuri-sahith_vibeconindia-emergentlabs-startups-ugcPost-7446253451442864129-utz0",
  startupTimes:
    "https://startuptimes.net/breaking-barriers-with-empathy-the-journey-of-sahith-vutukuri-and-ivishai-quantum",
  ventureWolf: "https://www.venturewolf.in",
  meyiCloud: "https://www.meyicloud.com",
  aws: "https://aws.amazon.com",
};

// ---- Products (snapshot lines only - teach-once, deep content lives on product sites)
export const PRODUCTS = {
  verbx: {
    name: "VerbX",
    tag: "Communication Infrastructure",
    line: "The language communication operating system.",
    overview:
      "VerbX is a Language Communication Operating System for multilingual institutions - 76 languages live today, built offline-first.",
    // VerbX lives on its own domain.
    href: "https://verbxeco.com",
    cta: "Explore VerbX",
    external: true,
  },
  sera: {
    name: "Sera",
    tag: "Retail Infrastructure",
    line: "The operating system for Bharat retail.",
    overview:
      "Sera is a Retail Operating System built for Bharat's shops - billing, Khata, compliance, offline-first, across 28 industries.",
    href: "/sera",
    cta: "Explore Sera",
    external: false,
  },
};

// ---- Locked headline numbers (live on Recognition & Media / Patents) -------
export const NUMBERS = {
  languages: 76,
  indianLanguages: 22,
  globalLanguages: 54,
  engines: 27,
  countries: 130,
  patentsTotal: 8,
  patentsGranted: 1,
};

// ---- Founding team (3 EQUAL cards, order CEO -> CTO -> CMO) ----------------
export const FOUNDERS = [
  {
    slug: "sahith",
    name: "Sahith V",
    role: "Founder & CEO",
    photo: "/team/sahith.jpg",
    linkedin: "https://www.linkedin.com/in/vutukuri-sahith/",
    card: "Leads business, fundraising, and AI model training strategy - working closely with Ankith and Amrutha across product and growth.",
    personalNote:
      "No single person has all the answers - the strength is in the team you trust and empower. We're young, our product isn't perfect, but we're building the best way we know how - for India, and for the world.",
    about:
      "Sahith started as an engineer with a simple obsession: how intelligent systems could change the way people communicate and work. That curiosity, sharpened through a B.Tech in Smart Manufacturing at IIITDM Jabalpur, took him through AI, backend engineering, computer vision, and product development - until \"curious\" turned into \"building.\" Today he leads IvishAI's technical and business direction end to end: product architecture, AI strategy, fundraising, partnerships, and the day-to-day of turning two hard engineering problems into VerbX and Sera. He's a Lean Six Sigma Green Belt, mentors students in Python and Math on the side, and still believes the best learning happens right past the edge of your comfort zone.",
  },
  {
    slug: "ankith",
    name: "Ankith M",
    role: "Co-Founder & CTO",
    photo: "/team/ankith.png",
    linkedin: "https://www.linkedin.com/in/ankith-m-589821257/",
    card: "Full-stack engineer - built the frontend, backend, cloud infrastructure, and agentic AI systems behind VerbX and Sera.",
    personalNote: "", // [TO CONFIRM] - to be added later
    about:
      "Ankith is the engineer who ships. Over the past two years he's gone from solo-building computer-vision projects to co-founding VerbX's backend from scratch - real-time translation infrastructure, built to hold up in production, not just in a demo. He works the full stack by instinct: React and React Native on the front, Python and Node on the back, and increasingly, agentic AI systems tying it together. Outside IvishAI, he's shipped Prayana (an AI travel-planning app) solo and is currently building Orbit, an AI-powered SRE command hub - the kind of side projects that tell you someone builds because they can't not.",
  },
  {
    slug: "amrutha",
    name: "Amrutha P",
    role: "Co-Founder & CMO · Head of Hiring",
    photo: "/team/amrutha.png",
    linkedin: "https://www.linkedin.com/in/polamarasetti-amrutha-8a66b4341/",
    card: "Leads marketing, brand, and GTM execution - and hiring, as the team grows.",
    personalNote: "", // [TO CONFIRM] - to be added later
    about:
      "Amrutha turns two technical products into stories people actually understand - which is a harder job than it sounds when the products are a multilingual AI engine and a retail operating system. She owns brand, GTM, and growth end to end, and now hiring too, as the team scales past three. She's also quietly stacking the analytical side of marketing - machine learning fundamentals, data-driven growth experiments - because she'd rather back her instincts with evidence than run on vibes alone.",
  },
];

export const getFounder = (slug) => FOUNDERS.find((f) => f.slug === slug);

// ---- Advisors & mentors ----------------------------------------------------
export const ADVISORS = [
  {
    name: "Devang Raja",
    role: "Mentor & Advisor - Venture Wolf (Wolf Group)",
    credibility: "Fundraising & strategic growth.",
    photo: "/team/devang.jpg",
    linkedin: "https://www.linkedin.com/in/devangraja2001/",
  },
  {
    name: "Srija Sriram",
    role: "Design Mentor · Head of Design",
    credibility:
      "Winner, MIT Reality Hack 2026; Parsons School of Design. Brand & product design advisor across IvishAI.",
    photo: "/team/srija.png",
    linkedin: "https://www.linkedin.com/in/srijasriram",
  },
];

// ---- Company timeline (confirmed milestones only) -------------------------
export const TIMELINE = [
  { when: "December 2023", what: "IIT Bombay AI Workshop - idea origin" },
  { when: "December 2024", what: "Deep Tech Conclave" },
  { when: "February 2025", what: "Company incorporation • DPIIT • MSME" },
  { when: "April 2025", what: "Startup Mahakumbh" },
  { when: "August 2025", what: "Startup Semester begins (PDPM IIITDM Jabalpur)" },
  { when: "December 2025", what: "WADLA Hackathon" },
  { when: "February 2026", what: "VerbX Launch" },
  { when: "June 2026", what: "Sera Launch" },
];

// ---- Credentials (badges/highlights only - never full certificates) -------
export const CREDENTIALS = [
  { label: "DPIIT Recognised", logo: "/logos/dpiit.png" },
  { label: "MSME Registered", logo: "/logos/msme.jpg" },
  { label: "Startup India - SISFS (via NSUT IIF), Runner-Up 2026", logo: "/logos/startup-india.png" },
  { label: "Private Limited Company", logo: null },
  { label: "Hyderabad HQ", logo: null },
];

// ---- Technology partners (About only, never homepage) ---------------------
export const TECH_PARTNERS = [
  {
    name: "Powered by AWS",
    logo: "/logos/aws.png",
    note: "IvishAI's infrastructure runs on AWS.",
    href: LINKS.aws,
  },
  {
    name: "Meyi Cloud",
    logo: "/logos/meyicloud-white.png",
    note: "Cloud Enablement Partner - AWS Advanced Tier Partner; cloud enablement, credits & support.",
    href: LINKS.meyiCloud,
    approvalRequired: true, // pre-publication email approval required per MoU
  },
];

// ---- Government & industry engagements (Recognition & Media) ---------------
// Wording rule: "Met / Interacted With / Engaged With" ONLY.
export const ENGAGEMENTS = [
  { who: "Met Ashwini Vaishnaw", ctx: "AI Impact Summit 2026 (April)" },
  { who: "Met Chandrababu Naidu", ctx: "Deep Tech Conclave (Dec 5-6, 2024)" },
  { who: "Met Raj Reddy (Father of AI)", ctx: "AI Impact Summit 2026 (April)" },
  { who: "Met Arun Kumar", ctx: "AI Impact Summit 2026 (April)" },
  { who: "Attended Google DeepMind CEO seminar", ctx: "AI Impact Summit 2026 (April)" },
  { who: "Had 1:1 with Infosys Co-Founder", ctx: "AI Impact Summit 2026 (April)" },
  { who: "Interacted with NVIDIA representatives", ctx: "AI Impact Summit 2026 (April)" },
  { who: "Met Mahavir Pratap Sharma", ctx: "Startup Mahakumbh, April 2025" },
  { who: "Visited VVDN facility; met VVDN Director", ctx: "Gurgaon, April 2026" },
];

export const EVENTS = [
  { name: "Deep Tech Conclave 2024", when: "Dec 5-6, 2024" },
  { name: "Startup Mahakumbh 2025", when: "April 2025" },
  { name: "AI Impact Summit 2026", when: "April 2026" },
  {
    name: "WADLA Hackathon 2025",
    when: "December 2025",
    note: "With IIITDM-J, Swiggy & WADLA; 3 problem statements from IvishAI; mentored across 5 statements (2 from government, e.g. police).",
  },
];

// ---- Patents (state status accurately) ------------------------------------
export const PATENTS = {
  summary:
    "8 Patents - 1 Design Granted, 2 Design Pending, 5 Complete Specification Filed",
  utility: "5 Utility Patents (Filed)",
  design: "3 Design Patents (1 Granted, 2 Pending)",
  legalPartner: {
    name: "LexOrbis",
    logo: "/logos/lexorbis.jpg",
    note: "Patents filed with LexOrbis - IvishAI's legal & IP partner.",
    approvalRequired: true, // pre-publication review required per consent letter
  },
};

// ---- Institutional support -------------------------------------------------
export const INSTITUTIONAL_SUPPORT =
  "Startup Semester: PDPM IIITDM Jabalpur - August 2025 to June 2026 (via the institute's Innovation Cell).";
