"use client";
import { Button } from "@/components/ui/button";
import { useThemeContext } from "@/hooks/useThemeContext";
export default function Home() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <>
      <Button variant="destructive">
        Test
      </Button>
    </>
  );
}
