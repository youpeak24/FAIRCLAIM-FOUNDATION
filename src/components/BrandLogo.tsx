import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  className?: string;
  isLight?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', isLight = false }) => {
  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded-xl p-1 transition-all ${className}`}
      aria-label="FAIRCLAIM FOUNDATION - Return to Homepage"
    >
      {/* Precision architectural emblem */}
      <div 
        className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 group-hover:scale-105 group-hover:shadow-md ${
          isLight 
            ? 'bg-[#142C20] border-[#2A4D3A] text-[#FAF8F5] shadow-xs' 
            : 'bg-[#142C20] border-[#224432] text-[#FAF8F5] shadow-sm'
        }`}
      >
        <svg 
          viewBox="0 0 36 36" 
          fill="none" 
          className="w-6 h-6 transition-transform duration-300 group-hover:rotate-1" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Subtle outer geometric alignment ring */}
          <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="2 2" />
          
          {/* Foundational balance beam */}
          <path d="M7 11.5H29" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M18 11.5V26.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          
          {/* Triangular pediment roof */}
          <path d="M14 7L18 3L22 7H14Z" fill="currentColor" />
          
          {/* Terracotta scale balance weights */}
          <circle cx="9" cy="18" r="2.4" fill="#C85A32" />
          <path d="M9 11.5V17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          
          <circle cx="27" cy="18" r="2.4" fill="#C85A32" />
          <path d="M27 11.5V17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          
          {/* Plinth foundation base */}
          <rect x="11" y="26.5" width="14" height="2.5" rx="1" fill="currentColor" />
          <rect x="8" y="29" width="20" height="1.5" rx="0.75" fill="#C85A32" />
        </svg>
      </div>

      <div className="flex flex-col text-left">
        <span 
          className={`font-editorial font-bold text-xl md:text-2xl tracking-tight leading-none transition-colors ${
            isLight ? 'text-[#FAF8F5]' : 'text-[#142C20] group-hover:text-[#204533]'
          }`}
        >
          FAIRCLAIM
        </span>
        <span 
          className={`text-[9.5px] md:text-[10px] font-mono font-semibold tracking-[0.28em] uppercase leading-tight mt-1 ${
            isLight ? 'text-[#C5D3CB]' : 'text-[#C85A32]'
          }`}
        >
          FOUNDATION
        </span>
      </div>
    </Link>
  );
};
