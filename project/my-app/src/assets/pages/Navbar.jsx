import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router"; // ✅ correct import
import "../../App.css";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-16 text-white mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              className="h-10 w-10 mr-2"
              src="https://via.placeholder.com/150"
              alt="Logo"
            />
            <span className="text-xl tracking-tight">MATsHub</span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex ml-14 space-x-12 font-bold text-[16px]">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `cursor-pointer transition duration-300 ${
                    isActive
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
                  `cursor-pointer transition duration-300 ${
                    isActive
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
                  `cursor-pointer transition duration-300 ${
                    isActive
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
                to="/portfolio"
                className={({ isActive }) =>
                  `cursor-pointer transition duration-300 ${
                    isActive
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
                  `cursor-pointer transition duration-300 ${
                    isActive
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
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            
            <a
              href="#"
              className="bg-gradient-to-r from-blue-500 to-blue-800 font-bold py-2 px-6 rounded-md"
            >
              Resume
            </a>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              <li className="py-3">
                <NavLink
                  to="/"
                  className="hover:text-blue-500 cursor-pointer transition duration-300"
                >
                  Home
                </NavLink>
              </li>
              <li className="py-3">
                <NavLink
                  to="/about"
                  className="hover:text-blue-500 cursor-pointer transition duration-300"
                >
                  About
                </NavLink>
              </li>
              <li className="py-3">
                <NavLink
                  to="/resume"
                  className="hover:text-blue-500 cursor-pointer transition duration-300"
                >
                  Resume
                </NavLink>
              </li>

              <li className="py-3">
                <NavLink
                  to="/portfolio"
                  className="hover:text-blue-500 cursor-pointer transition duration-300"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="py-3">
                <NavLink
                  to="/contact"
                  className="hover:text-blue-500 cursor-pointer transition duration-300"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="flex space-x-6 mt-4">
              {/* Mobile Buttons */}
              <a
                href="#"
                className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md"
              >
                My Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
