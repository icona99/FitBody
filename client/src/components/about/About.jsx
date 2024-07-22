import React from 'react';
import "./About.css"; 

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <div className="left-panel">
          <div className="about-video">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/T-ixnL5WJyE?autoplay=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <div className="about-map">
            <h2>Find Us Here</h2>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1479.248243447424!2d24.76258850717909!3d42.13966132433551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd108593357fd%3A0x937015a78144aa35!2z0KHRgtCw0LTQuNC-0L0g4oCe0KXRgNC40YHRgtC-INCR0L7RgtC10LLigJw!5e0!3m2!1sbg!2sbg!4v1721392109693!5m2!1sbg!2sbg" 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
        <div className="right-panel">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>At <span>FitBODY</span>, our mission is to empower individuals to lead healthier lives by providing them with the tools, knowledge, and support they need to achieve their fitness goals. We believe that everyone, regardless of their starting point, has the potential to improve their health and well-being. Our mission is built on three core principles:</p>
            
            <h2>Our Facilities</h2>
            <p>Our facilities are equipped with the latest fitness technology, ensuring that you have access to the best tools for your workouts. From state-of-the-art cardio machines to well-maintained free weights, offer a variety of workouts to keep you engaged and challenged.</p>
            
            <h2>Join Us</h2>
            <p>Become a part of our community and start your journey towards a healthier, happier you. Whether you are a beginner or an experienced athlete, we have the resources and programs to help you succeed. Whether you are a beginner or an experienced athlete, we have the resources and programs to help you succeed.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
