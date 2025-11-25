"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Header() {
  const router = useRouter();
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "React | Next.js | Node.js",
      "Web Enthusiast",
    ],
    loop: 0, // infinite
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <section className="w-full relative bg-gradient-to-r from-purple-100 via-blue-100 to-purple-100 py-20 px-6 overflow-hidden">
      {/* Decorative Floating Circles */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-spin-slow"></div>
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-spin-slow"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* LEFT TEXT */}
        <div className="max-w-xl text-center md:text-left mt-10 md:mt-0">
          <p className="text-xl font-semibold text-gray-700">
            Hey, I’m <span className="font-bold">Rajesh</span> 👋
          </p>

          <h1 className="text-5xl font-bold mt-2 leading-snug text-gray-800">
            {text}
            <Cursor cursorStyle="|" />
          </h1>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-md">
            I build beautiful and scalable web applications that your users will
            love.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => router.push("/contact")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md shadow-lg transition-all duration-300"
            >
              Get In Touch
            </button>
            <a
              href="/resume.pdf"
              download
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md shadow-lg text-center transition-all duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a href="https://github.com/username" target="_blank">
              <FaGithub
                size={24}
                className="hover:text-purple-600 transition-colors"
              />
            </a>
            <a href="https://linkedin.com/in/username" target="_blank">
              <FaLinkedin
                size={24}
                className="hover:text-purple-600 transition-colors"
              />
            </a>
            <a href="https://twitter.com/username" target="_blank">
              <FaTwitter
                size={24}
                className="hover:text-purple-600 transition-colors"
              />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-10 md:mb-0"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#c7e5ff] shadow-xl hover:scale-105 transition-transform duration-500">
            <Image
              src="/profile1.png"
              alt="Rajesh"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
