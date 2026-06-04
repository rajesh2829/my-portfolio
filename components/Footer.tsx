"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 bg-surface-secondary text-text-muted border-t border-card-border text-center transition-all duration-300">
      <p className="text-sm">© {new Date().getFullYear()} Rajesh. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-3">
        <a 
          href="https://github.com/username" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-text-muted hover:text-primary transition-colors duration-300"
        >
          <FaGithub size={18} />
        </a>
        <a 
          href="https://linkedin.com/in/username" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-text-muted hover:text-primary transition-colors duration-300"
        >
          <FaLinkedin size={18} />
        </a>
        <a 
          href="https://twitter.com/username" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-text-muted hover:text-primary transition-colors duration-300"
        >
          <FaTwitter size={18} />
        </a>
      </div>
    </footer>
  );
}
