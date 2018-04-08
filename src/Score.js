import React, { Component } from 'react';
import './App.css';

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

export default Score;