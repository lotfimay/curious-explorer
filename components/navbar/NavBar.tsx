import React from "react";
import Links from "./Links";
import Link from "next/link";

function NavBar({ className }: { className?: string }) {
  return (
    <nav className={`${className}`}>
      <ul className="flex items-center justify-between">
        <li>
          <Link href="/" className="font-bold text-xl">
            Curious Explorer
          </Link>
        </li>
        <li>
          <Links />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
