"use client";
import { useThemeContext } from "@/hooks/useThemeContext";
import React from "react";
import { Switch } from "../ui/switch";

function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, toggleTheme } = useThemeContext();
  return <Switch className={className} onClick={toggleTheme} />;
}

export default ThemeSwitcher;
