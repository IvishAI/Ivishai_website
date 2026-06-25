import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Overview", to: "/sera", short: "Overview" },
  { label: "Features", to: "/sera/features", short: "Features" },
  { label: "Industries", to: "/sera/industries", short: "Industries" },
  { label: "Pricing", to: "/sera/pricing", short: "Pricing" },
];

const SeraNav = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const current = navLinks.find((l) => l.to === location.pathname);

  return (
    <div
      className="w-full sticky top-[78px] z-40"
      style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(226,100,38,0.15)' }}
    >
      {/* ── DESKTOP NAV ── */}
      <div className="hidden sm:flex items-center justify-between max-w-7xl mx-auto px-5 md:px-12 lg:px-24 xl:px-40">
        {/* Product label */}
        <div className="flex items-center gap-3 py-4 border-r border-white/10 pr-6 mr-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: '#E26426', boxShadow: '0 0 6px rgba(226,100,38,0.6)' }}
          />
          <span className="text-xs font-mono text-gray-400 uppercase tracking-widest whitespace-nowrap">
            Sera
          </span>
        </div>

        {/* Nav links */}
        <div className="flex items-center flex-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-5 py-4 text-sm font-medium transition-colors duration-200 group"
                style={{ color: isActive ? '#fff' : 'rgba(156,163,175,1)' }}
              >
                {link.label}

                {/* Active indicator */}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ background: 'linear-gradient(90deg, #E26426, #AD4613)' }}
                  />
                )}

                {/* Hover indicator */}
                {!isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-40 transition-opacity"
                    style={{ background: '#E26426' }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          to="/sera/pricing"
          className="ml-4 px-4 py-2 text-xs font-medium transition-all duration-200 hover:opacity-90 whitespace-nowrap"
          style={{ background: 'rgba(226,100,38,0.15)', color: '#E26426', border: '1px solid rgba(226,100,38,0.3)' }}
        >
          View Pricing
        </Link>
      </div>

      {/* ── MOBILE NAV ── */}
      <div className="sm:hidden">
        <button
          className="w-full flex items-center justify-between px-5 py-3.5"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#E26426' }}
            />
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Sera</span>
            <span className="text-white text-sm font-medium ml-2">{current?.label ?? "Menu"}</span>
          </div>
          <svg
            width="16" height="16" viewBox="0 0 16 16" fill="none"
            className={`text-gray-400 transition-transform duration-200 ${mobileOpen ? 'rotate-180' : ''}`}
          >
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {mobileOpen && (
          <div className="border-t border-white/10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-5 py-3.5 text-sm transition-colors"
                  style={{
                    color: isActive ? '#E26426' : '#9ca3af',
                    background: isActive ? 'rgba(226,100,38,0.06)' : 'transparent',
                    borderLeft: isActive ? '2px solid #E26426' : '2px solid transparent',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SeraNav;
