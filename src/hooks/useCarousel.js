import { useEffect, useState } from 'react';

const useCarousel = ({ images, startingIndex = 0 }) => {
  const [index, setIndex] = useState(startingIndex);

  useEffect(() => {
    setIndex(startingIndex);
  }, [startingIndex]);

  const prevSlide = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return { index, nextSlide, prevSlide };
};

export default useCarousel;
