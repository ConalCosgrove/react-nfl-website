import React, { Component } from 'react';
import './Match.css';

class LeftTeam extends Component { 

	render(){

		return(
			<div>
				<img src = {require(`../../images/${this.props.pic}`)} className = "Team-Image" alt = "Left Team"/>
        <p>{this.props.teamName}</p> 
			</div>
		)
	}


}

export default LeftTeam;