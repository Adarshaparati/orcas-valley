import React from "react";
import pattern from '../../src/assets/pattern.png'
import Navbar from "./Navbar";
import Footer from "./Footer";
import ellipse1 from '../../src/assets/Ellipse 4.png'
import unique from '../../src/assets/unique.png'

const AboutUs = () => {
  return (
    <div className="bg-white">
           <Navbar />
      {/* Hero Section */}
      <header className="relative text-white h-[85vh] flex items-center px-6 sm:px-10 ">
  {/* Background Image */}
  <div className="absolute inset-0 px-6 md:px-10 py-2 md:py-0">
    <div 
      className="w-full h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/AboutUs.png')" }}
    ></div>
  </div>

  {/* Content Container */}
  <div className="relative px-4 sm:px-20 mt-32 sm:mt-44 text-center sm:text-left">
    <h1 className="text-4xl sm:text-6xl font-medium leading-tight">
      Startup Success, <br /> Reimagined
    </h1>
    <p className="mt-4 text-base sm:text-lg font-light max-w-lg mx-auto sm:mx-0">
      The Orcas Valley challenges the status quo, offering founders a smoother path to success—without the pitfalls of equity loss or traditional accelerator roadblocks.
    </p>

    {/* Buttons */}
    <div className="mt-6 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
      {/* Apply Now Button */}
      <button className="px-6 py-2 bg-white text-black rounded-full font-light flex items-center space-x-2 shadow-md">
        <span>Apply Now</span> 
        <span className="text-lg">→</span>
      </button>

      {/* Separator (Hidden on Mobile) */}
      <span className="hidden sm:block text-gray-400 text-lg">•</span>

      {/* Become an Orca Button */}
      <button className="text-gray-300 font-light">Become an Orca</button>
    </div>
  </div>

  {/* Vertical Text - Positioned at Top Left */}
  <div className="absolute top-6 sm:top-10 left-6 sm:left-10 z-20 px-3 sm:px-5 flex flex-col items-center text-gray-300 text-xs sm:text-lg tracking-widest">
    <div className="border-l-2 border-gray-300 h-8 sm:h-10 mb-2"></div>
    <p className="flex flex-col text-center">
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





  {/* What is Orcas Valley? */}
  
<section className="py-32  mx-auto text-left relative">
  {/* Background Decorative Pattern */}
  
  <div className="absolute bottom-0 right-0 w-auto p-2 h-full  ">
    <img src={pattern} alt="Decorative Pattern" className="hidden md:flex w-full h-full" />
  </div>
    {/* Ellipse Effect */}
    <div className="absolute top-0 left-0 w-full h-full  opacity-50 z-10">
    <img src={ellipse1} alt="Ellipse Effect" className="w-full h-full object-cover" />
  </div>



  {/* Content */}
  <div className="px-20">
  <h2 className="text-4xl font-light text-gray-600 ">
    What is <br/><span className="text-[#02C4A1] font-medium">Orcas Valley?</span>
  </h2>
  <p className="text-gray-700 mt-4 leading-relaxed">
    The Orcas Valley was founded to empower entrepreneurs by addressing the challenges of traditional venture models, which often prioritize profit over innovation, leading to stress and failure.
  </p>

  <p className="text-gray-700 mt-4 leading-relaxed">
    Born from personal and professional adversity, our journey provided deep insights into startup struggles—lack of resources, relentless pressure, and systemic roadblocks. We set out to change that.
  </p>

  <p className="text-gray-700 mt-4 leading-relaxed">
    Our mission is to equip founders with the tools to succeed on their own terms, fostering a supportive ecosystem where learning, building, and scaling happen seamlessly. Every entrepreneur deserves the chance to thrive, and we’re committed to making that a reality.
  </p>
  </div>
</section>

{/* Unique Section */}
<section className="relative text-white h-auto sm:h-[85vh] w-full flex flex-col-reverse sm:flex-row items-center justify-end py-12 px-6 sm:px-16">
  {/* Background Image */}
  <img 
    src={unique} 
    alt="Unique Section Background" 
    className="absolute inset-0 w-full h-full object-cover sm:object-contain rounded-lg"
  />

  {/* Content Overlay (Positioned Right) */}
  <div className="relative z-10 max-w-lg text-center sm:text-left px-4 sm:pr-20">
    <h2 className="text-3xl sm:text-4xl font-light">
      What Makes Us<br/> <span className="text-[#02C4A1]">Unique?</span>
    </h2>
    <p className="text-base sm:text-lg mt-4 leading-relaxed text-white" style={{ opacity: 0.84 }}>
      The Orcas Valley is not just an accelerator—it’s a new current. We’re an alternative to 
      traditional venture capitalist models, rejecting the equity-heavy approaches that often 
      leave founders at a disadvantage. Our comprehensive platform provides startup 
      resources—from The Orca Blueprint eBook and AI-powered pitch deck generator to access 
      to investors—all designed to help founders learn, pitch, and secure funding without losing 
      control of their vision or jeopardizing it.
    </p>
  </div>
</section>









{/* Meet the Team Section */}
<section className="relative bg-[#F5FDFC] py-16 px-6 flex flex-col items-center">

  {/* Left & Right Backgrounds (Only Visible on Desktop) */}
  <div
    className="absolute top-0 left-0 w-1/3 h-full hidden lg:block"
    style={{ backgroundImage: "url('/path-to-left-bg.png')", backgroundSize: "cover", backgroundPosition: "left" }}
  ></div>
  
  <div
    className="absolute top-0 right-0 w-1/3 h-full hidden lg:block"
    style={{ backgroundImage: "url('/path-to-right-bg.png')", backgroundSize: "cover", backgroundPosition: "right" }}
  ></div>

  {/* Heading */}
  <div className="text-center max-w-3xl mb-10 relative z-10">
    <h2 className="text-gray-800 text-3xl sm:text-4xl font-extralight">
      Meet The <span className="text-[#02C4A1]">Team</span>
    </h2>
    <p className="text-gray-500 mt-3 text-sm sm:text-base">
      The Orcas Valley is led by experienced entrepreneurs, technologists, and investors driven by a shared passion
      for helping startups succeed and turning challenges into growth opportunities.
    </p>
  </div>

  {/* Responsive Layout: 1-column for mobile, 4-column for desktop */}
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full max-w-5xl mx-auto items-center relative z-10">

    {/* Column 1 */}
    <div className="flex flex-col gap-4">
      <img src="imageA.png" className="rounded-xl w-full" alt="Team Member A" />
      <img src="imageB.png" className="rounded-xl w-full" alt="Team Member B" />
      <div className="bg-[#C1F7E1] p-4 sm:p-6 rounded-xl text-sm sm:text-lg text-[#034237] font-light">
        The Orcas Valley is your partner in success, guiding you while safeguarding your vision.
      </div>
    </div>

    {/* Column 2 */}
    <div className="flex flex-col gap-4">
      <img src="imageC.png" className="rounded-xl w-full" alt="Team Member C" />
      <img src="imageD.png" className="rounded-xl w-full" alt="Team Member D" />
    </div>

    {/* Column 3 */}
    <div className="flex flex-col gap-4">
      <div className="bg-[#D2FAE9] p-4 sm:p-6 rounded-xl text-sm sm:text-lg font-light text-gray-800">
        Innovation drives us. By listening to our community and leveraging technology, we create cutting-edge tools
        like our AI-powered pitch deck generator and personalized feedback loops.
      </div>
      <img src="imageE.png" className="rounded-xl w-full" alt="Team Member E" />
      <img src="imageF.png" className="rounded-xl w-full" alt="Team Member F" />
    </div>

    {/* Column 4 */}
    <div className="flex flex-col gap-4">
      <img src="imageG.png" className="rounded-xl w-full" alt="Team Member G" />
      <img src="imageH.png" className="rounded-xl w-full" alt="Team Member H" />
      <div className="bg-[#C1F7E1] p-4 sm:p-6 rounded-xl text-sm sm:text-lg text-gray-800">
        At The Orcas Valley, your success is our priority. We provide tailored resources, hands-on support, and a strong foundation.
      </div>
    </div>
  </div>
</section>







    <Footer />
    </div>
  );
};

export default AboutUs;
