import React from 'react';
import ReactDOM from 'react-dom';
import RightTeam from '../../../components/match/RightTeam';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RightTeam teamName="New England" pic="NE.svg"/>,div);
});