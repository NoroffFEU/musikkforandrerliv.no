import React from 'react';


const images = [
  { src: '../assets/placeholder-images/IMG_1457.webp'},
  { src: '../assets/placeholder-images/IMG_3205.webp' },
  { src: '../assets/placeholder-images/IMG_3610.webp' },
  { src: '../assets/placeholder-images/IMG_3634.webp'},
  { src: '../assets/placeholder-images/IMG_3847.webp'},
  { src: '../assets/placeholder-images/IMG_4109.webp'},
  { src: '../assets/placeholder-images/IMG_4116.webp'},
  { src: '../assets/placeholder-images/IMG_4202.webp' },
  { src: '../assets/placeholder-images/IMG_5348.webp' },
];

const GalleryItem = ({ src, aspectClass, className }) => {
  return (
    <div className={`group w-full ${className}`}>
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
  return (
    <section className="pt-60 pb-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      <p className="text-center mb-9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => {
          const pos = index % 6;
          let aspectClass = '';
          let colSpan = '';

          
          if (pos === 4) {
            colSpan = 'col-span-2 sm:col-span-2 lg:col-span-1 lg:col-start-2';
            aspectClass = 'pb-[58%] sm:pb-[58%] lg:pb-[44%]';
          }
          
          else if (pos === 3 || pos === 5) {
            colSpan = 'col-span-1';
            aspectClass = 'pb-[66%] sm:pb-[66%] lg:pb-[89%]';
          }
          else {
            colSpan = 'col-span-1';
            aspectClass = 'pb-[66%] sm:pb-[66%] lg:pb-[59%]';
          }

          return (
            <GalleryItem
              key={index}
              src={img.src}
              aspectClass={aspectClass}
              className={colSpan}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
