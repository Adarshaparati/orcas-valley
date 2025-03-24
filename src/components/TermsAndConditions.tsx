import React from "react";
import logo from '../../src/assets/logo.png';
import Navbar from "./Navbar";
import Footer from "./Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
     <Navbar />

      {/* Hero Section */}
      <header className="relative text-white h-[85vh] flex items-center justify-start px-5 md:px-10">
  {/* Background Image */}
  <div className="absolute inset-0 px-5 md:px-10">
    <div
      className="w-full h-full bg-cover bg-center rounded-xl"
      style={{ backgroundImage: "url('/t&c.png')" }}
    ></div>
  </div>

  <div className="absolute inset-0 rounded-xl"></div>

  {/* Content */}
  <div className="relative z-10 flex items-center px-5 sm:px-10 lg:px-28 w-full mt-20 sm:mt-32 md:mt-44">
    <div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
        Terms and <br /> Conditions
      </h1>
    </div>
  </div>

  {/* Side Text (Vertical) */}
  <div className="absolute top-5 sm:top-10 left-7 sm:left-10 z-20 flex flex-col items-center text-gray-300 text-sm sm:text-lg tracking-widest">
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
      <div className="max-w-3xl mx-auto bg-white p-6  text-gray-900 mt-6">
      <p className="text-lg leading-relaxed font-light">
        This Terms and Conditions document (the <strong>“Agreement”</strong>) governs the use of 
        services provided by Orcas Valley Limited (<strong>“Company,” “we,” “us,” or “our”</strong>) through its platform, 
        including but not limited to access to The Orca Blueprint eBook, AI-powered pitch deck generator, 
        feedback services, and angel investment opportunities. By accessing or using any part of our services, 
        you (<strong>“User”</strong> or <strong>“Participant”</strong>) agree to be bound by these Terms. If you do not agree to these 
        <strong> Terms</strong>, you must not use the services.
      </p>
    </div>
    <div className="max-w-4xl mx-auto bg-white p-6  text-gray-900 mt-6 leading-relaxed">
      {/* Scope of Services */}
      <h2 className="text-lg font-medium mb-2">1. Scope of Services</h2>
      <p className="mb-4">
        <span className="font-light">1.1</span> <span className="font-light"> The Orcas Valley provides:</span> 
      </p>
      <ul className="list-disc list-inside mb-4 font-light">
        <li>The Orca Blueprint eBook: The art of building and scaling your startup.</li>
        <li>AI-powered tools for generating professional pitch decks.</li>
        <li>Feedback, scoring, and rating of submitted pitch decks.</li>
        <li>Opportunities for angel investment competitions conducted biannually.</li>
      </ul>
      <p className="mb-6 font-light">
        <span className="font-light">1.2</span><span className="font-light"> Participation in the angel investment competition is not guaranteed. </span>
        Access to tools does not guarantee funding, success, or other specific outcomes.
      </p>

      {/* Eligibility */}
      <h2 className="text-lg font-semibold mb-2">2. Eligibility</h2>
      <p className="mb-2">
        <span className="font-light">2.1</span> <span className="font-light"> Users must be 18 years or older to register and access the services.</span> 
      </p>
      <p className="mb-2">
        <span className="font-light">2.2</span> <span className="font-light"> Users are required to provide accurate and truthful information 
        during the registration and application process.</span> 
      </p>
      <p className="mb-6">
        <span className="font-light">2.3</span><span className="font-light">  The Orcas Valley reserves the right to deny access or terminate 
        accounts if false information is provided or if <strong>The Terms of Use</strong> are violated.</span> 
      </p>
      <h2 className="text-lg font-semibold mb-2">3. Payment and Fees</h2>
      <p className="mb-2">
        <span className="font-light">3.1</span> <span className="font-light">  All services require a one-time, upfront fee (Service Fee), which is non-refundable under any circumstances.</span> 
      </p>
      
      <p className="mb-2">
        <span className="font-light">3.2</span> <span className="font-light"> By completing the payment, the User acknowledges and agrees that:</span> 
        <ul className="list-disc list-inside mb-4 font-light">
        <li>The Service Fee covers access to The Orca Blueprint: The Art of Building and Scaling Your Startup eBook, the AI-powered pitch deck generator, rating services, and the opportunity to participate in angel investment evaluations.</li>
        <li>The Service Fee does not guarantee any specific outcome, including but not limited to successful funding, favorable feedback, success of the product, or a particular rating.</li>
      
      </ul>
      </p>
      <p>
        <span className="font-light">3.3</span><span className="font-light">   The Orcas Valley is not liable for service interruptions, delays, or other issues
caused by factors beyond its control, including but not limited to technical failures,
force majeure events, or third-party service providers.</span> 
<span className="font-light">3.4</span><span className="font-light">   TIf the User experiences an issue with accessing the eBook, tools, or services,
they must notify The Orcas Valley within 7 days of purchase. The Orcas Valley will make reasonable efforts to resolve the issue but shall not be obligated to provide a refund.</span> 
      </p>
      <p className="mb-6">
        <span className="font-light">3.5</span><span className="font-light">  Any disputes regarding the Service Fee or services provided must be raised in
writing to The Orcas Valley within 14 days of the issue arising. Failure to raise a
dispute within this period waives the User’s right to contest the matter.</span> 

      </p>
      <h2 className="text-lg font-semibold mb-2">4. Intellectual Property</h2>
      <p className="mb-2">
        <span className="font-light">4.1</span> <span className="font-light">  The eBook The Orca Blueprint and all related materials, including but not limited to designs, logos, AI tools, and feedback reports, are the exclusive property of the Orcas Valley and are protected under applicable copyright and intellectual property laws.</span> 
      </p>
      
      <p className="mb-2">
        <span className="font-light">4.2</span> <span className="font-light"> Users are granted a non-exclusive, non-transferable license to use the eBook solely for personal purposes.</span> 
        
      </p>
      <p className="mb-6">
        <span className="font-light">4.3</span><span className="font-light">   Users are strictly prohibited from copying, reproducing, distributing, modifying, selling, or attempting to commercialize the eBook or any related materials without the express written consent of The Orcas Valley.</span> 
<span className="font-light">4.4</span><span className="font-light">    Unauthorized use, distribution, or reproduction will result in legal action to protect The Orcas Valley rights.</span> 
      </p>
      <p>
       

      </p>
      <h2 className="text-lg font-semibold mb-2">5. Pitch Deck Submissions and Investment</h2>
      <p className="mb-2">
        <span className="font-light">5.1</span> <span className="font-light"> Pitch deck submissions are subject to review and scoring by The Orcas Valley or its appointed evaluators</span> 
      </p>
      
      <p className="mb-2">
        <span className="font-light">5.2</span> <span className="font-light"> Feedback and scoring are provided for informational purposes only and do not constitute advice or guarantees.</span> 
        
      </p>
      <p className="mb-6">
        <span className="font-light">5.3</span><span className="font-light">   Participation in the angel investment competition is contingent The Orcas Valley’s sole discretion, and investment decisions are final and binding.</span> 
<span className="font-light">5.4</span><span className="font-light">   Users acknowledge that submission does not guarantee funding or selection for investment opportunities, nor does it guarantee success or profit.</span> 
      </p>
      <h2 className="text-lg font-semibold mb-2">6. Disclaimer of Warranties</h2>
      <p className="mb-2">
        <span className="font-light">6.1</span> <span className="font-light"> The services, materials, and tools provided by The Orcas Valley are offered “as-is” and “as-available” without any express or implied warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</span> 
      </p>
      
      <p className="mb-2">
        <span className="font-light">6.2</span> <span className="font-light"> The Orcas Valley makes no representation or warranty regarding the accuracy, reliability, or completeness of feedback, scoring, or any information provided.</span> 
        
      </p>
      <p className="mb-6">
        <span className="font-light">6.3</span><span className="font-light"> The User acknowledges that all business, investment, and operational decisions are made independently, and The Orcas Valley is not liable for any losses or damages incurred.</span> 
<span className="font-light">6.4</span><span className="font-light">   The Orcas Valley is not responsible for the User’s inability to access or use the services due to technical issues, such as device compatibility, inadequate internet connection, or failure to meet platform requirements.</span> 
<span className="font-light">6.5</span><span className="font-light">  The Orcas Valley shall not be liable for any indirect, incidental, or consequential damages resulting from service interruptions, unavailability, or any perceived failure of the services to meet the User’s expectations.</span> 
      </p>
      <h2 className="text-lg font-semibold mb-2"> 7.Limitation of Liability</h2>
      <p className="mb-2">
        <span className="font-light">7.1</span> <span className="font-light"> To the fullest extent permitted by law, The Orcas Valley shall not be liable for any indirect, incidental, or consequential damages, including but not limited to loss of profits, loss of data, or business interruption.</span> 
      </p>
      
      <p className="mb-6">
        <span className="font-light">7.2</span> <span className="font-light"> The Orcas Valley’s total liability for any claims arising under this Agreement shall not exceed the Service Fee paid by the User.</span> 
        
      </p>

    
      <h2 className="text-lg font-semibold mb-2">8. Dispute Resolution</h2>
      <p className="mb-2">
        <span className="font-light">8.1</span> <span className="font-light">In the event of a dispute arising from or relating to this Agreement, the User agrees to first attempt resolution through good-faith negotiations with The Orcas Valley.</span> 
      </p>
      
      <p className="mb-2">
        <span className="font-light">8.2</span> <span className="font-light">  If the dispute cannot be resolved amicably within 30 days of written notice by either party, the dispute shall be submitted to binding arbitration under the rules of the London Court of International Arbitration (LCIA).</span> 
        
      </p>
      <p className="mb-6">
        <span className="font-light">8.3</span><span className="font-light">  The arbitration shall take place in London, England, and the language of arbitration shall be English.</span> 
<span className="font-light">8.4</span><span className="font-light">   The decision of the arbitrator shall be final and binding on both parties, and judgment may be entered in any court of competent jurisdiction.</span> 
<span className="font-light">8.5</span><span className="font-light"> This Dispute Resolution clause does not prevent The Orcas Valley from seeking injunctive relief or equitable remedies in cases of intellectual property infringement or breach of confidentiality obligations.</span> 
      </p>
      <h2 className="text-lg font-semibold mb-2">9. Confidentiality</h2>
      <p className="mb-2">
        <span className="font-light">9.1</span> <span className="font-light"> Confidential Information: For the purposes of this Agreement, &’’Confidential
        Information”; includes but is not limited to:</span> 
        <ul className="list-disc list-inside mb-4 font-light">
        <li> The eBook (The Orca Blueprint: The Art of Building and Scaling Your Startup), AI tools, feedback reports, scoring methodologies, and other proprietary materials provided by The Orcas Valley.</li>
        <li>Information submitted by the User, including but not limited to pitch decks, business plans, and financial projections.</li>
        <li>Any non-public information shared between the User and The Orcas Valley in connection with the services.</li>
      
      </ul>
      </p>
      
      <p className="mb-2">
        <span className="font-light">9.2</span> <span className="font-light">Obligations of the User:</span> 
        <ul className="list-disc list-inside mb-4 font-light">
        <li> The User agrees to keep The Orcas Valley’s Confidential Information private and not disclose it to any third party without prior written consent.</li>
        <li>The User agrees not to use The Orcas Valley’s Confidential Information for purposes other than those explicitly outlined in this Agreement.</li>
        
      
      </ul>
      </p>
      <p>
        <span className="font-light">9.3</span><span className="font-light">  Obligations of The Orcas Valley:</span> 
        <ul className="list-disc list-inside mb-4 font-light">
        <li> The Orcas Valley agrees to maintain the confidentiality of any non-public information submitted by the User, except where disclosure is required by law, court order, or regulatory authority.</li>
        <li> The Orcas Valley will take reasonable measures to protect User information against unauthorized access, disclosure, or misuse.</li>
        
      
      </ul>
<span className="font-light">9.4</span><span className="font-light">   Exclusions:</span> 
<ul className="list-disc list-inside mb-4 font-light">
        <li>  Confidential Information does not include information that is or becomes publicly available through no fault of the receiving party; was already known to the receiving party prior to disclosure; and is independently developed by the receiving party without reference to the disclosed information</li>
        
      
      </ul>
<span className="font-light">9.5</span><span className="font-light">  Duration of Obligations:.</span> 
<ul className="list-disc list-inside mb-4 font-light">
        <li>  The obligations under this clause shall survive the termination of this Agreement for a period of one (1) year or until the information ceases to qualify as Confidential Information, whichever occurs first.</li>
        
      
      </ul>
      <span className="font-light mb-6">9.6</span><span className="font-light">  Duration of Obligations:.</span> 
<ul className="list-disc list-inside mb-4 font-light">
        <li>  Any unauthorized use or disclosure of Confidential Information constitutes a material breach of this Agreement.</li>
        <li>  The Orcas Valley reserves the right to seek injunctive relief, damages, or other appropriate remedies in the event of a breach.</li>
        
      
      </ul>
      </p>
      <h2 className="text-lg font-semibold mb-2">10. Indemnification</h2>
      <p className="mb-6">
      <span className="font-light"> 10.1 The User agrees to indemnify and hold harmless The Orcas Valley, its directors, officers, employees, and agents from any claims, damages, or losses arising from the User’s breach of this Agreement, misuse of the services, or violation of applicable laws</span> 
      </p>
      

      <h2 className="text-lg font-semibold mb-2">11. Privacy and Data Protection</h2>
      <p className="mb-6">
        <span className="font-light">11.1</span> <span className="font-light">By using the services, the User consents to the collection, processing, and storage of their data as outlined in the Privacy Policy.</span> 
      </p>
      
    
     
      <h2 className="text-lg font-semibold mb-2">12. Force Majeure</h2>
      <p className="mb-6">
        <span className="font-light">12.1</span> <span className="font-light">  The Orcas Valley shall not be held liable for delays or non-performance caused by events beyond its reasonable control, including but not limited to acts of God, natural disasters, technical failures, or government actions</span> 
      </p>
      
   
      <h2 className="text-lg font-semibold mb-2">13. Governing Law and Jurisdiction</h2>
      <p className="mb-2">
        <span className="font-light">13.1</span> <span className="font-light">This Agreement shall be governed by the laws of England.</span> 
      </p>
      
      <p className="mb-6">
        <span className="font-light">13.2</span> <span className="font-light">  Any disputes arising from this Agreement shall be subject to the exclusive jurisdiction of the courts of England</span> 
        
      </p>
      <h2 className="text-lg font-semibold mb-2">14. Amendments</h2>
      <p className="mb-2">
        <span className="font-light">14.1</span> <span className="font-light">The Orcas Valley reserves the right to modify or update these Terms at any time</span> 
        <p className="mb-6">
        <span className="font-light">14.2</span> <span className="font-light">  Users will be notified of material changes, and continued use of the services constitutes acceptance of the revised Terms.</span> 
      </p>
      </p>
    
    </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
