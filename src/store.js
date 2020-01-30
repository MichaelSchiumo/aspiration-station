// import { createStore } from 'redux';
// import rootReducer from './root-reducer';
import manageAspirations from './reducers/manageAspirations'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import manageDreamers from './reducers/manageDreamers';
import manageQuotes from './reducers/manageQuotes'
// export combineReducers({aspirations: manageAspirations})
// export default createStore(dreamerReducer);

const reducer = combineReducers({aspirations: manageAspirations, dreamers: manageDreamers, quotes: manageQuotes, , songs: manageSongs})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

//combine reducers
export default store;
