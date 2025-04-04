import React, { useCallback, useEffect } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import useCarousel from '../../hooks/useCarousel';
import { Modal, ModalContent, ModalTrigger } from '../Modal';

const ImagePreview = ({ images, thumbnail, startingIndex }) => {
  const {
    index,
    prevSlide,
    nextSlide,
    carouselRef,
    handleTouchStart,
    handleTouchEnd,
    setIndex,
  } = useCarousel({
    images,
    startingIndex,
  });

  const handleKeyDown = useCallback(({ key }) => {
    if (key === 'ArrowRight') nextSlide();

    if (key === 'ArrowLeft') prevSlide();
  }, []);

  return (
    <Modal
      onOpenChange={(open) => {
        if (!open) setIndex(0);
      }}
    >
      <ModalTrigger asChild>{thumbnail}</ModalTrigger>
      <ModalContent>
        <div
          className="relative"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onKeyDown={handleKeyDown}
        >
          <img
            src={images[index].src}
            alt="placeholder-for-now"
            className="aspect-square max-w-[50rem] w-full object-cover m-auto"
          />
          <button
            onClick={prevSlide}
            className="absolute left-5 -bottom-10 sm:top-1/2 sm:-translate-y-1/2 cursor-pointer h-fit"
          >
            <IoIosArrowBack className="size-8 sm:size-10" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-5 -bottom-10 sm:top-1/2 sm:-translate-y-1/2 cursor-pointer h-fit"
          >
            <IoIosArrowForward className="size-8 sm:size-10 " />
          </button>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ImagePreview;
