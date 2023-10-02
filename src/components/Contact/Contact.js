import React from 'react'
import "./Contact.css"
import DeveloperImage from "../images/developerImage.png";
import { motion } from "framer-motion";
import { SiGithub, SiGmail, SiHashnode, SiLinkedin } from 'react-icons/si';
import { FaGlobe,  } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";

function Contact() {
  return (
    <>
      <motion.section data-scroll-section class="contact" id="contact" initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <div class="max-width">
          <h2 class="title" id='#connect'>Contact me</h2>
          <div class="contact-content">
            <div class="column left">
              <div class="text">Get in Touch</div>
              <p>I love to <span class="connect">learn new things</span> and share them with others. That's why I'm always <span class="connect">open to connect</span>
                with people who share my passion for learning and creating.
                You can find me on these platforms where I post my projects, insights and tips.</p>
              <div class="icons">
                <div className='contact-footer-links'>
                  <div className='icon-links'>
                    <a href='https://twitter.com/Shivamkatare_27' target='_blank'><RiTwitterXFill style={{ color: "black", background: "white", borderRadius: "6px" }} /></a>
                  </div>
                  <div className='icon-links'>
                    <a href="https://www.linkedin.com/in/shivam-katare-aa80b218b/" target='_blank'><SiLinkedin style={{ color: "#0595fa" }} /></a>
                  </div>
                  <div className='icon-links'>
                    <a href="https://github.com/Shivam-Katare" target='_blank'><SiGithub color='white' /></a>
                  </div>
                  <div className='icon-links'>
                    <a href="https://www.showwcase.com/shivam-katare" target='_blank'><FaGlobe color='white' /></a>
                  </div>
                  <div className='icon-links'>
                    <a href="https://hashnode.com/@ShivamKatare" target='_blank'><SiHashnode color='white' /></a>
                  </div>
                  <div className='icon-links'>
                    <a href="mailto:katare27451@gmail.com" target='_blank'><SiGmail color='red' /></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="column right" style={{zIndex: 100}}>
              <img src={DeveloperImage} class="me" />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Contact