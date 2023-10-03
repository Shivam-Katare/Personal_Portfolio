import React from 'react'
import ReactDom from 'react-dom'
import Markdown from 'react-markdown'
import './OSProject.css'
import { motion } from "framer-motion";
// import remarkGfm from 'remark-gfm'


function Review() {
  return (
    <>

      <motion.section class="teams" id="teams" initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <div class="max-width">
          <h2 class="title">My Open Source Contributions</h2>
          <div className='open-source-contributions'>
            {/* <Markdown>
              {markdown}

              # This is a comment.
            </Markdown> */}


            <h2 align="center" className='os-title' style={{ marginBottom: "12px", color: "black", background: "gray", borderRadius: "7px" }}>Being a part of a community and participating in Open Source projects brings me great joy.</h2>

            <hr style={{ marginBottom: "12px" }} />

            <div align="center" className="stats">
              <img src="https://streak-stats.demolab.com?user=Shivam-Katare&locale=en&mode=daily&theme=dracula&hide_border=false&border_radius=5" height="200" alt="streak graph" style={{ marginRight: "12px" }} />
              <img src="https://github-readme-stats.vercel.app/api/top-langs?username=Shivam-Katare&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false" height="200" alt="languages graph" style={{ marginRight: "12px" }} />
            </div>

            <hr style={{ marginTop: "12px", marginBottom: "12px", color: "#3cff37", border: "4px solid", borderRadius: "4px" }} />

            <img align="right" height="150" src="https://ik.imagekit.io/dnwefib6s4/Lilac%20Clean%20Modern%20Monogram%20Initial%20S%20Letter%20Logo.gif?updatedAt=1696231685153" />


            <div align="center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="50" alt="javascript logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="50" alt="typescript logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="50" alt="react logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="50" alt="html5 logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="50" alt="css3 logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="50" alt="python logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" height="50" alt="csharp logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" height="50" alt="bootstrap logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" height="50" alt="canva logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg" height="50" alt="d3js logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height="50" alt="docker logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height="50" alt="figma logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height="50" alt="firebase logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="50" alt="git logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="50" alt="github logo" style={{ background: "aliceblue", borderRadius: "27px" }} />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height="50" alt="java logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" height="50" alt="linux logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" height="50" alt="materialui logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="50" alt="mongodb logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="50" alt="mysql logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="50" alt="nodejs logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" height="50" alt="sass logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg" height="50" alt="storybook logo" />
              <img width="12" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" height="50" alt="tailwindcss logo" />
            </div>

            <hr style={{ marginTop: "12px", marginBottom: "12px", color: "#3cff37", border: "4px solid", borderRadius: "4px" }} />

            <div align="center" style={{display: "grid", width: "100%"}}>
              <a href="https://github.com/Shivam-Katare" target="_blank">
              <button class="btn">
                Checkout my GitHub Profile
              </button>
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Review