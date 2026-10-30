import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 md:py-32 px-4 sm:px-6 lg:px-8 text-center bg-[#FAF8F5]">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F4EFE6] border border-[#E8E1D5] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C85A32]" aria-hidden="true" />
          <span className="text-xs uppercase tracking-widest font-semibold text-[#142C20]">
            Error 404 &bull; Page Not Found
          </span>
        </div>

        <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#142C20] font-semibold tracking-tight leading-tight mb-4">
          Looking for a different path?
        </h1>

        <p className="text-base sm:text-lg text-[#465F50] leading-relaxed max-w-md mb-8">
          The page or resource you requested could not be located. It may have been moved, renamed, or is currently undergoing administrative review.
        </p>

        {/* Primary Navigation Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#142C20] hover:bg-[#204533] text-[#FAF8F5] text-sm font-semibold shadow-md transition-colors focus-visible:ring-2 focus-visible:ring-[#C85A32]"
          >
            <Home className="w-4 h-4 text-[#C85A32]" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F4EFE6] text-[#142C20] text-sm font-semibold border border-[#E8E1D5] shadow-xs transition-colors focus-visible:ring-2 focus-visible:ring-[#C85A32]"
          >
            <Mail className="w-4 h-4 text-[#6E8276]" />
            <span>Contact Foundation</span>
          </Link>
        </div>

        {/* Helpful Direct Links */}
        <div className="pt-8 border-t border-[#E8E1D5] w-full text-xs text-[#8C7A68]">
          <span className="block mb-3 font-semibold uppercase tracking-wider">
            Popular destinations:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/about" className="text-[#142C20] hover:text-[#C85A32] underline underline-offset-4">
              About Us
            </Link>
            <span>&bull;</span>
            <Link to="/mission-vision" className="text-[#142C20] hover:text-[#C85A32] underline underline-offset-4">
              Mission & Vision
            </Link>
            <span>&bull;</span>
            <Link to="/initiatives" className="text-[#142C20] hover:text-[#C85A32] underline underline-offset-4">
              Our Initiatives
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
