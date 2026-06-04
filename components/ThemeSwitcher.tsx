"use client";

import React, { useState } from "react";
import { useTheme, Theme } from "./ThemeProvider";
import { Palette, Sun, Moon, Sunrise, Trees, Zap, Flower, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes: { id: Theme; name: string; icon: React.ReactNode; color: string }[] = [
    { 
      id: "light", 
      name: "Light Mode", 
      icon: <Sun size={16} className="text-amber-500" />, 
      color: "bg-white border-gray-300" 
    },
    { 
      id: "dark", 
      name: "Deep Dark", 
      icon: <Moon size={16} className="text-indigo-400" />, 
      color: "bg-[#0b0f19] border-gray-700" 
    },
    { 
      id: "sunset", 
      name: "Sunset Glow", 
      icon: <Sunrise size={16} className="text-pink-500" />, 
      color: "bg-[#fffbeb] border-[#fca5a5]" 
    },
    { 
      id: "forest", 
      name: "Forest Mint", 
      icon: <Trees size={16} className="text-emerald-500" />, 
      color: "bg-[#f0fdf4] border-[#99f6e4]" 
    },
    {
      id: "cyberpunk",
      name: "Cyberpunk",
      icon: <Zap size={14} className="text-yellow-400 fill-yellow-400" />,
      color: "bg-[#05050a] border-fuchsia-500"
    },
    {
      id: "rose",
      name: "Rose Quartz",
      icon: <Flower size={14} className="text-rose-500" />,
      color: "bg-[#fff5f5] border-rose-300"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="bg-card border border-card-border backdrop-blur-md rounded-2xl p-3 shadow-2xl flex flex-col gap-2 min-w-[185px]"
          >
            <p className="text-xs font-semibold text-text-muted px-2 pb-1 border-b border-b-card-border">
              Select Theme
            </p>
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-sm transition-all duration-300 ${
                  theme === t.id
                    ? "bg-primary/10 text-primary font-semibold"
                    : "hover:bg-surface-tertiary text-text-secondary"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${t.color}`}>
                    {t.icon}
                  </div>
                  <span className="text-text-primary">{t.name}</span>
                </div>
                {theme === t.id && <Check size={14} className="text-primary" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-primary hover:bg-primary-hover text-white flex items-center justify-center shadow-xl border border-white/20 transition-colors duration-300"
        title="Change Theme"
      >
        <Palette size={22} className="animate-pulse" />
      </motion.button>
    </div>
  );
}
