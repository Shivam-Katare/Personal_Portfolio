import React, {useState, useEffect} from 'react'
import { BiAlignMiddle } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";
import { Link } from 'react-router-dom';

function NavBar() {
  
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const scrollUpBtn = document.querySelector('.scroll-up-btn');

    if (scrollUpBtn) {
      scrollUpBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    window.addEventListener('scroll', function () {
      // sticky navbar on scroll script
      if (this.scrollY > 20) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
      // scroll-up button show/hide script
      if (scrollUpBtn && this.scrollY > 500) { // add a check for null
        scrollUpBtn.classList.add('show');
      } else {
        scrollUpBtn.classList.remove('show');
      }
    });

    const menuItems = document.querySelectorAll('.navbar .menu li a[href^="#"]');
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', function () {
        const target = document.querySelector(this.hash);
        window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
      });
    });

    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', function () {
      navbar.querySelector('.menu').classList.toggle('active');
      this.querySelector('i').classList.toggle('active');
    });
  }, []);
  return (
   <>
         <nav className="navbar">
        <div className="max-width">
          <div className="logo"><a href="/">Shivam<span>Katare</span></a></div>
          <ul className={`menu ${isActive ? 'active' : ''}`}>
            <li><Link to="/" className="menu-btn">Home</Link></li>
            <li><Link to="/about" className="menu-btn">About</Link></li>
            <li><Link to="/blogs" className="menu-btn">Blog</Link></li>
            <li><Link to="/skills" className="menu-btn">Skills</Link></li>
            <li><Link to="/projects" className="menu-btn">Projects</Link></li>
            <li><Link to="/os-projects" className="menu-btn">OS Contribution</Link></li>
            <li><Link to="/contact" className="menu-btn">Connect</Link></li>
          </ul>
          <div className="menu-btn" onClick={handleMenuClick}>
          {isActive ? <GiCancel /> : <BiAlignMiddle />}
        </div>
        </div>
      </nav>
   </>
  )
}

export default NavBar;
