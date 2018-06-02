import React, { Component } from 'react';
import octocat from "./images/octocat.png";
import Match from './components/Match.js'
import axios from 'axios'
import './App.css';
import NFL from './images/NFL.svg';

class App extends Component {
  constructor(){
    super()
    this.makeRequest = this.makeRequest.bind(this)
    this.refreshClick =this.refreshClick.bind(this)
    this.populateMatches = this.populateMatches.bind(this)
    this.state = {
     
      switched: false,
      games: {},
      gameHTML : <span className="Loading"> Loading Games...</span>
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
    	this.parseDate(gameKeys[key])
      if(gameKeys[key] !== 'nextupdate'){
        arr.push(this.state.games[gameKeys[key]]);
      }
    }
    this.setState(	{gameHTML: 	<div className = "Matches-Holder"> 
      {arr.map((item,index) => {
      		var match;
      		var date = this.parseDate(gameKeys[index])
      		var stringDate = date["day"] + " - " + date["month"] + " - " + date["year"].substring(2,4)
      		var today = new Date()
      		// eslint-disable-next-line
          if((today.getMonth() >= date["month"] 
              && today.getDate() >= date["day"] 
              && ((1900+today.getYear()) == date["year"]))
                || (1900 +today.getYear()) >= date["year"]){

      			match = <Match key={item.away.abbr} team1={item.home.abbr + ".svg"} team2={item.away.abbr + ".svg"} 
                                team1score={item.home.score.T} team2score={item.away.score.T} clock={item.clock} 
                                quarter={item.qtr} date = {stringDate} stadium = {item.stadium}
                    />
   			}else{
 				  match = <Match key={item.away.abbr} team1={item.home.abbr + ".svg"} team2={item.away.abbr + ".svg"} 
		      team1score={0} team2score={0} date = {stringDate} stadium = {item.stadium}/>;

   			}
   			return match;
   		}
     )}

      </div>
    }) 
  }

  parseDate(date){
  	var year = date.substring(0,4)
  	var month = date.substring(4,6)
  	var day = date.substring(6,8)
  	return {"year":year,"month":month,"day":day}
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
     <img src={NFL} className="Top-logo" alt="logo" onClick={this.refreshClick} />
     </header>

     {this.state.gameHTML}

     <div className = "TagLine">
     {/* <h3>Made with React by Conal {"<"}3 </h3> */}
     <a href = "https://github.com/ConalCosgrove/react-nfl-website"><img src = {octocat} className = "App-logo" alt = "logo"/></a>
     </div>
     </div>
     );
  }
}

export default App;