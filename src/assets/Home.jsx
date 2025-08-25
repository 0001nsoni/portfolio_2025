import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-6 mt-20 md:mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        
        {/* Left Section */}
        <div className="bg-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            Full-Stack Developer | DevOps | CyberSecurity
          </h2>
          <p className="text-gray-600 mb-6">
            Crafting Digital Experiences that inspire and solve 
            real-world challenges with elegance and security focus.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-green-400 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition">
            Explore My Work
          </button>
        </div>

        {/* Right Section - Portfolio Style */}
        <div className="relative bg-gradient-to-br from-purple-100 via-green-50 to-purple-100 flex flex-col items-center justify-center p-8">
          
          {/* Profile Photo */}
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/06f21a161921919.63cd7887d0a70.gif"
            alt="Neeraj Soni"
            className=" object-cover  mb-4 z-10"
          />

          {/* Decorative shapes */}
          <div className="absolute top-6 left-6 w-20 h-20 bg-purple-200/40 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-200/40 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
