import React from 'react';
import AspirationsContainer from './AspirationsContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';




function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
          <AspirationsContainer />
      </header>
    </div>
  </ Router>
  );
}

export default App;


//add routes
//router gives access to history component
//pass history to component that renders delete (aspiration)
