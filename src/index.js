import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import './voyager.css';
import './animate.css';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './Objects/localStorage';
import {saveStateOn,debugMode} from './components/Constants';
import throttle from 'lodash/throttle';

//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const loggerMiddleware = createLogger()
var persistedState = {};

if (debugMode) {persistedState=loadState();}


const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
    )
);

if (saveStateOn) {

   
    store.subscribe(() => { 
        saveState( store.getState());
     
    });
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </Provider>,

    rootElement);

registerServiceWorker();
