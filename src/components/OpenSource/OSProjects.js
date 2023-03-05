import React from 'react'
import "./OSProject.css"
import OSAPI from './OSAPI'
import NavBar from '../NavBar/NavBar';
import { FaGithub } from "react-icons/fa";

function OSProjects() {
  const data = OSAPI;
  return (
    <>
    <NavBar />
    <section class="teams" id="teams">
      <div class="max-width">
        <h2 class="title">My Open Source Contributions</h2>
        <div className='projects-contains'>
        <div class="carousel owl-carousel-os">
        {data.map((values) => {
            const { title, discription, liveLink, github, imgUrl } = values;
            return (
              <>
                <div class="card">
                  <i class="fa fa-external-link" aria-hidden="true"></i>
                  <a href={github} target="_blank"
                    class="card-github-links">
                    <FaGithub className='fa fa-github' />
                  </a>
                  <a class="project" href={liveLink} target="_blank">
                    <div class="box">
                      <img src={imgUrl} alt="2048 project" />
                      <div class="text">{title}</div>
                      <p className='project-dis'>{discription}
                      </p>
                    </div>
                  </a>
                </div>
              </>
            )
          })}
    </div>
    </div>
      </div>
    </section>
  </>
  )
}

export default OSProjects