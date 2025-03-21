import { User } from '../types/auth';
import { getUserProfile } from './mockAuthApi';

export const testGetUserProfile = async (token: string): Promise<User> => {
  return await getUserProfile(token);
};

export const testGetUserProfileFail = async (): Promise<User> => {
  return await getUserProfile('invalid-token');
};
