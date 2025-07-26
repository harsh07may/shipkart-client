  import { loginSchema, registerSchema } from "@/app/(auth)/schema";
  import z from "zod";

  export interface User {
    name: string;
    email: string;
    role: string;
  }

  export type LoginCredentials = z.infer<typeof loginSchema>;
  export type RegisterCredentials = z.infer<typeof registerSchema>;

  export interface AuthResponse {
    user: User;
    token: string;
  }
