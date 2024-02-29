"use client";
import { useThemeContext } from "@/hooks/useThemeContext";

import Featured from "@/components/Featured";
export default function Home() {
  const { theme, toggleTheme } = useThemeContext();

  return <Featured />;
}
