import React, { useEffect, useState } from "react";

const Skills = () => {
  const [showAnimate, setShowAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const offset = document.getElementById("skills").offsetTop - 150;
      const height = document.getElementById("skills").offsetHeight;

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
      className={`skills ${showAnimate ? "show-animate" : ""}`}
      id="skills"
    >
      <h2 className="heading">
        My <span>Skills</span>
        <span className="animate scroll" style={{ "--i": 1 }}></span>
      </h2>

      <div className="skills-row">
        {/* Coding Skills */}
        <div className="skills-column">
          <h3 className="title">
            Coding Skills
            <span className="animate scroll" style={{ "--i": 2 }}></span>
          </h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="coding-content">
                {/* Add more coding skills as needed */}
                <div className="coding">
                  <i className="fab fa-html5"></i>
                  <h3>HTML</h3>
                </div>
                <div className="coding">
                  <i className="fab fa-sass"></i>
                  <h3>Sass</h3>
                </div>
                <div className="coding">
                  <i className="fab fa-less"></i>
                  <h3>Less</h3>
                </div>
                <div className="coding">
                  <i className="fab fa-bootstrap"></i>
                  <h3>Bootstrap</h3>
                </div>
                <div className="coding">
                  <i className="fab fa-git"></i>
                  <h3>Git</h3>
                </div>
                <div className="coding">
                  <i className="fab fa-npm"></i>
                  <h3>NPM</h3>
                </div>
                <div className="coding">
                  <i className="fab fa-yarn"></i>
                  <h3>Yarn</h3>
                </div>
                <div className="coding">
                  <i className="fab fa-docker"></i>
                  <h3>Docker</h3>
                </div>
                <div className="coding">
                  <i className="fab fa-css3-alt"></i>
                  <h3>CSS</h3>
                </div>
                <div className="coding">
                  <i className="fab fa-js"></i>
                  <h3>JavaScript</h3>
                </div>
                <div className="coding">
                  <i className="fab fa-react"></i>
                  <h3>React</h3>
                </div>
                <div className="coding">
                  <i className="fab fa-vuejs"></i>
                  <h3>Vue.js</h3>
                </div>
                <div className="coding">
                  <i className="fas fa-database"></i>
                  <h3>SQL</h3>
                </div>
                <div className="coding">
                  <i className="fab fa-react"></i>
                  <h3>React Native</h3>
                </div>
              </div>
            </div>
            <span className="animate scroll" style={{ "--i": 3 }}></span>
          </div>
        </div>

        {/* Professional Skills */}
        <div className="skills-column">
          <h3 className="title">
            Professional Skills
            <span className="animate scroll" style={{ "--i": 5 }}></span>
          </h3>
          <div className="skills-box">
            <div className="skills-content other">
              {/* Add more professional skills as needed */}
              <div className="skills-content other">
                <div className="progress">
                  <h3>Web Developement</h3>
                  <div className="bar">
                    <span style={{ width: "95%" }}></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>Web Design</h3>
                  <div className="bar">
                    <span style={{ width: "85%" }}></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>Mobile Design</h3>
                  <div className="bar">
                    <span style={{ width: "80%" }}></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>Testing and Debugging</h3>
                  <div className="bar">
                    <span style={{ width: "85%" }}></span>
                  </div>
                </div>
              </div>
            </div>
            <span className="animate scroll" style={{ "--i": 6 }}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
