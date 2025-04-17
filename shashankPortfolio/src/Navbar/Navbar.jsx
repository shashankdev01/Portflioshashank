import React from 'react'
import { useState } from 'react';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { FaDribbble, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
          <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-black">
        <img src="/LogoM.png" alt="Logo" className="h-8" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 items-center text-black font-semibold">
        <a href="#" className="hover:text-blue-700 flex items-center gap-2">
          <FaDribbble className="text-pink-600" /> Dribbble
        </a>
        <a href="https://www.instagram.com/shashank.4rajput/profilecard/?igsh=dzBybzMxc3VhcGF3" target="_blank" rel="noreferrer" className="hover:text-blue-700 flex items-center gap-2">
          <FaInstagram className="text-pink-500" /> Instagram
        </a>
      </div>

      {/* Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <IoCloseSharp className="text-3xl" />
          ) : (
            <HiOutlineMenuAlt4 className="text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 space-y-4 md:hidden z-50">
          <a href="#" className="hover:text-blue-700 flex items-center gap-2">
            <FaDribbble className="text-pink-600" /> Dribbble
          </a>
          <a href="https://www.instagram.com/shashank.4rajput/profilecard/?igsh=dzBybzMxc3VhcGF3" target="_blank" rel="noreferrer" className="hover:text-blue-700 flex items-center gap-2">
            <FaInstagram className="text-pink-500" /> Instagram
          </a>
        </div>
      )}
    </nav>
    </div>
  )
}

export default Navbar
