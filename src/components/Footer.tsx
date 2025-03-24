import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure the correct path to the logo
import footerRightDesign from "../assets/footer-design-right.png"; // Ensure the correct path

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to the top when a link is clicked
  };

  return (
    <footer
      className="relative text-white py-12 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/footer-bg.png')" }} // Ensure the correct path
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Right Decorative Image */}
      <img
        src={footerRightDesign}
        alt="Footer Right Design"
        className="absolute top-28 right-0 w-1/3 h-full object-cover opacity-30 hidden md:block"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Logo & Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between border-white/20 pb-4 text-center md:text-left">
          {/* Logo */}
          <h1 className="text-[#02C4A1] text-xl font-bold flex items-center mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="h-5 mr-2" />
          </h1>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:space-x-6 text-gray-300 text-sm">
            <Link to="/about" onClick={handleLinkClick}>About Us</Link>
            <Link to="/startup" onClick={handleLinkClick}>Startup Accelerator</Link>
            <Link to="/startup-studio" onClick={handleLinkClick}>Startup Studio</Link>
            <Link to="/contact-us" onClick={handleLinkClick}>Contact Us</Link>
            <Link to="/terms" onClick={handleLinkClick}>Terms & Conditions</Link>
            <Link to="/privacy-policy" onClick={handleLinkClick}>Privacy Policy</Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm pt-8 text-center md:text-left">
          {/* Left Text */}
          <span className="mb-2 md:mb-0">© 2024</span>

          {/* Dotted Line */}
          <div className="hidden md:block flex-grow border-t border-dashed border-gray-400 mx-4"></div>

          {/* Right Text */}
          <span>All rights reserved by The Orcas Valley</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
