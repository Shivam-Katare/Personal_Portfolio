import React, { useEffect, useRef } from 'react'
import "./Skills.css";
import { animate, motion } from "framer-motion";
import { SiJavascript, SiTypescript, SiPython, SiNextdotjs, SiMaterialdesign, SiJquery, SiNodedotjs, SiExpress, SiD3Dotjs, SiSass, SiTailwindcss, SiBootstrap, SiFirebase, SiMongodb, SiMysql, SiStorybook, SiCypress, SiJest, SiDocker, SiKubernetes, SiJira, SiGithub, SiVercel, SiNetlify } from "react-icons/si";
import { FaJava, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { gsap, Power3, Power2 } from 'gsap';
import { Link } from 'react-router-dom';

function Skills() {

  let programmingSkills = useRef(null);
  let libraries = useRef(null);
  let databases = useRef(null);
  let testing = useRef(null);
  let tools = useRef(null);
  let platforms = useRef(null);

  useEffect(() => {
    const animateSkills = (ref, delay) => {
      gsap.from(ref, 0.8, { opacity: 0, x: 5, ease: Power3.easeOut, translateX: 12, delay });
      gsap.to(ref, 0.8, { opacity: 1, x: 5, ease: Power2.easeIn, translateX: 12, delay });
    };

    animateSkills(programmingSkills, 0.2);
    animateSkills(libraries, 0.4);
    animateSkills(databases, 0.6);
    animateSkills(testing, 0.8);
    animateSkills(tools, 1);
    animateSkills(platforms, 1.2);
  }, []);

  return (
    <>
      <motion.section class="skills" id="skills" data-scroll-section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <div class="max-width">
          <h2 class="title">My skills</h2>
          <div class="skills-content">
            <div class="column left">
              <div class="text">My creative skills & experiences.</div>
              <p>As a passionate web developer with a love for <span class="skill-high">"open-source projects</span>
                and <span class="skill-high">"technical blogging,"</span>.
                I have gained expertise in utilizing JavaScript for both frontend and backend development.
                I have a proven track record of success in creating efficient, user-friendly, and effective projects
                using the <span class="skill-high">MERN stack.</span> My goal is to apply my skills and knowledge to <span
                  class="skill-high">"Real World" projects,</span> constantly striving to provide optimal web solutions.
                I am <span class="underlined underline-clip">Confident</span> that, I am a valuable asset to any team and
                would make a great fit for your
                <span class="underlined underline-clip"> Organization.</span>
              </p>
            </div>
            <div class="column right">
              <div class="bars">
                <div class="info">
                  Languages:
                </div>
                <div ref={programmingSkillsRef => programmingSkills = programmingSkillsRef} class="line html" style={{ fontSize: "40px" }}>
                  <SiJavascript /> <SiTypescript /> <SiPython /> <FaJava /> <FaHtml5 /> <FaCss3Alt />
                </div>
              </div>
              <div class="bars">
                <div class="info">
                  Libraries/Frameworks:
                </div>
                <div ref={librariesRef => libraries = librariesRef} class="line css" style={{ fontSize: "40px" }}>
                  <FaReact /> <SiNextdotjs /> <SiMaterialdesign /> <SiJquery /> <SiNodedotjs /> <SiExpress /> <SiD3Dotjs /> <SiSass /> <SiTailwindcss /> <SiBootstrap />
                </div>
              </div>
              <div class="bars">
                <div class="info">
                  DataBases:
                </div>
                <div ref={databasesRef => databases = databasesRef} class="line js" style={{ fontSize: "40px" }}>
                  <SiFirebase /> <SiMongodb /> <SiMysql />
                </div>
              </div>
              <div class="bars">
                <div class="info">
                  Testing:
                </div>
                <div ref={testingRef => testing = testingRef} class="line js" style={{ fontSize: "40px" }}>
                  <SiStorybook /> <SiCypress /> <SiJest />
                </div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>Tools:</span>
                </div>
                <div ref={toolsRef => tools = toolsRef} class="line php" style={{ fontSize: "40px" }}>
                  <SiDocker /> <SiKubernetes /> <SiJira /> <SiGithub />
                </div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>Platforms:</span>
                </div>
                <div ref={platformsRef => platforms = platformsRef} class="line php" style={{ fontSize: "40px" }}>
                  <SiVercel /> <SiNetlify />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="skills-buttons">
          <Link to='/projects' class="learn-more">
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Explore my Projects</span>
            </button>
          </Link>
        </div>
      </motion.section>
    </>
  )
}

export default Skills