import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Blogs from "./components/Blogs/Blogs";
import LandingPage from "./components/LandingPage/LandingPage";
import OSProjects from "./components/OpenSource/OSProjects";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/os-projects" element={<OSProjects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
