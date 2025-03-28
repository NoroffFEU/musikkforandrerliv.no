import React from 'react';

import CarouselFeatured from '../components/galleryPage/CarouselFeatured';

const Gallery = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl animate-bounce">GALLERY PAGE</h1>
      <CarouselFeatured />
    </section>
  );
};

export default Gallery;
