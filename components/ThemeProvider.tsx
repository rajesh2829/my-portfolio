"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "sunset" | "forest" | "cyberpunk" | "rose";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme;
    if (savedTheme) {
      setThemeState(savedTheme);
      document.documentElement.className = `theme-${savedTheme}`;
    } else {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = systemPrefersDark ? "dark" : "light";
      setThemeState(initialTheme);
      document.documentElement.className = `theme-${initialTheme}`;
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    
    // Safely remove any existing theme classes
    const classList = document.documentElement.classList;
    const themeClasses = Array.from(classList).filter((cls) => cls.startsWith("theme-"));
    themeClasses.forEach((cls) => classList.remove(cls));
    
    // Add the new theme class
    classList.add(`theme-${newTheme}`);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
