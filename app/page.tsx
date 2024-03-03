"use client";
import Featured from "@/components/Featured";
import { Button } from "@/components/ui/button";
import { useThemeContext } from "@/hooks/useThemeContext";
import { useRef, useState } from "react";
export default function Home() {
  const { theme, toggleTheme } = useThemeContext();

  const [startTime, setStartTime] = useState<number>(0);
  const [now, setNow] = useState<number>(0);
  const intervalID = useRef<any>(null);

  const startWatch = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    intervalID.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const stopWatch = () => {
    clearInterval(intervalID.current);
  };

  const passedTime = (now - startTime) / 1000;

  return (
    <>
      <Featured />
    </>
  );
}
