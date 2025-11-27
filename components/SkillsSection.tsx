"use client";

import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={32} className="text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs size={32} className="text-black" /> },
  { name: "Node.js", icon: <FaNodeJs size={32} className="text-green-600" /> },
  { name: "TypeScript", icon: <SiTypescript size={32} className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} className="text-teal-400" /> },
  { name: "MongoDB", icon: <SiMongodb size={32} className="text-green-500" /> },
  { name: "Git", icon: <FaGitAlt size={32} className="text-orange-600" /> },
  { name: "Manual Testing", icon: <FaGitAlt size={32} className="text-gray-600" /> },
  { name: "Automation Testing", icon: <FaGitAlt size={32} className="text-gray-700" /> },
];


export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-12">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 p-6 bg-gray-100 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              {skill.icon}
              <span className="text-gray-800 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
