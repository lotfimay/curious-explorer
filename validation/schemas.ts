import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "The password is required"),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, "The name is required"),
  email: z.string().email(),
  password: z.string().min(6, "The password must contains 6 caracters or more"),
});

export const MAX_FILE_SIZE = 1024 * 1024 * 5;
export const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];

export const BlogSchema = z.object({
  title: z
    .string({ required_error: "Please enter a title" })
    .min(1, "Please enter a title"),
  category: z
    .string({ required_error: "Please select a category" })
    .min(1, "Please select a category"),
  description: z
    .string({
      required_error: "Please enter the blog details",
    })
    .min(1, "Please enter the blog details"),
  image: z
    .any()
    .refine((file: File) => !!file, "File is required")
    .refine((file) => {
      return file?.size <= MAX_FILE_SIZE;
    }, "Max size is 5MB."),
});
