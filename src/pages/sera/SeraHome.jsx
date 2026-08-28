
import { useState, useEffect, useRef } from 'react'
import { Reveal } from '../../components/site'
import useSEO from '../../lib/useSEO'
import SeraShell from '../../components/sera/SeraShell'
import {
  Check, Receipt, BookOpen, Boxes, BarChart3, ShieldCheck, Sparkles,
  Printer, Moon, WifiOff, ScanLine, Bell, Trophy, TrendingUp,
  ArrowRight, Zap,
} from 'lucide-react'
import {
  SERA, SERA_PROMISES, SERA_STATS, SERA_FEATURES, SERA_ZONES, SERA_LANGUAGES, SERA_PRICING, SERA_PREMIUM_PRICES,
} from '../../data/sera'

// ─── Icon map ──────────────────────────────────────────────────────────────────
const FICONS = {
  Receipt, BookOpen, Boxes, BarChart3, ShieldCheck, Sparkles,
  Printer, Moon, WifiOff,
}

// ─── Scoped design system ─────────────────────────────────────────────────────
const CSS = `
@keyframes seraFadeUp { from { opacity:0; transform:translateY(18px) } to { opacity:1; transform:none } }
@keyframes seraMarquee { from { transform:translateX(0) } to { transform:translateX(-50%) } }

.sera-page {
  --s-navy:       #000000;
  --s-navy-deep:  #111111;
  --s-orange:     #FF6B2B;
  --s-orange-l:   #FFB380;
  --s-orange-d:   #E04F10;
  --s-paper:      #FBFAF8;
  --s-paper-dim:  #F3F0EA;
  --s-surface:    #FFFFFF;
  --s-ink:        #14151A;
  --s-ink-s:      #55565F;
  --s-ink-f:      #8B8C94;
  --s-line:       #E7E2D9;
  --s-line-s:     #EFEBE3;
  --fd: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --fm: 'SF Mono', ui-monospace, 'JetBrains Mono', 'Roboto Mono', monospace;
  --ease: cubic-bezier(.16,.8,.24,1);
  --r-m: 20px;
  --r-l: 28px;
  --r-xl: 40px;
  --sh-s: 0 1px 2px rgba(20,21,26,.04), 0 8px 24px rgba(20,21,26,.06);
  --sh-l: 0 4px 10px rgba(20,21,26,.06), 0 20px 48px rgba(20,21,26,.10);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--s-paper);
  color: var(--s-ink);
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
}
.sera-page *, .sera-page *::before, .sera-page *::after { box-sizing: border-box; margin: 0; padding: 0; }
.sera-page a { color: inherit; text-decoration: none; }

/* ── Layout ── */
.s-wrap      { width:100%; max-width:1160px; margin:0 auto; padding:0 24px; }
.s-sec       { padding: 96px 0; }
.s-sec--dim  { background: var(--s-paper-dim); }
.s-sec--navy { background: var(--s-navy); color: #fff; position:relative; overflow:hidden; }
.s-sec--navy::before {
  content:''; position:absolute; top:0; right:-100px;
  width:600px; height:600px; pointer-events:none;
  background: radial-gradient(circle at 70% 0%, color-mix(in srgb,var(--s-orange) 22%,transparent), transparent 60%);
}
.s-split { display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:center; }

/* ── Type ── */
.s-eye {
  display:block; font-family:var(--fm); font-size:11.5px; letter-spacing:.16em;
  text-transform:uppercase; color:var(--s-orange-d); margin-bottom:20px;
}
.s-eye--light { color:var(--s-orange-l); }
.s-eye--muted { color:var(--s-ink-f); }
.s-h1 {
  font-family:var(--fd); font-weight:700; line-height:1.02; letter-spacing:-.04em;
  font-size:clamp(2.8rem,6vw,5rem); color:#fff;
}
.s-h1-grd { background:linear-gradient(140deg,#fff 40%,var(--s-orange-l)); -webkit-background-clip:text; background-clip:text; color:transparent; }
.s-h2 {
  font-family:var(--fd); font-weight:650; line-height:1.08; letter-spacing:-.03em;
  font-size:clamp(1.9rem,3.4vw,2.9rem); color:var(--s-ink);
}
.s-h2--white { color:#fff; }
.s-h3 { font-family:var(--fd); font-weight:640; letter-spacing:-.02em; font-size:clamp(1.1rem,1.7vw,1.4rem); line-height:1.2; color:var(--s-ink); }
.s-lede { font-size:clamp(1.05rem,1.6vw,1.28rem); color:var(--s-ink-s); line-height:1.55; max-width:600px; }
.s-lede--white { color:rgba(255,255,255,.72); }
.s-body { font-size:.94rem; color:var(--s-ink-s); line-height:1.6; }
.mt8{margin-top:8px} .mt12{margin-top:12px} .mt16{margin-top:16px}
.mt20{margin-top:20px} .mt28{margin-top:28px} .mt40{margin-top:40px}
.mt56{margin-top:56px} .mt72{margin-top:72px}

/* ── Buttons ── */
.s-btn-row { display:flex; gap:12px; flex-wrap:wrap; }
.s-btn {
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  padding:14px 28px; border-radius:999px; border:1px solid transparent;
  font-weight:560; font-size:.96rem; cursor:pointer;
  transition:transform .35s var(--ease), box-shadow .35s var(--ease);
}
.s-btn:active { transform:scale(.96); }
.s-btn-orange {
  background:linear-gradient(135deg,var(--s-orange),var(--s-orange-d)); color:#fff;
  box-shadow:0 10px 24px color-mix(in srgb,var(--s-orange) 35%,transparent);
}
.s-btn-orange:hover { transform:translateY(-2px); box-shadow:0 16px 32px color-mix(in srgb,var(--s-orange) 45%,transparent); }
.s-btn-ghost-dark { background:rgba(255,255,255,.10); color:#fff; border-color:rgba(255,255,255,.28); backdrop-filter:blur(4px); }
.s-btn-ghost-dark:hover { background:rgba(255,255,255,.16); transform:translateY(-2px); }
.s-btn-ghost-light { background:var(--s-surface); color:var(--s-ink); border-color:var(--s-line); }
.s-btn-ghost-light:hover { border-color:var(--s-orange); transform:translateY(-2px); box-shadow:var(--sh-s); }

/* ── Hero ── */
.s-hero {
  background:var(--s-navy); color:#fff;
  padding: 168px 0 88px; position:relative; overflow:hidden;
}
.s-hero-inner { max-width:760px; margin:0 auto; text-align:center; position:relative; z-index:1; }
.s-hero-sub { font-family:var(--fd); font-size:clamp(1.2rem,2vw,1.5rem); color:rgba(255,255,255,.7); margin-top:16px; }
.s-promise-row { display:flex; flex-wrap:wrap; justify-content:center; gap:10px; margin-top:32px; }
.s-pill {
  display:inline-flex; align-items:center; gap:6px;
  padding:8px 16px; border-radius:999px;
  background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.14);
  font-size:.84rem; color:rgba(255,255,255,.85);
}
.s-pill svg { width:13px; height:13px; color:var(--s-orange-l); flex-shrink:0; }

/* ── Stats strip ── */
.s-stats-strip { background:var(--s-paper); border-bottom:1px solid var(--s-line); }
.s-stat-grid-4 { display:grid; grid-template-columns:repeat(4,1fr); }
.s-stat { padding:44px 32px; border-left:1px solid var(--s-line); }
.s-stat:first-child { border-left:none; padding-left:0; }
.s-stat-num { font-family:var(--fm); font-size:clamp(2.2rem,4vw,3rem); font-weight:700; letter-spacing:-.03em; line-height:1; color:var(--s-orange); }
.s-stat-lbl { margin-top:8px; color:var(--s-ink-s); font-size:.88rem; }

/* ── Editorial list ── */
.s-ed-list { display:flex; flex-direction:column; }
.s-ed-row {
  display:grid; grid-template-columns:1fr 1.7fr; gap:32px;
  padding:44px 0; border-top:1px solid var(--s-line); align-items:baseline;
}
.s-ed-list .s-ed-row:last-child { border-bottom:1px solid var(--s-line); }
.s-ed-h { font-family:var(--fd); font-weight:650; font-size:clamp(1.3rem,2.2vw,1.7rem); letter-spacing:-.02em; line-height:1.2; color:var(--s-ink); }
.s-ed-b { color:var(--s-ink-s); font-size:.95rem; line-height:1.65; max-width:480px; }

/* ── Product DB dark callout ── */
.s-db-card {
  background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.10);
  border-radius:var(--r-l); padding:36px; position:relative; z-index:1;
}
.s-db-stats { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; }
.s-db-stat { background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.09); border-radius:var(--r-m); padding:22px; text-align:center; }
.s-db-stat-n { font-family:var(--fm); font-size:clamp(1.6rem,2.8vw,2.1rem); font-weight:700; letter-spacing:-.03em; color:var(--s-orange-l); }
.s-db-stat-l { font-size:.76rem; color:rgba(255,255,255,.55); margin-top:6px; }
.s-check-list { list-style:none; display:flex; flex-direction:column; gap:10px; }
.s-check-list li { display:flex; align-items:flex-start; gap:10px; font-size:.9rem; color:rgba(255,255,255,.72); }
.s-check-list li svg { width:15px; height:15px; color:var(--s-orange-l); flex-shrink:0; margin-top:2px; }

/* ── Features index list ── */
.s-feat-list { display:flex; flex-direction:column; }
.s-feat-row {
  display:flex; align-items:flex-start; gap:22px;
  padding:28px 6px; border-top:1px solid var(--s-line);
  transition:background .3s var(--ease), padding-left .3s var(--ease);
}
.s-feat-list .s-feat-row:last-child { border-bottom:1px solid var(--s-line); }
.s-feat-row:hover { background:var(--s-paper-dim); padding-left:14px; }
.s-feat-icon {
  width:40px; height:40px; border-radius:12px; flex-shrink:0;
  display:flex; align-items:center; justify-content:center;
  background:color-mix(in srgb,var(--s-orange) 12%,white); color:var(--s-orange-d);
}
.s-feat-icon svg { width:18px; height:18px; }
.s-feat-num { font-family:var(--fm); font-size:.8rem; color:var(--s-ink-f); width:28px; flex-shrink:0; padding-top:4px; }
.s-feat-title { font-family:var(--fd); font-weight:640; font-size:1.1rem; letter-spacing:-.01em; color:var(--s-ink); }
.s-feat-body { font-size:.88rem; color:var(--s-ink-s); line-height:1.55; margin-top:3px; }

/* ── AI section ── */
.s-ai-grid { display:grid; grid-template-columns:1fr 1fr; gap:18px; }
.s-ai-card {
  background:var(--s-surface); border:1px solid var(--s-line);
  border-radius:var(--r-l); padding:36px; box-shadow:var(--sh-s);
}
.s-ai-icon { width:46px; height:46px; border-radius:14px; display:flex; align-items:center; justify-content:center; background:color-mix(in srgb,var(--s-orange) 12%,white); color:var(--s-orange-d); margin-bottom:18px; }
.s-ai-icon svg { width:22px; height:22px; }
.s-ai-title { font-family:var(--fd); font-weight:650; font-size:1.22rem; letter-spacing:-.02em; color:var(--s-ink); }
.s-ai-body { font-size:.9rem; color:var(--s-ink-s); line-height:1.6; margin-top:10px; }
.s-ai-bullets { list-style:none; margin-top:14px; display:flex; flex-direction:column; gap:7px; }
.s-ai-bullets li { display:flex; align-items:center; gap:8px; font-size:.82rem; color:var(--s-ink-s); }
.s-ai-bullets li::before { content:''; width:5px; height:5px; border-radius:50%; background:var(--s-orange); flex-shrink:0; }
.s-ai-full {
  grid-column:1 / -1;
  background:linear-gradient(150deg,color-mix(in srgb,var(--s-orange) 8%,var(--s-surface)),var(--s-surface));
  border:1.5px solid color-mix(in srgb,var(--s-orange) 28%,var(--s-line));
  border-radius:var(--r-l); padding:36px; box-shadow:var(--sh-s);
  display:flex; gap:44px; align-items:center; flex-wrap:wrap;
}
.s-ai-tag { font-family:var(--fm); font-size:.68rem; letter-spacing:.1em; text-transform:uppercase; color:var(--s-orange-d); }
.s-analytics-pills { display:flex; gap:10px; flex-wrap:wrap; margin-top:14px; }
.s-ap {
  display:inline-flex; align-items:center; gap:8px;
  padding:10px 16px; border-radius:12px;
  background:color-mix(in srgb,var(--s-orange) 10%,var(--s-paper-dim));
  font-size:.82rem; font-weight:600; color:var(--s-ink);
}
.s-ap svg { width:15px; height:15px; color:var(--s-orange-d); }

/* ── Zone billing editorial rows ── */
.s-zone-ed-list { display:flex; flex-direction:column; }
.s-zone-ed-row {
  display:grid; grid-template-columns:200px 1fr; gap:32px;
  padding:36px 0; border-top:1px solid var(--s-line); align-items:flex-start;
}
.s-zone-ed-list .s-zone-ed-row:last-child { border-bottom:1px solid var(--s-line); }
.s-zone-label { font-family:var(--fd); font-weight:640; font-size:1.05rem; color:var(--s-ink); }
.s-zone-mode { font-family:var(--fm); font-size:.7rem; letter-spacing:.08em; text-transform:uppercase; color:var(--s-orange-d); margin-top:6px; }
.s-zone-body { color:var(--s-ink-s); font-size:.9rem; line-height:1.65; max-width:560px; }
.s-zone-tag-pill { display:inline-flex; font-family:var(--fm); font-size:.66rem; letter-spacing:.06em; text-transform:uppercase; padding:4px 10px; border-radius:999px; background:color-mix(in srgb,var(--s-orange) 12%,white); color:var(--s-orange-d); margin-top:10px; }

/* ── Languages ── */
.s-lang-grid { display:flex; flex-wrap:wrap; gap:9px; }
.s-lang-bubble {
  display:inline-flex; align-items:center; gap:6px;
  padding:8px 16px; border-radius:999px;
  background:var(--s-surface); border:1px solid var(--s-line); box-shadow:var(--sh-s);
}
.s-lang-native { font-weight:600; font-size:.88rem; color:var(--s-ink); }
.s-lang-name { font-size:.72rem; color:var(--s-ink-f); }

/* ── Industries ── */
.s-zone-block { margin-bottom:48px; }
.s-zone-block-head { display:flex; align-items:center; gap:12px; margin-bottom:14px; }
.s-zone-badge { font-family:var(--fm); font-size:.66rem; letter-spacing:.08em; text-transform:uppercase; color:var(--s-orange-d); background:color-mix(in srgb,var(--s-orange) 12%,white); padding:5px 12px; border-radius:999px; }
.s-zone-block-name { font-family:var(--fd); font-weight:640; font-size:1.2rem; color:var(--s-ink); }
.s-restricted-badge { font-family:var(--fm); font-size:.66rem; letter-spacing:.06em; text-transform:uppercase; color:var(--s-orange-d); background:color-mix(in srgb,var(--s-orange) 14%,white); padding:4px 10px; border-radius:999px; }
.s-ind-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:9px; }
.s-ind-card {
  display:flex; align-items:center;
  padding:14px 18px; border-radius:14px; border:1px solid var(--s-line);
  background:var(--s-surface); color:inherit;
}
.s-ind-name { font-size:.9rem; font-weight:600; color:var(--s-ink); }
.s-ind-pain { font-size:.72rem; color:var(--s-ink-f); margin-top:2px; }

/* ── Pricing ── */
.s-price-row { display:grid; grid-template-columns:repeat(3,1fr); }
.s-price-col { padding:0 36px; text-align:center; }
.s-price-col:not(:first-child) { border-left:1px solid var(--s-line); }
.s-price-col:first-child { padding-left:36px; }
.s-price-kick { font-family:var(--fm); font-size:.66rem; letter-spacing:.12em; text-transform:uppercase; color:var(--s-orange-d); margin-bottom:10px; height:14px; }
.s-price-name { font-weight:650; font-size:1rem; color:var(--s-ink-s); margin-bottom:14px; }
.s-price-amount { font-family:var(--fm); font-size:clamp(1.9rem,3.8vw,2.7rem); font-weight:700; letter-spacing:-.03em; color:var(--s-ink); }
.s-price-desc { margin-top:14px; font-size:.88rem; color:var(--s-ink-s); line-height:1.65; }
.s-price-cta { margin-top:22px; display:inline-flex; align-items:center; gap:6px; font-size:.85rem; font-weight:600; color:var(--s-orange-d); border-bottom:1.5px solid color-mix(in srgb,var(--s-orange) 38%,transparent); padding-bottom:2px; }
.s-price-cta svg { width:13px; height:13px; transition:transform .3s var(--ease); }
.s-price-cta:hover svg { transform:translateX(3px); }

/* ── By the numbers (dark strip) ── */
.s-numbers-strip { background:var(--s-navy); }
.s-numbers-grid { display:grid; grid-template-columns:repeat(5,1fr); }
.s-numbers-cell { padding:30px 24px; border-right:1px solid rgba(255,255,255,.08); text-align:center; }
.s-numbers-cell:last-child { border-right:none; }
.s-numbers-n { font-family:var(--fm); font-size:clamp(1.4rem,2.5vw,1.9rem); font-weight:700; letter-spacing:-.02em; color:var(--s-orange-l); }
.s-numbers-l { font-size:.74rem; color:rgba(255,255,255,.55); margin-top:6px; line-height:1.4; }

/* ── CTA ── */
.s-cta {
  background:linear-gradient(160deg,var(--s-navy),var(--s-navy-deep));
  border-radius:var(--r-xl); padding:88px 40px; text-align:center; color:#fff;
  position:relative; overflow:hidden;
}
.s-cta::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at 30% 30%,color-mix(in srgb,var(--s-orange) 28%,transparent),transparent 55%); }
.s-cta>*{position:relative;z-index:1}

/* ── Showcase carousel ── */
.sc-section { padding: 96px 0 88px; overflow: hidden; background: #F7F3EC; }
.sc-head { display:flex; flex-wrap:wrap; align-items:flex-end; justify-content:space-between; gap:24px; }
.sc-head-left { display:flex; flex-direction:column; gap:16px; flex:1 1 420px; min-width:0; }
.sc-eyebrow { display:flex; align-items:center; gap:10px; font-size:12px; letter-spacing:.16em; text-transform:uppercase; color:#9C8F78; font-weight:600; }
.sc-eyebrow span.rule { width:24px; height:1px; background:#E2D6BE; display:block; }
.sc-h2 { margin:0; font-family:'Outfit',system-ui,sans-serif; font-size:clamp(2rem,4.5vw,54px); line-height:1.03; font-weight:600; letter-spacing:-.03em; max-width:14ch; color:#1C1508; }
.sc-lead { margin:0; flex:0 1 340px; max-width:38ch; font-size:17px; line-height:1.55; color:#6B5E48; }
.sc-stage { position:relative; height:640px; margin-top:44px; display:flex; align-items:center; justify-content:center; }
.sc-blob { position:absolute; width:520px; height:520px; border-radius:999px; background:#F3D9AE; filter:blur(90px); opacity:.5; pointer-events:none; }
.sc-card { position:absolute; width:288px; height:606px; cursor:pointer; transition:transform .6s cubic-bezier(.22,.9,.3,1), opacity .5s, filter .5s; }
.sc-frame { width:100%; height:100%; border-radius:40px; background:#1C1508; padding:9px; box-shadow:0 34px 64px -26px rgba(28,21,8,.5); }
.sc-screen { position:relative; width:100%; height:100%; border-radius:32px; overflow:hidden; background:#F7F3EC; }
.sc-screen img { display:block; width:100%; height:100%; object-fit:cover; object-position:top center; }
.sc-notch { position:absolute; top:10px; left:50%; transform:translateX(-50%); width:9px; height:9px; border-radius:999px; background:rgba(28,21,8,.5); }
.sc-caption { max-width:820px; margin:36px auto 0; padding:0 40px; display:flex; flex-direction:column; align-items:center; gap:12px; text-align:center; }
.sc-caption .sc-tag { font-size:11px; letter-spacing:.18em; text-transform:uppercase; color:#C4762F; font-weight:600; }
.sc-caption h3 { margin:0; font-family:'Outfit',system-ui,sans-serif; font-size:30px; font-weight:600; letter-spacing:-.02em; color:#1C1508; }
.sc-caption p { margin:0; max-width:52ch; font-size:16.5px; line-height:1.6; color:#6B5E48; }
.sc-dots { display:flex; justify-content:center; align-items:center; gap:9px; margin-top:30px; flex-wrap:wrap; padding:0 40px; }
.sc-dot { height:8px; border-radius:999px; border:none; padding:0; cursor:pointer; transition:all .35s; background:#E2D6BE; width:8px; }
.sc-dot.active { width:32px; background:#E38A3D; }
.sc-cta-row { display:flex; justify-content:center; margin-top:40px; }
.sc-cta { display:inline-flex; align-items:center; background:#E38A3D; color:#1C1508; font-size:16px; font-weight:600; padding:15px 28px; border-radius:999px; text-decoration:none; transition:background .15s, color .15s; }
.sc-cta:hover { background:#1C1508; color:#fff; }
@media (max-width:640px) {
  .sc-h2 { font-size:36px; }
  .sc-card { width:220px; height:462px; }
  .sc-stage { height:500px; }
}

/* ── Responsive ── */
@media (max-width:900px) {
  .s-split { grid-template-columns:1fr; gap:44px; }
  .s-ai-grid { grid-template-columns:1fr; }
  .s-price-row { grid-template-columns:1fr; }
  .s-price-col { padding:28px 0 0 !important; border-left:none !important; border-top:1px solid var(--s-line); }
  .s-price-col:first-child { padding-top:0 !important; border-top:none; }
  .s-ai-full { gap:24px; }
  .s-numbers-grid { grid-template-columns:repeat(3,1fr); }
  .s-numbers-cell:nth-child(3) { border-right:none; }
}
@media (max-width:720px) {
  .s-sec { padding:64px 0; }
  .s-hero { padding-top:124px; padding-bottom:64px; }
  .s-stat-grid-4 { grid-template-columns:repeat(2,1fr); }
  .s-stat { border-left:1px solid var(--s-line); border-top:1px solid var(--s-line); }
  .s-stat:first-child { border-left:none; border-top:none; }
  .s-stat:nth-child(2) { border-top:none; }
  .s-stat:nth-child(odd):not(:first-child) { border-left:none; }
  .s-ed-row { grid-template-columns:1fr; gap:12px; padding:28px 0; }
  .s-zone-ed-row { grid-template-columns:1fr; gap:12px; }
  .s-ind-grid { grid-template-columns:repeat(2,1fr); }
  .s-numbers-grid { grid-template-columns:repeat(2,1fr); }
  .s-numbers-cell:nth-child(2n) { border-right:none; }
  .s-numbers-cell { border-top:1px solid rgba(255,255,255,.08); }
  .s-cta { padding:56px 22px; border-radius:24px; }
}
@media (max-width:480px) {
  .s-ind-grid { grid-template-columns:1fr; }
  .s-db-stats { grid-template-columns:1fr 1fr; }
}
`

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="s-hero">
      <div className="s-wrap">
        <div className="s-hero-inner">
          <Reveal as="span" y={0}><span className="s-eye s-eye--light">Retail Infrastructure · A product of IvishAI</span></Reveal>
          <Reveal delay={0.08}>
            <h1 className="s-h1"><span className="s-h1-grd">{SERA.hero}</span></h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="s-hero-sub">{SERA.category}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="s-lede s-lede--white mt16" style={{ margin: '16px auto 0', textAlign: 'center' }}>{SERA.what}</p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="s-btn-row mt40" style={{ justifyContent: 'center' }}>
              <a href={SERA.playStore} className="s-btn s-btn-orange">
                Download on Google Play <ArrowRight size={16} />
              </a>
              <a href="#industries" className="s-btn s-btn-ghost-dark">Find my shop type</a>
            </div>
          </Reveal>
          <Reveal delay={0.36}>
            <div className="s-promise-row">
              {SERA_PROMISES.map((p) => (
                <div key={p} className="s-pill"><Check size={13} />{p}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─── Showcase carousel ────────────────────────────────────────────────────────
const SCREENS = [
  { tag: 'Home', title: 'Today at a glance', body: 'Revenue, bills, items sold and low stock, with quick actions to SERA AI, analytics and expenses.', src: '/sera-screens/03-shop-type.png' },
  { tag: 'Inventory', title: 'Every product, priced and stocked', body: '43 items with price, category and live stock counts - out-of-stock flagged in red.', src: '/sera-screens/02-inventory.png' },
  { tag: 'Onboarding', title: 'Set up your shop type', body: 'Retail, pharmacy, electronics, services, food or restricted - SERA configures itself around it.', src: '/sera-screens/01-home.png' },
  { tag: 'Onboarding', title: 'Choose a language', body: 'English, Hindi, Bengali, Telugu, Marathi, Tamil, Gujarati and Kannada, in script.', src: '/sera-screens/04-language.png' },
  { tag: 'Customers', title: 'Khata, without the notebook', body: "Every customer's balance, with a swipe to clear dues on the spot.", src: '/sera-screens/05-customers.png' },
  { tag: 'Dashboard', title: 'Arrange the home screen your way', body: 'Toggle and reorder cards - revenue, quick actions, low stock, SERA insights and more.', src: '/sera-screens/06-dashboard.png' },
  { tag: 'Notifications', title: 'Stock alerts before you run out', body: 'Critical out-of-stock warnings with average daily sales, filtered by inventory, sales or customers.', src: '/sera-screens/07-notifications.png' },
  { tag: 'Billing', title: 'Collect payment, any way', body: 'Cash, UPI, card or khata, with a numeric pad and one-tap exact amount.', src: '/sera-screens/08-billing.png' },
  { tag: 'More', title: 'Everything else, one tap away', body: 'Reports, custom alerts, closing and cash, employees, sync and anomaly alerts.', src: '/sera-screens/09-more.png' },
  { tag: 'SERA AI', title: 'Ask your shop a question', body: '"What\'s today\'s sales?" or "Which products are low on stock?", answered instantly.', src: '/sera-screens/10-sera-ai.png' },
]

function Showcase() {
  const [active, setActive] = useState(() => SCREENS.findIndex((s) => s.tag === 'Home'))
  const pausedRef = useRef(false)
  const n = SCREENS.length

  useEffect(() => {
    const t = setInterval(() => {
      if (!pausedRef.current) setActive((a) => (a + 1) % n)
    }, 3800)
    return () => clearInterval(t)
  }, [n])

  return (
    <section
      className="sc-section"
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => { pausedRef.current = false }}
    >
      <div className="s-wrap">
        <div className="sc-head">
          <div className="sc-head-left">
            <div className="sc-eyebrow"><span className="rule" /><span>Inside SERA</span></div>
            <h2 className="sc-h2">Retail OS for the kirana counter.</h2>
          </div>
          <p className="sc-lead">Billing, inventory, khata and an AI shop assistant, built for how small shops actually run.</p>
        </div>
      </div>

      <div className="sc-stage">
        <div className="sc-blob" />
        {SCREENS.map((s, idx) => {
          let off = idx - active
          if (off > n / 2) off -= n
          if (off < -n / 2) off += n
          const a = Math.abs(off)
          const visible = a <= 2
          return (
            <div
              key={s.src}
              className="sc-card"
              onClick={() => setActive(idx)}
              style={{
                transform: `translateX(${off * 252}px) scale(${a === 0 ? 1 : a === 1 ? 0.85 : 0.72}) rotateY(${off * -6}deg)`,
                opacity: visible ? (a === 0 ? 1 : a === 1 ? 0.72 : 0.34) : 0,
                filter: a === 0 ? 'none' : 'saturate(.85) brightness(.97)',
                pointerEvents: visible ? 'auto' : 'none',
                zIndex: 10 - a,
              }}
            >
              <div className="sc-frame">
                <div className="sc-screen">
                  <img src={s.src} alt={s.title} loading="lazy" />
                  <div className="sc-notch" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="sc-caption">
        <span className="sc-tag">{SCREENS[active].tag}</span>
        <h3>{SCREENS[active].title}</h3>
        <p>{SCREENS[active].body}</p>
      </div>

      <div className="sc-dots">
        {SCREENS.map((s, idx) => (
          <button key={s.src} className={`sc-dot${idx === active ? ' active' : ''}`} aria-label={s.tag} onClick={() => setActive(idx)} />
        ))}
      </div>

      <div className="sc-cta-row">
        <a href={SERA.playStore} className="sc-cta">Get SERA</a>
      </div>
    </section>
  )
}

// ─── Stats strip ──────────────────────────────────────────────────────────────
function StatsStrip() {
  return (
    <div className="s-stats-strip">
      <div className="s-wrap">
        <div className="s-stat-grid-4">
          {SERA_STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07} className="s-stat">
              <div className="s-stat-num">{s.value}</div>
              <div className="s-stat-lbl">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Why Sera ─────────────────────────────────────────────────────────────────
function WhySera() {
  const rows = [
    { head: 'Billing is free. Forever.', body: 'No plan, no trial, no expiry. The core of Sera - unlimited billing - never costs a rupee. Most billing apps make free a trial. Sera made it a promise.' },
    { head: 'Digital Khata replaces your paper book.', body: 'Track customer credit and dues without a ledger. See who owes what, send reminders, and collect faster - all from your phone.' },
    { head: 'Works completely offline.', body: 'Full billing, inventory and Khata work without any internet connection. Data syncs automatically when you reconnect. Never lose a sale.' },
    { head: 'SERA AI sets up your shop in minutes.', body: 'Describe your shop and SERA AI builds your product catalogue. Point the camera at a barcode and it finds the product from 600,000+ items on-device, no internet needed.' },
  ]
  return (
    <section className="s-sec">
      <div className="s-wrap">
        <Reveal><span className="s-eye s-eye--muted">Why Sera</span></Reveal>
        <Reveal delay={0.06}><h2 className="s-h2">Built for shopkeepers,<br />not accountants.</h2></Reveal>
        <div className="s-ed-list mt56">
          {rows.map((r, i) => (
            <Reveal key={r.head} delay={i * 0.07} className="s-ed-row">
              <div className="s-ed-h">{r.head}</div>
              <div className="s-ed-b">{r.body}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Product DB ───────────────────────────────────────────────────────────────
function ProductDB() {
  const stats = [
    { n: '600K+', l: 'Products indexed' },
    { n: '13', l: 'Indian languages' },
    { n: '384-dim', l: 'Semantic vector search' },
    { n: '0 sec', l: 'Manual entry for known SKUs' },
  ]
  const checks = [
    'Sourced from BigBasket, Open Food Facts and supplier feeds',
    'Barcode, HSN code, category and unit pre-filled',
    'Product names in 13 languages via VerbX translation waterfall',
    'Vector search finds products even from partial names',
  ]
  return (
    <section className="s-sec s-sec--navy">
      <div className="s-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="s-split">
          <div>
            <Reveal><span className="s-eye s-eye--light">Product Intelligence</span></Reveal>
            <Reveal delay={0.06}><h2 className="s-h2 s-h2--white">600,000+ products.<br />Already waiting for you.</h2></Reveal>
            <Reveal delay={0.12}>
              <p className="s-lede s-lede--white mt16">
                Sera's product database covers Indian grocery, FMCG, pharmacy and general merchandise - barcodes, images, units and categories already filled in. Scan a barcode and the product appears instantly.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <ul className="s-check-list mt28">
                {checks.map((c) => <li key={c}><Check size={14} />{c}</li>)}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="s-db-card">
              <div className="s-db-stats">
                {stats.map((s) => (
                  <div key={s.l} className="s-db-stat">
                    <div className="s-db-stat-n">{s.n}</div>
                    <div className="s-db-stat-l">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─── Features ─────────────────────────────────────────────────────────────────
function Features() {
  return (
    <section className="s-sec s-sec--dim">
      <div className="s-wrap">
        <Reveal><span className="s-eye s-eye--muted">Features</span></Reveal>
        <Reveal delay={0.06}><h2 className="s-h2">Everything your shop needs.<br />One app.</h2></Reveal>
        <Reveal delay={0.12}><p className="s-lede mt12">From billing to compliance, from inventory to analytics - each feature works offline, in your language, for your shop type.</p></Reveal>
        <div className="s-feat-list mt56 reveal-group">
          {SERA_FEATURES.map((f, i) => {
            const Icon = FICONS[f.icon] || Zap
            return (
              <Reveal key={f.title} delay={i * 0.05} className="s-feat-row">
                <div className="s-feat-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="s-feat-icon"><Icon /></div>
                <div>
                  <div className="s-feat-title">{f.title}</div>
                  <div className="s-feat-body">{f.body}</div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── SERA AI ──────────────────────────────────────────────────────────────────
function SeraAI() {
  return (
    <section className="s-sec">
      <div className="s-wrap">
        <Reveal><span className="s-eye s-eye--muted">SERA AI</span></Reveal>
        <Reveal delay={0.06}><h2 className="s-h2">AI that works for your shop,<br />not against your data.</h2></Reveal>
        <Reveal delay={0.12}><p className="s-lede mt12">SERA AI is built in, not bolted on. It handles setup, suggests products, drafts messages and spots patterns in your business - running on your phone, without sending your data anywhere it doesn't need to go.</p></Reveal>
        <div className="s-ai-grid mt56">
          <Reveal className="s-ai-card">
            <div className="s-ai-icon"><ScanLine /></div>
            <div className="s-ai-title">Super Scanner</div>
            <div className="s-ai-body">Point your camera at a barcode, a shelf, or a product and Sera identifies it instantly. Four on-device AI models handle detection, segmentation and classification - no internet needed.</div>
            <ul className="s-ai-bullets">
              {['Barcode detection (YOLOv8)', 'Shelf & product recognition', '600K+ product match from local index', 'Runs entirely offline, on-device'].map((b) => <li key={b}>{b}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="s-ai-card">
            <div className="s-ai-icon"><Sparkles /></div>
            <div className="s-ai-title">AI Assistant</div>
            <div className="s-ai-body">Describe your shop and SERA AI builds your product catalogue. Ask it to write a WhatsApp message to customers, generate a poster, suggest what to stock or explain your sales trend.</div>
            <ul className="s-ai-bullets">
              {['Shop setup in minutes, not days', 'Product name & category suggestions', 'Customer message drafting', 'Business insights in plain language'].map((b) => <li key={b}>{b}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={0.15} className="s-ai-full">
            <div style={{ flex: 1, minWidth: 240 }}>
              <div className="s-ai-tag"><TrendingUp size={12} style={{ display: 'inline', marginRight: 6 }} />Analytics Intelligence</div>
              <h3 className="s-h3 mt8">Anomaly Alerts · Activity Heatmap · Business Milestones</h3>
              <p className="s-body mt12">Sera watches your sales in the background. It surfaces unusual patterns - sudden drops, high discounts, low transactions - as anomaly alerts. An activity heatmap shows exactly which days and hours are most profitable. Milestones celebrate your shop's growth: ₹1 lakh revenue, 100 customers, 500 bills.</p>
            </div>
            <div className="s-analytics-pills">
              {[{ i: <Bell size={15} />, l: 'Anomaly Alerts' }, { i: <BarChart3 size={15} />, l: 'Activity Heatmap' }, { i: <Trophy size={15} />, l: 'Milestones' }].map(({ i, l }) => (
                <div key={l} className="s-ap">{i}{l}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─── Zone Billing ─────────────────────────────────────────────────────────────
function ZoneBilling() {
  const zones = [
    { zone: 'Zone 1 · Core Retail', mode: 'Standard + Khata', body: 'Barcode scan, quick-add, weight entry. Customer credit tracked automatically in digital Khata. Inventory alerts for fast-moving and slow-moving stock.' },
    { zone: 'Zone 2 · Pharmacy', mode: 'Batch + Expiry', body: 'Expiry alerts, batch compliance, Schedule H / H1 / X detection, prescription management and medicine returns - all audit-ready.' },
    { zone: 'Zone 3 · Regulated Retail', mode: 'Serial + Warranty', body: 'Serial number tracking per unit, supplier management, stock ageing reports and warranty logs for mobiles, electronics and hardware.' },
    { zone: 'Zone 4 · Services', mode: 'Appointment + Orders', body: 'Booking management, service billing, order tracking, tip handling and customer history for salons, tailors and repair shops.' },
    { zone: 'Zone 5 · Food', mode: 'KOT + Table', body: 'Kitchen Order Tickets, table selection, menu management, running orders and bill split - full restaurant and fast food billing.' },
    { zone: 'Zone 6 · Restricted Retail', mode: 'Excise + Compliance', body: 'Age gate, excise dashboard, compliance logs and audit-ready records for liquor, tobacco and paan shops. ₹299–999/month.', restricted: true },
  ]
  return (
    <section className="s-sec s-sec--dim">
      <div className="s-wrap">
        <Reveal><span className="s-eye s-eye--muted">Zone-Aware Billing</span></Reveal>
        <Reveal delay={0.06}><h2 className="s-h2">Your shop type.<br />Your billing screen.</h2></Reveal>
        <Reveal delay={0.12}><p className="s-lede mt12">Sera doesn't show a generic billing screen to every shop. The app configures itself for your zone and industry - food gets KOT and table selection, pharmacy gets expiry tracking, services get appointment management.</p></Reveal>
        <div className="s-zone-ed-list mt56">
          {zones.map((z, i) => (
            <Reveal key={z.zone} delay={i * 0.06} className="s-zone-ed-row">
              <div>
                <div className="s-zone-label">{z.zone}</div>
                <div className="s-zone-mode">{z.mode}</div>
                {z.restricted && <div className="s-zone-tag-pill">Compliance built in</div>}
              </div>
              <div className="s-zone-body">{z.body}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Languages ────────────────────────────────────────────────────────────────
function LanguagesSection() {
  return (
    <section className="s-sec">
      <div className="s-wrap">
        <div className="s-split">
          <div>
            <Reveal><span className="s-eye s-eye--muted">13 Languages</span></Reveal>
            <Reveal delay={0.06}><h2 className="s-h2">Bharat ka app.<br />Bharat ki bhasha mein.</h2></Reveal>
            <Reveal delay={0.12}><p className="s-lede mt16">Sera runs in 13 Indian languages - not translations, full UI and product names in your language. The VerbX AI translation waterfall powers every string, in every screen, on every language your shopkeeper speaks.</p></Reveal>
            <Reveal delay={0.18}><p className="s-body mt12" style={{ color: 'var(--s-ink-f)' }}>Switch language any time from Settings. Zero reinstall needed.</p></Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="s-lang-grid">
              {SERA_LANGUAGES.map((l) => (
                <div key={l.code} className="s-lang-bubble" dir={l.code === 'ur' ? 'rtl' : 'ltr'}>
                  <span className="s-lang-native">{l.native}</span>
                  <span className="s-lang-name">{l.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─── Industries ───────────────────────────────────────────────────────────────
function Industries() {
  return (
    <section className="s-sec s-sec--dim" id="industries">
      <div className="s-wrap">
        <Reveal><span className="s-eye s-eye--muted">28 Industries · 6 Zones</span></Reveal>
        <Reveal delay={0.06}><h2 className="s-h2">Find your shop.</h2></Reveal>
        <Reveal delay={0.12}><p className="s-lede mt12">Each industry is configured differently. The billing screen, inventory fields, compliance requirements and reports all adapt to what your specific shop actually needs.</p></Reveal>
        <div className="mt56">
          {SERA_ZONES.map((z, zi) => (
            <Reveal key={z.zone} delay={zi * 0.07} className="s-zone-block">
              <div className="s-zone-block-head">
                <span className="s-zone-badge">{z.zone}</span>
                <span className="s-zone-block-name">{z.name}</span>
                {z.restricted && <span className="s-restricted-badge">Compliance built in</span>}
              </div>
              <div className="s-ind-grid">
                {z.industries.map((ind) => (
                  <div key={ind.slug} className="s-ind-card">
                    <div className="s-ind-name">{ind.name}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── By the numbers ───────────────────────────────────────────────────────────
function ByTheNumbers() {
  const nums = [
    { n: '251 → 1,600', l: 'text elements localized, from one-fifth of the app to all of it' },
    { n: '13', l: 'languages: English + 12 Indian' },
    { n: '600K+', l: 'products pre-loaded, zero manual entry for known SKUs' },
    { n: '28', l: 'industry types, across 6 retail zones' },
    { n: '₹0', l: 'billing cost. Forever. For every shop.' },
  ]
  return (
    <div className="s-numbers-strip">
      <div className="s-wrap">
        <div className="s-numbers-grid">
          {nums.map((n) => (
            <div key={n.l} className="s-numbers-cell">
              <div className="s-numbers-n">{n.n}</div>
              <div className="s-numbers-l">{n.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
function Pricing() {
  return (
    <section className="s-sec" id="pricing">
      <div className="s-wrap">
        <Reveal><span className="s-eye s-eye--muted">Pricing</span></Reveal>
        <Reveal delay={0.06}><h2 className="s-h2">Billing is free. Forever.</h2></Reveal>
        <Reveal delay={0.12}><p className="s-lede mt12">No trial. No credit card. No expiry. Start free, upgrade only when you need more.</p></Reveal>

        <div className="s-price-row mt56">
          {SERA_PRICING.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.09} className="s-price-col">
              <div className="s-price-kick">{p.highlight ? '1st month completely free' : ' '}</div>
              <div className="s-price-name">{p.name}</div>
              <div className="s-price-amount">{p.price}<span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--s-ink-s)', marginLeft: 4 }}>{p.period}</span></div>
              <div className="s-price-desc">{p.desc}</div>
              {p.note && <div style={{ marginTop: 10, fontSize: '.8rem', fontFamily: 'var(--fm)', color: 'var(--s-orange-d)' }}>{p.note}</div>}
              <ul style={{ listStyle: 'none', marginTop: 18, display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
                {p.includes.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '.85rem', color: 'var(--s-ink-s)' }}>
                    <Check size={13} style={{ color: 'var(--s-orange-d)', flexShrink: 0 }} />{f}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
                <a href={SERA.playStore} className="s-price-cta">Get started <ArrowRight size={13} /></a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div style={{ marginTop: 56, borderTop: '1px solid var(--s-line)', paddingTop: 40 }}>
            <div style={{ fontFamily: 'var(--fm)', fontSize: '.7rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--s-ink-f)', marginBottom: 20 }}>Premium price by shop type</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 10 }}>
              {SERA_PREMIUM_PRICES.map((v) => (
                <div key={v.vertical} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderRadius: 14, border: '1px solid var(--s-line)', background: 'var(--s-surface)' }}>
                  <div>
                    <div style={{ fontSize: '.9rem', fontWeight: 600, color: 'var(--s-ink)' }}>{v.vertical}</div>
                    {v.tag && <div style={{ fontSize: '.72rem', color: 'var(--s-orange-d)', marginTop: 2 }}>{v.tag}</div>}
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 12 }}>
                    <div style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: '1rem', color: 'var(--s-ink)' }}>{v.monthly}<span style={{ fontWeight: 400, fontSize: '.75rem', color: 'var(--s-ink-f)' }}>/mo</span></div>
                    {v.yearly && <div style={{ fontSize: '.72rem', color: 'var(--s-ink-f)' }}>{v.yearly}/yr</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="s-sec">
      <div className="s-wrap">
        <Reveal>
          <div className="s-cta">
            <span className="s-eye s-eye--light">Free forever · Works offline · No hardware</span>
            <h2 className="s-h2 s-h2--white mt12">Start billing in 60 seconds.</h2>
            <p className="s-lede s-lede--white mt16" style={{ margin: '16px auto 0', textAlign: 'center' }}>
              Free forever. First month of Premium completely free. Works offline. No hardware. 13 languages. 28 industries.
            </p>
            <div className="s-btn-row mt40" style={{ justifyContent: 'center' }}>
              <a href={SERA.playStore} className="s-btn s-btn-orange">Download on Google Play <ArrowRight size={16} /></a>
              <a href="#industries" className="s-btn s-btn-ghost-dark">Find your shop type</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SeraHome() {
  useSEO(
    'Sera - Free Billing, GST & Khata App for Every Indian Shop',
    'Sera is a free billing, Khata and inventory app for Indian shops. 600K+ products, 13 languages, 28 industries, AI scanner, offline-first. Setup in 60 seconds.',
  )
  return (
    <SeraShell>
      <style>{CSS}</style>
      <div className="sera-page">
        <Hero />
        <Showcase />
        <StatsStrip />
        <WhySera />
        <ProductDB />
        <Features />
        <SeraAI />
        <ZoneBilling />
        <LanguagesSection />
        <Industries />
        <ByTheNumbers />
        <Pricing />
        <CTA />
      </div>
    </SeraShell>
  )
}
