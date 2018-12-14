import React from 'react';
import PropTypes from 'prop-types';
import './Match.css';

function LeftTeam({ teamName, pic, gotBall }) {
  return (
    <div>
      <img src={require(`../../images/${pic}`)} className="Team-Image" alt="Left Team" />
      <h2>{`${teamName} ${gotBall ? '🏈' :''}`}</h2> 
    </div>
  );
}

LeftTeam.propTypes = {
  teamName: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
};
export default LeftTeam;
