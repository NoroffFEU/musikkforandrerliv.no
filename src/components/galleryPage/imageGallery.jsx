import React, { useEffect, useState } from 'react';
import data from '../../data/landing-page-content.json';

const GalleryItem = ({ src, aspectClass }) => (
    <div className="group w-full h-full flex flex-col">
      <div className={`relative w-full h-full overflow-hidden shadow-sm ${aspectClass}`}>
        <img
          src={src}
          loading="lazy"
          alt=""
          className="absolute inset-0 w-full h-full object-cover cursor-pointer shadow-md hover:opacity-80 transition"
        />
      </div>
      <p className="mt-2 mb-4 text-lg text-center text-gray-600">Lorem ipsum dolor sit amet</p>
    </div>
  );
  
  const ImageGallery = () => {
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
      <>
        {/* Desktop layout */}
        <div className="hidden lg:block">
          {groups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-16 space-y-10">
              <div className="grid grid-cols-12 gap-x-12 gap-y-12">
                {group.map((img, index) => {
                  const pos = index % 6;
  
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
                      <GalleryItem src={img.src} aspectClass={aspectClass} />
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
                  aspectClass={isWideMobile ? 'pb-[58%]' : 'pb-[66%]'}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  };
  
  export default ImageGallery;