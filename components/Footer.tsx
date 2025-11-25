"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-800 text-white text-center">
      <p>© 2025 Rajesh. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="https://github.com/username" target="_blank">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/username" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/username" target="_blank">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
}
