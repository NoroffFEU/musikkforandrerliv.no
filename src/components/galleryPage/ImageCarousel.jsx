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
  const [loadedImages, setLoadedImages] = useState(
    Array(images.length).fill(false),
  );
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

  // const getVisibleImages = () => {
  //   return [...images, ...images].slice(index, index + 5);
  // };

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
    <div
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="carousel-wrapper relative flex justify-center items-center mt-10 max-h-[139px] md:max-h-[200px] lg:max-h-[200px] xl:max-h-[248px] md:max-w-[750px] lg:max-w-[1050px] xl:max-w-[1280px] h-full w-full overflow-hidden"
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
                className={`image-container transition-x duration-100 flex justify-center items-center h-[111px] w-[131px] md:h-[111px] md:w-[131px] lg:h-[145px] lg:w-[200px] xl:h-[198px] xl:w-[234px] overflow-hidden ${
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
                    alt={`carousel-${imgIndex}`}
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
  );
};
export default ImageCarousel;

// -------- Carousel with colors to see how the carousel should behave

// import { useRef, useState } from 'react';

// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// // Placeholder colors instead of images
// const placeholderColors = [
//   '#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6',
//   '#1ABC9C', '#E74C3C', '#34495E', '#2ECC71', '#E67E22'
// ];

// const ImageCarousel = () => {
//   const [index, setIndex] = useState(0);
//   const [loadedImages, setLoadedImages] = useState(
//     Array(placeholderColors.length).fill(true)  // No need to wait for loading
//   );
//   const carouselRef = useRef(null);
//   let touchStartX = 0;
//   let touchEndX = 0;

//   const prevSlide = () => {
//     setIndex((prev) => (prev > 0 ? prev - 1 : placeholderColors.length - 1));
//   };

//   const nextSlide = () => {
//     setIndex((prev) => (prev < placeholderColors.length - 1 ? prev + 1 : 0));
//   };

//   const handleTouchStart = (e) => {
//     touchStartX = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e) => {
//     touchEndX = e.changedTouches[0].clientX;
//     handleSwipe();
//   };

//   const handleSwipe = () => {
//     const swipeThreshold = 50;
//     if (touchStartX - touchEndX > swipeThreshold) {
//       nextSlide();
//     } else if (touchEndX - touchStartX > swipeThreshold) {
//       prevSlide();
//     }
//   };

//   const getVisibleColors = () => {
//     if (index + 5 <= placeholderColors.length) {
//       return placeholderColors.slice(index, index + 5);
//     } else {
//       return [
//         ...placeholderColors.slice(index),
//         ...placeholderColors.slice(0, (index + 5) % placeholderColors.length),
//       ];
//     }
//   };

//   return (
//     <div
//       ref={carouselRef}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//       className="carousel-wrapper relative flex justify-center items-center mt-10 max-h-[139px] md:max-h-[200px] lg:max-h-[200px] xl:max-h-[248px] md:max-w-[750px] lg:max-w-[1050px] xl:max-w-[1280px] h-full w-full overflow-hidden"
//     >
//       <button
//         onClick={prevSlide}
//         className="absolute z-10 left-0 p-2 text-(--color-sunset-red) rounded-full cursor-pointer"
//       >
//         <IoIosArrowBack size={32} className="hidden md:flex" />
//       </button>
//       <div className="image-carousel flex justify-center items-center ">
//         <div className="image-wrapper flex gap-3 items-center justify-center overflow-hidden">
//           {getVisibleColors().map((color, i) => {
//             const colorIndex = (index + i) % placeholderColors.length;

//             return (
//               <div
//                 key={colorIndex}
//                 className={`image-container transition-x duration-300 flex justify-center items-center h-[111px] w-[131px] md:h-[111px] md:w-[131px] lg:h-[145px] lg:w-[200px] xl:h-[198px] xl:w-[234px] overflow-hidden ${
//                   i === 2
//                     ? 'h-[139px] w-[219px] md:h-[145px] md:w-[250px] lg:h-[200px] lg:w-[300px] xl:h-[248px] xl:w-[416px] z-10'
//                     : ''
//                 } ${i === 0 ? 'ml-[-200px] md:ml-[-82px] lg:ml-[-100px] xl:ml-[-124px]' : ''} ${
//                   i === 4
//                     ? 'mr-[-200px] md:mr-[-82px] lg:mr-[-100px] xl:mr-[-124px]'
//                     : ''
//                 }`}
//               >
//                 <div className="relative w-full h-full">
//                   <div
//                     className="w-full h-full"
//                     style={{ backgroundColor: color }}
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <button
//         onClick={nextSlide}
//         className="absolute z-10 right-0 p-2 text-(--color-sunset-red) rounded-full cursor-pointer"
//       >
//         <IoIosArrowForward size={32} className="hidden md:flex" />
//       </button>
//     </div>
//   );
// };

// export default ImageCarousel;
