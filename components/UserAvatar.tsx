import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function UserAvatar({ userImage }: { userImage?: string }) {
  return (
    <Avatar>
      <AvatarImage src={userImage} />
      <AvatarFallback>User img</AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
