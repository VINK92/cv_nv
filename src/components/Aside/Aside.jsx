import React from 'react';
import Contacts from '../Contacts';
import TechSkills from '../TechSkills';
import SoftSkills from '../SoftSkills';
import Languages from '../Languages';
import PropTypes from 'prop-types';
import '../../index.css';

const Aside = (props) => {
  const {fotoCV, contacts, techSkills, softSkills, languages} = props.data;
  return (
  <aside className="sidebar">
    <img className="my-photo" src={fotoCV} alt="Foto for CV"/>
    <Contacts contacts={contacts}/>
    <TechSkills techSkills={techSkills}/>
    <SoftSkills softSkills={softSkills}/>
    <Languages languages={languages}/>
  </aside>
)};

Aside.propTypes = {
  fotoCV: PropTypes.object,
  contacts: PropTypes.object,
  techSkills: PropTypes.array,
  softSkills: PropTypes.array,
  languages: PropTypes.array,
};

export default Aside;