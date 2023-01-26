import React from "react";
import PropTypes from "prop-types";
import "../../index.css";

const Experience = ({ data: { experience } }) => (
  <div className="ExperienceWrapper">
    <h3 className="about-me-title">Work Experience</h3>
    {experience.map((company) => {
      return (
        <div className="companyContainer" key={company.company}>
          <h4 className="profassion-title">{company.profassion}</h4>
          <span className="profassion-company">{company.company}</span>
          <span className="profassion-time">
            {company.time}
            <span className="profassion-divider"> | </span> Ukraine
          </span>
          <ul className="profassion-duties">
            {company.duties.map((dutie) => {
              return (
                <li className="profassion-duties-item" key={dutie}>
                  {dutie}
                </li>
              )
            })}
          </ul>
        </div>
      )
    })}
  </div>
);

Experience.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.object),
};

export default Experience;