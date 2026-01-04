"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ExpertiseSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const expertise = [
    {
      title: "Mobile Applications (iOS & Android)",
      stack: "Expo · React Native · Kotlin · Swift · Firebase",
      points: [
        "Real-Time Live Location Tracking",
        "Persistent Background Services",
        "Biometric Authentication",
        "Secure Encrypted Vault",
        "Stealth Mode (App Hide / Unhide)",
        "Advanced Media Processing",
        "SIM Change Detection & Alerts",
        "Custom App Store–Style Downloads",
        "Missed Call Auto Reply",
        "Call & Log Sync via FCM",
        "In-App Calling (Agora)",
        "OCR & Text-to-Speech",
      ],
    },
    {
      title: "Web Applications",
      stack: "React · Next.js · Tailwind",
      points: [
        "SEO Optimized Pages",
        "Admin Dashboards",
        "Auth Systems",
        "Chrome Extensions",
        "Analytics Tracking",
        "High Performance UI",
      ],
    },
    {
      title: "Desktop Applications",
      stack: "Electron · React · Node · WebSockets",
      points: [
        "Slack-Style Chat",
        "Multi Workspace",
        "1-1 & Group Chat",
        "Typing Indicators",
        "File Sharing",
        "Voice & Video Calls",
        "Offline Sync",
        "RBAC",
      ],
    },
    {
      title: "Backend & APIs",
      stack: "Node · NestJS · Python · AWS",
      points: [
        "REST APIs",
        "JWT & RBAC",
        "Realtime WebSockets",
        "Queues & Jobs",
        "Security Hardening",
        "Microservices",
      ],
    },
    {
      title: "DevOps & Cloud",
      stack: "Docker · AWS · Terraform",
      points: [
        "CI/CD Pipelines",
        "Docker Deployments",
        "Auto Scaling",
        "Monitoring",
        "Disaster Recovery",
        "AI Integrations",
      ],
    },
  ];

  const bgColors = [
    "from-blue-50 to-cyan-50",
    "from-purple-50 to-pink-50",
    "from-green-50 to-emerald-50",
    "from-orange-50 to-yellow-50",
    "from-indigo-50 to-violet-50",
  ];

  /* 🔁 PURE RIGHT AUTO SCROLL */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let raf: number;
    const speed = 0.5;

    const scroll = () => {
      container.scrollLeft += speed;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      raf = requestAnimationFrame(scroll);
    };

    raf = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="w-full py-20">
      {/* 🔥 SAME WIDTH AS HEADER */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-14"
        >
          Expertise & Experience
        </motion.h2>

        {/* AUTO SCROLL STRIP */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden no-scrollbar"
        >
          {[...expertise, ...expertise].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className={`
                min-w-[calc(50%-12px)]
                md:min-w-[calc(50%-12px)]
                lg:min-w-[420px]
                rounded-xl p-6
                bg-gradient-to-br ${bgColors[index % bgColors.length]}
                border border-gray-200
                shadow-sm hover:shadow-lg
              `}
            >
              <h3 className="text-xl font-semibold text-blue-700">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 mt-1 mb-4">
                {item.stack}
              </p>

              <ul className="space-y-2 text-sm text-gray-800">
                {item.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
