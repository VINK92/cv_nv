import React from "react";
import PropTypes from 'prop-types';
import "../../index.css";

const Contacts = (props) => {
  const {phone, email, github, linkedIn, download} = props.contacts;
  return (<div className="Contacts-conteiner">
    <h3 className="Contacts-title"> Contacts</h3>
    <div>
      <span className="Contacts-link-type"></span>
      <a className="Contacts-link" href={`tel:${phone}`}>
        +38 093 949 28 09
      </a>
    </div>
    <div>
      <span className="Contacts-link-type"></span>
      <a className="Contacts-link" href={`mailto:${email}`}>
        nazaruk.v92@gmail.com
      </a>
    </div>
    <div>
      <span className="Contacts-link-type"></span>
      <a className="Contacts-link" target="_blank" rel="noreferrer" href={`${github}`}>
        GitHub
      </a>
    </div>
    <div>
      <span className="Contacts-link-type"></span>
      <a className="Contacts-link" target="_blank" rel="noreferrer" 
      href={`${linkedIn}`}>
        LinkedIn
      </a>
    </div>
    <div>
      <span className="Contacts-link-type"></span>{" "}
      <a className="Contacts-link" href={download} download>
        Download CV
      </a>
    </div>
  </div>
)
}

Contacts.propTypes = {
  contacts: PropTypes.object.isRequired,
};

export default Contacts;