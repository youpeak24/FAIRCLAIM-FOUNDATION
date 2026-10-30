import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Scale, 
  Compass, 
  Users, 
  BookOpen, 
  Sparkles, 
  Check, 
  ChevronRight
} from 'lucide-react';
import { organizationData } from '../data/organization';
import { proposedFocusAreas, galleryItems } from '../data/initiatives';
import type { GalleryItem } from '../data/initiatives';
import { ImageModal } from '../components/ImageModal';

export const Home: React.FC = () => {
  const [activePrincipleIndex, setActivePrincipleIndex] = useState(0);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activePrinciple = organizationData.guidingPrinciples[activePrincipleIndex];

  const handleOpenGalleryModal = (item: GalleryItem) => {
    setSelectedGalleryItem(item);
    setIsModalOpen(true);
  };

  const handleCloseGalleryModal = () => {
    setIsModalOpen(false);
    setSelectedGalleryItem(null);
  };

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section: Asymmetrical Editorial Balance with Interactive Matrix */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#E8E1D5]">
        {/* Subtle radial ambient highlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C85A32]/4 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Core Message & Primary CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Institutional Tag Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E1D5] shadow-xs mb-6">
                <span className="w-2 h-2 rounded-full bg-[#C85A32]" aria-hidden="true" />
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-[#142C20]">
                  Civic Fairness & Public Advocacy
                </span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-[68px] text-[#142C20] font-semibold tracking-tight leading-[1.08] mb-6">
                A fairer future. <br />
                <span className="italic font-normal text-[#204533] underline decoration-[#C85A32]/30 decoration-wavy decoration-1 underline-offset-8">
                  Built together.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#365342] leading-relaxed max-w-2xl mb-8 font-normal">
                {organizationData.purposeStatement}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  to="/initiatives"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#142C20] hover:bg-[#204533] text-[#FAF8F5] text-base font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#C85A32] group"
                >
                  <span>Explore Proposed Initiatives</span>
                  <ArrowRight className="w-4 h-4 text-[#C85A32] group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white hover:bg-[#F4EFE6] text-[#142C20] text-base font-semibold border border-[#E8E1D5] shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#C85A32]"
                >
                  <span>Contact The Foundation</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8C7A68]" />
                </Link>
              </div>

              {/* Baseline Credibility Indicators */}
              <div className="mt-12 pt-8 border-t border-[#E8E1D5] w-full grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#8C7A68]">
                    Foundational Axis
                  </div>
                  <div className="text-sm font-semibold text-[#142C20] mt-1">
                    Procedural Justice
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#8C7A68]">
                    Civic Approach
                  </div>
                  <div className="text-sm font-semibold text-[#142C20] mt-1">
                    Voluntary Dialogue
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#8C7A68]">
                    Engagement
                  </div>
                  <div className="text-sm font-semibold text-[#142C20] mt-1">
                    Grassroots Literacy
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Equilibrium & Principles Matrix */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg bg-white rounded-3xl p-7 sm:p-8 border border-[#E8E1D5] shadow-xl relative overflow-hidden">
                {/* Decorative terracotta radial aura */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#C85A32]/8 rounded-bl-full pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-[#E8E1D5] pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#142C20] flex items-center justify-center text-[#FAF8F5] shadow-xs">
                      <Scale className="w-5 h-5 text-[#C85A32]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#8C7A68] block">
                        Equilibrium Matrix
                      </span>
                      <h3 className="font-editorial text-lg font-bold text-[#142C20]">
                        Principles of Equity
                      </h3>
                    </div>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#F4EFE6] text-[#204533] font-medium border border-[#E8E1D5]">
                    Interactive
                  </span>
                </div>

                {/* Interactive Selector Tabs */}
                <div className="grid grid-cols-2 gap-2 mb-6" role="tablist" aria-label="Guiding Principles Selection">
                  {organizationData.guidingPrinciples.map((principle, index) => {
                    const isActive = index === activePrincipleIndex;
                    return (
                      <button
                        key={principle.title}
                        role="tab"
                        aria-selected={isActive}
                        aria-controls="principle-detail-panel"
                        onClick={() => setActivePrincipleIndex(index)}
                        className={`text-left p-3 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C85A32] ${
                          isActive 
                            ? 'bg-[#142C20] text-[#FAF8F5] border-[#142C20] shadow-sm' 
                            : 'bg-[#FAF8F5] text-[#204533] border-[#E8E1D5] hover:bg-[#F4EFE6]'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-mono ${
                            isActive ? 'bg-[#C85A32] text-white' : 'bg-[#E8E1D5] text-[#142C20]'
                          }`}>
                            0{index + 1}
                          </span>
                        </div>
                        <span className="line-clamp-1">{principle.title}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Principle Detail Display */}
                <div 
                  id="principle-detail-panel"
                  role="tabpanel"
                  className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D5] min-h-[140px] flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#C85A32]">
                        Pillar 0{activePrincipleIndex + 1} &bull; Focus
                      </span>
                      <span className="text-[11px] text-[#6E8276]">Core Mandate</span>
                    </div>
                    <h4 className="font-editorial text-lg font-bold text-[#142C20] mb-2">
                      {activePrinciple.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#465F50] leading-relaxed">
                      {activePrinciple.description}
                    </p>
                  </div>
                </div>

                {/* Bottom link */}
                <div className="mt-6 pt-5 border-t border-[#E8E1D5] flex items-center justify-between text-xs text-[#6B8073]">
                  <span>Provisional civic charter</span>
                  <Link 
                    to="/about" 
                    className="font-semibold text-[#C85A32] hover:text-[#A54421] inline-flex items-center gap-1 focus-visible:ring-1 focus-visible:ring-[#C85A32] rounded-xs"
                  >
                    <span>Read foundational ethos</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Full-Width Infinite Architectural Ticker */}
      <section className="bg-[#142C20] text-[#FAF8F5] py-4 overflow-hidden border-y border-[#204533] select-none" aria-label="Core Civic Tenets Marquee">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs font-mono tracking-[0.25em] uppercase text-[#D5CBBC]">
          <span>Procedural Fairness</span>
          <span className="text-[#C85A32]">✦</span>
          <span>Natural Justice</span>
          <span className="text-[#C85A32]">✦</span>
          <span>Community Dignity</span>
          <span className="text-[#C85A32]">✦</span>
          <span>Constructive Mediation</span>
          <span className="text-[#C85A32]">✦</span>
          <span>Public Rights Literacy</span>
          <span className="text-[#C85A32]">✦</span>
          <span>Institutional Transparency</span>
          <span className="text-[#C85A32]">✦</span>
          <span>Ethical Neutrality</span>
          <span className="text-[#C85A32]">✦</span>
          <span>Procedural Fairness</span>
          <span className="text-[#C85A32]">✦</span>
          <span>Natural Justice</span>
          <span className="text-[#C85A32]">✦</span>
          <span>Community Dignity</span>
          <span className="text-[#C85A32]">✦</span>
          <span>Constructive Mediation</span>
          <span className="text-[#C85A32]">✦</span>
          <span>Public Rights Literacy</span>
          <span className="text-[#C85A32]">✦</span>
          <span>Institutional Transparency</span>
          <span className="text-[#C85A32]">✦</span>
        </div>
      </section>

      {/* 3. Purpose Callout & Foundational Thesis */}
      <section className="py-20 sm:py-28 bg-[#F4EFE6] border-b border-[#E8E1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C85A32] mb-4 inline-block">
            Foundational Thesis
          </span>
          <blockquote className="font-editorial text-2xl sm:text-4xl md:text-[42px] text-[#142C20] font-normal leading-snug sm:leading-tight">
            &ldquo;Every individual deserves fair proceedings, transparent institutional reasoning, and an equitable forum to be respectfully heard.&rdquo;
          </blockquote>
          <div className="w-16 h-0.5 bg-[#C85A32] mx-auto my-8 opacity-60" />
          <p className="text-base sm:text-lg text-[#3D5A47] max-w-2xl mx-auto leading-relaxed">
            FAIRCLAIM FOUNDATION exists to ensure that complex administrative mechanisms and legal obscurities do not stand as insurmountable barriers to civic dignity, fair dispute resolution, and community self-determination.
          </p>
        </div>
      </section>

      {/* 4. Strategic Orientation: Distinct Dual Monoliths (Mission vs Vision) */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
              Strategic Orientation
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#142C20]">
              Our Mission & Vision
            </h2>
            <p className="mt-3 text-base text-[#465F50]">
              Anchored by immediate grounded civic action and oriented toward an enduring horizon of social equity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Mission Monolith: Dark Forest Grounded Focus */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#142C20] text-[#FAF8F5] relative overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#204533] border border-[#2E5A44] text-xs font-mono font-semibold tracking-wider uppercase text-[#C85A32] mb-8">
                  <Compass className="w-4 h-4" />
                  <span>The Grounded Mission</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#FAF8F5] mb-5 leading-snug">
                  Democratizing procedural fairness through accessible, community-grounded guidance.
                </h3>
                <p className="text-[#C5D3CB] text-sm sm:text-base leading-relaxed mb-8">
                  To identify administrative friction points, publish plain-language public rights materials, and facilitate neutral dispute mediation that empowers citizens to resolve grievances without debilitating litigation costs.
                </p>
                <div className="space-y-3 pt-6 border-t border-[#204533]">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#D5CBBC]">
                    <Check className="w-4 h-4 text-[#C85A32] shrink-0" />
                    <span>Plain-language civic navigational toolkits</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#D5CBBC]">
                    <Check className="w-4 h-4 text-[#C85A32] shrink-0" />
                    <span>Voluntary, structured mediation protocols</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#D5CBBC]">
                    <Check className="w-4 h-4 text-[#C85A32] shrink-0" />
                    <span>Independent, uncompromised ethical neutrality</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-[#204533] mt-8 relative z-10">
                <Link
                  to="/mission-vision"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#FAF8F5] hover:text-[#C85A32] transition-colors focus-visible:ring-1 focus-visible:ring-[#C85A32] rounded-xs"
                >
                  <span>Explore complete mission framework</span>
                  <ArrowRight className="w-4 h-4 text-[#C85A32]" />
                </Link>
              </div>
            </div>

            {/* Vision Monolith: Warm Ivory Horizon Perspective */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#E8E1D5] relative overflow-hidden flex flex-col justify-between shadow-xs">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#E8E1D5] text-xs font-mono font-semibold tracking-wider uppercase text-[#142C20] mb-8">
                  <Sparkles className="w-4 h-4 text-[#C85A32]" />
                  <span>The Enduring Vision</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#142C20] mb-5 leading-snug">
                  A society where natural justice and respectful dialogue form the baseline of civic life.
                </h3>
                <p className="text-[#465F50] text-sm sm:text-base leading-relaxed mb-8">
                  An inclusive civic landscape wherein every individual, regardless of socioeconomic standing, has transparent access to fair proceedings, balanced dispute settlement, and genuine civic dignity.
                </p>
                <div className="space-y-3 pt-6 border-t border-[#E8E1D5]">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#204533]">
                    <Check className="w-4 h-4 text-[#C85A32] shrink-0" />
                    <span>Transparent institutional claims procedures</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#204533]">
                    <Check className="w-4 h-4 text-[#C85A32] shrink-0" />
                    <span>Non-adversarial community dispute settlement</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#204533]">
                    <Check className="w-4 h-4 text-[#C85A32] shrink-0" />
                    <span>Civic empathy replacing bureaucratic indifference</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-[#E8E1D5] mt-8 relative z-10">
                <Link
                  to="/mission-vision"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#142C20] hover:text-[#C85A32] transition-colors focus-visible:ring-1 focus-visible:ring-[#C85A32] rounded-xs"
                >
                  <span>Explore strategic objectives</span>
                  <ArrowRight className="w-4 h-4 text-[#C85A32]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Asymmetric Bento Grid: Foundation Objectives */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
                Operational Framework
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#142C20]">
                Four Core Objectives
              </h2>
            </div>
            <p className="text-sm text-[#465F50] max-w-md leading-relaxed">
              Systematic operational commitments guiding the foundation&apos;s development and multi-stakeholder programming.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Bento Card 1: Wide Accent Card */}
            <div className="md:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E1D5] shadow-xs flex flex-col justify-between hover:border-[#142C20]/30 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-[#8C7A68] bg-[#F4EFE6] px-3 py-1 rounded-full border border-[#E8E1D5]">
                    Objective 01
                  </span>
                  <span className="text-xs font-semibold text-[#C85A32] uppercase tracking-wider">
                    {organizationData.coreObjectives[0].focus}
                  </span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#142C20] mb-4">
                  {organizationData.coreObjectives[0].title}
                </h3>
                <p className="text-sm sm:text-base text-[#465F50] leading-relaxed mb-6">
                  {organizationData.coreObjectives[0].summary}
                </p>
              </div>
              <div className="pt-4 border-t border-[#E8E1D5] flex items-center justify-between text-xs text-[#8C7A68]">
                <span>Grassroots accessibility</span>
                <span className="text-[#142C20] font-semibold">Priority Axis &bull; 2026-2027</span>
              </div>
            </div>

            {/* Bento Card 2: Square Card */}
            <div className="md:col-span-5 bg-white rounded-3xl p-8 border border-[#E8E1D5] shadow-xs flex flex-col justify-between hover:border-[#142C20]/30 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-[#8C7A68] bg-[#F4EFE6] px-3 py-1 rounded-full border border-[#E8E1D5]">
                    Objective 02
                  </span>
                  <span className="text-xs font-semibold text-[#C85A32] uppercase tracking-wider">
                    {organizationData.coreObjectives[1].focus}
                  </span>
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#142C20] mb-4">
                  {organizationData.coreObjectives[1].title}
                </h3>
                <p className="text-sm text-[#465F50] leading-relaxed mb-6">
                  {organizationData.coreObjectives[1].summary}
                </p>
              </div>
              <div className="pt-4 border-t border-[#E8E1D5] text-xs text-[#8C7A68]">
                <span>Neutral forum facilitation</span>
              </div>
            </div>

            {/* Bento Card 3: Square Card */}
            <div className="md:col-span-5 bg-white rounded-3xl p-8 border border-[#E8E1D5] shadow-xs flex flex-col justify-between hover:border-[#142C20]/30 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-[#8C7A68] bg-[#F4EFE6] px-3 py-1 rounded-full border border-[#E8E1D5]">
                    Objective 03
                  </span>
                  <span className="text-xs font-semibold text-[#C85A32] uppercase tracking-wider">
                    {organizationData.coreObjectives[2].focus}
                  </span>
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#142C20] mb-4">
                  {organizationData.coreObjectives[2].title}
                </h3>
                <p className="text-sm text-[#465F50] leading-relaxed mb-6">
                  {organizationData.coreObjectives[2].summary}
                </p>
              </div>
              <div className="pt-4 border-t border-[#E8E1D5] text-xs text-[#8C7A68]">
                <span>Evidence-based whitepapers</span>
              </div>
            </div>

            {/* Bento Card 4: Wide Accent Card */}
            <div className="md:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E1D5] shadow-xs flex flex-col justify-between hover:border-[#142C20]/30 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-[#8C7A68] bg-[#F4EFE6] px-3 py-1 rounded-full border border-[#E8E1D5]">
                    Objective 04
                  </span>
                  <span className="text-xs font-semibold text-[#C85A32] uppercase tracking-wider">
                    {organizationData.coreObjectives[3].focus}
                  </span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#142C20] mb-4">
                  {organizationData.coreObjectives[3].title}
                </h3>
                <p className="text-sm sm:text-base text-[#465F50] leading-relaxed mb-6">
                  {organizationData.coreObjectives[3].summary}
                </p>
              </div>
              <div className="pt-4 border-t border-[#E8E1D5] flex items-center justify-between text-xs text-[#8C7A68]">
                <span>Workshops & public guides</span>
                <span className="text-[#142C20] font-semibold">Civic Empowerment</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Proposed Focus Areas / Initiatives Preview */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
                Civic Initiatives
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#142C20]">
                Proposed Focus Areas
              </h2>
            </div>
            <Link
              to="/initiatives"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#142C20] hover:text-[#C85A32] transition-colors focus-visible:ring-1 focus-visible:ring-[#C85A32] rounded-xs group"
            >
              <span>Explore all initiatives & gallery</span>
              <ArrowRight className="w-4 h-4 text-[#C85A32] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {proposedFocusAreas.slice(0, 3).map((area) => (
              <div
                key={area.id}
                className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#E8E1D5] shadow-xs flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs px-3 py-1 rounded-full bg-white text-[#204533] font-medium border border-[#E8E1D5]">
                      {area.category}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#C85A32]">
                      {area.status}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-[#142C20] mb-3 leading-snug group-hover:text-[#204533] transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-sm text-[#465F50] leading-relaxed mb-6">
                    {area.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E1D5] flex items-center justify-between text-xs">
                  <span className="text-[#8C7A68]">Action framework</span>
                  <Link
                    to="/initiatives"
                    className="font-semibold text-[#142C20] hover:text-[#C85A32] inline-flex items-center gap-1"
                  >
                    <span>Read scope</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C85A32]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Community Engagement Gallery Preview with Modal Interaction */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
              Community Engagement
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#142C20]">
              Engagement Concepts
            </h2>
            <p className="mt-3 text-base text-[#465F50]">
              Click any concept preview card to inspect the collaborative methodology in high detail.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl bg-white border border-[#E8E1D5] overflow-hidden shadow-xs hover:border-[#142C20]/40 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Visual conceptual motif */}
                <button
                  type="button"
                  onClick={() => handleOpenGalleryModal(item)}
                  className="w-full h-44 bg-[#142C20] flex items-center justify-center p-6 text-center relative overflow-hidden group-hover:bg-[#1B3B2B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
                  aria-label={`Enlarge ${item.title}`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#FAF8F5] mb-2 group-hover:scale-110 transition-transform">
                    {item.visualTheme === 'dialogue' && <Users className="w-7 h-7 text-[#C85A32]" />}
                    {item.visualTheme === 'education' && <BookOpen className="w-7 h-7 text-[#FAF8F5]" />}
                    {item.visualTheme === 'justice' && <Scale className="w-7 h-7 text-[#C85A32]" />}
                    {item.visualTheme === 'community' && <Sparkles className="w-7 h-7 text-[#FAF8F5]" />}
                  </div>
                  <span className="absolute bottom-3 right-3 text-[11px] font-mono px-2 py-0.5 rounded-md bg-black/50 text-white opacity-80 group-hover:opacity-100">
                    Preview
                  </span>
                </button>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-semibold text-[#C85A32] uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-editorial text-lg font-bold text-[#142C20] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#465F50] line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#E8E1D5] flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={() => handleOpenGalleryModal(item)}
                      className="font-semibold text-[#142C20] hover:text-[#C85A32] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inspect schematic</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#C85A32]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why It Matters: Magazine Editorial Spread */}
      <section className="py-20 sm:py-28 bg-[#F4EFE6] border-b border-[#E8E1D5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
                The Societal Need
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#142C20] leading-tight">
                Why procedural fairness is fundamental.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-4 text-sm sm:text-base text-[#365342] leading-relaxed">
              <p>
                When administrative decisions lack transparency or when dispute resolution is out of reach for ordinary individuals, community cohesion erodes. Procedural fairness is not a technical legal formality—it is a lived human experience that affirms personal dignity and civic respect.
              </p>
              <p>
                By building awareness of fair hearing standards, promoting accessible grievance redress mechanisms, and providing neutral spaces for voluntary mediation, FAIRCLAIM FOUNDATION aims to cultivate a durable culture of civic equity across all communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final Call to Action Monolith */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 sm:p-16 rounded-3xl bg-[#142C20] text-[#FAF8F5] text-center flex flex-col items-center shadow-2xl relative overflow-hidden">
            {/* Subtle radial ambient light */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C85A32]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C85A32] block mb-4">
                Join The Dialogue
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold mb-5 text-[#FAF8F5] leading-tight">
                Connect with FAIRCLAIM FOUNDATION
              </h2>
              <p className="text-[#C5D3CB] text-base sm:text-lg leading-relaxed mb-10">
                Whether you represent a community organization, seek informational guidance, or wish to explore collaborative civic initiatives, our doors are open.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#C85A32] hover:bg-[#A54421] text-white text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Submit an Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#204533] hover:bg-[#2A5942] text-[#FAF8F5] text-base font-medium border border-[#2E5A44] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#C85A32]"
                >
                  <span>Learn About Our Principles</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessible Gallery Image Modal */}
      <ImageModal
        item={selectedGalleryItem}
        isOpen={isModalOpen}
        onClose={handleCloseGalleryModal}
      />
    </div>
  );
};
