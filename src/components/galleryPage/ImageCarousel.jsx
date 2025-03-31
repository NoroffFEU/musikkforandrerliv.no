import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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

  const getVisibleImages = () => {
    return [...images, ...images].slice(index, index + 5);
  };

  return (
    <div className="carousel-wrapper relative flex justify-center items-center mt-10 max-h-[250px] max-w-[1280px] h-full w-full overflow-hidden">
      <div className="image-carousel flex justify-center items-center relative">
        <button
          onClick={prevSlide}
          className="absolute z-10 left-0 p-2 text-(--color-sunset-red) rounded-full cursor-pointer"
        >
          <IoIosArrowBack size={32} />
        </button>

        <div className="image-wrapper flex gap-3 items-center justify-center relative overflow-hidden">
          {getVisibleImages().map((src, i) => (
            <div
              key={index + i}
              className={`image-container transition duration-500 flex justify-center items-center h-[198px] w-[234px] overflow-hidden ${
                i === 2 ? 'h-[262px] w-[416px] z-10' : ''
              } ${
                i === 0 ? 'ml-[-85px]' : ''
              } ${
                i === 4 ? 'mr-[-85px]' : ''
              }`}
            >
              <img
                src={src}
                alt={`carousel-${index + i}`}
                className="transition-all duration-500 transform w-full h-full object-cover shadow-lg"
              />
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute z-10 right-0 p-2 text-(--color-sunset-red) rounded-full cursor-pointer"
        >
          <IoIosArrowForward size={32} />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
