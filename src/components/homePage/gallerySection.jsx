import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import data from '../../data/landing-page-content.json';
import ImagePreview from '../galleryPage/ImagePreview';

export function GallerySection() {
  const { image: galleryImages = [] } = data.gallery || {};

  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  // Check screen width for mobile responsiveness
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Show only 8 images on mobile devices
  const displayImages = isMobile ? galleryImages.slice(0, 8) : galleryImages;

  return (
    <section className="w-full my-8 md:my-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 md:px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4">
          {displayImages.map((image, idx) => (
            <div key={idx} className="aspect-square w-full">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover cursor-pointer rounded-lg shadow-md hover:opacity-80 transition"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="/gallery"
            className="hidden sm:inline-block w-fit py-4 px-[30px] border rounded-[9px] [font-family:var(--font-sans)] font-semibold md:text-2xl cursor-pointer"
          >
            SEE THE GALLERY
          </a>
        </div>
      </div>
    </section>
  );
}
