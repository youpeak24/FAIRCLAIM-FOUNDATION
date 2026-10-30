import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { organizationData } from '../data/organization';

export const TermsConditions: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-[#F4EFE6] border-b border-[#E8E1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E8E1D5] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C85A32]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#142C20]">
              Terms of Use
            </span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl text-[#142C20] font-semibold tracking-tight leading-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="text-base sm:text-lg text-[#365342] leading-relaxed">
            General provisions governing the informational use of the FAIRCLAIM FOUNDATION website.
          </p>
        </div>
      </section>

      {/* Legal Review Notice Banner */}
      <section className="py-6 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF9F5] border border-[#C85A32]/30 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#4A3228] leading-relaxed">
              <strong className="font-semibold text-[#C85A32]">Draft Status Notice: </strong>
              These provisional Terms & Conditions are published for preliminary informational review and await final legal endorsement by the FAIRCLAIM FOUNDATION board.
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8E1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-neutral max-w-none space-y-8 text-[#365342] leading-relaxed text-sm sm:text-base">
            
            <div>
              <h2 className="font-editorial text-2xl font-bold text-[#142C20] mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and utilizing the website of FAIRCLAIM FOUNDATION, visitors agree to abide by these provisional Terms & Conditions. If you do not agree with any portion of these principles, we encourage you to discuss your concerns with our administrative team.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-2xl font-bold text-[#142C20] mb-3">
                2. Informational Character & Non-Legal Nature
              </h2>
              <p>
                All materials, articles, focus area summaries, and guides published on this website are provided strictly for general educational and civic informational purposes. Nothing contained herein constitutes formal legal advice, representation, or an attorney-client relationship. Visitors facing specific legal disputes should consult licensed legal professionals.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-2xl font-bold text-[#142C20] mb-3">
                3. Intellectual Property & Fair Use
              </h2>
              <p>
                The name &ldquo;FAIRCLAIM FOUNDATION&rdquo;, the distinctive emblem, brand identity, editorial layout, and original explanatory texts are protected under applicable intellectual property laws. Educational fair-use quotation of excerpts is permitted with proper attribution to FAIRCLAIM FOUNDATION.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-2xl font-bold text-[#142C20] mb-3">
                4. Prohibited Conduct
              </h2>
              <p>
                Visitors agree not to misuse this website by transmitting unsolicited commercial advertisements, attempting to breach website security, submitting falsified inquiry identities, or interfering with normal communication channels.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-2xl font-bold text-[#142C20] mb-3">
                5. Disclaimer of Warranties
              </h2>
              <p>
                This website and its contents are provided on an &ldquo;as is&rdquo; basis without warranties of any kind. While we make every diligent effort to maintain accurate and timely information, FAIRCLAIM FOUNDATION makes no guarantees regarding continuous uninterrupted availability.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-2xl font-bold text-[#142C20] mb-3">
                6. Amendments to Terms
              </h2>
              <p>
                FAIRCLAIM FOUNDATION reserves the right to revise these Terms & Conditions upon formal board adoption and statutory registration confirmation. Revised terms will be updated directly on this page.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-2xl font-bold text-[#142C20] mb-3">
                7. Governance Questions
              </h2>
              <p>
                Inquiries concerning these terms may be forwarded to our administrative communication desk:
              </p>
              <p className="font-semibold text-[#142C20] mt-2">
                {organizationData.contact.email}
              </p>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-[#E8E1D5]">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#142C20] hover:text-[#C85A32] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#C85A32]" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
