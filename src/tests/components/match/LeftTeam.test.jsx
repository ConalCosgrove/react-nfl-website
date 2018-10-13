import React from 'react';
import ReactDOM from 'react-dom';
import LeftTeam from '../../../components/match/LeftTeam';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LeftTeam teamName="Jacksonville" pic="JAX.svg"/>,div);
});