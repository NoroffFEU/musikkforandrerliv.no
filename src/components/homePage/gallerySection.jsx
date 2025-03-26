import React from 'react';

import data from '../../data/landing-page-content.json';

export function GallerySection() {
  const { image: galleryImages } = data.gallery;

  return (
    <section className="w-full my-8 md:my-20 bg-white md:bg-[#B2CAC2]">
      <div className="mx-auto max-w-[1200px] p-0 md:p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4">
          {galleryImages.map((src, idx) => (
            <div key={idx} className="w-full h-[459px] md:h-[650px]">
              <img
                src={src}
                alt="MMF Gallery"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Centered button at the bottom */}
        <div className="flex justify-center mt-4">
          <button
            type="button"
            className="w-[285px] h-[57px] rounded-[9px] border border-black flex items-center justify-center font-[Montserrat] font-semibold text-[24px] leading-[100%] tracking-[0] capitalize"
          >
            SEE THE GALLERY
          </button>
        </div>
      </div>
    </section>
  );
}
