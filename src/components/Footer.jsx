import React, { useEffect, useState } from "react";

const Footer = () => {
  const [showAnimate, setShowAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const buffer = 200; // Adjust this value to trigger the animation earlier

      if (Math.ceil(scrolled) >= scrollable - buffer) {
        setShowAnimate(true);
      } else {
        setShowAnimate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      className={`footer ${showAnimate ? "show-animate" : ""}`}
      id="footer"
    >
      <div className="footer-text">
        <p>Copyright &copy; 2024 by PawlDani | All Rights Reserved.</p>
        <span className="animate scroll" style={{ "--i": 1 }}></span>
      </div>

      <div className="footer-iconTop">
        <a href="#">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
        <span className="animate scroll" style={{ "--i": 3 }}></span>
      </div>
    </footer>
  );
};

export default Footer;
