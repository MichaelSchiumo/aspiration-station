import React from 'react';
import W3 from './W3.css'
import NavBar from './components/NavBar';
import Home from './components/Home'
// import Dreamer from './components/Dreamer'
import DreamersContainer from './containers/DreamersContainer'
import DreamerInput from './forms/DreamerInput'
// import Dreamers from './components/Dreamers'
import AspirationsContainer from './containers/AspirationsContainer';
import Aspirations from './components/Aspirations';
import Aspiration from './components/Aspiration';
import AspirationInput from './forms/AspirationInput'
import QuotesContainer from './containers/QuotesContainer';
import Quotes from './components/Quotes';
import Quote from './components/Quote'
import QuoteInput from './forms/QuoteInput';
import { Router, Route, withRouter} from 'react-router-dom';
import About from './components/About';
import './App.css';

// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();




function App() {

  return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/about'} component={About} />
          <Route exact path={'/dreamers/new'} component={DreamerInput} />
          <Route exact path={'/dreamers'} component={DreamersContainer} />
          <Route exact path={'/quotes/new'} component={QuoteInput} />
          <Route exact path={'/quotes'} component={Quotes} />
          <Route exact path={'/quote/:id'} component={Quote} />
          <Route exact path={'/aspirations'} component={Aspirations} />
          <Route exact path={'/aspiration/:id'} component={Aspiration} />
          <Route exact path={'/aspirations/new'} component={AspirationInput} />
        </header>
    </div>

  );
}

export default withRouter(App);


//add routes
//router gives access to history component
//pass history to component that renders delete (aspiration)
