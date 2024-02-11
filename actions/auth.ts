"use server";
import { LoginSchema, RegisterSchema } from "@/validation/schemas";
import { z } from "zod";


import bcrypt from "bcryptjs";
import { findUserByEmail  } from "@/data/user";
import { db } from "@/lib/db";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function login(values : z.infer<typeof LoginSchema>){

    const validatedValues = LoginSchema.safeParse(values);

    if(!validatedValues.success)
        return {error: "Something went wrong !"}

    

    const {email , password} = validatedValues.data;

    try{
        await signIn("credentials" , {email , password , redirectTo : DEFAULT_LOGIN_REDIRECT});

    }catch(error){

        if(error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin":
                    return {error : "Invalid Crendentials"}
                default:
                    return {error : error.type}
            }
        }

        throw error;

    }

}


export async function register(values : z.infer<typeof RegisterSchema>){
    
    const validatedValues = RegisterSchema.safeParse(values);

    if(!validatedValues.success)
        return {error : "Something went wrong !"}

    const { name , email , password } = validatedValues.data;


    const hashedPassword = await bcrypt.hash(password,10);
    
    const existingdUser = await findUserByEmail(email);

    if(existingdUser){
        return {error : "Email already in use"};
    }

    await db.user.create({
        data : {
            email,
            name,
            password : hashedPassword
        }
    });

    // TODO : add a verification token email

    return {success : "User created"}

}