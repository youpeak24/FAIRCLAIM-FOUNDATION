import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Scale, 
  Compass, 
  FileCheck,
  CheckCircle2
} from 'lucide-react';
import { organizationData } from '../data/organization';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-[#F4EFE6] border-b border-[#E8E1D5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E1D5] mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C85A32]" aria-hidden="true" />
              <span className="text-[11px] font-mono uppercase tracking-widest font-semibold text-[#142C20]">
                About The Organization
              </span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl text-[#142C20] font-semibold tracking-tight leading-[1.1] mb-6">
              Championing systemic fairness and civic empowerment.
            </h1>
            <p className="text-lg sm:text-xl text-[#365342] leading-relaxed">
              FAIRCLAIM FOUNDATION is an independent civic platform dedicated to making procedural fairness, transparent communication, and community dialogue accessible realities for all citizens.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Purpose & Approach */}
      <section className="py-20 sm:py-28 border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
                Our Approach
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#142C20] leading-snug mb-6">
                Bridging institutional complexity and community voice.
              </h2>
              <p className="text-base sm:text-lg text-[#465F50] leading-relaxed mb-8">
                Too often, administrative and regulatory frameworks are dense, opaque, and intimidating. When claims or disputes arise, individuals without specialized representation face profound procedural disadvantages.
              </p>
              
              <div className="p-7 rounded-3xl bg-[#F4EFE6] border border-[#E8E1D5] relative overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E1D5] flex items-center justify-center text-[#142C20] mb-4">
                  <Scale className="w-5 h-5 text-[#C85A32]" />
                </div>
                <h4 className="font-editorial text-xl font-bold text-[#142C20] mb-2">
                  Our Fundamental Position
                </h4>
                <p className="text-sm text-[#365342] leading-relaxed">
                  Fairness is not an extraordinary concession granted to those with financial leverage; it is the baseline requirement upon which legitimate civic trust rests.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E1D5] shadow-xs hover:border-[#142C20]/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#142C20] text-[#FAF8F5] flex items-center justify-center text-sm font-mono font-bold">
                    01
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-[#142C20]">
                    Constructive, Non-Adversarial Engagement
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#465F50] leading-relaxed">
                  Rather than escalating disputes into protracted and financially ruinous confrontation, we focus on identifying shared facts, clarifying misunderstandings, and facilitating mediation formats that yield durable, voluntary reconciliation.
                </p>
              </div>

              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E1D5] shadow-xs hover:border-[#142C20]/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#204533] text-[#FAF8F5] flex items-center justify-center text-sm font-mono font-bold">
                    02
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-[#142C20]">
                    Demystifying Administrative Language
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#465F50] leading-relaxed">
                  We translate dense administrative protocols into plain, actionable language so everyday community members understand the criteria by which decisions are evaluated and can present their perspective effectively.
                </p>
              </div>

              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E1D5] shadow-xs hover:border-[#142C20]/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#C85A32] text-white flex items-center justify-center text-sm font-mono font-bold">
                    03
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-[#142C20]">
                    Evidence-Grounded Systemic Insight
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#465F50] leading-relaxed">
                  Our advocacy is grounded in observed real-world barriers. By systematically gathering insights from grassroots community experiences, we contribute constructive recommendations to institutional policymakers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Values & Guiding Principles */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
              Foundational Ethics
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#142C20]">
              Guiding Principles
            </h2>
            <p className="mt-3 text-base text-[#465F50]">
              Four core principles anchoring our programmatic strategy, community dialogue, and organizational governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizationData.guidingPrinciples.map((val, idx) => (
              <div
                key={val.title}
                className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E8E1D5] flex flex-col justify-between hover:border-[#142C20]/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-[#E8E1D5] flex items-center justify-center text-[#142C20] mb-6 shadow-xs group-hover:scale-105 transition-transform">
                    {idx === 0 && <Scale className="w-7 h-7 text-[#142C20]" />}
                    {idx === 1 && <Users className="w-7 h-7 text-[#C85A32]" />}
                    {idx === 2 && <Compass className="w-7 h-7 text-[#204533]" />}
                    {idx === 3 && <ShieldCheck className="w-7 h-7 text-[#142C20]" />}
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-[#142C20] mb-3">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#465F50] leading-relaxed">
                    {val.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#E8E1D5] text-xs font-mono text-[#8C7A68]">
                  Pillar 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Phased Civic Roadmap */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
              Development Roadmap
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#142C20]">
              Operational Horizons
            </h2>
            <p className="mt-3 text-base text-[#465F50]">
              Our deliberate roadmap prioritizing ethical governance, thorough stakeholder review, and measured community rollout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-[#142C20]/20 shadow-sm relative">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#142C20] text-[#FAF8F5] text-xs font-mono font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] animate-pulse" />
                Current Phase
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#142C20] mb-3">
                Phase 1: Institutional Charter & Setup
              </h3>
              <p className="text-sm text-[#465F50] leading-relaxed mb-4">
                Formulating core guiding principles, establishing legal registration parameters, and developing foundational informational frameworks.
              </p>
              <ul className="text-xs text-[#365342] space-y-2 border-t border-[#E8E1D5] pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-700" />
                  <span>Provisional charter formulation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-700" />
                  <span>Website informational launch</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#E8E1D5] shadow-xs">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EFE6] text-[#204533] text-xs font-mono font-semibold mb-6">
                Upcoming Phase
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#142C20] mb-3">
                Phase 2: Community Consultations
              </h3>
              <p className="text-sm text-[#465F50] leading-relaxed mb-4">
                Convening listening circles with neighborhood advocates, legal clinics, and civic organizers to ground initiatives in local reality.
              </p>
              <ul className="text-xs text-[#365342] space-y-2 border-t border-[#E8E1D5] pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                  <span>Pilot dialogue roundtables</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                  <span>Procedural friction assessment</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#E8E1D5] shadow-xs">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EFE6] text-[#204533] text-xs font-mono font-semibold mb-6">
                Future Horizon
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#142C20] mb-3">
                Phase 3: Public Knowledge Hub
              </h3>
              <p className="text-sm text-[#465F50] leading-relaxed mb-4">
                Releasing modular civic rights toolkits, establishing voluntary mediation guidelines, and publishing research whitepapers.
              </p>
              <ul className="text-xs text-[#365342] space-y-2 border-t border-[#E8E1D5] pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                  <span>Public rights educational guides</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                  <span>Annual civic equity report</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Institutional Governance Disclosure */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E8E1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#E8E1D5] shadow-xs flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-white border border-[#E8E1D5] flex items-center justify-center shrink-0 text-[#142C20] shadow-xs">
              <FileCheck className="w-7 h-7 text-[#C85A32]" />
            </div>
            <div className="space-y-4">
              <h3 className="font-editorial text-2xl font-bold text-[#142C20]">
                Institutional Governance & Integrity Commitment
              </h3>
              <p className="text-sm sm:text-base text-[#465F50] leading-relaxed">
                In adherence to our strict transparency pledge, organizational registration filings, statutory identification numbers, and verified governing board rosters are subject to formal confirmation. To ensure absolute veracity, this website does not publish unverified metrics, past completed program counts, or unsubstantiated partner lists.
              </p>
              <p className="text-xs text-[#8C7A68]">
                For queries regarding official documentation or governance filings, please contact our administrative desk directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Navigation Connection */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#F4EFE6] border border-[#E8E1D5] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#C85A32] block mb-2">
                  Strategic Perspective
                </span>
                <h3 className="font-editorial text-3xl font-bold text-[#142C20] mb-3">
                  Explore Mission & Vision
                </h3>
                <p className="text-sm sm:text-base text-[#465F50] leading-relaxed mb-8">
                  Review our distinct mission framework and aspirational vision for accessible dispute resolution and civic balance.
                </p>
              </div>
              <div>
                <Link
                  to="/mission-vision"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#142C20] hover:bg-[#204533] text-[#FAF8F5] text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#C85A32]"
                >
                  <span>View Mission & Vision</span>
                  <ArrowRight className="w-4 h-4 text-[#C85A32]" />
                </Link>
              </div>
            </div>

            <div className="p-8 sm:p-12 rounded-3xl bg-[#142C20] text-[#FAF8F5] flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#C85A32] block mb-2">
                  Actionable Programs
                </span>
                <h3 className="font-editorial text-3xl font-bold text-[#FAF8F5] mb-3">
                  Review Proposed Initiatives
                </h3>
                <p className="text-sm sm:text-base text-[#C5D3CB] leading-relaxed mb-8">
                  Examine our four proposed core focus areas and conceptual public engagement gallery.
                </p>
              </div>
              <div>
                <Link
                  to="/initiatives"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#C85A32] hover:bg-[#A54421] text-white text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-white"
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
