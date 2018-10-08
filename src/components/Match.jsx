import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeftTeam from './match/LeftTeam';
import RightTeam from './match/RightTeam';
import Score from './match/Score';
import './match/Match.css';

class Match extends Component {
  createStats() {
    let score;
    const {
      quarter, team1score, team2score, clock, stadium,
    } = this.props;
    if (quarter === 'Pregame') {
      score = (
        <div>
          <Score team1score={team1score} team2score={team2score} />
          <div>
            <h3>{quarter}</h3>
          </div>
        </div>
      );
    } else if (quarter === 'Final' ||  quarter === 'final overtime') {
      score = <Score team1score={team1score} team2score={team2score} />;
    } else if (quarter === null) {
      score = (
        <div>
          <h2>
            {stadium}
          </h2>
        </div>
      );
    } else {
      score = (
        <div>
          <Score team1score={team1score} team2score={team2score} />
          <div>
            <h3>
              Q :
              {quarter}
              <br />
              Clock :
              {clock}
            </h3>
          </div>
        </div>
      );
    }
    return score;
  }

  render() {
    const {
      quarter, team1, team2, team1Name, team2Name, stadium, date,
    } = this.props;
    return (
      <div className="MatchBox">
        {quarter === null && <h2>{date}</h2>}
        {(quarter === 'Final' || quarter === 'final overtime')  && <h2>{stadium}</h2>}
        {
          quarter !== null && quarter !== 'Final' && quarter !== 'final overtime' && (
          <div className="LiveHolder">
            <h2 style={{ paddingRight: '10px' }} className="LiveText"> Live @ </h2>
            <h2>{stadium}</h2>
          </div>
          )
        }
        <div className="TeamVersus">
          <LeftTeam className="LeftTeam" pic={team1} teamName={team1Name} />
          <h1> VS </h1>
          <RightTeam className="RightTeam" pic={team2} teamName={team2Name} />
        </div>
        {this.createStats()}
      </div>
    );
  }
}
Match.propTypes = {
  stadium: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  team1: PropTypes.string.isRequired,
  team2: PropTypes.string.isRequired,
  team1Name: PropTypes.string.isRequired,
  team2Name: PropTypes.string.isRequired,
  quarter: PropTypes.string,
  team1score: PropTypes.number,
  team2score: PropTypes.number,
  clock: PropTypes.string,
};

Match.defaultProps = {
  quarter: 'None',
  team1score: 0,
  team2score: 0,
  clock: '00:00',
};
export default Match;
