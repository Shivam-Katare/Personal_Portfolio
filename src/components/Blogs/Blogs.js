import React from 'react'
import "./Blogs.css"
import BlogsAPI from './BlogsAPI'
import { motion } from "framer-motion";

function Blogs() {
  const data = BlogsAPI;
  return (
    <>
      <motion.section data-scroll-section class="services" id="services" initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <div class="max-width">
          <h2 class="title">My Recent Blogs</h2>
          <div class="serv-content">
            <div className='contains-blogs-list'>
              {data.map((values) => {
                const { title, discription, imgUrl, date, paraTwo, liveBlogLink } = values;

                return (
                  <>
                    <article class="blogs-card">
                      <header class="card__thumb">
                        <a href={liveBlogLink} target="_blank"><img src={imgUrl} /></a>
                      </header>
                      <div class="card__body">
                        <div class="card__category"><a href="#">{date}</a></div>
                        <h2 class="card__title"><a href="#">{title}</a></h2>
                        <div class="card__subtitle">{paraTwo}</div>
                        <p class="card__description">{discription}</p>
                      </div>
                      <footer class="blogs-card__footer">
                        <span class="icon ion-clock"></span>
                        <span class="icon ion-chatbox"></span><a href="#"></a>
                      </footer>
                    </article>
                  </>
                )
              })}
            </div>
          </div>

          <div class="blogs-buttons">
            <a href='https://shivamkatareblog.hashnode.dev/' target='_blank' class="learn-more">
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Explore my Hashnode Blogs</span>
            </button>
            </a>

            <a href='https://shivam-katare.showwcase.com/shows' target='_blank' class="learn-more">
              <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Explore my ShowwCase Blogs</span>
            </button>
            </a>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Blogs