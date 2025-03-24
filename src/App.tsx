import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AboutUs from "./components/About";

const App: React.FC = () => {
  return (
    <Routes>
      {/* Route to the main company list page */}
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
};

export default App;
