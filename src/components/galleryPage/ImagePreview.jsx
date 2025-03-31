import React from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import useCarousel from '../../hooks/useCarousel';
import { Modal, ModalContent, ModalTrigger } from '../Modal';

const ImagePreview = ({ images, thumbnail, startingIndex }) => {
  const { index, prevSlide, nextSlide } = useCarousel({
    images,
    startingIndex,
  });

  return (
    <Modal>
      <ModalTrigger asChild>{thumbnail}</ModalTrigger>
      <ModalContent>
        <div className="relative">
          <img
            src={images[index]}
            alt="placeholder-for-now"
            className="aspect-square max-w-[50rem] w-full object-cover m-auto rounded-sm"
          />
          <button
            onClick={prevSlide}
            className="absolute left-5 -bottom-10 sm:top-1/2 sm:-translate-y-1/2 cursor-pointer h-fit"
          >
            <IoIosArrowBack className="size-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-5 -bottom-10 sm:top-1/2 sm:-translate-y-1/2 cursor-pointer h-fit"
          >
            <IoIosArrowForward className="size-8" />
          </button>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ImagePreview;
