import React, { createContext, useCallback, useState } from 'react';

import Lightbox from '../components/Lightbox';

export const LightboxContext = createContext(null);

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
      {isOpen && <Lightbox images={images} currentIndex={currentIndex} />}
    </LightboxContext.Provider>
  );
};
