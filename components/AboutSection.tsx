"use client";

import { motion } from "framer-motion";
import {
  FaRocket,
  FaLaptopCode,
  FaUserGraduate,
  FaBriefcase,
} from "react-icons/fa";

export default function AboutAndJourney() {
  const timeline = [
    {
      year: "2021",
      title: "Started My Coding Journey",
      desc: "Began learning HTML, CSS, and JavaScript. Built my first simple web pages.",
      icon: <FaUserGraduate size={24} />,
    },
    {
      year: "2022",
      title: "Frontend Development",
      desc: "Learned React, Tailwind CSS, API integration, and built multiple UI projects.",
      icon: <FaLaptopCode size={24} />,
    },
    {
      year: "2023",
      title: "Full Stack Development",
      desc: "Mastered Next.js, Node.js, Express, MongoDB and created full-stack apps.",
      icon: <FaBriefcase size={24} />,
    },
    {
      year: "2024",
      title: "Projects & Freelancing",
      desc: "Worked on real-world projects, improved problem solving & UI/UX design.",
      icon: <FaRocket size={24} />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-[#e3f2ff]">
      <div className="max-w-7xl mx-auto px-6">

        {/* =========================
            ABOUT SECTION
        ========================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT — Removed Image */}

          {/* RIGHT — About Text */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              I’m <span className="font-bold">Rajesh</span>, a passionate
              <span className="text-purple-600 font-semibold"> Full Stack Developer</span>
              from India. I specialize in building modern, scalable applications 
              using React, Next.js, Node.js, and TypeScript.
              <br /><br />
              I love crafting smooth UI/UX experiences and turning complex ideas into clean digital products.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
              {[
                { number: "2+", label: "Years Experience" },
                { number: "12+", label: "Projects" },
                { number: "5+", label: "Tech Stacks" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-4 rounded-xl shadow"
                >
                  <h3 className="text-3xl font-bold text-purple-600">{item.number}</h3>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-8 flex flex-wrap gap-3">
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm shadow"
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

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mt-24 mb-12"
        >
          My Journey
        </motion.h2>

        <div className="relative border-l-4 border-purple-400/70 left-5 ml-5">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 ml-8"
            >
              <div className="absolute -left-12 flex items-center justify-center w-10 h-10 bg-white shadow-lg border border-purple-300 rounded-full text-purple-600">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-purple-700">{item.year}</h3>
              <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GLASS EFFECT */}
      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
}
