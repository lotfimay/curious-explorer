import * as z from "zod";

export const LoginSchema = z.object({
    email : z.string().email(),
    password : z.string().min(1 , "The password is required")
});

export const RegisterSchema = z.object({
    name : z.string().min(1 , "The name is required"),
    email : z.string().email(),
    password : z.string().min(6 , "The password must contains 6 caracters or more")
});

