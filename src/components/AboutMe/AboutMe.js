import React from 'react'
import "./AboutMe.css"
import { TypeAnimation } from 'react-type-animation';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import VideoPlayer from './VideoIntro';

function AboutMe() {
  return (
    <>
      <motion.section class="about" id="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div class="max-width" data-scroll-section>
          <h2 class="title">About me</h2>
          <div class="about-content">
            <motion.div class="column left" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1, ease: "linear" }}>
              <VideoPlayer />
            </motion.div>
            <div class="column right">
              <div class="text">I'm Shivam and I'm a <span class="typing-2"><TypeAnimation
                sequence={[
                  'Frontend Developer',
                  1000, // Waits 1s
                  'Technical Content Writer',
                  2000,
                  () => {
                    console.log('Done typing!');
                  }
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              /></span></div>
              <p className='my-skills' id='style-3'>Hello there 👋! My name is Shivam Katare, a <b className='about-text-border'>self-taught web developer</b> from India. My passion lies in Web Development, contributing to "Open Source" projects, and writing "Technical Blogs."
                <br /><br />
                I specialize in using <b className='about-text-border'>MERN stack</b> tools to create numerous projects in both front-end and back-end with <b className='about-text-border'>JavaScript</b>. Collaborating with team members is what I enjoy the most, as it opens up new avenues for exploring ideas and innovative solutions.
                <br /><br />
                I pride myself on creating <b className='about-text-border'>efficient, user-friendly, and optimal web solutions</b> that can be applied to real-world projects. I love to experiment with new ideas, always excited to try out new things, and never shy away from exploring new knowledge.
                <br /><br />
              </p>
            </div>
          </div>
        </div>

        <div class="blogs-buttons">
          <Link to="/skills" class="learn-more">
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Explore my Programming Skills</span>
            </button>
          </Link>

          <Link to="/blog" class="learn-more">
            <button class="about-learn-more">
              <span class="about-circle" aria-hidden="true">
                <span class="about-icon about-arrow"></span>
              </span>
              <span class="about-button-text">Explore my Technical Writing Skills</span>
            </button>
          </Link>
        </div>
      </motion.section>
    </>
  )
}

export default AboutMe