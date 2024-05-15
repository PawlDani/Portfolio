import React, { useEffect, useState } from "react";

const Contact = () => {
  const [showAnimate, setShowAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const buffer = 200;

      if (Math.ceil(scrolled) >= scrollable - buffer) {
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
      className={`contact ${showAnimate ? "show-animate" : ""}`}
      id="contact"
    >
      <h2 className="heading">
        Contact <span>Me!</span>
        <span className="animate scroll" style={{ "--i": 1 }}></span>
      </h2>

      <form action="https://formspree.io/f/mleqnzar" method="POST">
        <input type="hidden" name="form-name" value="contact" />

        <div className="input-box">
          <div className="input-field">
            <input type="text" placeholder="Full Name" name="name" required />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
            />
            <span className="focus"></span>
          </div>
          <span className="animate scroll" style={{ "--i": 3 }}></span>
        </div>

        <div className="input-box">
          <div className="input-field">
            <input type="tel" placeholder="Mobile Number" name="mobileNumber" />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Email Subject"
              name="subject"
              required
            />
            <span className="focus"></span>
          </div>
          <span className="animate scroll" style={{ "--i": 5 }}></span>
        </div>

        <div className="textarea-field">
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <span className="focus"></span>
          <span className="animate scroll" style={{ "--i": 7 }}></span>
        </div>

        <div className="btn-box btns">
          <button type="submit" className="btn">
            Submit
          </button>
          <span className="animate scroll" style={{ "--i": 9 }}></span>
        </div>
      </form>
    </section>
  );
};

export default Contact;
