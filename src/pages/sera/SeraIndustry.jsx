import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Smartphone, BadgeCheck, TrendingUp } from "lucide-react";
import { Section, Card, Reveal, AmbientBackground } from "../../components/site";
import SeraShell from "../../components/sera/SeraShell";
import useSEO from "../../lib/useSEO";
import { getSeraIndustry, SERA } from "../../data/sera";

const SeraIndustry = () => {
  const { slug } = useParams();
  const ind = getSeraIndustry(slug);

  useSEO(
    ind ? `${ind.name} Billing & Khata App | Sera` : "Sera Industries",
    ind ? `${ind.name} on Sera - ${ind.benefit}. Free billing, Khata and offline POS. Start in 60 seconds.` : "Sera for every shop."
  );

  if (!ind) return <Navigate to="/sera" replace />;

  return (
    <SeraShell>
      {/* Hero - lead with the money question */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
        <AmbientBackground variant="ember" />
        <div className="container-site">
          <Reveal as="div" y={0}>
            <Link to="/sera#industries" className="mb-6 inline-flex items-center gap-2 text-sm text-cloud-muted transition-colors hover:text-white">
              <ArrowLeft className="h-4 w-4" /> All shops
            </Link>
          </Reveal>
          <Reveal as="span" y={0}>
            <span className="eyebrow">
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: "linear-gradient(135deg,#E26426,#AD4613)" }} />
              {ind.name} on Sera · {ind.zone}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-sora text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-gradient-ember">
              {ind.money}
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="mt-6 text-lg text-cloud-muted">
            The biggest problem for {ind.name.toLowerCase()} shops: <span className="text-cloud">{ind.pain}</span>. Sera shows you the answer instantly.
          </Reveal>
          <Reveal delay={0.3} className="mt-8">
            <a href={SERA.playStore} className="group inline-flex items-center gap-2 rounded-md bg-ember px-7 py-3.5 font-medium text-white transition-all hover:bg-ember-soft">
              Start free in 60 seconds <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Demo -> Proof -> Benefit */}
      <Section className="border-t border-white/10">
        <div className="grid gap-4 md:grid-cols-3">
          <Reveal>
            <Card hover={false} className="h-full">
              <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3 text-ember-soft"><Smartphone className="h-6 w-6" /></div>
              <span className="text-xs uppercase tracking-wider text-cloud-faint">See it on screen</span>
              <p className="mt-2 font-sora text-xl text-cloud">{ind.demo}</p>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card hover={false} className="h-full">
              <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3 text-ember-soft"><BadgeCheck className="h-6 w-6" /></div>
              <span className="text-xs uppercase tracking-wider text-cloud-faint">Proof</span>
              <p className="mt-2 font-sora text-xl text-cloud">{ind.proof}</p>
            </Card>
          </Reveal>
          <Reveal delay={0.16}>
            <Card hover={false} className="h-full">
              <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3 text-ember-soft"><TrendingUp className="h-6 w-6" /></div>
              <span className="text-xs uppercase tracking-wider text-cloud-faint">Benefit</span>
              <p className="mt-2 font-sora text-xl text-cloud">{ind.benefit}</p>
            </Card>
          </Reveal>
        </div>

        {ind.restricted && (
          <Reveal delay={0.1} className="mt-6">
            <div className="glass rounded-xl px-5 py-4 text-sm text-cloud-muted">
              Zone 6 shops get built-in excise and compliance tracking on the Restricted Retail plan (₹299-999/month) - most billing apps don't offer this.
            </div>
          </Reveal>
        )}
      </Section>

      {/* Install CTA */}
      <Section className="border-t border-white/10">
        <Card hover={false} className="text-center">
          <Reveal as="h2" className="font-sora text-3xl md:text-4xl text-gradient-ember">Ready for your {ind.name.toLowerCase()} shop?</Reveal>
          <Reveal delay={0.1} className="mx-auto mt-4 max-w-xl text-cloud-muted">Free forever. Works offline. No hardware. Setup in 60 seconds.</Reveal>
          <Reveal delay={0.18} className="mt-8">
            <a href={SERA.playStore} className="group inline-flex items-center gap-2 rounded-md bg-ember px-8 py-3.5 font-medium text-white transition-all hover:bg-ember-soft">
              Start free <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </Card>
      </Section>
    </SeraShell>
  );
};

export default SeraIndustry;
