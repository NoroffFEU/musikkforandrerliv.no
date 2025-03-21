import {
  testGetUserProfile,
  testGetUserProfileFail,
} from './mockGetUserProfile';
import { testLoginFail, testLoginSuccess } from './mockLogin';
import { testLogout } from './mockLogout';

const runMockTest = async (): Promise<void> => {
  try {
    console.log('✅ Testing LOGIN with correct email and password...');
    const loginResponse = await testLoginSuccess();
    console.log('✅ Login Success:', loginResponse);

    console.log('✅ Testing GET USER PROFILE...');
    const userProfile = await testGetUserProfile(loginResponse.token);
    console.log('✅ User Profile:', userProfile);

    console.log('✅ Testing LOGOUT...');
    const logoutResponse = await testLogout();
    console.log('✅ Logout Success:', logoutResponse);

    console.log('\n🚨 Testing LOGIN with wrong password...');
    await testLoginFail();
  } catch (err) {
    if (err instanceof Error) {
      console.error('❌ ERROR:', err.message);
    } else {
      console.error('❌ ERROR:', err);
    }
  }

  try {
    console.log('\n🚨 Testing GET USER PROFILE with invalid token...');
    await testGetUserProfileFail();
  } catch (err) {
    if (err instanceof Error) {
      console.error('❌ ERROR:', err.message);
    } else {
      console.error('❌ ERROR:', err);
    }
  }
};

runMockTest();