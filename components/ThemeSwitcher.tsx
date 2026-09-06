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
    <>
      {/* Click-outside backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 sm:gap-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              className="bg-card border border-card-border backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-2xl flex flex-col gap-1.5 sm:gap-2 min-w-[175px] sm:min-w-[185px] max-h-[70vh] overflow-y-auto"
            >
              <p className="text-[11px] sm:text-xs font-semibold text-text-muted px-2 pb-1 border-b border-b-card-border">
                Select Theme
              </p>
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between gap-2.5 sm:gap-3 px-2.5 sm:px-3 py-2 rounded-xl text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                    theme === t.id
                      ? "bg-primary/10 text-primary font-semibold"
                      : "hover:bg-surface-tertiary text-text-secondary"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border flex items-center justify-center ${t.color}`}>
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
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary hover:bg-primary-hover text-white flex items-center justify-center shadow-xl border border-white/20 transition-colors duration-300 cursor-pointer"
          title="Change Theme"
          aria-label="Change theme"
        >
          <Palette size={20} className="animate-pulse" />
        </motion.button>
      </div>
    </>
  );
}
