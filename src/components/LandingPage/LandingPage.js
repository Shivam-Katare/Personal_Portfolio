import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import { TypeAnimation } from 'react-type-animation';
import NavBar from '../NavBar/NavBar';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
function LandingPage() {

  // const [typed, setTyped] = useState(null);

  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const scrollUpBtn = document.querySelector('.scroll-up-btn');

    if (scrollUpBtn) {
      scrollUpBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    window.addEventListener('scroll', function () {
      // sticky navbar on scroll script
      if (this.scrollY > 20) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
      // scroll-up button show/hide script
      if (scrollUpBtn && this.scrollY > 500) { // add a check for null
        scrollUpBtn.classList.add('show');
      } else {
        scrollUpBtn.classList.remove('show');
      }
    });

    const menuItems = document.querySelectorAll('.navbar .menu li a[href^="#"]');
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', function () {
        const target = document.querySelector(this.hash);
        window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
      });
    });

    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', function () {
      navbar.querySelector('.menu').classList.toggle('active');
      this.querySelector('i').classList.toggle('active');
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="background-shapes"></div>
      {/* home section start */}
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hey There, I am</div>
            <div className="text-2">Shivam</div>
            <div className="text-3">And I'm a  <TypeAnimation
              sequence={[
                'FullStack Web-Developer',
                1000, // Waits 1s
                'Technical Content Writer',
                2000, // Waits 2s
                'Open Source Contributer',
                2000,
                "DevOps Enthusiast",
                2000,
                "Learner",
                2000,
                () => {
                  console.log('Done typing!');
                }
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            /></div>
            <a href="https://drive.google.com/file/d/15coOjDDgKy0TZD5ehbqfeKVihP0EW7OF/view?usp=share_link" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutMe />

      {/* Skills */}
      <Skills />

      {/* Contact */}
      <Contact />
    </>
  );
}

export default LandingPage;
