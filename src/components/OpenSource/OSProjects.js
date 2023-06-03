import React from 'react'
import "./OSProject.css"
import OSAPI from './OSAPI'
import { motion } from "framer-motion";

function OSProjects() {
  const data = OSAPI;
  return (
    <>
      <motion.section class="teams" id="teams" initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <div class="max-width">
          <h2 class="title">My Open Source Contributions</h2>
          <div className='projects-contains'>
            <div class="carousel owl-carousel-os">
              {data.map((values) => {
                const { title, discription, liveLink, github, imgUrl } = values;
                return (
                  <>
                    <div class="card">
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
      </motion.section>
    </>
  )
}

export default OSProjects