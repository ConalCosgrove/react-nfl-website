import React, { Component } from 'react';
import './App.css';

class LeftTeam extends Component { 

	render(){

		return(
			<div>
				<img src = {require(`./images/${this.props.pic}`)} className = "Team-Image" alt = "Left Team"/>
			</div>
		)
	}


}

export default LeftTeam;