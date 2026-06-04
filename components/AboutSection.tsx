"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRocket,
  FaLaptopCode,
  FaUserGraduate,
  FaBriefcase,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";

type TimelineItem = {
  year: string;
  title: string;
  subtitle?: string;
  type: "experience" | "education";
  desc: string;
  achievements: string[];
  tags: string[];
  icon: React.ReactNode;
};

export default function AboutAndJourney() {
  const [activeCategory, setActiveCategory] = useState<"all" | "experience" | "education">("all");

  const timeline: TimelineItem[] = [
    {
      year: "2023 - Present",
      title: "Full Stack Developer",
      subtitle: "Nexreon / Freelance",
      type: "experience",
      desc: "Architecting and implementing next-generation web applications, client dashboards, and responsive portfolios.",
      achievements: [
        "Built responsive client sites resulting in a 40% improvement in load times.",
        "Integrated robust Node.js REST APIs with MongoDB for high-performance data handling.",
        "Engineered persistent multi-theme features supporting user preference overrides."
      ],
      tags: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      icon: <FaBriefcase size={18} />,
    },
    {
      year: "2022 - 2023",
      title: "Frontend Web Developer",
      subtitle: "Independent Contracts",
      type: "experience",
      desc: "Designed and built highly interactive frontend applications and single-page dashboards.",
      achievements: [
        "Crafted rich UI interfaces using Tailwind CSS and Framer Motion micro-animations.",
        "Interfaced with public REST APIs and handled client-side state caching.",
        "Coached client product teams on modern Web Vitals and SEO optimization methods."
      ],
      tags: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Git"],
      icon: <FaLaptopCode size={18} />,
    },
    {
      year: "2021 - 2022",
      title: "Full Stack Development Learning",
      subtitle: "Self-Directed Bootcamps",
      type: "education",
      desc: "Enrolled in online bootcamps and intensive training to master Web Technologies, Data Structures, and Software Engineering principles.",
      achievements: [
        "Completed 15+ complex sandbox projects spanning databases, backends, and frontends.",
        "Solved 300+ programming challenges on algorithms and clean code practices."
      ],
      tags: ["JavaScript ES6+", "Data Structures", "Node.js", "SQL", "Git Hub"],
      icon: <FaUserGraduate size={18} />,
    },
    {
      year: "2019 - 2023",
      title: "Bachelor of Computer Science",
      subtitle: "University Academic Study",
      type: "education",
      desc: "Acquired foundation skills in systems, networking, databases, and algorithms.",
      achievements: [
        "Graduated with top marks in Web Technologies and DBMS courses.",
        "Led a 4-person team to deliver a final-year student management system capstone project."
      ],
      tags: ["C++", "Java", "DBMS", "Software Engineering", "Computer Networks"],
      icon: <FaRocket size={18} />,
    },
  ];

  const filteredTimeline = timeline.filter(
    (item) => activeCategory === "all" || item.type === activeCategory
  );

  return (
    <section 
      id="about" 
      style={{ backgroundImage: 'linear-gradient(to bottom right, var(--bg-primary), var(--bg-secondary))' }}
      className="py-24 transition-all duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
 
        {/* =========================
             ABOUT SECTION (GRID)
         ========================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
           
          {/* LEFT — Interactive Developer Terminal Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing Backdrop */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-25 animate-pulse"></div>
            
            <div className="relative bg-[#0b0e14] border border-white/10 rounded-2xl overflow-hidden shadow-2xl font-mono text-xs md:text-sm text-left">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#11151d] border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[#8b949e] text-xs">rajesh.json</span>
                <FaCode className="text-[#8b949e] text-xs" />
              </div>

              {/* Window Body */}
              <div className="p-6 space-y-2 text-[#e6edf3] leading-relaxed">
                <p><span className="text-[#ff7b72]">const</span> <span className="text-[#d2a8ff]">developer</span> = &#123;</p>
                <p className="pl-4"><span className="text-[#79c0ff]">name</span>: <span className="text-[#a5d6ff]">"Rajesh"</span>,</p>
                <p className="pl-4"><span className="text-[#79c0ff]">role</span>: <span className="text-[#a5d6ff]">"Full Stack Developer"</span>,</p>
                <p className="pl-4"><span className="text-[#79c0ff]">skills</span>: [</p>
                <p className="pl-8"><span className="text-[#a5d6ff]">"React"</span>, <span className="text-[#a5d6ff]">"Next.js"</span>, <span className="text-[#a5d6ff]">"Node.js"</span>,</p>
                <p className="pl-8"><span className="text-[#a5d6ff]">"TypeScript"</span>, <span className="text-[#a5d6ff]">"TailwindCSS"</span></p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-[#79c0ff]">location</span>: <span className="text-[#a5d6ff]">"India"</span>,</p>
                <p className="pl-4"><span className="text-[#79c0ff]">hobbies</span>: [<span className="text-[#a5d6ff]">"building_projects"</span>, <span className="text-[#a5d6ff]">"learning_tech"</span>]</p>
                <p>&#125;;</p>
              </div>
            </div>
          </motion.div>
 
          {/* RIGHT — About Text & Badges */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Who I Am</span>
            <h2 className="text-4xl font-extrabold mb-6 text-text-main">About Me</h2>
 
            <p className="text-lg text-text-sub leading-relaxed mb-8">
              I’m <span className="font-bold text-text-main">Rajesh</span>, a passionate
              <span className="text-primary font-semibold"> Full Stack Developer</span>{" "}
              from India. I specialize in building modern, scalable applications 
              using React, Next.js, Node.js, and TypeScript.
              <br /><br />
              I love crafting smooth UI/UX experiences and turning complex ideas into clean digital products.
            </p>
 
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left mb-8">
              {[
                { number: "2+", label: "Years Experience", icon: <FaBriefcase className="text-primary text-2xl mb-2" /> },
                { number: "12+", label: "Projects Completed", icon: <FaLaptopCode className="text-primary text-2xl mb-2" /> },
                { number: "5+", label: "Tech Stacks Used", icon: <FaRocket className="text-primary text-2xl mb-2" /> },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="glass-card p-5 rounded-2xl shadow-sm transition-all duration-300"
                >
                  {item.icon}
                  <h3 className="text-3xl font-extrabold text-primary">{item.number}</h3>
                  <p className="text-sm text-text-muted mt-1 font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>
 
            {/* Skills */}
            <div className="flex flex-wrap gap-2.5">
              {[
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Express",
                "MongoDB",
                "Tailwind CSS",
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-badge text-badge-text rounded-full text-xs font-semibold shadow-sm border border-card-border hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
 
        {/* =========================
             JOURNEY TIMELINE SECTION
         ========================== */}
 
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-28 mb-10"
        >
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">My History</span>
          <h2 className="text-4xl font-extrabold text-text-main mb-6">My Journey</h2>

          {/* Interactive Category Selector Tabs */}
          <div className="relative inline-flex items-center gap-2 p-1.5 bg-surface-tertiary border border-card-border rounded-full shadow-inner max-w-full overflow-x-auto no-scrollbar">
            {[
              { id: "all", label: "All Milestones" },
              { id: "experience", label: "Work Experience" },
              { id: "education", label: "Education" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`relative z-10 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === tab.id
                    ? "text-white"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {activeCategory === tab.id && (
                  <motion.div
                    layoutId="activeJourneyTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-lg"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>
 
        <div className="relative max-w-4xl mx-auto px-2">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-1 bg-timeline/40 rounded-full transition-all duration-300" />

          <div className="space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredTimeline.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    key={item.title}
                    className="relative flex flex-col sm:flex-row items-start sm:items-center"
                  >
                    {/* Timeline Pulse Marker */}
                    <div className="absolute left-6 sm:left-1/2 transform -translate-x-[10px] sm:-translate-x-1/2 w-6 h-6 rounded-full bg-surface border-4 border-primary flex items-center justify-center z-20 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    </div>

                    {/* Timeline Content Block */}
                    <div className={`w-full sm:w-[calc(50%-32px)] ml-14 sm:ml-0 ${isEven ? "sm:mr-auto" : "sm:ml-auto"}`}>
                      <div className="glass-card p-6 rounded-2xl shadow-sm border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 text-left">
                        
                        {/* Header Details */}
                        <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-xl">
                              {item.icon}
                            </div>
                            <div>
                              <h4 className="text-base font-bold text-text-main">{item.title}</h4>
                              {item.subtitle && <p className="text-xs text-text-muted font-medium">{item.subtitle}</p>}
                            </div>
                          </div>
                          <span className="text-xs font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-full shrink-0">
                            {item.year}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-text-sub text-sm leading-relaxed mb-4">{item.desc}</p>

                        {/* Achievements Bullet List */}
                        {item.achievements.length > 0 && (
                          <ul className="space-y-2 mb-4 text-xs text-text-sub font-normal">
                            {item.achievements.map((ach, idx) => (
                              <li key={idx} className="flex gap-2 items-start">
                                <FaCheckCircle className="text-primary text-xs shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Tag Badges */}
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-surface-tertiary text-text-muted border border-card-border rounded text-[10px] font-semibold"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
 
      {/* GLASS EFFECT */}
      <style>{`
        .glass-card {
          background: var(--card-bg);
          backdrop-filter: blur(12px);
          border: 1px solid var(--card-border);
        }
      `}</style>
    </section>
  );
}
