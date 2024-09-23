import React from 'react';
import './Home.css';


function Home() {
  return (
    <>
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




    <div className="home-container">
      
      <div className="image-section">
      
      </div>
      
    
      <div className="text-section">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempore, debitis.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quae rat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
        <button className="get-in-touch-btn">Get in Touch</button>
      </div>
    </div>




   {/*Testimonials */}
    <div className="testimonials-container">
        <div className="testimonial-card">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae.</p>
          <div className="testimonial-author">
            <div>
              <h4>Gladis Lennon</h4>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio beatae incidunt.</p>
          <div className="testimonial-author">
            {/* image soon */}
            <div>
              <h4>Gladis Lennon</h4>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatem quidem nulla quisquam natus.</p>
          <div className="testimonial-author">
           {/* image soon */}
            <div>
              <h4>Gladis Lennon</h4>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!</p>
          <div className="testimonial-author">
            {/* image soon */}
            <div>
              <h4>Gladis Lennon</h4>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima.</p>
          <div className="testimonial-author">
           {/* image soon */}
            <div>
              <h4>Gladis Lennon</h4>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.</p>
          <div className="testimonial-author">
           {/* image soon */}
            <div>
              <h4>Gladis Lennon</h4>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>
        </div>

      </> 
  );
}

export default Home;
