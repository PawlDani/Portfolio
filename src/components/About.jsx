import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import aboutImage from "../assets/reactlogo.svg";

const About = () => {
  const [showAnimate, setShowAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const offset = document.getElementById("about").offsetTop - 150;
      const height = document.getElementById("about").offsetHeight;

      if (top >= offset && top < offset + height) {
        setShowAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`about ${showAnimate ? "show-animate" : ""}`}
      id="about"
    >
      <h2 className="heading">
        About <span>Me</span>
        <span className="animate scroll" style={{ "--i": 1 }}></span>
      </h2>

      <div className="about-img">
        <img src={aboutImage} alt="" />
        <span className="circle-spin"></span>
        <span className="animate scroll" style={{ "--i": 2 }}></span>
      </div>

      <div className="about-content">
        <h3>
          Frontend Developer!
          <span className="animate scroll" style={{ "--i": 3 }}></span>
        </h3>
        <p>
          I'm a front-end developer whose unique journey from marine science to
          technology has honed my analytical skills and problem-solving
          abilities, now dedicated to innovating web and mobile experiences.
          This unconventional path has imbued me with a profound understanding
          of both the natural and digital worlds, allowing me to approach tech
          challenges with a fresh perspective. Armed with expertise in HTML,
          CSS, JavaScript, React, and a passion for leveraging technology to
          address complex issues, I excel at crafting dynamic and impactful
          solutions that enhance user engagement across diverse digital
          environments. My background instills a unique blend of creativity and
          technical prowess, making me adept at turning visionary ideas into
          reality.
          <span className="animate scroll" style={{ "--i": 4 }}></span>
        </p>

        <div className="btn-box btns">
          <Link to="education" smooth={true} duration={1000} className="btn">
            Read More
          </Link>
          <span className="animate scroll" style={{ "--i": 5 }}></span>
        </div>
      </div>
    </section>
  );
};

export default About;
