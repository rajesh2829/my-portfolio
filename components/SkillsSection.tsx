"use client";

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
  FaCode 
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
  SiPostman 
} from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact size={28} className="text-[#61dafb]" /> },
        { name: "Next.js", icon: <SiNextdotjs size={28} className="text-text-main transition-colors duration-300" /> },
        { name: "TypeScript", icon: <SiTypescript size={28} className="text-[#3178c6]" /> },
        { name: "JavaScript", icon: <FaCode size={28} className="text-[#f7df1e]" /> },
        { name: "Redux Toolkit", icon: <SiRedux size={28} className="text-[#764abc]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={28} className="text-[#38bdf8]" /> },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", icon: <FaNodeJs size={28} className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress size={28} className="text-text-main transition-colors duration-300" /> },
        { name: "MongoDB", icon: <SiMongodb size={28} className="text-[#47a248]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql size={28} className="text-[#336791]" /> },
        { name: "WebSockets", icon: <FaDatabase size={28} className="text-[#ec4899]" /> },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt size={28} className="text-[#f05032]" /> },
        { name: "Docker", icon: <FaDocker size={28} className="text-[#2496ed]" /> },
        { name: "AWS Cloud", icon: <FaAws size={28} className="text-[#ff9900]" /> },
        { name: "Postman API", icon: <SiPostman size={28} className="text-[#ff6c37]" /> },
        { name: "Linux CLI", icon: <FaLinux size={28} className="text-text-main transition-colors duration-300" /> },
      ],
    },
    {
      title: "Testing & QA",
      skills: [
        { name: "Manual Testing", icon: <FaBug size={28} className="text-[#ef4444]" /> },
        { name: "Automation Testing", icon: <FaRobot size={28} className="text-[#10b981]" /> },
        { name: "Jest Testing", icon: <SiJest size={28} className="text-[#c21325]" /> },
        { name: "Cypress E2E", icon: <SiCypress size={28} className="text-[#047857]" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-surface transition-all duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">My Tech Stack</span>
          <h2 className="text-4xl font-extrabold text-text-main">Skills & Toolsets</h2>
        </div>

        {/* CATEGORIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="bg-card border border-card-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-text-main mb-6 border-b border-card-border pb-3 text-left">
                {category.title}
              </h3>

              {/* Skills cards grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="flex flex-col items-center gap-3 p-4 bg-surface-secondary border border-card-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    <div className="p-2.5 bg-card rounded-lg border border-card-border shadow-inner transition-all duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-text-primary text-xs font-bold text-center transition-colors duration-300">
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
