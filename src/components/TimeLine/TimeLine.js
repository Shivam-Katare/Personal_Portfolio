import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import NavBar from '../NavBar/NavBar';
import "./TimeLine.css";

const Timeline = () => {
  return (
    <>
      <div className='navbar-timeline'>
        <NavBar />
      </div>
      <div className='timeline-container' >
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(20 25 51)', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="March 18, 2023 - Present"
            iconStyle={{ background: "rgb(20 25 51)", color: 'black' }}
            icon=""
          >
            <h3 className="vertical-timeline-element-title">Technical Writer ✍</h3>
            <h4 className="vertical-timeline-element-subtitle"><a href="https://iapwe.org/" target="_blank" rel="noreferrer" style={{ color: "white", fontWeight: "bolder", textDecoration: "underline", marginTop: "9px" }}>
              IWAPE
            </a>
            </h4>
            <p>
              Selected as a Freelance technical writer at IWAPE Organization
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(0 153 98)', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="March 16, 2023 - March 19, 2023"
            iconStyle={{ background: 'rgb(0 153 98)', color: 'white' }}
            icon=""
          >
            <h3 className="vertical-timeline-element-title">👨‍🏫Tech Mentor at Fashion Tech Hackathon, MLH</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a href="https://www.kent.edu/fashion/fth" target="_blank" style={{ fontWeight: "bolder", textDecoration: "underline", marginTop: "9px" }}>
                Kent State University
              </a></h4>
            <p>
              Mentored students in the field of web development, and assisted them in their projects.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(255 97 97)', color: 'white' }}
            date="Feb 1, 2023 - March 5, 2023"
            iconStyle={{ background: 'rgb(255 97 97)', color: 'white' }}
            icon=""
          >
            <h3 className="vertical-timeline-element-title">3rd place at 2PlaysAMonth Hackathon 🏆</h3>
            <h4 className="vertical-timeline-element-subtitle">Hosted by <a href="https://reactplay.io/" target="_blank" style={{ fontWeight: "bolder", textDecoration: "underline", marginTop: "9px" }}>
              ReactPlay
            </a> and <a href="https://www.stack-stream.com/" target="_blank" style={{ fontWeight: "bolder", textDecoration: "underline", marginTop: "9px" }}>
                Stackstream
              </a></h4>
            <p>
              In this Hackathon, I build two projects with ReactJ JS and RestAPIs.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(36 59 78)', color: '#fff' }}
            date="January 2023"
            iconStyle={{ background: 'rgb(36 59 78)', color: '#fff' }}
            icon=""
          >
            <h3 className="vertical-timeline-element-title">Silver Prize Winner 🏆</h3>
            <h4 className="vertical-timeline-element-subtitle"><a href="https://www.showwcase.com/" target="_blank" style={{ color: "white", fontWeight: "bolder", textDecoration: "underline", marginTop: "9px" }}>
              ShowwCase
            </a></h4>
            <p>Winner of the blogging competition hosted by ShowwCase. I was on the list of silver prize winners for writing 2 technical blogs</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(255 180 12)', color: 'color' }}
            date="August 2023"
            iconStyle={{ background: 'rgb(255 180 12)', color: 'black' }}
            icon=""
          >
            <h3 className="vertical-timeline-element-title">1st Prize Winner of GDSAugust 🏆</h3>
            <h4 className="vertical-timeline-element-subtitle">Hosted by <a href="https://www.showwcase.com/" target="_blank" style={{ color: "black", fontWeight: "bolder", textDecoration: "underline", marginTop: "9px" }}>
              ShowwCase
            </a></h4>
            <p>GDSAugust was the blogging competition hosted by ShowwCase where I grab the first position by writing a blog on my developer journey.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(255 97 97)', color: 'white' }}
            date="June 2022 - August 2022"
            iconStyle={{ background: 'rgb(255 97 97)', color: 'white' }}
            icon=""
          >
            <h3 className="vertical-timeline-element-title">Contributor 🤝</h3>
            <h4 className="vertical-timeline-element-subtitle"><a href="https://drive.google.com/file/d/1-2QekibE9dqt0JsiOZ997jW_YvUFfxrv/view?usp=share_link" target="_blank" rel="noreferrer" style={{ color: "black", fontWeight: "bolder", textDecoration: "underline", marginTop: "9px" }}>
              Social Summer Of Code
            </a></h4>
            <p>I got picked for an awesome 3-month open-source program called SSOC! During this time, I had the opportunity to contribute to several amazing open-source projects with varying tech stacks. It was an incredible experience, and I learned so much along the way.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(14 130 210)', color: '#fff' }}
            date="July 2022 - Present"
            iconStyle={{ background: 'rgb(14 130 210)', color: '#fff' }}
            icon=""
          >
            <h3 className="vertical-timeline-element-title">React JS Developer 👨‍💻</h3>
            <h4 className="vertical-timeline-element-subtitle"><a href="https://www.accuknox.com/" target="_blank">
              AccuKnox
            </a></h4>
            <p>I got a job as a Frontend(React JS) Developer at a Cloud Security-based company. I worked with the frontend tech stack to maintain and add new functionalities using React, Redux, ReactQuery, Material UI, Sass, etc. And also worked with RestAPIs and integrated them into frontend</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(255, 180, 12)', color: '#fff' }}
            date="April 2022 - Present"
            iconStyle={{ background: 'rgb(255, 180, 12)', color: '#fff' }}
            icon=""
          >
            <h3 className="vertical-timeline-element-title">Contributor🤝</h3>
            <h4 className="vertical-timeline-element-subtitle"><a href="https://reactplay.io/" target="_blank" rel='noreferrer' style={{ color: "black", fontWeight: "bolder", textDecoration: "underline", marginTop: "9px" }}>
              ReactPlay
            </a></h4>
            <p>ReactPlay is an open-source community and I am one of the contributors to it.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Timeline;
