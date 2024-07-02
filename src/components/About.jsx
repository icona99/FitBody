import React from 'react';
import "/src/components/About.css";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Your Journey to a Better Life Starts Here</p>
      </header>
      <section className="about-content">
        {/* <div className="about-image">
          <img src="images/description.jpg" alt="Fitness" />
        </div> */}
          <div className="about-video">
          <video controls>
            <source src="/images/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>At <span>FitBODY</span>, our mission is to empower individuals to lead healthier lives by providing them with the tools, knowledge, and support they need to achieve their fitness goals. We believe that everyone, regardless of their starting point, has the potential to improve their health and well-being. Our mission is built on three core principles:</p>
          
          <h2>Our Facilities</h2>
          <p>Our facilities are equipped with the latest fitness technology, ensuring that you have access to the best tools for your workouts. From state-of-the-art cardio machines to well-maintained free weights, we provide everything you need to succeed. Our classes, led by experienced instructors, offer a variety of workouts to keep you engaged and challenged.</p>
          <h2>Join Us</h2>
          <p>Become a part of our community and start your journey towards a healthier, happier you. Whether you are a beginner or an experienced athlete, we have the resources and programs to help you succeed.</p>
        </div>
      </section>
    </div>
  );
}

export default About;

