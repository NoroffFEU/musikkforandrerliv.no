import React from 'react';

import ImageCarousel from '../components/galleryPage/ImageCarousel';
import ImageGallery from '../components/galleryPage/ImageGallery';
import ReadMoreSection from '../components/galleryPage/ReadMoreSection';

const Gallery = () => {
  return (
    <section className="pt-60 pb-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      <ImageCarousel />
      <p className="text-center mb-9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <ImageGallery />
      <ReadMoreSection />
    </section>
  );
};

export default Gallery;
