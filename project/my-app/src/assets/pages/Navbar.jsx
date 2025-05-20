import React from 'react';
import '../../App.css'
import { NavLink } from 'react-router';
import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar relative bg-cover bg-center text-white">
      <nav className="absolute top-0 left-0 w-full z-20 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="text-xl font-bold">Muhammad Awais</div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-4 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 items-center">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About</a></li>
              <li><a href="#skills" className="text-white">Skills</a></li>
              <li><a href="/project" className="text-white">Experience</a></li>
              <li><a href="/services" className="text-white">Projects</a></li>
              <li><a href="#contact" className="text-white">Education</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </div>

          {/* Right Side: Icons + Toggle */}
          <div className="flex items-center space-x-4">
            {/* Social Icons */}
            <div className="hidden lg:flex space-x-4 text-xl items-center">
              <a href="#"><img src="/facebook.svg" className="w-5 h-5" /></a>
              <a href="#"><img src="/linkedin.svg" className="w-5 h-5" /></a>
              <a href="#"><img src="/github.svg" className="w-5 h-5" /></a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-white/10 backdrop-blur-md z-40 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 text-white flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end mb-6">
            <button onClick={() => setIsOpen(false)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col space-y-4 text-lg">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>Experience</a></li>
            <li><a href="#project" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)}>Education</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>

          {/* Social Icons in Sidebar */}
          <div className="mt-auto pt-6 border-t border-white/20 flex space-x-4 text-xl">
            <a href="#"><img src="/facebook.svg" className="w-5 h-5" /></a>
            <a href="#"><img src="/linkedin.svg" className="w-5 h-5" /></a>
            <a href="#"><img src="/github.svg" className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}



