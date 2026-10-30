import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { headerNavLinks } from '../data/navigation';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevPath, setPrevPath] = useState('');
  const location = useLocation();

  // Reset mobile menu upon route change without cascading effect
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Skip to Content accessible bypass */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#142C20] focus:text-[#FAF8F5] focus:font-semibold focus:rounded-xl focus:shadow-2xl focus:ring-2 focus:ring-[#C85A32] transition-transform"
      >
        Skip to main content
      </a>

      {/* Top Institutional Notification Bar */}
      <div className="bg-[#142C20] text-[#FAF8F5] py-2 px-4 text-xs border-b border-[#204533] hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#204533] text-[#FAF8F5] text-[10px] font-mono tracking-wider uppercase border border-[#2E5A44]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] animate-pulse" aria-hidden="true" />
              Provisional Charter
            </span>
            <span className="text-[#C5D3CB] font-normal">
              Advancing procedural justice, civic equity, and transparent public dialogue.
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#B2C4B9] text-[11px]">
            <Link 
              to="/about" 
              className="hover:text-white transition-colors underline underline-offset-2 decoration-[#C85A32]/60"
            >
              Explore Our Principles
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E1D5] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Identity */}
          <BrandLogo />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Main Navigation">
            {headerNavLinks.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#C85A32] relative ${
                    isActive
                      ? 'text-[#142C20] font-semibold bg-[#F4EFE6] border border-[#E8E1D5] shadow-xs'
                      : 'text-[#3D5A47] hover:text-[#142C20] hover:bg-[#F4EFE6]/70'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop Contact CTA */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#142C20] hover:bg-[#204533] text-[#FAF8F5] text-sm font-semibold shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#C85A32] group"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 text-[#C85A32] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-[#142C20] hover:bg-[#F4EFE6] border border-transparent hover:border-[#E8E1D5] transition-colors focus-visible:ring-2 focus-visible:ring-[#C85A32]"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer / Overlay */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation-menu"
            className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-[#0C1A13]/50 backdrop-blur-xs z-50 animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div
              className="bg-[#FAF8F5] border-b border-[#E8E1D5] shadow-2xl p-6 flex flex-col gap-4 max-h-[calc(100vh-5rem)] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#8C7A68] px-2">
                <span>Navigation Menu</span>
                <span className="text-[#C85A32] font-semibold">FAIRCLAIM</span>
              </div>

              <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
                {headerNavLinks.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3.5 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                        isActive
                          ? 'bg-[#142C20] text-[#FAF8F5] font-semibold shadow-xs'
                          : 'text-[#142C20] hover:bg-[#F4EFE6]'
                      }`
                    }
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </NavLink>
                ))}
              </nav>

              <div className="pt-4 mt-2 border-t border-[#E8E1D5]">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#C85A32] hover:bg-[#A54421] text-white font-semibold shadow-md transition-all focus-visible:ring-2 focus-visible:ring-[#142C20]"
                >
                  <span>Submit Foundation Inquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="text-xs text-[#5D6B62] px-3 text-center mt-2 flex items-center justify-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>Advancing procedural justice and civic dialogue.</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
