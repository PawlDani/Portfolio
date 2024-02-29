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
              {/* Add more coding skills as needed */}
              <div className="progress">
                <h3>
                  HTML <span>90%</span>
                </h3>
                <div className="bar">
                  <span style={{ width: "90%" }}></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  CSS <span>80%</span>
                </h3>
                <div className="bar">
                  <span style={{ width: "80%" }}></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  JavaScript <span>65%</span>
                </h3>
                <div className="bar">
                  <span style={{ width: "65%" }}></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  React <span>75%</span>
                </h3>
                <div className="bar">
                  <span style={{ width: "75%" }}></span>
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
            <div className="skills-content">
              {/* Add more professional skills as needed */}
              <div className="progress">
                <h3>
                  Web Design <span>95%</span>
                </h3>
                <div className="bar">
                  <span style={{ width: "95%" }}></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  Web Development <span>67%</span>
                </h3>
                <div className="bar">
                  <span style={{ width: "67%" }}></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  Graphic Design <span>85%</span>
                </h3>
                <div className="bar">
                  <span style={{ width: "85%" }}></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  SEO Marketing <span>60%</span>
                </h3>
                <div className="bar">
                  <span style={{ width: "60%" }}></span>
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
