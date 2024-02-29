import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        <About />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
