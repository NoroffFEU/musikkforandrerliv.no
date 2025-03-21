import { LoginResponse } from '../types/auth';
import { login } from './mockAuthApi';

export const testLoginSuccess = async (): Promise<LoginResponse> => {
  return await login('testuser@example.com', 'password123');
};

export const testLoginFail = async (): Promise<LoginResponse> => {
  return await login('testuser@example.com', 'wrongpassword');
};
