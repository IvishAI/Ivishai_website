import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  ShieldCheck,
  CheckCircle2,
  Send,
  Presentation,
  LineChart,
  PieChart,
  History,
  PlayCircle,
  ScrollText,
  BarChart3,
  Rocket,
  FileText,
} from "lucide-react";
import {
  PageShell,
  Section,
  Heading,
  Eyebrow,
  CTAButton,
  Card,
  Reveal,
  AmbientBackground,
} from "../components/site";
import useSEO from "../lib/useSEO";
import { PRODUCTS, CALENDLY, EMAILS } from "../data/site";

/* --------------------------- Static content --------------------------- */

// Two high-level investor descriptors - exact allowed lines, no figures beyond them.
const DESCRIPTORS = [
  {
    name: PRODUCTS.verbx.name,
    tag: PRODUCTS.verbx.tag,
    line: "Communication Infrastructure for a Multilingual World",
    accent: "text-aqua",
    ring: "hover:border-aqua/30",
  },
  {
    name: PRODUCTS.sera.name,
    tag: PRODUCTS.sera.tag,
    line: "Retail Infrastructure for India's 60 Million Shops.",
    accent: "text-ember-soft",
    ring: "hover:border-ember/30",
  },
];

// What the gated data room contains - labels only, never actual figures.
const DATA_ROOM = [
  { icon: Presentation, label: "VC Decks" },
  { icon: LineChart, label: "Financials" },
  { icon: PieChart, label: "Cap Table" },
  { icon: History, label: "Funding History" },
  { icon: PlayCircle, label: "Product Videos" },
  { icon: ScrollText, label: "Patent Details" },
  { icon: BarChart3, label: "Revenue Plans" },
  { icon: Rocket, label: "GTM Plans" },
  { icon: FileText, label: "Technical Reports" },
];

const scrollToRequest = () => {
  const el = document.getElementById("request");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ------------------------------- Hero --------------------------------- */
const Hero = () => (
  <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
    <AmbientBackground variant="dual" />
    <div className="container-site">
      <Reveal as="span" y={0}>
        <Eyebrow>Investor Relations</Eyebrow>
      </Reveal>

      <motion.h1
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        className="mt-6 font-sora font-normal tracking-tightest"
      >
        <motion.span
          variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="block text-5xl md:text-7xl lg:text-[82px] leading-[1.02] text-gradient-ember"
        >
          Investor Relations
        </motion.span>
      </motion.h1>

      <Reveal delay={0.45} className="mt-7 max-w-2xl text-lg text-cloud-muted">
        IvishAI builds intelligent infrastructure for communication and commerce, with two live
        products and a long-term Industry 6.0 vision. Qualified investors can request access to the
        private data room.
      </Reveal>

      <Reveal delay={0.55} className="mt-10 flex flex-wrap gap-3">
        <CTAButton variant="primary" onClick={scrollToRequest} arrow>
          Request investor access
        </CTAButton>
        <CTAButton variant="secondary" href={CALENDLY}>
          Book a call
        </CTAButton>
      </Reveal>
    </div>
  </section>
);

/* ------------------------ Investor Descriptors ------------------------ */
const Descriptors = () => (
  <Section id="descriptors" className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>Two live products</Eyebrow>
      <Reveal delay={0.05} className="mt-5">
        <Heading as="h2" gradient="ember" size="lg">
          Infrastructure, deployed today.
        </Heading>
      </Reveal>
      <Reveal delay={0.12} className="mt-6 text-lg text-cloud-muted">
        Two operating systems in the field - the first layers of a long-term Industry 6.0 vision.
      </Reveal>
    </div>

    <div className="mt-12 grid gap-5 md:grid-cols-2">
      {DESCRIPTORS.map((d, i) => (
        <Reveal key={d.name} delay={i * 0.1}>
          <Card className={`flex h-full flex-col ${d.ring}`}>
            <span className={`text-xs uppercase tracking-wider ${d.accent}`}>{d.tag}</span>
            <h3 className="mt-4 font-sora text-3xl text-cloud">{d.name}</h3>
            <p className="mt-3 text-lg leading-relaxed text-cloud-muted">{d.line}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  </Section>
);

/* --------------------------- Access Form ------------------------------ */
const Field = ({ label, name, value, onChange, error, type = "text", placeholder, required }) => (
  <div>
    <label htmlFor={name} className="mb-2 block text-sm text-cloud-muted">
      {label}
      {required && <span className="ml-1 text-ember-soft">*</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-invalid={error ? "true" : "false"}
      className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-cloud placeholder-cloud-faint outline-none transition-colors focus:bg-white/[0.05] ${
        error ? "border-ember/60 focus:border-ember" : "border-white/10 focus:border-aqua/50"
      }`}
    />
    {error && <p className="mt-1.5 text-sm text-ember-soft">{error}</p>}
  </div>
);

const RequestForm = () => {
  const [form, setForm] = useState({ name: "", fund: "", email: "", website: "", interest: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.fund.trim()) e.fund = "Please enter your fund or firm.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Please enter a valid email address.";
    return e;
  };

  // Front-end only - no network request is made. Just validate + confirm inline.
  const onSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    setErrors(e2);
    if (Object.keys(e2).length === 0) setSubmitted(true);
  };

  return (
    <Card hover={false} className="h-full">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-full flex-col items-center justify-center py-10 text-center"
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 18 }}
              className="mb-5 inline-flex rounded-2xl bg-aqua/10 p-4 text-aqua"
            >
              <CheckCircle2 className="h-9 w-9" />
            </motion.div>
            <h3 className="font-sora text-2xl text-cloud">Request received - we'll be in touch.</h3>
            <p className="mt-3 max-w-sm text-cloud-muted">
              Our team reviews every request manually. Approved investors receive access to the
              private data room.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onSubmit={onSubmit}
            noValidate
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                name="name"
                value={form.name}
                onChange={onChange}
                error={errors.name}
                placeholder="Your full name"
                required
              />
              <Field
                label="Fund / Firm"
                name="fund"
                value={form.fund}
                onChange={onChange}
                error={errors.fund}
                placeholder="Fund or firm name"
                required
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                error={errors.email}
                placeholder="you@fund.com"
                required
              />
              <Field
                label="Website"
                name="website"
                value={form.website}
                onChange={onChange}
                error={errors.website}
                placeholder="fund.com (optional)"
              />
            </div>
            <div>
              <label htmlFor="interest" className="mb-2 block text-sm text-cloud-muted">
                Interest
              </label>
              <textarea
                id="interest"
                name="interest"
                rows={4}
                value={form.interest}
                onChange={onChange}
                placeholder="A line or two on your thesis and what you'd like to explore."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-cloud placeholder-cloud-faint outline-none transition-colors focus:border-aqua/50 focus:bg-white/[0.05]"
              />
            </div>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-cloud-faint">
                Reviewed manually. No financials are shared on this page.
              </p>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2 border border-white bg-white px-7 py-3.5 text-[15px] font-medium text-ink transition-all duration-300 hover:bg-white/90"
              >
                Submit request
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </Card>
  );
};

const RequestSection = () => (
  <Section id="request" className="border-t border-white/10">
    <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
      {/* Left: context + reassurance */}
      <div className="lg:col-span-2">
        <Eyebrow>Private Access</Eyebrow>
        <Reveal delay={0.05} className="mt-5">
          <Heading as="h2" gradient="aqua" size="lg">
            Request investor access.
          </Heading>
        </Reveal>
        <Reveal delay={0.12} className="mt-6 text-lg text-cloud-muted">
          The public site stays high-level by design. Qualified investors can request access to the
          private data room, where the full picture lives - reviewed and approved on a case-by-case
          basis.
        </Reveal>

        <Reveal delay={0.18} className="mt-8 space-y-3">
          <div className="flex items-start gap-3 text-cloud-muted">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-aqua" />
            <span>Every request is reviewed by the founding team.</span>
          </div>
          <div className="flex items-start gap-3 text-cloud-muted">
            <Lock className="mt-0.5 h-5 w-5 shrink-0 text-aqua" />
            <span>Sensitive materials unlock only on approval.</span>
          </div>
        </Reveal>

        <Reveal delay={0.24} className="mt-8 flex flex-wrap items-center gap-3">
          <CTAButton variant="secondary" href={CALENDLY} size="sm">
            Book a call
          </CTAButton>
          <a
            href={`mailto:${EMAILS.investors}`}
            className="text-sm text-cloud-muted underline-offset-4 transition-colors hover:text-cloud hover:underline"
          >
            {EMAILS.investors}
          </a>
        </Reveal>
      </div>

      {/* Right: the form */}
      <Reveal delay={0.1} className="lg:col-span-3">
        <RequestForm />
      </Reveal>
    </div>
  </Section>
);

/* ------------------------- Private Data Room -------------------------- */
const DataRoom = () => (
  <Section id="data-room" className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>Private Data Room</Eyebrow>
      <Reveal delay={0.05} className="mt-5">
        <Heading as="h2" gradient="ember" size="lg">
          Everything, behind the lock.
        </Heading>
      </Reveal>
      <Reveal delay={0.12} className="mt-6 text-lg text-cloud-muted">
        The full detail lives in an access-controlled data room. Below is what it contains - the
        materials themselves are unlocked only after your request is approved.
      </Reveal>
    </div>

    <Reveal delay={0.15} className="mt-12">
      <Card hover={false} className="relative overflow-hidden">
        {/* Header row */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="inline-flex rounded-xl bg-white/5 p-3 text-ember-soft">
              <Lock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-sora text-xl text-cloud">Access-controlled</h3>
              <p className="text-sm text-cloud-muted">Unlocked on approval - no figures shown here.</p>
            </div>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-wider text-cloud-faint">
            <Lock className="h-3.5 w-3.5" />
            Locked
          </span>
        </div>

        {/* Contents grid */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DATA_ROOM.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05}>
              <div className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 transition-colors hover:border-white/20">
                <div className="flex items-center gap-3">
                  <span className="text-cloud-faint transition-colors group-hover:text-aqua">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm text-cloud">{item.label}</span>
                </div>
                <Lock className="h-4 w-4 shrink-0 text-cloud-faint" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm text-cloud-muted">
            Approved investors receive a secure link. Nothing above is disclosed on the public site.
          </p>
          <CTAButton variant="primary" onClick={scrollToRequest} arrow>
            Request access
          </CTAButton>
        </div>
      </Card>
    </Reveal>
  </Section>
);

/* ---------------------------- Closing CTA ----------------------------- */
const ClosingCTA = () => (
  <Section id="engage" className="border-t border-white/10">
    <Card className="text-center" hover={false}>
      <Reveal>
        <Heading as="h2" gradient="ember" size="md">
          Let's talk.
        </Heading>
      </Reveal>
      <Reveal delay={0.1} className="mx-auto mt-4 max-w-xl text-cloud-muted">
        Request access to the private data room, or book a call with the founding team.
      </Reveal>
      <Reveal delay={0.18} className="mt-8 flex flex-wrap justify-center gap-3">
        <CTAButton variant="primary" onClick={scrollToRequest} arrow>
          Request investor access
        </CTAButton>
        <CTAButton variant="secondary" href={CALENDLY}>
          Book a call
        </CTAButton>
      </Reveal>
    </Card>
  </Section>
);

/* ------------------------------- Page --------------------------------- */
const Investors = () => {
  useSEO(
    "Investor Relations - IvishAI",
    "IvishAI: infrastructure operating systems for communication and commerce. Request investor access."
  );

  return (
    <PageShell>
      <Hero />
      <Descriptors />
      <RequestSection />
      <DataRoom />
      <ClosingCTA />
    </PageShell>
  );
};

export default Investors;
