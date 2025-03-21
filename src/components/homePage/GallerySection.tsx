import React from 'react';
import data from '../../data/landing-page-content.json';
import { GalleryContent } from '../../types';

interface GallerySectionProps {
  content?: GalleryContent;
}

const GallerySection: React.FC<GallerySectionProps> = ({ content = data.gallery }) => {
  // Use content images when implementing the gallery
  const images = content.image;
  
  return (
    <section id="GallerySection" className="w-full">
      {/* Gallery content implementation */}
      <div className="grid grid-cols-3 gap-4">
        {images.map((imageSrc, index) => (
          <div key={index} className="w-full aspect-square">
            {/* Image placeholders to be implemented */}
            <img src={imageSrc} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;