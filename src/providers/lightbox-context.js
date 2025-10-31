import { createContext } from 'react';

export const LightboxContext = createContext({
  isOpen: false,
  openLightbox: () => {},
  closeLightbox: () => {},
  currentIndex: 0,
  goToNext: () => {},
  goToPrevious: () => {},
  images: [],
});

export default LightboxContext;
