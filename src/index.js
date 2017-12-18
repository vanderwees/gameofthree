import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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
  <Provider store={store}>
    <App store={ store }/>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
