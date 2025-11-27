"use client";

import { useRouter } from "next/navigation";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactSection() {
  const router = useRouter();

  return (
    <section id="contact" className="py-20 bg-[#dff0ff] text-center relative">
      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md shadow"
      >
        ← Back
      </button>

      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-700 mb-10">
        Feel free to reach out through the form or contact me directly!
      </p>

      {/* CONTACT LINKS */}
      <div className="max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        <a
          href="mailto:yourmail@gmail.com"
          className="flex items-center justify-center gap-3 p-4 bg-white shadow rounded-lg hover:scale-105 transition"
        >
          <FaEnvelope className="text-red-500" /> Email
        </a>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          className="flex items-center justify-center gap-3 p-4 bg-white shadow rounded-lg hover:scale-105 transition"
        >
          <FaWhatsapp className="text-green-600" /> WhatsApp
        </a>

        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          className="flex items-center justify-center gap-3 p-4 bg-white shadow rounded-lg hover:scale-105 transition"
        >
          <FaLinkedin className="text-blue-700" /> LinkedIn
        </a>

        <a
          href="https://github.com/yourgithub"
          target="_blank"
          className="flex items-center justify-center gap-3 p-4 bg-white shadow rounded-lg hover:scale-105 transition"
        >
          <FaGithub /> GitHub
        </a>
      </div>

      {/* FORM */}
      <form className="max-w-xl mx-auto flex flex-col gap-4 mb-14">
        <input type="text" placeholder="Name" className="p-3 border rounded" />
        <input
          type="email"
          placeholder="Email"
          className="p-3 border rounded"
        />
        <textarea
          placeholder="Message"
          className="p-3 border rounded"
        ></textarea>

        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md shadow-lg transition-all duration-300">
          Send Message
        </button>
      </form>

      {/* GOOGLE MAP */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
          <FaMapMarkerAlt /> My Location
        </h3>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!..."
          className="w-full h-72 rounded-lg shadow"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
