import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const navLinks = [
  {
    label: "Overview",
    desc: "Product summary",
    to: "/retail-os",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="9" y="1.5" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="1.5" y="9" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="9" y="9" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    label: "Features",
    desc: "What's included",
    to: "/retail-os/features",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 3.5h12M2 8h8M2 12.5h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Industries",
    desc: "19 shop types",
    to: "/retail-os/industries",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 14V9l6-6 6 6v5H2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <rect x="6" y="10" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    label: "Pricing",
    desc: "Plans & cost",
    to: "/retail-os/pricing",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M8 4.5v7M5.5 6.5h3.5a1 1 0 1 1 0 2h-3a1 1 0 1 0 0 2H10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const SidebarContent = ({ onClose }) => {
  const location = useLocation();

  return (
    <div className="flex flex-col h-full">
      {/* Brand */}
      <div className="px-5 pt-6 pb-4">
        {onClose && (
          <div className="flex items-center justify-between mb-5">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Retail OS</span>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-white transition-colors p-1"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        )}
        <Link
          to="/products"
          className="flex items-center gap-1.5 text-gray-600 text-xs hover:text-gray-300 transition-colors mb-5 group"
          onClick={onClose}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="group-hover:-translate-x-0.5 transition-transform">
            <path d="M7 2L3 5l4 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          All Products
        </Link>
        <div className="flex items-center gap-2.5 mb-1">
          <div
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ background: "#E26426", boxShadow: "0 0 8px rgba(226,100,38,0.7)" }}
          />
          <span className="font-sora font-semibold text-white text-base">Retail OS</span>
        </div>
        <p className="text-[10px] text-gray-600 ml-[26px] font-mono uppercase tracking-wider">Pillar 02 — Industry 6.0</p>
      </div>

      {/* Divider */}
      <div className="mx-5 mb-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

      {/* Nav */}
      <nav className="flex-1 px-3 space-y-0.5">
        <p className="px-3 mb-2 text-[10px] font-mono uppercase tracking-[0.15em] text-gray-600">Navigate</p>
        {navLinks.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group"
              style={{
                background: isActive ? "rgba(226,100,38,0.1)" : "transparent",
                border: isActive ? "1px solid rgba(226,100,38,0.2)" : "1px solid transparent",
                color: isActive ? "#E26426" : "#9ca3af",
              }}
            >
              <span style={{ color: isActive ? "#E26426" : "#6b7280" }} className="flex-shrink-0 group-hover:text-gray-300 transition-colors">
                {link.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p
                  className="text-sm font-medium leading-none mb-0.5"
                  style={{ color: isActive ? "#E26426" : undefined }}
                >
                  {link.label}
                </p>
                <p className="text-[10px] text-gray-600 leading-none">{link.desc}</p>
              </div>
              {isActive && (
                <div
                  className="w-1 h-3.5 rounded-full flex-shrink-0"
                  style={{ background: "#E26426" }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Status indicator */}
      <div className="px-5 py-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: "0 0 4px rgba(74,222,128,0.7)" }} />
          <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">In Market</span>
        </div>

        {/* CTA */}
        <div
          className="p-4 space-y-3"
          style={{ border: "1px solid rgba(226,100,38,0.2)", background: "rgba(226,100,38,0.05)" }}
        >
          <div>
            <p className="text-xs font-medium text-white mb-0.5">Free to start</p>
            <p className="text-[10px] text-gray-500 leading-snug">14-day PRO trial for all new shops</p>
          </div>
          <a
            href="mailto:connect@ivishai.com?subject=Retail OS - Get Started"
            className="block text-center text-xs font-semibold py-2 transition-opacity hover:opacity-85"
            style={{ background: "#E26426", color: "#fff" }}
          >
            Get Started Free
          </a>
        </div>
      </div>
    </div>
  );
};

const RetailOSLayout = ({ children }) => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="bg-black text-white">
        <div className="flex relative">
          {/* ── DESKTOP SIDEBAR (fixed) ── */}
          <aside
            className="hidden lg:block fixed top-[78px] left-0 bottom-0 z-30 overflow-y-auto flex-shrink-0"
            style={{
              width: "240px",
              borderRight: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(4,4,4,0.98)",
            }}
          >
            <SidebarContent />
          </aside>

          {/* ── MOBILE DRAWER ── */}
          <AnimatePresence>
            {drawerOpen && (
              <>
                <motion.div
                  className="fixed inset-0 z-40 bg-black/75 lg:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setDrawerOpen(false)}
                />
                <motion.aside
                  className="fixed top-0 left-0 bottom-0 z-50 w-64 lg:hidden overflow-y-auto"
                  style={{ background: "#030303", borderRight: "1px solid rgba(255,255,255,0.08)" }}
                  initial={{ x: -264 }}
                  animate={{ x: 0 }}
                  exit={{ x: -264 }}
                  transition={{ type: "spring", damping: 30, stiffness: 280 }}
                >
                  <SidebarContent onClose={() => setDrawerOpen(false)} />
                </motion.aside>
              </>
            )}
          </AnimatePresence>

          {/* ── MAIN CONTENT ── */}
          <div className="flex-1 lg:ml-[240px] min-w-0 flex flex-col min-h-screen">
            {/* Mobile top bar */}
            <div
              className="lg:hidden sticky top-[78px] z-30 flex items-center justify-between px-5 py-3"
              style={{
                background: "rgba(0,0,0,0.95)",
                borderBottom: "1px solid rgba(226,100,38,0.12)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#E26426", boxShadow: "0 0 6px rgba(226,100,38,0.6)" }}
                />
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Retail OS</span>
              </div>
              <button
                onClick={() => setDrawerOpen(true)}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 5h12M3 9h8M3 13h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default RetailOSLayout;
