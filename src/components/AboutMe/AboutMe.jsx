import React from "react";
import PropTypes from "prop-types";
import "../../index.css";

const AboutMe = ({ data }) => {
  const { name, surname, description, profession } = data;
  return (
    <div className="info-container">
      <h2 className="profassion">{profession}</h2>
      <h1 className="name">
        {name} {surname}
      </h1>

      <p className="description">{description}</p>
    </div>
  );
};

AboutMe.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  description: PropTypes.string,
  profassion: PropTypes.string,
};

export default AboutMe;