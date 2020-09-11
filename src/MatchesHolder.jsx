import React from 'react';
import Match from './components/Match';
function createMatches(props) {
    const matches = props.matches ? props.matches : [];
    return (
    matches.map((item) => {
        let match;
        const date = new Date(item.gameTime);
        const today = new Date();
        if (today.toISOString() >= date.toISOString()) {
            match = (
            <Match
                key={item.awayTeam.abbreviation}
                team1={`${item.homeTeam.abbreviation}.svg`}
                team2={`${item.awayTeam.abbreviation}.svg`}
                team1score={item.homeTeam?.score?.T}
                team2score={item.awayTeam?.score?.T}
                down={item.down}
                yards={item.togo}
                fieldPos={item.yl}
                note={item.note}
                possession={item.posteam}
                clock={item.clock}
                quarter={item.qtr}
                date={date}
                stadium={item.venue.displayName}
                team1Name={item.homeTeam.abbreviation}
                team2Name={item.awayTeam.abbreviation}
            />
            );
        } else {
            match = (
            <Match
                key={item.awayTeam.abbreviation}
                team1={`${item.homeTeam.abbreviation}.svg`}
                team2={`${item.awayTeam.abbreviation}.svg`}
                team1score={0}
                team2score={0}
                date={date}
                stadium={item.venue.displayName}
                team1Name={item.homeTeam.abbreviation}
                team2Name={item.awayTeam.abbreviation}
            />
            );
        }
        return match;
        })
    )
}
function MatchesHolder(props) {
    return (
        <div className="Matches-Holder">
            {createMatches(props)}
        </div> 
        );
}

export default MatchesHolder;