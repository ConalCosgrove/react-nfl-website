import React, {Component} from 'React';
import Match from './components/Match';
import parseDate from './helpers';
class MatchesHolder extends Component {
    constructor() {

    }

    render(){
        <div className="Matches-Holder">
                {
                    this.props.arr.map((item, index) => {
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
                </div>
            }

}

export default MatchesHolder;