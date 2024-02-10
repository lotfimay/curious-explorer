"use client";
import { useThemeContext } from "@/hooks/useThemeContext";
import Link from "next/link";
export default function Home() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <>
      <div>
        <h1>Hell World !</h1>
        <h1>{theme}</h1>
        <button onClick={toggleTheme}>Chnage theme</button>
      </div>
      <div>
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/signup">Signup</Link>
      </div>
    </>
  );
}
