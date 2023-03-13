import React from 'react'
import "./Contact.css"
import DeveloperImage from "../images/developerImage.png";

function Contact() {
  return (
    <>
      <section class="contact" id="contact">
    <div class="max-width">
      <h2 class="title">Contact me</h2>
      <div class="contact-content">
        <div class="column left">
          <div class="text">Get in Touch</div>
          <p>I love to <span class="connect">learn new things</span> and share them with others. That's why I'm always <span class="connect">open to connect</span>
             with people who share my passion for learning and creating.
             You can find me on these platforms where I post my projects, insights and tips.</p>
          <div class="icons">
            <div class="row">
              <i class="fas fa-globe"></i>
              <div class="info">
                <a href="https://www.showwcase.com/shivam-katare" class="head" target="_blank">ShowwCase</a>
              </div>
            </div>
            <div class="row">
              <i class="fa fa-twitter-square"></i>
              <div class="info">
                <a href="https://twitter.com/Shivamkatare_27" class="head" target="_blank">Twitter</a>
              </div>
            </div>
            <div class="row">
              <i class="fa fa-github"></i>
              <div class="info">
                <a href="https://github.com/Shivam-Katare" class="head" target="_blank">GitHub</a>
              </div>
            </div>
            <div class="row">
              <i class="fa fa-linkedin-square"></i>
              <div class="info">
                <a href="https://www.linkedin.com/in/shivam-katare-aa80b218b/" class="head" target="_blank">LinkedIn</a>
              </div>
            </div>
            <div class="row">
              <i class="fa fa-compass"></i>
              <div class="info">
                <a href="https://hashnode.com/@ShivamKatare" class="head" target="_blank">Hashnode</a>
              </div>
            </div>
            <div class="row">
              <i class="fa fa-envelope"></i>
              <div class="info">
                <a href="mailto:katare27451@gmail.com" class="head">Email</a>
              </div>
            </div>
          </div>
        </div>
        <div class="column right">
          <img src={DeveloperImage} class="me" />
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Contact