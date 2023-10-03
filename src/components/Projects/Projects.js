import React from 'react'
import ProjectAPI from './ProjectAPI'
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function Projects() {
  const data = ProjectAPI;
  return (
    <>
      <motion.section class="teams" id="teams" initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
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
                          <img src={imgUrl} alt="projects" />
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

        <div class="projects-buttons">
          <Link to='/os-projects' class="learn-more">
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Explore my Contributions</span>
            </button>
          </Link>
        </div>
      </motion.section>
    </>
  )
}

export default Projects