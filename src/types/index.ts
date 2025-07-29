import { LoginForm, RegisterForm } from "@/app/(auth)/schema";

export interface User {
  name: string;
  email: string;
  role: string;
}

export type LoginCredentials = LoginForm;
export type RegisterCredentials = RegisterForm;

export interface AuthResponse {
  user: User;
  token: string;
}
