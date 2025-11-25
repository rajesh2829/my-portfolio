"use client";

interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Nexsens",
    description:
      "Worked on Nexsens project, developed scalable web modules, implemented UI/UX, and integrated APIs.",
    image: "/X3_NexSensBanner.jpg",
    github: "https://github.com/yourusername/nexsens", // optional
    live: "https://www.nexsens.com/", // if live site exists
  },
  {
    title: "Torchlite",
    description:
      "Contributed to Torchlite project with React and Next.js, developed features and optimized performance.",
    image: "/torchlite1.jpg",
    github: "https://github.com/yourusername/torchlite",
    live: "https://torchlite.com/",
  },
  {
    title: "Nexreon",
    description:
      "Worked on Nexreon, company’s own project: implemented backend APIs, database integrations, and frontend UI components.",
    image: "/nexreon.png",
    github: "#", // usually private repo
    live: "https://portal.nexreon.com/",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-purple-600 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="text-purple-600 hover:underline"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
