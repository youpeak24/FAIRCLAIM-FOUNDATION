import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Scale, 
  Compass, 
  FileCheck
} from 'lucide-react';
import { organizationData } from '../data/organization';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-[#F4EFE6] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E8E1D5] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C85A32]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#142C20]">
                About The Organization
              </span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#142C20] font-semibold tracking-tight leading-tight mb-6">
              Championing systemic fairness and civic empowerment.
            </h1>
            <p className="text-lg sm:text-xl text-[#365342] leading-relaxed">
              FAIRCLAIM FOUNDATION is an independent civic platform dedicated to making procedural fairness, transparent communication, and community dialogue accessible realities for all.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Purpose & Approach */}
      <section className="py-16 sm:py-24 border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
                Our Approach
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#142C20] leading-snug mb-4">
                Bridging institutional complexity and community voice.
              </h2>
              <p className="text-base text-[#465F50] leading-relaxed mb-6">
                Too often, administrative and regulatory frameworks are dense, opaque, and intimidating. When claims or disputes arise, individuals without deep resources face profound procedural disadvantages.
              </p>
              <div className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#E8E1D5]">
                <h4 className="font-semibold text-sm text-[#142C20] mb-2">
                  Our Fundamental Position
                </h4>
                <p className="text-xs sm:text-sm text-[#365342] leading-relaxed">
                  Fairness is not a privilege granted to those who can afford specialized representation; it is the cornerstone upon which equitable civic trust is founded.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="p-7 rounded-3xl bg-white border border-[#E8E1D5] shadow-xs">
                <h3 className="font-editorial text-xl font-bold text-[#142C20] mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#142C20] text-[#FAF8F5] flex items-center justify-center text-sm">
                    01
                  </span>
                  <span>Constructive, Non-Adversarial Engagement</span>
                </h3>
                <p className="text-sm sm:text-base text-[#465F50] leading-relaxed">
                  Rather than escalating disputes into protracted confrontation, we focus on identifying shared facts, clarifying misunderstandings, and facilitating mediation formats that yield lasting outcomes.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-white border border-[#E8E1D5] shadow-xs">
                <h3 className="font-editorial text-xl font-bold text-[#142C20] mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#204533] text-[#FAF8F5] flex items-center justify-center text-sm">
                    02
                  </span>
                  <span>Demystifying Administrative Language</span>
                </h3>
                <p className="text-sm sm:text-base text-[#465F50] leading-relaxed">
                  We translate dense legalisms into plain, accessible language so citizens understand the criteria by which institutional decisions are reached and know how to present their perspective effectively.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-white border border-[#E8E1D5] shadow-xs">
                <h3 className="font-editorial text-xl font-bold text-[#142C20] mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#C85A32] text-white flex items-center justify-center text-sm">
                    03
                  </span>
                  <span>Evidence-Grounded Systemic Insight</span>
                </h3>
                <p className="text-sm sm:text-base text-[#465F50] leading-relaxed">
                  Our advocacy is informed by observed real-world barriers. By systematically gathering insights from community experiences, we contribute constructive recommendations to policymakers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Values & Guiding Principles */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
              Foundational Ethics
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#142C20]">
              Guiding Principles
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#465F50]">
              These four tenets anchor our strategy, community interactions, and organizational governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizationData.guidingPrinciples.map((val, idx) => (
              <div
                key={val.title}
                className="p-7 rounded-3xl bg-[#FAF8F5] border border-[#E8E1D5] flex flex-col justify-between hover:border-[#142C20]/40 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8E1D5] flex items-center justify-center text-[#142C20] mb-5 shadow-xs">
                    {idx === 0 && <Scale className="w-6 h-6 text-[#142C20]" />}
                    {idx === 1 && <Users className="w-6 h-6 text-[#C85A32]" />}
                    {idx === 2 && <Compass className="w-6 h-6 text-[#204533]" />}
                    {idx === 3 && <ShieldCheck className="w-6 h-6 text-[#142C20]" />}
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-[#142C20] mb-3">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#465F50] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Foundation Objectives */}
      <section className="py-16 sm:py-24 border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
              Strategic Commitments
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#142C20]">
              Long-Term Objectives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {organizationData.coreObjectives.map((obj) => (
              <div
                key={obj.id}
                className="p-8 rounded-3xl bg-white border border-[#E8E1D5] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C85A32]">
                      {obj.focus}
                    </span>
                  </div>
                  <h3 className="font-editorial text-2xl font-semibold text-[#142C20] mb-3">
                    {obj.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#465F50] leading-relaxed">
                    {obj.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Institutional Governance Disclosure */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-white border border-[#E8E1D5] shadow-sm flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-2xl bg-[#F4EFE6] border border-[#E8E1D5] flex items-center justify-center shrink-0 text-[#142C20]">
              <FileCheck className="w-6 h-6 text-[#C85A32]" />
            </div>
            <div className="space-y-3">
              <h3 className="font-editorial text-xl font-bold text-[#142C20]">
                Institutional Governance & Integrity Notice
              </h3>
              <p className="text-sm text-[#465F50] leading-relaxed">
                In adherence to our strict transparency policy, all organizational records, registration numbers, tax statuses, and official committee appointments are subject to official verification. To prevent misleading claims, this website does not publish unverified metrics, past completed program counts, or unsubstantiated partner lists.
              </p>
              <p className="text-xs text-[#8C7A68]">
                For queries regarding official documentation or governance filings, please contact us directly via our inquiry channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Navigation Connection to Mission and Initiatives */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#F4EFE6] border border-[#E8E1D5] flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#C85A32] block mb-2">
                  Next Step
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#142C20] mb-3">
                  Explore Mission & Vision
                </h3>
                <p className="text-sm text-[#465F50] leading-relaxed mb-6">
                  Review our distinct mission framework and aspirational vision for accessible dispute resolution and civic balance.
                </p>
              </div>
              <div>
                <Link
                  to="/mission-vision"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#142C20] hover:bg-[#204533] text-[#FAF8F5] text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#C85A32]"
                >
                  <span>View Mission & Vision</span>
                  <ArrowRight className="w-4 h-4 text-[#C85A32]" />
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#142C20] text-[#FAF8F5] flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#C85A32] block mb-2">
                  Action
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#FAF8F5] mb-3">
                  Review Proposed Initiatives
                </h3>
                <p className="text-sm text-[#C5D3CB] leading-relaxed mb-6">
                  Examine our four proposed core focus areas and conceptual public engagement gallery.
                </p>
              </div>
              <div>
                <Link
                  to="/initiatives"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C85A32] hover:bg-[#A54421] text-white text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Explore Initiatives</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
