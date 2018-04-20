import React, { Component } from 'react';
import LeftTeam from './match/LeftTeam.js';
import RightTeam from './match/RightTeam.js';
import Score from './match/Score.js';
import './match/Match.css';

class Match extends Component { 

	 createStats(){
		var score;
		if(this.props.quarter == null){
			score = <div> <h2> {this.props.stadium} </h2> </div>;
		}else{
			score =<div> <Score team1score = {this.props.team1score} team2score = {this.props.team2score}></Score> 
							<div> <h3>Q : {this.props.quarter} <br/>Clock : {this.props.clock}</h3></div>
							</div>;
		}
		return score;
	}
	render(){

		return(
			<div className='MatchBox'>
			<h2>{this.props.date}</h2>
				<div className='TeamVersus'>
					<LeftTeam className = "LeftTeam" pic = {this.props.team1}/>
					<h1> VS </h1>
					<RightTeam className = "RightTeam" pic = {this.props.team2}/>
				</div>
				
				
				{this.createStats()}
			
			</div>
		)
	}


}

export default Match;