import React, { useEffect } from 'react';

import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export function ImageModal({ isOpen, imageSrc, onClose, onNext, onPrev }) {
  if (!isOpen) return null;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNext();
      if (event.key === 'ArrowLeft') onPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <button className="absolute top-4 right-4 text-white" onClick={onClose}>
        <X size={30} />
      </button>

      <button
        className="absolute left-4 text-white bg-black bg-opacity-50 p-2 rounded-full"
        onClick={onPrev}
      >
        <ChevronLeft size={40} />
      </button>

      <img
        src={imageSrc}
        alt="Gallery"
        className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
      />

      <button
        className="absolute right-4 text-white bg-black bg-opacity-50 p-2 rounded-full"
        onClick={onNext}
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
}
