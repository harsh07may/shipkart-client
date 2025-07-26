import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export const registerSchema = z
  .object({
    firstName: z.string().min(1, {
      message: "Name must be at least 1 character.",
    }),

    lastName: z.string(),

    email: z.email("Invalid email"),

    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
  });
