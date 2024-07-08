import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Hero from "./pages/Hero.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Skills from "./pages/Skills.tsx";
import Contact from "./pages/Contact.tsx";
import Navbar from "./components/Navbar.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";

const App: React.FC = () => {
  const location = useLocation();
  const validRoutes = ["/", "/about", "/projects", "/skills", "/contact"];
  const isValidRoute = validRoutes.includes(location.pathname);

  return (
    <div className="app w-screen h-screen flex flex-col font-[Inter]">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {isValidRoute && <Navbar />}
    </div>
  );
};

export default App;
































