import  Credentials from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";

import type { NextAuthConfig } from "next-auth"

import { LoginSchema } from "./validation/schemas";
import { findUserByEmail } from "./data/user";

export default {
  providers: [
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

