import React from "react";
import { signOut } from "@/auth";

function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="cursor-pointer"
    >
      <button type="submit">Logout</button>
    </form>
  );
}

export default LogoutButton;
