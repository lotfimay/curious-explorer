import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { JWT } from "next-auth/jwt"

import authConfig from "@/auth.config"
import { db } from "./lib/db"

declare module "next-auth" {

  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id : string,
      role: "USER" | "ADMIN"
    }
  }
}



declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    role: "USER" | "ADMIN"
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
    callbacks : {

      jwt({token}){
        console.log({
          fromJwt : token
        });
        token.role = "ADMIN";
        

        return token;
      },
      session({session , token}){
        console.log({
          fromSession : session
        });
        if(token.role && session.user) session.user.role = "ADMIN";
        if(token.sub && session.user) session.user.id = token.sub;
        return session;
      }

    },
    adapter : PrismaAdapter(db),
    session : {strategy : "jwt"},
    ...authConfig
})