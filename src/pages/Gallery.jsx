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
    <section className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl animate-bounce">Galley</h1>
    </section>
  );
};

export default Gallery;
