import api from "@/lib/api";
import {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
  User,
} from "@/types";
import { clearToken, hasToken, setToken } from "./TokenManager";

// Auth Functions
export const login = async (
  credentials: LoginCredentials,
): Promise<AuthResponse> => {
  const response = await api.post("/auth/login", credentials);
  const { email, token, name, role } = response.data.data;

  setToken(token);

  const user: User = {
    email: email,
    name: name,
    role: role,
  };
  return { user, token };
};

export const getCurrentUser = async (): Promise<User> => {
  const response = await api.get("/auth/me");
  return response.data.data;
};

export const logout = async (): Promise<void> => {
  try {
    await api.post("/auth/logout");
  } catch (error) {
    console.log("Backend logout failed, continuing with local logout");
  } finally {
    clearToken();
  }
};

// Logout from all devices
export const logoutAll = async (): Promise<void> => {
  try {
    await api.post("/auth/logout-all");
  } catch (error) {
    console.log("Backend logout-all failed, continuing with local logout");
  } finally {
    clearToken();
  }
};

export const forgotPassword = async (email: string): Promise<void> => {
  await api.post("/auth/forgot-password", { email });
};

export const resetPassword = async (
  token: string,
  newPassword: string,
): Promise<void> => {
  await api.post("/auth/reset-password", { token, newPassword });
};

export const register = async (userData: RegisterCredentials) => {
  const response = await api.post("/auth/register", userData);
  const { Id, fullName, email } = response.data.data;

  return { Id, fullName, email };
};

export const isAuthenticated = (): boolean => {
  return hasToken();
};
