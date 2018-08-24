import React, { Component } from 'react';
import './Match.css';

class LeftTeam extends Component { 

	render(){

		return(
			<div>
				<img src = {require(`../../images/${this.props.pic}`)} className = "Team-Image" alt = "Left Team"/>
        <h2>{this.props.teamName}</h2> 
			</div>
		)
	}


}

export default LeftTeam;