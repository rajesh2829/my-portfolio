"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function ContactPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#dff0ff] pt-20 pb-10 px-6 flex flex-col items-center">
      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md shadow"
      >
        ← Back
      </button>

      {/* HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-800"
      >
        Contact Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-2 text-gray-700 text-lg"
      >
        I'd love to hear from you! Fill the form or connect below.
      </motion.p>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white mt-10 p-10 rounded-2xl shadow-xl w-full max-w-3xl grid md:grid-cols-2 gap-10"
      >
        {/* FORM */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-md"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-md"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="border p-3 rounded-md"
          ></textarea>

          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md">
            Send Message
          </button>
        </form>

        {/* CONTACT DETAILS + SOCIAL LINKS */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="flex items-center gap-3 text-lg font-medium text-gray-800">
              <MdEmail size={24} /> srajeshs021@gmail.com
            </p>
            <p className="flex items-center gap-3 mt-3 text-lg font-medium text-gray-800">
              <MdPhone size={24} /> +91 97906 14060
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-5 mt-4">
            <a href="#" className="text-gray-800 hover:text-purple-600">
              <FaGithub size={30} />
            </a>
            <a href="#" className="text-gray-800 hover:text-purple-600">
              <FaLinkedin size={30} />
            </a>
            <a href="#" className="text-gray-800 hover:text-purple-600">
              <FaInstagram size={30} />
            </a>
          </div>

          {/* RESUME BUTTON */}
          <a
            href="/resume.pdf"
            download
            className="mt-6 bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-md"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* MAP */}
      {/* <div className="mt-10 w-full max-w-3xl rounded-xl overflow-hidden shadow-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.285..."
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div> */}
    </div>
  );
}
