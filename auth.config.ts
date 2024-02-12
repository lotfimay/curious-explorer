import  Credentials from "next-auth/providers/credentials";
import  Github from "next-auth/providers/github"

import bcrypt from "bcryptjs";

import type { NextAuthConfig } from "next-auth"

import { LoginSchema } from "./validation/schemas";
import { findUserByEmail } from "./data/user";

export default {
  providers: [
    Github({
      clientId : process.env.GITHUB_CLIENT_ID,
      clientSecret : process.env.GITHUB_SECRET,
    }),
    
    Credentials({
      async authorize(credentials){
          try{
            const validatedCredentials = LoginSchema.safeParse(credentials);
        
            if(validatedCredentials.success){
              const { email , password } = validatedCredentials.data;
              const user = await findUserByEmail(email);
    
              if(!user || !user.password) return null;
    
                const passwordMatch = await bcrypt.compare(password , user.password);
    
                if(passwordMatch){
                  return user;
                }
    
            }
    
            return null;
          }catch(error){
              console.error(error);
              return null;
          }
      }
    })
  ],
} satisfies NextAuthConfig

