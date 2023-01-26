import React from "react";
import PropTypes from "prop-types";
import "../../index.css";

const Languages = (props) => {
  const { languages } = props;
  return (
    <div className="Languages-container">
      <h3 className="Languages-title">Languages</h3>
      <ul className="Languages-list">
        {languages.map((lan) => {
          return (
            <li key={lan}>
              <span className="Languages-item-text">{lan}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

Languages.propTypes = {
  languages: PropTypes.array.isRequired,
};

export default Languages;