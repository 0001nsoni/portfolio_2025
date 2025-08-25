import React from 'react'

const Skills = () => {
  const skills = [
    "C", "C++", "JavaScript", "ReactJS", "NodeJS", "MongoDB", "ExpressJS",
    "Networking", "Ansible", "Terraform", "Kubernetes", "Docker", "Jenkins"
  ];

  return (
    <div className="flex h-screen items-center justify-center py-16 px-6 bg-gray-50 ">
      {/* Consistent max width like About */}
      <div className="max-w-6xl w-full">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-400 mb-12">
          Technical Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-6 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-8 py-5 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform font-semibold text-gray-700"
            >
              <div>{skill}</div>
              <div className="w-full h-1 bg-blue-500 mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
