import * as z from "zod";
import { passwordSchema } from "./password.schema";

export const signupFormSchema = z
  .object({
    fullName: z
      .string()
      .min(5, "Full name must be at least 5 characters.")
      .max(32, "Full name must be at most 32 characters."),
    email: z.email({ message: "Invalid email address" }),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
