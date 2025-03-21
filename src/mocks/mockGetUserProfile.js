import { getUserProfile } from './mockAuthApi.js';

export const testGetUserProfile = async (token) => {
  return await getUserProfile(token);
};

export const testGetUserProfileFail = async () => {
  return await getUserProfile('invalid-token');
};
