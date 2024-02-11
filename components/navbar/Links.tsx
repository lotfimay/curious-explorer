import React from "react";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { auth, signOut } from "@/auth";

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
        <li>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
            className="cursor-pointer"
          >
            <button type="submit">Logout</button>
          </form>
        </li>
      )}
    </ul>
  );
}

export default Links;
