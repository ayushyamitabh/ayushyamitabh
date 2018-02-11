import React from 'react';
import ReactDOM from 'react-dom';
import App from './redesign/App';
import Projects from './redesign/Projects';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCAZS-14yDcR8its35FkTa-qASjjC6cy-8",
    authDomain: "ayushyamitabh-3c202.firebaseapp.com",
    databaseURL: "https://ayushyamitabh-3c202.firebaseio.com",
    projectId: "ayushyamitabh-3c202",
    storageBucket: "ayushyamitabh-3c202.appspot.com",
    messagingSenderId: "423859419654"
  };
firebase.initializeApp(config);

injectTapEventPlugin();
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Projects />, document.getElementById('projects'));
registerServiceWorker();
