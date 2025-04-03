import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


import altTextData from '../../../public/assets/images-gallery-alt.json'; 

import useCarousel from '../../hooks/useCarousel';

// Temporary image imports
const imageImports = import.meta.glob(
  '/src/compressed-images/*.{png,jpg,jpeg,svg,webp}',
  { eager: true },
);

const images = Object.values(imageImports).map((mod) => mod.default);


const extractFilename = (url) => {
  const urlWithoutQuery = url.split('?')[0]; 
  return urlWithoutQuery.split('/').pop(); 
};

const getAltText = (src) => {
  const filename = extractFilename(src); 
  const imageData = altTextData.find((item) => item.src === filename); 
  return imageData ? imageData.alt : `Image-${filename}`; 
};

const ImageCarousel = () => {
  const [loadedImages, setLoadedImages] = useState(
    Array(images.length).fill(false),
  );

  const {
    index,
    nextSlide,
    prevSlide,
    handleTouchStart,
    handleTouchEnd,
    carouselRef,
  } = useCarousel({ images: images });

  const handleSwipe = () => {
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) {
      nextSlide();
    } else if (touchEndX - touchStartX > swipeThreshold) {
      prevSlide();
    }
  };

  const getVisibleImages = () => {
    if (index + 5 <= images.length) {
      return images.slice(index, index + 5);
    } else {
      return [
        ...images.slice(index),
        ...images.slice(0, (index + 5) % images.length),
      ];
    }
  };

  const handleImageLoad = (i) => {
    setLoadedImages((prev) => {
      const newLoadedImages = [...prev];
      newLoadedImages[i] = true;
      return newLoadedImages;
    });
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="carousel-wrapper relative flex justify-center items-center my-12 min-h-[139px] md:min-h-[200px] lg:min-h-[200px] xl:min-h-[248px] md:max-w-[750px] lg:max-w-[1050px] xl:max-w-[1280px] h-full w-full overflow-hidden "
      >
        <button
          onClick={prevSlide}
          className="absolute z-10 left-0 p-2 text-(--color-sunset-red) rounded-full cursor-pointer"
        >
          <IoIosArrowBack size={32} className="hidden md:flex" />
        </button>
        <div className="image-carousel flex justify-center items-center ">
          <div className="image-wrapper flex gap-3 items-center justify-center overflow-hidden">
            {getVisibleImages().map((src, i) => {
              const imgIndex = (index + i) % images.length;
              console.log('imgIndex: ', imgIndex);

              return (
                <div
                  key={imgIndex}
                  className={`image-container transition-x duration-300 flex justify-center items-center h-[111px] w-[131px] md:h-[111px] md:w-[131px] lg:h-[145px] lg:w-[200px] xl:h-[198px] xl:w-[234px] overflow-hidden ${
                    i === 2
                      ? 'h-[139px] w-[219px] md:h-[145px] md:w-[250px] lg:h-[200px] lg:w-[300px] xl:h-[248px] xl:w-[416px] z-10'
                      : ''
                  } ${i === 0 ? 'ml-[-200px] md:ml-[-82px] lg:ml-[-100px] xl:ml-[-124px]' : ''} ${
                    i === 4
                      ? 'mr-[-200px] md:mr-[-82px] lg:mr-[-100px] xl:mr-[-124px]'
                      : ''
                  }`}
                >
                  <div className="relative w-full h-full">
                    {/* Skeleton Loader */}
                    {!loadedImages[imgIndex] && (
                      <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                    )}

                    <img
                      src={src}
                      alt={getAltText(src)}
                      className={`w-full h-full object-cover shadow-lg transition-opacity duration-300 ${
                        loadedImages[imgIndex] ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="lazy"
                      onLoad={() => handleImageLoad(imgIndex)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="absolute z-10 right-0 p-2 text-(--color-sunset-red) rounded-full cursor-pointer"
        >
          <IoIosArrowForward size={32} className="hidden md:flex" />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
