"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Droplets,
  Sprout,
  Users,
  Compass,
  CheckCircle2,
  FileText,
  Calendar,
  Building2,
  ShieldCheck,
  Info,
  Waves,
} from "lucide-react";

interface PmksyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PmksyModal({ isOpen, onClose }: PmksyModalProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const projectFocusAreas = [
    {
      title: "Water Efficiency",
      desc: "Efficient application of irrigation water through micro-irrigation.",
      icon: <Droplets className="w-5 h-5 text-blue-500" />,
      bg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "Drip & Sprinkler",
      desc: "Field-level implementation and support for micro-irrigation systems.",
      icon: <Waves className="w-5 h-5 text-emerald-500" />,
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "Farmer Support",
      desc: "Technical guidance and practical irrigation support for farmers.",
      icon: <Users className="w-5 h-5 text-amber-500" />,
      bg: "bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "Sustainable Irrigation",
      desc: "Promoting efficient and responsible use of available water resources.",
      icon: <Sprout className="w-5 h-5 text-teal-500" />,
      bg: "bg-teal-500/10 border-teal-500/20",
    },
  ];

  const workAreas = [
    {
      number: "01",
      title: "Field Assessment",
      icon: <Compass className="w-4 h-4 text-primary" />,
      points: [
        "Visited agricultural fields across project locations.",
        "Assessed land conditions, crop requirements, and available water sources.",
        "Identified irrigation requirements based on specific field conditions.",
      ],
    },
    {
      number: "02",
      title: "Drip & Sprinkler Irrigation",
      icon: <Droplets className="w-4 h-4 text-primary" />,
      points: [
        "Assisted with planning and implementation of drip and sprinkler irrigation systems.",
        "Supported field teams during installation and implementation activities.",
        "Checked basic system layout and field requirements.",
      ],
    },
    {
      number: "03",
      title: "Farmer Guidance",
      icon: <Users className="w-4 h-4 text-primary" />,
      points: [
        "Explained irrigation methods and system usage to farmers.",
        "Guided farmers on efficient water application and irrigation practices.",
        "Created awareness about the benefits of micro-irrigation.",
      ],
    },
    {
      number: "04",
      title: "PMKSY / PDMC Support",
      icon: <FileText className="w-4 h-4 text-primary" />,
      points: [
        "Supported field-level activities associated with the Per Drop More Crop initiative.",
        "Assisted with farmer documentation and project-related records.",
        "Coordinated with farmers and field teams during implementation.",
      ],
    },
    {
      number: "05",
      title: "Field Coordination",
      icon: <CheckCircle2 className="w-4 h-4 text-primary" />,
      points: [
        "Coordinated field visits and installation-related activities.",
        "Followed up on project progress across operational sites.",
        "Communicated field requirements and issues with the relevant team.",
      ],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10 transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pmksy-modal-title"
            className="relative w-full max-w-3xl max-h-[90vh] bg-card border border-card-border rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col text-left"
          >
            {/* Header */}
            <div className="relative px-5 sm:px-8 py-5 border-b border-card-border/80 bg-surface-secondary/80 backdrop-blur-md flex items-start justify-between gap-4 shrink-0">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-primary/10 text-primary border border-primary/20">
                    <Sprout className="w-3 h-3" />
                    Agricultural Engineering Experience
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-surface-tertiary text-text-muted border border-card-border">
                    <Calendar className="w-2.5 h-2.5" />
                    2021 – 2022
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-surface-tertiary text-text-muted border border-card-border">
                    <Building2 className="w-2.5 h-2.5" />
                    Roots Irrigation
                  </span>
                </div>
                <h3
                  id="pmksy-modal-title"
                  className="text-xl sm:text-2xl font-black text-text-main tracking-tight"
                >
                  PMKSY – Per Drop More Crop
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-primary">
                  Micro-Irrigation & Water Use Efficiency
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-tertiary hover:bg-card-border text-text-muted hover:text-text-main flex items-center justify-center transition-all duration-200 border border-card-border shrink-0 cursor-pointer shadow-sm"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-6 sm:space-y-8 no-scrollbar">
              {/* Context Distinction: Initiative vs Role */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* General Info Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-surface-secondary border border-card-border space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-text-muted uppercase tracking-wider">
                    <Info className="w-3.5 h-3.5 text-blue-500" />
                    About The Initiative
                  </div>
                  <p className="text-xs sm:text-sm text-text-sub leading-relaxed">
                    Per Drop More Crop (PDMC) is a component of the Pradhan Mantri
                    Krishi Sinchayee Yojana (PMKSY) focused on improving farm-level
                    water-use efficiency through micro-irrigation technologies such as
                    drip and sprinkler irrigation.
                  </p>
                </div>

                {/* Personal Role Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-surface-secondary border border-card-border space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    My Role & Responsibilities
                  </div>
                  <p className="text-xs sm:text-sm text-text-sub leading-relaxed">
                    As a Project Engineer / Agriculture Officer at Roots Irrigation,
                    I was involved in field-level irrigation project activities and farmer
                    support related to micro-irrigation implementation.
                  </p>
                </div>
              </div>

              {/* 5. PROJECT FOCUS */}
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <h4 className="text-sm sm:text-base font-bold text-text-main flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-primary" />
                    Project Focus
                  </h4>
                  <span className="text-[11px] text-text-muted font-medium">Core Objectives</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  {projectFocusAreas.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 sm:p-4 rounded-xl border ${item.bg} flex items-start gap-3 transition-transform hover:-translate-y-0.5 duration-200`}
                    >
                      <div className="p-2 rounded-lg bg-card/80 border border-card-border shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-text-main mb-0.5">
                          {item.title}
                        </h5>
                        <p className="text-[11px] sm:text-xs text-text-muted leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. WHAT I WORKED ON */}
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <h4 className="text-sm sm:text-base font-bold text-text-main flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    What I Worked On
                  </h4>
                  <span className="text-[11px] text-text-muted font-medium">Field Activities</span>
                </div>

                <div className="space-y-3 sm:space-y-3.5">
                  {workAreas.map((area) => (
                    <div
                      key={area.number}
                      className="p-4 sm:p-4.5 rounded-2xl bg-surface-secondary/70 border border-card-border hover:border-primary/30 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <span className="text-[10px] font-extrabold text-primary bg-primary/10 px-2 py-0.5 rounded-md font-mono">
                          {area.number}
                        </span>
                        <div className="p-1 rounded-md bg-card border border-card-border shrink-0">
                          {area.icon}
                        </div>
                        <h5 className="text-xs sm:text-sm font-bold text-text-main">
                          {area.title}
                        </h5>
                      </div>

                      <ul className="space-y-1.5 pl-1 sm:pl-2">
                        {area.points.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-start gap-2 text-xs text-text-sub leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0 mt-1.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Takeaway Note */}
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-xs text-text-muted leading-relaxed flex items-start gap-2.5">
                <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p>
                  <strong className="text-text-main">Engineering Insight:</strong> Hands-on
                  field engineering, water resource management, and on-ground farmer coordination
                  cultivated strong problem-solving rigor, data precision, and stakeholder communication
                  skills that seamlessly translate into modern frontend engineering practices.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 sm:px-8 py-3.5 sm:py-4 border-t border-card-border bg-surface-secondary/50 backdrop-blur-md flex items-center justify-between gap-3 shrink-0">
              <span className="text-[11px] text-text-muted font-medium hidden sm:inline">
                Press <kbd className="px-1.5 py-0.5 text-[10px] bg-card border border-card-border rounded font-mono">ESC</kbd> to exit
              </span>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-sm cursor-pointer ml-auto"
              >
                Close Case Study
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
