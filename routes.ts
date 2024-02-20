/**
  * these routes don't require authentication
  * @type{string[]}
 */

export const publicRoutes : string [] = [
    "/",
    "/auth/new-verification",
]

export const authRoutes : string [] = [
    "/auth/login",
    "/auth/register",

]

export const apiPrefix = "/api/auth";


export const DEFAULT_LOGIN_REDIRECT = "/profile"