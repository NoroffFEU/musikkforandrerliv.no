// src/stores/useRequestStore.ts
import { create } from 'zustand';
import { RequestStore } from '../../types';

/**
 * Manages global API request states.
 *
 * @property {boolean} isLoading - Tracks if an API request is in progress.
 * @property {string|null} error - Stores the error message or null if no error.
 * @property {(isLoading: boolean) => void} setLoading - Sets the loading state.
 * @property {(error: string|null) => void} setError - Sets the error state.
 * @property {() => void} clearError - Clears the error state.
 *
 * @example
 * const { isLoading, setLoading } = useRequestStore();
 * setLoading(true);
 */

const useRequestStore = create<RequestStore>((set) => ({
  isLoading: false,
  error: null,
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
}));

export default useRequestStore;