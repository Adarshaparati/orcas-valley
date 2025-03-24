import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import "./index.css";
import AboutUs from "./components/About";
import Startup from "./components/Startup";
import StartupStudio from "./components/StartupStudio"
import ContactUs from "./components/ContactUs"
import TermsAndConditions from "./components/TermsAndConditions"
import PrivacyPolicy from "./components/PrivacyPolicy"

// Ensure your root element exists in public/index.html with id="root"
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/startup-studio" element={<StartupStudio />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
