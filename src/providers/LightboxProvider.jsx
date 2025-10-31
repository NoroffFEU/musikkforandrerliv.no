import React, { useCallback, useEffect, useState } from 'react';
import LightboxContext from './lightbox-context';
import Lightbox from '../components/Lightbox';

const LightboxProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((imageArray = [], initialIndex = 0) => {
    if (!Array.isArray(imageArray) || imageArray.length === 0) return;
    const safeIndex = Math.min(Math.max(0, initialIndex), imageArray.length - 1);
    setImages(imageArray);
    setCurrentIndex(safeIndex);
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) =>
      images.length ? (prev + 1) % images.length : 0
    );
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      images.length ? (prev - 1 + images.length) % images.length : 0
    );
  }, [images.length]);

  // Lock body scroll while the lightbox is open
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow || '';
    };
  }, [isOpen]);

  const value = {
    isOpen,
    openLightbox,
    closeLightbox,
    currentIndex,
    goToNext,
    goToPrevious,
    images,
    setCurrentIndex, // optional if consumers need direct control
  };

  return (
    <LightboxContext.Provider value={value}>
      {children}
      {isOpen && <Lightbox images={images} currentIndex={currentIndex} />}
    </LightboxContext.Provider>
  );
};

export { LightboxProvider };
export default LightboxProvider;
export { LightboxContext } from './lightbox-context';
