import { useState } from "react";
import logo from '../../src/assets/logo.png'
import map from '../../src/assets/map.png'
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import Navbar from "./Navbar";
import Footer from "./Footer";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white">
              <Navbar />
              <header className="relative text-white text-center sm:text-left h-[85vh] flex items-center justify-center px-6 sm:px-10">
  {/* Background Image */}
  <div className="absolute inset-0 px-6 sm:px-10">
    <div 
      className="w-full h-full bg-cover bg-center rounded-xl"
      style={{ backgroundImage: "url('/ContactUs.png')" }}
    ></div>
  </div>

  {/* Dark Overlay for Readability */}
  <div className="absolute inset-0 bg-white lg:bg-black bg-opacity-5 lg:bg-opacity-40 rounded-xl"></div>

  {/* Content Container */}
  <div className="relative z-10 w-full flex items-center justify-center sm:justify-start p-4">
    {/* Main Content */}
    <div className="px-4 sm:px-20 mt-32 sm:mt-52">
      <h1 className="text-4xl sm:text-6xl font-bold leading-tight">Let's Connect</h1>
      <p className="mt-4 text-base sm:text-lg text-gray-300">
        We’d love to hear from you! Whether you have questions <br className="hidden sm:block"/> 
        about our services or are ready to transform your vision into <br className="hidden sm:block"/> 
        reality, reach out today.
      </p>
    </div>
  </div>

  {/* Side Text (Vertical) - Only Visible on Desktop */}
  <div className="absolute top-10 left-10 z-20 px-5 hidden sm:flex flex-col items-center text-gray-300 text-lg tracking-widest">
    <div className="border-l-2 border-gray-300 h-10 mb-2"></div>
    <p className="flex flex-col text-center text-xs">
      <span>T</span><span>H</span><span>E</span><br />
      <span>O</span><span>R</span><span>C</span><span>A</span><span>S</span><br />
      <span>W</span><span>A</span><span>Y</span>
    </p>
  </div>
</header>

     

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-10 bg-white p-10 rounded-lg shadow-xl">
      {/* Contact Form */}
<div className="bg-gray-50 p-6 rounded-lg shadow-md">
  <h2 className="text-3xl font-light text-gray-800 mb-6 border-b pb-2">Contact Us</h2>
  
  <form onSubmit={handleSubmit} className="space-y-4">

  {/* Name Field */}
<div className="relative">
  <input
    type="text"
    name="name"
    placeholder=" "
    value={formData.name}
    onChange={handleChange}
    className="w-full p-4 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#02C4A1] text-gray-800 peer"
    required
  />
  <label className="absolute top-3 left-4 text-gray-500 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#02C4A1]">
    Name
  </label>
</div>


    {/* Email Field */}
    <div className="relative">
  <input
    type="text"
    name="name"
    placeholder=" "
    value={formData.name}
    onChange={handleChange}
    className="w-full p-4 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#02C4A1] text-gray-800 peer"
    required
  />
  <label className="absolute top-3 left-4 text-gray-500 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#02C4A1]">
Email ID
  </label>
</div>


{/* Message Field */}
<div className="relative">
  <textarea
    name="message"
    placeholder="Write your message"
    value={formData.message}
    onChange={handleChange}
    className="w-full p-4 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#02C4A1] text-gray-800 resize-none"
    rows={5} // Adjust height properly
    required
  />
</div>

    {/* Submit Button */}
    <button className="px-6 py-2 bg-[#02C4A1] text-white rounded-full font-light flex items-center space-x-2 shadow-md">
          <span>Submit</span> 
          <span className="text-lg">→</span>
        </button>
  </form>
</div>


        {/* Find Us Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-light text-gray-800 mb-4 border-b pb-2">Find us</h2>
      
      {/* Map Section */}
      <div className="w-full h-48 rounded-lg overflow-hidden border border-blue-300">
        <img src={map} alt="Map Location" className="w-full h-full object-cover" />
      </div>

      {/* Address */}
      <p className="mt-4 text-gray-700">
        <span className="font-semibold">Address:</span> 102, 11/5, Lorem ipsum building, lorem ipsum street, lorem - 400001
      </p>

      {/* Contact Details */}
{/* Contact Information */}
<div className="flex flex-col  justify-center sm:justify-between items-center text-gray-700 text-base sm:text-lg gap-4">
  <div className="flex items-center space-x-2">
    <FaPhoneAlt className="text-gray-500 text-base sm:text-lg" />
    <span>+91 111 111 1111</span>
  </div>
  <div className="flex items-center space-x-2">
    <FaEnvelope className="text-gray-500 text-base sm:text-lg" />
    <span>inquiry@orcasvalley.com</span>
  </div>
</div>


      {/* Social Media Section */}
      <div className="mt-4 flex items-center">
        <span className="text-gray-600 mr-2">Follow us on:</span>
        <div className="flex-1 border-b border-gray-400"></div>
        <div className="ml-4 flex space-x-3">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <FaXTwitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <FaFacebookF className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
      </div>
    </div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
