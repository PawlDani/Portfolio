import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section className="home show-animate" id="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span>Daniel Pawlowski</span>
          <span className="animate" style={{ "--i": 2 }}></span>
        </h1>
        <div className="text-animate">
          <h3>Frontend Developer</h3>
          <span className="animate" style={{ "--i": 3 }}></span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          at cupiditate laborum quae facere debitis ipsam quasi, natus quibusdam
          officiis fugit repellat veniam totam asperiores doloremque nobis.
          <span className="animate" style={{ "--i": 4 }}></span>
        </p>
        <div className="btn-box">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn"
          >
            Hire Me
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn"
          >
            Let's Talk
          </Link>
          <span className="animate" style={{ "--i": 5 }}></span>
        </div>
      </div>
      <div className="home-sci">{/* Social icons */}</div>
      <div className="home-imgHover"></div>
      <span className="animate home-img" style={{ "--i": 7 }}></span>
    </section>
  );
};

export default Home;
