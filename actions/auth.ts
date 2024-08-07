// "use server";
// import { LoginSchema, RegisterSchema } from "@/validation/schemas";
// import { z } from "zod";


// import bcrypt from "bcryptjs";
// import { findUserByEmail  } from "@/data/user";
// import { db } from "@/lib/db";

// import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

// import { signIn } from "@/auth";
// import { AuthError } from "next-auth";
// import { generateVerificationToken } from "@/data/tokens";
// import { sendVerificationEmail } from "@/lib/mail";

// export async function login(values : z.infer<typeof LoginSchema>){

//     try{
//         const validatedValues = LoginSchema.safeParse(values);

//         if(!validatedValues.success)
//             return {error: "Something went wrong !"}
    
        
//         const { email, password } = validatedValues.data;
//         const existingUser = await findUserByEmail(email);
    
//         if (!existingUser || !existingUser.email || !existingUser.password) {
//             return { error: "Email does not exist!" }
//         }

//         const passwordMatch = await bcrypt.compare(password , existingUser.password);
          
//         if (!existingUser.emailVerified && passwordMatch) {
//             const verificationToken = await generateVerificationToken(
//                 existingUser.email,
//             );
          
//             await sendVerificationEmail(
//                     verificationToken.email,
//                     verificationToken.token,
//             );
          
//             return { success: "Validation email sent!" };
//         }
        
//         await signIn("credentials" , {email , password , redirectTo : DEFAULT_LOGIN_REDIRECT});
    
        
//     }catch(error){

//         if(error instanceof AuthError){
//             switch(error.type){
//                 case "CredentialsSignin":
//                     return {error : "Invalid Crendentials"}
//                 default:
//                     return {error : error.type}
//             }
//         }

//         console.log(error)

//         throw error;
//     }

// }


// export async function register(values : z.infer<typeof RegisterSchema>){
    
//     try{

//         const validatedValues = RegisterSchema.safeParse(values);

//         if(!validatedValues.success)
//             return {error : "Something went wrong !"}
    
//         const { name , email , password } = validatedValues.data;
    
    
//         const hashedPassword = await bcrypt.hash(password,10);
        
//         const existingdUser = await findUserByEmail(email);
    
//         if(existingdUser){
//             return {error : "Email already in use"};
//         }
    
//         const newUser = await db.user.create({
//             data : {
//                 email,
//                 name,
//                 password : hashedPassword
//             }
//         });
    
//         // TODO : add a verification token email
    
//         const verificationToken = await generateVerificationToken(email);

//         await sendVerificationEmail(verificationToken.email , verificationToken.token);
        
//         return {success : "Verification email sent !"}

//     }catch(error){
//         console.log(error)
//         return {error : "Something went wrong !"}
//     }

// }


// export async function validateEmail(token : string){

//         try{
            
//             const validationToken = await db.verificationToken.findUnique({
//                 where : {
//                     token : token
//                 }
//             });

//             if(!validationToken) return {error : "Invalid token !"}

//             const currentDate = new Date();

//             if(validationToken.expires < currentDate) return {error: "Expired token !"}

//             await db.$transaction([
//                 db.user.update({
//                     where : {
//                         email : validationToken.email
//                     },
//                     data : {
//                         emailVerified : new Date()
//                     }
//                 }),
//                 db.verificationToken.delete({
//                     where : {
//                         token : token
//                     }
//                 })
//             ])

//             return {success : "Email verified successfully !"}

//         }catch(error){
//             return {error : "Something went wrong !"}
//         }

// }