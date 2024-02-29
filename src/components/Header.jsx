import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sections = ["home", "about", "education", "skills", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);

      let currentSection = sections[0];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const pageHeight = document.body.clientHeight;

      const atBottomOfPage = scrollPosition + windowHeight >= pageHeight;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 150;
          const bottom = top + el.offsetHeight;
          if (scrollPosition >= top && scrollPosition <= bottom) {
            currentSection = section;
            break;
          }
        }
      }
      if (atBottomOfPage) {
        currentSection = "contact";
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header
      className={`header ${isSticky ? "sticky" : ""} ${
        isActive ? "active" : ""
      }`}
    >
      <Link
        smooth
        to="/#home"
        className="logo"
        onClick={() => setIsActive(false)}
      >
        Daniel.<span className="animate" style={{ "--i": 1 }}></span>
      </Link>

      <div
        className={`bx bx-menu ${isActive ? "bx-x" : ""}`}
        id="menu-icon"
        onClick={toggleMenu}
      >
        <span className="animate" style={{ "--i": 2 }}></span>
      </div>

      <nav className={`navbar ${isActive ? "active" : ""}`}>
        {sections.map((section, index) => (
          <Link
            key={index}
            smooth
            to={`/#${section}`}
            onClick={() => setIsActive(false)}
            className={`nav-link ${activeSection === section ? "active" : ""}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
        <span className="active-nav"></span>
      </nav>
    </header>
  );
};

export default Header;
