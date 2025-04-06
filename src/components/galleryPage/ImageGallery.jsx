import React, { useEffect, useState } from 'react';

import data from '../../data/landing-page-content.json';
import { useLightbox } from '../../hooks/useLightbox';
import GalleryItem from './GalleryItem';

/**
 * ImageGallery
 */
const ImageGallery = () => {
  const { image: galleryImages } = data.gallery;
  const [isMobile, setIsMobile] = useState(false);

  const { openLightbox } = useLightbox();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const images = galleryImages.map(({ src, alt }) => ({ src, alt }));
  const displayImages = isMobile ? images.slice(0, 8) : images;

  const handleOpenLightbox = (index) => {
    openLightbox(images, index);
  };

  const groups = [];
  for (let i = 0; i < displayImages.length; i += 6) {
    groups.push(displayImages.slice(i, i + 6));
  }

  return (
    <>
      {/* Desktop layout */}
      <div className="hidden lg:block">
        {groups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-16 space-y-10">
            <div className="grid grid-cols-12 gap-x-12 gap-y-12">
              {group.map((img, index) => {
                const pos = index % 6;
                const globalIndex = groupIndex * 6 + index;

                let colSpan = '';
                let aspectClass = '';
                let wrapperClass = '';

                if (pos === 0) {
                  colSpan = 'lg:col-span-4 lg:col-start-1';
                  aspectClass = 'lg:pb-[59%]';
                } else if (pos === 1) {
                  colSpan = 'lg:col-span-4 lg:col-start-5';
                  aspectClass = 'lg:pb-[59%]';
                } else if (pos === 2) {
                  colSpan = 'lg:col-span-4 lg:col-start-9';
                  aspectClass = 'lg:pb-[59%]';
                } else if (pos === 3) {
                  colSpan = 'lg:col-span-3 lg:col-start-1';
                  aspectClass = 'h-full';
                  wrapperClass = 'lg:flex lg:items-stretch';
                } else if (pos === 4) {
                  colSpan = 'lg:col-span-6 lg:col-start-4';
                  aspectClass = 'lg:pb-[44%]';
                } else if (pos === 5) {
                  colSpan = 'lg:col-span-3 lg:col-start-10';
                  aspectClass = 'h-full';
                  wrapperClass = 'lg:flex lg:items-stretch';
                }

                return (
                  <div
                    key={index}
                    className={`col-span-1 sm:col-span-1 ${colSpan} ${wrapperClass}`}
                  >
                    <GalleryItem
                      src={img.src}
                      alt={img.alt}
                      aspectClass={aspectClass}
                      onClick={() => handleOpenLightbox(globalIndex)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile / Tablet layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
        {displayImages.map((img, index) => {
          const isWideMobile = index % 6 === 4;

          return (
            <div key={index} className={isWideMobile ? 'col-span-2' : ''}>
              <GalleryItem
                src={img.src}
                alt={img.alt}
                aspectClass={isWideMobile ? 'pb-[58%]' : 'pb-[66%]'}
                onClick={() => handleOpenLightbox(index)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageGallery;
