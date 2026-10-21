"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sprout,
  Droplets,
  CheckCircle2,
  Laptop,
  Code2,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function TransitionStory() {
  const steps = [
    {
      year: "2017–2021",
      title: "B.E. Agricultural Engineering",
      subtitle: "SNS College of Technology",
      icon: <Sprout className="w-4 h-4 text-emerald-500" />,
      accent: "border-emerald-500/30 bg-emerald-500/5",
      badgeColor: "text-emerald-500 bg-emerald-500/10",
      points: [
        "Engineering fundamentals",
        "Soil & water management",
        "Systems thinking & design",
      ],
    },
    {
      year: "2021–2022",
      title: "Project Engineer / Agriculture Officer",
      subtitle: "Roots Irrigation",
      icon: <Droplets className="w-4 h-4 text-blue-500" />,
      accent: "border-blue-500/30 bg-blue-500/5",
      badgeColor: "text-blue-500 bg-blue-500/10",
      points: [
        "Irrigation Projects",
        "Drip & Sprinkler Systems",
        "Field Assessment",
        "Farmer Guidance",
        "PMKSY / PDMC-related field support",
      ],
    },
    {
      year: "2022",
      title: "Software Testing & Transition",
      subtitle: "Professional Certification & QA",
      icon: <CheckCircle2 className="w-4 h-4 text-amber-500" />,
      accent: "border-amber-500/30 bg-amber-500/5",
      badgeColor: "text-amber-500 bg-amber-500/10",
      points: [
        "Manual & Automation Testing",
        "STLC & SDLC frameworks",
        "Postman API validation",
      ],
    },
    {
      year: "2023–2026",
      title: "Frontend / Software Development",
      subtitle: "Thidiff Technologies",
      icon: <Laptop className="w-4 h-4 text-purple-500" />,
      accent: "border-purple-500/30 bg-purple-500/5",
      badgeColor: "text-purple-500 bg-purple-500/10",
      points: [
        "React.js & Next.js",
        "TypeScript & JavaScript",
        "REST APIs integration",
        "Responsive Web Apps",
      ],
    },
    {
      year: "2026",
      title: "Frontend Developer",
      subtitle: "React.js | Next.js | TypeScript",
      icon: <Code2 className="w-4 h-4 text-primary" />,
      accent: "border-primary/40 bg-primary/10 shadow-sm",
      badgeColor: "text-primary bg-primary/15 font-bold",
      isCurrent: true,
      points: [
        "Modern Component Systems",
        "High-performance UI/UX",
        "Clean, Maintainable Code",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 sm:mt-24 pt-12 border-t border-card-border/60 text-left"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-3">
          <TrendingUp className="w-3.5 h-3.5" />
          Career Progression
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-text-main mb-2">
          From Irrigation to Software
        </h3>
        <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
          How real-world engineering problem solving, analytical rigor, and systems coordination
          naturally evolved into high-performance frontend web development.
        </p>
      </div>

      {/* Progression Flow Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 relative">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`relative p-4 sm:p-5 rounded-2xl border ${step.accent} bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between`}
          >
            {/* Step Number & Connector indicator */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span
                className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full ${step.badgeColor}`}
              >
                {step.year}
              </span>
              <div className="p-1.5 rounded-lg bg-surface-secondary border border-card-border shrink-0">
                {step.icon}
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="mb-3">
              <h4 className="text-xs sm:text-sm font-bold text-text-main leading-snug">
                {step.title}
              </h4>
              <p className="text-[11px] text-text-muted mt-0.5 font-medium">
                {step.subtitle}
              </p>
            </div>

            {/* Points */}
            <ul className="space-y-1 text-[11px] text-text-sub mt-auto pt-2 border-t border-card-border/40">
              {step.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-primary/70 shrink-0 mt-1.5" />
                  <span className="leading-tight">{pt}</span>
                </li>
              ))}
            </ul>

            {/* Step arrow on desktop */}
            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-card-border">
                <ArrowRight className="w-4 h-4 text-text-muted/40" />
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
