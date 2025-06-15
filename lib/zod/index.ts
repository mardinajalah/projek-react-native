import { z } from "zod";

export const loginSchema = z
    .object({
        name: z.string().min(1, "Name is required"),
        password: z.string().min(6, "Password must be at least 6 characters long"),
    })

export const registerSchema = z
    .object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Email must be valid"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string().min(1, "Please confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });