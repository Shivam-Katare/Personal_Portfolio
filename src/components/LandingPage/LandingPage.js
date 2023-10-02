import React, { useEffect, useRef } from 'react';
import './LandingPage.css';
import { TypeAnimation } from 'react-type-animation';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import { gsap, Power3, Power2 } from 'gsap';
import { motion } from "framer-motion";
import LocomotiveScroll from 'locomotive-scroll';

function LandingPage() {
  const scroll = new LocomotiveScroll();
  const target = document.querySelector('#home');

  scroll.scrollTo(target);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');

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

  let intro = useRef(null);
  let intro2 = useRef(null);
  let intro3 = useRef(null);

  useEffect(() => {
    const animateIntro = (ref, delay) => {
      gsap.from(ref, 0.8, { opacity: 0, x: 5, ease: Power3.easeOut, translateX: 12, delay });
      gsap.to(ref, 0.8, { opacity: 1, x: 5, ease: Power2.easeIn, translateX: 12, delay });
    };

    animateIntro(intro, 0);
    animateIntro(intro2, 0.2);
    animateIntro(intro3, 0.4);
  }, []);

  return (
    <>
      <div data-scroll-container>
        <div className="background-shapes"></div>
        {/* home section start */}
        <motion.section
          data-scroll-section
          className="home"
          id="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="max-width">
            <div className="home-content">
              <div ref={introRef => intro = introRef} className="text-1">Hey There, I am</div>
              <div ref={intro2Ref => intro2 = intro2Ref} className="text-2">Shivam</div>
              <div ref={intro3Ref => intro3 = intro3Ref} className="text-3">
                And I'm a{' '}
                <TypeAnimation
                  sequence={[
                    'Frontend Developer',
                    1000, // Waits 1s
                    'Technical Content Writer',
                    2000, // Waits 2s
                    'Open Source Contributer',
                    2000,
                    'DevOps Enthusiast',
                    2000,
                    'Learner',
                    2000,
                    () => {
                      console.log('Done typing!');
                    },
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </div>
              <a href="https://resume.showwcase.com/shivam-katare.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <AboutMe />

        {/* Skills */}
        <Skills />

        {/* Contact */}
        <Contact />
      </div>
    </>
  );
}

export default LandingPage;
