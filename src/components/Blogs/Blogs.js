import React from 'react'
import NavBar from '../NavBar/NavBar';
import "./Blogs.css"
import BlogsAPI from './BlogsAPI'


function Blogs() {
  const data = BlogsAPI;
  return (
    <>
      <NavBar />
      <section class="services" id="services">
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
        </div>
      </section>



      {/* <div className="Article-Contains">
        <article class="card">
          <header class="card__thumb">
            <a href="#"><img src="" /></a>
          </header>
          <date class="card__date">
            <span class="card__date__day">11</span>
            <br />
            <span class="card__date__month">Jan</span>
          </date>
          <div class="card__body">
            <div class="card__category"><a href="#">pet</a></div>
            <h2 class="card__title"><a href="#">title</a></h2>
            <div class="card__subtitle">an ice cream sundae party！</div>
            <p class="card__description">5. Pour the mixture into a non-stick container and then freeze overnight. Take treating your dog a step further by turning it into an ice cream sundae party!</p>
          </div>
          <footer class="card__footer">
            <span class="icon ion-clock"></span> 10 mins ago
            <span class="icon ion-chatbox"></span><a href="#"> 145 comments</a>
          </footer>
        </article>

        <article class="card">
          <header class="card__thumb">
            <a href="#"><img src="" /></a>
          </header>
          <date class="card__date">
            <span class="card__date__day">11</span>
            <br />
            <span class="card__date__month">Jan</span>
          </date>
          <div class="card__body">
            <div class="card__category"><a href="#">pet</a></div>
            <h2 class="card__title"><a href="#">title</a></h2>
            <div class="card__subtitle">an ice cream sundae party！</div>
            <p class="card__description">5. Pour the mixture into a non-stick container and then freeze overnight. Take treating your dog a step further by turning it into an ice cream sundae party!</p>
          </div>
          <footer class="card__footer">
            <span class="icon ion-clock"></span> 10 mins ago
            <span class="icon ion-chatbox"></span><a href="#"> 145 comments</a>
          </footer>
        </article>
      </div> */}

    </>
  )
}

export default Blogs