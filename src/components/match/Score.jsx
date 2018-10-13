import React, { Component } from 'react';
import './Match.css';
import PropTypes from 'prop-types';
class Score extends Component { 

	render(){

		return(
			<div className='Scoreboard'>
				<h1 className = "ScoreLeft">{this.props.team1score}</h1>
				<h1> - </h1>
				<h1 className = "ScoreRight">{this.props.team2score}</h1>
			</div>
		)
	}


}

Score.propTypes = {
	team1score: PropTypes.number,
	team2score: PropTypes.number,
};

export default Score;