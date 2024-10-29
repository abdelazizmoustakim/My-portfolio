import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar.jsx";
import Hero from "./Component/Home/Hero.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import Courses from "./Pages/Courses/Courses.jsx";
import Services from "./Pages/Services/Services.jsx";
import Resume from "./Pages/Resume/Resume.jsx";
import Writing from "./Pages/Writing/Writing.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/writing" element={<Writing />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
