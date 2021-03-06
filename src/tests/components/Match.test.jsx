import React from 'react';
import ReactDOM from 'react-dom';
import Match from '../../components/Match';

it('renders with all props without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Match    
                    stadium="Test Stadium" 
                    date={new Date()} 
                    team1="NE.svg" 
                    team2="PHI.svg" 
                    team1Name="Patriots" 
                    team2Name="Philly"
                    quarter="3"
                    team1score={50}
                    team2score={7}
                    clock="12:15"
                />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without quarter prop without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Match    
                      stadium="Test Stadium" 
                      date={new Date()} 
                      team1="NE.svg" 
                      team2="PHI.svg" 
                      team1Name="Patriots" 
                      team2Name="Philly"
                      team1score={50}
                      team2score={7}
                      quarter={null}
                      clock="12:15"
                  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without team score props without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Match    
                      stadium="Test Stadium" 
                      date={new Date()}
                      team1="NE.svg" 
                      team2="PHI.svg" 
                      team1score={null}
                      team2score={null}
                      team1Name="Patriots" 
                      team2Name="Philly"
                      quarter="3"
                      clock="12:15"
                  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without team score 1 prop without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Match    
                      stadium="Test Stadium" 
                      date={new Date()} 
                      team1="NE.svg" 
                      team2="PHI.svg" 
                      team1Name="Patriots" 
                      team2Name="Philly"
                      team2score={7}
                      quarter="3"
                      clock="12:15"
                  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders without team score 2 without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Match    
                      stadium="Test Stadium" 
                      date={new Date()} 
                      team1="NE.svg" 
                      team2="PHI.svg" 
                      team1Name="Patriots" 
                      team2Name="Philly"
                      team1score={7}
                      quarter="3"
                      clock="12:15"
                  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without clock prop without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Match    
                      stadium="Test Stadium" 
                      date={new Date()}
                      team1="NE.svg" 
                      team2="PHI.svg" 
                      team1Name="Patriots" 
                      team2Name="Philly"
                      team2score={7}
                      quarter="3"
                      clock="12:15"
                  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  