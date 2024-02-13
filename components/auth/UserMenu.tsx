import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import UserAvatar from "../UserAvatar";
import Image from "next/image";
import LogoutButton from "./LogoutButton";

interface MenuItem {
  label: string;
  url: string;
  icon?: string;
}

interface UserMenuProps {
  userImage?: string;
  label: string;
  items: MenuItem[];
}

function UserMenu({ userImage, label, items }: UserMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar userImage={userImage} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((item) => (
          <DropdownMenuItem key={item.label}>
            <Link href={item.url}>
              <div className="w-full flex items-center justify-between">
                <h3>{item.label}</h3>
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt="item icon"
                    height={20}
                    width={20}
                  />
                )}
              </div>
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenu;
