import React, { Component } from 'react';
import './App.css';



class StatSection extends Component { 
	constuctor(props){
		

	}
	render(){

		return(
			<div className="Stat-Section">
				<img className="Stat-Image" src={this.props.team1} alt = "Left Stats"/>
				<img className="Stat-Image" src={this.props.team2} alt = "Right Stats"/>

			</div>
		)
	}


}

export default StatSection;