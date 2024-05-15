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
                <div className="year">2023 - 2024</div>
                <h3>Frontend Developer Bootcamp</h3>
                <p>
                  Attended an immersive coding bootcamp that honed my skills in
                  front-end development technologies including JavaScript,
                  React, HTML, and CSS. The program extensively covered API
                  integration, leveraging Supabase for backend services, and
                  more, enabling me to build dynamic, responsive websites and
                  applications.
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year">2014 - 2019</div>
                <h3>Bachelor's Degree - University of Tasmania</h3>
                <p>
                  My Marine Science degree focused on the Southern Ocean and
                  Antarctica, blending biology with extensive studies in
                  oceanography. This rigorous education deepened my
                  understanding of marine ecosystems and oceanographic
                  processes, equipping me with the insights needed for
                  innovative approaches to marine conservation and environmental
                  challenges.
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
                <div className="year">2021 - 2024</div>
                <h3>Web Development</h3>
                <p>
                  My journey in web development has led me through a variety of
                  projects where I've blended my WordPress skills with a touch
                  of coding magic. Focusing on theme customization and enhancing
                  designs with HTML and CSS, I've aimed to create websites that
                  are not only functional but also visually appealing.
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year">2018 - 2020</div>
                <h3>Technical Officer Intern</h3>
                <p>
                  I participated in scientific diving operations, contributing
                  to the collection of underwater data vital for marine research
                  initiatives. My responsibilities also included the meticulous
                  calibration and maintenance of research instruments,
                  guaranteeing the precision of our data. In collaboration with
                  research teams, I played a key role in analyzing the gathered
                  data, significantly contributing to the advancement of our
                  projects.
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
