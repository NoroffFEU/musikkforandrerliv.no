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
 * @property {boolean} isSidebarOpen - Represents whether the sidebar is open or closed.
 * @property {() => void} toggleSidebar - Toggles the sidebar between open and closed states.
 * @property {() => void} openSidebar - Opens the sidebar.
 * @property {() => void} closeSidebar - Closes the sidebar.
 */

const useUIStore = create((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),
}));

export { useModalStore, useUIStore };
