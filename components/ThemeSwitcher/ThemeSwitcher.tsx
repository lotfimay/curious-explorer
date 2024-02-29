"use client";
import { useThemeContext } from "@/hooks/useThemeContext";

import Image from "next/image";
import React from "react";

import styles from "./ThemeSwitcher.module.css";

function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div
      className={styles.container}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
      onClick={toggleTheme}
    >
      <Image
        src="/moon.png"
        alt=""
        width={14}
        height={14}
        className={styles.image}
      />
      <Image
        src="/sun.png"
        alt=""
        width={14}
        height={14}
        className={styles.image}
      />
      <div
        className={`${styles.ball}`}
        style={
          theme === "dark"
            ? { backgroundColor: "#0f172a", right: "7px" }
            : { backgroundColor: "white", left: "7px" }
        }
      ></div>
    </div>
  );
}

export default ThemeSwitcher;
