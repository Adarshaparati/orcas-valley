import React from "react";
import backImage1 from '../../src/assets/learn-back.png'
import backImage2 from '../../src/assets/create-back.png'
import backImage3 from '../../src/assets/receive-back.png'
import backImage4 from '../../src/assets/connect1-back.png'
import group53 from '../../src/assets/Group 53.png'
import image1 from '../../src/assets/learn-front.png'
import image2 from '../../src/assets/create-front.png'
import image3 from '../../src/assets/receive-front.png'
import image4 from '../../src/assets/connect1-front.png'
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
import group48 from '../../src/assets/Group 48.png'
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function StartupAccelerator() {
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
      title: "Create",
      description:
        "Create investor-ready pitch decks effortlessly.",
    },
    {
      id: 3,
      front: image3,
      back: backImage3,
      title: "Receive",
      description:
        "Receive professional feedback to refine your pitch.",
    },
    {
      id: 4,
      front: image4,
      back: backImage4,
      title: "Get Funded",
      description:
        "Compete for angel investments with up to $100K in funding opportunities over two seasonal batches per year",
    },

  ];
  return (
    <div className="bg-white">
           <Navbar />
      {/* Hero Section */}

      <header className="relative text-white h-[85vh] flex items-center px-6 sm:px-10 lg:px-20">
  {/* Background Image */}
  <div className="absolute inset-0 px-6 md:px-10 py-2 md:py-0">
    <div 
      className="w-full h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/startup-bg.png')" }}
    ></div>
  </div>



  {/* Content (Text on Top of Image) */}
  <div className="relative z-10 max-w-2xl px-6 sm:px-10 text-center sm:text-left mt-32 sm:mt-44">
    <h1 className="text-4xl sm:text-6xl font-medium leading-tight">
      Your Guide <br className="hidden sm:block" /> to Success
    </h1>
    <p className="mt-4 text-base sm:text-lg font-light text-gray-300">
      By listening to our community and leveraging technology, we 
      create cutting-edge tools like our AI-powered pitch deck  
      generator and personalized feedback loops.
    </p>
    
    {/* Buttons */}
    <div className="mt-6 flex flex-col sm:flex-row items-center sm:space-x-3 space-y-3 sm:space-y-0">
      {/* Apply Now Button */}
      <button className="px-6 py-2 bg-white text-black rounded-full font-light flex items-center space-x-2 shadow-md">
        <span>Apply Now</span> 
        <span className="text-lg">→</span>
      </button>

      {/* Separator (Hidden on Mobile) */}
      <span className="hidden sm:block text-gray-400 text-lg">•</span>

      {/* Become an Orca Button */}
      <button className="text-gray-300 font-light">
        Become an Orca
      </button>
    </div>
  </div>

  {/* Side Text (Vertical) */}
  <div className="absolute top-5 left-7 sm:top-10 sm:left-10 z-20 flex flex-col items-center text-gray-300 text-xs sm:text-lg tracking-widest">
    <div className="border-l-2 border-gray-300 h-6 sm:h-10 mb-1 sm:mb-2"></div>
    <p className="flex flex-col text-center">
      <span>T</span>
      <span>H</span>
      <span>E</span>
      <br className="hidden sm:block" />
      <span>O</span>
      <span>R</span>
      <span>C</span>
      <span>A</span>
      <span>S</span>
      <br className="hidden sm:block" />
      <span>W</span>
      <span>A</span>
      <span>Y</span>
    </p>
  </div>
</header>



      

{/* Comprehensive Package Section */}
<section
  style={{
    backgroundImage: "url('/Ellipse 3.png')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left",
  }}
  className="py-12 px-6 sm:px-10 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10"
>
  {/* Right Side: Group 53 Image (Appears First on Mobile) */}
  <div className="w-full lg:w-1/2 flex justify-center">
    <img src={group53} alt="Comprehensive Package Details" className="w-full max-w-sm sm:max-w-md lg:max-w-full" />
  </div>

  {/* Left Side: Styled Text-Based Content */}
  <div className="w-full lg:w-1/2 text-center lg:text-left">
    <h2 className="text-gray-700 text-xl sm:text-2xl font-light">Comprehensive Package</h2>
    <p className="text-[rgba(0,0,0,0.64)] text-3xl sm:text-5xl font-light leading-snug mt-3">
      A full-service <br className="hidden sm:block" /> package designed to
      <br />
      <span className="text-teal-500 font-light2">
        guide startups <br className="hidden sm:block" /> from ideation to funding.
      </span>
    </p>
    <div className="flex flex-col items-center lg:items-start mt-6">
      <button className="bg-[#02C4A1] text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#029C85] transition duration-300 w-full sm:w-auto justify-center">
        Apply Now
        <span className="text-xl">➝</span>
      </button>
      <p className="text-[rgba(0,0,0,0.64)] mt-2 text-lg">
        Become an Orca. Winter Batch.
      </p>
    </div>
  </div>
</section>







{/* Key Benefits */}
<section className="text-center py-8 lg:py-16">
  {/* Section Header */}
  <div className="flex items-center justify-center mb-8 relative">
    <div className="w-full max-w-6xl flex items-center">
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-green-300 to-green-300"></div>
      <h3 className="text-3xl sm:text-4xl font-light px-4 whitespace-nowrap">Key Benefits</h3>
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-green-300 to-green-300"></div>
    </div>
  </div>

  {/* Benefits Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto px-4">
    {benefits.map((benefit) => (
      <div
        key={benefit.id}
        className="relative group bg-white rounded-[30px] shadow-md  h-64  w-full sm:w-60 overflow-hidden"
      >
        {/* Front Image (Default View) */}
        <img
          src={benefit.front}
          alt="Front"
          className="h-full w-full object-contain rounded-[20px] absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
        />

        {/* Back Image with Text (Appears on Hover) */}
        <div className="absolute inset-0 flex flex-col justify-start text-left bg-opacity-90 opacity-0 transition-opacity duration-500 group-hover:opacity-100 px-2 py-8 rounded-[30px]">
          <img
            src={benefit.back}
            alt="Back"
            className="h-full w-full object-cover absolute inset-0 rounded-[30px]"
          />
          
          {/* Text Content */}
          <div className="relative z-10 p-4 text-black font-light">
            <h3 className="text-lg sm:text-xl font-normal mb-2">{benefit.title}</h3>
            <p className="text-xs sm:text-sm mt-4">{benefit.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


<section className="py-20 px-2 lg:px-6 text-center">
  {/* Main Heading */}
  <div className="w-full mx-auto flex flex-col lg:flex-row justify-between items-start text-center lg:text-left">
  {/* Left-Aligned Heading */}
  <h2 className="px-4 sm:px-8 text-2xl sm:text-3xl lg:text-4xl font-thin leading-tight flex-1">
    Ready to Learn, Build, <br className="hidden sm:block" /> Pitch, and 
    <span className="text-[#02C4A1]"> Get Funded?</span>
  </h2>

  {/* Right-Aligned Subheading */}
  <p className="px-4 sm:px-8 mt-3 sm:mt-4 text-base sm:text-lg font-light text-black flex-1">
    For a one-time fee of <span className="font-medium">$[Amount]</span>, you’ll receive:
  </p>
</div>


  {/* Special Section */}
  <section className="relative text-center py-20 z-20">
    {/* Title */}
    <div className="px-8 sm:px-24 text-left">
      <h3 className="relative text-3xl sm:text-4xl font-light text-gray-800">
        What makes <br />us <span className="text-[#02C4A1]">special?</span>
      </h3>
    </div>

    {/* Feature Cards */}
    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[95%] mx-auto mt-12">
      {[
        {
          img1: vectorLeft1,
          img2: vectorLeft2,
          img3: vectorLeft3,
          text: "The Orca Blueprint: A startup guide to building and scaling your business with expert insights.",
        },
        {
          img1: vectorCenter1,
          img2: vectorCenter2,
          img3: vectorCenter3,
          text: "Access to our AI-powered pitch deck generator that gets investors to say Yes.",
        },
        {
          img1: vectorRight1,
          img2: vectorRight2,
          img3: vectorRight3,
          text: "Get feedback, scores, and tailored angel investor connections to boost your funding success.",
        },
        {
          img1: vectorCenter1,
          img2: vectorCenter2,
          img3: vectorCenter3,
          text: "A chance to compete for angel investments by the Orcas Valley.",
        },
      ].map((feature, index) => (
        <div key={index} className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
          <img src={layerBlur} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Layer Blur" />
          <img src={feature.img1} className="absolute inset-0 w-full h-full object-contain" alt={`Vector ${index} 1`} />
          <img src={feature.img2} className="absolute inset-0 w-full h-full object-contain" alt={`Vector ${index} 2`} />
          <img src={feature.img3} className="absolute inset-0 w-full h-full object-contain" alt={`Vector ${index} 3`} />

          {/* Text Centered */}
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center z-10">
            <p className="text-gray-800 text-sm font-light">{feature.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* How to Apply Section */}
  <div className="mt-14 text-center lg:text-left px-8">
    <h3 className="text-3xl sm:text-4xl font-light">
      How to <span className="text-[#02C4A1]">apply?</span>
    </h3>
  </div>

  {/* Group48 Image - Centered */}
  <div className="mt-8 flex justify-center">
    <img src={group48} alt="Group 48 Steps" className="w-full lg:max-w-[80%] mx-auto" />
  </div>
</section>





{/* FAQ Section */}
<section className="py-16 px-8">
  {/* Heading */}
  <h2 className="text-center text-3xl font-light">
    Frequently Asked <span className="text-[#02C4A1]">Questions!</span>
  </h2>

  {/* FAQ Items */}
  <div className="mt-6 max-w-3xl mx-auto">
    <details className="border-b py-4">
      <summary className="cursor-pointer font-light text-lg flex justify-between items-center">
        Who can join The Orcas Valley?
        <span className="text-xl">+</span> 
      </summary>
      <p className="mt-2 text-gray-700 text-sm">
        Our services are tailored for early-stage startups and entrepreneurs with innovative ideas.
      </p>
    </details>

    <details className="border-b py-4">
      <summary className="cursor-pointer font-light text-lg flex justify-between items-center">
        How does the funding competition work?
        <span className="text-xl">+</span> 
      </summary>
      <p className="mt-2 text-gray-700 text-sm">
      Startups can apply to compete for up to $100K in funding through our 
angel investor network. The top-contenders will be picked over two seasonal
batches, one in the winter and another in the summer.
      </p>
    </details>

    <details className="border-b py-4">
      <summary className="cursor-pointer font-light text-lg flex justify-between items-center">
        Is the pitch deck generator easy to use?
        <span className="text-xl">+</span> 
      </summary>
      <p className="mt-2 text-gray-700 text-sm">
      Absolutely! Our AI-powered tool is intuitive and designed for 
      entrepreneurs of all experience levels.
      </p>
    </details>
  </div>
</section>

      {/* Footer */}
      <Footer />


    </div>
  );
}
