import React, { useEffect, useState } from 'react';
import data from '../data/landing-page-content.json';


const GalleryItem = ({ src, aspectClass }) => {
  return (
    <div className="group w-full">
      <div
        className={`relative w-full overflow-hidden shadow-sm rounded-xl ${aspectClass}`}
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
};

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

  return (
    <section className="pt-60 pb-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      <p className="text-center mb-9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12">
        {displayImages.map((img, index) => {
          const pos = index % 6;

          let aspectClass = '';
          let colSpan = '';
          let wrapperClass = '';

          if (pos === 4) {
            colSpan = 'col-span-2 sm:col-span-2 lg:col-span-1 lg:col-start-2';
            aspectClass = 'pb-[58%] sm:pb-[58%] lg:pb-[44%]';
          }
        
          else if (pos === 3 || pos === 5) {
            colSpan = 'col-span-1';
            aspectClass = 'pb-[66%] sm:pb-[66%] lg:pb-[89%]';
            wrapperClass = 'lg:flex lg:justify-center';
          }
          
          else {
            colSpan = 'col-span-1';
            aspectClass = 'pb-[66%] sm:pb-[66%] lg:pb-[59%]';
          }

          return (
            <div key={index} className={`${colSpan} ${wrapperClass}`}>
              <GalleryItem src={img.src} aspectClass={aspectClass} />
            </div>
          );
        })}
      </div>
    </section>
  );
};


export default Gallery;
