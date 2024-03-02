import React from "react";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { auth } from "@/auth";
import UserMenu from "../auth/UserMenu";
import { userMenuItems } from "@/constants";

async function Links() {
  const session = await auth();
  return (
    <ul className="flex items-center justify-between font-semibold gap-4">
      <li className="flex items-center justify-center">
        <ThemeSwitcher />
      </li>
      <li>
        <Link href="/">HomePage</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      {session === null ? (
        <li>
          <Link href="/auth/login">Login</Link>
        </li>
      ) : (
        <UserMenu
          label="Account"
          items={userMenuItems}
          userImage={session.user.image}
        />
      )}
    </ul>
  );
}

export default Links;
