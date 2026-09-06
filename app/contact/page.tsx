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
      const publicAccessKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
        "dc3d956d-d7fd-446a-b687-d558a2ca9aa9";

      // 1. Primary: Direct Client-Side FormData
      const formData = new FormData();
      formData.append("access_key", publicAccessKey);
      formData.append("name", name.trim());
      formData.append("email", email.trim());
      formData.append("message", message.trim());
      formData.append("subject", `New Message from Portfolio Page (${name.trim()})`);
      formData.append("from_name", "Portfolio Contact Form");
      formData.append("replyto", email.trim());

      let submissionSuccess = false;

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        });

        const contentType = response.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          const data = await response.json();
          if (response.ok && data.success) {
            submissionSuccess = true;
          }
        }
      } catch (clientErr) {
        console.warn("Client Web3Forms fetch error:", clientErr);
      }

      // 2. Secondary: Fallback to /api/contact
      if (!submissionSuccess) {
        try {
          const serverResponse = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
          });

          if (serverResponse.ok) {
            const serverData = await serverResponse.json();
            if (serverData.success) {
              submissionSuccess = true;
            }
          }
        } catch (serverErr) {
          console.warn("Server-side fallback error:", serverErr);
        }
      }

      if (submissionSuccess) {
        toast.success("Message sent successfully! I will reply to your email soon.", { id: toastId });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // 3. Graceful Direct Option if Cloudflare blocks automated API
        toast.dismiss(toastId);
        const encodedText = encodeURIComponent(
          `Hi Rajesh, I'm ${name} (${email}). ${message}`
        );
        const whatsappUrl = `https://wa.me/919790614060?text=${encodedText}`;
        const mailtoUrl = `mailto:srajeshs021@gmail.com?subject=Portfolio Message from ${encodeURIComponent(
          name
        )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        toast(
          (t) => (
            <div className="flex flex-col gap-2 text-left">
              <span className="font-bold text-xs text-amber-500">
                Network API blocked. Send directly:
              </span>
              <div className="flex gap-2 mt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => toast.dismiss(t.id)}
                  className="bg-[#25d366] text-white text-xs font-bold px-3 py-1.5 rounded-lg text-center"
                >
                  WhatsApp
                </a>
                <a
                  href={mailtoUrl}
                  onClick={() => toast.dismiss(t.id)}
                  className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-lg text-center"
                >
                  Direct Email
                </a>
              </div>
            </div>
          ),
          { duration: 8000 }
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please reach out via WhatsApp or direct email.", { id: toastId });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div 
      style={{ backgroundImage: 'linear-gradient(to bottom right, var(--bg-primary), var(--bg-secondary))' }}
      className="min-h-screen pt-16 sm:pt-20 pb-10 px-4 sm:px-6 flex flex-col items-center transition-all duration-300 relative overflow-hidden"
    >
      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="self-start sm:absolute sm:top-6 sm:left-6 mb-4 sm:mb-0 bg-card border border-card-border hover:bg-surface-tertiary text-text-primary px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm shadow transition-colors duration-300 cursor-pointer"
      >
        ← Back
      </button>

      {/* HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-text-main transition-colors duration-300 text-center"
      >
        Contact Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-2 text-text-sub text-sm sm:text-base md:text-lg text-center transition-colors duration-300"
      >
        I'd love to hear from you! Fill the form or connect below.
      </motion.p>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-card-border mt-6 sm:mt-10 p-5 sm:p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 transition-all duration-300"
      >
        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            disabled={isSending}
            className="bg-surface-secondary border border-card-border text-text-primary placeholder:text-text-muted p-3 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 disabled:opacity-50"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            disabled={isSending}
            className="bg-surface-secondary border border-card-border text-text-primary placeholder:text-text-muted p-3 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 disabled:opacity-50"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            rows={4}
            disabled={isSending}
            className="bg-surface-secondary border border-card-border text-text-primary placeholder:text-text-muted p-3 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none disabled:opacity-50"
          ></textarea>

          <button 
            type="submit"
            disabled={isSending}
            className="bg-primary hover:bg-primary-hover text-white font-semibold py-3 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
        <div className="flex flex-col gap-5 sm:gap-6 justify-between">
          <div className="flex flex-col gap-3 text-left">
            <p className="flex items-center gap-3 text-sm sm:text-base font-medium text-text-main transition-colors duration-300">
              <MdEmail size={22} className="text-primary transition-colors duration-300 shrink-0" /> 
              <span className="break-all">{emailAddress}</span>
            </p>
            <p className="flex items-center gap-3 text-sm sm:text-base font-medium text-text-main transition-colors duration-300">
              <MdPhone size={22} className="text-primary transition-colors duration-300 shrink-0" /> +91 97906 14060
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4 sm:gap-5 mt-2">
            <a 
              href="https://github.com/yourgithub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-primary hover:text-primary transition-colors duration-300"
            >
              <FaGithub size={26} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rajesh-samysundaram/?skipRedirect=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-primary hover:text-primary transition-colors duration-300"
            >
              <FaLinkedin size={26} />
            </a>
            <a 
              href="https://wa.me/919790614060" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-primary hover:text-primary transition-colors duration-300"
            >
              <FaWhatsapp size={26} className="text-[#25d366]" />
            </a>
          </div>

          {/* RESUME BUTTON */}
          <a
            href="/resume.pdf"
            download
            className="bg-secondary hover:bg-secondary-hover text-white text-center py-3 rounded-xl transition-colors duration-300 font-semibold shadow-md cursor-pointer text-sm"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
}
