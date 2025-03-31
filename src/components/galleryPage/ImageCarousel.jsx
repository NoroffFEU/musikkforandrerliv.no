import { useRef, useState } from 'react';

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
  const carouselRef = useRef(null);
  let touchStartX = 0;
  let touchEndX = 0;

  const prevSlide = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) {
      nextSlide();
    } else if (touchEndX - touchStartX > swipeThreshold) {
      prevSlide();
    }
  };

  const getVisibleImages = () => {
    return [...images, ...images].slice(index, index + 5);
  };

  return (
    <div
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="carousel-wrapper relative flex justify-center items-center mt-10 max-h-[139px] md:max-h-[200px] lg:max-h-[200px] xl:max-h-[248px] md:max-w-[750px] lg:max-w-[1050px] xl:max-w-[1280px] h-full w-full overflow-hidden"
    >
          {getVisibleImages().map((src, i) => (
            <div
              key={index + i}
              className={`image-container transition duration-1000 flex justify-center items-center h-[111px] w-[131px] md:h-[111px] md:w-[131px] lg:h-[145px] lg:w-[200px] xl:h-[198px] xl:w-[234px] overflow-hidden ${
                i === 2
                  ? 'h-[139px] w-[219px] md:h-[145px] md:w-[250px] lg:h-[200px] lg:w-[300px] xl:h-[248px] xl:w-[416px] scale-105 z-10'
                  : ''
              } ${i === 0 ? 'ml-[-200px] md:ml-[-82px] lg:ml-[-100px] xl:ml-[-124px]' : ''} ${i === 4 ? 'mr-[-200px] md:mr-[-82px] lg:mr-[-100px] xl:mr-[-124px]' : ''}`}
            >
              <img
                src={src}
                alt={`carousel-${index + i}`}
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
          ))}
          {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div> */}
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
