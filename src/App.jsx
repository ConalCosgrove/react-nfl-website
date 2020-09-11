import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import octocat from './images/octocat.png';
import MatchesHolder from './MatchesHolder';
import NFL from './images/NFL.svg';
import './App.css';
const url = process.env.BACKEND_URL || 'http://localhost:8000';

function App() {

  const {isLoading, error, data } = useQuery('gameData', () => axios.get(`${url}/scoreJSON`));
      
  return (
    <div className="App">
      <header className="App-header">
        <img src={NFL} className="Top-logo" alt="logo" />
      </header>
      {isLoading && <div> Loading Matches </div>}
      {!isLoading && !error && <MatchesHolder matches={data.data}/>}
      <div className="TagLine">
        {/* <h3>Made with React by Conal {"<"}3 </h3> */}
        <a href="https://github.com/ConalCosgrove/react-nfl-website">
          <img src={octocat} className="App-logo" alt="logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
