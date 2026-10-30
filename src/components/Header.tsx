import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#142C20] focus:text-[#FAF8F5] focus:font-semibold focus:rounded-lg focus:shadow-xl focus:ring-2 focus:ring-[#C85A32] transition-transform"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E1D5] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Identity */}
          <BrandLogo />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {headerNavLinks.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-[#C85A32] ${
                    isActive
                      ? 'text-[#142C20] font-semibold bg-[#F4EFE6] border border-[#E8E1D5]'
                      : 'text-[#365342] hover:text-[#142C20] hover:bg-[#F4EFE6]/60'
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
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#142C20] hover:bg-[#204533] text-[#FAF8F5] text-sm font-semibold shadow-xs hover:shadow-md transition-all duration-150 focus-visible:ring-2 focus-visible:ring-[#C85A32]"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 opacity-75" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-[#142C20] hover:bg-[#F4EFE6] border border-transparent hover:border-[#E8E1D5] transition-colors focus-visible:ring-2 focus-visible:ring-[#C85A32]"
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
            className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-[#0C1A13]/40 backdrop-blur-xs z-50 animate-in fade-in duration-150"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div
              className="bg-[#FAF8F5] border-b border-[#E8E1D5] shadow-2xl p-6 flex flex-col gap-4 max-h-[calc(100vh-5rem)] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-xs uppercase tracking-wider font-semibold text-[#8C7A68] px-3">
                Navigation
              </div>

              <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
                {headerNavLinks.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      `px-3 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                        isActive
                          ? 'bg-[#142C20] text-[#FAF8F5] font-semibold'
                          : 'text-[#142C20] hover:bg-[#F4EFE6]'
                      }`
                    }
                  >
                    <span>{item.name}</span>
                  </NavLink>
                ))}
              </nav>

              <div className="pt-4 mt-2 border-t border-[#E8E1D5]">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#C85A32] hover:bg-[#A54421] text-white font-semibold shadow-md transition-colors focus-visible:ring-2 focus-visible:ring-[#142C20]"
                >
                  <span>Contact Foundation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="text-xs text-[#5D6B62] px-3 text-center mt-2">
                Advancing procedural justice and civic dialogue.
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
