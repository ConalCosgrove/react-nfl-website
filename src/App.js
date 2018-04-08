import React, { Component } from 'react';

import logo from "./logo.svg"

import Match from './Match.js'
import StatSection from './StatSection.js'
import './App.css';
import data from './data.json'
import PHI from './images/PHI.svg';

class App extends Component {




  render() {

  
  function getMatches(){
  var arr = [];
        Object.keys(data).forEach(function(key) {
        arr.push(data[key]);
      });


      return <div className = "Matches-Holder">{arr.map(item => <Match team1={item.home.abbr + ".svg"} team2={item.away.abbr + ".svg"} team1score={item.home.score} team2score={item.away.score} clock={item.clock} quarter={item.quarter}/>)}</div>
    }
    return (
      
      <div className="App">

        <header className="App-header">
          <img src={PHI} className="Top-logo" alt="logo" />
          <a href = "https://www.reddit.com/r/nflstreams/"><h1 className="App-title"></h1></a>
        </header>
 

          
          {getMatches()}

          
	      <div className = "TagLine">
	      	<h3>All Times In GMT. Made with React {"<"}3 </h3>
	        <img src = {logo} className = "App-logo" alt = "logo"/> 
	      </div>
      </div>
    );
  }
}

export default App;