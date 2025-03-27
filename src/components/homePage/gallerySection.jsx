import React, { useEffect, useState } from 'react';
import data from '../../data/landing-page-content.json';

export function GallerySection() {
  const { image: galleryImages } = data.gallery;

  // Define alt descriptions for each image.
  const imageAltText = [
    "Child Smiling to camera", 
    "Three children smiling to camera", 
    "Group photo of kids outside", 
    "Child holding a baby", 
    "Smiling child in a classroom", 
    "Poor child sleeping outside", 
    "Children playing various instruments", 
    "Children with a violin", 
    "Child holding something"
  ];

  const [isMobile, setIsMobile] = useState(false);

  // Check screen width for mobile responsiveness
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);  // Check if the screen width is smaller than 768px
    };
    
    checkIfMobile();

    window.addEventListener('resize', checkIfMobile); // Add resize listener to check on screen size changes

    return () => window.removeEventListener('resize', checkIfMobile); // Clean up listener on component unmount
  }, []);

  const displayImages = isMobile ? galleryImages.slice(0, 8) : galleryImages; // Show only 8 images on mobile

  return (
    <section className="w-full my-8 md:my-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 md:px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4">
          {displayImages.map((src, idx) => (
            <div key={idx} className="aspect-square w-full">
              <img
                src={src}  // Use the src path from the data
                alt={imageAltText[idx]}  // Use the dynamic alt text from the array
                loading="lazy"  // Lazy load images for better performance
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="/gallery"
            className="hidden sm:inline-block w-fit py-4 px-[30px] border rounded-[9px] [font-family:var(--font-sans)] font-semibold md:text-2xl cursor-pointer"
          >
            SEE THE GALLERY
          </a>
        </div>
      </div>
    </section>
  );
}
