import { create } from "zustand";

/**
 * Manages modal visibility state.
 *
 * @property {boolean} isModalOpen - Tracks if the modal is open or closed.
 * @property {() => void} toggleModal - Toggles between open and closed states.
 * @property {() => void} openModal - Opens the modal separately, instead of toggling.
 * @property {() => void} closeModal - Closes the modal separately, instead of toggling.
 *
 * @example
 * const { isModalOpen, toggleModal } = useModalStore();
 * toggleModal();
 */
const useModalStore = create((set) => ({
  isModalOpen: false,
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

/**
 * A Zustand store for managing the sidebar's open/closed state.
 *
 * This store provides methods to toggle, open, and close the sidebar.
 *
 * @example
 * const { isSidebarOpen, toggleSidebar, openSidebar, closeSidebar } = useSidebarStore();
 *
 * // Open the sidebar
 * openSidebar();
 *
 * // Close the sidebar
 * closeSidebar();
 *
 * // Toggle the sidebar state
 * toggleSidebar();
 *
 * @property {boolean} isSidebarOpen - Represents whether the sidebar is open or closed.
 * @property {() => void} toggleSidebar - Toggles the sidebar between open and closed states.
 * @property {() => void} openSidebar - Opens the sidebar.
 * @property {() => void} closeSidebar - Closes the sidebar.
 */

const useSidebarStore = create((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),
}));


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

    toggleDarkMode: () => set((state) => {
      const newMode = !state.isDarkMode;
      localStorage.setItem('darkMode', newMode);
      document.documentElement.classList.toggle('dark', newMode);
      return { isDarkMode: newMode };
    }),

    enableDarkMode: () => set(() => {
      localStorage.setItem('darkMode', true);
      document.documentElement.classList.add('dark');
      return { isDarkMode: true };
    }),

    disableDarkMode: () => set(() => {
      localStorage.setItem('darkMode', false);
      document.documentElement.classList.remove('dark');
      return { isDarkMode: false };
    }),
  };
});

export { useModalStore, useUIStore, useDarkModeStore };
