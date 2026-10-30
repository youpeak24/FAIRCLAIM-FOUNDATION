import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ZoomIn, 
  Sparkles, 
  BookOpen, 
  Users, 
  Scale, 
  Video, 
  Info,
  ArrowRight
} from 'lucide-react';
import { proposedFocusAreas, galleryItems, foundationVideos } from '../data/initiatives';
import type { GalleryItem } from '../data/initiatives';
import { ImageModal } from '../components/ImageModal';

export const Initiatives: React.FC = () => {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-[#F4EFE6] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E8E1D5] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C85A32]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#142C20]">
                Activities & Focus Areas
              </span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#142C20] font-semibold tracking-tight leading-tight mb-6">
              Our Initiatives & Activities
            </h1>
            <p className="text-lg sm:text-xl text-[#365342] leading-relaxed">
              Explore our proposed focus areas, civic dialogues, public education frameworks, and community engagement concepts designed to foster equitable consideration.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Proposed Focus Areas Section */}
      <section className="py-16 sm:py-24 border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
              Proposed Programs
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#142C20]">
              Strategic Focus Areas
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#465F50]">
              These proposed priority tracks are designed to address the most critical procedural barriers experienced by community members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {proposedFocusAreas.map((area) => (
              <article
                key={area.id}
                className="bg-white rounded-3xl p-8 border border-[#E8E1D5] shadow-xs flex flex-col justify-between hover:border-[#204533]/40 transition-colors"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                    <span className="text-xs px-3 py-1 rounded-full bg-[#F4EFE6] text-[#204533] font-medium border border-[#E8E1D5]">
                      {area.category}
                    </span>
                    <span className="text-xs font-semibold text-[#C85A32] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                      {area.status}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-[#142C20] mb-3 leading-snug">
                    {area.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#465F50] leading-relaxed mb-6">
                    {area.summary}
                  </p>

                  <div className="mb-6 pt-5 border-t border-[#E8E1D5]">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C7A68] mb-3">
                      Planned Scope of Work:
                    </h4>
                    <ul className="space-y-2">
                      {area.fullScope.map((scopeItem, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#365342]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#142C20] mt-1.5 shrink-0" />
                          <span>{scopeItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E1D5] bg-[#FAF8F5] -mx-8 -mb-8 p-6 rounded-b-3xl mt-4">
                  <div className="text-xs font-semibold text-[#8C7A68] uppercase tracking-wider mb-1">
                    Intended Community Impact
                  </div>
                  <div className="text-xs sm:text-sm text-[#204533] font-medium leading-relaxed">
                    {area.intendedImpact}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Responsive Gallery Section with Accessible Image Enlargement */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
                Visual Frameworks
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#142C20]">
                Community Engagement Gallery
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#465F50] max-w-md">
              Select any concept preview card to inspect the underlying framework schematic and community interaction methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#E8E1D5] overflow-hidden shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                {/* Interactive preview trigger */}
                <button
                  type="button"
                  onClick={() => handleOpenModal(item)}
                  className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded-t-2xl"
                  aria-label={`Enlarge concept preview for ${item.title}`}
                >
                  <div className="h-48 bg-[#142C20] flex items-center justify-center relative p-6 group-hover:bg-[#1B3B2B] transition-colors">
                    {/* Visual schematic icon */}
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-[#FAF8F5]">
                      {item.visualTheme === 'dialogue' && <Users className="w-7 h-7 text-[#C85A32]" />}
                      {item.visualTheme === 'education' && <BookOpen className="w-7 h-7 text-[#FAF8F5]" />}
                      {item.visualTheme === 'justice' && <Scale className="w-7 h-7 text-[#C85A32]" />}
                      {item.visualTheme === 'community' && <Sparkles className="w-7 h-7 text-[#FAF8F5]" />}
                    </div>

                    {/* Enlargement Hint Pill */}
                    <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/60 text-white text-[11px] font-medium flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-3.5 h-3.5 text-[#C85A32]" />
                      <span>Enlarge</span>
                    </div>
                  </div>
                </button>

                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-[#C85A32] uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-editorial text-lg font-bold text-[#142C20] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#465F50] line-clamp-3 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E8E1D5] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleOpenModal(item)}
                      className="text-xs font-semibold text-[#142C20] hover:text-[#C85A32] inline-flex items-center gap-1 focus-visible:ring-1 focus-visible:ring-[#C85A32] rounded-xs"
                    >
                      <span>View details</span>
                      <ZoomIn className="w-3 h-3 text-[#C85A32]" />
                    </button>
                    <span className="text-[10px] text-[#8C7A68]">Preview Model</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Optional Video Embed Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E8E1D5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E8E1D5]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] border border-[#E8E1D5] flex items-center justify-center text-[#142C20]">
                <Video className="w-5 h-5 text-[#C85A32]" />
              </div>
              <div>
                <h3 className="font-editorial text-2xl font-bold text-[#142C20]">
                  Public Briefings & Recordings
                </h3>
                <span className="text-xs text-[#8C7A68]">
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
              <div className="p-5 rounded-2xl bg-white border border-[#E8E1D5] flex items-start gap-3 mt-4">
                <Info className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#465F50] leading-relaxed">
                  Official public seminars, recorded briefings, and educational broadcasts will be embedded here following the inauguration of our scheduled community forums. We avoid loading unverified third-party content.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Inquiry CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="font-editorial text-3xl font-semibold text-[#142C20] mb-3">
            Collaborate on Community Initiatives
          </h2>
          <p className="text-sm sm:text-base text-[#465F50] max-w-xl leading-relaxed mb-8">
            Are you a community organizer, civic group, or legal educator interested in participating in one of our proposed focus areas?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#142C20] hover:bg-[#204533] text-[#FAF8F5] text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#C85A32]"
          >
            <span>Initiate an Inquiry</span>
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
