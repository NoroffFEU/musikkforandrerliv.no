import { createContext, useContext } from 'react';

export const LightboxContext = createContext(null);
export const useLightbox = () => useContext(LightboxContext);
