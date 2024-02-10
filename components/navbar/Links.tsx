import React from "react";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

function Links() {
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
      <li>
        <Link href="/auth/login">Login</Link>
      </li>
    </ul>
  );
}

export default Links;
