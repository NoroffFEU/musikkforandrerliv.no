import { logout } from "./mockAuthApi.js";

export const testLogout = async () => {
  return await logout();
};
