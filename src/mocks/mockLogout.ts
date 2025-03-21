import { LogoutResponse } from '../types/auth';
import { logout } from './mockAuthApi';

export const testLogout = async (): Promise<LogoutResponse> => {
  return await logout();
};
