import React, { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "GitHub&DSA",
    "Certification",
    "Contact",
  ];

  return (
    <div className="bg-white w-full h-[10%] flex items-center justify-between px-6 shadow-md fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="h-full flex items-center">
        <span className="text-blue-500 font-bold text-3xl">&lt;</span>
        <h1 className="font-bold text-xl sm:text-2xl">Neeraj</h1>
        <span className="text-blue-500 font-bold text-3xl">/&gt;</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace("&", "").replace(" ", "")}`}
            onClick={() => setActive(link)}
            className={`transition-colors font-medium ${active === link
                ? "text-blue-500"
                : "text-gray-700 hover:text-blue-400"
              }`}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Desktop Contact Button */}
      <div className="hidden md:block">
        <a
          href="#contact"
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
        >
          <FaPhoneAlt />
          Contact
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 gap-4 md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace("&", "").replace(" ", "")}`}
              onClick={() => {
                setActive(link);
                setMenuOpen(false);
              }}
              className={`transition-colors font-medium ${active === link
                  ? "text-blue-500"
                  : "text-gray-700 hover:text-blue-400"
                }`}
            >
              {link}
            </a>
          ))}

          {/* Mobile Contact Button (Fixed) */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Nsoni8005@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-600"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>

        </div>
      )}
    </div>
  );
}

export default Nav;
