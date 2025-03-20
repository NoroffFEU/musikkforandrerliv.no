// src/stores/useRequestStore.js
import { create } from "zustand";

/**
 * Manages global API request states.
 *
 * @property {boolean} loading - Tracks if an API request is in progress.
 * @property {string|null} error - Stores the error message or null if no error.
 * @property {(isLoading: boolean) => void} setLoading - Sets the loading state.
 * @property {(error: string|null) => void} setError - Sets the error state.
 * @property {() => void} reset - Resets loading and error states to initial values.
 *
 * @example
 * const { loading, setLoading } = useRequestStore();
 * setLoading(true);
 */

const useRequestStore = create((set) => ({
    loading: false,
    error: null,
    setLoading: (isLoading) => set({ loading: isLoading }),
    setError: (error) => set({ error }),
    reset: () => set({ loading: false, error: null }),
}));

export default useRequestStore;