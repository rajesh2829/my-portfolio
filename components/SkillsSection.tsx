"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaDocker,
  FaLinux,
  FaBug,
  FaRobot,
  FaDatabase,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiJest,
  SiCypress,
  SiRedux,
  SiPostman,
  SiJavascript,
  SiFirebase,
  SiSupabase,
  SiFigma,
  SiGooglechrome,
  SiSlack,
  SiWhatsapp,
  SiZoho,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: ReactNode;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const iconSize = 28;

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "React.js",
          icon: <FaReact size={iconSize} className="text-[#61dafb]" />,
        },
        {
          name: "Next.js",
          icon: (
            <SiNextdotjs
              size={iconSize}
              className="text-text-main transition-colors duration-300"
            />
          ),
        },
        {
          name: "TypeScript",
          icon: <SiTypescript size={iconSize} className="text-[#3178c6]" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript size={iconSize} className="text-[#f7df1e]" />,
        },
        {
          name: "Redux Toolkit",
          icon: <SiRedux size={iconSize} className="text-[#764abc]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss size={iconSize} className="text-[#38bdf8]" />,
        },
        {
          name: "HTML5",
          icon: <FaHtml5 size={iconSize} className="text-[#e34f26]" />,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt size={iconSize} className="text-[#1572b6]" />,
        },
        {
          name: "React Native",
          icon: <FaMobileAlt size={iconSize} className="text-[#61dafb]" />,
        },
        {
          name: "Responsive Design",
          icon: <FaCode size={iconSize} className="text-[#8b5cf6]" />,
        },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs size={iconSize} className="text-[#339933]" />,
        },
        {
          name: "Express.js",
          icon: (
            <SiExpress
              size={iconSize}
              className="text-text-main transition-colors duration-300"
            />
          ),
        },
        {
          name: "MongoDB",
          icon: <SiMongodb size={iconSize} className="text-[#47a248]" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql size={iconSize} className="text-[#336791]" />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase size={iconSize} className="text-[#ffca28]" />,
        },
        {
          name: "Supabase",
          icon: <SiSupabase size={iconSize} className="text-[#3ecf8e]" />,
        },
        {
          name: "REST APIs",
          icon: <FaCode size={iconSize} className="text-[#0ea5e9]" />,
        },
        {
          name: "WebSockets",
          icon: <FaCode size={iconSize} className="text-[#ec4899]" />,
        },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        {
          name: "Git & GitHub",
          icon: <FaGitAlt size={iconSize} className="text-[#f05032]" />,
        },
        {
          name: "Docker",
          icon: <FaDocker size={iconSize} className="text-[#2496ed]" />,
        },
        {
          name: "AWS Cloud",
          icon: <FaAws size={iconSize} className="text-[#ff9900]" />,
        },
        {
          name: "Postman",
          icon: <SiPostman size={iconSize} className="text-[#ff6c37]" />,
        },
        {
          name: "Linux CLI",
          icon: (
            <FaLinux
              size={iconSize}
              className="text-text-main transition-colors duration-300"
            />
          ),
        },
        {
          name: "Chrome DevTools",
          icon: <SiGooglechrome size={iconSize} className="text-[#4285f4]" />,
        },
        {
          name: "Figma",
          icon: <SiFigma size={iconSize} className="text-[#a259ff]" />,
        },
      ],
    },
    {
      title: "APIs & Integrations",
      skills: [
        {
          name: "Zoho Books API",
          icon: <SiZoho size={iconSize} className="text-[#e42527]" />,
        },
        {
          name: "Slack Webhooks",
          icon: <SiSlack size={iconSize} className="text-[#36c5f0]" />,
        },
        {
          name: "WhatsApp Business",
          icon: <SiWhatsapp size={iconSize} className="text-[#25d366]" />,
        },
        {
          name: "API Debugging",
          icon: <SiPostman size={iconSize} className="text-[#ff6c37]" />,
        },
      ],
    },
    {
      title: "Testing & QA",
      skills: [
        {
          name: "Manual Testing",
          icon: <FaBug size={iconSize} className="text-[#ef4444]" />,
        },
        {
          name: "Automation Testing",
          icon: <FaRobot size={iconSize} className="text-[#10b981]" />,
        },
        {
          name: "Jest",
          icon: <SiJest size={iconSize} className="text-[#c21325]" />,
        },
        {
          name: "Cypress E2E",
          icon: <SiCypress size={iconSize} className="text-[#047857]" />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-surface py-16 transition-all duration-300 sm:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
            My Tech Stack
          </span>

          <h2 className="text-3xl font-extrabold text-text-main sm:text-4xl">
            Skills & Toolsets
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-text-primary sm:text-base">
            Technologies and tools I use to build modern web applications,
            contribute to mobile experiences, integrate APIs, and deliver
            reliable digital solutions.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="rounded-2xl border border-card-border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6"
            >
              <h3 className="mb-4 border-b border-card-border pb-3 text-left text-lg font-bold text-text-main sm:mb-6 sm:text-xl">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="flex min-h-[96px] cursor-default flex-col items-center justify-center gap-2 rounded-xl border border-card-border bg-surface-secondary p-3 shadow-sm transition-all duration-300 hover:shadow-md sm:min-h-[110px] sm:gap-3 sm:p-4"
                  >
                    <div className="rounded-lg border border-card-border bg-card p-2 shadow-inner transition-all duration-300 sm:p-2.5">
                      {skill.icon}
                    </div>

                    <span className="line-clamp-2 text-center text-[11px] font-bold leading-tight text-text-primary transition-colors duration-300 sm:text-xs">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
