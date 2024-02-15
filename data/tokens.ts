import {v4 as uuidv4 } from "uuid"
import { getVerificationTokenByEmail } from "./verification-token";
import { db } from "@/lib/db";


export async function generateVerificationToken(email : string){

    try{
        const token = uuidv4();
        const expires = new Date(new Date().getTime() + 3600 * 1000);

        const existingToken = await getVerificationTokenByEmail(email);

        if(existingToken){
            await db.verificationToken.delete({
                where : {id : existingToken.id}
            });
        }
        
        const newToken = await db.verificationToken.create({
            data : {
                email,
                token,
                expires
            }
        });
        return newToken;
    }catch (error){
        throw error;;
    }

}