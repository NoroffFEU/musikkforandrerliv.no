import React, { createContext, useCallback, useContext, useState } from 'react';

import { createPortal } from 'react-dom';

import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from 'react-icons/io';

// Create context for lightbox
export const LightboxContext = createContext(null);

// Provider component that wraps the entire app
export const LightboxProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((imageArray, initialIndex = 0) => {
    setImages(imageArray);
    setCurrentIndex(initialIndex);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  const goToNext = useCallback(() => {
    if (!images.length) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  }, [images]);

  const goToPrevious = useCallback(() => {
    if (!images.length) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  }, [images]);

  return (
    <LightboxContext.Provider
      value={{
        isOpen,
        openLightbox,
        closeLightbox,
        currentIndex,
        goToNext,
        goToPrevious,
      }}
    >
      {children}
      {isOpen && (
        <LightboxComponent images={images} currentIndex={currentIndex} />
      )}
    </LightboxContext.Provider>
  );
};

// The actual Lightbox component (internal to the provider)
const LightboxComponent = ({ images, currentIndex }) => {
  const { closeLightbox, goToNext, goToPrevious } = useContext(LightboxContext);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Reset loading state when image changes
  React.useEffect(() => {
    setIsLoading(true);
  }, [currentIndex]);

  // Set up keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'Escape':
          closeLightbox();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext, closeLightbox]);

  const current = images[currentIndex];
  if (!current) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      tabIndex={-1}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeLightbox();
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button
        className="absolute top-4 right-4 z-50 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={closeLightbox}
        aria-label="Close lightbox"
      >
        <IoMdClose size={24} />
      </button>

      <button
        className="absolute left-4 z-50 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <IoIosArrowBack size={24} />
      </button>

      <button
        className="absolute right-4 z-50 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={goToNext}
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
