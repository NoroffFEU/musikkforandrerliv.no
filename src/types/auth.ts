export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LogoutResponse {
  message: string;
}
