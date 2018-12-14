import React from 'react';
import PropTypes from 'prop-types';
import './Match.css';

function RightTeam({ teamName, pic, gotBall }) {
  return (
    <div>
      <img src={require(`../../images/${pic}`)} className="Team-Image" alt="right team" />
        <h2>{`${teamName} ${gotBall ? '🏈':''}`}</h2> 

    </div>
  );
}

RightTeam.propTypes = {
  teamName: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
};
export default RightTeam;
