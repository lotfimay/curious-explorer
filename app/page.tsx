"use client";
import { Button } from "@/components/ui/button";
import { useThemeContext } from "@/hooks/useThemeContext";
import Link from "next/link";
export default function Home() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <>
      <Button>Login</Button>
    </>
  );
}
