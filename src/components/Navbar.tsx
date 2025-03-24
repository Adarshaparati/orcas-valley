import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu toggle
import logo from "../assets/logo1.png"; // Adjust the path as needed

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Always keep the navbar visible when at the top
      if (currentScroll === 0) {
        setIsVisible(true);
        return;
      }

      // Show navbar while scrolling
      setIsVisible(true);

      // Clear previous timeout to reset hiding delay
      if (timeoutId.current) clearTimeout(timeoutId.current);

      // Hide navbar after 5s of inactivity (only when scrolled down)
      timeoutId.current = setTimeout(() => {
        if (window.scrollY > 0) {
          setIsVisible(false);
        }
      }, 5000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when a link is clicked
    setIsMobileMenuOpen(false); // Close mobile menu when a link is clicked
  };

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } flex justify-between items-center px-6 md:px-10 py-4`}
        style={{ height: "80px" }} // Fixed height for navbar
      >
        {/* Logo */}
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="Orcas Valley Logo" className="w-24 h-24 md:w-28 md:h-28 object-contain" />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-600">
          <li>
            <Link to="/about" className="hover:text-[#02C4A1] transition duration-200" onClick={handleLinkClick}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/startup" className="hover:text-[#02C4A1] transition duration-200" onClick={handleLinkClick}>
              Startup Accelerator
            </Link>
          </li>
          <li>
            <Link to="/startup-studio" className="hover:text-[#02C4A1] transition duration-200" onClick={handleLinkClick}>
              Startup Studio
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-[#02C4A1] transition duration-200" onClick={handleLinkClick}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 w-full ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-6 space-y-4 text-gray-700">
          <li>
            <Link to="/about" onClick={handleLinkClick} className="hover:text-[#02C4A1] transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/startup" onClick={handleLinkClick} className="hover:text-[#02C4A1] transition">
              Startup Accelerator
            </Link>
          </li>
          <li>
            <Link to="/startup-studio" onClick={handleLinkClick} className="hover:text-[#02C4A1] transition">
              Startup Studio
            </Link>
          </li>
          <li>
            <Link to="/contact-us" onClick={handleLinkClick} className="hover:text-[#02C4A1] transition">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Push Content Down to Avoid Overlap */}
      <div className="mt-[80px] w-full overflow-x-hidden">
        {/* Rest of your content goes here */}
      </div>

      {/* Prevent Horizontal Scrolling */}
      <style>
        {`
          html, body {
            overflow-x: hidden;
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
