import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Eye, 
  Scale
} from 'lucide-react';
import { organizationData } from '../data/organization';

export const MissionVision: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-[#F4EFE6] border-b border-[#E8E1D5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E1D5] mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C85A32]" aria-hidden="true" />
              <span className="text-[11px] font-mono uppercase tracking-widest font-semibold text-[#142C20]">
                Institutional Direction & Purpose
              </span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl text-[#142C20] font-semibold tracking-tight leading-[1.1] mb-6">
              Our Mission & Vision
            </h1>
            <p className="text-lg sm:text-xl text-[#365342] leading-relaxed">
              Grounding our everyday commitments in practical procedural justice, while orienting our long-term efforts toward a society where equitable consideration is universally upheld.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Distinct Visual Treatments: Mission vs Vision */}
      <section className="py-20 sm:py-28 border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Mission Section: Grounded, Action-Oriented Deep Forest Surface */}
            <div className="rounded-3xl bg-[#142C20] text-[#FAF8F5] p-8 sm:p-14 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#204533] border border-[#2E5A44] text-xs font-mono font-semibold uppercase tracking-wider text-[#C85A32] mb-8">
                  <Compass className="w-4 h-4" />
                  <span>The Foundation Mission</span>
                </div>

                <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#FAF8F5] leading-tight mb-6">
                  Democratizing procedural fairness through actionable community guidance.
                </h2>

                <p className="text-[#C5D3CB] text-base sm:text-lg leading-relaxed mb-8">
                  Our mission is to dismantle complex procedural barriers that prevent everyday people and civic groups from receiving fair treatment. We provide plain-language educational resources, promote transparent institutional standards, and offer neutral dispute dialogue mechanisms that resolve grievances equitably.
                </p>

                <div className="space-y-4 pt-6 border-t border-[#204533]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#E2EBE5] leading-relaxed">
                      Empowering community members with clear, actionable knowledge of their procedural rights.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#E2EBE5] leading-relaxed">
                      Fostering voluntary dispute resolution that avoids financial and emotional depletion.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#E2EBE5] leading-relaxed">
                      Maintaining complete independence and objective neutrality in all civic facilitation.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Section: Aspirational, Horizon-Oriented Warm Ivory Surface */}
            <div className="rounded-3xl bg-white border border-[#E8E1D5] p-8 sm:p-14 flex flex-col justify-between shadow-xs relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EFE6] border border-[#E8E1D5] text-xs font-mono font-semibold uppercase tracking-wider text-[#142C20] mb-8">
                  <Eye className="w-4 h-4 text-[#C85A32]" />
                  <span>The Foundation Vision</span>
                </div>

                <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#142C20] leading-tight mb-6">
                  A society where equity and respectful dialogue form the baseline of civic life.
                </h2>

                <p className="text-[#465F50] text-base sm:text-lg leading-relaxed mb-8">
                  We envision a future where fairness is not contingent on wealth, social status, or administrative sophistication. In this vision, public and private decision-makers adhere transparently to natural justice, and communities possess the institutional literacy to advocate for themselves with quiet dignity.
                </p>

                <div className="space-y-4 pt-6 border-t border-[#E8E1D5]">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#365342] leading-relaxed">
                      Institutions where procedures are transparent, accountable, and understandable.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#365342] leading-relaxed">
                      Civic spaces where divergent parties resolve disputes through structured consensus.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#365342] leading-relaxed">
                      A culture where listening and procedural integrity replace bureaucratic indifference.
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Strategic Objectives in Concise, Readable Thematic Sections */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
              Operational Focus
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#142C20]">
              Strategic Objectives
            </h2>
            <p className="mt-3 text-base text-[#465F50]">
              Operational commitments translated into four focused spheres of activity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {organizationData.coreObjectives.map((obj, index) => (
              <div 
                key={obj.id}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E1D5] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-9 h-9 rounded-xl bg-[#F4EFE6] border border-[#E8E1D5] flex items-center justify-center font-mono text-sm font-bold text-[#142C20]">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#C85A32] uppercase tracking-wider">
                      {obj.focus}
                    </span>
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-[#142C20] mb-3">
                    {obj.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#465F50] leading-relaxed mb-6">
                    {obj.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E1D5] flex items-center justify-between text-xs text-[#8C7A68]">
                  <span>Focus: Procedural Justice & Community Guidance</span>
                  <span className="font-semibold text-[#142C20]">Priority Stream</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Review Status Note & Next Steps */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl bg-[#F4EFE6] border border-[#E8E1D5] flex items-center justify-center text-[#142C20] mb-6 shadow-xs">
            <Scale className="w-7 h-7 text-[#C85A32]" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#142C20] mb-4">
            Grounded in Principled Governance
          </h2>
          <p className="text-base text-[#465F50] max-w-2xl leading-relaxed mb-8">
            These statements represent the draft strategic framework of FAIRCLAIM FOUNDATION. Specific programmatic targets and metrics will be updated following formal board ratification.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/initiatives"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-[#142C20] hover:bg-[#204533] text-[#FAF8F5] text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#C85A32]"
            >
              <span>Explore Proposed Initiatives</span>
              <ArrowRight className="w-4 h-4 text-[#C85A32]" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white hover:bg-[#F4EFE6] text-[#142C20] text-sm font-semibold border border-[#E8E1D5] transition-colors focus-visible:ring-2 focus-visible:ring-[#C85A32]"
            >
              <span>Contact The Foundation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
