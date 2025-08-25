import React from "react";

const Project = () => {
  // Project Data
  const projects = [
    {
      id: 1,
      title: "AI Chat Bot",
      img: "https://wesoftyou.com/wp-content/uploads/2025/01/robot-1280x720_0.jpg",
      desc: "AI Chatbot using HTML, CSS, JavaScript, and Gemini API. This bot provides real-time, intelligent responses using a user-friendly interface.",
      demo: "https://0001nsoni.github.io/AI_Chat_Bot/",
      github: "https://github.com/0001nsoni/AI_Chat_Bot",
    },
    {
      id: 2,
      title:"Uber Clone",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJU5P1pGOioxnqddCZMyZURPv-g-fGmX0y3Q&s",
      desc: "A fully functional Uber clone built using the MERN stack, optimized for mobile devices. ",
      demo: "#",
      github: "https://github.com/0001nsoni/Uber_Clone",
    },
    {
      id: 3,
      title: "Food Blog",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ48gXcyu965yPBJTflPgZHxD5VM3muQuYfA&s",
      desc: "Introducing my latest project – Food Blog Web App! Built to showcase delicious recipes, share cooking experiences, and explore diverse cuisines.",
      demo: "https://github.com/0001nsoni/Food_Blog",
      github: "https://github.com/0001nsoni/Food_Blog",
    },
      {
      id: 4,
      title: "GTA VI Animation",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDVAEVR6q6Rwfoc17TtMtL83mr2tIyTCwLRw&s",
      desc: "Interactive scroll animation web page inspired by GTA 6.",
      demo: "https://gta-vi-drab.vercel.app/",
      github: "https://github.com/0001nsoni/GTA-VI-",
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
