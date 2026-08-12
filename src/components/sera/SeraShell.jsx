import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { SERA } from "../../data/sera";
import useScrollManager from "../../lib/useScrollManager";

const NAV = [
  { label: "Home", to: "/sera" },
  { label: "Pricing", to: "/sera#pricing" },
  { label: "Industries", to: "/sera#industries" },
];

const Wordmark = () => (
  <Link to="/sera" className="font-sora text-2xl tracking-tight text-gradient-ember" aria-label="Sera home">
    Sera
  </Link>
);

const StartFree = ({ className = "" }) => (
  <a
    href={SERA.playStore}
    className={`group inline-flex items-center gap-1.5 rounded-md bg-ember px-4 py-2 text-sm font-medium text-white transition-all hover:bg-ember-soft ${className}`}
  >
    Start free <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
  </a>
);

const SeraHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-site flex items-center justify-between">
        <Wordmark />
        <nav className="hidden items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-2 py-1.5 md:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="rounded-lg px-3 py-1.5 text-sm text-cloud-muted transition-colors hover:text-white">{n.label}</Link>
          ))}
        </nav>
        <div className="hidden md:block"><StartFree /></div>
        <button className="rounded-lg p-2 text-white hover:bg-white/10 md:hidden" onClick={() => setOpen(true)} aria-label="Open menu"><Menu className="h-6 w-6" /></button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
            <motion.div className="fixed right-0 top-0 z-50 h-full w-[82%] max-w-sm border-l border-white/10 bg-ink-700 p-6 md:hidden" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 320, damping: 34 }}>
              <div className="flex items-center justify-between">
                <Wordmark />
                <button className="rounded-lg p-2 text-white hover:bg-white/10" onClick={() => setOpen(false)} aria-label="Close menu"><X className="h-6 w-6" /></button>
              </div>
              <nav className="mt-10 flex flex-col gap-1">
                {NAV.map((n) => (
                  <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-lg text-cloud-muted transition-all hover:translate-x-1 hover:text-white">{n.label}</Link>
                ))}
                <StartFree className="mt-4 justify-center py-3" />
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const SeraFooter = () => (
  <footer className="border-t border-white/10 bg-ink-800">
    <div className="container-site py-14">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
        <div className="max-w-sm">
          <div className="font-sora text-2xl text-gradient-ember">Sera</div>
          <p className="mt-3 text-sm text-cloud-muted">{SERA.category}</p>
          <p className="mt-2 text-sm text-cloud-faint">A product of IvishAI.</p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm">
          <div>
            <h4 className="mb-3 font-semibold text-white">Sera</h4>
            <ul className="space-y-2 text-cloud-muted">
              <li><Link to="/sera" className="hover:text-white">Home</Link></li>
              <li><Link to="/sera#pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/sera#industries" className="hover:text-white">Industries</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Ecosystem</h4>
            <ul className="space-y-2 text-cloud-muted">
              <li><Link to="/" className="hover:text-white">IvishAI</Link></li>
              <li><Link to="/verbx" className="hover:text-white">VerbX</Link></li>
              <li><a href={`mailto:${SERA.contactEmail}`} className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-white/10 pt-6 text-sm text-cloud-faint">© Ivish AI Quantum Pvt Ltd 2026 · Sera</div>
    </div>
  </footer>
);

const SeraShell = ({ children }) => {
  useScrollManager();
  return (
    <div className="min-h-screen bg-ink text-cloud">
      <SeraHeader />
      <main>{children}</main>
      <SeraFooter />
    </div>
  );
};

export default SeraShell;
