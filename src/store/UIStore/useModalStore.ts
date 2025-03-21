import { create } from 'zustand';
import { ModalStore } from '../../types';

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
const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

export { useModalStore };