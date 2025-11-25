"use client";

import { useRouter } from "next/navigation";

export default function ContactSection() {
  const router = useRouter();

  return (
    <section id="contact" className="py-20 bg-[#dff0ff] text-center relative">
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md shadow"
      >
        ← Back
      </button>

      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-700 mb-6">Send me a message or email me directly.</p>
      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Name" className="p-3 border rounded"/>
        <input type="email" placeholder="Email" className="p-3 border rounded"/>
        <textarea placeholder="Message" className="p-3 border rounded"></textarea>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md shadow-lg transition-all duration-300">
          Send Message
        </button>
      </form>
    </section>
  );
}
