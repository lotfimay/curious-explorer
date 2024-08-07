import NextAuth, { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/lib/db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],
  session: { strategy: "jwt" },
  events: {
    linkAccount: async ({ user }) => {
      await db.user.update({
        where: {
          id: user.id,
        },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    jwt: async ({ token }) => {
      return token;
    },
  },
};
export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
