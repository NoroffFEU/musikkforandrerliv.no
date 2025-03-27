import React, { useEffect, useState } from 'react';

import data from '../../data/landing-page-content.json';
import { ImageModal } from '../ImageModal';

// Import the modal component

export function GallerySection() {
  const { image: galleryImages } = data.gallery;
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const displayImages = isMobile ? galleryImages.slice(0, 8) : galleryImages;

  // Open modal with selected image
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => setIsModalOpen(false);

  // Navigate images
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section className="w-full my-8 md:my-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 md:px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4">
          {displayImages.map((src, idx) => (
            <div key={idx} className="aspect-square w-full">
              <img
                src={src}
                alt="MMF Gallery"
                loading="lazy"
                className="w-full h-full object-cover cursor-pointer rounded-lg shadow-md hover:opacity-80 transition"
                onClick={() => openModal(idx)}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="/gallery"
            className="hidden sm:inline-block w-fit py-4 px-[30px] border rounded-[9px] [font-family:var(--font-sans) ] font-semibold md:text-2xl cursor-pointer"
          >
            SEE THE GALLERY
          </a>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        imageSrc={galleryImages[currentImageIndex]}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
}
