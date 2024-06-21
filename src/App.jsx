import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes } from "react-router-dom";
import { About } from "./components/pages/About ";
import { Contact } from "./components/pages/Contact";
import { Home } from "./components/pages/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Routes path="/about" element={<About />} />
        <Routes path="/contact" element={<Contact />} />
        <Routes path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;





