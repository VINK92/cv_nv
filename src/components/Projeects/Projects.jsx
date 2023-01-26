import React from "react";
import PropTypes from "prop-types";
import "../../index.css";

const Projects = ({ data: { projects } }) => {
  return (
    <div className="project-container">
      <h3 className="about-me-title">Projects</h3>
      <ul className="number">
        {projects.map((project) => {
          const { name, link, technologies, about } = project
          return (
            <li className="project-item" key={name}>
              <a className="projects-link" target="_blank" rel="noreferrer" href={link}>
                {name}
              </a>
              <span>
                {/* <b> [ </b> */}
                <span className="tech-name">{technologies}</span>
                {/* <b> ] </b> */}
                <span className="project-about">{about}</span>
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
};

export default Projects;