/**
 * @fileoverview User Store to manage user profile information globally.
 *
 * This Zustand store provides a central location for storing user data
 * fetched from third-party authentication services (Netlify/Google Auth).
 * It also includes actions to update user information.
 *
 * - Use selectors to prevent unnecessary re-renders in components 👈.
 *
 * @example Basic usage
 * // In a component:
 * const user = useUserStore(state => state.user); // Only re-renders when user changes
 * const updateUser = useUserStore(state => state.updateUser); // Only re-renders when updateUser changes
 *
 * if you do this:
 * const { user, loginUser, logoutUser, updatePartialUser } = useUserStore();
 * it will re-render every single state the store changes
 *
 * Note: This setup is for testing the Zustand implementation and simulating
 * getting user data via third-party services.
 */
import { create } from 'zustand';

import { login } from '../../mocks/mockAuthApi';
import { logout } from '../../mocks/mockAuthApi';
import useRequestStore from '../APIStore/useRequestStore';

/**
 * User Store to manage authentication state and user information
 *
 * @typedef {Object} User
 * @property {string|null} name - User's full name
 * @property {string|null} email - User's email address
 *
 * @typedef {Object} UserState
 * @property {User} user - Current user information
 * @property {string|null} token - Authentication token
 * @property {Function} updateUser - Function to replace the entire user object
 * @property {Function} updatePartialUser - Function to update specific user properties
 * @property {Function} loginUser - Function to authenticate user and update state
 * @property {Function} logoutUser - Function to log out user and clear state
 */
const useUserStore = create((set) => ({
  // Initial state
  user: {
    name: null,
    email: null,
  },
  token: null,

  /**
   * Updates the entire user object with new data.
   *
   * @param {User} userData - Complete user data to replace current user
   *
   * @example
   * // Get only what you need to avoid re-renders
   * const updateUser = useUserStore(state => state.updateUser);
   *
   * // Replace entire user object
   * updateUser({
   *   name: "Ola Nordmann",
   *   email: "olanordmann@gmail.com",
   * });
   *
   * @example Fetching user data from a third-party service
   * async function fetchAndSetUser() {
   *   const userData = await fetchUserData();
   *   updateUser({
   *     name: userData.name,
   *     email: userData.email,
   *   });
   * }
   */
  updateUser: (userData) => set({ user: userData }),

  /**
   * Updates specific fields of the user object without modifying other fields.
   * Fields not listed in `validKeys` will be ignored.
   *
   * @param {Partial<User>} partialUserData - Partial user data to update
   *
   * @example
   * // Get only the function to avoid re-renders
   * const updatePartialUser = useUserStore(state => state.updatePartialUser);
   *
   * // Update only specific fields
   * updatePartialUser({ name: "Jane Doe" }); // Updates only the name field
   * updatePartialUser({ email: "nordmann1@gmail.com" }); // Updates only the email field
   */
  updatePartialUser: (partialUserData) =>
    set((state) => {
      const validKeys = ['name', 'email']; // 👈 Add new keys here if the user object expands in the future.
      const updatedUser = { ...state.user };
      Object.keys(partialUserData).forEach((key) => {
        if (validKeys.includes(key)) {
          updatedUser[key] = partialUserData[key];
        }
      });
      console.log('🔄 Updated user state:', updatedUser);
      return { user: updatedUser };
    }),

  /**
   * Authenticates a user with email and password.
   * Updates loading and error states in the RequestStore..
   *
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise<Object>} Authentication response
   *
   * @example
   * // Get only the function to avoid re-renders
   * const loginUser = useUserStore(state => state.loginUser);
   *
   * // Use in event handler
   * const handleLogin = async () => {
   *   try {
   *     await loginUser(email, password);
   *     navigate('/dashboard');
   *   } catch (error) {
   *     // Handle error in component
   *   }
   * };
   */
  loginUser: async (email, password) => {
    const { setLoading, setError } = useRequestStore.getState(); // 👈 Get loading and error state from the request store
    setLoading(true);
    setError(null);

    try {
      const response = await login(email, password);
      set({ user: response.user, token: response.token });
      // Get the current state (to see if state is updated)
      const currentState = useUserStore.getState();
      console.log(
        '✅ Logged in successfully user state set to:',
        currentState.user,
        'Token:',
        currentState.token,
      );
      return response;
    } catch (error) {
      console.error('🆘 Login failed:', error.message);
      setError(error.message);
      throw error; // Allow component to catch and handle errors
    } finally {
      setLoading(false);
    }
  },

  /**
   * Logs out the current user and resets state.
   * Updates loading and error states in the RequestStore.
   *
   * @returns {Promise<void>}
   *
   * @example
   * // Get only the function to avoid re-renders
   * const logoutUser = useUserStore(state => state.logoutUser);
   *
   * // Use in event handler
   * const handleLogout = async () => {
   *   try {
   *     await logoutUser();
   *     navigate('/login');
   *   } catch (error) {
   *     // Error message
   *   }
   * };
   *
   */
  logoutUser: async () => {
    const { setLoading, setError } = useRequestStore.getState();
    setLoading(true);
    setError(null);
    try {
      await logout();
      set({
        user: { name: null, email: null },
        token: null,
      });

      // Get the current state after resetting (to see if state is cleared)
      const currentState = useUserStore.getState();
      console.log('🔄 Logged out: current state is', {
        user: currentState.user,
        token: currentState.token,
      });
    } catch (error) {
      console.error('🆘 Logout failed: ', error.message);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  },
}));

export default useUserStore;
