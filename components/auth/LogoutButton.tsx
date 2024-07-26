import React from "react";
import { signOut } from "next-auth/react";

function LogoutButton() {
  return (
    <form
      action={async () => {
        await signOut();
      }}
      className="cursor-pointer"
    >
      <button type="submit">Logout</button>
    </form>
  );
}

export default LogoutButton;
