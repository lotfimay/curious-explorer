import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const layout = async({children} : any) =>  {
    const session = await getServerSession(authOptions);    
    if (!session) {
      redirect("/auth/login");
    }
    return children;
  
}

export default layout;