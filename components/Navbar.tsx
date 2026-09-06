"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

type NavLink = {
  label: string;
  id: string;
};

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Expertise", id: "expertise" },
    { label: "Projects", id: "portfolio" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  // Handle header styling change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy Logic
      const scrollPosition = window.scrollY + 160; // offset for sticky header
      
      // Check if we are at the top
      if (window.scrollY < 100) {
        setActiveSection("hero");
        return;
      }

      for (const link of navLinks) {
        if (link.id === "hero") continue;
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("hero");
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-card/90 backdrop-blur-lg py-3.5 sm:py-4 border-b border-card-border/70 shadow-md"
            : "bg-transparent py-4 sm:py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* LOGO */}
          <button 
            onClick={() => handleLinkClick("hero")}
            className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-1 group cursor-pointer"
          >
            <span className="text-text-main font-bold">Rajesh</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
          </button>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 cursor-pointer ${
                    isActive ? "text-primary" : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* QUICK CONTACT / ACTIONS */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleLinkClick("contact")}
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Let's Talk
            </button>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-card border border-card-border text-text-primary hover:text-primary transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </header>

      {/* MOBILE NAV OVERLAY & FLOATING DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs z-30 md:hidden"
            />

            {/* Menu Card */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="fixed top-18 left-3 right-3 bg-card/95 backdrop-blur-2xl border border-card-border rounded-2xl z-40 md:hidden overflow-hidden shadow-2xl max-h-[calc(100vh-90px)] overflow-y-auto"
            >
              <nav className="flex flex-col p-4 gap-2 text-left">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`flex items-center justify-between py-3 px-4 rounded-xl text-base font-bold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-primary/15 text-primary"
                          : "text-text-muted hover:text-text-primary hover:bg-surface-tertiary"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <div className="w-2 h-2 rounded-full bg-primary" />}
                    </button>
                  );
                })}
                
                <button
                  onClick={() => handleLinkClick("contact")}
                  className="bg-primary hover:bg-primary-hover text-white text-center py-3.5 rounded-xl font-bold mt-2 shadow-md transition-colors w-full cursor-pointer"
                >
                  Let's Talk
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
