import React, { useEffect, useState } from 'react';

import data from '../../data/landing-page-content.json';
import ImagePreview from '../galleryPage/ImagePreview';

export function GallerySection() {
  const { image: galleryImages } = data.gallery;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const displayImages = isMobile ? galleryImages.slice(0, 8) : galleryImages;

  return (
    <section className="w-full my-8 md:my-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 md:px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4">
          {displayImages.map((src, idx) => (
            <div key={idx} className="aspect-square w-full">
              <ImagePreview
                images={displayImages}
                startingIndex={idx}
                thumbnail={
                  <img
                    src={src}
                    alt="MMF Gallery"
                    loading="lazy"
                    className="w-full h-full object-cover cursor-pointer rounded-lg shadow-md hover:opacity-80 transition"
                  />
                }
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="/gallery"
            className="hidden sm:inline-block w-fit py-4 px-[30px] border rounded-[9px] [font-family:var(--font-sans) ] font-semibold md:text-2xl cursor-pointer"
          >
            SEE THE GALLERY
          </a>
        </div>
      </div>
    </section>
  );
}
