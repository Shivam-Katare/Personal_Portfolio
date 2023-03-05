import React from 'react'
import "./AboutMe.css"
import { TypeAnimation } from 'react-type-animation';
import NavBar from '../NavBar/NavBar';

function AboutMe() {
  return (
    <>
      <NavBar />
      <section class="about" id="about">
        <div class="max-width">
          <h2 class="title">About me</h2>
          <div class="about-content">
            <div class="column left">
              <h3 class="education">Education/Work</h3>
              <ul class="edu-list" id='style-3'>
                <li class="edu-date-list">July 2022 - Present</li>
                <p class="edu-para">React JS Developer at <strong>AccuKnox</strong></p>

                <li class="edu-date-list">August 2022 - October 2022</li>
                <p class="edu-para"><a className='achive-link inverted-7' href="https://drive.google.com/file/d/1-2QekibE9dqt0JsiOZ997jW_YvUFfxrv/view?usp=sharing">SSOC Open Source Contributer</a></p>

                <li class="edu-date-list">April 2022 - Present</li>
                <p class="edu-para">Contributer at <strong>ReactPlay</strong></p>

                <li class="edu-date-list">March 2022 - November 2022</li>
                <p class="edu-para"><a className='achive-link' href="https://drive.google.com/file/d/1U7nVz77ck-vBOacGkrRMTQPYLBr_s4hd/view?usp=share_link">Udemy Web Development & Web3 Course</a></p>

                <li class="edu-date-list">September 2022</li>
                <p class="edu-para"><a className='achive-link' href="https://www.showwcase.com/thread/46502">ShowwCase GDSAugust Blogging Winner</a></p>

                <li class="edu-date-list">January 2023</li>
                <p class="edu-para"><a className='achive-link' href="https://www.showwcase.com/show/25223/dev-elevate-silver-winners">ShowwCase Dev Elevate Silver Winner</a></p>

                <li class="edu-date-list">April 2020 - June 2020 </li>
                <p class="edu-para">Certified by TCS ION</p>

                <li class="edu-date-list">June 2019 - September 2022</li>
                <p class="edu-para">Bachelor in Computer Application</p>

                <li class="edu-date-list">April 2018 - June 2019</li>
                <p class="edu-para">Class 12th</p>

              </ul>
            </div>
            <div class="column right">
              <div class="text">I'm Shivam and I'm a <span class="typing-2"><TypeAnimation
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
              /></span></div>
              <p className='my-skills' id='style-3'>Hello there 👋! My name is Shivam Katare and I'm a <b className='about-text-border'>self-taught web developer</b> from India. My passion lies in Web Development, contributing to "Open Source" projects, and writing "Technical Blogs."
                <br /><br />
                I specialize in using <b className='about-text-border'>MERN stack</b> tools to create numerous projects in both front-end and back-end with <b className='about-text-border'>JavaScript</b>. Collaborating with team members is what I enjoy the most, as it opens up new avenues for exploring ideas and innovative solutions.
                <br /><br />
                I pride myself on creating <b className='about-text-border'>efficient, user-friendly, and optimal web solutions</b> that can be applied to real-world projects. I love to experiment with new ideas, always excited to try out new things, and never shy away from exploring new knowledge.
                <br /><br />
                With <b className='about-text-border'>2 years of professional experience</b> and <b className='about-text-border'>4 years of building projects with JS</b>, I have honed my skills to deliver high-quality solutions to clients. Additionally, I have <b>1+ year of experience contributing to open-source projects</b> which has given me a sense of fulfillment and a strong desire to continue giving back to the community.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe