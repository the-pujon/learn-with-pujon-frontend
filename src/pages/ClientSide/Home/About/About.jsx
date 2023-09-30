import React from "react";

import "./About.scss";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div>
      <Fade
        duration={2000}
        id="About"
        className="res__about text-white  wrapper  shadow-2xl"
      >
        <div className="res__about-container">
          <div className="res__about-paragraph text-black">
            Welcome to Songle Melody Music Heaven. We are passionate about
            nurturing musical talent and providing a platform for students to
            explore the captivating world of music. Our dedicated team of
            experienced instructors is committed to offering comprehensive and
            personalized lessons for individuals of all ages and skill levels.
            From guitar to piano, drums to violin, we offer a diverse range of
            courses designed to cultivate creativity, technique, and a deep
            appreciation for music. Whether you're a beginner or looking to
            refine your skills, join us on this incredible journey of
            self-expression and musical mastery. Unleash your potential with us
            today!
          </div>
          <div className="res__about-image">
            <h1>About Us</h1>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
