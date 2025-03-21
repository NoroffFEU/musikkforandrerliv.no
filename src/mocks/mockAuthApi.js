export const login = async (email, password) => {
  console.log("🔄 Simulating login request...");
  await new Promise((resolve) => setTimeout(resolve, 500)); // simulate internet delay

  if (email === "testuser@example.com" && password === "password123") {
    return {
      token: "mocked-jwt-token",
      user: {
        id: 1,
        name: "Test User",
        email,
        avatar: "https://example.com/avatar.png",
      },
    };
  } else {
    throw new Error("Invalid email or password");
  }
};

export const getUserProfile = async (token) => {
  console.log("🔄 Simulating getUserProfile request...");
  await new Promise((resolve) => setTimeout(resolve, 500)); // simulate internet delay

  if (token === "mocked-jwt-token") {
    return {
      id: 1,
      name: "Test User",
      email: "testuser@example.com",
      avatar: "https://example.com/avatar.png",
    };
  } else {
    throw new Error("Invalid token");
  }
};

export const logout = async () => {
  console.log("🔄 Simulating logout request...");
  await new Promise((resolve) => setTimeout(resolve, 300)); // simulate internet delay

  return { message: "Logged out successfully" };
};
