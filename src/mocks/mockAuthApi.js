export const login = async (email, password) => {
  if (email === "testuser@example.com" && password === "password123") {
    return { token: "mocked-jwt-token", user: { name: "Test User", email } };
  } else {
    throw new Error("Invalid email or password");
  }
};

export const getUserProfile = async (token) => {
  if (token === "mocked-jwt-token") {
    return { name: "Test User", email: "testuser@example.com" };
  } else {
    throw new Error("Invalid token");
  }
};

export const logout = async () => {
  return { message: "Logged out successfully" };
};
