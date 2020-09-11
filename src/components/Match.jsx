import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeftTeam from './match/LeftTeam';
import RightTeam from './match/RightTeam';
import Score from './match/Score';
import './match/Match.css';

class Match extends Component {
  getDownEnd(d, y, f) {
    if (d && y && f) {
      switch (d){
        case 1: return `${d}st and ${y} at ${f}`;
        case 2: return `${d}nd and ${y}  at ${f}`;
        case 3: return `${d}rd and ${y}  at ${f}`;
        default: return `${d}th and ${y}  at ${f}`;
      }
    }
  }
  createStats() {
    let score;
    const {
      quarter, team1score, team2score, clock, stadium, down, yards, fieldPos, possession
    } = this.props;
    if(!quarter) {
      score = (
        <div>
          <h2>
            {stadium}
          </h2>
        </div>
      );
    }
    else if (quarter === 'Pregame') {
      score = (
        <div>
          <Score team1score={team1score} team2score={team2score} />
          <div>
            <h3>{quarter}</h3>
          </div>
        </div>
      );
    } else if (quarter.toLowerCase() === 'final' ||  quarter === 'final overtime') {
      score = <Score team1score={team1score} team2score={team2score} />;
    }else {
      score = (
        <div>
          <Score team1score={team1score} team2score={team2score} />
          <div>
            <h3>
            {this.note === 'XP' ? `Extra point attempt for ${possession}` : this.getDownEnd(down, yards, fieldPos)}
              <br />
              {`Q : ${quarter}`}
              <br />
              Clock :
              {clock}
              <br />
            </h3>
          </div>
        </div>
      );
    }
    return score;
  }

  render() {
    const {
      quarter, team1, team2, team1Name, team2Name, stadium, date, possession, phase
    } = this.props;
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
    const [{ value: month },, { value: day }, , {value: year}] = dateTimeFormat.formatToParts(date ) 
    return (
      <div className="MatchBox">
        {!quarter && <h2>{`${day}-${month}-${year}`}</h2>}
        {(quarter === 'Final' || quarter === 'final overtime')  && <h2>{stadium}</h2>}
        {
          quarter && quarter !== 'Final' && quarter !== 'final overtime' && (
          <div className="LiveHolder">
            <h2 style={{ paddingRight: '10px' }} className="LiveText"> {phase} @ </h2>
            <h2>{stadium}</h2>
          </div>
          )
        }
        <div className="TeamVersus">
          <LeftTeam className="LeftTeam" pic={team1} teamName={team1Name} gotBall={possession===team1Name}/>
          <h1> VS </h1>
          <RightTeam className="RightTeam" pic={team2} teamName={team2Name} gotBall={possession===team2Name} />
        </div>
        {this.createStats()}
      </div>
    );
  }
}
Match.propTypes = {
  stadium: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
  team1: PropTypes.string.isRequired,
  team2: PropTypes.string.isRequired,
  team1Name: PropTypes.string.isRequired,
  team2Name: PropTypes.string.isRequired,
  phase: PropTypes.string,
  quarter: PropTypes.string,
  team1score: PropTypes.number,
  team2score: PropTypes.number,
  clock: PropTypes.string,
};

Match.defaultProps = {
  team1score: 0,
  team2score: 0,
  clock: '00:00',
};
export default Match;
