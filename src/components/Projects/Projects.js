import React from 'react'
import NavBar from '../NavBar/NavBar';
import ProjectAPI from './ProjectAPI'
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
function Projects() {
  const data = ProjectAPI;
  return (
    <>
      <NavBar />
      <section class="teams" id="teams">
        <div class="max-width">
          <h2 class="title">My Projects</h2>
          <div className='projects-contains'>
            <div class="carousel owl-carousel">
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

export default Projects