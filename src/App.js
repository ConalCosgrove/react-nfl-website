import React, { Component } from 'react';
import logo from "./images/logo.svg"
import Match from './components/Match.js'
import axios from 'axios'
import './App.css';
import PHI from './images/PHI.svg';

class App extends Component {
  constructor(){
    super()
    this.makeRequest = this.makeRequest.bind(this)
    this.refreshClick =this.refreshClick.bind(this)
    this.populateMatches = this.populateMatches.bind(this)
    this.state = {
      switched: false,
      games: {},
      gameHTML : null
    }
  }

  componentDidMount(){
    this.makeRequest("https://nfl-app-backend.herokuapp.com/scoreJSON")
    this.populateMatches();
  }

  refreshClick(){

    if(!this.state.switched){

      this.makeRequest('https://nfl-app-backend.herokuapp.com/fakescoreJSON')
      this.setState({switched:true});

    }else{
      this.makeRequest('https://nfl-app-backend.herokuapp.com/scoreJSON')
      this.setState({switched:false})
    }
    this.populateMatches();

  }

  populateMatches(){
    var arr = [];
    var gameKeys = Object.keys(this.state.games);

    for (var key in gameKeys){
      if(gameKeys[key] !== 'nextupdate'){
        arr.push(this.state.games[gameKeys[key]]);
      }
    }
    this.setState(	{gameHTML: 	<div className = "Matches-Holder"> 
      {arr.map(item => 
       <Match key={item.away.abbr} team1={item.home.abbr + ".svg"} team2={item.away.abbr + ".svg"} 
       team1score={item.home.score.T} team2score={item.away.score.T} clock={item.clock} quarter={item.qtr}/>
       )}
      </div>
    }) 
  }

  makeRequest(url){
    axios.get(url)
    .then(response => {
      this.setState({games:response.data})
      this.populateMatches();

    }).catch((err)=> {
      this.setState({gameHTML: <span className="Loading"> Error: failed to load match data</span>})
    });
  }

  render() {


    return (

    	<div className="App">

     <header className="App-header">
     <img src={PHI} className="Top-logo" alt="logo" onClick={this.refreshClick} />
     </header>

     {(this.state.gameHTML != null) ? this.state.gameHTML : <span className="Loading"> Loading Games...</span>}

     <div className = "TagLine">
     <a href = "https://github.com/ConalCosgrove/react-nfl-website"><h3>Made with React by Conal {"<"}3 </h3></a>
     <img src = {logo} className = "App-logo" alt = "logo"/> 
     </div>
     </div>
     );
  }
}

export default App;