import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import "../../App.css";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-6 text-white mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <NavLink to="/">
              <h1 className="text-xl font-bold tracking-tight">Portfolio</h1>
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex ml-14 space-x-12 font-bold text-[16px] items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `cursor-pointer transition duration-300 ${isActive
                    ? "text-blue-500 font-semibold"
                    : "hover:text-blue-500"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `cursor-pointer transition duration-300 ${isActive
                    ? "text-blue-500 font-semibold"
                    : "hover:text-blue-500"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `cursor-pointer transition duration-300 ${isActive
                    ? "text-blue-500 font-semibold"
                    : "hover:text-blue-500"
                  }`
                }
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/notfound"
                className={({ isActive }) =>
                  `cursor-pointer transition duration-300 ${isActive
                    ? "text-blue-500 font-semibold"
                    : "hover:text-blue-500"
                  }`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `cursor-pointer transition duration-300 ${isActive
                    ? "text-blue-500 font-semibold"
                    : "hover:text-blue-500"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/mawaistoor/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-md font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-blue-900 transition flex items-center space-x-2"
            >
              Linkedin
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="flex flex-col items-center">
              <li className="py-3 w-full text-center">
                <NavLink
                  to="/"
                  onClick={() => setMobileDrawerOpen(false)}   // ✅ close menu
                  className="hover:text-blue-500 cursor-pointer transition duration-300"
                >
                  Home
                </NavLink>
              </li>
              <li className="py-3 w-full text-center">
                <NavLink
                  to="/about"
                  onClick={() => setMobileDrawerOpen(false)}   // ✅
                  className="hover:text-blue-500 cursor-pointer transition duration-300"
                >
                  About
                </NavLink>
              </li>
              <li className="py-3 w-full text-center">
                <NavLink
                  to="/resume"
                  onClick={() => setMobileDrawerOpen(false)}   // ✅
                  className="hover:text-blue-500 cursor-pointer transition duration-300"
                >
                  Resume
                </NavLink>
              </li>
              <li className="py-3 w-full text-center">
                <NavLink
                  to="/notfound"
                  onClick={() => setMobileDrawerOpen(false)}   // ✅
                  className="hover:text-blue-500 cursor-pointer transition duration-300"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="py-3 w-full text-center">
                <NavLink
                  to="/contact"
                  onClick={() => setMobileDrawerOpen(false)}   // ✅
                  className="hover:text-blue-500 cursor-pointer transition duration-300"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="flex space-x-6 mt-4 justify-center w-full">
              {/* Mobile Buttons */}
              <a
                href="https://www.linkedin.com/in/mawaistoor/"
                onClick={() => setMobileDrawerOpen(false)}   // ✅ also close drawer
                className="border border-blue-500 py-2 px-3 rounded-md hover:bg-blue-500 hover:text-white transition flex items-center justify-center"
              >
                Linkedin
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
