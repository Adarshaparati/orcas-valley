import React from "react";
import image1 from '../../src/assets/image1.png'
import backImage1 from '../../src/assets/backImage1.png'
import backImage2 from '../../src/assets/backImage2.png'
import backImage3 from '../../src/assets/backImage3.png'
import backImage4 from '../../src/assets/backImage4.png'
import backImage5 from '../../src/assets/backImage5.png'
import image2 from '../../src/assets/image2.png'
import image3 from '../../src/assets/image3.png'
import image4 from '../../src/assets/image4.png'
import image5 from '../../src/assets/image5.png'
import group4 from '../../src/assets/Group 4.png'
import vectorLeft1 from '../../src/assets/vector-left-1.png'
import vectorLeft2 from '../../src/assets/vector-left-2.png'
import vectorLeft3 from '../../src/assets/vector-left-3.png'
import vectorRight1 from '../../src/assets/vector-right-1.png'
import vectorRight2 from '../../src/assets/vector-right-2.png'
import vectorRight3 from '../../src/assets/vector-right-3.png'
import vectorCenter1 from '../../src/assets/Vector-center-1.png'
import vectorCenter2 from '../../src/assets/Vector-center-2.png'
import vectorCenter3 from '../../src/assets/vector-center-3.png'
import layerBlur from '../../src/assets/layer-blur.png'
import ellipse1 from '../../src/assets/Ellipse 1.png'
import ellipse2 from '../../src/assets/Ellipse 2.png'
import Navbar from "./Navbar";
import Footer from "./Footer";



const Homepage: React.FC = () => {
  const benefits = [
    {
      id: 1,
      front: image1,
      back: backImage1,
      title: "Learn",
      description:
        "Gain insight through our eBook: The Orca Blueprint. (Optional: Button that links to the introduction of the eBook)",
    },
    {
      id: 2,
      front: image2,
      back: backImage2,
      title: "Build",
      description:
        "Access our AI-powered pitch deck generator and our startup studio to help refine and optimize your pitch and product alike",
    },
    {
      id: 3,
      front: image3,
      back: backImage3,
      title: "Pitch",
      description:
        "Receive expert feedback and scoring on your pitch",
    },
    {
      id: 4,
      front: image4,
      back: backImage4,
      title: "Get Funded",
      description:
        "Compete for angel investments with up to $100K in funding opportunities over two seasonal batches per year",
    },
    {
      id: 5,
      front: image5,
      back: backImage5,
      title: "Connect",
      description:
        "Connect with a thriving entrepreneurial community and investors.",
    },
  ];
  return (
    <div className="bg-white">
          <Navbar />


      {/* Hero Section */}
      <header className="relative text-white text-left h-[85vh]  flex items-center justify-center px-6 md:px-10">
      {/* Background Image Container */}
      <div className="absolute inset-0 px-6 md:px-10 py-2 md:py-0">
        <div 
          className="w-full h-full bg-cover bg-center rounded-xl"
          style={{ backgroundImage: "url('/Frame 19.png')" }}
        ></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-10 rounded-xl"></div>

      {/* Vertical Text */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-20 px-5 flex flex-col items-center text-gray-300 text-lg tracking-widest  sm:flex">
        <div className="border-l-2 border-gray-300 h-8 md:h-10 mb-2"></div>
        <p className="flex flex-col text-center text-xs ">
          <span>T</span><span>H</span><span>E</span><br />
          <span>O</span><span>R</span><span>C</span><span>A</span><span>S</span><br />
          <span>W</span><span>A</span><span>Y</span>
        </p>
      </div>

      {/* Content Section */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-end px-6 md:px-20 py-16 md:py-20">
        <div className="text-center md:text-left mt-32 md:mt-44 w-full">
          <h1 className="text-4xl md:text-6xl font-medium leading-tight">
            Shaping Ideas into <br className="hidden md:block" /> Success Stories
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-300">
            Learn, Build, Pitch, and Get Funded | A step-by-step accelerator for <br className="hidden md:block" />
            startups and visionary entrepreneurs.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
            <button className="px-6 py-2 bg-white text-black rounded-full font-light flex items-center space-x-2 shadow-md">
              <span>Apply Now</span>
              <span className="text-lg">→</span>
            </button>
            <span className="text-gray-400 text-lg hidden sm:block">•</span>
            <button className="text-gray-300 font-light">Become an Orca</button>
          </div>
        </div>
      </div>
    </header>




<section 
  className="relative flex flex-col items-center justify-center text-center py-16 px-6  bg-white overflow-hidden"
>
  {/* Left Patch - Overlapping Text */}
  <img 
    src={ellipse2}
    alt="Left Gradient Patch" 
    className="absolute left-[-50px] top-[-30%] w-[420px] opacity-80 blur-xl"
  />

  {/* Right Patch - Overlapping Text */}
  <img 
    src={ellipse1}
    alt="Right Gradient Patch" 
    className="absolute right-[-50px] top-[-10%] w-[420px] opacity-80 blur-xl scale-x-[-1]"
  />

  {/* Content Box */}
  <h2 className="relative text-[24px] md:text-[26px] font-light text-gray-900 leading-relaxed max-w-3xl z-10">
  <img src={group4} alt="Decorative Icon" className="w-6 h-6 md:w-8 md:h-8 mt-1 " />
  <span className="ml-16 font-light">The Orcas Valley is a comprehensive platform designed to</span>
  <div className="inline-block text-left ">
     {/* empower 
    <span className="text-[#02C4A1] font-light"> early-stage startups and entrepreneurs.</span>
    Through resources like The Orca Blueprint: The Art of Building and Scaling Your Startup, 
    our AI-powered pitch deck generator, and connections with angel investors, we provide an 
    <span className="text-[#02C4A1] font-light"> all-in-one package</span> to help founders transform their ideas into 
    <span className="font-light"> successful ventures.</span> */}
    The Orcas Valley is a comprehensive platform designed specifically for first-time founders and aspiring entrepreneurs. No experience? No problem. We provide clear, step-by-step guidance to transform your ideas into successful startups.
    Our resources include The Orca Blueprint: The Art of Building and Scaling Your Startup, an AI-powered pitch deck generator, competitive angel investment opportunities, and access to an extensive network of angel investors ready to support your growth
    <div className="flex justify-end w-[80%]">
    <img src={group4} alt="Decorative Icon" className="w-6 h-6 md:w-8 md:h-8  " />
    </div>
   
  </div>
</h2>
{/* <img 
    src={ellipse1}
    alt="Right Gradient Patch" 
    className="absolute left-[-50px] top-[-10%] w-[420px] opacity-80 blur-xl scale-x-[-1]"
  /> */}


  {/* Button */}
  <button 
    className="mt-6 px-6 py-3 bg-[#02C4A1] text-white rounded-full font-medium shadow-md hover:bg-[#029C84] transition flex items-center space-x-2 relative z-10"
  >
    Ready to Build Your Dream Company? →
  </button>
</section>
{/* Parent Wrapper for Both Sections */}
<div className="relative ">


{/* Key Benefits */}
<section className="relative text-center py-20 z-10 mb-10">

  {/* Section Header */}
  <div className="flex items-center justify-center mb-8 relative px-4">
    <div className="w-full max-w-6xl flex items-center">
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-green-300 to-green-300"></div>
      <h3 className="text-3xl md:text-4xl font-light px-4 whitespace-nowrap">Key Benefits</h3>
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-green-300 to-green-300"></div>
    </div>
  </div>

  {/* Background Image */}
  <div 
    className="absolute bottom-0 left-0 w-full h-[300px] md:h-[500px] bg-no-repeat bg-left-top"
    style={{ backgroundImage: "url('/key benefits-bg.png')" }}
  ></div>

  {/* Benefits Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto px-4 md:px-0">
    {benefits.map((benefit) => (
      <div
        key={benefit.id}
        className="relative group bg-white rounded-[20px] sm:rounded-[30px] shadow-md h-64 sm:h-72 overflow-hidden"
      >
        {/* Front Image (Default View) */}
        <img
          src={benefit.front}
          alt="Front"
          className="h-full w-full object-cover rounded-[20px] sm:rounded-[30px] absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
        />

        {/* Back Image with Text (Appears on Hover) */}
        <div className="absolute inset-0 flex flex-col justify-start text-left bg-opacity-95 opacity-0 transition-opacity duration-500 group-hover:opacity-100 py-6 sm:py-8 rounded-[20px] sm:rounded-[30px]">
          <img
            src={benefit.back}
            alt="Back"
            className="h-full w-full object-cover absolute inset-0 rounded-[20px] sm:rounded-[30px]"
          />

          {/* Text Content */}
          <div className="relative z-10 p-3 sm:p-4 text-gray-700 font-light">
            <h3 className="text-lg sm:text-xl font-normal mb-1 sm:mb-2">{benefit.title}</h3>
            <p className="text-xs sm:text-sm mt-2 sm:mt-4">{benefit.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>

</section>




{/* Special Section */}
<section className="relative text-center py-20 z-20">

  {/* Title */}
  <div className="px-6 md:px-36">
    <h3 className="relative text-3xl md:text-4xl font-light text-gray-800 text-left">
      What makes <br />us <span className="text-[#02C4A1]">special?</span>
    </h3>
  </div>

  {/* Feature Cards */}
  <div className="relative flex flex-col md:flex-row justify-center w-full md:w-[80%] mx-auto mt-12 gap-8 px-4">

    {/* Left Vector */}
    <div className="relative w-full md:w-[33.33%] h-[260px] md:h-[300px] flex items-center justify-center overflow-hidden">
      <img src={layerBlur} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Layer Blur" />
      <img src={vectorLeft1} className="absolute inset-0 w-full h-full object-contain" alt="Vector Left 1" />
      <img src={vectorLeft2} className="absolute inset-0 w-full h-full object-contain" alt="Vector Left 2" />
      <img src={vectorLeft3} className="absolute inset-0 w-full h-full object-contain" alt="Vector Left 3" />

      {/* Text Centered */}
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-16 text-center z-10">
        <p className="text-gray-800 text-sm lg:text-sm md:text-base font-light mb-8 md:mb-12">
          We offer unmatched resources to help even the<br/> most inexperienced entrepreneurs and founders the <br/>world over.
        </p>
      </div>
    </div>

    {/* Center Vector */}
    <div className="relative w-full md:w-[33.33%] h-[260px] md:h-[300px] flex items-center justify-center overflow-hidden">
      <img src={layerBlur} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Layer Blur" />
      <img src={vectorCenter1} className="absolute inset-0 w-full h-full object-contain" alt="Vector Center 1" />
      <img src={vectorCenter2} className="absolute inset-0 w-full h-full object-contain" alt="Vector Center 2" />
      <img src={vectorCenter3} className="absolute inset-0 w-full h-full object-contain" alt="Vector Center 3" />

      {/* Text Centered */}
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-16 text-center z-10">
        <p className="text-gray-800 text-xs lg:text-sm md:text-base font-light mt-8 md:mt-12">
          We create unparalleled opportunities that offer you <br/> the greatest chances for growth & success.
        </p>
      </div>
    </div>

    {/* Right Vector */}
    <div className="relative w-full md:w-[33.33%] h-[260px] md:h-[300px] flex items-center justify-center overflow-hidden">
      <img src={layerBlur} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Layer Blur" />
      <img src={vectorRight1} className="absolute inset-0 w-full h-full object-contain" alt="Vector Right 1" />
      <img src={vectorRight2} className="absolute inset-0 w-full h-full object-contain" alt="Vector Right 2" />
      <img src={vectorRight3} className="absolute inset-0 w-full h-full object-contain" alt="Vector Right 3" />

      {/* Text Centered */}
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-16 text-center z-10">
        <p className="text-gray-800 text-sm lg:text-sm md:text-base font-light mb-8 md:mb-12">
          We support founders from the early stages of their startup throughout their journey to becoming established entrepreneurs with guidance, funding, & <br/>everything in between.
        </p>
      </div>
    </div>

  </div>

</section>



</div>



      {/* Footer */}
      <Footer />


    </div>
  );
};

export default Homepage;
