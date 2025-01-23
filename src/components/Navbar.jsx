// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black text-white px-6 md:px-16 lg:px-24 z-50">
        <div className="container py-2 flex justify-between items-center">
          <div className="text-2xl font-bold">Shravani</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="hover:text-gray-400">
              About Me
            </a>
            <a href="#resume" className="hover:text-gray-400">
              Resume
            </a>
            <a href="#project" className="hover:text-gray-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-2 bg-black text-white p-4 border-t border-gray-700">
            <a href="#home" className="hover:text-gray-400" onClick={toggleMenu}>
              Home
            </a>
            <a
              href="#about"
              className="hover:text-gray-400"
              onClick={toggleMenu}
            >
              About Me
            </a>
            <a
              href="#resume"
              className="hover:text-gray-400"
              onClick={toggleMenu}
            >
              Resume
            </a>
            <a
              href="#project"
              className="hover:text-gray-400"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-gray-400"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Fixed Gradient Effect at the Top of the Page */}
      <div className="fixed top-0 left-0 w-full h-8 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-lg blur-xl transition duration-300 scale-105 group-hover:scale-110 z-0"></div>
    </>
  );
};

export default Navbar;
