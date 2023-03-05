import React from 'react'
import NavBar from '../NavBar/NavBar';
import "./Skills.css";

function Skills() {
  return (
    <>
      <NavBar />
      <section class="skills" id="skills">
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
                <span class="underlined underline-clip">Organization.</span>
              </p>
            </div>
            <div class="column right">
              <div class="bars">
                <div class="info">
                  Languages:
                </div>
                <div class="line html">
                  JavaScript, TypeScript, Python, Java, Bash, HTML5, CSS3
                </div>
              </div>
              <div class="bars">
                <div class="info">
                  Libraries/Frameworks:
                </div>
                <div class="line css">
                  React JS, Next JS, Materialize, jQuery, Node, Express, D3, Sass, Tailwind CSS, Lodash, Bootstrap
                </div>
              </div>
              <div class="bars">
                <div class="info">
                  DataBases:
                </div>
                <div class="line js">
                  Firebase, MongoDB, MySQL, Nhost
                </div>
              </div>
              <div class="bars">
                <div class="info">
                  Testing:
                </div>
                <div class="line js">
                  StoryBook, React Testing Library, Jest
                </div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>Tools:</span>
                </div>
                <div class="line php">
                  Docker, Kubernates, Jira, Notion, Git, CI/CD
                </div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>Platforms:</span>
                </div>
                <div class="line php">
                  Vercel, Netlify
                </div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>More Things I DO</span>
                </div>
                <div class="line mysql">
                  DSA, Open Source Projects, Technical Writing, Designing(Figma)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills