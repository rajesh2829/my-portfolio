"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaCopy,
  FaCheck,
  FaArrowRight,
  FaSpinner,
} from "react-icons/fa";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const emailAddress = "srajeshs021@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    toast.success("Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

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

      // 1. Primary: Direct Client-Side Web3Forms Submission via FormData
      const formData = new FormData();
      formData.append("access_key", publicAccessKey);
      formData.append("name", name.trim());
      formData.append("email", email.trim());
      formData.append("message", message.trim());
      formData.append("subject", `New Message from Portfolio (${name.trim()})`);
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

      // 2. Secondary: Fallback to Server-Side /api/contact if client-side didn't succeed
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
        // 3. Graceful Direct WhatsApp/Email Fallback if APIs are blocked by Cloudflare/WAF
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
                Network API blocked by Cloudflare. Send directly:
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
    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please reach out via WhatsApp or email directly.", { id: toastId });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-surface-secondary text-center relative transition-all duration-300 overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/4 w-60 sm:w-72 h-60 sm:h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-60 sm:w-72 h-60 sm:h-72 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-primary font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main">Let's Connect</h2>
          <p className="text-text-muted mt-2 sm:mt-3 max-w-xl mx-auto text-xs sm:text-sm md:text-base font-medium">
            Have a project in mind, an opportunity, or just want to say hello? Drop me a line!
          </p>
        </div>

        {/* TWO COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-left items-start">
          
          {/* LEFT COLUMN: Contact Cards & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-3 sm:mb-6">Contact Info</h3>

            {/* Interactive Copy Email Card */}
            <div
              onClick={handleCopyEmail}
              className="group p-4 sm:p-5 bg-card border border-card-border rounded-2xl shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 cursor-pointer relative overflow-hidden flex items-center gap-3.5 sm:gap-4"
            >
              <div className="p-3 sm:p-3.5 bg-primary/10 text-primary rounded-xl shrink-0 group-hover:scale-105 transition-transform duration-300">
                <FaEnvelope className="text-lg sm:text-xl" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[10px] sm:text-xs font-bold text-text-muted uppercase tracking-wider">Email Me</p>
                <p className="text-xs sm:text-sm md:text-base font-bold text-text-main mt-0.5 break-all">{emailAddress}</p>
              </div>
              
              {/* Copy indicator */}
              <div className="p-2 sm:p-2.5 bg-surface-tertiary rounded-lg border border-card-border text-text-muted group-hover:text-primary transition-colors shrink-0">
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="text-green-500"
                    >
                      <FaCheck size={13} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <FaCopy size={13} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Toast hover alert */}
              <div className="absolute top-2 right-4 text-[10px] text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {copied ? "Copied!" : "Click to copy"}
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 sm:p-5 bg-card border border-card-border rounded-2xl shadow-sm flex items-center gap-3.5 sm:gap-4">
              <div className="p-3 sm:p-3.5 bg-primary/10 text-primary rounded-xl shrink-0">
                <FaMapMarkerAlt className="text-lg sm:text-xl" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-bold text-text-muted uppercase tracking-wider">Location</p>
                <p className="text-xs sm:text-sm md:text-base font-bold text-text-main mt-0.5">Dubai, UAE</p>
              </div>
            </div>

            {/* Social Grid Link cards */}
            <div>
              <p className="text-[10px] sm:text-xs font-extrabold text-text-muted uppercase tracking-widest mb-3 sm:mb-4">Connect on Socials</p>
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {[
                  {
                    name: "WhatsApp",
                    href: "https://wa.me/919790614060",
                    icon: <FaWhatsapp className="text-[#25d366]" />,
                    color: "hover:bg-[#25d366]/5 hover:border-[#25d366]/30",
                  },
                  {
                    name: "LinkedIn",
                    href: "https://www.linkedin.com/in/rajesh-samysundaram/?skipRedirect=true",
                    icon: <FaLinkedin className="text-[#0a66c2]" />,
                    color: "hover:bg-[#0a66c2]/5 hover:border-[#0a66c2]/30",
                  },
                  {
                    name: "GitHub",
                    href: "https://github.com/yourgithub",
                    icon: <FaGithub className="text-text-main" />,
                    color: "hover:bg-primary/5 hover:border-primary/30",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center gap-2 p-3 sm:p-4 bg-card border border-card-border rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center ${social.color}`}
                  >
                    <span className="text-xl sm:text-2xl">{social.icon}</span>
                    <span className="text-[11px] sm:text-xs font-bold text-text-primary">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-card border border-card-border p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg relative">
              <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-4 sm:mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                
                {/* Inputs group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex flex-col text-left">
                    <label className="text-[11px] sm:text-xs font-extrabold text-text-muted mb-1.5 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      disabled={isSending}
                      className="bg-surface-secondary border border-card-border text-text-primary placeholder:text-text-muted/60 p-3 sm:p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-xs sm:text-sm font-semibold disabled:opacity-50"
                    />
                  </div>

                  <div className="flex flex-col text-left">
                    <label className="text-[11px] sm:text-xs font-extrabold text-text-muted mb-1.5 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      disabled={isSending}
                      className="bg-surface-secondary border border-card-border text-text-primary placeholder:text-text-muted/60 p-3 sm:p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-xs sm:text-sm font-semibold disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <label className="text-[11px] sm:text-xs font-extrabold text-text-muted mb-1.5 uppercase tracking-wider">Your Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello Rajesh, I'd love to chat about a project..."
                    rows={4}
                    disabled={isSending}
                    className="bg-surface-secondary border border-card-border text-text-primary placeholder:text-text-muted/60 p-3 sm:p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-xs sm:text-sm font-semibold resize-none disabled:opacity-50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="bg-primary hover:bg-primary-hover text-white px-6 py-3.5 sm:py-4 rounded-xl shadow-md hover:shadow-xl font-bold flex items-center justify-center gap-2 group transition-all duration-300 cursor-pointer self-start w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <>
                      Sending... <FaSpinner className="animate-spin text-sm" />
                    </>
                  ) : (
                    <>
                      Send Message 
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
