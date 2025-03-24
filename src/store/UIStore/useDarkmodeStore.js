import { create } from 'zustand';

/**
 * Zustand store for managing dark mode state.
 *
 * This store allows toggling between light and dark themes, as well as explicitly enabling or disabling dark mode.
 * The state is persisted in `localStorage` to maintain the user's preference across sessions.
 *
 * @property {boolean} isDarkMode - Tracks whether dark mode is enabled.
 * @property {() => void} toggleDarkMode - Toggles dark mode on/off.
 * @property {() => void} enableDarkMode - Forces dark mode on.
 * @property {() => void} disableDarkMode - Forces dark mode off.
 *
 */

const useDarkModeStore = create((set) => {
  const savedTheme = localStorage.getItem('darkMode') === 'true';
  if (savedTheme) document.documentElement.classList.add('dark');

  return {
    isDarkMode: savedTheme,

    toggleDarkMode: () =>
      set((state) => {
        const newMode = !state.isDarkMode;
        localStorage.setItem('darkMode', newMode);
        document.documentElement.classList.toggle('dark', newMode);
        return { isDarkMode: newMode };
      }),

    enableDarkMode: () =>
      set(() => {
        localStorage.setItem('darkMode', true);
        document.documentElement.classList.add('dark');
        return { isDarkMode: true };
      }),

    disableDarkMode: () =>
      set(() => {
        localStorage.setItem('darkMode', false);
        document.documentElement.classList.remove('dark');
        return { isDarkMode: false };
      }),
  };
});

export { useDarkModeStore };
