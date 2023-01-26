import React from "react";
import data from "../../data/data.js";
import Aside from "../Aside";
import "../../index.css";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Projects from "../Projeects";
import Experience from "../Experience/Experience.jsx";
import Education from "../Education/Education.jsx";

function App() {
  return (
    <div className="wrapper">
      <Aside data={data} />
      <div className="about-me-container">
        <AboutMe data={data} />
        <Projects data={data} />
        <div>
          <Experience data={data} />
          <Education data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
