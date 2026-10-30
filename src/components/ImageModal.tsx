import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import type { GalleryItem } from '../data/initiatives';

interface ImageModalProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ item, isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };

    dialog.addEventListener('cancel', handleCancel);
    return () => dialog.removeEventListener('cancel', handleCancel);
  }, [onClose]);

  if (!item) return null;

  // Handle click outside dialog content (backdrop click)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isInside = (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    );
    if (!isInside) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="m-auto p-0 rounded-2xl bg-white border border-[#E8E1D5] shadow-2xl max-w-2xl w-[92vw] overflow-hidden backdrop:bg-[#0C1A13]/70 backdrop:backdrop-blur-xs open:animate-in open:fade-in open:zoom-in-95 duration-200"
      aria-labelledby="modal-image-title"
    >
      <div className="relative flex flex-col">
        {/* Visual Graphic Representation */}
        <div className="w-full h-64 sm:h-80 bg-[#142C20] relative flex items-center justify-center p-8 overflow-hidden">
          {/* Subtle geometric grid */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-md">
            <div className="w-16 h-16 rounded-2xl bg-[#204533] border border-[#2E5A44] flex items-center justify-center mb-4 text-[#FAF8F5] shadow-inner">
              <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10H26V13H6V10Z" fill="currentColor" />
                <path d="M14.5 13H17.5V24H14.5V13Z" fill="currentColor" />
                <circle cx="8" cy="18" r="3" fill="#C85A32" />
                <circle cx="24" cy="18" r="3" fill="#C85A32" />
                <rect x="8" y="24" width="16" height="2" rx="1" fill="#FAF8F5" />
              </svg>
            </div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C85A32] mb-1">
              {item.category}
            </span>
            <p className="font-editorial text-2xl text-[#FAF8F5] font-semibold">
              {item.title}
            </p>
          </div>

          {/* Close button with accessible name */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-[#C85A32]"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content details */}
        <div className="p-6 sm:p-8 bg-white flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-[#E8E1D5] pb-3">
            <h3 id="modal-image-title" className="font-editorial text-xl font-bold text-[#142C20]">
              {item.title}
            </h3>
            <span className="text-xs px-2.5 py-1 rounded-full bg-[#F4EFE6] text-[#204533] font-medium border border-[#E8E1D5]">
              Concept Preview
            </span>
          </div>
          <p className="text-sm sm:text-base text-[#2C4A38] leading-relaxed">
            {item.caption}
          </p>
          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-[#142C20] hover:bg-[#204533] text-[#FAF8F5] text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#C85A32]"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};
