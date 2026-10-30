import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Scale, 
  Compass, 
  Users, 
  BookOpen, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { organizationData } from '../data/organization';
import { proposedFocusAreas, galleryItems } from '../data/initiatives';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section: Asymmetrical Editorial Balance */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#E8E1D5]">
        {/* Subtle geometric background texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#142C20_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Core Message & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Institutional Tag Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F4EFE6] border border-[#E8E1D5] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#C85A32]" aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#142C20]">
                  Civic Fairness & Community Advocacy
                </span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#142C20] font-semibold tracking-tight leading-[1.12] mb-6">
                A fairer future. <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#204533]">Built together.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#365342] leading-relaxed max-w-2xl mb-8 font-normal">
                {organizationData.purposeStatement}
              </p>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  to="/initiatives"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#142C20] hover:bg-[#204533] text-[#FAF8F5] text-base font-semibold shadow-md hover:shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-[#C85A32]"
                >
                  <span>Explore Our Initiatives</span>
                  <ArrowRight className="w-4 h-4 text-[#C85A32]" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F4EFE6] text-[#142C20] text-base font-semibold border border-[#E8E1D5] shadow-xs hover:shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-[#C85A32]"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight className="w-4 h-4 text-[#6E8276]" />
                </Link>
              </div>

              {/* Baseline Credibility Indicators */}
              <div className="mt-10 pt-8 border-t border-[#E8E1D5] w-full grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#8C7A68]">
                    Focus
                  </div>
                  <div className="text-sm font-medium text-[#142C20] mt-0.5">
                    Procedural Justice
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#8C7A68]">
                    Ethos
                  </div>
                  <div className="text-sm font-medium text-[#142C20] mt-0.5">
                    Civic Empowerment
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#8C7A68]">
                    Engagement
                  </div>
                  <div className="text-sm font-medium text-[#142C20] mt-0.5">
                    Grassroots Dialogue
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Graphic Composition */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-[#E8E1D5] shadow-xl relative overflow-hidden">
                {/* Decorative terracotta corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C85A32]/5 rounded-bl-full pointer-events-none" />

                <div className="flex items-center justify-between border-b border-[#E8E1D5] pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#142C20] flex items-center justify-center text-[#FAF8F5]">
                      <Scale className="w-5 h-5 text-[#C85A32]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest font-bold text-[#8C7A68]">
                        Foundation Framework
                      </div>
                      <div className="font-editorial text-lg font-bold text-[#142C20]">
                        Principles of Equity
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#F4EFE6] text-[#204533] font-medium border border-[#E8E1D5]">
                    Core Tenets
                  </span>
                </div>

                <div className="space-y-4">
                  {organizationData.guidingPrinciples.map((principle, idx) => (
                    <div 
                      key={principle.title}
                      className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E1D5] transition-colors hover:border-[#204533]/30"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-5 h-5 rounded-full bg-[#204533] text-[#FAF8F5] text-xs flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        <h4 className="font-semibold text-sm text-[#142C20]">
                          {principle.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#4A6354] pl-7 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-[#E8E1D5] flex items-center justify-between text-xs text-[#6B8073]">
                  <span>Independent civic platform</span>
                  <Link 
                    to="/about" 
                    className="font-semibold text-[#C85A32] hover:text-[#A54421] inline-flex items-center gap-1 focus-visible:ring-1 focus-visible:ring-[#C85A32] rounded-xs"
                  >
                    <span>Read our approach</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Purpose Callout Statement */}
      <section className="py-16 sm:py-20 bg-[#F4EFE6] border-b border-[#E8E1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C85A32] mb-3 inline-block">
            Our Central Purpose
          </span>
          <blockquote className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#142C20] font-normal leading-snug sm:leading-tight">
            &ldquo;Every person deserves fair procedures, transparent institutional decisions, and the opportunity to have their voice respectfully heard.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm sm:text-base text-[#465F50] max-w-2xl mx-auto leading-relaxed">
            FAIRCLAIM FOUNDATION exists to ensure that complex civic and administrative procedures do not stand as insurmountable barriers to justice, community self-advocacy, and social equity.
          </p>
        </div>
      </section>

      {/* 3. About Preview Section */}
      <section className="py-16 sm:py-24 border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C85A32]">
                About The Foundation
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#142C20] leading-tight">
                Championing equity through informed dialogue and systemic transparency.
              </h2>
              <p className="text-base sm:text-lg text-[#365342] leading-relaxed">
                {organizationData.extendedDescription}
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#142C20] hover:text-[#C85A32] transition-colors focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded-xs"
                >
                  <span className="underline underline-offset-4 decoration-[#C85A32]/40 hover:decoration-[#C85A32]">
                    Learn more about our team and guiding principles
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#C85A32]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-[#E8E1D5] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] flex items-center justify-center text-[#142C20] mb-4">
                    <ShieldCheck className="w-5 h-5 text-[#C85A32]" />
                  </div>
                  <h3 className="font-editorial text-xl font-semibold text-[#142C20] mb-2">
                    Ethical Neutrality
                  </h3>
                  <p className="text-xs sm:text-sm text-[#465F50] leading-relaxed">
                    Operating without institutional bias, serving purely as an objective advocate for procedural fairness.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E8E1D5] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] flex items-center justify-center text-[#142C20] mb-4">
                    <Users className="w-5 h-5 text-[#142C20]" />
                  </div>
                  <h3 className="font-editorial text-xl font-semibold text-[#142C20] mb-2">
                    Grassroots Reach
                  </h3>
                  <p className="text-xs sm:text-sm text-[#465F50] leading-relaxed">
                    Connecting directly with local communities to understand real-world obstacles and procedural friction.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Mission & Vision Overview (Distinct Treatments) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
              Strategic Orientation
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#142C20]">
              Our Mission & Vision
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#465F50]">
              Defined by an immediate commitment to actionable fairness and an enduring horizon of civic harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card: Action-oriented, grounded deep forest tone */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#142C20] text-[#FAF8F5] relative overflow-hidden flex flex-col justify-between shadow-lg">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#204533] border border-[#2E5A44] text-xs font-semibold tracking-wider uppercase text-[#C85A32] mb-6">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Our Mission</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#FAF8F5] mb-4">
                  Democratizing procedural fairness through actionable community guidance.
                </h3>
                <p className="text-[#C5D3CB] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  To identify systemic administrative barriers, provide plain-language educational resources, and facilitate balanced dispute dialogue—empowering citizens and organizations to resolve claims constructively.
                </p>
              </div>
              <div className="pt-4 border-t border-[#204533] relative z-10">
                <Link
                  to="/mission-vision"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#FAF8F5] hover:text-[#C85A32] transition-colors focus-visible:ring-1 focus-visible:ring-[#C85A32] rounded-xs"
                >
                  <span>Read complete mission framework</span>
                  <ArrowRight className="w-4 h-4 text-[#C85A32]" />
                </Link>
              </div>
            </div>

            {/* Vision Card: Aspirational, warm ivory tone */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E8E1D5] relative overflow-hidden flex flex-col justify-between shadow-xs">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#E8E1D5] text-xs font-semibold tracking-wider uppercase text-[#142C20] mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Our Vision</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#142C20] mb-4">
                  A society where equity and respectful dialogue form the baseline of civic life.
                </h3>
                <p className="text-[#365342] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  An inclusive civic landscape wherein every individual, regardless of socioeconomic standing, has transparent access to fair proceedings, balanced dispute settlement, and genuine civic dignity.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E8E1D5] relative z-10">
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

      {/* 5. Foundation Objectives Overview */}
      <section className="py-16 sm:py-24 border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
                Operational Framework
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#142C20]">
                Core Foundation Objectives
              </h2>
            </div>
            <p className="text-sm text-[#465F50] max-w-md">
              Four grounded pillars guiding our initial development and multi-stakeholder programming.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizationData.coreObjectives.map((obj, i) => (
              <div
                key={obj.id}
                className="p-6 rounded-2xl bg-white border border-[#E8E1D5] shadow-xs flex flex-col justify-between hover:border-[#204533]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#8C7A68]">
                      0{i + 1}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-[#F4EFE6] text-[#142C20] font-medium border border-[#E8E1D5]">
                      {obj.focus}
                    </span>
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-[#142C20] mb-2 leading-snug">
                    {obj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#465F50] leading-relaxed">
                    {obj.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Proposed Focus Areas / Initiatives Preview */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
                Civic Initiatives
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#142C20]">
                Proposed Focus Areas
              </h2>
            </div>
            <Link
              to="/initiatives"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#142C20] hover:text-[#C85A32] transition-colors focus-visible:ring-1 focus-visible:ring-[#C85A32] rounded-xs"
            >
              <span>View all initiatives & gallery</span>
              <ArrowRight className="w-4 h-4 text-[#C85A32]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {proposedFocusAreas.slice(0, 3).map((area) => (
              <div
                key={area.id}
                className="bg-white rounded-3xl p-7 border border-[#E8E1D5] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#F4EFE6] text-[#204533] font-medium border border-[#E8E1D5]">
                      {area.category}
                    </span>
                    <span className="text-[11px] font-semibold text-[#C85A32]">
                      {area.status}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-[#142C20] mb-3 leading-snug">
                    {area.title}
                  </h3>

                  <p className="text-sm text-[#465F50] leading-relaxed mb-6">
                    {area.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E1D5] flex items-center justify-between text-xs">
                  <span className="text-[#8C7A68]">Scope Overview</span>
                  <Link
                    to="/initiatives"
                    className="font-semibold text-[#142C20] hover:text-[#C85A32] inline-flex items-center gap-1"
                  >
                    <span>Read scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Community Activities & Gallery Preview */}
      <section className="py-16 sm:py-24 border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
              Community Engagement
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#142C20]">
              Engagement Concepts & Dialogues
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#465F50]">
              Illustrating the core formats through which FAIRCLAIM FOUNDATION plans to connect with the public.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-white border border-[#E8E1D5] overflow-hidden shadow-xs hover:border-[#204533]/40 transition-all flex flex-col"
              >
                {/* Visual placeholder card with SVG motif */}
                <div className="h-44 bg-[#142C20] flex items-center justify-center p-6 text-center relative overflow-hidden group-hover:bg-[#204533] transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#FAF8F5] mb-2">
                    <BookOpen className="w-6 h-6 text-[#C85A32]" />
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-[#C85A32] uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-editorial text-base font-bold text-[#142C20] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#465F50] line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#E8E1D5]">
                    <Link
                      to="/initiatives"
                      className="text-xs font-semibold text-[#142C20] hover:text-[#C85A32] inline-flex items-center gap-1"
                    >
                      <span>Explore gallery</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C85A32]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why It Matters: Editorial Section */}
      <section className="py-16 sm:py-24 bg-[#F4EFE6] border-b border-[#E8E1D5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
                The Societal Need
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#142C20] leading-tight">
                Why procedural fairness matters to everyone.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-4 text-sm sm:text-base text-[#365342] leading-relaxed">
              <p>
                When administrative decisions lack clarity, or when dispute resolution is out of reach for ordinary individuals, community trust erodes. Fairness is not simply a legal outcome—it is an experiential process that affirms human dignity.
              </p>
              <p>
                By building awareness of fair procedures, advocating for accessible grievance channels, and encouraging voluntary mediation, FAIRCLAIM FOUNDATION aims to cultivate an enduring culture of civic equity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final Contact CTA Banner */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#142C20] text-[#FAF8F5] text-center flex flex-col items-center shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C85A32] block mb-3">
                Join The Dialogue
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold mb-4 text-[#FAF8F5]">
                Connect with FAIRCLAIM FOUNDATION
              </h2>
              <p className="text-[#C5D3CB] text-sm sm:text-base leading-relaxed mb-8">
                Whether you represent a community organization, seek informational guidance, or wish to explore collaborative civic initiatives, our doors are open.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#C85A32] hover:bg-[#A54421] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Submit an Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#204533] hover:bg-[#2A5942] text-[#FAF8F5] text-base font-medium border border-[#2E5A44] transition-all focus-visible:ring-2 focus-visible:ring-[#C85A32]"
                >
                  <span>Learn About Our Principles</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
