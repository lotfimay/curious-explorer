import React from "react";
import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import { auth } from "@/auth";
import styles from "./navbar.module.css";
async function NavBar() {
  const session = await auth();

  return (
    <nav>
      <ul className={styles.container}>
        <li>
          <h1 className="">Curious Explorer</h1>
        </li>
        <li className={styles["links-container"]}>
          <ul className={styles.links}>
            <li>
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
              <p>Logout</p>
            )}
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
