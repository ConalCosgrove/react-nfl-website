import React, { Component } from 'react';
import logo from "./images/logo.svg"
import Match from './components/Match.js'
import axios from 'axios'
import './App.css';
import PHI from './images/PHI.svg';

class App extends Component {
  constructor(){
    super()
    this.refreshClick =this.refreshClick.bind(this)
    this.getMatches = this.getMatches.bind(this)
    this.state = {
      switched: false,
      games: {},
      gameHTML : null
    }

    axios.get('http://www.nfl.com/liveupdate/scores/scores.json')
    .then(response => {
      this.state.games = response.data;
      this.getMatches();

    }).catch((err)=> {
      this.setState({gameHTML: <span className="Loading"> Error: failed to load match data</span>})
    });
  }

  refreshClick(){

          if(!this.state.switched){
           
            this.setState({games:{"0":{
                                "home":{"abbr":"PHI","score":{"T":"51"}},
                                "away":{"abbr":"GB","score":{"T":"10"}},
                                "qtr":"Final","clock":"13:12"
                            },
                            "1":{
                                "home":{"abbr":"LA","score":{"T":"51"}},
                                "away":{"abbr":"TEN","score":{"T":"10"}},
                                "qtr":"Final","clock":"13:12"
                            },
                            "2":{
                                "home":{"abbr":"JAX","score":{"T":"51"}},
                                "away":{"abbr":"LAC","score":{"T":"10"}},
                                "qtr":"Final","clock":"13:12"
                            },
                            "3":{
                                "home":{"abbr":"CIN","score":{"T":"51"}},
                                "away":{"abbr":"KC","score":{"T":"10"}},
                                "qtr":"Final","clock":"13:12"
                            },
                            "4":{
                                "home":{"abbr":"CLE","score":{"T":"51"}},
                                "away":{"abbr":"IND","score":{"T":"10"}},
                                "qtr":"Final","clock":"13:12"
                            },
                            "5":{
                                "home":{"abbr":"NYG","score":{"T":"51"}},
                                "away":{"abbr":"PIT","score":{"T":"10"}},
                                "qtr":"Final","clock":"13:12"
                            },
                            "6":{
                                "home":{"abbr":"SF","score":{"T":"51"}},
                                "away":{"abbr":"NYJ","score":{"T":"10"}},
                                "qtr":"Final","clock":"13:12"
                            },
                            "7":{
                                "home":{"abbr":"HOU","score":{"T":"51"}},
                                "away":{"abbr":"MIA","score":{"T":"10"}},
                                "qtr":"Final","clock":"13:12"
                            },
                            "8":{
                                "home":{"abbr":"MIN","score":{"T":"29"}},
                                "away":{"abbr":"NO","score":{"T":"24"}},
                                "qtr":"4","clock":"00:00"
                            }
                          },
                          switched:true
                        }, this.getMatches)
                        console.log(this.state.games)
                        this.getMatches()
             
                
          }else{
                axios.get('https://nfl-app-backend.herokuapp.com/scoreJSON')
                          .then(response => {
                                this.setState({games:response.data})
                                this.getMatches();

                }).catch((err)=> {
                  this.setState({gameHTML: <span className="Loading"> Error: failed to load match data</span>})
                });
                this.setState({switched:false})
          }
          this.getMatches();

  }

  getMatches(){
    var arr = [];
    var gameKeys = Object.keys(this.state.games);

    for (var key in gameKeys){
      if(gameKeys[key] !== 'nextupdate'){
        arr.push(this.state.games[gameKeys[key]]);
      }
    }
    this.setState(	{gameHTML: 	<div className = "Matches-Holder"> 
    								{arr.map(item => 
    									<Match key={item.away.abbr} team1={item.home.abbr + ".svg"} team2={item.away.abbr + ".svg"} team1score={item.home.score.T} team2score={item.away.score.T} clock={item.clock} quarter={item.qtr}/>
    								)}
    							</div>
    				}) 
    }

  render() {


    return (
      
    	<div className="App">

        	<header className="App-header">
          		<img src={PHI} className="Top-logo" alt="logo" onClick={this.refreshClick} />
        	</header>
          
        	{(this.state.gameHTML != null) ? this.state.gameHTML : <span className="Loading"> Loading Games...<small className = "Smol"> (If you see this screen for a long time, try running unsafe scripts in right of your url bar) </small> </span>}

	    	<div className = "TagLine">
	      		<a href = "https://github.com/ConalCosgrove/react-nfl-website"><h3>Made with React by Conal {"<"}3 </h3></a>
	        	<img src = {logo} className = "App-logo" alt = "logo"/> 
	    	</div>
      	</div>
    );
  }
}

export default App;