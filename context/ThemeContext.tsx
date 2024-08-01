"use client";

import { useThemeContext } from "@/hooks/useThemeContext";
import { createContext, useEffect, useState } from "react";

function getThemeFromLocalStorage() {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("theme");
    return theme || "light";
  }
  throw Error(
    "the window object should not be invoced from a server compoenent"
  );
}

export const ThemeContext = createContext({
  theme: getThemeFromLocalStorage(),
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<string>(
    () => getThemeFromLocalStorage() || "light"
  );

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeProvider = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { theme } = useThemeContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <body className={`${theme} ${className}`}>{children}</body>;
  }
};
