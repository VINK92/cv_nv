import React from "react";
import PropTypes from "prop-types";
import "../../index.css";

const TechSkills = (props) => {
  const { techSkills } = props;
  return (
    <div className="Tech-Skills-conteiner">
      <h3 className="Tech-Skills-title">Tech Skills</h3>
      <ul>
        {techSkills.map((skill) => {
          return (
            <li className="Tech-Skills-item" key={skill}>
              <span className="Tech-Skills-text">{skill}</span>{" "}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

TechSkills.propTypes = {
  techSkills: PropTypes.array.isRequired,
};

export default TechSkills;