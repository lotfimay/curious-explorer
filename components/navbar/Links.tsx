import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { getServerSession } from "next-auth";
import UserMenu from "../auth/UserMenu";
import { userMenuItems } from "@/constants";

async function Links() {
  const session = await getServerSession();
  return (
    <ul className="flex items-center justify-between font-semibold gap-10">
      <li className="flex items-center justify-center">
        <ThemeSwitcher />
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
          userImage={session.user?.image || ''}
        />
      )}
    </ul>
  );
}

export default Links;
