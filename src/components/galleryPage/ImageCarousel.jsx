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
    <div className="carousel-wrapper relative w-full flex justify-center items-center mt-10 max-h-[250px] max-w-[1280px] h-full bg-amber-200">
      <div className="image-carousel flex justify-center items-center bg-red-400 ">
        <button
          onClick={prevSlide}
          className="absolute left-0 p-2 text-(--color-sunset-red) rounded-full cursor-pointer"
        >
          <IoIosArrowBack size={32} />
        </button>
        <div className="image-wrapper flex gap-3 justify-center bg-blue-400 max-w-[1120px]">
          {images.slice(index, index + 5).map((src, i) => (
            <div
              key={index + i}
              className={`image-container transition-all duration-300 flex justify-center items-center h-[200px] w-[235px] overflow-hidden${
                i === 2
                  ? 'h-[260px] w-[420px] transform-none scale-120 z-10'
                  : ' opacity-70 '
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
        <button
          onClick={nextSlide}
          className="absolute right-0 p-2 text-(--color-sunset-red) rounded-full cursor-pointer"
        >
          <IoIosArrowForward size={32} />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
