import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

import userIcon from "@/public/user-icon.png";

function UserAvatar({ userImage }: { userImage?: string }) {
  return (
    <Avatar>
      <AvatarImage src={userImage} />
      <AvatarFallback>
        <Image width={20} height={20} alt="icon" src={userIcon} />
      </AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
