// ============================================================================
// Sera - content source of truth (ivishai.com/sera).
// Shopkeeper-first. Simple, practical. NO AI/infrastructure/enterprise jargon.
// Every industry: Pain -> Money Question -> Demo -> Proof -> Benefit -> Install.
// Zone 1-6 playbook locked from the Master Doc (Tables 8-13). Do NOT invent.
// ============================================================================

export const SERA = {
  name: "Sera",
  hero: "Har Dukaan. Ek Sera.",
  category: "The Operating System for Bharat Retail.",
  what:
    "Sera runs your shop - billing, Khata, inventory and compliance - in one app. Setup in 60 seconds. Works offline. No hardware required.",
  why:
    "Free billing, digital Khata, works offline, SERA AI assisted setup - built for shopkeepers, not accountants.",
  scale: "28 Industries. 6 Zones.",
  playStore: "#", // [TO CONFIRM] Play Store link
  contactEmail: "ivishai.supprt@gmail.com",
};

export const SERA_PROMISES = [
  "60-second setup",
  "Billing always free",
  "Digital Khata",
  "Works offline",
  "No hardware required",
];

// ---- Features (plain language) --------------------------------------------
export const SERA_FEATURES = [
  { title: "Free Billing", body: "Fast, unlimited billing that never costs you a rupee.", icon: "Receipt" },
  { title: "Digital Khata", body: "Track customer credit and dues without a paper book.", icon: "BookOpen" },
  { title: "Inventory", body: "Know what's in stock and what's not selling.", icon: "Boxes" },
  { title: "Reports", body: "See today's sales and profit at a glance.", icon: "BarChart3" },
  { title: "Compliance", body: "Stay audit-ready - built in, not added later.", icon: "ShieldCheck" },
  { title: "SERA AI", body: "Let SERA handle the setup and the paperwork.", icon: "Sparkles" },
];

// ---- Pricing --------------------------------------------------------------
export const SERA_PRICING = [
  {
    name: "DUKAAN", price: "Free Forever", highlight: true,
    desc: "Billing, Khata, and inventory. No cost, no time limit. This is the plan almost every shop starts on.",
  },
  {
    name: "VYAPAR", price: "₹129/month", highlight: false,
    desc: "Everything in DUKAAN, plus SERA AI assisted setup, advanced reports, and priority support. For shops ready to grow past the basics.",
  },
  {
    name: "Zone 6 - Restricted Retail", price: "₹299-999/month", highlight: false,
    desc: "Liquor, tobacco, paan and hybrid shops - built-in excise and compliance tracking most billing apps don't offer.",
  },
];

// ---- Zone 1-6 industry playbook (Tables 8-13) -----------------------------
export const SERA_ZONES = [
  {
    zone: "Zone 1", name: "Core Retail",
    industries: [
      { slug: "grocery", name: "Grocery", pain: "Khata dues", money: "How much money is stuck in customer Khata today?", demo: "Khata Dashboard", proof: "₹12,000 pending dues visible instantly", benefit: "Recover money faster" },
      { slug: "kirana", name: "Kirana", pain: "Credit tracking", money: "How much credit have customers not paid yet?", demo: "Customer Ledger", proof: "Top debtors identified instantly", benefit: "Better collections" },
      { slug: "general-store", name: "General Store", pain: "Dead inventory", money: "How much stock hasn't sold in 30 days?", demo: "Sales Report", proof: "Slow products highlighted", benefit: "Better purchasing" },
      { slug: "dairy", name: "Dairy", pain: "Milk wastage", money: "How much money is lost from unsold milk weekly?", demo: "Inventory", proof: "Spoilage tracking", benefit: "Reduce wastage" },
      { slug: "fruits-vegetables", name: "Fruits & Vegetables", pain: "Daily spoilage", money: "How much produce gets thrown away every day?", demo: "Stock Tracking", proof: "Unsold stock visible", benefit: "Sell before spoilage" },
      { slug: "bakery", name: "Bakery", pain: "Expiring products", money: "How much money is lost from unsold bread and cakes?", demo: "Inventory", proof: "Expiring stock flagged", benefit: "Reduce expiry losses" },
    ],
  },
  {
    zone: "Zone 2", name: "Pharmacy",
    industries: [
      { slug: "pharmacy", name: "Pharmacy", pain: "Medicine expiry", money: "How much money was lost to expired medicines last month?", demo: "Expiry Tracking", proof: "Expiry alerts shown", benefit: "Reduce expiry loss" },
      { slug: "medical-store", name: "Medical Store", pain: "Batch compliance", money: "How long does it take to find expiring stock?", demo: "Inventory Screen", proof: "Batch search demo", benefit: "Better compliance" },
    ],
  },
  {
    zone: "Zone 3", name: "Regulated Retail",
    industries: [
      { slug: "mobile-store", name: "Mobile Store", pain: "Stock mismatch", money: "How much money is locked in unsold phones?", demo: "Inventory Dashboard", proof: "Stock ageing report", benefit: "Free up capital" },
      { slug: "electronics", name: "Electronics", pain: "Slow inventory", money: "Which products haven't sold in 60 days?", demo: "Reports Screen", proof: "Dead inventory visible", benefit: "Better inventory turns" },
      { slug: "hardware", name: "Hardware", pain: "Large SKU count", money: "How many products are sitting idle?", demo: "Inventory Reports", proof: "Item movement reports", benefit: "Better control" },
      { slug: "stationery", name: "Stationery", pain: "Seasonal stock", money: "How much old stock remains after season?", demo: "Inventory Reports", proof: "Seasonal report", benefit: "Smarter purchasing" },
    ],
  },
  {
    zone: "Zone 4", name: "Services",
    industries: [
      { slug: "salon", name: "Salon", pain: "Repeat customers", money: "How many customers returned this month?", demo: "Customer Database", proof: "Repeat visit report", benefit: "Increase retention" },
      { slug: "beauty-parlour", name: "Beauty Parlour", pain: "Loyalty tracking", money: "Who are your highest spending customers?", demo: "Customer History", proof: "Customer ranking", benefit: "Increase repeat visits" },
      { slug: "tailor", name: "Tailor", pain: "Pending deliveries", money: "How many orders are overdue today?", demo: "Order Tracking", proof: "Pending order list", benefit: "Better delivery management" },
      { slug: "boutique", name: "Boutique", pain: "Slow stock", money: "Which designs are not selling?", demo: "Sales Reports", proof: "Product performance report", benefit: "Better inventory decisions" },
      { slug: "repair-shop", name: "Repair Shop", pain: "Open jobs", money: "How many repairs remain unfinished?", demo: "Job Dashboard", proof: "Pending jobs report", benefit: "Better job tracking" },
    ],
  },
  {
    zone: "Zone 5", name: "Food",
    industries: [
      { slug: "fast-food", name: "Fast Food", pain: "Billing speed", money: "How many customers leave during rush hours?", demo: "Billing Screen", proof: "Fast checkout demo", benefit: "More sales" },
      { slug: "takeaway", name: "Takeaway", pain: "Order tracking", money: "How many orders get missed weekly?", demo: "Orders Dashboard", proof: "Order visibility", benefit: "Fewer mistakes" },
      { slug: "tiffin-service", name: "Tiffin Service", pain: "Payment collection", money: "How many customers have not paid yet?", demo: "Customer Ledger", proof: "Outstanding payments visible", benefit: "Better collections" },
      { slug: "cloud-kitchen", name: "Cloud Kitchen", pain: "Daily visibility", money: "Can you see today's profit instantly?", demo: "Reports Dashboard", proof: "Sales summary", benefit: "Better decisions" },
      { slug: "curry-point", name: "Curry Point", pain: "Food wastage", money: "How much food remains unsold daily?", demo: "Sales Report", proof: "Wastage estimate", benefit: "Reduce losses" },
      { slug: "restaurant", name: "Restaurant", pain: "Table and order management", money: "How much revenue is lost from missed orders?", demo: "Orders + Billing", proof: "Order tracking", benefit: "Better operations" },
    ],
  },
  {
    zone: "Zone 6", name: "Restricted Retail",
    restricted: true,
    industries: [
      { slug: "liquor-shop", name: "Liquor Shop", pain: "Excise compliance", money: "If inspection happens tomorrow, are records ready?", demo: "Compliance Dashboard", proof: "Compliance logs visible", benefit: "Avoid penalties" },
      { slug: "tobacco-shop", name: "Tobacco Shop", pain: "Compliance tracking", money: "How long would it take to show compliance records?", demo: "Compliance Screen", proof: "Audit-ready records", benefit: "Stay compliant" },
      { slug: "paan-shop", name: "Paan Shop", pain: "No sales visibility", money: "Can you see today's exact earnings instantly?", demo: "Billing Dashboard", proof: "Daily sales report", benefit: "Better control" },
      { slug: "hybrid-paan-food", name: "Hybrid Paan + Food", pain: "Mixed inventory", money: "How much money is lost managing two businesses separately?", demo: "Inventory + Billing", proof: "Unified dashboard", benefit: "One system for everything" },
    ],
  },
];

// Flattened lookup for the industry template route
export const SERA_INDUSTRIES = SERA_ZONES.flatMap((z) =>
  z.industries.map((i) => ({ ...i, zone: z.zone, zoneName: z.name, restricted: !!z.restricted }))
);

export const getSeraIndustry = (slug) => SERA_INDUSTRIES.find((i) => i.slug === slug);
