import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";  
import Exam from "./Pages/Exam";   
import Syllabus from "./Pages/Syllabus";  
import ScrollToTop from "./Pages/ScrollToTop"; 

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />   
        <Route path="/exam" element={<Exam />} /> 
        <Route path="/syllabus" element={<Syllabus />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
