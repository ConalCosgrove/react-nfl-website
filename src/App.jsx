import React, { Component } from 'react';
import axios from 'axios';
import octocat from './images/octocat.png';
import Match from './components/Match';
import NFL from './images/NFL.svg';
import './App.css';

class App extends Component {
  static parseDate(date) {
    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6, 8);
    return { year, month, day };
  }

  constructor() {
    super();
    this.makeRequest = this.makeRequest.bind(this);
    this.refreshClick = this.refreshClick.bind(this);
    this.populateMatches = this.populateMatches.bind(this);
    this.state = {
      switched: false,
      games: {},
      gameHTML: <span className="Loading"> Loading Games...</span>,
    };
  }

  componentWillUnmount(){
    this.isCancelled = true;
  }

  componentDidMount() {
    this.makeRequest('https://nfl-app-backend.herokuapp.com/scoreJSON');
    this.populateMatches();
  }

  refreshClick() {
    const { switched } = this.state;
    if (!switched) {
      this.makeRequest('https://nfl-app-backend.herokuapp.com/fakescoreJSON');
      this.setState({ switched: true });
    } else {
      this.makeRequest('https://nfl-app-backend.herokuapp.com/scoreJSON');
      this.setState({ switched: false });
    }
    this.populateMatches();
  }

  populateMatches() {
    const arr = [];
    const { games } = this.state;
    const gameKeys = Object.keys(games);
    // eslint-disable-next-line
    for (let key in gameKeys){
      if (gameKeys[key] !== 'nextupdate') {
        arr.push(games[gameKeys[key]]);
      }
    }
    this.setState(
      {
        gameHTML:
        // eslint-disable-next-line
        <div className="Matches-Holder">
          {
            arr.map((item, index) => {
              let match;
              const date = App.parseDate(gameKeys[index]);
              const stringDate = `${date.day} - ${date.month} - ${date.year.substring(2, 4)}`;
              const today = new Date();
              if ((today.getMonth() >= date.month
                && today.getDate() >= date.day
                && ((1900 + today.getYear()) === date.year))
                  || (1900 + today.getYear()) >= date.year) {
                match = (
                  <Match
                    key={item.away.abbr}
                    team1={`${item.home.abbr}.svg`}
                    team2={`${item.away.abbr}.svg`}
                    team1score={item.home.score.T}
                    team2score={item.away.score.T}
                    clock={item.clock}
                    quarter={item.qtr}
                    date={stringDate}
                    stadium={item.stadium}
                    team1Name={item.home.abbr}
                    team2Name={item.away.abbr}
                  />
                );
              } else {
                match = (
                  <Match
                    key={item.away.abbr}
                    team1={`${item.home.abbr}.svg`}
                    team2={`${item.away.abbr}.svg`}
                    team1score={0}
                    team2score={0}
                    date={stringDate}
                    stadium={item.stadium}
                  />
                );
              }
              return match;
            })
          }
        </div>,
      },
    );
  }

  makeRequest(url) {
    axios.get(url)
      .then((response) => {
        if (!this.isCancelled) {
          this.setState({ games: response.data });
          this.populateMatches();
        }
      })
      .catch(() => {
        !this.isCancelled && this.setState({ gameHTML: <span className="Loading"> Error: failed to load match data</span> });
      });
  }

  render() {
    const { gameHTML } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={NFL} className="Top-logo" alt="logo" onClick={this.refreshClick} />
        </header>
        { gameHTML }
        <div className="TagLine">
          {/* <h3>Made with React by Conal {"<"}3 </h3> */}
          <a href="https://github.com/ConalCosgrove/react-nfl-website">
            <img src={octocat} className="App-logo" alt="logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
