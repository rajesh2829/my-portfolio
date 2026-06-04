"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaMobileAlt,
  FaGlobe,
  FaDesktop,
  FaServer,
  FaCloud,
  FaChevronRight,
  FaColumns,
  FaPlay,
} from "react-icons/fa";

type ExpertiseItem = {
  title: string;
  stack: string[];
  points: string[];
  icon: React.ReactNode;
};

export default function ExpertiseSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");

  const expertise: ExpertiseItem[] = [
    {
      title: "Mobile Applications (iOS & Android)",
      stack: ["Expo", "React Native", "Kotlin", "Swift", "Firebase"],
      icon: <FaMobileAlt className="text-2xl" />,
      points: [
        "Real-Time Live Location Tracking",
        "Persistent Background Services",
        "Biometric Authentication & Security",
        "SIM Change Detection & SMS Alerts",
        "In-App Calling Integration (Agora)",
        "OCR & Text-to-Speech Processing",
      ],
    },
    {
      title: "Web Applications",
      stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      icon: <FaGlobe className="text-2xl" />,
      points: [
        "SEO Optimization & Core Web Vitals",
        "Complex Admin Dashboards & Analytics",
        "OAuth & Custom Auth Systems",
        "Google Chrome Extensions Development",
        "High Performance Interactive UIs",
      ],
    },
    {
      title: "Desktop Applications",
      stack: ["Electron", "React", "Node.js", "WebSockets"],
      icon: <FaDesktop className="text-2xl" />,
      points: [
        "Slack-Style Desktop Chat Tools",
        "Multi Workspace & Navigation Support",
        "Real-Time Chat & Typing Indicators",
        "Offline Database Synchronization",
        "Role-Based Access Control (RBAC)",
      ],
    },
    {
      title: "Backend & APIs",
      stack: ["Node.js", "NestJS", "Python", "AWS", "SQL / NoSQL"],
      icon: <FaServer className="text-2xl" />,
      points: [
        "Scalable RESTful & GraphQL APIs",
        "JWT, OAuth & Cookie Auth Flow",
        "Real-time Bi-directional WebSockets",
        "Queue Management & Microservices",
        "Database Optimization & Query Tuning",
      ],
    },
    {
      title: "DevOps & Cloud Systems",
      stack: ["Docker", "AWS", "Terraform", "GitHub Actions"],
      icon: <FaCloud className="text-2xl" />,
      points: [
        "Automated CI/CD Build Pipelines",
        "Docker Containerization & Deployments",
        "Auto Scaling & Server Cluster Setup",
        "Cloud Storage & Backup Architectures",
        "Security Hardening & SSL Configurations",
      ],
    },
  ];

  /* 🔁 AUTO SCROLL (Pauses on Hover) */
  useEffect(() => {
    if (viewMode !== "carousel") return;
    const container = scrollRef.current;
    if (!container) return;

    let raf: number;
    const speed = 0.55;

    const scroll = () => {
      if (!isHovered.current) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      raf = requestAnimationFrame(scroll);
    };

    raf = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(raf);
  }, [viewMode]);

  return (
    <section id="expertise" className="w-full py-24 bg-surface transition-all duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">My Capabilities</span>
            <h2 className="text-4xl font-extrabold text-text-main">Expertise & Experience</h2>
          </div>

          {/* Toggle View Mode Control */}
          <div className="flex items-center gap-1.5 p-1 bg-surface-tertiary border border-card-border rounded-full self-start shadow-inner">
            <button
              onClick={() => setViewMode("carousel")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                viewMode === "carousel" ? "bg-primary text-white shadow-md" : "text-text-muted hover:text-text-primary"
              }`}
            >
              <FaPlay className="text-[10px]" /> Carousel
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                viewMode === "grid" ? "bg-primary text-white shadow-md" : "text-text-muted hover:text-text-primary"
              }`}
            >
              <FaColumns className="text-[10px]" /> Grid Layout
            </button>
          </div>
        </div>

        {/* =========================
             CAROUSEL VIEW MODE
         ========================== */}
        <AnimatePresence mode="wait">
          {viewMode === "carousel" ? (
            <motion.div
              key="carousel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="relative"
            >
              <div
                ref={scrollRef}
                onMouseEnter={() => { isHovered.current = true; }}
                onMouseLeave={() => { isHovered.current = false; }}
                className="flex gap-6 overflow-hidden no-scrollbar cursor-grab active:cursor-grabbing py-2"
              >
                {[...expertise, ...expertise].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3 }}
                    style={{ backgroundImage: `var(--expertise-card-${(index % 5) + 1})` }}
                    className="min-w-[85vw] sm:min-w-[50vw] lg:min-w-[420px] rounded-2xl p-6 border border-card-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Title & Icon Header */}
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-expertise-title pr-2">
                          {item.title}
                        </h3>
                        <div className="p-3 bg-white/40 dark:bg-black/20 rounded-xl text-primary shrink-0 border border-white/20">
                          {item.icon}
                        </div>
                      </div>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {item.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-bold bg-white/70 dark:bg-black/35 px-2 py-0.5 rounded border border-white/40 text-text-main"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Accomplishment Bullet points */}
                      <ul className="space-y-3.5 text-sm text-text-secondary">
                        {item.points.map((point, i) => (
                          <li key={i} className="flex gap-2 items-start font-medium">
                            <FaChevronRight className="text-primary text-[10px] shrink-0 mt-1.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* =========================
                 GRID VIEW MODE
             ========================== */
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08 }}
                  style={{ backgroundImage: `var(--expertise-card-${(index % 5) + 1})` }}
                  className="rounded-2xl p-6 border border-card-border shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-expertise-title pr-2">
                        {item.title}
                      </h3>
                      <div className="p-3 bg-white/40 dark:bg-black/20 rounded-xl text-primary shrink-0 border border-white/20">
                        {item.icon}
                      </div>
                    </div>

                    {/* Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-bold bg-white/70 dark:bg-black/35 px-2 py-0.5 rounded border border-white/40 text-text-main"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-3.5 text-sm text-text-secondary">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex gap-2 items-start font-medium">
                          <FaChevronRight className="text-primary text-[10px] shrink-0 mt-1.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
