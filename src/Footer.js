import React from 'react';
import './Footer.css'; 

function Footer() {
    return(
        <div className="container">
      <footer className="footer">
        <div className="footer-top">
          <h2>GeekFoods</h2>
          <p className="footer-text">All rights reserved under Abhishek Pal.</p>
        </div>

        <div className="footer-links">
          <a href="/">About</a>
          <a href="/">Careers</a>
          <a href="/">Blog</a>
          <a href="/">History</a>
          <a href="/">Project</a>
          <a href="/">Services</a>
        </div>

        <div className="footer-socials">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com/inc_abhishek" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/inc-abhishek" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.github.com/abhirag955123" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </footer>
    </div>

    )
    
}
    export default Footer ;