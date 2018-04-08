import React, { Component } from 'react';
import logo from "./logo.svg"
import Match from './Match.js'
import axios from 'axios'
import './App.css';
import PHI from './images/PHI.svg';

class App extends Component {
  constructor(){
    super()
    this.refreshClick =this.refreshClick.bind(this)
    this.getMatches = this.getMatches.bind(this)
    this.state = {
      games: {},
      gameHTML : null
    }


    axios.get('http://www.nfl.com/liveupdate/scores/scores.json')
    .then(response => {
      this.state.games = response.data;
      this.getMatches();

    })
  }

  refreshClick(){
    console.log(this.state.games)

  }

  getMatches(){

    var arr = [];
    //console.log(this.state.games);
    

    var gameKeys = Object.keys(this.state.games);

    for (var key in gameKeys){
      
      arr.push(this.state.games[gameKeys[key]]);
    }


      this.setState({gameHTML: <div className = "Matches-Holder">{arr.map(item => <Match key={item.away.abbr} team1={item.home.abbr + ".svg"} team2={item.away.abbr + ".svg"} team1score={item.home.score.T} team2score={item.away.score.T} clock={item.clock} quarter={item.qtr}/>)}</div>})
      console.log(this.state.gameHTML);
    }

  render() {


    return (
      
      <div className="App">

        <header className="App-header">
          <img src={PHI} className="Top-logo" alt="logo" onClick={this.refreshClick} />
          <a href = "https://www.reddit.com/r/nflstreams/"><h1 className="App-title"></h1></a>
        </header>
 

          
          {this.state.gameHTML}

          
	      <div className = "TagLine">
	      	<h3>All Times In GMT. Made with React {"<"}3 </h3>
	        <img src = {logo} className = "App-logo" alt = "logo"/> 
	      </div>
      </div>
    );
  }
}

export default App;