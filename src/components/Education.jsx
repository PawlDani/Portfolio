import React, { useEffect, useState } from "react";

const Education = () => {
  const [showAnimate, setShowAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const offset = document.getElementById("education").offsetTop - 150;
      const height = document.getElementById("education").offsetHeight;

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
      className={`education ${showAnimate ? "show-animate" : ""}`}
      id="education"
    >
      <h2 className="heading">
        My <span>Journey</span>
        <span className="animate scroll" style={{ "--i": 1 }}></span>
      </h2>

      <div className="education-row">
        <div className="education-column">
          <h3 className="title">
            Education
            <span className="animate scroll" style={{ "--i": 2 }}></span>
          </h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">2017 - 2018</div>
                <h3>Master Degree - University</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita corrupti ex eos.
                </p>
              </div>
            </div>

            {/* Add more education entries as needed */}
            <div className="education-content">
              <div className="content">
                <div className="year">2018 - 2020</div>
                <h3>PhD - University</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita corrupti ex eos.
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year">2018 - 2020</div>
                <h3>PhD - University</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita corrupti ex eos.
                </p>
              </div>
            </div>
            <span className="animate scroll" style={{ "--i": 3 }}></span>
          </div>
        </div>

        <div className="education-column">
          <h3 className="title">
            Experience
            <span className="animate scroll" style={{ "--i": 5 }}></span>
          </h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">2018 - Present</div>
                <h3>Web Developer - Company</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita corrupti ex eos.
                </p>
              </div>
            </div>

            {/* Add more experience entries as needed */}
            <div className="education-content">
              <div className="content">
                <div className="year">2020 - Present</div>
                <h3>Senior Web Developer - Company</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita corrupti ex eos.
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year">2020 - Present</div>
                <h3>Senior Web Developer - Company</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita corrupti ex eos.
                </p>
              </div>
            </div>

            <span className="animate scroll" style={{ "--i": 6 }}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
