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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-card/85 backdrop-blur-lg py-4 border-b border-card-border/60 shadow-md"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO */}
          <button 
            onClick={() => handleLinkClick("hero")}
            className="text-2xl font-black tracking-tight flex items-center gap-1 group cursor-pointer"
          >
            <span className="text-primary group-hover:scale-105 transition-transform duration-300 font-mono"></span>
            <span className="text-text-main font-bold">Rajesh</span>
            <span className="text-primary group-hover:scale-105 transition-transform duration-300 font-mono"></span>
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

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-primary hover:text-primary transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </header>

      {/* MOBILE NAV DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-card-border z-30 md:hidden overflow-hidden shadow-xl"
          >
            <nav className="flex flex-col px-6 py-8 gap-4 text-left">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-base font-bold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-primary/15 text-primary"
                        : "text-text-muted hover:text-text-primary hover:bg-surface-tertiary"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  </button>
                );
              })}
              
              <button
                onClick={() => handleLinkClick("contact")}
                className="bg-primary hover:bg-primary-hover text-white text-center py-4 rounded-xl font-bold mt-4 shadow-md transition-colors"
              >
                Let's Talk
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
