import React from 'react';
import ReactDOM from 'react-dom';
import { ReduxProvider } from 'react-redux';
import App from './components/App';
import './index.css';

// simple webserver
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore } from 'redux';
import gameStore from './reducers';

// create game store, with redux debug tools hook
const store = createStore(gameStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <ReduxProvider store={store}>
    <App store={ store }/>
  </ReduxProvider>, document.getElementById('root'));

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

registerServiceWorker();
