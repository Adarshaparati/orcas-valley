
import React from "react";
import logo from '../../src/assets/logo.png'
import imageRight from '../../src/assets/imageright.png'
import image1 from '../../src/assets/image-left-1.png'
import image2 from '../../src/assets/image-left-2.png'
import image3 from '../../src/assets/image-left-3.png'
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function StartupStudio() {
  return (
    <div className="bg-white">
      <Navbar />

    {/* Hero Section */}
    <header className="relative text-white h-[85vh] flex flex-col sm:flex-row items-center justify-center sm:justify-start p-6 sm:p-10">
  {/* Background Image */}
  <div className="absolute inset-0 px-6 md:px-10 py-2 md:py-0">
    <div
      className="w-full h-full bg-cover bg-center rounded-lg"
      style={{ backgroundImage: "url('/Rectangle 1-bg.png')" }} // Update the image path accordingly
    ></div>
  </div>

  {/* Content Container */}
  <div className="relative text-center sm:text-left px-6 sm:px-20 mt-24 sm:mt-44">
    <h1 className="text-4xl sm:text-6xl font-medium leading-tight">
      Helping You Thrive <br className="hidden sm:block" /> with Tailor-made Assets
    </h1>
    <p className="mt-4 text-base sm:text-lg font-light max-w-xs sm:max-w-lg mx-auto sm:mx-0">
      The Orcas Valley handles everything from A to Z, ensuring precise execution through our Startup Studio, development kitchen, and branding team.
    </p>

    {/* Buttons */}
    <div className="mt-6 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
      {/* Talk to Us Button */}
      <button className="px-6 py-2 bg-white text-black rounded-full font-light flex items-center space-x-2 shadow-md w-full sm:w-auto">
        <span>Talk to Us</span>
        <span className="text-lg">→</span>
      </button>
    </div>
  </div>

  {/* Side Text (Vertical) - Hidden on Mobile */}
  <div className="absolute top-6 left-6 xs:left-2 sm:top-10 sm:left-10 z-20 px-5 flex flex-col items-center text-gray-300 text-lg tracking-widest  sm:flex">
    <div className="border-l-2 border-gray-300 h-6 sm:h-10 mb-1 sm:mb-2"></div>
    <p className="flex flex-col text-center text-xs">
    <span>T</span>
      <span>H</span>
      <span>E</span>
      <br />
      <span>O</span>
      <span>R</span>
      <span>C</span>
      <span>A</span>
      <span>S</span>
      <br />
      <span>W</span>
      <span>A</span>
      <span>Y</span>
    </p>
  </div>
</header>



{/* Development Kitchen Section */}
<section className="h-[40vh]  w-full mt-16 px-6 flex flex-col md:flex-row  items-center justify-between">
  {/* Left Side - Content */}
  <div className="w-full sm:w-1/2 text-center lg:ml-20 sm:text-left mb-8 sm:mb-0">
    <h2 className="text-3xl sm:text-4xl text-gray-700 font-light">
      Development<br /> <span className="text-[#02C4A1]">Kitchen</span>
    </h2>
    <p className="mt-4 text-gray-600 leading-relaxed">
      Our development kitchen is comprised of <br className="hidden sm:block"/> seasoned designers and developers 
      that <br className="hidden sm:block"/> will work together to develop you a unique <br className="hidden sm:block"/> identity and product tailored 
      specifically<br className="hidden sm:block"/> to your business and liking.
    </p>
  </div>

  {/* Right Side - Image */}
  <div className="w-[60%] h-[100%] lg:h-[120%] sm:w-[70%] xs:w-[80%] lg:w-[60%] sm:mt-10 sm:mb-30 flex sm:justify-center sm:items-center lg:justify-start lg:items-start">
  <img
    src={imageRight}
    alt="Development Kitchen Visual"
    className="w-full h-full object-contain rounded-lg"
  />
</div>

</section>

<section className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row  items-center mt-60 xs:mt-70 md:mt-20  lg:mt-16">
  {/* Left Side - Images */}
  <div className="w-full sm:w-1/2 flex flex-col space-y-6 py-10 items-center ">
    <img src={image1} alt="Step 1" className="w-[70%] sm:w-[50%] h-auto self-start" />
    <img src={image2} alt="Step 2" className="w-[70%] sm:w-[50%] h-auto self-center" />
    <img src={image3} alt="Step 3" className="w-[70%] sm:w-[50%] h-auto self-start" />
  </div>

  {/* Right Side - Branding Info */}
  <div className="w-full  sm:w-1/2 text-center sm:text-left mb-8 sm:mb-0 mt-20">
    <h2 className="text-3xl text-[#02C4A1] font-light">Branding</h2>
    <p className="mt-4 font-light text-gray-600">
      Our expert designers and copywriters will offer you the opportunity to build a distinguished 
      brand identity all the way from packaging, logo creation, visual assets, marketing, and branding.
    </p>
  </div>
</section>





    

      {/* Footer */}
      <Footer />
    </div>
  );
}
