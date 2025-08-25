import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full mx-auto text-center">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:p-0 p-20 md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-400 mb-12"
        >
          Let’s Connect
        </motion.h1>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 justify-items-center">
          {/* Left spacer for symmetry (desktop only) */}
          <div className="hidden md:block"></div>

          {[
            {
              icon: <Mail className="w-10 h-10 text-purple-500" />,
              title: "Email",
              value: "nsoni8005@gmail.com",
            },
            {
              icon: <Phone className="w-10 h-10 text-green-500" />,
              title: "Phone",
              value: "+91 7627055700",
            },
            {
              icon: <MapPin className="w-10 h-10 text-blue-500" />,
              title: "Location",
              value: "Rajasthan, India",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white p-6 w-full max-w-xs rounded-2xl shadow-md border text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.value}</p>
            </motion.div>
          ))}

          {/* Right spacer for symmetry (desktop only) */}
          <div className="hidden md:block"></div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex gap-6 justify-center mt-12"
        >
          <a
            href="https://github.com/0001nsoni"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white border rounded-full shadow-md hover:shadow-lg transition"
          >
            <Github className="w-6 h-6 text-gray-800" />
          </a>
          <a
            href="https://www.linkedin.com/in/neerajsoni11/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white border rounded-full shadow-md hover:shadow-lg transition"
          >
            <Linkedin className="w-6 h-6 text-gray-800" />
          </a>
        </motion.div>

        {/* Small Footer Note */}
        <p className="text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Neeraj Soni | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Contact;
