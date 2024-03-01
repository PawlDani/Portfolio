import React, { useEffect, useState } from "react";
import projectImage1 from "/src/assets/linguola.png"; // Example project screenshot
import projectImage2 from "/src/assets/consolar.png";
// Import other project images similarly

const Projects = () => {
  const [showAnimate, setShowAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const offset = document.getElementById("projects").offsetTop - 150;
      const height = document.getElementById("projects").offsetHeight;

      if (top >= offset && top < offset + height) {
        setShowAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Example projects data
  const projects = [
    {
      id: 1,
      title: "Linguola Language Learning App",
      description:
        "Linguola is a language learning app that helps users learn new languages through interactive lessons, quizzes, and games. It was built using React and Supabase for backend services.",
      image: projectImage1,
      url: "https://linguola.netlify.app", // Project URL
    },
    {
      id: 2,
      title: "Consolar Energy Website",
      description:
        "The Consolar Energy website is a corporate website for a solar energy company. It was built using Wordpress templates, HTML, CSS, and JavaScript, and is fully responsive.",
      image: projectImage2,
      url: "https://www.consolarenergy.de", // Project URL
    },

    // Add other projects similarly
  ];

  return (
    <section
      className={`projects ${showAnimate ? "show-animate" : ""}`}
      id="projects"
    >
      <h2 className="projects-heading">
        My <span>Projects</span>
        <span className="animate scroll" style={{ "--i": 1 }}></span>
      </h2>

      <div className="project-row">
        {projects.map((project, index) => (
          <div className="project-column" key={project.id}>
            <div className="project-box">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </a>
              <span className="animate scroll" style={{ "--i": 4 }}></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
