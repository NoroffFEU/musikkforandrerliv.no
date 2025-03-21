import { useEffect } from 'react';
import { useDarkModeStore } from '../store';

/**
 * Hook to manage dark mode functionality.
 * 
 * Uses the dark mode store and syncs with system preferences.
 * Provides functions to enable, disable, or toggle dark mode.
 */
export const useDarkMode = () => {
  const {
    isDarkMode,
    toggleDarkMode,
    enableDarkMode,
    disableDarkMode,
  } = useDarkModeStore();

  // Listen for system preference changes
  useEffect(() => {
    // Check if the user has a system preference for dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Function to handle system preference change
    const handleSystemPreferenceChange = (event: MediaQueryListEvent) => {
      // Only apply system preference if no user preference is stored
      if (localStorage.getItem('darkMode') === null) {
        if (event.matches) {
          enableDarkMode();
        } else {
          disableDarkMode();
        }
      }
    };

    // Add listener for preference changes
    prefersDarkMode.addEventListener('change', handleSystemPreferenceChange);
    
    // Clean up listener when component unmounts
    return () => {
      prefersDarkMode.removeEventListener('change', handleSystemPreferenceChange);
    };
  }, [enableDarkMode, disableDarkMode]);

  return {
    isDarkMode,
    toggleDarkMode,
    enableDarkMode,
    disableDarkMode,
  };
};

export default useDarkMode;