import React, { Component } from 'react';
import './Match.css';


class RightTeam extends Component { 
	render(){

		return(
			<div>
				<img src = {require(`../../images/${this.props.pic}`)} className = "Team-Image" alt = "right team"/>
			</div>
		)
	}


}

export default RightTeam;