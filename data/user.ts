
import { db } from "@/lib/db";

export function findUserByEmail(email : string){
  
    try{
      const user = db.user.findUnique({
        where : {
          email : email
        }
      });
      return user;
    }catch(error){
      throw error;
    }
  }
  
export function findUserById(id : string){
    
    try{
      const user = db.user.findUnique({
        where : {
          id : id
        }
      });
      return user;
    }catch(error){
      throw error;
    }
  }