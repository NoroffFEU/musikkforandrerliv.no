import React, { useCallback, useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from 'react-icons/io';

/**
 * Lightbox Component for image gallery
 * @param {Object[]} images - Array of image objects with src and alt properties
 * @param {number} initialIndex - Index of the initial image to display
 * @param {boolean} isOpen - Whether the lightbox is currently open
 * @param {function} onClose - Function to close the lightbox
 * @returns {React.ReactNode} - Lightbox component
 */
const Lightbox = ({ images, initialIndex = 0, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);
  const lightboxRef = useRef(null);
  const imageRef = useRef(null);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handlePrevious = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'Escape':
          onClose();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handlePrevious, handleNext, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && lightboxRef.current) {
      lightboxRef.current.focus();
    }
  }, [isOpen, currentIndex]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  if (!isOpen) return null;

  const current = images[currentIndex];

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      ref={lightboxRef}
      tabIndex={-1}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button
        className="absolute top-4 right-4 z-50 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <IoMdClose size={24} />
      </button>

      <button
        className="absolute left-4 z-50 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={handlePrevious}
        aria-label="Previous image"
      >
        <IoIosArrowBack size={24} />
      </button>

      <button
        className="absolute right-4 z-50 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={handleNext}
        aria-label="Next image"
      >
        <IoIosArrowForward size={24} />
      </button>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}

      <div className="relative max-w-[90vw] max-h-[90vh]">
        <img
          ref={imageRef}
          src={current.src}
          alt={current.alt || 'Gallery image'}
          className={`max-h-[90vh] max-w-[90vw] object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={handleImageLoad}
        />

        {current.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 text-center">
            <p>{current.caption}</p>
          </div>
        )}

        <div className="absolute bottom-4 left-0 right-0 text-center text-white">
          <span
            aria-live="polite"
            className="px-4 py-1 bg-black bg-opacity-50 rounded-full"
          >
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Lightbox;
