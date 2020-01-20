import React from 'react';
import NavBar from './NavBar';
import AspirationsContainer from './AspirationsContainer';
import Aspirations from './Aspirations';
import Aspiration from './Aspiration';
import AspirationInput from './AspirationInput'
import { Router, Route} from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa'
import './App.css';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();







function App() {

  return (
    <Router history={history}>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Route exact path={'/'} component={AspirationsContainer} />
          <Route exact path={'/aspirations'} component={Aspirations} />
          <Route exact path={'/aspiration/:id'} component={Aspiration} />
          <Route exact path={'/aspirations/new'} component={AspirationInput} />
        </header>
    </div>
  </ Router>
  );
}

export default App;


//add routes
//router gives access to history component
//pass history to component that renders delete (aspiration)
