import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { organizationData } from '../data/organization';
import { footerQuickLinks, policyLinks } from '../data/navigation';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C1A13] text-[#FAF8F5] border-t border-[#1C3628] mt-auto relative overflow-hidden">
      {/* Subtle top radiant border accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#142C20] via-[#C85A32] to-[#142C20] opacity-70" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Brand & Purpose Column */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <BrandLogo isLight={true} />
            <p className="text-[#C5D3CB] text-sm sm:text-base leading-relaxed max-w-md font-normal">
              {organizationData.purposeStatement}
            </p>
            <div className="flex items-center gap-2.5 text-xs font-mono text-[#95AB9E] pt-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#C85A32] animate-pulse" aria-hidden="true" />
              <span>Independent Civic Platform &bull; Natural Justice</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="font-editorial text-xl font-semibold tracking-wide text-[#FAF8F5]">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#C5D3CB] hover:text-[#FAF8F5] transition-colors focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded-xs inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Inquiries Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h3 className="font-editorial text-xl font-semibold tracking-wide text-[#FAF8F5]">
              Contact & Inquiries
            </h3>
            <p className="text-sm text-[#C5D3CB] leading-relaxed">
              We welcome dialogue with community members, public stakeholders, and civic collaborators.
            </p>

            {organizationData.contact.email && (
              <div className="pt-1">
                <a
                  href={`mailto:${organizationData.contact.email}`}
                  className="inline-flex items-center gap-2.5 text-sm text-[#FAF8F5] hover:text-[#C85A32] transition-colors group focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded-xs"
                >
                  <Mail className="w-4 h-4 text-[#C85A32]" />
                  <span className="underline underline-offset-4 decoration-[#2E5A44] group-hover:decoration-[#C85A32]">
                    {organizationData.contact.email}
                  </span>
                </a>
              </div>
            )}

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#142C20] hover:bg-[#204533] border border-[#2E5A44] text-[#FAF8F5] text-xs font-semibold tracking-wide transition-all hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#C85A32]"
              >
                <span>Submit Formal Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C85A32]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Institutional Status Disclosure Box */}
        <div className="mt-14 p-5 rounded-2xl bg-[#142C20]/50 border border-[#204533] text-xs text-[#95AB9E] leading-relaxed">
          <p>
            <strong className="text-[#D5CBBC] font-semibold">Institutional Status Note: </strong>
            {organizationData.legalStatusNote} All content published on this website represents provisional informational copy awaiting formal board confirmation.
          </p>
        </div>
      </div>

      {/* Lower Footer (Copyright, Developer credit, Policy links, Back to top) */}
      <div className="border-t border-[#1C3628] bg-[#07100B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-[#95AB9E]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>
              &copy; {CURRENT_YEAR} {organizationData.name}. All rights reserved.
            </span>
            <span className="hidden sm:inline text-[#2A4D3A]">•</span>
            <span className="text-[#B2C4B9]">
              {organizationData.developerAgency.label}
            </span>
          </div>

          {/* Policy Links & Back to Top */}
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-4 sm:gap-6" aria-label="Legal and policy links">
              {policyLinks.map((policy) => (
                <Link
                  key={policy.href}
                  to={policy.href}
                  className="text-[#B2C4B9] hover:text-[#FAF8F5] underline underline-offset-4 decoration-[#2A4D3A] hover:decoration-[#C85A32] transition-colors focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded-xs"
                >
                  {policy.name}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#142C20] hover:bg-[#204533] text-[#FAF8F5] transition-colors focus-visible:ring-2 focus-visible:ring-[#C85A32] cursor-pointer"
              title="Return to top of page"
              aria-label="Return to top of page"
            >
              <ArrowUp className="w-4 h-4 text-[#C85A32]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
