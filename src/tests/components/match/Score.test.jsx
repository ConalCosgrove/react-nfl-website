import React from 'react';
import ReactDOM from 'react-dom';
import Score from '../../../components/match/Score';

it('renders without crashing, when props provided', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Score team1score={50} team2score={14}/>,div);
});

it('renders without crashing when props not provided', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Score/>,div);
});