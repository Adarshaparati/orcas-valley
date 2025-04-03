import React from "react";
import backImage1 from '../../src/assets/learn-back.png'
import backImage2 from '../../src/assets/create-back.png'
import backImage3 from '../../src/assets/receive-back.png'
import backImage4 from '../../src/assets/connect1-back.png'
import group53 from '../../src/assets/Group 53.png'
import image1 from '../../src/assets/learn-front.png'
import image2 from '../../src/assets/create-front.png'
import image3 from '../../src/assets/receive-front.png'
import image4 from '../../src/assets/GetFunded.png'
import createback from '../../src/assets/createflip.png'
import receiveback from '../../src/assets/Receiveflip.png'
import getfundedback from '../../src/assets/GetFundedflip.png'
import learnback from '../../src/assets/Learnflip.png'
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
// import bgimage1 from "../../src/assets/StartUpAcc 1.png"
export default function StartupAccelerator() {
  const benefits = [
    {
      id: 1,
      front: image1,
      back: learnback,
      title: "Learn",
      description:
        "Gain insight through our eBook: The Orca Blueprint.",
    },
    {
      id: 2,
      front: image2,
      back: createback,
      title: "Create",
      description:
        "Create investor-ready pitch decks effortlessly.",
    },
    {
      id: 3,
      front: image3,
      back: receiveback,
      title: "Receive",
      description:
        "Receive professional feedback to refine your pitch.",
    },
    {
      id: 4,
      front: image4,
      back: getfundedback,
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
    Learn how to effectively launch and scale your startup,
    craft a winning pitch, and secure funding through our competitive angel investment rounds."
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
  <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-20 px-5 flex flex-col items-center text-gray-300 text-lg tracking-widest  sm:flex">
    <div className="border-l-2 border-gray-300 h-6 sm:h-10 mb-1 sm:mb-2"></div>
    <p className="flex flex-col text-center text-xs">
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
  className="py-12 px-6 sm:px-10 flex flex-col lg:flex-row items-center lg:justify-between gap-10"
>



  {/* Left Side: Styled Text-Based Content */}
  <div className="w-full lg:w-[28%] text-center lg:text-left lg:h-full">
    <h2 className="text-gray-700 text-xl sm:text-2xl font-light">Comprehensive Package</h2>
    <p className="text-[rgba(0,0,0,0.64)] text-3xl sm:text-5xl font-light leading-snug mt-3">
      A full-service <br className="hidden sm:block" /> package designed to
      <br />
      <span className="text-teal-500 font-light2">
        guide startups <br className="hidden sm:block" /> from ideation to funding.
      </span>
      
    </p>
    <p className="mt-4 text-lg">Just a one-time payment of $299—no hidden fees and no equity taken to join. Your startup success stays yours</p>

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
  <div className="w-full lg:w-[60%] flex lg:h-[80%] justify-center h-[80%]">
  <img 
    src={group53} 
    alt="Comprehensive Package Details" 
    className="w-full max-w-xs lg:h-[100%] sm:max-w-[80%] sm:h-[80%]  md:max-w-md md:h-full lg:max-w-[80%] justify-center "
  />
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
            <p className="text-xs sm:text-sm mt-4 ">{benefit.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


<section className="py-20 px-2 lg:px-6 text-center">
  {/* Main Heading */}
  <div className="w-full mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-center">
  {/* Left-Aligned Heading */}
  <h2 className="px-4 sm:px-8 text-2xl sm:text-3xl lg:text-4xl font-thin leading-tight flex-1">
    Ready to Learn, Build, <br className="hidden sm:block" /> Pitch, and 
    <span className="text-[#02C4A1]"> Get Funded?</span>
  </h2>

  {/* Right-Aligned Subheading */}
  {/* <p className="px-4 sm:px-8 mt-3 sm:mt-4 text-base sm:text-lg font-light text-black flex-1">
    For a one-time fee of <span className="font-medium">$[Amount]</span>, you’ll receive:
  </p> */}
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
{/* <div className="w-[20%] h-[32vh] bg-cover bg-center "
style={{backgroundImage: "url('/StartUpAcc 1.png')"}}
>

</div> */}
<div
// className="relative grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 sm:h-[100vh] md:h-[100vh] sm:w-[40%] md:w-[80%] gap-1 w-[100%] h-[40vh] mt-12
// sm:place-items-center md:place-items-center"
className="relative flex flex-col lg:flex-row w-[100%] h-[100vh] xs:[140vh] sm:w-[100%] sm:h-[150vh] md:w-[100%] md:h-[150vh]  gap-2 lg:w-full lg:h-[40vh] mt-12
  sm:items-center sm:justify-center md:items-center md:justify-center lg:justify-between xs:justify-center xs:items-center "

>
  {[
    {
      img1: vectorLeft1,
      img2: vectorLeft2,
      img3: vectorLeft3,
      bgimg:'/StartUpAcc 1.png',
      alignment : "absolute inset-0 flex   sm:mb-16 md:mx-16 xs:mb-6 lg:mt-10 lg:mx-16 items-center justify-center text-center  ",
      text: "The Orca Blueprint: A startup guide to building and scaling your business with expert insights.",
    },
    {
      img1: vectorCenter1,
      img2: vectorCenter2,
      img3: vectorCenter3,
      bgimg:'/StartUpAcc 2.png',
      alignment : "absolute inset-0 flex lg:items-center xs:mt-16 md:w-[70%] md:ml-16 md:mt-20 items-center lg:mt-16 lg:ml-10  pl-6 justify-center text-center",
      text: "Access to our AI-powered pitch deck generator that gets investors to say Yes.",
    },
    {
      img1: vectorRight1,
      img2: vectorRight2,
      img3: vectorRight3,
      bgimg:'/StartUpAcc 3.png',
      alignment : "absolute inset-0 flex sm:mb-16 md:mx-16 xs:mb-10  lg:mt-10 lg:mx-12 items-center justify-center text-center",
      text: "Get feedback, scores, and tailored angel investor connections to boost your funding success.",
    },
    {
      img1: vectorCenter1,
      img2: vectorCenter2,
      img3: vectorCenter3,
      bgimg:'/StartUpAcc 4.png',
      alignment : "absolute inset-0 flex lg:items-center md:w-[70%] md:ml-20 items-center mt-16 ml-6 lg:mx-10 justify-center text-center",
      text: "A chance to compete for angel investments by the Orcas Valley.",
    },
  ].map((feature, index) => (
<div className="relative flex sm:h-[25%] sm:w-[100%] md:h-[25%] md:w-[70%] justify-center lg:h-full  h-[25%] xs:w-[75%] w-full overflow-hidden sm:my-2 xs:my-2">
  {/* Layer Blur (Background) */}
  <img
    src={layerBlur}
    className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
    alt="Layer Blur"
  />

 
  <img
    src={feature.bgimg}
    className="absolute w-full min-h-full object-contain bg-center sm:w-[70%] sm:h-[10%] md:w-[80%] md:h-[90%] md:top-[7%] md:left-[10%]"

    alt="Outer Layer"
  />
    {/* <div
    className="absolute inset-0 bg-cover bg-center z-10 h-[70%] w-[70%] items-center"
    style={{ backgroundImage: `url("${feature.bgimg}")` }}
  /> */}
  <div className={feature.alignment}>
    <p className="text-gray-800 text-xs sm:text-base font-light lg:w-[100%] sm:w-[50%] lg:px-2 sm:px-20  lg:mt-6  xs:w-[50%] w-[100%] ">{feature.text}</p>
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

    <details className="border-b py-4">
      <summary className="cursor-pointer font-light text-lg flex justify-between items-center">
      What if I have no startup or business experience?
        <span className="text-xl">+</span> 
      </summary>
      <p className="mt-2 text-gray-700 text-sm">
      No problem. Orcas Valley is also built for beginners. We guide you step-by-step, starting from zero experience.
       </p>
    </details>

    <details className="border-b py-4">
      <summary className="cursor-pointer font-light text-lg flex justify-between items-center">
      Do I need a business idea before joining?      
       <span className="text-xl">+</span> 
      </summary>
      <p className="mt-2 text-gray-700 text-sm">
      Not at all. The Orca Blueprint will help you find and develop ideas that match your interests and goals.
      </p>
    </details>

    <details className="border-b py-4">
      <summary className="cursor-pointer font-light text-lg flex justify-between items-center">
      Can I still benefit if I’m just exploring entrepreneurship?

        <span className="text-xl">+</span> 
      </summary>
      <p className="mt-2 text-gray-700 text-sm">
      Absolutely. Our platform helps you explore entrepreneurship risk-free, so you can decide if it's right for you.
      </p>
    </details>
  </div>
</section>

      {/* Footer */}
      <Footer />


    </div>
  );
}
