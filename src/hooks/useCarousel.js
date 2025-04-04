import { useEffect, useRef, useState } from 'react';

const useCarousel = ({ images, startingIndex = 0 }) => {
  const [index, setIndex] = useState(startingIndex);
  const carouselRef = useRef(null);
  const keyboardListenerRef = useRef(null);

  let touchStartX = 0;
  let touchEndX = 0;

  const prevSlide = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    setIndex(startingIndex);
  }, [startingIndex]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  const enableKeyboardNavigation = () => {
    keyboardListenerRef.current = handleKeyDown;
    window.addEventListener('keydown', keyboardListenerRef.current);
  };

  const disableKeyboardNavigation = () => {
    if (keyboardListenerRef.current) {
      window.removeEventListener('keydown', keyboardListenerRef.current);
      keyboardListenerRef.current = null;
    }
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

  return {
    index,
    nextSlide,
    prevSlide,
    handleTouchStart,
    handleTouchEnd,
    carouselRef,
    enableKeyboardNavigation,
    disableKeyboardNavigation,
  };
};

export default useCarousel;
