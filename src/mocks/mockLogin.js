import { login } from './mockAuthApi.js';

export const testLoginSuccess = async () => {
  return await login('testuser@example.com', 'password123');
};

export const testLoginFail = async () => {
  return await login('testuser@example.com', 'wrongpassword');
};
