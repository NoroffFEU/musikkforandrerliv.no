import React from 'react';
import ImageGallery from '../components/galleryPage/imageGallery';

const Gallery = () => {
  return (
    <section className="pt-60 pb-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      <p className="text-center mb-9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <ImageGallery />
    </section>
  );
};

export default Gallery;
