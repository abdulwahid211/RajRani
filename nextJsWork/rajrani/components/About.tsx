import React, { Component } from 'react';
import elephant from '../public/img/rajrani_about.png';
import '../styles/styles.scss';

const About = () => {
  return (
    <div id="about">
      <img id="about-elephant" src={elephant.src} width="500" height="513"></img>
      <div id="about-text">
        <p>
          At Rajrani Takeaway, our goal is simple: to deliver an exceptional dining experience by offering high-quality food at great value. We are passionate about fresh
          ingredients, authentic flavors, and customer satisfaction. Every dish we prepare is crafted with care, ensuring that each bite is a delight for your taste buds.
        </p>
        <p>
          Our strength lies in our experience and dedication to excellence. We take pride in our ability to provide not just great food, but also outstanding service. Whether
          you're ordering a quick meal after a long day or planning a feast with loved ones, we are committed to making your experience enjoyable and hassle-free.
        </p>
        <p>
          At Rajrani Takeaway, customer satisfaction is at the heart of everything we do. We welcome you to try our food, experience our warm hospitality, and share your verdict.
          Your feedback is invaluable to us, and we look forward to serving you with passion and dedication.
        </p>
      </div>
    </div>
  );
};

export default About;
