import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Thankyou from "./components/Thankyou";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact onFormSubmit={handleFormSubmit} />
        {isSubmitted && <Thankyou />}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
