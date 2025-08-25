import React from "react";

const Project = () => {
  // Project Data
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      img: "public/images.png",
      desc: "A personal portfolio website built with React & TailwindCSS to showcase my skills and projects.",
      demo: "#",
      github: "#",
    },
    {
      id: 2,
      title: "E-commerce App",
      img: "public/images.png",
      desc: "Full-stack MERN e-commerce app with authentication, cart, and payment integration.",
      demo: "#",
      github: "#",
    },
    {
      id: 3,
      title: "DevOps Pipeline",
      img: "public/images.png",
      desc: "CI/CD pipeline setup with Jenkins, Docker, and Kubernetes for automated deployments.",
      demo: "#",
      github: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <h2 className="text-5xl p-2 font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-400">
        Projects
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col"
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className="rounded-xl mb-4 object-cover w-full h-30"
            />

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 flex-grow">{project.desc}</p>

            {/* Buttons */}
            <div className="mt-4 flex gap-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-green-400 text-white font-semibold hover:opacity-90 transition"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-gray-400 text-gray-700 font-semibold hover:bg-gray-100 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
