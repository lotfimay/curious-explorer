"use client";
import { useThemeContext } from "@/hooks/useThemeContext";
import React, { createContext, useEffect, useState } from "react";

function getThemeFromLocalStorage() {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("theme");
    return theme || "light";
  }
  return "light";
}

export const ThemeContext = createContext({
  theme: getThemeFromLocalStorage(),
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<string>(() => {
    return getThemeFromLocalStorage();
  });

  const toggleTheme = () => {
    setTheme((previous: string) => (previous === "light" ? "dark" : "light"));
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

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeContext();
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isMounted) return <div className={theme}>{children}</div>;
};
