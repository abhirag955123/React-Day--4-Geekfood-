import React from "react";
import './navbar.css';

function Navbar() {
    return(
        <div className="container">
        <header className="header">
          <div className="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play-circle">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16"></polygon>
            </svg>
            <h1>GeekFoods</h1>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/quote">Quote</a></li>
              <li><a href="/resturants">Restaurants</a></li>
              <li><a href="/foods">Foods</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <button className="get-started-btn">Get started</button>
        </header>
        </div>

    )
    
}

 export default Navbar ;
  
 