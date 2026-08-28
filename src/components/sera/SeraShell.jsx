import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { SERA } from '../../data/sera'
import useScrollManager from '../../lib/useScrollManager'

const NAV = [
  { label: 'Home', to: '/sera' },
  { label: 'Pricing', to: '/sera#pricing' },
  { label: 'Industries', to: '/sera#industries' },
]

const S = `
  .sera-shell-header {
    position: fixed; inset-inline: 0; top: 0; z-index: 50;
    transition: background 0.35s ease, border-color 0.35s ease, padding 0.35s ease;
    padding: 20px 0;
  }
  .sera-shell-header.scrolled {
    background: rgba(0,0,0,0.90);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255,255,255,0.08);
    padding: 12px 0;
  }
  .sera-shell-header .sh-inner {
    max-width: 1160px; margin: 0 auto; padding: 0 24px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .sh-wordmark {
    font-family: 'Sora', -apple-system, sans-serif;
    font-weight: 700; font-size: 1.5rem; letter-spacing: -0.04em;
    color: #ffffff;
    text-decoration: none;
  }
  .sh-nav {
    display: flex; align-items: center; gap: 4px;
    background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.11);
    border-radius: 14px; padding: 6px 8px;
  }
  .sh-nav a {
    border-radius: 10px; padding: 7px 14px; font-size: 0.875rem;
    color: rgba(255,255,255,0.7); text-decoration: none;
    transition: background 0.25s ease, color 0.25s ease;
  }
  .sh-nav a:hover { background: rgba(255,255,255,0.10); color: #fff; }
  .sh-cta {
    display: inline-flex; align-items: center; gap: 6px;
    background: linear-gradient(135deg, #FF6B2B, #E04F10);
    color: #fff; padding: 10px 20px; border-radius: 999px;
    font-size: 0.875rem; font-weight: 560; text-decoration: none;
    box-shadow: 0 8px 20px rgba(255,107,43,0.32);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .sh-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(255,107,43,0.42); }
  .sh-cta svg { width: 14px; height: 14px; }
  .sh-hamburger {
    background: none; border: none; cursor: pointer; padding: 8px;
    border-radius: 10px; color: #fff; transition: background 0.25s ease;
    display: none; align-items: center; justify-content: center;
  }
  .sh-hamburger:hover { background: rgba(255,255,255,0.10); }

  /* Drawer rendered outside header */
  .sh-overlay {
    position: fixed; inset: 0; z-index: 200;
    background: rgba(0,0,0,0.65); backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
  .sh-drawer {
    position: fixed; right: 0; top: 0; bottom: 0; z-index: 201;
    width: 82%; max-width: 340px;
    background: #000; border-left: 1px solid rgba(255,255,255,0.08);
    padding: 24px;
  }
  .sh-drawer-top { display: flex; align-items: center; justify-content: space-between; }
  .sh-drawer-close {
    background: none; border: none; cursor: pointer; padding: 8px;
    border-radius: 10px; color: #fff;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.25s ease;
  }
  .sh-drawer-close:hover { background: rgba(255,255,255,0.10); }
  .sh-drawer-nav { margin-top: 40px; display: flex; flex-direction: column; gap: 4px; }
  .sh-drawer-nav a {
    padding: 14px 12px; border-radius: 10px;
    font-size: 1.1rem; color: rgba(255,255,255,0.72); text-decoration: none;
    transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
    display: block;
  }
  .sh-drawer-nav a:hover { background: rgba(255,255,255,0.07); color: #fff; transform: translateX(4px); }
  .sh-drawer-cta {
    display: flex; align-items: center; justify-content: center; gap: 6px;
    background: linear-gradient(135deg, #FF6B2B, #E04F10); color: #fff;
    padding: 14px 20px; border-radius: 999px; font-weight: 560;
    font-size: 0.95rem; text-decoration: none; margin-top: 16px;
  }

  /* Footer */
  .sera-footer {
    background: #F3F0EA; border-top: 1px solid #E7E2D9;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  .sera-footer .sf-inner { max-width: 1160px; margin: 0 auto; padding: 64px 24px 0; }
  .sf-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 40px; flex-wrap: wrap; }
  .sf-wordmark { font-family: 'Sora', -apple-system, sans-serif; font-weight: 700; font-size: 1.7rem; letter-spacing: -0.04em; color: #14151A; }
  .sf-tagline { margin-top: 10px; font-size: 0.9rem; color: #55565F; max-width: 280px; line-height: 1.55; }
  .sf-by { margin-top: 6px; font-size: 0.8rem; color: #8B8C94; }
  .sf-links { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
  .sf-col h4 { font-weight: 650; font-size: 0.85rem; color: #14151A; margin-bottom: 14px; }
  .sf-col ul { list-style: none; display: flex; flex-direction: column; gap: 9px; }
  .sf-col a { font-size: 0.88rem; color: #55565F; text-decoration: none; transition: color 0.25s ease; }
  .sf-col a:hover { color: #FF6B2B; }
  .sf-bottom { margin-top: 40px; padding: 20px 0; border-top: 1px solid #E7E2D9; font-size: 0.82rem; color: #8B8C94; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }

  /* IvishAI bottom wordmark */
  .sf-ivish-wordmark {
    margin-top: 40px;
  }
  .sf-ivish-wordmark svg {
    width: 240px; height: auto; display: block; opacity: 0.65;
  }

  @media (max-width: 720px) {
    .sh-nav, .sh-cta { display: none !important; }
    .sh-hamburger { display: flex !important; }
    .sf-top { flex-direction: column; gap: 32px; }
    .sf-links { grid-template-columns: 1fr 1fr; }
  }
`

const SeraHeader = ({ onOpenMenu }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`sera-shell-header${scrolled ? ' scrolled' : ''}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="sh-inner">
        <Link to="/sera" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }} aria-label="Sera home">
          <img src="/sera-icon.png" alt="Sera" style={{ width: 32, height: 32, borderRadius: 8 }} />
          <span className="sh-wordmark">Sera</span>
        </Link>
        <nav className="sh-nav" aria-label="Main">
          {NAV.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
        </nav>
        <a href={SERA.playStore} className="sh-cta">Start free <ArrowRight size={14} /></a>
        <button className="sh-hamburger" onClick={onOpenMenu} aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>
    </motion.header>
  )
}

const SeraDrawer = ({ open, onClose }) => (
  <AnimatePresence>
    {open && (
      <>
        <motion.div className="sh-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
        <motion.div className="sh-drawer" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 320, damping: 34 }}>
          <div className="sh-drawer-top">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src="/sera-icon.png" alt="Sera" style={{ width: 32, height: 32, borderRadius: 8 }} />
              <span className="sh-wordmark">Sera</span>
            </div>
            <button className="sh-drawer-close" onClick={onClose} aria-label="Close menu"><X size={22} /></button>
          </div>
          <nav className="sh-drawer-nav">
            {NAV.map((n) => <Link key={n.to} to={n.to} onClick={onClose}>{n.label}</Link>)}
            <a href={SERA.playStore} className="sh-drawer-cta" onClick={onClose}>Start free <ArrowRight size={14} /></a>
          </nav>
        </motion.div>
      </>
    )}
  </AnimatePresence>
)

const SeraFooter = () => (
  <footer className="sera-footer">
    <div className="sf-inner">
      <div className="sf-top">
        <div>
          <div className="sf-wordmark">Sera</div>
          <p className="sf-tagline">{SERA.category}</p>
          <p className="sf-by">A product of IvishAI.</p>
        </div>
        <div className="sf-links">
          <div className="sf-col">
            <h4>Sera</h4>
            <ul>
              <li><Link to="/sera">Home</Link></li>
              <li><Link to="/sera#pricing">Pricing</Link></li>
              <li><Link to="/sera#industries">Industries</Link></li>
            </ul>
          </div>
          <div className="sf-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/">IvishAI</Link></li>
              <li><Link to="/verbx">VerbX</Link></li>
              <li><a href={`mailto:${SERA.contactEmail}`}>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* IvishAI wordmark — same as verbxweb footer */}
      <div className="sf-ivish-wordmark" aria-hidden="true">
        <svg viewBox="0 0 733 168" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 164.28V2.22H21.756V164.28H0Z" fill="url(#sf_g0)" />
          <path d="M87.1246 164.28L46.7206 45.732H68.9206L108.437 164.28H87.1246ZM92.4526 164.28V147.408H118.205V164.28H92.4526ZM102.665 164.28L137.075 45.732H157.943L122.867 164.28H102.665Z" fill="url(#sf_g1)" />
          <path d="M187.156 164.28V45.732H208.468V164.28H187.156ZM168.952 62.604V45.732H208.468V62.604H168.952ZM193.15 26.64C188.414 26.64 184.862 25.382 182.494 22.866C180.274 20.35 179.164 17.168 179.164 13.32C179.164 9.472 180.274 6.28999 182.494 3.77399C184.862 1.258 188.414 0 193.15 0C197.886 0 201.364 1.258 203.584 3.77399C205.952 6.28999 207.136 9.472 207.136 13.32C207.136 17.168 205.952 20.35 203.584 22.866C201.364 25.382 197.886 26.64 193.15 26.64Z" fill="url(#sf_g2)" />
          <path d="M284.085 167.832C268.545 167.832 256.483 164.502 247.899 157.842C239.463 151.182 235.097 142.08 234.801 130.536H254.781C255.077 135.124 257.371 139.49 261.663 143.634C266.103 147.63 273.577 149.628 284.085 149.628C293.557 149.628 300.809 147.778 305.841 144.078C310.873 140.23 313.389 135.568 313.389 130.092C313.389 125.208 311.539 121.434 307.839 118.77C304.139 115.958 298.145 114.108 289.857 113.22L276.981 111.888C265.733 110.704 256.557 107.374 249.453 101.898C242.349 96.274 238.797 88.43 238.797 78.366C238.797 70.818 240.721 64.38 244.569 59.052C248.417 53.576 253.745 49.432 260.553 46.62C267.361 43.66 275.205 42.18 284.085 42.18C297.405 42.18 308.209 45.14 316.497 51.06C324.785 56.98 329.077 65.786 329.373 77.478H309.393C309.245 72.742 307.025 68.746 302.733 65.49C298.589 62.086 292.373 60.384 284.085 60.384C275.797 60.384 269.507 62.086 265.215 65.49C260.923 68.894 258.777 73.186 258.777 78.366C258.777 82.806 260.257 86.358 263.217 89.022C266.325 91.686 271.357 93.388 278.313 94.128L291.189 95.46C303.917 96.792 314.129 100.344 321.825 106.116C329.521 111.74 333.369 119.732 333.369 130.092C333.369 137.492 331.223 144.078 326.931 149.85C322.787 155.474 317.015 159.914 309.615 163.17C302.215 166.278 293.705 167.832 284.085 167.832Z" fill="url(#sf_g3)" />
          <path d="M359.817 164.28V2.22H381.129V99.012H375.801C375.801 87.32 377.281 77.256 380.241 68.82C383.349 60.236 388.085 53.65 394.449 49.062C400.813 44.474 408.953 42.18 418.869 42.18H419.757C433.965 42.18 444.695 46.916 451.947 56.388C459.199 65.712 462.825 79.106 462.825 96.57V164.28H441.513V92.13C441.513 82.51 438.775 75.036 433.299 69.708C427.971 64.38 421.015 61.716 412.431 61.716C402.959 61.716 395.337 64.898 389.565 71.262C383.941 77.478 381.129 85.692 381.129 95.904V164.28H359.817Z" fill="url(#sf_g4)" />
          <path d="M529.245 164.28L587.63 2.22H624.483L684.645 164.28H662.223L607.833 16.428L618.489 21.756H592.293L603.615 16.428L551 164.28H529.245ZM564.099 115.884L571.424 96.348H641.355L648.681 115.884H564.099Z" fill="url(#sf_g5)" />
          <path d="M710.365 164.28V2.22H732.121V164.28H710.365Z" fill="url(#sf_g6)" />
          <defs>
            <linearGradient id="sf_g0" x1="-23.9761" y1="89.2798" x2="757.024" y2="89.2798" gradientUnits="userSpaceOnUse"><stop stopColor="#8B8C94" /><stop offset="1" stopColor="#45464C" /></linearGradient>
            <linearGradient id="sf_g1" x1="-23.9761" y1="89.2798" x2="757.024" y2="89.2798" gradientUnits="userSpaceOnUse"><stop stopColor="#8B8C94" /><stop offset="1" stopColor="#45464C" /></linearGradient>
            <linearGradient id="sf_g2" x1="-23.9761" y1="89.2798" x2="757.024" y2="89.2798" gradientUnits="userSpaceOnUse"><stop stopColor="#8B8C94" /><stop offset="1" stopColor="#45464C" /></linearGradient>
            <linearGradient id="sf_g3" x1="-23.9761" y1="89.2798" x2="757.024" y2="89.2798" gradientUnits="userSpaceOnUse"><stop stopColor="#8B8C94" /><stop offset="1" stopColor="#45464C" /></linearGradient>
            <linearGradient id="sf_g4" x1="-23.9761" y1="89.2798" x2="757.024" y2="89.2798" gradientUnits="userSpaceOnUse"><stop stopColor="#8B8C94" /><stop offset="1" stopColor="#45464C" /></linearGradient>
            <linearGradient id="sf_g5" x1="-23.9761" y1="89.2798" x2="757.024" y2="89.2798" gradientUnits="userSpaceOnUse"><stop stopColor="#8B8C94" /><stop offset="1" stopColor="#45464C" /></linearGradient>
            <linearGradient id="sf_g6" x1="-23.9761" y1="89.2798" x2="757.024" y2="89.2798" gradientUnits="userSpaceOnUse"><stop stopColor="#8B8C94" /><stop offset="1" stopColor="#45464C" /></linearGradient>
          </defs>
        </svg>
      </div>

      <div className="sf-bottom">
        <span>© Ivish AI Quantum Pvt Ltd 2026 · Sera</span>
        <span>Har Dukaan. Ek Sera.</span>
      </div>
    </div>
  </footer>
)

const SeraShell = ({ children }) => {
  useScrollManager()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <div style={{ minHeight: '100vh', background: '#FBFAF8', color: '#14151A' }}>
      <style>{S}</style>
      <SeraHeader onOpenMenu={() => setMenuOpen(true)} />
      <SeraDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>{children}</main>
      <SeraFooter />
    </div>
  )
}

export default SeraShell
