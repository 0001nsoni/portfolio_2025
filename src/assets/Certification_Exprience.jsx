import React from "react";
import { Briefcase, Award } from "lucide-react"; // Icons

const Certification_Experience = () => {
  const certifications = [
    {
        title:"Software Engineer Intern",
        issuer:"HackerRank",
        year:"2024"
    },{
      title: "Red Hat Certified System Administrator (RHCSA)",
      issuer: "Red Hat",
      year: "2024",
    },
    {
      title: "C++",
      issuer: "Spoken Tutorial",
      year: "2023",
    },
  ];

  const experiences = [
    {
        role:"Advanced Cyber Security with Internship",
        company:"TechForce Service",
        duration:"May 2025 - July 2025 ",
        desc: "Undertook Salesforce training and completed an internship program focused on cybersecurity at TechForce Academy."
    },
    {
        role:"Salesforce Administrator",
        company:"TechForce Service",
        duration:"Jul 2024 - Aug 2024 ",
        desc:"Salesforce and Internship program with Techforce Academy"
    },
    {
      role: "Campus Ambassador",
      company: "Coding Ninjas",
      duration: "Jan 2024 – Apr 2024",
      desc: "Promoted events, engaged students, and increased brand presence in campus activities.",
    },
   
  ];

  return (
    <div className="flex min-h-screen  flex-col items-center justify-center py-16 px-6 bg-gray-50">
      {/* Title */}
      <h2 className="text-4xl p-3 md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-400 mb-12">
        Certifications & Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Certifications */}
        <div className="bg-white p-6 rounded-2xl shadow-md border">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
            <Award className="w-6 h-6 text-yellow-500" /> Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 bg-yellow-50 rounded-lg border border-yellow-100 hover:shadow-md transition"
              >
                <h4 className="text-lg font-semibold text-gray-800">{cert.title}</h4>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="bg-white p-6 rounded-2xl shadow-md border">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
            <Briefcase className="w-6 h-6 text-blue-500" /> Experience
          </h3>
          <div className="relative border-l border-gray-300 ml-4">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10 ml-6">
                <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white shadow">
                  <Briefcase className="w-3 h-3" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">{exp.role}</h4>
                <p className="text-sm text-gray-600">{exp.company}</p>
                <p className="text-xs text-gray-500 mb-2">{exp.duration}</p>
                <p className="text-gray-700">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification_Experience;
