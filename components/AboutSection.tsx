"use client";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* LEFT - Text + Skills */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I’m Rajesh, a full stack developer based in India. I specialize in
            building scalable web applications using React, Next.js, and
            Node.js. I enjoy creating beautiful user interfaces and seamless
            user experiences.
          </p>

          {/* Skills / Highlights */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm">
              React
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm">
              Next.js
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm">
              Node.js
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm">
              TypeScript
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
