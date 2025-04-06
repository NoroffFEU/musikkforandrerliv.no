import { useContext } from 'react';

import { LightboxContext } from './LightboxProvider';

/**
 * Hook to use the lightbox context
 * @returns {Object} Lightbox context with openLightbox and other functions
 */
export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};

export default useLightbox;
