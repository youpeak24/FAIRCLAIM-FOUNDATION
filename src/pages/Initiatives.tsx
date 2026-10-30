import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ZoomIn, 
  Sparkles, 
  BookOpen, 
  Users, 
  Scale, 
  Video, 
  Info,
  ArrowRight,
  Filter,
  ChevronRight
} from 'lucide-react';
import { proposedFocusAreas, galleryItems, foundationVideos } from '../data/initiatives';
import type { GalleryItem, FocusArea } from '../data/initiatives';
import { ImageModal } from '../components/ImageModal';

export const Initiatives: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...Array.from(new Set(proposedFocusAreas.map((a) => a.category)))];
    return cats;
  }, []);

  // Filtered areas
  const filteredAreas = useMemo(() => {
    if (selectedCategory === 'All') return proposedFocusAreas;
    return proposedFocusAreas.filter((a) => a.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenModal = (item: GalleryItem) => {
    setSelectedGalleryItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGalleryItem(null);
  };

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-[#F4EFE6] border-b border-[#E8E1D5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E1D5] mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C85A32]" aria-hidden="true" />
              <span className="text-[11px] font-mono uppercase tracking-widest font-semibold text-[#142C20]">
                Activities & Civic Initiatives
              </span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl text-[#142C20] font-semibold tracking-tight leading-[1.1] mb-6">
              Our Initiatives & Proposed Focus Areas
            </h1>
            <p className="text-lg sm:text-xl text-[#365342] leading-relaxed">
              Explore our structured focus areas, civic dialogues, public education frameworks, and community engagement concepts designed to foster systemic procedural equity.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Proposed Focus Areas Section with Interactive Category Filter */}
      <section className="py-20 sm:py-28 border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Filter Controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
                Programmatic Framework
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#142C20]">
                Strategic Priority Tracks
              </h2>
            </div>

            {/* Interactive Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter initiatives by category">
              <span className="text-xs font-mono text-[#8C7A68] mr-2 flex items-center gap-1.5 hidden sm:inline-flex">
                <Filter className="w-3.5 h-3.5 text-[#C85A32]" />
                Filter:
              </span>
              {categories.map((cat) => {
                const isActive = cat === selectedCategory;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C85A32] ${
                      isActive
                        ? 'bg-[#142C20] text-[#FAF8F5] shadow-xs'
                        : 'bg-[#F4EFE6] text-[#204533] border border-[#E8E1D5] hover:bg-white'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredAreas.map((area: FocusArea) => (
              <article
                key={area.id}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E1D5] shadow-xs flex flex-col justify-between hover:border-[#204533]/40 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <span className="text-xs px-3.5 py-1.5 rounded-full bg-[#F4EFE6] text-[#204533] font-medium border border-[#E8E1D5]">
                      {area.category}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#C85A32] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                      {area.status}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#142C20] mb-4 leading-snug">
                    {area.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#465F50] leading-relaxed mb-8">
                    {area.summary}
                  </p>

                  <div className="mb-8 pt-6 border-t border-[#E8E1D5]">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8C7A68] mb-4">
                      Planned Scope of Action:
                    </h4>
                    <ul className="space-y-2.5">
                      {area.fullScope.map((scopeItem, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#365342] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] mt-2 shrink-0" />
                          <span>{scopeItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#E8E1D5] bg-[#FAF8F5] -mx-8 -mb-8 sm:-mx-10 sm:-mb-10 p-7 rounded-b-3xl">
                  <div className="text-[11px] font-mono font-semibold text-[#8C7A68] uppercase tracking-wider mb-1.5">
                    Intended Community Impact
                  </div>
                  <div className="text-sm text-[#142C20] font-semibold leading-relaxed">
                    {area.intendedImpact}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Responsive Gallery Section with Accessible Image Enlargement */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
                Civic Methodology
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#142C20]">
                Community Engagement Gallery
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#465F50] max-w-md leading-relaxed">
              Click any concept preview card to inspect the underlying framework schematic and community interaction methodology in our accessible dialog viewer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-[#E8E1D5] overflow-hidden shadow-xs flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Interactive preview trigger */}
                <button
                  type="button"
                  onClick={() => handleOpenModal(item)}
                  className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded-t-3xl"
                  aria-label={`Enlarge concept preview for ${item.title}`}
                >
                  <div className="h-52 bg-[#142C20] flex items-center justify-center relative p-6 group-hover:bg-[#1B3B2B] transition-colors">
                    {/* Visual schematic icon */}
                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-[#FAF8F5] group-hover:scale-110 transition-transform">
                      {item.visualTheme === 'dialogue' && <Users className="w-8 h-8 text-[#C85A32]" />}
                      {item.visualTheme === 'education' && <BookOpen className="w-8 h-8 text-[#FAF8F5]" />}
                      {item.visualTheme === 'justice' && <Scale className="w-8 h-8 text-[#C85A32]" />}
                      {item.visualTheme === 'community' && <Sparkles className="w-8 h-8 text-[#FAF8F5]" />}
                    </div>

                    {/* Enlargement Hint Pill */}
                    <div className="absolute bottom-3.5 right-3.5 px-2.5 py-1 rounded-lg bg-black/60 text-white text-[11px] font-mono font-medium flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-3.5 h-3.5 text-[#C85A32]" />
                      <span>Inspect</span>
                    </div>
                  </div>
                </button>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-semibold text-[#C85A32] uppercase tracking-wider block mb-1.5">
                      {item.category}
                    </span>
                    <h3 className="font-editorial text-xl font-bold text-[#142C20] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#465F50] line-clamp-3 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#E8E1D5] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleOpenModal(item)}
                      className="text-xs font-semibold text-[#142C20] hover:text-[#C85A32] inline-flex items-center gap-1 focus-visible:ring-1 focus-visible:ring-[#C85A32] rounded-xs cursor-pointer"
                    >
                      <span>View details</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#C85A32]" />
                    </button>
                    <span className="text-[10px] font-mono text-[#8C7A68]">Preview Model</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Optional Video Briefing Section */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E8E1D5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#E8E1D5]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#F4EFE6] border border-[#E8E1D5] flex items-center justify-center text-[#142C20]">
                <Video className="w-6 h-6 text-[#C85A32]" />
              </div>
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#142C20]">
                  Public Briefings & Recordings
                </h3>
                <span className="text-xs font-mono text-[#8C7A68] uppercase tracking-wider">
                  Verified Audio-Visual Communications
                </span>
              </div>
            </div>

            {foundationVideos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {foundationVideos.map((video) => (
                  <div key={video.id} className="rounded-2xl overflow-hidden border border-[#E8E1D5] bg-black">
                    <div className="aspect-video w-full">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                        title={video.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <h4 className="font-editorial font-semibold text-sm text-[#142C20]">
                        {video.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-white border border-[#E8E1D5] flex items-start gap-4">
                <Info className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-[#142C20]">
                    Scheduled Media Releases
                  </h4>
                  <p className="text-xs sm:text-sm text-[#465F50] leading-relaxed">
                    Official recorded briefings, public educational seminars, and symposium keynotes will be embedded here following the inauguration of our scheduled community forums. In keeping with our strict content integrity policy, we do not load placeholder videos.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Inquiry & Collaboration CTA */}
      <section className="py-20 sm:py-28 bg-[#F4EFE6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-3">
            Civic Partnership
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#142C20] mb-4">
            Collaborate on Community Initiatives
          </h2>
          <p className="text-base sm:text-lg text-[#465F50] max-w-xl leading-relaxed mb-10">
            Are you a community organizer, civic institution, or legal educator interested in participating in one of our proposed focus areas?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#142C20] hover:bg-[#204533] text-[#FAF8F5] text-base font-semibold shadow-md hover:shadow-xl transition-all focus-visible:ring-2 focus-visible:ring-[#C85A32]"
          >
            <span>Initiate a Collaborative Inquiry</span>
            <ArrowRight className="w-4 h-4 text-[#C85A32]" />
          </Link>
        </div>
      </section>

      {/* Accessible Image Modal */}
      <ImageModal
        item={selectedGalleryItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
