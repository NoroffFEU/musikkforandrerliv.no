import React from 'react';

/**
 * Responsive image gallery.
 *
 * - Displays a grid of fixed-ratio images (298x224px).
 * - Uses a responsive grid layout:
 *   - 1 column on mobile
 *   - 2 columns on tablet
 *   - 3 columns on desktop
 * - Applies a smooth highlight effect on each image.
 * - Includes an heading and paragraph.
 */

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

const GalleryItem = ({ src }) => {
  return (
    <div className="group w-full max-w-[298px] mx-auto">
      <div className="relative w-full h-[224px] overflow-hidden shadow-sm">
        <img
          src={src}
          loading='lazy'
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
      <p className='text-center mb-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 place-items-center">
        {images.map((img, index) => (
          <GalleryItem key={index} src={img.src} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
