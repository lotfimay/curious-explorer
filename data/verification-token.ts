import { db } from "@/lib/db";


export async function getVerificationTokenByEmail(email : string){
    try{
        const verificationToken = await db.verificationToken.findFirst({
            where : {
                email : email,
            }
        });
        return verificationToken;
    }catch(error){
        throw error;
    }
}

export async function getVerificationTokenByToken(token : string){
    try{
        const verificationToken = await db.verificationToken.findUnique({
            where : {
                token : token,
            }
        });
        return verificationToken;
    }catch(error){
        throw error;
    }
}