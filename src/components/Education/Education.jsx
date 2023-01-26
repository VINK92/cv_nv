import React from "react";
import PropTypes from "prop-types";
import "../../index.css";

const Education = ({data: {education}}) => (
  <div className="EducationWrapper">
    <h3 className="about-me-title">Education</h3>
    <ul>
      {education.map(({major, university, time}) => {
        return (
          <li className="education" key={major}>
            <h4 className="university">{university}</h4>
            <h5 className="education-major">{major}</h5>
            <span className="education-time">
              {time}
              <span className="profassion-divider"> | </span> Ukraine
            </span>
          </li>
        )
      })}
    </ul>
  </div>
);

Education.propTypes = {
  education: PropTypes.arrayOf(PropTypes.object),
};

export default Education;