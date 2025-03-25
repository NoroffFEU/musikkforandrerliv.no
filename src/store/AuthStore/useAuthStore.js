import { create } from "zustand";
import { persist } from "zustand/middleware";
import { login, logout } from "../../mocks/mockAuthApi";

/**
 * User object:
 * @typedef {Object} User
 * @property {number} id - The user's ID
 * @property {string} name - The user's name
 * @property {string} email - The user's email
 * @property {string} avatar - The user's avatar URL
 */

/**
 * Initial state for the auth store
 * Use this to initialize the store with the initial state
 * @type {{
 * user: User | null,
 * token: string | null,
 * isAuthenticated: boolean,
 * error: string | null,
 * }}
 */

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  error: null,
};

/**
 * Store for managing authentication state
 *@property {User | null} user - The user object
 *@property {string | null} token - The JWT token
 *@property {boolean} isAuthenticated - Whether the user is authenticated
 *@property {string | null} error - The error message
 *@property {function} login - Logs in the user
 *@property {function} logout - Logs out the user
 *@example
 * const login = useAuthStore((state) => state.login);
 * authStore.login("testuser@example.com", "password123");
 */

const useAuthStore = create(
  persist(
    (set) => ({
      ...initialState,

      login: async (email, password) => {
        try {
          const { token, user } = await login(email, password);
          set({ token, user, isAuthenticated: true });
        } catch (error) {
          set({
            error:
              error.message || "Something went wrong with the login process",
          });
        }
      },

      logout: async () => {
        try {
          const { message } = await logout();
          // Just to simulate a successful logout
          // Remove this console.log when we have a real logout functionality
          console.log(message);
          set({ ...initialState });
          localStorage.removeItem("auth");
        } catch (error) {
          set({
            error:
              error.message || "Something went wrong with the logout process",
          });
        }
      },
    }),
    {
      name: "auth",
    }
  )
);

export default useAuthStore;
