/**
 * @fileoverview User Store to manage user profile information globally.
 * 
 * This Zustand store provides a central location for storing user data
 * fetched from third-party authentication services (Netlify/Google Auth).
 * It also includes actions to update user information.
 * 
 * Note: This setup is for testing the Zustand implementation and simulating
 * getting user data via third-party services.
 */

import { create } from "zustand";

const useUserStore = create((set) => ({
  // Initial state
  user: {
    id: null,
    name: null,
    email: null,
    avatar: null,
  },

  /**
   * Updates the entire user object with new data.
   * @example
   * const { updateUser } = useUserStore();
   * updateUser({ id: "12345", name: "Ola Nordmann", email: "olanordmann@gmail.com", avatar: "https://google.no/avatar.jpg" });
   *
   * // Example: Fetching user data from a third-party service and updating the store
   * async function fetchAndSetUser() {
   *   const userData = await fetchUserData();
   *   updateUser({
   *     id: userData.id,
   *     name: userData.name,
   *     email: userData.email,
   *     avatar: userData.avatar,
   *   });
   * }
   */
  updateUser: (userData) => set({ user: userData }),

  /**
   * Updates specific fields of the user object without modifying other fields.
   * Fields not listed in `validKeys` will be ignored.
   * @example
   * const { updatePartialUser } = useUserStore();
   * updatePartialUser({ name: "Jane Doe" }); // Updates only the name field
   * updatePartialUser({ email: "nordmann1@gmail.com" }); // Updates only the email field
   * updatePartialUser({ name: "Jane", avatar: "https://example.com/avatar.png" }); // Updates name and avatar
   */
  updatePartialUser: (partialUserData) =>
    set((state) => {
      const validKeys = ["id", "name", "email", "avatar"]; // 👈 Add new keys here if the user object expands in the future.
      const updatedUser = { ...state.user };
      Object.keys(partialUserData).forEach((key) => {
        if (validKeys.includes(key)) {
          updatedUser[key] = partialUserData[key];
        }
      });
      return { user: updatedUser };
    }),
}));

export default useUserStore;
