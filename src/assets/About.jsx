import React from "react";

const About = () => {
    return (
        <div className="relative  flex items-center justify-center py-16 px-6 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full  p-10 rounded-2xl  relative z-10">


                <div className="flex items-center justify-center relative">
                    <img
                        src="public/ChatGPT Image Aug 17, 2025, 09_59_19 PM.png"
                        alt="Neeraj Soni"
                        className="h-60 w-60 object-cover rounded-full border-[6px] border-purple-400 shadow-lg relative z-10"
                    />
                </div>


                <div className="flex flex-col justify-center text-gray-700">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                        Who Am I?
                    </h2>
                    <h3 className="text-purple-600 font-semibold mb-4">
                        A brief journey through my passion and expertise.
                    </h3>
                    <p className="mb-4">
                        Greetings! I’m Neeraj, a passionate MERN Stack Developer and DevOps
                        enthusiast with a strong focus on building scalable, secure, and
                        high-performance applications. My journey in tech started with a
                        curiosity for solving real-world problems, which evolved into a
                        drive to create impactful digital solutions. I enjoy transforming
                        ideas into reality — from planning and development to deployment
                        and optimization.
                    </p>
                    <p>
                        With expertise in modern full-stack development using MongoDB,
                        Express.js, React, and Node.js, combined with hands-on experience
                        in DevOps practices such as CI/CD, containerization (Docker),
                        cloud platforms, and automation, I craft seamless end-to-end
                        solutions. I believe in writing clean, maintainable code and
                        leveraging modern tools to ensure reliability, security, and
                        efficiency. Beyond coding, I’m passionate about exploring new
                        technologies and continuously leveling up my skills to stay at
                        the forefront of innovation.
                    </p>

                </div>
            </div>


            <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-200/50 rounded-full"></div>
            <div className="absolute top-10 right-10 w-40 h-40 bg-green-200/50 rounded-full"></div>
        </div>
    );
};

export default About;
