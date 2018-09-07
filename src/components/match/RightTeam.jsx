import React from 'react';
import PropTypes from 'prop-types';
import './Match.css';


function RightTeam({ teamName, pic }) {
  return (
    <div>
      <img src={require(`../../images/${pic}`)} className="Team-Image" alt="right team" />
      <h2>{teamName}</h2>
    </div>
  );
}

RightTeam.propTypes = {
  teamName: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
};
export default RightTeam;
