import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";  
import Exam from "./Pages/Exam";   
import Motivation from "./Pages/Motivation";   
import ScrollToTop from "./Pages/ScrollToTop"; 
import Contact from "./Pages/Contact";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />   
        <Route path="/exam" element={<Exam />} /> 
        <Route path="/motivation" element={<Motivation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
