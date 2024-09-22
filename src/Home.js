import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-section">
      <div className="image-container">
        <div className="text-overlay">
          <h1 className="main-heading">Let us find your <span> <br />Forever Food.</span></h1>
         
          <div className="button-container">
            <button className="button-red">Search Now</button>
            <button className="button-white">Know More</button>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default Home;
