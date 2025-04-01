import React, { useEffect, useState } from 'react';
import data from '../data/landing-page-content.json';



const GalleryItem = ({ src, aspectClass }) => (
  <div className="group w-full">
    <div
      className={`relative w-full overflow-hidden shadow-sm  ${aspectClass}`}
    >
      <img
        src={src}
        loading="lazy"
        alt=""
        className="absolute inset-0 w-full h-full object-cover cursor-pointer shadow-md hover:opacity-80 transition"
      />
    </div>
  </div>
);

const Gallery = () => {
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

  const images = galleryImages.map((src) => ({ src }));
  const displayImages = isMobile ? images.slice(0, 8) : images;

  const groups = [];
  for (let i = 0; i < displayImages.length; i += 6) {
    groups.push(displayImages.slice(i, i + 6));
  }

  return (
    <section className="pt-60 pb-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      <p className="text-center mb-9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {groups.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-16 space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-12">
            {group.map((img, index) => {
              const pos = index % 6;

              let colSpan = '';
              let aspectClass = '';
              let wrapperClass = '';

              if (pos === 0) {
                colSpan = 'col-span-1 sm:col-span-1 lg:col-span-4 lg:col-start-1';
                aspectClass = 'pb-[66%] sm:pb-[66%] lg:pb-[59%]';
              } else if (pos === 1) {
                colSpan = 'col-span-1 sm:col-span-1 lg:col-span-4 lg:col-start-5';
                aspectClass = 'pb-[66%] sm:pb-[66%] lg:pb-[59%]';
              } else if (pos === 2) {
                colSpan = 'col-span-1 sm:col-span-1 lg:col-span-4 lg:col-start-9';
                aspectClass = 'pb-[66%] sm:pb-[66%] lg:pb-[59%]';
              } else if (pos === 3) {
                colSpan = 'col-span-1 sm:col-span-1 lg:col-span-3 lg:col-start-1';
                aspectClass = 'pb-[66%] sm:pb-[66%] lg:pb-[89%]';
                wrapperClass = 'lg:flex lg:justify-center';
              } else if (pos === 4) {
                colSpan = 'col-span-2 sm:col-span-2 lg:col-span-6 lg:col-start-4';
                aspectClass = 'pb-[58%] sm:pb-[58%] lg:pb-[44%]';
              } else if (pos === 5) {
                colSpan = 'col-span-1 sm:col-span-1 lg:col-span-3 lg:col-start-10';
                aspectClass = 'pb-[66%] sm:pb-[66%] lg:pb-[89%]';
                wrapperClass = 'lg:flex lg:justify-center';
              }

              return (
                <div key={index} className={`${colSpan} ${wrapperClass}`}>
                  <GalleryItem src={img.src} aspectClass={aspectClass} />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};


export default Gallery;
