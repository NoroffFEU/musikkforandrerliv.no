import React from 'react';

import ImageCarousel from '../components/galleryPage/imageCarousel';

const Gallery = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <h1 className="text-5xl animate-bounce">GALLERY PAGE</h1>
      <ImageCarousel />
    </section>
  );
};

export default Gallery;
