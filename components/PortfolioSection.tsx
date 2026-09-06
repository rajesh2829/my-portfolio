"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  category: "fullstack" | "frontend";
  tags: string[];
  type: string;
  github?: string;
  live?: string;
}

export default function PortfolioSection() {
  const [filter, setFilter] = useState<"all" | "fullstack" | "frontend">("all");

  const projects: Project[] = [
    {
      title: "Nexsens",
      description:
        "Engineered scalable web modules, built dynamic dashboard grids, and connected high-performance REST APIs.",
      image: "/X3_NexSensBanner.jpg",
      category: "fullstack",
      tags: ["React", "Redux", "Node.js", "APIs", "Dashboard"],
      type: "Company Project",
      github: "https://github.com/yourusername/nexsens",
      live: "https://www.nexsens.com/",
    },
    {
      title: "Torchlite",
      description:
        "Optimized frontend performance, improved SEO structure, and crafted responsive Next.js page layouts.",
      image: "/torchlite1.jpg",
      category: "frontend",
      tags: ["React", "Next.js", "Tailwind CSS", "SEO", "Web Vitals"],
      type: "Client Project",
      github: "https://github.com/yourusername/torchlite",
      live: "https://torchlite.com/",
    },
    {
      title: "Nexreon Portal",
      description:
        "Developed Node.js/MongoDB APIs, integrated RBAC auth flows, and built administrative interface consoles.",
      image: "/nexreon.png",
      category: "fullstack",
      tags: ["Next.js", "Node.js", "MongoDB", "Auth", "Portal"],
      type: "Core Product",
      github: "#",
      live: "https://app.nexreon.com/login",
    },
  ];

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-surface-secondary transition-all duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">

        {/* HEADER */}
        <div className="mb-8 sm:mb-12">
          <span className="text-primary font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">My Creations</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main mb-4 sm:mb-6">Featured Projects</h2>

          {/* Animated Filter Selector Tabs */}
          <div className="relative inline-flex items-center gap-1.5 p-1 bg-surface-tertiary border border-card-border rounded-full shadow-inner max-w-full overflow-x-auto no-scrollbar">
            {[
              { id: "all", label: "All Projects" },
              { id: "fullstack", label: "Full Stack" },
              { id: "frontend", label: "Frontend" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`relative z-10 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  filter === tab.id
                    ? "text-white"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {filter === tab.id && (
                  <motion.div
                    layoutId="activePortfolioTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-lg"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 min-h-[400px] items-start">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.45 }}
                key={project.title}
                className="bg-card border border-card-border rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full group text-left"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-surface-tertiary shrink-0">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Category Type Indicator Badge */}
                  <span className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-black/75 backdrop-blur-sm text-white px-2.5 sm:px-3 py-1 rounded-full text-[10px] font-bold border border-white/10 uppercase tracking-wider">
                    {project.type}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-text-main flex items-center gap-2">
                      <FaCode className="text-primary text-base shrink-0" /> 
                      <span className="truncate">{project.title}</span>
                    </h3>
                    <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-surface-tertiary text-text-muted border border-card-border rounded text-[10px] font-semibold transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Call-to-actions */}
                  <div className="flex flex-wrap gap-4 border-t border-card-border pt-4 mt-auto">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs sm:text-sm font-bold text-text-sub hover:text-primary transition-colors duration-300"
                      >
                        <FaGithub className="text-sm sm:text-base" /> GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover transition-colors duration-300"
                      >
                        <FaExternalLinkAlt className="text-[11px] sm:text-xs" /> Visit Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
