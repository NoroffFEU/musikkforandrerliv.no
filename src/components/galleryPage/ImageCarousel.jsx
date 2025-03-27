import { useState } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// Temporary image imports
const imageImports = import.meta.glob(
  '../../../public/assets/placeholder-images/*.{png,jpg,jpeg,svg,webp}',
  { eager: true },
);
const images = Object.values(imageImports).map((mod) => mod.default);

console.log('imageArray: ', images);

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="carousel-wrapper relative w-full flex justify-center items-center mt-10 max-h-[250px] h-full">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 p-2 text-(--color-sunset-red) rounded-full cursor-pointer"
      >
        <IoIosArrowBack size={32} />
      </button>

      {/* Carousel Images */}
      <div className="image-carousel flex items-center w-[80%] overflow-hidden">
        <div className="image-wrapper flex justify-center gap-3 overflow-hidden">
          {images.slice(index, index + 5).map((src, i) => (
            <div
              key={index + i}
              className={`image-container transition-all duration-300  flex justify-center items-center  ${
                i === 2 ? 'scale-120 z-10' : 'scale-90 opacity-70 w-[300px]'
              }`}
            >
              <img
                src={src}
                alt={`carousel-${index + i}`}
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-0 p-2 text-(--color-sunset-red) rounded-full cursor-pointer"
      >
        <IoIosArrowForward size={32} />
      </button>
    </div>
  );
};

export default ImageCarousel;
