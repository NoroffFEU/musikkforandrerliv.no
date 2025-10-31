// src/providers/LightboxProvider.jsx
import React, { useCallback, useState } from 'react';
import { LightboxContext } from './lightbox-context';
import Lightbox from '../components/Lightbox';

function LightboxProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((imageArray, initialIndex = 0) => {
    setImages(Array.isArray(imageArray) ? imageArray : []);
    setCurrentIndex(
      typeof initialIndex === 'number' && initialIndex >= 0
        ? initialIndex
        : 0,
    );
    setIsOpen(true);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }, []);

  const goToNext = useCallback(() => {
    if (!images.length) return;
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1,
    );
  }, [images]);

  const goToPrevious = useCallback(() => {
    if (!images.length) return;
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1,
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
        <Lightbox
          images={images}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrev={goToPrevious}
        />
      )}
    </LightboxContext.Provider>
  );
}

export default LightboxProvider;
