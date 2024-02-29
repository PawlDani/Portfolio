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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          dolorum recusandae saepe magni eveniet provident voluptate cupiditate
          sapiente vero numquam soluta non amet voluptatem ipsam eius quam
          molestias pariatur, eaque a! Minus repudiandae sapiente asperiores
          aliquid magnam iste vel quis officiis odio laudantium numquam minima,
          dolorem officia esse, quidem ipsa.
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
