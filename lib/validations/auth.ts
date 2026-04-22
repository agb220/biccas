import * as z from "zod";

export const signUpSchema = z
  .object({
    name: z.string().min(2, "The name must be at least 2 characters long"),
    email: z.string().email("Invalid email format"),
    password: z
      .string()
      .min(6, "The password must be at least 6 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "The passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpValues = z.infer<typeof signUpSchema>;
