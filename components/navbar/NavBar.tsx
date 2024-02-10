import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

import SocialMedia from "@/components/navbar/SocialMedia";

import Links from "./Links";

function NavBar() {
  return (
    <nav className="p-4 m-8">
      <ul className="flex items-center justify-between">
        {/* <li>
          <SocialMedia />
        </li> */}
        <li>
          <h1 className="font-semibold">Curious Explorer</h1>
        </li>
        <li>
          <Links />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
