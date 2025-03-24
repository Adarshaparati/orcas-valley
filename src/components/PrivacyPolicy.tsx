import React from "react";
import logo from "../../src/assets/logo.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <header className="relative text-white text-left h-[85vh] flex items-center justify-center px-5 md:px-10">
  {/* Background Image */}
  <div className="absolute inset-0 px-5 md:px-10">
    <div 
      className="w-full h-full bg-cover bg-center rounded-xl"
      style={{ backgroundImage: "url('/privacy.png')" }}
    ></div>
  </div>

  {/* Overlay for Readability */}
  <div className="absolute inset-0 rounded-xl"></div>

  {/* Content on Top */}
  <div className="relative z-10 w-full h-full flex items-center justify-start p-4">
    <div className="px-5 sm:px-10 lg:px-20 mt-20 sm:mt-32 md:mt-44">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        Privacy<br /> Policy
      </h1>
      <p className="mt-4 text-base sm:text-lg text-gray-300">
        Effective Date: 21-Feb-2024
      </p>
    </div>
  </div>

  {/* Side Text (Vertical) */}
  <div className="absolute top-5 sm:top-10 lg:left-12  left-7 z-20 flex flex-col items-center text-gray-300 text-sm sm:text-lg tracking-widest">
    <div className="border-l-2 border-gray-300 h-8 sm:h-10 mb-2"></div>
    <p className="flex flex-col text-center text-[10px] sm:text-xs">
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


      {/* Content Section */}
      <div className="max-w-3xl mx-auto bg-white p-6 text-gray-900 mt-6">
        <p className="text-lg leading-relaxed font-light">
          This Privacy Policy explains how The Orcas Valley Limited (<strong>“Company,” “we,” “our”</strong>) collects, uses, and protects the personal data of its Users.
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-white p-6  text-gray-900 mt-6 leading-relaxed">
        {/* Information We Collect */}
        <h2 className="text-lg font-medium mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside font-light">
          <p>1.1 Personal Information: Name, email address, payment details, and information provided during registration or pitch deck submission.</p>
          <p>1.2 Technical Information: IP addresses, cookies, and usage data to improve user experience..</p>
        </ul>

        {/* How We Use Your Information */}
        <h2 className="text-lg font-semibold mt-12 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside font-light">
          <p>2.1 To provide services, including access to the eBook, tools, and feedback.</p>
          <p>2.2 To process payments securely.</p>
          <p>2.3 To communicate updates, results, and opportunities.</p>
          <p>2.4 For internal analytics to improve the platform.</p>
        </ul>

        {/* Data Sharing */}
        <h2 className="text-lg font-semibold mt-12 mb-2">3. Data Sharing</h2>
        <ul className="list-disc list-inside font-light">
          <p>3.1 Data may be shared with:</p>
          <ul className="list-disc list-inside mb-4 font-light">
        <li>Payment processors for secure transactions.</li>
        <li>Service providers assisting with operational support.</li>
        <li>Legal authorities, if required by law.</li>
      
      </ul>
          <p>3.2 The Orcas Valley does not sell or rent personal data to third parties.</p>
        </ul>

        {/* Data Security */}
        <h2 className="text-lg font-semibold mt-12 mb-2">4. Data Security</h2>
        <p className="font-light">4.1 The Orcas Valley uses encryption and secure storage solutions to protect user data.</p>
        <p className="font-light">4.2 Users are responsible for maintaining the confidentiality of their account credentials.</p>

        {/* User Rights */}
        <h2 className="text-lg font-semibold mt-12 mb-2">5. User Rights</h2>
        <p className="font-light">5.1 Users may request access, correction, or deletion of their personal data by contacting </p>
        <p className="font-light">5.2 Requests will be addressed in accordance with applicable data protection laws</p>

        {/* Updates */}
        <h2 className="text-lg font-semibold mt-12 mb-2">6. Updates to This Policy</h2>
        <p className="font-light">6.1 The Orcas Valley reserves the right to update this Privacy Policy as needed.
        Users will be notified of significant changes.</p>
      </div>
         {/* Footer */}
         <Footer />
    </div>
  );
};

export default PrivacyPolicy;
