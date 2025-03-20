import { create } from "zustand";

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
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),
}));

export { useSidebarStore };
