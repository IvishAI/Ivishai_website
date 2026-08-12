import React from "react";
import { Link } from "react-router-dom";
import {
  Check, Receipt, BookOpen, Boxes, BarChart3, ShieldCheck, Sparkles,
  ArrowRight, ArrowUpRight, Star, Store, Zap,
} from "lucide-react";
import { Section, Eyebrow, Card, Reveal, CountUp, AmbientBackground } from "../../components/site";
import SeraShell from "../../components/sera/SeraShell";
import useSEO from "../../lib/useSEO";
import { SERA, SERA_PROMISES, SERA_FEATURES, SERA_PRICING, SERA_ZONES } from "../../data/sera";

const FICONS = { Receipt, BookOpen, Boxes, BarChart3, ShieldCheck, Sparkles };

const Hero = () => (
  <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
    <AmbientBackground variant="ember" />
    <div className="container-site">
      <Reveal as="span" y={0}><Eyebrow>Retail Infrastructure · A product of IvishAI</Eyebrow></Reveal>
      <Reveal delay={0.08}>
        <h1 className="mt-6 font-sora text-5xl md:text-7xl lg:text-[82px] leading-[1.02] tracking-tightest text-gradient-ember">
          {SERA.hero}
        </h1>
      </Reveal>
      <Reveal delay={0.16} className="mt-4 font-sora text-2xl md:text-3xl text-cloud">{SERA.category}</Reveal>
      <Reveal delay={0.24} className="mt-6 max-w-2xl text-lg text-cloud-muted">{SERA.what}</Reveal>
      <Reveal delay={0.34} className="mt-8 flex flex-wrap gap-3">
        <a href={SERA.playStore} className="group inline-flex items-center gap-2 rounded-md bg-ember px-7 py-3.5 font-medium text-white transition-all hover:bg-ember-soft">
          Start free in 60 seconds <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <a href="#pricing" className="inline-flex items-center gap-2 rounded-md border border-white/70 px-7 py-3.5 font-medium text-cloud transition-all hover:bg-white/10">See pricing</a>
      </Reveal>
      <div className="mt-10 flex flex-wrap gap-3">
        {SERA_PROMISES.map((p, i) => (
          <Reveal key={p} delay={0.4 + i * 0.06}>
            <div className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm text-cloud">
              <Check className="h-4 w-4 text-ember-soft" /> {p}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const WhySera = () => (
  <Section className="border-t border-white/10">
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <Eyebrow>Why Sera</Eyebrow>
        <Reveal as="h2" delay={0.05} className="mt-5 font-sora text-4xl md:text-5xl text-gradient-ember">
          Built for shopkeepers, not accountants.
        </Reveal>
        <Reveal delay={0.12} className="mt-6 text-lg text-cloud-muted">{SERA.why}</Reveal>
      </div>
      <Reveal delay={0.1}>
        <Card hover={false} className="text-center">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="font-sora text-5xl text-gradient-ember"><CountUp end={28} /></div>
              <div className="mt-1 text-sm text-cloud-muted">Industries</div>
            </div>
            <div>
              <div className="font-sora text-5xl text-gradient-ember"><CountUp end={6} /></div>
              <div className="mt-1 text-sm text-cloud-muted">Zones</div>
            </div>
          </div>
          <div className="mt-6 border-t border-white/10 pt-6 font-sora text-2xl text-cloud">{SERA.scale}</div>
        </Card>
      </Reveal>
    </div>
  </Section>
);

const Pricing = () => (
  <Section id="pricing" className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>Pricing</Eyebrow>
      <Reveal as="h2" delay={0.05} className="mt-5 font-sora text-4xl md:text-5xl text-gradient-ember">Billing is free. Forever.</Reveal>
    </div>
    <div className="mt-12 grid gap-5 lg:grid-cols-3">
      {SERA_PRICING.map((p, i) => (
        <Reveal key={p.name} delay={i * 0.1}>
          <Card hover={false} className={`flex h-full flex-col ${p.highlight ? "ring-2 ring-ember/60" : ""}`}>
            {p.highlight && <span className="mb-3 inline-flex w-max rounded-full bg-ember/15 px-3 py-1 text-xs font-medium text-ember-soft">Most shops start here</span>}
            <h3 className="font-sora text-2xl text-cloud">{p.name}</h3>
            <div className={`mt-2 font-sora text-3xl ${p.highlight ? "text-gradient-ember" : "text-cloud"}`}>{p.price}</div>
            <p className="mt-4 text-sm text-cloud-muted">{p.desc}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  </Section>
);

const Features = () => (
  <Section className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>Features</Eyebrow>
      <Reveal as="h2" delay={0.05} className="mt-5 font-sora text-4xl md:text-5xl text-cloud">Everything your shop needs. One app.</Reveal>
    </div>
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SERA_FEATURES.map((f, i) => {
        const FIcon = FICONS[f.icon] || Zap;
        return (
          <Reveal key={f.title} delay={i * 0.06}>
            <Card className="h-full">
              <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3 text-ember-soft"><FIcon className="h-6 w-6" /></div>
              <h3 className="font-sora text-lg text-cloud">{f.title}</h3>
              <p className="mt-2 text-sm text-cloud-muted">{f.body}</p>
            </Card>
          </Reveal>
        );
      })}
    </div>
  </Section>
);

const SeraAI = () => (
  <Section className="border-t border-white/10">
    <Card hover={false} className="relative overflow-hidden">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-ember-soft"><Sparkles className="h-4 w-4" /> SERA AI</div>
          <h2 className="mt-3 font-sora text-3xl md:text-4xl text-gradient-ember">Let SERA handle the setup.</h2>
          <p className="mt-4 text-cloud-muted">SERA AI sets up your shop, sorts your inventory and keeps your records ready, so you can just run your business.</p>
        </div>
        <div className="flex justify-center">
          <div className="inline-flex rounded-3xl bg-white/5 p-8 text-ember-soft"><Sparkles className="h-16 w-16" /></div>
        </div>
      </div>
    </Card>
  </Section>
);

const Reviews = () => (
  <Section className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>Real Shops Say</Eyebrow>
      <Reveal as="h2" delay={0.05} className="mt-5 font-sora text-4xl md:text-5xl text-cloud">Shopkeepers, in their own words.</Reveal>
    </div>
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <Reveal key={i} delay={i * 0.08}>
          <Card className="h-full">
            <div className="flex gap-0.5 text-ember-soft">{Array.from({ length: 5 }).map((__, s) => <Star key={s} className="h-4 w-4 fill-current" />)}</div>
            <div className="mt-4 h-3 w-3/4 rounded bg-white/10" />
            <div className="mt-2 h-3 w-2/3 rounded bg-white/10" />
            <div className="mt-5 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-white/10" />
              <div className="h-3 w-20 rounded bg-white/10" />
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
    <p className="mt-8 text-sm text-cloud-faint">Real shopkeeper reviews, photos and ratings are being collected and will appear here.</p>
  </Section>
);

const Industries = () => (
  <Section id="industries" className="border-t border-white/10">
    <div className="max-w-2xl">
      <Eyebrow>28 Industries · 6 Zones</Eyebrow>
      <Reveal as="h2" delay={0.05} className="mt-5 font-sora text-4xl md:text-5xl text-gradient-ember">Find your shop.</Reveal>
    </div>
    <div className="mt-12 space-y-10">
      {SERA_ZONES.map((z, zi) => (
        <div key={z.zone}>
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-cloud-muted">{z.zone}</span>
            <h3 className="font-sora text-xl text-cloud">{z.name}</h3>
            {z.restricted && <span className="rounded-full bg-ember/15 px-2.5 py-0.5 text-xs text-ember-soft">Compliance built in</span>}
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {z.industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 0.04}>
                <Link to={`/sera/${ind.slug}`} className="group relative flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-ember/30 hover:bg-white/[0.05]">
                  {/* hover popup */}
                  <div className="pointer-events-none absolute inset-x-2 bottom-full z-20 mb-2 translate-y-1 rounded-xl border border-ember/30 bg-ink-700/95 p-4 text-left opacity-0 shadow-lift backdrop-blur transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[11px] uppercase tracking-wider text-ember-soft">Money question</p>
                    <p className="mt-1 text-sm text-cloud">{ind.money}</p>
                    <p className="mt-2 text-xs text-cloud-muted">Benefit: {ind.benefit}</p>
                  </div>
                  <div>
                    <div className="text-cloud">{ind.name}</div>
                    <div className="text-xs text-cloud-faint">{ind.pain}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-cloud-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </div>
    <p className="mt-8 text-sm text-cloud-faint">27 industries detailed. The 28th is being finalised.</p>
  </Section>
);

const ClosingCTA = () => (
  <Section className="border-t border-white/10">
    <Card hover={false} className="text-center">
      <div className="mx-auto mb-5 inline-flex rounded-2xl bg-white/5 p-4 text-ember-soft"><Store className="h-8 w-8" /></div>
      <Reveal as="h2" className="font-sora text-3xl md:text-5xl text-gradient-ember">Start billing in 60 seconds.</Reveal>
      <Reveal delay={0.1} className="mx-auto mt-4 max-w-xl text-cloud-muted">Free forever. Works offline. No hardware. Just your phone.</Reveal>
      <Reveal delay={0.18} className="mt-8">
        <a href={SERA.playStore} className="group inline-flex items-center gap-2 rounded-md bg-ember px-8 py-3.5 font-medium text-white transition-all hover:bg-ember-soft">
          Start free <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </Reveal>
    </Card>
  </Section>
);

const SeraHome = () => {
  useSEO(
    "Sera - Free Billing, GST & Khata App | POS for Every Shop",
    "Sera is a free billing, GST and Khata app for Indian shops. Offline POS, inventory and compliance in one app. Setup in 60 seconds. No hardware needed."
  );
  return (
    <SeraShell>
      <Hero />
      <WhySera />
      <Pricing />
      <Features />
      <SeraAI />
      <Reviews />
      <Industries />
      <ClosingCTA />
    </SeraShell>
  );
};

export default SeraHome;
