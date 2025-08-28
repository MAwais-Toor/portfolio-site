import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#081b29] text-white py-2 sm:py-2 lg:py-2 fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-18 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center font-bold text-2xl gap-2">
          MAwais
        </a>

        {/* Desktop links */}
        <ul className="hidden font-medium md:flex items-center gap-8">
          <li>
            <a href="#about" className="hover:text-sky-400 fw-20 transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-sky-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-sky-400 transition">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-sky-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-sky-400 transition">
              Education
            </a>
          </li>
        </ul>

        {/* Desktop button */}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex font-bold rounded-full border-2 border-sky-600 px-4 py-2 text-sky-500 hover:bg-sky-600 hover:text-white transition"
        >
          Github Profile
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          {isOpen ? (
            // Close icon
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#16162200] shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-6">
            <li>
              <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-sky-400">
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-sky-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-sky-400">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-sky-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" onClick={() => setIsOpen(false)} className="hover:text-sky-400">
                Education
              </a>
            </li>
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex rounded-full border border-sky-600 px-4 py-2 text-sky-500 hover:bg-sky-600 hover:text-white transition"
              >
                Github Profile
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
