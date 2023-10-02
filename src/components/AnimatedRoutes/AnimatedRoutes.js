import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from '../LandingPage/LandingPage';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import OSProjects from '../OpenSource/OSProjects';
import Blogs from '../Blogs/Blogs';
import Projects from '../Projects/Projects';

import { AnimatePresence } from 'framer-motion';
import Contact from '../Contact/Contact';
import Review from '../OpenSource/Review';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<LandingPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/os-projects" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes