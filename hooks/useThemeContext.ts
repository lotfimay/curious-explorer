"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";


export function useThemeContext(){
    const themeContext = useContext(ThemeContext);

    if(!themeContext){
        throw Error("The theme value should be used inside a theme provider")
    }
    console.log(themeContext.theme)
    return themeContext;
}