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
            subject: `New Message from Portfolio (${name})`,
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
    <section id="contact" className="py-24 bg-surface-secondary text-center relative transition-all duration-300 overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-secondary/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Get In Touch</span>
          <h2 className="text-4xl font-extrabold text-text-main">Let's Connect</h2>
          <p className="text-text-muted mt-3 max-w-xl mx-auto font-medium">
            Have a project in mind, an opportunity, or just want to say hello? Drop me a line!
          </p>
        </div>

        {/* TWO COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-start">
          
          {/* LEFT COLUMN: Contact Cards & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-bold text-text-main mb-6">Contact Info</h3>

            {/* Interactive Copy Email Card */}
            <div
              onClick={handleCopyEmail}
              className="group p-5 bg-card border border-card-border rounded-2xl shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 cursor-pointer relative overflow-hidden flex items-center gap-4"
            >
              <div className="p-3.5 bg-primary/10 text-primary rounded-xl shrink-0 group-hover:scale-105 transition-transform duration-300">
                <FaEnvelope className="text-xl" />
              </div>
              <div className="flex-grow">
                <p className="text-xs font-bold text-text-muted uppercase tracking-wider">Email Me</p>
                <p className="text-base font-bold text-text-main mt-0.5">{emailAddress}</p>
              </div>
              
              {/* Copy indicator */}
              <div className="p-2.5 bg-surface-tertiary rounded-lg border border-card-border text-text-muted group-hover:text-primary transition-colors">
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="text-green-500"
                    >
                      <FaCheck size={14} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <FaCopy size={14} />
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
            <div className="p-5 bg-card border border-card-border rounded-2xl shadow-sm flex items-center gap-4">
              <div className="p-3.5 bg-primary/10 text-primary rounded-xl shrink-0">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <p className="text-xs font-bold text-text-muted uppercase tracking-wider">Location</p>
                <p className="text-base font-bold text-text-main mt-0.5">Dubai, UAE</p>
              </div>
            </div>

            {/* Social Grid Link cards */}
            <div>
              <p className="text-xs font-extrabold text-text-muted uppercase tracking-widest mb-4">Connect on Socials</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    name: "WhatsApp",
                    href: "https://wa.me/91XXXXXXXXXX",
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
                    className={`flex flex-col items-center justify-center gap-2.5 p-4 bg-card border border-card-border rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center ${social.color}`}
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="text-xs font-bold text-text-primary">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-card border border-card-border p-6 sm:p-8 rounded-3xl shadow-lg relative">
              <h3 className="text-2xl font-bold text-text-main mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                {/* Inputs group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col text-left">
                    <label className="text-xs font-extrabold text-text-muted mb-1.5 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      disabled={isSending}
                      className="bg-surface-secondary border border-card-border text-text-primary placeholder:text-text-muted/60 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm font-semibold disabled:opacity-50"
                    />
                  </div>

                  <div className="flex flex-col text-left">
                    <label className="text-xs font-extrabold text-text-muted mb-1.5 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      disabled={isSending}
                      className="bg-surface-secondary border border-card-border text-text-primary placeholder:text-text-muted/60 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm font-semibold disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <label className="text-xs font-extrabold text-text-muted mb-1.5 uppercase tracking-wider">Your Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello Rajesh, I'd love to chat about a project..."
                    rows={5}
                    disabled={isSending}
                    className="bg-surface-secondary border border-card-border text-text-primary placeholder:text-text-muted/60 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm font-semibold resize-none disabled:opacity-50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="bg-primary hover:bg-primary-hover text-white px-6 py-4 rounded-xl shadow-md hover:shadow-xl font-bold flex items-center justify-center gap-2 group transition-all duration-300 cursor-pointer self-start w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
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
