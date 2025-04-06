import React, { useContext, useState } from 'react';

import { createPortal } from 'react-dom';

import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from 'react-icons/io';

import { LightboxContext } from '../providers/LightboxProvider';

const Lightbox = ({ images, currentIndex }) => {
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

  React.useEffect(() => {
    setIsLoading(true);
  }, [currentIndex]);

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

        {(current.caption || current.description) && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 text-center">
            {current.caption && (
              <p className="text-lg font-medium mb-1">{current.caption}</p>
            )}
            {current.description && (
              <p className="text-sm text-gray-200">{current.description}</p>
            )}
          </div>
        )}

        <div className="absolute top-4 left-0 right-0 text-center text-white">
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
