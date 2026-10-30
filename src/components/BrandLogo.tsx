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
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded-lg p-1 transition-opacity ${className}`}
      aria-label="FAIRCLAIM FOUNDATION - Return to Homepage"
    >
      {/* Refined emblem mark: Architectural balance & equity symbol */}
      <div 
        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover:scale-105 ${
          isLight 
            ? 'bg-[#1F4231] border-[#2E5A44] text-[#FAF8F5]' 
            : 'bg-[#142C20] border-[#2A4D3A] text-[#FAF8F5] shadow-xs'
        }`}
      >
        <svg 
          viewBox="0 0 32 32" 
          fill="none" 
          className="w-5 h-5" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Balance beam & foundational pillar */}
          <path d="M8 8H24V11H8V8Z" fill="currentColor" />
          <path d="M14.5 11H17.5V25H14.5V11Z" fill="currentColor" />
          <path d="M10 25H22V27H10V25Z" fill="currentColor" />
          {/* Terracotta scale points */}
          <circle cx="8" cy="15" r="2" fill="#C85A32" />
          <path d="M8 11V14" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="24" cy="15" r="2" fill="#C85A32" />
          <path d="M24 11V14" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="flex flex-col text-left">
        <span 
          className={`font-editorial font-bold text-lg md:text-xl tracking-tight leading-tight transition-colors ${
            isLight ? 'text-[#FAF8F5]' : 'text-[#142C20] group-hover:text-[#204533]'
          }`}
        >
          FAIRCLAIM
        </span>
        <span 
          className={`text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase leading-none ${
            isLight ? 'text-[#D5CBBC]' : 'text-[#C85A32]'
          }`}
        >
          FOUNDATION
        </span>
      </div>
    </Link>
  );
};
