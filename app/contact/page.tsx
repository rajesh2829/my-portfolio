"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaSpinner } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function ContactPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const emailAddress = "srajeshs021@gmail.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields before sending.");
      return;
    }

    setIsSending(true);
    const toastId = toast.loading("Sending message to Rajesh...");

    try {
      const publicAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      let response;

      if (publicAccessKey && publicAccessKey !== "your_web3forms_key_here") {
        // Direct Client-Side Web3Forms submission (allowed on free plans)
        response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: publicAccessKey,
            name,
            email,
            message,
            subject: `New Message from Portfolio Page (${name})`,
            from_name: "Portfolio Contact Form",
            replyto: email, // Reply-to will correctly route to the sender!
          }),
        });
      } else {
        // Server-Side SMTP Fallback
        response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });
      }

      const data = await response.json();

      if (response.ok && (data.success || data.method)) {
        toast.success("Message sent successfully! I will reply to your email soon.", { id: toastId });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(data.error || data.message || "Failed to send message. Please try again.", { id: toastId });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please check your network and try again.", { id: toastId });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div 
      style={{ backgroundImage: 'linear-gradient(to bottom right, var(--bg-primary), var(--bg-secondary))' }}
      className="min-h-screen pt-20 pb-10 px-6 flex flex-col items-center transition-all duration-300"
    >
      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 bg-card border border-card-border hover:bg-surface-tertiary text-text-primary px-4 py-2 rounded-md shadow transition-colors duration-300 cursor-pointer"
      >
        ← Back
      </button>

      {/* HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-text-main transition-colors duration-300"
      >
        Contact Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-2 text-text-sub text-lg transition-colors duration-300"
      >
        I'd love to hear from you! Fill the form or connect below.
      </motion.p>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-card-border mt-10 p-10 rounded-2xl shadow-xl w-full max-w-3xl grid md:grid-cols-2 gap-10 transition-all duration-300"
      >
        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            disabled={isSending}
            className="bg-surface-secondary border border-card-border text-text-primary placeholder:text-text-muted p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 disabled:opacity-50"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            disabled={isSending}
            className="bg-surface-secondary border border-card-border text-text-primary placeholder:text-text-muted p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 disabled:opacity-50"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            rows={5}
            disabled={isSending}
            className="bg-surface-secondary border border-card-border text-text-primary placeholder:text-text-muted p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none disabled:opacity-50"
          ></textarea>

          <button 
            type="submit"
            disabled={isSending}
            className="bg-primary hover:bg-primary-hover text-white font-semibold py-3 rounded-md transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? (
              <>
                Sending... <FaSpinner className="animate-spin text-sm" />
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* CONTACT DETAILS + SOCIAL LINKS */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 text-left">
            <p className="flex items-center gap-3 text-base sm:text-lg font-medium text-text-main transition-colors duration-300">
              <MdEmail size={24} className="text-primary transition-colors duration-300" /> 
              <span className="break-all">{emailAddress}</span>
            </p>
            <p className="flex items-center gap-3 text-base sm:text-lg font-medium text-text-main transition-colors duration-300">
              <MdPhone size={24} className="text-primary transition-colors duration-300" /> +91 97906 14060
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-5 mt-4">
            <a 
              href="https://github.com/yourgithub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-primary hover:text-primary transition-colors duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rajesh-samysundaram/?skipRedirect=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-primary hover:text-primary transition-colors duration-300"
            >
              <FaLinkedin size={30} />
            </a>
            <a 
              href="https://wa.me/919790614060" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-primary hover:text-primary transition-colors duration-300"
            >
              <FaWhatsapp size={30} className="text-[#25d366]" />
            </a>
          </div>

          {/* RESUME BUTTON */}
          <a
            href="/resume.pdf"
            download
            className="mt-6 bg-secondary hover:bg-secondary-hover text-white text-center py-3 rounded-md transition-colors duration-300 font-semibold shadow-md cursor-pointer"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
}
