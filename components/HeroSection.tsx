"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdArrowForward } from "react-icons/md";
import { Zap, ShieldCheck, HeartHandshake } from "lucide-react";

export default function HeroSection() {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "React Native Expert",
      "Next.js Developer",
      "Backend & API Architect",
    ],
    loop: 0, // infinite
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      style={{ backgroundImage: 'linear-gradient(to right, var(--bg-gradient-from), var(--bg-gradient-via), var(--bg-gradient-to))' }}
      className="w-full relative min-h-screen flex items-center pt-28 pb-16 px-6 overflow-hidden transition-all duration-300"
    >
      {/* Background Neon Gradients */}
      <div
        style={{ backgroundColor: 'var(--circle-bg-1)' }}
        className="absolute -top-16 -left-16 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-pulse transition-colors duration-300"
      ></div>
      <div
        style={{ backgroundColor: 'var(--circle-bg-2)' }}
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse transition-colors duration-300"
      ></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

        {/* LEFT COLUMN: HERO INTRO TEXT */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">

          {/* Pulsing Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-card-border/80 shadow-md mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25d366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25d366]"></span>
            </span>
            <span className="text-xs font-semibold text-text-primary">Available for new projects</span>
          </motion.div>

          {/* Subheading Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl font-medium text-text-sub"
          >
            Hey, I’m <span className="font-extrabold text-primary">Rajesh Samysundaram</span> 👋
          </motion.p>

          {/* Typewriter Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mt-3 leading-tight tracking-tight text-text-main min-h-[120px] md:min-h-[80px]"
          >
            I build & scale <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#fb7185] drop-shadow-sm">
              {text}
            </span>
            <Cursor cursorStyle="|" />
          </motion.h1>

          {/* Short Summary Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base md:text-lg text-text-muted leading-relaxed max-w-xl"
          >
            Specialist in high-performance **React Native (Expo)** mobile applications and scalable **Next.js & Node.js** web portals. Helping tech teams deploy clean, maintainable systems.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={handleScrollToContact}
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 font-bold flex items-center justify-center gap-2 cursor-pointer group"
            >
              Get In Touch
              <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/resume.pdf"
              download
              className="bg-card border border-card-border hover:bg-surface-tertiary text-text-primary px-8 py-4 rounded-xl shadow-lg hover:translate-y-[-2px] transition-all duration-300 font-bold text-center cursor-pointer"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Pillars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-4 mt-8"
          >
            {[
              { icon: <FaGithub size={20} />, href: "https://github.com/yourgithub" },
              { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/rajesh-samysundaram/?skipRedirect=true" },
              { icon: <FaWhatsapp size={20} className="text-[#25d366]" />, href: "https://wa.me/919790614060" },
              { icon: <MdEmail size={20} />, href: "mailto:srajeshs021@gmail.com" },
            ].map((soc, index) => (
              <a
                key={index}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-card border border-card-border/80 text-text-muted hover:text-primary hover:border-primary flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                {soc.icon}
              </a>
            ))}
          </motion.div>

        </div>

        {/* RIGHT COLUMN: INTERACTIVE PROFILE DISPLAY */}
        <div className="lg:col-span-5 flex justify-center relative mt-8 lg:mt-0">

          {/* Main profile frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-72 h-[400px] sm:w-80 sm:h-[440px] rounded-3xl p-1 z-10"
          >
            {/* Glowing moving gradient border */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary via-[#fb7185] to-secondary rounded-3xl blur opacity-30 animate-pulse"></div>

            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-profile-border/80 bg-surface-secondary shadow-2xl group">
              <Image
                src="/profile1.png"
                alt="Rajesh Samysundaram"
                width={500}
                height={600}
                className="object-cover object-top w-full h-full scale-100 group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* FLOATING STATS */}
            {/* Stat 1: 3+ Years Exp */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -left-10 bottom-12 bg-card/90 backdrop-blur-md border border-card-border p-3 rounded-2xl shadow-xl flex items-center gap-2.5 z-20"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Zap size={16} />
              </div>
              <div className="text-left">
                <p className="text-xs text-text-muted font-medium">Experience</p>
                <p className="text-sm font-bold text-text-main">3+ Years</p>
              </div>
            </motion.div>

            {/* Stat 2: Security Checked */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-8 top-12 bg-card/90 backdrop-blur-md border border-card-border p-3 rounded-2xl shadow-xl flex items-center gap-2.5 z-20"
            >
              <div className="w-9 h-9 rounded-xl bg-green-500/10 flex items-center justify-center text-[#22c55e]">
                <ShieldCheck size={16} />
              </div>
              <div className="text-left">
                <p className="text-xs text-text-muted font-medium">Solutions</p>
                <p className="text-sm font-bold text-text-main">Secure & Robust</p>
              </div>
            </motion.div>

            {/* Stat 3: 100% Commited */}
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -right-6 bottom-4 bg-card/90 backdrop-blur-md border border-card-border p-3 rounded-2xl shadow-xl flex items-center gap-2.5 z-20"
            >
              <div className="w-9 h-9 rounded-xl bg-pink-500/10 flex items-center justify-center text-[#db2777]">
                <HeartHandshake size={16} />
              </div>
              <div className="text-left">
                <p className="text-xs text-text-muted font-medium">Approach</p>
                <p className="text-sm font-bold text-text-main">Client First</p>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>

      {/* SCROLL MOUSE INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block opacity-60">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-6 h-10 rounded-full border-2 border-text-muted flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </div>

    </section>
  );
}
