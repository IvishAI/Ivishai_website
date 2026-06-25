import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const navLinks = [
  { label: "Overview", desc: "Product summary", to: "/sera" },
  { label: "Features", desc: "What's included", to: "/sera/features" },
  { label: "Industries", desc: "28 shop types", to: "/sera/industries" },
  { label: "Pricing", desc: "Plans & cost", to: "/sera/pricing" },
];

const SidebarContent = ({ onClose }) => {
  const location = useLocation();

  return (
    <div className="flex flex-col h-full">
      <div className="px-5 pt-6 pb-4">
        {onClose && (
          <div className="flex items-center justify-between mb-5">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Sera</span>
            <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors p-1">
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
          <div className="w-2 h-2 flex-shrink-0" style={{ background: "#E26426" }} />
          <span className="font-sora font-semibold text-white text-base">Sera</span>
        </div>
        <p className="text-[10px] text-gray-600 ml-[18px] font-mono uppercase tracking-wider">Pillar 02 — Industry 6.0</p>
      </div>

      <div className="mx-5 mb-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

      <nav className="flex-1 px-3 space-y-0.5">
        <p className="px-3 mb-2 text-[10px] font-mono uppercase tracking-[0.15em] text-gray-600">Navigate</p>
        {navLinks.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-2.5 transition-all duration-200"
              style={{
                background: isActive ? "rgba(226,100,38,0.08)" : "transparent",
                borderLeft: isActive ? "2px solid #E26426" : "2px solid transparent",
                color: isActive ? "#E26426" : "#9ca3af",
              }}
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-none mb-0.5" style={{ color: isActive ? "#E26426" : undefined }}>
                  {link.label}
                </p>
                <p className="text-[10px] text-gray-600 leading-none">{link.desc}</p>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="px-5 py-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: "0 0 4px rgba(74,222,128,0.7)" }} />
          <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">In Market</span>
        </div>
        <div style={{ border: "1px solid rgba(226,100,38,0.2)", background: "rgba(226,100,38,0.04)" }} className="p-4 rounded-xl space-y-3">
          <div>
            <p className="text-xs font-medium text-white mb-0.5">Free to start</p>
            <p className="text-[10px] text-gray-500 leading-snug">14-day PRO trial for all new shops</p>
          </div>
          <a
            href="mailto:connect@ivishai.com?subject=Sera - Get Started"
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

const SeraLayout = ({ children }) => {
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
          <aside
            className="hidden lg:block fixed top-[78px] left-0 bottom-0 z-30 overflow-y-auto flex-shrink-0"
            style={{ width: "240px", borderRight: "1px solid rgba(255,255,255,0.06)", background: "rgba(4,4,4,0.98)" }}
          >
            <SidebarContent />
          </aside>

          <AnimatePresence>
            {drawerOpen && (
              <>
                <motion.div
                  className="fixed inset-0 z-40 bg-black/75 lg:hidden"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onClick={() => setDrawerOpen(false)}
                />
                <motion.aside
                  className="fixed top-0 left-0 bottom-0 z-50 w-64 lg:hidden overflow-y-auto"
                  style={{ background: "#030303", borderRight: "1px solid rgba(255,255,255,0.08)" }}
                  initial={{ x: -264 }} animate={{ x: 0 }} exit={{ x: -264 }}
                  transition={{ type: "spring", damping: 30, stiffness: 280 }}
                >
                  <SidebarContent onClose={() => setDrawerOpen(false)} />
                </motion.aside>
              </>
            )}
          </AnimatePresence>

          <div className="flex-1 lg:ml-[240px] min-w-0 flex flex-col min-h-screen">
            <div
              className="lg:hidden sticky top-[78px] z-30 flex items-center justify-between px-5 py-3"
              style={{ background: "rgba(0,0,0,0.95)", borderBottom: "1px solid rgba(226,100,38,0.12)", backdropFilter: "blur(16px)" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2" style={{ background: "#E26426" }} />
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Sera</span>
              </div>
              <button onClick={() => setDrawerOpen(true)} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
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

export default SeraLayout;
